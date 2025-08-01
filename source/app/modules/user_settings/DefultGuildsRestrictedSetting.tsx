// app/modules/user_settings/DefultGuildsRestrictedSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/DefultGuildsRestrictedSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var2 = var6[var1];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var4 = var2.DefaultGuildsRestricted;
            var2 = var4.useSetting;
            var4 = var2.bind(var4)();
            var1 = var6[var1];
            var1 = var5.bind(var3)(var1);
            var2 = var1.DefaultGuildsRestrictedV2;
            var1 = var2.useSetting;
            var1 = var1.bind(var2)();
            var2 = 1;
            var2 = var6[var2];
            var5 = var5.bind(var3)(var2);
            var3 = var5.useIsEligibleForDMDefaultOff;
            var2 = 'useDefaultGuildsRestricted';
            var3 = var3.bind(var5)(var2);
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 125; continue _fun0001 }
 98:
            var5 = !var4;
            var2 = !var5;
            if(!var5) { _fun0001_ip = 122; continue _fun0001 }
 107:
            var5 = !var3;
            var3 = !var5;
            if(!var5) { _fun0001_ip = 119; continue _fun0001 }
 116:
            var3 = var4;
 119:
            var2 = var3;
 122:
            var1 = var2;
 125:
            return var1;
        }
    };
    var3['useDefaultGuildsRestricted'] = var2;
    return var1;
})();