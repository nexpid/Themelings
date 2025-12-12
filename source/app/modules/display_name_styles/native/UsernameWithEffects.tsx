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
    var _closure1_slot8 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot3 = var8;
    var4 = var4.processColor;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot5 = var8;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
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
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var13 = var5.userId;
            var12 = var5.guildId;
            var6 = var5.userName;
            var3 = var5.effectDisplayType;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.EffectDisplayType;
            var3 = var1.STATIC;
case 2:
            var11 = var5.pendingDisplayNameStyles;
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
            var18 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 6;
            var2 = var15[var2];
            var9 = var18.bind(var4)(var2);
            var2 = {};
            var2['userId'] = var13;
            var2['guildId'] = var12;
            var2['pendingDisplayNameStyles'] = var11;
            var2 = var9.bind(var4)(var2);
            var12 = _closure1_slot0;
            var9 = 7;
            var9 = var15[var9];
            var13 = var12.bind(var4)(var9);
            var11 = var13.useDisplayNameStylesEnabled;
            var9 = {};
            var14 = 'UsernameWithEffects';
            var9['location'] = var14;
            var14 = var11.bind(var13)(var9);
            var9 = 8;
            var9 = var15[var9];
            var13 = var12.bind(var4)(var9);
            var11 = var13.useDisplayNameStylesFont;
            var9 = {};
            var9['displayNameStyles'] = var2;
            var13 = var11.bind(var13)(var9);
            var9 = 9;
            var11 = var15[var9];
            var17 = var12.bind(var4)(var11);
            var16 = var17.useToken;
            var23 = 4;
            var11 = var15[var23];
            var11 = var18.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.BACKGROUND_BASE_LOW;
            var16 = var16.bind(var17)(var11);
            var9 = var15[var9];
            var17 = var12.bind(var4)(var9);
            var11 = var17.useToken;
            var9 = var15[var23];
            var9 = var18.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.WHITE;
            var9 = var11.bind(var17)(var9);
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
            var20 = null;
            if(!var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 12;
            var8 = var17[var8];
            var15 = var15.bind(var4)(var8);
            var8 = var15.generateColorVariants;
            var20 = var8.bind(var15)(var12);
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
            var19 = _closure1_slot8;
            var17 = 1;
            var18 = var19.bind(var4)(var17, var15);
            var17 = 1.6;
            var21 = var19.bind(var4)(var17, var15);
            var17 = 1.2;
            var31 = var19.bind(var4)(var17, var15);
            var22 = _closure1_slot7;
            var17 = var10 == var20;
            var24 = var15;
            var15 = undefined;
            if(var17) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var15 = var20.main;
case 16:
            var17 = var10 != var15;
            var19 = '';
            if(!var17) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var19 = var15;
case 18:
            var15 = 0.04;
            var36 = var15 * var24;
            var15 = 0.12;
            var15 = var15 * var24;
            var35 = var23 + var15;
            var38 = undefined;
            var37 = var19;
            var34 = var21;
            var33 = var31;
            var19 = var38[var22](var37, var36, var35, var34, var33, var32);
            if(!var14) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            if(!(var10 != var2)) { _fun0001_ip = 20; continue _fun0001 }
case 22:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 5;
            var2 = var15[var2];
            var2 = var14.bind(var4)(var2);
            var2 = var2.EffectDisplayType;
            var2 = var2.PLAIN;
            if(!(var3 !== var2)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            if(!(var10 != var20)) { _fun0001_ip = 23; continue _fun0001 }
case 25:
            var3 = var5.style;
            var2 = new Array(2);
            var2[0] = var3;
            var3 = var10 != var13;
            if(!var3) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var14 = {};
            var14['fontFamily'] = var13;
            var3 = var14;
case 26:
            var2[1] = var3;
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = 11;
            var3 = var3[var14];
            var3 = var15.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.GRADIENT;
            if(!(var3 !== var11)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var15.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.NEON;
            if(!(var3 !== var11)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var15.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.POP;
            if(!(var3 !== var11)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var15.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.TOON;
            if(!(var3 !== var11)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var14];
            var3 = var11.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var3 = var3.SOLID;
            var11 = new Array(2);
            var11[0] = var2;
            var3 = {};
            var3['color'] = var12;
            var11[1] = var3;
            var17 = undefined;
            var15 = undefined;
            var14 = undefined;
            var12 = undefined;
            _fun0001_ip = 36; continue _fun0001;
case 34:
            var3 = new Array(2);
            var3[0] = var2;
            var22 = var19.toon;
            var3[1] = var22;
            var22 = _closure1_slot4;
            var9 = var22.bind(var4)(var9);
            var23 = new Array(6);
            var23[0] = var9;
            var9 = var20.light2;
            var9 = var22.bind(var4)(var9);
            var23[1] = var9;
            var9 = var20.light2;
            var9 = var22.bind(var4)(var9);
            var23[2] = var9;
            var9 = var20.light1;
            var9 = var22.bind(var4)(var9);
            var23[3] = var9;
            var9 = var20.light1;
            var9 = var22.bind(var4)(var9);
            var23[4] = var9;
            var9 = var20.main;
            var9 = var22.bind(var4)(var9);
            var23[5] = var9;
            var9 = var20.toonStroke;
            var22 = var22.bind(var4)(var9);
            var24 = var10 != var22;
            var9 = undefined;
            if(!var24) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var9 = var22;
case 37:
            var15 = 90;
            var12 = var9;
            var17 = var23;
            var14 = var21;
            var11 = var3;
            _fun0001_ip = 36; continue _fun0001;
case 32:
            var9 = _closure1_slot4;
            var21 = var10 == var20;
            var3 = undefined;
            if(var21) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var3 = var20.dark2;
case 39:
            var30 = var9.bind(var4)(var3);
            var9 = _closure1_slot4;
            var21 = var10 == var20;
            var3 = undefined;
            if(var21) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var3 = var20.main;
case 41:
            var26 = var9.bind(var4)(var3);
            var3 = var10 != var20;
            var17 = undefined;
            var15 = undefined;
            var14 = undefined;
            var12 = undefined;
            var11 = var2;
            if(!var3) { _fun0001_ip = 36; continue _fun0001 }
case 43:
            var21 = _closure1_slot6;
            var9 = _closure1_slot3;
            var3 = {};
            var22 = var19.popContainer;
            var3['style'] = var22;
            var24 = _closure1_slot5;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var8];
            var22 = var23.bind(var4)(var22);
            var23 = var22.Text;
            var22 = {};
            var37 = var22;
            var36 = var5;
            var25 = copyDataProperties(var37, var36);
            var27 = 'textStrokeWidth';
            var22[var27] = var31;
            var28 = var10 != var26;
            var25 = undefined;
            if(!var28) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var25 = var26;
case 44:
            var29 = 'textStrokeColor';
            var22[var29] = var25;
            var25 = new Array(2);
            var25[0] = var2;
            var26 = var19.popBackLayer;
            var25[1] = var26;
            var28 = 'style';
            var22[var28] = var25;
            var26 = 'children';
            var22[var26] = var6;
            var23 = var24.bind(var4)(var23, var22);
            var22 = new Array(2);
            var22[0] = var23;
            var25 = _closure1_slot5;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var8];
            var23 = var24.bind(var4)(var23);
            var24 = var23.Text;
            var23 = {};
            var37 = var23;
            var36 = var5;
            var32 = copyDataProperties(var37, var36);
            var23[var27] = var31;
            var31 = var10 != var30;
            var27 = undefined;
            if(!var31) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var27 = var30;
case 46:
            var23[var29] = var27;
            var27 = new Array(2);
            var27[0] = var2;
            var29 = var19.popFrontLayer;
            var27[1] = var29;
            var23[var28] = var27;
            var23[var26] = var6;
            var23 = var25.bind(var4)(var24, var23);
            var22[1] = var23;
            var3['children'] = var22;
            var3 = var21.bind(var4)(var9, var3);
            return var3;
case 30:
            var9 = _closure1_slot4;
            var21 = var10 == var20;
            var3 = undefined;
            if(var21) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var3 = var20.main;
case 48:
            var3 = var9.bind(var4)(var3);
            var20 = var10 != var3;
            var9 = undefined;
            if(!var20) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var9 = var3;
case 50:
            var3 = new Array(2);
            var3[0] = var2;
            var19 = var19.neon;
            var3[1] = var19;
            var12 = var9;
            var17 = undefined;
            var15 = undefined;
            var14 = var18;
            var11 = var3;
            _fun0001_ip = 36; continue _fun0001;
case 28:
            var9 = var16.map;
            var3 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var16 = var9.bind(var16)(var3);
            var9 = var16.filter;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 14;
            var3 = var19[var3];
            var3 = var18.bind(var4)(var3);
            var3 = var3.isNotNullish;
            var17 = var9.bind(var16)(var3);
            var15 = 45;
            var14 = undefined;
            var12 = undefined;
            var11 = var2;
case 36:
            var9 = _closure1_slot5;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var37 = var2;
            var36 = var5;
            var16 = copyDataProperties(var37, var36);
            var16 = 'gradientColors';
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
case 23:
            var9 = _closure1_slot5;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var37 = var2;
            var36 = var5;
            var11 = copyDataProperties(var37, var36);
            var12 = var5.style;
            var11 = new Array(2);
            var11[0] = var12;
            var10 = var10 != var13;
            if(!var10) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var12 = {};
            var12['fontFamily'] = var13;
            var10 = var12;
case 52:
            var11[1] = var10;
            var10 = 'style';
            var2[var10] = var11;
            var10 = 'color';
            var2[var10] = var7;
            var10 = 'children';
            var2[var10] = var6;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 20:
            var3 = _closure1_slot5;
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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/UsernameWithEffects.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();