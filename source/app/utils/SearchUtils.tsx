// app/utils/SearchUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var10 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot17;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot17;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
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
                    _fun0002_ip = 67; continue _fun0002;
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
    var _closure1_slot16 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var5 = function quoteChannelName(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var2 = var5.match;
            var1 = /([\\" ])/g;
            var3 = var2.bind(var5)(var1);
            var2 = null;
            var1 = var5;
            if(!(var2 != var3)) { _fun0004_ip = 95; continue _fun0004 }
 37:
            var4 = var5.replaceAll;
            var3 = /([\\"])/g;
            var2 = function(arg1, arg2) {
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '\\';
                var1 = arg2;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var4 = var4.bind(var5)(var3, var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '"';
            var1 = var3.bind(var2)(var4, var2);
 95:
            return var1;
        }
    };
    var _closure1_slot18 = var5;
    var4 = function tokenizeQuery(arg1) {
        var3 = _closure1_slot15;
        var2 = var3.tokenize;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot19 = var4;
    var1 = global;
    var12 = var1.Object;
    var7 = var12.defineProperty;
    var6 = {};
    var11 = true;
    var6['value'] = var11;
    var1 = '__esModule';
    var1 = var7.bind(var12)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var10.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.SearchTokenTypes;
    var _closure1_slot9 = var7;
    var12 = var6.SearchPopoutModes;
    var _closure1_slot10 = var12;
    var12 = var6.IS_SEARCH_ANSWER_TOKEN;
    var _closure1_slot11 = var12;
    var12 = var6.IS_SEARCH_FILTER_TOKEN;
    var _closure1_slot12 = var12;
    var6 = var6.SearchTypes;
    var _closure1_slot13 = var6;
    var6 = {};
    var12 = var7.FILTER_BEFORE;
    var6[var12] = var11;
    var12 = var7.FILTER_AFTER;
    var6[var12] = var11;
    var7 = var7.FILTER_ON;
    var6[var7] = var11;
    var _closure1_slot14 = var6;
    var7 = 10;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var10 = var7.prototype;
    var10 = Object.create(var10, {constructor: {value: var7}});
    var16 = var10;
    var7 = new var16[var7](var15);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot15 = var7;
    var7 = 15;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/SearchUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function getSearchOptionAnswer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot9;
            var2 = var2.FILTER_FROM;
            if(!(var2 !== var3)) { _fun0005_ip = 601; continue _fun0005 }
 23:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_MENTIONS;
            if(!(var2 !== var3)) { _fun0005_ip = 540; continue _fun0005 }
 40:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_HAS;
            if(!(var2 !== var3)) { _fun0005_ip = 479; continue _fun0005 }
 57:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_BEFORE;
            if(!(var2 !== var3)) { _fun0005_ip = 418; continue _fun0005 }
 74:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_ON;
            if(!(var2 !== var3)) { _fun0005_ip = 418; continue _fun0005 }
 91:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_AFTER;
            if(!(var2 !== var3)) { _fun0005_ip = 418; continue _fun0005 }
 108:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_IN;
            if(!(var2 !== var3)) { _fun0005_ip = 357; continue _fun0005 }
 125:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_FILE_TYPE;
            if(!(var2 !== var3)) { _fun0005_ip = 296; continue _fun0005 }
 142:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_FILE_NAME;
            if(!(var2 !== var3)) { _fun0005_ip = 235; continue _fun0005 }
 156:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_PINNED;
            if(!(var2 !== var3)) { _fun0005_ip = 174; continue _fun0005 }
 170:
            var2 = undefined;
            return var2;
 174:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.UJxL3d;
            var2 = var3.bind(var4)(var2);
            return var2;
 235:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.uAbFDA;
            var2 = var3.bind(var4)(var2);
            return var2;
 296:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.FXcAFR;
            var2 = var3.bind(var4)(var2);
            return var2;
 357:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.GpM+//;
            var2 = var3.bind(var4)(var2);
            return var2;
 418:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Zbbc1N;
            var2 = var3.bind(var4)(var2);
            return var2;
 479:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.bhSYbW;
            var2 = var3.bind(var4)(var2);
            return var2;
 540:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.BYvFWl;
            var2 = var3.bind(var4)(var2);
            return var2;
 601:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.E466pK;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getSearchOptionAnswer'] = var7;
    var3['ShowDatePicker'] = var6;
    var6 = function setIncludeNSFW(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = _closure1_slot5;
            var3 = var4.didAgree;
            var2 = arg2;
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0006_ip = 71; continue _fun0006 }
 24:
            var2 = _closure1_slot8;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var3 = null;
            if(!(var3 != var1)) { _fun0006_ip = 75; continue _fun0006 }
 43:
            var2 = var1.nsfwAllowed;
            var2 = var3 == var2;
            if(var2) { _fun0006_ip = 62; continue _fun0006 }
 56:
            var2 = var1.nsfwAllowed;
 62:
            var1 = arg1;
            var1['include_nsfw'] = var2;
 71:
            var1 = undefined;
            return var1;
 75:
            var1 = undefined;
            return var1;
        }
    };
    var3['setIncludeNSFW'] = var6;
    var6 = function getSearchQueryFromTokens(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var1 = {};
            var _closure2_slot0 = var1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = arg1;
                    var3 = var4.type;
                    var5 = _closure1_slot12;
                    var1 = var5.test;
                    var1 = var1.bind(var5)(var3);
                    if(var1) { _fun0008_ip = 688; continue _fun0008 }
 31:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_BEFORE;
                    if(!(var1 !== var3)) { _fun0008_ip = 546; continue _fun0008 }
 48:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_ON;
                    if(!(var1 !== var3)) { _fun0008_ip = 546; continue _fun0008 }
 65:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_AFTER;
                    if(!(var1 !== var3)) { _fun0008_ip = 546; continue _fun0008 }
 82:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var1 = var6[var1];
                    var7 = undefined;
                    var1 = var5.bind(var7)(var1);
                    var1 = var1[var3];
                    var6 = null;
                    var8 = var6 != var1;
                    var5 = null;
                    if(!var8) { _fun0008_ip = 125; continue _fun0008 }
 119:
                    var5 = var1.queryKey;
 125:
                    if(!(var6 == var5)) { _fun0008_ip = 133; continue _fun0008 }
 129:
                    var5 = 'content';
 133:
                    var8 = _closure2_slot0;
                    var8 = var8[var5];
                    if(!(var6 == var8)) { _fun0008_ip = 184; continue _fun0008 }
 148:
                    var9 = _closure2_slot0;
                    var8 = global;
                    var8 = var8.Set;
                    var10 = var8.prototype;
                    var10 = Object.create(var10, {constructor: {value: var8}});
                    var12 = var10;
                    var8 = new var12[var8](var11);
                    var8 = var8 instanceof Object ? var8 : var10;
                    var9[var5] = var8;
 184:
                    var1 = _closure2_slot0;
                    var5 = var1[var5];
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_USERNAME_FROM;
                    if(!(var1 !== var3)) { _fun0008_ip = 516; continue _fun0008 }
 209:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_USERNAME_MENTIONS;
                    if(!(var1 !== var3)) { _fun0008_ip = 516; continue _fun0008 }
 226:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_FILE_TYPE;
                    if(!(var1 !== var3)) { _fun0008_ip = 487; continue _fun0008 }
 243:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_FILE_NAME;
                    if(!(var1 !== var3)) { _fun0008_ip = 487; continue _fun0008 }
 260:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_IN;
                    if(!(var1 !== var3)) { _fun0008_ip = 400; continue _fun0008 }
 277:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_HAS;
                    if(!(var1 !== var3)) { _fun0008_ip = 370; continue _fun0008 }
 291:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_PINNED;
                    if(!(var1 !== var3)) { _fun0008_ip = 340; continue _fun0008 }
 305:
                    var3 = var5.add;
                    var1 = var4.getFullMatch;
                    var8 = var1.bind(var4)();
                    var1 = var8.trim;
                    var1 = var1.bind(var8)();
                    var1 = var3.bind(var5)(var1);
                    _fun0008_ip = 688; continue _fun0008;
 340:
                    var3 = var5.add;
                    var8 = var4.getData;
                    var1 = 'pinned';
                    var1 = var8.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0008_ip = 688; continue _fun0008;
 370:
                    var3 = var5.add;
                    var8 = var4.getData;
                    var1 = 'has';
                    var1 = var8.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0008_ip = 688; continue _fun0008;
 400:
                    var3 = _closure1_slot16;
                    var8 = var4.getData;
                    var1 = 'channels';
                    var1 = var8.bind(var4)(var1);
                    if(!(var6 == var1)) { _fun0008_ip = 427; continue _fun0008 }
 423:
                    var1 = new Array(0);
 427:
                    var6 = var3.bind(var7)(var1);
                    var3 = var6.bind(var7)();
                    var1 = var3.done;
                    if(var1) { _fun0008_ip = 688; continue _fun0008 }
 447:
                    var1 = var3.value;
                    var8 = var5.add;
                    var1 = var1.id;
                    var1 = var8.bind(var5)(var1);
                    var8 = var6.bind(var7)();
                    var1 = var8.done;
                    var3 = var8;
                    if(var1) { _fun0008_ip = 688; continue _fun0008 }
 485:
                    _fun0008_ip = 447; continue _fun0008;
 487:
                    var3 = var5.add;
                    var6 = var4.getMatch;
                    var1 = 1;
                    var1 = var6.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0008_ip = 688; continue _fun0008;
 516:
                    var3 = var5.add;
                    var6 = var4.getData;
                    var1 = 'userId';
                    var1 = var6.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0008_ip = 688; continue _fun0008;
 546:
                    var3 = var4.getData;
                    var1 = 'start';
                    var6 = var3.bind(var4)(var1);
                    var3 = var4.getData;
                    var1 = 'end';
                    var5 = var3.bind(var4)(var1);
                    if(!var6) { _fun0008_ip = 627; continue _fun0008 }
 579:
                    var3 = _closure2_slot0;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 9;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var4);
                    var1 = var4.fromTimestamp;
                    var1 = var1.bind(var4)(var6);
                    var3['min_id'] = var1;
 627:
                    var1 = var5;
                    if(!var1) { _fun0008_ip = 684; continue _fun0008 }
 633:
                    var3 = _closure2_slot0;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var2 = var4.fromTimestamp;
                    var2 = var2.bind(var4)(var5);
                    var3['max_id'] = var2;
                    var1 = var2;
 684:
                    var1 = undefined;
                    return var1;
 688:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var10 = global;
            var3 = var10.Object;
            var2 = var3.entries;
            var9 = var2.bind(var3)(var1);
            var2 = var9.length;
            var8 = 0;
            var2 = var8 < var2;
            var6 = undefined;
            var5 = 2;
            var4 = 1;
            var3 = 0;
            if(!var2) { _fun0007_ip = 141; continue _fun0007 }
 74:
            var11 = var9[var3];
            var2 = _closure1_slot3;
            var2 = var2.bind(var6)(var11, var5);
            var11 = var2[var8];
            var13 = var2[var4];
            var2 = var10.Set;
            var2 = var13 instanceof var2;
            if(!var2) { _fun0007_ip = 129; continue _fun0007 }
 109:
            var12 = var10.Array;
            var2 = var12.from;
            var2 = var2.bind(var12)(var13);
            var1[var11] = var2;
 129:
            var3 = var3 + 1;
            var2 = var9.length;
            if(var3 < var2) { _fun0007_ip = 74; continue _fun0007 }
 141:
            var2 = var1.content;
            if(!var2) { _fun0007_ip = 197; continue _fun0007 }
 149:
            var4 = var1.content;
            var3 = var4.join;
            var2 = ' ';
            var3 = var3.bind(var4)(var2);
            var2 = var3.trim;
            var2 = var2.bind(var3)();
            var1['content'] = var2;
            var2 = var1.content;
            if(var2) { _fun0007_ip = 197; continue _fun0007 }
 192:
            var2 = delete var1.content;
 197:
            return var1;
        }
    };
    var3['getSearchQueryFromTokens'] = var6;
    var6 = function getNonTokenQuery(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = arg1;
                var4 = var3.type;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var2 = var1.NON_TOKEN_TYPE;
                var1 = '';
                if(!(var4 === var2)) { _fun0009_ip = 57; continue _fun0009 }
 47:
                var2 = var3.getFullMatch;
                var1 = var2.bind(var3)();
 57:
                return var1;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.join;
        var1 = ' ';
        var2 = var2.bind(var3)(var1);
        var1 = var2.trim;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['getNonTokenQuery'] = var6;
    var6 = function getSelectionScope(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var6 = arg1;
            var4 = arg2;
            var3 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var3;
            var2 = var6.find;
            var1 = function(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var6 = arg2;
                    var3 = _closure2_slot1;
                    var2 = var1.start;
                    if(!(var3 >= var2)) { _fun0011_ip = 61; continue _fun0011 }
 22:
                    var3 = _closure2_slot1;
                    var2 = var1.end;
                    if(!(var3 <= var2)) { _fun0011_ip = 61; continue _fun0011 }
 35:
                    var3 = _closure2_slot2;
                    var2 = var1.start;
                    if(!(var3 >= var2)) { _fun0011_ip = 61; continue _fun0011 }
 48:
                    var3 = _closure2_slot2;
                    var2 = var1.end;
                    if(!(!(var3 <= var2))) { _fun0011_ip = 69; continue _fun0011 }
 61:
                    var _closure2_slot3 = var1;
                    var1 = false;
                    _fun0011_ip = 113; continue _fun0011;
 69:
                    var5 = _closure2_slot0;
                    var3 = 1;
                    var2 = var6 + var3;
                    var5 = var5[var2];
                    var2 = null;
                    var5 = var2 != var5;
                    var1 = true;
                    if(!var5) { _fun0011_ip = 113; continue _fun0011 }
 95:
                    var5 = _closure2_slot0;
                    var3 = var6 + var3;
                    var3 = var5[var3];
                    var _closure2_slot4 = var3;
                    var1 = true;
 113:
                    return var1;
                }
            };
            var6 = var2.bind(var6)(var1);
            var1 = null;
            var2 = var1 == var6;
            if(var2) { _fun0010_ip = 89; continue _fun0010 }
 49:
            var2 = {};
            var7 = _closure2_slot3;
            var2['previousToken'] = var7;
            var2['currentToken'] = var6;
            var5 = _closure2_slot4;
            var2['nextToken'] = var5;
            var2['focusOffset'] = var4;
            var2['anchorOffset'] = var3;
            var1 = var2;
 89:
            return var1;
        }
    };
    var3['getSelectionScope'] = var6;
    var6 = function getAutocompleteMode(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var7 = null;
            if(!(var7 == var1)) { _fun0012_ip = 11; continue _fun0012 }
 9:
            var1 = {};
 11:
            var3 = var1.currentToken;
            var2 = var1.nextToken;
            var6 = var1.previousToken;
            var1 = arg2;
            var4 = var1.length;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0012_ip = 441; continue _fun0012 }
 46:
            if(!(var7 != var3)) { _fun0012_ip = 406; continue _fun0012 }
 53:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 8;
            var1 = var1[var9];
            var5 = undefined;
            var10 = var8.bind(var5)(var1);
            var8 = var10.isSearchFilterTokenType;
            var1 = var3.type;
            var1 = var8.bind(var10)(var1);
            if(!var1) { _fun0012_ip = 200; continue _fun0012 }
 97:
            if(!(var7 != var2)) { _fun0012_ip = 374; continue _fun0012 }
 104:
            var8 = var2.type;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var1 = var10.bind(var5)(var1);
            var1 = var1.NON_TOKEN_TYPE;
            if(!(var8 !== var1)) { _fun0012_ip = 374; continue _fun0012 }
 142:
            if(!(var7 != var2)) { _fun0012_ip = 200; continue _fun0012 }
 146:
            var10 = _closure1_slot11;
            var8 = var10.test;
            var1 = var2.type;
            var1 = var8.bind(var10)(var1);
            if(var1) { _fun0012_ip = 200; continue _fun0012 }
 168:
            var1 = {};
            var8 = _closure1_slot10;
            var8 = var8.FILTER;
            var1['type'] = var8;
            var8 = var3.type;
            var1['filter'] = var8;
            var1['token'] = var7;
            return var1;
 200:
            var8 = var3.type;
            var11 = _closure1_slot1;
            var1 = _closure1_slot2;
            var10 = 10;
            var1 = var1[var10];
            var1 = var11.bind(var5)(var1);
            var1 = var1.NON_TOKEN_TYPE;
            if(!(var8 === var1)) { _fun0012_ip = 275; continue _fun0012 }
 235:
            if(!(var7 != var6)) { _fun0012_ip = 275; continue _fun0012 }
 239:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var9 = var8.bind(var5)(var1);
            var8 = var9.isSearchFilterTokenType;
            var1 = var6.type;
            var1 = var8.bind(var9)(var1);
            if(var1) { _fun0012_ip = 339; continue _fun0012 }
 275:
            var8 = var3.type;
            var9 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var9.bind(var5)(var1);
            var1 = var1.NON_TOKEN_TYPE;
            var5 = undefined;
            if(!(var8 === var1)) { _fun0012_ip = 312; continue _fun0012 }
 309:
            var5 = var3;
 312:
            var1 = {};
            var8 = _closure1_slot10;
            var8 = var8.FILTER_ALL;
            var1['type'] = var8;
            var1['filter'] = var7;
            var1['token'] = var5;
            _fun0012_ip = 372; continue _fun0012;
 339:
            var5 = {};
            var7 = _closure1_slot10;
            var7 = var7.FILTER;
            var5['type'] = var7;
            var6 = var6.type;
            var5['filter'] = var6;
            var5['token'] = var3;
            var1 = var5;
 372:
            return var1;
 374:
            var1 = {};
            var4 = _closure1_slot10;
            var4 = var4.FILTER;
            var1['type'] = var4;
            var3 = var3.type;
            var1['filter'] = var3;
            var1['token'] = var2;
            return var1;
 406:
            var1 = {'type': null, 'filter': null, 'token': null};
            var2 = _closure1_slot10;
            var2 = var2.FILTER_ALL;
            var1['type'] = var2;
            return var1;
 441:
            var1 = {'type': null, 'filter': null, 'token': null};
            var2 = _closure1_slot10;
            var2 = var2.EMPTY;
            var1['type'] = var2;
            return var1;
        }
    };
    var3['getAutocompleteMode'] = var6;
    var3['quoteChannelName'] = var5;
    var5 = function getFlattenedAutocompleteResults(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = new Array(0);
        var _closure2_slot1 = var2;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 11;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = arg1;
        var4 = var3.bind(var4)(var2);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var5 = arg1;
                var _closure3_slot0 = var5;
                var2 = null;
                if(!(var2 != var5)) { _fun0013_ip = 86; continue _fun0013 }
 15:
                var2 = var5.results;
                var3 = var2.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0013_ip = 86; continue _fun0013 }
 32:
                var2 = var5.group;
                var _closure3_slot1 = var2;
                var4 = _closure2_slot1;
                var3 = var4.concat;
                var6 = var5.results;
                var5 = var6.map;
                var1 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var3 = arg1;
                        var4 = var3.text;
                        var1 = var3.channel;
                        var5 = null;
                        var7 = var4;
                        if(!(var5 != var1)) { _fun0014_ip = 36; continue _fun0014 }
 22:
                        var2 = _closure1_slot18;
                        var1 = undefined;
                        var7 = var2.bind(var1)(var4);
 36:
                        var1 = _closure2_slot0;
                        var6 = var1.type;
                        var1 = _closure1_slot10;
                        var1 = var1.FILTER_ALL;
                        var2 = var7;
                        if(!(var6 === var1)) { _fun0014_ip = 207; continue _fun0014 }
 71:
                        var6 = var3.group;
                        if(!(var5 == var6)) { _fun0014_ip = 88; continue _fun0014 }
 81:
                        var6 = _closure3_slot1;
 88:
                        _closure3_slot1 = var6;
                        var8 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 8;
                        var4 = var6[var4];
                        var6 = undefined;
                        var4 = var8.bind(var6)(var4);
                        var1 = _closure3_slot1;
                        var1 = var4[var1];
                        var8 = var5 == var1;
                        var4 = undefined;
                        if(var8) { _fun0014_ip = 139; continue _fun0014 }
 134:
                        var4 = var1.key;
 139:
                        var4 = var5 != var4;
                        if(!var4) { _fun0014_ip = 168; continue _fun0014 }
 146:
                        var5 = var5 == var1;
                        var6 = undefined;
                        if(var5) { _fun0014_ip = 160; continue _fun0014 }
 155:
                        var6 = var1.key;
 160:
                        var5 = '';
                        var4 = var5 !== var6;
 168:
                        var2 = var7;
                        if(!var4) { _fun0014_ip = 207; continue _fun0014 }
 174:
                        var6 = var1.key;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var4 = '';
                        var1 = ' ';
                        var2 = var5.bind(var4)(var6, var1, var7);
 207:
                        var1 = {};
                        var1['result'] = var3;
                        var3 = _closure3_slot0;
                        var3 = var3.group;
                        var1['group'] = var3;
                        var1['resultText'] = var2;
                        return var1;
                    }
                };
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var1);
                _closure2_slot1 = var1;
 86:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var3 = _closure2_slot1;
        var2 = var3.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.resultText;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getFlattenedAutocompleteResults'] = var5;
    var5 = function getTotalResults(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var3 = arg1;
                var2 = arg2;
                var4 = null;
                var1 = var3;
                if(!(var4 != var2)) { _fun0015_ip = 30; continue _fun0015 }
 15:
                var2 = var2.results;
                var2 = var2.length;
                var1 = var2 + var3;
 30:
                return var1;
            }
        };
        var1 = 0;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getTotalResults'] = var5;
    var5 = function getQueryFromTokens(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var5 = arg1;
            var1 = null;
            var2 = var1 == var5;
            var4 = '';
            var1 = var4;
            if(var2) { _fun0016_ip = 48; continue _fun0016 }
 19:
            var3 = var5.map;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getFullMatch;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var3.bind(var5)(var2);
            var2 = var3.join;
            var1 = var2.bind(var3)(var4);
 48:
            return var1;
        }
    };
    var3['getQueryFromTokens'] = var5;
    var5 = function queryHasFilter(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot19;
        var3 = undefined;
        var2 = arg1;
        var3 = var4.bind(var3)(var2);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = _closure2_slot0;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['queryHasFilter'] = var5;
    var3['tokenizeQuery'] = var4;
    var4 = function clearTokenCache() {
        var2 = _closure1_slot15;
        var1 = var2.clearCache;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['clearTokenCache'] = var4;
    var4 = function showDatePicker(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0017_ip = 23; continue _fun0017 }
 12:
            var2 = _closure1_slot14;
            var1 = var2[var3];
 23:
            return var1;
        }
    };
    var3['showDatePicker'] = var4;
    var4 = function filterHasAnswer(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var3 = arg2;
            var5 = _closure1_slot12;
            var2 = var5.test;
            var1 = arg1;
            var1 = var1.type;
            var5 = var2.bind(var5)(var1);
            var2 = null;
            var1 = var2 == var3;
            if(!var1) { _fun0018_ip = 40; continue _fun0018 }
 37:
            var1 = var5;
 40:
            if(var1) { _fun0018_ip = 81; continue _fun0018 }
 43:
            var2 = var2 != var3;
            if(!var2) { _fun0018_ip = 53; continue _fun0018 }
 50:
            var2 = var5;
 53:
            if(!var2) { _fun0018_ip = 78; continue _fun0018 }
 56:
            var5 = _closure1_slot11;
            var4 = var5.test;
            var3 = var3.type;
            var3 = var4.bind(var5)(var3);
            var2 = !var3;
 78:
            var1 = var2;
 81:
            var1 = !var1;
            return var1;
        }
    };
    var3['filterHasAnswer'] = var4;
    var4 = function refreshSearchTokens() {
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 8;
        var4 = var5[var2];
        var1 = undefined;
        var6 = var6.bind(var1)(var4);
        var4 = var6.rebuildSearchTokenConfigs;
        var4 = var4.bind(var6)();
        var6 = _closure1_slot15;
        var4 = var6.reset;
        var4 = var4.bind(var6)();
        var4 = _closure1_slot1;
        var3 = 11;
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var2 = var5[var2];
        var2 = var4.bind(var1)(var2);
        var4 = var3.bind(var1)(var2);
        var3 = var4.forOwn;
        var2 = function(arg1, arg2) {
            var3 = _closure1_slot15;
            var2 = var3.addRule;
            var1 = {};
            var4 = arg2;
            var1['type'] = var4;
            var5 = arg1;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['refreshSearchTokens'] = var4;
    var4 = function isChannelFilterSupported(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot13;
            var1 = var1.GUILD;
            if(!(var4 !== var1)) { _fun0019_ip = 101; continue _fun0019 }
 20:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.getIsSearchDesktopXDMExperimentEnabled;
            var1 = {};
            var6 = 'isChannelFilterSupported';
            var1['location'] = var6;
            var3 = var3.bind(var5)(var1);
            var1 = _closure1_slot13;
            var1 = var1.DMS;
            var1 = var4 === var1;
            if(!var1) { _fun0019_ip = 83; continue _fun0019 }
 80:
            var1 = var3;
 83:
            if(!var1) { _fun0019_ip = 99; continue _fun0019 }
 86:
            var2 = _closure1_slot7;
            var2 = var2.hidePersonalInformation;
            var1 = !var2;
 99:
            return var1;
 101:
            var1 = true;
            return var1;
        }
    };
    var3['isChannelFilterSupported'] = var4;
    var2 = function getChannelDisplayName(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var7 = arg1;
            var4 = var7.name;
            var1 = var7.isGroupDM;
            var1 = var1.bind(var7)();
            if(var1) { _fun0020_ip = 203; continue _fun0020 }
 24:
            var1 = var7.isDM;
            var1 = var1.bind(var7)();
            if(var1) { _fun0020_ip = 126; continue _fun0020 }
 37:
            var1 = var7.isThread;
            var1 = var1.bind(var7)();
            var1 = !var1;
            var5 = _closure1_slot4;
            var3 = var5.getTextChannelNameDisambiguations;
            var2 = var7.getGuildId;
            var2 = var2.bind(var7)();
            var3 = var3.bind(var5)(var2);
            var2 = var7.id;
            var3 = var3[var2];
            var6 = null;
            var2 = var6 == var3;
            var5 = undefined;
            if(var2) { _fun0020_ip = 103; continue _fun0020 }
 98:
            var5 = var3.name;
 103:
            var2 = var1;
            if(!(var6 != var5)) { _fun0020_ip = 251; continue _fun0020 }
 113:
            var4 = var3.name;
            var2 = var1;
            _fun0020_ip = 251; continue _fun0020;
 126:
            var1 = var7.getRecipientId;
            var6 = var1.bind(var7)();
            var5 = _closure1_slot8;
            var3 = var5.getUser;
            var5 = var3.bind(var5)(var6);
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 14;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var1 = var3.getUserTag;
            var6 = var1.bind(var3)(var5);
            var1 = null;
            var3 = var1 == var6;
            var2 = false;
            var4 = var6;
            if(!var3) { _fun0020_ip = 251; continue _fun0020 }
 201:
            return var1;
 203:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 13;
            var5 = var5[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.computeChannelName;
            var3 = _closure1_slot8;
            var1 = _closure1_slot6;
            var4 = var5.bind(var6)(var7, var3, var1);
            var2 = false;
 251:
            var3 = _closure1_slot18;
            var1 = undefined;
            var4 = var3.bind(var1)(var4);
            var1 = var4;
            if(!var2) { _fun0020_ip = 293; continue _fun0020 }
 271:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '#';
            var1 = var3.bind(var2)(var4);
 293:
            return var1;
        }
    };
    var3['getChannelDisplayName'] = var2;
    return var1;
})();