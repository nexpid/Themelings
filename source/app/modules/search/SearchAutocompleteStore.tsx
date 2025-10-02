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
            _closure1_slot24 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
            var9 = _closure1_slot26;
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
            var7 = _closure1_slot26;
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
    var _closure1_slot25 = var1;
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
    var _closure1_slot26 = var1;
    var1 = function getOrCreateUserSearchContext(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var10 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 13;
            var1 = var4[var1];
            var7 = undefined;
            var3 = var3.bind(var7)(var1);
            var1 = var3.getSearchContextId;
            var4 = var1.bind(var3)(var10);
            var3 = _closure1_slot21;
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var9 = null;
            if(!(var9 == var1)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var3 = {};
            var5 = new Array(0);
            var3['results'] = var5;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 15;
            var5 = var8[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.getUserSearchContext;
            var8 = _closure1_slot31;
            var5 = var8.bind;
            var5 = var5.bind(var8)(var9, var10);
            var5 = var6.bind(var7)(var5);
            var3['context'] = var5;
            var1 = var3;
case 39:
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
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0006_ip = 9; continue _fun0006 }
case 41:
            var2 = _closure1_slot16;
            var2 = var2.FILTER_FROM;
            var2 = var4 === var2;
            if(var2) { _fun0006_ip = 6; continue _fun0006 }
case 42:
            var3 = _closure1_slot16;
            var3 = var3.FILTER_MENTIONS;
            var2 = var4 === var3;
case 6:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function isUserAutocompleteMode(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot29;
            var3 = var4.filter;
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var5 = var4.type;
            var1 = _closure1_slot14;
            var1 = var1.FILTER_ALL;
            var1 = var5 === var1;
            if(var1) { _fun0007_ip = 5; continue _fun0007 }
case 43:
            var4 = var4.type;
            var2 = _closure1_slot14;
            var2 = var2.FILTER;
            var2 = var4 === var2;
            if(!var2) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var2 = var3;
case 44:
            var1 = var2;
case 5:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function handleUserSearchResults(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var9 = arg1;
            var1 = arg2;
            var8 = var1.results;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
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
            if(!(var14 != var4)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
            if(!(var14 != var5)) { _fun0008_ip = 46; continue _fun0008 }
case 48:
            var7 = _closure1_slot30;
            var3 = var5.mode;
            var3 = var7.bind(var1)(var3);
            if(!var3) { _fun0008_ip = 46; continue _fun0008 }
case 49:
            var3 = var5.mode;
            var7 = var3.type;
            var3 = _closure1_slot14;
            var3 = var3.FILTER;
            var13 = 3;
            if(!(var7 === var3)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
            var13 = 10;
case 50:
            if(!(var13 === var1)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
            var13 = 10;
case 52:
            var3 = new Array(0);
            var7 = _closure1_slot25;
            var12 = var7.bind(var1)(var8);
            var8 = var12.bind(var1)();
            var7 = var8.done;
            var11 = 16;
            var10 = var8;
            var8 = undefined;
            if(var7) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var7 = var10.value;
            var15 = var3.length;
            if(!(!(var15 >= var13))) { _fun0008_ip = 54; continue _fun0008 }
case 56:
            var16 = _closure1_slot13;
            var15 = var16.getUser;
            var7 = var7.id;
            var17 = var15.bind(var16)(var7);
            if(!(var14 != var17)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var15 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var15 = var15.bind(var1)(var7);
            var7 = var15.getUserTag;
            var7 = var7.bind(var15)(var17);
            var8 = var7;
            if(!(var14 != var7)) { _fun0008_ip = 57; continue _fun0008 }
case 59:
            var16 = var3.push;
            var15 = {};
            var15['text'] = var7;
            var15['user'] = var17;
            var15 = var16.bind(var3)(var15);
            var8 = var7;
case 57:
            var15 = var12.bind(var1)();
            var7 = var15.done;
            var10 = var15;
            if(!var7) { _fun0008_ip = 55; continue _fun0008 }
case 54:
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
            var5 = _closure1_slot36;
            var5 = var5.bind(var1)(var9, var8, var7);
            var3['autocompletes'] = var5;
            var5 = var4.bind(var1)(var3);
            var4 = _closure1_slot20;
            var3 = var4.set;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot23;
            var2 = var3.emitChange;
            var2 = var2.bind(var3)();
case 46:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function setSelectedSearchContext(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 17;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = _closure1_slot19;
            var4 = var5.bind(var1)(var4, var3);
            if(var4) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            _closure1_slot19 = var3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.clearTokenCache;
            var2 = var2.bind(var3)();
case 60:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function generateFilterResults(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var5 = var1.filter;
            var6 = var1.currentToken;
            var13 = var1.searchContext;
            var12 = var1.maxResults;
            var10 = undefined;
            if(!(var12 === var10)) { _fun0010_ip = 62; continue _fun0010 }
case 63:
            var12 = 10;
case 62:
            var11 = var1.tokens;
            var _closure2_slot0 = var10;
            var1 = null;
            if(!(var1 != var5)) { _fun0010_ip = 64; continue _fun0010 }
case 32:
            var4 = var1 == var6;
            var3 = undefined;
            if(var4) { _fun0010_ip = 65; continue _fun0010 }
case 66:
            var4 = var6.getFullMatch;
            var6 = var4.bind(var6)();
            var4 = var1 == var6;
            var3 = undefined;
            if(var4) { _fun0010_ip = 65; continue _fun0010 }
case 67:
            var4 = var6.trim;
            var3 = var4.bind(var6)();
case 65:
            var4 = var1 != var3;
            var9 = '';
            if(!var4) { _fun0010_ip = 68; continue _fun0010 }
case 69:
            var9 = var3;
case 68:
            var4 = var9.length;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 13;
            var3 = var7[var3];
            var6 = var6.bind(var10)(var3);
            var3 = var6.isGuildLikeSearchContext;
            var3 = var3.bind(var6)(var13);
            if(!var3) { _fun0010_ip = 70; continue _fun0010 }
case 71:
            var3 = _closure1_slot29;
            var3 = var3.bind(var10)(var5);
            if(!var3) { _fun0010_ip = 70; continue _fun0010 }
case 72:
            var3 = 0;
            if(!(var3 !== var4)) { _fun0010_ip = 70; continue _fun0010 }
case 73:
            var3 = _closure1_slot27;
            var3 = var3.bind(var10)(var13);
            var6 = var3.results;
            _fun0010_ip = 74; continue _fun0010;
case 70:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 20;
            var3 = var7[var3];
            var3 = var4.bind(var10)(var3);
            var3 = var3[var5];
            var4 = var1 == var3;
            var7 = undefined;
            if(var4) { _fun0010_ip = 75; continue _fun0010 }
case 76:
            var7 = var3.getAutocompletions;
case 75:
            if(!(var1 == var7)) { _fun0010_ip = 25; continue _fun0010 }
case 77:
            var3 = new Array(0);
            _fun0010_ip = 78; continue _fun0010;
case 25:
            var4 = {};
            var4['query'] = var9;
            var4['searchContext'] = var13;
            var4['maxResults'] = var12;
            var4['tokens'] = var11;
            var3 = var7.bind(var10)(var4);
case 78:
            var6 = var3;
case 74:
            var4 = var6;
            if(!(var1 != var4)) { _fun0010_ip = 79; continue _fun0010 }
case 80:
            var3 = _closure1_slot29;
            var3 = var3.bind(var10)(var5);
            var4 = var6;
            if(!var3) { _fun0010_ip = 79; continue _fun0010 }
case 81:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 20;
            var3 = var11[var3];
            var7 = var7.bind(var10)(var3);
            var3 = var7.isMeAutcompleteAnswer;
            var3 = var3.bind(var7)(var9);
            var4 = var6;
            if(!var3) { _fun0010_ip = 79; continue _fun0010 }
case 12:
            var7 = _closure1_slot13;
            var3 = var7.getCurrentUser;
            var7 = var3.bind(var7)();
            _closure2_slot0 = var7;
            var4 = var6;
            if(!(var1 != var7)) { _fun0010_ip = 79; continue _fun0010 }
case 82:
            var3 = var6.filter;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.user;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                    var2 = var1.id;
case 83:
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2 !== var1;
                    return var1;
                }
            };
            var2 = var3.bind(var6)(var2);
            var6 = var2.unshift;
            var3 = {};
            var8 = _closure1_slot17;
            var3['text'] = var8;
            var3['user'] = var7;
            var3 = var6.bind(var2)(var3);
            var4 = var2;
case 79:
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0010_ip = 85; continue _fun0010 }
case 86:
            var6 = var4.length;
            var3 = 0;
            var2 = null;
            if(!(var3 !== var6)) { _fun0010_ip = 85; continue _fun0010 }
case 87:
            var3 = {};
            var3['group'] = var5;
            var3['results'] = var4;
            var2 = var3;
case 85:
            return var2;
case 64:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function generateSearchOptions(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            var2 = var2 != var4;
            var3 = '';
            if(!var2) { _fun0012_ip = 38; continue _fun0012 }
case 88:
            var2 = var4.getFullMatch;
            var3 = var2.bind(var4)();
case 38:
            var2 = var3.trim;
            var5 = var2.bind(var3)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 13;
            var2 = var7[var2];
            var4 = undefined;
            var9 = var6.bind(var4)(var2);
            var8 = var9.isChannelFilterSupported;
            var2 = arg2;
            var11 = var8.bind(var9)(var2);
            var2 = 14;
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
            var2 = 20;
            var2 = var7[var2];
            var4 = var6.bind(var4)(var2);
            var2 = var4.getSearchTokenFilterAutocompletions;
            var4 = var2.bind(var4)(var5);
            var2 = var4.filter;
            var1 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.token;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0013_ip = 89; continue _fun0013 }
case 88:
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var2 = var2.token;
                    var3 = var3.bind(var4)(var2);
                    var2 = true;
                    var1 = var2 === var3;
case 89:
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
    var _closure1_slot34 = var1;
    var1 = function generateGlobalResults(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
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
            if(var1) { _fun0014_ip = 90; continue _fun0014 }
case 91:
            var1 = var5.getFullMatch;
            var7 = var1.bind(var5)();
            var1 = var2 == var7;
            var8 = undefined;
            if(var1) { _fun0014_ip = 90; continue _fun0014 }
case 11:
            var1 = var7.trim;
            var8 = var1.bind(var7)();
case 90:
            var1 = new Array(0);
            var _closure2_slot3 = var1;
            if(!(var2 != var8)) { _fun0014_ip = 92; continue _fun0014 }
case 13:
            var7 = '';
            if(!(var7 !== var8)) { _fun0014_ip = 92; continue _fun0014 }
case 93:
            var8 = _closure1_slot16;
            var8 = var8.FILTER_HAS;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = _closure1_slot12;
            var8 = var8.hidePersonalInformation;
            if(var8) { _fun0014_ip = 94; continue _fun0014 }
case 95:
            var11 = var10.push;
            var8 = _closure1_slot16;
            var8 = var8.FILTER_FROM;
            var8 = var11.bind(var10)(var8);
            var11 = var10.push;
            var8 = _closure1_slot16;
            var8 = var8.FILTER_MENTIONS;
            var8 = var11.bind(var10)(var8);
case 94:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 13;
            var8 = var12[var8];
            var11 = var11.bind(var4)(var8);
            var8 = var11.isChannelFilterSupported;
            var8 = var8.bind(var11)(var6);
            if(!var8) { _fun0014_ip = 96; continue _fun0014 }
case 26:
            var11 = var10.push;
            var8 = _closure1_slot16;
            var8 = var8.FILTER_IN;
            var8 = var11.bind(var10)(var8);
case 96:
            var8 = var10.forEach;
            var3 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = arg1;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0015_ip = 47; continue _fun0015 }
case 97:
                    var5 = _closure1_slot33;
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
                    if(!(var2 != var3)) { _fun0015_ip = 47; continue _fun0015 }
case 90:
                    var2 = _closure2_slot3;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
case 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var10)(var3);
            var3 = var2 != var5;
            var8 = var7;
            if(!var3) { _fun0014_ip = 98; continue _fun0014 }
case 99:
            var3 = var5.getFullMatch;
            var8 = var3.bind(var5)();
case 98:
            var3 = var8.trim;
            var14 = var3.bind(var8)();
            var8 = var2 == var14;
            var3 = null;
            if(var8) { _fun0014_ip = 100; continue _fun0014 }
case 101:
            var3 = null;
            if(!(var7 !== var14)) { _fun0014_ip = 100; continue _fun0014 }
case 102:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var12 = 20;
            var7 = var7[var12];
            var8 = var8.bind(var4)(var7);
            var7 = _closure1_slot16;
            var7 = var7.FILTER_BEFORE;
            var11 = var8[var7];
            var8 = var2 == var11;
            var7 = undefined;
            if(var8) { _fun0014_ip = 103; continue _fun0014 }
case 104:
            var8 = var11.getAutocompletions;
            var8 = var2 == var8;
            var7 = undefined;
            if(var8) { _fun0014_ip = 103; continue _fun0014 }
case 105:
            var10 = var11.getAutocompletions;
            var8 = {};
            var8['query'] = var14;
            var8['searchContext'] = var6;
            var13 = 1;
            var8['maxResults'] = var13;
            var10 = var10.bind(var11)(var8);
            var8 = var2 == var10;
            var7 = undefined;
            if(var8) { _fun0014_ip = 103; continue _fun0014 }
case 106:
            var8 = 0;
            var7 = var10[var8];
case 103:
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var10 = var10.bind(var4)(var8);
            var8 = _closure1_slot16;
            var8 = var8.FILTER_ON;
            var13 = var10[var8];
            var8 = var2 == var13;
            var11 = undefined;
            if(var8) { _fun0014_ip = 107; continue _fun0014 }
case 108:
            var8 = var13.getAutocompletions;
            var8 = var2 == var8;
            var11 = undefined;
            if(var8) { _fun0014_ip = 107; continue _fun0014 }
case 109:
            var10 = var13.getAutocompletions;
            var8 = {};
            var8['query'] = var14;
            var8['searchContext'] = var6;
            var15 = 1;
            var8['maxResults'] = var15;
            var10 = var10.bind(var13)(var8);
            var8 = var2 == var10;
            var11 = undefined;
            if(var8) { _fun0014_ip = 107; continue _fun0014 }
case 110:
            var8 = 0;
            var11 = var10[var8];
case 107:
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var10 = var10.bind(var4)(var8);
            var8 = _closure1_slot16;
            var8 = var8.FILTER_AFTER;
            var13 = var10[var8];
            var8 = var2 == var13;
            var10 = undefined;
            if(var8) { _fun0014_ip = 111; continue _fun0014 }
case 112:
            var8 = var13.getAutocompletions;
            var8 = var2 == var8;
            var10 = undefined;
            if(var8) { _fun0014_ip = 111; continue _fun0014 }
case 113:
            var12 = var13.getAutocompletions;
            var8 = {};
            var8['query'] = var14;
            var8['searchContext'] = var6;
            var14 = 1;
            var8['maxResults'] = var14;
            var12 = var12.bind(var13)(var8);
            var8 = var2 == var12;
            var10 = undefined;
            if(var8) { _fun0014_ip = 111; continue _fun0014 }
case 114:
            var8 = 0;
            var10 = var12[var8];
case 111:
            var8 = var2 == var7;
            var3 = null;
            if(var8) { _fun0014_ip = 100; continue _fun0014 }
case 115:
            var8 = new Array(1);
            var8[0] = var7;
            if(!(var2 != var11)) { _fun0014_ip = 116; continue _fun0014 }
case 117:
            var7 = var8.push;
            var7 = var7.bind(var8)(var11);
case 116:
            if(!(var2 != var10)) { _fun0014_ip = 118; continue _fun0014 }
case 119:
            var7 = var8.push;
            var7 = var7.bind(var8)(var10);
case 118:
            var7 = {};
            var9 = _closure1_slot15;
            var9 = var9.DATES;
            var7['group'] = var9;
            var7['results'] = var8;
            var3 = var7;
case 100:
            if(!(var2 != var3)) { _fun0014_ip = 92; continue _fun0014 }
case 120:
            var2 = var1.push;
            var2 = var2.bind(var1)(var3);
case 92:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.getTotalResults;
            var7 = var3.bind(var7)(var1);
            var3 = 5;
            if(!(var7 < var3)) { _fun0014_ip = 121; continue _fun0014 }
case 122:
            var3 = var1.push;
            var2 = _closure1_slot34;
            var2 = var2.bind(var4)(var5, var6);
            var2 = var3.bind(var1)(var2);
case 121:
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function getAutocompleteList(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var1 = arg3;
            var3 = var6.type;
            var2 = _closure1_slot14;
            var2 = var2.FILTER;
            if(!(var2 !== var3)) { _fun0016_ip = 49; continue _fun0016 }
case 123:
            var2 = _closure1_slot14;
            var2 = var2.FILTER_ALL;
            if(!(var2 !== var3)) { _fun0016_ip = 93; continue _fun0016 }
case 124:
            var2 = _closure1_slot14;
            var2 = var2.EMPTY;
            if(!(var2 !== var3)) { _fun0016_ip = 125; continue _fun0016 }
case 40:
            var2 = undefined;
            return var2;
case 125:
            var2 = new Array(0);
            var7 = var2.push;
            var9 = _closure1_slot34;
            var8 = var6.token;
            var3 = undefined;
            var3 = var9.bind(var3)(var8, var5);
            var3 = var7.bind(var2)(var3);
            return var2;
case 93:
            var3 = _closure1_slot35;
            var2 = undefined;
            var2 = var3.bind(var2)(var6, var5, var1);
            return var2;
case 49:
            var3 = _closure1_slot33;
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
            if(!(var1 == var3)) { _fun0016_ip = 126; continue _fun0016 }
case 127:
            var1 = new Array(0);
            _fun0016_ip = 23; continue _fun0016;
case 126:
            var2 = new Array(1);
            var2[0] = var3;
            var1 = var2;
case 23:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var7 = function handleChannelCreateOrDelete() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.clearTokenCache;
        var2 = var2.bind(var3)();
        return var1;
    };
    var1 = function removeHistoryFromResults(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot20;
            var2 = var5.get;
            var2 = var2.bind(var5)(var4);
            var5 = null;
            if(!(var5 != var2)) { _fun0017_ip = 128; continue _fun0017 }
case 38:
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
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.group;
                    var1 = _closure1_slot15;
                    var1 = var1.HISTORY;
                    if(!(var2 !== var1)) { _fun0018_ip = 129; continue _fun0018 }
case 130:
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
case 129:
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
case 128:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function rebuildAutocompleteResults(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var9 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getSearchContextId;
            var5 = var3.bind(var4)(var9);
            var4 = _closure1_slot20;
            var3 = var4.get;
            var6 = var3.bind(var4)(var5);
            var3 = null;
            if(!(var3 != var6)) { _fun0019_ip = 71; continue _fun0019 }
case 40:
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
            var6 = _closure1_slot36;
            var6 = var6.bind(var1)(var9, var8, var7);
            var3['autocompletes'] = var6;
            var4 = var4.bind(var1)(var3);
            var3 = _closure1_slot20;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
case 71:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot38 = var1;
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
    var10 = var10.ME;
    var _closure1_slot17 = var10;
    var10 = 12;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.AutocompleterResultTypes;
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
    var2 = 21;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var9 = var2.Store;
    var2 = function(arg1) {
        var4 = function SearchAutocompleteStoreClass() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
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
                if(var1) { _fun0020_ip = 44; continue _fun0020 }
case 131:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0020_ip = 69; continue _fun0020;
case 44:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 69:
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
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var4 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getSearchContextId;
                var3 = var1.bind(var2)(var4);
                var2 = _closure1_slot20;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                var3 = null;
                if(!(var3 == var1)) { _fun0021_ip = 132; continue _fun0021 }
case 40:
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
case 132:
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
    var2 = 22;
    var2 = var6[var2];
    var14 = var8.bind(var1)(var2);
    var2 = {};
    var10 = function handleSearchAutocompleteInitialize(arg1) {
        var1 = arg1;
        var3 = var1.searchContext;
        var4 = _closure1_slot32;
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var2 = _closure1_slot38;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['SEARCH_AUTOCOMPLETE_INITIALIZE'] = var10;
    var10 = function handleSearchAutocompleteQueryUpdate(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var12 = var1.searchContext;
            var9 = var1.tokens;
            var8 = var1.cursorScope;
            var1 = _closure1_slot32;
            var6 = undefined;
            var1 = var1.bind(var6)(var12);
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var17 = 13;
            var4 = var1[var17];
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
            if(!(var4 != var3)) { _fun0022_ip = 94; continue _fun0022 }
case 133:
            var1 = var3.query;
            if(!(var11 === var1)) { _fun0022_ip = 94; continue _fun0022 }
case 134:
            var1 = var3.mode;
            if(!(var4 != var1)) { _fun0022_ip = 112; continue _fun0022 }
case 52:
            var1 = var3.mode;
            var7 = var1.filter;
            var1 = var10.filter;
            if(!(var7 !== var1)) { _fun0022_ip = 112; continue _fun0022 }
case 94:
            var1 = _closure1_slot30;
            var1 = var1.bind(var6)(var10);
            if(var1) { _fun0022_ip = 135; continue _fun0022 }
case 136:
            var7 = _closure1_slot21;
            var1 = var7.get;
            var7 = var1.bind(var7)(var5);
            if(!(var4 != var7)) { _fun0022_ip = 137; continue _fun0022 }
case 138:
            var13 = var7.context;
            var1 = var13.clearQuery;
            var1 = var1.bind(var13)();
            var1 = new Array(0);
            var7['results'] = var1;
case 137:
            var1 = _closure1_slot36;
            var7 = var1.bind(var6)(var12, var10, var9);
            var1 = true;
            _fun0022_ip = 139; continue _fun0022;
case 135:
            var13 = _closure1_slot27;
            var13 = var13.bind(var6)(var12);
            var15 = var10.token;
            var14 = var4 == var15;
            var16 = undefined;
            if(var14) { _fun0022_ip = 140; continue _fun0022 }
case 141:
            var14 = var15.getFullMatch;
            var15 = var14.bind(var15)();
            var14 = var4 == var15;
            var16 = undefined;
            if(var14) { _fun0022_ip = 140; continue _fun0022 }
case 142:
            var14 = var15.trim;
            var16 = var14.bind(var15)();
case 140:
            if(!(var4 != var16)) { _fun0022_ip = 143; continue _fun0022 }
case 144:
            var15 = var16.length;
            var14 = 0;
            if(!(!(var15 > var14))) { _fun0022_ip = 145; continue _fun0022 }
case 143:
            var15 = var13.context;
            var14 = var15.clearQuery;
            var14 = var14.bind(var15)();
            var14 = _closure1_slot36;
            var7 = var14.bind(var6)(var12, var10, var9);
            var1 = true;
            _fun0022_ip = 139; continue _fun0022;
case 145:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var17];
            var15 = var15.bind(var6)(var14);
            var14 = var15.getGuildIdFromSearchContext;
            var18 = var14.bind(var15)(var12);
            if(!(var4 != var18)) { _fun0022_ip = 146; continue _fun0022 }
case 147:
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var14 = 18;
            var14 = var17[var14];
            var17 = var15.bind(var6)(var14);
            var15 = var17.requestMembers;
            var14 = _closure1_slot22;
            var14 = var15.bind(var17)(var18, var16, var14);
case 146:
            var15 = var13.context;
            var14 = var15.setQuery;
            var13 = {};
            var13['query'] = var16;
            var16 = {};
            var19 = var4 != var18;
            var17 = undefined;
            if(!var19) { _fun0022_ip = 148; continue _fun0022 }
case 149:
            var17 = var18;
case 148:
            var16['guild'] = var17;
            var13['filters'] = var16;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 19;
            var16 = var18[var16];
            var18 = var17.bind(var6)(var16);
            var17 = var18.getBoosterMap;
            var16 = _closure1_slot18;
            var16 = var16.USER;
            var16 = var17.bind(var18)(var16);
            var13['boosters'] = var16;
            var13 = var14.bind(var15)(var13);
            var14 = var4 == var3;
            var13 = undefined;
            if(var14) { _fun0022_ip = 150; continue _fun0022 }
case 151:
            var13 = var3.autocompletes;
case 150:
            if(!(var4 == var13)) { _fun0022_ip = 152; continue _fun0022 }
case 153:
            var13 = new Array(0);
case 152:
            var1 = false;
            var7 = var13;
            _fun0022_ip = 139; continue _fun0022;
case 112:
            var7 = var3.autocompletes;
            var1 = false;
case 139:
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
    var10 = function handleSearchEditorStateClear(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var5 = var1.id;
            var3 = _closure1_slot21;
            var1 = var3.get;
            var4 = var1.bind(var3)(var5);
            var1 = null;
            if(!(var1 != var4)) { _fun0023_ip = 3; continue _fun0023 }
case 123:
            var6 = var4.context;
            var3 = var6.destroy;
            var3 = var3.bind(var6)();
            var3 = new Array(0);
            var4['results'] = var3;
            var4 = _closure1_slot21;
            var3 = var4.delete;
            var3 = var3.bind(var4)(var5);
case 3:
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
    var7 = function handleStreamerModeUpdate() {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var3 = _closure1_slot19;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0024_ip = 123; continue _fun0024 }
case 154:
            var4 = _closure1_slot38;
            var3 = _closure1_slot19;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 123:
            return var1;
        }
    };
    var2['STREAMER_MODE_UPDATE'] = var7;
    var7 = function handleChannelSelect() {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var3 = _closure1_slot19;
            var2 = null;
            if(!(var2 != var3)) { _fun0025_ip = 155; continue _fun0025 }
case 154:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 13;
            var4 = var3[var6];
            var3 = undefined;
            var7 = var5.bind(var3)(var4);
            var5 = var7.isChannelFilterSupported;
            var4 = _closure1_slot19;
            var4 = var5.bind(var7)(var4);
            if(!var4) { _fun0025_ip = 58; continue _fun0025 }
case 40:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var6 = var5.bind(var3)(var4);
            var5 = var6.getSearchContextId;
            var4 = _closure1_slot19;
            var6 = var5.bind(var6)(var4);
            var5 = _closure1_slot20;
            var4 = var5.get;
            var4 = var4.bind(var5)(var6);
            if(!(var2 != var4)) { _fun0025_ip = 156; continue _fun0025 }
case 49:
            var4 = var4.mode;
            var6 = var4.type;
            var5 = var4.filter;
            var8 = var4.token;
            var7 = var2 == var8;
            var4 = undefined;
            if(var7) { _fun0025_ip = 94; continue _fun0025 }
case 50:
            var7 = var8.getFullMatch;
            var8 = var7.bind(var8)();
            var7 = var2 == var8;
            var4 = undefined;
            if(var7) { _fun0025_ip = 94; continue _fun0025 }
case 157:
            var7 = var8.trim;
            var4 = var7.bind(var8)();
case 94:
            var2 = var2 == var4;
            if(var2) { _fun0025_ip = 158; continue _fun0025 }
case 159:
            var7 = var4.length;
            var4 = 0;
            var2 = var4 === var7;
case 158:
            var4 = _closure1_slot14;
            var4 = var4.FILTER;
            if(!(var6 === var4)) { _fun0025_ip = 58; continue _fun0025 }
case 160:
            var4 = _closure1_slot16;
            var4 = var4.FILTER_IN;
            if(!(var5 === var4)) { _fun0025_ip = 58; continue _fun0025 }
case 161:
            if(var2) { _fun0025_ip = 75; continue _fun0025 }
case 58:
            var2 = false;
            return var2;
case 75:
            var2 = _closure1_slot38;
            var1 = _closure1_slot19;
            var1 = var2.bind(var3)(var1);
            return var1;
case 156:
            var1 = false;
            return var1;
case 155:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var7;
    var7 = function handleLogOut() {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = _closure1_slot25;
            var2 = _closure1_slot20;
            var1 = var2.keys;
            var2 = var1.bind(var2)();
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0026_ip = 162; continue _fun0026 }
case 163:
            var6 = _closure1_slot37;
            var2 = var3.value;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0026_ip = 163; continue _fun0026 }
case 162:
            return var1;
        }
    };
    var2['LOGOUT'] = var7;
    var7 = function handleSearchHistoryWebClearItems(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var2 = _closure1_slot37;
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
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/SearchAutocompleteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();