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
    var _closure1_slot14 = var1;
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
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
    var1 = function getQuestInstructionsToWinRewardPlaytimeOnDesktop(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var11 = var1.quest;
            var3 = var1.taskDetails;
            var5 = var1.withoutMarkdown;
            var13 = var1.hasNitro;
            var8 = var1.collectibleRewardDuration;
            var6 = var1.onGameTitleClick;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 11;
            var7 = var14[var2];
            var4 = undefined;
            var10 = var12.bind(var4)(var7);
            var9 = var10.getDefaultRewardNameWithArticle;
            var7 = var11.config;
            var7 = var9.bind(var10)(var7);
            var9 = var3.targetMinutes;
            var3 = var11.config;
            var3 = var3.messages;
            var10 = var3.gameTitle;
            var3 = var14[var2];
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
            var11 = _closure1_slot9;
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
            var13 = _closure1_slot17;
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
            var2 = _closure1_slot16;
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
            var13 = _closure1_slot15;
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
            var2 = _closure1_slot14;
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
    var _closure1_slot19 = var1;
    var1 = function getQuestInstructionsToWinRewardSponsored(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var14 = var2.quest;
            var3 = var2.taskDetails;
            var13 = var2.sourceQuestContent;
            var1 = var2.withoutMarkdown;
            var11 = var2.popoutTargetElementRef;
            var10 = var2.onGameSheetOpened;
            var9 = var2.onGameSheetClosed;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 11;
            var4 = var6[var4];
            var8 = undefined;
            var6 = var5.bind(var8)(var4);
            var5 = var6.getDefaultRewardNameWithArticle;
            var4 = var14.config;
            var7 = var5.bind(var6)(var4);
            var6 = var3.targetMinutes;
            var12 = var3.applications;
            if(var1) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var3 = {};
            var3['quest'] = var14;
            var3['rewardNameWithArticle'] = var7;
            var3['targetMinutes'] = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var5 = var4.bind(var8)(var1);
            var4 = var5.createGameSheetHook;
            var1 = {};
            var1['quest'] = var14;
            var1['sourceQuestContent'] = var13;
            var13 = null;
            if(!(var13 == var12)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var12 = new Array(0);
case 50:
            var1['applications'] = var12;
            var1['popoutTargetElementRef'] = var11;
            var1['onGameSheetOpened'] = var10;
            var1['onGameSheetClosed'] = var9;
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
                    var3 = _closure1_slot9;
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
                    var11 = _closure1_slot9;
                    var13 = var11.PACKAGE_RPG_MMO;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11["3XS8Ni"];
                    var10[12] = var11;
                    var11 = _closure1_slot9;
                    var13 = var11.PACKAGE_RACING_SPORTS;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.X+UCju;
                    var10[12] = var11;
                    var11 = _closure1_slot9;
                    var13 = var11.PACKAGE_SANDBOX_CREATIVE;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11["6o4n1Q"];
                    var10[12] = var11;
                    var11 = _closure1_slot9;
                    var13 = var11.PACKAGE_FAMILY_FRIENDLY;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.DUsNmf;
                    var10[12] = var11;
                    var11 = _closure1_slot9;
                    var13 = var11.PACKAGE_HOLIDAY_SEASON;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.cWP8/Z;
                    var10[12] = var11;
                    var11 = _closure1_slot9;
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
                    if(!var11) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var4 = var10[var9];
case 52:
                    if(!(var2 == var4)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.t;
                    var4 = var2.CDeHul;
case 54:
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
            var1 = var1.bind(var8)(var3);
            _fun0007_ip = 56; continue _fun0007;
case 48:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 7;
            var4 = var9[var2];
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var3.bind(var8)(var2);
            var2 = var2.t;
            var3 = var2["1votF6"];
            var2 = {};
            var2['rewardNameWithArticle'] = var7;
            var2['targetMinutes'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 56:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function _getQuestsInstructionsToWinReward(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var11 = var1.quest;
            var10 = var1.taskDetails;
            var3 = var1.questContent;
            var15 = var1.thirdPartyTaskDetails;
            var9 = var1.sourceQuestContent;
            var8 = var1.withoutMarkdown;
            var18 = var1.currentUser;
            var7 = var1.popoutTargetElementRef;
            var6 = var1.onGameSheetOpened;
            var5 = var1.onGameSheetClosed;
            var12 = var1.onGameTitleClick;
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 15;
            var13 = var1[var4];
            var4 = undefined;
            var17 = var16.bind(var4)(var13);
            var14 = var17.isPremium;
            var13 = _closure1_slot11;
            var13 = var13.TIER_2;
            var14 = var14.bind(var17)(var18, var13);
            var21 = 11;
            var13 = var1[var21];
            var18 = var16.bind(var4)(var13);
            var17 = var18.getCollectibleQuestRewardDuration;
            var13 = var11.config;
            var13 = var17.bind(var18)(var13);
            var19 = 10;
            var1 = var1[var19];
            var16 = var16.bind(var4)(var1);
            var1 = var16.isConsoleQuest;
            var1 = var1.bind(var16)(var11);
            if(!var1) { _fun0009_ip = 57; continue _fun0009 }
case 58:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var19];
            var17 = var17.bind(var4)(var16);
            var16 = var17.shouldUsePlayOnDesktopTask;
            var1 = var16.bind(var17)(var11);
case 57:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = 9;
            var16 = var16[var18];
            var17 = var17.bind(var4)(var16);
            var16 = var17.isSponsoredPlayQuest;
            var16 = var16.bind(var17)(var11);
            if(var16) { _fun0009_ip = 59; continue _fun0009 }
case 26:
            if(var1) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var19];
            var16 = var16.bind(var4)(var1);
            var1 = var16.isConsoleQuest;
            var1 = var1.bind(var16)(var11);
            if(var1) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var19];
            var16 = var16.bind(var4)(var1);
            var1 = var16.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var16)(var11);
            if(var1) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var17 = var16.bind(var4)(var1);
            var16 = var17.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var11;
            var1 = var16.bind(var17)(var1);
            if(var1) { _fun0009_ip = 66; continue _fun0009 }
case 53:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var19];
            var16 = var16.bind(var4)(var1);
            var1 = var16.hasWatchVideoTasks;
            var1 = var1.bind(var16)(var11);
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var19];
            var16 = var17.bind(var4)(var16);
            if(var1) { _fun0009_ip = 67; continue _fun0009 }
case 42:
            var1 = var16.hasPlayActivityTask;
            var1 = var1.bind(var16)(var11);
            if(var1) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var27 = null;
            if(!(var27 == var15)) { _fun0009_ip = 70; continue _fun0009 }
case 71:
            var19 = {};
            var19['quest'] = var11;
            var19['taskDetails'] = var10;
            var19['withoutMarkdown'] = var8;
            var19['hasNitro'] = var14;
            var19['collectibleRewardDuration'] = var13;
            var19['onGameTitleClick'] = var12;
            var1 = var19.quest;
            var17 = var19.taskDetails;
            var20 = var19.withoutMarkdown;
            var29 = var19.hasNitro;
            var24 = var19.collectibleRewardDuration;
            var22 = var19.onGameTitleClick;
            var28 = _closure1_slot0;
            var19 = _closure1_slot2;
            var23 = var19[var21];
            var26 = var28.bind(var4)(var23);
            var25 = var26.getDefaultRewardNameWithArticle;
            var23 = var1.config;
            var23 = var25.bind(var26)(var23);
            var25 = var17.targetMinutes;
            var17 = var1.config;
            var17 = var17.messages;
            var26 = var17.gameTitle;
            var17 = var19[var21];
            var31 = var28.bind(var4)(var17);
            var30 = var31.isCollectibleQuestRewardPremiumExtendable;
            var17 = var1.config;
            var17 = var30.bind(var31)(var17);
            var19 = var19[var21];
            var28 = var28.bind(var4)(var19);
            var19 = var28.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var1 = var1.config;
            var1 = var19.bind(var28)(var1);
            var28 = var27 != var22;
            var19 = _closure1_slot14;
            if(!var29) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            if(var17) { _fun0009_ip = 74; continue _fun0009 }
case 72:
            if(var17) { _fun0009_ip = 75; continue _fun0009 }
case 76:
            if(!(var27 == var24)) { _fun0009_ip = 75; continue _fun0009 }
case 77:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var17 = 7;
            var17 = var30[var17];
            var17 = var29.bind(var4)(var17);
            var29 = var17.t;
            if(var28) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var17 = var29.hkJ+Gs;
            _fun0009_ip = 80; continue _fun0009;
case 78:
            var17 = var29.ER9rII;
case 80:
            _fun0009_ip = 81; continue _fun0009;
case 75:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var29 = 7;
            var29 = var31[var29];
            var29 = var30.bind(var4)(var29);
            var30 = var29.t;
            if(var28) { _fun0009_ip = 82; continue _fun0009 }
case 83:
            var29 = var30.BLyDvO;
            _fun0009_ip = 84; continue _fun0009;
case 82:
            var29 = var30.Cko4a4;
case 84:
            var17 = var29;
case 81:
            _fun0009_ip = 85; continue _fun0009;
case 74:
            if(var1) { _fun0009_ip = 86; continue _fun0009 }
case 87:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var1 = 7;
            var1 = var30[var1];
            var1 = var29.bind(var4)(var1);
            var29 = var1.t;
            if(var28) { _fun0009_ip = 88; continue _fun0009 }
case 89:
            var1 = var29.smG9ql;
            _fun0009_ip = 90; continue _fun0009;
case 88:
            var1 = var29.eEuma3;
case 90:
            _fun0009_ip = 91; continue _fun0009;
case 86:
            if(!(var27 == var24)) { _fun0009_ip = 92; continue _fun0009 }
case 93:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var27 = 7;
            var27 = var30[var27];
            var27 = var29.bind(var4)(var27);
            var29 = var27.t;
            if(var28) { _fun0009_ip = 94; continue _fun0009 }
case 95:
            var27 = var29.X8Yt/1;
            _fun0009_ip = 96; continue _fun0009;
case 94:
            var27 = var29.l9yxDa;
case 96:
            _fun0009_ip = 97; continue _fun0009;
case 92:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var29 = 7;
            var29 = var31[var29];
            var29 = var30.bind(var4)(var29);
            var29 = var29.t;
            if(var28) { _fun0009_ip = 98; continue _fun0009 }
case 99:
            var28 = var29.TmKqHw;
            _fun0009_ip = 100; continue _fun0009;
case 98:
            var28 = var29["3RwRv8"];
case 100:
            var27 = var28;
case 97:
            var1 = var27;
case 91:
            var17 = var1;
case 85:
            var1 = {};
            var1['gameTitle'] = var26;
            var1['streamingDurationRequirement'] = var25;
            var1['duration'] = var24;
            var1['questReward'] = var23;
            var1['onGameTitleClick'] = var22;
            var1 = var19.bind(var4)(var17, var1, var20);
            _fun0009_ip = 101; continue _fun0009;
case 70:
            var1 = var15.description;
case 101:
            _fun0009_ip = 102; continue _fun0009;
case 68:
            var15 = {};
            var15['quest'] = var11;
            var15['taskDetails'] = var10;
            var15['withoutMarkdown'] = var8;
            var15['questContent'] = var3;
            var24 = var15.quest;
            var3 = var15.taskDetails;
            var19 = var15.withoutMarkdown;
            var17 = var15.questContent;
            var22 = var3.targetMinutes;
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var20 = var3[var21];
            var25 = var15.bind(var4)(var20);
            var23 = var25.getDefaultRewardNameWithArticle;
            var20 = var24.config;
            var20 = var23.bind(var25)(var20);
            var3 = var3[var18];
            var15 = var15.bind(var4)(var3);
            var3 = var15.isPlayAnyActivityQuest;
            var3 = var3.bind(var15)(var24);
            if(var3) { _fun0009_ip = 103; continue _fun0009 }
case 104:
            var3 = var24.config;
            var18 = var3.features;
            var15 = var18.includes;
            var3 = _closure1_slot9;
            var3 = var3.CLOUD_GAMING_ACTIVITY;
            var3 = var15.bind(var18)(var3);
            if(var3) { _fun0009_ip = 105; continue _fun0009 }
case 106:
            var18 = _closure1_slot14;
            var15 = _closure1_slot0;
            var23 = _closure1_slot2;
            var3 = 7;
            var3 = var23[var3];
            var3 = var15.bind(var4)(var3);
            var3 = var3.t;
            var15 = var3.UuzHh8;
            var3 = {};
            var23 = var24.config;
            var23 = var23.messages;
            var23 = var23.gameTitle;
            var3['activityName'] = var23;
            var3['streamingDurationRequirement'] = var22;
            var3['questReward'] = var20;
            var3 = var18.bind(var4)(var15, var3, var19);
            _fun0009_ip = 107; continue _fun0009;
case 105:
            var18 = _closure1_slot0;
            var23 = _closure1_slot2;
            var15 = 12;
            var15 = var23[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.QuestContent;
            var15 = var15.QUESTS_EMBED;
            if(!(var17 !== var15)) { _fun0009_ip = 108; continue _fun0009 }
case 109:
            var18 = _closure1_slot14;
            var17 = _closure1_slot0;
            var26 = _closure1_slot2;
            var15 = 7;
            var15 = var26[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.t;
            var17 = var15["0NNM3l"];
            var15 = {};
            var23 = var24.config;
            var23 = var23.messages;
            var23 = var23.gameTitle;
            var15['activityName'] = var23;
            var23 = _closure1_slot12;
            var15['providerName'] = var23;
            var25 = _closure1_slot1;
            var23 = 13;
            var23 = var26[var23];
            var26 = var25.bind(var4)(var23);
            var25 = var26.getArticleURL;
            var23 = _closure1_slot10;
            var23 = var23.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST;
            var23 = var25.bind(var26)(var23);
            var15['providerLink'] = var23;
            var15['streamingDurationRequirement'] = var22;
            var15['questReward'] = var20;
            var15 = var18.bind(var4)(var17, var15, var19);
            _fun0009_ip = 110; continue _fun0009;
case 108:
            var23 = _closure1_slot14;
            var18 = _closure1_slot0;
            var26 = _closure1_slot2;
            var17 = 7;
            var17 = var26[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.C+2RxC;
            var17 = {};
            var24 = var24.config;
            var24 = var24.messages;
            var24 = var24.gameTitle;
            var17['activityName'] = var24;
            var24 = _closure1_slot12;
            var17['providerName'] = var24;
            var25 = _closure1_slot1;
            var24 = 13;
            var24 = var26[var24];
            var26 = var25.bind(var4)(var24);
            var25 = var26.getArticleURL;
            var24 = _closure1_slot10;
            var24 = var24.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST;
            var24 = var25.bind(var26)(var24);
            var17['providerLink'] = var24;
            var17['questReward'] = var20;
            var15 = var23.bind(var4)(var18, var17, var19);
case 110:
            var3 = var15;
case 107:
            _fun0009_ip = 111; continue _fun0009;
case 103:
            var18 = _closure1_slot14;
            var17 = _closure1_slot0;
            var23 = _closure1_slot2;
            var15 = 7;
            var15 = var23[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.t;
            var17 = var15.VYwSSu;
            var15 = {};
            var15['streamingDurationRequirement'] = var22;
            var15['questReward'] = var20;
            var3 = var18.bind(var4)(var17, var15, var19);
case 111:
            var1 = var3;
case 102:
            _fun0009_ip = 112; continue _fun0009;
case 67:
            var15 = var16.getDefaultWatchVideoTask;
            var3 = var11.config;
            var15 = var15.bind(var16)(var3);
            var19 = null;
            var16 = var19 == var15;
            var3 = undefined;
            if(var16) { _fun0009_ip = 113; continue _fun0009 }
case 114:
            var15 = var15.messages;
            var3 = var15.videoTitle;
case 113:
            var15 = var19 != var3;
            var18 = 'video';
            if(!var15) { _fun0009_ip = 115; continue _fun0009 }
case 116:
            var18 = var3;
case 115:
            var16 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = var3[var21];
            var20 = var16.bind(var4)(var15);
            var17 = var20.getDefaultRewardNameWithArticle;
            var15 = var11.config;
            var17 = var17.bind(var20)(var15);
            var15 = var3[var21];
            var22 = var16.bind(var4)(var15);
            var20 = var22.isCollectibleQuestRewardPremiumExtendable;
            var15 = var11.config;
            var15 = var20.bind(var22)(var15);
            var3 = var3[var21];
            var20 = var16.bind(var4)(var3);
            var16 = var20.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var11.config;
            var3 = var16.bind(var20)(var3);
            var16 = _closure1_slot14;
            if(!var15) { _fun0009_ip = 117; continue _fun0009 }
case 118:
            if(var14) { _fun0009_ip = 119; continue _fun0009 }
case 117:
            if(var15) { _fun0009_ip = 120; continue _fun0009 }
case 121:
            if(!(var19 == var13)) { _fun0009_ip = 120; continue _fun0009 }
case 122:
            var20 = var11.id;
            var15 = _closure1_slot8;
            if(!(var20 !== var15)) { _fun0009_ip = 123; continue _fun0009 }
case 124:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 7;
            var15 = var22[var15];
            var15 = var20.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.g+InPC;
            _fun0009_ip = 125; continue _fun0009;
case 123:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 7;
            var20 = var23[var20];
            var20 = var22.bind(var4)(var20);
            var20 = var20.t;
            var15 = var20.Rsd5bL;
case 125:
            _fun0009_ip = 126; continue _fun0009;
case 120:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 7;
            var20 = var23[var20];
            var20 = var22.bind(var4)(var20);
            var20 = var20.t;
            var15 = var20.W/HkLO;
case 126:
            _fun0009_ip = 127; continue _fun0009;
case 119:
            if(var3) { _fun0009_ip = 128; continue _fun0009 }
case 129:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var3 = 7;
            var3 = var22[var3];
            var3 = var20.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.vs/xBu;
            _fun0009_ip = 130; continue _fun0009;
case 128:
            if(!(var19 == var13)) { _fun0009_ip = 131; continue _fun0009 }
case 132:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 7;
            var19 = var22[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.xqX+var6;
            _fun0009_ip = 133; continue _fun0009;
case 131:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 7;
            var20 = var23[var20];
            var20 = var22.bind(var4)(var20);
            var20 = var20.t;
            var19 = var20.tXwfJT;
case 133:
            var3 = var19;
case 130:
            var15 = var3;
case 127:
            var3 = {};
            var3['videoTitle'] = var18;
            var3['rewardNameWithArticle'] = var17;
            var3['duration'] = var13;
            var1 = var16.bind(var4)(var15, var3, var8);
case 112:
            _fun0009_ip = 134; continue _fun0009;
case 66:
            var16 = {};
            var16['quest'] = var11;
            var16['taskDetails'] = var10;
            var16['withoutMarkdown'] = var8;
            var16['onGameTitleClick'] = var12;
            var3 = var16.quest;
            var15 = var16.taskDetails;
            var17 = var16.withoutMarkdown;
            var18 = var16.onGameTitleClick;
            var19 = var15.targetMinutes;
            var3 = var3.config;
            var3 = var3.messages;
            var20 = var3.gameTitle;
            var16 = _closure1_slot14;
            var3 = null;
            if(!(var3 == var18)) { _fun0009_ip = 135; continue _fun0009 }
case 136:
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var3 = 7;
            var3 = var22[var3];
            var3 = var15.bind(var4)(var3);
            var3 = var3.t;
            var15 = var3.a/ia7F;
            _fun0009_ip = 137; continue _fun0009;
case 135:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var3 = 7;
            var3 = var23[var3];
            var3 = var22.bind(var4)(var3);
            var3 = var3.t;
            var15 = var3.HHVg4i;
case 137:
            var3 = {};
            var3['gameTitle'] = var20;
            var3['streamingDurationRequirement'] = var19;
            var3['onGameTitleClick'] = var18;
            var1 = var16.bind(var4)(var15, var3, var17);
case 134:
            _fun0009_ip = 138; continue _fun0009;
case 64:
            var15 = _closure1_slot19;
            var3 = {};
            var3['quest'] = var11;
            var3['taskDetails'] = var10;
            var3['withoutMarkdown'] = var8;
            var3['hasNitro'] = var14;
            var3['collectibleRewardDuration'] = var13;
            var3['onGameTitleClick'] = var12;
            var1 = var15.bind(var4)(var3);
case 138:
            _fun0009_ip = 139; continue _fun0009;
case 62:
            var16 = {};
            var16['quest'] = var11;
            var16['taskDetails'] = var10;
            var16['withoutMarkdown'] = var8;
            var16['hasNitro'] = var14;
            var16['collectibleRewardDuration'] = var13;
            var16['onGameTitleClick'] = var12;
            var3 = var16.quest;
            var15 = var16.taskDetails;
            var17 = var16.withoutMarkdown;
            var24 = var16.hasNitro;
            var20 = var16.collectibleRewardDuration;
            var18 = var16.onGameTitleClick;
            var25 = _closure1_slot0;
            var16 = _closure1_slot2;
            var19 = var16[var21];
            var23 = var25.bind(var4)(var19);
            var22 = var23.getDefaultRewardNameWithArticle;
            var19 = var3.config;
            var22 = var22.bind(var23)(var19);
            var19 = var15.targetMinutes;
            var15 = var3.config;
            var15 = var15.messages;
            var23 = var15.gameTitle;
            var15 = var16[var21];
            var27 = var25.bind(var4)(var15);
            var26 = var27.isCollectibleQuestRewardPremiumExtendable;
            var15 = var3.config;
            var15 = var26.bind(var27)(var15);
            var16 = var16[var21];
            var25 = var25.bind(var4)(var16);
            var16 = var25.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var3.config;
            var3 = var16.bind(var25)(var3);
            var27 = null;
            var26 = var27 != var18;
            var16 = _closure1_slot14;
            if(!var24) { _fun0009_ip = 140; continue _fun0009 }
case 141:
            if(var15) { _fun0009_ip = 142; continue _fun0009 }
case 140:
            if(var15) { _fun0009_ip = 143; continue _fun0009 }
case 144:
            if(!(var27 == var20)) { _fun0009_ip = 143; continue _fun0009 }
case 145:
            var15 = _closure1_slot18;
            var15 = var15.bind(var4)(var26);
            _fun0009_ip = 146; continue _fun0009;
case 143:
            var24 = _closure1_slot17;
            var15 = var24.bind(var4)(var26);
case 146:
            _fun0009_ip = 147; continue _fun0009;
case 142:
            if(var3) { _fun0009_ip = 148; continue _fun0009 }
case 149:
            var3 = _closure1_slot16;
            var3 = var3.bind(var4)(var26);
            _fun0009_ip = 150; continue _fun0009;
case 148:
            var25 = _closure1_slot15;
            var24 = {};
            var27 = var27 != var20;
            var24['hasRewardDuration'] = var27;
            var24['shouldShowGameProfileLink'] = var26;
            var3 = var25.bind(var4)(var24);
case 150:
            var15 = var3;
case 147:
            var3 = {};
            var3['gameTitle'] = var23;
            var3['targetMinutes'] = var19;
            var3['rewardNameWithArticle'] = var22;
            var3['duration'] = var20;
            var3['streamingDurationRequirement'] = var19;
            var3['onGameTitleClick'] = var18;
            var1 = var16.bind(var4)(var15, var3, var17);
case 139:
            _fun0009_ip = 151; continue _fun0009;
case 60:
            var3 = {};
            var3['quest'] = var11;
            var3['taskDetails'] = var10;
            var3['withoutMarkdown'] = var8;
            var3['hasNitro'] = var14;
            var3['collectibleRewardDuration'] = var13;
            var3['onGameTitleClick'] = var12;
            var13 = var3.quest;
            var12 = var3.taskDetails;
            var14 = var3.withoutMarkdown;
            var22 = var3.hasNitro;
            var17 = var3.collectibleRewardDuration;
            var15 = var3.onGameTitleClick;
            var20 = _closure1_slot0;
            var3 = _closure1_slot2;
            var16 = var3[var21];
            var19 = var20.bind(var4)(var16);
            var18 = var19.getDefaultRewardNameWithArticle;
            var16 = var13.config;
            var18 = var18.bind(var19)(var16);
            var16 = var12.targetMinutes;
            var12 = var13.config;
            var12 = var12.messages;
            var19 = var12.gameTitle;
            var12 = var3[var21];
            var24 = var20.bind(var4)(var12);
            var23 = var24.isCollectibleQuestRewardPremiumExtendable;
            var12 = var13.config;
            var12 = var23.bind(var24)(var12);
            var3 = var3[var21];
            var21 = var20.bind(var4)(var3);
            var20 = var21.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var13.config;
            var3 = var20.bind(var21)(var3);
            var13 = var13.config;
            var21 = var13.features;
            var20 = var21.includes;
            var13 = _closure1_slot9;
            var13 = var13.NON_GAMING_PLAY_QUEST;
            var20 = var20.bind(var21)(var13);
            var21 = null;
            var23 = var21 != var15;
            var13 = _closure1_slot14;
            if(!var22) { _fun0009_ip = 152; continue _fun0009 }
case 153:
            if(var12) { _fun0009_ip = 154; continue _fun0009 }
case 152:
            if(var12) { _fun0009_ip = 155; continue _fun0009 }
case 156:
            if(!(var21 == var17)) { _fun0009_ip = 155; continue _fun0009 }
case 157:
            if(var20) { _fun0009_ip = 158; continue _fun0009 }
case 159:
            var12 = _closure1_slot18;
            var12 = var12.bind(var4)(var23);
            _fun0009_ip = 160; continue _fun0009;
case 158:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 7;
            var22 = var25[var22];
            var22 = var24.bind(var4)(var22);
            var22 = var22.t;
            var12 = var22.e+K3xJ;
case 160:
            _fun0009_ip = 161; continue _fun0009;
case 155:
            if(var20) { _fun0009_ip = 162; continue _fun0009 }
case 163:
            var22 = _closure1_slot17;
            var22 = var22.bind(var4)(var23);
            _fun0009_ip = 164; continue _fun0009;
case 162:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 7;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var22 = var24.enQ3jU;
case 164:
            var12 = var22;
case 161:
            _fun0009_ip = 165; continue _fun0009;
case 154:
            if(var3) { _fun0009_ip = 166; continue _fun0009 }
case 167:
            if(var20) { _fun0009_ip = 168; continue _fun0009 }
case 169:
            var3 = _closure1_slot16;
            var3 = var3.bind(var4)(var23);
            _fun0009_ip = 170; continue _fun0009;
case 168:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 7;
            var22 = var25[var22];
            var22 = var24.bind(var4)(var22);
            var22 = var22.t;
            var3 = var22["1AcTqm"];
case 170:
            _fun0009_ip = 171; continue _fun0009;
case 166:
            if(var20) { _fun0009_ip = 172; continue _fun0009 }
case 173:
            var22 = _closure1_slot15;
            var20 = {};
            var24 = var21 != var17;
            var20['hasRewardDuration'] = var24;
            var20['shouldShowGameProfileLink'] = var23;
            var20 = var22.bind(var4)(var20);
            _fun0009_ip = 174; continue _fun0009;
case 172:
            if(!(var21 == var17)) { _fun0009_ip = 175; continue _fun0009 }
case 176:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var21 = 7;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.ztXW8V;
            _fun0009_ip = 177; continue _fun0009;
case 175:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 7;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var21 = var22.u5QXpw;
case 177:
            var20 = var21;
case 174:
            var3 = var20;
case 171:
            var12 = var3;
case 165:
            var3 = {};
            var3['gameTitle'] = var19;
            var3['streamingDurationRequirement'] = var16;
            var3['rewardNameWithArticle'] = var18;
            var3['duration'] = var17;
            var3['targetMinutes'] = var16;
            var3['onGameTitleClick'] = var15;
            var1 = var13.bind(var4)(var12, var3, var14);
case 151:
            _fun0009_ip = 178; continue _fun0009;
case 59:
            var3 = _closure1_slot20;
            var2 = {};
            var2['quest'] = var11;
            var2['taskDetails'] = var10;
            var2['sourceQuestContent'] = var9;
            var2['withoutMarkdown'] = var8;
            var2['popoutTargetElementRef'] = var7;
            var2['onGameSheetOpened'] = var6;
            var2['onGameSheetClosed'] = var5;
            var1 = var3.bind(var4)(var2);
case 178:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var4 = function useQuestsInstructionsToWinReward(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var8 = var6.quest;
            var9 = var6.gameProfileSource;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 16;
            var2 = var10[var2];
            var3 = undefined;
            var11 = var5.bind(var3)(var2);
            var7 = var11.useStateFromStores;
            var2 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
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
            if(var2) { _fun0010_ip = 179; continue _fun0010 }
case 180:
            var2 = 0;
            var10 = var8[var2];
case 179:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 17;
            var2 = var11[var2];
            var8 = var8.bind(var3)(var2);
            var2 = {};
            var2['applicationId'] = var10;
            var10 = _closure1_slot7;
            var10 = var10.QUEST_INSTRUCTIONS;
            var2['location'] = var10;
            if(!(var5 == var9)) { _fun0010_ip = 181; continue _fun0010 }
case 182:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 18;
            var10 = var12[var10];
            var10 = var11.bind(var3)(var10);
            var10 = var10.GameProfileSources;
            var9 = var10.QuestHome;
case 181:
            var2['source'] = var9;
            var2 = var8.bind(var3)(var2);
            var2 = _closure1_slot21;
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
            if(!var6) { _fun0010_ip = 183; continue _fun0010 }
case 184:
            var5 = var4;
case 183:
            var4 = 'thirdPartyTaskDetails';
            var1[3] = var5;
            var4 = 'onGameTitleClick';
            var1[3] = var3;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot22 = var4;
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
            if(var1) { _fun0011_ip = 185; continue _fun0011 }
case 186:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.hasPlayActivityTask;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 185; continue _fun0011 }
case 187:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var7 = var3.bind(var5)(var1);
            var3 = var7.hasStreamOnDesktopTask;
            var1 = {};
            var1['quest'] = var4;
            var1 = var3.bind(var7)(var1);
            if(var1) { _fun0011_ip = 181; continue _fun0011 }
case 188:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.hasWatchVideoOnMobileTasks;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 57; continue _fun0011 }
case 189:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isInGameQuest;
            var1 = var1.bind(var3)(var4);
            var3 = _closure1_slot13;
            if(var1) { _fun0011_ip = 190; continue _fun0011 }
case 191:
            var1 = var3.PLAY;
            _fun0011_ip = 192; continue _fun0011;
case 190:
            var1 = var3.IN_GAME;
case 192:
            _fun0011_ip = 193; continue _fun0011;
case 57:
            var3 = _closure1_slot13;
            var1 = var3.WATCH_VIDEO;
case 193:
            _fun0011_ip = 194; continue _fun0011;
case 181:
            var3 = _closure1_slot13;
            var1 = var3.STREAM;
case 194:
            _fun0011_ip = 195; continue _fun0011;
case 185:
            var2 = _closure1_slot13;
            var1 = var2.PLAY;
case 195:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function canLaunchOnCurrentPlatform(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var6 = arg2;
            var1 = arg1;
            var1 = var1.config;
            var4 = var1.features;
            var2 = var4.includes;
            var1 = _closure1_slot9;
            var1 = var1.MOBILE_ACTIVITY_QUEST;
            var1 = var2.bind(var4)(var1);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0012_ip = 196; continue _fun0012 }
case 197:
            var7 = null;
            var2 = var7 == var6;
            if(var2) { _fun0012_ip = 198; continue _fun0012 }
case 199:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 21;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var8 = var7 == var6;
            var3 = undefined;
            if(var8) { _fun0012_ip = 200; continue _fun0012 }
case 201:
            var6 = var6.embeddedActivityConfig;
            var7 = var7 == var6;
            var3 = undefined;
            if(var7) { _fun0012_ip = 200; continue _fun0012 }
case 202:
            var3 = var6.supported_platforms;
case 200:
            var2 = var4.bind(var5)(var3);
case 198:
            var1 = var2;
case 196:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
    var9 = var7[var11];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var10 = 2;
    var5 = var7[var10];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var9 = 3;
    var5 = var7[var9];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.QuestsExperimentLocations;
    var _closure1_slot7 = var8;
    var8 = var5.ORBS_INTRO_QUEST_ID;
    var _closure1_slot8 = var8;
    var5 = var5.QuestVariants;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.HelpdeskArticles;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PremiumTypes;
    var _closure1_slot11 = var5;
    var5 = 'NVIDIA GeForce NOW';
    var _closure1_slot12 = var5;
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
    var _closure1_slot13 = var5;
    var5 = 23;
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
            if(!var3) { _fun0013_ip = 203; continue _fun0013 }
case 204:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var10 = var5.bind(var9)(var3);
            var5 = var10.hasPlayOnDesktopTask;
            var3 = {};
            var3['quest'] = var8;
            var3 = var5.bind(var10)(var3);
            if(var3) { _fun0013_ip = 203; continue _fun0013 }
case 20:
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
case 203:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var5 = var5.bind(var9)(var3);
            var3 = var5.isConsoleQuest;
            var5 = var3.bind(var5)(var8);
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            if(var5) { _fun0013_ip = 205; continue _fun0013 }
case 206:
            if(var1) { _fun0013_ip = 207; continue _fun0013 }
case 208:
            var5 = var10[var11];
            var12 = var3.bind(var9)(var5);
            var5 = var12.hasWatchVideoTasks;
            var5 = var5.bind(var12)(var8);
            if(var5) { _fun0013_ip = 209; continue _fun0013 }
case 210:
            var5 = null;
            if(!(var5 == var2)) { _fun0013_ip = 211; continue _fun0013 }
case 212:
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var12 = var12.bind(var9)(var5);
            var5 = var12.hasPlayActivityTask;
            var14 = var5.bind(var12)(var8);
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            if(var14) { _fun0013_ip = 213; continue _fun0013 }
case 214:
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
            if(!var14) { _fun0013_ip = 215; continue _fun0013 }
case 44:
            var14 = var8.config;
            var18 = var14.features;
            var15 = var18.includes;
            var14 = _closure1_slot9;
            var14 = var14.NON_GAMING_PLAY_QUEST;
            var14 = var15.bind(var18)(var14);
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var16];
            var15 = var18.bind(var9)(var15);
            var15 = var15.t;
            if(var14) { _fun0013_ip = 216; continue _fun0013 }
case 217:
            var14 = var15.wmOh/q;
            _fun0013_ip = 218; continue _fun0013;
case 216:
            var14 = var15.fe7Xec;
case 218:
            var17 = var14;
case 215:
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
case 213:
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
            if(var5) { _fun0013_ip = 219; continue _fun0013 }
case 220:
            var13 = var12.xHXCyf;
            var5 = {};
            var5['minutes'] = var6;
            var16 = var8.config;
            var16 = var16.messages;
            var16 = var16.gameTitle;
            var5['activityName'] = var16;
            var5 = var14.bind(var15)(var13, var5);
            _fun0013_ip = 221; continue _fun0013;
case 219:
            var13 = var12["1NaRSs"];
            var12 = {};
            var12['minutes'] = var6;
            var5 = var14.bind(var15)(var13, var12);
case 221:
            return var5;
case 211:
            var2 = var2.title;
            return var2;
case 209:
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
            if(var11) { _fun0013_ip = 222; continue _fun0013 }
case 223:
            var5 = var5.messages;
            var13 = var5.videoTitle;
case 222:
            if(!(var2 != var13)) { _fun0013_ip = 224; continue _fun0013 }
case 94:
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
            _fun0013_ip = 225; continue _fun0013;
case 224:
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
case 225:
            return var2;
case 207:
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
case 205:
            var2 = 7;
            var4 = var10[var2];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            if(var1) { _fun0013_ip = 226; continue _fun0013 }
case 104:
            var3 = var2.Ajlcd7;
            var1 = {};
            var1['minutes'] = var6;
            var1['onClick'] = var7;
            var8 = var8.config;
            var8 = var8.messages;
            var8 = var8.gameTitle;
            var1['gameTitle'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0013_ip = 227; continue _fun0013;
case 226:
            var3 = var2.gbtCpW;
            var2 = {};
            var2['onClick'] = var7;
            var2['minutes'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 227:
            return var1;
        }
    };
    var3['useQuestInstructionTitle'] = var5;
    var5 = function getQuestsInstructionsToWinReward(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot21;
            var2 = {};
            var7 = var2;
            var6 = var4;
            var5 = copyDataProperties(var7, var6);
            var4 = var4.currentUser;
            var5 = null;
            if(!(var5 == var4)) { _fun0014_ip = 228; continue _fun0014 }
case 229:
            var5 = _closure1_slot6;
            var1 = var5.getCurrentUser;
            var4 = var1.bind(var5)();
case 228:
            var1 = 'currentUser';
            var2[0] = var4;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['getQuestsInstructionsToWinReward'] = var5;
    var3['useQuestsInstructionsToWinReward'] = var4;
    var4 = function useQuestTileDescription(arg1, arg2, arg3, arg4) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var6 = arg1;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 8;
            var1 = var9[var10];
            var7 = undefined;
            var3 = var8.bind(var7)(var1);
            var1 = var3.useQuestTaskDetails;
            var5 = var1.bind(var3)(var6);
            var1 = 10;
            var1 = var9[var1];
            var3 = var8.bind(var7)(var1);
            var1 = var3.getThirdPartyTaskDetails;
            var3 = var1.bind(var3)(var6);
            var4 = _closure1_slot22;
            var1 = {};
            var1['quest'] = var6;
            var1['taskDetails'] = var5;
            var5 = _closure1_slot7;
            var5 = var5.QUEST_HOME_DESKTOP;
            var1['location'] = var5;
            var5 = 12;
            var5 = var9[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.QuestContent;
            var5 = var5.QUEST_HOME_DESKTOP;
            var1['questContent'] = var5;
            var5 = arg2;
            var1['sourceQuestContent'] = var5;
            var5 = arg4;
            var1['popoutTargetElementRef'] = var5;
            var5 = arg3;
            var1['gameProfileSource'] = var5;
            var4 = var4.bind(var7)(var1);
            var8 = var6.userStatus;
            var1 = null;
            var9 = var1 == var8;
            var5 = undefined;
            if(var9) { _fun0015_ip = 230; continue _fun0015 }
case 50:
            var5 = var8.claimedAt;
case 230:
            var5 = var1 != var5;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var9 = var9.bind(var7)(var8);
            var8 = var9.useQuestFormattedDate;
            var10 = var6.userStatus;
            var11 = var1 == var10;
            var6 = undefined;
            if(var11) { _fun0015_ip = 194; continue _fun0015 }
case 231:
            var6 = var10.claimedAt;
case 194:
            var6 = var8.bind(var9)(var6);
            if(var5) { _fun0015_ip = 232; continue _fun0015 }
case 233:
            if(!(var1 == var3)) { _fun0015_ip = 234; continue _fun0015 }
case 195:
            var5 = var1 != var4;
            var1 = null;
            if(!var5) { _fun0015_ip = 235; continue _fun0015 }
case 61:
            var1 = var4;
case 235:
            _fun0015_ip = 236; continue _fun0015;
case 234:
            var1 = var3.description;
case 236:
            _fun0015_ip = 237; continue _fun0015;
case 232:
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
case 237:
            return var1;
        }
    };
    var3['useQuestTileDescription'] = var4;
    var4 = function useQuestBarSubtitle(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var3 = var1.quest;
            var16 = var1.isExpanded;
            var23 = var1.sourceQuestContent;
            var12 = var1.activeScreen;
            var22 = var1.popoutTargetElementRef;
            var21 = var1.onGameSheetOpened;
            var7 = var1.onGameSheetClosed;
            var1 = var3.config;
            var1 = var1.rewardsConfig;
            var10 = var1.rewardsExpireAt;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var5 = var2[var1];
            var6 = undefined;
            var9 = var4.bind(var6)(var5);
            var5 = var9.useQuestFormattedDate;
            var5 = var5.bind(var9)(var10);
            var9 = var2[var1];
            var10 = var4.bind(var6)(var9);
            var9 = var10.useQuestTaskDetails;
            var10 = var9.bind(var10)(var3);
            var2 = var2[var1];
            var4 = var4.bind(var6)(var2);
            var2 = var4.useThirdPartyTaskDetails;
            var19 = var2.bind(var4)(var3);
            var4 = var3.userStatus;
            var18 = null;
            var9 = var18 == var4;
            var2 = undefined;
            if(var9) { _fun0016_ip = 238; continue _fun0016 }
case 239:
            var2 = var4.completedAt;
case 238:
            var17 = var18 != var2;
            var4 = var3.userStatus;
            var9 = var18 == var4;
            var2 = undefined;
            if(var9) { _fun0016_ip = 240; continue _fun0016 }
case 241:
            var2 = var4.enrolledAt;
case 240:
            var9 = var18 != var2;
            var2 = var10.percentComplete;
            var15 = 0;
            var4 = var2 > var15;
            var13 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = var20[var1];
            var2 = var13.bind(var6)(var1);
            var1 = var2.useIsQuestProgressing;
            var14 = var1.bind(var2)(var3);
            var2 = _closure1_slot22;
            var1 = {};
            var1['quest'] = var3;
            var11 = _closure1_slot7;
            var11 = var11.QUESTS_BAR;
            var1['location'] = var11;
            var11 = 12;
            var24 = var20[var11];
            var24 = var13.bind(var6)(var24);
            var24 = var24.QuestContent;
            var24 = var24.QUEST_BAR_V2;
            var1['questContent'] = var24;
            var1['taskDetails'] = var10;
            var1['sourceQuestContent'] = var23;
            var1['popoutTargetElementRef'] = var22;
            var1['onGameSheetOpened'] = var21;
            var1['onGameSheetClosed'] = var7;
            var7 = 18;
            var7 = var20[var7];
            var7 = var13.bind(var6)(var7);
            var7 = var7.GameProfileSources;
            var7 = var7.QuestBar;
            var1['gameProfileSource'] = var7;
            var1 = var2.bind(var6)(var1);
            if(!(var18 == var19)) { _fun0016_ip = 242; continue _fun0016 }
case 243:
            var13 = var10.percentComplete;
            _fun0016_ip = 244; continue _fun0016;
case 242:
            var13 = var19.percentComplete;
case 244:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            if(var17) { _fun0016_ip = 245; continue _fun0016 }
case 212:
            if(var16) { _fun0016_ip = 246; continue _fun0016 }
case 247:
            var16 = 10;
            var16 = var7[var16];
            var17 = var2.bind(var6)(var16);
            var16 = var17.hasWatchVideoTasks;
            var16 = var16.bind(var17)(var3);
            if(var16) { _fun0016_ip = 248; continue _fun0016 }
case 249:
            if(!(!(var13 > var15))) { _fun0016_ip = 250; continue _fun0016 }
case 251:
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 7;
            var15 = var20[var13];
            var15 = var17.bind(var6)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var13 = var20[var13];
            var13 = var17.bind(var6)(var13);
            var13 = var13.t;
            var13 = var13.S6UUc5;
            var13 = var15.bind(var16)(var13);
            _fun0016_ip = 252; continue _fun0016;
case 250:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            if(var14) { _fun0016_ip = 253; continue _fun0016 }
case 254:
            var14 = 7;
            var15 = var17[var14];
            var15 = var16.bind(var6)(var15);
            var20 = var15.intl;
            var15 = var20.string;
            var14 = var17[var14];
            var14 = var16.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.mOrpXG;
            var14 = var15.bind(var20)(var14);
            _fun0016_ip = 255; continue _fun0016;
case 253:
            var15 = 19;
            var15 = var17[var15];
            var17 = var16.bind(var6)(var15);
            var16 = var17.getContextualEntrypointHeading;
            var15 = {};
            var15['quest'] = var3;
            var15['taskDetails'] = var10;
            var20 = var18 != var19;
            var18 = undefined;
            if(!var20) { _fun0016_ip = 256; continue _fun0016 }
case 257:
            var18 = var19;
case 256:
            var15['thirdPartyTaskDetails'] = var18;
            var14 = var16.bind(var17)(var15);
case 255:
            var13 = var14;
case 252:
            _fun0016_ip = 258; continue _fun0016;
case 248:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 7;
            var15 = var18[var14];
            var15 = var17.bind(var6)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.o+e9yh;
            var13 = var15.bind(var16)(var14);
case 258:
            return var13;
case 246:
            var11 = var7[var11];
            var11 = var2.bind(var6)(var11);
            var11 = var11.TaskPlatformScreen;
            var11 = var11.SELECT;
            if(!(var12 !== var11)) { _fun0016_ip = 259; continue _fun0016 }
case 260:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 9;
            var11 = var13[var11];
            var12 = var12.bind(var6)(var11);
            var11 = var12.isSponsoredPlayQuest;
            var11 = var11.bind(var12)(var3);
            if(!var11) { _fun0016_ip = 259; continue _fun0016 }
case 261:
            if(!var9) { _fun0016_ip = 259; continue _fun0016 }
case 262:
            if(var4) { _fun0016_ip = 259; continue _fun0016 }
case 263:
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 11;
            var8 = var12[var8];
            var9 = var4.bind(var6)(var8);
            var8 = var9.getDefaultRewardNameWithArticle;
            var3 = var3.config;
            var11 = var8.bind(var9)(var3);
            var3 = 7;
            var8 = var12[var3];
            var8 = var4.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var3 = var12[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3["1votF6"];
            var3 = {};
            var3['rewardNameWithArticle'] = var11;
            var10 = var10.targetMinutes;
            var3['targetMinutes'] = var10;
            var3 = var8.bind(var9)(var4, var3);
            return var3;
case 259:
            return var1;
case 245:
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
    var4 = function useQuestBarTitle(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = arg1;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 16;
            var2 = var10[var2];
            var5 = undefined;
            var7 = var8.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var1 = var1.locale;
                return var1;
            };
            var9 = var6.bind(var7)(var3, var2);
            var6 = 8;
            var2 = var10[var6];
            var3 = var8.bind(var5)(var2);
            var2 = var3.useQuestTaskDetails;
            var7 = var2.bind(var3)(var4);
            var2 = var10[var6];
            var3 = var8.bind(var5)(var2);
            var2 = var3.useTaskPlatformScreen;
            var11 = var2.bind(var3)(var4, var7);
            var3 = _closure1_slot3;
            var2 = 1;
            var3 = var3.bind(var5)(var11, var2);
            var2 = 0;
            var3 = var3[var2];
            var6 = var10[var6];
            var8 = var8.bind(var5)(var6);
            var6 = var8.useThirdPartyTaskDetails;
            var10 = var6.bind(var8)(var4);
            var11 = var4.userStatus;
            var8 = null;
            var12 = var8 == var11;
            var6 = undefined;
            if(var12) { _fun0017_ip = 264; continue _fun0017 }
case 204:
            var6 = var11.completedAt;
case 264:
            var6 = var8 != var6;
            if(!(var8 == var10)) { _fun0017_ip = 265; continue _fun0017 }
case 266:
            var7 = var7.percentComplete;
            _fun0017_ip = 267; continue _fun0017;
case 265:
            var7 = var10.percentComplete;
case 267:
            if(var6) { _fun0017_ip = 268; continue _fun0017 }
case 269:
            var10 = var4.userStatus;
            var11 = var8 == var10;
            var6 = undefined;
            if(var11) { _fun0017_ip = 231; continue _fun0017 }
case 193:
            var6 = var10.enrolledAt;
case 231:
            if(!(var8 != var6)) { _fun0017_ip = 270; continue _fun0017 }
case 271:
            if(!(!(var7 > var2))) { _fun0017_ip = 272; continue _fun0017 }
case 270:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 12;
            var2 = var8[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.TaskPlatformScreen;
            var2 = var2.SELECT;
            if(!(var3 !== var2)) { _fun0017_ip = 273; continue _fun0017 }
case 274:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isConsoleQuest;
            var2 = var2.bind(var3)(var4);
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 7;
            var4 = var10[var3];
            var4 = var8.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var10[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.t;
            if(var2) { _fun0017_ip = 275; continue _fun0017 }
case 276:
            var2 = var3["7e5k7L"];
            var2 = var4.bind(var6)(var2);
            _fun0017_ip = 277; continue _fun0017;
case 275:
            var3 = var3.mOrpXG;
            var2 = var4.bind(var6)(var3);
case 277:
            _fun0017_ip = 278; continue _fun0017;
case 273:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 7;
            var4 = var10[var3];
            var4 = var8.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var10[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.EMrUHQ;
            var2 = var4.bind(var6)(var3);
case 278:
            return var2;
case 272:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 20;
            var2 = var8[var2];
            var6 = var3.bind(var5)(var2);
            var4 = var6.formatPercent;
            var2 = {};
            var10 = 'floor';
            var2['roundingMode'] = var10;
            var7 = var4.bind(var6)(var9, var7, var2);
            var2 = 7;
            var4 = var8[var2];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.lVZaXD;
            var2 = {};
            var2['percent'] = var7;
            var2 = var4.bind(var6)(var3, var2);
            return var2;
case 268:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
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
            var2 = arg1;
            var8 = var2.quest;
            var3 = var2.application;
            var1 = var2.shortText;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0018_ip = 279; continue _fun0018 }
case 280:
            var1 = false;
case 279:
            var10 = var2.mobileExternalLinkVariant;
            var2 = function useSimplifiedQuestTaskType(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var3 = _closure1_slot23;
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
            var9 = var2.bind(var6)(var8);
            var2 = _closure1_slot13;
            var2 = var2.PLAY;
            if(!(var2 !== var4)) { _fun0018_ip = 281; continue _fun0018 }
case 282:
            var2 = _closure1_slot13;
            var2 = var2.STREAM;
            if(!(var2 !== var4)) { _fun0018_ip = 283; continue _fun0018 }
case 198:
            var2 = _closure1_slot13;
            var2 = var2.WATCH_VIDEO;
            if(!(var2 !== var4)) { _fun0018_ip = 284; continue _fun0018 }
case 285:
            var2 = _closure1_slot13;
            var2 = var2.IN_GAME;
            if(!(var2 !== var4)) { _fun0018_ip = 286; continue _fun0018 }
case 287:
            return var5;
case 286:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.canLaunchActivity;
            var2 = var2.bind(var4)(var8);
            if(!var2) { _fun0018_ip = 288; continue _fun0018 }
case 191:
            var2 = _closure1_slot24;
            var2 = var2.bind(var5)(var8, var3);
            if(var2) { _fun0018_ip = 289; continue _fun0018 }
case 288:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 7;
            var4 = var12[var2];
            var4 = var11.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var2 = var12[var2];
            var2 = var11.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.l7E81v;
            var2 = var4.bind(var6)(var2);
            _fun0018_ip = 290; continue _fun0018;
case 289:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var13 = 7;
            var4 = var4[var13];
            var4 = var6.bind(var5)(var4);
            var11 = var4.intl;
            var6 = var11.string;
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var5)(var4);
            var12 = var4.t;
            if(var1) { _fun0018_ip = 291; continue _fun0018 }
case 292:
            var4 = var12.hRIVy+;
            _fun0018_ip = 293; continue _fun0018;
case 291:
            var4 = var12.CkUzLd;
case 293:
            var2 = var6.bind(var11)(var4);
case 290:
            return var2;
case 284:
            var2 = null;
            if(!(var2 == var10)) { _fun0018_ip = 272; continue _fun0018 }
case 294:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 7;
            var4 = var14[var2];
            var4 = var13.bind(var5)(var4);
            var11 = var4.intl;
            var6 = var11.formatToPlainString;
            var2 = var14[var2];
            var2 = var13.bind(var5)(var2);
            var2 = var2.t;
            var4 = var2.GNsKiW;
            var2 = {};
            var12 = 10;
            var12 = var14[var12];
            var13 = var13.bind(var5)(var12);
            var12 = var13.formatWatchTaskRemainingTime;
            var12 = var12.bind(var13)(var9);
            var2['remainTime'] = var12;
            var2 = var6.bind(var11)(var4, var2);
            _fun0018_ip = 295; continue _fun0018;
case 272:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 22;
            var4 = var11[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.getMobileVideoQuestWatchCtaText;
            var2 = var4.bind(var6)(var9, var10);
case 295:
            return var2;
case 283:
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
case 281:
            var2 = _closure1_slot24;
            var2 = var2.bind(var5)(var8, var3);
            if(!var2) { _fun0018_ip = 296; continue _fun0018 }
case 297:
            var2 = var8.config;
            var4 = var2.features;
            var3 = var4.includes;
            var2 = _closure1_slot9;
            var2 = var2.CLOUD_GAMING_ACTIVITY;
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            if(var2) { _fun0018_ip = 298; continue _fun0018 }
case 299:
            var2 = 9;
            var2 = var6[var2];
            var3 = var4.bind(var5)(var2);
            var2 = var3.canLaunchActivity;
            var2 = var2.bind(var3)(var8);
            if(var2) { _fun0018_ip = 300; continue _fun0018 }
case 296:
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
case 300:
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
            if(var1) { _fun0018_ip = 301; continue _fun0018 }
case 262:
            var1 = var7.Ie9++s;
            _fun0018_ip = 302; continue _fun0018;
case 301:
            var1 = var7.E4kW5O;
case 302:
            var1 = var2.bind(var3)(var1);
            return var1;
case 298:
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
            var6 = _closure1_slot4;
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
            if(!var4) { _fun0019_ip = 303; continue _fun0019 }
case 304:
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
            if(var2) { _fun0019_ip = 305; continue _fun0019 }
case 306:
            var2 = var3.GYGb3A;
            var2 = var4.bind(var5)(var2);
            _fun0019_ip = 307; continue _fun0019;
case 305:
            var3 = var3.hh7Rb/;
            var2 = var4.bind(var5)(var3);
case 307:
            var1 = var2;
case 303:
            return var1;
        }
    };
    var3['usePremiumExtendableCopy'] = var4;
    var2 = function getRewardCodeRedemptionInstructions(arg1) {
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
            if(var6) { _fun0020_ip = 308; continue _fun0020 }
case 9:
            var3 = var11.platform;
case 308:
            if(!(var4 == var3)) { _fun0020_ip = 200; continue _fun0020 }
case 187:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 12;
            var6 = var10[var6];
            var6 = var8.bind(var1)(var6);
            var6 = var6.QuestRewardCodePlatforms;
            var3 = var6.CROSS_PLATFORM;
case 200:
            var6 = null;
            if(!var7) { _fun0020_ip = 57; continue _fun0020 }
case 198:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var9 = var8.bind(var1)(var7);
            var8 = var9.getRewardCodeQuestReward;
            var7 = {};
            var7['quest'] = var2;
            var12 = var4 == var11;
            var10 = undefined;
            if(var12) { _fun0020_ip = 309; continue _fun0020 }
case 310:
            var10 = var11.tier;
case 309:
            if(!(var4 == var10)) { _fun0020_ip = 311; continue _fun0020 }
case 312:
            var12 = var2.userStatus;
            var13 = var4 == var12;
            var11 = undefined;
            if(var13) { _fun0020_ip = 313; continue _fun0020 }
case 314:
            var11 = var12.claimedTier;
case 313:
            var10 = var11;
case 311:
            var7['idx'] = var10;
            var6 = var8.bind(var9)(var7);
case 57:
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
            if(var7) { _fun0020_ip = 315; continue _fun0020 }
case 235:
            var6 = var6.messages;
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0020_ip = 315; continue _fun0020 }
case 316:
            var2 = var6.redemptionInstructionsByPlatform;
case 315:
            if(!(var4 == var2)) { _fun0020_ip = 317; continue _fun0020 }
case 318:
            var5 = var5.messages;
            var2 = var5.redemptionInstructionsByPlatform;
case 317:
            var4 = var4 != var3;
            var1 = undefined;
            if(!var4) { _fun0020_ip = 319; continue _fun0020 }
case 320:
            var1 = var2[var3];
case 319:
            return var1;
        }
    };
    var3['getRewardCodeRedemptionInstructions'] = var2;
    return var1;
})();