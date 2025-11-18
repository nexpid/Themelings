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
            var11 = var1.userId;
            var5 = var1.userName;
            var12 = var1.effectDisplayType;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 3;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.EffectDisplayType;
            var12 = var3.STATIC;
case 2:
            var9 = var1.variant;
            if(!(var9 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = 'text-md/normal';
case 4:
            var8 = var1.style;
            var7 = var1.lineClamp;
            var6 = var1.ellipsizeMode;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 4;
            var3 = var13[var3];
            var10 = var10.bind(var4)(var3);
            var3 = {};
            var3['userId'] = var11;
            var11 = var10.bind(var4)(var3);
            var10 = _closure1_slot0;
            var3 = 5;
            var3 = var13[var3];
            var13 = var10.bind(var4)(var3);
            var10 = var13.useDisplayNameStylesEnabled;
            var3 = {};
            var14 = 'UsernameWithEffects';
            var3['location'] = var14;
            var3 = var10.bind(var13)(var3);
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = null;
            if(!(var3 != var11)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 3;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.EffectDisplayType;
            var10 = var10.PLAIN;
            if(!(var12 !== var10)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var13 = var11.colors;
            var12 = var13.map;
            var10 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.int2hex;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var12.bind(var13)(var10);
            var23 = 0;
            var15 = var10[var23];
            var17 = var11.effectId;
            if(!(var3 == var17)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 8;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.DisplayNameEffect;
            var17 = var11.SOLID;
case 11:
            var11 = var3 != var15;
            var24 = null;
            if(!var11) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 9;
            var11 = var13[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.generateColorVariants;
            var24 = var11.bind(var12)(var15);
case 13:
            var13 = new Array(2);
            var13[0] = var8;
            var11 = {};
            var11['color'] = var15;
            var13[1] = var11;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var14 = 8;
            var11 = var11[var14];
            var11 = var12.bind(var4)(var11);
            var11 = var11.DisplayNameEffect;
            var11 = var11.GRADIENT;
            if(!(var11 !== var17)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var14];
            var11 = var12.bind(var4)(var11);
            var11 = var11.DisplayNameEffect;
            var11 = var11.NEON;
            if(!(var11 !== var17)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var14];
            var11 = var12.bind(var4)(var11);
            var11 = var11.DisplayNameEffect;
            var11 = var11.POP;
            if(!(var11 !== var17)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var14];
            var11 = var12.bind(var4)(var11);
            var11 = var11.DisplayNameEffect;
            var16 = var11.TOON;
            var12 = undefined;
            var11 = var13;
            if(!(var16 !== var17)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var14];
            var16 = var17.bind(var4)(var16);
            var16 = var16.DisplayNameEffect;
            var16 = var16.SOLID;
            var12 = undefined;
            var11 = var13;
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var3 = var3 == var24;
            var12 = undefined;
            var11 = var13;
            if(var3) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var16 = _closure1_slot6;
            var13 = _closure1_slot4;
            var3 = {};
            var17 = {};
            var18 = 'relative';
            var17['position'] = var18;
            var3['style'] = var17;
            var20 = _closure1_slot5;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 6;
            var17 = var21[var18];
            var17 = var19.bind(var4)(var17);
            var22 = var17.Text;
            var17 = {};
            var17['variant'] = var9;
            var17['lineClamp'] = var7;
            var17['ellipsizeMode'] = var6;
            var25 = new Array(2);
            var25[0] = var8;
            var26 = {'position': 'absolute', 'top': 0, 'left': 0};
            var26['color'] = var15;
            var28 = {};
            var27 = 2;
            var28['translateY'] = var27;
            var27 = new Array(1);
            var27[0] = var28;
            var26['transform'] = var27;
            var25[1] = var26;
            var17['style'] = var25;
            var17['children'] = var5;
            var22 = var20.bind(var4)(var22, var17);
            var17 = new Array(2);
            var17[0] = var22;
            var18 = var21[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {};
            var18['variant'] = var9;
            var18['lineClamp'] = var7;
            var18['ellipsizeMode'] = var6;
            var21 = new Array(2);
            var21[0] = var8;
            var22 = {};
            var25 = '#ffffff';
            var22['color'] = var25;
            var24 = var24.dark2;
            var22['textShadowColor'] = var24;
            var24 = {'width': 1, 'height': 1};
            var22['textShadowOffset'] = var24;
            var22['textShadowRadius'] = var23;
            var21[1] = var22;
            var18['style'] = var21;
            var18['children'] = var5;
            var18 = var20.bind(var4)(var19, var18);
            var17[1] = var18;
            var3['children'] = var17;
            var3 = var16.bind(var4)(var13, var3);
            return var3;
case 17:
            var3 = new Array(2);
            var3[0] = var8;
            var13 = {};
            var16 = '#ffffff';
            var13['color'] = var16;
            var13['textShadowColor'] = var15;
            var15 = {'width': 0, 'height': 0};
            var13['textShadowOffset'] = var15;
            var13['textShadowRadius'] = var14;
            var3[1] = var13;
            var12 = undefined;
            var11 = var3;
            _fun0001_ip = 21; continue _fun0001;
case 15:
            var3 = var10.map;
            var2 = function(arg1) {
                var3 = _closure1_slot3;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var10 = var3.bind(var10)(var2);
            var3 = var10.filter;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 10;
            var2 = var14[var2];
            var2 = var13.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var12 = var3.bind(var10)(var2);
            var11 = var8;
case 21:
            var10 = _closure1_slot5;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 6;
            var2 = var13[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var2['gradientColors'] = var12;
            var2['variant'] = var9;
            var2['style'] = var11;
            var2['lineClamp'] = var7;
            var2['ellipsizeMode'] = var6;
            var2['children'] = var5;
            var2 = var10.bind(var4)(var3, var2);
            return var2;
case 9:
            var10 = _closure1_slot5;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 6;
            var2 = var11[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var2['variant'] = var9;
            var2['style'] = var8;
            var2['lineClamp'] = var7;
            var2['ellipsizeMode'] = var6;
            var2['children'] = var5;
            var2 = var10.bind(var4)(var3, var2);
            return var2;
case 6:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 6;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var1['variant'] = var9;
            var1['style'] = var8;
            var1['lineClamp'] = var7;
            var1['ellipsizeMode'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/display_name_styles/native/UsernameWithEffects.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();