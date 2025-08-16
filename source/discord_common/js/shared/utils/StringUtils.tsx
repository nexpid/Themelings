// discord_common/js/shared/utils/StringUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var7 = require;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var8;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
 46:
                if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
                var2 = var3.@@iterator;
 55:
                if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
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
                if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
                var7 = var3.constructor;
 163:
                var10 = var9;
                if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
                var7 = var3.constructor;
                var10 = var7.name;
 179:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
                var9 = _closure1_slot5;
                var7 = var9.bind(var8)(var3, var8);
 247:
                _fun0002_ip = 265; continue _fun0002;
 249:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
 265:
                var6 = var7;
                _fun0002_ip = 283; continue _fun0002;
 270:
                var7 = _closure1_slot5;
                var6 = var7.bind(var8)(var3, var8);
 283:
                var4 = var6;
                if(var4) { _fun0002_ip = 323; continue _fun0002 }
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
                if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
                _closure2_slot0 = var4;
 330:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                        _fun0003_ip = 67; continue _fun0003;
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
 343:
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
 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
                var2 = var4.length;
                var1 = var3 > var2;
 23:
                var2 = undefined;
                if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
                var2 = var4.length;
 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
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
        if(!(var2 != var5)) { _fun0001_ip = 135; continue _fun0001 }
 128:
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
        _fun0001_ip = 140; continue _fun0001;
 135:
        var5 = function(arg1) {
            var1 = arg1;
            return var1;
        };
 140:
        var1 = var1.String;
        var1 = var1.prototype;
        var1 = var1.normalize;
        if(!(var2 != var1)) { _fun0001_ip = 168; continue _fun0001 }
 161:
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
 0:
                    var3 = arg1;
                    var1 = _closure2_slot1;
                    var4 = _closure2_slot0;
                    var4 = var4[var3];
                    var5 = null;
                    if(!(var5 != var4)) { _fun0005_ip = 27; continue _fun0005 }
 24:
                    var3 = var4;
 27:
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
        _fun0001_ip = 173; continue _fun0001;
 168:
        var2 = function(arg1) {
            var1 = arg1;
            return var1;
        };
 173:
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
 0:
                var6 = arg1;
                var1 = null;
                var2 = var1 == var6;
                var5 = '';
                var1 = var5;
                if(var2) { _fun0006_ip = 74; continue _fun0006 }
 19:
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
 74:
                return var1;
            }
        };
        var3['upperCaseFirstChar'] = var6;
        var6 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var10 = arg2;
                var6 = arguments[2];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0007_ip = 19; continue _fun0007 }
 15:
                var6 = '…';
 19:
                var2 = null;
                var4 = var2 == var3;
                var5 = '';
                var1 = var5;
                if(var4) { _fun0007_ip = 206; continue _fun0007 }
 38:
                var2 = var2 == var10;
                var1 = var5;
                if(var2) { _fun0007_ip = 206; continue _fun0007 }
 51:
                var4 = var3.length;
                var2 = var3;
                if(!(var4 > var10)) { _fun0007_ip = 203; continue _fun0007 }
 66:
                var7 = _closure1_slot3;
                var4 = var7.test;
                var4 = var4.bind(var7)(var3);
                if(var4) { _fun0007_ip = 111; continue _fun0007 }
 86:
                var8 = var3.substring;
                var4 = var6.length;
                var7 = var10 - var4;
                var4 = 0;
                var7 = var8.bind(var3)(var4, var7);
                _fun0007_ip = 159; continue _fun0007;
 111:
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
 159:
                var4 = var7.replace;
                var3 = /[\s.]+$/;
                var4 = var4.bind(var7)(var3, var5);
                var3 = global;
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var2 = var3.bind(var5)(var4, var6);
 203:
                var1 = var2;
 206:
                return var1;
            }
        };
        var3['truncateText'] = var6;
        var6 = function getAcronym(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var6 = arg1;
                var1 = null;
                var2 = var1 != var6;
                var5 = '';
                var1 = var5;
                if(!var2) { _fun0008_ip = 105; continue _fun0008 }
 19:
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
 105:
                return var1;
            }
        };
        var3['getAcronym'] = var6;
        var3['stripDiacritics'] = var5;
        var4 = function countGraphemeClusters(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = arg1;
                var2 = global;
                var4 = var2.Intl;
                var3 = null;
                var5 = var3 == var4;
                var8 = undefined;
                var3 = undefined;
                if(var5) { _fun0009_ip = 30; continue _fun0009 }
 24:
                var3 = var4.Segmenter;
 30:
                if(!(var8 !== var3)) { _fun0009_ip = 140; continue _fun0009 }
 34:
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
                if(var3) { _fun0009_ip = 138; continue _fun0009 }
 111:
                var3 = var5.value;
                var4 = var4 + var6;
                var10 = var7.bind(var8)();
                var3 = var10.done;
                var5 = var10;
                var2 = var4;
                if(!var3) { _fun0009_ip = 111; continue _fun0009 }
 138:
                return var2;
 140:
                var1 = var1.length;
                return var1;
            }
        };
        var3['countGraphemeClusters'] = var4;
        var3['normalize'] = var2;
        return var1;
    }
})();