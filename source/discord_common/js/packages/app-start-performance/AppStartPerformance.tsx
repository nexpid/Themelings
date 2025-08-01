// discord_common/js/packages/app-start-performance/AppStartPerformance.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var7 = metroImportDefault;
        var3 = exports;
        var5 = dependencyMap;
        var4 = global;
        var9 = var4.Object;
        var8 = var9.defineProperty;
        var6 = {};
        var1 = true;
        var6['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var6);
        var1 = 0;
        var6 = var5[var1];
        var1 = undefined;
        var6 = var7.bind(var1)(var6);
        var _closure1_slot0 = var6;
        var6 = 1;
        var6 = var5[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot1 = var6;
        var6 = 2;
        var6 = var5[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot2 = var6;
        var6 = var4.globalThis;
        var6 = var6.__getTotalRequireTime;
        var7 = null;
        if(!(var7 == var6)) { _fun0001_ip = 115; continue _fun0001 }
 110:
        var6 = function() {
            var1 = 0;
            return var1;
        };
 115:
        var _closure1_slot3 = var6;
        var4 = var4.performance;
        var6 = 'undefined';
        var4 = typeof var4;
        var4 = var6 !== var4;
        var _closure1_slot4 = var4;
        var2 = function() {
            var4 = _closure1_slot2;
            var3 = function AppStartPerformance() {
                var3 = this;
                var4 = _closure1_slot1;
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                var2 = true;
                var3['isTracing_'] = var2;
                var2 = global;
                var5 = var2.Date;
                var4 = var5.now;
                var5 = var4.bind(var5)();
                var4 = 15000;
                var4 = var5 + var4;
                var3['endTime_'] = var4;
                var4 = 0;
                var3['lastImportDuration'] = var4;
                var5 = {};
                var5['index'] = var4;
                var6 = var2.Date;
                var2 = var6.now;
                var2 = var2.bind(var6)();
                var5['timestamp'] = var2;
                var2 = new Array(0);
                var5['logs'] = var2;
                var2 = new Array(0);
                var5['nativeLogs'] = var2;
                var2 = new Array(1);
                var2[0] = var5;
                var3['logGroups'] = var2;
                var2 = var3.logGroups;
                var2 = var2[var4];
                var2 = var2.logs;
                var3['logs'] = var2;
                var2 = '';
                var3['prefix'] = var2;
                return var1;
            };
            var _closure2_slot1 = var3;
            var5 = {};
            var2 = 'isTracing';
            var5['key'] = var2;
            var2 = function get() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = this;
                    var1 = _closure1_slot4;
                    var2 = !var1;
                    if(!var1) { _fun0002_ip = 25; continue _fun0002 }
 16:
                    var1 = var4.isTracing_;
                    var2 = !var1;
 25:
                    var1 = !var2;
                    if(var2) { _fun0002_ip = 77; continue _fun0002 }
 31:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = var4.endTime_;
                    var3 = var3 > var2;
                    var2 = !var3;
                    if(!var3) { _fun0002_ip = 74; continue _fun0002 }
 64:
                    var3 = false;
                    var4['isTracing_'] = var3;
                    var2 = false;
 74:
                    var1 = var2;
 77:
                    return var1;
                }
            };
            var5['get'] = var2;
            var2 = new Array(12);
            var2[0] = var5;
            var5 = {};
            var7 = 'endTime';
            var5['key'] = var7;
            var7 = function get() {
                var1 = this;
                var1 = var1.endTime_;
                return var1;
            };
            var5['get'] = var7;
            var7 = function set(arg1) {
                var2 = this;
                var1 = arg1;
                var2['endTime_'] = var1;
                var1 = true;
                var2['isTracing_'] = var1;
                var1 = undefined;
                return var1;
            };
            var5['set'] = var7;
            var2[1] = var5;
            var5 = {};
            var7 = 'resumeTracing';
            var5['key'] = var7;
            var7 = function value() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = this;
                    var1 = var2.isTracing;
                    if(var1) { _fun0003_ip = 110; continue _fun0003 }
 12:
                    var4 = var2.logGroups;
                    var3 = var4.unshift;
                    var1 = {};
                    var5 = var2.logGroups;
                    var5 = var5.length;
                    var1['index'] = var5;
                    var5 = global;
                    var6 = var5.Date;
                    var5 = var6.now;
                    var5 = var5.bind(var6)();
                    var1['timestamp'] = var5;
                    var5 = new Array(0);
                    var1['logs'] = var5;
                    var5 = new Array(0);
                    var1['nativeLogs'] = var5;
                    var1 = var3.bind(var4)(var1);
                    var3 = var2.logGroups;
                    var1 = 0;
                    var1 = var3[var1];
                    var1 = var1.logs;
                    var2['logs'] = var1;
 110:
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var3 = var1.bind(var3)();
                    var1 = 10000;
                    var1 = var3 + var1;
                    var2['endTime'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[2] = var5;
            var5 = {};
            var7 = 'mark';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = this;
                    var1 = var2.isTracing;
                    if(!var1) { _fun0004_ip = 117; continue _fun0004 }
 12:
                    var4 = var2.logs;
                    var3 = var4.push;
                    var1 = {};
                    var5 = arg1;
                    var1['emoji'] = var5;
                    var8 = var2.prefix;
                    var5 = global;
                    var6 = var5.HermesInternal;
                    var7 = var6.concat;
                    var6 = '';
                    var6 = var7.bind(var6)(var8);
                    var1['prefix'] = var6;
                    var6 = arg2;
                    var1['log'] = var6;
                    var6 = arg3;
                    var1['delta'] = var6;
                    var6 = var5.Date;
                    var5 = var6.now;
                    var5 = var5.bind(var6)();
                    var1['timestamp'] = var5;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2.addImportLogDetail;
                    var1 = var1.bind(var2)();
 117:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[3] = var5;
            var5 = {};
            var7 = 'markAndLog';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3, arg4) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var5 = arg3;
                    var2 = this;
                    var1 = var3.log;
                    var1 = var1.bind(var3)(var5);
                    var1 = var2.isTracing;
                    if(!var1) { _fun0005_ip = 111; continue _fun0005 }
 29:
                    var4 = var2.logs;
                    var3 = var4.push;
                    var1 = {};
                    var6 = arg2;
                    var1['emoji'] = var6;
                    var6 = var2.prefix;
                    var1['prefix'] = var6;
                    var1['log'] = var5;
                    var5 = arg4;
                    var1['delta'] = var5;
                    var5 = global;
                    var6 = var5.Date;
                    var5 = var6.now;
                    var5 = var5.bind(var6)();
                    var1['timestamp'] = var5;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2.addImportLogDetail;
                    var1 = var1.bind(var2)();
 111:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[4] = var5;
            var5 = {};
            var7 = 'addImportLogDetail';
            var5['key'] = var7;
            var7 = function value() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = this;
                    var2 = _closure1_slot3;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var4 = var3.lastImportDuration;
                    var5 = var2 - var4;
                    var4 = 25;
                    if(!(var5 > var4)) { _fun0006_ip = 84; continue _fun0006 }
 33:
                    var6 = var3.addDetail;
                    var4 = global;
                    var5 = var4.Math;
                    var4 = var5.ceil;
                    var5 = var4.bind(var5)(var2);
                    var4 = 'ms';
                    var5 = var5 + var4;
                    var4 = 'JS Imports';
                    var4 = var6.bind(var3)(var4, var5);
                    var3['lastImportDuration'] = var2;
 84:
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[5] = var5;
            var5 = {};
            var7 = 'markWithDelta';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var6 = this;
                    var2 = var6.logs;
                    var1 = var6.logs;
                    var3 = var1.length;
                    var1 = 1;
                    var1 = var3 - var1;
                    var2 = var2[var1];
                    var5 = var6.mark;
                    var7 = null;
                    var3 = var7 != var2;
                    var1 = undefined;
                    var4 = undefined;
                    if(!var3) { _fun0007_ip = 92; continue _fun0007 }
 50:
                    var3 = var2.timestamp;
                    var3 = var7 != var3;
                    var4 = undefined;
                    if(!var3) { _fun0007_ip = 92; continue _fun0007 }
 65:
                    var3 = global;
                    var7 = var3.Date;
                    var3 = var7.now;
                    var3 = var3.bind(var7)();
                    var2 = var2.timestamp;
                    var4 = var3 - var2;
 92:
                    var3 = arg1;
                    var2 = arg2;
                    var2 = var5.bind(var6)(var3, var2, var4);
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[6] = var5;
            var5 = {};
            var7 = 'markAt';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var8 = arg3;
                    var7 = this;
                    var1 = var7.isTracing;
                    if(!var1) { _fun0008_ip = 178; continue _fun0008 }
 18:
                    var1 = var7.logs;
                    var1 = var1.length;
                    var5 = 0;
                    var1 = var5 < var1;
                    var6 = null;
                    var2 = 0;
                    var4 = 0;
                    if(!var1) { _fun0008_ip = 92; continue _fun0008 }
 44:
                    var1 = var7.logs;
                    var1 = var1[var2];
                    var1 = var1.timestamp;
                    if(!(var6 != var1)) { _fun0008_ip = 71; continue _fun0008 }
 64:
                    var4 = var2;
                    if(!(!(var1 > var8))) { _fun0008_ip = 92; continue _fun0008 }
 71:
                    var2 = var2 + 1;
                    var1 = var7.logs;
                    var1 = var1.length;
                    var4 = var2;
                    if(var4 < var1) { _fun0008_ip = 44; continue _fun0008 }
 92:
                    var3 = var7.logs;
                    var2 = var3.splice;
                    var1 = {};
                    var9 = arg1;
                    var1['emoji'] = var9;
                    var9 = arg2;
                    var1['log'] = var9;
                    var1['timestamp'] = var8;
                    var7 = var7.logs;
                    var8 = var7[var4];
                    var9 = var6 == var8;
                    var7 = undefined;
                    if(var9) { _fun0008_ip = 152; continue _fun0008 }
 146:
                    var7 = var8.prefix;
 152:
                    var8 = var6 != var7;
                    var6 = '';
                    if(!var8) { _fun0008_ip = 166; continue _fun0008 }
 163:
                    var6 = var7;
 166:
                    var1['prefix'] = var6;
                    var1 = var2.bind(var3)(var4, var5, var1);
 178:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[7] = var5;
            var5 = {};
            var7 = 'addDetail';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = this;
                    var1 = var4.isTracing;
                    if(!var1) { _fun0009_ip = 121; continue _fun0009 }
 12:
                    var3 = var4.logs;
                    var2 = var3.push;
                    var1 = {};
                    var6 = var4.logs;
                    var5 = var4.logs;
                    var7 = var5.length;
                    var5 = 1;
                    var5 = var7 - var5;
                    var5 = var6[var5];
                    var5 = var5.emoji;
                    var1['emoji'] = var5;
                    var4 = var4.prefix;
                    var1['prefix'] = var4;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var7 = '  ↪ ';
                    var6 = arg1;
                    var5 = ' ';
                    var4 = arg2;
                    var4 = var8.bind(var7)(var6, var5, var4);
                    var1['log'] = var4;
                    var1 = var2.bind(var3)(var1);
 121:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[8] = var5;
            var5 = {};
            var7 = 'time';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var6 = arg1;
                    var8 = arg2;
                    var4 = arg3;
                    var5 = this;
                    var1 = var5.isTracing;
                    if(var1) { _fun0010_ip = 29; continue _fun0010 }
 21:
                    var1 = undefined;
                    var1 = var4.bind(var1)();
                    return var1;
 29:
                    var3 = var5.prefix;
                    var7 = var5.mark;
                    var2 = global;
                    var1 = var2.HermesInternal;
                    var9 = var1.concat;
                    var1 = 'Start ';
                    var1 = var9.bind(var1)(var8);
                    var1 = var7.bind(var5)(var6, var1);
                    var7 = var5.prefix;
                    var1 = '| ';
                    var1 = var7 + var1;
                    var5['prefix'] = var1;
                    var7 = var2.Date;
                    var1 = var7.now;
                    var7 = var1.bind(var7)();
                    var1 = undefined;
                    var1 = var4.bind(var1)();
                    var9 = var2.Date;
                    var4 = var9.now;
                    var4 = var4.bind(var9)();
                    var4 = var4 - var7;
                    var5['prefix'] = var3;
                    var3 = var5.mark;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var2 = 'Finish ';
                    var2 = var7.bind(var2)(var8);
                    var2 = var3.bind(var5)(var6, var2, var4);
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[9] = var5;
            var5 = {};
            var7 = 'timeAsync';
            var5['key'] = var7;
            var8 = _closure1_slot0;
            var1 = undefined;
            var7 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        StartGenerator();
                        var7 = arg1;
                        var9 = arg2;
                        var4 = arg3;
                        var6 = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0011_ip = 167; continue _fun0011 }
 22:
                        var2 = var6.isTracing;
                        if(var2) { _fun0011_ip = 40; continue _fun0011 }
 31:
                        var2 = undefined;
                        var2 = var4.bind(var2)();
                        return var2;
 40:
                        var5 = var6.mark;
                        var3 = global;
                        var2 = var3.HermesInternal;
                        var8 = var2.concat;
                        var2 = 'Start ';
                        var2 = var8.bind(var2)(var9);
                        var2 = var5.bind(var6)(var7, var2);
                        var5 = var3.Date;
                        var2 = var5.now;
                        var5 = var2.bind(var5)();
                        var2 = undefined;
                        var2 = var4.bind(var2)();
                        SaveGenerator(address=101);
 99:
                        return var2;
 101:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0011_ip = 164; continue _fun0011 }
 107:
                        var8 = var3.Date;
                        var4 = var8.now;
                        var4 = var4.bind(var8)();
                        var5 = var4 - var5;
                        var4 = var6.mark;
                        var3 = var3.HermesInternal;
                        var8 = var3.concat;
                        var3 = 'Finish ';
                        var3 = var8.bind(var3)(var9);
                        var3 = var4.bind(var6)(var7, var3, var5);
                        return var2;
 164:
                        return var2;
 167:
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var8.bind(var1)(var7);
            var _closure2_slot0 = var7;
            var7 = function timeAsync() {
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
            var2[10] = var5;
            var5 = {};
            var7 = 'setServerTrace';
            var5['key'] = var7;
            var6 = function value(arg1) {
                var1 = this;
                var2 = var1.logGroups;
                var1 = 0;
                var2 = var2[var1];
                var1 = arg1;
                var2['serverTrace'] = var1;
                var1 = undefined;
                return var1;
            };
            var5['value'] = var6;
            var2[11] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2 = var2.bind(var1)();
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var13 = var4;
        var2 = new var13[var2](var12);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 3;
        var5 = var5[var4];
        var4 = require;
        var6 = var4.bind(var1)(var5);
        var5 = var6.fileFinishedImporting;
        var4 = '../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();