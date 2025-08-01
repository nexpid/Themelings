// app/modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MFALevels;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsMFAEnabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var4 = var7[var3];
            var5 = undefined;
            var10 = var6.bind(var5)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var9.bind(var10)(var8, var4);
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                var1 = var1.mfaLevel;
                return var1;
            };
            var3 = var6.bind(var7)(var3, var1);
            var1 = {};
            var6 = null;
            var6 = var6 == var4;
            if(var6) { _fun0001_ip = 113; continue _fun0001 }
 107:
            var5 = var4.mfaEnabled;
 113:
            var4 = true;
            var4 = var4 === var5;
            var1['isUserMFAEnabled'] = var4;
            var2 = _closure1_slot4;
            var2 = var2.ELEVATED;
            var2 = var3 === var2;
            var1['isModerationMFAEnabled'] = var2;
            return var1;
        }
    };
    var3['useIsMFAEnabled'] = var2;
    return var1;
})();