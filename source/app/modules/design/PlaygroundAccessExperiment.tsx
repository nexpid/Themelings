// app/modules/design/PlaygroundAccessExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var5 = function usePlaygroundAccessExperiment(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var _closure1_slot4 = var5;
    var4 = function getPlaygroundAccessExperiment(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var6 = {};
    var13 = true;
    var6['value'] = var13;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var6);
    var1 = 0;
    var7 = var9[var1];
    var6 = metroImportDefault;
    var1 = undefined;
    var6 = var6.bind(var1)(var7);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var9[var6];
    var10 = var8.bind(var1)(var6);
    var7 = var10.createApexExperiment;
    var6 = {'name': '2026-02-mana-playground-access', 'kind': 'user'};
    var11 = {};
    var12 = false;
    var11['enabled'] = var12;
    var6['defaultConfig'] = var11;
    var11 = {};
    var12 = {};
    var12['enabled'] = var13;
    var11[1] = var12;
    var6['variations'] = var11;
    var6 = var7.bind(var10)(var6);
    var _closure1_slot3 = var6;
    var7 = 3;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/design/PlaygroundAccessExperiment.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['usePlaygroundAccessExperiment'] = var5;
    var3['getPlaygroundAccessExperiment'] = var4;
    var4 = function useHasPlaygroundAccess(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var5.bind(var6)(var3, var1);
            var3 = null;
            var5 = var3 == var7;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var7.isStaff;
            var1 = var5.bind(var7)();
case 2:
            var5 = true;
            var1 = var5 === var1;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var3 == var7;
            var3 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var7.isStaffPersonal;
            var3 = var6.bind(var7)();
case 6:
            var1 = var5 === var3;
case 4:
            var3 = _closure1_slot4;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['useHasPlaygroundAccess'] = var4;
    var2 = function getHasPlaygroundAccess(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot2;
            var1 = var3.getCurrentUser;
            var7 = var1.bind(var3)();
            var3 = null;
            var5 = var3 == var7;
            var4 = undefined;
            var1 = undefined;
            if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = var7.isStaff;
            var1 = var5.bind(var7)();
case 10:
            var5 = true;
            var1 = var5 === var1;
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = var3 == var7;
            var3 = undefined;
            if(var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var6 = var7.isStaffPersonal;
            var3 = var6.bind(var7)();
case 14:
            var1 = var5 === var3;
case 12:
            if(var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = _closure1_slot5;
            var2 = arg1;
            var1 = var3.bind(var4)(var2);
case 16:
            return var1;
        }
    };
    var3['getHasPlaygroundAccess'] = var2;
    return var1;
})();