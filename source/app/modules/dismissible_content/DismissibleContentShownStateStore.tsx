// app/modules/dismissible_content/DismissibleContentShownStateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.TaskRunner;
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var12 = var5;
    var4 = new var12[var4](var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot2 = var4;
    var8 = function initState() {
        var1 = {'candidates': null, 'shownFatigableCandidate': null, 'prevFatigableCandidate': null};
        var2 = global;
        var3 = var2.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var1['candidates'] = var3;
        var3 = new Array(0);
        var1['recentlyShown'] = var3;
        var3 = var2.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var1['currentlyShown'] = var3;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var5 = var3;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var3;
        var1['currentlyShownGroup'] = var2;
        var2 = 0;
        var1['lastWinnerTime'] = var2;
        var2 = false;
        var1['postConnectionOpen'] = var2;
        return var1;
    };
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var7[var4];
    var5 = var6.bind(var1)(var4);
    var4 = var5.createWithEqualityFn;
    var4 = var4.bind(var5)(var8);
    var _closure1_slot4 = var4;
    var4 = function cloneState(arg1) {
        var2 = arg1;
        var1 = {};
        var8 = var1;
        var7 = var2;
        var3 = copyDataProperties(var8, var7);
        var3 = global;
        var6 = var3.Map;
        var8 = var2.candidates;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var5 = var4 instanceof Object ? var4 : var5;
        var4 = 'candidates';
        var1[var4] = var5;
        var6 = var3.Set;
        var8 = var2.currentlyShown;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var5 = var4 instanceof Object ? var4 : var5;
        var4 = 'currentlyShown';
        var1[var4] = var5;
        var4 = var3.Set;
        var8 = var2.currentlyShownGroup;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var9 = var3;
        var2 = new var9[var4](var8, var7);
        var3 = var2 instanceof Object ? var2 : var3;
        var2 = 'currentlyShownGroup';
        var1[var2] = var3;
        return var1;
    };
    var _closure1_slot5 = var4;
    var4 = function withoutContent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.content;
            if(!(var2 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var1.currentlyShown;
            var5 = var6.delete;
            var4 = var3.content;
            var4 = var5.bind(var6)(var4);
case 4:
            var4 = var3.groupName;
            if(!(var2 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var1.currentlyShownGroup;
            var5 = var6.delete;
            var4 = var3.groupName;
            var4 = var5.bind(var6)(var4);
case 6:
            var5 = var1.shownFatigableCandidate;
            var6 = var2 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var5.content;
case 8:
            var3 = var3.content;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 10:
            var1['shownFatigableCandidate'] = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = function withContent(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var3;
            var4 = null;
            if(!(var4 != var3)) { _fun0002_ip = 11; continue _fun0002 }
case 5:
            var7 = var1.currentlyShown;
            var6 = var7.add;
            var5 = var3.content;
            var5 = var6.bind(var7)(var5);
            var6 = var1.recentlyShown;
            var5 = var6.filter;
            var2 = function(arg1) {
                var1 = _closure2_slot0;
                var2 = var1.content;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var6 = var2.unshift;
            var5 = var3.content;
            var5 = var6.bind(var2)(var5);
            var6 = var2.splice;
            var5 = 5;
            var5 = var6.bind(var2)(var5);
            var1['recentlyShown'] = var2;
            var2 = var3.groupName;
            if(!(var4 != var2)) { _fun0002_ip = 12; continue _fun0002 }
case 2:
            var6 = var1.currentlyShownGroup;
            var5 = var6.add;
            var2 = var3.groupName;
            var2 = var5.bind(var6)(var2);
case 12:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 2;
            var2 = var5[var2];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var7 = var2.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            var6 = var7.has;
            var2 = var3.content;
            var2 = var6.bind(var7)(var2);
            if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1['shownFatigableCandidate'] = var3;
            var2 = var1.prevFatigableCandidate;
            var6 = var4 == var2;
            var5 = undefined;
            if(var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var5 = var2.content;
case 15:
            var2 = var3.content;
            if(!(var5 !== var2)) { _fun0002_ip = 13; continue _fun0002 }
case 17:
            var1['prevFatigableCandidate'] = var3;
            var2 = global;
            var2 = var2.Date;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var9 = var5;
            var2 = new var9[var2](var8);
            var5 = var2 instanceof Object ? var2 : var5;
            var2 = var5.getTime;
            var2 = var2.bind(var5)();
            var1['lastWinnerTime'] = var2;
case 13:
            var2 = var3.onAdded;
            if(!(var4 != var2)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = var3.onAdded;
            var2 = var2.bind(var3)();
case 18:
            return var1;
case 11:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = function withoutCandidate(arg1, arg2) {
        var1 = arg1;
        var4 = var1.candidates;
        var3 = var4.delete;
        var2 = arg2;
        var2 = var2.content;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot8 = var4;
    var4 = function swapFatigableContent(arg1, arg2) {
        var1 = arg1;
        var4 = _closure1_slot7;
        var5 = _closure1_slot6;
        var2 = var1.shownFatigableCandidate;
        var3 = undefined;
        var2 = var5.bind(var3)(var1, var2);
        var2 = arg2;
        var2 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var4;
    var4 = function withUpdateWinner(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.candidates;
            var3 = var2.size;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var2 = global;
            var2 = var2.Date;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var12 = var3;
            var2 = new var12[var2](var11);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = var3.getTime;
            var3 = var2.bind(var3)();
            var2 = var1.lastWinnerTime;
            var3 = var3 - var2;
            var2 = 300000;
            var2 = var3 > var2;
            var3 = var1.prevFatigableCandidate;
            var4 = null;
            var3 = var4 != var3;
            if(!var3) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var7 = var1.candidates;
            var6 = var7.has;
            var5 = var1.prevFatigableCandidate;
            var5 = var5.content;
            var3 = var6.bind(var7)(var5);
case 22:
            if(!var3) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var5 = var1.shownFatigableCandidate;
            var3 = var4 == var5;
case 24:
            if(!var3) { _fun0003_ip = 17; continue _fun0003 }
case 26:
            if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 27:
            var6 = _closure1_slot2;
            var5 = var6.unschedule;
            var5 = var5.bind(var6)();
            var6 = _closure1_slot9;
            var3 = var1.prevFatigableCandidate;
            var7 = var4 != var3;
            var5 = undefined;
            var3 = undefined;
            if(!var7) { _fun0003_ip = 28; continue _fun0003 }
case 14:
            var9 = var1.candidates;
            var8 = var9.get;
            var7 = var1.prevFatigableCandidate;
            var7 = var7.content;
            var3 = var8.bind(var9)(var7);
case 28:
            var3 = var6.bind(var5)(var1, var3);
            _fun0003_ip = 29; continue _fun0003;
case 17:
            var3 = var1.shownFatigableCandidate;
            if(!(var4 != var3)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            if(!var2) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var4 = _closure1_slot2;
            var3 = var4.scheduled;
            var3 = var3.bind(var4)();
            if(var3) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var5 = _closure1_slot11;
            var4 = undefined;
            var3 = var5.bind(var4)(var1);
case 32:
            if(var3) { _fun0003_ip = 29; continue _fun0003 }
case 34:
            var5 = _closure1_slot2;
            var4 = var5.schedule;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.batchUpdates;
                var2 = function() {
                    var3 = _closure1_slot4;
                    var2 = var3.setState;
                    var1 = function(arg1) {
                        var3 = _closure1_slot5;
                        var4 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1);
                        var3 = _closure1_slot9;
                        var2 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var1 = arg1;
                                var _closure6_slot0 = var1;
                                var4 = var1.candidates;
                                var3 = var4.keys;
                                var9 = var3.bind(var4)();
                                var5 = new Array(0);
                                var8 = 0;
                                var10 = var5;
                                var3 = arraySpread(var10, var9, var8);
                                var4 = var1.prevFatigableCandidate;
                                var3 = null;
                                var3 = var3 !== var4;
                                if(!var3) { _fun0004_ip = 35; continue _fun0004 }
case 7:
                                var7 = var1.candidates;
                                var6 = var7.has;
                                var4 = var1.prevFatigableCandidate;
                                var4 = var4.content;
                                var3 = var6.bind(var7)(var4);
case 35:
                                if(!var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                                var4 = var1.candidates;
                                var6 = var4.size;
                                var4 = 1;
                                var3 = var6 > var4;
case 36:
                                var4 = var5;
                                if(!var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                                var3 = var5.filter;
                                var2 = function(arg1) {
                                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                        var1 = _closure6_slot0;
                                        var1 = var1.prevFatigableCandidate;
                                        var2 = null;
                                        var3 = var2 == var1;
                                        var2 = undefined;
                                        if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                                        var2 = var1.content;
case 40:
                                        var1 = arg1;
                                        var1 = var1 !== var2;
                                        return var1;
                                    }
                                };
                                var4 = var3.bind(var5)(var2);
case 38:
                                var3 = var1.candidates;
                                var2 = var3.get;
                                var1 = global;
                                var6 = var1.Math;
                                var5 = var6.floor;
                                var7 = var1.Math;
                                var1 = var7.random;
                                var7 = var1.bind(var7)();
                                var1 = var4.length;
                                var1 = var7 * var1;
                                var1 = var5.bind(var6)(var1);
                                var1 = var4[var1];
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            }
                        };
                        var2 = var2.bind(var4)(var1);
                        var2 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = 250;
            var2 = var4.bind(var5)(var3, var2);
case 29:
            return var1;
case 20:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = function isStateInCooldown(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = global;
            var1 = var1.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var5 = var3;
            var1 = new var5[var1](var4);
            var3 = var1 instanceof Object ? var1 : var3;
            var1 = var3.getTime;
            var3 = var1.bind(var3)();
            var4 = var2.shownFatigableCandidate;
            var1 = null;
            var1 = var1 == var4;
            if(!var1) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var2 = var2.lastWinnerTime;
            var3 = var3 - var2;
            var2 = 3600000;
            var1 = var3 < var2;
case 42:
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/dismissible_content/DismissibleContentShownStateStore.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useDismissibleContentShownStateStore(arg1, arg2) {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var5;
    var5 = function() {
        var3 = _closure1_slot11;
        var2 = _closure1_slot4;
        var1 = var2.getState;
        var2 = var1.bind(var2)();
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['isInCooldown'] = var5;
    var3['isStateInCooldown'] = var4;
    var4 = function(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 2;
        var6 = var5[var1];
        var1 = undefined;
        var6 = var4.bind(var1)(var6);
        var7 = var6.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
        var6 = var7.has;
        var3 = var3.content;
        var3 = var6.bind(var7)(var3);
        var _closure2_slot1 = var3;
        var3 = 3;
        var3 = var5[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure1_slot5;
                    var4 = undefined;
                    var1 = arg1;
                    var1 = var2.bind(var4)(var1);
                    var5 = _closure2_slot1;
                    if(var5) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var5 = _closure1_slot10;
                    var9 = _closure2_slot0;
                    var8 = var1.candidates;
                    var7 = var8.set;
                    var6 = var9.content;
                    var6 = var7.bind(var8)(var6, var9);
                    var5 = var5.bind(var4)(var1);
                    _fun0007_ip = 46; continue _fun0007;
case 44:
                    var3 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var1, var2);
case 46:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['addCandidateContent'] = var4;
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure1_slot5;
                    var3 = undefined;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot1;
                    if(var2) { _fun0008_ip = 47; continue _fun0008 }
case 45:
                    var5 = _closure1_slot6;
                    var7 = _closure1_slot8;
                    var2 = _closure2_slot0;
                    var7 = var7.bind(var3)(var1, var2);
                    var2 = var5.bind(var3)(var1, var2);
                    _fun0008_ip = 48; continue _fun0008;
case 47:
                    var2 = _closure1_slot10;
                    var5 = _closure1_slot6;
                    var6 = _closure1_slot8;
                    var4 = _closure2_slot0;
                    var6 = var6.bind(var3)(var1, var4);
                    var4 = var5.bind(var3)(var1, var4);
                    var2 = var2.bind(var3)(var1);
case 48:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['removeCandidateContent'] = var4;
    var4 = function() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = _closure1_slot4;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var2 = var1.recentlyShown;
            var1 = 0;
            var2 = var2[var1];
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0009_ip = 49; continue _fun0009 }
case 50:
            var1 = var2;
case 49:
            return var1;
        }
    };
    var3['getLastShownDismissibleContent'] = var4;
    var4 = function() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = _closure1_slot4;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var3 = var1.shownFatigableCandidate;
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0010_ip = 51; continue _fun0010 }
case 52:
            var2 = var3.content;
case 51:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0010_ip = 53; continue _fun0010 }
case 54:
            var1 = var2;
case 53:
            return var1;
        }
    };
    var3['getCurrentFatigableWinner'] = var4;
    var4 = function(arg1) {
        var2 = _closure1_slot4;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var3 = var1.currentlyShown;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isContentShown'] = var4;
    var4 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.currentlyShown;
            var2 = var3.has;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useIsContentShown'] = var4;
    var4 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure2_slot0;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = _closure3_slot0;
                var3 = var1.currentlyShown;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useIsAnyContentShown'] = var4;
    var4 = function(arg1) {
        var3 = arg1;
        var4 = _closure1_slot4;
        var2 = var4.getState;
        var2 = var2.bind(var4)();
        var2 = var2.currentlyShown;
        var _closure2_slot0 = var2;
        var2 = var3.find;
        var1 = function(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isAnyContentShown'] = var4;
    var4 = function() {
        var3 = _closure1_slot4;
        var1 = var3.getState;
        var1 = var1.bind(var3)();
        var6 = var1.currentlyShown;
        var4 = new Array(0);
        var5 = 0;
        var7 = var4;
        var1 = arraySpread(var7, var6, var5);
        var2 = var4.filter;
        var1 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var1 = var2.bind(var4)(var1);
        var2 = var1.length;
        var1 = var3.getState;
        var1 = var1.bind(var3)();
        var1 = var1.currentlyShown;
        var3 = var1.size;
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['getCurrentlyShownCounts'] = var4;
    var4 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.batchUpdates;
        var3 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var2 = true;
                var1['postConnectionOpen'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot2;
        var2 = var3.unschedule;
        var2 = var2.bind(var3)();
        return var1;
    };
    var3['reset'] = var4;
    var2 = function() {
        var2 = _closure1_slot4;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.postConnectionOpen;
        return var1;
    };
    var3['isPostConnectionOpen'] = var2;
    return var1;
})();