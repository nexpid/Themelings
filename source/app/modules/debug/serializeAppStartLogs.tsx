// app/modules/debug/serializeAppStartLogs.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = function getDisplayName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.tag;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 54; continue _fun0001 }
 14:
            var6 = var2.label;
            var5 = var2.tag;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var1 = ' ';
            var1 = var4.bind(var3)(var6, var1, var5);
            _fun0001_ip = 59; continue _fun0001;
 54:
            var1 = var2.label;
 59:
            var2 = var1.includes;
            var5 = '_START';
            var2 = var2.bind(var1)(var5);
            var4 = var1;
            var1 = var4;
            if(!var2) { _fun0001_ip = 109; continue _fun0001 }
 84:
            var3 = var4.replace;
            var2 = '';
            var3 = var3.bind(var4)(var5, var2);
            var2 = 'Start ';
            var1 = var2 + var3;
 109:
            var2 = var1.includes;
            var5 = '_END';
            var2 = var2.bind(var1)(var5);
            var4 = var1;
            var1 = var4;
            if(!var2) { _fun0001_ip = 159; continue _fun0001 }
 134:
            var3 = var4.replace;
            var2 = '';
            var3 = var3.bind(var4)(var5, var2);
            var2 = 'Finish ';
            var1 = var2 + var3;
 159:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/debug/serializeAppStartLogs.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function serializeAppStartLogs(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arguments[1];
            var2 = arguments[2];
            var4 = arg1;
            var _closure2_slot0 = var4;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0002_ip = 23; continue _fun0002 }
 21:
            var3 = true;
 23:
            var _closure2_slot1 = var3;
            if(!(var2 === var4)) { _fun0002_ip = 33; continue _fun0002 }
 31:
            var2 = true;
 33:
            var _closure2_slot2 = var2;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 0;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.logGroups;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var5 = var2.index;
                    var3 = var2.timestamp;
                    var11 = var2.logs;
                    var10 = var2.nativeLogs;
                    var6 = var2.serverTrace;
                    var2 = 0;
                    var4 = var3;
                    if(!(var2 === var5)) { _fun0003_ip = 114; continue _fun0003 }
 43:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 1;
                    var7 = var7[var2];
                    var2 = undefined;
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.find;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.log;
                        var2 = var3.indexOf;
                        var1 = 'Logger loaded';
                        var2 = var2.bind(var3)(var1);
                        var1 = 0;
                        var1 = var2 >= var1;
                        return var1;
                    };
                    var8 = var8.bind(var9)(var11, var7);
                    var7 = null;
                    var9 = var7 == var8;
                    if(var9) { _fun0003_ip = 100; continue _fun0003 }
 94:
                    var2 = var8.timestamp;
 100:
                    if(!(var7 == var2)) { _fun0003_ip = 111; continue _fun0003 }
 104:
                    var2 = _closure2_slot0;
 111:
                    var4 = var2;
 114:
                    var14 = _closure2_slot1;
                    var13 = _closure2_slot2;
                    var2 = function joinLogs(arg1, arg2, arg3, arg4) {
                        var3 = arg1;
                        var5 = arg2;
                        var2 = arg3;
                        var _closure4_slot1 = var2;
                        var2 = arg4;
                        var _closure4_slot2 = var2;
                        var2 = var3.slice;
                        var3 = var2.bind(var3)();
                        var _closure4_slot0 = var3;
                        var2 = global;
                        var6 = var2.Set;
                        var4 = var5.map;
                        var2 = _closure1_slot3;
                        var7 = var4.bind(var5)(var2);
                        var4 = var6.prototype;
                        var4 = Object.create(var4, {constructor: {value: var6}});
                        var8 = var4;
                        var2 = new var8[var6](var7, var6);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var _closure4_slot3 = var2;
                        var2 = '';
                        var _closure4_slot4 = var2;
                        var2 = new Array(0);
                        var _closure4_slot5 = var2;
                        var4 = var5.forEach;
                        var2 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var7 = arg1;
                                var2 = _closure1_slot3;
                                var1 = undefined;
                                var6 = var2.bind(var1)(var7);
                                var11 = _closure4_slot1;
                                if(var11) { _fun0004_ip = 38; continue _fun0004 }
 27:
                                var3 = var7.autoGenerated;
                                var11 = !var3;
 38:
                                var3 = var6.startsWith;
                                var14 = 'Start ';
                                var3 = var3.bind(var6)(var14);
                                if(!var3) { _fun0004_ip = 77; continue _fun0004 }
 58:
                                var5 = var6.includes;
                                var4 = 'RUN_JS_BUNDLE';
                                var4 = var5.bind(var6)(var4);
                                var3 = !var4;
 77:
                                if(!var3) { _fun0004_ip = 111; continue _fun0004 }
 80:
                                var8 = _closure4_slot3;
                                var5 = var8.has;
                                var9 = var6.replace;
                                var4 = 'Finish ';
                                var4 = var9.bind(var6)(var14, var4);
                                var3 = var5.bind(var8)(var4);
 111:
                                var4 = var6.startsWith;
                                var13 = 'Finish ';
                                var4 = var4.bind(var6)(var13);
                                var8 = 0;
                                var9 = 0;
                                var5 = var11;
                                if(!var4) { _fun0004_ip = 330; continue _fun0004 }
 141:
                                var10 = var6.includes;
                                var4 = 'RUN_JS_BUNDLE';
                                var4 = var10.bind(var6)(var4);
                                var9 = 0;
                                var5 = var11;
                                if(var4) { _fun0004_ip = 330; continue _fun0004 }
 168:
                                var12 = _closure4_slot3;
                                var10 = var12.has;
                                var4 = var6.replace;
                                var4 = var4.bind(var6)(var13, var14);
                                var4 = var10.bind(var12)(var4);
                                var9 = 0;
                                var5 = var11;
                                if(!var4) { _fun0004_ip = 330; continue _fun0004 }
 204:
                                var12 = _closure4_slot4;
                                var10 = var12.substring;
                                var4 = 2;
                                var4 = var10.bind(var12)(var4);
                                _closure4_slot4 = var4;
                                var10 = _closure4_slot5;
                                var4 = var10.pop;
                                var12 = var4.bind(var10)();
                                var4 = null;
                                var4 = var4 != var12;
                                var9 = 0;
                                var5 = var11;
                                if(!var4) { _fun0004_ip = 330; continue _fun0004 }
 254:
                                var10 = var7.timestamp;
                                var4 = var12.timestamp;
                                var10 = var10 - var4;
                                var4 = var11;
                                if(var11) { _fun0004_ip = 306; continue _fun0004 }
 276:
                                var11 = 5;
                                var11 = var10 > var11;
                                if(!var11) { _fun0004_ip = 303; continue _fun0004 }
 286:
                                var13 = function isSuperNoisyLog(arg1) {
                                    var2 = arg1;
                                    var _closure6_slot0 = var2;
                                    var3 = ['GET_CONSTANTS', 'CONVERT_CONSTANTS'];
                                    var2 = var3.some;
                                    var1 = function(arg1) {
                                        var3 = _closure6_slot0;
                                        var2 = var3.includes;
                                        var1 = arg1;
                                        var1 = var2.bind(var3)(var1);
                                        return var1;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var13 = var13.bind(var1)(var6);
                                var11 = !var13;
 303:
                                var4 = var11;
 306:
                                var11 = var12.shouldKeep;
                                if(var11) { _fun0004_ip = 318; continue _fun0004 }
 315:
                                var11 = var4;
 318:
                                var12['shouldKeep'] = var11;
                                var9 = var10;
                                var5 = var4;
 330:
                                var4 = {};
                                var10 = '☕';
                                var4['emoji'] = var10;
                                var7 = var7.timestamp;
                                var4['timestamp'] = var7;
                                var7 = undefined;
                                if(!(var9 > var8)) { _fun0004_ip = 363; continue _fun0004 }
 360:
                                var7 = var9;
 363:
                                var4['delta'] = var7;
                                var7 = _closure4_slot4;
                                var4['prefix'] = var7;
                                var4['log'] = var6;
                                var4['shouldKeep'] = var5;
                                var7 = _closure4_slot0;
                                var5 = var7.length;
                                var5 = var8 < var5;
                                var10 = null;
                                var9 = 0;
                                var6 = 0;
                                if(!var5) { _fun0004_ip = 451; continue _fun0004 }
 409:
                                var5 = var7[var9];
                                var11 = var5.timestamp;
                                if(!(var10 != var11)) { _fun0004_ip = 436; continue _fun0004 }
 423:
                                var5 = var4.timestamp;
                                var6 = var9;
                                if(!(!(var11 > var5))) { _fun0004_ip = 451; continue _fun0004 }
 436:
                                var9 = var9 + 1;
                                var5 = var7.length;
                                var6 = var9;
                                if(var6 < var5) { _fun0004_ip = 409; continue _fun0004 }
 451:
                                var5 = var7.splice;
                                var5 = var5.bind(var7)(var6, var8, var4);
                                if(!var3) { _fun0004_ip = 499; continue _fun0004 }
 467:
                                var5 = _closure4_slot4;
                                var3 = '| ';
                                var3 = var5 + var3;
                                _closure4_slot4 = var3;
                                var3 = _closure4_slot5;
                                var2 = var3.push;
                                var2 = var2.bind(var3)(var4);
 499:
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var2);
                        var2 = false;
                        var _closure4_slot6 = var2;
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var4 = arg1;
                                var1 = _closure4_slot6;
                                var1 = !var1;
                                if(var1) { _fun0005_ip = 41; continue _fun0005 }
 16:
                                var6 = var4.log;
                                var5 = var6.includes;
                                var2 = '↪';
                                var2 = var5.bind(var6)(var2);
                                var1 = !var2;
 41:
                                if(!var1) { _fun0005_ip = 90; continue _fun0005 }
 44:
                                var2 = _closure4_slot2;
                                var2 = !var2;
                                if(!var2) { _fun0005_ip = 68; continue _fun0005 }
 54:
                                var6 = var4.emoji;
                                var5 = '🎨';
                                var2 = var5 === var6;
 68:
                                if(var2) { _fun0005_ip = 83; continue _fun0005 }
 71:
                                var5 = var4.shouldKeep;
                                var4 = false;
                                var2 = var4 === var5;
 83:
                                _closure4_slot6 = var2;
                                var1 = !var2;
 90:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = undefined;
                    var17 = undefined;
                    var16 = var11;
                    var15 = var10;
                    var2 = var17[var2](var16, var15, var14, var13, var12);
                    var1 = function serializeLogGroup(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var11 = arg1;
                            var2 = arg2;
                            var _closure4_slot0 = var2;
                            var7 = new Array(0);
                            var3 = var11.length;
                            var2 = 0;
                            var4 = var2 < var3;
                            var10 = 'Finish ';
                            var3 = '';
                            var8 = 'Start ';
                            var9 = 1;
                            var6 = null;
                            var5 = 0;
                            if(!var4) { _fun0006_ip = 159; continue _fun0006 }
 53:
                            var12 = var11[var5];
                            var4 = var5 + var9;
                            var13 = var11[var4];
                            if(!(var6 != var13)) { _fun0006_ip = 96; continue _fun0006 }
 69:
                            var14 = var13.log;
                            var15 = var12.log;
                            var4 = var15.replace;
                            var4 = var4.bind(var15)(var8, var10);
                            if(!(var14 !== var4)) { _fun0006_ip = 111; continue _fun0006 }
 96:
                            var4 = var7.push;
                            var4 = var4.bind(var7)(var12);
                            var4 = var5;
                            _fun0006_ip = 147; continue _fun0006;
 111:
                            var14 = var13.log;
                            var12 = var14.replace;
                            var12 = var12.bind(var14)(var10, var3);
                            var13['log'] = var12;
                            var12 = var7.push;
                            var12 = var12.bind(var7)(var13);
                            var4 = var5 + 1;
 147:
                            var5 = var4 + 1;
                            var4 = var11.length;
                            if(var5 < var4) { _fun0006_ip = 53; continue _fun0006 }
 159:
                            var5 = var7.map;
                            var4 = function(arg1) {
                                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                    var2 = arg1;
                                    var1 = {};
                                    var3 = var2.timestamp;
                                    var4 = null;
                                    var5 = var4 == var3;
                                    var7 = '';
                                    var3 = var7;
                                    if(var5) { _fun0007_ip = 68; continue _fun0007 }
 27:
                                    var6 = var2.timestamp;
                                    var5 = _closure4_slot0;
                                    var6 = var6 - var5;
                                    var5 = 1000;
                                    var8 = var6 / var5;
                                    var6 = var8.toFixed;
                                    var5 = 3;
                                    var3 = var6.bind(var8)(var5);
 68:
                                    var1['totalTime'] = var3;
                                    var3 = var2.delta;
                                    var4 = var4 == var3;
                                    var3 = var7;
                                    if(var4) { _fun0007_ip = 126; continue _fun0007 }
 89:
                                    var4 = global;
                                    var6 = var4.String;
                                    var8 = var4.Math;
                                    var5 = var8.round;
                                    var4 = var2.delta;
                                    var5 = var5.bind(var8)(var4);
                                    var4 = undefined;
                                    var3 = var6.bind(var4)(var5);
 126:
                                    var1['deltaTime'] = var3;
                                    var3 = var2.emoji;
                                    var4 = var3.length;
                                    var3 = 0;
                                    var3 = var4 > var3;
                                    var6 = var7;
                                    if(!var3) { _fun0007_ip = 183; continue _fun0007 }
 154:
                                    var5 = var2.emoji;
                                    var3 = global;
                                    var3 = var3.HermesInternal;
                                    var4 = var3.concat;
                                    var3 = ' ';
                                    var6 = var4.bind(var7)(var5, var3);
 183:
                                    var11 = var2.prefix;
                                    var10 = var2.log;
                                    var2 = global;
                                    var2 = var2.HermesInternal;
                                    var3 = var2.concat;
                                    var9 = '\n';
                                    var13 = var7;
                                    var12 = var6;
                                    var2 = var13[var3](var12, var11, var10, var9, var8);
                                    var1['log'] = var2;
                                    return var1;
                                }
                            };
                            var4 = var5.bind(var7)(var4);
                            var10 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var7 = var7[var9];
                            var8 = undefined;
                            var11 = var10.bind(var8)(var7);
                            var10 = var11.max;
                            var12 = var4.map;
                            var7 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.totalTime;
                                var1 = var1.length;
                                return var1;
                            };
                            var7 = var12.bind(var4)(var7);
                            var10 = var10.bind(var11)(var7);
                            var11 = var6 != var10;
                            var7 = 0;
                            if(!var11) { _fun0006_ip = 237; continue _fun0006 }
 234:
                            var7 = var10;
 237:
                            var _closure4_slot1 = var7;
                            var7 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var9];
                            var8 = var7.bind(var8)(var5);
                            var7 = var8.max;
                            var9 = var4.map;
                            var5 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.deltaTime;
                                var1 = var1.length;
                                return var1;
                            };
                            var5 = var9.bind(var4)(var5);
                            var5 = var7.bind(var8)(var5);
                            var6 = var6 != var5;
                            var2 = 0;
                            if(!var6) { _fun0006_ip = 297; continue _fun0006 }
 294:
                            var2 = var5;
 297:
                            var _closure4_slot2 = var2;
                            var2 = var4.map;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var11 = var1.totalTime;
                                var4 = var1.deltaTime;
                                var12 = var1.log;
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var2 = 1;
                                var1 = var8[var2];
                                var3 = undefined;
                                var10 = var7.bind(var3)(var1);
                                var9 = var10.padStart;
                                var5 = _closure4_slot1;
                                var5 = var9.bind(var10)(var11, var5);
                                var2 = var8[var2];
                                var3 = var7.bind(var3)(var2);
                                var2 = var3.padStart;
                                var1 = _closure4_slot2;
                                var14 = var2.bind(var3)(var4, var1);
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var3 = var1.concat;
                                var17 = '';
                                var1 = ' ';
                                var16 = var5;
                                var15 = var1;
                                var13 = var1;
                                var1 = var17[var3](var16, var15, var14, var13, var12, var11);
                                return var1;
                            };
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.join;
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        }
                    };
                    var12 = var1.bind(var7)(var2, var4);
                    var4 = 1;
                    var10 = var5 + var4;
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 2;
                    var1 = var8[var1];
                    var2 = var2.bind(var7)(var1);
                    var1 = var2.getTimestampString;
                    var14 = var1.bind(var2)(var3);
                    var2 = global;
                    var1 = var2.HermesInternal;
                    var8 = var1.concat;
                    var17 = 'Trace #';
                    var15 = ' started ';
                    var13 = '\n';
                    var16 = var10;
                    var3 = var17[var8](var16, var15, var14, var13, var12, var11);
                    var7 = null;
                    var1 = var3;
                    if(!(var7 != var6)) { _fun0003_ip = 276; continue _fun0003 }
 245:
                    var5 = var5 + var4;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var2 = '\n Server trace for trace #';
                    var2 = var4.bind(var2)(var5, var6);
                    var1 = var3 + var2;
 276:
                    return var1;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.join;
            var1 = '\n\n';
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();