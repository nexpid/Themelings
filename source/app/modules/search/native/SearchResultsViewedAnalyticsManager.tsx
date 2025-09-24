// app/modules/search/native/SearchResultsViewedAnalyticsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot4;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var1 = _closure1_slot20;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
 38:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 92; continue _fun0001;
 51:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 71; continue _fun0001 }
 67:
            var6 = new Array(0);
 71:
            var5 = _closure1_slot4;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            _fun0002_ip = 76; continue _fun0002;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function _superPropGet(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var7 = arg3;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot5;
            var4 = _closure1_slot4;
            var1 = 1;
            var3 = 3;
            var8 = var1 & var3;
            var1 = var5;
            if(!var8) { _fun0003_ip = 44; continue _fun0003 }
 39:
            var1 = var5.prototype;
 44:
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = 'reset';
            var5 = var6.bind(var5)(var4, var1, var7);
            var _closure2_slot1 = var5;
            var1 = 2;
            var3 = var1 & var3;
            var1 = var5;
            if(!var3) { _fun0003_ip = 100; continue _fun0003 }
 79:
            var4 = 'function';
            var3 = typeof var5;
            var1 = var5;
            if(!(var4 === var3)) { _fun0003_ip = 100; continue _fun0003 }
 93:
            var1 = function(arg1) {
                var4 = _closure2_slot1;
                var3 = var4.apply;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
 100:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function getItemIdentifier(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var4 = _closure1_slot15;
            var4 = var4.DM;
            if(!(var4 !== var3)) { _fun0004_ip = 317; continue _fun0004 }
 28:
            var4 = _closure1_slot15;
            var4 = var4.GUILD_CHANNEL_MEMBER;
            if(!(var4 !== var3)) { _fun0004_ip = 317; continue _fun0004 }
 45:
            var4 = _closure1_slot15;
            var4 = var4.GROUP_DM;
            if(!(var4 !== var3)) { _fun0004_ip = 300; continue _fun0004 }
 62:
            var4 = _closure1_slot15;
            var4 = var4.GUILD_TEXT_CHANNEL;
            if(!(var4 !== var3)) { _fun0004_ip = 300; continue _fun0004 }
 79:
            var4 = _closure1_slot15;
            var4 = var4.GUILD_VOICE_CHANNEL;
            if(!(var4 !== var3)) { _fun0004_ip = 300; continue _fun0004 }
 96:
            var4 = _closure1_slot15;
            var4 = var4.MESSAGE;
            if(!(var4 !== var3)) { _fun0004_ip = 283; continue _fun0004 }
 113:
            var4 = _closure1_slot15;
            var4 = var4.LINK;
            if(!(var4 !== var3)) { _fun0004_ip = 222; continue _fun0004 }
 127:
            var4 = _closure1_slot15;
            var4 = var4.FILE;
            if(!(var4 !== var3)) { _fun0004_ip = 222; continue _fun0004 }
 141:
            var2 = _closure1_slot15;
            var2 = var2.MEDIA;
            if(!(var2 !== var3)) { _fun0004_ip = 159; continue _fun0004 }
 155:
            var2 = null;
            return var2;
 159:
            var2 = var1.props;
            var2 = var2.media;
            var6 = var2.messageId;
            var2 = var1.props;
            var2 = var2.media;
            var5 = var2.mediaIndex;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
 222:
            var2 = var1.props;
            var2 = var2.data;
            var6 = var2.messageId;
            var2 = var1.props;
            var2 = var2.data;
            var5 = var2.mediaIndex;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
 283:
            var2 = var1.props;
            var2 = var2.message;
            var2 = var2.id;
            return var2;
 300:
            var2 = var1.props;
            var2 = var2.channel;
            var2 = var2.id;
            return var2;
 317:
            var1 = var1.props;
            var1 = var1.user;
            var1 = var1.id;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var6 = var8[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var8[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.SearchListItemTypes;
    var _closure1_slot15 = var5;
    var4 = var4.SearchTabs;
    var _closure1_slot16 = var4;
    var4 = function() {
        var4 = _closure1_slot8;
        var3 = function AnalyticsQueueManager() {
            var3 = this;
            var4 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = global;
            var2 = var2.Map;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['pendingEvents'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'addEvent';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var3 = var2.tab;
                var1 = var2.isFocused;
                var2 = var2.eventData;
                if(var1) { _fun0005_ip = 82; continue _fun0005 }
 27:
                var5 = var4.pendingEvents;
                var1 = var5.get;
                var6 = var1.bind(var5)(var3);
                var1 = null;
                if(!(var1 == var6)) { _fun0005_ip = 53; continue _fun0005 }
 49:
                var6 = new Array(0);
 53:
                var1 = var6.push;
                var1 = var1.bind(var6)(var2);
                var5 = var4.pendingEvents;
                var1 = var5.set;
                var1 = var1.bind(var5)(var3, var6);
                _fun0005_ip = 94; continue _fun0005;
 82:
                var1 = var4.processEvent;
                var1 = var1.bind(var4)(var3, var2);
 94:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'flushPendingEvents';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var3;
                var5 = var1.pendingEvents;
                var4 = var5.get;
                var5 = var4.bind(var5)(var3);
                var4 = null;
                var4 = var4 != var5;
                if(!var4) { _fun0006_ip = 52; continue _fun0006 }
 41:
                var7 = var5.length;
                var6 = 0;
                var4 = var7 > var6;
 52:
                if(!var4) { _fun0006_ip = 88; continue _fun0006 }
 55:
                var4 = var5.forEach;
                var2 = function(arg1) {
                    var4 = _closure3_slot0;
                    var3 = var4.processEvent;
                    var2 = _closure3_slot1;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var2 = var1.pendingEvents;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
 88:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1.pendingEvents;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var6 = var4.bind(var1)();
    var4 = function(arg1) {
        var4 = function SearchItemViewedAnalyticsManagerImpl(arg1) {
            var5 = this;
            var10 = 0;
            var6 = copyRestArgs(var10);
            var2 = _closure1_slot7;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot19;
            var1 = new Array(0);
            var10 = var1;
            var9 = var6;
            var8 = 0;
            var6 = arraySpread(var10, var9, var8);
            var1 = var2.bind(var3)(var5, var4, var1);
            var2 = global;
            var2 = var2.Map;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var11 = var3;
            var2 = new var11[var2](var10);
            var2 = var2 instanceof Object ? var2 : var3;
            var1['aggregateViewEvents'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'getOrCreateAnalytics';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = arg1;
                var3 = this;
                var2 = var3.aggregateViewEvents;
                var1 = var2.get;
                var1 = var1.bind(var2)(var5);
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 95; continue _fun0007 }
 28:
                var2 = {'farthestSeenIndex': 0, 'uniqueSeenItems': null, 'totalResultsViewed': 0};
                var4 = global;
                var4 = var4.Set;
                var6 = var4.prototype;
                var6 = Object.create(var6, {constructor: {value: var4}});
                var9 = var6;
                var4 = new var9[var4](var8);
                var4 = var4 instanceof Object ? var4 : var6;
                var2['uniqueSeenItems'] = var4;
                var4 = var3.aggregateViewEvents;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                return var2;
 95:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'flushAnalytics';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = this;
            var3 = arg1;
            var _closure3_slot0 = var3;
            var4 = var2.aggregateViewEvents;
            var3 = var4.forEach;
            var1 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = arg1;
                    var6 = var2.farthestSeenIndex;
                    var1 = var2.uniqueSeenItems;
                    var4 = var2.totalResultsViewed;
                    var5 = var1.size;
                    var1 = 0;
                    if(!(var5 > var1)) { _fun0008_ip = 105; continue _fun0008 }
 32:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.trackSearchResultsViewedAggregate;
                    var1 = {};
                    var7 = _closure3_slot0;
                    var1['searchContext'] = var7;
                    var7 = arg2;
                    var1['searchTab'] = var7;
                    var1['farthestIndexSeen'] = var6;
                    var1['totalResultsViewedUnique'] = var5;
                    var1['totalResultsViewed'] = var4;
                    var1 = var2.bind(var3)(var1);
 105:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var1 = var2.reset;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'reset';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var6 = _closure1_slot21;
            var10 = _closure2_slot0;
            var1 = undefined;
            var9 = 'reset';
            var7 = 3;
            var11 = undefined;
            var8 = var2;
            var4 = var11[var6](var10, var9, var8, var7, var6);
            var3 = new Array(0);
            var3 = var4.bind(var1)(var3);
            var3 = var2.aggregateViewEvents;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'processEvent';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            var1 = arg2;
            var4 = this;
            var3 = var4.getOrCreateAnalytics;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var3 = var2.totalResultsViewed;
            var3 = var3 + 1;
            var2['totalResultsViewed'] = var3;
            var5 = var2.uniqueSeenItems;
            var4 = var5.add;
            var3 = var1.key;
            var3 = var4.bind(var5)(var3);
            var3 = global;
            var5 = var3.Math;
            var4 = var5.max;
            var3 = var2.farthestSeenIndex;
            var1 = var1.index;
            var1 = var4.bind(var5)(var3, var1);
            var2['farthestSeenIndex'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var5 = var4.bind(var1)(var6);
    var4 = function(arg1) {
        var4 = function SearchTabViewedAnalyticsManagerImpl(arg1) {
            var5 = this;
            var10 = 0;
            var6 = copyRestArgs(var10);
            var2 = _closure1_slot7;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot19;
            var1 = new Array(0);
            var10 = var1;
            var9 = var6;
            var8 = 0;
            var6 = arraySpread(var10, var9, var8);
            var1 = var2.bind(var3)(var5, var4, var1);
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var11 = var3;
            var2 = new var11[var2](var10);
            var2 = var2 instanceof Object ? var2 : var3;
            var1['searchTabsViewed'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'isSearchTabViewed';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var1 = this;
            var3 = var1.searchTabsViewed;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'processEvent';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.searchTabsViewed;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0009_ip = 80; continue _fun0009 }
 25:
                var2 = var1.searchTabsViewed;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.trackSearchResultsViewed;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
 80:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'reset';
        var5['key'] = var7;
        var6 = function value() {
            var2 = this;
            var6 = _closure1_slot21;
            var10 = _closure2_slot0;
            var1 = undefined;
            var9 = 'reset';
            var7 = 3;
            var11 = undefined;
            var8 = var2;
            var4 = var11[var6](var10, var9, var8, var7, var6);
            var3 = new Array(0);
            var3 = var4.bind(var1)(var3);
            var3 = var2.searchTabsViewed;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var6);
    var6 = var5.prototype;
    var6 = Object.create(var6, {constructor: {value: var5}});
    var13 = var6;
    var5 = new var13[var5](var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot17 = var5;
    var6 = var4.prototype;
    var6 = Object.create(var6, {constructor: {value: var4}});
    var13 = var6;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot18 = var4;
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/search/native/SearchResultsViewedAnalyticsManager.tsx';
    var6 = var7.bind(var8)(var6);
    var3['SearchItemViewedAnalyticsManager'] = var5;
    var3['SearchTabViewedAnalyticsManager'] = var4;
    var2 = function useSearchResultsViewedAnalytics(arg1) {
        var2 = arg1;
        var6 = var2.searchContext;
        var _closure2_slot0 = var6;
        var3 = var2.tab;
        var _closure2_slot1 = var3;
        var9 = var2.isFocused;
        var _closure2_slot2 = var9;
        var8 = var2.isInitialSearchQuery;
        var _closure2_slot3 = var8;
        var5 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 15;
        var2 = var7[var2];
        var7 = undefined;
        var5 = var5.bind(var7)(var2);
        var2 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = arg1;
                var1 = _closure2_slot3;
                if(var1) { _fun0010_ip = 167; continue _fun0010 }
 18:
                var3 = var4.forEach;
                var1 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.isViewable;
                        if(!var2) { _fun0011_ip = 145; continue _fun0011 }
 15:
                        var6 = var1.index;
                        var5 = var1.item;
                        var2 = var1.isViewable;
                        var1 = null;
                        var3 = var1 == var6;
                        var4 = null;
                        if(var3) { _fun0011_ip = 95; continue _fun0011 }
 42:
                        var3 = var1 == var5;
                        var4 = null;
                        if(var3) { _fun0011_ip = 95; continue _fun0011 }
 51:
                        var4 = null;
                        if(!var2) { _fun0011_ip = 95; continue _fun0011 }
 56:
                        var3 = _closure1_slot22;
                        var2 = undefined;
                        var5 = var3.bind(var2)(var5);
                        var3 = var1 == var5;
                        var2 = null;
                        if(var3) { _fun0011_ip = 92; continue _fun0011 }
 79:
                        var3 = {};
                        var3['index'] = var6;
                        var3['key'] = var5;
                        var2 = var3;
 92:
                        var4 = var2;
 95:
                        if(!(var1 != var4)) { _fun0011_ip = 145; continue _fun0011 }
 99:
                        var3 = _closure1_slot17;
                        var2 = var3.addEvent;
                        var1 = {};
                        var6 = _closure2_slot1;
                        var1['tab'] = var6;
                        var5 = _closure2_slot2;
                        var1['isFocused'] = var5;
                        var1['eventData'] = var4;
                        var1 = var2.bind(var3)(var1);
 145:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var6 = _closure1_slot18;
                var5 = var6.isSearchTabViewed;
                var3 = _closure2_slot1;
                var3 = var5.bind(var6)(var3);
                if(var3) { _fun0010_ip = 167; continue _fun0010 }
 62:
                var3 = function isNotEmptyItems(arg1) {
                    var3 = arg1;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var1 = arg1;
                            var4 = var1.item;
                            var2 = var1.isViewable;
                            var3 = _closure1_slot22;
                            var1 = undefined;
                            var3 = var3.bind(var1)(var4);
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0012_ip = 40; continue _fun0012 }
 37:
                            var1 = var2;
 40:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = undefined;
                var3 = var3.bind(var5)(var4);
                if(!var3) { _fun0010_ip = 167; continue _fun0010 }
 79:
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = function getSearchResultsCount(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var6 = arg1;
                        var4 = arg2;
                        var5 = _closure1_slot14;
                        var3 = var5.getState;
                        var2 = function(arg1) {
                            var2 = arg1;
                            var1 = var2.getSearchResultsQuery;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var10 = var3.bind(var5)(var6, var2);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 13;
                        var3 = var8[var2];
                        var5 = undefined;
                        var9 = var7.bind(var5)(var3);
                        var3 = var9.getSearchTabFetchId;
                        var3 = var3.bind(var9)(var6, var4, var10);
                        var2 = var8[var2];
                        var5 = var7.bind(var5)(var2);
                        var2 = var5.getSearchContextId;
                        var5 = var2.bind(var5)(var6);
                        var2 = _closure1_slot16;
                        var2 = var2.MESSAGES;
                        if(!(var2 !== var4)) { _fun0013_ip = 265; continue _fun0013 }
 106:
                        var2 = _closure1_slot16;
                        var2 = var2.MEDIA;
                        if(!(var2 !== var4)) { _fun0013_ip = 265; continue _fun0013 }
 123:
                        var2 = _closure1_slot16;
                        var2 = var2.PINS;
                        if(!(var2 !== var4)) { _fun0013_ip = 265; continue _fun0013 }
 140:
                        var2 = _closure1_slot16;
                        var2 = var2.LINKS;
                        if(!(var2 !== var4)) { _fun0013_ip = 265; continue _fun0013 }
 154:
                        var2 = _closure1_slot16;
                        var2 = var2.FILES;
                        if(!(var2 !== var4)) { _fun0013_ip = 265; continue _fun0013 }
 168:
                        var2 = _closure1_slot16;
                        var2 = var2.MEMBERS;
                        if(!(var2 !== var4)) { _fun0013_ip = 248; continue _fun0013 }
 182:
                        var2 = _closure1_slot16;
                        var2 = var2.GUILD_CHANNELS;
                        if(!(var2 !== var4)) { _fun0013_ip = 231; continue _fun0013 }
 196:
                        var2 = _closure1_slot16;
                        var2 = var2.PEOPLE;
                        if(!(var2 !== var4)) { _fun0013_ip = 214; continue _fun0013 }
 210:
                        var2 = null;
                        return var2;
 214:
                        var4 = _closure1_slot13;
                        var2 = var4.getCount;
                        var2 = var2.bind(var4)(var5);
                        return var2;
 231:
                        var4 = _closure1_slot11;
                        var2 = var4.getCount;
                        var2 = var2.bind(var4)(var5);
                        return var2;
 248:
                        var4 = _closure1_slot12;
                        var2 = var4.getCount;
                        var2 = var2.bind(var4)(var5);
                        return var2;
 265:
                        var2 = _closure1_slot10;
                        var1 = var2.getTotalCount;
                        var1 = var1.bind(var2)(var3);
                        return var1;
                    }
                };
                var6 = var2.bind(var5)(var4, var3);
                var2 = null;
                if(!(var2 != var6)) { _fun0010_ip = 167; continue _fun0010 }
 106:
                var3 = _closure1_slot18;
                var2 = var3.addEvent;
                var1 = {};
                var5 = _closure2_slot1;
                var1['tab'] = var5;
                var4 = _closure2_slot2;
                var1['isFocused'] = var4;
                var4 = {};
                var7 = _closure2_slot0;
                var4['searchContext'] = var7;
                var4['totalSearchResults'] = var6;
                var4['tab'] = var5;
                var1['eventData'] = var4;
                var1 = var2.bind(var3)(var1);
 167:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var5.bind(var7)(var2);
        var5 = _closure1_slot9;
        var7 = var5.useEffect;
        var4 = new Array(4);
        var4[0] = var9;
        var4[1] = var8;
        var4[2] = var6;
        var4[3] = var3;
        var3 = function() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var1 = _closure2_slot2;
                if(!var1) { _fun0014_ip = 17; continue _fun0014 }
 10:
                var2 = _closure2_slot3;
                var1 = !var2;
 17:
                if(!var1) { _fun0014_ip = 57; continue _fun0014 }
 20:
                var4 = _closure1_slot17;
                var2 = var4.flushPendingEvents;
                var3 = _closure2_slot1;
                var2 = var2.bind(var4)(var3);
                var2 = _closure1_slot18;
                var1 = var2.flushPendingEvents;
                var1 = var1.bind(var2)(var3);
 57:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var7.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var1 = function() {
            var5 = _closure1_slot14;
            var4 = var5.subscribeState;
            var3 = _closure2_slot0;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getSearchResultsQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = function(arg1, arg2) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0015_ip = 19; continue _fun0015 }
 12:
                    var2 = arg2;
                    var1 = var2 !== var3;
 19:
                    if(!var1) { _fun0015_ip = 53; continue _fun0015 }
 22:
                    var3 = _closure1_slot17;
                    var2 = var3.reset;
                    var2 = var2.bind(var3)();
                    var2 = _closure1_slot18;
                    var1 = var2.reset;
                    var1 = var1.bind(var2)();
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var1 = var4.bind(var5)(var1, var3);
        var1 = {};
        var1['onViewableItemsChanged'] = var2;
        return var1;
    };
    var3['useSearchResultsViewedAnalytics'] = var2;
    return var1;
})();