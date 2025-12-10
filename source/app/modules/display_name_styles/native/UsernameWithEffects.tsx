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
                var1 = arg1;
                var15 = var1.userId;
                var13 = var1.guildId;
                var5 = var1.userName;
                var3 = var1.effectDisplayType;
                var4 = undefined;
                if(!(var3 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.EffectDisplayType;
                var3 = var2.STATIC;
case 6:
                var10 = var1.variant;
                if(!(var10 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var10 = 'text-md/normal';
case 8:
                var9 = var1.style;
                var8 = var1.lineClamp;
                var7 = var1.ellipsizeMode;
                var12 = var1.pendingDisplayNameStyles;
                var6 = var1.defaultColor;
                var19 = _closure1_slot1;
                var14 = _closure1_slot2;
                var2 = 7;
                var2 = var14[var2];
                var11 = var19.bind(var4)(var2);
                var2 = {};
                var2['userId'] = var15;
                var2['guildId'] = var13;
                var2['pendingDisplayNameStyles'] = var12;
                var2 = var11.bind(var4)(var2);
                var13 = _closure1_slot0;
                var11 = 8;
                var11 = var14[var11];
                var15 = var13.bind(var4)(var11);
                var12 = var15.useDisplayNameStylesEnabled;
                var11 = {};
                var16 = 'UsernameWithEffects';
                var11['location'] = var16;
                var17 = var12.bind(var15)(var11);
                var11 = 9;
                var11 = var14[var11];
                var15 = var13.bind(var4)(var11);
                var12 = var15.useDisplayNameStylesFont;
                var11 = {};
                var11['displayNameStyles'] = var2;
                var16 = var12.bind(var15)(var11);
                var12 = 10;
                var11 = var14[var12];
                var20 = var13.bind(var4)(var11);
                var18 = var20.useToken;
                var11 = 5;
                var15 = var14[var11];
                var15 = var19.bind(var4)(var15);
                var15 = var15.colors;
                var15 = var15.BACKGROUND_BASE_LOW;
                var15 = var18.bind(var20)(var15);
                var12 = var14[var12];
                var18 = var13.bind(var4)(var12);
                var12 = var18.useToken;
                var11 = var14[var11];
                var11 = var19.bind(var4)(var11);
                var11 = var11.colors;
                var11 = var11.WHITE;
                var12 = var12.bind(var18)(var11);
                var11 = 11;
                var11 = var14[var11];
                var14 = var13.bind(var4)(var11);
                var13 = var14.useDisplayNameStylesAccessibleColors;
                var11 = {};
                var11['displayNameStyles'] = var2;
                var11['backgroundColor'] = var15;
                var20 = var13.bind(var14)(var11);
                var13 = var20.length;
                var11 = 0;
                var14 = var13 > var11;
                var13 = undefined;
                if(!var14) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var13 = var20[var11];
case 10:
                var14 = null;
                var11 = var14 == var2;
                var15 = undefined;
                if(var11) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var15 = var2.effectId;
case 12:
                if(!(var14 == var15)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = 12;
                var11 = var19[var11];
                var11 = var18.bind(var4)(var11);
                var11 = var11.DisplayNameEffect;
                var15 = var11.SOLID;
case 14:
                var11 = var14 != var13;
                var21 = null;
                if(!var11) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = 13;
                var11 = var19[var11];
                var18 = var18.bind(var4)(var11);
                var11 = var18.generateColorVariants;
                var21 = var11.bind(var18)(var13);
case 16:
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var11 = 14;
                var18 = var18[var11];
                var18 = var19.bind(var4)(var18);
                var18 = var18.TextStyleSheet;
                var19 = var18[var10];
                var22 = var14 == var19;
                var18 = undefined;
                if(var22) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var18 = var19.fontSize;
case 18:
                var19 = var14 != var18;
                var24 = 16;
                if(!var19) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var24 = var18;
case 20:
                var23 = _closure1_slot9;
                var19 = var14 == var21;
                var18 = undefined;
                if(var19) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var18 = var21.main;
case 22:
                var19 = var14 != var18;
                var22 = '';
                if(!var19) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                var22 = var18;
case 24:
                var18 = 0.04;
                var19 = var18 * var24;
                var18 = 0.12;
                var24 = var18 * var24;
                var18 = 4;
                var18 = var18 + var24;
                var22 = var23.bind(var4)(var22, var19, var18);
                if(!var17) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                if(!(var14 != var2)) { _fun0002_ip = 26; continue _fun0002 }
case 28:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = 6;
                var2 = var18[var2];
                var2 = var17.bind(var4)(var2);
                var2 = var2.EffectDisplayType;
                var2 = var2.PLAIN;
                if(!(var3 !== var2)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                if(!(var14 != var21)) { _fun0002_ip = 29; continue _fun0002 }
case 31:
                var2 = new Array(2);
                var2[0] = var9;
                var3 = var14 != var16;
                if(!var3) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                var17 = {};
                var17['fontFamily'] = var16;
                var3 = var17;
case 32:
                var2[1] = var3;
                var18 = _closure1_slot0;
                var3 = _closure1_slot2;
                var17 = 12;
                var3 = var3[var17];
                var3 = var18.bind(var4)(var3);
                var3 = var3.DisplayNameEffect;
                var3 = var3.GRADIENT;
                if(!(var3 !== var15)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                var18 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var17];
                var3 = var18.bind(var4)(var3);
                var3 = var3.DisplayNameEffect;
                var3 = var3.NEON;
                if(!(var3 !== var15)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                var18 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var17];
                var3 = var18.bind(var4)(var3);
                var3 = var3.DisplayNameEffect;
                var3 = var3.POP;
                if(!(var3 !== var15)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                var18 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var17];
                var3 = var18.bind(var4)(var3);
                var3 = var3.DisplayNameEffect;
                var3 = var3.TOON;
                if(!(var3 !== var15)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                var15 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var17];
                var3 = var15.bind(var4)(var3);
                var3 = var3.DisplayNameEffect;
                var3 = var3.SOLID;
                var19 = new Array(2);
                var19[0] = var2;
                var3 = {};
                var3['color'] = var13;
                var19[1] = var3;
                var18 = undefined;
                var17 = undefined;
                var15 = undefined;
                var13 = undefined;
                _fun0002_ip = 42; continue _fun0002;
case 40:
                var3 = new Array(2);
                var3[0] = var2;
                var23 = var22.toon;
                var3[1] = var23;
                var24 = _closure1_slot4;
                var12 = var24.bind(var4)(var12);
                var25 = new Array(6);
                var25[0] = var12;
                var12 = var21.light2;
                var12 = var24.bind(var4)(var12);
                var25[1] = var12;
                var12 = var21.light2;
                var12 = var24.bind(var4)(var12);
                var25[2] = var12;
                var12 = var21.light1;
                var12 = var24.bind(var4)(var12);
                var25[3] = var12;
                var12 = var21.light1;
                var12 = var24.bind(var4)(var12);
                var25[4] = var12;
                var12 = var21.main;
                var12 = var24.bind(var4)(var12);
                var25[5] = var12;
                var23 = _closure1_slot7;
                var12 = var21.dark2;
                var24 = var24.bind(var4)(var12);
                var26 = var14 != var24;
                var12 = undefined;
                if(!var26) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                var12 = var24;
case 43:
                var17 = 90;
                var13 = var12;
                var18 = var25;
                var15 = var23;
                var19 = var3;
                _fun0002_ip = 42; continue _fun0002;
case 38:
                var12 = _closure1_slot4;
                var23 = var14 == var21;
                var3 = undefined;
                if(var23) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                var3 = var21.dark2;
case 45:
                var29 = var12.bind(var4)(var3);
                var12 = _closure1_slot4;
                var23 = var14 == var21;
                var3 = undefined;
                if(var23) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                var3 = var21.main;
case 47:
                var28 = var12.bind(var4)(var3);
                var3 = var14 != var21;
                var18 = undefined;
                var17 = undefined;
                var15 = undefined;
                var13 = undefined;
                var19 = var2;
                if(!var3) { _fun0002_ip = 42; continue _fun0002 }
case 49:
                var23 = _closure1_slot6;
                var12 = _closure1_slot3;
                var3 = {};
                var24 = var22.popContainer;
                var3['style'] = var24;
                var26 = _closure1_slot5;
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var24 = var24[var11];
                var24 = var25.bind(var4)(var24);
                var25 = var24.Text;
                var24 = {};
                var24['variant'] = var10;
                var24['lineClamp'] = var8;
                var24['ellipsizeMode'] = var7;
                var27 = _closure1_slot8;
                var24['textStrokeWidth'] = var27;
                var30 = var14 != var28;
                var27 = undefined;
                if(!var30) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                var27 = var28;
case 50:
                var24['textStrokeColor'] = var27;
                var27 = new Array(2);
                var27[0] = var2;
                var28 = var22.popBackLayer;
                var27[1] = var28;
                var24['style'] = var27;
                var24['children'] = var5;
                var25 = var26.bind(var4)(var25, var24);
                var24 = new Array(2);
                var24[0] = var25;
                var27 = _closure1_slot5;
                var26 = _closure1_slot0;
                var25 = _closure1_slot2;
                var25 = var25[var11];
                var25 = var26.bind(var4)(var25);
                var26 = var25.Text;
                var25 = {};
                var25['variant'] = var10;
                var25['lineClamp'] = var8;
                var25['ellipsizeMode'] = var7;
                var28 = _closure1_slot8;
                var25['textStrokeWidth'] = var28;
                var30 = var14 != var29;
                var28 = undefined;
                if(!var30) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                var28 = var29;
case 52:
                var25['textStrokeColor'] = var28;
                var28 = new Array(2);
                var28[0] = var2;
                var29 = var22.popFrontLayer;
                var28[1] = var29;
                var25['style'] = var28;
                var25['children'] = var5;
                var25 = var27.bind(var4)(var26, var25);
                var24[1] = var25;
                var3['children'] = var24;
                var3 = var23.bind(var4)(var12, var3);
                return var3;
case 36:
                var12 = _closure1_slot4;
                var23 = var14 == var21;
                var3 = undefined;
                if(var23) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                var3 = var21.main;
case 54:
                var3 = var12.bind(var4)(var3);
                var21 = var14 != var3;
                var12 = undefined;
                if(!var21) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                var12 = var3;
case 56:
                var15 = _closure1_slot7;
                var3 = new Array(2);
                var3[0] = var2;
                var22 = var22.neon;
                var3[1] = var22;
                var13 = var12;
                var18 = undefined;
                var17 = undefined;
                var19 = var3;
                _fun0002_ip = 42; continue _fun0002;
case 34:
                var12 = var20.map;
                var3 = function(arg1) {
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var20 = var12.bind(var20)(var3);
                var12 = var20.filter;
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var3 = 15;
                var3 = var22[var3];
                var3 = var21.bind(var4)(var3);
                var3 = var3.isNotNullish;
                var18 = var12.bind(var20)(var3);
                var17 = 45;
                var15 = undefined;
                var13 = undefined;
                var19 = var2;
case 42:
                var12 = _closure1_slot5;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var11];
                var2 = var3.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {};
                var2['gradientColors'] = var18;
                var2['variant'] = var10;
                var18 = new Array(1);
                var18[0] = var19;
                var2['style'] = var18;
                var2['lineClamp'] = var8;
                var2['ellipsizeMode'] = var7;
                var2['gradientAngle'] = var17;
                var2['textStrokeWidth'] = var15;
                var2['textStrokeColor'] = var13;
                var2['children'] = var5;
                var2 = var12.bind(var4)(var3, var2);
                return var2;
case 29:
                var12 = _closure1_slot5;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var11];
                var2 = var3.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {};
                var2['variant'] = var10;
                var13 = new Array(2);
                var13[0] = var9;
                var14 = var14 != var16;
                if(!var14) { _fun0002_ip = 58; continue _fun0002 }
case 59:
                var15 = {};
                var15['fontFamily'] = var16;
                var14 = var15;
case 58:
                var13[1] = var14;
                var2['style'] = var13;
                var2['lineClamp'] = var8;
                var2['ellipsizeMode'] = var7;
                var2['color'] = var6;
                var2['children'] = var5;
                var2 = var12.bind(var4)(var3, var2);
                return var2;
case 26:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var11];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var1['variant'] = var10;
                var1['style'] = var9;
                var1['lineClamp'] = var8;
                var1['ellipsizeMode'] = var7;
                var1['color'] = var6;
                var1['children'] = var5;
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