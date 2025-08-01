// app/modules/client_themes/native/CustomThemeMobileStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.PROTO_THEME_MAP_MOBILE;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.UserSettingsTypes;
    var _closure1_slot12 = var2;
    var2 = function handleSelectivelySyncedUserSettingsUpdate() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot14;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0002_ip = 47; continue _fun0002 }
 16:
            var3 = _closure1_slot10;
            var3 = var3.settings;
            var3 = var3.appearance;
            var4 = null;
            if(!(var4 != var3)) { _fun0002_ip = 47; continue _fun0002 }
 38:
            var2 = _closure1_slot16;
            var2 = var2.bind(var1)(var3);
 47:
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var2 = function syncThemesEnabled() {
        var3 = _closure1_slot9;
        var2 = var3.shouldSync;
        var1 = 'appearance';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot14 = var2;
    var2 = function getAppearanceSettings(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var5 = var3.type;
            var1 = _closure1_slot12;
            var4 = var1.PRELOADED_USER_SETTINGS;
            var2 = null;
            var1 = null;
            if(!(var5 === var4)) { _fun0003_ip = 53; continue _fun0003 }
 29:
            var3 = var3.proto;
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0003_ip = 50; continue _fun0003 }
 44:
            var2 = var3.appearance;
 50:
            var1 = var2;
 53:
            return var1;
        }
    };
    var _closure1_slot15 = var2;
    var2 = function updateThemeSettings(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var5 = var2.theme;
            var1 = null;
            if(!(var1 == var5)) { _fun0004_ip = 51; continue _fun0004 }
 14:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 9;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var4);
            var3 = var3.Theme;
            var5 = var3.UNSET;
 51:
            var4 = _closure1_slot11;
            var4 = var4[var5];
            var _closure1_slot2 = var4;
            var4 = var2.clientThemeSettings;
            var5 = var1 == var4;
            var1 = undefined;
            var2 = undefined;
            if(var5) { _fun0004_ip = 89; continue _fun0004 }
 83:
            var2 = var4.customUserThemeSettings;
 89:
            var _closure1_slot3 = var2;
            return var1;
        }
    };
    var _closure1_slot16 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function CustomThemeMobileStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 105; continue _fun0005;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var2 = null;
                if(!(var2 != var1)) { _fun0006_ip = 34; continue _fun0006 }
 12:
                var3 = var1.theme;
                _closure1_slot2 = var3;
                var1 = var1.customTheme;
                _closure1_slot3 = var1;
 34:
                var3 = var4.waitFor;
                var2 = _closure1_slot10;
                var5 = _closure1_slot9;
                var2 = var3.bind(var4)(var2, var5);
                var3 = var4.syncWith;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot13;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
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
            var3 = _closure1_slot2;
            var1['theme'] = var3;
            var2 = _closure1_slot3;
            var1['customTheme'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getTheme';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getCustomTheme';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot3;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasCustomTheme';
        var5['key'] = var7;
        var6 = function value() {
            var2 = _closure1_slot3;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'CustomThemeMobileStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function CACHE_LOADED() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = _closure1_slot14;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0007_ip = 47; continue _fun0007 }
 16:
            var3 = _closure1_slot10;
            var3 = var3.settings;
            var3 = var3.appearance;
            var4 = null;
            if(!(var4 != var3)) { _fun0007_ip = 47; continue _fun0007 }
 38:
            var2 = _closure1_slot16;
            var2 = var2.bind(var1)(var3);
 47:
            return var1;
        }
    };
    var2['CACHE_LOADED'] = var9;
    var9 = function USER_SETTINGS_PROTO_UPDATE(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.settings;
            var3 = _closure1_slot14;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0008_ip = 49; continue _fun0008 }
 25:
            var3 = _closure1_slot15;
            var3 = var3.bind(var1)(var4);
            var4 = null;
            if(!(var4 != var3)) { _fun0008_ip = 49; continue _fun0008 }
 40:
            var2 = _closure1_slot16;
            var2 = var2.bind(var1)(var3);
 49:
            return var1;
        }
    };
    var2['USER_SETTINGS_PROTO_UPDATE'] = var9;
    var4 = function LOGOUT() {
        var1 = undefined;
        _closure1_slot2 = var1;
        _closure1_slot3 = var1;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/native/CustomThemeMobileStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();