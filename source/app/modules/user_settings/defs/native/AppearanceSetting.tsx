// app/modules/user_settings/defs/native/AppearanceSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var2 = function useAppearanceSettingTrailing() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var9 = var2.bind(var5)();
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = 'AppearanceSettingTrailing';
            var8 = var3.bind(var5)(var2);
            var4 = _closure1_slot0;
            var2 = 5;
            var2 = var6[var2];
            var10 = var4.bind(var5)(var2);
            var7 = var10.useStateFromStores;
            var2 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot3;
                var1 = var1.gradientPreset;
                return var1;
            };
            var7 = var7.bind(var10)(var3, var2);
            var2 = 6;
            var2 = var6[var2];
            var3 = var4.bind(var5)(var2);
            var2 = var3.getThemeName;
            var2 = var2.bind(var3)(var9, var8);
            var3 = 7;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useActiveThemeType;
            var4 = var3.bind(var4)();
            var3 = _closure1_slot4;
            var3 = var3.CUSTOM;
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot4;
            var3 = var3.CLIENT;
            if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot4;
            var3 = var3.SYSTEM;
            if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot4;
            var3 = var3.DEFAULT;
            if(!(var3 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            return var5;
case 8:
            return var2;
case 6:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 8;
            var4 = var9[var3];
            var4 = var8.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var9[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.wFpwSk;
            var3 = var4.bind(var6)(var3);
            return var3;
case 4:
            var4 = null;
            var6 = var4 == var7;
            var3 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var7.getName;
            var6 = var4 == var6;
            var3 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var6 = var7.getName;
            var3 = var6.bind(var7)();
case 10:
            if(!(var4 != var3)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = var3;
case 13:
            return var2;
case 2:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var4 = _closure1_slot1;
            var1 = 9;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.KSBBpC;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.ActiveThemeType;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var11 = var4.UserSettingsSections;
    var4 = 10;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createRoute;
    var4 = {};
    var9 = function useTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 8;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.iHH+ky;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['useTitle'] = var9;
    var9 = null;
    var4['parent'] = var9;
    var9 = 11;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.PaintPaletteIcon;
    var4['IconComponent'] = var9;
    var4['useTrailing'] = var2;
    var9 = {};
    var11 = var11.APPEARANCE;
    var9['route'] = var11;
    var10 = function getComponent() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var9['getComponent'] = var10;
    var4['screen'] = var9;
    var4 = var5.bind(var8)(var4);
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/defs/native/AppearanceSetting.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useAppearanceSettingTrailing'] = var2;
    return var1;
})();