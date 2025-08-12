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
            var16 = var1.baseMix;
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
            var2 = _closure1_slot9;
            var8 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 7;
            var11 = var15[var11];
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
            var13 = var13.bind(var4)(var21);
            var14 = {};
            var14['colors'] = var21;
            var14['mix'] = var20;
            var14['mixAmount'] = var19;
            var14['mixColorOverride'] = var18;
            var14['theme'] = var17;
            var14['baseMix'] = var16;
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
                    if(!var2) { _fun0003_ip = 86; continue _fun0003 }
 69:
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = _closure3_slot2;
                            var11 = null;
                            if(!(var11 == var1)) { _fun0004_ip = 225; continue _fun0004 }
 16:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var3 = var3[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var3);
                            var4 = var6.isThemeDark;
                            var3 = _closure3_slot3;
                            var3 = var4.bind(var6)(var3);
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 10;
                            var2 = var6[var2];
                            var6 = var4.bind(var1)(var2);
                            var2 = _closure3_slot1;
                            var2 = var11 == var2;
                            if(var3) { _fun0004_ip = 159; continue _fun0004 }
 87:
                            var3 = undefined;
                            if(var2) { _fun0004_ip = 102; continue _fun0004 }
 92:
                            var4 = _closure3_slot1;
                            var3 = var4.light;
 102:
                            var4 = var11 != var3;
                            var7 = 0.8;
                            if(!var4) { _fun0004_ip = 122; continue _fun0004 }
 119:
                            var7 = var3;
 122:
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
                            _fun0004_ip = 223; continue _fun0004;
 159:
                            var1 = undefined;
                            if(var2) { _fun0004_ip = 174; continue _fun0004 }
 164:
                            var2 = _closure3_slot1;
                            var1 = var2.dark;
 174:
                            var2 = var11 != var1;
                            var3 = 0.7;
                            if(!var2) { _fun0004_ip = 194; continue _fun0004 }
 191:
                            var3 = var1;
 194:
                            var1 = var6.prototype;
                            var2 = Object.create(var1, {constructor: {value: var6}});
                            var18 = var2;
                            var17 = 0;
                            var16 = 0;
                            var15 = 0;
                            var14 = var3;
                            var1 = new var18[var6](var17, var16, var15, var14, var13);
                            var4 = var1 instanceof Object ? var1 : var2;
 223:
                            _fun0004_ip = 229; continue _fun0004;
 225:
                            var4 = _closure3_slot2;
 229:
                            var6 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var2 = 11;
                            var3 = var12[var2];
                            var10 = undefined;
                            var8 = var6.bind(var10)(var3);
                            var7 = var8.hexToRgb;
                            var3 = arg1;
                            var3 = var7.bind(var8)(var3);
                            var9 = var3.r;
                            var8 = var3.g;
                            var7 = var3.b;
                            var3 = 9;
                            var3 = var12[var3];
                            var12 = var6.bind(var10)(var3);
                            var6 = var12.isThemeDark;
                            var3 = _closure3_slot3;
                            var3 = var6.bind(var12)(var3);
                            var6 = _closure3_slot1;
                            var12 = var11 == var6;
                            if(var3) { _fun0004_ip = 401; continue _fun0004 }
 322:
                            var3 = undefined;
                            if(var12) { _fun0004_ip = 337; continue _fun0004 }
 327:
                            var6 = _closure3_slot1;
                            var3 = var6.light;
 337:
                            if(!(var11 == var3)) { _fun0004_ip = 382; continue _fun0004 }
 341:
                            var6 = _closure3_slot0;
                            var3 = 0.2;
                            var13 = var3 * var6;
                            var6 = 0.3;
                            var3 = 100;
                            var3 = var13 / var3;
                            var6 = var6 - var3;
                            _fun0004_ip = 399; continue _fun0004;
 382:
                            var3 = _closure3_slot1;
                            var13 = var3.light;
                            var3 = 1;
                            var6 = var3 - var13;
 399:
                            _fun0004_ip = 488; continue _fun0004;
 401:
                            var3 = undefined;
                            if(var12) { _fun0004_ip = 416; continue _fun0004 }
 406:
                            var12 = _closure3_slot1;
                            var3 = var12.dark;
 416:
                            if(!(var11 == var3)) { _fun0004_ip = 468; continue _fun0004 }
 420:
                            var11 = _closure3_slot0;
                            var3 = 100;
                            var13 = var11 / var3;
                            var11 = 0.25;
                            var12 = 0.35;
                            var3 = 1;
                            var3 = var3 - var13;
                            var3 = var12 * var3;
                            var3 = var11 + var3;
                            _fun0004_ip = 485; continue _fun0004;
 468:
                            var5 = _closure3_slot1;
                            var11 = var5.dark;
                            var5 = 1;
                            var3 = var5 - var11;
 485:
                            var6 = var3;
 488:
                            var3 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var2 = var11[var2];
                            var3 = var3.bind(var10)(var2);
                            var2 = var3.mixColors;
                            var5 = _closure1_slot1;
                            var1 = 10;
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
 86:
                    var3 = var4.length;
                    var2 = 1;
                    var1 = var4;
                    if(!(var2 === var3)) { _fun0003_ip = 126; continue _fun0003 }
 101:
                    var3 = 0;
                    var5 = var4[var3];
                    var2 = new Array(2);
                    var2[0] = var5;
                    var3 = var4[var3];
                    var2[1] = var3;
                    var1 = var2;
 126:
                    return var1;
                }
            };
            var14 = var3.bind(var4)(var14);
            var3 = _closure1_slot7;
            var1 = 13;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['colors'] = var14;
            var1['locations'] = var13;
            var1['angle'] = var5;
            var5 = {'x': 0.5, 'y': 0.5};
            var1['angleCenter'] = var5;
            var5 = true;
            var1['useAngle'] = var5;
            if(!var10) { _fun0001_ip = 246; continue _fun0001 }
 237:
            var5 = {};
            var5['width'] = var12;
            var10 = var5;
 246:
            var5 = new Array(5);
            var5[0] = var10;
            if(!var9) { _fun0001_ip = 266; continue _fun0001 }
 257:
            var10 = {};
            var10['height'] = var11;
            var9 = var10;
 266:
            var5[1] = var9;
            var9 = var8.linearGradient;
            var5[2] = var9;
            if(!var7) { _fun0001_ip = 289; continue _fun0001 }
 283:
            var7 = var8.absolute;
 289:
            var5[3] = var7;
            var5[4] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Color;
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot7 = var5;
    var2 = var2.jsxs;
    var _closure1_slot8 = var2;
    var2 = 6;
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
    var _closure1_slot9 = var2;
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
            var2 = _closure1_slot9;
            var8 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 7;
            var3 = var16[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var12 = var3.width;
            var11 = var3.height;
            var3 = 8;
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
                    var1 = 12;
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
                    var1 = 9;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var4);
                    var6 = var7.isThemeDark;
                    var4 = _closure2_slot3;
                    var4 = var6.bind(var7)(var4);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 10;
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
                    var2 = 11;
                    var6 = var12[var2];
                    var10 = undefined;
                    var7 = var9.bind(var10)(var6);
                    var6 = var7.hexToRgb;
                    var8 = 12;
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
                    var11 = 9;
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
                    var1 = 10;
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
            var1 = 13;
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
            if(!(var13 == var5)) { _fun0005_ip = 262; continue _fun0005 }
 248:
            var5 = {'x': 0.5, 'y': 0.5};
 262:
            var1['angleCenter'] = var5;
            var5 = true;
            var1['useAngle'] = var5;
            if(!var10) { _fun0005_ip = 286; continue _fun0005 }
 277:
            var5 = {};
            var5['width'] = var12;
            var10 = var5;
 286:
            var5 = new Array(5);
            var5[0] = var10;
            if(!var9) { _fun0005_ip = 306; continue _fun0005 }
 297:
            var10 = {};
            var10['height'] = var11;
            var9 = var10;
 306:
            var5[1] = var9;
            var9 = var8.linearGradient;
            var5[2] = var9;
            if(!var7) { _fun0005_ip = 329; continue _fun0005 }
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
    var _closure1_slot10 = var2;
    var5 = function wrapWithOverlayIfNeeded(arg1, arg2, arg3, arg4, arg5) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var7 = arg1;
            var9 = arg3;
            var2 = arg2;
            var1 = var7;
            if(!var2) { _fun0007_ip = 143; continue _fun0007 }
 18:
            var5 = _closure1_slot8;
            var4 = _closure1_slot3;
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
            var2 = 11;
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
    var _closure1_slot11 = var5;
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
            if(!(var7 === var6)) { _fun0008_ip = 27; continue _fun0008 }
 17:
            var7 = 0.7;
 27:
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
            var3 = _closure1_slot9;
            var5 = var3.bind(var6)();
            var4 = var11.withOverlay;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 14;
            var3 = var14[var12];
            var16 = var9.bind(var6)(var3);
            var15 = var16.useStateFromStoresObject;
            var3 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var3;
            var3 = function() {
                var1 = {};
                var2 = _closure1_slot4;
                var2 = var2.gradientPreset;
                var1['preset'] = var2;
                return var1;
            };
            var3 = var15.bind(var16)(var13, var3);
            var17 = var3.preset;
            var13 = _closure1_slot1;
            var3 = 8;
            var3 = var14[var3];
            var3 = var13.bind(var6)(var3);
            var13 = var3.bind(var6)();
            var3 = 9;
            var3 = var14[var3];
            var9 = var9.bind(var6)(var3);
            var3 = var9.isThemeDark;
            var3 = var3.bind(var9)(var13);
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 15;
            var9 = var14[var9];
            var14 = var13.bind(var6)(var9);
            var13 = var14.getColor;
            var9 = _closure1_slot6;
            if(var3) { _fun0008_ip = 225; continue _fun0008 }
 212:
            var3 = var9.WHITE_500;
            var3 = var13.bind(var14)(var3);
            _fun0008_ip = 236; continue _fun0008;
 225:
            var9 = var9.BLACK_500;
            var3 = var13.bind(var14)(var9);
 236:
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 16;
            var9 = var16[var9];
            var9 = var13.bind(var6)(var9);
            var9 = var9.bind(var6)();
            var13 = _closure1_slot0;
            var12 = var16[var12];
            var15 = var13.bind(var6)(var12);
            var14 = var15.useStateFromStoresObject;
            var18 = _closure1_slot5;
            var12 = new Array(1);
            var12[0] = var18;
            var8 = function() {
                var1 = {};
                var3 = _closure1_slot5;
                var2 = var3.getCustomTheme;
                var2 = var2.bind(var3)();
                var1['customThemeSettings'] = var2;
                var2 = var3.getTheme;
                var2 = var2.bind(var3)();
                var1['customThemeBaseTheme'] = var2;
                var2 = var3.hasCustomTheme;
                var2 = var2.bind(var3)();
                var1['hasCustomTheme'] = var2;
                return var1;
            };
            var8 = var14.bind(var15)(var12, var8);
            var14 = var8.customThemeSettings;
            var15 = var8.customThemeBaseTheme;
            var8 = var8.hasCustomTheme;
            var12 = 17;
            var12 = var16[var12];
            var16 = var13.bind(var6)(var12);
            var13 = var16.useIsCustomThemeMobileRenderingEnabled;
            var12 = 'ThemedGradient';
            var12 = var13.bind(var16)(var12);
            if(!var8) { _fun0008_ip = 357; continue _fun0008 }
 354:
            var8 = var12;
 357:
            if(!(var2 == var10)) { _fun0008_ip = 369; continue _fun0008 }
 361:
            if(var9) { _fun0008_ip = 369; continue _fun0008 }
 364:
            if(var8) { _fun0008_ip = 369; continue _fun0008 }
 367:
            return var2;
 369:
            if(!(var2 != var10)) { _fun0008_ip = 464; continue _fun0008 }
 373:
            if(!var8) { _fun0008_ip = 420; continue _fun0008 }
 376:
            var12 = var10.type;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 18;
            var9 = var16[var9];
            var9 = var13.bind(var6)(var9);
            var9 = var9.ClientThemeType;
            var9 = var9.CUSTOM_BACKGROUND_GRADIENT;
            if(!(var12 !== var9)) { _fun0008_ip = 671; continue _fun0008 }
 420:
            var12 = var10.type;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 18;
            var9 = var16[var9];
            var9 = var13.bind(var6)(var9);
            var9 = var9.ClientThemeType;
            var9 = var9.BACKGROUND_GRADIENT_PRESET;
            if(!(var12 !== var9)) { _fun0008_ip = 612; continue _fun0008 }
 464:
            if(!var8) { _fun0008_ip = 475; continue _fun0008 }
 467:
            if(!(var2 != var14)) { _fun0008_ip = 475; continue _fun0008 }
 471:
            if(!(var2 == var15)) { _fun0008_ip = 543; continue _fun0008 }
 475:
            var8 = var2 != var17;
            var2 = null;
            if(!var8) { _fun0008_ip = 541; continue _fun0008 }
 484:
            var9 = _closure1_slot11;
            var13 = _closure1_slot7;
            var12 = _closure1_slot10;
            var8 = {};
            var23 = var8;
            var22 = var11;
            var16 = copyDataProperties(var23, var22);
            var16 = 'gradient';
            var8[var16] = var17;
            var23 = var13.bind(var6)(var12, var8);
            var24 = undefined;
            var22 = var4;
            var21 = var5;
            var20 = var3;
            var19 = var7;
            var2 = var24[var9](var23, var22, var21, var20, var19, var18);
 541:
            _fun0008_ip = 610; continue _fun0008;
 543:
            var9 = _closure1_slot11;
            var13 = _closure1_slot7;
            var12 = _closure1_slot12;
            var8 = {};
            var23 = var8;
            var22 = var11;
            var16 = copyDataProperties(var23, var22);
            var23 = var8;
            var22 = var14;
            var14 = copyDataProperties(var23, var22);
            var14 = 'theme';
            var8[var14] = var15;
            var23 = var13.bind(var6)(var12, var8);
            var24 = undefined;
            var22 = var4;
            var21 = var5;
            var20 = var3;
            var19 = var7;
            var2 = var24[var9](var23, var22, var21, var20, var19, var18);
 610:
            return var2;
 612:
            var8 = _closure1_slot11;
            var12 = _closure1_slot7;
            var9 = _closure1_slot10;
            var2 = {};
            var23 = var2;
            var22 = var11;
            var13 = copyDataProperties(var23, var22);
            var13 = 'gradient';
            var2[var13] = var10;
            var23 = var12.bind(var6)(var9, var2);
            var24 = undefined;
            var22 = var4;
            var21 = var5;
            var20 = var3;
            var19 = var7;
            var2 = var24[var8](var23, var22, var21, var20, var19, var18);
            return var2;
 671:
            var2 = _closure1_slot11;
            var9 = _closure1_slot7;
            var8 = _closure1_slot12;
            var1 = {};
            var23 = var1;
            var22 = var11;
            var11 = copyDataProperties(var23, var22);
            var22 = var10.customThemeSettings;
            var23 = var1;
            var11 = copyDataProperties(var23, var22);
            var11 = var10.theme;
            var10 = 'theme';
            var1[var10] = var11;
            var23 = var9.bind(var6)(var8, var1);
            var24 = undefined;
            var22 = var4;
            var21 = var5;
            var20 = var3;
            var19 = var7;
            var1 = var24[var2](var23, var22, var21, var20, var19, var18);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['Gradient'] = var2;
    return var1;
})();