// app/stores/SearchAutocompleteStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
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
            if(var2) { _fun0002_ip = 344; continue _fun0002 }
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
 344:
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
            var10 = var1.searchId;
            var9 = var1.query;
            var6 = var1.mode;
            var4 = var1.tokens;
            var5 = var1.cursorScope;
            var2 = var1.autocompletes;
            var1 = _closure1_slot21;
            var1 = var1[var10];
            var3 = null;
            if(!(var3 == var1)) { _fun0005_ip = 125; continue _fun0005 }
 54:
            var7 = {};
            var1 = new Array(0);
            var7['results'] = var1;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 15;
            var11 = var11[var1];
            var1 = undefined;
            var12 = var12.bind(var1)(var11);
            var11 = var12.getUserSearchContext;
            var13 = _closure1_slot28;
            var1 = var13.bind;
            var1 = var1.bind(var13)(var3, var10);
            var1 = var11.bind(var12)(var1);
            var7['context'] = var1;
            var1 = _closure1_slot21;
            var1[var10] = var7;
 125:
            var1 = {};
            var10 = var3 != var9;
            var7 = '';
            if(!var10) { _fun0005_ip = 141; continue _fun0005 }
 138:
            var7 = var9;
 141:
            var1['query'] = var7;
            if(!(var3 == var6)) { _fun0005_ip = 182; continue _fun0005 }
 149:
            var7 = {'type': null, 'filter': null, 'token': null};
            var8 = _closure1_slot15;
            var8 = var8.EMPTY;
            var7['type'] = var8;
            var6 = var7;
 182:
            var1['mode'] = var6;
            if(!(var3 == var4)) { _fun0005_ip = 194; continue _fun0005 }
 190:
            var4 = new Array(0);
 194:
            var1['tokens'] = var4;
            var6 = var3 != var5;
            var4 = null;
            if(!var6) { _fun0005_ip = 211; continue _fun0005 }
 208:
            var4 = var5;
 211:
            var1['cursorScope'] = var4;
            if(!(var3 == var2)) { _fun0005_ip = 224; continue _fun0005 }
 220:
            var2 = new Array(0);
 224:
            var1['autocompletes'] = var2;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function handleUserSearchResults(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var1 = arg2;
            var8 = var1.results;
            var2 = _closure1_slot21;
            var5 = var2[var4];
            var2 = _closure1_slot20;
            var2 = var2[var4];
            var13 = null;
            if(!(var13 != var5)) { _fun0006_ip = 414; continue _fun0006 }
 40:
            if(!(var13 != var2)) { _fun0006_ip = 414; continue _fun0006 }
 47:
            var3 = var2.mode;
            var7 = var3.type;
            var6 = var3.filter;
            var3 = _closure1_slot15;
            var3 = var3.EMPTY;
            if(!(var7 !== var3)) { _fun0006_ip = 414; continue _fun0006 }
 79:
            var3 = _closure1_slot15;
            var3 = var3.FILTER;
            if(!(var7 === var3)) { _fun0006_ip = 124; continue _fun0006 }
 93:
            var3 = _closure1_slot17;
            var3 = var3.FILTER_FROM;
            if(!(var6 !== var3)) { _fun0006_ip = 124; continue _fun0006 }
 107:
            var3 = _closure1_slot17;
            var3 = var3.FILTER_MENTIONS;
            if(!(var6 === var3)) { _fun0006_ip = 414; continue _fun0006 }
 124:
            var3 = var2.mode;
            var6 = var3.type;
            var3 = _closure1_slot15;
            var3 = var3.FILTER;
            var12 = 3;
            if(!(var6 === var3)) { _fun0006_ip = 155; continue _fun0006 }
 151:
            var12 = _closure1_slot22;
 155:
            var6 = undefined;
            if(!(var12 === var6)) { _fun0006_ip = 164; continue _fun0006 }
 161:
            var12 = 10;
 164:
            var3 = new Array(0);
            var7 = _closure1_slot25;
            var11 = var7.bind(var6)(var8);
            var8 = var11.bind(var6)();
            var7 = var8.done;
            var10 = 16;
            var9 = var8;
            var8 = undefined;
            if(var7) { _fun0006_ip = 308; continue _fun0006 }
 197:
            var7 = var9.value;
            var14 = var3.length;
            if(!(!(var14 >= var12))) { _fun0006_ip = 308; continue _fun0006 }
 211:
            var15 = _closure1_slot14;
            var14 = var15.getUser;
            var7 = var7.id;
            var16 = var14.bind(var15)(var7);
            if(!(var13 != var16)) { _fun0006_ip = 293; continue _fun0006 }
 235:
            var14 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var14 = var14.bind(var6)(var7);
            var7 = var14.getUserTag;
            var7 = var7.bind(var14)(var16);
            var8 = var7;
            if(!(var13 != var7)) { _fun0006_ip = 293; continue _fun0006 }
 270:
            var15 = var3.push;
            var14 = {};
            var14['text'] = var7;
            var14['user'] = var16;
            var14 = var15.bind(var3)(var14);
            var8 = var7;
 293:
            var14 = var11.bind(var6)();
            var7 = var14.done;
            var9 = var14;
            if(!var7) { _fun0006_ip = 197; continue _fun0006 }
 308:
            var5['results'] = var3;
            var11 = var2.query;
            var10 = var2.mode;
            var9 = var2.tokens;
            var8 = var2.cursorScope;
            var2 = var2.autocompletes;
            var2 = _closure1_slot32;
            var7 = var2.bind(var6)(var4, var10, var9);
            var3 = _closure1_slot20;
            var5 = _closure1_slot27;
            var2 = {};
            var2['searchId'] = var4;
            var2['query'] = var11;
            var2['mode'] = var10;
            var2['tokens'] = var9;
            var2['cursorScope'] = var8;
            var2['autocompletes'] = var7;
            var2 = var5.bind(var6)(var2);
            var3[var4] = var2;
            var2 = _closure1_slot23;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
 414:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function generateFilterResults(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var5 = var1.filter;
            var7 = var1.token;
            var12 = var1.searchId;
            var14 = var1.maxResults;
            var10 = undefined;
            if(!(var14 === var10)) { _fun0007_ip = 37; continue _fun0007 }
 34:
            var14 = 10;
 37:
            var13 = var1.tokens;
            var _closure2_slot0 = var10;
            var1 = null;
            if(!(var1 != var5)) { _fun0007_ip = 545; continue _fun0007 }
 56:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var4 = var4.bind(var10)(var3);
            var3 = var4.getSearchType;
            var6 = var3.bind(var4)(var12);
            var4 = var1 == var7;
            var3 = undefined;
            if(var4) { _fun0007_ip = 128; continue _fun0007 }
 99:
            var4 = var7.getFullMatch;
            var9 = var4.bind(var7)();
            var4 = var1 == var9;
            var3 = undefined;
            if(var4) { _fun0007_ip = 128; continue _fun0007 }
 118:
            var4 = var9.trim;
            var3 = var4.bind(var9)();
 128:
            var4 = var1 != var3;
            var9 = '';
            if(!var4) { _fun0007_ip = 142; continue _fun0007 }
 139:
            var9 = var3;
 142:
            var3 = _closure1_slot17;
            var3 = var3.FILTER_FROM;
            var3 = var5 === var3;
            if(var3) { _fun0007_ip = 173; continue _fun0007 }
 159:
            var4 = _closure1_slot17;
            var4 = var4.FILTER_MENTIONS;
            var3 = var5 === var4;
 173:
            var4 = _closure1_slot18;
            var4 = var4.GUILD;
            if(!(var6 === var4)) { _fun0007_ip = 190; continue _fun0007 }
 187:
            if(var3) { _fun0007_ip = 275; continue _fun0007 }
 190:
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 19;
            var4 = var11[var4];
            var4 = var6.bind(var10)(var4);
            var4 = var4[var5];
            var6 = var1 == var4;
            var11 = undefined;
            if(var6) { _fun0007_ip = 229; continue _fun0007 }
 223:
            var11 = var4.getAutocompletions;
 229:
            if(!(var1 == var11)) { _fun0007_ip = 239; continue _fun0007 }
 233:
            var6 = new Array(0);
            _fun0007_ip = 273; continue _fun0007;
 239:
            var4 = {};
            var4['query'] = var9;
            var4['searchId'] = var12;
            if(!(var1 == var14)) { _fun0007_ip = 258; continue _fun0007 }
 254:
            var14 = _closure1_slot22;
 258:
            var4['maxResults'] = var14;
            var4['tokens'] = var13;
            var6 = var11.bind(var10)(var4);
 273:
            _fun0007_ip = 387; continue _fun0007;
 275:
            var4 = _closure1_slot21;
            var4 = var4[var12];
            var11 = var1 == var4;
            var6 = null;
            if(var11) { _fun0007_ip = 387; continue _fun0007 }
 292:
            if(!(var1 != var7)) { _fun0007_ip = 307; continue _fun0007 }
 296:
            var11 = var9.length;
            var7 = 0;
            if(!(var7 === var11)) { _fun0007_ip = 381; continue _fun0007 }
 307:
            var11 = _closure1_slot12;
            var7 = var11.getCurrentlySelectedChannelId;
            var13 = var7.bind(var11)(var12);
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 18;
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
                var2 = 16;
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
 381:
            var6 = var4.results;
 387:
            var4 = var6;
            if(!(var1 != var4)) { _fun0007_ip = 506; continue _fun0007 }
 394:
            var4 = var6;
            if(!var3) { _fun0007_ip = 506; continue _fun0007 }
 400:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 19;
            var3 = var11[var3];
            var7 = var7.bind(var10)(var3);
            var3 = var7.isMeAutcompleteAnswer;
            var3 = var3.bind(var7)(var9);
            var4 = var6;
            if(!var3) { _fun0007_ip = 506; continue _fun0007 }
 437:
            var7 = _closure1_slot14;
            var3 = var7.getCurrentUser;
            var7 = var3.bind(var7)();
            _closure2_slot0 = var7;
            var4 = var6;
            if(!(var1 != var7)) { _fun0007_ip = 506; continue _fun0007 }
 461:
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
            var8 = _closure1_slot19;
            var3['text'] = var8;
            var3['user'] = var7;
            var3 = var6.bind(var2)(var3);
            var4 = var2;
 506:
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0007_ip = 543; continue _fun0007 }
 515:
            var6 = var4.length;
            var3 = 0;
            var2 = null;
            if(!(var3 !== var6)) { _fun0007_ip = 543; continue _fun0007 }
 528:
            var3 = {};
            var3['group'] = var5;
            var3['results'] = var4;
            var2 = var3;
 543:
            return var2;
 545:
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
            var2 = 13;
            var2 = var7[var2];
            var4 = undefined;
            var9 = var6.bind(var4)(var2);
            var8 = var9.getSearchType;
            var2 = arg2;
            var9 = var8.bind(var9)(var2);
            var2 = 14;
            var2 = var7[var2];
            var8 = var6.bind(var4)(var2);
            var2 = var8.isChannelFilterSupported;
            var10 = var2.bind(var8)(var9);
            var2 = global;
            var9 = var2.Map;
            var2 = _closure1_slot17;
            var2 = var2.FILTER_FROM;
            var8 = new Array(2);
            var8[0] = var2;
            var2 = _closure1_slot13;
            var2 = var2.hidePersonalInformation;
            var2 = !var2;
            var8[1] = var2;
            var2 = new Array(8);
            var2[0] = var8;
            var8 = _closure1_slot17;
            var11 = var8.FILTER_MENTIONS;
            var8 = new Array(2);
            var8[0] = var11;
            var11 = _closure1_slot13;
            var11 = var11.hidePersonalInformation;
            var11 = !var11;
            var8[1] = var11;
            var2[1] = var8;
            var8 = _closure1_slot17;
            var11 = var8.FILTER_HAS;
            var8 = new Array(2);
            var8[0] = var11;
            var11 = true;
            var8[1] = var11;
            var2[2] = var8;
            var8 = _closure1_slot17;
            var12 = var8.FILTER_BEFORE;
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var11;
            var2[3] = var8;
            var8 = _closure1_slot17;
            var12 = var8.FILTER_AFTER;
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var11;
            var2[4] = var8;
            var8 = _closure1_slot17;
            var12 = var8.FILTER_ON;
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var11;
            var2[5] = var8;
            var8 = _closure1_slot17;
            var11 = var8.FILTER_IN;
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var10;
            var2[6] = var8;
            var8 = _closure1_slot17;
            var10 = var8.FILTER_PINNED;
            var8 = new Array(2);
            var8[0] = var10;
            var10 = false;
            var8[1] = var10;
            var2[7] = var8;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var14 = var8;
            var13 = var2;
            var2 = new var14[var9](var13, var12);
            var2 = var2 instanceof Object ? var2 : var8;
            var _closure2_slot0 = var2;
            var2 = 19;
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
            var3 = _closure1_slot16;
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
            if(!var3) { _fun0011_ip = 696; continue _fun0011 }
 84:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 13;
            var3 = var10[var3];
            var13 = undefined;
            var9 = var9.bind(var13)(var3);
            var3 = var9.getSearchType;
            var11 = var3.bind(var9)(var5);
            var3 = _closure1_slot17;
            var3 = var3.FILTER_HAS;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = _closure1_slot13;
            var3 = var3.hidePersonalInformation;
            if(var3) { _fun0011_ip = 191; continue _fun0011 }
 151:
            var10 = var9.push;
            var3 = _closure1_slot17;
            var3 = var3.FILTER_FROM;
            var3 = var10.bind(var9)(var3);
            var10 = var9.push;
            var3 = _closure1_slot17;
            var3 = var3.FILTER_MENTIONS;
            var3 = var10.bind(var9)(var3);
 191:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 14;
            var3 = var12[var3];
            var10 = var10.bind(var13)(var3);
            var3 = var10.isChannelFilterSupported;
            var3 = var3.bind(var10)(var11);
            if(!var3) { _fun0011_ip = 245; continue _fun0011 }
 225:
            var10 = var9.push;
            var3 = _closure1_slot17;
            var3 = var3.FILTER_IN;
            var3 = var10.bind(var9)(var3);
 245:
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
                    var4['searchId'] = var3;
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
            if(!var2) { _fun0011_ip = 287; continue _fun0011 }
 277:
            var2 = var6.getFullMatch;
            var9 = var2.bind(var6)();
 287:
            var2 = var9.trim;
            var15 = var2.bind(var9)();
            var9 = var4 != var15;
            var2 = undefined;
            if(!var9) { _fun0011_ip = 691; continue _fun0011 }
 309:
            var2 = undefined;
            if(!(var7 !== var15)) { _fun0011_ip = 691; continue _fun0011 }
 318:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var12 = 19;
            var7 = var7[var12];
            var9 = var9.bind(var13)(var7);
            var7 = _closure1_slot17;
            var7 = var7.FILTER_BEFORE;
            var11 = var9[var7];
            var7 = var4 == var11;
            var10 = undefined;
            if(var7) { _fun0011_ip = 421; continue _fun0011 }
 361:
            var7 = var11.getAutocompletions;
            var7 = var4 == var7;
            var10 = undefined;
            if(var7) { _fun0011_ip = 421; continue _fun0011 }
 376:
            var9 = var11.getAutocompletions;
            var7 = {};
            var7['query'] = var15;
            var7['searchId'] = var5;
            var14 = 1;
            var7['maxResults'] = var14;
            var9 = var9.bind(var11)(var7);
            var7 = var4 == var9;
            var10 = undefined;
            if(var7) { _fun0011_ip = 421; continue _fun0011 }
 415:
            var7 = 0;
            var10 = var9[var7];
 421:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var9 = var9.bind(var13)(var7);
            var7 = _closure1_slot17;
            var7 = var7.FILTER_ON;
            var14 = var9[var7];
            var7 = var4 == var14;
            var11 = undefined;
            if(var7) { _fun0011_ip = 521; continue _fun0011 }
 461:
            var7 = var14.getAutocompletions;
            var7 = var4 == var7;
            var11 = undefined;
            if(var7) { _fun0011_ip = 521; continue _fun0011 }
 476:
            var9 = var14.getAutocompletions;
            var7 = {};
            var7['query'] = var15;
            var7['searchId'] = var5;
            var16 = 1;
            var7['maxResults'] = var16;
            var9 = var9.bind(var14)(var7);
            var7 = var4 == var9;
            var11 = undefined;
            if(var7) { _fun0011_ip = 521; continue _fun0011 }
 515:
            var7 = 0;
            var11 = var9[var7];
 521:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var9 = var9.bind(var13)(var7);
            var7 = _closure1_slot17;
            var7 = var7.FILTER_AFTER;
            var14 = var9[var7];
            var7 = var4 == var14;
            var9 = undefined;
            if(var7) { _fun0011_ip = 621; continue _fun0011 }
 561:
            var7 = var14.getAutocompletions;
            var7 = var4 == var7;
            var9 = undefined;
            if(var7) { _fun0011_ip = 621; continue _fun0011 }
 576:
            var12 = var14.getAutocompletions;
            var7 = {};
            var7['query'] = var15;
            var7['searchId'] = var5;
            var15 = 1;
            var7['maxResults'] = var15;
            var12 = var12.bind(var14)(var7);
            var7 = var4 == var12;
            var9 = undefined;
            if(var7) { _fun0011_ip = 621; continue _fun0011 }
 615:
            var7 = 0;
            var9 = var12[var7];
 621:
            var7 = var4 == var10;
            var2 = null;
            if(var7) { _fun0011_ip = 691; continue _fun0011 }
 630:
            var7 = new Array(1);
            var7[0] = var10;
            if(!(var4 != var11)) { _fun0011_ip = 652; continue _fun0011 }
 642:
            var10 = var7.push;
            var10 = var10.bind(var7)(var11);
 652:
            if(!(var4 != var9)) { _fun0011_ip = 666; continue _fun0011 }
 656:
            var4 = var7.push;
            var4 = var4.bind(var7)(var9);
 666:
            var4 = {};
            var8 = _closure1_slot16;
            var8 = var8.DATES;
            var4['group'] = var8;
            var4['results'] = var7;
            var2 = var4;
 691:
            var2 = var3.bind(var1)(var2);
 696:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 14;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var7.bind(var4)(var3);
            var3 = var7.getTotalResults;
            var7 = var3.bind(var7)(var1);
            var3 = 5;
            if(!(var7 < var3)) { _fun0011_ip = 759; continue _fun0011 }
 739:
            var3 = var1.push;
            var2 = _closure1_slot30;
            var2 = var2.bind(var4)(var6, var5);
            var2 = var3.bind(var1)(var2);
 759:
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
            var1 = _closure1_slot15;
            var1 = var1.FILTER;
            if(!(var4 !== var1)) { _fun0013_ip = 130; continue _fun0013 }
 35:
            var4 = var9.type;
            var1 = _closure1_slot15;
            var1 = var1.FILTER_ALL;
            if(!(var4 !== var1)) { _fun0013_ip = 109; continue _fun0013 }
 54:
            var5 = var9.type;
            var1 = _closure1_slot15;
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
            var5['searchId'] = var8;
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
    var10 = function handleChannelChange() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 14;
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
            if(!(var1 != var2)) { _fun0014_ip = 116; continue _fun0014 }
 20:
            var9 = var2.query;
            var8 = var2.mode;
            var6 = var2.tokens;
            var1 = var2.cursorScope;
            var7 = var2.autocompletes;
            var2 = _closure1_slot20;
            var5 = _closure1_slot27;
            var4 = {};
            var4['searchId'] = var3;
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
                    var3 = _closure1_slot16;
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
 116:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function rebuildAutocompleteResults(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var4 = arg1;
            var3 = null;
            if(!(var3 != var4)) { _fun0016_ip = 116; continue _fun0016 }
 9:
            var2 = _closure1_slot20;
            var2 = var2[var4];
            if(!(var3 != var2)) { _fun0016_ip = 116; continue _fun0016 }
 24:
            var2 = _closure1_slot20;
            var2 = var2[var4];
            var9 = var2.query;
            var8 = var2.mode;
            var7 = var2.tokens;
            var6 = var2.cursorScope;
            var3 = _closure1_slot20;
            var5 = _closure1_slot27;
            var2 = {};
            var2['searchId'] = var4;
            var2['query'] = var9;
            var2['mode'] = var8;
            var2['tokens'] = var7;
            var2['cursorScope'] = var6;
            var6 = _closure1_slot32;
            var1 = undefined;
            var6 = var6.bind(var1)(var4, var8, var7);
            var2['autocompletes'] = var6;
            var2 = var5.bind(var1)(var2);
            var3[var4] = var2;
            return var1;
 116:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var7 = function handleMiscActions() {
        var3 = _closure1_slot34;
        var2 = _closure1_slot11;
        var1 = var2.getCurrentSearchId;
        var2 = var1.bind(var2)();
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var2);
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
    var9 = var8.bind(var1)(var9);
    var _closure1_slot14 = var9;
    var9 = 12;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var11 = var9.SearchPopoutModes;
    var _closure1_slot15 = var11;
    var11 = var9.SearchAutocompleteGroups;
    var _closure1_slot16 = var11;
    var11 = var9.SearchTokenTypes;
    var _closure1_slot17 = var11;
    var11 = var9.SearchTypes;
    var _closure1_slot18 = var11;
    var9 = var9.ME;
    var _closure1_slot19 = var9;
    var9 = {};
    var _closure1_slot20 = var9;
    var9 = {};
    var _closure1_slot21 = var9;
    var _closure1_slot22 = var2;
    var2 = 20;
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
            var11 = _closure1_slot13;
            var10 = _closure1_slot8;
            var9 = _closure1_slot10;
            var8 = _closure1_slot12;
            var13 = var7;
            var1 = var13[var6](var12, var11, var10, var9, var8, var7);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var2 = arg1;
                var1 = _closure1_slot20;
                var1 = var1[var2];
                var4 = null;
                if(!(var4 == var1)) { _fun0018_ip = 38; continue _fun0018 }
 20:
                var4 = _closure1_slot27;
                var3 = {};
                var3['searchId'] = var2;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
 38:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var9);
    var2 = 'SearchAutocompleteStore';
    var9['displayName'] = var2;
    var2 = 21;
    var2 = var6[var2];
    var14 = var8.bind(var1)(var2);
    var2 = {};
    var11 = function handleQueryUpdate(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var4 = var1.searchId;
            var9 = var1.tokens;
            var8 = var1.cursorScope;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var7 = var5[var1];
            var6 = undefined;
            var10 = var3.bind(var6)(var7);
            var7 = var10.getQueryFromTokens;
            var11 = var7.bind(var10)(var9);
            var1 = var5[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.getAutocompleteMode;
            var10 = var1.bind(var3)(var8, var9);
            var1 = _closure1_slot20;
            var12 = var1[var4];
            var3 = null;
            if(!(var3 == var12)) { _fun0019_ip = 94; continue _fun0019 }
 92:
            var12 = {};
 94:
            var1 = _closure1_slot21;
            var5 = var1[var4];
            var1 = var12.query;
            if(!(var11 === var1)) { _fun0019_ip = 152; continue _fun0019 }
 111:
            var1 = var12.mode;
            if(!(var3 != var1)) { _fun0019_ip = 139; continue _fun0019 }
 120:
            var1 = var12.mode;
            var7 = var1.filter;
            var1 = var10.filter;
            if(!(var7 === var1)) { _fun0019_ip = 152; continue _fun0019 }
 139:
            var7 = var12.autocompletes;
            var1 = false;
            _fun0019_ip = 484; continue _fun0019;
 152:
            var14 = var10.type;
            var13 = _closure1_slot15;
            var13 = var13.EMPTY;
            if(!(var14 !== var13)) { _fun0019_ip = 442; continue _fun0019 }
 174:
            var14 = var10.type;
            var13 = _closure1_slot15;
            var13 = var13.FILTER;
            if(!(var14 === var13)) { _fun0019_ip = 234; continue _fun0019 }
 193:
            var14 = var10.filter;
            var13 = _closure1_slot17;
            var13 = var13.FILTER_FROM;
            if(!(var14 !== var13)) { _fun0019_ip = 234; continue _fun0019 }
 212:
            var14 = var10.filter;
            var13 = _closure1_slot17;
            var13 = var13.FILTER_MENTIONS;
            if(!(var14 === var13)) { _fun0019_ip = 442; continue _fun0019 }
 234:
            var14 = var3 != var5;
            var7 = undefined;
            var1 = true;
            if(!var14) { _fun0019_ip = 484; continue _fun0019 }
 248:
            var17 = var10.token;
            if(!(var3 != var17)) { _fun0019_ip = 289; continue _fun0019 }
 258:
            var14 = var17.getFullMatch;
            var15 = var14.bind(var17)();
            var14 = var15.trim;
            var14 = var14.bind(var15)();
            var15 = var14.length;
            var14 = 0;
            if(!(!(var15 > var14))) { _fun0019_ip = 322; continue _fun0019 }
 289:
            var15 = var5.context;
            var14 = var15.clearQuery;
            var14 = var14.bind(var15)();
            var14 = _closure1_slot32;
            var7 = var14.bind(var6)(var4, var10, var9);
            var1 = true;
            _fun0019_ip = 484; continue _fun0019;
 322:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 17;
            var13 = var15[var13];
            var16 = var14.bind(var6)(var13);
            var15 = var16.requestMembers;
            var13 = var17.getFullMatch;
            var14 = var13.bind(var17)();
            var13 = var14.trim;
            var14 = var13.bind(var14)();
            var13 = _closure1_slot22;
            var13 = var15.bind(var16)(var4, var14, var13);
            var15 = var5.context;
            var14 = var15.setQuery;
            var13 = {};
            var16 = var17.getFullMatch;
            var17 = var16.bind(var17)();
            var16 = var17.trim;
            var16 = var16.bind(var17)();
            var13['query'] = var16;
            var16 = {};
            var16['guild'] = var4;
            var13['filters'] = var16;
            var13 = var14.bind(var15)(var13);
            var7 = var12.autocompletes;
            var1 = false;
            _fun0019_ip = 484; continue _fun0019;
 442:
            if(!(var3 != var5)) { _fun0019_ip = 471; continue _fun0019 }
 446:
            var12 = var5.context;
            var3 = var12.clearQuery;
            var3 = var3.bind(var12)();
            var3 = new Array(0);
            var5['results'] = var3;
 471:
            var3 = _closure1_slot32;
            var7 = var3.bind(var6)(var4, var10, var9);
            var1 = true;
 484:
            var3 = _closure1_slot20;
            var5 = _closure1_slot27;
            var2 = {};
            var2['searchId'] = var4;
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
    var2['SEARCH_AUTOCOMPLETE_QUERY_UPDATE'] = var11;
    var11 = function clearSearchState(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var2 = var1.searchId;
            var3 = _closure1_slot21;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0020_ip = 59; continue _fun0020 }
 26:
            var5 = var4.context;
            var3 = var5.destroy;
            var3 = var3.bind(var5)();
            var3 = new Array(0);
            var4['results'] = var3;
            var3 = _closure1_slot21;
            var3 = delete var3[var2];
 59:
            var1 = _closure1_slot20;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_EDITOR_STATE_CLEAR'] = var11;
    var2['CHANNEL_CREATE'] = var10;
    var2['CHANNEL_DELETE'] = var10;
    var2['STREAMER_MODE_UPDATE'] = var7;
    var2['SEARCH_SCREEN_OPEN'] = var7;
    var7 = function handleClearHistory(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var3 = var1.searchId;
            var1 = null;
            if(!(var1 == var3)) { _fun0021_ip = 56; continue _fun0021 }
 15:
            var1 = global;
            var5 = var1.Object;
            var4 = var5.keys;
            var2 = _closure1_slot20;
            var4 = var4.bind(var5)(var2);
            var2 = var4.forEach;
            var1 = _closure1_slot33;
            var1 = var2.bind(var4)(var1);
            _fun0021_ip = 70; continue _fun0021;
 56:
            var2 = _closure1_slot33;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 70:
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_CLEAR_HISTORY'] = var7;
    var7 = function handleChannelSelect(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg1;
            var7 = var1.channelId;
            var3 = _closure1_slot11;
            var1 = var3.getCurrentSearchId;
            var4 = var1.bind(var3)();
            var5 = null;
            if(!(var5 != var4)) { _fun0022_ip = 199; continue _fun0022 }
 34:
            var1 = _closure1_slot18;
            var1 = var1.DMS;
            if(!(var4 === var1)) { _fun0022_ip = 84; continue _fun0022 }
 48:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = undefined;
            var6 = var6.bind(var3)(var1);
            var1 = var6.isChannelFilterSupported;
            var1 = var1.bind(var6)(var4);
            if(var1) { _fun0022_ip = 88; continue _fun0022 }
 84:
            var1 = false;
            return var1;
 88:
            var6 = _closure1_slot8;
            var1 = var6.getChannel;
            var6 = var1.bind(var6)(var7);
            if(!(var5 != var6)) { _fun0022_ip = 195; continue _fun0022 }
 106:
            var1 = var6.isPrivate;
            var1 = var1.bind(var6)();
            if(!var1) { _fun0022_ip = 195; continue _fun0022 }
 119:
            var1 = _closure1_slot20;
            var1 = var1[var4];
            if(!(var5 != var1)) { _fun0022_ip = 191; continue _fun0022 }
 131:
            var1 = var1.mode;
            var5 = var1.type;
            var6 = var1.filter;
            var1 = _closure1_slot15;
            var1 = var1.FILTER;
            var1 = var5 === var1;
            if(!var1) { _fun0022_ip = 177; continue _fun0022 }
 163:
            var5 = _closure1_slot17;
            var5 = var5.FILTER_IN;
            var1 = var6 === var5;
 177:
            if(!var1) { _fun0022_ip = 189; continue _fun0022 }
 180:
            var2 = _closure1_slot34;
            var1 = var2.bind(var3)(var4);
 189:
            return var1;
 191:
            var1 = false;
            return var1;
 195:
            var1 = false;
            return var1;
 199:
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
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var15 = var7;
    var13 = var2;
    var2 = new var15[var9](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot23 = var2;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/SearchAutocompleteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();