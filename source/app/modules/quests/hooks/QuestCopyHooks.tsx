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
            var1 = 5;
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
    var _closure1_slot11 = var1;
    var1 = function getQuestInstructionsToWinRewardSponsored(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            var4 = 6;
            var4 = var6[var4];
            var8 = undefined;
            var4 = var5.bind(var8)(var4);
            var6 = var4.SharedQuestFields;
            var5 = var6.build;
            var4 = var14.config;
            var4 = var5.bind(var6)(var4);
            var7 = var4.defaultRewardNameWithArticle;
            var6 = var3.targetMinutes;
            var12 = var3.applications;
            if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var3 = {};
            var3['quest'] = var14;
            var3['rewardNameWithArticle'] = var7;
            var3['targetMinutes'] = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var5 = var4.bind(var8)(var1);
            var4 = var5.createGameSheetHook;
            var1 = {};
            var1['quest'] = var14;
            var1['sourceQuestContent'] = var13;
            var13 = null;
            if(!(var13 == var12)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var12 = new Array(0);
case 7:
            var1['applications'] = var12;
            var1['popoutTargetElementRef'] = var11;
            var1['onGameSheetOpened'] = var10;
            var1['onGameSheetClosed'] = var9;
            var1 = var4.bind(var5)(var1);
            var3['gameSheetHook'] = var1;
            var1 = function _getQuestInstructionsToWinRewardArenaPackage(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.quest;
                    var5 = var1.gameSheetHook;
                    var7 = var1.rewardNameWithArticle;
                    var6 = var1.targetMinutes;
                    var10 = {};
                    var3 = _closure1_slot6;
                    var13 = var3.PACKAGE_ACTION_ADVENTURE;
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 5;
                    var11 = var9[var8];
                    var3 = undefined;
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.H485IC;
                    var10[var13] = var11;
                    var11 = _closure1_slot6;
                    var13 = var11.PACKAGE_RPG_MMO;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.3XS8Nj;
                    var10[var13] = var11;
                    var11 = _closure1_slot6;
                    var13 = var11.PACKAGE_RACING_SPORTS;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.X+UCjo;
                    var10[var13] = var11;
                    var11 = _closure1_slot6;
                    var13 = var11.PACKAGE_SANDBOX_CREATIVE;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.6o4n1d;
                    var10[var13] = var11;
                    var11 = _closure1_slot6;
                    var13 = var11.PACKAGE_FAMILY_FRIENDLY;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.DUsNmZ;
                    var10[var13] = var11;
                    var11 = _closure1_slot6;
                    var13 = var11.PACKAGE_HOLIDAY_SEASON;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.cWP8/f;
                    var10[var13] = var11;
                    var11 = _closure1_slot6;
                    var11 = var11.PACKAGE_NEW_YEARS;
                    var9 = var9[var8];
                    var9 = var12.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9.8+sIJy;
                    var10[var11] = var9;
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
                    if(!var11) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var4 = var10[var9];
case 9:
                    if(!(var2 == var4)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.t;
                    var4 = var2.CDeHur;
case 11:
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
            _fun0002_ip = 13; continue _fun0002;
case 5:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 5;
            var4 = var9[var2];
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var3.bind(var8)(var2);
            var2 = var2.t;
            var3 = var2.1votFx;
            var2 = {};
            var2['rewardNameWithArticle'] = var7;
            var2['targetMinutes'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _getQuestsInstructionsToWinReward(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var11 = var1.quest;
            var10 = var1.taskDetails;
            var15 = var1.questContent;
            var16 = var1.thirdPartyTaskDetails;
            var9 = var1.sourceQuestContent;
            var8 = var1.withoutMarkdown;
            var17 = var1.currentUser;
            var7 = var1.popoutTargetElementRef;
            var6 = var1.onGameSheetOpened;
            var5 = var1.onGameSheetClosed;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 11;
            var12 = var1[var4];
            var4 = undefined;
            var14 = var3.bind(var4)(var12);
            var13 = var14.isPremium;
            var12 = _closure1_slot8;
            var12 = var12.TIER_2;
            var13 = var13.bind(var14)(var17, var12);
            var21 = 7;
            var12 = var1[var21];
            var17 = var3.bind(var4)(var12);
            var14 = var17.getCollectibleQuestRewardDuration;
            var12 = var11.config;
            var12 = var14.bind(var17)(var12);
            var1 = var1[var21];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isConsoleQuest;
            var1 = var1.bind(var3)(var11);
            if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var21];
            var14 = var14.bind(var4)(var3);
            var3 = var14.shouldUsePlayOnDesktopTask;
            var1 = var3.bind(var14)(var11);
case 14:
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var21];
            var14 = var14.bind(var4)(var3);
            var3 = var14.isSponsoredPlayQuest;
            var3 = var3.bind(var14)(var11);
            if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            if(var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isConsoleQuest;
            var1 = var1.bind(var3)(var11);
            if(var1) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var3 = var3.bind(var4)(var1);
            var1 = var3.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var3)(var11);
            if(var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var14 = var3.bind(var4)(var1);
            var3 = var14.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var11;
            var1 = var3.bind(var14)(var1);
            if(var1) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var3 = var3.bind(var4)(var1);
            var1 = var3.hasWatchVideoTasks;
            var1 = var1.bind(var3)(var11);
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            if(var1) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var1 = var3[var21];
            var17 = var14.bind(var4)(var1);
            var1 = var17.hasPlayActivityTask;
            var1 = var1.bind(var17)(var11);
            if(var1) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var17 = null;
            if(!(var17 == var16)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var18 = {};
            var18['quest'] = var11;
            var18['taskDetails'] = var10;
            var18['withoutMarkdown'] = var8;
            var18['hasNitro'] = var13;
            var18['collectibleRewardDuration'] = var12;
            var1 = var18.quest;
            var23 = var18.taskDetails;
            var19 = var18.withoutMarkdown;
            var26 = var18.hasNitro;
            var22 = var18.collectibleRewardDuration;
            var27 = _closure1_slot0;
            var18 = _closure1_slot2;
            var20 = 6;
            var20 = var18[var20];
            var20 = var27.bind(var4)(var20);
            var25 = var20.SharedQuestFields;
            var24 = var25.build;
            var20 = var1.config;
            var20 = var24.bind(var25)(var20);
            var20 = var20.defaultRewardNameWithArticle;
            var23 = var23.targetMinutes;
            var24 = var1.config;
            var24 = var24.messages;
            var24 = var24.gameTitle;
            var25 = var18[var21];
            var29 = var27.bind(var4)(var25);
            var28 = var29.isCollectibleQuestRewardPremiumExtendable;
            var25 = var1.config;
            var25 = var28.bind(var29)(var25);
            var18 = var18[var21];
            var27 = var27.bind(var4)(var18);
            var18 = var27.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var1 = var1.config;
            var1 = var18.bind(var27)(var1);
            var18 = _closure1_slot11;
            if(!var26) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            if(var25) { _fun0004_ip = 34; continue _fun0004 }
case 32:
            if(var25) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            if(!(var17 == var22)) { _fun0004_ip = 35; continue _fun0004 }
case 37:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var17 = 5;
            var17 = var26[var17];
            var17 = var25.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.hkJ+Gh;
            _fun0004_ip = 38; continue _fun0004;
case 35:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 5;
            var25 = var27[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.t;
            var17 = var25.BLyDvL;
case 38:
            _fun0004_ip = 39; continue _fun0004;
case 34:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 5;
            var25 = var27[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.t;
            if(var1) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var1 = var25.smG9qq;
            _fun0004_ip = 42; continue _fun0004;
case 40:
            var1 = var25.X8Yt//;
case 42:
            var17 = var1;
case 39:
            var1 = {};
            var1['gameTitle'] = var24;
            var1['streamingDurationRequirement'] = var23;
            var1['duration'] = var22;
            var1['questReward'] = var20;
            var1 = var18.bind(var4)(var17, var1, var19);
            _fun0004_ip = 43; continue _fun0004;
case 30:
            var1 = var16.description;
case 43:
            _fun0004_ip = 44; continue _fun0004;
case 28:
            var16 = {};
            var16['quest'] = var11;
            var16['taskDetails'] = var10;
            var16['withoutMarkdown'] = var8;
            var16['questContent'] = var15;
            var24 = var16.quest;
            var15 = var16.taskDetails;
            var19 = var16.withoutMarkdown;
            var17 = var16.questContent;
            var22 = var15.targetMinutes;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var18 = 6;
            var18 = var15[var18];
            var18 = var16.bind(var4)(var18);
            var23 = var18.SharedQuestFields;
            var20 = var23.build;
            var18 = var24.config;
            var18 = var20.bind(var23)(var18);
            var20 = var18.defaultRewardNameWithArticle;
            var15 = var15[var21];
            var16 = var16.bind(var4)(var15);
            var15 = var16.isPlayAnyActivityQuest;
            var15 = var15.bind(var16)(var24);
            if(var15) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var15 = var24.config;
            var18 = var15.features;
            var16 = var18.includes;
            var15 = _closure1_slot6;
            var15 = var15.CLOUD_GAMING_ACTIVITY;
            var15 = var16.bind(var18)(var15);
            if(var15) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var18 = _closure1_slot11;
            var16 = _closure1_slot0;
            var23 = _closure1_slot2;
            var15 = 5;
            var15 = var23[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.UuzHh4;
            var15 = {};
            var23 = var24.config;
            var23 = var23.application;
            var23 = var23.name;
            var15['activityName'] = var23;
            var15['streamingDurationRequirement'] = var22;
            var15['questReward'] = var20;
            var15 = var18.bind(var4)(var16, var15, var19);
            _fun0004_ip = 49; continue _fun0004;
case 47:
            var18 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 8;
            var16 = var23[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.QuestContent;
            var16 = var16.QUESTS_EMBED;
            if(!(var17 !== var16)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var18 = _closure1_slot11;
            var17 = _closure1_slot0;
            var26 = _closure1_slot2;
            var16 = 5;
            var16 = var26[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.0NNM3t;
            var16 = {};
            var23 = var24.config;
            var23 = var23.application;
            var23 = var23.name;
            var16['activityName'] = var23;
            var23 = _closure1_slot9;
            var16['providerName'] = var23;
            var25 = _closure1_slot1;
            var23 = 9;
            var23 = var26[var23];
            var26 = var25.bind(var4)(var23);
            var25 = var26.getArticleURL;
            var23 = _closure1_slot7;
            var23 = var23.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST;
            var23 = var25.bind(var26)(var23);
            var16['providerLink'] = var23;
            var16['streamingDurationRequirement'] = var22;
            var16['questReward'] = var20;
            var16 = var18.bind(var4)(var17, var16, var19);
            _fun0004_ip = 52; continue _fun0004;
case 50:
            var23 = _closure1_slot11;
            var18 = _closure1_slot0;
            var26 = _closure1_slot2;
            var17 = 5;
            var17 = var26[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.C+2RxM;
            var17 = {};
            var24 = var24.config;
            var24 = var24.application;
            var24 = var24.name;
            var17['activityName'] = var24;
            var24 = _closure1_slot9;
            var17['providerName'] = var24;
            var25 = _closure1_slot1;
            var24 = 9;
            var24 = var26[var24];
            var26 = var25.bind(var4)(var24);
            var25 = var26.getArticleURL;
            var24 = _closure1_slot7;
            var24 = var24.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST;
            var24 = var25.bind(var26)(var24);
            var17['providerLink'] = var24;
            var17['questReward'] = var20;
            var16 = var23.bind(var4)(var18, var17, var19);
case 52:
            var15 = var16;
case 49:
            _fun0004_ip = 53; continue _fun0004;
case 45:
            var18 = _closure1_slot11;
            var17 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 5;
            var16 = var23[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.VYwSSk;
            var16 = {};
            var16['streamingDurationRequirement'] = var22;
            var16['questReward'] = var20;
            var15 = var18.bind(var4)(var17, var16, var19);
case 53:
            var1 = var15;
case 44:
            _fun0004_ip = 54; continue _fun0004;
case 26:
            var16 = 6;
            var3 = var3[var16];
            var3 = var14.bind(var4)(var3);
            var15 = var3.SharedQuestFields;
            var14 = var15.build;
            var3 = var11.config;
            var3 = var14.bind(var15)(var3);
            var15 = var3.defaultWatchVideoTask;
            var14 = null;
            var17 = var14 == var15;
            var3 = undefined;
            if(var17) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var15 = var15.messages;
            var3 = var15.videoTitle;
case 55:
            var15 = var14 != var3;
            var17 = 'video';
            if(!var15) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var17 = var3;
case 57:
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var16 = var3[var16];
            var16 = var15.bind(var4)(var16);
            var19 = var16.SharedQuestFields;
            var18 = var19.build;
            var16 = var11.config;
            var16 = var18.bind(var19)(var16);
            var16 = var16.defaultRewardNameWithArticle;
            var18 = var3[var21];
            var20 = var15.bind(var4)(var18);
            var19 = var20.isCollectibleQuestRewardPremiumExtendable;
            var18 = var11.config;
            var18 = var19.bind(var20)(var18);
            var3 = var3[var21];
            var19 = var15.bind(var4)(var3);
            var15 = var19.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var11.config;
            var3 = var15.bind(var19)(var3);
            var15 = _closure1_slot11;
            if(!var18) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            if(var13) { _fun0004_ip = 61; continue _fun0004 }
case 59:
            if(var18) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            if(!(var14 == var12)) { _fun0004_ip = 62; continue _fun0004 }
case 64:
            var18 = var11.id;
            var14 = _closure1_slot5;
            if(!(var18 !== var14)) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 5;
            var14 = var19[var14];
            var14 = var18.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.g+InPD;
            _fun0004_ip = 67; continue _fun0004;
case 65:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var18 = 5;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var14 = var18.Rsd5bG;
case 67:
            _fun0004_ip = 68; continue _fun0004;
case 62:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var18 = 5;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var14 = var18.W/HkLC;
case 68:
            _fun0004_ip = 69; continue _fun0004;
case 61:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var18 = 5;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            if(var3) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var3 = var18.vs/xBg;
            _fun0004_ip = 72; continue _fun0004;
case 70:
            var3 = var18.xqX+var7;
case 72:
            var14 = var3;
case 69:
            var3 = {};
            var3['videoTitle'] = var17;
            var3['rewardNameWithArticle'] = var16;
            var3['duration'] = var12;
            var1 = var15.bind(var4)(var14, var3, var8);
case 54:
            _fun0004_ip = 73; continue _fun0004;
case 24:
            var15 = {};
            var15['quest'] = var11;
            var15['taskDetails'] = var10;
            var15['withoutMarkdown'] = var8;
            var3 = var15.quest;
            var14 = var15.taskDetails;
            var16 = var15.withoutMarkdown;
            var17 = var14.targetMinutes;
            var3 = var3.config;
            var3 = var3.messages;
            var18 = var3.gameTitle;
            var15 = _closure1_slot11;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 5;
            var3 = var19[var3];
            var3 = var14.bind(var4)(var3);
            var3 = var3.t;
            var14 = var3.a/ia7O;
            var3 = {};
            var3['gameTitle'] = var18;
            var3['streamingDurationRequirement'] = var17;
            var1 = var15.bind(var4)(var14, var3, var16);
case 73:
            _fun0004_ip = 74; continue _fun0004;
case 22:
            var3 = {};
            var3['quest'] = var11;
            var3['taskDetails'] = var10;
            var3['withoutMarkdown'] = var8;
            var3['hasNitro'] = var13;
            var3['collectibleRewardDuration'] = var12;
            var15 = var3.quest;
            var14 = var3.taskDetails;
            var16 = var3.withoutMarkdown;
            var23 = var3.hasNitro;
            var18 = var3.collectibleRewardDuration;
            var22 = _closure1_slot0;
            var3 = _closure1_slot2;
            var17 = 6;
            var17 = var3[var17];
            var17 = var22.bind(var4)(var17);
            var20 = var17.SharedQuestFields;
            var19 = var20.build;
            var17 = var15.config;
            var17 = var19.bind(var20)(var17);
            var17 = var17.defaultRewardNameWithArticle;
            var19 = var14.targetMinutes;
            var14 = var15.config;
            var14 = var14.messages;
            var20 = var14.gameTitle;
            var14 = var3[var21];
            var25 = var22.bind(var4)(var14);
            var24 = var25.isCollectibleQuestRewardPremiumExtendable;
            var14 = var15.config;
            var14 = var24.bind(var25)(var14);
            var3 = var3[var21];
            var24 = var22.bind(var4)(var3);
            var22 = var24.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var15.config;
            var3 = var22.bind(var24)(var3);
            var15 = var15.config;
            var24 = var15.features;
            var22 = var24.includes;
            var15 = _closure1_slot6;
            var15 = var15.NON_GAMING_PLAY_QUEST;
            var22 = var22.bind(var24)(var15);
            var15 = _closure1_slot11;
            if(!var23) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            if(var14) { _fun0004_ip = 77; continue _fun0004 }
case 75:
            if(var14) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var14 = null;
            if(!(var14 == var18)) { _fun0004_ip = 78; continue _fun0004 }
case 80:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var14 = 5;
            var14 = var24[var14];
            var14 = var23.bind(var4)(var14);
            var23 = var14.t;
            if(var22) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var14 = var23.FZL5Q0;
            _fun0004_ip = 83; continue _fun0004;
case 81:
            var14 = var23.03VJqq;
case 83:
            _fun0004_ip = 84; continue _fun0004;
case 78:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 5;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var24 = var23.t;
            if(var22) { _fun0004_ip = 85; continue _fun0004 }
case 86:
            var23 = var24.AwuMRU;
            _fun0004_ip = 87; continue _fun0004;
case 85:
            var23 = var24.enQ3jY;
case 87:
            var14 = var23;
case 84:
            _fun0004_ip = 88; continue _fun0004;
case 77:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 5;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            if(var3) { _fun0004_ip = 89; continue _fun0004 }
case 90:
            if(var22) { _fun0004_ip = 91; continue _fun0004 }
case 92:
            var3 = var23.ziB0HB;
            _fun0004_ip = 93; continue _fun0004;
case 91:
            var3 = var23.1AcTqq;
case 93:
            _fun0004_ip = 94; continue _fun0004;
case 89:
            if(var22) { _fun0004_ip = 95; continue _fun0004 }
case 96:
            var22 = var23.eb/SnZ;
            _fun0004_ip = 97; continue _fun0004;
case 95:
            var22 = var23.ztXW8f;
case 97:
            var3 = var22;
case 94:
            var14 = var3;
case 88:
            var3 = {};
            var3['gameTitle'] = var20;
            var3['streamingDurationRequirement'] = var19;
            var3['rewardNameWithArticle'] = var17;
            var3['duration'] = var18;
            var3['questReward'] = var17;
            var1 = var15.bind(var4)(var14, var3, var16);
case 74:
            _fun0004_ip = 98; continue _fun0004;
case 20:
            var15 = {};
            var15['quest'] = var11;
            var15['taskDetails'] = var10;
            var15['withoutMarkdown'] = var8;
            var15['hasNitro'] = var13;
            var15['collectibleRewardDuration'] = var12;
            var3 = var15.quest;
            var14 = var15.taskDetails;
            var16 = var15.withoutMarkdown;
            var22 = var15.hasNitro;
            var18 = var15.collectibleRewardDuration;
            var23 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = 6;
            var17 = var15[var17];
            var17 = var23.bind(var4)(var17);
            var20 = var17.SharedQuestFields;
            var19 = var20.build;
            var17 = var3.config;
            var17 = var19.bind(var20)(var17);
            var19 = var17.defaultRewardNameWithArticle;
            var17 = var14.targetMinutes;
            var14 = var3.config;
            var14 = var14.messages;
            var20 = var14.gameTitle;
            var14 = var15[var21];
            var25 = var23.bind(var4)(var14);
            var24 = var25.isCollectibleQuestRewardPremiumExtendable;
            var14 = var3.config;
            var14 = var24.bind(var25)(var14);
            var15 = var15[var21];
            var23 = var23.bind(var4)(var15);
            var15 = var23.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var3.config;
            var3 = var15.bind(var23)(var3);
            var15 = _closure1_slot11;
            if(!var22) { _fun0004_ip = 99; continue _fun0004 }
case 100:
            if(var14) { _fun0004_ip = 101; continue _fun0004 }
case 99:
            if(var14) { _fun0004_ip = 102; continue _fun0004 }
case 103:
            var14 = null;
            if(!(var14 == var18)) { _fun0004_ip = 102; continue _fun0004 }
case 104:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var14 = 5;
            var14 = var23[var14];
            var14 = var22.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.NIimTk;
            _fun0004_ip = 105; continue _fun0004;
case 102:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 5;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var14 = var22.AwuMRU;
case 105:
            _fun0004_ip = 106; continue _fun0004;
case 101:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 5;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            if(var3) { _fun0004_ip = 107; continue _fun0004 }
case 108:
            var3 = var22.ziB0HB;
            _fun0004_ip = 109; continue _fun0004;
case 107:
            var3 = var22.eb/SnZ;
case 109:
            var14 = var3;
case 106:
            var3 = {};
            var3['gameTitle'] = var20;
            var3['targetMinutes'] = var17;
            var3['rewardNameWithArticle'] = var19;
            var3['duration'] = var18;
            var3['streamingDurationRequirement'] = var17;
            var1 = var15.bind(var4)(var14, var3, var16);
case 98:
            _fun0004_ip = 110; continue _fun0004;
case 18:
            var3 = {};
            var3['quest'] = var11;
            var3['taskDetails'] = var10;
            var3['withoutMarkdown'] = var8;
            var3['hasNitro'] = var13;
            var3['collectibleRewardDuration'] = var12;
            var13 = var3.quest;
            var12 = var3.taskDetails;
            var14 = var3.withoutMarkdown;
            var20 = var3.hasNitro;
            var16 = var3.collectibleRewardDuration;
            var19 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = 6;
            var15 = var3[var15];
            var15 = var19.bind(var4)(var15);
            var18 = var15.SharedQuestFields;
            var17 = var18.build;
            var15 = var13.config;
            var15 = var17.bind(var18)(var15);
            var17 = var15.defaultRewardNameWithArticle;
            var15 = var12.targetMinutes;
            var12 = var13.config;
            var12 = var12.messages;
            var18 = var12.gameTitle;
            var12 = var3[var21];
            var23 = var19.bind(var4)(var12);
            var22 = var23.isCollectibleQuestRewardPremiumExtendable;
            var12 = var13.config;
            var12 = var22.bind(var23)(var12);
            var3 = var3[var21];
            var21 = var19.bind(var4)(var3);
            var19 = var21.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var13.config;
            var3 = var19.bind(var21)(var3);
            var13 = var13.config;
            var21 = var13.features;
            var19 = var21.includes;
            var13 = _closure1_slot6;
            var13 = var13.NON_GAMING_PLAY_QUEST;
            var19 = var19.bind(var21)(var13);
            var13 = _closure1_slot11;
            if(!var20) { _fun0004_ip = 111; continue _fun0004 }
case 112:
            if(var12) { _fun0004_ip = 113; continue _fun0004 }
case 111:
            if(var12) { _fun0004_ip = 114; continue _fun0004 }
case 115:
            var12 = null;
            if(!(var12 == var16)) { _fun0004_ip = 114; continue _fun0004 }
case 116:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var12 = 5;
            var12 = var21[var12];
            var12 = var20.bind(var4)(var12);
            var20 = var12.t;
            if(var19) { _fun0004_ip = 117; continue _fun0004 }
case 118:
            var12 = var20.NIimTk;
            _fun0004_ip = 119; continue _fun0004;
case 117:
            var12 = var20.e+K3xM;
case 119:
            _fun0004_ip = 120; continue _fun0004;
case 114:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var20 = 5;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.t;
            if(var19) { _fun0004_ip = 121; continue _fun0004 }
case 122:
            var20 = var21.AwuMRU;
            _fun0004_ip = 123; continue _fun0004;
case 121:
            var20 = var21.enQ3jY;
case 123:
            var12 = var20;
case 120:
            _fun0004_ip = 124; continue _fun0004;
case 113:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var20 = 5;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            if(var3) { _fun0004_ip = 125; continue _fun0004 }
case 126:
            if(var19) { _fun0004_ip = 127; continue _fun0004 }
case 128:
            var3 = var20.ziB0HB;
            _fun0004_ip = 129; continue _fun0004;
case 127:
            var3 = var20.1AcTqq;
case 129:
            _fun0004_ip = 130; continue _fun0004;
case 125:
            if(var19) { _fun0004_ip = 131; continue _fun0004 }
case 132:
            var19 = var20.eb/SnZ;
            _fun0004_ip = 133; continue _fun0004;
case 131:
            var19 = var20.ztXW8f;
case 133:
            var3 = var19;
case 130:
            var12 = var3;
case 124:
            var3 = {};
            var3['gameTitle'] = var18;
            var3['streamingDurationRequirement'] = var15;
            var3['rewardNameWithArticle'] = var17;
            var3['duration'] = var16;
            var3['targetMinutes'] = var15;
            var1 = var13.bind(var4)(var12, var3, var14);
case 110:
            _fun0004_ip = 134; continue _fun0004;
case 16:
            var3 = _closure1_slot12;
            var2 = {};
            var2['quest'] = var11;
            var2['taskDetails'] = var10;
            var2['sourceQuestContent'] = var9;
            var2['withoutMarkdown'] = var8;
            var2['popoutTargetElementRef'] = var7;
            var2['onGameSheetOpened'] = var6;
            var2['onGameSheetClosed'] = var5;
            var1 = var3.bind(var4)(var2);
case 134:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var4 = function getQuestsInstructionsToWinReward(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot13;
            var2 = {};
            var8 = var2;
            var7 = var1;
            var5 = copyDataProperties(var8, var7);
            var5 = var1.currentUser;
            var6 = null;
            if(!(var6 == var5)) { _fun0005_ip = 135; continue _fun0005 }
case 136:
            var6 = _closure1_slot4;
            var4 = var6.getCurrentUser;
            var5 = var4.bind(var6)();
case 135:
            var4 = 'currentUser';
            var2[var4] = var5;
            var5 = var1.popoutTargetElementRef;
            var4 = 'popoutTargetElementRef';
            var2[var4] = var5;
            var5 = var1.onGameSheetOpened;
            var4 = 'onGameSheetOpened';
            var2[var4] = var5;
            var4 = var1.onGameSheetClosed;
            var1 = 'onGameSheetClosed';
            var2[var1] = var4;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var1 = function useSimplifiedQuestTaskType(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure2_slot0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 7;
                var1 = var1[var6];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.isConsoleQuest;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0006_ip = 137; continue _fun0006 }
case 138:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.hasPlayActivityTask;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0006_ip = 137; continue _fun0006 }
case 139:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var7 = var3.bind(var5)(var1);
                var3 = var7.hasStreamOnDesktopTask;
                var1 = {};
                var1['quest'] = var4;
                var1 = var3.bind(var7)(var1);
                if(var1) { _fun0006_ip = 140; continue _fun0006 }
case 141:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.hasWatchVideoTasks;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0006_ip = 142; continue _fun0006 }
case 143:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.isInGameQuest;
                var1 = var1.bind(var3)(var4);
                var3 = _closure1_slot10;
                if(var1) { _fun0006_ip = 144; continue _fun0006 }
case 145:
                var1 = var3.PLAY;
                _fun0006_ip = 146; continue _fun0006;
case 144:
                var1 = var3.IN_GAME;
case 146:
                _fun0006_ip = 147; continue _fun0006;
case 142:
                var3 = _closure1_slot10;
                var1 = var3.WATCH_VIDEO;
case 147:
                _fun0006_ip = 148; continue _fun0006;
case 140:
                var3 = _closure1_slot10;
                var1 = var3.STREAM;
case 148:
                _fun0006_ip = 149; continue _fun0006;
case 137:
                var2 = _closure1_slot10;
                var1 = var2.PLAY;
case 149:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var12 = 0;
    var9 = var7[var12];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var11 = 1;
    var5 = var7[var11];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var10 = 2;
    var5 = var7[var10];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ORBS_INTRO_QUEST_ID;
    var _closure1_slot5 = var8;
    var5 = var5.QuestVariants;
    var _closure1_slot6 = var5;
    var9 = 3;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.HelpdeskArticles;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PremiumTypes;
    var _closure1_slot8 = var5;
    var5 = 'NVIDIA GeForce NOW';
    var _closure1_slot9 = var5;
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
    var _closure1_slot10 = var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/hooks/QuestCopyHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getQuestsInstructionsToWinReward'] = var4;
    var4 = function useQuestsInstructionsToWinReward(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var8 = var5.quest;
            var12 = var5.questContent;
            var11 = var5.sourceQuestContent;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 12;
            var6 = var9[var2];
            var3 = undefined;
            var10 = var4.bind(var3)(var6);
            var7 = var10.useConnectedConsoleLinkOnClick;
            var6 = {};
            var6['quest'] = var8;
            var6['questContent'] = var12;
            var6['sourceQuestContent'] = var11;
            var7 = var7.bind(var10)(var6);
            var6 = 13;
            var6 = var9[var6];
            var12 = var4.bind(var3)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var11.bind(var12)(var10, var6);
            var2 = var9[var2];
            var4 = var4.bind(var3)(var2);
            var2 = var4.useThirdPartyTaskDetails;
            var4 = var2.bind(var4)(var8);
            var2 = _closure1_slot14;
            var1 = {};
            var15 = var1;
            var14 = var5;
            var5 = copyDataProperties(var15, var14);
            var5 = 'connectedConsoleLinkOnClick';
            var1[var5] = var7;
            var5 = 'currentUser';
            var1[var5] = var6;
            var6 = false;
            var5 = 'withoutMarkdown';
            var1[var5] = var6;
            var5 = null;
            var6 = var5 != var4;
            var5 = undefined;
            if(!var6) { _fun0007_ip = 150; continue _fun0007 }
case 151:
            var5 = var4;
case 150:
            var4 = 'thirdPartyTaskDetails';
            var1[var4] = var5;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useQuestsInstructionsToWinReward'] = var4;
    var4 = function usePrimaryCtaCopy(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = var2.quest;
            var3 = var2.shortText;
            var6 = undefined;
            if(!(var3 === var6)) { _fun0008_ip = 152; continue _fun0008 }
case 153:
            var3 = false;
case 152:
            var4 = _closure1_slot15;
            var5 = var4.bind(var6)(var1);
            var4 = _closure1_slot10;
            var4 = var4.PLAY;
            if(!(var4 !== var5)) { _fun0008_ip = 154; continue _fun0008 }
case 155:
            var4 = _closure1_slot10;
            var4 = var4.STREAM;
            if(!(var4 !== var5)) { _fun0008_ip = 156; continue _fun0008 }
case 157:
            var4 = _closure1_slot10;
            var4 = var4.WATCH_VIDEO;
            if(!(var4 !== var5)) { _fun0008_ip = 158; continue _fun0008 }
case 159:
            var4 = _closure1_slot10;
            var4 = var4.IN_GAME;
            if(!(var4 !== var5)) { _fun0008_ip = 160; continue _fun0008 }
case 161:
            return var6;
case 160:
            var4 = var1.config;
            var7 = var4.features;
            var5 = var7.includes;
            var4 = _closure1_slot6;
            var4 = var4.START_QUEST_CTA;
            var9 = var5.bind(var7)(var4);
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var10 = 5;
            var7 = var4[var10];
            var7 = var5.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            if(var9) { _fun0008_ip = 144; continue _fun0008 }
case 162:
            var4 = var4[var10];
            var4 = var5.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.l7E81t;
            var4 = var7.bind(var8)(var4);
            _fun0008_ip = 163; continue _fun0008;
case 144:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var10];
            var5 = var9.bind(var6)(var5);
            var9 = var5.t;
            if(var3) { _fun0008_ip = 164; continue _fun0008 }
case 165:
            var5 = var9.hRIVy8;
            _fun0008_ip = 166; continue _fun0008;
case 164:
            var5 = var9.CkUzLS;
case 166:
            var4 = var7.bind(var8)(var5);
case 163:
            return var4;
case 158:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 5;
            var5 = var9[var4];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.umdNio;
            var4 = var5.bind(var7)(var4);
            return var4;
case 156:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 5;
            var5 = var9[var4];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.l7E81t;
            var4 = var5.bind(var7)(var4);
            return var4;
case 154:
            var4 = var1.config;
            var7 = var4.features;
            var5 = var7.includes;
            var4 = _closure1_slot6;
            var4 = var4.CLOUD_GAMING_ACTIVITY;
            var4 = var5.bind(var7)(var4);
            if(var4) { _fun0008_ip = 167; continue _fun0008 }
case 168:
            var1 = var1.config;
            var5 = var1.features;
            var4 = var5.includes;
            var1 = _closure1_slot6;
            var1 = var1.START_QUEST_CTA;
            var8 = var4.bind(var5)(var1);
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 5;
            var4 = var1[var9];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            if(var8) { _fun0008_ip = 169; continue _fun0008 }
case 170:
            var1 = var1[var9];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.l7E81t;
            var1 = var4.bind(var5)(var1);
            _fun0008_ip = 171; continue _fun0008;
case 169:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var6)(var7);
            var7 = var7.t;
            if(var3) { _fun0008_ip = 172; continue _fun0008 }
case 173:
            var3 = var7.Ie9++v;
            _fun0008_ip = 174; continue _fun0008;
case 172:
            var3 = var7.E4kW5O;
case 174:
            var1 = var4.bind(var5)(var3);
case 171:
            _fun0008_ip = 175; continue _fun0008;
case 167:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.+qoymJ;
            var1 = var3.bind(var4)(var2);
case 175:
            return var1;
        }
    };
    var3['usePrimaryCtaCopy'] = var4;
    var2 = function usePremiumExtendableCopy(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var4 = new Array(1);
            var4[0] = var7;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isCollectibleQuestRewardPremiumExtendable;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var2, var4);
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
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
            if(!var4) { _fun0009_ip = 176; continue _fun0009 }
case 177:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 5;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            if(var2) { _fun0009_ip = 178; continue _fun0009 }
case 179:
            var2 = var3.GYGb3N;
            var2 = var4.bind(var5)(var2);
            _fun0009_ip = 180; continue _fun0009;
case 178:
            var3 = var3.hh7Rb2;
            var2 = var4.bind(var5)(var3);
case 180:
            var1 = var2;
case 176:
            return var1;
        }
    };
    var3['usePremiumExtendableCopy'] = var2;
    return var1;
})();