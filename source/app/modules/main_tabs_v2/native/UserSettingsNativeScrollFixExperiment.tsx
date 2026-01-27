// app/modules/main_tabs_v2/native/UserSettingsNativeScrollFixExperiment.tsx
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
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.Platform;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'name': '2026-01-user-settings-native-scroll-fix', 'kind': 'user'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enabled'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/UserSettingsNativeScrollFixExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsUserSettingsScrollFixEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.location;
            var4 = _closure1_slot3;
            var2 = var4.useConfig;
            var1 = {};
            var1['location'] = var5;
            var1 = var2.bind(var4)(var1);
            var1 = var1.enabled;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.isIOS;
            var1 = var2.bind(var4)();
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = global;
            var5 = var2.parseInt;
            var3 = _closure1_slot2;
            var4 = var3.Version;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '';
            var4 = var3.bind(var2)(var4);
            var3 = undefined;
            var2 = 10;
            var3 = var5.bind(var3)(var4, var2);
            var2 = 26;
            var1 = var3 >= var2;
case 4:
            return var1;
        }
    };
    var3['useIsUserSettingsScrollFixEnabled'] = var2;
    return var1;
})();