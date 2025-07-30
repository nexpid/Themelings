// app/modules/links/isAccessibleChannelOrThreadPath.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
                    if(var3) { _fun0001_ip = 775; continue _fun0001 }
 13:
                    var6 = var2.guildId;
                    var13 = var2.channelId;
                    var7 = undefined;
                    SaveGenerator(address=29);
 27:
                    return var7;
 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 772; continue _fun0001 }
 38:
                    var5 = _closure1_slot8;
                    var4 = var5.getGuild;
                    var9 = var4.bind(var5)(var6);
                    var5 = _closure1_slot7;
                    var4 = var5.getUnsafeMutableRoles;
                    var5 = var4.bind(var5)(var6);
                    var4 = null;
                    if(!(var4 == var9)) { _fun0001_ip = 87; continue _fun0001 }
 76:
                    var8 = _closure1_slot10;
                    if(!(var6 === var8)) { _fun0001_ip = 767; continue _fun0001 }
 87:
                    if(!(var4 != var13)) { _fun0001_ip = 762; continue _fun0001 }
 94:
                    var8 = _closure1_slot11;
                    var8 = var8.bind(var7)(var13);
                    if(!var8) { _fun0001_ip = 310; continue _fun0001 }
 109:
                    var8 = _closure1_slot12;
                    var8 = var8.ROLE_SUBSCRIPTIONS;
                    if(!(var8 !== var13)) { _fun0001_ip = 727; continue _fun0001 }
 126:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_SHOP;
                    if(!(var8 !== var13)) { _fun0001_ip = 692; continue _fun0001 }
 143:
                    var8 = _closure1_slot12;
                    var8 = var8.MEMBER_APPLICATIONS;
                    if(!(var8 !== var13)) { _fun0001_ip = 658; continue _fun0001 }
 160:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_HOME;
                    if(!(var8 !== var13)) { _fun0001_ip = 624; continue _fun0001 }
 177:
                    var8 = _closure1_slot12;
                    var8 = var8.CHANNEL_BROWSER;
                    if(!(var8 !== var13)) { _fun0001_ip = 588; continue _fun0001 }
 194:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_ONBOARDING;
                    if(!(var8 !== var13)) { _fun0001_ip = 570; continue _fun0001 }
 211:
                    var8 = _closure1_slot12;
                    var8 = var8.CUSTOMIZE_COMMUNITY;
                    if(!(var8 !== var13)) { _fun0001_ip = 534; continue _fun0001 }
 228:
                    var8 = _closure1_slot12;
                    var8 = var8.MEMBER_SAFETY;
                    if(!(var8 !== var13)) { _fun0001_ip = 500; continue _fun0001 }
 245:
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_BOOSTS;
                    if(!(var8 !== var13)) { _fun0001_ip = 495; continue _fun0001 }
 262:
                    var8 = _closure1_slot12;
                    var8 = var8.REPORT_TO_MOD;
                    if(!(var8 !== var13)) { _fun0001_ip = 460; continue _fun0001 }
 279:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 14;
                    var8 = var11[var8];
                    var10 = var10.bind(var7)(var8);
                    var8 = var10.assertNever;
                    var8 = var8.bind(var10)(var13);
 310:
                    var10 = _closure1_slot6;
                    var8 = var10.getChannel;
                    var10 = var8.bind(var10)(var13);
                    var8 = var4 != var10;
                    var12 = var10;
                    if(var8) { _fun0001_ip = 401; continue _fun0001 }
 334:
                    var11 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var10 = 15;
                    var10 = var14[var10];
                    var11 = var11.bind(var7)(var10);
                    var10 = var11.loadThread;
                    var10 = var10.bind(var11)(var13);
                    SaveGenerator(address=369);
 367:
                    return var10;
 369:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 398; continue _fun0001 }
 375:
                    var14 = _closure1_slot6;
                    var11 = var14.getChannel;
                    var11 = var11.bind(var14)(var13);
                    var8 = var4 != var11;
                    var12 = var11;
                    _fun0001_ip = 401; continue _fun0001;
 398:
                    return var10;
 401:
                    if(!var8) { _fun0001_ip = 457; continue _fun0001 }
 404:
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 16;
                    var10 = var14[var10];
                    var11 = var11.bind(var7)(var10);
                    var10 = var11.canViewChannel;
                    var10 = var10.bind(var11)(var12);
                    if(var10) { _fun0001_ip = 454; continue _fun0001 }
 438:
                    var12 = _closure1_slot4;
                    var11 = var12.isChannelGatedAndVisible;
                    var10 = var11.bind(var12)(var6, var13);
 454:
                    var8 = var10;
 457:
                    return var8;
 460:
                    var8 = var4 != var9;
                    if(!var8) { _fun0001_ip = 492; continue _fun0001 }
 467:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 13;
                    var10 = var12[var10];
                    var10 = var11.bind(var7)(var10);
                    var8 = var10.bind(var7)(var9);
 492:
                    return var8;
 495:
                    var8 = true;
                    return var8;
 500:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 12;
                    var8 = var11[var8];
                    var10 = var10.bind(var7)(var8);
                    var8 = var10.canAccessMemberSafetyPage;
                    var8 = var8.bind(var10)(var6);
                    return var8;
 534:
                    var8 = var4 != var9;
                    if(!var8) { _fun0001_ip = 567; continue _fun0001 }
 541:
                    var12 = var9.features;
                    var11 = var12.has;
                    var10 = _closure1_slot9;
                    var10 = var10.COMMUNITY;
                    var8 = var11.bind(var12)(var10);
 567:
                    return var8;
 570:
                    var10 = _closure1_slot5;
                    var8 = var10.shouldShowOnboarding;
                    var8 = var8.bind(var10)(var6);
                    return var8;
 588:
                    var4 = var4 != var9;
                    if(!var4) { _fun0001_ip = 621; continue _fun0001 }
 595:
                    var11 = var9.features;
                    var10 = var11.has;
                    var8 = _closure1_slot9;
                    var8 = var8.COMMUNITY;
                    var4 = var10.bind(var11)(var8);
 621:
                    return var4;
 624:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 11;
                    var4 = var10[var4];
                    var8 = var8.bind(var7)(var4);
                    var4 = var8.canSeeOnboardingHome;
                    var4 = var4.bind(var8)(var6);
                    return var4;
 658:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 10;
                    var4 = var10[var4];
                    var8 = var8.bind(var7)(var4);
                    var4 = var8.canReviewGuildMemberApplications;
                    var4 = var4.bind(var8)(var6);
                    return var4;
 692:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 9;
                    var4 = var10[var4];
                    var8 = var8.bind(var7)(var4);
                    var4 = var8.isGuildShopVisibleInGuild;
                    var4 = var4.bind(var8)(var9, var5);
                    return var4;
 727:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var3 = var8[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.areRoleSubscriptionsVisibleInGuild;
                    var3 = var3.bind(var4)(var6, var5);
                    return var3;
 762:
                    var3 = true;
                    return var3;
 767:
                    var3 = false;
                    return var3;
 772:
                    return var2;
 775:
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
    var4 = 17;
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