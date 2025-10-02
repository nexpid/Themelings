// app/uikit-native/refresh/form/FormConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var10 = require;
        var15 = metroImportDefault;
        var3 = exports;
        var11 = dependencyMap;
        var _closure1_slot0 = var10;
        var _closure1_slot1 = var11;
        var4 = global;
        var7 = var4.Object;
        var6 = var7.defineProperty;
        var5 = {};
        var13 = true;
        var5['value'] = var13;
        var1 = '__esModule';
        var1 = var6.bind(var7)(var3, var1, var5);
        var1 = 0;
        var5 = var11[var1];
        var1 = undefined;
        var5 = var10.bind(var1)(var5);
        var5 = var5.Platform;
        var6 = 1;
        var6 = var11[var6];
        var6 = var15.bind(var1)(var6);
        var _closure1_slot2 = var6;
        var6 = 2;
        var6 = var11[var6];
        var7 = var10.bind(var1)(var6);
        var6 = var7.isAndroid;
        var6 = var6.bind(var7)();
        var8 = 24;
        if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var8 = 32;
case 2:
        var6 = 3;
        var7 = var11[var6];
        var7 = var15.bind(var1)(var7);
        var14 = var7.internal;
        var12 = var14.resolveSemanticColor;
        var7 = var11[var6];
        var7 = var15.bind(var1)(var7);
        var7 = var7.themes;
        var9 = var7.DARK;
        var7 = var11[var6];
        var7 = var15.bind(var1)(var7);
        var7 = var7.colors;
        var7 = var7.ANDROID_RIPPLE;
        var7 = var12.bind(var14)(var9, var7);
        var _closure1_slot3 = var7;
        var9 = var11[var6];
        var9 = var15.bind(var1)(var9);
        var14 = var9.internal;
        var12 = var14.resolveSemanticColor;
        var9 = var11[var6];
        var9 = var15.bind(var1)(var9);
        var9 = var9.themes;
        var9 = var9.LIGHT;
        var6 = var11[var6];
        var6 = var15.bind(var1)(var6);
        var6 = var6.colors;
        var6 = var6.ANDROID_RIPPLE;
        var6 = var12.bind(var14)(var9, var6);
        var _closure1_slot4 = var6;
        var12 = var4.parseInt;
        var9 = var5.Version;
        var5 = 10;
        var5 = var12.bind(var1)(var9, var5);
        var _closure1_slot5 = var5;
        var12 = var4.Object;
        var9 = var12.freeze;
        var5 = {};
        var5['foreground'] = var13;
        var5 = var9.bind(var12)(var5);
        var13 = var4.Object;
        var12 = var13.freeze;
        var9 = {};
        var9 = var12.bind(var13)(var9);
        var _closure1_slot6 = var9;
        var4 = var4.Map;
        var9 = var4.prototype;
        var9 = Object.create(var9, {constructor: {value: var4}});
        var19 = var9;
        var4 = new var19[var4](var18);
        var4 = var4 instanceof Object ? var4 : var9;
        var _closure1_slot7 = var4;
        var4 = {};
        var9 = 'default';
        var4['DEFAULT'] = var9;
        var9 = 'no_border';
        var4['ANDROID_NO_BORDER'] = var9;
        var9 = 'no_border_or_margin';
        var4['NO_BORDER_OR_MARGIN'] = var9;
        var9 = 5;
        var9 = var11[var9];
        var11 = var10.bind(var1)(var9);
        var10 = var11.fileFinishedImporting;
        var9 = 'uikit-native/refresh/form/FormConstants.tsx';
        var9 = var10.bind(var11)(var9);
        var3['FORM_ROW_VERTICAL_PADDING'] = var8;
        var3['RIPPLE_DARK_COLOR'] = var7;
        var3['RIPPLE_LIGHT_COLOR'] = var6;
        var3['ANDROID_FOREGROUND_RIPPLE'] = var5;
        var3['TitleStyleType'] = var4;
        var2 = function getThemedRippleConfig(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var1 = var2.foreground;
                var10 = var2.radius;
                var8 = var2.cornerRadius;
                var9 = var2.borderless;
                var4 = var2.color;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var6 = undefined;
                var5 = var5.bind(var6)(var2);
                var2 = var5.isAndroid;
                var2 = var2.bind(var5)();
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure1_slot6;
                return var2;
case 4:
                var5 = _closure1_slot5;
                var2 = 23;
                var7 = var5 >= var2;
                if(!var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var1;
case 6:
                var2 = null;
                if(!(var2 == var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var5 = _closure1_slot0;
                var11 = _closure1_slot1;
                var1 = 4;
                var1 = var11[var1];
                var6 = var5.bind(var6)(var1);
                var5 = var6.isThemeLight;
                var1 = _closure1_slot2;
                var1 = var1.theme;
                var1 = var5.bind(var6)(var1);
                if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var1 = _closure1_slot3;
                _fun0002_ip = 12; continue _fun0002;
case 10:
                var1 = _closure1_slot4;
case 12:
                var4 = var1;
case 8:
                var1 = var4.toString;
                var1 = var1.bind(var4)();
                var1 = '' + var1;
                var1 = var1 + var8;
                var1 = var1 + var10;
                var5 = var1 + var7;
                var6 = _closure1_slot7;
                var1 = var6.get;
                var1 = var1.bind(var6)(var5);
                var11 = var4;
                if(!(var2 == var1)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var2 = global;
                var6 = var2.Object;
                var4 = var6.freeze;
                var2 = {};
                var2['color'] = var11;
                var2['radius'] = var10;
                var2['borderless'] = var9;
                var2['cornerRadius'] = var8;
                var2['foreground'] = var7;
                var2 = var4.bind(var6)(var2);
                var4 = _closure1_slot7;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                return var2;
case 13:
                return var1;
            }
        };
        var3['getThemedRippleConfig'] = var2;
        return var1;
    }
})();