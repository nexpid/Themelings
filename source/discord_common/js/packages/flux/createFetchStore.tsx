// discord_common/js/packages/flux/createFetchStore.tsx
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function coerceRetryAfterSecs(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = 'number';
            var2 = typeof var1;
            if(!(var3 === var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = global;
            var3 = var2.Number;
            var2 = var3.isFinite;
            var2 = var2.bind(var3)(var1);
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = 0;
            if(!(!(var1 <= var2))) { _fun0002_ip = 6; continue _fun0002 }
case 9:
            return var1;
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function areStatesEqual(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = global;
            var3 = var1.Array;
            var2 = var3.isArray;
            var2 = var2.bind(var3)(var5);
            if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = var1.Array;
            var2 = var3.isArray;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 10:
            var2 = var1.Object;
            var1 = var2.is;
            var1 = var1.bind(var2)(var5, var4);
            _fun0003_ip = 13; continue _fun0003;
case 12:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var2 = var3.areArraysShallowEqual;
            var1 = var2.bind(var3)(var5, var4);
case 13:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function defaultRetryableErrors(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot14;
            var1 = var3 instanceof var1;
            if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var4 = var3.status;
            var2 = 500;
            var2 = var4 >= var2;
            if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var4 = var3.status;
            var3 = 429;
            var2 = var3 === var4;
case 16:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function defaultBackoff() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var5 = var2;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot20 = var1;
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var8 = var8.bind(var1)(var4);
    var4 = 8;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var9 = var4.useCallback;
    var _closure1_slot10 = var9;
    var9 = var4.useEffect;
    var _closure1_slot11 = var9;
    var4 = var4.useState;
    var _closure1_slot12 = var4;
    var9 = var5.Symbol;
    var4 = 'NO_DATA';
    var4 = var9.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var5 = var5.Error;
    var8 = var8.bind(var1)(var5);
    var5 = function(arg1) {
        var4 = function HTTPResponseError(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = this;
                var2 = 0;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot5;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot8;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot7;
                var1 = _closure1_slot16;
                var1 = var1.bind(var4)();
                if(var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 20; continue _fun0005;
case 18:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 20:
                var1 = var3.bind(var4)(var5, var1);
                var3 = 'HTTPResponseError';
                var1['name'] = var3;
                var1['status'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'setStatus';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['status'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'setRetryAfter';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['retryAfter'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var5 = var5.bind(var1)(var8);
    var _closure1_slot14 = var5;
    var5 = 11;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.create;
    var5 = function() {
        var1 = {'isLoading': false, 'error': null, 'backoff': null, 'lastSuccessAt': null, 'failureLockedUntil': null};
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var6 = var3;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var3;
        var1['backoff'] = var2;
        return var1;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot15 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/flux/createFetchStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['NO_DATA'] = var4;
    var2 = function createFetchStore(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg2;
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = var1.getQueryId;
            var _closure2_slot1 = var3;
            var3 = var1.get;
            var _closure2_slot2 = var3;
            var3 = var1.load;
            var _closure2_slot3 = var3;
            var3 = var1.getIsLoading;
            var _closure2_slot4 = var3;
            var3 = var1.getError;
            var _closure2_slot5 = var3;
            var3 = var1.retryConfig;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0006_ip = 21; continue _fun0006 }
case 19:
            var3 = {};
case 21:
            var5 = var3.maxRetries;
            if(!(var5 === var4)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var5 = 5;
case 22:
            var _closure2_slot6 = var5;
            var5 = var3.backoff;
            if(!(var5 === var4)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var5 = _closure1_slot20;
case 24:
            var _closure2_slot7 = var5;
            var3 = var3.retryableErrors;
            if(!(var3 === var4)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var3 = _closure1_slot19;
case 26:
            var _closure2_slot8 = var3;
            var3 = var1.staleAfter;
            var _closure2_slot9 = var3;
            var1 = var1.failureStaleAfter;
            var _closure2_slot10 = var1;
            var _closure2_slot11 = var4;
            var1 = function getUseStoreState(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var4 = _closure2_slot11;
                    var1 = var4.get;
                    var1 = var1.bind(var4)(var5);
                    if(!(var2 == var1)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.create;
                    var2 = function() {
                        var1 = {'isLoading': false, 'error': null, 'backoff': null, 'lastSuccessAt': null, 'failureLockedUntil': null};
                        var3 = _closure2_slot7;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        var1['backoff'] = var2;
                        return var1;
                    };
                    var2 = var4.bind(var6)(var2);
                    var4 = _closure2_slot11;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5, var2);
                    var1 = var2;
case 30:
                    return var1;
case 28:
                    var1 = _closure1_slot15;
                    return var1;
                }
            };
            var _closure2_slot12 = var1;
            var1 = function loader() {
                var1 = undefined;
                var4 = _closure2_slot14;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot13 = var1;
            var1 = function _loader() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                            var12 = var2.queryId;
                            var _closure5_slot0 = var12;
                            var3 = var2.args;
                            var9 = var3;
                            var _closure5_slot1 = var3;
                            var10 = var2.refetch;
                            var3 = undefined;
                            if(!(var10 === var3)) { _fun0008_ip = 34; continue _fun0008 }
case 16:
                            var10 = false;
case 34:
                            var _closure5_slot2 = var10;
                            var2 = var2.useStoreState;
                            if(!(var2 === var3)) { _fun0008_ip = 35; continue _fun0008 }
case 12:
                            var8 = _closure2_slot12;
                            var2 = var8.bind(var3)(var12);
case 35:
                            var5 = var2;
                            var _closure5_slot3 = var2;
                            var6 = undefined;
                            var _closure5_slot4 = var3;
                            var _closure5_slot5 = var3;
                            SaveGenerator(address=99);
case 36:
                            return var3;
case 37:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                            if(var7) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                            var8 = var5;
                            var7 = var8.getState;
                            var7 = var7.bind(var8)();
                            var7 = var7.backoff;
                            var6 = var7;
                            _closure5_slot4 = var7;
                            var11 = _closure2_slot4;
                            var7 = null;
                            var13 = var7 == var11;
                            var11 = undefined;
                            if(var13) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                            var14 = _closure2_slot4;
                            var18 = var9;
                            var13 = new Array(0);
                            var17 = 0;
                            var19 = var13;
                            var15 = arraySpread(var19, var18, var17);
                            var19 = var14;
                            var18 = var13;
                            var17 = undefined;
                            var11 = apply(var19, var18, var17);
case 40:
                            if(!(var7 == var11)) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                            var14 = var5;
                            var13 = var14.getState;
                            var13 = var13.bind(var14)();
                            var11 = var13.isLoading;
case 42:
                            if(!(var7 != var12)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                            if(var11) { _fun0008_ip = 44; continue _fun0008 }
case 46:
                            if(var10) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                            var11 = _closure2_slot2;
                            var18 = var9;
                            var10 = new Array(0);
                            var17 = 0;
                            var19 = var10;
                            var12 = arraySpread(var19, var18, var17);
                            var19 = var11;
                            var18 = var10;
                            var17 = undefined;
                            var10 = apply(var19, var18, var17);
                            var11 = _closure1_slot13;
                            if(!(var10 !== var11)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                            if(!(var7 != var10)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                            var12 = var5;
                            var14 = _closure2_slot9;
                            var11 = var7 == var14;
                            var10 = false;
                            if(var11) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                            var11 = var12.getState;
                            var11 = var11.bind(var12)();
                            var13 = var11.lastSuccessAt;
                            var11 = var7 == var13;
                            if(var11) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                            var12 = global;
                            var15 = var12.Date;
                            var12 = var15.now;
                            var12 = var12.bind(var15)();
                            var13 = var12 - var13;
                            var12 = 1000;
                            var12 = var12 * var14;
                            var11 = var13 > var12;
case 55:
                            var10 = var11;
case 53:
                            if(var10) { _fun0008_ip = 51; continue _fun0008 }
case 57:
                            return var3;
case 51:
                            var11 = var5;
                            var10 = var11.getState;
                            var10 = var10.bind(var11)();
                            var11 = var10.failureLockedUntil;
                            if(!(var7 != var11)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                            var10 = global;
                            var12 = var10.Date;
                            var10 = var12.now;
                            var10 = var10.bind(var12)();
                            if(!(!(var10 < var11))) { _fun0008_ip = 60; continue _fun0008 }
case 58:
                            _fun0008_ip = 47; continue _fun0008;
case 60:
                            return var3;
case 49:
                            return var3;
case 47: // try_start_0
                            var12 = var5;
                            var11 = var12.setState;
                            var10 = {};
                            var13 = true;
                            var10['isLoading'] = var13;
                            var10 = var11.bind(var12)(var10);
                            var10 = _closure2_slot3;
                            var18 = var9;
                            var9 = new Array(0);
                            var17 = 0;
                            var19 = var9;
                            var11 = arraySpread(var19, var18, var17);
                            var19 = var10;
                            var18 = var9;
                            var17 = undefined;
                            var9 = apply(var19, var18, var17);
                            SaveGenerator(address=470);
case 61:
                            return var9;
case 62:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                            if(var10) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                            var11 = var6;
                            var10 = var11.succeed;
                            var10 = var10.bind(var11)();
                            var12 = var5;
                            var11 = var12.setState;
                            var10 = {'error': null, 'isLoading': false, 'lastSuccessAt': null, 'failureLockedUntil': null};
                            var13 = global;
                            var14 = var13.Date;
                            var13 = var14.now;
                            var13 = var13.bind(var14)();
                            var10['lastSuccessAt'] = var13;
                            var10 = var11.bind(var12)(var10);
case 65: // try_end0
                            _fun0008_ip = 44; continue _fun0008;
case 63:
                            return var9;
case 66: // catch_target0
                            CatchBlockStart(arg_register=9);
                            var9 = function makeError(arg1) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    var1 = arg1;
                                    var2 = global;
                                    var3 = var2.Error;
                                    var3 = var1 instanceof var3;
                                    if(var3) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                                    var7 = 'object';
                                    var3 = typeof var1;
                                    if(!(var7 === var3)) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                                    var8 = null;
                                    if(!(var8 != var1)) { _fun0009_ip = 69; continue _fun0009 }
case 71:
                                    var3 = 'status';
                                    var3 = var3 in var1;
                                    if(!var3) { _fun0009_ip = 69; continue _fun0009 }
case 72:
                                    var3 = var1.status;
                                    var4 = 'number';
                                    var3 = typeof var3;
                                    if(!(var4 !== var3)) { _fun0009_ip = 73; continue _fun0009 }
case 69:
                                    var5 = var2.Error;
                                    var4 = var2.String;
                                    var3 = undefined;
                                    var10 = var4.bind(var3)(var1);
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {constructor: {value: var5}});
                                    var11 = var4;
                                    var3 = new var11[var5](var10, var9);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    return var3;
case 73:
                                    var5 = _closure1_slot17;
                                    var4 = var1.retryAfter;
                                    var6 = undefined;
                                    var4 = var5.bind(var6)(var4);
                                    var5 = 'body';
                                    var5 = var5 in var1;
                                    if(!var5) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                                    var5 = var1.body;
                                    if(!(var8 != var5)) { _fun0009_ip = 74; continue _fun0009 }
case 76:
                                    var5 = var1.body;
                                    var5 = typeof var5;
                                    if(!(var7 === var5)) { _fun0009_ip = 74; continue _fun0009 }
case 77:
                                    var7 = var1.body;
                                    var5 = 'message';
                                    var5 = var5 in var7;
                                    if(var5) { _fun0009_ip = 78; continue _fun0009 }
case 74:
                                    var7 = var2.Object;
                                    var5 = var7.entries;
                                    var8 = var5.bind(var7)(var1);
                                    var7 = var8.map;
                                    var5 = function(arg1) {
                                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                            var5 = arg1;
                                            var1 = var5[Symbol.iterator];
                                            var5 = var1().next;
                                            var3 = var5().value;
                                            var2 = var1;
                                            var4 = undefined;
                                            var2 = var2 === var4;
                                            var6 = undefined;
                                            if(var2) { _fun0010_ip = 11; continue _fun0010 }
case 79:
                                            var6 = var3;
case 11:
                                            var3 = undefined;
                                            if(var2) { _fun0010_ip = 80; continue _fun0010 }
case 70:
                                            var7 = var5().value;
                                            var5 = var1;
                                            var5 = var5 === var4;
                                            var3 = undefined;
                                            var2 = var5;
                                            if(var5) { _fun0010_ip = 80; continue _fun0010 }
case 81:
                                            var3 = var7;
                                            var2 = var5;
case 80:
                                            if(var2) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                                            var1.return();
case 82:
                                            var1 = global;
                                            var2 = var1.String;
                                            var10 = var2.bind(var4)(var3);
                                            var1 = var1.HermesInternal;
                                            var4 = var1.concat;
                                            var13 = '';
                                            var11 = ': [';
                                            var9 = ']';
                                            var12 = var6;
                                            var1 = var13[var4](var12, var11, var10, var9, var8);
                                            return var1;
                                        }
                                    };
                                    var9 = var7.bind(var8)(var5);
                                    var8 = _closure1_slot14;
                                    var7 = var9.join;
                                    var5 = ',';
                                    var10 = var7.bind(var9)(var5);
                                    var7 = var8.prototype;
                                    var7 = Object.create(var7, {constructor: {value: var8}});
                                    var11 = var7;
                                    var5 = new var11[var8](var10, var9);
                                    var5 = var5 instanceof Object ? var5 : var7;
                                    var8 = var5.setStatus;
                                    var7 = var1.status;
                                    var7 = var8.bind(var5)(var7);
                                    var7 = var5.setRetryAfter;
                                    var7 = var7.bind(var5)(var4);
                                    return var5;
case 78:
                                    var5 = _closure1_slot14;
                                    var3 = var2.String;
                                    var2 = var1.body;
                                    var2 = var2.message;
                                    var10 = var3.bind(var6)(var2);
                                    var3 = var5.prototype;
                                    var3 = Object.create(var3, {constructor: {value: var5}});
                                    var11 = var3;
                                    var2 = new var11[var5](var10, var9);
                                    var2 = var2 instanceof Object ? var2 : var3;
                                    var5 = var2.setStatus;
                                    var3 = var1.status;
                                    var3 = var5.bind(var2)(var3);
                                    var3 = var2.setRetryAfter;
                                    var3 = var3.bind(var2)(var4);
                                    return var2;
case 67:
                                    return var1;
                                }
                            };
                            var10 = var9.bind(var3)(var10);
                            _closure5_slot5 = var10;
                            var12 = var5;
                            var11 = var12.setState;
                            var9 = {};
                            var9['error'] = var10;
                            var13 = false;
                            var9['isLoading'] = var13;
                            var9 = var11.bind(var12)(var9);
                            var9 = _closure2_slot8;
                            var9 = var9.bind(var3)(var10);
                            if(!var9) { _fun0008_ip = 84; continue _fun0008 }
case 85:
                            var9 = _closure2_slot6;
                            var6 = var6.fails;
                            if(!(!(var9 > var6))) { _fun0008_ip = 86; continue _fun0008 }
case 84:
                            var6 = _closure2_slot10;
                            if(!(var7 != var6)) { _fun0008_ip = 44; continue _fun0008 }
case 87:
                            var7 = var5;
                            var6 = var7.setState;
                            var5 = {};
                            var9 = global;
                            var10 = var9.Date;
                            var9 = var10.now;
                            var9 = var9.bind(var10)();
                            var10 = _closure2_slot10;
                            var8 = 1000;
                            var8 = var8 * var10;
                            var8 = var9 + var8;
                            var5['failureLockedUntil'] = var8;
                            var5 = var6.bind(var7)(var5);
                            _fun0008_ip = 44; continue _fun0008;
case 86:
                            var5 = global;
                            var6 = var5.Promise;
                            var5 = var6.prototype;
                            var5 = Object.create(var5, {constructor: {value: var6}});
                            var19 = function(arg1, arg2) {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                    var1 = arg1;
                                    var _closure6_slot0 = var1;
                                    var1 = arg2;
                                    var _closure6_slot1 = var1;
                                    var5 = _closure5_slot4;
                                    var4 = var5.fail;
                                    var1 = _closure5_slot5;
                                    var6 = _closure1_slot17;
                                    var3 = var1.retryAfter;
                                    var1 = undefined;
                                    var7 = var6.bind(var1)(var3);
                                    var3 = null;
                                    var6 = var3 == var7;
                                    var3 = 0;
                                    if(var6) { _fun0011_ip = 4; continue _fun0011 }
case 88:
                                    var6 = 1000;
                                    var3 = var6 * var7;
case 4:
                                    var2 = function() {
                                        var3 = _closure2_slot13;
                                        var2 = {};
                                        var4 = _closure5_slot0;
                                        var2['queryId'] = var4;
                                        var4 = _closure5_slot1;
                                        var2['args'] = var4;
                                        var4 = _closure5_slot3;
                                        var2['useStoreState'] = var4;
                                        var1 = _closure5_slot2;
                                        var2['refetch'] = var1;
                                        var1 = undefined;
                                        var5 = var3.bind(var1)(var2);
                                        var4 = var5.then;
                                        var3 = _closure6_slot0;
                                        var2 = _closure6_slot1;
                                        var2 = var4.bind(var5)(var3, var2);
                                        return var1;
                                    };
                                    var2 = var4.bind(var5)(var2, var3);
                                    return var1;
                                }
                            };
                            var20 = var5;
                            var4 = new var20[var6](var19, var18);
                            var4 = var4 instanceof Object ? var4 : var5;
                            SaveGenerator(address=716);
case 89:
                            return var4;
case 90:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(!var5) { _fun0008_ip = 44; continue _fun0008 }
case 91:
                            return var4;
case 44:
                            return var3;
case 38:
                            return var2;
case 32:
                            return var1;
                        }
                    };
                    var2 = var1.next;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot14 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot14 = var1;
            var1 = function useCfsHook(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var6 = 0;
                    var19 = 0;
                    var3 = copyRestArgs(var19);
                    var9 = undefined;
                    var _closure3_slot1 = var9;
                    var _closure3_slot2 = var9;
                    var2 = _closure1_slot12;
                    var5 = var2.bind(var9)(var3);
                    var4 = _closure1_slot4;
                    var2 = 2;
                    var4 = var4.bind(var9)(var5, var2);
                    var11 = var4[var6];
                    var2 = 1;
                    var2 = var4[var2];
                    var4 = var3 === var11;
                    if(var4) { _fun0012_ip = 92; continue _fun0012 }
case 82:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 9;
                    var5 = var10[var5];
                    var8 = var8.bind(var9)(var5);
                    var5 = var8.areArraysShallowEqual;
                    var4 = var5.bind(var8)(var3, var11);
case 92:
                    if(var4) { _fun0012_ip = 13; continue _fun0012 }
case 93:
                    var2 = var2.bind(var9)(var3);
case 13:
                    var _closure3_slot0 = var11;
                    var2 = global;
                    var5 = var2.Array;
                    var4 = var5.isArray;
                    var3 = _closure2_slot0;
                    var4 = var4.bind(var5)(var3);
                    var3 = _closure2_slot0;
                    if(var4) { _fun0012_ip = 94; continue _fun0012 }
case 95:
                    var4 = new Array(1);
                    var4[0] = var3;
                    _fun0012_ip = 41; continue _fun0012;
case 94:
                    var4 = var3;
case 41:
                    var5 = _closure2_slot1;
                    var3 = new Array(0);
                    var19 = var3;
                    var18 = var11;
                    var17 = 0;
                    var6 = arraySpread(var19, var18, var17);
                    var19 = var5;
                    var18 = var3;
                    var17 = undefined;
                    var12 = apply(var19, var18, var17);
                    _closure3_slot1 = var12;
                    var2 = _closure2_slot12;
                    var10 = var2.bind(var9)(var12);
                    _closure3_slot2 = var10;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 12;
                    var2 = var2[var8];
                    var6 = var3.bind(var9)(var2);
                    var5 = var6.useStateFromStores;
                    var3 = new Array(1);
                    var3[0] = var11;
                    var2 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var3 = _closure2_slot4;
                            var1 = null;
                            var3 = var1 == var3;
                            var1 = undefined;
                            if(var3) { _fun0013_ip = 96; continue _fun0013 }
case 97:
                            var3 = _closure2_slot4;
                            var8 = _closure3_slot0;
                            var2 = new Array(0);
                            var7 = 0;
                            var9 = var2;
                            var5 = arraySpread(var9, var8, var7);
                            var9 = var3;
                            var8 = var2;
                            var7 = undefined;
                            var1 = apply(var9, var8, var7);
case 96:
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var4, var2, var3);
                    var3 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            var1 = var1 == var2;
                            if(!var1) { _fun0014_ip = 98; continue _fun0014 }
case 99:
                            var2 = arg1;
                            var1 = var2.isLoading;
case 98:
                            return var1;
                        }
                    };
                    var3 = var10.bind(var9)(var3);
                    var5 = null;
                    var15 = var4;
                    if(!(var5 != var2)) { _fun0012_ip = 100; continue _fun0012 }
case 101:
                    var3 = var2;
case 100:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var13 = var4.bind(var9)(var2);
                    var6 = var13.useStateFromStores;
                    var4 = new Array(1);
                    var4[0] = var11;
                    var2 = function() {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var3 = _closure2_slot5;
                            var1 = null;
                            var3 = var1 == var3;
                            var1 = undefined;
                            if(var3) { _fun0015_ip = 96; continue _fun0015 }
case 97:
                            var3 = _closure2_slot5;
                            var8 = _closure3_slot0;
                            var2 = new Array(0);
                            var7 = 0;
                            var9 = var2;
                            var5 = arraySpread(var9, var8, var7);
                            var9 = var3;
                            var8 = var2;
                            var7 = undefined;
                            var1 = apply(var9, var8, var7);
case 96:
                            return var1;
                        }
                    };
                    var2 = var6.bind(var13)(var15, var2, var4);
                    var4 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            var2 = var1 == var2;
                            if(!var2) { _fun0016_ip = 79; continue _fun0016 }
case 99:
                            var2 = arg1;
                            var1 = var2.error;
case 79:
                            return var1;
                        }
                    };
                    var4 = var10.bind(var9)(var4);
                    if(!(var5 != var2)) { _fun0012_ip = 102; continue _fun0012 }
case 103:
                    var4 = var2;
case 102:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var14 = var6.bind(var9)(var2);
                    var13 = var14.useStateFromStores;
                    var8 = new Array(1);
                    var8[0] = var11;
                    var16 = _closure1_slot18;
                    var18 = function() {
                        var3 = _closure2_slot2;
                        var6 = _closure3_slot0;
                        var2 = new Array(0);
                        var5 = 0;
                        var7 = var2;
                        var1 = arraySpread(var7, var6, var5);
                        var5 = undefined;
                        var7 = var3;
                        var6 = var2;
                        var1 = apply(var7, var6, var5);
                        return var1;
                    };
                    var20 = var14;
                    var19 = var15;
                    var17 = var8;
                    var6 = var20[var13](var19, var18, var17, var16, var15);
                    var13 = _closure1_slot11;
                    var8 = new Array(3);
                    var8[0] = var12;
                    var8[1] = var11;
                    var8[2] = var10;
                    var2 = function() {
                        var3 = _closure2_slot13;
                        var2 = {};
                        var4 = _closure3_slot1;
                        var2['queryId'] = var4;
                        var4 = _closure3_slot0;
                        var2['args'] = var4;
                        var1 = _closure3_slot2;
                        var2['useStoreState'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var13.bind(var9)(var2, var8);
                    var8 = _closure1_slot10;
                    var2 = new Array(3);
                    var2[0] = var12;
                    var2[1] = var11;
                    var2[2] = var10;
                    var1 = function() {
                        var3 = _closure2_slot13;
                        var2 = {};
                        var4 = _closure3_slot1;
                        var2['queryId'] = var4;
                        var4 = _closure3_slot0;
                        var2['args'] = var4;
                        var1 = _closure3_slot2;
                        var2['useStoreState'] = var1;
                        var1 = true;
                        var2['refetch'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var8.bind(var9)(var1, var2);
                    var1 = {};
                    var7 = _closure1_slot13;
                    var5 = null;
                    if(!(var6 !== var7)) { _fun0012_ip = 104; continue _fun0012 }
case 105:
                    var5 = var6;
case 104:
                    var1['data'] = var5;
                    var1['error'] = var4;
                    var1['isLoading'] = var3;
                    var1['refetch'] = var2;
                    return var1;
                }
            };
            var3 = global;
            var3 = var3.Map;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var8 = var5;
            var3 = new var8[var3](var7);
            var3 = var3 instanceof Object ? var3 : var5;
            _closure2_slot11 = var3;
            var3 = _closure1_slot3;
            var5 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0017_ip = 106; continue _fun0017 }
case 107:
                        var13 = 0;
                        var7 = copyRestArgs(var13);
                        var4 = undefined;
                        SaveGenerator(address=22);
case 108:
                        return var4;
case 109:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0017_ip = 110; continue _fun0017 }
case 111:
                        var6 = _closure2_slot1;
                        var5 = new Array(0);
                        var13 = var5;
                        var12 = var7;
                        var11 = 0;
                        var8 = arraySpread(var13, var12, var11);
                        var13 = var6;
                        var12 = var5;
                        var11 = undefined;
                        var8 = apply(var13, var12, var11);
                        var5 = _closure2_slot12;
                        var6 = var5.bind(var4)(var8);
                        var5 = var6.getState;
                        var5 = var5.bind(var6)();
                        var9 = var5.backoff;
                        var5 = var9.succeed;
                        var5 = var5.bind(var9)();
                        var9 = var6.setState;
                        var5 = {};
                        var10 = null;
                        var5['failureLockedUntil'] = var10;
                        var5 = var9.bind(var6)(var5);
                        var5 = _closure2_slot13;
                        var3 = {};
                        var3['queryId'] = var8;
                        var3['args'] = var7;
                        var3['useStoreState'] = var6;
                        var6 = true;
                        var3['refetch'] = var6;
                        var3 = var5.bind(var4)(var3);
                        SaveGenerator(address=158);
case 112:
                        return var3;
case 77:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0017_ip = 113; continue _fun0017 }
case 114:
                        return var4;
case 113:
                        return var3;
case 110:
                        return var2;
case 106:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var5 = var3.bind(var4)(var5);
            var1['refetch'] = var5;
            var5 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0018_ip = 115; continue _fun0018 }
case 116:
                        var9 = 0;
                        var8 = copyRestArgs(var9);
                        var4 = undefined;
                        SaveGenerator(address=19);
case 15:
                        return var4;
case 117:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0018_ip = 118; continue _fun0018 }
case 98:
                        var3 = global;
                        var6 = var3.Promise;
                        var5 = var6.all;
                        var7 = var8.map;
                        var3 = function(arg1) {
                            var6 = arg1;
                            var2 = _closure2_slot1;
                            var1 = new Array(0);
                            var8 = 0;
                            var10 = var1;
                            var9 = var6;
                            var3 = arraySpread(var10, var9, var8);
                            var3 = undefined;
                            var10 = var2;
                            var9 = var1;
                            var8 = undefined;
                            var5 = apply(var10, var9, var8);
                            var2 = _closure2_slot13;
                            var1 = {};
                            var1['queryId'] = var5;
                            var1['args'] = var6;
                            var4 = _closure2_slot12;
                            var4 = var4.bind(var3)(var5);
                            var1['useStoreState'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3 = var7.bind(var8)(var3);
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address=65);
case 82:
                        return var3;
case 69:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0018_ip = 4; continue _fun0018 }
case 119:
                        return var4;
case 4:
                        return var3;
case 118:
                        return var2;
case 115:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var5 = var3.bind(var4)(var5);
            var1['fetchMany'] = var5;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0019_ip = 115; continue _fun0019 }
case 116:
                        var9 = 0;
                        var8 = copyRestArgs(var9);
                        var4 = undefined;
                        SaveGenerator(address=19);
case 15:
                        return var4;
case 117:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0019_ip = 118; continue _fun0019 }
case 98:
                        var3 = global;
                        var6 = var3.Promise;
                        var5 = var6.all;
                        var7 = var8.map;
                        var3 = function(arg1) {
                            var5 = arg1;
                            var4 = _closure2_slot1;
                            var2 = new Array(0);
                            var9 = 0;
                            var11 = var2;
                            var10 = var5;
                            var3 = arraySpread(var11, var10, var9);
                            var3 = undefined;
                            var11 = var4;
                            var10 = var2;
                            var9 = undefined;
                            var6 = apply(var11, var10, var9);
                            var2 = _closure2_slot12;
                            var4 = var2.bind(var3)(var6);
                            var2 = var4.getState;
                            var2 = var2.bind(var4)();
                            var7 = var2.backoff;
                            var2 = var7.succeed;
                            var2 = var2.bind(var7)();
                            var7 = var4.setState;
                            var2 = {};
                            var8 = null;
                            var2['failureLockedUntil'] = var8;
                            var2 = var7.bind(var4)(var2);
                            var2 = _closure2_slot13;
                            var1 = {};
                            var1['queryId'] = var6;
                            var1['args'] = var5;
                            var1['useStoreState'] = var4;
                            var4 = true;
                            var1['refetch'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3 = var7.bind(var8)(var3);
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address=65);
case 82:
                        return var3;
case 69:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0019_ip = 4; continue _fun0019 }
case 119:
                        return var4;
case 4:
                        return var3;
case 118:
                        return var2;
case 115:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1['refetchMany'] = var2;
            return var1;
        }
    };
    var3['createFetchStore'] = var2;
    return var1;
})();