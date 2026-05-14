// app/modules/slayer_storefront/navigateToSocialLayerStorefront.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _navigateToSocialLayerStorefront() {
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
                    var7 = var2.getSocialLayerStorefrontLink;
                    var14 = var2.guildId;
                    var13 = var2.invite;
                    var12 = var2.pageIndex;
                    var11 = var2.skuId;
                    var10 = var2.slug;
                    var4 = undefined;
                    SaveGenerator(address=55);
case 4:
                    return var4;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = null;
                    var3 = var6 != var13;
                    var9 = null;
                    if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var3 = var13.guild;
                    var8 = var6 == var3;
                    var5 = undefined;
                    if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var5 = var3.id;
case 10:
                    var3 = global;
                    var15 = var3.Set;
                    var8 = var13.guild;
                    var16 = var6 == var8;
                    var3 = undefined;
                    if(var16) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var3 = var8.features;
case 12:
                    var8 = var15.prototype;
                    var8 = Object.create(var8, {constructor: {value: var15}});
                    var21 = var8;
                    var20 = var3;
                    var3 = new var21[var15](var20, var19);
                    var9 = var3 instanceof Object ? var3 : var8;
                    var14 = var5;
case 8:
                    if(!(var6 != var14)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var8 = _closure1_slot4;
                    var3 = var8.getGuild;
                    var8 = var3.bind(var8)(var14);
                    var15 = var6 == var8;
                    var3 = undefined;
                    if(var15) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var3 = var8.joinedAt;
case 16:
                    if(!(var6 == var3)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    if(!(var6 != var9)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var8 = var9.has;
                    var3 = _closure1_slot6;
                    var3 = var3.PREVIEW_ENABLED;
                    var3 = var8.bind(var9)(var3);
                    if(var3) { _fun0001_ip = 20; continue _fun0001 }
case 22:
                    if(!(var6 != var13)) { _fun0001_ip = 18; continue _fun0001 }
case 23:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 6;
                    var3 = var9[var3];
                    var9 = var8.bind(var4)(var3);
                    var8 = var9.acceptInvite;
                    var3 = {};
                    var13 = var13.code;
                    var3['inviteKey'] = var13;
                    var13 = {};
                    var15 = 'game_shop';
                    var13['location'] = var15;
                    var3['context'] = var13;
                    var13 = true;
                    var3['skipOnboarding'] = var13;
                    var3 = var8.bind(var9)(var3);
                    SaveGenerator(address=299);
case 24:
                    return var3;
case 25:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(!var8) { _fun0001_ip = 18; continue _fun0001 }
case 26:
                    return var3;
case 20:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 5;
                    var3 = var9[var3];
                    var13 = var8.bind(var4)(var3);
                    var9 = var13.startLurking;
                    var8 = {};
                    var3 = false;
                    var8['shouldNavigate'] = var3;
                    var3 = {};
                    var3 = var9.bind(var13)(var14, var3, var8);
                    SaveGenerator(address=356);
case 27:
                    return var3;
case 28:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 29; continue _fun0001 }
case 18:
                    var8 = var6 == var7;
                    var9 = undefined;
                    if(var8) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var9 = var7.bind(var4)(var12, var11, var10);
case 30:
                    if(!(var6 != var9)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var8 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 7;
                    var7 = var13[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = var8.transitionTo;
                    var7 = var7.bind(var8)(var9);
                    _fun0001_ip = 14; continue _fun0001;
case 32:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 8;
                    var7 = var9[var7];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.getIsSocialLayerStorefrontShopShimEnabled;
                    var7 = {};
                    var13 = 'navigateToSocialLayerStorefront';
                    var7['location'] = var13;
                    var7 = var8.bind(var9)(var7);
                    var9 = _closure1_slot5;
                    var8 = var9.getApplicationIdFromGuildId;
                    var9 = var8.bind(var9)(var14);
                    if(!var7) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    if(!(var6 == var9)) { _fun0001_ip = 36; continue _fun0001 }
case 34:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 7;
                    var6 = var8[var6];
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.transitionTo;
                    var13 = _closure1_slot7;
                    var6 = var13.CHANNELS_GAME_SHOP;
                    var21 = var13;
                    var20 = var14;
                    var19 = var12;
                    var18 = var11;
                    var17 = var10;
                    var6 = var21[var6](var20, var19, var18, var17, var16);
                    var6 = var7.bind(var8)(var6);
                    _fun0001_ip = 14; continue _fun0001;
case 36:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 7;
                    var6 = var8[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.transitionTo;
                    var8 = _closure1_slot7;
                    var5 = var8.COLLECTIBLES_SHOP_GAME_SHOP;
                    var21 = var8;
                    var20 = var9;
                    var19 = var12;
                    var18 = var11;
                    var17 = var10;
                    var5 = var21[var5](var20, var19, var18, var17, var16);
                    var5 = var6.bind(var7)(var5);
case 14:
                    return var4;
case 29:
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
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot6 = var7;
    var4 = var4.Routes;
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/navigateToSocialLayerStorefront.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function navigateToSocialLayerStorefront() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var2 = function eagerNavigateToSocialLayerStorefront(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var2 = var1.invite;
            var5 = var1.forceFetch;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var3 = var2.guild;
            var6 = var1 == var3;
            var2 = undefined;
            if(var6) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var2 = var3.id;
case 39:
            var4 = var2;
case 37:
            if(!(var1 != var4)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchSocialLayerStorefront;
            var1 = {};
            var6 = true;
            var1['eager'] = var6;
            var1['forceFetch'] = var5;
            var1 = var2.bind(var3)(var4, var1);
case 41:
            var1 = undefined;
            return var1;
        }
    };
    var3['eagerNavigateToSocialLayerStorefront'] = var2;
    return var1;
})();