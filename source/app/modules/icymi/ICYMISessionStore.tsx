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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 345; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function endCurrentSession() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = _closure1_slot7;
            var2 = null;
            var1 = var2 != var1;
            if(!var1) { _fun0005_ip = 36; continue _fun0005 }
 16:
            var5 = _closure1_slot7;
            var4 = var5.endSession;
            var4 = var4.bind(var5)();
            _closure1_slot7 = var2;
            var1 = true;
 36:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function endCurrentSessionImpressions() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = _closure1_slot7;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0006_ip = 32; continue _fun0006 }
 16:
            var3 = _closure1_slot7;
            var2 = var3.endAllImpressions;
            var2 = var2.bind(var3)();
            var1 = true;
 32:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var6 = function handleTabOpened(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = _closure1_slot7;
            var4 = null;
            var1 = var4 == var1;
            if(!var1) { _fun0007_ip = 68; continue _fun0007 }
 16:
            var2 = _closure1_slot7;
            if(!(var4 == var2)) { _fun0007_ip = 58; continue _fun0007 }
 24:
            var6 = _closure1_slot11;
            var8 = _closure1_slot8;
            var2 = var6.prototype;
            var4 = Object.create(var2, {constructor: {value: var6}});
            var7 = 'focus';
            var9 = var4;
            var2 = new var9[var6](var8, var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            _fun0007_ip = 62; continue _fun0007;
 58:
            var2 = _closure1_slot7;
 62:
            _closure1_slot7 = var2;
            var1 = true;
 68:
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
 0:
                var6 = arguments[0];
                var3 = arguments[1];
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0008_ip = 25; continue _fun0008 }
 21:
                var6 = new Array(0);
 25:
                if(!(var3 === var1)) { _fun0008_ip = 33; continue _fun0008 }
 29:
                var3 = 'list';
 33:
                var _closure3_slot1 = var3;
                var7 = _closure1_slot5;
                var5 = _closure2_slot0;
                var5 = var7.bind(var1)(var4, var5);
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 5;
                var3 = var7[var3];
                var5 = var5.bind(var1)(var3);
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
                var4['_impressionCount'] = var5;
                var7 = var3.Map;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var11 = var8;
                var7 = new var11[var7](var10);
                var7 = var7 instanceof Object ? var7 : var8;
                var4['_viewedItemIdMap'] = var7;
                var7 = var3.Set;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var11 = var8;
                var7 = new var11[var7](var10);
                var7 = var7 instanceof Object ? var7 : var8;
                var4['_impressionItemTypes'] = var7;
                var4['_reloadCount'] = var5;
                var4['_feedFetchCount'] = var5;
                var4['_visibleItemsChangedCount'] = var5;
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
                var3 = var6.length;
                if(!(var3 > var5)) { _fun0008_ip = 298; continue _fun0008 }
 270:
                var3 = var4.setVisibleItems;
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
 298:
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
        var2 = new Array(17);
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
        var6 = 'impressionCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._impressionCount;
            return var1;
        };
        var1['get'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'uniqueImpressionCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._viewedItemIdMap;
            var1 = var1.size;
            return var1;
        };
        var1['get'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'reloadCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._reloadCount;
            return var1;
        };
        var1['get'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'feedFetchCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._feedFetchCount;
            return var1;
        };
        var1['get'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'visibleItemsChangedCount';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._visibleItemsChangedCount;
            return var1;
        };
        var1['get'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'impressionItemTypes';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._impressionItemTypes;
            return var1;
        };
        var1['get'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'setVisibleItems';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var6 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var1;
                var2 = var1._resetTimeout;
                var2 = var2.bind(var1)();
                _closure1_slot8 = var6;
                var5 = var6.length;
                var2 = var1._activeItems;
                var2 = var2.length;
                if(!(var5 === var2)) { _fun0009_ip = 77; continue _fun0009 }
 53:
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
                if(var2) { _fun0009_ip = 241; continue _fun0009 }
 77:
                var2 = var1._visibleItemsChangedCount;
                var2 = var2 + 1;
                var1['_visibleItemsChangedCount'] = var2;
                var2 = new Array(0);
                var _closure3_slot2 = var2;
                var5 = global;
                var8 = var5.Set;
                var9 = var1._activeItems;
                var7 = var9.map;
                var5 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.itemId;
                    return var1;
                };
                var11 = var7.bind(var9)(var5);
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var12 = var7;
                var5 = new var12[var8](var11, var10);
                var5 = var5 instanceof Object ? var5 : var7;
                var _closure3_slot3 = var5;
                var9 = function _loop(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var4 = _closure3_slot1;
                        var5 = var4._activeItems;
                        var4 = var5.find;
                        var3 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.itemId;
                            var1 = _closure4_slot0;
                            var1 = var1.itemId;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var5 = var4.bind(var5)(var3);
                        var3 = null;
                        if(!(var3 == var5)) { _fun0010_ip = 79; continue _fun0010 }
 46:
                        var6 = _closure3_slot2;
                        var4 = var6.push;
                        var7 = _closure3_slot1;
                        var3 = var7._createImpression;
                        var3 = var3.bind(var7)(var1);
                        var3 = var4.bind(var6)(var3);
                        _fun0010_ip = 113; continue _fun0010;
 79:
                        var4 = _closure3_slot2;
                        var3 = var4.push;
                        var3 = var3.bind(var4)(var5);
                        var3 = _closure3_slot3;
                        var2 = var3.delete;
                        var1 = var1.itemId;
                        var1 = var2.bind(var3)(var1);
 113:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = _closure1_slot13;
                var8 = undefined;
                var7 = var4.bind(var8)(var6);
                var6 = var7.bind(var8)();
                var4 = var6.done;
                if(var4) { _fun0009_ip = 210; continue _fun0009 }
 185:
                var4 = var6.value;
                var4 = var9.bind(var8)(var4);
                var10 = var7.bind(var8)();
                var4 = var10.done;
                var6 = var10;
                if(!var4) { _fun0009_ip = 185; continue _fun0009 }
 210:
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
 241:
                var1 = var1._activeItems;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'incrementReloadCount';
        var1['key'] = var6;
        var6 = function incrementReloadCount() {
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
        var2[10] = var1;
        var1 = {};
        var6 = 'incrementFeedFetchCount';
        var1['key'] = var6;
        var6 = function incrementFeedFetchCount() {
            var2 = this;
            var1 = var2._feedFetchCount;
            var1 = var1 + 1;
            var2['_feedFetchCount'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'endAllImpressions';
        var1['key'] = var6;
        var6 = function endAllImpressions() {
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
        var2[12] = var1;
        var1 = {};
        var6 = 'endSession';
        var1['key'] = var6;
        var6 = function endSession() {
            var1 = this;
            var2 = var1.endAllImpressions;
            var2 = var2.bind(var1)();
            var3 = global;
            var4 = var3.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var1['_endTimestamp'] = var2;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 6;
            var4 = var5[var4];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var7 = var4.ICYMIAnalytics;
            var6 = var7.trackFeedSessionCompleted;
            var4 = {};
            var8 = var1._sessionId;
            var4['icymiSessionId'] = var8;
            var9 = var1._endTimestamp;
            var8 = var1._startTimestamp;
            var8 = var9 - var8;
            var4['sessionDurationMs'] = var8;
            var8 = var1._startTimestamp;
            var4['sessionStartTimeMs'] = var8;
            var8 = var1._endTimestamp;
            var4['sessionEndTimeMs'] = var8;
            var8 = var1._impressionCount;
            var4['impressionCount'] = var8;
            var8 = var1._viewedItemIdMap;
            var8 = var8.size;
            var4['uniqueImpressionCount'] = var8;
            var10 = var3.Array;
            var9 = var10.from;
            var8 = var1._impressionItemTypes;
            var8 = var9.bind(var10)(var8);
            var4['impressionItemTypes'] = var8;
            var8 = var1._reloadCount;
            var4['feedReloadCount'] = var8;
            var8 = var1._visibleItemsChangedCount;
            var4['feedVisibleItemsChangedCount'] = var8;
            var8 = var1._feedFetchCount;
            var4['feedFetchCount'] = var8;
            var8 = var1._latestDwellStartTimeMs;
            var4['latestDwellStartTimeMs'] = var8;
            var8 = _closure1_slot9;
            var4['previousIcyMiSessionCount'] = var8;
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
        var2[13] = var1;
        var1 = {};
        var6 = '_resetTimeout';
        var1['key'] = var6;
        var6 = function _resetTimeout() {
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
        var2[14] = var1;
        var1 = {};
        var6 = '_createImpression';
        var1['key'] = var6;
        var6 = function _createImpression(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = arg1;
                var3 = this;
                var1 = {};
                var4 = var2.itemId;
                var1['itemId'] = var4;
                var4 = var2.itemType;
                var1['itemType'] = var4;
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
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
                var5 = var6.get;
                var4 = var2.itemId;
                var5 = var5.bind(var6)(var4);
                var8 = null;
                var6 = var8 != var5;
                var4 = null;
                if(!var6) { _fun0011_ip = 151; continue _fun0011 }
 148:
                var4 = var5;
 151:
                var1['itemCardHeight'] = var4;
                var4 = var3._impressionCount;
                var4 = var4 + 1;
                var3['_impressionCount'] = var4;
                var7 = var3._viewedItemIdMap;
                var6 = var7.set;
                var5 = var2.itemId;
                var10 = var3._viewedItemIdMap;
                var9 = var10.get;
                var4 = var2.itemId;
                var4 = var9.bind(var10)(var4);
                var9 = var8 != var4;
                var8 = 0;
                if(!var9) { _fun0011_ip = 222; continue _fun0011 }
 219:
                var8 = var4;
 222:
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
        var2[15] = var1;
        var1 = {};
        var6 = '_endImpression';
        var1['key'] = var6;
        var5 = function _endImpression(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
                if(!var4) { _fun0012_ip = 376; continue _fun0012 }
 60:
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
                var12 = var3._viewedItemIdMap;
                var11 = var12.get;
                var10 = var2.itemId;
                var11 = var11.bind(var12)(var10);
                var12 = var8 != var11;
                var10 = 0;
                if(!var12) { _fun0012_ip = 251; continue _fun0012 }
 248:
                var10 = var11;
 251:
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
                if(!(var8 == var9)) { _fun0012_ip = 330; continue _fun0012 }
 324:
                var9 = var2.itemCardHeight;
 330:
                var10 = var8 != var9;
                var8 = null;
                if(!var10) { _fun0012_ip = 342; continue _fun0012 }
 339:
                var8 = var9;
 342:
                var4['itemCardHeight'] = var8;
                var4 = var5.bind(var7)(var4);
                var5 = var3._activeItems;
                var4 = var5.splice;
                var3 = 1;
                var3 = var4.bind(var5)(var6, var3);
                var1 = var2;
 376:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[16] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot11 = var2;
    var5 = 7;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var10 = var5.Store;
    var5 = function(arg1) {
        var4 = function ICYMISessionStore() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
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
                if(var1) { _fun0013_ip = 69; continue _fun0013 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0013_ip = 105; continue _fun0013;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
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
    var5 = 8;
    var5 = var8[var5];
    var14 = var9.bind(var1)(var5);
    var5 = {};
    var5['ICYMI_TAB_OPENED'] = var6;
    var6 = function handleTabClosed(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var3 = _closure1_slot7;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0014_ip = 26; continue _fun0014 }
 16:
            var3 = _closure1_slot15;
            var2 = undefined;
            var1 = var3.bind(var2)();
 26:
            return var1;
        }
    };
    var5['ICYMI_TAB_CLOSED'] = var6;
    var6 = function handleIcymiTabFocussed(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var2 = var1.focused;
            if(var2) { _fun0015_ip = 27; continue _fun0015 }
 15:
            var3 = _closure1_slot16;
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var2;
 27:
            var3 = _closure1_slot7;
            var2 = null;
            if(!(var2 == var3)) { _fun0015_ip = 49; continue _fun0015 }
 37:
            var3 = _closure1_slot17;
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var2;
 49:
            var2 = _closure1_slot8;
            var3 = var2.length;
            var2 = 0;
            if(!(!(var3 > var2))) { _fun0015_ip = 68; continue _fun0015 }
 64:
            var2 = false;
            return var2;
 68:
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
            var1 = var2.setVisibleItems;
            var1 = var1.bind(var2)(var3);
            var1 = true;
            return var1;
        }
    };
    var5['ICYMI_SET_FOCUSED_TAB'] = var6;
    var6 = function handleSetVisibleItems(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot7;
            var3 = null;
            if(!(var3 != var4)) { _fun0016_ip = 39; continue _fun0016 }
 16:
            var5 = _closure1_slot7;
            var4 = var5.setVisibleItems;
            var3 = var1.items;
            var3 = var4.bind(var5)(var3);
            _fun0016_ip = 77; continue _fun0016;
 39:
            var5 = _closure1_slot11;
            var7 = var1.items;
            var1 = var5.prototype;
            var3 = Object.create(var1, {constructor: {value: var5}});
            var6 = 'list';
            var8 = var3;
            var1 = new var8[var5](var7, var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot7 = var1;
 77:
            var1 = true;
            return var1;
        }
    };
    var5['ICYMI_SET_VISIBLE_ITEMS'] = var6;
    var6 = function handleReloadICYMI(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var3 = _closure1_slot7;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0017_ip = 34; continue _fun0017 }
 16:
            var3 = _closure1_slot7;
            var2 = var3.incrementReloadCount;
            var2 = var2.bind(var3)();
            var1 = true;
 34:
            return var1;
        }
    };
    var5['RELOAD_ICYMI'] = var6;
    var6 = function handleLoadICYMIDehydrated(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var3 = _closure1_slot7;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0018_ip = 44; continue _fun0018 }
 16:
            var4 = _closure1_slot7;
            var3 = var4.incrementFeedFetchCount;
            var3 = var3.bind(var4)();
            var3 = _closure1_slot16;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var1 = true;
 44:
            return var1;
        }
    };
    var5['LOAD_ICYMI_DEHYDRATED'] = var6;
    var6 = function handleAppStateUpdate(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var2 = var1.state;
            var1 = 'active';
            var1 = var1 !== var2;
            if(!var1) { _fun0019_ip = 32; continue _fun0019 }
 19:
            var3 = _closure1_slot7;
            var2 = null;
            var1 = var2 != var3;
 32:
            if(!var1) { _fun0019_ip = 48; continue _fun0019 }
 35:
            var3 = _closure1_slot15;
            var2 = undefined;
            var1 = var3.bind(var2)();
 48:
            return var1;
        }
    };
    var5['APP_STATE_UPDATE'] = var6;
    var6 = function handleChannelSelected(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot7;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0020_ip = 28; continue _fun0020 }
 19:
            var4 = var3.isInitialSetup;
            var1 = !var4;
 28:
            if(!var1) { _fun0020_ip = 40; continue _fun0020 }
 31:
            var3 = var3.preserveDrawerState;
            var1 = !var3;
 40:
            if(!var1) { _fun0020_ip = 53; continue _fun0020 }
 43:
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = var3.bind(var2)();
 53:
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
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var15 = var6;
    var13 = var5;
    var5 = new var15[var10](var14, var13, var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/icymi/ICYMISessionStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var4 = function resetGlobalState() {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var3 = _closure1_slot7;
            var2 = null;
            if(!(var2 != var3)) { _fun0021_ip = 38; continue _fun0021 }
 13:
            var3 = global;
            var5 = var3.clearTimeout;
            var3 = _closure1_slot7;
            var4 = var3._timeout;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
 38:
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