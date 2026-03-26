// app/modules/icymi/ICYMIExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var2 = {};
    var14 = true;
    var2['value'] = var14;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var10[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var7 = var2.CommonTriggerPoints;
    var2 = 2;
    var2 = var10[var2];
    var5 = var9.bind(var1)(var2);
    var4 = var5.createExperiment;
    var2 = {'kind': 'user', 'id': '2024-07_icymi', 'label': 'In-case-you-missed-it tab'};
    var7 = var7.CONNECTION_OPEN_MOBILE;
    var2['commonTriggerPoint'] = var7;
    var7 = {};
    var13 = false;
    var7['enabled'] = var13;
    var2['defaultConfig'] = var7;
    var8 = {'id': 1, 'label': 'enables the new icymi tab'};
    var7 = {};
    var7['enabled'] = var14;
    var8['config'] = var7;
    var7 = new Array(1);
    var7[0] = var8;
    var2['treatments'] = var7;
    var7 = var4.bind(var5)(var2);
    var _closure1_slot3 = var7;
    var2 = 4;
    var4 = var10[var2];
    var8 = var9.bind(var1)(var4);
    var5 = var8.createApexExperiment;
    var4 = {'name': '2026-03-icymi-staff-debugging-utility', 'kind': 'user'};
    var11 = {};
    var11['enabled'] = var13;
    var4['defaultConfig'] = var11;
    var11 = {};
    var12 = {};
    var12['enabled'] = var14;
    var11[1] = var12;
    var4['variations'] = var11;
    var5 = var5.bind(var8)(var4);
    var4 = var10[var2];
    var11 = var9.bind(var1)(var4);
    var8 = var11.createApexExperiment;
    var4 = {'name': '2026-03-icymi-desktop', 'kind': 'user'};
    var12 = {};
    var12['icymiDesktopEnabled'] = var13;
    var4['defaultConfig'] = var12;
    var12 = {};
    var15 = {};
    var15['icymiDesktopEnabled'] = var14;
    var12[1] = var15;
    var4['variations'] = var12;
    var4 = var8.bind(var11)(var4);
    var _closure1_slot4 = var4;
    var2 = var10[var2];
    var11 = var9.bind(var1)(var2);
    var8 = var11.createApexExperiment;
    var2 = {'name': '2026-03-icymi-sunset-banner', 'kind': 'user'};
    var12 = {};
    var12['enabled'] = var13;
    var2['defaultConfig'] = var12;
    var12 = {};
    var13 = {};
    var13['enabled'] = var14;
    var12[1] = var13;
    var2['variations'] = var12;
    var2 = var8.bind(var11)(var2);
    var8 = 5;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/icymi/ICYMIExperiment.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = 'hide_icymi_tab';
    var3['ICYMI_LAB_FEATURE'] = var8;
    var3['ICYMIExperiment'] = var7;
    var7 = function useICYMIEnabled(arg1) {
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
    var3['useICYMIEnabled'] = var7;
    var6 = function getICYMIEnabled(arg1) {
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
    var3['getICYMIEnabled'] = var6;
    var3['ICYMIStaffDebuggingUtilityExperiment'] = var5;
    var3['ICYMIDesktopExperiment'] = var4;
    var3['ICYMISunsetBannerExperiment'] = var2;
    return var1;
})();