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
            var13 = var5.userId;
            var11 = var5.guildId;
            var6 = var5.userName;
            var _closure2_slot0 = var6;
            var15 = var5.effectDisplayType;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.EffectDisplayType;
            var15 = var1.STATIC;
case 22:
            var9 = var5.pendingDisplayNameStyles;
            var7 = var5.defaultColor;
            var16 = var5.customFontLineHeight;
            var3 = {'userId': 0, 'guildId': 0, 'userName': 0, 'effectDisplayType': 0, 'pendingDisplayNameStyles': 0, 'defaultColor': 0, 'customFontLineHeight': 0};
            var10 = null;
            var38 = var3;
            var37 = null;
            var1 = silentSetPrototypeOf(var38, var37);
            var12 = 0;
            var38 = {};
            var37 = var5;
            var36 = var3;
            var5 = copyDataProperties(var38, var37, var36);
            var _closure2_slot1 = var4;
            var22 = _closure1_slot1;
            var18 = _closure1_slot2;
            var3 = 9;
            var3 = var18[var3];
            var8 = var22.bind(var4)(var3);
            var3 = {};
            var3['userId'] = var13;
            var3['guildId'] = var11;
            var3['pendingDisplayNameStyles'] = var9;
            var3 = var8.bind(var4)(var3);
            var17 = _closure1_slot0;
            var8 = 10;
            var8 = var18[var8];
            var9 = var17.bind(var4)(var8);
            var8 = var9.useIsDisplayNameStylesFlywheelViewersEnabled;
            var19 = 'UsernameWithEffects';
            var11 = var8.bind(var9)(var19);
            var13 = 11;
            var8 = var18[var13];
            var9 = var17.bind(var4)(var8);
            var8 = var9.applyFlywheelViewingFallback;
            var8 = var8.bind(var9)(var3, var11);
            var9 = 12;
            var9 = var18[var9];
            var14 = var17.bind(var4)(var9);
            var11 = var14.useDisplayNameStylesEnabled;
            var9 = {};
            var9['location'] = var19;
            var19 = var11.bind(var14)(var9);
            var26 = 13;
            var9 = var18[var26];
            var14 = var17.bind(var4)(var9);
            var11 = var14.useDisplayNameStylesFont;
            var9 = {};
            var9['displayNameStyles'] = var8;
            var14 = var11.bind(var14)(var9);
            var11 = 14;
            var9 = var18[var11];
            var23 = var17.bind(var4)(var9);
            var21 = var23.useToken;
            var9 = 5;
            var20 = var18[var9];
            var20 = var22.bind(var4)(var20);
            var20 = var20.colors;
            var20 = var20.BACKGROUND_BASE_LOW;
            var20 = var21.bind(var23)(var20);
            var11 = var18[var11];
            var21 = var17.bind(var4)(var11);
            var11 = var21.useToken;
            var9 = var18[var9];
            var9 = var22.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.WHITE;
            var9 = var11.bind(var21)(var9);
            var11 = 15;
            var11 = var18[var11];
            var18 = var17.bind(var4)(var11);
            var17 = var18.useDisplayNameStylesAccessibleColors;
            var11 = {};
            var11['displayNameStyles'] = var8;
            var11['backgroundColor'] = var20;
            var11 = var17.bind(var18)(var11);
            var17 = var11.length;
            var17 = var17 > var12;
            var18 = undefined;
            if(!var17) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var18 = var11[var12];
case 24:
            var12 = var10 == var8;
            var17 = undefined;
            if(var12) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var17 = var8.effectId;
case 26:
            if(!(var10 == var17)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var12 = _closure1_slot0;
            var20 = _closure1_slot2;
            var8 = 3;
            var8 = var20[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.DisplayNameEffect;
            var17 = var8.SOLID;
case 28:
            var8 = var10 != var18;
            var24 = null;
            if(!var8) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var13];
            var12 = var12.bind(var4)(var8);
            var8 = var12.generateColorVariants;
            var24 = var8.bind(var12)(var18);
case 30:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 16;
            var12 = var12[var8];
            var12 = var13.bind(var4)(var12);
            var13 = var12.TextStyleSheet;
            var12 = var5.variant;
            var12 = var13[var12];
            var20 = var10 == var12;
            var13 = undefined;
            if(var20) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var13 = var12.fontSize;
case 32:
            var20 = var10 != var13;
            var12 = var8;
            if(!var20) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var12 = var13;
case 34:
            _closure2_slot1 = var12;
            var20 = var10 != var14;
            var13 = undefined;
            if(!var20) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            if(!(var10 == var16)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var20 = global;
            var22 = var20.Math;
            var21 = var22.ceil;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var8];
            var20 = var23.bind(var4)(var20);
            var23 = var20.TextStyleSheet;
            var20 = var5.variant;
            var23 = var23[var20];
            var25 = var10 == var23;
            var20 = undefined;
            if(var25) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var20 = var23.lineHeight;
case 40:
            var25 = var10 != var20;
            var23 = 20;
            if(!var25) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var23 = var20;
case 42:
            var25 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var26];
            var20 = var25.bind(var4)(var20);
            var20 = var20.CUSTOM_FONT_LINE_HEIGHT_CORRECTION;
            var20 = var23 * var20;
            var16 = var21.bind(var22)(var20);
case 38:
            var13 = var16;
case 36:
            var16 = _closure1_slot9;
            var20 = var16[var17];
            var16 = var10 != var20;
            var21 = undefined;
            if(!var16) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var16 = _closure1_slot11;
            var21 = var16.bind(var4)(var20, var12);
case 44:
            var22 = _closure1_slot10;
            var16 = var10 == var24;
            var23 = undefined;
            if(var16) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var23 = var24.main;
case 46:
            var25 = var10 != var23;
            var16 = '';
            var20 = var16;
            if(!var25) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var20 = var23;
case 48:
            var23 = var22.bind(var4)(var20, var12);
            var25 = _closure1_slot3;
            var22 = var25.useMemo;
            var20 = new Array(2);
            var20[0] = var6;
            var20[1] = var12;
            var12 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 17;
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
            var12 = var22.bind(var25)(var12, var20);
            if(!var19) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            if(!(var10 != var3)) { _fun0002_ip = 54; continue _fun0002 }
case 56:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = 8;
            var3 = var20[var3];
            var3 = var19.bind(var4)(var3);
            var3 = var3.EffectDisplayType;
            var3 = var3.PLAIN;
            if(!(var15 !== var3)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            if(!(var10 != var24)) { _fun0002_ip = 57; continue _fun0002 }
case 59:
            var3 = var5.style;
            var15 = new Array(2);
            var15[0] = var3;
            var3 = var10 != var14;
            if(!var3) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var19 = {};
            var19['fontFamily'] = var14;
            var19['lineHeight'] = var13;
            var3 = var19;
case 60:
            var15[1] = var3;
            var20 = _closure1_slot0;
            var3 = _closure1_slot2;
            var19 = 3;
            var3 = var3[var19];
            var3 = var20.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.GUMMY;
            if(!(var17 !== var3)) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var20 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var19];
            var3 = var20.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.GRADIENT;
            if(!(var3 !== var17)) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var20 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var19];
            var3 = var20.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.PRISM;
            if(!(var3 !== var17)) { _fun0002_ip = 64; continue _fun0002 }
case 66:
            var20 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var19];
            var3 = var20.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.NEON;
            if(!(var3 !== var17)) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var20 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var19];
            var3 = var20.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.POP;
            if(!(var3 !== var17)) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var20 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var19];
            var3 = var20.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.TOON;
            if(!(var3 !== var17)) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var19];
            var3 = var17.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.SOLID;
            var17 = new Array(2);
            var17[0] = var15;
            var3 = {};
            var3['color'] = var18;
            var17[1] = var3;
            var22 = undefined;
            var20 = undefined;
            var19 = undefined;
            var18 = undefined;
            _fun0002_ip = 73; continue _fun0002;
case 71:
            var3 = new Array(2);
            var3[0] = var15;
            var25 = var23.toon;
            var3[1] = var25;
            var25 = _closure1_slot5;
            var9 = var25.bind(var4)(var9);
            var26 = new Array(6);
            var26[0] = var9;
            var9 = var24.light2;
            var9 = var25.bind(var4)(var9);
            var26[1] = var9;
            var9 = var24.light2;
            var9 = var25.bind(var4)(var9);
            var26[2] = var9;
            var9 = var24.light1;
            var9 = var25.bind(var4)(var9);
            var26[3] = var9;
            var9 = var24.light1;
            var9 = var25.bind(var4)(var9);
            var26[4] = var9;
            var9 = var24.main;
            var9 = var25.bind(var4)(var9);
            var26[5] = var9;
            var9 = var24.toonStroke;
            var25 = var25.bind(var4)(var9);
            var27 = var10 != var25;
            var9 = undefined;
            if(!var27) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var9 = var25;
case 74:
            var20 = 90;
            var18 = var9;
            var22 = var26;
            var19 = var21;
            var17 = var3;
            _fun0002_ip = 73; continue _fun0002;
case 69:
            var9 = _closure1_slot5;
            var25 = var10 == var24;
            var3 = undefined;
            if(var25) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var3 = var24.dark2;
case 76:
            var34 = var9.bind(var4)(var3);
            var9 = _closure1_slot5;
            var25 = var10 == var24;
            var3 = undefined;
            if(var25) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var3 = var24.main;
case 78:
            var30 = var9.bind(var4)(var3);
            var3 = var10 != var24;
            var22 = undefined;
            var20 = undefined;
            var19 = undefined;
            var18 = undefined;
            var17 = var15;
            if(!var3) { _fun0002_ip = 73; continue _fun0002 }
case 80:
            var25 = _closure1_slot8;
            var9 = _closure1_slot4;
            var3 = {};
            var26 = var23.popContainer;
            var3['style'] = var26;
            var28 = _closure1_slot7;
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var8];
            var26 = var27.bind(var4)(var26);
            var27 = var26.Text;
            var26 = {};
            var38 = var26;
            var37 = var5;
            var29 = copyDataProperties(var38, var37);
            var31 = 'textStrokeWidth';
            var26[30] = var21;
            var32 = var10 != var30;
            var29 = undefined;
            if(!var32) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var29 = var30;
case 81:
            var33 = 'textStrokeColor';
            var26[32] = var29;
            var29 = new Array(2);
            var29[0] = var15;
            var30 = var23.popBackLayer;
            var29[1] = var30;
            var32 = 'style';
            var26[31] = var29;
            var30 = 'children';
            var26[29] = var6;
            var27 = var28.bind(var4)(var27, var26);
            var26 = new Array(2);
            var26[0] = var27;
            var29 = _closure1_slot7;
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var8];
            var27 = var28.bind(var4)(var27);
            var28 = var27.Text;
            var27 = {};
            var38 = var27;
            var37 = var5;
            var35 = copyDataProperties(var38, var37);
            var27[30] = var21;
            var35 = var10 != var34;
            var31 = undefined;
            if(!var35) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var31 = var34;
case 83:
            var27[32] = var31;
            var31 = new Array(2);
            var31[0] = var15;
            var33 = var23.popFrontLayer;
            var31[1] = var33;
            var27[31] = var31;
            var27[29] = var6;
            var27 = var29.bind(var4)(var28, var27);
            var26[1] = var27;
            var3['children'] = var26;
            var3 = var25.bind(var4)(var9, var3);
            return var3;
case 67:
            var9 = _closure1_slot5;
            var25 = var10 == var24;
            var3 = undefined;
            if(var25) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            var3 = var24.neonStroke;
case 85:
            var3 = var9.bind(var4)(var3);
            var24 = var10 != var3;
            var9 = undefined;
            if(!var24) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            var9 = var3;
case 87:
            var3 = new Array(2);
            var3[0] = var15;
            var23 = var23.neon;
            var3[1] = var23;
            var18 = var9;
            var22 = undefined;
            var20 = undefined;
            var19 = var21;
            var17 = var3;
            _fun0002_ip = 73; continue _fun0002;
case 64:
            var3 = var11.map;
            var2 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var9 = var3.bind(var11)(var2);
            var3 = var9.filter;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var2 = 19;
            var2 = var23[var2];
            var2 = var21.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var22 = var3.bind(var9)(var2);
            var20 = 45;
            var19 = undefined;
            var18 = undefined;
            var17 = var15;
case 73:
            var9 = _closure1_slot7;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var38 = var2;
            var37 = var5;
            var21 = copyDataProperties(var38, var37);
            var21 = 'gradientColors';
            var2[20] = var22;
            var21 = 'gradientWidth';
            var2[20] = var12;
            var22 = 'clamp';
            var21 = 'gradientMode';
            var2[20] = var22;
            var21 = new Array(1);
            var21[0] = var17;
            var17 = 'style';
            var2[16] = var21;
            var17 = 'gradientAngle';
            var2[16] = var20;
            var17 = 'textStrokeWidth';
            var2[16] = var19;
            var17 = 'textStrokeColor';
            var2[16] = var18;
            var17 = 'children';
            var2[16] = var6;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 62:
            var9 = _closure1_slot7;
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 18;
            var2 = var19[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var18 = _closure1_slot0;
            var17 = 17;
            var17 = var19[var17];
            var18 = var18.bind(var4)(var17);
            var17 = var18.getNodeText;
            var17 = var17.bind(var18)(var6);
            var18 = var10 != var17;
            if(!var18) { _fun0002_ip = 89; continue _fun0002 }
case 90:
            var16 = var17;
case 89:
            var2['name'] = var16;
            var2['textStyle'] = var15;
            var15 = {};
            var38 = var15;
            var37 = var5;
            var16 = copyDataProperties(var38, var37);
            var16 = 'gradientColors';
            var15[15] = var4;
            var16 = 'gradientWidth';
            var15[15] = var12;
            var17 = 'clamp';
            var16 = 'gradientMode';
            var15[15] = var17;
            var16 = 'gradientAngle';
            var15[15] = var4;
            var16 = 'textStrokeWidth';
            var15[15] = var4;
            var16 = 'textStrokeColor';
            var15[15] = var4;
            var2['textProps'] = var15;
            var2['colors'] = var11;
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
            var38 = var2;
            var37 = var5;
            var11 = copyDataProperties(var38, var37);
            var11 = 'gradientWidth';
            var2[10] = var12;
            var12 = 'clamp';
            var11 = 'gradientMode';
            var2[10] = var12;
            var12 = var5.style;
            var11 = new Array(2);
            var11[0] = var12;
            var10 = var10 != var14;
            if(!var10) { _fun0002_ip = 91; continue _fun0002 }
case 92:
            var12 = {};
            var12['fontFamily'] = var14;
            var12['lineHeight'] = var13;
            var10 = var12;
case 91:
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
            var38 = var1;
            var37 = var5;
            var5 = copyDataProperties(var38, var37);
            var5 = 'color';
            var1[4] = var7;
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 20;
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