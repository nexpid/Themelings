// discord_common/js/packages/logger/Logger.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = function log() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot5 = var2;
    var2 = function nativeLog() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot6 = var2;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function Logger() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arguments[0];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = 'default';
case 2:
                var _closure3_slot1 = var3;
                var6 = _closure1_slot3;
                var5 = _closure2_slot0;
                var5 = var6.bind(var1)(var3, var5);
                var5 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var6 = arg1;
                        var13 = 1;
                        var5 = copyRestArgs(var13);
                        var10 = _closure1_slot5;
                        var8 = _closure3_slot0;
                        var1 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var1;
                        var7 = 'log';
                        var9[1] = var7;
                        var9[2] = var6;
                        var4 = 3;
                        var13 = var9;
                        var12 = var5;
                        var11 = var4;
                        var1 = arraySpread(var13, var12, var11);
                        var1 = undefined;
                        var13 = var10;
                        var12 = var9;
                        var11 = undefined;
                        var9 = apply(var13, var12, var11);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var9 = _closure1_slot6;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                        var3 = _closure1_slot6;
                        var2 = _closure3_slot0;
                        var8 = var2.name;
                        var2 = new Array(3);
                        var2[0] = var8;
                        var2[1] = var7;
                        var2[2] = var6;
                        var13 = var2;
                        var12 = var5;
                        var11 = var4;
                        var4 = arraySpread(var13, var12, var11);
                        var13 = var3;
                        var12 = var2;
                        var11 = undefined;
                        var2 = apply(var13, var12, var11);
case 4:
                        return var1;
                    }
                };
                var3['logDangerously'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var6 = arg1;
                        var9 = 1;
                        var14 = var9;
                        var5 = copyRestArgs(var14);
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var4 = 3;
                        var2 = var1[var4];
                        var1 = undefined;
                        var8 = var7.bind(var1)(var2);
                        var7 = var8.checkLogForPII;
                        var2 = new Array(1);
                        var2[0] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var9;
                        var9 = arraySpread(var14, var13, var12);
                        var14 = var7;
                        var13 = var2;
                        var12 = var8;
                        var2 = apply(var14, var13, var12);
                        var10 = _closure1_slot5;
                        var8 = _closure3_slot0;
                        var7 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var7;
                        var7 = 'log';
                        var9[1] = var7;
                        var9[2] = var6;
                        var14 = var9;
                        var13 = var5;
                        var12 = var4;
                        var11 = arraySpread(var14, var13, var12);
                        var14 = var10;
                        var13 = var9;
                        var12 = undefined;
                        var9 = apply(var14, var13, var12);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var9 = _closure1_slot6;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0003_ip = 7; continue _fun0003 }
case 9:
                        var3 = _closure1_slot6;
                        var2 = _closure3_slot0;
                        var8 = var2.name;
                        var2 = new Array(3);
                        var2[0] = var8;
                        var2[1] = var7;
                        var2[2] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var4;
                        var4 = arraySpread(var14, var13, var12);
                        var14 = var3;
                        var13 = var2;
                        var12 = undefined;
                        var2 = apply(var14, var13, var12);
case 7:
                        return var1;
                    }
                };
                var3['log'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var6 = arg1;
                        var13 = 1;
                        var5 = copyRestArgs(var13);
                        var10 = _closure1_slot5;
                        var8 = _closure3_slot0;
                        var1 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var1;
                        var7 = 'debug';
                        var9[1] = var7;
                        var9[2] = var6;
                        var4 = 3;
                        var13 = var9;
                        var12 = var5;
                        var11 = var4;
                        var1 = arraySpread(var13, var12, var11);
                        var1 = undefined;
                        var13 = var10;
                        var12 = var9;
                        var11 = undefined;
                        var9 = apply(var13, var12, var11);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                        var9 = _closure1_slot6;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0004_ip = 4; continue _fun0004 }
case 6:
                        var3 = _closure1_slot6;
                        var2 = _closure3_slot0;
                        var8 = var2.name;
                        var2 = new Array(3);
                        var2[0] = var8;
                        var2[1] = var7;
                        var2[2] = var6;
                        var13 = var2;
                        var12 = var5;
                        var11 = var4;
                        var4 = arraySpread(var13, var12, var11);
                        var13 = var3;
                        var12 = var2;
                        var11 = undefined;
                        var2 = apply(var13, var12, var11);
case 4:
                        return var1;
                    }
                };
                var3['verboseDangerously'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var6 = arg1;
                        var9 = 1;
                        var14 = var9;
                        var5 = copyRestArgs(var14);
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var4 = 3;
                        var2 = var1[var4];
                        var1 = undefined;
                        var8 = var7.bind(var1)(var2);
                        var7 = var8.checkLogForPII;
                        var2 = new Array(1);
                        var2[0] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var9;
                        var9 = arraySpread(var14, var13, var12);
                        var14 = var7;
                        var13 = var2;
                        var12 = var8;
                        var2 = apply(var14, var13, var12);
                        var10 = _closure1_slot5;
                        var8 = _closure3_slot0;
                        var7 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var7;
                        var7 = 'debug';
                        var9[1] = var7;
                        var9[2] = var6;
                        var14 = var9;
                        var13 = var5;
                        var12 = var4;
                        var11 = arraySpread(var14, var13, var12);
                        var14 = var10;
                        var13 = var9;
                        var12 = undefined;
                        var9 = apply(var14, var13, var12);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0005_ip = 7; continue _fun0005 }
case 8:
                        var9 = _closure1_slot6;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0005_ip = 7; continue _fun0005 }
case 9:
                        var3 = _closure1_slot6;
                        var2 = _closure3_slot0;
                        var8 = var2.name;
                        var2 = new Array(3);
                        var2[0] = var8;
                        var2[1] = var7;
                        var2[2] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var4;
                        var4 = arraySpread(var14, var13, var12);
                        var14 = var3;
                        var13 = var2;
                        var12 = undefined;
                        var2 = apply(var14, var13, var12);
case 7:
                        return var1;
                    }
                };
                var3['verbose'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var6 = arg1;
                        var9 = 1;
                        var14 = var9;
                        var5 = copyRestArgs(var14);
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var4 = 3;
                        var2 = var1[var4];
                        var1 = undefined;
                        var8 = var7.bind(var1)(var2);
                        var7 = var8.checkLogForPII;
                        var2 = new Array(1);
                        var2[0] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var9;
                        var9 = arraySpread(var14, var13, var12);
                        var14 = var7;
                        var13 = var2;
                        var12 = var8;
                        var2 = apply(var14, var13, var12);
                        var10 = _closure1_slot5;
                        var8 = _closure3_slot0;
                        var7 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var7;
                        var7 = 'info';
                        var9[1] = var7;
                        var9[2] = var6;
                        var14 = var9;
                        var13 = var5;
                        var12 = var4;
                        var11 = arraySpread(var14, var13, var12);
                        var14 = var10;
                        var13 = var9;
                        var12 = undefined;
                        var9 = apply(var14, var13, var12);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0006_ip = 7; continue _fun0006 }
case 8:
                        var9 = _closure1_slot6;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0006_ip = 7; continue _fun0006 }
case 9:
                        var3 = _closure1_slot6;
                        var2 = _closure3_slot0;
                        var8 = var2.name;
                        var2 = new Array(3);
                        var2[0] = var8;
                        var2[1] = var7;
                        var2[2] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var4;
                        var4 = arraySpread(var14, var13, var12);
                        var14 = var3;
                        var13 = var2;
                        var12 = undefined;
                        var2 = apply(var14, var13, var12);
case 7:
                        return var1;
                    }
                };
                var3['info'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var6 = arg1;
                        var9 = 1;
                        var14 = var9;
                        var5 = copyRestArgs(var14);
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var4 = 3;
                        var2 = var1[var4];
                        var1 = undefined;
                        var8 = var7.bind(var1)(var2);
                        var7 = var8.checkLogForPII;
                        var2 = new Array(1);
                        var2[0] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var9;
                        var9 = arraySpread(var14, var13, var12);
                        var14 = var7;
                        var13 = var2;
                        var12 = var8;
                        var2 = apply(var14, var13, var12);
                        var10 = _closure1_slot5;
                        var8 = _closure3_slot0;
                        var7 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var7;
                        var7 = 'warn';
                        var9[1] = var7;
                        var9[2] = var6;
                        var14 = var9;
                        var13 = var5;
                        var12 = var4;
                        var11 = arraySpread(var14, var13, var12);
                        var14 = var10;
                        var13 = var9;
                        var12 = undefined;
                        var9 = apply(var14, var13, var12);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0007_ip = 7; continue _fun0007 }
case 8:
                        var9 = _closure1_slot6;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0007_ip = 7; continue _fun0007 }
case 9:
                        var3 = _closure1_slot6;
                        var2 = _closure3_slot0;
                        var8 = var2.name;
                        var2 = new Array(3);
                        var2[0] = var8;
                        var2[1] = var7;
                        var2[2] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var4;
                        var4 = arraySpread(var14, var13, var12);
                        var14 = var3;
                        var13 = var2;
                        var12 = undefined;
                        var2 = apply(var14, var13, var12);
case 7:
                        return var1;
                    }
                };
                var3['warn'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var6 = arg1;
                        var9 = 1;
                        var14 = var9;
                        var5 = copyRestArgs(var14);
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var4 = 3;
                        var2 = var1[var4];
                        var1 = undefined;
                        var8 = var7.bind(var1)(var2);
                        var7 = var8.checkLogForPII;
                        var2 = new Array(1);
                        var2[0] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var9;
                        var9 = arraySpread(var14, var13, var12);
                        var14 = var7;
                        var13 = var2;
                        var12 = var8;
                        var2 = apply(var14, var13, var12);
                        var10 = _closure1_slot5;
                        var8 = _closure3_slot0;
                        var7 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var7;
                        var7 = 'error';
                        var9[1] = var7;
                        var9[2] = var6;
                        var14 = var9;
                        var13 = var5;
                        var12 = var4;
                        var11 = arraySpread(var14, var13, var12);
                        var14 = var10;
                        var13 = var9;
                        var12 = undefined;
                        var9 = apply(var14, var13, var12);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0008_ip = 7; continue _fun0008 }
case 8:
                        var9 = _closure1_slot6;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0008_ip = 7; continue _fun0008 }
case 9:
                        var3 = _closure1_slot6;
                        var2 = _closure3_slot0;
                        var8 = var2.name;
                        var2 = new Array(3);
                        var2[0] = var8;
                        var2[1] = var7;
                        var2[2] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var4;
                        var4 = arraySpread(var14, var13, var12);
                        var14 = var3;
                        var13 = var2;
                        var12 = undefined;
                        var2 = apply(var14, var13, var12);
case 7:
                        return var1;
                    }
                };
                var3['error'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var6 = arg1;
                        var13 = 1;
                        var5 = copyRestArgs(var13);
                        var10 = _closure1_slot5;
                        var8 = _closure3_slot0;
                        var1 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var1;
                        var7 = 'trace';
                        var9[1] = var7;
                        var9[2] = var6;
                        var4 = 3;
                        var13 = var9;
                        var12 = var5;
                        var11 = var4;
                        var1 = arraySpread(var13, var12, var11);
                        var1 = undefined;
                        var13 = var10;
                        var12 = var9;
                        var11 = undefined;
                        var9 = apply(var13, var12, var11);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0009_ip = 4; continue _fun0009 }
case 5:
                        var9 = _closure1_slot6;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0009_ip = 4; continue _fun0009 }
case 6:
                        var3 = _closure1_slot6;
                        var2 = _closure3_slot0;
                        var8 = var2.name;
                        var2 = new Array(3);
                        var2[0] = var8;
                        var2[1] = var7;
                        var2[2] = var6;
                        var13 = var2;
                        var12 = var5;
                        var11 = var4;
                        var4 = arraySpread(var13, var12, var11);
                        var13 = var3;
                        var12 = var2;
                        var11 = undefined;
                        var2 = apply(var13, var12, var11);
case 4:
                        return var1;
                    }
                };
                var3['trace'] = var5;
                var5 = function(arg1, arg2) {
                    var2 = global;
                    var3 = var2.Date;
                    var1 = var3.now;
                    var3 = var1.bind(var3)();
                    var4 = arg2;
                    var1 = undefined;
                    var1 = var4.bind(var1)();
                    var5 = _closure3_slot0;
                    var4 = var5.log;
                    var6 = var2.Date;
                    var2 = var6.now;
                    var2 = var2.bind(var6)();
                    var3 = var2 - var3;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                var3['time'] = var5;
                var5 = function() {
                    var4 = _closure1_slot2;
                    var3 = undefined;
                    var2 = function* (arg1, arg2) {
                        var1 = function* anon_0_(arg1, arg2) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0010_ip = 6; continue _fun0010 }
case 10:
                                var3 = global;
                                var4 = var3.Date;
                                var2 = var4.now;
                                var4 = var2.bind(var4)();
                                var5 = arg2;
                                var2 = undefined;
                                var2 = var5.bind(var2)();
                                SaveGenerator(address=37);
case 11:
                                return var2;
case 12:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0010_ip = 13; continue _fun0010 }
case 14:
                                var6 = _closure3_slot1;
                                var5 = var6.log;
                                var7 = var3.Date;
                                var3 = var7.now;
                                var3 = var3.bind(var7)();
                                var7 = var3 - var4;
                                var4 = arg1;
                                var3 = 'ms';
                                var3 = var7 + var3;
                                var3 = var5.bind(var6)(var4, var3);
                                return var2;
case 13:
                                return var2;
case 6:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var5 = var5.bind(var1)();
                var3['timeAsync'] = var5;
                var4 = function(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var6 = arg1;
                        var13 = 1;
                        var5 = copyRestArgs(var13);
                        var10 = _closure1_slot5;
                        var8 = _closure3_slot0;
                        var1 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var1;
                        var7 = 'file-only';
                        var9[1] = var7;
                        var9[2] = var6;
                        var4 = 3;
                        var13 = var9;
                        var12 = var5;
                        var11 = var4;
                        var1 = arraySpread(var13, var12, var11);
                        var1 = undefined;
                        var13 = var10;
                        var12 = var9;
                        var11 = undefined;
                        var9 = apply(var13, var12, var11);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0011_ip = 15; continue _fun0011 }
case 16:
                        var9 = _closure1_slot6;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0011_ip = 15; continue _fun0011 }
case 17:
                        var3 = _closure1_slot6;
                        var2 = _closure3_slot0;
                        var8 = var2.name;
                        var2 = new Array(3);
                        var2[0] = var8;
                        var2[1] = var7;
                        var2[2] = var6;
                        var13 = var2;
                        var12 = var5;
                        var11 = var4;
                        var4 = arraySpread(var13, var12, var11);
                        var13 = var3;
                        var12 = var2;
                        var11 = undefined;
                        var2 = apply(var13, var12, var11);
case 15:
                        return var1;
                    }
                };
                var3['fileOnly'] = var4;
                var3['name'] = var2;
                var2 = false;
                var3['nativeLoggerEnabled'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'enableNativeLogger';
        var1['key'] = var5;
        var2 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['nativeLoggerEnabled'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/logger/Logger.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function setLogFn(arg1) {
        var1 = arg1;
        _closure1_slot5 = var1;
        var1 = undefined;
        return var1;
    };
    var3['setLogFn'] = var5;
    var5 = function setNativeLogFn(arg1) {
        var1 = arg1;
        _closure1_slot6 = var1;
        var1 = undefined;
        return var1;
    };
    var3['setNativeLogFn'] = var5;
    var4 = function defaultLogFn(arg1, arg2, arg3, arg4) {
        var2 = 3;
        var1 = copyRestArgs(var2);
        var1 = undefined;
        return var1;
    };
    var3['defaultLogFn'] = var4;
    var3['Logger'] = var2;
    return var1;
})();