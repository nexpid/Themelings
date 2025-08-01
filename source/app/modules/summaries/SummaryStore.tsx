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
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
 0:
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
                if(!var1) { _fun0002_ip = 69; continue _fun0002 }
 52:
                var2 = var2.record;
                var3 = var2.type;
                var2 = 0;
                var1 = var2 === var3;
 69:
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
 0:
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
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
 0:
                var4 = arg1;
                var5 = this;
                var3 = null;
                var6 = var3 == var4;
                var1 = undefined;
                var2 = undefined;
                if(var6) { _fun0004_ip = 25; continue _fun0004 }
 19:
                var2 = var4.shouldShowTopicsBar;
 25:
                var3 = var3 == var2;
                if(var3) { _fun0004_ip = 35; continue _fun0004 }
 32:
                var3 = var2;
 35:
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
 0:
                    var2 = arg1;
                    var1 = var2.people;
                    var3 = var1.length;
                    var1 = 1;
                    var1 = var3 > var1;
                    if(!var1) { _fun0005_ip = 143; continue _fun0005 }
 24:
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
 143:
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
 0:
                var3 = _closure1_slot23;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0006_ip = 24; continue _fun0006 }
 20:
                var1 = _closure1_slot30;
 24:
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
 0:
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
                if(!var3) { _fun0007_ip = 56; continue _fun0007 }
 53:
                var1 = var2;
 56:
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
 0:
                var5 = arg1;
                var4 = this;
                var1 = _closure1_slot21;
                var2 = null;
                var3 = var2 != var1;
                var1 = null;
                if(!var3) { _fun0008_ip = 89; continue _fun0008 }
 24:
                var3 = _closure1_slot21;
                var3 = var3.channelId;
                var1 = null;
                if(!(var3 === var5)) { _fun0008_ip = 89; continue _fun0008 }
 39:
                var3 = _closure1_slot21;
                var3 = var3.summaryId;
                var3 = var2 != var3;
                var1 = null;
                if(!var3) { _fun0008_ip = 89; continue _fun0008 }
 58:
                var3 = var4.findSummary;
                var6 = _closure1_slot21;
                var7 = var2 == var6;
                var2 = undefined;
                if(var7) { _fun0008_ip = 83; continue _fun0008 }
 77:
                var2 = var6.summaryId;
 83:
                var1 = var3.bind(var4)(var5, var2);
 89:
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
 0:
                var2 = arg1;
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0009_ip = 28; continue _fun0009 }
 12:
                var3 = _closure1_slot25;
                var2 = var2.id;
                var1 = var3[var2];
 28:
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
 0:
                var5 = arg1;
                var3 = arg2;
                var2 = null;
                if(!(var2 == var3)) { _fun0010_ip = 46; continue _fun0010 }
 12:
                var1 = _closure1_slot24;
                var1 = var1[var5];
                var6 = var2 == var1;
                var4 = undefined;
                if(var6) { _fun0010_ip = 38; continue _fun0010 }
 32:
                var4 = var1.fetching;
 38:
                var1 = true;
                var1 = var1 === var4;
                _fun0010_ip = 76; continue _fun0010;
 46:
                var4 = _closure1_slot24;
                var4 = var4[var5];
                var5 = var2 == var4;
                var2 = undefined;
                if(var5) { _fun0010_ip = 72; continue _fun0010 }
 66:
                var2 = var4.summaryId;
 72:
                var1 = var2 === var3;
 76:
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
 0:
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
                if(var3) { _fun0011_ip = 71; continue _fun0011 }
 67:
                var3 = false;
                return var3;
 71:
                var6 = null;
                if(!(var6 == var4)) { _fun0011_ip = 146; continue _fun0011 }
 77:
                var7 = var6 == var5;
                var3 = undefined;
                if(var7) { _fun0011_ip = 92; continue _fun0011 }
 86:
                var3 = var5.lastReceivedAt;
 92:
                var9 = var6 != var3;
                var8 = 0;
                var7 = 0;
                if(!var9) { _fun0011_ip = 106; continue _fun0011 }
 103:
                var7 = var3;
 106:
                var3 = global;
                var9 = var3.Boolean;
                var10 = var6 == var5;
                var3 = undefined;
                if(var10) { _fun0011_ip = 129; continue _fun0011 }
 123:
                var3 = var5.fetching;
 129:
                var3 = var9.bind(var1)(var3);
                var3 = !var3;
                if(!var3) { _fun0011_ip = 144; continue _fun0011 }
 140:
                var3 = var8 === var7;
 144:
                return var3;
 146:
                var7 = var6 == var5;
                var3 = undefined;
                if(var7) { _fun0011_ip = 163; continue _fun0011 }
 155:
                var3 = var5.summaryIdLastRequestedAt;
 163:
                var8 = var6 != var3;
                var7 = 0;
                if(!var8) { _fun0011_ip = 175; continue _fun0011 }
 172:
                var7 = var3;
 175:
                var3 = global;
                var8 = var3.Date;
                var3 = var8.now;
                var3 = var3.bind(var8)();
                var3 = var3 - var7;
                var6 = var6 == var5;
                var1 = undefined;
                if(var6) { _fun0011_ip = 211; continue _fun0011 }
 205:
                var1 = var5.summaryId;
 211:
                var1 = var4 !== var1;
                if(var1) { _fun0011_ip = 226; continue _fun0011 }
 218:
                var2 = _closure1_slot17;
                var1 = var3 > var2;
 226:
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
 0:
                var1 = _closure1_slot28;
                var2 = var1.status;
                var1 = _closure1_slot22;
                var1 = var1.FETCHING;
                var1 = var2 !== var1;
                if(!var1) { _fun0012_ip = 127; continue _fun0012 }
 29:
                var2 = _closure1_slot28;
                var4 = var2.lastResponse;
                var2 = null;
                var2 = var2 != var4;
                if(!var2) { _fun0012_ip = 124; continue _fun0012 }
 48:
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
 124:
                var1 = !var2;
 127:
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
 0:
                var4 = arg1;
                var5 = var4.withQuickSwitcher;
                var3 = var4.withChannelAffinities;
                var2 = var4.withUnreads;
                var4 = var4.numChannels;
                var6 = undefined;
                if(!(var4 === var6)) { _fun0013_ip = 40; continue _fun0013 }
 37:
                var4 = 25;
 40:
                var8 = new Array(0);
                var7 = var8;
                if(!var5) { _fun0013_ip = 67; continue _fun0013 }
 50:
                var6 = var8.concat;
                var5 = _closure1_slot29;
                var7 = var6.bind(var8)(var5);
 67:
                var6 = var7;
                if(!var3) { _fun0013_ip = 107; continue _fun0013 }
 73:
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
 107:
                var3 = var6;
                if(!var2) { _fun0013_ip = 130; continue _fun0013 }
 113:
                var5 = var6.filter;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var4 = arg1;
                        var3 = _closure1_slot11;
                        var1 = var3.getChannel;
                        var3 = var1.bind(var3)(var4);
                        var1 = null;
                        var1 = var1 != var3;
                        if(!var1) { _fun0014_ip = 53; continue _fun0014 }
 29:
                        var6 = _closure1_slot15;
                        var5 = var6.isChannelMuted;
                        var3 = var3.guild_id;
                        var3 = var5.bind(var6)(var3, var4);
                        var1 = !var3;
 53:
                        if(!var1) { _fun0014_ip = 71; continue _fun0014 }
 56:
                        var3 = _closure1_slot13;
                        var2 = var3.hasUnread;
                        var1 = var2.bind(var3)(var4);
 71:
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var2);
 130:
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
 0:
            var1 = arg1;
            var5 = var1.channelId;
            var6 = _closure1_slot21;
            var2 = null;
            var7 = var2 == var6;
            var1 = undefined;
            var4 = undefined;
            if(var7) { _fun0015_ip = 33; continue _fun0015 }
 28:
            var4 = var6.channelId;
 33:
            if(!(var4 !== var5)) { _fun0015_ip = 41; continue _fun0015 }
 37:
            var _closure1_slot21 = var2;
 41:
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
 0:
            var1 = arg1;
            var10 = var1.summary;
            var4 = var1.channelId;
            var6 = var1.error;
            var7 = var1.receivedAt;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var8 = null;
            if(!(var8 != var10)) { _fun0016_ip = 197; continue _fun0016 }
 42:
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var2 = var2.bind(var3)(var10);
            var2 = var2.length;
            var11 = 0;
            if(!(var2 > var11)) { _fun0016_ip = 197; continue _fun0016 }
 74:
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
            if(!(var8 == var10)) { _fun0016_ip = 129; continue _fun0016 }
 125:
            var10 = new Array(0);
 129:
            var3 = new Array(0);
            var15 = var3;
            var14 = var10;
            var13 = 0;
            var10 = arraySpread(var15, var14, var13);
            var10 = var3.findIndex;
            var5 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var4 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 == var4;
                    var1 = undefined;
                    if(var4) { _fun0017_ip = 35; continue _fun0017 }
 26:
                    var3 = _closure2_slot0;
                    var1 = var3.id;
 35:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var5 = var10.bind(var3)(var5);
            var10 = -1;
            if(!(!(var5 > var10))) { _fun0016_ip = 185; continue _fun0016 }
 173:
            var10 = var3.push;
            var10 = var10.bind(var3)(var9);
            _fun0016_ip = 189; continue _fun0016;
 185:
            var3[var5] = var9;
 189:
            var2 = _closure1_slot23;
            var2[var4] = var3;
 197:
            var3 = {};
            var5 = _closure1_slot24;
            var5 = var5[var4];
            if(!(var8 == var5)) { _fun0016_ip = 226; continue _fun0016 }
 214:
            var8 = {};
            var9 = false;
            var8['fetching'] = var9;
            var5 = var8;
 226:
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
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var6 = var1.summaryId;
            var5 = var1.requestedAt;
            var2 = _closure1_slot24;
            var1 = {};
            var4 = var2[var3];
            var7 = null;
            if(!(var7 == var4)) { _fun0018_ip = 51; continue _fun0018 }
 39:
            var7 = {};
            var8 = false;
            var7['fetching'] = var8;
            var4 = var7;
 51:
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
 0:
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
            if(!(var6 != var1)) { _fun0019_ip = 160; continue _fun0019 }
 78:
            var1 = _closure1_slot21;
            var1 = var1.channelId;
            if(!(var1 === var4)) { _fun0019_ip = 160; continue _fun0019 }
 91:
            var7 = var11.some;
            var1 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var3 = _closure1_slot21;
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0020_ip = 32; continue _fun0020 }
 26:
                    var1 = var3.summaryId;
 32:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var1 = var7.bind(var11)(var1);
            if(var1) { _fun0019_ip = 160; continue _fun0019 }
 112:
            var1 = _closure1_slot23;
            var9 = var1[var4];
            if(!(var6 == var9)) { _fun0019_ip = 128; continue _fun0019 }
 124:
            var9 = new Array(0);
 128:
            var7 = var9.find;
            var1 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var3 = _closure1_slot21;
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0021_ip = 32; continue _fun0021 }
 26:
                    var1 = var3.summaryId;
 32:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var1);
            if(!(var6 != var7)) { _fun0019_ip = 160; continue _fun0019 }
 150:
            var1 = var11.push;
            var1 = var1.bind(var11)(var7);
 160:
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
            if(!(var6 != var5)) { _fun0019_ip = 275; continue _fun0019 }
 269:
            var3['error'] = var5;
 275:
            var2 = _closure1_slot24;
            var2[var4] = var3;
            return var1;
        }
    };
    var2['RECEIVE_CHANNEL_SUMMARIES'] = var9;
    var9 = function REQUEST_CHANNEL_SUMMARIES(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot24;
            var2 = var4.channelId;
            var1 = {};
            var6 = _closure1_slot24;
            var5 = var4.channelId;
            var5 = var6[var5];
            var6 = null;
            if(!(var6 == var5)) { _fun0022_ip = 38; continue _fun0022 }
 36:
            var5 = {};
 38:
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
 0:
            var4 = arg1;
            var1 = _closure1_slot19;
            var2 = null;
            if(!(var2 == var1)) { _fun0023_ip = 28; continue _fun0023 }
 16:
            var1 = var4.channelId;
            if(!(var2 != var1)) { _fun0023_ip = 236; continue _fun0023 }
 28:
            var6 = var4.channelId;
            var7 = _closure1_slot19;
            var8 = var2 == var7;
            var1 = undefined;
            var5 = undefined;
            if(var8) { _fun0023_ip = 53; continue _fun0023 }
 48:
            var5 = var7.channelId;
 53:
            if(!(var6 === var5)) { _fun0023_ip = 89; continue _fun0023 }
 57:
            var6 = var4.summaryId;
            var7 = _closure1_slot19;
            var8 = var2 == var7;
            var5 = undefined;
            if(var8) { _fun0023_ip = 82; continue _fun0023 }
 76:
            var5 = var7.summaryId;
 82:
            if(!(var6 !== var5)) { _fun0023_ip = 232; continue _fun0023 }
 89:
            var5 = var4.channelId;
            var6 = var2 != var5;
            var5 = null;
            if(!var6) { _fun0023_ip = 140; continue _fun0023 }
 103:
            var6 = {};
            var7 = var4.channelId;
            var6['channelId'] = var7;
            var8 = var4.summaryId;
            var9 = var2 != var8;
            var7 = null;
            if(!var9) { _fun0023_ip = 132; continue _fun0023 }
 129:
            var7 = var8;
 132:
            var6['summaryId'] = var7;
            var5 = var6;
 140:
            var _closure1_slot19 = var5;
            if(!(var2 != var5)) { _fun0023_ip = 230; continue _fun0023 }
 148:
            var5 = _closure1_slot19;
            var5 = var5.channelId;
            var4 = var4.channelId;
            if(!(var5 === var4)) { _fun0023_ip = 230; continue _fun0023 }
 166:
            var4 = _closure1_slot19;
            var4 = var4.summaryId;
            if(!(var2 != var4)) { _fun0023_ip = 230; continue _fun0023 }
 180:
            var5 = _closure1_slot23;
            var4 = _closure1_slot19;
            var4 = var4.channelId;
            var6 = var5[var4];
            var4 = var2 == var6;
            var2 = undefined;
            if(var4) { _fun0023_ip = 226; continue _fun0023 }
 206:
            var5 = var6.findIndex;
            var4 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var3 = _closure1_slot19;
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0024_ip = 32; continue _fun0024 }
 26:
                    var1 = var3.summaryId;
 32:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var4);
 226:
            var _closure1_slot20 = var2;
 230:
            return var1;
 232:
            var1 = false;
            return var1;
 236:
            var1 = false;
            return var1;
        }
    };
    var2['SET_HIGHLIGHTED_SUMMARY'] = var9;
    var9 = function UPDATE_VISIBLE_MESSAGES(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot14;
            var1 = var4.getChannelId;
            var5 = var1.bind(var4)();
            var1 = null;
            if(!(var1 != var5)) { _fun0025_ip = 159; continue _fun0025 }
 35:
            var4 = _closure1_slot19;
            if(!(var1 != var4)) { _fun0025_ip = 70; continue _fun0025 }
 43:
            var4 = _closure1_slot19;
            var4 = var4.channelId;
            if(!(var4 === var5)) { _fun0025_ip = 70; continue _fun0025 }
 56:
            var4 = _closure1_slot19;
            var4 = var4.summaryId;
            if(!(var1 == var4)) { _fun0025_ip = 111; continue _fun0025 }
 70:
            var4 = _closure1_slot23;
            var7 = var4[var5];
            var5 = var1 == var7;
            var4 = undefined;
            if(var5) { _fun0025_ip = 105; continue _fun0025 }
 87:
            var6 = var7.findIndex;
            var5 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                    var1 = arg1;
                    var2 = _closure2_slot0;
                    var6 = var2.topVisibleMessage;
                    var3 = var2.bottomVisibleMessage;
                    var2 = var1.startId;
                    var5 = var1.endId;
                    var4 = null;
                    var1 = var4 == var6;
                    if(var1) { _fun0026_ip = 47; continue _fun0026 }
 43:
                    var1 = var6 > var5;
 47:
                    if(var1) { _fun0026_ip = 54; continue _fun0026 }
 50:
                    var1 = var4 == var3;
 54:
                    if(var1) { _fun0026_ip = 61; continue _fun0026 }
 57:
                    var1 = var3 < var2;
 61:
                    var1 = !var1;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var5);
 105:
            _closure1_slot20 = var4;
            _fun0025_ip = 159; continue _fun0025;
 111:
            var5 = _closure1_slot23;
            var4 = _closure1_slot19;
            var4 = var4.channelId;
            var5 = var5[var4];
            var4 = var1 == var5;
            var1 = undefined;
            if(var4) { _fun0025_ip = 155; continue _fun0025 }
 137:
            var4 = var5.findIndex;
            var3 = function(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var3 = _closure1_slot19;
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0027_ip = 32; continue _fun0027 }
 26:
                    var1 = var3.summaryId;
 32:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3);
 155:
            _closure1_slot20 = var1;
 159:
            var1 = undefined;
            return var1;
        }
    };
    var2['UPDATE_VISIBLE_MESSAGES'] = var9;
    var9 = function SET_SELECTED_SUMMARY(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var6 = arg1;
            var7 = var6.channelId;
            var5 = null;
            var2 = var5 == var7;
            var1 = null;
            if(var2) { _fun0028_ip = 117; continue _fun0028 }
 19:
            var3 = _closure1_slot21;
            var9 = var5 == var3;
            var2 = undefined;
            if(var9) { _fun0028_ip = 40; continue _fun0028 }
 35:
            var2 = var3.channelId;
 40:
            var2 = var7 !== var2;
            if(var2) { _fun0028_ip = 76; continue _fun0028 }
 47:
            var3 = var6.summaryId;
            var9 = _closure1_slot21;
            var10 = var5 == var9;
            var8 = undefined;
            if(var10) { _fun0028_ip = 72; continue _fun0028 }
 66:
            var8 = var9.summaryId;
 72:
            var2 = var3 !== var8;
 76:
            if(!var2) { _fun0028_ip = 114; continue _fun0028 }
 79:
            var3 = {};
            var3['channelId'] = var7;
            var6 = var6.summaryId;
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0028_ip = 103; continue _fun0028 }
 100:
            var5 = var6;
 103:
            var3['summaryId'] = var5;
            _closure1_slot21 = var3;
            var2 = undefined;
 114:
            var1 = var2;
 117:
            return var1;
        }
    };
    var2['SET_SELECTED_SUMMARY'] = var9;
    var9 = function SET_SUMMARY_FEEDBACK(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var2 = arg1;
            var1 = var2.summary;
            var3 = var2.rating;
            var2 = null;
            if(!(var2 == var3)) { _fun0029_ip = 39; continue _fun0029 }
 21:
            var4 = _closure1_slot25;
            var2 = var1.id;
            var2 = delete var4[var2];
            _fun0029_ip = 55; continue _fun0029;
 39:
            var2 = _closure1_slot25;
            var1 = var1.id;
            var2[var1] = var3;
 55:
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
 0:
            var1 = arg1;
            var8 = var1.affinities;
            var1 = var1.error;
            var4 = null;
            if(!(var4 == var1)) { _fun0030_ip = 149; continue _fun0030 }
 23:
            var1 = var8;
            if(!(var4 == var1)) { _fun0030_ip = 34; continue _fun0030 }
 30:
            var1 = new Array(0);
 34:
            _closure1_slot26 = var1;
            var5 = var4 == var8;
            var1 = undefined;
            var2 = undefined;
            if(var5) { _fun0030_ip = 75; continue _fun0030 }
 52:
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
 75:
            if(!(var4 == var2)) { _fun0030_ip = 81; continue _fun0030 }
 79:
            var2 = {};
 81:
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
 149:
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
 0:
                var1 = arg1;
                var3 = arg2;
                var2 = _closure1_slot24;
                var4 = var2[var3];
                var2 = null;
                if(!(var2 == var4)) { _fun0031_ip = 25; continue _fun0031 }
 23:
                var4 = {};
 25:
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
 0:
                var1 = arg1;
                var4 = arg2;
                var2 = _closure1_slot24;
                var6 = var2[var4];
                var2 = null;
                if(!(var2 == var6)) { _fun0032_ip = 25; continue _fun0032 }
 23:
                var6 = {};
 25:
                var3 = _closure2_slot2;
                var3 = var3[var4];
                if(!(var2 != var3)) { _fun0032_ip = 50; continue _fun0032 }
 40:
                var2 = var1.summariesByChannel;
                var2[var4] = var3;
 50:
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
 0:
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
            if(!(var7 == var9)) { _fun0033_ip = 167; continue _fun0033 }
 163:
            var9 = new Array(0);
 167:
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
            if(var9) { _fun0033_ip = 328; continue _fun0033 }
 322:
            var5 = var8.fetching;
 328:
            var7 = var7 != var5;
            if(!var7) { _fun0033_ip = 338; continue _fun0033 }
 335:
            var7 = var5;
 338:
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
 0:
            var3 = arg1;
            var1 = var3.summary;
            var2 = var1.channelId;
            var4 = _closure1_slot23;
            var5 = var4[var2];
            var4 = null;
            if(!(var4 == var5)) { _fun0034_ip = 35; continue _fun0034 }
 31:
            var5 = new Array(0);
 35:
            var4 = var5.indexOf;
            var3 = var3.summary;
            var4 = var4.bind(var5)(var3);
            var3 = -1;
            if(!(var3 !== var4)) { _fun0034_ip = 85; continue _fun0034 }
 62:
            var1 = _closure1_slot23;
            var3 = var1[var2];
            var2 = var3.splice;
            var1 = 1;
            var1 = var2.bind(var3)(var4, var1);
 85:
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