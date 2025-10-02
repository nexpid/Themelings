// app/modules/client_themes/ClientThemesBackgroundStore.tsx
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
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var9 = function reset() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot19;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = undefined;
            var _closure1_slot17 = var1;
case 6:
            var1 = false;
            _closure1_slot20 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var4 = {};
    var2 = true;
    var4['value'] = var2;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildTextChannelType;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BACKGROUND_GRADIENT_PRESETS_MAP;
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SystemThemeState;
    var _closure1_slot16 = var4;
    var _closure1_slot19 = var2;
    var2 = false;
    var _closure1_slot20 = var2;
    var2 = function handleUserStoreChange() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.canUseClientThemes;
            var6 = _closure1_slot14;
            var2 = var6.getCurrentUser;
            var2 = var2.bind(var6)();
            var2 = var4.bind(var5)(var2);
            var2 = !var2;
            var4 = _closure1_slot19;
            if(!(var2 !== var4)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            _closure1_slot19 = var2;
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot21 = var2;
    var2 = function handleSelectivelySyncedStoreChange() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = var4.shouldSync;
            var1 = 'appearance';
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var1 = false;
            return var1;
case 10:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 18;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = var3.ClientThemeSettings;
            var3 = var4.getSetting;
            var3 = var3.bind(var4)();
            var5 = var3.backgroundGradientPresetId;
            var4 = null;
            if(!(var4 != var5)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var3 = _closure1_slot15;
            var3 = var3[var5];
            var5 = _closure1_slot17;
            if(!(var3 !== var5)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            _closure1_slot17 = var3;
            _fun0004_ip = 16; continue _fun0004;
case 14:
            var3 = false;
            return var3;
case 12:
            var3 = _closure1_slot17;
            if(!(var4 != var3)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            _closure1_slot17 = var1;
case 16:
            return var1;
case 17:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot22 = var2;
    var4 = function handleUserSettingsProtoStoreUpdate() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot8;
            var2 = var4.shouldSync;
            var1 = 'appearance';
            var1 = var2.bind(var4)(var1);
            if(var1) { _fun0005_ip = 10; continue _fun0005 }
case 11:
            var1 = false;
            return var1;
case 10:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.shouldIgnoreThemeChange;
            var2 = var2.bind(var4)();
            if(var2) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 18;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var4 = var2.ClientThemeSettings;
            var2 = var4.getSetting;
            var2 = var2.bind(var4)();
            var5 = var2.backgroundGradientPresetId;
            var2 = _closure1_slot10;
            var4 = var2.useSystemTheme;
            var2 = _closure1_slot16;
            var2 = var2.ON;
            var2 = var4 === var2;
            if(!var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var4 = null;
            var2 = var4 != var5;
case 21:
            if(!var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 20;
            var2 = var6[var2];
            var6 = var4.bind(var1)(var2);
            var4 = var6.setUseSystemTheme;
            var2 = _closure1_slot16;
            var2 = var2.OFF;
            var2 = var4.bind(var6)(var2);
case 23:
            var4 = null;
            if(!(var4 == var5)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var2 = _closure1_slot17;
            if(!(var4 != var2)) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            _closure1_slot17 = var1;
            _fun0005_ip = 27; continue _fun0005;
case 25:
            var2 = _closure1_slot15;
            var2 = var2[var5];
            var5 = _closure1_slot17;
            var7 = var4 == var5;
            var6 = undefined;
            if(var7) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var6 = var5.id;
case 29:
            var7 = var4 == var2;
            var5 = undefined;
            if(var7) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var5 = var2.id;
case 31:
            var5 = var6 === var5;
            var4 = var4 == var2;
            if(var4) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var4 = var5;
case 33:
            if(var4) { _fun0005_ip = 27; continue _fun0005 }
case 35:
            _closure1_slot17 = var2;
case 27:
            return var1;
case 19:
            var1 = false;
            return var1;
        }
    };
    var2 = 22;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ClientThemesBackgroundStore(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot23;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0006_ip = 38; continue _fun0006;
case 36:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 38:
                var1 = var2.bind(var3)(var4, var1);
                var2 = new Array(1);
                var3 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = arg1;
                        var1 = {};
                        var4 = null;
                        var6 = var4 == var3;
                        var2 = undefined;
                        if(var6) { _fun0007_ip = 39; continue _fun0007 }
case 6:
                        var3 = var3.gradientPreset;
                        var4 = var4 == var3;
                        var2 = undefined;
                        if(var4) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                        var2 = var3.id;
case 39:
                        var1['gradientPresetId'] = var2;
                        return var1;
                    }
                };
                var2[0] = var3;
                var1['migrations'] = var2;
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var5 = null;
                if(!(var5 != var1)) { _fun0008_ip = 9; continue _fun0008 }
case 41:
                var6 = var5 == var1;
                var3 = undefined;
                if(var6) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                var3 = var1.gradientPresetId;
case 42:
                var3 = var5 != var3;
                var2 = undefined;
                if(!var3) { _fun0008_ip = 44; continue _fun0008 }
case 39:
                var3 = _closure1_slot15;
                var1 = var1.gradientPresetId;
                var2 = var3[var1];
case 44:
                _closure1_slot17 = var2;
case 9:
                var8 = var4.waitFor;
                var2 = _closure1_slot14;
                var12 = _closure1_slot9;
                var11 = _closure1_slot13;
                var5 = _closure1_slot8;
                var9 = _closure1_slot11;
                var14 = var4;
                var13 = var2;
                var10 = var5;
                var3 = var14[var8](var13, var12, var11, var10, var9, var8);
                var6 = var4.syncWith;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = _closure1_slot21;
                var2 = var6.bind(var4)(var3, var2);
                var3 = var4.syncWith;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot22;
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
                var1 = _closure1_slot19;
                if(var1) { _fun0009_ip = 45; continue _fun0009 }
case 7:
                var1 = {};
                var3 = _closure1_slot17;
                var2 = null;
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0009_ip = 46; continue _fun0009 }
case 42:
                var2 = var3.id;
case 46:
                var1['gradientPresetId'] = var2;
                _fun0009_ip = 47; continue _fun0009;
case 45:
                var1 = {};
case 47:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'gradientPreset';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getLinearGradient';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = this;
                var3 = var2.gradientPreset;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0010_ip = 9; continue _fun0010 }
case 48:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 21;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.getLinearGradientForBackgroundGradient;
                var2 = var2.gradientPreset;
                var1 = var3.bind(var4)(var2);
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isPreview';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isCoachmark';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'mobilePendingThemeIndex';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['get'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ClientThemesBackgroundStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 23;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function UPDATE_BACKGROUND_GRADIENT_PRESET(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.presetId;
            var1 = null;
            var2 = var1 != var4;
            var1 = undefined;
            var3 = undefined;
            if(!var2) { _fun0011_ip = 49; continue _fun0011 }
case 50:
            var2 = _closure1_slot15;
            var3 = var2[var4];
case 49:
            _closure1_slot17 = var3;
            return var1;
        }
    };
    var2['UPDATE_BACKGROUND_GRADIENT_PRESET'] = var11;
    var11 = function UPDATE_MOBILE_PENDING_THEME_INDEX(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var2 = var1.mobileThemesIndex;
            var1 = null;
            var4 = var1 != var2;
            var1 = undefined;
            var3 = undefined;
            if(!var4) { _fun0012_ip = 11; continue _fun0012 }
case 50:
            var3 = var2;
case 11:
            var _closure1_slot18 = var3;
            return var1;
        }
    };
    var2['UPDATE_MOBILE_PENDING_THEME_INDEX'] = var11;
    var11 = function RESET_PREVIEW_CLIENT_THEME() {
        var1 = undefined;
        _closure1_slot17 = var1;
        return var1;
    };
    var2['RESET_PREVIEW_CLIENT_THEME'] = var11;
    var2['CLIENT_THEMES_EDITOR_CLOSE'] = var9;
    var10 = function CHANNEL_SELECT(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channelId;
            var3 = var1.guildId;
            var4 = _closure1_slot14;
            var1 = var4.getCurrentUser;
            var7 = var1.bind(var4)();
            var1 = null;
            if(!(var1 != var6)) { _fun0013_ip = 51; continue _fun0013 }
case 52:
            if(!(var1 != var3)) { _fun0013_ip = 51; continue _fun0013 }
case 53:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 14;
            var3 = var10[var3];
            var5 = undefined;
            var8 = var9.bind(var5)(var3);
            var4 = var8.UNSAFE_isDismissibleContentDismissed;
            var3 = 15;
            var3 = var10[var3];
            var3 = var9.bind(var5)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.CLIENT_THEMES_COACHMARK;
            var3 = var4.bind(var8)(var3);
            if(var3) { _fun0013_ip = 51; continue _fun0013 }
case 12:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 16;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.ageEligibleForPremiumUpsell;
            var3 = var3.bind(var4)(var7);
            if(!var3) { _fun0013_ip = 51; continue _fun0013 }
case 54:
            var4 = _closure1_slot13;
            var3 = var4.getChannel;
            var3 = var3.bind(var4)(var6);
            var1 = var1 != var3;
            if(!var1) { _fun0013_ip = 55; continue _fun0013 }
case 56:
            var4 = _closure1_slot12;
            var3 = var3.type;
            var1 = var4.bind(var5)(var3);
case 55:
            if(!var1) { _fun0013_ip = 51; continue _fun0013 }
case 57:
            var1 = true;
            _closure1_slot20 = var1;
case 51:
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var10;
    var2['LOGOUT'] = var9;
    var2['CACHE_LOADED'] = var4;
    var2['CONNECTION_OPEN'] = var4;
    var2['OVERLAY_INITIALIZE'] = var4;
    var2['SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE'] = var4;
    var2['UNSYNCED_USER_SETTINGS_UPDATE'] = var4;
    var2['USER_SETTINGS_PROTO_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/ClientThemesBackgroundStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();