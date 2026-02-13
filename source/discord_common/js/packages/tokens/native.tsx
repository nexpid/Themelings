// discord_common/js/packages/tokens/native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var10;
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
            var9 = _closure1_slot9;
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
            var7 = _closure1_slot9;
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
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var1;
    var7 = global;
    var5 = var7.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var1 = 0;
    var2 = var10[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var2 = var2._private;
    var6 = var2.Themes;
    var _closure1_slot3 = var6;
    var2 = 1;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2._private;
    var4 = var2.SemanticColors;
    var _closure1_slot4 = var4;
    var2 = 2;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2._private;
    var2 = var2.SemanticColorExperiments;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2._private;
    var5 = var2.RawColors;
    var _closure1_slot6 = var5;
    var2 = 4;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2._private;
    var2 = var2.Shadows;
    var8 = 5;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8._private;
    var8 = var8.Spacing;
    var12 = var7.Symbol;
    var7 = 'semanticColor';
    var7 = var12.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = {};
    var7['themes'] = var6;
    var12 = 6;
    var14 = var10[var12];
    var15 = var13.bind(var1)(var14);
    var14 = function(arg1, arg2) {
        var1 = {};
        var3 = _closure1_slot7;
        var2 = arg2;
        var1[var3] = var2;
        return var1;
    };
    var14 = var15.bind(var1)(var4, var14);
    var7['colors'] = var14;
    var7['unsafe_rawColors'] = var5;
    var12 = var10[var12];
    var13 = var13.bind(var1)(var12);
    var12 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = function createResolve(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = {};
            var2 = function resolve(arg1, arg2) {
                var4 = _closure3_slot0;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var2[var1];
                var3 = var1.nativeStyles;
                var2 = undefined;
                var1 = arg2;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var1['resolve'] = var2;
            return var1;
        };
        var1 = {};
        var3 = undefined;
        var5 = function(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg2;
                var1 = undefined;
                if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var2 = arg1;
                var1 = var2.shadowOffset;
case 36:
                return var1;
            }
        };
        var5 = var4.bind(var3)(var5);
        var1['shadowOffset'] = var5;
        var5 = function(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var1 = arg2;
                if(var1) { _fun0005_ip = 36; continue _fun0005 }
case 38:
                var1 = var2.shadowColor;
                _fun0005_ip = 31; continue _fun0005;
case 36:
                var1 = var2.shadowColorAndroid;
case 31:
                return var1;
            }
        };
        var5 = var4.bind(var3)(var5);
        var1['shadowColor'] = var5;
        var5 = function(arg1) {
            var1 = arg1;
            var1 = var1.shadowOpacity;
            return var1;
        };
        var5 = var4.bind(var3)(var5);
        var1['shadowOpacity'] = var5;
        var5 = function(arg1) {
            var1 = arg1;
            var1 = var1.shadowRadius;
            return var1;
        };
        var5 = var4.bind(var3)(var5);
        var1['shadowRadius'] = var5;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.elevation;
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var1['elevation'] = var2;
        return var1;
    };
    var12 = var13.bind(var1)(var2, var12);
    var7['shadows'] = var12;
    var12 = 7;
    var12 = var10[var12];
    var12 = var9.bind(var1)(var12);
    var12 = var12.Radius;
    var7['radii'] = var12;
    var7['spacing'] = var8;
    var8 = {};
    var12 = function isSemanticColor(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = 'object';
            var1 = typeof var3;
            var1 = var2 === var1;
            if(!var1) { _fun0006_ip = 31; continue _fun0006 }
case 36:
            var2 = null;
            var1 = var2 !== var3;
case 31:
            if(!var1) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var2 = _closure1_slot7;
            var1 = var2 in var3;
case 39:
            return var1;
        }
    };
    var8['isSemanticColor'] = var12;
    var12 = function getSemanticColorName(arg1) {
        var2 = _closure1_slot7;
        var1 = arg1;
        var1 = var1[var2];
        return var1;
    };
    var8['getSemanticColorName'] = var12;
    var12 = function resolveSemanticColor(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var12 = arg2;
            var7 = arg3;
            var2 = 'string';
            var1 = typeof var6;
            var11 = var6;
            if(!(var2 === var1)) { _fun0007_ip = 41; continue _fun0007 }
case 31:
            var1 = var6.toUpperCase;
            var2 = var1.bind(var6)();
            var3 = _closure1_slot3;
            var3 = var2 in var3;
            if(var3) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var3 = global;
            var5 = var3.Error;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = 'Invalid theme: ';
            var22 = var4.bind(var3)(var6);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var23 = var4;
            var3 = new var23[var5](var22, var21);
            var3 = var3 instanceof Object ? var3 : var4;
            throw var3;
case 42:
            var1 = _closure1_slot3;
            var11 = var1[var2];
case 41:
            var3 = _closure1_slot4;
            var1 = _closure1_slot7;
            var1 = var12[var1];
            var8 = var3[var1];
            var10 = var8.category;
            var1 = var8[var11];
            var4 = _closure1_slot6;
            var3 = var1.raw;
            var17 = var4[var3];
            var16 = var1.opacity;
            var3 = null;
            var1 = var3 == var7;
            var5 = undefined;
            var4 = undefined;
            if(var1) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var4 = var7.enabledExperiments;
case 44:
            var6 = var17;
            var1 = var16;
            if(!(var3 != var4)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var4 = var7.enabledExperiments;
            var9 = var4.length;
            var4 = 0;
            var6 = var17;
            var1 = var16;
            if(!(var9 > var4)) { _fun0007_ip = 46; continue _fun0007 }
case 48:
            var9 = _closure1_slot5;
            var4 = _closure1_slot7;
            var4 = var12[var4];
            var15 = var9[var4];
            var6 = var17;
            var1 = var16;
            if(!(var3 != var15)) { _fun0007_ip = 46; continue _fun0007 }
case 49:
            var9 = _closure1_slot8;
            var4 = var7.enabledExperiments;
            var14 = var9.bind(var5)(var4);
            var9 = var14.bind(var5)();
            var4 = var9.done;
            var13 = var9;
            var12 = undefined;
            var6 = var17;
            var1 = var16;
            if(var4) { _fun0007_ip = 46; continue _fun0007 }
case 50:
            var9 = var13.value;
            var18 = var3 == var15;
            var4 = undefined;
            if(var18) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var18 = var15[var9];
            var9 = var3 == var18;
            var12 = var18;
            var4 = undefined;
            if(var9) { _fun0007_ip = 51; continue _fun0007 }
case 53:
            var4 = var18[var11];
            var12 = var18;
case 51:
            if(!(var3 == var4)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var18 = var14.bind(var5)();
            var9 = var18.done;
            var13 = var18;
            var6 = var17;
            var1 = var16;
            if(var9) { _fun0007_ip = 46; continue _fun0007 }
case 56:
            _fun0007_ip = 50; continue _fun0007;
case 54:
            var12 = _closure1_slot6;
            var9 = var4.raw;
            var6 = var12[var9];
            var1 = var4.opacity;
case 46:
            var4 = var3 == var7;
            var9 = undefined;
            if(var4) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var9 = var7.gradient;
case 57:
            var12 = var6;
            var4 = var1;
            if(!(var3 != var9)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var9 = 'gradient';
            var9 = var9 in var8;
            var12 = var6;
            var4 = var1;
            if(!var9) { _fun0007_ip = 59; continue _fun0007 }
case 61:
            var9 = var8.gradient;
            var13 = var3 == var7;
            var8 = undefined;
            if(var13) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var13 = var7.gradient;
            var8 = var13.theme;
case 62:
            var8 = var9[var8];
            var12 = var6;
            var4 = var1;
            if(!(var3 != var8)) { _fun0007_ip = 59; continue _fun0007 }
case 64:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var6 = var6.bind(var5)(var1);
            var9 = var8.color;
            var1 = _closure1_slot6;
            var1 = var9 in var1;
            if(var1) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var9 = var3 == var7;
            var1 = undefined;
            if(var9) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var9 = var7.gradient;
            var13 = var9.colors;
            var9 = var8.color;
            var1 = var13[var9];
case 67:
            _fun0007_ip = 69; continue _fun0007;
case 65:
            var13 = _closure1_slot6;
            var9 = var8.color;
            var1 = var13[var9];
case 69:
            var13 = var6.bind(var5)(var1);
            var1 = 'saturation';
            var1 = var1 in var8;
            var14 = var13;
            if(!var1) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var9 = var13.set;
            var6 = var8.saturation;
            var1 = 'hsl.s';
            var14 = var9.bind(var13)(var1, var6);
case 70:
            var1 = 'lightness';
            var1 = var1 in var8;
            var6 = var14;
            if(!var1) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var13 = var14.set;
            var9 = var8.lightness;
            var1 = 'hsl.l';
            var6 = var13.bind(var14)(var1, var9);
case 72:
            var1 = var6.hex;
            var6 = var1.bind(var6)();
            var1 = 'opacity';
            var9 = var1 in var8;
            var1 = 1;
            if(!var9) { _fun0007_ip = 74; continue _fun0007 }
case 75:
            var1 = var8.opacity;
case 74:
            var4 = var1;
            var12 = var6;
case 59:
            var6 = var3 == var7;
            var1 = undefined;
            if(var6) { _fun0007_ip = 76; continue _fun0007 }
case 77:
            var1 = var7.contrast;
case 76:
            var8 = var3 != var1;
            var6 = 1;
            var9 = var6;
            if(!var8) { _fun0007_ip = 78; continue _fun0007 }
case 79:
            var9 = var1;
case 78:
            var8 = var3 == var7;
            var1 = undefined;
            if(var8) { _fun0007_ip = 80; continue _fun0007 }
case 81:
            var1 = var7.saturation;
case 80:
            var3 = var3 != var1;
            var7 = var6;
            if(!var3) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            var7 = var1;
case 82:
            var8 = var12;
            if(!(var7 < var6)) { _fun0007_ip = 84; continue _fun0007 }
case 85:
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 9;
            var1 = var13[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.transformColorForReducedSaturation;
            var8 = var1.bind(var3)(var12, var10, var7);
case 84:
            var3 = var8;
            if(!(var6 !== var9)) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 9;
            var1 = var12[var1];
            var7 = var7.bind(var5)(var1);
            var1 = var7.transformColorContrast;
            var23 = var7;
            var22 = var8;
            var21 = var10;
            var20 = var11;
            var19 = var9;
            var3 = var23[var1](var22, var21, var20, var19, var18);
case 86:
            var1 = var3;
            if(!(var6 !== var4)) { _fun0007_ip = 88; continue _fun0007 }
case 89:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var3 = var2.bind(var5)(var3);
            var2 = var3.alpha;
            var3 = var2.bind(var3)(var4);
            var2 = var3.hex;
            var1 = var2.bind(var3)();
case 88:
            return var1;
        }
    };
    var8['resolveSemanticColor'] = var12;
    var12 = function adjustColorSaturation(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.transformColorForReducedSaturation;
        var3 = arg1;
        var2 = arg3;
        var1 = arg2;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var8['adjustColorSaturation'] = var12;
    var11 = function adjustColorContrast(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var6 = var3.bind(var1)(var2);
        var5 = var6.transformColorContrast;
        var10 = arg1;
        var9 = arg3;
        var8 = arg4;
        var7 = arg2;
        var11 = var6;
        var1 = var11[var5](var10, var9, var8, var7, var6);
        return var1;
    };
    var8['adjustColorContrast'] = var11;
    var7['internal'] = var8;
    var8 = 10;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = '../discord_common/js/packages/tokens/native.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['Theme'] = var6;
    var3['RawColor'] = var5;
    var3['SemanticColor'] = var4;
    var3['Shadow'] = var2;
    return var1;
})();