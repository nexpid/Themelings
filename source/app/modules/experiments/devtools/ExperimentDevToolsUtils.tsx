// app/modules/experiments/devtools/ExperimentDevToolsUtils.tsx
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
    var4 = {'id': 4294967295, 'label': 'Not Eligible', 'shortLabel': 'Not Eligible'};
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var7 = var7.Variant_Type;
    var7 = var7.OVERRIDE;
    var4['type'] = var7;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/devtools/ExperimentDevToolsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getExperimentVariantsForDevTools(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = var2.system;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var3.ExperimentSystem;
            var3 = var3.APEX;
            if(!(var4 === var3)) { _fun0001_ip = 80; continue _fun0001 }
 50:
            var1 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var1;
            var3 = var4.concat;
            var1 = var2.variants;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 86; continue _fun0001;
 80:
            var1 = var2.variants;
 86:
            return var1;
        }
    };
    var3['getExperimentVariantsForDevTools'] = var2;
    return var1;
})();