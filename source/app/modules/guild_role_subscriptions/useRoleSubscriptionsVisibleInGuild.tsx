// app/modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function computeCanEveryoneInGuildSeeRoleSubscriptions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = arguments[1];
            var7 = undefined;
            if(!(var2 === var7)) { _fun0001_ip = 38; continue _fun0001 }
 12:
            var5 = _closure1_slot4;
            var1 = new Array(2);
            var1[0] = var5;
            var3 = _closure1_slot3;
            var1[1] = var3;
            var2 = var1;
 38:
            var6 = var2;
            var1 = var6[Symbol.iterator];
            var6 = var1().next;
            var3 = var6().value;
            var2 = var1;
            var5 = var2 === var7;
            var2 = undefined;
            if(var5) { _fun0001_ip = 63; continue _fun0001 }
 60:
            var2 = var3;
 63:
            var3 = undefined;
            if(var5) { _fun0001_ip = 93; continue _fun0001 }
 68:
            var8 = var6().value;
            var6 = var1;
            var6 = var6 === var7;
            var3 = undefined;
            var5 = var6;
            if(var6) { _fun0001_ip = 93; continue _fun0001 }
 87:
            var3 = var8;
            var5 = var6;
 93:
            if(var5) { _fun0001_ip = 99; continue _fun0001 }
 96:
            var1.return();
 99:
            var1 = var2.getGuild;
            var5 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 209; continue _fun0001 }
 115:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 3;
            var2 = var8[var2];
            var6 = var6.bind(var7)(var2);
            var2 = var6.isCreatorMonetizationEnabledGuild;
            var2 = var2.bind(var6)(var5);
            var6 = var5.features;
            var5 = var6.has;
            var1 = _closure1_slot5;
            var1 = var1.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
            var1 = var5.bind(var6)(var1);
            var2 = !var2;
            if(var2) { _fun0001_ip = 184; continue _fun0001 }
 181:
            var2 = !var1;
 184:
            var1 = !var2;
            if(!var2) { _fun0001_ip = 207; continue _fun0001 }
 190:
            var2 = var3.isViewingServerShop;
            var2 = var2.bind(var3)(var4);
            var2 = !var2;
            var1 = !var2;
 207:
            return var1;
 209:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var4 = function useRoleSubscriptionsVisibleInGuild(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var6 = undefined;
            var3 = var4.bind(var6)(var3);
            var3 = var3.bind(var6)(var5);
            var4 = _closure1_slot0;
            var8 = 5;
            var8 = var7[var8];
            var10 = var4.bind(var6)(var8);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot4;
            var8 = new Array(2);
            var8[0] = var11;
            var2 = _closure1_slot3;
            var8[1] = var2;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var4 = _closure1_slot6;
                var3 = _closure2_slot0;
                var5 = _closure1_slot4;
                var2 = new Array(2);
                var2[0] = var5;
                var1 = _closure1_slot3;
                var2[1] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = var9.bind(var10)(var8, var1, var2);
            var1 = 6;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.useShouldHideGuildPurchaseEntryPoints;
            var1 = var1.bind(var4)(var5);
            var1 = var1.shouldHideGuildPurchaseEntryPoints;
            var1 = !var1;
            if(!var1) { _fun0002_ip = 144; continue _fun0002 }
 135:
            if(var2) { _fun0002_ip = 141; continue _fun0002 }
 138:
            var2 = var3;
 141:
            var1 = var2;
 144:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GuildFeatures;
    var _closure1_slot5 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function areRoleSubscriptionsVisibleInGuild(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var1 = _closure1_slot6;
            var4 = undefined;
            var3 = var1.bind(var4)(var5);
            var1 = !var3;
            var1 = !var1;
            if(var3) { _fun0003_ip = 61; continue _fun0003 }
 26:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.computeHasRoleSubscriptionsInGuild;
            var2 = arg2;
            var1 = var3.bind(var4)(var5, var2);
 61:
            return var1;
        }
    };
    var3['areRoleSubscriptionsVisibleInGuild'] = var5;
    var3['useRoleSubscriptionsVisibleInGuild'] = var4;
    var2 = function useShowRoleSubscriptionsInChannelList(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var1 = _closure1_slot7;
            var4 = undefined;
            var1 = var1.bind(var4)(var5);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.useIsEligibleForSubscriptionsInGuildShop;
            var2 = 'useShowRoleSubscriptionsInChannelList';
            var2 = var3.bind(var4)(var5, var2);
            if(!var1) { _fun0004_ip = 67; continue _fun0004 }
 56:
            var2 = !var2;
            if(var2) { _fun0004_ip = 64; continue _fun0004 }
 62:
            var2 = true;
 64:
            var1 = var2;
 67:
            return var1;
        }
    };
    var3['useShowRoleSubscriptionsInChannelList'] = var2;
    return var1;
})();