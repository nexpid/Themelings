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
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/useGuildActionRows.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildActionRows(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var5 = _closure1_slot1;
            var22 = _closure1_slot2;
            var3 = 4;
            var3 = var22[var3];
            var21 = undefined;
            var4 = var5.bind(var21)(var3);
            var3 = var8.id;
            var14 = var4.bind(var21)(var3);
            var20 = _closure1_slot0;
            var3 = 5;
            var3 = var22[var3];
            var6 = var20.bind(var21)(var3);
            var4 = var6.useCanReviewGuildMemberApplications;
            var3 = var8.id;
            var7 = var4.bind(var6)(var3);
            var3 = 6;
            var3 = var22[var3];
            var6 = var20.bind(var21)(var3);
            var4 = var6.useShowRoleSubscriptionsInChannelList;
            var3 = var8.id;
            var11 = var4.bind(var6)(var3);
            var3 = 7;
            var3 = var22[var3];
            var4 = var20.bind(var21)(var3);
            var3 = var4.useGuildShopVisibleInGuild;
            var10 = var3.bind(var4)(var8);
            var3 = 8;
            var3 = var22[var3];
            var4 = var20.bind(var21)(var3);
            var3 = var4.hasSocialLayerStorefront;
            var9 = var3.bind(var4)(var8);
            var3 = 9;
            var3 = var22[var3];
            var6 = var20.bind(var21)(var3);
            var4 = var6.useCanSeeOnboardingHome;
            var3 = var8.id;
            var16 = var4.bind(var6)(var3);
            var3 = 10;
            var3 = var22[var3];
            var12 = var20.bind(var21)(var3);
            var6 = var12.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var13 = var8.id;
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
            var15 = var6.bind(var12)(var4, var1, var3);
            var1 = 11;
            var1 = var22[var1];
            var3 = var5.bind(var21)(var1);
            var1 = var8.id;
            var18 = var3.bind(var21)(var1);
            var1 = 12;
            var1 = var22[var1];
            var4 = var20.bind(var21)(var1);
            var3 = var4.useAllActionsCompleted;
            var1 = var8.id;
            var19 = var3.bind(var4)(var1);
            var1 = 13;
            var1 = var22[var1];
            var4 = var20.bind(var21)(var1);
            var3 = var4.useCanAccessMemberSafetyPage;
            var1 = var8.id;
            var1 = var3.bind(var4)(var1);
            var1 = new Array(0);
            var12 = var8.features;
            var6 = var12.has;
            var3 = _closure1_slot6;
            var4 = var3.HUB;
            var12 = var6.bind(var12)(var4);
            var13 = var8.features;
            var6 = var13.has;
            var4 = var3.COMMUNITY;
            var13 = var6.bind(var13)(var4);
            var17 = var8.features;
            var6 = var17.has;
            var4 = var3.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var4 = var6.bind(var17)(var4);
            var4 = 14;
            var4 = var22[var4];
            var5 = var5.bind(var21)(var4);
            var4 = var8.id;
            var6 = var5.bind(var21)(var4);
            var4 = 15;
            var4 = var22[var4];
            var17 = var20.bind(var21)(var4);
            var5 = var17.useGameServerEnabled;
            var4 = var8.id;
            var23 = 'useGuildActionRows';
            var5 = var5.bind(var17)(var4, var23);
            var17 = var8.features;
            var4 = var17.has;
            var3 = var3.GAME_SERVERS;
            var3 = var4.bind(var17)(var3);
            var4 = 16;
            var4 = var22[var4];
            var17 = var20.bind(var21)(var4);
            var4 = var17.useIsGameServerTabAlwaysOnEnabled;
            var4 = var4.bind(var17)(var23);
            var17 = 17;
            var17 = var22[var17];
            var22 = var20.bind(var21)(var17);
            var20 = var22.useSelectedDismissibleContent;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var17 = _closure1_slot0;
            var23 = _closure1_slot2;
            var4 = 18;
            var4 = var23[var4];
            var4 = var17.bind(var21)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.EMPTY_GAME_SERVER_TAB;
            var17 = new Array(1);
            var17[0] = var4;
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var17 = new Array(0);
case 6:
            var4 = true;
            var20 = var20.bind(var22)(var17, var21, var4);
            var17 = _closure1_slot3;
            var4 = 1;
            var4 = var17.bind(var21)(var20, var4);
            var17 = 0;
            var4 = var4[var17];
            if(!var12) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var21 = var1.push;
            var20 = _closure1_slot5;
            var20 = var20.GUILD_HUB_HEADER_OPTIONS;
            var20 = var21.bind(var1)(var20);
case 7:
            if(var19) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(!var16) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            if(!var18) { _fun0001_ip = 9; continue _fun0001 }
case 12:
            var18 = null;
            if(!(var18 != var15)) { _fun0001_ip = 9; continue _fun0001 }
case 13:
            var15 = var15.length;
            if(!(var15 > var17)) { _fun0001_ip = 9; continue _fun0001 }
case 14:
            var17 = var1.push;
            var15 = _closure1_slot5;
            var15 = var15.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var15 = var17.bind(var1)(var15);
            _fun0001_ip = 15; continue _fun0001;
case 9:
            var15 = var8.premiumProgressBarEnabled;
case 15:
            var15 = !var12;
            if(!var15) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var15 = var16;
case 16:
            if(!var15) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var16 = var1.push;
            var15 = _closure1_slot5;
            var15 = var15.GUILD_HOME;
            var15 = var16.bind(var1)(var15);
case 18:
            if(!var14) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var15 = var1.push;
            var14 = _closure1_slot5;
            var14 = var14.GUILD_SCHEDULED_EVENTS;
            var14 = var15.bind(var1)(var14);
case 20:
            var12 = !var12;
            if(!var12) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var12 = var13;
case 22:
            if(!var12) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var13 = var1.push;
            var12 = _closure1_slot5;
            var12 = var12.CHANNELS_AND_ROLES;
            var12 = var13.bind(var1)(var12);
case 24:
            if(!var11) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var12 = var1.push;
            var11 = _closure1_slot5;
            var11 = var11.GUILD_ROLE_SUBSCRIPTIONS;
            var11 = var12.bind(var1)(var11);
case 26:
            if(!var10) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var11 = var1.push;
            var10 = _closure1_slot5;
            var10 = var10.GUILD_SHOP;
            var10 = var11.bind(var1)(var10);
case 28:
            if(!var9) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var10 = var1.push;
            var9 = _closure1_slot5;
            var9 = var9.GUILD_GAME_SHOP;
            var9 = var10.bind(var1)(var9);
case 30:
            if(!var7) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var10 = var8.features;
            var9 = var10.has;
            var8 = _closure1_slot6;
            var8 = var8.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var7 = var9.bind(var10)(var8);
case 32:
            if(!var7) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var8 = var1.push;
            var7 = _closure1_slot5;
            var7 = var7.GUILD_MOD_DASH_MEMBER_SAFETY;
            var7 = var8.bind(var1)(var7);
case 34:
            if(!var6) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var7 = var1.push;
            var6 = _closure1_slot5;
            var6 = var6.GUILD_BOOSTS;
            var6 = var7.bind(var1)(var6);
case 36:
            if(!var5) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            if(var3) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 38; continue _fun0001 }
case 42:
            var4 = var1.push;
            var3 = _closure1_slot5;
            var3 = var3.GAME_SERVERS_EMPTY;
            var3 = var4.bind(var1)(var3);
            _fun0001_ip = 38; continue _fun0001;
case 40:
            var3 = var1.push;
            var2 = _closure1_slot5;
            var2 = var2.GAME_SERVERS;
            var2 = var3.bind(var1)(var2);
case 38:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();