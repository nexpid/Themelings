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
            var5 = arg1;
            var _closure2_slot0 = var5;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var3 = 3;
            var3 = var20[var3];
            var8 = undefined;
            var4 = var19.bind(var8)(var3);
            var3 = var5.id;
            var14 = var4.bind(var8)(var3);
            var22 = _closure1_slot0;
            var3 = 4;
            var3 = var20[var3];
            var6 = var22.bind(var8)(var3);
            var4 = var6.useCanReviewGuildMemberApplications;
            var3 = var5.id;
            var6 = var4.bind(var6)(var3);
            var3 = 5;
            var3 = var20[var3];
            var7 = var22.bind(var8)(var3);
            var4 = var7.useShowRoleSubscriptionsInChannelList;
            var3 = var5.id;
            var11 = var4.bind(var7)(var3);
            var3 = 6;
            var3 = var20[var3];
            var4 = var22.bind(var8)(var3);
            var3 = var4.useGuildShopVisibleInGuild;
            var10 = var3.bind(var4)(var5);
            var3 = 7;
            var3 = var20[var3];
            var7 = var22.bind(var8)(var3);
            var4 = var7.useCanSeeOnboardingHome;
            var3 = var5.id;
            var16 = var4.bind(var7)(var3);
            var3 = 8;
            var3 = var20[var3];
            var9 = var22.bind(var8)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var12 = var5.id;
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
            var15 = var7.bind(var9)(var4, var1, var3);
            var1 = 9;
            var1 = var20[var1];
            var3 = var19.bind(var8)(var1);
            var1 = var5.id;
            var17 = var3.bind(var8)(var1);
            var1 = 10;
            var1 = var20[var1];
            var4 = var22.bind(var8)(var1);
            var3 = var4.useAllActionsCompleted;
            var1 = var5.id;
            var18 = var3.bind(var4)(var1);
            var1 = 11;
            var1 = var20[var1];
            var4 = var22.bind(var8)(var1);
            var3 = var4.useCanAccessMemberSafetyPage;
            var1 = var5.id;
            var4 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var12 = var5.features;
            var9 = var12.has;
            var3 = _closure1_slot5;
            var7 = var3.HUB;
            var12 = var9.bind(var12)(var7);
            var13 = var5.features;
            var9 = var13.has;
            var7 = var3.COMMUNITY;
            var7 = var9.bind(var13)(var7);
            var9 = 12;
            var9 = var20[var9];
            var21 = var22.bind(var8)(var9);
            var13 = var21.useShowBrowseChannelsExperiment;
            var9 = 13;
            var9 = var20[var9];
            var23 = var22.bind(var8)(var9);
            var22 = var23.isOptInEnabledForGuild;
            var9 = var5.id;
            var9 = var22.bind(var23)(var9);
            var9 = !var9;
            var13 = var13.bind(var21)(var9);
            var21 = var5.features;
            var9 = var21.has;
            var3 = var3.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var9 = var9.bind(var21)(var3);
            var3 = 14;
            var3 = var20[var3];
            var19 = var19.bind(var8)(var3);
            var3 = var5.id;
            var3 = var19.bind(var8)(var3);
            if(!var12) { _fun0001_ip = 462; continue _fun0001 }
 442:
            var20 = var1.push;
            var19 = _closure1_slot4;
            var19 = var19.GUILD_HUB_HEADER_OPTIONS;
            var19 = var20.bind(var1)(var19);
 462:
            if(var18) { _fun0001_ip = 510; continue _fun0001 }
 465:
            if(!var16) { _fun0001_ip = 510; continue _fun0001 }
 468:
            if(!var17) { _fun0001_ip = 510; continue _fun0001 }
 471:
            var17 = null;
            if(!(var17 != var15)) { _fun0001_ip = 510; continue _fun0001 }
 477:
            var17 = var15.length;
            var15 = 0;
            if(!(var17 > var15)) { _fun0001_ip = 510; continue _fun0001 }
 488:
            var17 = var1.push;
            var15 = _closure1_slot4;
            var15 = var15.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var15 = var17.bind(var1)(var15);
            _fun0001_ip = 516; continue _fun0001;
 510:
            var15 = var5.premiumProgressBarEnabled;
 516:
            var15 = !var12;
            if(!var15) { _fun0001_ip = 525; continue _fun0001 }
 522:
            var15 = var16;
 525:
            if(!var15) { _fun0001_ip = 548; continue _fun0001 }
 528:
            var16 = var1.push;
            var15 = _closure1_slot4;
            var15 = var15.GUILD_HOME;
            var15 = var16.bind(var1)(var15);
 548:
            if(!var14) { _fun0001_ip = 571; continue _fun0001 }
 551:
            var15 = var1.push;
            var14 = _closure1_slot4;
            var14 = var14.GUILD_SCHEDULED_EVENTS;
            var14 = var15.bind(var1)(var14);
 571:
            var12 = !var12;
            if(!var12) { _fun0001_ip = 580; continue _fun0001 }
 577:
            var12 = var7;
 580:
            if(!var12) { _fun0001_ip = 586; continue _fun0001 }
 583:
            var12 = var13;
 586:
            if(!var12) { _fun0001_ip = 609; continue _fun0001 }
 589:
            var13 = var1.push;
            var12 = _closure1_slot4;
            var12 = var12.CHANNELS_AND_ROLES;
            var12 = var13.bind(var1)(var12);
 609:
            if(!var11) { _fun0001_ip = 632; continue _fun0001 }
 612:
            var12 = var1.push;
            var11 = _closure1_slot4;
            var11 = var11.GUILD_ROLE_SUBSCRIPTIONS;
            var11 = var12.bind(var1)(var11);
 632:
            if(!var10) { _fun0001_ip = 655; continue _fun0001 }
 635:
            var11 = var1.push;
            var10 = _closure1_slot4;
            var10 = var10.GUILD_SHOP;
            var10 = var11.bind(var1)(var10);
 655:
            if(!var4) { _fun0001_ip = 667; continue _fun0001 }
 658:
            if(var7) { _fun0001_ip = 664; continue _fun0001 }
 661:
            var7 = var9;
 664:
            var4 = var7;
 667:
            if(var4) { _fun0001_ip = 702; continue _fun0001 }
 670:
            if(!var6) { _fun0001_ip = 699; continue _fun0001 }
 673:
            var10 = var5.features;
            var9 = var10.has;
            var7 = _closure1_slot5;
            var7 = var7.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var6 = var9.bind(var10)(var7);
 699:
            var4 = var6;
 702:
            if(!var4) { _fun0001_ip = 772; continue _fun0001 }
 705:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 15;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.getCurrentConfig;
            var6 = {};
            var5 = var5.id;
            var6['guildId'] = var5;
            var5 = 'useGuildActionRows';
            var6['location'] = var5;
            var5 = {};
            var9 = true;
            var5['autoTrackExposure'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var4 = var5.enabled;
 772:
            if(!var4) { _fun0001_ip = 795; continue _fun0001 }
 775:
            var5 = var1.push;
            var4 = _closure1_slot4;
            var4 = var4.GUILD_MOD_DASH_MEMBER_SAFETY;
            var4 = var5.bind(var1)(var4);
 795:
            if(!var3) { _fun0001_ip = 818; continue _fun0001 }
 798:
            var3 = var1.push;
            var2 = _closure1_slot4;
            var2 = var2.GUILD_BOOSTS;
            var2 = var3.bind(var1)(var2);
 818:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();