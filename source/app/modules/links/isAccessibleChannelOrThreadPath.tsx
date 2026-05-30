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
                    var6 = var2.guildId;
                    var13 = var2.channelId;
                    var7 = undefined;
                    SaveGenerator(address=29);
case 4:
                    return var7;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot8;
                    var4 = var5.getGuild;
                    var10 = var4.bind(var5)(var6);
                    var5 = _closure1_slot7;
                    var4 = var5.getUnsafeMutableRoles;
                    var5 = var4.bind(var5)(var6);
                    var4 = null;
                    if(!(var4 == var10)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var8 = _closure1_slot10;
                    if(!(var6 !== var8)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
                    var8 = _closure1_slot12;
                    var8 = var8.GAME_SHOP;
                    if(!(var13 === var8)) { _fun0001_ip = 11; continue _fun0001 }
case 8:
                    if(!(var4 != var13)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var8 = _closure1_slot11;
                    var8 = var8.bind(var7)(var13);
                    if(!var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var8 = _closure1_slot12;
                    var8 = var8.ROLE_SUBSCRIPTIONS;
                    if(!(var8 !== var13)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var8 = _closure1_slot12;
                    var8 = var8.SERVER_MONETIZATION_ONBOARDING;
                    if(!(var8 !== var13)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var8 = _closure1_slot12;
                    var8 = var8.GAME_SHOP;
                    if(!(var8 !== var13)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_SHOP;
                    if(!(var8 !== var13)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var8 = _closure1_slot12;
                    var8 = var8.MEMBER_APPLICATIONS;
                    if(!(var8 !== var13)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_HOME;
                    if(!(var8 !== var13)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var8 = _closure1_slot12;
                    var8 = var8.CHANNEL_BROWSER;
                    if(!(var8 !== var13)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_ONBOARDING;
                    if(!(var8 !== var13)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var8 = _closure1_slot12;
                    var8 = var8.CUSTOMIZE_COMMUNITY;
                    if(!(var8 !== var13)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var8 = _closure1_slot12;
                    var8 = var8.MEMBER_SAFETY;
                    if(!(var8 !== var13)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_BOOSTS;
                    if(!(var8 !== var13)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                    var8 = _closure1_slot12;
                    var8 = var8.REPORT_TO_MOD;
                    if(!(var8 !== var13)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                    var8 = _closure1_slot12;
                    var8 = var8.GAME_SERVERS;
                    if(!(var8 !== var13)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_OFFICIAL_MESSAGES;
                    if(!(var8 !== var13)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 18;
                    var8 = var11[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.assertNever;
                    var8 = var8.bind(var9)(var13);
case 14:
                    var9 = _closure1_slot6;
                    var8 = var9.getChannel;
                    var9 = var8.bind(var9)(var13);
                    var8 = var4 != var9;
                    var12 = var9;
                    if(var8) { _fun0001_ip = 44; continue _fun0001 }
case 45:
                    var11 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 19;
                    var9 = var14[var9];
                    var11 = var11.bind(var7)(var9);
                    var9 = var11.loadThread;
                    var9 = var9.bind(var11)(var13);
                    SaveGenerator(address=455);
case 46:
                    return var9;
case 47:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 48; continue _fun0001 }
case 49:
                    var14 = _closure1_slot6;
                    var11 = var14.getChannel;
                    var14 = var11.bind(var14)(var13);
                    var11 = var4 == var14;
                    if(!var11) { _fun0001_ip = 50; continue _fun0001 }
case 51:
                    var15 = _closure1_slot10;
                    var11 = var6 === var15;
case 50:
                    if(!var11) { _fun0001_ip = 52; continue _fun0001 }
case 53:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var11 = 20;
                    var11 = var16[var11];
                    var15 = var15.bind(var7)(var11);
                    var11 = var15.openChannel;
                    var11 = var11.bind(var15)(var13);
                    SaveGenerator(address=528);
case 54:
                    return var11;
case 55:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=14);
                    var14 = var11;
                    if(var15) { _fun0001_ip = 56; continue _fun0001 }
case 52:
                    var8 = var4 != var14;
                    var12 = var14;
                    _fun0001_ip = 44; continue _fun0001;
case 56:
                    return var11;
case 48:
                    return var9;
case 44:
                    if(!var8) { _fun0001_ip = 57; continue _fun0001 }
case 58:
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 21;
                    var9 = var14[var9];
                    var11 = var11.bind(var7)(var9);
                    var9 = var11.canViewChannel;
                    var9 = var9.bind(var11)(var12);
                    if(var9) { _fun0001_ip = 59; continue _fun0001 }
case 60:
                    var12 = _closure1_slot4;
                    var11 = var12.isChannelGatedAndVisible;
                    var9 = var11.bind(var12)(var6, var13);
case 59:
                    var8 = var9;
case 57:
                    return var8;
case 42:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 17;
                    var8 = var11[var8];
                    var11 = var9.bind(var7)(var8);
                    var9 = var11.isGuildOfficialMessagesEnabled;
                    var8 = 'isAccessibleChannelOrThreadPath';
                    var8 = var9.bind(var11)(var10, var8);
                    return var8;
case 40:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 16;
                    var8 = var11[var8];
                    var11 = var9.bind(var7)(var8);
                    var9 = var11.getGameServerEnabled;
                    var8 = 'isAccessibleChannelOrThreadPath';
                    var8 = var9.bind(var11)(var6, var8);
                    if(!var8) { _fun0001_ip = 61; continue _fun0001 }
case 62:
                    var8 = var4 != var10;
case 61:
                    if(!var8) { _fun0001_ip = 63; continue _fun0001 }
case 64:
                    var12 = var10.features;
                    var11 = var12.has;
                    var9 = _closure1_slot9;
                    var9 = var9.GAME_SERVERS;
                    var8 = var11.bind(var12)(var9);
case 63:
                    return var8;
case 38:
                    var8 = var4 != var10;
                    if(!var8) { _fun0001_ip = 65; continue _fun0001 }
case 66:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = 15;
                    var9 = var12[var9];
                    var9 = var11.bind(var7)(var9);
                    var8 = var9.bind(var7)(var10);
case 65:
                    return var8;
case 36:
                    var8 = true;
                    return var8;
case 34:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 14;
                    var8 = var11[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.canAccessMemberSafetyPage;
                    var8 = var8.bind(var9)(var6);
                    return var8;
case 32:
                    var8 = var4 != var10;
                    if(!var8) { _fun0001_ip = 67; continue _fun0001 }
case 68:
                    var12 = var10.features;
                    var11 = var12.has;
                    var9 = _closure1_slot9;
                    var9 = var9.COMMUNITY;
                    var8 = var11.bind(var12)(var9);
case 67:
                    return var8;
case 30:
                    var9 = _closure1_slot5;
                    var8 = var9.shouldShowOnboarding;
                    var8 = var8.bind(var9)(var6);
                    return var8;
case 28:
                    var8 = var4 != var10;
                    if(!var8) { _fun0001_ip = 69; continue _fun0001 }
case 70:
                    var12 = var10.features;
                    var11 = var12.has;
                    var9 = _closure1_slot9;
                    var9 = var9.COMMUNITY;
                    var8 = var11.bind(var12)(var9);
case 69:
                    return var8;
case 26:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 13;
                    var8 = var11[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.canSeeOnboardingHome;
                    var8 = var8.bind(var9)(var6);
                    return var8;
case 24:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 12;
                    var8 = var11[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.canReviewGuildMemberApplications;
                    var8 = var8.bind(var9)(var6);
                    return var8;
case 22:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 11;
                    var8 = var11[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.isGuildShopVisibleInGuild;
                    var8 = var8.bind(var9)(var10, var5);
                    return var8;
case 20:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 10;
                    var8 = var11[var8];
                    var11 = var9.bind(var7)(var8);
                    var9 = var11.hasSocialLayerStorefront;
                    var8 = var10;
                    if(!(var4 == var8)) { _fun0001_ip = 71; continue _fun0001 }
case 72:
                    var12 = {};
                    var12['id'] = var6;
                    var13 = 'id-only';
                    var12['type'] = var13;
                    var8 = var12;
case 71:
                    var8 = var9.bind(var11)(var8);
                    return var8;
case 18:
                    var4 = var4 != var10;
                    if(!var4) { _fun0001_ip = 73; continue _fun0001 }
case 74:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 9;
                    var8 = var11[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.canUserSeeMonetizationOnboarding;
                    var4 = var8.bind(var9)(var10);
case 73:
                    return var4;
case 16:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var3 = var8[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.areRoleSubscriptionsVisibleInGuild;
                    var3 = var3.bind(var4)(var6, var5);
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
    var4 = 22;
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