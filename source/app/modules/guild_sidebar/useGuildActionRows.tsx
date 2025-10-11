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
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot1;
            var21 = _closure1_slot2;
            var3 = 3;
            var3 = var21[var3];
            var20 = undefined;
            var4 = var5.bind(var20)(var3);
            var3 = var7.id;
            var14 = var4.bind(var20)(var3);
            var19 = _closure1_slot0;
            var3 = 4;
            var3 = var21[var3];
            var6 = var19.bind(var20)(var3);
            var4 = var6.useCanReviewGuildMemberApplications;
            var3 = var7.id;
            var6 = var4.bind(var6)(var3);
            var3 = 5;
            var3 = var21[var3];
            var8 = var19.bind(var20)(var3);
            var4 = var8.useShowRoleSubscriptionsInChannelList;
            var3 = var7.id;
            var10 = var4.bind(var8)(var3);
            var3 = 6;
            var3 = var21[var3];
            var4 = var19.bind(var20)(var3);
            var3 = var4.useGuildShopVisibleInGuild;
            var9 = var3.bind(var4)(var7);
            var3 = 7;
            var3 = var21[var3];
            var4 = var19.bind(var20)(var3);
            var3 = var4.hasSocialLayerStorefront;
            var8 = var3.bind(var4)(var7);
            var3 = 8;
            var3 = var21[var3];
            var11 = var19.bind(var20)(var3);
            var4 = var11.useCanSeeOnboardingHome;
            var3 = var7.id;
            var16 = var4.bind(var11)(var3);
            var3 = 9;
            var3 = var21[var3];
            var12 = var19.bind(var20)(var3);
            var11 = var12.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var13 = var7.id;
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
            var15 = var11.bind(var12)(var4, var1, var3);
            var1 = 10;
            var1 = var21[var1];
            var3 = var5.bind(var20)(var1);
            var1 = var7.id;
            var17 = var3.bind(var20)(var1);
            var1 = 11;
            var1 = var21[var1];
            var4 = var19.bind(var20)(var1);
            var3 = var4.useAllActionsCompleted;
            var1 = var7.id;
            var18 = var3.bind(var4)(var1);
            var1 = 12;
            var1 = var21[var1];
            var4 = var19.bind(var20)(var1);
            var3 = var4.useCanAccessMemberSafetyPage;
            var1 = var7.id;
            var1 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var12 = var7.features;
            var11 = var12.has;
            var4 = _closure1_slot5;
            var3 = var4.HUB;
            var11 = var11.bind(var12)(var3);
            var13 = var7.features;
            var12 = var13.has;
            var3 = var4.COMMUNITY;
            var13 = var12.bind(var13)(var3);
            var3 = 13;
            var3 = var21[var3];
            var22 = var19.bind(var20)(var3);
            var12 = var22.useShowBrowseChannelsExperiment;
            var3 = 14;
            var3 = var21[var3];
            var24 = var19.bind(var20)(var3);
            var23 = var24.isOptInEnabledForGuild;
            var3 = var7.id;
            var3 = var23.bind(var24)(var3);
            var3 = !var3;
            var12 = var12.bind(var22)(var3);
            var23 = var7.features;
            var22 = var23.has;
            var3 = var4.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var3 = var22.bind(var23)(var3);
            var3 = 15;
            var3 = var21[var3];
            var5 = var5.bind(var20)(var3);
            var3 = var7.id;
            var5 = var5.bind(var20)(var3);
            var3 = 16;
            var3 = var21[var3];
            var21 = var19.bind(var20)(var3);
            var20 = var21.useGameServerEnabled;
            var19 = var7.id;
            var3 = 'useGuildActionRows';
            var3 = var20.bind(var21)(var19, var3);
            var20 = var7.features;
            var19 = var20.has;
            var4 = var4.GAME_SERVERS;
            var4 = var19.bind(var20)(var4);
            if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var20 = var1.push;
            var19 = _closure1_slot4;
            var19 = var19.GUILD_HUB_HEADER_OPTIONS;
            var19 = var20.bind(var1)(var19);
case 2:
            if(var18) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!var16) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            if(!var17) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var17 = null;
            if(!(var17 != var15)) { _fun0001_ip = 4; continue _fun0001 }
case 8:
            var17 = var15.length;
            var15 = 0;
            if(!(var17 > var15)) { _fun0001_ip = 4; continue _fun0001 }
case 9:
            var17 = var1.push;
            var15 = _closure1_slot4;
            var15 = var15.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var15 = var17.bind(var1)(var15);
            _fun0001_ip = 10; continue _fun0001;
case 4:
            var15 = var7.premiumProgressBarEnabled;
case 10:
            var15 = !var11;
            if(!var15) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var15 = var16;
case 11:
            if(!var15) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var16 = var1.push;
            var15 = _closure1_slot4;
            var15 = var15.GUILD_HOME;
            var15 = var16.bind(var1)(var15);
case 13:
            if(!var14) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var15 = var1.push;
            var14 = _closure1_slot4;
            var14 = var14.GUILD_SCHEDULED_EVENTS;
            var14 = var15.bind(var1)(var14);
case 15:
            var11 = !var11;
            if(!var11) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = var13;
case 17:
            if(!var11) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var11 = var12;
case 19:
            if(!var11) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var12 = var1.push;
            var11 = _closure1_slot4;
            var11 = var11.CHANNELS_AND_ROLES;
            var11 = var12.bind(var1)(var11);
case 21:
            if(!var10) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var11 = var1.push;
            var10 = _closure1_slot4;
            var10 = var10.GUILD_ROLE_SUBSCRIPTIONS;
            var10 = var11.bind(var1)(var10);
case 23:
            if(!var9) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var10 = var1.push;
            var9 = _closure1_slot4;
            var9 = var9.GUILD_SHOP;
            var9 = var10.bind(var1)(var9);
case 25:
            if(!var8) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var9 = var1.push;
            var8 = _closure1_slot4;
            var8 = var8.GUILD_GAME_SHOP;
            var8 = var9.bind(var1)(var8);
case 27:
            if(!var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var9 = var7.features;
            var8 = var9.has;
            var7 = _closure1_slot5;
            var7 = var7.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var6 = var8.bind(var9)(var7);
case 29:
            if(!var6) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var7 = var1.push;
            var6 = _closure1_slot4;
            var6 = var6.GUILD_MOD_DASH_MEMBER_SAFETY;
            var6 = var7.bind(var1)(var6);
case 31:
            if(!var5) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var6 = var1.push;
            var5 = _closure1_slot4;
            var5 = var5.GUILD_BOOSTS;
            var5 = var6.bind(var1)(var5);
case 33:
            if(!var3) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var3 = var4;
case 35:
            if(!var3) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var3 = var1.push;
            var2 = _closure1_slot4;
            var2 = var2.GAME_SERVERS;
            var2 = var3.bind(var1)(var2);
case 37:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();