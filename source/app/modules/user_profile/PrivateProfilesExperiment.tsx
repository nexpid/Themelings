// app/modules/user_profile/PrivateProfilesExperiment.tsx
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
    var5 = var8.createApexExperiment;
    var4 = {'name': '2026-02-private-profiles', 'kind': 'user'};
    var9 = {};
    var12 = false;
    var9['enabled'] = var12;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enabled'] = var12;
    var9[0] = var10;
    var10 = {};
    var10['enabled'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/PrivateProfilesExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['PrivateProfilesExperiment'] = var4;
    var4 = function useIsInPrivateProfilesExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot2;
            var3 = var4.useConfig;
            var1 = {};
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var2 = var7[var2];
            var4 = undefined;
            var3 = var6.bind(var4)(var2);
            var2 = var3.useIsInPrivateProfilesStrictExperiment;
            var3 = var2.bind(var3)(var5);
            var2 = 2;
            var2 = var7[var2];
            var4 = var6.bind(var4)(var2);
            var2 = var4.useIsInPrivateProfilesStrictGbExperiment;
            var2 = var2.bind(var4)(var5);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useIsInPrivateProfilesExperiment'] = var4;
    var2 = function getIsInPrivateProfilesExperiment(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot2;
            var3 = var5.getConfig;
            var1 = {};
            var1['location'] = var4;
            var1 = var3.bind(var5)(var1);
            var1 = var1.enabled;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var3 = var5.getIsInPrivateProfilesStrictExperiment;
            var1 = var3.bind(var5)(var4);
case 6:
            if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.getIsInPrivateProfilesStrictGbExperiment;
            var1 = var2.bind(var3)(var4);
case 8:
            return var1;
        }
    };
    var3['getIsInPrivateProfilesExperiment'] = var2;
    return var1;
})();