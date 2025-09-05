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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelListGuildActionRow;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot6 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/useGuildActionRows.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildActionRows(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var12 = arg1;
            var _closure2_slot0 = var12;
            var6 = _closure1_slot1;
            var23 = _closure1_slot2;
            var1 = 4;
            var1 = var23[var1];
            var11 = undefined;
            var3 = var6.bind(var11)(var1);
            var1 = var12.id;
            var16 = var3.bind(var11)(var1);
            var22 = _closure1_slot0;
            var1 = 5;
            var1 = var23[var1];
            var4 = var22.bind(var11)(var1);
            var3 = var4.useCanReviewGuildMemberApplications;
            var1 = var12.id;
            var7 = var3.bind(var4)(var1);
            var1 = 6;
            var1 = var23[var1];
            var4 = var22.bind(var11)(var1);
            var3 = var4.useShowRoleSubscriptionsInChannelList;
            var1 = var12.id;
            var10 = var3.bind(var4)(var1);
            var1 = 7;
            var1 = var23[var1];
            var3 = var22.bind(var11)(var1);
            var1 = var3.useGuildShopVisibleInGuild;
            var9 = var1.bind(var3)(var12);
            var1 = 8;
            var1 = var23[var1];
            var4 = var22.bind(var11)(var1);
            var3 = var4.useCanSeeOnboardingHome;
            var1 = var12.id;
            var18 = var3.bind(var4)(var1);
            var21 = 9;
            var1 = var23[var21];
            var13 = var22.bind(var11)(var1);
            var8 = var13.useStateFromStores;
            var1 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = var12.id;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getNewMemberActions;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var8.bind(var13)(var4, var1, var3);
            var1 = 10;
            var1 = var23[var1];
            var3 = var6.bind(var11)(var1);
            var1 = var12.id;
            var19 = var3.bind(var11)(var1);
            var1 = 11;
            var1 = var23[var1];
            var4 = var22.bind(var11)(var1);
            var3 = var4.useAllActionsCompleted;
            var1 = var12.id;
            var20 = var3.bind(var4)(var1);
            var1 = 12;
            var1 = var23[var1];
            var4 = var22.bind(var11)(var1);
            var3 = var4.useCanAccessMemberSafetyPage;
            var1 = var12.id;
            var1 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var13 = var12.features;
            var8 = var13.has;
            var4 = _closure1_slot6;
            var3 = var4.HUB;
            var13 = var8.bind(var13)(var3);
            var14 = var12.features;
            var8 = var14.has;
            var3 = var4.COMMUNITY;
            var15 = var8.bind(var14)(var3);
            var3 = 13;
            var3 = var23[var3];
            var14 = var22.bind(var11)(var3);
            var8 = var14.useShowBrowseChannelsExperiment;
            var3 = 14;
            var3 = var23[var3];
            var25 = var22.bind(var11)(var3);
            var24 = var25.isOptInEnabledForGuild;
            var3 = var12.id;
            var3 = var24.bind(var25)(var3);
            var3 = !var3;
            var14 = var8.bind(var14)(var3);
            var24 = var12.features;
            var8 = var24.has;
            var3 = var4.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var3 = var8.bind(var24)(var3);
            var3 = 15;
            var3 = var23[var3];
            var6 = var6.bind(var11)(var3);
            var3 = var12.id;
            var6 = var6.bind(var11)(var3);
            var3 = 16;
            var3 = var23[var3];
            var25 = var22.bind(var11)(var3);
            var24 = var25.usePortkeyEnabled;
            var3 = var12.id;
            var8 = 'useGuildActionRows';
            var3 = var24.bind(var25)(var3, var8);
            var25 = var12.features;
            var24 = var25.has;
            var4 = var4.GAME_SERVER_HOSTING;
            var4 = var24.bind(var25)(var4);
            var21 = var23[var21];
            var23 = var22.bind(var11)(var21);
            var22 = var23.useStateFromStores;
            var24 = _closure1_slot4;
            var21 = new Array(1);
            var21[0] = var24;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 37; continue _fun0002 }
 27:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
 37:
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 47; continue _fun0002 }
 44:
                    var1 = var2;
 47:
                    return var1;
                }
            };
            var5 = var22.bind(var23)(var21, var5);
            if(!var13) { _fun0001_ip = 558; continue _fun0001 }
 538:
            var22 = var1.push;
            var21 = _closure1_slot5;
            var21 = var21.GUILD_HUB_HEADER_OPTIONS;
            var21 = var22.bind(var1)(var21);
 558:
            if(var20) { _fun0001_ip = 606; continue _fun0001 }
 561:
            if(!var18) { _fun0001_ip = 606; continue _fun0001 }
 564:
            if(!var19) { _fun0001_ip = 606; continue _fun0001 }
 567:
            var19 = null;
            if(!(var19 != var17)) { _fun0001_ip = 606; continue _fun0001 }
 573:
            var19 = var17.length;
            var17 = 0;
            if(!(var19 > var17)) { _fun0001_ip = 606; continue _fun0001 }
 584:
            var19 = var1.push;
            var17 = _closure1_slot5;
            var17 = var17.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var17 = var19.bind(var1)(var17);
            _fun0001_ip = 612; continue _fun0001;
 606:
            var17 = var12.premiumProgressBarEnabled;
 612:
            var17 = !var13;
            if(!var17) { _fun0001_ip = 621; continue _fun0001 }
 618:
            var17 = var18;
 621:
            if(!var17) { _fun0001_ip = 644; continue _fun0001 }
 624:
            var18 = var1.push;
            var17 = _closure1_slot5;
            var17 = var17.GUILD_HOME;
            var17 = var18.bind(var1)(var17);
 644:
            if(!var16) { _fun0001_ip = 667; continue _fun0001 }
 647:
            var17 = var1.push;
            var16 = _closure1_slot5;
            var16 = var16.GUILD_SCHEDULED_EVENTS;
            var16 = var17.bind(var1)(var16);
 667:
            var13 = !var13;
            if(!var13) { _fun0001_ip = 676; continue _fun0001 }
 673:
            var13 = var15;
 676:
            if(!var13) { _fun0001_ip = 682; continue _fun0001 }
 679:
            var13 = var14;
 682:
            if(!var13) { _fun0001_ip = 705; continue _fun0001 }
 685:
            var14 = var1.push;
            var13 = _closure1_slot5;
            var13 = var13.CHANNELS_AND_ROLES;
            var13 = var14.bind(var1)(var13);
 705:
            if(!var10) { _fun0001_ip = 728; continue _fun0001 }
 708:
            var13 = var1.push;
            var10 = _closure1_slot5;
            var10 = var10.GUILD_ROLE_SUBSCRIPTIONS;
            var10 = var13.bind(var1)(var10);
 728:
            if(!var9) { _fun0001_ip = 751; continue _fun0001 }
 731:
            var10 = var1.push;
            var9 = _closure1_slot5;
            var9 = var9.GUILD_SHOP;
            var9 = var10.bind(var1)(var9);
 751:
            if(!var7) { _fun0001_ip = 780; continue _fun0001 }
 754:
            var13 = var12.features;
            var10 = var13.has;
            var9 = _closure1_slot6;
            var9 = var9.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var7 = var10.bind(var13)(var9);
 780:
            if(!var7) { _fun0001_ip = 844; continue _fun0001 }
 783:
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 17;
            var9 = var13[var9];
            var11 = var10.bind(var11)(var9);
            var10 = var11.getCurrentConfig;
            var9 = {};
            var12 = var12.id;
            var9['guildId'] = var12;
            var9['location'] = var8;
            var8 = {};
            var12 = true;
            var8['autoTrackExposure'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var7 = var8.enabled;
 844:
            if(!var7) { _fun0001_ip = 867; continue _fun0001 }
 847:
            var8 = var1.push;
            var7 = _closure1_slot5;
            var7 = var7.GUILD_MOD_DASH_MEMBER_SAFETY;
            var7 = var8.bind(var1)(var7);
 867:
            if(!var6) { _fun0001_ip = 890; continue _fun0001 }
 870:
            var7 = var1.push;
            var6 = _closure1_slot5;
            var6 = var6.GUILD_BOOSTS;
            var6 = var7.bind(var1)(var6);
 890:
            if(!var3) { _fun0001_ip = 902; continue _fun0001 }
 893:
            if(var4) { _fun0001_ip = 899; continue _fun0001 }
 896:
            var4 = var5;
 899:
            var3 = var4;
 902:
            if(!var3) { _fun0001_ip = 925; continue _fun0001 }
 905:
            var3 = var1.push;
            var2 = _closure1_slot5;
            var2 = var2.PORTKEY;
            var2 = var3.bind(var1)(var2);
 925:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();