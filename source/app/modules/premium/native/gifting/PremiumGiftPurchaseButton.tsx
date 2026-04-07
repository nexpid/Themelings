// app/modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function RewardPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var20 = var1.collectiblesItem;
            var19 = var1.currentUser;
            var11 = var1.gradientColors;
            var13 = var1.gradientAngle;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.insets;
            var2 = _closure1_slot14;
            var1 = var1.bottom;
            var10 = var2.bind(var5)(var1);
            var1 = _closure1_slot7;
            var1 = var1.bind(var5)(var20);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot6;
            var2 = var1.bind(var5)(var20);
            var12 = null;
            var1 = null;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot13;
            var3 = _closure1_slot12;
            var2 = {};
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 16;
            var6 = var14[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var14 = var10.selectedRewardBannerGradient;
            var6['style'] = var14;
            var14 = true;
            var6['useAngle'] = var14;
            var14 = var12 != var13;
            var12 = 90;
            if(!var14) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = var13;
case 6:
            var6['angle'] = var12;
            var12 = {'x': 0.5, 'y': 0.5};
            var6['angleCenter'] = var12;
            var6['colors'] = var11;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var11 = _closure1_slot11;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var10.singleAvatarContainer;
            var8['style'] = var12;
            var14 = _closure1_slot11;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 17;
            var12 = var16[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var15 = _closure1_slot0;
            var17 = 13;
            var17 = var16[var17];
            var17 = var15.bind(var5)(var17);
            var17 = var17.AvatarSizes;
            var17 = var17.NORMAL;
            var12['size'] = var17;
            var17 = var20.asset;
            var12['asset'] = var17;
            var12 = var14.bind(var5)(var13, var12);
            var8['children'] = var12;
            var8 = var11.bind(var5)(var9, var8);
            var6[1] = var8;
            var11 = _closure1_slot11;
            var8 = 14;
            var8 = var16[var8];
            var8 = var15.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'text-xs/medium', 'color': 'white'};
            var12 = var10.selectedRewardText;
            var8['style'] = var12;
            var12 = 15;
            var13 = var16[var12];
            var13 = var15.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.Rh4oem;
            var12 = var13.bind(var14)(var12);
            var8['children'] = var12;
            var8 = var11.bind(var5)(var9, var8);
            var6[2] = var8;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            _fun0001_ip = 8; continue _fun0001;
case 2:
            var4 = _closure1_slot13;
            var3 = _closure1_slot12;
            var2 = {};
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var6 = {};
            var11 = var10.nameplateWrapper;
            var6['style'] = var11;
            var16 = _closure1_slot11;
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 11;
            var11 = var14[var11];
            var12 = var15.bind(var5)(var11);
            var11 = {'nameplate': null, 'fullOpacity': true, 'animate': true};
            var13 = _closure1_slot0;
            var17 = 12;
            var17 = var14[var17];
            var18 = var13.bind(var5)(var17);
            var17 = var18.getNameplateData;
            var17 = var17.bind(var18)(var20);
            var11['nameplate'] = var17;
            var17 = true;
            var11 = var16.bind(var5)(var12, var11);
            var6['children'] = var11;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var11 = _closure1_slot11;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var10.singleAvatarContainer;
            var8['style'] = var12;
            var16 = _closure1_slot11;
            var18 = 13;
            var12 = var14[var18];
            var15 = var15.bind(var5)(var12);
            var12 = {};
            var12['user'] = var19;
            var12['guildId'] = var5;
            var18 = var14[var18];
            var18 = var13.bind(var5)(var18);
            var18 = var18.AvatarSizes;
            var18 = var18.SMALL;
            var12['size'] = var18;
            var12['aria-hidden'] = var17;
            var12 = var16.bind(var5)(var15, var12);
            var8['children'] = var12;
            var8 = var11.bind(var5)(var9, var8);
            var6[1] = var8;
            var9 = _closure1_slot11;
            var7 = 14;
            var7 = var14[var7];
            var7 = var13.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {};
            var10 = var10.selectedRewardText;
            var7['style'] = var10;
            var10 = 'text-xs/medium';
            var7['variant'] = var10;
            var10 = 15;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.Rh4oem;
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var _closure1_slot4 = var8;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isAvatarDecorationRecord;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isNameplateRecord;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.Fragment;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 9;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['paddingTop'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var9 = var7.PX_12;
        var7 = arg1;
        var7 = var9 + var7;
        var2['paddingBottom'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_8;
        var2['gap'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.shadows;
        var10 = var7.SHADOW_TOP_HIGH;
        var11 = var2;
        var7 = copyDataProperties(var11, var10);
        var1['container'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'height': 52, 'borderRadius': null, 'overflow': 'hidden'};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.sm;
        var2['borderRadius'] = var7;
        var1['chooseRewardContainer'] = var2;
        var2 = {'flex': 1, 'marginStart': null, 'marginEnd': 50};
        var7 = 1;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_8;
        var2['marginStart'] = var9;
        var1['chooseRewardText'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'opacity': 1};
        var1['backgroundImage'] = var2;
        var2 = {'width': 58, 'height': 58};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_8;
        var2['marginStart'] = var9;
        var1['inAppFlowImage'] = var2;
        var2 = {'flexDirection': 'row', 'paddingRight': 15, 'justifyContent': 'center', 'alignItems': 'center', 'marginLeft': 5};
        var1['singleAvatarContainer'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center'};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_16;
        var2['gap'] = var9;
        var1['selectedRewardRow'] = var2;
        var2 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'height': 52};
        var1['selectedRewardBannerContainer'] = var2;
        var2 = {};
        var8 = _closure1_slot4;
        var10 = var8.absoluteFillObject;
        var11 = var2;
        var8 = copyDataProperties(var11, var10);
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var9 = var8.sm;
        var8 = 'borderRadius';
        var2[7] = var9;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var9 = var8.PX_4;
        var8 = 'top';
        var2[7] = var9;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var9 = var8.PX_4;
        var8 = 'bottom';
        var2[7] = var9;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var9 = var8.PX_4;
        var8 = 'start';
        var2[7] = var9;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var9 = var8.PX_4;
        var8 = 'end';
        var2[7] = var9;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var9 = var8.PX_12;
        var8 = 'marginStart';
        var2[7] = var9;
        var1['selectedRewardBannerGradient'] = var2;
        var2 = {};
        var2['flex'] = var7;
        var1['selectedRewardText'] = var2;
        var2 = {'position': 'absolute', 'left': 0, 'right': 0, 'top': 0, 'bottom': 0, 'borderRadius': null, 'overflow': 'hidden'};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.radii;
        var3 = var3.sm;
        var2['borderRadius'] = var3;
        var1['nameplateWrapper'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumGiftPurchaseButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.defaultSelection;
            var _closure2_slot0 = var1;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.insets;
            var2 = _closure1_slot14;
            var1 = var1.bottom;
            var22 = var2.bind(var4)(var1);
            var3 = _closure1_slot0;
            var1 = 18;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot1 = var1;
            var1 = 19;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useNativeGiftContext;
            var2 = var1.bind(var2)();
            var1 = var2.onPurchase;
            var _closure2_slot2 = var1;
            var11 = var2.isPurchasing;
            var9 = var2.productId;
            var1 = var2.allRewards;
            var _closure2_slot3 = var1;
            var12 = var2.claimableRewards;
            var _closure2_slot4 = var12;
            var14 = var2.selectedGiftingPromotionReward;
            var _closure2_slot5 = var14;
            var1 = var2.setSelectedGiftingPromotionReward;
            var _closure2_slot6 = var1;
            var2 = var2.setCurrentAnalyticsStep;
            var _closure2_slot7 = var2;
            var2 = 20;
            var7 = var5[var2];
            var15 = var3.bind(var4)(var7);
            var13 = var15.useStateFromStores;
            var7 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var28 = var13.bind(var15)(var8, var7);
            var7 = 21;
            var7 = var5[var7];
            var8 = var3.bind(var4)(var7);
            var7 = var8.useCanPurchaseIAP;
            var9 = var7.bind(var8)(var9);
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getMarketingComponentByType;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 22;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.MarketingComponentType;
                    var1 = var1.GIFT_CUSTOMIZATION_BANNER;
                    var2 = var2.bind(var3)(var1);
                    var5 = null;
                    var3 = var5 == var2;
                    var1 = null;
                    if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var3 = var2.properties;
                    var3 = var3.properties;
                    var4 = var3.oneofKind;
                    var3 = 'giftCustomizationBanner';
                    var1 = null;
                    if(!(var3 === var4)) { _fun0003_ip = 9; continue _fun0003 }
case 3:
                    var2 = var2.properties;
                    var2 = var2.properties;
                    var1 = var2.giftCustomizationBanner;
case 9:
                    return var1;
                }
            };
            var26 = var5.bind(var7)(var3, var2);
            var27 = null;
            var5 = var27 != var12;
            if(!var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = var12.length;
            var2 = 0;
            var5 = var3 > var2;
case 11:
            _closure2_slot8 = var5;
            var20 = var27 != var12;
            if(!var20) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = var12.length;
            var2 = 1;
            var20 = var2 === var3;
case 13:
            _closure2_slot9 = var20;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 23;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var15 = var2.bind(var4)();
            var7 = var15;
            if(!var15) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var7 = var27 == var14;
case 15:
            _closure2_slot10 = var7;
            var2 = function navigateToRewardSelection(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = arg1;
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var3 = _closure2_slot7;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 24;
                    var2 = var7[var2];
                    var8 = undefined;
                    var2 = var4.bind(var8)(var2);
                    var2 = var2.PaymentFlowStep;
                    var2 = var2.REWARD_SKU_SELECT;
                    var2 = var3.bind(var8)(var2);
                    var7 = null;
                    if(!(var7 == var5)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var5 = _closure2_slot0;
case 19:
                    var4 = _closure2_slot1;
                    var3 = var4.navigate;
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 25;
                    var1 = var9[var1];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.PremiumGiftScreens;
                    var2 = var1.REWARD_SELECT;
                    var1 = {};
                    var1['defaultHighlightedReward'] = var5;
                    var5 = _closure2_slot3;
                    if(!(var7 == var5)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var5 = new Array(0);
                    _fun0004_ip = 23; continue _fun0004;
case 21:
                    var5 = _closure2_slot3;
case 23:
                    var1['allRewards'] = var5;
                    var5 = _closure2_slot4;
                    if(!(var7 == var5)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var5 = new Array(0);
                    _fun0004_ip = 26; continue _fun0004;
case 24:
                    var5 = _closure2_slot4;
case 26:
                    var1['claimableRewards'] = var5;
                    var5 = function onSelect(arg1) {
                        var4 = _closure2_slot6;
                        var1 = undefined;
                        var3 = arg1;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure2_slot1;
                        var3 = var4.navigate;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 25;
                        var2 = var6[var2];
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.PremiumGiftScreens;
                        var2 = var2.CUSTOMIZATION;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onSelect'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot11 = var2;
            var8 = _closure1_slot3;
            var3 = var8.useEffect;
            var2 = new Array(3);
            var2[0] = var20;
            var2[1] = var12;
            var2[2] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot4;
                    var1 = 0;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var8)(var1, var2);
            var1 = var27 == var26;
            var19 = undefined;
            if(var1) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var1 = var26.gradient;
            var2 = var27 == var1;
            var19 = undefined;
            if(var2) { _fun0002_ip = 29; continue _fun0002 }
case 31:
            var19 = var1.colors;
case 29:
            if(!(var27 == var19)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var19 = new Array(0);
case 32:
            var1 = var19.length;
            var2 = 0;
            var25 = var19;
            if(!(!(var1 > var2))) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var8 = global;
            var16 = var8.String;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 9;
            var1 = var13[var3];
            var1 = var12.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_BRAND;
            var16 = var16.bind(var4)(var1);
            var1 = new Array(2);
            var1[0] = var16;
            var8 = var8.String;
            var3 = var13[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BRAND;
            var3 = var8.bind(var4)(var3);
            var1[1] = var3;
            var25 = var1;
case 34:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 26;
            var1 = var8[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useFetchCollectiblesProduct;
            var1 = var1.bind(var3)(var14);
            var1 = var1.product;
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var16 = 15;
            var8 = var3[var16];
            var8 = var12.bind(var4)(var8);
            var13 = var8.intl;
            var8 = var13.string;
            var3 = var3[var16];
            var3 = var12.bind(var4)(var3);
            var3 = var3.t;
            if(var7) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var12 = var3.ouo4FK;
            var12 = var8.bind(var13)(var12);
            _fun0002_ip = 38; continue _fun0002;
case 36:
            var3 = var3.gNZY/B;
            var12 = var8.bind(var13)(var3);
case 38:
            var13 = 'active';
            if(!var7) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var13 = 'primary';
case 39:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var17 = 27;
            var3 = var3[var17];
            var18 = var8.bind(var4)(var3);
            var8 = var18.useThemeAndReducedMotionAwareAssetUrl;
            var21 = var27 == var26;
            var3 = undefined;
            if(var21) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var3 = var26.mobileBackgroundAsset;
case 41:
            var31 = var8.bind(var18)(var3);
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var17];
            var17 = var8.bind(var4)(var3);
            var8 = var17.useThemeAndReducedMotionAwareAssetUrl;
            var18 = var27 == var26;
            var3 = undefined;
            if(var18) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var3 = var26.asset;
case 43:
            var32 = var8.bind(var17)(var3);
            var3 = var27 == var1;
            var29 = undefined;
            if(var3) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var1 = var1.items;
            var29 = var1[var2];
case 45:
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = var22.container;
            var1['style'] = var8;
            var8 = var7;
            if(!var8) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var8 = var5;
case 47:
            if(!var8) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var18 = _closure1_slot13;
            var17 = _closure1_slot1;
            var21 = _closure1_slot2;
            var5 = 16;
            var5 = var21[var5];
            var17 = var17.bind(var4)(var5);
            var5 = {};
            var21 = var22.chooseRewardContainer;
            var5['style'] = var21;
            var21 = true;
            var5['useAngle'] = var21;
            var21 = var27 == var26;
            var23 = undefined;
            if(var21) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var21 = var26.gradient;
            var24 = var27 == var21;
            var23 = undefined;
            if(var24) { _fun0002_ip = 51; continue _fun0002 }
case 53:
            var23 = var21.angle;
case 51:
            var24 = var27 != var23;
            var21 = 90;
            if(!var24) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var21 = var23;
case 54:
            var5['angle'] = var21;
            var21 = {'x': 0.5, 'y': 0.5};
            var5['angleCenter'] = var21;
            var5['colors'] = var19;
            var21 = var27 != var31;
            if(!var21) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var24 = _closure1_slot11;
            var23 = _closure1_slot1;
            var30 = _closure1_slot2;
            var19 = 28;
            var19 = var30[var19];
            var23 = var23.bind(var4)(var19);
            var19 = {};
            var30 = var22.backgroundImage;
            var19['style'] = var30;
            var30 = 'cover';
            var19['resizeMode'] = var30;
            var30 = {};
            var30['uri'] = var31;
            var19['source'] = var30;
            var21 = var24.bind(var4)(var23, var19);
case 56:
            var19 = new Array(3);
            var19[0] = var21;
            var21 = var27 != var32;
            if(!var21) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var30 = _closure1_slot11;
            var24 = _closure1_slot1;
            var31 = _closure1_slot2;
            var23 = 28;
            var23 = var31[var23];
            var24 = var24.bind(var4)(var23);
            var23 = {};
            var31 = var22.inAppFlowImage;
            var23['style'] = var31;
            var31 = 'contain';
            var23['resizeMode'] = var31;
            var31 = {};
            var31['uri'] = var32;
            var23['source'] = var31;
            var21 = var30.bind(var4)(var24, var23);
case 58:
            var19[1] = var21;
            var24 = _closure1_slot11;
            var33 = _closure1_slot0;
            var30 = _closure1_slot2;
            var21 = 14;
            var21 = var30[var21];
            var21 = var33.bind(var4)(var21);
            var23 = var21.Text;
            var21 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'white'};
            var31 = var22.chooseRewardText;
            var21['style'] = var31;
            var31 = var30[var16];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var30[var16];
            var30 = var33.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.cMiNit;
            var30 = var31.bind(var32)(var30);
            var21['children'] = var30;
            var21 = var24.bind(var4)(var23, var21);
            var19[2] = var21;
            var5['children'] = var19;
            var8 = var18.bind(var4)(var17, var5);
case 49:
            var5 = new Array(4);
            var5[0] = var8;
            var8 = var27 != var29;
            if(!var8) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var8 = var15;
case 60:
            if(!var8) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var8 = var27 != var14;
case 62:
            if(!var8) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var17 = _closure1_slot13;
            var15 = _closure1_slot5;
            var14 = {};
            var18 = var22.selectedRewardRow;
            var14['style'] = var18;
            var21 = _closure1_slot11;
            var19 = _closure1_slot5;
            var18 = {};
            var22 = var22.selectedRewardBannerContainer;
            var18['style'] = var22;
            var24 = _closure1_slot11;
            var23 = _closure1_slot15;
            var22 = {};
            var22['collectiblesItem'] = var29;
            var22['currentUser'] = var28;
            var22['gradientColors'] = var25;
            var28 = var27 == var26;
            var25 = undefined;
            if(var28) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var26 = var26.gradient;
            var27 = var27 == var26;
            var25 = undefined;
            if(var27) { _fun0002_ip = 66; continue _fun0002 }
case 68:
            var25 = var26.angle;
case 66:
            var22['gradientAngle'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var18['children'] = var22;
            var19 = var21.bind(var4)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = !var20;
            if(var20) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var22 = _closure1_slot11;
            var26 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 29;
            var20 = var23[var20];
            var20 = var26.bind(var4)(var20);
            var21 = var20.IconButton;
            var20 = {'variant': 'tertiary', 'size': 'sm'};
            var28 = 'sm';
            var27 = _closure1_slot11;
            var24 = 30;
            var24 = var23[var24];
            var24 = var26.bind(var4)(var24);
            var25 = var24.PencilIcon;
            var24 = {};
            var24['size'] = var28;
            var24 = var27.bind(var4)(var25, var24);
            var20['icon'] = var24;
            var24 = var23[var16];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var23[var16];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.bt75uw;
            var23 = var24.bind(var25)(var23);
            var20['accessibilityLabel'] = var23;
            var23 = function onPress() {
                var3 = _closure2_slot11;
                var2 = _closure2_slot5;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var20['onPress'] = var23;
            var19 = var22.bind(var4)(var21, var20);
case 69:
            var18[1] = var19;
            var14['children'] = var18;
            var8 = var17.bind(var4)(var15, var14);
case 64:
            var5[1] = var8;
            var7 = !var7;
            if(!var7) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            var15 = _closure1_slot11;
            var17 = _closure1_slot0;
            var22 = _closure1_slot2;
            var8 = 31;
            var8 = var22[var8];
            var8 = var17.bind(var4)(var8);
            var14 = var8.TextWithIOSLinkWorkaround;
            var8 = {};
            var18 = 'text-sm/normal';
            var8['variant'] = var18;
            var18 = var22[var16];
            var18 = var17.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.format;
            var16 = var22[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.hYoGUM;
            var16 = {};
            var21 = _closure1_slot1;
            var20 = 32;
            var20 = var22[var20];
            var22 = var21.bind(var4)(var20);
            var21 = var22.getArticleURL;
            var20 = _closure1_slot10;
            var20 = var20.PAID_TERMS;
            var20 = var21.bind(var22)(var20);
            var16['paidURL'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var8['children'] = var16;
            var7 = var15.bind(var4)(var14, var8);
case 71:
            var5[2] = var7;
            var8 = _closure1_slot11;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 33;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var6['loading'] = var11;
            var6['variant'] = var13;
            var6['text'] = var12;
            var9 = !var9;
            if(var9) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var9 = var11;
case 73:
            var6['disabled'] = var9;
            var9 = undefined;
            if(var11) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var9 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 34;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot10;
                    if(!var3) { _fun0006_ip = 77; continue _fun0006 }
case 78:
                    var3 = _closure2_slot8;
                    if(var3) { _fun0006_ip = 19; continue _fun0006 }
case 77:
                    var4 = _closure2_slot2;
                    var3 = function() {
                        var4 = _closure2_slot1;
                        var3 = var4.navigate;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.PremiumGiftScreens;
                        var2 = var2.SUCCESS;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var3 = var4.bind(var1)(var3);
                    _fun0006_ip = 79; continue _fun0006;
case 19:
                    var2 = _closure2_slot11;
                    var2 = var2.bind(var1)();
case 79:
                    return var1;
                }
            };
case 75:
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();