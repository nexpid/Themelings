// app/modules/quests/native/QuestDock/QuestDockDragHandle.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var13 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestDockMode;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QUEST_DOCK_MODE_CHANGE_PHYSICS;
    var _closure1_slot6 = var4;
    var15 = 4;
    var4 = var6[var15];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var17 = var13.absoluteFillObject;
    var18 = var10;
    var11 = copyDataProperties(var18, var17);
    var12 = 'bottom';
    var10[var12] = var1;
    var11 = 'right';
    var10[var11] = var1;
    var14 = 'zIndex';
    var10[var14] = var15;
    var4['dragHandleWrapper'] = var10;
    var10 = {};
    var17 = var13.absoluteFillObject;
    var18 = var10;
    var13 = copyDataProperties(var18, var17);
    var10[var12] = var1;
    var10[var11] = var1;
    var4['dragHandleOverlay'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = 'function QuestDockDragHandleTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{transform:[{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?6:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateX:withSpring(questDockWrapperSpecs.get().width/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}';
    var4['code'] = var8;
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function QuestDockDragHandleTsx2(){const{withSpring,isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isEnrolled||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}';
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function QuestDockDragHandleTsx3(){const{withSpring,isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isEnrolled&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function QuestDockDragHandle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var18 = var2.isExpanded;
            var6 = _closure1_slot3;
            var3 = var6.useContext;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var2 = var3.bind(var6)(var2);
            var2 = var2.quest;
            var3 = _closure1_slot9;
            var15 = var3.bind(var4)();
            var5 = var6.useContext;
            var7 = _closure1_slot0;
            var3 = 7;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.QuestDockGestureContext;
            var3 = var5.bind(var6)(var3);
            var9 = var3.activeQuestDockMode;
            var _closure2_slot0 = var9;
            var14 = var3.questDockWrapperSpecs;
            var _closure2_slot1 = var14;
            var5 = var2.userStatus;
            var3 = null;
            var6 = var3 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 141; continue _fun0001 }
 135:
            var2 = var5.enrolledAt;
 141:
            var10 = var3 != var2;
            var _closure2_slot2 = var10;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 8;
            var3 = var19[var2];
            var8 = var20.bind(var4)(var3);
            var5 = var8.useAnimatedStyle;
            var3 = function D() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var3 = {};
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 9;
                    var2 = var2[var9];
                    var8 = undefined;
                    var10 = var4.bind(var8)(var2);
                    var6 = var10.withSpring;
                    var7 = _closure2_slot0;
                    var2 = var7.get;
                    var7 = var2.bind(var7)();
                    var2 = _closure1_slot5;
                    var2 = var2.CLOSED;
                    if(!(var7 !== var2)) { _fun0002_ip = 93; continue _fun0002 }
 64:
                    var7 = _closure2_slot0;
                    var2 = var7.get;
                    var11 = var2.bind(var7)();
                    var2 = _closure1_slot5;
                    var7 = var2.SOFT_DISMISSED;
                    var2 = 0;
                    if(!(var11 === var7)) { _fun0002_ip = 96; continue _fun0002 }
 93:
                    var2 = 6;
 96:
                    var7 = _closure1_slot6;
                    var2 = var6.bind(var10)(var2, var7);
                    var3['translateY'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot1;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    var8 = var4.width;
                    var4 = 2;
                    var4 = var8 / var4;
                    var4 = var5.bind(var6)(var4, var7);
                    var3['translateX'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var11 = 9;
            var6 = var19[var11];
            var6 = var20.bind(var4)(var6);
            var6 = var6.withSpring;
            var12['withSpring'] = var6;
            var12['activeQuestDockMode'] = var9;
            var7 = _closure1_slot5;
            var12['QuestDockMode'] = var7;
            var6 = _closure1_slot6;
            var12['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = var6;
            var12['questDockWrapperSpecs'] = var14;
            var3['__closure'] = var12;
            var12 = 9438955055878.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot10;
            var3['__initData'] = var12;
            var8 = var5.bind(var8)(var3);
            var3 = var19[var2];
            var12 = var20.bind(var4)(var3);
            var5 = var12.useAnimatedStyle;
            var3 = function p() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot2;
                    if(var6) { _fun0003_ip = 98; continue _fun0003 }
 42:
                    var7 = _closure2_slot0;
                    var6 = var7.get;
                    var7 = var6.bind(var7)();
                    var6 = _closure1_slot5;
                    var6 = var6.CLOSED;
                    if(!(var7 !== var6)) { _fun0003_ip = 98; continue _fun0003 }
 69:
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var7 = var3.bind(var6)();
                    var3 = _closure1_slot5;
                    var6 = var3.SOFT_DISMISSED;
                    var3 = 0;
                    if(!(var7 === var6)) { _fun0003_ip = 101; continue _fun0003 }
 98:
                    var3 = 1;
 101:
                    var2 = _closure1_slot6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var16 = var19[var11];
            var16 = var20.bind(var4)(var16);
            var16 = var16.withSpring;
            var14['withSpring'] = var16;
            var14['isEnrolled'] = var10;
            var14['activeQuestDockMode'] = var9;
            var14['QuestDockMode'] = var7;
            var14['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = var6;
            var3['__closure'] = var14;
            var14 = 1642273909925.0;
            var3['__workletHash'] = var14;
            var14 = _closure1_slot11;
            var3['__initData'] = var14;
            var17 = var5.bind(var12)(var3);
            var2 = var19[var2];
            var3 = var20.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function C() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot2;
                    if(var6) { _fun0004_ip = 106; continue _fun0004 }
 42:
                    var7 = _closure2_slot0;
                    var6 = var7.get;
                    var7 = var6.bind(var7)();
                    var6 = _closure1_slot5;
                    var6 = var6.CLOSED;
                    if(!(var7 !== var6)) { _fun0004_ip = 106; continue _fun0004 }
 69:
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var7 = var3.bind(var6)();
                    var3 = _closure1_slot5;
                    var6 = var3.SOFT_DISMISSED;
                    var3 = 0.5;
                    if(!(var7 === var6)) { _fun0004_ip = 108; continue _fun0004 }
 106:
                    var3 = 0;
 108:
                    var2 = _closure1_slot6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var11 = var19[var11];
            var11 = var20.bind(var4)(var11);
            var11 = var11.withSpring;
            var5['withSpring'] = var11;
            var5['isEnrolled'] = var10;
            var5['activeQuestDockMode'] = var9;
            var5['QuestDockMode'] = var7;
            var5['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = var6;
            var1['__closure'] = var5;
            var5 = 139735065055.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot12;
            var1['__initData'] = var5;
            var12 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var15.dragHandleWrapper;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var10 = _closure1_slot1;
            var9 = 10;
            var5 = var19[var9];
            var6 = var10.bind(var4)(var5);
            var5 = {};
            var5['style'] = var8;
            var8 = var19[var9];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var14 = var15.dragHandleOverlay;
            var11 = new Array(2);
            var11[0] = var14;
            var11[1] = var12;
            var8['style'] = var11;
            var12 = 11;
            var11 = var19[var12];
            var11 = var20.bind(var4)(var11);
            var14 = var11.ActionSheetHeaderBar;
            var11 = {};
            var16 = 12;
            var19 = var19[var16];
            var19 = var20.bind(var4)(var19);
            var19 = var19.ActionSheetHeaderBarVariants;
            var19 = var19.OVERLAY;
            var11['variant'] = var19;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 13;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            if(var18) { _fun0001_ip = 657; continue _fun0001 }
 642:
            var18 = var19.Yplnt7;
            var18 = var20.bind(var21)(var18);
            _fun0001_ip = 670; continue _fun0001;
 657:
            var19 = var19.GQ+4bm;
            var18 = var20.bind(var21)(var19);
 670:
            var11['accessibilityLabel'] = var18;
            var11 = var3.bind(var4)(var14, var11);
            var8['children'] = var11;
            var10 = var3.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot7;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = var14[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {'style': null, 'pointerEvents': 'none', 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants'};
            var18 = var15.dragHandleOverlay;
            var15 = new Array(2);
            var15[0] = var18;
            var15[1] = var17;
            var9['style'] = var15;
            var15 = _closure1_slot0;
            var12 = var14[var12];
            var12 = var15.bind(var4)(var12);
            var13 = var12.ActionSheetHeaderBar;
            var12 = {};
            var14 = var14[var16];
            var14 = var15.bind(var4)(var14);
            var14 = var14.ActionSheetHeaderBarVariants;
            var14 = var14.FLOATING;
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
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockDragHandle.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();