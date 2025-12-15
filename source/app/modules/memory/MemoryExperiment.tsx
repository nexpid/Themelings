// app/modules/memory/MemoryExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var1 = 0;
    var2 = var4[var1];
    var1 = undefined;
    var7 = var3.bind(var1)(var2);
    var6 = var7.createApexExperiment;
    var2 = {'name': '2025-12-shadow-node-spike', 'kind': 'user'};
    var8 = {};
    var9 = false;
    var8['enabled'] = var9;
    var2['defaultConfig'] = var8;
    var8 = {};
    var9 = {};
    var10 = true;
    var9['enabled'] = var10;
    var8[1] = var9;
    var2['variations'] = var8;
    var2 = var6.bind(var7)(var2);
    var _closure1_slot2 = var2;
    var2 = global;
    var7 = var2.setInterval;
    var6 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var1 = undefined;
            if(!(var1 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot2;
            var4 = var5.getConfig;
            var2 = {};
            var6 = 'startMemoryExperiment';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = var2.enabled;
            var _closure1_slot0 = var2;
case 2:
            var4 = _closure1_slot0;
            var2 = global;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var2.clearInterval;
            var3 = _closure1_slot1;
            var3 = var4.bind(var1)(var3);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = var2.gc;
            var2 = var2.bind(var1)();
case 6:
            return var1;
        }
    };
    var2 = 60000;
    var2 = var7.bind(var1)(var6, var2);
    var _closure1_slot1 = var2;
    var2 = 1;
    var2 = var4[var2];
    var4 = var3.bind(var1)(var2);
    var3 = var4.fileFinishedImporting;
    var2 = 'modules/memory/MemoryExperiment.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();