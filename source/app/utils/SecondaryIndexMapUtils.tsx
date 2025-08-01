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
 0:
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
            if(var9) { _fun0001_ip = 32; continue _fun0001 }
 29:
            var4 = var6;
 32:
            var4 = undefined;
            var6 = var3;
            if(var6) { _fun0001_ip = 60; continue _fun0001 }
 40:
            var5 = var5().value;
            var6 = var2;
            var6 = var6 === var12;
            var3 = var6;
            if(var6) { _fun0001_ip = 60; continue _fun0001 }
 57:
            var4 = var5;
 60:
            var8 = var4;
            var4 = var3;
            if(var4) { _fun0001_ip = 72; continue _fun0001 }
 69:
            var2.return();
 72:
            var10 = arg2;
            var5 = var10[Symbol.iterator];
            var10 = var5().next;
            var6 = undefined;
            var9 = undefined;
            var11 = var10().value;
            var13 = var5;
            var13 = var13 === var12;
            var6 = var13;
            if(var13) { _fun0001_ip = 102; continue _fun0001 }
 99:
            var9 = var11;
 102:
            var9 = undefined;
            var11 = var6;
            if(var11) { _fun0001_ip = 130; continue _fun0001 }
 110:
            var10 = var10().value;
            var11 = var5;
            var11 = var11 === var12;
            var6 = var11;
            if(var11) { _fun0001_ip = 130; continue _fun0001 }
 127:
            var9 = var10;
 130:
            var7 = var9;
            var9 = var6;
            if(var9) { _fun0001_ip = 142; continue _fun0001 }
 139:
            var5.return();
 142:
            var7 = var8 === var7;
            return var7;
 148:
            CatchBlockStart(arg_register=3);
            if(var6) { _fun0001_ip = 156; continue _fun0001 }
 153:
            var5.return();
 156:
            throw var4;
 158:
            CatchBlockStart(arg_register=0);
            if(var3) { _fun0001_ip = 166; continue _fun0001 }
 163:
            var2.return();
 166:
            throw var1;
        }
    };
    var3['isVersionEqual'] = var2;
    return var1;
})();