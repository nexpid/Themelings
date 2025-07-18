// app/modules/quests/native/QuestDock/QuestDockContentExpanded.tsx
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
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var11 = var4.StyleSheet;
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
    var4 = var4.QUEST_DOCK_EXPANDED_HEIGHT;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
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
    var15 = var11.absoluteFillObject;
    var16 = var10;
    var11 = copyDataProperties(var16, var15);
    var11 = 'bottom';
    var10[var11] = var1;
    var13 = 'flex';
    var11 = 'display';
    var10[var11] = var13;
    var11 = 'zIndex';
    var10[var11] = var12;
    var4['wrapper'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = 'function QuestDockContentExpandedTsx1(){const{isEnrolled,QUEST_DOCK_EXPANDED_HEIGHT,windowDimensions,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:isEnrolled?undefined:QUEST_DOCK_EXPANDED_HEIGHT,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}';
    var4['code'] = var8;
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function QuestDockContentExpanded() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = _closure1_slot3;
            var3 = var6.useContext;
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var2 = var3.bind(var6)(var2);
            var10 = var2.quest;
            var2 = _closure1_slot9;
            var5 = var2.bind(var4)();
            var3 = var6.useContext;
            var8 = _closure1_slot0;
            var2 = 7;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.QuestDockGestureContext;
            var2 = var3.bind(var6)(var2);
            var12 = var2.activeQuestDockMode;
            var _closure2_slot0 = var12;
            var11 = var2.questDockWrapperSpecs;
            var _closure2_slot1 = var11;
            var13 = var2.windowDimensions;
            var _closure2_slot2 = var13;
            var6 = var10.userStatus;
            var3 = null;
            var8 = var3 == var6;
            var2 = undefined;
            if(var8) { _fun0001_ip = 142; continue _fun0001 }
 136:
            var2 = var6.enrolledAt;
 142:
            var6 = var3 != var2;
            var _closure2_slot3 = var6;
            var14 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var3 = var14.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function n() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var4 = _closure2_slot3;
                    var7 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 23; continue _fun0002 }
 16:
                    var3 = _closure1_slot6;
 23:
                    var1['height'] = var3;
                    var4 = _closure2_slot2;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var3 = var3.width;
                    var1['width'] = var3;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 9;
                    var3 = var3[var8];
                    var9 = var5.bind(var7)(var3);
                    var5 = var9.withSpring;
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var10 = var3.bind(var6)();
                    var3 = _closure1_slot4;
                    var6 = var3.EXPANDED;
                    var3 = 0;
                    if(!(var10 === var6)) { _fun0002_ip = 109; continue _fun0002 }
 106:
                    var3 = 1;
 109:
                    var6 = _closure1_slot5;
                    var3 = var5.bind(var9)(var3, var6);
                    var1['opacity'] = var3;
                    var3 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.withSpring;
                    var8 = _closure2_slot1;
                    var7 = var8.get;
                    var7 = var7.bind(var8)();
                    var7 = var7.width;
                    var8 = _closure2_slot2;
                    var2 = var8.get;
                    var2 = var2.bind(var8)();
                    var2 = var2.width;
                    var7 = var7 - var2;
                    var2 = 2;
                    var2 = var7 / var2;
                    var2 = var4.bind(var5)(var2, var6);
                    var3['translateX'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var8['isEnrolled'] = var6;
            var15 = _closure1_slot6;
            var8['QUEST_DOCK_EXPANDED_HEIGHT'] = var15;
            var8['windowDimensions'] = var13;
            var13 = 9;
            var13 = var9[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.withSpring;
            var8['withSpring'] = var13;
            var8['activeQuestDockMode'] = var12;
            var12 = _closure1_slot4;
            var8['QuestDockMode'] = var12;
            var12 = _closure1_slot5;
            var8['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = var12;
            var8['questDockWrapperSpecs'] = var11;
            var1['__closure'] = var8;
            var8 = 17161265612101.0;
            var1['__workletHash'] = var8;
            var8 = _closure1_slot10;
            var1['__initData'] = var8;
            var8 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var1 = 10;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var9 = var5.wrapper;
            var5 = new Array(2);
            var5[0] = var9;
            var5[1] = var8;
            var1['style'] = var5;
            var8 = !var6;
            if(var6) { _fun0001_ip = 372; continue _fun0001 }
 340:
            var11 = _closure1_slot7;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 11;
            var5 = var12[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var8 = var11.bind(var4)(var9, var5);
 372:
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 425; continue _fun0001 }
 383:
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 12;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var10 = var10.id;
            var7['questId'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 425:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockContentExpanded.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();