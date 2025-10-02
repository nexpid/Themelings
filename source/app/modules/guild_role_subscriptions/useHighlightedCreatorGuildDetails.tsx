// app/modules/guild_role_subscriptions/useHighlightedCreatorGuildDetails.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MarketingURLs;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useHighlightedCreatorGuildDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHighlightedCreatorGuildDetails(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var15 = arg1;
            var12 = arg2;
            var _closure2_slot0 = var12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var1 = var3[var1];
            var13 = undefined;
            var1 = var2.bind(var13)(var1);
            var2 = var1.bind(var13)(var15);
            var11 = var2.isLoading;
            var1 = var2.error;
            var7 = var2.highlightedCreatorDetails;
            var2 = null;
            var5 = var2 == var7;
            var3 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var7.store_page;
case 2:
            var _closure2_slot1 = var3;
            var10 = _closure1_slot2;
            var9 = var10.useMemo;
            var8 = var2 == var3;
            var5 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var3.role_subscription;
case 4:
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    var4 = var3 == var1;
                    var1 = undefined;
                    var6 = undefined;
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure2_slot1;
                    var4 = var4.role_subscription;
                    var7 = var3 == var4;
                    var6 = undefined;
                    if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var6 = var4.group_listings;
case 6:
                    var4 = function getSubscriptionRoleIds(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var4 = arg1;
                            var1 = global;
                            var1 = var1.Set;
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {constructor: {value: var1}});
                            var6 = var3;
                            var1 = new var6[var1](var5);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var _closure4_slot0 = var1;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    var1 = arg1;
                                    var3 = var1.subscription_listings;
                                    var1 = null;
                                    if(!(var1 != var3)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                                    var2 = var3.forEach;
                                    var1 = function(arg1) {
                                        var3 = _closure4_slot0;
                                        var2 = var3.add;
                                        var1 = arg1;
                                        var1 = var1.role_id;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = undefined;
                                        return var1;
                                    };
                                    var1 = var2.bind(var3)(var1);
case 11:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
case 9:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var1)(var6);
                    var _closure3_slot0 = var4;
                    var4 = _closure2_slot1;
                    var6 = var3 == var4;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 13; continue _fun0002 }
case 2:
                    var5 = _closure2_slot1;
                    var5 = var5.role_subscription;
                    var6 = var3 == var5;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var4 = var5.benefit_emojis;
case 13:
                    var3 = var3 == var4;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.roles;
                        var2 = var3.some;
                        var1 = function(arg1) {
                            var3 = _closure3_slot0;
                            var2 = var3.has;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 15:
                    return var1;
                }
            };
            var10 = var9.bind(var10)(var5, var8);
            var _closure2_slot2 = var10;
            var5 = var2 == var3;
            var9 = undefined;
            if(var5) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5 = var3.guild;
            var9 = var5.icon_hash;
case 17:
            var8 = _closure1_slot0;
            var14 = _closure1_slot1;
            var5 = 3;
            var5 = var14[var5];
            var14 = var8.bind(var13)(var5);
            var8 = var14.getGuildIconURL;
            var5 = {};
            var5['id'] = var15;
            var5['icon'] = var9;
            var15 = arg3;
            var5['size'] = var15;
            var8 = var8.bind(var14)(var5);
            var15 = _closure1_slot2;
            var14 = var15.useMemo;
            var5 = new Array(2);
            var5[0] = var10;
            var5[1] = var12;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var1 = _closure2_slot2;
                    var3 = var1.length;
                    var1 = _closure2_slot0;
                    if(!(!(var3 > var1))) { _fun0005_ip = 21; continue _fun0005 }
case 19:
                    var1 = _closure2_slot2;
                    _fun0005_ip = 22; continue _fun0005;
case 21:
                    var5 = _closure2_slot2;
                    var4 = var5.slice;
                    var3 = _closure2_slot0;
                    var2 = 0;
                    var1 = var4.bind(var5)(var2, var3);
case 22:
                    return var1;
                }
            };
            var5 = var14.bind(var15)(var4, var5);
            var14 = var2 != var10;
            var4 = null;
            if(!var14) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var14 = var10.length;
            var14 = var14 > var12;
            var4 = null;
            if(!var14) { _fun0001_ip = 23; continue _fun0001 }
case 25:
            var10 = var10.length;
            var4 = var10 - var12;
case 23:
            var10 = var2 == var7;
            var12 = undefined;
            if(var10) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var12 = var7.slug;
case 26:
            var10 = var2 != var12;
            var7 = undefined;
            if(!var10) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var10 = _closure1_slot3;
            var6 = var10.ROLE_SUBSCRIPTION_STORE_PAGE;
            var7 = var6.bind(var10)(var12);
case 28:
            var6 = var2 == var3;
            var10 = undefined;
            if(var6) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var6 = var3.guild;
            var12 = var2 == var6;
            var10 = undefined;
            if(var12) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            var10 = var6.name;
case 30:
            var12 = var2 == var3;
            var6 = undefined;
            if(var12) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var3 = var3.role_subscription;
            var12 = var2 == var3;
            var6 = undefined;
            if(var12) { _fun0001_ip = 33; continue _fun0001 }
case 35:
            var6 = var3.subscriber_count;
case 33:
            var3 = !var11;
            if(!var3) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var3 = var2 != var10;
case 36:
            if(!var3) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var3 = var2 != var9;
case 38:
            if(!var3) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var3 = var2 != var8;
case 40:
            var2 = {};
            var2['hasAllImperativeDetails'] = var3;
            var2['isLoading'] = var11;
            if(var3) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var2['error'] = var1;
            var1 = var2;
            _fun0001_ip = 44; continue _fun0001;
case 42:
            var3 = {};
            var3['guildName'] = var10;
            var3['guildIcon'] = var9;
            var3['guildAvatarUrl'] = var8;
            var3['storePageUrl'] = var7;
            var3['subscriberCount'] = var6;
            var3['emojisToShow'] = var5;
            var3['notShownEmojiCount'] = var4;
            var2['details'] = var3;
            var1 = var2;
case 44:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();