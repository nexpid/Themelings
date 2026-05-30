// app/modules/guild_themes/guildThemeSerialization.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = function cloneCustomUserThemeSettings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            if(!(var3 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var1 = {};
            var8 = var2.colors;
            var4 = new Array(0);
            var9 = var4;
            var7 = 0;
            var6 = arraySpread(var9, var8, var7);
            var1['colors'] = var4;
            var4 = var2.gradientColorStops;
            if(!(var3 == var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = new Array(0);
case 4:
            var3 = new Array(0);
            var9 = var3;
            var8 = var4;
            var7 = 0;
            var4 = arraySpread(var9, var8, var7);
            var1['gradientColorStops'] = var3;
            var3 = var2.gradientAngle;
            var1['gradientAngle'] = var3;
            var2 = var2.baseMix;
            var1['baseMix'] = var2;
            return var1;
        }
    };
    var _closure1_slot0 = var1;
    var1 = function fromServerCustomUserThemeSettings(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            if(!(var4 == var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = undefined;
            return var1;
case 2:
            var1 = {};
            var2 = var3.colors;
            var1['colors'] = var2;
            var2 = var3.gradient_color_stops;
            if(!(var4 == var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = new Array(0);
case 6:
            var1['gradientColorStops'] = var2;
            var6 = var3.gradient_angle;
            var7 = var4 != var6;
            var5 = 0;
            if(!var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = var6;
case 8:
            var1['gradientAngle'] = var5;
            var3 = var3.base_mix;
            var4 = var4 != var3;
            var2 = 0;
            if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var3;
case 10:
            var1['baseMix'] = var2;
            return var1;
        }
    };
    var _closure1_slot1 = var1;
    var4 = function fromServerGuildThemeSettings(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var5 = null;
            var2 = var5 == var3;
            var1 = null;
            if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = var3.preset_id;
            if(!(var5 == var2)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = var3.custom_user_theme_settings;
            var2 = var5 == var2;
            var1 = null;
            if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 14:
            var2 = {};
            var4 = var3.preset_id;
            var6 = var5 == var4;
            var5 = undefined;
            var4 = undefined;
            if(var6) { _fun0003_ip = 16; continue _fun0003 }
case 9:
            var4 = var3.preset_id;
case 16:
            var2['presetId'] = var4;
            var4 = _closure1_slot1;
            var3 = var3.custom_user_theme_settings;
            var3 = var4.bind(var5)(var3);
            var2['customUserThemeSettings'] = var3;
            var1 = var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_themes/guildThemeSerialization.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function cloneGuildThemeSettings(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var2 = {};
            var4 = var3.presetId;
            var2['presetId'] = var4;
            var5 = _closure1_slot0;
            var4 = var3.customUserThemeSettings;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var2['customUserThemeSettings'] = var3;
            var1 = var2;
case 17:
            return var1;
        }
    };
    var3['cloneGuildThemeSettings'] = var5;
    var5 = function toServerGuildThemeSettings(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var6 = null;
            if(!(var6 != var2)) { _fun0005_ip = 19; continue _fun0005 }
case 18:
            var1 = {};
            var4 = var2.presetId;
            var5 = var6 != var4;
            var3 = null;
            if(!var5) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var3 = var4;
case 20:
            var1['preset_id'] = var3;
            var5 = var2.customUserThemeSettings;
            var3 = var6 == var5;
            var2 = null;
            if(var3) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var3 = {};
            var11 = var5.colors;
            var7 = new Array(0);
            var12 = var7;
            var10 = 0;
            var8 = arraySpread(var12, var11, var10);
            var3['colors'] = var7;
            var7 = var5.gradientColorStops;
            if(!(var6 == var7)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var7 = new Array(0);
            _fun0005_ip = 26; continue _fun0005;
case 24:
            var11 = var5.gradientColorStops;
            var8 = new Array(0);
            var12 = var8;
            var10 = 0;
            var9 = arraySpread(var12, var11, var10);
            var7 = var8;
case 26:
            var3['gradient_color_stops'] = var7;
            var8 = var5.gradientAngle;
            var9 = var6 != var8;
            var7 = 0;
            if(!var9) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var7 = var8;
case 27:
            var3['gradient_angle'] = var7;
            var5 = var5.baseMix;
            var6 = var6 != var5;
            var4 = 0;
            if(!var6) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var4 = var5;
case 29:
            var3['base_mix'] = var4;
            var2 = var3;
case 22:
            var1['custom_user_theme_settings'] = var2;
            _fun0005_ip = 31; continue _fun0005;
case 19:
            var1 = {'preset_id': null, 'custom_user_theme_settings': null};
case 31:
            return var1;
        }
    };
    var3['toServerGuildThemeSettings'] = var5;
    var3['fromServerGuildThemeSettings'] = var4;
    var2 = function fromServerGuildTheme(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var2 = var1 == var5;
            if(var2) { _fun0006_ip = 32; continue _fun0006 }
case 18:
            var2 = {};
            var3 = var5.enabled;
            var2['enabled'] = var3;
            var4 = _closure1_slot2;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var2['themeSettings'] = var3;
            var1 = var2;
case 32:
            return var1;
        }
    };
    var3['fromServerGuildTheme'] = var2;
    return var1;
})();