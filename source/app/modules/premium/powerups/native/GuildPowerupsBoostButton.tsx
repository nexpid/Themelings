// app/modules/premium/powerups/native/GuildPowerupsBoostButton.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticsSections;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsBoostButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsBoostButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guildId;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var3 = var6[var1];
            var5 = undefined;
            var10 = var4.bind(var5)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var8.bind(var10)(var7, var3);
            var3 = var6[var1];
            var10 = var4.bind(var5)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var1 = _closure1_slot6;
                var1 = var1.boostSlots;
                return var1;
            };
            var3 = var8.bind(var10)(var7, var3);
            var _closure2_slot1 = var3;
            var8 = _closure1_slot1;
            var7 = 7;
            var7 = var6[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var10 = true;
            var7['forceFetch'] = var10;
            var8 = var8.bind(var5)(var7);
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var6.bind(var7)(var4, var1);
            var1 = null;
            if(!(var1 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 8;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.PremiumSubscriptionGroupRole;
            var6 = var6.UNSPECIFIED;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = var4.premiumGroupRole;
case 4:
            var7 = _closure1_slot3;
            var10 = var7.useMemo;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.values;
                var1 = _closure2_slot1;
                var3 = var2.bind(var3)(var1);
                var2 = var3.find;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.isAvailable;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var7)(var3, var4);
            var4 = var7.useCallback;
            var3 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg2;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openTransferModal;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var4, var1);
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = new Array(0);
            var7 = var4.bind(var7)(var3, var2);
            var2 = var1 == var11;
            var1 = null;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 10;
            var2 = var12[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['guild'] = var11;
            var2['previousGuildSubscriptionSlot'] = var10;
            var9 = _closure1_slot7;
            var9 = var9.GUILD_POWERUPS_OVERVIEW_SIDEBAR;
            var2['analyticsSection'] = var9;
            var8 = var8.fractionalState;
            var2['fractionalPremiumState'] = var8;
            var2['onAvailableSlotPress'] = var7;
            var2['premiumGroupRole'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 7:
            return var1;
        }
    };
    var3['GuildPowerupsBoostButton'] = var2;
    return var1;
})();