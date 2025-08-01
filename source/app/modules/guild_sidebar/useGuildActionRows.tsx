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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/useGuildActionRows.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildActionRows(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var18 = _closure1_slot1;
            var20 = _closure1_slot2;
            var3 = 3;
            var3 = var20[var3];
            var19 = undefined;
            var4 = var18.bind(var19)(var3);
            var3 = var6.id;
            var13 = var4.bind(var19)(var3);
            var22 = _closure1_slot0;
            var3 = 4;
            var3 = var20[var3];
            var5 = var22.bind(var19)(var3);
            var4 = var5.useCanReviewGuildMemberApplications;
            var3 = var6.id;
            var5 = var4.bind(var5)(var3);
            var3 = 5;
            var3 = var20[var3];
            var7 = var22.bind(var19)(var3);
            var4 = var7.useShowRoleSubscriptionsInChannelList;
            var3 = var6.id;
            var10 = var4.bind(var7)(var3);
            var3 = 6;
            var3 = var20[var3];
            var4 = var22.bind(var19)(var3);
            var3 = var4.useGuildShopVisibleInGuild;
            var9 = var3.bind(var4)(var6);
            var3 = 7;
            var3 = var20[var3];
            var7 = var22.bind(var19)(var3);
            var4 = var7.useCanSeeOnboardingHome;
            var3 = var6.id;
            var15 = var4.bind(var7)(var3);
            var3 = 8;
            var3 = var20[var3];
            var8 = var22.bind(var19)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var11 = var6.id;
            var3 = new Array(1);
            var3[0] = var11;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getNewMemberActions;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var7.bind(var8)(var4, var1, var3);
            var1 = 9;
            var1 = var20[var1];
            var3 = var18.bind(var19)(var1);
            var1 = var6.id;
            var16 = var3.bind(var19)(var1);
            var1 = 10;
            var1 = var20[var1];
            var4 = var22.bind(var19)(var1);
            var3 = var4.useAllActionsCompleted;
            var1 = var6.id;
            var17 = var3.bind(var4)(var1);
            var1 = 11;
            var1 = var20[var1];
            var4 = var22.bind(var19)(var1);
            var3 = var4.useCanAccessMemberSafetyPage;
            var1 = var6.id;
            var4 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var11 = var6.features;
            var8 = var11.has;
            var3 = _closure1_slot5;
            var7 = var3.HUB;
            var11 = var8.bind(var11)(var7);
            var12 = var6.features;
            var8 = var12.has;
            var7 = var3.COMMUNITY;
            var7 = var8.bind(var12)(var7);
            var8 = 12;
            var8 = var20[var8];
            var21 = var22.bind(var19)(var8);
            var12 = var21.useShowBrowseChannelsExperiment;
            var8 = 13;
            var8 = var20[var8];
            var23 = var22.bind(var19)(var8);
            var22 = var23.isOptInEnabledForGuild;
            var8 = var6.id;
            var8 = var22.bind(var23)(var8);
            var8 = !var8;
            var12 = var12.bind(var21)(var8);
            var21 = var6.features;
            var8 = var21.has;
            var3 = var3.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var8 = var8.bind(var21)(var3);
            var3 = 14;
            var3 = var20[var3];
            var18 = var18.bind(var19)(var3);
            var3 = var6.id;
            var3 = var18.bind(var19)(var3);
            if(!var11) { _fun0001_ip = 462; continue _fun0001 }
 442:
            var19 = var1.push;
            var18 = _closure1_slot4;
            var18 = var18.GUILD_HUB_HEADER_OPTIONS;
            var18 = var19.bind(var1)(var18);
 462:
            if(var17) { _fun0001_ip = 510; continue _fun0001 }
 465:
            if(!var15) { _fun0001_ip = 510; continue _fun0001 }
 468:
            if(!var16) { _fun0001_ip = 510; continue _fun0001 }
 471:
            var16 = null;
            if(!(var16 != var14)) { _fun0001_ip = 510; continue _fun0001 }
 477:
            var16 = var14.length;
            var14 = 0;
            if(!(var16 > var14)) { _fun0001_ip = 510; continue _fun0001 }
 488:
            var16 = var1.push;
            var14 = _closure1_slot4;
            var14 = var14.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var14 = var16.bind(var1)(var14);
            _fun0001_ip = 516; continue _fun0001;
 510:
            var14 = var6.premiumProgressBarEnabled;
 516:
            var14 = !var11;
            if(!var14) { _fun0001_ip = 525; continue _fun0001 }
 522:
            var14 = var15;
 525:
            if(!var14) { _fun0001_ip = 548; continue _fun0001 }
 528:
            var15 = var1.push;
            var14 = _closure1_slot4;
            var14 = var14.GUILD_HOME;
            var14 = var15.bind(var1)(var14);
 548:
            if(!var13) { _fun0001_ip = 571; continue _fun0001 }
 551:
            var14 = var1.push;
            var13 = _closure1_slot4;
            var13 = var13.GUILD_SCHEDULED_EVENTS;
            var13 = var14.bind(var1)(var13);
 571:
            var11 = !var11;
            if(!var11) { _fun0001_ip = 580; continue _fun0001 }
 577:
            var11 = var7;
 580:
            if(!var11) { _fun0001_ip = 586; continue _fun0001 }
 583:
            var11 = var12;
 586:
            if(!var11) { _fun0001_ip = 609; continue _fun0001 }
 589:
            var12 = var1.push;
            var11 = _closure1_slot4;
            var11 = var11.CHANNELS_AND_ROLES;
            var11 = var12.bind(var1)(var11);
 609:
            if(!var10) { _fun0001_ip = 632; continue _fun0001 }
 612:
            var11 = var1.push;
            var10 = _closure1_slot4;
            var10 = var10.GUILD_ROLE_SUBSCRIPTIONS;
            var10 = var11.bind(var1)(var10);
 632:
            if(!var9) { _fun0001_ip = 655; continue _fun0001 }
 635:
            var10 = var1.push;
            var9 = _closure1_slot4;
            var9 = var9.GUILD_SHOP;
            var9 = var10.bind(var1)(var9);
 655:
            if(!var4) { _fun0001_ip = 667; continue _fun0001 }
 658:
            if(var7) { _fun0001_ip = 664; continue _fun0001 }
 661:
            var7 = var8;
 664:
            var4 = var7;
 667:
            if(var4) { _fun0001_ip = 702; continue _fun0001 }
 670:
            if(!var5) { _fun0001_ip = 699; continue _fun0001 }
 673:
            var8 = var6.features;
            var7 = var8.has;
            var6 = _closure1_slot5;
            var6 = var6.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var5 = var7.bind(var8)(var6);
 699:
            var4 = var5;
 702:
            if(!var4) { _fun0001_ip = 725; continue _fun0001 }
 705:
            var5 = var1.push;
            var4 = _closure1_slot4;
            var4 = var4.GUILD_MOD_DASH_MEMBER_SAFETY;
            var4 = var5.bind(var1)(var4);
 725:
            if(!var3) { _fun0001_ip = 748; continue _fun0001 }
 728:
            var3 = var1.push;
            var2 = _closure1_slot4;
            var2 = var2.GUILD_BOOSTS;
            var2 = var3.bind(var1)(var2);
 748:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();