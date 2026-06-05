// app/modules/quests/hooks/QuestCopyHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function formatWithOrWithoutMarkdown(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.intl;
            var1 = arg3;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.format;
            var1 = var1.bind(var3)(var5, var4);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = var3.formatToPlainString;
            var1 = var2.bind(var3)(var5, var4);
case 4:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getGamingPlayQuestPermanentWithPremiumCollectibleMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.hasRewardDuration;
            var2 = var2.shouldShowGameProfileLink;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.t;
            if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = var3.eb/Sna;
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var1 = var3.tQoqXX;
case 9:
            _fun0002_ip = 10; continue _fun0002;
case 5:
            if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = var3["0hwcvM"];
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var2 = var3["/4XT0b"];
case 13:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function getGamingPlayQuestExtendableWithPremiumCollectibleMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.t;
            var1 = arg1;
            if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = var2.ziB0HF;
            _fun0003_ip = 16; continue _fun0003;
case 14:
            var1 = var2.klYWbT;
case 16:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function getGamingPlayQuestExpiringCollectibleMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.t;
            var1 = arg1;
            if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var1 = var2.AwuMRS;
            _fun0004_ip = 16; continue _fun0004;
case 14:
            var1 = var2["4JS2QJ"];
case 16:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getQuestBarSubtitlePlayGameMessage(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.t;
            var1 = arg1;
            if(var1) { _fun0005_ip = 17; continue _fun0005 }
case 15:
            var1 = var2.NIimTt;
            _fun0005_ip = 18; continue _fun0005;
case 17:
            var1 = var2.GFdaUK;
case 18:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function getQuestInstructionsToWinRewardPlaytimeOnDesktop(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var11 = var2.quest;
            var1 = var2.taskDetails;
            var5 = var2.withoutMarkdown;
            var13 = var2.hasNitro;
            var8 = var2.collectibleRewardDuration;
            var6 = var2.onGameTitleClick;
            var7 = var2.rewardNameWithArticle;
            var9 = var1.targetMinutes;
            var1 = var11.config;
            var1 = var1.messages;
            var10 = var1.gameTitle;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 11;
            var3 = var14[var2];
            var4 = undefined;
            var16 = var12.bind(var4)(var3);
            var15 = var16.isCollectibleQuestRewardPremiumExtendable;
            var3 = var11.config;
            var3 = var15.bind(var16)(var3);
            var2 = var14[var2];
            var14 = var12.bind(var4)(var2);
            var12 = var14.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var2 = var11.config;
            var2 = var12.bind(var14)(var2);
            var11 = var11.config;
            var14 = var11.features;
            var12 = var14.includes;
            var11 = _closure1_slot10;
            var11 = var11.NON_GAMING_PLAY_QUEST;
            var11 = var12.bind(var14)(var11);
            var12 = null;
            var14 = var12 != var6;
            if(!var13) { _fun0006_ip = 19; continue _fun0006 }
case 20:
            if(var3) { _fun0006_ip = 21; continue _fun0006 }
case 19:
            if(var3) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            if(!(var12 == var8)) { _fun0006_ip = 22; continue _fun0006 }
case 24:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 7;
            var3 = var15[var3];
            var3 = var13.bind(var4)(var3);
            var13 = var3.t;
            if(var11) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            if(var14) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var3 = var13.FZL5Q5;
            _fun0006_ip = 29; continue _fun0006;
case 27:
            var3 = var13.NrD2h8;
case 29:
            _fun0006_ip = 30; continue _fun0006;
case 25:
            var3 = var13["03VJqu"];
case 30:
            _fun0006_ip = 31; continue _fun0006;
case 22:
            if(var11) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var13 = _closure1_slot16;
            var13 = var13.bind(var4)(var14);
            _fun0006_ip = 34; continue _fun0006;
case 32:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 7;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var13 = var15.enQ3jU;
case 34:
            var3 = var13;
case 31:
            _fun0006_ip = 35; continue _fun0006;
case 21:
            if(var2) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            if(var11) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var2 = _closure1_slot15;
            var2 = var2.bind(var4)(var14);
            _fun0006_ip = 40; continue _fun0006;
case 38:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 7;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.t;
            var2 = var13["1AcTqm"];
case 40:
            _fun0006_ip = 41; continue _fun0006;
case 36:
            if(var11) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var13 = _closure1_slot14;
            var11 = {};
            var15 = var12 != var8;
            var11['hasRewardDuration'] = var15;
            var11['shouldShowGameProfileLink'] = var14;
            var11 = var13.bind(var4)(var11);
            _fun0006_ip = 44; continue _fun0006;
case 42:
            if(!(var12 == var8)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 7;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.ztXW8V;
            _fun0006_ip = 47; continue _fun0006;
case 45:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 7;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var12 = var13.u5QXpw;
case 47:
            var11 = var12;
case 44:
            var2 = var11;
case 41:
            var3 = var2;
case 35:
            var2 = _closure1_slot13;
            var1 = {};
            var1['gameTitle'] = var10;
            var1['streamingDurationRequirement'] = var9;
            var1['rewardNameWithArticle'] = var7;
            var1['duration'] = var8;
            var1['questReward'] = var7;
            var1['onGameTitleClick'] = var6;
            var1 = var2.bind(var4)(var3, var1, var5);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getQuestInstructionsToWinRewardSponsored(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var13 = var3.quest;
            var2 = var3.taskDetails;
            var12 = var3.sourceQuestContent;
            var1 = var3.withoutMarkdown;
            var10 = var3.popoutTargetElementRef;
            var9 = var3.onGameSheetOpened;
            var8 = var3.onGameSheetClosed;
            var7 = var3.rewardNameWithArticle;
            var6 = var2.targetMinutes;
            var11 = var2.applications;
            if(var1) { _fun0007_ip = 48; continue _fun0007 }
case 4:
            var3 = {};
            var3['quest'] = var13;
            var3['rewardNameWithArticle'] = var7;
            var3['targetMinutes'] = var6;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var1 = var2[var1];
            var2 = undefined;
            var5 = var4.bind(var2)(var1);
            var4 = var5.createGameSheetHook;
            var1 = {};
            var1['quest'] = var13;
            var1['sourceQuestContent'] = var12;
            var12 = null;
            if(!(var12 == var11)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var11 = new Array(0);
case 49:
            var1['applications'] = var11;
            var1['popoutTargetElementRef'] = var10;
            var1['onGameSheetOpened'] = var9;
            var1['onGameSheetClosed'] = var8;
            var1 = var4.bind(var5)(var1);
            var3['gameSheetHook'] = var1;
            var1 = function _getQuestInstructionsToWinRewardArenaPackage(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.quest;
                    var5 = var1.gameSheetHook;
                    var7 = var1.rewardNameWithArticle;
                    var6 = var1.targetMinutes;
                    var10 = {};
                    var3 = _closure1_slot10;
                    var13 = var3.PACKAGE_ACTION_ADVENTURE;
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 7;
                    var11 = var9[var8];
                    var3 = undefined;
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.H485IA;
                    var10[12] = var11;
                    var11 = _closure1_slot10;
                    var13 = var11.PACKAGE_RPG_MMO;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11["3XS8Ni"];
                    var10[12] = var11;
                    var11 = _closure1_slot10;
                    var13 = var11.PACKAGE_RACING_SPORTS;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.X+UCju;
                    var10[12] = var11;
                    var11 = _closure1_slot10;
                    var13 = var11.PACKAGE_SANDBOX_CREATIVE;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11["6o4n1Q"];
                    var10[12] = var11;
                    var11 = _closure1_slot10;
                    var13 = var11.PACKAGE_FAMILY_FRIENDLY;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.DUsNmf;
                    var10[12] = var11;
                    var11 = _closure1_slot10;
                    var13 = var11.PACKAGE_HOLIDAY_SEASON;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.cWP8/Z;
                    var10[12] = var11;
                    var11 = _closure1_slot10;
                    var11 = var11.PACKAGE_NEW_YEARS;
                    var9 = var9[var8];
                    var9 = var12.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9["8+sIJz"];
                    var10[10] = var9;
                    var _closure3_slot0 = var10;
                    var4 = var4.config;
                    var9 = var4.features;
                    var4 = var9.find;
                    var2 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var1 in var2;
                        return var1;
                    };
                    var9 = var4.bind(var9)(var2);
                    var2 = null;
                    var11 = var2 != var9;
                    var4 = null;
                    if(!var11) { _fun0008_ip = 51; continue _fun0008 }
case 40:
                    var4 = var10[var9];
case 51:
                    if(!(var2 == var4)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.t;
                    var4 = var2.CDeHul;
case 52:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.intl;
                    var2 = var3.format;
                    var1 = {};
                    var1['rewardNameWithArticle'] = var7;
                    var1['targetMinutes'] = var6;
                    var1['gameSheetHook'] = var5;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var1 = var1.bind(var2)(var3);
            _fun0007_ip = 54; continue _fun0007;
case 48:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 7;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2["1votF6"];
            var2 = {};
            var2['rewardNameWithArticle'] = var7;
            var2['targetMinutes'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 54:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function _getQuestsInstructionsToWinReward(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var12 = var1.quest;
            var11 = var1.taskDetails;
            var13 = var1.thirdPartyTaskDetails;
            var10 = var1.sourceQuestContent;
            var9 = var1.withoutMarkdown;
            var20 = var1.currentUser;
            var8 = var1.popoutTargetElementRef;
            var7 = var1.onGameSheetOpened;
            var6 = var1.onGameSheetClosed;
            var3 = var1.onGameTitleClick;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 13;
            var14 = var1[var4];
            var4 = undefined;
            var16 = var5.bind(var4)(var14);
            var15 = var16.isPremium;
            var14 = _closure1_slot11;
            var14 = var14.TIER_2;
            var15 = var15.bind(var16)(var20, var14);
            var22 = 11;
            var14 = var1[var22];
            var17 = var5.bind(var4)(var14);
            var16 = var17.getCollectibleQuestRewardDuration;
            var14 = var12.config;
            var14 = var16.bind(var17)(var14);
            var21 = 10;
            var1 = var1[var21];
            var5 = var5.bind(var4)(var1);
            var1 = var5.isConsoleQuest;
            var1 = var1.bind(var5)(var12);
            if(!var1) { _fun0009_ip = 55; continue _fun0009 }
case 56:
            var16 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var21];
            var16 = var16.bind(var4)(var5);
            var5 = var16.shouldUsePlayOnDesktopTask;
            var1 = var5.bind(var16)(var12);
case 55:
            var18 = _closure1_slot0;
            var5 = _closure1_slot2;
            var17 = 9;
            var16 = var5[var17];
            var19 = var18.bind(var4)(var16);
            var16 = var19.isSponsoredPlayQuest;
            var16 = var16.bind(var19)(var12);
            var5 = var5[var22];
            var19 = var18.bind(var4)(var5);
            var18 = var19.getDefaultRewardNameWithArticle;
            var5 = var12.config;
            var5 = var18.bind(var19)(var5, var20);
            if(var16) { _fun0009_ip = 57; continue _fun0009 }
case 58:
            if(var1) { _fun0009_ip = 59; continue _fun0009 }
case 32:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var16 = var16.bind(var4)(var1);
            var1 = var16.isConsoleQuest;
            var1 = var1.bind(var16)(var12);
            if(var1) { _fun0009_ip = 60; continue _fun0009 }
case 31:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var16 = var16.bind(var4)(var1);
            var1 = var16.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var16)(var12);
            if(var1) { _fun0009_ip = 61; continue _fun0009 }
case 62:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var22];
            var18 = var16.bind(var4)(var1);
            var16 = var18.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var12;
            var1 = var16.bind(var18)(var1);
            if(var1) { _fun0009_ip = 63; continue _fun0009 }
case 64:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var16 = var16.bind(var4)(var1);
            var1 = var16.hasWatchVideoTasks;
            var1 = var1.bind(var16)(var12);
            if(var1) { _fun0009_ip = 65; continue _fun0009 }
case 66:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var16 = var16.bind(var4)(var1);
            var1 = var16.hasPlayActivityTask;
            var1 = var1.bind(var16)(var12);
            if(var1) { _fun0009_ip = 67; continue _fun0009 }
case 68:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var16 = var16.bind(var4)(var1);
            var1 = var16.hasAchievementInGameTask;
            var1 = var1.bind(var16)(var12);
            if(!var1) { _fun0009_ip = 69; continue _fun0009 }
case 70:
            var25 = null;
            if(!(var25 == var13)) { _fun0009_ip = 71; continue _fun0009 }
case 69:
            var28 = null;
            if(!(var28 == var13)) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var18 = {};
            var18['quest'] = var12;
            var18['taskDetails'] = var11;
            var18['withoutMarkdown'] = var9;
            var18['hasNitro'] = var15;
            var18['collectibleRewardDuration'] = var14;
            var18['onGameTitleClick'] = var3;
            var18['rewardNameWithArticle'] = var5;
            var1 = var18.quest;
            var16 = var18.taskDetails;
            var19 = var18.withoutMarkdown;
            var30 = var18.hasNitro;
            var24 = var18.collectibleRewardDuration;
            var20 = var18.onGameTitleClick;
            var23 = var18.rewardNameWithArticle;
            var26 = var16.targetMinutes;
            var16 = var1.config;
            var16 = var16.messages;
            var27 = var16.gameTitle;
            var29 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = var18[var22];
            var32 = var29.bind(var4)(var16);
            var31 = var32.isCollectibleQuestRewardPremiumExtendable;
            var16 = var1.config;
            var16 = var31.bind(var32)(var16);
            var18 = var18[var22];
            var29 = var29.bind(var4)(var18);
            var18 = var29.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var1 = var1.config;
            var1 = var18.bind(var29)(var1);
            var29 = var28 != var20;
            var18 = _closure1_slot13;
            if(!var30) { _fun0009_ip = 74; continue _fun0009 }
case 75:
            if(var16) { _fun0009_ip = 76; continue _fun0009 }
case 74:
            if(var16) { _fun0009_ip = 77; continue _fun0009 }
case 78:
            if(!(var28 == var24)) { _fun0009_ip = 77; continue _fun0009 }
case 79:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var16 = 7;
            var16 = var31[var16];
            var16 = var30.bind(var4)(var16);
            var30 = var16.t;
            if(var29) { _fun0009_ip = 80; continue _fun0009 }
case 81:
            var16 = var30.hkJ+Gs;
            _fun0009_ip = 82; continue _fun0009;
case 80:
            var16 = var30.ER9rII;
case 82:
            _fun0009_ip = 83; continue _fun0009;
case 77:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var30 = 7;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var31 = var30.t;
            if(var29) { _fun0009_ip = 84; continue _fun0009 }
case 85:
            var30 = var31.BLyDvO;
            _fun0009_ip = 86; continue _fun0009;
case 84:
            var30 = var31.Cko4a4;
case 86:
            var16 = var30;
case 83:
            _fun0009_ip = 87; continue _fun0009;
case 76:
            if(var1) { _fun0009_ip = 88; continue _fun0009 }
case 89:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var1 = 7;
            var1 = var31[var1];
            var1 = var30.bind(var4)(var1);
            var30 = var1.t;
            if(var29) { _fun0009_ip = 90; continue _fun0009 }
case 91:
            var1 = var30.smG9ql;
            _fun0009_ip = 92; continue _fun0009;
case 90:
            var1 = var30.eEuma3;
case 92:
            _fun0009_ip = 93; continue _fun0009;
case 88:
            if(!(var28 == var24)) { _fun0009_ip = 94; continue _fun0009 }
case 95:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var28 = 7;
            var28 = var31[var28];
            var28 = var30.bind(var4)(var28);
            var30 = var28.t;
            if(var29) { _fun0009_ip = 96; continue _fun0009 }
case 97:
            var28 = var30.X8Yt/1;
            _fun0009_ip = 98; continue _fun0009;
case 96:
            var28 = var30.l9yxDa;
case 98:
            _fun0009_ip = 99; continue _fun0009;
case 94:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var30 = 7;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.t;
            if(var29) { _fun0009_ip = 100; continue _fun0009 }
case 101:
            var29 = var30.TmKqHw;
            _fun0009_ip = 102; continue _fun0009;
case 100:
            var29 = var30["3RwRv8"];
case 102:
            var28 = var29;
case 99:
            var1 = var28;
case 93:
            var16 = var1;
case 87:
            var1 = {};
            var1['gameTitle'] = var27;
            var1['streamingDurationRequirement'] = var26;
            var1['duration'] = var24;
            var1['questReward'] = var23;
            var1['onGameTitleClick'] = var20;
            var1 = var18.bind(var4)(var16, var1, var19);
            _fun0009_ip = 103; continue _fun0009;
case 72:
            var1 = var13.description;
case 103:
            _fun0009_ip = 104; continue _fun0009;
case 71:
            var16 = {};
            var16['quest'] = var12;
            var16['thirdPartyTaskDetails'] = var13;
            var16['withoutMarkdown'] = var9;
            var16['hasNitro'] = var15;
            var16['collectibleRewardDuration'] = var14;
            var16['rewardNameWithArticle'] = var5;
            var13 = var16.quest;
            var24 = var16.thirdPartyTaskDetails;
            var19 = var16.withoutMarkdown;
            var26 = var16.hasNitro;
            var23 = var16.collectibleRewardDuration;
            var20 = var16.rewardNameWithArticle;
            var27 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = var18[var22];
            var29 = var27.bind(var4)(var16);
            var28 = var29.isCollectibleQuestRewardPremiumExtendable;
            var16 = var13.config;
            var16 = var28.bind(var29)(var16);
            var18 = var18[var22];
            var27 = var27.bind(var4)(var18);
            var18 = var27.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var13 = var13.config;
            var13 = var18.bind(var27)(var13);
            var18 = _closure1_slot13;
            if(!var26) { _fun0009_ip = 105; continue _fun0009 }
case 106:
            if(var16) { _fun0009_ip = 107; continue _fun0009 }
case 105:
            if(var16) { _fun0009_ip = 108; continue _fun0009 }
case 109:
            if(!(var25 == var23)) { _fun0009_ip = 108; continue _fun0009 }
case 110:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var16 = 7;
            var16 = var27[var16];
            var16 = var26.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.thO6iA;
            _fun0009_ip = 111; continue _fun0009;
case 108:
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var26 = 7;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.t;
            var16 = var26.IACEB/;
case 111:
            _fun0009_ip = 112; continue _fun0009;
case 107:
            if(var13) { _fun0009_ip = 113; continue _fun0009 }
case 114:
            if(!(var25 == var23)) { _fun0009_ip = 115; continue _fun0009 }
case 116:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var13 = 7;
            var13 = var27[var13];
            var13 = var26.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.thO6iA;
            _fun0009_ip = 117; continue _fun0009;
case 115:
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var26 = 7;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.t;
            var13 = var26["6FOKAX"];
case 117:
            _fun0009_ip = 118; continue _fun0009;
case 113:
            if(!(var25 == var23)) { _fun0009_ip = 119; continue _fun0009 }
case 120:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 7;
            var25 = var27[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25["8066TK"];
            _fun0009_ip = 121; continue _fun0009;
case 119:
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var26 = 7;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.t;
            var25 = var26.NdXW5c;
case 121:
            var13 = var25;
case 118:
            var16 = var13;
case 112:
            var13 = {};
            var24 = var24.description;
            var13['objective'] = var24;
            var13['duration'] = var23;
            var13['questReward'] = var20;
            var1 = var18.bind(var4)(var16, var13, var19);
case 104:
            _fun0009_ip = 122; continue _fun0009;
case 67:
            var16 = {};
            var16['quest'] = var12;
            var16['taskDetails'] = var11;
            var16['withoutMarkdown'] = var9;
            var16['rewardNameWithArticle'] = var5;
            var24 = var16.quest;
            var13 = var16.taskDetails;
            var19 = var16.withoutMarkdown;
            var20 = var16.rewardNameWithArticle;
            var23 = var13.targetMinutes;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var17];
            var16 = var16.bind(var4)(var13);
            var13 = var16.isPlayAnyActivityQuest;
            var13 = var13.bind(var16)(var24);
            var18 = _closure1_slot13;
            var17 = _closure1_slot0;
            var25 = _closure1_slot2;
            var16 = 7;
            var16 = var25[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            if(var13) { _fun0009_ip = 123; continue _fun0009 }
case 124:
            var17 = var16.UuzHh8;
            var13 = {};
            var24 = var24.config;
            var24 = var24.messages;
            var24 = var24.gameTitle;
            var13['activityName'] = var24;
            var13['streamingDurationRequirement'] = var23;
            var13['questReward'] = var20;
            var13 = var18.bind(var4)(var17, var13, var19);
            _fun0009_ip = 125; continue _fun0009;
case 123:
            var17 = var16.VYwSSu;
            var16 = {};
            var16['streamingDurationRequirement'] = var23;
            var16['questReward'] = var20;
            var13 = var18.bind(var4)(var17, var16, var19);
case 125:
            var1 = var13;
case 122:
            _fun0009_ip = 126; continue _fun0009;
case 65:
            var13 = {};
            var13['quest'] = var12;
            var13['collectibleRewardDuration'] = var14;
            var13['hasNitro'] = var15;
            var13['withoutMarkdown'] = var9;
            var13['rewardNameWithArticle'] = var5;
            var16 = var13.quest;
            var19 = var13.collectibleRewardDuration;
            var25 = var13.hasNitro;
            var18 = var13.withoutMarkdown;
            var20 = var13.rewardNameWithArticle;
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var21];
            var21 = var17.bind(var4)(var13);
            var17 = var21.getDefaultWatchVideoTask;
            var13 = var16.config;
            var17 = var17.bind(var21)(var13);
            var23 = null;
            var21 = var23 == var17;
            var13 = undefined;
            if(var21) { _fun0009_ip = 127; continue _fun0009 }
case 128:
            var17 = var17.messages;
            var13 = var17.videoTitle;
case 127:
            var17 = var23 != var13;
            var21 = 'video';
            if(!var17) { _fun0009_ip = 129; continue _fun0009 }
case 130:
            var21 = var13;
case 129:
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var24 = var13[var22];
            var27 = var17.bind(var4)(var24);
            var26 = var27.isCollectibleQuestRewardPremiumExtendable;
            var24 = var16.config;
            var24 = var26.bind(var27)(var24);
            var13 = var13[var22];
            var26 = var17.bind(var4)(var13);
            var17 = var26.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var13 = var16.config;
            var13 = var17.bind(var26)(var13);
            var17 = _closure1_slot13;
            if(!var24) { _fun0009_ip = 131; continue _fun0009 }
case 132:
            if(var25) { _fun0009_ip = 133; continue _fun0009 }
case 131:
            if(var24) { _fun0009_ip = 134; continue _fun0009 }
case 135:
            if(!(var23 == var19)) { _fun0009_ip = 134; continue _fun0009 }
case 136:
            var24 = var16.id;
            var16 = _closure1_slot9;
            if(!(var24 !== var16)) { _fun0009_ip = 137; continue _fun0009 }
case 138:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var16 = 7;
            var16 = var25[var16];
            var16 = var24.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.g+InPC;
            _fun0009_ip = 139; continue _fun0009;
case 137:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 7;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var16 = var24.Rsd5bL;
case 139:
            _fun0009_ip = 140; continue _fun0009;
case 134:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 7;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var16 = var24.W/HkLO;
case 140:
            _fun0009_ip = 141; continue _fun0009;
case 133:
            if(var13) { _fun0009_ip = 142; continue _fun0009 }
case 143:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var13 = 7;
            var13 = var25[var13];
            var13 = var24.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.vs/xBu;
            _fun0009_ip = 144; continue _fun0009;
case 142:
            if(!(var23 == var19)) { _fun0009_ip = 145; continue _fun0009 }
case 146:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 7;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.xqX+var6;
            _fun0009_ip = 147; continue _fun0009;
case 145:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 7;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var23 = var24.tXwfJT;
case 147:
            var13 = var23;
case 144:
            var16 = var13;
case 141:
            var13 = {};
            var13['videoTitle'] = var21;
            var13['rewardNameWithArticle'] = var20;
            var13['duration'] = var19;
            var1 = var17.bind(var4)(var16, var13, var18);
case 126:
            _fun0009_ip = 148; continue _fun0009;
case 63:
            var17 = {};
            var17['quest'] = var12;
            var17['taskDetails'] = var11;
            var17['withoutMarkdown'] = var9;
            var17['onGameTitleClick'] = var3;
            var13 = var17.quest;
            var16 = var17.taskDetails;
            var18 = var17.withoutMarkdown;
            var19 = var17.onGameTitleClick;
            var20 = var16.targetMinutes;
            var13 = var13.config;
            var13 = var13.messages;
            var21 = var13.gameTitle;
            var17 = _closure1_slot13;
            var13 = null;
            if(!(var13 == var19)) { _fun0009_ip = 149; continue _fun0009 }
case 150:
            var16 = _closure1_slot0;
            var23 = _closure1_slot2;
            var13 = 7;
            var13 = var23[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var16 = var13.a/ia7F;
            _fun0009_ip = 151; continue _fun0009;
case 149:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var13 = 7;
            var13 = var24[var13];
            var13 = var23.bind(var4)(var13);
            var13 = var13.t;
            var16 = var13.HHVg4i;
case 151:
            var13 = {};
            var13['gameTitle'] = var21;
            var13['streamingDurationRequirement'] = var20;
            var13['onGameTitleClick'] = var19;
            var1 = var17.bind(var4)(var16, var13, var18);
case 148:
            _fun0009_ip = 152; continue _fun0009;
case 61:
            var16 = _closure1_slot18;
            var13 = {};
            var13['quest'] = var12;
            var13['taskDetails'] = var11;
            var13['withoutMarkdown'] = var9;
            var13['hasNitro'] = var15;
            var13['collectibleRewardDuration'] = var14;
            var13['onGameTitleClick'] = var3;
            var13['rewardNameWithArticle'] = var5;
            var1 = var16.bind(var4)(var13);
case 152:
            _fun0009_ip = 153; continue _fun0009;
case 60:
            var17 = {};
            var17['quest'] = var12;
            var17['taskDetails'] = var11;
            var17['withoutMarkdown'] = var9;
            var17['hasNitro'] = var15;
            var17['collectibleRewardDuration'] = var14;
            var17['onGameTitleClick'] = var3;
            var17['rewardNameWithArticle'] = var5;
            var13 = var17.quest;
            var16 = var17.taskDetails;
            var18 = var17.withoutMarkdown;
            var25 = var17.hasNitro;
            var21 = var17.collectibleRewardDuration;
            var19 = var17.onGameTitleClick;
            var23 = var17.rewardNameWithArticle;
            var20 = var16.targetMinutes;
            var16 = var13.config;
            var16 = var16.messages;
            var24 = var16.gameTitle;
            var26 = _closure1_slot0;
            var17 = _closure1_slot2;
            var16 = var17[var22];
            var28 = var26.bind(var4)(var16);
            var27 = var28.isCollectibleQuestRewardPremiumExtendable;
            var16 = var13.config;
            var16 = var27.bind(var28)(var16);
            var17 = var17[var22];
            var26 = var26.bind(var4)(var17);
            var17 = var26.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var13 = var13.config;
            var13 = var17.bind(var26)(var13);
            var28 = null;
            var27 = var28 != var19;
            var17 = _closure1_slot13;
            if(!var25) { _fun0009_ip = 154; continue _fun0009 }
case 155:
            if(var16) { _fun0009_ip = 156; continue _fun0009 }
case 154:
            if(var16) { _fun0009_ip = 157; continue _fun0009 }
case 158:
            if(!(var28 == var21)) { _fun0009_ip = 157; continue _fun0009 }
case 159:
            var16 = _closure1_slot17;
            var16 = var16.bind(var4)(var27);
            _fun0009_ip = 160; continue _fun0009;
case 157:
            var25 = _closure1_slot16;
            var16 = var25.bind(var4)(var27);
case 160:
            _fun0009_ip = 161; continue _fun0009;
case 156:
            if(var13) { _fun0009_ip = 162; continue _fun0009 }
case 163:
            var13 = _closure1_slot15;
            var13 = var13.bind(var4)(var27);
            _fun0009_ip = 164; continue _fun0009;
case 162:
            var26 = _closure1_slot14;
            var25 = {};
            var28 = var28 != var21;
            var25['hasRewardDuration'] = var28;
            var25['shouldShowGameProfileLink'] = var27;
            var13 = var26.bind(var4)(var25);
case 164:
            var16 = var13;
case 161:
            var13 = {};
            var13['gameTitle'] = var24;
            var13['targetMinutes'] = var20;
            var13['rewardNameWithArticle'] = var23;
            var13['duration'] = var21;
            var13['streamingDurationRequirement'] = var20;
            var13['onGameTitleClick'] = var19;
            var1 = var17.bind(var4)(var16, var13, var18);
case 153:
            _fun0009_ip = 165; continue _fun0009;
case 59:
            var13 = {};
            var13['quest'] = var12;
            var13['taskDetails'] = var11;
            var13['withoutMarkdown'] = var9;
            var13['hasNitro'] = var15;
            var13['collectibleRewardDuration'] = var14;
            var13['onGameTitleClick'] = var3;
            var13['rewardNameWithArticle'] = var5;
            var14 = var13.quest;
            var3 = var13.taskDetails;
            var15 = var13.withoutMarkdown;
            var23 = var13.hasNitro;
            var18 = var13.collectibleRewardDuration;
            var16 = var13.onGameTitleClick;
            var19 = var13.rewardNameWithArticle;
            var17 = var3.targetMinutes;
            var3 = var14.config;
            var3 = var3.messages;
            var20 = var3.gameTitle;
            var21 = _closure1_slot0;
            var3 = _closure1_slot2;
            var13 = var3[var22];
            var25 = var21.bind(var4)(var13);
            var24 = var25.isCollectibleQuestRewardPremiumExtendable;
            var13 = var14.config;
            var13 = var24.bind(var25)(var13);
            var3 = var3[var22];
            var22 = var21.bind(var4)(var3);
            var21 = var22.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var14.config;
            var3 = var21.bind(var22)(var3);
            var14 = var14.config;
            var22 = var14.features;
            var21 = var22.includes;
            var14 = _closure1_slot10;
            var14 = var14.NON_GAMING_PLAY_QUEST;
            var21 = var21.bind(var22)(var14);
            var22 = null;
            var24 = var22 != var16;
            var14 = _closure1_slot13;
            if(!var23) { _fun0009_ip = 166; continue _fun0009 }
case 167:
            if(var13) { _fun0009_ip = 168; continue _fun0009 }
case 166:
            if(var13) { _fun0009_ip = 169; continue _fun0009 }
case 170:
            if(!(var22 == var18)) { _fun0009_ip = 169; continue _fun0009 }
case 171:
            if(var21) { _fun0009_ip = 172; continue _fun0009 }
case 173:
            var13 = _closure1_slot17;
            var13 = var13.bind(var4)(var24);
            _fun0009_ip = 174; continue _fun0009;
case 172:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 7;
            var23 = var26[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.t;
            var13 = var23.e+K3xJ;
case 174:
            _fun0009_ip = 175; continue _fun0009;
case 169:
            if(var21) { _fun0009_ip = 176; continue _fun0009 }
case 177:
            var23 = _closure1_slot16;
            var23 = var23.bind(var4)(var24);
            _fun0009_ip = 178; continue _fun0009;
case 176:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 7;
            var25 = var27[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.t;
            var23 = var25.enQ3jU;
case 178:
            var13 = var23;
case 175:
            _fun0009_ip = 179; continue _fun0009;
case 168:
            if(var3) { _fun0009_ip = 180; continue _fun0009 }
case 181:
            if(var21) { _fun0009_ip = 182; continue _fun0009 }
case 183:
            var3 = _closure1_slot15;
            var3 = var3.bind(var4)(var24);
            _fun0009_ip = 184; continue _fun0009;
case 182:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 7;
            var23 = var26[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.t;
            var3 = var23["1AcTqm"];
case 184:
            _fun0009_ip = 185; continue _fun0009;
case 180:
            if(var21) { _fun0009_ip = 186; continue _fun0009 }
case 187:
            var23 = _closure1_slot14;
            var21 = {};
            var25 = var22 != var18;
            var21['hasRewardDuration'] = var25;
            var21['shouldShowGameProfileLink'] = var24;
            var21 = var23.bind(var4)(var21);
            _fun0009_ip = 188; continue _fun0009;
case 186:
            if(!(var22 == var18)) { _fun0009_ip = 189; continue _fun0009 }
case 190:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 7;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.ztXW8V;
            _fun0009_ip = 191; continue _fun0009;
case 189:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 7;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var22 = var23.u5QXpw;
case 191:
            var21 = var22;
case 188:
            var3 = var21;
case 185:
            var13 = var3;
case 179:
            var3 = {};
            var3['gameTitle'] = var20;
            var3['streamingDurationRequirement'] = var17;
            var3['rewardNameWithArticle'] = var19;
            var3['duration'] = var18;
            var3['targetMinutes'] = var17;
            var3['onGameTitleClick'] = var16;
            var1 = var14.bind(var4)(var13, var3, var15);
case 165:
            _fun0009_ip = 192; continue _fun0009;
case 57:
            var3 = _closure1_slot19;
            var2 = {};
            var2['quest'] = var12;
            var2['taskDetails'] = var11;
            var2['sourceQuestContent'] = var10;
            var2['withoutMarkdown'] = var9;
            var2['popoutTargetElementRef'] = var8;
            var2['onGameSheetOpened'] = var7;
            var2['onGameSheetClosed'] = var6;
            var2['rewardNameWithArticle'] = var5;
            var1 = var3.bind(var4)(var2);
case 192:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var4 = function useQuestsInstructionsToWinReward(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var8 = var6.quest;
            var9 = var6.gameProfileSource;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 14;
            var2 = var10[var2];
            var3 = undefined;
            var11 = var5.bind(var3)(var2);
            var7 = var11.useStateFromStores;
            var2 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var11)(var4, var2);
            var2 = 8;
            var2 = var10[var2];
            var4 = var5.bind(var3)(var2);
            var2 = var4.useThirdPartyTaskDetails;
            var4 = var2.bind(var4)(var8);
            var2 = 10;
            var2 = var10[var2];
            var5 = var5.bind(var3)(var2);
            var2 = var5.getAllApplicationIds;
            var8 = var2.bind(var5)(var8);
            var5 = null;
            var2 = var5 == var8;
            var10 = undefined;
            if(var2) { _fun0010_ip = 193; continue _fun0010 }
case 194:
            var2 = 0;
            var10 = var8[var2];
case 193:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 15;
            var2 = var11[var2];
            var8 = var8.bind(var3)(var2);
            var2 = {};
            var2['applicationId'] = var10;
            var10 = _closure1_slot8;
            var10 = var10.QUEST_INSTRUCTIONS;
            var2['location'] = var10;
            if(!(var5 == var9)) { _fun0010_ip = 195; continue _fun0010 }
case 196:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 16;
            var10 = var12[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.GameProfileSources;
            var9 = var10.QuestHome;
case 195:
            var2['source'] = var9;
            var2 = var8.bind(var3)(var2);
            var2 = _closure1_slot20;
            var1 = {};
            var14 = var1;
            var13 = var6;
            var6 = copyDataProperties(var14, var13);
            var6 = 'currentUser';
            var1[5] = var7;
            var7 = false;
            var6 = 'withoutMarkdown';
            var1[5] = var7;
            var6 = var5 != var4;
            var5 = undefined;
            if(!var6) { _fun0010_ip = 197; continue _fun0010 }
case 198:
            var5 = var4;
case 197:
            var4 = 'thirdPartyTaskDetails';
            var1[3] = var5;
            var4 = 'onGameTitleClick';
            var1[3] = var3;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot21 = var4;
    var1 = function getSimplifiedQuestTaskType(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 10;
            var1 = var1[var6];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isConsoleQuest;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 199; continue _fun0011 }
case 200:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.hasPlayActivityTask;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 199; continue _fun0011 }
case 201:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var7 = var3.bind(var5)(var1);
            var3 = var7.hasStreamOnDesktopTask;
            var1 = {};
            var1['quest'] = var4;
            var1 = var3.bind(var7)(var1);
            if(var1) { _fun0011_ip = 195; continue _fun0011 }
case 202:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.hasWatchVideoOnMobileTasks;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 203; continue _fun0011 }
case 204:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isInGameQuest;
            var1 = var1.bind(var3)(var4);
            var3 = _closure1_slot12;
            if(var1) { _fun0011_ip = 205; continue _fun0011 }
case 206:
            var1 = var3.PLAY;
            _fun0011_ip = 207; continue _fun0011;
case 205:
            var1 = var3.IN_GAME;
case 207:
            _fun0011_ip = 208; continue _fun0011;
case 203:
            var3 = _closure1_slot12;
            var1 = var3.WATCH_VIDEO;
case 208:
            _fun0011_ip = 209; continue _fun0011;
case 195:
            var3 = _closure1_slot12;
            var1 = var3.STREAM;
case 209:
            _fun0011_ip = 210; continue _fun0011;
case 199:
            var2 = _closure1_slot12;
            var1 = var2.PLAY;
case 210:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function canLaunchOnCurrentPlatform(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var6 = arg2;
            var1 = arg1;
            var1 = var1.config;
            var4 = var1.features;
            var2 = var4.includes;
            var1 = _closure1_slot10;
            var1 = var1.MOBILE_ACTIVITY_QUEST;
            var1 = var2.bind(var4)(var1);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0012_ip = 211; continue _fun0012 }
case 212:
            var7 = null;
            var2 = var7 == var6;
            if(var2) { _fun0012_ip = 213; continue _fun0012 }
case 214:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 20;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var8 = var7 == var6;
            var3 = undefined;
            if(var8) { _fun0012_ip = 215; continue _fun0012 }
case 216:
            var6 = var6.embeddedActivityConfig;
            var7 = var7 == var6;
            var3 = undefined;
            if(var7) { _fun0012_ip = 215; continue _fun0012 }
case 217:
            var3 = var6.supported_platforms;
case 215:
            var2 = var4.bind(var5)(var3);
case 213:
            var1 = var2;
case 211:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var12 = 0;
    var5 = var7[var12];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var11 = 1;
    var5 = var7[var11];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var10 = 2;
    var9 = var7[var10];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot5 = var5;
    var9 = 3;
    var5 = var7[var9];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.QuestsExperimentLocations;
    var _closure1_slot8 = var8;
    var8 = var5.ORBS_INTRO_QUEST_ID;
    var _closure1_slot9 = var8;
    var5 = var5.QuestVariants;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PremiumTypes;
    var _closure1_slot11 = var5;
    var5 = {};
    var5['PLAY'] = var12;
    var8 = 'PLAY';
    var5[var12] = var8;
    var5['STREAM'] = var11;
    var8 = 'STREAM';
    var5[var11] = var8;
    var5['WATCH_VIDEO'] = var10;
    var8 = 'WATCH_VIDEO';
    var5[var10] = var8;
    var5['IN_GAME'] = var9;
    var8 = 'IN_GAME';
    var5[var9] = var8;
    var _closure1_slot12 = var5;
    var5 = 25;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/hooks/QuestCopyHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useQuestInstructionTitle(arg1, arg2, arg3, arg4) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var8 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var2 = var3[var1];
            var9 = undefined;
            var6 = var5.bind(var9)(var2);
            var2 = var6.useQuestTaskDetails;
            var2 = var2.bind(var6)(var8);
            var6 = var2.targetMinutes;
            var2 = var3[var1];
            var7 = var5.bind(var9)(var2);
            var2 = var7.useThirdPartyTaskDetails;
            var2 = var2.bind(var7)(var8);
            var1 = var3[var1];
            var10 = var5.bind(var9)(var1);
            var7 = var10.useConnectedConsoleLinkOnClick;
            var1 = {};
            var1['quest'] = var8;
            var11 = arg3;
            var1['questContent'] = var11;
            var11 = arg4;
            var1['sourceQuestContent'] = var11;
            var7 = var7.bind(var10)(var1);
            var13 = 9;
            var1 = var3[var13];
            var10 = var5.bind(var9)(var1);
            var1 = var10.isSponsoredPlayQuest;
            var1 = var1.bind(var10)(var8);
            var11 = 10;
            var3 = var3[var11];
            var5 = var5.bind(var9)(var3);
            var3 = var5.isConsoleQuest;
            var3 = var3.bind(var5)(var8);
            if(!var3) { _fun0013_ip = 218; continue _fun0013 }
case 219:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var10 = var5.bind(var9)(var3);
            var5 = var10.hasPlayOnDesktopTask;
            var3 = {};
            var3['quest'] = var8;
            var3 = var5.bind(var10)(var3);
            if(var3) { _fun0013_ip = 218; continue _fun0013 }
case 220:
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 7;
            var10 = var14[var3];
            var10 = var5.bind(var9)(var10);
            var12 = var10.intl;
            var10 = var12.format;
            var3 = var14[var3];
            var3 = var5.bind(var9)(var3);
            var3 = var3.t;
            var5 = var3.l4S+cQ;
            var3 = {};
            var3['minutes'] = var6;
            var3['onClick'] = var7;
            var14 = var8.config;
            var14 = var14.messages;
            var14 = var14.gameTitle;
            var3['gameTitle'] = var14;
            var3 = var10.bind(var12)(var5, var3);
            return var3;
case 218:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var5 = var5.bind(var9)(var3);
            var3 = var5.isConsoleQuest;
            var5 = var3.bind(var5)(var8);
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            if(var5) { _fun0013_ip = 221; continue _fun0013 }
case 222:
            if(var1) { _fun0013_ip = 223; continue _fun0013 }
case 224:
            var5 = var10[var11];
            var12 = var3.bind(var9)(var5);
            var5 = var12.hasWatchVideoTasks;
            var5 = var5.bind(var12)(var8);
            if(var5) { _fun0013_ip = 225; continue _fun0013 }
case 226:
            var5 = null;
            if(!(var5 == var2)) { _fun0013_ip = 227; continue _fun0013 }
case 228:
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var12 = var12.bind(var9)(var5);
            var5 = var12.hasPlayActivityTask;
            var14 = var5.bind(var12)(var8);
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            if(var14) { _fun0013_ip = 229; continue _fun0013 }
case 230:
            var16 = 7;
            var14 = var5[var16];
            var14 = var12.bind(var9)(var14);
            var14 = var14.t;
            var17 = var14["6zWtV8"];
            var14 = var5[var11];
            var18 = var12.bind(var9)(var14);
            var15 = var18.hasPlayOnDesktopTask;
            var14 = {};
            var14['quest'] = var8;
            var14 = var15.bind(var18)(var14);
            if(!var14) { _fun0013_ip = 231; continue _fun0013 }
case 232:
            var14 = var8.config;
            var18 = var14.features;
            var15 = var18.includes;
            var14 = _closure1_slot10;
            var14 = var14.NON_GAMING_PLAY_QUEST;
            var14 = var15.bind(var18)(var14);
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var16];
            var15 = var18.bind(var9)(var15);
            var15 = var15.t;
            if(var14) { _fun0013_ip = 233; continue _fun0013 }
case 234:
            var14 = var15.wmOh/q;
            _fun0013_ip = 235; continue _fun0013;
case 233:
            var14 = var15.fe7Xec;
case 235:
            var17 = var14;
case 231:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var16];
            var14 = var15.bind(var9)(var14);
            var16 = var14.intl;
            var15 = var16.format;
            var14 = {};
            var14['minutes'] = var6;
            var18 = var8.config;
            var18 = var18.messages;
            var18 = var18.gameTitle;
            var14['gameTitle'] = var18;
            var14 = var15.bind(var16)(var17, var14);
            return var14;
case 229:
            var5 = var5[var13];
            var12 = var12.bind(var9)(var5);
            var5 = var12.isPlayAnyActivityQuest;
            var5 = var5.bind(var12)(var8);
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 7;
            var14 = var16[var12];
            var14 = var13.bind(var9)(var14);
            var15 = var14.intl;
            var14 = var15.format;
            var12 = var16[var12];
            var12 = var13.bind(var9)(var12);
            var12 = var12.t;
            if(var5) { _fun0013_ip = 236; continue _fun0013 }
case 237:
            var13 = var12.xHXCyf;
            var5 = {};
            var5['minutes'] = var6;
            var16 = var8.config;
            var16 = var16.messages;
            var16 = var16.gameTitle;
            var5['activityName'] = var16;
            var5 = var14.bind(var15)(var13, var5);
            _fun0013_ip = 238; continue _fun0013;
case 236:
            var13 = var12["1NaRSs"];
            var12 = {};
            var12['minutes'] = var6;
            var5 = var14.bind(var15)(var13, var12);
case 238:
            return var5;
case 227:
            var2 = var2.title;
            return var2;
case 225:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var11];
            var11 = var5.bind(var9)(var2);
            var5 = var11.getDefaultWatchVideoTask;
            var2 = var8.config;
            var5 = var5.bind(var11)(var2);
            var2 = null;
            var11 = var2 == var5;
            var13 = undefined;
            if(var11) { _fun0013_ip = 239; continue _fun0013 }
case 91:
            var5 = var5.messages;
            var13 = var5.videoTitle;
case 239:
            if(!(var2 != var13)) { _fun0013_ip = 240; continue _fun0013 }
case 241:
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 7;
            var11 = var14[var2];
            var11 = var5.bind(var9)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var2 = var14[var2];
            var2 = var5.bind(var9)(var2);
            var2 = var2.t;
            var5 = var2["9m9Mna"];
            var2 = {};
            var2['videoTitle'] = var13;
            var2 = var11.bind(var12)(var5, var2);
            _fun0013_ip = 242; continue _fun0013;
case 240:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 7;
            var5 = var13[var4];
            var5 = var12.bind(var9)(var5);
            var11 = var5.intl;
            var5 = var11.string;
            var4 = var13[var4];
            var4 = var12.bind(var9)(var4);
            var4 = var4.t;
            var4 = var4.o+e9yh;
            var2 = var5.bind(var11)(var4);
case 242:
            return var2;
case 223:
            var2 = 7;
            var4 = var10[var2];
            var4 = var3.bind(var9)(var4);
            var11 = var4.intl;
            var5 = var11.format;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            var4 = var2.Hu8SKW;
            var2 = {};
            var2['targetMinutes'] = var6;
            var2 = var5.bind(var11)(var4, var2);
            return var2;
case 221:
            var2 = 7;
            var4 = var10[var2];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            if(var1) { _fun0013_ip = 243; continue _fun0013 }
case 244:
            var3 = var2.Ajlcd7;
            var1 = {};
            var1['minutes'] = var6;
            var1['onClick'] = var7;
            var8 = var8.config;
            var8 = var8.messages;
            var8 = var8.gameTitle;
            var1['gameTitle'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0013_ip = 245; continue _fun0013;
case 243:
            var3 = var2.gbtCpW;
            var2 = {};
            var2['onClick'] = var7;
            var2['minutes'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 245:
            return var1;
        }
    };
    var3['useQuestInstructionTitle'] = var5;
    var5 = function getQuestsInstructionsToWinReward(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot20;
            var2 = {};
            var7 = var2;
            var6 = var4;
            var5 = copyDataProperties(var7, var6);
            var4 = var4.currentUser;
            var5 = null;
            if(!(var5 == var4)) { _fun0014_ip = 246; continue _fun0014 }
case 247:
            var5 = _closure1_slot7;
            var1 = var5.getCurrentUser;
            var4 = var1.bind(var5)();
case 246:
            var1 = 'currentUser';
            var2[0] = var4;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['getQuestsInstructionsToWinReward'] = var5;
    var3['useQuestsInstructionsToWinReward'] = var4;
    var4 = function useQuestDescription(arg1, arg2, arg3, arg4, arg5) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var8 = arg1;
            var3 = _closure1_slot21;
            var1 = {};
            var1['quest'] = var8;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var9 = 8;
            var4 = var4[var9];
            var7 = undefined;
            var5 = var5.bind(var7)(var4);
            var4 = var5.useQuestTaskDetails;
            var4 = var4.bind(var5)(var8);
            var1['taskDetails'] = var4;
            var4 = arg3;
            var1['location'] = var4;
            var4 = arg2;
            var1['sourceQuestContent'] = var4;
            var4 = arg5;
            var1['popoutTargetElementRef'] = var4;
            var4 = arg4;
            var1['gameProfileSource'] = var4;
            var1 = var3.bind(var7)(var1);
            var5 = var8.userStatus;
            var4 = null;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0015_ip = 248; continue _fun0015 }
case 249:
            var3 = var5.claimedAt;
case 248:
            var3 = var4 != var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var6 = var6.bind(var7)(var5);
            var5 = var6.useQuestFormattedDate;
            var8 = var8.userStatus;
            var9 = var4 == var8;
            var4 = undefined;
            if(var9) { _fun0015_ip = 250; continue _fun0015 }
case 251:
            var4 = var8.claimedAt;
case 250:
            var6 = var5.bind(var6)(var4);
            if(!var3) { _fun0015_ip = 29; continue _fun0015 }
case 252:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 7;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.lOVr0O;
            var2 = {};
            var2['claimDate'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 29:
            return var1;
        }
    };
    var3['useQuestDescription'] = var4;
    var4 = function useQuestBarSubtitle(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var11 = var1.quest;
            var20 = var1.isExpanded;
            var25 = var1.sourceQuestContent;
            var12 = var1.activeScreen;
            var24 = var1.popoutTargetElementRef;
            var22 = var1.onGameSheetOpened;
            var7 = var1.onGameSheetClosed;
            var16 = var1.hasAlreadyLinked;
            var10 = var1.onClickGameTitle;
            var1 = var11.config;
            var1 = var1.rewardsConfig;
            var9 = var1.rewardsExpireAt;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 8;
            var3 = var8[var2];
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var3 = var5.useQuestFormattedDate;
            var5 = var3.bind(var5)(var9);
            var3 = var8[var2];
            var9 = var4.bind(var6)(var3);
            var3 = var9.useQuestTaskDetails;
            var13 = var3.bind(var9)(var11);
            var3 = var8[var2];
            var9 = var4.bind(var6)(var3);
            var3 = var9.useThirdPartyTaskDetails;
            var23 = var3.bind(var9)(var11);
            var3 = 14;
            var3 = var8[var3];
            var9 = var4.bind(var6)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var8.bind(var9)(var4, var3);
            var4 = var11.userStatus;
            var9 = null;
            var8 = var9 == var4;
            var3 = undefined;
            if(var8) { _fun0016_ip = 253; continue _fun0016 }
case 254:
            var3 = var4.completedAt;
case 253:
            var17 = var9 != var3;
            var4 = var11.userStatus;
            var8 = var9 == var4;
            var3 = undefined;
            if(var8) { _fun0016_ip = 255; continue _fun0016 }
case 29:
            var3 = var4.enrolledAt;
case 255:
            var8 = var9 != var3;
            var3 = var13.percentComplete;
            var19 = 0;
            var4 = var3 > var19;
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = var21[var2];
            var3 = var15.bind(var6)(var2);
            var2 = var3.useIsQuestProgressing;
            var18 = var2.bind(var3)(var11);
            var3 = _closure1_slot21;
            var2 = {};
            var2['quest'] = var11;
            var26 = _closure1_slot8;
            var26 = var26.QUESTS_BAR;
            var2['location'] = var26;
            var2['taskDetails'] = var13;
            var2['sourceQuestContent'] = var25;
            var2['popoutTargetElementRef'] = var24;
            var2['onGameSheetOpened'] = var22;
            var2['onGameSheetClosed'] = var7;
            var7 = 16;
            var7 = var21[var7];
            var7 = var15.bind(var6)(var7);
            var7 = var7.GameProfileSources;
            var7 = var7.QuestBar;
            var2['gameProfileSource'] = var7;
            var3 = var3.bind(var6)(var2);
            if(!(var9 == var23)) { _fun0016_ip = 256; continue _fun0016 }
case 257:
            var15 = var13.percentComplete;
            _fun0016_ip = 258; continue _fun0016;
case 256:
            var15 = var23.percentComplete;
case 258:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            if(var17) { _fun0016_ip = 259; continue _fun0016 }
case 260:
            var21 = 10;
            var17 = var7[var21];
            var22 = var2.bind(var6)(var17);
            var17 = var22.hasAchievementInGameTask;
            var17 = var17.bind(var22)(var11);
            if(!var17) { _fun0016_ip = 261; continue _fun0016 }
case 262:
            var17 = false;
            if(!(var17 !== var16)) { _fun0016_ip = 263; continue _fun0016 }
case 261:
            var22 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var21];
            var17 = var22.bind(var6)(var17);
            if(var20) { _fun0016_ip = 90; continue _fun0016 }
case 264:
            var20 = var17.hasWatchVideoTasks;
            var20 = var20.bind(var17)(var11);
            if(var20) { _fun0016_ip = 84; continue _fun0016 }
case 265:
            if(!(!(var15 > var19))) { _fun0016_ip = 266; continue _fun0016 }
case 267:
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var15 = 7;
            var19 = var24[var15];
            var19 = var22.bind(var6)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var15 = var24[var15];
            var15 = var22.bind(var6)(var15);
            var15 = var15.t;
            var15 = var15.S6UUc5;
            var15 = var19.bind(var20)(var15);
            _fun0016_ip = 268; continue _fun0016;
case 266:
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var21];
            var20 = var20.bind(var6)(var19);
            var19 = var20.hasAchievementInGameTask;
            var19 = var19.bind(var20)(var11);
            if(!var19) { _fun0016_ip = 269; continue _fun0016 }
case 270:
            var19 = true;
            if(!(var19 !== var16)) { _fun0016_ip = 271; continue _fun0016 }
case 269:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            if(var18) { _fun0016_ip = 272; continue _fun0016 }
case 273:
            var18 = 7;
            var19 = var21[var18];
            var19 = var20.bind(var6)(var19);
            var22 = var19.intl;
            var19 = var22.string;
            var18 = var21[var18];
            var18 = var20.bind(var6)(var18);
            var18 = var18.t;
            var18 = var18.mOrpXG;
            var18 = var19.bind(var22)(var18);
            _fun0016_ip = 274; continue _fun0016;
case 272:
            var19 = 18;
            var19 = var21[var19];
            var21 = var20.bind(var6)(var19);
            var20 = var21.getContextualEntrypointHeading;
            var19 = {};
            var19['quest'] = var11;
            var19['taskDetails'] = var13;
            var24 = var9 != var23;
            var22 = undefined;
            if(!var24) { _fun0016_ip = 237; continue _fun0016 }
case 275:
            var22 = var23;
case 237:
            var19['thirdPartyTaskDetails'] = var22;
            var18 = var20.bind(var21)(var19);
case 274:
            _fun0016_ip = 227; continue _fun0016;
case 271:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 7;
            var20 = var23[var19];
            var20 = var22.bind(var6)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var6)(var19);
            var19 = var19.t;
            var19 = var19.JkyCIO;
            var18 = var20.bind(var21)(var19);
case 227:
            var15 = var18;
case 268:
            _fun0016_ip = 276; continue _fun0016;
case 84:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 7;
            var19 = var22[var18];
            var19 = var21.bind(var6)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var6)(var18);
            var18 = var18.t;
            var18 = var18.o+e9yh;
            var15 = var19.bind(var20)(var18);
case 276:
            return var15;
case 90:
            var15 = var17.hasAchievementInGameTask;
            var15 = var15.bind(var17)(var11);
            if(!var15) { _fun0016_ip = 277; continue _fun0016 }
case 95:
            var15 = true;
            if(!(var15 === var16)) { _fun0016_ip = 277; continue _fun0016 }
case 278:
            if(!(var9 == var10)) { _fun0016_ip = 279; continue _fun0016 }
case 277:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 17;
            var9 = var16[var9];
            var9 = var15.bind(var6)(var9);
            var9 = var9.TaskPlatformScreen;
            var9 = var9.SELECT;
            if(!(var12 !== var9)) { _fun0016_ip = 280; continue _fun0016 }
case 281:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 9;
            var9 = var15[var9];
            var12 = var12.bind(var6)(var9);
            var9 = var12.isSponsoredPlayQuest;
            var9 = var9.bind(var12)(var11);
            if(!var9) { _fun0016_ip = 280; continue _fun0016 }
case 100:
            if(!var8) { _fun0016_ip = 280; continue _fun0016 }
case 282:
            if(var4) { _fun0016_ip = 280; continue _fun0016 }
case 283:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 11;
            var4 = var15[var4];
            var12 = var8.bind(var6)(var4);
            var9 = var12.getDefaultRewardNameWithArticle;
            var4 = var11.config;
            var14 = var9.bind(var12)(var4, var14);
            var4 = 7;
            var9 = var15[var4];
            var9 = var8.bind(var6)(var9);
            var12 = var9.intl;
            var9 = var12.format;
            var4 = var15[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var8 = var4["1votF6"];
            var4 = {};
            var4['rewardNameWithArticle'] = var14;
            var13 = var13.targetMinutes;
            var4['targetMinutes'] = var13;
            var4 = var9.bind(var12)(var8, var4);
            return var4;
case 280:
            return var3;
case 279:
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 7;
            var8 = var12[var3];
            var8 = var4.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var3 = var12[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.X8hBDz;
            var3 = {};
            var11 = var11.config;
            var11 = var11.messages;
            var11 = var11.gameTitle;
            var3['gameTitle'] = var11;
            var3['onClickGameTitle'] = var10;
            var3 = var8.bind(var9)(var4, var3);
            return var3;
case 263:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 7;
            var3 = var9[var1];
            var3 = var8.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var9[var1];
            var1 = var8.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.mAdqf7;
            var1 = var3.bind(var4)(var1);
            return var1;
case 259:
            var1 = 7;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.APddvF;
            var1 = {};
            var1['expirationDate'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useQuestBarSubtitle'] = var4;
    var4 = function useQuestBarTitle(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var7 = arg1;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 14;
            var2 = var9[var2];
            var5 = undefined;
            var6 = var8.bind(var5)(var2);
            var4 = var6.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var11 = var4.bind(var6)(var3, var2);
            var4 = 8;
            var2 = var9[var4];
            var3 = var8.bind(var5)(var2);
            var2 = var3.useQuestTaskDetails;
            var6 = var2.bind(var3)(var7);
            var2 = var9[var4];
            var3 = var8.bind(var5)(var2);
            var2 = var3.useTaskPlatformScreen;
            var10 = var2.bind(var3)(var7, var6);
            var3 = _closure1_slot4;
            var2 = 1;
            var3 = var3.bind(var5)(var10, var2);
            var2 = 0;
            var3 = var3[var2];
            var4 = var9[var4];
            var8 = var8.bind(var5)(var4);
            var4 = var8.useThirdPartyTaskDetails;
            var4 = var4.bind(var8)(var7);
            var9 = var7.userStatus;
            var12 = null;
            var10 = var12 == var9;
            var8 = undefined;
            if(var10) { _fun0017_ip = 284; continue _fun0017 }
case 219:
            var8 = var9.completedAt;
case 284:
            var8 = var12 != var8;
            if(!(var12 == var4)) { _fun0017_ip = 48; continue _fun0017 }
case 285:
            var9 = var6.percentComplete;
            _fun0017_ip = 24; continue _fun0017;
case 48:
            var9 = var4.percentComplete;
case 24:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            if(var8) { _fun0017_ip = 286; continue _fun0017 }
case 287:
            var8 = 10;
            var10 = var6[var8];
            var13 = var4.bind(var5)(var10);
            var10 = var13.hasAchievementInGameTask;
            var10 = var10.bind(var13)(var7);
            if(!var10) { _fun0017_ip = 288; continue _fun0017 }
case 289:
            var13 = false;
            var10 = arg2;
            if(!(var13 !== var10)) { _fun0017_ip = 290; continue _fun0017 }
case 288:
            var13 = var7.userStatus;
            var14 = var12 == var13;
            var10 = undefined;
            if(var14) { _fun0017_ip = 291; continue _fun0017 }
case 54:
            var10 = var13.enrolledAt;
case 291:
            if(!(var12 != var10)) { _fun0017_ip = 292; continue _fun0017 }
case 198:
            if(!(!(var9 > var2))) { _fun0017_ip = 293; continue _fun0017 }
case 292:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 17;
            var2 = var12[var2];
            var2 = var10.bind(var5)(var2);
            var2 = var2.TaskPlatformScreen;
            var2 = var2.SELECT;
            if(!(var3 !== var2)) { _fun0017_ip = 294; continue _fun0017 }
case 39:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isConsoleQuest;
            var2 = var2.bind(var3)(var7);
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 7;
            var7 = var12[var3];
            var7 = var10.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var12[var3];
            var3 = var10.bind(var5)(var3);
            var3 = var3.t;
            if(var2) { _fun0017_ip = 295; continue _fun0017 }
case 256:
            var2 = var3["7e5k7L"];
            var2 = var7.bind(var8)(var2);
            _fun0017_ip = 296; continue _fun0017;
case 295:
            var3 = var3.mOrpXG;
            var2 = var7.bind(var8)(var3);
case 296:
            _fun0017_ip = 297; continue _fun0017;
case 294:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 7;
            var7 = var12[var3];
            var7 = var10.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var3 = var12[var3];
            var3 = var10.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.EMrUHQ;
            var2 = var7.bind(var8)(var3);
case 297:
            return var2;
case 293:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 19;
            var2 = var10[var2];
            var8 = var3.bind(var5)(var2);
            var7 = var8.formatPercent;
            var2 = {};
            var12 = 'floor';
            var2['roundingMode'] = var12;
            var9 = var7.bind(var8)(var11, var9, var2);
            var2 = 7;
            var7 = var10[var2];
            var7 = var3.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.lVZaXD;
            var2 = {};
            var2['percent'] = var9;
            var2 = var7.bind(var8)(var3, var2);
            return var2;
case 290:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 7;
            var2 = var8[var1];
            var2 = var7.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.s9r2a1;
            var1 = var2.bind(var3)(var1);
            return var1;
case 286:
            var1 = 7;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.ij5E/5;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useQuestBarTitle'] = var4;
    var4 = function usePrimaryCtaCopy(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var8 = var1.quest;
            var3 = var1.application;
            var1 = var1.shortText;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0018_ip = 298; continue _fun0018 }
case 299:
            var1 = false;
case 298:
            var2 = function useSimplifiedQuestTaskType(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot5;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var3 = _closure1_slot22;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = var2.bind(var5)(var8);
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var6 = var6.bind(var5)(var2);
            var2 = var6.useQuestTaskDetails;
            var6 = var2.bind(var6)(var8);
            var2 = _closure1_slot12;
            var2 = var2.PLAY;
            if(!(var2 !== var4)) { _fun0018_ip = 300; continue _fun0018 }
case 301:
            var2 = _closure1_slot12;
            var2 = var2.STREAM;
            if(!(var2 !== var4)) { _fun0018_ip = 53; continue _fun0018 }
case 302:
            var2 = _closure1_slot12;
            var2 = var2.WATCH_VIDEO;
            if(!(var2 !== var4)) { _fun0018_ip = 303; continue _fun0018 }
case 304:
            var2 = _closure1_slot12;
            var2 = var2.IN_GAME;
            if(!(var2 !== var4)) { _fun0018_ip = 305; continue _fun0018 }
case 306:
            return var5;
case 305:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.canLaunchActivity;
            var2 = var2.bind(var4)(var8);
            if(!var2) { _fun0018_ip = 307; continue _fun0018 }
case 308:
            var2 = _closure1_slot23;
            var2 = var2.bind(var5)(var8, var3);
            if(var2) { _fun0018_ip = 30; continue _fun0018 }
case 307:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 7;
            var4 = var11[var2];
            var4 = var10.bind(var5)(var4);
            var9 = var4.intl;
            var4 = var9.string;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.l7E81v;
            var2 = var4.bind(var9)(var2);
            _fun0018_ip = 309; continue _fun0018;
case 30:
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var12 = 7;
            var4 = var4[var12];
            var4 = var9.bind(var5)(var4);
            var10 = var4.intl;
            var9 = var10.string;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var12];
            var4 = var11.bind(var5)(var4);
            var11 = var4.t;
            if(var1) { _fun0018_ip = 310; continue _fun0018 }
case 21:
            var4 = var11.hRIVy+;
            _fun0018_ip = 311; continue _fun0018;
case 310:
            var4 = var11.CkUzLd;
case 311:
            var2 = var9.bind(var10)(var4);
case 309:
            return var2;
case 303:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 21;
            var2 = var9[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.getVideoQuestWatchCtaText;
            var2 = var2.bind(var4)(var6);
            return var2;
case 53:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 7;
            var4 = var10[var2];
            var4 = var9.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.l7E81v;
            var2 = var4.bind(var6)(var2);
            return var2;
case 300:
            var2 = _closure1_slot23;
            var2 = var2.bind(var5)(var8, var3);
            if(!var2) { _fun0018_ip = 312; continue _fun0018 }
case 313:
            var2 = var8.config;
            var4 = var2.features;
            var3 = var4.includes;
            var2 = _closure1_slot10;
            var2 = var2.CLOUD_GAMING_ACTIVITY;
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            if(var2) { _fun0018_ip = 314; continue _fun0018 }
case 315:
            var2 = 9;
            var2 = var6[var2];
            var3 = var4.bind(var5)(var2);
            var2 = var3.canLaunchActivity;
            var2 = var2.bind(var3)(var8);
            if(var2) { _fun0018_ip = 316; continue _fun0018 }
case 312:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 7;
            var3 = var10[var2];
            var3 = var9.bind(var5)(var3);
            var8 = var3.intl;
            var3 = var8.string;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.l7E81v;
            var2 = var3.bind(var8)(var2);
            return var2;
case 316:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 7;
            var2 = var2[var9];
            var2 = var3.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var5)(var7);
            var7 = var7.t;
            if(var1) { _fun0018_ip = 317; continue _fun0018 }
case 318:
            var1 = var7.Ie9++s;
            _fun0018_ip = 286; continue _fun0018;
case 317:
            var1 = var7.E4kW5O;
case 286:
            var1 = var2.bind(var3)(var1);
            return var1;
case 314:
            var1 = 7;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1["+qoymD"];
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['usePrimaryCtaCopy'] = var4;
    var4 = function usePremiumExtendableCopy(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var4 = new Array(1);
            var4[0] = var7;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isCollectibleQuestRewardPremiumExtendable;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var2, var4);
            var5 = var6.useMemo;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var5.bind(var6)(var1, var2);
            var1 = null;
            if(!var4) { _fun0019_ip = 319; continue _fun0019 }
case 320:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 7;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            if(var2) { _fun0019_ip = 321; continue _fun0019 }
case 322:
            var2 = var3.GYGb3A;
            var2 = var4.bind(var5)(var2);
            _fun0019_ip = 323; continue _fun0019;
case 321:
            var3 = var3.hh7Rb/;
            var2 = var4.bind(var5)(var3);
case 323:
            var1 = var2;
case 319:
            return var1;
        }
    };
    var3['usePremiumExtendableCopy'] = var4;
    var4 = function getRewardCodeRedemptionInstructions(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var2 = var1.quest;
            var11 = var1.rewardCode;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 11;
            var3 = var1[var9];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var4 = var6.isTieredRewardCodeQuest;
            var3 = {};
            var3['quest'] = var2;
            var7 = var4.bind(var6)(var3);
            var4 = null;
            var6 = var4 == var11;
            var3 = undefined;
            if(var6) { _fun0020_ip = 324; continue _fun0020 }
case 9:
            var3 = var11.platform;
case 324:
            if(!(var4 == var3)) { _fun0020_ip = 215; continue _fun0020 }
case 201:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 17;
            var6 = var10[var6];
            var6 = var8.bind(var1)(var6);
            var6 = var6.QuestRewardCodePlatforms;
            var3 = var6.CROSS_PLATFORM;
case 215:
            var6 = null;
            if(!var7) { _fun0020_ip = 203; continue _fun0020 }
case 213:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var9 = var8.bind(var1)(var7);
            var8 = var9.getRewardCodeQuestReward;
            var7 = {};
            var7['quest'] = var2;
            var12 = var4 == var11;
            var10 = undefined;
            if(var12) { _fun0020_ip = 325; continue _fun0020 }
case 326:
            var10 = var11.tier;
case 325:
            if(!(var4 == var10)) { _fun0020_ip = 327; continue _fun0020 }
case 56:
            var12 = var2.userStatus;
            var13 = var4 == var12;
            var11 = undefined;
            if(var13) { _fun0020_ip = 328; continue _fun0020 }
case 329:
            var11 = var12.claimedTier;
case 328:
            var10 = var11;
case 327:
            var7['idx'] = var10;
            var6 = var8.bind(var9)(var7);
case 203:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 18;
            var5 = var8[var5];
            var7 = var7.bind(var1)(var5);
            var5 = var7.getDefaultReward;
            var2 = var2.config;
            var5 = var5.bind(var7)(var2);
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0020_ip = 330; continue _fun0020 }
case 331:
            var6 = var6.messages;
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0020_ip = 330; continue _fun0020 }
case 332:
            var2 = var6.redemptionInstructionsByPlatform;
case 330:
            if(!(var4 == var2)) { _fun0020_ip = 333; continue _fun0020 }
case 334:
            var5 = var5.messages;
            var2 = var5.redemptionInstructionsByPlatform;
case 333:
            var4 = var4 != var3;
            var1 = undefined;
            if(!var4) { _fun0020_ip = 335; continue _fun0020 }
case 336:
            var1 = var2[var3];
case 335:
            return var1;
        }
    };
    var3['getRewardCodeRedemptionInstructions'] = var4;
    var2 = function useModalCtaConfig(arg1) {
        var2 = arg1;
        var3 = var2.quest;
        var _closure2_slot0 = var3;
        var4 = var2.questContent;
        var _closure2_slot1 = var4;
        var4 = var2.preCtaClick;
        var _closure2_slot2 = var4;
        var4 = var2.impressionId;
        var _closure2_slot3 = var4;
        var2 = var2.sourceQuestContent;
        var _closure2_slot4 = var2;
        var2 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0021_ip = 323; continue _fun0021 }
case 337:
                        var3 = _closure2_slot2;
                        var2 = null;
                        var4 = var2 == var3;
                        var3 = undefined;
                        var2 = undefined;
                        if(var4) { _fun0021_ip = 338; continue _fun0021 }
case 339:
                        var4 = _closure2_slot2;
                        var2 = var4.bind(var3)();
case 338:
                        SaveGenerator(address=42);
case 340:
                        return var2;
case 3:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0021_ip = 341; continue _fun0021 }
case 6:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var4 = 22;
                        var4 = var11[var4];
                        var7 = var10.bind(var3)(var4);
                        var6 = var7.openGameLinkDirectly;
                        var5 = _closure2_slot0;
                        var4 = {};
                        var9 = _closure2_slot1;
                        var4['content'] = var9;
                        var9 = 23;
                        var9 = var11[var9];
                        var9 = var10.bind(var3)(var9);
                        var9 = var9.QuestContentCTA;
                        var9 = var9.OPEN_GAME_LINK;
                        var4['ctaContent'] = var9;
                        var9 = _closure2_slot3;
                        var4['impressionId'] = var9;
                        var8 = _closure2_slot4;
                        var4['sourceQuestContent'] = var8;
                        var4 = var6.bind(var7)(var5, var4);
                        return var3;
case 341:
                        return var2;
case 323:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var7 = undefined;
        var4 = var2.bind(var7)();
        var8 = _closure1_slot5;
        var6 = var8.useMemo;
        var2 = new Array(1);
        var2[0] = var3;
        var1 = function() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var1 = _closure2_slot0;
                var1 = var1.config;
                var4 = var1.ctaConfig;
                var2 = null;
                var5 = var2 == var4;
                var8 = undefined;
                var1 = undefined;
                if(var5) { _fun0022_ip = 338; continue _fun0022 }
case 342:
                var1 = var4.subtitle;
case 338:
                if(!(var2 == var1)) { _fun0022_ip = 295; continue _fun0022 }
case 200:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var2 = var6[var2];
                var6 = var5.bind(var8)(var2);
                var5 = var6.hasAchievementInGameTask;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                if(var2) { _fun0022_ip = 343; continue _fun0022 }
case 344:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 9;
                var2 = var9[var6];
                var10 = var7.bind(var8)(var2);
                var5 = var10.getQuestType;
                var2 = _closure2_slot0;
                var2 = var2.config;
                var5 = var5.bind(var10)(var2);
                var2 = 24;
                var2 = var9[var2];
                var2 = var7.bind(var8)(var2);
                var2 = var2.QuestType;
                var2 = var2.GAMEPLAY;
                if(!(var5 === var2)) { _fun0022_ip = 34; continue _fun0022 }
case 325:
                var2 = _closure2_slot0;
                var2 = var2.config;
                var7 = var2.features;
                var5 = var7.includes;
                var2 = _closure1_slot10;
                var2 = var2.NON_GAMING_PLAY_QUEST;
                var2 = var5.bind(var7)(var2);
                if(var2) { _fun0022_ip = 34; continue _fun0022 }
case 345:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var6 = var5.bind(var8)(var2);
                var5 = var6.isSponsoredPlayQuest;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                if(var2) { _fun0022_ip = 34; continue _fun0022 }
case 346:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 7;
                var5 = var9[var2];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var9[var2];
                var2 = var7.bind(var8)(var2);
                var2 = var2.t;
                var2 = var2.wirwN+;
                var2 = var5.bind(var6)(var2);
                _fun0022_ip = 347; continue _fun0022;
case 34:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 7;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.y8Xf3k;
                var2 = var5.bind(var6)(var4);
case 347:
                _fun0022_ip = 348; continue _fun0022;
case 343:
                var3 = _closure2_slot0;
                var3 = var3.config;
                var3 = var3.taskConfigV2;
                var3 = var3.tasks;
                var3 = var3.ACHIEVEMENT_IN_GAME;
                var3 = var3.messages;
                var2 = var3.taskTitle;
case 348:
                var1 = var2;
case 295:
                return var1;
            }
        };
        var2 = var6.bind(var8)(var1, var2);
        var1 = {};
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 18;
        var5 = var8[var5];
        var6 = var6.bind(var7)(var5);
        var5 = var6.getExternalCtaLabel;
        var5 = var5.bind(var6)(var3);
        var1['ctaText'] = var5;
        var5 = 'secondary';
        var1['ctaVariant'] = var5;
        var1['onClickCta'] = var4;
        var3 = var3.config;
        var3 = var3.messages;
        var3 = var3.gameTitle;
        var1['title'] = var3;
        var1['subtitle'] = var2;
        var2 = 'end';
        var1['ctaIconPosition'] = var2;
        return var1;
    };
    var3['useModalCtaConfig'] = var2;
    return var1;
})();