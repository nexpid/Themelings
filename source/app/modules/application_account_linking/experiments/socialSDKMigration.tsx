// app/modules/application_account_linking/experiments/socialSDKMigration.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var5 = true;
    var2['value'] = var5;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var9 = {};
    var2 = {};
    var1 = false;
    var2['enabled'] = var1;
    var9[0] = var2;
    var2 = {};
    var2['enabled'] = var5;
    var9[1] = var2;
    var10 = {};
    var10['enabled'] = var1;
    var2 = 0;
    var5 = var7[var2];
    var1 = undefined;
    var11 = var6.bind(var1)(var5);
    var8 = var11.createApexExperiment;
    var5 = {'name': '2026-04-riot-social-sdk-migration', 'kind': 'user'};
    var5['defaultConfig'] = var10;
    var5['variations'] = var9;
    var5 = var8.bind(var11)(var5);
    var _closure1_slot0 = var5;
    var5 = var7[var2];
    var11 = var6.bind(var1)(var5);
    var8 = var11.createApexExperiment;
    var5 = {'name': '2026-05-riot-social-sdk-migration-us--canada', 'kind': 'user'};
    var5['defaultConfig'] = var10;
    var5['variations'] = var9;
    var5 = var8.bind(var11)(var5);
    var _closure1_slot1 = var5;
    var5 = var7[var2];
    var11 = var6.bind(var1)(var5);
    var8 = var11.createApexExperiment;
    var5 = {'name': '2026-05-riot-social-sdk-migration-all-regions', 'kind': 'user'};
    var5['defaultConfig'] = var10;
    var5['variations'] = var9;
    var5 = var8.bind(var11)(var5);
    var _closure1_slot2 = var5;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createApexExperiment;
    var2 = {'name': '2026-06-battlenet-social-sdk-migration', 'kind': 'user'};
    var2['defaultConfig'] = var10;
    var2['variations'] = var9;
    var2 = var5.bind(var8)(var2);
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_account_linking/experiments/socialSDKMigration.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useIsRiotSocialSDKMigrationEnabled(arg1) {
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
    var3['useIsRiotSocialSDKMigrationEnabled'] = var5;
    var4 = function getIsRiotSocialSDKMigrationEnabled(arg1) {
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
    var3['getIsRiotSocialSDKMigrationEnabled'] = var4;
    var3['battlenetSocialSDKMigrationExperiment'] = var2;
    return var1;
})();