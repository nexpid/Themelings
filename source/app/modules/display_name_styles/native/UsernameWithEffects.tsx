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
    var _closure1_slot9 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var4 = var4.processColor;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2, arg3, arg4, arg5) {
        var10 = arg1;
        var11 = arg3;
        var3 = arg4;
        var8 = arg5;
        var1 = {};
        var2 = {};
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var4 = 4;
        var9 = var7[var4];
        var5 = undefined;
        var9 = var6.bind(var5)(var9);
        var9 = var9.colors;
        var9 = var9.WHITE;
        var2['color'] = var9;
        var2['textShadowColor'] = var10;
        var2['textShadowRadius'] = var11;
        var9 = 0;
        var12 = {'width': 0, 'height': 0};
        var2['textShadowOffset'] = var12;
        var2['padding'] = var11;
        var11 = -var11;
        var2['margin'] = var11;
        var1['neon'] = var2;
        var2 = {};
        var11 = 'relative';
        var2['position'] = var11;
        var11 = 2;
        var11 = var8 / var11;
        var2['marginVertical'] = var11;
        var1['popContainer'] = var2;
        var2 = {};
        var2['color'] = var10;
        var10 = 'absolute';
        var2['position'] = var10;
        var10 = -var8;
        var2['top'] = var10;
        var2['left'] = var9;
        var10 = {};
        var11 = 1.2;
        var9 = arg2;
        var9 = var11 + var9;
        var10['translateY'] = var9;
        var9 = new Array(1);
        var9[0] = var10;
        var2['transform'] = var9;
        var1['popBackLayer'] = var2;
        var2 = {};
        var9 = var7[var4];
        var9 = var6.bind(var5)(var9);
        var9 = var9.colors;
        var9 = var9.WHITE;
        var2['color'] = var9;
        var2['paddingHorizontal'] = var8;
        var9 = -var8;
        var2['marginHorizontal'] = var9;
        var8 = -var8;
        var2['marginTop'] = var8;
        var1['popFrontLayer'] = var2;
        var2 = {};
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.colors;
        var4 = var4.WHITE;
        var2['color'] = var4;
        var2['padding'] = var3;
        var3 = -var3;
        var2['margin'] = var3;
        var1['toon'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var14 = var5.userId;
            var13 = var5.guildId;
            var6 = var5.userName;
            var _closure2_slot0 = var6;
            var9 = var5.effectDisplayType;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.EffectDisplayType;
            var9 = var1.STATIC;
case 2:
            var12 = var5.pendingDisplayNameStyles;
            var7 = var5.defaultColor;
            var2 = {'userId': 0, 'guildId': 0, 'userName': 0, 'effectDisplayType': 0, 'pendingDisplayNameStyles': 0, 'defaultColor': 0};
            var10 = null;
            var39 = var2;
            var38 = null;
            var1 = silentSetPrototypeOf(var39, var38);
            var8 = 0;
            var39 = {};
            var38 = var5;
            var37 = var2;
            var5 = copyDataProperties(var39, var38, var37);
            var _closure2_slot1 = var4;
            var19 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 6;
            var2 = var15[var2];
            var11 = var19.bind(var4)(var2);
            var2 = {};
            var2['userId'] = var14;
            var2['guildId'] = var13;
            var2['pendingDisplayNameStyles'] = var12;
            var2 = var11.bind(var4)(var2);
            var12 = _closure1_slot0;
            var11 = 7;
            var11 = var15[var11];
            var14 = var12.bind(var4)(var11);
            var13 = var14.useDisplayNameStylesEnabled;
            var11 = {};
            var16 = 'UsernameWithEffects';
            var11['location'] = var16;
            var14 = var13.bind(var14)(var11);
            var11 = 8;
            var11 = var15[var11];
            var16 = var12.bind(var4)(var11);
            var13 = var16.useDisplayNameStylesFont;
            var11 = {};
            var11['displayNameStyles'] = var2;
            var13 = var13.bind(var16)(var11);
            var11 = 9;
            var16 = var15[var11];
            var18 = var12.bind(var4)(var16);
            var17 = var18.useToken;
            var25 = 4;
            var16 = var15[var25];
            var16 = var19.bind(var4)(var16);
            var16 = var16.colors;
            var16 = var16.BACKGROUND_BASE_LOW;
            var16 = var17.bind(var18)(var16);
            var11 = var15[var11];
            var18 = var12.bind(var4)(var11);
            var17 = var18.useToken;
            var11 = var15[var25];
            var11 = var19.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.WHITE;
            var19 = var17.bind(var18)(var11);
            var11 = 10;
            var11 = var15[var11];
            var15 = var12.bind(var4)(var11);
            var12 = var15.useDisplayNameStylesAccessibleColors;
            var11 = {};
            var11['displayNameStyles'] = var2;
            var11['backgroundColor'] = var16;
            var16 = var12.bind(var15)(var11);
            var11 = var16.length;
            var11 = var11 > var8;
            var12 = undefined;
            if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var16[var8];
case 4:
            var8 = var10 == var2;
            var11 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var2.effectId;
case 6:
            if(!(var10 == var11)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 11;
            var8 = var17[var8];
            var8 = var15.bind(var4)(var8);
            var8 = var8.DisplayNameEffect;
            var11 = var8.SOLID;
case 8:
            var8 = var10 != var12;
            var22 = null;
            if(!var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 12;
            var8 = var17[var8];
            var15 = var15.bind(var4)(var8);
            var8 = var15.generateColorVariants;
            var22 = var8.bind(var15)(var12);
case 10:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 13;
            var15 = var15[var8];
            var15 = var17.bind(var4)(var15);
            var17 = var15.TextStyleSheet;
            var15 = var5.variant;
            var15 = var17[var15];
            var18 = var10 == var15;
            var17 = undefined;
            if(var18) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var17 = var15.fontSize;
case 12:
            var18 = var10 != var17;
            var15 = 16;
            if(!var18) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var15 = var17;
case 14:
            _closure2_slot1 = var15;
            var18 = _closure1_slot9;
            var17 = 1;
            var20 = var18.bind(var4)(var17, var15);
            var17 = 1.6;
            var23 = var18.bind(var4)(var17, var15);
            var17 = 1.2;
            var33 = var18.bind(var4)(var17, var15);
            var24 = _closure1_slot8;
            var18 = var10 == var22;
            var17 = undefined;
            if(var18) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var17 = var22.main;
case 16:
            var18 = var10 != var17;
            var21 = '';
            if(!var18) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var21 = var17;
case 18:
            var17 = 0.04;
            var38 = var17 * var15;
            var17 = 0.12;
            var17 = var17 * var15;
            var37 = var25 + var17;
            var40 = undefined;
            var39 = var21;
            var36 = var23;
            var35 = var33;
            var21 = var40[var24](var39, var38, var37, var36, var35, var34);
            var24 = _closure1_slot3;
            var18 = var24.useMemo;
            var17 = new Array(2);
            var17[0] = var6;
            var17[1] = var15;
            var15 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = undefined;
                    var5 = var2.bind(var3)(var1);
                    var4 = var5.getNodeText;
                    var2 = _closure2_slot0;
                    var4 = var4.bind(var5)(var2);
                    var2 = null;
                    var5 = var2 == var4;
                    if(var5) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var3 = var4.length;
case 20:
                    var4 = var2 != var3;
                    var2 = 10;
                    if(!var4) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var2 = var3;
case 22:
                    var1 = _closure2_slot1;
                    var2 = var2 * var1;
                    var1 = 0.6;
                    var1 = var2 * var1;
                    return var1;
                }
            };
            var17 = var18.bind(var24)(var15, var17);
            if(!var14) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            if(!(var10 != var2)) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 5;
            var2 = var15[var2];
            var2 = var14.bind(var4)(var2);
            var2 = var2.EffectDisplayType;
            var2 = var2.PLAIN;
            if(!(var9 !== var2)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            if(!(var10 != var22)) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var9 = var5.style;
            var2 = new Array(2);
            var2[0] = var9;
            var9 = var10 != var13;
            if(!var9) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var14 = {};
            var14['fontFamily'] = var13;
            var9 = var14;
case 30:
            var2[1] = var9;
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var14 = 11;
            var9 = var9[var14];
            var9 = var15.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.GRADIENT;
            if(!(var9 !== var11)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var14];
            var9 = var15.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.NEON;
            if(!(var9 !== var11)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var14];
            var9 = var15.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.POP;
            if(!(var9 !== var11)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var14];
            var9 = var15.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.TOON;
            if(!(var9 !== var11)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var14];
            var9 = var11.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.SOLID;
            var11 = new Array(2);
            var11[0] = var2;
            var9 = {};
            var9['color'] = var12;
            var11[1] = var9;
            var18 = undefined;
            var15 = undefined;
            var14 = undefined;
            var12 = undefined;
            _fun0001_ip = 40; continue _fun0001;
case 38:
            var9 = new Array(2);
            var9[0] = var2;
            var24 = var21.toon;
            var9[1] = var24;
            var24 = _closure1_slot5;
            var19 = var24.bind(var4)(var19);
            var25 = new Array(6);
            var25[0] = var19;
            var19 = var22.light2;
            var19 = var24.bind(var4)(var19);
            var25[1] = var19;
            var19 = var22.light2;
            var19 = var24.bind(var4)(var19);
            var25[2] = var19;
            var19 = var22.light1;
            var19 = var24.bind(var4)(var19);
            var25[3] = var19;
            var19 = var22.light1;
            var19 = var24.bind(var4)(var19);
            var25[4] = var19;
            var19 = var22.main;
            var19 = var24.bind(var4)(var19);
            var25[5] = var19;
            var19 = var22.toonStroke;
            var24 = var24.bind(var4)(var19);
            var26 = var10 != var24;
            var19 = undefined;
            if(!var26) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var19 = var24;
case 41:
            var15 = 90;
            var12 = var19;
            var18 = var25;
            var14 = var23;
            var11 = var9;
            _fun0001_ip = 40; continue _fun0001;
case 36:
            var19 = _closure1_slot5;
            var23 = var10 == var22;
            var9 = undefined;
            if(var23) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var9 = var22.dark2;
case 43:
            var32 = var19.bind(var4)(var9);
            var19 = _closure1_slot5;
            var23 = var10 == var22;
            var9 = undefined;
            if(var23) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var9 = var22.main;
case 45:
            var28 = var19.bind(var4)(var9);
            var9 = var10 != var22;
            var18 = undefined;
            var15 = undefined;
            var14 = undefined;
            var12 = undefined;
            var11 = var2;
            if(!var9) { _fun0001_ip = 40; continue _fun0001 }
case 47:
            var23 = _closure1_slot7;
            var19 = _closure1_slot4;
            var9 = {};
            var24 = var21.popContainer;
            var9['style'] = var24;
            var26 = _closure1_slot6;
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var8];
            var24 = var25.bind(var4)(var24);
            var25 = var24.Text;
            var24 = {};
            var39 = var24;
            var38 = var5;
            var27 = copyDataProperties(var39, var38);
            var29 = 'textStrokeWidth';
            var24[var29] = var33;
            var30 = var10 != var28;
            var27 = undefined;
            if(!var30) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var27 = var28;
case 48:
            var31 = 'textStrokeColor';
            var24[var31] = var27;
            var27 = new Array(2);
            var27[0] = var2;
            var28 = var21.popBackLayer;
            var27[1] = var28;
            var30 = 'style';
            var24[var30] = var27;
            var28 = 'children';
            var24[var28] = var6;
            var25 = var26.bind(var4)(var25, var24);
            var24 = new Array(2);
            var24[0] = var25;
            var27 = _closure1_slot6;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var8];
            var25 = var26.bind(var4)(var25);
            var26 = var25.Text;
            var25 = {};
            var39 = var25;
            var38 = var5;
            var34 = copyDataProperties(var39, var38);
            var25[var29] = var33;
            var33 = var10 != var32;
            var29 = undefined;
            if(!var33) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var29 = var32;
case 50:
            var25[var31] = var29;
            var29 = new Array(2);
            var29[0] = var2;
            var31 = var21.popFrontLayer;
            var29[1] = var31;
            var25[var30] = var29;
            var25[var28] = var6;
            var25 = var27.bind(var4)(var26, var25);
            var24[1] = var25;
            var9['children'] = var24;
            var9 = var23.bind(var4)(var19, var9);
            return var9;
case 34:
            var19 = _closure1_slot5;
            var23 = var10 == var22;
            var9 = undefined;
            if(var23) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var9 = var22.neonStroke;
case 52:
            var9 = var19.bind(var4)(var9);
            var22 = var10 != var9;
            var19 = undefined;
            if(!var22) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var19 = var9;
case 54:
            var9 = new Array(2);
            var9[0] = var2;
            var21 = var21.neon;
            var9[1] = var21;
            var12 = var19;
            var18 = undefined;
            var15 = undefined;
            var14 = var20;
            var11 = var9;
            _fun0001_ip = 40; continue _fun0001;
case 32:
            var9 = var16.map;
            var3 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var16 = var9.bind(var16)(var3);
            var9 = var16.filter;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = 15;
            var3 = var20[var3];
            var3 = var19.bind(var4)(var3);
            var3 = var3.isNotNullish;
            var18 = var9.bind(var16)(var3);
            var15 = 45;
            var14 = undefined;
            var12 = undefined;
            var11 = var2;
case 40:
            var9 = _closure1_slot6;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var39 = var2;
            var38 = var5;
            var16 = copyDataProperties(var39, var38);
            var16 = 'gradientColors';
            var2[var16] = var18;
            var16 = 'gradientWidth';
            var2[var16] = var17;
            var17 = 'clamp';
            var16 = 'gradientMode';
            var2[var16] = var17;
            var16 = new Array(1);
            var16[0] = var11;
            var11 = 'style';
            var2[var11] = var16;
            var11 = 'gradientAngle';
            var2[var11] = var15;
            var11 = 'textStrokeWidth';
            var2[var11] = var14;
            var11 = 'textStrokeColor';
            var2[var11] = var12;
            var11 = 'children';
            var2[var11] = var6;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 27:
            var9 = _closure1_slot6;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var39 = var2;
            var38 = var5;
            var11 = copyDataProperties(var39, var38);
            var12 = var5.style;
            var11 = new Array(2);
            var11[0] = var12;
            var10 = var10 != var13;
            if(!var10) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var12 = {};
            var12['fontFamily'] = var13;
            var10 = var12;
case 56:
            var11[1] = var10;
            var10 = 'style';
            var2[var10] = var11;
            var10 = 'color';
            var2[var10] = var7;
            var10 = 'children';
            var2[var10] = var6;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 24:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var39 = var1;
            var38 = var5;
            var5 = copyDataProperties(var39, var38);
            var5 = 'color';
            var1[var5] = var7;
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 16;
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