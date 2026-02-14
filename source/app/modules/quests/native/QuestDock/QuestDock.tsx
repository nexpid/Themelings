// app/modules/quests/native/QuestDock/QuestDock.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var19 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var19;
    var _closure1_slot2 = var7;
    var1 = function QuestDockWithGestureAnimation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var15 = var2.appThemedBackgroundColor;
            var _closure2_slot0 = var15;
            var5 = _closure1_slot5;
            var3 = var5.useContext;
            var17 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 13;
            var2 = var16[var2];
            var4 = undefined;
            var2 = var17.bind(var4)(var2);
            var2 = var3.bind(var5)(var2);
            var11 = var2.quest;
            var2 = _closure1_slot24;
            var35 = var2.bind(var4)();
            var5 = _closure1_slot5;
            var3 = var5.useContext;
            var14 = _closure1_slot0;
            var2 = 14;
            var2 = var16[var2];
            var2 = var14.bind(var4)(var2);
            var2 = var2.QuestDockGestureContext;
            var2 = var3.bind(var5)(var2);
            var8 = var2.questDockWrapperSpecs;
            var _closure2_slot1 = var8;
            var18 = var2.activeQuestDockMode;
            var _closure2_slot2 = var18;
            var23 = var2.windowDimensions;
            var _closure2_slot3 = var23;
            var6 = _closure1_slot5;
            var3 = var6.useContext;
            var5 = 15;
            var2 = var16[var5];
            var2 = var14.bind(var4)(var2);
            var2 = var2.QuestDockExternalCoordinationContext;
            var2 = var3.bind(var6)(var2);
            var21 = var2.restingQuestDockMode;
            var _closure2_slot4 = var21;
            var10 = var2.setRestingQuestDockMode;
            var _closure2_slot5 = var10;
            var3 = _closure1_slot5;
            var2 = var3.useId;
            var7 = var2.bind(var3)();
            var12 = _closure1_slot5;
            var6 = var12.useCallback;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var3 = _closure2_slot5;
                var1 = _closure1_slot10;
                var2 = var1.COLLAPSED;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var6.bind(var12)(var2, var3);
            var2 = 16;
            var3 = var16[var2];
            var6 = var14.bind(var4)(var3);
            var3 = var6.useQuestDockModeAnimatedReaction;
            var3 = var3.bind(var6)();
            var2 = var16[var2];
            var3 = var14.bind(var4)(var2);
            var2 = var3.useQuestDockDismissalReset;
            var2 = var2.bind(var3)();
            var2 = 17;
            var2 = var16[var2];
            var3 = var14.bind(var4)(var2);
            var2 = var3.useIsScreenReaderEnabled;
            var6 = var2.bind(var3)();
            var2 = 18;
            var3 = var16[var2];
            var19 = var14.bind(var4)(var3);
            var13 = var19.useDerivedValue;
            var3 = function W() {
                var2 = _closure2_slot4;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot10;
                var1 = var1.EXPANDED;
                var1 = var2 === var1;
                return var1;
            };
            var20 = {};
            var20['restingQuestDockMode'] = var21;
            var21 = _closure1_slot10;
            var20['QuestDockMode'] = var21;
            var3['__closure'] = var20;
            var20 = 7483111521990.0;
            var3['__workletHash'] = var20;
            var20 = _closure1_slot27;
            var3['__initData'] = var20;
            var19 = var13.bind(var19)(var3);
            var3 = 19;
            var13 = var16[var3];
            var13 = var17.bind(var4)(var13);
            var32 = var13.bind(var4)(var19);
            var13 = 20;
            var13 = var16[var13];
            var13 = var17.bind(var4)(var13);
            var13 = var13.bind(var4)();
            var22 = var13.top;
            var _closure2_slot6 = var22;
            var13 = 21;
            var13 = var16[var13];
            var16 = var14.bind(var4)(var13);
            var14 = var16.useYouBarEnabled;
            var13 = 'QuestDock';
            var16 = var14.bind(var16)(var13);
            var _closure2_slot7 = var16;
            var14 = var11.userStatus;
            var13 = null;
            var17 = var13 == var14;
            var11 = undefined;
            if(var17) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var14.enrolledAt;
case 2:
            var33 = var13 != var11;
            var _closure2_slot8 = var33;
            var13 = _closure1_slot5;
            var11 = var13.useContext;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = var19[var5];
            var5 = var17.bind(var4)(var5);
            var5 = var5.QuestDockExternalCoordinationContext;
            var5 = var11.bind(var13)(var5);
            var20 = var5.questDockOffset;
            var _closure2_slot9 = var20;
            var5 = var19[var2];
            var13 = var17.bind(var4)(var5);
            var11 = var13.useAnimatedStyle;
            var5 = function q() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var1['backgroundColor'] = var3;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 12;
                    var3 = var3[var9];
                    var7 = undefined;
                    var8 = var5.bind(var7)(var3);
                    var6 = var8.withSpring;
                    var5 = _closure2_slot2;
                    var3 = var5.get;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot10;
                    var3 = var3.COLLAPSED;
                    if(!(var5 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot7;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var5 = _closure1_slot15;
                    _fun0002_ip = 7; continue _fun0002;
case 4:
                    var10 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var3 = 18;
                    var11 = var15[var3];
                    var14 = var10.bind(var7)(var11);
                    var13 = var14.interpolate;
                    var12 = _closure2_slot9;
                    var11 = var12.get;
                    var12 = var11.bind(var12)();
                    var16 = _closure1_slot15;
                    var11 = [0];
                    var11[1] = var16;
                    var3 = var15[var3];
                    var3 = var10.bind(var7)(var3);
                    var3 = var3.Extrapolation;
                    var17 = var3.CLAMP;
                    var19 = [0, 50];
                    var21 = var14;
                    var20 = var12;
                    var18 = var11;
                    var5 = var21[var13](var20, var19, var18, var17, var16);
case 7:
                    var3 = _closure1_slot14;
                    var3 = var6.bind(var8)(var5, var3);
                    var1['borderBottomRightRadius'] = var3;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var9];
                    var8 = var5.bind(var7)(var3);
                    var6 = var8.withSpring;
                    var5 = _closure2_slot2;
                    var3 = var5.get;
                    var5 = var3.bind(var5)();
                    var3 = _closure1_slot10;
                    var3 = var3.COLLAPSED;
                    if(!(var5 === var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure2_slot7;
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var5 = _closure1_slot15;
                    _fun0002_ip = 11; continue _fun0002;
case 8:
                    var10 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var3 = 18;
                    var11 = var15[var3];
                    var14 = var10.bind(var7)(var11);
                    var13 = var14.interpolate;
                    var12 = _closure2_slot9;
                    var11 = var12.get;
                    var12 = var11.bind(var12)();
                    var16 = _closure1_slot15;
                    var11 = [0];
                    var11[1] = var16;
                    var3 = var15[var3];
                    var3 = var10.bind(var7)(var3);
                    var3 = var3.Extrapolation;
                    var17 = var3.CLAMP;
                    var19 = [0, 50];
                    var21 = var14;
                    var20 = var12;
                    var18 = var11;
                    var5 = var21[var13](var20, var19, var18, var17, var16);
case 11:
                    var3 = _closure1_slot14;
                    var3 = var6.bind(var8)(var5, var3);
                    var1['borderBottomLeftRadius'] = var3;
                    var8 = _closure2_slot1;
                    var2 = var8.get;
                    var2 = var2.bind(var8)();
                    var2 = var2.height;
                    var1['height'] = var2;
                    var2 = var8.get;
                    var2 = var2.bind(var8)();
                    var2 = var2.width;
                    var1['width'] = var2;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = var5[var9];
                    var12 = var6.bind(var7)(var2);
                    var11 = var12.withSpring;
                    var2 = var8.get;
                    var2 = var2.bind(var8)();
                    var10 = var2.x;
                    var2 = 22;
                    var2 = var5[var2];
                    var14 = var6.bind(var7)(var2);
                    var13 = var14.roundToNearestPixel;
                    var2 = var8.get;
                    var2 = var2.bind(var8)();
                    var15 = var2.width;
                    var2 = 2;
                    var2 = var15 / var2;
                    var13 = var13.bind(var14)(var2);
                    var2 = -1;
                    var2 = var2 * var13;
                    var10 = var10 + var2;
                    var2 = _closure1_slot12;
                    var2 = var11.bind(var12)(var10, var2);
                    var3['translateX'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var5 = var5[var9];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.withSpring;
                    var5 = var8.get;
                    var5 = var5.bind(var8)();
                    var5 = var5.y;
                    var4 = _closure1_slot12;
                    var4 = var6.bind(var7)(var5, var4);
                    var3['translateY'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var14['appThemedBackgroundColor'] = var15;
            var15 = 12;
            var21 = var19[var15];
            var21 = var17.bind(var4)(var21);
            var21 = var21.withSpring;
            var14['withSpring'] = var21;
            var14['activeQuestDockMode'] = var18;
            var21 = _closure1_slot10;
            var14['QuestDockMode'] = var21;
            var14['youBarEnabled'] = var16;
            var21 = _closure1_slot15;
            var14['QUEST_DOCK_BORDER_RADII'] = var21;
            var21 = var19[var2];
            var21 = var17.bind(var4)(var21);
            var21 = var21.interpolate;
            var14['interpolate'] = var21;
            var14['questDockOffset'] = var20;
            var20 = var19[var2];
            var20 = var17.bind(var4)(var20);
            var20 = var20.Extrapolation;
            var14['Extrapolation'] = var20;
            var20 = _closure1_slot14;
            var14['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var20;
            var14['questDockWrapperSpecs'] = var8;
            var20 = 22;
            var20 = var19[var20];
            var20 = var17.bind(var4)(var20);
            var20 = var20.roundToNearestPixel;
            var14['roundToNearestPixel'] = var20;
            var20 = _closure1_slot12;
            var14['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = var20;
            var5['__closure'] = var14;
            var14 = 11544805636813.0;
            var5['__workletHash'] = var14;
            var14 = _closure1_slot28;
            var5['__initData'] = var14;
            var14 = var11.bind(var13)(var5);
            var5 = var19[var2];
            var13 = var17.bind(var4)(var5);
            var11 = var13.useSharedValue;
            var5 = 0;
            var5 = var11.bind(var13)(var5);
            var _closure2_slot10 = var5;
            var11 = var19[var2];
            var20 = var17.bind(var4)(var11);
            var13 = var20.useAnimatedStyle;
            var11 = function X() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 12;
                    var4 = var9[var4];
                    var8 = undefined;
                    var6 = var7.bind(var8)(var4);
                    var5 = var6.withSpring;
                    var4 = 18;
                    var4 = var9[var4];
                    var11 = var7.bind(var8)(var4);
                    var10 = var11.interpolate;
                    var9 = _closure2_slot10;
                    var7 = var9.get;
                    var9 = var7.bind(var9)();
                    var12 = _closure2_slot2;
                    var7 = var12.get;
                    var12 = var7.bind(var12)();
                    var7 = _closure1_slot10;
                    var7 = var7.EXPANDED;
                    if(!(var12 !== var7)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var7 = _closure2_slot7;
                    var4 = 0.98;
                    if(!var7) { _fun0003_ip = 14; continue _fun0003 }
case 12:
                    var4 = 1;
case 14:
                    var7 = new Array(2);
                    var7[0] = var4;
                    var4 = 1;
                    var7[1] = var4;
                    var4 = [1, 0];
                    var4 = var10.bind(var11)(var9, var4, var7);
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 23;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.springStandard;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var21 = {};
            var24 = var19[var15];
            var24 = var17.bind(var4)(var24);
            var24 = var24.withSpring;
            var21['withSpring'] = var24;
            var24 = var19[var2];
            var24 = var17.bind(var4)(var24);
            var24 = var24.interpolate;
            var21['interpolate'] = var24;
            var21['isPressed'] = var5;
            var21['activeQuestDockMode'] = var18;
            var24 = _closure1_slot10;
            var21['QuestDockMode'] = var24;
            var21['youBarEnabled'] = var16;
            var24 = 23;
            var24 = var19[var24];
            var24 = var17.bind(var4)(var24);
            var24 = var24.springStandard;
            var21['springStandard'] = var24;
            var11['__closure'] = var21;
            var21 = 371335427120.0;
            var11['__workletHash'] = var21;
            var21 = _closure1_slot29;
            var11['__initData'] = var21;
            var26 = var13.bind(var20)(var11);
            var20 = _closure1_slot5;
            var13 = var20.useCallback;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                var3 = _closure2_slot5;
                var1 = _closure1_slot10;
                var2 = var1.EXPANDED;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var30 = var13.bind(var20)(var10, var11);
            var20 = _closure1_slot5;
            var13 = var20.useCallback;
            var11 = new Array(1);
            var11[0] = var5;
            var10 = function() {
                var3 = _closure2_slot10;
                var2 = var3.set;
                var1 = 1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var37 = var13.bind(var20)(var10, var11);
            var13 = _closure1_slot5;
            var11 = var13.useCallback;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                var3 = _closure2_slot10;
                var2 = var3.set;
                var1 = 0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var36 = var11.bind(var13)(var5, var10);
            var5 = var19[var2];
            var11 = var17.bind(var4)(var5);
            var10 = var11.useAnimatedStyle;
            var5 = function V() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.withSpring;
                    var7 = _closure2_slot2;
                    var4 = var7.get;
                    var8 = var4.bind(var7)();
                    var4 = _closure1_slot10;
                    var7 = var4.EXPANDED;
                    var4 = 0;
                    if(!(var8 === var7)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var4 = 1;
case 15:
                    var3 = _closure1_slot12;
                    var3 = var5.bind(var6)(var4, var3);
                    var1['opacity'] = var3;
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.height;
                    var1['height'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var20 = var19[var15];
            var20 = var17.bind(var4)(var20);
            var20 = var20.withSpring;
            var13['withSpring'] = var20;
            var13['activeQuestDockMode'] = var18;
            var20 = _closure1_slot10;
            var13['QuestDockMode'] = var20;
            var20 = _closure1_slot12;
            var13['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = var20;
            var13['windowDimensions'] = var23;
            var5['__closure'] = var13;
            var13 = 7865007748928.0;
            var5['__workletHash'] = var13;
            var13 = _closure1_slot30;
            var5['__initData'] = var13;
            var11 = var10.bind(var11)(var5);
            var5 = var19[var2];
            var13 = var17.bind(var4)(var5);
            var10 = var13.useAnimatedProps;
            var5 = function F() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var2 = _closure1_slot10;
                    var3 = var2.EXPANDED;
                    var2 = 'none';
                    if(!(var4 === var3)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var2 = 'auto';
case 17:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var20['activeQuestDockMode'] = var18;
            var21 = _closure1_slot10;
            var20['QuestDockMode'] = var21;
            var5['__closure'] = var20;
            var20 = 7500348584538.0;
            var5['__workletHash'] = var20;
            var20 = _closure1_slot31;
            var5['__initData'] = var20;
            var10 = var10.bind(var13)(var5);
            var5 = var19[var2];
            var20 = var17.bind(var4)(var5);
            var13 = var20.useDerivedValue;
            var5 = function j() {
                var3 = _closure2_slot1;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var4 = _closure2_slot3;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var3 = var3.height;
                var2 = _closure2_slot6;
                var3 = var3 - var2;
                var2 = var1.height;
                var2 = var3 - var2;
                var1 = var1.y;
                var1 = var2 + var1;
                return var1;
            };
            var21 = {};
            var21['questDockWrapperSpecs'] = var8;
            var21['windowDimensions'] = var23;
            var21['safeAreaTop'] = var22;
            var5['__closure'] = var21;
            var21 = 1497371487400.0;
            var5['__workletHash'] = var21;
            var21 = _closure1_slot32;
            var5['__initData'] = var21;
            var5 = var13.bind(var20)(var5);
            var13 = _closure1_slot1;
            var3 = var19[var3];
            var3 = var13.bind(var4)(var3);
            var13 = var3.bind(var4)(var5);
            var3 = var19[var2];
            var20 = var17.bind(var4)(var3);
            var5 = var20.useAnimatedStyle;
            var3 = function z() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var7 = _closure2_slot2;
                    var6 = var7.get;
                    var7 = var6.bind(var7)();
                    var6 = _closure1_slot10;
                    var6 = var6.CLOSED;
                    if(!(var7 !== var6)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var6 = _closure2_slot2;
                    var3 = var6.get;
                    var7 = var3.bind(var6)();
                    var3 = _closure1_slot10;
                    var6 = var3.SOFT_DISMISSED;
                    var3 = 1;
                    if(!(var7 === var6)) { _fun0006_ip = 21; continue _fun0006 }
case 19:
                    var3 = 0;
case 21:
                    var2 = _closure1_slot12;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var21 = {};
            var22 = var19[var15];
            var22 = var17.bind(var4)(var22);
            var22 = var22.withSpring;
            var21['withSpring'] = var22;
            var21['activeQuestDockMode'] = var18;
            var22 = _closure1_slot10;
            var21['QuestDockMode'] = var22;
            var22 = _closure1_slot12;
            var21['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = var22;
            var3['__closure'] = var21;
            var21 = 5097935164793.0;
            var3['__workletHash'] = var21;
            var21 = _closure1_slot33;
            var3['__initData'] = var21;
            var31 = var5.bind(var20)(var3);
            var2 = var19[var2];
            var3 = var17.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function $() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot8;
                    if(var2) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var3 = _closure1_slot10;
                    var3 = var3.EXPANDED;
                    if(!(var4 === var3)) { _fun0007_ip = 22; continue _fun0007 }
case 24:
                    var2 = _closure1_slot16;
                    _fun0007_ip = 25; continue _fun0007;
case 22:
                    var2 = _closure1_slot15;
case 25:
                    var1['borderTopLeftRadius'] = var2;
                    var2 = _closure2_slot8;
                    if(var2) { _fun0007_ip = 26; continue _fun0007 }
case 15:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var3 = _closure1_slot10;
                    var3 = var3.EXPANDED;
                    if(!(var4 === var3)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var2 = _closure1_slot16;
                    _fun0007_ip = 28; continue _fun0007;
case 26:
                    var2 = _closure1_slot15;
case 28:
                    var1['borderTopRightRadius'] = var2;
                    var2 = _closure2_slot8;
                    if(var2) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var3 = _closure1_slot10;
                    var3 = var3.EXPANDED;
                    if(!(var4 === var3)) { _fun0007_ip = 29; continue _fun0007 }
case 31:
                    var2 = _closure1_slot16;
                    _fun0007_ip = 32; continue _fun0007;
case 29:
                    var4 = _closure2_slot7;
                    var3 = 0;
                    if(var4) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var3 = _closure1_slot15;
case 33:
                    var2 = var3;
case 32:
                    var1['borderBottomLeftRadius'] = var2;
                    var2 = _closure2_slot8;
                    if(var2) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var4 = var2.bind(var3)();
                    var3 = _closure1_slot10;
                    var3 = var3.EXPANDED;
                    if(!(var4 === var3)) { _fun0007_ip = 35; continue _fun0007 }
case 37:
                    var2 = _closure1_slot16;
                    _fun0007_ip = 38; continue _fun0007;
case 35:
                    var4 = _closure2_slot7;
                    var3 = 0;
                    if(var4) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                    var3 = _closure1_slot15;
case 39:
                    var2 = var3;
case 38:
                    var1['borderBottomRightRadius'] = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var11 = 12;
                    var2 = var2[var11];
                    var10 = undefined;
                    var6 = var3.bind(var10)(var2);
                    var4 = var6.withSpring;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var7 = var2.bind(var3)();
                    var2 = _closure1_slot10;
                    var2 = var2.COLLAPSED;
                    var3 = 0;
                    if(!(var7 === var2)) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                    var3 = 1;
case 41:
                    var2 = _closure1_slot14;
                    var2 = var4.bind(var6)(var3, var2);
                    var1['opacity'] = var2;
                    var2 = _closure2_slot8;
                    if(!var2) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot10;
                    var2 = var2.EXPANDED;
                    if(!(var3 !== var2)) { _fun0007_ip = 45; continue _fun0007 }
case 43:
                    var2 = _closure1_slot18;
                    _fun0007_ip = 46; continue _fun0007;
case 45:
                    var4 = _closure2_slot1;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = var3.height;
case 46:
                    var1['height'] = var2;
                    var2 = _closure2_slot8;
                    if(var2) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot10;
                    var2 = var2.COLLAPSED;
                    if(!(var3 !== var2)) { _fun0007_ip = 47; continue _fun0007 }
case 49:
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = var2.width;
                    var4 = _closure1_slot17;
                    var2 = 2;
                    var2 = var2 * var4;
                    var2 = var3 - var2;
                    _fun0007_ip = 50; continue _fun0007;
case 47:
                    var4 = _closure2_slot1;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = var3.width;
case 50:
                    var1['width'] = var2;
                    var3 = {};
                    var4 = _closure2_slot8;
                    var2 = 0;
                    if(var4) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var11];
                    var12 = var6.bind(var10)(var4);
                    var7 = var12.withSpring;
                    var6 = _closure2_slot2;
                    var4 = var6.get;
                    var13 = var4.bind(var6)();
                    var4 = _closure1_slot10;
                    var4 = var4.EXPANDED;
                    var6 = 0;
                    if(!(var13 === var4)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                    var6 = _closure1_slot17;
case 53:
                    var4 = _closure1_slot14;
                    var2 = var7.bind(var12)(var6, var4);
case 51:
                    var3['translateX'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var6 = _closure2_slot8;
                    var4 = 0;
                    if(var6) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var11];
                    var7 = var7.bind(var10)(var6);
                    var6 = var7.withSpring;
                    var10 = _closure2_slot2;
                    var9 = var10.get;
                    var10 = var9.bind(var10)();
                    var9 = _closure1_slot10;
                    var9 = var9.EXPANDED;
                    var8 = 0;
                    if(!(var10 === var9)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var8 = _closure1_slot17;
case 57:
                    var5 = _closure1_slot14;
                    var4 = var6.bind(var7)(var8, var5);
case 55:
                    var3['translateY'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var5['isEnrolled'] = var33;
            var5['activeQuestDockMode'] = var18;
            var18 = _closure1_slot10;
            var5['QuestDockMode'] = var18;
            var18 = _closure1_slot16;
            var5['QUEST_DOCK_CONTENT_BORDER_RADII'] = var18;
            var18 = _closure1_slot15;
            var5['QUEST_DOCK_BORDER_RADII'] = var18;
            var5['youBarEnabled'] = var16;
            var15 = var19[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.withSpring;
            var5['withSpring'] = var15;
            var15 = _closure1_slot14;
            var5['QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED'] = var15;
            var5['questDockWrapperSpecs'] = var8;
            var8 = _closure1_slot18;
            var5['QUEST_DOCK_COLLAPSED_HEIGHT'] = var8;
            var8 = _closure1_slot17;
            var5['QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED'] = var8;
            var1['__closure'] = var5;
            var5 = 2122856765844.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot34;
            var1['__initData'] = var5;
            var34 = var2.bind(var3)(var1);
            var3 = _closure1_slot22;
            var2 = _closure1_slot23;
            var1 = {};
            var15 = _closure1_slot21;
            var8 = _closure1_slot6;
            var5 = {};
            var16 = var35.wrapper;
            var5['style'] = var16;
            var29 = 'auto';
            var5['pointerEvents'] = var29;
            var18 = _closure1_slot21;
            var16 = 24;
            var16 = var19[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.AccessibilityViewAnimated;
            var16 = {};
            var16['nativeID'] = var7;
            var7 = var35.accessibilityWrapper;
            var16['style'] = var7;
            var7 = !var6;
            var6 = !var7;
            if(var7) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var6 = var32;
case 59:
            var16['accessibilityViewIsModal'] = var6;
            var16['onAccessibilityEscape'] = var12;
            var6 = 'box-none';
            var16['pointerEvents'] = var6;
            var21 = _closure1_slot21;
            var25 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 25;
            var6 = var7[var6];
            var20 = var25.bind(var4)(var6);
            var19 = {};
            var24 = _closure1_slot21;
            var6 = 26;
            var22 = var7[var6];
            var23 = var25.bind(var4)(var22);
            var22 = {};
            var22['style'] = var26;
            var27 = _closure1_slot22;
            var7 = var7[var6];
            var26 = var25.bind(var4)(var7);
            var25 = {};
            var28 = var35.questDockWrapper;
            var7 = new Array(2);
            var7[0] = var28;
            var7[1] = var14;
            var25['style'] = var7;
            var7 = _closure1_slot26;
            var25['layout'] = var7;
            var28 = _closure1_slot21;
            var14 = _closure1_slot7;
            var7 = {};
            var38 = var35.nestedPressable;
            var7['style'] = var38;
            var7['onPressIn'] = var37;
            var7['onPressOut'] = var36;
            var7['onPress'] = var30;
            if(!var32) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var29 = 'none';
case 61:
            var7['pointerEvents'] = var29;
            var29 = 'button';
            var7['accessibilityRole'] = var29;
            var37 = _closure1_slot0;
            var29 = _closure1_slot2;
            var39 = 27;
            var30 = var29[var39];
            var30 = var37.bind(var4)(var30);
            var36 = var30.intl;
            var30 = var36.string;
            var29 = var29[var39];
            var29 = var37.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.rjVPdM;
            var29 = var30.bind(var36)(var29);
            var7['accessibilityLabel'] = var29;
            var29 = '';
            if(var32) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var38 = _closure1_slot0;
            var30 = _closure1_slot2;
            var36 = var30[var39];
            var36 = var38.bind(var4)(var36);
            var37 = var36.intl;
            var36 = var37.string;
            var30 = var30[var39];
            var30 = var38.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.n0MlOB;
            var29 = var36.bind(var37)(var30);
case 63:
            var7['accessibilityHint'] = var29;
            var7 = var28.bind(var4)(var14, var7);
            var28 = new Array(4);
            var28[0] = var7;
            var29 = _closure1_slot21;
            var37 = _closure1_slot1;
            var39 = _closure1_slot2;
            var7 = var39[var6];
            var14 = var37.bind(var4)(var7);
            var7 = {};
            var36 = var35.questDockHeaderBorder;
            var30 = new Array(2);
            var30[0] = var36;
            var30[1] = var34;
            var7['style'] = var30;
            var30 = _closure1_slot26;
            var7['layout'] = var30;
            var30 = 'none';
            var7['pointerEvents'] = var30;
            var7 = var29.bind(var4)(var14, var7);
            var28[1] = var7;
            var29 = _closure1_slot22;
            var7 = var39[var6];
            var14 = var37.bind(var4)(var7);
            var7 = {};
            var34 = var35.questDockContentWrapper;
            var30 = new Array(2);
            var30[0] = var34;
            var30[1] = var31;
            var7['style'] = var30;
            var34 = _closure1_slot22;
            var31 = _closure1_slot6;
            var30 = {};
            var35 = var35.questDockContentWrapper;
            var30['style'] = var35;
            var38 = _closure1_slot21;
            var35 = 28;
            var35 = var39[var35];
            var36 = var37.bind(var4)(var35);
            var35 = {};
            var35['hideOnExpand'] = var33;
            var36 = var38.bind(var4)(var36, var35);
            var35 = new Array(2);
            var35[0] = var36;
            var38 = _closure1_slot21;
            var36 = 29;
            var36 = var39[var36];
            var37 = var37.bind(var4)(var36);
            var36 = {};
            var36 = var38.bind(var4)(var37, var36);
            var35[1] = var36;
            var30['children'] = var35;
            var31 = var34.bind(var4)(var31, var30);
            var30 = new Array(2);
            var30[0] = var31;
            var31 = !var33;
            if(var33) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var35 = _closure1_slot21;
            var34 = _closure1_slot1;
            var36 = _closure1_slot2;
            var33 = 30;
            var33 = var36[var33];
            var34 = var34.bind(var4)(var33);
            var33 = {};
            var31 = var35.bind(var4)(var34, var33);
case 65:
            var30[1] = var31;
            var7['children'] = var30;
            var7 = var29.bind(var4)(var14, var7);
            var28[2] = var7;
            var31 = _closure1_slot21;
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var29 = 31;
            var29 = var14[var29];
            var30 = var7.bind(var4)(var29);
            var29 = {};
            var29['isExpanded'] = var32;
            var29 = var31.bind(var4)(var30, var29);
            var28[3] = var29;
            var25['children'] = var28;
            var25 = var27.bind(var4)(var26, var25);
            var22['children'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var5['children'] = var16;
            var8 = var15.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot21;
            var6 = var14[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['style'] = var11;
            var6['animatedProps'] = var10;
            var11 = _closure1_slot21;
            var10 = _closure1_slot0;
            var9 = 32;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Backdrop;
            var9 = {};
            var9['onDismiss'] = var12;
            var12 = {};
            var12['height'] = var13;
            var9['accessibleDismissStyle'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function QuestDockModeChangeTracker(arg1) {
        var1 = arg1;
        var4 = var1.mode;
        var8 = var1.questId;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 33;
        var1 = var7[var1];
        var5 = undefined;
        var3 = var6.bind(var5)(var1);
        var2 = var3.useQuestBarOrDockModeChangeTracking;
        var1 = {};
        var1['mode'] = var4;
        var4 = 34;
        var9 = var7[var4];
        var9 = var6.bind(var5)(var9);
        var9 = var9.QuestContent;
        var9 = var9.QUEST_BAR_MOBILE;
        var1['questContent'] = var9;
        var1['questId'] = var8;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.QuestContent;
        var4 = var4.QUEST_BAR_MOBILE;
        var1['sourceQuestContent'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function QuestBarRenderedTriggerPointWrapper() {
        var4 = _closure1_slot5;
        var3 = var4.useEffect;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 35;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = var2.QuestBarRenderedTriggerPoint;
            var2 = var3.trigger;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = null;
        return var1;
    };
    var _closure1_slot40 = var1;
    var2 = function QuestDockWithEntranceAnimation() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot5;
            var2 = var3.useContext;
            var4 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 13;
            var1 = var14[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            var19 = var1.isVisible;
            var _closure2_slot0 = var19;
            var10 = var1.isVisibleToUser;
            var13 = var1.quest;
            var _closure2_slot1 = var13;
            var1 = _closure1_slot35;
            var7 = var1.bind(var5)();
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var4 = 0;
            var1 = {'width': 0, 'height': 0};
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot4;
            var17 = 2;
            var1 = var1.bind(var5)(var2, var17);
            var18 = var1[var4];
            var _closure2_slot2 = var18;
            var15 = 1;
            var1 = var1[var15];
            var _closure2_slot3 = var1;
            var12 = _closure1_slot0;
            var1 = 36;
            var1 = var14[var1];
            var8 = var12.bind(var5)(var1);
            var3 = var8.useStateFromStores;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot9;
                var1 = var1.prevRestingQuestDockMode;
                return var1;
            };
            var1 = var3.bind(var8)(var2, var1);
            var _closure2_slot4 = var1;
            var1 = 37;
            var1 = var14[var1];
            var3 = var12.bind(var5)(var1);
            var2 = var3.useIsEligibleForQuests;
            var1 = {};
            var8 = _closure1_slot11;
            var8 = var8.QUESTS_BAR;
            var1['location'] = var8;
            var11 = var2.bind(var3)(var1);
            var2 = 18;
            var1 = var14[var2];
            var8 = var12.bind(var5)(var1);
            var3 = var8.useAnimatedStyle;
            var1 = function D() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 12;
                    var3 = var3[var9];
                    var8 = undefined;
                    var11 = var4.bind(var8)(var3);
                    var10 = var11.withSpring;
                    var3 = _closure2_slot0;
                    var5 = 0;
                    if(!var3) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                    var5 = 1;
case 67:
                    var4 = _closure1_slot36;
                    var3 = 'animate-always';
                    var3 = var10.bind(var11)(var5, var4, var3);
                    var1['opacity'] = var3;
                    var3 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.withSpring;
                    var8 = _closure2_slot0;
                    var6 = 0;
                    if(var8) { _fun0009_ip = 28; continue _fun0009 }
case 69:
                    var7 = _closure2_slot2;
                    var6 = var7.height;
case 28:
                    var2 = _closure1_slot36;
                    var2 = var4.bind(var5)(var6, var2);
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var16 = {};
            var20 = 12;
            var20 = var14[var20];
            var20 = var12.bind(var5)(var20);
            var20 = var20.withSpring;
            var16['withSpring'] = var20;
            var16['isVisible'] = var19;
            var19 = _closure1_slot36;
            var16['ENTRANCE_ANIMATION_SPING_CONFIG'] = var19;
            var16['componentDimensions'] = var18;
            var1['__closure'] = var16;
            var16 = 4948945021130.0;
            var1['__workletHash'] = var16;
            var16 = _closure1_slot37;
            var1['__initData'] = var16;
            var8 = var3.bind(var8)(var1);
            var16 = _closure1_slot5;
            var3 = var16.useState;
            var1 = null;
            var16 = var3.bind(var16)(var1);
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)(var16, var17);
            var4 = var3[var4];
            var _closure2_slot5 = var4;
            var3 = var3[var15];
            var _closure2_slot6 = var3;
            var3 = 38;
            var15 = var14[var3];
            var16 = var12.bind(var5)(var15);
            var15 = var16.useQuestDockHeroAsset;
            var15 = var15.bind(var16)(var13);
            var16 = var15.staticUrl;
            var _closure2_slot7 = var16;
            var3 = var14[var3];
            var12 = var12.bind(var5)(var3);
            var3 = var12.useQuestGameLogotypeAssetUrl;
            var3 = var3.bind(var12)(var13);
            var _closure2_slot8 = var3;
            var14 = var13.userStatus;
            var15 = var1 == var14;
            var12 = undefined;
            if(var15) { _fun0008_ip = 70; continue _fun0008 }
case 71:
            var12 = var14.enrolledAt;
case 70:
            var12 = var1 != var12;
            var _closure2_slot9 = var12;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 39;
            var12 = var19[var12];
            var15 = var14.bind(var5)(var12);
            var12 = var15.useGradientBottom;
            var15 = var12.bind(var15)();
            var12 = 40;
            var12 = var19[var12];
            var17 = var14.bind(var5)(var12);
            var14 = var17.useToken;
            var18 = _closure1_slot1;
            var12 = 11;
            var12 = var19[var12];
            var12 = var18.bind(var5)(var12);
            var12 = var12.colors;
            var12 = var12.BACKGROUND_SURFACE_HIGH;
            var12 = var14.bind(var17)(var12);
            var17 = var1 == var15;
            var14 = undefined;
            if(var17) { _fun0008_ip = 72; continue _fun0008 }
case 73:
            var14 = var15.backgroundColor;
case 72:
            if(!(var1 != var14)) { _fun0008_ip = 74; continue _fun0008 }
case 75:
            var12 = var14;
case 74:
            var _closure2_slot10 = var12;
            var15 = _closure1_slot5;
            var14 = var15.useEffect;
            var12 = new Array(3);
            var12[0] = var16;
            var12[1] = var3;
            var3 = var13.id;
            var12[2] = var3;
            var3 = function() {
                var2 = function prefetchWithErrorReporting(arg1) {
                    var1 = undefined;
                    var4 = _closure3_slot1;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot0 = var2;
                var2 = function _prefetchWithErrorReporting() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                                var6 = arg1;
case 78: // try_start_0
                                var4 = _closure1_slot8;
                                var3 = var4.prefetch;
                                var2 = var6;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=38);
case 79:
                                return var2;
case 80:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0010_ip = 81; continue _fun0010 }
case 68: // try_end0
                                var3 = true;
                                return var3;
case 81:
                                return var2;
case 82: // catch_target0
                                CatchBlockStart(arg_register=1);
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 41;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.track;
                                var2 = _closure1_slot19;
                                var3 = var2.QUEST_ASSET_LOADING_FAILURE;
                                var2 = {};
                                var7 = _closure1_slot11;
                                var7 = var7.QUESTS_BAR_MOBILE;
                                var2['source'] = var7;
                                var7 = _closure2_slot1;
                                var7 = var7.id;
                                var2['quest_id'] = var7;
                                var2['asset_id'] = var6;
                                var2 = var4.bind(var5)(var3, var2);
                                var2 = false;
                                return var2;
case 76:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot1 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot1 = var2;
                var2 = function _preloadQuestDockAssets() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0011_ip = 83; continue _fun0011 }
case 77:
                                var5 = new Array(0);
                                var2 = _closure2_slot7;
                                var4 = null;
                                if(!(var4 != var2)) { _fun0011_ip = 25; continue _fun0011 }
case 84:
                                var6 = var5.push;
                                var8 = _closure3_slot0;
                                var7 = _closure2_slot7;
                                var2 = undefined;
                                var2 = var8.bind(var2)(var7);
                                var2 = var6.bind(var5)(var2);
case 25:
                                var2 = _closure2_slot8;
                                if(!(var4 != var2)) { _fun0011_ip = 85; continue _fun0011 }
case 86:
                                var4 = var5.push;
                                var7 = _closure3_slot0;
                                var6 = _closure2_slot8;
                                var2 = undefined;
                                var2 = var7.bind(var2)(var6);
                                var2 = var4.bind(var5)(var2);
case 85:
                                var2 = global;
                                var4 = var2.Promise;
                                var2 = var4.all;
                                var2 = var2.bind(var4)(var5);
                                SaveGenerator(address=114);
case 12:
                                return var2;
case 87:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0011_ip = 88; continue _fun0011 }
case 89:
                                var5 = _closure2_slot6;
                                var4 = var2.every;
                                var3 = function(arg1) {
                                    var2 = true;
                                    var1 = arg1;
                                    var1 = var2 === var1;
                                    return var1;
                                };
                                var4 = var4.bind(var2)(var3);
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                return var3;
case 88:
                                return var2;
case 83:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot2 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot2 = var2;
                var2 = function preloadQuestDockAssets() {
                    var1 = undefined;
                    var4 = _closure3_slot2;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = !var2;
                return var1;
            };
            var3 = var14.bind(var15)(var3, var12);
            var15 = _closure1_slot5;
            var14 = var15.useEffect;
            var12 = new Array(2);
            var12[0] = var4;
            var3 = var13.id;
            var12[1] = var3;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = false;
                    if(!(var1 === var2)) { _fun0012_ip = 90; continue _fun0012 }
case 91:
                    var2 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var1 = 42;
                    var1 = var11[var1];
                    var10 = undefined;
                    var3 = var2.bind(var10)(var1);
                    var2 = var3.increment;
                    var1 = {};
                    var9 = _closure1_slot0;
                    var5 = 43;
                    var5 = var11[var5];
                    var5 = var9.bind(var10)(var5);
                    var5 = var5.MetricEvents;
                    var5 = var5.QUEST_CONTENT_RENDERING_FAILURE;
                    var1['name'] = var5;
                    var4 = _closure2_slot1;
                    var7 = var4.id;
                    var5 = global;
                    var4 = var5.HermesInternal;
                    var6 = var4.concat;
                    var4 = 'quest_id:';
                    var6 = var6.bind(var4)(var7);
                    var4 = new Array(3);
                    var4[0] = var6;
                    var6 = 44;
                    var6 = var11[var6];
                    var8 = var9.bind(var10)(var6);
                    var7 = var8.getQuestContentName;
                    var6 = 34;
                    var6 = var11[var6];
                    var6 = var9.bind(var10)(var6);
                    var6 = var6.QuestContent;
                    var6 = var6.QUEST_BAR_MOBILE;
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
case 90:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var14.bind(var15)(var3, var12);
            var3 = var1 == var13;
            if(var3) { _fun0008_ip = 92; continue _fun0008 }
case 93:
            var3 = !var11;
case 92:
            if(var3) { _fun0008_ip = 94; continue _fun0008 }
case 95:
            var3 = !var4;
case 94:
            var _closure2_slot11 = var3;
            var14 = _closure1_slot5;
            var12 = var14.useEffect;
            var11 = new Array(1);
            var11[0] = var3;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 45;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.updateQuestDockVisibilityOverride;
                var1 = {};
                var4 = _closure2_slot11;
                var4 = !var4;
                var1['isVisible'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 45;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateQuestDockVisibilityOverride;
                    var2 = {};
                    var5 = false;
                    var2['isVisible'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                return var1;
            };
            var4 = var12.bind(var14)(var4, var11);
            var1 = null;
            if(var3) { _fun0008_ip = 96; continue _fun0008 }
case 97:
            var4 = _closure1_slot21;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = var12[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var11 = 'box-none';
            var2['pointerEvents'] = var11;
            var11 = var7.wrapperAnimated;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var8;
            var2['style'] = var7;
            var7 = function onLayout(arg1) {
                var1 = arg1;
                var3 = _closure2_slot3;
                var2 = {};
                var4 = var1.nativeEvent;
                var4 = var4.layout;
                var4 = var4.height;
                var2['height'] = var4;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.width;
                var2['width'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onLayout'] = var7;
            var8 = _closure1_slot21;
            var11 = _closure1_slot0;
            var6 = 46;
            var6 = var12[var6];
            var6 = var11.bind(var5)(var6);
            var7 = var6.QuestContentImpressionTrackerNative;
            var6 = {};
            var6['overrideVisibility'] = var10;
            var10 = 34;
            var14 = var12[var10];
            var14 = var11.bind(var5)(var14);
            var14 = var14.QuestContent;
            var14 = var14.QUEST_BAR_MOBILE;
            var6['questContent'] = var14;
            var6['questOrQuests'] = var13;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.QuestContent;
            var10 = var10.QUEST_BAR_MOBILE;
            var6['sourceQuestContent'] = var10;
            var9 = function children() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = _closure1_slot22;
                    var3 = _closure1_slot23;
                    var2 = {};
                    var7 = _closure1_slot21;
                    var6 = _closure1_slot39;
                    var5 = {};
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var5['questId'] = var1;
                    var1 = _closure2_slot4;
                    var5['mode'] = var1;
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6, var5);
                    var5 = new Array(3);
                    var5[0] = var6;
                    var8 = _closure1_slot21;
                    var7 = _closure1_slot40;
                    var6 = {};
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var8 = _closure1_slot21;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var6 = 14;
                    var6 = var13[var6];
                    var6 = var10.bind(var1)(var6);
                    var7 = var6.QuestDockGestureContextProvider;
                    var6 = {};
                    var11 = _closure1_slot21;
                    var9 = 47;
                    var9 = var13[var9];
                    var9 = var10.bind(var1)(var9);
                    var10 = var9.ThemeContextProvider;
                    var9 = {};
                    var14 = _closure2_slot9;
                    var13 = undefined;
                    if(var14) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                    var14 = _closure1_slot20;
                    var13 = var14.DARK;
case 98:
                    var9['theme'] = var13;
                    var14 = _closure1_slot21;
                    var13 = _closure1_slot38;
                    var12 = {};
                    var15 = _closure2_slot10;
                    var12['appThemedBackgroundColor'] = var15;
                    var12 = var14.bind(var1)(var13, var12);
                    var9['children'] = var12;
                    var9 = var11.bind(var1)(var10, var9);
                    var6['children'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[2] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 96:
            return var1;
        }
    };
    var _closure1_slot41 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var10 = true;
    var5['value'] = var10;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var19.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var20 = 1;
    var5 = var7[var20];
    var5 = var19.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var8 = var7[var5];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.View;
    var _closure1_slot6 = var9;
    var16 = var5.StyleSheet;
    var9 = var5.Pressable;
    var _closure1_slot7 = var9;
    var5 = var5.Image;
    var _closure1_slot8 = var5;
    var18 = 4;
    var5 = var7[var18];
    var5 = var19.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var17 = 5;
    var5 = var7[var17];
    var5 = var6.bind(var1)(var5);
    var9 = var5.QuestDockMode;
    var _closure1_slot10 = var9;
    var5 = var5.QuestsExperimentLocations;
    var _closure1_slot11 = var5;
    var15 = 6;
    var5 = var7[var15];
    var5 = var6.bind(var1)(var5);
    var9 = var5.QUEST_DOCK_MODE_CHANGE_PHYSICS;
    var _closure1_slot12 = var9;
    var9 = var5.QUEST_DOCK_HEIGHT_CHANGE_PHYSICS;
    var _closure1_slot13 = var9;
    var9 = var5.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
    var _closure1_slot14 = var9;
    var21 = var5.QUEST_DOCK_BORDER_RADII;
    var _closure1_slot15 = var21;
    var9 = var5.QUEST_DOCK_CONTENT_BORDER_RADII;
    var _closure1_slot16 = var9;
    var9 = var5.QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
    var _closure1_slot17 = var9;
    var5 = var5.QUEST_DOCK_COLLAPSED_HEIGHT;
    var _closure1_slot18 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot19 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ThemeTypes;
    var _closure1_slot20 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot21 = var9;
    var9 = var5.jsxs;
    var _closure1_slot22 = var9;
    var5 = var5.Fragment;
    var _closure1_slot23 = var5;
    var5 = 10;
    var9 = var7[var5];
    var12 = var6.bind(var1)(var9);
    var11 = var12.createStyles;
    var9 = {};
    var13 = {'position': 'absolute', 'left': '50%', 'bottom': 0, 'zIndex': 1};
    var9['wrapper'] = var13;
    var13 = {};
    var24 = var16.absoluteFillObject;
    var25 = var13;
    var14 = copyDataProperties(var25, var24);
    var14 = 'zIndex';
    var13[var14] = var20;
    var9['accessibilityWrapper'] = var13;
    var13 = {'position': 'absolute', 'bottom': 0, 'left': '50%', 'overflow': 'hidden', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'zIndex': 1};
    var13['borderRadius'] = var21;
    var9['questDockWrapper'] = var13;
    var13 = {};
    var24 = var16.absoluteFillObject;
    var25 = var13;
    var21 = copyDataProperties(var25, var24);
    var22 = 'flex-end';
    var21 = 'justifyContent';
    var13[var21] = var22;
    var13[var14] = var18;
    var9['questDockContentWrapper'] = var13;
    var13 = {};
    var24 = var16.absoluteFillObject;
    var25 = var13;
    var18 = copyDataProperties(var25, var24);
    var18 = 'bottom';
    var13[var18] = var1;
    var18 = 'right';
    var13[var18] = var1;
    var18 = 'borderWidth';
    var13[var18] = var20;
    var18 = 11;
    var18 = var7[var18];
    var18 = var19.bind(var1)(var18);
    var18 = var18.colors;
    var19 = var18.BORDER_SUBTLE;
    var18 = 'borderColor';
    var13[var18] = var19;
    var13[var14] = var17;
    var9['questDockHeaderBorder'] = var13;
    var13 = {};
    var24 = var16.absoluteFillObject;
    var25 = var13;
    var16 = copyDataProperties(var25, var24);
    var13[var14] = var15;
    var9['nestedPressable'] = var13;
    var9 = var11.bind(var12)(var9);
    var _closure1_slot24 = var9;
    var9 = {};
    var11 = 'function dimensionsLayoutTransition_QuestDockTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS,QUEST_DOCK_HEIGHT_CHANGE_PHYSICS}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:withSpring(values.targetHeight,QUEST_DOCK_HEIGHT_CHANGE_PHYSICS),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS)}};}';
    var9['code'] = var11;
    var _closure1_slot25 = var9;
    var9 = function() {
        var1 = function dimensionsLayoutTransition(arg1) {
            var4 = arg1;
            var1 = {};
            var2 = {};
            var3 = var4.currentOriginX;
            var2['originX'] = var3;
            var3 = var4.currentOriginY;
            var2['originY'] = var3;
            var3 = var4.currentWidth;
            var2['width'] = var3;
            var3 = var4.currentHeight;
            var2['height'] = var3;
            var1['initialValues'] = var2;
            var2 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 12;
            var9 = var8[var5];
            var6 = undefined;
            var12 = var7.bind(var6)(var9);
            var11 = var12.withSpring;
            var10 = var4.targetOriginX;
            var9 = _closure1_slot12;
            var9 = var11.bind(var12)(var10, var9);
            var2['originX'] = var9;
            var9 = var8[var5];
            var12 = var7.bind(var6)(var9);
            var11 = var12.withSpring;
            var10 = var4.targetOriginY;
            var9 = _closure1_slot12;
            var9 = var11.bind(var12)(var10, var9);
            var2['originY'] = var9;
            var9 = var8[var5];
            var12 = var7.bind(var6)(var9);
            var11 = var12.withSpring;
            var10 = var4.targetHeight;
            var9 = _closure1_slot13;
            var9 = var11.bind(var12)(var10, var9);
            var2['height'] = var9;
            var5 = var8[var5];
            var6 = var7.bind(var6)(var5);
            var5 = var6.withSpring;
            var4 = var4.targetWidth;
            var3 = _closure1_slot12;
            var3 = var5.bind(var6)(var4, var3);
            var2['width'] = var3;
            var1['animations'] = var2;
            return var1;
        };
        var3 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 12;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.withSpring;
        var3['withSpring'] = var4;
        var4 = _closure1_slot12;
        var3['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = var4;
        var4 = _closure1_slot13;
        var3['QUEST_DOCK_HEIGHT_CHANGE_PHYSICS'] = var4;
        var1['__closure'] = var3;
        var3 = 8925051582191.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot25;
        var1['__initData'] = var2;
        return var1;
    };
    var9 = var9.bind(var1)();
    var _closure1_slot26 = var9;
    var9 = {};
    var11 = 'function QuestDockTsx2(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}';
    var9['code'] = var11;
    var _closure1_slot27 = var9;
    var9 = {};
    var11 = 'function QuestDockTsx3(){const{appThemedBackgroundColor,withSpring,activeQuestDockMode,QuestDockMode,youBarEnabled,QUEST_DOCK_BORDER_RADII,interpolate,questDockOffset,Extrapolation,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,roundToNearestPixel,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:appThemedBackgroundColor,borderBottomRightRadius:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED&&!youBarEnabled?QUEST_DOCK_BORDER_RADII:interpolate(questDockOffset.get(),[0,50],[0,QUEST_DOCK_BORDER_RADII],Extrapolation.CLAMP),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED&&!youBarEnabled?QUEST_DOCK_BORDER_RADII:interpolate(questDockOffset.get(),[0,50],[0,QUEST_DOCK_BORDER_RADII],Extrapolation.CLAMP),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}';
    var9['code'] = var11;
    var _closure1_slot28 = var9;
    var9 = {};
    var11 = 'function QuestDockTsx4(){const{withSpring,interpolate,isPressed,activeQuestDockMode,QuestDockMode,youBarEnabled,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[activeQuestDockMode.get()===QuestDockMode.EXPANDED||youBarEnabled?1:0.98,1]),springStandard)}]};}';
    var9['code'] = var11;
    var _closure1_slot29 = var9;
    var9 = {};
    var11 = 'function QuestDockTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}';
    var9['code'] = var11;
    var _closure1_slot30 = var9;
    var9 = {};
    var11 = "function QuestDockTsx6(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}";
    var9['code'] = var11;
    var _closure1_slot31 = var9;
    var9 = {};
    var11 = 'function QuestDockTsx7(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height+specs.y;}';
    var9['code'] = var11;
    var _closure1_slot32 = var9;
    var9 = {};
    var11 = 'function QuestDockTsx8(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}';
    var9['code'] = var11;
    var _closure1_slot33 = var9;
    var9 = {};
    var11 = 'function QuestDockTsx9(){const{isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,QUEST_DOCK_BORDER_RADII,youBarEnabled,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:QUEST_DOCK_BORDER_RADII,borderTopRightRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:QUEST_DOCK_BORDER_RADII,borderBottomLeftRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:youBarEnabled?0:QUEST_DOCK_BORDER_RADII,borderBottomRightRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:youBarEnabled?0:QUEST_DOCK_BORDER_RADII,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().height:QUEST_DOCK_COLLAPSED_HEIGHT,width:isEnrolled||activeQuestDockMode.get()===QuestDockMode.COLLAPSED?questDockWrapperSpecs.get().width:questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2,transform:[{translateX:isEnrolled?0:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:isEnrolled?0:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}';
    var9['code'] = var11;
    var _closure1_slot34 = var9;
    var5 = var7[var5];
    var11 = var6.bind(var1)(var5);
    var9 = var11.createStyles;
    var5 = function() {
        var1 = {};
        var2 = {'position': 'absolute', 'bottom': 0, 'padding': 0, 'width': '100%'};
        var1['wrapperAnimated'] = var2;
        return var1;
    };
    var5 = var9.bind(var11)(var5);
    var _closure1_slot35 = var5;
    var5 = {};
    var9 = 23;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var24 = var9.SUBTLE_SPRING;
    var25 = var5;
    var9 = copyDataProperties(var25, var24);
    var9 = 'overshootClamping';
    var5[var9] = var10;
    var10 = 54;
    var9 = 'damping';
    var5[var9] = var10;
    var _closure1_slot36 = var5;
    var5 = {};
    var9 = "function QuestDockTsx10(){const{withSpring,isVisible,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isVisible?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isVisible?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}";
    var5['code'] = var9;
    var _closure1_slot37 = var5;
    var5 = var8.memo;
    var4 = function QuestDockWithQuestContext() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 38;
            var4 = var3[var1];
            var5 = undefined;
            var7 = var2.bind(var5)(var4);
            var4 = var7.useMobileQuestDock;
            var8 = var4.bind(var7)();
            var4 = var3[var1];
            var7 = var2.bind(var5)(var4);
            var4 = var7.useIsMobileQuestDockVisibleBase;
            var10 = var4.bind(var7)(var8);
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useIsMobileQuestDockVisibleToUser;
            var9 = var1.bind(var2)(var8, var10);
            var1 = null;
            var2 = var1 == var8;
            if(var2) { _fun0014_ip = 100; continue _fun0014 }
case 101:
            var4 = _closure1_slot21;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 13;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Provider;
            var2 = {};
            var7 = {};
            var7['isVisible'] = var10;
            var7['isVisibleToUser'] = var9;
            var7['quest'] = var8;
            var2['value'] = var7;
            var8 = _closure1_slot21;
            var7 = _closure1_slot41;
            var6 = {};
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 100:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 48;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/QuestDock/QuestDock.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['QuestDockWithEntranceAnimation'] = var2;
    return var1;
})();