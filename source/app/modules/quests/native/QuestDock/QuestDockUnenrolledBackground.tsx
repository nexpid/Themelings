// app/modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
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
    var4 = var4.QuestDockMode;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.QUEST_DOCK_EXPANDED_HEIGHT;
    var8 = var4.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
    var _closure1_slot8 = var8;
    var4 = var4.QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerticalGradient;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
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
    var10[10] = var1;
    var11 = 'bottom';
    var10[10] = var1;
    var11 = 'height';
    var10[10] = var12;
    var14 = 'zIndex';
    var10[13] = var15;
    var4['backgroundWrapper'] = var10;
    var10 = {};
    var17 = var13.absoluteFillObject;
    var18 = var10;
    var14 = copyDataProperties(var18, var17);
    var10[10] = var12;
    var15 = 'cover';
    var14 = 'resizeMode';
    var10[13] = var15;
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
    var10[10] = var12;
    var4['backgroundGradient'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function QuestDockUnenrolledBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,videoLoaded,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()!==QuestDockMode.EXPANDED||!videoLoaded?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function QuestDockUnenrolledBackground() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var18 = _closure1_slot4;
            var3 = var18.useContext;
            var19 = _closure1_slot1;
            var21 = _closure1_slot2;
            var13 = 9;
            var1 = var21[var13];
            var4 = undefined;
            var1 = var19.bind(var4)(var1);
            var1 = var3.bind(var18)(var1);
            var5 = var1.quest;
            var1 = _closure1_slot13;
            var11 = var1.bind(var4)();
            var25 = _closure1_slot0;
            var1 = 10;
            var1 = var21[var1];
            var3 = var25.bind(var4)(var1);
            var1 = var3.useQuestDockHeroAsset;
            var1 = var1.bind(var3)(var5);
            var20 = var1.staticUrl;
            var23 = var1.videoAsset;
            var3 = var18.useContext;
            var1 = 11;
            var1 = var21[var1];
            var1 = var25.bind(var4)(var1);
            var1 = var1.QuestDockGestureContext;
            var1 = var3.bind(var18)(var1);
            var14 = var1.activeQuestDockMode;
            var _closure2_slot0 = var14;
            var17 = var1.windowDimensions;
            var _closure2_slot1 = var17;
            var3 = var18.useContext;
            var1 = 12;
            var1 = var21[var1];
            var1 = var25.bind(var4)(var1);
            var1 = var1.QuestDockExternalCoordinationContext;
            var1 = var3.bind(var18)(var1);
            var16 = var1.setRestingQuestDockMode;
            var _closure2_slot2 = var16;
            var1 = 13;
            var1 = var21[var1];
            var1 = var19.bind(var4)(var1);
            var22 = var1.bind(var4)(var14);
            var1 = 14;
            var1 = var21[var1];
            var6 = var25.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var1 = var5.bind(var6)(var3, var1);
            var3 = 15;
            var3 = var21[var3];
            var6 = var25.bind(var4)(var3);
            var5 = var6.useToken;
            var3 = 16;
            var3 = var21[var3];
            var3 = var19.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.CARD_BACKGROUND_DEFAULT;
            var3 = var5.bind(var6)(var3);
            var _closure2_slot3 = var3;
            var6 = var18.useMemo;
            var5 = new Array(1);
            var5[0] = var3;
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
            var9 = var6.bind(var18)(var3, var5);
            var6 = var18.useMemo;
            var5 = function() {
                var1 = [0, 0.33, 0.76, 1];
                return var1;
            };
            var3 = new Array(0);
            var12 = var6.bind(var18)(var5, var3);
            var3 = 18;
            var5 = var21[var3];
            var7 = var25.bind(var4)(var5);
            var6 = var7.useAnimatedStyle;
            var5 = function s() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                    if(!(var12 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var12 = _closure1_slot9;
                    var3 = -1;
                    var6 = var3 * var12;
case 2:
                    var3 = _closure1_slot8;
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
                    if(!(var10 === var9)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var10 = _closure1_slot9;
                    var9 = -1;
                    var8 = var9 * var10;
case 4:
                    var5 = _closure1_slot8;
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
            var8 = {};
            var15 = 19;
            var24 = var21[var15];
            var24 = var25.bind(var4)(var24);
            var24 = var24.withSpring;
            var8['withSpring'] = var24;
            var8['activeQuestDockMode'] = var14;
            var24 = _closure1_slot7;
            var8['QuestDockMode'] = var24;
            var24 = _closure1_slot9;
            var8['QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED'] = var24;
            var24 = _closure1_slot8;
            var8['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var24;
            var8['windowDimensions'] = var17;
            var5['__closure'] = var8;
            var8 = 3565242281634.0;
            var5['__workletHash'] = var8;
            var8 = _closure1_slot14;
            var5['__initData'] = var8;
            var7 = var6.bind(var7)(var5);
            var6 = var18.useState;
            var5 = _closure1_slot5;
            var8 = var5.currentState;
            var5 = 'active';
            var5 = var5 !== var8;
            var6 = var6.bind(var18)(var5);
            var5 = _closure1_slot3;
            var17 = 2;
            var24 = var5.bind(var4)(var6, var17);
            var8 = 0;
            var5 = var24[var8];
            var6 = 1;
            var24 = var24[var6];
            var _closure2_slot4 = var24;
            var25 = var18.useEffect;
            var24 = new Array(2);
            var24[0] = var14;
            var24[1] = var16;
            var16 = function() {
                var5 = _closure1_slot5;
                var4 = var5.addEventListener;
                var3 = 'change';
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
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
                        if(!var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var4 = var5;
case 6:
                        if(!var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var6 = _closure2_slot0;
                        var5 = var6.get;
                        var6 = var5.bind(var6)();
                        var5 = _closure1_slot7;
                        var5 = var5.EXPANDED;
                        var4 = var6 === var5;
case 8:
                        if(!var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var3 = _closure2_slot2;
                        var2 = _closure1_slot7;
                        var2 = var2.COLLAPSED;
                        var2 = var3.bind(var1)(var2);
case 10:
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
            var16 = var25.bind(var18)(var16, var24);
            var16 = var18.useContext;
            var13 = var21[var13];
            var13 = var19.bind(var4)(var13);
            var13 = var16.bind(var18)(var13);
            var13 = var13.isVisible;
            var5 = !var5;
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var13;
case 12:
            if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = !var1;
case 14:
            if(!var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = null;
            var5 = var1 != var23;
case 16:
            if(!var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 20;
            var1 = var16[var1];
            var13 = var13.bind(var4)(var1);
            var1 = var13.isAndroid;
            var1 = var1.bind(var13)();
            var5 = !var1;
case 18:
            if(!var5) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 21;
            var1 = var16[var1];
            var13 = var13.bind(var4)(var1);
            var1 = var13.isHeroVideoSupported;
            var5 = var1.bind(var13)(var23);
case 20:
            var16 = _closure1_slot4;
            var1 = var16.useState;
            var18 = false;
            var13 = var1.bind(var16)(var18);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var13, var17);
            var13 = var1[var8];
            var _closure2_slot5 = var13;
            var1 = var1[var6];
            var _closure2_slot6 = var1;
            var8 = var16.useCallback;
            var6 = function() {
                var3 = _closure2_slot6;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var21 = var8.bind(var16)(var6, var1);
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var3];
            var6 = var16.bind(var4)(var3);
            var3 = var6.useAnimatedStyle;
            var2 = function G() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
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
                    if(!(var9 === var8)) { _fun0004_ip = 2; continue _fun0004 }
case 22:
                    var6 = _closure2_slot5;
                    var3 = var7;
                    if(!var6) { _fun0004_ip = 2; continue _fun0004 }
case 23:
                    var3 = 0;
case 2:
                    var2 = _closure1_slot8;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var15 = var1[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.withSpring;
            var8['withSpring'] = var15;
            var8['activeQuestDockMode'] = var14;
            var14 = _closure1_slot7;
            var8['QuestDockMode'] = var14;
            var8['videoLoaded'] = var13;
            var13 = _closure1_slot8;
            var8['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var13;
            var2['__closure'] = var8;
            var8 = 13084905891385.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot15;
            var2['__initData'] = var8;
            var17 = var3.bind(var6)(var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var14 = 22;
            var1 = var1[var14];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var11.backgroundWrapper;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            if(var5) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var7 = _closure1_slot11;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 24;
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var8 = var11.backgroundHeroAsset;
            var5['style'] = var8;
            var8 = {};
            var8['uri'] = var20;
            var5['source'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var8 = _closure1_slot12;
            var5 = _closure1_slot4;
            var7 = var5.Fragment;
            var5 = {};
            var16 = _closure1_slot11;
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 23;
            var13 = var19[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.VideoComponent;
            var13 = {};
            var24 = var11.backgroundHeroAssetVideo;
            var13['style'] = var24;
            var13['onLoad'] = var21;
            var21 = {};
            var23 = var23.url;
            var21['uri'] = var23;
            var13['source'] = var21;
            var21 = _closure1_slot7;
            var21 = var21.EXPANDED;
            var21 = var22 !== var21;
            var13['paused'] = var21;
            var21 = 'cover';
            var13['resizeMode'] = var21;
            var21 = true;
            var13['muted'] = var21;
            var22 = 'mix';
            var13['mixWithOthers'] = var22;
            var13['disableFocus'] = var21;
            var13['preventsDisplaySleepDuringVideoPlayback'] = var18;
            var15 = var16.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var18 = _closure1_slot1;
            var14 = var19[var14];
            var15 = var18.bind(var4)(var14);
            var14 = {};
            var14['style'] = var17;
            var17 = 24;
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
case 26:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 25;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['locations'] = var12;
            var11 = var11.backgroundGradient;
            var6['style'] = var11;
            var10 = _closure1_slot10;
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
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();