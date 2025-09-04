// app/modules/hang_status/HangStatusStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function handleRunningGameStoreChange() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot13;
            var5 = null;
            var1 = var5 != var1;
            if(!var1) { _fun0002_ip = 109; continue _fun0002 }
 16:
            var3 = _closure1_slot7;
            var2 = var3.getRunningVerifiedApplicationIds;
            var6 = var2.bind(var3)();
            var3 = var6.includes;
            var2 = _closure1_slot13;
            var2 = var3.bind(var6)(var2);
            var2 = !var2;
            if(!var2) { _fun0002_ip = 106; continue _fun0002 }
 50:
            var _closure1_slot13 = var5;
            var3 = _closure1_slot14;
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
            var4 = _closure1_slot14;
            var4 = var4.currentDefaultStatus;
            var4['gameActivityHangStatus'] = var5;
            var2 = true;
 106:
            var1 = var2;
 109:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.HangStatusTypes;
    var _closure1_slot8 = var8;
    var2 = var2.ActivityTypes;
    var _closure1_slot9 = var2;
    var2 = {};
    var8 = new Array(0);
    var2['recentCustomStatuses'] = var8;
    var8 = null;
    var2['currentDefaultStatus'] = var8;
    var _closure1_slot14 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function HangStatusStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot15;
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
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var2 = {};
                var3 = new Array(0);
                var2['recentCustomStatuses'] = var3;
                var3 = null;
                var2['currentDefaultStatus'] = var3;
                if(!(var3 == var1)) { _fun0004_ip = 30; continue _fun0004 }
 28:
                var1 = {};
 30:
                var7 = var2;
                var6 = var1;
                var1 = copyDataProperties(var7, var6);
                _closure1_slot14 = var2;
                var3 = var4.waitFor;
                var2 = _closure1_slot7;
                var2 = var3.bind(var4)(var2);
                var3 = var4.syncWith;
                var5 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot16;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCurrentHangStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getCustomHangStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getGameActivityHangStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getRecentCustomStatuses';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            var1 = var1.recentCustomStatuses;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getCurrentDefaultStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            var1 = var1.currentDefaultStatus;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getHangStatusActivity';
        var5['key'] = var7;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure1_slot10;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0005_ip = 20; continue _fun0005 }
 16:
                var1 = _closure1_slot12;
 20:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'HangStatusStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = new Array(1);
    var9 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var1 = var2.currentDefaultStatus;
            var4 = null;
            if(!(var4 != var1)) { _fun0006_ip = 31; continue _fun0006 }
 15:
            var1 = var2.currentDefaultStatus;
            var1 = var1.gameActivityHangStatus;
            if(!(var4 != var1)) { _fun0006_ip = 33; continue _fun0006 }
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
    var2[0] = var9;
    var8['migrations'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function reset() {
        var2 = {};
        var1 = new Array(0);
        var2['recentCustomStatuses'] = var1;
        var1 = null;
        var2['currentDefaultStatus'] = var1;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleSetHangStatus(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var5 = var1.status;
            var2 = var1.saveAsDefault;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var4);
            var4 = _closure1_slot8;
            var4 = var4.CUSTOM;
            var6 = var5 !== var4;
            var4 = 'Hang Status cannot be custom';
            var4 = var7.bind(var1)(var6, var4);
            var _closure1_slot10 = var5;
            var4 = null;
            var _closure1_slot11 = var4;
            _closure1_slot13 = var4;
            if(!var2) { _fun0007_ip = 148; continue _fun0007 }
 82:
            var4 = _closure1_slot14;
            var2 = {};
            var2['status'] = var5;
            var5 = _closure1_slot11;
            var2['customHangStatus'] = var5;
            var5 = _closure1_slot13;
            var2['gameActivityHangStatus'] = var5;
            var5 = global;
            var6 = var5.Date;
            var5 = var6.now;
            var6 = var5.bind(var6)();
            var5 = 28800000;
            var5 = var6 + var5;
            var2['expiresAt'] = var5;
            var4['currentDefaultStatus'] = var2;
 148:
            var2 = {};
            var4 = _closure1_slot9;
            var4 = var4.HANG_STATUS;
            var2['type'] = var4;
            var4 = 'Hang Status';
            var2['name'] = var4;
            var4 = _closure1_slot10;
            var2['state'] = var4;
            var _closure1_slot12 = var2;
            return var1;
        }
    };
    var2['UPDATE_HANG_STATUS'] = var9;
    var9 = function handleSetCustomHangStatus(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.status;
            var _closure2_slot0 = var4;
            var3 = var1.emoji;
            var _closure2_slot1 = var3;
            var1 = var1.saveAsDefault;
            var6 = _closure1_slot8;
            var6 = var6.CUSTOM;
            _closure1_slot10 = var6;
            var6 = null;
            _closure1_slot13 = var6;
            var6 = {};
            var6['status'] = var4;
            var6['emoji'] = var3;
            _closure1_slot11 = var6;
            var6 = _closure1_slot14;
            var11 = var6.recentCustomStatuses;
            var8 = new Array(0);
            var10 = 0;
            var12 = var8;
            var6 = arraySpread(var12, var11, var10);
            var6 = var8.findIndex;
            var5 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.status;
                    var1 = _closure2_slot0;
                    var1 = var4 === var1;
                    if(!var1) { _fun0009_ip = 69; continue _fun0009 }
 22:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 8;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.isEqual;
                    var3 = var3.emoji;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 69:
                    return var1;
                }
            };
            var7 = var6.bind(var8)(var5);
            var5 = -1;
            if(!(var5 === var7)) { _fun0008_ip = 149; continue _fun0008 }
 117:
            var6 = var8.length;
            var5 = 7;
            if(!(var5 === var6)) { _fun0008_ip = 164; continue _fun0008 }
 129:
            var9 = var8.splice;
            var6 = 6;
            var5 = 1;
            var5 = var9.bind(var8)(var6, var5);
            _fun0008_ip = 164; continue _fun0008;
 149:
            var6 = var8.splice;
            var5 = 1;
            var5 = var6.bind(var8)(var7, var5);
 164:
            var6 = _closure1_slot14;
            var7 = _closure1_slot11;
            var5 = new Array(1);
            var5[0] = var7;
            var10 = 1;
            var12 = var5;
            var11 = var8;
            var7 = arraySpread(var12, var11, var10);
            var6['recentCustomStatuses'] = var5;
            if(!var1) { _fun0008_ip = 272; continue _fun0008 }
 202:
            var5 = _closure1_slot14;
            var1 = {};
            var6 = _closure1_slot10;
            var1['status'] = var6;
            var6 = _closure1_slot11;
            var1['customHangStatus'] = var6;
            var6 = _closure1_slot13;
            var1['gameActivityHangStatus'] = var6;
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var7 = var6.bind(var7)();
            var6 = 28800000;
            var6 = var7 + var6;
            var1['expiresAt'] = var6;
            var5['currentDefaultStatus'] = var1;
 272:
            var1 = {};
            var5 = _closure1_slot9;
            var5 = var5.HANG_STATUS;
            var1['type'] = var5;
            var5 = 'Hang Status';
            var1['name'] = var5;
            var5 = _closure1_slot10;
            var1['state'] = var5;
            var1['details'] = var4;
            var1['emoji'] = var3;
            _closure1_slot12 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['UPDATE_HANG_STATUS_CUSTOM'] = var9;
    var9 = function handleSetGameActivityHangStatus(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var2 = var1.applicationId;
            var1 = var1.saveAsDefault;
            _closure1_slot13 = var2;
            var2 = null;
            _closure1_slot10 = var2;
            _closure1_slot11 = var2;
            _closure1_slot12 = var2;
            if(!var1) { _fun0010_ip = 108; continue _fun0010 }
 38:
            var2 = _closure1_slot14;
            var1 = {};
            var4 = _closure1_slot10;
            var1['status'] = var4;
            var4 = _closure1_slot11;
            var1['customHangStatus'] = var4;
            var3 = _closure1_slot13;
            var1['gameActivityHangStatus'] = var3;
            var3 = global;
            var4 = var3.Date;
            var3 = var4.now;
            var4 = var3.bind(var4)();
            var3 = 28800000;
            var3 = var4 + var3;
            var1['expiresAt'] = var3;
            var2['currentDefaultStatus'] = var1;
 108:
            var1 = undefined;
            return var1;
        }
    };
    var2['UPDATE_HANG_STATUS_GAME_ACTIVITY'] = var9;
    var9 = function handleDeleteInvalidHangStatus(arg1) {
        var1 = arg1;
        var5 = var1.statuses;
        var2 = _closure1_slot14;
        var8 = var2.recentCustomStatuses;
        var2 = new Array(0);
        var7 = 0;
        var9 = var2;
        var4 = arraySpread(var9, var8, var7);
        var _closure2_slot0 = var2;
        var4 = var5.forEach;
        var3 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = arg1;
                var5 = var1.status;
                var _closure3_slot0 = var5;
                var8 = var1.emoji;
                var _closure3_slot1 = var8;
                var4 = _closure2_slot0;
                var3 = var4.findIndex;
                var2 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var3 = arg1;
                        var4 = var3.status;
                        var1 = _closure3_slot0;
                        var1 = var4 === var1;
                        if(!var1) { _fun0012_ip = 69; continue _fun0012 }
 22:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var4 = 8;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.isEqual;
                        var3 = var3.emoji;
                        var2 = _closure3_slot1;
                        var1 = var4.bind(var5)(var3, var2);
 69:
                        return var1;
                    }
                };
                var4 = var3.bind(var4)(var2);
                var2 = -1;
                if(!(var2 !== var4)) { _fun0011_ip = 76; continue _fun0011 }
 57:
                var3 = _closure2_slot0;
                var2 = var3.splice;
                var1 = 1;
                var1 = var2.bind(var3)(var4, var1);
 76:
                var6 = _closure1_slot11;
                var2 = null;
                var7 = var2 == var6;
                var1 = undefined;
                var4 = undefined;
                if(var7) { _fun0011_ip = 101; continue _fun0011 }
 96:
                var4 = var6.status;
 101:
                var4 = var5 === var4;
                if(!var4) { _fun0011_ip = 159; continue _fun0011 }
 108:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 8;
                var5 = var7[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.isEqual;
                var9 = _closure1_slot11;
                var10 = var2 == var9;
                var5 = undefined;
                if(var10) { _fun0011_ip = 153; continue _fun0011 }
 147:
                var5 = var9.emoji;
 153:
                var4 = var6.bind(var7)(var8, var5);
 159:
                if(!var4) { _fun0011_ip = 188; continue _fun0011 }
 162:
                _closure1_slot10 = var2;
                _closure1_slot11 = var2;
                _closure1_slot13 = var2;
                var4 = _closure1_slot14;
                var4['currentDefaultStatus'] = var2;
                _closure1_slot12 = var2;
 188:
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3);
        var1 = _closure1_slot14;
        var1['recentCustomStatuses'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['DELETE_INVALID_HANG_STATUSES'] = var9;
    var4 = function handleClearHangStatus(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var3 = var1.saveAsDefault;
            var1 = null;
            _closure1_slot10 = var1;
            _closure1_slot11 = var1;
            _closure1_slot13 = var1;
            if(!var3) { _fun0013_ip = 85; continue _fun0013 }
 29:
            var4 = _closure1_slot14;
            var3 = {'status': null, 'customHangStatus': null, 'gameActivityHangStatus': null};
            var5 = global;
            var6 = var5.Date;
            var5 = var6.now;
            var6 = var5.bind(var6)();
            var5 = 28800000;
            var5 = var6 + var5;
            var3['expiresAt'] = var5;
            var4['currentDefaultStatus'] = var3;
 85:
            _closure1_slot12 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['CLEAR_HANG_STATUS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/HangStatusStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();