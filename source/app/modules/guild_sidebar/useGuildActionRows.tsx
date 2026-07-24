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
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/useGuildActionRows.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildActionRows(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var6 = _closure1_slot1;
            var27 = _closure1_slot2;
            var3 = 4;
            var3 = var27[var3];
            var26 = undefined;
            var4 = var6.bind(var26)(var3);
            var3 = var10.id;
            var16 = var4.bind(var26)(var3);
            var25 = _closure1_slot0;
            var3 = 5;
            var3 = var27[var3];
            var5 = var25.bind(var26)(var3);
            var4 = var5.useCanReviewGuildMemberApplications;
            var3 = var10.id;
            var9 = var4.bind(var5)(var3);
            var3 = 6;
            var3 = var27[var3];
            var5 = var25.bind(var26)(var3);
            var4 = var5.useShowRoleSubscriptionsInChannelList;
            var3 = var10.id;
            var13 = var4.bind(var5)(var3);
            var3 = 7;
            var3 = var27[var3];
            var4 = var25.bind(var26)(var3);
            var3 = var4.useGuildShopVisibleInGuild;
            var12 = var3.bind(var4)(var10);
            var3 = 8;
            var3 = var27[var3];
            var4 = var25.bind(var26)(var3);
            var3 = var4.hasSocialLayerStorefront;
            var11 = var3.bind(var4)(var10);
            var3 = 9;
            var3 = var27[var3];
            var5 = var25.bind(var26)(var3);
            var4 = var5.useCanSeeOnboardingHome;
            var3 = var10.id;
            var18 = var4.bind(var5)(var3);
            var3 = 10;
            var3 = var27[var3];
            var7 = var25.bind(var26)(var3);
            var5 = var7.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var8 = var10.id;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getNewMemberActions;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var5.bind(var7)(var4, var1, var3);
            var1 = 11;
            var1 = var27[var1];
            var3 = var25.bind(var26)(var1);
            var1 = var3.useCanManageVibegrations;
            var28 = 'useGuildActionRows';
            var3 = var1.bind(var3)(var10, var28);
            var1 = 12;
            var1 = var27[var1];
            var4 = var6.bind(var26)(var1);
            var1 = var10.id;
            var22 = var4.bind(var26)(var1);
            var1 = 13;
            var1 = var27[var1];
            var5 = var25.bind(var26)(var1);
            var4 = var5.useAllActionsCompleted;
            var1 = var10.id;
            var23 = var4.bind(var5)(var1);
            var1 = 14;
            var1 = var27[var1];
            var5 = var25.bind(var26)(var1);
            var4 = var5.useCanAccessMemberSafetyPage;
            var1 = var10.id;
            var1 = var4.bind(var5)(var1);
            var1 = 15;
            var1 = var27[var1];
            var4 = var25.bind(var26)(var1);
            var1 = var4.useCanUseGuildSpace;
            var24 = var1.bind(var4)(var10, var28);
            var1 = new Array(0);
            var8 = var10.features;
            var7 = var8.has;
            var4 = _closure1_slot6;
            var5 = var4.HUB;
            var14 = var7.bind(var8)(var5);
            var8 = var10.features;
            var7 = var8.has;
            var5 = var4.COMMUNITY;
            var15 = var7.bind(var8)(var5);
            var8 = var10.features;
            var7 = var8.has;
            var5 = var4.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var5 = var7.bind(var8)(var5);
            var5 = 16;
            var5 = var27[var5];
            var7 = var6.bind(var26)(var5);
            var5 = var10.id;
            var8 = var7.bind(var26)(var5);
            var5 = 17;
            var5 = var27[var5];
            var7 = var25.bind(var26)(var5);
            var5 = var7.useMobileBoostProgressBarEnabled;
            var21 = var5.bind(var7)(var28);
            var5 = 18;
            var5 = var27[var5];
            var5 = var6.bind(var26)(var5);
            var20 = var5.bind(var26)(var10);
            var5 = 19;
            var5 = var27[var5];
            var7 = var25.bind(var26)(var5);
            var6 = var7.useIsGuildOfficialMessagesEnabled;
            var5 = var10.id;
            var7 = var6.bind(var7)(var5, var28);
            var5 = 20;
            var5 = var27[var5];
            var19 = var25.bind(var26)(var5);
            var6 = var19.useGameServerEnabled;
            var5 = var10.id;
            var6 = var6.bind(var19)(var5, var28);
            var19 = var10.features;
            var5 = var19.has;
            var4 = var4.GAME_SERVERS;
            var4 = var5.bind(var19)(var4);
            var5 = 21;
            var5 = var27[var5];
            var19 = var25.bind(var26)(var5);
            var5 = var19.useIsGameServerTabAlwaysOnEnabled;
            var5 = var5.bind(var19)(var28);
            var19 = 22;
            var19 = var27[var19];
            var27 = var25.bind(var26)(var19);
            var25 = var27.useSelectedDismissibleContent;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var19 = _closure1_slot0;
            var28 = _closure1_slot2;
            var5 = 23;
            var5 = var28[var5];
            var5 = var19.bind(var26)(var5);
            var5 = var5.DismissibleContent;
            var5 = var5.EMPTY_GAME_SERVER_TAB;
            var19 = new Array(1);
            var19[0] = var5;
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var19 = new Array(0);
case 6:
            var5 = true;
            var25 = var25.bind(var27)(var19, var26, var5);
            var19 = _closure1_slot3;
            var5 = 1;
            var5 = var19.bind(var26)(var25, var5);
            var19 = 0;
            var5 = var5[var19];
            if(!var24) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var25 = var1.push;
            var24 = _closure1_slot5;
            var24 = var24.GUILD_SPACE;
            var24 = var25.bind(var1)(var24);
case 7:
            if(!var14) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var25 = var1.push;
            var24 = _closure1_slot5;
            var24 = var24.GUILD_HUB_HEADER_OPTIONS;
            var24 = var25.bind(var1)(var24);
case 9:
            if(var23) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(!var18) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            if(!var22) { _fun0001_ip = 11; continue _fun0001 }
case 14:
            var22 = null;
            if(!(var22 != var17)) { _fun0001_ip = 11; continue _fun0001 }
case 15:
            var17 = var17.length;
            if(!(var17 > var19)) { _fun0001_ip = 11; continue _fun0001 }
case 16:
            var22 = var1.push;
            var17 = _closure1_slot5;
            var17 = var17.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var17 = var22.bind(var1)(var17);
            _fun0001_ip = 17; continue _fun0001;
case 11:
            var17 = var10.premiumProgressBarEnabled;
            if(!var17) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var17 = var21;
case 18:
            if(!var17) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var17 = var20 > var19;
case 20:
            if(!var17) { _fun0001_ip = 17; continue _fun0001 }
case 22:
            var19 = var1.push;
            var17 = _closure1_slot5;
            var17 = var17.GUILD_PREMIUM_PROGRESS_BAR;
            var17 = var19.bind(var1)(var17);
case 17:
            var17 = !var14;
            if(!var17) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var17 = var18;
case 23:
            if(!var17) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var18 = var1.push;
            var17 = _closure1_slot5;
            var17 = var17.GUILD_HOME;
            var17 = var18.bind(var1)(var17);
case 25:
            if(!var16) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var17 = var1.push;
            var16 = _closure1_slot5;
            var16 = var16.GUILD_SCHEDULED_EVENTS;
            var16 = var17.bind(var1)(var16);
case 27:
            var14 = !var14;
            if(!var14) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var14 = var15;
case 29:
            if(!var14) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var15 = var1.push;
            var14 = _closure1_slot5;
            var14 = var14.CHANNELS_AND_ROLES;
            var14 = var15.bind(var1)(var14);
case 31:
            if(!var13) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var14 = var1.push;
            var13 = _closure1_slot5;
            var13 = var13.GUILD_ROLE_SUBSCRIPTIONS;
            var13 = var14.bind(var1)(var13);
case 33:
            if(!var12) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var13 = var1.push;
            var12 = _closure1_slot5;
            var12 = var12.GUILD_SHOP;
            var12 = var13.bind(var1)(var12);
case 35:
            if(!var11) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var12 = var1.push;
            var11 = _closure1_slot5;
            var11 = var11.GUILD_GAME_SHOP;
            var11 = var12.bind(var1)(var11);
case 37:
            if(!var9) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var12 = var10.features;
            var11 = var12.has;
            var10 = _closure1_slot6;
            var10 = var10.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var9 = var11.bind(var12)(var10);
case 39:
            if(!var9) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var10 = var1.push;
            var9 = _closure1_slot5;
            var9 = var9.GUILD_MOD_DASH_MEMBER_SAFETY;
            var9 = var10.bind(var1)(var9);
case 41:
            if(!var8) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var9 = var1.push;
            var8 = _closure1_slot5;
            var8 = var8.GUILD_BOOSTS;
            var8 = var9.bind(var1)(var8);
case 43:
            if(!var7) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var8 = var1.push;
            var7 = _closure1_slot5;
            var7 = var7.GUILD_OFFICIAL_MESSAGES;
            var7 = var8.bind(var1)(var7);
case 45:
            if(!var6) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            if(var4) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var4 = null;
            if(!(var4 != var5)) { _fun0001_ip = 47; continue _fun0001 }
case 51:
            var5 = var1.push;
            var4 = _closure1_slot5;
            var4 = var4.GAME_SERVERS_EMPTY;
            var4 = var5.bind(var1)(var4);
            _fun0001_ip = 47; continue _fun0001;
case 49:
            var5 = var1.push;
            var4 = _closure1_slot5;
            var4 = var4.GAME_SERVERS;
            var4 = var5.bind(var1)(var4);
case 47:
            if(!var3) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var3 = var1.push;
            var2 = _closure1_slot5;
            var2 = var2.GUILD_VIBEGRATIONS;
            var2 = var3.bind(var1)(var2);
case 52:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();