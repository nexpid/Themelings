// discord_common/js/shared/utils/StringUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var7 = require;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var8;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 2:
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var3.@@iterator;
case 4:
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 12; continue _fun0002 }
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
                if(!var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var7 = var3.constructor;
case 14:
                var10 = var9;
                if(!var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var7 = var3.constructor;
                var10 = var7.name;
case 16:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 23; continue _fun0002 }
case 21:
                var9 = _closure1_slot5;
                var7 = var9.bind(var8)(var3, var8);
case 23:
                _fun0002_ip = 24; continue _fun0002;
case 18:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 24:
                var6 = var7;
                _fun0002_ip = 10; continue _fun0002;
case 12:
                var7 = _closure1_slot5;
                var6 = var7.bind(var8)(var3, var8);
case 10:
                var4 = var6;
                if(var4) { _fun0002_ip = 8; continue _fun0002 }
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
                if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                _closure2_slot0 = var4;
case 26:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0003_ip = 28; continue _fun0003 }
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
                        _fun0003_ip = 30; continue _fun0003;
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
        var _closure1_slot4 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var2 = var4.length;
                var1 = var3 > var2;
case 31:
                var2 = undefined;
                if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var2 = var4.length;
case 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0004_ip = 35; continue _fun0004 }
case 4:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0004_ip = 4; continue _fun0004 }
case 35:
                return var1;
            }
        };
        var _closure1_slot5 = var1;
        var1 = global;
        var9 = var1.Object;
        var6 = var9.defineProperty;
        var5 = {};
        var2 = true;
        var5['value'] = var2;
        var2 = '__esModule';
        var2 = var6.bind(var9)(var3, var2, var5);
        var2 = /[\u0300-\u036f]/g;
        var _closure1_slot2 = var2;
        var2 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
        var _closure1_slot3 = var2;
        var2 = var1.String;
        var2 = var2.prototype;
        var5 = var2.normalize;
        var2 = null;
        if(!(var2 != var5)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
        var5 = function(arg1) {
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
        _fun0001_ip = 38; continue _fun0001;
case 36:
        var5 = function(arg1) {
            var1 = arg1;
            return var1;
        };
case 38:
        var1 = var1.String;
        var1 = var1.prototype;
        var1 = var1.normalize;
        if(!(var2 != var1)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure2_slot1;
                    var4 = _closure2_slot0;
                    var4 = var4[var3];
                    var5 = null;
                    if(!(var5 != var4)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var3 = var4;
case 41:
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
        _fun0001_ip = 43; continue _fun0001;
case 39:
        var2 = function(arg1) {
            var1 = arg1;
            return var1;
        };
case 43:
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = arg1;
                var1 = null;
                var2 = var1 == var6;
                var5 = '';
                var1 = var5;
                if(var2) { _fun0006_ip = 44; continue _fun0006 }
case 45:
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
case 44:
                return var1;
            }
        };
        var3['upperCaseFirstChar'] = var6;
        var6 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var10 = arg2;
                var6 = arguments[2];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var6 = '…';
case 45:
                var2 = null;
                var4 = var2 == var3;
                var5 = '';
                var1 = var5;
                if(var4) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var2 = var2 == var10;
                var1 = var5;
                if(var2) { _fun0007_ip = 47; continue _fun0007 }
case 49:
                var4 = var3.length;
                var2 = var3;
                if(!(var4 > var10)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var7 = _closure1_slot3;
                var4 = var7.test;
                var4 = var4.bind(var7)(var3);
                if(var4) { _fun0007_ip = 52; continue _fun0007 }
case 9:
                var8 = var3.substring;
                var4 = var6.length;
                var7 = var10 - var4;
                var4 = 0;
                var7 = var8.bind(var3)(var4, var7);
                _fun0007_ip = 53; continue _fun0007;
case 52:
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
case 53:
                var4 = var7.replace;
                var3 = /[\s.]+$/;
                var4 = var4.bind(var7)(var3, var5);
                var3 = global;
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var2 = var3.bind(var5)(var4, var6);
case 50:
                var1 = var2;
case 47:
                return var1;
            }
        };
        var3['truncateText'] = var6;
        var6 = function getAcronym(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var6 = arg1;
                var1 = null;
                var2 = var1 != var6;
                var5 = '';
                var1 = var5;
                if(!var2) { _fun0008_ip = 54; continue _fun0008 }
case 45:
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
case 54:
                return var1;
            }
        };
        var3['getAcronym'] = var6;
        var3['stripDiacritics'] = var5;
        var4 = function countGraphemeClusters(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var2 = global;
                var4 = var2.Intl;
                var3 = null;
                var5 = var3 == var4;
                var8 = undefined;
                var3 = undefined;
                if(var5) { _fun0009_ip = 3; continue _fun0009 }
case 42:
                var3 = var4.Segmenter;
case 3:
                if(!(var8 !== var3)) { _fun0009_ip = 38; continue _fun0009 }
case 55:
                var3 = _closure1_slot4;
                var2 = var2.Intl;
                var2 = var2.Segmenter;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var12 = var4;
                var2 = new var12[var2](var11);
                var4 = var2 instanceof Object ? var2 : var4;
                var2 = var4.segment;
                var2 = var2.bind(var4)(var1);
                var7 = var3.bind(var8)(var2);
                var4 = var7.bind(var8)();
                var3 = var4.done;
                var6 = 1;
                var5 = var4;
                var4 = 0;
                var2 = 0;
                if(var3) { _fun0009_ip = 56; continue _fun0009 }
case 52:
                var3 = var5.value;
                var4 = var4 + var6;
                var10 = var7.bind(var8)();
                var3 = var10.done;
                var5 = var10;
                var2 = var4;
                if(!var3) { _fun0009_ip = 52; continue _fun0009 }
case 56:
                return var2;
case 38:
                var1 = var1.length;
                return var1;
            }
        };
        var3['countGraphemeClusters'] = var4;
        var3['normalize'] = var2;
        return var1;
    }
})();