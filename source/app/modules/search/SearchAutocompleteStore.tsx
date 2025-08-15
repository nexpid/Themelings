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
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot26;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot26;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
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
 342:
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
    var1 = function stateFactory(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var7 = var1.searchContext;
            var9 = var1.query;
            var6 = var1.mode;
            var4 = var1.tokens;
            var5 = var1.cursorScope;
            var2 = var1.autocompletes;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 12;
            var1 = var10[var1];
            var13 = undefined;
            var3 = var3.bind(var13)(var1);
            var1 = var3.getSearchContextId;
            var11 = var1.bind(var3)(var7);
            var1 = _closure1_slot21;
            var1 = var1[var11];
            var3 = null;
            if(!(var3 == var1)) { _fun0005_ip = 156; continue _fun0005 }
 87:
            var10 = {};
            var1 = new Array(0);
            var10['results'] = var1;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 14;
            var1 = var14[var1];
            var13 = var12.bind(var13)(var1);
            var12 = var13.getUserSearchContext;
            var14 = _closure1_slot28;
            var1 = var14.bind;
            var1 = var1.bind(var14)(var3, var7);
            var1 = var12.bind(var13)(var1);
            var10['context'] = var1;
            var1 = _closure1_slot21;
            var1[var11] = var10;
 156:
            var1 = {};
            var1['searchContext'] = var7;
            var10 = var3 != var9;
            var7 = '';
            if(!var10) { _fun0005_ip = 177; continue _fun0005 }
 174:
            var7 = var9;
 177:
            var1['query'] = var7;
            if(!(var3 == var6)) { _fun0005_ip = 218; continue _fun0005 }
 185:
            var7 = {'type': null, 'filter': null, 'token': null};
            var8 = _closure1_slot14;
            var8 = var8.EMPTY;
            var7['type'] = var8;
            var6 = var7;
 218:
            var1['mode'] = var6;
            if(!(var3 == var4)) { _fun0005_ip = 230; continue _fun0005 }
 226:
            var4 = new Array(0);
 230:
            var1['tokens'] = var4;
            var6 = var3 != var5;
            var4 = null;
            if(!var6) { _fun0005_ip = 247; continue _fun0005 }
 244:
            var4 = var5;
 247:
            var1['cursorScope'] = var4;
            if(!(var3 == var2)) { _fun0005_ip = 260; continue _fun0005 }
 256:
            var2 = new Array(0);
 260:
            var1['autocompletes'] = var2;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function handleUserSearchResults(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var12 = arg1;
            var1 = arg2;
            var8 = var1.results;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getSearchContextId;
            var5 = var3.bind(var4)(var12);
            var3 = _closure1_slot21;
            var6 = var3[var5];
            var3 = _closure1_slot20;
            var3 = var3[var5];
            var14 = null;
            if(!(var14 != var6)) { _fun0006_ip = 445; continue _fun0006 }
 73:
            if(!(var14 != var3)) { _fun0006_ip = 445; continue _fun0006 }
 80:
            var4 = var3.mode;
            var9 = var4.type;
            var7 = var4.filter;
            var4 = _closure1_slot14;
            var4 = var4.EMPTY;
            if(!(var9 !== var4)) { _fun0006_ip = 445; continue _fun0006 }
 112:
            var4 = _closure1_slot14;
            var4 = var4.FILTER;
            if(!(var9 === var4)) { _fun0006_ip = 157; continue _fun0006 }
 126:
            var4 = _closure1_slot16;
            var4 = var4.FILTER_FROM;
            if(!(var7 !== var4)) { _fun0006_ip = 157; continue _fun0006 }
 140:
            var4 = _closure1_slot16;
            var4 = var4.FILTER_MENTIONS;
            if(!(var7 === var4)) { _fun0006_ip = 445; continue _fun0006 }
 157:
            var4 = var3.mode;
            var7 = var4.type;
            var4 = _closure1_slot14;
            var4 = var4.FILTER;
            var13 = 3;
            if(!(var7 === var4)) { _fun0006_ip = 188; continue _fun0006 }
 184:
            var13 = _closure1_slot22;
 188:
            if(!(var13 === var1)) { _fun0006_ip = 195; continue _fun0006 }
 192:
            var13 = 10;
 195:
            var4 = new Array(0);
            var7 = _closure1_slot25;
            var11 = var7.bind(var1)(var8);
            var8 = var11.bind(var1)();
            var7 = var8.done;
            var10 = 15;
            var9 = var8;
            var8 = undefined;
            if(var7) { _fun0006_ip = 339; continue _fun0006 }
 228:
            var7 = var9.value;
            var15 = var4.length;
            if(!(!(var15 >= var13))) { _fun0006_ip = 339; continue _fun0006 }
 242:
            var16 = _closure1_slot13;
            var15 = var16.getUser;
            var7 = var7.id;
            var17 = var15.bind(var16)(var7);
            if(!(var14 != var17)) { _fun0006_ip = 324; continue _fun0006 }
 266:
            var15 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var15 = var15.bind(var1)(var7);
            var7 = var15.getUserTag;
            var7 = var7.bind(var15)(var17);
            var8 = var7;
            if(!(var14 != var7)) { _fun0006_ip = 324; continue _fun0006 }
 301:
            var16 = var4.push;
            var15 = {};
            var15['text'] = var7;
            var15['user'] = var17;
            var15 = var16.bind(var4)(var15);
            var8 = var7;
 324:
            var15 = var11.bind(var1)();
            var7 = var15.done;
            var9 = var15;
            if(!var7) { _fun0006_ip = 228; continue _fun0006 }
 339:
            var6['results'] = var4;
            var11 = var3.query;
            var10 = var3.mode;
            var9 = var3.tokens;
            var8 = var3.cursorScope;
            var3 = var3.autocompletes;
            var3 = _closure1_slot32;
            var7 = var3.bind(var1)(var12, var10, var9);
            var4 = _closure1_slot20;
            var6 = _closure1_slot27;
            var3 = {};
            var3['searchContext'] = var12;
            var3['query'] = var11;
            var3['mode'] = var10;
            var3['tokens'] = var9;
            var3['cursorScope'] = var8;
            var3['autocompletes'] = var7;
            var3 = var6.bind(var1)(var3);
            var4[var5] = var3;
            var3 = _closure1_slot23;
            var2 = var3.emitChange;
            var2 = var2.bind(var3)();
 445:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function generateFilterResults(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var5 = var1.filter;
            var11 = var1.token;
            var7 = var1.searchContext;
            var15 = var1.maxResults;
            var10 = undefined;
            if(!(var15 === var10)) { _fun0007_ip = 37; continue _fun0007 }
 34:
            var15 = 10;
 37:
            var14 = var1.tokens;
            var _closure2_slot0 = var10;
            var1 = null;
            if(!(var1 != var5)) { _fun0007_ip = 563; continue _fun0007 }
 56:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var13 = 12;
            var3 = var3[var13];
            var4 = var4.bind(var10)(var3);
            var3 = var4.getSearchContextId;
            var12 = var3.bind(var4)(var7);
            var4 = var1 == var11;
            var3 = undefined;
            if(var4) { _fun0007_ip = 128; continue _fun0007 }
 99:
            var4 = var11.getFullMatch;
            var6 = var4.bind(var11)();
            var4 = var1 == var6;
            var3 = undefined;
            if(var4) { _fun0007_ip = 128; continue _fun0007 }
 118:
            var4 = var6.trim;
            var3 = var4.bind(var6)();
 128:
            var4 = var1 != var3;
            var9 = '';
            if(!var4) { _fun0007_ip = 142; continue _fun0007 }
 139:
            var9 = var3;
 142:
            var3 = _closure1_slot16;
            var3 = var3.FILTER_FROM;
            var3 = var5 === var3;
            if(var3) { _fun0007_ip = 173; continue _fun0007 }
 159:
            var4 = _closure1_slot16;
            var4 = var4.FILTER_MENTIONS;
            var3 = var5 === var4;
 173:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var6 = var6.bind(var10)(var4);
            var4 = var6.isGuildLikeSearchContext;
            var4 = var4.bind(var6)(var7);
            if(!var4) { _fun0007_ip = 207; continue _fun0007 }
 204:
            if(var3) { _fun0007_ip = 292; continue _fun0007 }
 207:
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = 18;
            var4 = var13[var4];
            var4 = var6.bind(var10)(var4);
            var4 = var4[var5];
            var6 = var1 == var4;
            var13 = undefined;
            if(var6) { _fun0007_ip = 246; continue _fun0007 }
 240:
            var13 = var4.getAutocompletions;
 246:
            if(!(var1 == var13)) { _fun0007_ip = 256; continue _fun0007 }
 250:
            var6 = new Array(0);
            _fun0007_ip = 290; continue _fun0007;
 256:
            var4 = {};
            var4['query'] = var9;
            var4['searchContext'] = var7;
            if(!(var1 == var15)) { _fun0007_ip = 275; continue _fun0007 }
 271:
            var15 = _closure1_slot22;
 275:
            var4['maxResults'] = var15;
            var4['tokens'] = var14;
            var6 = var13.bind(var10)(var4);
 290:
            _fun0007_ip = 407; continue _fun0007;
 292:
            var4 = _closure1_slot21;
            var4 = var4[var12];
            var12 = var1 == var4;
            var6 = null;
            if(var12) { _fun0007_ip = 407; continue _fun0007 }
 309:
            if(!(var1 != var11)) { _fun0007_ip = 324; continue _fun0007 }
 313:
            var12 = var9.length;
            var11 = 0;
            if(!(var11 === var12)) { _fun0007_ip = 401; continue _fun0007 }
 324:
            var12 = _closure1_slot11;
            var11 = var12.getCurrentlySelectedChannelId;
            var7 = var7.guildId;
            var13 = var11.bind(var12)(var7);
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 17;
            var7 = var12[var7];
            var12 = var11.bind(var10)(var7);
            var11 = var12.getRecentlyTalked;
            var7 = _closure1_slot22;
            var12 = var11.bind(var12)(var13, var7);
            var11 = var12.map;
            var7 = function(arg1) {
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
            var7 = var11.bind(var12)(var7);
            var4['results'] = var7;
 401:
            var6 = var4.results;
 407:
            var4 = var6;
            if(!(var1 != var4)) { _fun0007_ip = 524; continue _fun0007 }
 414:
            var4 = var6;
            if(!var3) { _fun0007_ip = 524; continue _fun0007 }
 420:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 18;
            var3 = var11[var3];
            var7 = var7.bind(var10)(var3);
            var3 = var7.isMeAutcompleteAnswer;
            var3 = var3.bind(var7)(var9);
            var4 = var6;
            if(!var3) { _fun0007_ip = 524; continue _fun0007 }
 457:
            var7 = _closure1_slot13;
            var3 = var7.getCurrentUser;
            var7 = var3.bind(var7)();
            _closure2_slot0 = var7;
            var4 = var6;
            if(!(var1 != var7)) { _fun0007_ip = 524; continue _fun0007 }
 481:
            var3 = var6.filter;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.user;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0008_ip = 24; continue _fun0008 }
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
 524:
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0007_ip = 561; continue _fun0007 }
 533:
            var6 = var4.length;
            var3 = 0;
            var2 = null;
            if(!(var3 !== var6)) { _fun0007_ip = 561; continue _fun0007 }
 546:
            var3 = {};
            var3['group'] = var5;
            var3['results'] = var4;
            var2 = var3;
 561:
            return var2;
 563:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function generateSearchOptions(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = arg1;
            var2 = null;
            var2 = var2 != var4;
            var3 = '';
            if(!var2) { _fun0009_ip = 28; continue _fun0009 }
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
            var2 = var4.getFilterAutocompletions;
            var4 = var2.bind(var4)(var5);
            var2 = var4.filter;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.token;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0010_ip = 47; continue _fun0010 }
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
    var _closure1_slot30 = var1;
    var1 = function generateGlobalResults(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var1 = arg3;
            var _closure2_slot2 = var1;
            var4 = null;
            var1 = var4 != var6;
            var7 = '';
            var3 = var7;
            if(!var1) { _fun0011_ip = 49; continue _fun0011 }
 39:
            var1 = var6.getFullMatch;
            var3 = var1.bind(var6)();
 49:
            var1 = var3.trim;
            var8 = var1.bind(var3)();
            var1 = new Array(0);
            var _closure2_slot3 = var1;
            var3 = var4 != var8;
            if(!var3) { _fun0011_ip = 78; continue _fun0011 }
 74:
            var3 = var7 !== var8;
 78:
            if(!var3) { _fun0011_ip = 663; continue _fun0011 }
 84:
            var3 = _closure1_slot16;
            var3 = var3.FILTER_HAS;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = _closure1_slot12;
            var3 = var3.hidePersonalInformation;
            if(var3) { _fun0011_ip = 158; continue _fun0011 }
 118:
            var10 = var9.push;
            var3 = _closure1_slot16;
            var3 = var3.FILTER_FROM;
            var3 = var10.bind(var9)(var3);
            var10 = var9.push;
            var3 = _closure1_slot16;
            var3 = var3.FILTER_MENTIONS;
            var3 = var10.bind(var9)(var3);
 158:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 12;
            var3 = var11[var3];
            var13 = undefined;
            var10 = var10.bind(var13)(var3);
            var3 = var10.isChannelFilterSupported;
            var3 = var3.bind(var10)(var5);
            if(!var3) { _fun0011_ip = 214; continue _fun0011 }
 194:
            var10 = var9.push;
            var3 = _closure1_slot16;
            var3 = var3.FILTER_IN;
            var3 = var10.bind(var9)(var3);
 214:
            var3 = var9.forEach;
            var2 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = arg1;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0012_ip = 85; continue _fun0012 }
 9:
                    var5 = _closure1_slot29;
                    var4 = {};
                    var4['filter'] = var1;
                    var3 = _closure2_slot0;
                    var4['token'] = var3;
                    var3 = _closure2_slot1;
                    var4['searchContext'] = var3;
                    var3 = 3;
                    var4['maxResults'] = var3;
                    var3 = _closure2_slot2;
                    var4['tokens'] = var3;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    if(!(var2 != var3)) { _fun0012_ip = 85; continue _fun0012 }
 71:
                    var2 = _closure2_slot3;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var9)(var2);
            var3 = var1.push;
            var2 = var4 != var6;
            var9 = var7;
            if(!var2) { _fun0011_ip = 254; continue _fun0011 }
 244:
            var2 = var6.getFullMatch;
            var9 = var2.bind(var6)();
 254:
            var2 = var9.trim;
            var15 = var2.bind(var9)();
            var9 = var4 != var15;
            var2 = undefined;
            if(!var9) { _fun0011_ip = 658; continue _fun0011 }
 276:
            var2 = undefined;
            if(!(var7 !== var15)) { _fun0011_ip = 658; continue _fun0011 }
 285:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var12 = 18;
            var7 = var7[var12];
            var9 = var9.bind(var13)(var7);
            var7 = _closure1_slot16;
            var7 = var7.FILTER_BEFORE;
            var11 = var9[var7];
            var7 = var4 == var11;
            var10 = undefined;
            if(var7) { _fun0011_ip = 388; continue _fun0011 }
 328:
            var7 = var11.getAutocompletions;
            var7 = var4 == var7;
            var10 = undefined;
            if(var7) { _fun0011_ip = 388; continue _fun0011 }
 343:
            var9 = var11.getAutocompletions;
            var7 = {};
            var7['query'] = var15;
            var7['searchContext'] = var5;
            var14 = 1;
            var7['maxResults'] = var14;
            var9 = var9.bind(var11)(var7);
            var7 = var4 == var9;
            var10 = undefined;
            if(var7) { _fun0011_ip = 388; continue _fun0011 }
 382:
            var7 = 0;
            var10 = var9[var7];
 388:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var9 = var9.bind(var13)(var7);
            var7 = _closure1_slot16;
            var7 = var7.FILTER_ON;
            var14 = var9[var7];
            var7 = var4 == var14;
            var11 = undefined;
            if(var7) { _fun0011_ip = 488; continue _fun0011 }
 428:
            var7 = var14.getAutocompletions;
            var7 = var4 == var7;
            var11 = undefined;
            if(var7) { _fun0011_ip = 488; continue _fun0011 }
 443:
            var9 = var14.getAutocompletions;
            var7 = {};
            var7['query'] = var15;
            var7['searchContext'] = var5;
            var16 = 1;
            var7['maxResults'] = var16;
            var9 = var9.bind(var14)(var7);
            var7 = var4 == var9;
            var11 = undefined;
            if(var7) { _fun0011_ip = 488; continue _fun0011 }
 482:
            var7 = 0;
            var11 = var9[var7];
 488:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var9 = var9.bind(var13)(var7);
            var7 = _closure1_slot16;
            var7 = var7.FILTER_AFTER;
            var14 = var9[var7];
            var7 = var4 == var14;
            var9 = undefined;
            if(var7) { _fun0011_ip = 588; continue _fun0011 }
 528:
            var7 = var14.getAutocompletions;
            var7 = var4 == var7;
            var9 = undefined;
            if(var7) { _fun0011_ip = 588; continue _fun0011 }
 543:
            var12 = var14.getAutocompletions;
            var7 = {};
            var7['query'] = var15;
            var7['searchContext'] = var5;
            var15 = 1;
            var7['maxResults'] = var15;
            var12 = var12.bind(var14)(var7);
            var7 = var4 == var12;
            var9 = undefined;
            if(var7) { _fun0011_ip = 588; continue _fun0011 }
 582:
            var7 = 0;
            var9 = var12[var7];
 588:
            var7 = var4 == var10;
            var2 = null;
            if(var7) { _fun0011_ip = 658; continue _fun0011 }
 597:
            var7 = new Array(1);
            var7[0] = var10;
            if(!(var4 != var11)) { _fun0011_ip = 619; continue _fun0011 }
 609:
            var10 = var7.push;
            var10 = var10.bind(var7)(var11);
 619:
            if(!(var4 != var9)) { _fun0011_ip = 633; continue _fun0011 }
 623:
            var4 = var7.push;
            var4 = var4.bind(var7)(var9);
 633:
            var4 = {};
            var8 = _closure1_slot15;
            var8 = var8.DATES;
            var4['group'] = var8;
            var4['results'] = var7;
            var2 = var4;
 658:
            var2 = var3.bind(var1)(var2);
 663:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 12;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var7.bind(var4)(var3);
            var3 = var7.getTotalResults;
            var7 = var3.bind(var7)(var1);
            var3 = 5;
            if(!(var7 < var3)) { _fun0011_ip = 726; continue _fun0011 }
 706:
            var3 = var1.push;
            var2 = _closure1_slot30;
            var2 = var2.bind(var4)(var6, var5);
            var2 = var3.bind(var1)(var2);
 726:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function getAutocompleteList(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var8 = arg1;
            var9 = arg2;
            var3 = arg3;
            var2 = new Array(0);
            var4 = var9.type;
            var1 = _closure1_slot14;
            var1 = var1.FILTER;
            if(!(var4 !== var1)) { _fun0013_ip = 130; continue _fun0013 }
 35:
            var4 = var9.type;
            var1 = _closure1_slot14;
            var1 = var1.FILTER_ALL;
            if(!(var4 !== var1)) { _fun0013_ip = 109; continue _fun0013 }
 54:
            var5 = var9.type;
            var1 = _closure1_slot14;
            var4 = var1.EMPTY;
            var1 = var2;
            if(!(var5 === var4)) { _fun0013_ip = 195; continue _fun0013 }
 76:
            var5 = var2.push;
            var10 = _closure1_slot30;
            var6 = var9.token;
            var4 = undefined;
            var4 = var10.bind(var4)(var6, var8);
            var4 = var5.bind(var2)(var4);
            var1 = var2;
            _fun0013_ip = 195; continue _fun0013;
 109:
            var6 = _closure1_slot31;
            var5 = var9.token;
            var4 = undefined;
            var1 = var6.bind(var4)(var5, var8, var3);
            _fun0013_ip = 195; continue _fun0013;
 130:
            var4 = var2.push;
            var6 = _closure1_slot29;
            var5 = {};
            var10 = var9.filter;
            var5['filter'] = var10;
            var9 = var9.token;
            var5['token'] = var9;
            var5['searchContext'] = var8;
            var7 = _closure1_slot22;
            var5['maxResults'] = var7;
            var5['tokens'] = var3;
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var4.bind(var2)(var3);
            var1 = var2;
 195:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
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
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot20;
            var2 = var1[var3];
            var1 = null;
            if(!(var1 != var2)) { _fun0014_ip = 120; continue _fun0014 }
 20:
            var10 = var2.searchContext;
            var9 = var2.query;
            var8 = var2.mode;
            var6 = var2.tokens;
            var1 = var2.cursorScope;
            var7 = var2.autocompletes;
            var2 = _closure1_slot20;
            var5 = _closure1_slot27;
            var4 = {};
            var4['searchContext'] = var10;
            var4['query'] = var9;
            var4['mode'] = var8;
            var4['tokens'] = var6;
            var4['cursorScope'] = var1;
            var6 = var7.map;
            var1 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    var3 = var1 == var2;
                    var4 = undefined;
                    if(var3) { _fun0015_ip = 20; continue _fun0015 }
 14:
                    var4 = var2.group;
 20:
                    var3 = _closure1_slot15;
                    var3 = var3.HISTORY;
                    var1 = null;
                    if(!(var4 !== var3)) { _fun0015_ip = 42; continue _fun0015 }
 39:
                    var1 = var2;
 42:
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1);
            var4['autocompletes'] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var2[var3] = var1;
 120:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function rebuildAutocompleteResults(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var9 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getSearchContextId;
            var4 = var2.bind(var3)(var9);
            var2 = _closure1_slot20;
            var3 = var2[var4];
            var2 = null;
            if(!(var2 != var3)) { _fun0016_ip = 143; continue _fun0016 }
 53:
            var2 = _closure1_slot20;
            var2 = var2[var4];
            var11 = var2.query;
            var8 = var2.mode;
            var7 = var2.tokens;
            var10 = var2.cursorScope;
            var3 = _closure1_slot20;
            var5 = _closure1_slot27;
            var2 = {};
            var2['searchContext'] = var9;
            var2['query'] = var11;
            var2['mode'] = var8;
            var2['tokens'] = var7;
            var2['cursorScope'] = var10;
            var6 = _closure1_slot32;
            var6 = var6.bind(var1)(var9, var8, var7);
            var2['autocompletes'] = var6;
            var2 = var5.bind(var1)(var2);
            var3[var4] = var2;
            return var1;
 143:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
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
    var9 = var6[var2];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot13 = var9;
    var9 = 11;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var10 = var9.SearchPopoutModes;
    var _closure1_slot14 = var10;
    var10 = var9.SearchAutocompleteGroups;
    var _closure1_slot15 = var10;
    var10 = var9.SearchTokenTypes;
    var _closure1_slot16 = var10;
    var10 = var9.SearchTypes;
    var _closure1_slot17 = var10;
    var9 = var9.ME;
    var _closure1_slot18 = var9;
    var9 = null;
    var _closure1_slot19 = var9;
    var9 = {};
    var _closure1_slot20 = var9;
    var9 = {};
    var _closure1_slot21 = var9;
    var _closure1_slot22 = var2;
    var2 = 19;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var9 = var2.Store;
    var2 = function(arg1) {
        var4 = function SearchAutocompleteStoreClass() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
                if(var1) { _fun0017_ip = 69; continue _fun0017 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0017_ip = 105; continue _fun0017;
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
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var5 = arg1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var3.getSearchContextId;
                var3 = var1.bind(var3)(var5);
                var1 = _closure1_slot20;
                var1 = var1[var3];
                var3 = null;
                if(!(var3 == var1)) { _fun0018_ip = 69; continue _fun0018 }
 53:
                var3 = _closure1_slot27;
                var2 = {};
                var2['searchContext'] = var5;
                var1 = var3.bind(var4)(var2);
 69:
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
    var13 = var8.bind(var1)(var2);
    var2 = {};
    var10 = function handleQueryUpdate(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var12 = var1.searchContext;
            var9 = var1.tokens;
            var8 = var1.cursorScope;
            _closure1_slot19 = var12;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var16 = 12;
            var4 = var1[var16];
            var6 = undefined;
            var5 = var3.bind(var6)(var4);
            var4 = var5.getQueryFromTokens;
            var11 = var4.bind(var5)(var9);
            var4 = var1[var16];
            var5 = var3.bind(var6)(var4);
            var4 = var5.getAutocompleteMode;
            var10 = var4.bind(var5)(var8, var9);
            var1 = var1[var16];
            var3 = var3.bind(var6)(var1);
            var1 = var3.getSearchContextId;
            var4 = var1.bind(var3)(var12);
            var1 = _closure1_slot20;
            var13 = var1[var4];
            var3 = null;
            if(!(var3 == var13)) { _fun0019_ip = 118; continue _fun0019 }
 116:
            var13 = {};
 118:
            var1 = _closure1_slot21;
            var5 = var1[var4];
            var1 = var13.query;
            if(!(var11 === var1)) { _fun0019_ip = 176; continue _fun0019 }
 135:
            var1 = var13.mode;
            if(!(var3 != var1)) { _fun0019_ip = 163; continue _fun0019 }
 144:
            var1 = var13.mode;
            var7 = var1.filter;
            var1 = var10.filter;
            if(!(var7 === var1)) { _fun0019_ip = 176; continue _fun0019 }
 163:
            var7 = var13.autocompletes;
            var1 = false;
            _fun0019_ip = 552; continue _fun0019;
 176:
            var15 = var10.type;
            var14 = _closure1_slot14;
            var14 = var14.EMPTY;
            if(!(var15 !== var14)) { _fun0019_ip = 510; continue _fun0019 }
 198:
            var15 = var10.type;
            var14 = _closure1_slot14;
            var14 = var14.FILTER;
            if(!(var15 === var14)) { _fun0019_ip = 258; continue _fun0019 }
 217:
            var15 = var10.filter;
            var14 = _closure1_slot16;
            var14 = var14.FILTER_FROM;
            if(!(var15 !== var14)) { _fun0019_ip = 258; continue _fun0019 }
 236:
            var15 = var10.filter;
            var14 = _closure1_slot16;
            var14 = var14.FILTER_MENTIONS;
            if(!(var15 === var14)) { _fun0019_ip = 510; continue _fun0019 }
 258:
            var15 = var3 != var5;
            var7 = undefined;
            var1 = true;
            if(!var15) { _fun0019_ip = 552; continue _fun0019 }
 272:
            var18 = var10.token;
            if(!(var3 != var18)) { _fun0019_ip = 313; continue _fun0019 }
 282:
            var15 = var18.getFullMatch;
            var17 = var15.bind(var18)();
            var15 = var17.trim;
            var15 = var15.bind(var17)();
            var17 = var15.length;
            var15 = 0;
            if(!(!(var17 > var15))) { _fun0019_ip = 346; continue _fun0019 }
 313:
            var17 = var5.context;
            var15 = var17.clearQuery;
            var15 = var15.bind(var17)();
            var15 = _closure1_slot32;
            var7 = var15.bind(var6)(var12, var10, var9);
            var1 = true;
            _fun0019_ip = 552; continue _fun0019;
 346:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var16];
            var15 = var15.bind(var6)(var14);
            var14 = var15.getGuildIdFromSearchContext;
            var19 = var14.bind(var15)(var12);
            if(!(var3 != var19)) { _fun0019_ip = 435; continue _fun0019 }
 378:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 16;
            var14 = var16[var14];
            var17 = var15.bind(var6)(var14);
            var16 = var17.requestMembers;
            var14 = var18.getFullMatch;
            var15 = var14.bind(var18)();
            var14 = var15.trim;
            var15 = var14.bind(var15)();
            var14 = _closure1_slot22;
            var14 = var16.bind(var17)(var19, var15, var14);
 435:
            var16 = var5.context;
            var15 = var16.setQuery;
            var14 = {};
            var17 = var18.getFullMatch;
            var18 = var17.bind(var18)();
            var17 = var18.trim;
            var17 = var17.bind(var18)();
            var14['query'] = var17;
            var17 = {};
            var20 = var3 != var19;
            var18 = undefined;
            if(!var20) { _fun0019_ip = 486; continue _fun0019 }
 483:
            var18 = var19;
 486:
            var17['guild'] = var18;
            var14['filters'] = var17;
            var14 = var15.bind(var16)(var14);
            var7 = var13.autocompletes;
            var1 = false;
            _fun0019_ip = 552; continue _fun0019;
 510:
            if(!(var3 != var5)) { _fun0019_ip = 539; continue _fun0019 }
 514:
            var13 = var5.context;
            var3 = var13.clearQuery;
            var3 = var3.bind(var13)();
            var3 = new Array(0);
            var5['results'] = var3;
 539:
            var3 = _closure1_slot32;
            var7 = var3.bind(var6)(var12, var10, var9);
            var1 = true;
 552:
            var3 = _closure1_slot20;
            var5 = _closure1_slot27;
            var2 = {};
            var2['searchContext'] = var12;
            var2['query'] = var11;
            var2['mode'] = var10;
            var2['tokens'] = var9;
            var2['cursorScope'] = var8;
            var2['autocompletes'] = var7;
            var2 = var5.bind(var6)(var2);
            var3[var4] = var2;
            return var1;
        }
    };
    var2['SEARCH_AUTOCOMPLETE_QUERY_UPDATE'] = var10;
    var10 = function clearSearchState(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var4 = var1.id;
            var1 = _closure1_slot21;
            var5 = var1[var4];
            var1 = null;
            if(!(var1 != var5)) { _fun0020_ip = 58; continue _fun0020 }
 25:
            var6 = var5.context;
            var3 = var6.destroy;
            var3 = var3.bind(var6)();
            var3 = new Array(0);
            var5['results'] = var3;
            var3 = _closure1_slot21;
            var3 = delete var3[var4];
 58:
            var3 = _closure1_slot20;
            var3 = delete var3[var4];
            _closure1_slot19 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_EDITOR_STATE_CLEAR'] = var10;
    var2['CHANNEL_CREATE'] = var7;
    var2['CHANNEL_DELETE'] = var7;
    var7 = function handleMiscActions() {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var3 = _closure1_slot19;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0021_ip = 31; continue _fun0021 }
 16:
            var4 = _closure1_slot34;
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
        var2 = _closure1_slot34;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['SEARCH_SCREEN_OPEN'] = var7;
    var7 = function handleChannelSelect(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg1;
            var7 = var1.channelId;
            var1 = _closure1_slot19;
            var3 = null;
            if(!(var3 != var1)) { _fun0022_ip = 241; continue _fun0022 }
 24:
            var1 = _closure1_slot19;
            var4 = var1.type;
            var1 = _closure1_slot17;
            var1 = var1.DMS;
            if(!(var4 === var1)) { _fun0022_ip = 87; continue _fun0022 }
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
            if(var1) { _fun0022_ip = 91; continue _fun0022 }
 87:
            var1 = false;
            return var1;
 91:
            var5 = _closure1_slot8;
            var1 = var5.getChannel;
            var5 = var1.bind(var5)(var7);
            if(!(var3 != var5)) { _fun0022_ip = 237; continue _fun0022 }
 112:
            var1 = var5.isPrivate;
            var1 = var1.bind(var5)();
            if(!var1) { _fun0022_ip = 237; continue _fun0022 }
 125:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var6 = var5.bind(var4)(var1);
            var5 = var6.getSearchContextId;
            var1 = _closure1_slot19;
            var5 = var5.bind(var6)(var1);
            var1 = _closure1_slot20;
            var1 = var1[var5];
            if(!(var3 != var1)) { _fun0022_ip = 233; continue _fun0022 }
 169:
            var1 = var1.mode;
            var3 = var1.type;
            var5 = var1.filter;
            var1 = _closure1_slot14;
            var1 = var1.FILTER;
            var1 = var3 === var1;
            if(!var1) { _fun0022_ip = 215; continue _fun0022 }
 201:
            var3 = _closure1_slot16;
            var3 = var3.FILTER_IN;
            var1 = var5 === var3;
 215:
            if(!var1) { _fun0022_ip = 231; continue _fun0022 }
 218:
            var3 = _closure1_slot34;
            var2 = _closure1_slot19;
            var1 = var3.bind(var4)(var2);
 231:
            return var1;
 233:
            var1 = false;
            return var1;
 237:
            var1 = false;
            return var1;
 241:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var7;
    var7 = function handleLogOut() {
        var1 = global;
        var4 = var1.Object;
        var3 = var4.keys;
        var2 = _closure1_slot20;
        var3 = var3.bind(var4)(var2);
        var2 = var3.forEach;
        var1 = _closure1_slot33;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var7;
    var7 = function handleClearHistory(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var2 = _closure1_slot33;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['SEARCH_HISTORY_WEB_CLEAR_ITEMS'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var14 = var7;
    var12 = var2;
    var2 = new var14[var9](var13, var12, var11);
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