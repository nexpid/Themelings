// app/modules/virtual_currency/native/BalanceCounter.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var2 = function BalanceCounter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.value;
            var7 = var1.style;
            var1 = null;
            if(!(var1 !== var8)) { _fun0001_ip = 98; continue _fun0001 }
 19:
            var5 = _closure1_slot2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var6 = 'text-md/semibold';
            var2['variant'] = var6;
            var6 = new Array(1);
            var6[0] = var7;
            var2['style'] = var6;
            var7 = var8.toFixed;
            var6 = 0;
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 98:
            return var1;
        }
    };
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceCounter.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['BalanceCounter'] = var2;
    return var1;
})();