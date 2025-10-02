// app/modules/guild_automod/AutomodStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function useSyncAutomodRules(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var1 = false;
        var4 = var4.bind(var5)(var1);
        var1 = _closure1_slot2;
        var9 = undefined;
        var10 = 2;
        var1 = var1.bind(var9)(var4, var10);
        var6 = 0;
        var4 = var1[var6];
        var5 = 1;
        var1 = var1[var5];
        var _closure2_slot1 = var1;
        var11 = _closure1_slot8;
        var7 = _closure1_slot0;
        var12 = _closure1_slot1;
        var1 = 10;
        var1 = var12[var1];
        var1 = var7.bind(var9)(var1);
        var7 = var1.shallow;
        var1 = function(arg1) {
            var2 = arg1;
            var3 = var2.syncRules;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.fetching;
            var1[1] = var2;
            return var1;
        };
        var7 = var11.bind(var9)(var1, var7);
        var1 = _closure1_slot2;
        var1 = var1.bind(var9)(var7, var10);
        var6 = var1[var6];
        var _closure2_slot2 = var6;
        var7 = var1[var5];
        var _closure2_slot3 = var7;
        var1 = new Array(2);
        var1[0] = var4;
        var5 = _closure1_slot4;
        var4 = var5.useCallback;
        var3 = _closure1_slot3;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 6: // try_start_0
                    var4 = _closure2_slot1;
                    var6 = undefined;
                    var2 = true;
                    var2 = var4.bind(var6)(var2);
                    var4 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=57);
case 7:
                    return var2;
case 8:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10: // try_end0
                    var5 = _closure2_slot1;
                    var4 = false;
                    var4 = var5.bind(var6)(var4);
                    _fun0001_ip = 4; continue _fun0001;
case 9:
                    var5 = _closure2_slot1;
                    var4 = false;
                    var4 = var5.bind(var6)(var4);
                    return var2;
case 11: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = _closure2_slot1;
                    var4 = undefined;
                    var3 = false;
                    var3 = var5.bind(var4)(var3);
                    throw var2;
case 4:
                    var2 = undefined;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var3.bind(var9)(var2);
        var2 = new Array(3);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var1[1] = var2;
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var6 = var8[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var6);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.AutomodTriggerType;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = var5;
    var5 = {};
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var8[var5];
    var9 = var7.bind(var1)(var5);
    var6 = var9.createWithEqualityFn;
    var5 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {'rules': null, 'fetching': false, 'error': null};
        var3 = {};
        var1['rules'] = var3;
        var3 = function updateRule(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg1;
                var _closure3_slot0 = var4;
                var5 = var4.guildId;
                var _closure3_slot1 = var5;
                var1 = var4.id;
                var _closure3_slot2 = var1;
                var6 = var4.triggerType;
                var _closure3_slot3 = var6;
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = var3.rules;
                var _closure3_slot4 = var3;
                var5 = var3[var5];
                var3 = null;
                if(!(var3 == var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var5 = {};
case 12:
                var _closure3_slot5 = var5;
                var7 = var5[var6];
                if(!(var3 == var7)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var7 = new Array(0);
case 14:
                var5 = var7.some;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot2;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var5.bind(var7)(var3);
                var6 = var7.filter;
                var5 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = arg1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 6;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isDefaultRuleId;
                        var1 = var2.id;
                        var1 = var3.bind(var4)(var1);
                        var1 = !var1;
                        if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                        var3 = var2.triggerType;
                        var2 = _closure3_slot3;
                        var1 = var3 !== var2;
case 16:
                        return var1;
                    }
                };
                var6 = var6.bind(var7)(var5);
                if(var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var3 = new Array(1);
                var8 = 0;
                var10 = var3;
                var9 = var6;
                var5 = arraySpread(var10, var9, var8);
                var3[var5] = var4;
                var4 = 1;
                var4 = var5 + var4;
                _fun0002_ip = 20; continue _fun0002;
case 18:
                var5 = var6.map;
                var4 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.id;
                        var3 = _closure3_slot2;
                        if(!(var4 === var3)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var1 = _closure3_slot0;
case 21:
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var4);
case 20:
                var _closure3_slot6 = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 7;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.batchUpdates;
                var2 = function() {
                    var3 = _closure2_slot0;
                    var2 = {};
                    var1 = {};
                    var8 = _closure3_slot4;
                    var9 = var1;
                    var4 = copyDataProperties(var9, var8);
                    var5 = _closure3_slot1;
                    var4 = {};
                    var8 = _closure3_slot5;
                    var9 = var4;
                    var7 = copyDataProperties(var9, var8);
                    var7 = _closure3_slot3;
                    var6 = _closure3_slot6;
                    var4[var7] = var6;
                    var1[var5] = var4;
                    var2['rules'] = var1;
                    var1 = null;
                    var2['error'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['updateRule'] = var3;
        var3 = function removeRule(arg1, arg2) {
            var4 = arg2;
            var1 = arg1;
            var _closure3_slot0 = var1;
            var _closure3_slot1 = var4;
            var3 = _closure2_slot1;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var3 = var3.rules;
            var _closure3_slot2 = var3;
            var5 = var3[var4];
            var _closure3_slot3 = var5;
            var3 = global;
            var4 = var3.Object;
            var3 = var4.keys;
            var6 = var3.bind(var4)(var5);
            var5 = var6.reduce;
            var4 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var2 = global;
                    var4 = var2.Number;
                    var3 = undefined;
                    var2 = arg2;
                    var3 = var4.bind(var3)(var2);
                    var2 = _closure3_slot3;
                    var5 = var2[var3];
                    var2 = null;
                    if(!(var2 == var5)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var5 = new Array(0);
case 23:
                    var4 = var5.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    var1[var3] = var2;
                    return var1;
                }
            };
            var3 = {};
            var3 = var5.bind(var6)(var4, var3);
            var _closure3_slot4 = var3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 7;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = {};
                var6 = _closure3_slot2;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var5 = _closure3_slot1;
                var4 = _closure3_slot4;
                var1[var5] = var4;
                var2['rules'] = var1;
                var1 = null;
                var2['error'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['removeRule'] = var3;
        var5 = _closure1_slot3;
        var4 = undefined;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var5 = var9;
                    var _closure4_slot0 = var9;
                    var2 = undefined;
                    var _closure4_slot1 = var2;
                    var _closure4_slot2 = var2;
                    var _closure4_slot3 = var2;
                    var6 = global;
                    var7 = var6.Date;
                    var4 = var7.now;
                    var8 = var4.bind(var7)();
                    var7 = _closure1_slot7;
                    var9 = var7[var9];
                    var7 = null;
                    var10 = var7 != var9;
                    var7 = 0;
                    if(!var10) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var7 = var9;
case 27:
                    var8 = var8 - var7;
                    var7 = 20000;
                    if(!(var8 > var7)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var8 = _closure1_slot7;
                    var7 = var5;
                    var9 = var6.Date;
                    var6 = var9.now;
                    var6 = var6.bind(var9)();
                    var8[var7] = var6;
case 31: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 8;
                    var6 = var8[var6];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.fetchAutomodRules;
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=156);
case 32:
                    return var5;
case 18:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var6 = function(arg1) {
                        var4 = arg1;
                        var1 = {};
                        var3 = _closure1_slot5;
                        var6 = var3.KEYWORD;
                        var5 = new Array(0);
                        var1[var6] = var5;
                        var6 = var3.ML_SPAM;
                        var5 = new Array(0);
                        var1[var6] = var5;
                        var6 = var3.DEFAULT_KEYWORD_LIST;
                        var5 = new Array(0);
                        var1[var6] = var5;
                        var6 = var3.MENTION_SPAM;
                        var5 = new Array(0);
                        var1[var6] = var5;
                        var6 = var3.USER_PROFILE;
                        var5 = new Array(0);
                        var1[var6] = var5;
                        var5 = var3.SERVER_POLICY;
                        var3 = new Array(0);
                        var1[var5] = var3;
                        var _closure5_slot0 = var1;
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var3 = arg1;
                                var2 = var3.triggerType;
                                var1 = _closure5_slot0;
                                var2 = var1[var2];
                                var1 = null;
                                if(!(var1 != var2)) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
case 35:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var6 = var6.bind(var2)(var5);
                    _closure4_slot1 = var6;
                    var6 = _closure2_slot1;
                    var6 = var6.bind(var2)();
                    var6 = var6.rules;
                    _closure4_slot2 = var6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 7;
                    var6 = var8[var6];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.batchUpdates;
                    var6 = function() {
                        var3 = _closure2_slot0;
                        var2 = {};
                        var1 = {};
                        var6 = _closure4_slot2;
                        var7 = var1;
                        var5 = copyDataProperties(var7, var6);
                        var5 = _closure4_slot0;
                        var4 = _closure4_slot1;
                        var1[var5] = var4;
                        var2['rules'] = var1;
                        var1 = null;
                        var2['error'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6 = var7.bind(var8)(var6);
case 37: // try_end0
                    _fun0006_ip = 29; continue _fun0006;
case 33:
                    return var5;
case 38: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 9;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.APIError;
                    var7 = var4.prototype;
                    var7 = Object.create(var7, {constructor: {value: var4}});
                    var12 = var7;
                    var11 = var8;
                    var4 = new var12[var4](var11, var10);
                    var4 = var4 instanceof Object ? var4 : var7;
                    _closure4_slot3 = var4;
                    var4 = 7;
                    var4 = var6[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.batchUpdates;
                    var3 = function() {
                        var3 = _closure2_slot0;
                        var2 = {};
                        var1 = _closure4_slot3;
                        var2['error'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
case 29:
                    return var2;
case 25:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var5.bind(var4)(var3);
        var _closure2_slot2 = var3;
        var2 = function() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['syncRules'] = var2;
        return var1;
    };
    var5 = var6.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_automod/AutomodStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['useAutomodStore'] = var5;
    var5 = function(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = _closure1_slot8;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var2 = var1.rules;
            var1 = arg1;
            var4 = var2[var1];
            var2 = null;
            var3 = var2 == var4;
            var1 = undefined;
            if(var3) { _fun0008_ip = 39; continue _fun0008 }
case 40:
            var3 = arg2;
            var1 = var4[var3];
case 39:
            if(!(var2 == var1)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
            var1 = new Array(0);
case 41:
            var1 = var1.length;
            return var1;
        }
    };
    var3['getRuleCountByTriggerType'] = var5;
    var3['useSyncAutomodRules'] = var4;
    var4 = function useSyncAutomodRulesEffect(arg1) {
        var7 = arg1;
        var2 = _closure1_slot9;
        var6 = undefined;
        var5 = var2.bind(var6)(var7);
        var3 = _closure1_slot2;
        var2 = 2;
        var5 = var3.bind(var6)(var5, var2);
        var2 = 0;
        var3 = var5[var2];
        var2 = 1;
        var2 = var5[var2];
        var _closure2_slot0 = var2;
        var6 = _closure1_slot4;
        var5 = var6.useEffect;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var2;
        var1 = function() {
            var3 = _closure1_slot3;
            var1 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0009_ip = 35; continue _fun0009 }
case 3:
                        var2 = _closure2_slot0;
                        var3 = undefined;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=24);
case 43:
                        return var2;
case 44:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                        return var3;
case 45:
                        return var2;
case 35:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            var2 = var2.bind(var1)();
            return var1;
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['useSyncAutomodRulesEffect'] = var4;
    var2 = function useAutomodRulesList(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot8;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 10;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var2 = var2.shallow;
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var1 = {};
                var5 = var2.rules;
                var3 = _closure2_slot0;
                var4 = null;
                if(!(var4 == var3)) { _fun0010_ip = 45; continue _fun0010 }
case 44:
                var3 = _closure1_slot6;
                _fun0010_ip = 47; continue _fun0010;
case 45:
                var3 = _closure2_slot0;
case 47:
                var3 = var5[var3];
                if(!(var4 == var3)) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                var3 = {};
case 48:
                var1['rulesByTriggerType'] = var3;
                var3 = var2.updateRule;
                var1['updateRule'] = var3;
                var2 = var2.removeRule;
                var1['removeRule'] = var2;
                return var1;
            }
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useAutomodRulesList'] = var2;
    return var1;
})();