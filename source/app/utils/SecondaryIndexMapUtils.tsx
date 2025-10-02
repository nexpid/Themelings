// app/utils/SecondaryIndexMapUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'utils/SecondaryIndexMapUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function isVersionEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = var5[Symbol.iterator];
            var5 = var2().next;
            var12 = undefined;
            var3 = undefined;
            var4 = undefined;
            var6 = var5().value;
            var9 = var2;
            var9 = var9 === var12;
            var3 = var9;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6;
case 2:
            var4 = undefined;
            var6 = var3;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var5().value;
            var6 = var2;
            var6 = var6 === var12;
            var3 = var6;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var4 = var5;
case 4:
            var8 = var4;
            var4 = var3;
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2.return();
case 7:
            var10 = arg2;
            var5 = var10[Symbol.iterator];
            var10 = var5().next;
            var6 = undefined;
            var9 = undefined;
            var11 = var10().value;
            var13 = var5;
            var13 = var13 === var12;
            var6 = var13;
            if(var13) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = var11;
case 9:
            var9 = undefined;
            var11 = var6;
            if(var11) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = var10().value;
            var11 = var5;
            var11 = var11 === var12;
            var6 = var11;
            if(var11) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var9 = var10;
case 11:
            var7 = var9;
            var9 = var6;
            if(var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5.return();
case 14:
            var7 = var8 === var7;
            return var7;
case 16:
            CatchBlockStart(arg_register=3);
            if(var6) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5.return();
case 17:
            throw var4;
case 19:
            CatchBlockStart(arg_register=0);
            if(var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2.return();
case 20:
            throw var1;
        }
    };
    var3['isVersionEqual'] = var2;
    return var1;
})();