// app/modules/quests/native/QuestCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var17.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Image;
    var _closure1_slot5 = var5;
    var15 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var17.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var17.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot11 = var5;
    var5 = var4.jsxs;
    var _closure1_slot12 = var5;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var16 = 8;
    var4 = var7[var16];
    var4 = var17.bind(var1)(var4);
    var4 = var4.colors;
    var11 = var4.BG_SURFACE_RAISED;
    var4 = var7[var16];
    var4 = var17.bind(var1)(var4);
    var4 = var4.colors;
    var18 = var4.BORDER_SUBTLE;
    var5 = 9;
    var4 = var7[var5];
    var10 = var6.bind(var1)(var4);
    var9 = var10.experimental_createToken;
    var4 = function(arg1) {
        var1 = arg1;
        var7 = var1.theme;
        var8 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 8;
        var4 = var5[var2];
        var3 = undefined;
        var4 = var8.bind(var3)(var4);
        var6 = var4.internal;
        var4 = var6.resolveSemanticColor;
        var2 = var5[var2];
        var2 = var8.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.BG_SURFACE_RAISED;
        var4 = var4.bind(var6)(var7, var2);
        var2 = _closure1_slot0;
        var1 = 10;
        var1 = var5[var1];
        var3 = var2.bind(var3)(var1);
        var2 = var3.hexOpacityToRgba;
        var1 = 0;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var13 = var9.bind(var10)(var4);
    var4 = var7[var5];
    var10 = var6.bind(var1)(var4);
    var9 = var10.experimental_createToken;
    var4 = function(arg1) {
        var1 = arg1;
        var7 = var1.theme;
        var8 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 8;
        var4 = var5[var2];
        var3 = undefined;
        var4 = var8.bind(var3)(var4);
        var6 = var4.internal;
        var4 = var6.resolveSemanticColor;
        var2 = var5[var2];
        var2 = var8.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.BG_SURFACE_RAISED;
        var4 = var4.bind(var6)(var7, var2);
        var2 = _closure1_slot0;
        var1 = 10;
        var1 = var5[var1];
        var3 = var2.bind(var3)(var1);
        var2 = var3.hexOpacityToRgba;
        var1 = 0.8;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var12 = var9.bind(var10)(var4);
    var4 = var7[var16];
    var4 = var17.bind(var1)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_16;
    var9 = var7[var5];
    var14 = var6.bind(var1)(var9);
    var10 = var14.createStyles;
    var9 = {};
    var19 = {'position': 'relative', 'padding': 0};
    var20 = var7[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.radii;
    var20 = var20.sm;
    var19['borderRadius'] = var20;
    var19['backgroundColor'] = var11;
    var20 = var7[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_16;
    var19['marginBottom'] = var20;
    var20 = 'hidden';
    var19['overflow'] = var20;
    var9['container'] = var19;
    var20 = {'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'padding': null, 'height': 165};
    var19 = 'flex';
    var21 = var7[var16];
    var21 = var17.bind(var1)(var21);
    var21 = var21.spacing;
    var21 = var21.PX_12;
    var20['padding'] = var21;
    var9['heroContainer'] = var20;
    var20 = {};
    var21 = 'cover';
    var20['resizeMode'] = var21;
    var23 = var15.absoluteFillObject;
    var24 = var20;
    var21 = copyDataProperties(var24, var23);
    var9['heroImg'] = var20;
    var15 = var15.absoluteFillObject;
    var9['heroLinearGradientOverlay'] = var15;
    var15 = {};
    var20 = 'absolute';
    var15['position'] = var20;
    var20 = var7[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_8;
    var15['top'] = var20;
    var20 = var7[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_8;
    var15['right'] = var20;
    var20 = var7[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.colors;
    var20 = var20.BG_BRAND;
    var15['backgroundColor'] = var20;
    var20 = var7[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_4;
    var15['padding'] = var20;
    var20 = var7[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.radii;
    var20 = var20.sm;
    var15['borderRadius'] = var20;
    var20 = var7[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.shadows;
    var23 = var20.SHADOW_LOW;
    var24 = var15;
    var20 = copyDataProperties(var24, var23);
    var9['previewBadge'] = var15;
    var15 = {'height': 64, 'width': 64};
    var20 = var7[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_12;
    var15['marginRight'] = var20;
    var9['rewardImgContainer'] = var15;
    var15 = {'height': '100%', 'width': '100%'};
    var20 = var7[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.radii;
    var20 = var20.sm;
    var15['borderRadius'] = var20;
    var9['rewardImg'] = var15;
    var15 = {'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'space-between', 'alignItems': 'flex-end'};
    var9['heroFooterContainer'] = var15;
    var15 = {'display': 'flex', 'flexDirection': 'column', 'alignItems': 'flex-start'};
    var9['heroFooterLeftContainer'] = var15;
    var15 = {};
    var15['display'] = var19;
    var19 = var7[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_12;
    var15['padding'] = var19;
    var9['detailsWrapper'] = var15;
    var15 = {'display': 'flex', 'flexDirection': 'row'};
    var9['detailsContainer'] = var15;
    var15 = {};
    var19 = var7[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_4;
    var15['marginBottom'] = var19;
    var9['questName'] = var15;
    var15 = {'flex': 1, 'justifyContent': 'center'};
    var9['detailsTextContainer'] = var15;
    var15 = {'borderTopWidth': 1, 'borderTopColor': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var15['borderTopColor'] = var18;
    var16 = var7[var16];
    var16 = var17.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var15['padding'] = var16;
    var9['buttonContainers'] = var15;
    var9 = var10.bind(var14)(var9);
    var _closure1_slot14 = var9;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyleProperties;
    var5 = {};
    var5['gradientStart'] = var13;
    var5['gradientMid'] = var12;
    var5['gradientEnd'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot15 = var5;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.containerPadding;
            var _closure2_slot1 = var11;
            var1 = var2.onLayout;
            var _closure2_slot2 = var1;
            var1 = var2.quest;
            var _closure2_slot3 = var1;
            var10 = var2.questContent;
            var5 = undefined;
            if(!(var5 === var10)) { _fun0001_ip = 82; continue _fun0001 }
 47:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.QuestContent;
            var10 = var3.QUEST_HOME_MOBILE;
 82:
            var _closure2_slot4 = var10;
            var3 = var2.questContentPosition;
            var _closure2_slot5 = var3;
            var14 = var2.sourceQuestContent;
            var _closure2_slot6 = var14;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 12;
            var4 = var2[var4];
            var7 = var3.bind(var5)(var4);
            var6 = var7.getQuestLogger;
            var4 = {};
            var4['quest'] = var1;
            var8 = _closure1_slot9;
            var8 = var8.QUEST_HOME_MOBILE;
            var4['location'] = var8;
            var4 = var6.bind(var7)(var4);
            var _closure2_slot7 = var4;
            var4 = 13;
            var4 = var2[var4];
            var6 = var3.bind(var5)(var4);
            var4 = var6.useTrackQuestContentClickedWithImpression;
            var4 = var4.bind(var6)();
            var _closure2_slot8 = var4;
            var8 = 14;
            var2 = var2[var8];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useQuestTaskDetails;
            var33 = var2.bind(var3)(var1);
            var3 = var1.userStatus;
            var21 = null;
            var4 = var21 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 237; continue _fun0001 }
 231:
            var2 = var3.enrolledAt;
 237:
            var9 = var21 != var2;
            var2 = _closure1_slot14;
            var23 = var2.bind(var5)();
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 15;
            var2 = var3[var2];
            var7 = var6.bind(var5)(var2);
            var4 = var7.useQuestsInstructionsToWinReward;
            var2 = {};
            var2['quest'] = var1;
            var2['taskDetails'] = var33;
            var12 = _closure1_slot9;
            var12 = var12.QUEST_HOME_MOBILE;
            var2['location'] = var12;
            var2['questContent'] = var10;
            var2['sourceQuestContent'] = var14;
            var4 = var4.bind(var7)(var2);
            var7 = _closure1_slot1;
            var2 = 16;
            var2 = var3[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var _closure2_slot9 = var2;
            var12 = _closure1_slot4;
            var10 = var12.useMemo;
            var7 = new Array(3);
            var7[0] = var1;
            var7[1] = var11;
            var7[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 17;
                    var1 = var10[var7];
                    var6 = undefined;
                    var8 = var9.bind(var6)(var1);
                    var5 = var8.getQuestAsset;
                    var3 = _closure2_slot3;
                    var2 = var10[var7];
                    var2 = var9.bind(var6)(var2);
                    var2 = var2.QuestAssetType;
                    var2 = var2.HERO;
                    var3 = var5.bind(var8)(var3, var2);
                    var2 = global;
                    var8 = var2.Math;
                    var5 = var8.floor;
                    var9 = _closure1_slot1;
                    var2 = 18;
                    var2 = var10[var2];
                    var2 = var9.bind(var6)(var2);
                    var2 = var2.bind(var6)();
                    var2 = var5.bind(var8)(var2);
                    var5 = _closure2_slot9;
                    var5 = var5.width;
                    var8 = _closure2_slot1;
                    var1 = 2;
                    var1 = var1 * var8;
                    var1 = var5 - var1;
                    var9 = var1 * var2;
                    var1 = 165;
                    var8 = var1 * var2;
                    var1 = var3.isAnimated;
                    var2 = {};
                    var12 = var2;
                    var11 = var3;
                    var5 = copyDataProperties(var12, var11);
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var7 = var5.bind(var6)(var4);
                    if(var1) { _fun0002_ip = 228; continue _fun0002 }
 177:
                    var5 = var7.getAssetUrlWithMediaProxyQueryParams;
                    var4 = var3.url;
                    var1 = {};
                    var1['width'] = var9;
                    var1['height'] = var8;
                    var6 = 'webp';
                    var1['format'] = var6;
                    var4 = var5.bind(var7)(var4, var1);
                    var1 = 'url';
                    var2[var1] = var4;
                    var1 = var2;
                    _fun0002_ip = 278; continue _fun0002;
 228:
                    var6 = var7.convertVideoToFirstFrameImageWithMediaProxy;
                    var5 = var3.url;
                    var4 = {};
                    var4['width'] = var9;
                    var4['height'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var5 = null;
                    if(!(var5 == var4)) { _fun0002_ip = 266; continue _fun0002 }
 261:
                    var4 = var3.url;
 266:
                    var3 = 'url';
                    var2[var3] = var4;
                    var1 = var2;
 278:
                    return var1;
                }
            };
            var37 = var10.bind(var12)(var2, var7);
            var10 = 19;
            var2 = var3[var10];
            var7 = var6.bind(var5)(var2);
            var2 = var7.useQuestGameLogotypeAssetUrl;
            var35 = var2.bind(var7)(var1);
            var2 = _closure1_slot15;
            var2 = var2.bind(var5)();
            var31 = var2.gradientStart;
            var30 = var2.gradientMid;
            var29 = var2.gradientEnd;
            var11 = var12.useMemo;
            var2 = var1.config;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.SharedQuestFields;
                var2 = var3.build;
                var1 = _closure2_slot3;
                var1 = var1.config;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var11.bind(var12)(var2, var7);
            var18 = var2.defaultRewardNameWithArticle;
            var _closure2_slot10 = var18;
            var26 = 21;
            var7 = var3[var26];
            var13 = var6.bind(var5)(var7);
            var12 = var13.useStateFromStoresObject;
            var7 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                var1 = {};
                var2 = _closure1_slot8;
                var5 = var2.getRewards;
                var3 = _closure2_slot3;
                var4 = var3.id;
                var4 = var5.bind(var2)(var4);
                var1['reward'] = var4;
                var5 = var2.isFetchingRewardCode;
                var4 = var3.id;
                var4 = var5.bind(var2)(var4);
                var1['isFetchingRewardCode'] = var4;
                var5 = var2.isClaimingReward;
                var4 = var3.id;
                var4 = var5.bind(var2)(var4);
                var1['isClaimingReward'] = var4;
                var4 = var2.isEnrolling;
                var3 = var3.id;
                var3 = var4.bind(var2)(var3);
                var1['isEnrolling'] = var3;
                var2 = var2.questEnrollmentBlockedUntil;
                var1['questEnrollmentBlockedUntil'] = var2;
                return var1;
            };
            var11 = var12.bind(var13)(var11, var7);
            var19 = var11.isFetchingRewardCode;
            var7 = var11.isClaimingReward;
            var25 = var11.isEnrolling;
            var20 = var11.questEnrollmentBlockedUntil;
            var _closure2_slot11 = var20;
            var3 = var3[var8];
            var11 = var6.bind(var5)(var3);
            var8 = var11.useQuestFormattedDate;
            var3 = var1.userStatus;
            var12 = var21 == var3;
            var6 = undefined;
            if(var12) { _fun0001_ip = 575; continue _fun0001 }
 569:
            var6 = var3.completedAt;
 575:
            var3 = {'year': 'numeric', 'month': 'long', 'day': 'numeric'};
            var8 = var8.bind(var11)(var6, var3);
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var28 = 22;
            var11 = var3[var28];
            var12 = var6.bind(var5)(var11);
            var11 = var12.hasWatchVideoTasks;
            var13 = var11.bind(var12)(var1);
            var _closure2_slot12 = var13;
            var3 = var3[var10];
            var11 = var6.bind(var5)(var3);
            var10 = var11.useShouldAllowMobileVideoTask;
            var6 = var1.config;
            var3 = {};
            var12 = _closure1_slot9;
            var12 = var12.QUEST_HOME_MOBILE;
            var3['location'] = var12;
            var24 = false;
            var3['autoTrackExposure'] = var24;
            var12 = var10.bind(var11)(var6, var3);
            var _closure2_slot13 = var12;
            var6 = var1.userStatus;
            var10 = var21 == var6;
            var3 = undefined;
            if(var10) { _fun0001_ip = 704; continue _fun0001 }
 698:
            var3 = var6.enrolledAt;
 704:
            var17 = var21 != var3;
            var6 = var1.userStatus;
            var10 = var21 == var6;
            var3 = undefined;
            if(var10) { _fun0001_ip = 729; continue _fun0001 }
 723:
            var3 = var6.completedAt;
 729:
            var11 = var21 != var3;
            var6 = var1.userStatus;
            var10 = var21 == var6;
            var3 = undefined;
            if(var10) { _fun0001_ip = 754; continue _fun0001 }
 748:
            var3 = var6.claimedAt;
 754:
            var10 = var21 != var3;
            var6 = _closure1_slot0;
            var22 = _closure1_slot2;
            var3 = var22[var28];
            var16 = var6.bind(var5)(var3);
            var3 = var16.isQuestExpired;
            var16 = var3.bind(var16)(var1);
            var3 = var2.defaultReward;
            var32 = var3.skuId;
            var3 = var22[var28];
            var36 = var6.bind(var5)(var3);
            var34 = var36.hasCollectiblesQuestReward;
            var3 = var1.config;
            var34 = var34.bind(var36)(var3);
            var3 = 23;
            var3 = var22[var3];
            var22 = var6.bind(var5)(var3);
            var6 = var22.useFetchCollectiblesProduct;
            var3 = null;
            if(!var34) { _fun0001_ip = 854; continue _fun0001 }
 846:
            var3 = null;
            if(!var11) { _fun0001_ip = 854; continue _fun0001 }
 851:
            var3 = var32;
 854:
            var3 = var6.bind(var22)(var3);
            var6 = var3.product;
            var _closure2_slot14 = var6;
            var6 = var3.isFetching;
            var22 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var26];
            var32 = var22.bind(var5)(var3);
            var26 = var32.useStateFromStores;
            var3 = _closure1_slot7;
            var22 = new Array(1);
            var22[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0003_ip = 37; continue _fun0003 }
 27:
                    var2 = var3.hasVerifiedEmailOrPhone;
                    var1 = var2.bind(var3)();
 37:
                    return var1;
                }
            };
            var3 = var26.bind(var32)(var22, var3);
            var _closure2_slot15 = var3;
            var3 = function trackClick(arg1) {
                var3 = _closure2_slot8;
                var2 = {};
                var4 = _closure2_slot3;
                var4 = var4.id;
                var2['questId'] = var4;
                var4 = _closure2_slot4;
                var2['questContent'] = var4;
                var4 = arg1;
                var2['questContentCTA'] = var4;
                var1 = _closure2_slot6;
                var2['sourceQuestContent'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var _closure2_slot16 = var3;
            var3 = function showQuestBottomSheet() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 26;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 25;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot3;
                var7 = var7.id;
                var3['questId'] = var7;
                var7 = _closure2_slot5;
                var3['questContentPosition'] = var7;
                var2 = _closure2_slot6;
                var3['sourceQuestContent'] = var2;
                var2 = 'QuestBottomSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var _closure2_slot17 = var3;
            if(var10) { _fun0001_ip = 1319; continue _fun0001 }
 954:
            if(var11) { _fun0001_ip = 1225; continue _fun0001 }
 960:
            if(!var17) { _fun0001_ip = 969; continue _fun0001 }
 963:
            if(var13) { _fun0001_ip = 1171; continue _fun0001 }
 969:
            if(!var17) { _fun0001_ip = 1065; continue _fun0001 }
 972:
            if(var13) { _fun0001_ip = 1065; continue _fun0001 }
 975:
            var22 = {'text': null, 'variant': 'secondary', 'disabled': false};
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var3 = 27;
            var26 = var36[var3];
            var26 = var34.bind(var5)(var26);
            var32 = var26.intl;
            var26 = var32.string;
            var3 = var36[var3];
            var3 = var34.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.JiosAg;
            var3 = var26.bind(var32)(var3);
            var22['text'] = var3;
            var3 = function onPress() {
                var4 = _closure2_slot7;
                var3 = var4.log;
                var1 = 'Navigating to console connection action sheet';
                var1 = var3.bind(var4)(var1);
                var4 = _closure2_slot16;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = var3.QuestContentCTA;
                var3 = var3.VIEW_REQUIREMENTS;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot17;
                var2 = var2.bind(var1)();
                return var1;
            };
            var22['onPress'] = var3;
            _fun0001_ip = 1169; continue _fun0001;
 1065:
            var3 = {};
            var36 = _closure1_slot0;
            var38 = _closure1_slot2;
            var26 = 27;
            var32 = var38[var26];
            var32 = var36.bind(var5)(var32);
            var34 = var32.intl;
            var32 = var34.string;
            var26 = var38[var26];
            var26 = var36.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.kUQLMD;
            var26 = var32.bind(var34)(var26);
            var3['text'] = var26;
            var3['disabled'] = var24;
            var3['loading'] = var25;
            var26 = _closure1_slot3;
            var25 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 219; continue _fun0004 }
 10:
                        var4 = _closure2_slot7;
                        var3 = var4.log;
                        var2 = 'Enrolling in quest';
                        var2 = var3.bind(var4)(var2);
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var2 = 30;
                        var2 = var11[var2];
                        var3 = undefined;
                        var8 = var10.bind(var3)(var2);
                        var7 = var8.enrollInQuest;
                        var2 = _closure2_slot3;
                        var5 = var2.id;
                        var2 = {};
                        var9 = _closure2_slot4;
                        var2['questContent'] = var9;
                        var9 = 13;
                        var9 = var11[var9];
                        var9 = var10.bind(var3)(var9);
                        var9 = var9.QuestContentCTA;
                        var9 = var9.ACCEPT_QUEST;
                        var2['questContentCTA'] = var9;
                        var9 = _closure2_slot6;
                        var2['sourceQuestContent'] = var9;
                        var2 = var7.bind(var8)(var5, var2);
                        SaveGenerator(address=133);
 131:
                        return var2;
 133:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0004_ip = 216; continue _fun0004 }
 139:
                        var5 = _closure2_slot12;
                        if(!var5) { _fun0004_ip = 153; continue _fun0004 }
 146:
                        var5 = _closure2_slot13;
                        if(var5) { _fun0004_ip = 163; continue _fun0004 }
 153:
                        var5 = _closure2_slot17;
                        var5 = var5.bind(var3)();
                        _fun0004_ip = 213; continue _fun0004;
 163:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 29;
                        var4 = var7[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = {};
                        var7 = _closure2_slot3;
                        var7 = var7.id;
                        var4['questId'] = var7;
                        var6 = _closure2_slot6;
                        var4['sourceQuestContent'] = var6;
                        var4 = var5.bind(var3)(var4);
 213:
                        return var3;
 216:
                        return var2;
 219:
                        return var1;
                    }
                };
                return var1;
            };
            var25 = var26.bind(var5)(var25);
            var _closure2_slot0 = var25;
            var25 = function() {
                var1 = undefined;
                var4 = _closure2_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var3['onPress'] = var25;
            var22 = var3;
 1169:
            _fun0001_ip = 1223; continue _fun0001;
 1171:
            var3 = {};
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var28];
            var26 = var26.bind(var5)(var25);
            var25 = var26.getVideoQuestWatchCtaText;
            var25 = var25.bind(var26)(var33);
            var3['text'] = var25;
            var3['disabled'] = var24;
            var24 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = var3.log;
                    var1 = 'Navigating to video quest bottom sheet';
                    var1 = var2.bind(var3)(var1);
                    var5 = _closure2_slot16;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.QuestContentCTA;
                    var3 = var3.WATCH_VIDEO;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure2_slot13;
                    if(var3) { _fun0005_ip = 87; continue _fun0005 }
 77:
                    var3 = _closure2_slot17;
                    var3 = var3.bind(var1)();
                    _fun0005_ip = 137; continue _fun0005;
 87:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 29;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var5 = _closure2_slot3;
                    var5 = var5.id;
                    var2['questId'] = var5;
                    var4 = _closure2_slot6;
                    var2['sourceQuestContent'] = var4;
                    var2 = var3.bind(var1)(var2);
 137:
                    return var1;
                }
            };
            var3['onPress'] = var24;
            var22 = var3;
 1223:
            _fun0001_ip = 1317; continue _fun0001;
 1225:
            var3 = {};
            var28 = _closure1_slot0;
            var32 = _closure1_slot2;
            var24 = 27;
            var25 = var32[var24];
            var25 = var28.bind(var5)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var32[var24];
            var24 = var28.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.cfY4PD;
            var24 = var25.bind(var26)(var24);
            var3['text'] = var24;
            if(var7) { _fun0001_ip = 1292; continue _fun0001 }
 1289:
            var7 = var19;
 1292:
            if(var7) { _fun0001_ip = 1298; continue _fun0001 }
 1295:
            var7 = var6;
 1298:
            var3['loading'] = var7;
            var7 = function onPress() {
                var6 = _closure2_slot16;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var2 = var4[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.QuestContentCTA;
                var2 = var2.CLAIM_REWARD;
                var2 = var6.bind(var1)(var2);
                var2 = 28;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleRewardClaimThenView;
                var2 = {};
                var6 = _closure2_slot14;
                var2['product'] = var6;
                var6 = _closure2_slot3;
                var2['quest'] = var6;
                var6 = _closure2_slot4;
                var2['questContent'] = var6;
                var6 = _closure2_slot5;
                var2['questContentPosition'] = var6;
                var6 = _closure2_slot15;
                var2['currentUserHasVerifiedEmailOrPhone'] = var6;
                var5 = _closure2_slot6;
                var2['sourceQuestContent'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onPress'] = var7;
            var22 = var3;
 1317:
            _fun0001_ip = 1401; continue _fun0001;
 1319:
            var3 = {};
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var7 = 27;
            var19 = var26[var7];
            var19 = var25.bind(var5)(var19);
            var24 = var19.intl;
            var19 = var24.string;
            var7 = var26[var7];
            var7 = var25.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.vTgCW1;
            var7 = var19.bind(var24)(var7);
            var3['text'] = var7;
            var3['loading'] = var6;
            var6 = function onPress() {
                var6 = _closure2_slot16;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var2 = var4[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.QuestContentCTA;
                var2 = var2.SHOW_REWARD;
                var2 = var6.bind(var1)(var2);
                var2 = 28;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.viewReward;
                var2 = {};
                var6 = _closure2_slot14;
                var2['product'] = var6;
                var6 = _closure2_slot3;
                var2['quest'] = var6;
                var6 = _closure2_slot4;
                var2['questContent'] = var6;
                var6 = _closure2_slot5;
                var2['questContentPosition'] = var6;
                var5 = _closure2_slot6;
                var2['sourceQuestContent'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onPress'] = var6;
            var22 = var3;
 1401:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var19 = 27;
            var7 = var3[var19];
            var7 = var6.bind(var5)(var7);
            var24 = var7.intl;
            var7 = var24.formatToPlainString;
            var3 = var3[var19];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var6 = var3.EAYZAg;
            var3 = {};
            var25 = var1.config;
            var25 = var25.messages;
            var25 = var25.questName;
            var3['questName'] = var25;
            var39 = var7.bind(var24)(var6, var3);
            if(!var16) { _fun0001_ip = 1487; continue _fun0001 }
 1484:
            if(var10) { _fun0001_ip = 1560; continue _fun0001 }
 1487:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = var3[var19];
            var7 = var6.bind(var5)(var7);
            var24 = var7.intl;
            var7 = var24.format;
            var3 = var3[var19];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var6 = var3.0IUT4e;
            var3 = {};
            var25 = function rewardWithArticleHook() {
                var4 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 31;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-md/semibold', 'color': 'text-normal'};
                var5 = _closure2_slot10;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['rewardWithArticleHook'] = var25;
            var40 = var7.bind(var24)(var6, var3);
            _fun0001_ip = 1637; continue _fun0001;
 1560:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = var3[var19];
            var7 = var6.bind(var5)(var7);
            var24 = var7.intl;
            var7 = var24.formatToPlainString;
            var3 = var3[var19];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var6 = var3.ge+AJi;
            var3 = {};
            var25 = var1.config;
            var25 = var25.messages;
            var25 = var25.questName;
            var3['questName'] = var25;
            var40 = var7.bind(var24)(var6, var3);
 1637:
            if(!var16) { _fun0001_ip = 1710; continue _fun0001 }
 1640:
            if(!var11) { _fun0001_ip = 1710; continue _fun0001 }
 1643:
            if(var10) { _fun0001_ip = 1710; continue _fun0001 }
 1646:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = var3[var19];
            var7 = var6.bind(var5)(var7);
            var24 = var7.intl;
            var7 = var24.formatToPlainString;
            var3 = var3[var19];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var6 = var3.l1jCMz;
            var3 = {};
            var3['date'] = var8;
            var38 = var7.bind(var24)(var6, var3);
            _fun0001_ip = 1792; continue _fun0001;
 1710:
            var3 = var16;
            if(!var16) { _fun0001_ip = 1719; continue _fun0001 }
 1716:
            var3 = var10;
 1719:
            var38 = var4;
            if(!var3) { _fun0001_ip = 1792; continue _fun0001 }
 1725:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = var3[var19];
            var6 = var4.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var3 = var3[var19];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var4 = var3.RrxtPT;
            var3 = {};
            var3['reward'] = var18;
            var3['date'] = var8;
            var38 = var6.bind(var7)(var4, var3);
 1792:
            var18 = global;
            var6 = var18.Date;
            var3 = var1.config;
            var51 = var3.expiresAt;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var52 = var4;
            var3 = new var52[var6](var51, var50);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = var4.toLocaleDateString;
            var8 = var3.bind(var4)();
            var4 = var18.Date;
            var51 = var2.rewardsExpireAt;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var52 = var3;
            var2 = new var52[var4](var51, var50);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = var3.toLocaleDateString;
            var7 = var2.bind(var3)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = var2[var19];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var2[var19];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.HnG2TE;
            var2 = {};
            var25 = var18.Date;
            var18 = var1.config;
            var51 = var18.expiresAt;
            var24 = var25.prototype;
            var24 = Object.create(var24, {constructor: {value: var25}});
            var52 = var24;
            var18 = new var52[var25](var51, var50);
            var24 = var18 instanceof Object ? var18 : var24;
            var18 = var24.toLocaleDateString;
            var18 = var18.bind(var24)();
            var2['expirationDate'] = var18;
            var3 = var4.bind(var6)(var3, var2);
            var2 = var16;
            if(!var16) { _fun0001_ip = 2001; continue _fun0001 }
 1998:
            var2 = var10;
 2001:
            var34 = var3;
            if(!var2) { _fun0001_ip = 2069; continue _fun0001 }
 2007:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = var2[var19];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var2[var19];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.8K9PEx;
            var2 = {};
            var2['expirationDate'] = var8;
            var34 = var4.bind(var6)(var3, var2);
 2069:
            var2 = var16;
            if(!var2) { _fun0001_ip = 2078; continue _fun0001 }
 2075:
            var2 = var11;
 2078:
            if(!var2) { _fun0001_ip = 2084; continue _fun0001 }
 2081:
            var2 = !var10;
 2084:
            if(!var2) { _fun0001_ip = 2147; continue _fun0001 }
 2087:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = var2[var19];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var2[var19];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.APddvL;
            var2 = {};
            var2['expirationDate'] = var7;
            var34 = var4.bind(var6)(var3, var2);
 2147:
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var2 = var1.id;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var14;
            var2 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 29;
                var2 = var7[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var6 = _closure2_slot3;
                var6 = var6.id;
                var2['questId'] = var6;
                var6 = _closure1_slot0;
                var5 = 32;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.VideoQuestModalSteps;
                var5 = var5.WATCH_VIDEO;
                var2['initialStep'] = var5;
                var4 = _closure2_slot6;
                var2['sourceQuestContent'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18 = var4.bind(var6)(var2, var3);
            var4 = _closure1_slot12;
            var32 = _closure1_slot0;
            var36 = _closure1_slot2;
            var2 = 33;
            var2 = var36[var2];
            var2 = var32.bind(var5)(var2);
            var3 = var2.Card;
            var2 = {};
            var6 = var23.container;
            var2['style'] = var6;
            var6 = function onLayout(arg1) {
                var4 = _closure2_slot2;
                var1 = _closure2_slot3;
                var3 = var1.id;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var2, var3);
                return var1;
            };
            var2['onLayout'] = var6;
            var8 = _closure1_slot6;
            var6 = {};
            var7 = var23.heroContainer;
            var6['style'] = var7;
            var26 = _closure1_slot11;
            var25 = _closure1_slot1;
            var7 = 34;
            var7 = var36[var7];
            var24 = var25.bind(var5)(var7);
            var7 = {};
            var28 = {};
            var37 = var37.url;
            var28['uri'] = var37;
            var7['source'] = var28;
            var28 = var23.heroImg;
            var7['style'] = var28;
            var7 = var26.bind(var5)(var24, var7);
            var24 = new Array(4);
            var24[0] = var7;
            var7 = 35;
            var7 = var36[var7];
            var25 = var25.bind(var5)(var7);
            var7 = {};
            var28 = var23.heroLinearGradientOverlay;
            var7['style'] = var28;
            var28 = 36;
            var37 = var36[var28];
            var37 = var32.bind(var5)(var37);
            var37 = var37.VerticalGradient;
            var37 = var37.START;
            var7['start'] = var37;
            var28 = var36[var28];
            var28 = var32.bind(var5)(var28);
            var28 = var28.VerticalGradient;
            var28 = var28.END;
            var7['end'] = var28;
            var28 = new Array(3);
            var28[0] = var31;
            var28[1] = var30;
            var28[2] = var29;
            var7['colors'] = var28;
            var7 = var26.bind(var5)(var25, var7);
            var24[1] = var7;
            var7 = var1.preview;
            if(!var7) { _fun0001_ip = 2558; continue _fun0001 }
 2435:
            var28 = _closure1_slot11;
            var26 = _closure1_slot6;
            var25 = {};
            var29 = var23.previewBadge;
            var25['style'] = var29;
            var37 = _closure1_slot0;
            var31 = _closure1_slot2;
            var29 = 31;
            var29 = var31[var29];
            var29 = var37.bind(var5)(var29);
            var30 = var29.Text;
            var29 = {'variant': 'eyebrow', 'color': 'always-white'};
            var32 = var31[var19];
            var32 = var37.bind(var5)(var32);
            var36 = var32.intl;
            var32 = var36.string;
            var31 = var31[var19];
            var31 = var37.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.SKNnqq;
            var31 = var32.bind(var36)(var31);
            var29['children'] = var31;
            var29 = var28.bind(var5)(var30, var29);
            var25['children'] = var29;
            var7 = var28.bind(var5)(var26, var25);
 2558:
            var24[2] = var7;
            var30 = _closure1_slot12;
            var28 = _closure1_slot6;
            var26 = {};
            var7 = var23.heroFooterContainer;
            var26['style'] = var7;
            var29 = {};
            var7 = var23.heroFooterLeftContainer;
            var29['style'] = var7;
            var25 = _closure1_slot11;
            var47 = _closure1_slot1;
            var31 = _closure1_slot2;
            var7 = 37;
            var7 = var31[var7];
            var32 = var47.bind(var5)(var7);
            var7 = {};
            var7['assetUrl'] = var35;
            var7 = var25.bind(var5)(var32, var7);
            var37 = new Array(2);
            var37[0] = var7;
            var32 = _closure1_slot0;
            var7 = 38;
            var35 = var31[var7];
            var35 = var32.bind(var5)(var35);
            var42 = var35.Stack;
            var41 = {'direction': 'horizontal', 'align': 'center', 'spacing': 4};
            var35 = 31;
            var36 = var31[var35];
            var36 = var32.bind(var5)(var36);
            var44 = var36.Text;
            var43 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var36 = 'text-xs/medium';
            var45 = var31[var19];
            var45 = var32.bind(var5)(var45);
            var48 = var45.intl;
            var46 = var48.string;
            var45 = var31[var19];
            var45 = var32.bind(var5)(var45);
            var45 = var45.t;
            var45 = var45.VAbKhI;
            var45 = var46.bind(var48)(var45);
            var43['children'] = var45;
            var44 = var25.bind(var5)(var44, var43);
            var43 = new Array(3);
            var43[0] = var44;
            var45 = _closure1_slot5;
            var44 = {};
            var46 = 39;
            var46 = var31[var46];
            var46 = var47.bind(var5)(var46);
            var44['source'] = var46;
            var46 = {'height': 16, 'width': 16};
            var44['style'] = var46;
            var44 = var25.bind(var5)(var45, var44);
            var43[1] = var44;
            var44 = var31[var35];
            var44 = var32.bind(var5)(var44);
            var45 = var44.Text;
            var44 = {'variant': 'text-xs/medium', 'color': 'text-normal'};
            var46 = var1.config;
            var46 = var46.messages;
            var46 = var46.gamePublisher;
            var44['children'] = var46;
            var44 = var25.bind(var5)(var45, var44);
            var43[2] = var44;
            var41['children'] = var43;
            var41 = var30.bind(var5)(var42, var41);
            var37[1] = var41;
            var29['children'] = var37;
            var37 = var30.bind(var5)(var28, var29);
            var29 = new Array(2);
            var29[0] = var37;
            var31 = var31[var35];
            var31 = var32.bind(var5)(var31);
            var32 = var31.Text;
            var31 = {};
            var31['variant'] = var36;
            var31['children'] = var34;
            var31 = var25.bind(var5)(var32, var31);
            var29[1] = var31;
            var26['children'] = var29;
            var26 = var30.bind(var5)(var28, var26);
            var24[3] = var26;
            var6['children'] = var24;
            var8 = var4.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var24 = {};
            var8 = var23.detailsWrapper;
            var24['style'] = var8;
            var29 = {};
            var8 = var23.detailsContainer;
            var29['style'] = var8;
            var8 = {};
            var26 = var23.rewardImgContainer;
            var8['style'] = var26;
            var32 = _closure1_slot11;
            var31 = _closure1_slot1;
            var34 = _closure1_slot2;
            if(var9) { _fun0001_ip = 3072; continue _fun0001 }
 3032:
            var9 = 41;
            var9 = var34[var9];
            var26 = var31.bind(var5)(var9);
            var9 = {'quest': null, 'height': 64, 'width': 64};
            var9['quest'] = var1;
            var9 = var32.bind(var5)(var26, var9);
            _fun0001_ip = 3116; continue _fun0001;
 3072:
            var26 = 40;
            var26 = var34[var26];
            var31 = var31.bind(var5)(var26);
            var26 = {};
            var26['quest'] = var1;
            var33 = var33.percentComplete;
            var26['progress'] = var33;
            var33 = 'sm';
            var26['size'] = var33;
            var9 = var32.bind(var5)(var31, var26);
 3116:
            var8['children'] = var9;
            var8 = var25.bind(var5)(var28, var8);
            var31 = new Array(2);
            var31[0] = var8;
            var9 = _closure1_slot12;
            var33 = _closure1_slot6;
            var32 = {};
            var8 = var23.detailsTextContainer;
            var32['style'] = var8;
            var37 = _closure1_slot11;
            var8 = _closure1_slot0;
            var26 = _closure1_slot2;
            var34 = var26[var35];
            var34 = var8.bind(var5)(var34);
            var36 = var34.Text;
            var34 = {'variant': 'eyebrow', 'color': 'text-brand'};
            var41 = var23.questName;
            var34['style'] = var41;
            var34['children'] = var39;
            var36 = var37.bind(var5)(var36, var34);
            var34 = new Array(3);
            var34[0] = var36;
            var36 = var26[var35];
            var36 = var8.bind(var5)(var36);
            var39 = var36.Text;
            var36 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var36['children'] = var40;
            var36 = var37.bind(var5)(var39, var36);
            var34[1] = var36;
            var35 = var26[var35];
            var35 = var8.bind(var5)(var35);
            var36 = var35.Text;
            var35 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var35['children'] = var38;
            var35 = var37.bind(var5)(var36, var35);
            var34[2] = var35;
            var32['children'] = var34;
            var32 = var9.bind(var5)(var33, var32);
            var31[1] = var32;
            var29['children'] = var31;
            var29 = var30.bind(var5)(var28, var29);
            var24['children'] = var29;
            var24 = var25.bind(var5)(var28, var24);
            var6[1] = var24;
            var7 = var26[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Stack;
            var7 = {'direction': 'horizontal', 'align': 'center'};
            var25 = _closure1_slot1;
            var24 = 8;
            var24 = var26[var24];
            var24 = var25.bind(var5)(var24);
            var24 = var24.spacing;
            var24 = var24.PX_8;
            var7['spacing'] = var24;
            var23 = var23.buttonContainers;
            var7['style'] = var23;
            if(!(var21 != var20)) { _fun0001_ip = 3677; continue _fun0001 }
 3421:
            if(var17) { _fun0001_ip = 3677; continue _fun0001 }
 3427:
            if(var11) { _fun0001_ip = 3677; continue _fun0001 }
 3433:
            if(var10) { _fun0001_ip = 3677; continue _fun0001 }
 3439:
            var20 = _closure1_slot12;
            var17 = _closure1_slot13;
            var10 = {};
            var25 = _closure1_slot11;
            var29 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 42;
            var21 = var26[var23];
            var21 = var29.bind(var5)(var21);
            var24 = var21.Button;
            var21 = {'grow': true, 'onPress': null, 'variant': 'secondary', 'disabled': true};
            var28 = _closure1_slot10;
            var21['onPress'] = var28;
            var28 = var26[var19];
            var28 = var29.bind(var5)(var28);
            var31 = var28.intl;
            var30 = var31.string;
            var28 = var26[var19];
            var28 = var29.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.V293qq;
            var28 = var30.bind(var31)(var28);
            var21['text'] = var28;
            var24 = var25.bind(var5)(var24, var21);
            var21 = new Array(2);
            var21[0] = var24;
            var23 = var26[var23];
            var23 = var29.bind(var5)(var23);
            var24 = var23.Button;
            var23 = {};
            var27 = function onPress() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 26;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 43;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot3;
                var7 = var7.id;
                var3['questId'] = var7;
                var7 = _closure2_slot11;
                var3['questEnrollmentBlockedUntil'] = var7;
                var2 = _closure2_slot6;
                var3['sourceQuestContent'] = var2;
                var2 = 'QuestEnrollmentBlockedBottomSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var23['onPress'] = var27;
            var27 = 'tertiary';
            var23['variant'] = var27;
            var27 = var26[var19];
            var27 = var29.bind(var5)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var26[var19];
            var26 = var29.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.vY9GgI;
            var26 = var27.bind(var28)(var26);
            var23['text'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var21[1] = var23;
            var10['children'] = var21;
            var17 = var20.bind(var5)(var17, var10);
            _fun0001_ip = 3732; continue _fun0001;
 3677:
            var21 = _closure1_slot11;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var10 = 42;
            var10 = var23[var10];
            var10 = var20.bind(var5)(var10);
            var20 = var10.Button;
            var10 = {};
            var23 = true;
            var10['grow'] = var23;
            var51 = var10;
            var50 = var22;
            var22 = copyDataProperties(var51, var50);
            var17 = var21.bind(var5)(var20, var10);
 3732:
            var10 = new Array(3);
            var10[0] = var17;
            if(!var11) { _fun0001_ip = 3746; continue _fun0001 }
 3743:
            var11 = var13;
 3746:
            if(!var11) { _fun0001_ip = 3752; continue _fun0001 }
 3749:
            var11 = var12;
 3752:
            if(!var11) { _fun0001_ip = 3873; continue _fun0001 }
 3755:
            var17 = _closure1_slot11;
            var23 = _closure1_slot0;
            var21 = _closure1_slot2;
            var12 = 44;
            var12 = var21[var12];
            var12 = var23.bind(var5)(var12);
            var13 = var12.IconButton;
            var12 = {};
            var20 = var21[var19];
            var20 = var23.bind(var5)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var19 = var21[var19];
            var19 = var23.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.YsCuyM;
            var19 = var20.bind(var22)(var19);
            var12['accessibilityLabel'] = var19;
            var20 = _closure1_slot1;
            var19 = 45;
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var12['icon'] = var19;
            var12['onPress'] = var18;
            var18 = 'secondary';
            var12['variant'] = var18;
            var11 = var17.bind(var5)(var13, var12);
 3873:
            var10[1] = var11;
            var13 = _closure1_slot11;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 46;
            var11 = var17[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['quest'] = var1;
            var16 = !var16;
            var11['showShareLink'] = var16;
            var15 = _closure1_slot9;
            var15 = var15.QUESTS_CARD;
            var11['location'] = var15;
            var11['sourceQuestContent'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[2] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var1.id;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = 47;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/QuestCard.tsx';
    var5 = var6.bind(var7)(var5);
    var3['QUEST_CARD_SPACING'] = var4;
    var3['QuestCard'] = var2;
    return var1;
})();