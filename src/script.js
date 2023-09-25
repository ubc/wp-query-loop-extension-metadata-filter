const { createHigherOrderComponent } = wp.compose;
const { Fragment, useEffect, useState } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, ToggleControl, PanelRow, SelectControl, Button, __experimentalHeading } = wp.components;
const Heading = __experimentalHeading;
import { MetaQueryControl } from './components';
import { cloneDeep } from 'lodash';

/**
 * Add additional attributes to core/post-query block.
 */
function addAdditionalAttribute( settings, name ) {
    if ( 'core/query' !== name ) {
        return settings;
    }

    return {
        ...settings,
        attributes: {
            ...settings.attributes,
            enableMetaFilter: {
                type: 'boolean',
                default: false
            }
        }
    }
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'query-block-extension/metadata/filter/add-attributes',
    addAdditionalAttribute
);

/**
 * Add additional controls to core/post-template block.
 */
const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { name, attributes, setAttributes } = props;
        const { enableMetaFilter, query } = attributes;
        const [ metaKeys, setMetaKeys ] = useState([]);

        if( 'core/query' !== name ) {
            return <BlockEdit { ...props } />;
        }
    
        useEffect(() => {
            const metaKeys = async() => {
    
                const data = new FormData();
    
                data.append( 'action', 'metadata_filter_get_meta_keys' );
                data.append( 'nonce', wp_query_block_metadata_filter.nonce );
            
                const response = await fetch( ajaxurl, {
                  method: "POST",
                  credentials: 'same-origin',
                  body: data
                } );
                const responseJson = await response.json();
                
                if( responseJson.success ) {
                    setMetaKeys( responseJson.data );
                }
            };
    
            metaKeys();
        }, []);

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody title="Metadata Filter" initialOpen={ false }>
                        { metaKeys.length > 0 ? (
                            <Fragment>
                                <PanelRow>
                                    <ToggleControl
                                        label="Enable Metadata Filter"
                                        checked={ enableMetaFilter }
                                        onChange={ () => {
                                            const { ['metaQuery']: remove, ...rest } = query;
                                            setAttributes( {
                                                enableMetaFilter: ! enableMetaFilter,
                                                query: ! enableMetaFilter ? {
                                                    ...query,
                                                    metaQuery: {
                                                        relation: 'AND',
                                                        innerQueries: [
                                                            {
                                                                key: metaKeys[0],
                                                                value: '',
                                                                compare: '=',
                                                                type: 'CHAR'
                                                            }
                                                        ]
                                                    }
                                                } : rest
                                            });
                                        } }
                                    />
                                </PanelRow>
                                { enableMetaFilter ? (
                                    <Fragment>
                                        { 1 >= query.metaQuery.innerQueries.length ? null : (
                                            <SelectControl
                                                label="Inner Queries Relation"
                                                value={ query.metaQuery.relation }
                                                options={ [
                                                    { label: 'AND', value: 'AND' },
                                                    { label: 'OR', value: 'OR' }
                                                ] }
                                                onChange={ ( newRelation ) => {
                                                    setAttributes({
                                                        query: {
                                                            ...query,
                                                            metaQuery: {
                                                                ...query.metaQuery,
                                                                relation: newRelation
                                                            }
                                                        }
                                                    });
                                                }}
                                                __nextHasNoMarginBottom
                                            />
                                        ) }
                                        <Heading>Inner Queries</Heading>
                                        { query.metaQuery.innerQueries.map( ( innerQuery, index ) => {
                                            return (
                                                <Fragment>
                                                    <hr />
                                                    <MetaQueryControl
                                                        metaKey={ innerQuery.key }
                                                        metaValue={ innerQuery.value }
                                                        compare={ innerQuery.compare }
                                                        type={ innerQuery.type }
                                                        setKey={ key => {
                                                            let temp = cloneDeep(query.metaQuery.innerQueries);
                                                            temp[index].key = key;

                                                            setAttributes({
                                                                query: {
                                                                    ...query,
                                                                    metaQuery: {
                                                                        ...query.metaQuery,
                                                                        innerQueries: temp
                                                                    }
                                                                }
                                                            });
                                                        }}
                                                        setValue={ value => {
                                                            let temp = cloneDeep(query.metaQuery.innerQueries);
                                                            temp[index].value = value;
                                                
                                                            setAttributes({
                                                                query: {
                                                                    ...query,
                                                                    metaQuery: {
                                                                        ...query.metaQuery,
                                                                        innerQueries: temp
                                                                    }
                                                                }
                                                            });
                                                        }}
                                                        setType={ type => {
                                                            let temp = cloneDeep(query.metaQuery.innerQueries);
                                                            temp[index].type = type;
                                                
                                                            setAttributes({
                                                                query: {
                                                                    ...query,
                                                                    metaQuery: {
                                                                        ...query.metaQuery,
                                                                        innerQueries: temp
                                                                    }
                                                                }
                                                            });
                                                        }}
                                                        setCompare={ compare => {
                                                            let temp = cloneDeep(query.metaQuery.innerQueries);
                                                            temp[index].compare = compare;
                                                
                                                            setAttributes({
                                                                query: {
                                                                    ...query,
                                                                    metaQuery: {
                                                                        ...query.metaQuery,
                                                                        innerQueries: temp
                                                                    }
                                                                }
                                                            });
                                                        }}
                                                        isLast={ 1 >= query.metaQuery.innerQueries.length }
                                                        onDelete={() => {
                                                            setAttributes({
                                                                query: {
                                                                    ...query,
                                                                    metaQuery: {
                                                                        ...query.metaQuery,
                                                                        innerQueries: query.metaQuery.innerQueries.filter( (q, qIndex) => {
                                                                            return index !== qIndex;
                                                                        })
                                                                    }
                                                                }
                                                            });
                                                        }}
                                                        metaKeys={ metaKeys }
                                                    />
                                                </Fragment>
                                            );
                                        }) }
                                        <hr />
                                        <Button
                                            variant="secondary"
                                            onClick={() => {
                                                setAttributes({
                                                    query: {
                                                        ...query,
                                                        metaQuery: {
                                                            ...query.metaQuery,
                                                            innerQueries: [
                                                                ...query.metaQuery.innerQueries,
                                                                {
                                                                    key: metaKeys[0],
                                                                    value: '',
                                                                    compare: '=',
                                                                    type: 'CHAR'
                                                                }
                                                            ]
                                                        }
                                                    }
                                                });
                                            }}
                                        >Add Inner Query</Button>
                                    </Fragment>
                                ) : null }
                            </Fragment>
                        ) : (
                            <p>No post meta key detected on your site</p>
                        ) }
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withInspectorControl' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'query-block-extension/metadata/filter/add-controls',
    withInspectorControls
);