// app/modules/client_themes/native/ClientThemesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var14;
    var1 = function getMixWithOpacity(arg1, arg2, arg3) {
        var4 = arg1;
        var1 = arg2;
        var7 = arg3;
        var3 = _closure1_slot12;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 8;
        var5 = var10[var2];
        var2 = undefined;
        var6 = var6.bind(var2)(var5);
        var5 = var6.mixColors;
        var9 = _closure1_slot1;
        var8 = 9;
        var11 = var10[var8];
        var14 = var9.bind(var2)(var11);
        var18 = var4.r;
        var17 = var4.g;
        var16 = var4.b;
        var11 = var14.prototype;
        var11 = Object.create(var11, {constructor: {value: var14}});
        var19 = var11;
        var15 = var7;
        var4 = new var19[var14](var18, var17, var16, var15, var14);
        var4 = var4 instanceof Object ? var4 : var11;
        var8 = var10[var8];
        var11 = var9.bind(var2)(var8);
        var18 = var1.r;
        var17 = var1.g;
        var16 = var1.b;
        var1 = 1;
        var15 = var1 - var7;
        var7 = var11.prototype;
        var7 = Object.create(var7, {constructor: {value: var11}});
        var19 = var7;
        var1 = new var19[var11](var18, var17, var16, var15, var14);
        var1 = var1 instanceof Object ? var1 : var7;
        var1 = var5.bind(var6)(var4, var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var6 = function getClientThemesGradientColorByPercentage(arg1, arg2) {
        var2 = arg1;
        var3 = _closure1_slot15;
        var4 = undefined;
        var6 = var3.bind(var4)(var2);
        var5 = var2.colors;
        var3 = var5.map;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.stop;
            return var1;
        };
        var5 = var3.bind(var5)(var2);
        var3 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 7;
        var2 = var7[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.scale;
        var3 = var2.bind(var3)(var6);
        var2 = var3.domain;
        var3 = var2.bind(var3)(var5);
        var2 = arg2;
        var3 = var3.bind(var4)(var2);
        var2 = var3.rgb;
        var3 = var2.bind(var3)();
        var2 = _closure1_slot3;
        var1 = 3;
        var3 = var2.bind(var4)(var3, var1);
        var1 = {};
        var2 = 0;
        var2 = var3[var2];
        var1['r'] = var2;
        var2 = 1;
        var2 = var3[var2];
        var1['g'] = var2;
        var2 = 2;
        var2 = var3[var2];
        var1['b'] = var2;
        return var1;
    };
    var _closure1_slot14 = var6;
    var5 = function getClientThemesGradientHexColors(arg1) {
        var1 = arg1;
        var3 = var1.colors;
        var2 = var3.map;
        var1 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.ColorDetails;
            var1 = arg1;
            var1 = var1.token;
            var1 = var2[var1];
            var1 = var1.hex;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot15 = var5;
    var1 = function getGradientAngle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.type;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.ClientThemeType;
            var1 = var1.BACKGROUND_GRADIENT_PRESET;
            if(!(var3 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.customThemeSettings;
            var1 = var1.gradientAngle;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = var2.angle;
case 4:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getGradientColorByPercentage(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var7 = var4.type;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var6 = var6[var2];
            var2 = undefined;
            var6 = var8.bind(var2)(var6);
            var6 = var6.ClientThemeType;
            var6 = var6.BACKGROUND_GRADIENT_PRESET;
            if(!(var7 !== var6)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var6 = var4.customThemeSettings;
            var8 = var6.colors;
            var _closure2_slot0 = var8;
            var7 = var8.length;
            var6 = 1;
            if(!(var6 !== var7)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var7 = var8.map;
            var5 = function(arg1, arg2) {
                var1 = _closure2_slot0;
                var2 = var1.length;
                var1 = 1;
                var2 = var2 - var1;
                var1 = arg2;
                var2 = var1 / var2;
                var1 = 100;
                var1 = var2 * var1;
                return var1;
            };
            var9 = var7.bind(var8)(var5);
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 7;
            var5 = var10[var5];
            var7 = var7.bind(var2)(var5);
            var5 = var7.scale;
            var7 = var5.bind(var7)(var8);
            var5 = var7.domain;
            var5 = var5.bind(var7)(var9);
            var7 = var5.bind(var2)(var3);
            var5 = var7.rgb;
            var9 = var5.bind(var7)();
            var7 = _closure1_slot3;
            var5 = 3;
            var7 = var7.bind(var2)(var9, var5);
            var5 = {};
            var9 = 0;
            var9 = var7[var9];
            var5['r'] = var9;
            var6 = var7[var6];
            var5['g'] = var6;
            var6 = 2;
            var6 = var7[var6];
            var5['b'] = var6;
            return var5;
case 7:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 8;
            var5 = var7[var5];
            var7 = var6.bind(var2)(var5);
            var6 = var7.hexToRgb;
            var5 = 0;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            return var5;
case 5:
            var1 = _closure1_slot14;
            var1 = var1.bind(var2)(var4, var3);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function getBottomColorWithOpacity(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot13;
            var2 = _closure1_slot17;
            var1 = _closure1_slot16;
            var4 = undefined;
            var7 = var1.bind(var4)(var3);
            var1 = _closure1_slot8;
            if(!(!(var7 > var1))) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var1 = _closure1_slot11;
            var1 = var1.START;
            _fun0003_ip = 11; continue _fun0003;
case 9:
            var6 = _closure1_slot11;
            var1 = var6.END;
case 11:
            var3 = var2.bind(var4)(var3, var1);
            var2 = arg2;
            var1 = arg3;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getTopColorWithOpacity(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot13;
            var2 = _closure1_slot17;
            var1 = _closure1_slot16;
            var4 = undefined;
            var7 = var1.bind(var4)(var3);
            var1 = _closure1_slot8;
            if(!(!(var7 > var1))) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var1 = _closure1_slot11;
            var1 = var1.END;
            _fun0004_ip = 11; continue _fun0004;
case 9:
            var6 = _closure1_slot11;
            var1 = var6.START;
case 11:
            var3 = var2.bind(var4)(var3, var1);
            var2 = arg2;
            var1 = arg3;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function calculateGradientValueWithOpacity(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg1;
            var4 = arg2;
            var11 = arg3;
            var1 = arg4;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = 12;
            var2 = var2[var12];
            var6 = undefined;
            var5 = var5.bind(var6)(var2);
            var2 = var5.isThemeDark;
            var5 = var2.bind(var5)(var11);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var9 = var8.bind(var6)(var2);
            var8 = var9.hexToRgb;
            var2 = _closure1_slot10;
            if(var5) { _fun0005_ip = 12; continue _fun0005 }
case 13:
            var5 = var2.LIGHT;
            var5 = var8.bind(var9)(var5);
            _fun0005_ip = 14; continue _fun0005;
case 12:
            var2 = var2.DARK;
            var5 = var8.bind(var9)(var2);
case 14:
            var8 = var7.type;
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var13 = 11;
            var2 = var2[var13];
            var2 = var9.bind(var6)(var2);
            var2 = var2.ClientThemeType;
            var2 = var2.BACKGROUND_GRADIENT_PRESET;
            if(!(var8 === var2)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var9 = var7.midpointPercentage;
            var2 = null;
            if(!(var2 == var9)) { _fun0005_ip = 17; continue _fun0005 }
case 15:
            var2 = _closure1_slot11;
            var9 = var2.MID;
case 17:
            var2 = null;
            if(!(var2 != var4)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var9 = var4;
case 18:
            var8 = var7.type;
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var10.bind(var6)(var4);
            var4 = var4.ClientThemeType;
            var4 = var4.CUSTOM_BACKGROUND_GRADIENT;
            if(!(var8 !== var4)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var4 = var1;
            if(!(var2 == var1)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var10 = var10.bind(var6)(var8);
            var8 = var10.isThemeDark;
            var8 = var8.bind(var10)(var11);
            var10 = _closure1_slot9;
            if(var8) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var8 = var10.LEVEL_4;
            _fun0005_ip = 26; continue _fun0005;
case 24:
            var8 = var10.LEVEL_2;
case 26:
            var4 = var8;
case 22:
            _fun0005_ip = 27; continue _fun0005;
case 20:
            var8 = var7.customThemeSettings;
            var10 = var8.baseMix;
            var8 = 100;
            var10 = var10 / var8;
            if(!(var2 == var1)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var12];
            var8 = var8.bind(var6)(var2);
            var2 = var8.isThemeDark;
            var2 = var2.bind(var8)(var11);
            var8 = 0.2;
            var10 = var8 * var10;
            if(var2) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var2 = 0.3;
            var2 = var2 + var10;
            _fun0005_ip = 32; continue _fun0005;
case 30:
            var8 = 0.12;
            var2 = var8 + var10;
case 32:
            var1 = var2;
case 28:
            var4 = var1;
case 27:
            var1 = _closure1_slot16;
            var8 = var1.bind(var6)(var7);
            var1 = _closure1_slot11;
            var1 = var1.START;
            if(!(var9 !== var1)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var1 = _closure1_slot11;
            var1 = var1.END;
            if(!(var9 !== var1)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var2 = _closure1_slot13;
            var1 = _closure1_slot17;
            var1 = var1.bind(var6)(var7, var9);
            var1 = var2.bind(var6)(var1, var5, var4);
            _fun0005_ip = 37; continue _fun0005;
case 35:
            var2 = _closure1_slot8;
            if(!(!(var8 > var2))) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var2 = _closure1_slot19;
            var2 = var2.bind(var6)(var7, var5, var4);
            _fun0005_ip = 40; continue _fun0005;
case 38:
            var9 = _closure1_slot18;
            var2 = var9.bind(var6)(var7, var5, var4);
case 40:
            var1 = var2;
case 37:
            _fun0005_ip = 41; continue _fun0005;
case 33:
            var2 = _closure1_slot8;
            if(!(!(var8 < var2))) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var2 = _closure1_slot19;
            var2 = var2.bind(var6)(var7, var5, var4);
            _fun0005_ip = 44; continue _fun0005;
case 42:
            var3 = _closure1_slot18;
            var2 = var3.bind(var6)(var7, var5, var4);
case 44:
            var1 = var2;
case 41:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var4 = function getGradientValue(arg1, arg2) {
        var5 = arg1;
        var4 = _closure1_slot20;
        var3 = var5.theme;
        var2 = undefined;
        var1 = arg2;
        var1 = var4.bind(var2)(var5, var1, var3);
        return var1;
    };
    var _closure1_slot21 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var12 = 0;
    var7 = var14[var12];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var9 = var14[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var9);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var14[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var14[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var14[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var14[var7];
    var7 = var13.bind(var1)(var7);
    var7 = var7.Color;
    var11 = 128;
    var _closure1_slot8 = var11;
    var10 = {};
    var9 = 0.9;
    var10['LEVEL_9'] = var9;
    var8 = 'LEVEL_9';
    var10[var9] = var8;
    var9 = 0.85;
    var10['LEVEL_85'] = var9;
    var8 = 'LEVEL_85';
    var10[var9] = var8;
    var9 = 0.8;
    var10['LEVEL_8'] = var9;
    var8 = 'LEVEL_8';
    var10[var9] = var8;
    var9 = 0.75;
    var10['LEVEL_75'] = var9;
    var8 = 'LEVEL_75';
    var10[var9] = var8;
    var9 = 0.7;
    var10['LEVEL_7'] = var9;
    var8 = 'LEVEL_7';
    var10[var9] = var8;
    var9 = 0.6;
    var10['LEVEL_6'] = var9;
    var8 = 'LEVEL_6';
    var10[var9] = var8;
    var9 = 0.5;
    var10['LEVEL_5'] = var9;
    var8 = 'LEVEL_5';
    var10[var9] = var8;
    var9 = 0.4;
    var10['LEVEL_4'] = var9;
    var8 = 'LEVEL_4';
    var10[var9] = var8;
    var9 = 0.35;
    var10['LEVEL_35'] = var9;
    var8 = 'LEVEL_35';
    var10[var9] = var8;
    var9 = 0.3;
    var10['LEVEL_3'] = var9;
    var8 = 'LEVEL_3';
    var10[var9] = var8;
    var9 = 0.25;
    var10['LEVEL_25'] = var9;
    var8 = 'LEVEL_25';
    var10[var9] = var8;
    var9 = 0.2;
    var10['LEVEL_2'] = var9;
    var8 = 'LEVEL_2';
    var10[var9] = var8;
    var9 = 0.15;
    var10['LEVEL_15'] = var9;
    var8 = 'LEVEL_15';
    var10[var9] = var8;
    var9 = 0.1;
    var10['LEVEL_1'] = var9;
    var8 = 'LEVEL_1';
    var10[var9] = var8;
    var _closure1_slot9 = var10;
    var9 = {};
    var8 = 6;
    var15 = var14[var8];
    var17 = var13.bind(var1)(var15);
    var16 = var17.getColor;
    var15 = var7.BLACK_500;
    var15 = var16.bind(var17)(var15);
    var9['DARK'] = var15;
    var8 = var14[var8];
    var15 = var13.bind(var1)(var8);
    var8 = var15.getColor;
    var7 = var7.WHITE_500;
    var7 = var8.bind(var15)(var7);
    var9['LIGHT'] = var7;
    var _closure1_slot10 = var9;
    var8 = {};
    var8['START'] = var12;
    var7 = 'START';
    var8[var12] = var7;
    var12 = 50;
    var8['MID'] = var12;
    var7 = 'MID';
    var8[var12] = var7;
    var12 = 100;
    var8['END'] = var12;
    var7 = 'END';
    var8[var12] = var7;
    var _closure1_slot11 = var8;
    var7 = function colorToHex(arg1) {
        var1 = arg1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.rgb;
        var3 = var1.red;
        var2 = var1.green;
        var1 = var1.blue;
        var3 = var4.bind(var5)(var3, var2, var1);
        var2 = var3.hex;
        var1 = 'rgb';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot12 = var7;
    var12 = 16;
    var12 = var14[var12];
    var14 = var13.bind(var1)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/client_themes/native/ClientThemesUtils.tsx';
    var12 = var13.bind(var14)(var12);
    var3['GRADIENT_ANGLE_BREAKPOINT'] = var11;
    var3['OverlayOpacity'] = var10;
    var3['OverlayColors'] = var9;
    var3['GradientPercentage'] = var8;
    var3['colorToHex'] = var7;
    var3['getClientThemesGradientColorByPercentage'] = var6;
    var3['getClientThemesGradientHexColors'] = var5;
    var5 = function getGradientThemeMetadata(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var9 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            if(!(var1 != var9)) { _fun0006_ip = 45; continue _fun0006 }
case 47:
            var5 = _closure1_slot21;
            var4 = _closure1_slot11;
            var4 = var4.START;
            var14 = undefined;
            var8 = var5.bind(var14)(var9, var4);
            var4 = _closure1_slot11;
            var4 = var4.MID;
            var7 = var5.bind(var14)(var9, var4);
            var4 = _closure1_slot11;
            var4 = var4.END;
            var6 = var5.bind(var14)(var9, var4);
            var5 = var9.type;
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var13 = 11;
            var4 = var4[var13];
            var4 = var10.bind(var14)(var4);
            var4 = var4.ClientThemeType;
            var4 = var4.BACKGROUND_GRADIENT_PRESET;
            if(!(var5 !== var4)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var4 = var9.customThemeSettings;
            var10 = var4.colors;
            _fun0006_ip = 50; continue _fun0006;
case 48:
            var4 = _closure1_slot15;
            var10 = var4.bind(var14)(var9);
case 50:
            var20 = 0;
            var5 = var10[var20];
            var11 = var10.length;
            var4 = 1;
            var4 = var11 - var4;
            var4 = var10[var4];
            var11 = var9.type;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var13];
            var10 = var12.bind(var14)(var10);
            var10 = var10.ClientThemeType;
            var10 = var10.CUSTOM_BACKGROUND_GRADIENT;
            if(!(var11 === var10)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var9 = var9.customThemeSettings;
            var15 = var9.colors;
            var10 = var15.map;
            var9 = function(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = var2.luminance;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var10.bind(var15)(var9);
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var10 = 7;
            var2 = var18[var10];
            var11 = var16.bind(var14)(var2);
            var12 = var17.indexOf;
            var9 = global;
            var19 = var9.Math;
            var13 = var19.min;
            var2 = new Array(0);
            var24 = var2;
            var23 = var17;
            var22 = 0;
            var21 = arraySpread(var24, var23, var22);
            var24 = var13;
            var23 = var2;
            var22 = var19;
            var2 = apply(var24, var23, var22);
            var2 = var12.bind(var17)(var2);
            var2 = var15[var2];
            var12 = var11.bind(var14)(var2);
            var2 = var12.set;
            var13 = 'hsl.s';
            var11 = 0.2;
            var21 = var2.bind(var12)(var13, var11);
            var19 = var21.set;
            var12 = 'hsl.l';
            var2 = 0.7;
            var19 = var19.bind(var21)(var12, var2);
            var2 = var19.hex;
            var2 = var2.bind(var19)();
            var10 = var18[var10];
            var10 = var16.bind(var14)(var10);
            var16 = var17.indexOf;
            var19 = var9.Math;
            var18 = var19.max;
            var9 = new Array(0);
            var24 = var9;
            var23 = var17;
            var22 = 0;
            var20 = arraySpread(var24, var23, var22);
            var24 = var18;
            var23 = var9;
            var22 = var19;
            var9 = apply(var24, var23, var22);
            var9 = var16.bind(var17)(var9);
            var9 = var15[var9];
            var10 = var10.bind(var14)(var9);
            var9 = var10.set;
            var11 = var9.bind(var10)(var13, var11);
            var10 = var11.set;
            var9 = 0.9;
            var10 = var10.bind(var11)(var12, var9);
            var9 = var10.hex;
            var10 = var9.bind(var10)();
            var9 = 'dark';
            var11 = var9 === var3;
            var9 = var10;
            if(!var11) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var9 = var2;
case 53:
            if(!var11) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var2 = var10;
case 55:
            var4 = var2;
            var5 = var9;
case 51:
            var2 = {};
            var2['theme'] = var3;
            var3 = {};
            var3['gradient.start'] = var8;
            var3['gradient.mid'] = var7;
            var3['gradient.end'] = var6;
            var3['gradient.primary'] = var5;
            var3['gradient.secondary'] = var4;
            var2['colors'] = var3;
            return var2;
case 45:
            return var1;
        }
    };
    var3['getGradientThemeMetadata'] = var5;
    var3['getGradientValue'] = var4;
    var4 = function useGradientValue(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var8;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 13;
            var3 = var5[var3];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var9 = var3.bind(var7)();
            var _closure2_slot2 = var9;
            var3 = 14;
            var3 = var5[var3];
            var3 = var4.bind(var7)(var3);
            var5 = var3.bind(var7)();
            var _closure2_slot3 = var5;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(5);
            var2[0] = var9;
            var9 = null;
            var11 = var9 == var8;
            var10 = undefined;
            if(var11) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var10 = var8.dark;
case 57:
            var2[1] = var10;
            var9 = var9 == var8;
            var7 = undefined;
            if(var9) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var7 = var8.light;
case 59:
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var5;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var3 = _closure2_slot1;
                    var4 = var1 == var3;
                    var7 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                    var4 = _closure2_slot1;
                    var3 = var4.dark;
case 63:
                    if(!(var1 == var3)) { _fun0008_ip = 65; continue _fun0008 }
case 9:
                    var3 = _closure2_slot1;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                    var4 = _closure2_slot1;
                    var3 = var4.light;
case 66:
                    if(!(var1 == var3)) { _fun0008_ip = 65; continue _fun0008 }
case 68:
                    var6 = _closure1_slot20;
                    var5 = _closure2_slot2;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot3;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    return var3;
case 65:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var8 = 12;
                    var4 = var4[var8];
                    var6 = var5.bind(var7)(var4);
                    var5 = var6.isThemeDark;
                    var4 = _closure2_slot3;
                    var5 = var5.bind(var6)(var4);
                    var4 = _closure1_slot9;
                    if(var5) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                    var6 = var4.LEVEL_4;
                    _fun0008_ip = 71; continue _fun0008;
case 69:
                    var6 = var4.LEVEL_2;
case 71:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var8 = var5.bind(var7)(var4);
                    var5 = var8.isThemeDark;
                    var4 = _closure2_slot3;
                    var4 = var5.bind(var8)(var4);
                    var5 = _closure2_slot1;
                    var5 = var1 == var5;
                    if(var4) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                    var8 = undefined;
                    if(var5) { _fun0008_ip = 74; continue _fun0008 }
case 75:
                    var4 = _closure2_slot1;
                    var8 = var4.light;
case 74:
                    _fun0008_ip = 76; continue _fun0008;
case 72:
                    var4 = undefined;
                    if(var5) { _fun0008_ip = 77; continue _fun0008 }
case 78:
                    var5 = _closure2_slot1;
                    var4 = var5.dark;
case 77:
                    var8 = var4;
case 76:
                    var5 = _closure1_slot20;
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot3;
                    if(!(var1 != var8)) { _fun0008_ip = 79; continue _fun0008 }
case 25:
                    var6 = var8;
case 79:
                    var14 = undefined;
                    var13 = var4;
                    var12 = var3;
                    var11 = var2;
                    var10 = var6;
                    var2 = var14[var5](var13, var12, var11, var10, var9);
                    return var2;
case 61:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useGradientValue'] = var4;
    var2 = function getEmbedBackground() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.isCustomThemeMobileRenderingEnabled;
            var2 = 'getEmbedBackground';
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot7;
            var3 = var4.hasCustomTheme;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0009_ip = 80; continue _fun0009 }
case 6:
            var3 = var2;
case 80:
            var2 = _closure1_slot6;
            var4 = var2.gradientPreset;
            var2 = null;
            if(!(var2 == var4)) { _fun0009_ip = 13; continue _fun0009 }
case 81:
            if(var3) { _fun0009_ip = 13; continue _fun0009 }
case 82:
            return var2;
case 13:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.isThemeDark;
            var2 = _closure1_slot5;
            var2 = var2.theme;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot10;
            if(var3) { _fun0009_ip = 83; continue _fun0009 }
case 84:
            var4 = var2.LIGHT;
            _fun0009_ip = 85; continue _fun0009;
case 83:
            var4 = var2.DARK;
case 85:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.hexWithOpacity;
            var1 = _closure1_slot9;
            var1 = var1.LEVEL_1;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['getEmbedBackground'] = var2;
    return var1;
})();