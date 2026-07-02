// app/modules/collectibles/native/EditCollectiblesPickerList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'marginTop': 12};
    var4['list'] = var10;
    var10 = {};
    var11 = 88;
    var10['paddingBottom'] = var11;
    var4['listContent'] = var10;
    var10 = {'paddingVertical': 80, 'alignItems': 'center'};
    var4['loadingContainer'] = var10;
    var10 = {'paddingHorizontal': null, 'paddingTop': 10, 'paddingBottom': 5};
    var11 = 5;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.GUTTER_SIZE;
    var10['paddingHorizontal'] = var11;
    var4['header'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var7 = var1.header;
        var1 = _closure1_slot7;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var6.header;
        var1['style'] = var6;
        var6 = _closure1_slot0;
        var8 = _closure1_slot1;
        var5 = 6;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Heading;
        var5 = {'variant': 'heading-sm/medium', 'color': 'mobile-text-heading-primary'};
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/EditCollectiblesPickerList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditCollectiblesPickerList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = var3.sections;
            var _closure2_slot0 = var5;
            var12 = var3.selectedSkuId;
            var _closure2_slot1 = var12;
            var13 = var3.renderRow;
            var _closure2_slot2 = var13;
            var1 = var3.isFetching;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var _closure2_slot3 = var1;
            var11 = var3.contentContainerStyle;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var3 = _closure1_slot7;
            var7 = var3.bind(var4)();
            var14 = _closure1_slot3;
            var8 = var14.useState;
            var3 = 0;
            var10 = var8.bind(var14)(var3);
            var9 = _closure1_slot2;
            var8 = 2;
            var9 = var9.bind(var4)(var10, var8);
            var16 = var9[var3];
            var8 = 1;
            var8 = var9[var8];
            _closure2_slot4 = var8;
            var10 = var14.useCallback;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = _closure2_slot4;
                var2 = var1.width;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = new Array(0);
            var10 = var10.bind(var14)(var9, var8);
            var8 = var16 > var3;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var8 = 5;
            var9 = var15[var8];
            var9 = var14.bind(var4)(var9);
            var17 = var9.GUTTER_SIZE;
            var9 = 4;
            var9 = var9 * var17;
            var9 = var16 - var9;
            var8 = var15[var8];
            var8 = var14.bind(var4)(var8);
            var8 = var8.ROW_SIZE;
            var3 = var9 / var8;
case 4:
            _closure2_slot5 = var3;
            var8 = _closure1_slot3;
            var14 = var8.useMemo;
            var9 = new Array(2);
            var9[0] = var5;
            var9[1] = var1;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot3;
                    var1 = new Array(0);
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot0;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        var3 = arg1;
                        var _closure4_slot0 = var3;
                        var5 = _closure3_slot0;
                        var4 = var5.push;
                        var1 = {};
                        var6 = 'header';
                        var1['type'] = var6;
                        var8 = var3.section;
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var7 = var6.concat;
                        var6 = 'header-';
                        var6 = var7.bind(var6)(var8);
                        var1['key'] = var6;
                        var6 = var3.header;
                        var1['header'] = var6;
                        var1 = var4.bind(var5)(var1);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var1 = 7;
                        var4 = var8[var1];
                        var1 = undefined;
                        var6 = var7.bind(var1)(var4);
                        var5 = var6.chunk;
                        var4 = var3.items;
                        var3 = 5;
                        var3 = var8[var3];
                        var3 = var7.bind(var1)(var3);
                        var3 = var3.ROW_SIZE;
                        var4 = var5.bind(var6)(var4, var3);
                        var3 = var4.forEach;
                        var2 = function(arg1, arg2) {
                            var3 = _closure3_slot0;
                            var2 = var3.push;
                            var1 = {};
                            var4 = 'row';
                            var1['type'] = var4;
                            var4 = _closure4_slot0;
                            var8 = var4.section;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var7 = var4.concat;
                            var6 = 'row-';
                            var5 = '-';
                            var4 = arg2;
                            var4 = var7.bind(var6)(var8, var5, var4);
                            var1['key'] = var4;
                            var4 = arg1;
                            var1['items'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
case 6:
                    return var1;
                }
            };
            var16 = var14.bind(var8)(var5, var9);
            var9 = var8.useCallback;
            var5 = new Array(3);
            var5[0] = var13;
            var5[1] = var3;
            var5[2] = var12;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.item;
                    var3 = var2.type;
                    var1 = 'header';
                    if(!(var1 !== var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure2_slot2;
                    var3 = {};
                    var5 = var2.items;
                    var3['items'] = var5;
                    var5 = _closure2_slot5;
                    var3['size'] = var5;
                    var1 = _closure2_slot1;
                    var3['selectedSkuId'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    _fun0003_ip = 10; continue _fun0003;
case 8:
                    var5 = _closure1_slot6;
                    var4 = _closure1_slot8;
                    var3 = {};
                    var2 = var2.header;
                    var3['header'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 10:
                    return var1;
                }
            };
            var15 = var9.bind(var8)(var3, var5);
            var9 = var8.useCallback;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.type;
                return var1;
            };
            var3 = new Array(0);
            var14 = var9.bind(var8)(var5, var3);
            var5 = var8.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.key;
                return var1;
            };
            var2 = new Array(0);
            var13 = var5.bind(var8)(var3, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var5 = {};
            if(var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var7.list;
            var5['style'] = var1;
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var17 = _closure1_slot1;
            var1 = 8;
            var1 = var17[var1];
            var1 = var8.bind(var4)(var1);
            var8 = var1.BottomSheetFlashList;
            var1 = {};
            var1['data'] = var16;
            var1['renderItem'] = var15;
            var1['getItemType'] = var14;
            var1['keyExtractor'] = var13;
            var1['extraData'] = var12;
            var12 = null;
            if(!(var12 == var11)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = var7.listContent;
case 13:
            var1['contentContainerStyle'] = var11;
            var1['onLayout'] = var10;
            var10 = 'always';
            var1['keyboardShouldPersistTaps'] = var10;
            var1 = var9.bind(var4)(var8, var1);
            var5['children'] = var1;
            var1 = var5;
            _fun0001_ip = 15; continue _fun0001;
case 11:
            var7 = var7.loadingContainer;
            var5['style'] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot4;
            var6 = {'animating': true, 'size': 'large'};
            var6 = var8.bind(var4)(var7, var6);
            var5['children'] = var6;
            var1 = var5;
case 15:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['EditCollectiblesPickerList'] = var2;
    return var1;
})();