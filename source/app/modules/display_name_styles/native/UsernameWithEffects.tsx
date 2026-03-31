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
    var4[var9] = var10;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.DisplayNameEffect;
    var10 = var9.TOON;
    var9 = 1.6;
    var4[var10] = var9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.DisplayNameEffect;
    var9 = var8.POP;
    var8 = 1.2;
    var4[var9] = var8;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var13 = arg2;
            var2 = _closure1_slot6;
            var1 = var2.get;
            var2 = var1.bind(var2)();
            var1 = 0.12;
            var3 = var1 * var13;
            var1 = 4;
            var16 = var1 + var3;
            var3 = _closure1_slot11;
            var6 = _closure1_slot9;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 3;
            var4 = var12[var1];
            var7 = undefined;
            var4 = var15.bind(var7)(var4);
            var4 = var4.DisplayNameEffect;
            var4 = var4.NEON;
            var4 = var6[var4];
            var17 = var3.bind(var7)(var4, var13);
            var4 = var12[var1];
            var4 = var15.bind(var7)(var4);
            var4 = var4.DisplayNameEffect;
            var4 = var4.TOON;
            var4 = var6[var4];
            var4 = var3.bind(var7)(var4, var13);
            var1 = var12[var1];
            var1 = var15.bind(var7)(var1);
            var1 = var1.DisplayNameEffect;
            var1 = var1.POP;
            var1 = var6[var1];
            var14 = var3.bind(var7)(var1, var13);
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
            var15 = -var14;
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
            var15 = -var14;
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
            var12 = -var14;
case 9:
            var2['marginRight'] = var12;
            var1['popContainer'] = var2;
            var2 = {};
            var2['color'] = var9;
            var9 = 'absolute';
            var2['position'] = var9;
            var12 = {};
            var9 = 0.04;
            var13 = var9 * var13;
            var9 = 1.2;
            var9 = var9 + var13;
            var12['translateY'] = var9;
            var9 = new Array(1);
            var9[0] = var12;
            var2['transform'] = var9;
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
            if(!var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = -var4;
            var6 = var9 / var10;
case 11:
            var2['top'] = var6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var9 = var9.bind(var7)(var6);
            var6 = var9.isIOS;
            var6 = var6.bind(var9)();
            if(var6) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = -var3;
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var9 = -var4;
            var6 = var9 / var10;
case 15:
            var2['left'] = var6;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var6 = var6.bind(var7)(var5);
            var5 = var6.isIOS;
            var5 = var5.bind(var6)();
            if(var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = -var3;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var3 = -var4;
case 18:
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
            var13 = var5.guildId;
            var6 = var5.userName;
            var _closure2_slot0 = var6;
            var9 = var5.effectDisplayType;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.EffectDisplayType;
            var9 = var1.STATIC;
case 19:
            var12 = var5.pendingDisplayNameStyles;
            var7 = var5.defaultColor;
            var2 = {'userId': 0, 'guildId': 0, 'userName': 0, 'effectDisplayType': 0, 'pendingDisplayNameStyles': 0, 'defaultColor': 0};
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
            var19 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 8;
            var2 = var14[var2];
            var11 = var19.bind(var4)(var2);
            var2 = {};
            var2['userId'] = var15;
            var2['guildId'] = var13;
            var2['pendingDisplayNameStyles'] = var12;
            var2 = var11.bind(var4)(var2);
            var12 = _closure1_slot0;
            var11 = 9;
            var11 = var14[var11];
            var15 = var12.bind(var4)(var11);
            var13 = var15.useDisplayNameStylesEnabled;
            var11 = {};
            var16 = 'UsernameWithEffects';
            var11['location'] = var16;
            var15 = var13.bind(var15)(var11);
            var11 = 10;
            var11 = var14[var11];
            var16 = var12.bind(var4)(var11);
            var13 = var16.useDisplayNameStylesFont;
            var11 = {};
            var11['displayNameStyles'] = var2;
            var13 = var13.bind(var16)(var11);
            var17 = 11;
            var11 = var14[var17];
            var20 = var12.bind(var4)(var11);
            var18 = var20.useToken;
            var11 = 5;
            var16 = var14[var11];
            var16 = var19.bind(var4)(var16);
            var16 = var16.colors;
            var16 = var16.BACKGROUND_BASE_LOW;
            var16 = var18.bind(var20)(var16);
            var17 = var14[var17];
            var18 = var12.bind(var4)(var17);
            var17 = var18.useToken;
            var11 = var14[var11];
            var11 = var19.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.WHITE;
            var19 = var17.bind(var18)(var11);
            var11 = 12;
            var11 = var14[var11];
            var14 = var12.bind(var4)(var11);
            var12 = var14.useDisplayNameStylesAccessibleColors;
            var11 = {};
            var11['displayNameStyles'] = var2;
            var11['backgroundColor'] = var16;
            var17 = var12.bind(var14)(var11);
            var11 = var17.length;
            var11 = var11 > var8;
            var14 = undefined;
            if(!var11) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var14 = var17[var8];
case 21:
            var8 = var10 == var2;
            var11 = undefined;
            if(var8) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var11 = var2.effectId;
case 23:
            if(!(var10 == var11)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 3;
            var8 = var16[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.DisplayNameEffect;
            var11 = var8.SOLID;
case 25:
            var8 = var10 != var14;
            var23 = null;
            if(!var8) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 13;
            var8 = var16[var8];
            var12 = var12.bind(var4)(var8);
            var8 = var12.generateColorVariants;
            var23 = var8.bind(var12)(var14);
case 27:
            var16 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 14;
            var12 = var12[var8];
            var12 = var16.bind(var4)(var12);
            var16 = var12.TextStyleSheet;
            var12 = var5.variant;
            var12 = var16[var12];
            var18 = var10 == var12;
            var16 = undefined;
            if(var18) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var16 = var12.fontSize;
case 29:
            var18 = var10 != var16;
            var20 = 16;
            var12 = var20;
            if(!var18) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var12 = var16;
case 31:
            _closure2_slot1 = var12;
            var16 = _closure1_slot9;
            var18 = var16[var11];
            var16 = var10 != var18;
            var21 = undefined;
            if(!var16) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var16 = _closure1_slot11;
            var21 = var16.bind(var4)(var18, var12);
case 33:
            var18 = _closure1_slot10;
            var16 = var10 == var23;
            var22 = undefined;
            if(var16) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var22 = var23.main;
case 35:
            var24 = var10 != var22;
            var16 = '';
            if(!var24) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var16 = var22;
case 37:
            var22 = var18.bind(var4)(var16, var12);
            var24 = _closure1_slot3;
            var18 = var24.useMemo;
            var16 = new Array(2);
            var16[0] = var6;
            var16[1] = var12;
            var12 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var1 = var3[var1];
                    var3 = undefined;
                    var5 = var2.bind(var3)(var1);
                    var4 = var5.getNodeText;
                    var2 = _closure2_slot0;
                    var4 = var4.bind(var5)(var2);
                    var2 = null;
                    var5 = var2 == var4;
                    if(var5) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var3 = var4.length;
case 39:
                    var4 = var2 != var3;
                    var2 = 10;
                    if(!var4) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var2 = var3;
case 41:
                    var1 = _closure2_slot1;
                    var2 = var2 * var1;
                    var1 = 0.6;
                    var1 = var2 * var1;
                    return var1;
                }
            };
            var12 = var18.bind(var24)(var12, var16);
            if(!var15) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            if(!(var10 != var2)) { _fun0002_ip = 43; continue _fun0002 }
case 45:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 7;
            var2 = var16[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.EffectDisplayType;
            var2 = var2.PLAIN;
            if(!(var9 !== var2)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            if(!(var10 != var23)) { _fun0002_ip = 46; continue _fun0002 }
case 48:
            var9 = var5.style;
            var2 = new Array(2);
            var2[0] = var9;
            var9 = var10 != var13;
            if(!var9) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var15 = {};
            var15['fontFamily'] = var13;
            var9 = var15;
case 49:
            var2[1] = var9;
            var16 = _closure1_slot0;
            var9 = _closure1_slot2;
            var15 = 3;
            var9 = var9[var15];
            var9 = var16.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.GRADIENT;
            if(!(var9 !== var11)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var16 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var15];
            var9 = var16.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.NEON;
            if(!(var9 !== var11)) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var16 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var15];
            var9 = var16.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.POP;
            if(!(var9 !== var11)) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var16 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var15];
            var9 = var16.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.TOON;
            if(!(var9 !== var11)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var15];
            var9 = var11.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.SOLID;
            var11 = new Array(2);
            var11[0] = var2;
            var9 = {};
            var9['color'] = var14;
            var11[1] = var9;
            var18 = undefined;
            var16 = undefined;
            var15 = undefined;
            var14 = undefined;
            _fun0002_ip = 59; continue _fun0002;
case 57:
            var9 = new Array(2);
            var9[0] = var2;
            var24 = var22.toon;
            var9[1] = var24;
            var24 = _closure1_slot5;
            var19 = var24.bind(var4)(var19);
            var25 = new Array(6);
            var25[0] = var19;
            var19 = var23.light2;
            var19 = var24.bind(var4)(var19);
            var25[1] = var19;
            var19 = var23.light2;
            var19 = var24.bind(var4)(var19);
            var25[2] = var19;
            var19 = var23.light1;
            var19 = var24.bind(var4)(var19);
            var25[3] = var19;
            var19 = var23.light1;
            var19 = var24.bind(var4)(var19);
            var25[4] = var19;
            var19 = var23.main;
            var19 = var24.bind(var4)(var19);
            var25[5] = var19;
            var19 = var23.toonStroke;
            var24 = var24.bind(var4)(var19);
            var26 = var10 != var24;
            var19 = undefined;
            if(!var26) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var19 = var24;
case 60:
            var16 = 90;
            var14 = var19;
            var18 = var25;
            var15 = var21;
            var11 = var9;
            _fun0002_ip = 59; continue _fun0002;
case 55:
            var19 = _closure1_slot5;
            var24 = var10 == var23;
            var9 = undefined;
            if(var24) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var9 = var23.dark2;
case 62:
            var33 = var19.bind(var4)(var9);
            var19 = _closure1_slot5;
            var24 = var10 == var23;
            var9 = undefined;
            if(var24) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var9 = var23.main;
case 64:
            var29 = var19.bind(var4)(var9);
            var9 = var10 != var23;
            var18 = undefined;
            var16 = undefined;
            var15 = undefined;
            var14 = undefined;
            var11 = var2;
            if(!var9) { _fun0002_ip = 59; continue _fun0002 }
case 66:
            var24 = _closure1_slot8;
            var19 = _closure1_slot4;
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
            var25[var30] = var21;
            var31 = var10 != var29;
            var28 = undefined;
            if(!var31) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var28 = var29;
case 67:
            var32 = 'textStrokeColor';
            var25[var32] = var28;
            var28 = new Array(2);
            var28[0] = var2;
            var29 = var22.popBackLayer;
            var28[1] = var29;
            var31 = 'style';
            var25[var31] = var28;
            var29 = 'children';
            var25[var29] = var6;
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
            var26[var30] = var21;
            var34 = var10 != var33;
            var30 = undefined;
            if(!var34) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var30 = var33;
case 69:
            var26[var32] = var30;
            var30 = new Array(2);
            var30[0] = var2;
            var32 = var22.popFrontLayer;
            var30[1] = var32;
            var26[var31] = var30;
            var26[var29] = var6;
            var26 = var28.bind(var4)(var27, var26);
            var25[1] = var26;
            var9['children'] = var25;
            var9 = var24.bind(var4)(var19, var9);
            return var9;
case 53:
            var19 = _closure1_slot5;
            var24 = var10 == var23;
            var9 = undefined;
            if(var24) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            var9 = var23.neonStroke;
case 71:
            var9 = var19.bind(var4)(var9);
            var23 = var10 != var9;
            var19 = undefined;
            if(!var23) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var19 = var9;
case 73:
            var9 = new Array(2);
            var9[0] = var2;
            var22 = var22.neon;
            var9[1] = var22;
            var14 = var19;
            var18 = undefined;
            var16 = undefined;
            var15 = var21;
            var11 = var9;
            _fun0002_ip = 59; continue _fun0002;
case 51:
            var9 = var17.map;
            var3 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var17 = var9.bind(var17)(var3);
            var9 = var17.filter;
            var19 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var20];
            var3 = var19.bind(var4)(var3);
            var3 = var3.isNotNullish;
            var18 = var9.bind(var17)(var3);
            var16 = 45;
            var15 = undefined;
            var14 = undefined;
            var11 = var2;
case 59:
            var9 = _closure1_slot7;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var37 = var2;
            var36 = var5;
            var17 = copyDataProperties(var37, var36);
            var17 = 'gradientColors';
            var2[var17] = var18;
            var17 = 'gradientWidth';
            var2[var17] = var12;
            var18 = 'clamp';
            var17 = 'gradientMode';
            var2[var17] = var18;
            var17 = new Array(1);
            var17[0] = var11;
            var11 = 'style';
            var2[var11] = var17;
            var11 = 'gradientAngle';
            var2[var11] = var16;
            var11 = 'textStrokeWidth';
            var2[var11] = var15;
            var11 = 'textStrokeColor';
            var2[var11] = var14;
            var11 = 'children';
            var2[var11] = var6;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 46:
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
            var2[var11] = var12;
            var12 = 'clamp';
            var11 = 'gradientMode';
            var2[var11] = var12;
            var12 = var5.style;
            var11 = new Array(2);
            var11[0] = var12;
            var10 = var10 != var13;
            if(!var10) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var12 = {};
            var12['fontFamily'] = var13;
            var10 = var12;
case 75:
            var11[1] = var10;
            var10 = 'style';
            var2[var10] = var11;
            var10 = 'color';
            var2[var10] = var7;
            var10 = 'children';
            var2[var10] = var6;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 43:
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
            var1[var5] = var7;
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 17;
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