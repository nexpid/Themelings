// app/modules/client_themes/native/ThemedGradient.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function CustomThemesGradient(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var21 = var1.colors;
            var15 = var1.baseMix;
            var5 = var1.gradientAngle;
            var7 = var1.absolute;
            var10 = var1.wide;
            var9 = var1.tall;
            var20 = var1.mix;
            var19 = var1.mixAmount;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0001_ip = 60; continue _fun0001 }
 58:
            var19 = {};
 60:
            var18 = var1.mixColorOverride;
            var6 = var1.componentStyles;
            var17 = var1.theme;
            var2 = _closure1_slot8;
            var8 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 6;
            var11 = var16[var11];
            var11 = var2.bind(var4)(var11);
            var11 = var11.bind(var4)();
            var12 = var11.width;
            var11 = var11.height;
            var13 = function getGradientLocationsForCustomThemesGradient(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var4 = var3.length;
                    var2 = 1;
                    if(!(var2 !== var4)) { _fun0002_ip = 40; continue _fun0002 }
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
                    _fun0002_ip = 50; continue _fun0002;
 40:
                    var1 = [0, 1];
 50:
                    return var1;
                }
            };
            var14 = var13.bind(var4)(var21);
            var13 = {};
            var13['colors'] = var21;
            var13['mix'] = var20;
            var13['mixAmount'] = var19;
            var13['mixColorOverride'] = var18;
            var13['theme'] = var17;
            var13['baseMix'] = var15;
            var3 = function getGradientColorsForCustomThemesGradient(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var3 = var4.colors;
                    var2 = var4.baseMix;
                    var _closure3_slot0 = var2;
                    var2 = var4.mix;
                    var5 = var4.mixAmount;
                    var6 = undefined;
                    if(!(var5 === var6)) { _fun0003_ip = 40; continue _fun0003 }
 38:
                    var5 = {};
 40:
                    var _closure3_slot1 = var5;
                    var5 = var4.mixColorOverride;
                    var _closure3_slot2 = var5;
                    var4 = var4.theme;
                    var _closure3_slot3 = var4;
                    var4 = var3;
                    if(!var2) { _fun0003_ip = 87; continue _fun0003 }
 70:
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = _closure3_slot2;
                            var11 = null;
                            if(!(var11 == var1)) { _fun0004_ip = 285; continue _fun0004 }
 16:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var6 = var4.bind(var2)(var3);
                            var4 = var6.isThemeDark;
                            var3 = _closure3_slot3;
                            var3 = var4.bind(var6)(var3);
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 9;
                            var1 = var6[var1];
                            var6 = var4.bind(var2)(var1);
                            var1 = _closure3_slot1;
                            var1 = var11 == var1;
                            if(var3) { _fun0004_ip = 189; continue _fun0004 }
 87:
                            var7 = undefined;
                            if(var1) { _fun0004_ip = 102; continue _fun0004 }
 92:
                            var3 = _closure3_slot1;
                            var7 = var3.light;
 102:
                            if(!(var11 == var7)) { _fun0004_ip = 152; continue _fun0004 }
 106:
                            var4 = _closure3_slot0;
                            var3 = 100;
                            var9 = var4 / var3;
                            var4 = 0.5;
                            var8 = 0.2;
                            var3 = 1;
                            var3 = var3 - var9;
                            var3 = var8 * var3;
                            var7 = var4 + var3;
 152:
                            var3 = var6.prototype;
                            var4 = Object.create(var3, {constructor: {value: var6}});
                            var3 = 255;
                            var18 = var4;
                            var17 = var3;
                            var16 = var3;
                            var15 = var3;
                            var14 = var7;
                            var3 = new var18[var6](var17, var16, var15, var14, var13);
                            var4 = var3 instanceof Object ? var3 : var4;
                            _fun0004_ip = 283; continue _fun0004;
 189:
                            var3 = undefined;
                            if(var1) { _fun0004_ip = 204; continue _fun0004 }
 194:
                            var1 = _closure3_slot1;
                            var3 = var1.dark;
 204:
                            if(!(var11 == var3)) { _fun0004_ip = 254; continue _fun0004 }
 208:
                            var2 = _closure3_slot0;
                            var1 = 100;
                            var8 = var2 / var1;
                            var2 = 0.5;
                            var7 = 0.25;
                            var1 = 1;
                            var1 = var1 - var8;
                            var1 = var7 * var1;
                            var3 = var2 + var1;
 254:
                            var1 = var6.prototype;
                            var2 = Object.create(var1, {constructor: {value: var6}});
                            var18 = var2;
                            var17 = 0;
                            var16 = 0;
                            var15 = 0;
                            var14 = var3;
                            var1 = new var18[var6](var17, var16, var15, var14, var13);
                            var4 = var1 instanceof Object ? var1 : var2;
 283:
                            _fun0004_ip = 289; continue _fun0004;
 285:
                            var4 = _closure3_slot2;
 289:
                            var6 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var2 = 10;
                            var3 = var12[var2];
                            var10 = undefined;
                            var8 = var6.bind(var10)(var3);
                            var7 = var8.hexToRgb;
                            var3 = arg1;
                            var3 = var7.bind(var8)(var3);
                            var9 = var3.r;
                            var8 = var3.g;
                            var7 = var3.b;
                            var3 = 8;
                            var3 = var12[var3];
                            var12 = var6.bind(var10)(var3);
                            var6 = var12.isThemeDark;
                            var3 = _closure3_slot3;
                            var3 = var6.bind(var12)(var3);
                            var6 = _closure3_slot1;
                            var12 = var11 == var6;
                            if(var3) { _fun0004_ip = 433; continue _fun0004 }
 382:
                            var3 = undefined;
                            if(var12) { _fun0004_ip = 397; continue _fun0004 }
 387:
                            var6 = _closure3_slot1;
                            var3 = var6.light;
 397:
                            var3 = var11 != var3;
                            var6 = 0.5;
                            if(!var3) { _fun0004_ip = 431; continue _fun0004 }
 414:
                            var3 = _closure3_slot1;
                            var13 = var3.light;
                            var3 = 1;
                            var6 = var3 - var13;
 431:
                            _fun0004_ip = 485; continue _fun0004;
 433:
                            var3 = undefined;
                            if(var12) { _fun0004_ip = 448; continue _fun0004 }
 438:
                            var12 = _closure3_slot1;
                            var3 = var12.dark;
 448:
                            var11 = var11 != var3;
                            var3 = 0.5;
                            if(!var11) { _fun0004_ip = 482; continue _fun0004 }
 465:
                            var5 = _closure3_slot1;
                            var11 = var5.dark;
                            var5 = 1;
                            var3 = var5 - var11;
 482:
                            var6 = var3;
 485:
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
                    var4 = var2.bind(var3)(var1);
 87:
                    var3 = var4.length;
                    var2 = 1;
                    var1 = var4;
                    if(!(var2 === var3)) { _fun0003_ip = 127; continue _fun0003 }
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
            var15 = var3.bind(var4)(var13);
            var3 = 90;
            var13 = var5 - var3;
            var3 = global;
            var5 = var3.Math;
            var5 = var5.PI;
            var13 = var13 * var5;
            var5 = 180;
            var13 = var13 / var5;
            var17 = var3.Math;
            var5 = var17.cos;
            var19 = var5.bind(var17)(var13);
            var5 = var3.Math;
            var3 = var5.sin;
            var18 = var3.bind(var5)(var13);
            var3 = {};
            var5 = {};
            var13 = 0.7142857142857143;
            var17 = var13 * var19;
            var20 = 0.6;
            var17 = var20 - var17;
            var5['x'] = var17;
            var21 = var13 * var18;
            var17 = 0.5;
            var21 = var17 - var21;
            var5['y'] = var21;
            var3['start'] = var5;
            var5 = {};
            var19 = var13 * var19;
            var19 = var20 + var19;
            var5['x'] = var19;
            var13 = var13 * var18;
            var13 = var17 + var13;
            var5['y'] = var13;
            var3['end'] = var5;
            var13 = var3.start;
            var5 = var3.end;
            var3 = _closure1_slot6;
            var1 = 12;
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['colors'] = var15;
            var1['locations'] = var14;
            var1['start'] = var13;
            var1['end'] = var5;
            if(!var10) { _fun0001_ip = 393; continue _fun0001 }
 384:
            var5 = {};
            var5['width'] = var12;
            var10 = var5;
 393:
            var5 = new Array(5);
            var5[0] = var10;
            if(!var9) { _fun0001_ip = 413; continue _fun0001 }
 404:
            var10 = {};
            var10['height'] = var11;
            var9 = var10;
 413:
            var5[1] = var9;
            var9 = var8.linearGradient;
            var5[2] = var9;
            if(!var7) { _fun0001_ip = 436; continue _fun0001 }
 430:
            var7 = var8.absolute;
 436:
            var5[3] = var7;
            var5[4] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var8 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var10 = 1;
    var2 = var7[var10];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Color;
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot6 = var5;
    var2 = var2.jsxs;
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {};
    var9['flex'] = var10;
    var2['softenGradient'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var2['linearGradient'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
    var2['absolute'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot8 = var2;
    var2 = function Gradient(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
            if(!(var2 === var4)) { _fun0005_ip = 67; continue _fun0005 }
 65:
            var2 = {};
 67:
            var _closure2_slot1 = var2;
            var1 = var1.mixColorOverride;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot8;
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure2_slot0;
                    if(var1) { _fun0006_ip = 61; continue _fun0006 }
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
                    if(!(var11 == var1)) { _fun0006_ip = 283; continue _fun0006 }
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
                    if(var4) { _fun0006_ip = 217; continue _fun0006 }
 145:
                    var4 = undefined;
                    if(var2) { _fun0006_ip = 160; continue _fun0006 }
 150:
                    var6 = _closure2_slot1;
                    var4 = var6.light;
 160:
                    var6 = var11 != var4;
                    var8 = 0.8;
                    if(!var6) { _fun0006_ip = 180; continue _fun0006 }
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
                    _fun0006_ip = 281; continue _fun0006;
 217:
                    var1 = undefined;
                    if(var2) { _fun0006_ip = 232; continue _fun0006 }
 222:
                    var2 = _closure2_slot1;
                    var1 = var2.dark;
 232:
                    var2 = var11 != var1;
                    var6 = 0.7;
                    if(!var2) { _fun0006_ip = 252; continue _fun0006 }
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
                    _fun0006_ip = 287; continue _fun0006;
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
                    if(var6) { _fun0006_ip = 395; continue _fun0006 }
 385:
                    var6 = _closure2_slot1;
                    var3 = var6.dark;
 395:
                    var6 = var11 != var3;
                    var3 = 0.3;
                    if(!var6) { _fun0006_ip = 429; continue _fun0006 }
 412:
                    var6 = _closure2_slot1;
                    var12 = var6.dark;
                    var6 = 1;
                    var3 = var6 - var12;
 429:
                    var6 = _closure2_slot1;
                    var12 = var11 == var6;
                    var6 = undefined;
                    if(var12) { _fun0006_ip = 452; continue _fun0006 }
 442:
                    var12 = _closure2_slot1;
                    var6 = var12.light;
 452:
                    var11 = var11 != var6;
                    var6 = 0.2;
                    if(!var11) { _fun0006_ip = 486; continue _fun0006 }
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
                    if(!var5) { _fun0006_ip = 527; continue _fun0006 }
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
            var3 = _closure1_slot6;
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
            if(!(var13 == var14)) { _fun0005_ip = 233; continue _fun0005 }
 227:
            var14 = var5.angle;
 233:
            var1['angle'] = var14;
            var5 = var5.angleCenter;
            if(!(var13 == var5)) { _fun0005_ip = 258; continue _fun0005 }
 248:
            var5 = {'x': 0.5, 'y': 0.5};
 258:
            var1['angleCenter'] = var5;
            var5 = true;
            var1['useAngle'] = var5;
            if(!var10) { _fun0005_ip = 282; continue _fun0005 }
 273:
            var5 = {};
            var5['width'] = var12;
            var10 = var5;
 282:
            var5 = new Array(5);
            var5[0] = var10;
            if(!var9) { _fun0005_ip = 302; continue _fun0005 }
 293:
            var10 = {};
            var10['height'] = var11;
            var9 = var10;
 302:
            var5[1] = var9;
            var9 = var8.linearGradient;
            var5[2] = var9;
            if(!var7) { _fun0005_ip = 325; continue _fun0005 }
 319:
            var7 = var8.absolute;
 325:
            var5[3] = var7;
            var5[4] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var2;
    var5 = function wrapWithOverlayIfNeeded(arg1, arg2, arg3, arg4, arg5) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var7 = arg1;
            var9 = arg3;
            var2 = arg2;
            var1 = var7;
            if(!var2) { _fun0007_ip = 143; continue _fun0007 }
 18:
            var5 = _closure1_slot7;
            var4 = _closure1_slot3;
            var3 = {};
            var6 = var9.absolute;
            var3['style'] = var6;
            var6 = new Array(2);
            var6[0] = var7;
            var8 = _closure1_slot6;
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
    var _closure1_slot10 = var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/client_themes/native/ThemedGradient.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var7 = var4.overlayOpacity;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0008_ip = 25; continue _fun0008 }
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
            var3 = _closure1_slot8;
            var5 = var3.bind(var6)();
            var4 = var11.withOverlay;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 13;
            var3 = var12[var3];
            var14 = var8.bind(var6)(var3);
            var13 = var14.useStateFromStoresObject;
            var3 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var1 = {};
                var2 = _closure1_slot4;
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
            var8 = 14;
            var8 = var12[var8];
            var12 = var9.bind(var6)(var8);
            var9 = var12.getColor;
            var8 = _closure1_slot5;
            if(var3) { _fun0008_ip = 225; continue _fun0008 }
 212:
            var3 = var8.WHITE_500;
            var3 = var9.bind(var12)(var3);
            _fun0008_ip = 236; continue _fun0008;
 225:
            var8 = var8.BLACK_500;
            var3 = var9.bind(var12)(var8);
 236:
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 15;
            var8 = var13[var8];
            var8 = var9.bind(var6)(var8);
            var12 = var8.bind(var6)();
            var9 = _closure1_slot0;
            var8 = 16;
            var8 = var13[var8];
            var14 = var9.bind(var6)(var8);
            var8 = var14.useCustomThemeDisplaySettings;
            var14 = var8.bind(var14)();
            var8 = 17;
            var8 = var13[var8];
            var13 = var9.bind(var6)(var8);
            var9 = var13.useIsCustomThemeMobileRenderingEnabled;
            var8 = 'ThemedGradient';
            var13 = var9.bind(var13)(var8);
            var8 = var6 !== var14;
            var9 = var8;
            if(!var9) { _fun0008_ip = 328; continue _fun0008 }
 325:
            var9 = var13;
 328:
            if(!(var2 == var10)) { _fun0008_ip = 340; continue _fun0008 }
 332:
            if(var12) { _fun0008_ip = 340; continue _fun0008 }
 335:
            if(var9) { _fun0008_ip = 340; continue _fun0008 }
 338:
            return var2;
 340:
            if(!(var2 != var10)) { _fun0008_ip = 435; continue _fun0008 }
 344:
            if(!var9) { _fun0008_ip = 391; continue _fun0008 }
 347:
            var13 = var10.type;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 18;
            var12 = var17[var12];
            var12 = var15.bind(var6)(var12);
            var12 = var12.ClientThemeType;
            var12 = var12.CUSTOM_BACKGROUND_GRADIENT;
            if(!(var13 !== var12)) { _fun0008_ip = 646; continue _fun0008 }
 391:
            var13 = var10.type;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 18;
            var12 = var17[var12];
            var12 = var15.bind(var6)(var12);
            var12 = var12.ClientThemeType;
            var12 = var12.BACKGROUND_GRADIENT_PRESET;
            if(!(var13 !== var12)) { _fun0008_ip = 587; continue _fun0008 }
 435:
            if(!var9) { _fun0008_ip = 441; continue _fun0008 }
 438:
            if(var8) { _fun0008_ip = 509; continue _fun0008 }
 441:
            var8 = var2 != var16;
            var2 = null;
            if(!var8) { _fun0008_ip = 507; continue _fun0008 }
 450:
            var9 = _closure1_slot10;
            var13 = _closure1_slot6;
            var12 = _closure1_slot9;
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
            _fun0008_ip = 585; continue _fun0008;
 509:
            var9 = _closure1_slot10;
            var13 = _closure1_slot6;
            var12 = _closure1_slot11;
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
            var8 = _closure1_slot10;
            var12 = _closure1_slot6;
            var9 = _closure1_slot9;
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
            var2 = _closure1_slot10;
            var9 = _closure1_slot6;
            var8 = _closure1_slot11;
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
    var3['default'] = var4;
    var3['Gradient'] = var2;
    return var1;
})();