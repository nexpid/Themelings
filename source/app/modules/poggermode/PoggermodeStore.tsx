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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var5 = function _isComboing(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = var3.value;
            var2 = 0;
            var2 = var5 > var2;
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = var4 == var3;
            var4 = undefined;
            if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = var3.multiplier;
case 10:
            var3 = 1;
            var2 = var4 > var3;
case 8:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var1 = function updateCombo(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg1;
            var1 = undefined;
            var5 = undefined;
            if(!(var1 === var1)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var5 = true;
case 12:
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
            if(!(var3 == var8)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var11 = var3 == var7;
            var10 = undefined;
            if(var11) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var10 = var7.value;
case 16:
            var8 = var10;
case 14:
            var11 = var3 != var8;
            var10 = 0;
            if(!var11) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var10 = var8;
case 18:
            var8 = 'value';
            var4[var8] = var10;
            var8 = global;
            var12 = var8.Math;
            var11 = var12.min;
            var8 = var9.multiplier;
            if(!(var3 == var8)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var13 = var3 == var7;
            var10 = undefined;
            if(var13) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var10 = var7.multiplier;
case 22:
            var8 = var10;
case 20:
            var13 = var3 != var8;
            var10 = 1;
            if(!var13) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var10 = var8;
case 24:
            var8 = 7;
            var10 = var11.bind(var12)(var10, var8);
            var8 = 'multiplier';
            var4[var8] = var10;
            var10 = var3 == var7;
            var8 = undefined;
            if(var10) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var8 = var7.decayInterval;
case 26:
            if(!(var3 == var8)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
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
case 28:
            var7 = 'decayInterval';
            var4[var7] = var8;
            _closure2_slot0 = var4;
            var8 = _closure1_slot14;
            var7 = var8.set;
            var6 = _closure1_slot16;
            var6 = var6.bind(var1)(var9);
            var6 = var7.bind(var8)(var6, var4);
            if(!var5) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var5 = var4.decayInterval;
            if(!(var3 != var5)) { _fun0003_ip = 30; continue _fun0003 }
case 32:
            var4 = var5.start;
            var3 = 1000;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure1_slot14;
                    var4 = var5.get;
                    var7 = _closure1_slot16;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var3 = var7.bind(var1)(var3);
                    var5 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var5)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var4 = _closure2_slot0;
                    var7 = var4.multiplier;
                    var4 = var5.multiplier;
                    var4 = var7 !== var4;
                    if(!var4) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var6 = _closure2_slot0;
                    var7 = var6.value;
                    var6 = var5.value;
                    var4 = var7 !== var6;
case 35:
                    var7 = var5.value;
                    var6 = 0;
                    if(!(!(var7 <= var6))) { _fun0004_ip = 20; continue _fun0004 }
case 37:
                    if(var4) { _fun0004_ip = 20; continue _fun0004 }
case 38:
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
                    _fun0004_ip = 33; continue _fun0004;
case 20:
                    var4 = var5.decayInterval;
                    if(!(var3 != var4)) { _fun0004_ip = 39; continue _fun0004 }
case 25:
                    var3 = var4.stop;
                    var3 = var3.bind(var4)();
case 39:
                    var3 = var5.value;
                    if(!(var3 <= var6)) { _fun0004_ip = 33; continue _fun0004 }
case 40:
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
case 33:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
case 30:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var2 = function shouldTrackMessage(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg3;
            var4 = arg4;
            var2 = arg1;
            var1 = arg2;
            var1 = var2 === var1;
            if(!var1) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0005_ip = 10; continue _fun0005 }
case 43:
            var3 = var4.has;
            var3 = var3.bind(var4)(var5);
            var2 = !var3;
case 10:
            if(!var2) { _fun0005_ip = 44; continue _fun0005 }
case 34:
            var3 = var4.add;
            var3 = var3.bind(var4)(var5);
            var2 = true;
case 44:
            var1 = var2;
case 41:
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
case 0:
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
                if(var1) { _fun0006_ip = 45; continue _fun0006 }
case 6:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 46; continue _fun0006;
case 45:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 46:
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
case 0:
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
                if(var3) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 12;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getComboScore;
                var1 = var2.bind(var3)(var4);
case 47:
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
case 0:
                var4 = this;
                var3 = var4.getUserCombo;
                var2 = arg1;
                var1 = arg2;
                var4 = var3.bind(var4)(var2, var1);
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                var3 = var4.value;
                var2 = _closure1_slot9;
                var2 = var2.combosRequiredCount;
                var1 = var3 >= var2;
case 49:
                if(!var1) { _fun0008_ip = 45; continue _fun0008 }
case 48:
                var3 = _closure1_slot19;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
case 45:
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
case 0:
                var3 = _closure1_slot15;
                var2 = var3.get;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var3 = null;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                var2 = var4.combo;
case 51:
                var3 = var3 != var2;
                var1 = undefined;
                if(!var3) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                var1 = var2;
case 53:
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
case 0:
                var4 = this;
                var3 = var4.getUserCombo;
                var2 = arg1;
                var1 = arg2;
                var5 = var3.bind(var4)(var2, var1);
                var1 = null;
                var2 = var1 != var5;
                var1 = 0;
                if(!var2) { _fun0010_ip = 55; continue _fun0010 }
case 56:
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
case 55:
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
case 0:
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
            if(var2) { _fun0011_ip = 48; continue _fun0011 }
case 6:
            var2 = false;
            return var2;
case 48:
            var2 = _closure1_slot20;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var6['POGGERMODE_UPDATE_COMBO'] = var10;
    var10 = function handleUpdateMessageCombo(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var4 = var1.comboMessage;
            var3 = _closure1_slot9;
            var2 = var3.isEnabled;
            var2 = var2.bind(var3)();
            if(var2) { _fun0012_ip = 57; continue _fun0012 }
case 58:
            var2 = false;
            return var2;
case 57:
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
case 0:
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
            if(var2) { _fun0013_ip = 59; continue _fun0013 }
case 41:
            var2 = false;
            return var2;
case 59:
            var5 = _closure1_slot7;
            var2 = var5.getId;
            var9 = var2.bind(var5)();
            _closure2_slot0 = var9;
            var8 = _closure1_slot21;
            var2 = null;
            var5 = var2 == var11;
            var7 = undefined;
            if(var5) { _fun0013_ip = 60; continue _fun0013 }
case 37:
            var7 = var11.id;
case 60:
            var14 = _closure1_slot13;
            var18 = undefined;
            var17 = var7;
            var16 = var9;
            var15 = var12;
            var5 = var18[var8](var17, var16, var15, var14, var13);
            if(var5) { _fun0013_ip = 61; continue _fun0013 }
case 62:
            var5 = false;
            return var5;
case 61:
            var8 = _closure1_slot14;
            var7 = var8.get;
            var9 = _closure1_slot16;
            var5 = {};
            var13 = var2 == var11;
            var12 = undefined;
            if(var13) { _fun0013_ip = 63; continue _fun0013 }
case 64:
            var12 = var11.id;
case 63:
            var13 = var2 != var12;
            var11 = '???';
            if(!var13) { _fun0013_ip = 65; continue _fun0013 }
case 66:
            var11 = var12;
case 65:
            var5['userId'] = var11;
            var5['channelId'] = var10;
            var5 = var9.bind(var4)(var5);
            var8 = var7.bind(var8)(var5);
            var5 = _closure1_slot9;
            var5 = var5.screenshakeEnabled;
            if(!var5) { _fun0013_ip = 67; continue _fun0013 }
case 26:
            var5 = _closure1_slot9;
            var7 = var5.screenshakeEnabledLocations;
            var5 = _closure1_slot11;
            var5 = var5.MENTION;
            var5 = var7[var5];
            if(!var5) { _fun0013_ip = 67; continue _fun0013 }
case 68:
            if(!(var2 != var6)) { _fun0013_ip = 67; continue _fun0013 }
case 69:
            var5 = var6.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var5.bind(var6)(var3);
            if(!(var2 == var3)) { _fun0013_ip = 70; continue _fun0013 }
case 67:
            var3 = false;
            return var3;
case 70:
            if(!(var2 == var8)) { _fun0013_ip = 71; continue _fun0013 }
case 72:
            var3 = global;
            var5 = var3.Math;
            var3 = var5.random;
            var5 = var3.bind(var5)();
            var3 = 4;
            var5 = var3 * var5;
            _fun0013_ip = 73; continue _fun0013;
case 71:
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
            if(!var6) { _fun0013_ip = 74; continue _fun0013 }
case 75:
            var2 = var3;
case 74:
            var5 = var2;
case 73:
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