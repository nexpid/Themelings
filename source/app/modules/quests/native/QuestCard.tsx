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
            var26 = var2.questContent;
            var5 = undefined;
            if(!(var5 === var26)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.QuestContent;
            var26 = var3.QUEST_HOME_MOBILE;
case 10:
            var _closure2_slot2 = var26;
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
            var11 = 16;
            var4 = var2[var11];
            var6 = var3.bind(var5)(var4);
            var4 = var6.useQuestTaskDetails;
            var4 = var4.bind(var6)(var1);
            var _closure2_slot7 = var4;
            var2 = var2[var11];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useQuestCompletionDetails;
            var2 = var2.bind(var3)(var1);
            var41 = var2.completedRatio;
            var3 = var1.userStatus;
            var43 = null;
            var4 = var43 == var3;
            var2 = undefined;
            if(var4) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var2 = var3.enrolledAt;
case 12:
            var37 = var43 != var2;
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
            var6 = 2;
            var2 = var6 * var2;
            var2 = var4 - var2;
            var _closure2_slot8 = var2;
            var4 = 0.2803030303030303;
            var49 = var4 * var2;
            var _closure2_slot9 = var49;
            var9 = _closure1_slot5;
            var7 = var9.useMemo;
            var4 = new Array(3);
            var4[0] = var1;
            var4[1] = var2;
            var4[2] = var49;
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
            var52 = var7.bind(var9)(var2, var4);
            var8 = _closure1_slot0;
            var7 = 19;
            var2 = var3[var7];
            var4 = var8.bind(var5)(var2);
            var2 = var4.useQuestGameLogotypeAssetUrl;
            var44 = var2.bind(var4)(var1);
            var2 = _closure1_slot17;
            var2 = var2.bind(var5)();
            var38 = var2.gradientStart;
            var36 = var2.gradientMid;
            var34 = var2.gradientEnd;
            var2 = var9.useState;
            var4 = var2.bind(var9)(var43);
            var2 = _closure1_slot4;
            var6 = var2.bind(var5)(var4, var6);
            var2 = 0;
            var2 = var6[var2];
            var _closure2_slot10 = var2;
            var4 = 1;
            var4 = var6[var4];
            var _closure2_slot11 = var4;
            var12 = var9.useCallback;
            var6 = function() {
                var3 = _closure2_slot11;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = new Array(0);
            var40 = var12.bind(var9)(var6, var4);
            var6 = var9.useEffect;
            var4 = new Array(3);
            var4[0] = var2;
            var2 = var1.id;
            var4[1] = var2;
            var4[2] = var26;
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
            var2 = var6.bind(var9)(var2, var4);
            var21 = 23;
            var2 = var3[var21];
            var9 = var8.bind(var5)(var2);
            var6 = var9.useStateFromStores;
            var2 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var6.bind(var9)(var4, var2);
            var4 = 24;
            var2 = var3[var4];
            var9 = var8.bind(var5)(var2);
            var6 = var9.getDefaultRewardNameWithArticle;
            var2 = var1.config;
            var2 = var6.bind(var9)(var2, var12);
            var _closure2_slot12 = var2;
            var6 = var3[var21];
            var14 = var8.bind(var5)(var6);
            var13 = var14.useStateFromStoresObject;
            var6 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var6;
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
            var6 = var13.bind(var14)(var9, var6);
            var9 = var6.isFetchingRewardCode;
            var _closure2_slot13 = var9;
            var9 = var6.isClaimingReward;
            var _closure2_slot14 = var9;
            var9 = var6.isEnrolling;
            var _closure2_slot15 = var9;
            var6 = var6.questEnrollmentBlockedUntil;
            var _closure2_slot16 = var6;
            var3 = var3[var11];
            var13 = var8.bind(var5)(var3);
            var9 = var13.useQuestFormattedDate;
            var3 = var1.userStatus;
            var14 = var43 == var3;
            var8 = undefined;
            if(var14) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var8 = var3.completedAt;
case 21:
            var3 = {'year': 'numeric', 'month': 'long', 'day': 'numeric'};
            var8 = var9.bind(var13)(var8, var3);
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var13 = 25;
            var13 = var3[var13];
            var14 = var9.bind(var5)(var13);
            var13 = var14.hasWatchVideoTasks;
            var23 = var13.bind(var14)(var1);
            var _closure2_slot17 = var23;
            var3 = var3[var7];
            var13 = var9.bind(var5)(var3);
            var9 = var13.useHasWatchVideoOnMobileTasks;
            var3 = var1.config;
            var20 = var9.bind(var13)(var3);
            var _closure2_slot18 = var20;
            var9 = var1.userStatus;
            var13 = var43 == var9;
            var3 = undefined;
            if(var13) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var3 = var9.enrolledAt;
case 23:
            var3 = var43 != var3;
            var _closure2_slot19 = var3;
            var13 = var1.userStatus;
            var14 = var43 == var13;
            var9 = undefined;
            if(var14) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var9 = var13.completedAt;
case 25:
            var14 = var43 != var9;
            var _closure2_slot20 = var14;
            var13 = var1.userStatus;
            var15 = var43 == var13;
            var9 = undefined;
            if(var15) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var9 = var13.claimedAt;
case 27:
            var13 = var43 != var9;
            var _closure2_slot21 = var13;
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = 26;
            var19 = var22[var9];
            var24 = var15.bind(var5)(var19);
            var19 = var24.isQuestExpired;
            var19 = var19.bind(var24)(var1);
            var _closure2_slot22 = var19;
            var9 = var22[var9];
            var24 = var15.bind(var5)(var9);
            var9 = var24.getIsQuestExpiredButWithinThirtyDayLookback;
            var9 = var9.bind(var24)(var1);
            var _closure2_slot23 = var9;
            var35 = 27;
            var9 = var22[var35];
            var25 = var15.bind(var5)(var9);
            var24 = var25.getDefaultReward;
            var9 = var1.config;
            var9 = var24.bind(var25)(var9);
            var24 = var9.skuId;
            var25 = _closure1_slot1;
            var9 = 28;
            var9 = var22[var9];
            var9 = var25.bind(var5)(var9);
            var27 = var9.bind(var5)();
            var9 = 11;
            var9 = var22[var9];
            var25 = var15.bind(var5)(var9);
            var9 = var25.isThemeDark;
            var46 = var9.bind(var25)(var27);
            var9 = var22[var4];
            var27 = var15.bind(var5)(var9);
            var25 = var27.hasCollectiblesQuestReward;
            var9 = var1.config;
            var25 = var25.bind(var27)(var9);
            var9 = 29;
            var9 = var22[var9];
            var22 = var15.bind(var5)(var9);
            var15 = var22.useFetchCollectiblesProduct;
            var9 = null;
            if(!var25) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var9 = null;
            if(!var14) { _fun0004_ip = 29; continue _fun0004 }
case 31:
            var9 = var24;
case 29:
            var9 = var15.bind(var22)(var9);
            var15 = var9.product;
            var _closure2_slot24 = var15;
            var9 = var9.isFetching;
            var _closure2_slot25 = var9;
            var22 = _closure1_slot0;
            var9 = _closure1_slot2;
            var15 = var9[var21];
            var28 = var22.bind(var5)(var15);
            var27 = var28.useStateFromStores;
            var15 = _closure1_slot8;
            var25 = new Array(1);
            var25[0] = var15;
            var24 = function() {
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
            var24 = var27.bind(var28)(var25, var24);
            var _closure2_slot26 = var24;
            var21 = var9[var21];
            var25 = var22.bind(var5)(var21);
            var24 = var25.useStateFromStores;
            var21 = new Array(1);
            var21[0] = var15;
            var15 = function() {
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
            var15 = var24.bind(var25)(var21, var15);
            var _closure2_slot27 = var15;
            var7 = var9[var7];
            var15 = var22.bind(var5)(var7);
            var7 = var15.useMobileActivityQuest;
            var7 = var7.bind(var15)(var1);
            var15 = var7.isMobileActivityQuest;
            var _closure2_slot28 = var15;
            var25 = var7.questApplication;
            var7 = var7.launchMobileActivity;
            var _closure2_slot29 = var7;
            var21 = 30;
            var24 = var9[var21];
            var29 = var22.bind(var5)(var24);
            var28 = var29.useToken;
            var24 = _closure1_slot1;
            var33 = 9;
            var27 = var9[var33];
            var27 = var24.bind(var5)(var27);
            var27 = var27.colors;
            var27 = var27.BACKGROUND_BASE_LOWER;
            var27 = var28.bind(var29)(var27);
            var _closure2_slot30 = var27;
            var27 = var9[var21];
            var29 = var22.bind(var5)(var27);
            var28 = var29.useToken;
            var27 = var9[var33];
            var27 = var24.bind(var5)(var27);
            var27 = var27.colors;
            var27 = var27.BACKGROUND_BASE_LOW;
            var27 = var28.bind(var29)(var27);
            var _closure2_slot31 = var27;
            var21 = var9[var21];
            var22 = var22.bind(var5)(var21);
            var21 = var22.useToken;
            var9 = var9[var33];
            var9 = var24.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.BACKGROUND_BASE_LOWEST;
            var9 = var21.bind(var22)(var9);
            var _closure2_slot32 = var9;
            var27 = var43 != var6;
            if(!var27) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var27 = !var3;
case 35:
            if(!var27) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var27 = !var14;
case 37:
            if(!var27) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var27 = !var13;
case 39:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = var6[var11];
            var24 = var9.bind(var5)(var3);
            var22 = var24.useQuestFormattedDate;
            var3 = var1.config;
            var21 = var3.expiresAt;
            var3 = {'month': 'numeric', 'day': 'numeric'};
            var53 = var22.bind(var24)(var21, var3);
            var _closure2_slot33 = var53;
            var3 = function trackClick(arg1) {
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
            var _closure2_slot34 = var3;
            var3 = 31;
            var3 = var6[var3];
            var21 = var9.bind(var5)(var3);
            var3 = var21.useQuestImpressionId;
            var3 = var3.bind(var21)();
            var _closure2_slot35 = var3;
            var24 = _closure1_slot5;
            var22 = var24.useCallback;
            var21 = new Array(4);
            var21[0] = var1;
            var21[1] = var26;
            var21[2] = var3;
            var21[3] = var17;
            var3 = function() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 32;
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
            var32 = var22.bind(var24)(var3, var21);
            var3 = function showQuestBottomSheet() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 33;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 35;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 34;
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
            var _closure2_slot36 = var3;
            var3 = 36;
            var21 = var6[var3];
            var24 = var9.bind(var5)(var21);
            var22 = var24.usePrimaryCtaCopy;
            var21 = {};
            var21['quest'] = var1;
            var21['application'] = var25;
            var30 = true;
            var21['shortText'] = var30;
            var21 = var22.bind(var24)(var21);
            var _closure2_slot37 = var21;
            var21 = function() {
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
                    var6 = 37;
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
                    var2 = 38;
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
                        var2 = _closure2_slot36;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var1['onPress'] = var2;
                    _fun0009_ip = 68; continue _fun0009;
case 64:
                    var2 = {};
                    var5 = _closure2_slot37;
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
                    var6 = 40;
                    var6 = var9[var6];
                    var9 = var8.bind(var7)(var6);
                    var8 = var9.getVideoQuestWatchCtaAccessibilityLabel;
                    var6 = _closure2_slot7;
                    var5 = var8.bind(var9)(var6);
case 69:
                    var2['accessibilityLabel'] = var5;
                    var6 = _closure2_slot28;
                    var5 = undefined;
                    if(!var6) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 39;
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
                                var2 = 42;
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
                                var5 = _closure2_slot36;
                                var5 = var5.bind(var3)();
                                _fun0010_ip = 87; continue _fun0010;
case 85:
                                var5 = _closure2_slot42;
                                var5 = var5.bind(var3)();
                                _fun0010_ip = 87; continue _fun0010;
case 84:
                                var5 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var4 = 41;
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
                    var5 = _closure2_slot37;
                    var2['text'] = var5;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 39;
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
                        var2 = _closure2_slot42;
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
                    var5 = 40;
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
                            var3 = _closure2_slot36;
                            var3 = var3.bind(var1)();
                            _fun0011_ip = 91; continue _fun0011;
case 9:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 41;
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
                    var6 = 38;
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
                    var5 = 38;
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
                        var2 = 39;
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
                    var5 = 38;
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
                        var2 = 39;
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
            var29 = var21.bind(var5)();
            var22 = 38;
            var21 = var6[var22];
            var21 = var9.bind(var5)(var21);
            var28 = var21.intl;
            var25 = var28.formatToPlainString;
            var21 = var6[var22];
            var21 = var9.bind(var5)(var21);
            var21 = var21.t;
            var24 = var21.EAYZAr;
            var21 = {};
            var39 = var1.config;
            var39 = var39.messages;
            var39 = var39.questName;
            var21['questName'] = var39;
            var42 = var25.bind(var28)(var24, var21);
            var21 = var6[var4];
            var25 = var9.bind(var5)(var21);
            var24 = var25.hasVirtualCurrencyReward;
            var21 = var1.config;
            var25 = var24.bind(var25)(var21);
            var _closure2_slot38 = var25;
            var21 = 43;
            var21 = var6[var21];
            var24 = var9.bind(var5)(var21);
            var21 = var24.useQuestOrbMultiplierEligibility;
            var51 = var21.bind(var24)();
            var6 = var6[var11];
            var9 = var9.bind(var5)(var6);
            var6 = var9.useShouldShowBonusOrbsUX;
            var45 = var6.bind(var9)(var1, var51);
            var9 = var45;
            if(!var45) { _fun0004_ip = 103; continue _fun0004 }
case 104:
            var11 = _closure1_slot0;
            var21 = _closure1_slot2;
            var6 = 44;
            var6 = var21[var6];
            var6 = var11.bind(var5)(var6);
            var6 = var6.QuestOrbMultiplierEligibilityType;
            var6 = var6.NITRO;
            var9 = var51 === var6;
case 103:
            var6 = var1.userStatus;
            var11 = var43 == var6;
            var21 = undefined;
            if(var11) { _fun0004_ip = 105; continue _fun0004 }
case 106:
            var21 = var6.orbQuantityClaimed;
case 105:
            if(!(var43 == var21)) { _fun0004_ip = 107; continue _fun0004 }
case 108:
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var4];
            var24 = var11.bind(var5)(var6);
            var11 = var24.getVirtualCurrencyRewardOrbQuantity;
            var6 = var1.config;
            var21 = var11.bind(var24)(var6);
case 107:
            var _closure2_slot39 = var21;
            var28 = _closure1_slot0;
            var39 = _closure1_slot2;
            var6 = var39[var4];
            var24 = var28.bind(var5)(var6);
            var11 = var24.getQuestOrbRewardQuantityForUser;
            var6 = var1.config;
            var24 = var11.bind(var24)(var6, var12);
            var _closure2_slot40 = var24;
            var4 = var39[var4];
            var11 = var28.bind(var5)(var4);
            var6 = var11.getDefaultRewardName;
            var4 = var1.config;
            var12 = var6.bind(var11)(var4, var12);
            var _closure2_slot41 = var12;
            var3 = var39[var3];
            var11 = var28.bind(var5)(var3);
            var6 = var11.useQuestDescription;
            var3 = _closure1_slot10;
            var63 = var3.QUEST_HOME_MOBILE;
            var3 = 45;
            var3 = var39[var3];
            var3 = var28.bind(var5)(var3);
            var3 = var3.GameProfileSources;
            var61 = var3.QuestHome;
            var66 = var11;
            var65 = var1;
            var64 = var17;
            var62 = var26;
            var3 = var66[var6](var65, var64, var63, var62, var61, var60);
            var11 = _closure1_slot5;
            var6 = var11.useMemo;
            var4 = new Array(6);
            var4[0] = var13;
            var4[1] = var25;
            var4[2] = var24;
            var4[3] = var21;
            var4[4] = var12;
            var4[5] = var2;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 46;
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
                    var1 = _closure2_slot38;
                    if(var1) { _fun0012_ip = 113; continue _fun0012 }
case 111:
                    var1 = _closure2_slot21;
                    if(var1) { _fun0012_ip = 86; continue _fun0012 }
case 114:
                    var1 = _closure2_slot38;
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 38;
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
                            var1 = 47;
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
                            var6 = 38;
                            var8 = var10[var6];
                            var8 = var7.bind(var2)(var8);
                            var9 = var8.intl;
                            var8 = var9.format;
                            var6 = var10[var6];
                            var6 = var7.bind(var2)(var6);
                            var6 = var6.t;
                            var7 = var6.nLXlh+;
                            var6 = {};
                            var12 = _closure2_slot40;
                            var10 = null;
                            var12 = var10 != var12;
                            var10 = 0;
                            if(!var12) { _fun0013_ip = 120; continue _fun0013 }
case 121:
                            var10 = _closure2_slot40;
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
                    var1 = _closure2_slot41;
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
                    var2 = 47;
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
                    var7 = 38;
                    var9 = var11[var7];
                    var9 = var8.bind(var6)(var9);
                    var10 = var9.intl;
                    var9 = var10.format;
                    var7 = var11[var7];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.t;
                    var8 = var7.nLXlh+;
                    var7 = {};
                    var13 = _closure2_slot39;
                    var11 = null;
                    var13 = var11 != var13;
                    var11 = 0;
                    if(!var13) { _fun0012_ip = 125; continue _fun0012 }
case 126:
                    var11 = _closure2_slot39;
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
            var50 = var6.bind(var11)(var2, var4);
            var2 = var19;
            if(!var2) { _fun0004_ip = 127; continue _fun0004 }
case 128:
            var2 = var14;
case 127:
            if(!var2) { _fun0004_ip = 129; continue _fun0004 }
case 130:
            var2 = !var13;
case 129:
            var47 = var3;
            if(!var2) { _fun0004_ip = 131; continue _fun0004 }
case 132:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = var2[var22];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var2[var22];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.l1jCM/;
            var2 = {};
            var2['date'] = var8;
            var47 = var4.bind(var6)(var3, var2);
case 131:
            var39 = _closure1_slot0;
            var48 = _closure1_slot2;
            var2 = var48[var35];
            var4 = var39.bind(var5)(var2);
            var3 = var4.getCtaLink;
            var2 = var1.config;
            var2 = var3.bind(var4)(var2);
            var28 = '';
            var26 = var28 !== var2;
            var6 = _closure1_slot5;
            var4 = var6.useCallback;
            var2 = var1.id;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var17;
            var2 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 41;
                var2 = var7[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var6 = _closure2_slot1;
                var6 = var6.id;
                var2['questId'] = var6;
                var6 = _closure1_slot0;
                var5 = 48;
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
                        if(var2) { _fun0014_ip = 133; continue _fun0014 }
case 134:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 39;
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
case 135:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0014_ip = 136; continue _fun0014 }
case 137:
                        return var3;
case 136:
                        return var2;
case 133:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var5)(var2);
            var2 = new Array(1);
            var2[0] = var7;
            var21 = var4.bind(var6)(var3, var2);
            var _closure2_slot42 = var21;
            var4 = _closure1_slot12;
            var2 = 49;
            var2 = var48[var2];
            var2 = var39.bind(var5)(var2);
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
case 138:
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
            var6 = 50;
            var6 = var48[var6];
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
            var12['height'] = var49;
            var10[1] = var12;
            var9['style'] = var10;
            var10 = 51;
            var10 = var48[var10];
            var12 = var24.bind(var5)(var10);
            var10 = {};
            var49 = {};
            var52 = var52.url;
            var49['uri'] = var52;
            var10['source'] = var49;
            var49 = var16.heroImg;
            var10['style'] = var49;
            var10['onError'] = var40;
            var10['accessibilityLabel'] = var28;
            var10 = var4.bind(var5)(var12, var10);
            var12 = new Array(4);
            var12[0] = var10;
            var10 = 52;
            var10 = var48[var10];
            var24 = var24.bind(var5)(var10);
            var10 = {};
            var28 = var16.heroLinearGradientOverlay;
            var10['style'] = var28;
            var28 = 53;
            var49 = var48[var28];
            var49 = var39.bind(var5)(var49);
            var49 = var49.VerticalGradient;
            var49 = var49.START;
            var10['start'] = var49;
            var28 = var48[var28];
            var28 = var39.bind(var5)(var28);
            var28 = var28.VerticalGradient;
            var28 = var28.END;
            var10['end'] = var28;
            var28 = new Array(3);
            var28[0] = var38;
            var28[1] = var36;
            var28[2] = var34;
            var10['colors'] = var28;
            var10 = var4.bind(var5)(var24, var10);
            var12[1] = var10;
            var10 = var1.preview;
            if(!var10) { _fun0004_ip = 139; continue _fun0004 }
case 140:
            var34 = _closure1_slot12;
            var28 = _closure1_slot7;
            var24 = {};
            var36 = var16.previewBadge;
            var24['style'] = var36;
            var52 = _closure1_slot0;
            var39 = _closure1_slot2;
            var36 = 54;
            var36 = var39[var36];
            var36 = var52.bind(var5)(var36);
            var38 = var36.Text;
            var36 = {'variant': 'eyebrow', 'color': 'always-white'};
            var48 = var39[var22];
            var48 = var52.bind(var5)(var48);
            var49 = var48.intl;
            var48 = var49.string;
            var39 = var39[var22];
            var39 = var52.bind(var5)(var39);
            var39 = var39.t;
            var39 = var39.SKNnqq;
            var39 = var48.bind(var49)(var39);
            var36['children'] = var39;
            var36 = var34.bind(var5)(var38, var36);
            var24['children'] = var36;
            var10 = var34.bind(var5)(var28, var24);
case 139:
            var12[2] = var10;
            var34 = _closure1_slot13;
            var28 = _closure1_slot7;
            var24 = {};
            var10 = var16.heroFooterContainer;
            var24['style'] = var10;
            var36 = {};
            var10 = var16.heroFooterLeftContainer;
            var36['style'] = var10;
            var57 = _closure1_slot12;
            var39 = _closure1_slot1;
            var38 = _closure1_slot2;
            var10 = 55;
            var10 = var38[var10];
            var39 = var39.bind(var5)(var10);
            var10 = {};
            var10['assetUrl'] = var44;
            var10['onError'] = var40;
            var10 = var57.bind(var5)(var39, var10);
            var52 = new Array(2);
            var52[0] = var10;
            var39 = _closure1_slot0;
            var10 = 56;
            var40 = var38[var10];
            var40 = var39.bind(var5)(var40);
            var55 = var40.Stack;
            var54 = {'direction': 'horizontal', 'align': 'center', 'spacing': 4};
            var48 = 54;
            var38 = var38[var48];
            var38 = var39.bind(var5)(var38);
            var56 = var38.Text;
            var40 = {};
            var49 = 'text-xs/medium';
            var40['variant'] = var49;
            var44 = 'always-white';
            var38 = var44;
            if(!var46) { _fun0004_ip = 141; continue _fun0004 }
case 142:
            var38 = 'text-muted';
case 141:
            var40['color'] = var38;
            var39 = _closure1_slot0;
            var38 = _closure1_slot2;
            var58 = var38[var22];
            var58 = var39.bind(var5)(var58);
            var60 = var58.intl;
            var59 = var60.string;
            var58 = var38[var22];
            var58 = var39.bind(var5)(var58);
            var58 = var58.t;
            var58 = var58.VAbKhK;
            var58 = var59.bind(var60)(var58);
            var40['children'] = var58;
            var40 = var57.bind(var5)(var56, var40);
            var56 = new Array(3);
            var56[0] = var40;
            var40 = _closure1_slot12;
            var58 = _closure1_slot6;
            var57 = {};
            var60 = _closure1_slot1;
            var59 = 57;
            var59 = var38[var59];
            var59 = var60.bind(var5)(var59);
            var57['source'] = var59;
            var59 = {'height': 16, 'width': 16};
            var57['style'] = var59;
            var57 = var40.bind(var5)(var58, var57);
            var56[1] = var57;
            var57 = var38[var48];
            var57 = var39.bind(var5)(var57);
            var58 = var57.Text;
            var57 = {'variant': 'text-xs/medium', 'color': 'always-white'};
            var59 = var1.config;
            var59 = var59.messages;
            var59 = var59.gamePublisher;
            var57['children'] = var59;
            var57 = var40.bind(var5)(var58, var57);
            var56[2] = var57;
            var54['children'] = var56;
            var54 = var34.bind(var5)(var55, var54);
            var52[1] = var54;
            var36['children'] = var52;
            var52 = var34.bind(var5)(var28, var36);
            var36 = new Array(2);
            var36[0] = var52;
            var38 = var38[var48];
            var38 = var39.bind(var5)(var38);
            var39 = var38.Text;
            var38 = {};
            var38['variant'] = var49;
            if(!var46) { _fun0004_ip = 143; continue _fun0004 }
case 144:
            var44 = 'text-default';
case 143:
            var38['color'] = var44;
            var46 = _closure1_slot0;
            var44 = _closure1_slot2;
            var49 = var44[var22];
            var49 = var46.bind(var5)(var49);
            var52 = var49.intl;
            var49 = var52.format;
            var44 = var44[var22];
            var44 = var46.bind(var5)(var44);
            var44 = var44.t;
            var46 = var44["7D8r4F"];
            var44 = {};
            var44['expiryDate'] = var53;
            var44 = var49.bind(var52)(var46, var44);
            var38['children'] = var44;
            var38 = var40.bind(var5)(var39, var38);
            var36[1] = var38;
            var24['children'] = var36;
            var24 = var34.bind(var5)(var28, var24);
            var12[3] = var24;
            var9['children'] = var12;
            var11 = var8.bind(var5)(var11, var9);
            var9 = new Array(3);
            var9[0] = var11;
            var24 = _closure1_slot12;
            var12 = _closure1_slot7;
            var11 = {};
            var28 = var16.detailsWrapper;
            var11['style'] = var28;
            var34 = _closure1_slot13;
            var28 = {};
            var36 = var16.detailsContainer;
            var28['style'] = var36;
            var36 = {};
            var38 = var16.rewardImgContainer;
            var36['style'] = var38;
            var40 = _closure1_slot12;
            var39 = _closure1_slot1;
            var44 = _closure1_slot2;
            if(var37) { _fun0004_ip = 145; continue _fun0004 }
case 146:
            var37 = 59;
            var37 = var44[var37];
            var38 = var39.bind(var5)(var37);
            var37 = {'quest': null, 'height': 64, 'width': 64};
            var37['quest'] = var1;
            var37 = var40.bind(var5)(var38, var37);
            _fun0004_ip = 147; continue _fun0004;
case 145:
            var38 = 58;
            var38 = var44[var38];
            var39 = var39.bind(var5)(var38);
            var38 = {};
            var38['quest'] = var1;
            var38['progress'] = var41;
            var41 = 'sm';
            var38['size'] = var41;
            var37 = var40.bind(var5)(var39, var38);
case 147:
            var36['children'] = var37;
            var37 = var24.bind(var5)(var12, var36);
            var36 = new Array(2);
            var36[0] = var37;
            var39 = _closure1_slot13;
            var38 = _closure1_slot7;
            var37 = {};
            var40 = var16.detailsTextContainer;
            var37['style'] = var40;
            var49 = _closure1_slot12;
            var46 = _closure1_slot0;
            var44 = _closure1_slot2;
            var40 = var44[var48];
            var40 = var46.bind(var5)(var40);
            var41 = var40.Text;
            var40 = {'variant': 'eyebrow', 'color': 'text-brand', 'style': null, 'accessibilityRole': 'header'};
            var52 = var16.questName;
            var40['style'] = var52;
            var40['children'] = var42;
            var41 = var49.bind(var5)(var41, var40);
            var40 = new Array(2);
            var40[0] = var41;
            var41 = {};
            var42 = var16.bodyContainer;
            var41['style'] = var42;
            var42 = {};
            var52 = var16.subtitleRow;
            var42['style'] = var52;
            var44 = var44[var48];
            var44 = var46.bind(var5)(var44);
            var46 = var44.Text;
            var44 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var44['children'] = var50;
            var46 = var49.bind(var5)(var46, var44);
            var44 = new Array(2);
            var44[0] = var46;
            if(!var45) { _fun0004_ip = 148; continue _fun0004 }
case 149:
            var50 = _closure1_slot12;
            var49 = _closure1_slot0;
            var52 = _closure1_slot2;
            var46 = 60;
            var46 = var52[var46];
            var46 = var49.bind(var5)(var46);
            var49 = var46.QuestOrbMultiplierPerkPill;
            var46 = {};
            var52 = var1.config;
            var52 = var52.id;
            var46['questId'] = var52;
            var46['orbMultiplierEligibility'] = var51;
            var45 = var50.bind(var5)(var49, var46);
case 148:
            var44[1] = var45;
            var42['children'] = var44;
            var44 = var39.bind(var5)(var38, var42);
            var42 = new Array(2);
            var42[0] = var44;
            var43 = var43 != var47;
            if(!var43) { _fun0004_ip = 150; continue _fun0004 }
case 151:
            var46 = _closure1_slot12;
            var45 = _closure1_slot0;
            var44 = _closure1_slot2;
            var44 = var44[var48];
            var44 = var45.bind(var5)(var44);
            var45 = var44.Text;
            var44 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var44['children'] = var47;
            var43 = var46.bind(var5)(var45, var44);
case 150:
            var42[1] = var43;
            var41['children'] = var42;
            var41 = var39.bind(var5)(var38, var41);
            var40[1] = var41;
            var37['children'] = var40;
            var37 = var39.bind(var5)(var38, var37);
            var36[1] = var37;
            var28['children'] = var36;
            var28 = var34.bind(var5)(var12, var28);
            var11['children'] = var28;
            var11 = var24.bind(var5)(var12, var11);
            var9[1] = var11;
            var12 = _closure1_slot13;
            var11 = _closure1_slot0;
            var24 = _closure1_slot2;
            var10 = var24[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Stack;
            var10 = {'direction': 'horizontal', 'align': 'center'};
            var28 = _closure1_slot1;
            var24 = var24[var33];
            var24 = var28.bind(var5)(var24);
            var24 = var24.spacing;
            var24 = var24.PX_8;
            var10['spacing'] = var24;
            var16 = var16.buttonContainers;
            var10['style'] = var16;
            var16 = _closure1_slot14;
            var24 = {};
            if(var27) { _fun0004_ip = 152; continue _fun0004 }
case 153:
            if(!var26) { _fun0004_ip = 154; continue _fun0004 }
case 155:
            var26 = !var27;
case 154:
            if(!var26) { _fun0004_ip = 156; continue _fun0004 }
case 157:
            var26 = !var19;
case 156:
            if(!var26) { _fun0004_ip = 158; continue _fun0004 }
case 159:
            var26 = !var13;
case 158:
            if(!var26) { _fun0004_ip = 160; continue _fun0004 }
case 161:
            var26 = !var14;
case 160:
            if(!var26) { _fun0004_ip = 162; continue _fun0004 }
case 163:
            var28 = _closure1_slot12;
            var34 = _closure1_slot0;
            var33 = _closure1_slot2;
            var13 = 61;
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
case 162:
            var13 = new Array(2);
            var13[0] = var26;
            var28 = _closure1_slot12;
            var27 = _closure1_slot0;
            var32 = _closure1_slot2;
            var26 = 61;
            var26 = var32[var26];
            var26 = var27.bind(var5)(var26);
            var27 = var26.Button;
            var26 = {};
            var26['grow'] = var30;
            var65 = var26;
            var64 = var29;
            var29 = copyDataProperties(var65, var64);
            var26 = var28.bind(var5)(var27, var26);
            var13[1] = var26;
            var24['children'] = var13;
            var13 = var24;
            _fun0004_ip = 164; continue _fun0004;
case 152:
            var29 = _closure1_slot12;
            var33 = _closure1_slot0;
            var30 = _closure1_slot2;
            var27 = 61;
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
                var1 = 33;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 35;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 62;
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
case 164:
            var16 = var12.bind(var5)(var16, var13);
            var13 = new Array(4);
            var13[0] = var16;
            var16 = var14;
            if(!var14) { _fun0004_ip = 165; continue _fun0004 }
case 166:
            var16 = var23;
case 165:
            if(!var16) { _fun0004_ip = 167; continue _fun0004 }
case 168:
            var16 = var20;
case 167:
            if(!var16) { _fun0004_ip = 169; continue _fun0004 }
case 170:
            var24 = _closure1_slot12;
            var30 = _closure1_slot0;
            var28 = _closure1_slot2;
            var20 = 63;
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
            var26 = 64;
            var26 = var28[var26];
            var26 = var27.bind(var5)(var26);
            var20['icon'] = var26;
            var20['onPress'] = var25;
            var25 = 'secondary';
            var20['variant'] = var25;
            var16 = var24.bind(var5)(var23, var20);
case 169:
            var13[1] = var16;
            if(!var14) { _fun0004_ip = 171; continue _fun0004 }
case 172:
            var14 = var15;
case 171:
            if(!var14) { _fun0004_ip = 173; continue _fun0004 }
case 174:
            var20 = _closure1_slot12;
            var26 = _closure1_slot0;
            var24 = _closure1_slot2;
            var15 = 63;
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
            var22 = 64;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var15['icon'] = var22;
            var15['onPress'] = var21;
            var21 = 'secondary';
            var15['variant'] = var21;
            var14 = var20.bind(var5)(var16, var15);
case 173:
            var13[2] = var14;
            var16 = _closure1_slot12;
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = 65;
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
    var4 = 66;
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