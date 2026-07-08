// app/modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildSettingsSections;
    var _closure1_slot4 = var7;
    var4 = var4.AnalyticsSections;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupConfigureCallback(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = var5.skuId;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 2;
                var2 = var3[var2];
                var5 = undefined;
                var7 = var4.bind(var5)(var2);
                var4 = var7.hideActionSheet;
                var6 = _closure1_slot0;
                var2 = 3;
                var2 = var3[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.GUILD_POWERUPS_BOTTOM_SHEET_KEY;
                var2 = var4.bind(var7)(var2);
                var4 = _closure2_slot1;
                var4 = var4.skuId;
                var7 = 4;
                var3 = var3[var7];
                var3 = var6.bind(var5)(var3);
                var3 = var3.GUILD_POWERUP_ROLE_COLOR_SKU_ID;
                if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var6.bind(var5)(var3);
                var3 = var3.GUILD_POWERUP_TAG_SKU_ID;
                if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var6 = var4.bind(var5)(var3);
                var3 = _closure2_slot1;
                var7 = var3.skuId;
                var3 = global;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = 'Unsupported powerup SKU ID: ';
                var4 = var4.bind(var3)(var7);
                var3 = false;
                var3 = var6.bind(var5)(var3, var4);
                return var5;
case 4:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var6 = var4.bind(var5)(var3);
                var4 = var6.canUseMobileServerTagSettings;
                var3 = _closure2_slot0;
                var3 = var4.bind(var6)(var3);
                if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                return var5;
case 6:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var8 = var4.bind(var5)(var3);
                var7 = var8.open;
                var6 = _closure2_slot0;
                var3 = _closure1_slot4;
                var4 = var3.TAG;
                var3 = _closure1_slot5;
                var3 = var3.GUILD_POWERUPS_OVERVIEW_CARD;
                var3 = var7.bind(var8)(var6, var4, var3);
                var3 = undefined;
                return var3;
case 2:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.open;
                var3 = _closure2_slot0;
                var2 = _closure1_slot4;
                var2 = var2.ROLES;
                var1 = _closure1_slot5;
                var1 = var1.GUILD_POWERUPS_OVERVIEW_CARD;
                var1 = var4.bind(var5)(var3, var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();