// app/design/components/Backdrop/native/Backdrop.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function getBlurAmount(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = 'none';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'subtle';
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'strong';
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = undefined;
            return var1;
case 6:
            var1 = 0.25;
            return var1;
case 4:
            var1 = 0.05;
            return var1;
case 2:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var9 = var4.StyleSheet;
    var4 = var4.Pressable;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = {};
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = var9.absoluteFillObject;
    var4['fill'] = var9;
    var9 = {};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BACKDROP;
    var9['backgroundColor'] = var12;
    var4['backdrop'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BACKDROP_NO_OPACITY;
    var9['backgroundColor'] = var10;
    var4['backdropOpaque'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'height': 16};
    var4['accessibilityDismiss'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Backdrop/native/Backdrop.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Backdrop(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var7 = var2.style;
            var20 = var2.accessibleDismissStyle;
            var5 = var2.animatedProps;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = _closure1_slot7;
case 8:
            var9 = var2.opaque;
            if(!(var9 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 4:
            var9 = false;
case 10:
            var17 = var2.blur;
            if(!(var17 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 2:
            var17 = 'none';
case 11:
            var18 = var2.onDismiss;
            var12 = var2.accessibilityLabel;
            if(!(var12 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 5;
            var6 = var11[var3];
            var6 = var10.bind(var4)(var6);
            var8 = var6.intl;
            var6 = var8.string;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.WAI6xs;
            var12 = var6.bind(var8)(var3);
case 12:
            var11 = var2.aria-hidden;
            var _closure2_slot0 = var4;
            var2 = _closure1_slot8;
            var13 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useThemeContext;
            var2 = var2.bind(var3)();
            var15 = var2.theme;
            var2 = _closure1_slot1;
            var3 = 7;
            var3 = var6[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var22 = var3.top;
            var3 = var13.backdrop;
            var14 = var3.backgroundColor;
            _closure2_slot0 = var14;
            var10 = _closure1_slot3;
            var8 = var10.useMemo;
            var3 = new Array(1);
            var3[0] = var14;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hexToRgbaString;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var8.bind(var10)(var1, var3);
            var10 = {};
            var10['onPress'] = var18;
            var1 = true;
            var10['aria-hidden'] = var1;
            var3 = _closure1_slot6;
            var1 = 9;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = var13.fill;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var6 = 'box-none';
            var1['pointerEvents'] = var6;
            var1['animatedProps'] = var5;
            var5 = null;
            var6 = var5 != var18;
            if(!var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var8 = _closure1_slot5;
            var7 = _closure1_slot4;
            var5 = {};
            var21 = var13.accessibilityDismiss;
            var19 = new Array(3);
            var19[0] = var21;
            var21 = {};
            var21['top'] = var22;
            var19[1] = var21;
            var19[2] = var20;
            var5['style'] = var19;
            var5['onPress'] = var18;
            var18 = 'button';
            var5['accessibilityRole'] = var18;
            var5['accessibilityLabel'] = var12;
            var5['aria-hidden'] = var11;
            var6 = var8.bind(var4)(var7, var5);
case 14:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var7 = _closure1_slot4;
            var6 = 'none';
            if(!(var6 === var17)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var6 = {};
            var24 = var6;
            var23 = var10;
            var11 = copyDataProperties(var24, var23);
            var12 = var13.fill;
            var11 = new Array(2);
            var11[0] = var12;
            if(var9) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var9 = var13.backdrop;
            _fun0002_ip = 20; continue _fun0002;
case 18:
            var9 = var13.backdropOpaque;
case 20:
            var11[1] = var9;
            var9 = 'style';
            var6[var9] = var11;
            _fun0002_ip = 21; continue _fun0002;
case 16:
            var9 = {};
            var24 = var9;
            var23 = var10;
            var10 = copyDataProperties(var24, var23);
            var11 = var13.fill;
            var10 = 'style';
            var9[var10] = var11;
            var12 = _closure1_slot5;
            var11 = _closure1_slot1;
            var18 = _closure1_slot2;
            var10 = 10;
            var10 = var18[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var16 = _closure1_slot9;
            var16 = var16.bind(var4)(var17);
            var10['blurAmount'] = var16;
            var16 = var13.fill;
            var10['style'] = var16;
            var10['blurTheme'] = var15;
            var10['blurTintRgba'] = var14;
            var13 = var13.backdrop;
            var13 = var13.backgroundColor;
            var10['android_fallbackColor'] = var13;
            var11 = var12.bind(var4)(var11, var10);
            var10 = 'children';
            var9[var10] = var11;
            var6 = var9;
case 21:
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['Backdrop'] = var2;
    return var1;
})();