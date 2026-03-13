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
    var4 = 20;
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
            var21 = _closure1_slot2;
            var3 = 4;
            var3 = var21[var3];
            var22 = undefined;
            var4 = var5.bind(var22)(var3);
            var3 = var8.id;
            var14 = var4.bind(var22)(var3);
            var20 = _closure1_slot0;
            var3 = 5;
            var3 = var21[var3];
            var6 = var20.bind(var22)(var3);
            var4 = var6.useCanReviewGuildMemberApplications;
            var3 = var8.id;
            var7 = var4.bind(var6)(var3);
            var3 = 6;
            var3 = var21[var3];
            var6 = var20.bind(var22)(var3);
            var4 = var6.useShowRoleSubscriptionsInChannelList;
            var3 = var8.id;
            var11 = var4.bind(var6)(var3);
            var3 = 7;
            var3 = var21[var3];
            var4 = var20.bind(var22)(var3);
            var3 = var4.useGuildShopVisibleInGuild;
            var10 = var3.bind(var4)(var8);
            var3 = 8;
            var3 = var21[var3];
            var4 = var20.bind(var22)(var3);
            var3 = var4.hasSocialLayerStorefront;
            var9 = var3.bind(var4)(var8);
            var3 = 9;
            var3 = var21[var3];
            var6 = var20.bind(var22)(var3);
            var4 = var6.useCanSeeOnboardingHome;
            var3 = var8.id;
            var16 = var4.bind(var6)(var3);
            var3 = 10;
            var3 = var21[var3];
            var12 = var20.bind(var22)(var3);
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
            var17 = var6.bind(var12)(var4, var1, var3);
            var1 = 11;
            var1 = var21[var1];
            var3 = var5.bind(var22)(var1);
            var1 = var8.id;
            var19 = var3.bind(var22)(var1);
            var1 = 12;
            var1 = var21[var1];
            var4 = var20.bind(var22)(var1);
            var3 = var4.useAllActionsCompleted;
            var1 = var8.id;
            var15 = var3.bind(var4)(var1);
            var1 = 13;
            var1 = var21[var1];
            var4 = var20.bind(var22)(var1);
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
            var18 = var8.features;
            var6 = var18.has;
            var4 = var3.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
            var4 = var6.bind(var18)(var4);
            var4 = 14;
            var4 = var21[var4];
            var5 = var5.bind(var22)(var4);
            var4 = var8.id;
            var6 = var5.bind(var22)(var4);
            var4 = 15;
            var4 = var21[var4];
            var18 = var20.bind(var22)(var4);
            var5 = var18.useGameServerEnabled;
            var4 = var8.id;
            var23 = 'useGuildActionRows';
            var5 = var5.bind(var18)(var4, var23);
            var18 = var8.features;
            var4 = var18.has;
            var3 = var3.GAME_SERVERS;
            var3 = var4.bind(var18)(var3);
            var4 = 16;
            var4 = var21[var4];
            var18 = var20.bind(var22)(var4);
            var4 = var18.useIsGameServerTabAlwaysOnEnabled;
            var4 = var4.bind(var18)(var23);
            var18 = 17;
            var18 = var21[var18];
            var21 = var20.bind(var22)(var18);
            var20 = var21.useSelectedDismissibleContent;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var18 = _closure1_slot0;
            var23 = _closure1_slot2;
            var4 = 18;
            var4 = var23[var4];
            var4 = var18.bind(var22)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.EMPTY_GAME_SERVER_TAB;
            var18 = new Array(1);
            var18[0] = var4;
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var18 = new Array(0);
case 6:
            var4 = true;
            var20 = var20.bind(var21)(var18, var22, var4);
            var18 = _closure1_slot3;
            var4 = 1;
            var4 = var18.bind(var22)(var20, var4);
            var18 = 0;
            var4 = var4[var18];
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 19;
            var20 = var23[var20];
            var22 = var21.bind(var22)(var20);
            var21 = var22.useIsBoostProgressBarEnabled;
            var20 = {};
            var23 = 'guild-action-rows';
            var20['location'] = var23;
            var20 = var21.bind(var22)(var8, var20);
            if(!var12) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var21 = var1.push;
            var20 = _closure1_slot5;
            var20 = var20.GUILD_HUB_HEADER_OPTIONS;
            var20 = var21.bind(var1)(var20);
case 7:
            var15 = !var15;
            if(!var15) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var15 = var16;
case 9:
            if(!var15) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var15 = var19;
case 11:
            if(!var15) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var19 = null;
            var15 = var19 != var17;
case 13:
            if(!var15) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var17 = var17.length;
            var15 = var17 > var18;
case 15:
            if(!var15) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var17 = var1.push;
            var15 = _closure1_slot5;
            var15 = var15.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            var15 = var17.bind(var1)(var15);
case 17:
            var15 = !var12;
            if(!var15) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var15 = var16;
case 19:
            if(!var15) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var16 = var1.push;
            var15 = _closure1_slot5;
            var15 = var15.GUILD_HOME;
            var15 = var16.bind(var1)(var15);
case 21:
            if(!var14) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var15 = var1.push;
            var14 = _closure1_slot5;
            var14 = var14.GUILD_SCHEDULED_EVENTS;
            var14 = var15.bind(var1)(var14);
case 23:
            var12 = !var12;
            if(!var12) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var12 = var13;
case 25:
            if(!var12) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var13 = var1.push;
            var12 = _closure1_slot5;
            var12 = var12.CHANNELS_AND_ROLES;
            var12 = var13.bind(var1)(var12);
case 27:
            if(!var11) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var12 = var1.push;
            var11 = _closure1_slot5;
            var11 = var11.GUILD_ROLE_SUBSCRIPTIONS;
            var11 = var12.bind(var1)(var11);
case 29:
            if(!var10) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var11 = var1.push;
            var10 = _closure1_slot5;
            var10 = var10.GUILD_SHOP;
            var10 = var11.bind(var1)(var10);
case 31:
            if(!var9) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var10 = var1.push;
            var9 = _closure1_slot5;
            var9 = var9.GUILD_GAME_SHOP;
            var9 = var10.bind(var1)(var9);
case 33:
            if(!var7) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var10 = var8.features;
            var9 = var10.has;
            var8 = _closure1_slot6;
            var8 = var8.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var7 = var9.bind(var10)(var8);
case 35:
            if(!var7) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var8 = var1.push;
            var7 = _closure1_slot5;
            var7 = var7.GUILD_MOD_DASH_MEMBER_SAFETY;
            var7 = var8.bind(var1)(var7);
case 37:
            if(!var6) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var7 = var1.push;
            var6 = _closure1_slot5;
            var6 = var6.GUILD_BOOSTS;
            var6 = var7.bind(var1)(var6);
case 39:
            if(!var5) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            if(var3) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 41; continue _fun0001 }
case 45:
            var4 = var1.push;
            var3 = _closure1_slot5;
            var3 = var3.GAME_SERVERS_EMPTY;
            var3 = var4.bind(var1)(var3);
            _fun0001_ip = 41; continue _fun0001;
case 43:
            var3 = var1.push;
            var2 = _closure1_slot5;
            var2 = var2.GAME_SERVERS;
            var2 = var3.bind(var1)(var2);
case 41:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();