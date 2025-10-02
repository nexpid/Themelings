// app/modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackRoleSubscriptionUpsellAnalytics(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.guildId;
            var _closure2_slot0 = var12;
            var11 = var1.groupListingId;
            var _closure2_slot1 = var11;
            var9 = var1.location;
            var _closure2_slot2 = var9;
            var4 = var1.relevantSubscriptionListingIds;
            var _closure2_slot3 = var4;
            var1 = undefined;
            var _closure2_slot7 = var1;
            var _closure2_slot8 = var1;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 3;
            var5 = var14[var5];
            var7 = var13.bind(var1)(var5);
            var6 = var7.useGroupListingsFetchContext;
            var5 = 'useTrackRoleSubscriptionUpsellAnalytics';
            var10 = var6.bind(var7)(var5);
            var _closure2_slot4 = var10;
            var5 = _closure1_slot1;
            var6 = 4;
            var6 = var14[var6];
            var6 = var5.bind(var1)(var6);
            var6 = var6.bind(var1)(var11);
            var7 = var6.activeSubscription;
            var6 = null;
            var7 = var6 != var7;
            var _closure2_slot5 = var7;
            var8 = 5;
            var8 = var14[var8];
            var17 = var13.bind(var1)(var8);
            var16 = var17.useStateFromStoresArray;
            var8 = _closure1_slot4;
            var15 = new Array(1);
            var15[0] = var8;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = new Array(0);
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var3 = _closure2_slot3;
case 4:
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure1_slot4;
                            var2 = var3.getSubscriptionListing;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            var2 = null;
                            var3 = var2 == var1;
                            var2 = undefined;
                            if(var3) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                            var2 = var1.published;
case 5:
                            var1 = true;
                            var1 = var1 === var2;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var8 = var16.bind(var17)(var15, var4, var8);
            var _closure2_slot6 = var8;
            var4 = 6;
            var4 = var14[var4];
            var5 = var5.bind(var1)(var4);
            var4 = 7;
            var4 = var14[var4];
            var13 = var13.bind(var1)(var4);
            var4 = var13.getLastRouteChangeSourceLocationStack;
            var4 = var4.bind(var13)();
            if(!(var6 == var4)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = new Array(0);
case 7:
            var4 = var5.bind(var1)(var4);
            var6 = var4.analyticsLocations;
            _closure2_slot7 = var6;
            var5 = _closure1_slot3;
            var4 = var5.useRef;
            var3 = false;
            var3 = var4.bind(var5)(var3);
            _closure2_slot8 = var3;
            var4 = var5.useEffect;
            var3 = new Array(7);
            var3[0] = var12;
            var3[1] = var11;
            var3[2] = var10;
            var3[3] = var9;
            var3[4] = var8;
            var3[5] = var7;
            var3[6] = var6;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var1 = var2 != var3;
case 9:
                    if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 4:
                    var3 = _closure2_slot6;
                    var2 = null;
                    var1 = var2 != var3;
case 11:
                    if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var2 = _closure2_slot8;
                    var2 = var2.current;
                    var1 = !var2;
case 12:
                    if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var2 = _closure2_slot8;
                    var1 = true;
                    var2['current'] = var1;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 8;
                    var1 = var9[var1];
                    var8 = undefined;
                    var4 = var2.bind(var8)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot5;
                    var2 = var1.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED;
                    var1 = {};
                    var7 = _closure2_slot1;
                    var1['role_subscription_group_listing_id'] = var7;
                    var7 = _closure2_slot6;
                    var1['role_subscription_listing_ids'] = var7;
                    var7 = _closure2_slot5;
                    var1['is_premium_member'] = var7;
                    var7 = _closure2_slot7;
                    var1['location_stack'] = var7;
                    var7 = _closure2_slot2;
                    var1['location'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 9;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.collectGuildAnalyticsMetadata;
                    var5 = _closure2_slot0;
                    var10 = var6.bind(var7)(var5);
                    var11 = var1;
                    var5 = copyDataProperties(var11, var10);
                    var1 = var3.bind(var4)(var2, var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();