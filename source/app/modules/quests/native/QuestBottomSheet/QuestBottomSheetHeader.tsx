// app/modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'gap': 6};
    var11 = 5;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingHorizontal'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['paddingTop'] = var10;
    var4['container'] = var9;
    var9 = {'alignItems': 'center', 'flexDirection': 'row'};
    var10 = 'center';
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9['paddingHorizontal'] = var11;
    var4['containerWithActionSheet'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['title'] = var9;
    var9 = {'textAlign': 'left', 'flex': 1};
    var4['titleWithActionSheet'] = var9;
    var9 = {'flexGrow': 0, 'flexShrink': 0};
    var4['actionSheetButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function QuestBottomSheetHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.quest;
            var3 = var1.step;
            var6 = var1.withActionSheet;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var1 = var1.location;
            var2 = _closure1_slot8;
            var10 = var2.bind(var4)();
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 13;
            var2 = var8[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.useActionSheetPressHandler;
            var13 = var2.bind(var7)(var5);
            var2 = {};
            var2['quest'] = var5;
            var2['step'] = var3;
            var2['location'] = var1;
            var1 = function useHeaderCopy(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var5 = var2.quest;
                    var _closure3_slot0 = var5;
                    var14 = var2.step;
                    var _closure3_slot1 = var14;
                    var21 = var2.location;
                    var17 = undefined;
                    var _closure3_slot2 = var17;
                    var _closure3_slot3 = var17;
                    var _closure3_slot4 = var17;
                    var _closure3_slot5 = var17;
                    var _closure3_slot6 = var17;
                    var _closure3_slot7 = var17;
                    var _closure3_slot8 = var17;
                    var _closure3_slot9 = var17;
                    var _closure3_slot10 = var17;
                    var _closure3_slot11 = var17;
                    var _closure3_slot12 = var17;
                    var4 = var5.userStatus;
                    var3 = null;
                    var6 = var3 == var4;
                    var2 = undefined;
                    if(var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var4.completedAt;
case 4:
                    var16 = var3 != var2;
                    _closure3_slot2 = var16;
                    var2 = var5.config;
                    var2 = var2.messages;
                    var11 = var2.gameTitle;
                    _closure3_slot3 = var11;
                    var3 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var6 = 6;
                    var2 = var18[var6];
                    var7 = var3.bind(var17)(var2);
                    var2 = var7.useQuestTaskDetails;
                    var8 = var2.bind(var7)(var5);
                    var2 = 7;
                    var7 = var18[var2];
                    var9 = var3.bind(var17)(var7);
                    var7 = var9.hasWatchVideoTasks;
                    var15 = var7.bind(var9)(var5);
                    _closure3_slot4 = var15;
                    var7 = var18[var2];
                    var9 = var3.bind(var17)(var7);
                    var7 = var9.isInGameQuest;
                    var7 = var7.bind(var9)(var5);
                    _closure3_slot5 = var7;
                    var6 = var18[var6];
                    var9 = var3.bind(var17)(var6);
                    var6 = var9.useTaskPlatformScreen;
                    var10 = var6.bind(var9)(var5, var8);
                    var9 = _closure1_slot3;
                    var6 = 1;
                    var9 = var9.bind(var17)(var10, var6);
                    var6 = 0;
                    var13 = var9[var6];
                    _closure3_slot6 = var13;
                    var4 = _closure1_slot4;
                    var10 = var4.useMemo;
                    var9 = new Array(1);
                    var9[0] = var5;
                    var6 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.SharedQuestFields;
                        var2 = var3.build;
                        var1 = _closure3_slot0;
                        var1 = var1.config;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var10.bind(var4)(var6, var9);
                    _closure3_slot7 = var6;
                    var9 = var8.targetMinutes;
                    _closure3_slot8 = var9;
                    var12 = var4.useMemo;
                    var10 = new Array(1);
                    var10[0] = var5;
                    var8 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hasStreamOnDesktopTask;
                        var1 = {};
                        var4 = _closure3_slot0;
                        var1['quest'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var12 = var12.bind(var4)(var8, var10);
                    _closure3_slot9 = var12;
                    var8 = 9;
                    var8 = var18[var8];
                    var20 = var3.bind(var17)(var8);
                    var19 = var20.useShouldAllowMobileVideoTask;
                    var10 = var5.config;
                    var8 = {};
                    var8['location'] = var21;
                    var8 = var19.bind(var20)(var10, var8);
                    _closure3_slot10 = var8;
                    var10 = var6.defaultRewardNameWithArticle;
                    _closure3_slot11 = var10;
                    var2 = var18[var2];
                    var3 = var3.bind(var17)(var2);
                    var2 = var3.isSponsoredPlayQuest;
                    var5 = var2.bind(var3)(var5);
                    _closure3_slot12 = var5;
                    var3 = var4.useMemo;
                    var2 = new Array(12);
                    var2[0] = var16;
                    var2[1] = var15;
                    var2[2] = var14;
                    var2[3] = var13;
                    var2[4] = var12;
                    var2[5] = var11;
                    var2[6] = var10;
                    var2[7] = var9;
                    var2[8] = var8;
                    var2[9] = var7;
                    var2[10] = var6;
                    var2[11] = var5;
                    var1 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = _closure3_slot2;
                            if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                            var1 = _closure3_slot4;
                            if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var1 = _closure3_slot5;
                            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var1 = _closure3_slot7;
                            var1 = var1.defaultInGameTask;
                            var2 = null;
                            if(!(var2 == var1)) { _fun0003_ip = 12; continue _fun0003 }
case 10:
                            var4 = _closure3_slot1;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = 11;
                            var2 = var2[var7];
                            var8 = undefined;
                            var2 = var5.bind(var8)(var2);
                            var2 = var2.QuestBottomSheetStep;
                            var2 = var2.TASK_SELECT;
                            if(!(var4 !== var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                            var4 = _closure3_slot1;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var5.bind(var8)(var2);
                            var2 = var2.QuestBottomSheetStep;
                            var2 = var2.CONSOLE_CONNECT;
                            if(!(var4 !== var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                            var2 = _closure3_slot12;
                            if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                            var4 = _closure3_slot6;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 12;
                            var2 = var7[var2];
                            var2 = var5.bind(var8)(var2);
                            var2 = var2.TaskPlatformScreen;
                            var2 = var2.DESKTOP;
                            if(!(var4 === var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                            var2 = _closure3_slot9;
                            if(var2) { _fun0003_ip = 21; continue _fun0003 }
case 19:
                            var4 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 10;
                            var5 = var9[var2];
                            var5 = var4.bind(var8)(var5);
                            var7 = var5.intl;
                            var5 = var7.formatToPlainString;
                            var2 = var9[var2];
                            var2 = var4.bind(var8)(var2);
                            var2 = var2.t;
                            var4 = var2.NIimTk;
                            var2 = {};
                            var9 = _closure3_slot3;
                            var2['gameTitle'] = var9;
                            var9 = _closure3_slot11;
                            var2['rewardNameWithArticle'] = var9;
                            var9 = _closure3_slot8;
                            var2['targetMinutes'] = var9;
                            var2 = var5.bind(var7)(var4, var2);
                            _fun0003_ip = 22; continue _fun0003;
case 21:
                            var5 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 10;
                            var7 = var10[var4];
                            var7 = var5.bind(var8)(var7);
                            var9 = var7.intl;
                            var7 = var9.formatToPlainString;
                            var4 = var10[var4];
                            var4 = var5.bind(var8)(var4);
                            var4 = var4.t;
                            var5 = var4.hkJ+Gh;
                            var4 = {};
                            var10 = _closure3_slot3;
                            var4['gameTitle'] = var10;
                            var10 = _closure3_slot11;
                            var4['questReward'] = var10;
                            var10 = _closure3_slot8;
                            var4['streamingDurationRequirement'] = var10;
                            var2 = var7.bind(var9)(var5, var4);
case 22:
                            _fun0003_ip = 23; continue _fun0003;
case 17:
                            var5 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 10;
                            var7 = var10[var4];
                            var7 = var5.bind(var8)(var7);
                            var9 = var7.intl;
                            var7 = var9.formatToPlainString;
                            var4 = var10[var4];
                            var4 = var5.bind(var8)(var4);
                            var4 = var4.t;
                            var5 = var4.2GJLKy;
                            var4 = {};
                            var10 = _closure3_slot8;
                            var4['targetMinutes'] = var10;
                            var10 = _closure3_slot11;
                            var4['rewardNameWithArticle'] = var10;
                            var2 = var7.bind(var9)(var5, var4);
case 23:
                            _fun0003_ip = 24; continue _fun0003;
case 15:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 10;
                            var5 = var10[var4];
                            var5 = var9.bind(var8)(var5);
                            var7 = var5.intl;
                            var5 = var7.string;
                            var4 = var10[var4];
                            var4 = var9.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4.svdwbG;
                            var2 = var5.bind(var7)(var4);
case 24:
                            _fun0003_ip = 25; continue _fun0003;
case 13:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 10;
                            var4 = var9[var3];
                            var4 = var7.bind(var8)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var3 = var9[var3];
                            var3 = var7.bind(var8)(var3);
                            var3 = var3.t;
                            var3 = var3.drVw4e;
                            var2 = var4.bind(var5)(var3);
case 25:
                            return var2;
case 12:
                            var1 = var1.messages;
                            var1 = var1.taskDescription;
                            return var1;
case 8:
                            var1 = _closure3_slot10;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 10;
                            var4 = var8[var2];
                            var3 = undefined;
                            var4 = var7.bind(var3)(var4);
                            var5 = var4.intl;
                            var4 = var5.formatToPlainString;
                            var2 = var8[var2];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.t;
                            if(var1) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                            var3 = var2.IpoqqK;
                            var1 = {};
                            var7 = _closure3_slot11;
                            var1['questReward'] = var7;
                            var1 = var4.bind(var5)(var3, var1);
                            _fun0003_ip = 28; continue _fun0003;
case 26:
                            var3 = var2.ttFsLi;
                            var2 = {};
                            var6 = _closure3_slot11;
                            var2['reward'] = var6;
                            var1 = var4.bind(var5)(var3, var2);
case 28:
                            return var1;
case 6:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 10;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.ij5E//;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var11 = var1.bind(var4)(var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var10.container;
            var5 = new Array(2);
            var5[0] = var7;
            var7 = var6;
            if(!var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var7 = var10.containerWithActionSheet;
case 29:
            var5[1] = var7;
            var1['style'] = var5;
            var5 = null;
            var7 = var5 != var11;
            if(!var7) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 14;
            var5 = var14[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'variant': 'redesign/heading-18/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            var15 = var10.title;
            var14 = new Array(2);
            var14[0] = var15;
            var15 = var6;
            if(!var6) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var15 = var10.titleWithActionSheet;
case 33:
            var14[1] = var15;
            var5['style'] = var14;
            var5['children'] = var11;
            var7 = var9.bind(var4)(var8, var5);
case 31:
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var9 = _closure1_slot6;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 15;
            var7 = var14[var7];
            var7 = var11.bind(var4)(var7);
            var8 = var7.PressableOpacity;
            var7 = {};
            var15 = 'button';
            var7['accessibilityRole'] = var15;
            var7['onPress'] = var13;
            var10 = var10.actionSheetButton;
            var7['style'] = var10;
            var10 = 16;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.MoreHorizontalIcon;
            var10 = {};
            var13 = _closure1_slot1;
            var12 = 5;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.INTERACTIVE_NORMAL;
            var10['color'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 35:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();