// app/modules/client_themes/native/ThemedGradient.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function getThemeMixColor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.mixAmount;
            var6 = undefined;
            if(!(var8 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = {};
case 2:
            var1 = var2.mixColorOverride;
            var10 = var2.theme;
            var4 = var2.darkFallbackOpacity;
            if(!(var4 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = 0.7;
case 4:
            var5 = var2.lightFallbackOpacity;
            if(!(var5 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = 0.8;
case 6:
            var7 = null;
            if(!(var7 == var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 5;
            var3 = var11[var3];
            var9 = var9.bind(var6)(var3);
            var3 = var9.isThemeDark;
            var3 = var3.bind(var9)(var10);
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var4;
case 10:
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var8.light;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var4 = var8.dark;
case 14:
            if(!(var7 != var4)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = var4;
case 15:
            var4 = 255;
            if(!var3) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var4 = 0;
case 17:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 6;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var16 = var3;
            var15 = var4;
            var14 = var4;
            var13 = var4;
            var12 = var5;
            var2 = new var16[var2](var15, var14, var13, var12, var11);
            var2 = var2 instanceof Object ? var2 : var3;
            return var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function getThemedMixAmount(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.mixAmount;
            var7 = undefined;
            if(!(var3 === var7)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var3 = {};
case 2:
            var6 = var1.theme;
            var2 = var1.darkFallbackAmount;
            if(!(var2 === var7)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = 0.3;
case 19:
            var1 = var1.lightFallbackAmount;
            if(!(var1 === var7)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var1 = 0.2;
case 21:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 5;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.isThemeDark;
            var4 = var4.bind(var5)(var6);
            if(var4) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var5 = var3.light;
            var4 = null;
            if(!(var4 != var5)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var5 = var3.light;
            var4 = 1;
            var1 = var4 - var5;
case 25:
            _fun0002_ip = 27; continue _fun0002;
case 23:
            var5 = var3.dark;
            var4 = null;
            if(!(var4 != var5)) { _fun0002_ip = 28; continue _fun0002 }
case 16:
            var4 = var3.dark;
            var3 = 1;
            var2 = var3 - var4;
case 28:
            var1 = var2;
case 27:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getMixedGradientColor(arg1) {
        var1 = arg1;
        var7 = var1.color;
        var6 = var1.mixAmount;
        var4 = var1.mixColorOverride;
        var5 = var1.theme;
        var3 = _closure1_slot12;
        var2 = {};
        var2['mixAmount'] = var6;
        var2['mixColorOverride'] = var4;
        var2['theme'] = var5;
        var10 = undefined;
        var4 = var3.bind(var10)(var2);
        var3 = _closure1_slot13;
        var2 = {};
        var2['mixAmount'] = var6;
        var2['theme'] = var5;
        var12 = var3.bind(var10)(var2);
        var3 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 7;
        var5 = var11[var2];
        var6 = var3.bind(var10)(var5);
        var5 = var6.hexToRgb;
        var5 = var5.bind(var6)(var7);
        var8 = var5.r;
        var14 = var5.g;
        var13 = var5.b;
        var2 = var11[var2];
        var3 = var3.bind(var10)(var2);
        var2 = var3.mixColors;
        var5 = _closure1_slot1;
        var1 = 6;
        var1 = var11[var1];
        var1 = var5.bind(var10)(var1);
        var5 = var1.prototype;
        var5 = Object.create(var5, {constructor: {value: var1}});
        var16 = var5;
        var15 = var8;
        var1 = new var16[var1](var15, var14, var13, var12, var11);
        var1 = var1 instanceof Object ? var1 : var5;
        var2 = var2.bind(var3)(var4, var1);
        var1 = var2.toHexString;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function GradientBase(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var15 = var1.colors;
            var14 = var1.locations;
            var13 = var1.angle;
            var5 = var1.angleCenter;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0003_ip = 5; continue _fun0003 }
case 29:
            var5 = _closure1_slot9;
case 5:
            var7 = var1.absolute;
            var10 = var1.wide;
            var9 = var1.tall;
            var6 = var1.componentStyles;
            var2 = _closure1_slot8;
            var8 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 8;
            var3 = var16[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var12 = var3.width;
            var11 = var3.height;
            var3 = _closure1_slot6;
            var1 = 9;
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['colors'] = var15;
            var1['locations'] = var14;
            var1['angle'] = var13;
            var1['angleCenter'] = var5;
            var5 = true;
            var1['useAngle'] = var5;
            if(!var10) { _fun0003_ip = 30; continue _fun0003 }
case 27:
            var5 = {};
            var5['width'] = var12;
            var10 = var5;
case 30:
            var5 = new Array(5);
            var5[0] = var10;
            if(!var9) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var10 = {};
            var10['height'] = var11;
            var9 = var10;
case 31:
            var5[1] = var9;
            var9 = var8.linearGradient;
            var5[2] = var9;
            if(!var7) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var7 = var8.absolute;
case 33:
            var5[3] = var7;
            var5[4] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var5 = function Gradient(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.gradient;
            var8 = var1.absolute;
            var7 = var1.wide;
            var6 = var1.tall;
            var12 = var1.angleOverride;
            var5 = var1.componentStyles;
            var2 = var1.mix;
            var _closure2_slot0 = var2;
            var2 = var1.mixAmount;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0004_ip = 35; continue _fun0004 }
case 21:
            var2 = {};
case 35:
            var _closure2_slot1 = var2;
            var1 = var1.mixColorOverride;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            _closure2_slot3 = var1;
            var3 = var9.colors;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var6 = arg1;
                    var1 = _closure2_slot0;
                    if(var1) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var3 = var1.unsafe_rawColors;
                    var1 = var6.token;
                    var1 = var3[var1];
                    _fun0005_ip = 38; continue _fun0005;
case 36:
                    var4 = _closure1_slot14;
                    var3 = {};
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 11;
                    var7 = var7[var2];
                    var2 = undefined;
                    var7 = var8.bind(var2)(var7);
                    var7 = var7.unsafe_rawColors;
                    var6 = var6.token;
                    var6 = var7[var6];
                    var3['color'] = var6;
                    var6 = _closure2_slot1;
                    var3['mixAmount'] = var6;
                    var6 = _closure2_slot2;
                    var3['mixColorOverride'] = var6;
                    var5 = _closure2_slot3;
                    var3['theme'] = var5;
                    var1 = var4.bind(var2)(var3);
case 38:
                    return var1;
                }
            };
            var13 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot15;
            var1 = {};
            var1['colors'] = var13;
            var14 = var9.colors;
            var13 = var14.map;
            var11 = function(arg1) {
                var1 = arg1;
                var2 = var1.stop;
                var1 = 100;
                var1 = var2 / var1;
                return var1;
            };
            var11 = var13.bind(var14)(var11);
            var1['locations'] = var11;
            var11 = null;
            if(!(var11 == var12)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var12 = var9.angle;
case 39:
            var1['angle'] = var12;
            var9 = var9.angleCenter;
            if(!(var11 == var9)) { _fun0004_ip = 8; continue _fun0004 }
case 41:
            var9 = _closure1_slot9;
case 8:
            var1['angleCenter'] = var9;
            var1['absolute'] = var8;
            var1['wide'] = var7;
            var1['tall'] = var6;
            var1['componentStyles'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var5;
    var1 = function GuildThemePresetGradient(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var11 = var1.preset;
            var8 = var1.absolute;
            var7 = var1.wide;
            var6 = var1.tall;
            var10 = var1.angleOverride;
            var5 = var1.componentStyles;
            var2 = var1.mix;
            var _closure2_slot0 = var2;
            var2 = var1.mixAmount;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0006_ip = 35; continue _fun0006 }
case 21:
            var2 = {};
case 35:
            var _closure2_slot1 = var2;
            var1 = var1.mixColorOverride;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 10;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.bind(var4)();
            _closure2_slot3 = var3;
            var2 = _closure1_slot0;
            var1 = 12;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getGuildThemePresetAppearance;
            var11 = var1.bind(var2)(var11, var3);
            var3 = var11.colors;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var1 = _closure2_slot0;
                    if(var1) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var1 = var5.hex;
                    _fun0007_ip = 44; continue _fun0007;
case 42:
                    var4 = _closure1_slot14;
                    var3 = {};
                    var5 = var5.hex;
                    var3['color'] = var5;
                    var5 = _closure2_slot1;
                    var3['mixAmount'] = var5;
                    var5 = _closure2_slot2;
                    var3['mixColorOverride'] = var5;
                    var2 = _closure2_slot3;
                    var3['theme'] = var2;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
case 44:
                    return var1;
                }
            };
            var13 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot15;
            var1 = {};
            var1['colors'] = var13;
            var14 = var11.colors;
            var13 = var14.map;
            var12 = function(arg1) {
                var1 = arg1;
                var2 = var1.stop;
                var1 = 100;
                var1 = var2 / var1;
                return var1;
            };
            var12 = var13.bind(var14)(var12);
            var1['locations'] = var12;
            var12 = null;
            if(!(var12 == var10)) { _fun0006_ip = 45; continue _fun0006 }
case 33:
            var10 = var11.angle;
case 45:
            var1['angle'] = var10;
            var9 = _closure1_slot9;
            var1['angleCenter'] = var9;
            var1['absolute'] = var8;
            var1['wide'] = var7;
            var1['tall'] = var6;
            var1['componentStyles'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var4 = function validateColors(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg2;
                var1 = arg1;
                var2 = var3;
                var4 = 'string';
                var3 = typeof var3;
                if(!(var4 === var3)) { _fun0008_ip = 19; continue _fun0008 }
case 46:
                var5 = _closure1_slot11;
                var4 = var5.test;
                var3 = var2;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0008_ip = 47; continue _fun0008 }
case 19: // try_start_0
                var5 = var1;
                var4 = var5.push;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 14;
                var3 = var7[var3];
                var7 = undefined;
                var6 = var6.bind(var7)(var3);
                var3 = var2;
                var7 = var6.bind(var7)(var3);
                var6 = var7.hex;
                var3 = 'rgb';
                var3 = var6.bind(var7)(var3);
                var3 = var4.bind(var5)(var3);
case 48: // try_end0
                _fun0008_ip = 49; continue _fun0008;
case 50: // catch_target0
                CatchBlockStart(arg_register=2);
case 49:
                var3 = var1;
                return var3;
case 47:
                var3 = var1.push;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var4;
    var1 = function CustomThemesGradient(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var19 = var2.colors;
            var3 = var2.baseMix;
            var6 = var2.gradientAngle;
            var4 = var2.gradientColorStops;
            var8 = var2.absolute;
            var11 = var2.wide;
            var10 = var2.tall;
            var18 = var2.mix;
            var17 = var2.mixAmount;
            var5 = undefined;
            if(!(var17 === var5)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
            var17 = {};
case 51:
            var16 = var2.mixColorOverride;
            var7 = var2.componentStyles;
            var15 = var2.theme;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var9 = _closure1_slot8;
            var9 = var9.bind(var5)();
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 8;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.bind(var5)();
            var13 = var12.width;
            var12 = var12.height;
            var14 = {};
            var14['colors'] = var19;
            var14['mix'] = var18;
            var14['mixAmount'] = var17;
            var14['mixColorOverride'] = var16;
            var14['theme'] = var15;
            var14['baseMix'] = var3;
            var3 = function getGradientColorsForCustomThemesGradient(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.colors;
                    var2 = var4.baseMix;
                    var _closure3_slot0 = var2;
                    var2 = var4.mix;
                    var5 = var4.mixAmount;
                    var6 = undefined;
                    if(!(var5 === var6)) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                    var5 = {};
case 53:
                    var _closure3_slot1 = var5;
                    var5 = var4.mixColorOverride;
                    var _closure3_slot2 = var5;
                    var4 = var4.theme;
                    var _closure3_slot3 = var4;
                    var4 = var3;
                    if(!var2) { _fun0010_ip = 55; continue _fun0010 }
case 56:
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = 100;
                        var2 = var2 / var1;
                        var1 = 1;
                        var8 = var1 - var2;
                        var3 = _closure1_slot12;
                        var2 = {};
                        var6 = _closure3_slot1;
                        var2['mixAmount'] = var6;
                        var5 = _closure3_slot2;
                        var2['mixColorOverride'] = var5;
                        var5 = _closure3_slot3;
                        var2['theme'] = var5;
                        var7 = _closure1_slot10;
                        var4 = 0.25;
                        var4 = var4 * var8;
                        var4 = var7 + var4;
                        var2['darkFallbackOpacity'] = var4;
                        var7 = _closure1_slot10;
                        var4 = 0.2;
                        var4 = var4 * var8;
                        var4 = var7 + var4;
                        var2['lightFallbackOpacity'] = var4;
                        var4 = undefined;
                        var7 = var3.bind(var4)(var2);
                        var3 = _closure1_slot13;
                        var2 = {};
                        var2['mixAmount'] = var6;
                        var2['theme'] = var5;
                        var5 = _closure1_slot10;
                        var2['darkFallbackAmount'] = var5;
                        var5 = _closure1_slot10;
                        var2['lightFallbackAmount'] = var5;
                        var13 = var3.bind(var4)(var2);
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var6 = var5[var3];
                        var9 = var2.bind(var4)(var6);
                        var8 = var9.hexToRgb;
                        var6 = arg1;
                        var6 = var8.bind(var9)(var6);
                        var11 = var6.r;
                        var15 = var6.g;
                        var14 = var6.b;
                        var3 = var5[var3];
                        var6 = var2.bind(var4)(var3);
                        var3 = var6.mixColors;
                        var8 = _closure1_slot1;
                        var1 = 6;
                        var1 = var5[var1];
                        var1 = var8.bind(var4)(var1);
                        var8 = var1.prototype;
                        var8 = Object.create(var8, {constructor: {value: var1}});
                        var17 = var8;
                        var16 = var11;
                        var1 = new var17[var1](var16, var15, var14, var13, var12);
                        var1 = var1 instanceof Object ? var1 : var8;
                        var3 = var3.bind(var6)(var7, var1);
                        var1 = 13;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.colorToHex;
                        var1 = var1.bind(var2)(var3);
                        return var1;
                    };
                    var4 = var2.bind(var3)(var1);
case 55:
                    var3 = var4.length;
                    var2 = 1;
                    var1 = var4;
                    if(!(var2 === var3)) { _fun0010_ip = 25; continue _fun0010 }
case 24:
                    var3 = 0;
                    var5 = var4[var3];
                    var2 = new Array(2);
                    var2[0] = var5;
                    var3 = var4[var3];
                    var2[1] = var3;
                    var1 = var2;
case 25:
                    return var1;
                }
            };
            var18 = var3.bind(var5)(var14);
            _closure2_slot0 = var18;
            var3 = 90;
            var14 = var6 - var3;
            var3 = global;
            var6 = var3.Math;
            var6 = var6.PI;
            var14 = var14 * var6;
            var6 = 180;
            var14 = var14 / var6;
            var15 = var3.Math;
            var6 = var15.cos;
            var17 = var6.bind(var15)(var14);
            var6 = var3.Math;
            var3 = var6.sin;
            var16 = var3.bind(var6)(var14);
            var3 = {};
            var6 = {};
            var14 = 0.7142857142857143;
            var15 = var14 * var17;
            var19 = 0.6;
            var15 = var19 - var15;
            var6['x'] = var15;
            var20 = var14 * var16;
            var15 = 0.5;
            var20 = var15 - var20;
            var6['y'] = var20;
            var3['start'] = var6;
            var6 = {};
            var17 = var14 * var17;
            var17 = var19 + var17;
            var6['x'] = var17;
            var14 = var14 * var16;
            var14 = var15 + var14;
            var6['y'] = var14;
            var3['end'] = var6;
            var14 = var3.start;
            var6 = var3.end;
            var3 = _closure1_slot18;
            var16 = var3.bind(var5)(var18);
            _closure2_slot1 = var16;
            var3 = function getGradientLocationsForCustomThemesGradient(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = arg1;
                    var4 = arguments[1];
                    var _closure3_slot0 = var5;
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                    var4 = new Array(0);
case 57:
                    var3 = var4.length;
                    var1 = var5.length;
                    if(!(var3 !== var1)) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                    var3 = var5.length;
                    var1 = 1;
                    if(!(var1 !== var3)) { _fun0011_ip = 35; continue _fun0011 }
case 61:
                    var3 = var5.map;
                    var1 = function(arg1, arg2) {
                        var1 = _closure3_slot0;
                        var2 = var1.length;
                        var1 = 1;
                        var2 = var2 - var1;
                        var1 = arg2;
                        var1 = var1 / var2;
                        return var1;
                    };
                    var1 = var3.bind(var5)(var1);
                    _fun0011_ip = 62; continue _fun0011;
case 35:
                    var1 = [0, 1];
case 62:
                    _fun0011_ip = 63; continue _fun0011;
case 59:
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var1 = 100;
                        var1 = var2 / var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 63:
                    return var1;
                }
            };
            var15 = var3.bind(var5)(var16, var4);
            var17 = _closure1_slot3;
            var4 = var17.useEffect;
            var3 = new Array(2);
            var3[0] = var16;
            var3[1] = var18;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.length;
                    var1 = 2;
                    if(!(var2 < var1)) { _fun0012_ip = 25; continue _fun0012 }
case 64:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.captureException;
                    var7 = global;
                    var5 = var7.Error;
                    var1 = var5.prototype;
                    var2 = Object.create(var1, {constructor: {value: var5}});
                    var10 = 'Invalid custom theme gradient colors';
                    var11 = var2;
                    var1 = new var11[var5](var10, var9);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = {};
                    var5 = {};
                    var8 = var7.JSON;
                    var7 = var8.stringify;
                    var6 = _closure2_slot0;
                    var6 = var7.bind(var8)(var6);
                    var5['gradientColors'] = var6;
                    var1['extra'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var17)(var1, var3);
            var3 = var16.length;
            var1 = 2;
            var3 = var3 < var1;
            var1 = null;
            if(var3) { _fun0009_ip = 65; continue _fun0009 }
case 66:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 9;
            var2 = var17[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['colors'] = var16;
            var2['locations'] = var15;
            var2['start'] = var14;
            var2['end'] = var6;
            if(!var11) { _fun0009_ip = 67; continue _fun0009 }
case 68:
            var6 = {};
            var6['width'] = var13;
            var11 = var6;
case 67:
            var6 = new Array(5);
            var6[0] = var11;
            if(!var10) { _fun0009_ip = 69; continue _fun0009 }
case 70:
            var11 = {};
            var11['height'] = var12;
            var10 = var11;
case 69:
            var6[1] = var10;
            var10 = var9.linearGradient;
            var6[2] = var10;
            if(!var8) { _fun0009_ip = 71; continue _fun0009 }
case 72:
            var8 = var9.absolute;
case 71:
            var6[3] = var8;
            var6[4] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 65:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function wrapWithOverlayIfNeeded(arg1, arg2, arg3, arg4, arg5) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var7 = arg1;
            var10 = arg3;
            var2 = arg2;
            var1 = var7;
            if(!var2) { _fun0013_ip = 73; continue _fun0013 }
case 58:
            var5 = _closure1_slot7;
            var4 = _closure1_slot4;
            var3 = {};
            var6 = var10.absolute;
            var3['style'] = var6;
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot6;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var10.softenGradient;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 7;
            var12 = var12[var2];
            var2 = undefined;
            var15 = var13.bind(var2)(var12);
            var14 = var15.hexWithOpacity;
            var13 = arg4;
            var12 = arg5;
            var12 = var14.bind(var15)(var13, var12);
            var11['backgroundColor'] = var12;
            var10[1] = var11;
            var7['style'] = var10;
            var7 = var9.bind(var2)(var8, var7);
            var6[1] = var7;
            var3['children'] = var6;
            var1 = var5.bind(var2)(var4, var3);
case 73:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function useThemedGradientCommon() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = _closure1_slot8;
            var5 = undefined;
            var2 = var1.bind(var5)();
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var6 = var1.bind(var5)();
            var1 = {};
            var1['styles'] = var2;
            var4 = _closure1_slot0;
            var2 = 5;
            var2 = var7[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.isThemeDark;
            var2 = var2.bind(var4)(var6);
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.unsafe_rawColors;
            if(var2) { _fun0014_ip = 74; continue _fun0014 }
case 75:
            var2 = var3.WHITE;
            _fun0014_ip = 47; continue _fun0014;
case 74:
            var2 = var3.BLACK;
case 47:
            var1['overlayColor'] = var2;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function ActiveGuildThemeGradient(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var2 = var4.activeGuildTheme;
            var6 = var4.theme;
            var8 = null;
            var3 = Object.create(var8);
            var11 = 0;
            var3['activeGuildTheme'] = var11;
            var3['theme'] = var11;
            var16 = {};
            var15 = var4;
            var14 = var3;
            var1 = copyDataProperties(var16, var15, var14);
            var4 = var2.type;
            var3 = 'custom';
            if(!(var3 !== var4)) { _fun0015_ip = 76; continue _fun0015 }
case 77:
            var7 = _closure1_slot6;
            var5 = _closure1_slot17;
            var4 = {};
            var16 = var4;
            var15 = var1;
            var3 = copyDataProperties(var16, var15);
            var9 = var2.preset;
            var3 = 'preset';
            var4[2] = var9;
            var3 = undefined;
            var3 = var7.bind(var3)(var5, var4);
            return var3;
case 76:
            var7 = var2.customUserThemeSettings;
            var2 = var7.colors;
            var13 = var2[var11];
            var4 = _closure1_slot6;
            var3 = _closure1_slot19;
            var2 = {};
            var16 = var2;
            var15 = var1;
            var1 = copyDataProperties(var16, var15);
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 12;
            var10 = var1[var9];
            var1 = undefined;
            var12 = var12.bind(var1)(var10);
            var10 = var12.getSingleColorGuildThemeGradientColors;
            var15 = var10.bind(var12)(var13, var6);
            var12 = new Array(0);
            var16 = var12;
            var14 = 0;
            var10 = arraySpread(var16, var15, var14);
            var10 = 'colors';
            var2[9] = var12;
            var12 = new Array(0);
            var10 = 'gradientColorStops';
            var2[9] = var12;
            var10 = var7.gradientAngle;
            var12 = var8 != var10;
            var11 = 0;
            if(!var12) { _fun0015_ip = 78; continue _fun0015 }
case 79:
            var11 = var10;
case 78:
            var10 = 'gradientAngle';
            var2[9] = var11;
            var7 = var7.baseMix;
            if(!(var8 == var7)) { _fun0015_ip = 80; continue _fun0015 }
case 81:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var5 = var8.bind(var1)(var5);
            var7 = var5.GUILD_THEME_DEFAULT_BASE_MIX;
case 80:
            var5 = 'baseMix';
            var2[4] = var7;
            var5 = 'theme';
            var2[4] = var6;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var10 = var8[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot3 = var6;
    var12 = 1;
    var6 = var8[var12];
    var6 = var7.bind(var1)(var6);
    var6 = var6.View;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot6 = var9;
    var6 = var6.jsxs;
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {};
    var11['flex'] = var12;
    var6['softenGradient'] = var11;
    var11 = {};
    var11['flex'] = var12;
    var6['linearGradient'] = var11;
    var11 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
    var6['absolute'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot8 = var6;
    var6 = 0.5;
    var9 = {'x': 0.5, 'y': 0.5};
    var _closure1_slot9 = var9;
    var _closure1_slot10 = var6;
    var6 = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
    var _closure1_slot11 = var6;
    var6 = 20;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/client_themes/native/ThemedGradient.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function _default(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var7 = var4.overlayOpacity;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0016_ip = 82; continue _fun0016 }
case 3:
            var7 = 0.7;
case 82:
            var10 = var4.gradientOverride;
            var2 = null;
            var3 = Object.create(var2);
            var1 = 0;
            var3['overlayOpacity'] = var1;
            var3['gradientOverride'] = var1;
            var23 = {};
            var22 = var4;
            var21 = var3;
            var11 = copyDataProperties(var23, var22, var21);
            var3 = _closure1_slot21;
            var3 = var3.bind(var6)();
            var5 = var3.styles;
            var4 = var3.overlayColor;
            var3 = var11.withOverlay;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 10;
            var8 = var12[var8];
            var8 = var13.bind(var6)(var8);
            var15 = var8.bind(var6)();
            var9 = _closure1_slot0;
            var8 = 16;
            var8 = var12[var8];
            var17 = var9.bind(var6)(var8);
            var16 = var17.useStateFromStoresObject;
            var8 = _closure1_slot5;
            var14 = new Array(1);
            var14[0] = var8;
            var8 = function() {
                var1 = {};
                var2 = _closure1_slot5;
                var2 = var2.gradientPreset;
                var1['preset'] = var2;
                return var1;
            };
            var8 = var16.bind(var17)(var14, var8);
            var18 = var8.preset;
            var8 = 17;
            var8 = var12[var8];
            var8 = var13.bind(var6)(var8);
            var16 = var8.bind(var6)();
            var8 = 18;
            var8 = var12[var8];
            var9 = var9.bind(var6)(var8);
            var8 = var9.useCustomThemeDisplaySettings;
            var14 = var8.bind(var9)();
            var8 = var6 !== var14;
            if(!(var2 != var10)) { _fun0016_ip = 83; continue _fun0016 }
case 84:
            if(!var8) { _fun0016_ip = 85; continue _fun0016 }
case 86:
            var12 = var10.type;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 19;
            var9 = var17[var9];
            var9 = var13.bind(var6)(var9);
            var9 = var9.ClientThemeType;
            var9 = var9.CUSTOM_BACKGROUND_GRADIENT;
            if(!(var12 !== var9)) { _fun0016_ip = 87; continue _fun0016 }
case 85:
            var12 = var10.type;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 19;
            var9 = var17[var9];
            var9 = var13.bind(var6)(var9);
            var9 = var9.ClientThemeType;
            var9 = var9.BACKGROUND_GRADIENT_PRESET;
            if(!(var12 !== var9)) { _fun0016_ip = 88; continue _fun0016 }
case 83:
            if(!(var2 == var16)) { _fun0016_ip = 89; continue _fun0016 }
case 90:
            if(!var8) { _fun0016_ip = 91; continue _fun0016 }
case 92:
            if(var8) { _fun0016_ip = 93; continue _fun0016 }
case 91:
            var8 = var2 != var18;
            var2 = null;
            if(!var8) { _fun0016_ip = 94; continue _fun0016 }
case 95:
            var9 = _closure1_slot20;
            var13 = _closure1_slot6;
            var12 = _closure1_slot16;
            var8 = {};
            var23 = var8;
            var22 = var11;
            var17 = copyDataProperties(var23, var22);
            var17 = 'gradient';
            var8[16] = var18;
            var23 = var13.bind(var6)(var12, var8);
            var24 = undefined;
            var22 = var3;
            var21 = var5;
            var20 = var4;
            var19 = var7;
            var2 = var24[var9](var23, var22, var21, var20, var19, var18);
case 94:
            _fun0016_ip = 96; continue _fun0016;
case 93:
            var9 = _closure1_slot20;
            var13 = _closure1_slot6;
            var12 = _closure1_slot19;
            var8 = {};
            var23 = var8;
            var22 = var11;
            var17 = copyDataProperties(var23, var22);
            var22 = var14.customTheme;
            var23 = var8;
            var17 = copyDataProperties(var23, var22);
            var17 = var14.baseTheme;
            var14 = 'theme';
            var8[13] = var17;
            var23 = var13.bind(var6)(var12, var8);
            var24 = undefined;
            var22 = var3;
            var21 = var5;
            var20 = var4;
            var19 = var7;
            var2 = var24[var9](var23, var22, var21, var20, var19, var18);
case 96:
            _fun0016_ip = 97; continue _fun0016;
case 89:
            var9 = _closure1_slot20;
            var13 = _closure1_slot6;
            var12 = _closure1_slot22;
            var8 = {};
            var23 = var8;
            var22 = var11;
            var14 = copyDataProperties(var23, var22);
            var14 = 'activeGuildTheme';
            var8[13] = var16;
            var14 = 'theme';
            var8[13] = var15;
            var23 = var13.bind(var6)(var12, var8);
            var24 = undefined;
            var22 = var3;
            var21 = var5;
            var20 = var4;
            var19 = var7;
            var2 = var24[var9](var23, var22, var21, var20, var19, var18);
case 97:
            return var2;
case 88:
            var8 = _closure1_slot20;
            var12 = _closure1_slot6;
            var9 = _closure1_slot16;
            var2 = {};
            var23 = var2;
            var22 = var11;
            var13 = copyDataProperties(var23, var22);
            var13 = 'gradient';
            var2[12] = var10;
            var23 = var12.bind(var6)(var9, var2);
            var24 = undefined;
            var22 = var3;
            var21 = var5;
            var20 = var4;
            var19 = var7;
            var2 = var24[var8](var23, var22, var21, var20, var19, var18);
            return var2;
case 87:
            var2 = _closure1_slot20;
            var9 = _closure1_slot6;
            var8 = _closure1_slot19;
            var1 = {};
            var23 = var1;
            var22 = var11;
            var11 = copyDataProperties(var23, var22);
            var22 = var10.customThemeSettings;
            var23 = var1;
            var11 = copyDataProperties(var23, var22);
            var11 = var10.theme;
            var10 = 'theme';
            var1[9] = var11;
            var23 = var9.bind(var6)(var8, var1);
            var24 = undefined;
            var22 = var3;
            var21 = var5;
            var20 = var4;
            var19 = var7;
            var1 = var24[var2](var23, var22, var21, var20, var19, var18);
            return var1;
        }
    };
    var3['default'] = var6;
    var3['Gradient'] = var5;
    var3['validateColors'] = var4;
    var2 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = arg1;
            var7 = var3.overlayOpacity;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0017_ip = 82; continue _fun0017 }
case 3:
            var7 = 0.7;
case 82:
            var10 = var3.customTheme;
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['overlayOpacity'] = var1;
            var2['customTheme'] = var1;
            var16 = {};
            var15 = var3;
            var14 = var2;
            var1 = copyDataProperties(var16, var15, var14);
            var3 = _closure1_slot21;
            var3 = var3.bind(var6)();
            var14 = var3.styles;
            var13 = var3.overlayColor;
            var3 = _closure1_slot20;
            var9 = _closure1_slot6;
            var8 = _closure1_slot19;
            var2 = {};
            var16 = var2;
            var15 = var1;
            var11 = copyDataProperties(var16, var15);
            var15 = var10.customThemeSettings;
            var16 = var2;
            var11 = copyDataProperties(var16, var15);
            var11 = var10.theme;
            var10 = 'theme';
            var2[9] = var11;
            var16 = var9.bind(var6)(var8, var2);
            var15 = var1.withOverlay;
            var17 = undefined;
            var12 = var7;
            var1 = var17[var3](var16, var15, var14, var13, var12, var11);
            return var1;
        }
    };
    var3['CustomThemedGradient'] = var2;
    return var1;
})();