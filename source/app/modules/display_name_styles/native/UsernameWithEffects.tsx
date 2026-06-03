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
    var _closure1_slot11 = var1;
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
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = {};
    var8 = 3;
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
    var _closure1_slot9 = var4;
    var4 = 4;
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
            var3 = _closure1_slot11;
            var8 = _closure1_slot9;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 3;
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
            var11 = 5;
            var6 = var12[var11];
            var6 = var8.bind(var7)(var6);
            var6 = var6.colors;
            var6 = var6.WHITE;
            var2['color'] = var6;
            var2['textShadowColor'] = var9;
            var2['textShadowRadius'] = var16;
            var8 = {'width': 0, 'height': 0};
            var2['textShadowOffset'] = var8;
            var8 = 6;
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
            var9 = 7;
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
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var15 = var5.userId;
            var14 = var5.guildId;
            var6 = var5.userName;
            var _closure2_slot0 = var6;
            var9 = var5.effectDisplayType;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.EffectDisplayType;
            var9 = var1.STATIC;
case 22:
            var12 = var5.pendingDisplayNameStyles;
            var7 = var5.defaultColor;
            var17 = var5.customFontLineHeight;
            var2 = {'userId': 0, 'guildId': 0, 'userName': 0, 'effectDisplayType': 0, 'pendingDisplayNameStyles': 0, 'defaultColor': 0, 'customFontLineHeight': 0};
            var10 = null;
            var37 = var2;
            var36 = null;
            var1 = silentSetPrototypeOf(var37, var36);
            var8 = 0;
            var37 = {};
            var36 = var5;
            var35 = var2;
            var5 = copyDataProperties(var37, var36, var35);
            var _closure2_slot1 = var4;
            var20 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 9;
            var2 = var13[var2];
            var11 = var20.bind(var4)(var2);
            var2 = {};
            var2['userId'] = var15;
            var2['guildId'] = var14;
            var2['pendingDisplayNameStyles'] = var12;
            var2 = var11.bind(var4)(var2);
            var12 = _closure1_slot0;
            var11 = 10;
            var11 = var13[var11];
            var15 = var12.bind(var4)(var11);
            var14 = var15.useDisplayNameStylesEnabled;
            var11 = {};
            var16 = 'UsernameWithEffects';
            var11['location'] = var16;
            var16 = var14.bind(var15)(var11);
            var26 = 11;
            var11 = var13[var26];
            var15 = var12.bind(var4)(var11);
            var14 = var15.useDisplayNameStylesFont;
            var11 = {};
            var11['displayNameStyles'] = var2;
            var14 = var14.bind(var15)(var11);
            var18 = 12;
            var11 = var13[var18];
            var21 = var12.bind(var4)(var11);
            var19 = var21.useToken;
            var11 = 5;
            var15 = var13[var11];
            var15 = var20.bind(var4)(var15);
            var15 = var15.colors;
            var15 = var15.BACKGROUND_BASE_LOW;
            var15 = var19.bind(var21)(var15);
            var18 = var13[var18];
            var19 = var12.bind(var4)(var18);
            var18 = var19.useToken;
            var11 = var13[var11];
            var11 = var20.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.WHITE;
            var20 = var18.bind(var19)(var11);
            var11 = 13;
            var11 = var13[var11];
            var13 = var12.bind(var4)(var11);
            var12 = var13.useDisplayNameStylesAccessibleColors;
            var11 = {};
            var11['displayNameStyles'] = var2;
            var11['backgroundColor'] = var15;
            var18 = var12.bind(var13)(var11);
            var11 = var18.length;
            var11 = var11 > var8;
            var15 = undefined;
            if(!var11) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var15 = var18[var8];
case 24:
            var8 = var10 == var2;
            var11 = undefined;
            if(var8) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var11 = var2.effectId;
case 26:
            if(!(var10 == var11)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 3;
            var8 = var13[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.DisplayNameEffect;
            var11 = var8.SOLID;
case 28:
            var8 = var10 != var15;
            var23 = null;
            if(!var8) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 14;
            var8 = var13[var8];
            var12 = var12.bind(var4)(var8);
            var8 = var12.generateColorVariants;
            var23 = var8.bind(var12)(var15);
case 30:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 15;
            var12 = var12[var8];
            var12 = var13.bind(var4)(var12);
            var13 = var12.TextStyleSheet;
            var12 = var5.variant;
            var12 = var13[var12];
            var19 = var10 == var12;
            var13 = undefined;
            if(var19) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var13 = var12.fontSize;
case 32:
            var19 = var10 != var13;
            var12 = 16;
            if(!var19) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var12 = var13;
case 34:
            _closure2_slot1 = var12;
            var19 = var10 != var14;
            var13 = undefined;
            if(!var19) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            if(!(var10 == var17)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var19 = global;
            var22 = var19.Math;
            var21 = var22.ceil;
            var24 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var8];
            var19 = var24.bind(var4)(var19);
            var24 = var19.TextStyleSheet;
            var19 = var5.variant;
            var24 = var24[var19];
            var25 = var10 == var24;
            var19 = undefined;
            if(var25) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var19 = var24.lineHeight;
case 40:
            var25 = var10 != var19;
            var24 = 20;
            if(!var25) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var24 = var19;
case 42:
            var25 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var26];
            var19 = var25.bind(var4)(var19);
            var19 = var19.CUSTOM_FONT_LINE_HEIGHT_CORRECTION;
            var19 = var24 * var19;
            var17 = var21.bind(var22)(var19);
case 38:
            var13 = var17;
case 36:
            var17 = _closure1_slot9;
            var19 = var17[var11];
            var17 = var10 != var19;
            var21 = undefined;
            if(!var17) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var17 = _closure1_slot11;
            var21 = var17.bind(var4)(var19, var12);
case 44:
            var19 = _closure1_slot10;
            var17 = var10 == var23;
            var22 = undefined;
            if(var17) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var22 = var23.main;
case 46:
            var24 = var10 != var22;
            var17 = '';
            if(!var24) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var17 = var22;
case 48:
            var22 = var19.bind(var4)(var17, var12);
            var24 = _closure1_slot3;
            var19 = var24.useMemo;
            var17 = new Array(2);
            var17[0] = var6;
            var17[1] = var12;
            var12 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var1 = var3[var1];
                    var3 = undefined;
                    var5 = var2.bind(var3)(var1);
                    var4 = var5.getNodeText;
                    var2 = _closure2_slot0;
                    var4 = var4.bind(var5)(var2);
                    var2 = null;
                    var5 = var2 == var4;
                    if(var5) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                    var3 = var4.length;
case 50:
                    var4 = var2 != var3;
                    var2 = 10;
                    if(!var4) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                    var2 = var3;
case 52:
                    var1 = _closure2_slot1;
                    var2 = var2 * var1;
                    var1 = 0.6;
                    var1 = var2 * var1;
                    return var1;
                }
            };
            var12 = var19.bind(var24)(var12, var17);
            if(!var16) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            if(!(var10 != var2)) { _fun0002_ip = 54; continue _fun0002 }
case 56:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 8;
            var2 = var17[var2];
            var2 = var16.bind(var4)(var2);
            var2 = var2.EffectDisplayType;
            var2 = var2.PLAIN;
            if(!(var9 !== var2)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            if(!(var10 != var23)) { _fun0002_ip = 57; continue _fun0002 }
case 59:
            var9 = var5.style;
            var2 = new Array(2);
            var2[0] = var9;
            var9 = var10 != var14;
            if(!var9) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var16 = {};
            var16['fontFamily'] = var14;
            var16['lineHeight'] = var13;
            var9 = var16;
case 60:
            var2[1] = var9;
            var17 = _closure1_slot0;
            var9 = _closure1_slot2;
            var16 = 3;
            var9 = var9[var16];
            var9 = var17.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.GRADIENT;
            if(!(var9 !== var11)) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var17 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var16];
            var9 = var17.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.NEON;
            if(!(var9 !== var11)) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var17 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var16];
            var9 = var17.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.POP;
            if(!(var9 !== var11)) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var17 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var16];
            var9 = var17.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.TOON;
            if(!(var9 !== var11)) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var16];
            var9 = var11.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.SOLID;
            var11 = new Array(2);
            var11[0] = var2;
            var9 = {};
            var9['color'] = var15;
            var11[1] = var9;
            var19 = undefined;
            var17 = undefined;
            var16 = undefined;
            var15 = undefined;
            _fun0002_ip = 70; continue _fun0002;
case 68:
            var9 = new Array(2);
            var9[0] = var2;
            var24 = var22.toon;
            var9[1] = var24;
            var24 = _closure1_slot5;
            var20 = var24.bind(var4)(var20);
            var25 = new Array(6);
            var25[0] = var20;
            var20 = var23.light2;
            var20 = var24.bind(var4)(var20);
            var25[1] = var20;
            var20 = var23.light2;
            var20 = var24.bind(var4)(var20);
            var25[2] = var20;
            var20 = var23.light1;
            var20 = var24.bind(var4)(var20);
            var25[3] = var20;
            var20 = var23.light1;
            var20 = var24.bind(var4)(var20);
            var25[4] = var20;
            var20 = var23.main;
            var20 = var24.bind(var4)(var20);
            var25[5] = var20;
            var20 = var23.toonStroke;
            var24 = var24.bind(var4)(var20);
            var26 = var10 != var24;
            var20 = undefined;
            if(!var26) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            var20 = var24;
case 71:
            var17 = 90;
            var15 = var20;
            var19 = var25;
            var16 = var21;
            var11 = var9;
            _fun0002_ip = 70; continue _fun0002;
case 66:
            var20 = _closure1_slot5;
            var24 = var10 == var23;
            var9 = undefined;
            if(var24) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var9 = var23.dark2;
case 73:
            var33 = var20.bind(var4)(var9);
            var20 = _closure1_slot5;
            var24 = var10 == var23;
            var9 = undefined;
            if(var24) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var9 = var23.main;
case 75:
            var29 = var20.bind(var4)(var9);
            var9 = var10 != var23;
            var19 = undefined;
            var17 = undefined;
            var16 = undefined;
            var15 = undefined;
            var11 = var2;
            if(!var9) { _fun0002_ip = 70; continue _fun0002 }
case 77:
            var24 = _closure1_slot8;
            var20 = _closure1_slot4;
            var9 = {};
            var25 = var22.popContainer;
            var9['style'] = var25;
            var27 = _closure1_slot7;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var8];
            var25 = var26.bind(var4)(var25);
            var26 = var25.Text;
            var25 = {};
            var37 = var25;
            var36 = var5;
            var28 = copyDataProperties(var37, var36);
            var30 = 'textStrokeWidth';
            var25[29] = var21;
            var31 = var10 != var29;
            var28 = undefined;
            if(!var31) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var28 = var29;
case 78:
            var32 = 'textStrokeColor';
            var25[31] = var28;
            var28 = new Array(2);
            var28[0] = var2;
            var29 = var22.popBackLayer;
            var28[1] = var29;
            var31 = 'style';
            var25[30] = var28;
            var29 = 'children';
            var25[28] = var6;
            var26 = var27.bind(var4)(var26, var25);
            var25 = new Array(2);
            var25[0] = var26;
            var28 = _closure1_slot7;
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var8];
            var26 = var27.bind(var4)(var26);
            var27 = var26.Text;
            var26 = {};
            var37 = var26;
            var36 = var5;
            var34 = copyDataProperties(var37, var36);
            var26[29] = var21;
            var34 = var10 != var33;
            var30 = undefined;
            if(!var34) { _fun0002_ip = 80; continue _fun0002 }
case 81:
            var30 = var33;
case 80:
            var26[31] = var30;
            var30 = new Array(2);
            var30[0] = var2;
            var32 = var22.popFrontLayer;
            var30[1] = var32;
            var26[30] = var30;
            var26[28] = var6;
            var26 = var28.bind(var4)(var27, var26);
            var25[1] = var26;
            var9['children'] = var25;
            var9 = var24.bind(var4)(var20, var9);
            return var9;
case 64:
            var20 = _closure1_slot5;
            var24 = var10 == var23;
            var9 = undefined;
            if(var24) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var9 = var23.neonStroke;
case 82:
            var9 = var20.bind(var4)(var9);
            var23 = var10 != var9;
            var20 = undefined;
            if(!var23) { _fun0002_ip = 84; continue _fun0002 }
case 85:
            var20 = var9;
case 84:
            var9 = new Array(2);
            var9[0] = var2;
            var22 = var22.neon;
            var9[1] = var22;
            var15 = var20;
            var19 = undefined;
            var17 = undefined;
            var16 = var21;
            var11 = var9;
            _fun0002_ip = 70; continue _fun0002;
case 62:
            var9 = var18.map;
            var3 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var18 = var9.bind(var18)(var3);
            var9 = var18.filter;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 17;
            var3 = var21[var3];
            var3 = var20.bind(var4)(var3);
            var3 = var3.isNotNullish;
            var19 = var9.bind(var18)(var3);
            var17 = 45;
            var16 = undefined;
            var15 = undefined;
            var11 = var2;
case 70:
            var9 = _closure1_slot7;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var37 = var2;
            var36 = var5;
            var18 = copyDataProperties(var37, var36);
            var18 = 'gradientColors';
            var2[17] = var19;
            var18 = 'gradientWidth';
            var2[17] = var12;
            var19 = 'clamp';
            var18 = 'gradientMode';
            var2[17] = var19;
            var18 = new Array(1);
            var18[0] = var11;
            var11 = 'style';
            var2[10] = var18;
            var11 = 'gradientAngle';
            var2[10] = var17;
            var11 = 'textStrokeWidth';
            var2[10] = var16;
            var11 = 'textStrokeColor';
            var2[10] = var15;
            var11 = 'children';
            var2[10] = var6;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 57:
            var9 = _closure1_slot7;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var37 = var2;
            var36 = var5;
            var11 = copyDataProperties(var37, var36);
            var11 = 'gradientWidth';
            var2[10] = var12;
            var12 = 'clamp';
            var11 = 'gradientMode';
            var2[10] = var12;
            var12 = var5.style;
            var11 = new Array(2);
            var11[0] = var12;
            var10 = var10 != var14;
            if(!var10) { _fun0002_ip = 86; continue _fun0002 }
case 87:
            var12 = {};
            var12['fontFamily'] = var14;
            var12['lineHeight'] = var13;
            var10 = var12;
case 86:
            var11[1] = var10;
            var10 = 'style';
            var2[9] = var11;
            var10 = 'color';
            var2[9] = var7;
            var10 = 'children';
            var2[9] = var6;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 54:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var37 = var1;
            var36 = var5;
            var5 = copyDataProperties(var37, var36);
            var5 = 'color';
            var1[4] = var7;
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
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