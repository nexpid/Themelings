// app/uikit-native/refresh/form/FormSelect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function OptionButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.item;
            var _closure2_slot0 = var9;
            var5 = var1.selected;
            var10 = var1.onPress;
            var _closure2_slot1 = var10;
            var3 = _closure1_slot8;
            var4 = undefined;
            var6 = var3.bind(var4)();
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var10;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 28; continue _fun0002 }
 13:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var2, var3);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 6;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = var9.descriptiveLabel;
            var8 = null;
            if(!(var8 == var10)) { _fun0001_ip = 117; continue _fun0001 }
 112:
            var10 = var9.label;
 117:
            var1['accessibilityLabel'] = var10;
            var10 = {};
            var10['selected'] = var5;
            var1['accessibilityState'] = var10;
            var10 = 'radio';
            var1['accessibilityRole'] = var10;
            var10 = var9.label;
            var9 = var10.toUpperCase;
            var9 = var9.bind(var10)();
            var1['text'] = var9;
            var1['onPress'] = var7;
            var9 = var6.button;
            var7 = new Array(2);
            var7[0] = var9;
            var8 = null;
            if(!var5) { _fun0001_ip = 189; continue _fun0001 }
 183:
            var8 = var6.buttonSelected;
 189:
            var7[1] = var8;
            var1['style'] = var7;
            if(var5) { _fun0001_ip = 207; continue _fun0001 }
 200:
            var5 = var6.label;
            _fun0001_ip = 213; continue _fun0001;
 207:
            var5 = var6.labelSelected;
 213:
            var1['textStyle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function extractKey(arg1) {
        var1 = arg1;
        var3 = var1.value;
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = '';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var10 = var4.StyleSheet;
    var4 = var4.FlatList;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.Fonts;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var11 = {'minWidth': 95, 'height': 36, 'margin': 4, 'borderRadius': 3, 'justifyContent': 'center', 'alignItems': 'center', 'paddingHorizontal': 10, 'borderWidth': null, 'shadowColor': null, 'shadowOffset': null, 'shadowOpacity': 0.12, 'shadowRadius': 6};
    var10 = var10.hairlineWidth;
    var11['borderWidth'] = var10;
    var10 = 5;
    var14 = var6[var10];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BLACK;
    var11['shadowColor'] = var14;
    var14 = {'width': 0, 'height': 2};
    var11['shadowOffset'] = var14;
    var14 = var6[var10];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_TERTIARY;
    var11['backgroundColor'] = var14;
    var7['button'] = var11;
    var11 = {};
    var14 = var6[var10];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BRAND;
    var11['backgroundColor'] = var14;
    var7['buttonSelected'] = var11;
    var11 = {};
    var14 = var13.PRIMARY_SEMIBOLD;
    var11['fontFamily'] = var14;
    var14 = 14;
    var11['fontSize'] = var14;
    var14 = var6[var10];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_MUTED;
    var11['color'] = var14;
    var7['label'] = var11;
    var11 = {};
    var14 = var6[var10];
    var14 = var12.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.BRAND_100;
    var11['color'] = var14;
    var7['labelSelected'] = var11;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var11 = 12;
    var4 = {'paddingVertical': 12, 'paddingHorizontal': 16};
    var7['row'] = var4;
    var4 = {};
    var13 = var13.PRIMARY_SEMIBOLD;
    var4['fontFamily'] = var13;
    var13 = 13;
    var4['fontSize'] = var13;
    var10 = var6[var10];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var4['color'] = var10;
    var7['label'] = var4;
    var4 = 8;
    var10 = {'marginHorizontal': 4294967280, 'paddingTop': 20, 'marginTop': 4294967276, 'paddingBottom': 8, 'marginBottom': 4294967288};
    var7['optionsWrapper'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var11;
    var7['optionsContainer'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/form/FormSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormSelect(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var16 = var1.label;
            var13 = var1.options;
            var12 = var1.value;
            var _closure2_slot0 = var12;
            var2 = var1.onChange;
            var _closure2_slot1 = var2;
            var9 = var1.onScrollBeginDrag;
            var1 = _closure1_slot9;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var14.row;
            var1['style'] = var5;
            var5 = null;
            var6 = var5 != var16;
            if(!var6) { _fun0003_ip = 156; continue _fun0003 }
 82:
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 7;
            var5 = var15[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'style': null, 'variant': 'heading-md/medium', 'accessibilityRole': 'header'};
            var15 = var14.label;
            var5['style'] = var15;
            var15 = var16.toUpperCase;
            var15 = var15.bind(var16)();
            var5['children'] = var15;
            var6 = var8.bind(var4)(var7, var5);
 156:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot5;
            var6 = {};
            var15 = var14.optionsWrapper;
            var6['style'] = var15;
            var14 = var14.optionsContainer;
            var6['contentContainerStyle'] = var14;
            var6['data'] = var13;
            var6['extraData'] = var12;
            var11 = _closure1_slot11;
            var6['keyExtractor'] = var11;
            var10 = function renderItem(arg1) {
                var1 = arg1;
                var1 = var1.item;
                var4 = _closure1_slot6;
                var3 = _closure1_slot10;
                var2 = {};
                var2['item'] = var1;
                var5 = var1.value;
                var1 = _closure2_slot0;
                var1 = var5 === var1;
                var2['selected'] = var1;
                var1 = function onPress(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.value;
                        var3 = _closure2_slot1;
                        var1 = null;
                        var5 = var1 == var3;
                        var3 = undefined;
                        var1 = undefined;
                        if(var5) { _fun0004_ip = 37; continue _fun0004 }
 28:
                        var2 = _closure2_slot1;
                        var1 = var2.bind(var3)(var4);
 37:
                        return var1;
                    }
                };
                var2['onPress'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6['renderItem'] = var10;
            var10 = false;
            var6['showsHorizontalScrollIndicator'] = var10;
            var10 = true;
            var6['horizontal'] = var10;
            var6['onScrollBeginDrag'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();