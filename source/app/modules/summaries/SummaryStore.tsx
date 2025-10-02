// app/modules/summaries/SummaryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            _closure1_slot31 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function handleQuickSwitcherUpdate() {
        var4 = _closure1_slot10;
        var3 = var4.getProps;
        var3 = var3.bind(var4)();
        var5 = var3.results;
        var4 = var5.filter;
        var3 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var3 = var2.type;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 16;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.AutocompleterResultTypes;
                var1 = var1.TEXT_CHANNEL;
                var1 = var3 === var1;
                if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = var2.record;
                var3 = var2.type;
                var2 = 0;
                var1 = var2 === var3;
case 6:
                return var1;
            }
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.record;
            var1 = var1.id;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot29 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.SUMMARY_POLL_INTERVAL;
    var _closure1_slot17 = var2;
    var8 = {};
    var2 = 'fetching';
    var8['FETCHING'] = var2;
    var2 = 'ok';
    var8['OK'] = var2;
    var2 = 'error';
    var8['ERROR'] = var2;
    var _closure1_slot22 = var8;
    var2 = {};
    var _closure1_slot23 = var2;
    var2 = {};
    var _closure1_slot24 = var2;
    var2 = {};
    var _closure1_slot25 = var2;
    var2 = new Array(0);
    var _closure1_slot26 = var2;
    var2 = {};
    var _closure1_slot27 = var2;
    var2 = {'status': null, 'lastRequest': null, 'lastResponse': null};
    var8 = var8.OK;
    var2['status'] = var8;
    var _closure1_slot28 = var2;
    var2 = new Array(0);
    var _closure1_slot29 = var2;
    var2 = new Array(0);
    var _closure1_slot30 = var2;
    var2 = 20;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function SummaryStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot31;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 9; continue _fun0003;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 9:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'getState';
        var5['key'] = var1;
        var1 = function value() {
            var1 = {};
            var2 = _closure1_slot18;
            var1['shouldShowTopicsBar'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(18);
        var1[0] = var5;
        var5 = {};
        var7 = 'initialize';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var5 = this;
                var3 = null;
                var6 = var3 == var4;
                var1 = undefined;
                var2 = undefined;
                if(var6) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                var2 = var4.shouldShowTopicsBar;
case 10:
                var3 = var3 == var2;
                if(var3) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var3 = var2;
case 12:
                var _closure1_slot18 = var3;
                var9 = var5.waitFor;
                var14 = _closure1_slot11;
                var13 = _closure1_slot16;
                var12 = _closure1_slot14;
                var11 = _closure1_slot12;
                var10 = _closure1_slot9;
                var15 = var5;
                var3 = var15[var9](var14, var13, var12, var11, var10, var9);
                var4 = var5.syncWith;
                var6 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = _closure1_slot32;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'allSummaries';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'topSummaries';
        var5['key'] = var7;
        var7 = function topSummaries() {
            var2 = global;
            var4 = var2.Object;
            var3 = var4.values;
            var2 = _closure1_slot23;
            var3 = var3.bind(var4)(var2);
            var2 = var3.flat;
            var4 = var2.bind(var3)();
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.people;
                    var3 = var1.length;
                    var1 = 1;
                    var1 = var3 > var1;
                    if(!var1) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 17;
                    var3 = var7[var3];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var3);
                    var3 = var4.extractTimestamp;
                    var2 = var2.endId;
                    var3 = var3.bind(var4)(var2);
                    var2 = global;
                    var2 = var2.Date;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {constructor: {value: var2}});
                    var9 = var4;
                    var2 = new var9[var2](var8);
                    var4 = var2 instanceof Object ? var2 : var4;
                    var2 = var4.getTime;
                    var4 = var2.bind(var4)();
                    var2 = 18;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.Millis;
                    var5 = var2.HOUR;
                    var2 = 5;
                    var2 = var2 * var5;
                    var2 = var4 - var2;
                    var1 = var3 > var2;
case 14:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.sort;
            var1 = function(arg1, arg2) {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 17;
                var2 = var5[var1];
                var3 = undefined;
                var7 = var4.bind(var3)(var2);
                var6 = var7.extractTimestamp;
                var2 = arg2;
                var2 = var2.endId;
                var2 = var6.bind(var7)(var2);
                var1 = var5[var1];
                var4 = var4.bind(var3)(var1);
                var3 = var4.extractTimestamp;
                var1 = arg1;
                var1 = var1.endId;
                var1 = var3.bind(var4)(var1);
                var1 = var2 - var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'summaries';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot23;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                var1 = _closure1_slot30;
case 15:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'shouldShowTopicsBar';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'findSummary';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var2 = arg2;
                var _closure3_slot0 = var2;
                var3 = var4.summaries;
                var2 = arg1;
                var3 = var3.bind(var4)(var2);
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0007_ip = 17; continue _fun0007 }
case 18:
                var1 = var2;
case 17:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'selectedSummary';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = _closure1_slot21;
                var2 = null;
                var3 = var2 != var1;
                var1 = null;
                if(!var3) { _fun0008_ip = 19; continue _fun0008 }
case 15:
                var3 = _closure1_slot21;
                var3 = var3.channelId;
                var1 = null;
                if(!(var3 === var5)) { _fun0008_ip = 19; continue _fun0008 }
case 20:
                var3 = _closure1_slot21;
                var3 = var3.summaryId;
                var3 = var2 != var3;
                var1 = null;
                if(!var3) { _fun0008_ip = 19; continue _fun0008 }
case 21:
                var3 = var4.findSummary;
                var6 = _closure1_slot21;
                var7 = var2 == var6;
                var2 = undefined;
                if(var7) { _fun0008_ip = 22; continue _fun0008 }
case 23:
                var2 = var6.summaryId;
case 22:
                var1 = var3.bind(var4)(var5, var2);
case 19:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'summaryFeedback';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0009_ip = 24; continue _fun0009 }
case 25:
                var3 = _closure1_slot25;
                var2 = var2.id;
                var1 = var3[var2];
case 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arg1;
                var3 = arg2;
                var2 = null;
                if(!(var2 == var3)) { _fun0010_ip = 26; continue _fun0010 }
case 25:
                var1 = _closure1_slot24;
                var1 = var1[var5];
                var6 = var2 == var1;
                var4 = undefined;
                if(var6) { _fun0010_ip = 27; continue _fun0010 }
case 13:
                var4 = var1.fetching;
case 27:
                var1 = true;
                var1 = var1 === var4;
                _fun0010_ip = 4; continue _fun0010;
case 26:
                var4 = _closure1_slot24;
                var4 = var4[var5];
                var5 = var2 == var4;
                var2 = undefined;
                if(var5) { _fun0010_ip = 3; continue _fun0010 }
case 28:
                var2 = var4.summaryId;
case 3:
                var1 = var2 === var3;
case 4:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'status';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot24;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'shouldFetch';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var6 = arg1;
                var4 = arg2;
                var1 = _closure1_slot24;
                var5 = var1[var6];
                var3 = _closure1_slot11;
                var1 = var3.getChannel;
                var7 = var1.bind(var3)(var6);
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 19;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var3);
                var3 = var6.canSeeChannelSummaries;
                var3 = var3.bind(var6)(var7);
                if(var3) { _fun0011_ip = 29; continue _fun0011 }
case 30:
                var3 = false;
                return var3;
case 29:
                var6 = null;
                if(!(var6 == var4)) { _fun0011_ip = 31; continue _fun0011 }
case 23:
                var7 = var6 == var5;
                var3 = undefined;
                if(var7) { _fun0011_ip = 32; continue _fun0011 }
case 33:
                var3 = var5.lastReceivedAt;
case 32:
                var9 = var6 != var3;
                var8 = 0;
                var7 = 0;
                if(!var9) { _fun0011_ip = 34; continue _fun0011 }
case 35:
                var7 = var3;
case 34:
                var3 = global;
                var9 = var3.Boolean;
                var10 = var6 == var5;
                var3 = undefined;
                if(var10) { _fun0011_ip = 36; continue _fun0011 }
case 37:
                var3 = var5.fetching;
case 36:
                var3 = var9.bind(var1)(var3);
                var3 = !var3;
                if(!var3) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                var3 = var8 === var7;
case 38:
                return var3;
case 31:
                var7 = var6 == var5;
                var3 = undefined;
                if(var7) { _fun0011_ip = 40; continue _fun0011 }
case 41:
                var3 = var5.summaryIdLastRequestedAt;
case 40:
                var8 = var6 != var3;
                var7 = 0;
                if(!var8) { _fun0011_ip = 42; continue _fun0011 }
case 43:
                var7 = var3;
case 42:
                var3 = global;
                var8 = var3.Date;
                var3 = var8.now;
                var3 = var3.bind(var8)();
                var3 = var3 - var7;
                var6 = var6 == var5;
                var1 = undefined;
                if(var6) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                var1 = var5.summaryId;
case 44:
                var1 = var4 !== var1;
                if(var1) { _fun0011_ip = 46; continue _fun0011 }
case 47:
                var2 = _closure1_slot17;
                var1 = var3 > var2;
case 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'channelAffinities';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'channelAffinitiesById';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'channelAffinitiesStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot28;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'shouldFetchChannelAffinities';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = _closure1_slot28;
                var2 = var1.status;
                var1 = _closure1_slot22;
                var1 = var1.FETCHING;
                var1 = var2 !== var1;
                if(!var1) { _fun0012_ip = 48; continue _fun0012 }
case 49:
                var2 = _closure1_slot28;
                var4 = var2.lastResponse;
                var2 = null;
                var2 = var2 != var4;
                if(!var2) { _fun0012_ip = 50; continue _fun0012 }
case 51:
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var5 = var4.bind(var5)();
                var4 = _closure1_slot28;
                var4 = var4.lastResponse;
                var4 = var5 - var4;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 18;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = var3.Millis;
                var5 = var3.SECOND;
                var3 = 30;
                var3 = var3 * var5;
                var2 = var4 < var3;
case 50:
                var1 = !var2;
case 48:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'defaultChannelIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = arg1;
                var5 = var4.withQuickSwitcher;
                var3 = var4.withChannelAffinities;
                var2 = var4.withUnreads;
                var4 = var4.numChannels;
                var6 = undefined;
                if(!(var4 === var6)) { _fun0013_ip = 52; continue _fun0013 }
case 53:
                var4 = 25;
case 52:
                var8 = new Array(0);
                var7 = var8;
                if(!var5) { _fun0013_ip = 30; continue _fun0013 }
case 54:
                var6 = var8.concat;
                var5 = _closure1_slot29;
                var7 = var6.bind(var8)(var5);
case 30:
                var6 = var7;
                if(!var3) { _fun0013_ip = 55; continue _fun0013 }
case 56:
                var5 = var7.concat;
                var9 = _closure1_slot26;
                var8 = var9.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.channel_id;
                    return var1;
                };
                var3 = var8.bind(var9)(var3);
                var6 = var5.bind(var7)(var3);
case 55:
                var3 = var6;
                if(!var2) { _fun0013_ip = 57; continue _fun0013 }
case 58:
                var5 = var6.filter;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot11;
                        var1 = var3.getChannel;
                        var3 = var1.bind(var3)(var4);
                        var1 = null;
                        var1 = var1 != var3;
                        if(!var1) { _fun0014_ip = 18; continue _fun0014 }
case 49:
                        var6 = _closure1_slot15;
                        var5 = var6.isChannelMuted;
                        var3 = var3.guild_id;
                        var3 = var5.bind(var6)(var3, var4);
                        var1 = !var3;
case 18:
                        if(!var1) { _fun0014_ip = 29; continue _fun0014 }
case 17:
                        var3 = _closure1_slot13;
                        var2 = var3.hasUnread;
                        var1 = var2.bind(var3)(var4);
case 29:
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var2);
case 57:
                var2 = var3.filter;
                var1 = function(arg1) {
                    var4 = _closure1_slot11;
                    var3 = var4.getChannel;
                    var2 = arg1;
                    var4 = var3.bind(var4)(var2);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.canSeeChannelSummaries;
                    var1 = false;
                    var1 = var2.bind(var3)(var4, var1, var1);
                    return var1;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.slice;
                var1 = 0;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'visibleSummaryIndex';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var6;
        var1[17] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SummaryStore';
    var8['persistKey'] = var2;
    var2 = 21;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function CONNECTION_OPEN() {
        var1 = false;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function CHANNEL_SELECT(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var6 = _closure1_slot21;
            var2 = null;
            var7 = var2 == var6;
            var1 = undefined;
            var4 = undefined;
            if(var7) { _fun0015_ip = 59; continue _fun0015 }
case 24:
            var4 = var6.channelId;
case 59:
            if(!(var4 !== var5)) { _fun0015_ip = 60; continue _fun0015 }
case 53:
            var _closure1_slot21 = var2;
case 60:
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function TOGGLE_TOPICS_BAR() {
        var1 = _closure1_slot18;
        var1 = !var1;
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var2['TOGGLE_TOPICS_BAR'] = var9;
    var9 = function RECEIVE_CHANNEL_SUMMARY(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var10 = var1.summary;
            var4 = var1.channelId;
            var6 = var1.error;
            var7 = var1.receivedAt;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var8 = null;
            if(!(var8 != var10)) { _fun0016_ip = 61; continue _fun0016 }
case 62:
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var2 = var2.bind(var3)(var10);
            var2 = var2.length;
            var11 = 0;
            if(!(var2 > var11)) { _fun0016_ip = 61; continue _fun0016 }
case 5:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 22;
            var3 = var12[var3];
            var9 = var9.bind(var1)(var3);
            var3 = var9.createSummaryFromServer;
            var9 = var3.bind(var9)(var10, var4);
            _closure2_slot0 = var9;
            var3 = _closure1_slot23;
            var10 = var3[var4];
            if(!(var8 == var10)) { _fun0016_ip = 36; continue _fun0016 }
case 63:
            var10 = new Array(0);
case 36:
            var3 = new Array(0);
            var15 = var3;
            var14 = var10;
            var13 = 0;
            var10 = arraySpread(var15, var14, var13);
            var10 = var3.findIndex;
            var5 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var4 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 == var4;
                    var1 = undefined;
                    if(var4) { _fun0017_ip = 12; continue _fun0017 }
case 64:
                    var3 = _closure2_slot0;
                    var1 = var3.id;
case 12:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var5 = var10.bind(var3)(var5);
            var10 = -1;
            if(!(!(var5 > var10))) { _fun0016_ip = 65; continue _fun0016 }
case 66:
            var10 = var3.push;
            var10 = var10.bind(var3)(var9);
            _fun0016_ip = 67; continue _fun0016;
case 65:
            var3[var5] = var9;
case 67:
            var2 = _closure1_slot23;
            var2[var4] = var3;
case 61:
            var3 = {};
            var5 = _closure1_slot24;
            var5 = var5[var4];
            if(!(var8 == var5)) { _fun0016_ip = 46; continue _fun0016 }
case 68:
            var8 = {};
            var9 = false;
            var8['fetching'] = var9;
            var5 = var8;
case 46:
            var15 = var3;
            var14 = var5;
            var5 = copyDataProperties(var15, var14);
            var5 = 'summaryId';
            var3[var5] = var1;
            var5 = 'summaryIdLastReceivedAt';
            var3[var5] = var7;
            var5 = 'summaryIdError';
            var3[var5] = var6;
            var2 = _closure1_slot24;
            var2[var4] = var3;
            return var1;
        }
    };
    var2['RECEIVE_CHANNEL_SUMMARY'] = var9;
    var9 = function REQUEST_CHANNEL_SUMMARY(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var6 = var1.summaryId;
            var5 = var1.requestedAt;
            var2 = _closure1_slot24;
            var1 = {};
            var4 = var2[var3];
            var7 = null;
            if(!(var7 == var4)) { _fun0018_ip = 8; continue _fun0018 }
case 20:
            var7 = {};
            var8 = false;
            var7['fetching'] = var8;
            var4 = var7;
case 8:
            var10 = var1;
            var9 = var4;
            var4 = copyDataProperties(var10, var9);
            var4 = 'summaryId';
            var1[var4] = var6;
            var4 = 'summaryIdLastRequestedAt';
            var1[var4] = var5;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['REQUEST_CHANNEL_SUMMARY'] = var9;
    var9 = function RECEIVE_CHANNEL_SUMMARIES(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var6 = var1.summaries;
            var4 = var1.channelId;
            var _closure2_slot0 = var4;
            var5 = var1.error;
            var8 = var1.receivedAt;
            var2 = var6.filter;
            var1 = function(arg1) {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var6 = var2.bind(var6)(var1);
            var2 = var6.map;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.createSummaryFromServer;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var11 = var2.bind(var6)(var1);
            var1 = _closure1_slot21;
            var6 = null;
            if(!(var6 != var1)) { _fun0019_ip = 69; continue _fun0019 }
case 70:
            var1 = _closure1_slot21;
            var1 = var1.channelId;
            if(!(var1 === var4)) { _fun0019_ip = 69; continue _fun0019 }
case 71:
            var7 = var11.some;
            var1 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var3 = _closure1_slot21;
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0020_ip = 13; continue _fun0020 }
case 64:
                    var1 = var3.summaryId;
case 13:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var1 = var7.bind(var11)(var1);
            if(var1) { _fun0019_ip = 69; continue _fun0019 }
case 72:
            var1 = _closure1_slot23;
            var9 = var1[var4];
            if(!(var6 == var9)) { _fun0019_ip = 73; continue _fun0019 }
case 50:
            var9 = new Array(0);
case 73:
            var7 = var9.find;
            var1 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var3 = _closure1_slot21;
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0021_ip = 13; continue _fun0021 }
case 64:
                    var1 = var3.summaryId;
case 13:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var1);
            if(!(var6 != var7)) { _fun0019_ip = 69; continue _fun0019 }
case 74:
            var1 = var11.push;
            var1 = var1.bind(var11)(var7);
case 69:
            var7 = _closure1_slot23;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 23;
            var9 = var9[var1];
            var1 = undefined;
            var10 = var10.bind(var1)(var9);
            var9 = var10.sortBy;
            var3 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.extractTimestamp;
                var1 = arg1;
                var1 = var1.startId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var10)(var11, var3);
            var3 = var9.reverse;
            var3 = var3.bind(var9)();
            var7[var4] = var3;
            var3 = {};
            var7 = _closure1_slot24;
            var12 = var7[var4];
            var13 = var3;
            var7 = copyDataProperties(var13, var12);
            var9 = false;
            var7 = 'fetching';
            var3[var7] = var9;
            var7 = 'error';
            var3[var7] = var1;
            var7 = 'lastReceivedAt';
            var3[var7] = var8;
            if(!(var6 != var5)) { _fun0019_ip = 75; continue _fun0019 }
case 76:
            var3['error'] = var5;
case 75:
            var2 = _closure1_slot24;
            var2[var4] = var3;
            return var1;
        }
    };
    var2['RECEIVE_CHANNEL_SUMMARIES'] = var9;
    var9 = function REQUEST_CHANNEL_SUMMARIES(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot24;
            var2 = var4.channelId;
            var1 = {};
            var6 = _closure1_slot24;
            var5 = var4.channelId;
            var5 = var6[var5];
            var6 = null;
            if(!(var6 == var5)) { _fun0022_ip = 27; continue _fun0022 }
case 77:
            var5 = {};
case 27:
            var8 = var1;
            var7 = var5;
            var5 = copyDataProperties(var8, var7);
            var6 = true;
            var5 = 'fetching';
            var1[var5] = var6;
            var5 = var4.requestedAt;
            var4 = 'lastRequestedAt';
            var1[var4] = var5;
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['REQUEST_CHANNEL_SUMMARIES'] = var9;
    var9 = function SET_HIGHLIGHTED_SUMMARY(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot19;
            var2 = null;
            if(!(var2 == var1)) { _fun0023_ip = 24; continue _fun0023 }
case 78:
            var1 = var4.channelId;
            if(!(var2 != var1)) { _fun0023_ip = 79; continue _fun0023 }
case 24:
            var6 = var4.channelId;
            var7 = _closure1_slot19;
            var8 = var2 == var7;
            var1 = undefined;
            var5 = undefined;
            if(var8) { _fun0023_ip = 18; continue _fun0023 }
case 51:
            var5 = var7.channelId;
case 18:
            if(!(var6 === var5)) { _fun0023_ip = 19; continue _fun0023 }
case 80:
            var6 = var4.summaryId;
            var7 = _closure1_slot19;
            var8 = var2 == var7;
            var5 = undefined;
            if(var8) { _fun0023_ip = 81; continue _fun0023 }
case 4:
            var5 = var7.summaryId;
case 81:
            if(!(var6 !== var5)) { _fun0023_ip = 82; continue _fun0023 }
case 19:
            var5 = var4.channelId;
            var6 = var2 != var5;
            var5 = null;
            if(!var6) { _fun0023_ip = 39; continue _fun0023 }
case 35:
            var6 = {};
            var7 = var4.channelId;
            var6['channelId'] = var7;
            var8 = var4.summaryId;
            var9 = var2 != var8;
            var7 = null;
            if(!var9) { _fun0023_ip = 83; continue _fun0023 }
case 36:
            var7 = var8;
case 83:
            var6['summaryId'] = var7;
            var5 = var6;
case 39:
            var _closure1_slot19 = var5;
            if(!(var2 != var5)) { _fun0023_ip = 84; continue _fun0023 }
case 85:
            var5 = _closure1_slot19;
            var5 = var5.channelId;
            var4 = var4.channelId;
            if(!(var5 === var4)) { _fun0023_ip = 84; continue _fun0023 }
case 86:
            var4 = _closure1_slot19;
            var4 = var4.summaryId;
            if(!(var2 != var4)) { _fun0023_ip = 84; continue _fun0023 }
case 87:
            var5 = _closure1_slot23;
            var4 = _closure1_slot19;
            var4 = var4.channelId;
            var6 = var5[var4];
            var4 = var2 == var6;
            var2 = undefined;
            if(var4) { _fun0023_ip = 46; continue _fun0023 }
case 88:
            var5 = var6.findIndex;
            var4 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var3 = _closure1_slot19;
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0024_ip = 13; continue _fun0024 }
case 64:
                    var1 = var3.summaryId;
case 13:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var4);
case 46:
            var _closure1_slot20 = var2;
case 84:
            return var1;
case 82:
            var1 = false;
            return var1;
case 79:
            var1 = false;
            return var1;
        }
    };
    var2['SET_HIGHLIGHTED_SUMMARY'] = var9;
    var9 = function UPDATE_VISIBLE_MESSAGES(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot14;
            var1 = var4.getChannelId;
            var5 = var1.bind(var4)();
            var1 = null;
            if(!(var1 != var5)) { _fun0025_ip = 89; continue _fun0025 }
case 12:
            var4 = _closure1_slot19;
            if(!(var1 != var4)) { _fun0025_ip = 90; continue _fun0025 }
case 91:
            var4 = _closure1_slot19;
            var4 = var4.channelId;
            if(!(var4 === var5)) { _fun0025_ip = 90; continue _fun0025 }
case 17:
            var4 = _closure1_slot19;
            var4 = var4.summaryId;
            if(!(var1 == var4)) { _fun0025_ip = 92; continue _fun0025 }
case 90:
            var4 = _closure1_slot23;
            var7 = var4[var5];
            var5 = var1 == var7;
            var4 = undefined;
            if(var5) { _fun0025_ip = 9; continue _fun0025 }
case 93:
            var6 = var7.findIndex;
            var5 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var1 = arg1;
                    var2 = _closure2_slot0;
                    var6 = var2.topVisibleMessage;
                    var3 = var2.bottomVisibleMessage;
                    var2 = var1.startId;
                    var5 = var1.endId;
                    var4 = null;
                    var1 = var4 == var6;
                    if(var1) { _fun0026_ip = 94; continue _fun0026 }
case 91:
                    var1 = var6 > var5;
case 94:
                    if(var1) { _fun0026_ip = 95; continue _fun0026 }
case 54:
                    var1 = var4 == var3;
case 95:
                    if(var1) { _fun0026_ip = 96; continue _fun0026 }
case 80:
                    var1 = var3 < var2;
case 96:
                    var1 = !var1;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var5);
case 9:
            _closure1_slot20 = var4;
            _fun0025_ip = 89; continue _fun0025;
case 92:
            var5 = _closure1_slot23;
            var4 = _closure1_slot19;
            var4 = var4.channelId;
            var5 = var5[var4];
            var4 = var1 == var5;
            var1 = undefined;
            if(var4) { _fun0025_ip = 41; continue _fun0025 }
case 97:
            var4 = var5.findIndex;
            var3 = function(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var3 = _closure1_slot19;
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0027_ip = 13; continue _fun0027 }
case 64:
                    var1 = var3.summaryId;
case 13:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3);
case 41:
            _closure1_slot20 = var1;
case 89:
            var1 = undefined;
            return var1;
        }
    };
    var2['UPDATE_VISIBLE_MESSAGES'] = var9;
    var9 = function SET_SELECTED_SUMMARY(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var6 = arg1;
            var7 = var6.channelId;
            var5 = null;
            var2 = var5 == var7;
            var1 = null;
            if(var2) { _fun0028_ip = 98; continue _fun0028 }
case 11:
            var3 = _closure1_slot21;
            var9 = var5 == var3;
            var2 = undefined;
            if(var9) { _fun0028_ip = 52; continue _fun0028 }
case 12:
            var2 = var3.channelId;
case 52:
            var2 = var7 !== var2;
            if(var2) { _fun0028_ip = 4; continue _fun0028 }
case 94:
            var3 = var6.summaryId;
            var9 = _closure1_slot21;
            var10 = var5 == var9;
            var8 = undefined;
            if(var10) { _fun0028_ip = 3; continue _fun0028 }
case 28:
            var8 = var9.summaryId;
case 3:
            var2 = var3 !== var8;
case 4:
            if(!var2) { _fun0028_ip = 99; continue _fun0028 }
case 100:
            var3 = {};
            var3['channelId'] = var7;
            var6 = var6.summaryId;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0028_ip = 35; continue _fun0028 }
case 101:
            var5 = var6;
case 35:
            var3['summaryId'] = var5;
            _closure1_slot21 = var3;
            var2 = undefined;
case 99:
            var1 = var2;
case 98:
            return var1;
        }
    };
    var2['SET_SELECTED_SUMMARY'] = var9;
    var9 = function SET_SUMMARY_FEEDBACK(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var2 = arg1;
            var1 = var2.summary;
            var3 = var2.rating;
            var2 = null;
            if(!(var2 == var3)) { _fun0029_ip = 20; continue _fun0029 }
case 102:
            var4 = _closure1_slot25;
            var2 = var1.id;
            var2 = delete var4[var2];
            _fun0029_ip = 103; continue _fun0029;
case 20:
            var2 = _closure1_slot25;
            var1 = var1.id;
            var2[var1] = var3;
case 103:
            var1 = undefined;
            return var1;
        }
    };
    var2['SET_SUMMARY_FEEDBACK'] = var9;
    var9 = function REQUEST_CHANNEL_AFFINITIES() {
        var2 = {};
        var5 = _closure1_slot28;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = _closure1_slot22;
        var4 = var3.FETCHING;
        var3 = 'status';
        var2[var3] = var4;
        var3 = global;
        var4 = var3.Date;
        var3 = var4.now;
        var4 = var3.bind(var4)();
        var3 = 'lastRequest';
        var2[var3] = var4;
        _closure1_slot28 = var2;
        var1 = undefined;
        return var1;
    };
    var2['REQUEST_CHANNEL_AFFINITIES'] = var9;
    var9 = function RECEIVE_CHANNEL_AFFINITIES(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var8 = var1.affinities;
            var1 = var1.error;
            var4 = null;
            if(!(var4 == var1)) { _fun0030_ip = 104; continue _fun0030 }
case 105:
            var1 = var8;
            if(!(var4 == var1)) { _fun0030_ip = 106; continue _fun0030 }
case 107:
            var1 = new Array(0);
case 106:
            _closure1_slot26 = var1;
            var5 = var4 == var8;
            var1 = undefined;
            var2 = undefined;
            if(var5) { _fun0030_ip = 108; continue _fun0030 }
case 7:
            var7 = var8.reduce;
            var6 = function(arg1, arg2) {
                var1 = arg1;
                var2 = arg2;
                var3 = var2.channel_id;
                var2 = var2.affinity;
                var1[var3] = var2;
                return var1;
            };
            var5 = {};
            var2 = var7.bind(var8)(var6, var5);
case 108:
            if(!(var4 == var2)) { _fun0030_ip = 109; continue _fun0030 }
case 100:
            var2 = {};
case 109:
            _closure1_slot27 = var2;
            var2 = {};
            var9 = _closure1_slot28;
            var10 = var2;
            var4 = copyDataProperties(var10, var9);
            var4 = _closure1_slot22;
            var5 = var4.OK;
            var4 = 'status';
            var2[var4] = var5;
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var5 = var4.bind(var5)();
            var4 = 'lastResponse';
            var2[var4] = var5;
            _closure1_slot28 = var2;
            return var1;
case 104:
            var1 = new Array(0);
            _closure1_slot26 = var1;
            var1 = {};
            _closure1_slot27 = var1;
            var1 = {};
            var9 = _closure1_slot28;
            var10 = var1;
            var3 = copyDataProperties(var10, var9);
            var3 = _closure1_slot22;
            var4 = var3.ERROR;
            var3 = 'status';
            var1[var3] = var4;
            var3 = global;
            var4 = var3.Date;
            var3 = var4.now;
            var4 = var3.bind(var4)();
            var3 = 'lastResponse';
            var1[var3] = var4;
            _closure1_slot28 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['RECEIVE_CHANNEL_AFFINITIES'] = var9;
    var9 = function REQUEST_CHANNEL_SUMMARIES_BULK(arg1) {
        var2 = arg1;
        var4 = var2.channelIds;
        var2 = var2.requestedAt;
        var _closure2_slot0 = var2;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var1 = arg1;
                var3 = arg2;
                var2 = _closure1_slot24;
                var4 = var2[var3];
                var2 = null;
                if(!(var2 == var4)) { _fun0031_ip = 10; continue _fun0031 }
case 105:
                var4 = {};
case 10:
                var2 = {};
                var7 = var2;
                var6 = var4;
                var4 = copyDataProperties(var7, var6);
                var5 = true;
                var4 = 'fetching';
                var2[var4] = var5;
                var5 = _closure2_slot0;
                var4 = 'lastRequestedAt';
                var2[var4] = var5;
                var5 = undefined;
                var4 = 'error';
                var2[var4] = var5;
                var1[var3] = var2;
                return var1;
            }
        };
        var1 = {};
        var3 = var3.bind(var4)(var2, var1);
        var2 = {};
        var5 = _closure1_slot24;
        var6 = var2;
        var4 = copyDataProperties(var6, var5);
        var6 = var2;
        var5 = var3;
        var3 = copyDataProperties(var6, var5);
        _closure1_slot24 = var2;
        var1 = undefined;
        return var1;
    };
    var2['REQUEST_CHANNEL_SUMMARIES_BULK'] = var9;
    var9 = function RECEIVE_CHANNEL_SUMMARIES_BULK(arg1) {
        var1 = arg1;
        var7 = var1.summaries;
        var3 = var1.receivedAt;
        var _closure2_slot0 = var3;
        var3 = var1.error;
        var _closure2_slot1 = var3;
        var1 = var1.requestArgs;
        var6 = var1.channelIds;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 23;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.toPairs;
        var8 = var4.bind(var5)(var7);
        var7 = var8.reduce;
        var5 = function(arg1, arg2) {
            var1 = arg1;
            var7 = _closure1_slot3;
            var6 = undefined;
            var5 = arg2;
            var3 = 2;
            var7 = var7.bind(var6)(var5, var3);
            var3 = 0;
            var3 = var7[var3];
            var _closure3_slot0 = var3;
            var5 = 1;
            var8 = var7[var5];
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 23;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.chain;
            var7 = var8.map;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.createSummaryFromServer;
                var2 = _closure3_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = var7.bind(var8)(var4);
            var6 = var5.bind(var6)(var4);
            var5 = var6.sortBy;
            var4 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.extractTimestamp;
                var1 = arg1;
                var1 = var1.startId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var5.bind(var6)(var4);
            var5 = var6.takeRight;
            var4 = 75;
            var5 = var5.bind(var6)(var4);
            var4 = var5.reverse;
            var5 = var4.bind(var5)();
            var4 = var5.filter;
            var2 = function(arg1) {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var4 = var4.bind(var5)(var2);
            var2 = var4.value;
            var2 = var2.bind(var4)();
            var1[var3] = var2;
            return var1;
        };
        var4 = {};
        var4 = var7.bind(var8)(var5, var4);
        var _closure2_slot2 = var4;
        var5 = var6.reduce;
        var4 = {};
        var7 = {};
        var4['summariesByChannel'] = var7;
        var7 = {};
        var4['summaryFetchStatusByChannel'] = var7;
        var2 = function(arg1, arg2) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var1 = arg1;
                var4 = arg2;
                var2 = _closure1_slot24;
                var6 = var2[var4];
                var2 = null;
                if(!(var2 == var6)) { _fun0032_ip = 10; continue _fun0032 }
case 105:
                var6 = {};
case 10:
                var3 = _closure2_slot2;
                var3 = var3[var4];
                if(!(var2 != var3)) { _fun0032_ip = 54; continue _fun0032 }
case 52:
                var2 = var1.summariesByChannel;
                var2[var4] = var3;
case 54:
                var3 = var1.summaryFetchStatusByChannel;
                var2 = {};
                var9 = var2;
                var8 = var6;
                var6 = copyDataProperties(var9, var8);
                var7 = false;
                var6 = 'fetching';
                var2[var6] = var7;
                var7 = _closure2_slot1;
                var6 = 'error';
                var2[var6] = var7;
                var6 = _closure2_slot0;
                var5 = 'lastReceivedAt';
                var2[var5] = var6;
                var3[var4] = var2;
                return var1;
            }
        };
        var4 = var5.bind(var6)(var2, var4);
        var2 = {};
        var9 = _closure1_slot23;
        var10 = var2;
        var5 = copyDataProperties(var10, var9);
        var9 = var4.summariesByChannel;
        var10 = var2;
        var5 = copyDataProperties(var10, var9);
        _closure1_slot23 = var2;
        var2 = {};
        var9 = _closure1_slot24;
        var10 = var2;
        var5 = copyDataProperties(var10, var9);
        var9 = var4.summaryFetchStatusByChannel;
        var10 = var2;
        var4 = copyDataProperties(var10, var9);
        _closure1_slot24 = var2;
        return var1;
    };
    var2['RECEIVE_CHANNEL_SUMMARIES_BULK'] = var9;
    var9 = function CONVERSATION_SUMMARY_UPDATE(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channel_id;
            var _closure2_slot0 = var4;
            var8 = var1.summaries;
            var1 = var1.guild_id;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var6 = var1.bind(var3)();
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var11 = 23;
            var3 = var1[var11];
            var1 = undefined;
            var7 = var7.bind(var1)(var3);
            var3 = var7.chain;
            var8 = var3.bind(var7)(var8);
            var7 = var8.sortBy;
            var3 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.extractTimestamp;
                var1 = arg1;
                var1 = var1.start_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var7.bind(var8)(var3);
            var7 = var8.filter;
            var3 = function(arg1) {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var8 = var7.bind(var8)(var3);
            var7 = var8.map;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.createSummaryFromServer;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var7 = var7.bind(var8)(var3);
            var3 = var7.reverse;
            var7 = var3.bind(var7)();
            var3 = var7.value;
            var10 = var3.bind(var7)();
            var3 = _closure1_slot23;
            var9 = var3[var4];
            var7 = null;
            if(!(var7 == var9)) { _fun0033_ip = 110; continue _fun0033 }
case 40:
            var9 = new Array(0);
case 110:
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var8 = var8.bind(var1)(var3);
            var3 = var8.chain;
            var8 = var3.bind(var8)(var10);
            var3 = var8.concat;
            var8 = var3.bind(var8)(var9);
            var3 = var8.sortBy;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.extractTimestamp;
                var1 = arg1;
                var1 = var1.startId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var3.bind(var8)(var2);
            var3 = var8.takeRight;
            var2 = 75;
            var8 = var3.bind(var8)(var2);
            var3 = var8.uniqBy;
            var2 = 'id';
            var3 = var3.bind(var8)(var2);
            var2 = var3.reverse;
            var3 = var2.bind(var3)();
            var2 = var3.value;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot23;
            var2[var4] = var3;
            var3 = _closure1_slot24;
            var2 = {};
            var12 = var3[var4];
            var13 = var2;
            var8 = copyDataProperties(var13, var12);
            var8 = 'error';
            var2[var8] = var1;
            var5 = _closure1_slot24;
            var8 = var5[var4];
            var9 = var7 == var8;
            var5 = undefined;
            if(var9) { _fun0033_ip = 111; continue _fun0033 }
case 112:
            var5 = var8.fetching;
case 111:
            var7 = var7 != var5;
            if(!var7) { _fun0033_ip = 113; continue _fun0033 }
case 114:
            var7 = var5;
case 113:
            var5 = 'fetching';
            var2[var5] = var7;
            var5 = 'lastReceivedAt';
            var2[var5] = var6;
            var3[var4] = var2;
            return var1;
        }
    };
    var2['CONVERSATION_SUMMARY_UPDATE'] = var9;
    var9 = function CLEAR_CONVERSATION_SUMMARIES() {
        var1 = {};
        _closure1_slot23 = var1;
        var1 = {};
        _closure1_slot24 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CLEAR_CONVERSATION_SUMMARIES'] = var9;
    var4 = function DELETE_SUMMARY(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var3 = arg1;
            var1 = var3.summary;
            var2 = var1.channelId;
            var4 = _closure1_slot23;
            var5 = var4[var2];
            var4 = null;
            if(!(var4 == var5)) { _fun0034_ip = 12; continue _fun0034 }
case 115:
            var5 = new Array(0);
case 12:
            var4 = var5.indexOf;
            var3 = var3.summary;
            var4 = var4.bind(var5)(var3);
            var3 = -1;
            if(!(var3 !== var4)) { _fun0034_ip = 116; continue _fun0034 }
case 117:
            var1 = _closure1_slot23;
            var3 = var1[var2];
            var2 = var3.splice;
            var1 = 1;
            var1 = var2.bind(var3)(var4, var1);
case 116:
            var1 = undefined;
            return var1;
        }
    };
    var2['DELETE_SUMMARY'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/summaries/SummaryStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();