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
    var1 = function stateFactory(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            if(!(var3 == var1)) { _fun0002_ip = 125; continue _fun0002 }
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
            var11 = var12.getSearchContext;
            var13 = _closure1_slot26;
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
            if(!var10) { _fun0002_ip = 141; continue _fun0002 }
 138:
            var7 = var9;
 141:
            var1['query'] = var7;
            if(!(var3 == var6)) { _fun0002_ip = 182; continue _fun0002 }
 149:
            var7 = {'type': null, 'filter': null, 'token': null};
            var8 = _closure1_slot15;
            var8 = var8.EMPTY;
            var7['type'] = var8;
            var6 = var7;
 182:
            var1['mode'] = var6;
            if(!(var3 == var4)) { _fun0002_ip = 194; continue _fun0002 }
 190:
            var4 = new Array(0);
 194:
            var1['tokens'] = var4;
            var6 = var3 != var5;
            var4 = null;
            if(!var6) { _fun0002_ip = 211; continue _fun0002 }
 208:
            var4 = var5;
 211:
            var1['cursorScope'] = var4;
            if(!(var3 == var2)) { _fun0002_ip = 224; continue _fun0002 }
 220:
            var2 = new Array(0);
 224:
            var1['autocompletes'] = var2;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function handleUserSearchResults(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = arg2;
            var8 = var1.results;
            var2 = _closure1_slot21;
            var5 = var2[var4];
            var2 = _closure1_slot20;
            var2 = var2[var4];
            var3 = null;
            if(!(var3 != var5)) { _fun0003_ip = 277; continue _fun0003 }
 40:
            if(!(var3 != var2)) { _fun0003_ip = 277; continue _fun0003 }
 47:
            var3 = var2.mode;
            var7 = var3.type;
            var6 = var3.filter;
            var3 = _closure1_slot15;
            var3 = var3.EMPTY;
            if(!(var7 !== var3)) { _fun0003_ip = 277; continue _fun0003 }
 79:
            var3 = _closure1_slot15;
            var3 = var3.FILTER;
            if(!(var7 === var3)) { _fun0003_ip = 124; continue _fun0003 }
 93:
            var3 = _closure1_slot17;
            var3 = var3.FILTER_FROM;
            if(!(var6 !== var3)) { _fun0003_ip = 124; continue _fun0003 }
 107:
            var3 = _closure1_slot17;
            var3 = var3.FILTER_MENTIONS;
            if(!(var6 === var3)) { _fun0003_ip = 277; continue _fun0003 }
 124:
            var3 = var2.mode;
            var6 = var3.type;
            var3 = _closure1_slot15;
            var3 = var3.FILTER;
            var7 = 3;
            if(!(var6 === var3)) { _fun0003_ip = 155; continue _fun0003 }
 151:
            var7 = _closure1_slot22;
 155:
            var3 = function fixUserResults(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = arg1;
                    var2 = arguments[1];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0004_ip = 15; continue _fun0004 }
 12:
                    var2 = 10;
 15:
                    var4 = var5.reduce;
                    var3 = function(arg1, arg2) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = arg1;
                            var4 = _closure1_slot14;
                            var3 = var4.getUser;
                            var2 = arg2;
                            var2 = var2.id;
                            var4 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 != var4)) { _fun0005_ip = 97; continue _fun0005 }
 35:
                            var3 = var1.push;
                            var2 = {};
                            var6 = var4.id;
                            var2['id'] = var6;
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var5 = 16;
                            var6 = var6[var5];
                            var5 = undefined;
                            var6 = var7.bind(var5)(var6);
                            var5 = var6.getUserTag;
                            var5 = var5.bind(var6)(var4);
                            var2['text'] = var5;
                            var2['user'] = var4;
                            var2 = var3.bind(var1)(var2);
 97:
                            return var1;
                        }
                    };
                    var1 = new Array(0);
                    var1 = var4.bind(var5)(var3, var1);
                    var3 = var1.length;
                    if(!(var3 > var2)) { _fun0004_ip = 55; continue _fun0004 }
 49:
                    var1['length'] = var2;
 55:
                    return var1;
                }
            };
            var6 = undefined;
            var3 = var3.bind(var6)(var8, var7);
            var5['results'] = var3;
            var11 = var2.query;
            var10 = var2.mode;
            var9 = var2.tokens;
            var8 = var2.cursorScope;
            var2 = var2.autocompletes;
            var2 = _closure1_slot30;
            var7 = var2.bind(var6)(var4, var10);
            var3 = _closure1_slot20;
            var5 = _closure1_slot25;
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
 277:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function generateFilterResults(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var7 = arg2;
            var13 = arg3;
            var11 = arguments[3];
            var10 = undefined;
            if(!(var11 === var10)) { _fun0006_ip = 23; continue _fun0006 }
 20:
            var11 = 10;
 23:
            var _closure2_slot0 = var10;
            var1 = null;
            if(!(var1 != var5)) { _fun0006_ip = 497; continue _fun0006 }
 36:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var4 = var4.bind(var10)(var3);
            var3 = var4.getSearchType;
            var6 = var3.bind(var4)(var13);
            var4 = var1 == var7;
            var3 = undefined;
            if(var4) { _fun0006_ip = 108; continue _fun0006 }
 79:
            var4 = var7.getFullMatch;
            var9 = var4.bind(var7)();
            var4 = var1 == var9;
            var3 = undefined;
            if(var4) { _fun0006_ip = 108; continue _fun0006 }
 98:
            var4 = var9.trim;
            var3 = var4.bind(var9)();
 108:
            var4 = var1 != var3;
            var9 = '';
            if(!var4) { _fun0006_ip = 122; continue _fun0006 }
 119:
            var9 = var3;
 122:
            var3 = _closure1_slot17;
            var3 = var3.FILTER_FROM;
            var3 = var5 === var3;
            if(var3) { _fun0006_ip = 153; continue _fun0006 }
 139:
            var4 = _closure1_slot17;
            var4 = var4.FILTER_MENTIONS;
            var3 = var5 === var4;
 153:
            var4 = _closure1_slot18;
            var4 = var4.GUILD;
            if(!(var6 === var4)) { _fun0006_ip = 170; continue _fun0006 }
 167:
            if(var3) { _fun0006_ip = 236; continue _fun0006 }
 170:
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var4 = 19;
            var4 = var12[var4];
            var4 = var6.bind(var10)(var4);
            var6 = var4[var5];
            var12 = var1 == var6;
            var4 = undefined;
            if(var12) { _fun0006_ip = 209; continue _fun0006 }
 203:
            var4 = var6.getAutocompletions;
 209:
            if(!(var1 == var4)) { _fun0006_ip = 219; continue _fun0006 }
 213:
            var6 = new Array(0);
            _fun0006_ip = 234; continue _fun0006;
 219:
            if(!(var1 == var11)) { _fun0006_ip = 227; continue _fun0006 }
 223:
            var11 = _closure1_slot22;
 227:
            var6 = var4.bind(var10)(var9, var13, var11);
 234:
            _fun0006_ip = 339; continue _fun0006;
 236:
            var4 = _closure1_slot21;
            var4 = var4[var13];
            var11 = var1 == var4;
            var6 = null;
            if(var11) { _fun0006_ip = 339; continue _fun0006 }
 253:
            var7 = var1 != var7;
            if(!var7) { _fun0006_ip = 271; continue _fun0006 }
 260:
            var12 = var9.length;
            var11 = 0;
            var7 = var11 !== var12;
 271:
            if(var7) { _fun0006_ip = 333; continue _fun0006 }
 274:
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
 333:
            var6 = var4.results;
 339:
            var4 = var6;
            if(!(var1 != var4)) { _fun0006_ip = 458; continue _fun0006 }
 346:
            var4 = var6;
            if(!var3) { _fun0006_ip = 458; continue _fun0006 }
 352:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 19;
            var3 = var11[var3];
            var7 = var7.bind(var10)(var3);
            var3 = var7.isMeAutcompleteAnswer;
            var3 = var3.bind(var7)(var9);
            var4 = var6;
            if(!var3) { _fun0006_ip = 458; continue _fun0006 }
 389:
            var7 = _closure1_slot14;
            var3 = var7.getCurrentUser;
            var7 = var3.bind(var7)();
            _closure2_slot0 = var7;
            var4 = var6;
            if(!(var1 != var7)) { _fun0006_ip = 458; continue _fun0006 }
 413:
            var3 = var6.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.user;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 !== var1;
                return var1;
            };
            var2 = var3.bind(var6)(var2);
            var6 = var2.unshift;
            var3 = {};
            var8 = _closure1_slot19;
            var3['text'] = var8;
            var3['user'] = var7;
            var3 = var6.bind(var2)(var3);
            var4 = var2;
 458:
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0006_ip = 495; continue _fun0006 }
 467:
            var6 = var4.length;
            var3 = 0;
            var2 = null;
            if(!(var3 !== var6)) { _fun0006_ip = 495; continue _fun0006 }
 480:
            var3 = {};
            var3['group'] = var5;
            var3['results'] = var4;
            var2 = var3;
 495:
            return var2;
 497:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function generateSearchOptions(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var2 = null;
            var2 = var2 != var4;
            var3 = '';
            if(!var2) { _fun0007_ip = 28; continue _fun0007 }
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.token;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0008_ip = 47; continue _fun0008 }
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
    var _closure1_slot28 = var1;
    var1 = function generateGlobalResults(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var4 = null;
            var1 = var4 != var6;
            var7 = '';
            var3 = var7;
            if(!var1) { _fun0009_ip = 42; continue _fun0009 }
 32:
            var1 = var6.getFullMatch;
            var3 = var1.bind(var6)();
 42:
            var1 = var3.trim;
            var8 = var1.bind(var3)();
            var1 = new Array(0);
            var _closure2_slot2 = var1;
            var3 = var4 != var8;
            if(!var3) { _fun0009_ip = 71; continue _fun0009 }
 67:
            var3 = var7 !== var8;
 71:
            if(!var3) { _fun0009_ip = 558; continue _fun0009 }
 77:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 13;
            var3 = var9[var3];
            var9 = undefined;
            var10 = var10.bind(var9)(var3);
            var3 = var10.getSearchType;
            var12 = var3.bind(var10)(var5);
            var3 = _closure1_slot17;
            var3 = var3.FILTER_HAS;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = _closure1_slot13;
            var3 = var3.hidePersonalInformation;
            if(var3) { _fun0009_ip = 184; continue _fun0009 }
 144:
            var11 = var10.push;
            var3 = _closure1_slot17;
            var3 = var3.FILTER_FROM;
            var3 = var11.bind(var10)(var3);
            var11 = var10.push;
            var3 = _closure1_slot17;
            var3 = var3.FILTER_MENTIONS;
            var3 = var11.bind(var10)(var3);
 184:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 14;
            var3 = var13[var3];
            var11 = var11.bind(var9)(var3);
            var3 = var11.isChannelFilterSupported;
            var3 = var3.bind(var11)(var12);
            if(!var3) { _fun0009_ip = 238; continue _fun0009 }
 218:
            var11 = var10.push;
            var3 = _closure1_slot17;
            var3 = var3.FILTER_IN;
            var3 = var11.bind(var10)(var3);
 238:
            var3 = var10.forEach;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var8 = arg1;
                    var2 = null;
                    if(!(var2 != var8)) { _fun0010_ip = 57; continue _fun0010 }
 9:
                    var7 = _closure1_slot27;
                    var11 = _closure2_slot0;
                    var10 = _closure2_slot1;
                    var13 = undefined;
                    var9 = 3;
                    var12 = var8;
                    var3 = var13[var7](var12, var11, var10, var9, var8);
                    if(!(var2 != var3)) { _fun0010_ip = 57; continue _fun0010 }
 43:
                    var2 = _closure2_slot2;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var10)(var2);
            var3 = var1.push;
            var2 = var4 != var6;
            var10 = var7;
            if(!var2) { _fun0009_ip = 280; continue _fun0009 }
 270:
            var2 = var6.getFullMatch;
            var10 = var2.bind(var6)();
 280:
            var2 = var10.trim;
            var14 = var2.bind(var10)();
            var10 = var4 != var14;
            var2 = undefined;
            if(!var10) { _fun0009_ip = 553; continue _fun0009 }
 302:
            var2 = undefined;
            if(!(var7 !== var14)) { _fun0009_ip = 553; continue _fun0009 }
 311:
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var13 = 19;
            var7 = var7[var13];
            var10 = var10.bind(var9)(var7);
            var7 = _closure1_slot17;
            var7 = var7.FILTER_BEFORE;
            var12 = var10[var7];
            var7 = var4 == var12;
            var11 = undefined;
            if(var7) { _fun0009_ip = 376; continue _fun0009 }
 354:
            var10 = var12.getAutocompletions;
            var7 = 1;
            var10 = var10.bind(var12)(var14, var5, var7);
            var7 = 0;
            var11 = var10[var7];
 376:
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var13];
            var10 = var10.bind(var9)(var7);
            var7 = _closure1_slot17;
            var7 = var7.FILTER_ON;
            var15 = var10[var7];
            var7 = var4 == var15;
            var10 = undefined;
            if(var7) { _fun0009_ip = 438; continue _fun0009 }
 416:
            var12 = var15.getAutocompletions;
            var7 = 1;
            var12 = var12.bind(var15)(var14, var5, var7);
            var7 = 0;
            var10 = var12[var7];
 438:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var13];
            var12 = var12.bind(var9)(var7);
            var7 = _closure1_slot17;
            var7 = var7.FILTER_AFTER;
            var13 = var12[var7];
            var7 = var4 == var13;
            var9 = undefined;
            if(var7) { _fun0009_ip = 500; continue _fun0009 }
 478:
            var12 = var13.getAutocompletions;
            var7 = 1;
            var12 = var12.bind(var13)(var14, var5, var7);
            var7 = 0;
            var9 = var12[var7];
 500:
            var7 = var4 == var11;
            var4 = null;
            if(var7) { _fun0009_ip = 550; continue _fun0009 }
 509:
            var7 = {};
            var8 = _closure1_slot16;
            var8 = var8.DATES;
            var7['group'] = var8;
            var8 = new Array(3);
            var8[0] = var11;
            var8[1] = var10;
            var8[2] = var9;
            var7['results'] = var8;
            var4 = var7;
 550:
            var2 = var4;
 553:
            var2 = var3.bind(var1)(var2);
 558:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 14;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var7.bind(var4)(var3);
            var3 = var7.getTotalResults;
            var7 = var3.bind(var7)(var1);
            var3 = 5;
            if(!(var7 < var3)) { _fun0009_ip = 621; continue _fun0009 }
 601:
            var3 = var1.push;
            var2 = _closure1_slot28;
            var2 = var2.bind(var4)(var6, var5);
            var2 = var3.bind(var1)(var2);
 621:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function getAutocompleteList(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var9 = arg1;
            var5 = arg2;
            var2 = new Array(0);
            var4 = var5.type;
            var1 = _closure1_slot15;
            var1 = var1.FILTER;
            if(!(var4 !== var1)) { _fun0011_ip = 126; continue _fun0011 }
 32:
            var4 = var5.type;
            var1 = _closure1_slot15;
            var1 = var1.FILTER_ALL;
            if(!(var4 !== var1)) { _fun0011_ip = 106; continue _fun0011 }
 51:
            var6 = var5.type;
            var1 = _closure1_slot15;
            var4 = var1.EMPTY;
            var1 = var2;
            if(!(var6 === var4)) { _fun0011_ip = 167; continue _fun0011 }
 73:
            var6 = var2.push;
            var8 = _closure1_slot28;
            var7 = var5.token;
            var4 = undefined;
            var4 = var8.bind(var4)(var7, var9);
            var4 = var6.bind(var2)(var4);
            var1 = var2;
            _fun0011_ip = 167; continue _fun0011;
 106:
            var7 = _closure1_slot29;
            var6 = var5.token;
            var4 = undefined;
            var1 = var7.bind(var4)(var6, var9);
            _fun0011_ip = 167; continue _fun0011;
 126:
            var4 = var2.push;
            var8 = _closure1_slot27;
            var13 = var5.filter;
            var12 = var5.token;
            var10 = _closure1_slot22;
            var14 = undefined;
            var11 = var9;
            var3 = var14[var8](var13, var12, var11, var10, var9);
            var3 = var4.bind(var2)(var3);
            var1 = var2;
 167:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot20;
            var2 = var1[var3];
            var1 = null;
            if(!(var1 != var2)) { _fun0012_ip = 116; continue _fun0012 }
 20:
            var9 = var2.query;
            var8 = var2.mode;
            var6 = var2.tokens;
            var1 = var2.cursorScope;
            var7 = var2.autocompletes;
            var2 = _closure1_slot20;
            var5 = _closure1_slot25;
            var4 = {};
            var4['searchId'] = var3;
            var4['query'] = var9;
            var4['mode'] = var8;
            var4['tokens'] = var6;
            var4['cursorScope'] = var1;
            var6 = var7.map;
            var1 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    var3 = var1 == var2;
                    var4 = undefined;
                    if(var3) { _fun0013_ip = 20; continue _fun0013 }
 14:
                    var4 = var2.group;
 20:
                    var3 = _closure1_slot16;
                    var3 = var3.HISTORY;
                    var1 = null;
                    if(!(var4 !== var3)) { _fun0013_ip = 42; continue _fun0013 }
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
    var _closure1_slot31 = var1;
    var1 = function rebuildAutocompleteResults(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var4 = arg1;
            var3 = null;
            if(!(var3 != var4)) { _fun0014_ip = 115; continue _fun0014 }
 9:
            var2 = _closure1_slot20;
            var2 = var2[var4];
            if(!(var3 != var2)) { _fun0014_ip = 115; continue _fun0014 }
 24:
            var2 = _closure1_slot20;
            var2 = var2[var4];
            var9 = var2.query;
            var7 = var2.mode;
            var8 = var2.tokens;
            var6 = var2.cursorScope;
            var3 = _closure1_slot20;
            var5 = _closure1_slot25;
            var2 = {};
            var2['searchId'] = var4;
            var2['query'] = var9;
            var2['mode'] = var7;
            var2['tokens'] = var8;
            var2['cursorScope'] = var6;
            var6 = _closure1_slot30;
            var1 = undefined;
            var6 = var6.bind(var1)(var4, var7);
            var2['autocompletes'] = var6;
            var2 = var5.bind(var1)(var2);
            var3[var4] = var2;
            return var1;
 115:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var7 = function handleMiscActions() {
        var3 = _closure1_slot32;
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
                if(var1) { _fun0015_ip = 69; continue _fun0015 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0015_ip = 105; continue _fun0015;
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
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var2 = arg1;
                var1 = _closure1_slot20;
                var1 = var1[var2];
                var4 = null;
                if(!(var4 == var1)) { _fun0016_ip = 38; continue _fun0016 }
 20:
                var4 = _closure1_slot25;
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
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
            if(!(var3 == var12)) { _fun0017_ip = 94; continue _fun0017 }
 92:
            var12 = {};
 94:
            var1 = _closure1_slot21;
            var5 = var1[var4];
            var1 = var12.query;
            if(!(var11 === var1)) { _fun0017_ip = 152; continue _fun0017 }
 111:
            var1 = var12.mode;
            if(!(var3 != var1)) { _fun0017_ip = 139; continue _fun0017 }
 120:
            var1 = var12.mode;
            var7 = var1.filter;
            var1 = var10.filter;
            if(!(var7 === var1)) { _fun0017_ip = 152; continue _fun0017 }
 139:
            var7 = var12.autocompletes;
            var1 = false;
            _fun0017_ip = 482; continue _fun0017;
 152:
            var14 = var10.type;
            var13 = _closure1_slot15;
            var13 = var13.EMPTY;
            if(!(var14 !== var13)) { _fun0017_ip = 441; continue _fun0017 }
 174:
            var14 = var10.type;
            var13 = _closure1_slot15;
            var13 = var13.FILTER;
            if(!(var14 === var13)) { _fun0017_ip = 234; continue _fun0017 }
 193:
            var14 = var10.filter;
            var13 = _closure1_slot17;
            var13 = var13.FILTER_FROM;
            if(!(var14 !== var13)) { _fun0017_ip = 234; continue _fun0017 }
 212:
            var14 = var10.filter;
            var13 = _closure1_slot17;
            var13 = var13.FILTER_MENTIONS;
            if(!(var14 === var13)) { _fun0017_ip = 441; continue _fun0017 }
 234:
            var14 = var3 != var5;
            var7 = undefined;
            var1 = true;
            if(!var14) { _fun0017_ip = 482; continue _fun0017 }
 248:
            var17 = var10.token;
            if(!(var3 != var17)) { _fun0017_ip = 289; continue _fun0017 }
 258:
            var14 = var17.getFullMatch;
            var15 = var14.bind(var17)();
            var14 = var15.trim;
            var14 = var14.bind(var15)();
            var15 = var14.length;
            var14 = 0;
            if(!(!(var15 > var14))) { _fun0017_ip = 321; continue _fun0017 }
 289:
            var15 = var5.context;
            var14 = var15.clearQuery;
            var14 = var14.bind(var15)();
            var14 = _closure1_slot30;
            var7 = var14.bind(var6)(var4, var10);
            var1 = true;
            _fun0017_ip = 482; continue _fun0017;
 321:
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
            _fun0017_ip = 482; continue _fun0017;
 441:
            if(!(var3 != var5)) { _fun0017_ip = 470; continue _fun0017 }
 445:
            var12 = var5.context;
            var3 = var12.clearQuery;
            var3 = var3.bind(var12)();
            var3 = new Array(0);
            var5['results'] = var3;
 470:
            var3 = _closure1_slot30;
            var7 = var3.bind(var6)(var4, var10);
            var1 = true;
 482:
            var3 = _closure1_slot20;
            var5 = _closure1_slot25;
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
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var2 = var1.searchId;
            var3 = _closure1_slot21;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0018_ip = 59; continue _fun0018 }
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
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var3 = var1.searchId;
            var1 = null;
            if(!(var1 == var3)) { _fun0019_ip = 56; continue _fun0019 }
 15:
            var1 = global;
            var5 = var1.Object;
            var4 = var5.keys;
            var2 = _closure1_slot20;
            var4 = var4.bind(var5)(var2);
            var2 = var4.forEach;
            var1 = _closure1_slot31;
            var1 = var2.bind(var4)(var1);
            _fun0019_ip = 70; continue _fun0019;
 56:
            var2 = _closure1_slot31;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 70:
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_CLEAR_HISTORY'] = var7;
    var7 = function handleChannelSelect(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var7 = var1.channelId;
            var3 = _closure1_slot11;
            var1 = var3.getCurrentSearchId;
            var4 = var1.bind(var3)();
            var5 = null;
            if(!(var5 != var4)) { _fun0020_ip = 199; continue _fun0020 }
 34:
            var1 = _closure1_slot18;
            var1 = var1.DMS;
            if(!(var4 === var1)) { _fun0020_ip = 84; continue _fun0020 }
 48:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = undefined;
            var6 = var6.bind(var3)(var1);
            var1 = var6.isChannelFilterSupported;
            var1 = var1.bind(var6)(var4);
            if(var1) { _fun0020_ip = 88; continue _fun0020 }
 84:
            var1 = false;
            return var1;
 88:
            var6 = _closure1_slot8;
            var1 = var6.getChannel;
            var6 = var1.bind(var6)(var7);
            if(!(var5 != var6)) { _fun0020_ip = 195; continue _fun0020 }
 106:
            var1 = var6.isPrivate;
            var1 = var1.bind(var6)();
            if(!var1) { _fun0020_ip = 195; continue _fun0020 }
 119:
            var1 = _closure1_slot20;
            var1 = var1[var4];
            if(!(var5 != var1)) { _fun0020_ip = 191; continue _fun0020 }
 131:
            var1 = var1.mode;
            var5 = var1.type;
            var6 = var1.filter;
            var1 = _closure1_slot15;
            var1 = var1.FILTER;
            var1 = var5 === var1;
            if(!var1) { _fun0020_ip = 177; continue _fun0020 }
 163:
            var5 = _closure1_slot17;
            var5 = var5.FILTER_IN;
            var1 = var6 === var5;
 177:
            if(!var1) { _fun0020_ip = 189; continue _fun0020 }
 180:
            var2 = _closure1_slot32;
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
        var1 = _closure1_slot31;
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