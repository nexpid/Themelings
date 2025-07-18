// app/modules/client_themes/ClientThemesBackgroundStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var9 = function reset() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot19;
            if(!var1) { _fun0002_ip = 16; continue _fun0002 }
 10:
            var1 = undefined;
            var _closure1_slot17 = var1;
 16:
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
 0:
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
            if(!(var2 !== var4)) { _fun0003_ip = 66; continue _fun0003 }
 60:
            _closure1_slot19 = var2;
            return var1;
 66:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot21 = var2;
    var2 = function handleSelectivelySyncedStoreChange() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = _closure1_slot8;
            var3 = var4.shouldSync;
            var1 = 'appearance';
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0004_ip = 29; continue _fun0004 }
 25:
            var1 = false;
            return var1;
 29:
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
            if(!(var4 != var5)) { _fun0004_ip = 105; continue _fun0004 }
 79:
            var3 = _closure1_slot15;
            var3 = var3[var5];
            var5 = _closure1_slot17;
            if(!(var3 !== var5)) { _fun0004_ip = 101; continue _fun0004 }
 95:
            _closure1_slot17 = var3;
            _fun0004_ip = 117; continue _fun0004;
 101:
            var3 = false;
            return var3;
 105:
            var3 = _closure1_slot17;
            if(!(var4 != var3)) { _fun0004_ip = 119; continue _fun0004 }
 113:
            _closure1_slot17 = var1;
 117:
            return var1;
 119:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot22 = var2;
    var4 = function handleUserSettingsProtoStoreUpdate() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = _closure1_slot8;
            var2 = var4.shouldSync;
            var1 = 'appearance';
            var1 = var2.bind(var4)(var1);
            if(var1) { _fun0005_ip = 29; continue _fun0005 }
 25:
            var1 = false;
            return var1;
 29:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.shouldIgnoreThemeChange;
            var2 = var2.bind(var4)();
            if(var2) { _fun0005_ip = 269; continue _fun0005 }
 67:
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
            if(!var2) { _fun0005_ip = 142; continue _fun0005 }
 136:
            var4 = null;
            var2 = var4 != var5;
 142:
            if(!var2) { _fun0005_ip = 186; continue _fun0005 }
 145:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 20;
            var2 = var6[var2];
            var6 = var4.bind(var1)(var2);
            var4 = var6.setUseSystemTheme;
            var2 = _closure1_slot16;
            var2 = var2.OFF;
            var2 = var4.bind(var6)(var2);
 186:
            var4 = null;
            if(!(var4 == var5)) { _fun0005_ip = 206; continue _fun0005 }
 192:
            var2 = _closure1_slot17;
            if(!(var4 != var2)) { _fun0005_ip = 267; continue _fun0005 }
 200:
            _closure1_slot17 = var1;
            _fun0005_ip = 267; continue _fun0005;
 206:
            var2 = _closure1_slot15;
            var2 = var2[var5];
            var5 = _closure1_slot17;
            var7 = var4 == var5;
            var6 = undefined;
            if(var7) { _fun0005_ip = 232; continue _fun0005 }
 227:
            var6 = var5.id;
 232:
            var7 = var4 == var2;
            var5 = undefined;
            if(var7) { _fun0005_ip = 246; continue _fun0005 }
 241:
            var5 = var2.id;
 246:
            var5 = var6 === var5;
            var4 = var4 == var2;
            if(var4) { _fun0005_ip = 260; continue _fun0005 }
 257:
            var4 = var5;
 260:
            if(var4) { _fun0005_ip = 267; continue _fun0005 }
 263:
            _closure1_slot17 = var2;
 267:
            return var1;
 269:
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
 0:
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
                if(var1) { _fun0006_ip = 84; continue _fun0006 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0006_ip = 118; continue _fun0006;
 84:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 118:
                var1 = var2.bind(var3)(var4, var1);
                var2 = new Array(1);
                var3 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var3 = arg1;
                        var1 = {};
                        var4 = null;
                        var6 = var4 == var3;
                        var2 = undefined;
                        if(var6) { _fun0007_ip = 36; continue _fun0007 }
 16:
                        var3 = var3.gradientPreset;
                        var4 = var4 == var3;
                        var2 = undefined;
                        if(var4) { _fun0007_ip = 36; continue _fun0007 }
 31:
                        var2 = var3.id;
 36:
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
 0:
                var1 = arg1;
                var4 = this;
                var5 = null;
                if(!(var5 != var1)) { _fun0008_ip = 60; continue _fun0008 }
 12:
                var6 = var5 == var1;
                var3 = undefined;
                if(var6) { _fun0008_ip = 27; continue _fun0008 }
 21:
                var3 = var1.gradientPresetId;
 27:
                var3 = var5 != var3;
                var2 = undefined;
                if(!var3) { _fun0008_ip = 53; continue _fun0008 }
 36:
                var3 = _closure1_slot15;
                var1 = var1.gradientPresetId;
                var2 = var3[var1];
 53:
                _closure1_slot17 = var2;
 60:
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
 0:
                var1 = _closure1_slot19;
                if(var1) { _fun0009_ip = 39; continue _fun0009 }
 10:
                var1 = {};
                var3 = _closure1_slot17;
                var2 = null;
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0009_ip = 32; continue _fun0009 }
 27:
                var2 = var3.id;
 32:
                var1['gradientPresetId'] = var2;
                _fun0009_ip = 41; continue _fun0009;
 39:
                var1 = {};
 41:
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
 0:
                var2 = this;
                var3 = var2.gradientPreset;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0010_ip = 60; continue _fun0010 }
 18:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 21;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.getLinearGradientForBackgroundGradient;
                var2 = var2.gradientPreset;
                var1 = var3.bind(var4)(var2);
 60:
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
 0:
            var1 = arg1;
            var4 = var1.presetId;
            var1 = null;
            var2 = var1 != var4;
            var1 = undefined;
            var3 = undefined;
            if(!var2) { _fun0011_ip = 33; continue _fun0011 }
 22:
            var2 = _closure1_slot15;
            var3 = var2[var4];
 33:
            _closure1_slot17 = var3;
            return var1;
        }
    };
    var2['UPDATE_BACKGROUND_GRADIENT_PRESET'] = var11;
    var11 = function UPDATE_MOBILE_PENDING_THEME_INDEX(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var2 = var1.mobileThemesIndex;
            var1 = null;
            var4 = var1 != var2;
            var1 = undefined;
            var3 = undefined;
            if(!var4) { _fun0012_ip = 25; continue _fun0012 }
 22:
            var3 = var2;
 25:
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
 0:
            var1 = arg1;
            var6 = var1.channelId;
            var3 = var1.guildId;
            var4 = _closure1_slot14;
            var1 = var4.getCurrentUser;
            var7 = var1.bind(var4)();
            var1 = null;
            if(!(var1 != var6)) { _fun0013_ip = 183; continue _fun0013 }
 38:
            if(!(var1 != var3)) { _fun0013_ip = 183; continue _fun0013 }
 45:
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
            if(var3) { _fun0013_ip = 183; continue _fun0013 }
 105:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 16;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.ageEligibleForPremiumUpsell;
            var3 = var3.bind(var4)(var7);
            if(!var3) { _fun0013_ip = 183; continue _fun0013 }
 139:
            var4 = _closure1_slot13;
            var3 = var4.getChannel;
            var3 = var3.bind(var4)(var6);
            var1 = var1 != var3;
            if(!var1) { _fun0013_ip = 174; continue _fun0013 }
 160:
            var4 = _closure1_slot12;
            var3 = var3.type;
            var1 = var4.bind(var5)(var3);
 174:
            if(!var1) { _fun0013_ip = 183; continue _fun0013 }
 177:
            var1 = true;
            _closure1_slot20 = var1;
 183:
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var10;
    var2['LOGOUT'] = var9;
    var2['CACHE_LOADED'] = var4;
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