// app/modules/search/StringMatchUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = function calculateJaroWinklerDistance(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = _closure1_slot1;
            var4 = undefined;
            var7 = var1.bind(var4)(var6, var5);
            var1 = 0;
            if(!(!(var7 > var1))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var1;
case 2:
            var1 = _closure1_slot2;
            var1 = var1.bind(var4)(var6, var5);
            var3 = var6.length;
            var8 = var7 / var3;
            var3 = var5.length;
            var3 = var7 / var3;
            var3 = var8 + var3;
            var1 = var7 - var1;
            var1 = var1 / var7;
            var3 = var3 + var1;
            var1 = 3;
            var3 = var3 / var1;
            var7 = 0.7;
            var1 = var3;
            if(!(!(var1 < var7))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot3;
            var4 = var2.bind(var4)(var6, var5);
            var2 = 0.1;
            var4 = var2 * var4;
            var2 = 1;
            var2 = var2 - var3;
            var2 = var4 * var2;
            var1 = var3 + var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot0 = var1;
    var1 = function _matching(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var11 = arg1;
            var10 = arg2;
            var9 = global;
            var3 = var9.Math;
            var2 = var3.floor;
            var6 = var9.Math;
            var5 = var6.max;
            var4 = var11.length;
            var1 = var10.length;
            var4 = var5.bind(var6)(var4, var1);
            var1 = 2;
            var1 = var4 / var1;
            var2 = var2.bind(var3)(var1);
            var1 = 1;
            var8 = var2 - var1;
            var7 = new Array(0);
            var1 = var11.length;
            var6 = 0;
            var2 = var6 < var1;
            var5 = true;
            var4 = 0;
            var3 = 0;
            var1 = 0;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var13 = var9.Math;
            var12 = var13.max;
            var2 = var3 - var8;
            var13 = var12.bind(var13)(var6, var2);
            var15 = var9.Math;
            var14 = var15.min;
            var12 = var10.length;
            var2 = var3 + var8;
            var2 = var14.bind(var15)(var12, var2);
            var12 = var4;
            if(!(var13 <= var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var14 = var11[var3];
            var2 = var10[var13];
            if(!(var14 === var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var7[var13];
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            var7[var13] = var5;
            var12 = var4 + 1;
            _fun0002_ip = 8; continue _fun0002;
case 10:
            var13 = var13 + 1;
            var16 = var9.Math;
            var15 = var16.min;
            var14 = var10.length;
            var2 = var3 + var8;
            var2 = var15.bind(var16)(var14, var2);
            var12 = var4;
            if(var13 <= var2) { _fun0002_ip = 9; continue _fun0002 }
case 8:
            var3 = var3 + 1;
            var2 = var11.length;
            var4 = var12;
            var1 = var4;
            if(var3 < var2) { _fun0002_ip = 7; continue _fun0002 }
case 6:
            return var1;
        }
    };
    var _closure1_slot1 = var1;
    var1 = function _transpositions(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var11 = arg1;
            var10 = arg2;
            var2 = global;
            var5 = var2.Math;
            var3 = var5.floor;
            var7 = var2.Math;
            var6 = var7.max;
            var4 = var11.length;
            var1 = var10.length;
            var1 = var6.bind(var7)(var4, var1);
            var4 = 2;
            var1 = var1 / var4;
            var3 = var3.bind(var5)(var1);
            var1 = 1;
            var9 = var3 - var1;
            var7 = {'a': '', 'b': ''};
            var6 = new Array(0);
            var3 = var11.length;
            var1 = 0;
            var3 = var1 < var3;
            var8 = true;
            var5 = 0;
            if(!var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var13 = var2.Math;
            var12 = var13.max;
            var3 = var5 - var9;
            var12 = var12.bind(var13)(var1, var3);
            var15 = var2.Math;
            var14 = var15.min;
            var13 = var10.length;
            var3 = var5 + var9;
            var3 = var14.bind(var15)(var13, var3);
            if(!(var12 <= var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var13 = var11[var5];
            var3 = var10[var12];
            if(!(var13 === var3)) { _fun0003_ip = 17; continue _fun0003 }
case 12:
            var3 = var6[var12];
            if(var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var13 = var7.a;
            var3 = var11[var5];
            var3 = var13 + var3;
            var7['a'] = var3;
            var6[var12] = var8;
            _fun0003_ip = 15; continue _fun0003;
case 17:
            var12 = var12 + 1;
            var15 = var2.Math;
            var14 = var15.min;
            var13 = var10.length;
            var3 = var5 + var9;
            var3 = var14.bind(var15)(var13, var3);
            if(var12 <= var3) { _fun0003_ip = 16; continue _fun0003 }
case 15:
            var5 = var5 + 1;
            var3 = var11.length;
            if(var5 < var3) { _fun0003_ip = 14; continue _fun0003 }
case 13:
            var6 = new Array(0);
            var3 = var10.length;
            var3 = var1 < var3;
            var5 = 0;
            if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var13 = var2.Math;
            var12 = var13.max;
            var3 = var5 - var9;
            var12 = var12.bind(var13)(var1, var3);
            var15 = var2.Math;
            var14 = var15.min;
            var13 = var11.length;
            var3 = var5 + var9;
            var3 = var14.bind(var15)(var13, var3);
            if(!(var12 <= var3)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var13 = var10[var5];
            var3 = var11[var12];
            if(!(var13 === var3)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var3 = var6[var12];
            if(var3) { _fun0003_ip = 23; continue _fun0003 }
case 25:
            var13 = var7.b;
            var3 = var10[var5];
            var3 = var13 + var3;
            var7['b'] = var3;
            var6[var12] = var8;
            _fun0003_ip = 21; continue _fun0003;
case 23:
            var12 = var12 + 1;
            var15 = var2.Math;
            var14 = var15.min;
            var13 = var11.length;
            var3 = var5 + var9;
            var3 = var14.bind(var15)(var13, var3);
            if(var12 <= var3) { _fun0003_ip = 22; continue _fun0003 }
case 21:
            var5 = var5 + 1;
            var3 = var10.length;
            if(var5 < var3) { _fun0003_ip = 20; continue _fun0003 }
case 19:
            var3 = var7.a;
            var3 = var3.length;
            var3 = var1 < var3;
            var6 = 0;
            var5 = 0;
            var1 = 0;
            if(!var3) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var3 = var7.a;
            var9 = var3[var5];
            var3 = var7.b;
            var3 = var3[var5];
            var8 = var6;
            if(!(var9 !== var3)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var8 = var6 + 1;
case 28:
            var5 = var5 + 1;
            var3 = var7.a;
            var3 = var3.length;
            var6 = var8;
            var1 = var6;
            if(var5 < var3) { _fun0003_ip = 27; continue _fun0003 }
case 26:
            var3 = var2.Math;
            var2 = var3.floor;
            var1 = var1 / var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function _prefix(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var3 = 4;
            var4 = 0;
case 30:
            var7 = var6[var4];
            var2 = var5[var4];
            var1 = var4;
            if(!(var7 === var2)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var2 = var1 + 1;
            var4 = var2;
            if(var4 < var3) { _fun0004_ip = 30; continue _fun0004 }
case 33:
            var2 = var2 + 1;
            return var2;
case 31:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
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
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = arg3;
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var1 = {};
case 34:
            var1 = var1.caseSensitive;
            var3 = undefined;
            if(!(var3 !== var1)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 36:
            var6 = _closure1_slot0;
            var1 = var5.toLowerCase;
            var2 = var1.bind(var5)();
            var1 = var4.toLowerCase;
            var1 = var1.bind(var4)();
            var1 = var6.bind(var3)(var2, var1);
            _fun0005_ip = 39; continue _fun0005;
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