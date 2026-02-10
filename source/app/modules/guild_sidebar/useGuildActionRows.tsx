// app/modules/guild_sidebar/useGuildActionRows.tsx
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
    var4 = var4.ChannelListGuildActionRow;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot5 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/useGuildActionRows.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildActionRows(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var5 = _closure1_slot1;
            var24 = _closure1_slot2;
            var3 = 3;
            var3 = var24[var3];
            var22 = undefined;
            var4 = var5.bind(var22)(var3);
            var3 = var8.id;
            var15 = var4.bind(var22)(var3);
            var21 = _closure1_slot0;
            var3 = 4;
            var3 = var24[var3];
            var6 = var21.bind(var22)(var3);
            var4 = var6.useCanReviewGuildMemberApplications;
            var3 = var8.id;
            var7 = var4.bind(var6)(var3);
            var3 = 5;
            var3 = var24[var3];
            var6 = var21.bind(var22)(var3);
            var4 = var6.useShowRoleSubscriptionsInChannelList;
            var3 = var8.id;
            var12 = var4.bind(var6)(var3);
            var3 = 6;
            var3 = var24[var3];
            var4 = var21.bind(var22)(var3);
            var3 = var4.useGuildShopVisibleInGuild;
            var11 = var3.bind(var4)(var8);
            var3 = 7;
            var3 = var24[var3];
            var4 = var21.bind(var22)(var3);
            var3 = var4.hasSocialLayerStorefront;
            var9 = var3.bind(var4)(var8);
            var3 = 8;
            var3 = var24[var3];
            var6 = var21.bind(var22)(var3);
            var4 = var6.useIsEligibleForSocialLayerStorefrontUserExperiment;
            var3 = {};
            var23 = 'guild-action-rows';
            var3['location'] = var23;
            var10 = var4.bind(var6)(var3);
            var3 = 9;
            var3 = var24[var3];
            var6 = var21.bind(var22)(var3);
            var4 = var6.useCanSeeOnboardingHome;
            var3 = var8.id;
            var17 = var4.bind(var6)(var3);
            var3 = 10;
            var3 = var24[var3];
            var13 = var21.bind(var22)(var3);
            var6 = var13.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var14 = var8.id;
            var3 = new Array(1);
            var3[0] = var14;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getNewMemberActions;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var6.bind(var13)(var4, var1, var3);
            var1 = 11;
            var1 = var24[var1];
            var3 = var5.bind(var22)(var1);
            var1 = var8.id;
            var19 = var3.bind(var22)(var1);
            var1 = 12;
            var1 = var24[var1];
            var4 = var21.bind(var22)(var1);
            var3 = var4.useAllActionsCompleted;
            var1 = var8.id;
            var16 = var3.bind(var4)(var1);
            var1 = 13;
            var1 = var24[var1];
            var4 = var21.bind(var22)(var1);
            var3 = var4.useCanAccessMemberSafetyPage;
            var1 = var8.id;
            var1 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var13 = var8.features;
            var6 = var13.has;
            var4 = _closure1_slot5;
            var3 = var4.HUB;
            var13 = var6.bind(var13)(var3);
            var14 = var8.features;
            var6 = var14.has;
            var3 = var4.COMMUNITY;
            var14 = var6.bind(var14)(var3);
            var20 = var8.features;
            var6 = var20.has;
            var3 = var4.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var3 = var6.bind(var20)(var3);
            var3 = 14;
            var3 = var24[var3];
            var5 = var5.bind(var22)(var3);
            var3 = var8.id;
            var5 = var5.bind(var22)(var3);
            var3 = 15;
            var3 = var24[var3];
            var6 = var21.bind(var22)(var3);
            var3 = var6.useGuildPowerupsMobileEnabledExperiment;
            var26 = 'useGuildActionRows';
            var6 = var3.bind(var6)(var26);
            var3 = 16;
            var3 = var24[var3];
            var25 = var21.bind(var22)(var3);
            var20 = var25.useGameServerEnabled;
            var3 = var8.id;
            var3 = var20.bind(var25)(var3, var26);
            var25 = var8.features;
            var20 = var25.has;
            var4 = var4.GAME_SERVERS;
            var4 = var20.bind(var25)(var4);
            var20 = 17;
            var20 = var24[var20];
            var22 = var21.bind(var22)(var20);
            var21 = var22.useIsBoostProgressBarEnabled;
            var20 = {};
            var20['location'] = var23;
            var20 = var21.bind(var22)(var8, var20);
            if(!var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var21 = var1.push;
            var20 = _closure1_slot4;
            var20 = var20.GUILD_HUB_HEADER_OPTIONS;
            var20 = var21.bind(var1)(var20);
case 2:
            var16 = !var16;
            if(!var16) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = var17;
case 4:
            if(!var16) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = var19;
case 6:
            if(!var16) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var19 = null;
            var16 = var19 != var18;
case 8:
            if(!var16) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var19 = var18.length;
            var18 = 0;
            var16 = var19 > var18;
case 10:
            if(!var16) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var18 = var1.push;
            var16 = _closure1_slot4;
            var16 = var16.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var16 = var18.bind(var1)(var16);
case 12:
            var16 = !var13;
            if(!var16) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var16 = var17;
case 14:
            if(!var16) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var17 = var1.push;
            var16 = _closure1_slot4;
            var16 = var16.GUILD_HOME;
            var16 = var17.bind(var1)(var16);
case 16:
            if(!var15) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var16 = var1.push;
            var15 = _closure1_slot4;
            var15 = var15.GUILD_SCHEDULED_EVENTS;
            var15 = var16.bind(var1)(var15);
case 18:
            var13 = !var13;
            if(!var13) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var13 = var14;
case 20:
            if(!var13) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var14 = var1.push;
            var13 = _closure1_slot4;
            var13 = var13.CHANNELS_AND_ROLES;
            var13 = var14.bind(var1)(var13);
case 22:
            if(!var12) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var13 = var1.push;
            var12 = _closure1_slot4;
            var12 = var12.GUILD_ROLE_SUBSCRIPTIONS;
            var12 = var13.bind(var1)(var12);
case 24:
            if(!var11) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var12 = var1.push;
            var11 = _closure1_slot4;
            var11 = var11.GUILD_SHOP;
            var11 = var12.bind(var1)(var11);
case 26:
            if(!var9) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var9 = var10;
case 28:
            if(!var9) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var10 = var1.push;
            var9 = _closure1_slot4;
            var9 = var9.GUILD_GAME_SHOP;
            var9 = var10.bind(var1)(var9);
case 30:
            if(!var7) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var10 = var8.features;
            var9 = var10.has;
            var8 = _closure1_slot5;
            var8 = var8.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var7 = var9.bind(var10)(var8);
case 32:
            if(!var7) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var8 = var1.push;
            var7 = _closure1_slot4;
            var7 = var7.GUILD_MOD_DASH_MEMBER_SAFETY;
            var7 = var8.bind(var1)(var7);
case 34:
            if(!var5) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var5 = var6;
case 36:
            if(!var5) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var6 = var1.push;
            var5 = _closure1_slot4;
            var5 = var5.GUILD_BOOSTS;
            var5 = var6.bind(var1)(var5);
case 38:
            if(!var3) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var3 = var4;
case 40:
            if(!var3) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var3 = var1.push;
            var2 = _closure1_slot4;
            var2 = var2.GAME_SERVERS;
            var2 = var3.bind(var1)(var2);
case 42:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();