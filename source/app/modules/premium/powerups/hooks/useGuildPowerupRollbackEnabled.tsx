// app/modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx
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
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildPowerupRollbackEnabled(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var1 = var6[var1];
            var4 = undefined;
            var7 = var5.bind(var4)(var1);
            var3 = var7.useVanityURLPerkRollbackEnabled;
            var2 = arg1;
            var1 = arg3;
            var2 = var3.bind(var7)(var2, var1);
            var1 = arg2;
            var3 = var1.skuId;
            var1 = 1;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.VANITY_URL_POWERUP_SKU_ID;
            var1 = var3 === var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function isGuildPowerupRollbackEnabled(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg2;
            var3 = var1.skuId;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var1 = var1.VANITY_URL_POWERUP_SKU_ID;
            var1 = var3 === var1;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 0;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var4 = var5.getVanityURLPerkRollbackEnabled;
            var3 = arg1;
            var2 = arg3;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var3['isGuildPowerupRollbackEnabled'] = var2;
    return var1;
})();