// app/modules/quests/native/QuestCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var6;
    var1 = function dismissOverlayScreens() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var4 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.isReady;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = var4.getRootState;
            var8 = var3.bind(var4)();
            var6 = var8.routes;
            var5 = var6.filter;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.name;
                    var1 = 'you';
                    var1 = var1 !== var3;
                    if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var3 = var2.name;
                    var2 = 'settings';
                    var1 = var2 !== var3;
case 5:
                    return var1;
                }
            };
            var7 = var5.bind(var6)(var3);
            var5 = var7.length;
            var3 = var8.routes;
            var3 = var3.length;
            if(!(var5 < var3)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var3 = var4.dispatch;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var6 = var2.CommonActions;
            var5 = var6.reset;
            var2 = {};
            var10 = var2;
            var9 = var8;
            var8 = copyDataProperties(var10, var9);
            var8 = 'routes';
            var2[7] = var7;
            var8 = var7.length;
            var7 = 1;
            var8 = var8 - var7;
            var7 = 'index';
            var2[6] = var8;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var4 = var17.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var17.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot5 = var8;
    var4 = 3;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.Image;
    var _closure1_slot6 = var4;
    var4 = var7.StyleSheet;
    var7 = var7.View;
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var17.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var17.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.QuestsExperimentLocations;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.NOOP;
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.jsx;
    var _closure1_slot12 = var9;
    var9 = var7.Fragment;
    var _closure1_slot13 = var9;
    var7 = var7.jsxs;
    var _closure1_slot14 = var7;
    var16 = 9;
    var7 = var6[var16];
    var7 = var17.bind(var1)(var7);
    var7 = var7.colors;
    var19 = var7.BACKGROUND_SURFACE_HIGH;
    var7 = var6[var16];
    var7 = var17.bind(var1)(var7);
    var7 = var7.colors;
    var18 = var7.BORDER_SUBTLE;
    var7 = 12;
    var9 = var6[var7];
    var11 = var5.bind(var1)(var9);
    var10 = var11.experimental_createToken;
    var9 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = var1.theme;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 13;
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
            if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var2 = var7.BLACK;
            _fun0003_ip = 10; continue _fun0003;
case 8:
            var2 = var7.BACKGROUND_SURFACE_HIGH;
case 10:
            var4 = var4.bind(var5)(var6, var2);
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.hexOpacityToRgba;
            var1 = 0;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var13 = var10.bind(var11)(var9);
    var9 = var6[var7];
    var11 = var5.bind(var1)(var9);
    var10 = var11.experimental_createToken;
    var9 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var7 = var1.theme;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 13;
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
            if(var5) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var2 = var8.BLACK;
            _fun0004_ip = 10; continue _fun0004;
case 8:
            var2 = var8.BACKGROUND_SURFACE_HIGH;
case 10:
            var4 = var4.bind(var6)(var7, var2);
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 14;
            var1 = var6[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.hexOpacityToRgba;
            var1 = 0.5;
            if(!var5) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var1 = 0.8;
case 11:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var12 = var10.bind(var11)(var9);
    var9 = var6[var7];
    var11 = var5.bind(var1)(var9);
    var10 = var11.experimental_createToken;
    var9 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = var1.theme;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 13;
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
            if(var1) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var1 = var2.BLACK;
            _fun0005_ip = 15; continue _fun0005;
case 13:
            var1 = var2.BACKGROUND_SURFACE_HIGH;
case 15:
            return var1;
        }
    };
    var11 = var10.bind(var11)(var9);
    var9 = var6[var16];
    var9 = var17.bind(var1)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var _closure1_slot15 = var9;
    var9 = var6[var7];
    var14 = var5.bind(var1)(var9);
    var10 = var14.createStyles;
    var9 = {};
    var15 = {'position': 'relative', 'padding': 0};
    var20 = var6[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.radii;
    var20 = var20.sm;
    var15['borderRadius'] = var20;
    var15['backgroundColor'] = var19;
    var19 = var6[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_16;
    var15['marginBottom'] = var19;
    var19 = 'hidden';
    var15['overflow'] = var19;
    var9['container'] = var15;
    var15 = {'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end'};
    var19 = 'flex';
    var20 = var6[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_12;
    var15['padding'] = var20;
    var9['heroContainer'] = var15;
    var15 = {};
    var20 = 'cover';
    var15['resizeMode'] = var20;
    var22 = var4.absoluteFillObject;
    var23 = var15;
    var20 = copyDataProperties(var23, var22);
    var9['heroImg'] = var15;
    var4 = var4.absoluteFillObject;
    var9['heroLinearGradientOverlay'] = var4;
    var4 = {};
    var15 = 'absolute';
    var4['position'] = var15;
    var15 = var6[var16];
    var15 = var17.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var4['top'] = var15;
    var15 = var6[var16];
    var15 = var17.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var4['right'] = var15;
    var15 = var6[var16];
    var15 = var17.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BRAND;
    var4['backgroundColor'] = var15;
    var15 = var6[var16];
    var15 = var17.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var4['padding'] = var15;
    var15 = var6[var16];
    var15 = var17.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var4['borderRadius'] = var15;
    var15 = var6[var16];
    var15 = var17.bind(var1)(var15);
    var15 = var15.shadows;
    var22 = var15.SHADOW_LOW;
    var23 = var4;
    var15 = copyDataProperties(var23, var22);
    var9['previewBadge'] = var4;
    var15 = {'height': 64, 'width': 64};
    var4 = 64;
    var20 = var6[var16];
    var20 = var17.bind(var1)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_12;
    var15['marginRight'] = var20;
    var9['rewardImgContainer'] = var15;
    var15 = {'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'space-between', 'alignItems': 'flex-end'};
    var9['heroFooterContainer'] = var15;
    var15 = {'display': 'flex', 'flexDirection': 'column', 'alignItems': 'flex-start'};
    var9['heroFooterLeftContainer'] = var15;
    var15 = {};
    var15['display'] = var19;
    var19 = var6[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_12;
    var15['padding'] = var19;
    var9['detailsWrapper'] = var15;
    var15 = {'display': 'flex', 'flexDirection': 'row'};
    var9['detailsContainer'] = var15;
    var15 = {};
    var19 = var6[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_4;
    var15['marginBottom'] = var19;
    var9['questName'] = var15;
    var15 = {'display': 'flex', 'flexDirection': 'column'};
    var19 = var6[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_4;
    var15['gap'] = var19;
    var9['bodyContainer'] = var15;
    var15 = {'flexDirection': 'row', 'alignItems': 'center', 'rowGap': null, 'columnGap': null, 'flexWrap': 'wrap'};
    var19 = var6[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_4;
    var15['rowGap'] = var19;
    var19 = var6[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_8;
    var15['columnGap'] = var19;
    var9['subtitleRow'] = var15;
    var15 = {'flex': 1, 'justifyContent': 'center'};
    var9['detailsTextContainer'] = var15;
    var15 = {'borderTopWidth': 1, 'borderTopColor': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var15['borderTopColor'] = var18;
    var16 = var6[var16];
    var16 = var17.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var15['padding'] = var16;
    var9['buttonContainers'] = var15;
    var9 = var10.bind(var14)(var9);
    var _closure1_slot16 = var9;
    var7 = var6[var7];
    var10 = var5.bind(var1)(var7);
    var9 = var10.createStyleProperties;
    var7 = {};
    var7['gradientStart'] = var13;
    var7['gradientMid'] = var12;
    var7['gradientEnd'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot17 = var7;
    var7 = var8.memo;
    var2 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var10 = var3.containerPadding;
            var1 = var3.onLayout;
            var _closure2_slot0 = var1;
            var1 = var3.quest;
            var _closure2_slot1 = var1;
            var2 = var3.questContent;
            var5 = undefined;
            if(!(var5 === var2)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 15;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.QuestContent;
            var2 = var4.QUEST_HOME_MOBILE;
case 16:
            var _closure2_slot2 = var2;
            var4 = var3.questContentPosition;
            var _closure2_slot3 = var4;
            var17 = var3.sourceQuestContent;
            var _closure2_slot4 = var17;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 16;
            var6 = var3[var6];
            var8 = var4.bind(var5)(var6);
            var7 = var8.getQuestLogger;
            var6 = {};
            var6['quest'] = var1;
            var9 = _closure1_slot10;
            var9 = var9.QUEST_HOME_MOBILE;
            var6['location'] = var9;
            var6 = var7.bind(var8)(var6);
            var _closure2_slot5 = var6;
            var6 = 17;
            var6 = var3[var6];
            var7 = var4.bind(var5)(var6);
            var6 = var7.useTrackQuestContentClickedWithImpression;
            var6 = var6.bind(var7)();
            var _closure2_slot6 = var6;
            var9 = 18;
            var6 = var3[var9];
            var7 = var4.bind(var5)(var6);
            var6 = var7.useQuestTaskDetails;
            var12 = var6.bind(var7)(var1);
            var _closure2_slot7 = var12;
            var3 = var3[var9];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useQuestCompletionDetails;
            var3 = var3.bind(var4)(var1);
            var38 = var3.completedRatio;
            var4 = var1.userStatus;
            var24 = null;
            var6 = var24 == var4;
            var3 = undefined;
            if(var6) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var3 = var4.enrolledAt;
case 18:
            var28 = var24 != var3;
            var3 = _closure1_slot16;
            var27 = var3.bind(var5)();
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var11 = 19;
            var3 = var4[var11];
            var8 = var6.bind(var5)(var3);
            var7 = var8.useQuestsInstructionsToWinReward;
            var3 = {};
            var3['quest'] = var1;
            var3['taskDetails'] = var12;
            var12 = _closure1_slot10;
            var12 = var12.QUEST_HOME_MOBILE;
            var3['location'] = var12;
            var3['questContent'] = var2;
            var3['sourceQuestContent'] = var17;
            var3 = var7.bind(var8)(var3);
            var8 = _closure1_slot1;
            var7 = 20;
            var7 = var4[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.bind(var5)();
            var8 = var7.width;
            var7 = _closure1_slot15;
            var14 = 2;
            var7 = var14 * var7;
            var7 = var8 - var7;
            var _closure2_slot8 = var7;
            var8 = 0.2803030303030303;
            var32 = var8 * var7;
            var _closure2_slot9 = var32;
            var13 = _closure1_slot5;
            var12 = var13.useMemo;
            var8 = new Array(3);
            var8[0] = var1;
            var8[1] = var7;
            var8[2] = var32;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 21;
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
                    var2 = 22;
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
                    if(var1) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                    var5 = var7.getAssetUrlWithMediaProxyQueryParams;
                    var4 = var3.url;
                    var1 = {};
                    var1['width'] = var9;
                    var1['height'] = var8;
                    var6 = 'webp';
                    var1['format'] = var6;
                    var4 = var5.bind(var7)(var4, var1);
                    var1 = 'url';
                    var2[0] = var4;
                    var1 = var2;
                    _fun0007_ip = 22; continue _fun0007;
case 20:
                    var6 = var7.convertVideoToFirstFrameImageWithMediaProxy;
                    var5 = var3.url;
                    var4 = {};
                    var4['width'] = var9;
                    var4['height'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var5 = null;
                    if(!(var5 == var4)) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var4 = var3.url;
case 23:
                    var3 = 'url';
                    var2[2] = var4;
                    var1 = var2;
case 22:
                    return var1;
                }
            };
            var43 = var12.bind(var13)(var7, var8);
            var12 = 23;
            var7 = var4[var12];
            var8 = var6.bind(var5)(var7);
            var7 = var8.useQuestGameLogotypeAssetUrl;
            var42 = var7.bind(var8)(var1);
            var7 = _closure1_slot17;
            var7 = var7.bind(var5)();
            var37 = var7.gradientStart;
            var36 = var7.gradientMid;
            var35 = var7.gradientEnd;
            var7 = var13.useState;
            var8 = var7.bind(var13)(var24);
            var7 = _closure1_slot4;
            var8 = var7.bind(var5)(var8, var14);
            var7 = 0;
            var14 = var8[var7];
            var _closure2_slot10 = var14;
            var7 = 1;
            var7 = var8[var7];
            var _closure2_slot11 = var7;
            var15 = var13.useCallback;
            var8 = function() {
                var3 = _closure2_slot11;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = new Array(0);
            var39 = var15.bind(var13)(var8, var7);
            var8 = var13.useEffect;
            var7 = new Array(3);
            var7[0] = var14;
            var14 = var1.id;
            var7[1] = var14;
            var7[2] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var1 = false;
                    if(!(var1 === var2)) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 24;
                    var1 = var10[var1];
                    var9 = undefined;
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.increment;
                    var1 = {};
                    var8 = _closure1_slot0;
                    var4 = 25;
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
                    var7 = 26;
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
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var13)(var2, var7);
            var2 = 27;
            var7 = var4[var2];
            var13 = var6.bind(var5)(var7);
            var8 = var13.getDefaultRewardNameWithArticle;
            var7 = var1.config;
            var8 = var8.bind(var13)(var7);
            var _closure2_slot12 = var8;
            var22 = 28;
            var7 = var4[var22];
            var15 = var6.bind(var5)(var7);
            var14 = var15.useStateFromStoresObject;
            var7 = _closure1_slot9;
            var13 = new Array(1);
            var13[0] = var7;
            var7 = function() {
                var1 = {};
                var2 = _closure1_slot9;
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
            var7 = var14.bind(var15)(var13, var7);
            var13 = var7.isFetchingRewardCode;
            var _closure2_slot13 = var13;
            var13 = var7.isClaimingReward;
            var _closure2_slot14 = var13;
            var13 = var7.isEnrolling;
            var _closure2_slot15 = var13;
            var23 = var7.questEnrollmentBlockedUntil;
            var _closure2_slot16 = var23;
            var4 = var4[var9];
            var13 = var6.bind(var5)(var4);
            var7 = var13.useQuestFormattedDate;
            var4 = var1.userStatus;
            var14 = var24 == var4;
            var6 = undefined;
            if(var14) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var6 = var4.completedAt;
case 27:
            var4 = {'year': 'numeric', 'month': 'long', 'day': 'numeric'};
            var7 = var7.bind(var13)(var6, var4);
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var13 = 29;
            var13 = var4[var13];
            var14 = var6.bind(var5)(var13);
            var13 = var14.hasWatchVideoTasks;
            var16 = var13.bind(var14)(var1);
            var _closure2_slot17 = var16;
            var4 = var4[var12];
            var13 = var6.bind(var5)(var4);
            var6 = var13.useHasWatchVideoOnMobileTasks;
            var4 = var1.config;
            var15 = var6.bind(var13)(var4);
            var _closure2_slot18 = var15;
            var6 = var1.userStatus;
            var13 = var24 == var6;
            var4 = undefined;
            if(var13) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var4 = var6.enrolledAt;
case 29:
            var20 = var24 != var4;
            var _closure2_slot19 = var20;
            var6 = var1.userStatus;
            var13 = var24 == var6;
            var4 = undefined;
            if(var13) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var4 = var6.completedAt;
case 31:
            var14 = var24 != var4;
            var _closure2_slot20 = var14;
            var6 = var1.userStatus;
            var13 = var24 == var6;
            var4 = undefined;
            if(var13) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var4 = var6.claimedAt;
case 33:
            var13 = var24 != var4;
            var _closure2_slot21 = var13;
            var6 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 30;
            var19 = var21[var4];
            var25 = var6.bind(var5)(var19);
            var19 = var25.isQuestExpired;
            var19 = var19.bind(var25)(var1);
            var _closure2_slot22 = var19;
            var4 = var21[var4];
            var25 = var6.bind(var5)(var4);
            var4 = var25.getIsQuestExpiredButWithinThirtyDayLookback;
            var4 = var4.bind(var25)(var1);
            var _closure2_slot23 = var4;
            var4 = 31;
            var4 = var21[var4];
            var26 = var6.bind(var5)(var4);
            var25 = var26.getDefaultReward;
            var4 = var1.config;
            var4 = var25.bind(var26)(var4);
            var25 = var4.skuId;
            var26 = _closure1_slot1;
            var4 = 32;
            var4 = var21[var4];
            var4 = var26.bind(var5)(var4);
            var29 = var4.bind(var5)();
            var4 = 13;
            var4 = var21[var4];
            var26 = var6.bind(var5)(var4);
            var4 = var26.isThemeDark;
            var44 = var4.bind(var26)(var29);
            var4 = var21[var2];
            var29 = var6.bind(var5)(var4);
            var26 = var29.hasCollectiblesQuestReward;
            var4 = var1.config;
            var26 = var26.bind(var29)(var4);
            var4 = 33;
            var4 = var21[var4];
            var21 = var6.bind(var5)(var4);
            var6 = var21.useFetchCollectiblesProduct;
            var4 = null;
            if(!var26) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var4 = null;
            if(!var14) { _fun0006_ip = 35; continue _fun0006 }
case 37:
            var4 = var25;
case 35:
            var4 = var6.bind(var21)(var4);
            var6 = var4.product;
            var _closure2_slot24 = var6;
            var4 = var4.isFetching;
            var _closure2_slot25 = var4;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var21 = var4[var22];
            var30 = var6.bind(var5)(var21);
            var29 = var30.useStateFromStores;
            var21 = _closure1_slot8;
            var26 = new Array(1);
            var26[0] = var21;
            var25 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var2 = var3.hasVerifiedEmailOrPhone;
                    var1 = var2.bind(var3)();
case 38:
                    return var1;
                }
            };
            var25 = var29.bind(var30)(var26, var25);
            var _closure2_slot26 = var25;
            var22 = var4[var22];
            var26 = var6.bind(var5)(var22);
            var25 = var26.useStateFromStores;
            var22 = new Array(1);
            var22[0] = var21;
            var21 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0010_ip = 40; continue _fun0010 }
case 39:
                    var1 = var2.verified;
case 40:
                    return var1;
                }
            };
            var21 = var25.bind(var26)(var22, var21);
            var _closure2_slot27 = var21;
            var12 = var4[var12];
            var21 = var6.bind(var5)(var12);
            var12 = var21.useMobileActivityQuest;
            var12 = var12.bind(var21)(var1);
            var21 = var12.isMobileActivityQuest;
            var _closure2_slot28 = var21;
            var22 = var12.questApplication;
            var12 = var12.launchMobileActivity;
            var _closure2_slot29 = var12;
            var12 = 34;
            var21 = var4[var12];
            var29 = var6.bind(var5)(var21);
            var25 = var29.useToken;
            var26 = _closure1_slot1;
            var30 = 9;
            var21 = var4[var30];
            var21 = var26.bind(var5)(var21);
            var21 = var21.colors;
            var21 = var21.BACKGROUND_BASE_LOWER;
            var21 = var25.bind(var29)(var21);
            var _closure2_slot30 = var21;
            var21 = var4[var12];
            var29 = var6.bind(var5)(var21);
            var25 = var29.useToken;
            var21 = var4[var30];
            var21 = var26.bind(var5)(var21);
            var21 = var21.colors;
            var21 = var21.BACKGROUND_BASE_LOW;
            var21 = var25.bind(var29)(var21);
            var _closure2_slot31 = var21;
            var12 = var4[var12];
            var25 = var6.bind(var5)(var12);
            var21 = var25.useToken;
            var12 = var4[var30];
            var12 = var26.bind(var5)(var12);
            var12 = var12.colors;
            var12 = var12.BACKGROUND_BASE_LOWEST;
            var12 = var21.bind(var25)(var12);
            var _closure2_slot32 = var12;
            var12 = var4[var9];
            var26 = var6.bind(var5)(var12);
            var25 = var26.useQuestFormattedDate;
            var12 = var1.config;
            var21 = var12.expiresAt;
            var12 = {'month': 'numeric', 'day': 'numeric'};
            var50 = var25.bind(var26)(var21, var12);
            var _closure2_slot33 = var50;
            var12 = function trackClick(arg1) {
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
            var _closure2_slot34 = var12;
            var12 = function showQuestBottomSheet() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 35;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 37;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 36;
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
            var _closure2_slot35 = var12;
            var11 = var4[var11];
            var21 = var6.bind(var5)(var11);
            var12 = var21.usePrimaryCtaCopy;
            var11 = {};
            var11['quest'] = var1;
            var11['application'] = var22;
            var11 = var12.bind(var21)(var11);
            var _closure2_slot36 = var11;
            var11 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot24;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0011_ip = 41; continue _fun0011 }
case 42:
                    var2 = _closure2_slot24;
                    var1 = {};
                    var7 = var2.styles;
                    var9 = var6 == var7;
                    var8 = undefined;
                    var5 = undefined;
                    if(var9) { _fun0011_ip = 43; continue _fun0011 }
case 44:
                    var5 = var7.buttonColors;
case 43:
                    if(!(var6 == var5)) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                    var5 = new Array(0);
case 45:
                    var1['buttonColors'] = var5;
                    var5 = _closure2_slot24;
                    var7 = var5.styles;
                    var9 = var6 == var7;
                    var5 = undefined;
                    if(var9) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                    var5 = var7.confettiColors;
case 47:
                    if(!(var6 == var5)) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                    var5 = new Array(0);
case 49:
                    var1['confettiColors'] = var5;
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 38;
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
case 41:
                    var1 = _closure2_slot21;
                    if(var1) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                    var1 = _closure2_slot20;
                    if(!var1) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                    var1 = _closure2_slot22;
                    if(!var1) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                    var1 = _closure2_slot23;
                    if(var1) { _fun0011_ip = 55; continue _fun0011 }
case 53:
                    var1 = _closure2_slot22;
                    if(var1) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                    var1 = _closure2_slot19;
                    if(!var1) { _fun0011_ip = 19; continue _fun0011 }
case 23:
                    var1 = _closure2_slot17;
                    if(var1) { _fun0011_ip = 59; continue _fun0011 }
case 19:
                    var1 = _closure2_slot19;
                    if(!var1) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                    var1 = _closure2_slot28;
                    if(var1) { _fun0011_ip = 62; continue _fun0011 }
case 60:
                    var1 = _closure2_slot19;
                    if(!var1) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                    var1 = _closure2_slot17;
                    if(var1) { _fun0011_ip = 63; continue _fun0011 }
case 65:
                    var1 = _closure2_slot28;
                    if(var1) { _fun0011_ip = 63; continue _fun0011 }
case 66:
                    var1 = {'text': null, 'variant': 'secondary', 'disabled': false};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 39;
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
                        var4 = _closure2_slot34;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 26;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.QuestContentCTA;
                        var3 = var3.VIEW_REQUIREMENTS;
                        var3 = var4.bind(var1)(var3);
                        var2 = _closure2_slot35;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var1['onPress'] = var2;
                    _fun0011_ip = 67; continue _fun0011;
case 63:
                    var2 = {};
                    var5 = _closure2_slot36;
                    var2['text'] = var5;
                    var5 = false;
                    var2['disabled'] = var5;
                    var5 = _closure2_slot15;
                    var2['loading'] = var5;
                    var6 = _closure2_slot17;
                    var7 = undefined;
                    var5 = undefined;
                    if(!var6) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 41;
                    var6 = var9[var6];
                    var9 = var8.bind(var7)(var6);
                    var8 = var9.getVideoQuestWatchCtaAccessibilityLabel;
                    var6 = _closure2_slot7;
                    var5 = var8.bind(var9)(var6);
case 68:
                    var2['accessibilityLabel'] = var5;
                    var6 = _closure2_slot28;
                    var5 = undefined;
                    if(!var6) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 40;
                    var6 = var9[var6];
                    var9 = var8.bind(var7)(var6);
                    var8 = var9.getPrimaryCtaIcon;
                    var6 = _closure2_slot1;
                    var5 = var8.bind(var9)(var6);
case 70:
                    var2['icon'] = var5;
                    var6 = _closure1_slot3;
                    var5 = function* () {
                        var1 = function* anon_0_() {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0012_ip = 72; continue _fun0012 }
case 73:
                                var4 = _closure2_slot5;
                                var3 = var4.log;
                                var2 = 'Enrolling in quest';
                                var2 = var3.bind(var4)(var2);
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 43;
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
                                if(var9) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                                var9 = _closure2_slot17;
                                if(var9) { _fun0012_ip = 74; continue _fun0012 }
case 9:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var9 = 26;
                                var9 = var11[var9];
                                var9 = var10.bind(var3)(var9);
                                var9 = var9.QuestContentCTA;
                                var9 = var9.ACCEPT_QUEST;
                                _fun0012_ip = 76; continue _fun0012;
case 74:
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var10 = 26;
                                var10 = var12[var10];
                                var10 = var11.bind(var3)(var10);
                                var10 = var10.QuestContentCTA;
                                var9 = var10.START_QUEST;
case 76:
                                var2['questContentCTA'] = var9;
                                var9 = _closure2_slot4;
                                var2['sourceQuestContent'] = var9;
                                var2 = var7.bind(var8)(var5, var2);
                                SaveGenerator(address=188);
case 77:
                                return var2;
case 78:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                                var5 = _closure2_slot17;
                                if(!var5) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                                var5 = _closure2_slot18;
                                if(var5) { _fun0012_ip = 83; continue _fun0012 }
case 81:
                                var5 = _closure2_slot28;
                                if(var5) { _fun0012_ip = 84; continue _fun0012 }
case 85:
                                var5 = _closure2_slot35;
                                var5 = var5.bind(var3)();
                                _fun0012_ip = 86; continue _fun0012;
case 84:
                                var5 = _closure1_slot18;
                                var5 = var5.bind(var3)();
                                var5 = _closure2_slot29;
                                var5 = var5.bind(var3)();
                                SaveGenerator(address=245);
case 87:
                                return var5;
case 88:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                                if(!var7) { _fun0012_ip = 86; continue _fun0012 }
case 89:
                                return var5;
case 83:
                                var5 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var4 = 42;
                                var4 = var7[var4];
                                var5 = var5.bind(var3)(var4);
                                var4 = {};
                                var7 = _closure2_slot1;
                                var7 = var7.id;
                                var4['questId'] = var7;
                                var6 = _closure2_slot4;
                                var4['sourceQuestContent'] = var6;
                                var4 = var5.bind(var3)(var4);
case 86:
                                return var3;
case 79:
                                return var2;
case 72:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
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
case 67:
                    _fun0011_ip = 90; continue _fun0011;
case 62:
                    var2 = {};
                    var5 = _closure2_slot36;
                    var2['text'] = var5;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 40;
                    var6 = var7[var6];
                    var7 = undefined;
                    var9 = var8.bind(var7)(var6);
                    var8 = var9.getPrimaryCtaIcon;
                    var6 = _closure2_slot1;
                    var6 = var8.bind(var9)(var6);
                    var2['icon'] = var6;
                    var6 = false;
                    var2['disabled'] = var6;
                    var6 = _closure1_slot3;
                    var5 = function* () {
                        var1 = function* anon_0_() {
                            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0013_ip = 91; continue _fun0013 }
case 92:
                                var6 = _closure2_slot34;
                                var7 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 26;
                                var5 = var5[var3];
                                var3 = undefined;
                                var5 = var7.bind(var3)(var5);
                                var5 = var5.QuestContentCTA;
                                var5 = var5.LAUNCH_MOBILE_ACTIVITY;
                                var5 = var6.bind(var3)(var5);
                                var4 = _closure1_slot18;
                                var4 = var4.bind(var3)();
                                var2 = _closure2_slot29;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=76);
case 93:
                                return var2;
case 94:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0013_ip = 47; continue _fun0013 }
case 95:
                                return var3;
case 47:
                                return var2;
case 91:
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
case 90:
                    _fun0011_ip = 96; continue _fun0011;
case 59:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 41;
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
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var3 = _closure2_slot5;
                            var2 = var3.log;
                            var1 = 'Navigating to video quest bottom sheet';
                            var1 = var2.bind(var3)(var1);
                            var5 = _closure2_slot34;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 26;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.QuestContentCTA;
                            var3 = var3.WATCH_VIDEO;
                            var3 = var5.bind(var1)(var3);
                            var3 = _closure2_slot18;
                            if(var3) { _fun0014_ip = 97; continue _fun0014 }
case 94:
                            var3 = _closure2_slot35;
                            var3 = var3.bind(var1)();
                            _fun0014_ip = 98; continue _fun0014;
case 97:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 42;
                            var2 = var5[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var5 = _closure2_slot1;
                            var5 = var5.id;
                            var2['questId'] = var5;
                            var4 = _closure2_slot4;
                            var2['sourceQuestContent'] = var4;
                            var2 = var3.bind(var1)(var2);
case 98:
                            return var1;
                        }
                    };
                    var2['onPress'] = var5;
                    var1 = var2;
case 96:
                    _fun0011_ip = 99; continue _fun0011;
case 57:
                    var2 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 39;
                    var8 = var11[var6];
                    var7 = undefined;
                    var8 = var10.bind(var7)(var8);
                    var9 = var8.intl;
                    var8 = var9.formatToPlainString;
                    var6 = var11[var6];
                    var6 = var10.bind(var7)(var6);
                    var6 = var6.t;
                    var7 = var6["14o6QY"];
                    var6 = {};
                    var10 = _closure2_slot33;
                    var6['expiryDate'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['text'] = var6;
                    var6 = _closure2_slot14;
                    if(var6) { _fun0011_ip = 100; continue _fun0011 }
case 101:
                    var6 = _closure2_slot13;
case 100:
                    if(var6) { _fun0011_ip = 102; continue _fun0011 }
case 103:
                    var6 = _closure2_slot25;
case 102:
                    var2['loading'] = var6;
                    var6 = true;
                    var2['disabled'] = var6;
                    var6 = 'secondary';
                    var2['variant'] = var6;
                    var5 = _closure1_slot11;
                    var2['onPress'] = var5;
                    var1 = var2;
case 99:
                    _fun0011_ip = 104; continue _fun0011;
case 55:
                    var2 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 39;
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
                    if(var5) { _fun0011_ip = 105; continue _fun0011 }
case 106:
                    var5 = _closure2_slot13;
case 105:
                    if(var5) { _fun0011_ip = 107; continue _fun0011 }
case 108:
                    var5 = _closure2_slot25;
case 107:
                    var2['loading'] = var5;
                    var5 = function onPress() {
                        var6 = _closure2_slot34;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 26;
                        var2 = var4[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.QuestContentCTA;
                        var2 = var2.CLAIM_REWARD;
                        var2 = var6.bind(var1)(var2);
                        var2 = 40;
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
case 104:
                    _fun0011_ip = 109; continue _fun0011;
case 51:
                    var2 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 39;
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
                        var6 = _closure2_slot34;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 26;
                        var2 = var4[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.QuestContentCTA;
                        var2 = var2.SHOW_REWARD;
                        var2 = var6.bind(var1)(var2);
                        var2 = 40;
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
case 109:
                    return var1;
                }
            };
            var25 = var11.bind(var5)();
            var22 = 39;
            var11 = var4[var22];
            var11 = var6.bind(var5)(var11);
            var26 = var11.intl;
            var21 = var26.formatToPlainString;
            var11 = var4[var22];
            var11 = var6.bind(var5)(var11);
            var11 = var11.t;
            var12 = var11.EAYZAr;
            var11 = {};
            var29 = var1.config;
            var29 = var29.messages;
            var29 = var29.questName;
            var11['questName'] = var29;
            var40 = var21.bind(var26)(var12, var11);
            var11 = var4[var2];
            var21 = var6.bind(var5)(var11);
            var12 = var21.hasVirtualCurrencyReward;
            var11 = var1.config;
            var12 = var12.bind(var21)(var11);
            var _closure2_slot37 = var12;
            var11 = var4[var2];
            var26 = var6.bind(var5)(var11);
            var21 = var26.getVirtualCurrencyRewardOrbQuantity;
            var11 = var1.config;
            var11 = var21.bind(var26)(var11);
            var _closure2_slot38 = var11;
            var2 = var4[var2];
            var26 = var6.bind(var5)(var2);
            var21 = var26.getDefaultRewardName;
            var2 = var1.config;
            var2 = var21.bind(var26)(var2);
            var _closure2_slot39 = var2;
            var21 = var4[var9];
            var26 = var6.bind(var5)(var21);
            var21 = var26.useShouldShowBonusOrbsUX;
            var41 = var21.bind(var26)(var1);
            var4 = var4[var9];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useEligibleForQuestOrbMultiplier;
            var47 = var4.bind(var6)();
            var9 = _closure1_slot5;
            var6 = var9.useMemo;
            var4 = new Array(5);
            var4[0] = var13;
            var4[1] = var12;
            var4[2] = var11;
            var4[3] = var2;
            var4[4] = var8;
            var2 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 44;
                    var1 = var4[var1];
                    var7 = undefined;
                    var3 = var3.bind(var7)(var1);
                    var1 = var3.isFabric;
                    var1 = var1.bind(var3)();
                    var _closure3_slot0 = var1;
                    if(var1) { _fun0015_ip = 4; continue _fun0015 }
case 3:
                    var1 = {'marginTop': 0, 'marginRight': 3};
                    _fun0015_ip = 15; continue _fun0015;
case 4:
                    var3 = {};
                    var5 = {};
                    var4 = 3;
                    var5['translateY'] = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var3['transform'] = var4;
                    var1 = var3;
case 15:
                    var _closure3_slot1 = var1;
                    var1 = _closure2_slot21;
                    if(!var1) { _fun0015_ip = 110; continue _fun0015 }
case 111:
                    var1 = _closure2_slot37;
                    if(var1) { _fun0015_ip = 112; continue _fun0015 }
case 110:
                    var1 = _closure2_slot21;
                    if(var1) { _fun0015_ip = 113; continue _fun0015 }
case 114:
                    var1 = _closure2_slot37;
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 39;
                    var8 = var10[var4];
                    var8 = var5.bind(var7)(var8);
                    var9 = var8.intl;
                    var8 = var9.format;
                    var4 = var10[var4];
                    var4 = var5.bind(var7)(var4);
                    var4 = var4.t;
                    if(var1) { _fun0015_ip = 82; continue _fun0015 }
case 115:
                    var5 = var4["0IUT4Y"];
                    var1 = {};
                    var10 = function rewardWithArticleHook() {
                        var1 = _closure2_slot12;
                        return var1;
                    };
                    var1['rewardWithArticleHook'] = var10;
                    var1 = var8.bind(var9)(var5, var1);
                    _fun0015_ip = 116; continue _fun0015;
case 82:
                    var5 = var4.ro1sze;
                    var4 = {};
                    var10 = function balanceHook() {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var4 = _closure1_slot14;
                            var3 = _closure1_slot13;
                            var2 = {};
                            var9 = _closure1_slot12;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 45;
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
                            if(!var6) { _fun0016_ip = 117; continue _fun0016 }
case 75:
                            var9 = _closure1_slot12;
                            var8 = _closure1_slot7;
                            var7 = {};
                            var10 = {};
                            var11 = 2;
                            var10['width'] = var11;
                            var7['style'] = var10;
                            var6 = var9.bind(var1)(var8, var7);
case 117:
                            var5[1] = var6;
                            var6 = _closure2_slot38;
                            var5[2] = var6;
                            var2['children'] = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var4['balanceHook'] = var10;
                    var1 = var8.bind(var9)(var5, var4);
case 116:
                    _fun0015_ip = 118; continue _fun0015;
case 113:
                    var1 = _closure2_slot39;
case 118:
                    _fun0015_ip = 119; continue _fun0015;
case 112:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 39;
                    var4 = var8[var2];
                    var4 = var3.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.format;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.t;
                    var3 = var2["8Op4c4"];
                    var2 = {};
                    var6 = function balanceHook() {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var4 = _closure1_slot14;
                            var3 = _closure1_slot13;
                            var2 = {};
                            var9 = _closure1_slot12;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 45;
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
                            if(!var6) { _fun0017_ip = 117; continue _fun0017 }
case 75:
                            var9 = _closure1_slot12;
                            var8 = _closure1_slot7;
                            var7 = {};
                            var10 = {};
                            var11 = 2;
                            var10['width'] = var11;
                            var7['style'] = var10;
                            var6 = var9.bind(var1)(var8, var7);
case 117:
                            var5[1] = var6;
                            var6 = _closure2_slot38;
                            var5[2] = var6;
                            var2['children'] = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var2['balanceHook'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 119:
                    return var1;
                }
            };
            var46 = var6.bind(var9)(var2, var4);
            if(!var19) { _fun0006_ip = 120; continue _fun0006 }
case 121:
            if(!var14) { _fun0006_ip = 120; continue _fun0006 }
case 122:
            if(var13) { _fun0006_ip = 120; continue _fun0006 }
case 123:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = var2[var22];
            var6 = var4.bind(var5)(var6);
            var9 = var6.intl;
            var6 = var9.formatToPlainString;
            var2 = var2[var22];
            var2 = var4.bind(var5)(var2);
            var2 = var2.t;
            var4 = var2.l1jCM/;
            var2 = {};
            var2['date'] = var7;
            var45 = var6.bind(var9)(var4, var2);
            _fun0006_ip = 124; continue _fun0006;
case 120:
            var2 = var19;
            if(!var2) { _fun0006_ip = 125; continue _fun0006 }
case 126:
            var2 = var13;
case 125:
            var45 = var3;
            if(!var2) { _fun0006_ip = 124; continue _fun0006 }
case 127:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = var2[var22];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var2[var22];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.RrxtPU;
            var2 = {};
            var2['reward'] = var8;
            var2['date'] = var7;
            var45 = var4.bind(var6)(var3, var2);
case 124:
            var6 = _closure1_slot5;
            var4 = var6.useCallback;
            var2 = var1.id;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var17;
            var2 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 42;
                var2 = var7[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var6 = _closure2_slot1;
                var6 = var6.id;
                var2['questId'] = var6;
                var6 = _closure1_slot0;
                var5 = 46;
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
            var21 = var4.bind(var6)(var2, var3);
            var4 = _closure1_slot12;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 47;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Card;
            var2 = {};
            var7 = var27.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var8 = _closure1_slot15;
            var8 = var8 - var10;
            var7['marginHorizontal'] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var6 = function onLayout(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0018_ip = 38; continue _fun0018 }
case 128:
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var3 = var1.id;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var1, var3);
case 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onLayout'] = var6;
            var8 = _closure1_slot14;
            var7 = _closure1_slot1;
            var6 = 48;
            var6 = var9[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var9 = var41;
            if(!var41) { _fun0006_ip = 129; continue _fun0006 }
case 130:
            var9 = var47;
case 129:
            var6['visible'] = var9;
            var26 = true;
            var6['glow'] = var26;
            var12 = _closure1_slot14;
            var11 = _closure1_slot7;
            var9 = {};
            var29 = var27.heroContainer;
            var10 = new Array(2);
            var10[0] = var29;
            var29 = {};
            var29['height'] = var32;
            var10[1] = var29;
            var9['style'] = var10;
            var33 = _closure1_slot12;
            var32 = _closure1_slot1;
            var48 = _closure1_slot2;
            var10 = 49;
            var10 = var48[var10];
            var29 = var32.bind(var5)(var10);
            var10 = {};
            var34 = {};
            var43 = var43.url;
            var34['uri'] = var43;
            var10['source'] = var34;
            var34 = var27.heroImg;
            var10['style'] = var34;
            var10['onError'] = var39;
            var10 = var33.bind(var5)(var29, var10);
            var29 = new Array(4);
            var29[0] = var10;
            var10 = 50;
            var10 = var48[var10];
            var32 = var32.bind(var5)(var10);
            var10 = {};
            var34 = var27.heroLinearGradientOverlay;
            var10['style'] = var34;
            var43 = _closure1_slot0;
            var34 = 51;
            var49 = var48[var34];
            var49 = var43.bind(var5)(var49);
            var49 = var49.VerticalGradient;
            var49 = var49.START;
            var10['start'] = var49;
            var34 = var48[var34];
            var34 = var43.bind(var5)(var34);
            var34 = var34.VerticalGradient;
            var34 = var34.END;
            var10['end'] = var34;
            var34 = new Array(3);
            var34[0] = var37;
            var34[1] = var36;
            var34[2] = var35;
            var10['colors'] = var34;
            var10 = var33.bind(var5)(var32, var10);
            var29[1] = var10;
            var10 = var1.preview;
            if(!var10) { _fun0006_ip = 131; continue _fun0006 }
case 132:
            var34 = _closure1_slot12;
            var33 = _closure1_slot7;
            var32 = {};
            var35 = var27.previewBadge;
            var32['style'] = var35;
            var35 = 'text';
            var32['accessibilityRole'] = var35;
            var49 = _closure1_slot0;
            var37 = _closure1_slot2;
            var35 = 52;
            var35 = var37[var35];
            var35 = var49.bind(var5)(var35);
            var36 = var35.Text;
            var35 = {'variant': 'eyebrow', 'color': 'always-white'};
            var43 = var37[var22];
            var43 = var49.bind(var5)(var43);
            var48 = var43.intl;
            var43 = var48.string;
            var37 = var37[var22];
            var37 = var49.bind(var5)(var37);
            var37 = var37.t;
            var37 = var37.SKNnqq;
            var37 = var43.bind(var48)(var37);
            var35['children'] = var37;
            var35 = var34.bind(var5)(var36, var35);
            var32['children'] = var35;
            var10 = var34.bind(var5)(var33, var32);
case 131:
            var29[2] = var10;
            var34 = _closure1_slot14;
            var33 = _closure1_slot7;
            var32 = {};
            var10 = var27.heroFooterContainer;
            var32['style'] = var10;
            var35 = {};
            var10 = var27.heroFooterLeftContainer;
            var35['style'] = var10;
            var53 = _closure1_slot12;
            var37 = _closure1_slot1;
            var36 = _closure1_slot2;
            var10 = 53;
            var10 = var36[var10];
            var37 = var37.bind(var5)(var10);
            var10 = {};
            var10['assetUrl'] = var42;
            var10['onError'] = var39;
            var10 = var53.bind(var5)(var37, var10);
            var48 = new Array(2);
            var48[0] = var10;
            var37 = _closure1_slot0;
            var10 = 54;
            var39 = var36[var10];
            var39 = var37.bind(var5)(var39);
            var51 = var39.Stack;
            var49 = {'direction': 'horizontal', 'align': 'center', 'spacing': 4};
            var42 = 52;
            var36 = var36[var42];
            var36 = var37.bind(var5)(var36);
            var52 = var36.Text;
            var39 = {'variant': 'text-xs/medium', 'color': null, 'accessibilityRole': 'text'};
            var43 = 'always-white';
            var36 = var43;
            if(!var44) { _fun0006_ip = 133; continue _fun0006 }
case 134:
            var36 = 'text-muted';
case 133:
            var39['color'] = var36;
            var37 = _closure1_slot0;
            var36 = _closure1_slot2;
            var54 = var36[var22];
            var54 = var37.bind(var5)(var54);
            var56 = var54.intl;
            var55 = var56.string;
            var54 = var36[var22];
            var54 = var37.bind(var5)(var54);
            var54 = var54.t;
            var54 = var54.VAbKhK;
            var54 = var55.bind(var56)(var54);
            var39['children'] = var54;
            var39 = var53.bind(var5)(var52, var39);
            var52 = new Array(3);
            var52[0] = var39;
            var39 = _closure1_slot12;
            var54 = _closure1_slot6;
            var53 = {};
            var56 = _closure1_slot1;
            var55 = 55;
            var55 = var36[var55];
            var55 = var56.bind(var5)(var55);
            var53['source'] = var55;
            var55 = {'height': 16, 'width': 16};
            var53['style'] = var55;
            var53 = var39.bind(var5)(var54, var53);
            var52[1] = var53;
            var53 = var36[var42];
            var53 = var37.bind(var5)(var53);
            var54 = var53.Text;
            var53 = {'variant': 'text-xs/medium', 'color': 'always-white', 'accessibilityRole': 'text'};
            var55 = var1.config;
            var55 = var55.messages;
            var55 = var55.gamePublisher;
            var53['children'] = var55;
            var53 = var39.bind(var5)(var54, var53);
            var52[2] = var53;
            var49['children'] = var52;
            var49 = var34.bind(var5)(var51, var49);
            var48[1] = var49;
            var35['children'] = var48;
            var48 = var34.bind(var5)(var33, var35);
            var35 = new Array(2);
            var35[0] = var48;
            var36 = var36[var42];
            var36 = var37.bind(var5)(var36);
            var37 = var36.Text;
            var36 = {'variant': 'text-xs/medium', 'color': null, 'accessibilityRole': 'text'};
            if(!var44) { _fun0006_ip = 135; continue _fun0006 }
case 136:
            var43 = 'text-default';
case 135:
            var36['color'] = var43;
            var44 = _closure1_slot0;
            var43 = _closure1_slot2;
            var48 = var43[var22];
            var48 = var44.bind(var5)(var48);
            var49 = var48.intl;
            var48 = var49.format;
            var43 = var43[var22];
            var43 = var44.bind(var5)(var43);
            var43 = var43.t;
            var44 = var43["7D8r4F"];
            var43 = {};
            var43['expiryDate'] = var50;
            var43 = var48.bind(var49)(var44, var43);
            var36['children'] = var43;
            var36 = var39.bind(var5)(var37, var36);
            var35[1] = var36;
            var32['children'] = var35;
            var32 = var34.bind(var5)(var33, var32);
            var29[3] = var32;
            var9['children'] = var29;
            var11 = var12.bind(var5)(var11, var9);
            var9 = new Array(3);
            var9[0] = var11;
            var32 = _closure1_slot12;
            var29 = _closure1_slot7;
            var12 = {};
            var11 = var27.detailsWrapper;
            var12['style'] = var11;
            var34 = _closure1_slot14;
            var33 = {};
            var11 = var27.detailsContainer;
            var33['style'] = var11;
            var11 = {};
            var35 = var27.rewardImgContainer;
            var11['style'] = var35;
            var37 = _closure1_slot12;
            var36 = _closure1_slot1;
            var39 = _closure1_slot2;
            if(var28) { _fun0006_ip = 137; continue _fun0006 }
case 138:
            var28 = 57;
            var28 = var39[var28];
            var35 = var36.bind(var5)(var28);
            var28 = {'quest': null, 'height': 64, 'width': 64};
            var28['quest'] = var1;
            var28 = var37.bind(var5)(var35, var28);
            _fun0006_ip = 139; continue _fun0006;
case 137:
            var35 = 56;
            var35 = var39[var35];
            var36 = var36.bind(var5)(var35);
            var35 = {};
            var35['quest'] = var1;
            var35['progress'] = var38;
            var38 = 'sm';
            var35['size'] = var38;
            var28 = var37.bind(var5)(var36, var35);
case 139:
            var11['children'] = var28;
            var11 = var32.bind(var5)(var29, var11);
            var35 = new Array(2);
            var35[0] = var11;
            var38 = _closure1_slot14;
            var37 = _closure1_slot7;
            var36 = {};
            var11 = var27.detailsTextContainer;
            var36['style'] = var11;
            var44 = _closure1_slot12;
            var43 = _closure1_slot0;
            var28 = _closure1_slot2;
            var11 = var28[var42];
            var11 = var43.bind(var5)(var11);
            var39 = var11.Text;
            var11 = {'variant': 'eyebrow', 'color': 'text-brand', 'style': null, 'accessibilityRole': 'text'};
            var48 = var27.questName;
            var11['style'] = var48;
            var11['children'] = var40;
            var11 = var44.bind(var5)(var39, var11);
            var39 = new Array(2);
            var39[0] = var11;
            var40 = {};
            var11 = var27.bodyContainer;
            var40['style'] = var11;
            var11 = {};
            var48 = var27.subtitleRow;
            var11['style'] = var48;
            var28 = var28[var42];
            var28 = var43.bind(var5)(var28);
            var43 = var28.Text;
            var28 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary', 'accessibilityRole': 'text'};
            var28['children'] = var46;
            var43 = var44.bind(var5)(var43, var28);
            var28 = new Array(2);
            var28[0] = var43;
            if(!var41) { _fun0006_ip = 140; continue _fun0006 }
case 141:
            var46 = _closure1_slot12;
            var44 = _closure1_slot0;
            var48 = _closure1_slot2;
            var43 = 58;
            var43 = var48[var43];
            var43 = var44.bind(var5)(var43);
            var44 = var43.QuestOrbMultiplierPerkPill;
            var43 = {};
            var48 = var1.config;
            var48 = var48.id;
            var43['questId'] = var48;
            var43['canUseQuestOrbMultiplier'] = var47;
            var41 = var46.bind(var5)(var44, var43);
case 140:
            var28[1] = var41;
            var11['children'] = var28;
            var11 = var38.bind(var5)(var37, var11);
            var41 = new Array(2);
            var41[0] = var11;
            var44 = _closure1_slot12;
            var11 = _closure1_slot0;
            var28 = _closure1_slot2;
            var42 = var28[var42];
            var42 = var11.bind(var5)(var42);
            var43 = var42.Text;
            var42 = {'variant': 'text-sm/medium', 'color': 'text-muted', 'accessibilityRole': 'text'};
            var42['children'] = var45;
            var42 = var44.bind(var5)(var43, var42);
            var41[1] = var42;
            var40['children'] = var41;
            var40 = var38.bind(var5)(var37, var40);
            var39[1] = var40;
            var36['children'] = var39;
            var36 = var38.bind(var5)(var37, var36);
            var35[1] = var36;
            var33['children'] = var35;
            var33 = var34.bind(var5)(var29, var33);
            var12['children'] = var33;
            var12 = var32.bind(var5)(var29, var12);
            var9[1] = var12;
            var12 = _closure1_slot14;
            var10 = var28[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Stack;
            var10 = {'direction': 'horizontal', 'align': 'center'};
            var29 = _closure1_slot1;
            var28 = var28[var30];
            var28 = var29.bind(var5)(var28);
            var28 = var28.spacing;
            var28 = var28.PX_8;
            var10['spacing'] = var28;
            var27 = var27.buttonContainers;
            var10['style'] = var27;
            if(!(var24 != var23)) { _fun0006_ip = 142; continue _fun0006 }
case 143:
            if(var20) { _fun0006_ip = 142; continue _fun0006 }
case 144:
            if(var14) { _fun0006_ip = 142; continue _fun0006 }
case 145:
            if(var13) { _fun0006_ip = 142; continue _fun0006 }
case 146:
            var23 = _closure1_slot14;
            var20 = _closure1_slot13;
            var13 = {};
            var29 = _closure1_slot12;
            var33 = _closure1_slot0;
            var30 = _closure1_slot2;
            var27 = 59;
            var24 = var30[var27];
            var24 = var33.bind(var5)(var24);
            var28 = var24.Button;
            var24 = {'grow': true, 'onPress': null, 'variant': 'secondary', 'disabled': true};
            var32 = _closure1_slot11;
            var24['onPress'] = var32;
            var32 = var30[var22];
            var32 = var33.bind(var5)(var32);
            var35 = var32.intl;
            var34 = var35.string;
            var32 = var30[var22];
            var32 = var33.bind(var5)(var32);
            var32 = var32.t;
            var32 = var32.V293qn;
            var32 = var34.bind(var35)(var32);
            var24['text'] = var32;
            var28 = var29.bind(var5)(var28, var24);
            var24 = new Array(2);
            var24[0] = var28;
            var27 = var30[var27];
            var27 = var33.bind(var5)(var27);
            var28 = var27.Button;
            var27 = {};
            var31 = function onPress() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 35;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 37;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 60;
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
            var31 = var33.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var30[var22];
            var30 = var33.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.vY9GgG;
            var30 = var31.bind(var32)(var30);
            var27['text'] = var30;
            var27 = var29.bind(var5)(var28, var27);
            var24[1] = var27;
            var13['children'] = var24;
            var20 = var23.bind(var5)(var20, var13);
            _fun0006_ip = 147; continue _fun0006;
case 142:
            var24 = _closure1_slot12;
            var23 = _closure1_slot0;
            var27 = _closure1_slot2;
            var13 = 59;
            var13 = var27[var13];
            var13 = var23.bind(var5)(var13);
            var23 = var13.Button;
            var13 = {};
            var13['grow'] = var26;
            var59 = var13;
            var58 = var25;
            var25 = copyDataProperties(var59, var58);
            var20 = var24.bind(var5)(var23, var13);
case 147:
            var13 = new Array(3);
            var13[0] = var20;
            if(!var14) { _fun0006_ip = 148; continue _fun0006 }
case 149:
            var14 = var16;
case 148:
            if(!var14) { _fun0006_ip = 150; continue _fun0006 }
case 151:
            var14 = var15;
case 150:
            if(!var14) { _fun0006_ip = 152; continue _fun0006 }
case 153:
            var20 = _closure1_slot12;
            var26 = _closure1_slot0;
            var24 = _closure1_slot2;
            var15 = 61;
            var15 = var24[var15];
            var15 = var26.bind(var5)(var15);
            var16 = var15.IconButton;
            var15 = {};
            var23 = var24[var22];
            var23 = var26.bind(var5)(var23);
            var25 = var23.intl;
            var23 = var25.string;
            var22 = var24[var22];
            var22 = var26.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.YsCuyF;
            var22 = var23.bind(var25)(var22);
            var15['accessibilityLabel'] = var22;
            var23 = _closure1_slot1;
            var22 = 62;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var15['icon'] = var22;
            var15['onPress'] = var21;
            var21 = 'secondary';
            var15['variant'] = var21;
            var14 = var20.bind(var5)(var16, var15);
case 152:
            var13[1] = var14;
            var16 = _closure1_slot12;
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = 63;
            var14 = var20[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['quest'] = var1;
            var19 = !var19;
            var14['showShareLink'] = var19;
            var18 = _closure1_slot10;
            var18 = var18.QUESTS_CARD;
            var14['location'] = var18;
            var14['sourceQuestContent'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var13[2] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var1.id;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var2 = var7.bind(var8)(var2);
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