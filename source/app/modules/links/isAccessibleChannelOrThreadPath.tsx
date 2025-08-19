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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 833; continue _fun0001 }
 13:
                    var6 = var2.guildId;
                    var13 = var2.channelId;
                    var7 = undefined;
                    SaveGenerator(address=29);
 27:
                    return var7;
 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 830; continue _fun0001 }
 38:
                    var5 = _closure1_slot8;
                    var4 = var5.getGuild;
                    var10 = var4.bind(var5)(var6);
                    var5 = _closure1_slot7;
                    var4 = var5.getUnsafeMutableRoles;
                    var5 = var4.bind(var5)(var6);
                    var4 = null;
                    if(!(var4 == var10)) { _fun0001_ip = 87; continue _fun0001 }
 76:
                    var8 = _closure1_slot10;
                    if(!(var6 === var8)) { _fun0001_ip = 825; continue _fun0001 }
 87:
                    if(!(var4 != var13)) { _fun0001_ip = 820; continue _fun0001 }
 94:
                    var8 = _closure1_slot11;
                    var8 = var8.bind(var7)(var13);
                    if(!var8) { _fun0001_ip = 327; continue _fun0001 }
 109:
                    var8 = _closure1_slot12;
                    var8 = var8.ROLE_SUBSCRIPTIONS;
                    if(!(var8 !== var13)) { _fun0001_ip = 785; continue _fun0001 }
 126:
                    var8 = _closure1_slot12;
                    var8 = var8.SERVER_MONETIZATION_ONBOARDING;
                    if(!(var8 !== var13)) { _fun0001_ip = 744; continue _fun0001 }
 143:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_SHOP;
                    if(!(var8 !== var13)) { _fun0001_ip = 709; continue _fun0001 }
 160:
                    var8 = _closure1_slot12;
                    var8 = var8.MEMBER_APPLICATIONS;
                    if(!(var8 !== var13)) { _fun0001_ip = 675; continue _fun0001 }
 177:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_HOME;
                    if(!(var8 !== var13)) { _fun0001_ip = 641; continue _fun0001 }
 194:
                    var8 = _closure1_slot12;
                    var8 = var8.CHANNEL_BROWSER;
                    if(!(var8 !== var13)) { _fun0001_ip = 605; continue _fun0001 }
 211:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_ONBOARDING;
                    if(!(var8 !== var13)) { _fun0001_ip = 587; continue _fun0001 }
 228:
                    var8 = _closure1_slot12;
                    var8 = var8.CUSTOMIZE_COMMUNITY;
                    if(!(var8 !== var13)) { _fun0001_ip = 551; continue _fun0001 }
 245:
                    var8 = _closure1_slot12;
                    var8 = var8.MEMBER_SAFETY;
                    if(!(var8 !== var13)) { _fun0001_ip = 517; continue _fun0001 }
 262:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_BOOSTS;
                    if(!(var8 !== var13)) { _fun0001_ip = 512; continue _fun0001 }
 279:
                    var8 = _closure1_slot12;
                    var8 = var8.REPORT_TO_MOD;
                    if(!(var8 !== var13)) { _fun0001_ip = 477; continue _fun0001 }
 296:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 15;
                    var8 = var11[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.assertNever;
                    var8 = var8.bind(var9)(var13);
 327:
                    var9 = _closure1_slot6;
                    var8 = var9.getChannel;
                    var9 = var8.bind(var9)(var13);
                    var8 = var4 != var9;
                    var12 = var9;
                    if(var8) { _fun0001_ip = 418; continue _fun0001 }
 351:
                    var11 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var9 = 16;
                    var9 = var14[var9];
                    var11 = var11.bind(var7)(var9);
                    var9 = var11.loadThread;
                    var9 = var9.bind(var11)(var13);
                    SaveGenerator(address=386);
 384:
                    return var9;
 386:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 415; continue _fun0001 }
 392:
                    var14 = _closure1_slot6;
                    var11 = var14.getChannel;
                    var11 = var11.bind(var14)(var13);
                    var8 = var4 != var11;
                    var12 = var11;
                    _fun0001_ip = 418; continue _fun0001;
 415:
                    return var9;
 418:
                    if(!var8) { _fun0001_ip = 474; continue _fun0001 }
 421:
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 17;
                    var9 = var14[var9];
                    var11 = var11.bind(var7)(var9);
                    var9 = var11.canViewChannel;
                    var9 = var9.bind(var11)(var12);
                    if(var9) { _fun0001_ip = 471; continue _fun0001 }
 455:
                    var12 = _closure1_slot4;
                    var11 = var12.isChannelGatedAndVisible;
                    var9 = var11.bind(var12)(var6, var13);
 471:
                    var8 = var9;
 474:
                    return var8;
 477:
                    var8 = var4 != var10;
                    if(!var8) { _fun0001_ip = 509; continue _fun0001 }
 484:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = 14;
                    var9 = var12[var9];
                    var9 = var11.bind(var7)(var9);
                    var8 = var9.bind(var7)(var10);
 509:
                    return var8;
 512:
                    var8 = true;
                    return var8;
 517:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 13;
                    var8 = var11[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.canAccessMemberSafetyPage;
                    var8 = var8.bind(var9)(var6);
                    return var8;
 551:
                    var8 = var4 != var10;
                    if(!var8) { _fun0001_ip = 584; continue _fun0001 }
 558:
                    var12 = var10.features;
                    var11 = var12.has;
                    var9 = _closure1_slot9;
                    var9 = var9.COMMUNITY;
                    var8 = var11.bind(var12)(var9);
 584:
                    return var8;
 587:
                    var9 = _closure1_slot5;
                    var8 = var9.shouldShowOnboarding;
                    var8 = var8.bind(var9)(var6);
                    return var8;
 605:
                    var8 = var4 != var10;
                    if(!var8) { _fun0001_ip = 638; continue _fun0001 }
 612:
                    var12 = var10.features;
                    var11 = var12.has;
                    var9 = _closure1_slot9;
                    var9 = var9.COMMUNITY;
                    var8 = var11.bind(var12)(var9);
 638:
                    return var8;
 641:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 12;
                    var8 = var11[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.canSeeOnboardingHome;
                    var8 = var8.bind(var9)(var6);
                    return var8;
 675:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 11;
                    var8 = var11[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.canReviewGuildMemberApplications;
                    var8 = var8.bind(var9)(var6);
                    return var8;
 709:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 10;
                    var8 = var11[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.isGuildShopVisibleInGuild;
                    var8 = var8.bind(var9)(var10, var5);
                    return var8;
 744:
                    var4 = var4 != var10;
                    if(!var4) { _fun0001_ip = 782; continue _fun0001 }
 751:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 9;
                    var8 = var11[var8];
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.canUserSeeMonetizationOnboarding;
                    var4 = var8.bind(var9)(var10);
 782:
                    return var4;
 785:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var3 = var8[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.areRoleSubscriptionsVisibleInGuild;
                    var3 = var3.bind(var4)(var6, var5);
                    return var3;
 820:
                    var3 = true;
                    return var3;
 825:
                    var3 = false;
                    return var3;
 830:
                    return var2;
 833:
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
    var4 = 18;
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