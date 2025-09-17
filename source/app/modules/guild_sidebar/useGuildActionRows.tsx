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
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/useGuildActionRows.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildActionRows(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arg1;
            var _closure2_slot0 = var11;
            var5 = _closure1_slot1;
            var20 = _closure1_slot2;
            var3 = 3;
            var3 = var20[var3];
            var10 = undefined;
            var4 = var5.bind(var10)(var3);
            var3 = var11.id;
            var15 = var4.bind(var10)(var3);
            var7 = _closure1_slot0;
            var3 = 4;
            var3 = var20[var3];
            var6 = var7.bind(var10)(var3);
            var4 = var6.useCanReviewGuildMemberApplications;
            var3 = var11.id;
            var6 = var4.bind(var6)(var3);
            var3 = 5;
            var3 = var20[var3];
            var8 = var7.bind(var10)(var3);
            var4 = var8.useShowRoleSubscriptionsInChannelList;
            var3 = var11.id;
            var9 = var4.bind(var8)(var3);
            var3 = 6;
            var3 = var20[var3];
            var4 = var7.bind(var10)(var3);
            var3 = var4.useGuildShopVisibleInGuild;
            var8 = var3.bind(var4)(var11);
            var3 = 7;
            var3 = var20[var3];
            var12 = var7.bind(var10)(var3);
            var4 = var12.useCanSeeOnboardingHome;
            var3 = var11.id;
            var17 = var4.bind(var12)(var3);
            var3 = 8;
            var3 = var20[var3];
            var13 = var7.bind(var10)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var14 = var11.id;
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
            var1 = 9;
            var1 = var20[var1];
            var3 = var5.bind(var10)(var1);
            var1 = var11.id;
            var18 = var3.bind(var10)(var1);
            var1 = 10;
            var1 = var20[var1];
            var4 = var7.bind(var10)(var1);
            var3 = var4.useAllActionsCompleted;
            var1 = var11.id;
            var19 = var3.bind(var4)(var1);
            var1 = 11;
            var1 = var20[var1];
            var4 = var7.bind(var10)(var1);
            var3 = var4.useCanAccessMemberSafetyPage;
            var1 = var11.id;
            var1 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var13 = var11.features;
            var12 = var13.has;
            var4 = _closure1_slot5;
            var3 = var4.HUB;
            var12 = var12.bind(var13)(var3);
            var14 = var11.features;
            var13 = var14.has;
            var3 = var4.COMMUNITY;
            var14 = var13.bind(var14)(var3);
            var3 = 12;
            var3 = var20[var3];
            var21 = var7.bind(var10)(var3);
            var13 = var21.useShowBrowseChannelsExperiment;
            var3 = 13;
            var3 = var20[var3];
            var23 = var7.bind(var10)(var3);
            var22 = var23.isOptInEnabledForGuild;
            var3 = var11.id;
            var3 = var22.bind(var23)(var3);
            var3 = !var3;
            var13 = var13.bind(var21)(var3);
            var22 = var11.features;
            var21 = var22.has;
            var3 = var4.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var3 = var21.bind(var22)(var3);
            var3 = 14;
            var3 = var20[var3];
            var5 = var5.bind(var10)(var3);
            var3 = var11.id;
            var5 = var5.bind(var10)(var3);
            var3 = 15;
            var3 = var20[var3];
            var21 = var7.bind(var10)(var3);
            var20 = var21.usePortkeyEnabled;
            var3 = var11.id;
            var7 = 'useGuildActionRows';
            var3 = var20.bind(var21)(var3, var7);
            var21 = var11.features;
            var20 = var21.has;
            var4 = var4.GAME_SERVERS;
            var4 = var20.bind(var21)(var4);
            if(!var12) { _fun0001_ip = 519; continue _fun0001 }
 499:
            var21 = var1.push;
            var20 = _closure1_slot4;
            var20 = var20.GUILD_HUB_HEADER_OPTIONS;
            var20 = var21.bind(var1)(var20);
 519:
            if(var19) { _fun0001_ip = 567; continue _fun0001 }
 522:
            if(!var17) { _fun0001_ip = 567; continue _fun0001 }
 525:
            if(!var18) { _fun0001_ip = 567; continue _fun0001 }
 528:
            var18 = null;
            if(!(var18 != var16)) { _fun0001_ip = 567; continue _fun0001 }
 534:
            var18 = var16.length;
            var16 = 0;
            if(!(var18 > var16)) { _fun0001_ip = 567; continue _fun0001 }
 545:
            var18 = var1.push;
            var16 = _closure1_slot4;
            var16 = var16.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var16 = var18.bind(var1)(var16);
            _fun0001_ip = 573; continue _fun0001;
 567:
            var16 = var11.premiumProgressBarEnabled;
 573:
            var16 = !var12;
            if(!var16) { _fun0001_ip = 582; continue _fun0001 }
 579:
            var16 = var17;
 582:
            if(!var16) { _fun0001_ip = 605; continue _fun0001 }
 585:
            var17 = var1.push;
            var16 = _closure1_slot4;
            var16 = var16.GUILD_HOME;
            var16 = var17.bind(var1)(var16);
 605:
            if(!var15) { _fun0001_ip = 628; continue _fun0001 }
 608:
            var16 = var1.push;
            var15 = _closure1_slot4;
            var15 = var15.GUILD_SCHEDULED_EVENTS;
            var15 = var16.bind(var1)(var15);
 628:
            var12 = !var12;
            if(!var12) { _fun0001_ip = 637; continue _fun0001 }
 634:
            var12 = var14;
 637:
            if(!var12) { _fun0001_ip = 643; continue _fun0001 }
 640:
            var12 = var13;
 643:
            if(!var12) { _fun0001_ip = 666; continue _fun0001 }
 646:
            var13 = var1.push;
            var12 = _closure1_slot4;
            var12 = var12.CHANNELS_AND_ROLES;
            var12 = var13.bind(var1)(var12);
 666:
            if(!var9) { _fun0001_ip = 689; continue _fun0001 }
 669:
            var12 = var1.push;
            var9 = _closure1_slot4;
            var9 = var9.GUILD_ROLE_SUBSCRIPTIONS;
            var9 = var12.bind(var1)(var9);
 689:
            if(!var8) { _fun0001_ip = 712; continue _fun0001 }
 692:
            var9 = var1.push;
            var8 = _closure1_slot4;
            var8 = var8.GUILD_SHOP;
            var8 = var9.bind(var1)(var8);
 712:
            if(!var6) { _fun0001_ip = 741; continue _fun0001 }
 715:
            var12 = var11.features;
            var9 = var12.has;
            var8 = _closure1_slot5;
            var8 = var8.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var6 = var9.bind(var12)(var8);
 741:
            if(!var6) { _fun0001_ip = 805; continue _fun0001 }
 744:
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 16;
            var8 = var12[var8];
            var10 = var9.bind(var10)(var8);
            var9 = var10.getCurrentConfig;
            var8 = {};
            var11 = var11.id;
            var8['guildId'] = var11;
            var8['location'] = var7;
            var7 = {};
            var11 = true;
            var7['autoTrackExposure'] = var11;
            var7 = var9.bind(var10)(var8, var7);
            var6 = var7.enabled;
 805:
            if(!var6) { _fun0001_ip = 828; continue _fun0001 }
 808:
            var7 = var1.push;
            var6 = _closure1_slot4;
            var6 = var6.GUILD_MOD_DASH_MEMBER_SAFETY;
            var6 = var7.bind(var1)(var6);
 828:
            if(!var5) { _fun0001_ip = 851; continue _fun0001 }
 831:
            var6 = var1.push;
            var5 = _closure1_slot4;
            var5 = var5.GUILD_BOOSTS;
            var5 = var6.bind(var1)(var5);
 851:
            if(!var3) { _fun0001_ip = 857; continue _fun0001 }
 854:
            var3 = var4;
 857:
            if(!var3) { _fun0001_ip = 880; continue _fun0001 }
 860:
            var3 = var1.push;
            var2 = _closure1_slot4;
            var2 = var2.PORTKEY;
            var2 = var3.bind(var1)(var2);
 880:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();