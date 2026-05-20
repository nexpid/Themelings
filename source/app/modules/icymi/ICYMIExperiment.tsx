// app/modules/icymi/ICYMIExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var13 = true;
    var2['value'] = var13;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var9[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var4 = var9[var2];
    var7 = var8.bind(var1)(var4);
    var6 = var7.createApexExperiment;
    var4 = {'name': '2026-04-icymi-staff-only', 'kind': 'user'};
    var10 = {};
    var12 = false;
    var10['enabled'] = var12;
    var4['defaultConfig'] = var10;
    var10 = {};
    var11 = {};
    var11['enabled'] = var13;
    var10[1] = var11;
    var4['variations'] = var10;
    var6 = var6.bind(var7)(var4);
    var _closure1_slot3 = var6;
    var4 = var9[var2];
    var10 = var8.bind(var1)(var4);
    var7 = var10.createApexExperiment;
    var4 = {'name': '2026-03-icymi-staff-debugging-utility', 'kind': 'user'};
    var11 = {};
    var11['enabled'] = var12;
    var4['defaultConfig'] = var11;
    var11 = {};
    var14 = {};
    var14['enabled'] = var13;
    var11[1] = var14;
    var4['variations'] = var11;
    var4 = var7.bind(var10)(var4);
    var2 = var9[var2];
    var10 = var8.bind(var1)(var2);
    var7 = var10.createApexExperiment;
    var2 = {'name': '2026-03-icymi-desktop', 'kind': 'user'};
    var11 = {};
    var11['icymiDesktopEnabled'] = var12;
    var2['defaultConfig'] = var11;
    var11 = {};
    var12 = {};
    var12['icymiDesktopEnabled'] = var13;
    var11[1] = var12;
    var2['variations'] = var11;
    var2 = var7.bind(var10)(var2);
    var _closure1_slot4 = var2;
    var7 = 3;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/icymi/ICYMIExperiment.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = 'hide_icymi_tab';
    var3['ICYMI_LAB_FEATURE'] = var7;
    var3['ICYMIStaffOnlyExperiment'] = var6;
    var6 = function useICYMIEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = 'hide_icymi_tab';
            var1 = var2.bind(var4)(var1);
            var5 = _closure1_slot3;
            var4 = var5.useConfig;
            var2 = {};
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = var2.enabled;
            var5 = _closure1_slot4;
            var4 = var5.useConfig;
            var3 = {};
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useICYMIEnabled'] = var6;
    var5 = function getICYMIEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot2;
            var3 = var4.get;
            var1 = 'hide_icymi_tab';
            var1 = var3.bind(var4)(var1);
            var4 = _closure1_slot3;
            var3 = var4.getConfig;
            var2 = {};
            var5 = arg1;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            var1 = !var1;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['getICYMIEnabled'] = var5;
    var3['ICYMIStaffDebuggingUtilityExperiment'] = var4;
    var3['ICYMIDesktopExperiment'] = var2;
    return var1;
})();