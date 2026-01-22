// app/modules/rewards/ProgramRewardsStore.tsx
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 40; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var4 = function updateTtl() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.isStaffEnv;
            var6 = _closure1_slot8;
            var3 = var6.getCurrentUser;
            var3 = var3.bind(var6)();
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot11;
            if(var3) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var3 = var4.getValue;
            var7 = var3.bind(var4)();
            var3 = null;
            var3 = var3 == var7;
            var6 = false;
            if(var3) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var13 = global;
            var3 = var13.Date;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var20 = var5;
            var3 = new var20[var3](var19);
            var12 = var3 instanceof Object ? var3 : var5;
            var5 = _closure1_slot13;
            var3 = var7.values;
            var3 = var3.bind(var7)();
            var11 = var5.bind(var1)(var3);
            var5 = var11.bind(var1)();
            var3 = var5.done;
            var10 = 8;
            var9 = 1;
            var8 = 9;
            var6 = false;
            if(var3) { _fun0005_ip = 43; continue _fun0005 }
case 45:
            var3 = var5.value;
            var16 = var13.Date;
            var19 = var3.next_reward_date;
            var15 = var16.prototype;
            var15 = Object.create(var15, {constructor: {value: var16}});
            var20 = var15;
            var3 = new var20[var16](var19, var18);
            var17 = var3 instanceof Object ? var3 : var15;
            var15 = _closure1_slot1;
            var3 = _closure1_slot2;
            var16 = var3[var10];
            var16 = var15.bind(var1)(var16);
            var16 = var16.bind(var1)(var17, var9);
            var3 = var3[var8];
            var15 = var15.bind(var1)(var3);
            var3 = {};
            var3['start'] = var17;
            var3['end'] = var16;
            var3 = var15.bind(var1)(var12, var3);
            var6 = true;
            if(var3) { _fun0005_ip = 43; continue _fun0005 }
case 46:
            var15 = var11.bind(var1)();
            var3 = var15.done;
            var5 = var15;
            var6 = false;
            if(!var3) { _fun0005_ip = 45; continue _fun0005 }
case 43:
            var5 = _closure1_slot11;
            var3 = var5.setTtl;
            if(var6) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var2 = _closure1_slot10;
            var2 = var3.bind(var5)(var2);
            _fun0005_ip = 49; continue _fun0005;
case 47:
            var2 = 3600000;
            var2 = var3.bind(var5)(var2);
            _fun0005_ip = 49; continue _fun0005;
case 41:
            var3 = var4.setTtl;
            var2 = 30000;
            var2 = var3.bind(var4)(var2);
case 49:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.PremiumTypes;
    var _closure1_slot9 = var2;
    var8 = 86400000;
    var _closure1_slot10 = var8;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.NetworkTtlCache;
    var2 = {};
    var2['ttlMs'] = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {constructor: {value: var10}});
    var14 = var8;
    var13 = var2;
    var2 = new var14[var10](var13, var12);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot11 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ProgramRewardsStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 52; continue _fun0006;
case 50:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 52:
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = arg1;
                var4 = this;
                var3 = var4.waitFor;
                var1 = _closure1_slot8;
                var1 = var3.bind(var4)(var1);
                var4 = null;
                var5 = var4 == var6;
                var1 = undefined;
                var3 = undefined;
                if(var5) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var3 = var6.cache;
case 53:
                if(!(var4 != var3)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                var3 = global;
                var5 = var3.Map;
                var3 = var6.cache;
                var8 = var3.value;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var9 = var4;
                var3 = new var9[var5](var8, var7);
                var7 = var3 instanceof Object ? var3 : var4;
                var5 = _closure1_slot11;
                var4 = var5.restore;
                var3 = {};
                var3['value'] = var7;
                var6 = var6.cache;
                var6 = var6.fetchedAt;
                var3['fetchedAt'] = var6;
                var3 = var4.bind(var5)(var3);
case 55:
                var2 = _closure1_slot15;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(15);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure1_slot11;
                var1 = var2.serialize;
                var4 = var1.bind(var2)();
                var1 = {};
                var2 = null;
                var3 = var2 != var4;
                if(!var3) { _fun0008_ip = 57; continue _fun0008 }
case 38:
                var3 = {};
                var5 = global;
                var7 = var5.Array;
                var6 = var7.from;
                var8 = var4.value;
                var5 = var8.entries;
                var5 = var5.bind(var8)();
                var5 = var6.bind(var7)(var5);
                var3['value'] = var5;
                var4 = var4.fetchedAt;
                var3['fetchedAt'] = var4;
                var2 = var3;
case 57:
                var1['cache'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'passesGeneralUIInvariant';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var1 = var3.isInProperTreatments;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 35; continue _fun0009 }
case 58:
                var1 = false;
                return var1;
case 35:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 11;
                var2 = var2[var6];
                var5 = undefined;
                var2 = var7.bind(var5)(var2);
                var2 = var2.RewardProgram;
                var2 = var2.NITRO;
                if(!(var4 === var2)) { _fun0009_ip = 47; continue _fun0009 }
case 34:
                var2 = var3.getRewardForProgram;
                var3 = var2.bind(var3)(var4);
                var2 = null;
                if(!(var2 != var3)) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                var8 = var3.next_reward_date;
                var3 = var3.program_current_state;
                if(!(var2 != var3)) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                if(!(var2 != var8)) { _fun0009_ip = 26; continue _fun0009 }
case 63:
                var2 = '';
                if(!(var2 !== var8)) { _fun0009_ip = 26; continue _fun0009 }
case 64:
                var2 = global;
                var4 = var2.Date;
                var7 = var4.prototype;
                var7 = Object.create(var7, {constructor: {value: var4}});
                var10 = var7;
                var9 = var8;
                var4 = new var10[var4](var9, var8);
                var7 = var4 instanceof Object ? var4 : var7;
                var4 = var7.getTime;
                var4 = var4.bind(var7)();
                var8 = var2.Number;
                var7 = var8.isNaN;
                var7 = var7.bind(var8)(var4);
                if(var7) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                var7 = var2.Date;
                var2 = var7.now;
                var2 = var2.bind(var7)();
                if(!(var4 < var2)) { _fun0009_ip = 47; continue _fun0009 }
case 65:
                var2 = false;
                return var2;
case 26:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ProgramCurrentState;
                var7 = var2.PAYMENT_PROCESSING;
                var2 = new Array(2);
                var2[0] = var7;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.ProgramCurrentState;
                var1 = var1.PAYMENT_ERROR;
                var2[1] = var1;
                var1 = var2.includes;
                var1 = var1.bind(var2)(var3);
                if(var1) { _fun0009_ip = 47; continue _fun0009 }
case 67:
                var1 = false;
                return var1;
case 47:
                var1 = true;
                return var1;
case 61:
                var1 = false;
                return var1;
case 59:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'passesProgressBarInvariant';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var1 = var3.isInProperTreatments;
                var1 = var1.bind(var3)();
                if(var1) { _fun0010_ip = 35; continue _fun0010 }
case 58:
                var1 = false;
                return var1;
case 35:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.RewardProgram;
                var1 = var1.NITRO;
                if(!(var4 === var1)) { _fun0010_ip = 68; continue _fun0010 }
case 34:
                var1 = var3.getRewardForProgram;
                var4 = var1.bind(var3)(var4);
                var1 = null;
                if(!(var1 != var4)) { _fun0010_ip = 69; continue _fun0010 }
case 60:
                var3 = var4.total_countdown_duration_ms;
                if(!(var1 != var3)) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                var6 = 0;
                if(!(!(var3 <= var6))) { _fun0010_ip = 70; continue _fun0010 }
case 72:
                var9 = var4.next_reward_date;
                if(!(var1 != var9)) { _fun0010_ip = 73; continue _fun0010 }
case 55:
                var1 = '';
                if(!(var1 !== var9)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                var1 = global;
                var4 = var1.Date;
                var6 = var4.prototype;
                var6 = Object.create(var6, {constructor: {value: var4}});
                var12 = var6;
                var11 = var9;
                var4 = new var12[var4](var11, var10);
                var6 = var4 instanceof Object ? var4 : var6;
                var4 = var6.getTime;
                var6 = var4.bind(var6)();
                var7 = var1.Number;
                var4 = var7.isNaN;
                var4 = var4.bind(var7)(var6);
                if(var4) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                var7 = var1.Date;
                var4 = var7.now;
                var4 = var4.bind(var7)();
                if(!(!(var6 <= var4))) { _fun0010_ip = 75; continue _fun0010 }
case 77:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 12;
                var2 = var6[var2];
                var7 = var4.bind(var5)(var2);
                var2 = var1.Date;
                var8 = var2.prototype;
                var8 = Object.create(var8, {constructor: {value: var2}});
                var12 = var8;
                var11 = var9;
                var2 = new var12[var2](var11, var10);
                var2 = var2 instanceof Object ? var2 : var8;
                var1 = var1.Date;
                var8 = var1.prototype;
                var8 = Object.create(var8, {constructor: {value: var1}});
                var12 = var8;
                var1 = new var12[var1](var11);
                var1 = var1 instanceof Object ? var1 : var8;
                var2 = var7.bind(var5)(var2, var1);
                var1 = 13;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.Millis;
                var1 = var1.DAY;
                var1 = var3 / var1;
                if(!(!(var2 > var1))) { _fun0010_ip = 78; continue _fun0010 }
case 68:
                var1 = true;
                return var1;
case 78:
                var1 = false;
                return var1;
case 75:
                var1 = false;
                return var1;
case 73:
                var1 = false;
                return var1;
case 70:
                var1 = false;
                return var1;
case 69:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasNecessaryPremiumSubscriptionStatus';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 14;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.isPremiumExactly;
            var5 = _closure1_slot8;
            var2 = var5.getCurrentUser;
            var2 = var2.bind(var5)();
            var1 = _closure1_slot9;
            var1 = var1.TIER_2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isInProperTreatments';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getPremiumRewardsOrbsExperiment;
            var1 = 'ProgramRewardsStore';
            var1 = var2.bind(var3)(var1);
            var1 = var1.isInTreatment;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot11;
            var1 = var2.isLoading;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isFetched';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot11;
            var1 = var2.isValid;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'hasCachedValue';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot11;
            var1 = var2.getValue;
            var2 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isReady';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = this;
                var1 = var4.isFetching;
                var1 = var1.bind(var4)();
                var1 = !var1;
                if(!var1) { _fun0011_ip = 79; continue _fun0011 }
case 58:
                var2 = var4.hasCachedValue;
                var2 = var2.bind(var4)();
                if(var2) { _fun0011_ip = 56; continue _fun0011 }
case 80:
                var3 = var4.isInProperTreatments;
                var3 = var3.bind(var4)();
                var2 = !var3;
case 56:
                if(var2) { _fun0011_ip = 11; continue _fun0011 }
case 81:
                var3 = var4.isError;
                var2 = var3.bind(var4)();
case 11:
                if(var2) { _fun0011_ip = 4; continue _fun0011 }
case 82:
                var3 = var4.hasNecessaryPremiumSubscriptionStatus;
                var3 = var3.bind(var4)();
                var2 = !var3;
case 4:
                var1 = var2;
case 79:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'shouldFetch';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = this;
                var1 = var3.isInProperTreatments;
                var1 = var1.bind(var3)();
                var2 = !var1;
                if(var2) { _fun0012_ip = 83; continue _fun0012 }
case 58:
                var1 = var3.hasNecessaryPremiumSubscriptionStatus;
                var1 = var1.bind(var3)();
                var2 = !var1;
case 83:
                var1 = !var2;
                if(var2) { _fun0012_ip = 40; continue _fun0012 }
case 84:
                var3 = _closure1_slot11;
                var2 = var3.shouldFetch;
                var1 = var2.bind(var3)();
case 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isError';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot11;
            var1 = var2.isError;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getStatus';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot11;
            var1 = var2.getStatus;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getRewardForProgram';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = _closure1_slot11;
                var1 = var2.getValue;
                var4 = var1.bind(var2)();
                var1 = null;
                var2 = var1 == var4;
                var1 = undefined;
                if(var2) { _fun0013_ip = 85; continue _fun0013 }
case 38:
                var3 = var4.get;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 85:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'forceExpire';
        var5['key'] = var7;
        var6 = function value() {
            var2 = _closure1_slot11;
            var1 = var2.forceExpire;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[14] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ProgramRewardsStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 17;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleReset() {
        var2 = _closure1_slot11;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var10;
    var10 = function handleProgramRewardsFetch() {
        var2 = _closure1_slot11;
        var1 = var2.setLoading;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['PROGRAM_REWARDS_FETCH'] = var10;
    var10 = function handleProgramRewardsFetchSuccess(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var6 = var1.programRewards;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot11;
            var4 = var5.isLoading;
            var4 = var4.bind(var5)();
            if(var4) { _fun0014_ip = 53; continue _fun0014 }
case 86:
            var4 = false;
            return var4;
case 53:
            var4 = global;
            var4 = var4.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var8 = var5;
            var4 = new var8[var4](var7);
            var5 = var4 instanceof Object ? var4 : var5;
            _closure2_slot0 = var5;
            var4 = var6.forEach;
            var3 = function(arg1) {
                var4 = arg1;
                var3 = _closure2_slot0;
                var2 = var3.set;
                var1 = var4.reward_program;
                var1 = var2.bind(var3)(var1, var4);
                var1 = undefined;
                return var1;
            };
            var3 = var4.bind(var6)(var3);
            var4 = _closure1_slot11;
            var3 = var4.setValue;
            var3 = var3.bind(var4)(var5);
            var2 = _closure1_slot15;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['PROGRAM_REWARDS_FETCH_SUCCESS'] = var10;
    var9 = function handleProgramRewardsFetchFailure() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = _closure1_slot11;
            var2 = var3.isLoading;
            var2 = var2.bind(var3)();
            if(var2) { _fun0015_ip = 87; continue _fun0015 }
case 33:
            var2 = false;
            return var2;
case 87:
            var2 = _closure1_slot11;
            var1 = var2.setError;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        }
    };
    var2['PROGRAM_REWARDS_FETCH_FAILURE'] = var9;
    var2['CURRENT_USER_UPDATE'] = var4;
    var2['CONNECTION_OPEN'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rewards/ProgramRewardsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();