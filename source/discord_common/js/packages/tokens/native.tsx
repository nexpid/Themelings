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
 0:
                var2 = arg1;
                var1 = arg2;
                if(var1) { _fun0001_ip = 17; continue _fun0001 }
 9:
                var1 = var2.shadowColor;
                _fun0001_ip = 23; continue _fun0001;
 17:
                var1 = var2.shadowColorAndroid;
 23:
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
 0:
            var3 = arg1;
            var2 = 'object';
            var1 = typeof var3;
            var1 = var2 === var1;
            if(!var1) { _fun0002_ip = 23; continue _fun0002 }
 17:
            var2 = null;
            var1 = var2 !== var3;
 23:
            if(!var1) { _fun0002_ip = 37; continue _fun0002 }
 26:
            var2 = _closure1_slot6;
            var1 = var2 in var3;
 37:
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
 0:
            var6 = arg1;
            var7 = arg3;
            var2 = 'string';
            var1 = typeof var6;
            var11 = var6;
            if(!(var2 === var1)) { _fun0003_ip = 104; continue _fun0003 }
 20:
            var1 = var6.toUpperCase;
            var2 = var1.bind(var6)();
            var3 = _closure1_slot3;
            var3 = var2 in var3;
            if(var3) { _fun0003_ip = 96; continue _fun0003 }
 44:
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
 96:
            var1 = _closure1_slot3;
            var11 = var1[var2];
 104:
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
            if(var4) { _fun0003_ip = 173; continue _fun0003 }
 167:
            var9 = var7.gradient;
 173:
            var12 = var6;
            var4 = var1;
            if(!(var3 != var9)) { _fun0003_ip = 443; continue _fun0003 }
 186:
            var9 = 'gradient';
            var9 = var9 in var8;
            var12 = var6;
            var4 = var1;
            if(!var9) { _fun0003_ip = 443; continue _fun0003 }
 206:
            var9 = var8.gradient;
            var13 = var3 == var7;
            var8 = undefined;
            if(var13) { _fun0003_ip = 233; continue _fun0003 }
 221:
            var13 = var7.gradient;
            var8 = var13.theme;
 233:
            var8 = var9[var8];
            var12 = var6;
            var4 = var1;
            if(!(var3 != var8)) { _fun0003_ip = 443; continue _fun0003 }
 250:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var6 = var6.bind(var5)(var1);
            var9 = var8.color;
            var1 = _closure1_slot5;
            var1 = var9 in var1;
            if(var1) { _fun0003_ip = 317; continue _fun0003 }
 286:
            var9 = var3 == var7;
            var1 = undefined;
            if(var9) { _fun0003_ip = 315; continue _fun0003 }
 295:
            var9 = var7.gradient;
            var13 = var9.colors;
            var9 = var8.color;
            var1 = var13[var9];
 315:
            _fun0003_ip = 330; continue _fun0003;
 317:
            var13 = _closure1_slot5;
            var9 = var8.color;
            var1 = var13[var9];
 330:
            var13 = var6.bind(var5)(var1);
            var1 = 'saturation';
            var1 = var1 in var8;
            var14 = var13;
            if(!var1) { _fun0003_ip = 372; continue _fun0003 }
 349:
            var9 = var13.set;
            var6 = var8.saturation;
            var1 = 'hsl.s';
            var14 = var9.bind(var13)(var1, var6);
 372:
            var1 = 'lightness';
            var1 = var1 in var8;
            var6 = var14;
            if(!var1) { _fun0003_ip = 409; continue _fun0003 }
 386:
            var13 = var14.set;
            var9 = var8.lightness;
            var1 = 'hsl.l';
            var6 = var13.bind(var14)(var1, var9);
 409:
            var1 = var6.hex;
            var6 = var1.bind(var6)();
            var1 = 'opacity';
            var9 = var1 in var8;
            var1 = 1;
            if(!var9) { _fun0003_ip = 437; continue _fun0003 }
 432:
            var1 = var8.opacity;
 437:
            var4 = var1;
            var12 = var6;
 443:
            var6 = var3 == var7;
            var1 = undefined;
            if(var6) { _fun0003_ip = 458; continue _fun0003 }
 452:
            var1 = var7.contrast;
 458:
            var8 = var3 != var1;
            var6 = 1;
            var9 = var6;
            if(!var8) { _fun0003_ip = 474; continue _fun0003 }
 471:
            var9 = var1;
 474:
            var8 = var3 == var7;
            var1 = undefined;
            if(var8) { _fun0003_ip = 489; continue _fun0003 }
 483:
            var1 = var7.saturation;
 489:
            var3 = var3 != var1;
            var7 = var6;
            if(!var3) { _fun0003_ip = 502; continue _fun0003 }
 499:
            var7 = var1;
 502:
            var8 = var12;
            if(!(var7 < var6)) { _fun0003_ip = 542; continue _fun0003 }
 509:
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 8;
            var1 = var13[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.transformColorForReducedSaturation;
            var8 = var1.bind(var3)(var12, var10, var7);
 542:
            var3 = var8;
            if(!(var6 !== var9)) { _fun0003_ip = 594; continue _fun0003 }
 549:
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
 594:
            var1 = var3;
            if(!(var6 !== var4)) { _fun0003_ip = 646; continue _fun0003 }
 601:
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
 646:
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