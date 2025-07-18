// app/modules/search_v2/SearchHistoryStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function getOrCreateSearchHistory(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot9;
            var1 = var1[var3];
            var4 = null;
            if(!(var4 == var1)) { _fun0002_ip = 44; continue _fun0002 }
 20:
            var4 = _closure1_slot8;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var6 = var5;
            var4 = new var6[var4](var5);
            var1 = var4 instanceof Object ? var4 : var5;
 44:
            var2 = _closure1_slot9;
            var2[var3] = var1;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
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
    var2 = var5.bind(var1)(var2);
    var2 = var2.SearchHistoryItemTypes;
    var _closure1_slot7 = var2;
    var2 = function() {
        var4 = _closure1_slot6;
        var3 = function SearchHistory() {
            var3 = this;
            var4 = _closure1_slot5;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = new Array(0);
            var3['items'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'deserialize';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var5 = arg1;
            var2 = this;
            var4 = var5.slice;
            var3 = 0;
            var1 = 3;
            var1 = var4.bind(var5)(var3, var1);
            var2['items'] = var1;
            var4 = var2.items;
            var3 = var4.filter;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot7;
                    var1 = var1.TEXT;
                    var1 = var3 !== var1;
                    if(var1) { _fun0003_ip = 40; continue _fun0003 }
 28:
                    var4 = var2.tags;
                    var3 = null;
                    var1 = var3 == var4;
 40:
                    if(var1) { _fun0003_ip = 69; continue _fun0003 }
 43:
                    var4 = var2.tags;
                    var3 = var4.every;
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.hasOwnProperty;
                        var2 = arg1;
                        var1 = 'type';
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
 69:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var2['items'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'serialize';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.items;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'add';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var3 = var4.type;
                var1 = _closure1_slot7;
                var1 = var1.TEXT;
                var1 = var3 === var1;
                if(!var1) { _fun0004_ip = 54; continue _fun0004 }
 31:
                var5 = var4.text;
                var3 = var5.trim;
                var5 = var3.bind(var5)();
                var3 = '';
                var1 = var3 === var5;
 54:
                if(!var1) { _fun0004_ip = 92; continue _fun0004 }
 57:
                var5 = var4.tags;
                var3 = null;
                var3 = var3 == var5;
                if(var3) { _fun0004_ip = 89; continue _fun0004 }
 72:
                var5 = var4.tags;
                var6 = var5.length;
                var5 = 0;
                var3 = var5 === var6;
 89:
                var1 = var3;
 92:
                if(var1) { _fun0004_ip = 151; continue _fun0004 }
 95:
                var1 = var2.remove;
                var1 = var1.bind(var2)(var4);
                var3 = var2.items;
                var1 = var3.unshift;
                var1 = var1.bind(var3)(var4);
                var5 = var2.items;
                var4 = var5.slice;
                var3 = 0;
                var1 = 3;
                var1 = var4.bind(var5)(var3, var1);
                var2['items'] = var1;
 151:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'remove';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var2 = this;
            var3 = arg1;
            var _closure3_slot0 = var3;
            var4 = var2.items;
            var3 = var4.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.isEqual;
                var2 = _closure3_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                var1 = !var1;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var2['items'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function SearchHistoryStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 105; continue _fun0005;
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
        var1 = 'getState';
        var5['key'] = var1;
        var1 = function value() {
            var2 = {};
            var _closure3_slot0 = var2;
            var3 = global;
            var5 = var3.Object;
            var4 = var5.entries;
            var3 = _closure1_slot9;
            var4 = var4.bind(var5)(var3);
            var3 = var4.forEach;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var5 = var6().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    var4 = undefined;
                    if(var3) { _fun0006_ip = 27; continue _fun0006 }
 24:
                    var4 = var5;
 27:
                    var5 = undefined;
                    if(var3) { _fun0006_ip = 57; continue _fun0006 }
 32:
                    var7 = var6().value;
                    var6 = var2;
                    var6 = var6 === var1;
                    var5 = undefined;
                    var3 = var6;
                    if(var6) { _fun0006_ip = 57; continue _fun0006 }
 51:
                    var5 = var7;
                    var3 = var6;
 57:
                    if(var3) { _fun0006_ip = 63; continue _fun0006 }
 60:
                    var2.return();
 63:
                    var2 = null;
                    if(!(var2 != var5)) { _fun0006_ip = 90; continue _fun0006 }
 69:
                    var3 = _closure3_slot0;
                    var2 = var5.serialize;
                    var2 = var2.bind(var5)();
                    var3[var4] = var2;
 90:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var1 = {};
            var1['searchHistories'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'initialize';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                var6 = undefined;
                if(var4) { _fun0007_ip = 22; continue _fun0007 }
 16:
                var6 = var3.searchHistories;
 22:
                if(!(var2 != var6)) { _fun0007_ip = 74; continue _fun0007 }
 26:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 7;
                var2 = var5[var2];
                var5 = var4.bind(var1)(var2);
                var4 = var5.mapValues;
                var2 = function(arg1) {
                    var1 = _closure1_slot8;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var5 = var2;
                    var1 = new var5[var1](var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var3 = var1.deserialize;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var6, var2);
                _closure1_slot9 = var2;
 74:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSearchHistory';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot11;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.serialize;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SearchHistoryStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleSearchHistoryClearItems(arg1) {
        var1 = arg1;
        var2 = var1.id;
        var1 = _closure1_slot9;
        var1 = delete var1[var2];
        var1 = undefined;
        return var1;
    };
    var2['SEARCH_HISTORY_CLEAR_ITEMS'] = var9;
    var9 = function handleSearchHistoryRemoveItem(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var4 = var1.item;
        var2 = _closure1_slot11;
        var1 = undefined;
        var3 = var2.bind(var1)(var3);
        var2 = var3.remove;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['SEARCH_HISTORY_REMOVE_ITEM'] = var9;
    var4 = function handleSearchHistoryAddItem(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var4 = var1.item;
        var2 = _closure1_slot11;
        var1 = undefined;
        var3 = var2.bind(var1)(var3);
        var2 = var3.add;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['SEARCH_HISTORY_ADD_ITEM'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/SearchHistoryStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();