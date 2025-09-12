// app/modules/poggermode/PoggermodeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var5 = function _isComboing(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0002_ip = 51; continue _fun0002 }
 12:
            var5 = var3.value;
            var2 = 0;
            var2 = var5 > var2;
            if(var2) { _fun0002_ip = 48; continue _fun0002 }
 26:
            var5 = var4 == var3;
            var4 = undefined;
            if(var5) { _fun0002_ip = 41; continue _fun0002 }
 35:
            var4 = var3.multiplier;
 41:
            var3 = 1;
            var2 = var4 > var3;
 48:
            var1 = var2;
 51:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var1 = function updateCombo(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var9 = arg1;
            var1 = undefined;
            var5 = undefined;
            if(!(var1 === var1)) { _fun0003_ip = 15; continue _fun0003 }
 13:
            var5 = true;
 15:
            var _closure2_slot0 = var1;
            var7 = _closure1_slot14;
            var4 = var7.get;
            var3 = _closure1_slot16;
            var3 = var3.bind(var1)(var9);
            var7 = var4.bind(var7)(var3);
            var4 = {};
            var15 = var4;
            var14 = var7;
            var3 = copyDataProperties(var15, var14);
            var15 = var4;
            var14 = var9;
            var3 = copyDataProperties(var15, var14);
            var8 = var9.value;
            var3 = null;
            if(!(var3 == var8)) { _fun0003_ip = 95; continue _fun0003 }
 78:
            var11 = var3 == var7;
            var10 = undefined;
            if(var11) { _fun0003_ip = 92; continue _fun0003 }
 87:
            var10 = var7.value;
 92:
            var8 = var10;
 95:
            var11 = var3 != var8;
            var10 = 0;
            if(!var11) { _fun0003_ip = 107; continue _fun0003 }
 104:
            var10 = var8;
 107:
            var8 = 'value';
            var4[var8] = var10;
            var8 = global;
            var12 = var8.Math;
            var11 = var12.min;
            var8 = var9.multiplier;
            if(!(var3 == var8)) { _fun0003_ip = 157; continue _fun0003 }
 139:
            var13 = var3 == var7;
            var10 = undefined;
            if(var13) { _fun0003_ip = 154; continue _fun0003 }
 148:
            var10 = var7.multiplier;
 154:
            var8 = var10;
 157:
            var13 = var3 != var8;
            var10 = 1;
            if(!var13) { _fun0003_ip = 170; continue _fun0003 }
 167:
            var10 = var8;
 170:
            var8 = 7;
            var10 = var11.bind(var12)(var10, var8);
            var8 = 'multiplier';
            var4[var8] = var10;
            var10 = var3 == var7;
            var8 = undefined;
            if(var10) { _fun0003_ip = 203; continue _fun0003 }
 197:
            var8 = var7.decayInterval;
 203:
            if(!(var3 == var8)) { _fun0003_ip = 253; continue _fun0003 }
 207:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var7 = 11;
            var7 = var11[var7];
            var7 = var10.bind(var1)(var7);
            var7 = var7.Interval;
            var10 = var7.prototype;
            var10 = Object.create(var10, {constructor: {value: var7}});
            var16 = var10;
            var7 = new var16[var7](var15);
            var8 = var7 instanceof Object ? var7 : var10;
 253:
            var7 = 'decayInterval';
            var4[var7] = var8;
            _closure2_slot0 = var4;
            var8 = _closure1_slot14;
            var7 = var8.set;
            var6 = _closure1_slot16;
            var6 = var6.bind(var1)(var9);
            var6 = var7.bind(var8)(var6, var4);
            if(!var5) { _fun0003_ip = 325; continue _fun0003 }
 293:
            var5 = var4.decayInterval;
            if(!(var3 != var5)) { _fun0003_ip = 325; continue _fun0003 }
 303:
            var4 = var5.start;
            var3 = 1000;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = _closure1_slot14;
                    var4 = var5.get;
                    var7 = _closure1_slot16;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var3 = var7.bind(var1)(var3);
                    var5 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var5)) { _fun0004_ip = 242; continue _fun0004 }
 44:
                    var4 = _closure2_slot0;
                    var7 = var4.multiplier;
                    var4 = var5.multiplier;
                    var4 = var7 !== var4;
                    if(!var4) { _fun0004_ip = 85; continue _fun0004 }
 67:
                    var6 = _closure2_slot0;
                    var7 = var6.value;
                    var6 = var5.value;
                    var4 = var7 !== var6;
 85:
                    var7 = var5.value;
                    var6 = 0;
                    if(!(!(var7 <= var6))) { _fun0004_ip = 157; continue _fun0004 }
 96:
                    if(var4) { _fun0004_ip = 157; continue _fun0004 }
 99:
                    var7 = _closure1_slot20;
                    var4 = {};
                    var11 = var4;
                    var10 = var5;
                    var8 = copyDataProperties(var11, var10);
                    var9 = var5.value;
                    var8 = 1;
                    var9 = var9 - var8;
                    var8 = 'value';
                    var4[var8] = var9;
                    var4 = var7.bind(var1)(var4);
                    var7 = _closure1_slot17;
                    var4 = var7.emitChange;
                    var4 = var4.bind(var7)();
                    _fun0004_ip = 242; continue _fun0004;
 157:
                    var4 = var5.decayInterval;
                    if(!(var3 != var4)) { _fun0004_ip = 177; continue _fun0004 }
 167:
                    var3 = var4.stop;
                    var3 = var3.bind(var4)();
 177:
                    var3 = var5.value;
                    if(!(var3 <= var6)) { _fun0004_ip = 242; continue _fun0004 }
 186:
                    var4 = _closure1_slot20;
                    var3 = {};
                    var11 = var3;
                    var10 = var5;
                    var5 = copyDataProperties(var11, var10);
                    var5 = 'value';
                    var3[var5] = var6;
                    var6 = 1;
                    var5 = 'multiplier';
                    var3[var5] = var6;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure1_slot17;
                    var2 = var3.emitChange;
                    var2 = var2.bind(var3)();
 242:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
 325:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var2 = function shouldTrackMessage(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg3;
            var4 = arg4;
            var2 = arg1;
            var1 = arg2;
            var1 = var2 === var1;
            if(!var1) { _fun0005_ip = 59; continue _fun0005 }
 19:
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0005_ip = 41; continue _fun0005 }
 28:
            var3 = var4.has;
            var3 = var3.bind(var4)(var5);
            var2 = !var3;
 41:
            if(!var2) { _fun0005_ip = 56; continue _fun0005 }
 44:
            var3 = var4.add;
            var3 = var3.bind(var4)(var5);
            var2 = true;
 56:
            var1 = var2;
 59:
            return var1;
        }
    };
    var _closure1_slot21 = var2;
    var4 = global;
    var12 = var4.Object;
    var11 = var12.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var10.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 8;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var11 = var6.ShakeLevel;
    var _closure1_slot10 = var11;
    var6 = var6.ShakeLocation;
    var _closure1_slot11 = var6;
    var6 = 9;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.ComponentActions;
    var _closure1_slot12 = var6;
    var4 = var4.Set;
    var6 = var4.prototype;
    var6 = Object.create(var6, {constructor: {value: var4}});
    var17 = var6;
    var4 = new var17[var4](var16);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot13 = var4;
    var4 = 10;
    var6 = var9[var4];
    var6 = var8.bind(var1)(var6);
    var13 = var6.SecondaryIndexMap;
    var6 = var13.prototype;
    var11 = Object.create(var6, {constructor: {value: var13}});
    var16 = function(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = var1.channelId;
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var15 = function(arg1) {
        var1 = arg1;
        var5 = var1.userId;
        var4 = var1.channelId;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = '-';
        var1 = var3.bind(var2)(var4, var1, var5);
        return var1;
    };
    var17 = var11;
    var6 = new var17[var13](var16, var15, var14);
    var6 = var6 instanceof Object ? var6 : var11;
    var _closure1_slot14 = var6;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var12 = var4.SecondaryIndexMap;
    var4 = var12.prototype;
    var6 = Object.create(var4, {constructor: {value: var12}});
    var16 = function(arg1) {
        var1 = arg1;
        var4 = var1.messageId;
        var3 = var1.channelId;
        var1 = var1.combo;
        var2 = var1.userId;
        var1 = new Array(3);
        var1[0] = var4;
        var1[1] = var3;
        var1[2] = var2;
        return var1;
    };
    var15 = function(arg1) {
        var1 = arg1;
        var7 = var1.messageId;
        var11 = var1.channelId;
        var1 = var1.combo;
        var9 = var1.userId;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var12 = '';
        var1 = '-';
        var10 = var1;
        var8 = var1;
        var1 = var12[var3](var11, var10, var9, var8, var7, var6);
        return var1;
    };
    var17 = var6;
    var4 = new var17[var12](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot15 = var4;
    var4 = function getComboId(arg1) {
        var1 = arg1;
        var5 = var1.userId;
        var4 = var1.channelId;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = '-';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var _closure1_slot16 = var4;
    var6 = 14;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var11 = var6.Store;
    var6 = function(arg1) {
        var4 = function PoggermodeStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
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
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot7;
            var1 = _closure1_slot8;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getComboScore';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = _closure1_slot14;
                var3 = var4.get;
                var6 = _closure1_slot16;
                var1 = {};
                var5 = arg1;
                var1['userId'] = var5;
                var5 = arg2;
                var1['channelId'] = var5;
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var3 = var1 == var4;
                var1 = 0;
                if(var3) { _fun0007_ip = 86; continue _fun0007 }
 55:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 12;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getComboScore;
                var1 = var2.bind(var3)(var4);
 86:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getUserCombo';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot14;
            var2 = var3.get;
            var5 = _closure1_slot16;
            var4 = {};
            var1 = arg1;
            var4['userId'] = var1;
            var1 = arg2;
            var4['channelId'] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isComboing';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = this;
                var3 = var4.getUserCombo;
                var2 = arg1;
                var1 = arg2;
                var4 = var3.bind(var4)(var2, var1);
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0008_ip = 52; continue _fun0008 }
 30:
                var3 = var4.value;
                var2 = _closure1_slot9;
                var2 = var2.combosRequiredCount;
                var1 = var3 >= var2;
 52:
                if(!var1) { _fun0008_ip = 69; continue _fun0008 }
 55:
                var3 = _closure1_slot19;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
 69:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getMessageCombo';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = _closure1_slot15;
                var2 = var3.get;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var3 = null;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0009_ip = 37; continue _fun0009 }
 31:
                var2 = var4.combo;
 37:
                var3 = var3 != var2;
                var1 = undefined;
                if(!var3) { _fun0009_ip = 49; continue _fun0009 }
 46:
                var1 = var2;
 49:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getMostRecentMessageCombo';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot15;
            var2 = var3.values;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var3 = var2.length;
            var1 = 1;
            var1 = var3 - var1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getUserComboShakeIntensity';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3, arg4) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = this;
                var3 = var4.getUserCombo;
                var2 = arg1;
                var1 = arg2;
                var5 = var3.bind(var4)(var2, var1);
                var1 = null;
                var2 = var1 != var5;
                var1 = 0;
                if(!var2) { _fun0010_ip = 79; continue _fun0010 }
 32:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getComboShakeIntensity;
                var2 = arg4;
                var3 = var3.bind(var4)(var5, var2);
                var2 = arg3;
                var1 = var3 * var2;
 79:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var12 = var6.bind(var1)(var11);
    var6 = 'PoggermodeStore';
    var12['displayName'] = var6;
    var6 = 15;
    var6 = var9[var6];
    var16 = var10.bind(var1)(var6);
    var6 = {};
    var10 = function handleComboing(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var3 = arg1;
            var1 = var3.type;
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['type'] = var1;
            var7 = {};
            var6 = var3;
            var5 = var2;
            var3 = copyDataProperties(var7, var6, var5);
            var4 = _closure1_slot9;
            var2 = var4.isEnabled;
            var2 = var2.bind(var4)();
            if(var2) { _fun0011_ip = 55; continue _fun0011 }
 51:
            var2 = false;
            return var2;
 55:
            var2 = _closure1_slot20;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var6['POGGERMODE_UPDATE_COMBO'] = var10;
    var10 = function handleUpdateMessageCombo(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var4 = var1.comboMessage;
            var3 = _closure1_slot9;
            var2 = var3.isEnabled;
            var2 = var2.bind(var3)();
            if(var2) { _fun0012_ip = 33; continue _fun0012 }
 29:
            var2 = false;
            return var2;
 33:
            var3 = _closure1_slot15;
            var2 = var3.set;
            var1 = var4.messageId;
            var1 = var2.bind(var3)(var1, var4);
            var1 = undefined;
            return var1;
        }
    };
    var6['POGGERMODE_UPDATE_MESSAGE_COMBO'] = var10;
    var10 = function handleIncomingMessage(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var10 = var1.channelId;
            var1 = var1.message;
            var6 = var1.mentions;
            var11 = var1.author;
            var12 = var1.nonce;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var5 = _closure1_slot9;
            var2 = var5.isEnabled;
            var2 = var2.bind(var5)();
            if(var2) { _fun0013_ip = 63; continue _fun0013 }
 59:
            var2 = false;
            return var2;
 63:
            var5 = _closure1_slot7;
            var2 = var5.getId;
            var9 = var2.bind(var5)();
            _closure2_slot0 = var9;
            var8 = _closure1_slot21;
            var2 = null;
            var5 = var2 == var11;
            var7 = undefined;
            if(var5) { _fun0013_ip = 101; continue _fun0013 }
 96:
            var7 = var11.id;
 101:
            var14 = _closure1_slot13;
            var18 = undefined;
            var17 = var7;
            var16 = var9;
            var15 = var12;
            var5 = var18[var8](var17, var16, var15, var14, var13);
            if(var5) { _fun0013_ip = 127; continue _fun0013 }
 123:
            var5 = false;
            return var5;
 127:
            var8 = _closure1_slot14;
            var7 = var8.get;
            var9 = _closure1_slot16;
            var5 = {};
            var13 = var2 == var11;
            var12 = undefined;
            if(var13) { _fun0013_ip = 156; continue _fun0013 }
 151:
            var12 = var11.id;
 156:
            var13 = var2 != var12;
            var11 = '???';
            if(!var13) { _fun0013_ip = 172; continue _fun0013 }
 169:
            var11 = var12;
 172:
            var5['userId'] = var11;
            var5['channelId'] = var10;
            var5 = var9.bind(var4)(var5);
            var8 = var7.bind(var8)(var5);
            var5 = _closure1_slot9;
            var5 = var5.screenshakeEnabled;
            if(!var5) { _fun0013_ip = 253; continue _fun0013 }
 203:
            var5 = _closure1_slot9;
            var7 = var5.screenshakeEnabledLocations;
            var5 = _closure1_slot11;
            var5 = var5.MENTION;
            var5 = var7[var5];
            if(!var5) { _fun0013_ip = 253; continue _fun0013 }
 230:
            if(!(var2 != var6)) { _fun0013_ip = 253; continue _fun0013 }
 234:
            var5 = var6.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            if(!(var2 == var3)) { _fun0013_ip = 257; continue _fun0013 }
 253:
            var3 = false;
            return var3;
 257:
            if(!(var2 == var8)) { _fun0013_ip = 288; continue _fun0013 }
 261:
            var3 = global;
            var5 = var3.Math;
            var3 = var5.random;
            var5 = var3.bind(var5)();
            var3 = 4;
            var5 = var3 * var5;
            _fun0013_ip = 353; continue _fun0013;
 288:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 12;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.getComboShakeIntensity;
            var3 = _closure1_slot10;
            var3 = var3.LEVEL_4;
            var3 = var6.bind(var7)(var8, var3);
            var6 = var2 != var3;
            var2 = 0.001;
            if(!var6) { _fun0013_ip = 350; continue _fun0013 }
 347:
            var2 = var3;
 350:
            var5 = var2;
 353:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 13;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.ComponentDispatch;
            var3 = var4.dispatch;
            var1 = _closure1_slot12;
            var2 = var1.SHAKE_APP;
            var1 = {};
            var6 = 1000;
            var1['duration'] = var6;
            var1['intensity'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = true;
            return var1;
        }
    };
    var6['MESSAGE_CREATE'] = var10;
    var10 = var12.prototype;
    var10 = Object.create(var10, {constructor: {value: var12}});
    var17 = var10;
    var15 = var6;
    var6 = new var17[var12](var16, var15, var14);
    var6 = var6 instanceof Object ? var6 : var10;
    var _closure1_slot17 = var6;
    var7 = 16;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/poggermode/PoggermodeStore.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['isComboing'] = var5;
    var3['getComboId'] = var4;
    var3['shouldTrackMessage'] = var2;
    return var1;
})();