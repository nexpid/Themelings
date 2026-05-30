// app/modules/guild_themes/GuildThemePreviewStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function clearAwaitingGuildUpdateTimeout() {
        var2 = _closure1_slot9;
        var1 = var2.stop;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var _closure1_slot12 = var1;
    var5 = function handleEnd() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot10;
            var2 = var1.guildId;
            var1 = null;
            var2 = var1 == var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot9;
            var1 = var4.isStarted;
            var1 = var1.bind(var4)();
            var2 = !var1;
case 6:
            var1 = !var2;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 8:
            var4 = _closure1_slot12;
            var2 = undefined;
            var2 = var4.bind(var2)();
            var2 = {'guildId': null, 'draft': null, 'original': null, 'draftEnabled': false, 'originalEnabled': false, 'origin': null, 'isSaving': false, 'isAwaitingGuildUpdate': false, 'saveError': null};
            _closure1_slot10 = var2;
            var1 = true;
case 4:
            return var1;
        }
    };
    var _closure1_slot13 = var5;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.GuildThemePreviewOrigin;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Timeout;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var15 = var9;
    var4 = new var15[var4](var14);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot9 = var4;
    var4 = {'guildId': null, 'draft': null, 'original': null, 'draftEnabled': false, 'originalEnabled': false, 'origin': null, 'isSaving': false, 'isAwaitingGuildUpdate': false, 'saveError': null};
    var _closure1_slot10 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function GuildThemePreviewStore() {
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
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 11; continue _fun0003;
case 9:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 11:
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
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'guildId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.guildId;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'draft';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.draft;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'original';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.original;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'draftEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.draftEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'originalEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.originalEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'origin';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.origin;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isActive';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var2 = var1.guildId;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isSaving';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.isSaving;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isAwaitingGuildUpdate';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.isAwaitingGuildUpdate;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'saveError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.saveError;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'hasChanges';
        var5['key'] = var7;
        var6 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure1_slot10;
                var2 = var1.guildId;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 7:
                var2 = _closure1_slot10;
                var4 = var2.draftEnabled;
                var2 = _closure1_slot10;
                var2 = var2.originalEnabled;
                var2 = var4 !== var2;
                if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 13:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 10;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.isEqual;
                var4 = _closure1_slot10;
                var4 = var4.draft;
                var3 = _closure1_slot10;
                var3 = var3.original;
                var3 = var5.bind(var6)(var4, var3);
                var2 = !var3;
case 11:
                var1 = var2;
case 12:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'GuildThemePreviewStore';
    var9['displayName'] = var4;
    var4 = 8;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var11 = function handleStart(arg1) {
        var1 = arg1;
        var7 = var1.guildId;
        var13 = var1.draft;
        var9 = var1.original;
        var6 = var1.draftEnabled;
        var5 = var1.originalEnabled;
        var4 = var1.origin;
        var2 = _closure1_slot12;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = {};
        var2['guildId'] = var7;
        var8 = _closure1_slot0;
        var10 = _closure1_slot2;
        var7 = 9;
        var11 = var10[var7];
        var12 = var8.bind(var1)(var11);
        var11 = var12.cloneGuildThemeSettings;
        var11 = var11.bind(var12)(var13);
        var2['draft'] = var11;
        var7 = var10[var7];
        var8 = var8.bind(var1)(var7);
        var7 = var8.cloneGuildThemeSettings;
        var7 = var7.bind(var8)(var9);
        var2['original'] = var7;
        var2['draftEnabled'] = var6;
        var2['originalEnabled'] = var5;
        var2['origin'] = var4;
        var4 = false;
        var2['isSaving'] = var4;
        var2['isAwaitingGuildUpdate'] = var4;
        var4 = null;
        var2['saveError'] = var4;
        _closure1_slot10 = var2;
        return var1;
    };
    var4['GUILD_THEME_PREVIEW_START'] = var11;
    var11 = function handleSelectPreset(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var1 = var1.presetId;
            var2 = _closure1_slot10;
            var2 = var2.guildId;
            var6 = null;
            if(!(var6 != var2)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
            var5 = {};
            var5['presetId'] = var1;
            var3 = undefined;
            var5['customUserThemeSettings'] = var3;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var7 = var2.bind(var3)(var1);
            var2 = var7.isEqual;
            var1 = _closure1_slot10;
            var1 = var1.draft;
            var1 = var2.bind(var7)(var1, var5);
            var1 = !var1;
            if(var1) { _fun0005_ip = 11; continue _fun0005 }
case 16:
            var2 = _closure1_slot10;
            var2 = var2.draftEnabled;
            var1 = !var2;
case 11:
            if(!var1) { _fun0005_ip = 17; continue _fun0005 }
case 12:
            var2 = _closure1_slot12;
            var2 = var2.bind(var3)();
            var3 = {};
            var8 = _closure1_slot10;
            var9 = var3;
            var2 = copyDataProperties(var9, var8);
            var2 = 'draft';
            var3[1] = var5;
            var2 = true;
            var5 = 'draftEnabled';
            var3[4] = var2;
            var7 = false;
            var5 = 'isAwaitingGuildUpdate';
            var3[4] = var7;
            var5 = 'saveError';
            var3[4] = var6;
            _closure1_slot10 = var3;
            var1 = true;
case 17:
            return var1;
case 14:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_THEME_PREVIEW_SELECT_PRESET'] = var11;
    var11 = function handleUpdateCustom(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var10 = var1.colors;
            var7 = var1.gradientAngle;
            var2 = var1.baseMix;
            var1 = _closure1_slot10;
            var1 = var1.guildId;
            var6 = null;
            if(!(var6 != var1)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var5 = {};
            var3 = undefined;
            var5['presetId'] = var3;
            var1 = {};
            var8 = new Array(0);
            var11 = 0;
            var13 = var8;
            var12 = var10;
            var9 = arraySpread(var13, var12, var11);
            var1['colors'] = var8;
            var8 = new Array(0);
            var1['gradientColorStops'] = var8;
            var1['gradientAngle'] = var7;
            var1['baseMix'] = var2;
            var5['customUserThemeSettings'] = var1;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var7 = var2.bind(var3)(var1);
            var2 = var7.isEqual;
            var1 = _closure1_slot10;
            var1 = var1.draft;
            var1 = var2.bind(var7)(var1, var5);
            var1 = !var1;
            if(var1) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var2 = _closure1_slot10;
            var2 = var2.draftEnabled;
            var1 = !var2;
case 20:
            if(!var1) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var2 = _closure1_slot12;
            var2 = var2.bind(var3)();
            var3 = {};
            var12 = _closure1_slot10;
            var13 = var3;
            var2 = copyDataProperties(var13, var12);
            var2 = 'draft';
            var3[1] = var5;
            var2 = true;
            var5 = 'draftEnabled';
            var3[4] = var2;
            var7 = false;
            var5 = 'isAwaitingGuildUpdate';
            var3[4] = var7;
            var5 = 'saveError';
            var3[4] = var6;
            _closure1_slot10 = var3;
            var1 = true;
case 22:
            return var1;
case 18:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_THEME_PREVIEW_UPDATE_CUSTOM'] = var11;
    var4['GUILD_THEME_PREVIEW_END'] = var5;
    var11 = function handleSaveStart() {
        var2 = _closure1_slot12;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = {};
        var6 = _closure1_slot10;
        var7 = var2;
        var4 = copyDataProperties(var7, var6);
        var5 = true;
        var4 = 'isSaving';
        var2[3] = var5;
        var5 = false;
        var4 = 'isAwaitingGuildUpdate';
        var2[3] = var5;
        var5 = null;
        var4 = 'saveError';
        var2[3] = var5;
        _closure1_slot10 = var2;
        return var1;
    };
    var4['GUILD_THEME_PREVIEW_SAVE_START'] = var11;
    var11 = function handleSaveSuccess(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.guildTheme;
            var1 = _closure1_slot10;
            var1 = var1.guildId;
            var6 = null;
            if(!(var6 != var1)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
            var1 = _closure1_slot10;
            var1 = var1.guildId;
            if(!(var3 === var1)) { _fun0007_ip = 24; continue _fun0007 }
case 10:
            var5 = var6 == var2;
            var3 = undefined;
            var1 = undefined;
            if(var5) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var1 = var2.themeSettings;
case 26:
            var5 = var6 != var1;
            var8 = null;
            if(!var5) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var8 = var1;
case 28:
            var5 = var6 == var2;
            var1 = undefined;
            if(var5) { _fun0007_ip = 30; continue _fun0007 }
case 31:
            var1 = var2.enabled;
case 30:
            var5 = var6 != var1;
            if(!var5) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var5 = var1;
case 32:
            var2 = {};
            var12 = _closure1_slot10;
            var13 = var2;
            var1 = copyDataProperties(var13, var12);
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 9;
            var10 = var9[var1];
            var11 = var7.bind(var3)(var10);
            var10 = var11.cloneGuildThemeSettings;
            var11 = var10.bind(var11)(var8);
            var10 = 'draft';
            var2[9] = var11;
            var1 = var9[var1];
            var7 = var7.bind(var3)(var1);
            var1 = var7.cloneGuildThemeSettings;
            var7 = var1.bind(var7)(var8);
            var1 = 'original';
            var2[0] = var7;
            var1 = 'draftEnabled';
            var2[0] = var5;
            var1 = 'originalEnabled';
            var2[0] = var5;
            var5 = false;
            var1 = 'isSaving';
            var2[0] = var5;
            var1 = true;
            var5 = 'isAwaitingGuildUpdate';
            var2[4] = var1;
            var5 = 'saveError';
            var2[4] = var6;
            _closure1_slot10 = var2;
            var2 = function scheduleAwaitingGuildUpdateTimeout() {
                var3 = _closure1_slot12;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var5 = _closure1_slot9;
                var4 = var5.start;
                var3 = 10000;
                var2 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = _closure1_slot10;
                        var2 = var2.isAwaitingGuildUpdate;
                        if(!var2) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'GUILD_THEME_PREVIEW_END';
                        var1['type'] = var4;
                        var1 = var2.bind(var3)(var1);
case 34:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var2.bind(var3)();
            return var1;
case 24:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_THEME_PREVIEW_SAVE_SUCCESS'] = var11;
    var11 = function handleSaveFailure(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var5 = var1.error;
            var1 = _closure1_slot10;
            var2 = var1.guildId;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0009_ip = 36; continue _fun0009 }
case 37:
            var2 = _closure1_slot10;
            var2 = var2.guildId;
            var1 = var4 === var2;
case 36:
            if(!var1) { _fun0009_ip = 12; continue _fun0009 }
case 38:
            var4 = _closure1_slot12;
            var2 = undefined;
            var2 = var4.bind(var2)();
            var2 = {};
            var7 = _closure1_slot10;
            var8 = var2;
            var4 = copyDataProperties(var8, var7);
            var6 = false;
            var4 = 'isSaving';
            var2[3] = var6;
            var4 = 'isAwaitingGuildUpdate';
            var2[3] = var6;
            var4 = 'saveError';
            var2[3] = var5;
            _closure1_slot10 = var2;
            var1 = true;
case 12:
            return var1;
        }
    };
    var4['GUILD_THEME_PREVIEW_SAVE_FAILURE'] = var11;
    var11 = function handleSettingsSaveSuccess(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = _closure1_slot10;
            var3 = var1.guildId;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0010_ip = 39; continue _fun0010 }
case 40:
            var3 = _closure1_slot10;
            var3 = var3.guildId;
            var1 = var4 === var3;
case 39:
            if(!var1) { _fun0010_ip = 41; continue _fun0010 }
case 42:
            var3 = _closure1_slot13;
            var2 = undefined;
            var1 = var3.bind(var2)();
case 41:
            return var1;
        }
    };
    var4['GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS'] = var11;
    var4['USER_SETTINGS_MODAL_OPEN'] = var5;
    var11 = function handleChannelSelect(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = _closure1_slot10;
            var3 = var1.guildId;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0011_ip = 39; continue _fun0011 }
case 40:
            var3 = _closure1_slot10;
            var3 = var3.guildId;
            var1 = var4 !== var3;
case 39:
            if(!var1) { _fun0011_ip = 43; continue _fun0011 }
case 42:
            var3 = _closure1_slot13;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var1 = true;
case 43:
            return var1;
        }
    };
    var4['CHANNEL_SELECT'] = var11;
    var11 = function handleGuildDelete(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guild;
            var1 = _closure1_slot10;
            var4 = var1.guildId;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0012_ip = 36; continue _fun0012 }
case 40:
            var4 = var3.id;
            var3 = _closure1_slot10;
            var3 = var3.guildId;
            var1 = var4 === var3;
case 36:
            if(!var1) { _fun0012_ip = 27; continue _fun0012 }
case 38:
            var3 = _closure1_slot13;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var1 = true;
case 27:
            return var1;
        }
    };
    var4['GUILD_DELETE'] = var11;
    var11 = function handleGuildMemberRemove(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var1 = var1.user;
            var2 = var1.id;
            var4 = _closure1_slot8;
            var1 = var4.getId;
            var1 = var1.bind(var4)();
            var1 = var2 === var1;
            if(!var1) { _fun0013_ip = 44; continue _fun0013 }
case 39:
            var2 = _closure1_slot10;
            var4 = var2.guildId;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0013_ip = 45; continue _fun0013 }
case 34:
            var4 = _closure1_slot10;
            var4 = var4.guildId;
            var2 = var5 === var4;
case 45:
            if(!var2) { _fun0013_ip = 46; continue _fun0013 }
case 47:
            var4 = _closure1_slot13;
            var3 = undefined;
            var3 = var4.bind(var3)();
            var2 = true;
case 46:
            var1 = var2;
case 44:
            return var1;
        }
    };
    var4['GUILD_MEMBER_REMOVE'] = var11;
    var10 = function handleGuildUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guild;
            var1 = _closure1_slot10;
            var1 = var1.isAwaitingGuildUpdate;
            var2 = !var1;
            if(var2) { _fun0014_ip = 39; continue _fun0014 }
case 48:
            var1 = _closure1_slot10;
            var5 = var1.guildId;
            var1 = null;
            var2 = var1 == var5;
case 39:
            if(var2) { _fun0014_ip = 49; continue _fun0014 }
case 42:
            var5 = var3.id;
            var1 = _closure1_slot10;
            var1 = var1.guildId;
            var2 = var5 !== var1;
case 49:
            var1 = !var2;
            if(var2) { _fun0014_ip = 50; continue _fun0014 }
case 5:
            var2 = var3.theme;
            var5 = undefined;
            var2 = var5 !== var2;
            if(!var2) { _fun0014_ip = 51; continue _fun0014 }
case 52:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 9;
            var6 = var8[var6];
            var7 = var7.bind(var5)(var6);
            var6 = var7.fromServerGuildTheme;
            var3 = var3.theme;
            var7 = var6.bind(var7)(var3);
            var9 = null;
            var6 = var9 == var7;
            var3 = undefined;
            if(var6) { _fun0014_ip = 53; continue _fun0014 }
case 54:
            var3 = var7.enabled;
case 53:
            var6 = var9 != var3;
            if(!var6) { _fun0014_ip = 55; continue _fun0014 }
case 56:
            var6 = var3;
case 55:
            var8 = var9 == var7;
            var3 = undefined;
            if(var8) { _fun0014_ip = 57; continue _fun0014 }
case 58:
            var3 = var7.themeSettings;
case 57:
            var7 = var9 != var3;
            var9 = null;
            if(!var7) { _fun0014_ip = 59; continue _fun0014 }
case 14:
            var9 = var3;
case 59:
            var3 = _closure1_slot10;
            var3 = var3.originalEnabled;
            var3 = var6 === var3;
            if(!var3) { _fun0014_ip = 60; continue _fun0014 }
case 61:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 10;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.isEqual;
            var6 = _closure1_slot10;
            var6 = var6.original;
            var3 = var7.bind(var8)(var9, var6);
case 60:
            var6 = !var3;
            var3 = !var6;
            if(var6) { _fun0014_ip = 62; continue _fun0014 }
case 63:
            var4 = _closure1_slot13;
            var4 = var4.bind(var5)();
            var3 = true;
case 62:
            var2 = var3;
case 51:
            var1 = var2;
case 50:
            return var1;
        }
    };
    var4['GUILD_UPDATE'] = var10;
    var4['LOGOUT'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_themes/GuildThemePreviewStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['GuildThemePreviewOrigin'] = var2;
    return var1;
})();