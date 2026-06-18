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
    var4 = 15;
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
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var4 = var4.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot0;
                var2['questId'] = var5;
                var5 = _closure2_slot3;
                var7 = null;
                var8 = var7 == var5;
                var5 = undefined;
                if(var8) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var9 = _closure2_slot3;
                var8 = var9.getQuestContentPosition;
                var5 = var8.bind(var9)();
case 5:
                var2['questContentPosition'] = var5;
                var5 = _closure2_slot1;
                var2['sourceQuestContent'] = var5;
                var2 = var4.bind(var1)(var2);
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 8;
                var5 = var9[var2];
                var8 = var4.bind(var1)(var5);
                var5 = var8.shouldMigrateToAdAnalyticsInterface;
                var2 = var9[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.AdAnalyticsInterfaceExperimentStep;
                var4 = var2.STEP_2_CLICKED_INTERNAL;
                var2 = 'quest_bottom_sheet_watch_task';
                var2 = var5.bind(var8)(var4, var2);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var2 = 14;
                var2 = var9[var2];
                var4 = var8.bind(var1)(var2);
                var3 = var4.trackQuestContentClicked;
                var2 = {};
                var5 = _closure2_slot0;
                var2['questId'] = var5;
                var5 = 13;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.QuestContent;
                var5 = var5.QUEST_BOTTOM_SHEET;
                var2['questContent'] = var5;
                var5 = 12;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.QuestContentCTA;
                var5 = var5.WATCH_VIDEO;
                var2['questContentCTA'] = var5;
                var5 = _closure2_slot3;
                var10 = var7 == var5;
                var5 = undefined;
                if(var10) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var11 = _closure2_slot3;
                var10 = var11.getQuestContentPosition;
                var5 = var10.bind(var11)();
case 9:
                var2['questContentPosition'] = var5;
                var5 = _closure2_slot3;
                var10 = var7 == var5;
                var5 = undefined;
                if(var10) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var11 = _closure2_slot3;
                var10 = var11.getId;
                var5 = var10.bind(var11)();
case 11:
                var2['impressionId'] = var5;
                var5 = _closure2_slot1;
                var2['sourceQuestContent'] = var5;
                var2 = var3.bind(var4)(var2);
                _fun0002_ip = 13; continue _fun0002;
case 7:
                var2 = 9;
                var2 = var9[var2];
                var4 = var8.bind(var1)(var2);
                var3 = var4.captureAdUserAction;
                var2 = {};
                var5 = 10;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.AdUserActionType;
                var5 = var5.CLICK_INTERNAL;
                var2['type'] = var5;
                var5 = 11;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.AdCreativeType;
                var5 = var5.QUEST;
                var2['adCreativeType'] = var5;
                var5 = _closure2_slot0;
                var2['adCreativeId'] = var5;
                var5 = 12;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.QuestContentCTA;
                var5 = var5.WATCH_VIDEO;
                var2['questContentCTA'] = var5;
                var5 = 13;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.QuestContent;
                var5 = var5.QUEST_BOTTOM_SHEET;
                var2['surfaceId'] = var5;
                var5 = _closure2_slot1;
                var2['sourceQuestContent'] = var5;
                var5 = _closure2_slot3;
                var8 = var7 == var5;
                var5 = undefined;
                if(var8) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var9 = _closure2_slot3;
                var8 = var9.getId;
                var5 = var8.bind(var9)();
case 14:
                var2['impressionId'] = var5;
                var5 = _closure2_slot3;
                var7 = var7 == var5;
                var5 = undefined;
                if(var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var7 = _closure2_slot3;
                var6 = var7.getQuestContentPosition;
                var5 = var6.bind(var7)();
case 16:
                var2['questContentPosition'] = var5;
                var2 = var3.bind(var4)(var2);
case 13:
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
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var2 = _closure2_slot3;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=35);
case 20:
                    return var2;
case 21:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 8;
                    var7 = var10[var4];
                    var9 = var6.bind(var3)(var7);
                    var7 = var9.shouldMigrateToAdAnalyticsInterface;
                    var4 = var10[var4];
                    var4 = var6.bind(var3)(var4);
                    var4 = var4.AdAnalyticsInterfaceExperimentStep;
                    var6 = var4.STEP_2_CLICKED_INTERNAL;
                    var4 = 'quest_bottom_sheet_mobile_activity';
                    var4 = var7.bind(var9)(var6, var4);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    if(var4) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var4 = 14;
                    var4 = var10[var4];
                    var6 = var9.bind(var3)(var4);
                    var5 = var6.trackQuestContentClicked;
                    var4 = {};
                    var7 = _closure2_slot0;
                    var4['questId'] = var7;
                    var7 = 13;
                    var7 = var10[var7];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.QuestContent;
                    var7 = var7.QUEST_BOTTOM_SHEET;
                    var4['questContent'] = var7;
                    var7 = 12;
                    var7 = var10[var7];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.QuestContentCTA;
                    var7 = var7.LAUNCH_MOBILE_ACTIVITY;
                    var4['questContentCTA'] = var7;
                    var7 = _closure2_slot4;
                    var11 = null;
                    var12 = var11 == var7;
                    var7 = undefined;
                    if(var12) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var13 = _closure2_slot4;
                    var12 = var13.getQuestContentPosition;
                    var7 = var12.bind(var13)();
case 26:
                    var4['questContentPosition'] = var7;
                    var7 = _closure2_slot4;
                    var11 = var11 == var7;
                    var7 = undefined;
                    if(var11) { _fun0003_ip = 10; continue _fun0003 }
case 28:
                    var12 = _closure2_slot4;
                    var11 = var12.getId;
                    var7 = var11.bind(var12)();
case 10:
                    var4['impressionId'] = var7;
                    var7 = _closure2_slot1;
                    var4['sourceQuestContent'] = var7;
                    var4 = var5.bind(var6)(var4);
                    _fun0003_ip = 29; continue _fun0003;
case 24:
                    var4 = 9;
                    var4 = var10[var4];
                    var6 = var9.bind(var3)(var4);
                    var5 = var6.captureAdUserAction;
                    var4 = {};
                    var7 = 10;
                    var7 = var10[var7];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.AdUserActionType;
                    var7 = var7.CLICK_INTERNAL;
                    var4['type'] = var7;
                    var7 = 11;
                    var7 = var10[var7];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.AdCreativeType;
                    var7 = var7.QUEST;
                    var4['adCreativeType'] = var7;
                    var7 = _closure2_slot0;
                    var4['adCreativeId'] = var7;
                    var7 = 12;
                    var7 = var10[var7];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.QuestContentCTA;
                    var7 = var7.LAUNCH_MOBILE_ACTIVITY;
                    var4['questContentCTA'] = var7;
                    var7 = 13;
                    var7 = var10[var7];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.QuestContent;
                    var7 = var7.QUEST_BOTTOM_SHEET;
                    var4['surfaceId'] = var7;
                    var7 = _closure2_slot1;
                    var4['sourceQuestContent'] = var7;
                    var7 = _closure2_slot4;
                    var9 = null;
                    var10 = var9 == var7;
                    var7 = undefined;
                    if(var10) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var11 = _closure2_slot4;
                    var10 = var11.getId;
                    var7 = var10.bind(var11)();
case 30:
                    var4['impressionId'] = var7;
                    var7 = _closure2_slot4;
                    var9 = var9 == var7;
                    var7 = undefined;
                    if(var9) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var9 = _closure2_slot4;
                    var8 = var9.getQuestContentPosition;
                    var7 = var8.bind(var9)();
case 32:
                    var4['questContentPosition'] = var7;
                    var4 = var5.bind(var6)(var4);
case 29:
                    return var3;
case 22:
                    return var2;
case 18:
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