// app/modules/virtual_currency/native/BalanceCounter.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var4 = var2.View;
    var _closure1_slot2 = var4;
    var9 = var2.StyleSheet;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot3 = var2;
    var2 = function BalanceCounter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.value;
            var7 = var1.style;
            var1 = null;
            if(!(var1 !== var10)) { _fun0001_ip = 128; continue _fun0001 }
 19:
            var5 = _closure1_slot3;
            var4 = _closure1_slot2;
            var3 = {};
            var6 = _closure1_slot4;
            var8 = var6.balanceCounterContainer;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var3['style'] = var6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 2;
            var6 = var6[var2];
            var2 = undefined;
            var6 = var7.bind(var2)(var6);
            var7 = var6.Text;
            var6 = {};
            var8 = 'text-md/semibold';
            var6['variant'] = var8;
            var9 = var10.toFixed;
            var8 = 0;
            var8 = var9.bind(var10)(var8);
            var6['children'] = var8;
            var6 = var5.bind(var2)(var7, var6);
            var3['children'] = var6;
            var1 = var5.bind(var2)(var4, var3);
 128:
            return var1;
        }
    };
    var8 = var9.create;
    var4 = {};
    var10 = {'justifyContent': 'center', 'alignItems': 'flex-end', 'marginLeft': 8};
    var4['balanceCounterContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceCounter.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['BalanceCounter'] = var2;
    return var1;
})();