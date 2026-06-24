// app/modules/search/StringMatchUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = function calculateJaroWinklerDistance(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var3 = global;
            var4 = var3.Math;
            var2 = var4.floor;
            var9 = var3.Math;
            var6 = var9.max;
            var5 = var8.length;
            var1 = var7.length;
            var1 = var6.bind(var9)(var5, var1);
            var9 = 2;
            var1 = var1 / var9;
            var1 = var2.bind(var4)(var1);
            var2 = 1;
            var12 = var1 - var2;
            var11 = new Array(0);
            var1 = var8.length;
            var4 = 0;
            var1 = var4 < var1;
            var13 = true;
            var10 = 0;
            var6 = 0;
            var5 = 0;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = var3.Math;
            var14 = var15.max;
            var1 = var6 - var12;
            var15 = var14.bind(var15)(var4, var1);
            var17 = var3.Math;
            var16 = var17.min;
            var14 = var7.length;
            var1 = var6 + var12;
            var1 = var16.bind(var17)(var14, var1);
            var14 = var10;
            if(!(var15 <= var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = var8[var6];
            var1 = var7[var15];
            if(!(var16 === var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var11[var15];
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var11[var15] = var13;
            var14 = var10 + 1;
            _fun0001_ip = 4; continue _fun0001;
case 6:
            var15 = var15 + 1;
            var18 = var3.Math;
            var17 = var18.min;
            var16 = var7.length;
            var1 = var6 + var12;
            var1 = var17.bind(var18)(var16, var1);
            var14 = var10;
            if(var15 <= var1) { _fun0001_ip = 5; continue _fun0001 }
case 4:
            var6 = var6 + 1;
            var1 = var8.length;
            var10 = var14;
            var5 = var10;
            if(var6 < var1) { _fun0001_ip = 3; continue _fun0001 }
case 2:
            if(!(!(var5 > var4))) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            return var4;
case 9:
            var10 = var3.Math;
            var6 = var10.floor;
            var14 = var3.Math;
            var12 = var14.max;
            var11 = var8.length;
            var1 = var7.length;
            var1 = var12.bind(var14)(var11, var1);
            var1 = var1 / var9;
            var1 = var6.bind(var10)(var1);
            var11 = var1 - var2;
            var12 = {'a': '', 'b': ''};
            var10 = new Array(0);
            var1 = var8.length;
            var1 = var4 < var1;
            var6 = 0;
            if(!var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var15 = var3.Math;
            var14 = var15.max;
            var1 = var6 - var11;
            var14 = var14.bind(var15)(var4, var1);
            var17 = var3.Math;
            var16 = var17.min;
            var15 = var7.length;
            var1 = var6 + var11;
            var1 = var16.bind(var17)(var15, var1);
            if(!(var14 <= var1)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var15 = var8[var6];
            var1 = var7[var14];
            if(!(var15 === var1)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var1 = var10[var14];
            if(var1) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var15 = var12.a;
            var1 = var8[var6];
            var1 = var15 + var1;
            var12['a'] = var1;
            var10[var14] = var13;
            _fun0001_ip = 13; continue _fun0001;
case 15:
            var14 = var14 + 1;
            var17 = var3.Math;
            var16 = var17.min;
            var15 = var7.length;
            var1 = var6 + var11;
            var1 = var16.bind(var17)(var15, var1);
            if(var14 <= var1) { _fun0001_ip = 14; continue _fun0001 }
case 13:
            var6 = var6 + 1;
            var1 = var8.length;
            if(var6 < var1) { _fun0001_ip = 12; continue _fun0001 }
case 11:
            var10 = new Array(0);
            var1 = var7.length;
            var1 = var4 < var1;
            var6 = 0;
            if(!var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var15 = var3.Math;
            var14 = var15.max;
            var1 = var6 - var11;
            var14 = var14.bind(var15)(var4, var1);
            var17 = var3.Math;
            var16 = var17.min;
            var15 = var8.length;
            var1 = var6 + var11;
            var1 = var16.bind(var17)(var15, var1);
            if(!(var14 <= var1)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var15 = var7[var6];
            var1 = var8[var14];
            if(!(var15 === var1)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = var10[var14];
            if(var1) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var15 = var12.b;
            var1 = var7[var6];
            var1 = var15 + var1;
            var12['b'] = var1;
            var10[var14] = var13;
            _fun0001_ip = 20; continue _fun0001;
case 22:
            var14 = var14 + 1;
            var17 = var3.Math;
            var16 = var17.min;
            var15 = var8.length;
            var1 = var6 + var11;
            var1 = var16.bind(var17)(var15, var1);
            if(var14 <= var1) { _fun0001_ip = 21; continue _fun0001 }
case 20:
            var6 = var6 + 1;
            var1 = var7.length;
            if(var6 < var1) { _fun0001_ip = 19; continue _fun0001 }
case 18:
            var1 = var12.a;
            var1 = var1.length;
            var6 = var4 < var1;
            var11 = 0;
            var10 = 0;
            var1 = 0;
            if(!var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var6 = var12.a;
            var14 = var6[var10];
            var6 = var12.b;
            var6 = var6[var10];
            var13 = var11;
            if(!(var14 !== var6)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var13 = var11 + 1;
case 27:
            var10 = var10 + 1;
            var6 = var12.a;
            var6 = var6.length;
            var11 = var13;
            var1 = var11;
            if(var10 < var6) { _fun0001_ip = 26; continue _fun0001 }
case 25:
            var6 = var3.Math;
            var3 = var6.floor;
            var1 = var1 / var9;
            var1 = var3.bind(var6)(var1);
            var3 = var8.length;
            var6 = var5 / var3;
            var3 = var7.length;
            var3 = var5 / var3;
            var3 = var6 + var3;
            var1 = var5 - var1;
            var1 = var1 / var5;
            var3 = var3 + var1;
            var1 = 3;
            var1 = var3 / var1;
            var6 = 4;
            var3 = 0.7;
            var5 = 0;
            if(!(!(var1 < var3))) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var9 = var8[var5];
            var3 = var7[var5];
            var4 = var5;
            if(!(var9 === var3)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var3 = var5 + 1;
            var5 = var3;
            if(var5 < var6) { _fun0001_ip = 30; continue _fun0001 }
case 33:
            var4 = var3 + 1;
case 31:
            var3 = 0.1;
            var3 = var3 * var4;
            var2 = var2 - var1;
            var2 = var3 * var2;
            var2 = var1 + var2;
            return var2;
case 29:
            return var1;
        }
    };
    var _closure1_slot0 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/StringMatchUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function calculateJaroWinklerSimilarity(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = arg3;
            var2 = null;
            if(!(var2 == var1)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var1 = {};
case 34:
            var1 = var1.caseSensitive;
            var3 = undefined;
            if(!(var3 !== var1)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            if(var1) { _fun0002_ip = 38; continue _fun0002 }
case 36:
            var6 = _closure1_slot0;
            var1 = var5.toLowerCase;
            var2 = var1.bind(var5)();
            var1 = var4.toLowerCase;
            var1 = var1.bind(var4)();
            var1 = var6.bind(var3)(var2, var1);
            _fun0002_ip = 39; continue _fun0002;
case 38:
            var2 = _closure1_slot0;
            var1 = var2.bind(var3)(var5, var4);
case 39:
            return var1;
        }
    };
    var3['calculateJaroWinklerSimilarity'] = var2;
    return var1;
})();