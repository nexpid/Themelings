// app/hooks/usePrevValue.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRef;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'hooks/usePrevValue.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePrevValue(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var4 = undefined;
            var2 = null;
            var1 = var5.bind(var4)(var2);
            var2 = var5.bind(var4)(var2);
            var4 = global;
            var6 = var4.Object;
            var5 = var6.is;
            var4 = var2.current;
            var4 = var5.bind(var6)(var3, var4);
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.current;
            var1['current'] = var4;
            var2['current'] = var3;
case 2:
            var1 = var1.current;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();