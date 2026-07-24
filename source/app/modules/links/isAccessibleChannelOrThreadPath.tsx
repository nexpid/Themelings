// app/modules/links/isAccessibleChannelOrThreadPath.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isAccessibleChannelOrThreadPath() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var10 = var2.guildId;
                    var13 = var2.channelId;
                    var6 = undefined;
                    SaveGenerator(address=29);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot8;
                    var3 = var5.getGuild;
                    var7 = var3.bind(var5)(var10);
                    var5 = _closure1_slot7;
                    var3 = var5.getUnsafeMutableRoles;
                    var9 = var3.bind(var5)(var10);
                    var3 = null;
                    if(!(var3 == var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = _closure1_slot10;
                    if(!(var10 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
                    var5 = _closure1_slot12;
                    var5 = var5.GAME_SHOP;
                    if(!(var13 === var5)) { _fun0001_ip = 11; continue _fun0001 }
case 8:
                    if(!(var3 != var13)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = _closure1_slot11;
                    var5 = var5.bind(var6)(var13);
                    if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var5 = _closure1_slot12;
                    var5 = var5.VIBEGRATIONS;
                    if(!(var5 !== var13)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var5 = _closure1_slot12;
                    var5 = var5.ROLE_SUBSCRIPTIONS;
                    if(!(var5 !== var13)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var5 = _closure1_slot12;
                    var5 = var5.SERVER_MONETIZATION_ONBOARDING;
                    if(!(var5 !== var13)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var5 = _closure1_slot12;
                    var5 = var5.GAME_SHOP;
                    if(!(var5 !== var13)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var5 = _closure1_slot12;
                    var5 = var5.GUILD_SHOP;
                    if(!(var5 !== var13)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var5 = _closure1_slot12;
                    var5 = var5.MEMBER_APPLICATIONS;
                    if(!(var5 !== var13)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var5 = _closure1_slot12;
                    var5 = var5.GUILD_HOME;
                    if(!(var5 !== var13)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var5 = _closure1_slot12;
                    var5 = var5.CHANNEL_BROWSER;
                    if(!(var5 !== var13)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var5 = _closure1_slot12;
                    var5 = var5.GUILD_ONBOARDING;
                    if(!(var5 !== var13)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var5 = _closure1_slot12;
                    var5 = var5.CUSTOMIZE_COMMUNITY;
                    if(!(var5 !== var13)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var5 = _closure1_slot12;
                    var5 = var5.MEMBER_SAFETY;
                    if(!(var5 !== var13)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                    var5 = _closure1_slot12;
                    var5 = var5.GUILD_BOOSTS;
                    if(!(var5 !== var13)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                    var5 = _closure1_slot12;
                    var5 = var5.REPORT_TO_MOD;
                    if(!(var5 !== var13)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
                    var5 = _closure1_slot12;
                    var5 = var5.GAME_SERVERS;
                    if(!(var5 !== var13)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
                    var5 = _closure1_slot12;
                    var5 = var5.GUILD_OFFICIAL_MESSAGES;
                    if(!(var5 !== var13)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
                    var5 = _closure1_slot12;
                    var5 = var5.GUILD_SPACE;
                    if(!(var5 !== var13)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 20;
                    var5 = var11[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.assertNever;
                    var5 = var5.bind(var8)(var13);
case 14:
                    var8 = _closure1_slot6;
                    var5 = var8.getChannel;
                    var8 = var5.bind(var8)(var13);
                    var5 = var3 != var8;
                    var12 = var8;
                    if(var5) { _fun0001_ip = 48; continue _fun0001 }
case 49:
                    var11 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var8 = 21;
                    var8 = var14[var8];
                    var11 = var11.bind(var6)(var8);
                    var8 = var11.loadThread;
                    var8 = var8.bind(var11)(var13);
                    SaveGenerator(address=489);
case 50:
                    return var8;
case 51:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 52; continue _fun0001 }
case 53:
                    var14 = _closure1_slot6;
                    var11 = var14.getChannel;
                    var14 = var11.bind(var14)(var13);
                    var11 = var3 == var14;
                    if(!var11) { _fun0001_ip = 54; continue _fun0001 }
case 55:
                    var15 = _closure1_slot10;
                    var11 = var10 === var15;
case 54:
                    if(!var11) { _fun0001_ip = 56; continue _fun0001 }
case 57:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var11 = 22;
                    var11 = var16[var11];
                    var15 = var15.bind(var6)(var11);
                    var11 = var15.openChannel;
                    var11 = var11.bind(var15)(var13);
                    SaveGenerator(address=562);
case 58:
                    return var11;
case 59:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=14);
                    var14 = var11;
                    if(var15) { _fun0001_ip = 60; continue _fun0001 }
case 56:
                    var5 = var3 != var14;
                    var12 = var14;
                    _fun0001_ip = 48; continue _fun0001;
case 60:
                    return var11;
case 52:
                    return var8;
case 48:
                    if(!var5) { _fun0001_ip = 61; continue _fun0001 }
case 62:
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 23;
                    var8 = var14[var8];
                    var11 = var11.bind(var6)(var8);
                    var8 = var11.canViewChannel;
                    var8 = var8.bind(var11)(var12);
                    if(var8) { _fun0001_ip = 63; continue _fun0001 }
case 64:
                    var12 = _closure1_slot4;
                    var11 = var12.isChannelGatedAndVisible;
                    var8 = var11.bind(var12)(var10, var13);
case 63:
                    var5 = var8;
case 61:
                    return var5;
case 46:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 19;
                    var5 = var11[var5];
                    var11 = var8.bind(var6)(var5);
                    var8 = var11.canUseGuildSpace;
                    var5 = 'isAccessibleChannelOrThreadPath';
                    var5 = var8.bind(var11)(var7, var5);
                    return var5;
case 44:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 18;
                    var5 = var11[var5];
                    var11 = var8.bind(var6)(var5);
                    var8 = var11.isGuildOfficialMessagesEnabled;
                    var5 = 'isAccessibleChannelOrThreadPath';
                    var5 = var8.bind(var11)(var7, var5);
                    return var5;
case 42:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 17;
                    var5 = var11[var5];
                    var11 = var8.bind(var6)(var5);
                    var8 = var11.getGameServerEnabled;
                    var5 = 'isAccessibleChannelOrThreadPath';
                    var5 = var8.bind(var11)(var10, var5);
                    if(!var5) { _fun0001_ip = 65; continue _fun0001 }
case 66:
                    var5 = var3 != var7;
case 65:
                    if(!var5) { _fun0001_ip = 67; continue _fun0001 }
case 68:
                    var12 = var7.features;
                    var11 = var12.has;
                    var8 = _closure1_slot9;
                    var8 = var8.GAME_SERVERS;
                    var5 = var11.bind(var12)(var8);
case 67:
                    return var5;
case 40:
                    var5 = var3 != var7;
                    if(!var5) { _fun0001_ip = 69; continue _fun0001 }
case 70:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 16;
                    var8 = var12[var8];
                    var8 = var11.bind(var6)(var8);
                    var5 = var8.bind(var6)(var7);
case 69:
                    return var5;
case 38:
                    var5 = true;
                    return var5;
case 36:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 15;
                    var5 = var11[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.canAccessMemberSafetyPage;
                    var5 = var5.bind(var8)(var10);
                    return var5;
case 34:
                    var5 = var3 != var7;
                    if(!var5) { _fun0001_ip = 71; continue _fun0001 }
case 72:
                    var12 = var7.features;
                    var11 = var12.has;
                    var8 = _closure1_slot9;
                    var8 = var8.COMMUNITY;
                    var5 = var11.bind(var12)(var8);
case 71:
                    return var5;
case 32:
                    var8 = _closure1_slot5;
                    var5 = var8.shouldShowOnboarding;
                    var5 = var5.bind(var8)(var10);
                    return var5;
case 30:
                    var5 = var3 != var7;
                    if(!var5) { _fun0001_ip = 73; continue _fun0001 }
case 74:
                    var12 = var7.features;
                    var11 = var12.has;
                    var8 = _closure1_slot9;
                    var8 = var8.COMMUNITY;
                    var5 = var11.bind(var12)(var8);
case 73:
                    return var5;
case 28:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 14;
                    var5 = var11[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.canSeeOnboardingHome;
                    var5 = var5.bind(var8)(var10);
                    return var5;
case 26:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 13;
                    var5 = var11[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.canReviewGuildMemberApplications;
                    var5 = var5.bind(var8)(var10);
                    return var5;
case 24:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 12;
                    var5 = var11[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.isGuildShopVisibleInGuild;
                    var5 = var5.bind(var8)(var7, var9);
                    return var5;
case 22:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 11;
                    var5 = var11[var5];
                    var11 = var8.bind(var6)(var5);
                    var8 = var11.hasSocialLayerStorefront;
                    var5 = var7;
                    if(!(var3 == var5)) { _fun0001_ip = 75; continue _fun0001 }
case 76:
                    var12 = {};
                    var12['id'] = var10;
                    var13 = 'id-only';
                    var12['type'] = var13;
                    var5 = var12;
case 75:
                    var5 = var8.bind(var11)(var5);
                    return var5;
case 20:
                    var5 = var3 != var7;
                    if(!var5) { _fun0001_ip = 77; continue _fun0001 }
case 78:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 10;
                    var8 = var12[var8];
                    var11 = var11.bind(var6)(var8);
                    var8 = var11.canUserSeeMonetizationOnboarding;
                    var5 = var8.bind(var11)(var7);
case 77:
                    return var5;
case 18:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 9;
                    var5 = var11[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.areRoleSubscriptionsVisibleInGuild;
                    var5 = var5.bind(var8)(var10, var9);
                    return var5;
case 16:
                    var3 = var3 != var7;
                    if(!var3) { _fun0001_ip = 79; continue _fun0001 }
case 80:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 8;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.canManageVibegrations;
                    var4 = 'isAccessibleChannelOrThreadPath';
                    var3 = var5.bind(var6)(var7, var4);
case 79:
                    return var3;
case 12:
                    var3 = true;
                    return var3;
case 11:
                    var3 = false;
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot9 = var7;
    var4 = var4.ME;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.isStaticChannelRoute;
    var _closure1_slot11 = var7;
    var4 = var4.StaticChannelRoute;
    var _closure1_slot12 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/links/isAccessibleChannelOrThreadPath.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isAccessibleChannelOrThreadPath() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();