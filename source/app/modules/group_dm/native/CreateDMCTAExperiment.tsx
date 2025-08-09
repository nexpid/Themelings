// app/modules/group_dm/native/CreateDMCTAExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-08_create_dm_cta_mobile', 'label': 'Create DM CTA (Mobile)'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Enabled'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/group_dm/native/CreateDMCTAExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['CreateDMCTAExperiment'] = var4;
    var2 = function useCreateDMCTAExperimentEnabled(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = arg2;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.useIsInCPFCHoldout;
            var6 = var3.bind(var4)(var1);
            var4 = _closure1_slot2;
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var11 = var1;
            var10 = var5;
            var7 = copyDataProperties(var11, var10);
            var7 = var6;
            if(var7) { _fun0001_ip = 97; continue _fun0001 }
 76:
            var8 = var5.disable;
            var6 = null;
            var6 = var6 != var8;
            if(!var6) { _fun0001_ip = 94; continue _fun0001 }
 91:
            var6 = var8;
 94:
            var7 = var6;
 97:
            var6 = 'disable';
            var1[var6] = var7;
            var6 = var5.autoTrackExposure;
            var5 = 'autoTrackExposure';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['useCreateDMCTAExperimentEnabled'] = var2;
    return var1;
})();