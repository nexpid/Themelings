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
    var8 = var8.spacing;
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
    var14 = {'display': 'flex', 'flexDirection': 'column'};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_4;
    var14['gap'] = var18;
    var8['bodyContainer'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center', 'rowGap': null, 'columnGap': null, 'flexWrap': 'wrap'};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_4;
    var14['rowGap'] = var18;
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_8;
    var14['columnGap'] = var18;
    var8['subtitleRow'] = var14;
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
            var2 = arg1;
            var10 = var2.containerPadding;
            var1 = var2.onLayout;
            var _closure2_slot0 = var1;
            var1 = var2.quest;
            var _closure2_slot1 = var1;
            var42 = var2.questContent;
            var5 = undefined;
            if(!(var5 === var42)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.QuestContent;
            var42 = var3.QUEST_HOME_MOBILE;
case 10:
            var _closure2_slot2 = var42;
            var3 = var2.questContentPosition;
            var _closure2_slot3 = var3;
            var17 = var2.sourceQuestContent;
            var _closure2_slot4 = var17;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 14;
            var4 = var2[var4];
            var7 = var3.bind(var5)(var4);
            var6 = var7.getQuestLogger;
            var4 = {};
            var4['quest'] = var1;
            var8 = _closure1_slot10;
            var8 = var8.QUEST_HOME_MOBILE;
            var4['location'] = var8;
            var4 = var6.bind(var7)(var4);
            var _closure2_slot5 = var4;
            var4 = 15;
            var4 = var2[var4];
            var6 = var3.bind(var5)(var4);
            var4 = var6.useTrackQuestContentClickedWithImpression;
            var4 = var4.bind(var6)();
            var _closure2_slot6 = var4;
            var24 = 16;
            var4 = var2[var24];
            var6 = var3.bind(var5)(var4);
            var4 = var6.useQuestTaskDetails;
            var4 = var4.bind(var6)(var1);
            var _closure2_slot7 = var4;
            var2 = var2[var24];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useQuestCompletionDetails;
            var2 = var2.bind(var3)(var1);
            var40 = var2.completedRatio;
            var3 = var1.userStatus;
            var44 = null;
            var4 = var44 == var3;
            var2 = undefined;
            if(var4) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var2 = var3.enrolledAt;
case 12:
            var36 = var44 != var2;
            var2 = _closure1_slot16;
            var16 = var2.bind(var5)();
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 17;
            var2 = var3[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var4 = var2.width;
            var2 = _closure1_slot15;
            var8 = 2;
            var2 = var8 * var2;
            var2 = var4 - var2;
            var _closure2_slot8 = var2;
            var4 = 0.2803030303030303;
            var50 = var4 * var2;
            var _closure2_slot9 = var50;
            var9 = _closure1_slot5;
            var6 = var9.useMemo;
            var4 = new Array(3);
            var4[0] = var1;
            var4[1] = var2;
            var4[2] = var50;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                    if(var1) { _fun0005_ip = 14; continue _fun0005 }
case 15:
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
                    _fun0005_ip = 16; continue _fun0005;
case 14:
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
                    if(!(var5 == var4)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var4 = var3.url;
case 17:
                    var3 = 'url';
                    var2[2] = var4;
                    var1 = var2;
case 16:
                    return var1;
                }
            };
            var53 = var6.bind(var9)(var2, var4);
            var4 = _closure1_slot0;
            var7 = 19;
            var2 = var3[var7];
            var6 = var4.bind(var5)(var2);
            var2 = var6.useQuestGameLogotypeAssetUrl;
            var43 = var2.bind(var6)(var1);
            var2 = _closure1_slot17;
            var2 = var2.bind(var5)();
            var37 = var2.gradientStart;
            var34 = var2.gradientMid;
            var33 = var2.gradientEnd;
            var2 = var9.useState;
            var6 = var2.bind(var9)(var44);
            var2 = _closure1_slot4;
            var8 = var2.bind(var5)(var6, var8);
            var2 = 0;
            var2 = var8[var2];
            var _closure2_slot10 = var2;
            var6 = 1;
            var6 = var8[var6];
            var _closure2_slot11 = var6;
            var11 = var9.useCallback;
            var8 = function() {
                var3 = _closure2_slot11;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = new Array(0);
            var39 = var11.bind(var9)(var8, var6);
            var8 = var9.useEffect;
            var6 = new Array(3);
            var6[0] = var2;
            var2 = var1.id;
            var6[1] = var2;
            var6[2] = var42;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var1 = false;
                    if(!(var1 === var2)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 20;
                    var1 = var10[var1];
                    var9 = undefined;
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.increment;
                    var1 = {};
                    var8 = _closure1_slot0;
                    var4 = 21;
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
                    var7 = 22;
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
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var2, var6);
            var13 = 23;
            var2 = var3[var13];
            var9 = var4.bind(var5)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var25 = var8.bind(var9)(var6, var2);
            var11 = 24;
            var2 = var3[var11];
            var8 = var4.bind(var5)(var2);
            var6 = var8.getDefaultRewardNameWithArticle;
            var2 = var1.config;
            var2 = var6.bind(var8)(var2, var25);
            var _closure2_slot12 = var2;
            var6 = var3[var13];
            var12 = var4.bind(var5)(var6);
            var9 = var12.useStateFromStoresObject;
            var6 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
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
            var6 = var9.bind(var12)(var8, var6);
            var8 = var6.isFetchingRewardCode;
            var _closure2_slot13 = var8;
            var8 = var6.isClaimingReward;
            var _closure2_slot14 = var8;
            var8 = var6.isEnrolling;
            var _closure2_slot15 = var8;
            var6 = var6.questEnrollmentBlockedUntil;
            var _closure2_slot16 = var6;
            var3 = var3[var24];
            var9 = var4.bind(var5)(var3);
            var8 = var9.useQuestFormattedDate;
            var3 = var1.userStatus;
            var12 = var44 == var3;
            var4 = undefined;
            if(var12) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var4 = var3.completedAt;
case 21:
            var3 = {'year': 'numeric', 'month': 'long', 'day': 'numeric'};
            var21 = var8.bind(var9)(var4, var3);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 25;
            var8 = var3[var8];
            var9 = var4.bind(var5)(var8);
            var8 = var9.hasWatchVideoTasks;
            var23 = var8.bind(var9)(var1);
            var _closure2_slot17 = var23;
            var3 = var3[var7];
            var8 = var4.bind(var5)(var3);
            var4 = var8.useHasWatchVideoOnMobileTasks;
            var3 = var1.config;
            var20 = var4.bind(var8)(var3);
            var _closure2_slot18 = var20;
            var4 = var1.userStatus;
            var8 = var44 == var4;
            var3 = undefined;
            if(var8) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var3 = var4.enrolledAt;
case 23:
            var4 = var44 != var3;
            var _closure2_slot19 = var4;
            var8 = var1.userStatus;
            var9 = var44 == var8;
            var3 = undefined;
            if(var9) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var3 = var8.completedAt;
case 25:
            var14 = var44 != var3;
            var _closure2_slot20 = var14;
            var8 = var1.userStatus;
            var9 = var44 == var8;
            var3 = undefined;
            if(var9) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var3 = var8.claimedAt;
case 27:
            var3 = var44 != var3;
            var _closure2_slot21 = var3;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 26;
            var15 = var12[var8];
            var19 = var9.bind(var5)(var15);
            var15 = var19.isQuestExpired;
            var19 = var15.bind(var19)(var1);
            var _closure2_slot22 = var19;
            var8 = var12[var8];
            var15 = var9.bind(var5)(var8);
            var8 = var15.getIsQuestExpiredButWithinThirtyDayLookback;
            var8 = var8.bind(var15)(var1);
            var _closure2_slot23 = var8;
            var35 = 27;
            var8 = var12[var35];
            var22 = var9.bind(var5)(var8);
            var15 = var22.getDefaultReward;
            var8 = var1.config;
            var8 = var15.bind(var22)(var8);
            var15 = var8.skuId;
            var22 = _closure1_slot1;
            var8 = 28;
            var8 = var12[var8];
            var8 = var22.bind(var5)(var8);
            var26 = var8.bind(var5)();
            var8 = 11;
            var8 = var12[var8];
            var22 = var9.bind(var5)(var8);
            var8 = var22.isThemeDark;
            var48 = var8.bind(var22)(var26);
            var8 = var12[var11];
            var26 = var9.bind(var5)(var8);
            var22 = var26.hasCollectiblesQuestReward;
            var8 = var1.config;
            var22 = var22.bind(var26)(var8);
            var8 = 29;
            var8 = var12[var8];
            var12 = var9.bind(var5)(var8);
            var9 = var12.useFetchCollectiblesProduct;
            var8 = null;
            if(!var22) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var8 = null;
            if(!var14) { _fun0004_ip = 29; continue _fun0004 }
case 31:
            var8 = var15;
case 29:
            var8 = var9.bind(var12)(var8);
            var9 = var8.product;
            var _closure2_slot24 = var9;
            var8 = var8.isFetching;
            var _closure2_slot25 = var8;
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = var8[var13];
            var27 = var12.bind(var5)(var9);
            var26 = var27.useStateFromStores;
            var9 = _closure1_slot8;
            var22 = new Array(1);
            var22[0] = var9;
            var15 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var2 = var3.hasVerifiedEmailOrPhone;
                    var1 = var2.bind(var3)();
case 32:
                    return var1;
                }
            };
            var15 = var26.bind(var27)(var22, var15);
            var _closure2_slot26 = var15;
            var13 = var8[var13];
            var22 = var12.bind(var5)(var13);
            var15 = var22.useStateFromStores;
            var13 = new Array(1);
            var13[0] = var9;
            var9 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0008_ip = 34; continue _fun0008 }
case 33:
                    var1 = var2.verified;
case 34:
                    return var1;
                }
            };
            var9 = var15.bind(var22)(var13, var9);
            var _closure2_slot27 = var9;
            var7 = var8[var7];
            var9 = var12.bind(var5)(var7);
            var7 = var9.useMobileActivityQuest;
            var7 = var7.bind(var9)(var1);
            var15 = var7.isMobileActivityQuest;
            var _closure2_slot28 = var15;
            var29 = var7.questApplication;
            var7 = var7.launchMobileActivity;
            var _closure2_slot29 = var7;
            var9 = 30;
            var13 = var8[var9];
            var27 = var12.bind(var5)(var13);
            var26 = var27.useToken;
            var13 = _closure1_slot1;
            var28 = 9;
            var22 = var8[var28];
            var22 = var13.bind(var5)(var22);
            var22 = var22.colors;
            var22 = var22.BACKGROUND_BASE_LOWER;
            var22 = var26.bind(var27)(var22);
            var _closure2_slot30 = var22;
            var22 = var8[var9];
            var27 = var12.bind(var5)(var22);
            var26 = var27.useToken;
            var22 = var8[var28];
            var22 = var13.bind(var5)(var22);
            var22 = var22.colors;
            var22 = var22.BACKGROUND_BASE_LOW;
            var22 = var26.bind(var27)(var22);
            var _closure2_slot31 = var22;
            var9 = var8[var9];
            var12 = var12.bind(var5)(var9);
            var9 = var12.useToken;
            var8 = var8[var28];
            var8 = var13.bind(var5)(var8);
            var8 = var8.colors;
            var8 = var8.BACKGROUND_BASE_LOWEST;
            var8 = var9.bind(var12)(var8);
            var _closure2_slot32 = var8;
            var13 = var44 != var6;
            if(!var13) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var13 = !var4;
case 35:
            if(!var13) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var13 = !var14;
case 37:
            if(!var13) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var13 = !var3;
case 39:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = var9[var24];
            var22 = var12.bind(var5)(var4);
            var8 = var22.useQuestFormattedDate;
            var4 = var1.config;
            var6 = var4.expiresAt;
            var4 = {'month': 'numeric', 'day': 'numeric'};
            var54 = var8.bind(var22)(var6, var4);
            var _closure2_slot33 = var54;
            var4 = function trackClick(arg1) {
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
            var _closure2_slot34 = var4;
            var4 = 31;
            var4 = var9[var4];
            var6 = var12.bind(var5)(var4);
            var4 = var6.useQuestImpressionId;
            var6 = var4.bind(var6)();
            var _closure2_slot35 = var6;
            var8 = 32;
            var4 = var9[var8];
            var4 = var12.bind(var5)(var4);
            var26 = var4.MobileQuestExternalLinkExperiment;
            var22 = var26.useConfig;
            var4 = {};
            var27 = _closure1_slot10;
            var27 = var27.QUEST_HOME_MOBILE;
            var4['location'] = var27;
            var4 = var22.bind(var26)(var4);
            var4 = var4.variant;
            var _closure2_slot36 = var4;
            var27 = _closure1_slot5;
            var30 = var27.useCallback;
            var26 = new Array(4);
            var26[0] = var1;
            var26[1] = var42;
            var26[2] = var6;
            var26[3] = var17;
            var22 = function() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 33;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var2);
                var4 = var5.openGameLinkDirectly;
                var3 = _closure2_slot1;
                var2 = {};
                var7 = _closure2_slot2;
                var2['content'] = var7;
                var7 = 22;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.OPEN_GAME_LINK;
                var2['ctaContent'] = var7;
                var7 = _closure2_slot35;
                var2['impressionId'] = var7;
                var6 = _closure2_slot4;
                var2['sourceQuestContent'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var32 = var30.bind(var27)(var22, var26);
            var26 = var27.useCallback;
            var22 = new Array(4);
            var22[0] = var1;
            var22[1] = var42;
            var22[2] = var6;
            var22[3] = var17;
            var6 = function() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 33;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var2);
                var4 = var5.openGameLinkDirectly;
                var3 = _closure2_slot1;
                var2 = {};
                var7 = _closure2_slot2;
                var2['content'] = var7;
                var7 = 22;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.LEARN_MORE;
                var2['ctaContent'] = var7;
                var7 = _closure2_slot35;
                var2['impressionId'] = var7;
                var6 = _closure2_slot4;
                var2['sourceQuestContent'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var47 = var26.bind(var27)(var6, var22);
            var6 = function showQuestBottomSheet() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 34;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 36;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 35;
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
            var _closure2_slot37 = var6;
            var6 = 37;
            var22 = var9[var6];
            var27 = var12.bind(var5)(var22);
            var26 = var27.usePrimaryCtaCopy;
            var22 = {};
            var22['quest'] = var1;
            var22['application'] = var29;
            var30 = true;
            var22['shortText'] = var30;
            var22['mobileExternalLinkVariant'] = var4;
            var22 = var26.bind(var27)(var22);
            var _closure2_slot38 = var22;
            var22 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot24;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                    var2 = _closure2_slot24;
                    var1 = {};
                    var7 = var2.styles;
                    var9 = var6 == var7;
                    var8 = undefined;
                    var5 = undefined;
                    if(var9) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                    var5 = var7.buttonColors;
case 43:
                    if(!(var6 == var5)) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                    var5 = new Array(0);
case 45:
                    var1['buttonColors'] = var5;
                    var5 = _closure2_slot24;
                    var7 = var5.styles;
                    var9 = var6 == var7;
                    var5 = undefined;
                    if(var9) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                    var5 = var7.confettiColors;
case 47:
                    if(!(var6 == var5)) { _fun0009_ip = 49; continue _fun0009 }
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
                    if(var1) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                    var1 = _closure2_slot20;
                    if(!var1) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                    var1 = _closure2_slot22;
                    if(!var1) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var1 = _closure2_slot23;
                    if(var1) { _fun0009_ip = 55; continue _fun0009 }
case 53:
                    var1 = _closure2_slot22;
                    if(var1) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var1 = _closure2_slot19;
                    if(!var1) { _fun0009_ip = 13; continue _fun0009 }
case 59:
                    var1 = _closure2_slot17;
                    if(var1) { _fun0009_ip = 60; continue _fun0009 }
case 13:
                    var1 = _closure2_slot19;
                    if(!var1) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var1 = _closure2_slot28;
                    if(var1) { _fun0009_ip = 63; continue _fun0009 }
case 61:
                    var1 = _closure2_slot19;
                    if(!var1) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                    var1 = _closure2_slot17;
                    if(var1) { _fun0009_ip = 64; continue _fun0009 }
case 66:
                    var1 = _closure2_slot28;
                    if(var1) { _fun0009_ip = 64; continue _fun0009 }
case 67:
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
                        var1 = 22;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.QuestContentCTA;
                        var3 = var3.VIEW_REQUIREMENTS;
                        var3 = var4.bind(var1)(var3);
                        var2 = _closure2_slot37;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var1['onPress'] = var2;
                    _fun0009_ip = 68; continue _fun0009;
case 64:
                    var2 = {};
                    var5 = _closure2_slot38;
                    var2['text'] = var5;
                    var5 = false;
                    var2['disabled'] = var5;
                    var5 = _closure2_slot15;
                    var2['loading'] = var5;
                    var6 = _closure2_slot17;
                    var7 = undefined;
                    var5 = undefined;
                    if(!var6) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 41;
                    var6 = var9[var6];
                    var10 = var8.bind(var7)(var6);
                    var9 = var10.getMobileVideoQuestWatchCtaAccessibilityLabel;
                    var8 = _closure2_slot7;
                    var6 = _closure2_slot36;
                    var5 = var9.bind(var10)(var8, var6);
case 69:
                    var2['accessibilityLabel'] = var5;
                    var6 = _closure2_slot28;
                    var5 = undefined;
                    if(!var6) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 40;
                    var6 = var9[var6];
                    var9 = var8.bind(var7)(var6);
                    var8 = var9.getPrimaryCtaIcon;
                    var6 = _closure2_slot1;
                    var5 = var8.bind(var9)(var6);
case 71:
                    var2['icon'] = var5;
                    var6 = _closure1_slot3;
                    var5 = function* () {
                        var1 = function* anon_0_() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0010_ip = 73; continue _fun0010 }
case 74:
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
                                if(var9) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                                var9 = _closure2_slot17;
                                if(var9) { _fun0010_ip = 75; continue _fun0010 }
case 77:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var9 = 22;
                                var9 = var11[var9];
                                var9 = var10.bind(var3)(var9);
                                var9 = var9.QuestContentCTA;
                                var9 = var9.ACCEPT_QUEST;
                                _fun0010_ip = 78; continue _fun0010;
case 75:
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var10 = 22;
                                var10 = var12[var10];
                                var10 = var11.bind(var3)(var10);
                                var10 = var10.QuestContentCTA;
                                var9 = var10.START_QUEST;
case 78:
                                var2['questContentCTA'] = var9;
                                var9 = _closure2_slot4;
                                var2['sourceQuestContent'] = var9;
                                var2 = var7.bind(var8)(var5, var2);
                                SaveGenerator(address=189);
case 79:
                                return var2;
case 80:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0010_ip = 81; continue _fun0010 }
case 19:
                                var5 = _closure2_slot17;
                                if(!var5) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                                var5 = _closure2_slot18;
                                if(var5) { _fun0010_ip = 84; continue _fun0010 }
case 82:
                                var5 = _closure2_slot28;
                                if(var5) { _fun0010_ip = 85; continue _fun0010 }
case 86:
                                var5 = _closure2_slot37;
                                var5 = var5.bind(var3)();
                                _fun0010_ip = 87; continue _fun0010;
case 85:
                                var5 = _closure2_slot43;
                                var5 = var5.bind(var3)();
                                _fun0010_ip = 87; continue _fun0010;
case 84:
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
case 87:
                                return var3;
case 81:
                                return var2;
case 73:
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
case 68:
                    _fun0009_ip = 88; continue _fun0009;
case 63:
                    var2 = {};
                    var5 = _closure2_slot38;
                    var2['text'] = var5;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 40;
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
                        var4 = _closure2_slot34;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 22;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.QuestContentCTA;
                        var3 = var3.LAUNCH_MOBILE_ACTIVITY;
                        var3 = var4.bind(var1)(var3);
                        var2 = _closure2_slot43;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2['onPress'] = var5;
                    var1 = var2;
case 88:
                    _fun0009_ip = 89; continue _fun0009;
case 60:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 41;
                    var9 = var8[var5];
                    var6 = undefined;
                    var12 = var7.bind(var6)(var9);
                    var11 = var12.getMobileVideoQuestWatchCtaText;
                    var10 = _closure2_slot7;
                    var9 = _closure2_slot36;
                    var9 = var11.bind(var12)(var10, var9);
                    var2['text'] = var9;
                    var5 = var8[var5];
                    var8 = var7.bind(var6)(var5);
                    var7 = var8.getMobileVideoQuestWatchCtaAccessibilityLabel;
                    var6 = _closure2_slot7;
                    var5 = _closure2_slot36;
                    var5 = var7.bind(var8)(var6, var5);
                    var2['accessibilityLabel'] = var5;
                    var5 = false;
                    var2['disabled'] = var5;
                    var5 = function onPress() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var3 = _closure2_slot5;
                            var2 = var3.log;
                            var1 = 'Navigating to video quest bottom sheet';
                            var1 = var2.bind(var3)(var1);
                            var5 = _closure2_slot34;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 22;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.QuestContentCTA;
                            var3 = var3.WATCH_VIDEO;
                            var3 = var5.bind(var1)(var3);
                            var3 = _closure2_slot18;
                            if(var3) { _fun0011_ip = 9; continue _fun0011 }
case 90:
                            var3 = _closure2_slot37;
                            var3 = var3.bind(var1)();
                            _fun0011_ip = 91; continue _fun0011;
case 9:
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
case 91:
                            return var1;
                        }
                    };
                    var2['onPress'] = var5;
                    var1 = var2;
case 89:
                    _fun0009_ip = 92; continue _fun0009;
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
                    var7 = var6["6p8BZx"];
                    var6 = {};
                    var10 = _closure2_slot33;
                    var6['expiryDate'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['text'] = var6;
                    var6 = _closure2_slot14;
                    if(var6) { _fun0009_ip = 93; continue _fun0009 }
case 94:
                    var6 = _closure2_slot13;
case 93:
                    if(var6) { _fun0009_ip = 95; continue _fun0009 }
case 96:
                    var6 = _closure2_slot25;
case 95:
                    var2['loading'] = var6;
                    var6 = true;
                    var2['disabled'] = var6;
                    var6 = 'secondary';
                    var2['variant'] = var6;
                    var5 = _closure1_slot11;
                    var2['onPress'] = var5;
                    var1 = var2;
case 92:
                    _fun0009_ip = 97; continue _fun0009;
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
                    if(var5) { _fun0009_ip = 98; continue _fun0009 }
case 99:
                    var5 = _closure2_slot13;
case 98:
                    if(var5) { _fun0009_ip = 100; continue _fun0009 }
case 101:
                    var5 = _closure2_slot25;
case 100:
                    var2['loading'] = var5;
                    var5 = function onPress() {
                        var6 = _closure2_slot34;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 22;
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
case 97:
                    _fun0009_ip = 102; continue _fun0009;
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
                        var1 = 22;
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
case 102:
                    return var1;
                }
            };
            var29 = var22.bind(var5)();
            var22 = 39;
            var26 = var9[var22];
            var26 = var12.bind(var5)(var26);
            var41 = var26.intl;
            var38 = var41.formatToPlainString;
            var26 = var9[var22];
            var26 = var12.bind(var5)(var26);
            var26 = var26.t;
            var27 = var26.EAYZAr;
            var26 = {};
            var45 = var1.config;
            var45 = var45.messages;
            var45 = var45.questName;
            var26['questName'] = var45;
            var41 = var38.bind(var41)(var27, var26);
            var26 = var9[var11];
            var38 = var12.bind(var5)(var26);
            var27 = var38.hasVirtualCurrencyReward;
            var26 = var1.config;
            var38 = var27.bind(var38)(var26);
            var _closure2_slot39 = var38;
            var26 = 44;
            var26 = var9[var26];
            var27 = var12.bind(var5)(var26);
            var26 = var27.useQuestOrbMultiplierEligibility;
            var52 = var26.bind(var27)();
            var9 = var9[var24];
            var12 = var12.bind(var5)(var9);
            var9 = var12.useShouldShowBonusOrbsUX;
            var46 = var9.bind(var12)(var1, var52);
            var9 = var46;
            if(!var46) { _fun0004_ip = 103; continue _fun0004 }
case 104:
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var12 = 45;
            var12 = var26[var12];
            var12 = var24.bind(var5)(var12);
            var12 = var12.QuestOrbMultiplierEligibilityType;
            var12 = var12.NITRO;
            var9 = var52 === var12;
case 103:
            var12 = var1.userStatus;
            var24 = var44 == var12;
            var26 = undefined;
            if(var24) { _fun0004_ip = 105; continue _fun0004 }
case 106:
            var26 = var12.orbQuantityClaimed;
case 105:
            if(!(var44 == var26)) { _fun0004_ip = 107; continue _fun0004 }
case 108:
            var24 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var11];
            var27 = var24.bind(var5)(var12);
            var24 = var27.getVirtualCurrencyRewardOrbQuantity;
            var12 = var1.config;
            var26 = var24.bind(var27)(var12);
case 107:
            var _closure2_slot40 = var26;
            var45 = _closure1_slot0;
            var49 = _closure1_slot2;
            var12 = var49[var11];
            var27 = var45.bind(var5)(var12);
            var24 = var27.getQuestOrbRewardQuantityForUser;
            var12 = var1.config;
            var27 = var24.bind(var27)(var12, var25);
            var _closure2_slot41 = var27;
            var11 = var49[var11];
            var24 = var45.bind(var5)(var11);
            var12 = var24.getDefaultRewardName;
            var11 = var1.config;
            var25 = var12.bind(var24)(var11, var25);
            var _closure2_slot42 = var25;
            var6 = var49[var6];
            var24 = var45.bind(var5)(var6);
            var12 = var24.useQuestDescription;
            var6 = _closure1_slot10;
            var64 = var6.QUEST_HOME_MOBILE;
            var6 = 46;
            var6 = var49[var6];
            var6 = var45.bind(var5)(var6);
            var6 = var6.GameProfileSources;
            var62 = var6.QuestHome;
            var67 = var24;
            var66 = var1;
            var65 = var17;
            var63 = var42;
            var6 = var67[var12](var66, var65, var64, var63, var62, var61);
            var24 = _closure1_slot5;
            var12 = var24.useMemo;
            var11 = new Array(6);
            var11[0] = var3;
            var11[1] = var38;
            var11[2] = var27;
            var11[3] = var26;
            var11[4] = var25;
            var11[5] = var2;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 47;
                    var1 = var3[var1];
                    var6 = undefined;
                    var2 = var2.bind(var6)(var1);
                    var1 = var2.isFabric;
                    var8 = var1.bind(var2)();
                    var _closure3_slot0 = var8;
                    if(var8) { _fun0012_ip = 109; continue _fun0012 }
case 110:
                    var11 = {'marginTop': 0, 'marginRight': 3};
                    _fun0012_ip = 9; continue _fun0012;
case 109:
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
                    if(!var1) { _fun0012_ip = 111; continue _fun0012 }
case 112:
                    var1 = _closure2_slot39;
                    if(var1) { _fun0012_ip = 113; continue _fun0012 }
case 111:
                    var1 = _closure2_slot21;
                    if(var1) { _fun0012_ip = 86; continue _fun0012 }
case 114:
                    var1 = _closure2_slot39;
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 39;
                    var4 = var10[var2];
                    var4 = var3.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.format;
                    var2 = var10[var2];
                    var2 = var3.bind(var6)(var2);
                    var2 = var2.t;
                    var3 = var2["0IUT4Y"];
                    var2 = {};
                    if(var1) { _fun0012_ip = 115; continue _fun0012 }
case 116:
                    var1 = function rewardWithArticleHook() {
                        var1 = _closure2_slot12;
                        return var1;
                    };
                    var2['rewardWithArticleHook'] = var1;
                    var1 = var4.bind(var5)(var3, var2);
                    _fun0012_ip = 117; continue _fun0012;
case 115:
                    var9 = function rewardWithArticleHook() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var5 = _closure1_slot13;
                            var1 = _closure1_slot5;
                            var4 = var1.Fragment;
                            var3 = {};
                            var9 = _closure1_slot12;
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 48;
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
                            if(!var7) { _fun0013_ip = 118; continue _fun0013 }
case 119:
                            var10 = _closure1_slot12;
                            var9 = _closure1_slot7;
                            var8 = {};
                            var11 = {};
                            var12 = 2;
                            var11['width'] = var12;
                            var8['style'] = var11;
                            var7 = var10.bind(var2)(var9, var8);
case 118:
                            var1[1] = var7;
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 39;
                            var8 = var10[var6];
                            var8 = var7.bind(var2)(var8);
                            var9 = var8.intl;
                            var8 = var9.format;
                            var6 = var10[var6];
                            var6 = var7.bind(var2)(var6);
                            var6 = var6.t;
                            var7 = var6.nLXlh+;
                            var6 = {};
                            var12 = _closure2_slot41;
                            var10 = null;
                            var12 = var10 != var12;
                            var10 = 0;
                            if(!var12) { _fun0013_ip = 120; continue _fun0013 }
case 121:
                            var10 = _closure2_slot41;
case 120:
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
case 117:
                    _fun0012_ip = 56; continue _fun0012;
case 86:
                    var1 = _closure2_slot42;
case 56:
                    _fun0012_ip = 122; continue _fun0012;
case 113:
                    var5 = _closure1_slot13;
                    var2 = _closure1_slot5;
                    var4 = var2.Fragment;
                    var3 = {};
                    var10 = _closure1_slot12;
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 48;
                    var2 = var13[var2];
                    var2 = var9.bind(var6)(var2);
                    var9 = var2.OrbsIcon;
                    var2 = {'size': 'xs', 'color': 'mobile-text-heading-primary'};
                    var2['style'] = var11;
                    var9 = var10.bind(var6)(var9, var2);
                    var2 = new Array(3);
                    var2[0] = var9;
                    if(!var8) { _fun0012_ip = 123; continue _fun0012 }
case 124:
                    var11 = _closure1_slot12;
                    var10 = _closure1_slot7;
                    var9 = {};
                    var13 = {};
                    var14 = 2;
                    var13['width'] = var14;
                    var9['style'] = var13;
                    var8 = var11.bind(var6)(var10, var9);
case 123:
                    var2[1] = var8;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 39;
                    var9 = var11[var7];
                    var9 = var8.bind(var6)(var9);
                    var10 = var9.intl;
                    var9 = var10.format;
                    var7 = var11[var7];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.t;
                    var8 = var7.nLXlh+;
                    var7 = {};
                    var13 = _closure2_slot40;
                    var11 = null;
                    var13 = var11 != var13;
                    var11 = 0;
                    if(!var13) { _fun0012_ip = 125; continue _fun0012 }
case 126:
                    var11 = _closure2_slot40;
case 125:
                    var7['orbAmount'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var2[2] = var7;
                    var3['children'] = var2;
                    var2 = 'balance';
                    var1 = var5.bind(var6)(var4, var3, var2);
case 122:
                    return var1;
                }
            };
            var51 = var12.bind(var24)(var2, var11);
            var2 = var19;
            if(!var2) { _fun0004_ip = 127; continue _fun0004 }
case 128:
            var2 = var14;
case 127:
            if(!var2) { _fun0004_ip = 129; continue _fun0004 }
case 130:
            var2 = !var3;
case 129:
            var49 = var6;
            if(!var2) { _fun0004_ip = 131; continue _fun0004 }
case 132:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var22];
            var11 = var6.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var2 = var2[var22];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var6 = var2.l1jCM/;
            var2 = {};
            var2['date'] = var21;
            var49 = var11.bind(var12)(var6, var2);
case 131:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var35];
            var11 = var6.bind(var5)(var2);
            var6 = var11.getCtaLink;
            var2 = var1.config;
            var2 = var6.bind(var11)(var2);
            var27 = '';
            var2 = var27 !== var2;
            if(!var2) { _fun0004_ip = 133; continue _fun0004 }
case 134:
            var2 = !var13;
case 133:
            if(!var2) { _fun0004_ip = 135; continue _fun0004 }
case 136:
            var2 = !var19;
case 135:
            if(!var2) { _fun0004_ip = 137; continue _fun0004 }
case 138:
            var2 = !var3;
case 137:
            if(!var2) { _fun0004_ip = 139; continue _fun0004 }
case 140:
            var2 = !var14;
case 139:
            var26 = var2;
            if(!var2) { _fun0004_ip = 141; continue _fun0004 }
case 142:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var6.bind(var5)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T4_SECONDARY_CTA_T1;
            var3 = var4 === var3;
            if(var3) { _fun0004_ip = 143; continue _fun0004 }
case 144:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var11.bind(var5)(var6);
            var6 = var6.MobileQuestExternalLinkVariant;
            var6 = var6.T5_SECONDARY_CTA_T3;
            var3 = var4 === var6;
case 143:
            var26 = var3;
case 141:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var6.bind(var5)(var3);
            var3 = var3.MobileQuestExternalLinkVariant;
            var3 = var3.T6_LEARN_MORE_BIO;
            var42 = var4 === var3;
            if(!var42) { _fun0004_ip = 145; continue _fun0004 }
case 146:
            var42 = var2;
case 145:
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
                var5 = 49;
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
            var25 = var4.bind(var6)(var2, var3);
            var4 = var6.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0014_ip = 147; continue _fun0014 }
case 148:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 40;
                        var2 = var3[var2];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.dismissOverlayScreens;
                        var2 = var2.bind(var4)();
                        var2 = _closure2_slot29;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=57);
case 45:
                        return var2;
case 149:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0014_ip = 150; continue _fun0014 }
case 151:
                        return var3;
case 150:
                        return var2;
case 147:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var5)(var2);
            var2 = new Array(1);
            var2[0] = var7;
            var21 = var4.bind(var6)(var3, var2);
            var _closure2_slot43 = var21;
            var4 = _closure1_slot12;
            var38 = _closure1_slot0;
            var45 = _closure1_slot2;
            var2 = 50;
            var2 = var45[var2];
            var2 = var38.bind(var5)(var2);
            var3 = var2.Card;
            var2 = {};
            var7 = var16.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var8 = _closure1_slot15;
            var8 = var8 - var10;
            var7['marginHorizontal'] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var6 = function onLayout(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0015_ip = 32; continue _fun0015 }
case 152:
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var3 = var1.id;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var1, var3);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onLayout'] = var6;
            var8 = _closure1_slot13;
            var24 = _closure1_slot1;
            var6 = 51;
            var6 = var45[var6];
            var7 = var24.bind(var5)(var6);
            var6 = {};
            var6['visible'] = var9;
            var6['glow'] = var30;
            var11 = _closure1_slot7;
            var9 = {};
            var12 = var16.heroContainer;
            var10 = new Array(2);
            var10[0] = var12;
            var12 = {};
            var12['height'] = var50;
            var10[1] = var12;
            var9['style'] = var10;
            var10 = 52;
            var10 = var45[var10];
            var12 = var24.bind(var5)(var10);
            var10 = {};
            var50 = {};
            var53 = var53.url;
            var50['uri'] = var53;
            var10['source'] = var50;
            var50 = var16.heroImg;
            var10['style'] = var50;
            var10['onError'] = var39;
            var10['accessibilityLabel'] = var27;
            var10 = var4.bind(var5)(var12, var10);
            var12 = new Array(4);
            var12[0] = var10;
            var10 = 53;
            var10 = var45[var10];
            var24 = var24.bind(var5)(var10);
            var10 = {};
            var27 = var16.heroLinearGradientOverlay;
            var10['style'] = var27;
            var27 = 54;
            var50 = var45[var27];
            var50 = var38.bind(var5)(var50);
            var50 = var50.VerticalGradient;
            var50 = var50.START;
            var10['start'] = var50;
            var27 = var45[var27];
            var27 = var38.bind(var5)(var27);
            var27 = var27.VerticalGradient;
            var27 = var27.END;
            var10['end'] = var27;
            var27 = new Array(3);
            var27[0] = var37;
            var27[1] = var34;
            var27[2] = var33;
            var10['colors'] = var27;
            var10 = var4.bind(var5)(var24, var10);
            var12[1] = var10;
            var10 = var1.preview;
            if(!var10) { _fun0004_ip = 153; continue _fun0004 }
case 154:
            var33 = _closure1_slot12;
            var27 = _closure1_slot7;
            var24 = {};
            var34 = var16.previewBadge;
            var24['style'] = var34;
            var53 = _closure1_slot0;
            var38 = _closure1_slot2;
            var34 = 55;
            var34 = var38[var34];
            var34 = var53.bind(var5)(var34);
            var37 = var34.Text;
            var34 = {'variant': 'eyebrow', 'color': 'always-white'};
            var45 = var38[var22];
            var45 = var53.bind(var5)(var45);
            var50 = var45.intl;
            var45 = var50.string;
            var38 = var38[var22];
            var38 = var53.bind(var5)(var38);
            var38 = var38.t;
            var38 = var38.SKNnqq;
            var38 = var45.bind(var50)(var38);
            var34['children'] = var38;
            var34 = var33.bind(var5)(var37, var34);
            var24['children'] = var34;
            var10 = var33.bind(var5)(var27, var24);
case 153:
            var12[2] = var10;
            var33 = _closure1_slot13;
            var27 = _closure1_slot7;
            var24 = {};
            var10 = var16.heroFooterContainer;
            var24['style'] = var10;
            var34 = {};
            var10 = var16.heroFooterLeftContainer;
            var34['style'] = var10;
            var58 = _closure1_slot12;
            var38 = _closure1_slot1;
            var37 = _closure1_slot2;
            var10 = 56;
            var10 = var37[var10];
            var38 = var38.bind(var5)(var10);
            var10 = {};
            var10['assetUrl'] = var43;
            var10['onError'] = var39;
            var10 = var58.bind(var5)(var38, var10);
            var53 = new Array(2);
            var53[0] = var10;
            var38 = _closure1_slot0;
            var10 = 57;
            var39 = var37[var10];
            var39 = var38.bind(var5)(var39);
            var56 = var39.Stack;
            var55 = {'direction': 'horizontal', 'align': 'center', 'spacing': 4};
            var43 = 55;
            var37 = var37[var43];
            var37 = var38.bind(var5)(var37);
            var57 = var37.Text;
            var39 = {};
            var50 = 'text-xs/medium';
            var39['variant'] = var50;
            var45 = 'always-white';
            var37 = var45;
            if(!var48) { _fun0004_ip = 155; continue _fun0004 }
case 156:
            var37 = 'text-muted';
case 155:
            var39['color'] = var37;
            var38 = _closure1_slot0;
            var37 = _closure1_slot2;
            var59 = var37[var22];
            var59 = var38.bind(var5)(var59);
            var61 = var59.intl;
            var60 = var61.string;
            var59 = var37[var22];
            var59 = var38.bind(var5)(var59);
            var59 = var59.t;
            var59 = var59.VAbKhK;
            var59 = var60.bind(var61)(var59);
            var39['children'] = var59;
            var39 = var58.bind(var5)(var57, var39);
            var57 = new Array(3);
            var57[0] = var39;
            var39 = _closure1_slot12;
            var59 = _closure1_slot6;
            var58 = {};
            var61 = _closure1_slot1;
            var60 = 58;
            var60 = var37[var60];
            var60 = var61.bind(var5)(var60);
            var58['source'] = var60;
            var60 = {'height': 16, 'width': 16};
            var58['style'] = var60;
            var58 = var39.bind(var5)(var59, var58);
            var57[1] = var58;
            var58 = var37[var43];
            var58 = var38.bind(var5)(var58);
            var59 = var58.Text;
            var58 = {'variant': 'text-xs/medium', 'color': 'always-white'};
            var60 = var1.config;
            var60 = var60.messages;
            var60 = var60.gamePublisher;
            var58['children'] = var60;
            var58 = var39.bind(var5)(var59, var58);
            var57[2] = var58;
            var55['children'] = var57;
            var55 = var33.bind(var5)(var56, var55);
            var53[1] = var55;
            var34['children'] = var53;
            var53 = var33.bind(var5)(var27, var34);
            var34 = new Array(2);
            var34[0] = var53;
            var37 = var37[var43];
            var37 = var38.bind(var5)(var37);
            var38 = var37.Text;
            var37 = {};
            var37['variant'] = var50;
            if(!var48) { _fun0004_ip = 157; continue _fun0004 }
case 158:
            var45 = 'text-default';
case 157:
            var37['color'] = var45;
            var48 = _closure1_slot0;
            var45 = _closure1_slot2;
            var50 = var45[var22];
            var50 = var48.bind(var5)(var50);
            var53 = var50.intl;
            var50 = var53.format;
            var45 = var45[var22];
            var45 = var48.bind(var5)(var45);
            var45 = var45.t;
            var48 = var45["7D8r4F"];
            var45 = {};
            var45['expiryDate'] = var54;
            var45 = var50.bind(var53)(var48, var45);
            var37['children'] = var45;
            var37 = var39.bind(var5)(var38, var37);
            var34[1] = var37;
            var24['children'] = var34;
            var24 = var33.bind(var5)(var27, var24);
            var12[3] = var24;
            var9['children'] = var12;
            var11 = var8.bind(var5)(var11, var9);
            var9 = new Array(3);
            var9[0] = var11;
            var24 = _closure1_slot12;
            var12 = _closure1_slot7;
            var11 = {};
            var27 = var16.detailsWrapper;
            var11['style'] = var27;
            var33 = _closure1_slot13;
            var27 = {};
            var34 = var16.detailsContainer;
            var27['style'] = var34;
            var34 = {};
            var37 = var16.rewardImgContainer;
            var34['style'] = var37;
            var39 = _closure1_slot12;
            var38 = _closure1_slot1;
            var45 = _closure1_slot2;
            if(var36) { _fun0004_ip = 159; continue _fun0004 }
case 160:
            var36 = 60;
            var36 = var45[var36];
            var37 = var38.bind(var5)(var36);
            var36 = {'quest': null, 'height': 64, 'width': 64};
            var36['quest'] = var1;
            var36 = var39.bind(var5)(var37, var36);
            _fun0004_ip = 161; continue _fun0004;
case 159:
            var37 = 59;
            var37 = var45[var37];
            var38 = var38.bind(var5)(var37);
            var37 = {};
            var37['quest'] = var1;
            var37['progress'] = var40;
            var40 = 'sm';
            var37['size'] = var40;
            var36 = var39.bind(var5)(var38, var37);
case 161:
            var34['children'] = var36;
            var36 = var24.bind(var5)(var12, var34);
            var34 = new Array(2);
            var34[0] = var36;
            var38 = _closure1_slot13;
            var37 = _closure1_slot7;
            var36 = {};
            var39 = var16.detailsTextContainer;
            var36['style'] = var39;
            var50 = _closure1_slot12;
            var48 = _closure1_slot0;
            var45 = _closure1_slot2;
            var39 = var45[var43];
            var39 = var48.bind(var5)(var39);
            var40 = var39.Text;
            var39 = {'variant': 'eyebrow', 'color': 'text-brand', 'style': null, 'accessibilityRole': 'header'};
            var53 = var16.questName;
            var39['style'] = var53;
            var39['children'] = var41;
            var40 = var50.bind(var5)(var40, var39);
            var39 = new Array(2);
            var39[0] = var40;
            var40 = {};
            var41 = var16.bodyContainer;
            var40['style'] = var41;
            var41 = {};
            var53 = var16.subtitleRow;
            var41['style'] = var53;
            var45 = var45[var43];
            var45 = var48.bind(var5)(var45);
            var48 = var45.Text;
            var45 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var45['children'] = var51;
            var48 = var50.bind(var5)(var48, var45);
            var45 = new Array(2);
            var45[0] = var48;
            if(!var46) { _fun0004_ip = 162; continue _fun0004 }
case 163:
            var51 = _closure1_slot12;
            var50 = _closure1_slot0;
            var53 = _closure1_slot2;
            var48 = 61;
            var48 = var53[var48];
            var48 = var50.bind(var5)(var48);
            var50 = var48.QuestOrbMultiplierPerkPill;
            var48 = {};
            var53 = var1.config;
            var53 = var53.id;
            var48['questId'] = var53;
            var48['orbMultiplierEligibility'] = var52;
            var46 = var51.bind(var5)(var50, var48);
case 162:
            var45[1] = var46;
            var41['children'] = var45;
            var45 = var38.bind(var5)(var37, var41);
            var41 = new Array(3);
            var41[0] = var45;
            var44 = var44 != var49;
            if(!var44) { _fun0004_ip = 164; continue _fun0004 }
case 165:
            var48 = _closure1_slot12;
            var46 = _closure1_slot0;
            var45 = _closure1_slot2;
            var45 = var45[var43];
            var45 = var46.bind(var5)(var45);
            var46 = var45.Text;
            var45 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var45['children'] = var49;
            var44 = var48.bind(var5)(var46, var45);
case 164:
            var41[1] = var44;
            if(!var42) { _fun0004_ip = 166; continue _fun0004 }
case 167:
            var45 = _closure1_slot12;
            var49 = _closure1_slot0;
            var46 = _closure1_slot2;
            var43 = var46[var43];
            var43 = var49.bind(var5)(var43);
            var44 = var43.Text;
            var43 = {'variant': 'text-sm/medium', 'color': 'text-brand', 'accessibilityRole': 'link'};
            var43['onPress'] = var47;
            var47 = var46[var22];
            var47 = var49.bind(var5)(var47);
            var48 = var47.intl;
            var47 = var48.string;
            var46 = var46[var22];
            var46 = var49.bind(var5)(var46);
            var46 = var46.t;
            var46 = var46.hvVgAZ;
            var46 = var47.bind(var48)(var46);
            var43['children'] = var46;
            var42 = var45.bind(var5)(var44, var43);
case 166:
            var41[2] = var42;
            var40['children'] = var41;
            var40 = var38.bind(var5)(var37, var40);
            var39[1] = var40;
            var36['children'] = var39;
            var36 = var38.bind(var5)(var37, var36);
            var34[1] = var36;
            var27['children'] = var34;
            var27 = var33.bind(var5)(var12, var27);
            var11['children'] = var27;
            var11 = var24.bind(var5)(var12, var11);
            var9[1] = var11;
            var12 = _closure1_slot13;
            var11 = _closure1_slot0;
            var24 = _closure1_slot2;
            var10 = var24[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Stack;
            var10 = {'direction': 'horizontal', 'align': 'center'};
            var27 = _closure1_slot1;
            var24 = var24[var28];
            var24 = var27.bind(var5)(var24);
            var24 = var24.spacing;
            var24 = var24.PX_8;
            var10['spacing'] = var24;
            var16 = var16.buttonContainers;
            var10['style'] = var16;
            var16 = _closure1_slot14;
            var24 = {};
            if(var13) { _fun0004_ip = 168; continue _fun0004 }
case 169:
            if(!var26) { _fun0004_ip = 170; continue _fun0004 }
case 171:
            var28 = _closure1_slot12;
            var34 = _closure1_slot0;
            var33 = _closure1_slot2;
            var13 = 62;
            var13 = var33[var13];
            var13 = var34.bind(var5)(var13);
            var27 = var13.Button;
            var13 = {'grow': true, 'variant': 'secondary'};
            var33 = var33[var35];
            var34 = var34.bind(var5)(var33);
            var33 = var34.getExternalCtaLabel;
            var33 = var33.bind(var34)(var1);
            var13['text'] = var33;
            var13['onPress'] = var32;
            var26 = var28.bind(var5)(var27, var13);
case 170:
            var13 = new Array(2);
            var13[0] = var26;
            var28 = _closure1_slot12;
            var27 = _closure1_slot0;
            var32 = _closure1_slot2;
            var26 = 62;
            var26 = var32[var26];
            var26 = var27.bind(var5)(var26);
            var27 = var26.Button;
            var26 = {};
            var26['grow'] = var30;
            var66 = var26;
            var65 = var29;
            var29 = copyDataProperties(var66, var65);
            var26 = var28.bind(var5)(var27, var26);
            var13[1] = var26;
            var24['children'] = var13;
            var13 = var24;
            _fun0004_ip = 172; continue _fun0004;
case 168:
            var29 = _closure1_slot12;
            var33 = _closure1_slot0;
            var30 = _closure1_slot2;
            var27 = 62;
            var26 = var30[var27];
            var26 = var33.bind(var5)(var26);
            var28 = var26.Button;
            var26 = {'grow': true, 'onPress': null, 'variant': 'secondary', 'disabled': true};
            var32 = _closure1_slot11;
            var26['onPress'] = var32;
            var32 = var30[var22];
            var32 = var33.bind(var5)(var32);
            var35 = var32.intl;
            var34 = var35.string;
            var32 = var30[var22];
            var32 = var33.bind(var5)(var32);
            var32 = var32.t;
            var32 = var32.V293qn;
            var32 = var34.bind(var35)(var32);
            var26['text'] = var32;
            var28 = var29.bind(var5)(var28, var26);
            var26 = new Array(2);
            var26[0] = var28;
            var27 = var30[var27];
            var27 = var33.bind(var5)(var27);
            var28 = var27.Button;
            var27 = {};
            var31 = function onPress() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 34;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 36;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 63;
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
            var26[1] = var27;
            var24['children'] = var26;
            var13 = var24;
case 172:
            var16 = var12.bind(var5)(var16, var13);
            var13 = new Array(4);
            var13[0] = var16;
            var16 = var14;
            if(!var14) { _fun0004_ip = 173; continue _fun0004 }
case 174:
            var16 = var23;
case 173:
            if(!var16) { _fun0004_ip = 175; continue _fun0004 }
case 176:
            var16 = var20;
case 175:
            if(!var16) { _fun0004_ip = 177; continue _fun0004 }
case 178:
            var24 = _closure1_slot12;
            var30 = _closure1_slot0;
            var28 = _closure1_slot2;
            var20 = 64;
            var20 = var28[var20];
            var20 = var30.bind(var5)(var20);
            var23 = var20.IconButton;
            var20 = {};
            var26 = var28[var22];
            var26 = var30.bind(var5)(var26);
            var29 = var26.intl;
            var27 = var29.string;
            var26 = var28[var22];
            var26 = var30.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.YsCuyF;
            var26 = var27.bind(var29)(var26);
            var20['accessibilityLabel'] = var26;
            var27 = _closure1_slot1;
            var26 = 65;
            var26 = var28[var26];
            var26 = var27.bind(var5)(var26);
            var20['icon'] = var26;
            var20['onPress'] = var25;
            var25 = 'secondary';
            var20['variant'] = var25;
            var16 = var24.bind(var5)(var23, var20);
case 177:
            var13[1] = var16;
            if(!var14) { _fun0004_ip = 179; continue _fun0004 }
case 180:
            var14 = var15;
case 179:
            if(!var14) { _fun0004_ip = 181; continue _fun0004 }
case 182:
            var20 = _closure1_slot12;
            var26 = _closure1_slot0;
            var24 = _closure1_slot2;
            var15 = 64;
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
            var22 = var22.CkUzLd;
            var22 = var23.bind(var25)(var22);
            var15['accessibilityLabel'] = var22;
            var23 = _closure1_slot1;
            var22 = 65;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var15['icon'] = var22;
            var15['onPress'] = var21;
            var21 = 'secondary';
            var15['variant'] = var21;
            var14 = var20.bind(var5)(var16, var15);
case 181:
            var13[2] = var14;
            var16 = _closure1_slot12;
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = 66;
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
            var13[3] = var14;
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
    var2 = var4.bind(var7)(var2);
    var4 = 67;
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