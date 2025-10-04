// app/modules/icymi/ICYMISessionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function endCurrentSession() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var3 = _closure1_slot7;
            var2 = var3.endSession;
            var2 = var2.bind(var3)();
            var1 = true;
case 39:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function endCurrentSessionImpressions() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var3 = _closure1_slot7;
            var2 = var3.endAllImpressions;
            var2 = var2.bind(var3)();
            var1 = true;
case 39:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var6 = function handleTabOpened() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot15;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var2 = _closure1_slot8;
            var4 = var2.length;
            var2 = 0;
            if(!(var4 > var2)) { _fun0007_ip = 41; continue _fun0007 }
case 38:
            var6 = _closure1_slot11;
            var8 = _closure1_slot8;
            var2 = var6.prototype;
            var4 = Object.create(var2, {constructor: {value: var6}});
            var7 = 'focus';
            var9 = var4;
            var2 = new var9[var6](var8, var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure1_slot7 = var2;
            var1 = true;
case 41:
            return var1;
        }
    };
    var _closure1_slot17 = var6;
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var5 = 0;
    var10 = var8[var5];
    var1 = undefined;
    var10 = var9.bind(var1)(var10);
    var _closure1_slot2 = var10;
    var10 = 1;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var10 = 2;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 3;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 4;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = null;
    var _closure1_slot7 = var10;
    var10 = new Array(0);
    var _closure1_slot8 = var10;
    var _closure1_slot9 = var5;
    var2 = var2.Map;
    var5 = var2.prototype;
    var5 = Object.create(var5, {constructor: {value: var2}});
    var15 = var5;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var5;
    var _closure1_slot10 = var2;
    var2 = function() {
        var4 = _closure1_slot6;
        var3 = function ICYMISession() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var6 = arguments[0];
                var3 = arguments[1];
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                var6 = new Array(0);
case 42:
                if(!(var3 === var1)) { _fun0008_ip = 37; continue _fun0008 }
case 44:
                var3 = 'list';
case 37:
                var _closure3_slot1 = var3;
                var5 = _closure1_slot5;
                var3 = _closure2_slot0;
                var3 = var5.bind(var1)(var4, var3);
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 5;
                var3 = var11[var3];
                var5 = var10.bind(var1)(var3);
                var3 = var5.v4;
                var3 = var3.bind(var5)();
                var4['_sessionId'] = var3;
                var3 = global;
                var7 = var3.Date;
                var5 = var7.now;
                var5 = var5.bind(var7)();
                var4['_startTimestamp'] = var5;
                var5 = null;
                var4['_endTimestamp'] = var5;
                var5 = new Array(0);
                var4['_activeItems'] = var5;
                var5 = 0;
                var4['_dwellCount'] = var5;
                var4['_impressionCount'] = var5;
                var7 = var3.Map;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var15 = var8;
                var7 = new var15[var7](var14);
                var7 = var7 instanceof Object ? var7 : var8;
                var4['_dwelledItemIdMap'] = var7;
                var7 = var3.Map;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var15 = var8;
                var7 = new var15[var7](var14);
                var7 = var7 instanceof Object ? var7 : var8;
                var4['_impressionItemIdMap'] = var7;
                var7 = var3.Set;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var15 = var8;
                var7 = new var15[var7](var14);
                var7 = var7 instanceof Object ? var7 : var8;
                var4['_impressionItemTypes'] = var7;
                var4['_reloadCount'] = var5;
                var4['_feedFetchCount'] = var5;
                var4['_dwelledItemsChangedCount'] = var5;
                var4['_interactionCount'] = var5;
                var4['_latestDwellStartTimeMs'] = var5;
                var8 = var3.setTimeout;
                var7 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.endSession;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = 300000;
                var3 = var8.bind(var1)(var7, var3);
                var4['_timeout'] = var3;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var1)(var3);
                var8 = var3.ICYMIAnalytics;
                var7 = var8.trackFeedSessionStarted;
                var3 = {};
                var12 = var4._sessionId;
                var3['icymiSessionId'] = var12;
                var12 = var4._startTimestamp;
                var3['sessionStartTimeMs'] = var12;
                var9 = _closure1_slot9;
                var3['previousIcymiSessionCount'] = var9;
                var9 = 7;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var11 = var9.DestinationICYMIExperiment;
                var10 = var11.getConfig;
                var9 = {};
                var12 = 'ICYMISessionStore.constructor';
                var9['location'] = var12;
                var9 = var10.bind(var11)(var9);
                var9 = var9.uxVariation;
                var3['uxVariation'] = var9;
                var3 = var7.bind(var8)(var3);
                var3 = var6.length;
                if(!(var3 > var5)) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                var3 = var4.startItemsDwell;
                var5 = var6.map;
                var2 = function(arg1) {
                    var1 = {};
                    var4 = arg1;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure3_slot1;
                    var2 = 'triggerType';
                    var1[var2] = var3;
                    var3 = true;
                    var2 = 'isInitiallyVisible';
                    var1[var2] = var3;
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
case 45:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'sessionId';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._sessionId;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(24);
        var2[0] = var1;
        var1 = {};
        var6 = 'startTimestamp';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._startTimestamp;
            return var1;
        };
        var1['get'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'endTimestamp';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._endTimestamp;
            return var1;
        };
        var1['get'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'dwellCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._dwellCount;
            return var1;
        };
        var1['get'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'uniqueDwellCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._dwelledItemIdMap;
            var1 = var1.size;
            return var1;
        };
        var1['get'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'impressionCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._impressionCount;
            return var1;
        };
        var1['get'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'uniqueImpressionCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._impressionItemIdMap;
            var1 = var1.size;
            return var1;
        };
        var1['get'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'interactionCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._interactionCount;
            return var1;
        };
        var1['get'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'reloadCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._reloadCount;
            return var1;
        };
        var1['get'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'feedFetchCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._feedFetchCount;
            return var1;
        };
        var1['get'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'dwelledItemsChangedCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._dwelledItemsChangedCount;
            return var1;
        };
        var1['get'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'impressionItemTypes';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._impressionItemTypes;
            return var1;
        };
        var1['get'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'getImpression';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = this;
            var3 = var2._activeItems;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.itemId;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'startItemsDwell';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var6 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var2 = var1._resetTimeout;
                var2 = var2.bind(var1)();
                _closure1_slot8 = var6;
                var5 = var6.length;
                var2 = var1._activeItems;
                var2 = var2.length;
                if(!(var5 === var2)) { _fun0009_ip = 47; continue _fun0009 }
case 9:
                var5 = var6.every;
                var2 = function(arg1, arg2) {
                    var1 = _closure3_slot0;
                    var2 = var1._activeItems;
                    var1 = arg2;
                    var1 = var2[var1];
                    var2 = var1.itemId;
                    var1 = arg1;
                    var1 = var1.itemId;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                if(var2) { _fun0009_ip = 48; continue _fun0009 }
case 47:
                var2 = var1._dwelledItemsChangedCount;
                var2 = var2 + 1;
                var1['_dwelledItemsChangedCount'] = var2;
                var2 = new Array(0);
                var5 = global;
                var8 = var5.Set;
                var9 = var1._activeItems;
                var7 = var9.map;
                var5 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.itemId;
                    return var1;
                };
                var13 = var7.bind(var9)(var5);
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var14 = var7;
                var5 = new var14[var8](var13, var12);
                var5 = var5 instanceof Object ? var5 : var7;
                var4 = _closure1_slot13;
                var9 = undefined;
                var8 = var4.bind(var9)(var6);
                var6 = var8.bind(var9)();
                var4 = var6.done;
                var7 = null;
                if(var4) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                var4 = var6.value;
                var11 = var1.getImpression;
                var10 = var4.itemId;
                var11 = var11.bind(var1)(var10);
                if(!(var7 == var11)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                var12 = var2.push;
                var10 = var1._createImpression;
                var10 = var10.bind(var1)(var4);
                var10 = var12.bind(var2)(var10);
                _fun0009_ip = 53; continue _fun0009;
case 51:
                var10 = var2.push;
                var10 = var10.bind(var2)(var11);
                var10 = var5.delete;
                var4 = var4.itemId;
                var4 = var10.bind(var5)(var4);
case 53:
                var10 = var8.bind(var9)();
                var4 = var10.done;
                var6 = var10;
                if(!var4) { _fun0009_ip = 50; continue _fun0009 }
case 49:
                var4 = var5.forEach;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3._endImpression;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['_activeItems'] = var2;
                var2 = var1._activeItems;
                return var2;
case 48:
                var1 = var1._activeItems;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'trackItemsLongImpression';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var10 = this;
                var3 = _closure1_slot13;
                var1 = undefined;
                var2 = arg1;
                var8 = var3.bind(var1)(var2);
                var3 = var8.bind(var1)();
                var2 = var3.done;
                var7 = null;
                var6 = 1;
                var5 = 6;
                if(var2) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                var2 = var3.value;
                var12 = var10.getImpression;
                var11 = var2.itemId;
                var14 = var12.bind(var10)(var11);
                var13 = var14;
                if(!(var7 == var13)) { _fun0010_ip = 56; continue _fun0010 }
case 5:
                var11 = var10._constructImpressionFromInput;
                var13 = var11.bind(var10)(var2);
case 56:
                var11 = var10._impressionCount;
                var11 = var11 + 1;
                var10['_impressionCount'] = var11;
                var13['sessionImpressionIndex'] = var11;
                var15 = var10._impressionItemIdMap;
                var12 = var15.set;
                var11 = var2.itemId;
                var17 = var10._impressionItemIdMap;
                var16 = var17.get;
                var2 = var2.itemId;
                var16 = var16.bind(var17)(var2);
                var17 = var7 != var16;
                var2 = 0;
                if(!var17) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                var2 = var16;
case 57:
                var2 = var2 + var6;
                var2 = var12.bind(var15)(var11, var2);
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var11.bind(var1)(var2);
                var12 = var2.ICYMIAnalytics;
                var11 = var12.trackFeedItemDwell1s;
                var2 = {};
                var15 = var10._sessionId;
                var2['icymiSessionId'] = var15;
                var15 = var13.impressionId;
                var2['impressionId'] = var15;
                var15 = var13.itemId;
                var2['itemId'] = var15;
                var15 = var13.itemType;
                var2['itemType'] = var15;
                var15 = var13.impressionStartTimestamp;
                var2['dwellStartTimeMs'] = var15;
                var15 = var13.triggerType;
                var2['triggerType'] = var15;
                var17 = var10._dwelledItemIdMap;
                var16 = var17.get;
                var15 = var13.itemId;
                var16 = var16.bind(var17)(var15);
                var17 = var7 != var16;
                var15 = 0;
                if(!var17) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                var15 = var16;
case 59:
                var2['itemOccurenceCountInSession'] = var15;
                var15 = var13.itemFeedIndex;
                var2['itemFeedIndex'] = var15;
                var15 = var13.itemScore;
                var2['itemScore'] = var15;
                var15 = var13.isInitiallyVisible;
                var2['isInitiallyVisible'] = var15;
                var15 = var13.itemChannelType;
                var2['itemChannelType'] = var15;
                var17 = _closure1_slot10;
                var16 = var17.get;
                var15 = var13.itemId;
                var16 = var16.bind(var17)(var15);
                if(!(var7 == var16)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                var16 = var13.itemCardHeight;
case 61:
                var17 = var7 != var16;
                var15 = null;
                if(!var17) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                var15 = var16;
case 63:
                var2['itemCardHeight'] = var15;
                var14 = var7 != var14;
                var2['isDwelling'] = var14;
                var14 = var13.interactionActionTypes;
                var2['interactionActionTypes'] = var14;
                var14 = var13.interactionCount;
                var2['interactionCount'] = var14;
                var14 = var13.uxVariation;
                var2['uxVariation'] = var14;
                var13 = var13.sessionImpressionIndex;
                var2['sessionImpressionIndex'] = var13;
                var2 = var11.bind(var12)(var2);
                var11 = var8.bind(var1)();
                var2 = var11.done;
                var3 = var11;
                if(!var2) { _fun0010_ip = 55; continue _fun0010 }
case 54:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'trackItemInteraction';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = arg1;
                var5 = arg3;
                var9 = this;
                var1 = var9.getImpression;
                var3 = var1.bind(var9)(var2);
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 6;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var7 = var4.ICYMIAnalytics;
                var6 = var7.trackItemInteraction;
                var4 = {};
                var4['id'] = var2;
                var2 = arg2;
                var4['type'] = var2;
                var4['actionType'] = var5;
                var2 = null;
                var10 = var2 == var3;
                var8 = undefined;
                if(var10) { _fun0011_ip = 65; continue _fun0011 }
case 13:
                var8 = var3.impressionId;
case 65:
                var4['impressionId'] = var8;
                var10 = var2 == var3;
                var8 = undefined;
                if(var10) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                var8 = var3.uxVariation;
case 66:
                var4['uxVariation'] = var8;
                var8 = var9._interactionCount;
                var8 = var8 + 1;
                var9['_interactionCount'] = var8;
                var4['sessionInteractionIndex'] = var8;
                var4 = var6.bind(var7)(var4);
                if(!(var2 != var3)) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                var4 = var3.interactionActionTypes;
                var2 = var4.push;
                var2 = var2.bind(var4)(var5);
                var2 = var3.interactionCount;
                var2 = var2 + 1;
                var3['interactionCount'] = var2;
case 68:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'incrementReloadCount';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2._resetTimeout;
            var1 = var1.bind(var2)();
            var1 = var2._reloadCount;
            var1 = var1 + 1;
            var2['_reloadCount'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'incrementFeedFetchCount';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2._feedFetchCount;
            var1 = var1 + 1;
            var2['_feedFetchCount'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'endAllImpressions';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var _closure3_slot0 = var2;
            var6 = var2._activeItems;
            var3 = new Array(0);
            var5 = 0;
            var7 = var3;
            var2 = arraySpread(var7, var6, var5);
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3._endImpression;
                var1 = arg1;
                var1 = var1.itemId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'endSession';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.endAllImpressions;
            var2 = var2.bind(var1)();
            var3 = global;
            var4 = var3.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var1['_endTimestamp'] = var2;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 6;
            var4 = var10[var4];
            var5 = undefined;
            var4 = var9.bind(var5)(var4);
            var7 = var4.ICYMIAnalytics;
            var6 = var7.trackFeedSessionCompleted;
            var4 = {};
            var8 = var1._sessionId;
            var4['icymiSessionId'] = var8;
            var11 = var1._endTimestamp;
            var8 = var1._startTimestamp;
            var8 = var11 - var8;
            var4['sessionDurationMs'] = var8;
            var8 = var1._startTimestamp;
            var4['sessionStartTimeMs'] = var8;
            var8 = var1._endTimestamp;
            var4['sessionEndTimeMs'] = var8;
            var8 = var1._impressionCount;
            var4['impressionCount'] = var8;
            var8 = var1._impressionItemIdMap;
            var8 = var8.size;
            var4['uniqueImpressionCount'] = var8;
            var12 = var3.Array;
            var11 = var12.from;
            var8 = var1._impressionItemTypes;
            var8 = var11.bind(var12)(var8);
            var4['impressionItemTypes'] = var8;
            var8 = var1._reloadCount;
            var4['feedReloadCount'] = var8;
            var8 = var1._dwelledItemsChangedCount;
            var4['feedDwelledItemsChangedCount'] = var8;
            var8 = var1._feedFetchCount;
            var4['feedFetchCount'] = var8;
            var8 = var1._latestDwellStartTimeMs;
            var4['latestDwellStartTimeMs'] = var8;
            var8 = _closure1_slot9;
            var4['previousIcyMiSessionCount'] = var8;
            var8 = 7;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var10 = var8.DestinationICYMIExperiment;
            var9 = var10.getConfig;
            var8 = {};
            var11 = 'ICYMISessionStore.endSession';
            var8['location'] = var11;
            var8 = var9.bind(var10)(var8);
            var8 = var8.uxVariation;
            var4['uxVariation'] = var8;
            var8 = var1._interactionCount;
            var4['interactionCount'] = var8;
            var8 = var1._dwellCount;
            var4['dwelledCount'] = var8;
            var8 = var1._dwelledItemIdMap;
            var8 = var8.size;
            var4['uniqueDwelledCount'] = var8;
            var4 = var6.bind(var7)(var4);
            var4 = var3.clearTimeout;
            var3 = var1._timeout;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot9;
            var3 = var3 + 1;
            _closure1_slot9 = var3;
            var3 = null;
            _closure1_slot7 = var3;
            var3 = _closure1_slot10;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1['value'] = var6;
        var2[19] = var1;
        var1 = {};
        var6 = '_resetTimeout';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var4 = global;
            var6 = var4.clearTimeout;
            var5 = var3._timeout;
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var5 = var4.setTimeout;
            var4 = function() {
                var2 = _closure3_slot0;
                var1 = var2.endSession;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = 300000;
            var2 = var5.bind(var1)(var4, var2);
            var3['_timeout'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[20] = var1;
        var1 = {};
        var6 = '_createImpression';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arg1;
                var3 = this;
                var1 = var3._constructImpressionFromInput;
                var1 = var1.bind(var3)(var2);
                var4 = var3._dwellCount;
                var4 = var4 + 1;
                var3['_dwellCount'] = var4;
                var7 = var3._dwelledItemIdMap;
                var6 = var7.set;
                var5 = var2.itemId;
                var9 = var3._dwelledItemIdMap;
                var8 = var9.get;
                var4 = var2.itemId;
                var4 = var8.bind(var9)(var4);
                var8 = null;
                var9 = var8 != var4;
                var8 = 0;
                if(!var9) { _fun0012_ip = 70; continue _fun0012 }
case 71:
                var8 = var4;
case 70:
                var4 = 1;
                var4 = var8 + var4;
                var4 = var6.bind(var7)(var5, var4);
                var5 = var3._impressionItemTypes;
                var4 = var5.add;
                var2 = var2.itemType;
                var2 = var4.bind(var5)(var2);
                var2 = var1.impressionStartTimestamp;
                var3['_latestDwellStartTimeMs'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[21] = var1;
        var1 = {};
        var6 = '_constructImpressionFromInput';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 5;
                var1 = var5[var1];
                var5 = undefined;
                var4 = var4.bind(var5)(var1);
                var1 = var4.v4;
                var4 = var1.bind(var4)();
                var1 = {};
                var6 = var2.itemId;
                var1['itemId'] = var6;
                var6 = var2.itemType;
                var1['itemType'] = var6;
                var1['impressionId'] = var4;
                var4 = global;
                var6 = var4.Date;
                var4 = var6.now;
                var4 = var4.bind(var6)();
                var1['impressionStartTimestamp'] = var4;
                var4 = false;
                var1['impressionComplete'] = var4;
                var4 = var2.triggerType;
                var1['triggerType'] = var4;
                var4 = var2.itemFeedIndex;
                var1['itemFeedIndex'] = var4;
                var4 = var2.itemScore;
                var1['itemScore'] = var4;
                var4 = var2.isInitiallyVisible;
                var1['isInitiallyVisible'] = var4;
                var4 = var2.itemChannelType;
                var1['itemChannelType'] = var4;
                var6 = _closure1_slot10;
                var4 = var6.get;
                var2 = var2.itemId;
                var6 = var4.bind(var6)(var2);
                var2 = null;
                var7 = var2 != var6;
                var4 = null;
                if(!var7) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                var4 = var6;
case 72:
                var1['itemCardHeight'] = var4;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var5 = var3.DestinationICYMIExperiment;
                var4 = var5.getConfig;
                var3 = {};
                var6 = 'ICYMISessionStore._constructImpressionFromInput';
                var3['location'] = var6;
                var3 = var4.bind(var5)(var3);
                var3 = var3.uxVariation;
                var1['uxVariation'] = var3;
                var3 = new Array(0);
                var1['interactionActionTypes'] = var3;
                var3 = 0;
                var1['interactionCount'] = var3;
                var1['sessionImpressionIndex'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[22] = var1;
        var1 = {};
        var6 = '_endImpression';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = this;
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = var3._activeItems;
                var2 = var4.findIndex;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.itemId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var6 = var2.bind(var4)(var1);
                var1 = var3._activeItems;
                var2 = var1[var6];
                var8 = null;
                var4 = var8 != var2;
                var1 = null;
                if(!var4) { _fun0014_ip = 74; continue _fun0014 }
case 75:
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var2['impressionEndTimestamp'] = var4;
                var4 = true;
                var2['impressionComplete'] = var4;
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 6;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var7.bind(var4)(var5);
                var7 = var4.ICYMIAnalytics;
                var5 = var7.trackFeedItemDwelled;
                var4 = {};
                var10 = var3._sessionId;
                var4['icymiSessionId'] = var10;
                var10 = var2.impressionId;
                var4['impressionId'] = var10;
                var11 = var2.impressionEndTimestamp;
                var10 = var2.impressionStartTimestamp;
                var10 = var11 - var10;
                var4['dwellTimeMs'] = var10;
                var10 = var2.itemId;
                var4['itemId'] = var10;
                var10 = var2.itemType;
                var4['itemType'] = var10;
                var10 = var2.impressionStartTimestamp;
                var4['dwellStartTimeMs'] = var10;
                var10 = var2.impressionEndTimestamp;
                var4['dwellEndTimeMs'] = var10;
                var10 = var2.triggerType;
                var4['triggerType'] = var10;
                var12 = var3._dwelledItemIdMap;
                var11 = var12.get;
                var10 = var2.itemId;
                var11 = var11.bind(var12)(var10);
                var12 = var8 != var11;
                var10 = 0;
                if(!var12) { _fun0014_ip = 76; continue _fun0014 }
case 77:
                var10 = var11;
case 76:
                var4['itemOccurenceCountInSession'] = var10;
                var10 = var2.itemFeedIndex;
                var4['itemFeedIndex'] = var10;
                var10 = var2.itemScore;
                var4['itemScore'] = var10;
                var10 = var2.isInitiallyVisible;
                var4['isInitiallyVisible'] = var10;
                var10 = var2.itemChannelType;
                var4['itemChannelType'] = var10;
                var11 = _closure1_slot10;
                var10 = var11.get;
                var9 = var2.itemId;
                var9 = var10.bind(var11)(var9);
                if(!(var8 == var9)) { _fun0014_ip = 78; continue _fun0014 }
case 79:
                var9 = var2.itemCardHeight;
case 78:
                var10 = var8 != var9;
                var8 = null;
                if(!var10) { _fun0014_ip = 80; continue _fun0014 }
case 81:
                var8 = var9;
case 80:
                var4['itemCardHeight'] = var8;
                var8 = var2.uxVariation;
                var4['uxVariation'] = var8;
                var8 = var2.interactionActionTypes;
                var4['interactionActionTypes'] = var8;
                var8 = var2.interactionCount;
                var4['interactionCount'] = var8;
                var8 = var2.sessionImpressionIndex;
                var4['sessionImpressionIndex'] = var8;
                var4 = var5.bind(var7)(var4);
                var5 = var3._activeItems;
                var4 = var5.splice;
                var3 = 1;
                var3 = var4.bind(var5)(var6, var3);
                var1 = var2;
case 74:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[23] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot11 = var2;
    var5 = 8;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var10 = var5.Store;
    var5 = function(arg1) {
        var4 = function ICYMISessionStore() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0015_ip = 82; continue _fun0015 }
case 83:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0015_ip = 84; continue _fun0015;
case 82:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 84:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'currentSession';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'endedSessionCount';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var5.bind(var1)(var10);
    var5 = 9;
    var5 = var8[var5];
    var14 = var9.bind(var1)(var5);
    var5 = {};
    var5['ICYMI_TAB_OPENED'] = var6;
    var6 = function handleTabClosed() {
        var2 = _closure1_slot15;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var5['ICYMI_TAB_CLOSED'] = var6;
    var6 = function handleIcymiTabFocussed(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var2 = var1.focused;
            if(var2) { _fun0016_ip = 85; continue _fun0016 }
case 86:
            var3 = _closure1_slot16;
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var2;
case 85:
            var3 = _closure1_slot7;
            var2 = null;
            if(!(var2 == var3)) { _fun0016_ip = 9; continue _fun0016 }
case 87:
            var3 = _closure1_slot17;
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var2;
case 9:
            var2 = _closure1_slot8;
            var3 = var2.length;
            var2 = 0;
            if(!(!(var3 > var2))) { _fun0016_ip = 88; continue _fun0016 }
case 89:
            var2 = false;
            return var2;
case 88:
            var4 = _closure1_slot8;
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = 'focus';
                var2 = 'triggerType';
                var1[var2] = var3;
                var3 = true;
                var2 = 'isInitiallyVisible';
                var1[var2] = var3;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot7;
            var1 = var2.startItemsDwell;
            var1 = var1.bind(var2)(var3);
            var1 = true;
            return var1;
        }
    };
    var5['ICYMI_SET_FOCUSED_TAB'] = var6;
    var6 = function handleItemsDwellStart(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot7;
            var3 = null;
            if(!(var3 != var4)) { _fun0017_ip = 90; continue _fun0017 }
case 40:
            var5 = _closure1_slot7;
            var4 = var5.startItemsDwell;
            var3 = var1.items;
            var3 = var4.bind(var5)(var3);
            _fun0017_ip = 91; continue _fun0017;
case 90:
            var5 = _closure1_slot11;
            var7 = var1.items;
            var1 = var5.prototype;
            var3 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'list';
            var8 = var3;
            var1 = new var8[var5](var7, var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot7 = var1;
case 91:
            var1 = true;
            return var1;
        }
    };
    var5['ICYMI_ITEMS_DWELL_START'] = var6;
    var6 = function handleItemsLongImpression(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot7;
            var3 = null;
            if(!(var3 == var4)) { _fun0018_ip = 92; continue _fun0018 }
case 40:
            var6 = _closure1_slot11;
            var8 = var1.items;
            var3 = var6.prototype;
            var4 = Object.create(var3, {constructor: {value: var6}});
            var7 = 'list';
            var9 = var4;
            var3 = new var9[var6](var8, var7, var6);
            var3 = var3 instanceof Object ? var3 : var4;
            _closure1_slot7 = var3;
case 92:
            var3 = _closure1_slot7;
            var2 = var3.trackItemsLongImpression;
            var1 = var1.items;
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
        }
    };
    var5['ICYMI_ITEMS_LONG_IMPRESSION'] = var6;
    var6 = function handleReloadICYMI() {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0019_ip = 93; continue _fun0019 }
case 40:
            var3 = _closure1_slot7;
            var2 = var3.incrementReloadCount;
            var2 = var2.bind(var3)();
            var1 = true;
case 93:
            return var1;
        }
    };
    var5['RELOAD_ICYMI'] = var6;
    var6 = function handleLoadICYMIDehydrated() {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0020_ip = 94; continue _fun0020 }
case 40:
            var4 = _closure1_slot7;
            var3 = var4.incrementFeedFetchCount;
            var3 = var3.bind(var4)();
            var3 = _closure1_slot16;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var1 = true;
case 94:
            return var1;
        }
    };
    var5['LOAD_ICYMI_DEHYDRATED'] = var6;
    var6 = function handleAppStateUpdate(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var2 = var1.state;
            var1 = 'active';
            var1 = var1 !== var2;
            if(!var1) { _fun0021_ip = 39; continue _fun0021 }
case 95:
            var3 = _closure1_slot7;
            var2 = null;
            var1 = var2 != var3;
case 39:
            if(!var1) { _fun0021_ip = 96; continue _fun0021 }
case 97:
            var3 = _closure1_slot15;
            var2 = undefined;
            var1 = var3.bind(var2)();
case 96:
            return var1;
        }
    };
    var5['APP_STATE_UPDATE'] = var6;
    var6 = function handleChannelSelected(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot7;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0022_ip = 38; continue _fun0022 }
case 95:
            var4 = var3.isInitialSetup;
            var1 = !var4;
case 38:
            if(!var1) { _fun0022_ip = 98; continue _fun0022 }
case 99:
            var3 = var3.preserveDrawerState;
            var1 = !var3;
case 98:
            if(!var1) { _fun0022_ip = 100; continue _fun0022 }
case 55:
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = var3.bind(var2)();
case 100:
            return var1;
        }
    };
    var5['CHANNEL_SELECT'] = var6;
    var6 = function handleSetCardHeight(arg1) {
        var1 = arg1;
        var4 = _closure1_slot10;
        var3 = var4.set;
        var2 = var1.itemId;
        var1 = var1.height;
        var1 = var3.bind(var4)(var2, var1);
        var1 = true;
        return var1;
    };
    var5['ICYMI_SET_CARD_HEIGHT'] = var6;
    var6 = function handleItemInteracted(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot7;
            var3 = null;
            if(!(var3 == var4)) { _fun0023_ip = 101; continue _fun0023 }
case 40:
            var6 = _closure1_slot11;
            var9 = _closure1_slot8;
            var3 = var6.prototype;
            var4 = Object.create(var3, {constructor: {value: var6}});
            var8 = 'focus';
            var10 = var4;
            var3 = new var10[var6](var9, var8, var7);
            var3 = var3 instanceof Object ? var3 : var4;
            _closure1_slot7 = var3;
case 101:
            var5 = _closure1_slot7;
            var4 = var5.trackItemInteraction;
            var3 = var1.itemId;
            var2 = var1.itemType;
            var1 = var1.actionType;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = true;
            return var1;
        }
    };
    var5['ICYMI_ITEM_INTERACTED'] = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var15 = var6;
    var13 = var5;
    var5 = new var15[var10](var14, var13, var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/icymi/ICYMISessionStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var4 = function resetGlobalState() {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var3 = _closure1_slot7;
            var2 = null;
            if(!(var2 != var3)) { _fun0024_ip = 102; continue _fun0024 }
case 103:
            var3 = global;
            var5 = var3.clearTimeout;
            var3 = _closure1_slot7;
            var4 = var3._timeout;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
case 102:
            _closure1_slot7 = var2;
            var2 = new Array(0);
            _closure1_slot8 = var2;
            var2 = 0;
            _closure1_slot9 = var2;
            var2 = _closure1_slot10;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        }
    };
    var3['resetGlobalState'] = var4;
    var3['ICYMISession'] = var2;
    return var1;
})();