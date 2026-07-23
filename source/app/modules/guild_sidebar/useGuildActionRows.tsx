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
    var4 = 23;
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
            var26 = _closure1_slot2;
            var3 = 4;
            var3 = var26[var3];
            var25 = undefined;
            var4 = var5.bind(var25)(var3);
            var3 = var9.id;
            var15 = var4.bind(var25)(var3);
            var24 = _closure1_slot0;
            var3 = 5;
            var3 = var26[var3];
            var6 = var24.bind(var25)(var3);
            var4 = var6.useCanReviewGuildMemberApplications;
            var3 = var9.id;
            var8 = var4.bind(var6)(var3);
            var3 = 6;
            var3 = var26[var3];
            var6 = var24.bind(var25)(var3);
            var4 = var6.useShowRoleSubscriptionsInChannelList;
            var3 = var9.id;
            var12 = var4.bind(var6)(var3);
            var3 = 7;
            var3 = var26[var3];
            var4 = var24.bind(var25)(var3);
            var3 = var4.useGuildShopVisibleInGuild;
            var11 = var3.bind(var4)(var9);
            var3 = 8;
            var3 = var26[var3];
            var4 = var24.bind(var25)(var3);
            var3 = var4.hasSocialLayerStorefront;
            var10 = var3.bind(var4)(var9);
            var3 = 9;
            var3 = var26[var3];
            var6 = var24.bind(var25)(var3);
            var4 = var6.useCanSeeOnboardingHome;
            var3 = var9.id;
            var17 = var4.bind(var6)(var3);
            var3 = 10;
            var3 = var26[var3];
            var7 = var24.bind(var25)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var13 = var9.id;
            var3 = new Array(1);
            var3[0] = var13;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getNewMemberActions;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var6.bind(var7)(var4, var1, var3);
            var1 = 11;
            var1 = var26[var1];
            var3 = var5.bind(var25)(var1);
            var1 = var9.id;
            var21 = var3.bind(var25)(var1);
            var1 = 12;
            var1 = var26[var1];
            var4 = var24.bind(var25)(var1);
            var3 = var4.useAllActionsCompleted;
            var1 = var9.id;
            var22 = var3.bind(var4)(var1);
            var1 = 13;
            var1 = var26[var1];
            var4 = var24.bind(var25)(var1);
            var3 = var4.useCanAccessMemberSafetyPage;
            var1 = var9.id;
            var1 = var3.bind(var4)(var1);
            var1 = 14;
            var1 = var26[var1];
            var3 = var24.bind(var25)(var1);
            var1 = var3.useCanUseGuildSpace;
            var27 = 'useGuildActionRows';
            var23 = var1.bind(var3)(var9, var27);
            var1 = new Array(0);
            var7 = var9.features;
            var6 = var7.has;
            var3 = _closure1_slot6;
            var4 = var3.HUB;
            var13 = var6.bind(var7)(var4);
            var7 = var9.features;
            var6 = var7.has;
            var4 = var3.COMMUNITY;
            var14 = var6.bind(var7)(var4);
            var7 = var9.features;
            var6 = var7.has;
            var4 = var3.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var4 = var6.bind(var7)(var4);
            var4 = 15;
            var4 = var26[var4];
            var6 = var5.bind(var25)(var4);
            var4 = var9.id;
            var7 = var6.bind(var25)(var4);
            var4 = 16;
            var4 = var26[var4];
            var6 = var24.bind(var25)(var4);
            var4 = var6.useMobileBoostProgressBarEnabled;
            var20 = var4.bind(var6)(var27);
            var4 = 17;
            var4 = var26[var4];
            var4 = var5.bind(var25)(var4);
            var19 = var4.bind(var25)(var9);
            var4 = 18;
            var4 = var26[var4];
            var6 = var24.bind(var25)(var4);
            var5 = var6.useIsGuildOfficialMessagesEnabled;
            var4 = var9.id;
            var6 = var5.bind(var6)(var4, var27);
            var4 = 19;
            var4 = var26[var4];
            var18 = var24.bind(var25)(var4);
            var5 = var18.useGameServerEnabled;
            var4 = var9.id;
            var5 = var5.bind(var18)(var4, var27);
            var18 = var9.features;
            var4 = var18.has;
            var3 = var3.GAME_SERVERS;
            var3 = var4.bind(var18)(var3);
            var4 = 20;
            var4 = var26[var4];
            var18 = var24.bind(var25)(var4);
            var4 = var18.useIsGameServerTabAlwaysOnEnabled;
            var4 = var4.bind(var18)(var27);
            var18 = 21;
            var18 = var26[var18];
            var26 = var24.bind(var25)(var18);
            var24 = var26.useSelectedDismissibleContent;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var18 = _closure1_slot0;
            var27 = _closure1_slot2;
            var4 = 22;
            var4 = var27[var4];
            var4 = var18.bind(var25)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.EMPTY_GAME_SERVER_TAB;
            var18 = new Array(1);
            var18[0] = var4;
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var18 = new Array(0);
case 6:
            var4 = true;
            var24 = var24.bind(var26)(var18, var25, var4);
            var18 = _closure1_slot3;
            var4 = 1;
            var4 = var18.bind(var25)(var24, var4);
            var18 = 0;
            var4 = var4[var18];
            if(!var23) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var24 = var1.push;
            var23 = _closure1_slot5;
            var23 = var23.GUILD_SPACE;
            var23 = var24.bind(var1)(var23);
case 7:
            if(!var13) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var24 = var1.push;
            var23 = _closure1_slot5;
            var23 = var23.GUILD_HUB_HEADER_OPTIONS;
            var23 = var24.bind(var1)(var23);
case 9:
            if(var22) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(!var17) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            if(!var21) { _fun0001_ip = 11; continue _fun0001 }
case 14:
            var21 = null;
            if(!(var21 != var16)) { _fun0001_ip = 11; continue _fun0001 }
case 15:
            var16 = var16.length;
            if(!(var16 > var18)) { _fun0001_ip = 11; continue _fun0001 }
case 16:
            var21 = var1.push;
            var16 = _closure1_slot5;
            var16 = var16.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var16 = var21.bind(var1)(var16);
            _fun0001_ip = 17; continue _fun0001;
case 11:
            var16 = var9.premiumProgressBarEnabled;
            if(!var16) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var16 = var20;
case 18:
            if(!var16) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var16 = var19 > var18;
case 20:
            if(!var16) { _fun0001_ip = 17; continue _fun0001 }
case 22:
            var18 = var1.push;
            var16 = _closure1_slot5;
            var16 = var16.GUILD_PREMIUM_PROGRESS_BAR;
            var16 = var18.bind(var1)(var16);
case 17:
            var16 = !var13;
            if(!var16) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var16 = var17;
case 23:
            if(!var16) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var17 = var1.push;
            var16 = _closure1_slot5;
            var16 = var16.GUILD_HOME;
            var16 = var17.bind(var1)(var16);
case 25:
            if(!var15) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var16 = var1.push;
            var15 = _closure1_slot5;
            var15 = var15.GUILD_SCHEDULED_EVENTS;
            var15 = var16.bind(var1)(var15);
case 27:
            var13 = !var13;
            if(!var13) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var13 = var14;
case 29:
            if(!var13) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var14 = var1.push;
            var13 = _closure1_slot5;
            var13 = var13.CHANNELS_AND_ROLES;
            var13 = var14.bind(var1)(var13);
case 31:
            if(!var12) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var13 = var1.push;
            var12 = _closure1_slot5;
            var12 = var12.GUILD_ROLE_SUBSCRIPTIONS;
            var12 = var13.bind(var1)(var12);
case 33:
            if(!var11) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var12 = var1.push;
            var11 = _closure1_slot5;
            var11 = var11.GUILD_SHOP;
            var11 = var12.bind(var1)(var11);
case 35:
            if(!var10) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var11 = var1.push;
            var10 = _closure1_slot5;
            var10 = var10.GUILD_GAME_SHOP;
            var10 = var11.bind(var1)(var10);
case 37:
            if(!var8) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var11 = var9.features;
            var10 = var11.has;
            var9 = _closure1_slot6;
            var9 = var9.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var8 = var10.bind(var11)(var9);
case 39:
            if(!var8) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var9 = var1.push;
            var8 = _closure1_slot5;
            var8 = var8.GUILD_MOD_DASH_MEMBER_SAFETY;
            var8 = var9.bind(var1)(var8);
case 41:
            if(!var7) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var8 = var1.push;
            var7 = _closure1_slot5;
            var7 = var7.GUILD_BOOSTS;
            var7 = var8.bind(var1)(var7);
case 43:
            if(!var6) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var7 = var1.push;
            var6 = _closure1_slot5;
            var6 = var6.GUILD_OFFICIAL_MESSAGES;
            var6 = var7.bind(var1)(var6);
case 45:
            if(!var5) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            if(var3) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 47; continue _fun0001 }
case 51:
            var4 = var1.push;
            var3 = _closure1_slot5;
            var3 = var3.GAME_SERVERS_EMPTY;
            var3 = var4.bind(var1)(var3);
            _fun0001_ip = 47; continue _fun0001;
case 49:
            var3 = var1.push;
            var2 = _closure1_slot5;
            var2 = var2.GAME_SERVERS;
            var2 = var3.bind(var1)(var2);
case 47:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();