// app/modules/hang_status/HangStatusStore.tsx
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
    var4 = function createState() {
        var1 = {};
        var2 = _closure1_slot10;
        var1['recentStatuses'] = var2;
        var2 = new Array(0);
        var1['favoritedStatuses'] = var2;
        var2 = null;
        var1['currentDefaultStatus'] = var2;
        return var1;
    };
    var _closure1_slot18 = var4;
    var5 = function reset() {
        var2 = _closure1_slot18;
        var1 = undefined;
        var2 = var2.bind(var1)();
        _closure1_slot16 = var2;
        return var1;
    };
    var1 = function handleRunningGameStoreChange() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot15;
            var5 = null;
            var1 = var5 != var1;
            if(!var1) { _fun0002_ip = 109; continue _fun0002 }
 16:
            var3 = _closure1_slot8;
            var2 = var3.getRunningVerifiedApplicationIds;
            var6 = var2.bind(var3)();
            var3 = var6.includes;
            var2 = _closure1_slot15;
            var2 = var3.bind(var6)(var2);
            var2 = !var2;
            if(!var2) { _fun0002_ip = 106; continue _fun0002 }
 50:
            var _closure1_slot15 = var5;
            var3 = _closure1_slot16;
            var6 = var3.currentDefaultStatus;
            var7 = var5 == var6;
            var3 = undefined;
            if(var7) { _fun0002_ip = 79; continue _fun0002 }
 73:
            var3 = var6.gameActivityHangStatus;
 79:
            var6 = var5 != var3;
            var2 = true;
            if(!var6) { _fun0002_ip = 106; continue _fun0002 }
 88:
            var4 = _closure1_slot16;
            var4 = var4.currentDefaultStatus;
            var4['gameActivityHangStatus'] = var5;
            var2 = true;
 106:
            var1 = var2;
 109:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var2);
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
    var9 = var7[var2];
    var9 = var6.bind(var1)(var9);
    var11 = var9.HangStatusTypes;
    var _closure1_slot9 = var11;
    var9 = var9.SYSTEM_HANG_STATUS_TYPES;
    var _closure1_slot10 = var9;
    var9 = 7;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.ActivityTypes;
    var _closure1_slot11 = var9;
    var4 = var4.bind(var1)();
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function HangStatusStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
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
 0:
                var4 = arg1;
                var5 = this;
                var3 = {};
                var6 = _closure1_slot18;
                var1 = undefined;
                var7 = var6.bind(var1)();
                var8 = var3;
                var6 = copyDataProperties(var8, var7);
                var6 = null;
                if(!(var6 == var4)) { _fun0004_ip = 36; continue _fun0004 }
 34:
                var4 = {};
 36:
                var8 = var3;
                var7 = var4;
                var4 = copyDataProperties(var8, var7);
                _closure1_slot16 = var3;
                var4 = var5.waitFor;
                var3 = _closure1_slot8;
                var3 = var4.bind(var5)(var3);
                var4 = var5.syncWith;
                var6 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = _closure1_slot19;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCurrentHangStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getCustomHangStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getGameActivityHangStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getRecentStatuses';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            var1 = var1.recentStatuses;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getFavoritedStatuses';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            var1 = var1.favoritedStatuses;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getCurrentDefaultStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            var1 = var1.currentDefaultStatus;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getHangStatusActivity';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure1_slot12;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0005_ip = 20; continue _fun0005 }
 16:
                var1 = _closure1_slot14;
 20:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isFavorited';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var5 = arg1;
            var _closure3_slot0 = var5;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 9;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)(var5);
            var _closure3_slot1 = var3;
            var2 = _closure1_slot16;
            var3 = var2.favoritedStatuses;
            var2 = var3.some;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var7 = 9;
                    var1 = var1[var7];
                    var6 = undefined;
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.bind(var6)(var3);
                    if(!var1) { _fun0006_ip = 43; continue _fun0006 }
 36:
                    var1 = _closure3_slot1;
 43:
                    if(!var1) { _fun0006_ip = 57; continue _fun0006 }
 46:
                    var2 = _closure3_slot0;
                    var1 = var3 === var2;
 57:
                    if(var1) { _fun0006_ip = 171; continue _fun0006 }
 60:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.bind(var6)(var3);
                    var2 = !var2;
                    if(!var2) { _fun0006_ip = 98; continue _fun0006 }
 88:
                    var5 = _closure3_slot1;
                    var2 = !var5;
 98:
                    if(!var2) { _fun0006_ip = 122; continue _fun0006 }
 101:
                    var5 = _closure3_slot0;
                    var7 = var5.status;
                    var5 = var3.status;
                    var2 = var7 === var5;
 122:
                    if(!var2) { _fun0006_ip = 168; continue _fun0006 }
 125:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 12;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = _closure3_slot0;
                    var4 = var4.emoji;
                    var3 = var3.emoji;
                    var2 = var5.bind(var6)(var4, var3);
 168:
                    var1 = var2;
 171:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'HangStatusStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = new Array(3);
    var11 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var1 = var2.currentDefaultStatus;
            var4 = null;
            if(!(var4 != var1)) { _fun0007_ip = 31; continue _fun0007 }
 15:
            var1 = var2.currentDefaultStatus;
            var1 = var1.gameActivityHangStatus;
            if(!(var4 != var1)) { _fun0007_ip = 33; continue _fun0007 }
 31:
            return var2;
 33:
            var3 = {};
            var5 = var2.currentDefaultStatus;
            var6 = var3;
            var1 = copyDataProperties(var6, var5);
            var1 = 'gameActivityHangStatus';
            var3[var1] = var4;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var2 = copyDataProperties(var6, var5);
            var2 = 'currentDefaultStatus';
            var1[var2] = var3;
            return var1;
        }
    };
    var4[0] = var11;
    var11 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = 'recentCustomStatuses';
            var2 = var2 in var1;
            if(!var2) { _fun0008_ip = 23; continue _fun0008 }
 16:
            var2 = delete var1.recentCustomStatuses;
 23:
            return var1;
        }
    };
    var4[1] = var11;
    var11 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.currentDefaultStatus;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0009_ip = 32; continue _fun0009 }
 18:
            var4 = var1.currentDefaultStatus;
            var3 = 'expiresAt';
            var2 = var3 in var4;
 32:
            if(!var2) { _fun0009_ip = 46; continue _fun0009 }
 35:
            var2 = var1.currentDefaultStatus;
            var2 = delete var2.expiresAt;
 46:
            return var1;
        }
    };
    var4[2] = var11;
    var9['migrations'] = var4;
    var4 = 14;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var4['LOGOUT'] = var5;
    var11 = function handleSetHangStatus(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var5 = var1.status;
            var _closure2_slot0 = var5;
            var6 = var1.guildId;
            var2 = var1.saveAsDefault;
            var8 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 8;
            var4 = var4[var1];
            var1 = undefined;
            var9 = var8.bind(var1)(var4);
            var4 = _closure1_slot9;
            var4 = var4.CUSTOM;
            var8 = var5 !== var4;
            var4 = 'Hang Status cannot be custom';
            var4 = var9.bind(var1)(var8, var4);
            var _closure1_slot12 = var5;
            var4 = null;
            var _closure1_slot13 = var4;
            _closure1_slot15 = var4;
            if(!(var4 != var5)) { _fun0010_ip = 220; continue _fun0010 }
 97:
            var4 = _closure1_slot16;
            var12 = var4.recentStatuses;
            var9 = new Array(0);
            var4 = 0;
            var13 = var9;
            var11 = 0;
            var8 = arraySpread(var13, var12, var11);
            var8 = var9.findIndex;
            var7 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.bind(var2)(var3);
                    if(!var1) { _fun0011_ip = 47; continue _fun0011 }
 36:
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
 47:
                    return var1;
                }
            };
            var8 = var8.bind(var9)(var7);
            if(!(!(var8 >= var4))) { _fun0010_ip = 174; continue _fun0010 }
 142:
            var7 = var9.length;
            var4 = 7;
            if(!(var4 === var7)) { _fun0010_ip = 189; continue _fun0010 }
 154:
            var10 = var9.splice;
            var7 = 6;
            var4 = 1;
            var4 = var10.bind(var9)(var7, var4);
            _fun0010_ip = 189; continue _fun0010;
 174:
            var7 = var9.splice;
            var4 = 1;
            var4 = var7.bind(var9)(var8, var4);
 189:
            var7 = _closure1_slot16;
            var4 = new Array(1);
            var4[0] = var5;
            var11 = 1;
            var13 = var4;
            var12 = var9;
            var8 = arraySpread(var13, var12, var11);
            var7['recentStatuses'] = var4;
 220:
            if(!var2) { _fun0010_ip = 257; continue _fun0010 }
 223:
            var4 = _closure1_slot16;
            var2 = {};
            var2['status'] = var5;
            var5 = _closure1_slot13;
            var2['customHangStatus'] = var5;
            var5 = _closure1_slot15;
            var2['gameActivityHangStatus'] = var5;
            var4['currentDefaultStatus'] = var2;
 257:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var5 = var4.bind(var1)(var2);
            var4 = var5.getHangStatusExperiment;
            var2 = {};
            var2['guildId'] = var6;
            var6 = 'UpdateHangStatus';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var8 = var2.defaultStatusVariant;
            var2 = {};
            var4 = _closure1_slot11;
            var4 = var4.HANG_STATUS;
            var2['type'] = var4;
            var4 = 'Hang Status';
            var2['name'] = var4;
            var7 = _closure1_slot12;
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var5 = '';
            var4 = ':';
            var4 = var6.bind(var5)(var7, var4, var8);
            var2['state'] = var4;
            var _closure1_slot14 = var2;
            return var1;
        }
    };
    var4['UPDATE_HANG_STATUS'] = var11;
    var11 = function handleSetCustomHangStatus(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var4 = var1.status;
            var _closure2_slot0 = var4;
            var3 = var1.emoji;
            var _closure2_slot1 = var3;
            var1 = var1.saveAsDefault;
            var5 = _closure1_slot9;
            var5 = var5.CUSTOM;
            _closure1_slot12 = var5;
            var5 = null;
            _closure1_slot15 = var5;
            var5 = {};
            var5['status'] = var4;
            var5['emoji'] = var3;
            _closure1_slot13 = var5;
            var5 = _closure1_slot16;
            var11 = var5.recentStatuses;
            var8 = new Array(0);
            var5 = 0;
            var12 = var8;
            var10 = 0;
            var7 = arraySpread(var12, var11, var10);
            var7 = var8.findIndex;
            var6 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 9;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var5)(var2);
                    var1 = !var1;
                    if(!var1) { _fun0013_ip = 55; continue _fun0013 }
 39:
                    var6 = var2.status;
                    var4 = _closure2_slot0;
                    var1 = var6 === var4;
 55:
                    if(!var1) { _fun0013_ip = 102; continue _fun0013 }
 58:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.isEqual;
                    var3 = var2.emoji;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 102:
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var6);
            if(!(!(var7 >= var5))) { _fun0012_ip = 143; continue _fun0012 }
 111:
            var6 = var8.length;
            var5 = 7;
            if(!(var5 === var6)) { _fun0012_ip = 158; continue _fun0012 }
 123:
            var9 = var8.splice;
            var6 = 6;
            var5 = 1;
            var5 = var9.bind(var8)(var6, var5);
            _fun0012_ip = 158; continue _fun0012;
 143:
            var6 = var8.splice;
            var5 = 1;
            var5 = var6.bind(var8)(var7, var5);
 158:
            var6 = _closure1_slot16;
            var7 = _closure1_slot13;
            var5 = new Array(1);
            var5[0] = var7;
            var10 = 1;
            var12 = var5;
            var11 = var8;
            var7 = arraySpread(var12, var11, var10);
            var6['recentStatuses'] = var5;
            if(!var1) { _fun0012_ip = 234; continue _fun0012 }
 196:
            var5 = _closure1_slot16;
            var1 = {};
            var6 = _closure1_slot12;
            var1['status'] = var6;
            var6 = _closure1_slot13;
            var1['customHangStatus'] = var6;
            var6 = _closure1_slot15;
            var1['gameActivityHangStatus'] = var6;
            var5['currentDefaultStatus'] = var1;
 234:
            var1 = {};
            var5 = _closure1_slot11;
            var5 = var5.HANG_STATUS;
            var1['type'] = var5;
            var5 = 'Hang Status';
            var1['name'] = var5;
            var5 = _closure1_slot12;
            var1['state'] = var5;
            var1['details'] = var4;
            var1['emoji'] = var3;
            _closure1_slot14 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['UPDATE_HANG_STATUS_CUSTOM'] = var11;
    var11 = function handleSetGameActivityHangStatus(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var2 = var1.applicationId;
            var1 = var1.saveAsDefault;
            _closure1_slot15 = var2;
            var2 = null;
            _closure1_slot12 = var2;
            _closure1_slot13 = var2;
            _closure1_slot14 = var2;
            if(!var1) { _fun0014_ip = 76; continue _fun0014 }
 38:
            var2 = _closure1_slot16;
            var1 = {};
            var4 = _closure1_slot12;
            var1['status'] = var4;
            var4 = _closure1_slot13;
            var1['customHangStatus'] = var4;
            var3 = _closure1_slot15;
            var1['gameActivityHangStatus'] = var3;
            var2['currentDefaultStatus'] = var1;
 76:
            var1 = undefined;
            return var1;
        }
    };
    var4['UPDATE_HANG_STATUS_GAME_ACTIVITY'] = var11;
    var11 = function handleDeleteInvalidHangStatus(arg1) {
        var1 = arg1;
        var6 = var1.statuses;
        var2 = _closure1_slot16;
        var9 = var2.recentStatuses;
        var4 = new Array(0);
        var10 = var4;
        var8 = 0;
        var2 = arraySpread(var10, var9, var8);
        var _closure2_slot0 = var4;
        var2 = _closure1_slot16;
        var9 = var2.favoritedStatuses;
        var2 = new Array(0);
        var10 = var2;
        var5 = arraySpread(var10, var9, var8);
        var _closure2_slot1 = var2;
        var5 = var6.forEach;
        var3 = function(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = arg1;
                var5 = var1.status;
                var _closure3_slot0 = var5;
                var8 = var1.emoji;
                var _closure3_slot1 = var8;
                var6 = _closure2_slot0;
                var4 = var6.findIndex;
                var3 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var3 = arg1;
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 9;
                        var1 = var5[var1];
                        var6 = undefined;
                        var1 = var2.bind(var6)(var1);
                        var1 = var1.bind(var6)(var3);
                        if(var1) { _fun0016_ip = 98; continue _fun0016 }
 39:
                        var5 = var3.status;
                        var1 = _closure3_slot0;
                        var1 = var5 === var1;
                        if(!var1) { _fun0016_ip = 96; continue _fun0016 }
 55:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 11;
                        var4 = var7[var4];
                        var7 = var5.bind(var6)(var4);
                        var6 = var7.isEqual;
                        var5 = var3.emoji;
                        var4 = _closure3_slot1;
                        var1 = var6.bind(var7)(var5, var4);
 96:
                        _fun0016_ip = 106; continue _fun0016;
 98:
                        var2 = _closure3_slot0;
                        var1 = var3 === var2;
 106:
                        return var1;
                    }
                };
                var9 = var4.bind(var6)(var3);
                var4 = _closure2_slot1;
                var3 = var4.findIndex;
                var2 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var3 = arg1;
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 9;
                        var1 = var5[var1];
                        var6 = undefined;
                        var1 = var2.bind(var6)(var1);
                        var1 = var1.bind(var6)(var3);
                        if(var1) { _fun0017_ip = 98; continue _fun0017 }
 39:
                        var5 = var3.status;
                        var1 = _closure3_slot0;
                        var1 = var5 === var1;
                        if(!var1) { _fun0017_ip = 96; continue _fun0017 }
 55:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 11;
                        var4 = var7[var4];
                        var7 = var5.bind(var6)(var4);
                        var6 = var7.isEqual;
                        var5 = var3.emoji;
                        var4 = _closure3_slot1;
                        var1 = var6.bind(var7)(var5, var4);
 96:
                        _fun0017_ip = 106; continue _fun0017;
 98:
                        var2 = _closure3_slot0;
                        var1 = var3 === var2;
 106:
                        return var1;
                    }
                };
                var4 = var3.bind(var4)(var2);
                var2 = 0;
                if(!(var9 >= var2)) { _fun0015_ip = 91; continue _fun0015 }
 72:
                var7 = _closure2_slot0;
                var6 = var7.splice;
                var3 = 1;
                var3 = var6.bind(var7)(var9, var3);
 91:
                if(!(var4 >= var2)) { _fun0015_ip = 114; continue _fun0015 }
 95:
                var3 = _closure2_slot1;
                var2 = var3.splice;
                var1 = 1;
                var1 = var2.bind(var3)(var4, var1);
 114:
                var6 = _closure1_slot13;
                var2 = null;
                var7 = var2 == var6;
                var1 = undefined;
                var4 = undefined;
                if(var7) { _fun0015_ip = 139; continue _fun0015 }
 134:
                var4 = var6.status;
 139:
                var4 = var5 === var4;
                if(!var4) { _fun0015_ip = 196; continue _fun0015 }
 146:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 11;
                var5 = var7[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.isEqual;
                var9 = _closure1_slot13;
                var10 = var2 == var9;
                var5 = undefined;
                if(var10) { _fun0015_ip = 190; continue _fun0015 }
 185:
                var5 = var9.emoji;
 190:
                var4 = var6.bind(var7)(var8, var5);
 196:
                if(!var4) { _fun0015_ip = 225; continue _fun0015 }
 199:
                _closure1_slot12 = var2;
                _closure1_slot13 = var2;
                _closure1_slot15 = var2;
                var4 = _closure1_slot16;
                var4['currentDefaultStatus'] = var2;
                _closure1_slot14 = var2;
 225:
                return var1;
            }
        };
        var3 = var5.bind(var6)(var3);
        var3 = _closure1_slot16;
        var3['recentStatuses'] = var4;
        var1 = _closure1_slot16;
        var1['favoritedStatuses'] = var2;
        var1 = undefined;
        return var1;
    };
    var4['DELETE_INVALID_HANG_STATUSES'] = var11;
    var11 = function handleClearHangStatus(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var3 = var1.saveAsDefault;
            var1 = null;
            _closure1_slot12 = var1;
            _closure1_slot13 = var1;
            _closure1_slot15 = var1;
            if(!var3) { _fun0018_ip = 53; continue _fun0018 }
 29:
            var4 = _closure1_slot16;
            var3 = {'status': null, 'customHangStatus': null, 'gameActivityHangStatus': null};
            var4['currentDefaultStatus'] = var3;
 53:
            _closure1_slot14 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['CLEAR_HANG_STATUS'] = var11;
    var10 = function handleFavoriteHangStatus(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var8 = var1.status;
            var _closure2_slot0 = var8;
            var6 = var1.emoji;
            var _closure2_slot1 = var6;
            var1 = _closure1_slot16;
            var10 = var1.favoritedStatuses;
            var3 = new Array(0);
            var1 = 0;
            var11 = var3;
            var9 = 0;
            var5 = arraySpread(var11, var10, var9);
            var5 = var3.findIndex;
            var4 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 9;
                    var1 = var5[var1];
                    var6 = undefined;
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.bind(var6)(var3);
                    if(var1) { _fun0020_ip = 98; continue _fun0020 }
 39:
                    var5 = var3.status;
                    var1 = _closure2_slot0;
                    var1 = var5 === var1;
                    if(!var1) { _fun0020_ip = 96; continue _fun0020 }
 55:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 11;
                    var4 = var7[var4];
                    var7 = var5.bind(var6)(var4);
                    var6 = var7.isEqual;
                    var5 = var3.emoji;
                    var4 = _closure2_slot1;
                    var1 = var6.bind(var7)(var5, var4);
 96:
                    _fun0020_ip = 106; continue _fun0020;
 98:
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
 106:
                    return var1;
                }
            };
            var7 = var5.bind(var3)(var4);
            var4 = null;
            var5 = var8;
            if(!(var4 != var6)) { _fun0019_ip = 89; continue _fun0019 }
 76:
            var4 = {};
            var4['status'] = var8;
            var4['emoji'] = var6;
            var5 = var4;
 89:
            var4 = -1;
            if(!(var4 === var7)) { _fun0019_ip = 111; continue _fun0019 }
 99:
            var6 = var3.length;
            var4 = 6;
            if(!(!(var6 < var4))) { _fun0019_ip = 139; continue _fun0019 }
 111:
            var1 = var7 >= var1;
            var4 = false;
            if(!var1) { _fun0019_ip = 151; continue _fun0019 }
 120:
            var6 = var3.splice;
            var1 = 1;
            var1 = var6.bind(var3)(var7, var1);
            var4 = true;
            _fun0019_ip = 151; continue _fun0019;
 139:
            var1 = var3.push;
            var1 = var1.bind(var3)(var5);
            var4 = true;
 151:
            var1 = !var4;
            var1 = !var1;
            if(!var4) { _fun0019_ip = 172; continue _fun0019 }
 160:
            var2 = _closure1_slot16;
            var2['favoritedStatuses'] = var3;
            var1 = true;
 172:
            return var1;
        }
    };
    var4['UPDATE_FAVORITE_HANG_STATUS'] = var10;
    var4['RESET_HANG_STATUS_STATE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/hang_status/HangStatusStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MAX_FAVORITES'] = var2;
    return var1;
})();