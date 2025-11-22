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
    var8 = var4.processColor;
    var _closure1_slot3 = var8;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot5 = var8;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.userId;
            var14 = var1.guildId;
            var5 = var1.userName;
            var12 = var1.effectDisplayType;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.EffectDisplayType;
            var12 = var2.STATIC;
case 2:
            var10 = var1.variant;
            if(!(var10 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = 'text-md/normal';
case 4:
            var9 = var1.style;
            var8 = var1.lineClamp;
            var7 = var1.ellipsizeMode;
            var13 = var1.pendingDisplayNameStyles;
            var6 = var1.defaultColor;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 4;
            var2 = var15[var2];
            var11 = var11.bind(var4)(var2);
            var2 = {};
            var2['userId'] = var16;
            var2['guildId'] = var14;
            var2['pendingDisplayNameStyles'] = var13;
            var2 = var11.bind(var4)(var2);
            var14 = _closure1_slot0;
            var11 = 5;
            var11 = var15[var11];
            var16 = var14.bind(var4)(var11);
            var13 = var16.useDisplayNameStylesEnabled;
            var11 = {};
            var17 = 'UsernameWithEffects';
            var11['location'] = var17;
            var11 = var13.bind(var16)(var11);
            var13 = 6;
            var13 = var15[var13];
            var15 = var14.bind(var4)(var13);
            var14 = var15.useDisplayNameStylesFont;
            var13 = {};
            var13['displayNameStyles'] = var2;
            var15 = var14.bind(var15)(var13);
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = null;
            if(!(var13 != var2)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 3;
            var11 = var16[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.EffectDisplayType;
            var11 = var11.PLAIN;
            if(!(var12 !== var11)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var14 = var2.colors;
            var12 = var14.map;
            var11 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.int2hex;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var12.bind(var14)(var11);
            var26 = 0;
            var18 = var16[var26];
            var17 = var2.effectId;
            if(!(var13 == var17)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 9;
            var2 = var12[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.DisplayNameEffect;
            var17 = var2.SOLID;
case 11:
            var2 = var13 != var18;
            var27 = null;
            if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 10;
            var2 = var12[var2];
            var11 = var11.bind(var4)(var2);
            var2 = var11.generateColorVariants;
            var27 = var2.bind(var11)(var18);
case 13:
            var2 = new Array(2);
            var2[0] = var9;
            var11 = var13 != var15;
            if(!var11) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var12 = {};
            var12['fontFamily'] = var15;
            var11 = var12;
case 15:
            var2[1] = var11;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var19 = 9;
            var11 = var11[var19];
            var11 = var12.bind(var4)(var11);
            var11 = var11.DisplayNameEffect;
            var11 = var11.GRADIENT;
            if(!(var11 !== var17)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var19];
            var11 = var12.bind(var4)(var11);
            var11 = var11.DisplayNameEffect;
            var11 = var11.NEON;
            if(!(var11 !== var17)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var19];
            var11 = var12.bind(var4)(var11);
            var11 = var11.DisplayNameEffect;
            var11 = var11.POP;
            if(!(var11 !== var17)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var19];
            var11 = var12.bind(var4)(var11);
            var11 = var11.DisplayNameEffect;
            var11 = var11.TOON;
            var14 = undefined;
            var12 = var2;
            if(!(var11 !== var17)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var17 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var19];
            var11 = var17.bind(var4)(var11);
            var11 = var11.DisplayNameEffect;
            var11 = var11.SOLID;
            var14 = undefined;
            var12 = var2;
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var11 = var13 == var27;
            var14 = undefined;
            var12 = var2;
            if(var11) { _fun0001_ip = 23; continue _fun0001 }
case 25:
            var19 = _closure1_slot6;
            var17 = _closure1_slot4;
            var11 = {};
            var20 = {};
            var21 = 'relative';
            var20['position'] = var21;
            var11['style'] = var20;
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 7;
            var20 = var24[var21];
            var20 = var22.bind(var4)(var20);
            var25 = var20.Text;
            var20 = {};
            var20['variant'] = var10;
            var20['lineClamp'] = var8;
            var20['ellipsizeMode'] = var7;
            var28 = new Array(2);
            var28[0] = var2;
            var29 = {'position': 'absolute', 'top': 0, 'left': 0};
            var29['color'] = var18;
            var31 = {};
            var30 = 2;
            var31['translateY'] = var30;
            var30 = new Array(1);
            var30[0] = var31;
            var29['transform'] = var30;
            var28[1] = var29;
            var20['style'] = var28;
            var20['children'] = var5;
            var25 = var23.bind(var4)(var25, var20);
            var20 = new Array(2);
            var20[0] = var25;
            var21 = var24[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {};
            var21['variant'] = var10;
            var21['lineClamp'] = var8;
            var21['ellipsizeMode'] = var7;
            var24 = new Array(2);
            var24[0] = var2;
            var25 = {};
            var28 = '#ffffff';
            var25['color'] = var28;
            var27 = var27.dark2;
            var25['textShadowColor'] = var27;
            var27 = {'width': 1, 'height': 1};
            var25['textShadowOffset'] = var27;
            var25['textShadowRadius'] = var26;
            var24[1] = var25;
            var21['style'] = var24;
            var21['children'] = var5;
            var21 = var23.bind(var4)(var22, var21);
            var20[1] = var21;
            var11['children'] = var20;
            var11 = var19.bind(var4)(var17, var11);
            return var11;
case 19:
            var11 = new Array(2);
            var11[0] = var2;
            var17 = {};
            var19 = '#ffffff';
            var17['color'] = var19;
            var17['textShadowColor'] = var18;
            var18 = {'width': 0, 'height': 0};
            var17['textShadowOffset'] = var18;
            var18 = 8;
            var17['textShadowRadius'] = var18;
            var11[1] = var17;
            var14 = undefined;
            var12 = var11;
            _fun0001_ip = 23; continue _fun0001;
case 17:
            var11 = var16.map;
            var3 = function(arg1) {
                var3 = _closure1_slot3;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var16 = var11.bind(var16)(var3);
            var11 = var16.filter;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 11;
            var3 = var18[var3];
            var3 = var17.bind(var4)(var3);
            var3 = var3.isNotNullish;
            var14 = var11.bind(var16)(var3);
            var12 = var2;
case 23:
            var11 = _closure1_slot5;
            var3 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 7;
            var2 = var16[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var2['gradientColors'] = var14;
            var2['variant'] = var10;
            var2['style'] = var12;
            var2['lineClamp'] = var8;
            var2['ellipsizeMode'] = var7;
            var2['children'] = var5;
            var2 = var11.bind(var4)(var3, var2);
            return var2;
case 9:
            var11 = _closure1_slot5;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 7;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var2['variant'] = var10;
            var12 = new Array(2);
            var12[0] = var9;
            var13 = var13 != var15;
            if(!var13) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var14 = {};
            var14['fontFamily'] = var15;
            var13 = var14;
case 26:
            var12[1] = var13;
            var2['style'] = var12;
            var2['lineClamp'] = var8;
            var2['ellipsizeMode'] = var7;
            var2['color'] = var6;
            var2['children'] = var5;
            var2 = var11.bind(var4)(var3, var2);
            return var2;
case 6:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 7;
            var1 = var11[var1];
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
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/UsernameWithEffects.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();