// app/modules/experiments/apex/ApexExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var2 = function getUnitId(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = 'guild';
            if(!(var1 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'user';
            if(!(var1 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'installation';
            if(!(var1 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.assertNever;
            var2 = var2.bind(var3)(var4);
            return var1;
case 6:
            var2 = _closure1_slot3;
            var1 = var2.getInstallationForTracking;
            var2 = var1.bind(var2)();
            var1 = null;
            var3 = var1 != var2;
            var1 = '';
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var2;
case 8:
            return var1;
case 4:
            var2 = _closure1_slot3;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            return var1;
case 2:
            var1 = arg2;
            var1 = var1.guildId;
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 4;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/experiments/apex/ApexExperiment.tsx';
    var7 = var8.bind(var9)(var7);
    var4 = function createApexExperiment(arg1) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 2;
        var2 = var4[var2];
        var5 = undefined;
        var4 = var3.bind(var5)(var2);
        var3 = _closure1_slot4;
        var2 = _closure1_slot5;
        var1 = arg1;
        var1 = var4.bind(var5)(var1, var3, var2);
        return var1;
    };
    var3['default'] = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApexExperiment;
    var3['ApexExperiment'] = var4;
    var3['getUnitId'] = var2;
    return var1;
})();