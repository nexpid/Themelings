// app/modules/experiments/apex/ApexExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var1 = function getUnitId(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = 'guild';
            if(!(var1 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'user';
            if(!(var1 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.assertNever;
            var2 = var2.bind(var3)(var4);
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
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var6);
    var1 = 0;
    var6 = var5[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 4;
    var6 = var5[var6];
    var8 = var4.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/experiments/apex/ApexExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var2 = function createApexExperiment(arg1) {
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
    var3['default'] = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var2 = var2.ApexExperiment;
    var3['ApexExperiment'] = var2;
    return var1;
})();