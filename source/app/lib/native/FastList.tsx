// app/lib/native/FastList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot32 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot34;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot34;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function renderDefaultEmpty() {
        var1 = null;
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function defaultRecyclerKey() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function getBatchSize(arg1) {
        var1 = global;
        var3 = var1.Math;
        var2 = var3.ceil;
        var4 = arg1;
        var1 = 4;
        var1 = var4 / var1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = ['manualRef', 'onScroll', 'onScrollEnd', 'onLayout', 'renderHeader', 'renderFooter', 'renderSection', 'renderItem', 'renderSectionFooter', 'getRecyclerKey', 'onEndReached', 'endReachedThreshold', 'headerSize', 'footerSize', 'sectionSize', 'sectionFooterSize', 'itemSize', 'sections', 'scrollPosValue', 'batchesToRender', 'optimizeListItemRender', 'initialScrollSection', 'initialScrollItem', 'initialScrollOrientation', 'initialScrollStart', 'getAnchorIdFromIndex', 'getAnchorIndexFromId', 'EXPERIMENTAL_enableAnchorWhileScrolling', 'chunkBase', 'disableContentWrappers', 'childrenWrapper', 'stickyHeaderFooter', 'stickySectionsVariant', 'persistantKeys', 'disableRecyclingOnFullCompute', 'disableLegacyGestureHandling', 'viewabilityConfig', 'onViewableItemsChanged', 'debugLayout', 'renderAccessory', 'removeClippedSubviews', 'inActionSheet'];
    var _closure1_slot3 = var1;
    var4 = global;
    var7 = var4.Object;
    var5 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var2);
    var7 = 0;
    var2 = var10[var7];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var10[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var10[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var10[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var10[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var10[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var10[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var5 = var10[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot11 = var2;
    var5 = 8;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var11 = var5.PixelRatio;
    var _closure1_slot12 = var11;
    var11 = var5.ScrollView;
    var _closure1_slot13 = var11;
    var11 = var5.StyleSheet;
    var5 = var5.findNodeHandle;
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var10[var5];
    var5 = var9.bind(var1)(var5);
    var11 = var5.jsxs;
    var _closure1_slot15 = var11;
    var11 = var5.jsx;
    var _closure1_slot16 = var11;
    var5 = var5.Fragment;
    var _closure1_slot17 = var5;
    var5 = {'top': 0, 'right': 0, 'left': 0, 'bottom': 0};
    var _closure1_slot18 = var5;
    var4 = var4.Map;
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var15 = var5;
    var4 = new var15[var4](var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot19 = var4;
    var5 = {};
    var4 = 'SPACER';
    var5['SPACER'] = var4;
    var4 = 'HEADER';
    var5['HEADER'] = var4;
    var4 = 'FOOTER';
    var5['FOOTER'] = var4;
    var4 = 'SECTION';
    var5['SECTION'] = var4;
    var4 = 'ITEM';
    var5['ITEM'] = var4;
    var4 = 'SECTION_FOOTER';
    var5['SECTION_FOOTER'] = var4;
    var _closure1_slot20 = var5;
    var4 = function() {
        var4 = function FastListItemRecycler(arg1) {
            var4 = arg1;
            var5 = this;
            var _closure3_slot0 = var5;
            var6 = _closure1_slot9;
            var3 = _closure2_slot0;
            var1 = undefined;
            var3 = var6.bind(var1)(var5, var3);
            var3 = {};
            var5['_items'] = var3;
            var3 = {};
            var5['_pendingItems'] = var3;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var4 = arg1;
                var5 = var4.type;
                var3 = var4.recyclerKey;
                var2 = _closure3_slot0;
                var1 = var2._itemsForType;
                var6 = var1.bind(var2)(var5);
                var5 = _closure1_slot8;
                var1 = undefined;
                var2 = 1;
                var5 = var5.bind(var1)(var6, var2);
                var2 = 0;
                var2 = var5[var2];
                var2[var3] = var4;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot10;
        var1 = {};
        var2 = '_itemsForType';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = arg1;
                var3 = this;
                var1 = var3._items;
                var2 = var1[var5];
                var4 = null;
                if(!(var4 == var2)) { _fun0005_ip = 37; continue _fun0005 }
 22:
                var6 = var3._items;
                var1 = {};
                var6[var5] = var1;
                var2 = var1;
 37:
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3._pendingItems;
                var2 = var2[var5];
                if(!(var4 == var2)) { _fun0005_ip = 76; continue _fun0005 }
 59:
                var4 = var3._pendingItems;
                var3 = new Array(0);
                var4[var5] = var3;
                var2 = var3;
 76:
                var1[1] = var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var8 = arg1;
                var7 = arguments[4];
                var6 = arguments[5];
                var3 = this;
                var5 = undefined;
                if(!(var7 === var5)) { _fun0006_ip = 20; continue _fun0006 }
 18:
                var7 = 0;
 20:
                if(!(var6 === var5)) { _fun0006_ip = 30; continue _fun0006 }
 24:
                var6 = -1;
 30:
                var1 = var3._itemsForType;
                var4 = var1.bind(var3)(var8);
                var2 = _closure1_slot8;
                var1 = 2;
                var2 = var2.bind(var5)(var4, var1);
                var1 = 0;
                var5 = var2[var1];
                var1 = 1;
                var4 = var2[var1];
                var2 = var3._get;
                var1 = {};
                var1['type'] = var8;
                var8 = arg2;
                var1['layoutStart'] = var8;
                var8 = arg3;
                var1['layoutSize'] = var8;
                var8 = arg4;
                var1['customKey'] = var8;
                var1['section'] = var7;
                var1['item'] = var6;
                var1['items'] = var5;
                var1['pendingItems'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = '_get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var9 = var1.type;
                var8 = var1.layoutStart;
                var7 = var1.layoutSize;
                var3 = var1.customKey;
                var6 = var1.section;
                var5 = var1.item;
                var2 = var1.items;
                var4 = var1.pendingItems;
                var1 = null;
                if(!(var1 == var3)) { _fun0007_ip = 94; continue _fun0007 }
 54:
                var10 = global;
                var10 = var10.HermesInternal;
                var12 = var10.concat;
                var18 = '';
                var10 = ':';
                var17 = var9;
                var16 = var10;
                var15 = var6;
                var14 = var10;
                var13 = var5;
                var3 = var18[var12](var17, var16, var15, var14, var13, var12);
 94:
                var10 = var2[var3];
                if(!(var1 != var10)) { _fun0007_ip = 144; continue _fun0007 }
 102:
                var1 = {};
                var17 = var1;
                var16 = var10;
                var10 = copyDataProperties(var17, var16);
                var1['layoutStart'] = var8;
                var1['layoutSize'] = var7;
                var1['section'] = var6;
                var1['item'] = var5;
                var2 = delete var2[var3];
                _fun0007_ip = 196; continue _fun0007;
 144:
                var2 = {};
                var2['type'] = var9;
                var9 = -1;
                var2['key'] = var9;
                var2['layoutStart'] = var8;
                var2['layoutSize'] = var7;
                var2['section'] = var6;
                var2['item'] = var5;
                var2['recyclerKey'] = var3;
                var3 = var4.push;
                var3 = var3.bind(var4)(var2);
                var1 = var2;
 196:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'fill';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 10;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.forEach;
            var3 = _closure1_slot20;
            var2 = function(arg1) {
                var6 = _closure3_slot0;
                var3 = var6._itemsForType;
                var1 = arg1;
                var5 = var3.bind(var6)(var1);
                var4 = _closure1_slot8;
                var1 = undefined;
                var3 = 2;
                var4 = var4.bind(var1)(var5, var3);
                var3 = 0;
                var5 = var4[var3];
                var3 = 1;
                var4 = var4[var3];
                var3 = var6._fill;
                var2 = _closure3_slot1;
                var2 = var3.bind(var6)(var5, var4, var2);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = '_fill';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = arg2;
                var _closure3_slot0 = var2;
                var1 = 0;
                var _closure3_slot1 = var1;
                var3 = arg3;
                if(var3) { _fun0008_ip = 65; continue _fun0008 }
 21:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 10;
                var4 = var4[var3];
                var3 = undefined;
                var7 = var5.bind(var3)(var4);
                var5 = var7.forEach;
                var4 = arg1;
                var3 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.key;
                        var4 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var1 = var4[var1];
                        var4 = null;
                        if(!(var4 != var1)) { _fun0009_ip = 50; continue _fun0009 }
 29:
                        var1['key'] = var3;
                        var1 = _closure3_slot1;
                        var1 = var1 + 1;
                        _closure3_slot1 = var1;
                        var1 = undefined;
                        return var1;
 50:
                        var1 = false;
                        return var1;
                    }
                };
                var3 = var5.bind(var7)(var4, var3);
 65:
                var4 = _closure3_slot1;
                var3 = var2.length;
                if(!(var4 < var3)) { _fun0008_ip = 134; continue _fun0008 }
 81:
                var3 = _closure3_slot1;
                var4 = var2[var3];
                var7 = _closure2_slot0;
                var3 = var7._LAST_KEY;
                var3 = var3 + 1;
                var7['_LAST_KEY'] = var3;
                var4['key'] = var3;
                var3 = _closure3_slot1;
                var4 = var3 + 1;
                _closure3_slot1 = var4;
                var3 = var2.length;
                if(var4 < var3) { _fun0008_ip = 81; continue _fun0008 }
 134:
                var2['length'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[4] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot21 = var4;
    var4['_LAST_KEY'] = var7;
    var4 = function() {
        var4 = _closure1_slot10;
        var3 = function FastListComputer(arg1) {
            var4 = arg1;
            var3 = this;
            var5 = _closure1_slot9;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var5 = 0;
            var3['chunkSize'] = var5;
            var2 = false;
            var3['uniform'] = var2;
            var6 = new Array(0);
            var3['dataCache'] = var6;
            var3['size'] = var5;
            var5 = true;
            var3['dirty'] = var5;
            var5 = -1;
            var3['lastStartChunk'] = var5;
            var3['lastEndChunk'] = var5;
            var5 = new Array(0);
            var3['items'] = var5;
            var5 = new Array(0);
            var3['persistantItemData'] = var5;
            var3['disableRecycling'] = var2;
            var3['props'] = var4;
            var2 = var3.updateProps;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'updateProps';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.dirty;
                var4 = !var3;
                var3 = !var4;
                if(!var4) { _fun0010_ip = 60; continue _fun0010 }
 21:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 11;
                var4 = var6[var4];
                var6 = undefined;
                var5 = var5.bind(var6)(var4);
                var4 = var2.props;
                var4 = var5.bind(var6)(var1, var4);
                var3 = !var4;
 60:
                var2['dirty'] = var3;
                var2['props'] = var1;
                var1 = var1.itemSize;
                var3 = 'number';
                var1 = typeof var1;
                var1 = var3 === var1;
                var2['uniform'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(17);
        var2[0] = var1;
        var1 = {};
        var6 = 'setInfo';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = this;
                var1 = global;
                var4 = var1.Math;
                var3 = var4.ceil;
                var5 = arg1;
                var1 = 4;
                var1 = var5 / var1;
                var1 = var3.bind(var4)(var1);
                var3 = var2.dirty;
                var4 = !var3;
                var3 = !var4;
                if(!var4) { _fun0011_ip = 57; continue _fun0011 }
 47:
                var4 = var2.chunkSize;
                var3 = var1 !== var4;
 57:
                var2['dirty'] = var3;
                var2['chunkSize'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getSizeForHeader';
        var1['key'] = var6;
        var6 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var1 = this;
                var1 = var1.props;
                var1 = var1.headerSize;
                var2 = undefined;
                var3 = 0;
                if(!(var2 !== var1)) { _fun0012_ip = 25; continue _fun0012 }
 22:
                var3 = var1;
 25:
                var5 = 'number';
                var4 = typeof var3;
                var1 = var3;
                if(!(var5 !== var4)) { _fun0012_ip = 43; continue _fun0012 }
 39:
                var1 = var3.bind(var2)();
 43:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getSizeForFooter';
        var1['key'] = var6;
        var6 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = this;
                var1 = var1.props;
                var1 = var1.footerSize;
                var2 = undefined;
                var3 = 0;
                if(!(var2 !== var1)) { _fun0013_ip = 25; continue _fun0013 }
 22:
                var3 = var1;
 25:
                var5 = 'number';
                var4 = typeof var3;
                var1 = var3;
                if(!(var5 !== var4)) { _fun0013_ip = 43; continue _fun0013 }
 39:
                var1 = var3.bind(var2)();
 43:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getSizeForSection';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var1 = this;
                var1 = var1.props;
                var1 = var1.sectionSize;
                var3 = undefined;
                var4 = 0;
                if(!(var3 !== var1)) { _fun0014_ip = 25; continue _fun0014 }
 22:
                var4 = var1;
 25:
                var5 = 'number';
                var2 = typeof var4;
                var1 = var4;
                if(!(var5 !== var2)) { _fun0014_ip = 47; continue _fun0014 }
 39:
                var2 = arg1;
                var1 = var4.bind(var3)(var2);
 47:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getSizeForItem';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = this;
                var1 = var1.props;
                var5 = var1.itemSize;
                var3 = 'number';
                var2 = typeof var5;
                var1 = var5;
                if(!(var3 !== var2)) { _fun0015_ip = 42; continue _fun0015 }
 28:
                var4 = undefined;
                var3 = arg1;
                var2 = arg2;
                var1 = var5.bind(var4)(var3, var2);
 42:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getSizeForSectionFooter';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = this;
                var1 = var1.props;
                var1 = var1.sectionFooterSize;
                var3 = undefined;
                var4 = 0;
                if(!(var3 !== var1)) { _fun0016_ip = 25; continue _fun0016 }
 22:
                var4 = var1;
 25:
                var5 = 'number';
                var2 = typeof var4;
                var1 = var4;
                if(!(var5 !== var2)) { _fun0016_ip = 47; continue _fun0016 }
 39:
                var2 = arg1;
                var1 = var4.bind(var3)(var2);
 47:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getChunk';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var9 = arg1;
                var1 = this;
                var8 = var1.dataCache;
                var2 = var8.length;
                var7 = 1;
                var6 = var2 - var7;
                var2 = var1.chunkCache;
                var5 = null;
                if(!(var5 != var2)) { _fun0017_ip = 66; continue _fun0017 }
 36:
                var2 = var1.chunkCache;
                var2 = var2.start;
                if(!(var9 >= var2)) { _fun0017_ip = 66; continue _fun0017 }
 51:
                var2 = var1.chunkCache;
                var2 = var2.end;
                if(!(!(var9 <= var2))) { _fun0017_ip = 168; continue _fun0017 }
 66:
                var3 = 2;
                var4 = 0;
                if(!(var4 <= var6)) { _fun0017_ip = 164; continue _fun0017 }
 75:
                var2 = var6 - var4;
                var2 = var2 / var3;
                var2 = var2 | 0;
                var11 = var4 + var2;
                var2 = var8[var11];
                if(!(var5 != var2)) { _fun0017_ip = 164; continue _fun0017 }
 98:
                var10 = var2.start;
                if(!(var9 >= var10)) { _fun0017_ip = 116; continue _fun0017 }
 107:
                var10 = var2.end;
                if(!(!(var9 <= var10))) { _fun0017_ip = 156; continue _fun0017 }
 116:
                var10 = var2.start;
                if(!(!(var9 < var10))) { _fun0017_ip = 140; continue _fun0017 }
 125:
                var10 = var2.end;
                if(!(var9 > var10)) { _fun0017_ip = 164; continue _fun0017 }
 134:
                var10 = var11 + var7;
                _fun0017_ip = 147; continue _fun0017;
 140:
                var6 = var11 - var7;
                var10 = var4;
 147:
                var4 = var10;
                if(var4 <= var6) { _fun0017_ip = 75; continue _fun0017 }
 154:
                _fun0017_ip = 164; continue _fun0017;
 156:
                var1['chunkCache'] = var2;
                return var2;
 164:
                var2 = undefined;
                return var2;
 168:
                var1 = var1.chunkCache;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'compute';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var8 = arg1;
                var13 = arg2;
                var1 = arguments[3];
                var3 = this;
                var _closure3_slot0 = var8;
                var _closure3_slot1 = var13;
                var12 = undefined;
                if(!(var1 === var12)) { _fun0018_ip = 30; continue _fun0018 }
 28:
                var1 = false;
 30:
                var _closure3_slot2 = var1;
                var _closure3_slot3 = var12;
                var _closure3_slot4 = var12;
                var _closure3_slot5 = var12;
                var _closure3_slot6 = var12;
                var28 = function addInitialSection(arg1, arg2, arg3, arg4) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var13 = arg1;
                        var4 = arg2;
                        var3 = arg3;
                        var5 = arg4;
                        var9 = _closure3_slot4;
                        var8 = var9.push;
                        var12 = _closure3_slot5;
                        var11 = var12.get;
                        var1 = _closure1_slot20;
                        var10 = var1.SECTION;
                        var14 = _closure3_slot3;
                        var7 = var1.SECTION;
                        var1 = undefined;
                        var17 = var14.bind(var1)(var7, var13);
                        var21 = var12;
                        var20 = var10;
                        var19 = var4;
                        var18 = var3;
                        var16 = var13;
                        var7 = var21[var11](var20, var19, var18, var17, var16, var15);
                        var7 = var8.bind(var9)(var7);
                        var10 = var4 + var3;
                        if(!(var10 < var5)) { _fun0019_ip = 162; continue _fun0019 }
 96:
                        var3 = _closure3_slot6;
                        var3 = var3 + 1;
                        _closure3_slot6 = var3;
                        var4 = _closure3_slot4;
                        var3 = var4.push;
                        var9 = _closure3_slot5;
                        var8 = var9.get;
                        var6 = _closure1_slot20;
                        var20 = var6.SPACER;
                        var18 = var5 - var10;
                        var15 = _closure3_slot6;
                        var16 = 0;
                        var21 = var9;
                        var19 = var10;
                        var17 = undefined;
                        var2 = var21[var8](var20, var19, var18, var17, var16, var15, var14);
                        var2 = var3.bind(var4)(var2);
 162:
                        return var1;
                    }
                };
                var27 = function isVisible(arg1, arg2) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var4 = arg1;
                        var1 = _closure3_slot2;
                        var1 = !var1;
                        if(var1) { _fun0020_ip = 45; continue _fun0020 }
 16:
                        var5 = _closure3_slot0;
                        var2 = arg2;
                        var2 = var5 - var2;
                        var2 = var4 >= var2;
                        if(!var2) { _fun0020_ip = 42; continue _fun0020 }
 34:
                        var3 = _closure3_slot1;
                        var2 = var4 < var3;
 42:
                        var1 = var2;
 45:
                        return var1;
                    }
                };
                var1 = var3.dirty;
                if(var1) { _fun0018_ip = 117; continue _fun0018 }
 69:
                var1 = var3.lastStartChunk;
                var7 = false;
                if(!(var8 === var1)) { _fun0018_ip = 129; continue _fun0018 }
 81:
                var1 = var3.lastEndChunk;
                var7 = false;
                if(!(var13 === var1)) { _fun0018_ip = 129; continue _fun0018 }
 93:
                var1 = {};
                var2 = var3.size;
                var1['size'] = var2;
                var2 = var3.items;
                var1['items'] = var2;
                return var1;
 117:
                var1 = var3.fullCompute;
                var1 = var1.bind(var3)();
                var7 = true;
 129:
                var1 = var3.props;
                var14 = var1.stickyHeaderFooter;
                var26 = var1.getRecyclerKey;
                if(!(var12 === var26)) { _fun0018_ip = 157; continue _fun0018 }
 150:
                var26 = _closure1_slot36;
 157:
                _closure3_slot3 = var26;
                var3['lastStartChunk'] = var8;
                var3['lastEndChunk'] = var13;
                var16 = global;
                var1 = var16.Map;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var63 = var2;
                var1 = new var63[var1](var62);
                var6 = var1 instanceof Object ? var1 : var2;
                var2 = _closure1_slot33;
                var1 = var3.persistantItemData;
                var5 = var2.bind(var12)(var1);
                var2 = var5.bind(var12)();
                var1 = var2.done;
                var15 = null;
                if(var1) { _fun0018_ip = 311; continue _fun0018 }
 233:
                var10 = var2.value;
                var17 = var10.type;
                var9 = var10.section;
                var19 = var10.type;
                var1 = _closure1_slot20;
                var18 = var1.ITEM;
                var1 = undefined;
                if(!(var19 === var18)) { _fun0018_ip = 274; continue _fun0018 }
 269:
                var1 = var10.item;
 274:
                var9 = var26.bind(var12)(var17, var9, var1);
                if(!(var15 != var9)) { _fun0018_ip = 296; continue _fun0018 }
 285:
                var1 = var6.set;
                var1 = var1.bind(var6)(var9, var10);
 296:
                var9 = var5.bind(var12)();
                var1 = var9.done;
                var2 = var9;
                if(!var1) { _fun0018_ip = 233; continue _fun0018 }
 311:
                var5 = var16.Math;
                var2 = var5.floor;
                var1 = var3.chunkSize;
                var1 = var8 / var1;
                var1 = var2.bind(var5)(var1);
                var8 = var16.Math;
                var5 = var8.max;
                var10 = var16.Math;
                var9 = var10.ceil;
                var2 = var3.chunkSize;
                var2 = var13 / var2;
                var2 = var9.bind(var10)(var2);
                var25 = var5.bind(var8)(var2, var1);
                var2 = var3.chunkSize;
                var24 = var1 * var2;
                var2 = new Array(0);
                var3['items'] = var2;
                _closure3_slot4 = var2;
                var9 = _closure1_slot21;
                var5 = var9.prototype;
                var8 = Object.create(var5, {constructor: {value: var9}});
                var62 = arg3;
                var63 = var8;
                var5 = new var63[var9](var62, var61);
                var5 = var5 instanceof Object ? var5 : var8;
                _closure3_slot5 = var5;
                var22 = {'initialSection': 4294967295, 'initialItem': 4294967295, 'lastSection': 4294967295, 'lastItem': 4294967295};
                var23 = -1;
                var10 = 0;
                _closure3_slot6 = var10;
                var4 = var16.Set;
                var8 = var4.prototype;
                var8 = Object.create(var8, {constructor: {value: var4}});
                var63 = var8;
                var4 = new var63[var4](var62);
                var4 = var4 instanceof Object ? var4 : var8;
                if(!(var1 <= var25)) { _fun0018_ip = 528; continue _fun0018 }
 493:
                var8 = var3.getChunk;
                var13 = var8.bind(var3)(var1);
                var8 = var1;
                if(!(var15 != var13)) { _fun0018_ip = 521; continue _fun0018 }
 511:
                var9 = var4.add;
                var9 = var9.bind(var4)(var13);
 521:
                var1 = var8 + 1;
                if(var1 <= var25) { _fun0018_ip = 493; continue _fun0018 }
 528:
                var1 = _closure1_slot33;
                var21 = var1.bind(var12)(var4);
                var4 = var21.bind(var12)();
                var1 = var4.done;
                var20 = var4;
                var19 = undefined;
                var18 = undefined;
                var17 = undefined;
                var13 = undefined;
                var9 = undefined;
                var8 = undefined;
                var4 = undefined;
                if(var1) { _fun0018_ip = 2257; continue _fun0018 }
 569:
                var1 = var20.value;
                var35 = var24;
                var33 = var17;
                var32 = var13;
                var31 = var9;
                var30 = var8;
                var29 = var4;
                if(!(var15 != var1)) { _fun0018_ip = 2221; continue _fun0018 }
 599:
                var34 = _closure1_slot33;
                var1 = var1.data;
                var41 = var34.bind(var12)(var1);
                var42 = var41.bind(var12)();
                var1 = var42.done;
                var40 = var24;
                var39 = var42;
                var38 = var13;
                var37 = var9;
                var36 = var8;
                var34 = var4;
                var35 = var40;
                var19 = var39;
                var18 = var41;
                var33 = var17;
                var32 = var38;
                var31 = var37;
                var30 = var36;
                var29 = var34;
                if(var1) { _fun0018_ip = 2221; continue _fun0018 }
 670:
                var46 = var39.value;
                var42 = var46.layoutStart;
                var1 = var46.layoutSize;
                var1 = var42 + var1;
                var48 = var40;
                var45 = var38;
                var44 = var37;
                var43 = var36;
                var42 = var34;
                if(!(!(var1 < var40))) { _fun0018_ip = 2164; continue _fun0018 }
 713:
                var47 = var46.type;
                var1 = _closure1_slot20;
                var1 = var1.HEADER;
                if(!(var1 !== var47)) { _fun0018_ip = 2069; continue _fun0018 }
 735:
                var1 = _closure1_slot20;
                var1 = var1.SECTION;
                if(!(var1 !== var47)) { _fun0018_ip = 1861; continue _fun0018 }
 752:
                var1 = _closure1_slot20;
                var1 = var1.ITEM;
                if(!(var1 !== var47)) { _fun0018_ip = 1097; continue _fun0018 }
 769:
                var1 = _closure1_slot20;
                var1 = var1.SECTION_FOOTER;
                if(!(var1 !== var47)) { _fun0018_ip = 918; continue _fun0018 }
 786:
                var1 = _closure1_slot20;
                var1 = var1.FOOTER;
                var48 = var40;
                var45 = var38;
                var44 = var37;
                var43 = var36;
                var42 = var34;
                if(!(var1 === var47)) { _fun0018_ip = 2164; continue _fun0018 }
 818:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var1 = var27.bind(var12)(var47, var1);
                if(!var1) { _fun0018_ip = 885; continue _fun0018 }
 839:
                var47 = var2.push;
                var51 = var5.get;
                var1 = _closure1_slot20;
                var62 = var1.FOOTER;
                var61 = var46.layoutStart;
                var60 = var46.layoutSize;
                var63 = var5;
                var59 = undefined;
                var1 = var63[var51](var62, var61, var60, var59, var58);
                var1 = var47.bind(var2)(var1);
 885:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var48 = var47 + var1;
                var45 = var38;
                var44 = var37;
                var43 = var36;
                var42 = var34;
                _fun0018_ip = 2164; continue _fun0018;
 918:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var1 = var27.bind(var12)(var47, var1);
                if(!var1) { _fun0018_ip = 1064; continue _fun0018 }
 942:
                var1 = var2.length;
                if(!(var10 === var1)) { _fun0018_ip = 992; continue _fun0018 }
 951:
                var62 = var46.section;
                var1 = var46.sectionData;
                var61 = var1.layoutStart;
                var1 = var46.sectionData;
                var60 = var1.layoutSize;
                var59 = var46.layoutStart;
                var63 = undefined;
                var1 = var63[var28](var62, var61, var60, var59, var58);
 992:
                var47 = var2.push;
                var53 = var5.get;
                var1 = _closure1_slot20;
                var52 = var1.SECTION_FOOTER;
                var51 = var46.layoutStart;
                var60 = var46.layoutSize;
                var49 = var1.SECTION_FOOTER;
                var1 = var46.section;
                var59 = var26.bind(var12)(var49, var1);
                var58 = var46.section;
                var63 = var5;
                var62 = var52;
                var61 = var51;
                var1 = var63[var53](var62, var61, var60, var59, var58, var57);
                var1 = var47.bind(var2)(var1);
 1064:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var48 = var47 + var1;
                var45 = var38;
                var44 = var37;
                var43 = var36;
                var42 = var34;
                _fun0018_ip = 2164; continue _fun0018;
 1097:
                var1 = var46.uniform;
                if(!(var15 != var1)) { _fun0018_ip = 1570; continue _fun0018 }
 1110:
                var1 = var46.layoutStart;
                var1 = var40 > var1;
                var51 = 0;
                if(!var1) { _fun0018_ip = 1162; continue _fun0018 }
 1125:
                var49 = var16.Math;
                var47 = var49.floor;
                var1 = var46.layoutStart;
                var50 = var40 - var1;
                var1 = var46.itemSize;
                var1 = var50 / var1;
                var51 = var47.bind(var49)(var1);
 1162:
                var47 = var46.layoutStart;
                var1 = var46.itemSize;
                var1 = var1 * var51;
                var52 = var47 + var1;
                var1 = var3.chunkSize;
                var1 = var25 * var1;
                var48 = var52;
                var45 = var38;
                var44 = var37;
                var43 = var51;
                var42 = var34;
                if(!(var52 < var1)) { _fun0018_ip = 2164; continue _fun0018 }
 1214:
                var1 = var46.items;
                var50 = var52;
                var49 = var51;
                var47 = var34;
                var48 = var50;
                var45 = var38;
                var44 = var37;
                var42 = var47;
                var43 = var49;
                if(!(var43 < var1)) { _fun0018_ip = 2164; continue _fun0018 }
 1251:
                var1 = var46.itemSize;
                var1 = var27.bind(var12)(var50, var1);
                var51 = var50;
                if(!var1) { _fun0018_ip = 1480; continue _fun0018 }
 1272:
                var1 = var2.length;
                if(!(var10 === var1)) { _fun0018_ip = 1319; continue _fun0018 }
 1281:
                var62 = var46.section;
                var1 = var46.sectionData;
                var61 = var1.layoutStart;
                var1 = var46.sectionData;
                var60 = var1.layoutSize;
                var63 = undefined;
                var59 = var51;
                var1 = var63[var28](var62, var61, var60, var59, var58);
 1319:
                var1 = var22.initialSection;
                if(!(var23 === var1)) { _fun0018_ip = 1340; continue _fun0018 }
 1329:
                var1 = var46.section;
                var22['initialSection'] = var1;
 1340:
                var1 = var22.initialItem;
                if(!(var23 === var1)) { _fun0018_ip = 1356; continue _fun0018 }
 1350:
                var22['initialItem'] = var49;
 1356:
                var1 = var46.section;
                var22['lastSection'] = var1;
                var22['lastItem'] = var49;
                var1 = _closure1_slot20;
                var52 = var1.ITEM;
                var1 = var46.section;
                var1 = var26.bind(var12)(var52, var1, var49);
                var52 = var15 != var1;
                if(!var52) { _fun0018_ip = 1412; continue _fun0018 }
 1402:
                var53 = var6.has;
                var52 = var53.bind(var6)(var1);
 1412:
                if(!var52) { _fun0018_ip = 1425; continue _fun0018 }
 1415:
                var52 = var6.delete;
                var52 = var52.bind(var6)(var1);
 1425:
                var53 = var2.push;
                var56 = var5.get;
                var52 = _closure1_slot20;
                var62 = var52.ITEM;
                var60 = var46.itemSize;
                var58 = var46.section;
                var63 = var5;
                var61 = var51;
                var59 = var1;
                var57 = var49;
                var52 = var63[var56](var62, var61, var60, var59, var58, var57, var56);
                var52 = var53.bind(var2)(var52);
                var47 = var1;
 1480:
                var1 = var46.itemSize;
                var53 = var51 + var1;
                var51 = var49 + 1;
                var1 = var3.chunkSize;
                var1 = var25 * var1;
                var52 = var47;
                var48 = var53;
                var45 = var38;
                var44 = var37;
                var43 = var51;
                var42 = var52;
                if(!(var53 < var1)) { _fun0018_ip = 2164; continue _fun0018 }
 1528:
                var1 = var46.items;
                var50 = var53;
                var49 = var51;
                var47 = var52;
                var48 = var50;
                var45 = var38;
                var44 = var37;
                var42 = var47;
                var43 = var49;
                if(var43 < var1) { _fun0018_ip = 1251; continue _fun0018 }
 1565:
                _fun0018_ip = 2164; continue _fun0018;
 1570:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var47 = var27.bind(var12)(var47, var1);
                var1 = var37;
                if(!var47) { _fun0018_ip = 1828; continue _fun0018 }
 1597:
                var47 = var2.length;
                if(!(var10 === var47)) { _fun0018_ip = 1647; continue _fun0018 }
 1606:
                var62 = var46.section;
                var47 = var46.sectionData;
                var61 = var47.layoutStart;
                var47 = var46.sectionData;
                var60 = var47.layoutSize;
                var59 = var46.layoutStart;
                var63 = undefined;
                var47 = var63[var28](var62, var61, var60, var59, var58);
 1647:
                var47 = var22.initialSection;
                if(!(var23 === var47)) { _fun0018_ip = 1668; continue _fun0018 }
 1657:
                var47 = var46.section;
                var22['initialSection'] = var47;
 1668:
                var47 = var22.initialItem;
                if(!(var23 === var47)) { _fun0018_ip = 1689; continue _fun0018 }
 1678:
                var47 = var46.item;
                var22['initialItem'] = var47;
 1689:
                var47 = var46.section;
                var22['lastSection'] = var47;
                var47 = var46.item;
                var22['lastItem'] = var47;
                var47 = _closure1_slot20;
                var50 = var47.ITEM;
                var49 = var46.section;
                var47 = var46.item;
                var47 = var26.bind(var12)(var50, var49, var47);
                var49 = var15 != var47;
                if(!var49) { _fun0018_ip = 1755; continue _fun0018 }
 1745:
                var50 = var6.has;
                var49 = var50.bind(var6)(var47);
 1755:
                if(!var49) { _fun0018_ip = 1768; continue _fun0018 }
 1758:
                var49 = var6.delete;
                var49 = var49.bind(var6)(var47);
 1768:
                var50 = var2.push;
                var55 = var5.get;
                var49 = _closure1_slot20;
                var62 = var49.ITEM;
                var61 = var46.layoutStart;
                var60 = var46.layoutSize;
                var58 = var46.section;
                var57 = var46.item;
                var63 = var5;
                var59 = var47;
                var49 = var63[var55](var62, var61, var60, var59, var58, var57, var56);
                var49 = var50.bind(var2)(var49);
                var1 = var47;
 1828:
                var49 = var46.layoutStart;
                var47 = var46.layoutSize;
                var48 = var49 + var47;
                var44 = var1;
                var45 = var38;
                var43 = var36;
                var42 = var34;
                _fun0018_ip = 2164; continue _fun0018;
 1861:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var47 = var27.bind(var12)(var47, var1);
                var1 = var38;
                if(!var47) { _fun0018_ip = 2039; continue _fun0018 }
 1888:
                var47 = var22.initialSection;
                if(!(var23 !== var47)) { _fun0018_ip = 1911; continue _fun0018 }
 1898:
                var47 = var46.section;
                var22['lastSection'] = var47;
                _fun0018_ip = 1933; continue _fun0018;
 1911:
                var47 = var46.section;
                var22['initialSection'] = var47;
                var47 = var46.section;
                var22['lastSection'] = var47;
 1933:
                var47 = _closure1_slot20;
                var49 = var47.SECTION;
                var47 = var46.section;
                var47 = var26.bind(var12)(var49, var47);
                var49 = var15 != var47;
                if(!var49) { _fun0018_ip = 1971; continue _fun0018 }
 1961:
                var50 = var6.has;
                var49 = var50.bind(var6)(var47);
 1971:
                if(!var49) { _fun0018_ip = 1984; continue _fun0018 }
 1974:
                var49 = var6.delete;
                var49 = var49.bind(var6)(var47);
 1984:
                var50 = var2.push;
                var54 = var5.get;
                var49 = _closure1_slot20;
                var62 = var49.SECTION;
                var61 = var46.layoutStart;
                var60 = var46.layoutSize;
                var58 = var46.section;
                var63 = var5;
                var59 = var47;
                var49 = var63[var54](var62, var61, var60, var59, var58, var57);
                var49 = var50.bind(var2)(var49);
                var1 = var47;
 2039:
                var49 = var46.layoutStart;
                var47 = var46.layoutSize;
                var48 = var49 + var47;
                var45 = var1;
                var44 = var37;
                var43 = var36;
                var42 = var34;
                _fun0018_ip = 2164; continue _fun0018;
 2069:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var1 = var27.bind(var12)(var47, var1);
                if(!var1) { _fun0018_ip = 2136; continue _fun0018 }
 2090:
                var47 = var2.push;
                var51 = var5.get;
                var1 = _closure1_slot20;
                var62 = var1.HEADER;
                var61 = var46.layoutStart;
                var60 = var46.layoutSize;
                var63 = var5;
                var59 = undefined;
                var1 = var63[var51](var62, var61, var60, var59, var58);
                var1 = var47.bind(var2)(var1);
 2136:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var48 = var47 + var1;
                var45 = var38;
                var44 = var37;
                var43 = var36;
                var42 = var34;
 2164:
                var47 = var41.bind(var12)();
                var1 = var47.done;
                var40 = var48;
                var38 = var45;
                var37 = var44;
                var36 = var43;
                var34 = var42;
                var39 = var47;
                var35 = var40;
                var19 = var39;
                var18 = var41;
                var33 = var46;
                var32 = var38;
                var31 = var37;
                var30 = var36;
                var29 = var34;
                if(!var1) { _fun0018_ip = 670; continue _fun0018 }
 2221:
                var34 = var21.bind(var12)();
                var1 = var34.done;
                var24 = var35;
                var17 = var33;
                var13 = var32;
                var9 = var31;
                var8 = var30;
                var4 = var29;
                var20 = var34;
                if(!var1) { _fun0018_ip = 569; continue _fun0018 }
 2257:
                var13 = new Array(0);
                var4 = new Array(0);
                var1 = _closure1_slot33;
                var21 = var1.bind(var12)(var6);
                var6 = var21.bind(var12)();
                var1 = var6.done;
                var9 = 2;
                var8 = 1;
                var20 = var6;
                var19 = 0;
                var17 = 0;
                var18 = 0;
                var6 = 0;
                if(var1) { _fun0018_ip = 2605; continue _fun0018 }
 2306:
                var23 = var20.value;
                var1 = _closure1_slot8;
                var1 = var1.bind(var12)(var23, var9);
                var28 = var1[var10];
                var27 = var1[var8];
                var23 = var27.section;
                var1 = var22.initialSection;
                if(!(!(var23 < var1))) { _fun0018_ip = 2540; continue _fun0018 }
 2347:
                var23 = var27.section;
                var1 = var22.lastSection;
                if(!(!(var23 > var1))) { _fun0018_ip = 2503; continue _fun0018 }
 2365:
                var25 = var27.type;
                var1 = _closure1_slot20;
                var1 = var1.ITEM;
                var24 = var19;
                var23 = var17;
                if(!(var25 === var1)) { _fun0018_ip = 2575; continue _fun0018 }
 2393:
                var25 = var27.section;
                var1 = var22.initialSection;
                if(!(var25 === var1)) { _fun0018_ip = 2423; continue _fun0018 }
 2408:
                var25 = var27.item;
                var1 = var22.initialItem;
                if(!(!(var25 < var1))) { _fun0018_ip = 2460; continue _fun0018 }
 2423:
                var1 = var27.layoutSize;
                var1 = var17 + var1;
                var26 = var4.push;
                var25 = new Array(2);
                var25[0] = var28;
                var25[1] = var27;
                var25 = var26.bind(var4)(var25);
                var25 = var19;
                _fun0018_ip = 2495; continue _fun0018;
 2460:
                var26 = var27.layoutSize;
                var25 = var19 + var26;
                var30 = var13.push;
                var29 = new Array(2);
                var29[0] = var28;
                var29[1] = var27;
                var29 = var30.bind(var13)(var29);
                var1 = var17;
 2495:
                var24 = var25;
                var23 = var1;
                _fun0018_ip = 2575; continue _fun0018;
 2503:
                var1 = var27.layoutSize;
                var23 = var17 + var1;
                var26 = var4.push;
                var25 = new Array(2);
                var25[0] = var28;
                var25[1] = var27;
                var25 = var26.bind(var4)(var25);
                var24 = var19;
                _fun0018_ip = 2575; continue _fun0018;
 2540:
                var1 = var27.layoutSize;
                var24 = var19 + var1;
                var26 = var13.push;
                var25 = new Array(2);
                var25[0] = var28;
                var25[1] = var27;
                var25 = var26.bind(var13)(var25);
                var23 = var17;
 2575:
                var25 = var21.bind(var12)();
                var1 = var25.done;
                var19 = var24;
                var17 = var23;
                var20 = var25;
                var18 = var19;
                var6 = var17;
                if(!var1) { _fun0018_ip = 2306; continue _fun0018 }
 2605:
                var1 = var2[var10];
                if(!(var15 != var1)) { _fun0018_ip = 3049; continue _fun0018 }
 2616:
                var17 = var1.layoutStart;
                if(!(var17 > var10)) { _fun0018_ip = 3049; continue _fun0018 }
 2629:
                var17 = var3.headerDataCache;
                var24 = var1.layoutStart;
                var19 = var14;
                if(!var14) { _fun0018_ip = 2651; continue _fun0018 }
 2647:
                var19 = var15 != var17;
 2651:
                if(!var19) { _fun0018_ip = 2667; continue _fun0018 }
 2654:
                var20 = var1.type;
                var1 = 'HEADER';
                var19 = var1 !== var20;
 2667:
                var1 = var24;
                if(!var19) { _fun0018_ip = 2828; continue _fun0018 }
 2676:
                var19 = var17.layoutStart;
                var20 = var24 - var19;
                var19 = var17.layoutSize;
                var19 = var20 - var19;
                if(!(var19 > var10)) { _fun0018_ip = 2775; continue _fun0018 }
 2700:
                var20 = var2.unshift;
                var23 = var5.get;
                var19 = _closure1_slot20;
                var62 = var19.SPACER;
                var21 = var17.layoutStart;
                var19 = var17.layoutSize;
                var61 = var21 + var19;
                var19 = var17.layoutStart;
                var24 = var24 - var19;
                var19 = var17.layoutSize;
                var60 = var24 - var19;
                var63 = var5;
                var59 = undefined;
                var58 = 0;
                var57 = 0;
                var19 = var63[var23](var62, var61, var60, var59, var58, var57, var56);
                var19 = var20.bind(var2)(var19);
 2775:
                var20 = var2.unshift;
                var23 = var5.get;
                var19 = _closure1_slot20;
                var62 = var19.HEADER;
                var61 = var17.layoutStart;
                var60 = var17.layoutSize;
                var63 = var5;
                var59 = undefined;
                var19 = var63[var23](var62, var61, var60, var59, var58);
                var19 = var20.bind(var2)(var19);
                var1 = var17.layoutStart;
 2828:
                var17 = var16.Math;
                var16 = var17.max;
                var1 = var1 - var18;
                var17 = var16.bind(var17)(var1, var10);
                var1 = _closure1_slot33;
                var16 = var1.bind(var12)(var13);
                var13 = var16.bind(var12)();
                var1 = var13.done;
                if(var1) { _fun0018_ip = 3000; continue _fun0018 }
 2873:
                var18 = var13.value;
                var1 = _closure1_slot8;
                var1 = var1.bind(var12)(var18, var9);
                var24 = var1[var10];
                var25 = var1[var8];
                var18 = var2.unshift;
                var23 = var5.get;
                var22 = var25.type;
                var21 = var25.layoutStart;
                var20 = var25.layoutSize;
                var19 = var25.section;
                var27 = var25.type;
                var1 = _closure1_slot20;
                var26 = var1.ITEM;
                var1 = undefined;
                if(!(var27 === var26)) { _fun0018_ip = 2955; continue _fun0018 }
 2950:
                var1 = var25.item;
 2955:
                var63 = var5;
                var62 = var22;
                var61 = var21;
                var60 = var20;
                var59 = var24;
                var58 = var19;
                var57 = var1;
                var1 = var63[var23](var62, var61, var60, var59, var58, var57, var56);
                var1 = var18.bind(var2)(var1);
                var18 = var16.bind(var12)();
                var1 = var18.done;
                var13 = var18;
                if(!var1) { _fun0018_ip = 2873; continue _fun0018 }
 3000:
                if(!(var17 > var10)) { _fun0018_ip = 3049; continue _fun0018 }
 3004:
                var13 = var2.unshift;
                var16 = var5.get;
                var1 = _closure1_slot20;
                var62 = var1.SPACER;
                var63 = var5;
                var61 = 0;
                var60 = var17;
                var59 = undefined;
                var58 = 0;
                var57 = var8;
                var1 = var63[var16](var62, var61, var60, var59, var58, var57, var56);
                var1 = var13.bind(var2)(var1);
 3049:
                var1 = var2.length;
                var1 = var1 - var8;
                var1 = var2[var1];
                if(!(var15 == var1)) { _fun0018_ip = 3073; continue _fun0018 }
 3066:
                var18 = var3.size;
                _fun0018_ip = 3089; continue _fun0018;
 3073:
                var16 = var1.layoutStart;
                var13 = var1.layoutSize;
                var18 = var16 + var13;
 3089:
                var13 = var3.size;
                if(!(var18 < var13)) { _fun0018_ip = 3488; continue _fun0018 }
 3101:
                var13 = var3.footerDataCache;
                if(!var14) { _fun0018_ip = 3114; continue _fun0018 }
 3110:
                var14 = var15 != var13;
 3114:
                if(!var14) { _fun0018_ip = 3130; continue _fun0018 }
 3117:
                var15 = var1.type;
                var1 = 'FOOTER';
                var14 = var1 !== var15;
 3130:
                var1 = var18;
                if(!var14) { _fun0018_ip = 3273; continue _fun0018 }
 3139:
                var14 = var13.layoutStart;
                if(!(var18 < var14)) { _fun0018_ip = 3211; continue _fun0018 }
 3149:
                var15 = var2.push;
                var17 = var5.get;
                var14 = _closure1_slot20;
                var62 = var14.SPACER;
                var19 = var13.layoutStart;
                var14 = var13.layoutSize;
                var14 = var19 + var14;
                var60 = var14 - var18;
                var63 = var5;
                var61 = var18;
                var59 = undefined;
                var58 = var8;
                var57 = 0;
                var14 = var63[var17](var62, var61, var60, var59, var58, var57, var56);
                var14 = var15.bind(var2)(var14);
 3211:
                var15 = var2.push;
                var18 = var5.get;
                var14 = _closure1_slot20;
                var62 = var14.FOOTER;
                var61 = var13.layoutStart;
                var60 = var13.layoutSize;
                var63 = var5;
                var59 = undefined;
                var14 = var63[var18](var62, var61, var60, var59, var58);
                var14 = var15.bind(var2)(var14);
                var14 = var13.layoutStart;
                var13 = var13.layoutSize;
                var1 = var14 + var13;
 3273:
                var15 = var1 + var6;
                var1 = var3.size;
                if(!(var15 < var1)) { _fun0018_ip = 3338; continue _fun0018 }
 3286:
                var6 = var2.push;
                var14 = var5.get;
                var1 = _closure1_slot20;
                var62 = var1.SPACER;
                var1 = var3.size;
                var60 = var1 - var15;
                var63 = var5;
                var61 = var15;
                var59 = undefined;
                var58 = var8;
                var57 = var8;
                var1 = var63[var14](var62, var61, var60, var59, var58, var57, var56);
                var1 = var6.bind(var2)(var1);
 3338:
                var1 = _closure1_slot33;
                var6 = var1.bind(var12)(var4);
                var4 = var6.bind(var12)();
                var1 = var4.done;
                if(var1) { _fun0018_ip = 3488; continue _fun0018 }
 3362:
                var13 = var4.value;
                var1 = _closure1_slot8;
                var1 = var1.bind(var12)(var13, var9);
                var19 = var1[var10];
                var20 = var1[var8];
                var13 = var2.push;
                var18 = var5.get;
                var17 = var20.type;
                var16 = var20.layoutStart;
                var15 = var20.layoutSize;
                var14 = var20.section;
                var22 = var20.type;
                var1 = _closure1_slot20;
                var21 = var1.ITEM;
                var1 = undefined;
                if(!(var22 === var21)) { _fun0018_ip = 3443; continue _fun0018 }
 3438:
                var1 = var20.item;
 3443:
                var63 = var5;
                var62 = var17;
                var61 = var16;
                var60 = var15;
                var59 = var19;
                var58 = var14;
                var57 = var1;
                var1 = var63[var18](var62, var61, var60, var59, var58, var57, var56);
                var1 = var13.bind(var2)(var1);
                var13 = var6.bind(var12)();
                var1 = var13.done;
                var4 = var13;
                if(!var1) { _fun0018_ip = 3362; continue _fun0018 }
 3488:
                var4 = var5.fill;
                var1 = var3.disableRecycling;
                if(var1) { _fun0018_ip = 3523; continue _fun0018 }
 3503:
                var6 = var3.props;
                var6 = var6.disableRecyclingOnFullCompute;
                if(!var6) { _fun0018_ip = 3520; continue _fun0018 }
 3517:
                var6 = var7;
 3520:
                var1 = var6;
 3523:
                var1 = var4.bind(var5)(var1);
                var1 = {};
                var3 = var3.size;
                var1['size'] = var3;
                var1['items'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'fullCompute';
        var1['key'] = var6;
        var6 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var7 = var3.props;
                var22 = var7.sections;
                var6 = var7.insetStart;
                var5 = 0;
                var1 = undefined;
                var4 = 0;
                if(!(var1 !== var6)) { _fun0021_ip = 39; continue _fun0021 }
 36:
                var4 = var6;
 39:
                var8 = var7.insetEnd;
                var6 = 0;
                if(!(var1 !== var8)) { _fun0021_ip = 54; continue _fun0021 }
 51:
                var6 = var8;
 54:
                var21 = var7.getRecyclerKey;
                if(!(var1 === var21)) { _fun0021_ip = 71; continue _fun0021 }
 64:
                var21 = _closure1_slot36;
 71:
                var7 = global;
                var9 = var7.Set;
                var7 = var3.props;
                var43 = var7.persistantKeys;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var44 = var8;
                var7 = new var44[var9](var43, var42);
                var20 = var7 instanceof Object ? var7 : var8;
                var7 = new Array(0);
                var3['persistantItemData'] = var7;
                var7 = new Array(0);
                var3['dataCache'] = var7;
                var _closure3_slot1 = var7;
                var3['chunkCache'] = var1;
                var7 = var3.chunkSize;
                var _closure3_slot2 = var7;
                var _closure3_slot3 = var4;
                var3['headerDataCache'] = var1;
                var3['footerDataCache'] = var1;
                var9 = function pushData(arg1, arg2, arg3) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        var10 = arg1;
                        var9 = arg2;
                        var3 = arg3;
                        var2 = _closure3_slot3;
                        var1 = var9 - var10;
                        var1 = var2 + var1;
                        _closure3_slot3 = var1;
                        var1 = global;
                        var7 = var1.Math;
                        var6 = var7.max;
                        var8 = var1.Math;
                        var5 = var8.floor;
                        var2 = _closure3_slot2;
                        var2 = var10 / var2;
                        var5 = var5.bind(var8)(var2);
                        var2 = 0;
                        var6 = var6.bind(var7)(var5, var2);
                        var5 = var1.Math;
                        var2 = var5.max;
                        var8 = var1.Math;
                        var7 = var8.floor;
                        var1 = _closure3_slot2;
                        var1 = var9 / var1;
                        var7 = var7.bind(var8)(var1);
                        var1 = 1;
                        var1 = var7 - var1;
                        var2 = var2.bind(var5)(var1, var6);
                        var5 = _closure3_slot0;
                        var1 = var5.getChunk;
                        var1 = var1.bind(var5)(var6);
                        var5 = null;
                        if(!(var5 == var1)) { _fun0022_ip = 179; continue _fun0022 }
 144:
                        var5 = {};
                        var5['start'] = var6;
                        var5['end'] = var2;
                        var6 = new Array(0);
                        var5['data'] = var6;
                        var7 = _closure3_slot1;
                        var6 = var7.push;
                        var6 = var6.bind(var7)(var5);
                        var1 = var5;
 179:
                        var7 = var3.type;
                        var6 = _closure1_slot20;
                        var6 = var6.HEADER;
                        if(!(var7 !== var6)) { _fun0022_ip = 232; continue _fun0022 }
 201:
                        var6 = var3.type;
                        var5 = _closure1_slot20;
                        var5 = var5.FOOTER;
                        if(!(var6 === var5)) { _fun0022_ip = 242; continue _fun0022 }
 220:
                        var5 = _closure3_slot0;
                        var5['footerDataCache'] = var3;
                        _fun0022_ip = 242; continue _fun0022;
 232:
                        var4 = _closure3_slot0;
                        var4['headerDataCache'] = var3;
 242:
                        var1['end'] = var2;
                        var2 = var1.data;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var3.getSizeForHeader;
                var10 = var4.bind(var3)();
                var4 = var10 > var5;
                var19 = undefined;
                if(!var4) { _fun0021_ip = 239; continue _fun0021 }
 192:
                var4 = _closure3_slot3;
                var8 = var4 + var10;
                var7 = {};
                var11 = _closure1_slot20;
                var11 = var11.HEADER;
                var7['type'] = var11;
                var7['layoutStart'] = var4;
                var7['layoutSize'] = var10;
                var7 = var9.bind(var1)(var4, var8, var7);
                var19 = var4;
 239:
                var4 = var22.length;
                var7 = var5 < var4;
                var18 = true;
                var17 = null;
                var16 = 0;
                var15 = undefined;
                var14 = undefined;
                var13 = undefined;
                var12 = undefined;
                var11 = undefined;
                var10 = undefined;
                var8 = undefined;
                if(!var7) { _fun0021_ip = 883; continue _fun0021 }
 277:
                var35 = var22[var16];
                var26 = var13;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                if(!(var5 !== var35)) { _fun0021_ip = 856; continue _fun0021 }
 300:
                var27 = _closure3_slot3;
                var7 = var3.getSizeForSection;
                var31 = var7.bind(var3)(var16);
                var30 = {};
                var7 = _closure1_slot20;
                var7 = var7.SECTION;
                var30['type'] = var7;
                var30['layoutStart'] = var27;
                var30['layoutSize'] = var31;
                var30['section'] = var16;
                var7 = var20.size;
                if(!(var7 > var5)) { _fun0021_ip = 424; continue _fun0021 }
 356:
                var7 = _closure1_slot20;
                var7 = var7.SECTION;
                var7 = var21.bind(var1)(var7, var16);
                var28 = var17 != var7;
                if(!var28) { _fun0021_ip = 389; continue _fun0021 }
 379:
                var29 = var20.has;
                var28 = var29.bind(var20)(var7);
 389:
                var13 = var7;
                if(!var28) { _fun0021_ip = 424; continue _fun0021 }
 395:
                var29 = var3.persistantItemData;
                var28 = var29.push;
                var28 = var28.bind(var29)(var30);
                var28 = var20.delete;
                var28 = var28.bind(var20)(var7);
                var13 = var7;
 424:
                var7 = var27 + var31;
                var7 = var9.bind(var1)(var27, var7, var30);
                var7 = var3.uniform;
                if(var7) { _fun0021_ip = 644; continue _fun0021 }
 447:
                var34 = var5 < var35;
                var33 = 0;
                var7 = var10;
                var32 = var27;
                var29 = 0;
                var28 = var11;
                var27 = var7;
                if(!var34) { _fun0021_ip = 741; continue _fun0021 }
 473:
                var34 = var3.getSizeForItem;
                var34 = var34.bind(var3)(var16, var33);
                var38 = _closure3_slot3;
                var37 = {};
                var36 = _closure1_slot20;
                var36 = var36.ITEM;
                var37['type'] = var36;
                var37['layoutStart'] = var38;
                var37['layoutSize'] = var34;
                var37['section'] = var16;
                var37['item'] = var33;
                var37['sectionData'] = var30;
                var34 = var38 + var34;
                var34 = var9.bind(var1)(var38, var34, var37);
                var36 = var20.size;
                var34 = var33;
                if(!(var36 > var5)) { _fun0021_ip = 620; continue _fun0021 }
 551:
                var36 = _closure1_slot20;
                var36 = var36.ITEM;
                var36 = var21.bind(var1)(var36, var16, var34);
                var39 = var17 != var36;
                if(!var39) { _fun0021_ip = 585; continue _fun0021 }
 575:
                var40 = var20.has;
                var39 = var40.bind(var20)(var36);
 585:
                var7 = var36;
                if(!var39) { _fun0021_ip = 620; continue _fun0021 }
 591:
                var40 = var3.persistantItemData;
                var39 = var40.push;
                var39 = var39.bind(var40)(var37);
                var39 = var20.delete;
                var39 = var39.bind(var20)(var36);
                var7 = var36;
 620:
                var33 = var34 + 1;
                var32 = var38;
                var28 = var37;
                var27 = var7;
                var29 = var33;
                if(var29 < var35) { _fun0021_ip = 473; continue _fun0021 }
 642:
                _fun0021_ip = 741; continue _fun0021;
 644:
                var7 = var3.getSizeForItem;
                var36 = var7.bind(var3)(var16, var5);
                var7 = _closure3_slot3;
                var33 = var36 * var35;
                var34 = var7 + var33;
                var33 = {};
                var37 = _closure1_slot20;
                var37 = var37.ITEM;
                var33['type'] = var37;
                var33['uniform'] = var18;
                var33['layoutStart'] = var7;
                var33['itemSize'] = var36;
                var36 = var36 * var35;
                var33['layoutSize'] = var36;
                var33['section'] = var16;
                var33['items'] = var35;
                var33['sectionData'] = var30;
                var33 = var9.bind(var1)(var7, var34, var33);
                var32 = var7;
                var29 = var12;
                var28 = var11;
                var27 = var10;
 741:
                var7 = var3.getSizeForSectionFooter;
                var7 = var7.bind(var3)(var16);
                var19 = var32;
                var15 = var31;
                var14 = var30;
                var26 = var13;
                var25 = var29;
                var24 = var28;
                var23 = var27;
                var8 = var7;
                if(!(var8 > var5)) { _fun0021_ip = 856; continue _fun0021 }
 782:
                var32 = _closure3_slot3;
                var34 = var32 + var7;
                var33 = {};
                var35 = _closure1_slot20;
                var35 = var35.SECTION_FOOTER;
                var33['type'] = var35;
                var33['layoutStart'] = var32;
                var33['layoutSize'] = var7;
                var33['section'] = var16;
                var33['sectionData'] = var30;
                var33 = var9.bind(var1)(var32, var34, var33);
                var19 = var32;
                var15 = var31;
                var14 = var30;
                var26 = var13;
                var25 = var29;
                var24 = var28;
                var23 = var27;
                var8 = var7;
 856:
                var16 = var16 + 1;
                var7 = var22.length;
                var13 = var26;
                var12 = var25;
                var11 = var24;
                var10 = var23;
                if(var16 < var7) { _fun0021_ip = 277; continue _fun0021 }
 883:
                var7 = var3.getSizeForFooter;
                var10 = var7.bind(var3)();
                if(!(var10 > var5)) { _fun0021_ip = 940; continue _fun0021 }
 899:
                var8 = _closure3_slot3;
                var7 = var8 + var10;
                var5 = {};
                var11 = _closure1_slot20;
                var11 = var11.FOOTER;
                var5['type'] = var11;
                var5['layoutStart'] = var8;
                var5['layoutSize'] = var10;
                var5 = var9.bind(var1)(var8, var7, var5);
 940:
                var5 = _closure3_slot3;
                var5 = var5 + var6;
                _closure3_slot3 = var5;
                var5 = _closure1_slot12;
                var4 = var5.roundToNearestPixel;
                var2 = _closure3_slot3;
                var2 = var4.bind(var5)(var2);
                var3['size'] = var2;
                var2 = false;
                var3['dirty'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getChunkDataFromSectionItem';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var10 = arg1;
                var9 = arg2;
                var1 = this;
                var2 = var1.dirty;
                if(!var2) { _fun0023_ip = 28; continue _fun0023 }
 18:
                var2 = var1.fullCompute;
                var2 = var2.bind(var1)();
 28:
                var3 = _closure1_slot33;
                var2 = var1.dataCache;
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var3 = var7.bind(var1)();
                var2 = var3.done;
                var6 = null;
                var5 = true;
                var4 = var3;
                var3 = undefined;
                if(var2) { _fun0023_ip = 267; continue _fun0023 }
 72:
                var13 = var4.value;
                var11 = _closure1_slot33;
                var2 = var13.data;
                var12 = var11.bind(var1)(var2);
                var11 = var12.bind(var1)();
                var2 = var11.done;
                if(var2) { _fun0023_ip = 249; continue _fun0023 }
 106:
                var14 = var11.value;
                var15 = var14.type;
                var2 = _closure1_slot20;
                var2 = var2.ITEM;
                if(!(var2 !== var15)) { _fun0023_ip = 161; continue _fun0023 }
 130:
                var2 = _closure1_slot20;
                var2 = var2.SECTION;
                if(!(var2 === var15)) { _fun0023_ip = 228; continue _fun0023 }
 144:
                var2 = var14.section;
                if(!(!(var2 > var10))) { _fun0023_ip = 159; continue _fun0023 }
 153:
                if(!(var6 == var9)) { _fun0023_ip = 228; continue _fun0023 }
 157:
                return var13;
 159:
                return var1;
 161:
                if(!(var6 != var9)) { _fun0023_ip = 228; continue _fun0023 }
 165:
                var2 = var14.uniform;
                if(!(var5 === var2)) { _fun0023_ip = 184; continue _fun0023 }
 175:
                var2 = var14.section;
                if(!(var2 !== var10)) { _fun0023_ip = 214; continue _fun0023 }
 184:
                var2 = var14.uniform;
                if(!(var6 == var2)) { _fun0023_ip = 228; continue _fun0023 }
 194:
                var2 = var14.section;
                if(!(var2 === var10)) { _fun0023_ip = 228; continue _fun0023 }
 203:
                var2 = var14.item;
                if(!(var2 === var9)) { _fun0023_ip = 228; continue _fun0023 }
 212:
                return var13;
 214:
                var2 = var14.items;
                if(!(!(var9 > var2))) { _fun0023_ip = 226; continue _fun0023 }
 224:
                return var13;
 226:
                return var1;
 228:
                var15 = var12.bind(var1)();
                var2 = var15.done;
                var11 = var15;
                var3 = var14;
                if(!var2) { _fun0023_ip = 106; continue _fun0023 }
 249:
                var11 = var7.bind(var1)();
                var2 = var11.done;
                var4 = var11;
                if(!var2) { _fun0023_ip = 72; continue _fun0023 }
 267:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'getChunkIndexFromSectionItem';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var1 = arg1;
                var10 = this;
                var2 = var1.chunk;
                var9 = var1.targetSection;
                var8 = var1.targetItem;
                var7 = var1.padBottom;
                var1 = undefined;
                if(!(var7 === var1)) { _fun0024_ip = 43; continue _fun0024 }
 40:
                var7 = 16;
 43:
                var3 = _closure1_slot33;
                var2 = var2.data;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = null;
                if(var2) { _fun0024_ip = 566; continue _fun0024 }
 77:
                var11 = var3.value;
                var12 = var11.type;
                var2 = _closure1_slot20;
                var2 = var2.ITEM;
                if(!(var2 !== var12)) { _fun0024_ip = 247; continue _fun0024 }
 104:
                var2 = _closure1_slot20;
                var2 = var2.SECTION;
                if(!(var2 === var12)) { _fun0024_ip = 548; continue _fun0024 }
 121:
                if(!(var4 == var8)) { _fun0024_ip = 548; continue _fun0024 }
 128:
                var2 = var11.section;
                if(!(!(var9 < var2))) { _fun0024_ip = 245; continue _fun0024 }
 137:
                var2 = var11.section;
                if(!(var9 === var2)) { _fun0024_ip = 548; continue _fun0024 }
 149:
                var2 = {};
                var12 = global;
                var15 = var12.Math;
                var14 = var15.floor;
                var16 = var11.layoutStart;
                var13 = var10.chunkSize;
                var13 = var16 / var13;
                var13 = var14.bind(var15)(var13);
                var2['startIndex'] = var13;
                var14 = var12.Math;
                var13 = var14.floor;
                var15 = var11.layoutStart;
                var12 = var11.layoutSize;
                var12 = var15 + var12;
                var15 = var12 + var7;
                var12 = var10.chunkSize;
                var12 = var15 / var12;
                var12 = var13.bind(var14)(var12);
                var2['endIndex'] = var12;
                return var2;
 245:
                return var1;
 247:
                var2 = var11.section;
                if(!(var2 === var9)) { _fun0024_ip = 548; continue _fun0024 }
 259:
                if(!(var4 != var8)) { _fun0024_ip = 548; continue _fun0024 }
 266:
                var2 = var11.uniform;
                if(var2) { _fun0024_ip = 416; continue _fun0024 }
 278:
                var2 = var11.item;
                if(!(!(var2 >= var8))) { _fun0024_ip = 414; continue _fun0024 }
 290:
                var2 = var11.item;
                if(!(var2 === var8)) { _fun0024_ip = 548; continue _fun0024 }
 302:
                var2 = {};
                var12 = global;
                var15 = var12.Math;
                var14 = var15.floor;
                var16 = var11.layoutStart;
                var13 = var11.sectionData;
                var13 = var13.layoutSize;
                var16 = var16 - var13;
                var13 = var10.chunkSize;
                var13 = var16 / var13;
                var13 = var14.bind(var15)(var13);
                var2['startIndex'] = var13;
                var14 = var12.Math;
                var13 = var14.floor;
                var15 = var11.layoutStart;
                var12 = var11.layoutSize;
                var12 = var15 + var12;
                var15 = var12 + var7;
                var12 = var10.chunkSize;
                var12 = var15 / var12;
                var12 = var13.bind(var14)(var12);
                var2['endIndex'] = var12;
                return var2;
 414:
                return var1;
 416:
                var2 = var11.items;
                if(!(!(var8 >= var2))) { _fun0024_ip = 546; continue _fun0024 }
 426:
                var12 = var11.layoutStart;
                var2 = var11.sectionData;
                var2 = var2.layoutSize;
                var12 = var12 + var2;
                var2 = var11.itemSize;
                var2 = var2 * var8;
                var14 = var12 + var2;
                var2 = {};
                var12 = global;
                var16 = var12.Math;
                var15 = var16.floor;
                var13 = var10.chunkSize;
                var13 = var14 / var13;
                var13 = var15.bind(var16)(var13);
                var2['startIndex'] = var13;
                var13 = var12.Math;
                var12 = var13.floor;
                var11 = var11.itemSize;
                var11 = var14 + var11;
                var14 = var11 + var7;
                var11 = var10.chunkSize;
                var11 = var14 / var11;
                var11 = var12.bind(var13)(var11);
                var2['endIndex'] = var11;
                return var2;
 546:
                return var1;
 548:
                var11 = var5.bind(var1)();
                var2 = var11.done;
                var3 = var11;
                if(!var2) { _fun0024_ip = 77; continue _fun0024 }
 566:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'computeScrollPosition';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var12 = arg1;
                var11 = arg2;
                var10 = arg3;
                var1 = this;
                var9 = null;
                if(!(var9 != var10)) { _fun0025_ip = 27; continue _fun0025 }
 18:
                var2 = 0;
                if(!(!(var10 < var2))) { _fun0025_ip = 494; continue _fun0025 }
 27:
                var2 = var1.dirty;
                if(!var2) { _fun0025_ip = 46; continue _fun0025 }
 36:
                var2 = var1.fullCompute;
                var2 = var2.bind(var1)();
 46:
                var2 = var1.dataCache;
                var8 = 0;
                if(!(!(var11 < var8))) { _fun0025_ip = 478; continue _fun0025 }
 61:
                var1 = _closure1_slot33;
                var6 = undefined;
                var5 = var1.bind(var6)(var2);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var4 = true;
                var3 = var2;
                var2 = undefined;
                if(var1) { _fun0025_ip = 494; continue _fun0025 }
 97:
                var13 = _closure1_slot33;
                var1 = var3.value;
                var1 = var1.data;
                var14 = var13.bind(var6)(var1);
                var13 = var14.bind(var6)();
                var1 = var13.done;
                if(var1) { _fun0025_ip = 458; continue _fun0025 }
 131:
                var15 = var13.value;
                var16 = var15.type;
                var1 = _closure1_slot20;
                var1 = var1.ITEM;
                if(!(var1 !== var16)) { _fun0025_ip = 232; continue _fun0025 }
 155:
                var1 = _closure1_slot20;
                var1 = var1.SECTION;
                if(!(var1 === var16)) { _fun0025_ip = 437; continue _fun0025 }
 172:
                var1 = var15.section;
                if(!(!(var1 > var11))) { _fun0025_ip = 230; continue _fun0025 }
 181:
                if(!(var9 == var10)) { _fun0025_ip = 437; continue _fun0025 }
 188:
                var1 = var15.section;
                if(!(var1 === var11)) { _fun0025_ip = 437; continue _fun0025 }
 200:
                var1 = {};
                var16 = var15.layoutStart;
                var1['scrollPosition'] = var16;
                var16 = var15.layoutSize;
                var1['size'] = var16;
                var1['sectionOffset'] = var8;
                return var1;
 230:
                return var6;
 232:
                if(!(var9 != var10)) { _fun0025_ip = 437; continue _fun0025 }
 239:
                var1 = var15.uniform;
                if(!(var4 === var1)) { _fun0025_ip = 258; continue _fun0025 }
 249:
                var1 = var15.section;
                if(!(var1 !== var11)) { _fun0025_ip = 342; continue _fun0025 }
 258:
                var1 = var15.uniform;
                if(!(var9 == var1)) { _fun0025_ip = 437; continue _fun0025 }
 271:
                var1 = var15.section;
                if(!(var1 === var11)) { _fun0025_ip = 437; continue _fun0025 }
 283:
                var1 = var15.item;
                if(!(var1 === var10)) { _fun0025_ip = 437; continue _fun0025 }
 295:
                var1 = {};
                var16 = var15.layoutStart;
                var1['scrollPosition'] = var16;
                var16 = var15.layoutSize;
                var1['size'] = var16;
                var16 = 0;
                if(!var12) { _fun0025_ip = 335; continue _fun0025 }
 323:
                var17 = var15.sectionData;
                var16 = var17.layoutSize;
 335:
                var1['sectionOffset'] = var16;
                return var1;
 342:
                var1 = var15.items;
                if(!(!(var10 > var1))) { _fun0025_ip = 435; continue _fun0025 }
 352:
                var1 = {};
                var16 = var15.sectionData;
                var17 = var16.layoutStart;
                var16 = var15.sectionData;
                var16 = var16.layoutSize;
                var17 = var17 + var16;
                var16 = var15.itemSize;
                var16 = var16 * var10;
                var16 = var17 + var16;
                var1['scrollPosition'] = var16;
                var16 = var15.itemSize;
                var1['size'] = var16;
                var8 = 0;
                if(!var12) { _fun0025_ip = 428; continue _fun0025 }
 416:
                var16 = var15.sectionData;
                var8 = var16.layoutSize;
 428:
                var1['sectionOffset'] = var8;
                return var1;
 435:
                return var6;
 437:
                var16 = var14.bind(var6)();
                var1 = var16.done;
                var13 = var16;
                var2 = var15;
                if(!var1) { _fun0025_ip = 131; continue _fun0025 }
 458:
                var13 = var5.bind(var6)();
                var1 = var13.done;
                var3 = var13;
                if(var1) { _fun0025_ip = 494; continue _fun0025 }
 473:
                _fun0025_ip = 97; continue _fun0025;
 478:
                var1 = {'scrollPosition': 0, 'size': 0, 'sectionOffset': 0};
                return var1;
 494:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'getSectionItemFromPosition';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var6 = arg1;
                var14 = arguments[1];
                var1 = this;
                var13 = undefined;
                if(!(var14 === var13)) { _fun0026_ip = 22; continue _fun0026 }
 15:
                var14 = _closure1_slot19;
 22:
                var2 = var1.dirty;
                if(!var2) { _fun0026_ip = 41; continue _fun0026 }
 31:
                var2 = var1.fullCompute;
                var2 = var2.bind(var1)();
 41:
                var2 = _closure1_slot33;
                var1 = var1.items;
                var12 = var2.bind(var13)(var1);
                var2 = var12.bind(var13)();
                var1 = var2.done;
                var11 = 0;
                var10 = null;
                var9 = var2;
                var8 = 0;
                var3 = undefined;
                var2 = 0;
                if(var1) { _fun0026_ip = 199; continue _fun0026 }
 84:
                var4 = var9.value;
                var1 = var4.layoutStart;
                var1 = var1 + var8;
                var7 = var14.get;
                var5 = var4.recyclerKey;
                var16 = var7.bind(var14)(var5);
                var5 = var16;
                if(!(var10 == var5)) { _fun0026_ip = 128; continue _fun0026 }
 122:
                var5 = var4.layoutSize;
 128:
                if(!(var5 > var11)) { _fun0026_ip = 144; continue _fun0026 }
 132:
                if(!(var6 >= var1)) { _fun0026_ip = 144; continue _fun0026 }
 136:
                var7 = var1 + var5;
                if(!(!(var6 <= var7))) { _fun0026_ip = 188; continue _fun0026 }
 144:
                var15 = var10 != var16;
                var7 = 0;
                if(!var15) { _fun0026_ip = 163; continue _fun0026 }
 153:
                var15 = var4.layoutSize;
                var7 = var16 - var15;
 163:
                var8 = var8 + var7;
                var15 = var12.bind(var13)();
                var7 = var15.done;
                var9 = var15;
                var3 = undefined;
                var2 = 0;
                if(var7) { _fun0026_ip = 199; continue _fun0026 }
 186:
                _fun0026_ip = 84; continue _fun0026;
 188:
                var1 = var6 - var1;
                var2 = var1 / var5;
                var3 = var4;
 199:
                var1 = {};
                var1['item'] = var3;
                var1['positionPercentage'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'setDisableRecycling';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['disableRecycling'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'getSize';
        var1['key'] = var6;
        var6 = function value() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var1 = this;
                var2 = var1.dirty;
                if(!var2) { _fun0027_ip = 22; continue _fun0027 }
 12:
                var2 = var1.fullCompute;
                var2 = var2.bind(var1)();
 22:
                var1 = var1.size;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'isDirty';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var1 = var1.dirty;
            return var1;
        };
        var1['value'] = var5;
        var2[16] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot22 = var4;
    var7 = {};
    var11 = 'function FastListTsx1(){const{scrollPosValue,interpolate,inputRange,outputRange,horizontal}=this.__closure;const interpolatedValue=scrollPosValue!=null?interpolate(scrollPosValue.get(),inputRange,outputRange):null;return{transform:interpolatedValue!=null?[horizontal?{translateX:interpolatedValue}:{translateY:interpolatedValue}]:undefined};}';
    var7['code'] = var11;
    var _closure1_slot23 = var7;
    var11 = var2.memo;
    var7 = function FastListStickySectionRendererComponent(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var3 = arg1;
            var14 = var3.layoutStart;
            var12 = var3.layoutSize;
            var13 = var3.horizontal;
            var _closure2_slot0 = var13;
            var5 = var3.nextSectionLayoutPosition;
            var11 = var3.scrollPosValue;
            var _closure2_slot1 = var11;
            var10 = var3.fastListInstance;
            var9 = var3.section;
            var1 = var3.children;
            var4 = var3.debug;
            var3 = var3.recyclerKey;
            var17 = new Array(2);
            var4 = -1;
            var17[0] = var4;
            var6 = 0;
            var17[1] = var6;
            var _closure2_slot2 = var17;
            var16 = [0, 0];
            var _closure2_slot3 = var16;
            var3 = var17.push;
            var3 = var3.bind(var17)(var14);
            var3 = var16.push;
            var3 = var3.bind(var16)(var6);
            var7 = null;
            var8 = var7 != var5;
            var3 = 0;
            if(!var8) { _fun0028_ip = 143; continue _fun0028 }
 140:
            var3 = var5;
 143:
            var3 = var3 - var12;
            if(!(!(var3 >= var14))) { _fun0028_ip = 180; continue _fun0028 }
 151:
            var15 = var17.push;
            var8 = 1;
            var5 = var14 + var8;
            var5 = var15.bind(var17)(var5);
            var5 = var16.push;
            var5 = var5.bind(var16)(var8);
            _fun0028_ip = 267; continue _fun0028;
 180:
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 14;
            var8 = var8[var5];
            var5 = undefined;
            var8 = var15.bind(var5)(var8);
            var5 = var8.isAndroid;
            var5 = var5.bind(var8)();
            var6 = 0;
            if(!var5) { _fun0028_ip = 222; continue _fun0028 }
 219:
            var6 = var4;
 222:
            var5 = var17.push;
            var4 = 1;
            var4 = var3 + var4;
            var4 = var5.bind(var17)(var3, var4);
            var5 = var16.push;
            var4 = var3 - var14;
            var4 = var4 + var6;
            var3 = var3 - var14;
            var3 = var3 + var6;
            var3 = var5.bind(var16)(var4, var3);
 267:
            var19 = _closure1_slot0;
            var6 = _closure1_slot2;
            var18 = 15;
            var3 = var6[var18];
            var4 = undefined;
            var8 = var19.bind(var4)(var3);
            var3 = var8.useAnimatedStyle;
            var2 = function v() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var1 = var2 != var1;
                    var5 = null;
                    if(!var1) { _fun0029_ip = 77; continue _fun0029 }
 18:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var8 = var6.bind(var1)(var4);
                    var7 = var8.interpolate;
                    var4 = _closure2_slot1;
                    var1 = var4.get;
                    var6 = var1.bind(var4)();
                    var4 = _closure2_slot2;
                    var1 = _closure2_slot3;
                    var5 = var7.bind(var8)(var6, var4, var1);
 77:
                    var1 = {};
                    var4 = var2 != var5;
                    var2 = undefined;
                    if(!var4) { _fun0029_ip = 126; continue _fun0029 }
 88:
                    var4 = _closure2_slot0;
                    var3 = {};
                    if(var4) { _fun0029_ip = 107; continue _fun0029 }
 97:
                    var3['translateY'] = var5;
                    var4 = var3;
                    _fun0029_ip = 115; continue _fun0029;
 107:
                    var3['translateX'] = var5;
                    var4 = var3;
 115:
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
 126:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var15 = {};
            var15['scrollPosValue'] = var11;
            var18 = var6[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.interpolate;
            var15['interpolate'] = var18;
            var15['inputRange'] = var17;
            var15['outputRange'] = var16;
            var15['horizontal'] = var13;
            var2['__closure'] = var15;
            var15 = 699810682881.0;
            var2['__workletHash'] = var15;
            var15 = _closure1_slot23;
            var2['__initData'] = var15;
            var8 = var3.bind(var8)(var2);
            var2 = _closure1_slot11;
            var3 = var2.Children;
            var2 = var3.only;
            var25 = undefined;
            var24 = var9;
            var23 = var10;
            var22 = var11;
            var21 = var14;
            var1 = var25[var1](var24, var23, var22, var21, var20);
            var10 = var2.bind(var3)(var1);
            var3 = _closure1_slot15;
            var2 = _closure1_slot1;
            var1 = 16;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'style': null, 'collapsable': false, 'preventClipping': true};
            var6 = var7 != var10;
            var9 = undefined;
            if(!var6) { _fun0028_ip = 487; continue _fun0028 }
 464:
            var6 = 'props';
            var6 = var6 in var10;
            var9 = undefined;
            if(!var6) { _fun0028_ip = 487; continue _fun0028 }
 477:
            var6 = var10.props;
            var9 = var6.style;
 487:
            var6 = new Array(3);
            var6[0] = var9;
            var9 = {'zIndex': 10, 'position': 'relative'};
            var11 = undefined;
            if(var13) { _fun0028_ip = 517; continue _fun0028 }
 514:
            var11 = var12;
 517:
            var9['height'] = var11;
            var11 = undefined;
            if(!var13) { _fun0028_ip = 529; continue _fun0028 }
 526:
            var11 = var12;
 529:
            var9['width'] = var11;
            var6[1] = var9;
            var6[2] = var8;
            var1['style'] = var6;
            var6 = false;
            var8 = var7 != var10;
            var7 = undefined;
            if(!var8) { _fun0028_ip = 589; continue _fun0028 }
 558:
            var9 = _closure1_slot11;
            var8 = var9.cloneElement;
            var5 = {};
            var11 = {};
            var12 = 1;
            var11['flex'] = var12;
            var5['style'] = var11;
            var7 = var8.bind(var9)(var10, var5);
 589:
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var7 = var11.bind(var2)(var7);
    var _closure1_slot24 = var7;
    var11 = var2.memo;
    var7 = function _FastListSectionRenderer(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var3 = arg1;
            var12 = var3.layoutSize;
            var10 = var3.horizontal;
            var2 = var3.disableWrapper;
            var9 = var3.children;
            var8 = var3.fastListInstance;
            var6 = var3.section;
            var1 = var3.debug;
            var3 = var3.recyclerKey;
            if(!var2) { _fun0030_ip = 88; continue _fun0030 }
 52:
            if(var1) { _fun0030_ip = 88; continue _fun0030 }
 55:
            var4 = _closure1_slot16;
            var3 = _closure1_slot17;
            var2 = {};
            var1 = undefined;
            var5 = var9.bind(var1)(var6, var8);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            _fun0030_ip = 188; continue _fun0030;
 88:
            var5 = _closure1_slot15;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {'collapsable': false, 'style': null, 'preventClipping': true};
            var7 = false;
            var11 = {};
            if(var10) { _fun0030_ip = 147; continue _fun0030 }
 138:
            var11['height'] = var12;
            var10 = var11;
            _fun0030_ip = 154; continue _fun0030;
 147:
            var11['width'] = var12;
            var10 = var11;
 154:
            var2['style'] = var10;
            var8 = var9.bind(var4)(var6, var8);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 188:
            return var1;
        }
    };
    var7 = var11.bind(var2)(var7);
    var _closure1_slot25 = var7;
    var11 = var2.memo;
    var7 = function _FastListSectionFooterRenderer(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
            var3 = arg1;
            var12 = var3.layoutSize;
            var10 = var3.horizontal;
            var2 = var3.disableWrapper;
            var9 = var3.fastListInstance;
            var8 = var3.children;
            var6 = var3.section;
            var1 = var3.debug;
            var3 = var3.recyclerKey;
            if(!var2) { _fun0031_ip = 88; continue _fun0031 }
 52:
            if(var1) { _fun0031_ip = 88; continue _fun0031 }
 55:
            var4 = _closure1_slot16;
            var3 = _closure1_slot17;
            var2 = {};
            var1 = undefined;
            var5 = var8.bind(var1)(var6, var9);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            _fun0031_ip = 179; continue _fun0031;
 88:
            var5 = _closure1_slot15;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var7 = false;
            var2['collapsable'] = var7;
            var11 = {};
            if(var10) { _fun0031_ip = 140; continue _fun0031 }
 131:
            var11['height'] = var12;
            var10 = var11;
            _fun0031_ip = 147; continue _fun0031;
 140:
            var11['width'] = var12;
            var10 = var11;
 147:
            var2['style'] = var10;
            var8 = var8.bind(var4)(var6, var9);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 179:
            return var1;
        }
    };
    var7 = var11.bind(var2)(var7);
    var _closure1_slot26 = var7;
    var11 = var2.memo;
    var7 = function _FastListItemRenderer(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var3 = arg1;
            var13 = var3.layoutSize;
            var8 = var3.horizontal;
            var2 = var3.disableWrapper;
            var11 = var3.children;
            var10 = var3.section;
            var9 = var3.fastListInstance;
            var6 = var3.item;
            var1 = var3.debug;
            var3 = var3.recyclerKey;
            if(!var2) { _fun0032_ip = 82; continue _fun0032 }
 57:
            if(var1) { _fun0032_ip = 82; continue _fun0032 }
 60:
            var1 = null;
            var3 = var1 == var11;
            var2 = undefined;
            var1 = undefined;
            if(var3) { _fun0032_ip = 80; continue _fun0032 }
 73:
            var1 = var11.bind(var2)(var10, var6, var9);
 80:
            _fun0032_ip = 185; continue _fun0032;
 82:
            var5 = _closure1_slot15;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var7 = false;
            var2['collapsable'] = var7;
            var12 = {};
            if(var8) { _fun0032_ip = 134; continue _fun0032 }
 125:
            var12['height'] = var13;
            var8 = var12;
            _fun0032_ip = 141; continue _fun0032;
 134:
            var12['width'] = var13;
            var8 = var12;
 141:
            var2['style'] = var8;
            var8 = null;
            var12 = var8 == var11;
            var8 = undefined;
            if(var12) { _fun0032_ip = 163; continue _fun0032 }
 156:
            var8 = var11.bind(var4)(var10, var6, var9);
 163:
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 185:
            return var1;
        }
    };
    var7 = var11.bind(var2)(var7);
    var _closure1_slot27 = var7;
    var11 = var2.memo;
    var7 = function _FastListHeaderFooterRenderer(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
            var3 = arg1;
            var11 = var3.layoutSize;
            var9 = var3.horizontal;
            var2 = var3.disableWrapper;
            var8 = var3.children;
            var6 = var3.fastListInstance;
            var1 = var3.debug;
            var3 = var3.recyclerKey;
            if(!var2) { _fun0033_ip = 82; continue _fun0033 }
 47:
            if(var1) { _fun0033_ip = 82; continue _fun0033 }
 50:
            var4 = _closure1_slot16;
            var3 = _closure1_slot17;
            var2 = {};
            var1 = undefined;
            var5 = var8.bind(var1)(var6);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            _fun0033_ip = 181; continue _fun0033;
 82:
            var5 = _closure1_slot15;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {'collapsable': false, 'style': null, 'preventClipping': true};
            var7 = false;
            var10 = {};
            if(var9) { _fun0033_ip = 141; continue _fun0033 }
 132:
            var10['height'] = var11;
            var9 = var10;
            _fun0033_ip = 148; continue _fun0033;
 141:
            var10['width'] = var11;
            var9 = var10;
 148:
            var2['style'] = var9;
            var8 = var8.bind(var4)(var6);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 181:
            return var1;
        }
    };
    var7 = var11.bind(var2)(var7);
    var _closure1_slot28 = var7;
    var11 = var2.memo;
    var7 = function _FastListSpacer(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
            var1 = arg1;
            var7 = var1.layoutSize;
            var5 = var1.horizontal;
            var4 = _closure1_slot16;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var6 = false;
            var1['collapsable'] = var6;
            var6 = {};
            if(var5) { _fun0034_ip = 67; continue _fun0034 }
 58:
            var6['height'] = var7;
            var5 = var6;
            _fun0034_ip = 74; continue _fun0034;
 67:
            var6['width'] = var7;
            var5 = var6;
 74:
            var1['style'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var7 = var11.bind(var2)(var7);
    var _closure1_slot29 = var7;
    var7 = function() {
        var4 = _closure1_slot10;
        var3 = function FastListScrollAnchor(arg1) {
            var3 = this;
            var4 = _closure1_slot9;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['getScrollPosition'] = var2;
            var2 = false;
            var3['isCustomAnchor'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'hasAnchor';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var2 = var1.anchorId;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'cleanAnchor';
        var1['key'] = var6;
        var6 = function value() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var3 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0035_ip = 14; continue _fun0035 }
 12:
                var3 = false;
 14:
                var3 = !var3;
                if(!var3) { _fun0035_ip = 26; continue _fun0035 }
 20:
                var3 = var2.isCustomAnchor;
 26:
                if(var3) { _fun0035_ip = 49; continue _fun0035 }
 29:
                var3 = false;
                var2['isCustomAnchor'] = var3;
                var2['anchorId'] = var1;
                var2['anchorOffset'] = var1;
 49:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'handleUserScroll';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var2 = var3.cleanAnchor;
            var1 = true;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'setCustomAnchor';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                var4 = this;
                var3 = true;
                var4['isCustomAnchor'] = var3;
                var1 = arg2;
                var4['anchorOffset'] = var1;
                var6 = arg1;
                var1 = undefined;
                var5 = arg3;
                var2 = arg4;
                var2 = var6.bind(var1)(var5, var2);
                var4['anchorId'] = var2;
                var5 = var4.anchorId;
                var2 = null;
                if(!(var2 == var5)) { _fun0036_ip = 66; continue _fun0036 }
 55:
                var2 = var4.cleanAnchor;
                var2 = var2.bind(var4)(var3);
 66:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'findOrUpdateAnchor';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                var12 = arg1;
                var3 = this;
                var1 = var3.getScrollPosition;
                var4 = var1.bind(var3)();
                var1 = var3.cleanAnchor;
                var1 = var1.bind(var3)();
                var5 = _closure1_slot33;
                var1 = undefined;
                var2 = arg2;
                var10 = var5.bind(var1)(var2);
                var5 = var10.bind(var1)();
                var2 = var5.done;
                var9 = null;
                var7 = var5;
                var6 = undefined;
                if(var2) { _fun0037_ip = 267; continue _fun0037 }
 65:
                var2 = var7.value;
                var14 = var2.type;
                var5 = _closure1_slot20;
                var5 = var5.ITEM;
                var13 = var6;
                if(!(var14 === var5)) { _fun0037_ip = 224; continue _fun0037 }
 95:
                var5 = var3.isCustomAnchor;
                if(!var5) { _fun0037_ip = 145; continue _fun0037 }
 104:
                var14 = var3.anchorId;
                var16 = var2.section;
                var15 = var2.item;
                var17 = var9 != var15;
                var5 = 0;
                if(!var17) { _fun0037_ip = 132; continue _fun0037 }
 129:
                var5 = var15;
 132:
                var5 = var12.bind(var1)(var16, var5);
                var6 = var15;
                if(!(var14 !== var5)) { _fun0037_ip = 247; continue _fun0037 }
 145:
                var5 = var3.isCustomAnchor;
                var13 = var6;
                if(var5) { _fun0037_ip = 224; continue _fun0037 }
 157:
                var5 = var2.layoutStart;
                var13 = var6;
                if(!(var5 >= var4)) { _fun0037_ip = 224; continue _fun0037 }
 170:
                var5 = var2.layoutStart;
                var5 = var5 - var4;
                var3['anchorOffset'] = var5;
                var5 = var2.section;
                var14 = var2.item;
                var15 = var9 != var14;
                var8 = 0;
                if(!var15) { _fun0037_ip = 208; continue _fun0037 }
 205:
                var8 = var14;
 208:
                var5 = var12.bind(var1)(var5, var8);
                var3['anchorId'] = var5;
                var5 = undefined;
                return var5;
 224:
                var14 = var10.bind(var1)();
                var5 = var14.done;
                var6 = var13;
                var7 = var14;
                if(var5) { _fun0037_ip = 267; continue _fun0037 }
 242:
                _fun0037_ip = 65; continue _fun0037;
 247:
                var2 = var2.layoutStart;
                var2 = var2 - var4;
                var3['anchorOffset'] = var2;
                var2 = undefined;
                return var2;
 267:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getAnchorIndex';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                var3 = this;
                var2 = var3.anchorId;
                var1 = null;
                if(!(var1 == var2)) { _fun0038_ip = 19; continue _fun0038 }
 15:
                var1 = undefined;
                return var1;
 19:
                var4 = var3.anchorId;
                var2 = arg1;
                var1 = undefined;
                var1 = var2.bind(var1)(var4);
                var2 = var3.cleanAnchor;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var1['value'] = var5;
        var2[5] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var7 = var7.bind(var1)();
    var _closure1_slot30 = var7;
    var7 = {};
    var11 = 'function FastListTsx2(event){const{horizontal,workletMounted,scrollPosValue}=this.__closure;const scrollPosition=!horizontal?event.contentOffset.y:event.contentOffset.x;const contentSize=!horizontal?event.contentSize.height:event.contentSize.width;if(contentSize===0&&!workletMounted.get())return;workletMounted.set(true);scrollPosValue.set(Math.min(scrollPosition,contentSize));}';
    var7['code'] = var11;
    var _closure1_slot31 = var7;
    var7 = var2.PureComponent;
    var2 = function(arg1) {
        var5 = function FastList(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                var4 = this;
                var1 = _closure1_slot9;
                var3 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var4, var3);
                var11 = new Array(1);
                var1 = arg1;
                var11[0] = var1;
                var1 = _closure1_slot6;
                var10 = var1.bind(var6)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot32;
                var1 = var1.bind(var6)();
                if(var1) { _fun0039_ip = 75; continue _fun0039 }
 62:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var4, var11);
                _fun0039_ip = 109; continue _fun0039;
 75:
                var5 = global;
                var9 = var5.Reflect;
                var8 = var9.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var6)(var4);
                var5 = var5.constructor;
                var1 = var8.bind(var9)(var10, var11, var5);
 109:
                var1 = var3.bind(var6)(var4, var1);
                var _closure3_slot0 = var1;
                var4 = 0;
                var1['containerSize'] = var4;
                var1['scrollPos'] = var4;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 17;
                var3 = var8[var3];
                var5 = var5.bind(var6)(var3);
                var3 = var5.createFakeSharedValue;
                var3 = var3.bind(var5)(var4);
                var1['scrollPosValue'] = var3;
                var3 = var1.props;
                var5 = var3.manualRef;
                var3 = null;
                if(!(var3 == var5)) { _fun0039_ip = 201; continue _fun0039 }
 187:
                var9 = _closure1_slot11;
                var8 = var9.createRef;
                var5 = var8.bind(var9)();
 201:
                var1['scrollView'] = var5;
                var5 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.state;
                    var1 = var1.items;
                    return var1;
                };
                var1['getItems'] = var5;
                var5 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.scrollPos;
                    return var1;
                };
                var1['getScrollPosition'] = var5;
                var1['disableAnchoringTimeout'] = var6;
                var1['viewTag'] = var3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 15;
                var5 = var9[var5];
                var9 = var8.bind(var6)(var5);
                var5 = var9.makeMutable;
                var8 = false;
                var5 = var5.bind(var9)(var8);
                var1['workletMounted'] = var5;
                var5 = -1;
                var1['deferredCompute'] = var5;
                var1['deferNextCompute'] = var8;
                var10 = _closure1_slot30;
                var23 = var1.getScrollPosition;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var24 = var9;
                var8 = new var24[var10](var23, var22);
                var8 = var8 instanceof Object ? var8 : var9;
                var1['scrollAnchor'] = var8;
                var1['viewabilityDebounce'] = var5;
                var5 = new Array(0);
                var1['previouslyViewableItems'] = var5;
                var5 = function(arg1) {
                    _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                        var3 = arg1;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var4 = var1.horizontal;
                        var1 = {};
                        var5 = 0;
                        if(!var4) { _fun0040_ip = 31; continue _fun0040 }
 28:
                        var5 = var3;
 31:
                        var1['x'] = var5;
                        var2 = 0;
                        if(var4) { _fun0040_ip = 43; continue _fun0040 }
 40:
                        var2 = var3;
 43:
                        var1['y'] = var2;
                        return var1;
                    }
                };
                var1['_scrollPositionToPoint'] = var5;
                var5 = function(arg1) {
                    _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                        var2 = arg1;
                        var11 = var2.itemCoords;
                        var8 = var2.fullSize;
                        var13 = var2.orientation;
                        var1 = undefined;
                        if(!(var13 === var1)) { _fun0041_ip = 31; continue _fun0041 }
 27:
                        var13 = 'top';
 31:
                        var5 = var2.paddingStart;
                        if(!(var5 === var1)) { _fun0041_ip = 43; continue _fun0041 }
 41:
                        var5 = 0;
 43:
                        var9 = var2.paddingEnd;
                        if(!(var9 === var1)) { _fun0041_ip = 55; continue _fun0041 }
 53:
                        var9 = 0;
 55:
                        var3 = var11.scrollPosition;
                        var6 = var11.size;
                        var2 = var11.sectionOffset;
                        var1 = _closure3_slot0;
                        var1 = var1.containerSize;
                        var4 = 0;
                        if(!(!(var1 > var4))) { _fun0041_ip = 122; continue _fun0041 }
 91:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var7 = var1.chunkBase;
                        var1 = null;
                        var12 = var1 != var7;
                        var1 = 0;
                        if(!var12) { _fun0041_ip = 120; continue _fun0041 }
 117:
                        var1 = var7;
 120:
                        _fun0041_ip = 132; continue _fun0041;
 122:
                        var7 = _closure3_slot0;
                        var1 = var7.containerSize;
 132:
                        if(!(var6 >= var1)) { _fun0041_ip = 140; continue _fun0041 }
 136:
                        var13 = 'top';
 140:
                        var7 = 'visible';
                        if(!(var7 !== var13)) { _fun0041_ip = 248; continue _fun0041 }
 148:
                        var7 = 'top';
                        if(!(var7 !== var13)) { _fun0041_ip = 238; continue _fun0041 }
 156:
                        var12 = 'center';
                        var7 = var3;
                        if(!(var12 === var13)) { _fun0041_ip = 336; continue _fun0041 }
 170:
                        var14 = var11.scrollPosition;
                        var13 = global;
                        var16 = var13.Math;
                        var15 = var16.floor;
                        var12 = var11.size;
                        var11 = 2;
                        var12 = var12 / var11;
                        var12 = var15.bind(var16)(var12);
                        var12 = var14 + var12;
                        var14 = var13.Math;
                        var13 = var14.floor;
                        var11 = var1 / var11;
                        var11 = var13.bind(var14)(var11);
                        var7 = var12 - var11;
                        _fun0041_ip = 336; continue _fun0041;
 238:
                        var11 = var2 + var5;
                        var7 = var3 - var11;
                        _fun0041_ip = 336; continue _fun0041;
 248:
                        var12 = var3 + var2;
                        var11 = _closure3_slot0;
                        var11 = var11.scrollPos;
                        var11 = var11 + var5;
                        if(!(var12 >= var11)) { _fun0041_ip = 296; continue _fun0041 }
 270:
                        var12 = var3 + var6;
                        var11 = _closure3_slot0;
                        var13 = var11.scrollPos;
                        var11 = var1 - var9;
                        var11 = var13 + var11;
                        if(!(!(var12 <= var11))) { _fun0041_ip = 378; continue _fun0041 }
 296:
                        if(!(!(var6 > var1))) { _fun0041_ip = 328; continue _fun0041 }
 300:
                        var10 = _closure3_slot0;
                        var10 = var10.scrollPos;
                        if(!(!(var3 < var10))) { _fun0041_ip = 328; continue _fun0041 }
 314:
                        var6 = var3 + var6;
                        var6 = var6 + var9;
                        var7 = var6 - var1;
                        _fun0041_ip = 336; continue _fun0041;
 328:
                        var2 = var2 + var5;
                        var7 = var3 - var2;
 336:
                        var5 = global;
                        var3 = var5.Math;
                        var2 = var3.max;
                        var6 = var5.Math;
                        var5 = var6.min;
                        var1 = var8 - var1;
                        var1 = var5.bind(var6)(var7, var1);
                        var1 = var2.bind(var3)(var4, var1);
                        return var1;
 378:
                        var1 = null;
                        return var1;
                    }
                };
                var1['_calculateScrollPosition'] = var5;
                var9 = var1.props;
                var5 = var9.chunkBase;
                var20 = var9.headerSize;
                var19 = var9.footerSize;
                var18 = var9.sectionSize;
                var17 = var9.itemSize;
                var16 = var9.sectionFooterSize;
                var15 = var9.sections;
                var14 = var9.insetStart;
                var13 = var9.insetEnd;
                var8 = var9.stickyHeaderFooter;
                var12 = var6 !== var8;
                if(!var12) { _fun0039_ip = 447; continue _fun0039 }
 444:
                var12 = var8;
 447:
                var11 = var9.getRecyclerKey;
                var8 = var9.persistantKeys;
                var10 = var9.disableRecyclingOnFullCompute;
                var9 = _closure1_slot22;
                var7 = {};
                var7['headerSize'] = var20;
                var7['footerSize'] = var19;
                var7['sectionSize'] = var18;
                var7['itemSize'] = var17;
                var7['sectionFooterSize'] = var16;
                var7['sections'] = var15;
                var7['insetStart'] = var14;
                var7['insetEnd'] = var13;
                var7['stickyHeaderFooter'] = var12;
                var7['getRecyclerKey'] = var11;
                var7['persistantKeys'] = var8;
                var8 = var6 !== var10;
                if(!var8) { _fun0039_ip = 536; continue _fun0039 }
 533:
                var8 = var10;
 536:
                var7['disableRecyclingOnFullCompute'] = var8;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var24 = var8;
                var23 = var7;
                var7 = new var24[var9](var23, var22);
                var9 = var7 instanceof Object ? var7 : var8;
                var8 = var1.getInitialState;
                var10 = var3 != var5;
                var7 = 0;
                if(!var10) { _fun0039_ip = 582; continue _fun0039 }
 579:
                var7 = var5;
 582:
                var5 = true;
                var5 = var8.bind(var1)(var7, var9, var5);
                var1['state'] = var5;
                var5 = function() {
                    _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.onViewableItemsChanged;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0042_ip = 299; continue _fun0042 }
 27:
                        var1 = _closure3_slot0;
                        var2 = var1.getViewabilityConfig;
                        var2 = var2.bind(var1)();
                        var12 = var2.visibilityThreshold;
                        var2 = var1.state;
                        var7 = var2.items;
                        var11 = var1.scrollPos;
                        var2 = var1.scrollPos;
                        var1 = var1.containerSize;
                        var10 = var2 + var1;
                        var2 = new Array(0);
                        var6 = _closure1_slot33;
                        var1 = undefined;
                        var9 = var6.bind(var1)(var7);
                        var7 = var9.bind(var1)();
                        var6 = var7.done;
                        var8 = global;
                        if(var6) { _fun0042_ip = 239; continue _fun0042 }
 115:
                        var6 = var7.value;
                        var13 = var6.layoutStart;
                        if(!(!(var13 > var10))) { _fun0042_ip = 239; continue _fun0042 }
 130:
                        var15 = var8.Math;
                        var14 = var15.max;
                        var13 = var6.layoutStart;
                        var14 = var14.bind(var15)(var13, var11);
                        var16 = var8.Math;
                        var15 = var16.min;
                        var17 = var6.layoutStart;
                        var13 = var6.layoutSize;
                        var13 = var17 + var13;
                        var13 = var15.bind(var16)(var13, var10);
                        if(!(!(var14 >= var13))) { _fun0042_ip = 224; continue _fun0042 }
 190:
                        var14 = var13 - var14;
                        var13 = var6.layoutSize;
                        var13 = var14 / var13;
                        if(!(var13 >= var12)) { _fun0042_ip = 224; continue _fun0042 }
 208:
                        var13 = var2.push;
                        var6 = var6.recyclerKey;
                        var6 = var13.bind(var2)(var6);
 224:
                        var13 = var9.bind(var1)();
                        var6 = var13.done;
                        var7 = var13;
                        if(!var6) { _fun0042_ip = 115; continue _fun0042 }
 239:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 11;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.areArraysShallowEqual;
                        var5 = _closure3_slot0;
                        var5 = var5.previouslyViewableItems;
                        var5 = var6.bind(var7)(var2, var5);
                        if(var5) { _fun0042_ip = 299; continue _fun0042 }
 284:
                        var4 = _closure3_slot0;
                        var4['previouslyViewableItems'] = var2;
                        var1 = var3.bind(var1)(var2);
 299:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleViewabilityChange'] = var5;
                var5 = function(arg1) {
                    _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
                        var3 = arg1;
                        var5 = arguments[1];
                        var4 = arguments[2];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0043_ip = 17; continue _fun0043 }
 15:
                        var5 = 0;
 17:
                        if(!(var4 === var1)) { _fun0043_ip = 23; continue _fun0043 }
 21:
                        var4 = 0;
 23:
                        var1 = _closure3_slot0;
                        var1 = var1.scrollPos;
                        var1 = var1 + var5;
                        var1 = var3 >= var1;
                        if(!var1) { _fun0043_ip = 75; continue _fun0043 }
 47:
                        var2 = _closure3_slot0;
                        var5 = var2.scrollPos;
                        var2 = var2.containerSize;
                        var2 = var5 + var2;
                        var2 = var2 - var4;
                        var1 = var3 <= var2;
 75:
                        return var1;
                    }
                };
                var1['isVisible'] = var5;
                var5 = function() {
                    _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
                        var5 = arguments[0];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0044_ip = 11; continue _fun0044 }
 9:
                        var5 = true;
 11:
                        var2 = _closure3_slot0;
                        var3 = var2.scrollView;
                        var6 = null;
                        var2 = var6 == var3;
                        var4 = var3;
                        if(var2) { _fun0044_ip = 48; continue _fun0044 }
 36:
                        var3 = var3.current;
                        var2 = var6 == var3;
                        var4 = var3;
 48:
                        if(var2) { _fun0044_ip = 77; continue _fun0044 }
 51:
                        var3 = var4.scrollTo;
                        var2 = {'x': 0, 'y': 0};
                        var2['animated'] = var5;
                        var2 = var3.bind(var4)(var2);
 77:
                        return var1;
                    }
                };
                var1['scrollToTop'] = var5;
                var5 = function(arg1) {
                    _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
                        var1 = arg1;
                        var11 = var1.section;
                        var10 = var1.item;
                        var6 = var1.animated;
                        var16 = undefined;
                        if(!(var6 === var16)) { _fun0045_ip = 27; continue _fun0045 }
 25:
                        var6 = false;
 27:
                        var15 = var1.orientation;
                        if(!(var15 === var16)) { _fun0045_ip = 41; continue _fun0045 }
 37:
                        var15 = 'top';
 41:
                        var14 = var1.paddingStart;
                        if(!(var14 === var16)) { _fun0045_ip = 53; continue _fun0045 }
 51:
                        var14 = 0;
 53:
                        var13 = var1.paddingEnd;
                        if(!(var13 === var16)) { _fun0045_ip = 65; continue _fun0045 }
 63:
                        var13 = 0;
 65:
                        var7 = var1.setAnchor;
                        if(!(var7 === var16)) { _fun0045_ip = 77; continue _fun0045 }
 75:
                        var7 = false;
 77:
                        var1 = _closure3_slot0;
                        var1 = var1.scrollView;
                        var4 = var1.current;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0045_ip = 441; continue _fun0045 }
 104:
                        var3 = _closure3_slot0;
                        var2 = var3.props;
                        var9 = var2.getAnchorIdFromIndex;
                        var12 = var2.stickySectionsVariant;
                        var8 = 'default';
                        var2 = var8;
                        if(!(var16 !== var12)) { _fun0045_ip = 139; continue _fun0045 }
 136:
                        var2 = var12;
 139:
                        var3 = var3.state;
                        var17 = var3.fastListComputer;
                        var3 = var17.computeScrollPosition;
                        var2 = var8 === var2;
                        var2 = var3.bind(var17)(var2, var11, var10);
                        if(!(var1 != var2)) { _fun0045_ip = 437; continue _fun0045 }
 174:
                        var3 = 'visible';
                        if(!(var3 === var15)) { _fun0045_ip = 211; continue _fun0045 }
 182:
                        var12 = _closure3_slot0;
                        var8 = var12.isVisible;
                        var3 = var2.scrollPosition;
                        var3 = var8.bind(var12)(var3, var14, var13);
                        if(var3) { _fun0045_ip = 433; continue _fun0045 }
 211:
                        var12 = _closure3_slot0;
                        var8 = var12._calculateScrollPosition;
                        var3 = {};
                        var3['itemCoords'] = var2;
                        var16 = var17.getSize;
                        var16 = var16.bind(var17)();
                        var3['fullSize'] = var16;
                        var3['orientation'] = var15;
                        var3['paddingStart'] = var14;
                        var3['paddingEnd'] = var13;
                        var8 = var8.bind(var12)(var3);
                        var3 = !var6;
                        if(!var3) { _fun0045_ip = 272; continue _fun0045 }
 269:
                        var3 = var7;
 272:
                        if(!var3) { _fun0045_ip = 279; continue _fun0045 }
 275:
                        var3 = var1 != var9;
 279:
                        if(!var3) { _fun0045_ip = 338; continue _fun0045 }
 282:
                        var3 = _closure3_slot0;
                        var7 = var3.scrollAnchor;
                        var3 = var7.setCustomAnchor;
                        var12 = var2.scrollPosition;
                        var13 = var1 != var8;
                        var2 = 0;
                        if(!var13) { _fun0045_ip = 318; continue _fun0045 }
 315:
                        var2 = var8;
 318:
                        var20 = var12 - var2;
                        var22 = var7;
                        var21 = var9;
                        var19 = var11;
                        var18 = var10;
                        var2 = var22[var3](var21, var20, var19, var18, var17);
 338:
                        var1 = var1 != var8;
                        if(!var1) { _fun0045_ip = 359; continue _fun0045 }
 345:
                        var2 = _closure3_slot0;
                        var2 = var2.scrollPos;
                        var1 = var8 !== var2;
 359:
                        if(!var1) { _fun0045_ip = 431; continue _fun0045 }
 362:
                        if(var6) { _fun0045_ip = 385; continue _fun0045 }
 365:
                        var3 = _closure3_slot0;
                        var3['scrollPos'] = var8;
                        var2 = var3.computeBlocks;
                        var2 = var2.bind(var3)();
 385:
                        var3 = var4.scrollTo;
                        var2 = {};
                        var7 = _closure3_slot0;
                        var5 = var7._scrollPositionToPoint;
                        var20 = var5.bind(var7)(var8);
                        var21 = var2;
                        var5 = copyDataProperties(var21, var20);
                        var5 = 'animated';
                        var2[var5] = var6;
                        var2 = var3.bind(var4)(var2);
                        var1 = true;
 431:
                        return var1;
 433:
                        var1 = false;
                        return var1;
 437:
                        var1 = false;
                        return var1;
 441:
                        var1 = false;
                        return var1;
                    }
                };
                var1['scrollToLocation'] = var5;
                var5 = function(arg1) {
                    _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
                        var9 = arg1;
                        var7 = arguments[1];
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0046_ip = 14; continue _fun0046 }
 12:
                        var7 = false;
 14:
                        var1 = _closure3_slot0;
                        var2 = var1.scrollView;
                        var5 = var2.current;
                        var1 = var1.state;
                        var3 = var1.fastListComputer;
                        var1 = null;
                        var1 = var1 != var5;
                        if(!var1) { _fun0046_ip = 149; continue _fun0046 }
 52:
                        var2 = var3.getSize;
                        var3 = var2.bind(var3)();
                        var2 = _closure3_slot0;
                        var2 = var2.containerSize;
                        var2 = var3 - var2;
                        var2 = var9 <= var2;
                        if(!var2) { _fun0046_ip = 97; continue _fun0046 }
 83:
                        var3 = _closure3_slot0;
                        var3 = var3.scrollPos;
                        var2 = var9 !== var3;
 97:
                        if(!var2) { _fun0046_ip = 146; continue _fun0046 }
 100:
                        var4 = var5.scrollTo;
                        var3 = {};
                        var8 = _closure3_slot0;
                        var6 = var8._scrollPositionToPoint;
                        var10 = var6.bind(var8)(var9);
                        var11 = var3;
                        var6 = copyDataProperties(var11, var10);
                        var6 = 'animated';
                        var3[var6] = var7;
                        var3 = var4.bind(var5)(var3);
                        var2 = true;
 146:
                        var1 = var2;
 149:
                        return var1;
                    }
                };
                var1['scrollTo'] = var5;
                var5 = function(arg1) {
                    _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
                        var8 = arg1;
                        var3 = _closure3_slot0;
                        var4 = var3.props;
                        var7 = var4.contentInset;
                        var1 = undefined;
                        if(!(var1 === var7)) { _fun0047_ip = 36; continue _fun0047 }
 29:
                        var7 = _closure1_slot18;
 36:
                        var9 = var4.horizontal;
                        var15 = var4.onScroll;
                        var6 = var4.onEndReached;
                        var12 = var4.endReachedThreshold;
                        var4 = var4.EXPERIMENTAL_enableAnchorWhileScrolling;
                        var14 = var1 !== var4;
                        if(!var14) { _fun0047_ip = 76; continue _fun0047 }
 73:
                        var14 = var4;
 76:
                        var3 = var3.state;
                        var20 = var3.fastListComputer;
                        var4 = var3.hasReachedEndBefore;
                        var3 = var8.nativeEvent;
                        var3 = var3.layoutMeasurement;
                        if(var9) { _fun0047_ip = 115; continue _fun0047 }
 108:
                        var10 = var3.height;
                        _fun0047_ip = 120; continue _fun0047;
 115:
                        var10 = var3.width;
 120:
                        if(var9) { _fun0047_ip = 130; continue _fun0047 }
 123:
                        var16 = var7.top;
                        _fun0047_ip = 135; continue _fun0047;
 130:
                        var16 = var7.left;
 135:
                        var13 = null;
                        var17 = var13 != var16;
                        var5 = 0;
                        var3 = 0;
                        if(!var17) { _fun0047_ip = 151; continue _fun0047 }
 148:
                        var3 = var16;
 151:
                        if(var9) { _fun0047_ip = 161; continue _fun0047 }
 154:
                        var16 = var7.bottom;
                        _fun0047_ip = 166; continue _fun0047;
 161:
                        var16 = var7.right;
 166:
                        var17 = var13 != var16;
                        var7 = 0;
                        if(!var17) { _fun0047_ip = 178; continue _fun0047 }
 175:
                        var7 = var16;
 178:
                        var16 = _closure3_slot0;
                        var3 = var10 - var3;
                        var3 = var3 - var7;
                        var16['containerSize'] = var3;
                        var3 = global;
                        var19 = var3.Math;
                        var18 = var19.min;
                        var21 = var3.Math;
                        var17 = var21.max;
                        var7 = var16.getScrollPositionFromEvent;
                        var7 = var7.bind(var16)(var8);
                        var17 = var17.bind(var21)(var5, var7);
                        var7 = var20.getSize;
                        var20 = var7.bind(var20)();
                        var7 = var16.containerSize;
                        var7 = var20 - var7;
                        var7 = var18.bind(var19)(var17, var7);
                        var16['scrollPos'] = var7;
                        if(!(var13 != var15)) { _fun0047_ip = 280; continue _fun0047 }
 275:
                        var15 = var15.bind(var1)(var8);
 280:
                        var15 = _closure3_slot0;
                        var16 = var15.deferNextCompute;
                        var15 = _closure3_slot0;
                        if(var16) { _fun0047_ip = 309; continue _fun0047 }
 297:
                        var16 = var15.computeBlocks;
                        var16 = var16.bind(var15)();
                        _fun0047_ip = 380; continue _fun0047;
 309:
                        var16 = false;
                        var15['deferNextCompute'] = var16;
                        var16 = var15.deferredCompute;
                        var15 = -1;
                        if(!(var15 !== var16)) { _fun0047_ip = 354; continue _fun0047 }
 333:
                        var16 = var3.cancelAnimationFrame;
                        var15 = _closure3_slot0;
                        var15 = var15.deferredCompute;
                        var15 = var16.bind(var1)(var15);
 354:
                        var16 = _closure3_slot0;
                        var17 = var3.requestAnimationFrame;
                        var15 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.computeBlocks;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var15 = var17.bind(var1)(var15);
                        var16['deferredCompute'] = var15;
 380:
                        if(var14) { _fun0047_ip = 430; continue _fun0047 }
 383:
                        var16 = var3.clearTimeout;
                        var14 = _closure3_slot0;
                        var15 = var14.disableAnchoringTimeout;
                        var15 = var16.bind(var1)(var15);
                        var16 = var3.setTimeout;
                        var15 = function() {
                            var1 = global;
                            var4 = var1.clearTimeout;
                            var2 = _closure3_slot0;
                            var3 = var2.disableAnchoringTimeout;
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var2['disableAnchoringTimeout'] = var1;
                            return var1;
                        };
                        var11 = 100;
                        var11 = var16.bind(var1)(var15, var11);
                        var14['disableAnchoringTimeout'] = var11;
 430:
                        if(!(var13 != var6)) { _fun0047_ip = 606; continue _fun0047 }
 437:
                        var8 = var8.nativeEvent;
                        var8 = var8.contentSize;
                        if(var9) { _fun0047_ip = 459; continue _fun0047 }
 452:
                        var11 = var8.height;
                        _fun0047_ip = 464; continue _fun0047;
 459:
                        var11 = var8.width;
 464:
                        var9 = var3.Math;
                        var8 = var9.ceil;
                        var13 = var13 != var12;
                        var5 = 0;
                        if(!var13) { _fun0047_ip = 488; continue _fun0047 }
 485:
                        var5 = var12;
 488:
                        var5 = var11 - var5;
                        var5 = var5 - var10;
                        var8 = var8.bind(var9)(var5);
                        var5 = var3.Math;
                        var3 = var5.ceil;
                        var7 = var3.bind(var5)(var7);
                        var5 = var7 >= var8;
                        if(!var5) { _fun0047_ip = 570; continue _fun0047 }
 525:
                        if(var4) { _fun0047_ip = 570; continue _fun0047 }
 528:
                        var10 = _closure3_slot0;
                        var9 = var10.setState;
                        var3 = {};
                        var11 = true;
                        var3['hasReachedEndBefore'] = var11;
                        var3 = var9.bind(var10)(var3);
                        var3 = {};
                        var7 = var7 - var8;
                        var3['distanceFromEnd'] = var7;
                        var3 = var6.bind(var1)(var3);
                        _fun0047_ip = 606; continue _fun0047;
 570:
                        var3 = !var5;
                        if(var5) { _fun0047_ip = 579; continue _fun0047 }
 576:
                        var3 = var4;
 579:
                        if(!var3) { _fun0047_ip = 606; continue _fun0047 }
 582:
                        var5 = _closure3_slot0;
                        var4 = var5.setState;
                        var3 = {};
                        var6 = false;
                        var3['hasReachedEndBefore'] = var6;
                        var3 = var4.bind(var5)(var3);
 606:
                        var3 = _closure3_slot0;
                        var2 = var3.queueViewabilityChange;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var1['handleScroll'] = var5;
                var5 = function(arg1) {
                    _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
                        var9 = arg1;
                        var3 = var9.nativeEvent;
                        var1 = _closure3_slot0;
                        var4 = var1.state;
                        var5 = var4.isFirstLayout;
                        var8 = var4.fastListComputer;
                        var4 = var1.props;
                        var13 = var4.contentInset;
                        var1 = undefined;
                        if(!(var1 === var13)) { _fun0048_ip = 57; continue _fun0048 }
 50:
                        var13 = _closure1_slot18;
 57:
                        var7 = var4.onLayout;
                        var10 = var4.horizontal;
                        var4 = var4.chunkBase;
                        var3 = var3.layout;
                        if(var10) { _fun0048_ip = 91; continue _fun0048 }
 84:
                        var12 = var3.height;
                        _fun0048_ip = 96; continue _fun0048;
 91:
                        var12 = var3.width;
 96:
                        if(var10) { _fun0048_ip = 106; continue _fun0048 }
 99:
                        var14 = var13.top;
                        _fun0048_ip = 111; continue _fun0048;
 106:
                        var14 = var13.left;
 111:
                        var3 = null;
                        var15 = var3 != var14;
                        var6 = 0;
                        if(!var15) { _fun0048_ip = 125; continue _fun0048 }
 122:
                        var6 = var14;
 125:
                        if(var10) { _fun0048_ip = 135; continue _fun0048 }
 128:
                        var10 = var13.bottom;
                        _fun0048_ip = 140; continue _fun0048;
 135:
                        var10 = var13.right;
 140:
                        var13 = var3 != var10;
                        var11 = 0;
                        if(!var13) { _fun0048_ip = 152; continue _fun0048 }
 149:
                        var11 = var10;
 152:
                        var10 = _closure3_slot0;
                        var6 = var12 - var6;
                        var6 = var6 - var11;
                        var10['containerSize'] = var6;
                        if(!(var3 == var4)) { _fun0048_ip = 195; continue _fun0048 }
 174:
                        var10 = var8.setInfo;
                        var6 = _closure3_slot0;
                        var6 = var6.containerSize;
                        var6 = var10.bind(var8)(var6);
 195:
                        if(!(var3 != var7)) { _fun0048_ip = 209; continue _fun0048 }
 199:
                        var6 = _closure3_slot0;
                        var6 = var7.bind(var1)(var9, var6);
 209:
                        if(var5) { _fun0048_ip = 228; continue _fun0048 }
 212:
                        var6 = _closure3_slot0;
                        var5 = var6.computeBlocks;
                        var5 = var5.bind(var6)();
                        _fun0048_ip = 284; continue _fun0048;
 228:
                        if(!(var3 != var4)) { _fun0048_ip = 248; continue _fun0048 }
 232:
                        var4 = _closure3_slot0;
                        var3 = var4.restoreScrollPosition;
                        var3 = var3.bind(var4)();
                        _fun0048_ip = 284; continue _fun0048;
 248:
                        var5 = _closure3_slot0;
                        var4 = var5.setState;
                        var7 = var5.getInitialState;
                        var6 = var5.containerSize;
                        var3 = false;
                        var3 = var7.bind(var5)(var6, var8, var3);
                        var3 = var4.bind(var5)(var3);
 284:
                        var3 = _closure3_slot0;
                        var2 = var3.queueViewabilityChange;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var1['handleLayout'] = var5;
                var5 = function(arg1) {
                    _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.onScrollEnd;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0049_ip = 34; continue _fun0049 }
 24:
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
 34:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMomentumScrollEnd'] = var5;
                var2 = function(arg1) {
                    _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
                        var2 = _closure3_slot0;
                        var4 = var2.scrollAnchor;
                        var3 = var4.handleUserScroll;
                        var3 = var3.bind(var4)();
                        var2 = var2.props;
                        var3 = var2.onScrollBeginDrag;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0050_ip = 65; continue _fun0050 }
 42:
                        var1 = _closure3_slot0;
                        var3 = var1.props;
                        var2 = var3.onScrollBeginDrag;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
 65:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleScrollBeginDrag'] = var2;
                var2 = var1.props;
                var5 = var2.batchesToRender;
                var7 = 12;
                if(!(var6 !== var5)) { _fun0039_ip = 717; continue _fun0039 }
 714:
                var7 = var5;
 717:
                var5 = var2.getAnchorIdFromIndex;
                var2 = var2.getAnchorIndexFromId;
                var6 = 5;
                if(!(!(var7 < var6))) { _fun0039_ip = 908; continue _fun0039 }
 739:
                if(!(var3 == var5)) { _fun0039_ip = 747; continue _fun0039 }
 743:
                if(!(var3 != var2)) { _fun0039_ip = 791; continue _fun0039 }
 747:
                if(!(var3 != var5)) { _fun0039_ip = 755; continue _fun0039 }
 751:
                if(!(var3 == var2)) { _fun0039_ip = 791; continue _fun0039 }
 755:
                var2 = global;
                var5 = var2.Error;
                var2 = var5.prototype;
                var3 = Object.create(var2, {constructor: {value: var5}});
                var23 = 'FastList: You must define BOTH `getAnchorIndexFromId` and `getAnchorIdFromIndex`, or neither';
                var24 = var3;
                var2 = new var24[var5](var23, var22);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
 791:
                var2 = var1.getViewabilityConfig;
                var2 = var2.bind(var1)();
                var3 = var2.minimumViewTime;
                if(!(!(var3 <= var4))) { _fun0039_ip = 872; continue _fun0039 }
 811:
                var3 = var2.visibilityThreshold;
                if(!(!(var3 <= var4))) { _fun0039_ip = 836; continue _fun0039 }
 821:
                var3 = var2.visibilityThreshold;
                var2 = 1;
                if(!(!(var3 > var2))) { _fun0039_ip = 836; continue _fun0039 }
 834:
                return var1;
 836:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var23 = 'FastList: `viewabilityConfig.visibilityThreshold` must be floating point value greater than 0 and less than 1';
                var24 = var2;
                var1 = new var24[var3](var23, var22);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
 872:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var23 = 'FastList: `viewabilityConfig.minimumViewTime` must be greater than 0';
                var24 = var2;
                var1 = new var24[var3](var23, var22);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
 908:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var23 = 'FastList: `batchesToRender` must be >= 6';
                var24 = var2;
                var1 = new var24[var3](var23, var22);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot10;
        var6 = {};
        var2 = 'computeScrollPosition';
        var6['key'] = var2;
        var2 = function value(arg1, arg2) {
            var1 = this;
            var1 = var1.state;
            var5 = var1.fastListComputer;
            var4 = var5.computeScrollPosition;
            var3 = false;
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var6['value'] = var2;
        var2 = new Array(18);
        var2[0] = var6;
        var6 = {};
        var7 = 'getInitialState';
        var6['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
                var2 = arg1;
                var4 = arg2;
                var10 = arguments[3];
                var9 = this;
                var14 = undefined;
                if(!(var10 === var14)) { _fun0051_ip = 22; continue _fun0051 }
 18:
                var10 = new Array(0);
 22:
                var1 = var9.props;
                var3 = var1.initialScrollSection;
                var8 = 0;
                var22 = 0;
                if(!(var14 !== var3)) { _fun0051_ip = 44; continue _fun0051 }
 41:
                var22 = var3;
 44:
                var20 = var1.initialScrollItem;
                var3 = var1.initialScrollOrientation;
                var21 = 'visible';
                if(!(var14 !== var3)) { _fun0051_ip = 67; continue _fun0051 }
 64:
                var21 = var3;
 67:
                var18 = var1.initialScrollStart;
                var3 = var1.stickySectionsVariant;
                var23 = 'default';
                var15 = var23;
                if(!(var14 !== var3)) { _fun0051_ip = 93; continue _fun0051 }
 90:
                var15 = var3;
 93:
                var3 = var1.horizontal;
                var12 = var14 !== var3;
                if(!var12) { _fun0051_ip = 109; continue _fun0051 }
 106:
                var12 = var3;
 109:
                var1 = var1.scrollPosValue;
                var3 = var4.setInfo;
                var3 = var3.bind(var4)(var2);
                var3 = _closure1_slot37;
                var7 = var3.bind(var14)(var2);
                var13 = null;
                var3 = var13 != var18;
                var17 = 0;
                if(!var3) { _fun0051_ip = 152; continue _fun0051 }
 149:
                var17 = var18;
 152:
                var16 = var17 + var2;
                if(!(var13 == var18)) { _fun0051_ip = 345; continue _fun0051 }
 163:
                if(!(!(var22 > var8))) { _fun0051_ip = 185; continue _fun0051 }
 167:
                var19 = var13 != var20;
                var6 = var17;
                var5 = var16;
                var3 = undefined;
                if(!var19) { _fun0051_ip = 362; continue _fun0051 }
 185:
                var19 = var2 > var8;
                var6 = var17;
                var5 = var16;
                var3 = undefined;
                if(!var19) { _fun0051_ip = 362; continue _fun0051 }
 203:
                var19 = var4.computeScrollPosition;
                var15 = var23 === var15;
                var15 = var19.bind(var4)(var15, var22, var20);
                var19 = var13 != var15;
                var6 = var17;
                var5 = var16;
                var3 = undefined;
                if(!var19) { _fun0051_ip = 362; continue _fun0051 }
 238:
                var20 = var9._calculateScrollPosition;
                var19 = {};
                var19['itemCoords'] = var15;
                var22 = var4.getSize;
                var22 = var22.bind(var4)();
                var19['fullSize'] = var22;
                var19['orientation'] = var21;
                var21 = 16;
                var19['paddingEnd'] = var21;
                var21 = var20.bind(var9)(var19);
                var20 = var21;
                if(!(var13 == var20)) { _fun0051_ip = 307; continue _fun0051 }
 291:
                var19 = var15.scrollPosition;
                var15 = var15.sectionOffset;
                var20 = var19 - var15;
 307:
                var19 = var20 + var2;
                var15 = var13 != var21;
                var6 = var20;
                var5 = var19;
                var3 = undefined;
                if(!var15) { _fun0051_ip = 362; continue _fun0051 }
 326:
                var15 = var9._scrollPositionToPoint;
                var3 = var15.bind(var9)(var21);
                var6 = var20;
                var5 = var19;
                _fun0051_ip = 362; continue _fun0051;
 345:
                var15 = var9._scrollPositionToPoint;
                var3 = var15.bind(var9)(var18);
                var6 = var17;
                var5 = var16;
 362:
                if(!(var13 == var3)) { _fun0051_ip = 376; continue _fun0051 }
 366:
                var3 = {'x': 0, 'y': 0};
 376:
                if(var12) { _fun0051_ip = 386; continue _fun0051 }
 379:
                var12 = var3.y;
                _fun0051_ip = 391; continue _fun0051;
 386:
                var12 = var3.x;
 391:
                if(!(var13 == var1)) { _fun0051_ip = 434; continue _fun0051 }
 395:
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 15;
                var11 = var15[var11];
                var13 = var13.bind(var14)(var11);
                var11 = var13.makeMutable;
                var11 = var11.bind(var13)(var12);
                var9['scrollPosValue'] = var11;
                _fun0051_ip = 450; continue _fun0051;
 434:
                var11 = var1.set;
                var11 = var11.bind(var1)(var12);
                var9['scrollPosValue'] = var1;
 450:
                var1 = {};
                if(!(!(var2 > var8))) { _fun0051_ip = 473; continue _fun0051 }
 456:
                var2 = {};
                var2['size'] = var8;
                var8 = new Array(0);
                var2['items'] = var8;
                _fun0051_ip = 497; continue _fun0051;
 473:
                var9 = var4.compute;
                var24 = true;
                var28 = var4;
                var27 = var6;
                var26 = var5;
                var25 = var10;
                var2 = var28[var9](var27, var26, var25, var24, var23);
 497:
                var27 = var1;
                var26 = var2;
                var2 = copyDataProperties(var27, var26);
                var2 = 'batchSize';
                var1[var2] = var7;
                var2 = 'blockStart';
                var1[var2] = var6;
                var2 = 'blockEnd';
                var1[var2] = var5;
                var5 = arg3;
                var2 = 'isFirstLayout';
                var1[var2] = var5;
                var2 = 'fastListComputer';
                var1[var2] = var4;
                var2 = 'initialContentOffset';
                var1[var2] = var3;
                var3 = false;
                var2 = 'hasReachedEndBefore';
                var1[var2] = var3;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'componentDidMount';
        var6['key'] = var7;
        var7 = function value() {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
                var3 = this;
                var5 = var3.scrollPosValue;
                var _closure3_slot0 = var5;
                var8 = var3.workletMounted;
                var _closure3_slot1 = var8;
                var1 = var3.props;
                var2 = var1.horizontal;
                var1 = undefined;
                var9 = var1 !== var2;
                if(!var9) { _fun0052_ip = 48; continue _fun0052 }
 45:
                var9 = var2;
 48:
                var _closure3_slot2 = var9;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 15;
                var6 = var10[var6];
                var6 = var7.bind(var1)(var6);
                var7 = var6.WorkletEventHandler;
                var6 = function t(arg1) {
                    _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
                        var2 = arg1;
                        var4 = _closure3_slot2;
                        var3 = var2.contentOffset;
                        if(var4) { _fun0053_ip = 26; continue _fun0053 }
 19:
                        var6 = var3.y;
                        _fun0053_ip = 31; continue _fun0053;
 26:
                        var6 = var3.x;
 31:
                        var3 = _closure3_slot2;
                        var2 = var2.contentSize;
                        if(var3) { _fun0053_ip = 51; continue _fun0053 }
 44:
                        var5 = var2.height;
                        _fun0053_ip = 56; continue _fun0053;
 51:
                        var5 = var2.width;
 56:
                        var2 = 0;
                        var2 = var2 !== var5;
                        if(var2) { _fun0053_ip = 78; continue _fun0053 }
 65:
                        var4 = _closure3_slot1;
                        var3 = var4.get;
                        var2 = var3.bind(var4)();
 78:
                        if(!var2) { _fun0053_ip = 130; continue _fun0053 }
 81:
                        var4 = _closure3_slot1;
                        var3 = var4.set;
                        var2 = true;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot0;
                        var2 = var3.set;
                        var1 = global;
                        var4 = var1.Math;
                        var1 = var4.min;
                        var1 = var1.bind(var4)(var6, var5);
                        var1 = var2.bind(var3)(var1);
 130:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = {};
                var4['horizontal'] = var9;
                var4['workletMounted'] = var8;
                var4['scrollPosValue'] = var5;
                var6['__closure'] = var4;
                var4 = 13353994165730.0;
                var6['__workletHash'] = var4;
                var4 = _closure1_slot31;
                var6['__initData'] = var4;
                var4 = var7.prototype;
                var5 = Object.create(var4, {constructor: {value: var7}});
                var11 = ['onScroll'];
                var13 = var5;
                var12 = var6;
                var4 = new var13[var7](var12, var11, var10);
                var4 = var4 instanceof Object ? var4 : var5;
                var3['worklet'] = var4;
                var4 = _closure1_slot14;
                var2 = var3.scrollView;
                var2 = var2.current;
                var2 = var4.bind(var1)(var2);
                var3['viewTag'] = var2;
                var5 = var3.worklet;
                var4 = var5.registerForEvents;
                var2 = var3.viewTag;
                var2 = var4.bind(var5)(var2);
                var2 = var3.queueViewabilityChange;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'getSnapshotBeforeUpdate';
        var6['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
 0:
                var4 = arg2;
                var2 = this;
                var1 = arg1;
                var7 = var1.getAnchorIdFromIndex;
                var1 = var2.props;
                var3 = var1.EXPERIMENTAL_enableAnchorWhileScrolling;
                var1 = undefined;
                var1 = var1 !== var3;
                if(!var1) { _fun0054_ip = 38; continue _fun0054 }
 35:
                var1 = var3;
 38:
                var3 = var2.state;
                var8 = var3.isFirstLayout;
                if(var1) { _fun0054_ip = 67; continue _fun0054 }
 52:
                var3 = var2.disableAnchoringTimeout;
                var1 = null;
                var3 = var1 == var3;
                if(!var3) { _fun0054_ip = 147; continue _fun0054 }
 67:
                var3 = null;
                var5 = var3 == var7;
                if(var5) { _fun0054_ip = 79; continue _fun0054 }
 76:
                var5 = var8;
 79:
                if(var5) { _fun0054_ip = 92; continue _fun0054 }
 82:
                var6 = var4.isFirstLayout;
                var5 = var8 !== var6;
 92:
                if(var5) { _fun0054_ip = 121; continue _fun0054 }
 95:
                var6 = var2.scrollAnchor;
                var5 = var6.findOrUpdateAnchor;
                var4 = var4.items;
                var4 = var5.bind(var6)(var7, var4);
 121:
                var4 = var2.scrollAnchor;
                var2 = var4.hasAnchor;
                var2 = var2.bind(var4)();
                if(var2) { _fun0054_ip = 144; continue _fun0054 }
 142:
                var2 = null;
 144:
                var1 = var2;
 147:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'componentDidUpdate';
        var6['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
 0:
                var1 = arg2;
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = arg1;
                var5 = var4.scrollPosValue;
                var4 = var2.props;
                var4 = var4.scrollPosValue;
                if(!(var5 === var4)) { _fun0055_ip = 165; continue _fun0055 }
 39:
                var4 = var2.state;
                var4 = var4.isFirstLayout;
                if(var4) { _fun0055_ip = 112; continue _fun0055 }
 53:
                var4 = var1.isFirstLayout;
                if(!var4) { _fun0055_ip = 112; continue _fun0055 }
 62:
                var4 = var2.props;
                var5 = var4.chunkBase;
                var4 = null;
                if(!(var4 == var5)) { _fun0055_ip = 130; continue _fun0055 }
 79:
                var5 = var2.scrollView;
                var5 = var5.current;
                if(!(var4 != var5)) { _fun0055_ip = 130; continue _fun0055 }
 94:
                var4 = var5.measure;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.restoreScrollPosition;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                _fun0055_ip = 130; continue _fun0055;
 112:
                var3 = arg3;
                if(!var3) { _fun0055_ip = 130; continue _fun0055 }
 118:
                var3 = var2.anchorScroll;
                var3 = var3.bind(var2)();
 130:
                var3 = var2.state;
                var3 = var3.items;
                var1 = var1.items;
                if(!(var3 !== var1)) { _fun0055_ip = 161; continue _fun0055 }
 151:
                var1 = var2.queueViewabilityChange;
                var1 = var1.bind(var2)();
 161:
                var1 = undefined;
                return var1;
 165:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var6 = 'FastList: scrollPosValue cannot changed after mounting';
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'getViewabilityConfig';
        var6['key'] = var7;
        var7 = function value() {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
 0:
                var1 = this;
                var1 = var1.props;
                var4 = var1.viewabilityConfig;
                var1 = {};
                var2 = null;
                var5 = var2 == var4;
                var6 = undefined;
                if(var5) { _fun0056_ip = 33; continue _fun0056 }
 27:
                var6 = var4.minimumViewTime;
 33:
                var7 = var2 != var6;
                var5 = 1000;
                if(!var7) { _fun0056_ip = 49; continue _fun0056 }
 46:
                var5 = var6;
 49:
                var1['minimumViewTime'] = var5;
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0056_ip = 69; continue _fun0056 }
 63:
                var3 = var4.visibilityThreshold;
 69:
                var4 = var2 != var3;
                var2 = 0.5;
                if(!var4) { _fun0056_ip = 89; continue _fun0056 }
 86:
                var2 = var3;
 89:
                var1['visibilityThreshold'] = var2;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[5] = var6;
        var6 = {};
        var7 = 'queueViewabilityChange';
        var6['key'] = var7;
        var7 = function value() {
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
 0:
                var2 = this;
                var1 = var2.props;
                var3 = var1.onViewableItemsChanged;
                var1 = null;
                if(!(var1 != var3)) { _fun0057_ip = 81; continue _fun0057 }
 20:
                var1 = var2.getViewabilityConfig;
                var1 = var1.bind(var2)();
                var5 = var1.minimumViewTime;
                var1 = global;
                var6 = var1.clearTimeout;
                var3 = var2.viewabilityDebounce;
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var1.setTimeout;
                var1 = var2.handleViewabilityChange;
                var1 = var3.bind(var4)(var1, var5);
                var2['viewabilityDebounce'] = var1;
 81:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[6] = var6;
        var6 = {};
        var7 = 'reset';
        var6['key'] = var7;
        var7 = function value() {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
 0:
                var3 = this;
                var1 = var3.props;
                var1 = var1.chunkBase;
                var2 = var3.state;
                var7 = var2.fastListComputer;
                var6 = var2.items;
                var2 = var2.isFirstLayout;
                if(var2) { _fun0058_ip = 89; continue _fun0058 }
 40:
                var2 = var3.setState;
                var5 = var3.getInitialState;
                var4 = null;
                var8 = var4 != var1;
                var4 = 0;
                if(!var8) { _fun0058_ip = 66; continue _fun0058 }
 63:
                var4 = var1;
 66:
                var10 = false;
                var13 = var3;
                var12 = var4;
                var11 = var7;
                var9 = var6;
                var1 = var13[var5](var12, var11, var10, var9, var8);
                var1 = var2.bind(var3)(var1);
 89:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[7] = var6;
        var6 = {};
        var7 = 'componentWillUnmount';
        var6['key'] = var7;
        var7 = function value() {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
 0:
                var1 = this;
                var4 = var1.worklet;
                var2 = null;
                if(!(var2 != var4)) { _fun0059_ip = 32; continue _fun0059 }
 15:
                var3 = var4.unregisterFromEvents;
                var2 = var1.viewTag;
                var2 = var3.bind(var4)(var2);
 32:
                var2 = var1.deferredCompute;
                var3 = -1;
                if(!(var3 !== var2)) { _fun0059_ip = 69; continue _fun0059 }
 48:
                var2 = global;
                var5 = var2.cancelAnimationFrame;
                var4 = var1.deferredCompute;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
 69:
                var2 = var1.viewabilityDebounce;
                if(!(var3 !== var2)) { _fun0059_ip = 100; continue _fun0059 }
 79:
                var2 = global;
                var3 = var2.clearTimeout;
                var2 = var1.viewabilityDebounce;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 100:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[8] = var6;
        var6 = {};
        var7 = 'anchorScroll';
        var6['key'] = var7;
        var7 = function value() {
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
 0:
                var4 = this;
                var1 = var4.props;
                var8 = var1.getAnchorIndexFromId;
                var3 = var1.stickySectionsVariant;
                var10 = 'default';
                var1 = undefined;
                var2 = var10;
                if(!(var1 !== var3)) { _fun0060_ip = 36; continue _fun0060 }
 33:
                var2 = var3;
 36:
                var3 = var4.state;
                var9 = var3.fastListComputer;
                var3 = null;
                if(!(var3 != var8)) { _fun0060_ip = 170; continue _fun0060 }
 53:
                var5 = var4.scrollAnchor;
                var5 = var5.anchorOffset;
                if(!(var3 != var5)) { _fun0060_ip = 170; continue _fun0060 }
 69:
                var7 = var4.scrollAnchor;
                var6 = var7.getAnchorIndex;
                var6 = var6.bind(var7)(var8);
                if(!(var3 != var6)) { _fun0060_ip = 170; continue _fun0060 }
 92:
                var8 = var9.computeScrollPosition;
                var7 = var6.section;
                var6 = var6.item;
                var2 = var10 === var2;
                var2 = var8.bind(var9)(var2, var7, var6);
                var3 = var3 != var2;
                if(!var3) { _fun0060_ip = 146; continue _fun0060 }
 126:
                var7 = var4.scrollPos;
                var6 = var2.scrollPosition;
                var6 = var6 - var5;
                var3 = var7 !== var6;
 146:
                if(!var3) { _fun0060_ip = 170; continue _fun0060 }
 149:
                var3 = var4.scrollTo;
                var2 = var2.scrollPosition;
                var2 = var2 - var5;
                var2 = var3.bind(var4)(var2);
 170:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[9] = var6;
        var6 = {};
        var7 = 'getSectionItemFromPosition';
        var6['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = this;
            var1 = var1.state;
            var4 = var1.fastListComputer;
            var3 = var4.getSectionItemFromPosition;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6['value'] = var7;
        var2[10] = var6;
        var6 = {};
        var7 = 'getScrollPositionFromEvent';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
 0:
                var1 = this;
                var1 = var1.props;
                var1 = var1.horizontal;
                var2 = arg1;
                var2 = var2.nativeEvent;
                var2 = var2.contentOffset;
                if(var1) { _fun0061_ip = 39; continue _fun0061 }
 32:
                var1 = var2.y;
                _fun0061_ip = 44; continue _fun0061;
 39:
                var1 = var2.x;
 44:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[11] = var6;
        var6 = {};
        var7 = 'restoreScrollPosition';
        var6['key'] = var7;
        var7 = function value() {
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var5 = var3.props;
                var11 = var5.initialScrollItem;
                var2 = var5.initialScrollSection;
                var9 = 0;
                var1 = undefined;
                var10 = 0;
                if(!(var1 !== var2)) { _fun0062_ip = 39; continue _fun0062 }
 36:
                var10 = var2;
 39:
                var6 = var5.initialScrollOrientation;
                var2 = 'visible';
                if(!(var1 !== var6)) { _fun0062_ip = 56; continue _fun0062 }
 53:
                var2 = var6;
 56:
                var5 = var5.initialScrollStart;
                var7 = null;
                if(!(var7 == var11)) { _fun0062_ip = 79; continue _fun0062 }
 68:
                if(!(var10 <= var9)) { _fun0062_ip = 79; continue _fun0062 }
 72:
                if(!(var7 != var5)) { _fun0062_ip = 244; continue _fun0062 }
 79:
                if(!(var7 == var5)) { _fun0062_ip = 228; continue _fun0062 }
 86:
                var8 = var3.scrollToLocation;
                var6 = {};
                var6['section'] = var10;
                var12 = var7 != var11;
                var7 = -1;
                var10 = var7;
                if(!var12) { _fun0062_ip = 117; continue _fun0062 }
 114:
                var10 = var11;
 117:
                var6['item'] = var10;
                var6['orientation'] = var2;
                var2 = 16;
                var6['paddingEnd'] = var2;
                var2 = true;
                var6['setAnchor'] = var2;
                var6 = var8.bind(var3)(var6);
                if(var6) { _fun0062_ip = 220; continue _fun0062 }
 149:
                var8 = var3.scrollPosValue;
                var6 = var8.set;
                var6 = var6.bind(var8)(var9);
                var6 = var3.deferredCompute;
                if(!(var7 !== var6)) { _fun0062_ip = 194; continue _fun0062 }
 175:
                var6 = global;
                var7 = var6.cancelAnimationFrame;
                var6 = var3.deferredCompute;
                var6 = var7.bind(var1)(var6);
 194:
                var6 = global;
                var6 = var6.requestAnimationFrame;
                var4 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.computeBlocks;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4 = var6.bind(var1)(var4);
                var3['deferredCompute'] = var4;
                _fun0062_ip = 254; continue _fun0062;
 220:
                var3['deferNextCompute'] = var2;
                _fun0062_ip = 254; continue _fun0062;
 228:
                var4 = var3.scrollTo;
                var2 = false;
                var2 = var4.bind(var3)(var5, var2);
                _fun0062_ip = 254; continue _fun0062;
 244:
                var2 = var3.computeBlocks;
                var2 = var2.bind(var3)();
 254:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[12] = var6;
        var6 = {};
        var7 = 'computeBlocks';
        var6['key'] = var7;
        var7 = function value() {
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
 0:
                var4 = this;
                var2 = var4.props;
                var3 = var2.batchesToRender;
                var6 = 12;
                var1 = undefined;
                if(!(var1 !== var3)) { _fun0063_ip = 26; continue _fun0063 }
 23:
                var6 = var3;
 26:
                var11 = var2.chunkBase;
                var2 = var4.state;
                var9 = var2.fastListComputer;
                var8 = var2.items;
                var2 = null;
                if(!(var2 == var11)) { _fun0063_ip = 61; continue _fun0063 }
 55:
                var11 = var4.containerSize;
 61:
                var7 = var4.scrollPos;
                var10 = 0;
                if(!(var10 !== var11)) { _fun0063_ip = 211; continue _fun0063 }
 76:
                var3 = global;
                var5 = var3.Math;
                var2 = var5.ceil;
                var11 = var2.bind(var5)(var11);
                var5 = var3.Math;
                var2 = var5.floor;
                var14 = var2.bind(var5)(var7);
                var2 = _closure1_slot37;
                var2 = var2.bind(var1)(var11);
                var7 = var3.Math;
                var5 = var7.max;
                var13 = var3.Math;
                var12 = var13.round;
                var3 = 2;
                var11 = var11 / var3;
                var11 = var14 + var11;
                var11 = var11 / var2;
                var11 = var12.bind(var13)(var11);
                var3 = var6 / var3;
                var3 = var11 - var3;
                var3 = var5.bind(var7)(var10, var3);
                var3 = var3 * var2;
                var5 = {};
                var5['batchSize'] = var2;
                var5['blockStart'] = var3;
                var2 = var2 * var6;
                var2 = var3 + var2;
                var5['blockEnd'] = var2;
                _fun0063_ip = 225; continue _fun0063;
 211:
                var5 = {'batchSize': 0, 'blockStart': 0, 'blockEnd': 0};
 225:
                var3 = var5.batchSize;
                var2 = var4.state;
                var2 = var2.batchSize;
                var2 = var3 === var2;
                if(!var2) { _fun0063_ip = 270; continue _fun0063 }
 249:
                var6 = var5.blockStart;
                var3 = var4.state;
                var3 = var3.blockStart;
                var2 = var6 === var3;
 270:
                if(!var2) { _fun0063_ip = 294; continue _fun0063 }
 273:
                var6 = var5.blockEnd;
                var3 = var4.state;
                var3 = var3.blockEnd;
                var2 = var6 === var3;
 294:
                if(var2) { _fun0063_ip = 363; continue _fun0063 }
 297:
                var3 = var4.setState;
                var2 = {};
                var17 = var2;
                var16 = var5;
                var6 = copyDataProperties(var17, var16);
                var7 = var9.compute;
                var6 = var5.blockStart;
                var5 = var5.blockEnd;
                var16 = var7.bind(var9)(var6, var5, var8);
                var17 = var2;
                var5 = copyDataProperties(var17, var16);
                var6 = false;
                var5 = 'isFirstLayout';
                var2[var5] = var6;
                var2 = var3.bind(var4)(var2);
 363:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[13] = var6;
        var6 = {};
        var7 = 'renderItems';
        var6['key'] = var7;
        var7 = function value() {
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
 0:
                var22 = this;
                var1 = var22.props;
                var2 = var1.stickySectionsVariant;
                var21 = 'default';
                var20 = undefined;
                var19 = var21;
                if(!(var20 !== var2)) { _fun0064_ip = 32; continue _fun0064 }
 29:
                var19 = var2;
 32:
                var18 = var1.renderHeader;
                if(!(var20 === var18)) { _fun0064_ip = 49; continue _fun0064 }
 42:
                var18 = _closure1_slot35;
 49:
                var _closure3_slot0 = var18;
                var17 = var1.renderFooter;
                if(!(var20 === var17)) { _fun0064_ip = 70; continue _fun0064 }
 63:
                var17 = _closure1_slot35;
 70:
                var _closure3_slot1 = var17;
                var16 = var1.renderSection;
                if(!(var20 === var16)) { _fun0064_ip = 91; continue _fun0064 }
 84:
                var16 = _closure1_slot35;
 91:
                var _closure3_slot2 = var16;
                var15 = var1.renderItem;
                var _closure3_slot3 = var15;
                var14 = var1.renderSectionFooter;
                if(!(var20 === var14)) { _fun0064_ip = 122; continue _fun0064 }
 115:
                var14 = _closure1_slot35;
 122:
                var _closure3_slot4 = var14;
                var2 = var1.optimizeListItemRender;
                var13 = var20 !== var2;
                if(!var13) { _fun0064_ip = 142; continue _fun0064 }
 139:
                var13 = var2;
 142:
                var2 = var1.disableContentWrappers;
                var12 = var20 !== var2;
                if(!var12) { _fun0064_ip = 158; continue _fun0064 }
 155:
                var12 = var2;
 158:
                var1 = var1.debugLayout;
                var1 = var22.state;
                var3 = var1.items;
                var1 = var22.props;
                var1 = var1.horizontal;
                var2 = null;
                var11 = var2 != var1;
                if(!var11) { _fun0064_ip = 198; continue _fun0064 }
 195:
                var11 = var1;
 198:
                var10 = new Array(0);
                var _closure3_slot5 = var10;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.type;
                        var3 = var1.layoutStart;
                        var1 = _closure1_slot20;
                        var1 = var1.SECTION;
                        if(!(var2 === var1)) { _fun0065_ip = 48; continue _fun0065 }
 31:
                        var2 = _closure3_slot5;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
 48:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = new Array(0);
                var2 = _closure1_slot33;
                var8 = var2.bind(var20)(var3);
                var3 = var8.bind(var20)();
                var2 = var3.done;
                var7 = global;
                var6 = '';
                var5 = false;
                var4 = 0;
                if(var2) { _fun0064_ip = 1104; continue _fun0064 }
 262:
                var26 = var3.value;
                var29 = var26.type;
                var28 = var26.key;
                var31 = var26.layoutStart;
                var24 = var26.recyclerKey;
                var2 = var26.layoutSize;
                var25 = var26.section;
                var26 = var26.item;
                if(!(var4 !== var2)) { _fun0064_ip = 1086; continue _fun0064 }
 312:
                var27 = _closure1_slot20;
                var27 = var27.SPACER;
                if(!(var27 !== var29)) { _fun0064_ip = 1033; continue _fun0064 }
 329:
                var27 = _closure1_slot20;
                var27 = var27.HEADER;
                if(!(var27 !== var29)) { _fun0064_ip = 943; continue _fun0064 }
 346:
                var27 = _closure1_slot20;
                var27 = var27.FOOTER;
                if(!(var27 !== var29)) { _fun0064_ip = 850; continue _fun0064 }
 363:
                var27 = _closure1_slot20;
                var27 = var27.SECTION;
                if(!(var27 !== var29)) { _fun0064_ip = 609; continue _fun0064 }
 380:
                var27 = _closure1_slot20;
                var27 = var27.ITEM;
                if(!(var27 !== var29)) { _fun0064_ip = 508; continue _fun0064 }
 394:
                var27 = _closure1_slot20;
                var27 = var27.SECTION_FOOTER;
                if(!(var27 === var29)) { _fun0064_ip = 1086; continue _fun0064 }
 411:
                var29 = var1.push;
                var33 = _closure1_slot16;
                var32 = _closure1_slot26;
                var30 = {};
                var30['recyclerKey'] = var24;
                var30['horizontal'] = var11;
                var30['disableWrapper'] = var12;
                var30['fastListInstance'] = var22;
                var30['layoutSize'] = var2;
                var30['section'] = var25;
                var30['debug'] = var5;
                var27 = var14;
                if(var13) { _fun0064_ip = 471; continue _fun0064 }
 466:
                var27 = function(arg1) {
                    var7 = 0;
                    var6 = copyRestArgs(var7);
                    var3 = _closure3_slot4;
                    var2 = new Array(0);
                    var7 = var2;
                    var5 = 0;
                    var1 = arraySpread(var7, var6, var5);
                    var5 = undefined;
                    var7 = var3;
                    var6 = var2;
                    var1 = apply(var7, var6, var5);
                    return var1;
                };
 471:
                var30['children'] = var27;
                var27 = var7.HermesInternal;
                var27 = var27.concat;
                var27 = var27.bind(var6)(var28);
                var27 = var33.bind(var20)(var32, var30, var27);
                var27 = var29.bind(var1)(var27);
                _fun0064_ip = 1086; continue _fun0064;
 508:
                var27 = var1.push;
                var32 = _closure1_slot16;
                var30 = _closure1_slot27;
                var29 = {};
                var29['recyclerKey'] = var24;
                var29['horizontal'] = var11;
                var29['disableWrapper'] = var12;
                var29['layoutSize'] = var2;
                var29['fastListInstance'] = var22;
                var29['section'] = var25;
                var29['item'] = var26;
                var29['debug'] = var5;
                var26 = var15;
                if(var13) { _fun0064_ip = 572; continue _fun0064 }
 567:
                var26 = function(arg1) {
                    var7 = 0;
                    var6 = copyRestArgs(var7);
                    var3 = _closure3_slot3;
                    var2 = new Array(0);
                    var7 = var2;
                    var5 = 0;
                    var1 = arraySpread(var7, var6, var5);
                    var5 = undefined;
                    var7 = var3;
                    var6 = var2;
                    var1 = apply(var7, var6, var5);
                    return var1;
                };
 572:
                var29['children'] = var26;
                var26 = var7.HermesInternal;
                var26 = var26.concat;
                var26 = var26.bind(var6)(var28);
                var26 = var32.bind(var20)(var30, var29, var26);
                var26 = var27.bind(var1)(var26);
                _fun0064_ip = 1086; continue _fun0064;
 609:
                var26 = var10.shift;
                var26 = var26.bind(var10)();
                if(!(var21 === var19)) { _fun0064_ip = 748; continue _fun0064 }
 626:
                var27 = var1.push;
                var32 = _closure1_slot16;
                var30 = _closure1_slot24;
                var29 = {};
                var29['recyclerKey'] = var24;
                var29['horizontal'] = var11;
                var29['disableWrapper'] = var12;
                var29['layoutStart'] = var31;
                var29['layoutSize'] = var2;
                var26 = var10[var4];
                var29['nextSectionLayoutPosition'] = var26;
                var26 = var22.scrollPosValue;
                var29['scrollPosValue'] = var26;
                var29['fastListInstance'] = var22;
                var29['section'] = var25;
                var29['debug'] = var5;
                var26 = var16;
                if(var13) { _fun0064_ip = 711; continue _fun0064 }
 706:
                var26 = function(arg1) {
                    var7 = 0;
                    var6 = copyRestArgs(var7);
                    var3 = _closure3_slot2;
                    var2 = new Array(0);
                    var7 = var2;
                    var5 = 0;
                    var1 = arraySpread(var7, var6, var5);
                    var5 = undefined;
                    var7 = var3;
                    var6 = var2;
                    var1 = apply(var7, var6, var5);
                    return var1;
                };
 711:
                var29['children'] = var26;
                var26 = var7.HermesInternal;
                var26 = var26.concat;
                var26 = var26.bind(var6)(var28);
                var26 = var32.bind(var20)(var30, var29, var26);
                var26 = var27.bind(var1)(var26);
                _fun0064_ip = 1086; continue _fun0064;
 748:
                var26 = var1.push;
                var30 = _closure1_slot16;
                var29 = _closure1_slot25;
                var27 = {};
                var27['recyclerKey'] = var24;
                var27['horizontal'] = var11;
                var27['disableWrapper'] = var12;
                var27['layoutStart'] = var31;
                var27['layoutSize'] = var2;
                var27['fastListInstance'] = var22;
                var27['section'] = var25;
                var27['debug'] = var5;
                var25 = var16;
                if(var13) { _fun0064_ip = 813; continue _fun0064 }
 808:
                var25 = function(arg1) {
                    var7 = 0;
                    var6 = copyRestArgs(var7);
                    var3 = _closure3_slot2;
                    var2 = new Array(0);
                    var7 = var2;
                    var5 = 0;
                    var1 = arraySpread(var7, var6, var5);
                    var5 = undefined;
                    var7 = var3;
                    var6 = var2;
                    var1 = apply(var7, var6, var5);
                    return var1;
                };
 813:
                var27['children'] = var25;
                var25 = var7.HermesInternal;
                var25 = var25.concat;
                var25 = var25.bind(var6)(var28);
                var25 = var30.bind(var20)(var29, var27, var25);
                var25 = var26.bind(var1)(var25);
                _fun0064_ip = 1086; continue _fun0064;
 850:
                var26 = var1.push;
                var30 = _closure1_slot16;
                var29 = _closure1_slot28;
                var27 = {};
                var27['recyclerKey'] = var24;
                var27['horizontal'] = var11;
                var27['disableWrapper'] = var12;
                var27['fastListInstance'] = var22;
                var27['layoutSize'] = var2;
                var27['debug'] = var5;
                var25 = var17;
                if(var13) { _fun0064_ip = 906; continue _fun0064 }
 901:
                var25 = function(arg1) {
                    var7 = 0;
                    var6 = copyRestArgs(var7);
                    var3 = _closure3_slot1;
                    var2 = new Array(0);
                    var7 = var2;
                    var5 = 0;
                    var1 = arraySpread(var7, var6, var5);
                    var5 = undefined;
                    var7 = var3;
                    var6 = var2;
                    var1 = apply(var7, var6, var5);
                    return var1;
                };
 906:
                var27['children'] = var25;
                var25 = var7.HermesInternal;
                var25 = var25.concat;
                var25 = var25.bind(var6)(var28);
                var25 = var30.bind(var20)(var29, var27, var25);
                var25 = var26.bind(var1)(var25);
                _fun0064_ip = 1086; continue _fun0064;
 943:
                var25 = var1.push;
                var29 = _closure1_slot16;
                var27 = _closure1_slot28;
                var26 = {};
                var26['recyclerKey'] = var24;
                var26['horizontal'] = var11;
                var26['disableWrapper'] = var12;
                var26['fastListInstance'] = var22;
                var26['layoutSize'] = var2;
                var26['debug'] = var5;
                var24 = var18;
                if(var13) { _fun0064_ip = 999; continue _fun0064 }
 994:
                var24 = function(arg1) {
                    var7 = 0;
                    var6 = copyRestArgs(var7);
                    var3 = _closure3_slot0;
                    var2 = new Array(0);
                    var7 = var2;
                    var5 = 0;
                    var1 = arraySpread(var7, var6, var5);
                    var5 = undefined;
                    var7 = var3;
                    var6 = var2;
                    var1 = apply(var7, var6, var5);
                    return var1;
                };
 999:
                var26['children'] = var24;
                var24 = var7.HermesInternal;
                var24 = var24.concat;
                var24 = var24.bind(var6)(var28);
                var24 = var29.bind(var20)(var27, var26, var24);
                var24 = var25.bind(var1)(var24);
                _fun0064_ip = 1086; continue _fun0064;
 1033:
                var24 = var1.push;
                var27 = _closure1_slot16;
                var26 = _closure1_slot29;
                var25 = {};
                var25['horizontal'] = var11;
                var25['layoutSize'] = var2;
                var2 = var7.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var6)(var28);
                var2 = var27.bind(var20)(var26, var25, var2);
                var2 = var24.bind(var1)(var2);
 1086:
                var24 = var8.bind(var20)();
                var2 = var24.done;
                var3 = var24;
                if(!var2) { _fun0064_ip = 262; continue _fun0064 }
 1104:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[14] = var6;
        var6 = {};
        var7 = 'isEmpty';
        var6['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.props;
            var4 = var1.sections;
            var3 = var4.reduce;
            var1 = function(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 + var1;
                return var1;
            };
            var2 = 0;
            var1 = var3.bind(var4)(var1, var2);
            var1 = var2 === var1;
            return var1;
        };
        var6['value'] = var7;
        var2[15] = var6;
        var6 = {};
        var7 = 'setDisableRecycling';
        var6['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var1 = var1.state;
            var3 = var1.fastListComputer;
            var2 = var3.setDisableRecycling;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[16] = var6;
        var6 = {};
        var7 = 'render';
        var6['key'] = var7;
        var7 = function value() {
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
 0:
                var8 = this;
                var5 = var8.props;
                var1 = var5.manualRef;
                var1 = var5.onScroll;
                var1 = var5.onScrollEnd;
                var1 = var5.onLayout;
                var1 = var5.renderHeader;
                var1 = var5.renderFooter;
                var1 = var5.renderSection;
                var1 = var5.renderItem;
                var1 = var5.renderSectionFooter;
                var1 = var5.getRecyclerKey;
                var1 = var5.onEndReached;
                var1 = var5.endReachedThreshold;
                var1 = var5.headerSize;
                var1 = var5.footerSize;
                var1 = var5.sectionSize;
                var1 = var5.sectionFooterSize;
                var1 = var5.itemSize;
                var1 = var5.sections;
                var1 = var5.scrollPosValue;
                var1 = var5.batchesToRender;
                var1 = var5.optimizeListItemRender;
                var1 = var5.initialScrollSection;
                var1 = var5.initialScrollItem;
                var1 = var5.initialScrollOrientation;
                var1 = var5.initialScrollStart;
                var1 = var5.getAnchorIdFromIndex;
                var1 = var5.getAnchorIndexFromId;
                var1 = var5.EXPERIMENTAL_enableAnchorWhileScrolling;
                var1 = var5.chunkBase;
                var1 = var5.disableContentWrappers;
                var1 = var5.childrenWrapper;
                var1 = var5.stickyHeaderFooter;
                var1 = var5.stickySectionsVariant;
                var1 = var5.persistantKeys;
                var1 = var5.disableRecyclingOnFullCompute;
                var1 = var5.disableLegacyGestureHandling;
                var1 = var5.viewabilityConfig;
                var1 = var5.onViewableItemsChanged;
                var1 = var5.debugLayout;
                var7 = var5.renderAccessory;
                var11 = var5.removeClippedSubviews;
                var4 = undefined;
                if(!(var4 === var11)) { _fun0066_ip = 294; continue _fun0066 }
 262:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isAndroid;
                var11 = var1.bind(var2)();
 294:
                var1 = var5.inActionSheet;
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var12 = var3.bind(var4)(var5, var2);
                if(var1) { _fun0066_ip = 326; continue _fun0066 }
 320:
                var9 = _closure1_slot13;
                _fun0066_ip = 352; continue _fun0066;
 326:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var9 = var1.BottomSheetScrollView;
 352:
                var3 = _closure1_slot15;
                var2 = _closure1_slot17;
                var1 = {};
                var6 = _closure1_slot16;
                var5 = {};
                var15 = var5;
                var14 = var12;
                var12 = copyDataProperties(var15, var14);
                var13 = 'list';
                var12 = 'accessibilityRole';
                var5[var12] = var13;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 19;
                var10 = var13[var10];
                var12 = var12.bind(var4)(var10);
                var10 = var8.scrollView;
                var12 = var12.bind(var4)(var10);
                var10 = 'ref';
                var5[var10] = var12;
                var12 = 16;
                var10 = 'scrollEventThrottle';
                var5[var10] = var12;
                var10 = var8.state;
                var12 = var10.initialContentOffset;
                var10 = 'contentOffset';
                var5[var10] = var12;
                var12 = var8.handleScroll;
                var10 = 'onScroll';
                var5[var10] = var12;
                var12 = var8.handleLayout;
                var10 = 'onLayout';
                var5[var10] = var12;
                var12 = var8.handleMomentumScrollEnd;
                var10 = 'onMomentumScrollEnd';
                var5[var10] = var12;
                var12 = var8.handleScrollBeginDrag;
                var10 = 'onScrollBeginDrag';
                var5[var10] = var12;
                var10 = 'removeClippedSubviews';
                var5[var10] = var11;
                var10 = var8.renderItems;
                var11 = var10.bind(var8)();
                var10 = 'children';
                var5[var10] = var11;
                var6 = var6.bind(var4)(var9, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = null;
                var9 = var6 != var7;
                if(!var9) { _fun0066_ip = 583; continue _fun0066 }
 578:
                var6 = var7.bind(var4)(var8);
 583:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var6['value'] = var7;
        var2[17] = var6;
        var6 = {};
        var7 = 'getDerivedStateFromProps';
        var6['key'] = var7;
        var1 = function value(arg1, arg2) {
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
 0:
                var5 = arg1;
                var3 = arg2;
                var11 = var3.fastListComputer;
                var2 = var11.updateProps;
                var1 = {};
                var4 = var5.headerSize;
                var1['headerSize'] = var4;
                var4 = var5.footerSize;
                var1['footerSize'] = var4;
                var4 = var5.sectionSize;
                var1['sectionSize'] = var4;
                var4 = var5.itemSize;
                var1['itemSize'] = var4;
                var4 = var5.sectionFooterSize;
                var1['sectionFooterSize'] = var4;
                var4 = var5.sections;
                var1['sections'] = var4;
                var4 = var5.insetStart;
                var1['insetStart'] = var4;
                var4 = var5.insetEnd;
                var1['insetEnd'] = var4;
                var7 = var5.stickyHeaderFooter;
                var6 = null;
                var4 = var6 != var7;
                if(!var4) { _fun0067_ip = 126; continue _fun0067 }
 123:
                var4 = var7;
 126:
                var1['stickyHeaderFooter'] = var4;
                var4 = var5.getRecyclerKey;
                var1['getRecyclerKey'] = var4;
                var4 = var5.persistantKeys;
                var1['persistantKeys'] = var4;
                var7 = var5.disableRecyclingOnFullCompute;
                var4 = var6 != var7;
                if(!var4) { _fun0067_ip = 169; continue _fun0067 }
 166:
                var4 = var7;
 169:
                var1['disableRecyclingOnFullCompute'] = var4;
                var1 = var2.bind(var11)(var1);
                var1 = var3.batchSize;
                var4 = 0;
                if(!(var4 !== var1)) { _fun0067_ip = 269; continue _fun0067 }
 191:
                var1 = var11.isDirty;
                var2 = var1.bind(var11)();
                var1 = null;
                if(!var2) { _fun0067_ip = 267; continue _fun0067 }
 206:
                var2 = {};
                var15 = var2;
                var14 = var3;
                var7 = copyDataProperties(var15, var14);
                var10 = var11.compute;
                var9 = var3.blockStart;
                var8 = var3.blockEnd;
                var7 = var3.items;
                if(!(var6 == var7)) { _fun0067_ip = 250; continue _fun0067 }
 246:
                var7 = new Array(0);
 250:
                var14 = var10.bind(var11)(var9, var8, var7);
                var15 = var2;
                var7 = copyDataProperties(var15, var14);
                var1 = var2;
 267:
                _fun0067_ip = 346; continue _fun0067;
 269:
                var2 = {};
                var15 = var2;
                var14 = var3;
                var3 = copyDataProperties(var15, var14);
                var7 = var5.insetStart;
                var8 = var6 != var7;
                var3 = 0;
                if(!var8) { _fun0067_ip = 299; continue _fun0067 }
 296:
                var3 = var7;
 299:
                var5 = var5.insetEnd;
                var6 = var6 != var5;
                var4 = 0;
                if(!var6) { _fun0067_ip = 317; continue _fun0067 }
 314:
                var4 = var5;
 317:
                var4 = var3 + var4;
                var3 = 'size';
                var2[var3] = var4;
                var4 = new Array(0);
                var3 = 'items';
                var2[var3] = var4;
                var1 = var2;
 346:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 15;
    var2 = var10[var2];
    var8 = var8.bind(var1)(var2);
    var2 = var8.createAnimatedComponent;
    var2 = var2.bind(var8)(var7);
    var8 = 20;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'lib/native/FastList.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var6 = function getItemSizeOverrideKey(arg1, arg2, arg3) {
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var12 = '';
        var11 = arg1;
        var3 = ':';
        var9 = arg2;
        var7 = arg3;
        var10 = var3;
        var8 = var3;
        var1 = var12[var6](var11, var10, var9, var8, var7, var6);
        return var1;
    };
    var3['getItemSizeOverrideKey'] = var6;
    var3['FastListItemTypes'] = var5;
    var3['FastListComputer'] = var4;
    var3['AnimatedFastList'] = var2;
    return var1;
})();