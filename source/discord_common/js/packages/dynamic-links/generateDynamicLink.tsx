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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot7;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot7;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
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
case 0:
            var7 = arg2;
            var17 = var7.utmSource;
            var5 = var7.androidFallbackLink;
            var6 = var7.iosFallbackLink;
            var4 = _closure1_slot4;
            var2 = _closure1_slot3;
            var3 = undefined;
            var13 = var4.bind(var3)(var7, var2);
            var2 = global;
            var8 = var2.URL;
            var4 = var8.prototype;
            var7 = Object.create(var4, {constructor: {value: var8}});
            var29 = arg1;
            var30 = var7;
            var4 = new var30[var8](var29, var28);
            var9 = var4 instanceof Object ? var4 : var7;
            var11 = var13;
            var4 = null;
            for(var7 in var11)
case 9:
            {
case 36:
                var18 = var7;
                var16 = var13[var18];
                if(var4 == var16) { _fun0004_ip = 9; continue _fun0004 }
case 37:
                var15 = var9.searchParams;
                var14 = var15.set;
                var14 = var14.bind(var15)(var18, var16);
                _fun0004_ip = 9; continue _fun0004;
            }
case 38:
            var8 = var2.encodeURIComponent;
            var7 = var9.toString;
            var7 = var7.bind(var9)();
            var16 = var8.bind(var3)(var7);
            var8 = var2.encodeURIComponent;
            var7 = var9.toString;
            var10 = var7.bind(var9)();
            var7 = var2.HermesInternal;
            var9 = var7.concat;
            var7 = 'discord://app/open#';
            var7 = var9.bind(var7)(var10);
            var15 = var8.bind(var3)(var7);
            var10 = var2.encodeURIComponent;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var9 = 4;
            var9 = var7[var9];
            var9 = var8.bind(var3)(var9);
            var9 = var9.bind(var3)();
            var14 = var10.bind(var3)(var9);
            var12 = var2.RegExp;
            var11 = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari/)'];
            var10 = var11.join;
            var9 = '|';
            var13 = var10.bind(var11)(var9);
            var9 = var2.HermesInternal;
            var11 = var9.concat;
            var10 = '(';
            var9 = ')';
            var29 = var11.bind(var10)(var13, var9);
            var9 = var12.prototype;
            var10 = Object.create(var9, {constructor: {value: var12}});
            var28 = 'ig';
            var30 = var10;
            var9 = new var30[var12](var29, var28, var27);
            var11 = var9 instanceof Object ? var9 : var10;
            var10 = 2;
            var7 = var7[var10];
            var7 = var8.bind(var3)(var7);
            var8 = var4 == var7;
            var7 = undefined;
            if(var8) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var3)(var8);
            var9 = var8.ua;
            var8 = var4 == var9;
            var7 = undefined;
            if(var8) { _fun0004_ip = 39; continue _fun0004 }
case 41:
            var8 = var9.match;
            var7 = var8.bind(var9)(var11);
case 39:
            var8 = var4 != var7;
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var7 = var9.bind(var3)(var7);
            var7 = var4 == var7;
            var9 = undefined;
            if(var7) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var11 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var7 = var11.bind(var3)(var7);
            var9 = var7.name;
case 42:
            var7 = 'Safari';
            var7 = var7 === var9;
            if(!var7) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var7 = !var8;
case 44:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var3)(var8);
            var9 = var4 == var8;
            var8 = undefined;
            if(var9) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var9 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var9.bind(var3)(var1);
            var1 = var1.os;
            var9 = var4 == var1;
            var8 = undefined;
            if(var9) { _fun0004_ip = 46; continue _fun0004 }
case 48:
            var8 = var1.family;
case 46:
            var1 = 'iOS';
            var1 = var1 !== var8;
            if(var1) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var1 = var7;
case 49:
            var13 = 'false';
            if(!var1) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var13 = 'true';
case 51:
            var1 = var4 != var5;
            var8 = null;
            if(!var1) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var1 = var2.encodeURIComponent;
            var8 = var1.bind(var3)(var5);
case 53:
            var1 = var4 != var6;
            var5 = null;
            if(!var1) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var1 = var2.encodeURIComponent;
            var5 = var1.bind(var3)(var6);
case 55:
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
            if(!(var4 != var8)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var1 = var2.HermesInternal;
            var7 = var1.concat;
            var1 = '&af_android_url=';
            var1 = var7.bind(var1)(var8);
            var3 = var6 + var1;
case 57:
            var1 = var3;
            if(!(var4 != var5)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = '&af_ios_url=';
            var2 = var4.bind(var2)(var5);
            var1 = var3 + var2;
case 59:
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
case 0:
            var12 = arg1;
            var1 = var12;
            var8 = undefined;
            var4 = undefined;
            var7 = undefined;
            var9 = undefined;
            var3 = undefined;
            var6 = undefined;
            var2 = undefined;
            var10 = undefined;
            var11 = var12.startsWith;
            var5 = 'https://discordapp.onelink.me';
            var5 = var11.bind(var12)(var5);
            if(var5) { _fun0005_ip = 2; continue _fun0005 }
case 61:
            var5 = null;
            return var5;
case 2: // try_start_0
            var5 = global;
            var12 = var5.URL;
            var14 = var1;
            var11 = var12.prototype;
            var11 = Object.create(var11, {constructor: {value: var12}});
            var15 = var11;
            var1 = new var15[var12](var14, var13);
            var1 = var1 instanceof Object ? var1 : var11;
            var12 = var1.searchParams;
            var4 = var12;
            var11 = var12.get;
            var1 = 'deep_link_value';
            var11 = var11.bind(var12)(var1);
            var7 = var11;
            var1 = null;
            if(!(var1 != var11)) { _fun0005_ip = 62; continue _fun0005 }
case 63:
            var11 = var5.decodeURIComponent;
            var14 = var11.bind(var8)(var7);
            var5 = var5.URL;
            var7 = var5.prototype;
            var7 = Object.create(var7, {constructor: {value: var5}});
            var15 = var7;
            var5 = new var15[var5](var14, var13);
            var5 = var5 instanceof Object ? var5 : var7;
            var3 = var5.searchParams;
            var7 = var4;
            var5 = var7.get;
            var4 = 'pid';
            var5 = var5.bind(var7)(var4);
            var6 = var5;
            var4 = {};
            var7 = var1 != var5;
            var5 = undefined;
            if(!var7) { _fun0005_ip = 64; continue _fun0005 }
case 65:
            var5 = var6;
case 64:
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
            if(var3) { _fun0005_ip = 66; continue _fun0005 }
case 67:
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
            if(!var3) { _fun0005_ip = 67; continue _fun0005 }
case 66: // try_end0
            return var2;
case 62:
            return var1;
case 68: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var3['parseDynamicLink'] = var2;
    return var1;
})();