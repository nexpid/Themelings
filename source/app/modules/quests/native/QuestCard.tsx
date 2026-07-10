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
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Image;
    var _closure1_slot6 = var8;
    var14 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var8 = var4.jsxs;
    var _closure1_slot13 = var8;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var15 = 9;
    var4 = var6[var15];
    var4 = var16.bind(var1)(var4);
    var4 = var4.colors;
    var19 = var4.BACKGROUND_SURFACE_HIGH;
    var4 = var6[var15];
    var4 = var16.bind(var1)(var4);
    var4 = var4.colors;
    var17 = var4.BORDER_SUBTLE;
    var4 = 10;
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
            var2 = 11;
            var2 = var4[var2];
            var3 = undefined;
            var5 = var5.bind(var3)(var2);
            var2 = var5.isThemeDark;
            var2 = var2.bind(var5)(var6);
            var5 = _closure1_slot1;
            var9 = 9;
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
            var1 = 12;
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
            var3 = 11;
            var4 = var2[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.isThemeDark;
            var5 = var4.bind(var5)(var7);
            var4 = _closure1_slot1;
            var9 = 9;
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
            var1 = 12;
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
            var1 = 11;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isThemeDark;
            var1 = var1.bind(var3)(var5);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 9;
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
    var8 = var6[var15];
    var8 = var16.bind(var1)(var8);
    var8 = var8.space;
    var8 = var8.PX_16;
    var _closure1_slot15 = var8;
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
    var19 = var19.space;
    var19 = var19.PX_16;
    var18['marginBottom'] = var19;
    var19 = 'hidden';
    var18['overflow'] = var19;
    var8['container'] = var18;
    var19 = {'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end'};
    var18 = 'flex';
    var20 = var6[var15];
    var20 = var16.bind(var1)(var20);
    var20 = var20.space;
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
    var19 = var19.space;
    var19 = var19.PX_8;
    var14['top'] = var19;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.space;
    var19 = var19.PX_8;
    var14['right'] = var19;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_BRAND;
    var14['backgroundColor'] = var19;
    var19 = var6[var15];
    var19 = var16.bind(var1)(var19);
    var19 = var19.space;
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
    var19 = var19.space;
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
    var18 = var18.space;
    var18 = var18.PX_12;
    var14['padding'] = var18;
    var8['detailsWrapper'] = var14;
    var14 = {'display': 'flex', 'flexDirection': 'row'};
    var8['detailsContainer'] = var14;
    var14 = {};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.space;
    var18 = var18.PX_4;
    var14['marginBottom'] = var18;
    var8['questName'] = var14;
    var14 = {'display': 'flex', 'flexDirection': 'column'};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.space;
    var18 = var18.PX_4;
    var14['gap'] = var18;
    var8['bodyContainer'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center', 'rowGap': null, 'columnGap': null, 'flexWrap': 'wrap'};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.space;
    var18 = var18.PX_4;
    var14['rowGap'] = var18;
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.space;
    var18 = var18.PX_8;
    var14['columnGap'] = var18;
    var8['subtitleRow'] = var14;
    var14 = {'flex': 1, 'justifyContent': 'center'};
    var8['detailsTextContainer'] = var14;
    var14 = {'borderTopWidth': 1, 'borderTopColor': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var14['borderTopColor'] = var17;
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_12;
    var14['padding'] = var15;
    var8['buttonContainers'] = var14;
    var14 = {'flexBasis': 0, 'flexGrow': 1, 'flexShrink': 1};
    var8['equalWidthContainer'] = var14;
    var8 = var9.bind(var13)(var8);
    var _closure1_slot16 = var8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyleProperties;
    var4 = {};
    var4['gradientStart'] = var12;
    var4['gradientMid'] = var11;
    var4['gradientEnd'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = function trackClick(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var6 = arg1;
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 33;
                    var5 = var8[var3];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var5);
                    var5 = var7.shouldMigrateToAdAnalyticsInterface;
                    var3 = var8[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.AdAnalyticsInterfaceExperimentStep;
                    var4 = var3.STEP_2_CLICKED_INTERNAL;
                    var3 = 'quest_card';
                    var3 = var5.bind(var7)(var4, var3);
                    if(var3) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                    var4 = _closure2_slot6;
                    var3 = {};
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var3['questId'] = var7;
                    var7 = _closure2_slot2;
                    var3['questContent'] = var7;
                    var3['questContentCTA'] = var6;
                    var5 = _closure2_slot4;
                    var3['sourceQuestContent'] = var5;
                    var3 = var4.bind(var1)(var3);
                    _fun0005_ip = 12; continue _fun0005;
case 10:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 34;
                    var2 = var8[var2];
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.captureAdUserAction;
                    var2 = {};
                    var5 = 35;
                    var5 = var8[var5];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.AdUserActionType;
                    var5 = var5.CLICK_INTERNAL;
                    var2['type'] = var5;
                    var5 = 36;
                    var5 = var8[var5];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.AdCreativeType;
                    var5 = var5.QUEST;
                    var2['adCreativeType'] = var5;
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var2['adCreativeId'] = var7;
                    var2['questContentCTA'] = var6;
                    var6 = _closure2_slot2;
                    var2['surfaceId'] = var6;
                    var6 = _closure2_slot4;
                    var2['sourceQuestContent'] = var6;
                    var5 = _closure2_slot34;
                    var5 = var5.bind(var1)();
                    var2['impressionId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var _closure2_slot41 = var2;
            var2 = function showQuestBottomSheet() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 38;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 40;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 39;
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
            var _closure2_slot42 = var2;
            var9 = var1.containerPadding;
            var2 = var1.onLayout;
            var _closure2_slot0 = var2;
            var19 = var1.quest;
            var _closure2_slot1 = var19;
            var26 = var1.questContent;
            var4 = undefined;
            if(!(var4 === var26)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 13;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.QuestContent;
            var26 = var2.QUEST_HOME_MOBILE;
case 13:
            var _closure2_slot2 = var26;
            var2 = var1.questContentPosition;
            var _closure2_slot3 = var2;
            var16 = var1.sourceQuestContent;
            var _closure2_slot4 = var16;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 14;
            var3 = var1[var3];
            var6 = var2.bind(var4)(var3);
            var5 = var6.getQuestLogger;
            var3 = {};
            var3['quest'] = var19;
            var7 = _closure1_slot10;
            var7 = var7.QUEST_HOME_MOBILE;
            var3['location'] = var7;
            var3 = var5.bind(var6)(var3);
            var _closure2_slot5 = var3;
            var3 = 15;
            var3 = var1[var3];
            var5 = var2.bind(var4)(var3);
            var3 = var5.useTrackQuestContentClickedWithImpression;
            var3 = var3.bind(var5)();
            var _closure2_slot6 = var3;
            var10 = 16;
            var3 = var1[var10];
            var5 = var2.bind(var4)(var3);
            var3 = var5.useQuestTaskDetails;
            var3 = var3.bind(var5)(var19);
            var _closure2_slot7 = var3;
            var1 = var1[var10];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useQuestCompletionDetails;
            var1 = var1.bind(var2)(var19);
            var41 = var1.completedRatio;
            var2 = var19.userStatus;
            var43 = null;
            var3 = var43 == var2;
            var1 = undefined;
            if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var1 = var2.enrolledAt;
case 15:
            var36 = var43 != var1;
            var1 = _closure1_slot16;
            var29 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var1 = var2[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.width;
            var1 = _closure1_slot15;
            var5 = 2;
            var1 = var5 * var1;
            var1 = var3 - var1;
            var _closure2_slot8 = var1;
            var3 = 0.2803030303030303;
            var24 = var3 * var1;
            var _closure2_slot9 = var24;
            var8 = _closure1_slot5;
            var6 = var8.useMemo;
            var3 = new Array(3);
            var3[0] = var19;
            var3[1] = var1;
            var3[2] = var24;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 18;
                    var2 = var1[var8];
                    var6 = undefined;
                    var5 = var9.bind(var6)(var2);
                    var3 = var5.getQuestAsset;
                    var2 = _closure2_slot1;
                    var1 = var1[var8];
                    var1 = var9.bind(var6)(var1);
                    var1 = var1.QuestAssetType;
                    var1 = var1.HERO;
                    var3 = var3.bind(var5)(var2, var1);
                    var1 = var3.isAnimated;
                    var2 = {};
                    var11 = var2;
                    var10 = var3;
                    var5 = copyDataProperties(var11, var10);
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var6 = var5.bind(var6)(var4);
                    if(var1) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                    var4 = var6.getScaledImageUrl;
                    var1 = {};
                    var5 = var3.url;
                    var1['assetUrl'] = var5;
                    var5 = _closure2_slot8;
                    var1['width'] = var5;
                    var5 = _closure2_slot9;
                    var1['height'] = var5;
                    var4 = var4.bind(var6)(var1);
                    var1 = 'url';
                    var2[0] = var4;
                    var1 = var2;
                    _fun0006_ip = 19; continue _fun0006;
case 17:
                    var5 = var6.getScaledFirstFrameImageUrl;
                    var4 = {};
                    var8 = var3.url;
                    var4['assetUrl'] = var8;
                    var8 = _closure2_slot8;
                    var4['width'] = var8;
                    var7 = _closure2_slot9;
                    var4['height'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var5 = null;
                    if(!(var5 == var4)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                    var4 = var3.url;
case 20:
                    var3 = 'url';
                    var2[2] = var4;
                    var1 = var2;
case 19:
                    return var1;
                }
            };
            var48 = var6.bind(var8)(var1, var3);
            var7 = _closure1_slot0;
            var6 = 19;
            var1 = var2[var6];
            var3 = var7.bind(var4)(var1);
            var1 = var3.useQuestGameLogotypeAssetUrl;
            var40 = var1.bind(var3)(var19);
            var1 = _closure1_slot17;
            var1 = var1.bind(var4)();
            var37 = var1.gradientStart;
            var34 = var1.gradientMid;
            var30 = var1.gradientEnd;
            var1 = 20;
            var1 = var2[var1];
            var11 = var7.bind(var4)(var1);
            var3 = var11.useRecyclingState;
            var12 = var19.id;
            var1 = new Array(1);
            var1[0] = var12;
            var3 = var3.bind(var11)(var43, var1);
            var1 = _closure1_slot4;
            var5 = var1.bind(var4)(var3, var5);
            var1 = 0;
            var1 = var5[var1];
            var _closure2_slot10 = var1;
            var3 = 1;
            var3 = var5[var3];
            var _closure2_slot11 = var3;
            var11 = var8.useCallback;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure2_slot11;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var39 = var11.bind(var8)(var3, var5);
            var5 = var8.useEffect;
            var3 = new Array(3);
            var3[0] = var1;
            var1 = var19.id;
            var3[1] = var1;
            var3[2] = var26;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var1 = false;
                    if(!(var1 === var2)) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 21;
                    var1 = var10[var1];
                    var9 = undefined;
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.increment;
                    var1 = {};
                    var8 = _closure1_slot0;
                    var4 = 22;
                    var4 = var10[var4];
                    var4 = var8.bind(var9)(var4);
                    var4 = var4.MetricEvents;
                    var4 = var4.QUEST_CONTENT_RENDERING_FAILURE;
                    var1['name'] = var4;
                    var4 = _closure2_slot1;
                    var11 = var4.id;
                    var5 = global;
                    var4 = var5.HermesInternal;
                    var7 = var4.concat;
                    var4 = 'quest_id:';
                    var7 = var7.bind(var4)(var11);
                    var4 = new Array(3);
                    var4[0] = var7;
                    var7 = 23;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.getQuestContentName;
                    var6 = _closure2_slot2;
                    var7 = var7.bind(var8)(var6);
                    var5 = var5.HermesInternal;
                    var6 = var5.concat;
                    var5 = 'quest_content:';
                    var5 = var6.bind(var5)(var7);
                    var4[1] = var5;
                    var5 = 'reason:asset_loading_error';
                    var4[2] = var5;
                    var1['tags'] = var4;
                    var1 = var2.bind(var3)(var1);
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var8)(var1, var3);
            var15 = 24;
            var1 = var2[var15];
            var8 = var7.bind(var4)(var1);
            var5 = var8.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var5.bind(var8)(var3, var1);
            var3 = 25;
            var1 = var2[var3];
            var8 = var7.bind(var4)(var1);
            var5 = var8.getDefaultRewardNameWithArticle;
            var1 = var19.config;
            var1 = var5.bind(var8)(var1, var11);
            var _closure2_slot12 = var1;
            var5 = var2[var15];
            var13 = var7.bind(var4)(var5);
            var12 = var13.useStateFromStoresObject;
            var5 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var1 = {};
                var2 = _closure1_slot9;
                var5 = var2.getRewards;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var4 = var5.bind(var2)(var4);
                var1['reward'] = var4;
                var5 = var2.isFetchingRewardCode;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var4 = var5.bind(var2)(var4);
                var1['isFetchingRewardCode'] = var4;
                var5 = var2.isClaimingReward;
                var4 = _closure2_slot1;
                var4 = var4.id;
                var4 = var5.bind(var2)(var4);
                var1['isClaimingReward'] = var4;
                var4 = var2.isEnrolling;
                var3 = _closure2_slot1;
                var3 = var3.id;
                var3 = var4.bind(var2)(var3);
                var1['isEnrolling'] = var3;
                var2 = var2.questEnrollmentBlockedUntil;
                var1['questEnrollmentBlockedUntil'] = var2;
                return var1;
            };
            var5 = var12.bind(var13)(var8, var5);
            var8 = var5.isFetchingRewardCode;
            var _closure2_slot13 = var8;
            var8 = var5.isClaimingReward;
            var _closure2_slot14 = var8;
            var8 = var5.isEnrolling;
            var _closure2_slot15 = var8;
            var5 = var5.questEnrollmentBlockedUntil;
            var _closure2_slot16 = var5;
            var2 = var2[var10];
            var12 = var7.bind(var4)(var2);
            var8 = var12.useQuestFormattedDate;
            var2 = var19.userStatus;
            var13 = var43 == var2;
            var7 = undefined;
            if(var13) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var7 = var2.completedAt;
case 24:
            var2 = {'year': 'numeric', 'month': 'long', 'day': 'numeric'};
            var7 = var8.bind(var12)(var7, var2);
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = 26;
            var12 = var2[var12];
            var13 = var8.bind(var4)(var12);
            var12 = var13.hasWatchVideoTasks;
            var23 = var12.bind(var13)(var19);
            var _closure2_slot17 = var23;
            var2 = var2[var6];
            var12 = var8.bind(var4)(var2);
            var8 = var12.useHasWatchVideoOnMobileTasks;
            var2 = var19.config;
            var20 = var8.bind(var12)(var2);
            var _closure2_slot18 = var20;
            var8 = var19.userStatus;
            var12 = var43 == var8;
            var2 = undefined;
            if(var12) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var2 = var8.enrolledAt;
case 26:
            var2 = var43 != var2;
            var _closure2_slot19 = var2;
            var12 = var19.userStatus;
            var13 = var43 == var12;
            var8 = undefined;
            if(var13) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var8 = var12.completedAt;
case 28:
            var13 = var43 != var8;
            var _closure2_slot20 = var13;
            var12 = var19.userStatus;
            var14 = var43 == var12;
            var8 = undefined;
            if(var14) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var8 = var12.claimedAt;
case 30:
            var12 = var43 != var8;
            var _closure2_slot21 = var12;
            var14 = _closure1_slot0;
            var21 = _closure1_slot2;
            var8 = 27;
            var18 = var21[var8];
            var22 = var14.bind(var4)(var18);
            var18 = var22.isQuestExpired;
            var18 = var18.bind(var22)(var19);
            var _closure2_slot22 = var18;
            var8 = var21[var8];
            var22 = var14.bind(var4)(var8);
            var8 = var22.getIsQuestExpiredButWithinThirtyDayLookback;
            var8 = var8.bind(var22)(var19);
            var _closure2_slot23 = var8;
            var38 = 28;
            var8 = var21[var38];
            var25 = var14.bind(var4)(var8);
            var22 = var25.getDefaultReward;
            var8 = var19.config;
            var8 = var22.bind(var25)(var8);
            var22 = var8.skuId;
            var25 = _closure1_slot1;
            var8 = 29;
            var8 = var21[var8];
            var8 = var25.bind(var4)(var8);
            var27 = var8.bind(var4)();
            var8 = 11;
            var8 = var21[var8];
            var25 = var14.bind(var4)(var8);
            var8 = var25.isThemeDark;
            var49 = var8.bind(var25)(var27);
            var8 = var21[var3];
            var27 = var14.bind(var4)(var8);
            var25 = var27.hasCollectiblesQuestReward;
            var8 = var19.config;
            var25 = var25.bind(var27)(var8);
            var8 = 30;
            var8 = var21[var8];
            var21 = var14.bind(var4)(var8);
            var14 = var21.useFetchCollectiblesProduct;
            var8 = null;
            if(!var25) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var8 = null;
            if(!var13) { _fun0004_ip = 32; continue _fun0004 }
case 34:
            var8 = var22;
case 32:
            var8 = var14.bind(var21)(var8);
            var14 = var8.product;
            var _closure2_slot24 = var14;
            var8 = var8.isFetching;
            var _closure2_slot25 = var8;
            var21 = _closure1_slot0;
            var8 = _closure1_slot2;
            var14 = var8[var15];
            var28 = var21.bind(var4)(var14);
            var27 = var28.useStateFromStores;
            var14 = _closure1_slot8;
            var25 = new Array(1);
            var25[0] = var14;
            var22 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                    var2 = var3.hasVerifiedEmailOrPhone;
                    var1 = var2.bind(var3)();
case 35:
                    return var1;
                }
            };
            var22 = var27.bind(var28)(var25, var22);
            var _closure2_slot26 = var22;
            var15 = var8[var15];
            var25 = var21.bind(var4)(var15);
            var22 = var25.useStateFromStores;
            var15 = new Array(1);
            var15[0] = var14;
            var14 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0009_ip = 37; continue _fun0009 }
case 36:
                    var1 = var2.verified;
case 37:
                    return var1;
                }
            };
            var14 = var22.bind(var25)(var15, var14);
            var _closure2_slot27 = var14;
            var6 = var8[var6];
            var14 = var21.bind(var4)(var6);
            var6 = var14.useMobileActivityQuest;
            var6 = var6.bind(var14)(var19);
            var14 = var6.isMobileActivityQuest;
            var _closure2_slot28 = var14;
            var25 = var6.questApplication;
            var6 = var6.launchMobileActivity;
            var _closure2_slot29 = var6;
            var15 = 31;
            var22 = var8[var15];
            var33 = var21.bind(var4)(var22);
            var32 = var33.useToken;
            var22 = _closure1_slot1;
            var28 = 9;
            var27 = var8[var28];
            var27 = var22.bind(var4)(var27);
            var27 = var27.colors;
            var27 = var27.BACKGROUND_BASE_LOWER;
            var27 = var32.bind(var33)(var27);
            var _closure2_slot30 = var27;
            var27 = var8[var15];
            var33 = var21.bind(var4)(var27);
            var32 = var33.useToken;
            var27 = var8[var28];
            var27 = var22.bind(var4)(var27);
            var27 = var27.colors;
            var27 = var27.BACKGROUND_BASE_LOW;
            var27 = var32.bind(var33)(var27);
            var _closure2_slot31 = var27;
            var15 = var8[var15];
            var21 = var21.bind(var4)(var15);
            var15 = var21.useToken;
            var8 = var8[var28];
            var8 = var22.bind(var4)(var8);
            var8 = var8.colors;
            var8 = var8.BACKGROUND_BASE_LOWEST;
            var8 = var15.bind(var21)(var8);
            var _closure2_slot32 = var8;
            var27 = var43 != var5;
            if(!var27) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var27 = !var2;
case 38:
            if(!var27) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var27 = !var13;
case 40:
            if(!var27) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var27 = !var12;
case 42:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = var5[var10];
            var22 = var8.bind(var4)(var2);
            var21 = var22.useQuestFormattedDate;
            var2 = var19.config;
            var15 = var2.expiresAt;
            var2 = {'month': 'numeric', 'day': 'numeric'};
            var54 = var21.bind(var22)(var15, var2);
            var _closure2_slot33 = var54;
            var2 = 32;
            var2 = var5[var2];
            var15 = var8.bind(var4)(var2);
            var2 = var15.useGetQuestImpressionId;
            var2 = var2.bind(var15)();
            var _closure2_slot34 = var2;
            var22 = _closure1_slot5;
            var21 = var22.useCallback;
            var15 = new Array(4);
            var15[0] = var19;
            var15[1] = var26;
            var15[2] = var2;
            var15[3] = var16;
            var2 = function() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 37;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var2);
                var4 = var5.openGameLinkDirectly;
                var3 = _closure2_slot1;
                var2 = {};
                var7 = _closure2_slot2;
                var2['content'] = var7;
                var7 = 23;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.OPEN_GAME_LINK;
                var2['ctaContent'] = var7;
                var7 = _closure2_slot34;
                var7 = var7.bind(var1)();
                var2['impressionId'] = var7;
                var6 = _closure2_slot4;
                var2['sourceQuestContent'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var35 = var21.bind(var22)(var2, var15);
            var2 = 41;
            var15 = var5[var2];
            var22 = var8.bind(var4)(var15);
            var21 = var22.usePrimaryCtaCopy;
            var15 = {};
            var15['quest'] = var19;
            var15['application'] = var25;
            var33 = true;
            var15['shortText'] = var33;
            var15 = var21.bind(var22)(var15);
            var _closure2_slot35 = var15;
            var15 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot24;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                    var2 = _closure2_slot24;
                    var1 = {};
                    var7 = var2.styles;
                    var9 = var6 == var7;
                    var8 = undefined;
                    var5 = undefined;
                    if(var9) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                    var5 = var7.buttonColors;
case 46:
                    if(!(var6 == var5)) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                    var5 = new Array(0);
case 48:
                    var1['buttonColors'] = var5;
                    var5 = _closure2_slot24;
                    var7 = var5.styles;
                    var9 = var6 == var7;
                    var5 = undefined;
                    if(var9) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                    var5 = var7.confettiColors;
case 50:
                    if(!(var6 == var5)) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                    var5 = new Array(0);
case 52:
                    var1['confettiColors'] = var5;
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 42;
                    var5 = var9[var6];
                    var10 = var7.bind(var8)(var5);
                    var5 = _closure2_slot31;
                    var10 = var10.bind(var8)(var5);
                    var5 = new Array(3);
                    var5[0] = var10;
                    var10 = var9[var6];
                    var11 = var7.bind(var8)(var10);
                    var10 = _closure2_slot30;
                    var10 = var11.bind(var8)(var10);
                    var5[1] = var10;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = _closure2_slot32;
                    var6 = var7.bind(var8)(var6);
                    var5[2] = var6;
                    var1['backgroundColors'] = var5;
                    var2['styles'] = var1;
case 44:
                    var1 = _closure2_slot21;
                    if(var1) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                    var1 = _closure2_slot20;
                    if(!var1) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                    var1 = _closure2_slot22;
                    if(!var1) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                    var1 = _closure2_slot23;
                    if(var1) { _fun0010_ip = 58; continue _fun0010 }
case 56:
                    var1 = _closure2_slot22;
                    if(var1) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                    var1 = _closure2_slot19;
                    if(!var1) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                    var1 = _closure2_slot17;
                    if(var1) { _fun0010_ip = 64; continue _fun0010 }
case 62:
                    var1 = _closure2_slot19;
                    if(!var1) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                    var1 = _closure2_slot28;
                    if(var1) { _fun0010_ip = 67; continue _fun0010 }
case 65:
                    var1 = _closure2_slot19;
                    if(!var1) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var1 = _closure2_slot17;
                    if(var1) { _fun0010_ip = 68; continue _fun0010 }
case 70:
                    var1 = _closure2_slot28;
                    if(var1) { _fun0010_ip = 68; continue _fun0010 }
case 71:
                    var1 = {'text': null, 'variant': 'secondary', 'disabled': false};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 43;
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
                        var4 = _closure2_slot41;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 23;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.QuestContentCTA;
                        var3 = var3.VIEW_REQUIREMENTS;
                        var3 = var4.bind(var1)(var3);
                        var2 = _closure2_slot42;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var1['onPress'] = var2;
                    _fun0010_ip = 72; continue _fun0010;
case 68:
                    var2 = {};
                    var5 = _closure2_slot35;
                    var2['text'] = var5;
                    var5 = false;
                    var2['disabled'] = var5;
                    var5 = _closure2_slot15;
                    var2['loading'] = var5;
                    var6 = _closure2_slot17;
                    var7 = undefined;
                    var5 = undefined;
                    if(!var6) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 45;
                    var6 = var9[var6];
                    var9 = var8.bind(var7)(var6);
                    var8 = var9.getVideoQuestWatchCtaAccessibilityLabel;
                    var6 = _closure2_slot7;
                    var5 = var8.bind(var9)(var6);
case 73:
                    var2['accessibilityLabel'] = var5;
                    var6 = _closure2_slot28;
                    var5 = undefined;
                    if(!var6) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 44;
                    var6 = var9[var6];
                    var9 = var8.bind(var7)(var6);
                    var8 = var9.getPrimaryCtaIcon;
                    var6 = _closure2_slot1;
                    var5 = var8.bind(var9)(var6);
case 75:
                    var2['icon'] = var5;
                    var6 = _closure1_slot3;
                    var5 = function* () {
                        var1 = function* anon_0_() {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0011_ip = 77; continue _fun0011 }
case 78:
                                var4 = _closure2_slot5;
                                var3 = var4.log;
                                var2 = 'Enrolling in quest';
                                var2 = var3.bind(var4)(var2);
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 47;
                                var2 = var3[var2];
                                var3 = undefined;
                                var8 = var5.bind(var3)(var2);
                                var7 = var8.enrollInQuest;
                                var2 = _closure2_slot1;
                                var5 = var2.id;
                                var2 = {};
                                var9 = _closure2_slot2;
                                var2['questContent'] = var9;
                                var9 = _closure2_slot28;
                                if(var9) { _fun0011_ip = 79; continue _fun0011 }
case 80:
                                var9 = _closure2_slot17;
                                if(var9) { _fun0011_ip = 79; continue _fun0011 }
case 81:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var9 = 23;
                                var9 = var11[var9];
                                var9 = var10.bind(var3)(var9);
                                var9 = var9.QuestContentCTA;
                                var9 = var9.ACCEPT_QUEST;
                                _fun0011_ip = 82; continue _fun0011;
case 79:
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var10 = 23;
                                var10 = var12[var10];
                                var10 = var11.bind(var3)(var10);
                                var10 = var10.QuestContentCTA;
                                var9 = var10.START_QUEST;
case 82:
                                var2['questContentCTA'] = var9;
                                var9 = _closure2_slot4;
                                var2['sourceQuestContent'] = var9;
                                var2 = var7.bind(var8)(var5, var2);
                                SaveGenerator(address=189);
case 83:
                                return var2;
case 84:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0011_ip = 85; continue _fun0011 }
case 22:
                                var5 = _closure2_slot17;
                                if(!var5) { _fun0011_ip = 86; continue _fun0011 }
case 87:
                                var5 = _closure2_slot18;
                                if(var5) { _fun0011_ip = 88; continue _fun0011 }
case 86:
                                var5 = _closure2_slot28;
                                if(var5) { _fun0011_ip = 89; continue _fun0011 }
case 90:
                                var5 = _closure2_slot42;
                                var5 = var5.bind(var3)();
                                _fun0011_ip = 91; continue _fun0011;
case 89:
                                var5 = _closure2_slot40;
                                var5 = var5.bind(var3)();
                                _fun0011_ip = 91; continue _fun0011;
case 88:
                                var5 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var4 = 46;
                                var4 = var7[var4];
                                var5 = var5.bind(var3)(var4);
                                var4 = {};
                                var7 = _closure2_slot1;
                                var7 = var7.id;
                                var4['questId'] = var7;
                                var6 = _closure2_slot4;
                                var4['sourceQuestContent'] = var6;
                                var4 = var5.bind(var3)(var4);
case 91:
                                return var3;
case 85:
                                return var2;
case 77:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
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
case 72:
                    _fun0010_ip = 92; continue _fun0010;
case 67:
                    var2 = {};
                    var5 = _closure2_slot35;
                    var2['text'] = var5;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 44;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.getPrimaryCtaIcon;
                    var5 = _closure2_slot1;
                    var5 = var6.bind(var7)(var5);
                    var2['icon'] = var5;
                    var5 = false;
                    var2['disabled'] = var5;
                    var5 = function onPress() {
                        var4 = _closure2_slot41;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 23;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.QuestContentCTA;
                        var3 = var3.LAUNCH_MOBILE_ACTIVITY;
                        var3 = var4.bind(var1)(var3);
                        var2 = _closure2_slot40;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2['onPress'] = var5;
                    var1 = var2;
case 92:
                    _fun0010_ip = 93; continue _fun0010;
case 64:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 45;
                    var9 = var8[var5];
                    var6 = undefined;
                    var11 = var7.bind(var6)(var9);
                    var10 = var11.getVideoQuestWatchCtaText;
                    var9 = _closure2_slot7;
                    var9 = var10.bind(var11)(var9);
                    var2['text'] = var9;
                    var5 = var8[var5];
                    var7 = var7.bind(var6)(var5);
                    var6 = var7.getVideoQuestWatchCtaAccessibilityLabel;
                    var5 = _closure2_slot7;
                    var5 = var6.bind(var7)(var5);
                    var2['accessibilityLabel'] = var5;
                    var5 = false;
                    var2['disabled'] = var5;
                    var5 = function onPress() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var3 = _closure2_slot5;
                            var2 = var3.log;
                            var1 = 'Navigating to video quest bottom sheet';
                            var1 = var2.bind(var3)(var1);
                            var5 = _closure2_slot41;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 23;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.QuestContentCTA;
                            var3 = var3.WATCH_VIDEO;
                            var3 = var5.bind(var1)(var3);
                            var3 = _closure2_slot18;
                            if(var3) { _fun0012_ip = 9; continue _fun0012 }
case 94:
                            var3 = _closure2_slot42;
                            var3 = var3.bind(var1)();
                            _fun0012_ip = 95; continue _fun0012;
case 9:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 46;
                            var2 = var5[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var5 = _closure2_slot1;
                            var5 = var5.id;
                            var2['questId'] = var5;
                            var4 = _closure2_slot4;
                            var2['sourceQuestContent'] = var4;
                            var2 = var3.bind(var1)(var2);
case 95:
                            return var1;
                        }
                    };
                    var2['onPress'] = var5;
                    var1 = var2;
case 93:
                    _fun0010_ip = 96; continue _fun0010;
case 60:
                    var2 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 43;
                    var8 = var11[var6];
                    var7 = undefined;
                    var8 = var10.bind(var7)(var8);
                    var9 = var8.intl;
                    var8 = var9.formatToPlainString;
                    var6 = var11[var6];
                    var6 = var10.bind(var7)(var6);
                    var6 = var6.t;
                    var7 = var6["6p8BZx"];
                    var6 = {};
                    var10 = _closure2_slot33;
                    var6['expiryDate'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['text'] = var6;
                    var6 = _closure2_slot14;
                    if(var6) { _fun0010_ip = 97; continue _fun0010 }
case 98:
                    var6 = _closure2_slot13;
case 97:
                    if(var6) { _fun0010_ip = 99; continue _fun0010 }
case 100:
                    var6 = _closure2_slot25;
case 99:
                    var2['loading'] = var6;
                    var6 = true;
                    var2['disabled'] = var6;
                    var6 = 'secondary';
                    var2['variant'] = var6;
                    var5 = _closure1_slot11;
                    var2['onPress'] = var5;
                    var1 = var2;
case 96:
                    _fun0010_ip = 101; continue _fun0010;
case 58:
                    var2 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 43;
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
                    var5 = _closure2_slot14;
                    if(var5) { _fun0010_ip = 30; continue _fun0010 }
case 102:
                    var5 = _closure2_slot13;
case 30:
                    if(var5) { _fun0010_ip = 103; continue _fun0010 }
case 104:
                    var5 = _closure2_slot25;
case 103:
                    var2['loading'] = var5;
                    var5 = function onPress() {
                        var6 = _closure2_slot41;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 23;
                        var2 = var4[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.QuestContentCTA;
                        var2 = var2.CLAIM_REWARD;
                        var2 = var6.bind(var1)(var2);
                        var2 = 44;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.handleRewardClaimThenView;
                        var2 = {};
                        var6 = _closure2_slot24;
                        var2['product'] = var6;
                        var6 = _closure2_slot1;
                        var2['quest'] = var6;
                        var6 = _closure2_slot2;
                        var2['questContent'] = var6;
                        var6 = _closure2_slot3;
                        var2['questContentPosition'] = var6;
                        var6 = _closure2_slot26;
                        var2['currentUserHasVerifiedEmailOrPhone'] = var6;
                        var6 = _closure2_slot27;
                        var2['currentUserHasVerifiedEmail'] = var6;
                        var5 = _closure2_slot4;
                        var2['sourceQuestContent'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onPress'] = var5;
                    var1 = var2;
case 101:
                    _fun0010_ip = 105; continue _fun0010;
case 54:
                    var2 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 43;
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
                    var4 = _closure2_slot25;
                    var2['loading'] = var4;
                    var3 = function onPress() {
                        var6 = _closure2_slot41;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 23;
                        var2 = var4[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.QuestContentCTA;
                        var2 = var2.SHOW_REWARD;
                        var2 = var6.bind(var1)(var2);
                        var2 = 44;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.viewReward;
                        var2 = {};
                        var6 = _closure2_slot24;
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
case 105:
                    return var1;
                }
            };
            var32 = var15.bind(var4)();
            var22 = 43;
            var15 = var5[var22];
            var15 = var8.bind(var4)(var15);
            var26 = var15.intl;
            var25 = var26.formatToPlainString;
            var15 = var5[var22];
            var15 = var8.bind(var4)(var15);
            var15 = var15.t;
            var21 = var15.EAYZAr;
            var15 = {};
            var42 = var19.config;
            var42 = var42.messages;
            var42 = var42.questName;
            var15['questName'] = var42;
            var42 = var25.bind(var26)(var21, var15);
            var15 = var5[var3];
            var25 = var8.bind(var4)(var15);
            var21 = var25.hasVirtualCurrencyReward;
            var15 = var19.config;
            var25 = var21.bind(var25)(var15);
            var _closure2_slot36 = var25;
            var15 = 48;
            var15 = var5[var15];
            var21 = var8.bind(var4)(var15);
            var15 = var21.useQuestOrbMultiplierEligibility;
            var51 = var15.bind(var21)();
            var5 = var5[var10];
            var8 = var8.bind(var4)(var5);
            var5 = var8.useShouldShowBonusOrbsUX;
            var45 = var5.bind(var8)(var19, var51);
            var8 = var45;
            if(!var45) { _fun0004_ip = 106; continue _fun0004 }
case 107:
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 49;
            var5 = var15[var5];
            var5 = var10.bind(var4)(var5);
            var5 = var5.QuestOrbMultiplierEligibilityType;
            var5 = var5.NITRO;
            var8 = var51 === var5;
case 106:
            var5 = var19.userStatus;
            var10 = var43 == var5;
            var15 = undefined;
            if(var10) { _fun0004_ip = 108; continue _fun0004 }
case 109:
            var15 = var5.orbQuantityClaimed;
case 108:
            if(!(var43 == var15)) { _fun0004_ip = 110; continue _fun0004 }
case 111:
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var3];
            var21 = var10.bind(var4)(var5);
            var10 = var21.getVirtualCurrencyRewardOrbQuantity;
            var5 = var19.config;
            var15 = var10.bind(var21)(var5);
case 110:
            var _closure2_slot37 = var15;
            var26 = _closure1_slot0;
            var44 = _closure1_slot2;
            var5 = var44[var3];
            var21 = var26.bind(var4)(var5);
            var10 = var21.getQuestOrbRewardQuantityForUser;
            var5 = var19.config;
            var21 = var10.bind(var21)(var5, var11);
            var _closure2_slot38 = var21;
            var3 = var44[var3];
            var10 = var26.bind(var4)(var3);
            var5 = var10.getDefaultRewardName;
            var3 = var19.config;
            var11 = var5.bind(var10)(var3, var11);
            var _closure2_slot39 = var11;
            var2 = var44[var2];
            var10 = var26.bind(var4)(var2);
            var5 = var10.useQuestDescription;
            var2 = _closure1_slot10;
            var63 = var2.QUEST_HOME_MOBILE;
            var2 = 50;
            var2 = var44[var2];
            var2 = var26.bind(var4)(var2);
            var2 = var2.GameProfileSources;
            var62 = var2.QuestHome;
            var66 = var10;
            var65 = var19;
            var64 = var16;
            var2 = var66[var5](var65, var64, var63, var62, var61);
            var10 = _closure1_slot5;
            var5 = var10.useMemo;
            var3 = new Array(6);
            var3[0] = var12;
            var3[1] = var25;
            var3[2] = var21;
            var3[3] = var15;
            var3[4] = var11;
            var3[5] = var1;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 51;
                    var1 = var3[var1];
                    var6 = undefined;
                    var2 = var2.bind(var6)(var1);
                    var1 = var2.isFabric;
                    var8 = var1.bind(var2)();
                    var _closure3_slot0 = var8;
                    if(var8) { _fun0013_ip = 112; continue _fun0013 }
case 113:
                    var11 = {'marginTop': 0, 'marginRight': 3};
                    _fun0013_ip = 9; continue _fun0013;
case 112:
                    var1 = {};
                    var3 = {};
                    var2 = 3;
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    var11 = var1;
case 9:
                    var _closure3_slot1 = var11;
                    var1 = _closure2_slot21;
                    if(!var1) { _fun0013_ip = 114; continue _fun0013 }
case 115:
                    var1 = _closure2_slot36;
                    if(var1) { _fun0013_ip = 116; continue _fun0013 }
case 114:
                    var1 = _closure2_slot21;
                    if(var1) { _fun0013_ip = 90; continue _fun0013 }
case 117:
                    var1 = _closure2_slot36;
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 43;
                    var4 = var10[var2];
                    var4 = var3.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.format;
                    var2 = var10[var2];
                    var2 = var3.bind(var6)(var2);
                    var2 = var2.t;
                    var3 = var2["0IUT4Y"];
                    var2 = {};
                    if(var1) { _fun0013_ip = 118; continue _fun0013 }
case 119:
                    var1 = function rewardWithArticleHook() {
                        var1 = _closure2_slot12;
                        return var1;
                    };
                    var2['rewardWithArticleHook'] = var1;
                    var1 = var4.bind(var5)(var3, var2);
                    _fun0013_ip = 120; continue _fun0013;
case 118:
                    var9 = function rewardWithArticleHook() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var5 = _closure1_slot13;
                            var1 = _closure1_slot5;
                            var4 = var1.Fragment;
                            var3 = {};
                            var9 = _closure1_slot12;
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 52;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var7.bind(var2)(var1);
                            var8 = var1.OrbsIcon;
                            var1 = {'size': 'xs', 'color': 'mobile-text-heading-primary'};
                            var10 = _closure3_slot1;
                            var1['style'] = var10;
                            var8 = var9.bind(var2)(var8, var1);
                            var1 = new Array(3);
                            var1[0] = var8;
                            var7 = _closure3_slot0;
                            if(!var7) { _fun0014_ip = 10; continue _fun0014 }
case 121:
                            var10 = _closure1_slot12;
                            var9 = _closure1_slot7;
                            var8 = {};
                            var11 = {};
                            var12 = 2;
                            var11['width'] = var12;
                            var8['style'] = var11;
                            var7 = var10.bind(var2)(var9, var8);
case 10:
                            var1[1] = var7;
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 43;
                            var8 = var10[var6];
                            var8 = var7.bind(var2)(var8);
                            var9 = var8.intl;
                            var8 = var9.format;
                            var6 = var10[var6];
                            var6 = var7.bind(var2)(var6);
                            var6 = var6.t;
                            var7 = var6.nLXlh+;
                            var6 = {};
                            var12 = _closure2_slot38;
                            var10 = null;
                            var12 = var10 != var12;
                            var10 = 0;
                            if(!var12) { _fun0014_ip = 122; continue _fun0014 }
case 123:
                            var10 = _closure2_slot38;
case 122:
                            var6['orbAmount'] = var10;
                            var6 = var8.bind(var9)(var7, var6);
                            var1[2] = var6;
                            var3['children'] = var1;
                            var1 = 'balance';
                            var1 = var5.bind(var2)(var4, var3, var1);
                            return var1;
                        }
                    };
                    var2['rewardWithArticleHook'] = var9;
                    var1 = var4.bind(var5)(var3, var2);
case 120:
                    _fun0013_ip = 59; continue _fun0013;
case 90:
                    var1 = _closure2_slot39;
case 59:
                    _fun0013_ip = 124; continue _fun0013;
case 116:
                    var5 = _closure1_slot13;
                    var2 = _closure1_slot5;
                    var4 = var2.Fragment;
                    var3 = {};
                    var10 = _closure1_slot12;
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 52;
                    var2 = var13[var2];
                    var2 = var9.bind(var6)(var2);
                    var9 = var2.OrbsIcon;
                    var2 = {'size': 'xs', 'color': 'mobile-text-heading-primary'};
                    var2['style'] = var11;
                    var9 = var10.bind(var6)(var9, var2);
                    var2 = new Array(3);
                    var2[0] = var9;
                    if(!var8) { _fun0013_ip = 125; continue _fun0013 }
case 126:
                    var11 = _closure1_slot12;
                    var10 = _closure1_slot7;
                    var9 = {};
                    var13 = {};
                    var14 = 2;
                    var13['width'] = var14;
                    var9['style'] = var13;
                    var8 = var11.bind(var6)(var10, var9);
case 125:
                    var2[1] = var8;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 43;
                    var9 = var11[var7];
                    var9 = var8.bind(var6)(var9);
                    var10 = var9.intl;
                    var9 = var10.format;
                    var7 = var11[var7];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.t;
                    var8 = var7.nLXlh+;
                    var7 = {};
                    var13 = _closure2_slot37;
                    var11 = null;
                    var13 = var11 != var13;
                    var11 = 0;
                    if(!var13) { _fun0013_ip = 127; continue _fun0013 }
case 128:
                    var11 = _closure2_slot37;
case 127:
                    var7['orbAmount'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var2[2] = var7;
                    var3['children'] = var2;
                    var2 = 'balance';
                    var1 = var5.bind(var6)(var4, var3, var2);
case 124:
                    return var1;
                }
            };
            var50 = var5.bind(var10)(var1, var3);
            var1 = var18;
            if(!var1) { _fun0004_ip = 129; continue _fun0004 }
case 130:
            var1 = var13;
case 129:
            if(!var1) { _fun0004_ip = 131; continue _fun0004 }
case 132:
            var1 = !var12;
case 131:
            var47 = var2;
            if(!var1) { _fun0004_ip = 133; continue _fun0004 }
case 134:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var22];
            var3 = var2.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.formatToPlainString;
            var1 = var1[var22];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.l1jCM/;
            var1 = {};
            var1['date'] = var7;
            var47 = var3.bind(var5)(var2, var1);
case 133:
            var44 = _closure1_slot0;
            var46 = _closure1_slot2;
            var1 = var46[var38];
            var3 = var44.bind(var4)(var1);
            var2 = var3.getCtaLink;
            var1 = var19.config;
            var2 = var2.bind(var3)(var1);
            var1 = '';
            var26 = var1 !== var2;
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var1 = var19.id;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var16;
            var1 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 46;
                var2 = var7[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var6 = _closure2_slot1;
                var6 = var6.id;
                var2['questId'] = var6;
                var6 = _closure1_slot0;
                var5 = 53;
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
            var25 = var3.bind(var5)(var1, var2);
            var3 = var5.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0015_ip = 135; continue _fun0015 }
case 136:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 44;
                        var2 = var3[var2];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.dismissOverlayScreens;
                        var2 = var2.bind(var4)();
                        var2 = _closure2_slot29;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=57);
case 48:
                        return var2;
case 137:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0015_ip = 138; continue _fun0015 }
case 139:
                        return var3;
case 138:
                        return var2;
case 135:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = new Array(1);
            var1[0] = var6;
            var21 = var3.bind(var5)(var2, var1);
            var _closure2_slot40 = var21;
            var3 = _closure1_slot12;
            var1 = 54;
            var1 = var46[var1];
            var1 = var44.bind(var4)(var1);
            var2 = var1.Card;
            var1 = {};
            var6 = var29.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = _closure1_slot15;
            var7 = var7 - var9;
            var6['marginHorizontal'] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var5 = function onLayout(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0016_ip = 35; continue _fun0016 }
case 140:
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var3 = var1.id;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var1, var3);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onLayout'] = var5;
            var7 = _closure1_slot13;
            var15 = _closure1_slot1;
            var5 = 55;
            var5 = var46[var5];
            var6 = var15.bind(var4)(var5);
            var5 = {};
            var5['visible'] = var8;
            var5['glow'] = var33;
            var10 = _closure1_slot7;
            var8 = {};
            var11 = var29.heroContainer;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = {};
            var11['height'] = var24;
            var9[1] = var11;
            var8['style'] = var9;
            var9 = 56;
            var9 = var46[var9];
            var11 = var15.bind(var4)(var9);
            var9 = {};
            var24 = {};
            var48 = var48.url;
            var24['uri'] = var48;
            var9['source'] = var24;
            var24 = var29.heroImg;
            var9['style'] = var24;
            var9['onError'] = var39;
            var9['accessible'] = var33;
            var59 = 'image';
            var9['accessibilityRole'] = var59;
            var24 = var19.config;
            var24 = var24.messages;
            var24 = var24.questName;
            var9['accessibilityLabel'] = var24;
            var9 = var3.bind(var4)(var11, var9);
            var11 = new Array(4);
            var11[0] = var9;
            var9 = 57;
            var9 = var46[var9];
            var15 = var15.bind(var4)(var9);
            var9 = {};
            var24 = var29.heroLinearGradientOverlay;
            var9['style'] = var24;
            var24 = 58;
            var48 = var46[var24];
            var48 = var44.bind(var4)(var48);
            var48 = var48.VerticalGradient;
            var48 = var48.START;
            var9['start'] = var48;
            var24 = var46[var24];
            var24 = var44.bind(var4)(var24);
            var24 = var24.VerticalGradient;
            var24 = var24.END;
            var9['end'] = var24;
            var24 = new Array(3);
            var24[0] = var37;
            var24[1] = var34;
            var24[2] = var30;
            var9['colors'] = var24;
            var9 = var3.bind(var4)(var15, var9);
            var11[1] = var9;
            var9 = var19.preview;
            if(!var9) { _fun0004_ip = 141; continue _fun0004 }
case 142:
            var30 = _closure1_slot12;
            var24 = _closure1_slot7;
            var15 = {};
            var34 = var29.previewBadge;
            var15['style'] = var34;
            var52 = _closure1_slot0;
            var44 = _closure1_slot2;
            var34 = 59;
            var34 = var44[var34];
            var34 = var52.bind(var4)(var34);
            var37 = var34.Text;
            var34 = {'variant': 'eyebrow', 'color': 'text-overlay-light'};
            var46 = var44[var22];
            var46 = var52.bind(var4)(var46);
            var48 = var46.intl;
            var46 = var48.string;
            var44 = var44[var22];
            var44 = var52.bind(var4)(var44);
            var44 = var44.t;
            var44 = var44.SKNnqq;
            var44 = var46.bind(var48)(var44);
            var34['children'] = var44;
            var34 = var30.bind(var4)(var37, var34);
            var15['children'] = var34;
            var9 = var30.bind(var4)(var24, var15);
case 141:
            var11[2] = var9;
            var30 = _closure1_slot13;
            var24 = _closure1_slot7;
            var15 = {};
            var9 = var29.heroFooterContainer;
            var15['style'] = var9;
            var34 = {};
            var9 = var29.heroFooterLeftContainer;
            var34['style'] = var9;
            var57 = _closure1_slot12;
            var37 = _closure1_slot1;
            var44 = _closure1_slot2;
            var9 = 60;
            var9 = var44[var9];
            var37 = var37.bind(var4)(var9);
            var9 = {};
            var9['assetUrl'] = var40;
            var9['onError'] = var39;
            var9 = var57.bind(var4)(var37, var9);
            var37 = new Array(2);
            var37[0] = var9;
            var46 = _closure1_slot0;
            var9 = 61;
            var39 = var44[var9];
            var39 = var46.bind(var4)(var39);
            var40 = var39.Stack;
            var39 = {'direction': 'horizontal', 'align': 'center', 'spacing': 4};
            var48 = 59;
            var44 = var44[var48];
            var44 = var46.bind(var4)(var44);
            var56 = var44.Text;
            var44 = {};
            var52 = 'text-xs/medium';
            var44['variant'] = var52;
            var46 = 'text-overlay-light';
            var53 = var46;
            if(!var49) { _fun0004_ip = 143; continue _fun0004 }
case 144:
            var53 = 'text-muted';
case 143:
            var44['color'] = var53;
            var55 = _closure1_slot0;
            var53 = _closure1_slot2;
            var58 = var53[var22];
            var58 = var55.bind(var4)(var58);
            var61 = var58.intl;
            var60 = var61.string;
            var58 = var53[var22];
            var58 = var55.bind(var4)(var58);
            var58 = var58.t;
            var58 = var58.VAbKhK;
            var58 = var60.bind(var61)(var58);
            var44['children'] = var58;
            var56 = var57.bind(var4)(var56, var44);
            var44 = new Array(3);
            var44[0] = var56;
            var56 = _closure1_slot12;
            var58 = _closure1_slot6;
            var57 = {};
            var61 = _closure1_slot1;
            var60 = 62;
            var60 = var53[var60];
            var60 = var61.bind(var4)(var60);
            var57['source'] = var60;
            var60 = {'height': 16, 'width': 16};
            var57['style'] = var60;
            var57['accessible'] = var33;
            var57['accessibilityRole'] = var59;
            var59 = var53[var22];
            var59 = var55.bind(var4)(var59);
            var61 = var59.intl;
            var60 = var61.string;
            var59 = var53[var22];
            var59 = var55.bind(var4)(var59);
            var59 = var59.t;
            var59 = var59.OfMjx9;
            var59 = var60.bind(var61)(var59);
            var57['accessibilityLabel'] = var59;
            var57 = var56.bind(var4)(var58, var57);
            var44[1] = var57;
            var53 = var53[var48];
            var53 = var55.bind(var4)(var53);
            var55 = var53.Text;
            var53 = {'variant': 'text-xs/medium', 'color': 'text-overlay-light'};
            var57 = var19.config;
            var57 = var57.messages;
            var57 = var57.gamePublisher;
            var53['children'] = var57;
            var53 = var56.bind(var4)(var55, var53);
            var44[2] = var53;
            var39['children'] = var44;
            var39 = var30.bind(var4)(var40, var39);
            var37[1] = var39;
            var34['children'] = var37;
            var37 = var30.bind(var4)(var24, var34);
            var34 = new Array(2);
            var34[0] = var37;
            var37 = !var18;
            if(!var37) { _fun0004_ip = 145; continue _fun0004 }
case 146:
            var37 = !var12;
case 145:
            if(!var37) { _fun0004_ip = 147; continue _fun0004 }
case 148:
            var44 = _closure1_slot12;
            var40 = _closure1_slot0;
            var39 = _closure1_slot2;
            var39 = var39[var48];
            var39 = var40.bind(var4)(var39);
            var40 = var39.Text;
            var39 = {};
            var39['variant'] = var52;
            if(!var49) { _fun0004_ip = 149; continue _fun0004 }
case 150:
            var46 = 'text-default';
case 149:
            var39['color'] = var46;
            var49 = _closure1_slot0;
            var46 = _closure1_slot2;
            var52 = var46[var22];
            var52 = var49.bind(var4)(var52);
            var53 = var52.intl;
            var52 = var53.format;
            var46 = var46[var22];
            var46 = var49.bind(var4)(var46);
            var46 = var46.t;
            var49 = var46["7D8r4F"];
            var46 = {};
            var46['expiryDate'] = var54;
            var46 = var52.bind(var53)(var49, var46);
            var39['children'] = var46;
            var37 = var44.bind(var4)(var40, var39);
case 147:
            var34[1] = var37;
            var15['children'] = var34;
            var15 = var30.bind(var4)(var24, var15);
            var11[3] = var15;
            var8['children'] = var11;
            var10 = var7.bind(var4)(var10, var8);
            var8 = new Array(3);
            var8[0] = var10;
            var15 = _closure1_slot12;
            var11 = _closure1_slot7;
            var10 = {};
            var24 = var29.detailsWrapper;
            var10['style'] = var24;
            var30 = _closure1_slot13;
            var24 = {};
            var34 = var29.detailsContainer;
            var24['style'] = var34;
            var34 = {};
            var37 = var29.rewardImgContainer;
            var34['style'] = var37;
            var40 = _closure1_slot12;
            var39 = _closure1_slot1;
            var44 = _closure1_slot2;
            if(var36) { _fun0004_ip = 151; continue _fun0004 }
case 152:
            var36 = 64;
            var36 = var44[var36];
            var37 = var39.bind(var4)(var36);
            var36 = {'quest': null, 'height': 64, 'width': 64};
            var36['quest'] = var19;
            var36 = var40.bind(var4)(var37, var36);
            _fun0004_ip = 153; continue _fun0004;
case 151:
            var37 = 63;
            var37 = var44[var37];
            var39 = var39.bind(var4)(var37);
            var37 = {};
            var37['quest'] = var19;
            var37['progress'] = var41;
            var41 = 'sm';
            var37['size'] = var41;
            var36 = var40.bind(var4)(var39, var37);
case 153:
            var34['children'] = var36;
            var36 = var15.bind(var4)(var11, var34);
            var34 = new Array(2);
            var34[0] = var36;
            var39 = _closure1_slot13;
            var37 = _closure1_slot7;
            var36 = {};
            var40 = var29.detailsTextContainer;
            var36['style'] = var40;
            var49 = _closure1_slot12;
            var46 = _closure1_slot0;
            var44 = _closure1_slot2;
            var40 = var44[var48];
            var40 = var46.bind(var4)(var40);
            var41 = var40.Text;
            var40 = {'variant': 'eyebrow', 'color': 'text-brand', 'style': null, 'accessibilityRole': 'header'};
            var52 = var29.questName;
            var40['style'] = var52;
            var40['children'] = var42;
            var41 = var49.bind(var4)(var41, var40);
            var40 = new Array(2);
            var40[0] = var41;
            var41 = {};
            var42 = var29.bodyContainer;
            var41['style'] = var42;
            var42 = {};
            var52 = var29.subtitleRow;
            var42['style'] = var52;
            var44 = var44[var48];
            var44 = var46.bind(var4)(var44);
            var46 = var44.Text;
            var44 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var44['children'] = var50;
            var46 = var49.bind(var4)(var46, var44);
            var44 = new Array(2);
            var44[0] = var46;
            if(!var45) { _fun0004_ip = 154; continue _fun0004 }
case 155:
            var50 = _closure1_slot12;
            var49 = _closure1_slot0;
            var52 = _closure1_slot2;
            var46 = 65;
            var46 = var52[var46];
            var46 = var49.bind(var4)(var46);
            var49 = var46.QuestOrbMultiplierPerkPill;
            var46 = {};
            var52 = var19.config;
            var52 = var52.id;
            var46['questId'] = var52;
            var46['orbMultiplierEligibility'] = var51;
            var45 = var50.bind(var4)(var49, var46);
case 154:
            var44[1] = var45;
            var42['children'] = var44;
            var44 = var39.bind(var4)(var37, var42);
            var42 = new Array(2);
            var42[0] = var44;
            var43 = var43 != var47;
            if(!var43) { _fun0004_ip = 156; continue _fun0004 }
case 157:
            var46 = _closure1_slot12;
            var45 = _closure1_slot0;
            var44 = _closure1_slot2;
            var44 = var44[var48];
            var44 = var45.bind(var4)(var44);
            var45 = var44.Text;
            var44 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var44['children'] = var47;
            var43 = var46.bind(var4)(var45, var44);
case 156:
            var42[1] = var43;
            var41['children'] = var42;
            var41 = var39.bind(var4)(var37, var41);
            var40[1] = var41;
            var36['children'] = var40;
            var36 = var39.bind(var4)(var37, var36);
            var34[1] = var36;
            var24['children'] = var34;
            var24 = var30.bind(var4)(var11, var24);
            var10['children'] = var24;
            var10 = var15.bind(var4)(var11, var10);
            var8[1] = var10;
            var11 = _closure1_slot13;
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = var15[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Stack;
            var9 = {'direction': 'horizontal', 'align': 'center'};
            var24 = _closure1_slot1;
            var15 = var15[var28];
            var15 = var24.bind(var4)(var15);
            var15 = var15.space;
            var15 = var15.PX_8;
            var9['spacing'] = var15;
            var15 = var29.buttonContainers;
            var9['style'] = var15;
            var15 = _closure1_slot14;
            var24 = {};
            if(var27) { _fun0004_ip = 158; continue _fun0004 }
case 159:
            if(!var26) { _fun0004_ip = 160; continue _fun0004 }
case 161:
            var26 = !var27;
case 160:
            if(!var26) { _fun0004_ip = 162; continue _fun0004 }
case 163:
            var26 = !var18;
case 162:
            if(!var26) { _fun0004_ip = 164; continue _fun0004 }
case 165:
            var26 = !var12;
case 164:
            if(!var26) { _fun0004_ip = 166; continue _fun0004 }
case 167:
            var26 = !var13;
case 166:
            if(!var26) { _fun0004_ip = 168; continue _fun0004 }
case 169:
            var28 = _closure1_slot12;
            var27 = _closure1_slot7;
            var12 = {};
            var30 = var29.equalWidthContainer;
            var12['style'] = var30;
            var37 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 66;
            var30 = var36[var30];
            var30 = var37.bind(var4)(var30);
            var34 = var30.Button;
            var30 = {'grow': true, 'variant': 'secondary'};
            var36 = var36[var38];
            var37 = var37.bind(var4)(var36);
            var36 = var37.getExternalCtaLabel;
            var36 = var36.bind(var37)(var19);
            var30['text'] = var36;
            var30['onPress'] = var35;
            var30 = var28.bind(var4)(var34, var30);
            var12['children'] = var30;
            var26 = var28.bind(var4)(var27, var12);
case 168:
            var12 = new Array(2);
            var12[0] = var26;
            var28 = _closure1_slot12;
            var27 = _closure1_slot7;
            var26 = {};
            var29 = var29.equalWidthContainer;
            var26['style'] = var29;
            var30 = _closure1_slot0;
            var34 = _closure1_slot2;
            var29 = 66;
            var29 = var34[var29];
            var29 = var30.bind(var4)(var29);
            var30 = var29.Button;
            var29 = {};
            var29['grow'] = var33;
            var65 = var29;
            var64 = var32;
            var32 = copyDataProperties(var65, var64);
            var29 = var28.bind(var4)(var30, var29);
            var26['children'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var12[1] = var26;
            var24['children'] = var12;
            var12 = var24;
            _fun0004_ip = 170; continue _fun0004;
case 158:
            var29 = _closure1_slot12;
            var33 = _closure1_slot0;
            var30 = _closure1_slot2;
            var27 = 66;
            var26 = var30[var27];
            var26 = var33.bind(var4)(var26);
            var28 = var26.Button;
            var26 = {'grow': true, 'onPress': null, 'variant': 'secondary', 'disabled': true};
            var32 = _closure1_slot11;
            var26['onPress'] = var32;
            var32 = var30[var22];
            var32 = var33.bind(var4)(var32);
            var35 = var32.intl;
            var34 = var35.string;
            var32 = var30[var22];
            var32 = var33.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.V293qn;
            var32 = var34.bind(var35)(var32);
            var26['text'] = var32;
            var28 = var29.bind(var4)(var28, var26);
            var26 = new Array(2);
            var26[0] = var28;
            var27 = var30[var27];
            var27 = var33.bind(var4)(var27);
            var28 = var27.Button;
            var27 = {};
            var31 = function onPress() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 38;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 40;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 67;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot1;
                var7 = var7.id;
                var3['questId'] = var7;
                var7 = _closure2_slot16;
                var3['questEnrollmentBlockedUntil'] = var7;
                var2 = _closure2_slot4;
                var3['sourceQuestContent'] = var2;
                var2 = 'QuestEnrollmentBlockedBottomSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var27['onPress'] = var31;
            var31 = 'tertiary';
            var27['variant'] = var31;
            var31 = var30[var22];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var30[var22];
            var30 = var33.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.vY9GgG;
            var30 = var31.bind(var32)(var30);
            var27['text'] = var30;
            var27 = var29.bind(var4)(var28, var27);
            var26[1] = var27;
            var24['children'] = var26;
            var12 = var24;
case 170:
            var15 = var11.bind(var4)(var15, var12);
            var12 = new Array(4);
            var12[0] = var15;
            var15 = var13;
            if(!var13) { _fun0004_ip = 171; continue _fun0004 }
case 172:
            var15 = var23;
case 171:
            if(!var15) { _fun0004_ip = 173; continue _fun0004 }
case 174:
            var15 = var20;
case 173:
            if(!var15) { _fun0004_ip = 175; continue _fun0004 }
case 176:
            var24 = _closure1_slot12;
            var30 = _closure1_slot0;
            var28 = _closure1_slot2;
            var20 = 68;
            var20 = var28[var20];
            var20 = var30.bind(var4)(var20);
            var23 = var20.IconButton;
            var20 = {};
            var26 = var28[var22];
            var26 = var30.bind(var4)(var26);
            var29 = var26.intl;
            var27 = var29.string;
            var26 = var28[var22];
            var26 = var30.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.YsCuyF;
            var26 = var27.bind(var29)(var26);
            var20['accessibilityLabel'] = var26;
            var27 = _closure1_slot1;
            var26 = 69;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var20['icon'] = var26;
            var20['onPress'] = var25;
            var25 = 'secondary';
            var20['variant'] = var25;
            var15 = var24.bind(var4)(var23, var20);
case 175:
            var12[1] = var15;
            if(!var13) { _fun0004_ip = 177; continue _fun0004 }
case 178:
            var13 = var14;
case 177:
            if(!var13) { _fun0004_ip = 179; continue _fun0004 }
case 180:
            var20 = _closure1_slot12;
            var26 = _closure1_slot0;
            var24 = _closure1_slot2;
            var14 = 68;
            var14 = var24[var14];
            var14 = var26.bind(var4)(var14);
            var15 = var14.IconButton;
            var14 = {};
            var23 = var24[var22];
            var23 = var26.bind(var4)(var23);
            var25 = var23.intl;
            var23 = var25.string;
            var22 = var24[var22];
            var22 = var26.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.CkUzLd;
            var22 = var23.bind(var25)(var22);
            var14['accessibilityLabel'] = var22;
            var23 = _closure1_slot1;
            var22 = 69;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var14['icon'] = var22;
            var14['onPress'] = var21;
            var21 = 'secondary';
            var14['variant'] = var21;
            var13 = var20.bind(var4)(var15, var14);
case 179:
            var12[2] = var13;
            var15 = _closure1_slot12;
            var14 = _closure1_slot1;
            var20 = _closure1_slot2;
            var13 = 70;
            var13 = var20[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['quest'] = var19;
            var18 = !var18;
            var13['showShareLink'] = var18;
            var17 = _closure1_slot10;
            var17 = var17.QUESTS_CARD;
            var13['location'] = var17;
            var13['sourceQuestContent'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[3] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 71;
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