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
 0:
            var13 = arg1;
            var12 = arg2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var7 = undefined;
            var2 = var2.bind(var7)(var1);
            var1 = var2.useThemeContext;
            var14 = var1.bind(var2)();
            var5 = null;
            if(!(var5 == var12)) { _fun0001_ip = 53; continue _fun0001 }
 47:
            var12 = var14.theme;
 53:
            var1 = var13;
            if(!(var5 != var1)) { _fun0001_ip = 475; continue _fun0001 }
 63:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var8 = 0;
            var2 = var2[var8];
            var2 = var3.bind(var7)(var2);
            var3 = var2.internal;
            var2 = var3.isSemanticColor;
            var2 = var2.bind(var3)(var13);
            var10 = var13;
            if(!var2) { _fun0001_ip = 139; continue _fun0001 }
 105:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var7)(var2);
            var3 = var2.internal;
            var2 = var3.getSemanticColorName;
            var10 = var2.bind(var3)(var13);
 139:
            var19 = var14.key;
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var22 = '';
            var2 = '-';
            var21 = var10;
            var20 = var2;
            var18 = var2;
            var17 = var12;
            var6 = var22[var6](var21, var20, var19, var18, var17, var16);
            var3 = _closure1_slot3;
            var2 = var3.get;
            var10 = var2.bind(var3)(var6);
            var3 = var10;
            if(!(var5 == var10)) { _fun0001_ip = 445; continue _fun0001 }
 205:
            var9 = 'string';
            var2 = typeof var13;
            if(!(var9 !== var2)) { _fun0001_ip = 324; continue _fun0001 }
 216:
            var9 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var9 = var2.internal;
            var2 = var9.isSemanticColor;
            var2 = var2.bind(var9)(var13);
            var3 = var10;
            if(!var2) { _fun0001_ip = 445; continue _fun0001 }
 259:
            var9 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = var16[var8];
            var2 = var9.bind(var7)(var2);
            var11 = var2.internal;
            var9 = var11.resolveSemanticColor;
            var15 = _closure1_slot0;
            var2 = 1;
            var2 = var16[var2];
            var15 = var15.bind(var7)(var2);
            var2 = var15.getSemanticColorContextFromThemeContext;
            var2 = var2.bind(var15)(var14);
            var3 = var9.bind(var11)(var12, var13, var2);
            _fun0001_ip = 445; continue _fun0001;
 324:
            var11 = var13[var8];
            var9 = '#';
            var2 = var13;
            if(!(var9 !== var11)) { _fun0001_ip = 472; continue _fun0001 }
 342:
            var9 = _closure1_slot4;
            var9 = var13 in var9;
            var3 = var10;
            if(!var9) { _fun0001_ip = 445; continue _fun0001 }
 356:
            var9 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = var15[var8];
            var10 = var9.bind(var7)(var10);
            var11 = var10.internal;
            var10 = var11.resolveSemanticColor;
            var8 = var15[var8];
            var8 = var9.bind(var7)(var8);
            var9 = var8.colors;
            var8 = _closure1_slot4;
            var8 = var8[var13];
            var9 = var9[var8];
            var13 = _closure1_slot0;
            var8 = 1;
            var8 = var15[var8];
            var13 = var13.bind(var7)(var8);
            var8 = var13.getSemanticColorContextFromThemeContext;
            var8 = var8.bind(var13)(var14);
            var3 = var10.bind(var11)(var12, var9, var8);
 445:
            var5 = var5 != var3;
            var2 = undefined;
            if(!var5) { _fun0001_ip = 472; continue _fun0001 }
 454:
            var5 = _closure1_slot3;
            var4 = var5.set;
            var4 = var4.bind(var5)(var6, var3);
            var2 = var3;
 472:
            var1 = var2;
 475:
            return var1;
        }
    };
    var3['useToken'] = var2;
    return var1;
})();