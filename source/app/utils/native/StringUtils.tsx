// app/utils/native/StringUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/StringUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function splitGraphemes(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 0;
            var1 = var1[var5];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var9 = var1.bind(var2)();
            var1 = new Array(0);
            var2 = var9.exec;
            var3 = var2.bind(var9)(var8);
            var6 = null;
            var2 = global;
            var4 = 0;
            var7 = 0;
            if(!(var6 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var3.index;
            if(!(var10 > var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var1.push;
            var13 = var2.Array;
            var12 = var13.from;
            var14 = var8.slice;
            var10 = var3.index;
            var10 = var14.bind(var8)(var4, var10);
            var16 = var12.bind(var13)(var10);
            var10 = new Array(0);
            var17 = var10;
            var15 = 0;
            var12 = arraySpread(var17, var16, var15);
            var17 = var11;
            var16 = var10;
            var15 = var1;
            var10 = apply(var17, var16, var15);
case 4:
            var11 = var1.push;
            var10 = var3[var5];
            var10 = var11.bind(var1)(var10);
            var4 = var9.lastIndex;
            var10 = var9.exec;
            var3 = var10.bind(var9)(var8);
            var7 = var4;
            if(var6 !== var3) { _fun0001_ip = 3; continue _fun0001 }
case 2:
            var3 = var8.length;
            if(!(var7 < var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var1.push;
            var6 = var2.Array;
            var4 = var6.from;
            var2 = var8.slice;
            var2 = var2.bind(var8)(var7);
            var16 = var4.bind(var6)(var2);
            var2 = new Array(0);
            var17 = var2;
            var15 = 0;
            var4 = arraySpread(var17, var16, var15);
            var17 = var3;
            var16 = var2;
            var15 = var1;
            var2 = apply(var17, var16, var15);
case 6:
            return var1;
        }
    };
    var3['splitGraphemes'] = var2;
    return var1;
})();