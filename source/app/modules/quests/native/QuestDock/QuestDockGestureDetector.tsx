// app/modules/quests/native/QuestDock/QuestDockGestureDetector.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
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
        var14 = var1.questDockWrapperSpecs;
        var _closure2_slot0 = var14;
        var13 = var1.activeQuestDockMode;
        var _closure2_slot1 = var13;
        var15 = var1.windowDimensions;
        var _closure2_slot2 = var15;
        var1 = var1.minExpandedContentHeight;
        var _closure2_slot3 = var1;
        var4 = _closure1_slot1;
        var3 = 5;
        var3 = var11[var3];
        var3 = var4.bind(var9)(var3);
        var17 = var3.bind(var9)();
        var _closure2_slot4 = var17;
        var5 = _closure1_slot3;
        var4 = var5.useContext;
        var3 = 6;
        var3 = var11[var3];
        var3 = var10.bind(var9)(var3);
        var3 = var3.QuestDockExternalCoordinationContext;
        var3 = var4.bind(var5)(var3);
        var19 = var3.restingQuestDockMode;
        var _closure2_slot5 = var19;
        var7 = var3.setRestingQuestDockMode;
        var _closure2_slot6 = var7;
        var3 = 7;
        var3 = var11[var3];
        var4 = var10.bind(var9)(var3);
        var3 = var4.useIsMobileQuestDockVisible;
        var3 = var3.bind(var4)();
        var3 = var3.isVisible;
        var _closure2_slot7 = var3;
        var8 = 8;
        var4 = var11[var8];
        var16 = var10.bind(var9)(var4);
        var5 = var16.useSharedValue;
        var4 = {'absoluteX': 0, 'absoluteY': 0, 'x': 0, 'y': 0, 'height': 0, 'isDrawer': null, 'active': false};
        var12 = 0;
        var18 = var19.get;
        var20 = var18.bind(var19)();
        var18 = _closure1_slot4;
        var18 = var18.EXPANDED;
        var18 = var20 === var18;
        var4['isDrawer'] = var18;
        var18 = var5.bind(var16)(var4);
        var _closure2_slot8 = var18;
        var4 = var11[var8];
        var5 = var10.bind(var9)(var4);
        var4 = var5.useSharedValue;
        var16 = var4.bind(var5)(var12);
        var _closure2_slot9 = var16;
        var4 = var11[var8];
        var5 = var10.bind(var9)(var4);
        var4 = var5.useSharedValue;
        var12 = var4.bind(var5)(var3);
        var _closure2_slot10 = var12;
        var20 = _closure1_slot3;
        var5 = var20.useEffect;
        var4 = new Array(2);
        var4[0] = var3;
        var4[1] = var12;
        var3 = function() {
            var3 = _closure2_slot10;
            var2 = var3.set;
            var1 = _closure2_slot7;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3 = var5.bind(var20)(var3, var4);
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(9);
        var3[0] = var19;
        var3[1] = var18;
        var3[2] = var17;
        var3[3] = var16;
        var3[4] = var15;
        var3[5] = var14;
        var3[6] = var7;
        var3[7] = var13;
        var3[8] = var1;
        var1 = function() {
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var15 = 9;
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
            var2 = function I(arg1) {
                var5 = arg1;
                var2 = _closure2_slot9;
                var1 = var2.set;
                var6 = 0;
                var1 = var1.bind(var2)(var6);
                var3 = _closure2_slot8;
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
            var14 = _closure2_slot9;
            var13['touchMoveCount'] = var14;
            var11 = _closure2_slot8;
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
            var2 = function A(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.state;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.State;
                    var3 = var3.BEGAN;
                    if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure2_slot8;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var3 = var3.active;
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                    var4 = _closure2_slot9;
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
                    var4 = _closure2_slot8;
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
                    if(!var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                    var2 = var3;
case 5:
                    if(!var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var2 = var4 >= var10;
case 7:
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 9:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot4;
                    var2 = var2.COLLAPSED;
                    var2 = var3 === var2;
                    if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var3 = _closure1_slot8;
                    var2 = var4 > var3;
case 10:
                    if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var11 = _closure2_slot5;
                    var3 = var11.get;
                    var11 = var3.bind(var11)();
                    var3 = _closure1_slot4;
                    var3 = var3.EXPANDED;
                    var3 = var11 === var3;
                    if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var11 = _closure1_slot8;
                    var11 = -var11;
                    var11 = var4 < var11;
                    if(var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var12 = _closure1_slot8;
                    var11 = var4 > var12;
case 16:
                    var3 = var11;
case 14:
                    var2 = var3;
case 12:
                    if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var11 = _closure2_slot5;
                    var3 = var11.get;
                    var11 = var3.bind(var11)();
                    var3 = _closure1_slot4;
                    var3 = var3.COLLAPSED;
                    var3 = var11 === var3;
                    if(!var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var3 = var4 < var10;
case 20:
                    if(!var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var11 = _closure1_slot9;
                    var3 = var9 > var11;
case 22:
                    var2 = var3;
case 18:
                    if(var2) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var11 = _closure2_slot5;
                    var3 = var11.get;
                    var11 = var3.bind(var11)();
                    var3 = _closure1_slot4;
                    var3 = var3.CLOSED;
                    var3 = var11 === var3;
                    if(!var3) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var3 = var4 > var10;
case 26:
                    if(!var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var11 = _closure1_slot9;
                    var3 = var4 > var11;
case 28:
                    var2 = var3;
case 24:
                    if(var2) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var11 = _closure2_slot5;
                    var3 = var11.get;
                    var11 = var3.bind(var11)();
                    var3 = _closure1_slot4;
                    var3 = var3.CLOSED;
                    var3 = var11 === var3;
                    if(!var3) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var3 = var4 < var10;
case 32:
                    if(!var3) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var4 = _closure1_slot9;
                    var3 = var9 > var4;
case 34:
                    var2 = var3;
case 30:
                    if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 36:
                    var4 = _closure2_slot8;
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
case 2:
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
case 0:
                    var1 = arg1;
                    var3 = var1.absoluteY;
                    var5 = _closure2_slot8;
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
                    if(!var4) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                    var6 = _closure2_slot1;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var5 = _closure1_slot4;
                    var5 = var5.EXPANDED;
                    var4 = var6 === var5;
case 37:
                    var10 = var1;
                    if(!var4) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var4 = var1 - var3;
                    var1 = _closure1_slot16;
                    var1 = var4 * var1;
                    var10 = var3 + var1;
case 39:
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var6 = 0;
                    if(!(!(var1 > var6))) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var1 = _closure1_slot10;
                    _fun0002_ip = 43; continue _fun0002;
case 41:
                    var3 = global;
                    var8 = var3.Math;
                    var5 = var8.min;
                    var4 = _closure2_slot3;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot10;
                    var1 = var5.bind(var8)(var4, var3);
case 43:
                    if(!(!(var10 >= var1))) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                    var3 = _closure1_slot11;
                    if(!(!(var10 < var3))) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var3 = _closure1_slot10;
                    var12 = var10 / var3;
                    var3 = _closure1_slot5;
                    var3 = var10 - var3;
                    var9 = -1;
                    var11 = var9 * var3;
                    var4 = _closure2_slot8;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var3 = var3.isDrawer;
                    if(!var3) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                    var5 = _closure2_slot8;
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
case 48:
                    var4 = _closure1_slot5;
                    var5 = _closure2_slot0;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var3 = var3.height;
                    var3 = var4 !== var3;
                    if(!var3) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    var5 = _closure2_slot1;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = _closure1_slot4;
                    var4 = var4.EXPANDED;
                    var3 = var5 !== var4;
case 50:
                    if(!var3) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                    var8 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 8;
                    var3 = var13[var3];
                    var5 = undefined;
                    var15 = var8.bind(var5)(var3);
                    var14 = var15.runOnJS;
                    var3 = 11;
                    var4 = var13[var3];
                    var4 = var8.bind(var5)(var4);
                    var4 = var4.triggerHapticFeedback;
                    var4 = var14.bind(var15)(var4);
                    var3 = var13[var3];
                    var3 = var8.bind(var5)(var3);
                    var3 = var3.HapticFeedbackTypes;
                    var3 = var3.IMPACT_MEDIUM;
                    var3 = var4.bind(var5)(var3);
case 52:
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
                    var8 = 10;
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
                    _fun0002_ip = 54; continue _fun0002;
case 46:
                    var4 = _closure2_slot1;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot4;
                    var3 = var3.CLOSED;
                    if(!(var4 === var3)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
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
                    if(!var8) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                    var9 = _closure1_slot15;
                    var11 = var12 * var9;
case 56:
                    var9 = 'y';
                    var3[var9] = var11;
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 10;
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
                    if(!var8) { _fun0002_ip = 58; continue _fun0002 }
case 59:
                    var9 = _closure1_slot6;
case 58:
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
                    _fun0002_ip = 54; continue _fun0002;
case 44:
                    var3 = _closure2_slot8;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var1.isDrawer;
                    if(var1) { _fun0002_ip = 60; continue _fun0002 }
case 61:
                    var4 = _closure2_slot8;
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
case 60:
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
                    var6 = 10;
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
case 54:
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
            var14 = 10;
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
            var7 = 8;
            var15 = var10[var7];
            var15 = var9.bind(var8)(var15);
            var15 = var15.runOnJS;
            var13['runOnJS'] = var15;
            var15 = 11;
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
case 0:
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
                    if(!(var4 > var2)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                    var2 = 0;
                    if(!(!(var5 < var2))) { _fun0003_ip = 64; continue _fun0003 }
case 62:
                    var2 = _closure1_slot12;
                    if(!(var4 < var2)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                    var3 = _closure2_slot8;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.isDrawer;
                    if(var2) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var8 = _closure2_slot5;
                    var3 = var8.get;
                    var8 = var3.bind(var8)();
                    var3 = _closure1_slot4;
                    var3 = var3.COLLAPSED;
                    if(!(var8 === var3)) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                    var3 = _closure1_slot12;
                    if(!(!(var5 > var3))) { _fun0003_ip = 17; continue _fun0003 }
case 69:
                    var3 = _closure1_slot11;
                    if(!(!(var7 > var3))) { _fun0003_ip = 17; continue _fun0003 }
case 67:
                    var3 = _closure1_slot12;
                    if(!(var5 > var3)) { _fun0003_ip = 70; continue _fun0003 }
case 71:
                    var8 = _closure2_slot5;
                    var3 = var8.get;
                    var8 = var3.bind(var8)();
                    var3 = _closure1_slot4;
                    var3 = var3.COLLAPSED;
                    if(!(var8 === var3)) { _fun0003_ip = 72; continue _fun0003 }
case 70:
                    var3 = 0;
                    if(!(var5 < var3)) { _fun0003_ip = 47; continue _fun0003 }
case 73:
                    var3 = _closure1_slot12;
                    if(!(var4 > var3)) { _fun0003_ip = 47; continue _fun0003 }
case 74:
                    var4 = _closure2_slot5;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot4;
                    var3 = var3.CLOSED;
                    if(!(var4 !== var3)) { _fun0003_ip = 72; continue _fun0003 }
case 47:
                    var4 = _closure2_slot5;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure1_slot4;
                    var3 = var3.COLLAPSED;
                    if(!(var4 !== var3)) { _fun0003_ip = 75; continue _fun0003 }
case 76:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot4;
                    var2 = var2.CLOSED;
                    if(!(var3 !== var2)) { _fun0003_ip = 75; continue _fun0003 }
case 77:
                    var2 = _closure1_slot4;
                    var3 = var2.COLLAPSED;
                    _fun0003_ip = 15; continue _fun0003;
case 75:
                    var2 = _closure1_slot4;
                    var3 = var2.RESET_TO_PREVIOUS;
case 15:
                    _fun0003_ip = 78; continue _fun0003;
case 72:
                    var2 = _closure1_slot4;
                    var3 = var2.COLLAPSED;
case 78:
                    _fun0003_ip = 79; continue _fun0003;
case 17:
                    var2 = _closure1_slot4;
                    var3 = var2.SOFT_DISMISSED;
case 79:
                    _fun0003_ip = 80; continue _fun0003;
case 64:
                    var4 = _closure2_slot5;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = _closure1_slot4;
                    var2 = var2.EXPANDED;
                    if(!(var4 !== var2)) { _fun0003_ip = 23; continue _fun0003 }
case 81:
                    var2 = _closure1_slot4;
                    var2 = var2.EXPANDED;
                    _fun0003_ip = 82; continue _fun0003;
case 23:
                    var4 = _closure1_slot4;
                    var2 = var4.RESET_TO_PREVIOUS;
case 82:
                    var3 = var2;
case 80:
                    var5 = _closure2_slot5;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = _closure1_slot4;
                    var4 = var4.CLOSED;
                    var4 = var5 === var4;
                    if(!var4) { _fun0003_ip = 83; continue _fun0003 }
case 84:
                    var5 = _closure1_slot4;
                    var5 = var5.EXPANDED;
                    var4 = var3 !== var5;
case 83:
                    if(!var4) { _fun0003_ip = 85; continue _fun0003 }
case 86:
                    var5 = 0;
                    var4 = var7 < var5;
case 85:
                    if(!var4) { _fun0003_ip = 87; continue _fun0003 }
case 88:
                    var5 = _closure1_slot11;
                    var4 = var6 > var5;
case 87:
                    if(!var4) { _fun0003_ip = 89; continue _fun0003 }
case 90:
                    var4 = _closure1_slot4;
                    var3 = var4.COLLAPSED;
case 89:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 8;
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
        var3 = function w() {
            var1 = {};
            var4 = _closure2_slot1;
            var3 = var4.get;
            var3 = var3.bind(var4)();
            var1['mode'] = var3;
            var3 = _closure2_slot10;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['isVisible'] = var2;
            return var1;
        };
        var7 = {};
        var7['activeQuestDockMode'] = var13;
        var7['isVisibleSharedValue'] = var12;
        var3['__closure'] = var7;
        var7 = 13629688537260.0;
        var3['__workletHash'] = var7;
        var7 = _closure1_slot22;
        var3['__initData'] = var7;
        var2 = function Y(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var4 = arg2;
                var6 = var3.mode;
                var5 = null;
                var7 = var5 == var4;
                var1 = undefined;
                var2 = undefined;
                if(var7) { _fun0004_ip = 91; continue _fun0004 }
case 92:
                var2 = var4.mode;
case 91:
                var2 = var6 !== var2;
                if(!var2) { _fun0004_ip = 93; continue _fun0004 }
case 94:
                var7 = var3.mode;
                var6 = _closure1_slot4;
                var6 = var6.CLOSED;
                var2 = var7 !== var6;
case 93:
                if(!var2) { _fun0004_ip = 95; continue _fun0004 }
case 63:
                var6 = var5 == var4;
                var5 = undefined;
                if(var6) { _fun0004_ip = 96; continue _fun0004 }
case 62:
                var5 = var4.mode;
case 96:
                var4 = _closure1_slot4;
                var4 = var4.CLOSED;
                var2 = var5 !== var4;
case 95:
                if(!var2) { _fun0004_ip = 97; continue _fun0004 }
case 98:
                var2 = var3.isVisible;
case 97:
                if(!var2) { _fun0004_ip = 99; continue _fun0004 }
case 100:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var7 = var4.bind(var1)(var2);
                var6 = var7.runOnJS;
                var2 = 11;
                var3 = var5[var2];
                var3 = var4.bind(var1)(var3);
                var3 = var3.triggerHapticFeedback;
                var3 = var6.bind(var7)(var3);
                var2 = var5[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.IMPACT_MEDIUM;
                var2 = var3.bind(var1)(var2);
case 99:
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
        var8 = 11;
        var12 = var11[var8];
        var12 = var10.bind(var9)(var12);
        var12 = var12.triggerHapticFeedback;
        var7['triggerHapticFeedback'] = var12;
        var8 = var11[var8];
        var8 = var10.bind(var9)(var8);
        var8 = var8.HapticFeedbackTypes;
        var7['HapticFeedbackTypes'] = var8;
        var2['__closure'] = var7;
        var7 = 17417080823410.0;
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
    var5 = metroImportAll;
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
    var9 = 'function QuestDockGestureDetectorTsx5(){const{activeQuestDockMode,isVisibleSharedValue}=this.__closure;return{mode:activeQuestDockMode.get(),isVisible:isVisibleSharedValue.get()};}';
    var5['code'] = var9;
    var _closure1_slot22 = var5;
    var5 = {};
    var9 = 'function QuestDockGestureDetectorTsx6(current,previous){const{QuestDockMode,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current.mode===(previous===null||previous===void 0?void 0:previous.mode)||current.mode===QuestDockMode.CLOSED||(previous===null||previous===void 0?void 0:previous.mode)===QuestDockMode.CLOSED||!current.isVisible){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}';
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
        var1 = 9;
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
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/QuestDock/QuestDockGestureDetector.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useQuestDockSwipeGesture'] = var2;
    return var1;
})();