// discord_common/js/shared/utils/StringUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var7 = require;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var8;
        var1 = global;
        var9 = var1.Object;
        var6 = var9.defineProperty;
        var4 = {};
        var2 = true;
        var4['value'] = var2;
        var2 = '__esModule';
        var2 = var6.bind(var9)(var3, var2, var4);
        var2 = /[\u0300-\u036f]/g;
        var _closure1_slot2 = var2;
        var2 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
        var _closure1_slot3 = var2;
        var2 = var1.String;
        var2 = var2.prototype;
        var4 = var2.normalize;
        var2 = null;
        if(!(var2 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = function(arg1) {
            var3 = arg1;
            var2 = var3.normalize;
            var1 = 'NFD';
            var4 = var2.bind(var3)(var1);
            var3 = var4.replace;
            var2 = _closure1_slot2;
            var1 = '';
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.normalize;
            var1 = 'NFC';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var4 = function(arg1) {
            var1 = arg1;
            return var1;
        };
case 4:
        var1 = var1.String;
        var1 = var1.prototype;
        var1 = var1.normalize;
        if(!(var2 != var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
        var2 = function fullNormalize(arg1) {
            var5 = arg1;
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var4 = 0;
            var3 = var2[var4];
            var2 = undefined;
            var2 = var6.bind(var2)(var3);
            var _closure2_slot0 = var2;
            var2 = '';
            var _closure2_slot1 = var2;
            var2 = var5.normalize;
            var3 = 'NFD';
            var8 = var2.bind(var5)(var3);
            var5 = new Array(0);
            var9 = var5;
            var7 = 0;
            var2 = arraySpread(var9, var8, var7);
            var4 = var5.forEach;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure2_slot1;
                    var4 = _closure2_slot0;
                    var4 = var4[var3];
                    var5 = null;
                    if(!(var5 != var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var3 = var4;
case 7:
                    var1 = var1 + var3;
                    _closure2_slot1 = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var2 = _closure2_slot1;
            var1 = var2.normalize;
            var2 = var1.bind(var2)(var3);
            var1 = var2.toLocaleLowerCase;
            var1 = var1.bind(var2)();
            return var1;
        };
        _fun0001_ip = 9; continue _fun0001;
case 5:
        var2 = function(arg1) {
            var1 = arg1;
            return var1;
        };
case 9:
        var1 = 1;
        var6 = var8[var1];
        var1 = undefined;
        var10 = var7.bind(var1)(var6);
        var9 = var10.fileFinishedImporting;
        var6 = '../discord_common/js/shared/utils/StringUtils.tsx';
        var6 = var9.bind(var10)(var6);
        var6 = 2;
        var6 = var8[var6];
        var6 = var7.bind(var1)(var6);
        var6 = var6.cssValueToNumber;
        var3['cssValueToNumber'] = var6;
        var6 = function upperCaseFirstChar(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var6 = arg1;
                var1 = null;
                var2 = var1 == var6;
                var5 = '';
                var1 = var5;
                if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var3 = var6.charAt;
                var2 = 0;
                var3 = var3.bind(var6)(var2);
                var2 = var3.toUpperCase;
                var4 = var2.bind(var3)();
                var3 = var6.slice;
                var2 = 1;
                var3 = var3.bind(var6)(var2);
                var2 = global;
                var2 = var2.HermesInternal;
                var2 = var2.concat;
                var1 = var2.bind(var5)(var4, var3);
case 10:
                return var1;
            }
        };
        var3['upperCaseFirstChar'] = var6;
        var6 = function(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var10 = arg2;
                var6 = arguments[2];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var6 = '…';
case 12:
                var2 = null;
                var4 = var2 == var3;
                var5 = '';
                var1 = var5;
                if(var4) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var2 = var2 == var10;
                var1 = var5;
                if(var2) { _fun0004_ip = 14; continue _fun0004 }
case 16:
                var4 = var3.length;
                var2 = var3;
                if(!(var4 > var10)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var7 = _closure1_slot3;
                var4 = var7.test;
                var4 = var4.bind(var7)(var3);
                if(var4) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var8 = var3.substring;
                var4 = var6.length;
                var7 = var10 - var4;
                var4 = 0;
                var7 = var8.bind(var3)(var4, var7);
                _fun0004_ip = 21; continue _fun0004;
case 19:
                var9 = new Array(0);
                var8 = 0;
                var13 = var9;
                var12 = var3;
                var11 = 0;
                var3 = arraySpread(var13, var12, var11);
                var4 = var9.slice;
                var3 = var6.length;
                var3 = var10 - var3;
                var4 = var4.bind(var9)(var8, var3);
                var3 = var4.join;
                var7 = var3.bind(var4)(var5);
case 21:
                var4 = var7.replace;
                var3 = /[\s.]+$/;
                var4 = var4.bind(var7)(var3, var5);
                var3 = global;
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var2 = var3.bind(var5)(var4, var6);
case 17:
                var1 = var2;
case 14:
                return var1;
            }
        };
        var3['truncateText'] = var6;
        var5 = function getAcronym(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = arg1;
                var1 = null;
                var2 = var1 != var6;
                var5 = '';
                var1 = var5;
                if(!var2) { _fun0005_ip = 22; continue _fun0005 }
case 11:
                var4 = var6.replace;
                var3 = /'s /g;
                var2 = ' ';
                var6 = var4.bind(var6)(var3, var2);
                var4 = var6.replace;
                var3 = /\w+/g;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = 0;
                    var1 = var2[var1];
                    return var1;
                };
                var4 = var4.bind(var6)(var3, var2);
                var3 = var4.replace;
                var2 = /\s/g;
                var1 = var3.bind(var4)(var2, var5);
case 22:
                return var1;
            }
        };
        var3['getAcronym'] = var5;
        var3['stripDiacritics'] = var4;
        var3['normalize'] = var2;
        return var1;
    }
})();