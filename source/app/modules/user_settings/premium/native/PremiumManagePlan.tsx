// app/modules/user_settings/premium/native/PremiumManagePlan.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function ManagePlanHeader() {
        var1 = _closure1_slot33;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var1 = 20;
        var1 = var15[var1];
        var2 = var14.bind(var4)(var1);
        var1 = var2.useNavigation;
        var1 = var1.bind(var2)();
        var _closure2_slot0 = var1;
        var3 = _closure1_slot30;
        var2 = _closure1_slot8;
        var1 = {};
        var5 = var9.headerContainer;
        var1['style'] = var5;
        var8 = _closure1_slot29;
        var5 = 21;
        var5 = var15[var5];
        var5 = var14.bind(var4)(var5);
        var7 = var5.PressableOpacity;
        var5 = {};
        var11 = var9.backButtonWrapper;
        var5['style'] = var11;
        var10 = function onPress() {
            var2 = _closure2_slot0;
            var1 = var2.pop;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['onPress'] = var10;
        var12 = _closure1_slot29;
        var10 = 22;
        var10 = var15[var10];
        var10 = var14.bind(var4)(var10);
        var11 = var10.ArrowLargeLeftIcon;
        var10 = {};
        var13 = 'md';
        var10['size'] = var13;
        var10 = var12.bind(var4)(var11, var10);
        var5['children'] = var10;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(3);
        var5[0] = var7;
        var10 = _closure1_slot29;
        var7 = 23;
        var7 = var15[var7];
        var7 = var14.bind(var4)(var7);
        var8 = var7.Text;
        var7 = {'variant': 'redesign/heading-18/bold', 'accessibilityRole': 'header'};
        var11 = 24;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11["1bX7Tx"];
        var11 = var12.bind(var13)(var11);
        var7['children'] = var11;
        var7 = var10.bind(var4)(var8, var7);
        var5[1] = var7;
        var8 = _closure1_slot29;
        var7 = _closure1_slot8;
        var6 = {};
        var9 = var9.backButtonWrapper;
        var6['style'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function SubscriptionAndBillingInfo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var19 = var1.subscription;
            var _closure2_slot0 = var19;
            var2 = var1.fractionalPremiumInfo;
            var11 = var1.isPremiumGroup;
            var10 = var1.premiumGroupRole;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var13 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 27;
            var3 = var1[var3];
            var4 = var13.bind(var5)(var3);
            var3 = 'PremiumManagePlan';
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot34;
            var14 = var3.bind(var5)(var4);
            var3 = 28;
            var3 = var1[var3];
            var3 = var13.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var18 = var3.analyticsLocations;
            var _closure2_slot1 = var18;
            var8 = _closure1_slot0;
            var3 = 29;
            var4 = var1[var3];
            var7 = var8.bind(var5)(var4);
            var6 = var7.useFetchSubscriptionInvoicePreview;
            var4 = {'subscriptionId': null, 'renewal': true, 'applyEntitlements': true};
            var9 = var19.id;
            var4['subscriptionId'] = var9;
            var12 = true;
            var4['analyticsLocations'] = var18;
            var9 = 30;
            var9 = var1[var9];
            var9 = var13.bind(var5)(var9);
            var9 = var9.PREMIUM_SUBSCRIPTION_DETAILS;
            var4['analyticsLocation'] = var9;
            var7 = var6.bind(var7)(var4);
            var6 = _closure1_slot4;
            var4 = 1;
            var7 = var6.bind(var5)(var7, var4);
            var6 = 0;
            var26 = var7[var6];
            var3 = var1[var3];
            var9 = var8.bind(var5)(var3);
            var7 = var9.useGetSubscriptionInvoice;
            var3 = {};
            var13 = var19.id;
            var3['subscriptionId'] = var13;
            var16 = var19.status;
            var13 = _closure1_slot20;
            var13 = var13.PAST_DUE;
            var13 = var16 !== var13;
            var3['preventFetch'] = var13;
            var7 = var7.bind(var9)(var3);
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)(var7, var4);
            var25 = var3[var6];
            var3 = 31;
            var7 = var1[var3];
            var16 = var8.bind(var5)(var7);
            var13 = var16.useStateFromStores;
            var7 = _closure1_slot17;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var2 = var2.isOnPlatformMatchingExternalPaymentGateway;
                    var3 = null;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    return var3;
case 2:
                    var2 = _closure2_slot0;
                    var2 = var2.paymentGatewayPlanId;
                    if(!(var3 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure2_slot0;
                    var3 = var2.paymentGatewayPlanId;
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var3 = _closure1_slot17;
                    var2 = var3.getProduct;
                    var1 = _closure2_slot0;
                    var1 = var1.paymentGatewayPlanId;
                    var1 = var2.bind(var3)(var1);
                    return var1;
case 4:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = 'Subscription missing plan ID';
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var13 = var13.bind(var16)(var9, var7);
            var7 = var1[var3];
            var17 = var8.bind(var5)(var7);
            var16 = var17.useStateFromStores;
            var7 = _closure1_slot14;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var2 = _closure1_slot14;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var16.bind(var17)(var9, var7);
            var1 = var1[var3];
            var16 = var8.bind(var5)(var1);
            var9 = var16.useStateFromStores;
            var1 = _closure1_slot12;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var1 = _closure1_slot12;
                var1 = var1.isSubscriptionFetching;
                return var1;
            };
            var22 = var9.bind(var16)(var8, var1);
            var _closure2_slot2 = var22;
            var1 = null;
            var17 = var1 !== var7;
            if(!var17) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var17 = var7.hasActiveTrial;
case 7:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = 20;
            var8 = var9[var8];
            var16 = var7.bind(var5)(var8);
            var8 = var16.useNavigation;
            var8 = var8.bind(var16)();
            _closure2_slot3 = var8;
            var8 = 32;
            var8 = var9[var8];
            var16 = var7.bind(var5)(var8);
            var8 = var16.useThemeContext;
            var8 = var8.bind(var16)();
            var20 = var8.theme;
            var8 = 33;
            var8 = var9[var8];
            var16 = var7.bind(var5)(var8);
            var8 = var16.isThemeLight;
            var28 = var8.bind(var16)(var20);
            var16 = _closure1_slot5;
            var8 = var16.useState;
            var20 = var8.bind(var16)(var1);
            var16 = _closure1_slot4;
            var8 = 2;
            var16 = var16.bind(var5)(var20, var8);
            var20 = var16[var6];
            _closure2_slot4 = var20;
            var16 = var16[var4];
            _closure2_slot5 = var16;
            var3 = var9[var3];
            var21 = var7.bind(var5)(var3);
            var16 = var21.useStateFromStores;
            var3 = _closure1_slot16;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot16;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var16.bind(var21)(var7, var3);
            _closure2_slot6 = var3;
            var21 = _closure1_slot5;
            var16 = var21.useEffect;
            var7 = new Array(3);
            var7[0] = var20;
            var7[1] = var22;
            var7[2] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = 'opening_mobile_web';
                    var2 = var2 === var3;
                    if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 2:
                    var4 = _closure2_slot6;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 34;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.AppStates;
                    var3 = var3.ACTIVE;
                    var2 = var4 !== var3;
case 9:
                    if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = _closure2_slot5;
                    var3 = undefined;
                    var2 = 'in_mobile_web';
                    var2 = var4.bind(var3)(var2);
case 10:
                    var3 = _closure2_slot4;
                    var2 = 'in_mobile_web';
                    var2 = var2 === var3;
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var4 = _closure2_slot6;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 34;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.AppStates;
                    var3 = var3.ACTIVE;
                    var2 = var4 === var3;
case 12:
                    if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 35;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.fetchSubscriptions;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot5;
                    var2 = 'start_fetching_update';
                    var2 = var3.bind(var4)(var2);
case 14:
                    var3 = _closure2_slot4;
                    var2 = 'start_fetching_update';
                    var2 = var2 === var3;
                    if(!var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var2 = _closure2_slot2;
case 16:
                    if(!var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var4 = _closure2_slot5;
                    var3 = undefined;
                    var2 = 'fetching_update';
                    var2 = var4.bind(var3)(var2);
case 18:
                    var3 = _closure2_slot4;
                    var2 = 'fetching_update';
                    var2 = var2 !== var3;
                    if(var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var2 = _closure2_slot2;
case 20:
                    if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var1 = null;
                    var1 = var3.bind(var2)(var1);
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var16.bind(var21)(var3, var7);
            var7 = _closure1_slot1;
            var3 = 36;
            var3 = var9[var3];
            var7 = var7.bind(var5)(var3);
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 37;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getNewAnalyticsLoadId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var7.bind(var5)(var3);
            _closure2_slot7 = var3;
            var16 = _closure1_slot5;
            var9 = var16.useMemo;
            var7 = new Array(4);
            var7[0] = var19;
            var7[1] = var20;
            var7[2] = var18;
            var7[3] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = 'start_fetching_update';
                    if(!(var1 !== var2)) { _fun0004_ip = 24; continue _fun0004 }
case 2:
                    var2 = _closure2_slot4;
                    var1 = 'fetching_update';
                    if(!(var1 !== var2)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 38;
                    var1 = var4[var1];
                    var6 = undefined;
                    var5 = var2.bind(var6)(var1);
                    var4 = var5.getExternalManagementMessage;
                    var2 = _closure2_slot0;
                    var1 = {'returnCtaAsComponent': true, 'loadId': null, 'shouldAllowExternalManagement': true};
                    var7 = _closure2_slot7;
                    var1['loadId'] = var7;
                    var7 = function onSuccessCallback() {
                        var3 = _closure1_slot31;
                        var2 = var3.log;
                        var1 = 'Successfully opened mobile web Nitro Management page';
                        var1 = var2.bind(var3)(var1);
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var1 = 39;
                        var2 = var12[var1];
                        var1 = undefined;
                        var6 = var11.bind(var1)(var2);
                        var5 = var6.track;
                        var2 = _closure1_slot18;
                        var4 = var2.MOBILE_OPEN_STANDALONE_MANAGE_SUBSCRIPTION_PAGE;
                        var3 = {};
                        var8 = _closure2_slot7;
                        var3['load_id'] = var8;
                        var14 = _closure2_slot1;
                        var8 = new Array(1);
                        var13 = 0;
                        var15 = var8;
                        var10 = arraySpread(var15, var14, var13);
                        var9 = 30;
                        var9 = var12[var9];
                        var9 = var11.bind(var1)(var9);
                        var9 = var9.MOBILE_APP_MANAGE_PREMIUM_SUBSCRIPTION_CTA;
                        var8[9] = var9;
                        var9 = 1;
                        var9 = var10 + var9;
                        var3['location_stack'] = var8;
                        var7 = _closure1_slot24;
                        var7 = var7.MOBILE_WEB_REDIRECT_CHECKOUT;
                        var3['custom_checkout_flow'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var3 = _closure2_slot5;
                        var2 = 'opening_mobile_web';
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onSuccessCallback'] = var7;
                    var7 = var4.bind(var5)(var2, var1);
                    var1 = null;
                    var2 = var1 != var7;
                    if(!var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var4 = _closure1_slot5;
                    var2 = var4.isValidElement;
                    var4 = var2.bind(var4)(var7);
                    var2 = var7;
                    if(var4) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var5 = _closure1_slot29;
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 23;
                    var3 = var8[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.Text;
                    var3 = {'variant': 'text-sm/medium', 'color': 'text-default'};
                    var3['children'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
case 28:
                    var1 = var2;
case 26:
                    return var1;
case 24:
                    var4 = _closure1_slot29;
                    var3 = _closure1_slot10;
                    var2 = {};
                    var1 = 'small';
                    var2['size'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var16 = var9.bind(var16)(var3, var7);
            var7 = _closure1_slot5;
            var3 = var7.useState;
            var34 = false;
            var7 = var3.bind(var7)(var34);
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)(var7, var8);
            var22 = var3[var6];
            var3 = var3[var4];
            _closure2_slot8 = var3;
            if(!(var1 != var26)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var36 = 40;
            var4 = var3[var36];
            var7 = var6.bind(var5)(var4);
            var4 = var7.getPlanIdFromInvoice;
            var8 = var4.bind(var7)(var19, var26);
            var4 = var3[var36];
            var7 = var6.bind(var5)(var4);
            var4 = var7.getStatusFromInvoice;
            var4 = var4.bind(var7)(var19, var26);
            var7 = _closure1_slot28;
            var9 = var7[var8];
            var7 = 41;
            var7 = var3[var7];
            var20 = var6.bind(var5)(var7);
            var18 = var1 != var9;
            var7 = 'missing subscription planInfo';
            var7 = var20.bind(var5)(var18, var7);
            var3 = var3[var36];
            var7 = var6.bind(var5)(var3);
            var6 = var7.getPlanDescription;
            var3 = {};
            var3['subscription'] = var19;
            var3['planId'] = var8;
            var18 = var1 != var13;
            var8 = null;
            if(!var18) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 42;
            var18 = var21[var18];
            var21 = var20.bind(var5)(var18);
            var20 = var21.formatRate;
            var18 = var13.priceString;
            var13 = var9.interval;
            var9 = var9.intervalCount;
            var8 = var20.bind(var21)(var18, var13, var9);
case 32:
            var3['price'] = var8;
            var3['includePremiumGuilds'] = var12;
            var21 = var6.bind(var7)(var3);
            var3 = _closure1_slot20;
            var3 = var3.CANCELED;
            if(!(var4 !== var3)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var3 = _closure1_slot20;
            var3 = var3.PAUSE_PENDING;
            if(!(var4 !== var3)) { _fun0001_ip = 34; continue _fun0001 }
case 36:
            var3 = _closure1_slot20;
            var3 = var3.PAST_DUE;
            if(!(var4 !== var3)) { _fun0001_ip = 34; continue _fun0001 }
case 37:
            var3 = var19.renewalMutations;
            if(!(var1 == var3)) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var6 = _closure1_slot30;
            var4 = _closure1_slot8;
            var3 = {};
            var7 = var14.container;
            var3['style'] = var7;
            var9 = _closure1_slot30;
            var8 = _closure1_slot8;
            var7 = {};
            var13 = var14.pillAndCardContainer;
            var7['style'] = var13;
            if(!var17) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var20 = _closure1_slot29;
            var18 = _closure1_slot8;
            var13 = {};
            var24 = var14.pillPosition;
            var13['style'] = var24;
            var29 = _closure1_slot29;
            var27 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 54;
            var24 = var30[var24];
            var24 = var27.bind(var5)(var24);
            var27 = var24.PremiumReferralTrialPill;
            var24 = {};
            var24 = var29.bind(var5)(var27, var24);
            var13['children'] = var24;
            var17 = var20.bind(var5)(var18, var13);
case 40:
            var13 = new Array(2);
            var13[0] = var17;
            var20 = _closure1_slot29;
            var18 = _closure1_slot1;
            var33 = _closure1_slot2;
            var17 = 53;
            var17 = var33[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var24 = _closure1_slot27;
            var24 = var24.TIER_2;
            var17['premiumType'] = var24;
            var27 = var2.fractionalState;
            var24 = _closure1_slot25;
            var24 = var24.NONE;
            var24 = var27 !== var24;
            var17['forFractionalPremium'] = var24;
            var17['hideButton'] = var12;
            var17['isPremiumGroup'] = var11;
            var17['premiumGroupRole'] = var10;
            var17 = var20.bind(var5)(var18, var17);
            var13[1] = var17;
            var7['children'] = var13;
            var8 = var9.bind(var5)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var13 = _closure1_slot30;
            var9 = _closure1_slot8;
            var8 = {};
            var17 = var14.extraInfoContainer;
            var8['style'] = var17;
            var20 = _closure1_slot29;
            var30 = _closure1_slot0;
            var29 = 23;
            var17 = var33[var29];
            var17 = var30.bind(var5)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'eyebrow', 'color': 'text-default'};
            var32 = 24;
            var24 = var33[var32];
            var24 = var30.bind(var5)(var24);
            var31 = var24.intl;
            var27 = var31.string;
            var24 = var33[var32];
            var24 = var30.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.YCrcPL;
            var24 = var27.bind(var31)(var24);
            var17['children'] = var24;
            var18 = var20.bind(var5)(var18, var17);
            var17 = new Array(4);
            var17[0] = var18;
            var24 = _closure1_slot30;
            var20 = _closure1_slot8;
            var18 = {};
            var27 = var14.extraInfoTextContainer;
            var18['style'] = var27;
            var31 = _closure1_slot29;
            var27 = 55;
            var27 = var33[var27];
            var27 = var30.bind(var5)(var27);
            var30 = var27.TextWithIOSLinkWorkaround;
            var27 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            if(!(var1 == var16)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var35 = _closure1_slot0;
            var33 = _closure1_slot2;
            var37 = var33[var32];
            var37 = var35.bind(var5)(var37);
            var38 = var37.intl;
            var37 = var38.format;
            var33 = var33[var32];
            var33 = var35.bind(var5)(var33);
            var33 = var33.t;
            var35 = var33.fvk30i;
            var33 = {};
            var39 = function onSwitchPlans() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 49;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.handleManageSubscription;
                var3 = _closure2_slot0;
                var2 = _closure2_slot3;
                var1 = _closure2_slot1;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var33['onSwitchPlans'] = var39;
            var39 = function onCancel() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 49;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.onCancelClick;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var33['onCancel'] = var39;
            var33 = var37.bind(var38)(var35, var33);
            _fun0001_ip = 44; continue _fun0001;
case 42:
            var39 = _closure1_slot0;
            var35 = _closure1_slot2;
            var37 = var35[var32];
            var37 = var39.bind(var5)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var35 = var35[var32];
            var35 = var39.bind(var5)(var35);
            var35 = var35.t;
            var35 = var35.MTG+3O;
            var33 = var37.bind(var38)(var35);
case 44:
            var27['children'] = var33;
            var30 = var31.bind(var5)(var30, var27);
            var27 = new Array(3);
            var27[0] = var30;
            var33 = _closure1_slot29;
            var31 = _closure1_slot0;
            var35 = _closure1_slot2;
            var30 = 51;
            var30 = var35[var30];
            var30 = var31.bind(var5)(var30);
            var31 = var30.GoogleManagementLink;
            var30 = {};
            var30['subscription'] = var19;
            var30 = var33.bind(var5)(var31, var30);
            var27[1] = var30;
            var30 = var1 != var16;
            if(!var30) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var30 = var16;
case 45:
            var27[2] = var30;
            var18['children'] = var27;
            var18 = var24.bind(var5)(var20, var18);
            var17[1] = var18;
            var24 = _closure1_slot29;
            var33 = _closure1_slot0;
            var35 = _closure1_slot2;
            var18 = var35[var29];
            var18 = var33.bind(var5)(var18);
            var20 = var18.Text;
            var18 = {'variant': 'eyebrow', 'color': 'text-default'};
            var27 = var35[var32];
            var27 = var33.bind(var5)(var27);
            var31 = var27.intl;
            var30 = var31.string;
            var27 = var35[var32];
            var27 = var33.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27.Sb6wI1;
            var27 = var30.bind(var31)(var27);
            var18['children'] = var27;
            var18 = var24.bind(var5)(var20, var18);
            var17[2] = var18;
            var24 = _closure1_slot30;
            var20 = _closure1_slot8;
            var18 = {};
            var30 = var14.extraInfoTextContainer;
            var27 = new Array(2);
            var27[0] = var30;
            var30 = {};
            var31 = 4;
            var30['gap'] = var31;
            var27[1] = var30;
            var18['style'] = var27;
            var31 = _closure1_slot29;
            var27 = var35[var29];
            var27 = var33.bind(var5)(var27);
            var30 = var27.Text;
            var27 = {'variant': 'text-md/semibold', 'color': 'text-default'};
            var37 = var35[var32];
            var37 = var33.bind(var5)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var32 = var35[var32];
            var32 = var33.bind(var5)(var32);
            var32 = var32.t;
            var32 = var32.KXQjfc;
            var32 = var37.bind(var38)(var32);
            var27['children'] = var32;
            var30 = var31.bind(var5)(var30, var27);
            var27 = new Array(2);
            var27[0] = var30;
            var31 = _closure1_slot29;
            var29 = var35[var29];
            var29 = var33.bind(var5)(var29);
            var30 = var29.Text;
            var29 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var32 = 50;
            var32 = var35[var32];
            var33 = var33.bind(var5)(var32);
            var32 = var33.getBillingInformationStringNative;
            var45 = var33;
            var44 = var19;
            var43 = var26;
            var42 = var25;
            var41 = false;
            var40 = var2;
            var32 = var45[var32](var44, var43, var42, var41, var40, var39);
            var29['children'] = var32;
            var29 = var31.bind(var5)(var30, var29);
            var27[1] = var29;
            var18['children'] = var27;
            var18 = var24.bind(var5)(var20, var18);
            var17[3] = var18;
            var8['children'] = var17;
            var8 = var13.bind(var5)(var9, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var3 = var6.bind(var5)(var4, var3);
            return var3;
case 38:
            var3 = global;
            var6 = var3.Date;
            var44 = var19.currentPeriodEnd;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var45 = var4;
            var3 = new var45[var6](var44, var43);
            var6 = var3 instanceof Object ? var3 : var4;
            var3 = var19.isPurchasedExternally;
            var32 = var6;
            if(var3) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var36];
            var4 = var4.bind(var5)(var3);
            var3 = var4.extendDateWithUnconsumedFractionalPremium;
            var2 = var2.unactivatedUnits;
            var32 = var3.bind(var4)(var6, var2);
case 47:
            var4 = _closure1_slot30;
            var3 = _closure1_slot8;
            var2 = {};
            var6 = var14.container;
            var2['style'] = var6;
            var8 = _closure1_slot30;
            var7 = _closure1_slot8;
            var6 = {};
            var9 = var14.mutationWarningContainer;
            var6['style'] = var9;
            var17 = _closure1_slot29;
            var29 = _closure1_slot0;
            var24 = _closure1_slot2;
            var9 = 52;
            var9 = var24[var9];
            var9 = var29.bind(var5)(var9);
            var13 = var9.AnnouncementsWarningIcon;
            var9 = {};
            var18 = 'md';
            var9['size'] = var18;
            var13 = var17.bind(var5)(var13, var9);
            var9 = new Array(2);
            var9[0] = var13;
            var20 = _closure1_slot29;
            var18 = 23;
            var13 = var24[var18];
            var13 = var29.bind(var5)(var13);
            var17 = var13.Text;
            var13 = {'style': null, 'variant': 'heading-sm/medium', 'color': 'text-default'};
            var27 = var14.mutationText;
            var13['style'] = var27;
            var27 = 24;
            var30 = var24[var27];
            var30 = var29.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.format;
            var24 = var24[var27];
            var24 = var29.bind(var5)(var24);
            var24 = var24.t;
            var29 = var24.ar1cPl;
            var24 = {};
            var33 = var19.hasExternalPlanChange;
            if(var33) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var34 = _closure1_slot1;
            var33 = _closure1_slot2;
            var33 = var33[var36];
            var35 = var34.bind(var5)(var33);
            var34 = var35.getDisplayName;
            var33 = var19.renewalMutations;
            var33 = var33.planId;
            var33 = var34.bind(var35)(var33);
            _fun0001_ip = 51; continue _fun0001;
case 49:
            var35 = _closure1_slot0;
            var34 = _closure1_slot2;
            var34 = var34[var36];
            var36 = var35.bind(var5)(var34);
            var35 = var36.getExternalPlanDisplayName;
            var34 = var19.renewalMutations;
            var33 = var35.bind(var36)(var34);
case 51:
            var24['planName'] = var33;
            var24['date'] = var32;
            var24 = var30.bind(var31)(var29, var24);
            var13['children'] = var24;
            var13 = var20.bind(var5)(var17, var13);
            var9[1] = var13;
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var9 = _closure1_slot29;
            var8 = _closure1_slot1;
            var30 = _closure1_slot2;
            var7 = 53;
            var7 = var30[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var13 = _closure1_slot27;
            var13 = var13.TIER_2;
            var7['premiumType'] = var13;
            var7['hideButton'] = var12;
            var7['isPremiumGroup'] = var11;
            var7['premiumGroupRole'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var9 = _closure1_slot30;
            var8 = _closure1_slot8;
            var7 = {};
            var10 = var14.extraInfoContainer;
            var7['style'] = var10;
            var12 = _closure1_slot29;
            var29 = _closure1_slot0;
            var10 = var30[var18];
            var10 = var29.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'eyebrow', 'color': 'text-default', 'accessibilityRole': 'header'};
            var13 = var30[var27];
            var13 = var29.bind(var5)(var13);
            var20 = var13.intl;
            var17 = var20.string;
            var13 = var30[var27];
            var13 = var29.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.YCrcPL;
            var13 = var17.bind(var20)(var13);
            var10['children'] = var13;
            var11 = var12.bind(var5)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot30;
            var12 = _closure1_slot8;
            var11 = {};
            var17 = var14.extraInfoTextContainer;
            var11['style'] = var17;
            var24 = _closure1_slot29;
            var17 = var30[var18];
            var17 = var29.bind(var5)(var17);
            var20 = var17.Text;
            var17 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var31 = var30[var27];
            var31 = var29.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var27 = var30[var27];
            var27 = var29.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27.MTG+3O;
            var27 = var31.bind(var32)(var27);
            var17['children'] = var27;
            var20 = var24.bind(var5)(var20, var17);
            var17 = new Array(3);
            var17[0] = var20;
            var24 = _closure1_slot29;
            var18 = var30[var18];
            var18 = var29.bind(var5)(var18);
            var20 = var18.Text;
            var18 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var27 = 50;
            var27 = var30[var27];
            var29 = var29.bind(var5)(var27);
            var27 = var29.getBillingInformationStringNative;
            var27 = var27.bind(var29)(var19, var26, var25);
            var18['children'] = var27;
            var18 = var24.bind(var5)(var20, var18);
            var17[1] = var18;
            var18 = var1 != var16;
            if(!var18) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var18 = var16;
case 52:
            var17[2] = var18;
            var11['children'] = var17;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 34:
            var4 = _closure1_slot30;
            var3 = _closure1_slot8;
            var2 = {};
            var6 = var14.container;
            var2['style'] = var6;
            var8 = _closure1_slot30;
            var7 = _closure1_slot8;
            var6 = {};
            var9 = var14.errorHeader;
            var6['style'] = var9;
            var11 = _closure1_slot30;
            var10 = _closure1_slot7;
            var9 = {};
            var13 = _closure1_slot1;
            var18 = _closure1_slot2;
            if(var28) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var12 = 44;
            var12 = var18[var12];
            _fun0001_ip = 56; continue _fun0001;
case 54:
            var17 = 43;
            var12 = var18[var17];
case 56:
            var12 = var13.bind(var5)(var12);
            var9['source'] = var12;
            var12 = var14.headerBackground;
            var9['style'] = var12;
            var17 = _closure1_slot30;
            var13 = _closure1_slot8;
            var12 = {};
            var18 = var14.logoContainer;
            var12['style'] = var18;
            var24 = _closure1_slot29;
            var20 = _closure1_slot6;
            var18 = {};
            var29 = _closure1_slot1;
            var30 = _closure1_slot2;
            var27 = 45;
            var27 = var30[var27];
            var27 = var29.bind(var5)(var27);
            var18['source'] = var27;
            var27 = var14.wumpusImg;
            var18['style'] = var27;
            var20 = var24.bind(var5)(var20, var18);
            var18 = new Array(2);
            var18[0] = var20;
            var27 = _closure1_slot29;
            var24 = _closure1_slot6;
            var20 = {};
            var31 = _closure1_slot2;
            if(var28) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var28 = 47;
            var28 = var31[var28];
            _fun0001_ip = 59; continue _fun0001;
case 57:
            var30 = 46;
            var28 = var31[var30];
case 59:
            var28 = var29.bind(var5)(var28);
            var20['source'] = var28;
            var28 = var14.logoStyle;
            var20['style'] = var28;
            var20 = var27.bind(var5)(var24, var20);
            var18[1] = var20;
            var12['children'] = var18;
            var13 = var17.bind(var5)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var20 = _closure1_slot29;
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var18 = 23;
            var13 = var13[var18];
            var13 = var17.bind(var5)(var13);
            var17 = var13.Text;
            var13 = {'variant': 'heading-sm/medium', 'color': 'text-default'};
            var13['children'] = var21;
            var13 = var20.bind(var5)(var17, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var10 = var11.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var19.isOnPlatformMatchingExternalPaymentGateway;
            if(!var10) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var13 = _closure1_slot29;
            var12 = _closure1_slot8;
            var11 = {};
            var17 = var14.errorHeaderPrimaryButton;
            var11['style'] = var17;
            var21 = _closure1_slot29;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var17 = 48;
            var17 = var30[var17];
            var17 = var29.bind(var5)(var17);
            var20 = var17.Button;
            var17 = {'size': 'sm', 'variant': 'secondary'};
            var24 = 24;
            var27 = var30[var24];
            var27 = var29.bind(var5)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var24 = var30[var24];
            var24 = var29.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.lTCb0c;
            var24 = var27.bind(var28)(var24);
            var17['text'] = var24;
            var24 = _closure1_slot3;
            var23 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                        var4 = _closure2_slot8;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 64: // try_start_0
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 49;
                        var2 = var6[var2];
                        var6 = var4.bind(var5)(var2);
                        var4 = var6.onResubscribeClick;
                        var2 = _closure2_slot0;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=65);
case 65:
                        return var2;
case 9:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0005_ip = 10; continue _fun0005 }
case 66: // try_end0
                        var6 = _closure2_slot8;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var5;
case 10:
                        var6 = _closure2_slot8;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 67: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot8;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 62:
                        return var1;
                    }
                };
                return var1;
            };
            var23 = var24.bind(var5)(var23);
            var17['onPress'] = var23;
            var17['loading'] = var22;
            var17['disabled'] = var22;
            var17 = var21.bind(var5)(var20, var17);
            var11['children'] = var17;
            var10 = var13.bind(var5)(var12, var11);
case 60:
            var9[1] = var10;
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot30;
            var8 = _closure1_slot8;
            var7 = {};
            var10 = var14.extraInfoContainer;
            var7['style'] = var10;
            var12 = _closure1_slot29;
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = var20[var18];
            var10 = var17.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'eyebrow', 'color': 'text-default', 'accessibilityRole': 'header'};
            var23 = 24;
            var13 = var20[var23];
            var13 = var17.bind(var5)(var13);
            var22 = var13.intl;
            var21 = var22.string;
            var13 = var20[var23];
            var13 = var17.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.YCrcPL;
            var13 = var21.bind(var22)(var13);
            var10['children'] = var13;
            var11 = var12.bind(var5)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot30;
            var12 = _closure1_slot8;
            var11 = {};
            var14 = var14.extraInfoTextContainer;
            var11['style'] = var14;
            var22 = _closure1_slot29;
            var14 = var20[var18];
            var14 = var17.bind(var5)(var14);
            var21 = var14.Text;
            var14 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var24 = var20[var23];
            var24 = var17.bind(var5)(var24);
            var27 = var24.intl;
            var24 = var27.string;
            var23 = var20[var23];
            var23 = var17.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.MTG+3O;
            var23 = var24.bind(var27)(var23);
            var14['children'] = var23;
            var21 = var22.bind(var5)(var21, var14);
            var14 = new Array(4);
            var14[0] = var21;
            var22 = _closure1_slot29;
            var18 = var20[var18];
            var18 = var17.bind(var5)(var18);
            var21 = var18.Text;
            var18 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var23 = 50;
            var23 = var20[var23];
            var24 = var17.bind(var5)(var23);
            var23 = var24.getBillingInformationStringNative;
            var23 = var23.bind(var24)(var19, var26, var25);
            var18['children'] = var23;
            var18 = var22.bind(var5)(var21, var18);
            var14[1] = var18;
            var18 = _closure1_slot29;
            var15 = 51;
            var15 = var20[var15];
            var15 = var17.bind(var5)(var15);
            var17 = var15.GoogleManagementLink;
            var15 = {};
            var15['subscription'] = var19;
            var15 = var18.bind(var5)(var17, var15);
            var14[2] = var15;
            var15 = var1 != var16;
            if(!var15) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var15 = var16;
case 68:
            var14[3] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 30:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function FractionalPremiumCredits(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var21 = var1.fractionalPremiumInfo;
            var6 = var1.showPremiumFeaturesCard;
            var31 = var1.durationText;
            var22 = var1.hasUnactivatedUnits;
            var28 = var1.unactivatedHoursString;
            var40 = var1.activationDate;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 27;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = 'FractionalPremiumCredits';
            var2 = var2.bind(var4)(var1);
            var1 = _closure1_slot34;
            var29 = var1.bind(var4)(var2);
            var3 = _closure1_slot30;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var29.container;
            var1['style'] = var5;
            if(!var6) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var8 = _closure1_slot29;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 53;
            var5 = var9[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {'premiumType': null, 'forFractionalPremium': true, 'hideButton': true};
            var9 = _closure1_slot27;
            var9 = var9.TIER_2;
            var5['premiumType'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 70:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot30;
            var7 = _closure1_slot8;
            var6 = {};
            var9 = var29.extraInfoContainer;
            var6['style'] = var9;
            var11 = _closure1_slot29;
            var33 = _closure1_slot0;
            var26 = _closure1_slot2;
            var30 = 23;
            var9 = var26[var30];
            var9 = var33.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'eyebrow', 'color': 'text-default'};
            var41 = 24;
            var12 = var26[var41];
            var12 = var33.bind(var4)(var12);
            var14 = var12.intl;
            var13 = var14.string;
            var12 = var26[var41];
            var12 = var33.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.Obre8v;
            var12 = var13.bind(var14)(var12);
            var9['children'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var12 = _closure1_slot29;
            var10 = 55;
            var10 = var26[var10];
            var10 = var33.bind(var4)(var10);
            var11 = var10.TextWithIOSLinkWorkaround;
            var10 = {'variant': 'text-md/semibold', 'color': 'text-default'};
            var35 = 'text-md/semibold';
            var13 = var26[var41];
            var13 = var33.bind(var4)(var13);
            var16 = var13.intl;
            var15 = var16.format;
            var13 = var26[var41];
            var13 = var33.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.AYGoBn;
            var13 = {};
            var39 = _closure1_slot1;
            var17 = 56;
            var17 = var26[var17];
            var19 = var39.bind(var4)(var17);
            var18 = var19.getArticleURL;
            var17 = _closure1_slot19;
            var17 = var17.FRACTIONAL_PREMIUM_ABOUT;
            var17 = var18.bind(var19)(var17);
            var13['helpCenterLink'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var12 = _closure1_slot30;
            var11 = _closure1_slot8;
            var10 = {};
            var17 = 57;
            var13 = var26[var17];
            var13 = var33.bind(var4)(var13);
            var14 = var13.Card;
            var13 = {'style': null, 'start': true, 'end': false, 'variant': 'primary'};
            var15 = var29.fpRowStart;
            var13['style'] = var15;
            var18 = _closure1_slot29;
            var16 = _closure1_slot8;
            var15 = {};
            var19 = var29.fpRowIcon;
            var15['style'] = var19;
            var23 = _closure1_slot29;
            var19 = 58;
            var19 = var26[var19];
            var20 = var39.bind(var4)(var19);
            var19 = {};
            var24 = {};
            var27 = 6;
            var24['padding'] = var27;
            var38 = 19;
            var27 = var26[var38];
            var27 = var39.bind(var4)(var27);
            var27 = var27.radii;
            var27 = var27.sm;
            var24['borderRadius'] = var27;
            var19['style'] = var24;
            var24 = {'x': 0, 'y': 0};
            var19['start'] = var24;
            var24 = {'x': 0, 'y': 1};
            var19['end'] = var24;
            var24 = var26[var38];
            var24 = var39.bind(var4)(var24);
            var24 = var24.unsafe_rawColors;
            var27 = var24.GUILD_BOOSTING_BLUE;
            var24 = new Array(2);
            var24[0] = var27;
            var27 = var26[var38];
            var27 = var39.bind(var4)(var27);
            var27 = var27.unsafe_rawColors;
            var27 = var27.GUILD_BOOSTING_PURPLE;
            var24[1] = var27;
            var19['colors'] = var24;
            var32 = _closure1_slot29;
            var27 = _closure1_slot8;
            var24 = {};
            var37 = 59;
            var34 = var26[var37];
            var34 = var33.bind(var4)(var34);
            var36 = var34.Icon;
            var34 = {};
            var38 = var26[var38];
            var38 = var39.bind(var4)(var38);
            var38 = var38.unsafe_rawColors;
            var38 = var38.WHITE;
            var34['color'] = var38;
            var38 = 60;
            var38 = var26[var38];
            var38 = var39.bind(var4)(var38);
            var34['source'] = var38;
            var37 = var26[var37];
            var37 = var33.bind(var4)(var37);
            var37 = var37.IconSizes;
            var37 = var37.LARGE;
            var34['size'] = var37;
            var34 = var32.bind(var4)(var36, var34);
            var24['children'] = var34;
            var24 = var32.bind(var4)(var27, var24);
            var19['children'] = var24;
            var19 = var23.bind(var4)(var20, var19);
            var15['children'] = var19;
            var16 = var18.bind(var4)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var19 = _closure1_slot30;
            var18 = _closure1_slot8;
            var16 = {};
            var20 = var29.fpRowContent;
            var16['style'] = var20;
            var24 = _closure1_slot29;
            var20 = var26[var30];
            var20 = var33.bind(var4)(var20);
            var23 = var20.Text;
            var20 = {};
            var27 = 'text-sm/semibold';
            var20['variant'] = var27;
            var27 = var29.fpUnitsTitle;
            var20['style'] = var27;
            var27 = var26[var41];
            var27 = var33.bind(var4)(var27);
            var32 = var27.intl;
            var27 = var32.string;
            var26 = var26[var41];
            var26 = var33.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.DFMPWS;
            var26 = var27.bind(var32)(var26);
            var20['children'] = var26;
            var23 = var24.bind(var4)(var23, var20);
            var20 = new Array(2);
            var20[0] = var23;
            if(!var22) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var24 = var21.fractionalState;
            var23 = _closure1_slot25;
            var23 = var23.NONE;
            if(!(var24 !== var23)) { _fun0006_ip = 74; continue _fun0006 }
case 72:
            var26 = _closure1_slot29;
            var34 = _closure1_slot0;
            var27 = _closure1_slot2;
            var23 = var27[var30];
            var23 = var34.bind(var4)(var23);
            var24 = var23.Text;
            var23 = {};
            var32 = 'text-sm/medium';
            var23['variant'] = var32;
            var32 = var29.fpUnitsStatusText;
            var23['style'] = var32;
            var32 = var27[var41];
            var32 = var34.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var27 = var27[var41];
            var27 = var34.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.B66Z+f;
            var27 = var32.bind(var33)(var27);
            var23['children'] = var27;
            var23 = var26.bind(var4)(var24, var23);
            _fun0006_ip = 75; continue _fun0006;
case 74:
            var27 = _closure1_slot29;
            var26 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var30];
            var24 = var26.bind(var4)(var24);
            var26 = var24.Text;
            var24 = {};
            var32 = 'text-sm/medium';
            var24['variant'] = var32;
            var24['children'] = var28;
            var23 = var27.bind(var4)(var26, var24);
case 75:
            var20[1] = var23;
            var16['children'] = var20;
            var16 = var19.bind(var4)(var18, var16);
            var15[1] = var16;
            var13['children'] = var15;
            var14 = var12.bind(var4)(var14, var13);
            var13 = new Array(3);
            var13[0] = var14;
            var16 = _closure1_slot29;
            var15 = _closure1_slot8;
            var14 = {};
            var18 = var29.dividerContainer;
            var14['style'] = var18;
            var20 = _closure1_slot29;
            var19 = _closure1_slot8;
            var18 = {};
            var23 = var29.divider;
            var18['style'] = var23;
            var18 = var20.bind(var4)(var19, var18);
            var14['children'] = var18;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var16 = _closure1_slot29;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var17];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Card;
            var14 = {'start': false, 'end': true, 'style': null, 'variant': 'secondary'};
            var17 = var29.fpRowEnd;
            var14['style'] = var17;
            var19 = _closure1_slot30;
            var18 = _closure1_slot8;
            var17 = {};
            var20 = var29.fpRowContent;
            var17['style'] = var20;
            if(!var22) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var23 = var21.fractionalState;
            var20 = _closure1_slot25;
            var20 = var20.NONE;
            if(!(var23 !== var20)) { _fun0006_ip = 78; continue _fun0006 }
case 76:
            var24 = _closure1_slot29;
            var33 = _closure1_slot0;
            var26 = _closure1_slot2;
            var20 = var26[var30];
            var20 = var33.bind(var4)(var20);
            var23 = var20.Text;
            var20 = {};
            var20['variant'] = var35;
            var27 = var29.fpTimeRemaining;
            var20['style'] = var27;
            var27 = var26[var41];
            var27 = var33.bind(var4)(var27);
            var32 = var27.intl;
            var27 = var32.string;
            var26 = var26[var41];
            var26 = var33.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26["3G0CTC"];
            var26 = var27.bind(var32)(var26);
            var20['children'] = var26;
            var23 = var24.bind(var4)(var23, var20);
            _fun0006_ip = 79; continue _fun0006;
case 78:
            var26 = _closure1_slot30;
            var24 = _closure1_slot8;
            var20 = {};
            var33 = _closure1_slot29;
            var37 = _closure1_slot0;
            var34 = _closure1_slot2;
            var27 = var34[var30];
            var27 = var37.bind(var4)(var27);
            var32 = var27.Text;
            var27 = {};
            var27['variant'] = var35;
            var35 = var34[var41];
            var35 = var37.bind(var4)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var34 = var34[var41];
            var34 = var37.bind(var4)(var34);
            var34 = var34.t;
            var34 = var34.hT6i/0;
            var34 = var35.bind(var36)(var34);
            var27['children'] = var34;
            var32 = var33.bind(var4)(var32, var27);
            var27 = new Array(2);
            var27[0] = var32;
            var32 = var4 !== var40;
            if(!var32) { _fun0006_ip = 80; continue _fun0006 }
case 81:
            var35 = _closure1_slot29;
            var37 = _closure1_slot0;
            var36 = _closure1_slot2;
            var33 = var36[var30];
            var33 = var37.bind(var4)(var33);
            var34 = var33.Text;
            var33 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var38 = var36[var41];
            var38 = var37.bind(var4)(var38);
            var39 = var38.intl;
            var38 = var39.format;
            var36 = var36[var41];
            var36 = var37.bind(var4)(var36);
            var36 = var36.t;
            var37 = var36["0Vwb/l"];
            var36 = {};
            var36['activateDate'] = var40;
            var36 = var38.bind(var39)(var37, var36);
            var33['children'] = var36;
            var32 = var35.bind(var4)(var34, var33);
case 80:
            var27[1] = var32;
            var20['children'] = var27;
            var23 = var26.bind(var4)(var24, var20);
case 79:
            var20 = new Array(2);
            var20[0] = var23;
            if(!var22) { _fun0006_ip = 82; continue _fun0006 }
case 46:
            var22 = var21.fractionalState;
            var21 = _closure1_slot25;
            var21 = var21.NONE;
            if(!(var22 !== var21)) { _fun0006_ip = 83; continue _fun0006 }
case 82:
            var23 = _closure1_slot29;
            var22 = _closure1_slot8;
            var21 = {};
            var24 = var29.fpTimeRemainingPill;
            var21['style'] = var24;
            var27 = _closure1_slot29;
            var26 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var30];
            var24 = var26.bind(var4)(var24);
            var26 = var24.Text;
            var24 = {};
            var32 = 'text-sm/medium';
            var24['variant'] = var32;
            var32 = var29.fpTimeRemainingText;
            var24['style'] = var32;
            var24['children'] = var31;
            var24 = var27.bind(var4)(var26, var24);
            var21['children'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            _fun0006_ip = 84; continue _fun0006;
case 83:
            var24 = _closure1_slot29;
            var23 = _closure1_slot8;
            var22 = {};
            var26 = var29.fpUnactivatedHoursPill;
            var22['style'] = var26;
            var27 = _closure1_slot29;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var30];
            var25 = var26.bind(var4)(var25);
            var26 = var25.Text;
            var25 = {};
            var30 = 'text-sm/medium';
            var25['variant'] = var30;
            var29 = var29.fpTimeRemainingText;
            var25['style'] = var29;
            var25['children'] = var28;
            var25 = var27.bind(var4)(var26, var25);
            var22['children'] = var25;
            var21 = var24.bind(var4)(var23, var22);
case 84:
            var20[1] = var21;
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[2] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var13.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var5 = var7[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.Image;
    var _closure1_slot6 = var5;
    var5 = var2.ImageBackground;
    var _closure1_slot7 = var5;
    var5 = var2.View;
    var _closure1_slot8 = var5;
    var5 = var2.ScrollView;
    var _closure1_slot9 = var5;
    var2 = var2.ActivityIndicator;
    var _closure1_slot10 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.AnalyticEvents;
    var _closure1_slot18 = var5;
    var5 = var2.HelpdeskArticles;
    var _closure1_slot19 = var5;
    var5 = var2.SubscriptionStatusTypes;
    var _closure1_slot20 = var5;
    var2 = var2.UserSettingsSections;
    var _closure1_slot21 = var2;
    var2 = 12;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.getTableDividerWidth;
    var _closure1_slot22 = var2;
    var2 = 13;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.useYouBarSettingsOutsideSafeAreaTop;
    var _closure1_slot23 = var2;
    var2 = 14;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.CustomCheckoutFlow;
    var _closure1_slot24 = var2;
    var2 = 15;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.FractionalPremiumStates;
    var _closure1_slot25 = var5;
    var5 = var2.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot26 = var5;
    var5 = var2.PremiumTypes;
    var _closure1_slot27 = var5;
    var2 = var2.SubscriptionPlanInfo;
    var _closure1_slot28 = var2;
    var14 = 16;
    var2 = var7[var14];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot29 = var5;
    var2 = var2.jsxs;
    var _closure1_slot30 = var2;
    var2 = 17;
    var2 = var7[var2];
    var8 = var13.bind(var1)(var2);
    var2 = var8.prototype;
    var5 = Object.create(var2, {constructor: {value: var8}});
    var18 = 'PremiumManagePlan';
    var19 = var5;
    var2 = new var19[var8](var18, var17);
    var2 = var2 instanceof Object ? var2 : var5;
    var _closure1_slot31 = var2;
    var5 = 18;
    var2 = var7[var5];
    var10 = var6.bind(var1)(var2);
    var9 = var10.createStyles;
    var8 = {};
    var2 = {};
    var12 = 19;
    var11 = var7[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var2['backgroundColor'] = var11;
    var11 = '100%';
    var2['height'] = var11;
    var8['background'] = var2;
    var2 = {};
    var11 = 'flex';
    var2['display'] = var11;
    var11 = var7[var12];
    var11 = var13.bind(var1)(var11);
    var11 = var11.modules;
    var11 = var11.mobile;
    var11 = var11.TABLE_ROW_PADDING;
    var2['paddingHorizontal'] = var11;
    var8['container'] = var2;
    var2 = 24;
    var11 = {'marginTop': 24, 'display': 'flex', 'gap': 12};
    var8['contentContainer'] = var11;
    var11 = {'position': 'absolute', 'zIndex': 5, 'top': 0, 'left': 0, 'right': 0};
    var8['topBlur'] = var11;
    var11 = {};
    var11['paddingHorizontal'] = var14;
    var8['accountCredit'] = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var11['borderRadius'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var11['backgroundColor'] = var15;
    var8['accountCreditList'] = var11;
    var11 = {};
    var11['paddingTop'] = var14;
    var8['featuresTable'] = var11;
    var11 = {'marginTop': 20, 'width': '100%'};
    var8['subscriptionHeader'] = var11;
    var11 = {'marginTop': 20, 'width': '100%'};
    var8['billingInfo'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot32 = var8;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var11 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 16, 'paddingVertical': 8, 'justifyContent': 'space-between'};
    var8['headerContainer'] = var11;
    var11 = {'width': 24, 'height': 24, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var11['borderRadius'] = var12;
    var8['backButtonWrapper'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot33 = var8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot22;
            var6 = undefined;
            var5 = var1.bind(var6)(var3);
            var1 = {};
            var2 = {'display': 'flex', 'flexDirection': 'column', 'gap': 12};
            var1['container'] = var2;
            var2 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var7 = 19;
            var10 = var8[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.colors;
            var10 = var10.BACKGROUND_SURFACE_HIGH;
            var2['backgroundColor'] = var10;
            var10 = var8[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.radii;
            var10 = var10.lg;
            var2['borderRadius'] = var10;
            var10 = 'hidden';
            var2['overflow'] = var10;
            var1['errorHeader'] = var2;
            var2 = {};
            var10 = 16;
            var2['padding'] = var10;
            var1['headerBackground'] = var2;
            var11 = 'row';
            var10 = 'center';
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 12};
            var1['logoContainer'] = var2;
            var2 = {'marginRight': 10, 'height': 36, 'width': 51};
            var1['wumpusImg'] = var2;
            var2 = {'height': 32, 'width': 78};
            var1['logoStyle'] = var2;
            var2 = {'marginBottom': 16, 'marginHorizontal': 16};
            var1['errorHeaderPrimaryButton'] = var2;
            var12 = 8;
            var2 = {'paddingTop': 16, 'paddingHorizontal': 16, 'display': 'flex', 'gap': 8};
            var1['extraInfoContainer'] = var2;
            var2 = {'padding': 16, 'borderRadius': null, 'backgroundColor': null, 'display': 'flex', 'gap': 18};
            var13 = var8[var7];
            var13 = var9.bind(var6)(var13);
            var13 = var13.radii;
            var13 = var13.sm;
            var2['borderRadius'] = var13;
            var13 = var8[var7];
            var13 = var9.bind(var6)(var13);
            var13 = var13.colors;
            var13 = var13.BACKGROUND_SURFACE_HIGH;
            var2['backgroundColor'] = var13;
            var1['extraInfoTextContainer'] = var2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'flex-start', 'gap': 8, 'padding': 16};
            var13 = var8[var7];
            var13 = var9.bind(var6)(var13);
            var13 = var13.radii;
            var13 = var13.lg;
            var2['borderRadius'] = var13;
            var13 = var8[var7];
            var13 = var9.bind(var6)(var13);
            var13 = var13.colors;
            var13 = var13.BACKGROUND_SURFACE_HIGH;
            var2['backgroundColor'] = var13;
            var1['mutationWarningContainer'] = var2;
            var2 = {};
            var13 = 1;
            var2['flex'] = var13;
            var1['mutationText'] = var2;
            var2 = {};
            var13 = var8[var7];
            var13 = var9.bind(var6)(var13);
            var13 = var13.colors;
            var13 = var13.TEXT_BRAND;
            var2['color'] = var13;
            var1['fpTimeRemaining'] = var2;
            var2 = {};
            var13 = var8[var7];
            var13 = var9.bind(var6)(var13);
            var13 = var13.radii;
            var13 = var13.lg;
            var2['borderRadius'] = var13;
            var13 = var8[var7];
            var13 = var9.bind(var6)(var13);
            var13 = var13.colors;
            var13 = var13.CONTROL_PRIMARY_BACKGROUND_ACTIVE;
            var2['backgroundColor'] = var13;
            var13 = 4;
            var2['paddingVertical'] = var13;
            var2['paddingHorizontal'] = var12;
            var1['fpTimeRemainingPill'] = var2;
            var2 = {};
            var14 = var8[var7];
            var14 = var9.bind(var6)(var14);
            var14 = var14.radii;
            var14 = var14.lg;
            var2['borderRadius'] = var14;
            var14 = var8[var7];
            var14 = var9.bind(var6)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_MOD_STRONG;
            var2['backgroundColor'] = var14;
            var2['paddingVertical'] = var13;
            var2['paddingHorizontal'] = var12;
            var1['fpUnactivatedHoursPill'] = var2;
            var2 = {};
            var12 = var8[var7];
            var12 = var9.bind(var6)(var12);
            var12 = var12.colors;
            var12 = var12.WHITE;
            var2['color'] = var12;
            var1['fpTimeRemainingText'] = var2;
            var2 = {};
            var12 = var8[var7];
            var12 = var9.bind(var6)(var12);
            var12 = var12.colors;
            var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
            var2['color'] = var12;
            var1['fpUnitsTitle'] = var2;
            var2 = {'color': null, 'marginStart': 18, 'flexShrink': 1};
            var12 = var8[var7];
            var12 = var9.bind(var6)(var12);
            var12 = var12.colors;
            var12 = var12.TEXT_BRAND;
            var2['color'] = var12;
            var1['fpUnitsStatusText'] = var2;
            var2 = {};
            var12 = var8[var7];
            var12 = var9.bind(var6)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.TABLE_ROW_PADDING;
            var2['padding'] = var12;
            var12 = var8[var7];
            var12 = var9.bind(var6)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.TABLE_ROW_HEIGHT;
            var2['minHeight'] = var12;
            var2['flexDirection'] = var11;
            var2['alignItems'] = var10;
            var10 = var8[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.colors;
            var10 = var10.BACKGROUND_SURFACE_HIGH;
            var2['backgroundColor'] = var10;
            var1['fpRowStart'] = var2;
            var2 = {};
            var10 = var8[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.TABLE_ROW_PADDING;
            var2['marginEnd'] = var10;
            var1['fpRowIcon'] = var2;
            var2 = {'flexShrink': 1, 'flexGrow': 1, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
            var1['fpRowContent'] = var2;
            var2 = {};
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.BACKGROUND_BASE_LOWEST;
            var2['backgroundColor'] = var8;
            var1['fpRowEnd'] = var2;
            var2 = {};
            var8 = undefined;
            if(var3) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 25;
            var9 = var11[var9];
            var9 = var10.bind(var6)(var9);
            var8 = var9.CARD_PRIMARY_BG;
case 85:
            var2['backgroundColor'] = var8;
            var2['height'] = var5;
            var1['dividerContainer'] = var2;
            var2 = {};
            var2['height'] = var5;
            if(var3) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 26;
            var3 = var8[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.DIVIDER_BACKGROUND;
            _fun0007_ip = 89; continue _fun0007;
case 87:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.colors;
            var3 = var4.BORDER_SUBTLE;
case 89:
            var2['backgroundColor'] = var3;
            var1['divider'] = var2;
            var2 = {};
            var3 = 'relative';
            var2['position'] = var3;
            var1['pillAndCardContainer'] = var2;
            var2 = {'position': 'absolute', 'top': 4294967278, 'left': 5, 'zIndex': 99};
            var1['pillPosition'] = var2;
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot34 = var5;
    var5 = 74;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/premium/native/PremiumManagePlan.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function PremiumManagePlan() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = _closure1_slot32;
            var4 = undefined;
            var21 = var1.bind(var4)();
            var11 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 61;
            var1 = var8[var1];
            var1 = var11.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var32 = var1.top;
            var13 = var1.bottom;
            var1 = _closure1_slot23;
            var33 = var1.bind(var4)();
            var7 = _closure1_slot0;
            var1 = 20;
            var1 = var8[var1];
            var2 = var7.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot0 = var1;
            var5 = _closure1_slot5;
            var3 = var5.useLayoutEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = var3.setOptions;
                var1 = {};
                var4 = false;
                var1['headerShown'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var5 = 31;
            var1 = var8[var5];
            var6 = var7.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot13;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot13;
                var1 = var2.isLoadedForPremiumSKUs;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var3.bind(var6)(var2, var1);
            var1 = var8[var5];
            var9 = var7.bind(var4)(var1);
            var6 = var9.useStateFromStoresArray;
            var1 = _closure1_slot14;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot14;
                var1 = var3.getPremiumTypeSubscription;
                var3 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var3;
                var3 = _closure1_slot14;
                var2 = var3.hasFetchedSubscriptions;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var6 = var6.bind(var9)(var2, var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var6, var1);
            var9 = 0;
            var24 = var2[var9];
            var1 = 1;
            var1 = var2[var1];
            var2 = var8[var5];
            var12 = var7.bind(var4)(var2);
            var10 = var12.useStateFromStores;
            var2 = _closure1_slot11;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var10.bind(var12)(var6, var2);
            var6 = 62;
            var6 = var8[var6];
            var10 = var11.bind(var4)(var6);
            var6 = {};
            var12 = true;
            var6['forceFetch'] = var12;
            var20 = var10.bind(var4)(var6);
            var6 = 63;
            var6 = var8[var6];
            var10 = var11.bind(var4)(var6);
            var6 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure1_slot14;
                    var2 = var3.hasFetchedSubscriptions;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0009_ip = 90; continue _fun0009 }
case 2:
                    var3 = _closure1_slot12;
                    var2 = var3.isSubscriptionFetching;
case 90:
                    if(var2) { _fun0009_ip = 9; continue _fun0009 }
case 91:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 35;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchSubscriptions;
                    var2 = var2.bind(var3)();
case 9:
                    var3 = _closure1_slot13;
                    var2 = var3.isLoadedForPremiumSKUs;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0009_ip = 92; continue _fun0009 }
case 4:
                    var4 = _closure1_slot13;
                    var3 = var4.isFetchingForPremiumSKUs;
                    var2 = var3.bind(var4)();
case 92:
                    if(var2) { _fun0009_ip = 93; continue _fun0009 }
case 67:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 64;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchPremiumSubscriptionPlans;
                    var1 = var1.bind(var2)();
case 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var10.bind(var4)(var6);
            var6 = 65;
            var6 = var8[var6];
            var10 = var7.bind(var4)(var6);
            var6 = var10.useIsInReverseTrial;
            var16 = var6.bind(var10)();
            var6 = 66;
            var10 = var8[var6];
            var11 = var11.bind(var4)(var10);
            var10 = var20.endsAt;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.CountDownMessageTypes;
            var6 = var6.SHORT_TIME;
            var27 = var11.bind(var4)(var10, var6);
            var6 = 40;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.getUnactivatedFractionalPremiumDurationString;
            var29 = var6.bind(var7)(var20);
            var6 = var29.length;
            var30 = var6 > var9;
            var22 = null;
            var28 = undefined;
            if(!(var22 !== var24)) { _fun0008_ip = 94; continue _fun0008 }
case 95:
            var6 = var24.isPurchasedExternally;
            var28 = undefined;
            if(var6) { _fun0008_ip = 94; continue _fun0008 }
case 96:
            var28 = var24.currentPeriodEnd;
case 94:
            var7 = var20.fractionalState;
            var6 = _closure1_slot25;
            var6 = var6.NONE;
            var15 = var7 !== var6;
            if(!var15) { _fun0008_ip = 97; continue _fun0008 }
case 98:
            var6 = var16;
            if(!var16) { _fun0008_ip = 99; continue _fun0008 }
case 100:
            var7 = var20.unactivatedUnits;
            var7 = var7.length;
            var7 = var7 > var9;
            var6 = !var7;
case 99:
            var15 = !var6;
case 97:
            if(var15) { _fun0008_ip = 101; continue _fun0008 }
case 102:
            var15 = var30;
case 101:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 32;
            var8 = var7[var8];
            var10 = var6.bind(var4)(var8);
            var8 = var10.useThemeContext;
            var8 = var8.bind(var10)();
            var8 = var8.theme;
            var12 = _closure1_slot5;
            var11 = var12.useRef;
            var10 = false;
            var10 = var11.bind(var12)(var10);
            var _closure2_slot1 = var10;
            var14 = _closure1_slot5;
            var12 = var14.useCallback;
            var11 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 67;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.trackIfScrolledToBottom;
                var1 = {};
                var4 = arg1;
                var4 = var4.nativeEvent;
                var1['nativeEvent'] = var4;
                var4 = 'your_nitro_plan';
                var1['trackedType'] = var4;
                var4 = _closure2_slot1;
                var1['hasTrackedScrolledToBottom'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = new Array(0);
            var10 = var12.bind(var14)(var11, var10);
            var5 = var7[var5];
            var14 = var6.bind(var4)(var5);
            var12 = var14.useStateFromStores;
            var5 = _closure1_slot15;
            var11 = new Array(1);
            var11[0] = var5;
            var5 = 68;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var35 = var5.areSetsEqual;
            var37 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot15;
                    var2 = var3.getForApplication;
                    var1 = _closure1_slot26;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    if(!(var2 == var1)) { _fun0010_ip = 103; continue _fun0010 }
case 104:
                    var2 = global;
                    var2 = var2.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var5 = var3;
                    var2 = new var5[var2](var4);
                    var1 = var2 instanceof Object ? var2 : var3;
case 103:
                    return var1;
                }
            };
            var36 = new Array(0);
            var39 = var14;
            var38 = var11;
            var23 = var39[var12](var38, var37, var36, var35, var34);
            var25 = var22 != var24;
            if(!var25) { _fun0008_ip = 105; continue _fun0008 }
case 106:
            var5 = var24.isBoostOnly;
            var25 = !var5;
case 105:
            if(!var25) { _fun0008_ip = 107; continue _fun0008 }
case 108:
            var25 = var3;
case 107:
            if(!var25) { _fun0008_ip = 109; continue _fun0008 }
case 110:
            var25 = var1;
case 109:
            var14 = var22 != var24;
            if(!var14) { _fun0008_ip = 111; continue _fun0008 }
case 112:
            var14 = var24.isBoostOnly;
case 111:
            if(!var14) { _fun0008_ip = 113; continue _fun0008 }
case 114:
            var14 = var3;
case 113:
            if(!var14) { _fun0008_ip = 115; continue _fun0008 }
case 116:
            var14 = var1;
case 115:
            var1 = var22 == var2;
            var17 = undefined;
            if(var1) { _fun0008_ip = 117; continue _fun0008 }
case 118:
            var17 = var2.premiumGroupRole;
case 117:
            var1 = var22 == var2;
            var18 = undefined;
            if(var1) { _fun0008_ip = 119; continue _fun0008 }
case 120:
            var1 = var2.isPremiumWithPremiumGroup;
            var18 = var1.bind(var2)();
case 119:
            var3 = _closure1_slot30;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var21.background;
            var1['style'] = var5;
            var7 = _closure1_slot29;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 69;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var11 = 0.2;
            var5['blurAmount'] = var11;
            var12 = var21.topBlur;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var26 = 0;
            if(var33) { _fun0008_ip = 121; continue _fun0008 }
case 122:
            var26 = var32;
case 121:
            var12['height'] = var26;
            var11[1] = var12;
            var5['style'] = var11;
            var5['blurTheme'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot30;
            var7 = _closure1_slot9;
            var6 = {};
            var12 = var21.container;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var26 = 16;
            if(var33) { _fun0008_ip = 123; continue _fun0008 }
case 124:
            var26 = var32;
case 123:
            var12['paddingTop'] = var26;
            var12['paddingBottom'] = var13;
            var11[1] = var12;
            var6['contentContainerStyle'] = var11;
            var6['onScrollEndDrag'] = var10;
            var6['onMomentumScrollEnd'] = var10;
            var6['scrollEventThrottle'] = var9;
            var11 = _closure1_slot29;
            var10 = _closure1_slot35;
            var9 = {};
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot30;
            var11 = _closure1_slot8;
            var10 = {};
            var13 = var21.contentContainer;
            var10['style'] = var13;
            var26 = var25;
            if(!var26) { _fun0008_ip = 125; continue _fun0008 }
case 126:
            var33 = _closure1_slot29;
            var32 = _closure1_slot36;
            var13 = {};
            var13['subscription'] = var24;
            var13['fractionalPremiumInfo'] = var20;
            var13['isPremiumGroup'] = var18;
            var13['premiumGroupRole'] = var17;
            var26 = var33.bind(var4)(var32, var13);
case 125:
            var13 = new Array(7);
            var13[0] = var26;
            if(!var16) { _fun0008_ip = 127; continue _fun0008 }
case 128:
            var33 = _closure1_slot29;
            var32 = _closure1_slot1;
            var34 = _closure1_slot2;
            var26 = 53;
            var26 = var34[var26];
            var32 = var32.bind(var4)(var26);
            var26 = {'premiumType': null, 'forFractionalPremium': true, 'hideButton': true};
            var34 = _closure1_slot27;
            var34 = var34.TIER_2;
            var26['premiumType'] = var34;
            var16 = var33.bind(var4)(var32, var26);
case 127:
            var13[1] = var16;
            var16 = var18;
            if(!var18) { _fun0008_ip = 129; continue _fun0008 }
case 130:
            var16 = !var25;
case 129:
            if(!var16) { _fun0008_ip = 131; continue _fun0008 }
case 132:
            var32 = _closure1_slot29;
            var26 = _closure1_slot1;
            var33 = _closure1_slot2;
            var25 = 53;
            var25 = var33[var25];
            var26 = var26.bind(var4)(var25);
            var25 = {'premiumType': null, 'hideButton': true, 'hidePrice': true, 'isPremiumGroup': true};
            var33 = _closure1_slot27;
            var33 = var33.TIER_2;
            var25['premiumType'] = var33;
            var25['premiumGroupRole'] = var17;
            var16 = var32.bind(var4)(var26, var25);
case 131:
            var13[2] = var16;
            if(!var15) { _fun0008_ip = 133; continue _fun0008 }
case 134:
            var26 = _closure1_slot29;
            var25 = _closure1_slot37;
            var16 = {};
            var16['fractionalPremiumInfo'] = var20;
            var33 = var20.fractionalState;
            var32 = _closure1_slot25;
            var32 = var32.FP_ONLY;
            var32 = var33 === var32;
            var16['showPremiumFeaturesCard'] = var32;
            var16['hasUnactivatedUnits'] = var30;
            var16['unactivatedHoursString'] = var29;
            var16['activationDate'] = var28;
            var16['durationText'] = var27;
            var15 = var26.bind(var4)(var25, var16);
case 133:
            var13[3] = var15;
            if(!var14) { _fun0008_ip = 135; continue _fun0008 }
case 136:
            var25 = _closure1_slot30;
            var16 = _closure1_slot8;
            var15 = {};
            var29 = _closure1_slot29;
            var28 = _closure1_slot1;
            var30 = _closure1_slot2;
            var26 = 49;
            var26 = var30[var26];
            var27 = var28.bind(var4)(var26);
            var26 = {};
            var32 = var21.subscriptionHeader;
            var26['style'] = var32;
            var31 = function onClickManagePremiumGuild() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.getState;
                    var1 = var1.bind(var3)();
                    var4 = var1.routes;
                    var3 = var4.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.name;
                        var1 = _closure1_slot21;
                        var1 = var1.GUILD_BOOSTING;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var1);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 70;
                    var5 = var7[var1];
                    var1 = undefined;
                    var9 = var6.bind(var1)(var5);
                    var6 = var9.setSection;
                    var8 = _closure1_slot21;
                    var5 = var8.GUILD_BOOSTING;
                    var5 = var6.bind(var9)(var5);
                    var6 = _closure1_slot0;
                    var5 = 71;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.trackUserSettingsPaneViewed;
                    var5 = {};
                    var8 = var8.GUILD_BOOSTING;
                    var5['destinationPane'] = var8;
                    var5 = var6.bind(var7)(var5);
                    var5 = null;
                    if(!(var5 == var4)) { _fun0011_ip = 137; continue _fun0011 }
case 138:
                    var6 = _closure2_slot0;
                    var5 = var6.push;
                    var3 = _closure1_slot21;
                    var3 = var3.GUILD_BOOSTING;
                    var3 = var5.bind(var6)(var3);
                    _fun0011_ip = 139; continue _fun0011;
case 137:
                    var3 = _closure2_slot0;
                    var2 = var3.navigate;
                    var2 = var2.bind(var3)(var4);
case 139:
                    return var1;
                }
            };
            var26['onClickManagePremiumGuild'] = var31;
            var26['subscription'] = var24;
            var27 = var29.bind(var4)(var27, var26);
            var26 = new Array(2);
            var26[0] = var27;
            var29 = _closure1_slot29;
            var27 = 51;
            var27 = var30[var27];
            var28 = var28.bind(var4)(var27);
            var27 = {};
            var30 = var21.billingInfo;
            var27['style'] = var30;
            var27['subscription'] = var24;
            var27 = var29.bind(var4)(var28, var27);
            var26[1] = var27;
            var15['children'] = var26;
            var14 = var25.bind(var4)(var16, var15);
case 135:
            var13[4] = var14;
            var16 = _closure1_slot29;
            var15 = _closure1_slot1;
            var25 = _closure1_slot2;
            var14 = 72;
            var14 = var25[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var25 = var21.accountCredit;
            var14['style'] = var25;
            var25 = var21.accountCreditList;
            var14['creditListContainerStyle'] = var25;
            var14['currentSubscription'] = var24;
            var14['entitlements'] = var23;
            var22 = var22 != var18;
            if(!var22) { _fun0008_ip = 140; continue _fun0008 }
case 43:
            var22 = var18;
case 140:
            var14['hasPremiumGroup'] = var22;
            var14 = var16.bind(var4)(var15, var14);
            var13[5] = var14;
            var16 = _closure1_slot29;
            var15 = _closure1_slot1;
            var25 = _closure1_slot2;
            var14 = 73;
            var14 = var25[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var21 = var21.featuresTable;
            var14['style'] = var21;
            var21 = 'nitro_home';
            var14['variant'] = var21;
            var24 = _closure1_slot0;
            var21 = 24;
            var22 = var25[var21];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var25[var21];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.QXx2gs;
            var21 = var22.bind(var23)(var21);
            var14['titleOverride'] = var21;
            var20 = var20.fractionalState;
            var19 = _closure1_slot25;
            var19 = var19.FP_ONLY;
            var19 = var20 === var19;
            var14['isFractionalOnly'] = var19;
            var14['isPremiumGroup'] = var18;
            var14['premiumGroupRole'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[6] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['BACK_BUTTON_SIZE'] = var2;
    return var1;
})();