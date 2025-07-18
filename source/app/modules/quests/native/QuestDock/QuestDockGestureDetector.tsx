// app/modules/quests/native/QuestDock/QuestDockGestureDetector.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function useQuestDockSwipeGesture() {
        var4 = _closure1_slot3;
        var3 = var4.useContext;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 4;
        var1 = var11[var1];
        var9 = undefined;
        var1 = var10.bind(var9)(var1);
        var1 = var1.QuestDockGestureContext;
        var1 = var3.bind(var4)(var1);
        var13 = var1.questDockWrapperSpecs;
        var _closure2_slot0 = var13;
        var12 = var1.activeQuestDockMode;
        var _closure2_slot1 = var12;
        var14 = var1.windowDimensions;
        var _closure2_slot2 = var14;
        var1 = var1.minExpandedContentHeight;
        var _closure2_slot3 = var1;
        var4 = _closure1_slot1;
        var3 = 5;
        var3 = var11[var3];
        var3 = var4.bind(var9)(var3);
        var16 = var3.bind(var9)();
        var _closure2_slot4 = var16;
        var5 = _closure1_slot3;
        var4 = var5.useContext;
        var3 = 6;
        var3 = var11[var3];
        var3 = var10.bind(var9)(var3);
        var3 = var3.QuestDockExternalCoordinationContext;
        var3 = var4.bind(var5)(var3);
        var18 = var3.restingQuestDockMode;
        var _closure2_slot5 = var18;
        var7 = var3.setRestingQuestDockMode;
        var _closure2_slot6 = var7;
        var8 = 7;
        var3 = var11[var8];
        var15 = var10.bind(var9)(var3);
        var4 = var15.useSharedValue;
        var3 = {'absoluteX': 0, 'absoluteY': 0, 'x': 0, 'y': 0, 'height': 0, 'isDrawer': null, 'active': false};
        var5 = 0;
        var17 = var18.get;
        var19 = var17.bind(var18)();
        var17 = _closure1_slot4;
        var17 = var17.EXPANDED;
        var17 = var19 === var17;
        var3['isDrawer'] = var17;
        var17 = var4.bind(var15)(var3);
        var _closure2_slot7 = var17;
        var3 = var11[var8];
        var4 = var10.bind(var9)(var3);
        var3 = var4.useSharedValue;
        var15 = var3.bind(var4)(var5);
        var _closure2_slot8 = var15;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(9);
        var3[0] = var18;
        var3[1] = var17;
        var3[2] = var16;
        var3[3] = var15;
        var3[4] = var14;
        var3[5] = var13;
        var3[6] = var7;
        var3[7] = var12;
        var3[8] = var1;
        var1 = function() {
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var15 = 8;
            var2 = var10[var15];
            var8 = undefined;
            var2 = var9.bind(var8)(var2);
            var3 = var2.Gesture;
            var2 = var3.Pan;
            var3 = var2.bind(var3)();
            var2 = var3.manualActivation;
            var5 = false;
            var6 = var2.bind(var3)(var5);
            var3 = var6.maxPointers;
            var2 = 1;
            var3 = var3.bind(var6)(var2);
            var2 = var3.shouldCancelWhenOutside;
            var5 = var2.bind(var3)(var5);
            var3 = var5.onTouchesDown;
            var2 = function A(arg1) {
                var5 = arg1;
                var2 = _closure2_slot8;
                var1 = var2.set;
                var6 = 0;
                var1 = var1.bind(var2)(var6);
                var3 = _closure2_slot7;
                var2 = var3.set;
                var1 = {};
                var7 = var5.changedTouches;
                var7 = var7[var6];
                var7 = var7.absoluteX;
                var1['absoluteX'] = var7;
                var5 = var5.changedTouches;
                var5 = var5[var6];
                var5 = var5.absoluteY;
                var1['absoluteY'] = var5;
                var6 = _closure2_slot0;
                var5 = var6.get;
                var5 = var5.bind(var6)();
                var5 = var5.x;
                var1['x'] = var5;
                var5 = var6.get;
                var5 = var5.bind(var6)();
                var5 = var5.y;
                var1['y'] = var5;
                var5 = var6.get;
                var5 = var5.bind(var6)();
                var5 = var5.height;
                var1['height'] = var5;
                var5 = _closure2_slot5;
                var4 = var5.get;
                var5 = var4.bind(var5)();
                var4 = _closure1_slot4;
                var4 = var4.EXPANDED;
                var4 = var5 === var4;
                var1['isDrawer'] = var4;
                var4 = false;
                var1['active'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var13 = {};
            var14 = _closure2_slot8;
            var13['touchMoveCount'] = var14;
            var11 = _closure2_slot7;
            var13['initialGestureOffset'] = var11;
            var7 = _closure2_slot0;
            var13['questDockWrapperSpecs'] = var7;
            var12 = _closure2_slot5;
            var13['restingQuestDockMode'] = var12;
            var16 = _closure1_slot4;
            var13['QuestDockMode'] = var16;
            var2['__closure'] = var13;
            var13 = 15649211210155.0;
            var2['__workletHash'] = var13;
            var13 = _closure1_slot21;
            var2['__initData'] = var13;
            var5 = var3.bind(var5)(var2);
            var3 = var5.onTouchesMove;
            var2 = function k(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.state;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.State;
                    var3 = var3.BEGAN;
                    if(!(var4 === var3)) { _fun0001_ip = 620; continue _fun0001 }
 52:
                    var4 = _closure2_slot7;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var3 = var3.active;
                    if(var3) { _fun0001_ip = 620; continue _fun0001 }
 80:
                    var4 = _closure2_slot8;
                    var7 = var4.set;
                    var3 = var4.get;
                    var8 = var3.bind(var4)();
                    var3 = 1;
                    var3 = var8 + var3;
                    var3 = var7.bind(var4)(var3);
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot13;
                    var3 = var4 <= var3;
                    var2 = var2.changedTouches;
                    var10 = 0;
                    var2 = var2[var10];
                    var7 = var2.absoluteY;
                    var8 = var2.absoluteX;
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var2 = var2.absoluteY;
                    var4 = var2 - var7;
                    var2 = global;
                    var9 = var2.Math;
                    var2 = var9.abs;
                    var9 = var2.bind(var9)(var4);
                    var11 = _closure2_slot5;
                    var2 = var11.get;
                    var11 = var2.bind(var11)();
                    var2 = _closure1_slot4;
                    var2 = var2.EXPANDED;
                    var2 = var11 === var2;
                    if(!var2) { _fun0001_ip = 226; continue _fun0001 }
 223:
                    var2 = var3;
 226:
                    if(!var2) { _fun0001_ip = 233; continue _fun0001 }
 229:
                    var2 = var4 >= var10;
 233:
                    if(var2) { _fun0001_ip = 620; continue _fun0001 }
 239:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot4;
                    var2 = var2.COLLAPSED;
                    var2 = var3 === var2;
                    if(!var2) { _fun0001_ip = 277; continue _fun0001 }
 269:
                    var3 = _closure1_slot8;
                    var2 = var4 > var3;
 277:
                    if(var2) { _fun0001_ip = 338; continue _fun0001 }
 280:
                    var11 = _closure2_slot5;
                    var3 = var11.get;
                    var11 = var3.bind(var11)();
                    var3 = _closure1_slot4;
                    var3 = var3.EXPANDED;
                    var3 = var11 === var3;
                    if(!var3) { _fun0001_ip = 335; continue _fun0001 }
 310:
                    var11 = _closure1_slot8;
                    var11 = -var11;
                    var11 = var4 < var11;
                    if(var11) { _fun0001_ip = 332; continue _fun0001 }
 324:
                    var12 = _closure1_slot8;
                    var11 = var4 > var12;
 332:
                    var3 = var11;
 335:
                    var2 = var3;
 338:
                    if(var2) { _fun0001_ip = 389; continue _fun0001 }
 341:
                    var11 = _closure2_slot5;
                    var3 = var11.get;
                    var11 = var3.bind(var11)();
                    var3 = _closure1_slot4;
                    var3 = var3.COLLAPSED;
                    var3 = var11 === var3;
                    if(!var3) { _fun0001_ip = 375; continue _fun0001 }
 371:
                    var3 = var4 < var10;
 375:
                    if(!var3) { _fun0001_ip = 386; continue _fun0001 }
 378:
                    var11 = _closure1_slot9;
                    var3 = var9 > var11;
 386:
                    var2 = var3;
 389:
                    if(var2) { _fun0001_ip = 440; continue _fun0001 }
 392:
                    var11 = _closure2_slot5;
                    var3 = var11.get;
                    var11 = var3.bind(var11)();
                    var3 = _closure1_slot4;
                    var3 = var3.CLOSED;
                    var3 = var11 === var3;
                    if(!var3) { _fun0001_ip = 426; continue _fun0001 }
 422:
                    var3 = var4 > var10;
 426:
                    if(!var3) { _fun0001_ip = 437; continue _fun0001 }
 429:
                    var11 = _closure1_slot9;
                    var3 = var4 > var11;
 437:
                    var2 = var3;
 440:
                    if(var2) { _fun0001_ip = 491; continue _fun0001 }
 443:
                    var11 = _closure2_slot5;
                    var3 = var11.get;
                    var11 = var3.bind(var11)();
                    var3 = _closure1_slot4;
                    var3 = var3.CLOSED;
                    var3 = var11 === var3;
                    if(!var3) { _fun0001_ip = 477; continue _fun0001 }
 473:
                    var3 = var4 < var10;
 477:
                    if(!var3) { _fun0001_ip = 488; continue _fun0001 }
 480:
                    var4 = _closure1_slot9;
                    var3 = var9 > var4;
 488:
                    var2 = var3;
 491:
                    if(!var2) { _fun0001_ip = 620; continue _fun0001 }
 497:
                    var4 = _closure2_slot7;
                    var3 = var4.set;
                    var2 = {};
                    var2['absoluteX'] = var8;
                    var2['absoluteY'] = var7;
                    var8 = _closure2_slot0;
                    var7 = var8.get;
                    var7 = var7.bind(var8)();
                    var7 = var7.x;
                    var2['x'] = var7;
                    var7 = var8.get;
                    var7 = var7.bind(var8)();
                    var7 = var7.y;
                    var2['y'] = var7;
                    var7 = var8.get;
                    var7 = var7.bind(var8)();
                    var7 = var7.height;
                    var2['height'] = var7;
                    var7 = _closure2_slot5;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var5 = _closure1_slot4;
                    var5 = var5.EXPANDED;
                    var5 = var6 === var5;
                    var2['isDrawer'] = var5;
                    var5 = true;
                    var2['active'] = var5;
                    var2 = var3.bind(var4)(var2);
 620:
                    return var1;
                }
            };
            var13 = {};
            var15 = var10[var15];
            var15 = var9.bind(var8)(var15);
            var15 = var15.State;
            var13['State'] = var15;
            var13['initialGestureOffset'] = var11;
            var13['touchMoveCount'] = var14;
            var14 = _closure1_slot13;
            var13['QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD'] = var14;
            var13['restingQuestDockMode'] = var12;
            var14 = _closure1_slot4;
            var13['QuestDockMode'] = var14;
            var14 = _closure1_slot8;
            var13['QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM'] = var14;
            var14 = _closure1_slot9;
            var13['QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM'] = var14;
            var13['questDockWrapperSpecs'] = var7;
            var2['__closure'] = var13;
            var13 = 16451041821957.0;
            var2['__workletHash'] = var13;
            var13 = _closure1_slot20;
            var2['__initData'] = var13;
            var5 = var3.bind(var5)(var2);
            var3 = var5.onChange;
            var2 = function o(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.absoluteY;
                    var5 = _closure2_slot7;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1.absoluteY;
                    var7 = var3 - var1;
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var4 = var1.height;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var1 = var1.y;
                    var1 = var4 - var1;
                    var1 = var1 - var7;
                    var4 = var1 > var3;
                    if(!var4) { _fun0002_ip = 121; continue _fun0002 }
 91:
                    var6 = _closure2_slot1;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var5 = _closure1_slot4;
                    var5 = var5.EXPANDED;
                    var4 = var6 === var5;
 121:
                    var10 = var1;
                    if(!var4) { _fun0002_ip = 146; continue _fun0002 }
 127:
                    var4 = var1 - var3;
                    var1 = _closure1_slot16;
                    var1 = var4 * var1;
                    var10 = var3 + var1;
 146:
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var6 = 0;
                    if(!(!(var1 > var6))) { _fun0002_ip = 174; continue _fun0002 }
 165:
                    var1 = _closure1_slot10;
                    _fun0002_ip = 213; continue _fun0002;
 174:
                    var3 = global;
                    var8 = var3.Math;
                    var5 = var8.min;
                    var4 = _closure2_slot3;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot10;
                    var1 = var5.bind(var8)(var4, var3);
 213:
                    if(!(!(var10 >= var1))) { _fun0002_ip = 980; continue _fun0002 }
 220:
                    var3 = _closure1_slot11;
                    if(!(!(var10 < var3))) { _fun0002_ip = 686; continue _fun0002 }
 234:
                    var3 = _closure1_slot10;
                    var12 = var10 / var3;
                    var3 = _closure1_slot5;
                    var3 = var10 - var3;
                    var9 = -1;
                    var11 = var9 * var3;
                    var4 = _closure2_slot7;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var3 = var3.isDrawer;
                    if(!var3) { _fun0002_ip = 325; continue _fun0002 }
 282:
                    var5 = _closure2_slot7;
                    var4 = var5.set;
                    var3 = {};
                    var8 = var5.get;
                    var17 = var8.bind(var5)();
                    var18 = var3;
                    var8 = copyDataProperties(var18, var17);
                    var13 = false;
                    var8 = 'isDrawer';
                    var3[var8] = var13;
                    var3 = var4.bind(var5)(var3);
 325:
                    var4 = _closure1_slot5;
                    var5 = _closure2_slot0;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var3 = var3.height;
                    var3 = var4 !== var3;
                    if(!var3) { _fun0002_ip = 381; continue _fun0002 }
 354:
                    var5 = _closure2_slot1;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = _closure1_slot4;
                    var4 = var4.EXPANDED;
                    var3 = var5 !== var4;
 381:
                    if(!var3) { _fun0002_ip = 460; continue _fun0002 }
 384:
                    var8 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 7;
                    var3 = var13[var3];
                    var5 = undefined;
                    var15 = var8.bind(var5)(var3);
                    var14 = var15.runOnJS;
                    var3 = 10;
                    var4 = var13[var3];
                    var4 = var8.bind(var5)(var4);
                    var4 = var4.triggerHapticFeedback;
                    var4 = var14.bind(var15)(var4);
                    var3 = var13[var3];
                    var3 = var8.bind(var5)(var3);
                    var3 = var3.HapticFeedbackTypes;
                    var3 = var3.IMPACT_MEDIUM;
                    var3 = var4.bind(var5)(var3);
 460:
                    var5 = _closure2_slot0;
                    var4 = var5.set;
                    var3 = {};
                    var8 = var5.get;
                    var17 = var8.bind(var5)();
                    var18 = var3;
                    var8 = copyDataProperties(var18, var17);
                    var8 = 'x';
                    var3[var8] = var6;
                    var8 = _closure1_slot7;
                    var9 = var9 * var8;
                    var8 = _closure1_slot14;
                    var12 = var12 / var8;
                    var8 = 1;
                    var8 = var8 - var12;
                    var8 = var11 * var8;
                    var9 = var9 + var8;
                    var8 = 'y';
                    var3[var8] = var9;
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 9;
                    var9 = var9[var8];
                    var8 = undefined;
                    var13 = var11.bind(var8)(var9);
                    var12 = var13.getQuestDockCollapsedWidth;
                    var9 = _closure2_slot2;
                    var8 = var9.get;
                    var8 = var8.bind(var9)();
                    var11 = var8.width;
                    var14 = _closure2_slot4;
                    var8 = var14.get;
                    var8 = var8.bind(var14)();
                    var9 = var8.left;
                    var8 = var14.get;
                    var8 = var8.bind(var14)();
                    var8 = var8.right;
                    var9 = var12.bind(var13)(var11, var9, var8);
                    var8 = 'width';
                    var3[var8] = var9;
                    var9 = _closure1_slot5;
                    var8 = 'height';
                    var3[var8] = var9;
                    var8 = 'prevDeltaY';
                    var3[var8] = var7;
                    var3 = var4.bind(var5)(var3);
                    var5 = _closure2_slot1;
                    var4 = var5.set;
                    var3 = _closure1_slot4;
                    var3 = var3.COLLAPSED;
                    var3 = var4.bind(var5)(var3);
                    _fun0002_ip = 1267; continue _fun0002;
 686:
                    var4 = _closure2_slot1;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot4;
                    var3 = var3.CLOSED;
                    if(!(var4 === var3)) { _fun0002_ip = 1267; continue _fun0002 }
 716:
                    var3 = global;
                    var4 = var3.Math;
                    var3 = var4.min;
                    var4 = var3.bind(var4)(var10, var6);
                    var3 = _closure1_slot6;
                    var4 = var4 / var3;
                    var3 = 1;
                    var4 = var3 - var4;
                    var3 = _closure1_slot6;
                    var3 = var3 - var10;
                    var12 = var4 * var3;
                    var8 = var12 > var6;
                    var5 = _closure2_slot0;
                    var4 = var5.set;
                    var3 = {};
                    var9 = var5.get;
                    var17 = var9.bind(var5)();
                    var18 = var3;
                    var9 = copyDataProperties(var18, var17);
                    var9 = 'x';
                    var3[var9] = var6;
                    var11 = 0;
                    if(!var8) { _fun0002_ip = 815; continue _fun0002 }
 807:
                    var9 = _closure1_slot15;
                    var11 = var12 * var9;
 815:
                    var9 = 'y';
                    var3[var9] = var11;
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 9;
                    var11 = var11[var9];
                    var9 = undefined;
                    var14 = var12.bind(var9)(var11);
                    var13 = var14.getQuestDockClosedWidth;
                    var11 = _closure2_slot2;
                    var9 = var11.get;
                    var9 = var9.bind(var11)();
                    var12 = var9.width;
                    var15 = _closure2_slot4;
                    var9 = var15.get;
                    var9 = var9.bind(var15)();
                    var11 = var9.left;
                    var9 = var15.get;
                    var9 = var9.bind(var15)();
                    var9 = var9.right;
                    var11 = var13.bind(var14)(var12, var11, var9);
                    var9 = 'width';
                    var3[var9] = var11;
                    var9 = var10;
                    if(!var8) { _fun0002_ip = 928; continue _fun0002 }
 924:
                    var9 = _closure1_slot6;
 928:
                    var8 = 'height';
                    var3[var8] = var9;
                    var8 = 'prevDeltaY';
                    var3[var8] = var7;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var1 = _closure1_slot4;
                    var1 = var1.CLOSED;
                    var1 = var3.bind(var4)(var1);
                    _fun0002_ip = 1267; continue _fun0002;
 980:
                    var3 = _closure2_slot7;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var1.isDrawer;
                    if(var1) { _fun0002_ip = 1045; continue _fun0002 }
 1002:
                    var4 = _closure2_slot7;
                    var3 = var4.set;
                    var1 = {};
                    var5 = var4.get;
                    var17 = var5.bind(var4)();
                    var18 = var1;
                    var5 = copyDataProperties(var18, var17);
                    var8 = true;
                    var5 = 'isDrawer';
                    var1[var5] = var8;
                    var1 = var3.bind(var4)(var1);
 1045:
                    var5 = _closure2_slot0;
                    var4 = var5.set;
                    var3 = {};
                    var1 = var5.get;
                    var17 = var1.bind(var5)();
                    var18 = var3;
                    var1 = copyDataProperties(var18, var17);
                    var1 = 'x';
                    var3[var1] = var6;
                    var1 = 'y';
                    var3[var1] = var6;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 9;
                    var8 = var8[var6];
                    var6 = undefined;
                    var13 = var9.bind(var6)(var8);
                    var12 = var13.getQuestDockExpandedWidth;
                    var11 = _closure2_slot2;
                    var6 = var11.get;
                    var6 = var6.bind(var11)();
                    var9 = var6.width;
                    var14 = _closure2_slot4;
                    var6 = var14.get;
                    var6 = var6.bind(var14)();
                    var8 = var6.left;
                    var6 = var14.get;
                    var6 = var6.bind(var14)();
                    var6 = var6.right;
                    var8 = var12.bind(var13)(var9, var8, var6);
                    var6 = 'width';
                    var3[var6] = var8;
                    var6 = global;
                    var9 = var6.Math;
                    var8 = var9.min;
                    var6 = var11.get;
                    var6 = var6.bind(var11)();
                    var6 = var6.height;
                    var8 = var8.bind(var9)(var10, var6);
                    var6 = 'height';
                    var3[var6] = var8;
                    var6 = 'prevDeltaY';
                    var3[var6] = var7;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var1 = _closure1_slot4;
                    var1 = var1.EXPANDED;
                    var1 = var2.bind(var3)(var1);
 1267:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = {};
            var13['initialGestureOffset'] = var11;
            var14 = _closure2_slot3;
            var13['minExpandedContentHeight'] = var14;
            var14 = _closure2_slot1;
            var13['activeQuestDockMode'] = var14;
            var14 = _closure1_slot4;
            var13['QuestDockMode'] = var14;
            var14 = _closure1_slot16;
            var13['QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR'] = var14;
            var14 = _closure1_slot10;
            var13['QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT'] = var14;
            var13['questDockWrapperSpecs'] = var7;
            var14 = 9;
            var7 = var10[var14];
            var7 = var9.bind(var8)(var7);
            var7 = var7.getQuestDockExpandedWidth;
            var13['getQuestDockExpandedWidth'] = var7;
            var7 = _closure2_slot2;
            var13['windowDimensions'] = var7;
            var7 = _closure2_slot4;
            var13['safeArea'] = var7;
            var7 = _closure1_slot11;
            var13['QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT'] = var7;
            var7 = _closure1_slot6;
            var13['QUEST_DOCK_CLOSED_HEIGHT'] = var7;
            var7 = _closure1_slot15;
            var13['QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR'] = var7;
            var7 = var10[var14];
            var7 = var9.bind(var8)(var7);
            var7 = var7.getQuestDockClosedWidth;
            var13['getQuestDockClosedWidth'] = var7;
            var7 = _closure1_slot5;
            var13['QUEST_DOCK_COLLAPSED_HEIGHT'] = var7;
            var7 = _closure1_slot14;
            var13['QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR'] = var7;
            var7 = 7;
            var15 = var10[var7];
            var15 = var9.bind(var8)(var15);
            var15 = var15.runOnJS;
            var13['runOnJS'] = var15;
            var15 = 10;
            var16 = var10[var15];
            var16 = var9.bind(var8)(var16);
            var16 = var16.triggerHapticFeedback;
            var13['triggerHapticFeedback'] = var16;
            var15 = var10[var15];
            var15 = var9.bind(var8)(var15);
            var15 = var15.HapticFeedbackTypes;
            var13['HapticFeedbackTypes'] = var15;
            var15 = _closure1_slot7;
            var13['QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED'] = var15;
            var14 = var10[var14];
            var14 = var9.bind(var8)(var14);
            var14 = var14.getQuestDockCollapsedWidth;
            var13['getQuestDockCollapsedWidth'] = var14;
            var2['__closure'] = var13;
            var13 = 3365256624774.0;
            var2['__workletHash'] = var13;
            var13 = _closure1_slot19;
            var2['__initData'] = var13;
            var3 = var3.bind(var5)(var2);
            var2 = var3.onEnd;
            var1 = function t(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.velocityY;
                    var7 = var1.y;
                    var1 = global;
                    var3 = var1.Math;
                    var2 = var3.abs;
                    var4 = var2.bind(var3)(var5);
                    var2 = var1.Math;
                    var1 = var2.abs;
                    var6 = var1.bind(var2)(var7);
                    var2 = _closure1_slot12;
                    if(!(var4 > var2)) { _fun0003_ip = 70; continue _fun0003 }
 61:
                    var2 = 0;
                    if(!(!(var5 < var2))) { _fun0003_ip = 336; continue _fun0003 }
 70:
                    var2 = _closure1_slot12;
                    if(!(var4 < var2)) { _fun0003_ip = 106; continue _fun0003 }
 78:
                    var3 = _closure2_slot7;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.isDrawer;
                    if(var2) { _fun0003_ip = 336; continue _fun0003 }
 106:
                    var8 = _closure2_slot5;
                    var3 = var8.get;
                    var8 = var3.bind(var8)();
                    var3 = _closure1_slot4;
                    var3 = var3.COLLAPSED;
                    if(!(var8 === var3)) { _fun0003_ip = 158; continue _fun0003 }
 136:
                    var3 = _closure1_slot12;
                    if(!(!(var5 > var3))) { _fun0003_ip = 324; continue _fun0003 }
 147:
                    var3 = _closure1_slot11;
                    if(!(!(var7 > var3))) { _fun0003_ip = 324; continue _fun0003 }
 158:
                    var3 = _closure1_slot12;
                    if(!(var5 > var3)) { _fun0003_ip = 193; continue _fun0003 }
 166:
                    var8 = _closure2_slot5;
                    var3 = var8.get;
                    var8 = var3.bind(var8)();
                    var3 = _closure1_slot4;
                    var3 = var3.COLLAPSED;
                    if(!(var8 === var3)) { _fun0003_ip = 312; continue _fun0003 }
 193:
                    var3 = 0;
                    if(!(var5 < var3)) { _fun0003_ip = 234; continue _fun0003 }
 199:
                    var3 = _closure1_slot12;
                    if(!(var4 > var3)) { _fun0003_ip = 234; continue _fun0003 }
 207:
                    var4 = _closure2_slot5;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot4;
                    var3 = var3.CLOSED;
                    if(!(var4 !== var3)) { _fun0003_ip = 312; continue _fun0003 }
 234:
                    var4 = _closure2_slot5;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot4;
                    var3 = var3.COLLAPSED;
                    if(!(var4 !== var3)) { _fun0003_ip = 300; continue _fun0003 }
 261:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot4;
                    var2 = var2.CLOSED;
                    if(!(var3 !== var2)) { _fun0003_ip = 300; continue _fun0003 }
 288:
                    var2 = _closure1_slot4;
                    var3 = var2.COLLAPSED;
                    _fun0003_ip = 310; continue _fun0003;
 300:
                    var2 = _closure1_slot4;
                    var3 = var2.RESET_TO_PREVIOUS;
 310:
                    _fun0003_ip = 322; continue _fun0003;
 312:
                    var2 = _closure1_slot4;
                    var3 = var2.COLLAPSED;
 322:
                    _fun0003_ip = 334; continue _fun0003;
 324:
                    var2 = _closure1_slot4;
                    var3 = var2.SOFT_DISMISSED;
 334:
                    _fun0003_ip = 391; continue _fun0003;
 336:
                    var4 = _closure2_slot5;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = _closure1_slot4;
                    var2 = var2.EXPANDED;
                    if(!(var4 !== var2)) { _fun0003_ip = 378; continue _fun0003 }
 366:
                    var2 = _closure1_slot4;
                    var2 = var2.EXPANDED;
                    _fun0003_ip = 388; continue _fun0003;
 378:
                    var4 = _closure1_slot4;
                    var2 = var4.RESET_TO_PREVIOUS;
 388:
                    var3 = var2;
 391:
                    var5 = _closure2_slot5;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = _closure1_slot4;
                    var4 = var4.CLOSED;
                    var4 = var5 === var4;
                    if(!var4) { _fun0003_ip = 438; continue _fun0003 }
 424:
                    var5 = _closure1_slot4;
                    var5 = var5.EXPANDED;
                    var4 = var3 !== var5;
 438:
                    if(!var4) { _fun0003_ip = 447; continue _fun0003 }
 441:
                    var5 = 0;
                    var4 = var7 < var5;
 447:
                    if(!var4) { _fun0003_ip = 458; continue _fun0003 }
 450:
                    var5 = _closure1_slot11;
                    var4 = var6 > var5;
 458:
                    if(!var4) { _fun0003_ip = 471; continue _fun0003 }
 461:
                    var4 = _closure1_slot4;
                    var3 = var4.COLLAPSED;
 471:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 7;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.runOnJS;
                    var2 = _closure2_slot6;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var5 = {};
            var13 = _closure1_slot12;
            var5['QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY'] = var13;
            var5['restingQuestDockMode'] = var12;
            var12 = _closure1_slot4;
            var5['QuestDockMode'] = var12;
            var5['initialGestureOffset'] = var11;
            var11 = _closure1_slot11;
            var5['QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT'] = var11;
            var7 = var10[var7];
            var7 = var9.bind(var8)(var7);
            var7 = var7.runOnJS;
            var5['runOnJS'] = var7;
            var6 = _closure2_slot6;
            var5['setRestingQuestDockMode'] = var6;
            var1['__closure'] = var5;
            var5 = 10107537449160.0;
            var1['__workletHash'] = var5;
            var4 = _closure1_slot18;
            var1['__initData'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var1, var3);
        var3 = var11[var8];
        var5 = var10.bind(var9)(var3);
        var4 = var5.useAnimatedReaction;
        var3 = function k() {
            var2 = _closure2_slot1;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = {};
        var7['activeQuestDockMode'] = var12;
        var3['__closure'] = var7;
        var7 = 4183219364740.0;
        var3['__workletHash'] = var7;
        var7 = _closure1_slot22;
        var3['__initData'] = var7;
        var2 = function o(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var1 = var4 !== var3;
                if(!var1) { _fun0004_ip = 30; continue _fun0004 }
 13:
                var2 = _closure1_slot4;
                var2 = var2.CLOSED;
                var1 = var4 !== var2;
 30:
                if(!var1) { _fun0004_ip = 50; continue _fun0004 }
 33:
                var2 = _closure1_slot4;
                var2 = var2.CLOSED;
                var1 = var3 !== var2;
 50:
                if(!var1) { _fun0004_ip = 132; continue _fun0004 }
 53:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var3 = undefined;
                var7 = var4.bind(var3)(var1);
                var6 = var7.runOnJS;
                var1 = 10;
                var2 = var5[var1];
                var2 = var4.bind(var3)(var2);
                var2 = var2.triggerHapticFeedback;
                var2 = var6.bind(var7)(var2);
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.HapticFeedbackTypes;
                var1 = var1.IMPACT_MEDIUM;
                var1 = var2.bind(var3)(var1);
 132:
                var1 = undefined;
                return var1;
            }
        };
        var7 = {};
        var12 = _closure1_slot4;
        var7['QuestDockMode'] = var12;
        var8 = var11[var8];
        var8 = var10.bind(var9)(var8);
        var8 = var8.runOnJS;
        var7['runOnJS'] = var8;
        var8 = 10;
        var12 = var11[var8];
        var12 = var10.bind(var9)(var12);
        var12 = var12.triggerHapticFeedback;
        var7['triggerHapticFeedback'] = var12;
        var8 = var11[var8];
        var8 = var10.bind(var9)(var8);
        var8 = var8.HapticFeedbackTypes;
        var7['HapticFeedbackTypes'] = var8;
        var2['__closure'] = var7;
        var7 = 16625438704608.0;
        var2['__workletHash'] = var7;
        var6 = _closure1_slot23;
        var2['__initData'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot24 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.QuestDockMode;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.QUEST_DOCK_COLLAPSED_HEIGHT;
    var _closure1_slot5 = var9;
    var9 = var5.QUEST_DOCK_CLOSED_HEIGHT;
    var _closure1_slot6 = var9;
    var9 = var5.QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED;
    var _closure1_slot7 = var9;
    var9 = var5.QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM;
    var _closure1_slot8 = var9;
    var9 = var5.QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM;
    var _closure1_slot9 = var9;
    var9 = var5.QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;
    var _closure1_slot10 = var9;
    var9 = var5.QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT;
    var _closure1_slot11 = var9;
    var9 = var5.QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY;
    var _closure1_slot12 = var9;
    var9 = var5.QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;
    var _closure1_slot13 = var9;
    var9 = var5.QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR;
    var _closure1_slot14 = var9;
    var9 = var5.QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;
    var _closure1_slot15 = var9;
    var5 = var5.QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;
    var _closure1_slot16 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot17 = var5;
    var5 = {};
    var9 = 'function QuestDockGestureDetectorTsx1(event){const{QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,runOnJS,setRestingQuestDockMode}=this.__closure;const{velocityY:velocityY,y:y}=event;const absoluteVelocityY=Math.abs(velocityY);const absoluteY=Math.abs(y);let resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}runOnJS(setRestingQuestDockMode)(resultingDockMode);}';
    var5['code'] = var9;
    var _closure1_slot18 = var5;
    var5 = {};
    var9 = 'function QuestDockGestureDetectorTsx2(event){const{initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth}=this.__closure;const deltaY=event.absoluteY-initialGestureOffset.get().absoluteY;const expandedContentHeight=minExpandedContentHeight.get();let nextHeight=initialGestureOffset.get().height-initialGestureOffset.get().y-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){const overage=nextHeight-expandedContentHeight;const additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}const expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height),prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){const progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;const newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);const nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;const isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{const progress=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;const yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;const newChange=yOffset*(1-progress/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+newChange,width:getQuestDockCollapsedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:QUEST_DOCK_COLLAPSED_HEIGHT,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}}';
    var5['code'] = var9;
    var _closure1_slot19 = var5;
    var5 = {};
    var9 = 'function QuestDockGestureDetectorTsx3(event){const{State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs}=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=initialGestureOffset.get().absoluteY-absoluteY;const computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}}';
    var5['code'] = var9;
    var _closure1_slot20 = var5;
    var5 = {};
    var9 = 'function QuestDockGestureDetectorTsx4(event){const{touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode}=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});}';
    var5['code'] = var9;
    var _closure1_slot21 = var5;
    var5 = {};
    var9 = 'function QuestDockGestureDetectorTsx5(){const{activeQuestDockMode}=this.__closure;return activeQuestDockMode.get();}';
    var5['code'] = var9;
    var _closure1_slot22 = var5;
    var5 = {};
    var9 = 'function QuestDockGestureDetectorTsx6(current,previous){const{QuestDockMode,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous||current===QuestDockMode.CLOSED||previous===QuestDockMode.CLOSED){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}';
    var5['code'] = var9;
    var _closure1_slot23 = var5;
    var5 = var8.memo;
    var4 = function QuestDockGestureDetector(arg1) {
        var2 = _closure1_slot24;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot17;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 8;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.GestureDetector;
        var1 = {};
        var1['gesture'] = var5;
        var5 = arg1;
        var5 = var5.children;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/QuestDock/QuestDockGestureDetector.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useQuestDockSwipeGesture'] = var2;
    return var1;
})();