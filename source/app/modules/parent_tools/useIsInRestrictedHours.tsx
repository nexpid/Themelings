// app/modules/parent_tools/useIsInRestrictedHours.tsx
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
    var4 = 'modules/parent_tools/useIsInRestrictedHours.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsInRestrictedHours() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var6 = undefined;
                var4 = var3.bind(var6)(var1);
                var3 = var4.getIsFamilyCenterV3Enabled;
                var1 = {};
                var5 = 'useIsInRestrictedHours';
                var1['location'] = var5;
                var1 = var3.bind(var4)(var1);
                var3 = !var1;
                var1 = !var3;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot2;
                var2 = var3.getCurrentUser;
                var4 = var2.bind(var3)();
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = var4.restrictedSchedule;
                var4 = var2 == var5;
                var3 = undefined;
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                var4 = var5.isInRestrictedHours;
                var3 = var4.bind(var5)();
case 4:
                var2 = var2 != var3;
                if(!var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var2 = var3;
case 7:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();