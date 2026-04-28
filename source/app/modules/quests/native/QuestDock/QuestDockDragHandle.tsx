// app/modules/quests/native/QuestDock/QuestDockDragHandle.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestDockMode;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.QUEST_DOCK_MODE_CHANGE_PHYSICS;
    var _closure1_slot5 = var8;
    var8 = var4.QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED;
    var _closure1_slot6 = var8;
    var4 = var4.QUEST_DOCK_COLLAPSED_MAX_WIDTH;
    var _closure1_slot7 = var4;
    var14 = 4;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useYouBarHorizontalMargin;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var16 = var12.absoluteFillObject;
    var17 = var10;
    var11 = copyDataProperties(var17, var16);
    var11 = 'bottom';
    var10[10] = var1;
    var13 = 'right';
    var10[12] = var1;
    var13 = 'zIndex';
    var10[12] = var14;
    var4['dragHandleWrapper'] = var10;
    var10 = {};
    var16 = var12.absoluteFillObject;
    var17 = var10;
    var12 = copyDataProperties(var17, var16);
    var10[10] = var1;
    var4['dragHandleOverlay'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function getDragHandleOffsetLeft_QuestDockDragHandleTsx1(activeQuestDockMode,horizontalEdgeGutter,withYouBar){const{QuestDockMode}=this.__closure;if(withYouBar){switch(activeQuestDockMode){case QuestDockMode.EXPANDED:return 0;default:return horizontalEdgeGutter*-1;}}else{switch(activeQuestDockMode){case QuestDockMode.COLLAPSED:return horizontalEdgeGutter*-1;default:return 0;}}}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = function() {
        var1 = function getDragHandleOffsetLeft(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var2 = _closure1_slot4;
                var1 = arg3;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var2.COLLAPSED;
                var1 = 0;
                if(!(var5 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = -1;
                var1 = var3 * var4;
case 4:
                _fun0001_ip = 6; continue _fun0001;
case 2:
                var3 = var2.EXPANDED;
                var2 = 0;
                if(!(var5 !== var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var3 = -1;
                var2 = var3 * var4;
case 7:
                var1 = var2;
case 6:
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot4;
        var3['QuestDockMode'] = var4;
        var1['__closure'] = var3;
        var3 = 3634410156103.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot12;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function QuestDockDragHandleTsx2(){const{windowDimensions,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return{width:Math.min(windowDimensions.get().width,QUEST_DOCK_COLLAPSED_MAX_WIDTH)};}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function QuestDockDragHandleTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,getDragHandleOffsetLeft,questDockHorizontalGutterCollapsed,youBarEnabled}=this.__closure;return{transform:[{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?6:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)}],left:getDragHandleOffsetLeft(activeQuestDockMode.get(),questDockHorizontalGutterCollapsed,youBarEnabled)};}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function QuestDockDragHandleTsx4(){const{withSpring,isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isEnrolled||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function QuestDockDragHandleTsx5(){const{withSpring,isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isEnrolled&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function QuestDockDragHandle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var17 = var2.isExpanded;
            var6 = _closure1_slot3;
            var3 = var6.useContext;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 7;
            var2 = var8[var2];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var2 = var3.bind(var6)(var2);
            var2 = var2.quest;
            var3 = _closure1_slot11;
            var15 = var3.bind(var4)();
            var5 = var6.useContext;
            var7 = _closure1_slot0;
            var3 = 8;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.QuestDockGestureContext;
            var3 = var5.bind(var6)(var3);
            var10 = var3.activeQuestDockMode;
            var _closure2_slot0 = var10;
            var8 = var3.windowDimensions;
            var _closure2_slot1 = var8;
            var5 = var2.userStatus;
            var3 = null;
            var6 = var3 == var5;
            var2 = undefined;
            if(var6) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var5.enrolledAt;
case 9:
            var14 = var3 != var2;
            var _closure2_slot2 = var14;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useYouBarEnabled;
            var2 = 'QuestDockDragHandle';
            var19 = var3.bind(var5)(var2);
            var _closure2_slot3 = var19;
            var2 = _closure1_slot8;
            var20 = var2.bind(var4)();
            if(var19) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var20 = _closure1_slot6;
case 11:
            var _closure2_slot4 = var20;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 10;
            var3 = var11[var2];
            var6 = var12.bind(var4)(var3);
            var5 = var6.useAnimatedStyle;
            var3 = function _() {
                var1 = {};
                var2 = global;
                var5 = var2.Math;
                var4 = var5.min;
                var3 = _closure2_slot1;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var3 = var2.width;
                var2 = _closure1_slot7;
                var2 = var4.bind(var5)(var3, var2);
                var1['width'] = var2;
                return var1;
            };
            var7 = {};
            var7['windowDimensions'] = var8;
            var8 = _closure1_slot7;
            var7['QUEST_DOCK_COLLAPSED_MAX_WIDTH'] = var8;
            var3['__closure'] = var7;
            var7 = 13640576219747.0;
            var3['__workletHash'] = var7;
            var7 = _closure1_slot14;
            var3['__initData'] = var7;
            var6 = var5.bind(var6)(var3);
            var3 = var11[var2];
            var8 = var12.bind(var4)(var3);
            var5 = var8.useAnimatedStyle;
            var3 = function M() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var5 = {};
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 11;
                    var2 = var6[var2];
                    var6 = undefined;
                    var9 = var4.bind(var6)(var2);
                    var8 = var9.withSpring;
                    var7 = _closure2_slot0;
                    var4 = var7.get;
                    var7 = var4.bind(var7)();
                    var4 = _closure1_slot4;
                    var4 = var4.CLOSED;
                    if(!(var7 !== var4)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var7 = _closure2_slot0;
                    var4 = var7.get;
                    var10 = var4.bind(var7)();
                    var4 = _closure1_slot4;
                    var4 = var4.SOFT_DISMISSED;
                    var7 = 0;
                    if(!(var10 === var4)) { _fun0003_ip = 15; continue _fun0003 }
case 13:
                    var7 = 6;
case 15:
                    var4 = _closure1_slot5;
                    var4 = var8.bind(var9)(var7, var4);
                    var5['translateY'] = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1['transform'] = var4;
                    var5 = _closure1_slot13;
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot3;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['left'] = var2;
                    return var1;
                }
            };
            var16 = {};
            var18 = 11;
            var7 = var11[var18];
            var7 = var12.bind(var4)(var7);
            var7 = var7.withSpring;
            var16['withSpring'] = var7;
            var16['activeQuestDockMode'] = var10;
            var9 = _closure1_slot4;
            var16['QuestDockMode'] = var9;
            var7 = _closure1_slot5;
            var16['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = var7;
            var21 = _closure1_slot13;
            var16['getDragHandleOffsetLeft'] = var21;
            var16['questDockHorizontalGutterCollapsed'] = var20;
            var16['youBarEnabled'] = var19;
            var3['__closure'] = var16;
            var16 = 5321241923244.0;
            var3['__workletHash'] = var16;
            var16 = _closure1_slot15;
            var3['__initData'] = var16;
            var8 = var5.bind(var8)(var3);
            var3 = var11[var2];
            var16 = var12.bind(var4)(var3);
            var5 = var16.useAnimatedStyle;
            var3 = function w() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot2;
                    if(var6) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var7 = _closure2_slot0;
                    var6 = var7.get;
                    var7 = var6.bind(var7)();
                    var6 = _closure1_slot4;
                    var6 = var6.CLOSED;
                    if(!(var7 !== var6)) { _fun0004_ip = 16; continue _fun0004 }
case 18:
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var7 = var3.bind(var6)();
                    var3 = _closure1_slot4;
                    var6 = var3.SOFT_DISMISSED;
                    var3 = 0;
                    if(!(var7 === var6)) { _fun0004_ip = 19; continue _fun0004 }
case 16:
                    var3 = 1;
case 19:
                    var2 = _closure1_slot5;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var19 = {};
            var20 = var11[var18];
            var20 = var12.bind(var4)(var20);
            var20 = var20.withSpring;
            var19['withSpring'] = var20;
            var19['isEnrolled'] = var14;
            var19['activeQuestDockMode'] = var10;
            var19['QuestDockMode'] = var9;
            var19['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = var7;
            var3['__closure'] = var19;
            var19 = 12299455640931.0;
            var3['__workletHash'] = var19;
            var19 = _closure1_slot16;
            var3['__initData'] = var19;
            var16 = var5.bind(var16)(var3);
            var2 = var11[var2];
            var3 = var12.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function f() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot2;
                    if(var6) { _fun0005_ip = 20; continue _fun0005 }
case 17:
                    var7 = _closure2_slot0;
                    var6 = var7.get;
                    var7 = var6.bind(var7)();
                    var6 = _closure1_slot4;
                    var6 = var6.CLOSED;
                    if(!(var7 !== var6)) { _fun0005_ip = 20; continue _fun0005 }
case 18:
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var7 = var3.bind(var6)();
                    var3 = _closure1_slot4;
                    var6 = var3.SOFT_DISMISSED;
                    var3 = 0.5;
                    if(!(var7 === var6)) { _fun0005_ip = 21; continue _fun0005 }
case 20:
                    var3 = 0;
case 21:
                    var2 = _closure1_slot5;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var18 = var11[var18];
            var18 = var12.bind(var4)(var18);
            var18 = var18.withSpring;
            var5['withSpring'] = var18;
            var5['isEnrolled'] = var14;
            var5['activeQuestDockMode'] = var10;
            var5['QuestDockMode'] = var9;
            var5['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = var7;
            var1['__closure'] = var5;
            var5 = 9632835517209.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot17;
            var1['__initData'] = var5;
            var18 = var2.bind(var3)(var1);
            var3 = _closure1_slot9;
            var10 = _closure1_slot1;
            var9 = 12;
            var1 = var11[var9];
            var2 = var10.bind(var4)(var1);
            var1 = {};
            var7 = var15.dragHandleWrapper;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot10;
            var5 = var11[var9];
            var6 = var10.bind(var4)(var5);
            var5 = {};
            var5['style'] = var8;
            var8 = 13;
            var8 = var11[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.dimensionsLayoutTransition;
            var5['layout'] = var8;
            var8 = var11[var9];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var19 = var15.dragHandleOverlay;
            var14 = new Array(2);
            var14[0] = var19;
            var14[1] = var18;
            var8['style'] = var14;
            var14 = 14;
            var11 = var11[var14];
            var11 = var12.bind(var4)(var11);
            var12 = var11.ActionSheetHeaderBar;
            var11 = {};
            var18 = 'overlay';
            var11['variant'] = var18;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 15;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            if(var17) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var17 = var18.Yplnt6;
            var17 = var19.bind(var20)(var17);
            _fun0002_ip = 24; continue _fun0002;
case 22:
            var18 = var18.GQ+4bk;
            var17 = var19.bind(var20)(var18);
case 24:
            var11['accessibilityLabel'] = var17;
            var11 = var3.bind(var4)(var12, var11);
            var8['children'] = var11;
            var10 = var3.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot9;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {'style': null, 'pointerEvents': 'none', 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants'};
            var17 = var15.dragHandleOverlay;
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var9['style'] = var15;
            var13 = _closure1_slot0;
            var12 = var12[var14];
            var12 = var13.bind(var4)(var12);
            var13 = var12.ActionSheetHeaderBar;
            var12 = {};
            var14 = 'floating';
            var12['variant'] = var14;
            var12 = var11.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockDragHandle.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();