// app/modules/user_settings/FrecencyUserSettingsManager.tsx
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    var1 = function handleConnectionOpen() {
        var4 = true;
        _closure1_slot22 = var4;
        var3 = _closure1_slot29;
        var2 = _closure1_slot19;
        var1 = undefined;
        var2 = var3.bind(var1)(var2, var4);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function handleAppStateUpdate(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot22;
            if(!var2) { _fun0002_ip = 26; continue _fun0002 }
 10:
            var3 = arg1;
            var4 = var3.state;
            var3 = 'active';
            var2 = var3 !== var4;
 26:
            if(!var2) { _fun0002_ip = 65; continue _fun0002 }
 29:
            var2 = global;
            var4 = var2.clearTimeout;
            var2 = _closure1_slot21;
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var2 = null;
            _closure1_slot21 = var2;
            var2 = _closure1_slot27;
            var1 = false;
            var1 = var2.bind(var3)(var1);
 65:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function handleConnectionClosed() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = _closure1_slot22;
            if(!var2) { _fun0003_ip = 46; continue _fun0003 }
 10:
            var2 = global;
            var4 = var2.clearTimeout;
            var2 = _closure1_slot21;
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var2 = null;
            _closure1_slot21 = var2;
            var2 = _closure1_slot27;
            var1 = false;
            var1 = var2.bind(var3)(var1);
 46:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function saveProtos() {
        var1 = undefined;
        var4 = _closure1_slot28;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function _saveProtos() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 292; continue _fun0004 }
 10:
                    var6 = _closure1_slot29;
                    var5 = _closure1_slot20;
                    var2 = undefined;
                    var4 = false;
                    var4 = var6.bind(var2)(var5, var4);
                    var6 = _closure1_slot16;
                    var5 = var6.hasLoaded;
                    var4 = _closure1_slot17;
                    var4 = var4.FRECENCY_AND_FAVORITES_SETTINGS;
                    var4 = var5.bind(var6)(var4);
                    if(var4) { _fun0004_ip = 227; continue _fun0004 }
 62:
                    var5 = _closure1_slot13;
                    var4 = var5.hasPendingUsage;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0004_ip = 93; continue _fun0004 }
 79:
                    var6 = _closure1_slot11;
                    var5 = var6.hasPendingUsage;
                    var4 = var5.bind(var6)();
 93:
                    if(var4) { _fun0004_ip = 110; continue _fun0004 }
 96:
                    var6 = _closure1_slot9;
                    var5 = var6.hasPendingUsage;
                    var4 = var5.bind(var6)();
 110:
                    if(var4) { _fun0004_ip = 127; continue _fun0004 }
 113:
                    var6 = _closure1_slot10;
                    var5 = var6.hasPendingUsage;
                    var4 = var5.bind(var6)();
 127:
                    if(var4) { _fun0004_ip = 156; continue _fun0004 }
 130:
                    var6 = _closure1_slot14;
                    var5 = var6.hasPendingUsage;
                    var5 = var5.bind(var6)();
                    if(!var5) { _fun0004_ip = 153; continue _fun0004 }
 147:
                    var6 = arg1;
                    var5 = !var6;
 153:
                    var4 = var5;
 156:
                    if(!var4) { _fun0004_ip = 227; continue _fun0004 }
 159:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 16;
                    var7 = var6[var4];
                    var8 = var5.bind(var2)(var7);
                    var7 = var8.markUserSettingsLoadOkayForDevelopment;
                    var7 = var7.bind(var8)();
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var5 = var4.FrecencyUserSettingsActionCreators;
                    var4 = var5.loadIfNecessary;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=218);
 216:
                    return var4;
 218:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(!var5) { _fun0004_ip = 227; continue _fun0004 }
 224:
                    return var4;
 227:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 19;
                    var4 = var7[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.forEach;
                    var4 = _closure1_slot0;
                    var3 = 16;
                    var3 = var7[var3];
                    var3 = var4.bind(var2)(var3);
                    var4 = var3.UserSettingsActionCreatorsByType;
                    var3 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.markDirtyIfHasPendingChange;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4, var3);
                    return var2;
 292:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function resetTimer(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg2;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot21;
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 41; continue _fun0005 }
 22:
            var1 = global;
            var5 = var1.clearTimeout;
            var4 = _closure1_slot21;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
 41:
            var1 = global;
            var5 = var1.setTimeout;
            var1 = undefined;
            var4 = function() {
                var3 = _closure1_slot27;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = arg1;
            var2 = var5.bind(var1)(var4, var2);
            _closure1_slot21 = var2;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var11 = global;
    var9 = var11.Object;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var9 = 2;
    var4 = var6[var9];
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var12 = 10;
    var4 = var6[var12];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MAX_NUM_SELECTED_ITEMS;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsTypes;
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FREQUENCY_ITEM_LIMIT;
    var _closure1_slot18 = var4;
    var8 = var11.Math;
    var4 = var8.random;
    var10 = var4.bind(var8)();
    var4 = 15;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.SECOND;
    var8 = var12 * var8;
    var8 = var10 * var8;
    var8 = var12 + var8;
    var _closure1_slot19 = var8;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.HOUR;
    var8 = var9 * var8;
    var10 = var11.Math;
    var9 = var10.floor;
    var13 = var11.Math;
    var11 = var13.random;
    var11 = var11.bind(var13)();
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var4 = var12 * var4;
    var4 = var11 * var4;
    var4 = var9.bind(var10)(var4);
    var4 = var8 + var4;
    var _closure1_slot20 = var4;
    var4 = null;
    var _closure1_slot21 = var4;
    var4 = false;
    var _closure1_slot22 = var4;
    var4 = 20;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function FrecencyUserSettingsManager(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot4;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot23;
                var1 = var1.bind(var4)();
                if(var1) { _fun0006_ip = 84; continue _fun0006 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0006_ip = 118; continue _fun0006;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var4 = _closure1_slot24;
                var2['POST_CONNECTION_OPEN'] = var4;
                var2['CONNECTION_RESUMED'] = var4;
                var4 = _closure1_slot26;
                var2['CONNECTION_CLOSED'] = var4;
                var3 = _closure1_slot25;
                var2['APP_STATE_UPDATE'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot8;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot5;
        var5 = {};
        var6 = '_initialize';
        var5['key'] = var6;
        var1 = function value() {
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var6 = var4[var2];
            var1 = undefined;
            var6 = var3.bind(var1)(var6);
            var6 = var6.FrecencyUserSettingsActionCreators;
            var8 = var6.beforeSendCallbacks;
            var7 = var8.push;
            var6 = {};
            var9 = function hasChanges() {
                var1 = false;
                return var1;
            };
            var6['hasChanges'] = var9;
            var9 = function processProto() {
                var4 = _closure1_slot29;
                var3 = _closure1_slot20;
                var1 = undefined;
                var2 = false;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6['processProto'] = var9;
            var6 = var7.bind(var8)(var6);
            var6 = var4[var2];
            var6 = var3.bind(var1)(var6);
            var6 = var6.FrecencyUserSettingsActionCreators;
            var8 = var6.beforeSendCallbacks;
            var7 = var8.push;
            var6 = {};
            var9 = function hasChanges() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure1_slot13;
                    var1 = var3.hasPendingUsage;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0007_ip = 45; continue _fun0007 }
 20:
                    var4 = _closure1_slot16;
                    var3 = var4.hasLoaded;
                    var2 = _closure1_slot17;
                    var2 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var6['hasChanges'] = var9;
            var9 = function processProto(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot13;
                    var3 = var4.hasPendingUsage;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0008_ip = 48; continue _fun0008 }
 23:
                    var6 = _closure1_slot16;
                    var5 = var6.hasLoaded;
                    var4 = _closure1_slot17;
                    var4 = var4.FRECENCY_AND_FAVORITES_SETTINGS;
                    var3 = var5.bind(var6)(var4);
 48:
                    if(!var3) { _fun0008_ip = 149; continue _fun0008 }
 51:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 17;
                    var3 = var6[var3];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var7 = var3.StickerFrecency;
                    var3 = var7.create;
                    var3 = var3.bind(var7)();
                    var2['stickerFrecency'] = var3;
                    var2 = var2.stickerFrecency;
                    var3 = 18;
                    var3 = var6[var3];
                    var5 = var5.bind(var4)(var3);
                    var4 = var5.serializeUsageHistory;
                    var1 = _closure1_slot13;
                    var1 = var1.stickerFrecencyWithoutFetchingLatest;
                    var3 = var1.usageHistory;
                    var1 = 100;
                    var1 = var4.bind(var5)(var3, var1);
                    var2['stickers'] = var1;
 149:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['processProto'] = var9;
            var6 = var7.bind(var8)(var6);
            var6 = var4[var2];
            var6 = var3.bind(var1)(var6);
            var6 = var6.FrecencyUserSettingsActionCreators;
            var8 = var6.beforeSendCallbacks;
            var7 = var8.push;
            var6 = {};
            var9 = function hasChanges() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure1_slot11;
                    var1 = var3.hasPendingUsage;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0009_ip = 45; continue _fun0009 }
 20:
                    var4 = _closure1_slot16;
                    var3 = var4.hasLoaded;
                    var2 = _closure1_slot17;
                    var2 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var6['hasChanges'] = var9;
            var9 = function processProto(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot11;
                    var3 = var4.hasPendingUsage;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0010_ip = 48; continue _fun0010 }
 23:
                    var6 = _closure1_slot16;
                    var5 = var6.hasLoaded;
                    var4 = _closure1_slot17;
                    var4 = var4.FRECENCY_AND_FAVORITES_SETTINGS;
                    var3 = var5.bind(var6)(var4);
 48:
                    if(!var3) { _fun0010_ip = 231; continue _fun0010 }
 54:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 17;
                    var5 = var7[var3];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var8 = var5.EmojiFrecency;
                    var5 = var8.create;
                    var5 = var5.bind(var8)();
                    var2['emojiFrecency'] = var5;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var5 = var3.EmojiFrecency;
                    var3 = var5.create;
                    var3 = var3.bind(var5)();
                    var2['emojiReactionFrecency'] = var3;
                    var9 = var2.emojiFrecency;
                    var3 = 18;
                    var5 = var7[var3];
                    var11 = var6.bind(var4)(var5);
                    var10 = var11.serializeUsageHistory;
                    var5 = _closure1_slot11;
                    var5 = var5.emojiFrecencyWithoutFetchingLatest;
                    var8 = var5.usageHistory;
                    var5 = 100;
                    var8 = var10.bind(var11)(var8, var5);
                    var9['emojis'] = var8;
                    var2 = var2.emojiReactionFrecency;
                    var3 = var7[var3];
                    var4 = var6.bind(var4)(var3);
                    var3 = var4.serializeUsageHistory;
                    var1 = _closure1_slot11;
                    var1 = var1.emojiReactionFrecencyWithoutFetchingLatest;
                    var1 = var1.usageHistory;
                    var1 = var3.bind(var4)(var1, var5);
                    var2['emojis'] = var1;
 231:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['processProto'] = var9;
            var6 = var7.bind(var8)(var6);
            var6 = var4[var2];
            var6 = var3.bind(var1)(var6);
            var6 = var6.FrecencyUserSettingsActionCreators;
            var8 = var6.beforeSendCallbacks;
            var7 = var8.push;
            var6 = {};
            var9 = function hasChanges() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure1_slot12;
                    var1 = var3.hasPendingUsage;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0011_ip = 45; continue _fun0011 }
 20:
                    var4 = _closure1_slot16;
                    var3 = var4.hasLoaded;
                    var2 = _closure1_slot17;
                    var2 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var6['hasChanges'] = var9;
            var9 = function processProto(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot12;
                    var3 = var4.hasPendingUsage;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0012_ip = 48; continue _fun0012 }
 23:
                    var6 = _closure1_slot16;
                    var5 = var6.hasLoaded;
                    var4 = _closure1_slot17;
                    var4 = var4.FRECENCY_AND_FAVORITES_SETTINGS;
                    var3 = var5.bind(var6)(var4);
 48:
                    if(!var3) { _fun0012_ip = 190; continue _fun0012 }
 54:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 19;
                    var3 = var5[var3];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.isEmpty;
                    var3 = _closure1_slot12;
                    var3 = var3.playedSoundHistory;
                    var3 = var4.bind(var6)(var3);
                    if(var3) { _fun0012_ip = 190; continue _fun0012 }
 100:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 17;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var7 = var3.PlayedSoundFrecency;
                    var3 = var7.create;
                    var3 = var3.bind(var7)();
                    var2['playedSoundFrecency'] = var3;
                    var2 = var2.playedSoundFrecency;
                    var3 = 18;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.serializeUsageHistory;
                    var1 = _closure1_slot12;
                    var3 = var1.playedSoundHistory;
                    var1 = 100;
                    var1 = var4.bind(var5)(var3, var1);
                    var2['playedSounds'] = var1;
 190:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['processProto'] = var9;
            var6 = var7.bind(var8)(var6);
            var6 = var4[var2];
            var6 = var3.bind(var1)(var6);
            var6 = var6.FrecencyUserSettingsActionCreators;
            var8 = var6.beforeSendCallbacks;
            var7 = var8.push;
            var6 = {};
            var9 = function hasChanges() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = _closure1_slot9;
                    var1 = var3.hasPendingUsage;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0013_ip = 45; continue _fun0013 }
 20:
                    var4 = _closure1_slot16;
                    var3 = var4.hasLoaded;
                    var2 = _closure1_slot17;
                    var2 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var6['hasChanges'] = var9;
            var9 = function processProto(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot9;
                    var3 = var4.hasPendingUsage;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0014_ip = 48; continue _fun0014 }
 23:
                    var6 = _closure1_slot16;
                    var5 = var6.hasLoaded;
                    var4 = _closure1_slot17;
                    var4 = var4.FRECENCY_AND_FAVORITES_SETTINGS;
                    var3 = var5.bind(var6)(var4);
 48:
                    if(!var3) { _fun0014_ip = 158; continue _fun0014 }
 51:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 17;
                    var3 = var6[var3];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var7 = var3.ApplicationCommandFrecency;
                    var3 = var7.create;
                    var3 = var3.bind(var7)();
                    var2['applicationCommandFrecency'] = var3;
                    var2 = var2.applicationCommandFrecency;
                    var3 = 18;
                    var3 = var6[var3];
                    var5 = var5.bind(var4)(var3);
                    var4 = var5.serializeUsageHistory;
                    var3 = _closure1_slot9;
                    var1 = var3.getCommandFrecencyWithoutLoadingLatest;
                    var1 = var1.bind(var3)();
                    var3 = var1.usageHistory;
                    var1 = 500;
                    var1 = var4.bind(var5)(var3, var1);
                    var2['applicationCommands'] = var1;
 158:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['processProto'] = var9;
            var6 = var7.bind(var8)(var6);
            var6 = var4[var2];
            var6 = var3.bind(var1)(var6);
            var6 = var6.FrecencyUserSettingsActionCreators;
            var8 = var6.beforeSendCallbacks;
            var7 = var8.push;
            var6 = {};
            var9 = function hasChanges() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = _closure1_slot10;
                    var1 = var3.hasPendingUsage;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0015_ip = 45; continue _fun0015 }
 20:
                    var4 = _closure1_slot16;
                    var3 = var4.hasLoaded;
                    var2 = _closure1_slot17;
                    var2 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var6['hasChanges'] = var9;
            var9 = function processProto(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot10;
                    var3 = var4.hasPendingUsage;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0016_ip = 48; continue _fun0016 }
 23:
                    var6 = _closure1_slot16;
                    var5 = var6.hasLoaded;
                    var4 = _closure1_slot17;
                    var4 = var4.FRECENCY_AND_FAVORITES_SETTINGS;
                    var3 = var5.bind(var6)(var4);
 48:
                    if(!var3) { _fun0016_ip = 154; continue _fun0016 }
 51:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 17;
                    var3 = var6[var3];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var7 = var3.ApplicationFrecency;
                    var3 = var7.create;
                    var3 = var3.bind(var7)();
                    var2['applicationFrecency'] = var3;
                    var2 = var2.applicationFrecency;
                    var3 = 18;
                    var3 = var6[var3];
                    var5 = var5.bind(var4)(var3);
                    var4 = var5.serializeUsageHistory;
                    var6 = _closure1_slot10;
                    var3 = var6.getApplicationFrecencyWithoutLoadingLatest;
                    var3 = var3.bind(var6)();
                    var3 = var3.usageHistory;
                    var1 = _closure1_slot18;
                    var1 = var4.bind(var5)(var3, var1);
                    var2['applications'] = var1;
 154:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['processProto'] = var9;
            var6 = var7.bind(var8)(var6);
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.FrecencyUserSettingsActionCreators;
            var4 = var2.beforeSendCallbacks;
            var3 = var4.push;
            var2 = {};
            var6 = function hasChanges() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var3 = _closure1_slot14;
                    var1 = var3.hasPendingUsage;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0017_ip = 45; continue _fun0017 }
 20:
                    var4 = _closure1_slot16;
                    var3 = var4.hasLoaded;
                    var2 = _closure1_slot17;
                    var2 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var2['hasChanges'] = var6;
            var5 = function processProto(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot14;
                    var3 = var4.hasPendingUsage;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0018_ip = 48; continue _fun0018 }
 23:
                    var6 = _closure1_slot16;
                    var5 = var6.hasLoaded;
                    var4 = _closure1_slot17;
                    var4 = var4.FRECENCY_AND_FAVORITES_SETTINGS;
                    var3 = var5.bind(var6)(var4);
 48:
                    if(!var3) { _fun0018_ip = 150; continue _fun0018 }
 51:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 17;
                    var3 = var6[var3];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var7 = var3.GuildAndChannelFrecency;
                    var3 = var7.create;
                    var3 = var3.bind(var7)();
                    var2['guildAndChannelFrecency'] = var3;
                    var2 = var2.guildAndChannelFrecency;
                    var3 = 18;
                    var3 = var6[var3];
                    var5 = var5.bind(var4)(var3);
                    var4 = var5.serializeUsageHistory;
                    var3 = _closure1_slot14;
                    var3 = var3.frecencyWithoutFetchingLatest;
                    var3 = var3.usageHistory;
                    var1 = _closure1_slot15;
                    var1 = var4.bind(var5)(var3, var1);
                    var2['guildAndChannels'] = var1;
 150:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['processProto'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var17 = var4;
    var2 = new var17[var2](var16);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/FrecencyUserSettingsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();