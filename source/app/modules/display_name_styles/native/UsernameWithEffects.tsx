// app/modules/display_name_styles/native/UsernameWithEffects.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2, arg3) {
        var7 = arg1;
        var9 = arg2;
        var8 = arg3;
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 4;
        var10 = var6[var3];
        var4 = undefined;
        var10 = var5.bind(var4)(var10);
        var10 = var10.colors;
        var10 = var10.WHITE;
        var2['color'] = var10;
        var2['textShadowColor'] = var7;
        var2['textShadowRadius'] = var8;
        var10 = {'width': 0, 'height': 0};
        var2['textShadowOffset'] = var10;
        var2['padding'] = var8;
        var8 = -var8;
        var2['margin'] = var8;
        var1['neon'] = var2;
        var2 = {};
        var8 = 'relative';
        var2['position'] = var8;
        var2['marginBottom'] = var9;
        var1['popContainer'] = var2;
        var2 = {'color': null, 'position': 'absolute', 'top': -1.2, 'left': 0};
        var2['color'] = var7;
        var8 = {};
        var7 = 1.2;
        var7 = var7 + var9;
        var8['translateY'] = var7;
        var7 = new Array(1);
        var7[0] = var8;
        var2['transform'] = var7;
        var1['popBackLayer'] = var2;
        var2 = {'color': null, 'textShadowRadius': 0, 'marginTop': -1.2};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.WHITE;
        var2['color'] = var7;
        var1['popFrontLayer'] = var2;
        var2 = {'color': null, 'padding': 2, 'margin': 4294967294};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.WHITE;
        var2['color'] = var3;
        var1['toon'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.userId;
            var14 = var1.guildId;
            var5 = var1.userName;
            var13 = var1.effectDisplayType;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.EffectDisplayType;
            var13 = var2.STATIC;
case 2:
            var10 = var1.variant;
            if(!(var10 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = 'text-md/normal';
case 4:
            var9 = var1.style;
            var8 = var1.lineClamp;
            var7 = var1.ellipsizeMode;
            var11 = var1.pendingDisplayNameStyles;
            var6 = var1.defaultColor;
            var19 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 6;
            var2 = var12[var2];
            var3 = var19.bind(var4)(var2);
            var2 = {};
            var2['userId'] = var15;
            var2['guildId'] = var14;
            var2['pendingDisplayNameStyles'] = var11;
            var2 = var3.bind(var4)(var2);
            var11 = _closure1_slot0;
            var3 = 7;
            var3 = var12[var3];
            var15 = var11.bind(var4)(var3);
            var14 = var15.useDisplayNameStylesEnabled;
            var3 = {};
            var16 = 'UsernameWithEffects';
            var3['location'] = var16;
            var18 = var14.bind(var15)(var3);
            var3 = 8;
            var3 = var12[var3];
            var15 = var11.bind(var4)(var3);
            var14 = var15.useDisplayNameStylesFont;
            var3 = {};
            var3['displayNameStyles'] = var2;
            var16 = var14.bind(var15)(var3);
            var3 = 9;
            var14 = var12[var3];
            var17 = var11.bind(var4)(var14);
            var15 = var17.useToken;
            var23 = 4;
            var14 = var12[var23];
            var14 = var19.bind(var4)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_BASE_LOW;
            var14 = var15.bind(var17)(var14);
            var3 = var12[var3];
            var17 = var11.bind(var4)(var3);
            var15 = var17.useToken;
            var3 = var12[var23];
            var3 = var19.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.WHITE;
            var22 = var15.bind(var17)(var3);
            var3 = 10;
            var3 = var12[var3];
            var12 = var11.bind(var4)(var3);
            var11 = var12.useDisplayNameStylesAccessibleColors;
            var3 = {};
            var3['displayNameStyles'] = var2;
            var3['backgroundColor'] = var14;
            var20 = var11.bind(var12)(var3);
            var11 = var20.length;
            var3 = 0;
            var11 = var11 > var3;
            var15 = undefined;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var15 = var20[var3];
case 6:
            var14 = null;
            var3 = var14 == var2;
            var17 = undefined;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var17 = var2.effectId;
case 8:
            if(!(var14 == var17)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 11;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.DisplayNameEffect;
            var17 = var3.SOLID;
case 10:
            var11 = var14 != var15;
            var3 = null;
            if(!var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 12;
            var11 = var19[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.generateColorVariants;
            var3 = var11.bind(var12)(var15);
case 12:
            var19 = _closure1_slot0;
            var12 = _closure1_slot2;
            var11 = 13;
            var12 = var12[var11];
            var12 = var19.bind(var4)(var12);
            var12 = var12.TextStyleSheet;
            var19 = var12[var10];
            var21 = var14 == var19;
            var12 = undefined;
            if(var21) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = var19.fontSize;
case 14:
            var19 = var14 != var12;
            var24 = 16;
            if(!var19) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var24 = var12;
case 16:
            var12 = 0.04;
            var32 = var12 * var24;
            var21 = _closure1_slot7;
            var19 = var14 == var3;
            var12 = undefined;
            if(var19) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var12 = var3.main;
case 18:
            var25 = var14 != var12;
            var19 = '';
            if(!var25) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var19 = var12;
case 20:
            var12 = 0.12;
            var12 = var12 * var24;
            var12 = var23 + var12;
            var12 = var21.bind(var4)(var19, var32, var12);
            if(!var18) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            if(!(var14 != var2)) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 5;
            var2 = var19[var2];
            var2 = var18.bind(var4)(var2);
            var2 = var2.EffectDisplayType;
            var2 = var2.PLAIN;
            if(!(var13 !== var2)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            if(!(var14 != var3)) { _fun0001_ip = 25; continue _fun0001 }
case 27:
            var2 = new Array(2);
            var2[0] = var9;
            var13 = var14 != var16;
            if(!var13) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var18 = {};
            var18['fontFamily'] = var16;
            var13 = var18;
case 28:
            var2[1] = var13;
            var19 = _closure1_slot0;
            var13 = _closure1_slot2;
            var18 = 11;
            var13 = var13[var18];
            var13 = var19.bind(var4)(var13);
            var13 = var13.DisplayNameEffect;
            var13 = var13.GRADIENT;
            if(!(var13 !== var17)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var19 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var18];
            var13 = var19.bind(var4)(var13);
            var13 = var13.DisplayNameEffect;
            var13 = var13.NEON;
            if(!(var13 !== var17)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var19 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var18];
            var13 = var19.bind(var4)(var13);
            var13 = var13.DisplayNameEffect;
            var13 = var13.POP;
            if(!(var13 !== var17)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var19 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var18];
            var13 = var19.bind(var4)(var13);
            var13 = var13.DisplayNameEffect;
            var13 = var13.TOON;
            if(!(var13 !== var17)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var18];
            var13 = var17.bind(var4)(var13);
            var13 = var13.DisplayNameEffect;
            var13 = var13.SOLID;
            var19 = new Array(2);
            var19[0] = var2;
            var13 = {};
            var13['color'] = var15;
            var19[1] = var13;
            var18 = undefined;
            var17 = undefined;
            var15 = undefined;
            var13 = undefined;
            _fun0001_ip = 38; continue _fun0001;
case 36:
            var21 = new Array(2);
            var21[0] = var2;
            var23 = var12.toon;
            var21[1] = var23;
            var23 = _closure1_slot4;
            var22 = var23.bind(var4)(var22);
            var25 = new Array(4);
            var25[0] = var22;
            var22 = var3.light2;
            var22 = var23.bind(var4)(var22);
            var25[1] = var22;
            var22 = var3.light1;
            var22 = var23.bind(var4)(var22);
            var25[2] = var22;
            var22 = var3.main;
            var22 = var23.bind(var4)(var22);
            var25[3] = var22;
            var22 = var3.dark2;
            var23 = var23.bind(var4)(var22);
            var24 = var14 != var23;
            var22 = undefined;
            if(!var24) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var22 = var23;
case 39:
            var17 = 90;
            var15 = 2;
            var13 = var22;
            var18 = var25;
            var19 = var21;
            _fun0001_ip = 38; continue _fun0001;
case 34:
            var22 = _closure1_slot4;
            var23 = var14 == var3;
            var21 = undefined;
            if(var23) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var21 = var3.dark2;
case 41:
            var28 = var22.bind(var4)(var21);
            var3 = var14 != var3;
            var18 = undefined;
            var17 = undefined;
            var15 = undefined;
            var13 = undefined;
            var19 = var2;
            if(!var3) { _fun0001_ip = 38; continue _fun0001 }
case 43:
            var22 = _closure1_slot6;
            var21 = _closure1_slot3;
            var3 = {};
            var23 = var12.popContainer;
            var3['style'] = var23;
            var26 = _closure1_slot5;
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var23 = var24[var11];
            var23 = var25.bind(var4)(var23);
            var29 = var23.Text;
            var23 = {};
            var23['variant'] = var10;
            var23['lineClamp'] = var8;
            var23['ellipsizeMode'] = var7;
            var27 = 1.2;
            var23['textStrokeWidth'] = var27;
            var30 = new Array(3);
            var30[0] = var2;
            var31 = var12.popBackLayer;
            var30[1] = var31;
            var31 = {};
            var33 = {};
            var32 = var27 + var32;
            var33['translateY'] = var32;
            var32 = new Array(1);
            var32[0] = var33;
            var31['transform'] = var32;
            var30[2] = var31;
            var23['style'] = var30;
            var23['children'] = var5;
            var29 = var26.bind(var4)(var29, var23);
            var23 = new Array(2);
            var23[0] = var29;
            var24 = var24[var11];
            var24 = var25.bind(var4)(var24);
            var25 = var24.Text;
            var24 = {};
            var24['variant'] = var10;
            var24['lineClamp'] = var8;
            var24['ellipsizeMode'] = var7;
            var24['textStrokeWidth'] = var27;
            var29 = var14 != var28;
            var27 = undefined;
            if(!var29) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var27 = var28;
case 44:
            var24['textStrokeColor'] = var27;
            var27 = new Array(2);
            var27[0] = var2;
            var28 = var12.popFrontLayer;
            var27[1] = var28;
            var24['style'] = var27;
            var24['children'] = var5;
            var24 = var26.bind(var4)(var25, var24);
            var23[1] = var24;
            var3['children'] = var23;
            var3 = var22.bind(var4)(var21, var3);
            return var3;
case 32:
            var3 = new Array(2);
            var3[0] = var2;
            var12 = var12.neon;
            var3[1] = var12;
            var18 = undefined;
            var17 = undefined;
            var15 = undefined;
            var13 = undefined;
            var19 = var3;
            _fun0001_ip = 38; continue _fun0001;
case 30:
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
            var3 = 14;
            var3 = var22[var3];
            var3 = var21.bind(var4)(var3);
            var3 = var3.isNotNullish;
            var18 = var12.bind(var20)(var3);
            var17 = 45;
            var15 = undefined;
            var13 = undefined;
            var19 = var2;
case 38:
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
case 25:
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
            if(!var14) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var15 = {};
            var15['fontFamily'] = var16;
            var14 = var15;
case 46:
            var13[1] = var14;
            var2['style'] = var13;
            var2['lineClamp'] = var8;
            var2['ellipsizeMode'] = var7;
            var2['color'] = var6;
            var2['children'] = var5;
            var2 = var12.bind(var4)(var3, var2);
            return var2;
case 22:
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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/UsernameWithEffects.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();