// app/modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx
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
    var11 = var4.StyleSheet;
    var12 = 2;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestDockMode;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QUEST_DOCK_MODE_CHANGE_PHYSICS;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var14 = var11.absoluteFillObject;
    var15 = var10;
    var11 = copyDataProperties(var15, var14);
    var11 = 'bottom';
    var10[var11] = var1;
    var11 = 'zIndex';
    var10[var11] = var12;
    var4['questDockContentCollapsed'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var8 = 'function QuestDockContentCollapsedTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}';
    var4['code'] = var8;
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = "function QuestDockContentCollapsedTsx2(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};}";
    var4['code'] = var8;
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function QuestDockContentCollapsed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.hideOnExpand;
            var4 = undefined;
            var11 = var4 === var2;
            if(var11) { _fun0001_ip = 23; continue _fun0001 }
 20:
            var11 = var2;
 23:
            var _closure2_slot0 = var11;
            var5 = _closure1_slot3;
            var3 = var5.useContext;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var3.bind(var5)(var2);
            var2 = var2.quest;
            var3 = _closure1_slot8;
            var8 = var3.bind(var4)();
            var5 = var2.userStatus;
            var3 = null;
            var6 = var3 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 102; continue _fun0001 }
 96:
            var2 = var5.enrolledAt;
 102:
            var6 = var3 != var2;
            var9 = _closure1_slot3;
            var5 = var9.useContext;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 7;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.QuestDockGestureContext;
            var2 = var5.bind(var9)(var2);
            var13 = var2.activeQuestDockMode;
            var _closure2_slot1 = var13;
            var2 = 8;
            var5 = var10[var2];
            var14 = var3.bind(var4)(var5);
            var9 = var14.useAnimatedStyle;
            var5 = function p() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var7 = _closure2_slot1;
                    var3 = var7.get;
                    var9 = var3.bind(var7)();
                    var3 = _closure1_slot4;
                    var8 = var3.COLLAPSED;
                    var7 = 1;
                    var3 = var7;
                    if(!(var9 !== var8)) { _fun0002_ip = 80; continue _fun0002 }
 68:
                    var6 = _closure2_slot0;
                    var3 = var7;
                    if(!var6) { _fun0002_ip = 80; continue _fun0002 }
 78:
                    var3 = 0;
 80:
                    var2 = _closure1_slot5;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var15 = {};
            var12 = 9;
            var12 = var10[var12];
            var12 = var3.bind(var4)(var12);
            var12 = var12.withSpring;
            var15['withSpring'] = var12;
            var15['activeQuestDockMode'] = var13;
            var12 = _closure1_slot4;
            var15['QuestDockMode'] = var12;
            var15['hideOnExpand'] = var11;
            var16 = _closure1_slot5;
            var15['QUEST_DOCK_MODE_CHANGE_PHYSICS'] = var16;
            var5['__closure'] = var15;
            var15 = 13361221764426.0;
            var5['__workletHash'] = var15;
            var15 = _closure1_slot9;
            var5['__initData'] = var15;
            var9 = var9.bind(var14)(var5);
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useAnimatedProps;
            var1 = function S() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var4 = _closure2_slot1;
                    var2 = var4.get;
                    var6 = var2.bind(var4)();
                    var2 = _closure1_slot4;
                    var5 = var2.COLLAPSED;
                    var4 = 'auto';
                    var2 = var4;
                    if(!(var6 !== var5)) { _fun0003_ip = 56; continue _fun0003 }
 42:
                    var3 = _closure2_slot0;
                    var2 = var4;
                    if(!var3) { _fun0003_ip = 56; continue _fun0003 }
 52:
                    var2 = 'none';
 56:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var5['activeQuestDockMode'] = var13;
            var5['QuestDockMode'] = var12;
            var5['hideOnExpand'] = var11;
            var1['__closure'] = var5;
            var5 = 14339269503421.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot10;
            var1['__initData'] = var5;
            var5 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var1 = 10;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = var8.questDockContentCollapsed;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var1['style'] = var8;
            var1['animatedProps'] = var5;
            var8 = !var6;
            if(var6) { _fun0001_ip = 433; continue _fun0001 }
 401:
            var10 = _closure1_slot6;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 11;
            var5 = var11[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var8 = var10.bind(var4)(var9, var5);
 433:
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 476; continue _fun0001 }
 444:
            var9 = _closure1_slot6;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 12;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
 476:
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
    var4 = 'modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();