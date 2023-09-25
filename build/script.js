/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaQueryControl": function() { return /* binding */ MetaQueryControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  TextControl,
  SelectControl,
  Button
} = wp.components;
const {
  Fragment
} = wp.element;
const MetaQueryControl = props => {
  const {
    metaKey,
    metaValue,
    compare,
    type,
    setKey,
    setValue,
    setCompare,
    setType,
    onDelete,
    isLast,
    metaKeys
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: "Meta Key",
    value: metaKey,
    options: metaKeys.map(key => {
      return {
        label: key,
        value: key
      };
    }),
    onChange: newKey => {
      setKey(newKey);
    },
    __nextHasNoMarginBottom: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: "Meta Value",
    value: metaValue,
    onChange: value => {
      setValue(value);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: "Compare",
    value: compare,
    options: [{
      label: 'Equal',
      value: '='
    }, {
      label: 'Not equal',
      value: '!='
    }, {
      label: 'Greater than',
      value: '>'
    }, {
      label: 'Greater than or equal to',
      value: '>='
    }, {
      label: 'Less than',
      value: '<'
    }, {
      label: 'Less than or equal to',
      value: '<='
    }],
    onChange: newCompare => {
      setCompare(newCompare);
    },
    __nextHasNoMarginBottom: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: "Type",
    value: type,
    options: [{
      label: 'Text',
      value: 'CHAR'
    }, {
      label: 'Numeric',
      value: 'NUMERIC'
    }, {
      label: 'Binary',
      value: 'BINARY'
    }, {
      label: 'Date',
      value: 'DATE'
    }, {
      label: 'Time',
      value: 'TIME'
    }, {
      label: 'DateTime',
      value: 'DATETIME'
    }, {
      label: 'Decimal',
      value: 'DECIMAL'
    }, {
      label: 'Signed',
      value: 'SIGNED'
    }, {
      label: 'Unsigned',
      value: 'UNSIGNED'
    }],
    onChange: newType => {
      setType(newType);
    }
  }), isLast ? null : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    onClick: () => {
      onDelete();
    },
    variant: "secondary"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
  }))));
};

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment,
  useEffect,
  useState
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  PanelRow,
  SelectControl,
  Button,
  __experimentalHeading
} = wp.components;
const Heading = __experimentalHeading;



/**
 * Add additional attributes to core/post-query block.
 */
function addAdditionalAttribute(settings, name) {
  if ('core/query' !== name) {
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
  };
}
wp.hooks.addFilter('blocks.registerBlockType', 'query-block-extension/metadata/filter/add-attributes', addAdditionalAttribute);

/**
 * Add additional controls to core/post-template block.
 */
const withInspectorControls = createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      name,
      attributes,
      setAttributes
    } = props;
    const {
      enableMetaFilter,
      query
    } = attributes;
    const [metaKeys, setMetaKeys] = useState([]);
    if ('core/query' !== name) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }
    useEffect(() => {
      const metaKeys = async () => {
        const data = new FormData();
        data.append('action', 'metadata_filter_get_meta_keys');
        data.append('nonce', wp_query_block_metadata_filter.nonce);
        const response = await fetch(ajaxurl, {
          method: "POST",
          credentials: 'same-origin',
          body: data
        });
        const responseJson = await response.json();
        if (responseJson.success) {
          setMetaKeys(responseJson.data);
        }
      };
      metaKeys();
    }, []);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Metadata Filter",
      initialOpen: false
    }, metaKeys.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Enable Metadata Filter",
      checked: enableMetaFilter,
      onChange: () => {
        const {
          ['metaQuery']: remove,
          ...rest
        } = query;
        setAttributes({
          enableMetaFilter: !enableMetaFilter,
          query: !enableMetaFilter ? {
            ...query,
            metaQuery: {
              relation: 'AND',
              innerQueries: [{
                key: metaKeys[0],
                value: '',
                compare: '=',
                type: 'CHAR'
              }]
            }
          } : rest
        });
      }
    })), enableMetaFilter ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, 1 >= query.metaQuery.innerQueries.length ? null : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Inner Queries Relation",
      value: query.metaQuery.relation,
      options: [{
        label: 'AND',
        value: 'AND'
      }, {
        label: 'OR',
        value: 'OR'
      }],
      onChange: newRelation => {
        setAttributes({
          query: {
            ...query,
            metaQuery: {
              ...query.metaQuery,
              relation: newRelation
            }
          }
        });
      },
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Heading, null, "Inner Queries"), query.metaQuery.innerQueries.map((innerQuery, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_1__.MetaQueryControl, {
        metaKey: innerQuery.key,
        metaValue: innerQuery.value,
        compare: innerQuery.compare,
        type: innerQuery.type,
        setKey: key => {
          let temp = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(query.metaQuery.innerQueries);
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
        },
        setValue: value => {
          let temp = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(query.metaQuery.innerQueries);
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
        },
        setType: type => {
          let temp = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(query.metaQuery.innerQueries);
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
        },
        setCompare: compare => {
          let temp = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(query.metaQuery.innerQueries);
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
        },
        isLast: 1 >= query.metaQuery.innerQueries.length,
        onDelete: () => {
          setAttributes({
            query: {
              ...query,
              metaQuery: {
                ...query.metaQuery,
                innerQueries: query.metaQuery.innerQueries.filter((q, qIndex) => {
                  return index !== qIndex;
                })
              }
            }
          });
        },
        metaKeys: metaKeys
      }));
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      variant: "secondary",
      onClick: () => {
        setAttributes({
          query: {
            ...query,
            metaQuery: {
              ...query.metaQuery,
              innerQueries: [...query.metaQuery.innerQueries, {
                key: metaKeys[0],
                value: '',
                compare: '=',
                type: 'CHAR'
              }]
            }
          }
        });
      }
    }, "Add Inner Query")) : null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "No post meta key detected on your site"))));
  };
}, 'withInspectorControl');
wp.hooks.addFilter('editor.BlockEdit', 'query-block-extension/metadata/filter/add-controls', withInspectorControls);
}();
/******/ })()
;
//# sourceMappingURL=script.js.map