// app/modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestDockMode;
    var _closure1_slot4 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useWatchTaskPressHandler(arg1) {
        var2 = arg1;
        var9 = var2.questId;
        var _closure2_slot0 = var9;
        var5 = var2.sourceQuestContent;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var7 = var4.useContext;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 2;
        var2 = var10[var2];
        var3 = undefined;
        var2 = var6.bind(var3)(var2);
        var2 = var2.QuestDockExternalCoordinationContext;
        var2 = var7.bind(var4)(var2);
        var8 = var2.setRestingQuestDockMode;
        var _closure2_slot2 = var8;
        var7 = var4.useContext;
        var2 = 3;
        var2 = var10[var2];
        var2 = var6.bind(var3)(var2);
        var2 = var2.QuestBottomSheetContext;
        var2 = var7.bind(var4)(var2);
        var7 = var2.isInQuestBottomSheet;
        var _closure2_slot3 = var7;
        var2 = 4;
        var2 = var10[var2];
        var3 = var6.bind(var3)(var2);
        var2 = var3.useQuestImpression;
        var6 = var2.bind(var3)();
        var _closure2_slot4 = var6;
        var3 = var4.useCallback;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot3;
                if(var1) { _fun0001_ip = 36; continue _fun0001 }
 13:
                var4 = _closure2_slot2;
                var1 = _closure1_slot4;
                var3 = var1.COLLAPSED;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                _fun0001_ip = 75; continue _fun0001;
 36:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var1 = 'QuestBottomSheet';
                var1 = var3.bind(var4)(var1);
 75:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = {};
                var6 = _closure2_slot0;
                var3['questId'] = var6;
                var6 = _closure2_slot4;
                var7 = null;
                var8 = var7 == var6;
                var6 = undefined;
                if(var8) { _fun0001_ip = 137; continue _fun0001 }
 123:
                var9 = _closure2_slot4;
                var8 = var9.getQuestContentPosition;
                var6 = var8.bind(var9)();
 137:
                var3['questContentPosition'] = var6;
                var6 = _closure2_slot1;
                var3['sourceQuestContent'] = var6;
                var3 = var4.bind(var1)(var3);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var2 = var9[var6];
                var4 = var8.bind(var1)(var2);
                var3 = var4.trackQuestContentClicked;
                var2 = {};
                var10 = _closure2_slot0;
                var2['questId'] = var10;
                var10 = 8;
                var10 = var9[var10];
                var10 = var8.bind(var1)(var10);
                var10 = var10.QuestContent;
                var10 = var10.QUEST_BOTTOM_SHEET;
                var2['questContent'] = var10;
                var6 = var9[var6];
                var6 = var8.bind(var1)(var6);
                var6 = var6.QuestContentCTA;
                var6 = var6.WATCH_VIDEO;
                var2['questContentCTA'] = var6;
                var6 = _closure2_slot4;
                var8 = var7 == var6;
                var6 = undefined;
                if(var8) { _fun0001_ip = 275; continue _fun0001 }
 261:
                var9 = _closure2_slot4;
                var8 = var9.getQuestContentPosition;
                var6 = var8.bind(var9)();
 275:
                var2['questContentPosition'] = var6;
                var6 = _closure2_slot4;
                var7 = var7 == var6;
                var6 = undefined;
                if(var7) { _fun0001_ip = 307; continue _fun0001 }
 293:
                var8 = _closure2_slot4;
                var7 = var8.getId;
                var6 = var7.bind(var8)();
 307:
                var2['impressionId'] = var6;
                var5 = _closure2_slot1;
                var2['sourceQuestContent'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useWatchTaskPressHandler'] = var2;
    return var1;
})();