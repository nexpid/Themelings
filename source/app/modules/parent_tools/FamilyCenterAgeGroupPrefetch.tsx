// app/modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function prefetchFamilyCenterAgeGroupWhen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot2;
            var2 = var3.getAgeGroup;
            var3 = var2.bind(var3)();
            var2 = null;
            var1 = var2 == var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot2;
            var2 = var3.isLoading;
            var2 = var2.bind(var3)();
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var3 = _closure1_slot2;
            var2 = var3.canRefetch;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.initialPageLoad;
            var1 = var1.bind(var2)();
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var3['prefetchFamilyCenterAgeGroupWhen'] = var2;
    return var1;
})();