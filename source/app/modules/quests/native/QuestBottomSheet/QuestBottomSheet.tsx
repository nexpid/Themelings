// app/modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var10;
    var1 = function QuestBottomSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var19 = var1.quest;
            var3 = var1.initialStep;
            var15 = var1.sourceQuestContent;
            var1 = _closure1_slot14;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot17;
            var1 = {};
            var1['quest'] = var19;
            var1['initialStep'] = var3;
            var3 = _closure1_slot8;
            var3 = var3.QUEST_HOME_MOBILE;
            var1['location'] = var3;
            var1['sourceQuestContent'] = var15;
            var1 = var2.bind(var4)(var1);
            var14 = var1.step;
            var20 = var1.defibrillator;
            var22 = var1.stepActions;
            var18 = var1.handleTaskSelect;
            var16 = var1.showMicrophone;
            var6 = _closure1_slot0;
            var26 = _closure1_slot2;
            var1 = 16;
            var1 = var26[var1];
            var3 = var6.bind(var4)(var1);
            var2 = var3.useHasWatchVideoOnMobileTasks;
            var1 = var19.config;
            var9 = var2.bind(var3)(var1);
            var1 = 19;
            var2 = var26[var1];
            var3 = var6.bind(var4)(var2);
            var2 = var3.hasWatchVideoTasks;
            var12 = var2.bind(var3)(var19);
            var1 = var26[var1];
            var2 = var6.bind(var4)(var1);
            var1 = var2.isInGameQuest;
            var24 = var1.bind(var2)(var19);
            var1 = _closure1_slot5;
            var13 = 0;
            var3 = var1.bind(var4)(var13);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var21 = var2[var13];
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot0 = var1;
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = function() {
                var1 = {};
                var2 = true;
                var1['isInQuestBottomSheet'] = var2;
                return var1;
            };
            var1 = new Array(0);
            var5 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot10;
            var1 = _closure1_slot15;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot10;
            var5 = 20;
            var5 = var26[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var25 = _closure1_slot10;
            var10 = _closure1_slot1;
            var8 = 21;
            var8 = var26[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var8['quest'] = var19;
            var8['step'] = var14;
            var26 = _closure1_slot8;
            var26 = var26.QUEST_HOME_MOBILE;
            var8['location'] = var26;
            var8 = var25.bind(var4)(var10, var8);
            var5['header'] = var8;
            var8 = null;
            if(var24) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = null;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var12 = _closure1_slot10;
            var10 = _closure1_slot1;
            var24 = _closure1_slot2;
            var9 = 22;
            var9 = var24[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['quest'] = var19;
            var9['sourceQuestContent'] = var15;
            var9['step'] = var14;
            var24 = var20.isActive;
            var9['isDefibrilating'] = var24;
            var23 = function onLayout(arg1) {
                var3 = _closure2_slot0;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9['onLayout'] = var23;
            var23 = var22.onBack;
            var9['onBack'] = var23;
            var23 = var20.start;
            var9['onDefib'] = var23;
            var22 = var22.onNext;
            var9['onConnectConsoleNext'] = var22;
            var8 = var12.bind(var4)(var10, var9);
case 2:
            var5['footer'] = var8;
            var8 = true;
            var5['startExpanded'] = var8;
            var10 = _closure1_slot10;
            var9 = _closure1_slot6;
            var8 = {};
            var12 = var11.contentContainer;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var22 = _closure1_slot13;
            var22 = var22.TASK_SELECT;
            var13 = 0;
            if(!(var14 !== var22)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = var21;
case 6:
            var12['paddingBottom'] = var13;
            var11[1] = var12;
            var8['style'] = var11;
            var13 = _closure1_slot10;
            var12 = _closure1_slot18;
            var11 = {};
            var11['defibrillator'] = var20;
            var11['quest'] = var19;
            var11['handleTaskSelect'] = var18;
            var17 = _closure1_slot8;
            var17 = var17.QUEST_HOME_MOBILE;
            var11['location'] = var17;
            var11['showMicrophone'] = var16;
            var11['sourceQuestContent'] = var15;
            var11['step'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var5 = function useEnrolledQuestContentProps(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.quest;
            var _closure2_slot0 = var7;
            var12 = var1.initialStep;
            var4 = var1.location;
            var1 = var1.sourceQuestContent;
            var _closure2_slot1 = var1;
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 23;
            var1 = var13[var1];
            var11 = undefined;
            var3 = var5.bind(var11)(var1);
            var1 = var3.useTrackQuestContentClickedWithImpression;
            var1 = var1.bind(var3)();
            var _closure2_slot2 = var1;
            var1 = 24;
            var1 = var13[var1];
            var3 = var5.bind(var11)(var1);
            var1 = var3.useQuestImpressionId;
            var1 = var1.bind(var3)();
            var _closure2_slot3 = var1;
            var1 = 13;
            var3 = var13[var1];
            var6 = var5.bind(var11)(var3);
            var3 = var6.useQuestTaskDetails;
            var6 = var3.bind(var6)(var7);
            var3 = var13[var1];
            var9 = var5.bind(var11)(var3);
            var3 = var9.useIsQuestProgressing;
            var10 = var3.bind(var9)(var7);
            var1 = var13[var1];
            var3 = var5.bind(var11)(var1);
            var1 = var3.useTaskPlatformScreen;
            var6 = var1.bind(var3)(var7, var6);
            var3 = _closure1_slot3;
            var1 = 3;
            var1 = var3.bind(var11)(var6, var1);
            var3 = 0;
            var9 = var1[var3];
            var6 = 2;
            var1 = var1[var6];
            var _closure2_slot4 = var1;
            var1 = 16;
            var1 = var13[var1];
            var13 = var5.bind(var11)(var1);
            var5 = var13.useHasWatchVideoOnMobileTasks;
            var1 = var7.config;
            var1 = var5.bind(var13)(var1);
            var5 = {};
            var5['quest'] = var7;
            var5['initialStep'] = var12;
            var5['location'] = var4;
            var4 = function useSteps(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var7 = var2.quest;
                    var _closure3_slot0 = var7;
                    var20 = var2.initialStep;
                    var3 = undefined;
                    var _closure3_slot1 = var3;
                    var _closure3_slot2 = var3;
                    var _closure3_slot3 = var3;
                    var _closure3_slot4 = var3;
                    var _closure3_slot5 = var3;
                    var _closure3_slot6 = var3;
                    var _closure3_slot7 = var3;
                    var _closure3_slot8 = var3;
                    var _closure3_slot9 = var3;
                    var _closure3_slot10 = var3;
                    var _closure3_slot11 = var3;
                    var _closure3_slot12 = var3;
                    var _closure3_slot13 = var3;
                    var _closure3_slot14 = var3;
                    var _closure3_slot15 = var3;
                    var4 = var7.userStatus;
                    var5 = null;
                    var6 = var5 == var4;
                    var2 = undefined;
                    if(var6) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = var4.completedAt;
case 8:
                    var9 = var5 != var2;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 13;
                    var6 = var10[var4];
                    var11 = var8.bind(var3)(var6);
                    var6 = var11.useConnectedAccounts;
                    var6 = var6.bind(var11)();
                    var6 = var6.xboxAndPlaystationAccounts;
                    _closure3_slot1 = var6;
                    var13 = _closure1_slot4;
                    var12 = var13.useMemo;
                    var11 = new Array(2);
                    var11[0] = var7;
                    var11[1] = var6;
                    var6 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.supportedConsoles;
                        var1 = _closure3_slot0;
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var3 = _closure3_slot1;
                            var2 = var3.find;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.type;
                                var1 = _closure5_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var12.bind(var13)(var6, var11);
                    var11 = var10[var4];
                    var12 = var8.bind(var3)(var11);
                    var11 = var12.useQuestTaskDetails;
                    var11 = var11.bind(var12)(var7);
                    var12 = var10[var4];
                    var13 = var8.bind(var3)(var12);
                    var12 = var13.useIsQuestProgressing;
                    var13 = var12.bind(var13)(var7);
                    var4 = var10[var4];
                    var8 = var8.bind(var3)(var4);
                    var4 = var8.useTaskPlatformScreen;
                    var10 = var4.bind(var8)(var7, var11);
                    var8 = _closure1_slot3;
                    var4 = 3;
                    var4 = var8.bind(var3)(var10, var4);
                    var10 = 0;
                    var15 = var4[var10];
                    _closure3_slot2 = var15;
                    var16 = 1;
                    var12 = var4[var16];
                    _closure3_slot3 = var12;
                    var17 = 2;
                    var4 = var4[var17];
                    _closure3_slot4 = var4;
                    var18 = _closure1_slot4;
                    var14 = var18.useState;
                    var8 = var6.length;
                    var8 = var10 === var8;
                    if(!var8) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var8 = !var9;
case 10:
                    if(!var8) { _fun0003_ip = 3; continue _fun0003 }
case 12:
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var19 = 15;
                    var19 = var22[var19];
                    var19 = var21.bind(var3)(var19);
                    var19 = var19.TaskPlatformScreen;
                    var19 = var19.CONSOLE;
                    var8 = var15 === var19;
case 3:
                    if(var8) { _fun0003_ip = 13; continue _fun0003 }
case 5:
                    var19 = _closure1_slot13;
                    var19 = var19.CONSOLE_CONNECT;
                    var8 = var20 === var19;
case 13:
                    var14 = var14.bind(var18)(var8);
                    var8 = _closure1_slot3;
                    var8 = var8.bind(var3)(var14, var17);
                    var14 = var8[var10];
                    _closure3_slot5 = var14;
                    var8 = var8[var16];
                    _closure3_slot6 = var8;
                    if(var13) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var11 = var11.progressSeconds;
                    var13 = var11 > var10;
case 14:
                    _closure3_slot7 = var13;
                    var6 = var6.length;
                    var6 = var10 !== var6;
                    if(var6) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var6 = var9;
case 16:
                    if(var6) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 15;
                    var9 = var11[var9];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.TaskPlatformScreen;
                    var9 = var9.CONSOLE;
                    var6 = var15 !== var9;
case 18:
                    if(var6) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var6 = var14;
case 20:
                    if(var6) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var6 = true;
                    var6 = var8.bind(var3)(var6);
case 22:
                    var9 = _closure1_slot4;
                    var8 = var9.useCallback;
                    var6 = new Array(1);
                    var6[0] = var4;
                    var4 = function() {
                        var4 = _closure3_slot6;
                        var1 = undefined;
                        var3 = false;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure3_slot4;
                        var2 = null;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = var8.bind(var9)(var4, var6);
                    _closure3_slot8 = var4;
                    var6 = function showConsoleSelect() {
                        var3 = _closure3_slot6;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    _closure3_slot9 = var6;
                    var6 = function hideConsoleSelect() {
                        var3 = _closure3_slot6;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    _closure3_slot10 = var6;
                    var10 = _closure1_slot4;
                    var9 = var10.useMemo;
                    var8 = function() {
                        var2 = {};
                        var1 = _closure1_slot13;
                        var1 = var1.TASK_STATUS;
                        var2['type'] = var1;
                        var1 = true;
                        var2['shouldShow'] = var1;
                        var1 = new Array(1);
                        var1[0] = var2;
                        return var1;
                    };
                    var6 = new Array(0);
                    var10 = var9.bind(var10)(var8, var6);
                    _closure3_slot11 = var10;
                    var11 = _closure1_slot4;
                    var9 = var11.useMemo;
                    var8 = new Array(2);
                    var8[0] = var14;
                    var8[1] = var13;
                    var6 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = {};
                            var1 = _closure1_slot13;
                            var1 = var1.CONSOLE_CONNECT;
                            var2['type'] = var1;
                            var1 = _closure3_slot5;
                            var2['shouldShow'] = var1;
                            var1 = _closure3_slot10;
                            var2['onNext'] = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var3 = _closure1_slot13;
                            var3 = var3.TASK_STATUS;
                            var2['type'] = var3;
                            var3 = true;
                            var2['shouldShow'] = var3;
                            var5 = _closure3_slot7;
                            var3 = undefined;
                            if(var5) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                            var3 = _closure3_slot9;
case 24:
                            var2['onBack'] = var3;
                            var1[1] = var2;
                            return var1;
                        }
                    };
                    var9 = var9.bind(var11)(var6, var8);
                    _closure3_slot12 = var9;
                    var11 = _closure1_slot4;
                    var8 = var11.useMemo;
                    var6 = new Array(4);
                    var6[0] = var15;
                    var6[1] = var14;
                    var6[2] = var13;
                    var6[3] = var4;
                    var4 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = {};
                            var1 = _closure1_slot13;
                            var1 = var1.TASK_SELECT;
                            var2['type'] = var1;
                            var6 = _closure3_slot2;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var9 = 15;
                            var1 = var3[var9];
                            var8 = undefined;
                            var1 = var7.bind(var8)(var1);
                            var1 = var1.TaskPlatformScreen;
                            var1 = var1.SELECT;
                            var1 = var6 === var1;
                            var2['shouldShow'] = var1;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var6 = _closure1_slot13;
                            var6 = var6.CONSOLE_CONNECT;
                            var2['type'] = var6;
                            var6 = _closure3_slot2;
                            var3 = var3[var9];
                            var3 = var7.bind(var8)(var3);
                            var3 = var3.TaskPlatformScreen;
                            var3 = var3.CONSOLE;
                            var3 = var6 === var3;
                            if(!var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                            var3 = _closure3_slot5;
case 26:
                            var2['shouldShow'] = var3;
                            var3 = _closure3_slot8;
                            var2['onBack'] = var3;
                            var3 = _closure3_slot10;
                            var2['onNext'] = var3;
                            var1[1] = var2;
                            var2 = {};
                            var3 = _closure1_slot13;
                            var3 = var3.TASK_STATUS;
                            var2['type'] = var3;
                            var3 = true;
                            var2['shouldShow'] = var3;
                            var6 = _closure3_slot7;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                            var6 = _closure3_slot2;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var9];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.TaskPlatformScreen;
                            var4 = var4.CONSOLE;
                            if(!(var6 !== var4)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                            var4 = _closure3_slot8;
                            _fun0005_ip = 32; continue _fun0005;
case 30:
                            var4 = _closure3_slot9;
case 32:
                            var3 = var4;
case 28:
                            var2['onBack'] = var3;
                            var1[2] = var2;
                            return var1;
                        }
                    };
                    var11 = var8.bind(var11)(var4, var6);
                    _closure3_slot13 = var11;
                    var6 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 16;
                    var8 = var13[var4];
                    var15 = var6.bind(var3)(var8);
                    var14 = var15.useHasWatchVideoOnMobileTasks;
                    var8 = var7.config;
                    var8 = var14.bind(var15)(var8);
                    _closure3_slot14 = var8;
                    var4 = var13[var4];
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.useMobileActivityQuest;
                    var4 = var4.bind(var6)(var7);
                    var7 = var4.isMobileActivityQuest;
                    _closure3_slot15 = var7;
                    var6 = _closure1_slot4;
                    var4 = var6.useMemo;
                    var2 = new Array(6);
                    var2[0] = var12;
                    var2[1] = var11;
                    var2[2] = var10;
                    var2[3] = var9;
                    var2[4] = var8;
                    var2[5] = var7;
                    var1 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var2 = _closure3_slot3;
                            var2 = var2.length;
                            var3 = 1;
                            var4 = var3 === var2;
                            if(!var4) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                            var6 = _closure3_slot3;
                            var5 = var6.includes;
                            var2 = _closure1_slot9;
                            var2 = var2.DESKTOP;
                            var4 = var5.bind(var6)(var2);
case 33:
                            var2 = _closure3_slot3;
                            var2 = var2.length;
                            var2 = var3 === var2;
                            if(!var2) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                            var6 = _closure3_slot3;
                            var5 = var6.includes;
                            var3 = _closure1_slot9;
                            var3 = var3.CONSOLE;
                            var2 = var5.bind(var6)(var3);
case 35:
                            var3 = _closure3_slot13;
                            if(var4) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                            var4 = _closure3_slot14;
                            if(var4) { _fun0006_ip = 37; continue _fun0006 }
case 8:
                            var4 = _closure3_slot15;
                            if(var4) { _fun0006_ip = 37; continue _fun0006 }
case 39:
                            if(!var2) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                            var3 = _closure3_slot12;
                            _fun0006_ip = 40; continue _fun0006;
case 37:
                            var3 = _closure3_slot11;
case 40:
                            var2 = var3.find;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.shouldShow;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            var2 = null;
                            var4 = var3;
                            if(!(var2 == var1)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                            var3 = var4.at;
                            var2 = -1;
                            var1 = var3.bind(var4)(var2);
case 42:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var6)(var1, var2);
                    var2 = var4.type;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var7 = var5 == var4;
                    var6 = undefined;
                    if(var7) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                    var6 = var4.onBack;
case 44:
                    var2['onBack'] = var6;
                    var5 = var5 == var4;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                    var3 = var4.onNext;
case 46:
                    var2['onNext'] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var5 = var4.bind(var11)(var5);
            var4 = _closure1_slot3;
            var4 = var4.bind(var11)(var5, var6);
            var5 = var4[var3];
            var3 = 1;
            var4 = var4[var3];
            var3 = function useDefibrillator(arg1) {
                var10 = arg1;
                var _closure3_slot0 = var10;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 8;
                var3 = var5[var3];
                var12 = undefined;
                var5 = var4.bind(var12)(var3);
                var4 = var5.getQuestLogger;
                var3 = {};
                var3['quest'] = var10;
                var6 = _closure1_slot8;
                var6 = var6.QUEST_HOME_MOBILE;
                var3['location'] = var6;
                var9 = var4.bind(var5)(var3);
                var _closure3_slot1 = var9;
                var4 = _closure1_slot5;
                var3 = new Array(0);
                var4 = var4.bind(var12)(var3);
                var3 = _closure1_slot3;
                var11 = 2;
                var5 = var3.bind(var12)(var4, var11);
                var3 = 0;
                var4 = var5[var3];
                var6 = 1;
                var7 = var5[var6];
                var _closure3_slot2 = var7;
                var8 = _closure1_slot5;
                var5 = false;
                var8 = var8.bind(var12)(var5);
                var5 = _closure1_slot3;
                var5 = var5.bind(var12)(var8, var11);
                var3 = var5[var3];
                var8 = var5[var6];
                var _closure3_slot3 = var8;
                var6 = _closure1_slot4;
                var5 = var6.useCallback;
                var2 = new Array(4);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var8;
                var2[3] = var7;
                var1 = function() {
                    var5 = _closure3_slot3;
                    var1 = undefined;
                    var4 = true;
                    var4 = var5.bind(var1)(var4);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 9;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.manuallyStartConsoleQuest;
                    var3 = _closure3_slot0;
                    var3 = var3.id;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.then;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.errorHints;
                        var2 = _closure3_slot2;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.catch;
                    var3 = function(arg1) {
                        var4 = _closure3_slot2;
                        var1 = undefined;
                        var3 = new Array(0);
                        var3 = var4.bind(var1)(var3);
                        var5 = _closure3_slot1;
                        var4 = var5.error;
                        var3 = 'Failed to start console quest';
                        var2 = arg1;
                        var2 = var4.bind(var5)(var3, var2);
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 10;
                        var2 = var7[var2];
                        var4 = var6.bind(var1)(var2);
                        var3 = var4.open;
                        var2 = {};
                        var8 = 'START_DEFIBRILLATOR_ERROR';
                        var2['key'] = var8;
                        var10 = _closure1_slot0;
                        var5 = 11;
                        var8 = var7[var5];
                        var8 = var10.bind(var1)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var5 = var7[var5];
                        var5 = var10.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5.CKsXk3;
                        var5 = var8.bind(var9)(var5);
                        var2['content'] = var5;
                        var5 = 12;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var2['icon'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.finally;
                    var2 = function() {
                        var3 = _closure3_slot3;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var5.bind(var6)(var1, var2);
                var1 = {};
                var1['errorHints'] = var4;
                var1['isActive'] = var3;
                var1['start'] = var2;
                return var1;
            };
            var6 = var3.bind(var11)(var7);
            var13 = var7.userStatus;
            var12 = null;
            var14 = var12 == var13;
            var3 = undefined;
            if(var14) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var3 = var13.completedAt;
case 48:
            var12 = var12 != var3;
            var3 = !var12;
            if(var12) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var3 = !var10;
case 50:
            if(!var3) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 15;
            var8 = var12[var8];
            var8 = var10.bind(var11)(var8);
            var8 = var8.TaskPlatformScreen;
            var8 = var8.CONSOLE;
            var3 = var9 === var8;
case 52:
            if(!var3) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var3 = !var1;
case 54:
            var1 = {};
            var1['quest'] = var7;
            var1['defibrillator'] = var6;
            var1['step'] = var5;
            var1['stepActions'] = var4;
            var1['showMicrophone'] = var3;
            var2 = function handleTaskSelect(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure1_slot9;
                    var1 = var1.CONSOLE;
                    if(!(var3 !== var1)) { _fun0007_ip = 8; continue _fun0007 }
case 56:
                    var1 = _closure1_slot9;
                    var1 = var1.DESKTOP;
                    if(!(var3 !== var1)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 25;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.QuestContentCTA;
                    var7 = var1.DESELECT_PLATFORM;
                    _fun0007_ip = 59; continue _fun0007;
case 57:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 25;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.QuestContentCTA;
                    var7 = var1.SELECT_DESKTOP_PLATFORM;
case 59:
                    _fun0007_ip = 60; continue _fun0007;
case 8:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 25;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.QuestContentCTA;
                    var7 = var1.SELECT_CONSOLE_PLATFORM;
case 60:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 26;
                    var6 = var9[var4];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var6);
                    var6 = var8.shouldMigrateToAdAnalyticsInterface;
                    var4 = var9[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.AdAnalyticsInterfaceExperimentStep;
                    var5 = var4.STEP_2_CLICKED_INTERNAL;
                    var4 = 'quest_bottom_sheet';
                    var4 = var6.bind(var8)(var5, var4);
                    if(var4) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                    var5 = _closure2_slot2;
                    var4 = {};
                    var8 = _closure2_slot0;
                    var8 = var8.id;
                    var4['questId'] = var8;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 15;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.QuestContent;
                    var8 = var8.QUEST_BOTTOM_SHEET;
                    var4['questContent'] = var8;
                    var4['questContentCTA'] = var7;
                    var6 = _closure2_slot1;
                    var4['sourceQuestContent'] = var6;
                    var4 = var5.bind(var1)(var4);
                    _fun0007_ip = 63; continue _fun0007;
case 61:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 27;
                    var2 = var9[var2];
                    var5 = var8.bind(var1)(var2);
                    var4 = var5.captureAdUserAction;
                    var2 = {};
                    var6 = 28;
                    var6 = var9[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.AdUserActionType;
                    var6 = var6.CLICK_INTERNAL;
                    var2['type'] = var6;
                    var6 = 29;
                    var6 = var9[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.AdCreativeType;
                    var6 = var6.QUEST;
                    var2['adCreativeType'] = var6;
                    var10 = _closure2_slot0;
                    var10 = var10.id;
                    var2['adCreativeId'] = var10;
                    var2['questContentCTA'] = var7;
                    var7 = 15;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.QuestContent;
                    var7 = var7.QUEST_BOTTOM_SHEET;
                    var2['surfaceId'] = var7;
                    var7 = _closure2_slot1;
                    var2['sourceQuestContent'] = var7;
                    var6 = _closure2_slot3;
                    var2['impressionId'] = var6;
                    var2 = var4.bind(var5)(var2);
case 63:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var1['handleTaskSelect'] = var2;
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var4 = function QuestBottomSheetContent(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var16 = var2.defibrillator;
            var15 = var2.quest;
            var _closure2_slot0 = var15;
            var10 = var2.handleTaskSelect;
            var11 = var2.showMicrophone;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var11 = false;
case 64:
            var17 = var2.sourceQuestContent;
            var _closure2_slot1 = var17;
            var7 = var2.step;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useHasWatchVideoOnMobileTasks;
            var2 = var15.config;
            var13 = var3.bind(var5)(var2);
            _closure2_slot2 = var13;
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var15;
            var2[1] = var13;
            var2[2] = var17;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 19;
                    var1 = var4[var1];
                    var7 = undefined;
                    var4 = var3.bind(var7)(var1);
                    var3 = var4.isInGameQuest;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 30;
                    var3 = var8[var3];
                    var3 = var4.bind(var7)(var3);
                    if(var1) { _fun0009_ip = 68; continue _fun0009 }
case 25:
                    var4 = var3.QuestBottomSheetProgressCardPlayStreamTask;
                    var1 = {};
                    var8 = _closure2_slot0;
                    var1['quest'] = var8;
                    var8 = _closure2_slot1;
                    var1['sourceQuestContent'] = var8;
                    var1 = var5.bind(var7)(var4, var1);
                    _fun0009_ip = 69; continue _fun0009;
case 68:
                    var4 = var3.QuestBottomSheetProgressCardInGameTask;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['quest'] = var8;
                    var8 = _closure2_slot1;
                    var3['sourceQuestContent'] = var8;
                    var1 = var5.bind(var7)(var4, var3);
case 69:
                    _fun0009_ip = 70; continue _fun0009;
case 66:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 30;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.QuestBottomSheetProgressCardWatchTask;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['quest'] = var7;
                    var6 = _closure2_slot1;
                    var2['sourceQuestContent'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 70:
                    return var1;
                }
            };
            var14 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var5 = _closure1_slot13;
            var5 = var5.TASK_SELECT;
            var6 = var7 === var5;
            if(!var6) { _fun0008_ip = 71; continue _fun0008 }
case 72:
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var18 = _closure1_slot2;
            var5 = 31;
            var5 = var18[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var5['onTaskSelect'] = var10;
            var6 = var9.bind(var4)(var8, var5);
case 71:
            var5 = new Array(3);
            var5[0] = var6;
            var6 = _closure1_slot13;
            var6 = var6.CONSOLE_CONNECT;
            var6 = var7 === var6;
            if(!var6) { _fun0008_ip = 73; continue _fun0008 }
case 74:
            var10 = _closure1_slot10;
            var9 = _closure1_slot1;
            var18 = _closure1_slot2;
            var8 = 32;
            var8 = var18[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['quest'] = var15;
            var8['step'] = var7;
            var8['sourceQuestContent'] = var17;
            var6 = var10.bind(var4)(var9, var8);
case 73:
            var5[1] = var6;
            var6 = _closure1_slot13;
            var6 = var6.TASK_STATUS;
            var6 = var7 === var6;
            if(!var6) { _fun0008_ip = 75; continue _fun0008 }
case 76:
            var9 = _closure1_slot11;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = new Array(2);
            var10[0] = var14;
            if(!var11) { _fun0008_ip = 53; continue _fun0008 }
case 50:
            var11 = !var13;
case 53:
            if(!var11) { _fun0008_ip = 77; continue _fun0008 }
case 78:
            var14 = _closure1_slot10;
            var13 = _closure1_slot19;
            var12 = {};
            var12['quest'] = var15;
            var15 = null;
            var17 = var15 == var16;
            var15 = undefined;
            if(var17) { _fun0008_ip = 5; continue _fun0008 }
case 79:
            var15 = var16.errorHints;
case 5:
            var12['errorHints'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 77:
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 75:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var1 = function MicrophoneUnit(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var19 = var1.quest;
            var7 = var1.errorHints;
            var1 = _closure1_slot14;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useQuestHowToHelpArticle;
            var1 = var1.bind(var2)();
            var2 = var1.message;
            var1 = null;
            var3 = var1 == var7;
            var8 = undefined;
            if(var3) { _fun0010_ip = 80; continue _fun0010 }
case 81:
            var8 = var7.length;
case 80:
            var9 = var1 != var8;
            var5 = 0;
            var3 = 0;
            if(!var9) { _fun0010_ip = 82; continue _fun0010 }
case 35:
            var3 = var8;
case 82:
            var14 = var3 > var5;
            if(!var14) { _fun0010_ip = 83; continue _fun0010 }
case 84:
            if(!(var1 == var7)) { _fun0010_ip = 85; continue _fun0010 }
case 83:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 33;
            var1 = var8[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isSponsoredPlayQuest;
            var1 = var1.bind(var3)(var19);
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 11;
            var8 = var12[var3];
            var8 = var11.bind(var4)(var8);
            var9 = var8.intl;
            if(var1) { _fun0010_ip = 86; continue _fun0010 }
case 87:
            var13 = var9.formatToPlainString;
            var1 = var12[var3];
            var1 = var11.bind(var4)(var1);
            var1 = var1.t;
            var8 = var1.GXqvC1;
            var1 = {};
            var16 = var19.config;
            var16 = var16.messages;
            var16 = var16.gameTitle;
            var1['gameTitle'] = var16;
            var1 = var13.bind(var9)(var8, var1);
            _fun0010_ip = 88; continue _fun0010;
case 86:
            var8 = var9.string;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.bUyEZZ;
            var1 = var8.bind(var9)(var3);
case 88:
            var8 = new Array(1);
            var8[0] = var1;
            _fun0010_ip = 89; continue _fun0010;
case 85:
            var3 = var7.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.message;
                return var1;
            };
            var22 = var3.bind(var7)(var1);
            var1 = new Array(1);
            var23 = var1;
            var21 = 0;
            var3 = arraySpread(var23, var22, var21);
            var1[2] = var2;
            var2 = 1;
            var2 = var3 + var2;
            var8 = var1;
case 89:
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var10.microphoneUnit;
            var1['style'] = var5;
            var9 = _closure1_slot11;
            var7 = _closure1_slot6;
            var5 = {};
            var10 = var10.microphoneUnitHeader;
            var5['style'] = var10;
            var12 = _closure1_slot10;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 34;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.WarningIcon;
            var10 = {};
            var13 = 'text-feedback-warning';
            if(!var14) { _fun0010_ip = 90; continue _fun0010 }
case 91:
            var13 = 'text-feedback-critical';
case 90:
            var10['color'] = var13;
            var11 = var12.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot10;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 35;
            var11 = var16[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-md/medium', 'color': 'mobile-text-heading-primary'};
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 11;
            var17 = var20[var15];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            if(var14) { _fun0010_ip = 92; continue _fun0010 }
case 22:
            var17 = var18.string;
            var14 = var20[var15];
            var14 = var16.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.YstzGO;
            var14 = var17.bind(var18)(var14);
            _fun0010_ip = 93; continue _fun0010;
case 92:
            var17 = var18.formatToPlainString;
            var15 = var20[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15["28Ql27"];
            var15 = {};
            var19 = var19.config;
            var19 = var19.messages;
            var19 = var19.gameTitle;
            var15['gameTitle'] = var19;
            var14 = var17.bind(var18)(var16, var15);
case 93:
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var5['children'] = var10;
            var7 = var9.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                var5 = _closure1_slot10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 35;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {};
                var1 = 'text-sm/normal';
                var2['variant'] = var1;
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var10[var1];
    var1 = undefined;
    var2 = var15.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var16 = 1;
    var2 = var10[var16];
    var11 = var15.bind(var1)(var2);
    var _closure1_slot4 = var11;
    var2 = var10[var16];
    var2 = var9.bind(var1)(var2);
    var2 = var2.useState;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var10[var2];
    var2 = var15.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var6 = var2.QuestsExperimentLocations;
    var _closure1_slot8 = var6;
    var2 = var2.QuestTaskPlatform;
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var6 = var2.jsx;
    var _closure1_slot10 = var6;
    var6 = var2.jsxs;
    var _closure1_slot11 = var6;
    var2 = var2.Fragment;
    var _closure1_slot12 = var2;
    var6 = {};
    var2 = 'TASK_SELECT';
    var6['TASK_SELECT'] = var2;
    var2 = 'CONSOLE_CONNECT';
    var6['CONSOLE_CONNECT'] = var2;
    var2 = 'TASK_STATUS';
    var6['TASK_STATUS'] = var2;
    var _closure1_slot13 = var6;
    var2 = 6;
    var2 = var10[var2];
    var12 = var9.bind(var1)(var2);
    var8 = var12.createStyles;
    var2 = {};
    var13 = {};
    var17 = 'flex';
    var13['display'] = var17;
    var14 = 7;
    var18 = var10[var14];
    var18 = var15.bind(var1)(var18);
    var18 = var18.space;
    var18 = var18.PX_16;
    var13['paddingHorizontal'] = var18;
    var18 = var10[var14];
    var18 = var15.bind(var1)(var18);
    var18 = var18.space;
    var18 = var18.PX_24;
    var13['gap'] = var18;
    var2['contentContainer'] = var13;
    var13 = {};
    var13['display'] = var17;
    var17 = var10[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.space;
    var17 = var17.PX_8;
    var13['gap'] = var17;
    var17 = var10[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.space;
    var17 = var17.PX_16;
    var17 = -var17;
    var13['marginHorizontal'] = var17;
    var17 = var10[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.space;
    var17 = var17.PX_16;
    var13['paddingHorizontal'] = var17;
    var17 = var10[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.space;
    var17 = var17.PX_16;
    var13['marginTop'] = var17;
    var17 = var10[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.space;
    var17 = var17.PX_16;
    var13['paddingTop'] = var17;
    var13['borderTopWidth'] = var16;
    var16 = var10[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_SUBTLE;
    var13['borderTopColor'] = var16;
    var2['microphoneUnit'] = var13;
    var13 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var14 = var10[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_8;
    var13['gap'] = var14;
    var2['microphoneUnitHeader'] = var13;
    var2 = var8.bind(var12)(var2);
    var _closure1_slot14 = var2;
    var8 = var11.createContext;
    var2 = {};
    var12 = false;
    var2['isInQuestBottomSheet'] = var12;
    var2 = var8.bind(var11)(var2);
    var _closure1_slot15 = var2;
    var8 = 36;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx';
    var8 = var9.bind(var10)(var8);
    var7 = function QuestBottomSheetConnected(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var2 = var1.questId;
            var _closure2_slot0 = var2;
            var2 = var1.initialStep;
            var _closure2_slot1 = var2;
            var7 = var1.sourceQuestContent;
            var _closure2_slot2 = var7;
            var8 = var1.questContentPosition;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 17;
            var1 = var4[var1];
            var5 = undefined;
            var9 = var3.bind(var5)(var1);
            var4 = var9.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getQuest;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var4.bind(var9)(var3, var1);
            var _closure2_slot3 = var9;
            var1 = null;
            var3 = var1 == var9;
            if(var3) { _fun0011_ip = 94; continue _fun0011 }
case 83:
            var4 = _closure1_slot10;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 18;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var3 = var2.QuestContentImpressionTrackerNative;
            var2 = {};
            var12 = true;
            var2['overrideVisibility'] = var12;
            var2['questOrQuests'] = var9;
            var9 = 15;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.QuestContent;
            var9 = var9.QUEST_BOTTOM_SHEET;
            var2['questContent'] = var9;
            var2['questContentPosition'] = var8;
            var2['sourceQuestContent'] = var7;
            var6 = function children() {
                var4 = _closure1_slot10;
                var3 = _closure1_slot16;
                var2 = {};
                var5 = _closure2_slot3;
                var2['quest'] = var5;
                var5 = _closure2_slot1;
                var2['initialStep'] = var5;
                var1 = _closure2_slot2;
                var2['sourceQuestContent'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 94:
            return var1;
        }
    };
    var3['default'] = var7;
    var3['QuestBottomSheetStep'] = var6;
    var3['useEnrolledQuestContentProps'] = var5;
    var3['QuestBottomSheetContent'] = var4;
    var3['QuestBottomSheetContext'] = var2;
    return var1;
})();