// app/modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useProvisionalAccountApplication(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 1;
        var6 = var5[var2];
        var2 = undefined;
        var7 = var4.bind(var2)(var6);
        var6 = var7.useStateFromStores;
        var8 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var8;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot2;
                var2 = var3.getGameRelationshipsForUser;
                var1 = _closure2_slot0;
                var2 = var2.bind(var3)(var1);
                var3 = var2.length;
                var1 = 0;
                if(!(var1 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = undefined;
                return var3;
case 2:
                var1 = var2[var1];
                var1 = var1.applicationId;
                return var1;
            }
        };
        var3 = var6.bind(var7)(var3, var1);
        var1 = 2;
        var1 = var5[var1];
        var2 = var4.bind(var2)(var1);
        var1 = var2.useGetOrFetchApplication;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();