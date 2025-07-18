// app/utils/SearchUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function tokenizeQuery(arg1) {
        var3 = _closure1_slot15;
        var2 = var3.tokenize;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot16 = var4;
    var1 = global;
    var11 = var1.Object;
    var6 = var11.defineProperty;
    var5 = {};
    var10 = true;
    var5['value'] = var10;
    var1 = '__esModule';
    var1 = var6.bind(var11)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.SearchTokenTypes;
    var _closure1_slot9 = var6;
    var11 = var5.SearchPopoutModes;
    var _closure1_slot10 = var11;
    var11 = var5.IS_SEARCH_ANSWER_TOKEN;
    var _closure1_slot11 = var11;
    var11 = var5.IS_SEARCH_FILTER_TOKEN;
    var _closure1_slot12 = var11;
    var5 = var5.SearchTypes;
    var _closure1_slot13 = var5;
    var5 = {};
    var11 = var6.FILTER_BEFORE;
    var5[var11] = var10;
    var11 = var6.FILTER_AFTER;
    var5[var11] = var10;
    var6 = var6.FILTER_ON;
    var5[var6] = var10;
    var _closure1_slot14 = var5;
    var6 = 10;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var9 = var6.prototype;
    var9 = Object.create(var9, {constructor: {value: var6}});
    var15 = var9;
    var6 = new var15[var6](var14);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot15 = var6;
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/SearchUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function getSearchOptionAnswer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot9;
            var2 = var2.FILTER_FROM;
            if(!(var2 !== var3)) { _fun0001_ip = 601; continue _fun0001 }
 23:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_MENTIONS;
            if(!(var2 !== var3)) { _fun0001_ip = 540; continue _fun0001 }
 40:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_HAS;
            if(!(var2 !== var3)) { _fun0001_ip = 479; continue _fun0001 }
 57:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_BEFORE;
            if(!(var2 !== var3)) { _fun0001_ip = 418; continue _fun0001 }
 74:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_ON;
            if(!(var2 !== var3)) { _fun0001_ip = 418; continue _fun0001 }
 91:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_AFTER;
            if(!(var2 !== var3)) { _fun0001_ip = 418; continue _fun0001 }
 108:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_IN;
            if(!(var2 !== var3)) { _fun0001_ip = 357; continue _fun0001 }
 125:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_FILE_TYPE;
            if(!(var2 !== var3)) { _fun0001_ip = 296; continue _fun0001 }
 142:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_FILE_NAME;
            if(!(var2 !== var3)) { _fun0001_ip = 235; continue _fun0001 }
 156:
            var2 = _closure1_slot9;
            var2 = var2.FILTER_PINNED;
            if(!(var2 !== var3)) { _fun0001_ip = 174; continue _fun0001 }
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
    var3['getSearchOptionAnswer'] = var6;
    var3['ShowDatePicker'] = var5;
    var5 = function setIncludeNSFW(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot5;
            var3 = var4.didAgree;
            var2 = arg2;
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0002_ip = 71; continue _fun0002 }
 24:
            var2 = _closure1_slot8;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var3 = null;
            if(!(var3 != var1)) { _fun0002_ip = 75; continue _fun0002 }
 43:
            var2 = var1.nsfwAllowed;
            var2 = var3 == var2;
            if(var2) { _fun0002_ip = 62; continue _fun0002 }
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
    var3['setIncludeNSFW'] = var5;
    var5 = function getSearchQueryFromTokens(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = {};
            var _closure2_slot0 = var1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = arg1;
                    var3 = var4.type;
                    var5 = _closure1_slot12;
                    var1 = var5.test;
                    var1 = var1.bind(var5)(var3);
                    if(var1) { _fun0004_ip = 636; continue _fun0004 }
 31:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_BEFORE;
                    if(!(var1 !== var3)) { _fun0004_ip = 494; continue _fun0004 }
 48:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_ON;
                    if(!(var1 !== var3)) { _fun0004_ip = 494; continue _fun0004 }
 65:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_AFTER;
                    if(!(var1 !== var3)) { _fun0004_ip = 494; continue _fun0004 }
 82:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 8;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var1[var3];
                    var7 = null;
                    var6 = var7 != var1;
                    var5 = null;
                    if(!var6) { _fun0004_ip = 125; continue _fun0004 }
 119:
                    var5 = var1.queryKey;
 125:
                    if(!(var7 == var5)) { _fun0004_ip = 133; continue _fun0004 }
 129:
                    var5 = 'content';
 133:
                    var6 = _closure2_slot0;
                    var6 = var6[var5];
                    if(!(var7 == var6)) { _fun0004_ip = 184; continue _fun0004 }
 148:
                    var7 = _closure2_slot0;
                    var6 = global;
                    var6 = var6.Set;
                    var8 = var6.prototype;
                    var8 = Object.create(var8, {constructor: {value: var6}});
                    var10 = var8;
                    var6 = new var10[var6](var9);
                    var6 = var6 instanceof Object ? var6 : var8;
                    var7[var5] = var6;
 184:
                    var1 = _closure2_slot0;
                    var5 = var1[var5];
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_USERNAME_FROM;
                    if(!(var1 !== var3)) { _fun0004_ip = 464; continue _fun0004 }
 209:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_USERNAME_MENTIONS;
                    if(!(var1 !== var3)) { _fun0004_ip = 464; continue _fun0004 }
 226:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_FILE_TYPE;
                    if(!(var1 !== var3)) { _fun0004_ip = 435; continue _fun0004 }
 243:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_FILE_NAME;
                    if(!(var1 !== var3)) { _fun0004_ip = 435; continue _fun0004 }
 260:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_IN;
                    if(!(var1 !== var3)) { _fun0004_ip = 400; continue _fun0004 }
 277:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_HAS;
                    if(!(var1 !== var3)) { _fun0004_ip = 370; continue _fun0004 }
 291:
                    var1 = _closure1_slot9;
                    var1 = var1.ANSWER_PINNED;
                    if(!(var1 !== var3)) { _fun0004_ip = 340; continue _fun0004 }
 305:
                    var3 = var5.add;
                    var1 = var4.getFullMatch;
                    var6 = var1.bind(var4)();
                    var1 = var6.trim;
                    var1 = var1.bind(var6)();
                    var1 = var3.bind(var5)(var1);
                    _fun0004_ip = 636; continue _fun0004;
 340:
                    var3 = var5.add;
                    var6 = var4.getData;
                    var1 = 'pinned';
                    var1 = var6.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0004_ip = 636; continue _fun0004;
 370:
                    var3 = var5.add;
                    var6 = var4.getData;
                    var1 = 'has';
                    var1 = var6.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0004_ip = 636; continue _fun0004;
 400:
                    var3 = var5.add;
                    var6 = var4.getData;
                    var1 = 'channel';
                    var1 = var6.bind(var4)(var1);
                    var1 = var1.id;
                    var1 = var3.bind(var5)(var1);
                    _fun0004_ip = 636; continue _fun0004;
 435:
                    var3 = var5.add;
                    var6 = var4.getMatch;
                    var1 = 1;
                    var1 = var6.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0004_ip = 636; continue _fun0004;
 464:
                    var3 = var5.add;
                    var6 = var4.getData;
                    var1 = 'userId';
                    var1 = var6.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0004_ip = 636; continue _fun0004;
 494:
                    var3 = var4.getData;
                    var1 = 'start';
                    var6 = var3.bind(var4)(var1);
                    var3 = var4.getData;
                    var1 = 'end';
                    var5 = var3.bind(var4)(var1);
                    if(!var6) { _fun0004_ip = 575; continue _fun0004 }
 527:
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
 575:
                    var1 = var5;
                    if(!var1) { _fun0004_ip = 632; continue _fun0004 }
 581:
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
 632:
                    var1 = undefined;
                    return var1;
 636:
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
            if(!var2) { _fun0003_ip = 141; continue _fun0003 }
 74:
            var11 = var9[var3];
            var2 = _closure1_slot3;
            var2 = var2.bind(var6)(var11, var5);
            var11 = var2[var8];
            var13 = var2[var4];
            var2 = var10.Set;
            var2 = var13 instanceof var2;
            if(!var2) { _fun0003_ip = 129; continue _fun0003 }
 109:
            var12 = var10.Array;
            var2 = var12.from;
            var2 = var2.bind(var12)(var13);
            var1[var11] = var2;
 129:
            var3 = var3 + 1;
            var2 = var9.length;
            if(var3 < var2) { _fun0003_ip = 74; continue _fun0003 }
 141:
            var2 = var1.content;
            if(!var2) { _fun0003_ip = 197; continue _fun0003 }
 149:
            var4 = var1.content;
            var3 = var4.join;
            var2 = ' ';
            var3 = var3.bind(var4)(var2);
            var2 = var3.trim;
            var2 = var2.bind(var3)();
            var1['content'] = var2;
            var2 = var1.content;
            if(var2) { _fun0003_ip = 197; continue _fun0003 }
 192:
            var2 = delete var1.content;
 197:
            return var1;
        }
    };
    var3['getSearchQueryFromTokens'] = var5;
    var5 = function getNonTokenQuery(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                if(!(var4 === var2)) { _fun0005_ip = 57; continue _fun0005 }
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
    var3['getNonTokenQuery'] = var5;
    var5 = function getSelectionScope(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var4 = arg2;
            var3 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var3;
            var2 = var6.find;
            var1 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var6 = arg2;
                    var3 = _closure2_slot1;
                    var2 = var1.start;
                    if(!(var3 >= var2)) { _fun0007_ip = 61; continue _fun0007 }
 22:
                    var3 = _closure2_slot1;
                    var2 = var1.end;
                    if(!(var3 <= var2)) { _fun0007_ip = 61; continue _fun0007 }
 35:
                    var3 = _closure2_slot2;
                    var2 = var1.start;
                    if(!(var3 >= var2)) { _fun0007_ip = 61; continue _fun0007 }
 48:
                    var3 = _closure2_slot2;
                    var2 = var1.end;
                    if(!(!(var3 <= var2))) { _fun0007_ip = 69; continue _fun0007 }
 61:
                    var _closure2_slot3 = var1;
                    var1 = false;
                    _fun0007_ip = 113; continue _fun0007;
 69:
                    var5 = _closure2_slot0;
                    var3 = 1;
                    var2 = var6 + var3;
                    var5 = var5[var2];
                    var2 = null;
                    var5 = var2 != var5;
                    var1 = true;
                    if(!var5) { _fun0007_ip = 113; continue _fun0007 }
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
            if(var2) { _fun0006_ip = 89; continue _fun0006 }
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
    var3['getSelectionScope'] = var5;
    var5 = function getAutocompleteMode(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var7 = null;
            if(!(var7 == var1)) { _fun0008_ip = 11; continue _fun0008 }
 9:
            var1 = {};
 11:
            var3 = var1.currentToken;
            var2 = var1.nextToken;
            var6 = var1.previousToken;
            var1 = arg2;
            var4 = var1.length;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0008_ip = 441; continue _fun0008 }
 46:
            if(!(var7 != var3)) { _fun0008_ip = 406; continue _fun0008 }
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
            if(!var1) { _fun0008_ip = 200; continue _fun0008 }
 97:
            if(!(var7 != var2)) { _fun0008_ip = 374; continue _fun0008 }
 104:
            var8 = var2.type;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var1 = var10.bind(var5)(var1);
            var1 = var1.NON_TOKEN_TYPE;
            if(!(var8 !== var1)) { _fun0008_ip = 374; continue _fun0008 }
 142:
            if(!(var7 != var2)) { _fun0008_ip = 200; continue _fun0008 }
 146:
            var10 = _closure1_slot11;
            var8 = var10.test;
            var1 = var2.type;
            var1 = var8.bind(var10)(var1);
            if(var1) { _fun0008_ip = 200; continue _fun0008 }
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
            if(!(var8 === var1)) { _fun0008_ip = 275; continue _fun0008 }
 235:
            if(!(var7 != var6)) { _fun0008_ip = 275; continue _fun0008 }
 239:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var9 = var8.bind(var5)(var1);
            var8 = var9.isSearchFilterTokenType;
            var1 = var6.type;
            var1 = var8.bind(var9)(var1);
            if(var1) { _fun0008_ip = 339; continue _fun0008 }
 275:
            var8 = var3.type;
            var9 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var9.bind(var5)(var1);
            var1 = var1.NON_TOKEN_TYPE;
            var5 = undefined;
            if(!(var8 === var1)) { _fun0008_ip = 312; continue _fun0008 }
 309:
            var5 = var3;
 312:
            var1 = {};
            var8 = _closure1_slot10;
            var8 = var8.FILTER_ALL;
            var1['type'] = var8;
            var1['filter'] = var7;
            var1['token'] = var5;
            _fun0008_ip = 372; continue _fun0008;
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
    var3['getAutocompleteMode'] = var5;
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = arg1;
                var _closure3_slot0 = var5;
                var2 = null;
                if(!(var2 != var5)) { _fun0009_ip = 86; continue _fun0009 }
 15:
                var2 = var5.results;
                var3 = var2.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0009_ip = 86; continue _fun0009 }
 32:
                var2 = var5.group;
                var _closure3_slot1 = var2;
                var4 = _closure2_slot1;
                var3 = var4.concat;
                var6 = var5.results;
                var5 = var6.map;
                var1 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var3 = arg1;
                        var4 = var3.text;
                        var1 = var3.channel;
                        var5 = null;
                        var1 = var5 != var1;
                        if(!var1) { _fun0010_ip = 41; continue _fun0010 }
 22:
                        var7 = var3.text;
                        var6 = var7.includes;
                        var2 = ' ';
                        var1 = var6.bind(var7)(var2);
 41:
                        var7 = var4;
                        if(!var1) { _fun0010_ip = 70; continue _fun0010 }
 47:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = '"';
                        var7 = var2.bind(var1)(var4, var1);
 70:
                        var1 = _closure2_slot0;
                        var6 = var1.type;
                        var1 = _closure1_slot10;
                        var1 = var1.FILTER_ALL;
                        var2 = var7;
                        if(!(var6 === var1)) { _fun0010_ip = 241; continue _fun0010 }
 105:
                        var6 = var3.group;
                        if(!(var5 == var6)) { _fun0010_ip = 122; continue _fun0010 }
 115:
                        var6 = _closure3_slot1;
 122:
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
                        if(var8) { _fun0010_ip = 173; continue _fun0010 }
 168:
                        var4 = var1.key;
 173:
                        var4 = var5 != var4;
                        if(!var4) { _fun0010_ip = 202; continue _fun0010 }
 180:
                        var5 = var5 == var1;
                        var6 = undefined;
                        if(var5) { _fun0010_ip = 194; continue _fun0010 }
 189:
                        var6 = var1.key;
 194:
                        var5 = '';
                        var4 = var5 !== var6;
 202:
                        var2 = var7;
                        if(!var4) { _fun0010_ip = 241; continue _fun0010 }
 208:
                        var6 = var1.key;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var4 = '';
                        var1 = ' ';
                        var2 = var5.bind(var4)(var6, var1, var7);
 241:
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = arg1;
                var2 = arg2;
                var4 = null;
                var1 = var3;
                if(!(var4 != var2)) { _fun0011_ip = 30; continue _fun0011 }
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var5 = arg1;
            var1 = null;
            var2 = var1 == var5;
            var4 = '';
            var1 = var4;
            if(var2) { _fun0012_ip = 48; continue _fun0012 }
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
        var4 = _closure1_slot16;
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
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0013_ip = 23; continue _fun0013 }
 12:
            var2 = _closure1_slot14;
            var1 = var2[var3];
 23:
            return var1;
        }
    };
    var3['showDatePicker'] = var4;
    var4 = function filterHasAnswer(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var3 = arg2;
            var5 = _closure1_slot12;
            var2 = var5.test;
            var1 = arg1;
            var1 = var1.type;
            var5 = var2.bind(var5)(var1);
            var2 = null;
            var1 = var2 == var3;
            if(!var1) { _fun0014_ip = 40; continue _fun0014 }
 37:
            var1 = var5;
 40:
            if(var1) { _fun0014_ip = 81; continue _fun0014 }
 43:
            var2 = var2 != var3;
            if(!var2) { _fun0014_ip = 53; continue _fun0014 }
 50:
            var2 = var5;
 53:
            if(!var2) { _fun0014_ip = 78; continue _fun0014 }
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
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot13;
            var1 = var1.GUILD;
            if(!(var4 !== var1)) { _fun0015_ip = 101; continue _fun0015 }
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
            if(!var1) { _fun0015_ip = 83; continue _fun0015 }
 80:
            var1 = var3;
 83:
            if(!var1) { _fun0015_ip = 99; continue _fun0015 }
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
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var5 = arg1;
            var1 = var5.isGroupDM;
            var2 = var1.bind(var5)();
            if(var2) { _fun0016_ip = 190; continue _fun0016 }
 22:
            var2 = var5.isDM;
            var2 = var2.bind(var5)();
            if(var2) { _fun0016_ip = 118; continue _fun0016 }
 35:
            var4 = _closure1_slot4;
            var3 = var4.getTextChannelNameDisambiguations;
            var2 = var5.getGuildId;
            var2 = var2.bind(var5)();
            var3 = var3.bind(var4)(var2);
            var2 = var5.id;
            var3 = var3[var2];
            var2 = null;
            var6 = var2 == var3;
            var4 = undefined;
            if(var6) { _fun0016_ip = 85; continue _fun0016 }
 80:
            var4 = var3.name;
 85:
            if(!(var2 == var4)) { _fun0016_ip = 94; continue _fun0016 }
 89:
            var4 = var5.name;
 94:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '#';
            var2 = var3.bind(var2)(var4);
            return var2;
 118:
            var2 = var5.getRecipientId;
            var4 = var2.bind(var5)();
            var3 = _closure1_slot8;
            var2 = var3.getUser;
            var4 = var2.bind(var3)(var4);
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 14;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var2 = var3.getUserTag;
            var3 = var2.bind(var3)(var4);
            var2 = null;
            var4 = var2 != var3;
            if(!var4) { _fun0016_ip = 188; continue _fun0016 }
 185:
            var2 = var3;
 188:
            return var2;
 190:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.computeChannelName;
            var2 = _closure1_slot8;
            var1 = _closure1_slot6;
            var4 = var3.bind(var4)(var5, var2, var1);
            var2 = var4.includes;
            var1 = ' ';
            var2 = var2.bind(var4)(var1);
            var1 = var4;
            if(!var2) { _fun0016_ip = 276; continue _fun0016 }
 253:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '"';
            var1 = var3.bind(var2)(var4, var2);
 276:
            return var1;
        }
    };
    var3['getChannelDisplayName'] = var2;
    return var1;
})();