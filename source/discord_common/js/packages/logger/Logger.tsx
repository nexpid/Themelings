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
    var2 = function log() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot4 = var2;
    var2 = function nativeLog() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot5 = var2;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function Logger() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arguments[0];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0001_ip = 22; continue _fun0001 }
 18:
                var2 = 'default';
 22:
                var6 = _closure1_slot2;
                var5 = _closure2_slot0;
                var5 = var6.bind(var1)(var3, var5);
                var5 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var6 = arg1;
                        var13 = 1;
                        var5 = copyRestArgs(var13);
                        var10 = _closure1_slot4;
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
                        if(!var8) { _fun0002_ip = 152; continue _fun0002 }
 88:
                        var9 = _closure1_slot5;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0002_ip = 152; continue _fun0002 }
 98:
                        var3 = _closure1_slot5;
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
 152:
                        return var1;
                    }
                };
                var3['logDangerously'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var6 = arg1;
                        var8 = 1;
                        var14 = var8;
                        var5 = copyRestArgs(var14);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var4 = var7.checkLogForPII;
                        var2 = new Array(1);
                        var2[0] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var8;
                        var8 = arraySpread(var14, var13, var12);
                        var14 = var4;
                        var13 = var2;
                        var12 = var7;
                        var2 = apply(var14, var13, var12);
                        var10 = _closure1_slot4;
                        var8 = _closure3_slot0;
                        var4 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var4;
                        var7 = 'log';
                        var9[1] = var7;
                        var9[2] = var6;
                        var4 = 3;
                        var14 = var9;
                        var13 = var5;
                        var12 = var4;
                        var11 = arraySpread(var14, var13, var12);
                        var14 = var10;
                        var13 = var9;
                        var12 = undefined;
                        var9 = apply(var14, var13, var12);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0003_ip = 215; continue _fun0003 }
 151:
                        var9 = _closure1_slot5;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0003_ip = 215; continue _fun0003 }
 161:
                        var3 = _closure1_slot5;
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
 215:
                        return var1;
                    }
                };
                var3['log'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var6 = arg1;
                        var13 = 1;
                        var5 = copyRestArgs(var13);
                        var10 = _closure1_slot4;
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
                        if(!var8) { _fun0004_ip = 152; continue _fun0004 }
 88:
                        var9 = _closure1_slot5;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0004_ip = 152; continue _fun0004 }
 98:
                        var3 = _closure1_slot5;
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
 152:
                        return var1;
                    }
                };
                var3['verboseDangerously'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var6 = arg1;
                        var8 = 1;
                        var14 = var8;
                        var5 = copyRestArgs(var14);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var4 = var7.checkLogForPII;
                        var2 = new Array(1);
                        var2[0] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var8;
                        var8 = arraySpread(var14, var13, var12);
                        var14 = var4;
                        var13 = var2;
                        var12 = var7;
                        var2 = apply(var14, var13, var12);
                        var10 = _closure1_slot4;
                        var8 = _closure3_slot0;
                        var4 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var4;
                        var7 = 'debug';
                        var9[1] = var7;
                        var9[2] = var6;
                        var4 = 3;
                        var14 = var9;
                        var13 = var5;
                        var12 = var4;
                        var11 = arraySpread(var14, var13, var12);
                        var14 = var10;
                        var13 = var9;
                        var12 = undefined;
                        var9 = apply(var14, var13, var12);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0005_ip = 215; continue _fun0005 }
 151:
                        var9 = _closure1_slot5;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0005_ip = 215; continue _fun0005 }
 161:
                        var3 = _closure1_slot5;
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
 215:
                        return var1;
                    }
                };
                var3['verbose'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var6 = arg1;
                        var8 = 1;
                        var14 = var8;
                        var5 = copyRestArgs(var14);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var4 = var7.checkLogForPII;
                        var2 = new Array(1);
                        var2[0] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var8;
                        var8 = arraySpread(var14, var13, var12);
                        var14 = var4;
                        var13 = var2;
                        var12 = var7;
                        var2 = apply(var14, var13, var12);
                        var10 = _closure1_slot4;
                        var8 = _closure3_slot0;
                        var4 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var4;
                        var7 = 'info';
                        var9[1] = var7;
                        var9[2] = var6;
                        var4 = 3;
                        var14 = var9;
                        var13 = var5;
                        var12 = var4;
                        var11 = arraySpread(var14, var13, var12);
                        var14 = var10;
                        var13 = var9;
                        var12 = undefined;
                        var9 = apply(var14, var13, var12);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0006_ip = 215; continue _fun0006 }
 151:
                        var9 = _closure1_slot5;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0006_ip = 215; continue _fun0006 }
 161:
                        var3 = _closure1_slot5;
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
 215:
                        return var1;
                    }
                };
                var3['info'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var6 = arg1;
                        var8 = 1;
                        var14 = var8;
                        var5 = copyRestArgs(var14);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var4 = var7.checkLogForPII;
                        var2 = new Array(1);
                        var2[0] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var8;
                        var8 = arraySpread(var14, var13, var12);
                        var14 = var4;
                        var13 = var2;
                        var12 = var7;
                        var2 = apply(var14, var13, var12);
                        var10 = _closure1_slot4;
                        var8 = _closure3_slot0;
                        var4 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var4;
                        var7 = 'warn';
                        var9[1] = var7;
                        var9[2] = var6;
                        var4 = 3;
                        var14 = var9;
                        var13 = var5;
                        var12 = var4;
                        var11 = arraySpread(var14, var13, var12);
                        var14 = var10;
                        var13 = var9;
                        var12 = undefined;
                        var9 = apply(var14, var13, var12);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0007_ip = 215; continue _fun0007 }
 151:
                        var9 = _closure1_slot5;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0007_ip = 215; continue _fun0007 }
 161:
                        var3 = _closure1_slot5;
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
 215:
                        return var1;
                    }
                };
                var3['warn'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var6 = arg1;
                        var8 = 1;
                        var14 = var8;
                        var5 = copyRestArgs(var14);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var4 = var7.checkLogForPII;
                        var2 = new Array(1);
                        var2[0] = var6;
                        var14 = var2;
                        var13 = var5;
                        var12 = var8;
                        var8 = arraySpread(var14, var13, var12);
                        var14 = var4;
                        var13 = var2;
                        var12 = var7;
                        var2 = apply(var14, var13, var12);
                        var10 = _closure1_slot4;
                        var8 = _closure3_slot0;
                        var4 = var8.name;
                        var9 = new Array(3);
                        var9[0] = var4;
                        var7 = 'error';
                        var9[1] = var7;
                        var9[2] = var6;
                        var4 = 3;
                        var14 = var9;
                        var13 = var5;
                        var12 = var4;
                        var11 = arraySpread(var14, var13, var12);
                        var14 = var10;
                        var13 = var9;
                        var12 = undefined;
                        var9 = apply(var14, var13, var12);
                        var8 = var8.nativeLoggerEnabled;
                        if(!var8) { _fun0008_ip = 215; continue _fun0008 }
 151:
                        var9 = _closure1_slot5;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0008_ip = 215; continue _fun0008 }
 161:
                        var3 = _closure1_slot5;
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
 215:
                        return var1;
                    }
                };
                var3['error'] = var5;
                var5 = function(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var6 = arg1;
                        var13 = 1;
                        var5 = copyRestArgs(var13);
                        var10 = _closure1_slot4;
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
                        if(!var8) { _fun0009_ip = 152; continue _fun0009 }
 88:
                        var9 = _closure1_slot5;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0009_ip = 152; continue _fun0009 }
 98:
                        var3 = _closure1_slot5;
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
 152:
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
                var4 = function(arg1, arg2) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var6 = arg1;
                        var13 = 1;
                        var5 = copyRestArgs(var13);
                        var10 = _closure1_slot4;
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
                        if(!var8) { _fun0010_ip = 154; continue _fun0010 }
 90:
                        var9 = _closure1_slot5;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0010_ip = 154; continue _fun0010 }
 100:
                        var3 = _closure1_slot5;
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
 154:
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
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/logger/Logger.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function setLogFn(arg1) {
        var1 = arg1;
        _closure1_slot4 = var1;
        var1 = undefined;
        return var1;
    };
    var3['setLogFn'] = var5;
    var5 = function setNativeLogFn(arg1) {
        var1 = arg1;
        _closure1_slot5 = var1;
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