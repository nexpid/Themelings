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
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var6 = arg3;
            var3 = arg4;
            var12 = arg5;
            var1 = {};
            var2 = {};
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 4;
            var5 = var11[var4];
            var9 = undefined;
            var5 = var10.bind(var9)(var5);
            var5 = var5.colors;
            var5 = var5.WHITE;
            var2['color'] = var5;
            var2['textShadowColor'] = var7;
            var2['textShadowRadius'] = var6;
            var5 = 0;
            var10 = {'width': 0, 'height': 0};
            var2['textShadowOffset'] = var10;
            var2['padding'] = var6;
            var13 = -var6;
            var14 = _closure1_slot0;
            var10 = 5;
            var11 = var11[var10];
            var14 = var14.bind(var9)(var11);
            var11 = var14.isIOS;
            var14 = var11.bind(var14)();
            var11 = 0;
            if(!var14) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = 1;
case 2:
            var11 = var13 - var11;
            var2['marginVertical'] = var11;
            var13 = -var6;
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var11 = var11.bind(var9)(var6);
            var6 = var11.isIOS;
            var14 = var6.bind(var11)();
            var6 = 1.5;
            var11 = var6;
            if(!var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = 0;
case 4:
            var11 = var13 - var11;
            var2['marginHorizontal'] = var11;
            var1['neon'] = var2;
            var2 = {};
            var11 = 'relative';
            var2['position'] = var11;
            var11 = 2;
            var13 = var12 / var11;
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var10];
            var14 = var14.bind(var9)(var11);
            var11 = var14.isIOS;
            var14 = var11.bind(var14)();
            var11 = 0;
            if(!var14) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = 1;
case 6:
            var11 = var13 - var11;
            var2['marginVertical'] = var11;
            var1['popContainer'] = var2;
            var2 = {};
            var2['color'] = var7;
            var7 = 'absolute';
            var2['position'] = var7;
            var7 = -var12;
            var2['top'] = var7;
            var2['left'] = var5;
            var11 = {};
            var13 = 1.2;
            var7 = arg2;
            var7 = var13 + var7;
            var11['translateY'] = var7;
            var7 = new Array(1);
            var7[0] = var11;
            var2['transform'] = var7;
            var1['popBackLayer'] = var2;
            var2 = {};
            var11 = _closure1_slot1;
            var7 = _closure1_slot2;
            var13 = var7[var4];
            var13 = var11.bind(var9)(var13);
            var13 = var13.colors;
            var13 = var13.WHITE;
            var2['color'] = var13;
            var2['paddingHorizontal'] = var12;
            var13 = -var12;
            var2['marginHorizontal'] = var13;
            var12 = -var12;
            var2['marginTop'] = var12;
            var1['popFrontLayer'] = var2;
            var2 = {};
            var4 = var7[var4];
            var4 = var11.bind(var9)(var4);
            var4 = var4.colors;
            var4 = var4.WHITE;
            var2['color'] = var4;
            var2['padding'] = var3;
            var4 = -var3;
            var8 = _closure1_slot0;
            var7 = var7[var10];
            var8 = var8.bind(var9)(var7);
            var7 = var8.isIOS;
            var7 = var7.bind(var8)();
            var5 = 0;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var6;
case 8:
            var4 = var4 - var5;
            var2['marginVertical'] = var4;
            var3 = -var3;
            var2['marginHorizontal'] = var3;
            var1['toon'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var14 = var5.userId;
            var13 = var5.guildId;
            var6 = var5.userName;
            var _closure2_slot0 = var6;
            var9 = var5.effectDisplayType;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.EffectDisplayType;
            var9 = var1.STATIC;
case 10:
            var12 = var5.pendingDisplayNameStyles;
            var7 = var5.defaultColor;
            var2 = {'userId': 0, 'guildId': 0, 'userName': 0, 'effectDisplayType': 0, 'pendingDisplayNameStyles': 0, 'defaultColor': 0};
            var10 = null;
            var40 = var2;
            var39 = null;
            var1 = silentSetPrototypeOf(var40, var39);
            var8 = 0;
            var40 = {};
            var39 = var5;
            var38 = var2;
            var5 = copyDataProperties(var40, var39, var38);
            var _closure2_slot1 = var4;
            var19 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 7;
            var2 = var15[var2];
            var11 = var19.bind(var4)(var2);
            var2 = {};
            var2['userId'] = var14;
            var2['guildId'] = var13;
            var2['pendingDisplayNameStyles'] = var12;
            var2 = var11.bind(var4)(var2);
            var12 = _closure1_slot0;
            var11 = 8;
            var11 = var15[var11];
            var14 = var12.bind(var4)(var11);
            var13 = var14.useDisplayNameStylesEnabled;
            var11 = {};
            var16 = 'UsernameWithEffects';
            var11['location'] = var16;
            var14 = var13.bind(var14)(var11);
            var11 = 9;
            var11 = var15[var11];
            var16 = var12.bind(var4)(var11);
            var13 = var16.useDisplayNameStylesFont;
            var11 = {};
            var11['displayNameStyles'] = var2;
            var13 = var13.bind(var16)(var11);
            var11 = 10;
            var16 = var15[var11];
            var18 = var12.bind(var4)(var16);
            var17 = var18.useToken;
            var26 = 4;
            var16 = var15[var26];
            var16 = var19.bind(var4)(var16);
            var16 = var16.colors;
            var16 = var16.BACKGROUND_BASE_LOW;
            var16 = var17.bind(var18)(var16);
            var11 = var15[var11];
            var18 = var12.bind(var4)(var11);
            var17 = var18.useToken;
            var11 = var15[var26];
            var11 = var19.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.WHITE;
            var19 = var17.bind(var18)(var11);
            var11 = 11;
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
            if(!var11) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var12 = var16[var8];
case 12:
            var8 = var10 == var2;
            var11 = undefined;
            if(var8) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var11 = var2.effectId;
case 14:
            if(!(var10 == var11)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 12;
            var8 = var17[var8];
            var8 = var15.bind(var4)(var8);
            var8 = var8.DisplayNameEffect;
            var11 = var8.SOLID;
case 16:
            var8 = var10 != var12;
            var23 = null;
            if(!var8) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 13;
            var8 = var17[var8];
            var15 = var15.bind(var4)(var8);
            var8 = var15.generateColorVariants;
            var23 = var8.bind(var15)(var12);
case 18:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 14;
            var15 = var15[var8];
            var15 = var17.bind(var4)(var15);
            var17 = var15.TextStyleSheet;
            var15 = var5.variant;
            var15 = var17[var15];
            var18 = var10 == var15;
            var17 = undefined;
            if(var18) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var17 = var15.fontSize;
case 20:
            var18 = var10 != var17;
            var20 = 16;
            var15 = var20;
            if(!var18) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var15 = var17;
case 22:
            _closure2_slot1 = var15;
            var18 = _closure1_slot9;
            var17 = 1;
            var21 = var18.bind(var4)(var17, var15);
            var17 = 1.6;
            var24 = var18.bind(var4)(var17, var15);
            var17 = 1.2;
            var34 = var18.bind(var4)(var17, var15);
            var25 = _closure1_slot8;
            var18 = var10 == var23;
            var17 = undefined;
            if(var18) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var17 = var23.main;
case 24:
            var18 = var10 != var17;
            var22 = '';
            if(!var18) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var22 = var17;
case 26:
            var17 = 0.04;
            var39 = var17 * var15;
            var17 = 0.12;
            var17 = var17 * var15;
            var38 = var26 + var17;
            var41 = undefined;
            var40 = var22;
            var37 = var24;
            var36 = var34;
            var22 = var41[var25](var40, var39, var38, var37, var36, var35);
            var25 = _closure1_slot3;
            var18 = var25.useMemo;
            var17 = new Array(2);
            var17[0] = var6;
            var17[1] = var15;
            var15 = function() {
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
                    if(var5) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var3 = var4.length;
case 28:
                    var4 = var2 != var3;
                    var2 = 10;
                    if(!var4) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var2 = var3;
case 30:
                    var1 = _closure2_slot1;
                    var2 = var2 * var1;
                    var1 = 0.6;
                    var1 = var2 * var1;
                    return var1;
                }
            };
            var17 = var18.bind(var25)(var15, var17);
            if(!var14) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            if(!(var10 != var2)) { _fun0002_ip = 32; continue _fun0002 }
case 34:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 6;
            var2 = var15[var2];
            var2 = var14.bind(var4)(var2);
            var2 = var2.EffectDisplayType;
            var2 = var2.PLAIN;
            if(!(var9 !== var2)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            if(!(var10 != var23)) { _fun0002_ip = 35; continue _fun0002 }
case 37:
            var9 = var5.style;
            var2 = new Array(2);
            var2[0] = var9;
            var9 = var10 != var13;
            if(!var9) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var14 = {};
            var14['fontFamily'] = var13;
            var9 = var14;
case 38:
            var2[1] = var9;
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var14 = 12;
            var9 = var9[var14];
            var9 = var15.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.GRADIENT;
            if(!(var9 !== var11)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var14];
            var9 = var15.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.NEON;
            if(!(var9 !== var11)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var14];
            var9 = var15.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.POP;
            if(!(var9 !== var11)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var14];
            var9 = var15.bind(var4)(var9);
            var9 = var9.DisplayNameEffect;
            var9 = var9.TOON;
            if(!(var9 !== var11)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
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
            _fun0002_ip = 48; continue _fun0002;
case 46:
            var9 = new Array(2);
            var9[0] = var2;
            var25 = var22.toon;
            var9[1] = var25;
            var25 = _closure1_slot5;
            var19 = var25.bind(var4)(var19);
            var26 = new Array(6);
            var26[0] = var19;
            var19 = var23.light2;
            var19 = var25.bind(var4)(var19);
            var26[1] = var19;
            var19 = var23.light2;
            var19 = var25.bind(var4)(var19);
            var26[2] = var19;
            var19 = var23.light1;
            var19 = var25.bind(var4)(var19);
            var26[3] = var19;
            var19 = var23.light1;
            var19 = var25.bind(var4)(var19);
            var26[4] = var19;
            var19 = var23.main;
            var19 = var25.bind(var4)(var19);
            var26[5] = var19;
            var19 = var23.toonStroke;
            var25 = var25.bind(var4)(var19);
            var27 = var10 != var25;
            var19 = undefined;
            if(!var27) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var19 = var25;
case 49:
            var15 = 90;
            var12 = var19;
            var18 = var26;
            var14 = var24;
            var11 = var9;
            _fun0002_ip = 48; continue _fun0002;
case 44:
            var19 = _closure1_slot5;
            var24 = var10 == var23;
            var9 = undefined;
            if(var24) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var9 = var23.dark2;
case 51:
            var33 = var19.bind(var4)(var9);
            var19 = _closure1_slot5;
            var24 = var10 == var23;
            var9 = undefined;
            if(var24) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var9 = var23.main;
case 53:
            var29 = var19.bind(var4)(var9);
            var9 = var10 != var23;
            var18 = undefined;
            var15 = undefined;
            var14 = undefined;
            var12 = undefined;
            var11 = var2;
            if(!var9) { _fun0002_ip = 48; continue _fun0002 }
case 55:
            var24 = _closure1_slot7;
            var19 = _closure1_slot4;
            var9 = {};
            var25 = var22.popContainer;
            var9['style'] = var25;
            var27 = _closure1_slot6;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var8];
            var25 = var26.bind(var4)(var25);
            var26 = var25.Text;
            var25 = {};
            var40 = var25;
            var39 = var5;
            var28 = copyDataProperties(var40, var39);
            var30 = 'textStrokeWidth';
            var25[var30] = var34;
            var31 = var10 != var29;
            var28 = undefined;
            if(!var31) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var28 = var29;
case 56:
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
            var28 = _closure1_slot6;
            var27 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var8];
            var26 = var27.bind(var4)(var26);
            var27 = var26.Text;
            var26 = {};
            var40 = var26;
            var39 = var5;
            var35 = copyDataProperties(var40, var39);
            var26[var30] = var34;
            var34 = var10 != var33;
            var30 = undefined;
            if(!var34) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var30 = var33;
case 58:
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
case 42:
            var19 = _closure1_slot5;
            var24 = var10 == var23;
            var9 = undefined;
            if(var24) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var9 = var23.neonStroke;
case 60:
            var9 = var19.bind(var4)(var9);
            var23 = var10 != var9;
            var19 = undefined;
            if(!var23) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var19 = var9;
case 62:
            var9 = new Array(2);
            var9[0] = var2;
            var22 = var22.neon;
            var9[1] = var22;
            var12 = var19;
            var18 = undefined;
            var15 = undefined;
            var14 = var21;
            var11 = var9;
            _fun0002_ip = 48; continue _fun0002;
case 40:
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
            var3 = _closure1_slot2;
            var3 = var3[var20];
            var3 = var19.bind(var4)(var3);
            var3 = var3.isNotNullish;
            var18 = var9.bind(var16)(var3);
            var15 = 45;
            var14 = undefined;
            var12 = undefined;
            var11 = var2;
case 48:
            var9 = _closure1_slot6;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var40 = var2;
            var39 = var5;
            var16 = copyDataProperties(var40, var39);
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
case 35:
            var9 = _closure1_slot6;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var40 = var2;
            var39 = var5;
            var11 = copyDataProperties(var40, var39);
            var12 = var5.style;
            var11 = new Array(2);
            var11[0] = var12;
            var10 = var10 != var13;
            if(!var10) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var12 = {};
            var12['fontFamily'] = var13;
            var10 = var12;
case 64:
            var11[1] = var10;
            var10 = 'style';
            var2[var10] = var11;
            var10 = 'color';
            var2[var10] = var7;
            var10 = 'children';
            var2[var10] = var6;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 32:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var40 = var1;
            var39 = var5;
            var5 = copyDataProperties(var40, var39);
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