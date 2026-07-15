// app/modules/display_name_styles/native/UsernameWithEffects.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function calculateStrokeWidth(arg1, arg2) {
        var2 = 0.04;
        var1 = arg2;
        var2 = var2 * var1;
        var1 = arg1;
        var1 = var1 + var2;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var8 = var4.processColor;
    var _closure1_slot5 = var8;
    var4 = var4.PixelRatio;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MIN_PRISM_GRADIENT_WIDTH;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = 4;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.DisplayNameEffect;
    var9 = var9.NEON;
    var4[8] = var10;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.DisplayNameEffect;
    var10 = var9.TOON;
    var9 = 1.6;
    var4[9] = var9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.DisplayNameEffect;
    var9 = var8.POP;
    var8 = 1.2;
    var4[8] = var8;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var6 = arg2;
            var2 = _closure1_slot6;
            var1 = var2.get;
            var2 = var1.bind(var2)();
            var1 = 0.04;
            var14 = var1 * var6;
            var1 = 0.12;
            var3 = var1 * var6;
            var1 = 4;
            var16 = var1 + var3;
            var3 = _closure1_slot12;
            var8 = _closure1_slot10;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = var12[var1];
            var7 = undefined;
            var4 = var15.bind(var7)(var4);
            var4 = var4.DisplayNameEffect;
            var4 = var4.NEON;
            var4 = var8[var4];
            var17 = var3.bind(var7)(var4, var6);
            var4 = var12[var1];
            var4 = var15.bind(var7)(var4);
            var4 = var4.DisplayNameEffect;
            var4 = var4.TOON;
            var4 = var8[var4];
            var4 = var3.bind(var7)(var4, var6);
            var1 = var12[var1];
            var1 = var15.bind(var7)(var1);
            var1 = var1.DisplayNameEffect;
            var1 = var1.POP;
            var1 = var8[var1];
            var13 = var3.bind(var7)(var1, var6);
            var1 = global;
            var6 = var1.Math;
            var3 = var6.floor;
            var10 = 2;
            var1 = var4 / var10;
            var1 = var3.bind(var6)(var1);
            var3 = var1 / var2;
            var1 = {};
            var2 = {};
            var8 = _closure1_slot1;
            var11 = 6;
            var6 = var12[var11];
            var6 = var8.bind(var7)(var6);
            var6 = var6.colors;
            var6 = var6.WHITE;
            var2['color'] = var6;
            var2['textShadowColor'] = var9;
            var2['textShadowRadius'] = var16;
            var8 = {'width': 0, 'height': 0};
            var2['textShadowOffset'] = var8;
            var8 = 7;
            var12 = var12[var8];
            var15 = var15.bind(var7)(var12);
            var12 = var15.isIOS;
            var12 = var12.bind(var15)();
            if(var12) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = {};
            var15 = -var17;
            var12['left'] = var15;
            var12['paddingRight'] = var16;
            var15 = -var16;
            var15 = var15 - var17;
            var12['marginRight'] = var15;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var15 = {};
            var18 = -var17;
            var18 = var18 / var10;
            var15['top'] = var18;
            var15['left'] = var18;
            var15['padding'] = var16;
            var16 = -var16;
            var15['marginVertical'] = var16;
            var15['marginLeft'] = var16;
            var16 = var16 - var17;
            var15['marginRight'] = var16;
            var12 = var15;
case 4:
            var21 = var2;
            var20 = var12;
            var12 = copyDataProperties(var21, var20);
            var1['neon'] = var2;
            var2 = {};
            var12 = 'relative';
            var2['position'] = var12;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var15 = var15.bind(var7)(var12);
            var12 = var15.isIOS;
            var15 = var12.bind(var15)();
            var12 = 0;
            if(!var15) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var15 = -var13;
            var12 = var15 / var10;
case 5:
            var2['top'] = var12;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var15 = var15.bind(var7)(var12);
            var12 = var15.isIOS;
            var15 = var12.bind(var15)();
            var12 = 0;
            if(!var15) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var15 = -var13;
            var12 = var15 / var10;
case 7:
            var2['left'] = var12;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var8];
            var15 = var15.bind(var7)(var12);
            var12 = var15.isIOS;
            var15 = var12.bind(var15)();
            var12 = 0;
            if(!var15) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var12 = -var13;
case 9:
            var2['marginRight'] = var12;
            var1['popContainer'] = var2;
            var2 = {};
            var2['color'] = var9;
            var9 = 'absolute';
            var2['position'] = var9;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 8;
            var9 = var13[var9];
            var12 = var12.bind(var7)(var9);
            var9 = var12.isIosFabric;
            var9 = var9.bind(var12)();
            var12 = {};
            var13 = 1.2;
            var13 = var13 + var14;
            if(var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var14 = {};
            var14['translateY'] = var13;
            var9 = new Array(1);
            var9[0] = var14;
            var12['transform'] = var9;
            var9 = var12;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var12['top'] = var13;
            var9 = var12;
case 13:
            var21 = var2;
            var20 = var9;
            var9 = copyDataProperties(var21, var20);
            var1['popBackLayer'] = var2;
            var2 = {};
            var12 = _closure1_slot1;
            var9 = _closure1_slot2;
            var13 = var9[var11];
            var13 = var12.bind(var7)(var13);
            var13 = var13.colors;
            var13 = var13.WHITE;
            var2['color'] = var13;
            var1['popFrontLayer'] = var2;
            var2 = {};
            var11 = var9[var11];
            var11 = var12.bind(var7)(var11);
            var11 = var11.colors;
            var11 = var11.WHITE;
            var2['color'] = var11;
            var11 = _closure1_slot0;
            var9 = var9[var8];
            var11 = var11.bind(var7)(var9);
            var9 = var11.isIOS;
            var9 = var9.bind(var11)();
            var6 = 0;
            if(!var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = -var4;
            var6 = var9 / var10;
case 14:
            var2['top'] = var6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var9 = var9.bind(var7)(var6);
            var6 = var9.isIOS;
            var6 = var6.bind(var9)();
            if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = -var3;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var9 = -var4;
            var6 = var9 / var10;
case 18:
            var2['left'] = var6;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var6 = var6.bind(var7)(var5);
            var5 = var6.isIOS;
            var5 = var5.bind(var6)();
            if(var5) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = -var3;
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var3 = -var4;
case 21:
            var2['marginRight'] = var3;
            var1['toon'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var13 = var5.userId;
            var12 = var5.guildId;
            var6 = var5.userName;
            var _closure2_slot0 = var6;
            var14 = var5.effectDisplayType;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.EffectDisplayType;
            var14 = var1.STATIC;
case 22:
            var11 = var5.pendingDisplayNameStyles;
            var7 = var5.defaultColor;
            var3 = {'userId': 0, 'guildId': 0, 'userName': 0, 'effectDisplayType': 0, 'pendingDisplayNameStyles': 0, 'defaultColor': 0};
            var10 = null;
            var41 = var3;
            var40 = null;
            var1 = silentSetPrototypeOf(var41, var40);
            var24 = 0;
            var41 = {};
            var40 = var5;
            var39 = var3;
            var5 = copyDataProperties(var41, var40, var39);
            var _closure2_slot1 = var4;
            var20 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 10;
            var3 = var9[var3];
            var8 = var20.bind(var4)(var3);
            var3 = {};
            var3['userId'] = var13;
            var3['guildId'] = var12;
            var3['pendingDisplayNameStyles'] = var11;
            var3 = var8.bind(var4)(var3);
            var11 = _closure1_slot0;
            var8 = 11;
            var8 = var9[var8];
            var12 = var11.bind(var4)(var8);
            var8 = var12.useIsDisplayNameStylesFlywheelViewersEnabled;
            var16 = 'UsernameWithEffects';
            var13 = var8.bind(var12)(var16);
            var18 = 12;
            var8 = var9[var18];
            var12 = var11.bind(var4)(var8);
            var8 = var12.applyFlywheelViewingFallback;
            var8 = var8.bind(var12)(var3, var13);
            var12 = 13;
            var12 = var9[var12];
            var15 = var11.bind(var4)(var12);
            var13 = var15.useDisplayNameStylesEnabled;
            var12 = {};
            var12['location'] = var16;
            var16 = var13.bind(var15)(var12);
            var12 = 14;
            var12 = var9[var12];
            var15 = var11.bind(var4)(var12);
            var13 = var15.useDisplayNameStylesFont;
            var12 = {};
            var12['displayNameStyles'] = var8;
            var13 = var13.bind(var15)(var12);
            var15 = 15;
            var12 = var9[var15];
            var21 = var11.bind(var4)(var12);
            var19 = var21.useToken;
            var12 = 6;
            var17 = var9[var12];
            var17 = var20.bind(var4)(var17);
            var17 = var17.colors;
            var17 = var17.BACKGROUND_BASE_LOW;
            var17 = var19.bind(var21)(var17);
            var15 = var9[var15];
            var19 = var11.bind(var4)(var15);
            var15 = var19.useToken;
            var12 = var9[var12];
            var12 = var20.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.WHITE;
            var20 = var15.bind(var19)(var12);
            var12 = 16;
            var9 = var9[var12];
            var15 = var11.bind(var4)(var9);
            var11 = var15.useDisplayNameStylesAccessibleColors;
            var9 = {};
            var9['displayNameStyles'] = var8;
            var9['backgroundColor'] = var17;
            var11 = var11.bind(var15)(var9);
            var9 = var11.length;
            var9 = var9 > var24;
            var17 = undefined;
            if(!var9) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var17 = var11[var24];
case 24:
            var15 = var10 == var8;
            var9 = undefined;
            if(var15) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var9 = var8.effectId;
case 26:
            if(!(var10 == var9)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = 4;
            var8 = var19[var8];
            var8 = var15.bind(var4)(var8);
            var8 = var8.DisplayNameEffect;
            var9 = var8.SOLID;
case 28:
            var8 = var10 != var17;
            var27 = null;
            if(!var8) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var18];
            var15 = var15.bind(var4)(var8);
            var8 = var15.generateColorVariants;
            var27 = var8.bind(var15)(var17);
case 30:
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 17;
            var15 = var15[var8];
            var15 = var18.bind(var4)(var15);
            var18 = var15.TextStyleSheet;
            var15 = var5.variant;
            var18 = var18[var15];
            var19 = var10 == var18;
            var15 = undefined;
            if(var19) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var15 = var18.fontSize;
case 32:
            var18 = var10 != var15;
            if(!var18) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var12 = var15;
case 34:
            _closure2_slot1 = var12;
            var15 = _closure1_slot10;
            var18 = var15[var9];
            var15 = var10 != var18;
            var23 = undefined;
            if(!var15) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var15 = _closure1_slot12;
            var23 = var15.bind(var4)(var18, var12);
case 36:
            var19 = _closure1_slot11;
            var15 = var10 == var27;
            var21 = undefined;
            if(var15) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var21 = var27.main;
case 38:
            var22 = var10 != var21;
            var15 = '';
            var18 = var15;
            if(!var22) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var18 = var21;
case 40:
            var26 = var19.bind(var4)(var18, var12);
            var21 = _closure1_slot3;
            var19 = var21.useMemo;
            var18 = new Array(2);
            var18[0] = var6;
            var18[1] = var12;
            var12 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var1 = var3[var1];
                    var3 = undefined;
                    var5 = var2.bind(var3)(var1);
                    var4 = var5.getNodeText;
                    var2 = _closure2_slot0;
                    var4 = var4.bind(var5)(var2);
                    var2 = null;
                    var5 = var2 == var4;
                    if(var5) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var3 = var4.length;
case 42:
                    var4 = var2 != var3;
                    var2 = 10;
                    if(!var4) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                    var2 = var3;
case 44:
                    var1 = _closure2_slot1;
                    var2 = var2 * var1;
                    var1 = 0.6;
                    var1 = var2 * var1;
                    return var1;
                }
            };
            var12 = var19.bind(var21)(var12, var18);
            if(!var16) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            if(!(var10 != var3)) { _fun0002_ip = 46; continue _fun0002 }
case 48:
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 9;
            var3 = var18[var3];
            var3 = var16.bind(var4)(var3);
            var3 = var3.EffectDisplayType;
            var3 = var3.PLAIN;
            if(!(var14 !== var3)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            if(!(var10 != var27)) { _fun0002_ip = 49; continue _fun0002 }
case 51:
            var3 = var5.style;
            var14 = new Array(2);
            var14[0] = var3;
            var3 = var10 != var13;
            if(!var3) { _fun0002_ip = 18; continue _fun0002 }
case 52:
            var16 = {};
            var16['fontFamily'] = var13;
            var3 = var16;
case 18:
            var14[1] = var3;
            var16 = _closure1_slot0;
            var3 = _closure1_slot2;
            var25 = 4;
            var3 = var3[var25];
            var3 = var16.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.GUMMY;
            if(!(var9 !== var3)) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var16 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var25];
            var3 = var16.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.GRADIENT;
            if(!(var3 !== var9)) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var16 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var25];
            var3 = var16.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.PRISM;
            if(!(var3 !== var9)) { _fun0002_ip = 55; continue _fun0002 }
case 57:
            var16 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var25];
            var3 = var16.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.NEON;
            if(!(var3 !== var9)) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var16 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var25];
            var3 = var16.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.POP;
            if(!(var3 !== var9)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var16 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var25];
            var3 = var16.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.TOON;
            if(!(var3 !== var9)) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var16 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var25];
            var3 = var16.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.SOLID;
            var16 = new Array(2);
            var16[0] = var14;
            var3 = {};
            var3['color'] = var17;
            var16[1] = var3;
            var22 = undefined;
            var19 = undefined;
            var18 = undefined;
            var17 = undefined;
            var21 = var12;
            _fun0002_ip = 64; continue _fun0002;
case 62:
            var3 = new Array(2);
            var3[0] = var14;
            var28 = var26.toon;
            var3[1] = var28;
            var28 = _closure1_slot5;
            var29 = var27.main;
            var30 = var28.bind(var4)(var29);
            var29 = new Array(6);
            var29[0] = var30;
            var20 = var28.bind(var4)(var20);
            var29[1] = var20;
            var20 = var27.light2;
            var20 = var28.bind(var4)(var20);
            var29[2] = var20;
            var20 = var27.light1;
            var20 = var28.bind(var4)(var20);
            var29[3] = var20;
            var20 = var27.main;
            var20 = var28.bind(var4)(var20);
            var29[4] = var20;
            var20 = var27.main;
            var20 = var28.bind(var4)(var20);
            var29[5] = var20;
            var20 = var27.toonStroke;
            var28 = var28.bind(var4)(var20);
            var30 = var10 != var28;
            var20 = undefined;
            if(!var30) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var20 = var28;
case 65:
            var19 = 90;
            var17 = var20;
            var22 = var29;
            var18 = var23;
            var16 = var3;
            var21 = var12;
            _fun0002_ip = 64; continue _fun0002;
case 60:
            var20 = _closure1_slot5;
            var28 = var10 == var27;
            var3 = undefined;
            if(var28) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var3 = var27.dark2;
case 67:
            var37 = var20.bind(var4)(var3);
            var20 = _closure1_slot5;
            var28 = var10 == var27;
            var3 = undefined;
            if(var28) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var3 = var27.main;
case 69:
            var33 = var20.bind(var4)(var3);
            var3 = var10 != var27;
            var22 = undefined;
            var19 = undefined;
            var18 = undefined;
            var17 = undefined;
            var16 = var14;
            var21 = var12;
            if(!var3) { _fun0002_ip = 64; continue _fun0002 }
case 71:
            var28 = _closure1_slot9;
            var20 = _closure1_slot4;
            var3 = {};
            var29 = var26.popContainer;
            var3['style'] = var29;
            var31 = _closure1_slot8;
            var30 = _closure1_slot0;
            var29 = _closure1_slot2;
            var29 = var29[var8];
            var29 = var30.bind(var4)(var29);
            var30 = var29.Text;
            var29 = {};
            var41 = var29;
            var40 = var5;
            var32 = copyDataProperties(var41, var40);
            var34 = 'textStrokeWidth';
            var29[33] = var23;
            var35 = var10 != var33;
            var32 = undefined;
            if(!var35) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var32 = var33;
case 72:
            var36 = 'textStrokeColor';
            var29[35] = var32;
            var32 = new Array(2);
            var32[0] = var14;
            var33 = var26.popBackLayer;
            var32[1] = var33;
            var35 = 'style';
            var29[34] = var32;
            var33 = 'children';
            var29[32] = var6;
            var30 = var31.bind(var4)(var30, var29);
            var29 = new Array(2);
            var29[0] = var30;
            var32 = _closure1_slot8;
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var8];
            var30 = var31.bind(var4)(var30);
            var31 = var30.Text;
            var30 = {};
            var41 = var30;
            var40 = var5;
            var38 = copyDataProperties(var41, var40);
            var30[33] = var23;
            var38 = var10 != var37;
            var34 = undefined;
            if(!var38) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var34 = var37;
case 74:
            var30[35] = var34;
            var34 = new Array(2);
            var34[0] = var14;
            var36 = var26.popFrontLayer;
            var34[1] = var36;
            var30[34] = var34;
            var30[32] = var6;
            var30 = var32.bind(var4)(var31, var30);
            var29[1] = var30;
            var3['children'] = var29;
            var3 = var28.bind(var4)(var20, var3);
            return var3;
case 58:
            var20 = _closure1_slot5;
            var28 = var10 == var27;
            var3 = undefined;
            if(var28) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var3 = var27.neonStroke;
case 76:
            var3 = var20.bind(var4)(var3);
            var27 = var10 != var3;
            var20 = undefined;
            if(!var27) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var20 = var3;
case 78:
            var3 = new Array(2);
            var3[0] = var14;
            var26 = var26.neon;
            var3[1] = var26;
            var17 = var20;
            var22 = undefined;
            var19 = undefined;
            var18 = var23;
            var16 = var3;
            var21 = var12;
            _fun0002_ip = 64; continue _fun0002;
case 55:
            var3 = var11.map;
            var2 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var26 = var3.bind(var11)(var2);
            var23 = var26.filter;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var20 = 20;
            var20 = var2[var20];
            var20 = var3.bind(var4)(var20);
            var20 = var20.isNotNullish;
            var20 = var23.bind(var26)(var20);
            var2 = var2[var25];
            var2 = var3.bind(var4)(var2);
            var2 = var2.DisplayNameEffect;
            var2 = var2.PRISM;
            var3 = 45;
            if(!(var9 === var2)) { _fun0002_ip = 80; continue _fun0002 }
case 81:
            var3 = 0;
case 80:
            var23 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var25];
            var2 = var23.bind(var4)(var2);
            var2 = var2.DisplayNameEffect;
            var2 = var2.PRISM;
            var22 = var20;
            var19 = var3;
            var18 = undefined;
            var17 = undefined;
            var16 = var14;
            var21 = var12;
            if(!(var9 === var2)) { _fun0002_ip = 64; continue _fun0002 }
case 82:
            var2 = var20.length;
            var9 = var20;
            if(!(var2 > var24)) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var2 = new Array(1);
            var41 = var2;
            var40 = var20;
            var39 = 0;
            var23 = arraySpread(var41, var40, var39);
            var20 = var20[var24];
            var2[22] = var20;
            var20 = 1;
            var20 = var23 + var20;
            var9 = var2;
case 83:
            var2 = global;
            var23 = var2.Math;
            var20 = var23.max;
            var2 = _closure1_slot7;
            var21 = var20.bind(var23)(var12, var2);
            var22 = var9;
            var19 = var3;
            var18 = undefined;
            var17 = undefined;
            var16 = var14;
case 64:
            var9 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var41 = var2;
            var40 = var5;
            var20 = copyDataProperties(var41, var40);
            var20 = 'gradientColors';
            var2[19] = var22;
            var20 = 'gradientWidth';
            var2[19] = var21;
            var21 = 'clamp';
            var20 = 'gradientMode';
            var2[19] = var21;
            var20 = new Array(1);
            var20[0] = var16;
            var16 = 'style';
            var2[15] = var20;
            var16 = 'gradientAngle';
            var2[15] = var19;
            var16 = 'textStrokeWidth';
            var2[15] = var18;
            var16 = 'textStrokeColor';
            var2[15] = var17;
            var16 = 'children';
            var2[15] = var6;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 53:
            var9 = _closure1_slot8;
            var3 = _closure1_slot1;
            var18 = _closure1_slot2;
            var2 = 19;
            var2 = var18[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var17 = _closure1_slot0;
            var16 = 18;
            var16 = var18[var16];
            var17 = var17.bind(var4)(var16);
            var16 = var17.getNodeText;
            var16 = var16.bind(var17)(var6);
            var17 = var10 != var16;
            if(!var17) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            var15 = var16;
case 85:
            var2['name'] = var15;
            var2['textStyle'] = var14;
            var14 = {};
            var41 = var14;
            var40 = var5;
            var15 = copyDataProperties(var41, var40);
            var15 = 'gradientColors';
            var14[14] = var4;
            var15 = 'gradientWidth';
            var14[14] = var12;
            var16 = 'clamp';
            var15 = 'gradientMode';
            var14[14] = var16;
            var15 = 'gradientAngle';
            var14[14] = var4;
            var15 = 'textStrokeWidth';
            var14[14] = var4;
            var15 = 'textStrokeColor';
            var14[14] = var4;
            var2['textProps'] = var14;
            var2['colors'] = var11;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 49:
            var9 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var41 = var2;
            var40 = var5;
            var11 = copyDataProperties(var41, var40);
            var11 = 'gradientWidth';
            var2[10] = var12;
            var12 = 'clamp';
            var11 = 'gradientMode';
            var2[10] = var12;
            var12 = var5.style;
            var11 = new Array(2);
            var11[0] = var12;
            var10 = var10 != var13;
            if(!var10) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            var12 = {};
            var12['fontFamily'] = var13;
            var10 = var12;
case 87:
            var11[1] = var10;
            var10 = 'style';
            var2[9] = var11;
            var10 = 'color';
            var2[9] = var7;
            var10 = 'children';
            var2[9] = var6;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 46:
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var41 = var1;
            var40 = var5;
            var5 = copyDataProperties(var41, var40);
            var5 = 'color';
            var1[4] = var7;
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/UsernameWithEffects.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 0.6;
    var3['AVERAGE_FONT_WIDTH_RATIO'] = var2;
    return var1;
})();