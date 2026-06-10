// app/modules/guild_themes/GuildThemeNuxUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _saveGuildThemeNuxPreference() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 2;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.GuildThemeSourcePreference;
                    var5 = arg2;
                    if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var7 = var2.GUILD;
                    _fun0001_ip = 6; continue _fun0001;
case 4:
                    var7 = var2.PERSONAL;
case 6:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 3;
                    var2 = var2[var6];
                    var5 = var5.bind(var4)(var2);
                    var2 = var5.setDefaultGuildThemePreference;
                    var2 = var2.bind(var5)(var7);
                    SaveGenerator(address=96);
case 7:
                    return var2;
case 8:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var6];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.clearGuildThemeSourcePreferenceOverride;
                    var3 = arg1;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=137);
case 11:
                    return var3;
case 12:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    return var4;
case 13:
                    return var3;
case 9:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_themes/GuildThemeNuxUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getInitialGuildThemeNuxSelection() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot3;
            var1 = var3.getDefaultGuildThemePreference;
            var3 = var1.bind(var3)();
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 2;
            var1 = var1[var5];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var1 = var1.GuildThemeSourcePreference;
            var1 = var1.PERSONAL;
            if(!(var3 !== var1)) { _fun0002_ip = 15; continue _fun0002 }
case 4:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.GuildThemeSourcePreference;
            var1 = var1.GUILD;
            _fun0002_ip = 16; continue _fun0002;
case 15:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var2 = var2.GuildThemeSourcePreference;
            var1 = var2.PERSONAL;
case 16:
            return var1;
        }
    };
    var3['getInitialGuildThemeNuxSelection'] = var4;
    var2 = function saveGuildThemeNuxPreference() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['saveGuildThemeNuxPreference'] = var2;
    return var1;
})();