// discord_common/js/packages/dynamic-links/generateDynamicLink.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
    var1 = ['utmSource', 'androidFallbackLink', 'iosFallbackLink'];
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/dynamic-links/generateDynamicLink.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function generateDynamicLink(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg2;
            var15 = var7.utmSource;
            var5 = var7.androidFallbackLink;
            var3 = var7.iosFallbackLink;
            var4 = _closure1_slot4;
            var2 = _closure1_slot3;
            var6 = undefined;
            var13 = var4.bind(var6)(var7, var2);
            var2 = global;
            var8 = var2.URL;
            var4 = var8.prototype;
            var7 = Object.create(var4, {constructor: {value: var8}});
            var27 = arg1;
            var28 = var7;
            var4 = new var28[var8](var27, var26);
            var7 = var4 instanceof Object ? var4 : var7;
            var11 = var13;
            var4 = null;
            for(var8 in var11)
 86:
            {
 95:
                var18 = var8;
                var17 = var13[var18];
                if(var4 == var17) { _fun0004_ip = 86; continue _fun0004 }
 106:
                var16 = var7.searchParams;
                var14 = var16.set;
                var14 = var14.bind(var16)(var18, var17);
                _fun0004_ip = 86; continue _fun0004;
            }
 125:
            var9 = var2.encodeURIComponent;
            var8 = var7.toString;
            var8 = var8.bind(var7)();
            var14 = var9.bind(var6)(var8);
            var11 = var2.encodeURIComponent;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var10 = 4;
            var10 = var8[var10];
            var10 = var9.bind(var6)(var10);
            var10 = var10.bind(var6)();
            var13 = var11.bind(var6)(var10);
            var16 = var2.RegExp;
            var12 = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)'];
            var11 = var12.join;
            var10 = '|';
            var17 = var11.bind(var12)(var10);
            var10 = var2.HermesInternal;
            var12 = var10.concat;
            var11 = '(';
            var10 = ')';
            var27 = var12.bind(var11)(var17, var10);
            var10 = var16.prototype;
            var11 = Object.create(var10, {constructor: {value: var16}});
            var26 = 'ig';
            var28 = var11;
            var10 = new var28[var16](var27, var26, var25);
            var12 = var10 instanceof Object ? var10 : var11;
            var11 = 2;
            var8 = var8[var11];
            var8 = var9.bind(var6)(var8);
            var9 = var4 == var8;
            var8 = undefined;
            if(var9) { _fun0004_ip = 323; continue _fun0004 }
 280:
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var11];
            var9 = var10.bind(var6)(var9);
            var10 = var9.ua;
            var9 = var4 == var10;
            var8 = undefined;
            if(var9) { _fun0004_ip = 323; continue _fun0004 }
 312:
            var9 = var10.match;
            var8 = var9.bind(var10)(var12);
 323:
            var9 = var4 != var8;
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var10.bind(var6)(var8);
            var8 = var4 == var8;
            var10 = undefined;
            if(var8) { _fun0004_ip = 375; continue _fun0004 }
 353:
            var12 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var12.bind(var6)(var8);
            var10 = var8.name;
 375:
            var8 = 'Safari';
            var8 = var8 === var10;
            if(!var8) { _fun0004_ip = 391; continue _fun0004 }
 388:
            var8 = !var9;
 391:
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var11];
            var9 = var10.bind(var6)(var9);
            var10 = var4 == var9;
            var9 = undefined;
            if(var10) { _fun0004_ip = 455; continue _fun0004 }
 417:
            var10 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var11];
            var1 = var10.bind(var6)(var1);
            var1 = var1.os;
            var10 = var4 == var1;
            var9 = undefined;
            if(var10) { _fun0004_ip = 455; continue _fun0004 }
 449:
            var9 = var1.family;
 455:
            var1 = 'iOS';
            var1 = var1 !== var9;
            if(var1) { _fun0004_ip = 471; continue _fun0004 }
 468:
            var1 = var8;
 471:
            var12 = 0;
            if(!var1) { _fun0004_ip = 479; continue _fun0004 }
 476:
            var12 = 1;
 479:
            var1 = var4 != var5;
            var8 = null;
            if(!var1) { _fun0004_ip = 499; continue _fun0004 }
 488:
            var1 = var2.encodeURIComponent;
            var8 = var1.bind(var6)(var5);
 499:
            var1 = var4 != var3;
            var5 = null;
            if(!var1) { _fun0004_ip = 519; continue _fun0004 }
 508:
            var1 = var2.encodeURIComponent;
            var5 = var1.bind(var6)(var3);
 519:
            var1 = var2.window;
            var9 = var4 == var1;
            var3 = undefined;
            if(var9) { _fun0004_ip = 553; continue _fun0004 }
 534:
            var1 = var1.location;
            var9 = var4 == var1;
            var3 = undefined;
            if(var9) { _fun0004_ip = 553; continue _fun0004 }
 548:
            var3 = var1.hash;
 553:
            var1 = '#test';
            if(!(var1 !== var3)) { _fun0004_ip = 712; continue _fun0004 }
 566:
            var3 = var2.encodeURIComponent;
            var1 = var7.toString;
            var1 = var1.bind(var7)();
            var25 = var3.bind(var6)(var1);
            var1 = var2.HermesInternal;
            var11 = var1.concat;
            var28 = '';
            var27 = 'https://discordapp.page.link';
            var26 = '/?link=';
            var24 = '&utm_source=';
            var22 = '&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=';
            var20 = '&efr=';
            var23 = var15;
            var21 = var13;
            var19 = var12;
            var3 = var28[var11](var27, var26, var25, var24, var23, var22, var21, var20, var19, var18);
            var6 = var3;
            if(!(var4 != var8)) { _fun0004_ip = 677; continue _fun0004 }
 651:
            var1 = var2.HermesInternal;
            var7 = var1.concat;
            var1 = '&afl=';
            var1 = var7.bind(var1)(var8);
            var6 = var3 + var1;
 677:
            var1 = var6;
            if(!(var4 != var5)) { _fun0004_ip = 710; continue _fun0004 }
 684:
            var3 = var2.HermesInternal;
            var7 = var3.concat;
            var3 = '&ifl=';
            var3 = var7.bind(var3)(var5);
            var1 = var6 + var3;
 710:
            return var1;
 712:
            var1 = var2.HermesInternal;
            var11 = var1.concat;
            var28 = '';
            var27 = 'https://discordapp.onelink.me';
            var26 = '/Hs5r/?deep_link_value=';
            var24 = '&pid=';
            var22 = '&af_og_description=';
            var20 = '&af_force_deeplink=';
            var25 = var14;
            var23 = var15;
            var21 = var13;
            var19 = var12;
            var6 = var28[var11](var27, var26, var25, var24, var23, var22, var21, var20, var19, var18);
            var3 = var6;
            if(!(var4 != var8)) { _fun0004_ip = 806; continue _fun0004 }
 780:
            var1 = var2.HermesInternal;
            var7 = var1.concat;
            var1 = '&af_android_url=';
            var1 = var7.bind(var1)(var8);
            var3 = var6 + var1;
 806:
            var1 = var3;
            if(!(var4 != var5)) { _fun0004_ip = 839; continue _fun0004 }
 813:
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = '&af_ios_url=';
            var2 = var4.bind(var2)(var5);
            var1 = var3 + var2;
 839:
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = function generateAttemptId() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.v4;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['generateAttemptId'] = var4;
    var2 = function parseDynamicLink(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var14 = arg1;
            var1 = var14;
            var8 = undefined;
            var4 = undefined;
            var5 = undefined;
            var11 = undefined;
            var9 = undefined;
            var3 = undefined;
            var6 = undefined;
            var2 = undefined;
            var10 = undefined;
            var12 = var14.startsWith;
            var7 = 'https://discordapp.onelink.me';
            var7 = var12.bind(var14)(var7);
            var13 = var14.startsWith;
            var12 = 'https://discordapp.page.link';
            var4 = var13.bind(var14)(var12);
            if(var7) { _fun0005_ip = 71; continue _fun0005 }
 61:
            var7 = var4;
            if(var7) { _fun0005_ip = 71; continue _fun0005 }
 67:
            var7 = null;
            return var7;
 71: // try_start_0
            var7 = global;
            var13 = var7.URL;
            var16 = var1;
            var12 = var13.prototype;
            var12 = Object.create(var12, {constructor: {value: var13}});
            var17 = var12;
            var1 = new var17[var13](var16, var15);
            var1 = var1 instanceof Object ? var1 : var12;
            var5 = var1.searchParams;
            var1 = var4;
            var14 = var5;
            var13 = var14.get;
            if(var1) { _fun0005_ip = 135; continue _fun0005 }
 122:
            var1 = 'deep_link_value';
            var12 = var13.bind(var14)(var1);
            _fun0005_ip = 144; continue _fun0005;
 135:
            var1 = 'link';
            var12 = var13.bind(var14)(var1);
 144:
            var11 = var12;
            var1 = null;
            if(!(var1 != var12)) { _fun0005_ip = 359; continue _fun0005 }
 156:
            var12 = var7.decodeURIComponent;
            var16 = var12.bind(var8)(var11);
            var7 = var7.URL;
            var11 = var7.prototype;
            var11 = Object.create(var11, {constructor: {value: var7}});
            var17 = var11;
            var7 = new var17[var7](var16, var15);
            var7 = var7 instanceof Object ? var7 : var11;
            var3 = var7.searchParams;
            var11 = var5;
            var7 = var11.get;
            if(var4) { _fun0005_ip = 221; continue _fun0005 }
 210:
            var4 = 'pid';
            var5 = var7.bind(var11)(var4);
            _fun0005_ip = 230; continue _fun0005;
 221:
            var4 = 'utm_source';
            var5 = var7.bind(var11)(var4);
 230:
            var6 = var5;
            var4 = {};
            var7 = var1 != var5;
            var5 = undefined;
            if(!var7) { _fun0005_ip = 247; continue _fun0005 }
 244:
            var5 = var6;
 247:
            var4['utmSource'] = var5;
            var2 = var4;
            var4 = _closure1_slot6;
            var5 = var3;
            var3 = var5.entries;
            var3 = var3.bind(var5)();
            var3 = var4.bind(var8)(var3);
            var10 = var3;
            var3 = var3.bind(var8)();
            var9 = var3;
            var3 = var3.done;
            var6 = 2;
            var5 = 0;
            var4 = 1;
            if(var3) { _fun0005_ip = 357; continue _fun0005 }
 306:
            var3 = var9;
            var11 = var3.value;
            var3 = _closure1_slot5;
            var3 = var3.bind(var8)(var11, var6);
            var12 = var3[var5];
            var11 = var3[var4];
            var3 = var2;
            var3[var12] = var11;
            var3 = var10;
            var3 = var3.bind(var8)();
            var9 = var3;
            var3 = var3.done;
            if(!var3) { _fun0005_ip = 306; continue _fun0005 }
 357: // try_end0
            return var2;
 359:
            return var1;
 361: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var3['parseDynamicLink'] = var2;
    return var1;
})();