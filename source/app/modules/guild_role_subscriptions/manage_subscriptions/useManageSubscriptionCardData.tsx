// app/modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.SubscriptionStatusTypes;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useManageSubscriptionCardData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var17 = undefined;
            var3 = var2.bind(var17)(var1);
            var1 = var3.getRoleSubscriptionPlanId;
            var1 = var1.bind(var3)(var8);
            var _closure2_slot0 = var1;
            var1 = 9;
            var3 = var9[var1];
            var10 = var2.bind(var17)(var3);
            var7 = var10.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
            var4 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getSubscriptionListingForPlan;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var7.bind(var10)(var6, var4);
            var _closure2_slot1 = var4;
            var6 = var9[var1];
            var10 = var2.bind(var17)(var6);
            var7 = var10.useStateFromStores;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot6;
                    var3 = var4.getSubscriptionGroupListingForSubscriptionListing;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var3 = var7.bind(var10)(var6, var3);
            var _closure2_slot2 = var3;
            var1 = var9[var1];
            var10 = var2.bind(var17)(var1);
            var7 = var10.useStateFromStores;
            var1 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var4 = _closure2_slot2;
                    var1 = var4.guild_id;
case 4:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var7.bind(var10)(var6, var1);
            var _closure2_slot3 = var7;
            var10 = _closure1_slot4;
            var6 = var10.useState;
            var1 = false;
            var11 = var6.bind(var10)(var1);
            var6 = _closure1_slot3;
            var1 = 2;
            var11 = var6.bind(var17)(var11, var1);
            var1 = 0;
            var6 = var11[var1];
            var _closure2_slot4 = var6;
            var1 = 1;
            var1 = var11[var1];
            var _closure2_slot5 = var1;
            var1 = 10;
            var1 = var9[var1];
            var2 = var2.bind(var17)(var1);
            var1 = var2.useFetchSubscriptionsSettings;
            var1 = var1.bind(var2)();
            var1 = var1.fetchSubscriptionsSettings;
            var _closure2_slot6 = var1;
            var9 = var10.useEffect;
            var2 = new Array(3);
            var2[0] = var6;
            var2[1] = var7;
            var2[2] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var4 = _closure2_slot3;
                    var3 = null;
                    var2 = var3 != var4;
case 6:
                    if(!var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var5 = _closure1_slot6;
                    var4 = var5.getSubscriptionSettings;
                    var3 = _closure2_slot3;
                    var3 = var3.id;
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    var2 = var3 == var4;
case 8:
                    if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var3 = _closure2_slot6;
                    var1 = _closure2_slot3;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var1, var2);
            var9 = null;
            var1 = var9 == var4;
            var2 = undefined;
            if(var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = {};
            var1['subscription'] = var8;
            var1 = var1.subscription;
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var11 = 5;
            var8 = var8[var11];
            var10 = var10.bind(var17)(var8);
            var8 = var1.currentPeriodEnd;
            var12 = var10.bind(var17)(var8);
            var8 = var12.format;
            var10 = 'M/D/YY';
            var14 = var8.bind(var12)(var10);
            var8 = var1.price;
            var8 = var9 != var8;
            var12 = '';
            if(!var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 6;
            var8 = var15[var8];
            var16 = var9.bind(var17)(var8);
            var15 = var16.formatPrice;
            var9 = var1.price;
            var8 = var1.currency;
            var12 = var15.bind(var16)(var9, var8);
case 14:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var9 = var9.bind(var17)(var8);
            var8 = var1.createdAt;
            var9 = var9.bind(var17)(var8);
            var8 = var9.format;
            var15 = var8.bind(var9)(var10);
            var10 = var1.status;
            var8 = _closure1_slot7;
            var9 = var8.CANCELED;
            var11 = var10 === var9;
            var10 = var1.status;
            var9 = var8.PAST_DUE;
            var8 = var1.hasActiveTrial;
            var1 = {};
            var1['memberSince'] = var15;
            var1['nextRenewalDate'] = var14;
            var14 = _closure1_slot0;
            var18 = _closure1_slot2;
            var13 = 7;
            var15 = var18[var13];
            var15 = var14.bind(var17)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var13 = var18[var13];
            var13 = var14.bind(var17)(var13);
            var14 = var13.t;
            if(var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var13 = var14.CVjLcH;
            var13 = var15.bind(var16)(var13);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var14 = var14.UAfot7;
            var13 = var15.bind(var16)(var14);
case 18:
            var1['nextRenewalLabel'] = var13;
            var1['subscriptionPrice'] = var12;
            var1['isCancelled'] = var11;
            var9 = var10 === var9;
            var1['isPastDue'] = var9;
            var1['isTrial'] = var8;
            var2 = var1;
case 12:
            var1 = {};
            var1['guild'] = var7;
            var1['expanded'] = var6;
            var5 = function handleToggleExpanded() {
                var3 = _closure2_slot5;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1['handleToggleExpanded'] = var5;
            var1['listing'] = var4;
            var1['groupListing'] = var3;
            var1['subscriptionInfo'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();