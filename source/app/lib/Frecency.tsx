// app/lib/Frecency.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var4 = function DEFAULT_FRECENCY(arg1, arg2, arg3) {
        var1 = global;
        var3 = var1.Math;
        var2 = var3.ceil;
        var1 = arg3;
        var4 = var1.numOfRecentUses;
        var1 = arg2;
        var4 = var1 / var4;
        var1 = arg1;
        var1 = var1 * var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot4 = var4;
    var2 = {};
    var2['original'] = var4;
    var4 = function safe(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg3;
            var3 = var1.maxTotalUse;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 98; continue _fun0001 }
 15:
            var2 = var1.maxTotalUse;
            var1 = arg1;
            var2 = var1 / var2;
            var1 = 0.2;
            var5 = var2 * var1;
            var1 = arg2;
            var4 = 1000;
            var6 = var1 / var4;
            var1 = global;
            var3 = var1.Math;
            var2 = var3.trunc;
            var1 = 0.8;
            var1 = var6 * var1;
            var1 = var5 + var1;
            var1 = var4 * var1;
            var1 = var2.bind(var3)(var1);
            return var1;
 98:
            var1 = 0;
            return var1;
        }
    };
    var2['safe'] = var4;
    var4 = function day_recency(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg3;
            var3 = var1.maxTotalUse;
            var2 = null;
            if(!(var2 != var3)) { _fun0002_ip = 98; continue _fun0002 }
 15:
            var2 = var1.maxTotalUse;
            var1 = arg1;
            var2 = var1 / var2;
            var1 = 0.05;
            var5 = var2 * var1;
            var1 = arg2;
            var4 = 1000;
            var6 = var1 / var4;
            var1 = global;
            var3 = var1.Math;
            var2 = var3.trunc;
            var1 = 0.95;
            var1 = var6 * var1;
            var1 = var5 + var1;
            var1 = var4 * var1;
            var1 = var2.bind(var3)(var1);
            return var1;
 98:
            var1 = 0;
            return var1;
        }
    };
    var2['day_recency'] = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = function Frecency(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var3 = this;
                var9 = var4.computeBonus;
                var8 = var4.computeWeight;
                var7 = var4.computeFrecency;
                var1 = undefined;
                if(!(var7 === var1)) { _fun0003_ip = 37; continue _fun0003 }
 30:
                var7 = _closure1_slot4;
 37:
                var5 = var4.lookupKey;
                var6 = var4.afterCompute;
                var2 = var4.numFrequentlyItems;
                if(!(var2 === var1)) { _fun0003_ip = 62; continue _fun0003 }
 59:
                var2 = 32;
 62:
                var4 = var4.maxSamples;
                if(!(var4 === var1)) { _fun0003_ip = 75; continue _fun0003 }
 72:
                var4 = 10;
 75:
                var11 = _closure1_slot2;
                var10 = _closure2_slot0;
                var10 = var11.bind(var1)(var3, var10);
                var3['computeBonus'] = var9;
                var3['computeWeight'] = var8;
                var3['computeFrecency'] = var7;
                var3['afterCompute'] = var6;
                var3['lookupKey'] = var5;
                var5 = {};
                var3['usageHistory'] = var5;
                var5 = new Array(0);
                var3['frequently'] = var5;
                var3['maxSamples'] = var4;
                var3['numFrequentlyItems'] = var2;
                var2 = false;
                var3['calculateMaxTotalUse'] = var2;
                var3['dirty'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'overwriteHistory';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var9 = arg1;
                var5 = arg2;
                var3 = this;
                var _closure3_slot0 = var3;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var4 = var4[var1];
                var1 = undefined;
                var8 = var6.bind(var1)(var4);
                var7 = var8.mapValues;
                var4 = null;
                if(!(var4 == var9)) { _fun0004_ip = 54; continue _fun0004 }
 52:
                var9 = {};
 54:
                var6 = function(arg1) {
                    var1 = {};
                    var4 = arg1;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = -1;
                    var2 = 'frecency';
                    var1[var2] = var3;
                    return var1;
                };
                var6 = var7.bind(var8)(var9, var6);
                var3['usageHistory'] = var6;
                if(!(var4 != var5)) { _fun0004_ip = 90; continue _fun0004 }
 75:
                var4 = var5.forEach;
                var2 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.key;
                    var3 = var1.timestamp;
                    var2 = _closure3_slot0;
                    var1 = var2.track;
                    var1 = var1.bind(var2)(var4, var3);
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
 90:
                var2 = var3.markDirty;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(10);
        var2[0] = var1;
        var1 = {};
        var6 = 'markDirty';
        var1['key'] = var6;
        var6 = function value() {
            var2 = true;
            var1 = this;
            var1['dirty'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isDirty';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.dirty;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'track';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var6 = arg2;
                var2 = this;
                var7 = null;
                if(!(var7 != var4)) { _fun0005_ip = 298; continue _fun0005 }
 18:
                var5 = global;
                var8 = var5.Object;
                var3 = var8.hasOwn;
                var1 = var2.usageHistory;
                var1 = var3.bind(var8)(var1, var4);
                var9 = undefined;
                if(!var1) { _fun0005_ip = 59; continue _fun0005 }
 49:
                var1 = var2.usageHistory;
                var9 = var1[var4];
 59:
                if(!(var7 != var9)) { _fun0005_ip = 232; continue _fun0005 }
 66:
                var1 = -1;
                var9['frecency'] = var1;
                var3 = var9.totalUses;
                var1 = 1;
                var1 = var3 + var1;
                var9['totalUses'] = var1;
                if(!(var7 != var6)) { _fun0005_ip = 135; continue _fun0005 }
 101:
                var3 = var9.recentUses;
                var1 = var3.push;
                var1 = var1.bind(var3)(var6);
                var3 = var9.recentUses;
                var1 = var3.sort;
                var1 = var1.bind(var3)();
                _fun0005_ip = 166; continue _fun0005;
 135:
                var8 = var9.recentUses;
                var3 = var8.push;
                var10 = var5.Date;
                var1 = var10.now;
                var1 = var1.bind(var10)();
                var1 = var3.bind(var8)(var1);
 166:
                var1 = var9.recentUses;
                var8 = var1.length;
                var1 = var2.maxSamples;
                var3 = var9;
                if(!(var8 > var1)) { _fun0005_ip = 278; continue _fun0005 }
 190:
                var8 = var9.recentUses;
                var1 = var8.shift;
                var1 = var1.bind(var8)();
                var1 = var9.recentUses;
                var8 = var1.length;
                var1 = var2.maxSamples;
                var3 = var9;
                if(var8 > var1) { _fun0005_ip = 190; continue _fun0005 }
 230:
                _fun0005_ip = 278; continue _fun0005;
 232:
                var1 = {'totalUses': 1, 'recentUses': null, 'frecency': 4294967295, 'score': 0};
                if(!(var7 == var6)) { _fun0005_ip = 261; continue _fun0005 }
 246:
                var7 = var5.Date;
                var5 = var7.now;
                var6 = var5.bind(var7)();
 261:
                var5 = new Array(1);
                var5[0] = var6;
                var1['recentUses'] = var5;
                var3 = var1;
 278:
                var1 = var2.usageHistory;
                var1[var4] = var3;
                var1 = var2.markDirty;
                var1 = var1.bind(var2)();
 298:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getEntry';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = arg1;
                var3 = this;
                var1 = null;
                var2 = var1 == var4;
                if(var2) { _fun0006_ip = 88; continue _fun0006 }
 15:
                var2 = var3.dirty;
                if(!var2) { _fun0006_ip = 34; continue _fun0006 }
 24:
                var2 = var3.compute;
                var2 = var2.bind(var3)();
 34:
                var2 = global;
                var2 = var2.Object;
                var2 = var2.prototype;
                var6 = var2.hasOwnProperty;
                var5 = var6.call;
                var2 = var3.usageHistory;
                var5 = var5.bind(var6)(var2, var4);
                var2 = undefined;
                if(!var5) { _fun0006_ip = 85; continue _fun0006 }
 75:
                var3 = var3.usageHistory;
                var2 = var3[var4];
 85:
                var1 = var2;
 88:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getScore';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = this;
                var2 = var3.getEntry;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0007_ip = 32; continue _fun0007 }
 26:
                var1 = var2.score;
 32:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getFrecency';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = this;
                var2 = var3.getEntry;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0008_ip = 32; continue _fun0008 }
 26:
                var1 = var2.frecency;
 32:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'replaceEntryComputeFunctions';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var3 = this;
            var1 = arg1;
            var3['computeWeight'] = var1;
            var1 = arg2;
            var3['computeFrecency'] = var1;
            var1 = arg3;
            var3['calculateMaxTotalUse'] = var1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var2);
            var5 = var6.mapValues;
            var4 = var3.usageHistory;
            var2 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = -1;
                var2 = 'frecency';
                var1[var2] = var3;
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            var3['usageHistory'] = var2;
            var2 = var3.markDirty;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'compute';
        var1['key'] = var6;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = this;
                var _closure3_slot0 = var5;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var4 = var4.bind(var1)();
                var _closure3_slot1 = var4;
                var6 = var5.calculateMaxTotalUse;
                var4 = null;
                if(!var6) { _fun0009_ip = 114; continue _fun0009 }
 53:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 2;
                var6 = var8[var6];
                var9 = var7.bind(var1)(var6);
                var8 = var9.maxBy;
                var6 = global;
                var10 = var6.Object;
                var7 = var10.values;
                var6 = var5.usageHistory;
                var7 = var7.bind(var10)(var6);
                var6 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.totalUses;
                    return var1;
                };
                var4 = var8.bind(var9)(var7, var6);
 114:
                var _closure3_slot2 = var4;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var7 = var6[var3];
                var10 = var4.bind(var1)(var7);
                var9 = var10.forEach;
                var8 = var5.usageHistory;
                var7 = function(arg1, arg2) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var3 = arg1;
                        var2 = arg2;
                        var _closure4_slot0 = var3;
                        var8 = var3.totalUses;
                        var10 = var3.recentUses;
                        var5 = var3.frecency;
                        var1 = -1;
                        if(!(var1 === var5)) { _fun0010_ip = 247; continue _fun0010 }
 43:
                        var6 = _closure3_slot0;
                        var5 = var6.computeBonus;
                        var6 = var5.bind(var6)(var2);
                        var5 = 100;
                        var5 = var6 / var5;
                        var _closure4_slot1 = var5;
                        var5 = 0;
                        var3['score'] = var5;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var6 = 2;
                        var6 = var9[var6];
                        var9 = undefined;
                        var7 = var7.bind(var9)(var6);
                        var6 = var7.forEach;
                        var4 = function(arg1, arg2) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                var2 = _closure3_slot0;
                                var3 = var2.maxSamples;
                                var2 = arg2;
                                if(!(!(var2 >= var3))) { _fun0011_ip = 121; continue _fun0011 }
 20:
                                var4 = _closure3_slot0;
                                var3 = var4.computeWeight;
                                var7 = _closure3_slot1;
                                var6 = var7.diff;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 3;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var2);
                                var2 = arg1;
                                var5 = var5.bind(var1)(var2);
                                var2 = 'days';
                                var2 = var6.bind(var7)(var5, var2);
                                var5 = var3.bind(var4)(var2);
                                var3 = _closure4_slot0;
                                var4 = var3.score;
                                var2 = _closure4_slot1;
                                var2 = var2 * var5;
                                var2 = var4 + var2;
                                var3['score'] = var2;
                                return var1;
 121:
                                var1 = false;
                                return var1;
                            }
                        };
                        var4 = var6.bind(var7)(var10, var4);
                        var4 = var3.score;
                        if(!(!(var4 > var5))) { _fun0010_ip = 147; continue _fun0010 }
 131:
                        var4 = _closure3_slot0;
                        var4 = var4.usageHistory;
                        var4 = delete var4[var2];
                        _fun0010_ip = 247; continue _fun0010;
 147:
                        var4 = var3.recentUses;
                        var4 = var4.length;
                        if(!(var4 > var5)) { _fun0010_ip = 233; continue _fun0010 }
 162:
                        var7 = _closure3_slot0;
                        var6 = var7.computeFrecency;
                        var5 = var3.score;
                        var4 = {};
                        var10 = var10.length;
                        var4['numOfRecentUses'] = var10;
                        var11 = _closure3_slot2;
                        var10 = null;
                        var10 = var10 == var11;
                        var9 = undefined;
                        if(var10) { _fun0010_ip = 215; continue _fun0010 }
 205:
                        var10 = _closure3_slot2;
                        var9 = var10.totalUses;
 215:
                        var4['maxTotalUse'] = var9;
                        var4 = var6.bind(var7)(var8, var5, var4);
                        var3['frecency'] = var4;
 233:
                        var1 = _closure3_slot0;
                        var1 = var1.usageHistory;
                        var1[var2] = var3;
 247:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = var9.bind(var10)(var8, var7);
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var5.usageHistory;
                var6 = var4.bind(var1)(var3);
                var4 = var6.map;
                var3 = function(arg1, arg2) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var3 = _closure3_slot0;
                        var2 = var3.lookupKey;
                        var1 = arg2;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        var2 = var1 == var3;
                        if(var2) { _fun0012_ip = 54; continue _fun0012 }
 30:
                        var2 = new Array(2);
                        var2[0] = var3;
                        var3 = arg1;
                        var3 = var3.frecency;
                        var2[1] = var3;
                        var1 = var2;
 54:
                        return var1;
                    }
                };
                var6 = var4.bind(var6)(var3);
                var4 = var6.filter;
                var3 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 !== var1;
                    return var1;
                };
                var6 = var4.bind(var6)(var3);
                var4 = var6.sortBy;
                var3 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var4 = arg1;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var1 = var4().value;
                        var1 = var2;
                        var6 = undefined;
                        var3 = var1 === var6;
                        var1 = undefined;
                        if(var3) { _fun0013_ip = 49; continue _fun0013 }
 24:
                        var5 = var4().value;
                        var4 = var2;
                        var4 = var4 === var6;
                        var1 = undefined;
                        var3 = var4;
                        if(var4) { _fun0013_ip = 49; continue _fun0013 }
 43:
                        var1 = var5;
                        var3 = var4;
 49:
                        if(var3) { _fun0013_ip = 55; continue _fun0013 }
 52:
                        var2.return();
 55:
                        var1 = -var1;
                        return var1;
                    }
                };
                var4 = var4.bind(var6)(var3);
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var1 = arg1;
                        var2 = var1[Symbol.iterator];
                        var1 = var2().next;
                        var4 = var1().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        if(var3) { _fun0014_ip = 25; continue _fun0014 }
 22:
                        var1 = var4;
 25:
                        if(var3) { _fun0014_ip = 31; continue _fun0014 }
 28:
                        var2.return();
 31:
                        return var1;
                    }
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.take;
                var2 = var5.numFrequentlyItems;
                var3 = var3.bind(var4)(var2);
                var2 = var3.value;
                var2 = var2.bind(var3)();
                var5['frequently'] = var2;
                var2 = false;
                var5['dirty'] = var2;
                var4 = var5.afterCompute;
                var3 = var5.usageHistory;
                var2 = var5._frequently;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'frequently';
        var1['key'] = var6;
        var6 = function get() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = this;
                var2 = var1.dirty;
                if(!var2) { _fun0015_ip = 22; continue _fun0015 }
 12:
                var2 = var1.compute;
                var2 = var2.bind(var1)();
 22:
                var1 = var1._frequently;
                return var1;
            }
        };
        var1['get'] = var6;
        var5 = function set(arg1) {
            var2 = arg1;
            var1 = this;
            var1['_frequently'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['set'] = var5;
        var2[9] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var6 = 4;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'lib/Frecency.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var4;
    var4 = {};
    var6 = function original(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var3 = arg1;
            var1 = 3;
            var2 = var3 <= var1;
            var1 = 100;
            if(var2) { _fun0016_ip = 71; continue _fun0016 }
 16:
            var2 = 15;
            var2 = var3 <= var2;
            var1 = 70;
            if(var2) { _fun0016_ip = 71; continue _fun0016 }
 29:
            var4 = 30;
            var2 = var3 <= var4;
            var1 = 50;
            if(var2) { _fun0016_ip = 71; continue _fun0016 }
 42:
            var2 = 45;
            var2 = var3 <= var2;
            var1 = var4;
            if(var2) { _fun0016_ip = 71; continue _fun0016 }
 55:
            var2 = 80;
            var2 = var3 <= var2;
            var1 = 1;
            if(!var2) { _fun0016_ip = 71; continue _fun0016 }
 68:
            var1 = 10;
 71:
            return var1;
        }
    };
    var4['original'] = var6;
    var6 = function safe(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var3 = arg1;
            var1 = 3;
            var2 = var3 <= var1;
            var1 = 100;
            if(var2) { _fun0017_ip = 71; continue _fun0017 }
 16:
            var2 = 15;
            var2 = var3 <= var2;
            var1 = 70;
            if(var2) { _fun0017_ip = 71; continue _fun0017 }
 29:
            var4 = 30;
            var2 = var3 <= var4;
            var1 = 50;
            if(var2) { _fun0017_ip = 71; continue _fun0017 }
 42:
            var2 = 45;
            var2 = var3 <= var2;
            var1 = var4;
            if(var2) { _fun0017_ip = 71; continue _fun0017 }
 55:
            var2 = 80;
            var2 = var3 <= var2;
            var1 = 1;
            if(!var2) { _fun0017_ip = 71; continue _fun0017 }
 68:
            var1 = 10;
 71:
            return var1;
        }
    };
    var4['safe'] = var6;
    var5 = function day_recency(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var5 = arg1;
            var4 = 1;
            var2 = var5 <= var4;
            var1 = 100;
            if(var2) { _fun0018_ip = 110; continue _fun0018 }
 16:
            var2 = 2;
            var3 = var5 <= var2;
            var1 = 70;
            if(var3) { _fun0018_ip = 110; continue _fun0018 }
 29:
            var3 = 3;
            var3 = var5 <= var3;
            var1 = 50;
            if(var3) { _fun0018_ip = 110; continue _fun0018 }
 42:
            var3 = 7;
            var3 = var5 <= var3;
            var1 = 20;
            if(var3) { _fun0018_ip = 110; continue _fun0018 }
 55:
            var6 = 15;
            var3 = var5 <= var6;
            var1 = var6;
            if(var3) { _fun0018_ip = 110; continue _fun0018 }
 68:
            var3 = 30;
            var3 = var5 <= var3;
            var1 = 10;
            if(var3) { _fun0018_ip = 110; continue _fun0018 }
 81:
            var3 = 45;
            var3 = var5 <= var3;
            var1 = 5;
            if(var3) { _fun0018_ip = 110; continue _fun0018 }
 94:
            var3 = 80;
            var3 = var5 <= var3;
            var1 = var4;
            if(!var3) { _fun0018_ip = 110; continue _fun0018 }
 107:
            var1 = var2;
 110:
            return var1;
        }
    };
    var4['day_recency'] = var5;
    var3['weightFunctions'] = var4;
    var3['frecencyAlgorithms'] = var2;
    return var1;
})();