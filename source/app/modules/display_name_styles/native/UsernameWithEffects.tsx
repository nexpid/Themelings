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
            var15 = var5.effectDisplayType;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.EffectDisplayType;
            var15 = var1.STATIC;
case 22:
            var11 = var5.pendingDisplayNameStyles;
            var7 = var5.defaultColor;
            var16 = var5.customFontLineHeight;
            var3 = {'userId': 0, 'guildId': 0, 'userName': 0, 'effectDisplayType': 0, 'pendingDisplayNameStyles': 0, 'defaultColor': 0, 'customFontLineHeight': 0};
            var10 = null;
            var42 = var3;
            var41 = null;
            var1 = silentSetPrototypeOf(var42, var41);
            var25 = 0;
            var42 = {};
            var41 = var5;
            var40 = var3;
            var5 = copyDataProperties(var42, var41, var40);
            var _closure2_slot1 = var4;
            var21 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 10;
            var3 = var9[var3];
            var8 = var21.bind(var4)(var3);
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
            var17 = 'UsernameWithEffects';
            var13 = var8.bind(var12)(var17);
            var19 = 12;
            var8 = var9[var19];
            var12 = var11.bind(var4)(var8);
            var8 = var12.applyFlywheelViewingFallback;
            var8 = var8.bind(var12)(var3, var13);
            var12 = 13;
            var12 = var9[var12];
            var14 = var11.bind(var4)(var12);
            var13 = var14.useDisplayNameStylesEnabled;
            var12 = {};
            var12['location'] = var17;
            var17 = var13.bind(var14)(var12);
            var12 = 14;
            var12 = var9[var12];
            var14 = var11.bind(var4)(var12);
            var13 = var14.useDisplayNameStylesFont;
            var12 = {};
            var12['displayNameStyles'] = var8;
            var14 = var13.bind(var14)(var12);
            var13 = 15;
            var12 = var9[var13];
            var22 = var11.bind(var4)(var12);
            var20 = var22.useToken;
            var12 = 6;
            var18 = var9[var12];
            var18 = var21.bind(var4)(var18);
            var18 = var18.colors;
            var18 = var18.BACKGROUND_BASE_LOW;
            var18 = var20.bind(var22)(var18);
            var13 = var9[var13];
            var20 = var11.bind(var4)(var13);
            var13 = var20.useToken;
            var12 = var9[var12];
            var12 = var21.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.WHITE;
            var21 = var13.bind(var20)(var12);
            var12 = 16;
            var9 = var9[var12];
            var13 = var11.bind(var4)(var9);
            var11 = var13.useDisplayNameStylesAccessibleColors;
            var9 = {};
            var9['displayNameStyles'] = var8;
            var9['backgroundColor'] = var18;
            var11 = var11.bind(var13)(var9);
            var9 = var11.length;
            var9 = var9 > var25;
            var18 = undefined;
            if(!var9) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var18 = var11[var25];
case 24:
            var13 = var10 == var8;
            var9 = undefined;
            if(var13) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var9 = var8.effectId;
case 26:
            if(!(var10 == var9)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var13 = _closure1_slot0;
            var20 = _closure1_slot2;
            var8 = 4;
            var8 = var20[var8];
            var8 = var13.bind(var4)(var8);
            var8 = var8.DisplayNameEffect;
            var9 = var8.SOLID;
case 28:
            var8 = var10 != var18;
            var28 = null;
            if(!var8) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var19];
            var13 = var13.bind(var4)(var8);
            var8 = var13.generateColorVariants;
            var28 = var8.bind(var13)(var18);
case 30:
            var19 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 17;
            var13 = var13[var8];
            var13 = var19.bind(var4)(var13);
            var19 = var13.TextStyleSheet;
            var13 = var5.variant;
            var19 = var19[var13];
            var20 = var10 == var19;
            var13 = undefined;
            if(var20) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var13 = var19.fontSize;
case 32:
            var19 = var10 != var13;
            if(!var19) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var12 = var13;
case 34:
            _closure2_slot1 = var12;
            var19 = var10 != var14;
            var13 = undefined;
            if(!var19) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var13 = var16;
case 36:
            var16 = _closure1_slot10;
            var19 = var16[var9];
            var16 = var10 != var19;
            var24 = undefined;
            if(!var16) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var16 = _closure1_slot12;
            var24 = var16.bind(var4)(var19, var12);
case 38:
            var20 = _closure1_slot11;
            var16 = var10 == var28;
            var22 = undefined;
            if(var16) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var22 = var28.main;
case 40:
            var23 = var10 != var22;
            var16 = '';
            var19 = var16;
            if(!var23) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var19 = var22;
case 42:
            var27 = var20.bind(var4)(var19, var12);
            var22 = _closure1_slot3;
            var20 = var22.useMemo;
            var19 = new Array(2);
            var19[0] = var6;
            var19[1] = var12;
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
                    if(var5) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                    var3 = var4.length;
case 44:
                    var4 = var2 != var3;
                    var2 = 10;
                    if(!var4) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                    var2 = var3;
case 46:
                    var1 = _closure2_slot1;
                    var2 = var2 * var1;
                    var1 = 0.6;
                    var1 = var2 * var1;
                    return var1;
                }
            };
            var12 = var20.bind(var22)(var12, var19);
            if(!var17) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            if(!(var10 != var3)) { _fun0002_ip = 48; continue _fun0002 }
case 50:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 9;
            var3 = var19[var3];
            var3 = var17.bind(var4)(var3);
            var3 = var3.EffectDisplayType;
            var3 = var3.PLAIN;
            if(!(var15 !== var3)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            if(!(var10 != var28)) { _fun0002_ip = 51; continue _fun0002 }
case 17:
            var3 = var5.style;
            var15 = new Array(2);
            var15[0] = var3;
            var3 = var10 != var14;
            if(!var3) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var17 = {};
            var17['fontFamily'] = var14;
            var17['lineHeight'] = var13;
            var3 = var17;
case 53:
            var15[1] = var3;
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = 4;
            var3 = var3[var26];
            var3 = var17.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.GUMMY;
            if(!(var9 !== var3)) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var26];
            var3 = var17.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.GRADIENT;
            if(!(var3 !== var9)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var26];
            var3 = var17.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.PRISM;
            if(!(var3 !== var9)) { _fun0002_ip = 57; continue _fun0002 }
case 59:
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var26];
            var3 = var17.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.NEON;
            if(!(var3 !== var9)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var26];
            var3 = var17.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.POP;
            if(!(var3 !== var9)) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var26];
            var3 = var17.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.TOON;
            if(!(var3 !== var9)) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var26];
            var3 = var17.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.SOLID;
            var17 = new Array(2);
            var17[0] = var15;
            var3 = {};
            var3['color'] = var18;
            var17[1] = var3;
            var23 = undefined;
            var20 = undefined;
            var19 = undefined;
            var18 = undefined;
            var22 = var12;
            _fun0002_ip = 66; continue _fun0002;
case 64:
            var3 = new Array(2);
            var3[0] = var15;
            var29 = var27.toon;
            var3[1] = var29;
            var29 = _closure1_slot5;
            var21 = var29.bind(var4)(var21);
            var30 = new Array(6);
            var30[0] = var21;
            var21 = var28.light2;
            var21 = var29.bind(var4)(var21);
            var30[1] = var21;
            var21 = var28.light2;
            var21 = var29.bind(var4)(var21);
            var30[2] = var21;
            var21 = var28.light1;
            var21 = var29.bind(var4)(var21);
            var30[3] = var21;
            var21 = var28.light1;
            var21 = var29.bind(var4)(var21);
            var30[4] = var21;
            var21 = var28.main;
            var21 = var29.bind(var4)(var21);
            var30[5] = var21;
            var21 = var28.toonStroke;
            var29 = var29.bind(var4)(var21);
            var31 = var10 != var29;
            var21 = undefined;
            if(!var31) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var21 = var29;
case 67:
            var20 = 90;
            var18 = var21;
            var23 = var30;
            var19 = var24;
            var17 = var3;
            var22 = var12;
            _fun0002_ip = 66; continue _fun0002;
case 62:
            var21 = _closure1_slot5;
            var29 = var10 == var28;
            var3 = undefined;
            if(var29) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var3 = var28.dark2;
case 69:
            var38 = var21.bind(var4)(var3);
            var21 = _closure1_slot5;
            var29 = var10 == var28;
            var3 = undefined;
            if(var29) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            var3 = var28.main;
case 71:
            var34 = var21.bind(var4)(var3);
            var3 = var10 != var28;
            var23 = undefined;
            var20 = undefined;
            var19 = undefined;
            var18 = undefined;
            var17 = var15;
            var22 = var12;
            if(!var3) { _fun0002_ip = 66; continue _fun0002 }
case 73:
            var29 = _closure1_slot9;
            var21 = _closure1_slot4;
            var3 = {};
            var30 = var27.popContainer;
            var3['style'] = var30;
            var32 = _closure1_slot8;
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var8];
            var30 = var31.bind(var4)(var30);
            var31 = var30.Text;
            var30 = {};
            var42 = var30;
            var41 = var5;
            var33 = copyDataProperties(var42, var41);
            var35 = 'textStrokeWidth';
            var30[34] = var24;
            var36 = var10 != var34;
            var33 = undefined;
            if(!var36) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var33 = var34;
case 74:
            var37 = 'textStrokeColor';
            var30[36] = var33;
            var33 = new Array(2);
            var33[0] = var15;
            var34 = var27.popBackLayer;
            var33[1] = var34;
            var36 = 'style';
            var30[35] = var33;
            var34 = 'children';
            var30[33] = var6;
            var31 = var32.bind(var4)(var31, var30);
            var30 = new Array(2);
            var30[0] = var31;
            var33 = _closure1_slot8;
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var8];
            var31 = var32.bind(var4)(var31);
            var32 = var31.Text;
            var31 = {};
            var42 = var31;
            var41 = var5;
            var39 = copyDataProperties(var42, var41);
            var31[34] = var24;
            var39 = var10 != var38;
            var35 = undefined;
            if(!var39) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var35 = var38;
case 76:
            var31[36] = var35;
            var35 = new Array(2);
            var35[0] = var15;
            var37 = var27.popFrontLayer;
            var35[1] = var37;
            var31[35] = var35;
            var31[33] = var6;
            var31 = var33.bind(var4)(var32, var31);
            var30[1] = var31;
            var3['children'] = var30;
            var3 = var29.bind(var4)(var21, var3);
            return var3;
case 60:
            var21 = _closure1_slot5;
            var29 = var10 == var28;
            var3 = undefined;
            if(var29) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var3 = var28.neonStroke;
case 78:
            var3 = var21.bind(var4)(var3);
            var28 = var10 != var3;
            var21 = undefined;
            if(!var28) { _fun0002_ip = 80; continue _fun0002 }
case 81:
            var21 = var3;
case 80:
            var3 = new Array(2);
            var3[0] = var15;
            var27 = var27.neon;
            var3[1] = var27;
            var18 = var21;
            var23 = undefined;
            var20 = undefined;
            var19 = var24;
            var17 = var3;
            var22 = var12;
            _fun0002_ip = 66; continue _fun0002;
case 57:
            var3 = var11.map;
            var2 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var27 = var3.bind(var11)(var2);
            var24 = var27.filter;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var21 = 20;
            var21 = var2[var21];
            var21 = var3.bind(var4)(var21);
            var21 = var21.isNotNullish;
            var21 = var24.bind(var27)(var21);
            var2 = var2[var26];
            var2 = var3.bind(var4)(var2);
            var2 = var2.DisplayNameEffect;
            var2 = var2.PRISM;
            var3 = 45;
            if(!(var9 === var2)) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var3 = 0;
case 82:
            var24 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var26];
            var2 = var24.bind(var4)(var2);
            var2 = var2.DisplayNameEffect;
            var2 = var2.PRISM;
            var23 = var21;
            var20 = var3;
            var19 = undefined;
            var18 = undefined;
            var17 = var15;
            var22 = var12;
            if(!(var9 === var2)) { _fun0002_ip = 66; continue _fun0002 }
case 84:
            var2 = var21.length;
            var9 = var21;
            if(!(var2 > var25)) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            var2 = new Array(1);
            var42 = var2;
            var41 = var21;
            var40 = 0;
            var24 = arraySpread(var42, var41, var40);
            var21 = var21[var25];
            var2[23] = var21;
            var21 = 1;
            var21 = var24 + var21;
            var9 = var2;
case 85:
            var2 = global;
            var24 = var2.Math;
            var21 = var24.max;
            var2 = _closure1_slot7;
            var22 = var21.bind(var24)(var12, var2);
            var23 = var9;
            var20 = var3;
            var19 = undefined;
            var18 = undefined;
            var17 = var15;
case 66:
            var9 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var42 = var2;
            var41 = var5;
            var21 = copyDataProperties(var42, var41);
            var21 = 'gradientColors';
            var2[20] = var23;
            var21 = 'gradientWidth';
            var2[20] = var22;
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
case 55:
            var9 = _closure1_slot8;
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 19;
            var2 = var19[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var18 = _closure1_slot0;
            var17 = 18;
            var17 = var19[var17];
            var18 = var18.bind(var4)(var17);
            var17 = var18.getNodeText;
            var17 = var17.bind(var18)(var6);
            var18 = var10 != var17;
            if(!var18) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            var16 = var17;
case 87:
            var2['name'] = var16;
            var2['textStyle'] = var15;
            var15 = {};
            var42 = var15;
            var41 = var5;
            var16 = copyDataProperties(var42, var41);
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
case 51:
            var9 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var42 = var2;
            var41 = var5;
            var11 = copyDataProperties(var42, var41);
            var11 = 'gradientWidth';
            var2[10] = var12;
            var12 = 'clamp';
            var11 = 'gradientMode';
            var2[10] = var12;
            var12 = var5.style;
            var11 = new Array(2);
            var11[0] = var12;
            var10 = var10 != var14;
            if(!var10) { _fun0002_ip = 89; continue _fun0002 }
case 90:
            var12 = {};
            var12['fontFamily'] = var14;
            var12['lineHeight'] = var13;
            var10 = var12;
case 89:
            var11[1] = var10;
            var10 = 'style';
            var2[9] = var11;
            var10 = 'color';
            var2[9] = var7;
            var10 = 'children';
            var2[9] = var6;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 48:
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var42 = var1;
            var41 = var5;
            var5 = copyDataProperties(var42, var41);
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