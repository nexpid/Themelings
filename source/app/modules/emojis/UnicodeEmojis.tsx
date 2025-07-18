// app/modules/emojis/UnicodeEmojis.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var5 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
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
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
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
            var9 = _closure1_slot18;
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
            var7 = _closure1_slot18;
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
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
    var1 = function getEmojiObjectByName(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 3;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var3 = var1.nameToEmoji;
            var1 = arg1;
            var3 = var3[var1];
            var1 = null;
            var4 = var1 == var3;
            if(var4) { _fun0004_ip = 74; continue _fun0004 }
 47:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.emojis;
            var1 = var2[var3];
 74:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function getEmojiObjectBySurrogate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 3;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var3 = var1.surrogateToEmoji;
            var1 = arg1;
            var3 = var3[var1];
            var1 = null;
            var4 = var1 == var3;
            if(var4) { _fun0005_ip = 74; continue _fun0005 }
 47:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.emojis;
            var1 = var2[var3];
 74:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function parseRawEmojiObject(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot7;
            var1 = var2.get;
            var1 = var1.bind(var2)(var5);
            var2 = null;
            if(!(var2 == var1)) { _fun0006_ip = 70; continue _fun0006 }
 26:
            var2 = _closure1_slot12;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var7 = var5;
            var2 = new var8[var2](var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var4 = _closure1_slot7;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var2);
            return var2;
 70:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var14 = function getByName(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = _closure1_slot19;
            var4 = undefined;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            var5 = var1 != var3;
            if(!var5) { _fun0007_ip = 35; continue _fun0007 }
 26:
            var2 = _closure1_slot21;
            var1 = var2.bind(var4)(var3);
 35:
            return var1;
        }
    };
    var _closure1_slot22 = var14;
    var13 = function contentHasUnicodeOrEmoji(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.test;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot23 = var13;
    var1 = function emojiNameOrUnicodeSequence(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot20;
            var5 = undefined;
            var2 = var1.bind(var5)(var3);
            var1 = null;
            var4 = var1 == var2;
            if(var4) { _fun0008_ip = 37; continue _fun0008 }
 26:
            var4 = var2.names;
            var2 = 0;
            var5 = var4[var2];
 37:
            if(!(var1 == var5)) { _fun0008_ip = 57; continue _fun0008 }
 41:
            var1 = {};
            var2 = 'text';
            var1['type'] = var2;
            var1['text'] = var3;
            _fun0008_ip = 103; continue _fun0008;
 57:
            var2 = {};
            var4 = 'emoji';
            var2['type'] = var4;
            var2['surrogate'] = var3;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = ':';
            var3 = var4.bind(var3)(var5, var3);
            var2['emojiName'] = var3;
            var1 = var2;
 103:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var12 = function findInlineEmojisFromSurrogates(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var2 = true;
            var1 = arg2;
            if(!(var2 !== var1)) { _fun0009_ip = 53; continue _fun0009 }
 12:
            var2 = _closure1_slot23;
            var1 = undefined;
            var1 = var2.bind(var1)(var5);
            if(var1) { _fun0009_ip = 53; continue _fun0009 }
 29:
            var2 = {};
            var1 = 'text';
            var2['type'] = var1;
            var2['text'] = var5;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
 53:
            var1 = new Array(0);
            var4 = var5.match;
            var3 = _closure1_slot11;
            var15 = var4.bind(var5)(var3);
            var3 = null;
            if(!(var3 == var15)) { _fun0009_ip = 85; continue _fun0009 }
 81:
            var15 = new Array(0);
 85:
            var4 = var15.length;
            var14 = 0;
            var7 = var14 < var4;
            var6 = '';
            var5 = undefined;
            var13 = 'text';
            var12 = 1;
            var11 = var6;
            var10 = 0;
            var9 = undefined;
            var8 = undefined;
            var4 = var11;
            if(!var7) { _fun0009_ip = 370; continue _fun0009 }
 127:
            var7 = var15[var10];
            if(!(var3 != var11)) { _fun0009_ip = 139; continue _fun0009 }
 135:
            if(!(var6 === var11)) { _fun0009_ip = 167; continue _fun0009 }
 139:
            var21 = _closure1_slot15;
            var20 = var11;
            var19 = var7;
            var18 = var9;
            var17 = var8;
            var16 = var19;
            if(!(var16 !== var21)) { _fun0009_ip = 343; continue _fun0009 }
 165:
            _fun0009_ip = 238; continue _fun0009;
 167:
            var21 = _closure1_slot14;
            if(!(var7 !== var21)) { _fun0009_ip = 231; continue _fun0009 }
 175:
            var22 = _closure1_slot16;
            var21 = var22.test;
            var21 = var21.bind(var22)(var7);
            if(var21) { _fun0009_ip = 219; continue _fun0009 }
 192:
            var22 = var1.push;
            var21 = _closure1_slot24;
            var21 = var21.bind(var5)(var11);
            var21 = var22.bind(var1)(var21);
            var20 = var6;
            var19 = var7;
            _fun0009_ip = 238; continue _fun0009;
 219:
            var16 = var11 + var7;
            var18 = var9;
            var17 = var8;
            _fun0009_ip = 343; continue _fun0009;
 231:
            var19 = var11 + var7;
            var20 = var6;
 238:
            var7 = _closure1_slot24;
            var19 = var7.bind(var5)(var19);
            var7 = var1.length;
            if(!(var7 > var14)) { _fun0009_ip = 293; continue _fun0009 }
 256:
            var7 = var1.length;
            var7 = var7 - var12;
            var7 = var1[var7];
            var21 = var19.type;
            var8 = var7;
            if(!(var13 === var21)) { _fun0009_ip = 293; continue _fun0009 }
 281:
            var21 = var7.type;
            var8 = var7;
            if(!(var13 !== var21)) { _fun0009_ip = 314; continue _fun0009 }
 293:
            var21 = var1.push;
            var21 = var21.bind(var1)(var19);
            var17 = var8;
            var16 = var20;
            var18 = var19;
            _fun0009_ip = 343; continue _fun0009;
 314:
            var22 = var7.text;
            var21 = var19.text;
            var21 = var22 + var21;
            var7['text'] = var21;
            var16 = var20;
            var18 = var19;
            var17 = var7;
 343:
            var10 = var10 + 1;
            var7 = var15.length;
            var11 = var16;
            var9 = var18;
            var8 = var17;
            var4 = var11;
            if(var10 < var7) { _fun0009_ip = 127; continue _fun0009 }
 370:
            var3 = var3 != var4;
            if(!var3) { _fun0009_ip = 381; continue _fun0009 }
 377:
            var3 = var6 !== var4;
 381:
            if(!var3) { _fun0009_ip = 403; continue _fun0009 }
 384:
            var3 = var1.push;
            var2 = _closure1_slot24;
            var2 = var2.bind(var5)(var4);
            var2 = var3.bind(var1)(var2);
 403:
            return var1;
        }
    };
    var _closure1_slot25 = var12;
    var11 = function convertNameToSurrogate(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arguments[1];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0010_ip = 13; continue _fun0010 }
 9:
            var1 = '';
 13:
            var4 = _closure1_slot19;
            var3 = arg1;
            var4 = var4.bind(var2)(var3);
            var3 = null;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0010_ip = 44; continue _fun0010 }
 39:
            var2 = var4.surrogates;
 44:
            if(!(var3 != var2)) { _fun0010_ip = 51; continue _fun0010 }
 48:
            var1 = var2;
 51:
            return var1;
        }
    };
    var _closure1_slot26 = var11;
    var10 = function convertSurrogateToName(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arguments[1];
            var4 = arguments[2];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0011_ip = 14; continue _fun0011 }
 12:
            var2 = true;
 14:
            if(!(var4 === var1)) { _fun0011_ip = 22; continue _fun0011 }
 18:
            var4 = '';
 22:
            var5 = _closure1_slot20;
            var3 = arg1;
            var5 = var5.bind(var1)(var3);
            var3 = null;
            var6 = var3 == var5;
            var1 = undefined;
            if(var6) { _fun0011_ip = 59; continue _fun0011 }
 48:
            var6 = var5.names;
            var5 = 0;
            var1 = var6[var5];
 59:
            if(!(var3 != var1)) { _fun0011_ip = 66; continue _fun0011 }
 63:
            var4 = var1;
 66:
            var1 = var4;
            if(!var2) { _fun0011_ip = 95; continue _fun0011 }
 72:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ':';
            var1 = var3.bind(var2)(var4, var2);
 95:
            return var1;
        }
    };
    var _closure1_slot27 = var10;
    var6 = global;
    var15 = var6.Object;
    var7 = var15.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var15)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = null;
    var _closure1_slot6 = var4;
    var4 = var6.WeakMap;
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var21 = var5;
    var4 = new var21[var4](var20);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot7 = var4;
    var5 = ['🏻', '🏼', '🏽', '🏾', '🏿'];
    var _closure1_slot8 = var5;
    var7 = /^:([^\s:]+?(?:::skin-tone-\d)?):/;
    var _closure1_slot9 = var7;
    var4 = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/;
    var _closure1_slot10 = var4;
    var4 = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
    var _closure1_slot11 = var4;
    var4 = function() {
        var4 = _closure1_slot4;
        var3 = function Emoji(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var2 = arg1;
                var10 = this;
                var4 = _closure1_slot3;
                var3 = _closure2_slot0;
                var1 = undefined;
                var3 = var4.bind(var1)(var10, var3);
                var10['emojiObject'] = var2;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 4;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var3 = var3.EmojiTypes;
                var3 = var3.UNICODE;
                var10['type'] = var3;
                var4 = var2.names;
                var3 = 0;
                var3 = var4[var3];
                var10['uniqueName'] = var3;
                var3 = var2.surrogates;
                var10['surrogates'] = var3;
                var3 = {};
                var10['diversityChildren'] = var3;
                var3 = var2.diversityChildren;
                var7 = null;
                if(!(var7 != var3)) { _fun0012_ip = 265; continue _fun0012 }
 123:
                var3 = _closure1_slot17;
                var2 = var2.diversityChildren;
                var6 = var3.bind(var1)(var2);
                var3 = var6.bind(var1)();
                var2 = var3.done;
                var5 = '-';
                var4 = 3;
                if(var2) { _fun0012_ip = 265; continue _fun0012 }
 157:
                var11 = var3.value;
                var12 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var12.bind(var1)(var2);
                var2 = var2.emojis;
                var14 = var2[var11];
                var2 = var14.diversity;
                if(!(var7 != var2)) { _fun0012_ip = 250; continue _fun0012 }
 198:
                var11 = var14.diversity;
                var2 = var11.join;
                var12 = var2.bind(var11)(var5);
                var11 = var10.diversityChildren;
                var2 = _closure2_slot0;
                var13 = var2.prototype;
                var13 = Object.create(var13, {constructor: {value: var2}});
                var17 = var13;
                var16 = var14;
                var2 = new var17[var2](var16, var15);
                var2 = var2 instanceof Object ? var2 : var13;
                var11[var12] = var2;
 250:
                var11 = var6.bind(var1)();
                var2 = var11.done;
                var3 = var11;
                if(!var2) { _fun0012_ip = 157; continue _fun0012 }
 265:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'names';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1.emojiObject;
            var1 = var1.names;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(15);
        var2[0] = var1;
        var1 = {};
        var6 = 'allNamesString';
        var1['key'] = var6;
        var6 = function get() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var2 = this;
                var1 = var2.names;
                var3 = var1.length;
                var1 = 1;
                if(!(!(var3 > var1))) { _fun0013_ip = 51; continue _fun0013 }
 20:
                var4 = var2.uniqueName;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = ':';
                var1 = var3.bind(var1)(var4, var1);
                _fun0013_ip = 95; continue _fun0013;
 51:
                var4 = var2.names;
                var3 = var4.join;
                var2 = ': :';
                var4 = var3.bind(var4)(var2);
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = ':';
                var1 = var3.bind(var2)(var4, var2);
 95:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'unicodeVersion';
        var1['key'] = var6;
        var6 = function get() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var1 = this;
                var1 = var1.emojiObject;
                var2 = var1.unicodeVersion;
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0014_ip = 28; continue _fun0014 }
 25:
                var1 = var2;
 28:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'hasDiversity';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1.emojiObject;
            var1 = var1.hasDiversity;
            return var1;
        };
        var1['get'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'hasMultiDiversity';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1.emojiObject;
            var1 = var1.hasMultiDiversity;
            return var1;
        };
        var1['get'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'hasDiversityParent';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1.emojiObject;
            var1 = var1.hasDiversityParent;
            return var1;
        };
        var1['get'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'hasMultiDiversityParent';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1.emojiObject;
            var1 = var1.hasMultiDiversityParent;
            return var1;
        };
        var1['get'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'managed';
        var1['key'] = var6;
        var6 = function get() {
            var1 = true;
            return var1;
        };
        var1['get'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'animated';
        var1['key'] = var6;
        var6 = function get() {
            var1 = false;
            return var1;
        };
        var1['get'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'defaultDiversityChild';
        var1['key'] = var6;
        var6 = function get() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = this;
                var2 = var1.hasDiversity;
                if(!var2) { _fun0015_ip = 25; continue _fun0015 }
 12:
                var4 = _closure1_slot6;
                var2 = null;
                if(!(var2 == var4)) { _fun0015_ip = 29; continue _fun0015 }
 25:
                var4 = null;
                return var4;
 29:
                var5 = _closure1_slot6;
                var3 = _closure1_slot5;
                var4 = var3.convert;
                var3 = var4.toCodePoint;
                var3 = var3.bind(var4)(var5);
                var4 = var2 != var3;
                var2 = '';
                if(!var4) { _fun0015_ip = 68; continue _fun0015 }
 65:
                var2 = var3;
 68:
                var1 = var1.diversityChildren;
                var1 = var1[var2];
                return var1;
            }
        };
        var1['get'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'url';
        var1['key'] = var6;
        var6 = function get() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = this;
                var2 = var1.defaultDiversityChild;
                var3 = null;
                if(!(var3 == var2)) { _fun0016_ip = 58; continue _fun0016 }
 15:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.getURL;
                var1 = var1.surrogates;
                var1 = var3.bind(var4)(var1);
                _fun0016_ip = 99; continue _fun0016;
 58:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.getURL;
                var2 = var2.surrogates;
                var1 = var3.bind(var4)(var2);
 99:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'name';
        var1['key'] = var6;
        var6 = function get() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var4 = this;
                var1 = var4.hasDiversity;
                if(!var1) { _fun0017_ip = 25; continue _fun0017 }
 12:
                var1 = _closure1_slot6;
                var3 = null;
                if(!(var3 == var1)) { _fun0017_ip = 33; continue _fun0017 }
 25:
                var1 = var4.uniqueName;
                _fun0017_ip = 104; continue _fun0017;
 33:
                var6 = var4.uniqueName;
                var5 = _closure1_slot20;
                var2 = _closure1_slot6;
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var3 == var2;
                var5 = undefined;
                if(var3) { _fun0017_ip = 74; continue _fun0017 }
 63:
                var3 = var2.names;
                var2 = 0;
                var5 = var3[var2];
 74:
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = '::';
                var1 = var4.bind(var3)(var6, var2, var5);
 104:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'optionallyDiverseSequence';
        var1['key'] = var6;
        var6 = function get() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var1 = this;
                var2 = var1.defaultDiversityChild;
                var3 = null;
                if(!(var3 == var2)) { _fun0018_ip = 22; continue _fun0018 }
 15:
                var1 = var1.surrogates;
                _fun0018_ip = 27; continue _fun0018;
 22:
                var1 = var2.surrogates;
 27:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'forEachDiversity';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var1 = this;
                var3 = var1.diversityChildren;
                var2 = null;
                if(!(var2 != var3)) { _fun0019_ip = 61; continue _fun0019 }
 15:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.each;
                var2 = var1.diversityChildren;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
 61:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'forEachName';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.each;
            var2 = this;
            var3 = var2.names;
            var2 = arg1;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['value'] = var5;
        var2[14] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot12 = var4;
    var15 = var6.Map;
    var16 = var15.prototype;
    var16 = Object.create(var16, {constructor: {value: var15}});
    var21 = var16;
    var15 = new var21[var15](var20);
    var15 = var15 instanceof Object ? var15 : var16;
    var _closure1_slot13 = var15;
    var17 = var6.String;
    var16 = var17.fromCodePoint;
    var15 = 917631;
    var15 = var16.bind(var17)(var15);
    var _closure1_slot14 = var15;
    var16 = var6.String;
    var15 = var16.fromCodePoint;
    var6 = 127988;
    var6 = var15.bind(var16)(var6);
    var _closure1_slot15 = var6;
    var6 = /^(?:\uDB40[\uDC61-\uDC7A])$/;
    var _closure1_slot16 = var6;
    var6 = {};
    var15 = function getDefaultDiversitySurrogate() {
        var1 = _closure1_slot6;
        return var1;
    };
    var6['getDefaultDiversitySurrogate'] = var15;
    var15 = function setDefaultDiversitySurrogate(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var4 = null;
            var3 = var4 != var1;
            var2 = null;
            if(!var3) { _fun0020_ip = 27; continue _fun0020 }
 14:
            var3 = '';
            var2 = null;
            if(!(var3 !== var1)) { _fun0020_ip = 27; continue _fun0020 }
 24:
            var2 = var1;
 27:
            _closure1_slot6 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var6['setDefaultDiversitySurrogate'] = var15;
    var15 = function getCategories() {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.keys;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 3;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var1 = var1.emojisByCategory;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var6['getCategories'] = var15;
    var6['getByName'] = var14;
    var14 = function getByCategory(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot13;
            var1 = var2.get;
            var1 = var1.bind(var2)(var5);
            var2 = null;
            if(!(var2 == var1)) { _fun0021_ip = 159; continue _fun0021 }
 29:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 3;
            var4 = var9[var2];
            var7 = undefined;
            var4 = var8.bind(var7)(var4);
            var4 = var4.emojisByCategory;
            var10 = var4[var5];
            var6 = _closure1_slot1;
            var4 = 5;
            var4 = var9[var4];
            var6 = var6.bind(var7)(var4);
            var4 = var6.filterUnsupportedEmojis;
            var2 = var9[var2];
            var2 = var8.bind(var7)(var2);
            var9 = var2.emojis;
            var8 = var9.slice;
            var2 = 0;
            var7 = var10[var2];
            var2 = 1;
            var2 = var10[var2];
            var2 = var8.bind(var9)(var7, var2);
            var6 = var4.bind(var6)(var2);
            var4 = var6.map;
            var2 = _closure1_slot21;
            var2 = var4.bind(var6)(var2);
            var4 = _closure1_slot13;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var2);
            var1 = var2;
 159:
            return var1;
        }
    };
    var6['getByCategory'] = var14;
    var6['contentHasUnicodeOrEmoji'] = var13;
    var13 = function translateInlineEmojiToSurrogates(arg1) {
        var4 = arg1;
        var3 = var4.replace;
        var2 = _closure1_slot9;
        var1 = function(arg1, arg2) {
            var4 = _closure1_slot26;
            var3 = undefined;
            var2 = arg2;
            var1 = arg1;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6['translateInlineEmojiToSurrogates'] = var13;
    var13 = function maybeTranslateSurrogatesToInlineEmoji(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot23;
            var4 = undefined;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0022_ip = 24; continue _fun0022 }
 20:
            var2 = null;
            return var2;
 24:
            var2 = _closure1_slot25;
            var1 = true;
            var4 = var2.bind(var4)(var3, var1);
            var2 = var4.map;
            var1 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = 'text';
                    if(!(var1 !== var3)) { _fun0023_ip = 24; continue _fun0023 }
 16:
                    var1 = var2.emojiName;
                    _fun0023_ip = 29; continue _fun0023;
 24:
                    var1 = var2.text;
 29:
                    return var1;
                }
            };
            var4 = var2.bind(var4)(var1);
            var2 = var4.join;
            var1 = '';
            var2 = var2.bind(var4)(var1);
            var1 = null;
            if(!(var2 !== var3)) { _fun0022_ip = 76; continue _fun0022 }
 73:
            var1 = var2;
 76:
            return var1;
        }
    };
    var6['maybeTranslateSurrogatesToInlineEmoji'] = var13;
    var6['findInlineEmojisFromSurrogates'] = var12;
    var12 = function translateSurrogatesToInlineEmoji(arg1) {
        var3 = _closure1_slot25;
        var2 = undefined;
        var1 = arg1;
        var3 = var3.bind(var2)(var1);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var2 = arg1;
                var3 = var2.type;
                var1 = 'text';
                if(!(var1 !== var3)) { _fun0024_ip = 24; continue _fun0024 }
 16:
                var1 = var2.emojiName;
                _fun0024_ip = 29; continue _fun0024;
 24:
                var1 = var2.text;
 29:
                return var1;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.join;
        var1 = '';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var6['translateSurrogatesToInlineEmoji'] = var12;
    var6['convertNameToSurrogate'] = var11;
    var6['convertSurrogateToName'] = var10;
    var10 = function convertShortcutToName(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var5 = arg1;
            var3 = arguments[1];
            var4 = arguments[2];
            var7 = undefined;
            if(!(var3 === var7)) { _fun0025_ip = 17; continue _fun0025 }
 15:
            var3 = true;
 17:
            if(!(var4 === var7)) { _fun0025_ip = 25; continue _fun0025 }
 21:
            var4 = '';
 25:
            var2 = global;
            var1 = var2.Object;
            var1 = var1.prototype;
            var10 = var1.hasOwnProperty;
            var9 = var10.call;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = 7;
            var6 = var6[var8];
            var6 = var11.bind(var7)(var6);
            var6 = var9.bind(var10)(var6, var5);
            if(!var6) { _fun0025_ip = 102; continue _fun0025 }
 81:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var6.bind(var7)(var1);
            var4 = var1[var5];
 102:
            var1 = var4;
            if(!var3) { _fun0025_ip = 129; continue _fun0025 }
 108:
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = ':';
            var1 = var3.bind(var2)(var4, var2);
 129:
            return var1;
        }
    };
    var6['convertShortcutToName'] = var10;
    var10 = function convertSurrogateToBase(arg1) {
        var3 = _closure1_slot22;
        var5 = _closure1_slot27;
        var6 = _closure1_slot8;
        var4 = var6.reduce;
        var2 = function(arg1, arg2) {
            var4 = arg1;
            var3 = var4.replace;
            var2 = arg2;
            var1 = '';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = arg1;
        var4 = var4.bind(var6)(var2, var1);
        var2 = undefined;
        var1 = false;
        var1 = var5.bind(var2)(var4, var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var6['convertSurrogateToBase'] = var10;
    var10 = function forEach(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot17;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.emojis;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0026_ip = 106; continue _fun0026 }
 55:
            var7 = var3.value;
            var2 = var7.hasDiversityParent;
            if(var2) { _fun0026_ip = 74; continue _fun0026 }
 68:
            var2 = var7.hasMultiDiversityParent;
 74:
            if(var2) { _fun0026_ip = 91; continue _fun0026 }
 77:
            var2 = _closure1_slot21;
            var2 = var2.bind(var1)(var7);
            var2 = var6.bind(var1)(var2);
 91:
            var7 = var4.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0026_ip = 55; continue _fun0026 }
 106:
            return var1;
        }
    };
    var6['forEach'] = var10;
    var10 = 3;
    var11 = var9[var10];
    var11 = var8.bind(var1)(var11);
    var11 = var11.numDiversitySprites;
    var6['numDiversitySprites'] = var11;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var10 = var10.numNonDiversitySprites;
    var6['numNonDiversitySprites'] = var10;
    var10 = /^:([^\s:]+?(?:::skin-tone-\d)?):/;
    var6['EMOJI_NAME_RE'] = var10;
    var6['EMOJI_NAME_AND_DIVERSITY_RE'] = var7;
    var7 = /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\\/3|<\\3|:\-\\|:\-\\/|=\-\\|=\-\\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/;
    var6['EMOJI_SHORTCUT_RE'] = var7;
    var7 = function hasSurrogates(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.toArray;
        var1 = arg1;
        var3 = var2.bind(var3)(var1);
        var2 = var3.some;
        var1 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.surrogateToEmoji;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var6['hasSurrogates'] = var7;
    var7 = 8;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/emojis/UnicodeEmojis.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['DIVERSITY_SURROGATES'] = var5;
    var3['Emoji'] = var4;
    var2 = function(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var4 = arg1;
            var1 = var4.id;
            var3 = null;
            var2 = var3 == var1;
            var1 = null;
            if(!var2) { _fun0027_ip = 72; continue _fun0027 }
 19:
            var2 = var4.name;
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0027_ip = 72; continue _fun0027 }
 33:
            var2 = var4.name;
            var5 = var2.length;
            var2 = 0;
            var2 = var5 > var2;
            var1 = null;
            if(!var2) { _fun0027_ip = 72; continue _fun0027 }
 54:
            var2 = {};
            var4 = var4.name;
            var2['name'] = var4;
            var2['id'] = var3;
            var1 = var2;
 72:
            return var1;
        }
    };
    var3['asUnicodeEmoji'] = var2;
    return var1;
})();