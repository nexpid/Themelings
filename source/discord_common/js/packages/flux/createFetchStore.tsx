// discord_common/js/packages/flux/createFetchStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function areStatesEqual(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = global;
            var3 = var1.Array;
            var2 = var3.isArray;
            var2 = var2.bind(var3)(var5);
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var1.Array;
            var2 = var3.isArray;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var2 = var1.Object;
            var1 = var2.is;
            var1 = var1.bind(var2)(var5, var4);
            _fun0002_ip = 9; continue _fun0002;
case 8:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var2 = var3.areArraysShallowEqual;
            var1 = var2.bind(var3)(var5, var4);
case 9:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function defaultRetryableErrors(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot13;
            var1 = var3 instanceof var1;
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var4 = var3.status;
            var2 = 500;
            var2 = var4 >= var2;
            if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var4 = var3.status;
            var3 = 429;
            var2 = var3 === var4;
case 12:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.useCallback;
    var _closure1_slot10 = var9;
    var9 = var8.useEffect;
    var _closure1_slot11 = var9;
    var8 = var8.useState;
    var _closure1_slot12 = var8;
    var4 = var4.Error;
    var7 = var7.bind(var1)(var4);
    var4 = function(arg1) {
        var4 = function HTTPResponseError(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                var1 = _closure1_slot15;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0004_ip = 16; continue _fun0004;
case 14:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 16:
                var1 = var3.bind(var4)(var5, var1);
                var3 = 'HTTPResponseError';
                var1['name'] = var3;
                var1['status'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot9;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot6;
        var5 = {};
        var6 = 'setStatus';
        var5['key'] = var6;
        var1 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['status'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var7);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.create;
    var4 = function() {
        var1 = {'isLoading': false, 'error': null};
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
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/createFetchStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createFetchStore(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
            var1 = var1.retryConfig;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0005_ip = 17; continue _fun0005 }
case 15:
            var1 = {};
case 17:
            var3 = var1.maxRetries;
            if(!(var3 === var4)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var3 = 5;
case 18:
            var _closure2_slot6 = var3;
            var3 = var1.backoff;
            if(!(var3 === var4)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var3 = _closure1_slot18;
case 20:
            var _closure2_slot7 = var3;
            var1 = var1.retryableErrors;
            if(!(var1 === var4)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var1 = _closure1_slot17;
case 22:
            var _closure2_slot8 = var1;
            var _closure2_slot9 = var4;
            var1 = function getUseStoreState(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = arg1;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var4 = _closure2_slot9;
                    var1 = var4.get;
                    var1 = var1.bind(var4)(var5);
                    if(!(var2 == var1)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.create;
                    var2 = function() {
                        var1 = {'isLoading': false, 'error': null};
                        var3 = _closure2_slot7;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        var1['backoff'] = var2;
                        return var1;
                    };
                    var2 = var4.bind(var6)(var2);
                    var4 = _closure2_slot9;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5, var2);
                    var1 = var2;
case 26:
                    return var1;
case 24:
                    var1 = _closure1_slot14;
                    return var1;
                }
            };
            var _closure2_slot10 = var1;
            var1 = function loader() {
                var1 = undefined;
                var4 = _closure2_slot12;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot11 = var1;
            var1 = function _loader() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                            var12 = var2.queryId;
                            var _closure5_slot0 = var12;
                            var3 = var2.args;
                            var8 = var3;
                            var _closure5_slot1 = var3;
                            var9 = var2.refetch;
                            var3 = undefined;
                            if(!(var9 === var3)) { _fun0007_ip = 30; continue _fun0007 }
case 12:
                            var9 = false;
case 30:
                            var _closure5_slot2 = var9;
                            var2 = var2.useStoreState;
                            if(!(var2 === var3)) { _fun0007_ip = 31; continue _fun0007 }
case 8:
                            var10 = _closure2_slot10;
                            var2 = var10.bind(var3)(var12);
case 31:
                            var5 = var2;
                            var _closure5_slot3 = var2;
                            var6 = undefined;
                            var _closure5_slot4 = var3;
                            SaveGenerator(address=95);
case 32:
                            return var3;
case 33:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                            if(var7) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                            var10 = var5;
                            var7 = var10.getState;
                            var7 = var7.bind(var10)();
                            var7 = var7.backoff;
                            var6 = var7;
                            _closure5_slot4 = var7;
                            var11 = _closure2_slot4;
                            var10 = null;
                            var13 = var10 == var11;
                            var11 = undefined;
                            if(var13) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                            var14 = _closure2_slot4;
                            var18 = var8;
                            var13 = new Array(0);
                            var17 = 0;
                            var19 = var13;
                            var15 = arraySpread(var19, var18, var17);
                            var19 = var14;
                            var18 = var13;
                            var17 = undefined;
                            var11 = apply(var19, var18, var17);
case 36:
                            if(!(var10 == var11)) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                            var14 = var5;
                            var13 = var14.getState;
                            var13 = var13.bind(var14)();
                            var11 = var13.isLoading;
case 38:
                            if(!(var10 != var12)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                            if(var11) { _fun0007_ip = 40; continue _fun0007 }
case 42:
                            if(var9) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                            var11 = _closure2_slot2;
                            var18 = var8;
                            var9 = new Array(0);
                            var17 = 0;
                            var19 = var9;
                            var12 = arraySpread(var19, var18, var17);
                            var19 = var11;
                            var18 = var9;
                            var17 = undefined;
                            var9 = apply(var19, var18, var17);
                            if(!(var10 == var9)) { _fun0007_ip = 40; continue _fun0007 }
case 43: // try_start_0
                            var11 = var5;
                            var10 = var11.setState;
                            var9 = {};
                            var12 = true;
                            var9['isLoading'] = var12;
                            var9 = var10.bind(var11)(var9);
                            var9 = _closure2_slot3;
                            var18 = var8;
                            var8 = new Array(0);
                            var17 = 0;
                            var19 = var8;
                            var10 = arraySpread(var19, var18, var17);
                            var19 = var9;
                            var18 = var8;
                            var17 = undefined;
                            var8 = apply(var19, var18, var17);
                            SaveGenerator(address=317);
case 45:
                            return var8;
case 46:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            if(var9) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                            var10 = var6;
                            var9 = var10.succeed;
                            var9 = var9.bind(var10)();
                            var11 = var5;
                            var10 = var11.setState;
                            var9 = {'error': null, 'isLoading': false};
                            var9 = var10.bind(var11)(var9);
case 49: // try_end0
                            _fun0007_ip = 40; continue _fun0007;
case 47:
                            return var8;
case 50: // catch_target0
                            CatchBlockStart(arg_register=8);
                            var8 = function makeError(arg1) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                    var1 = arg1;
                                    var2 = global;
                                    var3 = var2.Error;
                                    var3 = var1 instanceof var3;
                                    if(var3) { _fun0008_ip = 45; continue _fun0008 }
case 51:
                                    var4 = 'object';
                                    var3 = typeof var1;
                                    if(!(var4 === var3)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                                    var5 = null;
                                    if(!(var5 != var1)) { _fun0008_ip = 52; continue _fun0008 }
case 54:
                                    var3 = 'status';
                                    var3 = var3 in var1;
                                    if(!var3) { _fun0008_ip = 52; continue _fun0008 }
case 55:
                                    var3 = var1.status;
                                    var6 = 'number';
                                    var3 = typeof var3;
                                    if(!(var6 !== var3)) { _fun0008_ip = 56; continue _fun0008 }
case 52:
                                    var7 = var2.Error;
                                    var6 = var2.String;
                                    var3 = undefined;
                                    var8 = var6.bind(var3)(var1);
                                    var6 = var7.prototype;
                                    var6 = Object.create(var6, {constructor: {value: var7}});
                                    var9 = var6;
                                    var3 = new var9[var7](var8, var7);
                                    var3 = var3 instanceof Object ? var3 : var6;
                                    return var3;
case 56:
                                    var3 = 'body';
                                    var3 = var3 in var1;
                                    if(!var3) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                                    var3 = var1.body;
                                    if(!(var5 != var3)) { _fun0008_ip = 57; continue _fun0008 }
case 59:
                                    var3 = var1.body;
                                    var3 = typeof var3;
                                    if(!(var4 === var3)) { _fun0008_ip = 57; continue _fun0008 }
case 60:
                                    var4 = var1.body;
                                    var3 = 'message';
                                    var3 = var3 in var4;
                                    if(var3) { _fun0008_ip = 61; continue _fun0008 }
case 57:
                                    var4 = var2.Object;
                                    var3 = var4.entries;
                                    var5 = var3.bind(var4)(var1);
                                    var4 = var5.map;
                                    var3 = function(arg1) {
                                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                            var5 = arg1;
                                            var1 = var5[Symbol.iterator];
                                            var5 = var1().next;
                                            var3 = var5().value;
                                            var2 = var1;
                                            var4 = undefined;
                                            var2 = var2 === var4;
                                            var6 = undefined;
                                            if(var2) { _fun0009_ip = 7; continue _fun0009 }
case 62:
                                            var6 = var3;
case 7:
                                            var3 = undefined;
                                            if(var2) { _fun0009_ip = 63; continue _fun0009 }
case 53:
                                            var7 = var5().value;
                                            var5 = var1;
                                            var5 = var5 === var4;
                                            var3 = undefined;
                                            var2 = var5;
                                            if(var5) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                                            var3 = var7;
                                            var2 = var5;
case 63:
                                            if(var2) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                                            var1.return();
case 65:
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
                                    var6 = var4.bind(var5)(var3);
                                    var5 = _closure1_slot13;
                                    var4 = var6.join;
                                    var3 = ',';
                                    var8 = var4.bind(var6)(var3);
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {constructor: {value: var5}});
                                    var9 = var4;
                                    var3 = new var9[var5](var8, var7);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    var5 = var3.setStatus;
                                    var4 = var1.status;
                                    var4 = var5.bind(var3)(var4);
                                    return var3;
case 61:
                                    var4 = _closure1_slot13;
                                    var5 = var2.String;
                                    var2 = var1.body;
                                    var3 = var2.message;
                                    var2 = undefined;
                                    var8 = var5.bind(var2)(var3);
                                    var3 = var4.prototype;
                                    var3 = Object.create(var3, {constructor: {value: var4}});
                                    var9 = var3;
                                    var2 = new var9[var4](var8, var7);
                                    var2 = var2 instanceof Object ? var2 : var3;
                                    var4 = var2.setStatus;
                                    var3 = var1.status;
                                    var3 = var4.bind(var2)(var3);
                                    return var2;
case 45:
                                    return var1;
                                }
                            };
                            var9 = var8.bind(var3)(var9);
                            var10 = var5;
                            var8 = var10.setState;
                            var5 = {};
                            var5['error'] = var9;
                            var11 = false;
                            var5['isLoading'] = var11;
                            var5 = var8.bind(var10)(var5);
                            var8 = _closure2_slot8;
                            var8 = var8.bind(var3)(var9);
                            var5 = var8;
                            if(!var8) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                            var7 = _closure2_slot6;
                            var6 = var6.fails;
                            var5 = var7 > var6;
case 67:
                            if(!var5) { _fun0007_ip = 40; continue _fun0007 }
case 69:
                            var5 = global;
                            var6 = var5.Promise;
                            var5 = var6.prototype;
                            var5 = Object.create(var5, {constructor: {value: var6}});
                            var19 = function(arg1, arg2) {
                                var2 = arg1;
                                var _closure6_slot0 = var2;
                                var2 = arg2;
                                var _closure6_slot1 = var2;
                                var3 = _closure5_slot4;
                                var2 = var3.fail;
                                var1 = function() {
                                    var3 = _closure2_slot11;
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
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var20 = var5;
                            var4 = new var20[var6](var19, var18);
                            var4 = var4 instanceof Object ? var4 : var5;
                            SaveGenerator(address=473);
case 70:
                            return var4;
case 71:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(!var5) { _fun0007_ip = 40; continue _fun0007 }
case 72:
                            return var4;
case 40:
                            return var3;
case 34:
                            return var2;
case 28:
                            return var1;
                        }
                    };
                    var2 = var1.next;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot12 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot12 = var1;
            var1 = function useCfsHook(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var8 = 0;
                    var18 = 0;
                    var4 = copyRestArgs(var18);
                    var5 = undefined;
                    var _closure3_slot1 = var5;
                    var _closure3_slot2 = var5;
                    var1 = _closure1_slot12;
                    var7 = var1.bind(var5)(var4);
                    var6 = _closure1_slot4;
                    var1 = 2;
                    var6 = var6.bind(var5)(var7, var1);
                    var7 = var6[var8];
                    var1 = 1;
                    var1 = var6[var1];
                    var6 = var4 === var7;
                    if(var6) { _fun0010_ip = 33; continue _fun0010 }
case 65:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 9;
                    var9 = var11[var9];
                    var10 = var10.bind(var5)(var9);
                    var9 = var10.areArraysShallowEqual;
                    var6 = var9.bind(var10)(var4, var7);
case 33:
                    if(var6) { _fun0010_ip = 9; continue _fun0010 }
case 73:
                    var1 = var1.bind(var5)(var4);
case 9:
                    var _closure3_slot0 = var7;
                    var1 = global;
                    var9 = var1.Array;
                    var6 = var9.isArray;
                    var4 = _closure2_slot0;
                    var6 = var6.bind(var9)(var4);
                    var4 = _closure2_slot0;
                    if(var6) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                    var9 = new Array(1);
                    var9[0] = var4;
                    _fun0010_ip = 76; continue _fun0010;
case 74:
                    var9 = var4;
case 76:
                    var6 = _closure2_slot1;
                    var4 = new Array(0);
                    var18 = var4;
                    var17 = var7;
                    var16 = 0;
                    var8 = arraySpread(var18, var17, var16);
                    var18 = var6;
                    var17 = var4;
                    var16 = undefined;
                    var8 = apply(var18, var17, var16);
                    _closure3_slot1 = var8;
                    var1 = _closure2_slot10;
                    var6 = var1.bind(var5)(var8);
                    _closure3_slot2 = var6;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var11 = 12;
                    var1 = var1[var11];
                    var12 = var4.bind(var5)(var1);
                    var10 = var12.useStateFromStores;
                    var4 = new Array(1);
                    var4[0] = var7;
                    var1 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure2_slot4;
                            var1 = null;
                            var3 = var1 == var3;
                            var1 = undefined;
                            if(var3) { _fun0011_ip = 77; continue _fun0011 }
case 78:
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
case 77:
                            return var1;
                        }
                    };
                    var1 = var10.bind(var12)(var9, var1, var4);
                    var4 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            var1 = var1 == var2;
                            if(!var1) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                            var2 = arg1;
                            var1 = var2.isLoading;
case 79:
                            return var1;
                        }
                    };
                    var4 = var6.bind(var5)(var4);
                    var10 = null;
                    var14 = var9;
                    if(!(var10 != var1)) { _fun0010_ip = 81; continue _fun0010 }
case 82:
                    var4 = var1;
case 81:
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var11];
                    var13 = var9.bind(var5)(var1);
                    var12 = var13.useStateFromStores;
                    var9 = new Array(1);
                    var9[0] = var7;
                    var1 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var3 = _closure2_slot5;
                            var1 = null;
                            var3 = var1 == var3;
                            var1 = undefined;
                            if(var3) { _fun0013_ip = 77; continue _fun0013 }
case 78:
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
case 77:
                            return var1;
                        }
                    };
                    var1 = var12.bind(var13)(var14, var1, var9);
                    var9 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            var2 = var1 == var2;
                            if(!var2) { _fun0014_ip = 62; continue _fun0014 }
case 80:
                            var2 = arg1;
                            var1 = var2.error;
case 62:
                            return var1;
                        }
                    };
                    var9 = var6.bind(var5)(var9);
                    if(!(var10 != var1)) { _fun0010_ip = 83; continue _fun0010 }
case 84:
                    var9 = var1;
case 83:
                    var10 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var11];
                    var13 = var10.bind(var5)(var1);
                    var12 = var13.useStateFromStores;
                    var11 = new Array(1);
                    var11[0] = var7;
                    var15 = _closure1_slot16;
                    var17 = function() {
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
                    var19 = var13;
                    var18 = var14;
                    var16 = var11;
                    var10 = var19[var12](var18, var17, var16, var15, var14);
                    var12 = _closure1_slot11;
                    var11 = new Array(3);
                    var11[0] = var8;
                    var11[1] = var7;
                    var11[2] = var6;
                    var1 = function() {
                        var3 = _closure2_slot11;
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
                    var1 = var12.bind(var5)(var1, var11);
                    var1 = {};
                    var1['data'] = var10;
                    var1['error'] = var9;
                    var1['isLoading'] = var4;
                    var4 = _closure1_slot10;
                    var3 = new Array(3);
                    var3[0] = var8;
                    var3[1] = var7;
                    var3[2] = var6;
                    var2 = function() {
                        var3 = _closure2_slot11;
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
                    var2 = var4.bind(var5)(var2, var3);
                    var1['refetch'] = var2;
                    return var1;
                }
            };
            var3 = global;
            var3 = var3.Map;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var7 = var5;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var5;
            _closure2_slot9 = var3;
            var3 = _closure1_slot3;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0015_ip = 85; continue _fun0015 }
case 86:
                        var11 = 0;
                        var6 = copyRestArgs(var11);
                        var4 = undefined;
                        SaveGenerator(address=22);
case 87:
                        return var4;
case 88:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0015_ip = 89; continue _fun0015 }
case 90:
                        var7 = _closure2_slot1;
                        var5 = new Array(0);
                        var11 = var5;
                        var10 = var6;
                        var9 = 0;
                        var8 = arraySpread(var11, var10, var9);
                        var11 = var7;
                        var10 = var5;
                        var9 = undefined;
                        var7 = apply(var11, var10, var9);
                        var5 = _closure2_slot10;
                        var8 = var5.bind(var4)(var7);
                        var5 = var8.getState;
                        var5 = var5.bind(var8)();
                        var8 = var5.backoff;
                        var5 = var8.succeed;
                        var5 = var5.bind(var8)();
                        var5 = _closure2_slot11;
                        var3 = {};
                        var3['queryId'] = var7;
                        var3['args'] = var6;
                        var6 = true;
                        var3['refetch'] = var6;
                        var3 = var5.bind(var4)(var3);
                        SaveGenerator(address=130);
case 91:
                        return var3;
case 22:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0015_ip = 75; continue _fun0015 }
case 92:
                        return var4;
case 75:
                        return var3;
case 89:
                        return var2;
case 85:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1['refetch'] = var2;
            return var1;
        }
    };
    var3['createFetchStore'] = var2;
    return var1;
})();