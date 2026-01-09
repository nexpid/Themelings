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
    var4 = 7;
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
                var7 = _closure1_slot2;
                var1 = 2;
                var2 = var7[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
                var4 = var5.hideActionSheet;
                var6 = _closure1_slot0;
                var2 = 3;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.GUILD_POWERUPS_BOTTOM_SHEET_KEY;
                var2 = var4.bind(var5)(var2);
                var4 = _closure2_slot1;
                var5 = var4.skuId;
                var4 = 4;
                var4 = var7[var4];
                var4 = var6.bind(var1)(var4);
                var4 = var4.GUILD_POWERUP_ROLE_COLOR_SKU_ID;
                if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 5;
                var4 = var6[var4];
                var8 = var5.bind(var1)(var4);
                var7 = var8.open;
                var6 = _closure2_slot0;
                var4 = _closure1_slot4;
                var5 = var4.ROLES;
                var4 = _closure1_slot5;
                var4 = var4.GUILD_POWERUPS_OVERVIEW_CARD;
                var4 = var7.bind(var8)(var6, var5, var4);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 6;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var2 = _closure2_slot1;
                var5 = var2.skuId;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'Unsupported powerup SKU ID: ';
                var3 = var3.bind(var2)(var5);
                var2 = false;
                var2 = var4.bind(var1)(var2, var3);
case 4:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();