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
                    if(!var11) { _fun0008_ip = 43; continue _fun0008 }
case 51:
                    var4 = var10[var9];
case 43:
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
            var16 = var1.thirdPartyTaskDetails;
            var10 = var1.sourceQuestContent;
            var9 = var1.withoutMarkdown;
            var23 = var1.currentUser;
            var8 = var1.popoutTargetElementRef;
            var7 = var1.onGameSheetOpened;
            var6 = var1.onGameSheetClosed;
            var3 = var1.onGameTitleClick;
            var13 = var1.needsToConnect;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 13;
            var14 = var1[var4];
            var4 = undefined;
            var17 = var5.bind(var4)(var14);
            var15 = var17.isPremium;
            var14 = _closure1_slot11;
            var14 = var14.TIER_2;
            var15 = var15.bind(var17)(var23, var14);
            var22 = 11;
            var14 = var1[var22];
            var18 = var5.bind(var4)(var14);
            var17 = var18.getCollectibleQuestRewardDuration;
            var14 = var12.config;
            var14 = var17.bind(var18)(var14);
            var21 = 10;
            var1 = var1[var21];
            var5 = var5.bind(var4)(var1);
            var1 = var5.isConsoleQuest;
            var1 = var1.bind(var5)(var12);
            if(!var1) { _fun0009_ip = 55; continue _fun0009 }
case 56:
            var17 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var21];
            var17 = var17.bind(var4)(var5);
            var5 = var17.shouldUsePlayOnDesktopTask;
            var1 = var5.bind(var17)(var12);
case 55:
            var19 = _closure1_slot0;
            var5 = _closure1_slot2;
            var17 = 9;
            var18 = var5[var17];
            var20 = var19.bind(var4)(var18);
            var18 = var20.isSponsoredPlayQuest;
            var18 = var18.bind(var20)(var12);
            var5 = var5[var22];
            var20 = var19.bind(var4)(var5);
            var19 = var20.getDefaultRewardNameWithArticle;
            var5 = var12.config;
            var5 = var19.bind(var20)(var5, var23);
            if(var18) { _fun0009_ip = 57; continue _fun0009 }
case 32:
            if(var1) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var18 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var18 = var18.bind(var4)(var1);
            var1 = var18.isConsoleQuest;
            var1 = var1.bind(var18)(var12);
            if(var1) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var18 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var18 = var18.bind(var4)(var1);
            var1 = var18.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var18)(var12);
            if(var1) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var18 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var22];
            var19 = var18.bind(var4)(var1);
            var18 = var19.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var12;
            var1 = var18.bind(var19)(var1);
            if(var1) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var18 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var18 = var18.bind(var4)(var1);
            var1 = var18.hasWatchVideoTasks;
            var1 = var1.bind(var18)(var12);
            if(var1) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var18 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var18 = var18.bind(var4)(var1);
            var1 = var18.hasPlayActivityTask;
            var1 = var1.bind(var18)(var12);
            if(var1) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var18 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var18 = var18.bind(var4)(var1);
            var1 = var18.hasAchievementInGameTask;
            var1 = var1.bind(var18)(var12);
            if(!var1) { _fun0009_ip = 70; continue _fun0009 }
case 71:
            var28 = null;
            if(!(var28 == var16)) { _fun0009_ip = 72; continue _fun0009 }
case 70:
            var29 = null;
            if(!(var29 == var16)) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var19 = {};
            var19['quest'] = var12;
            var19['taskDetails'] = var11;
            var19['withoutMarkdown'] = var9;
            var19['hasNitro'] = var15;
            var19['collectibleRewardDuration'] = var14;
            var19['onGameTitleClick'] = var3;
            var19['rewardNameWithArticle'] = var5;
            var1 = var19.quest;
            var18 = var19.taskDetails;
            var20 = var19.withoutMarkdown;
            var31 = var19.hasNitro;
            var25 = var19.collectibleRewardDuration;
            var23 = var19.onGameTitleClick;
            var24 = var19.rewardNameWithArticle;
            var26 = var18.targetMinutes;
            var18 = var1.config;
            var18 = var18.messages;
            var27 = var18.gameTitle;
            var30 = _closure1_slot0;
            var19 = _closure1_slot2;
            var18 = var19[var22];
            var33 = var30.bind(var4)(var18);
            var32 = var33.isCollectibleQuestRewardPremiumExtendable;
            var18 = var1.config;
            var18 = var32.bind(var33)(var18);
            var19 = var19[var22];
            var30 = var30.bind(var4)(var19);
            var19 = var30.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var1 = var1.config;
            var1 = var19.bind(var30)(var1);
            var30 = var29 != var23;
            var19 = _closure1_slot13;
            if(!var31) { _fun0009_ip = 75; continue _fun0009 }
case 76:
            if(var18) { _fun0009_ip = 77; continue _fun0009 }
case 75:
            if(var18) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            if(!(var29 == var25)) { _fun0009_ip = 78; continue _fun0009 }
case 80:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var18 = 7;
            var18 = var32[var18];
            var18 = var31.bind(var4)(var18);
            var31 = var18.t;
            if(var30) { _fun0009_ip = 81; continue _fun0009 }
case 82:
            var18 = var31.hkJ+Gs;
            _fun0009_ip = 83; continue _fun0009;
case 81:
            var18 = var31.ER9rII;
case 83:
            _fun0009_ip = 84; continue _fun0009;
case 78:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var31 = 7;
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var32 = var31.t;
            if(var30) { _fun0009_ip = 85; continue _fun0009 }
case 86:
            var31 = var32.BLyDvO;
            _fun0009_ip = 87; continue _fun0009;
case 85:
            var31 = var32.Cko4a4;
case 87:
            var18 = var31;
case 84:
            _fun0009_ip = 88; continue _fun0009;
case 77:
            if(var1) { _fun0009_ip = 89; continue _fun0009 }
case 90:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var1 = 7;
            var1 = var32[var1];
            var1 = var31.bind(var4)(var1);
            var31 = var1.t;
            if(var30) { _fun0009_ip = 91; continue _fun0009 }
case 92:
            var1 = var31.smG9ql;
            _fun0009_ip = 93; continue _fun0009;
case 91:
            var1 = var31.eEuma3;
case 93:
            _fun0009_ip = 94; continue _fun0009;
case 89:
            if(!(var29 == var25)) { _fun0009_ip = 95; continue _fun0009 }
case 96:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var29 = 7;
            var29 = var32[var29];
            var29 = var31.bind(var4)(var29);
            var31 = var29.t;
            if(var30) { _fun0009_ip = 97; continue _fun0009 }
case 98:
            var29 = var31.X8Yt/1;
            _fun0009_ip = 99; continue _fun0009;
case 97:
            var29 = var31.l9yxDa;
case 99:
            _fun0009_ip = 100; continue _fun0009;
case 95:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var31 = 7;
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.t;
            if(var30) { _fun0009_ip = 101; continue _fun0009 }
case 102:
            var30 = var31.TmKqHw;
            _fun0009_ip = 103; continue _fun0009;
case 101:
            var30 = var31["3RwRv8"];
case 103:
            var29 = var30;
case 100:
            var1 = var29;
case 94:
            var18 = var1;
case 88:
            var1 = {};
            var1['gameTitle'] = var27;
            var1['streamingDurationRequirement'] = var26;
            var1['duration'] = var25;
            var1['questReward'] = var24;
            var1['onGameTitleClick'] = var23;
            var1 = var19.bind(var4)(var18, var1, var20);
            _fun0009_ip = 104; continue _fun0009;
case 73:
            var1 = var16.description;
case 104:
            _fun0009_ip = 105; continue _fun0009;
case 72:
            var18 = {};
            var18['quest'] = var12;
            var18['thirdPartyTaskDetails'] = var16;
            var18['withoutMarkdown'] = var9;
            var18['hasNitro'] = var15;
            var18['collectibleRewardDuration'] = var14;
            var18['onGameTitleClick'] = var3;
            var18['rewardNameWithArticle'] = var5;
            var18['needsToConnect'] = var13;
            var16 = var18.quest;
            var13 = var18.thirdPartyTaskDetails;
            var19 = var18.withoutMarkdown;
            var29 = var18.hasNitro;
            var24 = var18.collectibleRewardDuration;
            var20 = var18.onGameTitleClick;
            var23 = var18.rewardNameWithArticle;
            var26 = var18.needsToConnect;
            var18 = var16.config;
            var18 = var18.messages;
            var25 = var18.gameTitle;
            var30 = _closure1_slot0;
            var27 = _closure1_slot2;
            var18 = var27[var22];
            var32 = var30.bind(var4)(var18);
            var31 = var32.isCollectibleQuestRewardPremiumExtendable;
            var18 = var16.config;
            var18 = var31.bind(var32)(var18);
            var27 = var27[var22];
            var30 = var30.bind(var4)(var27);
            var27 = var30.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var16 = var16.config;
            var27 = var27.bind(var30)(var16);
            var16 = var28 != var20;
            if(var26) { _fun0009_ip = 106; continue _fun0009 }
case 107:
            if(!var29) { _fun0009_ip = 108; continue _fun0009 }
case 109:
            if(var18) { _fun0009_ip = 110; continue _fun0009 }
case 108:
            if(var18) { _fun0009_ip = 111; continue _fun0009 }
case 112:
            if(!(var28 == var24)) { _fun0009_ip = 111; continue _fun0009 }
case 113:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var18 = 7;
            var18 = var30[var18];
            var18 = var29.bind(var4)(var18);
            var29 = var18.t;
            if(var16) { _fun0009_ip = 114; continue _fun0009 }
case 115:
            var18 = var29.thO6iA;
            _fun0009_ip = 116; continue _fun0009;
case 114:
            var18 = var29.bxN0nx;
case 116:
            _fun0009_ip = 117; continue _fun0009;
case 111:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var29 = 7;
            var29 = var31[var29];
            var29 = var30.bind(var4)(var29);
            var30 = var29.t;
            if(var16) { _fun0009_ip = 118; continue _fun0009 }
case 119:
            var29 = var30.IACEB/;
            _fun0009_ip = 120; continue _fun0009;
case 118:
            var29 = var30.ojhBxZ;
case 120:
            var18 = var29;
case 117:
            _fun0009_ip = 121; continue _fun0009;
case 110:
            if(var27) { _fun0009_ip = 122; continue _fun0009 }
case 123:
            if(!(var28 == var24)) { _fun0009_ip = 124; continue _fun0009 }
case 125:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var27 = 7;
            var27 = var30[var27];
            var27 = var29.bind(var4)(var27);
            var29 = var27.t;
            if(var16) { _fun0009_ip = 126; continue _fun0009 }
case 127:
            var27 = var29.thO6iA;
            _fun0009_ip = 128; continue _fun0009;
case 126:
            var27 = var29.bxN0nx;
case 128:
            _fun0009_ip = 129; continue _fun0009;
case 124:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var29 = 7;
            var29 = var31[var29];
            var29 = var30.bind(var4)(var29);
            var30 = var29.t;
            if(var16) { _fun0009_ip = 130; continue _fun0009 }
case 131:
            var29 = var30["6FOKAX"];
            _fun0009_ip = 132; continue _fun0009;
case 130:
            var29 = var30.yMEn77;
case 132:
            var27 = var29;
case 129:
            _fun0009_ip = 133; continue _fun0009;
case 122:
            if(!(var28 == var24)) { _fun0009_ip = 134; continue _fun0009 }
case 135:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var28 = 7;
            var28 = var30[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.t;
            if(var16) { _fun0009_ip = 136; continue _fun0009 }
case 137:
            var28 = var29["8066TK"];
            _fun0009_ip = 138; continue _fun0009;
case 136:
            var28 = var29["2Ctf1d"];
case 138:
            _fun0009_ip = 139; continue _fun0009;
case 134:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var29 = 7;
            var29 = var31[var29];
            var29 = var30.bind(var4)(var29);
            var30 = var29.t;
            if(var16) { _fun0009_ip = 140; continue _fun0009 }
case 141:
            var29 = var30.NdXW5c;
            _fun0009_ip = 142; continue _fun0009;
case 140:
            var29 = var30.uLVYG5;
case 142:
            var28 = var29;
case 139:
            var27 = var28;
case 133:
            var18 = var27;
case 121:
            _fun0009_ip = 143; continue _fun0009;
case 106:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var27 = 7;
            var27 = var29[var27];
            var27 = var28.bind(var4)(var27);
            var27 = var27.t;
            if(var16) { _fun0009_ip = 144; continue _fun0009 }
case 145:
            var16 = var27.BlfaHK;
            _fun0009_ip = 146; continue _fun0009;
case 144:
            var16 = var27["0SLl/G"];
case 146:
            var18 = var16;
case 143:
            var29 = var13.description;
            var16 = _closure1_slot13;
            var13 = {};
            var13['gameTitle'] = var25;
            var25 = var29;
            if(!var26) { _fun0009_ip = 147; continue _fun0009 }
case 148:
            var27 = var29.charAt;
            var26 = 0;
            var27 = var27.bind(var29)(var26);
            var26 = var27.toLowerCase;
            var27 = var26.bind(var27)();
            var28 = var29.slice;
            var26 = 1;
            var26 = var28.bind(var29)(var26);
            var25 = var27 + var26;
case 147:
            var13['objective'] = var25;
            var13['duration'] = var24;
            var13['questReward'] = var23;
            var13['onGameTitleClick'] = var20;
            var1 = var16.bind(var4)(var18, var13, var19);
case 105:
            _fun0009_ip = 149; continue _fun0009;
case 68:
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
            if(var13) { _fun0009_ip = 150; continue _fun0009 }
case 151:
            var17 = var16.UuzHh8;
            var13 = {};
            var24 = var24.config;
            var24 = var24.messages;
            var24 = var24.gameTitle;
            var13['activityName'] = var24;
            var13['streamingDurationRequirement'] = var23;
            var13['questReward'] = var20;
            var13 = var18.bind(var4)(var17, var13, var19);
            _fun0009_ip = 152; continue _fun0009;
case 150:
            var17 = var16.VYwSSu;
            var16 = {};
            var16['streamingDurationRequirement'] = var23;
            var16['questReward'] = var20;
            var13 = var18.bind(var4)(var17, var16, var19);
case 152:
            var1 = var13;
case 149:
            _fun0009_ip = 153; continue _fun0009;
case 66:
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
            if(var21) { _fun0009_ip = 154; continue _fun0009 }
case 155:
            var17 = var17.messages;
            var13 = var17.videoTitle;
case 154:
            var17 = var23 != var13;
            var21 = 'video';
            if(!var17) { _fun0009_ip = 156; continue _fun0009 }
case 157:
            var21 = var13;
case 156:
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
            if(!var24) { _fun0009_ip = 158; continue _fun0009 }
case 159:
            if(var25) { _fun0009_ip = 160; continue _fun0009 }
case 158:
            if(var24) { _fun0009_ip = 161; continue _fun0009 }
case 162:
            if(!(var23 == var19)) { _fun0009_ip = 161; continue _fun0009 }
case 163:
            var24 = var16.id;
            var16 = _closure1_slot9;
            if(!(var24 !== var16)) { _fun0009_ip = 164; continue _fun0009 }
case 165:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var16 = 7;
            var16 = var25[var16];
            var16 = var24.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.g+InPC;
            _fun0009_ip = 166; continue _fun0009;
case 164:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 7;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var16 = var24.Rsd5bL;
case 166:
            _fun0009_ip = 167; continue _fun0009;
case 161:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 7;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var16 = var24.W/HkLO;
case 167:
            _fun0009_ip = 168; continue _fun0009;
case 160:
            if(var13) { _fun0009_ip = 169; continue _fun0009 }
case 170:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var13 = 7;
            var13 = var25[var13];
            var13 = var24.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.vs/xBu;
            _fun0009_ip = 171; continue _fun0009;
case 169:
            if(!(var23 == var19)) { _fun0009_ip = 172; continue _fun0009 }
case 173:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 7;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.xqX+var6;
            _fun0009_ip = 174; continue _fun0009;
case 172:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 7;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var23 = var24.tXwfJT;
case 174:
            var13 = var23;
case 171:
            var16 = var13;
case 168:
            var13 = {};
            var13['videoTitle'] = var21;
            var13['rewardNameWithArticle'] = var20;
            var13['duration'] = var19;
            var1 = var17.bind(var4)(var16, var13, var18);
case 153:
            _fun0009_ip = 175; continue _fun0009;
case 64:
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
            if(!(var13 == var19)) { _fun0009_ip = 176; continue _fun0009 }
case 177:
            var16 = _closure1_slot0;
            var23 = _closure1_slot2;
            var13 = 7;
            var13 = var23[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var16 = var13.a/ia7F;
            _fun0009_ip = 178; continue _fun0009;
case 176:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var13 = 7;
            var13 = var24[var13];
            var13 = var23.bind(var4)(var13);
            var13 = var13.t;
            var16 = var13.HHVg4i;
case 178:
            var13 = {};
            var13['gameTitle'] = var21;
            var13['streamingDurationRequirement'] = var20;
            var13['onGameTitleClick'] = var19;
            var1 = var17.bind(var4)(var16, var13, var18);
case 175:
            _fun0009_ip = 179; continue _fun0009;
case 62:
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
case 179:
            _fun0009_ip = 180; continue _fun0009;
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
            if(!var25) { _fun0009_ip = 181; continue _fun0009 }
case 182:
            if(var16) { _fun0009_ip = 183; continue _fun0009 }
case 181:
            if(var16) { _fun0009_ip = 184; continue _fun0009 }
case 185:
            if(!(var28 == var21)) { _fun0009_ip = 184; continue _fun0009 }
case 186:
            var16 = _closure1_slot17;
            var16 = var16.bind(var4)(var27);
            _fun0009_ip = 187; continue _fun0009;
case 184:
            var25 = _closure1_slot16;
            var16 = var25.bind(var4)(var27);
case 187:
            _fun0009_ip = 188; continue _fun0009;
case 183:
            if(var13) { _fun0009_ip = 189; continue _fun0009 }
case 190:
            var13 = _closure1_slot15;
            var13 = var13.bind(var4)(var27);
            _fun0009_ip = 191; continue _fun0009;
case 189:
            var26 = _closure1_slot14;
            var25 = {};
            var28 = var28 != var21;
            var25['hasRewardDuration'] = var28;
            var25['shouldShowGameProfileLink'] = var27;
            var13 = var26.bind(var4)(var25);
case 191:
            var16 = var13;
case 188:
            var13 = {};
            var13['gameTitle'] = var24;
            var13['targetMinutes'] = var20;
            var13['rewardNameWithArticle'] = var23;
            var13['duration'] = var21;
            var13['streamingDurationRequirement'] = var20;
            var13['onGameTitleClick'] = var19;
            var1 = var17.bind(var4)(var16, var13, var18);
case 180:
            _fun0009_ip = 192; continue _fun0009;
case 58:
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
            if(!var23) { _fun0009_ip = 193; continue _fun0009 }
case 194:
            if(var13) { _fun0009_ip = 195; continue _fun0009 }
case 193:
            if(var13) { _fun0009_ip = 196; continue _fun0009 }
case 197:
            if(!(var22 == var18)) { _fun0009_ip = 196; continue _fun0009 }
case 198:
            if(var21) { _fun0009_ip = 199; continue _fun0009 }
case 200:
            var13 = _closure1_slot17;
            var13 = var13.bind(var4)(var24);
            _fun0009_ip = 201; continue _fun0009;
case 199:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 7;
            var23 = var26[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.t;
            var13 = var23.e+K3xJ;
case 201:
            _fun0009_ip = 202; continue _fun0009;
case 196:
            if(var21) { _fun0009_ip = 203; continue _fun0009 }
case 204:
            var23 = _closure1_slot16;
            var23 = var23.bind(var4)(var24);
            _fun0009_ip = 205; continue _fun0009;
case 203:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 7;
            var25 = var27[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.t;
            var23 = var25.enQ3jU;
case 205:
            var13 = var23;
case 202:
            _fun0009_ip = 206; continue _fun0009;
case 195:
            if(var3) { _fun0009_ip = 207; continue _fun0009 }
case 208:
            if(var21) { _fun0009_ip = 209; continue _fun0009 }
case 210:
            var3 = _closure1_slot15;
            var3 = var3.bind(var4)(var24);
            _fun0009_ip = 211; continue _fun0009;
case 209:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 7;
            var23 = var26[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.t;
            var3 = var23["1AcTqm"];
case 211:
            _fun0009_ip = 212; continue _fun0009;
case 207:
            if(var21) { _fun0009_ip = 213; continue _fun0009 }
case 214:
            var23 = _closure1_slot14;
            var21 = {};
            var25 = var22 != var18;
            var21['hasRewardDuration'] = var25;
            var21['shouldShowGameProfileLink'] = var24;
            var21 = var23.bind(var4)(var21);
            _fun0009_ip = 215; continue _fun0009;
case 213:
            if(!(var22 == var18)) { _fun0009_ip = 216; continue _fun0009 }
case 217:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 7;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.ztXW8V;
            _fun0009_ip = 218; continue _fun0009;
case 216:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 7;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var22 = var23.u5QXpw;
case 218:
            var21 = var22;
case 215:
            var3 = var21;
case 212:
            var13 = var3;
case 206:
            var3 = {};
            var3['gameTitle'] = var20;
            var3['streamingDurationRequirement'] = var17;
            var3['rewardNameWithArticle'] = var19;
            var3['duration'] = var18;
            var3['targetMinutes'] = var17;
            var3['onGameTitleClick'] = var16;
            var1 = var14.bind(var4)(var13, var3, var15);
case 192:
            _fun0009_ip = 219; continue _fun0009;
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
case 219:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var4 = function useQuestsInstructionsToWinReward(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var11 = var4.quest;
            var10 = var4.gameProfileSource;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 14;
            var5 = var2[var3];
            var3 = undefined;
            var9 = var7.bind(var3)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var8.bind(var9)(var6, var5);
            var5 = 8;
            var5 = var2[var5];
            var6 = var7.bind(var3)(var5);
            var5 = var6.useThirdPartyTaskDetails;
            var6 = var5.bind(var6)(var11);
            var5 = 15;
            var5 = var2[var5];
            var9 = var7.bind(var3)(var5);
            var5 = var9.useInGameQuestConnectState;
            var5 = var5.bind(var9)(var11);
            var12 = 10;
            var2 = var2[var12];
            var7 = var7.bind(var3)(var2);
            var2 = var7.hasAchievementInGameTask;
            var2 = var2.bind(var7)(var11);
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var9 = var9.bind(var3)(var7);
            if(var2) { _fun0010_ip = 220; continue _fun0010 }
case 221:
            var2 = var9.getAllApplicationIds;
            var12 = var2.bind(var9)(var11);
            var2 = null;
            var2 = var2 == var12;
            var7 = undefined;
            if(var2) { _fun0010_ip = 222; continue _fun0010 }
case 223:
            var2 = 0;
            var7 = var12[var2];
case 222:
            _fun0010_ip = 224; continue _fun0010;
case 220:
            var2 = var9.getInGameApplicationId;
            var7 = var2.bind(var9)(var11);
case 224:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 16;
            var2 = var11[var2];
            var9 = var9.bind(var3)(var2);
            var2 = {};
            var2['applicationId'] = var7;
            var7 = _closure1_slot8;
            var7 = var7.QUEST_INSTRUCTIONS;
            var2['location'] = var7;
            var7 = null;
            if(!(var7 == var10)) { _fun0010_ip = 225; continue _fun0010 }
case 226:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 17;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.GameProfileSources;
            var10 = var11.QuestHome;
case 225:
            var2['source'] = var10;
            var2 = var9.bind(var3)(var2);
            var2 = _closure1_slot20;
            var1 = {};
            var15 = var1;
            var14 = var4;
            var4 = copyDataProperties(var15, var14);
            var4 = 'currentUser';
            var1[3] = var8;
            var4 = false;
            var8 = 'withoutMarkdown';
            var1[7] = var4;
            var8 = var7 != var6;
            var7 = undefined;
            if(!var8) { _fun0010_ip = 63; continue _fun0010 }
case 227:
            var7 = var6;
case 63:
            var6 = 'thirdPartyTaskDetails';
            var1[5] = var7;
            var6 = 'onGameTitleClick';
            var1[5] = var3;
            var5 = var4 === var5;
            var4 = 'needsToConnect';
            var1[3] = var5;
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
            if(var1) { _fun0011_ip = 228; continue _fun0011 }
case 229:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.hasPlayActivityTask;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 228; continue _fun0011 }
case 230:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var7 = var3.bind(var5)(var1);
            var3 = var7.hasStreamOnDesktopTask;
            var1 = {};
            var1['quest'] = var4;
            var1 = var3.bind(var7)(var1);
            if(var1) { _fun0011_ip = 231; continue _fun0011 }
case 232:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.hasWatchVideoOnMobileTasks;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 55; continue _fun0011 }
case 233:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isInGameQuest;
            var1 = var1.bind(var3)(var4);
            var3 = _closure1_slot12;
            if(var1) { _fun0011_ip = 220; continue _fun0011 }
case 223:
            var1 = var3.PLAY;
            _fun0011_ip = 234; continue _fun0011;
case 220:
            var1 = var3.IN_GAME;
case 234:
            _fun0011_ip = 235; continue _fun0011;
case 55:
            var3 = _closure1_slot12;
            var1 = var3.WATCH_VIDEO;
case 235:
            _fun0011_ip = 236; continue _fun0011;
case 231:
            var3 = _closure1_slot12;
            var1 = var3.STREAM;
case 236:
            _fun0011_ip = 237; continue _fun0011;
case 228:
            var2 = _closure1_slot12;
            var1 = var2.PLAY;
case 237:
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
            if(var2) { _fun0012_ip = 238; continue _fun0012 }
case 239:
            var7 = null;
            var2 = var7 == var6;
            if(var2) { _fun0012_ip = 240; continue _fun0012 }
case 241:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 21;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var8 = var7 == var6;
            var3 = undefined;
            if(var8) { _fun0012_ip = 242; continue _fun0012 }
case 243:
            var6 = var6.embeddedActivityConfig;
            var7 = var7 == var6;
            var3 = undefined;
            if(var7) { _fun0012_ip = 242; continue _fun0012 }
case 244:
            var3 = var6.supported_platforms;
case 242:
            var2 = var4.bind(var5)(var3);
case 240:
            var1 = var2;
case 238:
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
    var5 = 26;
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
            if(!var3) { _fun0013_ip = 245; continue _fun0013 }
case 246:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var10 = var5.bind(var9)(var3);
            var5 = var10.hasPlayOnDesktopTask;
            var3 = {};
            var3['quest'] = var8;
            var3 = var5.bind(var10)(var3);
            if(var3) { _fun0013_ip = 245; continue _fun0013 }
case 247:
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
case 245:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var5 = var5.bind(var9)(var3);
            var3 = var5.isConsoleQuest;
            var5 = var3.bind(var5)(var8);
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            if(var5) { _fun0013_ip = 248; continue _fun0013 }
case 249:
            if(var1) { _fun0013_ip = 250; continue _fun0013 }
case 251:
            var5 = var10[var11];
            var12 = var3.bind(var9)(var5);
            var5 = var12.hasWatchVideoTasks;
            var5 = var5.bind(var12)(var8);
            if(var5) { _fun0013_ip = 252; continue _fun0013 }
case 253:
            var5 = null;
            if(!(var5 == var2)) { _fun0013_ip = 254; continue _fun0013 }
case 255:
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var12 = var12.bind(var9)(var5);
            var5 = var12.hasPlayActivityTask;
            var14 = var5.bind(var12)(var8);
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            if(var14) { _fun0013_ip = 256; continue _fun0013 }
case 257:
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
            if(!var14) { _fun0013_ip = 258; continue _fun0013 }
case 259:
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
            if(var14) { _fun0013_ip = 260; continue _fun0013 }
case 261:
            var14 = var15.wmOh/q;
            _fun0013_ip = 262; continue _fun0013;
case 260:
            var14 = var15.fe7Xec;
case 262:
            var17 = var14;
case 258:
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
case 256:
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
            if(var5) { _fun0013_ip = 263; continue _fun0013 }
case 264:
            var13 = var12.xHXCyf;
            var5 = {};
            var5['minutes'] = var6;
            var16 = var8.config;
            var16 = var16.messages;
            var16 = var16.gameTitle;
            var5['activityName'] = var16;
            var5 = var14.bind(var15)(var13, var5);
            _fun0013_ip = 265; continue _fun0013;
case 263:
            var13 = var12["1NaRSs"];
            var12 = {};
            var12['minutes'] = var6;
            var5 = var14.bind(var15)(var13, var12);
case 265:
            return var5;
case 254:
            var2 = var2.title;
            return var2;
case 252:
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
            if(var11) { _fun0013_ip = 266; continue _fun0013 }
case 267:
            var5 = var5.messages;
            var13 = var5.videoTitle;
case 266:
            if(!(var2 != var13)) { _fun0013_ip = 268; continue _fun0013 }
case 91:
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
            _fun0013_ip = 269; continue _fun0013;
case 268:
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
case 269:
            return var2;
case 250:
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
case 248:
            var2 = 7;
            var4 = var10[var2];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            if(var1) { _fun0013_ip = 270; continue _fun0013 }
case 271:
            var3 = var2.Ajlcd7;
            var1 = {};
            var1['minutes'] = var6;
            var1['onClick'] = var7;
            var8 = var8.config;
            var8 = var8.messages;
            var8 = var8.gameTitle;
            var1['gameTitle'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0013_ip = 272; continue _fun0013;
case 270:
            var3 = var2.gbtCpW;
            var2 = {};
            var2['onClick'] = var7;
            var2['minutes'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 272:
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
            if(!(var5 == var4)) { _fun0014_ip = 273; continue _fun0014 }
case 274:
            var5 = _closure1_slot7;
            var1 = var5.getCurrentUser;
            var4 = var1.bind(var5)();
case 273:
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
            if(var6) { _fun0015_ip = 275; continue _fun0015 }
case 276:
            var3 = var5.claimedAt;
case 275:
            var3 = var4 != var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var6 = var6.bind(var7)(var5);
            var5 = var6.useQuestFormattedDate;
            var8 = var8.userStatus;
            var9 = var4 == var8;
            var4 = undefined;
            if(var9) { _fun0015_ip = 277; continue _fun0015 }
case 278:
            var4 = var8.claimedAt;
case 277:
            var6 = var5.bind(var6)(var4);
            if(!var3) { _fun0015_ip = 29; continue _fun0015 }
case 279:
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
            var4 = var1.quest;
            var20 = var1.isExpanded;
            var25 = var1.sourceQuestContent;
            var13 = var1.activeScreen;
            var24 = var1.popoutTargetElementRef;
            var22 = var1.onGameSheetOpened;
            var8 = var1.onGameSheetClosed;
            var16 = var1.hasAlreadyLinked;
            var11 = var1.onClickGameTitle;
            var1 = var4.config;
            var1 = var1.rewardsConfig;
            var10 = var1.rewardsExpireAt;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 8;
            var3 = var9[var2];
            var6 = undefined;
            var5 = var7.bind(var6)(var3);
            var3 = var5.useQuestFormattedDate;
            var5 = var3.bind(var5)(var10);
            var3 = var9[var2];
            var10 = var7.bind(var6)(var3);
            var3 = var10.useQuestTaskDetails;
            var14 = var3.bind(var10)(var4);
            var3 = var9[var2];
            var10 = var7.bind(var6)(var3);
            var3 = var10.useThirdPartyTaskDetails;
            var23 = var3.bind(var10)(var4);
            var3 = 14;
            var3 = var9[var3];
            var10 = var7.bind(var6)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var9.bind(var10)(var7, var3);
            var9 = var4.userStatus;
            var3 = null;
            var10 = var3 == var9;
            var7 = undefined;
            if(var10) { _fun0016_ip = 280; continue _fun0016 }
case 281:
            var7 = var9.completedAt;
case 280:
            var17 = var3 != var7;
            var9 = var4.userStatus;
            var10 = var3 == var9;
            var7 = undefined;
            if(var10) { _fun0016_ip = 282; continue _fun0016 }
case 29:
            var7 = var9.enrolledAt;
case 282:
            var10 = var3 != var7;
            var7 = var14.percentComplete;
            var19 = 0;
            var9 = var7 > var19;
            var12 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = var21[var2];
            var7 = var12.bind(var6)(var2);
            var2 = var7.useIsQuestProgressing;
            var18 = var2.bind(var7)(var4);
            var7 = _closure1_slot21;
            var2 = {};
            var2['quest'] = var4;
            var26 = _closure1_slot8;
            var26 = var26.QUESTS_BAR;
            var2['location'] = var26;
            var2['taskDetails'] = var14;
            var2['sourceQuestContent'] = var25;
            var2['popoutTargetElementRef'] = var24;
            var2['onGameSheetOpened'] = var22;
            var2['onGameSheetClosed'] = var8;
            var8 = 17;
            var8 = var21[var8];
            var8 = var12.bind(var6)(var8);
            var8 = var8.GameProfileSources;
            var8 = var8.QuestBar;
            var2['gameProfileSource'] = var8;
            var8 = var7.bind(var6)(var2);
            if(!(var3 == var23)) { _fun0016_ip = 283; continue _fun0016 }
case 284:
            var12 = var14.percentComplete;
            _fun0016_ip = 52; continue _fun0016;
case 283:
            var12 = var23.percentComplete;
case 52:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            if(var17) { _fun0016_ip = 285; continue _fun0016 }
case 286:
            var21 = 10;
            var17 = var7[var21];
            var22 = var2.bind(var6)(var17);
            var17 = var22.hasAchievementInGameTask;
            var17 = var17.bind(var22)(var4);
            if(!var17) { _fun0016_ip = 287; continue _fun0016 }
case 288:
            var17 = false;
            if(!(var17 !== var16)) { _fun0016_ip = 289; continue _fun0016 }
case 287:
            var22 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var21];
            var17 = var22.bind(var6)(var17);
            if(var20) { _fun0016_ip = 290; continue _fun0016 }
case 291:
            var20 = var17.hasWatchVideoTasks;
            var20 = var20.bind(var17)(var4);
            if(var20) { _fun0016_ip = 292; continue _fun0016 }
case 293:
            if(!(!(var12 > var19))) { _fun0016_ip = 294; continue _fun0016 }
case 295:
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var12 = 7;
            var19 = var24[var12];
            var19 = var22.bind(var6)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var12 = var24[var12];
            var12 = var22.bind(var6)(var12);
            var12 = var12.t;
            var12 = var12.S6UUc5;
            var12 = var19.bind(var20)(var12);
            _fun0016_ip = 296; continue _fun0016;
case 294:
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var21];
            var20 = var20.bind(var6)(var19);
            var19 = var20.hasAchievementInGameTask;
            var19 = var19.bind(var20)(var4);
            if(!var19) { _fun0016_ip = 297; continue _fun0016 }
case 298:
            var19 = true;
            if(!(var19 !== var16)) { _fun0016_ip = 299; continue _fun0016 }
case 297:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            if(var18) { _fun0016_ip = 300; continue _fun0016 }
case 301:
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
            _fun0016_ip = 302; continue _fun0016;
case 300:
            var19 = 19;
            var19 = var21[var19];
            var21 = var20.bind(var6)(var19);
            var20 = var21.getContextualEntrypointHeading;
            var19 = {};
            var19['quest'] = var4;
            var19['taskDetails'] = var14;
            var24 = var3 != var23;
            var22 = undefined;
            if(!var24) { _fun0016_ip = 264; continue _fun0016 }
case 303:
            var22 = var23;
case 264:
            var19['thirdPartyTaskDetails'] = var22;
            var18 = var20.bind(var21)(var19);
case 302:
            _fun0016_ip = 254; continue _fun0016;
case 299:
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
case 254:
            var12 = var18;
case 296:
            _fun0016_ip = 304; continue _fun0016;
case 292:
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
            var12 = var19.bind(var20)(var18);
case 304:
            return var12;
case 290:
            var12 = var17.hasAchievementInGameTask;
            var12 = var12.bind(var17)(var4);
            if(!var12) { _fun0016_ip = 305; continue _fun0016 }
case 93:
            var12 = true;
            if(!(var12 !== var16)) { _fun0016_ip = 306; continue _fun0016 }
case 305:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 18;
            var12 = var17[var12];
            var12 = var16.bind(var6)(var12);
            var12 = var12.TaskPlatformScreen;
            var12 = var12.SELECT;
            if(!(var13 !== var12)) { _fun0016_ip = 307; continue _fun0016 }
case 308:
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 9;
            var12 = var16[var12];
            var13 = var13.bind(var6)(var12);
            var12 = var13.isSponsoredPlayQuest;
            var12 = var12.bind(var13)(var4);
            if(!var12) { _fun0016_ip = 307; continue _fun0016 }
case 102:
            if(!var10) { _fun0016_ip = 307; continue _fun0016 }
case 309:
            if(var9) { _fun0016_ip = 307; continue _fun0016 }
case 310:
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 11;
            var9 = var16[var9];
            var13 = var10.bind(var6)(var9);
            var12 = var13.getDefaultRewardNameWithArticle;
            var9 = var4.config;
            var15 = var12.bind(var13)(var9, var15);
            var9 = 7;
            var12 = var16[var9];
            var12 = var10.bind(var6)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var9 = var16[var9];
            var9 = var10.bind(var6)(var9);
            var9 = var9.t;
            var10 = var9["1votF6"];
            var9 = {};
            var9['rewardNameWithArticle'] = var15;
            var14 = var14.targetMinutes;
            var9['targetMinutes'] = var14;
            var9 = var12.bind(var13)(var10, var9);
            return var9;
case 307:
            return var8;
case 306:
            var4 = var4.config;
            var4 = var4.messages;
            var12 = var4.gameTitle;
            if(!(var3 == var11)) { _fun0016_ip = 311; continue _fun0016 }
case 312:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 7;
            var8 = var10[var3];
            var8 = var4.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var3 = var10[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.u3mdpP;
            var3 = {};
            var3['gameTitle'] = var12;
            var3 = var8.bind(var9)(var4, var3);
            _fun0016_ip = 313; continue _fun0016;
case 311:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 7;
            var9 = var13[var4];
            var9 = var8.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var4 = var13[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var8 = var4.X8hBDz;
            var4 = {};
            var4['gameTitle'] = var12;
            var4['onClickGameTitle'] = var11;
            var3 = var9.bind(var10)(var8, var4);
case 313:
            return var3;
case 289:
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
case 285:
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
            var13 = arg2;
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
            if(var10) { _fun0017_ip = 314; continue _fun0017 }
case 315:
            var8 = var9.completedAt;
case 314:
            var8 = var12 != var8;
            if(!(var12 == var4)) { _fun0017_ip = 316; continue _fun0017 }
case 317:
            var9 = var6.percentComplete;
            _fun0017_ip = 220; continue _fun0017;
case 316:
            var9 = var4.percentComplete;
case 220:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            if(var8) { _fun0017_ip = 318; continue _fun0017 }
case 319:
            var8 = 10;
            var10 = var6[var8];
            var14 = var4.bind(var5)(var10);
            var10 = var14.hasAchievementInGameTask;
            var10 = var10.bind(var14)(var7);
            if(!var10) { _fun0017_ip = 320; continue _fun0017 }
case 321:
            var10 = false;
            if(!(var10 !== var13)) { _fun0017_ip = 322; continue _fun0017 }
case 320:
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var14 = var14.bind(var5)(var10);
            var10 = var14.hasAchievementInGameTask;
            var10 = var10.bind(var14)(var7);
            if(!var10) { _fun0017_ip = 323; continue _fun0017 }
case 324:
            var10 = true;
            if(!(var10 === var13)) { _fun0017_ip = 323; continue _fun0017 }
case 325:
            if(!(var2 !== var9)) { _fun0017_ip = 326; continue _fun0017 }
case 323:
            var13 = var7.userStatus;
            var14 = var12 == var13;
            var10 = undefined;
            if(var14) { _fun0017_ip = 37; continue _fun0017 }
case 327:
            var10 = var13.enrolledAt;
case 37:
            if(!(var12 != var10)) { _fun0017_ip = 328; continue _fun0017 }
case 329:
            if(!(!(var9 > var2))) { _fun0017_ip = 330; continue _fun0017 }
case 328:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 18;
            var2 = var12[var2];
            var2 = var10.bind(var5)(var2);
            var2 = var2.TaskPlatformScreen;
            var2 = var2.SELECT;
            if(!(var3 !== var2)) { _fun0017_ip = 44; continue _fun0017 }
case 36:
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
            if(var2) { _fun0017_ip = 331; continue _fun0017 }
case 332:
            var2 = var3["7e5k7L"];
            var2 = var7.bind(var8)(var2);
            _fun0017_ip = 333; continue _fun0017;
case 331:
            var3 = var3.mOrpXG;
            var2 = var7.bind(var8)(var3);
case 333:
            _fun0017_ip = 334; continue _fun0017;
case 44:
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
case 334:
            return var2;
case 330:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 20;
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
case 326:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 7;
            var3 = var9[var2];
            var3 = var8.bind(var5)(var3);
            var7 = var3.intl;
            var3 = var7.string;
            var2 = var9[var2];
            var2 = var8.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["2+opCy"];
            var2 = var3.bind(var7)(var2);
            return var2;
case 322:
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
case 318:
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
            if(!(var1 === var5)) { _fun0018_ip = 335; continue _fun0018 }
case 336:
            var1 = false;
case 335:
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
            if(!(var2 !== var4)) { _fun0018_ip = 337; continue _fun0018 }
case 338:
            var2 = _closure1_slot12;
            var2 = var2.STREAM;
            if(!(var2 !== var4)) { _fun0018_ip = 339; continue _fun0018 }
case 340:
            var2 = _closure1_slot12;
            var2 = var2.WATCH_VIDEO;
            if(!(var2 !== var4)) { _fun0018_ip = 341; continue _fun0018 }
case 342:
            var2 = _closure1_slot12;
            var2 = var2.IN_GAME;
            if(!(var2 !== var4)) { _fun0018_ip = 343; continue _fun0018 }
case 344:
            return var5;
case 343:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.canLaunchActivity;
            var2 = var2.bind(var4)(var8);
            if(!var2) { _fun0018_ip = 345; continue _fun0018 }
case 317:
            var2 = _closure1_slot23;
            var2 = var2.bind(var5)(var8, var3);
            if(var2) { _fun0018_ip = 30; continue _fun0018 }
case 345:
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
            _fun0018_ip = 346; continue _fun0018;
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
            if(var1) { _fun0018_ip = 347; continue _fun0018 }
case 21:
            var4 = var11.hRIVy+;
            _fun0018_ip = 348; continue _fun0018;
case 347:
            var4 = var11.CkUzLd;
case 348:
            var2 = var9.bind(var10)(var4);
case 346:
            return var2;
case 341:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 22;
            var2 = var9[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.getVideoQuestWatchCtaText;
            var2 = var2.bind(var4)(var6);
            return var2;
case 339:
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
case 337:
            var2 = _closure1_slot23;
            var2 = var2.bind(var5)(var8, var3);
            if(!var2) { _fun0018_ip = 349; continue _fun0018 }
case 350:
            var2 = var8.config;
            var4 = var2.features;
            var3 = var4.includes;
            var2 = _closure1_slot10;
            var2 = var2.CLOUD_GAMING_ACTIVITY;
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            if(var2) { _fun0018_ip = 351; continue _fun0018 }
case 352:
            var2 = 9;
            var2 = var6[var2];
            var3 = var4.bind(var5)(var2);
            var2 = var3.canLaunchActivity;
            var2 = var2.bind(var3)(var8);
            if(var2) { _fun0018_ip = 353; continue _fun0018 }
case 349:
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
case 353:
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
            if(var1) { _fun0018_ip = 354; continue _fun0018 }
case 355:
            var1 = var7.Ie9++s;
            _fun0018_ip = 356; continue _fun0018;
case 354:
            var1 = var7.E4kW5O;
case 356:
            var1 = var2.bind(var3)(var1);
            return var1;
case 351:
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
            if(!var4) { _fun0019_ip = 357; continue _fun0019 }
case 358:
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
            if(var2) { _fun0019_ip = 359; continue _fun0019 }
case 360:
            var2 = var3.GYGb3A;
            var2 = var4.bind(var5)(var2);
            _fun0019_ip = 361; continue _fun0019;
case 359:
            var3 = var3.hh7Rb/;
            var2 = var4.bind(var5)(var3);
case 361:
            var1 = var2;
case 357:
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
            if(var6) { _fun0020_ip = 362; continue _fun0020 }
case 9:
            var3 = var11.platform;
case 362:
            if(!(var4 == var3)) { _fun0020_ip = 242; continue _fun0020 }
case 230:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 18;
            var6 = var10[var6];
            var6 = var8.bind(var1)(var6);
            var6 = var6.QuestRewardCodePlatforms;
            var3 = var6.CROSS_PLATFORM;
case 242:
            var6 = null;
            if(!var7) { _fun0020_ip = 55; continue _fun0020 }
case 240:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var9 = var8.bind(var1)(var7);
            var8 = var9.getRewardCodeQuestReward;
            var7 = {};
            var7['quest'] = var2;
            var12 = var4 == var11;
            var10 = undefined;
            if(var12) { _fun0020_ip = 221; continue _fun0020 }
case 363:
            var10 = var11.tier;
case 221:
            if(!(var4 == var10)) { _fun0020_ip = 222; continue _fun0020 }
case 364:
            var12 = var2.userStatus;
            var13 = var4 == var12;
            var11 = undefined;
            if(var13) { _fun0020_ip = 365; continue _fun0020 }
case 366:
            var11 = var12.claimedTier;
case 365:
            var10 = var11;
case 222:
            var7['idx'] = var10;
            var6 = var8.bind(var9)(var7);
case 55:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 19;
            var5 = var8[var5];
            var7 = var7.bind(var1)(var5);
            var5 = var7.getDefaultReward;
            var2 = var2.config;
            var5 = var5.bind(var7)(var2);
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0020_ip = 367; continue _fun0020 }
case 368:
            var6 = var6.messages;
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0020_ip = 367; continue _fun0020 }
case 369:
            var2 = var6.redemptionInstructionsByPlatform;
case 367:
            if(!(var4 == var2)) { _fun0020_ip = 370; continue _fun0020 }
case 371:
            var5 = var5.messages;
            var2 = var5.redemptionInstructionsByPlatform;
case 370:
            var4 = var4 != var3;
            var1 = undefined;
            if(!var4) { _fun0020_ip = 372; continue _fun0020 }
case 373:
            var1 = var2[var3];
case 372:
            return var1;
        }
    };
    var3['getRewardCodeRedemptionInstructions'] = var4;
    var2 = function useModalCtaConfig(arg1) {
        var1 = arg1;
        var3 = var1.quest;
        var _closure2_slot0 = var3;
        var2 = var1.questContent;
        var _closure2_slot1 = var2;
        var2 = var1.preCtaClick;
        var _closure2_slot2 = var2;
        var2 = var1.impressionId;
        var _closure2_slot3 = var2;
        var1 = var1.sourceQuestContent;
        var _closure2_slot4 = var1;
        var1 = function _defaultOnClickCta() {
            var4 = undefined;
            var1 = undefined;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0021_ip = 361; continue _fun0021 }
case 374:
                        var3 = _closure2_slot2;
                        var2 = null;
                        var4 = var2 == var3;
                        var3 = undefined;
                        var2 = undefined;
                        if(var4) { _fun0021_ip = 375; continue _fun0021 }
case 376:
                        var4 = _closure2_slot2;
                        var2 = var4.bind(var3)();
case 375:
                        SaveGenerator(address=42);
case 377:
                        return var2;
case 3:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0021_ip = 378; continue _fun0021 }
case 6:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var4 = 23;
                        var4 = var11[var4];
                        var7 = var10.bind(var3)(var4);
                        var6 = var7.openGameLinkDirectly;
                        var5 = _closure2_slot0;
                        var4 = {};
                        var9 = _closure2_slot1;
                        var4['content'] = var9;
                        var9 = 24;
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
case 378:
                        return var2;
case 361:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            _closure2_slot5 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure2_slot5 = var1;
        var7 = _closure1_slot5;
        var6 = var7.useMemo;
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
                if(var5) { _fun0022_ip = 375; continue _fun0022 }
case 379:
                var1 = var4.subtitle;
case 375:
                if(!(var2 == var1)) { _fun0022_ip = 380; continue _fun0022 }
case 229:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var2 = var6[var2];
                var6 = var5.bind(var8)(var2);
                var5 = var6.hasAchievementInGameTask;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                if(var2) { _fun0022_ip = 381; continue _fun0022 }
case 382:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 9;
                var2 = var9[var6];
                var10 = var7.bind(var8)(var2);
                var5 = var10.getQuestType;
                var2 = _closure2_slot0;
                var2 = var2.config;
                var5 = var5.bind(var10)(var2);
                var2 = 25;
                var2 = var9[var2];
                var2 = var7.bind(var8)(var2);
                var2 = var2.QuestType;
                var2 = var2.GAMEPLAY;
                if(!(var5 === var2)) { _fun0022_ip = 34; continue _fun0022 }
case 221:
                var2 = _closure2_slot0;
                var2 = var2.config;
                var7 = var2.features;
                var5 = var7.includes;
                var2 = _closure1_slot10;
                var2 = var2.NON_GAMING_PLAY_QUEST;
                var2 = var5.bind(var7)(var2);
                if(var2) { _fun0022_ip = 34; continue _fun0022 }
case 383:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var6 = var5.bind(var8)(var2);
                var5 = var6.isSponsoredPlayQuest;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                if(var2) { _fun0022_ip = 34; continue _fun0022 }
case 384:
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
                _fun0022_ip = 51; continue _fun0022;
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
case 51:
                _fun0022_ip = 385; continue _fun0022;
case 381:
                var3 = _closure2_slot0;
                var3 = var3.config;
                var3 = var3.taskConfigV2;
                var3 = var3.tasks;
                var3 = var3.ACHIEVEMENT_IN_GAME;
                var3 = var3.messages;
                var2 = var3.taskTitle;
case 385:
                var1 = var2;
case 380:
                return var1;
            }
        };
        var2 = var6.bind(var7)(var1, var2);
        var1 = {};
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var5 = 19;
        var6 = var6[var5];
        var5 = undefined;
        var6 = var7.bind(var5)(var6);
        var5 = var6.getExternalCtaLabel;
        var5 = var5.bind(var6)(var3);
        var1['ctaText'] = var5;
        var5 = 'secondary';
        var1['ctaVariant'] = var5;
        var4 = function defaultOnClickCta() {
            var1 = undefined;
            var4 = _closure2_slot5;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
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