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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var4 = function reset() {
        var1 = undefined;
        var _closure1_slot2 = var1;
        var _closure1_slot3 = var1;
        var _closure1_slot4 = var1;
        return var1;
    };
    var12 = function handleSyncedModeChange() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.isPerModeThemingActive;
        var1 = _closure1_slot21;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var11 = function handleSameAsDeviceThemeToggle() {
        var2 = _closure1_slot21;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var10 = function loadFromProtoSettings() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot18;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot13;
            var3 = var3.settings;
            var3 = var3.appearance;
            var4 = null;
            if(!(var4 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = _closure1_slot19;
            var2 = var2.bind(var1)(var3);
case 6:
            return var1;
        }
    };
    var1 = function handleSelectivelySyncedUserSettingsUpdate() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot18;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var3 = _closure1_slot13;
            var3 = var3.settings;
            var3 = var3.appearance;
            var4 = null;
            if(!(var4 != var3)) { _fun0003_ip = 6; continue _fun0003 }
case 8:
            var2 = _closure1_slot19;
            var2 = var2.bind(var1)(var3);
case 6:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function syncThemesEnabled() {
        var3 = _closure1_slot10;
        var2 = var3.shouldSync;
        var1 = 'appearance';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function updateThemeSettings(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var5 = var2.theme;
            var1 = null;
            if(!(var1 == var5)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 12;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var4);
            var3 = var3.Theme;
            var5 = var3.UNSET;
case 9:
            var4 = _closure1_slot14;
            var4 = var4[var5];
            _closure1_slot2 = var4;
            var4 = var2.clientThemeSettings;
            var5 = var1 == var4;
            var1 = undefined;
            var2 = undefined;
            if(var5) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var2 = var4.customUserThemeSettings;
case 11:
            _closure1_slot3 = var2;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function isValidCustom(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg2;
            var3 = null;
            var1 = arg1;
            var1 = var3 != var1;
            if(!var1) { _fun0005_ip = 13; continue _fun0005 }
case 10:
            var1 = var3 != var2;
case 13:
            if(!var1) { _fun0005_ip = 8; continue _fun0005 }
case 14:
            var2 = var2.colors;
            var3 = var2.length;
            var2 = 0;
            var1 = var3 > var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function isSyncedModeThemesEnabled() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.isMobileVisualRefreshEnabled;
        var1 = 'CustomThemeMobileStore';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function getEffective() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 11;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var2.bind(var3)(var1);
            var2 = var5.isPerModeThemingActive;
            var1 = _closure1_slot21;
            var1 = var2.bind(var5)(var1);
            var2 = {};
            if(var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
            var1 = _closure1_slot2;
            var2['baseTheme'] = var1;
            var1 = _closure1_slot3;
            var2['customTheme'] = var1;
            var1 = var2;
            _fun0006_ip = 17; continue _fun0006;
case 15:
            var5 = _closure1_slot11;
            var5 = var5.theme;
            var2['baseTheme'] = var5;
            var6 = _closure1_slot11;
            var5 = var6.getSyncedClientTheme;
            var4 = _closure1_slot11;
            var4 = var4.systemTheme;
            var4 = var5.bind(var6)(var4);
            var5 = null;
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var3 = var4.customUserThemeSettings;
case 18:
            var2['customTheme'] = var3;
            var1 = var2;
case 17:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var13 = var1.Object;
    var8 = var13.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var13)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.PROTO_THEME_MAP_MOBILE;
    var _closure1_slot14 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.UserSettingsTypes;
    var _closure1_slot15 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function CustomThemeMobileStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 22; continue _fun0007;
case 20:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 22:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var2 = null;
                if(!(var2 != var1)) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                var3 = var1.theme;
                _closure1_slot2 = var3;
                var1 = var1.customTheme;
                _closure1_slot3 = var1;
case 23:
                var7 = var4.waitFor;
                var11 = _closure1_slot10;
                var10 = _closure1_slot11;
                var9 = _closure1_slot12;
                var8 = _closure1_slot13;
                var12 = var4;
                var2 = var12[var7](var11, var10, var9, var8, var7);
                var3 = var4.syncWith;
                var5 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot17;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = _closure1_slot20;
                var4 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = undefined;
                var4 = var5.bind(var1)(var4, var2);
                var2 = {};
                if(var4) { _fun0009_ip = 25; continue _fun0009 }
case 26:
                var2['theme'] = var1;
                var2['customTheme'] = var1;
                var1 = var2;
                _fun0009_ip = 27; continue _fun0009;
case 25:
                var4 = _closure1_slot2;
                var2['theme'] = var4;
                var3 = _closure1_slot3;
                var2['customTheme'] = var3;
                var1 = var2;
case 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCustomTheme';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = _closure1_slot22;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var5 = _closure1_slot20;
                var4 = var2.baseTheme;
                var3 = var2.customTheme;
                var3 = var5.bind(var1)(var4, var3);
                if(!var3) { _fun0010_ip = 28; continue _fun0010 }
case 8:
                var1 = var2.customTheme;
case 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getBaseTheme';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure1_slot22;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var5 = _closure1_slot20;
                var4 = var2.baseTheme;
                var3 = var2.customTheme;
                var3 = var5.bind(var1)(var4, var3);
                if(!var3) { _fun0011_ip = 28; continue _fun0011 }
case 8:
                var1 = var2.baseTheme;
case 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getPreviewTheme';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot4;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getCustomThemeDisplaySettings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = _closure1_slot4;
                var2 = undefined;
                if(!(var2 === var3)) { _fun0012_ip = 29; continue _fun0012 }
case 30:
                var3 = _closure1_slot22;
                var4 = var3.bind(var2)();
                var6 = _closure1_slot20;
                var5 = var4.baseTheme;
                var3 = var4.customTheme;
                var3 = var6.bind(var2)(var5, var3);
                var2 = undefined;
                if(!var3) { _fun0012_ip = 31; continue _fun0012 }
case 32:
                var3 = {};
                var5 = var4.baseTheme;
                var3['baseTheme'] = var5;
                var4 = var4.customTheme;
                var3['customTheme'] = var4;
                var2 = var3;
case 31:
                return var2;
case 29:
                var1 = _closure1_slot4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasCustomTheme';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot22;
            var4 = undefined;
            var1 = var1.bind(var4)();
            var3 = _closure1_slot20;
            var2 = var1.baseTheme;
            var1 = var1.customTheme;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'CustomThemeMobileStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 15;
    var2 = var6[var2];
    var16 = var7.bind(var1)(var2);
    var2 = {};
    var13 = function handleUpdateCustomTheme(arg1) {
        var1 = arg1;
        var3 = var1.customTheme;
        var2 = var1.theme;
        _closure1_slot3 = var3;
        _closure1_slot2 = var2;
        var1 = undefined;
        return var1;
    };
    var2['UPDATE_CUSTOM_THEME'] = var13;
    var2['SYSTEM_THEME_CHANGE'] = var12;
    var2['UPDATE_SYNCED_CLIENT_THEME'] = var12;
    var2['UPDATE_THEME_PREFERENCES'] = var12;
    var2['SET_SAME_AS_DEVICE_THEME_ENABLED'] = var11;
    var2['CLEAR_SYNCED_CLIENT_THEMES'] = var11;
    var11 = function previewCustomTheme(arg1) {
        var1 = arg1;
        var2 = var1.previewCustomTheme;
        _closure1_slot4 = var2;
        var1 = undefined;
        return var1;
    };
    var2['PREVIEW_CUSTOM_THEME'] = var11;
    var11 = function clearPreviewTheme() {
        var1 = undefined;
        _closure1_slot4 = var1;
        return var1;
    };
    var2['CLEAR_PREVIEW_CUSTOM_THEME'] = var11;
    var2['RESET_CUSTOM_THEME'] = var4;
    var2['CACHE_LOADED'] = var10;
    var2['POST_CONNECTION_OPEN'] = var10;
    var9 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var5 = var1.settings;
            var3 = _closure1_slot18;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0013_ip = 33; continue _fun0013 }
case 34:
            var7 = var5.type;
            var3 = _closure1_slot15;
            var6 = var3.PRELOADED_USER_SETTINGS;
            var4 = null;
            var3 = null;
            if(!(var7 === var6)) { _fun0013_ip = 5; continue _fun0013 }
case 32:
            var6 = var5.proto;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0013_ip = 20; continue _fun0013 }
case 35:
            var5 = var6.appearance;
case 20:
            var3 = var5;
case 5:
            if(!(var4 != var3)) { _fun0013_ip = 33; continue _fun0013 }
case 36:
            var2 = _closure1_slot19;
            var2 = var2.bind(var1)(var3);
case 33:
            return var1;
        }
    };
    var2['USER_SETTINGS_PROTO_UPDATE'] = var9;
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var17 = var4;
    var15 = var2;
    var2 = new var17[var8](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/native/CustomThemeMobileStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();