// app/modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.DM_SETTINGS_UPSELL_LAST_SHOWN_KEY;
    var _closure1_slot3 = var7;
    var2 = var2.DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS;
    var _closure1_slot4 = var2;
    var2 = {};
    var4 = function openDmSettingsUpsellModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 1;
            var3 = var1[var6];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var5 = var3.Storage;
            var4 = var5.get;
            var3 = _closure1_slot3;
            var3 = var4.bind(var5)(var3);
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var5 = var4.bind(var5)();
            var4 = null;
            if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5 - var3;
            var3 = _closure1_slot4;
            if(!(!(var4 > var3))) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 5;
            var4 = var10[var3];
            var8 = var9.bind(var1)(var4);
            var4 = var8.trackEvent;
            var3 = var10[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.DmUpsellActionTypes;
            var3 = var3.SUPPRESSED_BY_COOLDOWN;
            var3 = var4.bind(var8)(var3, var7);
            _fun0001_ip = 5; continue _fun0001;
case 2:
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 2;
            var4 = var3[var4];
            var11 = var8.bind(var1)(var4);
            var10 = var11.openLazy;
            var4 = _closure1_slot0;
            var8 = 4;
            var8 = var3[var8];
            var12 = var4.bind(var1)(var8);
            var8 = 3;
            var9 = var3[var8];
            var8 = var3.paths;
            var9 = var12.bind(var1)(var9, var8);
            var8 = {};
            var8['guildId'] = var7;
            var7 = 'dm_settings_upsell_modal';
            var7 = var10.bind(var11)(var9, var7, var8);
            var3 = var3[var6];
            var3 = var4.bind(var1)(var3);
            var4 = var3.Storage;
            var3 = var4.set;
            var2 = _closure1_slot3;
            var2 = var3.bind(var4)(var2, var5);
case 5:
            return var1;
        }
    };
    var2['openDmSettingsUpsellModal'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();