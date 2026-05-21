// app/modules/slayer_storefront/navigateToSocialLayerStorefront.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function navigateToSocialLayerStorefrontWithGuildPreview() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var2;
    var1 = function _navigateToSocialLayerStorefrontWithGuildPreview() {
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
                    var11 = var2.guildId;
                    var12 = var2.invite;
                    var10 = var2.pageIndex;
                    var9 = var2.skuId;
                    var8 = var2.slug;
                    var7 = undefined;
                    SaveGenerator(address=47);
case 4:
                    return var7;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = null;
                    var4 = var3 != var12;
                    var13 = null;
                    if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = var12.guild;
                    var6 = var3 == var4;
                    var5 = undefined;
                    if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var5 = var4.id;
case 10:
                    var4 = global;
                    var14 = var4.Set;
                    var6 = var12.guild;
                    var15 = var3 == var6;
                    var4 = undefined;
                    if(var15) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var4 = var6.features;
case 12:
                    var6 = var14.prototype;
                    var6 = Object.create(var6, {constructor: {value: var14}});
                    var20 = var6;
                    var19 = var4;
                    var4 = new var20[var14](var19, var18);
                    var13 = var4 instanceof Object ? var4 : var6;
                    var11 = var5;
case 8:
                    if(!(var3 == var11)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    return var7;
case 14:
                    var6 = _closure1_slot4;
                    var5 = var6.getGuild;
                    var6 = var5.bind(var6)(var11);
                    var14 = var3 == var6;
                    var5 = undefined;
                    if(var14) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var5 = var6.joinedAt;
case 16:
                    if(!(var3 == var5)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    if(!(var3 != var13)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var6 = var13.has;
                    var5 = _closure1_slot6;
                    var5 = var5.PREVIEW_ENABLED;
                    var5 = var6.bind(var13)(var5);
                    if(var5) { _fun0001_ip = 20; continue _fun0001 }
case 22:
                    if(!(var3 != var12)) { _fun0001_ip = 18; continue _fun0001 }
case 23:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 8;
                    var3 = var6[var3];
                    var6 = var5.bind(var7)(var3);
                    var5 = var6.acceptInvite;
                    var3 = {};
                    var12 = var12.code;
                    var3['inviteKey'] = var12;
                    var12 = {};
                    var13 = 'game_shop';
                    var12['location'] = var13;
                    var3['context'] = var12;
                    var12 = true;
                    var3['skipOnboarding'] = var12;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=291);
case 24:
                    return var3;
case 25:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(!var5) { _fun0001_ip = 18; continue _fun0001 }
case 26:
                    return var3;
case 20:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 7;
                    var3 = var6[var3];
                    var12 = var5.bind(var7)(var3);
                    var6 = var12.startLurking;
                    var5 = {};
                    var3 = false;
                    var5['shouldNavigate'] = var3;
                    var3 = {};
                    var3 = var6.bind(var12)(var11, var3, var5);
                    SaveGenerator(address=348);
case 27:
                    return var3;
case 28:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 29; continue _fun0001 }
case 18:
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 6;
                    var5 = var12[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.transitionTo;
                    var7 = _closure1_slot7;
                    var4 = var7.CHANNELS_GAME_SHOP;
                    var20 = var7;
                    var19 = var11;
                    var18 = var10;
                    var17 = var9;
                    var16 = var8;
                    var4 = var20[var4](var19, var18, var17, var16, var15);
                    var4 = var5.bind(var6)(var4);
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
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.GuildFeatures;
    var _closure1_slot6 = var8;
    var5 = var5.Routes;
    var _closure1_slot7 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/slayer_storefront/navigateToSocialLayerStorefront.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function navigateToSocialLayerStorefront(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var11 = var1.pageIndex;
            var4 = var1.invite;
            var10 = var1.skuId;
            var9 = var1.slug;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var7 = undefined;
            var6 = var3.bind(var7)(var1);
            var3 = var6.getIsSocialLayerStorefrontShopShimEnabled;
            var1 = {};
            var8 = 'navigateToSocialLayerStorefront';
            var1['location'] = var8;
            var3 = var3.bind(var6)(var1);
            var1 = null;
            var6 = var1 == var5;
            var8 = undefined;
            if(var6) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var12 = _closure1_slot5;
            var6 = var12.getApplicationIdFromGuildId;
            var8 = var6.bind(var12)(var5);
case 30:
            if(!var3) { _fun0002_ip = 32; continue _fun0002 }
case 13:
            if(!(var1 == var8)) { _fun0002_ip = 33; continue _fun0002 }
case 32:
            var3 = _closure1_slot8;
            var1 = {};
            var1['guildId'] = var5;
            var1['pageIndex'] = var11;
            var1['invite'] = var4;
            var1['skuId'] = var10;
            var1['slug'] = var9;
            var1 = var3.bind(var7)(var1);
            _fun0002_ip = 34; continue _fun0002;
case 33:
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.resolve;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 6;
            var5 = var12[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.transitionTo;
            var7 = _closure1_slot7;
            var2 = var7.COLLECTIBLES_SHOP_GAME_SHOP;
            var17 = var7;
            var16 = var8;
            var15 = var11;
            var14 = var10;
            var13 = var9;
            var2 = var17[var2](var16, var15, var14, var13, var12);
            var2 = var5.bind(var6)(var2);
            var1 = var3.bind(var4)(var2);
case 34:
            return var1;
        }
    };
    var3['default'] = var5;
    var4 = function eagerNavigateToSocialLayerStorefront(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var2 = var1.invite;
            var5 = var1.forceFetch;
            var1 = null;
            if(!(var1 != var2)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var3 = var2.guild;
            var6 = var1 == var3;
            var2 = undefined;
            if(var6) { _fun0003_ip = 4; continue _fun0003 }
case 37:
            var2 = var3.id;
case 4:
            var4 = var2;
case 35:
            if(!(var1 != var4)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
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
case 38:
            var1 = undefined;
            return var1;
        }
    };
    var3['eagerNavigateToSocialLayerStorefront'] = var4;
    var3['navigateToSocialLayerStorefrontWithGuildPreview'] = var2;
    return var1;
})();