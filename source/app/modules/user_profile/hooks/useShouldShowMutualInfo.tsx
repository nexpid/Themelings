// app/modules/user_profile/hooks/useShouldShowMutualInfo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useShouldShowMutualInfo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldShowMutualInfo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 1;
            var4 = var6[var3];
            var3 = undefined;
            var8 = var5.bind(var3)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var7.bind(var8)(var5, var4);
            var5 = _closure1_slot1;
            var2 = 2;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var2 = var2.bind(var3)(var1);
            var5 = null;
            var5 = var5 == var4;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.id;
case 2:
            var1 = var1.id;
            var1 = var3 !== var1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = !var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();