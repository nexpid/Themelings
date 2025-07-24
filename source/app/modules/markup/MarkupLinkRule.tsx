// app/modules/markup/MarkupLinkRule.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var11 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var11;
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
    var1 = function sanitizeWithCache(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot4;
            var1 = var2.get;
            var1 = var1.bind(var2)(var5);
            var2 = null;
            if(!(var2 == var1)) { _fun0004_ip = 108; continue _fun0004 }
 26:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 2;
            var2 = var9[var4];
            var6 = undefined;
            var7 = var8.bind(var6)(var2);
            var2 = var7.sanitizeWhitespace;
            var7 = var2.bind(var7)(var5);
            var2 = {};
            var2['whitespaceSanitized'] = var7;
            var4 = var9[var4];
            var6 = var8.bind(var6)(var4);
            var4 = var6.sanitizeUnicodeConfusables;
            var4 = var4.bind(var6)(var7);
            var2['fullySanitized'] = var4;
            var4 = _closure1_slot4;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var2);
            return var2;
 108:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function validateContentTypes(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var12 = arg2;
            var11 = arguments[2];
            var10 = undefined;
            if(!(var11 === var10)) { _fun0005_ip = 19; continue _fun0005 }
 15:
            var11 = new Array(0);
 19:
            var9 = global;
            var2 = var9.Array;
            var1 = var2.isArray;
            var2 = var1.bind(var2)(var3);
            var1 = var3;
            if(var2) { _fun0005_ip = 54; continue _fun0005 }
 43:
            var2 = new Array(1);
            var2[0] = var3;
            var1 = var2;
 54:
            var2 = _closure1_slot11;
            var7 = var2.bind(var10)(var1);
            var4 = var7.bind(var10)();
            var3 = var4.done;
            var2 = null;
            var5 = 3;
            if(var3) { _fun0005_ip = 272; continue _fun0005 }
 86:
            var3 = var4.value;
            if(!(var10 !== var3)) { _fun0005_ip = 270; continue _fun0005 }
 98:
            var14 = var12.includes;
            var13 = var3.type;
            var13 = var14.bind(var12)(var13);
            if(!var13) { _fun0005_ip = 270; continue _fun0005 }
 119:
            var14 = var3.type;
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var5];
            var13 = var15.bind(var10)(var13);
            var13 = var13.AST_KEY;
            var13 = var13.INLINE_CODE;
            if(!(var14 === var13)) { _fun0005_ip = 203; continue _fun0005 }
 157:
            var15 = new Array(0);
            var18 = var15;
            var17 = var12;
            var16 = 0;
            var16 = arraySpread(var18, var17, var16);
            var18 = var15;
            var17 = var11;
            var13 = arraySpread(var18, var17, var16);
            var14 = _closure1_slot14;
            var13 = var3.validationChildContent;
            var13 = var14.bind(var10)(var13, var15);
            if(!(var2 != var13)) { _fun0005_ip = 268; continue _fun0005 }
 203:
            var15 = var9.Array;
            var14 = var15.isArray;
            var13 = var3.content;
            var13 = var14.bind(var15)(var13);
            if(!var13) { _fun0005_ip = 246; continue _fun0005 }
 227:
            var13 = _closure1_slot14;
            var3 = var3.content;
            var3 = var13.bind(var10)(var3, var12);
            if(!(var2 != var3)) { _fun0005_ip = 266; continue _fun0005 }
 246:
            var13 = var7.bind(var10)();
            var3 = var13.done;
            var4 = var13;
            if(var3) { _fun0005_ip = 272; continue _fun0005 }
 261:
            _fun0005_ip = 86; continue _fun0005;
 266:
            return var2;
 268:
            return var2;
 270:
            return var2;
 272:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function getRawText(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = _closure1_slot11;
            var13 = undefined;
            var1 = arg1;
            var12 = var2.bind(var13)(var1);
            var3 = var12.bind(var13)();
            var2 = var3.done;
            var1 = '';
            var11 = '\n';
            var10 = '<timestamp>';
            var9 = global;
            var8 = '<';
            var7 = 'Content>';
            var6 = 4;
            var5 = 3;
            var4 = var3;
            var3 = var1;
            var1 = var3;
            if(var2) { _fun0006_ip = 768; continue _fun0006 }
 73:
            var2 = var4.value;
            var16 = var2.type;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.TEXT;
            if(!(var15 !== var16)) { _fun0006_ip = 735; continue _fun0006 }
 119:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.INLINE_CODE;
            if(!(var15 !== var16)) { _fun0006_ip = 735; continue _fun0006 }
 155:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.CUSTOM_EMOJI;
            if(!(var15 !== var16)) { _fun0006_ip = 724; continue _fun0006 }
 191:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.EMOJI;
            if(!(var15 !== var16)) { _fun0006_ip = 712; continue _fun0006 }
 227:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.LINE_BREAK;
            if(!(var15 !== var16)) { _fun0006_ip = 706; continue _fun0006 }
 263:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.STRONG;
            if(!(var15 !== var16)) { _fun0006_ip = 686; continue _fun0006 }
 299:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.ITALICS;
            if(!(var15 !== var16)) { _fun0006_ip = 686; continue _fun0006 }
 335:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.UNDERLINE;
            if(!(var15 !== var16)) { _fun0006_ip = 686; continue _fun0006 }
 371:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.STRIKETHROUGH;
            if(!(var15 !== var16)) { _fun0006_ip = 686; continue _fun0006 }
 407:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.SPOILER;
            if(!(var15 !== var16)) { _fun0006_ip = 686; continue _fun0006 }
 443:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.TIMESTAMP;
            if(!(var15 !== var16)) { _fun0006_ip = 680; continue _fun0006 }
 479:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.BLOCK_QUOTE;
            if(!(var15 !== var16)) { _fun0006_ip = 652; continue _fun0006 }
 515:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.LIST;
            if(!(var15 !== var16)) { _fun0006_ip = 652; continue _fun0006 }
 548:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.HEADING;
            if(!(var15 !== var16)) { _fun0006_ip = 652; continue _fun0006 }
 581:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var5];
            var15 = var17.bind(var13)(var15);
            var15 = var15.AST_KEY;
            var15 = var15.SUBTEXT;
            if(!(var15 !== var16)) { _fun0006_ip = 652; continue _fun0006 }
 614:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var6];
            var17 = var16.bind(var13)(var15);
            var16 = var17.assertNever;
            var15 = var2.type;
            var15 = var16.bind(var17)(var15);
            var15 = var3;
            _fun0006_ip = 744; continue _fun0006;
 652:
            var17 = var2.type;
            var16 = var9.HermesInternal;
            var16 = var16.concat;
            var16 = var16.bind(var8)(var17, var7);
            var15 = var3 + var16;
            _fun0006_ip = 744; continue _fun0006;
 680:
            var15 = var3 + var10;
            _fun0006_ip = 744; continue _fun0006;
 686:
            var17 = _closure1_slot15;
            var16 = var2.content;
            var16 = var17.bind(var13)(var16);
            var15 = var3 + var16;
            _fun0006_ip = 744; continue _fun0006;
 706:
            var15 = var3 + var11;
            _fun0006_ip = 744; continue _fun0006;
 712:
            var16 = var2.surrogate;
            var15 = var3 + var16;
            _fun0006_ip = 744; continue _fun0006;
 724:
            var16 = var2.name;
            var15 = var3 + var16;
            _fun0006_ip = 744; continue _fun0006;
 735:
            var2 = var2.content;
            var15 = var3 + var2;
 744:
            var16 = var12.bind(var13)();
            var2 = var16.done;
            var3 = var15;
            var4 = var16;
            var1 = var3;
            if(!var2) { _fun0006_ip = 73; continue _fun0006 }
 768:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var4 = function isSuspiciousUrl(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.isSuspiciousCodedLink;
            var1 = var1.bind(var2)(var4);
            if(var1) { _fun0007_ip = 242; continue _fun0007 }
 45:
            var1 = _closure1_slot13;
            var1 = var1.bind(var6)(var4);
            var1 = var1.whitespaceSanitized;
            if(!(var1 === var4)) { _fun0007_ip = 238; continue _fun0007 }
 67:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 6;
            var1 = var1[var7];
            var2 = var2.bind(var6)(var1);
            var1 = var2.toURLSafe;
            var1 = var1.bind(var2)(var4);
            var2 = null;
            if(!(var2 != var1)) { _fun0007_ip = 234; continue _fun0007 }
 107:
            var5 = var1.protocol;
            var2 = 'http:';
            if(!(var2 !== var5)) { _fun0007_ip = 135; continue _fun0007 }
 121:
            var2 = var1.protocol;
            var1 = 'https:';
            if(!(var1 === var2)) { _fun0007_ip = 230; continue _fun0007 }
 135:
            var2 = var4.split;
            var1 = '/';
            var5 = var2.bind(var4)(var1);
            var2 = var5.length;
            var1 = 3;
            var1 = var2 < var1;
            if(var1) { _fun0007_ip = 228; continue _fun0007 }
 164:
            var2 = 1;
            var4 = var5[var2];
            var2 = '';
            var2 = var2 !== var4;
            if(var2) { _fun0007_ip = 225; continue _fun0007 }
 182:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var7 = var4.bind(var6)(var3);
            var6 = var7.safeDecodeURIComponent;
            var3 = 2;
            var4 = var5[var3];
            var4 = var6.bind(var7)(var4);
            var3 = var5[var3];
            var2 = var4 !== var3;
 225:
            var1 = var2;
 228:
            return var1;
 230:
            var1 = false;
            return var1;
 234:
            var1 = true;
            return var1;
 238:
            var1 = true;
            return var1;
 242:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot16 = var4;
    var2 = function punycodeLink(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var7 = undefined;
            var9 = undefined;
            var5 = undefined;
            var6 = undefined;
 11: // try_start_0
            var3 = _closure1_slot16;
            var2 = var1;
            var3 = var3.bind(var7)(var2);
            var2 = global;
            if(var3) { _fun0008_ip = 383; continue _fun0008 }
 34:
            var10 = var2.URL;
            var13 = var1;
            var8 = var10.prototype;
            var8 = Object.create(var8, {constructor: {value: var10}});
            var14 = var8;
            var3 = new var14[var10](var13, var12);
            var3 = var3 instanceof Object ? var3 : var8;
            var5 = var3;
            var3 = var3.protocol;
            var9 = var3;
            var8 = null;
            var10 = var8 != var3;
            var3 = '';
            var12 = var3;
            if(!var10) { _fun0008_ip = 94; continue _fun0008 }
 91:
            var12 = var9;
 94:
            var6 = var12;
            var11 = _closure1_slot5;
            var10 = var11.includes;
            var9 = var12.toLowerCase;
            var9 = var9.bind(var12)();
            var9 = var10.bind(var11)(var9);
            if(var9) { _fun0008_ip = 165; continue _fun0008 }
 124:
            var11 = var2.Error;
            var10 = var6;
            var9 = 'Provided protocol is not allowed: ';
            var13 = var9 + var10;
            var10 = var11.prototype;
            var10 = Object.create(var10, {constructor: {value: var11}});
            var14 = var10;
            var9 = new var14[var11](var13, var12);
            var9 = var9 instanceof Object ? var9 : var10;
            throw var9;
 165:
            var10 = var6;
            var9 = 'http:';
            if(!(var9 !== var10)) { _fun0008_ip = 187; continue _fun0008 }
 176:
            var9 = var6;
            var6 = 'https:';
            if(!(var6 === var9)) { _fun0008_ip = 254; continue _fun0008 }
 187:
            var6 = var5;
            var6 = var6.hostname;
            if(!(var8 != var6)) { _fun0008_ip = 220; continue _fun0008 }
 200:
            var6 = var5;
            var6 = var6.hostname;
            var8 = var6.length;
            var6 = 0;
            if(!(var6 === var8)) { _fun0008_ip = 254; continue _fun0008 }
 220:
            var9 = var2.Error;
            var6 = var9.prototype;
            var8 = Object.create(var6, {constructor: {value: var9}});
            var13 = 'no hostname';
            var14 = var8;
            var6 = new var14[var9](var13, var12);
            var6 = var6 instanceof Object ? var6 : var8;
            throw var6;
 254:
            var6 = var5;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 7;
            var5 = var8[var5];
            var10 = var9.bind(var7)(var5);
            var9 = var10.toASCII;
            var11 = var6.hostname;
            var5 = var11.toLowerCase;
            var5 = var5.bind(var11)();
            var5 = var9.bind(var10)(var5);
            var6['hostname'] = var5;
            var5 = _closure1_slot0;
            var4 = 2;
            var9 = var8[var4];
            var10 = var5.bind(var7)(var9);
            var9 = var10.safelyMakeUrlHumanReadable;
            var9 = var9.bind(var10)(var6);
            var6['username'] = var3;
            var6['password'] = var3;
            var3 = {};
            var3['target'] = var9;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.safelyMakeUrlHumanReadable;
            var4 = var4.bind(var5)(var6);
            var3['displayTarget'] = var4;
 381: // try_end0
            return var3;
 383: // try_start_1
            var3 = var2.Error;
            var4 = var2.JSON;
            var2 = var4.stringify;
            var2 = var2.bind(var4)(var1);
            var1 = 'Rejected due to suspicious characters in URL: ';
            var13 = var1 + var2;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var14 = var2;
            var1 = new var14[var3](var13, var12);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
 438: // try_end1 // catch_target0 // catch_target1
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot17 = var2;
    var1 = global;
    var10 = var1.Object;
    var6 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var5);
    var14 = 0;
    var5 = var9[var14];
    var1 = undefined;
    var5 = var11.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var13 = 1;
    var5 = var9[var13];
    var10 = var11.bind(var1)(var5);
    var5 = {};
    var6 = 50;
    var5['max'] = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var18 = var6;
    var17 = var5;
    var5 = new var18[var10](var17, var16);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot4 = var5;
    var5 = ['http:', 'https:', 'discord:', 'tel:', 'sms:', 'mailto:'];
    var _closure1_slot5 = var5;
    var10 = 3;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AST_KEY;
    var6 = var6.TEXT;
    var12 = new Array(9);
    var12[0] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AST_KEY;
    var6 = var6.UNDERLINE;
    var12[1] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AST_KEY;
    var6 = var6.STRONG;
    var12[2] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AST_KEY;
    var6 = var6.ITALICS;
    var12[3] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AST_KEY;
    var6 = var6.STRIKETHROUGH;
    var12[4] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AST_KEY;
    var6 = var6.INLINE_CODE;
    var12[5] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AST_KEY;
    var6 = var6.SPOILER;
    var12[6] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AST_KEY;
    var6 = var6.LINE_BREAK;
    var12[7] = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AST_KEY;
    var6 = var6.TIMESTAMP;
    var12[8] = var6;
    var _closure1_slot6 = var12;
    var6 = new Array(2);
    var17 = var6;
    var16 = var12;
    var15 = 0;
    var12 = arraySpread(var17, var16, var15);
    var14 = var9[var10];
    var14 = var8.bind(var1)(var14);
    var14 = var14.AST_KEY;
    var14 = var14.EMOJI;
    var6[var12] = var14;
    var13 = var12 + var13;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.CUSTOM_EMOJI;
    var6[var13] = var12;
    var _closure1_slot7 = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AST_KEY;
    var12 = var6.LIST;
    var6 = new Array(4);
    var6[0] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.HEADING;
    var6[1] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.BLOCK_QUOTE;
    var6[2] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.SUBTEXT;
    var6[3] = var12;
    var _closure1_slot8 = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AST_KEY;
    var12 = var6.TEXT;
    var6 = new Array(1);
    var6[0] = var12;
    var _closure1_slot9 = var6;
    var6 = var9[var10];
    var6 = var8.bind(var1)(var6);
    var6 = var6.AST_KEY;
    var12 = var6.UNDERLINE;
    var6 = new Array(14);
    var6[0] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.STRONG;
    var6[1] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.ITALICS;
    var6[2] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.STRIKETHROUGH;
    var6[3] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.INLINE_CODE;
    var6[4] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.SPOILER;
    var6[5] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.LINE_BREAK;
    var6[6] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.TIMESTAMP;
    var6[7] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.EMOJI;
    var6[8] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.CUSTOM_EMOJI;
    var6[9] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.LIST;
    var6[10] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.HEADING;
    var6[11] = var12;
    var12 = var9[var10];
    var12 = var8.bind(var1)(var12);
    var12 = var12.AST_KEY;
    var12 = var12.BLOCK_QUOTE;
    var6[12] = var12;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var10 = var10.AST_KEY;
    var10 = var10.SUBTEXT;
    var6[13] = var10;
    var _closure1_slot10 = var6;
    var6 = {};
    var10 = 8;
    var10 = var9[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.defaultRules;
    var16 = var10.link;
    var17 = var6;
    var10 = copyDataProperties(var17, var16);
    var11 = function match(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var6 = arg2;
            var2 = var6.allowLinks;
            var1 = null;
            if(!var2) { _fun0009_ip = 70; continue _fun0009 }
 14:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.defaultRules;
            var5 = var2.link;
            var4 = var5.match;
            var3 = arg1;
            var2 = arg3;
            var1 = var4.bind(var5)(var3, var6, var2);
 70:
            return var1;
        }
    };
    var10 = 'match';
    var6[var10] = var11;
    var10 = function parse(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var9 = arg2;
            var13 = arg3;
            var5 = _closure1_slot3;
            var2 = undefined;
            var4 = arg1;
            var3 = 4;
            var3 = var5.bind(var2)(var4, var3);
            var11 = 0;
            var4 = var3[var11];
            var _closure2_slot0 = var4;
            var4 = 1;
            var15 = var3[var4];
            var4 = 2;
            var21 = var3[var4];
            var20 = 3;
            var16 = var3[var20];
            var1 = function renderIndividualParts() {
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.AST_KEY;
                var2 = var2.TEXT;
                var1['type'] = var2;
                var2 = _closure2_slot0;
                var1['content'] = var2;
                return var1;
            };
            var3 = _closure1_slot16;
            var3 = var3.bind(var2)(var21);
            if(var3) { _fun0010_ip = 631; continue _fun0010 }
 80:
            var7 = _closure1_slot13;
            var5 = var7.bind(var2)(var21);
            var4 = var7.bind(var2)(var15);
            var14 = null;
            var8 = var14 != var16;
            var3 = '';
            if(!var8) { _fun0010_ip = 110; continue _fun0010 }
 107:
            var3 = var16;
 110:
            var3 = var7.bind(var2)(var3);
            var10 = var5.whitespaceSanitized;
            var12 = var4.fullySanitized;
            var8 = var3.fullySanitized;
            var5 = var12.trim;
            var5 = var5.bind(var12)();
            var7 = var10.trim;
            var7 = var7.bind(var10)();
            var7 = var7.length;
            if(!(var11 !== var7)) { _fun0010_ip = 625; continue _fun0010 }
 165:
            var5 = var5.length;
            if(!(var11 !== var5)) { _fun0010_ip = 625; continue _fun0010 }
 177:
            var18 = _closure1_slot17;
            var17 = _closure1_slot1;
            var7 = _closure1_slot2;
            var10 = 8;
            var5 = var7[var10];
            var19 = var17.bind(var2)(var5);
            var5 = var19.unescapeUrl;
            var5 = var5.bind(var19)(var21);
            var5 = var18.bind(var2)(var5);
            var18 = 5;
            var7 = var7[var18];
            var7 = var17.bind(var2)(var7);
            var7 = var7.bind(var2)(var15);
            var7 = var7.length;
            var7 = var7 > var11;
            if(var7) { _fun0010_ip = 277; continue _fun0010 }
 246:
            var17 = _closure1_slot1;
            var15 = _closure1_slot2;
            var15 = var15[var18];
            var15 = var17.bind(var2)(var15);
            var15 = var15.bind(var2)(var16);
            var15 = var15.length;
            var7 = var15 > var11;
 277:
            if(!(var14 != var5)) { _fun0010_ip = 619; continue _fun0010 }
 284:
            if(var7) { _fun0010_ip = 619; continue _fun0010 }
 290:
            var7 = {};
            var24 = var7;
            var23 = var13;
            var15 = copyDataProperties(var24, var23);
            var16 = false;
            var15 = 'allowEscape';
            var7[var15] = var16;
            var16 = true;
            var15 = 'parseInlineCodeChildContent';
            var7[var15] = var16;
            var13 = var13.allowEmojiLinks;
            if(var13) { _fun0010_ip = 341; continue _fun0010 }
 335:
            var13 = _closure1_slot6;
            _fun0010_ip = 345; continue _fun0010;
 341:
            var13 = _closure1_slot7;
 345:
            var18 = new Array(0);
            var24 = var18;
            var23 = var13;
            var22 = 0;
            var22 = arraySpread(var24, var23, var22);
            var23 = _closure1_slot8;
            var24 = var18;
            var15 = arraySpread(var24, var23, var22);
            var23 = _closure1_slot9;
            var16 = new Array(0);
            var24 = var16;
            var22 = 0;
            var22 = arraySpread(var24, var23, var22);
            var23 = _closure1_slot10;
            var24 = var16;
            var15 = arraySpread(var24, var23, var22);
            var15 = _closure1_slot14;
            var17 = var9.bind(var2)(var12, var7);
            var19 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var20];
            var12 = var19.bind(var2)(var12);
            var12 = var12.AST_KEY;
            var19 = var12.EMOJI;
            var12 = new Array(1);
            var12[0] = var19;
            var12 = var15.bind(var2)(var17, var18, var12);
            var8 = var9.bind(var2)(var8, var7);
            var8 = var15.bind(var2)(var8, var16);
            if(!(var14 != var12)) { _fun0010_ip = 613; continue _fun0010 }
 473:
            if(!(var14 != var8)) { _fun0010_ip = 613; continue _fun0010 }
 480:
            var8 = _closure1_slot15;
            var12 = var8.bind(var2)(var12);
            var8 = var12.trim;
            var8 = var8.bind(var12)();
            var8 = var8.length;
            if(!(var11 !== var8)) { _fun0010_ip = 607; continue _fun0010 }
 508:
            var8 = _closure1_slot1;
            var6 = _closure1_slot2;
            var11 = 9;
            var11 = var6[var11];
            var12 = var8.bind(var2)(var11);
            var11 = var12.pick;
            var9 = var9.rules;
            var9 = var11.bind(var12)(var9, var13);
            var6 = var6[var10];
            var8 = var8.bind(var2)(var6);
            var6 = var8.parserFor;
            var6 = var6.bind(var8)(var9);
            var4 = var4.whitespaceSanitized;
            var6 = var6.bind(var2)(var4, var7);
            var4 = var3.whitespaceSanitized;
            var3 = {};
            var3['content'] = var6;
            var5 = var5.target;
            var3['target'] = var5;
            var3['title'] = var4;
            return var3;
 607:
            var3 = var1.bind(var2)();
            return var3;
 613:
            var3 = var1.bind(var2)();
            return var3;
 619:
            var3 = var1.bind(var2)();
            return var3;
 625:
            var3 = var1.bind(var2)();
            return var3;
 631:
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var7 = 'parse';
    var6[var7] = var10;
    var7 = 10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/markup/MarkupLinkRule.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['ALLOWED_PROTOCOLS'] = var5;
    var3['isSuspiciousUrl'] = var4;
    var3['punycodeLink'] = var2;
    return var1;
})();