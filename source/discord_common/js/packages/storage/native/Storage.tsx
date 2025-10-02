// discord_common/js/packages/storage/native/Storage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var1 = function parseValue(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3: // try_start_0
            var2 = global;
            var4 = var2.JSON;
            var3 = var4.parse;
            var2 = var1;
            var1 = var3.bind(var4)(var2);
case 4: // try_end0
            _fun0001_ip = 2; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.NativeModules;
    var7 = var7.Platform;
    var7 = 4;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = var4.DCDStrongboxManager;
    var _closure1_slot6 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function ProxyAsyncStorage() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot3;
            var2 = _closure2_slot2;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = global;
            var6 = var2.Promise;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var8 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var2['parseResolve'] = var1;
                var1 = undefined;
                return var1;
            };
            var9 = var5;
            var4 = new var9[var6](var8, var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['parsePromise'] = var4;
            var4 = {};
            var3['storage'] = var4;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var9 = var4;
            var2 = new var9[var2](var8);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['secureKeys'] = var2;
            var2 = false;
            var3['hasLoaded'] = var2;
            return var1;
        };
        var _closure2_slot2 = var3;
        var5 = {};
        var2 = 'refresh';
        var5['key'] = var2;
        var2 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var9 = arguments[0];
                var6 = this;
                var _closure3_slot0 = var6;
                var5 = undefined;
                if(!(var9 === var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var9 = new Array(0);
case 6:
                var2 = arguments[1];
                if(!(var2 === var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = global;
                var3 = var2.Set;
                var2 = var3.prototype;
                var14 = Object.create(var2, {constructor: {value: var3}});
                var2 = new var14[var3](var13);
case 8:
                var2 = global;
                var3 = var2.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var14 = var4;
                var3 = new var14[var3](var13);
                var3 = var3 instanceof Object ? var3 : var4;
                var6['secureKeys'] = var3;
                var4 = var2.Promise;
                var3 = var4.all;
                var8 = _closure1_slot5;
                var2 = var8.refresh;
                var8 = var2.bind(var8)(var9);
                var2 = new Array(2);
                var2[0] = var8;
                var9 = _closure1_slot6;
                var8 = null;
                var8 = var8 == var9;
                var5 = undefined;
                if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var8 = _closure1_slot6;
                var7 = var8.refresh;
                var12 = var6.secureKeys;
                var6 = new Array(0);
                var11 = 0;
                var13 = var6;
                var9 = arraySpread(var13, var12, var11);
                var5 = var7.bind(var8)(var6);
case 10:
                var2[1] = var5;
                var3 = var3.bind(var4)(var2);
                var2 = var3.then;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var6 = arg1;
                        var1 = var6[Symbol.iterator];
                        var6 = var1().next;
                        var2 = var6().value;
                        var3 = var1;
                        var5 = undefined;
                        var4 = var3 === var5;
                        var3 = undefined;
                        if(var4) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var3 = var2;
case 12:
                        var2 = undefined;
                        if(var4) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var7 = var6().value;
                        var6 = var1;
                        var6 = var6 === var5;
                        var2 = undefined;
                        var4 = var6;
                        if(var6) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                        var2 = var7;
                        var4 = var6;
case 14:
                        if(var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var1.return();
case 17:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var7 = 5;
                        var4 = var4[var7];
                        var9 = var6.bind(var5)(var4);
                        var8 = var9.mark;
                        var6 = '💾';
                        var4 = 'Storage.refresh() Promise Resolved';
                        var4 = var8.bind(var9)(var6, var4);
                        var12 = var3;
                        var4 = 0;
                        var8 = 10000;
                        var6 = 0;
                        for(var9 in var12)
case 19:
                        {
                            var6 = var4;
case 20:
                            var18 = var9;
                            var14 = var3[var18];
                            var17 = var14.length;
                            var14 = var4 + var17;
                            var4 = var14;
                            if(!(var17 > var8)) { _fun0003_ip = 19; continue _fun0003 }
case 21:
                            var16 = _closure1_slot0;
                            var15 = _closure1_slot1;
                            var15 = var15[var7];
                            var16 = var16.bind(var5)(var15);
                            var15 = var16.addDetail;
                            var15 = var15.bind(var16)(var18, var17);
                            var4 = var14;
                            _fun0003_ip = 19; continue _fun0003;
                        }
case 22:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var7];
                        var5 = var4.bind(var5)(var1);
                        var4 = var5.addDetail;
                        var1 = 'TotalStorageSize';
                        var1 = var4.bind(var5)(var1, var6);
                        var4 = _closure3_slot0;
                        var1 = true;
                        var4['hasLoaded'] = var1;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var2;
        var2 = new Array(10);
        var2[0] = var5;
        var5 = {};
        var7 = 'parse';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var7 = arg1;
                var3 = var7[Symbol.iterator];
                var7 = var3().next;
                var8 = var7().value;
                var4 = var3;
                var5 = undefined;
                var6 = var4 === var5;
                var4 = undefined;
                if(var6) { _fun0004_ip = 5; continue _fun0004 }
case 23:
                var4 = var8;
case 5:
                var10 = undefined;
                if(var6) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var8 = var7().value;
                var7 = var3;
                var7 = var7 === var5;
                var10 = undefined;
                var6 = var7;
                if(var7) { _fun0004_ip = 24; continue _fun0004 }
case 18:
                var10 = var8;
                var6 = var7;
case 24:
                if(var6) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var3.return();
case 26:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 6;
                var8 = var7[var3];
                var9 = var6.bind(var5)(var8);
                var8 = function(arg1, arg2) {
                    var1 = _closure3_slot0;
                    var3 = var1.storage;
                    var2 = {};
                    var1 = false;
                    var2['parsed'] = var1;
                    var1 = arg1;
                    var2['rawData'] = var1;
                    var1 = arg2;
                    var3[var1] = var2;
                    var1 = undefined;
                    return var1;
                };
                var8 = var9.bind(var5)(var10, var8);
                var3 = var7[var3];
                var3 = var6.bind(var5)(var3);
                var1 = function(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var4 = arg1;
                        var3 = arg2;
                        var1 = _closure3_slot0;
                        var5 = var1.storage;
                        var2 = {};
                        var6 = false;
                        var2['parsed'] = var6;
                        var2['rawData'] = var4;
                        var5[var3] = var2;
                        var2 = var1.secureKeys;
                        var1 = var2.has;
                        var1 = var1.bind(var2)(var3);
                        if(!var1) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                        var2 = function migrateToStrongbox(arg1, arg2) {
                            var5 = arg1;
                            var _closure5_slot0 = var5;
                            var4 = _closure1_slot6;
                            var3 = var4.setItem;
                            var2 = arg2;
                            var3 = var3.bind(var4)(var5, var2);
                            var2 = var3.then;
                            var1 = function(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                    var1 = arg1;
                                    if(!var1) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                                    var3 = _closure1_slot5;
                                    var2 = var3.removeItem;
                                    var1 = _closure5_slot0;
                                    var1 = var2.bind(var3)(var1);
case 30:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3, var4);
case 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var5)(var4, var1);
                var1 = var2.parseResolve;
                var1 = var1.bind(var2)();
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var5['value'] = var7;
        var2[1] = var5;
        var5 = {};
        var7 = 'get';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var3 = var2.storage;
                var1 = var3.hasOwnProperty;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0007_ip = 30; continue _fun0007 }
case 32:
                var1 = arg2;
                return var1;
case 30:
                var1 = var2.storage;
                var5 = var1[var4];
                var3 = var5.parsed;
                var1 = var5;
                if(var3) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                var3 = var2.storage;
                var2 = {};
                var6 = true;
                var2['parsed'] = var6;
                var7 = _closure1_slot7;
                var6 = var5.rawData;
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var2['value'] = var5;
                var3[var4] = var2;
                var1 = var2;
case 33:
                var1 = var1.value;
                return var1;
            }
        };
        var5['value'] = var7;
        var2[2] = var5;
        var5 = {};
        var7 = 'getAfterRefresh';
        var5['key'] = var7;
        var8 = _closure1_slot2;
        var1 = undefined;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 18; continue _fun0008 }
case 3:
                    var _closure4_slot0 = var3;
                    var4 = arg1;
                    var _closure4_slot1 = var4;
                    var4 = var3.parsePromise;
                    var3 = var4.then;
                    var2 = function() {
                        var3 = _closure4_slot0;
                        var2 = var3.get;
                        var1 = _closure4_slot1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=48);
case 35:
                    return var2;
case 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 14; continue _fun0008 }
case 37:
                    return var2;
case 14:
                    return var2;
case 18:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot1 = var7;
        var7 = function getAfterRefresh() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var2[3] = var5;
        var5 = {};
        var7 = 'asyncGet';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var4;
                var3 = arg2;
                var _closure3_slot2 = var3;
                var3 = arg3;
                var _closure3_slot3 = var3;
                var3 = function handleCallback(arg1, arg2) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = arg2;
                        var6 = null;
                        if(!(var6 == var2)) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                        var3 = _closure3_slot2;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var6);
                        _fun0010_ip = 40; continue _fun0010;
case 38:
                        var5 = global;
                        var3 = var5.Date;
                        var1 = var3.now;
                        var7 = var1.bind(var3)();
                        var1 = _closure1_slot7;
                        var3 = undefined;
                        var2 = var1.bind(var3)(var2);
                        var8 = _closure3_slot0;
                        var10 = var8.storage;
                        var9 = {};
                        var8 = true;
                        var9['parsed'] = var8;
                        var9['value'] = var2;
                        var8 = arg1;
                        var10[var8] = var9;
                        var8 = var5.Date;
                        var5 = var8.now;
                        var5 = var5.bind(var8)();
                        var8 = var5 - var7;
                        var5 = _closure3_slot3;
                        if(!(var6 != var5)) { _fun0010_ip = 41; continue _fun0010 }
case 42:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var4 = 5;
                        var4 = var6[var4];
                        var7 = var5.bind(var3)(var4);
                        var6 = var7.mark;
                        var5 = _closure3_slot3;
                        var4 = '💾';
                        var4 = var6.bind(var7)(var4, var5, var8);
case 41:
                        var1 = _closure3_slot2;
                        var1 = var1.bind(var3)(var2);
case 40:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot4 = var3;
                var3 = var2.secureKeys;
                var2 = var3.has;
                var3 = var2.bind(var3)(var4);
                if(var3) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                var5 = _closure1_slot5;
                var3 = var5.getItem;
                var6 = var3.bind(var5)(var4);
                var5 = var6.then;
                var3 = function(arg1) {
                    var4 = _closure3_slot4;
                    var3 = _closure3_slot1;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var3 = var5.bind(var6)(var3);
                _fun0009_ip = 45; continue _fun0009;
case 43:
                var3 = _closure1_slot6;
                var2 = var3.getItem;
                var3 = var2.bind(var3)(var4);
                var2 = var3.then;
                var1 = function(arg1) {
                    var4 = _closure3_slot4;
                    var3 = _closure3_slot1;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
case 45:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var2[4] = var5;
        var5 = {};
        var7 = 'asyncGetRaw';
        var5['key'] = var7;
        var7 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 46; continue _fun0011 }
case 47:
                    var6 = null;
                    if(!(var6 != var5)) { _fun0011_ip = 48; continue _fun0011 }
case 6:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var7 = var4.bind(var2)(var3);
                    var4 = var7.mark;
                    var2 = 'Get: ';
                    var3 = var2 + var5;
                    var2 = '💾';
                    var2 = var4.bind(var7)(var2, var3);
case 48:
                    var2 = this;
                    var3 = var2.secureKeys;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var8);
                    if(var2) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                    var3 = _closure1_slot5;
                    var2 = var3.getItem;
                    var2 = var2.bind(var3)(var8);
                    _fun0011_ip = 51; continue _fun0011;
case 49:
                    var7 = _closure1_slot6;
                    var3 = var7.getItem;
                    var2 = var3.bind(var7)(var8);
case 51:
                    SaveGenerator(address=134);
case 52:
                    return var2;
case 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                    var7 = var6 == var2;
                    var3 = null;
                    if(var7) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                    var3 = var2;
                    if(!(var6 != var5)) { _fun0011_ip = 56; continue _fun0011 }
case 58:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 5;
                    var6 = var6[var4];
                    var4 = undefined;
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.mark;
                    var4 = 'Got: ';
                    var5 = var4 + var5;
                    var4 = '💾';
                    var4 = var6.bind(var7)(var4, var5);
                    var3 = var2;
case 56:
                    return var3;
case 54:
                    return var2;
case 46:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var7 = function asyncGetRaw() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var2[5] = var5;
        var5 = {};
        var7 = 'set';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = arg1;
            var5 = arg2;
            var3 = this;
            var2 = var3.storage;
            var1 = {};
            var6 = true;
            var1['parsed'] = var6;
            var1['value'] = var5;
            var2[var4] = var1;
            var1 = global;
            var2 = var1.JSON;
            var1 = var2.stringify;
            var2 = var1.bind(var2)(var5);
            var1 = var3.setRaw;
            var1 = var1.bind(var3)(var4, var2);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var2[6] = var5;
        var5 = {};
        var7 = 'setRaw';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = arg1;
                var3 = arg2;
                var2 = 'string';
                var1 = typeof var4;
                if(!(var2 === var1)) { _fun0012_ip = 45; continue _fun0012 }
case 59:
                var1 = typeof var3;
                if(!(var2 === var1)) { _fun0012_ip = 60; continue _fun0012 }
case 13:
                var1 = this;
                var2 = var1.secureKeys;
                var1 = var2.has;
                var2 = var1.bind(var2)(var4);
                if(var2) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                var5 = _closure1_slot5;
                var2 = var5.setItem;
                var2 = var2.bind(var5)(var4, var3);
                _fun0012_ip = 63; continue _fun0012;
case 61:
                var2 = _closure1_slot6;
                var1 = var2.setItem;
                var1 = var1.bind(var2)(var4, var3);
case 63:
                var1 = undefined;
                return var1;
case 60:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var7 = 'value must be a string';
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
case 45:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var7 = 'Key must be a string';
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var2[7] = var5;
        var5 = {};
        var7 = 'remove';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.storage;
                var2 = delete var2[var3];
                var2 = var1.secureKeys;
                var1 = var2.has;
                var2 = var1.bind(var2)(var3);
                if(var2) { _fun0013_ip = 64; continue _fun0013 }
case 2:
                var4 = _closure1_slot5;
                var2 = var4.removeItem;
                var2 = var2.bind(var4)(var3);
                _fun0013_ip = 65; continue _fun0013;
case 64:
                var2 = _closure1_slot6;
                var1 = var2.removeItem;
                var1 = var1.bind(var2)(var3);
case 65:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var2[8] = var5;
        var5 = {};
        var7 = 'clear';
        var5['key'] = var7;
        var6 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = this;
                var2 = {};
                var1['storage'] = var2;
                var4 = _closure1_slot5;
                var3 = var4.clear;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot6;
                var3 = null;
                if(!(var3 != var4)) { _fun0014_ip = 26; continue _fun0014 }
case 2:
                var3 = _closure1_slot6;
                var2 = var3.clear;
                var7 = var1.secureKeys;
                var1 = new Array(0);
                var6 = 0;
                var8 = var1;
                var4 = arraySpread(var8, var7, var6);
                var1 = var2.bind(var3)(var1);
case 26:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var2[9] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/storage/native/Storage.tsx';
    var4 = var5.bind(var6)(var4);
    var3['impl'] = var2;
    return var1;
})();