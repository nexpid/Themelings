// app/modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP;
    var7 = var4.GUILD_POWERUP_CONFIGURABLE_SKUS_MOBILE;
    var _closure1_slot4 = var7;
    var4 = var4.PowerupActiveStatusType;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupCardFooterConfig(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var9;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 3;
            var1 = var10[var1];
            var8 = undefined;
            var1 = var3.bind(var8)(var1);
            var1 = var1.bind(var8)(var9, var4);
            var7 = _closure1_slot0;
            var3 = 4;
            var3 = var10[var3];
            var12 = var7.bind(var8)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot3;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = var3.features;
                    var3 = var4.has;
                    var1 = _closure1_slot6;
                    var1 = var1.GUILD_THEME;
                    var2 = var3.bind(var4)(var1);
case 2:
                    var1 = true;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var6 = var11.bind(var12)(var6, var2, var3);
            var3 = var4.skuId;
            var2 = 5;
            var2 = var10[var2];
            var2 = var7.bind(var8)(var2);
            var2 = var2.GUILD_POWERUP_GUILD_THEME_SKU_ID;
            var3 = var3 === var2;
            var7 = var1.type;
            var2 = _closure1_slot5;
            var2 = var2.INACTIVE;
            var2 = var7 !== var2;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var6;
case 6:
            var2 = var3;
case 4:
            var7 = var1.type;
            var1 = _closure1_slot5;
            var6 = var1.TIER_OVERRIDE_ACTIVATED;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 6;
            var1 = var10[var1];
            var3 = var3.bind(var8)(var1);
            var1 = 'GuildPowerupCardFooterAdmin';
            var8 = var3.bind(var8)(var9, var4, var1);
            var1 = {};
            var3 = var2;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = !var8;
case 8:
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var7 === var6;
            var3 = !var6;
case 10:
            var1['showToggleButton'] = var3;
            var3 = var2;
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = _closure1_slot4;
            var5 = var6.has;
            var4 = var4.skuId;
            var3 = var5.bind(var6)(var4);
case 12:
            var1['showConfigureButton'] = var3;
            var1['isPowerupActive'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();