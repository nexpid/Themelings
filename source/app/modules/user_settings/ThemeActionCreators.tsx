// app/modules/user_settings/ThemeActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var4 = function setSystemTheme(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SYSTEM_THEME_CHANGE';
        var2['type'] = var5;
        var5 = arg1;
        var2['systemTheme'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SystemThemeState;
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/ThemeActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['setSystemTheme'] = var4;
    var4 = function setSystemThemeIfNeeded() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot2;
            var3 = var2.useSystemTheme;
            var2 = _closure1_slot3;
            var2 = var2.OFF;
            if(!(var3 !== var2)) { _fun0001_ip = 62; continue _fun0001 }
 27:
            var3 = _closure1_slot4;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var1 = var1.bind(var2)();
            var1 = var3.bind(var2)(var1);
 62:
            var1 = undefined;
            return var1;
        }
    };
    var3['setSystemThemeIfNeeded'] = var4;
    var4 = function setUseSystemTheme(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'UNSYNCED_USER_SETTINGS_UPDATE';
        var2['type'] = var5;
        var5 = {};
        var6 = arg1;
        var5['useSystemTheme'] = var6;
        var2['settings'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setUseSystemTheme'] = var4;
    var4 = function updateThemePreferences(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'UPDATE_THEME_PREFERENCES';
        var2['type'] = var5;
        var5 = arg1;
        var2['preferences'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateThemePreferences'] = var4;
    var4 = function setThemeOverride(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SET_THEME_OVERRIDE';
        var2['type'] = var5;
        var5 = arg1;
        var2['theme'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setThemeOverride'] = var4;
    var4 = function clearThemeOverride() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CLEAR_THEME_OVERRIDE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearThemeOverride'] = var4;
    var2 = function refreshTheme() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'REFRESH_THEME';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['refreshTheme'] = var2;
    return var1;
})();