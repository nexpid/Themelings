// app/modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function useDismissSheetOrCollapseDock() {
        var5 = _closure1_slot4;
        var4 = var5.useContext;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 3;
        var3 = var9[var3];
        var7 = undefined;
        var3 = var8.bind(var7)(var3);
        var3 = var3.QuestDockExternalCoordinationContext;
        var3 = var4.bind(var5)(var3);
        var5 = var3.setRestingQuestDockMode;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot4;
        var4 = var6.useContext;
        var3 = 4;
        var3 = var9[var3];
        var3 = var8.bind(var7)(var3);
        var3 = var3.QuestBottomSheetContext;
        var3 = var4.bind(var6)(var3);
        var6 = var3.isInQuestBottomSheet;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot0;
                var2 = _closure1_slot5;
                var3 = var2.COLLAPSED;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var1 = 'QuestBottomSheet';
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestDockMode;
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useWatchTaskPressHandler(arg1) {
        var2 = arg1;
        var8 = var2.questId;
        var _closure2_slot0 = var8;
        var5 = var2.sourceQuestContent;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot6;
        var6 = undefined;
        var7 = var3.bind(var6)();
        var _closure2_slot2 = var7;
        var4 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 6;
        var3 = var9[var3];
        var4 = var4.bind(var6)(var3);
        var3 = var4.useQuestImpression;
        var6 = var3.bind(var4)();
        var _closure2_slot3 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = {};
                var6 = _closure2_slot0;
                var3['questId'] = var6;
                var6 = _closure2_slot3;
                var7 = null;
                var8 = var7 == var6;
                var6 = undefined;
                if(var8) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var9 = _closure2_slot3;
                var8 = var9.getQuestContentPosition;
                var6 = var8.bind(var9)();
case 5:
                var3['questContentPosition'] = var6;
                var6 = _closure2_slot1;
                var3['sourceQuestContent'] = var6;
                var3 = var4.bind(var1)(var3);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 8;
                var2 = var9[var2];
                var4 = var8.bind(var1)(var2);
                var3 = var4.trackQuestContentClicked;
                var2 = {};
                var6 = _closure2_slot0;
                var2['questId'] = var6;
                var6 = 9;
                var6 = var9[var6];
                var6 = var8.bind(var1)(var6);
                var6 = var6.QuestContent;
                var6 = var6.QUEST_BOTTOM_SHEET;
                var2['questContent'] = var6;
                var6 = 10;
                var6 = var9[var6];
                var6 = var8.bind(var1)(var6);
                var6 = var6.QuestContentCTA;
                var6 = var6.WATCH_VIDEO;
                var2['questContentCTA'] = var6;
                var6 = _closure2_slot3;
                var8 = var7 == var6;
                var6 = undefined;
                if(var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var9 = _closure2_slot3;
                var8 = var9.getQuestContentPosition;
                var6 = var8.bind(var9)();
case 7:
                var2['questContentPosition'] = var6;
                var6 = _closure2_slot3;
                var7 = var7 == var6;
                var6 = undefined;
                if(var7) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var8 = _closure2_slot3;
                var7 = var8.getId;
                var6 = var7.bind(var8)();
case 9:
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
    var3['useWatchTaskPressHandler'] = var4;
    var2 = function useMobileActivityPressHandler(arg1) {
        var2 = arg1;
        var9 = var2.questId;
        var _closure2_slot0 = var9;
        var5 = var2.sourceQuestContent;
        var _closure2_slot1 = var5;
        var7 = var2.launchMobileActivity;
        var _closure2_slot2 = var7;
        var3 = _closure1_slot6;
        var10 = undefined;
        var8 = var3.bind(var10)();
        var _closure2_slot3 = var8;
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 6;
        var3 = var6[var3];
        var4 = var4.bind(var10)(var3);
        var3 = var4.useQuestImpression;
        var6 = var3.bind(var4)();
        var _closure2_slot4 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var2 = _closure2_slot3;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=35);
case 13:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 8;
                    var4 = var10[var4];
                    var6 = var9.bind(var3)(var4);
                    var5 = var6.trackQuestContentClicked;
                    var4 = {};
                    var8 = _closure2_slot0;
                    var4['questId'] = var8;
                    var8 = 9;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.QuestContent;
                    var8 = var8.QUEST_BOTTOM_SHEET;
                    var4['questContent'] = var8;
                    var8 = 10;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.QuestContentCTA;
                    var8 = var8.LAUNCH_MOBILE_ACTIVITY;
                    var4['questContentCTA'] = var8;
                    var8 = _closure2_slot4;
                    var9 = null;
                    var10 = var9 == var8;
                    var8 = undefined;
                    if(var10) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var11 = _closure2_slot4;
                    var10 = var11.getQuestContentPosition;
                    var8 = var10.bind(var11)();
case 17:
                    var4['questContentPosition'] = var8;
                    var8 = _closure2_slot4;
                    var9 = var9 == var8;
                    var8 = undefined;
                    if(var9) { _fun0003_ip = 8; continue _fun0003 }
case 19:
                    var10 = _closure2_slot4;
                    var9 = var10.getId;
                    var8 = var9.bind(var10)();
case 8:
                    var4['impressionId'] = var8;
                    var7 = _closure2_slot1;
                    var4['sourceQuestContent'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 15:
                    return var2;
case 11:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var2.bind(var10)(var1);
        var1 = new Array(5);
        var1[0] = var9;
        var1[1] = var8;
        var1[2] = var7;
        var1[3] = var6;
        var1[4] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useMobileActivityPressHandler'] = var2;
    return var1;
})();