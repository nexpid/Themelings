// app/modules/user_settings/native/UserSettingsPremium.tsx
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
    var11 = 1;
    var8 = var6[var11];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityIndicator;
    var _closure1_slot5 = var8;
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot14 = var7;
    var7 = var4.AppStates;
    var _closure1_slot15 = var7;
    var7 = var4.UserSettingsSections;
    var _closure1_slot16 = var7;
    var10 = var4.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PremiumTypes;
    var _closure1_slot17 = var7;
    var4 = var4.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot19 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var11;
    var4['root'] = var9;
    var9 = {};
    var11 = 24;
    var9['paddingVertical'] = var11;
    var9['paddingHorizontal'] = var10;
    var4['container'] = var9;
    var9 = {'paddingVertical': 24, 'alignSelf': 'center', 'maxWidth': 600};
    var4['ipadContainer'] = var9;
    var9 = {};
    var11 = 16;
    var9['marginTop'] = var11;
    var9['marginHorizontal'] = var10;
    var4['subscriptionNotice'] = var9;
    var9 = {'alignSelf': 'center', 'position': 'absolute', 'top': 0};
    var4['topBackground'] = var9;
    var9 = {'alignSelf': 'center', 'position': 'absolute', 'bottom': 4294967262};
    var4['bottomBackground'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var4['policyHint'] = var9;
    var9 = {};
    var11 = 32;
    var9['marginTop'] = var11;
    var4['features'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var4['tier1'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var4['tier2'] = var9;
    var9 = {'marginTop': 16, 'paddingHorizontal': 0};
    var4['policy'] = var9;
    var9 = {'marginTop': 20, 'width': '100%'};
    var4['subscriptionHeader'] = var9;
    var9 = {'marginTop': 20, 'width': '100%'};
    var4['billingInfo'] = var9;
    var9 = {'marginTop': 20, 'paddingHorizontal': null, 'width': '100%'};
    var9['paddingHorizontal'] = var10;
    var4['accountCredit'] = var9;
    var9 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': '100%'};
    var4['loadingSpinnerContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot20 = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/UserSettingsPremium.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var22 = var2.applicationId;
            var _closure2_slot0 = var22;
            var1 = var2.activitySessionId;
            var _closure2_slot1 = var1;
            var1 = var2.channelId;
            var _closure2_slot2 = var1;
            var1 = var2.guildId;
            var _closure2_slot3 = var1;
            var1 = var2.isFromTextSection;
            var15 = var2.onClose;
            var18 = var2.premiumFeatureCardOrder;
            var16 = var2.onPaymentSuccess;
            var14 = var2.onPaymentDismiss;
            var6 = undefined;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var _closure2_slot6 = var6;
            var _closure2_slot7 = var6;
            var _closure2_slot8 = var6;
            var _closure2_slot9 = var6;
            var2 = _closure1_slot20;
            var8 = var2.bind(var6)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 13;
            var4 = var2[var4];
            var4 = var3.bind(var6)(var4);
            var4 = var4.bind(var6)();
            var4 = 14;
            var4 = var2[var4];
            var4 = var3.bind(var6)(var4);
            var4 = var4.bind(var6)();
            var25 = var4.bottom;
            var23 = 15;
            var2 = var2[var23];
            var4 = var3.bind(var6)(var2);
            if(var1) { _fun0001_ip = 175; continue _fun0001 }
 169:
            var1 = new Array(0);
            _fun0001_ip = 212; continue _fun0001;
 175:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var2 = var3.bind(var6)(var2);
            var3 = var2.TEXT_AND_IMAGES;
            var2 = new Array(1);
            var2[0] = var3;
            var1 = var2;
 212:
            var2 = new Array(1);
            var10 = 0;
            var33 = var2;
            var32 = var1;
            var31 = 0;
            var5 = arraySpread(var33, var32, var31);
            var9 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 16;
            var3 = var1[var3];
            var3 = var9.bind(var6)(var3);
            var3 = var3.PREMIUM_MARKETING;
            var2[var5] = var3;
            var3 = 1;
            var5 = var5 + var3;
            var2 = var4.bind(var6)(var2);
            var13 = var2.analyticsLocations;
            _closure2_slot4 = var13;
            var4 = _closure1_slot0;
            var2 = 17;
            var1 = var1[var2];
            var9 = var4.bind(var6)(var1);
            var5 = var9.useStateFromStores;
            var1 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getProps;
                    var1 = var1.bind(var2)();
                    var2 = var1.analyticsLocation;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 39; continue _fun0002 }
 34:
                    var1 = var2.section;
 39:
                    return var1;
                }
            };
            var5 = var5.bind(var9)(var4, var1);
            if(var5) { _fun0001_ip = 334; continue _fun0001 }
 330:
            var1 = {};
            _fun0001_ip = 344; continue _fun0001;
 334:
            var4 = {};
            var4['source_section'] = var5;
            var1 = var4;
 344:
            _closure2_slot5 = var1;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 18;
            var1 = var12[var1];
            var4 = var9.bind(var6)(var1);
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 19;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot14;
                var3 = var2.PREMIUM_MARKETING_PAGE_VIEWED;
                var2 = {};
                var7 = _closure2_slot0;
                var2['application_id'] = var7;
                var7 = _closure2_slot4;
                var2['location_stack'] = var7;
                var7 = _closure2_slot1;
                var2['activity_session_id'] = var7;
                var7 = _closure2_slot2;
                var2['channel_id'] = var7;
                var7 = _closure2_slot3;
                var2['guild_id'] = var7;
                var8 = _closure2_slot5;
                var9 = var2;
                var6 = copyDataProperties(var9, var8);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var4.bind(var6)(var1);
            var11 = _closure1_slot0;
            var1 = var12[var2];
            var17 = var11.bind(var6)(var1);
            var5 = var17.useStateFromStoresArray;
            var1 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot10;
                var1 = var3.getPremiumTypeSubscription;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.hasFetchedSubscriptions;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var5 = var5.bind(var17)(var4, var1);
            var4 = _closure1_slot3;
            var1 = 2;
            var1 = var4.bind(var6)(var5, var1);
            var24 = var1[var10];
            var3 = var1[var3];
            var1 = 20;
            var1 = var12[var1];
            var4 = var11.bind(var6)(var1);
            var1 = var4.useNavigation;
            var1 = var1.bind(var4)();
            _closure2_slot6 = var1;
            var1 = var12[var2];
            var17 = var11.bind(var6)(var1);
            var5 = var17.useStateFromStores;
            var1 = _closure1_slot12;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var17)(var4, var1);
            _closure2_slot7 = var5;
            var19 = _closure1_slot4;
            var1 = var19.useRef;
            var1 = var1.bind(var19)(var5);
            _closure2_slot8 = var1;
            var1 = var12[var2];
            var21 = var11.bind(var6)(var1);
            var20 = var21.useStateFromStores;
            var4 = _closure1_slot11;
            var17 = new Array(1);
            var17[0] = var4;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.hasFetchedForApplicationIds;
                var4 = _closure1_slot18;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var20.bind(var21)(var17, var1);
            var17 = var12[var2];
            var28 = var11.bind(var6)(var17);
            var26 = var28.useStateFromStores;
            var21 = new Array(1);
            var21[0] = var4;
            var4 = 21;
            var4 = var12[var4];
            var4 = var11.bind(var6)(var4);
            var30 = var4.areSetsEqual;
            var32 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot11;
                    var2 = var3.getForApplication;
                    var1 = _closure1_slot18;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    if(!(var2 == var1)) { _fun0003_ip = 56; continue _fun0003 }
 28:
                    var2 = global;
                    var2 = var2.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var5 = var3;
                    var2 = new var5[var2](var4);
                    var1 = var2 instanceof Object ? var2 : var3;
 56:
                    return var1;
                }
            };
            var31 = new Array(0);
            var34 = var28;
            var33 = var21;
            var17 = var34[var26](var33, var32, var31, var30, var29);
            var4 = var12[var2];
            var26 = var11.bind(var6)(var4);
            var21 = var26.useStateFromStores;
            var4 = _closure1_slot9;
            var20 = new Array(1);
            var20[0] = var4;
            var4 = function() {
                var2 = _closure1_slot9;
                var1 = var2.isLoadedForPremiumSKUs;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var21.bind(var26)(var20, var4);
            var2 = var12[var2];
            var26 = var11.bind(var6)(var2);
            var21 = var26.useStateFromStores;
            var2 = _closure1_slot13;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getProduct;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 22;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.ProductIds;
                var1 = var1.PREMIUM_TIER_2_MONTHLY;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var21.bind(var26)(var4, var2);
            var2 = 23;
            var2 = var12[var2];
            var26 = var9.bind(var6)(var2);
            var21 = var26.useExperiment;
            var9 = {};
            var2 = 'b539b8_1';
            var9['location'] = var2;
            var2 = {};
            var28 = false;
            var2['autoTrackExposure'] = var28;
            var2 = var21.bind(var26)(var9, var2);
            var2 = var2.paymentsBlocked;
            var26 = var19.useEffect;
            var21 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 24;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.wait;
                var3 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.init;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot0;
                var3 = 26;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.fetchUserEntitlementsForApplication;
                var2 = _closure1_slot18;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = new Array(0);
            var9 = var26.bind(var19)(var21, var9);
            var21 = var19.useEffect;
            var9 = new Array(1);
            var9[0] = var5;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot7;
                    var3 = _closure1_slot15;
                    var3 = var3.ACTIVE;
                    var3 = var4 === var3;
                    if(!var3) { _fun0004_ip = 50; continue _fun0004 }
 27:
                    var4 = _closure2_slot8;
                    var5 = var4.current;
                    var4 = _closure1_slot15;
                    var4 = var4.BACKGROUND;
                    var3 = var5 === var4;
 50:
                    if(!var3) { _fun0004_ip = 93; continue _fun0004 }
 53:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 24;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.wait;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.init;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
 93:
                    var2 = _closure2_slot8;
                    var1 = _closure2_slot7;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var21.bind(var19)(var5, var9);
            var5 = 27;
            var5 = var12[var5];
            var9 = var11.bind(var6)(var5);
            var5 = var9.usePremiumTrialOffer;
            var5 = var5.bind(var9)();
            _closure2_slot9 = var5;
            var9 = 28;
            var9 = var12[var9];
            var11 = var11.bind(var6)(var9);
            var9 = var11.usePremiumTrialOfferPremiumType;
            var12 = var9.bind(var11)();
            var11 = var19.useEffect;
            var9 = new Array(1);
            var9[0] = var5;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot9;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 53; continue _fun0005 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 29;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.acknowledgeUserTrialOffer;
                    var1 = _closure2_slot9;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var11.bind(var19)(var5, var9);
            var19 = null;
            var21 = var19 != var24;
            if(!var21) { _fun0001_ip = 875; continue _fun0001 }
 872:
            var21 = var20;
 875:
            if(!var21) { _fun0001_ip = 881; continue _fun0001 }
 878:
            var21 = var3;
 881:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 32;
            var5 = var11[var5];
            var9 = var9.bind(var6)(var5);
            var5 = var9.useHasTier2Premium;
            var11 = var5.bind(var9)();
            if(!(var19 != var4)) { _fun0001_ip = 924; continue _fun0001 }
 915:
            if(!var20) { _fun0001_ip = 924; continue _fun0001 }
 918:
            if(!var3) { _fun0001_ip = 924; continue _fun0001 }
 921:
            if(var1) { _fun0001_ip = 983; continue _fun0001 }
 924:
            var4 = _closure1_slot19;
            var3 = _closure1_slot6;
            var1 = {};
            var5 = var8.loadingSpinnerContainer;
            var1['style'] = var5;
            var9 = _closure1_slot5;
            var5 = {'animating': true, 'size': 'large'};
            var5 = var4.bind(var6)(var9, var5);
            var1['children'] = var5;
            var1 = var4.bind(var6)(var3, var1);
            _fun0001_ip = 1599; continue _fun0001;
 983:
            var5 = _closure1_slot19;
            if(var2) { _fun0001_ip = 1543; continue _fun0001 }
 993:
            var3 = _closure1_slot6;
            var2 = {};
            var9 = var8.root;
            var4 = new Array(2);
            var4[0] = var9;
            var9 = {};
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var26 = 40;
            var26 = var29[var26];
            var28 = var28.bind(var6)(var26);
            var26 = var28.isAndroid;
            var26 = var26.bind(var28)();
            var10 = 0;
            if(!var26) { _fun0001_ip = 1052; continue _fun0001 }
 1049:
            var10 = var25;
 1052:
            var9['marginBottom'] = var10;
            var4[1] = var9;
            var2['style'] = var4;
            var10 = _closure1_slot19;
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var23];
            var4 = var9.bind(var6)(var4);
            var9 = var4.AnalyticsLocationProvider;
            var4 = {};
            var4['value'] = var13;
            if(var11) { _fun0001_ip = 1484; continue _fun0001 }
 1103:
            var11 = _closure1_slot17;
            var11 = var11.TIER_0;
            if(!(var12 !== var11)) { _fun0001_ip = 1165; continue _fun0001 }
 1117:
            var11 = _closure1_slot17;
            var11 = var11.TIER_2;
            if(!(var12 === var11)) { _fun0001_ip = 1197; continue _fun0001 }
 1131:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 37;
            var11 = var13[var11];
            var11 = var12.bind(var6)(var11);
            var11 = var11.PremiumFeatureCardOrder;
            var18 = var11.TIER_2_LEADING;
            _fun0001_ip = 1197; continue _fun0001;
 1165:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 37;
            var11 = var13[var11];
            var11 = var12.bind(var6)(var11);
            var11 = var11.PremiumFeatureCardOrder;
            var18 = var11.TIER_0_LEADING;
 1197:
            var13 = _closure1_slot19;
            var12 = _closure1_slot1;
            var23 = _closure1_slot2;
            var11 = 38;
            var11 = var23[var11];
            var12 = var12.bind(var6)(var11);
            var11 = {};
            var11['applicationId'] = var22;
            var11['userHasSubscription'] = var21;
            var22 = var21;
            if(!var21) { _fun0001_ip = 1295; continue _fun0001 }
 1238:
            var26 = _closure1_slot19;
            var25 = _closure1_slot1;
            var28 = _closure1_slot2;
            var23 = 33;
            var23 = var28[var23];
            var25 = var25.bind(var6)(var23);
            var23 = {};
            var28 = var8.subscriptionHeader;
            var23['style'] = var28;
            var27 = function handleLearnMorePremiumGuild() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot6;
                    var1 = var3.getState;
                    var1 = var1.bind(var3)();
                    var4 = var1.routes;
                    var3 = var4.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.name;
                        var1 = _closure1_slot16;
                        var1 = var1.GUILD_BOOSTING;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var1);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 30;
                    var5 = var7[var1];
                    var1 = undefined;
                    var9 = var6.bind(var1)(var5);
                    var6 = var9.setSection;
                    var8 = _closure1_slot16;
                    var5 = var8.GUILD_BOOSTING;
                    var5 = var6.bind(var9)(var5);
                    var6 = _closure1_slot0;
                    var5 = 31;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.trackUserSettingsPaneViewed;
                    var5 = {};
                    var8 = var8.GUILD_BOOSTING;
                    var5['destinationPane'] = var8;
                    var5 = var6.bind(var7)(var5);
                    var5 = null;
                    if(!(var5 == var4)) { _fun0006_ip = 159; continue _fun0006 }
 133:
                    var6 = _closure2_slot6;
                    var5 = var6.push;
                    var3 = _closure1_slot16;
                    var3 = var3.GUILD_BOOSTING;
                    var3 = var5.bind(var6)(var3);
                    _fun0006_ip = 174; continue _fun0006;
 159:
                    var3 = _closure2_slot6;
                    var2 = var3.navigate;
                    var2 = var2.bind(var3)(var4);
 174:
                    return var1;
                }
            };
            var23['onClickManagePremiumGuild'] = var27;
            var23['subscription'] = var24;
            var22 = var26.bind(var6)(var25, var23);
 1295:
            var11['subscriptionDetails'] = var22;
            if(!var21) { _fun0001_ip = 1350; continue _fun0001 }
 1303:
            var25 = _closure1_slot19;
            var23 = _closure1_slot1;
            var26 = _closure1_slot2;
            var22 = 34;
            var22 = var26[var22];
            var23 = var23.bind(var6)(var22);
            var22 = {};
            var26 = var8.billingInfo;
            var22['style'] = var26;
            var22['subscription'] = var24;
            var21 = var25.bind(var6)(var23, var22);
 1350:
            var11['billingInfo'] = var21;
            if(!var20) { _fun0001_ip = 1410; continue _fun0001 }
 1358:
            var23 = _closure1_slot19;
            var22 = _closure1_slot1;
            var25 = _closure1_slot2;
            var21 = 35;
            var21 = var25[var21];
            var22 = var22.bind(var6)(var21);
            var21 = {};
            var25 = var8.accountCredit;
            var21['style'] = var25;
            var21['currentSubscription'] = var24;
            var21['entitlements'] = var17;
            var20 = var23.bind(var6)(var22, var21);
 1410:
            var11['accountCredit'] = var20;
            var11['onClose'] = var15;
            if(!(var19 == var18)) { _fun0001_ip = 1456; continue _fun0001 }
 1424:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var19 = 37;
            var19 = var21[var19];
            var19 = var20.bind(var6)(var19);
            var19 = var19.PremiumFeatureCardOrder;
            var18 = var19.TIER_2_LEADING;
 1456:
            var11['premiumFeatureCardOrder'] = var18;
            var11['entitlements'] = var17;
            var11['onPaymentSuccess'] = var16;
            var11['onPaymentDismiss'] = var14;
            var11 = var13.bind(var6)(var12, var11);
            _fun0001_ip = 1521; continue _fun0001;
 1484:
            var14 = _closure1_slot19;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 36;
            var12 = var16[var12];
            var13 = var13.bind(var6)(var12);
            var12 = {};
            var12['onClose'] = var15;
            var11 = var14.bind(var6)(var13, var12);
 1521:
            var4['children'] = var11;
            var4 = var10.bind(var6)(var9, var4);
            var2['children'] = var4;
            var2 = var5.bind(var6)(var3, var2);
            _fun0001_ip = 1596; continue _fun0001;
 1543:
            var4 = _closure1_slot7;
            var3 = {};
            var8 = var8.container;
            var3['style'] = var8;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 39;
            var7 = var9[var7];
            var8 = var8.bind(var6)(var7);
            var7 = {};
            var7 = var5.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 1596:
            var1 = var2;
 1599:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();