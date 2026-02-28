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
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/useGuildActionRows.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildActionRows(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var5 = _closure1_slot1;
            var23 = _closure1_slot2;
            var3 = 4;
            var3 = var23[var3];
            var24 = undefined;
            var4 = var5.bind(var24)(var3);
            var3 = var9.id;
            var16 = var4.bind(var24)(var3);
            var22 = _closure1_slot0;
            var3 = 5;
            var3 = var23[var3];
            var6 = var22.bind(var24)(var3);
            var4 = var6.useCanReviewGuildMemberApplications;
            var3 = var9.id;
            var8 = var4.bind(var6)(var3);
            var3 = 6;
            var3 = var23[var3];
            var6 = var22.bind(var24)(var3);
            var4 = var6.useShowRoleSubscriptionsInChannelList;
            var3 = var9.id;
            var13 = var4.bind(var6)(var3);
            var3 = 7;
            var3 = var23[var3];
            var4 = var22.bind(var24)(var3);
            var3 = var4.useGuildShopVisibleInGuild;
            var12 = var3.bind(var4)(var9);
            var3 = 8;
            var3 = var23[var3];
            var4 = var22.bind(var24)(var3);
            var3 = var4.hasSocialLayerStorefront;
            var10 = var3.bind(var4)(var9);
            var3 = 9;
            var3 = var23[var3];
            var6 = var22.bind(var24)(var3);
            var4 = var6.useIsEligibleForSocialLayerStorefrontUserExperiment;
            var3 = {};
            var25 = 'guild-action-rows';
            var3['location'] = var25;
            var11 = var4.bind(var6)(var3);
            var3 = 10;
            var3 = var23[var3];
            var6 = var22.bind(var24)(var3);
            var4 = var6.useCanSeeOnboardingHome;
            var3 = var9.id;
            var18 = var4.bind(var6)(var3);
            var3 = 11;
            var3 = var23[var3];
            var7 = var22.bind(var24)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var14 = var9.id;
            var3 = new Array(1);
            var3[0] = var14;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getNewMemberActions;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var6.bind(var7)(var4, var1, var3);
            var1 = 12;
            var1 = var23[var1];
            var3 = var5.bind(var24)(var1);
            var1 = var9.id;
            var21 = var3.bind(var24)(var1);
            var1 = 13;
            var1 = var23[var1];
            var4 = var22.bind(var24)(var1);
            var3 = var4.useAllActionsCompleted;
            var1 = var9.id;
            var17 = var3.bind(var4)(var1);
            var1 = 14;
            var1 = var23[var1];
            var4 = var22.bind(var24)(var1);
            var3 = var4.useCanAccessMemberSafetyPage;
            var1 = var9.id;
            var1 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var7 = var9.features;
            var6 = var7.has;
            var3 = _closure1_slot6;
            var4 = var3.HUB;
            var14 = var6.bind(var7)(var4);
            var7 = var9.features;
            var6 = var7.has;
            var4 = var3.COMMUNITY;
            var15 = var6.bind(var7)(var4);
            var7 = var9.features;
            var6 = var7.has;
            var4 = var3.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var4 = var6.bind(var7)(var4);
            var4 = 15;
            var4 = var23[var4];
            var5 = var5.bind(var24)(var4);
            var4 = var9.id;
            var6 = var5.bind(var24)(var4);
            var4 = 16;
            var4 = var23[var4];
            var5 = var22.bind(var24)(var4);
            var4 = var5.useGuildPowerupsMobileEnabledExperiment;
            var26 = 'useGuildActionRows';
            var7 = var4.bind(var5)(var26);
            var4 = 17;
            var4 = var23[var4];
            var20 = var22.bind(var24)(var4);
            var5 = var20.useGameServerEnabled;
            var4 = var9.id;
            var5 = var5.bind(var20)(var4, var26);
            var20 = var9.features;
            var4 = var20.has;
            var3 = var3.GAME_SERVERS;
            var3 = var4.bind(var20)(var3);
            var4 = 18;
            var4 = var23[var4];
            var20 = var22.bind(var24)(var4);
            var4 = var20.useIsGameServerTabAlwaysOnEnabled;
            var4 = var4.bind(var20)(var26);
            var20 = 19;
            var20 = var23[var20];
            var23 = var22.bind(var24)(var20);
            var22 = var23.useSelectedDismissibleContent;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var20 = _closure1_slot0;
            var26 = _closure1_slot2;
            var4 = 20;
            var4 = var26[var4];
            var4 = var20.bind(var24)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.EMPTY_GAME_SERVER_TAB;
            var20 = new Array(1);
            var20[0] = var4;
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var20 = new Array(0);
case 6:
            var4 = true;
            var22 = var22.bind(var23)(var20, var24, var4);
            var20 = _closure1_slot3;
            var4 = 1;
            var4 = var20.bind(var24)(var22, var4);
            var20 = 0;
            var4 = var4[var20];
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 21;
            var22 = var26[var22];
            var24 = var23.bind(var24)(var22);
            var23 = var24.useIsBoostProgressBarEnabled;
            var22 = {};
            var22['location'] = var25;
            var22 = var23.bind(var24)(var9, var22);
            if(!var14) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var23 = var1.push;
            var22 = _closure1_slot5;
            var22 = var22.GUILD_HUB_HEADER_OPTIONS;
            var22 = var23.bind(var1)(var22);
case 7:
            var17 = !var17;
            if(!var17) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var17 = var18;
case 9:
            if(!var17) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var17 = var21;
case 11:
            if(!var17) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var21 = null;
            var17 = var21 != var19;
case 13:
            if(!var17) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var19 = var19.length;
            var17 = var19 > var20;
case 15:
            if(!var17) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var19 = var1.push;
            var17 = _closure1_slot5;
            var17 = var17.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var17 = var19.bind(var1)(var17);
case 17:
            var17 = !var14;
            if(!var17) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var17 = var18;
case 19:
            if(!var17) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var18 = var1.push;
            var17 = _closure1_slot5;
            var17 = var17.GUILD_HOME;
            var17 = var18.bind(var1)(var17);
case 21:
            if(!var16) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var17 = var1.push;
            var16 = _closure1_slot5;
            var16 = var16.GUILD_SCHEDULED_EVENTS;
            var16 = var17.bind(var1)(var16);
case 23:
            var14 = !var14;
            if(!var14) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var14 = var15;
case 25:
            if(!var14) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var15 = var1.push;
            var14 = _closure1_slot5;
            var14 = var14.CHANNELS_AND_ROLES;
            var14 = var15.bind(var1)(var14);
case 27:
            if(!var13) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var14 = var1.push;
            var13 = _closure1_slot5;
            var13 = var13.GUILD_ROLE_SUBSCRIPTIONS;
            var13 = var14.bind(var1)(var13);
case 29:
            if(!var12) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var13 = var1.push;
            var12 = _closure1_slot5;
            var12 = var12.GUILD_SHOP;
            var12 = var13.bind(var1)(var12);
case 31:
            if(!var10) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var10 = var11;
case 33:
            if(!var10) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var11 = var1.push;
            var10 = _closure1_slot5;
            var10 = var10.GUILD_GAME_SHOP;
            var10 = var11.bind(var1)(var10);
case 35:
            if(!var8) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var11 = var9.features;
            var10 = var11.has;
            var9 = _closure1_slot6;
            var9 = var9.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var8 = var10.bind(var11)(var9);
case 37:
            if(!var8) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var9 = var1.push;
            var8 = _closure1_slot5;
            var8 = var8.GUILD_MOD_DASH_MEMBER_SAFETY;
            var8 = var9.bind(var1)(var8);
case 39:
            if(!var6) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var6 = var7;
case 41:
            if(!var6) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var7 = var1.push;
            var6 = _closure1_slot5;
            var6 = var6.GUILD_BOOSTS;
            var6 = var7.bind(var1)(var6);
case 43:
            if(!var5) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            if(var3) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 45; continue _fun0001 }
case 49:
            var4 = var1.push;
            var3 = _closure1_slot5;
            var3 = var3.GAME_SERVERS_EMPTY;
            var3 = var4.bind(var1)(var3);
            _fun0001_ip = 45; continue _fun0001;
case 47:
            var3 = var1.push;
            var2 = _closure1_slot5;
            var2 = var2.GAME_SERVERS;
            var2 = var3.bind(var1)(var2);
case 45:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();