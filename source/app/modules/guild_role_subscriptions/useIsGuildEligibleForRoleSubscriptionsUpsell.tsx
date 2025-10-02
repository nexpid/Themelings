// app/modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildOwner;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsGuildEligibleForRoleSubscriptionsUpsell(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var5 = var6[var2];
            var7 = undefined;
            var10 = var3.bind(var7)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var9.bind(var10)(var8, var5);
            var2 = var6[var2];
            var6 = var3.bind(var7)(var2);
            var3 = var6.useStateFromStores;
            var8 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var3.bind(var6)(var2, var1);
            var3 = null;
            var1 = var3 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot2;
            var1 = var2.bind(var7)(var5, var6);
case 2:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 5;
            var2 = var8[var2];
            var6 = var6.bind(var7)(var2);
            var2 = var6.useIsUserInCreatorMonetizationEligibleCountry;
            var2 = var2.bind(var6)();
            var6 = undefined;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var3 == var5;
            var7 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var5.features;
            var9 = var10.has;
            var8 = _closure1_slot5;
            var8 = var8.COMMUNITY;
            var7 = var9.bind(var10)(var8);
case 6:
            var1 = var3 != var7;
            var6 = var7;
case 4:
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var6;
case 8:
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var2;
case 10:
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var3 != var5;
            if(!var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = var5.features;
            var7 = var8.has;
            var6 = _closure1_slot5;
            var6 = var6.CREATOR_MONETIZABLE;
            var2 = var7.bind(var8)(var6);
case 14:
            if(var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var3 != var5;
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = var5.features;
            var8 = var9.has;
            var7 = _closure1_slot5;
            var7 = var7.CREATOR_MONETIZABLE_PROVISIONAL;
            var6 = var8.bind(var9)(var7);
case 18:
            var2 = var6;
case 16:
            if(var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var3 = var3 != var5;
            if(!var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var6 = var5.features;
            var5 = var6.has;
            var4 = _closure1_slot5;
            var4 = var4.CREATOR_MONETIZABLE_DISABLED;
            var3 = var5.bind(var6)(var4);
case 22:
            var2 = var3;
case 20:
            var1 = !var2;
case 12:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();