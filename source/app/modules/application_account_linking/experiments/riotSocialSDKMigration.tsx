// app/modules/application_account_linking/experiments/riotSocialSDKMigration.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var7 = true;
    var4['value'] = var7;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var9 = {};
    var4 = {};
    var1 = false;
    var4['enabled'] = var1;
    var9[0] = var4;
    var4 = {};
    var4['enabled'] = var7;
    var9[1] = var4;
    var10 = {};
    var10['enabled'] = var1;
    var4 = 0;
    var7 = var6[var4];
    var1 = undefined;
    var11 = var5.bind(var1)(var7);
    var8 = var11.createApexExperiment;
    var7 = {'name': '2026-04-riot-social-sdk-migration', 'kind': 'user'};
    var7['defaultConfig'] = var10;
    var7['variations'] = var9;
    var7 = var8.bind(var11)(var7);
    var _closure1_slot0 = var7;
    var7 = var6[var4];
    var11 = var5.bind(var1)(var7);
    var8 = var11.createApexExperiment;
    var7 = {'name': '2026-05-riot-social-sdk-migration-us--canada', 'kind': 'user'};
    var7['defaultConfig'] = var10;
    var7['variations'] = var9;
    var7 = var8.bind(var11)(var7);
    var _closure1_slot1 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'name': '2026-05-riot-social-sdk-migration-all-regions', 'kind': 'user'};
    var4['defaultConfig'] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_account_linking/experiments/riotSocialSDKMigration.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsRiotSocialSDKMigrationEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var1 = var3.useConfig;
            var1 = var1.bind(var3)(var5);
            var4 = _closure1_slot1;
            var3 = var4.useConfig;
            var3 = var3.bind(var4)(var5);
            var4 = _closure1_slot2;
            var2 = var4.useConfig;
            var2 = var2.bind(var4)(var5);
            var1 = var1.enabled;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.enabled;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2.enabled;
case 4:
            return var1;
        }
    };
    var3['useIsRiotSocialSDKMigrationEnabled'] = var4;
    var2 = function getIsRiotSocialSDKMigrationEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var1 = var3.getConfig;
            var1 = var1.bind(var3)(var5);
            var4 = _closure1_slot1;
            var3 = var4.getConfig;
            var3 = var3.bind(var4)(var5);
            var4 = _closure1_slot2;
            var2 = var4.getConfig;
            var2 = var2.bind(var4)(var5);
            var1 = var1.enabled;
            if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = var3.enabled;
case 2:
            if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var2.enabled;
case 4:
            return var1;
        }
    };
    var3['getIsRiotSocialSDKMigrationEnabled'] = var2;
    return var1;
})();