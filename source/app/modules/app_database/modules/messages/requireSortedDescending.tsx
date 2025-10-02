// app/modules/app_database/modules/messages/requireSortedDescending.tsx
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
    var1 = 2;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/messages/requireSortedDescending.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function requireSortedDescending(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 0;
            var3 = var1[var5];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var6 = var9.length;
            var3 = 2;
            var3 = var6 <= var3;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var10 = 1;
            var2 = var2[var10];
            var8 = var6.bind(var1)(var2);
            var7 = var8.compare;
            var2 = var9[var5];
            var6 = var2.id;
            var2 = var9.length;
            var2 = var2 - var10;
            var2 = var9[var2];
            var2 = var2.id;
            var2 = var7.bind(var8)(var6, var2);
            var3 = var2 >= var5;
case 2:
            var2 = 'messages must be sorted in descending order.';
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['requireSortedDescending'] = var2;
    return var1;
})();