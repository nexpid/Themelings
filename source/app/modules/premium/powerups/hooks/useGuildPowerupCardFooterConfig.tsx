// app/modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.GUILD_POWERUP_CONFIGURABLE_SKUS;
    var _closure1_slot2 = var7;
    var4 = var4.PowerupActiveStatusType;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupCardFooterConfig(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = arg2;
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 1;
            var1 = var8[var1];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var1 = var1.bind(var6)(var7, var4);
            var2 = var1.type;
            var1 = _closure1_slot3;
            var1 = var1.INACTIVE;
            var2 = var2 !== var1;
            var1 = 2;
            var1 = var8[var1];
            var3 = var3.bind(var6)(var1);
            var1 = 'GuildPowerupCardFooterAdmin';
            var6 = var3.bind(var6)(var7, var4, var1);
            var1 = {};
            var3 = var2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = !var6;
case 2:
            var1['showToggleButton'] = var3;
            var3 = var2;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot2;
            var5 = var6.has;
            var4 = var4.skuId;
            var3 = var5.bind(var6)(var4);
case 4:
            var1['showConfigureButton'] = var3;
            var1['isPowerupActive'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();