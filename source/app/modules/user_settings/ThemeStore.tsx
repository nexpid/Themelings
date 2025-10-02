// app/modules/user_settings/ThemeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function computeTheme() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 12;
        var2 = var4[var2];
        var5 = undefined;
        var4 = var3.bind(var5)(var2);
        var3 = _closure1_slot17;
        var2 = _closure1_slot16;
        var1 = _closure1_slot18;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var9 = function handleThemeChange() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot20;
            var4 = undefined;
            var3 = var1.bind(var4)();
            var1 = _closure1_slot18;
            var1 = var3 !== var1;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            _closure1_slot18 = var3;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var2 = _closure1_slot18;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 6:
            return var1;
        }
    };
    var _closure1_slot21 = var9;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var12 = 0;
    var2 = var6[var12];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var11 = 1;
    var2 = var6[var11];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.SystemTheme;
    var _closure1_slot12 = var8;
    var8 = var2.THEME_PREFERENCES_MOBILE;
    var2 = var2.THEME_PREFERENCES_WEB_REFRESH;
    var2 = 10;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ThemeTypes;
    var _closure1_slot13 = var2;
    var2 = {};
    var2['UNSET'] = var12;
    var10 = 'UNSET';
    var2[var12] = var10;
    var2['SET'] = var11;
    var10 = 'SET';
    var2[var11] = var10;
    var _closure1_slot14 = var2;
    var2 = var2.UNSET;
    var _closure1_slot15 = var2;
    var _closure1_slot16 = var8;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.bind(var1)();
    var _closure1_slot17 = var2;
    var2 = var8[var2];
    var _closure1_slot18 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ThemeStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var7 = this;
                var5 = null;
                var4 = var5 == var2;
                var1 = undefined;
                var3 = undefined;
                if(var4) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = var2.theme;
case 11:
                if(!(var5 != var3)) { _fun0004_ip = 10; continue _fun0004 }
case 13:
                var4 = _closure1_slot14;
                var4 = var4.SET;
                _closure1_slot15 = var4;
                var4 = var2.theme;
                _closure1_slot18 = var4;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 13;
                var4 = var8[var4];
                var6 = var6.bind(var1)(var4);
                var4 = _closure1_slot18;
                var4 = var6.bind(var1)(var4);
                var4 = var2.preferences;
                if(!(var5 != var4)) { _fun0004_ip = 10; continue _fun0004 }
case 14:
                var2 = var2.preferences;
                _closure1_slot16 = var2;
case 10:
                var6 = var7.waitFor;
                var12 = _closure1_slot10;
                var11 = _closure1_slot9;
                var10 = _closure1_slot11;
                var9 = _closure1_slot8;
                var13 = var7;
                var2 = var13[var6](var12, var11, var10, var9, var8);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = this;
            var2 = var2.theme;
            var1['theme'] = var2;
            var3 = _closure1_slot16;
            var1['preferences'] = var3;
            var2 = _closure1_slot15;
            var1['status'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'theme';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'systemTheme';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'themePreferenceForSystemTheme';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot16;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ThemeStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = new Array(2);
    var10 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = var2.theme;
            var1 = 'amoled';
            if(!(var1 === var3)) { _fun0005_ip = 15; continue _fun0005 }
case 12:
            var3 = 'midnight';
case 15:
            var1 = {};
            var5 = var1;
            var4 = var2;
            var2 = copyDataProperties(var5, var4);
            var2 = 'theme';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[0] = var10;
    var10 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var3 = var5.preferences;
            var2 = null;
            var1 = var5;
            if(!(var2 != var3)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var4 = var5.preferences;
            var2 = _closure1_slot12;
            var2 = var2.DARK;
            var4 = var4[var2];
            var2 = _closure1_slot13;
            var2 = var2.DARK;
            var1 = var5;
            if(!(var4 === var2)) { _fun0006_ip = 16; continue _fun0006 }
case 18:
            var2 = {};
            var7 = var2;
            var6 = var5;
            var4 = copyDataProperties(var7, var6);
            var4 = {};
            var6 = var5.preferences;
            var7 = var4;
            var5 = copyDataProperties(var7, var6);
            var5 = _closure1_slot12;
            var5 = var5.DARK;
            var3 = _closure1_slot13;
            var3 = var3.DARKER;
            var4[var5] = var3;
            var3 = 'preferences';
            var2[var3] = var4;
            var1 = var2;
case 16:
            return var1;
        }
    };
    var2[1] = var10;
    var8['migrations'] = var2;
    var2 = 16;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var2['CACHE_LOADED'] = var9;
    var10 = function handleConnectionOpen() {
        var2 = _closure1_slot21;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleLogOut(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var1 = var1.isSwitchingAccount;
            var1 = !var1;
            if(!var1) { _fun0007_ip = 19; continue _fun0007 }
case 20:
            var3 = _closure1_slot21;
            var2 = undefined;
            var1 = var3.bind(var2)();
case 19:
            return var1;
        }
    };
    var2['LOGOUT'] = var10;
    var2['OVERLAY_INITIALIZE'] = var9;
    var2['SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE'] = var9;
    var2['UNSYNCED_USER_SETTINGS_UPDATE'] = var9;
    var2['USER_SETTINGS_PROTO_UPDATE'] = var9;
    var2['RESET_PREVIEW_CLIENT_THEME'] = var9;
    var9 = function handleSystemThemeChange(arg1) {
        var1 = arg1;
        var2 = var1.systemTheme;
        _closure1_slot17 = var2;
        var2 = _closure1_slot21;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['SYSTEM_THEME_CHANGE'] = var9;
    var9 = function handleDarkSidebarToggle() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 15;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.isThemeLight;
        var1 = _closure1_slot20;
        var1 = var1.bind(var4)();
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['ACCESSIBILITY_DARK_SIDEBAR_TOGGLE'] = var9;
    var9 = function handleUpdateThemePreferences(arg1) {
        var2 = {};
        var4 = _closure1_slot16;
        var5 = var2;
        var3 = copyDataProperties(var5, var4);
        var3 = arg1;
        var4 = var3.preferences;
        var5 = var2;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot16 = var2;
        var2 = _closure1_slot21;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['UPDATE_THEME_PREFERENCES'] = var9;
    var9 = function handleSetThemeOverride(arg1) {
        var1 = arg1;
        var1 = var1.theme;
        var2 = _closure1_slot21;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['SET_THEME_OVERRIDE'] = var9;
    var9 = function handleClearThemeOverride() {
        var2 = _closure1_slot21;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['CLEAR_THEME_OVERRIDE'] = var9;
    var4 = function handleRefresh() {
        var2 = _closure1_slot21;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['REFRESH_THEME'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/ThemeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();