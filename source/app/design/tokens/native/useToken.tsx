// app/design/tokens/native/useToken.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var4 = true;
    var7['value'] = var4;
    var4 = '__esModule';
    var4 = var8.bind(var9)(var3, var4, var7);
    var4 = var1.Map;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var15 = var7;
    var4 = new var15[var4](var14);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot3 = var4;
    var8 = var1.Object;
    var7 = var8.fromEntries;
    var10 = var1.Object;
    var9 = var10.keys;
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var4 = var4.colors;
    var10 = var9.bind(var10)(var4);
    var9 = var10.map;
    var4 = function(arg1) {
        var2 = arg1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var1 = var3.kebabCase;
        var3 = var1.bind(var3)(var2);
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var4 = var9.bind(var10)(var4);
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/tokens/native/useToken.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useToken(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var14 = arg1;
            var13 = arg2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var8 = undefined;
            var2 = var2.bind(var8)(var1);
            var1 = var2.useThemeContext;
            var15 = var1.bind(var2)();
            var6 = null;
            if(!(var6 == var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = var15.theme;
case 2:
            var1 = var14;
            if(!(var6 != var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = typeof var14;
            var2 = 'object';
            if(!(var2 === var10)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var6 !== var14)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var2 = 'resolve';
            var2 = var2 in var14;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 0;
            var2 = var4[var2];
            var2 = var3.bind(var8)(var2);
            var3 = var2.internal;
            var2 = var3.isSemanticColor;
            var2 = var2.bind(var3)(var14);
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 10:
            var3 = var14.resolve;
            var2 = {};
            var4 = var15.enabledExperiments;
            if(!(var6 == var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = new Array(0);
case 11:
            var2['enabledExperiments'] = var4;
            var7 = var15.density;
            var9 = var6 != var7;
            var4 = 'compact';
            if(!var9) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = var7;
case 13:
            var2['density'] = var4;
            var2 = var3.bind(var14)(var2);
            _fun0001_ip = 15; continue _fun0001;
case 6:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var9 = 0;
            var3 = var3[var9];
            var3 = var4.bind(var8)(var3);
            var4 = var3.internal;
            var3 = var4.isSemanticColor;
            var3 = var3.bind(var4)(var14);
            var12 = var14;
            if(!var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var4.bind(var8)(var3);
            var4 = var3.internal;
            var3 = var4.getSemanticColorName;
            var12 = var3.bind(var4)(var14);
case 16:
            var20 = var15.key;
            var3 = global;
            var3 = var3.HermesInternal;
            var7 = var3.concat;
            var23 = '';
            var3 = '-';
            var22 = var12;
            var21 = var3;
            var19 = var3;
            var18 = var13;
            var7 = var23[var7](var22, var21, var20, var19, var18, var17);
            var4 = _closure1_slot3;
            var3 = var4.get;
            var11 = var3.bind(var4)(var7);
            var4 = var11;
            if(!(var6 == var11)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = 'string';
            if(!(var3 !== var10)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var10 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var10.bind(var8)(var3);
            var10 = var3.internal;
            var3 = var10.isSemanticColor;
            var3 = var3.bind(var10)(var14);
            var4 = var11;
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 22:
            var10 = _closure1_slot1;
            var17 = _closure1_slot2;
            var3 = var17[var9];
            var3 = var10.bind(var8)(var3);
            var12 = var3.internal;
            var10 = var12.resolveSemanticColor;
            var16 = _closure1_slot0;
            var3 = 1;
            var3 = var17[var3];
            var16 = var16.bind(var8)(var3);
            var3 = var16.getSemanticColorContextFromThemeContext;
            var3 = var3.bind(var16)(var15);
            var4 = var10.bind(var12)(var13, var14, var3);
            _fun0001_ip = 18; continue _fun0001;
case 20:
            var12 = var14[var9];
            var10 = '#';
            var3 = var14;
            if(!(var10 !== var12)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var10 = _closure1_slot4;
            var10 = var14 in var10;
            var4 = var11;
            if(!var10) { _fun0001_ip = 18; continue _fun0001 }
case 25:
            var10 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = var16[var9];
            var11 = var10.bind(var8)(var11);
            var12 = var11.internal;
            var11 = var12.resolveSemanticColor;
            var9 = var16[var9];
            var9 = var10.bind(var8)(var9);
            var10 = var9.colors;
            var9 = _closure1_slot4;
            var9 = var9[var14];
            var10 = var10[var9];
            var14 = _closure1_slot0;
            var9 = 1;
            var9 = var16[var9];
            var14 = var14.bind(var8)(var9);
            var9 = var14.getSemanticColorContextFromThemeContext;
            var9 = var9.bind(var14)(var15);
            var4 = var11.bind(var12)(var13, var10, var9);
case 18:
            var6 = var6 != var4;
            var3 = undefined;
            if(!var6) { _fun0001_ip = 23; continue _fun0001 }
case 26:
            var6 = _closure1_slot3;
            var5 = var6.set;
            var5 = var5.bind(var6)(var7, var4);
            var3 = var4;
case 23:
            var2 = var3;
case 15:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useToken'] = var2;
    return var1;
})();