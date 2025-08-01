// app/modules/guild_role_subscriptions/native/RoleTierEditStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var9;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot10;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot10;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function keyUpdater(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var4 = _closure2_slot1;
                var1 = _closure3_slot0;
                var2[var4] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        return var1;
    };
    var _closure1_slot11 = var1;
    var4 = function usePriceTiers(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot8;
        var4 = _closure1_slot0;
        var9 = _closure1_slot3;
        var3 = 5;
        var3 = var9[var3];
        var7 = undefined;
        var3 = var4.bind(var7)(var3);
        var4 = var3.shallow;
        var3 = function(arg1) {
            var2 = arg1;
            var3 = var2.priceTiers;
            var1 = new Array(3);
            var1[0] = var3;
            var3 = var2.priceTierState;
            var1[1] = var3;
            var2 = var2.loadPriceTiers;
            var1[2] = var2;
            return var1;
        };
        var5 = var5.bind(var7)(var3, var4);
        var4 = _closure1_slot4;
        var3 = 3;
        var8 = var4.bind(var7)(var5, var3);
        var3 = 0;
        var5 = var8[var3];
        var _closure2_slot1 = var5;
        var3 = 1;
        var4 = var8[var3];
        var _closure2_slot2 = var4;
        var3 = 2;
        var3 = var8[var3];
        var _closure2_slot3 = var3;
        var3 = function onRefresh(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure2_slot1;
                var2 = null;
                var2 = var2 == var3;
                if(!var2) { _fun0004_ip = 37; continue _fun0004 }
 16:
                var4 = _closure2_slot2;
                var3 = _closure1_slot6;
                var3 = var3.LOADING;
                var2 = var4 !== var3;
 37:
                if(!var2) { _fun0004_ip = 54; continue _fun0004 }
 40:
                var3 = _closure2_slot3;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
 54:
                var1 = undefined;
                return var1;
            }
        };
        var _closure2_slot4 = var3;
        var8 = _closure1_slot1;
        var6 = 6;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var1 = function() {
            var3 = _closure2_slot4;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var6.bind(var7)(var1);
        var1 = {};
        var1['tiers'] = var5;
        var1['state'] = var4;
        var1['onRefresh'] = var3;
        var1['guildId'] = var2;
        return var1;
    };
    var _closure1_slot12 = var4;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var11 = 0;
    var6 = var9[var11];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var10 = 1;
    var6 = var9[var10];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = {};
    var6['IDLE'] = var11;
    var7 = 'IDLE';
    var6[var11] = var7;
    var6['LOADING'] = var10;
    var7 = 'LOADING';
    var6[var10] = var7;
    var10 = 2;
    var6['ERROR'] = var10;
    var7 = 'ERROR';
    var6[var10] = var7;
    var _closure1_slot6 = var6;
    var10 = var5.Object;
    var7 = var10.freeze;
    var5 = {'currentScene': null, 'groupCover': null, 'groupDescription': '', 'groupIsFullGate': false};
    var5 = var7.bind(var10)(var5);
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var9[var5];
    var10 = var8.bind(var1)(var5);
    var7 = var10.createWithEqualityFn;
    var5 = function(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var1 = {};
        var9 = _closure1_slot7;
        var10 = var1;
        var4 = copyDataProperties(var10, var9);
        var5 = function setScene(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['currentScene'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var4 = 'setScene';
        var1[var4] = var5;
        var6 = _closure1_slot11;
        var5 = undefined;
        var4 = 'groupCover';
        var8 = var6.bind(var5)(var7, var4);
        var4 = 'setGroupCover';
        var1[var4] = var8;
        var4 = 'groupDescription';
        var8 = var6.bind(var5)(var7, var4);
        var4 = 'setGroupDescription';
        var1[var4] = var8;
        var4 = 'groupIsFullGate';
        var5 = var6.bind(var5)(var7, var4);
        var4 = 'setGroupIsFullGate';
        var1[var4] = var5;
        var5 = null;
        var4 = 'priceTiers';
        var1[var4] = var5;
        var3 = _closure1_slot6;
        var4 = var3.IDLE;
        var3 = 'priceTierState';
        var1[var3] = var4;
        var4 = function loadPriceTiers(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot5;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 193; continue _fun0005 }
 12:
                        var2 = undefined;
                        var _closure5_slot0 = var2;
 18: // try_start_0
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var7 = 2;
                        var4 = var8[var7];
                        var9 = var6.bind(var2)(var4);
                        var6 = var9.batchUpdates;
                        var4 = function() {
                            var3 = _closure2_slot0;
                            var2 = {};
                            var1 = _closure1_slot6;
                            var1 = var1.LOADING;
                            var2['priceTierState'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var4 = var6.bind(var9)(var4);
                        var6 = _closure1_slot2;
                        var4 = 4;
                        var4 = var8[var4];
                        var8 = var6.bind(var2)(var4);
                        var6 = var8.getPriceTiers;
                        var4 = _closure3_slot0;
                        var4 = var6.bind(var8)(var4);
                        SaveGenerator(address=97);
 95:
                        return var4;
 97:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(var6) { _fun0005_ip = 144; continue _fun0005 }
 103:
                        _closure5_slot0 = var4;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var5 = var5[var7];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.batchUpdates;
                        var5 = function() {
                            var3 = _closure2_slot0;
                            var2 = {};
                            var1 = _closure5_slot0;
                            var2['priceTiers'] = var1;
                            var1 = _closure1_slot6;
                            var1 = var1.IDLE;
                            var2['priceTierState'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var5 = var6.bind(var7)(var5);
 142: // try_end0
                        _fun0005_ip = 190; continue _fun0005;
 144:
                        return var4;
 147: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var4 = 2;
                        var4 = var6[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.batchUpdates;
                        var3 = function() {
                            var3 = _closure2_slot0;
                            var2 = {};
                            var1 = _closure1_slot6;
                            var1 = var1.ERROR;
                            var2['priceTierState'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3);
 190:
                        return var2;
 193:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = 'loadPriceTiers';
        var1[var3] = var4;
        var3 = function reset() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = _closure1_slot7;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = 'reset';
        var1[var2] = var3;
        return var1;
    };
    var5 = var7.bind(var10)(var5);
    var _closure1_slot8 = var5;
    var7 = 8;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_role_subscriptions/native/RoleTierEditStore.tsx';
    var7 = var8.bind(var9)(var7);
    var3['LoadingState'] = var6;
    var3['useRoleTierEditStore'] = var5;
    var5 = function resetImperatively() {
        var2 = _closure1_slot8;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var2 = var1.reset;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var3['resetImperatively'] = var5;
    var5 = function useCurrentTierEditScene() {
        var2 = _closure1_slot8;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var3 = var2.currentScene;
        var1 = new Array(2);
        var1[0] = var3;
        var2 = var2.setScene;
        var1[1] = var2;
        return var1;
    };
    var3['useCurrentTierEditScene'] = var5;
    var5 = function useResetTierEditState() {
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.reset;
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useResetTierEditState'] = var5;
    var3['usePriceTiers'] = var4;
    var4 = function usePriceTiersAvailableInGuild(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var9 = arg1;
            var2 = _closure1_slot12;
            var4 = undefined;
            var2 = var2.bind(var4)(var9);
            var7 = var2.tiers;
            var3 = var2.state;
            var2 = var2.onRefresh;
            var8 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 7;
            var6 = var10[var6];
            var8 = var8.bind(var4)(var6);
            var6 = var8.useSubscriptionListingsForGuild;
            var6 = var6.bind(var8)(var9);
            var8 = global;
            var8 = var8.Set;
            var9 = var8.prototype;
            var9 = Object.create(var9, {constructor: {value: var8}});
            var13 = var9;
            var8 = new var13[var8](var12);
            var10 = var8 instanceof Object ? var8 : var9;
            var _closure2_slot0 = var10;
            var1 = _closure1_slot9;
            var9 = var1.bind(var4)(var6);
            var6 = var9.bind(var4)();
            var1 = var6.done;
            var8 = 0;
            if(var1) { _fun0006_ip = 168; continue _fun0006 }
 122:
            var1 = var6.value;
            var11 = var10.add;
            var1 = var1.subscription_plans;
            var1 = var1[var8];
            var1 = var1.price;
            var1 = var11.bind(var10)(var1);
            var11 = var9.bind(var4)();
            var1 = var11.done;
            var6 = var11;
            if(!var1) { _fun0006_ip = 122; continue _fun0006 }
 168:
            var1 = {};
            var6 = null;
            var6 = var6 == var7;
            var4 = undefined;
            if(var6) { _fun0006_ip = 198; continue _fun0006 }
 181:
            var6 = var7.filter;
            var5 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var4 = var6.bind(var7)(var5);
 198:
            var1['tiers'] = var4;
            var1['state'] = var3;
            var1['onRefresh'] = var2;
            return var1;
        }
    };
    var3['usePriceTiersAvailableInGuild'] = var4;
    var4 = function useGroupCoverState() {
        var4 = _closure1_slot8;
        var2 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 5;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.groupCover;
            var2 = var1.setGroupCover;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useGroupCoverState'] = var4;
    var4 = function useGroupDescriptionState() {
        var4 = _closure1_slot8;
        var2 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 5;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.groupDescription;
            var2 = var1.setGroupDescription;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useGroupDescriptionState'] = var4;
    var2 = function useGroupIsFullGateState() {
        var4 = _closure1_slot8;
        var2 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 5;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.groupIsFullGate;
            var2 = var1.setGroupIsFullGate;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useGroupIsFullGateState'] = var2;
    return var1;
})();