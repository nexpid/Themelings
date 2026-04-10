// app/design/components/Sheet/native/ActionSheetHeaderBar.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot3 = var7;
    var7 = var4.StyleSheet;
    var _closure1_slot4 = var7;
    var7 = var4.TouchableWithoutFeedback;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var3 = arg2;
            var4 = arg3;
            var1 = {};
            var2 = {};
            var2['marginBottom'] = var4;
            var6 = 'floating';
            if(!(var6 !== var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = 'overlay';
            var5 = undefined;
            if(!(var7 === var8)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var5 = {'left': 0, 'right': 0, 'position': 'absolute'};
case 4:
            var14 = var2;
            var13 = var5;
            var5 = copyDataProperties(var14, var13);
            var1['header'] = var2;
            var2 = {};
            var5 = 'center';
            var2['alignSelf'] = var5;
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var11 = 4;
            var12 = var7[var11];
            var10 = undefined;
            var12 = var9.bind(var10)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.SHEET_HANDLE_WIDTH;
            var2['width'] = var12;
            var12 = var7[var11];
            var12 = var9.bind(var10)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.SHEET_HANDLE_HEIGHT;
            var2['height'] = var12;
            var12 = var7[var11];
            var12 = var9.bind(var10)(var12);
            var12 = var12.radii;
            var12 = var12.sm;
            var2['borderRadius'] = var12;
            var7 = var7[var11];
            var7 = var9.bind(var10)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.SHEET_HANDLE_MARGIN_TOP;
            var2['top'] = var7;
            var7 = 'default';
            if(!(var7 !== var8)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(!(var6 !== var8)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var7 = 'overlay';
            var6 = undefined;
            if(!(var7 === var8)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var12 = var8[var11];
            var12 = var9.bind(var10)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.WHITE;
            var7['backgroundColor'] = var12;
            var8 = var8[var11];
            var8 = var9.bind(var10)(var8);
            var8 = var8.shadows;
            var13 = var8.SHADOW_LOW;
            var14 = var7;
            var8 = copyDataProperties(var14, var13);
            var6 = var7;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var7 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var9.bind(var10)(var8);
            var8 = var8.colors;
            var8 = var8.BACKGROUND_MOD_MUTED;
            var7['backgroundColor'] = var8;
            var6 = var7;
            _fun0001_ip = 9; continue _fun0001;
case 5:
            var7 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var9.bind(var10)(var8);
            var8 = var8.colors;
            var8 = var8.BACKGROUND_MOD_STRONG;
            var7['backgroundColor'] = var8;
            var6 = var7;
case 9:
            var14 = var2;
            var13 = var6;
            var6 = copyDataProperties(var14, var13);
            var1['indicator'] = var2;
            var2 = {};
            var5 = _closure1_slot4;
            var13 = var5.absoluteFillObject;
            var14 = var2;
            var5 = copyDataProperties(var14, var13);
            var5 = 'height';
            var2[4] = var3;
            var3 = -var3;
            var4 = var3 + var4;
            var3 = 'marginTop';
            var2[2] = var4;
            var1['accessibleDismiss'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sheet/native/ActionSheetHeaderBar.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActionSheetHeaderBar(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var11 = var1.accessibilityLabel;
            var5 = undefined;
            if(!(var11 === var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.WAI6xu;
            var11 = var3.bind(var4)(var2);
case 11:
            var14 = var1.style;
            var15 = var1.tabStyle;
            var10 = var1.onPress;
            var8 = var1.variant;
            if(!(var8 === var5)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var8 = 'default';
case 13:
            var12 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var1 = var12.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var7 = var1.height;
            var2 = _closure1_slot0;
            var1 = 7;
            var1 = var3[var1];
            var9 = var2.bind(var5)(var1);
            var4 = var9.useToken;
            var1 = 4;
            var1 = var3[var1];
            var1 = var12.bind(var5)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.SHEET_HANDLE_MARGIN_BOTTOM;
            var4 = var4.bind(var9)(var1);
            var1 = _closure1_slot10;
            var13 = var1.bind(var5)(var8, var7, var4);
            var1 = 8;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useIsScreenReaderEnabled;
            var2 = var1.bind(var2)();
            var4 = _closure1_slot7;
            var3 = _closure1_slot5;
            var1 = {};
            var1['onPress'] = var10;
            var1['onAccessibilityEscape'] = var10;
            var12 = true;
            var1['aria-hidden'] = var12;
            var8 = _closure1_slot6;
            var7 = {};
            var16 = var13.header;
            var9 = new Array(2);
            var9[0] = var16;
            var9[1] = var14;
            var7['style'] = var9;
            var9 = {};
            var16 = var13.indicator;
            var14 = new Array(2);
            var14[0] = var16;
            var14[1] = var15;
            var9['style'] = var14;
            var9 = var4.bind(var5)(var8, var9);
            var7['children'] = var9;
            var7 = var4.bind(var5)(var8, var7);
            var1['children'] = var7;
            var7 = var4.bind(var5)(var3, var1);
            var1 = var7;
            if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = _closure1_slot9;
            var3 = _closure1_slot8;
            var2 = {};
            var9 = _closure1_slot7;
            var8 = _closure1_slot3;
            var6 = {};
            var13 = var13.accessibleDismiss;
            var6['style'] = var13;
            var6['accessible'] = var12;
            var6['accessibilityLabel'] = var11;
            var11 = 'button';
            var6['accessibilityRole'] = var11;
            var6['onPress'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 15:
            return var1;
        }
    };
    var3['ActionSheetHeaderBar'] = var2;
    return var1;
})();