// app/modules/user_settings/GuildThemeSourcePreferenceUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function resolveDefaultGuildThemePreference(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 0;
            var1 = var1[var5];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.GuildThemeSourcePreference;
            var3 = var1.PERSONAL;
            var1 = arg1;
            if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.GuildThemeSourcePreference;
            var1 = var1.GUILD;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var2 = var2.GuildThemeSourcePreference;
            var1 = var2.PERSONAL;
case 4:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 1;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/GuildThemeSourcePreferenceUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['resolveDefaultGuildThemePreference'] = var4;
    var2 = function resolveGuildThemeSourcePreference(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 0;
            var1 = var1[var7];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.GuildThemeSourcePreference;
            var3 = var1.GUILD;
            var1 = var5;
            if(!(var5 !== var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var6.bind(var4)(var3);
            var3 = var3.GuildThemeSourcePreference;
            var3 = var3.PERSONAL;
            var1 = var5;
            if(!(var1 !== var3)) { _fun0002_ip = 5; continue _fun0002 }
case 7:
            var3 = _closure1_slot2;
            var2 = arg2;
            var1 = var3.bind(var4)(var2);
case 5:
            return var1;
        }
    };
    var3['resolveGuildThemeSourcePreference'] = var2;
    return var1;
})();