// app/modules/rewards/ProgramRewardsStore.tsx
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot16;
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
            var7 = _closure1_slot16;
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
    var _closure1_slot15 = var1;
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
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var5 = function updateTtl() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot12;
            var1 = var2.getValue;
            var3 = var1.bind(var2)();
            var6 = null;
            if(!(var6 != var3)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var11 = global;
            var1 = var11.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var16 = var2;
            var1 = new var16[var1](var15);
            var10 = var1 instanceof Object ? var1 : var2;
            var2 = _closure1_slot15;
            var1 = var3.values;
            var1 = var1.bind(var3)();
            var9 = undefined;
            var8 = var2.bind(var9)(var1);
            var2 = var8.bind(var9)();
            var1 = var2.done;
            var7 = 8;
            var4 = -1;
            var3 = var2;
            if(var1) { _fun0005_ip = 14; continue _fun0005 }
case 42:
            var1 = var3.value;
            var12 = var11.Date;
            var15 = var1.next_reward_date;
            var2 = var12.prototype;
            var2 = Object.create(var2, {constructor: {value: var12}});
            var16 = var2;
            var1 = new var16[var12](var15, var14);
            var2 = var1 instanceof Object ? var1 : var2;
            var12 = var11.isNaN;
            var1 = var2.getTime;
            var1 = var1.bind(var2)();
            var1 = var12.bind(var9)(var1);
            if(var1) { _fun0005_ip = 28; continue _fun0005 }
case 43:
            if(!(!(var10 >= var2))) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var12 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var12.bind(var9)(var1);
            var1 = var1.bind(var9)(var2, var4);
            if(!(var10 >= var1)) { _fun0005_ip = 28; continue _fun0005 }
case 24:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 9;
            var1 = var13[var1];
            var1 = var12.bind(var9)(var1);
            var2 = var1.bind(var9)(var2, var10);
            var1 = {};
            var12 = _closure1_slot13;
            var12 = var12.LESS_THAN_24H_BEFORE_REWARD;
            var1['state'] = var12;
            var1['msUntilReward'] = var2;
            _fun0005_ip = 12; continue _fun0005;
case 44:
            var2 = {};
            var12 = _closure1_slot13;
            var12 = var12.PAST_REWARD_DATE;
            var2['state'] = var12;
            var1 = var2;
            _fun0005_ip = 12; continue _fun0005;
case 28:
            var12 = var8.bind(var9)();
            var2 = var12.done;
            var3 = var12;
            if(!var2) { _fun0005_ip = 42; continue _fun0005 }
case 14:
            var2 = {};
            var3 = _closure1_slot13;
            var3 = var3.MORE_THAN_24H_BEFORE_REWARD;
            var2['state'] = var3;
            var1 = var2;
            _fun0005_ip = 12; continue _fun0005;
case 40:
            var2 = {};
            var3 = _closure1_slot13;
            var3 = var3.MORE_THAN_24H_BEFORE_REWARD;
            var2['state'] = var3;
            var1 = var2;
case 12:
            var7 = var1.state;
            var4 = var1.msUntilReward;
            var3 = _closure1_slot12;
            var2 = var3.setTtl;
            var1 = _closure1_slot13;
            var1 = var1.LESS_THAN_24H_BEFORE_REWARD;
            if(!(var1 !== var7)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var1 = _closure1_slot13;
            var1 = var1.MORE_THAN_24H_BEFORE_REWARD;
            if(!(var1 !== var7)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var1 = _closure1_slot13;
            var1 = var1.PAST_REWARD_DATE;
case 48:
            var1 = _closure1_slot11;
            _fun0005_ip = 50; continue _fun0005;
case 46:
            if(!(var6 == var4)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var4 = _closure1_slot11;
case 51:
            var1 = var4;
case 50:
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var5;
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
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = {};
    var4 = 'NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD';
    var2['NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD'] = var4;
    var4 = 'MISSING_NECESSARY_PREMIUM_STATUS';
    var2['MISSING_NECESSARY_PREMIUM_STATUS'] = var4;
    var4 = 'CACHE_SHOULD_NOT_FETCH';
    var2['CACHE_SHOULD_NOT_FETCH'] = var4;
    var _closure1_slot10 = var2;
    var9 = 86400000;
    var _closure1_slot11 = var9;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var11 = var4.NetworkTtlCache;
    var4 = {};
    var4['ttlMs'] = var9;
    var9 = var11.prototype;
    var9 = Object.create(var9, {constructor: {value: var11}});
    var15 = var9;
    var14 = var4;
    var4 = new var15[var11](var14, var13);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot12 = var4;
    var4 = {};
    var9 = 'MORE_THAN_24H_BEFORE_REWARD';
    var4['MORE_THAN_24H_BEFORE_REWARD'] = var9;
    var9 = 'LESS_THAN_24H_BEFORE_REWARD';
    var4['LESS_THAN_24H_BEFORE_REWARD'] = var9;
    var9 = 'PAST_REWARD_DATE';
    var4['PAST_REWARD_DATE'] = var9;
    var _closure1_slot13 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function ProgramRewardsStore(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0006_ip = 13; continue _fun0006 }
case 53:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0006_ip = 54; continue _fun0006;
case 13:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 54:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var1 = var2.getState;
                        var6 = var1.bind(var2)();
                        var3 = {};
                        var4 = _closure1_slot15;
                        var5 = var6.cache;
                        var2 = null;
                        var9 = var2 == var5;
                        var7 = undefined;
                        var1 = undefined;
                        if(var9) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                        var1 = var5.value;
case 55:
                        if(!(var2 == var1)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                        var1 = new Array(0);
case 57:
                        var14 = var4.bind(var7)(var1);
                        var9 = var14.bind(var7)();
                        var1 = var9.done;
                        var4 = global;
                        var13 = 2;
                        var5 = 0;
                        var12 = 1;
                        var11 = 10;
                        var10 = 'NITRO';
                        if(var1) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                        var16 = var9.value;
                        var1 = _closure1_slot3;
                        var1 = var1.bind(var7)(var16, var13);
                        var18 = var1[var5];
                        var16 = var1[var12];
                        var17 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var11];
                        var1 = var17.bind(var7)(var1);
                        var1 = var1.RewardProgram;
                        var17 = var1.NITRO;
                        var1 = var10;
                        if(!(var18 !== var17)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                        var17 = var4.String;
                        var1 = var17.bind(var7)(var18);
case 61:
                        var3[var1] = var16;
                        var16 = var14.bind(var7)();
                        var1 = var16.done;
                        var9 = var16;
                        if(!var1) { _fun0007_ip = 60; continue _fun0007 }
case 59:
                        var1 = {};
                        var9 = _closure3_slot0;
                        var8 = var9.getStatus;
                        var8 = var8.bind(var9)();
                        var1['status'] = var8;
                        var8 = var9.isFetching;
                        var8 = var8.bind(var9)();
                        var1['isFetching'] = var8;
                        var8 = var9.isFetched;
                        var8 = var8.bind(var9)();
                        var1['isFetched'] = var8;
                        var8 = var9.hasCachedValue;
                        var8 = var8.bind(var9)();
                        var1['hasCachedValue'] = var8;
                        var8 = var9.isError;
                        var8 = var8.bind(var9)();
                        var1['isError'] = var8;
                        var8 = var9.isReady;
                        var8 = var8.bind(var9)();
                        var1['isReady'] = var8;
                        var8 = var9.shouldFetch;
                        var8 = var8.bind(var9)();
                        var1['shouldFetch'] = var8;
                        var6 = var6.cache;
                        var8 = var2 == var6;
                        var7 = undefined;
                        if(var8) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                        var7 = var6.fetchedAt;
case 63:
                        var8 = var2 != var7;
                        var6 = null;
                        if(!var8) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                        var6 = var7;
case 65:
                        var1['fetchedAt'] = var6;
                        var6 = var4.Object;
                        var4 = var6.keys;
                        var4 = var4.bind(var6)(var3);
                        var4 = var4.length;
                        var4 = var4 > var5;
                        var2 = null;
                        if(!var4) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                        var2 = var3;
case 67:
                        var1['rewards'] = var2;
                        return var1;
                    }
                };
                var1['__getLocalVars'] = var3;
                var2 = function() {
                    var1 = {};
                    var4 = {};
                    var3 = 'PROGRAM_REWARDS_FETCH';
                    var4['type'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var1['preDispatches'] = var3;
                    var3 = 'PROGRAM_REWARDS_FETCH_SUCCESS';
                    var1['actionType'] = var3;
                    var3 = function buildPayload(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.rewards;
                            var1 = null;
                            var3 = var1 != var2;
                            var4 = null;
                            if(!var3) { _fun0008_ip = 35; continue _fun0008 }
case 33:
                            var4 = var2;
case 35:
                            if(!(var1 != var4)) { _fun0008_ip = 42; continue _fun0008 }
case 69:
                            var2 = global;
                            var3 = var2.Object;
                            var1 = var3.keys;
                            var1 = var1.bind(var3)(var4);
                            var3 = var1.length;
                            var1 = 0;
                            if(!(var1 !== var3)) { _fun0008_ip = 42; continue _fun0008 }
case 32:
                            var1 = {};
                            var3 = var2.Object;
                            var2 = var3.entries;
                            var4 = var2.bind(var3)(var4);
                            var3 = var4.map;
                            var2 = function(arg1) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    var6 = arg1;
                                    var1 = var6[Symbol.iterator];
                                    var6 = var1().next;
                                    var2 = var6().value;
                                    var3 = var1;
                                    var5 = undefined;
                                    var4 = var3 === var5;
                                    var3 = undefined;
                                    if(var4) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                                    var3 = var2;
case 69:
                                    var2 = undefined;
                                    if(var4) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                                    var7 = var6().value;
                                    var6 = var1;
                                    var6 = var6 === var5;
                                    var2 = undefined;
                                    var4 = var6;
                                    if(var6) { _fun0009_ip = 71; continue _fun0009 }
case 73:
                                    var2 = var7;
                                    var4 = var6;
case 71:
                                    if(var4) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                                    var1.return();
case 74:
                                    var1 = {};
                                    var10 = var1;
                                    var9 = var2;
                                    var2 = copyDataProperties(var10, var9);
                                    var2 = 'NITRO';
                                    if(!(var2 !== var3)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                                    var2 = global;
                                    var2 = var2.Number;
                                    var3 = var2.bind(var5)(var3);
                                    _fun0009_ip = 78; continue _fun0009;
case 76:
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 10;
                                    var2 = var6[var2];
                                    var2 = var4.bind(var5)(var2);
                                    var2 = var2.RewardProgram;
                                    var3 = var2.NITRO;
case 78:
                                    var2 = 'reward_program';
                                    var1[1] = var3;
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            var1['programRewards'] = var2;
                            _fun0008_ip = 79; continue _fun0008;
case 42:
                            var2 = {};
                            var3 = new Array(0);
                            var2['programRewards'] = var3;
                            var1 = var2;
case 79:
                            return var1;
                        }
                    };
                    var1['buildPayload'] = var3;
                    var2 = function getPurgeVars() {
                        var1 = {};
                        var2 = null;
                        var1['rewards'] = var2;
                        return var1;
                    };
                    var1['getPurgeVars'] = var2;
                    return var1;
                };
                var1['__getLocalVarsEditConfig'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var6 = arg1;
                var4 = this;
                var3 = var4.waitFor;
                var1 = _closure1_slot9;
                var1 = var3.bind(var4)(var1);
                var4 = null;
                var5 = var4 == var6;
                var1 = undefined;
                var3 = undefined;
                if(var5) { _fun0010_ip = 80; continue _fun0010 }
case 81:
                var3 = var6.cache;
case 80:
                if(!(var4 != var3)) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                var3 = global;
                var5 = var3.Map;
                var3 = var6.cache;
                var8 = var3.value;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var9 = var4;
                var3 = new var9[var5](var8, var7);
                var7 = var3 instanceof Object ? var3 : var4;
                var5 = _closure1_slot12;
                var4 = var5.restore;
                var3 = {};
                var3['value'] = var7;
                var6 = var6.cache;
                var6 = var6.fetchedAt;
                var3['fetchedAt'] = var6;
                var3 = var4.bind(var5)(var3);
case 82:
                var2 = _closure1_slot17;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure1_slot12;
                var1 = var2.serialize;
                var4 = var1.bind(var2)();
                var1 = {};
                var2 = null;
                var3 = var2 != var4;
                if(!var3) { _fun0011_ip = 84; continue _fun0011 }
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
case 84:
                var1['cache'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getTotalDaysInDuration';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = this;
                var2 = var3.getRewardForProgram;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var2)) { _fun0012_ip = 79; continue _fun0012 }
case 85:
                var6 = var2.total_countdown_duration_ms;
                var3 = var1 == var6;
                var2 = null;
                if(var3) { _fun0012_ip = 86; continue _fun0012 }
case 87:
                var3 = 0;
                var3 = var6 <= var3;
                var2 = null;
                if(var3) { _fun0012_ip = 86; continue _fun0012 }
case 88:
                var3 = global;
                var5 = var3.Math;
                var4 = var5.ceil;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 11;
                var7 = var7[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var7);
                var3 = var3.Millis;
                var3 = var3.DAY;
                var3 = var6 / var3;
                var2 = var4.bind(var5)(var3);
case 86:
                return var2;
case 79:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot12;
            var1 = var2.isLoading;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isFetched';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot12;
            var1 = var2.isValid;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasCachedValue';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot12;
            var1 = var2.getValue;
            var2 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isReady';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = this;
                var1 = var4.isFetching;
                var1 = var1.bind(var4)();
                var1 = !var1;
                if(!var1) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                var2 = var4.hasCachedValue;
                var2 = var2.bind(var4)();
                if(var2) { _fun0013_ip = 91; continue _fun0013 }
case 72:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 12;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.isEligibleForAnyProgramReward;
                var3 = 'ProgramRewardsStore';
                var3 = var5.bind(var6)(var3);
                var2 = !var3;
case 91:
                if(var2) { _fun0013_ip = 92; continue _fun0013 }
case 93:
                var3 = var4.isError;
                var2 = var3.bind(var4)();
case 92:
                if(var2) { _fun0013_ip = 94; continue _fun0013 }
case 95:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 12;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.hasNecessaryPremiumSubscriptionStatus;
                var3 = var3.bind(var4)();
                var2 = !var3;
case 94:
                var1 = var2;
case 89:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'shouldFetch';
        var5['key'] = var7;
        var7 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 12;
                var1 = var1[var6];
                var5 = undefined;
                var3 = var2.bind(var5)(var1);
                var2 = var3.isEligibleForAnyProgramReward;
                var1 = 'ProgramRewardsStore.shouldFetch';
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0014_ip = 96; continue _fun0014 }
case 56:
                var1 = {};
                var2 = false;
                var1['shouldFetch'] = var2;
                var2 = _closure1_slot10;
                var2 = var2.NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD;
                var1['reason'] = var2;
                _fun0014_ip = 97; continue _fun0014;
case 96:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.hasNecessaryPremiumSubscriptionStatus;
                var2 = var2.bind(var3)();
                if(var2) { _fun0014_ip = 98; continue _fun0014 }
case 42:
                var2 = {};
                var3 = false;
                var2['shouldFetch'] = var3;
                var3 = _closure1_slot10;
                var3 = var3.MISSING_NECESSARY_PREMIUM_STATUS;
                var2['reason'] = var3;
                _fun0014_ip = 99; continue _fun0014;
case 98:
                var5 = _closure1_slot12;
                var3 = var5.shouldFetch;
                var3 = var3.bind(var5)();
                if(var3) { _fun0014_ip = 100; continue _fun0014 }
case 101:
                var3 = {};
                var5 = false;
                var3['shouldFetch'] = var5;
                var4 = _closure1_slot10;
                var4 = var4.CACHE_SHOULD_NOT_FETCH;
                var3['reason'] = var4;
                _fun0014_ip = 102; continue _fun0014;
case 100:
                var4 = {};
                var5 = true;
                var4['shouldFetch'] = var5;
                var3 = var4;
case 102:
                var2 = var3;
case 99:
                var1 = var2;
case 97:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isError';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot12;
            var1 = var2.isError;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getStatus';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot12;
            var1 = var2.getStatus;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getRewardForProgram';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = _closure1_slot12;
                var1 = var2.getValue;
                var4 = var1.bind(var2)();
                var1 = null;
                var2 = var1 == var4;
                var1 = undefined;
                if(var2) { _fun0015_ip = 103; continue _fun0015 }
case 38:
                var3 = var4.get;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 103:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'forceExpire';
        var5['key'] = var7;
        var6 = function value() {
            var2 = _closure1_slot12;
            var1 = var2.forceExpire;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'ProgramRewardsStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = 14;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var11 = function handleReset() {
        var2 = _closure1_slot12;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var11;
    var11 = function handleProgramRewardsFetch() {
        var2 = _closure1_slot12;
        var1 = var2.setLoading;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var4['PROGRAM_REWARDS_FETCH'] = var11;
    var11 = function handleProgramRewardsFetchSuccess(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var6 = var1.programRewards;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot12;
            var4 = var5.isLoading;
            var4 = var4.bind(var5)();
            if(var4) { _fun0016_ip = 103; continue _fun0016 }
case 81:
            var4 = false;
            return var4;
case 103:
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
            var4 = _closure1_slot12;
            var3 = var4.setValue;
            var3 = var3.bind(var4)(var5);
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var4['PROGRAM_REWARDS_FETCH_SUCCESS'] = var11;
    var10 = function handleProgramRewardsFetchFailure() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = _closure1_slot12;
            var2 = var3.isLoading;
            var2 = var2.bind(var3)();
            if(var2) { _fun0017_ip = 70; continue _fun0017 }
case 33:
            var2 = false;
            return var2;
case 70:
            var2 = _closure1_slot12;
            var1 = var2.setError;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        }
    };
    var4['PROGRAM_REWARDS_FETCH_FAILURE'] = var10;
    var4['CURRENT_USER_UPDATE'] = var5;
    var4['CONNECTION_OPEN'] = var5;
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
    var5 = 'modules/rewards/ProgramRewardsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['DidNotFetchReason'] = var2;
    return var1;
})();