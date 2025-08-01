// app/utils/native/TimeUtils.tsx
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
    var2 = 'utils/native/TimeUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getTimeFormat(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg2;
            var1 = arg1;
            var1 = var1 | 0;
            var2 = 60;
            var8 = var1 % var2;
            var1 = var1 - var8;
            var5 = var1 / var2;
            var2 = null;
            var6 = var2 == var3;
            var4 = undefined;
            var1 = undefined;
            if(var6) { _fun0001_ip = 43; continue _fun0001 }
 37:
            var1 = var3.padMinutes;
 43:
            if(!(var2 != var1)) { _fun0001_ip = 50; continue _fun0001 }
 47:
            if(var1) { _fun0001_ip = 123; continue _fun0001 }
 50:
            var1 = global;
            var2 = var1.String;
            var7 = var2.bind(var4)(var5);
            var2 = var1.String;
            var9 = var2.bind(var4)(var8);
            var6 = var9.padStart;
            var3 = 2;
            var2 = '0';
            var6 = var6.bind(var9)(var3, var2);
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ':';
            var1 = var3.bind(var2)(var7, var1, var6);
            _fun0001_ip = 206; continue _fun0001;
 123:
            var2 = global;
            var3 = var2.String;
            var6 = var3.bind(var4)(var5);
            var3 = var6.padStart;
            var7 = 2;
            var5 = '0';
            var6 = var3.bind(var6)(var7, var5);
            var3 = var2.String;
            var4 = var3.bind(var4)(var8);
            var3 = var4.padStart;
            var5 = var3.bind(var4)(var7, var5);
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ':';
            var1 = var4.bind(var3)(var6, var2, var5);
 206:
            return var1;
        }
    };
    var3['getTimeFormat'] = var2;
    return var1;
})();