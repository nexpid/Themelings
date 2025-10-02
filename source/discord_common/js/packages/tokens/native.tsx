// discord_common/js/packages/tokens/native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var10;
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
    var5 = var2.RawColors;
    var _closure1_slot5 = var5;
    var2 = 3;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2._private;
    var2 = var2.Shadows;
    var8 = 4;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8._private;
    var8 = var8.Spacing;
    var12 = var7.Symbol;
    var7 = 'semanticColor';
    var7 = var12.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = {};
    var7['themes'] = var6;
    var12 = 5;
    var14 = var10[var12];
    var15 = var13.bind(var1)(var14);
    var14 = function(arg1, arg2) {
        var1 = {};
        var3 = _closure1_slot6;
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
        var5 = function(arg1) {
            var1 = arg1;
            var1 = var1.shadowOffset;
            return var1;
        };
        var5 = var4.bind(var3)(var5);
        var1['shadowOffset'] = var5;
        var5 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var1 = arg2;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var2.shadowColor;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var1 = var2.shadowColorAndroid;
case 4:
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
    var12 = 6;
    var12 = var10[var12];
    var12 = var9.bind(var1)(var12);
    var12 = var12.Radius;
    var7['radii'] = var12;
    var7['spacing'] = var8;
    var8 = {};
    var12 = function isSemanticColor(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = 'object';
            var1 = typeof var3;
            var1 = var2 === var1;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 2:
            var2 = null;
            var1 = var2 !== var3;
case 4:
            if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = _closure1_slot6;
            var1 = var2 in var3;
case 5:
            return var1;
        }
    };
    var8['isSemanticColor'] = var12;
    var12 = function getSemanticColorName(arg1) {
        var2 = _closure1_slot6;
        var1 = arg1;
        var1 = var1[var2];
        return var1;
    };
    var8['getSemanticColorName'] = var12;
    var12 = function resolveSemanticColor(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var7 = arg3;
            var2 = 'string';
            var1 = typeof var6;
            var11 = var6;
            if(!(var2 === var1)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var1 = var6.toUpperCase;
            var2 = var1.bind(var6)();
            var3 = _closure1_slot3;
            var3 = var2 in var3;
            if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var3 = global;
            var5 = var3.Error;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = 'Invalid theme: ';
            var18 = var4.bind(var3)(var6);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var19 = var4;
            var3 = new var19[var5](var18, var17);
            var3 = var3 instanceof Object ? var3 : var4;
            throw var3;
case 9:
            var1 = _closure1_slot3;
            var11 = var1[var2];
case 7:
            var3 = _closure1_slot4;
            var4 = _closure1_slot6;
            var1 = arg2;
            var1 = var1[var4];
            var8 = var3[var1];
            var10 = var8.category;
            var1 = var8[var11];
            var4 = _closure1_slot5;
            var3 = var1.raw;
            var6 = var4[var3];
            var1 = var1.opacity;
            var3 = null;
            var4 = var3 == var7;
            var5 = undefined;
            var9 = undefined;
            if(var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var9 = var7.gradient;
case 11:
            var12 = var6;
            var4 = var1;
            if(!(var3 != var9)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var9 = 'gradient';
            var9 = var9 in var8;
            var12 = var6;
            var4 = var1;
            if(!var9) { _fun0003_ip = 13; continue _fun0003 }
case 15:
            var9 = var8.gradient;
            var13 = var3 == var7;
            var8 = undefined;
            if(var13) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var13 = var7.gradient;
            var8 = var13.theme;
case 16:
            var8 = var9[var8];
            var12 = var6;
            var4 = var1;
            if(!(var3 != var8)) { _fun0003_ip = 13; continue _fun0003 }
case 18:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var6 = var6.bind(var5)(var1);
            var9 = var8.color;
            var1 = _closure1_slot5;
            var1 = var9 in var1;
            if(var1) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var9 = var3 == var7;
            var1 = undefined;
            if(var9) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var9 = var7.gradient;
            var13 = var9.colors;
            var9 = var8.color;
            var1 = var13[var9];
case 21:
            _fun0003_ip = 23; continue _fun0003;
case 19:
            var13 = _closure1_slot5;
            var9 = var8.color;
            var1 = var13[var9];
case 23:
            var13 = var6.bind(var5)(var1);
            var1 = 'saturation';
            var1 = var1 in var8;
            var14 = var13;
            if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var9 = var13.set;
            var6 = var8.saturation;
            var1 = 'hsl.s';
            var14 = var9.bind(var13)(var1, var6);
case 24:
            var1 = 'lightness';
            var1 = var1 in var8;
            var6 = var14;
            if(!var1) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var13 = var14.set;
            var9 = var8.lightness;
            var1 = 'hsl.l';
            var6 = var13.bind(var14)(var1, var9);
case 26:
            var1 = var6.hex;
            var6 = var1.bind(var6)();
            var1 = 'opacity';
            var9 = var1 in var8;
            var1 = 1;
            if(!var9) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var1 = var8.opacity;
case 28:
            var4 = var1;
            var12 = var6;
case 13:
            var6 = var3 == var7;
            var1 = undefined;
            if(var6) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var1 = var7.contrast;
case 30:
            var8 = var3 != var1;
            var6 = 1;
            var9 = var6;
            if(!var8) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var9 = var1;
case 32:
            var8 = var3 == var7;
            var1 = undefined;
            if(var8) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var1 = var7.saturation;
case 34:
            var3 = var3 != var1;
            var7 = var6;
            if(!var3) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var7 = var1;
case 36:
            var8 = var12;
            if(!(var7 < var6)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 8;
            var1 = var13[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.transformColorForReducedSaturation;
            var8 = var1.bind(var3)(var12, var10, var7);
case 38:
            var3 = var8;
            if(!(var6 !== var9)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 8;
            var1 = var12[var1];
            var7 = var7.bind(var5)(var1);
            var1 = var7.transformColorContrast;
            var19 = var7;
            var18 = var8;
            var17 = var10;
            var16 = var11;
            var15 = var9;
            var3 = var19[var1](var18, var17, var16, var15, var14);
case 40:
            var1 = var3;
            if(!(var6 !== var4)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var3 = var2.bind(var5)(var3);
            var2 = var3.alpha;
            var3 = var2.bind(var3)(var4);
            var2 = var3.hex;
            var1 = var2.bind(var3)();
case 42:
            return var1;
        }
    };
    var8['resolveSemanticColor'] = var12;
    var12 = function adjustColorSaturation(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
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
        var1 = 8;
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
    var8 = 9;
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