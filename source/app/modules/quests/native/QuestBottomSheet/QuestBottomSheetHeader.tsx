// app/modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
 0:
            var1 = arg1;
            var5 = var1.quest;
            var3 = var1.step;
            var6 = var1.withActionSheet;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 29; continue _fun0001 }
 27:
            var6 = false;
 29:
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
 0:
                    var3 = arg1;
                    var2 = var3.quest;
                    var _closure3_slot0 = var2;
                    var13 = var3.step;
                    var _closure3_slot1 = var13;
                    var16 = var3.location;
                    var9 = undefined;
                    var _closure3_slot2 = var9;
                    var _closure3_slot3 = var9;
                    var _closure3_slot4 = var9;
                    var _closure3_slot5 = var9;
                    var _closure3_slot6 = var9;
                    var _closure3_slot7 = var9;
                    var _closure3_slot8 = var9;
                    var _closure3_slot9 = var9;
                    var _closure3_slot10 = var9;
                    var _closure3_slot11 = var9;
                    var5 = var2.userStatus;
                    var4 = null;
                    var6 = var4 == var5;
                    var3 = undefined;
                    if(var6) { _fun0002_ip = 95; continue _fun0002 }
 89:
                    var3 = var5.completedAt;
 95:
                    var15 = var4 != var3;
                    _closure3_slot2 = var15;
                    var3 = var2.config;
                    var3 = var3.messages;
                    var10 = var3.gameTitle;
                    _closure3_slot3 = var10;
                    var7 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var5 = 6;
                    var3 = var17[var5];
                    var6 = var7.bind(var9)(var3);
                    var3 = var6.useQuestTaskDetails;
                    var3 = var3.bind(var6)(var2);
                    var6 = 7;
                    var8 = var17[var6];
                    var11 = var7.bind(var9)(var8);
                    var8 = var11.hasWatchVideoTasks;
                    var14 = var8.bind(var11)(var2);
                    _closure3_slot4 = var14;
                    var6 = var17[var6];
                    var8 = var7.bind(var9)(var6);
                    var6 = var8.isInGameQuest;
                    var6 = var6.bind(var8)(var2);
                    _closure3_slot5 = var6;
                    var5 = var17[var5];
                    var8 = var7.bind(var9)(var5);
                    var5 = var8.useTaskPlatformScreen;
                    var11 = var5.bind(var8)(var2, var3);
                    var8 = _closure1_slot3;
                    var5 = 1;
                    var8 = var8.bind(var9)(var11, var5);
                    var5 = 0;
                    var12 = var8[var5];
                    _closure3_slot6 = var12;
                    var4 = _closure1_slot4;
                    var11 = var4.useMemo;
                    var8 = new Array(1);
                    var8[0] = var2;
                    var5 = function() {
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
                    var5 = var11.bind(var4)(var5, var8);
                    _closure3_slot7 = var5;
                    var8 = var3.targetMinutes;
                    _closure3_slot8 = var8;
                    var18 = var4.useMemo;
                    var11 = new Array(1);
                    var11[0] = var2;
                    var3 = function() {
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
                    var11 = var18.bind(var4)(var3, var11);
                    _closure3_slot9 = var11;
                    var3 = 9;
                    var3 = var17[var3];
                    var9 = var7.bind(var9)(var3);
                    var7 = var9.useShouldAllowMobileVideoTask;
                    var3 = var2.config;
                    var2 = {};
                    var2['location'] = var16;
                    var7 = var7.bind(var9)(var3, var2);
                    _closure3_slot10 = var7;
                    var9 = var5.defaultRewardNameWithArticle;
                    _closure3_slot11 = var9;
                    var3 = var4.useMemo;
                    var2 = new Array(11);
                    var2[0] = var15;
                    var2[1] = var14;
                    var2[2] = var13;
                    var2[3] = var12;
                    var2[4] = var11;
                    var2[5] = var10;
                    var2[6] = var9;
                    var2[7] = var8;
                    var2[8] = var7;
                    var2[9] = var6;
                    var2[10] = var5;
                    var1 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = _closure3_slot2;
                            if(var1) { _fun0003_ip = 600; continue _fun0003 }
 13:
                            var1 = _closure3_slot4;
                            if(var1) { _fun0003_ip = 490; continue _fun0003 }
 23:
                            var1 = _closure3_slot5;
                            if(!var1) { _fun0003_ip = 49; continue _fun0003 }
 30:
                            var1 = _closure3_slot7;
                            var1 = var1.defaultInGameTask;
                            var2 = null;
                            if(!(var2 == var1)) { _fun0003_ip = 476; continue _fun0003 }
 49:
                            var4 = _closure3_slot1;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = 11;
                            var2 = var2[var7];
                            var8 = undefined;
                            var2 = var5.bind(var8)(var2);
                            var2 = var2.QuestBottomSheetStep;
                            var2 = var2.TASK_SELECT;
                            if(!(var4 !== var2)) { _fun0003_ip = 417; continue _fun0003 }
 97:
                            var4 = _closure3_slot1;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var5.bind(var8)(var2);
                            var2 = var2.QuestBottomSheetStep;
                            var2 = var2.CONSOLE_CONNECT;
                            if(!(var4 !== var2)) { _fun0003_ip = 358; continue _fun0003 }
 137:
                            var4 = _closure3_slot6;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 12;
                            var2 = var7[var2];
                            var2 = var5.bind(var8)(var2);
                            var2 = var2.TaskPlatformScreen;
                            var2 = var2.DESKTOP;
                            if(!(var4 === var2)) { _fun0003_ip = 184; continue _fun0003 }
 177:
                            var2 = _closure3_slot9;
                            if(var2) { _fun0003_ip = 271; continue _fun0003 }
 184:
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
                            _fun0003_ip = 356; continue _fun0003;
 271:
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
 356:
                            _fun0003_ip = 415; continue _fun0003;
 358:
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
 415:
                            _fun0003_ip = 474; continue _fun0003;
 417:
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
 474:
                            return var2;
 476:
                            var1 = var1.messages;
                            var1 = var1.taskDescription;
                            return var1;
 490:
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
                            if(var1) { _fun0003_ip = 573; continue _fun0003 }
 546:
                            var3 = var2.IpoqqK;
                            var1 = {};
                            var7 = _closure3_slot11;
                            var1['questReward'] = var7;
                            var1 = var4.bind(var5)(var3, var1);
                            _fun0003_ip = 598; continue _fun0003;
 573:
                            var3 = var2.ttFsLi;
                            var2 = {};
                            var6 = _closure3_slot11;
                            var2['reward'] = var6;
                            var1 = var4.bind(var5)(var3, var2);
 598:
                            return var1;
 600:
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
            if(!var6) { _fun0001_ip = 141; continue _fun0001 }
 135:
            var7 = var10.containerWithActionSheet;
 141:
            var5[1] = var7;
            var1['style'] = var5;
            var5 = null;
            var7 = var5 != var11;
            if(!var7) { _fun0001_ip = 244; continue _fun0001 }
 158:
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
            if(!var6) { _fun0001_ip = 226; continue _fun0001 }
 220:
            var15 = var10.titleWithActionSheet;
 226:
            var14[1] = var15;
            var5['style'] = var14;
            var5['children'] = var11;
            var7 = var9.bind(var4)(var8, var5);
 244:
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 376; continue _fun0001 }
 255:
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
 376:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();