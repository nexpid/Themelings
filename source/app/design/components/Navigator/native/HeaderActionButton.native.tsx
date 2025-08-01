// app/design/components/Navigator/native/HeaderActionButton.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'flexDirection': 'row'};
    var4['button'] = var10;
    var10 = {};
    var11 = 4;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_BRAND;
    var10['color'] = var13;
    var13 = 'capitalize';
    var10['textTransform'] = var13;
    var4['text'] = var10;
    var10 = {'fontSize': 16, 'maxWidth': 80};
    var4['buttonFont'] = var10;
    var10 = {};
    var13 = 0.6;
    var10['opacity'] = var13;
    var4['buttonDisabled'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.HEADER_PRIMARY;
    var10['color'] = var11;
    var4['icon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.style;
            var20 = var1.textStyle;
            var23 = var1.imageStyle;
            var16 = var1.text;
            var24 = var1.source;
            var17 = var1.accessibilityLabel;
            var15 = var1.accessibilityHint;
            var14 = var1.accessibilityActions;
            var13 = var1.onAccessibilityAction;
            var6 = var1.icon;
            var3 = var1.IconComponent;
            var19 = var1.IconComponentSize;
            var8 = var1.onPress;
            var5 = var1.disabled;
            var12 = var1.foregroundRipple;
            var22 = var1.iconSize;
            var1 = _closure1_slot6;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var18 = null;
            if(!(var18 == var16)) { _fun0001_ip = 193; continue _fun0001 }
 113:
            if(!(var18 == var3)) { _fun0001_ip = 175; continue _fun0001 }
 117:
            var1 = var18 != var24;
            var7 = undefined;
            if(!var1) { _fun0001_ip = 279; continue _fun0001 }
 129:
            var21 = _closure1_slot4;
            var2 = _closure1_slot1;
            var25 = _closure1_slot2;
            var1 = 6;
            var1 = var25[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['source'] = var24;
            var1['style'] = var23;
            var1['size'] = var22;
            var7 = var21.bind(var4)(var2, var1);
            _fun0001_ip = 279; continue _fun0001;
 175:
            var2 = _closure1_slot4;
            var1 = {};
            var1['size'] = var19;
            var7 = var2.bind(var4)(var3, var1);
            _fun0001_ip = 279; continue _fun0001;
 193:
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 5;
            var1 = var19[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'style': null, 'variant': 'text-md/semibold', 'lineClamp': 1, 'maxFontSizeMultiplier': 1};
            var21 = var10.text;
            var19 = new Array(3);
            var19[0] = var21;
            var21 = var10.buttonFont;
            var19[1] = var21;
            var19[2] = var20;
            var1['style'] = var19;
            var1['children'] = var16;
            var7 = var3.bind(var4)(var2, var1);
 279:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 7;
            var1 = var19[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var19 = arg2;
            var1['ref'] = var19;
            if(!(var18 != var17)) { _fun0001_ip = 325; continue _fun0001 }
 322:
            var16 = var17;
 325:
            var1['accessibilityLabel'] = var16;
            var1['accessibilityHint'] = var15;
            var1['accessibilityActions'] = var14;
            var1['onAccessibilityAction'] = var13;
            var13 = 'button';
            var1['accessibilityRole'] = var13;
            var1['onPress'] = var8;
            var8 = 0.6;
            var1['activeOpacity'] = var8;
            var8 = undefined;
            if(!var12) { _fun0001_ip = 380; continue _fun0001 }
 376:
            var8 = _closure1_slot3;
 380:
            var1['androidRippleConfig'] = var8;
            var11 = var10.button;
            var8 = new Array(3);
            var8[0] = var11;
            var8[1] = var9;
            var9 = var5;
            if(!var9) { _fun0001_ip = 415; continue _fun0001 }
 409:
            var9 = var10.buttonDisabled;
 415:
            var8[2] = var9;
            var1['style'] = var8;
            var1['disabled'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Navigator/native/HeaderActionButton.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['HeaderActionButton'] = var2;
    return var1;
})();