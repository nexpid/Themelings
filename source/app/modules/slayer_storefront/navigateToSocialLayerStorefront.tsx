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
                    var12 = var2.guildId;
                    var8 = var2.invite;
                    var11 = var2.pageIndex;
                    var10 = var2.skuId;
                    var9 = var2.slug;
                    var4 = undefined;
                    SaveGenerator(address=47);
case 4:
                    return var4;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = null;
                    var5 = var3 != var8;
                    var13 = null;
                    if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = var8.guild;
                    var7 = var3 == var5;
                    var6 = undefined;
                    if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var6 = var5.id;
case 10:
                    var5 = global;
                    var14 = var5.Set;
                    var7 = var8.guild;
                    var15 = var3 == var7;
                    var5 = undefined;
                    if(var15) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = var7.features;
case 12:
                    var7 = var14.prototype;
                    var7 = Object.create(var7, {constructor: {value: var14}});
                    var20 = var7;
                    var19 = var5;
                    var5 = new var20[var14](var19, var18);
                    var13 = var5 instanceof Object ? var5 : var7;
                    var12 = var6;
case 8:
                    if(!(var3 != var12)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var7 = _closure1_slot4;
                    var6 = var7.getGuild;
                    var7 = var6.bind(var7)(var12);
                    var14 = var3 == var7;
                    var6 = undefined;
                    if(var14) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var6 = var7.joinedAt;
case 16:
                    if(!(var3 == var6)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    if(!(var3 != var13)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var7 = var13.has;
                    var6 = _closure1_slot5;
                    var6 = var6.PREVIEW_ENABLED;
                    var6 = var7.bind(var13)(var6);
                    if(var6) { _fun0001_ip = 20; continue _fun0001 }
case 22:
                    if(!(var3 != var8)) { _fun0001_ip = 18; continue _fun0001 }
case 23:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 5;
                    var3 = var7[var3];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.acceptInvite;
                    var3 = {};
                    var8 = var8.code;
                    var3['inviteKey'] = var8;
                    var8 = {};
                    var13 = 'game_shop';
                    var8['location'] = var13;
                    var3['context'] = var8;
                    var8 = true;
                    var3['skipOnboarding'] = var8;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=290);
case 24:
                    return var3;
case 25:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 26:
                    return var3;
case 20:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var8 = var6.bind(var4)(var3);
                    var7 = var8.startLurking;
                    var6 = {};
                    var3 = false;
                    var6['shouldNavigate'] = var3;
                    var3 = {};
                    var3 = var7.bind(var8)(var12, var3, var6);
                    SaveGenerator(address=347);
case 27:
                    return var3;
case 28:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 29; continue _fun0001 }
case 18:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 6;
                    var6 = var8[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.transitionTo;
                    var8 = _closure1_slot6;
                    var5 = var8.CHANNELS_GAME_SHOP;
                    var20 = var8;
                    var19 = var12;
                    var18 = var11;
                    var17 = var10;
                    var16 = var9;
                    var5 = var20[var5](var19, var18, var17, var16, var15);
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
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var7 = var4.GuildFeatures;
    var _closure1_slot5 = var7;
    var4 = var4.Routes;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/navigateToSocialLayerStorefront.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function navigateToSocialLayerStorefront() {
        var1 = undefined;
        var4 = _closure1_slot7;
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
            if(!(var1 != var2)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var3 = var2.guild;
            var6 = var1 == var3;
            var2 = undefined;
            if(var6) { _fun0002_ip = 4; continue _fun0002 }
case 32:
            var2 = var3.id;
case 4:
            var4 = var2;
case 30:
            if(!(var1 != var4)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchSocialLayerStorefront;
            var1 = {};
            var6 = true;
            var1['eager'] = var6;
            var1['forceFetch'] = var5;
            var1 = var2.bind(var3)(var4, var1);
case 33:
            var1 = undefined;
            return var1;
        }
    };
    var3['eagerNavigateToSocialLayerStorefront'] = var2;
    return var1;
})();