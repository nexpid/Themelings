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
            var7 = arg1;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot1;
            var22 = _closure1_slot2;
            var3 = 3;
            var3 = var22[var3];
            var21 = undefined;
            var4 = var5.bind(var21)(var3);
            var3 = var7.id;
            var15 = var4.bind(var21)(var3);
            var20 = _closure1_slot0;
            var3 = 4;
            var3 = var22[var3];
            var6 = var20.bind(var21)(var3);
            var4 = var6.useCanReviewGuildMemberApplications;
            var3 = var7.id;
            var6 = var4.bind(var6)(var3);
            var3 = 5;
            var3 = var22[var3];
            var8 = var20.bind(var21)(var3);
            var4 = var8.useShowRoleSubscriptionsInChannelList;
            var3 = var7.id;
            var11 = var4.bind(var8)(var3);
            var3 = 6;
            var3 = var22[var3];
            var4 = var20.bind(var21)(var3);
            var3 = var4.useGuildShopVisibleInGuild;
            var10 = var3.bind(var4)(var7);
            var3 = 7;
            var3 = var22[var3];
            var4 = var20.bind(var21)(var3);
            var3 = var4.hasSocialLayerStorefront;
            var8 = var3.bind(var4)(var7);
            var3 = 8;
            var3 = var22[var3];
            var9 = var20.bind(var21)(var3);
            var4 = var9.useIsEligibleForSocialLayerStorefrontUserExperiment;
            var3 = {};
            var12 = 'guild-action-rows';
            var3['location'] = var12;
            var9 = var4.bind(var9)(var3);
            var3 = 9;
            var3 = var22[var3];
            var12 = var20.bind(var21)(var3);
            var4 = var12.useCanSeeOnboardingHome;
            var3 = var7.id;
            var17 = var4.bind(var12)(var3);
            var3 = 10;
            var3 = var22[var3];
            var13 = var20.bind(var21)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var14 = var7.id;
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
            var16 = var12.bind(var13)(var4, var1, var3);
            var1 = 11;
            var1 = var22[var1];
            var3 = var5.bind(var21)(var1);
            var1 = var7.id;
            var18 = var3.bind(var21)(var1);
            var1 = 12;
            var1 = var22[var1];
            var4 = var20.bind(var21)(var1);
            var3 = var4.useAllActionsCompleted;
            var1 = var7.id;
            var19 = var3.bind(var4)(var1);
            var1 = 13;
            var1 = var22[var1];
            var4 = var20.bind(var21)(var1);
            var3 = var4.useCanAccessMemberSafetyPage;
            var1 = var7.id;
            var1 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var13 = var7.features;
            var12 = var13.has;
            var4 = _closure1_slot5;
            var3 = var4.HUB;
            var12 = var12.bind(var13)(var3);
            var14 = var7.features;
            var13 = var14.has;
            var3 = var4.COMMUNITY;
            var14 = var13.bind(var14)(var3);
            var3 = 14;
            var3 = var22[var3];
            var23 = var20.bind(var21)(var3);
            var13 = var23.useShowBrowseChannelsExperiment;
            var3 = 15;
            var3 = var22[var3];
            var25 = var20.bind(var21)(var3);
            var24 = var25.isOptInEnabledForGuild;
            var3 = var7.id;
            var3 = var24.bind(var25)(var3);
            var3 = !var3;
            var13 = var13.bind(var23)(var3);
            var24 = var7.features;
            var23 = var24.has;
            var3 = var4.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var3 = var23.bind(var24)(var3);
            var3 = 16;
            var3 = var22[var3];
            var5 = var5.bind(var21)(var3);
            var3 = var7.id;
            var5 = var5.bind(var21)(var3);
            var3 = 17;
            var3 = var22[var3];
            var22 = var20.bind(var21)(var3);
            var21 = var22.useGameServerEnabled;
            var20 = var7.id;
            var3 = 'useGuildActionRows';
            var3 = var21.bind(var22)(var20, var3);
            var21 = var7.features;
            var20 = var21.has;
            var4 = var4.GAME_SERVERS;
            var4 = var20.bind(var21)(var4);
            if(!var12) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var21 = var1.push;
            var20 = _closure1_slot4;
            var20 = var20.GUILD_HUB_HEADER_OPTIONS;
            var20 = var21.bind(var1)(var20);
case 2:
            if(var19) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!var17) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            if(!var18) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var18 = null;
            if(!(var18 != var16)) { _fun0001_ip = 4; continue _fun0001 }
case 8:
            var18 = var16.length;
            var16 = 0;
            if(!(var18 > var16)) { _fun0001_ip = 4; continue _fun0001 }
case 9:
            var18 = var1.push;
            var16 = _closure1_slot4;
            var16 = var16.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var16 = var18.bind(var1)(var16);
            _fun0001_ip = 10; continue _fun0001;
case 4:
            var16 = var7.premiumProgressBarEnabled;
case 10:
            var16 = !var12;
            if(!var16) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var16 = var17;
case 11:
            if(!var16) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var17 = var1.push;
            var16 = _closure1_slot4;
            var16 = var16.GUILD_HOME;
            var16 = var17.bind(var1)(var16);
case 13:
            if(!var15) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var16 = var1.push;
            var15 = _closure1_slot4;
            var15 = var15.GUILD_SCHEDULED_EVENTS;
            var15 = var16.bind(var1)(var15);
case 15:
            var12 = !var12;
            if(!var12) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = var14;
case 17:
            if(!var12) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = var13;
case 19:
            if(!var12) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var13 = var1.push;
            var12 = _closure1_slot4;
            var12 = var12.CHANNELS_AND_ROLES;
            var12 = var13.bind(var1)(var12);
case 21:
            if(!var11) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var12 = var1.push;
            var11 = _closure1_slot4;
            var11 = var11.GUILD_ROLE_SUBSCRIPTIONS;
            var11 = var12.bind(var1)(var11);
case 23:
            if(!var10) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var11 = var1.push;
            var10 = _closure1_slot4;
            var10 = var10.GUILD_SHOP;
            var10 = var11.bind(var1)(var10);
case 25:
            if(!var8) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var8 = var9;
case 27:
            if(!var8) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var9 = var1.push;
            var8 = _closure1_slot4;
            var8 = var8.GUILD_GAME_SHOP;
            var8 = var9.bind(var1)(var8);
case 29:
            if(!var6) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var9 = var7.features;
            var8 = var9.has;
            var7 = _closure1_slot5;
            var7 = var7.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var6 = var8.bind(var9)(var7);
case 31:
            if(!var6) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var7 = var1.push;
            var6 = _closure1_slot4;
            var6 = var6.GUILD_MOD_DASH_MEMBER_SAFETY;
            var6 = var7.bind(var1)(var6);
case 33:
            if(!var5) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var6 = var1.push;
            var5 = _closure1_slot4;
            var5 = var5.GUILD_BOOSTS;
            var5 = var6.bind(var1)(var5);
case 35:
            if(!var3) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var3 = var4;
case 37:
            if(!var3) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var3 = var1.push;
            var2 = _closure1_slot4;
            var2 = var2.GAME_SERVERS;
            var2 = var3.bind(var1)(var2);
case 39:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();