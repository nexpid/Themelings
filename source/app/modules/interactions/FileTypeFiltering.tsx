// app/modules/interactions/FileTypeFiltering.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
    var1 = function getExtensionsForFileTypes(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            if(!(var2 != var3)) { _fun0004_ip = 36; continue _fun0004 }
case 32:
            var2 = var3.length;
            var14 = 0;
            if(!(var14 !== var2)) { _fun0004_ip = 36; continue _fun0004 }
case 34:
            var4 = var3.filter;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.startsWith;
                var1 = '.';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var3)(var2);
            var2 = var4.map;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.slice;
                var1 = 1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var2.bind(var4)(var1);
            var2 = var3.includes;
            var1 = 'image';
            var1 = var2.bind(var3)(var1);
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.push;
            var25 = _closure1_slot6;
            var1 = new Array(0);
            var26 = var1;
            var24 = 0;
            var5 = arraySpread(var26, var25, var24);
            var26 = var2;
            var25 = var1;
            var24 = var4;
            var1 = apply(var26, var25, var24);
case 37:
            var2 = var3.includes;
            var1 = 'video';
            var1 = var2.bind(var3)(var1);
            if(!var1) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var2 = var4.push;
            var25 = _closure1_slot7;
            var1 = new Array(0);
            var26 = var1;
            var24 = 0;
            var5 = arraySpread(var26, var25, var24);
            var26 = var2;
            var25 = var1;
            var24 = var4;
            var1 = apply(var26, var25, var24);
case 39:
            var2 = var3.includes;
            var1 = 'audio';
            var1 = var2.bind(var3)(var1);
            if(!var1) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var2 = var4.push;
            var25 = _closure1_slot8;
            var1 = new Array(0);
            var26 = var1;
            var24 = 0;
            var3 = arraySpread(var26, var25, var24);
            var26 = var2;
            var25 = var1;
            var24 = var4;
            var1 = apply(var26, var25, var24);
case 41:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var12 = undefined;
            var2 = var2.bind(var12)(var1);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            if(var1) { _fun0004_ip = 43; continue _fun0004 }
case 24:
            var5 = _closure1_slot10;
            _fun0004_ip = 44; continue _fun0004;
case 43:
            var5 = _closure1_slot9;
case 44:
            var1 = global;
            var2 = var1.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var27 = var3;
            var26 = var4;
            var2 = new var27[var2](var26, var25);
            var3 = var2 instanceof Object ? var2 : var3;
            var4 = var1.Object;
            var2 = var4.entries;
            var11 = var2.bind(var4)(var5);
            var2 = var11.length;
            var2 = var14 < var2;
            var10 = 2;
            var9 = 1;
            var8 = 0;
            var7 = undefined;
            var6 = undefined;
            var5 = undefined;
            var4 = undefined;
            if(!var2) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var15 = var11[var8];
            var2 = _closure1_slot3;
            var2 = var2.bind(var12)(var15, var10);
            var15 = var2[var14];
            var16 = var2[var9];
            var2 = var3.has;
            var15 = var2.bind(var3)(var15);
            var2 = _closure1_slot11;
            var20 = var2.bind(var12)(var16);
            var21 = var20.bind(var12)();
            var2 = var21.done;
            if(var15) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var22 = var21;
            var18 = var7;
            var17 = var6;
            var16 = var22;
            var15 = var20;
            if(var2) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var23 = var22.value;
            var19 = var3.delete;
            var19 = var19.bind(var3)(var23);
            var23 = var20.bind(var12)();
            var19 = var23.done;
            var22 = var23;
            var18 = var7;
            var17 = var6;
            var16 = var22;
            var15 = var20;
            if(var19) { _fun0004_ip = 49; continue _fun0004 }
case 51:
            _fun0004_ip = 50; continue _fun0004;
case 47:
            var19 = var21;
            var18 = var19;
            var17 = var20;
            var16 = var5;
            var15 = var4;
            if(var2) { _fun0004_ip = 49; continue _fun0004 }
case 52:
            var21 = var19.value;
            var2 = var3.add;
            var2 = var2.bind(var3)(var21);
            var21 = var20.bind(var12)();
            var2 = var21.done;
            var19 = var21;
            var18 = var19;
            var17 = var20;
            var16 = var5;
            var15 = var4;
            if(!var2) { _fun0004_ip = 52; continue _fun0004 }
case 49:
            var8 = var8 + 1;
            var2 = var11.length;
            var7 = var18;
            var6 = var17;
            var5 = var16;
            var4 = var15;
            if(var8 < var2) { _fun0004_ip = 46; continue _fun0004 }
case 45:
            var2 = var1.Array;
            var1 = var2.from;
            var1 = var1.bind(var2)(var3);
            return var1;
case 36:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function fileTypesFormattedStringHelper(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var8 = arg1;
            var1 = null;
            if(!(var1 != var8)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var2 = var8.length;
            var6 = 0;
            if(!(var6 !== var2)) { _fun0005_ip = 53; continue _fun0005 }
case 55:
            var2 = global;
            var2 = var2.Intl;
            var5 = var2.ListFormat;
            var4 = {};
            var2 = 'disjunction';
            var4['type'] = var2;
            var2 = var5.prototype;
            var3 = Object.create(var2, {constructor: {value: var5}});
            var15 = arg2;
            var16 = var3;
            var14 = var4;
            var2 = new var16[var5](var15, var14, var13);
            var5 = var2 instanceof Object ? var2 : var3;
            var4 = new Array(0);
            var3 = var8.includes;
            var2 = 'image';
            var2 = var3.bind(var8)(var2);
            if(!var2) { _fun0005_ip = 17; continue _fun0005 }
case 56:
            var3 = var4.push;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 4;
            var7 = var12[var2];
            var10 = undefined;
            var7 = var11.bind(var10)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var2 = var12[var2];
            var2 = var11.bind(var10)(var2);
            var2 = var2.t;
            var2 = var2["0r2WwT"];
            var2 = var7.bind(var9)(var2);
            var2 = var3.bind(var4)(var2);
case 17:
            var3 = var8.includes;
            var2 = 'video';
            var2 = var3.bind(var8)(var2);
            if(!var2) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var3 = var4.push;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 4;
            var7 = var12[var2];
            var10 = undefined;
            var7 = var11.bind(var10)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var2 = var12[var2];
            var2 = var11.bind(var10)(var2);
            var2 = var2.t;
            var2 = var2.al+5qH;
            var2 = var7.bind(var9)(var2);
            var2 = var3.bind(var4)(var2);
case 57:
            var3 = var8.includes;
            var2 = 'audio';
            var2 = var3.bind(var8)(var2);
            if(!var2) { _fun0005_ip = 59; continue _fun0005 }
case 44:
            var3 = var4.push;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 4;
            var7 = var12[var2];
            var10 = undefined;
            var7 = var11.bind(var10)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var2 = var12[var2];
            var2 = var11.bind(var10)(var2);
            var2 = var2.t;
            var2 = var2.Kzll3E;
            var2 = var7.bind(var9)(var2);
            var2 = var3.bind(var4)(var2);
case 59:
            var3 = var4.push;
            var7 = var8.filter;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.startsWith;
                var1 = '.';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var8)(var2);
            var2 = var7.sort;
            var14 = var2.bind(var7)();
            var2 = new Array(0);
            var15 = var2;
            var13 = 0;
            var7 = arraySpread(var15, var14, var13);
            var15 = var3;
            var14 = var2;
            var13 = var4;
            var2 = apply(var15, var14, var13);
            var3 = var4.length;
            var2 = null;
            if(!(var6 !== var3)) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var3 = var5.format;
            var2 = var3.bind(var5)(var4);
case 60:
            return var2;
case 53:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var4 = function useFileTypesFormattedString(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var5.bind(var3)(var4);
        var5 = var7.useStateFromStores;
        var3 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = _closure1_slot5;
            var1 = var1.locale;
            return var1;
        };
        var5 = var5.bind(var7)(var4, var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var4 = _closure1_slot14;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var4;
    var1 = function validateFilenamesForExtensions(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var3 = var1.length;
            var1 = 0;
            var1 = var1 === var3;
            if(var1) { _fun0006_ip = 62; continue _fun0006 }
case 55:
            var3 = var4.every;
            var2 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = _closure2_slot0;
                var2 = var3.some;
                var1 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.toLowerCase;
                    var3 = var1.bind(var2)();
                    var2 = var3.endsWith;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var4 = '.';
                    var1 = arg1;
                    var1 = var5.bind(var4)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 62:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function showInvalidFileTypeAlertForTypes(arg1) {
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 6;
        var2 = var9[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var6 = _closure1_slot0;
        var5 = 4;
        var7 = var9[var5];
        var7 = var6.bind(var1)(var7);
        var10 = var7.intl;
        var8 = var10.string;
        var7 = var9[var5];
        var7 = var6.bind(var1)(var7);
        var7 = var7.t;
        var7 = var7.azO1Pe;
        var7 = var8.bind(var10)(var7);
        var2['title'] = var7;
        var7 = var9[var5];
        var7 = var6.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.formatToPlainString;
        var5 = var9[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.t;
        var6 = var5["5U9LSo"];
        var5 = {};
        var9 = arg1;
        var5['types'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var2['body'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function areMediaFilesAllowed(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var2 = var4.length;
            var1 = 0;
            var1 = var1 === var2;
            if(var1) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot6;
                    var1 = var3.includes;
                    var1 = var1.bind(var3)(var4);
                    if(var1) { _fun0008_ip = 63; continue _fun0008 }
case 31:
                    var3 = _closure1_slot7;
                    var2 = var3.includes;
                    var1 = var2.bind(var3)(var4);
case 63:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 63:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = ['png', 'gif', 'jpg', 'jpeg', 'jfif', 'webp', 'avif'];
    var _closure1_slot6 = var5;
    var5 = ['mp4', 'mov', 'qt', 'webm'];
    var _closure1_slot7 = var5;
    var5 = ['mp3', 'm4a', 'wav', 'ogg', 'opus', 'flac'];
    var _closure1_slot8 = var5;
    var5 = {};
    var8 = ['jpeg', 'jfif', 'heic', 'heif'];
    var5['jpg'] = var8;
    var8 = ['mp4', 'qt'];
    var5['mov'] = var8;
    var _closure1_slot9 = var5;
    var5 = {};
    var8 = ['jpeg', 'jfif'];
    var5['jpg'] = var8;
    var8 = ['mov', 'qt'];
    var5['mp4'] = var8;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/interactions/FileTypeFiltering.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useFileTypesFormattedString'] = var4;
    var4 = function getFileTypeFiltering(arg1) {
        var7 = arg1;
        var4 = _closure1_slot13;
        var2 = undefined;
        var5 = var4.bind(var2)(var7);
        var _closure2_slot0 = var5;
        var6 = _closure1_slot14;
        var4 = _closure1_slot5;
        var4 = var4.locale;
        var4 = var6.bind(var2)(var7, var4);
        var _closure2_slot1 = var4;
        var1 = _closure1_slot18;
        var2 = var1.bind(var2)(var5);
        var1 = {};
        var1['allowedExtensions'] = var5;
        var1['typesFormattedString'] = var4;
        var4 = function validateFilenames(arg1) {
            var4 = _closure1_slot16;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var1['validateFilenames'] = var4;
        var3 = function showInvalidFileTypeAlert() {
            var3 = _closure1_slot17;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['showInvalidFileTypeAlert'] = var3;
        var1['mediaFilesAllowed'] = var2;
        return var1;
    };
    var3['getFileTypeFiltering'] = var4;
    var2 = function useFileTypeFiltering(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var7 = _closure1_slot4;
        var6 = var7.useMemo;
        var4 = new Array(1);
        var4[0] = var5;
        var3 = function() {
            var3 = _closure1_slot13;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var6 = var6.bind(var7)(var3, var4);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot15;
        var3 = undefined;
        var5 = var4.bind(var3)(var5);
        var _closure2_slot2 = var5;
        var8 = _closure1_slot4;
        var7 = var8.useCallback;
        var4 = new Array(1);
        var4[0] = var6;
        var3 = function(arg1) {
            var4 = _closure1_slot16;
            var3 = _closure2_slot1;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var4 = var7.bind(var8)(var3, var4);
        var9 = _closure1_slot4;
        var8 = var9.useCallback;
        var7 = new Array(1);
        var7[0] = var5;
        var3 = function() {
            var3 = _closure1_slot17;
            var2 = _closure2_slot2;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = var8.bind(var9)(var3, var7);
        var8 = _closure1_slot4;
        var7 = var8.useMemo;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot18;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var7.bind(var8)(var1, var2);
        var1 = {};
        var1['allowedExtensions'] = var6;
        var1['typesFormattedString'] = var5;
        var1['validateFilenames'] = var4;
        var1['showInvalidFileTypeAlert'] = var3;
        var1['mediaFilesAllowed'] = var2;
        return var1;
    };
    var3['useFileTypeFiltering'] = var2;
    return var1;
})();