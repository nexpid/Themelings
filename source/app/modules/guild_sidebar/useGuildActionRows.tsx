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
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/useGuildActionRows.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildActionRows(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot1;
            var20 = _closure1_slot2;
            var3 = 3;
            var3 = var20[var3];
            var19 = undefined;
            var4 = var5.bind(var19)(var3);
            var3 = var7.id;
            var13 = var4.bind(var19)(var3);
            var18 = _closure1_slot0;
            var3 = 4;
            var3 = var20[var3];
            var6 = var18.bind(var19)(var3);
            var4 = var6.useCanReviewGuildMemberApplications;
            var3 = var7.id;
            var6 = var4.bind(var6)(var3);
            var3 = 5;
            var3 = var20[var3];
            var8 = var18.bind(var19)(var3);
            var4 = var8.useShowRoleSubscriptionsInChannelList;
            var3 = var7.id;
            var9 = var4.bind(var8)(var3);
            var3 = 6;
            var3 = var20[var3];
            var4 = var18.bind(var19)(var3);
            var3 = var4.useGuildShopVisibleInGuild;
            var8 = var3.bind(var4)(var7);
            var3 = 7;
            var3 = var20[var3];
            var10 = var18.bind(var19)(var3);
            var4 = var10.useCanSeeOnboardingHome;
            var3 = var7.id;
            var15 = var4.bind(var10)(var3);
            var3 = 8;
            var3 = var20[var3];
            var11 = var18.bind(var19)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var12 = var7.id;
            var3 = new Array(1);
            var3[0] = var12;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getNewMemberActions;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var10.bind(var11)(var4, var1, var3);
            var1 = 9;
            var1 = var20[var1];
            var3 = var5.bind(var19)(var1);
            var1 = var7.id;
            var16 = var3.bind(var19)(var1);
            var1 = 10;
            var1 = var20[var1];
            var4 = var18.bind(var19)(var1);
            var3 = var4.useAllActionsCompleted;
            var1 = var7.id;
            var17 = var3.bind(var4)(var1);
            var1 = 11;
            var1 = var20[var1];
            var4 = var18.bind(var19)(var1);
            var3 = var4.useCanAccessMemberSafetyPage;
            var1 = var7.id;
            var1 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var11 = var7.features;
            var10 = var11.has;
            var4 = _closure1_slot5;
            var3 = var4.HUB;
            var10 = var10.bind(var11)(var3);
            var12 = var7.features;
            var11 = var12.has;
            var3 = var4.COMMUNITY;
            var12 = var11.bind(var12)(var3);
            var3 = 12;
            var3 = var20[var3];
            var21 = var18.bind(var19)(var3);
            var11 = var21.useShowBrowseChannelsExperiment;
            var3 = 13;
            var3 = var20[var3];
            var23 = var18.bind(var19)(var3);
            var22 = var23.isOptInEnabledForGuild;
            var3 = var7.id;
            var3 = var22.bind(var23)(var3);
            var3 = !var3;
            var11 = var11.bind(var21)(var3);
            var22 = var7.features;
            var21 = var22.has;
            var3 = var4.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var3 = var21.bind(var22)(var3);
            var3 = 14;
            var3 = var20[var3];
            var5 = var5.bind(var19)(var3);
            var3 = var7.id;
            var5 = var5.bind(var19)(var3);
            var3 = 15;
            var3 = var20[var3];
            var20 = var18.bind(var19)(var3);
            var19 = var20.usePortkeyEnabled;
            var18 = var7.id;
            var3 = 'useGuildActionRows';
            var3 = var19.bind(var20)(var18, var3);
            var19 = var7.features;
            var18 = var19.has;
            var4 = var4.GAME_SERVERS;
            var4 = var18.bind(var19)(var4);
            if(!var10) { _fun0001_ip = 519; continue _fun0001 }
 499:
            var19 = var1.push;
            var18 = _closure1_slot4;
            var18 = var18.GUILD_HUB_HEADER_OPTIONS;
            var18 = var19.bind(var1)(var18);
 519:
            if(var17) { _fun0001_ip = 567; continue _fun0001 }
 522:
            if(!var15) { _fun0001_ip = 567; continue _fun0001 }
 525:
            if(!var16) { _fun0001_ip = 567; continue _fun0001 }
 528:
            var16 = null;
            if(!(var16 != var14)) { _fun0001_ip = 567; continue _fun0001 }
 534:
            var16 = var14.length;
            var14 = 0;
            if(!(var16 > var14)) { _fun0001_ip = 567; continue _fun0001 }
 545:
            var16 = var1.push;
            var14 = _closure1_slot4;
            var14 = var14.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var14 = var16.bind(var1)(var14);
            _fun0001_ip = 573; continue _fun0001;
 567:
            var14 = var7.premiumProgressBarEnabled;
 573:
            var14 = !var10;
            if(!var14) { _fun0001_ip = 582; continue _fun0001 }
 579:
            var14 = var15;
 582:
            if(!var14) { _fun0001_ip = 605; continue _fun0001 }
 585:
            var15 = var1.push;
            var14 = _closure1_slot4;
            var14 = var14.GUILD_HOME;
            var14 = var15.bind(var1)(var14);
 605:
            if(!var13) { _fun0001_ip = 628; continue _fun0001 }
 608:
            var14 = var1.push;
            var13 = _closure1_slot4;
            var13 = var13.GUILD_SCHEDULED_EVENTS;
            var13 = var14.bind(var1)(var13);
 628:
            var10 = !var10;
            if(!var10) { _fun0001_ip = 637; continue _fun0001 }
 634:
            var10 = var12;
 637:
            if(!var10) { _fun0001_ip = 643; continue _fun0001 }
 640:
            var10 = var11;
 643:
            if(!var10) { _fun0001_ip = 666; continue _fun0001 }
 646:
            var11 = var1.push;
            var10 = _closure1_slot4;
            var10 = var10.CHANNELS_AND_ROLES;
            var10 = var11.bind(var1)(var10);
 666:
            if(!var9) { _fun0001_ip = 689; continue _fun0001 }
 669:
            var10 = var1.push;
            var9 = _closure1_slot4;
            var9 = var9.GUILD_ROLE_SUBSCRIPTIONS;
            var9 = var10.bind(var1)(var9);
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
            var9 = var7.features;
            var8 = var9.has;
            var7 = _closure1_slot5;
            var7 = var7.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var6 = var8.bind(var9)(var7);
 741:
            if(!var6) { _fun0001_ip = 764; continue _fun0001 }
 744:
            var7 = var1.push;
            var6 = _closure1_slot4;
            var6 = var6.GUILD_MOD_DASH_MEMBER_SAFETY;
            var6 = var7.bind(var1)(var6);
 764:
            if(!var5) { _fun0001_ip = 787; continue _fun0001 }
 767:
            var6 = var1.push;
            var5 = _closure1_slot4;
            var5 = var5.GUILD_BOOSTS;
            var5 = var6.bind(var1)(var5);
 787:
            if(!var3) { _fun0001_ip = 793; continue _fun0001 }
 790:
            var3 = var4;
 793:
            if(!var3) { _fun0001_ip = 816; continue _fun0001 }
 796:
            var3 = var1.push;
            var2 = _closure1_slot4;
            var2 = var2.PORTKEY;
            var2 = var3.bind(var1)(var2);
 816:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();