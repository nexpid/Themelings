// app/lib/Frecency.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
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
    var4 = function DEFAULT_WEIGHT(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = 3;
            var2 = var3 <= var1;
            var1 = 100;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 15;
            var2 = var3 <= var2;
            var1 = 70;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = 30;
            var2 = var3 <= var4;
            var1 = 50;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var2 = 45;
            var2 = var3 <= var2;
            var1 = var4;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var2 = 80;
            var2 = var3 <= var2;
            var1 = 1;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var1 = 10;
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function Frecency(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var10 = var4.computeBonus;
                var9 = var4.computeWeight;
                var1 = undefined;
                if(!(var9 === var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var9 = _closure1_slot5;
case 8:
                var8 = var4.computeFrecency;
                if(!(var8 === var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var8 = _closure1_slot4;
case 10:
                var7 = var4.calculateMaxTotalUse;
                if(!(var7 === var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var7 = false;
case 12:
                var5 = var4.lookupKey;
                var6 = var4.afterCompute;
                var2 = var4.numFrequentlyItems;
                if(!(var2 === var1)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var2 = 32;
case 14:
                var4 = var4.maxSamples;
                if(!(var4 === var1)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var4 = 10;
case 16:
                var12 = _closure1_slot2;
                var11 = _closure2_slot0;
                var11 = var12.bind(var1)(var3, var11);
                var3['computeBonus'] = var10;
                var3['computeWeight'] = var9;
                var3['computeFrecency'] = var8;
                var3['calculateMaxTotalUse'] = var7;
                var3['afterCompute'] = var6;
                var3['lookupKey'] = var5;
                var5 = {};
                var3['usageHistory'] = var5;
                var5 = new Array(0);
                var3['frequently'] = var5;
                var3['maxSamples'] = var4;
                var3['numFrequentlyItems'] = var2;
                var2 = false;
                var3['dirty'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'overwriteHistory';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
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
                if(!(var4 == var9)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var9 = {};
case 18:
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
                if(!(var4 != var5)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var4 = var5.forEach;
                var2 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.key;
                    var5 = var1.timestamp;
                    var3 = _closure3_slot0;
                    var2 = var3.track;
                    var1 = {};
                    var1['timestamp'] = var5;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
case 20:
                var2 = var3.markDirty;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(9);
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
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = arg1;
                var2 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var2 = {};
case 22:
                var7 = var2.timestamp;
                var10 = var2.usesSinceLastTrack;
                var8 = null;
                if(!(var8 != var5)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var6 = global;
                var9 = var6.Object;
                var4 = var9.hasOwn;
                var2 = var3.usageHistory;
                var2 = var4.bind(var9)(var2, var5);
                var11 = undefined;
                if(!var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var2 = var3.usageHistory;
                var11 = var2[var5];
case 26:
                if(!(var8 != var11)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var2 = -1;
                var11['frecency'] = var2;
                var4 = var11.totalUses;
                var9 = var8 != var10;
                var2 = 1;
                if(!var9) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var2 = var10;
case 30:
                var2 = var4 + var2;
                var11['totalUses'] = var2;
                if(!(var8 != var7)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var4 = var11.recentUses;
                var2 = var4.push;
                var2 = var2.bind(var4)(var7);
                var4 = var11.recentUses;
                var2 = var4.sort;
                var2 = var2.bind(var4)();
                _fun0004_ip = 34; continue _fun0004;
case 32:
                var9 = var11.recentUses;
                var4 = var9.push;
                var12 = var6.Date;
                var2 = var12.now;
                var2 = var2.bind(var12)();
                var2 = var4.bind(var9)(var2);
case 34:
                var2 = var11.recentUses;
                var9 = var2.length;
                var2 = var3.maxSamples;
                var4 = var11;
                if(!(var9 > var2)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                var9 = var11.recentUses;
                var2 = var9.shift;
                var2 = var2.bind(var9)();
                var2 = var11.recentUses;
                var9 = var2.length;
                var2 = var3.maxSamples;
                var4 = var11;
                if(var9 > var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                _fun0004_ip = 35; continue _fun0004;
case 28:
                var2 = {};
                var11 = var8 != var10;
                var9 = 1;
                if(!var11) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var9 = var10;
case 38:
                var2['totalUses'] = var9;
                if(!(var8 == var7)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                var8 = var6.Date;
                var6 = var8.now;
                var7 = var6.bind(var8)();
case 40:
                var6 = new Array(1);
                var6[0] = var7;
                var2['recentUses'] = var6;
                var6 = -1;
                var2['frecency'] = var6;
                var6 = 0;
                var2['score'] = var6;
                var4 = var2;
case 35:
                var2 = var3.usageHistory;
                var2[var5] = var4;
                var2 = var3.markDirty;
                var2 = var2.bind(var3)();
case 24:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getEntry';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var1 = null;
                var2 = var1 == var4;
                if(var2) { _fun0005_ip = 42; continue _fun0005 }
case 23:
                var2 = var3.dirty;
                if(!var2) { _fun0005_ip = 43; continue _fun0005 }
case 9:
                var2 = var3.compute;
                var2 = var2.bind(var3)();
case 43:
                var2 = global;
                var2 = var2.Object;
                var2 = var2.prototype;
                var6 = var2.hasOwnProperty;
                var5 = var6.call;
                var2 = var3.usageHistory;
                var5 = var5.bind(var6)(var2, var4);
                var2 = undefined;
                if(!var5) { _fun0005_ip = 14; continue _fun0005 }
case 21:
                var3 = var3.usageHistory;
                var2 = var3[var4];
case 14:
                var1 = var2;
case 42:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getScore';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = this;
                var2 = var3.getEntry;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var1 = var2.score;
case 44:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getFrecency';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = this;
                var2 = var3.getEntry;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                var1 = var2.frecency;
case 44:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'compute';
        var1['key'] = var6;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
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
                if(!var6) { _fun0008_ip = 31; continue _fun0008 }
case 46:
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
case 31:
                var _closure3_slot2 = var4;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var7 = var6[var3];
                var10 = var4.bind(var1)(var7);
                var9 = var10.forEach;
                var8 = var5.usageHistory;
                var7 = function(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = arg1;
                        var2 = arg2;
                        var _closure4_slot0 = var3;
                        var8 = var3.totalUses;
                        var10 = var3.recentUses;
                        var5 = var3.frecency;
                        var1 = -1;
                        if(!(var1 === var5)) { _fun0009_ip = 47; continue _fun0009 }
case 48:
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
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                var2 = _closure3_slot0;
                                var3 = var2.maxSamples;
                                var2 = arg2;
                                if(!(!(var2 >= var3))) { _fun0010_ip = 49; continue _fun0010 }
case 50:
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
case 49:
                                var1 = false;
                                return var1;
                            }
                        };
                        var4 = var6.bind(var7)(var10, var4);
                        var4 = var3.score;
                        if(!(!(var4 > var5))) { _fun0009_ip = 51; continue _fun0009 }
case 33:
                        var4 = _closure3_slot0;
                        var4 = var4.usageHistory;
                        var4 = delete var4[var2];
                        _fun0009_ip = 47; continue _fun0009;
case 51:
                        var4 = var3.recentUses;
                        var4 = var4.length;
                        if(!(var4 > var5)) { _fun0009_ip = 52; continue _fun0009 }
case 53:
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
                        if(var10) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                        var10 = _closure3_slot2;
                        var9 = var10.totalUses;
case 54:
                        var4['maxTotalUse'] = var9;
                        var4 = var6.bind(var7)(var8, var5, var4);
                        var3['frecency'] = var4;
case 52:
                        var1 = _closure3_slot0;
                        var1 = var1.usageHistory;
                        var1[var2] = var3;
case 47:
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
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = var3.lookupKey;
                        var1 = arg2;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        var2 = var1 == var3;
                        if(var2) { _fun0011_ip = 18; continue _fun0011 }
case 56:
                        var2 = new Array(2);
                        var2[0] = var3;
                        var3 = arg1;
                        var3 = var3.frecency;
                        var2[1] = var3;
                        var1 = var2;
case 18:
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
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var1 = var4().value;
                        var1 = var2;
                        var6 = undefined;
                        var3 = var1 === var6;
                        var1 = undefined;
                        if(var3) { _fun0012_ip = 57; continue _fun0012 }
case 9:
                        var5 = var4().value;
                        var4 = var2;
                        var4 = var4 === var6;
                        var1 = undefined;
                        var3 = var4;
                        if(var4) { _fun0012_ip = 57; continue _fun0012 }
case 48:
                        var1 = var5;
                        var3 = var4;
case 57:
                        if(var3) { _fun0012_ip = 6; continue _fun0012 }
case 19:
                        var2.return();
case 6:
                        var1 = -var1;
                        return var1;
                    }
                };
                var4 = var4.bind(var6)(var3);
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1[Symbol.iterator];
                        var1 = var2().next;
                        var4 = var1().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        if(var3) { _fun0013_ip = 58; continue _fun0013 }
case 59:
                        var1 = var4;
case 58:
                        if(var3) { _fun0013_ip = 8; continue _fun0013 }
case 60:
                        var2.return();
case 8:
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
        var2[7] = var1;
        var1 = {};
        var6 = 'frequently';
        var1['key'] = var6;
        var6 = function get() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = this;
                var2 = var1.dirty;
                if(!var2) { _fun0014_ip = 59; continue _fun0014 }
case 61:
                var2 = var1.compute;
                var2 = var2.bind(var1)();
case 59:
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
        var2[8] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/Frecency.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();