// app/modules/client_themes/native/ThemedGradient.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var8;
    var1 = function CustomThemesGradient(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var18 = var2.colors;
            var3 = var2.baseMix;
            var4 = var2.gradientAngle;
            var8 = var2.absolute;
            var11 = var2.wide;
            var10 = var2.tall;
            var17 = var2.mix;
            var16 = var2.mixAmount;
            var5 = undefined;
            if(!(var16 === var5)) { _fun0001_ip = 60; continue _fun0001 }
 58:
            var16 = {};
 60:
            var15 = var2.mixColorOverride;
            var7 = var2.componentStyles;
            var14 = var2.theme;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var6 = _closure1_slot9;
            var9 = var6.bind(var5)();
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 6;
            var6 = var13[var6];
            var6 = var12.bind(var5)(var6);
            var6 = var6.bind(var5)();
            var13 = var6.width;
            var12 = var6.height;
            var6 = {};
            var6['colors'] = var18;
            var6['mix'] = var17;
            var6['mixAmount'] = var16;
            var6['mixColorOverride'] = var15;
            var6['theme'] = var14;
            var6['baseMix'] = var3;
            var3 = function getGradientColorsForCustomThemesGradient(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var3 = var4.colors;
                    var2 = var4.baseMix;
                    var _closure3_slot0 = var2;
                    var2 = var4.mix;
                    var5 = var4.mixAmount;
                    var6 = undefined;
                    if(!(var5 === var6)) { _fun0002_ip = 40; continue _fun0002 }
 38:
                    var5 = {};
 40:
                    var _closure3_slot1 = var5;
                    var5 = var4.mixColorOverride;
                    var _closure3_slot2 = var5;
                    var4 = var4.theme;
                    var _closure3_slot3 = var4;
                    var4 = var3;
                    if(!var2) { _fun0002_ip = 87; continue _fun0002 }
 70:
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = _closure3_slot2;
                            var6 = null;
                            if(!(var6 == var1)) { _fun0003_ip = 285; continue _fun0003 }
 16:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var7 = var4.bind(var2)(var3);
                            var4 = var7.isThemeDark;
                            var3 = _closure3_slot3;
                            var3 = var4.bind(var7)(var3);
                            var4 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var1 = 9;
                            var1 = var7[var1];
                            var4 = var4.bind(var2)(var1);
                            var1 = _closure3_slot1;
                            var1 = var6 == var1;
                            if(var3) { _fun0003_ip = 189; continue _fun0003 }
 87:
                            var8 = undefined;
                            if(var1) { _fun0003_ip = 102; continue _fun0003 }
 92:
                            var3 = _closure3_slot1;
                            var8 = var3.light;
 102:
                            if(!(var6 == var8)) { _fun0003_ip = 152; continue _fun0003 }
 106:
                            var7 = _closure3_slot0;
                            var3 = 100;
                            var10 = var7 / var3;
                            var7 = 0.5;
                            var9 = 0.2;
                            var3 = 1;
                            var3 = var3 - var10;
                            var3 = var9 * var3;
                            var8 = var7 + var3;
 152:
                            var3 = var4.prototype;
                            var7 = Object.create(var3, {constructor: {value: var4}});
                            var3 = 255;
                            var18 = var7;
                            var17 = var3;
                            var16 = var3;
                            var15 = var3;
                            var14 = var8;
                            var3 = new var18[var4](var17, var16, var15, var14, var13);
                            var7 = var3 instanceof Object ? var3 : var7;
                            _fun0003_ip = 283; continue _fun0003;
 189:
                            var3 = undefined;
                            if(var1) { _fun0003_ip = 204; continue _fun0003 }
 194:
                            var1 = _closure3_slot1;
                            var3 = var1.dark;
 204:
                            if(!(var6 == var3)) { _fun0003_ip = 254; continue _fun0003 }
 208:
                            var2 = _closure3_slot0;
                            var1 = 100;
                            var9 = var2 / var1;
                            var2 = 0.5;
                            var8 = 0.25;
                            var1 = 1;
                            var1 = var1 - var9;
                            var1 = var8 * var1;
                            var3 = var2 + var1;
 254:
                            var1 = var4.prototype;
                            var2 = Object.create(var1, {constructor: {value: var4}});
                            var18 = var2;
                            var17 = 0;
                            var16 = 0;
                            var15 = 0;
                            var14 = var3;
                            var1 = new var18[var4](var17, var16, var15, var14, var13);
                            var7 = var1 instanceof Object ? var1 : var2;
 283:
                            _fun0003_ip = 289; continue _fun0003;
 285:
                            var7 = _closure3_slot2;
 289:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 10;
                            var2 = var9[var3];
                            var4 = undefined;
                            var11 = var8.bind(var4)(var2);
                            var10 = var11.hexToRgb;
                            var2 = arg1;
                            var2 = var10.bind(var11)(var2);
                            var12 = var2.r;
                            var11 = var2.g;
                            var10 = var2.b;
                            var2 = 8;
                            var2 = var9[var2];
                            var9 = var8.bind(var4)(var2);
                            var8 = var9.isThemeDark;
                            var2 = _closure3_slot3;
                            var2 = var8.bind(var9)(var2);
                            var8 = _closure3_slot1;
                            var8 = var6 == var8;
                            if(var2) { _fun0003_ip = 433; continue _fun0003 }
 382:
                            var2 = undefined;
                            if(var8) { _fun0003_ip = 397; continue _fun0003 }
 387:
                            var9 = _closure3_slot1;
                            var2 = var9.light;
 397:
                            var2 = var6 != var2;
                            var9 = 0.5;
                            if(!var2) { _fun0003_ip = 431; continue _fun0003 }
 414:
                            var2 = _closure3_slot1;
                            var13 = var2.light;
                            var2 = 1;
                            var9 = var2 - var13;
 431:
                            _fun0003_ip = 485; continue _fun0003;
 433:
                            var2 = undefined;
                            if(var8) { _fun0003_ip = 448; continue _fun0003 }
 438:
                            var8 = _closure3_slot1;
                            var2 = var8.dark;
 448:
                            var6 = var6 != var2;
                            var2 = 0.5;
                            if(!var6) { _fun0003_ip = 482; continue _fun0003 }
 465:
                            var5 = _closure3_slot1;
                            var6 = var5.dark;
                            var5 = 1;
                            var2 = var5 - var6;
 482:
                            var9 = var2;
 485:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = var5[var3];
                            var6 = var2.bind(var4)(var3);
                            var3 = var6.mixColors;
                            var8 = _closure1_slot1;
                            var1 = 9;
                            var1 = var5[var1];
                            var1 = var8.bind(var4)(var1);
                            var8 = var1.prototype;
                            var8 = Object.create(var8, {constructor: {value: var1}});
                            var18 = var8;
                            var17 = var12;
                            var16 = var11;
                            var15 = var10;
                            var14 = var9;
                            var1 = new var18[var1](var17, var16, var15, var14, var13);
                            var1 = var1 instanceof Object ? var1 : var8;
                            var3 = var3.bind(var6)(var7, var1);
                            var1 = 13;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.colorToHex;
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        }
                    };
                    var4 = var2.bind(var3)(var1);
 87:
                    var3 = var4.length;
                    var2 = 1;
                    var1 = var4;
                    if(!(var2 === var3)) { _fun0002_ip = 127; continue _fun0002 }
 102:
                    var3 = 0;
                    var5 = var4[var3];
                    var2 = new Array(2);
                    var2[0] = var5;
                    var3 = var4[var3];
                    var2[1] = var3;
                    var1 = var2;
 127:
                    return var1;
                }
            };
            var18 = var3.bind(var5)(var6);
            _closure2_slot0 = var18;
            var3 = 90;
            var6 = var4 - var3;
            var3 = global;
            var4 = var3.Math;
            var4 = var4.PI;
            var6 = var6 * var4;
            var4 = 180;
            var6 = var6 / var4;
            var14 = var3.Math;
            var4 = var14.cos;
            var16 = var4.bind(var14)(var6);
            var4 = var3.Math;
            var3 = var4.sin;
            var15 = var3.bind(var4)(var6);
            var3 = {};
            var4 = {};
            var6 = 0.7142857142857143;
            var14 = var6 * var16;
            var17 = 0.6;
            var14 = var17 - var14;
            var4['x'] = var14;
            var19 = var6 * var15;
            var14 = 0.5;
            var19 = var14 - var19;
            var4['y'] = var19;
            var3['start'] = var4;
            var4 = {};
            var16 = var6 * var16;
            var16 = var17 + var16;
            var4['x'] = var16;
            var6 = var6 * var15;
            var6 = var14 + var6;
            var4['y'] = var6;
            var3['end'] = var4;
            var14 = var3.start;
            var6 = var3.end;
            var3 = _closure1_slot11;
            var16 = var3.bind(var5)(var18);
            _closure2_slot1 = var16;
            var3 = function getGradientLocationsForCustomThemesGradient(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var4 = var3.length;
                    var2 = 1;
                    if(!(var2 !== var4)) { _fun0004_ip = 40; continue _fun0004 }
 21:
                    var2 = var3.map;
                    var1 = function(arg1, arg2) {
                        var1 = _closure3_slot0;
                        var2 = var1.length;
                        var1 = 1;
                        var2 = var2 - var1;
                        var1 = arg2;
                        var1 = var1 / var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0004_ip = 50; continue _fun0004;
 40:
                    var1 = [0, 1];
 50:
                    return var1;
                }
            };
            var15 = var3.bind(var5)(var16);
            var17 = _closure1_slot3;
            var4 = var17.useEffect;
            var3 = new Array(2);
            var3[0] = var16;
            var3[1] = var18;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = var1.length;
                    var1 = 2;
                    if(!(var2 < var1)) { _fun0005_ip = 125; continue _fun0005 }
 19:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
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
 125:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var17)(var1, var3);
            var3 = var16.length;
            var1 = 2;
            var3 = var3 < var1;
            var1 = null;
            if(var3) { _fun0001_ip = 538; continue _fun0001 }
 422:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 12;
            var2 = var17[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['colors'] = var16;
            var2['locations'] = var15;
            var2['start'] = var14;
            var2['end'] = var6;
            if(!var11) { _fun0001_ip = 477; continue _fun0001 }
 468:
            var6 = {};
            var6['width'] = var13;
            var11 = var6;
 477:
            var6 = new Array(5);
            var6[0] = var11;
            if(!var10) { _fun0001_ip = 497; continue _fun0001 }
 488:
            var11 = {};
            var11['height'] = var12;
            var10 = var11;
 497:
            var6[1] = var10;
            var10 = var9.linearGradient;
            var6[2] = var10;
            if(!var8) { _fun0001_ip = 520; continue _fun0001 }
 514:
            var8 = var9.absolute;
 520:
            var6[3] = var8;
            var6[4] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 538:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var2);
    var1 = 0;
    var6 = var8[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var6);
    var _closure1_slot3 = var2;
    var10 = 1;
    var2 = var8[var10];
    var2 = var7.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.Color;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot7 = var4;
    var2 = var2.jsxs;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var8[var2];
    var6 = var7.bind(var1)(var2);
    var4 = var6.createStyles;
    var2 = {};
    var9 = {};
    var9['flex'] = var10;
    var2['softenGradient'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var2['linearGradient'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
    var2['absolute'] = var9;
    var2 = var4.bind(var6)(var2);
    var _closure1_slot9 = var2;
    var4 = function Gradient(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var5 = var1.gradient;
            var7 = var1.absolute;
            var10 = var1.wide;
            var9 = var1.tall;
            var14 = var1.angleOverride;
            var6 = var1.componentStyles;
            var2 = var1.mix;
            var _closure2_slot0 = var2;
            var2 = var1.mixAmount;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0006_ip = 67; continue _fun0006 }
 65:
            var2 = {};
 67:
            var _closure2_slot1 = var2;
            var1 = var1.mixColorOverride;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot9;
            var8 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 6;
            var3 = var16[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var12 = var3.width;
            var11 = var3.height;
            var3 = 7;
            var3 = var16[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.bind(var4)();
            _closure2_slot3 = var3;
            var17 = var5.colors;
            var15 = var17.map;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure2_slot0;
                    if(var1) { _fun0007_ip = 61; continue _fun0007 }
 13:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var2 = var1.ColorDetails;
                    var1 = var3.token;
                    var1 = var2[var1];
                    var1 = var1.hex;
                    return var1;
 61:
                    var1 = _closure2_slot2;
                    var11 = null;
                    if(!(var11 == var1)) { _fun0007_ip = 283; continue _fun0007 }
 74:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var4);
                    var6 = var7.isThemeDark;
                    var4 = _closure2_slot3;
                    var4 = var6.bind(var7)(var4);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 9;
                    var2 = var7[var2];
                    var7 = var6.bind(var1)(var2);
                    var2 = _closure2_slot1;
                    var2 = var11 == var2;
                    if(var4) { _fun0007_ip = 217; continue _fun0007 }
 145:
                    var4 = undefined;
                    if(var2) { _fun0007_ip = 160; continue _fun0007 }
 150:
                    var6 = _closure2_slot1;
                    var4 = var6.light;
 160:
                    var6 = var11 != var4;
                    var8 = 0.8;
                    if(!var6) { _fun0007_ip = 180; continue _fun0007 }
 177:
                    var8 = var4;
 180:
                    var4 = var7.prototype;
                    var6 = Object.create(var4, {constructor: {value: var7}});
                    var4 = 255;
                    var18 = var6;
                    var17 = var4;
                    var16 = var4;
                    var15 = var4;
                    var14 = var8;
                    var4 = new var18[var7](var17, var16, var15, var14, var13);
                    var4 = var4 instanceof Object ? var4 : var6;
                    _fun0007_ip = 281; continue _fun0007;
 217:
                    var1 = undefined;
                    if(var2) { _fun0007_ip = 232; continue _fun0007 }
 222:
                    var2 = _closure2_slot1;
                    var1 = var2.dark;
 232:
                    var2 = var11 != var1;
                    var6 = 0.7;
                    if(!var2) { _fun0007_ip = 252; continue _fun0007 }
 249:
                    var6 = var1;
 252:
                    var1 = var7.prototype;
                    var2 = Object.create(var1, {constructor: {value: var7}});
                    var18 = var2;
                    var17 = 0;
                    var16 = 0;
                    var15 = 0;
                    var14 = var6;
                    var1 = new var18[var7](var17, var16, var15, var14, var13);
                    var4 = var1 instanceof Object ? var1 : var2;
 281:
                    _fun0007_ip = 287; continue _fun0007;
 283:
                    var4 = _closure2_slot2;
 287:
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 10;
                    var6 = var12[var2];
                    var10 = undefined;
                    var7 = var9.bind(var10)(var6);
                    var6 = var7.hexToRgb;
                    var8 = 11;
                    var8 = var12[var8];
                    var8 = var9.bind(var10)(var8);
                    var8 = var8.ColorDetails;
                    var3 = var3.token;
                    var3 = var8[var3];
                    var3 = var3.hex;
                    var3 = var6.bind(var7)(var3);
                    var9 = var3.r;
                    var8 = var3.g;
                    var7 = var3.b;
                    var3 = _closure2_slot1;
                    var6 = var11 == var3;
                    var3 = undefined;
                    if(var6) { _fun0007_ip = 395; continue _fun0007 }
 385:
                    var6 = _closure2_slot1;
                    var3 = var6.dark;
 395:
                    var6 = var11 != var3;
                    var3 = 0.3;
                    if(!var6) { _fun0007_ip = 429; continue _fun0007 }
 412:
                    var6 = _closure2_slot1;
                    var12 = var6.dark;
                    var6 = 1;
                    var3 = var6 - var12;
 429:
                    var6 = _closure2_slot1;
                    var12 = var11 == var6;
                    var6 = undefined;
                    if(var12) { _fun0007_ip = 452; continue _fun0007 }
 442:
                    var12 = _closure2_slot1;
                    var6 = var12.light;
 452:
                    var11 = var11 != var6;
                    var6 = 0.2;
                    if(!var11) { _fun0007_ip = 486; continue _fun0007 }
 469:
                    var11 = _closure2_slot1;
                    var12 = var11.light;
                    var11 = 1;
                    var6 = var11 - var12;
 486:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 8;
                    var11 = var13[var11];
                    var12 = var12.bind(var10)(var11);
                    var11 = var12.isThemeDark;
                    var5 = _closure2_slot3;
                    var5 = var11.bind(var12)(var5);
                    if(!var5) { _fun0007_ip = 527; continue _fun0007 }
 524:
                    var6 = var3;
 527:
                    var3 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = var11[var2];
                    var3 = var3.bind(var10)(var2);
                    var2 = var3.mixColors;
                    var5 = _closure1_slot1;
                    var1 = 9;
                    var1 = var11[var1];
                    var1 = var5.bind(var10)(var1);
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {constructor: {value: var1}});
                    var18 = var5;
                    var17 = var9;
                    var16 = var8;
                    var15 = var7;
                    var14 = var6;
                    var1 = new var18[var1](var17, var16, var15, var14, var13);
                    var1 = var1 instanceof Object ? var1 : var5;
                    var2 = var2.bind(var3)(var4, var1);
                    var1 = var2.toHexString;
                    var1 = var1.bind(var2)();
                    return var1;
                }
            };
            var15 = var15.bind(var17)(var3);
            var3 = _closure1_slot7;
            var1 = 12;
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['colors'] = var15;
            var16 = var5.colors;
            var15 = var16.map;
            var13 = function(arg1) {
                var1 = arg1;
                var2 = var1.stop;
                var1 = 100;
                var1 = var2 / var1;
                return var1;
            };
            var13 = var15.bind(var16)(var13);
            var1['locations'] = var13;
            var13 = null;
            if(!(var13 == var14)) { _fun0006_ip = 233; continue _fun0006 }
 227:
            var14 = var5.angle;
 233:
            var1['angle'] = var14;
            var5 = var5.angleCenter;
            if(!(var13 == var5)) { _fun0006_ip = 262; continue _fun0006 }
 248:
            var5 = {'x': 0.5, 'y': 0.5};
 262:
            var1['angleCenter'] = var5;
            var5 = true;
            var1['useAngle'] = var5;
            if(!var10) { _fun0006_ip = 286; continue _fun0006 }
 277:
            var5 = {};
            var5['width'] = var12;
            var10 = var5;
 286:
            var5 = new Array(5);
            var5[0] = var10;
            if(!var9) { _fun0006_ip = 306; continue _fun0006 }
 297:
            var10 = {};
            var10['height'] = var11;
            var9 = var10;
 306:
            var5[1] = var9;
            var9 = var8.linearGradient;
            var5[2] = var9;
            if(!var7) { _fun0006_ip = 329; continue _fun0006 }
 323:
            var7 = var8.absolute;
 329:
            var5[3] = var7;
            var5[4] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var2 = function validateColors(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            var3 = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
            var2 = var3.test;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var2;
    var6 = function wrapWithOverlayIfNeeded(arg1, arg2, arg3, arg4, arg5) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var7 = arg1;
            var9 = arg3;
            var2 = arg2;
            var1 = var7;
            if(!var2) { _fun0008_ip = 143; continue _fun0008 }
 18:
            var5 = _closure1_slot8;
            var4 = _closure1_slot4;
            var3 = {};
            var6 = var9.absolute;
            var3['style'] = var6;
            var6 = new Array(2);
            var6[0] = var7;
            var8 = _closure1_slot7;
            var7 = {};
            var10 = var9.softenGradient;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 10;
            var11 = var11[var2];
            var2 = undefined;
            var14 = var12.bind(var2)(var11);
            var13 = var14.hexWithOpacity;
            var12 = arg4;
            var11 = arg5;
            var11 = var13.bind(var14)(var12, var11);
            var10['backgroundColor'] = var11;
            var9[1] = var10;
            var7['style'] = var9;
            var7 = var8.bind(var2)(var4, var7);
            var6[1] = var7;
            var3['children'] = var6;
            var1 = var5.bind(var2)(var4, var3);
 143:
            return var1;
        }
    };
    var _closure1_slot12 = var6;
    var6 = 21;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/client_themes/native/ThemedGradient.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function _default(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = arg1;
            var7 = var4.overlayOpacity;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0009_ip = 25; continue _fun0009 }
 15:
            var7 = 0.7;
 25:
            var10 = var4.gradientOverride;
            var2 = null;
            var3 = Object.create(var2);
            var1 = 0;
            var3['overlayOpacity'] = var1;
            var3['gradientOverride'] = var1;
            var22 = {};
            var21 = var4;
            var20 = var3;
            var11 = copyDataProperties(var22, var21, var20);
            var3 = _closure1_slot9;
            var5 = var3.bind(var6)();
            var4 = var11.withOverlay;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 15;
            var3 = var12[var3];
            var14 = var8.bind(var6)(var3);
            var13 = var14.useStateFromStoresObject;
            var3 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var1 = {};
                var2 = _closure1_slot5;
                var2 = var2.gradientPreset;
                var1['preset'] = var2;
                return var1;
            };
            var3 = var13.bind(var14)(var9, var3);
            var16 = var3.preset;
            var9 = _closure1_slot1;
            var3 = 7;
            var3 = var12[var3];
            var3 = var9.bind(var6)(var3);
            var9 = var3.bind(var6)();
            var3 = 8;
            var3 = var12[var3];
            var8 = var8.bind(var6)(var3);
            var3 = var8.isThemeDark;
            var3 = var3.bind(var8)(var9);
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 16;
            var8 = var12[var8];
            var12 = var9.bind(var6)(var8);
            var9 = var12.getColor;
            var8 = _closure1_slot6;
            if(var3) { _fun0009_ip = 225; continue _fun0009 }
 212:
            var3 = var8.WHITE_500;
            var3 = var9.bind(var12)(var3);
            _fun0009_ip = 236; continue _fun0009;
 225:
            var8 = var8.BLACK_500;
            var3 = var9.bind(var12)(var8);
 236:
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 17;
            var8 = var13[var8];
            var8 = var9.bind(var6)(var8);
            var12 = var8.bind(var6)();
            var9 = _closure1_slot0;
            var8 = 18;
            var8 = var13[var8];
            var14 = var9.bind(var6)(var8);
            var8 = var14.useCustomThemeDisplaySettings;
            var14 = var8.bind(var14)();
            var8 = 19;
            var8 = var13[var8];
            var13 = var9.bind(var6)(var8);
            var9 = var13.useIsCustomThemeMobileRenderingEnabled;
            var8 = 'ThemedGradient';
            var13 = var9.bind(var13)(var8);
            var8 = var6 !== var14;
            var9 = var8;
            if(!var9) { _fun0009_ip = 328; continue _fun0009 }
 325:
            var9 = var13;
 328:
            if(!(var2 == var10)) { _fun0009_ip = 340; continue _fun0009 }
 332:
            if(var12) { _fun0009_ip = 340; continue _fun0009 }
 335:
            if(var9) { _fun0009_ip = 340; continue _fun0009 }
 338:
            return var2;
 340:
            if(!(var2 != var10)) { _fun0009_ip = 435; continue _fun0009 }
 344:
            if(!var9) { _fun0009_ip = 391; continue _fun0009 }
 347:
            var13 = var10.type;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 20;
            var12 = var17[var12];
            var12 = var15.bind(var6)(var12);
            var12 = var12.ClientThemeType;
            var12 = var12.CUSTOM_BACKGROUND_GRADIENT;
            if(!(var13 !== var12)) { _fun0009_ip = 646; continue _fun0009 }
 391:
            var13 = var10.type;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 20;
            var12 = var17[var12];
            var12 = var15.bind(var6)(var12);
            var12 = var12.ClientThemeType;
            var12 = var12.BACKGROUND_GRADIENT_PRESET;
            if(!(var13 !== var12)) { _fun0009_ip = 587; continue _fun0009 }
 435:
            if(!var9) { _fun0009_ip = 441; continue _fun0009 }
 438:
            if(var8) { _fun0009_ip = 509; continue _fun0009 }
 441:
            var8 = var2 != var16;
            var2 = null;
            if(!var8) { _fun0009_ip = 507; continue _fun0009 }
 450:
            var9 = _closure1_slot12;
            var13 = _closure1_slot7;
            var12 = _closure1_slot10;
            var8 = {};
            var22 = var8;
            var21 = var11;
            var15 = copyDataProperties(var22, var21);
            var15 = 'gradient';
            var8[var15] = var16;
            var22 = var13.bind(var6)(var12, var8);
            var23 = undefined;
            var21 = var4;
            var20 = var5;
            var19 = var3;
            var18 = var7;
            var2 = var23[var9](var22, var21, var20, var19, var18, var17);
 507:
            _fun0009_ip = 585; continue _fun0009;
 509:
            var9 = _closure1_slot12;
            var13 = _closure1_slot7;
            var12 = _closure1_slot13;
            var8 = {};
            var22 = var8;
            var21 = var11;
            var15 = copyDataProperties(var22, var21);
            var21 = var14.customTheme;
            var22 = var8;
            var15 = copyDataProperties(var22, var21);
            var15 = var14.baseTheme;
            var14 = 'theme';
            var8[var14] = var15;
            var22 = var13.bind(var6)(var12, var8);
            var23 = undefined;
            var21 = var4;
            var20 = var5;
            var19 = var3;
            var18 = var7;
            var2 = var23[var9](var22, var21, var20, var19, var18, var17);
 585:
            return var2;
 587:
            var8 = _closure1_slot12;
            var12 = _closure1_slot7;
            var9 = _closure1_slot10;
            var2 = {};
            var22 = var2;
            var21 = var11;
            var13 = copyDataProperties(var22, var21);
            var13 = 'gradient';
            var2[var13] = var10;
            var22 = var12.bind(var6)(var9, var2);
            var23 = undefined;
            var21 = var4;
            var20 = var5;
            var19 = var3;
            var18 = var7;
            var2 = var23[var8](var22, var21, var20, var19, var18, var17);
            return var2;
 646:
            var2 = _closure1_slot12;
            var9 = _closure1_slot7;
            var8 = _closure1_slot13;
            var1 = {};
            var22 = var1;
            var21 = var11;
            var11 = copyDataProperties(var22, var21);
            var21 = var10.customThemeSettings;
            var22 = var1;
            var11 = copyDataProperties(var22, var21);
            var11 = var10.theme;
            var10 = 'theme';
            var1[var10] = var11;
            var22 = var9.bind(var6)(var8, var1);
            var23 = undefined;
            var21 = var4;
            var20 = var5;
            var19 = var3;
            var18 = var7;
            var1 = var23[var2](var22, var21, var20, var19, var18, var17);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['Gradient'] = var4;
    var3['validateColors'] = var2;
    return var1;
})();