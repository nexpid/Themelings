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
            var14 = var1.userId;
            var12 = var1.guildId;
            var5 = var1.userName;
            var13 = var1.effectDisplayType;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
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
            var6 = var1.defaultColor;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 4;
            var2 = var15[var2];
            var11 = var11.bind(var4)(var2);
            var2 = {};
            var2['userId'] = var14;
            var2['guildId'] = var12;
            var2 = var11.bind(var4)(var2);
            var14 = _closure1_slot0;
            var11 = 5;
            var11 = var15[var11];
            var16 = var14.bind(var4)(var11);
            var12 = var16.useDisplayNameStylesEnabled;
            var11 = {};
            var17 = 'UsernameWithEffects';
            var11['location'] = var17;
            var11 = var12.bind(var16)(var11);
            var12 = 6;
            var12 = var15[var12];
            var15 = var14.bind(var4)(var12);
            var14 = var15.useDisplayNameStylesFont;
            var12 = {};
            var12['displayNameStyles'] = var2;
            var14 = var14.bind(var15)(var12);
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = null;
            if(!(var11 != var2)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 3;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.EffectDisplayType;
            var12 = var12.PLAIN;
            if(!(var13 !== var12)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var15 = var2.colors;
            var13 = var15.map;
            var12 = function(arg1) {
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
            var15 = var13.bind(var15)(var12);
            var25 = 0;
            var17 = var15[var25];
            var18 = var2.effectId;
            if(!(var11 == var18)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 9;
            var2 = var13[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.DisplayNameEffect;
            var18 = var2.SOLID;
case 11:
            var2 = var11 != var17;
            var26 = null;
            if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 10;
            var2 = var13[var2];
            var12 = var12.bind(var4)(var2);
            var2 = var12.generateColorVariants;
            var26 = var2.bind(var12)(var17);
case 13:
            var2 = new Array(2);
            var2[0] = var9;
            var12 = {};
            var12['fontFamily'] = var14;
            var2[1] = var12;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var19 = 9;
            var12 = var12[var19];
            var12 = var13.bind(var4)(var12);
            var12 = var12.DisplayNameEffect;
            var12 = var12.GRADIENT;
            if(!(var12 !== var18)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var13.bind(var4)(var12);
            var12 = var12.DisplayNameEffect;
            var12 = var12.NEON;
            if(!(var12 !== var18)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var13.bind(var4)(var12);
            var12 = var12.DisplayNameEffect;
            var12 = var12.POP;
            if(!(var12 !== var18)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var13.bind(var4)(var12);
            var12 = var12.DisplayNameEffect;
            var16 = var12.TOON;
            var13 = undefined;
            var12 = var2;
            if(!(var16 !== var18)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var18 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var19];
            var16 = var18.bind(var4)(var16);
            var16 = var16.DisplayNameEffect;
            var16 = var16.SOLID;
            var13 = undefined;
            var12 = var2;
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var11 = var11 == var26;
            var13 = undefined;
            var12 = var2;
            if(var11) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var18 = _closure1_slot6;
            var16 = _closure1_slot4;
            var11 = {};
            var19 = {};
            var20 = 'relative';
            var19['position'] = var20;
            var11['style'] = var19;
            var22 = _closure1_slot5;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 7;
            var19 = var23[var20];
            var19 = var21.bind(var4)(var19);
            var24 = var19.Text;
            var19 = {};
            var19['variant'] = var10;
            var19['lineClamp'] = var8;
            var19['ellipsizeMode'] = var7;
            var27 = new Array(2);
            var27[0] = var2;
            var28 = {'position': 'absolute', 'top': 0, 'left': 0};
            var28['color'] = var17;
            var30 = {};
            var29 = 2;
            var30['translateY'] = var29;
            var29 = new Array(1);
            var29[0] = var30;
            var28['transform'] = var29;
            var27[1] = var28;
            var19['style'] = var27;
            var19['children'] = var5;
            var24 = var22.bind(var4)(var24, var19);
            var19 = new Array(2);
            var19[0] = var24;
            var20 = var23[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {};
            var20['variant'] = var10;
            var20['lineClamp'] = var8;
            var20['ellipsizeMode'] = var7;
            var23 = new Array(2);
            var23[0] = var2;
            var24 = {};
            var27 = '#ffffff';
            var24['color'] = var27;
            var26 = var26.dark2;
            var24['textShadowColor'] = var26;
            var26 = {'width': 1, 'height': 1};
            var24['textShadowOffset'] = var26;
            var24['textShadowRadius'] = var25;
            var23[1] = var24;
            var20['style'] = var23;
            var20['children'] = var5;
            var20 = var22.bind(var4)(var21, var20);
            var19[1] = var20;
            var11['children'] = var19;
            var11 = var18.bind(var4)(var16, var11);
            return var11;
case 17:
            var11 = new Array(2);
            var11[0] = var2;
            var16 = {};
            var18 = '#ffffff';
            var16['color'] = var18;
            var16['textShadowColor'] = var17;
            var17 = {'width': 0, 'height': 0};
            var16['textShadowOffset'] = var17;
            var17 = 8;
            var16['textShadowRadius'] = var17;
            var11[1] = var16;
            var13 = undefined;
            var12 = var11;
            _fun0001_ip = 21; continue _fun0001;
case 15:
            var11 = var15.map;
            var3 = function(arg1) {
                var3 = _closure1_slot3;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var15 = var11.bind(var15)(var3);
            var11 = var15.filter;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 11;
            var3 = var17[var3];
            var3 = var16.bind(var4)(var3);
            var3 = var3.isNotNullish;
            var13 = var11.bind(var15)(var3);
            var12 = var2;
case 21:
            var11 = _closure1_slot5;
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 7;
            var2 = var15[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var2['gradientColors'] = var13;
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
            var13 = {};
            var13['fontFamily'] = var14;
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