// app/modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx
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
    var7 = var4.AnalyticEvents;
    var _closure1_slot7 = var7;
    var7 = var4.HelpdeskArticles;
    var _closure1_slot8 = var7;
    var4 = var4.HorizontalGradient;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 6;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_PRIMARY;
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
        var7 = 'row';
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'height': 60};
        var1['chooseRewardContainer'] = var2;
        var2 = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center', 'height': 55};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_12;
        var2['gap'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.radii;
        var9 = var9.sm;
        var2['borderRadius'] = var9;
        var1['selectedRewardContainer'] = var2;
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
        var2[var8] = var9;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var9 = var8.PX_4;
        var8 = 'top';
        var2[var8] = var9;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var9 = var8.PX_4;
        var8 = 'bottom';
        var2[var8] = var9;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var9 = var8.PX_4;
        var8 = 'start';
        var2[var8] = var9;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var9 = var8.PX_4;
        var8 = 'end';
        var2[var8] = var9;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var9 = var8.PX_12;
        var8 = 'marginStart';
        var2[var8] = var9;
        var1['promotionBannerGradient'] = var2;
        var2 = {'flex': 1, 'left': 4294967282};
        var1['chooseRewardText'] = var2;
        var2 = {'flex': 1, 'left': 4294967286};
        var1['chooseRemainingRewardsText'] = var2;
        var2 = {'flex': 1, 'padding': null, 'paddingStart': 0};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_4;
        var2['padding'] = var8;
        var1['rewardSelectedText'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.none;
        var2['borderTopLeftRadius'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.sm;
        var2['borderTopRightRadius'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.none;
        var2['borderBottomLeftRadius'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.sm;
        var2['borderBottomRightRadius'] = var8;
        var1['editButton'] = var2;
        var2 = {'width': 90, 'height': 60, 'left': 4294967286};
        var1['giftPromotionRewards'] = var2;
        var2 = {'width': 40, 'height': 25, 'left': 4294967286};
        var1['snowflakes'] = var2;
        var2 = {};
        var2['flexDirection'] = var7;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var2['paddingRight'] = var8;
        var1['singleAvatarContainer'] = var2;
        var2 = {};
        var2['flexDirection'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_8;
        var2['paddingRight'] = var7;
        var1['avatarContainer'] = var2;
        var2 = {'height': 40, 'top': 0};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BG_BRAND;
        var2['backgroundColor'] = var7;
        var1['promoAvatarStyle'] = var2;
        var2 = {'height': 40, 'top': 0, 'right': 10};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BUTTON_OUTLINE_POSITIVE_BORDER;
        var2['backgroundColor'] = var7;
        var1['promoSecondaryAvatarStyle'] = var2;
        var2 = {};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_4;
        var2['marginLeft'] = var3;
        var1['editRewardButton'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumGiftPurchaseButton() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.insets;
            var2 = _closure1_slot12;
            var1 = var1.bottom;
            var23 = var2.bind(var4)(var1);
            var1 = 8;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var34 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = 9;
            var1 = var5[var1];
            var7 = var2.bind(var4)(var1);
            var1 = var7.useNavigation;
            var1 = var1.bind(var7)();
            var _closure2_slot0 = var1;
            var1 = 10;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useNativeGiftContext;
            var2 = var1.bind(var2)();
            var1 = var2.onPurchase;
            var _closure2_slot1 = var1;
            var11 = var2.isPurchasing;
            var30 = var2.claimableRewards;
            var _closure2_slot2 = var30;
            var29 = var2.selectedGiftingPromotionReward;
            var _closure2_slot3 = var29;
            var1 = var2.setSelectedGiftingPromotionReward;
            var _closure2_slot4 = var1;
            var2 = var2.setCurrentAnalyticsStep;
            var _closure2_slot5 = var2;
            var2 = 11;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var26 = var2.bind(var4)();
            var25 = null;
            var5 = var25 != var30;
            if(!var5) { _fun0001_ip = 211; continue _fun0001 }
 200:
            var3 = var30.length;
            var2 = 0;
            var5 = var3 > var2;
 211:
            var _closure2_slot6 = var5;
            var19 = var25 != var30;
            if(!var19) { _fun0001_ip = 234; continue _fun0001 }
 222:
            var3 = var30.length;
            var2 = 1;
            var19 = var2 === var3;
 234:
            var _closure2_slot7 = var19;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var7 = var2;
            if(!var2) { _fun0001_ip = 272; continue _fun0001 }
 268:
            var7 = var25 == var29;
 272:
            var _closure2_slot8 = var7;
            var27 = var2;
            if(!var27) { _fun0001_ip = 286; continue _fun0001 }
 282:
            var27 = var25 != var29;
 286:
            var2 = function openRewardSelectionSheet(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot6;
                    if(!var1) { _fun0002_ip = 122; continue _fun0002 }
 12:
                    var7 = _closure2_slot5;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 13;
                    var2 = var6[var2];
                    var3 = undefined;
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.PaymentFlowStep;
                    var2 = var2.REWARD_SKU_SELECT;
                    var2 = var7.bind(var3)(var2);
                    var2 = _closure1_slot1;
                    var1 = 14;
                    var1 = var6[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = arg1;
                    var1['defaultHighlightedReward'] = var6;
                    var5 = _closure2_slot2;
                    var1['rewards'] = var5;
                    var5 = function onSelect(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var5 = arg1;
                            var3 = _closure1_slot6;
                            var1 = var3.getCurrentUser;
                            var9 = var1.bind(var3)();
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var3 = var3[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var3);
                            var6 = var7.track;
                            var3 = _closure1_slot7;
                            var4 = var3.GIFT_PROMOTION_REWARD_SELECTED;
                            var3 = {};
                            var8 = null;
                            var10 = var8 == var9;
                            var8 = undefined;
                            if(var10) { _fun0003_ip = 74; continue _fun0003 }
 69:
                            var8 = var9.id;
 74:
                            var3['user_id'] = var8;
                            var8 = var5.skuId;
                            var3['reward_sku_id'] = var8;
                            var3 = var6.bind(var7)(var4, var3);
                            var4 = _closure2_slot4;
                            var4 = var4.bind(var1)(var5);
                            var5 = _closure2_slot5;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 13;
                            var3 = var4[var3];
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.PaymentFlowStep;
                            var3 = var3.PLAN_SELECT;
                            var3 = var5.bind(var1)(var3);
                            var3 = _closure1_slot1;
                            var2 = 16;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                            return var1;
                        }
                    };
                    var1['onSelect'] = var5;
                    var4 = function onDismiss() {
                        var3 = _closure2_slot5;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.PaymentFlowStep;
                        var2 = var2.PLAN_SELECT;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onDismiss'] = var4;
                    var1 = var2.bind(var3)(var1);
 122:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot9 = var2;
            var8 = _closure1_slot3;
            var3 = var8.useEffect;
            var2 = new Array(3);
            var2[0] = var19;
            var2[1] = var30;
            var2[2] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0004_ip = 31; continue _fun0004 }
 10:
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot2;
                    var1 = 0;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var8)(var1, var2);
            var1 = var25 == var26;
            var9 = undefined;
            if(var1) { _fun0001_ip = 441; continue _fun0001 }
 344:
            var3 = var26.planSelectionBanner;
            var1 = var25 == var3;
            var9 = undefined;
            if(var1) { _fun0001_ip = 441; continue _fun0001 }
 359:
            var2 = var3.gradientConfig;
            var1 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 17;
            var8 = var13[var8];
            var14 = var12.bind(var4)(var8);
            var8 = var14.isThemeDark;
            var8 = var8.bind(var14)(var34);
            var1['isDarkMode'] = var8;
            var8 = 18;
            var8 = var13[var8];
            var12 = var12.bind(var4)(var8);
            var8 = var12.isAndroid;
            var8 = var8.bind(var12)();
            var1['isAndroid'] = var8;
            var1 = var2.bind(var3)(var1);
            var9 = var1.gradient;
 441:
            if(!(var25 == var9)) { _fun0001_ip = 449; continue _fun0001 }
 445:
            var9 = new Array(0);
 449:
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 19;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = var23.promotionBannerGradient;
            var1['style'] = var12;
            var12 = _closure1_slot9;
            var13 = var12.START;
            var1['start'] = var13;
            var12 = var12.END;
            var1['end'] = var12;
            var1['colors'] = var9;
            var18 = var3.bind(var4)(var2, var1);
            var13 = _closure1_slot0;
            var24 = 20;
            var1 = var8[var24];
            var1 = var13.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-sm/medium', 'color': 'text-normal'};
            var9 = var23.editRewardButton;
            var1['style'] = var9;
            var15 = 21;
            var9 = var8[var15];
            var9 = var13.bind(var4)(var9);
            var12 = var9.intl;
            var9 = var12.string;
            var8 = var8[var15];
            var8 = var13.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.bt75u7;
            var8 = var9.bind(var12)(var8);
            var1['children'] = var8;
            var22 = var3.bind(var4)(var2, var1);
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var15];
            var2 = var8.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var15];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            if(var7) { _fun0001_ip = 678; continue _fun0001 }
 665:
            var8 = var1.ouo4FB;
            var9 = var2.bind(var3)(var8);
            _fun0001_ip = 689; continue _fun0001;
 678:
            var1 = var1.Rp0+ZG;
            var9 = var2.bind(var3)(var1);
 689:
            var12 = 'active';
            if(!var7) { _fun0001_ip = 700; continue _fun0001 }
 696:
            var12 = 'primary';
 700:
            var1 = var25 == var26;
            var32 = undefined;
            if(var1) { _fun0001_ip = 730; continue _fun0001 }
 709:
            var1 = var26.planSelectionBanner;
            var2 = var25 == var1;
            var32 = undefined;
            if(var2) { _fun0001_ip = 730; continue _fun0001 }
 724:
            var32 = var1.getBackgroundImageUrl;
 730:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = var23.container;
            var1['style'] = var8;
            var8 = var7;
            if(!var8) { _fun0001_ip = 758; continue _fun0001 }
 755:
            var8 = var5;
 758:
            if(!var8) { _fun0001_ip = 1201; continue _fun0001 }
 764:
            var14 = _closure1_slot11;
            var13 = _closure1_slot5;
            var5 = {};
            var16 = var23.chooseRewardContainer;
            var5['style'] = var16;
            var16 = new Array(4);
            var16[0] = var18;
            var31 = _closure1_slot10;
            var28 = {};
            var20 = var23.avatarContainer;
            var17 = new Array(2);
            var17[0] = var20;
            var20 = var25 == var30;
            var21 = undefined;
            if(var20) { _fun0001_ip = 826; continue _fun0001 }
 821:
            var21 = var30.length;
 826:
            var20 = 1;
            var20 = var20 === var21;
            if(!var20) { _fun0001_ip = 842; continue _fun0001 }
 836:
            var20 = var23.singleAvatarContainer;
 842:
            var17[1] = var20;
            var28['style'] = var17;
            var21 = _closure1_slot10;
            var33 = _closure1_slot1;
            var17 = _closure1_slot2;
            var20 = 22;
            var20 = var17[var20];
            var36 = var33.bind(var4)(var20);
            var35 = {};
            var35['claimableRewards'] = var30;
            var20 = _closure1_slot0;
            var33 = 23;
            var33 = var17[var33];
            var33 = var20.bind(var4)(var33);
            var33 = var33.AvatarSizes;
            var33 = var33.NORMAL;
            var35['avatarSize'] = var33;
            var33 = false;
            var35['darkOverride'] = var33;
            var37 = var23.promoAvatarStyle;
            var35['promoAvatarStyle'] = var37;
            var37 = var23.promoSecondaryAvatarStyle;
            var35['promoSecondaryAvatarStyle'] = var37;
            var37 = var23.giftPromotionRewards;
            var35['promoRotatingStyle'] = var37;
            var35 = var21.bind(var4)(var36, var35);
            var28['children'] = var35;
            var28 = var31.bind(var4)(var13, var28);
            var16[1] = var28;
            var17 = var17[var24];
            var17 = var20.bind(var4)(var17);
            var20 = var17.Text;
            var17 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'black'};
            var31 = var23.chooseRewardText;
            var28 = new Array(2);
            var28[0] = var31;
            var31 = var30.length;
            var30 = 3;
            var30 = var31 < var30;
            if(!var30) { _fun0001_ip = 1037; continue _fun0001 }
 1031:
            var30 = var23.chooseRemainingRewardsText;
 1037:
            var28[1] = var30;
            var17['style'] = var28;
            var30 = var25 == var26;
            var28 = undefined;
            if(var30) { _fun0001_ip = 1082; continue _fun0001 }
 1056:
            var31 = var26.planSelectionBanner;
            var30 = var25 == var31;
            var28 = undefined;
            if(var30) { _fun0001_ip = 1082; continue _fun0001 }
 1071:
            var30 = var31.mobileBannerText;
            var28 = var30.bind(var31)(var33);
 1082:
            var17['children'] = var28;
            var17 = var21.bind(var4)(var20, var17);
            var16[2] = var17;
            var17 = var25 != var32;
            if(!var17) { _fun0001_ip = 1187; continue _fun0001 }
 1103:
            var28 = _closure1_slot10;
            var21 = _closure1_slot1;
            var35 = _closure1_slot2;
            var20 = 24;
            var20 = var35[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var30 = var23.snowflakes;
            var20['style'] = var30;
            var30 = {};
            var33 = _closure1_slot0;
            var31 = 17;
            var31 = var35[var31];
            var33 = var33.bind(var4)(var31);
            var31 = var33.isThemeDark;
            var31 = var31.bind(var33)(var34);
            var31 = var32.bind(var4)(var31);
            var30['uri'] = var31;
            var20['source'] = var30;
            var17 = var28.bind(var4)(var21, var20);
 1187:
            var16[3] = var17;
            var5['children'] = var16;
            var8 = var14.bind(var4)(var13, var5);
 1201:
            var5 = new Array(4);
            var5[0] = var8;
            var8 = var27;
            if(!var8) { _fun0001_ip = 1613; continue _fun0001 }
 1218:
            var16 = _closure1_slot11;
            var14 = _closure1_slot5;
            var13 = {};
            var17 = var23.selectedRewardContainer;
            var13['style'] = var17;
            var17 = new Array(4);
            var17[0] = var18;
            var21 = _closure1_slot10;
            var20 = _closure1_slot1;
            var31 = _closure1_slot2;
            var18 = 25;
            var18 = var31[var18];
            var20 = var20.bind(var4)(var18);
            var18 = {};
            var30 = _closure1_slot0;
            var28 = 23;
            var28 = var31[var28];
            var28 = var30.bind(var4)(var28);
            var28 = var28.AvatarSizes;
            var28 = var28.LARGE;
            var18['size'] = var28;
            var30 = var25 == var29;
            var28 = undefined;
            if(var30) { _fun0001_ip = 1319; continue _fun0001 }
 1313:
            var28 = var29.assetId;
 1319:
            var18['asset'] = var28;
            var18 = var21.bind(var4)(var20, var18);
            var17[1] = var18;
            var21 = _closure1_slot10;
            var20 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var24];
            var18 = var20.bind(var4)(var18);
            var20 = var18.Text;
            var18 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'black'};
            var24 = var23.rewardSelectedText;
            var18['style'] = var24;
            var28 = var25 == var26;
            var24 = undefined;
            if(var28) { _fun0001_ip = 1421; continue _fun0001 }
 1395:
            var26 = var26.planSelectionBanner;
            var25 = var25 == var26;
            var24 = undefined;
            if(var25) { _fun0001_ip = 1421; continue _fun0001 }
 1410:
            var25 = var26.mobileBannerText;
            var24 = var25.bind(var26)(var27);
 1421:
            var18['children'] = var24;
            var18 = var21.bind(var4)(var20, var18);
            var17[2] = var18;
            var18 = !var19;
            if(var19) { _fun0001_ip = 1599; continue _fun0001 }
 1444:
            var21 = _closure1_slot10;
            var24 = _closure1_slot0;
            var27 = _closure1_slot2;
            var19 = 26;
            var19 = var27[var19];
            var19 = var24.bind(var4)(var19);
            var20 = var19.BaseTextButton;
            var19 = {'pillStyle': null, 'size': 'lg', 'variant': 'tertiary'};
            var23 = var23.editButton;
            var19['pillStyle'] = var23;
            var23 = 27;
            var23 = var27[var23];
            var23 = var24.bind(var4)(var23);
            var24 = var23.PencilIcon;
            var23 = {};
            var25 = 'xs';
            var23['size'] = var25;
            var26 = _closure1_slot1;
            var25 = 6;
            var25 = var27[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.colors;
            var25 = var25.ICON_MUTED;
            var23['color'] = var25;
            var23 = var21.bind(var4)(var24, var23);
            var19['icon'] = var23;
            var19['textElement'] = var22;
            var22 = function onPress() {
                var3 = _closure2_slot9;
                var2 = _closure2_slot3;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var19['onPress'] = var22;
            var22 = 4;
            var19['scaleAmountInPx'] = var22;
            var18 = var21.bind(var4)(var20, var19);
 1599:
            var17[3] = var18;
            var13['children'] = var17;
            var8 = var16.bind(var4)(var14, var13);
 1613:
            var5[1] = var8;
            var7 = !var7;
            if(!var7) { _fun0001_ip = 1769; continue _fun0001 }
 1626:
            var14 = _closure1_slot10;
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var8 = 28;
            var8 = var21[var8];
            var8 = var16.bind(var4)(var8);
            var13 = var8.TextWithIOSLinkWorkaround;
            var8 = {};
            var17 = 'text-sm/normal';
            var8['variant'] = var17;
            var17 = var21[var15];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var15 = var21[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.hYoGUF;
            var15 = {};
            var20 = _closure1_slot1;
            var19 = 29;
            var19 = var21[var19];
            var21 = var20.bind(var4)(var19);
            var20 = var21.getArticleURL;
            var19 = _closure1_slot8;
            var19 = var19.PAID_TERMS;
            var19 = var20.bind(var21)(var19);
            var15['paidURL'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var8['children'] = var15;
            var7 = var14.bind(var4)(var13, var8);
 1769:
            var5[2] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 30;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var6['loading'] = var11;
            var6['variant'] = var12;
            var6['text'] = var9;
            var9 = undefined;
            if(var11) { _fun0001_ip = 1830; continue _fun0001 }
 1823:
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot8;
                    if(!var3) { _fun0005_ip = 52; continue _fun0005 }
 45:
                    var3 = _closure2_slot6;
                    if(var3) { _fun0005_ip = 72; continue _fun0005 }
 52:
                    var4 = _closure2_slot1;
                    var3 = function() {
                        var4 = _closure2_slot0;
                        var3 = var4.navigate;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 32;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.PremiumGiftScreens;
                        var2 = var2.SUCCESS;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var3 = var4.bind(var1)(var3);
                    _fun0005_ip = 91; continue _fun0005;
 72:
                    var3 = _closure2_slot9;
                    var4 = _closure2_slot2;
                    var2 = 0;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
 91:
                    return var1;
                }
            };
 1830:
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