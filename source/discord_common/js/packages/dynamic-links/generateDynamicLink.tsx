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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot7;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot7;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
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
            var4 = arg2;
            var17 = var4.utmSource;
            var5 = var4.androidFallbackLink;
            var6 = var4.iosFallbackLink;
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var7 = undefined;
            var13 = var3.bind(var7)(var4, var2);
            var2 = global;
            var8 = var2.URL;
            var3 = var8.prototype;
            var4 = Object.create(var3, {constructor: {value: var8}});
            var29 = arg1;
            var30 = var4;
            var3 = new var30[var8](var29, var28);
            var9 = var3 instanceof Object ? var3 : var4;
            var11 = var13;
            var4 = null;
            for(var3 in var11)
 86:
            {
 95:
                var18 = var3;
                var16 = var13[var18];
                if(var4 == var16) { _fun0004_ip = 86; continue _fun0004 }
 106:
                var15 = var9.searchParams;
                var14 = var15.set;
                var14 = var14.bind(var15)(var18, var16);
                _fun0004_ip = 86; continue _fun0004;
            }
 125:
            var8 = var2.encodeURIComponent;
            var3 = var9.toString;
            var3 = var3.bind(var9)();
            var16 = var8.bind(var7)(var3);
            var8 = var2.encodeURIComponent;
            var3 = var9.toString;
            var11 = var3.bind(var9)();
            var3 = var2.HermesInternal;
            var10 = var3.concat;
            var3 = 'discord://app/open#';
            var3 = var10.bind(var3)(var11);
            var15 = var8.bind(var7)(var3);
            var11 = var2.encodeURIComponent;
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var10 = 4;
            var10 = var3[var10];
            var10 = var8.bind(var7)(var10);
            var10 = var10.bind(var7)();
            var14 = var11.bind(var7)(var10);
            var13 = var2.RegExp;
            var12 = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)'];
            var11 = var12.join;
            var10 = '|';
            var18 = var11.bind(var12)(var10);
            var10 = var2.HermesInternal;
            var12 = var10.concat;
            var11 = '(';
            var10 = ')';
            var29 = var12.bind(var11)(var18, var10);
            var10 = var13.prototype;
            var11 = Object.create(var10, {constructor: {value: var13}});
            var28 = 'ig';
            var30 = var11;
            var10 = new var30[var13](var29, var28, var27);
            var12 = var10 instanceof Object ? var10 : var11;
            var11 = 2;
            var3 = var3[var11];
            var3 = var8.bind(var7)(var3);
            var8 = var4 == var3;
            var3 = undefined;
            if(var8) { _fun0004_ip = 365; continue _fun0004 }
 322:
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var10.bind(var7)(var8);
            var10 = var8.ua;
            var8 = var4 == var10;
            var3 = undefined;
            if(var8) { _fun0004_ip = 365; continue _fun0004 }
 354:
            var8 = var10.match;
            var3 = var8.bind(var10)(var12);
 365:
            var8 = var4 != var3;
            var10 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var10.bind(var7)(var3);
            var3 = var4 == var3;
            var10 = undefined;
            if(var3) { _fun0004_ip = 417; continue _fun0004 }
 395:
            var12 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var12.bind(var7)(var3);
            var10 = var3.name;
 417:
            var3 = 'Safari';
            var3 = var3 === var10;
            if(!var3) { _fun0004_ip = 433; continue _fun0004 }
 430:
            var3 = !var8;
 433:
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var10.bind(var7)(var8);
            var10 = var4 == var8;
            var8 = undefined;
            if(var10) { _fun0004_ip = 497; continue _fun0004 }
 459:
            var10 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var11];
            var1 = var10.bind(var7)(var1);
            var1 = var1.os;
            var10 = var4 == var1;
            var8 = undefined;
            if(var10) { _fun0004_ip = 497; continue _fun0004 }
 491:
            var8 = var1.family;
 497:
            var1 = 'iOS';
            var1 = var1 !== var8;
            if(var1) { _fun0004_ip = 513; continue _fun0004 }
 510:
            var1 = var3;
 513:
            var3 = 0;
            if(!var1) { _fun0004_ip = 521; continue _fun0004 }
 518:
            var3 = 1;
 521:
            var1 = var4 != var5;
            var8 = null;
            if(!var1) { _fun0004_ip = 541; continue _fun0004 }
 530:
            var1 = var2.encodeURIComponent;
            var8 = var1.bind(var7)(var5);
 541:
            var1 = var4 != var6;
            var5 = null;
            if(!var1) { _fun0004_ip = 561; continue _fun0004 }
 550:
            var1 = var2.encodeURIComponent;
            var5 = var1.bind(var7)(var6);
 561:
            var1 = var2.window;
            var10 = var4 == var1;
            var6 = undefined;
            if(var10) { _fun0004_ip = 595; continue _fun0004 }
 576:
            var1 = var1.location;
            var10 = var4 == var1;
            var6 = undefined;
            if(var10) { _fun0004_ip = 595; continue _fun0004 }
 590:
            var6 = var1.hash;
 595:
            var1 = '#test';
            if(!(var1 !== var6)) { _fun0004_ip = 754; continue _fun0004 }
 608:
            var6 = var2.encodeURIComponent;
            var1 = var9.toString;
            var1 = var1.bind(var9)();
            var27 = var6.bind(var7)(var1);
            var1 = var2.HermesInternal;
            var12 = var1.concat;
            var30 = '';
            var29 = 'https://discordapp.page.link';
            var28 = '/?link=';
            var26 = '&utm_source=';
            var24 = '&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=';
            var22 = '&efr=';
            var25 = var17;
            var23 = var14;
            var21 = var3;
            var6 = var30[var12](var29, var28, var27, var26, var25, var24, var23, var22, var21, var20);
            var7 = var6;
            if(!(var4 != var8)) { _fun0004_ip = 719; continue _fun0004 }
 693:
            var1 = var2.HermesInternal;
            var9 = var1.concat;
            var1 = '&afl=';
            var1 = var9.bind(var1)(var8);
            var7 = var6 + var1;
 719:
            var1 = var7;
            if(!(var4 != var5)) { _fun0004_ip = 752; continue _fun0004 }
 726:
            var6 = var2.HermesInternal;
            var9 = var6.concat;
            var6 = '&ifl=';
            var6 = var9.bind(var6)(var5);
            var1 = var7 + var6;
 752:
            return var1;
 754:
            var13 = 'false';
            var1 = 1;
            if(!(var1 === var3)) { _fun0004_ip = 769; continue _fun0004 }
 765:
            var13 = 'true';
 769:
            var1 = var2.HermesInternal;
            var12 = var1.concat;
            var30 = '';
            var29 = 'https://discordapp.onelink.me';
            var28 = '/Hs5r/?deep_link_value=';
            var26 = '&pid=';
            var24 = '&af_force_deeplink=';
            var22 = '&af_og_description=';
            var20 = '&af_dp=';
            var27 = var16;
            var25 = var17;
            var23 = var13;
            var21 = var14;
            var19 = var15;
            var6 = var30[var12](var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18);
            var3 = var6;
            if(!(var4 != var8)) { _fun0004_ip = 872; continue _fun0004 }
 846:
            var1 = var2.HermesInternal;
            var7 = var1.concat;
            var1 = '&af_android_url=';
            var1 = var7.bind(var1)(var8);
            var3 = var6 + var1;
 872:
            var1 = var3;
            if(!(var4 != var5)) { _fun0004_ip = 905; continue _fun0004 }
 879:
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = '&af_ios_url=';
            var2 = var4.bind(var2)(var5);
            var1 = var3 + var2;
 905:
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