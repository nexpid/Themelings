// app/modules/search/SearchAutocompleteStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot24 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
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
            var9 = _closure1_slot26;
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
            var7 = _closure1_slot26;
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot25 = var1;
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
    var _closure1_slot26 = var1;
    var1 = function getOrCreateUserSearchContext(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var10 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 12;
            var1 = var4[var1];
            var7 = undefined;
            var3 = var3.bind(var7)(var1);
            var1 = var3.getSearchContextId;
            var4 = var1.bind(var3)(var10);
            var3 = _closure1_slot21;
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var9 = null;
            if(!(var9 == var1)) { _fun0005_ip = 123; continue _fun0005 }
 59:
            var3 = {};
            var5 = new Array(0);
            var3['results'] = var5;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 14;
            var5 = var8[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.getUserSearchContext;
            var8 = _closure1_slot31;
            var5 = var8.bind;
            var5 = var5.bind(var8)(var9, var10);
            var5 = var6.bind(var7)(var5);
            var3['context'] = var5;
            var1 = var3;
 123:
            var3 = _closure1_slot21;
            var2 = var3.set;
            var2 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function stateFactory(arg1) {
        var1 = arg1;
        var7 = var1.searchContext;
        var6 = var1.query;
        var5 = var1.mode;
        var4 = var1.tokens;
        var3 = var1.cursorScope;
        var2 = var1.autocompletes;
        var8 = _closure1_slot27;
        var1 = undefined;
        var1 = var8.bind(var1)(var7);
        var1 = {};
        var1['searchContext'] = var7;
        var1['query'] = var6;
        var1['mode'] = var5;
        var1['tokens'] = var4;
        var1['cursorScope'] = var3;
        var1['autocompletes'] = var2;
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function isUserAutocompleteFilter(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0006_ip = 49; continue _fun0006 }
 12:
            var2 = _closure1_slot16;
            var2 = var2.FILTER_FROM;
            var2 = var4 === var2;
            if(var2) { _fun0006_ip = 46; continue _fun0006 }
 32:
            var3 = _closure1_slot16;
            var3 = var3.FILTER_MENTIONS;
            var2 = var4 === var3;
 46:
            var1 = var2;
 49:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function isUserAutocompleteMode(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot29;
            var3 = var4.filter;
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var5 = var4.type;
            var1 = _closure1_slot14;
            var1 = var1.FILTER_ALL;
            var1 = var5 === var1;
            if(var1) { _fun0007_ip = 72; continue _fun0007 }
 44:
            var4 = var4.type;
            var2 = _closure1_slot14;
            var2 = var2.FILTER;
            var2 = var4 === var2;
            if(!var2) { _fun0007_ip = 69; continue _fun0007 }
 66:
            var2 = var3;
 69:
            var1 = var2;
 72:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function handleUserSearchResults(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var9 = arg1;
            var1 = arg2;
            var8 = var1.results;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getSearchContextId;
            var6 = var3.bind(var4)(var9);
            var4 = _closure1_slot21;
            var3 = var4.get;
            var4 = var3.bind(var4)(var6);
            var5 = _closure1_slot20;
            var3 = var5.get;
            var5 = var3.bind(var5)(var6);
            var14 = null;
            if(!(var14 != var4)) { _fun0008_ip = 401; continue _fun0008 }
 85:
            if(!(var14 != var5)) { _fun0008_ip = 401; continue _fun0008 }
 92:
            var7 = _closure1_slot30;
            var3 = var5.mode;
            var3 = var7.bind(var1)(var3);
            if(!var3) { _fun0008_ip = 401; continue _fun0008 }
 112:
            var3 = var5.mode;
            var7 = var3.type;
            var3 = _closure1_slot14;
            var3 = var3.FILTER;
            var13 = 3;
            if(!(var7 === var3)) { _fun0008_ip = 143; continue _fun0008 }
 139:
            var13 = _closure1_slot22;
 143:
            if(!(var13 === var1)) { _fun0008_ip = 150; continue _fun0008 }
 147:
            var13 = 10;
 150:
            var3 = new Array(0);
            var7 = _closure1_slot25;
            var12 = var7.bind(var1)(var8);
            var8 = var12.bind(var1)();
            var7 = var8.done;
            var11 = 15;
            var10 = var8;
            var8 = undefined;
            if(var7) { _fun0008_ip = 294; continue _fun0008 }
 183:
            var7 = var10.value;
            var15 = var3.length;
            if(!(!(var15 >= var13))) { _fun0008_ip = 294; continue _fun0008 }
 197:
            var16 = _closure1_slot13;
            var15 = var16.getUser;
            var7 = var7.id;
            var17 = var15.bind(var16)(var7);
            if(!(var14 != var17)) { _fun0008_ip = 279; continue _fun0008 }
 221:
            var15 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var15 = var15.bind(var1)(var7);
            var7 = var15.getUserTag;
            var7 = var7.bind(var15)(var17);
            var8 = var7;
            if(!(var14 != var7)) { _fun0008_ip = 279; continue _fun0008 }
 256:
            var16 = var3.push;
            var15 = {};
            var15['text'] = var7;
            var15['user'] = var17;
            var15 = var16.bind(var3)(var15);
            var8 = var7;
 279:
            var15 = var12.bind(var1)();
            var7 = var15.done;
            var10 = var15;
            if(!var7) { _fun0008_ip = 183; continue _fun0008 }
 294:
            var4['results'] = var3;
            var10 = var5.query;
            var8 = var5.mode;
            var7 = var5.tokens;
            var4 = _closure1_slot28;
            var3 = {};
            var3['searchContext'] = var9;
            var3['query'] = var10;
            var3['mode'] = var8;
            var3['tokens'] = var7;
            var5 = var5.cursorScope;
            var3['cursorScope'] = var5;
            var5 = _closure1_slot35;
            var5 = var5.bind(var1)(var9, var8, var7);
            var3['autocompletes'] = var5;
            var5 = var4.bind(var1)(var3);
            var4 = _closure1_slot20;
            var3 = var4.set;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot23;
            var2 = var3.emitChange;
            var2 = var2.bind(var3)();
 401:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function generateFilterResults(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var5 = var1.filter;
            var7 = var1.currentToken;
            var4 = var1.searchContext;
            var12 = var1.maxResults;
            var10 = undefined;
            if(!(var12 === var10)) { _fun0009_ip = 37; continue _fun0009 }
 34:
            var12 = 10;
 37:
            var11 = var1.tokens;
            var _closure2_slot0 = var10;
            var1 = null;
            if(!(var1 != var5)) { _fun0009_ip = 502; continue _fun0009 }
 56:
            var6 = var1 == var7;
            var3 = undefined;
            if(var6) { _fun0009_ip = 94; continue _fun0009 }
 65:
            var6 = var7.getFullMatch;
            var7 = var6.bind(var7)();
            var6 = var1 == var7;
            var3 = undefined;
            if(var6) { _fun0009_ip = 94; continue _fun0009 }
 84:
            var6 = var7.trim;
            var3 = var6.bind(var7)();
 94:
            var6 = var1 != var3;
            var9 = '';
            if(!var6) { _fun0009_ip = 108; continue _fun0009 }
 105:
            var9 = var3;
 108:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var6 = var6.bind(var10)(var3);
            var3 = var6.isGuildLikeSearchContext;
            var3 = var3.bind(var6)(var4);
            if(!var3) { _fun0009_ip = 157; continue _fun0009 }
 145:
            var3 = _closure1_slot29;
            var3 = var3.bind(var10)(var5);
            if(var3) { _fun0009_ip = 234; continue _fun0009 }
 157:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 18;
            var3 = var7[var3];
            var3 = var6.bind(var10)(var3);
            var3 = var3[var5];
            var6 = var1 == var3;
            var7 = undefined;
            if(var6) { _fun0009_ip = 196; continue _fun0009 }
 190:
            var7 = var3.getAutocompletions;
 196:
            if(!(var1 == var7)) { _fun0009_ip = 206; continue _fun0009 }
 200:
            var6 = new Array(0);
            _fun0009_ip = 232; continue _fun0009;
 206:
            var3 = {};
            var3['query'] = var9;
            var3['searchContext'] = var4;
            var3['maxResults'] = var12;
            var3['tokens'] = var11;
            var6 = var7.bind(var10)(var3);
 232:
            _fun0009_ip = 337; continue _fun0009;
 234:
            var3 = _closure1_slot27;
            var3 = var3.bind(var10)(var4);
            var11 = var9.length;
            var7 = 0;
            if(!(var7 === var11)) { _fun0009_ip = 331; continue _fun0009 }
 254:
            var11 = _closure1_slot11;
            var7 = var11.getCurrentlySelectedChannelId;
            var4 = var4.guildId;
            var12 = var7.bind(var11)(var4);
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 17;
            var4 = var11[var4];
            var11 = var7.bind(var10)(var4);
            var7 = var11.getRecentlyTalked;
            var4 = _closure1_slot22;
            var11 = var7.bind(var11)(var12, var4);
            var7 = var11.map;
            var4 = function(arg1) {
                var1 = arg1;
                var4 = var1.record;
                var1 = {};
                var1['user'] = var4;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.getUserTag;
                var2 = var2.bind(var3)(var4);
                var1['text'] = var2;
                return var1;
            };
            var4 = var7.bind(var11)(var4);
            var3['results'] = var4;
 331:
            var6 = var3.results;
 337:
            var4 = var6;
            if(!(var1 != var4)) { _fun0009_ip = 463; continue _fun0009 }
 344:
            var3 = _closure1_slot29;
            var3 = var3.bind(var10)(var5);
            var4 = var6;
            if(!var3) { _fun0009_ip = 463; continue _fun0009 }
 359:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 18;
            var3 = var11[var3];
            var7 = var7.bind(var10)(var3);
            var3 = var7.isMeAutcompleteAnswer;
            var3 = var3.bind(var7)(var9);
            var4 = var6;
            if(!var3) { _fun0009_ip = 463; continue _fun0009 }
 396:
            var7 = _closure1_slot13;
            var3 = var7.getCurrentUser;
            var7 = var3.bind(var7)();
            _closure2_slot0 = var7;
            var4 = var6;
            if(!(var1 != var7)) { _fun0009_ip = 463; continue _fun0009 }
 420:
            var3 = var6.filter;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.user;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0010_ip = 24; continue _fun0010 }
 19:
                    var2 = var1.id;
 24:
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2 !== var1;
                    return var1;
                }
            };
            var2 = var3.bind(var6)(var2);
            var6 = var2.unshift;
            var3 = {};
            var8 = _closure1_slot18;
            var3['text'] = var8;
            var3['user'] = var7;
            var3 = var6.bind(var2)(var3);
            var4 = var2;
 463:
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0009_ip = 500; continue _fun0009 }
 472:
            var6 = var4.length;
            var3 = 0;
            var2 = null;
            if(!(var3 !== var6)) { _fun0009_ip = 500; continue _fun0009 }
 485:
            var3 = {};
            var3['group'] = var5;
            var3['results'] = var4;
            var2 = var3;
 500:
            return var2;
 502:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function generateSearchOptions(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arg1;
            var2 = null;
            var2 = var2 != var4;
            var3 = '';
            if(!var2) { _fun0011_ip = 28; continue _fun0011 }
 18:
            var2 = var4.getFullMatch;
            var3 = var2.bind(var4)();
 28:
            var2 = var3.trim;
            var5 = var2.bind(var3)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var4 = undefined;
            var9 = var6.bind(var4)(var2);
            var8 = var9.isChannelFilterSupported;
            var2 = arg2;
            var11 = var8.bind(var9)(var2);
            var2 = 13;
            var2 = var7[var2];
            var9 = var6.bind(var4)(var2);
            var8 = var9.getIsSearchAuthorTypeFilterEnabled;
            var2 = {};
            var10 = 'getEmptySearchOptions';
            var2['location'] = var10;
            var10 = var8.bind(var9)(var2);
            var2 = global;
            var9 = var2.Map;
            var2 = _closure1_slot16;
            var2 = var2.FILTER_FROM;
            var8 = new Array(2);
            var8[0] = var2;
            var2 = _closure1_slot12;
            var2 = var2.hidePersonalInformation;
            var2 = !var2;
            var8[1] = var2;
            var2 = new Array(9);
            var2[0] = var8;
            var8 = _closure1_slot16;
            var12 = var8.FILTER_MENTIONS;
            var8 = new Array(2);
            var8[0] = var12;
            var12 = _closure1_slot12;
            var12 = var12.hidePersonalInformation;
            var12 = !var12;
            var8[1] = var12;
            var2[1] = var8;
            var8 = _closure1_slot16;
            var12 = var8.FILTER_HAS;
            var8 = new Array(2);
            var8[0] = var12;
            var12 = true;
            var8[1] = var12;
            var2[2] = var8;
            var8 = _closure1_slot16;
            var13 = var8.FILTER_BEFORE;
            var8 = new Array(2);
            var8[0] = var13;
            var8[1] = var12;
            var2[3] = var8;
            var8 = _closure1_slot16;
            var13 = var8.FILTER_AFTER;
            var8 = new Array(2);
            var8[0] = var13;
            var8[1] = var12;
            var2[4] = var8;
            var8 = _closure1_slot16;
            var13 = var8.FILTER_ON;
            var8 = new Array(2);
            var8[0] = var13;
            var8[1] = var12;
            var2[5] = var8;
            var8 = _closure1_slot16;
            var12 = var8.FILTER_IN;
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var11;
            var2[6] = var8;
            var8 = _closure1_slot16;
            var11 = var8.FILTER_PINNED;
            var8 = new Array(2);
            var8[0] = var11;
            var11 = false;
            var8[1] = var11;
            var2[7] = var8;
            var8 = _closure1_slot16;
            var11 = var8.FILTER_AUTHOR_TYPE;
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var10;
            var2[8] = var8;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var15 = var8;
            var14 = var2;
            var2 = new var15[var9](var14, var13);
            var2 = var2 instanceof Object ? var2 : var8;
            var _closure2_slot0 = var2;
            var2 = 18;
            var2 = var7[var2];
            var4 = var6.bind(var4)(var2);
            var2 = var4.getSearchTokenFilterAutocompletions;
            var4 = var2.bind(var4)(var5);
            var2 = var4.filter;
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.token;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0012_ip = 47; continue _fun0012 }
 18:
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var2 = var2.token;
                    var3 = var3.bind(var4)(var2);
                    var2 = true;
                    var1 = var2 === var3;
 47:
                    return var1;
                }
            };
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var3 = _closure1_slot15;
            var3 = var3.SEARCH_OPTIONS;
            var1['group'] = var3;
            var1['results'] = var2;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function generateGlobalResults(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var6 = arg2;
            var _closure2_slot0 = var6;
            var1 = arg3;
            var _closure2_slot1 = var1;
            var1 = arg1;
            var5 = var1.token;
            var _closure2_slot2 = var5;
            var2 = null;
            var1 = var2 == var5;
            var4 = undefined;
            var8 = undefined;
            if(var1) { _fun0013_ip = 71; continue _fun0013 }
 42:
            var1 = var5.getFullMatch;
            var7 = var1.bind(var5)();
            var1 = var2 == var7;
            var8 = undefined;
            if(var1) { _fun0013_ip = 71; continue _fun0013 }
 61:
            var1 = var7.trim;
            var8 = var1.bind(var7)();
 71:
            var1 = new Array(0);
            var _closure2_slot3 = var1;
            if(!(var2 != var8)) { _fun0013_ip = 678; continue _fun0013 }
 86:
            var7 = '';
            if(!(var7 !== var8)) { _fun0013_ip = 678; continue _fun0013 }
 97:
            var8 = _closure1_slot16;
            var8 = var8.FILTER_HAS;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = _closure1_slot12;
            var8 = var8.hidePersonalInformation;
            if(var8) { _fun0013_ip = 171; continue _fun0013 }
 131:
            var11 = var10.push;
            var8 = _closure1_slot16;
            var8 = var8.FILTER_FROM;
            var8 = var11.bind(var10)(var8);
            var11 = var10.push;
            var8 = _closure1_slot16;
            var8 = var8.FILTER_MENTIONS;
            var8 = var11.bind(var10)(var8);
 171:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 12;
            var8 = var12[var8];
            var11 = var11.bind(var4)(var8);
            var8 = var11.isChannelFilterSupported;
            var8 = var8.bind(var11)(var6);
            if(!var8) { _fun0013_ip = 225; continue _fun0013 }
 205:
            var11 = var10.push;
            var8 = _closure1_slot16;
            var8 = var8.FILTER_IN;
            var8 = var11.bind(var10)(var8);
 225:
            var8 = var10.forEach;
            var3 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = arg1;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0014_ip = 85; continue _fun0014 }
 9:
                    var5 = _closure1_slot32;
                    var4 = {};
                    var4['filter'] = var1;
                    var3 = _closure2_slot2;
                    var4['currentToken'] = var3;
                    var3 = _closure2_slot0;
                    var4['searchContext'] = var3;
                    var3 = 3;
                    var4['maxResults'] = var3;
                    var3 = _closure2_slot1;
                    var4['tokens'] = var3;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    if(!(var2 != var3)) { _fun0014_ip = 85; continue _fun0014 }
 71:
                    var2 = _closure2_slot3;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var10)(var3);
            var3 = var2 != var5;
            var8 = var7;
            if(!var3) { _fun0013_ip = 260; continue _fun0013 }
 250:
            var3 = var5.getFullMatch;
            var8 = var3.bind(var5)();
 260:
            var3 = var8.trim;
            var14 = var3.bind(var8)();
            var8 = var2 == var14;
            var3 = null;
            if(var8) { _fun0013_ip = 664; continue _fun0013 }
 282:
            var3 = null;
            if(!(var7 !== var14)) { _fun0013_ip = 664; continue _fun0013 }
 291:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var12 = 18;
            var7 = var7[var12];
            var8 = var8.bind(var4)(var7);
            var7 = _closure1_slot16;
            var7 = var7.FILTER_BEFORE;
            var11 = var8[var7];
            var8 = var2 == var11;
            var7 = undefined;
            if(var8) { _fun0013_ip = 394; continue _fun0013 }
 334:
            var8 = var11.getAutocompletions;
            var8 = var2 == var8;
            var7 = undefined;
            if(var8) { _fun0013_ip = 394; continue _fun0013 }
 349:
            var10 = var11.getAutocompletions;
            var8 = {};
            var8['query'] = var14;
            var8['searchContext'] = var6;
            var13 = 1;
            var8['maxResults'] = var13;
            var10 = var10.bind(var11)(var8);
            var8 = var2 == var10;
            var7 = undefined;
            if(var8) { _fun0013_ip = 394; continue _fun0013 }
 388:
            var8 = 0;
            var7 = var10[var8];
 394:
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var10 = var10.bind(var4)(var8);
            var8 = _closure1_slot16;
            var8 = var8.FILTER_ON;
            var13 = var10[var8];
            var8 = var2 == var13;
            var11 = undefined;
            if(var8) { _fun0013_ip = 494; continue _fun0013 }
 434:
            var8 = var13.getAutocompletions;
            var8 = var2 == var8;
            var11 = undefined;
            if(var8) { _fun0013_ip = 494; continue _fun0013 }
 449:
            var10 = var13.getAutocompletions;
            var8 = {};
            var8['query'] = var14;
            var8['searchContext'] = var6;
            var15 = 1;
            var8['maxResults'] = var15;
            var10 = var10.bind(var13)(var8);
            var8 = var2 == var10;
            var11 = undefined;
            if(var8) { _fun0013_ip = 494; continue _fun0013 }
 488:
            var8 = 0;
            var11 = var10[var8];
 494:
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var10 = var10.bind(var4)(var8);
            var8 = _closure1_slot16;
            var8 = var8.FILTER_AFTER;
            var13 = var10[var8];
            var8 = var2 == var13;
            var10 = undefined;
            if(var8) { _fun0013_ip = 594; continue _fun0013 }
 534:
            var8 = var13.getAutocompletions;
            var8 = var2 == var8;
            var10 = undefined;
            if(var8) { _fun0013_ip = 594; continue _fun0013 }
 549:
            var12 = var13.getAutocompletions;
            var8 = {};
            var8['query'] = var14;
            var8['searchContext'] = var6;
            var14 = 1;
            var8['maxResults'] = var14;
            var12 = var12.bind(var13)(var8);
            var8 = var2 == var12;
            var10 = undefined;
            if(var8) { _fun0013_ip = 594; continue _fun0013 }
 588:
            var8 = 0;
            var10 = var12[var8];
 594:
            var8 = var2 == var7;
            var3 = null;
            if(var8) { _fun0013_ip = 664; continue _fun0013 }
 603:
            var8 = new Array(1);
            var8[0] = var7;
            if(!(var2 != var11)) { _fun0013_ip = 625; continue _fun0013 }
 615:
            var7 = var8.push;
            var7 = var7.bind(var8)(var11);
 625:
            if(!(var2 != var10)) { _fun0013_ip = 639; continue _fun0013 }
 629:
            var7 = var8.push;
            var7 = var7.bind(var8)(var10);
 639:
            var7 = {};
            var9 = _closure1_slot15;
            var9 = var9.DATES;
            var7['group'] = var9;
            var7['results'] = var8;
            var3 = var7;
 664:
            if(!(var2 != var3)) { _fun0013_ip = 678; continue _fun0013 }
 668:
            var2 = var1.push;
            var2 = var2.bind(var1)(var3);
 678:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 12;
            var3 = var8[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.getTotalResults;
            var7 = var3.bind(var7)(var1);
            var3 = 5;
            if(!(var7 < var3)) { _fun0013_ip = 739; continue _fun0013 }
 719:
            var3 = var1.push;
            var2 = _closure1_slot33;
            var2 = var2.bind(var4)(var5, var6);
            var2 = var3.bind(var1)(var2);
 739:
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function getAutocompleteList(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var5 = arg1;
            var6 = arg2;
            var1 = arg3;
            var3 = var6.type;
            var2 = _closure1_slot14;
            var2 = var2.FILTER;
            if(!(var2 !== var3)) { _fun0015_ip = 112; continue _fun0015 }
 31:
            var2 = _closure1_slot14;
            var2 = var2.FILTER_ALL;
            if(!(var2 !== var3)) { _fun0015_ip = 97; continue _fun0015 }
 45:
            var2 = _closure1_slot14;
            var2 = var2.EMPTY;
            if(!(var2 !== var3)) { _fun0015_ip = 63; continue _fun0015 }
 59:
            var2 = undefined;
            return var2;
 63:
            var2 = new Array(0);
            var7 = var2.push;
            var9 = _closure1_slot33;
            var8 = var6.token;
            var3 = undefined;
            var3 = var9.bind(var3)(var8, var5);
            var3 = var7.bind(var2)(var3);
            return var2;
 97:
            var3 = _closure1_slot34;
            var2 = undefined;
            var2 = var3.bind(var2)(var6, var5, var1);
            return var2;
 112:
            var3 = _closure1_slot32;
            var2 = {};
            var7 = var6.filter;
            var2['filter'] = var7;
            var6 = var6.token;
            var2['currentToken'] = var6;
            var2['searchContext'] = var5;
            var4 = _closure1_slot22;
            var2['maxResults'] = var4;
            var2['tokens'] = var1;
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var1 = null;
            if(!(var1 == var3)) { _fun0015_ip = 176; continue _fun0015 }
 170:
            var1 = new Array(0);
            _fun0015_ip = 187; continue _fun0015;
 176:
            var2 = new Array(1);
            var2[0] = var3;
            var1 = var2;
 187:
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var7 = function handleChannelChange() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.clearTokenCache;
        var2 = var2.bind(var3)();
        return var1;
    };
    var1 = function removeHistoryFromResults(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot20;
            var2 = var5.get;
            var2 = var2.bind(var5)(var4);
            var5 = null;
            if(!(var5 != var2)) { _fun0016_ip = 141; continue _fun0016 }
 28:
            var10 = var2.searchContext;
            var9 = var2.query;
            var8 = var2.mode;
            var7 = var2.tokens;
            var6 = var2.cursorScope;
            var11 = var2.autocompletes;
            var2 = new Array(0);
            var _closure2_slot0 = var2;
            var5 = var11.forEach;
            var3 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.group;
                    var1 = _closure1_slot15;
                    var1 = var1.HISTORY;
                    if(!(var2 !== var1)) { _fun0017_ip = 43; continue _fun0017 }
 26:
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var11)(var3);
            var5 = _closure1_slot28;
            var3 = {};
            var3['searchContext'] = var10;
            var3['query'] = var9;
            var3['mode'] = var8;
            var3['tokens'] = var7;
            var3['cursorScope'] = var6;
            var3['autocompletes'] = var2;
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = _closure1_slot20;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
 141:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function rebuildAutocompleteResults(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var9 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getSearchContextId;
            var5 = var3.bind(var4)(var9);
            var4 = _closure1_slot20;
            var3 = var4.get;
            var6 = var3.bind(var4)(var5);
            var3 = null;
            if(!(var3 != var6)) { _fun0018_ip = 148; continue _fun0018 }
 59:
            var10 = var6.query;
            var8 = var6.mode;
            var7 = var6.tokens;
            var4 = _closure1_slot28;
            var3 = {};
            var3['searchContext'] = var9;
            var3['query'] = var10;
            var3['mode'] = var8;
            var3['tokens'] = var7;
            var6 = var6.cursorScope;
            var3['cursorScope'] = var6;
            var6 = _closure1_slot35;
            var6 = var6.bind(var1)(var9, var8, var7);
            var3['autocompletes'] = var6;
            var4 = var4.bind(var1)(var3);
            var3 = _closure1_slot20;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
 148:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var9 = global;
    var11 = var9.Object;
    var10 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var10 = var6[var2];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot13 = var10;
    var10 = 11;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var11 = var10.SearchPopoutModes;
    var _closure1_slot14 = var11;
    var11 = var10.SearchAutocompleteGroups;
    var _closure1_slot15 = var11;
    var11 = var10.SearchTokenTypes;
    var _closure1_slot16 = var11;
    var11 = var10.SearchTypes;
    var _closure1_slot17 = var11;
    var10 = var10.ME;
    var _closure1_slot18 = var10;
    var10 = null;
    var _closure1_slot19 = var10;
    var10 = var9.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot20 = var10;
    var9 = var9.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var15 = var10;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot21 = var9;
    var _closure1_slot22 = var2;
    var2 = 19;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var9 = var2.Store;
    var2 = function(arg1) {
        var4 = function SearchAutocompleteStoreClass() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot24;
                var1 = var1.bind(var3)();
                if(var1) { _fun0019_ip = 69; continue _fun0019 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0019_ip = 105; continue _fun0019;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var7 = this;
            var6 = var7.waitFor;
            var12 = _closure1_slot9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot8;
            var9 = _closure1_slot10;
            var8 = _closure1_slot11;
            var13 = var7;
            var1 = var13[var6](var12, var11, var10, var9, var8, var7);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var4 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getSearchContextId;
                var3 = var1.bind(var2)(var4);
                var2 = _closure1_slot20;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                var3 = null;
                if(!(var3 == var1)) { _fun0020_ip = 134; continue _fun0020 }
 59:
                var2 = {};
                var2['searchContext'] = var4;
                var4 = '';
                var2['query'] = var4;
                var4 = {'type': null, 'filter': null, 'token': null};
                var5 = _closure1_slot14;
                var5 = var5.EMPTY;
                var4['type'] = var5;
                var2['mode'] = var4;
                var4 = new Array(0);
                var2['tokens'] = var4;
                var2['cursorScope'] = var3;
                var3 = new Array(0);
                var2['autocompletes'] = var3;
                var1 = var2;
 134:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSelectedSearchContext';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var9);
    var2 = 'SearchAutocompleteStore';
    var9['displayName'] = var2;
    var2 = 20;
    var2 = var6[var2];
    var14 = var8.bind(var1)(var2);
    var2 = {};
    var10 = function handleQueryUpdate(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var12 = var1.searchContext;
            var9 = var1.tokens;
            var8 = var1.cursorScope;
            _closure1_slot19 = var12;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var17 = 12;
            var4 = var1[var17];
            var6 = undefined;
            var5 = var3.bind(var6)(var4);
            var4 = var5.getQueryFromTokens;
            var11 = var4.bind(var5)(var9);
            var4 = var1[var17];
            var5 = var3.bind(var6)(var4);
            var4 = var5.getAutocompleteMode;
            var10 = var4.bind(var5)(var8, var9);
            var1 = var1[var17];
            var3 = var3.bind(var6)(var1);
            var1 = var3.getSearchContextId;
            var5 = var1.bind(var3)(var12);
            var3 = _closure1_slot20;
            var1 = var3.get;
            var3 = var1.bind(var3)(var5);
            var4 = null;
            if(!(var4 != var3)) { _fun0021_ip = 165; continue _fun0021 }
 122:
            var1 = var3.query;
            if(!(var11 === var1)) { _fun0021_ip = 165; continue _fun0021 }
 131:
            var1 = var3.mode;
            if(!(var4 != var1)) { _fun0021_ip = 483; continue _fun0021 }
 143:
            var1 = var3.mode;
            var7 = var1.filter;
            var1 = var10.filter;
            if(!(var7 !== var1)) { _fun0021_ip = 483; continue _fun0021 }
 165:
            var1 = _closure1_slot30;
            var1 = var1.bind(var6)(var10);
            if(var1) { _fun0021_ip = 238; continue _fun0021 }
 177:
            var7 = _closure1_slot21;
            var1 = var7.get;
            var7 = var1.bind(var7)(var5);
            if(!(var4 != var7)) { _fun0021_ip = 220; continue _fun0021 }
 195:
            var13 = var7.context;
            var1 = var13.clearQuery;
            var1 = var1.bind(var13)();
            var1 = new Array(0);
            var7['results'] = var1;
 220:
            var1 = _closure1_slot35;
            var7 = var1.bind(var6)(var12, var10, var9);
            var1 = true;
            _fun0021_ip = 491; continue _fun0021;
 238:
            var13 = _closure1_slot27;
            var13 = var13.bind(var6)(var12);
            var15 = var10.token;
            var14 = var4 == var15;
            var16 = undefined;
            if(var14) { _fun0021_ip = 291; continue _fun0021 }
 262:
            var14 = var15.getFullMatch;
            var15 = var14.bind(var15)();
            var14 = var4 == var15;
            var16 = undefined;
            if(var14) { _fun0021_ip = 291; continue _fun0021 }
 281:
            var14 = var15.trim;
            var16 = var14.bind(var15)();
 291:
            if(!(var4 != var16)) { _fun0021_ip = 306; continue _fun0021 }
 295:
            var15 = var16.length;
            var14 = 0;
            if(!(!(var15 > var14))) { _fun0021_ip = 339; continue _fun0021 }
 306:
            var15 = var13.context;
            var14 = var15.clearQuery;
            var14 = var14.bind(var15)();
            var14 = _closure1_slot35;
            var7 = var14.bind(var6)(var12, var10, var9);
            var1 = true;
            _fun0021_ip = 491; continue _fun0021;
 339:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var17];
            var15 = var15.bind(var6)(var14);
            var14 = var15.getGuildIdFromSearchContext;
            var18 = var14.bind(var15)(var12);
            if(!(var4 != var18)) { _fun0021_ip = 408; continue _fun0021 }
 371:
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var14 = 16;
            var14 = var17[var14];
            var17 = var15.bind(var6)(var14);
            var15 = var17.requestMembers;
            var14 = _closure1_slot22;
            var14 = var15.bind(var17)(var18, var16, var14);
 408:
            var15 = var13.context;
            var14 = var15.setQuery;
            var13 = {};
            var13['query'] = var16;
            var16 = {};
            var19 = var4 != var18;
            var17 = undefined;
            if(!var19) { _fun0021_ip = 439; continue _fun0021 }
 436:
            var17 = var18;
 439:
            var16['guild'] = var17;
            var13['filters'] = var16;
            var13 = var14.bind(var15)(var13);
            var14 = var4 == var3;
            var13 = undefined;
            if(var14) { _fun0021_ip = 468; continue _fun0021 }
 462:
            var13 = var3.autocompletes;
 468:
            if(!(var4 == var13)) { _fun0021_ip = 476; continue _fun0021 }
 472:
            var13 = new Array(0);
 476:
            var1 = false;
            var7 = var13;
            _fun0021_ip = 491; continue _fun0021;
 483:
            var7 = var3.autocompletes;
            var1 = false;
 491:
            var4 = _closure1_slot28;
            var3 = {};
            var3['searchContext'] = var12;
            var3['query'] = var11;
            var3['mode'] = var10;
            var3['tokens'] = var9;
            var3['cursorScope'] = var8;
            var3['autocompletes'] = var7;
            var4 = var4.bind(var6)(var3);
            var3 = _closure1_slot20;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
        }
    };
    var2['SEARCH_AUTOCOMPLETE_QUERY_UPDATE'] = var10;
    var10 = function clearSearchState(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg1;
            var5 = var1.id;
            var3 = _closure1_slot21;
            var1 = var3.get;
            var4 = var1.bind(var3)(var5);
            var1 = null;
            if(!(var1 != var4)) { _fun0022_ip = 70; continue _fun0022 }
 31:
            var6 = var4.context;
            var3 = var6.destroy;
            var3 = var3.bind(var6)();
            var3 = new Array(0);
            var4['results'] = var3;
            var4 = _closure1_slot21;
            var3 = var4.delete;
            var3 = var3.bind(var4)(var5);
 70:
            var4 = _closure1_slot20;
            var3 = var4.delete;
            var3 = var3.bind(var4)(var5);
            _closure1_slot19 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_EDITOR_STATE_CLEAR'] = var10;
    var2['CHANNEL_CREATE'] = var7;
    var2['CHANNEL_DELETE'] = var7;
    var7 = function handleMiscActions() {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var3 = _closure1_slot19;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0023_ip = 31; continue _fun0023 }
 16:
            var4 = _closure1_slot37;
            var3 = _closure1_slot19;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
 31:
            return var1;
        }
    };
    var2['STREAMER_MODE_UPDATE'] = var7;
    var7 = function handleSearchScreenOpen(arg1) {
        var1 = arg1;
        var3 = var1.searchContext;
        _closure1_slot19 = var3;
        var2 = _closure1_slot37;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['SEARCH_SCREEN_OPEN'] = var7;
    var7 = function handleChannelSelect(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var1 = arg1;
            var7 = var1.channelId;
            var1 = _closure1_slot19;
            var3 = null;
            if(!(var3 != var1)) { _fun0024_ip = 247; continue _fun0024 }
 24:
            var1 = _closure1_slot19;
            var4 = var1.type;
            var1 = _closure1_slot17;
            var1 = var1.DMS;
            if(!(var4 === var1)) { _fun0024_ip = 87; continue _fun0024 }
 47:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 12;
            var1 = var1[var6];
            var4 = undefined;
            var8 = var5.bind(var4)(var1);
            var5 = var8.isChannelFilterSupported;
            var1 = _closure1_slot19;
            var1 = var5.bind(var8)(var1);
            if(var1) { _fun0024_ip = 91; continue _fun0024 }
 87:
            var1 = false;
            return var1;
 91:
            var5 = _closure1_slot8;
            var1 = var5.getChannel;
            var5 = var1.bind(var5)(var7);
            if(!(var3 != var5)) { _fun0024_ip = 243; continue _fun0024 }
 112:
            var1 = var5.isPrivate;
            var1 = var1.bind(var5)();
            if(!var1) { _fun0024_ip = 243; continue _fun0024 }
 125:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var6 = var5.bind(var4)(var1);
            var5 = var6.getSearchContextId;
            var1 = _closure1_slot19;
            var6 = var5.bind(var6)(var1);
            var5 = _closure1_slot20;
            var1 = var5.get;
            var1 = var1.bind(var5)(var6);
            if(!(var3 != var1)) { _fun0024_ip = 239; continue _fun0024 }
 175:
            var1 = var1.mode;
            var3 = var1.type;
            var5 = var1.filter;
            var1 = _closure1_slot14;
            var1 = var1.FILTER;
            var1 = var3 === var1;
            if(!var1) { _fun0024_ip = 221; continue _fun0024 }
 207:
            var3 = _closure1_slot16;
            var3 = var3.FILTER_IN;
            var1 = var5 === var3;
 221:
            if(!var1) { _fun0024_ip = 237; continue _fun0024 }
 224:
            var3 = _closure1_slot37;
            var2 = _closure1_slot19;
            var1 = var3.bind(var4)(var2);
 237:
            return var1;
 239:
            var1 = false;
            return var1;
 243:
            var1 = false;
            return var1;
 247:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var7;
    var7 = function handleLogOut() {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var3 = _closure1_slot25;
            var2 = _closure1_slot20;
            var1 = var2.keys;
            var2 = var1.bind(var2)();
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0025_ip = 68; continue _fun0025 }
 39:
            var6 = _closure1_slot36;
            var2 = var3.value;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0025_ip = 39; continue _fun0025 }
 68:
            return var1;
        }
    };
    var2['LOGOUT'] = var7;
    var7 = function handleClearHistory(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var2 = _closure1_slot36;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['SEARCH_HISTORY_WEB_CLEAR_ITEMS'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var15 = var7;
    var13 = var2;
    var2 = new var15[var9](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot23 = var2;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/SearchAutocompleteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();