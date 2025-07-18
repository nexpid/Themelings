// app/modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.GuildFeatures;
    var _closure1_slot4 = var7;
    var2 = var2.Permissions;
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 3;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.aTFQKi;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var7;
    var7 = function description() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 3;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.oTbFQk;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['description'] = var7;
    var7 = false;
    var2['canCreateGuild'] = var7;
    var4 = function useIsGuildSupported() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(2);
        var3[0] = var2;
        var1 = _closure1_slot3;
        var3[1] = var1;
        var2 = function() {
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var2 = arg1;
                    var5 = var2.features;
                    var4 = var5.has;
                    var1 = _closure1_slot4;
                    var1 = var1.ROLE_SUBSCRIPTIONS_ENABLED;
                    var1 = var4.bind(var5)(var1);
                    if(!var1) { _fun0001_ip = 64; continue _fun0001 }
 35:
                    var6 = var2.features;
                    var5 = var6.has;
                    var4 = _closure1_slot4;
                    var4 = var4.CREATOR_MONETIZABLE_RESTRICTED;
                    var4 = var5.bind(var6)(var4);
                    var1 = !var4;
 64:
                    if(!var1) { _fun0001_ip = 93; continue _fun0001 }
 67:
                    var6 = _closure1_slot3;
                    var5 = var6.can;
                    var4 = _closure1_slot5;
                    var4 = var4.ADMINISTRATOR;
                    var1 = var5.bind(var6)(var4, var2);
 93:
                    if(!var1) { _fun0001_ip = 128; continue _fun0001 }
 96:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 5;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.isUserEligibleForTierTemplates;
                    var1 = var4.bind(var5)();
 128:
                    if(!var1) { _fun0001_ip = 169; continue _fun0001 }
 131:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 5;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.isGuildEligibleForTierTemplates;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 169:
                    return var1;
                }
            };
            return var1;
        };
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var2['useIsGuildSupported'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();