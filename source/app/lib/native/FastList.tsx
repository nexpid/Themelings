// app/lib/native/FastList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var11;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot34;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot34;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
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
    var8 = 0;
    var2 = var11[var8];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var11[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var11[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var11[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var11[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var7 = 5;
    var2 = var11[var7];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var11[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var5 = var11[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot11 = var2;
    var5 = 8;
    var5 = var11[var5];
    var5 = var10.bind(var1)(var5);
    var12 = var5.PixelRatio;
    var _closure1_slot12 = var12;
    var12 = var5.ScrollView;
    var _closure1_slot13 = var12;
    var12 = var5.StyleSheet;
    var5 = var5.findNodeHandle;
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var11[var5];
    var5 = var10.bind(var1)(var5);
    var12 = var5.jsxs;
    var _closure1_slot15 = var12;
    var12 = var5.jsx;
    var _closure1_slot16 = var12;
    var5 = var5.Fragment;
    var _closure1_slot17 = var5;
    var5 = {'top': 0, 'right': 0, 'left': 0, 'bottom': 0};
    var _closure1_slot18 = var5;
    var4 = var4.Map;
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var16 = var5;
    var4 = new var16[var4](var15);
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
case 0:
                var5 = arg1;
                var3 = this;
                var1 = var3._items;
                var2 = var1[var5];
                var4 = null;
                if(!(var4 == var2)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var6 = var3._items;
                var1 = {};
                var6[var5] = var1;
                var2 = var1;
case 39:
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3._pendingItems;
                var2 = var2[var5];
                if(!(var4 == var2)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var4 = var3._pendingItems;
                var3 = new Array(0);
                var4[var5] = var3;
                var2 = var3;
case 41:
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
case 0:
                var8 = arg1;
                var7 = arguments[4];
                var6 = arguments[5];
                var3 = this;
                var5 = undefined;
                if(!(var7 === var5)) { _fun0006_ip = 33; continue _fun0006 }
case 43:
                var7 = 0;
case 33:
                if(!(var6 === var5)) { _fun0006_ip = 7; continue _fun0006 }
case 44:
                var6 = -1;
case 7:
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
case 0:
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
                if(!(var1 == var3)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
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
case 45:
                var10 = var2[var3];
                if(!(var1 != var10)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var1 = {};
                var17 = var1;
                var16 = var10;
                var10 = copyDataProperties(var17, var16);
                var1['layoutStart'] = var8;
                var1['layoutSize'] = var7;
                var1['section'] = var6;
                var1['item'] = var5;
                var2 = delete var2[var3];
                _fun0007_ip = 24; continue _fun0007;
case 47:
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
case 24:
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
case 0:
                var2 = arg2;
                var _closure3_slot0 = var2;
                var1 = 0;
                var _closure3_slot1 = var1;
                var3 = arg3;
                if(var3) { _fun0008_ip = 49; continue _fun0008 }
case 50:
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
case 0:
                        var1 = arg1;
                        var3 = var1.key;
                        var4 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var1 = var4[var1];
                        var4 = null;
                        if(!(var4 != var1)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                        var1['key'] = var3;
                        var1 = _closure3_slot1;
                        var1 = var1 + 1;
                        _closure3_slot1 = var1;
                        var1 = undefined;
                        return var1;
case 51:
                        var1 = false;
                        return var1;
                    }
                };
                var3 = var5.bind(var7)(var4, var3);
case 49:
                var4 = _closure3_slot1;
                var3 = var2.length;
                if(!(var4 < var3)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
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
                if(var4 < var3) { _fun0008_ip = 54; continue _fun0008 }
case 53:
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
    var4['_LAST_KEY'] = var8;
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
case 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.dirty;
                var4 = !var3;
                var3 = !var4;
                if(!var4) { _fun0010_ip = 55; continue _fun0010 }
case 50:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 11;
                var4 = var6[var4];
                var6 = undefined;
                var5 = var5.bind(var6)(var4);
                var4 = var2.props;
                var4 = var5.bind(var6)(var1, var4);
                var3 = !var4;
case 55:
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
case 0:
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
                if(!var4) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                var4 = var2.chunkSize;
                var3 = var1 !== var4;
case 56:
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
case 0:
                var1 = this;
                var1 = var1.props;
                var1 = var1.headerSize;
                var2 = undefined;
                var3 = 0;
                if(!(var2 !== var1)) { _fun0012_ip = 58; continue _fun0012 }
case 40:
                var3 = var1;
case 58:
                var5 = 'number';
                var4 = typeof var3;
                var1 = var3;
                if(!(var5 !== var4)) { _fun0012_ip = 59; continue _fun0012 }
case 60:
                var1 = var3.bind(var2)();
case 59:
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
case 0:
                var1 = this;
                var1 = var1.props;
                var1 = var1.footerSize;
                var2 = undefined;
                var3 = 0;
                if(!(var2 !== var1)) { _fun0013_ip = 58; continue _fun0013 }
case 40:
                var3 = var1;
case 58:
                var5 = 'number';
                var4 = typeof var3;
                var1 = var3;
                if(!(var5 !== var4)) { _fun0013_ip = 59; continue _fun0013 }
case 60:
                var1 = var3.bind(var2)();
case 59:
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
case 0:
                var1 = this;
                var1 = var1.props;
                var1 = var1.sectionSize;
                var3 = undefined;
                var4 = 0;
                if(!(var3 !== var1)) { _fun0014_ip = 58; continue _fun0014 }
case 40:
                var4 = var1;
case 58:
                var5 = 'number';
                var2 = typeof var4;
                var1 = var4;
                if(!(var5 !== var2)) { _fun0014_ip = 57; continue _fun0014 }
case 60:
                var2 = arg1;
                var1 = var4.bind(var3)(var2);
case 57:
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
case 0:
                var1 = this;
                var1 = var1.props;
                var5 = var1.itemSize;
                var3 = 'number';
                var2 = typeof var5;
                var1 = var5;
                if(!(var3 !== var2)) { _fun0015_ip = 61; continue _fun0015 }
case 38:
                var4 = undefined;
                var3 = arg1;
                var2 = arg2;
                var1 = var5.bind(var4)(var3, var2);
case 61:
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
case 0:
                var1 = this;
                var1 = var1.props;
                var1 = var1.sectionFooterSize;
                var3 = undefined;
                var4 = 0;
                if(!(var3 !== var1)) { _fun0016_ip = 58; continue _fun0016 }
case 40:
                var4 = var1;
case 58:
                var5 = 'number';
                var2 = typeof var4;
                var1 = var4;
                if(!(var5 !== var2)) { _fun0016_ip = 57; continue _fun0016 }
case 60:
                var2 = arg1;
                var1 = var4.bind(var3)(var2);
case 57:
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
case 0:
                var9 = arg1;
                var1 = this;
                var8 = var1.dataCache;
                var2 = var8.length;
                var7 = 1;
                var6 = var2 - var7;
                var2 = var1.chunkCache;
                var5 = null;
                if(!(var5 != var2)) { _fun0017_ip = 62; continue _fun0017 }
case 63:
                var2 = var1.chunkCache;
                var2 = var2.start;
                if(!(var9 >= var2)) { _fun0017_ip = 62; continue _fun0017 }
case 64:
                var2 = var1.chunkCache;
                var2 = var2.end;
                if(!(!(var9 <= var2))) { _fun0017_ip = 65; continue _fun0017 }
case 62:
                var3 = 2;
                var4 = 0;
                if(!(var4 <= var6)) { _fun0017_ip = 66; continue _fun0017 }
case 67:
                var2 = var6 - var4;
                var2 = var2 / var3;
                var2 = var2 | 0;
                var11 = var4 + var2;
                var2 = var8[var11];
                if(!(var5 != var2)) { _fun0017_ip = 66; continue _fun0017 }
case 68:
                var10 = var2.start;
                if(!(var9 >= var10)) { _fun0017_ip = 69; continue _fun0017 }
case 70:
                var10 = var2.end;
                if(!(!(var9 <= var10))) { _fun0017_ip = 71; continue _fun0017 }
case 69:
                var10 = var2.start;
                if(!(!(var9 < var10))) { _fun0017_ip = 72; continue _fun0017 }
case 73:
                var10 = var2.end;
                if(!(var9 > var10)) { _fun0017_ip = 66; continue _fun0017 }
case 53:
                var10 = var11 + var7;
                _fun0017_ip = 74; continue _fun0017;
case 72:
                var6 = var11 - var7;
                var10 = var4;
case 74:
                var4 = var10;
                if(var4 <= var6) { _fun0017_ip = 67; continue _fun0017 }
case 75:
                _fun0017_ip = 66; continue _fun0017;
case 71:
                var1['chunkCache'] = var2;
                return var2;
case 66:
                var2 = undefined;
                return var2;
case 65:
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
case 0:
                var8 = arg1;
                var13 = arg2;
                var1 = arguments[3];
                var3 = this;
                var _closure3_slot0 = var8;
                var _closure3_slot1 = var13;
                var12 = undefined;
                if(!(var1 === var12)) { _fun0018_ip = 7; continue _fun0018 }
case 38:
                var1 = false;
case 7:
                var _closure3_slot2 = var1;
                var _closure3_slot3 = var12;
                var _closure3_slot4 = var12;
                var _closure3_slot5 = var12;
                var _closure3_slot6 = var12;
                var28 = function addInitialSection(arg1, arg2, arg3, arg4) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
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
                        if(!(var10 < var5)) { _fun0019_ip = 76; continue _fun0019 }
case 15:
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
case 76:
                        return var1;
                    }
                };
                var27 = function isVisible(arg1, arg2) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var4 = arg1;
                        var1 = _closure3_slot2;
                        var1 = !var1;
                        if(var1) { _fun0020_ip = 77; continue _fun0020 }
case 78:
                        var5 = _closure3_slot0;
                        var2 = arg2;
                        var2 = var5 - var2;
                        var2 = var4 >= var2;
                        if(!var2) { _fun0020_ip = 61; continue _fun0020 }
case 79:
                        var3 = _closure3_slot1;
                        var2 = var4 < var3;
case 61:
                        var1 = var2;
case 77:
                        return var1;
                    }
                };
                var1 = var3.dirty;
                if(var1) { _fun0018_ip = 80; continue _fun0018 }
case 81:
                var1 = var3.lastStartChunk;
                var7 = false;
                if(!(var8 === var1)) { _fun0018_ip = 82; continue _fun0018 }
case 54:
                var1 = var3.lastEndChunk;
                var7 = false;
                if(!(var13 === var1)) { _fun0018_ip = 82; continue _fun0018 }
case 45:
                var1 = {};
                var2 = var3.size;
                var1['size'] = var2;
                var2 = var3.items;
                var1['items'] = var2;
                return var1;
case 80:
                var1 = var3.fullCompute;
                var1 = var1.bind(var3)();
                var7 = true;
case 82:
                var1 = var3.props;
                var14 = var1.stickyHeaderFooter;
                var26 = var1.getRecyclerKey;
                if(!(var12 === var26)) { _fun0018_ip = 83; continue _fun0018 }
case 84:
                var26 = _closure1_slot36;
case 83:
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
                if(var1) { _fun0018_ip = 85; continue _fun0018 }
case 86:
                var10 = var2.value;
                var17 = var10.type;
                var9 = var10.section;
                var19 = var10.type;
                var1 = _closure1_slot20;
                var18 = var1.ITEM;
                var1 = undefined;
                if(!(var19 === var18)) { _fun0018_ip = 87; continue _fun0018 }
case 88:
                var1 = var10.item;
case 87:
                var9 = var26.bind(var12)(var17, var9, var1);
                if(!(var15 != var9)) { _fun0018_ip = 89; continue _fun0018 }
case 14:
                var1 = var6.set;
                var1 = var1.bind(var6)(var9, var10);
case 89:
                var9 = var5.bind(var12)();
                var1 = var9.done;
                var2 = var9;
                if(!var1) { _fun0018_ip = 86; continue _fun0018 }
case 85:
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
                if(!(var1 <= var25)) { _fun0018_ip = 90; continue _fun0018 }
case 91:
                var8 = var3.getChunk;
                var13 = var8.bind(var3)(var1);
                var8 = var1;
                if(!(var15 != var13)) { _fun0018_ip = 92; continue _fun0018 }
case 93:
                var9 = var4.add;
                var9 = var9.bind(var4)(var13);
case 92:
                var1 = var8 + 1;
                if(var1 <= var25) { _fun0018_ip = 91; continue _fun0018 }
case 90:
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
                if(var1) { _fun0018_ip = 94; continue _fun0018 }
case 95:
                var1 = var20.value;
                var35 = var24;
                var33 = var17;
                var32 = var13;
                var31 = var9;
                var30 = var8;
                var29 = var4;
                if(!(var15 != var1)) { _fun0018_ip = 96; continue _fun0018 }
case 97:
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
                if(var1) { _fun0018_ip = 96; continue _fun0018 }
case 98:
                var46 = var39.value;
                var42 = var46.layoutStart;
                var1 = var46.layoutSize;
                var1 = var42 + var1;
                var48 = var40;
                var45 = var38;
                var44 = var37;
                var43 = var36;
                var42 = var34;
                if(!(!(var1 < var40))) { _fun0018_ip = 99; continue _fun0018 }
case 100:
                var47 = var46.type;
                var1 = _closure1_slot20;
                var1 = var1.HEADER;
                if(!(var1 !== var47)) { _fun0018_ip = 101; continue _fun0018 }
case 102:
                var1 = _closure1_slot20;
                var1 = var1.SECTION;
                if(!(var1 !== var47)) { _fun0018_ip = 103; continue _fun0018 }
case 104:
                var1 = _closure1_slot20;
                var1 = var1.ITEM;
                if(!(var1 !== var47)) { _fun0018_ip = 105; continue _fun0018 }
case 106:
                var1 = _closure1_slot20;
                var1 = var1.SECTION_FOOTER;
                if(!(var1 !== var47)) { _fun0018_ip = 107; continue _fun0018 }
case 108:
                var1 = _closure1_slot20;
                var1 = var1.FOOTER;
                var48 = var40;
                var45 = var38;
                var44 = var37;
                var43 = var36;
                var42 = var34;
                if(!(var1 === var47)) { _fun0018_ip = 99; continue _fun0018 }
case 109:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var1 = var27.bind(var12)(var47, var1);
                if(!var1) { _fun0018_ip = 110; continue _fun0018 }
case 111:
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
case 110:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var48 = var47 + var1;
                var45 = var38;
                var44 = var37;
                var43 = var36;
                var42 = var34;
                _fun0018_ip = 99; continue _fun0018;
case 107:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var1 = var27.bind(var12)(var47, var1);
                if(!var1) { _fun0018_ip = 112; continue _fun0018 }
case 113:
                var1 = var2.length;
                if(!(var10 === var1)) { _fun0018_ip = 114; continue _fun0018 }
case 115:
                var62 = var46.section;
                var1 = var46.sectionData;
                var61 = var1.layoutStart;
                var1 = var46.sectionData;
                var60 = var1.layoutSize;
                var59 = var46.layoutStart;
                var63 = undefined;
                var1 = var63[var28](var62, var61, var60, var59, var58);
case 114:
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
case 112:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var48 = var47 + var1;
                var45 = var38;
                var44 = var37;
                var43 = var36;
                var42 = var34;
                _fun0018_ip = 99; continue _fun0018;
case 105:
                var1 = var46.uniform;
                if(!(var15 != var1)) { _fun0018_ip = 116; continue _fun0018 }
case 117:
                var1 = var46.layoutStart;
                var1 = var40 > var1;
                var51 = 0;
                if(!var1) { _fun0018_ip = 118; continue _fun0018 }
case 119:
                var49 = var16.Math;
                var47 = var49.floor;
                var1 = var46.layoutStart;
                var50 = var40 - var1;
                var1 = var46.itemSize;
                var1 = var50 / var1;
                var51 = var47.bind(var49)(var1);
case 118:
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
                if(!(var52 < var1)) { _fun0018_ip = 99; continue _fun0018 }
case 120:
                var1 = var46.items;
                var50 = var52;
                var49 = var51;
                var47 = var34;
                var48 = var50;
                var45 = var38;
                var44 = var37;
                var42 = var47;
                var43 = var49;
                if(!(var43 < var1)) { _fun0018_ip = 99; continue _fun0018 }
case 121:
                var1 = var46.itemSize;
                var1 = var27.bind(var12)(var50, var1);
                var51 = var50;
                if(!var1) { _fun0018_ip = 122; continue _fun0018 }
case 123:
                var1 = var2.length;
                if(!(var10 === var1)) { _fun0018_ip = 124; continue _fun0018 }
case 125:
                var62 = var46.section;
                var1 = var46.sectionData;
                var61 = var1.layoutStart;
                var1 = var46.sectionData;
                var60 = var1.layoutSize;
                var63 = undefined;
                var59 = var51;
                var1 = var63[var28](var62, var61, var60, var59, var58);
case 124:
                var1 = var22.initialSection;
                if(!(var23 === var1)) { _fun0018_ip = 126; continue _fun0018 }
case 127:
                var1 = var46.section;
                var22['initialSection'] = var1;
case 126:
                var1 = var22.initialItem;
                if(!(var23 === var1)) { _fun0018_ip = 128; continue _fun0018 }
case 129:
                var22['initialItem'] = var49;
case 128:
                var1 = var46.section;
                var22['lastSection'] = var1;
                var22['lastItem'] = var49;
                var1 = _closure1_slot20;
                var52 = var1.ITEM;
                var1 = var46.section;
                var1 = var26.bind(var12)(var52, var1, var49);
                var52 = var15 != var1;
                if(!var52) { _fun0018_ip = 130; continue _fun0018 }
case 131:
                var53 = var6.has;
                var52 = var53.bind(var6)(var1);
case 130:
                if(!var52) { _fun0018_ip = 132; continue _fun0018 }
case 133:
                var52 = var6.delete;
                var52 = var52.bind(var6)(var1);
case 132:
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
case 122:
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
                if(!(var53 < var1)) { _fun0018_ip = 99; continue _fun0018 }
case 134:
                var1 = var46.items;
                var50 = var53;
                var49 = var51;
                var47 = var52;
                var48 = var50;
                var45 = var38;
                var44 = var37;
                var42 = var47;
                var43 = var49;
                if(var43 < var1) { _fun0018_ip = 121; continue _fun0018 }
case 135:
                _fun0018_ip = 99; continue _fun0018;
case 116:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var47 = var27.bind(var12)(var47, var1);
                var1 = var37;
                if(!var47) { _fun0018_ip = 136; continue _fun0018 }
case 137:
                var47 = var2.length;
                if(!(var10 === var47)) { _fun0018_ip = 138; continue _fun0018 }
case 139:
                var62 = var46.section;
                var47 = var46.sectionData;
                var61 = var47.layoutStart;
                var47 = var46.sectionData;
                var60 = var47.layoutSize;
                var59 = var46.layoutStart;
                var63 = undefined;
                var47 = var63[var28](var62, var61, var60, var59, var58);
case 138:
                var47 = var22.initialSection;
                if(!(var23 === var47)) { _fun0018_ip = 140; continue _fun0018 }
case 141:
                var47 = var46.section;
                var22['initialSection'] = var47;
case 140:
                var47 = var22.initialItem;
                if(!(var23 === var47)) { _fun0018_ip = 142; continue _fun0018 }
case 143:
                var47 = var46.item;
                var22['initialItem'] = var47;
case 142:
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
                if(!var49) { _fun0018_ip = 144; continue _fun0018 }
case 145:
                var50 = var6.has;
                var49 = var50.bind(var6)(var47);
case 144:
                if(!var49) { _fun0018_ip = 146; continue _fun0018 }
case 147:
                var49 = var6.delete;
                var49 = var49.bind(var6)(var47);
case 146:
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
case 136:
                var49 = var46.layoutStart;
                var47 = var46.layoutSize;
                var48 = var49 + var47;
                var44 = var1;
                var45 = var38;
                var43 = var36;
                var42 = var34;
                _fun0018_ip = 99; continue _fun0018;
case 103:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var47 = var27.bind(var12)(var47, var1);
                var1 = var38;
                if(!var47) { _fun0018_ip = 148; continue _fun0018 }
case 149:
                var47 = var22.initialSection;
                if(!(var23 !== var47)) { _fun0018_ip = 150; continue _fun0018 }
case 151:
                var47 = var46.section;
                var22['lastSection'] = var47;
                _fun0018_ip = 152; continue _fun0018;
case 150:
                var47 = var46.section;
                var22['initialSection'] = var47;
                var47 = var46.section;
                var22['lastSection'] = var47;
case 152:
                var47 = _closure1_slot20;
                var49 = var47.SECTION;
                var47 = var46.section;
                var47 = var26.bind(var12)(var49, var47);
                var49 = var15 != var47;
                if(!var49) { _fun0018_ip = 153; continue _fun0018 }
case 154:
                var50 = var6.has;
                var49 = var50.bind(var6)(var47);
case 153:
                if(!var49) { _fun0018_ip = 155; continue _fun0018 }
case 156:
                var49 = var6.delete;
                var49 = var49.bind(var6)(var47);
case 155:
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
case 148:
                var49 = var46.layoutStart;
                var47 = var46.layoutSize;
                var48 = var49 + var47;
                var45 = var1;
                var44 = var37;
                var43 = var36;
                var42 = var34;
                _fun0018_ip = 99; continue _fun0018;
case 101:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var1 = var27.bind(var12)(var47, var1);
                if(!var1) { _fun0018_ip = 157; continue _fun0018 }
case 158:
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
case 157:
                var47 = var46.layoutStart;
                var1 = var46.layoutSize;
                var48 = var47 + var1;
                var45 = var38;
                var44 = var37;
                var43 = var36;
                var42 = var34;
case 99:
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
                if(!var1) { _fun0018_ip = 98; continue _fun0018 }
case 96:
                var34 = var21.bind(var12)();
                var1 = var34.done;
                var24 = var35;
                var17 = var33;
                var13 = var32;
                var9 = var31;
                var8 = var30;
                var4 = var29;
                var20 = var34;
                if(!var1) { _fun0018_ip = 95; continue _fun0018 }
case 94:
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
                if(var1) { _fun0018_ip = 159; continue _fun0018 }
case 160:
                var23 = var20.value;
                var1 = _closure1_slot8;
                var1 = var1.bind(var12)(var23, var9);
                var28 = var1[var10];
                var27 = var1[var8];
                var23 = var27.section;
                var1 = var22.initialSection;
                if(!(!(var23 < var1))) { _fun0018_ip = 161; continue _fun0018 }
case 162:
                var23 = var27.section;
                var1 = var22.lastSection;
                if(!(!(var23 > var1))) { _fun0018_ip = 163; continue _fun0018 }
case 164:
                var25 = var27.type;
                var1 = _closure1_slot20;
                var1 = var1.ITEM;
                var24 = var19;
                var23 = var17;
                if(!(var25 === var1)) { _fun0018_ip = 165; continue _fun0018 }
case 166:
                var25 = var27.section;
                var1 = var22.initialSection;
                if(!(var25 === var1)) { _fun0018_ip = 167; continue _fun0018 }
case 168:
                var25 = var27.item;
                var1 = var22.initialItem;
                if(!(!(var25 < var1))) { _fun0018_ip = 169; continue _fun0018 }
case 167:
                var1 = var27.layoutSize;
                var1 = var17 + var1;
                var26 = var4.push;
                var25 = new Array(2);
                var25[0] = var28;
                var25[1] = var27;
                var25 = var26.bind(var4)(var25);
                var25 = var19;
                _fun0018_ip = 170; continue _fun0018;
case 169:
                var26 = var27.layoutSize;
                var25 = var19 + var26;
                var30 = var13.push;
                var29 = new Array(2);
                var29[0] = var28;
                var29[1] = var27;
                var29 = var30.bind(var13)(var29);
                var1 = var17;
case 170:
                var24 = var25;
                var23 = var1;
                _fun0018_ip = 165; continue _fun0018;
case 163:
                var1 = var27.layoutSize;
                var23 = var17 + var1;
                var26 = var4.push;
                var25 = new Array(2);
                var25[0] = var28;
                var25[1] = var27;
                var25 = var26.bind(var4)(var25);
                var24 = var19;
                _fun0018_ip = 165; continue _fun0018;
case 161:
                var1 = var27.layoutSize;
                var24 = var19 + var1;
                var26 = var13.push;
                var25 = new Array(2);
                var25[0] = var28;
                var25[1] = var27;
                var25 = var26.bind(var13)(var25);
                var23 = var17;
case 165:
                var25 = var21.bind(var12)();
                var1 = var25.done;
                var19 = var24;
                var17 = var23;
                var20 = var25;
                var18 = var19;
                var6 = var17;
                if(!var1) { _fun0018_ip = 160; continue _fun0018 }
case 159:
                var1 = var2[var10];
                if(!(var15 != var1)) { _fun0018_ip = 171; continue _fun0018 }
case 172:
                var17 = var1.layoutStart;
                if(!(var17 > var10)) { _fun0018_ip = 171; continue _fun0018 }
case 173:
                var17 = var3.headerDataCache;
                var24 = var1.layoutStart;
                var19 = var14;
                if(!var14) { _fun0018_ip = 174; continue _fun0018 }
case 175:
                var19 = var15 != var17;
case 174:
                if(!var19) { _fun0018_ip = 176; continue _fun0018 }
case 177:
                var20 = var1.type;
                var1 = 'HEADER';
                var19 = var1 !== var20;
case 176:
                var1 = var24;
                if(!var19) { _fun0018_ip = 178; continue _fun0018 }
case 179:
                var19 = var17.layoutStart;
                var20 = var24 - var19;
                var19 = var17.layoutSize;
                var19 = var20 - var19;
                if(!(var19 > var10)) { _fun0018_ip = 180; continue _fun0018 }
case 181:
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
case 180:
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
case 178:
                var17 = var16.Math;
                var16 = var17.max;
                var1 = var1 - var18;
                var17 = var16.bind(var17)(var1, var10);
                var1 = _closure1_slot33;
                var16 = var1.bind(var12)(var13);
                var13 = var16.bind(var12)();
                var1 = var13.done;
                if(var1) { _fun0018_ip = 182; continue _fun0018 }
case 183:
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
                if(!(var27 === var26)) { _fun0018_ip = 184; continue _fun0018 }
case 185:
                var1 = var25.item;
case 184:
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
                if(!var1) { _fun0018_ip = 183; continue _fun0018 }
case 182:
                if(!(var17 > var10)) { _fun0018_ip = 171; continue _fun0018 }
case 186:
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
case 171:
                var1 = var2.length;
                var1 = var1 - var8;
                var1 = var2[var1];
                if(!(var15 == var1)) { _fun0018_ip = 187; continue _fun0018 }
case 188:
                var18 = var3.size;
                _fun0018_ip = 189; continue _fun0018;
case 187:
                var16 = var1.layoutStart;
                var13 = var1.layoutSize;
                var18 = var16 + var13;
case 189:
                var13 = var3.size;
                if(!(var18 < var13)) { _fun0018_ip = 190; continue _fun0018 }
case 191:
                var13 = var3.footerDataCache;
                if(!var14) { _fun0018_ip = 192; continue _fun0018 }
case 193:
                var14 = var15 != var13;
case 192:
                if(!var14) { _fun0018_ip = 194; continue _fun0018 }
case 195:
                var15 = var1.type;
                var1 = 'FOOTER';
                var14 = var1 !== var15;
case 194:
                var1 = var18;
                if(!var14) { _fun0018_ip = 196; continue _fun0018 }
case 197:
                var14 = var13.layoutStart;
                if(!(var18 < var14)) { _fun0018_ip = 198; continue _fun0018 }
case 199:
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
case 198:
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
case 196:
                var15 = var1 + var6;
                var1 = var3.size;
                if(!(var15 < var1)) { _fun0018_ip = 200; continue _fun0018 }
case 201:
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
case 200:
                var1 = _closure1_slot33;
                var6 = var1.bind(var12)(var4);
                var4 = var6.bind(var12)();
                var1 = var4.done;
                if(var1) { _fun0018_ip = 190; continue _fun0018 }
case 202:
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
                if(!(var22 === var21)) { _fun0018_ip = 203; continue _fun0018 }
case 204:
                var1 = var20.item;
case 203:
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
                if(!var1) { _fun0018_ip = 202; continue _fun0018 }
case 190:
                var4 = var5.fill;
                var1 = var3.disableRecycling;
                if(var1) { _fun0018_ip = 205; continue _fun0018 }
case 206:
                var6 = var3.props;
                var6 = var6.disableRecyclingOnFullCompute;
                if(!var6) { _fun0018_ip = 207; continue _fun0018 }
case 208:
                var6 = var7;
case 207:
                var1 = var6;
case 205:
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
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var7 = var3.props;
                var22 = var7.sections;
                var6 = var7.insetStart;
                var5 = 0;
                var1 = undefined;
                var4 = 0;
                if(!(var1 !== var6)) { _fun0021_ip = 60; continue _fun0021 }
case 63:
                var4 = var6;
case 60:
                var8 = var7.insetEnd;
                var6 = 0;
                if(!(var1 !== var8)) { _fun0021_ip = 209; continue _fun0021 }
case 64:
                var6 = var8;
case 209:
                var21 = var7.getRecyclerKey;
                if(!(var1 === var21)) { _fun0021_ip = 210; continue _fun0021 }
case 211:
                var21 = _closure1_slot36;
case 210:
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
case 0:
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
                        if(!(var5 == var1)) { _fun0022_ip = 20; continue _fun0022 }
case 212:
                        var5 = {};
                        var5['start'] = var6;
                        var5['end'] = var2;
                        var6 = new Array(0);
                        var5['data'] = var6;
                        var7 = _closure3_slot1;
                        var6 = var7.push;
                        var6 = var6.bind(var7)(var5);
                        var1 = var5;
case 20:
                        var7 = var3.type;
                        var6 = _closure1_slot20;
                        var6 = var6.HEADER;
                        if(!(var7 !== var6)) { _fun0022_ip = 213; continue _fun0022 }
case 214:
                        var6 = var3.type;
                        var5 = _closure1_slot20;
                        var5 = var5.FOOTER;
                        if(!(var6 === var5)) { _fun0022_ip = 215; continue _fun0022 }
case 216:
                        var5 = _closure3_slot0;
                        var5['footerDataCache'] = var3;
                        _fun0022_ip = 215; continue _fun0022;
case 213:
                        var4 = _closure3_slot0;
                        var4['headerDataCache'] = var3;
case 215:
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
                if(!var4) { _fun0021_ip = 217; continue _fun0021 }
case 218:
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
case 217:
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
                if(!var7) { _fun0021_ip = 219; continue _fun0021 }
case 220:
                var35 = var22[var16];
                var26 = var13;
                var25 = var12;
                var24 = var11;
                var23 = var10;
                if(!(var5 !== var35)) { _fun0021_ip = 221; continue _fun0021 }
case 222:
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
                if(!(var7 > var5)) { _fun0021_ip = 223; continue _fun0021 }
case 224:
                var7 = _closure1_slot20;
                var7 = var7.SECTION;
                var7 = var21.bind(var1)(var7, var16);
                var28 = var17 != var7;
                if(!var28) { _fun0021_ip = 225; continue _fun0021 }
case 226:
                var29 = var20.has;
                var28 = var29.bind(var20)(var7);
case 225:
                var13 = var7;
                if(!var28) { _fun0021_ip = 223; continue _fun0021 }
case 227:
                var29 = var3.persistantItemData;
                var28 = var29.push;
                var28 = var28.bind(var29)(var30);
                var28 = var20.delete;
                var28 = var28.bind(var20)(var7);
                var13 = var7;
case 223:
                var7 = var27 + var31;
                var7 = var9.bind(var1)(var27, var7, var30);
                var7 = var3.uniform;
                if(var7) { _fun0021_ip = 228; continue _fun0021 }
case 229:
                var34 = var5 < var35;
                var33 = 0;
                var7 = var10;
                var32 = var27;
                var29 = 0;
                var28 = var11;
                var27 = var7;
                if(!var34) { _fun0021_ip = 230; continue _fun0021 }
case 231:
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
                if(!(var36 > var5)) { _fun0021_ip = 232; continue _fun0021 }
case 233:
                var36 = _closure1_slot20;
                var36 = var36.ITEM;
                var36 = var21.bind(var1)(var36, var16, var34);
                var39 = var17 != var36;
                if(!var39) { _fun0021_ip = 234; continue _fun0021 }
case 235:
                var40 = var20.has;
                var39 = var40.bind(var20)(var36);
case 234:
                var7 = var36;
                if(!var39) { _fun0021_ip = 232; continue _fun0021 }
case 236:
                var40 = var3.persistantItemData;
                var39 = var40.push;
                var39 = var39.bind(var40)(var37);
                var39 = var20.delete;
                var39 = var39.bind(var20)(var36);
                var7 = var36;
case 232:
                var33 = var34 + 1;
                var32 = var38;
                var28 = var37;
                var27 = var7;
                var29 = var33;
                if(var29 < var35) { _fun0021_ip = 231; continue _fun0021 }
case 237:
                _fun0021_ip = 230; continue _fun0021;
case 228:
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
case 230:
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
                if(!(var8 > var5)) { _fun0021_ip = 221; continue _fun0021 }
case 238:
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
case 221:
                var16 = var16 + 1;
                var7 = var22.length;
                var13 = var26;
                var12 = var25;
                var11 = var24;
                var10 = var23;
                if(var16 < var7) { _fun0021_ip = 220; continue _fun0021 }
case 219:
                var7 = var3.getSizeForFooter;
                var10 = var7.bind(var3)();
                if(!(var10 > var5)) { _fun0021_ip = 239; continue _fun0021 }
case 240:
                var8 = _closure3_slot3;
                var7 = var8 + var10;
                var5 = {};
                var11 = _closure1_slot20;
                var11 = var11.FOOTER;
                var5['type'] = var11;
                var5['layoutStart'] = var8;
                var5['layoutSize'] = var10;
                var5 = var9.bind(var1)(var8, var7, var5);
case 239:
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
case 0:
                var10 = arg1;
                var9 = arg2;
                var1 = this;
                var2 = var1.dirty;
                if(!var2) { _fun0023_ip = 38; continue _fun0023 }
case 43:
                var2 = var1.fullCompute;
                var2 = var2.bind(var1)();
case 38:
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
                if(var2) { _fun0023_ip = 241; continue _fun0023 }
case 5:
                var13 = var4.value;
                var11 = _closure1_slot33;
                var2 = var13.data;
                var12 = var11.bind(var1)(var2);
                var11 = var12.bind(var1)();
                var2 = var11.done;
                if(var2) { _fun0023_ip = 242; continue _fun0023 }
case 243:
                var14 = var11.value;
                var15 = var14.type;
                var2 = _closure1_slot20;
                var2 = var2.ITEM;
                if(!(var2 !== var15)) { _fun0023_ip = 244; continue _fun0023 }
case 245:
                var2 = _closure1_slot20;
                var2 = var2.SECTION;
                if(!(var2 === var15)) { _fun0023_ip = 246; continue _fun0023 }
case 212:
                var2 = var14.section;
                if(!(!(var2 > var10))) { _fun0023_ip = 247; continue _fun0023 }
case 248:
                if(!(var6 == var9)) { _fun0023_ip = 246; continue _fun0023 }
case 249:
                return var13;
case 247:
                return var1;
case 244:
                if(!(var6 != var9)) { _fun0023_ip = 246; continue _fun0023 }
case 250:
                var2 = var14.uniform;
                if(!(var5 === var2)) { _fun0023_ip = 251; continue _fun0023 }
case 252:
                var2 = var14.section;
                if(!(var2 !== var10)) { _fun0023_ip = 253; continue _fun0023 }
case 251:
                var2 = var14.uniform;
                if(!(var6 == var2)) { _fun0023_ip = 246; continue _fun0023 }
case 254:
                var2 = var14.section;
                if(!(var2 === var10)) { _fun0023_ip = 246; continue _fun0023 }
case 255:
                var2 = var14.item;
                if(!(var2 === var9)) { _fun0023_ip = 246; continue _fun0023 }
case 256:
                return var13;
case 253:
                var2 = var14.items;
                if(!(!(var9 > var2))) { _fun0023_ip = 257; continue _fun0023 }
case 258:
                return var13;
case 257:
                return var1;
case 246:
                var15 = var12.bind(var1)();
                var2 = var15.done;
                var11 = var15;
                var3 = var14;
                if(!var2) { _fun0023_ip = 243; continue _fun0023 }
case 242:
                var11 = var7.bind(var1)();
                var2 = var11.done;
                var4 = var11;
                if(!var2) { _fun0023_ip = 5; continue _fun0023 }
case 241:
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
case 0:
                var1 = arg1;
                var10 = this;
                var2 = var1.chunk;
                var9 = var1.targetSection;
                var8 = var1.targetItem;
                var7 = var1.padBottom;
                var1 = undefined;
                if(!(var7 === var1)) { _fun0024_ip = 59; continue _fun0024 }
case 259:
                var7 = 16;
case 59:
                var3 = _closure1_slot33;
                var2 = var2.data;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = null;
                if(var2) { _fun0024_ip = 260; continue _fun0024 }
case 261:
                var11 = var3.value;
                var12 = var11.type;
                var2 = _closure1_slot20;
                var2 = var2.ITEM;
                if(!(var2 !== var12)) { _fun0024_ip = 27; continue _fun0024 }
case 262:
                var2 = _closure1_slot20;
                var2 = var2.SECTION;
                if(!(var2 === var12)) { _fun0024_ip = 263; continue _fun0024 }
case 264:
                if(!(var4 == var8)) { _fun0024_ip = 263; continue _fun0024 }
case 265:
                var2 = var11.section;
                if(!(!(var9 < var2))) { _fun0024_ip = 266; continue _fun0024 }
case 267:
                var2 = var11.section;
                if(!(var9 === var2)) { _fun0024_ip = 263; continue _fun0024 }
case 268:
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
case 266:
                return var1;
case 27:
                var2 = var11.section;
                if(!(var2 === var9)) { _fun0024_ip = 263; continue _fun0024 }
case 269:
                if(!(var4 != var8)) { _fun0024_ip = 263; continue _fun0024 }
case 241:
                var2 = var11.uniform;
                if(var2) { _fun0024_ip = 270; continue _fun0024 }
case 271:
                var2 = var11.item;
                if(!(!(var2 >= var8))) { _fun0024_ip = 272; continue _fun0024 }
case 273:
                var2 = var11.item;
                if(!(var2 === var8)) { _fun0024_ip = 263; continue _fun0024 }
case 274:
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
case 272:
                return var1;
case 270:
                var2 = var11.items;
                if(!(!(var8 >= var2))) { _fun0024_ip = 275; continue _fun0024 }
case 276:
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
case 275:
                return var1;
case 263:
                var11 = var5.bind(var1)();
                var2 = var11.done;
                var3 = var11;
                if(!var2) { _fun0024_ip = 261; continue _fun0024 }
case 260:
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
case 0:
                var12 = arg1;
                var11 = arg2;
                var10 = arg3;
                var1 = this;
                var9 = null;
                if(!(var9 != var10)) { _fun0025_ip = 277; continue _fun0025 }
case 43:
                var2 = 0;
                if(!(!(var10 < var2))) { _fun0025_ip = 278; continue _fun0025 }
case 277:
                var2 = var1.dirty;
                if(!var2) { _fun0025_ip = 6; continue _fun0025 }
case 63:
                var2 = var1.fullCompute;
                var2 = var2.bind(var1)();
case 6:
                var2 = var1.dataCache;
                var8 = 0;
                if(!(!(var11 < var8))) { _fun0025_ip = 279; continue _fun0025 }
case 11:
                var1 = _closure1_slot33;
                var6 = undefined;
                var5 = var1.bind(var6)(var2);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var4 = true;
                var3 = var2;
                var2 = undefined;
                if(var1) { _fun0025_ip = 278; continue _fun0025 }
case 280:
                var13 = _closure1_slot33;
                var1 = var3.value;
                var1 = var1.data;
                var14 = var13.bind(var6)(var1);
                var13 = var14.bind(var6)();
                var1 = var13.done;
                if(var1) { _fun0025_ip = 281; continue _fun0025 }
case 282:
                var15 = var13.value;
                var16 = var15.type;
                var1 = _closure1_slot20;
                var1 = var1.ITEM;
                if(!(var1 !== var16)) { _fun0025_ip = 213; continue _fun0025 }
case 83:
                var1 = _closure1_slot20;
                var1 = var1.SECTION;
                if(!(var1 === var16)) { _fun0025_ip = 283; continue _fun0025 }
case 284:
                var1 = var15.section;
                if(!(!(var1 > var11))) { _fun0025_ip = 285; continue _fun0025 }
case 286:
                if(!(var9 == var10)) { _fun0025_ip = 283; continue _fun0025 }
case 287:
                var1 = var15.section;
                if(!(var1 === var11)) { _fun0025_ip = 283; continue _fun0025 }
case 288:
                var1 = {};
                var16 = var15.layoutStart;
                var1['scrollPosition'] = var16;
                var16 = var15.layoutSize;
                var1['size'] = var16;
                var1['sectionOffset'] = var8;
                return var1;
case 285:
                return var6;
case 213:
                if(!(var9 != var10)) { _fun0025_ip = 283; continue _fun0025 }
case 217:
                var1 = var15.uniform;
                if(!(var4 === var1)) { _fun0025_ip = 289; continue _fun0025 }
case 22:
                var1 = var15.section;
                if(!(var1 !== var11)) { _fun0025_ip = 290; continue _fun0025 }
case 289:
                var1 = var15.uniform;
                if(!(var9 == var1)) { _fun0025_ip = 283; continue _fun0025 }
case 291:
                var1 = var15.section;
                if(!(var1 === var11)) { _fun0025_ip = 283; continue _fun0025 }
case 14:
                var1 = var15.item;
                if(!(var1 === var10)) { _fun0025_ip = 283; continue _fun0025 }
case 292:
                var1 = {};
                var16 = var15.layoutStart;
                var1['scrollPosition'] = var16;
                var16 = var15.layoutSize;
                var1['size'] = var16;
                var16 = 0;
                if(!var12) { _fun0025_ip = 293; continue _fun0025 }
case 12:
                var17 = var15.sectionData;
                var16 = var17.layoutSize;
case 293:
                var1['sectionOffset'] = var16;
                return var1;
case 290:
                var1 = var15.items;
                if(!(!(var10 > var1))) { _fun0025_ip = 294; continue _fun0025 }
case 295:
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
                if(!var12) { _fun0025_ip = 296; continue _fun0025 }
case 297:
                var16 = var15.sectionData;
                var8 = var16.layoutSize;
case 296:
                var1['sectionOffset'] = var8;
                return var1;
case 294:
                return var6;
case 283:
                var16 = var14.bind(var6)();
                var1 = var16.done;
                var13 = var16;
                var2 = var15;
                if(!var1) { _fun0025_ip = 282; continue _fun0025 }
case 281:
                var13 = var5.bind(var6)();
                var1 = var13.done;
                var3 = var13;
                if(var1) { _fun0025_ip = 278; continue _fun0025 }
case 298:
                _fun0025_ip = 280; continue _fun0025;
case 279:
                var1 = {'scrollPosition': 0, 'size': 0, 'sectionOffset': 0};
                return var1;
case 278:
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
case 0:
                var6 = arg1;
                var14 = arguments[1];
                var1 = this;
                var13 = undefined;
                if(!(var14 === var13)) { _fun0026_ip = 40; continue _fun0026 }
case 299:
                var14 = _closure1_slot19;
case 40:
                var2 = var1.dirty;
                if(!var2) { _fun0026_ip = 300; continue _fun0026 }
case 301:
                var2 = var1.fullCompute;
                var2 = var2.bind(var1)();
case 300:
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
                if(var1) { _fun0026_ip = 302; continue _fun0026 }
case 303:
                var4 = var9.value;
                var1 = var4.layoutStart;
                var1 = var1 + var8;
                var7 = var14.get;
                var5 = var4.recyclerKey;
                var16 = var7.bind(var14)(var5);
                var5 = var16;
                if(!(var10 == var5)) { _fun0026_ip = 82; continue _fun0026 }
case 264:
                var5 = var4.layoutSize;
case 82:
                if(!(var5 > var11)) { _fun0026_ip = 47; continue _fun0026 }
case 282:
                if(!(var6 >= var1)) { _fun0026_ip = 47; continue _fun0026 }
case 304:
                var7 = var1 + var5;
                if(!(!(var6 <= var7))) { _fun0026_ip = 23; continue _fun0026 }
case 47:
                var15 = var10 != var16;
                var7 = 0;
                if(!var15) { _fun0026_ip = 76; continue _fun0026 }
case 305:
                var15 = var4.layoutSize;
                var7 = var16 - var15;
case 76:
                var8 = var8 + var7;
                var15 = var12.bind(var13)();
                var7 = var15.done;
                var9 = var15;
                var3 = undefined;
                var2 = 0;
                if(var7) { _fun0026_ip = 302; continue _fun0026 }
case 306:
                _fun0026_ip = 303; continue _fun0026;
case 23:
                var1 = var6 - var1;
                var2 = var1 / var5;
                var3 = var4;
case 302:
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
case 0:
                var1 = this;
                var2 = var1.dirty;
                if(!var2) { _fun0027_ip = 40; continue _fun0027 }
case 307:
                var2 = var1.fullCompute;
                var2 = var2.bind(var1)();
case 40:
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
    var8 = {};
    var12 = 'function FastListTsx1(){const{scrollPosValue,interpolate,inputRange,outputRange,horizontal}=this.__closure;const interpolatedValue=scrollPosValue!=null?interpolate(scrollPosValue.get(),inputRange,outputRange):null;return{transform:interpolatedValue!=null?[horizontal?{translateX:interpolatedValue}:{translateY:interpolatedValue}]:undefined};}';
    var8['code'] = var12;
    var _closure1_slot23 = var8;
    var12 = var2.memo;
    var8 = function FastListStickySectionRendererComponent(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
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
            if(!var8) { _fun0028_ip = 47; continue _fun0028 }
case 72:
            var3 = var5;
case 47:
            var3 = var3 - var12;
            if(!(!(var3 >= var14))) { _fun0028_ip = 308; continue _fun0028 }
case 309:
            var15 = var17.push;
            var8 = 1;
            var5 = var14 + var8;
            var5 = var15.bind(var17)(var5);
            var5 = var16.push;
            var5 = var5.bind(var16)(var8);
            _fun0028_ip = 310; continue _fun0028;
case 308:
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 14;
            var8 = var8[var5];
            var5 = undefined;
            var8 = var15.bind(var5)(var8);
            var5 = var8.isAndroid;
            var5 = var5.bind(var8)();
            var6 = 0;
            if(!var5) { _fun0028_ip = 258; continue _fun0028 }
case 216:
            var6 = var4;
case 258:
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
case 310:
            var19 = _closure1_slot0;
            var6 = _closure1_slot2;
            var18 = 15;
            var3 = var6[var18];
            var4 = undefined;
            var8 = var19.bind(var4)(var3);
            var3 = var8.useAnimatedStyle;
            var2 = function v() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var1 = var2 != var1;
                    var5 = null;
                    if(!var1) { _fun0029_ip = 261; continue _fun0029 }
case 43:
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
case 261:
                    var1 = {};
                    var4 = var2 != var5;
                    var2 = undefined;
                    if(!var4) { _fun0029_ip = 311; continue _fun0029 }
case 312:
                    var4 = _closure2_slot0;
                    var3 = {};
                    if(var4) { _fun0029_ip = 70; continue _fun0029 }
case 280:
                    var3['translateY'] = var5;
                    var4 = var3;
                    _fun0029_ip = 80; continue _fun0029;
case 70:
                    var3['translateX'] = var5;
                    var4 = var3;
case 80:
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
case 311:
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
            if(!var6) { _fun0028_ip = 313; continue _fun0028 }
case 314:
            var6 = 'props';
            var6 = var6 in var10;
            var9 = undefined;
            if(!var6) { _fun0028_ip = 313; continue _fun0028 }
case 315:
            var6 = var10.props;
            var9 = var6.style;
case 313:
            var6 = new Array(3);
            var6[0] = var9;
            var9 = {'zIndex': 10, 'position': 'relative'};
            var11 = undefined;
            if(var13) { _fun0028_ip = 316; continue _fun0028 }
case 317:
            var11 = var12;
case 316:
            var9['height'] = var11;
            var11 = undefined;
            if(!var13) { _fun0028_ip = 318; continue _fun0028 }
case 319:
            var11 = var12;
case 318:
            var9['width'] = var11;
            var6[1] = var9;
            var6[2] = var8;
            var1['style'] = var6;
            var6 = false;
            var8 = var7 != var10;
            var7 = undefined;
            if(!var8) { _fun0028_ip = 320; continue _fun0028 }
case 321:
            var9 = _closure1_slot11;
            var8 = var9.cloneElement;
            var5 = {};
            var11 = {};
            var12 = 1;
            var11['flex'] = var12;
            var5['style'] = var11;
            var7 = var8.bind(var9)(var10, var5);
case 320:
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var8 = var12.bind(var2)(var8);
    var _closure1_slot24 = var8;
    var12 = var2.memo;
    var8 = function _FastListSectionRenderer(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var3 = arg1;
            var12 = var3.layoutSize;
            var10 = var3.horizontal;
            var2 = var3.disableWrapper;
            var9 = var3.children;
            var8 = var3.fastListInstance;
            var6 = var3.section;
            var1 = var3.debug;
            var3 = var3.recyclerKey;
            if(!var2) { _fun0030_ip = 312; continue _fun0030 }
case 322:
            if(var1) { _fun0030_ip = 312; continue _fun0030 }
case 8:
            var4 = _closure1_slot16;
            var3 = _closure1_slot17;
            var2 = {};
            var1 = undefined;
            var5 = var9.bind(var1)(var6, var8);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            _fun0030_ip = 287; continue _fun0030;
case 312:
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
            if(var10) { _fun0030_ip = 74; continue _fun0030 }
case 323:
            var11['height'] = var12;
            var10 = var11;
            _fun0030_ip = 75; continue _fun0030;
case 74:
            var11['width'] = var12;
            var10 = var11;
case 75:
            var2['style'] = var10;
            var8 = var9.bind(var4)(var6, var8);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 287:
            return var1;
        }
    };
    var8 = var12.bind(var2)(var8);
    var _closure1_slot25 = var8;
    var12 = var2.memo;
    var8 = function _FastListSectionFooterRenderer(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var3 = arg1;
            var12 = var3.layoutSize;
            var10 = var3.horizontal;
            var2 = var3.disableWrapper;
            var9 = var3.fastListInstance;
            var8 = var3.children;
            var6 = var3.section;
            var1 = var3.debug;
            var3 = var3.recyclerKey;
            if(!var2) { _fun0031_ip = 312; continue _fun0031 }
case 322:
            if(var1) { _fun0031_ip = 312; continue _fun0031 }
case 8:
            var4 = _closure1_slot16;
            var3 = _closure1_slot17;
            var2 = {};
            var1 = undefined;
            var5 = var8.bind(var1)(var6, var9);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            _fun0031_ip = 20; continue _fun0031;
case 312:
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
            if(var10) { _fun0031_ip = 72; continue _fun0031 }
case 282:
            var11['height'] = var12;
            var10 = var11;
            _fun0031_ip = 74; continue _fun0031;
case 72:
            var11['width'] = var12;
            var10 = var11;
case 74:
            var2['style'] = var10;
            var8 = var8.bind(var4)(var6, var9);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 20:
            return var1;
        }
    };
    var8 = var12.bind(var2)(var8);
    var _closure1_slot26 = var8;
    var12 = var2.memo;
    var8 = function _FastListItemRenderer(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
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
            if(!var2) { _fun0032_ip = 324; continue _fun0032 }
case 56:
            if(var1) { _fun0032_ip = 324; continue _fun0032 }
case 55:
            var1 = null;
            var3 = var1 == var11;
            var2 = undefined;
            var1 = undefined;
            if(var3) { _fun0032_ip = 325; continue _fun0032 }
case 326:
            var1 = var11.bind(var2)(var10, var6, var9);
case 325:
            _fun0032_ip = 306; continue _fun0032;
case 324:
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
            if(var8) { _fun0032_ip = 53; continue _fun0032 }
case 73:
            var12['height'] = var13;
            var8 = var12;
            _fun0032_ip = 327; continue _fun0032;
case 53:
            var12['width'] = var13;
            var8 = var12;
case 327:
            var2['style'] = var8;
            var8 = null;
            var12 = var8 == var11;
            var8 = undefined;
            if(var12) { _fun0032_ip = 18; continue _fun0032 }
case 71:
            var8 = var11.bind(var4)(var10, var6, var9);
case 18:
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 306:
            return var1;
        }
    };
    var8 = var12.bind(var2)(var8);
    var _closure1_slot27 = var8;
    var12 = var2.memo;
    var8 = function _FastListHeaderFooterRenderer(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var3 = arg1;
            var11 = var3.layoutSize;
            var9 = var3.horizontal;
            var2 = var3.disableWrapper;
            var8 = var3.children;
            var6 = var3.fastListInstance;
            var1 = var3.debug;
            var3 = var3.recyclerKey;
            if(!var2) { _fun0033_ip = 324; continue _fun0033 }
case 57:
            if(var1) { _fun0033_ip = 324; continue _fun0033 }
case 51:
            var4 = _closure1_slot16;
            var3 = _closure1_slot17;
            var2 = {};
            var1 = undefined;
            var5 = var8.bind(var1)(var6);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            _fun0033_ip = 286; continue _fun0033;
case 324:
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
            if(var9) { _fun0033_ip = 327; continue _fun0033 }
case 328:
            var10['height'] = var11;
            var9 = var10;
            _fun0033_ip = 84; continue _fun0033;
case 327:
            var10['width'] = var11;
            var9 = var10;
case 84:
            var2['style'] = var9;
            var8 = var8.bind(var4)(var6);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 286:
            return var1;
        }
    };
    var8 = var12.bind(var2)(var8);
    var _closure1_slot28 = var8;
    var12 = var2.memo;
    var8 = function _FastListSpacer(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
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
            if(var5) { _fun0034_ip = 34; continue _fun0034 }
case 329:
            var6['height'] = var7;
            var5 = var6;
            _fun0034_ip = 4; continue _fun0034;
case 34:
            var6['width'] = var7;
            var5 = var6;
case 4:
            var1['style'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var8 = var12.bind(var2)(var8);
    var _closure1_slot29 = var8;
    var8 = function() {
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
case 0:
                var3 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0035_ip = 36; continue _fun0035 }
case 307:
                var3 = false;
case 36:
                var3 = !var3;
                if(!var3) { _fun0035_ip = 330; continue _fun0035 }
case 33:
                var3 = var2.isCustomAnchor;
case 330:
                if(var3) { _fun0035_ip = 9; continue _fun0035 }
case 52:
                var3 = false;
                var2['isCustomAnchor'] = var3;
                var2['anchorId'] = var1;
                var2['anchorOffset'] = var1;
case 9:
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
case 0:
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
                if(!(var2 == var5)) { _fun0036_ip = 62; continue _fun0036 }
case 8:
                var2 = var4.cleanAnchor;
                var2 = var2.bind(var4)(var3);
case 62:
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
case 0:
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
                if(var2) { _fun0037_ip = 88; continue _fun0037 }
case 49:
                var2 = var7.value;
                var14 = var2.type;
                var5 = _closure1_slot20;
                var5 = var5.ITEM;
                var13 = var6;
                if(!(var14 === var5)) { _fun0037_ip = 331; continue _fun0037 }
case 332:
                var5 = var3.isCustomAnchor;
                if(!var5) { _fun0037_ip = 333; continue _fun0037 }
case 262:
                var14 = var3.anchorId;
                var16 = var2.section;
                var15 = var2.item;
                var17 = var9 != var15;
                var5 = 0;
                if(!var17) { _fun0037_ip = 328; continue _fun0037 }
case 334:
                var5 = var15;
case 328:
                var5 = var12.bind(var1)(var16, var5);
                var6 = var15;
                if(!(var14 !== var5)) { _fun0037_ip = 27; continue _fun0037 }
case 333:
                var5 = var3.isCustomAnchor;
                var13 = var6;
                if(var5) { _fun0037_ip = 331; continue _fun0037 }
case 249:
                var5 = var2.layoutStart;
                var13 = var6;
                if(!(var5 >= var4)) { _fun0037_ip = 331; continue _fun0037 }
case 335:
                var5 = var2.layoutStart;
                var5 = var5 - var4;
                var3['anchorOffset'] = var5;
                var5 = var2.section;
                var14 = var2.item;
                var15 = var9 != var14;
                var8 = 0;
                if(!var15) { _fun0037_ip = 336; continue _fun0037 }
case 26:
                var8 = var14;
case 336:
                var5 = var12.bind(var1)(var5, var8);
                var3['anchorId'] = var5;
                var5 = undefined;
                return var5;
case 331:
                var14 = var10.bind(var1)();
                var5 = var14.done;
                var6 = var13;
                var7 = var14;
                if(var5) { _fun0037_ip = 88; continue _fun0037 }
case 215:
                _fun0037_ip = 49; continue _fun0037;
case 27:
                var2 = var2.layoutStart;
                var2 = var2 - var4;
                var3['anchorOffset'] = var2;
                var2 = undefined;
                return var2;
case 88:
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
case 0:
                var3 = this;
                var2 = var3.anchorId;
                var1 = null;
                if(!(var1 == var2)) { _fun0038_ip = 337; continue _fun0038 }
case 299:
                var1 = undefined;
                return var1;
case 337:
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
    var8 = var8.bind(var1)();
    var _closure1_slot30 = var8;
    var8 = {};
    var12 = 'function FastListTsx2(event){const{horizontal,workletMounted,scrollPosValue}=this.__closure;const scrollPosition=!horizontal?event.contentOffset.y:event.contentOffset.x;const contentSize=!horizontal?event.contentSize.height:event.contentSize.width;if(contentSize===0&&!workletMounted.get())return;workletMounted.set(true);scrollPosValue.set(Math.min(scrollPosition,contentSize));}';
    var8['code'] = var12;
    var _closure1_slot31 = var8;
    var8 = var2.PureComponent;
    var2 = function(arg1) {
        var5 = function FastList(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
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
                if(var1) { _fun0039_ip = 67; continue _fun0039 }
case 338:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var4, var11);
                _fun0039_ip = 339; continue _fun0039;
case 67:
                var5 = global;
                var9 = var5.Reflect;
                var8 = var9.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var6)(var4);
                var5 = var5.constructor;
                var1 = var8.bind(var9)(var10, var11, var5);
case 339:
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
                if(!(var3 == var5)) { _fun0039_ip = 214; continue _fun0039 }
case 23:
                var9 = _closure1_slot11;
                var8 = var9.createRef;
                var5 = var8.bind(var9)();
case 214:
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
case 0:
                        var3 = arg1;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var4 = var1.horizontal;
                        var1 = {};
                        var5 = 0;
                        if(!var4) { _fun0040_ip = 301; continue _fun0040 }
case 38:
                        var5 = var3;
case 301:
                        var1['x'] = var5;
                        var2 = 0;
                        if(var4) { _fun0040_ip = 59; continue _fun0040 }
case 259:
                        var2 = var3;
case 59:
                        var1['y'] = var2;
                        return var1;
                    }
                };
                var1['_scrollPositionToPoint'] = var5;
                var5 = function(arg1) {
                    _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                        var2 = arg1;
                        var11 = var2.itemCoords;
                        var8 = var2.fullSize;
                        var13 = var2.orientation;
                        var1 = undefined;
                        if(!(var13 === var1)) { _fun0041_ip = 301; continue _fun0041 }
case 277:
                        var13 = 'top';
case 301:
                        var5 = var2.paddingStart;
                        if(!(var5 === var1)) { _fun0041_ip = 59; continue _fun0041 }
case 300:
                        var5 = 0;
case 59:
                        var9 = var2.paddingEnd;
                        if(!(var9 === var1)) { _fun0041_ip = 8; continue _fun0041 }
case 46:
                        var9 = 0;
case 8:
                        var3 = var11.scrollPosition;
                        var6 = var11.size;
                        var2 = var11.sectionOffset;
                        var1 = _closure3_slot0;
                        var1 = var1.containerSize;
                        var4 = 0;
                        if(!(!(var1 > var4))) { _fun0041_ip = 340; continue _fun0041 }
case 341:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var7 = var1.chunkBase;
                        var1 = null;
                        var12 = var1 != var7;
                        var1 = 0;
                        if(!var12) { _fun0041_ip = 342; continue _fun0041 }
case 343:
                        var1 = var7;
case 342:
                        _fun0041_ip = 328; continue _fun0041;
case 340:
                        var7 = _closure3_slot0;
                        var1 = var7.containerSize;
case 328:
                        if(!(var6 >= var1)) { _fun0041_ip = 72; continue _fun0041 }
case 344:
                        var13 = 'top';
case 72:
                        var7 = 'visible';
                        if(!(var7 !== var13)) { _fun0041_ip = 242; continue _fun0041 }
case 84:
                        var7 = 'top';
                        if(!(var7 !== var13)) { _fun0041_ip = 345; continue _fun0041 }
case 71:
                        var12 = 'center';
                        var7 = var3;
                        if(!(var12 === var13)) { _fun0041_ip = 346; continue _fun0041 }
case 335:
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
                        _fun0041_ip = 346; continue _fun0041;
case 345:
                        var11 = var2 + var5;
                        var7 = var3 - var11;
                        _fun0041_ip = 346; continue _fun0041;
case 242:
                        var12 = var3 + var2;
                        var11 = _closure3_slot0;
                        var11 = var11.scrollPos;
                        var11 = var11 + var5;
                        if(!(var12 >= var11)) { _fun0041_ip = 347; continue _fun0041 }
case 16:
                        var12 = var3 + var6;
                        var11 = _closure3_slot0;
                        var13 = var11.scrollPos;
                        var11 = var1 - var9;
                        var11 = var13 + var11;
                        if(!(!(var12 <= var11))) { _fun0041_ip = 348; continue _fun0041 }
case 347:
                        if(!(!(var6 > var1))) { _fun0041_ip = 349; continue _fun0041 }
case 222:
                        var10 = _closure3_slot0;
                        var10 = var10.scrollPos;
                        if(!(!(var3 < var10))) { _fun0041_ip = 349; continue _fun0041 }
case 350:
                        var6 = var3 + var6;
                        var6 = var6 + var9;
                        var7 = var6 - var1;
                        _fun0041_ip = 346; continue _fun0041;
case 349:
                        var2 = var2 + var5;
                        var7 = var3 - var2;
case 346:
                        var5 = global;
                        var3 = var5.Math;
                        var2 = var3.max;
                        var6 = var5.Math;
                        var5 = var6.min;
                        var1 = var8 - var1;
                        var1 = var5.bind(var6)(var7, var1);
                        var1 = var2.bind(var3)(var4, var1);
                        return var1;
case 348:
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
                if(!var12) { _fun0039_ip = 229; continue _fun0039 }
case 351:
                var12 = var8;
case 229:
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
                if(!var8) { _fun0039_ip = 352; continue _fun0039 }
case 353:
                var8 = var10;
case 352:
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
                if(!var10) { _fun0039_ip = 354; continue _fun0039 }
case 355:
                var7 = var5;
case 354:
                var5 = true;
                var5 = var8.bind(var1)(var7, var9, var5);
                var1['state'] = var5;
                var5 = function() {
                    _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.onViewableItemsChanged;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0042_ip = 356; continue _fun0042 }
case 277:
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
                        if(var6) { _fun0042_ip = 345; continue _fun0042 }
case 357:
                        var6 = var7.value;
                        var13 = var6.layoutStart;
                        if(!(!(var13 > var10))) { _fun0042_ip = 345; continue _fun0042 }
case 334:
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
                        if(!(!(var14 >= var13))) { _fun0042_ip = 258; continue _fun0042 }
case 358:
                        var14 = var13 - var14;
                        var13 = var6.layoutSize;
                        var13 = var14 / var13;
                        if(!(var13 >= var12)) { _fun0042_ip = 258; continue _fun0042 }
case 359:
                        var13 = var2.push;
                        var6 = var6.recyclerKey;
                        var6 = var13.bind(var2)(var6);
case 258:
                        var13 = var9.bind(var1)();
                        var6 = var13.done;
                        var7 = var13;
                        if(!var6) { _fun0042_ip = 357; continue _fun0042 }
case 345:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 11;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.areArraysShallowEqual;
                        var5 = _closure3_slot0;
                        var5 = var5.previouslyViewableItems;
                        var5 = var6.bind(var7)(var2, var5);
                        if(var5) { _fun0042_ip = 356; continue _fun0042 }
case 14:
                        var4 = _closure3_slot0;
                        var4['previouslyViewableItems'] = var2;
                        var1 = var3.bind(var1)(var2);
case 356:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleViewabilityChange'] = var5;
                var5 = function(arg1) {
                    _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                        var3 = arg1;
                        var5 = arguments[1];
                        var4 = arguments[2];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0043_ip = 360; continue _fun0043 }
case 299:
                        var5 = 0;
case 360:
                        if(!(var4 === var1)) { _fun0043_ip = 35; continue _fun0043 }
case 50:
                        var4 = 0;
case 35:
                        var1 = _closure3_slot0;
                        var1 = var1.scrollPos;
                        var1 = var1 + var5;
                        var1 = var3 >= var1;
                        if(!var1) { _fun0043_ip = 67; continue _fun0043 }
case 57:
                        var2 = _closure3_slot0;
                        var5 = var2.scrollPos;
                        var2 = var2.containerSize;
                        var2 = var5 + var2;
                        var2 = var2 - var4;
                        var1 = var3 <= var2;
case 67:
                        return var1;
                    }
                };
                var1['isVisible'] = var5;
                var5 = function() {
                    _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                        var5 = arguments[0];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0044_ip = 361; continue _fun0044 }
case 362:
                        var5 = true;
case 361:
                        var2 = _closure3_slot0;
                        var3 = var2.scrollView;
                        var6 = null;
                        var2 = var6 == var3;
                        var4 = var3;
                        if(var2) { _fun0044_ip = 363; continue _fun0044 }
case 63:
                        var3 = var3.current;
                        var2 = var6 == var3;
                        var4 = var3;
case 363:
                        if(var2) { _fun0044_ip = 261; continue _fun0044 }
case 64:
                        var3 = var4.scrollTo;
                        var2 = {'x': 0, 'y': 0};
                        var2['animated'] = var5;
                        var2 = var3.bind(var4)(var2);
case 261:
                        return var1;
                    }
                };
                var1['scrollToTop'] = var5;
                var5 = function(arg1) {
                    _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                        var1 = arg1;
                        var11 = var1.section;
                        var10 = var1.item;
                        var6 = var1.animated;
                        var16 = undefined;
                        if(!(var6 === var16)) { _fun0045_ip = 277; continue _fun0045 }
case 58:
                        var6 = false;
case 277:
                        var15 = var1.orientation;
                        if(!(var15 === var16)) { _fun0045_ip = 300; continue _fun0045 }
case 39:
                        var15 = 'top';
case 300:
                        var14 = var1.paddingStart;
                        if(!(var14 === var16)) { _fun0045_ip = 46; continue _fun0045 }
case 64:
                        var14 = 0;
case 46:
                        var13 = var1.paddingEnd;
                        if(!(var13 === var16)) { _fun0045_ip = 49; continue _fun0045 }
case 364:
                        var13 = 0;
case 49:
                        var7 = var1.setAnchor;
                        if(!(var7 === var16)) { _fun0045_ip = 261; continue _fun0045 }
case 67:
                        var7 = false;
case 261:
                        var1 = _closure3_slot0;
                        var1 = var1.scrollView;
                        var4 = var1.current;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0045_ip = 365; continue _fun0045 }
case 262:
                        var3 = _closure3_slot0;
                        var2 = var3.props;
                        var9 = var2.getAnchorIdFromIndex;
                        var12 = var2.stickySectionsVariant;
                        var8 = 'default';
                        var2 = var8;
                        if(!(var16 !== var12)) { _fun0045_ip = 366; continue _fun0045 }
case 344:
                        var2 = var12;
case 366:
                        var3 = var3.state;
                        var17 = var3.fastListComputer;
                        var3 = var17.computeScrollPosition;
                        var2 = var8 === var2;
                        var2 = var3.bind(var17)(var2, var11, var10);
                        if(!(var1 != var2)) { _fun0045_ip = 367; continue _fun0045 }
case 368:
                        var3 = 'visible';
                        if(!(var3 === var15)) { _fun0045_ip = 369; continue _fun0045 }
case 370:
                        var12 = _closure3_slot0;
                        var8 = var12.isVisible;
                        var3 = var2.scrollPosition;
                        var3 = var8.bind(var12)(var3, var14, var13);
                        if(var3) { _fun0045_ip = 371; continue _fun0045 }
case 369:
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
                        if(!var3) { _fun0045_ip = 87; continue _fun0045 }
case 372:
                        var3 = var7;
case 87:
                        if(!var3) { _fun0045_ip = 373; continue _fun0045 }
case 374:
                        var3 = var1 != var9;
case 373:
                        if(!var3) { _fun0045_ip = 375; continue _fun0045 }
case 376:
                        var3 = _closure3_slot0;
                        var7 = var3.scrollAnchor;
                        var3 = var7.setCustomAnchor;
                        var12 = var2.scrollPosition;
                        var13 = var1 != var8;
                        var2 = 0;
                        if(!var13) { _fun0045_ip = 377; continue _fun0045 }
case 378:
                        var2 = var8;
case 377:
                        var20 = var12 - var2;
                        var22 = var7;
                        var21 = var9;
                        var19 = var11;
                        var18 = var10;
                        var2 = var22[var3](var21, var20, var19, var18, var17);
case 375:
                        var1 = var1 != var8;
                        if(!var1) { _fun0045_ip = 379; continue _fun0045 }
case 380:
                        var2 = _closure3_slot0;
                        var2 = var2.scrollPos;
                        var1 = var8 !== var2;
case 379:
                        if(!var1) { _fun0045_ip = 381; continue _fun0045 }
case 382:
                        if(var6) { _fun0045_ip = 383; continue _fun0045 }
case 384:
                        var3 = _closure3_slot0;
                        var3['scrollPos'] = var8;
                        var2 = var3.computeBlocks;
                        var2 = var2.bind(var3)();
case 383:
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
case 381:
                        return var1;
case 371:
                        var1 = false;
                        return var1;
case 367:
                        var1 = false;
                        return var1;
case 365:
                        var1 = false;
                        return var1;
                    }
                };
                var1['scrollToLocation'] = var5;
                var5 = function(arg1) {
                    _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                        var9 = arg1;
                        var7 = arguments[1];
                        var1 = undefined;
                        if(!(var7 === var1)) { _fun0046_ip = 36; continue _fun0046 }
case 307:
                        var7 = false;
case 36:
                        var1 = _closure3_slot0;
                        var2 = var1.scrollView;
                        var5 = var2.current;
                        var1 = var1.state;
                        var3 = var1.fastListComputer;
                        var1 = null;
                        var1 = var1 != var5;
                        if(!var1) { _fun0046_ip = 268; continue _fun0046 }
case 322:
                        var2 = var3.getSize;
                        var3 = var2.bind(var3)();
                        var2 = _closure3_slot0;
                        var2 = var2.containerSize;
                        var2 = var3 - var2;
                        var2 = var9 <= var2;
                        if(!var2) { _fun0046_ip = 280; continue _fun0046 }
case 303:
                        var3 = _closure3_slot0;
                        var3 = var3.scrollPos;
                        var2 = var9 !== var3;
case 280:
                        if(!var2) { _fun0046_ip = 385; continue _fun0046 }
case 386:
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
case 385:
                        var1 = var2;
case 268:
                        return var1;
                    }
                };
                var1['scrollTo'] = var5;
                var5 = function(arg1) {
                    _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                        var8 = arg1;
                        var3 = _closure3_slot0;
                        var4 = var3.props;
                        var7 = var4.contentInset;
                        var1 = undefined;
                        if(!(var1 === var7)) { _fun0047_ip = 63; continue _fun0047 }
case 52:
                        var7 = _closure1_slot18;
case 63:
                        var9 = var4.horizontal;
                        var15 = var4.onScroll;
                        var6 = var4.onEndReached;
                        var12 = var4.endReachedThreshold;
                        var4 = var4.EXPERIMENTAL_enableAnchorWhileScrolling;
                        var14 = var1 !== var4;
                        if(!var14) { _fun0047_ip = 41; continue _fun0047 }
case 326:
                        var14 = var4;
case 41:
                        var3 = var3.state;
                        var20 = var3.fastListComputer;
                        var4 = var3.hasReachedEndBefore;
                        var3 = var8.nativeEvent;
                        var3 = var3.layoutMeasurement;
                        if(var9) { _fun0047_ip = 357; continue _fun0047 }
case 70:
                        var10 = var3.height;
                        _fun0047_ip = 387; continue _fun0047;
case 357:
                        var10 = var3.width;
case 387:
                        if(var9) { _fun0047_ip = 334; continue _fun0047 }
case 340:
                        var16 = var7.top;
                        _fun0047_ip = 53; continue _fun0047;
case 334:
                        var16 = var7.left;
case 53:
                        var13 = null;
                        var17 = var13 != var16;
                        var5 = 0;
                        var3 = 0;
                        if(!var17) { _fun0047_ip = 388; continue _fun0047 }
case 74:
                        var3 = var16;
case 388:
                        if(var9) { _fun0047_ip = 389; continue _fun0047 }
case 248:
                        var16 = var7.bottom;
                        _fun0047_ip = 250; continue _fun0047;
case 389:
                        var16 = var7.right;
case 250:
                        var17 = var13 != var16;
                        var7 = 0;
                        if(!var17) { _fun0047_ip = 390; continue _fun0047 }
case 368:
                        var7 = var16;
case 390:
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
                        if(!(var13 != var15)) { _fun0047_ip = 373; continue _fun0047 }
case 391:
                        var15 = var15.bind(var1)(var8);
case 373:
                        var15 = _closure3_slot0;
                        var16 = var15.deferNextCompute;
                        var15 = _closure3_slot0;
                        if(var16) { _fun0047_ip = 392; continue _fun0047 }
case 347:
                        var16 = var15.computeBlocks;
                        var16 = var16.bind(var15)();
                        _fun0047_ip = 226; continue _fun0047;
case 392:
                        var16 = false;
                        var15['deferNextCompute'] = var16;
                        var16 = var15.deferredCompute;
                        var15 = -1;
                        if(!(var15 !== var16)) { _fun0047_ip = 393; continue _fun0047 }
case 394:
                        var16 = var3.cancelAnimationFrame;
                        var15 = _closure3_slot0;
                        var15 = var15.deferredCompute;
                        var15 = var16.bind(var1)(var15);
case 393:
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
case 226:
                        if(var14) { _fun0047_ip = 395; continue _fun0047 }
case 396:
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
case 395:
                        if(!(var13 != var6)) { _fun0047_ip = 397; continue _fun0047 }
case 283:
                        var8 = var8.nativeEvent;
                        var8 = var8.contentSize;
                        if(var9) { _fun0047_ip = 281; continue _fun0047 }
case 398:
                        var11 = var8.height;
                        _fun0047_ip = 399; continue _fun0047;
case 281:
                        var11 = var8.width;
case 399:
                        var9 = var3.Math;
                        var8 = var9.ceil;
                        var13 = var13 != var12;
                        var5 = 0;
                        if(!var13) { _fun0047_ip = 400; continue _fun0047 }
case 401:
                        var5 = var12;
case 400:
                        var5 = var11 - var5;
                        var5 = var5 - var10;
                        var8 = var8.bind(var9)(var5);
                        var5 = var3.Math;
                        var3 = var5.ceil;
                        var7 = var3.bind(var5)(var7);
                        var5 = var7 >= var8;
                        if(!var5) { _fun0047_ip = 402; continue _fun0047 }
case 403:
                        if(var4) { _fun0047_ip = 402; continue _fun0047 }
case 90:
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
                        _fun0047_ip = 397; continue _fun0047;
case 402:
                        var3 = !var5;
                        if(var5) { _fun0047_ip = 404; continue _fun0047 }
case 405:
                        var3 = var4;
case 404:
                        if(!var3) { _fun0047_ip = 397; continue _fun0047 }
case 406:
                        var5 = _closure3_slot0;
                        var4 = var5.setState;
                        var3 = {};
                        var6 = false;
                        var3['hasReachedEndBefore'] = var6;
                        var3 = var4.bind(var5)(var3);
case 397:
                        var3 = _closure3_slot0;
                        var2 = var3.queueViewabilityChange;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var1['handleScroll'] = var5;
                var5 = function(arg1) {
                    _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                        var9 = arg1;
                        var3 = var9.nativeEvent;
                        var1 = _closure3_slot0;
                        var4 = var1.state;
                        var5 = var4.isFirstLayout;
                        var8 = var4.fastListComputer;
                        var4 = var1.props;
                        var13 = var4.contentInset;
                        var1 = undefined;
                        if(!(var1 === var13)) { _fun0048_ip = 32; continue _fun0048 }
case 9:
                        var13 = _closure1_slot18;
case 32:
                        var7 = var4.onLayout;
                        var10 = var4.horizontal;
                        var4 = var4.chunkBase;
                        var3 = var3.layout;
                        if(var10) { _fun0048_ip = 407; continue _fun0048 }
case 303:
                        var12 = var3.height;
                        _fun0048_ip = 332; continue _fun0048;
case 407:
                        var12 = var3.width;
case 332:
                        if(var10) { _fun0048_ip = 408; continue _fun0048 }
case 68:
                        var14 = var13.top;
                        _fun0048_ip = 17; continue _fun0048;
case 408:
                        var14 = var13.left;
case 17:
                        var3 = null;
                        var15 = var3 != var14;
                        var6 = 0;
                        if(!var15) { _fun0048_ip = 409; continue _fun0048 }
case 264:
                        var6 = var14;
case 409:
                        if(var10) { _fun0048_ip = 53; continue _fun0048 }
case 82:
                        var10 = var13.bottom;
                        _fun0048_ip = 366; continue _fun0048;
case 53:
                        var10 = var13.right;
case 366:
                        var13 = var3 != var10;
                        var11 = 0;
                        if(!var13) { _fun0048_ip = 309; continue _fun0048 }
case 84:
                        var11 = var10;
case 309:
                        var10 = _closure3_slot0;
                        var6 = var12 - var6;
                        var6 = var6 - var11;
                        var10['containerSize'] = var6;
                        if(!(var3 == var4)) { _fun0048_ip = 254; continue _fun0048 }
case 410:
                        var10 = var8.setInfo;
                        var6 = _closure3_slot0;
                        var6 = var6.containerSize;
                        var6 = var10.bind(var8)(var6);
case 254:
                        if(!(var3 != var7)) { _fun0048_ip = 336; continue _fun0048 }
case 302:
                        var6 = _closure3_slot0;
                        var6 = var7.bind(var1)(var9, var6);
case 336:
                        if(var5) { _fun0048_ip = 246; continue _fun0048 }
case 369:
                        var6 = _closure3_slot0;
                        var5 = var6.computeBlocks;
                        var5 = var5.bind(var6)();
                        _fun0048_ip = 14; continue _fun0048;
case 246:
                        if(!(var3 != var4)) { _fun0048_ip = 27; continue _fun0048 }
case 86:
                        var4 = _closure3_slot0;
                        var3 = var4.restoreScrollPosition;
                        var3 = var3.bind(var4)();
                        _fun0048_ip = 14; continue _fun0048;
case 27:
                        var5 = _closure3_slot0;
                        var4 = var5.setState;
                        var7 = var5.getInitialState;
                        var6 = var5.containerSize;
                        var3 = false;
                        var3 = var7.bind(var5)(var6, var8, var3);
                        var3 = var4.bind(var5)(var3);
case 14:
                        var3 = _closure3_slot0;
                        var2 = var3.queueViewabilityChange;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var1['handleLayout'] = var5;
                var5 = function(arg1) {
                    _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var3 = var1.onScrollEnd;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0049_ip = 79; continue _fun0049 }
case 44:
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
case 79:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMomentumScrollEnd'] = var5;
                var2 = function(arg1) {
                    _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var4 = var2.scrollAnchor;
                        var3 = var4.handleUserScroll;
                        var3 = var3.bind(var4)();
                        var2 = var2.props;
                        var3 = var2.onScrollBeginDrag;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0050_ip = 49; continue _fun0050 }
case 61:
                        var1 = _closure3_slot0;
                        var3 = var1.props;
                        var2 = var3.onScrollBeginDrag;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
case 49:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleScrollBeginDrag'] = var2;
                var2 = var1.props;
                var5 = var2.batchesToRender;
                var7 = 12;
                if(!(var6 !== var5)) { _fun0039_ip = 411; continue _fun0039 }
case 412:
                var7 = var5;
case 411:
                var5 = var2.getAnchorIdFromIndex;
                var2 = var2.getAnchorIndexFromId;
                var6 = 5;
                if(!(!(var7 < var6))) { _fun0039_ip = 413; continue _fun0039 }
case 414:
                if(!(var3 == var5)) { _fun0039_ip = 415; continue _fun0039 }
case 416:
                if(!(var3 != var2)) { _fun0039_ip = 417; continue _fun0039 }
case 415:
                if(!(var3 != var5)) { _fun0039_ip = 418; continue _fun0039 }
case 419:
                if(!(var3 == var2)) { _fun0039_ip = 417; continue _fun0039 }
case 418:
                var2 = global;
                var5 = var2.Error;
                var2 = var5.prototype;
                var3 = Object.create(var2, {constructor: {value: var5}});
                var23 = 'FastList: You must define BOTH `getAnchorIndexFromId` and `getAnchorIdFromIndex`, or neither';
                var24 = var3;
                var2 = new var24[var5](var23, var22);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
case 417:
                var2 = var1.getViewabilityConfig;
                var2 = var2.bind(var1)();
                var3 = var2.minimumViewTime;
                if(!(!(var3 <= var4))) { _fun0039_ip = 420; continue _fun0039 }
case 421:
                var3 = var2.visibilityThreshold;
                if(!(!(var3 <= var4))) { _fun0039_ip = 422; continue _fun0039 }
case 423:
                var3 = var2.visibilityThreshold;
                var2 = 1;
                if(!(!(var3 > var2))) { _fun0039_ip = 422; continue _fun0039 }
case 424:
                return var1;
case 422:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var23 = 'FastList: `viewabilityConfig.visibilityThreshold` must be floating point value greater than 0 and less than 1';
                var24 = var2;
                var1 = new var24[var3](var23, var22);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
case 420:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var23 = 'FastList: `viewabilityConfig.minimumViewTime` must be greater than 0';
                var24 = var2;
                var1 = new var24[var3](var23, var22);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
case 413:
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
case 0:
                var2 = arg1;
                var4 = arg2;
                var10 = arguments[3];
                var9 = this;
                var14 = undefined;
                if(!(var10 === var14)) { _fun0051_ip = 40; continue _fun0051 }
case 43:
                var10 = new Array(0);
case 40:
                var1 = var9.props;
                var3 = var1.initialScrollSection;
                var8 = 0;
                var22 = 0;
                if(!(var14 !== var3)) { _fun0051_ip = 425; continue _fun0051 }
case 300:
                var22 = var3;
case 425:
                var20 = var1.initialScrollItem;
                var3 = var1.initialScrollOrientation;
                var21 = 'visible';
                if(!(var14 !== var3)) { _fun0051_ip = 34; continue _fun0051 }
case 211:
                var21 = var3;
case 34:
                var18 = var1.initialScrollStart;
                var3 = var1.stickySectionsVariant;
                var23 = 'default';
                var15 = var23;
                if(!(var14 !== var3)) { _fun0051_ip = 45; continue _fun0051 }
case 407:
                var15 = var3;
case 45:
                var3 = var1.horizontal;
                var12 = var14 !== var3;
                if(!var12) { _fun0051_ip = 339; continue _fun0051 }
case 243:
                var12 = var3;
case 339:
                var1 = var1.scrollPosValue;
                var3 = var4.setInfo;
                var3 = var3.bind(var4)(var2);
                var3 = _closure1_slot37;
                var7 = var3.bind(var14)(var2);
                var13 = null;
                var3 = var13 != var18;
                var17 = 0;
                if(!var3) { _fun0051_ip = 305; continue _fun0051 }
case 268:
                var17 = var18;
case 305:
                var16 = var17 + var2;
                if(!(var13 == var18)) { _fun0051_ip = 380; continue _fun0051 }
case 18:
                if(!(!(var22 > var8))) { _fun0051_ip = 306; continue _fun0051 }
case 426:
                var19 = var13 != var20;
                var6 = var17;
                var5 = var16;
                var3 = undefined;
                if(!var19) { _fun0051_ip = 382; continue _fun0051 }
case 306:
                var19 = var2 > var8;
                var6 = var17;
                var5 = var16;
                var3 = undefined;
                if(!var19) { _fun0051_ip = 382; continue _fun0051 }
case 255:
                var19 = var4.computeScrollPosition;
                var15 = var23 === var15;
                var15 = var19.bind(var4)(var15, var22, var20);
                var19 = var13 != var15;
                var6 = var17;
                var5 = var16;
                var3 = undefined;
                if(!var19) { _fun0051_ip = 382; continue _fun0051 }
case 345:
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
                if(!(var13 == var20)) { _fun0051_ip = 427; continue _fun0051 }
case 428:
                var19 = var15.scrollPosition;
                var15 = var15.sectionOffset;
                var20 = var19 - var15;
case 427:
                var19 = var20 + var2;
                var15 = var13 != var21;
                var6 = var20;
                var5 = var19;
                var3 = undefined;
                if(!var15) { _fun0051_ip = 382; continue _fun0051 }
case 31:
                var15 = var9._scrollPositionToPoint;
                var3 = var15.bind(var9)(var21);
                var6 = var20;
                var5 = var19;
                _fun0051_ip = 382; continue _fun0051;
case 380:
                var15 = var9._scrollPositionToPoint;
                var3 = var15.bind(var9)(var18);
                var6 = var17;
                var5 = var16;
case 382:
                if(!(var13 == var3)) { _fun0051_ip = 429; continue _fun0051 }
case 430:
                var3 = {'x': 0, 'y': 0};
case 429:
                if(var12) { _fun0051_ip = 431; continue _fun0051 }
case 226:
                var12 = var3.y;
                _fun0051_ip = 432; continue _fun0051;
case 431:
                var12 = var3.x;
case 432:
                if(!(var13 == var1)) { _fun0051_ip = 294; continue _fun0051 }
case 227:
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 15;
                var11 = var15[var11];
                var13 = var13.bind(var14)(var11);
                var11 = var13.makeMutable;
                var11 = var11.bind(var13)(var12);
                var9['scrollPosValue'] = var11;
                _fun0051_ip = 398; continue _fun0051;
case 294:
                var11 = var1.set;
                var11 = var11.bind(var1)(var12);
                var9['scrollPosValue'] = var1;
case 398:
                var1 = {};
                if(!(!(var2 > var8))) { _fun0051_ip = 298; continue _fun0051 }
case 433:
                var2 = {};
                var2['size'] = var8;
                var8 = new Array(0);
                var2['items'] = var8;
                _fun0051_ip = 434; continue _fun0051;
case 298:
                var9 = var4.compute;
                var24 = true;
                var28 = var4;
                var27 = var6;
                var26 = var5;
                var25 = var10;
                var2 = var28[var9](var27, var26, var25, var24, var23);
case 434:
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
case 0:
                var3 = this;
                var5 = var3.scrollPosValue;
                var _closure3_slot0 = var5;
                var8 = var3.workletMounted;
                var _closure3_slot1 = var8;
                var1 = var3.props;
                var2 = var1.horizontal;
                var1 = undefined;
                var9 = var1 !== var2;
                if(!var9) { _fun0052_ip = 363; continue _fun0052 }
case 77:
                var9 = var2;
case 363:
                var _closure3_slot2 = var9;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 15;
                var6 = var10[var6];
                var6 = var7.bind(var1)(var6);
                var7 = var6.WorkletEventHandler;
                var6 = function t(arg1) {
                    _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                        var2 = arg1;
                        var4 = _closure3_slot2;
                        var3 = var2.contentOffset;
                        if(var4) { _fun0053_ip = 330; continue _fun0053 }
case 337:
                        var6 = var3.y;
                        _fun0053_ip = 301; continue _fun0053;
case 330:
                        var6 = var3.x;
case 301:
                        var3 = _closure3_slot2;
                        var2 = var2.contentSize;
                        if(var3) { _fun0053_ip = 64; continue _fun0053 }
case 425:
                        var5 = var2.height;
                        _fun0053_ip = 32; continue _fun0053;
case 64:
                        var5 = var2.width;
case 32:
                        var2 = 0;
                        var2 = var2 !== var5;
                        if(var2) { _fun0053_ip = 435; continue _fun0053 }
case 49:
                        var4 = _closure3_slot1;
                        var3 = var4.get;
                        var2 = var3.bind(var4)();
case 435:
                        if(!var2) { _fun0053_ip = 245; continue _fun0053 }
case 54:
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
case 245:
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
case 0:
                var4 = arg2;
                var2 = this;
                var1 = arg1;
                var7 = var1.getAnchorIdFromIndex;
                var1 = var2.props;
                var3 = var1.EXPERIMENTAL_enableAnchorWhileScrolling;
                var1 = undefined;
                var1 = var1 !== var3;
                if(!var1) { _fun0054_ip = 436; continue _fun0054 }
case 437:
                var1 = var3;
case 436:
                var3 = var2.state;
                var8 = var3.isFirstLayout;
                if(var1) { _fun0054_ip = 34; continue _fun0054 }
case 322:
                var3 = var2.disableAnchoringTimeout;
                var1 = null;
                var3 = var1 == var3;
                if(!var3) { _fun0054_ip = 385; continue _fun0054 }
case 34:
                var3 = null;
                var5 = var3 == var7;
                if(var5) { _fun0054_ip = 438; continue _fun0054 }
case 41:
                var5 = var8;
case 438:
                if(var5) { _fun0054_ip = 439; continue _fun0054 }
case 324:
                var6 = var4.isFirstLayout;
                var5 = var8 !== var6;
case 439:
                if(var5) { _fun0054_ip = 342; continue _fun0054 }
case 332:
                var6 = var2.scrollAnchor;
                var5 = var6.findOrUpdateAnchor;
                var4 = var4.items;
                var4 = var5.bind(var6)(var7, var4);
case 342:
                var4 = var2.scrollAnchor;
                var2 = var4.hasAnchor;
                var2 = var2.bind(var4)();
                if(var2) { _fun0054_ip = 47; continue _fun0054 }
case 327:
                var2 = null;
case 47:
                var1 = var2;
case 385:
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
case 0:
                var1 = arg2;
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = arg1;
                var5 = var4.scrollPosValue;
                var4 = var2.props;
                var4 = var4.scrollPosValue;
                if(!(var5 === var4)) { _fun0055_ip = 18; continue _fun0055 }
case 60:
                var4 = var2.state;
                var4 = var4.isFirstLayout;
                if(var4) { _fun0055_ip = 440; continue _fun0055 }
case 46:
                var4 = var1.isFirstLayout;
                if(!var4) { _fun0055_ip = 440; continue _fun0055 }
case 338:
                var4 = var2.props;
                var5 = var4.chunkBase;
                var4 = null;
                if(!(var4 == var5)) { _fun0055_ip = 245; continue _fun0055 }
case 438:
                var5 = var2.scrollView;
                var5 = var5.current;
                if(!(var4 != var5)) { _fun0055_ip = 245; continue _fun0055 }
case 441:
                var4 = var5.measure;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.restoreScrollPosition;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                _fun0055_ip = 245; continue _fun0055;
case 440:
                var3 = arg3;
                if(!var3) { _fun0055_ip = 245; continue _fun0055 }
case 442:
                var3 = var2.anchorScroll;
                var3 = var3.bind(var2)();
case 245:
                var3 = var2.state;
                var3 = var3.items;
                var1 = var1.items;
                if(!(var3 !== var1)) { _fun0055_ip = 247; continue _fun0055 }
case 268:
                var1 = var2.queueViewabilityChange;
                var1 = var1.bind(var2)();
case 247:
                var1 = undefined;
                return var1;
case 18:
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
case 0:
                var1 = this;
                var1 = var1.props;
                var4 = var1.viewabilityConfig;
                var1 = {};
                var2 = null;
                var5 = var2 == var4;
                var6 = undefined;
                if(var5) { _fun0056_ip = 37; continue _fun0056 }
case 277:
                var6 = var4.minimumViewTime;
case 37:
                var7 = var2 != var6;
                var5 = 1000;
                if(!var7) { _fun0056_ip = 9; continue _fun0056 }
case 6:
                var5 = var6;
case 9:
                var1['minimumViewTime'] = var5;
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0056_ip = 81; continue _fun0056 }
case 364:
                var3 = var4.visibilityThreshold;
case 81:
                var4 = var2 != var3;
                var2 = 0.5;
                if(!var4) { _fun0056_ip = 443; continue _fun0056 }
case 13:
                var2 = var3;
case 443:
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
case 0:
                var2 = this;
                var1 = var2.props;
                var3 = var1.onViewableItemsChanged;
                var1 = null;
                if(!(var1 != var3)) { _fun0057_ip = 54; continue _fun0057 }
case 33:
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
case 54:
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
case 0:
                var3 = this;
                var1 = var3.props;
                var1 = var1.chunkBase;
                var2 = var3.state;
                var7 = var2.fastListComputer;
                var6 = var2.items;
                var2 = var2.isFirstLayout;
                if(var2) { _fun0058_ip = 312; continue _fun0058 }
case 60:
                var2 = var3.setState;
                var5 = var3.getInitialState;
                var4 = null;
                var8 = var4 != var1;
                var4 = 0;
                if(!var8) { _fun0058_ip = 49; continue _fun0058 }
case 338:
                var4 = var1;
case 49:
                var10 = false;
                var13 = var3;
                var12 = var4;
                var11 = var7;
                var9 = var6;
                var1 = var13[var5](var12, var11, var10, var9, var8);
                var1 = var2.bind(var3)(var1);
case 312:
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
case 0:
                var1 = this;
                var4 = var1.worklet;
                var2 = null;
                if(!(var2 != var4)) { _fun0059_ip = 444; continue _fun0059 }
case 299:
                var3 = var4.unregisterFromEvents;
                var2 = var1.viewTag;
                var2 = var3.bind(var4)(var2);
case 444:
                var2 = var1.deferredCompute;
                var3 = -1;
                if(!(var3 !== var2)) { _fun0059_ip = 81; continue _fun0059 }
case 363:
                var2 = global;
                var5 = var2.cancelAnimationFrame;
                var4 = var1.deferredCompute;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
case 81:
                var2 = var1.viewabilityDebounce;
                if(!(var3 !== var2)) { _fun0059_ip = 386; continue _fun0059 }
case 438:
                var2 = global;
                var3 = var2.clearTimeout;
                var2 = var1.viewabilityDebounce;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 386:
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
case 0:
                var4 = this;
                var1 = var4.props;
                var8 = var1.getAnchorIndexFromId;
                var3 = var1.stickySectionsVariant;
                var10 = 'default';
                var1 = undefined;
                var2 = var10;
                if(!(var1 !== var3)) { _fun0060_ip = 63; continue _fun0060 }
case 37:
                var2 = var3;
case 63:
                var3 = var4.state;
                var9 = var3.fastListComputer;
                var3 = null;
                if(!(var3 != var8)) { _fun0060_ip = 335; continue _fun0060 }
case 46:
                var5 = var4.scrollAnchor;
                var5 = var5.anchorOffset;
                if(!(var3 != var5)) { _fun0060_ip = 335; continue _fun0060 }
case 81:
                var7 = var4.scrollAnchor;
                var6 = var7.getAnchorIndex;
                var6 = var6.bind(var7)(var8);
                if(!(var3 != var6)) { _fun0060_ip = 335; continue _fun0060 }
case 439:
                var8 = var9.computeScrollPosition;
                var7 = var6.section;
                var6 = var6.item;
                var2 = var10 === var2;
                var2 = var8.bind(var9)(var2, var7, var6);
                var3 = var3 != var2;
                if(!var3) { _fun0060_ip = 385; continue _fun0060 }
case 311:
                var7 = var4.scrollPos;
                var6 = var2.scrollPosition;
                var6 = var6 - var5;
                var3 = var7 !== var6;
case 385:
                if(!var3) { _fun0060_ip = 335; continue _fun0060 }
case 268:
                var3 = var4.scrollTo;
                var2 = var2.scrollPosition;
                var2 = var2 - var5;
                var2 = var3.bind(var4)(var2);
case 335:
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
case 0:
                var1 = this;
                var1 = var1.props;
                var1 = var1.horizontal;
                var2 = arg1;
                var2 = var2.nativeEvent;
                var2 = var2.contentOffset;
                if(var1) { _fun0061_ip = 436; continue _fun0061 }
case 301:
                var1 = var2.y;
                _fun0061_ip = 59; continue _fun0061;
case 436:
                var1 = var2.x;
case 59:
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
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var5 = var3.props;
                var11 = var5.initialScrollItem;
                var2 = var5.initialScrollSection;
                var9 = 0;
                var1 = undefined;
                var10 = 0;
                if(!(var1 !== var2)) { _fun0062_ip = 60; continue _fun0062 }
case 63:
                var10 = var2;
case 60:
                var6 = var5.initialScrollOrientation;
                var2 = 'visible';
                if(!(var1 !== var6)) { _fun0062_ip = 32; continue _fun0062 }
case 46:
                var2 = var6;
case 32:
                var5 = var5.initialScrollStart;
                var7 = null;
                if(!(var7 == var11)) { _fun0062_ip = 438; continue _fun0062 }
case 445:
                if(!(var10 <= var9)) { _fun0062_ip = 438; continue _fun0062 }
case 5:
                if(!(var7 != var5)) { _fun0062_ip = 446; continue _fun0062 }
case 438:
                if(!(var7 == var5)) { _fun0062_ip = 447; continue _fun0062 }
case 13:
                var8 = var3.scrollToLocation;
                var6 = {};
                var6['section'] = var10;
                var12 = var7 != var11;
                var7 = -1;
                var10 = var7;
                if(!var12) { _fun0062_ip = 343; continue _fun0062 }
case 357:
                var10 = var11;
case 343:
                var6['item'] = var10;
                var6['orientation'] = var2;
                var2 = 16;
                var6['paddingEnd'] = var2;
                var2 = true;
                var6['setAnchor'] = var2;
                var6 = var8.bind(var3)(var6);
                if(var6) { _fun0062_ip = 216; continue _fun0062 }
case 268:
                var8 = var3.scrollPosValue;
                var6 = var8.set;
                var6 = var6.bind(var8)(var9);
                var6 = var3.deferredCompute;
                if(!(var7 !== var6)) { _fun0062_ip = 254; continue _fun0062 }
case 252:
                var6 = global;
                var7 = var6.cancelAnimationFrame;
                var6 = var3.deferredCompute;
                var6 = var7.bind(var1)(var6);
case 254:
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
                _fun0062_ip = 448; continue _fun0062;
case 216:
                var3['deferNextCompute'] = var2;
                _fun0062_ip = 448; continue _fun0062;
case 447:
                var4 = var3.scrollTo;
                var2 = false;
                var2 = var4.bind(var3)(var5, var2);
                _fun0062_ip = 448; continue _fun0062;
case 446:
                var2 = var3.computeBlocks;
                var2 = var2.bind(var3)();
case 448:
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
case 0:
                var4 = this;
                var2 = var4.props;
                var3 = var2.batchesToRender;
                var6 = 12;
                var1 = undefined;
                if(!(var1 !== var3)) { _fun0063_ip = 330; continue _fun0063 }
case 35:
                var6 = var3;
case 330:
                var11 = var2.chunkBase;
                var2 = var4.state;
                var9 = var2.fastListComputer;
                var8 = var2.items;
                var2 = null;
                if(!(var2 == var11)) { _fun0063_ip = 55; continue _fun0063 }
case 209:
                var11 = var4.containerSize;
case 55:
                var7 = var4.scrollPos;
                var10 = 0;
                if(!(var10 !== var11)) { _fun0063_ip = 449; continue _fun0063 }
case 67:
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
                _fun0063_ip = 331; continue _fun0063;
case 449:
                var5 = {'batchSize': 0, 'blockStart': 0, 'blockEnd': 0};
case 331:
                var3 = var5.batchSize;
                var2 = var4.state;
                var2 = var2.batchSize;
                var2 = var3 === var2;
                if(!var2) { _fun0063_ip = 372; continue _fun0063 }
case 242:
                var6 = var5.blockStart;
                var3 = var4.state;
                var3 = var3.blockStart;
                var2 = var6 === var3;
case 372:
                if(!var2) { _fun0063_ip = 450; continue _fun0063 }
case 87:
                var6 = var5.blockEnd;
                var3 = var4.state;
                var3 = var3.blockEnd;
                var2 = var6 === var3;
case 450:
                if(var2) { _fun0063_ip = 382; continue _fun0063 }
case 347:
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
case 382:
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
case 0:
                var22 = this;
                var1 = var22.props;
                var2 = var1.stickySectionsVariant;
                var21 = 'default';
                var20 = undefined;
                var19 = var21;
                if(!(var20 !== var2)) { _fun0064_ip = 444; continue _fun0064 }
case 52:
                var19 = var2;
case 444:
                var18 = var1.renderHeader;
                if(!(var20 === var18)) { _fun0064_ip = 9; continue _fun0064 }
case 61:
                var18 = _closure1_slot35;
case 9:
                var _closure3_slot0 = var18;
                var17 = var1.renderFooter;
                if(!(var20 === var17)) { _fun0064_ip = 3; continue _fun0064 }
case 364:
                var17 = _closure1_slot35;
case 3:
                var _closure3_slot1 = var17;
                var16 = var1.renderSection;
                if(!(var20 === var16)) { _fun0064_ip = 341; continue _fun0064 }
case 451:
                var16 = _closure1_slot35;
case 341:
                var _closure3_slot2 = var16;
                var15 = var1.renderItem;
                var _closure3_slot3 = var15;
                var14 = var1.renderSectionFooter;
                if(!(var20 === var14)) { _fun0064_ip = 340; continue _fun0064 }
case 80:
                var14 = _closure1_slot35;
case 340:
                var _closure3_slot4 = var14;
                var2 = var1.optimizeListItemRender;
                var13 = var20 !== var2;
                if(!var13) { _fun0064_ip = 452; continue _fun0064 }
case 366:
                var13 = var2;
case 452:
                var2 = var1.disableContentWrappers;
                var12 = var20 !== var2;
                if(!var12) { _fun0064_ip = 19; continue _fun0064 }
case 83:
                var12 = var2;
case 19:
                var1 = var1.debugLayout;
                var1 = var22.state;
                var3 = var1.items;
                var1 = var22.props;
                var1 = var1.horizontal;
                var2 = null;
                var11 = var2 != var1;
                if(!var11) { _fun0064_ip = 453; continue _fun0064 }
case 254:
                var11 = var1;
case 453:
                var10 = new Array(0);
                var _closure3_slot5 = var10;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.type;
                        var3 = var1.layoutStart;
                        var1 = _closure1_slot20;
                        var1 = var1.SECTION;
                        if(!(var2 === var1)) { _fun0065_ip = 363; continue _fun0065 }
case 301:
                        var2 = _closure3_slot5;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
case 363:
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
                if(var2) { _fun0064_ip = 454; continue _fun0064 }
case 455:
                var26 = var3.value;
                var29 = var26.type;
                var28 = var26.key;
                var31 = var26.layoutStart;
                var24 = var26.recyclerKey;
                var2 = var26.layoutSize;
                var25 = var26.section;
                var26 = var26.item;
                if(!(var4 !== var2)) { _fun0064_ip = 456; continue _fun0064 }
case 457:
                var27 = _closure1_slot20;
                var27 = var27.SPACER;
                if(!(var27 !== var29)) { _fun0064_ip = 458; continue _fun0064 }
case 349:
                var27 = _closure1_slot20;
                var27 = var27.HEADER;
                if(!(var27 !== var29)) { _fun0064_ip = 459; continue _fun0064 }
case 380:
                var27 = _closure1_slot20;
                var27 = var27.FOOTER;
                if(!(var27 !== var29)) { _fun0064_ip = 460; continue _fun0064 }
case 382:
                var27 = _closure1_slot20;
                var27 = var27.SECTION;
                if(!(var27 !== var29)) { _fun0064_ip = 461; continue _fun0064 }
case 226:
                var27 = _closure1_slot20;
                var27 = var27.ITEM;
                if(!(var27 !== var29)) { _fun0064_ip = 462; continue _fun0064 }
case 463:
                var27 = _closure1_slot20;
                var27 = var27.SECTION_FOOTER;
                if(!(var27 === var29)) { _fun0064_ip = 456; continue _fun0064 }
case 464:
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
                if(var13) { _fun0064_ip = 465; continue _fun0064 }
case 314:
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
case 465:
                var30['children'] = var27;
                var27 = var7.HermesInternal;
                var27 = var27.concat;
                var27 = var27.bind(var6)(var28);
                var27 = var33.bind(var20)(var32, var30, var27);
                var27 = var29.bind(var1)(var27);
                _fun0064_ip = 456; continue _fun0064;
case 462:
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
                if(var13) { _fun0064_ip = 466; continue _fun0064 }
case 467:
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
case 466:
                var29['children'] = var26;
                var26 = var7.HermesInternal;
                var26 = var26.concat;
                var26 = var26.bind(var6)(var28);
                var26 = var32.bind(var20)(var30, var29, var26);
                var26 = var27.bind(var1)(var26);
                _fun0064_ip = 456; continue _fun0064;
case 461:
                var26 = var10.shift;
                var26 = var26.bind(var10)();
                if(!(var21 === var19)) { _fun0064_ip = 415; continue _fun0064 }
case 468:
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
                if(var13) { _fun0064_ip = 469; continue _fun0064 }
case 470:
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
case 469:
                var29['children'] = var26;
                var26 = var7.HermesInternal;
                var26 = var26.concat;
                var26 = var26.bind(var6)(var28);
                var26 = var32.bind(var20)(var30, var29, var26);
                var26 = var27.bind(var1)(var26);
                _fun0064_ip = 456; continue _fun0064;
case 415:
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
                if(var13) { _fun0064_ip = 471; continue _fun0064 }
case 472:
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
case 471:
                var27['children'] = var25;
                var25 = var7.HermesInternal;
                var25 = var25.concat;
                var25 = var25.bind(var6)(var28);
                var25 = var30.bind(var20)(var29, var27, var25);
                var25 = var26.bind(var1)(var25);
                _fun0064_ip = 456; continue _fun0064;
case 460:
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
                if(var13) { _fun0064_ip = 473; continue _fun0064 }
case 474:
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
case 473:
                var27['children'] = var25;
                var25 = var7.HermesInternal;
                var25 = var25.concat;
                var25 = var25.bind(var6)(var28);
                var25 = var30.bind(var20)(var29, var27, var25);
                var25 = var26.bind(var1)(var25);
                _fun0064_ip = 456; continue _fun0064;
case 459:
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
                if(var13) { _fun0064_ip = 475; continue _fun0064 }
case 476:
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
case 475:
                var26['children'] = var24;
                var24 = var7.HermesInternal;
                var24 = var24.concat;
                var24 = var24.bind(var6)(var28);
                var24 = var29.bind(var20)(var27, var26, var24);
                var24 = var25.bind(var1)(var24);
                _fun0064_ip = 456; continue _fun0064;
case 458:
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
case 456:
                var24 = var8.bind(var20)();
                var2 = var24.done;
                var3 = var24;
                if(!var2) { _fun0064_ip = 455; continue _fun0064 }
case 454:
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
case 0:
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
                if(!(var4 === var11)) { _fun0066_ip = 292; continue _fun0066 }
case 477:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isAndroid;
                var11 = var1.bind(var2)();
case 292:
                var1 = var5.inActionSheet;
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var12 = var3.bind(var4)(var5, var2);
                if(var1) { _fun0066_ip = 478; continue _fun0066 }
case 479:
                var9 = _closure1_slot13;
                _fun0066_ip = 393; continue _fun0066;
case 478:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var9 = var1.BottomSheetScrollView;
case 393:
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
                if(!var9) { _fun0066_ip = 480; continue _fun0066 }
case 355:
                var6 = var7.bind(var4)(var8);
case 480:
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
case 0:
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
                if(!var4) { _fun0067_ip = 311; continue _fun0067 }
case 481:
                var4 = var7;
case 311:
                var1['stickyHeaderFooter'] = var4;
                var4 = var5.getRecyclerKey;
                var1['getRecyclerKey'] = var4;
                var4 = var5.persistantKeys;
                var1['persistantKeys'] = var4;
                var7 = var5.disableRecyclingOnFullCompute;
                var4 = var6 != var7;
                if(!var4) { _fun0067_ip = 21; continue _fun0067 }
case 482:
                var4 = var7;
case 21:
                var1['disableRecyclingOnFullCompute'] = var4;
                var1 = var2.bind(var11)(var1);
                var1 = var3.batchSize;
                var4 = 0;
                if(!(var4 !== var1)) { _fun0067_ip = 310; continue _fun0067 }
case 483:
                var1 = var11.isDirty;
                var2 = var1.bind(var11)();
                var1 = null;
                if(!var2) { _fun0067_ip = 241; continue _fun0067 }
case 484:
                var2 = {};
                var15 = var2;
                var14 = var3;
                var7 = copyDataProperties(var15, var14);
                var10 = var11.compute;
                var9 = var3.blockStart;
                var8 = var3.blockEnd;
                var7 = var3.items;
                if(!(var6 == var7)) { _fun0067_ip = 22; continue _fun0067 }
case 266:
                var7 = new Array(0);
case 22:
                var14 = var10.bind(var11)(var9, var8, var7);
                var15 = var2;
                var7 = copyDataProperties(var15, var14);
                var1 = var2;
case 241:
                _fun0067_ip = 380; continue _fun0067;
case 310:
                var2 = {};
                var15 = var2;
                var14 = var3;
                var3 = copyDataProperties(var15, var14);
                var7 = var5.insetStart;
                var8 = var6 != var7;
                var3 = 0;
                if(!var8) { _fun0067_ip = 356; continue _fun0067 }
case 292:
                var3 = var7;
case 356:
                var5 = var5.insetEnd;
                var6 = var6 != var5;
                var4 = 0;
                if(!var6) { _fun0067_ip = 485; continue _fun0067 }
case 486:
                var4 = var5;
case 485:
                var4 = var3 + var4;
                var3 = 'size';
                var2[var3] = var4;
                var4 = new Array(0);
                var3 = 'items';
                var2[var3] = var4;
                var1 = var2;
case 380:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 15;
    var2 = var11[var2];
    var9 = var9.bind(var1)(var2);
    var2 = var9.createAnimatedComponent;
    var2 = var2.bind(var9)(var8);
    var9 = 20;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'lib/native/FastList.tsx';
    var9 = var10.bind(var11)(var9);
    var3['default'] = var8;
    var8 = 12;
    var3['DEFAULT_BATCHES_TO_RENDER'] = var8;
    var3['MINIMUM_BATCHES_TO_RENDER'] = var7;
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