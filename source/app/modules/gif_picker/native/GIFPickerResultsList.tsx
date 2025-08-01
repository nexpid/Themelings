// app/modules/gif_picker/native/GIFPickerResultsList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var8 = var6[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot5 = var7;
    var8 = {};
    var7 = 20;
    var8['length'] = var7;
    var9 = var4.Array;
    var7 = var9.from;
    var10 = var7.bind(var9)(var8);
    var9 = var10.map;
    var7 = function() {
        var1 = undefined;
        return var1;
    };
    var7 = var9.bind(var10)(var7);
    var _closure1_slot6 = var7;
    var7 = var4.Array;
    var4 = var7.from;
    var8 = var4.bind(var7)(var8);
    var7 = var8.map;
    var4 = function() {
        var1 = {};
        var2 = 100;
        var1['width'] = var2;
        var2 = global;
        var4 = var2.Math;
        var3 = var4.floor;
        var5 = var2.Math;
        var2 = var5.random;
        var5 = var2.bind(var5)();
        var2 = 91;
        var2 = var2 * var5;
        var3 = var3.bind(var4)(var2);
        var2 = 90;
        var2 = var3 + var2;
        var1['height'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gif_picker/native/GIFPickerResultsList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var9 = var4.columns;
            var _closure2_slot0 = var9;
            var5 = var4.columnWidth;
            var _closure2_slot1 = var5;
            var13 = var4.resultItems;
            var3 = var4.onPressGIF;
            var _closure2_slot2 = var3;
            var2 = var4.inActionSheet;
            var8 = var4.ListFooterComponent;
            var6 = var4.loading;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 3;
            var7 = var11[var7];
            var10 = var10.bind(var4)(var7);
            var7 = {};
            var11 = false;
            var7['hasCategories'] = var11;
            var7 = var10.bind(var4)(var7);
            var15 = var7.safeAreaBottomKeyboardAware;
            if(!var6) { _fun0001_ip = 115; continue _fun0001 }
 111:
            var13 = _closure1_slot6;
 115:
            var14 = _closure1_slot4;
            var7 = var14.useCallback;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function(arg1, arg2) {
                var1 = {};
                var3 = _closure2_slot1;
                var1['width'] = var3;
                var4 = arg1;
                var2 = arg2;
                var2 = var4 / var2;
                var2 = var3 / var2;
                var1['height'] = var2;
                return var1;
            };
            var16 = var7.bind(var14)(var5, var6);
            _closure2_slot3 = var16;
            var7 = var14.useCallback;
            var6 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var3 = arg2;
                    var2 = null;
                    var5 = var2 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 23; continue _fun0002 }
 17:
                    var1 = var4.src;
 23:
                    if(!(var2 == var1)) { _fun0002_ip = 36; continue _fun0002 }
 27:
                    var2 = var3.toString;
                    var1 = var2.bind(var3)();
 36:
                    return var1;
                }
            };
            var5 = new Array(0);
            var10 = var7.bind(var14)(var6, var5);
            var5 = function useViewedItemIndexes() {
                var5 = _closure1_slot4;
                var4 = var5.useState;
                var3 = function() {
                    var1 = global;
                    var1 = var1.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var3 = var2;
                    var1 = new var3[var1](var2);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var6 = var4.bind(var5)(var3);
                var4 = _closure1_slot3;
                var3 = undefined;
                var1 = 2;
                var4 = var4.bind(var3)(var6, var1);
                var1 = 0;
                var3 = var4[var1];
                var1 = 1;
                var1 = var4[var1];
                var _closure3_slot0 = var1;
                var1 = {};
                var1['viewedItemIndexes'] = var3;
                var4 = var5.useCallback;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.changed;
                    var _closure4_slot0 = var1;
                    var3 = _closure3_slot0;
                    var1 = undefined;
                    var2 = function(arg1) {
                        var1 = global;
                        var4 = var1.Set;
                        var1 = var4.prototype;
                        var3 = Object.create(var1, {constructor: {value: var4}});
                        var5 = arg1;
                        var6 = var3;
                        var1 = new var6[var4](var5, var4);
                        var1 = var1 instanceof Object ? var1 : var3;
                        var _closure5_slot0 = var1;
                        var4 = _closure4_slot0;
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var1 = arg1;
                                var3 = var1.index;
                                var2 = var1.isViewable;
                                var1 = null;
                                var1 = var1 !== var3;
                                if(!var1) { _fun0003_ip = 26; continue _fun0003 }
 23:
                                var1 = var2;
 26:
                                if(!var1) { _fun0003_ip = 46; continue _fun0003 }
 29:
                                var2 = _closure5_slot0;
                                var1 = var2.add;
                                var1 = var1.bind(var2)(var3);
 46:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = new Array(0);
                var2 = var4.bind(var5)(var3, var2);
                var1['onViewableItemsChanged'] = var2;
                return var1;
            };
            var5 = var5.bind(var4)();
            var11 = var5.viewedItemIndexes;
            var7 = var5.onViewableItemsChanged;
            var6 = var14.useCallback;
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var3;
            var5[2] = var16;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var9 = var1.item;
                    var3 = var1.index;
                    var5 = var1.columnIndex;
                    var2 = var1.extraData;
                    var1 = null;
                    if(!(var1 != var9)) { _fun0004_ip = 216; continue _fun0004 }
 34:
                    var6 = _closure2_slot3;
                    var4 = var9.width;
                    var1 = var9.height;
                    var7 = undefined;
                    var1 = var6.bind(var7)(var4, var1);
                    var11 = var1.width;
                    var10 = var1.height;
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var3);
                    var6 = _closure1_slot5;
                    if(var1) { _fun0004_ip = 147; continue _fun0004 }
 89:
                    var4 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 4;
                    var1 = var12[var1];
                    var1 = var4.bind(var7)(var1);
                    var4 = var1.GIFPickerItemPlaceholder;
                    var1 = {};
                    var1['width'] = var11;
                    var1['height'] = var10;
                    var12 = _closure2_slot0;
                    var1['columns'] = var12;
                    var1['columnIndex'] = var5;
                    var1 = var6.bind(var7)(var4, var1);
                    _fun0004_ip = 214; continue _fun0004;
 147:
                    var4 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 4;
                    var2 = var12[var2];
                    var4 = var4.bind(var7)(var2);
                    var2 = {};
                    var2['width'] = var11;
                    var2['height'] = var10;
                    var2['index'] = var3;
                    var10 = _closure2_slot0;
                    var2['columns'] = var10;
                    var2['columnIndex'] = var5;
                    var2['item'] = var9;
                    var8 = _closure2_slot2;
                    var2['onPressGIF'] = var8;
                    var1 = var6.bind(var7)(var4, var2);
 214:
                    return var1;
 216:
                    var2 = _closure1_slot7;
                    var2 = var2[var3];
                    var7 = var2.width;
                    var3 = var2.height;
                    var2 = _closure2_slot3;
                    var4 = undefined;
                    var2 = var2.bind(var4)(var7, var3);
                    var8 = var2.width;
                    var7 = var2.height;
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 4;
                    var1 = var9[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.GIFPickerItemPlaceholder;
                    var1 = {};
                    var1['width'] = var8;
                    var1['height'] = var7;
                    var6 = _closure2_slot0;
                    var1['columns'] = var6;
                    var1['columnIndex'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var5 = var6.bind(var14)(var3, var5);
            var6 = var14.useCallback;
            var3 = new Array(1);
            var3[0] = var16;
            var1 = function(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg2;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0005_ip = 41; continue _fun0005 }
 9:
                    var4 = _closure2_slot3;
                    var3 = var1.width;
                    var2 = var1.height;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    var2 = var1.height;
                    _fun0005_ip = 60; continue _fun0005;
 41:
                    var3 = _closure1_slot7;
                    var1 = arg3;
                    var1 = var3[var1];
                    var2 = var1.height;
 60:
                    var1 = arg1;
                    var1['size'] = var2;
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var6.bind(var14)(var1, var3);
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 5;
            var1 = var14[var1];
            var1 = var3.bind(var4)(var1);
            if(var2) { _fun0001_ip = 275; continue _fun0001 }
 267:
            var3 = var1.MasonryFlashList;
            _fun0001_ip = 281; continue _fun0001;
 275:
            var3 = var1.BottomSheetMasonryFlashList;
 281:
            var2 = _closure1_slot5;
            var1 = {};
            var14 = {};
            var14['paddingBottom'] = var15;
            var1['contentContainerStyle'] = var14;
            var1['data'] = var13;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 6;
            var15 = var14[var12];
            var15 = var13.bind(var4)(var15);
            var15 = var15.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
            var1['drawDistance'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
            var1['estimatedItemSize'] = var12;
            var1['extraData'] = var11;
            var1['keyExtractor'] = var10;
            var10 = 'always';
            var1['keyboardShouldPersistTaps'] = var10;
            var1['numColumns'] = var9;
            var1['ListFooterComponent'] = var8;
            var8 = true;
            var1['optimizeItemArrangement'] = var8;
            var1['onViewableItemsChanged'] = var7;
            var1['overrideItemLayout'] = var6;
            var1['renderItem'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();