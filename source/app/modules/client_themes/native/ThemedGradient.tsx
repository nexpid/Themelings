// app/modules/client_themes/native/ThemedGradient.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
    var2 = native4;
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
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            if(!(var2 === var4)) { _fun0001_ip = 67; continue _fun0001 }
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
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure2_slot0;
                    if(var1) { _fun0002_ip = 61; continue _fun0002 }
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
                    if(!(var11 == var1)) { _fun0002_ip = 283; continue _fun0002 }
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
                    if(var4) { _fun0002_ip = 217; continue _fun0002 }
 145:
                    var4 = undefined;
                    if(var2) { _fun0002_ip = 160; continue _fun0002 }
 150:
                    var6 = _closure2_slot1;
                    var4 = var6.light;
 160:
                    var6 = var11 != var4;
                    var8 = 0.8;
                    if(!var6) { _fun0002_ip = 180; continue _fun0002 }
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
                    _fun0002_ip = 281; continue _fun0002;
 217:
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 232; continue _fun0002 }
 222:
                    var2 = _closure2_slot1;
                    var1 = var2.dark;
 232:
                    var2 = var11 != var1;
                    var6 = 0.7;
                    if(!var2) { _fun0002_ip = 252; continue _fun0002 }
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
                    _fun0002_ip = 287; continue _fun0002;
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
                    if(var6) { _fun0002_ip = 395; continue _fun0002 }
 385:
                    var6 = _closure2_slot1;
                    var3 = var6.dark;
 395:
                    var6 = var11 != var3;
                    var3 = 0.3;
                    if(!var6) { _fun0002_ip = 429; continue _fun0002 }
 412:
                    var6 = _closure2_slot1;
                    var12 = var6.dark;
                    var6 = 1;
                    var3 = var6 - var12;
 429:
                    var6 = _closure2_slot1;
                    var12 = var11 == var6;
                    var6 = undefined;
                    if(var12) { _fun0002_ip = 452; continue _fun0002 }
 442:
                    var12 = _closure2_slot1;
                    var6 = var12.light;
 452:
                    var11 = var11 != var6;
                    var6 = 0.2;
                    if(!var11) { _fun0002_ip = 486; continue _fun0002 }
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
                    if(!var5) { _fun0002_ip = 527; continue _fun0002 }
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
            if(!(var13 == var14)) { _fun0001_ip = 233; continue _fun0001 }
 227:
            var14 = var5.angle;
 233:
            var1['angle'] = var14;
            var5 = var5.angleCenter;
            if(!(var13 == var5)) { _fun0001_ip = 258; continue _fun0001 }
 248:
            var5 = {'x': 0.5, 'y': 0.5};
 258:
            var1['angleCenter'] = var5;
            var5 = true;
            var1['useAngle'] = var5;
            if(!var10) { _fun0001_ip = 282; continue _fun0001 }
 273:
            var5 = {};
            var5['width'] = var12;
            var10 = var5;
 282:
            var5 = new Array(5);
            var5[0] = var10;
            if(!var9) { _fun0001_ip = 302; continue _fun0001 }
 293:
            var10 = {};
            var10['height'] = var11;
            var9 = var10;
 302:
            var5[1] = var9;
            var9 = var8.linearGradient;
            var5[2] = var9;
            if(!var7) { _fun0001_ip = 325; continue _fun0001 }
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
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/client_themes/native/ThemedGradient.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var15 = var5.overlayOpacity;
            var6 = undefined;
            if(!(var15 === var6)) { _fun0003_ip = 25; continue _fun0003 }
 15:
            var15 = 0.7;
 25:
            var3 = var5.gradientOverride;
            var1 = null;
            var4 = Object.create(var1);
            var2 = 0;
            var4['overlayOpacity'] = var2;
            var4['gradientOverride'] = var2;
            var19 = {};
            var18 = var5;
            var17 = var4;
            var11 = copyDataProperties(var19, var18, var17);
            var2 = _closure1_slot8;
            var10 = var2.bind(var6)();
            var2 = var11.withOverlay;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 13;
            var4 = var8[var4];
            var13 = var5.bind(var6)(var4);
            var9 = var13.useStateFromStoresObject;
            var4 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var1 = {};
                var2 = _closure1_slot4;
                var2 = var2.gradientPreset;
                var1['preset'] = var2;
                return var1;
            };
            var4 = var9.bind(var13)(var7, var4);
            var13 = var4.preset;
            var7 = _closure1_slot1;
            var4 = 7;
            var4 = var8[var4];
            var4 = var7.bind(var6)(var4);
            var7 = var4.bind(var6)();
            var4 = 8;
            var4 = var8[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isThemeDark;
            var8 = var4.bind(var5)(var7);
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 14;
            var4 = var7[var4];
            var7 = var5.bind(var6)(var4);
            var5 = var7.getColor;
            var4 = _closure1_slot5;
            if(var8) { _fun0003_ip = 225; continue _fun0003 }
 212:
            var8 = var4.WHITE_500;
            var14 = var5.bind(var7)(var8);
            _fun0003_ip = 236; continue _fun0003;
 225:
            var4 = var4.BLACK_500;
            var14 = var5.bind(var7)(var4);
 236:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 15;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.bind(var6)();
            if(!(var1 == var3)) { _fun0003_ip = 269; continue _fun0003 }
 264:
            if(var4) { _fun0003_ip = 269; continue _fun0003 }
 267:
            return var1;
 269:
            if(!(var1 != var3)) { _fun0003_ip = 276; continue _fun0003 }
 273:
            var13 = var3;
 276:
            var3 = var1 == var13;
            var1 = null;
            if(var3) { _fun0003_ip = 479; continue _fun0003 }
 288:
            if(var2) { _fun0003_ip = 331; continue _fun0003 }
 291:
            var4 = _closure1_slot6;
            var3 = _closure1_slot9;
            var2 = {};
            var19 = var2;
            var18 = var11;
            var5 = copyDataProperties(var19, var18);
            var5 = 'gradient';
            var2[var5] = var13;
            var2 = var4.bind(var6)(var3, var2);
            _fun0003_ip = 476; continue _fun0003;
 331:
            var5 = _closure1_slot7;
            var4 = _closure1_slot3;
            var3 = {};
            var7 = var10.absolute;
            var3['style'] = var7;
            var9 = _closure1_slot6;
            var8 = _closure1_slot9;
            var7 = {};
            var19 = var7;
            var18 = var11;
            var11 = copyDataProperties(var19, var18);
            var11 = 'gradient';
            var7[var11] = var13;
            var8 = var9.bind(var6)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            var11 = var10.softenGradient;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 10;
            var12 = var16[var12];
            var13 = var13.bind(var6)(var12);
            var12 = var13.hexWithOpacity;
            var12 = var12.bind(var13)(var14, var15);
            var11['backgroundColor'] = var12;
            var10[1] = var11;
            var8['style'] = var10;
            var8 = var9.bind(var6)(var4, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 476:
            var1 = var2;
 479:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['Gradient'] = var2;
    return var1;
})();