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
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var3 = 3;
            var3 = var18[var3];
            var8 = undefined;
            var4 = var17.bind(var8)(var3);
            var3 = var5.id;
            var12 = var4.bind(var8)(var3);
            var21 = _closure1_slot0;
            var3 = 4;
            var3 = var18[var3];
            var6 = var21.bind(var8)(var3);
            var4 = var6.useCanReviewGuildMemberApplications;
            var3 = var5.id;
            var4 = var4.bind(var6)(var3);
            var3 = 5;
            var3 = var18[var3];
            var7 = var21.bind(var8)(var3);
            var6 = var7.useShowRoleSubscriptionsInChannelList;
            var3 = var5.id;
            var7 = var6.bind(var7)(var3);
            var3 = 6;
            var3 = var18[var3];
            var6 = var21.bind(var8)(var3);
            var3 = var6.useGuildShopVisibleInGuild;
            var6 = var3.bind(var6)(var5);
            var3 = 7;
            var3 = var18[var3];
            var10 = var21.bind(var8)(var3);
            var9 = var10.useCanSeeOnboardingHome;
            var3 = var5.id;
            var14 = var9.bind(var10)(var3);
            var3 = 8;
            var3 = var18[var3];
            var11 = var21.bind(var8)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot3;
            var9 = new Array(1);
            var9[0] = var3;
            var13 = var5.id;
            var3 = new Array(1);
            var3[0] = var13;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getNewMemberActions;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var10.bind(var11)(var9, var1, var3);
            var1 = 9;
            var1 = var18[var1];
            var3 = var17.bind(var8)(var1);
            var1 = var5.id;
            var15 = var3.bind(var8)(var1);
            var1 = 10;
            var1 = var18[var1];
            var9 = var21.bind(var8)(var1);
            var3 = var9.useAllActionsCompleted;
            var1 = var5.id;
            var16 = var3.bind(var9)(var1);
            var1 = 11;
            var1 = var18[var1];
            var9 = var21.bind(var8)(var1);
            var3 = var9.useCanAccessMemberSafetyPage;
            var1 = var5.id;
            var1 = var3.bind(var9)(var1);
            var1 = new Array(0);
            var11 = var5.features;
            var10 = var11.has;
            var3 = _closure1_slot5;
            var9 = var3.HUB;
            var9 = var10.bind(var11)(var9);
            var19 = var5.features;
            var11 = var19.has;
            var10 = var3.COMMUNITY;
            var11 = var11.bind(var19)(var10);
            var10 = 12;
            var10 = var18[var10];
            var20 = var21.bind(var8)(var10);
            var19 = var20.useShowBrowseChannelsExperiment;
            var10 = 13;
            var10 = var18[var10];
            var22 = var21.bind(var8)(var10);
            var21 = var22.isOptInEnabledForGuild;
            var10 = var5.id;
            var10 = var21.bind(var22)(var10);
            var10 = !var10;
            var10 = var19.bind(var20)(var10);
            var20 = var5.features;
            var19 = var20.has;
            var3 = var3.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var3 = var19.bind(var20)(var3);
            var3 = 14;
            var3 = var18[var3];
            var17 = var17.bind(var8)(var3);
            var3 = var5.id;
            var3 = var17.bind(var8)(var3);
            if(!var9) { _fun0001_ip = 462; continue _fun0001 }
 442:
            var18 = var1.push;
            var17 = _closure1_slot4;
            var17 = var17.GUILD_HUB_HEADER_OPTIONS;
            var17 = var18.bind(var1)(var17);
 462:
            if(var16) { _fun0001_ip = 510; continue _fun0001 }
 465:
            if(!var14) { _fun0001_ip = 510; continue _fun0001 }
 468:
            if(!var15) { _fun0001_ip = 510; continue _fun0001 }
 471:
            var15 = null;
            if(!(var15 != var13)) { _fun0001_ip = 510; continue _fun0001 }
 477:
            var15 = var13.length;
            var13 = 0;
            if(!(var15 > var13)) { _fun0001_ip = 510; continue _fun0001 }
 488:
            var15 = var1.push;
            var13 = _closure1_slot4;
            var13 = var13.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var13 = var15.bind(var1)(var13);
            _fun0001_ip = 516; continue _fun0001;
 510:
            var13 = var5.premiumProgressBarEnabled;
 516:
            var13 = !var9;
            if(!var13) { _fun0001_ip = 525; continue _fun0001 }
 522:
            var13 = var14;
 525:
            if(!var13) { _fun0001_ip = 548; continue _fun0001 }
 528:
            var14 = var1.push;
            var13 = _closure1_slot4;
            var13 = var13.GUILD_HOME;
            var13 = var14.bind(var1)(var13);
 548:
            if(!var12) { _fun0001_ip = 571; continue _fun0001 }
 551:
            var13 = var1.push;
            var12 = _closure1_slot4;
            var12 = var12.GUILD_SCHEDULED_EVENTS;
            var12 = var13.bind(var1)(var12);
 571:
            var9 = !var9;
            if(!var9) { _fun0001_ip = 580; continue _fun0001 }
 577:
            var9 = var11;
 580:
            if(!var9) { _fun0001_ip = 586; continue _fun0001 }
 583:
            var9 = var10;
 586:
            if(!var9) { _fun0001_ip = 609; continue _fun0001 }
 589:
            var10 = var1.push;
            var9 = _closure1_slot4;
            var9 = var9.CHANNELS_AND_ROLES;
            var9 = var10.bind(var1)(var9);
 609:
            if(!var7) { _fun0001_ip = 632; continue _fun0001 }
 612:
            var9 = var1.push;
            var7 = _closure1_slot4;
            var7 = var7.GUILD_ROLE_SUBSCRIPTIONS;
            var7 = var9.bind(var1)(var7);
 632:
            if(!var6) { _fun0001_ip = 655; continue _fun0001 }
 635:
            var7 = var1.push;
            var6 = _closure1_slot4;
            var6 = var6.GUILD_SHOP;
            var6 = var7.bind(var1)(var6);
 655:
            if(!var4) { _fun0001_ip = 684; continue _fun0001 }
 658:
            var9 = var5.features;
            var7 = var9.has;
            var6 = _closure1_slot5;
            var6 = var6.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var4 = var7.bind(var9)(var6);
 684:
            if(!var4) { _fun0001_ip = 754; continue _fun0001 }
 687:
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
 754:
            if(!var4) { _fun0001_ip = 777; continue _fun0001 }
 757:
            var5 = var1.push;
            var4 = _closure1_slot4;
            var4 = var4.GUILD_MOD_DASH_MEMBER_SAFETY;
            var4 = var5.bind(var1)(var4);
 777:
            if(!var3) { _fun0001_ip = 800; continue _fun0001 }
 780:
            var3 = var1.push;
            var2 = _closure1_slot4;
            var2 = var2.GUILD_BOOSTS;
            var2 = var3.bind(var1)(var2);
 800:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();