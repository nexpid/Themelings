// app/modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var12;
    var8 = function canSeeGuildRoleSubscriptionSettingsContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.guild;
            var6 = var2.isOwner;
            var1 = var2.canManageGuildRoleSubscriptions;
            var8 = var2.isGuildEligibleForRoleSubscriptions;
            var5 = var2.isExpeditedMonetizationOnboardingGuild;
            var7 = var2.isUserInCreatorMonetizationEligibleCountry;
            var2 = var2.shouldRestrictUpdatingRoleSubscriptionSettings;
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = !var6;
case 4:
            var2 = !var2;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var9.features;
            var10 = var11.has;
            var3 = _closure1_slot5;
            var3 = var3.CREATOR_MONETIZABLE;
            var3 = var10.bind(var11)(var3);
            var10 = !var3;
            if(!var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var12 = var9.features;
            var11 = var12.has;
            var3 = _closure1_slot5;
            var3 = var3.CREATOR_MONETIZABLE_PROVISIONAL;
            var3 = var11.bind(var12)(var3);
            var10 = !var3;
case 8:
            var3 = !var10;
            if(!var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = var9.features;
            var9 = var10.has;
            var4 = _closure1_slot5;
            var4 = var4.COMMUNITY;
            var4 = var9.bind(var10)(var4);
            var9 = !var4;
            var4 = !var9;
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = !var8;
            if(!var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = !var5;
case 14:
            var5 = !var8;
            if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var7;
case 18:
            var5 = var6;
case 16:
            var4 = var5;
case 12:
            var3 = var4;
case 10:
            var2 = var3;
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot8 = var8;
    var7 = function computeGuildRoleSubscriptionSettingsVisibility(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = var4.guild;
            var5 = var1.features;
            var3 = var5.has;
            var2 = _closure1_slot5;
            var2 = var2.CREATOR_MONETIZABLE_DISABLED;
            var2 = var3.bind(var5)(var2);
            if(var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var3 = _closure1_slot8;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            if(var2) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var3 = var4.guild;
            var7 = var4.isOwner;
            var2 = var4.isUserInCreatorMonetizationEligibleCountry;
            var6 = var4.isMonetizationWaitlistEnabledForGuild;
            var5 = var4.isGuildEligibleForRoleSubscriptions;
            var4 = var4.isExpeditedMonetizationOnboardingGuild;
            if(!var7) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            if(var2) { _fun0002_ip = 24; continue _fun0002 }
case 26:
            if(!var6) { _fun0002_ip = 24; continue _fun0002 }
case 27:
            var2 = _closure1_slot7;
            var2 = var2.WAITLIST_ONLY;
            _fun0002_ip = 15; continue _fun0002;
case 24:
            if(!var7) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            if(!var6) { _fun0002_ip = 28; continue _fun0002 }
case 30:
            if(var5) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            if(!var4) { _fun0002_ip = 28; continue _fun0002 }
case 31:
            var5 = var3.features;
            var4 = var5.has;
            var3 = _closure1_slot5;
            var3 = var3.COMMUNITY;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0002_ip = 28; continue _fun0002 }
case 33:
            var3 = _closure1_slot7;
            var3 = var3.NEEDS_COMMUNITY;
            _fun0002_ip = 34; continue _fun0002;
case 28:
            var4 = _closure1_slot7;
            var3 = var4.NONE;
case 34:
            var2 = var3;
case 15:
            return var2;
case 22:
            var2 = _closure1_slot7;
            var2 = var2.VISIBLE;
            return var2;
case 20:
            var1 = _closure1_slot7;
            var1 = var1.NONE;
            return var1;
        }
    };
    var _closure1_slot9 = var7;
    var6 = function useGuildRoleSubscriptionSettingsVisibility(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var12 = arg1;
            var _closure2_slot0 = var12;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var4 = undefined;
            var7 = var3.bind(var4)(var1);
            var5 = var7.useGuildEligibleForRoleSubscriptions;
            var1 = null;
            var8 = var1 == var12;
            var3 = undefined;
            if(var8) { _fun0003_ip = 3; continue _fun0003 }
case 35:
            var3 = var12.id;
case 3:
            var9 = var5.bind(var7)(var3);
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 5;
            var7 = var5[var3];
            var10 = var8.bind(var4)(var7);
            var7 = var10.useIsExpeditedOnboardingGuild;
            var7 = var7.bind(var10)(var12);
            var5 = var5[var3];
            var10 = var8.bind(var4)(var5);
            var8 = var10.useIsMonetizationWaitlistEnabledForGuild;
            var11 = var1 == var12;
            var5 = undefined;
            if(var11) { _fun0003_ip = 36; continue _fun0003 }
case 24:
            var5 = var12.id;
case 36:
            var8 = var8.bind(var10)(var5);
            var5 = _closure1_slot11;
            var10 = var5.bind(var4)(var12);
            var5 = _closure1_slot0;
            var13 = _closure1_slot1;
            var11 = 6;
            var11 = var13[var11];
            var15 = var5.bind(var4)(var11);
            var14 = var15.useStateFromStores;
            var16 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var16;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getCurrentUser;
                    var5 = var1.bind(var2)();
                    var4 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var4 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3, var5);
case 37:
                    return var1;
                }
            };
            var11 = var14.bind(var15)(var11, var6);
            var3 = var13[var3];
            var6 = var5.bind(var4)(var3);
            var3 = var6.useIsUserInCreatorMonetizationEligibleCountry;
            var6 = var3.bind(var6)();
            var3 = 7;
            var3 = var13[var3];
            var13 = var5.bind(var4)(var3);
            var5 = var13.useShouldRestrictUpdatingCreatorMonetizationSettings;
            var14 = var1 == var12;
            var3 = undefined;
            if(var14) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var3 = var12.id;
case 39:
            var3 = var5.bind(var13)(var3);
            var5 = var3.shouldRestrictUpdatingCreatorMonetizationSettings;
            if(!(var1 != var12)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var3 = _closure1_slot9;
            var1 = {};
            var1['guild'] = var12;
            var1['isOwner'] = var11;
            var1['canManageGuildRoleSubscriptions'] = var10;
            var1['isGuildEligibleForRoleSubscriptions'] = var9;
            var1['isMonetizationWaitlistEnabledForGuild'] = var8;
            var1['isExpeditedMonetizationOnboardingGuild'] = var7;
            var1['isUserInCreatorMonetizationEligibleCountry'] = var6;
            var1['shouldRestrictUpdatingRoleSubscriptionSettings'] = var5;
            var1 = var3.bind(var4)(var1);
            _fun0003_ip = 43; continue _fun0003;
case 41:
            var2 = _closure1_slot7;
            var1 = var2.NONE;
case 43:
            return var1;
        }
    };
    var _closure1_slot10 = var6;
    var4 = function useCanManageGuildRoleSubscriptions(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot12;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot11 = var4;
    var2 = function canManageGuildRoleSubscriptions(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var4 = _closure1_slot3;
            var3 = var4.can;
            var2 = _closure1_slot6;
            var2 = var2.ADMINISTRATOR;
            var1 = var3.bind(var4)(var2, var5);
case 44:
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var16 = 0;
    var9 = var12[var16];
    var1 = undefined;
    var9 = var11.bind(var1)(var9);
    var9 = var9.isGuildOwner;
    var _closure1_slot2 = var9;
    var15 = 1;
    var9 = var12[var15];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var14 = 2;
    var9 = var12[var14];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var13 = 3;
    var9 = var12[var13];
    var9 = var11.bind(var1)(var9);
    var10 = var9.GuildFeatures;
    var _closure1_slot5 = var10;
    var9 = var9.Permissions;
    var _closure1_slot6 = var9;
    var9 = {};
    var9['NONE'] = var16;
    var10 = 'NONE';
    var9[var16] = var10;
    var9['WAITLIST_ONLY'] = var15;
    var10 = 'WAITLIST_ONLY';
    var9[var15] = var10;
    var9['NEEDS_COMMUNITY'] = var14;
    var10 = 'NEEDS_COMMUNITY';
    var9[var14] = var10;
    var9['VISIBLE'] = var13;
    var10 = 'VISIBLE';
    var9[var13] = var10;
    var _closure1_slot7 = var9;
    var10 = 8;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var3['GuildRoleSubscriptionSettingsVisibility'] = var9;
    var3['canSeeGuildRoleSubscriptionSettingsContent'] = var8;
    var3['computeGuildRoleSubscriptionSettingsVisibility'] = var7;
    var7 = function canSeeGuildRoleSubscriptionSettings(arg1) {
        var4 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var4.bind(var3)(var2);
        var1 = _closure1_slot7;
        var1 = var1.NONE;
        var1 = var2 !== var1;
        return var1;
    };
    var3['canSeeGuildRoleSubscriptionSettings'] = var7;
    var3['useGuildRoleSubscriptionSettingsVisibility'] = var6;
    var6 = function getGuildRoleSubscriptionSettingsVisibility(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0006_ip = 46; continue _fun0006 }
case 45:
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUser;
            var7 = var1.bind(var2)();
            var3 = _closure1_slot9;
            var2 = {};
            var2['guild'] = var5;
            var6 = _closure1_slot2;
            var1 = undefined;
            var6 = var6.bind(var1)(var5, var7);
            var2['isOwner'] = var6;
            var6 = _closure1_slot12;
            var6 = var6.bind(var1)(var5);
            var2['canManageGuildRoleSubscriptions'] = var6;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 4;
            var6 = var8[var6];
            var10 = var7.bind(var1)(var6);
            var9 = var10.isGuildEligibleForRoleSubscriptions;
            var6 = var5.id;
            var6 = var9.bind(var10)(var6);
            var2['isGuildEligibleForRoleSubscriptions'] = var6;
            var6 = 5;
            var9 = var8[var6];
            var11 = var7.bind(var1)(var9);
            var10 = var11.isMonetizationWaitlistEnabledForGuild;
            var9 = var5.id;
            var9 = var10.bind(var11)(var9);
            var2['isMonetizationWaitlistEnabledForGuild'] = var9;
            var9 = var8[var6];
            var10 = var7.bind(var1)(var9);
            var9 = var10.isExpeditedMonetizationOnboardingGuild;
            var9 = var9.bind(var10)(var5);
            var2['isExpeditedMonetizationOnboardingGuild'] = var9;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.isUserInCreatorMonetizationEligibleCountry;
            var6 = var6.bind(var7)();
            var2['isUserInCreatorMonetizationEligibleCountry'] = var6;
            var6 = var5.features;
            var5 = var6.has;
            var4 = _closure1_slot5;
            var4 = var4.CREATOR_MONETIZABLE_RESTRICTED;
            var4 = var5.bind(var6)(var4);
            var2['shouldRestrictUpdatingRoleSubscriptionSettings'] = var4;
            var1 = var3.bind(var1)(var2);
            return var1;
case 46:
            var1 = _closure1_slot7;
            var1 = var1.NONE;
            return var1;
        }
    };
    var3['getGuildRoleSubscriptionSettingsVisibility'] = var6;
    var5 = function useCanSeeGuildRoleSubscriptionSettings(arg1) {
        var4 = _closure1_slot10;
        var3 = undefined;
        var2 = arg1;
        var2 = var4.bind(var3)(var2);
        var1 = _closure1_slot7;
        var1 = var1.NONE;
        var1 = var2 !== var1;
        return var1;
    };
    var3['useCanSeeGuildRoleSubscriptionSettings'] = var5;
    var3['useCanManageGuildRoleSubscriptions'] = var4;
    var3['canManageGuildRoleSubscriptions'] = var2;
    return var1;
})();