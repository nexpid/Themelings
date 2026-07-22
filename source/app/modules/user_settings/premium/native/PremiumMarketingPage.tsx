// app/modules/user_settings/premium/native/PremiumMarketingPage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FractionalPremiumStates;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'flex';
    var9['display'] = var10;
    var4['container'] = var9;
    var9 = {'flexDirection': 'column', 'alignItems': 'center', 'marginTop': 16};
    var4['scrollContainer'] = var9;
    var9 = {};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_DEFAULT;
    var9['tintColor'] = var10;
    var4['arrowIcon'] = var9;
    var9 = {'transform': null, 'position': 'absolute', 'left': 16};
    var11 = {};
    var10 = -1;
    var11['scaleX'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var9['transform'] = var10;
    var4['backButton'] = var9;
    var9 = {};
    var10 = 48;
    var9['marginTop'] = var10;
    var4['sectionWithTopMargin'] = var9;
    var9 = {};
    var10 = 12;
    var9['paddingHorizontal'] = var10;
    var4['sectionWithPadding'] = var9;
    var9 = {};
    var10 = 464;
    var9['maxWidth'] = var10;
    var4['sectionWidth'] = var9;
    var9 = {};
    var10 = '100%';
    var9['width'] = var10;
    var4['accountCreditContainer'] = var9;
    var9 = {'marginTop': 24, 'marginBottom': 20};
    var4['accountCreditContainerWithSpacing'] = var9;
    var9 = {};
    var10 = 9;
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var11 = var11.DARK_PRIMARY_700_LIGHT_WHITE_500;
    var9['backgroundColor'] = var11;
    var4['themedBackground'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.TIER_0_MARKETING_PAGE_BACK_BUTTON_BG;
    var9['backgroundColor'] = var10;
    var4['backButtonBackground'] = var9;
    var9 = {'marginBottom': 16, 'marginHorizontal': 'auto', 'textAlign': 'center'};
    var4['promotionCardHeader'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/premium/native/PremiumMarketingPage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumMarketingPage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var18 = var2.userHasSubscription;
            var _closure2_slot0 = var18;
            var20 = var2.subscriptionDetails;
            var16 = var2.billingInfo;
            var31 = var2.accountCredit;
            var28 = var2.applicationId;
            var1 = var2.onClose;
            var29 = var2.premiumFeatureCardOrder;
            var5 = var2.entitlements;
            var27 = var2.onPaymentSuccess;
            var25 = var2.onPaymentDismiss;
            var6 = var2.isFullScreenPresentation;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 10;
            var2 = var11[var2];
            var9 = var8.bind(var4)(var2);
            var3 = var9.useCommonTriggerPoint;
            var2 = 11;
            var2 = var11[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.OpenNitroTriggerPoint;
            var2 = var3.bind(var9)(var2);
            var2 = _closure1_slot12;
            var10 = var2.bind(var4)();
            var2 = 12;
            var2 = var11[var2];
            var3 = var8.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            _closure2_slot1 = var2;
            var9 = _closure1_slot1;
            var3 = 13;
            var3 = var11[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = var3.analyticsLocations;
            _closure2_slot2 = var3;
            var12 = _closure1_slot4;
            var3 = var12.useState;
            var14 = false;
            var13 = var3.bind(var12)(var14);
            var12 = _closure1_slot3;
            var3 = 2;
            var12 = var12.bind(var4)(var13, var3);
            var32 = 0;
            var3 = var12[var32];
            _closure2_slot3 = var3;
            var3 = 1;
            var3 = var12[var3];
            _closure2_slot4 = var3;
            var3 = 14;
            var3 = var11[var3];
            var8 = var8.bind(var4)(var3);
            var3 = var8.useYouBarSettingsCustomHeaderPaddingTop;
            var13 = var3.bind(var8)();
            var3 = 15;
            var3 = var11[var3];
            var3 = var9.bind(var4)(var3);
            var9 = var3.bind(var4)();
            var3 = var9.top;
            var26 = var9.bottom;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var3;
case 4:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 16;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.useConfig;
            var3 = {};
            var9 = 'PremiumMarketingPage';
            var3['location'] = var9;
            var3 = var6.bind(var8)(var3);
            var19 = var3.enabled;
            var8 = !var18;
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var19;
case 6:
            _closure2_slot5 = var8;
            var15 = _closure1_slot4;
            var3 = var15.useRef;
            var3 = var3.bind(var15)(var32);
            _closure2_slot6 = var3;
            var3 = var15.useRef;
            var3 = var3.bind(var15)(var32);
            _closure2_slot7 = var3;
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 17;
            var6 = var3[var6];
            var9 = var17.bind(var4)(var6);
            var6 = var9.useSharedValue;
            var11 = var6.bind(var9)(var14);
            _closure2_slot8 = var11;
            var12 = var15.useCallback;
            var9 = function(arg1) {
                var2 = _closure2_slot6;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.y;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6 = new Array(0);
            var24 = var12.bind(var15)(var9, var6);
            var12 = var15.useCallback;
            var9 = function(arg1) {
                var1 = arg1;
                var2 = _closure2_slot7;
                var3 = var1.nativeEvent;
                var3 = var3.layout;
                var3 = var3.y;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var1 = var3 + var1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6 = new Array(0);
            var23 = var12.bind(var15)(var9, var6);
            var9 = var15.useLayoutEffect;
            var6 = new Array(2);
            var6[0] = var2;
            var6[1] = var18;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = var3.setOptions;
                var1 = {};
                var4 = _closure2_slot0;
                var1['headerShown'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var9.bind(var15)(var2, var6);
            var2 = 18;
            var6 = var3[var2];
            var12 = var17.bind(var4)(var6);
            var6 = var12.usePromotionMarketingComponent;
            var9 = 19;
            var3 = var3[var9];
            var3 = var17.bind(var4)(var3);
            var3 = var3.MarketingComponentType;
            var3 = var3.PREMIUM_TAB;
            var3 = var6.bind(var12)(var3);
            _closure2_slot9 = var3;
            var12 = var15.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure2_slot9;
                    var3 = var3.properties;
                    var3 = var3.properties;
                    var4 = var3.oneofKind;
                    var3 = 'premiumTab';
                    var2 = var3 !== var4;
case 8:
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 20;
                    var3 = var8[var3];
                    var4 = undefined;
                    var6 = var7.bind(var4)(var3);
                    var5 = var6.UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
                    var3 = 21;
                    var3 = var8[var3];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.DismissibleContent;
                    var4 = var3.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
                    var3 = _closure2_slot9;
                    var3 = var3.promotionId;
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = var3.isDismissed;
case 10:
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 22;
                    var2 = var8[var2];
                    var3 = undefined;
                    var5 = var7.bind(var3)(var2);
                    var4 = var5.markSnowflakeBoundDismissibleContentAsDismissed;
                    var2 = 21;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.DismissibleContent;
                    var3 = var2.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
                    var1 = _closure2_slot9;
                    var2 = var1.promotionId;
                    var1 = {};
                    var6 = _closure1_slot8;
                    var6 = var6.AUTO_DISMISS;
                    var1['dismissAction'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var12.bind(var15)(var3, var6);
            var6 = null;
            if(!(var6 == var1)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = function() {
                var2 = _closure2_slot1;
                var1 = var2.pop;
                var1 = var1.bind(var2)();
                return var1;
            };
case 14:
            _closure2_slot10 = var1;
            var30 = !var18;
            if(!var30) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = _closure1_slot10;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = 23;
            var1 = var21[var15];
            var1 = var17.bind(var4)(var1);
            var3 = var1.CircularIconButton;
            var1 = {};
            var34 = var10.backButton;
            var22 = new Array(2);
            var22[0] = var34;
            var34 = var10.backButtonBackground;
            var22[1] = var34;
            var1['style'] = var22;
            var22 = 24;
            var34 = var21[var22];
            var34 = var17.bind(var4)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var22 = var21[var22];
            var22 = var17.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22["13/7kX"];
            var22 = var34.bind(var35)(var22);
            var1['accessibilityLabel'] = var22;
            var34 = _closure1_slot1;
            var22 = 25;
            var22 = var21[var22];
            var22 = var34.bind(var4)(var22);
            var1['source'] = var22;
            var15 = var21[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.CircularIconButton;
            var15 = var15.Sizes;
            var15 = var15.MEDIUM_32;
            var1['size'] = var15;
            var15 = var10.arrowIcon;
            var1['iconStyle'] = var15;
            var15 = function onPress() {
                var2 = _closure2_slot10;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1['onPress'] = var15;
            var30 = var12.bind(var4)(var3, var1);
case 16:
            var17 = var6 != var5;
            if(!var17) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 26;
            var1 = var12[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.hasAccountCredit;
            var17 = var1.bind(var3)(var5);
case 18:
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 27;
            var3 = var1[var3];
            var5 = var5.bind(var4)(var3);
            var3 = {};
            var12 = true;
            var3['forceFetch'] = var12;
            var22 = var5.bind(var4)(var3);
            var5 = _closure1_slot0;
            var3 = 28;
            var3 = var1[var3];
            var12 = var5.bind(var4)(var3);
            var3 = var12.useIsEligibleForBogoPromotion;
            var15 = var3.bind(var12)();
            var2 = var1[var2];
            var3 = var5.bind(var4)(var2);
            var2 = var3.usePromotionMarketingComponent;
            var1 = var1[var9];
            var1 = var5.bind(var4)(var1);
            var1 = var1.MarketingComponentType;
            var1 = var1.MARKETING_PAGE_BANNER;
            var21 = var2.bind(var3)(var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var9 = var10.container;
            var5 = new Array(3);
            var5[0] = var9;
            var9 = var10.themedBackground;
            var5[1] = var9;
            var9 = {};
            var12 = 0;
            if(var18) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var12 = var13;
case 20:
            var9['paddingTop'] = var12;
            var5[2] = var9;
            var1['style'] = var5;
            var12 = _closure1_slot10;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 29;
            var5 = var13[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var9 = var12.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            var13 = _closure1_slot11;
            var12 = _closure1_slot6;
            var9 = {};
            var34 = var10.scrollContainer;
            var9['contentContainerStyle'] = var34;
            var33 = function onScroll(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var5 = var1.layoutMeasurement;
                    var4 = var1.contentOffset;
                    var3 = var1.contentSize;
                    var2 = _closure2_slot3;
                    var2 = !var2;
                    if(!var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var6 = var5.height;
                    var5 = var4.y;
                    var5 = var6 + var5;
                    var3 = var3.height;
                    var2 = var5 >= var3;
case 22:
                    if(!var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 30;
                    var3 = var5[var3];
                    var5 = undefined;
                    var7 = var6.bind(var5)(var3);
                    var6 = var7.track;
                    var2 = _closure1_slot7;
                    var3 = var2.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM;
                    var2 = {};
                    var8 = _closure2_slot2;
                    var2['location_stack'] = var8;
                    var2 = var6.bind(var7)(var3, var2);
                    var3 = _closure2_slot4;
                    var2 = true;
                    var2 = var3.bind(var5)(var2);
case 24:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var2 = _closure2_slot6;
                    var3 = var2.current;
                    var2 = _closure2_slot7;
                    var2 = var2.current;
                    var5 = var3 + var2;
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var1 = 0;
                    var1 = var5 > var1;
                    if(!var1) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var4 = var4.y;
                    var1 = var4 > var5;
case 28:
                    var1 = var2.bind(var3)(var1);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onScroll'] = var33;
            var9['scrollEventThrottle'] = var32;
            var9['showsVerticalScrollIndicator'] = var14;
            var14 = new Array(12);
            var14[0] = var30;
            var14[1] = var20;
            var14[2] = var16;
            var16 = null;
            if(!var17) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var30 = _closure1_slot10;
            var20 = _closure1_slot5;
            var17 = {};
            var33 = var10.accountCreditContainer;
            var32 = new Array(2);
            var32[0] = var33;
            if(var18) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var33 = var10.accountCreditContainerWithSpacing;
            _fun0001_ip = 34; continue _fun0001;
case 32:
            var33 = {};
case 34:
            var32[1] = var33;
            var17['style'] = var32;
            var17['children'] = var31;
            var16 = var30.bind(var4)(var20, var17);
case 30:
            var14[3] = var16;
            var20 = _closure1_slot10;
            var17 = _closure1_slot1;
            var30 = _closure1_slot2;
            var16 = 31;
            var16 = var30[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            if(var18) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var31 = {};
            _fun0001_ip = 37; continue _fun0001;
case 35:
            var31 = var10.sectionWithTopMargin;
case 37:
            var30 = new Array(2);
            var30[0] = var31;
            var31 = var10.sectionWidth;
            var30[1] = var31;
            var16['style'] = var30;
            var16 = var20.bind(var4)(var17, var16);
            var14[4] = var16;
            var16 = var15;
            if(!var15) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var30 = _closure1_slot10;
            var20 = _closure1_slot5;
            var17 = {};
            var32 = var10.sectionWithPadding;
            var31 = new Array(2);
            var31[0] = var32;
            var32 = var10.sectionWidth;
            var31[1] = var32;
            var17['style'] = var31;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var31 = 32;
            var31 = var37[var31];
            var31 = var36.bind(var4)(var31);
            var32 = var31.Text;
            var31 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
            var33 = var10.promotionCardHeader;
            var31['style'] = var33;
            var33 = 24;
            var34 = var37[var33];
            var34 = var36.bind(var4)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var33 = var37[var33];
            var33 = var36.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33.QPC/ee;
            var33 = var34.bind(var35)(var33);
            var31['children'] = var33;
            var31 = var30.bind(var4)(var32, var31);
            var17['children'] = var31;
            var16 = var30.bind(var4)(var20, var17);
case 38:
            var14[5] = var16;
            if(!var15) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var20 = _closure1_slot10;
            var17 = _closure1_slot1;
            var30 = _closure1_slot2;
            var16 = 33;
            var16 = var30[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var31 = var10.sectionWithPadding;
            var30 = new Array(2);
            var30[0] = var31;
            var31 = var10.sectionWidth;
            var30[1] = var31;
            var16['style'] = var30;
            var16['applicationId'] = var28;
            var16['onPaymentSuccess'] = var27;
            var16['onPaymentDismiss'] = var25;
            var15 = var20.bind(var4)(var17, var16);
case 40:
            var14[6] = var15;
            var15 = var6 != var21;
            if(!var15) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var16 = var21.properties;
            var16 = var16.properties;
            var17 = var16.oneofKind;
            var16 = 'marketingPageBanner';
            var15 = var16 === var17;
case 42:
            if(!var15) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var20 = _closure1_slot10;
            var33 = _closure1_slot1;
            var34 = _closure1_slot2;
            var16 = 34;
            var16 = var34[var16];
            var17 = var33.bind(var4)(var16);
            var16 = {};
            var31 = var10.sectionWithPadding;
            var30 = new Array(3);
            var30[0] = var31;
            var31 = var10.sectionWidth;
            var30[1] = var31;
            var31 = {};
            var32 = 8;
            var32 = var34[var32];
            var32 = var33.bind(var4)(var32);
            var32 = var32.space;
            var32 = var32.PX_24;
            var31['marginBottom'] = var32;
            var30[2] = var31;
            var16['style'] = var30;
            var30 = var21.properties;
            var30 = var30.properties;
            var30 = var30.marketingPageBanner;
            var16['bannerFields'] = var30;
            var30 = 'Marketing Page Banner Tile';
            var16['analyticsPage'] = var30;
            var16['onPaymentSuccess'] = var27;
            var16['onPaymentDismiss'] = var25;
            var21 = var21.id;
            var16['componentId'] = var21;
            var15 = var20.bind(var4)(var17, var16);
case 44:
            var14[7] = var15;
            var17 = _closure1_slot10;
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 35;
            var15 = var20[var15];
            var21 = var16.bind(var4)(var15);
            var15 = {};
            var31 = var10.sectionWithPadding;
            var30 = new Array(2);
            var30[0] = var31;
            var31 = var10.sectionWidth;
            var30[1] = var31;
            var15['style'] = var30;
            var15['order'] = var29;
            var15['applicationId'] = var28;
            var15['onPaymentSuccess'] = var27;
            var15['onPaymentDismiss'] = var25;
            var15['onLayout'] = var24;
            var15['onFirstCardLayout'] = var23;
            var15 = var17.bind(var4)(var21, var15);
            var14[8] = var15;
            var15 = 36;
            var15 = var20[var15];
            var21 = var16.bind(var4)(var15);
            var15 = {};
            var24 = var10.sectionWithTopMargin;
            var23 = new Array(2);
            var23[0] = var24;
            var24 = var10.sectionWidth;
            var23[1] = var24;
            var15['style'] = var23;
            var15 = var17.bind(var4)(var21, var15);
            var14[9] = var15;
            var15 = 37;
            var15 = var20[var15];
            var21 = var16.bind(var4)(var15);
            var15 = {};
            var24 = var10.sectionWithTopMargin;
            var23 = new Array(3);
            var23[0] = var24;
            var24 = var10.sectionWithPadding;
            var23[1] = var24;
            var24 = var10.sectionWidth;
            var23[2] = var24;
            var15['style'] = var23;
            var23 = var22.fractionalState;
            var22 = _closure1_slot9;
            var22 = var22.FP_ONLY;
            var22 = var23 === var22;
            var15['isFractionalOnly'] = var22;
            var15 = var17.bind(var4)(var21, var15);
            var14[10] = var15;
            var15 = 38;
            var15 = var20[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var21 = var10.sectionWithTopMargin;
            var20 = new Array(4);
            var20[0] = var21;
            var21 = var10.sectionWithPadding;
            var20[1] = var21;
            var21 = var10.sectionWidth;
            var20[2] = var21;
            var21 = null;
            if(!var8) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var22 = {};
            var23 = global;
            var25 = var23.Math;
            var24 = var25.max;
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var23 = 8;
            var23 = var28[var23];
            var23 = var27.bind(var4)(var23);
            var23 = var23.space;
            var23 = var23.PX_16;
            var24 = var24.bind(var25)(var26, var23);
            var23 = 48;
            var23 = var24 + var23;
            var22['marginBottom'] = var23;
            var21 = var22;
case 46:
            var20[3] = var21;
            var15['style'] = var20;
            var18 = !var18;
            if(!var18) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var18 = !var19;
case 48:
            var15['showSubscribeButton'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[11] = var15;
            var9['children'] = var14;
            var9 = var13.bind(var4)(var12, var9);
            var5[1] = var9;
            var6 = null;
            if(!var8) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 39;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var12 = var10.sectionWidth;
            var7['style'] = var12;
            var7['isVisible'] = var11;
            var10 = var10.themedBackground;
            var10 = var10.backgroundColor;
            var7['backgroundColor'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 50:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();