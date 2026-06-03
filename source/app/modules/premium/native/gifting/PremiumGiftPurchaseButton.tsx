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
            var18 = var1.collectiblesItem;
            var19 = var1.currentUser;
            var11 = var1.gradientColors;
            var13 = var1.gradientAngle;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.insets;
            var2 = _closure1_slot15;
            var1 = var1.bottom;
            var10 = var2.bind(var5)(var1);
            var1 = _closure1_slot8;
            var1 = var1.bind(var5)(var18);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot7;
            var2 = var1.bind(var5)(var18);
            var12 = null;
            var1 = null;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot14;
            var3 = _closure1_slot13;
            var2 = {};
            var9 = _closure1_slot12;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 17;
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
            var11 = _closure1_slot12;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var10.singleAvatarContainer;
            var8['style'] = var12;
            var14 = _closure1_slot12;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 18;
            var12 = var16[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var15 = _closure1_slot0;
            var17 = 14;
            var17 = var16[var17];
            var17 = var15.bind(var5)(var17);
            var17 = var17.AvatarSizes;
            var17 = var17.NORMAL;
            var12['size'] = var17;
            var17 = var18.asset;
            var12['asset'] = var17;
            var12 = var14.bind(var5)(var13, var12);
            var8['children'] = var12;
            var8 = var11.bind(var5)(var9, var8);
            var6[1] = var8;
            var11 = _closure1_slot12;
            var8 = 15;
            var8 = var16[var8];
            var8 = var15.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'text-xs/medium', 'color': 'white'};
            var12 = var10.selectedRewardText;
            var8['style'] = var12;
            var12 = 16;
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
            var4 = _closure1_slot14;
            var3 = _closure1_slot13;
            var2 = {};
            var9 = _closure1_slot12;
            var8 = _closure1_slot5;
            var6 = {};
            var11 = var10.nameplateWrapper;
            var6['style'] = var11;
            var15 = _closure1_slot12;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 12;
            var11 = var14[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {'nameplate': null, 'fullOpacity': true, 'animate': true};
            var13 = _closure1_slot0;
            var16 = 13;
            var16 = var14[var16];
            var17 = var13.bind(var5)(var16);
            var16 = var17.getNameplateData;
            var16 = var16.bind(var17)(var18);
            var11['nameplate'] = var16;
            var17 = true;
            var11 = var15.bind(var5)(var12, var11);
            var6['children'] = var11;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var11 = _closure1_slot12;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var10.singleAvatarContainer;
            var8['style'] = var12;
            var16 = _closure1_slot12;
            var18 = 14;
            var12 = var14[var18];
            var12 = var13.bind(var5)(var12);
            var15 = var12.Avatar;
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
            var9 = _closure1_slot12;
            var7 = 15;
            var7 = var14[var7];
            var7 = var13.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {};
            var10 = var10.selectedRewardText;
            var7['style'] = var10;
            var10 = 'text-xs/medium';
            var7['variant'] = var10;
            var10 = 16;
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
    var _closure1_slot16 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isAvatarDecorationRecord;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isNameplateRecord;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.Fragment;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 10;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_12;
        var2['paddingTop'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var9 = var8.PX_12;
        var8 = arg1;
        var8 = var9 + var8;
        var2['paddingBottom'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_16;
        var2['paddingHorizontal'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var2['gap'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.shadows;
        var13 = var8.SHADOW_TOP_HIGH;
        var14 = var2;
        var8 = copyDataProperties(var14, var13);
        var1['container'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'height': 52};
        var1['chooseRewardContainer'] = var2;
        var2 = {};
        var8 = _closure1_slot4;
        var13 = var8.absoluteFillObject;
        var14 = var2;
        var7 = copyDataProperties(var14, var13);
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.sm;
        var9 = 'borderRadius';
        var2[8] = var7;
        var10 = 'hidden';
        var7 = 'overflow';
        var2[6] = var10;
        var1['gradientBackdrop'] = var2;
        var2 = {};
        var7 = 1;
        var2['flex'] = var7;
        var10 = var6[var3];
        var10 = var5.bind(var4)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_8;
        var2['marginStart'] = var10;
        var1['chooseRewardText'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'opacity': 1};
        var1['backgroundImage'] = var2;
        var2 = {'width': 58, 'height': 58};
        var10 = var6[var3];
        var10 = var5.bind(var4)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_8;
        var2['marginStart'] = var10;
        var1['inAppFlowImage'] = var2;
        var2 = {'width': 86, 'height': 86};
        var11 = {};
        var10 = '-4deg';
        var11['rotate'] = var10;
        var10 = new Array(2);
        var10[0] = var11;
        var11 = {};
        var12 = -11;
        var11['translateY'] = var12;
        var10[1] = var11;
        var2['transform'] = var10;
        var1['inAppFlowImageLargeTilted'] = var2;
        var2 = {'flexDirection': 'row', 'paddingRight': 15, 'justifyContent': 'center', 'alignItems': 'center', 'marginLeft': 5};
        var1['singleAvatarContainer'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center'};
        var10 = var6[var3];
        var10 = var5.bind(var4)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_16;
        var2['gap'] = var10;
        var1['selectedRewardRow'] = var2;
        var2 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'height': 52};
        var1['selectedRewardBannerContainer'] = var2;
        var2 = {};
        var13 = var8.absoluteFillObject;
        var14 = var2;
        var8 = copyDataProperties(var14, var13);
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.sm;
        var2[8] = var8;
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
    var _closure1_slot15 = var4;
    var4 = 40;
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
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var1 = var2[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.insets;
            var3 = _closure1_slot15;
            var1 = var1.bottom;
            var22 = var3.bind(var4)(var1);
            var3 = _closure1_slot0;
            var1 = 19;
            var1 = var2[var1];
            var5 = var3.bind(var4)(var1);
            var1 = var5.useNavigation;
            var1 = var1.bind(var5)();
            var _closure2_slot1 = var1;
            var1 = 20;
            var1 = var2[var1];
            var5 = var3.bind(var4)(var1);
            var1 = var5.useNativeGiftContext;
            var5 = var1.bind(var5)();
            var1 = var5.onPurchase;
            var _closure2_slot2 = var1;
            var11 = var5.isPurchasing;
            var9 = var5.productId;
            var1 = var5.allRewards;
            var _closure2_slot3 = var1;
            var13 = var5.claimableRewards;
            var _closure2_slot4 = var13;
            var8 = var5.selectedGiftingPromotionReward;
            var _closure2_slot5 = var8;
            var1 = var5.setSelectedGiftingPromotionReward;
            var _closure2_slot6 = var1;
            var5 = var5.setCurrentAnalyticsStep;
            var _closure2_slot7 = var5;
            var12 = 21;
            var5 = var2[var12];
            var15 = var3.bind(var4)(var5);
            var14 = var15.useStateFromStores;
            var5 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var32 = var14.bind(var15)(var7, var5);
            var5 = 22;
            var5 = var2[var5];
            var7 = var3.bind(var4)(var5);
            var5 = var7.useCanPurchaseIAP;
            var9 = var5.bind(var7)(var9);
            var2 = var2[var12];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getMarketingComponentByType;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 23;
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
            var28 = var5.bind(var7)(var3, var2);
            var18 = null;
            var2 = var18 == var28;
            var3 = undefined;
            if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = var28.assetVariant;
case 11:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 24;
            var2 = var7[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.GiftCustomizationBanner_AssetVariant;
            var2 = var2.LARGE_TILTED;
            var25 = var3 === var2;
            var15 = var18 != var13;
            if(!var15) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = var13.length;
            var2 = 0;
            var15 = var3 > var2;
case 13:
            _closure2_slot8 = var15;
            var20 = var18 != var13;
            if(!var20) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = var13.length;
            var2 = 1;
            var20 = var2 === var3;
case 15:
            _closure2_slot9 = var20;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 25;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var14 = var2.bind(var4)();
            var7 = var14;
            if(!var7) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var7 = var18 == var8;
case 17:
            _closure2_slot10 = var7;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 26;
            var5 = var2[var5];
            var5 = var3.bind(var4)(var5);
            var17 = var5.GiftingBadgeExperiment;
            var16 = var17.useConfig;
            var5 = {};
            var19 = 'PremiumGiftPurchaseButton';
            var5['location'] = var19;
            var5 = var16.bind(var17)(var5);
            var5 = var5.enabled;
            var2 = var2[var12];
            var16 = var3.bind(var4)(var2);
            var12 = var16.useStateFromStoresObject;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = {};
                var4 = _closure1_slot6;
                var8 = var4.getNextTier;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 27;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var3 = var3.BadgeId;
                var3 = var3.GIFTING;
                var3 = var8.bind(var4)(var3);
                var1['nextTier'] = var3;
                var3 = var4.getRemainingToNextTier;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.BadgeId;
                var2 = var2.GIFTING;
                var2 = var3.bind(var4)(var2);
                var1['giftsToNextTier'] = var2;
                return var1;
            };
            var2 = var12.bind(var16)(var3, var2);
            var17 = var2.nextTier;
            var19 = var2.giftsToNextTier;
            var2 = function navigateToRewardSelection(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = arg1;
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var3 = _closure2_slot7;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 28;
                    var2 = var7[var2];
                    var8 = undefined;
                    var2 = var4.bind(var8)(var2);
                    var2 = var2.PaymentFlowStep;
                    var2 = var2.REWARD_SKU_SELECT;
                    var2 = var3.bind(var8)(var2);
                    var7 = null;
                    if(!(var7 == var5)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var5 = _closure2_slot0;
case 21:
                    var4 = _closure2_slot1;
                    var3 = var4.navigate;
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 29;
                    var1 = var9[var1];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.PremiumGiftScreens;
                    var2 = var1.REWARD_SELECT;
                    var1 = {};
                    var1['defaultHighlightedReward'] = var5;
                    var5 = _closure2_slot3;
                    if(!(var7 == var5)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var5 = new Array(0);
                    _fun0004_ip = 25; continue _fun0004;
case 23:
                    var5 = _closure2_slot3;
case 25:
                    var1['allRewards'] = var5;
                    var5 = _closure2_slot4;
                    if(!(var7 == var5)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var5 = new Array(0);
                    _fun0004_ip = 28; continue _fun0004;
case 26:
                    var5 = _closure2_slot4;
case 28:
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
                        var2 = 29;
                        var2 = var6[var2];
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.PremiumGiftScreens;
                        var2 = var2.CUSTOMIZATION;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onSelect'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot11 = var2;
            var12 = _closure1_slot3;
            var3 = var12.useEffect;
            var2 = new Array(3);
            var2[0] = var20;
            var2[1] = var13;
            var2[2] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot4;
                    var1 = 0;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var12)(var1, var2);
            var1 = var18 == var28;
            var27 = undefined;
            if(var1) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var1 = var28.gradient;
            var2 = var18 == var1;
            var27 = undefined;
            if(var2) { _fun0002_ip = 31; continue _fun0002 }
case 33:
            var27 = var1.colors;
case 31:
            if(!(var18 == var27)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var27 = new Array(0);
case 34:
            var1 = var27.length;
            var2 = 0;
            var31 = var27;
            if(!(!(var1 > var2))) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var12 = global;
            var21 = var12.String;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 10;
            var1 = var16[var3];
            var1 = var13.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_BRAND;
            var21 = var21.bind(var4)(var1);
            var1 = new Array(2);
            var1[0] = var21;
            var12 = var12.String;
            var3 = var16[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BRAND;
            var3 = var12.bind(var4)(var3);
            var1[1] = var3;
            var31 = var1;
case 36:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 30;
            var1 = var12[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useFetchCollectiblesProduct;
            var1 = var1.bind(var3)(var8);
            var1 = var1.product;
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var16 = 16;
            var13 = var3[var16];
            var13 = var12.bind(var4)(var13);
            var21 = var13.intl;
            var13 = var21.string;
            var3 = var3[var16];
            var3 = var12.bind(var4)(var3);
            var3 = var3.t;
            if(var7) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var12 = var3.ouo4FK;
            var12 = var13.bind(var21)(var12);
            _fun0002_ip = 40; continue _fun0002;
case 38:
            var3 = var3.gNZY/B;
            var12 = var13.bind(var21)(var3);
case 40:
            var13 = 'active';
            if(!var7) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var13 = 'primary';
case 41:
            var21 = _closure1_slot0;
            var3 = _closure1_slot2;
            var23 = 31;
            var3 = var3[var23];
            var24 = var21.bind(var4)(var3);
            var21 = var24.useThemeAndReducedMotionAwareAssetUrl;
            var26 = var18 == var28;
            var3 = undefined;
            if(var26) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var3 = var28.mobileBackgroundAsset;
case 43:
            var30 = var21.bind(var24)(var3);
            var21 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var23];
            var23 = var21.bind(var4)(var3);
            var21 = var23.useThemeAndReducedMotionAwareAssetUrl;
            var24 = var18 == var28;
            var3 = undefined;
            if(var24) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var3 = var28.asset;
case 45:
            var24 = var21.bind(var23)(var3);
            var3 = var18 == var1;
            var33 = undefined;
            if(var3) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var1 = var1.items;
            var33 = var1[var2];
case 47:
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var21 = var22.container;
            var1['style'] = var21;
            if(!var7) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            if(var15) { _fun0002_ip = 51; continue _fun0002 }
case 49:
            if(!(var18 != var33)) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            if(!var14) { _fun0002_ip = 52; continue _fun0002 }
case 54:
            if(!(var18 == var8)) { _fun0002_ip = 55; continue _fun0002 }
case 52:
            var8 = null;
            if(!var5) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var5 = var18 != var17;
            var8 = null;
            if(!var5) { _fun0002_ip = 56; continue _fun0002 }
case 58:
            var15 = _closure1_slot12;
            var14 = _closure1_slot1;
            var21 = _closure1_slot2;
            var5 = 35;
            var5 = var21[var5];
            var14 = var14.bind(var4)(var5);
            var5 = {};
            var5['giftsToNextTier'] = var19;
            var21 = var17.name;
            var23 = var18 != var21;
            var19 = '';
            if(!var23) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var19 = var21;
case 59:
            var5['nextTierName'] = var19;
            var17 = var17.simple_icon_url;
            var5['nextTierIcon'] = var17;
            var8 = var15.bind(var4)(var14, var5);
case 56:
            _fun0002_ip = 61; continue _fun0002;
case 55:
            var15 = _closure1_slot14;
            var14 = _closure1_slot5;
            var5 = {};
            var17 = var22.selectedRewardRow;
            var5['style'] = var17;
            var21 = _closure1_slot12;
            var19 = _closure1_slot5;
            var17 = {};
            var23 = var22.selectedRewardBannerContainer;
            var17['style'] = var23;
            var29 = _closure1_slot12;
            var26 = _closure1_slot16;
            var23 = {};
            var23['collectiblesItem'] = var33;
            var23['currentUser'] = var32;
            var23['gradientColors'] = var31;
            var32 = var18 == var28;
            var31 = undefined;
            if(var32) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var32 = var28.gradient;
            var33 = var18 == var32;
            var31 = undefined;
            if(var33) { _fun0002_ip = 62; continue _fun0002 }
case 64:
            var31 = var32.angle;
case 62:
            var23['gradientAngle'] = var31;
            var23 = var29.bind(var4)(var26, var23);
            var17['children'] = var23;
            var19 = var21.bind(var4)(var19, var17);
            var17 = new Array(2);
            var17[0] = var19;
            var19 = !var20;
            if(var20) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var23 = _closure1_slot12;
            var32 = _closure1_slot0;
            var26 = _closure1_slot2;
            var20 = 33;
            var20 = var26[var20];
            var20 = var32.bind(var4)(var20);
            var21 = var20.IconButton;
            var20 = {'variant': 'tertiary', 'size': 'sm'};
            var34 = 'sm';
            var33 = _closure1_slot12;
            var29 = 34;
            var29 = var26[var29];
            var29 = var32.bind(var4)(var29);
            var31 = var29.PencilIcon;
            var29 = {};
            var29['size'] = var34;
            var29 = var33.bind(var4)(var31, var29);
            var20['icon'] = var29;
            var29 = var26[var16];
            var29 = var32.bind(var4)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var26 = var26[var16];
            var26 = var32.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.bt75uw;
            var26 = var29.bind(var31)(var26);
            var20['accessibilityLabel'] = var26;
            var26 = function onPress() {
                var3 = _closure2_slot11;
                var2 = _closure2_slot5;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var20['onPress'] = var26;
            var19 = var23.bind(var4)(var21, var20);
case 65:
            var17[1] = var19;
            var5['children'] = var17;
            var8 = var15.bind(var4)(var14, var5);
case 61:
            _fun0002_ip = 67; continue _fun0002;
case 51:
            var15 = _closure1_slot14;
            var14 = _closure1_slot5;
            var5 = {};
            var17 = var22.chooseRewardContainer;
            var5['style'] = var17;
            var20 = _closure1_slot14;
            var19 = _closure1_slot5;
            var17 = {};
            var21 = var22.gradientBackdrop;
            var17['style'] = var21;
            var21 = 'none';
            var17['pointerEvents'] = var21;
            var26 = _closure1_slot12;
            var23 = _closure1_slot1;
            var29 = _closure1_slot2;
            var21 = 17;
            var21 = var29[var21];
            var23 = var23.bind(var4)(var21);
            var21 = {};
            var29 = _closure1_slot4;
            var29 = var29.absoluteFillObject;
            var21['style'] = var29;
            var29 = true;
            var21['useAngle'] = var29;
            var31 = var18 == var28;
            var29 = undefined;
            if(var31) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var28 = var28.gradient;
            var31 = var18 == var28;
            var29 = undefined;
            if(var31) { _fun0002_ip = 68; continue _fun0002 }
case 70:
            var29 = var28.angle;
case 68:
            var31 = var18 != var29;
            var28 = 90;
            if(!var31) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            var28 = var29;
case 71:
            var21['angle'] = var28;
            var28 = {'x': 0.5, 'y': 0.5};
            var21['angleCenter'] = var28;
            var21['colors'] = var27;
            var23 = var26.bind(var4)(var23, var21);
            var21 = new Array(2);
            var21[0] = var23;
            var23 = var18 != var30;
            if(!var23) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var28 = _closure1_slot12;
            var27 = _closure1_slot1;
            var29 = _closure1_slot2;
            var26 = 32;
            var26 = var29[var26];
            var27 = var27.bind(var4)(var26);
            var26 = {};
            var29 = var22.backgroundImage;
            var26['style'] = var29;
            var29 = 'cover';
            var26['resizeMode'] = var29;
            var29 = {};
            var29['uri'] = var30;
            var26['source'] = var29;
            var23 = var28.bind(var4)(var27, var26);
case 73:
            var21[1] = var23;
            var17['children'] = var21;
            var19 = var20.bind(var4)(var19, var17);
            var17 = new Array(3);
            var17[0] = var19;
            var18 = var18 != var24;
            if(!var18) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var21 = _closure1_slot12;
            var20 = _closure1_slot1;
            var23 = _closure1_slot2;
            var19 = 32;
            var19 = var23[var19];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            var26 = var22.inAppFlowImage;
            var23 = new Array(2);
            var23[0] = var26;
            if(!var25) { _fun0002_ip = 77; continue _fun0002 }
case 78:
            var25 = var22.inAppFlowImageLargeTilted;
case 77:
            var23[1] = var25;
            var19['style'] = var23;
            var23 = 'contain';
            var19['resizeMode'] = var23;
            var23 = {};
            var23['uri'] = var24;
            var19['source'] = var23;
            var18 = var21.bind(var4)(var20, var19);
case 75:
            var17[1] = var18;
            var20 = _closure1_slot12;
            var24 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 15;
            var18 = var21[var18];
            var18 = var24.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'white'};
            var22 = var22.chooseRewardText;
            var18['style'] = var22;
            var22 = var21[var16];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var16];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.cMiNit;
            var21 = var22.bind(var23)(var21);
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var17[2] = var18;
            var5['children'] = var17;
            var8 = var15.bind(var4)(var14, var5);
case 67:
            var5 = new Array(3);
            var5[0] = var8;
            var7 = !var7;
            if(!var7) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            var15 = _closure1_slot12;
            var17 = _closure1_slot0;
            var22 = _closure1_slot2;
            var8 = 36;
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
            var20 = 37;
            var20 = var22[var20];
            var22 = var21.bind(var4)(var20);
            var21 = var22.getArticleURL;
            var20 = _closure1_slot11;
            var20 = var20.PAID_TERMS;
            var20 = var21.bind(var22)(var20);
            var16['paidURL'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var8['children'] = var16;
            var7 = var15.bind(var4)(var14, var8);
case 79:
            var5[1] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 38;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var6['loading'] = var11;
            var6['variant'] = var13;
            var6['text'] = var12;
            var9 = !var9;
            if(var9) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var9 = var11;
case 81:
            var6['disabled'] = var9;
            var9 = undefined;
            if(var11) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var9 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 39;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot10;
                    if(!var3) { _fun0006_ip = 85; continue _fun0006 }
case 86:
                    var3 = _closure2_slot8;
                    if(var3) { _fun0006_ip = 21; continue _fun0006 }
case 85:
                    var4 = _closure2_slot2;
                    var3 = function() {
                        var4 = _closure2_slot1;
                        var3 = var4.navigate;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.PremiumGiftScreens;
                        var2 = var2.SUCCESS;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var3 = var4.bind(var1)(var3);
                    _fun0006_ip = 87; continue _fun0006;
case 21:
                    var2 = _closure2_slot11;
                    var2 = var2.bind(var1)();
case 87:
                    return var1;
                }
            };
case 83:
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();