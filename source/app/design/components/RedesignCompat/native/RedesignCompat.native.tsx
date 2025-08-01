// app/design/components/RedesignCompat/native/RedesignCompat.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot0 = var4;
    var5 = var8.createContext;
    var4 = false;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot1 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/RedesignCompat/native/RedesignCompat.native.tsx';
    var5 = var6.bind(var7)(var5);
    var3['RedesignCompatContext'] = var4;
    var2 = function RedesignCompat(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.children;
            var6 = var2.enabled;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var3 = var2.Provider;
            var2 = {};
            var5 = null;
            var5 = var5 == var6;
            if(var5) { _fun0001_ip = 44; continue _fun0001 }
 41:
            var5 = var6;
 44:
            var2['value'] = var5;
            var2['children'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['RedesignCompat'] = var2;
    return var1;
})();