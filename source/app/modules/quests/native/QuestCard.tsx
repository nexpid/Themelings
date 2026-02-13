// app/modules/quests/native/QuestCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
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
    var4 = var16.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Image;
    var _closure1_slot5 = var8;
    var14 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var8 = var4.Fragment;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var15 = 8;
    var4 = var6[var15];
    var4 = var16.bind(var1)(var4);
    var4 = var4.colors;
    var19 = var4.BACKGROUND_SURFACE_HIGH;
    var4 = var6[var15];
    var4 = var16.bind(var1)(var4);
    var4 = var4.colors;
    var17 = var4.BORDER_SUBTLE;
    var4 = 9;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.theme;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var5.isThemeDark;
            var2 = var2.bind(var5)(var6);
            var5 = _closure1_slot1;
            var9 = 8;
            var4 = var4[var9];
            var4 = var5.bind(var3)(var4);
            var5 = var4.internal;
            var4 = var5.resolveSemanticColor;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var3)(var7);
            var7 = var7.colors;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7.BLACK;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = var7.BACKGROUND_SURFACE_HIGH;
case 4:
            var4 = var4.bind(var5)(var6, var2);
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.hexOpacityToRgba;
            var1 = 0;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var12 = var9.bind(var10)(var8);
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.theme;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 10;
            var4 = var2[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.isThemeDark;
            var5 = var4.bind(var5)(var7);
            var4 = _closure1_slot1;
            var9 = 8;
            var2 = var2[var9];
            var2 = var4.bind(var3)(var2);
            var6 = var2.internal;
            var4 = var6.resolveSemanticColor;
            var8 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var8.bind(var3)(var2);
            var8 = var2.colors;
            if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var2 = var8.BLACK;
            _fun0002_ip = 4; continue _fun0002;
case 2:
            var2 = var8.BACKGROUND_SURFACE_HIGH;
case 4:
            var4 = var4.bind(var6)(var7, var2);
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var1 = var6[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.hexOpacityToRgba;
            var1 = 0.5;
            if(!var5) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = 0.8;
case 5:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var11 = var9.bind(var10)(var8);
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.experimental_createToken;
    var8 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = var1.theme;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var5);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.colors;
            if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var1 = var2.BLACK;
            _fun0003_ip = 9; continue _fun0003;
case 7:
            var1 = var2.BACKGROUND_SURFACE_HIGH;
case 9:
            return var1;
        }
    };
    var10 = var9.bind(var10)(var8);
    var8 = var6[var4];
    var13 = var5.bind(var1)(var8);
    var9 = var13.createStyles;
    var8 = {};
    var18 = {'position': 'relative', 'padding': 0};
    var20 = var6[var15];
    var20 = var16.bind(var1)(var20);
    var20 = var20.radii;
    var20 = var20.sm;
    var18['borderRadius'] = var20;
    var18['backgroundColor'] = var19;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_16;
    var18['marginBottom'] = var19;
    var19 = 'hidden';
    var18['overflow'] = var19;
    var8['container'] = var18;
    var19 = {'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end'};
    var18 = 'flex';
    var20 = var6[var15];
    var20 = var16.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_12;
    var19['padding'] = var20;
    var8['heroContainer'] = var19;
    var19 = {};
    var20 = 'cover';
    var19['resizeMode'] = var20;
    var22 = var14.absoluteFillObject;
    var23 = var19;
    var20 = copyDataProperties(var23, var22);
    var8['heroImg'] = var19;
    var14 = var14.absoluteFillObject;
    var8['heroLinearGradientOverlay'] = var14;
    var14 = {};
    var19 = 'absolute';
    var14['position'] = var19;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_8;
    var14['top'] = var19;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_8;
    var14['right'] = var19;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_BRAND;
    var14['backgroundColor'] = var19;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_4;
    var14['padding'] = var19;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.radii;
    var19 = var19.sm;
    var14['borderRadius'] = var19;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.shadows;
    var22 = var19.SHADOW_LOW;
    var23 = var14;
    var19 = copyDataProperties(var23, var22);
    var8['previewBadge'] = var14;
    var14 = {'height': 64, 'width': 64};
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_12;
    var14['marginRight'] = var19;
    var8['rewardImgContainer'] = var14;
    var14 = {'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'space-between', 'alignItems': 'flex-end'};
    var8['heroFooterContainer'] = var14;
    var14 = {'display': 'flex', 'flexDirection': 'column', 'alignItems': 'flex-start'};
    var8['heroFooterLeftContainer'] = var14;
    var14 = {};
    var14['display'] = var18;
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_12;
    var14['padding'] = var18;
    var8['detailsWrapper'] = var14;
    var14 = {'display': 'flex', 'flexDirection': 'row'};
    var8['detailsContainer'] = var14;
    var14 = {};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_4;
    var14['marginBottom'] = var18;
    var8['questName'] = var14;
    var14 = {'flex': 1, 'justifyContent': 'center'};
    var8['detailsTextContainer'] = var14;
    var14 = {'borderTopWidth': 1, 'borderTopColor': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var14['borderTopColor'] = var17;
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var14['padding'] = var15;
    var8['buttonContainers'] = var14;
    var8 = var9.bind(var13)(var8);
    var _closure1_slot14 = var8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyleProperties;
    var4 = {};
    var4['gradientStart'] = var12;
    var4['gradientMid'] = var11;
    var4['gradientEnd'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var8 = var2.containerPadding;
            var1 = var2.onLayout;
            var _closure2_slot0 = var1;
            var1 = var2.quest;
            var _closure2_slot1 = var1;
            var10 = var2.questContent;
            var5 = undefined;
            if(!(var5 === var10)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.QuestContent;
            var10 = var3.QUEST_HOME_MOBILE;
case 10:
            var _closure2_slot2 = var10;
            var3 = var2.questContentPosition;
            var _closure2_slot3 = var3;
            var14 = var2.sourceQuestContent;
            var _closure2_slot4 = var14;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 13;
            var4 = var2[var4];
            var7 = var3.bind(var5)(var4);
            var6 = var7.getQuestLogger;
            var4 = {};
            var4['quest'] = var1;
            var9 = _closure1_slot9;
            var9 = var9.QUEST_HOME_MOBILE;
            var4['location'] = var9;
            var4 = var6.bind(var7)(var4);
            var _closure2_slot5 = var4;
            var4 = 14;
            var4 = var2[var4];
            var6 = var3.bind(var5)(var4);
            var4 = var6.useTrackQuestContentClickedWithImpression;
            var4 = var4.bind(var6)();
            var _closure2_slot6 = var4;
            var19 = 15;
            var4 = var2[var19];
            var6 = var3.bind(var5)(var4);
            var4 = var6.useQuestTaskDetails;
            var11 = var4.bind(var6)(var1);
            var _closure2_slot7 = var11;
            var2 = var2[var19];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useQuestCompletionDetails;
            var2 = var2.bind(var3)(var1);
            var34 = var2.completedRatio;
            var3 = var1.userStatus;
            var21 = null;
            var4 = var21 == var3;
            var2 = undefined;
            if(var4) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var2 = var3.enrolledAt;
case 12:
            var9 = var21 != var2;
            var2 = _closure1_slot14;
            var23 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var18 = 16;
            var3 = var2[var18];
            var7 = var4.bind(var5)(var3);
            var6 = var7.useQuestsInstructionsToWinReward;
            var3 = {};
            var3['quest'] = var1;
            var3['taskDetails'] = var11;
            var11 = _closure1_slot9;
            var11 = var11.QUEST_HOME_MOBILE;
            var3['location'] = var11;
            var3['questContent'] = var10;
            var3['sourceQuestContent'] = var14;
            var3 = var6.bind(var7)(var3);
            var7 = _closure1_slot1;
            var6 = 17;
            var6 = var2[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.bind(var5)();
            var7 = var6.width;
            var6 = 2;
            var6 = var6 * var8;
            var6 = var7 - var6;
            var _closure2_slot8 = var6;
            var7 = 0.2803030303030303;
            var25 = var7 * var6;
            var _closure2_slot9 = var25;
            var10 = _closure1_slot4;
            var8 = var10.useMemo;
            var7 = new Array(3);
            var7[0] = var1;
            var7[1] = var6;
            var7[2] = var25;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 18;
                    var1 = var10[var7];
                    var6 = undefined;
                    var8 = var9.bind(var6)(var1);
                    var5 = var8.getQuestAsset;
                    var3 = _closure2_slot1;
                    var2 = var10[var7];
                    var2 = var9.bind(var6)(var2);
                    var2 = var2.QuestAssetType;
                    var2 = var2.HERO;
                    var3 = var5.bind(var8)(var3, var2);
                    var2 = global;
                    var8 = var2.Math;
                    var5 = var8.floor;
                    var9 = _closure1_slot1;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var6)(var2);
                    var2 = var2.bind(var6)();
                    var2 = var5.bind(var8)(var2);
                    var5 = _closure2_slot8;
                    var9 = var5 * var2;
                    var1 = _closure2_slot9;
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
                    if(var1) { _fun0005_ip = 14; continue _fun0005 }
case 15:
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
                    _fun0005_ip = 16; continue _fun0005;
case 14:
                    var6 = var7.convertVideoToFirstFrameImageWithMediaProxy;
                    var5 = var3.url;
                    var4 = {};
                    var4['width'] = var9;
                    var4['height'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var5 = null;
                    if(!(var5 == var4)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var4 = var3.url;
case 17:
                    var3 = 'url';
                    var2[var3] = var4;
                    var1 = var2;
case 16:
                    return var1;
                }
            };
            var38 = var8.bind(var10)(var6, var7);
            var22 = 20;
            var6 = var2[var22];
            var7 = var4.bind(var5)(var6);
            var6 = var7.useQuestGameLogotypeAssetUrl;
            var33 = var6.bind(var7)(var1);
            var6 = _closure1_slot15;
            var6 = var6.bind(var5)();
            var32 = var6.gradientStart;
            var31 = var6.gradientMid;
            var30 = var6.gradientEnd;
            var6 = 21;
            var7 = var2[var6];
            var10 = var4.bind(var5)(var7);
            var8 = var10.getDefaultRewardNameWithArticle;
            var7 = var1.config;
            var8 = var8.bind(var10)(var7);
            var _closure2_slot10 = var8;
            var26 = 22;
            var7 = var2[var26];
            var12 = var4.bind(var5)(var7);
            var11 = var12.useStateFromStoresObject;
            var7 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var1 = {};
                var2 = _closure1_slot8;
                var5 = var2.getRewards;
                var3 = _closure2_slot1;
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
            var7 = var11.bind(var12)(var10, var7);
            var10 = var7.isFetchingRewardCode;
            var _closure2_slot11 = var10;
            var10 = var7.isClaimingReward;
            var _closure2_slot12 = var10;
            var10 = var7.isEnrolling;
            var _closure2_slot13 = var10;
            var20 = var7.questEnrollmentBlockedUntil;
            var _closure2_slot14 = var20;
            var2 = var2[var19];
            var10 = var4.bind(var5)(var2);
            var7 = var10.useQuestFormattedDate;
            var2 = var1.userStatus;
            var11 = var21 == var2;
            var4 = undefined;
            if(var11) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var4 = var2.completedAt;
case 19:
            var2 = {'year': 'numeric', 'month': 'long', 'day': 'numeric'};
            var7 = var7.bind(var10)(var4, var2);
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 23;
            var10 = var2[var10];
            var11 = var4.bind(var5)(var10);
            var10 = var11.hasWatchVideoTasks;
            var13 = var10.bind(var11)(var1);
            var _closure2_slot15 = var13;
            var2 = var2[var22];
            var10 = var4.bind(var5)(var2);
            var4 = var10.useHasWatchVideoOnMobileTasks;
            var2 = var1.config;
            var12 = var4.bind(var10)(var2);
            var _closure2_slot16 = var12;
            var4 = var1.userStatus;
            var10 = var21 == var4;
            var2 = undefined;
            if(var10) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var2 = var4.enrolledAt;
case 21:
            var17 = var21 != var2;
            var _closure2_slot17 = var17;
            var4 = var1.userStatus;
            var10 = var21 == var4;
            var2 = undefined;
            if(var10) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var2 = var4.completedAt;
case 23:
            var11 = var21 != var2;
            var _closure2_slot18 = var11;
            var4 = var1.userStatus;
            var10 = var21 == var4;
            var2 = undefined;
            if(var10) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var2 = var4.claimedAt;
case 25:
            var10 = var21 != var2;
            var _closure2_slot19 = var10;
            var4 = _closure1_slot0;
            var24 = _closure1_slot2;
            var2 = 24;
            var16 = var24[var2];
            var28 = var4.bind(var5)(var16);
            var16 = var28.isQuestExpired;
            var16 = var16.bind(var28)(var1);
            var _closure2_slot20 = var16;
            var2 = var24[var2];
            var28 = var4.bind(var5)(var2);
            var2 = var28.getIsQuestExpiredButWithinThirtyDayLookback;
            var2 = var2.bind(var28)(var1);
            var _closure2_slot21 = var2;
            var2 = 25;
            var2 = var24[var2];
            var29 = var4.bind(var5)(var2);
            var28 = var29.getDefaultReward;
            var2 = var1.config;
            var2 = var28.bind(var29)(var2);
            var28 = var2.skuId;
            var29 = _closure1_slot1;
            var2 = 26;
            var2 = var24[var2];
            var2 = var29.bind(var5)(var2);
            var35 = var2.bind(var5)();
            var2 = 10;
            var2 = var24[var2];
            var29 = var4.bind(var5)(var2);
            var2 = var29.isThemeDark;
            var37 = var2.bind(var29)(var35);
            var2 = var24[var6];
            var35 = var4.bind(var5)(var2);
            var29 = var35.hasCollectiblesQuestReward;
            var2 = var1.config;
            var29 = var29.bind(var35)(var2);
            var2 = 27;
            var2 = var24[var2];
            var24 = var4.bind(var5)(var2);
            var4 = var24.useFetchCollectiblesProduct;
            var2 = null;
            if(!var29) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var2 = null;
            if(!var11) { _fun0004_ip = 27; continue _fun0004 }
case 29:
            var2 = var28;
case 27:
            var2 = var4.bind(var24)(var2);
            var4 = var2.product;
            var _closure2_slot22 = var4;
            var2 = var2.isFetching;
            var _closure2_slot23 = var2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var24 = var2[var26];
            var36 = var4.bind(var5)(var24);
            var35 = var36.useStateFromStores;
            var24 = _closure1_slot7;
            var29 = new Array(1);
            var29[0] = var24;
            var28 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var2 = var3.hasVerifiedEmailOrPhone;
                    var1 = var2.bind(var3)();
case 30:
                    return var1;
                }
            };
            var28 = var35.bind(var36)(var29, var28);
            var _closure2_slot24 = var28;
            var26 = var2[var26];
            var29 = var4.bind(var5)(var26);
            var28 = var29.useStateFromStores;
            var26 = new Array(1);
            var26[0] = var24;
            var24 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0007_ip = 32; continue _fun0007 }
case 31:
                    var1 = var2.verified;
case 32:
                    return var1;
                }
            };
            var24 = var28.bind(var29)(var26, var24);
            var _closure2_slot25 = var24;
            var22 = var2[var22];
            var24 = var4.bind(var5)(var22);
            var22 = var24.useMobileActivityQuest;
            var22 = var22.bind(var24)(var1);
            var24 = var22.isMobileActivityQuest;
            var _closure2_slot26 = var24;
            var24 = var22.questApplication;
            var22 = var22.launchMobileActivity;
            var _closure2_slot27 = var22;
            var22 = 28;
            var26 = var2[var22];
            var36 = var4.bind(var5)(var26);
            var29 = var36.useToken;
            var35 = _closure1_slot1;
            var26 = 8;
            var28 = var2[var26];
            var28 = var35.bind(var5)(var28);
            var28 = var28.colors;
            var28 = var28.BACKGROUND_BASE_LOWER;
            var28 = var29.bind(var36)(var28);
            var _closure2_slot28 = var28;
            var28 = var2[var22];
            var36 = var4.bind(var5)(var28);
            var29 = var36.useToken;
            var28 = var2[var26];
            var28 = var35.bind(var5)(var28);
            var28 = var28.colors;
            var28 = var28.BACKGROUND_BASE_LOW;
            var28 = var29.bind(var36)(var28);
            var _closure2_slot29 = var28;
            var22 = var2[var22];
            var29 = var4.bind(var5)(var22);
            var28 = var29.useToken;
            var22 = var2[var26];
            var22 = var35.bind(var5)(var22);
            var22 = var22.colors;
            var22 = var22.BACKGROUND_BASE_LOWEST;
            var22 = var28.bind(var29)(var22);
            var _closure2_slot30 = var22;
            var19 = var2[var19];
            var29 = var4.bind(var5)(var19);
            var28 = var29.useQuestFormattedDate;
            var19 = var1.config;
            var22 = var19.expiresAt;
            var19 = {'month': 'numeric', 'day': 'numeric'};
            var43 = var28.bind(var29)(var22, var19);
            var _closure2_slot31 = var43;
            var19 = function trackClick(arg1) {
                var3 = _closure2_slot6;
                var2 = {};
                var4 = _closure2_slot1;
                var4 = var4.id;
                var2['questId'] = var4;
                var4 = _closure2_slot2;
                var2['questContent'] = var4;
                var4 = arg1;
                var2['questContentCTA'] = var4;
                var1 = _closure2_slot4;
                var2['sourceQuestContent'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var _closure2_slot32 = var19;
            var19 = function showQuestBottomSheet() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 29;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 31;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 30;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot1;
                var7 = var7.id;
                var3['questId'] = var7;
                var7 = _closure2_slot3;
                var3['questContentPosition'] = var7;
                var2 = _closure2_slot4;
                var3['sourceQuestContent'] = var2;
                var2 = 'QuestBottomSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var _closure2_slot33 = var19;
            var18 = var2[var18];
            var22 = var4.bind(var5)(var18);
            var19 = var22.usePrimaryCtaCopy;
            var18 = {};
            var18['quest'] = var1;
            var18['application'] = var24;
            var18 = var19.bind(var22)(var18);
            var _closure2_slot34 = var18;
            var18 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot22;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                    var2 = _closure2_slot22;
                    var1 = {};
                    var7 = var2.styles;
                    var9 = var6 == var7;
                    var8 = undefined;
                    var5 = undefined;
                    if(var9) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                    var5 = var7.buttonColors;
case 35:
                    if(!(var6 == var5)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                    var5 = new Array(0);
case 37:
                    var1['buttonColors'] = var5;
                    var5 = _closure2_slot22;
                    var7 = var5.styles;
                    var9 = var6 == var7;
                    var5 = undefined;
                    if(var9) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var5 = var7.confettiColors;
case 39:
                    if(!(var6 == var5)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                    var5 = new Array(0);
case 41:
                    var1['confettiColors'] = var5;
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 32;
                    var5 = var9[var6];
                    var10 = var7.bind(var8)(var5);
                    var5 = _closure2_slot29;
                    var10 = var10.bind(var8)(var5);
                    var5 = new Array(3);
                    var5[0] = var10;
                    var10 = var9[var6];
                    var11 = var7.bind(var8)(var10);
                    var10 = _closure2_slot28;
                    var10 = var11.bind(var8)(var10);
                    var5[1] = var10;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = _closure2_slot30;
                    var6 = var7.bind(var8)(var6);
                    var5[2] = var6;
                    var1['backgroundColors'] = var5;
                    var2['styles'] = var1;
case 33:
                    var1 = _closure2_slot19;
                    if(var1) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                    var1 = _closure2_slot18;
                    if(!var1) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                    var1 = _closure2_slot20;
                    if(!var1) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var1 = _closure2_slot20;
                    if(!var1) { _fun0008_ip = 45; continue _fun0008 }
case 49:
                    var1 = _closure2_slot21;
                    if(var1) { _fun0008_ip = 47; continue _fun0008 }
case 45:
                    var1 = _closure2_slot20;
                    if(var1) { _fun0008_ip = 50; continue _fun0008 }
case 17:
                    var1 = _closure2_slot17;
                    if(!var1) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var1 = _closure2_slot15;
                    if(var1) { _fun0008_ip = 53; continue _fun0008 }
case 51:
                    var1 = _closure2_slot17;
                    if(!var1) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var1 = _closure2_slot26;
                    if(var1) { _fun0008_ip = 56; continue _fun0008 }
case 54:
                    var1 = _closure2_slot17;
                    if(!var1) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var1 = _closure2_slot15;
                    if(var1) { _fun0008_ip = 57; continue _fun0008 }
case 59:
                    var1 = _closure2_slot26;
                    if(var1) { _fun0008_ip = 57; continue _fun0008 }
case 60:
                    var1 = {'text': null, 'variant': 'secondary', 'disabled': false};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 33;
                    var5 = var9[var2];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var9[var2];
                    var2 = var8.bind(var7)(var2);
                    var2 = var2.t;
                    var2 = var2.JiosAn;
                    var2 = var5.bind(var6)(var2);
                    var1['text'] = var2;
                    var2 = function onPress() {
                        var4 = _closure2_slot5;
                        var3 = var4.log;
                        var1 = 'Navigating to console connection action sheet';
                        var1 = var3.bind(var4)(var1);
                        var4 = _closure2_slot32;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 34;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.QuestContentCTA;
                        var3 = var3.VIEW_REQUIREMENTS;
                        var3 = var4.bind(var1)(var3);
                        var2 = _closure2_slot33;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var1['onPress'] = var2;
                    _fun0008_ip = 61; continue _fun0008;
case 57:
                    var2 = {};
                    var5 = _closure2_slot34;
                    var2['text'] = var5;
                    var5 = false;
                    var2['disabled'] = var5;
                    var5 = _closure2_slot13;
                    var2['loading'] = var5;
                    var7 = _closure1_slot3;
                    var6 = undefined;
                    var5 = function* () {
                        var1 = function* anon_0_() {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0009_ip = 60; continue _fun0009 }
case 62:
                                var4 = _closure2_slot5;
                                var3 = var4.log;
                                var2 = 'Enrolling in quest';
                                var2 = var3.bind(var4)(var2);
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 38;
                                var2 = var3[var2];
                                var3 = undefined;
                                var8 = var5.bind(var3)(var2);
                                var7 = var8.enrollInQuest;
                                var2 = _closure2_slot1;
                                var5 = var2.id;
                                var2 = {};
                                var9 = _closure2_slot2;
                                var2['questContent'] = var9;
                                var9 = _closure2_slot26;
                                if(var9) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                                var9 = _closure2_slot15;
                                if(var9) { _fun0009_ip = 63; continue _fun0009 }
case 3:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var9 = 34;
                                var9 = var11[var9];
                                var9 = var10.bind(var3)(var9);
                                var9 = var9.QuestContentCTA;
                                var9 = var9.ACCEPT_QUEST;
                                _fun0009_ip = 65; continue _fun0009;
case 63:
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var10 = 34;
                                var10 = var12[var10];
                                var10 = var11.bind(var3)(var10);
                                var10 = var10.QuestContentCTA;
                                var9 = var10.START_QUEST;
case 65:
                                var2['questContentCTA'] = var9;
                                var9 = _closure2_slot4;
                                var2['sourceQuestContent'] = var9;
                                var2 = var7.bind(var8)(var5, var2);
                                SaveGenerator(address=188);
case 66:
                                return var2;
case 67:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                                var5 = _closure2_slot15;
                                if(!var5) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                                var5 = _closure2_slot16;
                                if(var5) { _fun0009_ip = 72; continue _fun0009 }
case 70:
                                var5 = _closure2_slot26;
                                if(var5) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                                var5 = _closure2_slot33;
                                var5 = var5.bind(var3)();
                                _fun0009_ip = 75; continue _fun0009;
case 73:
                                var5 = _closure2_slot27;
                                var5 = var5.bind(var3)();
                                SaveGenerator(address=237);
case 76:
                                return var5;
case 45:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                                if(!var7) { _fun0009_ip = 75; continue _fun0009 }
case 77:
                                return var5;
case 72:
                                var5 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var4 = 37;
                                var4 = var7[var4];
                                var5 = var5.bind(var3)(var4);
                                var4 = {};
                                var7 = _closure2_slot1;
                                var7 = var7.id;
                                var4['questId'] = var7;
                                var6 = _closure2_slot4;
                                var4['sourceQuestContent'] = var6;
                                var4 = var5.bind(var3)(var4);
case 75:
                                return var3;
case 68:
                                return var2;
case 60:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var5 = var7.bind(var6)(var5);
                    var _closure3_slot1 = var5;
                    var5 = function() {
                        var1 = undefined;
                        var4 = _closure3_slot1;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2['onPress'] = var5;
                    var1 = var2;
case 61:
                    _fun0008_ip = 78; continue _fun0008;
case 56:
                    var2 = {};
                    var5 = _closure2_slot34;
                    var2['text'] = var5;
                    var5 = false;
                    var2['disabled'] = var5;
                    var7 = _closure1_slot3;
                    var6 = undefined;
                    var5 = function* () {
                        var1 = function* anon_0_() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                                var5 = _closure2_slot32;
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 34;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var6.bind(var3)(var4);
                                var4 = var4.QuestContentCTA;
                                var4 = var4.LAUNCH_MOBILE_ACTIVITY;
                                var4 = var5.bind(var3)(var4);
                                var2 = _closure2_slot27;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=68);
case 81:
                                return var2;
case 82:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0010_ip = 83; continue _fun0010 }
case 84:
                                return var3;
case 83:
                                return var2;
case 79:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var5 = var7.bind(var6)(var5);
                    var _closure3_slot0 = var5;
                    var5 = function() {
                        var1 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2['onPress'] = var5;
                    var1 = var2;
case 78:
                    _fun0008_ip = 85; continue _fun0008;
case 53:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 36;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.getVideoQuestWatchCtaText;
                    var5 = _closure2_slot7;
                    var5 = var6.bind(var7)(var5);
                    var2['text'] = var5;
                    var5 = false;
                    var2['disabled'] = var5;
                    var5 = function onPress() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure2_slot5;
                            var2 = var3.log;
                            var1 = 'Navigating to video quest bottom sheet';
                            var1 = var2.bind(var3)(var1);
                            var5 = _closure2_slot32;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 34;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.QuestContentCTA;
                            var3 = var3.WATCH_VIDEO;
                            var3 = var5.bind(var1)(var3);
                            var3 = _closure2_slot16;
                            if(var3) { _fun0011_ip = 86; continue _fun0011 }
case 87:
                            var3 = _closure2_slot33;
                            var3 = var3.bind(var1)();
                            _fun0011_ip = 88; continue _fun0011;
case 86:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 37;
                            var2 = var5[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var5 = _closure2_slot1;
                            var5 = var5.id;
                            var2['questId'] = var5;
                            var4 = _closure2_slot4;
                            var2['sourceQuestContent'] = var4;
                            var2 = var3.bind(var1)(var2);
case 88:
                            return var1;
                        }
                    };
                    var2['onPress'] = var5;
                    var1 = var2;
case 85:
                    _fun0008_ip = 89; continue _fun0008;
case 50:
                    var2 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 33;
                    var8 = var11[var6];
                    var7 = undefined;
                    var8 = var10.bind(var7)(var8);
                    var9 = var8.intl;
                    var8 = var9.formatToPlainString;
                    var6 = var11[var6];
                    var6 = var10.bind(var7)(var6);
                    var6 = var6.t;
                    var7 = var6.14o6QY;
                    var6 = {};
                    var10 = _closure2_slot31;
                    var6['expiryDate'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['text'] = var6;
                    var6 = _closure2_slot12;
                    if(var6) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                    var6 = _closure2_slot11;
case 90:
                    if(var6) { _fun0008_ip = 92; continue _fun0008 }
case 93:
                    var6 = _closure2_slot23;
case 92:
                    var2['loading'] = var6;
                    var6 = true;
                    var2['disabled'] = var6;
                    var6 = 'secondary';
                    var2['variant'] = var6;
                    var5 = _closure1_slot10;
                    var2['onPress'] = var5;
                    var1 = var2;
case 89:
                    _fun0008_ip = 94; continue _fun0008;
case 47:
                    var2 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 33;
                    var6 = var10[var5];
                    var8 = undefined;
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.cfY4PE;
                    var5 = var6.bind(var7)(var5);
                    var2['text'] = var5;
                    var5 = _closure2_slot12;
                    if(var5) { _fun0008_ip = 95; continue _fun0008 }
case 96:
                    var5 = _closure2_slot11;
case 95:
                    if(var5) { _fun0008_ip = 97; continue _fun0008 }
case 25:
                    var5 = _closure2_slot23;
case 97:
                    var2['loading'] = var5;
                    var5 = function onPress() {
                        var6 = _closure2_slot32;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 34;
                        var2 = var4[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.QuestContentCTA;
                        var2 = var2.CLAIM_REWARD;
                        var2 = var6.bind(var1)(var2);
                        var2 = 35;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.handleRewardClaimThenView;
                        var2 = {};
                        var6 = _closure2_slot22;
                        var2['product'] = var6;
                        var6 = _closure2_slot1;
                        var2['quest'] = var6;
                        var6 = _closure2_slot2;
                        var2['questContent'] = var6;
                        var6 = _closure2_slot3;
                        var2['questContentPosition'] = var6;
                        var6 = _closure2_slot24;
                        var2['currentUserHasVerifiedEmailOrPhone'] = var6;
                        var6 = _closure2_slot25;
                        var2['currentUserHasVerifiedEmail'] = var6;
                        var5 = _closure2_slot4;
                        var2['sourceQuestContent'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onPress'] = var5;
                    var1 = var2;
case 94:
                    _fun0008_ip = 98; continue _fun0008;
case 43:
                    var2 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 33;
                    var6 = var10[var5];
                    var8 = undefined;
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var9.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.vTgCWx;
                    var5 = var6.bind(var7)(var5);
                    var2['text'] = var5;
                    var4 = _closure2_slot23;
                    var2['loading'] = var4;
                    var3 = function onPress() {
                        var6 = _closure2_slot32;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 34;
                        var2 = var4[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.QuestContentCTA;
                        var2 = var2.SHOW_REWARD;
                        var2 = var6.bind(var1)(var2);
                        var2 = 35;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.viewReward;
                        var2 = {};
                        var6 = _closure2_slot22;
                        var2['product'] = var6;
                        var6 = _closure2_slot1;
                        var2['quest'] = var6;
                        var6 = _closure2_slot2;
                        var2['questContent'] = var6;
                        var6 = _closure2_slot3;
                        var2['questContentPosition'] = var6;
                        var5 = _closure2_slot4;
                        var2['sourceQuestContent'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onPress'] = var3;
                    var1 = var2;
case 98:
                    return var1;
                }
            };
            var22 = var18.bind(var5)();
            var19 = 33;
            var18 = var2[var19];
            var18 = var4.bind(var5)(var18);
            var29 = var18.intl;
            var28 = var29.formatToPlainString;
            var18 = var2[var19];
            var18 = var4.bind(var5)(var18);
            var18 = var18.t;
            var24 = var18.EAYZAr;
            var18 = {};
            var35 = var1.config;
            var35 = var35.messages;
            var35 = var35.questName;
            var18['questName'] = var35;
            var40 = var28.bind(var29)(var24, var18);
            var18 = var2[var6];
            var28 = var4.bind(var5)(var18);
            var24 = var28.hasVirtualCurrencyReward;
            var18 = var1.config;
            var28 = var24.bind(var28)(var18);
            var _closure2_slot35 = var28;
            var18 = var2[var6];
            var29 = var4.bind(var5)(var18);
            var24 = var29.getVirtualCurrencyRewardOrbQuantity;
            var18 = var1.config;
            var24 = var24.bind(var29)(var18);
            var _closure2_slot36 = var24;
            var2 = var2[var6];
            var6 = var4.bind(var5)(var2);
            var4 = var6.getDefaultRewardName;
            var2 = var1.config;
            var2 = var4.bind(var6)(var2);
            var _closure2_slot37 = var2;
            var18 = _closure1_slot4;
            var6 = var18.useMemo;
            var4 = new Array(5);
            var4[0] = var10;
            var4[1] = var28;
            var4[2] = var24;
            var4[3] = var2;
            var4[4] = var8;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 39;
                    var1 = var4[var1];
                    var7 = undefined;
                    var3 = var3.bind(var7)(var1);
                    var1 = var3.isFabric;
                    var1 = var1.bind(var3)();
                    var _closure3_slot0 = var1;
                    if(var1) { _fun0012_ip = 99; continue _fun0012 }
case 100:
                    var1 = {'marginTop': 0, 'marginRight': 3};
                    _fun0012_ip = 9; continue _fun0012;
case 99:
                    var3 = {};
                    var5 = {};
                    var4 = 3;
                    var5['translateY'] = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var3['transform'] = var4;
                    var1 = var3;
case 9:
                    var _closure3_slot1 = var1;
                    var1 = _closure2_slot19;
                    if(!var1) { _fun0012_ip = 101; continue _fun0012 }
case 102:
                    var1 = _closure2_slot35;
                    if(var1) { _fun0012_ip = 45; continue _fun0012 }
case 101:
                    var1 = _closure2_slot19;
                    if(var1) { _fun0012_ip = 103; continue _fun0012 }
case 104:
                    var1 = _closure2_slot35;
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 33;
                    var8 = var10[var4];
                    var8 = var5.bind(var7)(var8);
                    var9 = var8.intl;
                    var8 = var9.format;
                    var4 = var10[var4];
                    var4 = var5.bind(var7)(var4);
                    var4 = var4.t;
                    if(var1) { _fun0012_ip = 71; continue _fun0012 }
case 105:
                    var5 = var4.0IUT4Y;
                    var1 = {};
                    var10 = function rewardWithArticleHook() {
                        var1 = _closure2_slot10;
                        return var1;
                    };
                    var1['rewardWithArticleHook'] = var10;
                    var1 = var8.bind(var9)(var5, var1);
                    _fun0012_ip = 106; continue _fun0012;
case 71:
                    var5 = var4.ro1sze;
                    var4 = {};
                    var10 = function balanceHook() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot12;
                            var2 = {};
                            var9 = _closure1_slot11;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 40;
                            var5 = var5[var1];
                            var1 = undefined;
                            var5 = var6.bind(var1)(var5);
                            var8 = var5.OrbsIcon;
                            var5 = {'size': 'xs', 'color': 'mobile-text-heading-primary'};
                            var10 = _closure3_slot1;
                            var5['style'] = var10;
                            var8 = var9.bind(var1)(var8, var5);
                            var5 = new Array(3);
                            var5[0] = var8;
                            var6 = _closure3_slot0;
                            if(!var6) { _fun0013_ip = 107; continue _fun0013 }
case 64:
                            var9 = _closure1_slot11;
                            var8 = _closure1_slot6;
                            var7 = {};
                            var10 = {};
                            var11 = 2;
                            var10['width'] = var11;
                            var7['style'] = var10;
                            var6 = var9.bind(var1)(var8, var7);
case 107:
                            var5[1] = var6;
                            var6 = _closure2_slot36;
                            var5[2] = var6;
                            var2['children'] = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var4['balanceHook'] = var10;
                    var1 = var8.bind(var9)(var5, var4);
case 106:
                    _fun0012_ip = 76; continue _fun0012;
case 103:
                    var1 = _closure2_slot37;
case 76:
                    _fun0012_ip = 108; continue _fun0012;
case 45:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 33;
                    var4 = var8[var2];
                    var4 = var3.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.format;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.t;
                    var3 = var2.8Op4c4;
                    var2 = {};
                    var6 = function balanceHook() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot12;
                            var2 = {};
                            var9 = _closure1_slot11;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 40;
                            var5 = var5[var1];
                            var1 = undefined;
                            var5 = var6.bind(var1)(var5);
                            var8 = var5.OrbsIcon;
                            var5 = {'size': 'xs', 'color': 'mobile-text-heading-primary'};
                            var10 = _closure3_slot1;
                            var5['style'] = var10;
                            var8 = var9.bind(var1)(var8, var5);
                            var5 = new Array(3);
                            var5[0] = var8;
                            var6 = _closure3_slot0;
                            if(!var6) { _fun0014_ip = 107; continue _fun0014 }
case 64:
                            var9 = _closure1_slot11;
                            var8 = _closure1_slot6;
                            var7 = {};
                            var10 = {};
                            var11 = 2;
                            var10['width'] = var11;
                            var7['style'] = var10;
                            var6 = var9.bind(var1)(var8, var7);
case 107:
                            var5[1] = var6;
                            var6 = _closure2_slot36;
                            var5[2] = var6;
                            var2['children'] = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var2['balanceHook'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 108:
                    return var1;
                }
            };
            var41 = var6.bind(var18)(var2, var4);
            if(!var16) { _fun0004_ip = 109; continue _fun0004 }
case 110:
            if(!var11) { _fun0004_ip = 109; continue _fun0004 }
case 111:
            if(var10) { _fun0004_ip = 109; continue _fun0004 }
case 112:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = var2[var19];
            var6 = var4.bind(var5)(var6);
            var18 = var6.intl;
            var6 = var18.formatToPlainString;
            var2 = var2[var19];
            var2 = var4.bind(var5)(var2);
            var2 = var2.t;
            var4 = var2.l1jCM/;
            var2 = {};
            var2['date'] = var7;
            var39 = var6.bind(var18)(var4, var2);
            _fun0004_ip = 113; continue _fun0004;
case 109:
            var2 = var16;
            if(!var2) { _fun0004_ip = 114; continue _fun0004 }
case 115:
            var2 = var10;
case 114:
            var39 = var3;
            if(!var2) { _fun0004_ip = 113; continue _fun0004 }
case 116:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = var2[var19];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var2[var19];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.RrxtPU;
            var2 = {};
            var2['reward'] = var8;
            var2['date'] = var7;
            var39 = var4.bind(var6)(var3, var2);
case 113:
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var2 = var1.id;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var14;
            var2 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 37;
                var2 = var7[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var6 = _closure2_slot1;
                var6 = var6.id;
                var2['questId'] = var6;
                var6 = _closure1_slot0;
                var5 = 41;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.VideoQuestModalSteps;
                var5 = var5.WATCH_VIDEO;
                var2['initialStep'] = var5;
                var4 = _closure2_slot4;
                var2['sourceQuestContent'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18 = var4.bind(var6)(var2, var3);
            var4 = _closure1_slot13;
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var2 = 42;
            var2 = var36[var2];
            var2 = var35.bind(var5)(var2);
            var3 = var2.Card;
            var2 = {};
            var6 = var23.container;
            var2['style'] = var6;
            var6 = function onLayout(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0015_ip = 30; continue _fun0015 }
case 117:
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var3 = var1.id;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var1, var3);
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onLayout'] = var6;
            var8 = _closure1_slot6;
            var6 = {};
            var24 = var23.heroContainer;
            var7 = new Array(2);
            var7[0] = var24;
            var24 = {};
            var24['height'] = var25;
            var7[1] = var24;
            var6['style'] = var7;
            var28 = _closure1_slot11;
            var25 = _closure1_slot1;
            var7 = 43;
            var7 = var36[var7];
            var24 = var25.bind(var5)(var7);
            var7 = {};
            var29 = {};
            var38 = var38.url;
            var29['uri'] = var38;
            var7['source'] = var29;
            var29 = var23.heroImg;
            var7['style'] = var29;
            var7 = var28.bind(var5)(var24, var7);
            var24 = new Array(4);
            var24[0] = var7;
            var7 = 44;
            var7 = var36[var7];
            var25 = var25.bind(var5)(var7);
            var7 = {};
            var29 = var23.heroLinearGradientOverlay;
            var7['style'] = var29;
            var29 = 45;
            var38 = var36[var29];
            var38 = var35.bind(var5)(var38);
            var38 = var38.VerticalGradient;
            var38 = var38.START;
            var7['start'] = var38;
            var29 = var36[var29];
            var29 = var35.bind(var5)(var29);
            var29 = var29.VerticalGradient;
            var29 = var29.END;
            var7['end'] = var29;
            var29 = new Array(3);
            var29[0] = var32;
            var29[1] = var31;
            var29[2] = var30;
            var7['colors'] = var29;
            var7 = var28.bind(var5)(var25, var7);
            var24[1] = var7;
            var7 = var1.preview;
            if(!var7) { _fun0004_ip = 118; continue _fun0004 }
case 119:
            var29 = _closure1_slot11;
            var28 = _closure1_slot6;
            var25 = {};
            var30 = var23.previewBadge;
            var25['style'] = var30;
            var38 = _closure1_slot0;
            var32 = _closure1_slot2;
            var30 = 46;
            var30 = var32[var30];
            var30 = var38.bind(var5)(var30);
            var31 = var30.Text;
            var30 = {'variant': 'eyebrow', 'color': 'always-white'};
            var35 = var32[var19];
            var35 = var38.bind(var5)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var32 = var32[var19];
            var32 = var38.bind(var5)(var32);
            var32 = var32.t;
            var32 = var32.SKNnqq;
            var32 = var35.bind(var36)(var32);
            var30['children'] = var32;
            var30 = var29.bind(var5)(var31, var30);
            var25['children'] = var30;
            var7 = var29.bind(var5)(var28, var25);
case 118:
            var24[2] = var7;
            var29 = _closure1_slot13;
            var28 = _closure1_slot6;
            var25 = {};
            var7 = var23.heroFooterContainer;
            var25['style'] = var7;
            var30 = {};
            var7 = var23.heroFooterLeftContainer;
            var30['style'] = var7;
            var47 = _closure1_slot11;
            var32 = _closure1_slot1;
            var31 = _closure1_slot2;
            var7 = 47;
            var7 = var31[var7];
            var32 = var32.bind(var5)(var7);
            var7 = {};
            var7['assetUrl'] = var33;
            var7 = var47.bind(var5)(var32, var7);
            var42 = new Array(2);
            var42[0] = var7;
            var32 = _closure1_slot0;
            var7 = 48;
            var33 = var31[var7];
            var33 = var32.bind(var5)(var33);
            var45 = var33.Stack;
            var44 = {'direction': 'horizontal', 'align': 'center', 'spacing': 4};
            var36 = 46;
            var31 = var31[var36];
            var31 = var32.bind(var5)(var31);
            var46 = var31.Text;
            var33 = {};
            var38 = 'text-xs/medium';
            var33['variant'] = var38;
            var35 = 'always-white';
            var31 = var35;
            if(!var37) { _fun0004_ip = 120; continue _fun0004 }
case 121:
            var31 = 'text-muted';
case 120:
            var33['color'] = var31;
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var48 = var31[var19];
            var48 = var32.bind(var5)(var48);
            var50 = var48.intl;
            var49 = var50.string;
            var48 = var31[var19];
            var48 = var32.bind(var5)(var48);
            var48 = var48.t;
            var48 = var48.VAbKhK;
            var48 = var49.bind(var50)(var48);
            var33['children'] = var48;
            var33 = var47.bind(var5)(var46, var33);
            var46 = new Array(3);
            var46[0] = var33;
            var33 = _closure1_slot11;
            var48 = _closure1_slot5;
            var47 = {};
            var50 = _closure1_slot1;
            var49 = 49;
            var49 = var31[var49];
            var49 = var50.bind(var5)(var49);
            var47['source'] = var49;
            var49 = {'height': 16, 'width': 16};
            var47['style'] = var49;
            var47 = var33.bind(var5)(var48, var47);
            var46[1] = var47;
            var47 = var31[var36];
            var47 = var32.bind(var5)(var47);
            var48 = var47.Text;
            var47 = {'variant': 'text-xs/medium', 'color': 'always-white'};
            var49 = var1.config;
            var49 = var49.messages;
            var49 = var49.gamePublisher;
            var47['children'] = var49;
            var47 = var33.bind(var5)(var48, var47);
            var46[2] = var47;
            var44['children'] = var46;
            var44 = var29.bind(var5)(var45, var44);
            var42[1] = var44;
            var30['children'] = var42;
            var42 = var29.bind(var5)(var28, var30);
            var30 = new Array(2);
            var30[0] = var42;
            var31 = var31[var36];
            var31 = var32.bind(var5)(var31);
            var32 = var31.Text;
            var31 = {};
            var31['variant'] = var38;
            if(!var37) { _fun0004_ip = 122; continue _fun0004 }
case 123:
            var35 = 'text-default';
case 122:
            var31['color'] = var35;
            var37 = _closure1_slot0;
            var35 = _closure1_slot2;
            var38 = var35[var19];
            var38 = var37.bind(var5)(var38);
            var42 = var38.intl;
            var38 = var42.format;
            var35 = var35[var19];
            var35 = var37.bind(var5)(var35);
            var35 = var35.t;
            var37 = var35.7D8r4F;
            var35 = {};
            var35['expiryDate'] = var43;
            var35 = var38.bind(var42)(var37, var35);
            var31['children'] = var35;
            var31 = var33.bind(var5)(var32, var31);
            var30[1] = var31;
            var25['children'] = var30;
            var25 = var29.bind(var5)(var28, var25);
            var24[3] = var25;
            var6['children'] = var24;
            var8 = var4.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var29 = _closure1_slot11;
            var28 = _closure1_slot6;
            var25 = {};
            var8 = var23.detailsWrapper;
            var25['style'] = var8;
            var31 = _closure1_slot13;
            var30 = {};
            var8 = var23.detailsContainer;
            var30['style'] = var8;
            var8 = {};
            var24 = var23.rewardImgContainer;
            var8['style'] = var24;
            var33 = _closure1_slot11;
            var32 = _closure1_slot1;
            var35 = _closure1_slot2;
            if(var9) { _fun0004_ip = 124; continue _fun0004 }
case 125:
            var9 = 51;
            var9 = var35[var9];
            var24 = var32.bind(var5)(var9);
            var9 = {'quest': null, 'height': 64, 'width': 64};
            var9['quest'] = var1;
            var9 = var33.bind(var5)(var24, var9);
            _fun0004_ip = 126; continue _fun0004;
case 124:
            var24 = 50;
            var24 = var35[var24];
            var32 = var32.bind(var5)(var24);
            var24 = {};
            var24['quest'] = var1;
            var24['progress'] = var34;
            var34 = 'sm';
            var24['size'] = var34;
            var9 = var33.bind(var5)(var32, var24);
case 126:
            var8['children'] = var9;
            var8 = var29.bind(var5)(var28, var8);
            var32 = new Array(2);
            var32[0] = var8;
            var9 = _closure1_slot13;
            var34 = _closure1_slot6;
            var33 = {};
            var8 = var23.detailsTextContainer;
            var33['style'] = var8;
            var38 = _closure1_slot11;
            var8 = _closure1_slot0;
            var24 = _closure1_slot2;
            var35 = var24[var36];
            var35 = var8.bind(var5)(var35);
            var37 = var35.Text;
            var35 = {'variant': 'eyebrow', 'color': 'text-brand'};
            var42 = var23.questName;
            var35['style'] = var42;
            var35['children'] = var40;
            var37 = var38.bind(var5)(var37, var35);
            var35 = new Array(3);
            var35[0] = var37;
            var37 = var24[var36];
            var37 = var8.bind(var5)(var37);
            var40 = var37.Text;
            var37 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var37['children'] = var41;
            var37 = var38.bind(var5)(var40, var37);
            var35[1] = var37;
            var36 = var24[var36];
            var36 = var8.bind(var5)(var36);
            var37 = var36.Text;
            var36 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var36['children'] = var39;
            var36 = var38.bind(var5)(var37, var36);
            var35[2] = var36;
            var33['children'] = var35;
            var33 = var9.bind(var5)(var34, var33);
            var32[1] = var33;
            var30['children'] = var32;
            var30 = var31.bind(var5)(var28, var30);
            var25['children'] = var30;
            var25 = var29.bind(var5)(var28, var25);
            var6[1] = var25;
            var7 = var24[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Stack;
            var7 = {'direction': 'horizontal', 'align': 'center'};
            var25 = _closure1_slot1;
            var24 = var24[var26];
            var24 = var25.bind(var5)(var24);
            var24 = var24.spacing;
            var24 = var24.PX_8;
            var7['spacing'] = var24;
            var23 = var23.buttonContainers;
            var7['style'] = var23;
            if(!(var21 != var20)) { _fun0004_ip = 127; continue _fun0004 }
case 128:
            if(var17) { _fun0004_ip = 127; continue _fun0004 }
case 129:
            if(var11) { _fun0004_ip = 127; continue _fun0004 }
case 130:
            if(var10) { _fun0004_ip = 127; continue _fun0004 }
case 131:
            var20 = _closure1_slot13;
            var17 = _closure1_slot12;
            var10 = {};
            var25 = _closure1_slot11;
            var29 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 52;
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
            var28 = var28.V293qn;
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
                var1 = 29;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 31;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 53;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot1;
                var7 = var7.id;
                var3['questId'] = var7;
                var7 = _closure2_slot14;
                var3['questEnrollmentBlockedUntil'] = var7;
                var2 = _closure2_slot4;
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
            var26 = var26.vY9GgG;
            var26 = var27.bind(var28)(var26);
            var23['text'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var21[1] = var23;
            var10['children'] = var21;
            var17 = var20.bind(var5)(var17, var10);
            _fun0004_ip = 132; continue _fun0004;
case 127:
            var21 = _closure1_slot11;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var10 = 52;
            var10 = var23[var10];
            var10 = var20.bind(var5)(var10);
            var20 = var10.Button;
            var10 = {};
            var23 = true;
            var10['grow'] = var23;
            var53 = var10;
            var52 = var22;
            var22 = copyDataProperties(var53, var52);
            var17 = var21.bind(var5)(var20, var10);
case 132:
            var10 = new Array(3);
            var10[0] = var17;
            if(!var11) { _fun0004_ip = 133; continue _fun0004 }
case 134:
            var11 = var13;
case 133:
            if(!var11) { _fun0004_ip = 135; continue _fun0004 }
case 136:
            var11 = var12;
case 135:
            if(!var11) { _fun0004_ip = 137; continue _fun0004 }
case 138:
            var17 = _closure1_slot11;
            var23 = _closure1_slot0;
            var21 = _closure1_slot2;
            var12 = 54;
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
            var19 = var19.YsCuyF;
            var19 = var20.bind(var22)(var19);
            var12['accessibilityLabel'] = var19;
            var20 = _closure1_slot1;
            var19 = 55;
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var12['icon'] = var19;
            var12['onPress'] = var18;
            var18 = 'secondary';
            var12['variant'] = var18;
            var11 = var17.bind(var5)(var13, var12);
case 137:
            var10[1] = var11;
            var13 = _closure1_slot11;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 56;
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
    var2 = var4.bind(var7)(var2);
    var4 = 57;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestCard.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 348;
    var3['ESTIMATED_CARD_HEIGHT'] = var4;
    var3['QuestCard'] = var2;
    return var1;
})();