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
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var7 = var2.CommonTriggerPoints;
    var2 = 2;
    var2 = var9[var2];
    var6 = var8.bind(var1)(var2);
    var4 = var6.createExperiment;
    var2 = {'kind': 'user', 'id': '2024-07_icymi', 'label': 'In-case-you-missed-it tab'};
    var7 = var7.CONNECTION_OPEN_MOBILE;
    var2['commonTriggerPoint'] = var7;
    var7 = {};
    var12 = false;
    var7['enabled'] = var12;
    var2['defaultConfig'] = var7;
    var10 = {'id': 1, 'label': 'enables the new icymi tab'};
    var7 = {};
    var7['enabled'] = var13;
    var10['config'] = var7;
    var7 = new Array(1);
    var7[0] = var10;
    var2['treatments'] = var7;
    var6 = var4.bind(var6)(var2);
    var _closure1_slot3 = var6;
    var2 = 4;
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
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/icymi/ICYMIExperiment.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = 'hide_icymi_tab';
    var3['ICYMI_LAB_FEATURE'] = var7;
    var3['ICYMIExperiment'] = var6;
    var6 = function useICYMIEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var8 = arguments[1];
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = true;
case 2:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = 'hide_icymi_tab';
            var7 = var3.bind(var4)(var1);
            var6 = _closure1_slot3;
            var4 = var6.useExperiment;
            var3 = {};
            var3['location'] = var5;
            var1 = {};
            var1['autoTrackExposure'] = var8;
            var1['disable'] = var7;
            var1 = var4.bind(var6)(var3, var1);
            var4 = _closure1_slot4;
            var3 = var4.useConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['useICYMIEnabled'] = var6;
    var5 = function getICYMIEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arguments[1];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var6 = true;
case 4:
            var4 = _closure1_slot2;
            var3 = var4.get;
            var2 = 'hide_icymi_tab';
            var5 = var3.bind(var4)(var2);
            var4 = _closure1_slot3;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var6;
            var1['disable'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['getICYMIEnabled'] = var5;
    var3['ICYMIStaffDebuggingUtilityExperiment'] = var4;
    var3['ICYMIDesktopExperiment'] = var2;
    return var1;
})();