// app/modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var15 = 1;
    var7 = var6[var15];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.AppState;
    var _closure1_slot5 = var9;
    var13 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.QuestDockMode;
    var _closure1_slot7 = var8;
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.QUEST_DOCK_EXPANDED_HEIGHT;
    var8 = var4.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
    var _closure1_slot9 = var8;
    var4 = var4.QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerticalGradient;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var17 = var13.absoluteFillObject;
    var18 = var10;
    var11 = copyDataProperties(var18, var17);
    var11 = 'right';
    var10[var11] = var1;
    var11 = 'bottom';
    var10[var11] = var1;
    var11 = 'height';
    var10[var11] = var12;
    var14 = 'zIndex';
    var10[var14] = var15;
    var4['backgroundWrapper'] = var10;
    var10 = {};
    var17 = var13.absoluteFillObject;
    var18 = var10;
    var14 = copyDataProperties(var18, var17);
    var10[var11] = var12;
    var15 = 'cover';
    var14 = 'resizeMode';
    var10[var14] = var15;
    var4['backgroundHeroAsset'] = var10;
    var10 = {};
    var17 = var13.absoluteFillObject;
    var18 = var10;
    var14 = copyDataProperties(var18, var17);
    var4['backgroundHeroAssetVideo'] = var10;
    var10 = {};
    var17 = var13.absoluteFillObject;
    var18 = var10;
    var13 = copyDataProperties(var18, var17);
    var10[var11] = var12;
    var4['backgroundGradient'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,videoLoaded,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()!==QuestDockMode.EXPANDED||!videoLoaded?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function QuestDockUnenrolledBackground() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var17 = _closure1_slot4;
            var3 = var17.useContext;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var5 = 9;
            var1 = var19[var5];
            var4 = undefined;
            var1 = var18.bind(var4)(var1);
            var1 = var3.bind(var17)(var1);
            var6 = var1.quest;
            var1 = _closure1_slot14;
            var11 = var1.bind(var4)();
            var25 = _closure1_slot0;
            var1 = 10;
            var1 = var19[var1];
            var3 = var25.bind(var4)(var1);
            var1 = var3.useQuestDockHeroAsset;
            var1 = var1.bind(var3)(var6);
            var20 = var1.staticUrl;
            var22 = var1.videoAsset;
            var3 = var17.useContext;
            var1 = 11;
            var1 = var19[var1];
            var1 = var25.bind(var4)(var1);
            var1 = var1.QuestDockGestureContext;
            var1 = var3.bind(var17)(var1);
            var15 = var1.activeQuestDockMode;
            var _closure2_slot0 = var15;
            var23 = var1.windowDimensions;
            var _closure2_slot1 = var23;
            var3 = var17.useContext;
            var1 = 12;
            var1 = var19[var1];
            var1 = var25.bind(var4)(var1);
            var1 = var1.QuestDockExternalCoordinationContext;
            var1 = var3.bind(var17)(var1);
            var7 = var1.setRestingQuestDockMode;
            var _closure2_slot2 = var7;
            var1 = 13;
            var1 = var19[var1];
            var1 = var18.bind(var4)(var1);
            var21 = var1.bind(var4)(var15);
            var1 = 14;
            var1 = var19[var1];
            var8 = var25.bind(var4)(var1);
            var6 = var8.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = var6.bind(var8)(var3, var1);
            var3 = 15;
            var3 = var19[var3];
            var8 = var25.bind(var4)(var3);
            var6 = var8.useToken;
            var3 = 16;
            var3 = var19[var3];
            var3 = var18.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_SECONDARY_ALT;
            var3 = var6.bind(var8)(var3);
            var _closure2_slot3 = var3;
            var8 = var17.useMemo;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = _closure2_slot3;
                var4 = var2.bind(var3)(var1);
                var2 = var4.alpha;
                var1 = 0;
                var2 = var2.bind(var4)(var1);
                var1 = var2.hex;
                var2 = var1.bind(var2)();
                var1 = new Array(4);
                var1[0] = var2;
                var3 = var4.alpha;
                var2 = 0.1;
                var3 = var3.bind(var4)(var2);
                var2 = var3.hex;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                var3 = var4.alpha;
                var2 = 0.8;
                var3 = var3.bind(var4)(var2);
                var2 = var3.hex;
                var2 = var2.bind(var3)();
                var1[2] = var2;
                var3 = var4.alpha;
                var2 = 1;
                var3 = var3.bind(var4)(var2);
                var2 = var3.hex;
                var2 = var2.bind(var3)();
                var1[3] = var2;
                return var1;
            };
            var9 = var8.bind(var17)(var3, var6);
            var8 = var17.useMemo;
            var6 = function() {
                var1 = [0, 0.33, 0.76, 1];
                return var1;
            };
            var3 = new Array(0);
            var12 = var8.bind(var17)(var6, var3);
            var3 = 18;
            var6 = var19[var3];
            var13 = var25.bind(var4)(var6);
            var8 = var13.useAnimatedStyle;
            var6 = function s() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var4 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 19;
                    var2 = var2[var10];
                    var9 = undefined;
                    var11 = var3.bind(var9)(var2);
                    var7 = var11.withSpring;
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var12 = var3.bind(var6)();
                    var3 = _closure1_slot7;
                    var3 = var3.COLLAPSED;
                    var6 = 0;
                    if(!(var12 === var3)) { _fun0002_ip = 80; continue _fun0002 }
 66:
                    var12 = _closure1_slot10;
                    var3 = -1;
                    var6 = var3 * var12;
 80:
                    var3 = _closure1_slot9;
                    var3 = var7.bind(var11)(var6, var3);
                    var4['translateX'] = var3;
                    var3 = new Array(2);
                    var3[0] = var4;
                    var4 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var10];
                    var7 = var7.bind(var9)(var6);
                    var6 = var7.withSpring;
                    var10 = _closure2_slot0;
                    var9 = var10.get;
                    var10 = var9.bind(var10)();
                    var9 = _closure1_slot7;
                    var9 = var9.COLLAPSED;
                    var8 = 0;
                    if(!(var10 === var9)) { _fun0002_ip = 170; continue _fun0002 }
 156:
                    var10 = _closure1_slot10;
                    var9 = -1;
                    var8 = var9 * var10;
 170:
                    var5 = _closure1_slot9;
                    var5 = var6.bind(var7)(var8, var5);
                    var4['translateY'] = var5;
                    var3[1] = var4;
                    var1['transform'] = var3;
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.width;
                    var1['width'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var16 = 19;
            var24 = var19[var16];
            var24 = var25.bind(var4)(var24);
            var24 = var24.withSpring;
            var14['withSpring'] = var24;
            var14['activeQuestDockMode'] = var15;
            var24 = _closure1_slot7;
            var14['QuestDockMode'] = var24;
            var24 = _closure1_slot10;
            var14['QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED'] = var24;
            var24 = _closure1_slot9;
            var14['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var24;
            var14['windowDimensions'] = var23;
            var6['__closure'] = var14;
            var14 = 3565242281634.0;
            var6['__workletHash'] = var14;
            var14 = _closure1_slot15;
            var6['__initData'] = var14;
            var8 = var8.bind(var13)(var6);
            var13 = var17.useState;
            var6 = _closure1_slot5;
            var14 = var6.currentState;
            var6 = 'active';
            var6 = var6 !== var14;
            var13 = var13.bind(var17)(var6);
            var6 = _closure1_slot3;
            var23 = 2;
            var24 = var6.bind(var4)(var13, var23);
            var14 = 0;
            var6 = var24[var14];
            var13 = 1;
            var24 = var24[var13];
            var _closure2_slot4 = var24;
            var25 = var17.useEffect;
            var24 = new Array(2);
            var24[0] = var15;
            var24[1] = var7;
            var7 = function() {
                var5 = _closure1_slot5;
                var4 = var5.addEventListener;
                var3 = 'change';
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = 'active';
                        var1 = arg1;
                        var5 = var2 !== var1;
                        var2 = _closure2_slot4;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var5);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 20;
                        var4 = var7[var4];
                        var6 = var6.bind(var1)(var4);
                        var4 = var6.isIOS;
                        var4 = var4.bind(var6)();
                        if(!var4) { _fun0003_ip = 64; continue _fun0003 }
 61:
                        var4 = var5;
 64:
                        if(!var4) { _fun0003_ip = 94; continue _fun0003 }
 67:
                        var6 = _closure2_slot0;
                        var5 = var6.get;
                        var6 = var5.bind(var6)();
                        var5 = _closure1_slot7;
                        var5 = var5.EXPANDED;
                        var4 = var6 === var5;
 94:
                        if(!var4) { _fun0003_ip = 116; continue _fun0003 }
 97:
                        var3 = _closure2_slot2;
                        var2 = _closure1_slot7;
                        var2 = var2.COLLAPSED;
                        var2 = var3.bind(var1)(var2);
 116:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var7 = var25.bind(var17)(var7, var24);
            var7 = var17.useContext;
            var5 = var19[var5];
            var5 = var18.bind(var4)(var5);
            var5 = var7.bind(var17)(var5);
            var5 = var5.isVisible;
            var6 = !var6;
            if(!var6) { _fun0001_ip = 585; continue _fun0001 }
 582:
            var6 = var5;
 585:
            if(!var6) { _fun0001_ip = 591; continue _fun0001 }
 588:
            var6 = !var1;
 591:
            if(!var6) { _fun0001_ip = 600; continue _fun0001 }
 594:
            var1 = null;
            var6 = var1 != var22;
 600:
            if(!var6) { _fun0001_ip = 634; continue _fun0001 }
 603:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 21;
            var1 = var7[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.isHeroVideoSupported;
            var6 = var1.bind(var5)(var22);
 634:
            var _closure2_slot5 = var6;
            var17 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 22;
            var5 = var1[var5];
            var19 = var17.bind(var4)(var5);
            var7 = var19.useIsQuestDockAnimatedBackgroundEnabled;
            var5 = {};
            var18 = _closure1_slot8;
            var18 = var18.QUESTS_BAR_MOBILE;
            var5['location'] = var18;
            var18 = false;
            var5['autoTrackExposure'] = var18;
            var5 = var7.bind(var19)(var5);
            var19 = _closure1_slot4;
            var25 = var19.useEffect;
            var24 = new Array(1);
            var24[0] = var6;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0004_ip = 68; continue _fun0004 }
 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.QuestDockAnimatedBackgroundExperiment;
                    var2 = var3.trackExposure;
                    var1 = {};
                    var4 = _closure1_slot8;
                    var4 = var4.QUESTS_BAR_MOBILE;
                    var1['location'] = var4;
                    var1 = var2.bind(var3)(var1);
 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var25.bind(var19)(var7, var24);
            var7 = var19.useState;
            var18 = var7.bind(var19)(var18);
            var7 = _closure1_slot3;
            var7 = var7.bind(var4)(var18, var23);
            var14 = var7[var14];
            var _closure2_slot6 = var14;
            var7 = var7[var13];
            var _closure2_slot7 = var7;
            var18 = var19.useCallback;
            var13 = function() {
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = new Array(0);
            var18 = var18.bind(var19)(var13, var7);
            var3 = var1[var3];
            var7 = var17.bind(var4)(var3);
            var3 = var7.useAnimatedStyle;
            var2 = function Y() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 19;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var7 = _closure2_slot0;
                    var3 = var7.get;
                    var9 = var3.bind(var7)();
                    var3 = _closure1_slot7;
                    var8 = var3.EXPANDED;
                    var7 = 1;
                    var3 = var7;
                    if(!(var9 === var8)) { _fun0005_ip = 80; continue _fun0005 }
 68:
                    var6 = _closure2_slot6;
                    var3 = var7;
                    if(!var6) { _fun0005_ip = 80; continue _fun0005 }
 78:
                    var3 = 0;
 80:
                    var2 = _closure1_slot9;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var16 = var1[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.withSpring;
            var13['withSpring'] = var16;
            var13['activeQuestDockMode'] = var15;
            var15 = _closure1_slot7;
            var13['QuestDockMode'] = var15;
            var13['videoLoaded'] = var14;
            var14 = _closure1_slot9;
            var13['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var14;
            var2['__closure'] = var13;
            var13 = 13084905891385.0;
            var2['__workletHash'] = var13;
            var13 = _closure1_slot16;
            var2['__initData'] = var13;
            var17 = var3.bind(var7)(var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var14 = 23;
            var1 = var1[var14];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var13 = var11.backgroundWrapper;
            var7 = new Array(2);
            var7[0] = var13;
            var7[1] = var8;
            var1['style'] = var7;
            if(!var6) { _fun0001_ip = 939; continue _fun0001 }
 936:
            if(var5) { _fun0001_ip = 997; continue _fun0001 }
 939:
            var7 = _closure1_slot12;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 25;
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var8 = var11.backgroundHeroAsset;
            var5['style'] = var8;
            var8 = {};
            var8['uri'] = var20;
            var5['source'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            _fun0001_ip = 1223; continue _fun0001;
 997:
            var8 = _closure1_slot13;
            var5 = _closure1_slot4;
            var7 = var5.Fragment;
            var5 = {};
            var16 = _closure1_slot12;
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 24;
            var13 = var19[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.VideoComponent;
            var13 = {};
            var23 = var11.backgroundHeroAssetVideo;
            var13['style'] = var23;
            var13['onLoad'] = var18;
            var18 = {};
            var22 = var22.url;
            var18['uri'] = var22;
            var13['source'] = var18;
            var18 = _closure1_slot7;
            var18 = var18.EXPANDED;
            var18 = var21 !== var18;
            var13['paused'] = var18;
            var18 = 'cover';
            var13['resizeMode'] = var18;
            var18 = true;
            var13['muted'] = var18;
            var21 = 'mix';
            var13['mixWithOthers'] = var21;
            var13['disableFocus'] = var18;
            var15 = var16.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var18 = _closure1_slot1;
            var14 = var19[var14];
            var15 = var18.bind(var4)(var14);
            var14 = {};
            var14['style'] = var17;
            var17 = 25;
            var17 = var19[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var19 = var11.backgroundHeroAsset;
            var17['style'] = var19;
            var19 = {};
            var19['uri'] = var20;
            var17['source'] = var19;
            var17 = var16.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var5['children'] = var13;
            var6 = var8.bind(var4)(var7, var5);
 1223:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 26;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['locations'] = var12;
            var11 = var11.backgroundGradient;
            var6['style'] = var11;
            var10 = _closure1_slot11;
            var11 = var10.START;
            var6['start'] = var11;
            var10 = var10.END;
            var6['end'] = var10;
            var6['colors'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();