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
 0:
            var1 = arg1;
            var5 = var1.questId;
            var3 = var1.initialStep;
            var15 = var1.sourceQuestContent;
            var1 = _closure1_slot14;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot17;
            var1 = {};
            var1['questId'] = var5;
            var1['initialStep'] = var3;
            var3 = _closure1_slot8;
            var3 = var3.QUEST_HOME_MOBILE;
            var1['location'] = var3;
            var1['sourceQuestContent'] = var15;
            var1 = var2.bind(var4)(var1);
            var19 = var1.quest;
            var14 = var1.step;
            var20 = var1.defibrillator;
            var22 = var1.stepActions;
            var18 = var1.handleTaskSelect;
            var16 = var1.showMicrophone;
            var6 = _closure1_slot0;
            var26 = _closure1_slot2;
            var1 = 16;
            var1 = var26[var1];
            var5 = var6.bind(var4)(var1);
            var3 = var5.useShouldAllowMobileVideoTask;
            var2 = var19.config;
            var1 = {};
            var7 = _closure1_slot8;
            var7 = var7.QUEST_HOME_MOBILE;
            var1['location'] = var7;
            var9 = var3.bind(var5)(var2, var1);
            var1 = 14;
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
            var5 = 19;
            var5 = var26[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var25 = _closure1_slot10;
            var10 = _closure1_slot1;
            var8 = 20;
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
            if(var24) { _fun0001_ip = 505; continue _fun0001 }
 381:
            if(!var12) { _fun0001_ip = 389; continue _fun0001 }
 384:
            var8 = null;
            if(!var9) { _fun0001_ip = 505; continue _fun0001 }
 389:
            var12 = _closure1_slot10;
            var10 = _closure1_slot1;
            var24 = _closure1_slot2;
            var9 = 21;
            var9 = var24[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['quest'] = var19;
            var9['sourceQuestContent'] = var15;
            var9['step'] = var14;
            var24 = var20.isActive;
            var9['isDefibrilating'] = var24;
            var24 = _closure1_slot8;
            var24 = var24.QUEST_HOME_MOBILE;
            var9['location'] = var24;
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
 505:
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
            if(!(var14 !== var22)) { _fun0001_ip = 562; continue _fun0001 }
 559:
            var13 = var21;
 562:
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
 0:
            var1 = arg1;
            var9 = var1.questId;
            var13 = var1.initialStep;
            var4 = var1.location;
            var1 = var1.sourceQuestContent;
            var _closure2_slot0 = var1;
            var11 = undefined;
            var _closure2_slot3 = var11;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 13;
            var3 = var6[var1];
            var7 = var5.bind(var11)(var3);
            var3 = var7.useNonNullableQuest;
            var7 = var3.bind(var7)(var9);
            var _closure2_slot1 = var7;
            var3 = 22;
            var3 = var6[var3];
            var9 = var5.bind(var11)(var3);
            var3 = var9.useTrackQuestContentClickedWithImpression;
            var3 = var3.bind(var9)();
            var _closure2_slot2 = var3;
            var3 = 8;
            var3 = var6[var3];
            var6 = var5.bind(var11)(var3);
            var5 = var6.getQuestLogger;
            var3 = {};
            var3['quest'] = var7;
            var3['location'] = var4;
            var6 = var5.bind(var6)(var3);
            var12 = null;
            if(!(var12 == var7)) { _fun0002_ip = 188; continue _fun0002 }
 142:
            var5 = var6.error;
            var3 = 'Quest not found in store, closing bottom sheet';
            var3 = var5.bind(var6)(var3);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 23;
            var3 = var6[var3];
            var5 = var5.bind(var11)(var3);
            var3 = var5.hideActionSheet;
            var3 = var3.bind(var5)();
 188:
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = var14[var1];
            var6 = var5.bind(var11)(var3);
            var3 = var6.useQuestTaskDetails;
            var6 = var3.bind(var6)(var7);
            var3 = var14[var1];
            var9 = var5.bind(var11)(var3);
            var3 = var9.useIsQuestProgressing;
            var10 = var3.bind(var9)(var7);
            var1 = var14[var1];
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
            _closure2_slot3 = var1;
            var1 = 16;
            var1 = var14[var1];
            var15 = var5.bind(var11)(var1);
            var14 = var15.useShouldAllowMobileVideoTask;
            var5 = var7.config;
            var1 = {};
            var1['location'] = var4;
            var1 = var14.bind(var15)(var5, var1);
            var5 = {};
            var5['quest'] = var7;
            var5['initialStep'] = var13;
            var5['location'] = var4;
            var4 = function useSteps(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.quest;
                    var _closure3_slot0 = var4;
                    var21 = var2.initialStep;
                    var13 = var2.location;
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
                    var6 = var4.userStatus;
                    var5 = null;
                    var7 = var5 == var6;
                    var2 = undefined;
                    if(var7) { _fun0003_ip = 107; continue _fun0003 }
 101:
                    var2 = var6.completedAt;
 107:
                    var9 = var5 != var2;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 13;
                    var7 = var10[var6];
                    var11 = var8.bind(var3)(var7);
                    var7 = var11.useConnectedAccounts;
                    var7 = var7.bind(var11)();
                    var7 = var7.xboxAndPlaystationAccounts;
                    _closure3_slot1 = var7;
                    var14 = _closure1_slot4;
                    var12 = var14.useMemo;
                    var11 = new Array(2);
                    var11[0] = var4;
                    var11[1] = var7;
                    var7 = function() {
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
                    var7 = var12.bind(var14)(var7, var11);
                    var11 = var10[var6];
                    var12 = var8.bind(var3)(var11);
                    var11 = var12.useQuestTaskDetails;
                    var12 = var11.bind(var12)(var4);
                    var11 = var10[var6];
                    var14 = var8.bind(var3)(var11);
                    var11 = var14.useIsQuestProgressing;
                    var14 = var11.bind(var14)(var4);
                    var6 = var10[var6];
                    var8 = var8.bind(var3)(var6);
                    var6 = var8.useTaskPlatformScreen;
                    var10 = var6.bind(var8)(var4, var12);
                    var8 = _closure1_slot3;
                    var6 = 3;
                    var6 = var8.bind(var3)(var10, var6);
                    var10 = 0;
                    var16 = var6[var10];
                    _closure3_slot2 = var16;
                    var17 = 1;
                    var11 = var6[var17];
                    _closure3_slot3 = var11;
                    var18 = 2;
                    var6 = var6[var18];
                    _closure3_slot4 = var6;
                    var19 = _closure1_slot4;
                    var15 = var19.useState;
                    var8 = var7.length;
                    var8 = var10 === var8;
                    if(!var8) { _fun0003_ip = 318; continue _fun0003 }
 315:
                    var8 = !var9;
 318:
                    if(!var8) { _fun0003_ip = 357; continue _fun0003 }
 321:
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var20 = 15;
                    var20 = var23[var20];
                    var20 = var22.bind(var3)(var20);
                    var20 = var20.TaskPlatformScreen;
                    var20 = var20.CONSOLE;
                    var8 = var16 === var20;
 357:
                    if(var8) { _fun0003_ip = 374; continue _fun0003 }
 360:
                    var20 = _closure1_slot13;
                    var20 = var20.CONSOLE_CONNECT;
                    var8 = var21 === var20;
 374:
                    var15 = var15.bind(var19)(var8);
                    var8 = _closure1_slot3;
                    var8 = var8.bind(var3)(var15, var18);
                    var15 = var8[var10];
                    _closure3_slot5 = var15;
                    var8 = var8[var17];
                    _closure3_slot6 = var8;
                    if(var14) { _fun0003_ip = 418; continue _fun0003 }
 408:
                    var12 = var12.progressSeconds;
                    var14 = var12 > var10;
 418:
                    _closure3_slot7 = var14;
                    var7 = var7.length;
                    var7 = var10 !== var7;
                    if(var7) { _fun0003_ip = 437; continue _fun0003 }
 434:
                    var7 = var9;
 437:
                    if(var7) { _fun0003_ip = 476; continue _fun0003 }
 440:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 15;
                    var9 = var12[var9];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.TaskPlatformScreen;
                    var9 = var9.CONSOLE;
                    var7 = var16 !== var9;
 476:
                    if(var7) { _fun0003_ip = 482; continue _fun0003 }
 479:
                    var7 = var15;
 482:
                    if(var7) { _fun0003_ip = 492; continue _fun0003 }
 485:
                    var7 = true;
                    var7 = var8.bind(var3)(var7);
 492:
                    var9 = _closure1_slot4;
                    var8 = var9.useCallback;
                    var7 = new Array(1);
                    var7[0] = var6;
                    var6 = function() {
                        var4 = _closure3_slot6;
                        var1 = undefined;
                        var3 = false;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure3_slot4;
                        var2 = null;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6 = var8.bind(var9)(var6, var7);
                    _closure3_slot8 = var6;
                    var7 = function showConsoleSelect() {
                        var3 = _closure3_slot6;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    _closure3_slot9 = var7;
                    var7 = function hideConsoleSelect() {
                        var3 = _closure3_slot6;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    _closure3_slot10 = var7;
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
                    var7 = new Array(0);
                    var9 = var9.bind(var10)(var8, var7);
                    _closure3_slot11 = var9;
                    var12 = _closure1_slot4;
                    var10 = var12.useMemo;
                    var8 = new Array(2);
                    var8[0] = var15;
                    var8[1] = var14;
                    var7 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
                            if(var5) { _fun0004_ip = 84; continue _fun0004 }
 80:
                            var3 = _closure3_slot9;
 84:
                            var2['onBack'] = var3;
                            var1[1] = var2;
                            return var1;
                        }
                    };
                    var8 = var10.bind(var12)(var7, var8);
                    _closure3_slot12 = var8;
                    var12 = _closure1_slot4;
                    var10 = var12.useMemo;
                    var7 = new Array(4);
                    var7[0] = var16;
                    var7[1] = var15;
                    var7[2] = var14;
                    var7[3] = var6;
                    var6 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                            if(!var3) { _fun0005_ip = 129; continue _fun0005 }
 125:
                            var3 = _closure3_slot5;
 129:
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
                            if(var6) { _fun0005_ip = 238; continue _fun0005 }
 188:
                            var6 = _closure3_slot2;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var9];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.TaskPlatformScreen;
                            var4 = var4.CONSOLE;
                            if(!(var6 !== var4)) { _fun0005_ip = 231; continue _fun0005 }
 225:
                            var4 = _closure3_slot8;
                            _fun0005_ip = 235; continue _fun0005;
 231:
                            var4 = _closure3_slot9;
 235:
                            var3 = var4;
 238:
                            var2['onBack'] = var3;
                            var1[2] = var2;
                            return var1;
                        }
                    };
                    var10 = var10.bind(var12)(var6, var7);
                    _closure3_slot13 = var10;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 16;
                    var6 = var12[var6];
                    var12 = var7.bind(var3)(var6);
                    var7 = var12.useShouldAllowMobileVideoTask;
                    var6 = var4.config;
                    var4 = {};
                    var4['location'] = var13;
                    var7 = var7.bind(var12)(var6, var4);
                    _closure3_slot14 = var7;
                    var6 = _closure1_slot4;
                    var4 = var6.useMemo;
                    var2 = new Array(5);
                    var2[0] = var11;
                    var2[1] = var10;
                    var2[2] = var9;
                    var2[3] = var8;
                    var2[4] = var7;
                    var1 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var2 = _closure3_slot3;
                            var2 = var2.length;
                            var3 = 1;
                            var4 = var3 === var2;
                            if(!var4) { _fun0006_ip = 49; continue _fun0006 }
 22:
                            var6 = _closure3_slot3;
                            var5 = var6.includes;
                            var2 = _closure1_slot9;
                            var2 = var2.DESKTOP;
                            var4 = var5.bind(var6)(var2);
 49:
                            var2 = _closure3_slot3;
                            var2 = var2.length;
                            var2 = var3 === var2;
                            if(!var2) { _fun0006_ip = 92; continue _fun0006 }
 65:
                            var6 = _closure3_slot3;
                            var5 = var6.includes;
                            var3 = _closure1_slot9;
                            var3 = var3.CONSOLE;
                            var2 = var5.bind(var6)(var3);
 92:
                            var3 = _closure3_slot13;
                            if(var4) { _fun0006_ip = 115; continue _fun0006 }
 99:
                            var4 = _closure3_slot14;
                            if(var4) { _fun0006_ip = 115; continue _fun0006 }
 106:
                            if(!var2) { _fun0006_ip = 119; continue _fun0006 }
 109:
                            var3 = _closure3_slot12;
                            _fun0006_ip = 119; continue _fun0006;
 115:
                            var3 = _closure3_slot11;
 119:
                            var2 = var3.find;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.shouldShow;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            var2 = null;
                            var4 = var3;
                            if(!(var2 == var1)) { _fun0006_ip = 164; continue _fun0006 }
 147:
                            var3 = var4.at;
                            var2 = -1;
                            var1 = var3.bind(var4)(var2);
 164:
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
                    if(var7) { _fun0003_ip = 785; continue _fun0003 }
 779:
                    var6 = var4.onBack;
 785:
                    var2['onBack'] = var6;
                    var5 = var5 == var4;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 805; continue _fun0003 }
 799:
                    var3 = var4.onNext;
 805:
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
                        var5 = var5.CKsXk5;
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
            var14 = var12 == var13;
            var3 = undefined;
            if(var14) { _fun0002_ip = 404; continue _fun0002 }
 398:
            var3 = var13.completedAt;
 404:
            var12 = var12 != var3;
            var3 = !var12;
            if(var12) { _fun0002_ip = 417; continue _fun0002 }
 414:
            var3 = !var10;
 417:
            if(!var3) { _fun0002_ip = 456; continue _fun0002 }
 420:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 15;
            var8 = var12[var8];
            var8 = var10.bind(var11)(var8);
            var8 = var8.TaskPlatformScreen;
            var8 = var8.CONSOLE;
            var3 = var9 === var8;
 456:
            if(!var3) { _fun0002_ip = 462; continue _fun0002 }
 459:
            var3 = !var1;
 462:
            var1 = {};
            var1['quest'] = var7;
            var1['defibrillator'] = var6;
            var1['step'] = var5;
            var1['stepActions'] = var4;
            var1['showMicrophone'] = var3;
            var2 = function handleTaskSelect(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var5 = _closure2_slot2;
                    var4 = {};
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var4['questId'] = var1;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var6 = var6[var1];
                    var1 = undefined;
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.QuestContent;
                    var6 = var6.QUEST_BOTTOM_SHEET;
                    var4['questContent'] = var6;
                    var6 = _closure1_slot9;
                    var6 = var6.CONSOLE;
                    if(!(var3 !== var6)) { _fun0007_ip = 164; continue _fun0007 }
 82:
                    var6 = _closure1_slot9;
                    var6 = var6.DESKTOP;
                    if(!(var3 !== var6)) { _fun0007_ip = 130; continue _fun0007 }
 96:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 22;
                    var6 = var9[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.QuestContentCTA;
                    var6 = var6.DESELECT_PLATFORM;
                    _fun0007_ip = 162; continue _fun0007;
 130:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 22;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.QuestContentCTA;
                    var6 = var8.SELECT_DESKTOP_PLATFORM;
 162:
                    _fun0007_ip = 196; continue _fun0007;
 164:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 22;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.QuestContentCTA;
                    var6 = var7.SELECT_CONSOLE_PLATFORM;
 196:
                    var4['questContentCTA'] = var6;
                    var6 = _closure2_slot0;
                    var4['sourceQuestContent'] = var6;
                    var4 = var5.bind(var1)(var4);
                    var2 = _closure2_slot3;
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
 0:
            var2 = arg1;
            var20 = var2.defibrillator;
            var11 = var2.quest;
            var _closure2_slot0 = var11;
            var13 = var2.handleTaskSelect;
            var9 = var2.location;
            var15 = var2.showMicrophone;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0008_ip = 46; continue _fun0008 }
 44:
            var15 = false;
 46:
            var10 = var2.sourceQuestContent;
            var _closure2_slot1 = var10;
            var8 = var2.step;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.useShouldAllowMobileVideoTask;
            var3 = var11.config;
            var2 = {};
            var2['location'] = var9;
            var16 = var5.bind(var6)(var3, var2);
            _closure2_slot2 = var16;
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var11;
            var2[1] = var16;
            var2[2] = var10;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0009_ip = 148; continue _fun0009 }
 16:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 14;
                    var1 = var4[var1];
                    var7 = undefined;
                    var4 = var3.bind(var7)(var1);
                    var3 = var4.isInGameQuest;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 24;
                    var3 = var8[var3];
                    var3 = var4.bind(var7)(var3);
                    if(var1) { _fun0009_ip = 114; continue _fun0009 }
 80:
                    var4 = var3.QuestBottomSheetProgressCardPlayStreamTask;
                    var1 = {};
                    var8 = _closure2_slot0;
                    var1['quest'] = var8;
                    var8 = _closure2_slot1;
                    var1['sourceQuestContent'] = var8;
                    var1 = var5.bind(var7)(var4, var1);
                    _fun0009_ip = 146; continue _fun0009;
 114:
                    var4 = var3.QuestBottomSheetProgressCardInGameTask;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['quest'] = var8;
                    var8 = _closure2_slot1;
                    var3['sourceQuestContent'] = var8;
                    var1 = var5.bind(var7)(var4, var3);
 146:
                    _fun0009_ip = 206; continue _fun0009;
 148:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 24;
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
 206:
                    return var1;
                }
            };
            var17 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var1 = {};
            var5 = _closure1_slot13;
            var5 = var5.TASK_SELECT;
            var6 = var8 === var5;
            if(!var6) { _fun0008_ip = 218; continue _fun0008 }
 181:
            var12 = _closure1_slot10;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 25;
            var5 = var14[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var5['onTaskSelect'] = var13;
            var6 = var12.bind(var4)(var9, var5);
 218:
            var5 = new Array(4);
            var5[0] = var6;
            var6 = _closure1_slot13;
            var6 = var6.CONSOLE_CONNECT;
            var6 = var8 === var6;
            if(!var6) { _fun0008_ip = 290; continue _fun0008 }
 243:
            var13 = _closure1_slot10;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 26;
            var9 = var14[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var9['quest'] = var11;
            var9['step'] = var8;
            var9['sourceQuestContent'] = var10;
            var6 = var13.bind(var4)(var12, var9);
 290:
            var5[1] = var6;
            var6 = _closure1_slot13;
            var6 = var6.TASK_STATUS;
            var6 = var8 === var6;
            if(!var6) { _fun0008_ip = 395; continue _fun0008 }
 311:
            var13 = _closure1_slot11;
            var12 = _closure1_slot6;
            var9 = {};
            var14 = new Array(2);
            var14[0] = var17;
            if(!var15) { _fun0008_ip = 335; continue _fun0008 }
 332:
            var15 = !var16;
 335:
            if(!var15) { _fun0008_ip = 381; continue _fun0008 }
 338:
            var18 = _closure1_slot10;
            var17 = _closure1_slot20;
            var16 = {};
            var16['quest'] = var11;
            var19 = null;
            var21 = var19 == var20;
            var19 = undefined;
            if(var21) { _fun0008_ip = 370; continue _fun0008 }
 364:
            var19 = var20.errorHints;
 370:
            var16['errorHints'] = var19;
            var15 = var18.bind(var4)(var17, var16);
 381:
            var14[1] = var15;
            var9['children'] = var14;
            var6 = var13.bind(var4)(var12, var9);
 395:
            var5[2] = var6;
            var6 = _closure1_slot13;
            var6 = var6.TASK_STATUS;
            var6 = var8 === var6;
            if(!var6) { _fun0008_ip = 422; continue _fun0008 }
 416:
            var6 = var11.preview;
 422:
            if(!var6) { _fun0008_ip = 451; continue _fun0008 }
 425:
            var9 = _closure1_slot10;
            var8 = _closure1_slot19;
            var7 = {};
            var7['quest'] = var11;
            var7['sourceQuestContent'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 451:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var1 = function PreviewControls(arg1) {
        var1 = arg1;
        var10 = var1.quest;
        var8 = var1.sourceQuestContent;
        var1 = _closure1_slot14;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot10;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = var5.previewContainer;
        var1['style'] = var5;
        var7 = _closure1_slot10;
        var6 = _closure1_slot1;
        var11 = _closure1_slot2;
        var5 = 27;
        var5 = var11[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['quest'] = var10;
        var9 = _closure1_slot8;
        var9 = var9.QUEST_HOME_MOBILE;
        var5['location'] = var9;
        var5['sourceQuestContent'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function MicrophoneUnit(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
            if(var3) { _fun0010_ip = 81; continue _fun0010 }
 76:
            var8 = var7.length;
 81:
            var9 = var1 != var8;
            var5 = 0;
            var3 = 0;
            if(!var9) { _fun0010_ip = 95; continue _fun0010 }
 92:
            var3 = var8;
 95:
            var14 = var3 > var5;
            if(!var14) { _fun0010_ip = 106; continue _fun0010 }
 102:
            if(!(var1 == var7)) { _fun0010_ip = 198; continue _fun0010 }
 106:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 11;
            var8 = var11[var1];
            var8 = var3.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var1 = var11[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.t;
            var3 = var1.GXqvCw;
            var1 = {};
            var11 = var19.config;
            var11 = var11.messages;
            var11 = var11.gameTitle;
            var1['gameTitle'] = var11;
            var1 = var8.bind(var9)(var3, var1);
            var8 = new Array(1);
            var8[0] = var1;
            _fun0010_ip = 243; continue _fun0010;
 198:
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
            var1[var3] = var2;
            var2 = 1;
            var2 = var3 + var2;
            var8 = var1;
 243:
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
            var10 = 28;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.WarningIcon;
            var10 = {};
            var13 = 'text-warning';
            if(!var14) { _fun0010_ip = 330; continue _fun0010 }
 324:
            var13 = 'text-danger';
 330:
            var10['color'] = var13;
            var11 = var12.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot10;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 29;
            var11 = var16[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-md/medium', 'color': 'header-primary'};
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 11;
            var17 = var20[var15];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            if(var14) { _fun0010_ip = 453; continue _fun0010 }
 419:
            var17 = var18.string;
            var14 = var20[var15];
            var14 = var16.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.YstzGB;
            var14 = var17.bind(var18)(var14);
            _fun0010_ip = 510; continue _fun0010;
 453:
            var17 = var18.formatToPlainString;
            var15 = var20[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.28Ql29;
            var15 = {};
            var19 = var19.config;
            var19 = var19.messages;
            var19 = var19.gameTitle;
            var15['gameTitle'] = var19;
            var14 = var17.bind(var18)(var16, var15);
 510:
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
                var1 = 29;
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
    var _closure1_slot20 = var1;
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
    var18 = var18.spacing;
    var18 = var18.PX_16;
    var13['paddingHorizontal'] = var18;
    var18 = var10[var14];
    var18 = var15.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_24;
    var13['gap'] = var18;
    var2['contentContainer'] = var13;
    var13 = {};
    var13['display'] = var17;
    var17 = var10[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_8;
    var13['gap'] = var17;
    var17 = var10[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_16;
    var17 = -var17;
    var13['marginHorizontal'] = var17;
    var17 = var10[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_16;
    var13['paddingHorizontal'] = var17;
    var17 = var10[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_16;
    var13['marginTop'] = var17;
    var17 = var10[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.spacing;
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
    var16 = var10[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var13['gap'] = var16;
    var2['microphoneUnitHeader'] = var13;
    var13 = {};
    var16 = 'absolute';
    var13['position'] = var16;
    var16 = var10[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_32;
    var13['right'] = var16;
    var14 = var10[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var13['top'] = var14;
    var14 = 0.1;
    var13['opacity'] = var14;
    var2['previewContainer'] = var13;
    var2 = var8.bind(var12)(var2);
    var _closure1_slot14 = var2;
    var8 = var11.createContext;
    var2 = {};
    var12 = false;
    var2['isInQuestBottomSheet'] = var12;
    var2 = var8.bind(var11)(var2);
    var _closure1_slot15 = var2;
    var8 = 30;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx';
    var8 = var9.bind(var10)(var8);
    var7 = function QuestBottomSheetConnected(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
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
            var1 = null;
            var3 = var1 == var9;
            if(var3) { _fun0011_ip = 205; continue _fun0011 }
 105:
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
                var5 = _closure2_slot0;
                var2['questId'] = var5;
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
 205:
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