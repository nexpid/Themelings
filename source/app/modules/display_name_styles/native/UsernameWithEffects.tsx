// app/modules/display_name_styles/native/UsernameWithEffects.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var1 = metroImportDefault;
        var _closure1_slot1 = var1;
        var _closure1_slot2 = var6;
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
        var8 = 3;
        var4 = var6[var8];
        var9 = var5.bind(var1)(var4);
        var4 = var9.isIOS;
        var10 = var4.bind(var9)();
        var4 = 2.4;
        var9 = var4;
        if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var9 = 1.2;
case 2:
        var _closure1_slot7 = var9;
        var8 = var6[var8];
        var9 = var5.bind(var1)(var8);
        var8 = var9.isIOS;
        var8 = var8.bind(var9)();
        if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var4 = 1.2;
case 4:
        var _closure1_slot8 = var4;
        var4 = 4;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = function(arg1, arg2, arg3) {
            var9 = arg1;
            var10 = arg3;
            var1 = {};
            var2 = {};
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 5;
            var8 = var7[var4];
            var5 = undefined;
            var8 = var6.bind(var5)(var8);
            var8 = var8.colors;
            var8 = var8.WHITE;
            var2['color'] = var8;
            var2['textShadowColor'] = var9;
            var2['textShadowRadius'] = var10;
            var8 = 0;
            var11 = {'width': 0, 'height': 0};
            var2['textShadowOffset'] = var11;
            var2['padding'] = var10;
            var10 = -var10;
            var2['margin'] = var10;
            var1['neon'] = var2;
            var2 = {};
            var10 = 'relative';
            var2['position'] = var10;
            var11 = _closure1_slot8;
            var10 = 2;
            var10 = var11 / var10;
            var2['marginVertical'] = var10;
            var1['popContainer'] = var2;
            var2 = {};
            var2['color'] = var9;
            var9 = 'absolute';
            var2['position'] = var9;
            var9 = _closure1_slot8;
            var9 = -var9;
            var2['top'] = var9;
            var2['left'] = var8;
            var9 = {};
            var10 = 1.2;
            var8 = arg2;
            var8 = var10 + var8;
            var9['translateY'] = var8;
            var8 = new Array(1);
            var8[0] = var9;
            var2['transform'] = var8;
            var1['popBackLayer'] = var2;
            var2 = {};
            var8 = var7[var4];
            var8 = var6.bind(var5)(var8);
            var8 = var8.colors;
            var8 = var8.WHITE;
            var2['color'] = var8;
            var8 = _closure1_slot8;
            var2['paddingHorizontal'] = var8;
            var8 = _closure1_slot8;
            var8 = -var8;
            var2['marginHorizontal'] = var8;
            var8 = _closure1_slot8;
            var8 = -var8;
            var2['marginTop'] = var8;
            var1['popFrontLayer'] = var2;
            var2 = {};
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.colors;
            var4 = var4.WHITE;
            var2['color'] = var4;
            var4 = _closure1_slot7;
            var2['padding'] = var4;
            var3 = _closure1_slot7;
            var3 = -var3;
            var2['margin'] = var3;
            var1['toon'] = var2;
            return var1;
        };
        var4 = var8.bind(var9)(var4);
        var _closure1_slot9 = var4;
        var4 = var7.memo;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = arg1;
                var13 = var5.userId;
                var12 = var5.guildId;
                var6 = var5.userName;
                var3 = var5.effectDisplayType;
                var4 = undefined;
                if(!(var3 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.EffectDisplayType;
                var3 = var1.STATIC;
case 6:
                var11 = var5.pendingDisplayNameStyles;
                var7 = var5.defaultColor;
                var2 = {'userId': 0, 'guildId': 0, 'userName': 0, 'effectDisplayType': 0, 'pendingDisplayNameStyles': 0, 'defaultColor': 0};
                var10 = null;
                var33 = var2;
                var32 = null;
                var1 = silentSetPrototypeOf(var33, var32);
                var8 = 0;
                var33 = {};
                var32 = var5;
                var31 = var2;
                var5 = copyDataProperties(var33, var32, var31);
                var18 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 7;
                var2 = var15[var2];
                var9 = var18.bind(var4)(var2);
                var2 = {};
                var2['userId'] = var13;
                var2['guildId'] = var12;
                var2['pendingDisplayNameStyles'] = var11;
                var2 = var9.bind(var4)(var2);
                var12 = _closure1_slot0;
                var9 = 8;
                var9 = var15[var9];
                var13 = var12.bind(var4)(var9);
                var11 = var13.useDisplayNameStylesEnabled;
                var9 = {};
                var14 = 'UsernameWithEffects';
                var9['location'] = var14;
                var14 = var11.bind(var13)(var9);
                var9 = 9;
                var9 = var15[var9];
                var13 = var12.bind(var4)(var9);
                var11 = var13.useDisplayNameStylesFont;
                var9 = {};
                var9['displayNameStyles'] = var2;
                var13 = var11.bind(var13)(var9);
                var11 = 10;
                var9 = var15[var11];
                var19 = var12.bind(var4)(var9);
                var17 = var19.useToken;
                var9 = 5;
                var16 = var15[var9];
                var16 = var18.bind(var4)(var16);
                var16 = var16.colors;
                var16 = var16.BACKGROUND_BASE_LOW;
                var16 = var17.bind(var19)(var16);
                var11 = var15[var11];
                var17 = var12.bind(var4)(var11);
                var11 = var17.useToken;
                var9 = var15[var9];
                var9 = var18.bind(var4)(var9);
                var9 = var9.colors;
                var9 = var9.WHITE;
                var9 = var11.bind(var17)(var9);
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
                if(!var11) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var12 = var16[var8];
case 8:
                var8 = var10 == var2;
                var11 = undefined;
                if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var11 = var2.effectId;
case 10:
                if(!(var10 == var11)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 12;
                var8 = var17[var8];
                var8 = var15.bind(var4)(var8);
                var8 = var8.DisplayNameEffect;
                var11 = var8.SOLID;
case 12:
                var8 = var10 != var12;
                var18 = null;
                if(!var8) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 13;
                var8 = var17[var8];
                var15 = var15.bind(var4)(var8);
                var8 = var15.generateColorVariants;
                var18 = var8.bind(var15)(var12);
case 14:
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 14;
                var15 = var15[var8];
                var15 = var17.bind(var4)(var15);
                var17 = var15.TextStyleSheet;
                var15 = var5.variant;
                var17 = var17[var15];
                var19 = var10 == var17;
                var15 = undefined;
                if(var19) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var15 = var17.fontSize;
case 16:
                var17 = var10 != var15;
                var21 = 16;
                if(!var17) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var21 = var15;
case 18:
                var20 = _closure1_slot9;
                var17 = var10 == var18;
                var15 = undefined;
                if(var17) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var15 = var18.main;
case 20:
                var17 = var10 != var15;
                var19 = '';
                if(!var17) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var19 = var15;
case 22:
                var15 = 0.04;
                var17 = var15 * var21;
                var15 = 0.12;
                var21 = var15 * var21;
                var15 = 4;
                var15 = var15 + var21;
                var19 = var20.bind(var4)(var19, var17, var15);
                if(!var14) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                if(!(var10 != var2)) { _fun0002_ip = 24; continue _fun0002 }
case 26:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 6;
                var2 = var15[var2];
                var2 = var14.bind(var4)(var2);
                var2 = var2.EffectDisplayType;
                var2 = var2.PLAIN;
                if(!(var3 !== var2)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                if(!(var10 != var18)) { _fun0002_ip = 27; continue _fun0002 }
case 29:
                var3 = var5.style;
                var2 = new Array(2);
                var2[0] = var3;
                var3 = var10 != var13;
                if(!var3) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                var14 = {};
                var14['fontFamily'] = var13;
                var3 = var14;
case 30:
                var2[1] = var3;
                var15 = _closure1_slot0;
                var3 = _closure1_slot2;
                var14 = 12;
                var3 = var3[var14];
                var3 = var15.bind(var4)(var3);
                var3 = var3.DisplayNameEffect;
                var3 = var3.GRADIENT;
                if(!(var3 !== var11)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                var15 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var3 = var15.bind(var4)(var3);
                var3 = var3.DisplayNameEffect;
                var3 = var3.NEON;
                if(!(var3 !== var11)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                var15 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var3 = var15.bind(var4)(var3);
                var3 = var3.DisplayNameEffect;
                var3 = var3.POP;
                if(!(var3 !== var11)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                var15 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var3 = var15.bind(var4)(var3);
                var3 = var3.DisplayNameEffect;
                var3 = var3.TOON;
                if(!(var3 !== var11)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
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
                _fun0002_ip = 40; continue _fun0002;
case 38:
                var3 = new Array(2);
                var3[0] = var2;
                var20 = var19.toon;
                var3[1] = var20;
                var21 = _closure1_slot4;
                var9 = var21.bind(var4)(var9);
                var22 = new Array(6);
                var22[0] = var9;
                var9 = var18.light2;
                var9 = var21.bind(var4)(var9);
                var22[1] = var9;
                var9 = var18.light2;
                var9 = var21.bind(var4)(var9);
                var22[2] = var9;
                var9 = var18.light1;
                var9 = var21.bind(var4)(var9);
                var22[3] = var9;
                var9 = var18.light1;
                var9 = var21.bind(var4)(var9);
                var22[4] = var9;
                var9 = var18.main;
                var9 = var21.bind(var4)(var9);
                var22[5] = var9;
                var20 = _closure1_slot7;
                var9 = var18.dark2;
                var21 = var21.bind(var4)(var9);
                var23 = var10 != var21;
                var9 = undefined;
                if(!var23) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                var9 = var21;
case 41:
                var15 = 90;
                var12 = var9;
                var17 = var22;
                var14 = var20;
                var11 = var3;
                _fun0002_ip = 40; continue _fun0002;
case 36:
                var9 = _closure1_slot4;
                var20 = var10 == var18;
                var3 = undefined;
                if(var20) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                var3 = var18.dark2;
case 43:
                var29 = var9.bind(var4)(var3);
                var9 = _closure1_slot4;
                var20 = var10 == var18;
                var3 = undefined;
                if(var20) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                var3 = var18.main;
case 45:
                var25 = var9.bind(var4)(var3);
                var3 = var10 != var18;
                var17 = undefined;
                var15 = undefined;
                var14 = undefined;
                var12 = undefined;
                var11 = var2;
                if(!var3) { _fun0002_ip = 40; continue _fun0002 }
case 47:
                var20 = _closure1_slot6;
                var9 = _closure1_slot3;
                var3 = {};
                var21 = var19.popContainer;
                var3['style'] = var21;
                var23 = _closure1_slot5;
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var21 = var21[var8];
                var21 = var22.bind(var4)(var21);
                var22 = var21.Text;
                var21 = {};
                var33 = var21;
                var32 = var5;
                var24 = copyDataProperties(var33, var32);
                var24 = _closure1_slot8;
                var30 = 'textStrokeWidth';
                var21[var30] = var24;
                var26 = var10 != var25;
                var24 = undefined;
                if(!var26) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                var24 = var25;
case 48:
                var28 = 'textStrokeColor';
                var21[var28] = var24;
                var24 = new Array(2);
                var24[0] = var2;
                var25 = var19.popBackLayer;
                var24[1] = var25;
                var27 = 'style';
                var21[var27] = var24;
                var25 = 'children';
                var21[var25] = var6;
                var22 = var23.bind(var4)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var24 = _closure1_slot5;
                var23 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var8];
                var22 = var23.bind(var4)(var22);
                var23 = var22.Text;
                var22 = {};
                var33 = var22;
                var32 = var5;
                var26 = copyDataProperties(var33, var32);
                var26 = _closure1_slot8;
                var22[var30] = var26;
                var30 = var10 != var29;
                var26 = undefined;
                if(!var30) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                var26 = var29;
case 50:
                var22[var28] = var26;
                var26 = new Array(2);
                var26[0] = var2;
                var28 = var19.popFrontLayer;
                var26[1] = var28;
                var22[var27] = var26;
                var22[var25] = var6;
                var22 = var24.bind(var4)(var23, var22);
                var21[1] = var22;
                var3['children'] = var21;
                var3 = var20.bind(var4)(var9, var3);
                return var3;
case 34:
                var9 = _closure1_slot4;
                var20 = var10 == var18;
                var3 = undefined;
                if(var20) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                var3 = var18.main;
case 52:
                var3 = var9.bind(var4)(var3);
                var18 = var10 != var3;
                var9 = undefined;
                if(!var18) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                var9 = var3;
case 54:
                var14 = _closure1_slot7;
                var3 = new Array(2);
                var3[0] = var2;
                var19 = var19.neon;
                var3[1] = var19;
                var12 = var9;
                var17 = undefined;
                var15 = undefined;
                var11 = var3;
                _fun0002_ip = 40; continue _fun0002;
case 32:
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
                var3 = 15;
                var3 = var19[var3];
                var3 = var18.bind(var4)(var3);
                var3 = var3.isNotNullish;
                var17 = var9.bind(var16)(var3);
                var15 = 45;
                var14 = undefined;
                var12 = undefined;
                var11 = var2;
case 40:
                var9 = _closure1_slot5;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var2 = var3.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {};
                var33 = var2;
                var32 = var5;
                var16 = copyDataProperties(var33, var32);
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
case 27:
                var9 = _closure1_slot5;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var2 = var3.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {};
                var33 = var2;
                var32 = var5;
                var11 = copyDataProperties(var33, var32);
                var12 = var5.style;
                var11 = new Array(2);
                var11[0] = var12;
                var10 = var10 != var13;
                if(!var10) { _fun0002_ip = 56; continue _fun0002 }
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
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var33 = var1;
                var32 = var5;
                var5 = copyDataProperties(var33, var32);
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
        return var1;
    }
})();