// app/modules/quests/hooks/QuestCopyHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            var4 = 12;
            var4 = var6[var4];
            var8 = undefined;
            var6 = var5.bind(var8)(var4);
            var5 = var6.getDefaultRewardNameWithArticle;
            var4 = var14.config;
            var7 = var5.bind(var6)(var4);
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
            var1 = 15;
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
                    var10[var13] = var11;
                    var11 = _closure1_slot9;
                    var13 = var11.PACKAGE_RPG_MMO;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.3XS8Ni;
                    var10[var13] = var11;
                    var11 = _closure1_slot9;
                    var13 = var11.PACKAGE_RACING_SPORTS;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.X+UCju;
                    var10[var13] = var11;
                    var11 = _closure1_slot9;
                    var13 = var11.PACKAGE_SANDBOX_CREATIVE;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.6o4n1Q;
                    var10[var13] = var11;
                    var11 = _closure1_slot9;
                    var13 = var11.PACKAGE_FAMILY_FRIENDLY;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.DUsNmf;
                    var10[var13] = var11;
                    var11 = _closure1_slot9;
                    var13 = var11.PACKAGE_HOLIDAY_SEASON;
                    var11 = var9[var8];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.cWP8/Z;
                    var10[var13] = var11;
                    var11 = _closure1_slot9;
                    var11 = var11.PACKAGE_NEW_YEARS;
                    var9 = var9[var8];
                    var9 = var12.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9.8+sIJz;
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
                    var4 = var2.CDeHul;
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
            var2 = 7;
            var4 = var9[var2];
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var3.bind(var8)(var2);
            var2 = var2.t;
            var3 = var2.1votF6;
            var2 = {};
            var2['rewardNameWithArticle'] = var7;
            var2['targetMinutes'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _getQuestsInstructionsToWinReward(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var11 = var1.quest;
            var10 = var1.taskDetails;
            var3 = var1.questContent;
            var16 = var1.thirdPartyTaskDetails;
            var9 = var1.sourceQuestContent;
            var8 = var1.withoutMarkdown;
            var17 = var1.currentUser;
            var7 = var1.popoutTargetElementRef;
            var6 = var1.onGameSheetOpened;
            var5 = var1.onGameSheetClosed;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 16;
            var1 = var14[var1];
            var4 = undefined;
            var13 = var15.bind(var4)(var1);
            var12 = var13.isPremium;
            var1 = _closure1_slot11;
            var1 = var1.TIER_2;
            var13 = var12.bind(var13)(var17, var1);
            var21 = 12;
            var1 = var14[var21];
            var17 = var15.bind(var4)(var1);
            var12 = var17.getCollectibleQuestRewardDuration;
            var1 = var11.config;
            var12 = var12.bind(var17)(var1);
            var1 = 10;
            var14 = var14[var1];
            var15 = var15.bind(var4)(var14);
            var14 = var15.isConsoleQuest;
            var14 = var14.bind(var15)(var11);
            if(!var14) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var1];
            var17 = var17.bind(var4)(var15);
            var15 = var17.shouldUsePlayOnDesktopTask;
            var14 = var15.bind(var17)(var11);
case 14:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var18 = 9;
            var15 = var15[var18];
            var17 = var17.bind(var4)(var15);
            var15 = var17.isSponsoredPlayQuest;
            var15 = var15.bind(var17)(var11);
            if(var15) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            if(var14) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var1];
            var15 = var15.bind(var4)(var14);
            var14 = var15.isConsoleQuest;
            var14 = var14.bind(var15)(var11);
            if(var14) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var1];
            var15 = var15.bind(var4)(var14);
            var14 = var15.shouldUsePlayOnDesktopTask;
            var14 = var14.bind(var15)(var11);
            if(var14) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var21];
            var17 = var15.bind(var4)(var14);
            var15 = var17.isTieredRewardCodeQuest;
            var14 = {};
            var14['quest'] = var11;
            var14 = var15.bind(var17)(var14);
            if(var14) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var1];
            var15 = var15.bind(var4)(var14);
            var14 = var15.hasWatchVideoTasks;
            var17 = var14.bind(var15)(var11);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            if(var17) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var1 = var15[var1];
            var17 = var14.bind(var4)(var1);
            var1 = var17.hasPlayActivityTask;
            var1 = var1.bind(var17)(var11);
            if(var1) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var17 = null;
            if(!(var17 == var16)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var19 = {};
            var19['quest'] = var11;
            var19['taskDetails'] = var10;
            var19['withoutMarkdown'] = var8;
            var19['hasNitro'] = var13;
            var19['collectibleRewardDuration'] = var12;
            var1 = var19.quest;
            var24 = var19.taskDetails;
            var20 = var19.withoutMarkdown;
            var27 = var19.hasNitro;
            var23 = var19.collectibleRewardDuration;
            var28 = _closure1_slot0;
            var19 = _closure1_slot2;
            var22 = var19[var21];
            var26 = var28.bind(var4)(var22);
            var25 = var26.getDefaultRewardNameWithArticle;
            var22 = var1.config;
            var22 = var25.bind(var26)(var22);
            var24 = var24.targetMinutes;
            var25 = var1.config;
            var25 = var25.messages;
            var25 = var25.gameTitle;
            var26 = var19[var21];
            var30 = var28.bind(var4)(var26);
            var29 = var30.isCollectibleQuestRewardPremiumExtendable;
            var26 = var1.config;
            var26 = var29.bind(var30)(var26);
            var19 = var19[var21];
            var28 = var28.bind(var4)(var19);
            var19 = var28.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var1 = var1.config;
            var1 = var19.bind(var28)(var1);
            var19 = _closure1_slot14;
            if(!var27) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            if(var26) { _fun0004_ip = 34; continue _fun0004 }
case 32:
            if(var26) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            if(!(var17 == var23)) { _fun0004_ip = 35; continue _fun0004 }
case 37:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var17 = 7;
            var17 = var27[var17];
            var17 = var26.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.hkJ+Gs;
            _fun0004_ip = 38; continue _fun0004;
case 35:
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var26 = 7;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.t;
            var17 = var26.BLyDvO;
case 38:
            _fun0004_ip = 39; continue _fun0004;
case 34:
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var26 = 7;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.t;
            if(var1) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var1 = var26.smG9ql;
            _fun0004_ip = 42; continue _fun0004;
case 40:
            var1 = var26.X8Yt/1;
case 42:
            var17 = var1;
case 39:
            var1 = {};
            var1['gameTitle'] = var25;
            var1['streamingDurationRequirement'] = var24;
            var1['duration'] = var23;
            var1['questReward'] = var22;
            var1 = var19.bind(var4)(var17, var1, var20);
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
            var16['questContent'] = var3;
            var24 = var16.quest;
            var3 = var16.taskDetails;
            var19 = var16.withoutMarkdown;
            var17 = var16.questContent;
            var22 = var3.targetMinutes;
            var16 = _closure1_slot0;
            var3 = _closure1_slot2;
            var20 = var3[var21];
            var25 = var16.bind(var4)(var20);
            var23 = var25.getDefaultRewardNameWithArticle;
            var20 = var24.config;
            var20 = var23.bind(var25)(var20);
            var3 = var3[var18];
            var16 = var16.bind(var4)(var3);
            var3 = var16.isPlayAnyActivityQuest;
            var3 = var3.bind(var16)(var24);
            if(var3) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var3 = var24.config;
            var18 = var3.features;
            var16 = var18.includes;
            var3 = _closure1_slot9;
            var3 = var3.CLOUD_GAMING_ACTIVITY;
            var3 = var16.bind(var18)(var3);
            if(var3) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var18 = _closure1_slot14;
            var16 = _closure1_slot0;
            var23 = _closure1_slot2;
            var3 = 7;
            var3 = var23[var3];
            var3 = var16.bind(var4)(var3);
            var3 = var3.t;
            var16 = var3.UuzHh8;
            var3 = {};
            var23 = var24.config;
            var23 = var23.messages;
            var23 = var23.gameTitle;
            var3['activityName'] = var23;
            var3['streamingDurationRequirement'] = var22;
            var3['questReward'] = var20;
            var3 = var18.bind(var4)(var16, var3, var19);
            _fun0004_ip = 49; continue _fun0004;
case 47:
            var18 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 13;
            var16 = var23[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.QuestContent;
            var16 = var16.QUESTS_EMBED;
            if(!(var17 !== var16)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var18 = _closure1_slot14;
            var17 = _closure1_slot0;
            var26 = _closure1_slot2;
            var16 = 7;
            var16 = var26[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.0NNM3l;
            var16 = {};
            var23 = var24.config;
            var23 = var23.messages;
            var23 = var23.gameTitle;
            var16['activityName'] = var23;
            var23 = _closure1_slot12;
            var16['providerName'] = var23;
            var25 = _closure1_slot1;
            var23 = 14;
            var23 = var26[var23];
            var26 = var25.bind(var4)(var23);
            var25 = var26.getArticleURL;
            var23 = _closure1_slot10;
            var23 = var23.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST;
            var23 = var25.bind(var26)(var23);
            var16['providerLink'] = var23;
            var16['streamingDurationRequirement'] = var22;
            var16['questReward'] = var20;
            var16 = var18.bind(var4)(var17, var16, var19);
            _fun0004_ip = 52; continue _fun0004;
case 50:
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
            var24 = 14;
            var24 = var26[var24];
            var26 = var25.bind(var4)(var24);
            var25 = var26.getArticleURL;
            var24 = _closure1_slot10;
            var24 = var24.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST;
            var24 = var25.bind(var26)(var24);
            var17['providerLink'] = var24;
            var17['questReward'] = var20;
            var16 = var23.bind(var4)(var18, var17, var19);
case 52:
            var3 = var16;
case 49:
            _fun0004_ip = 53; continue _fun0004;
case 45:
            var18 = _closure1_slot14;
            var17 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 7;
            var16 = var23[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.VYwSSu;
            var16 = {};
            var16['streamingDurationRequirement'] = var22;
            var16['questReward'] = var20;
            var3 = var18.bind(var4)(var17, var16, var19);
case 53:
            var1 = var3;
case 44:
            _fun0004_ip = 54; continue _fun0004;
case 26:
            var3 = 11;
            var3 = var15[var3];
            var15 = var14.bind(var4)(var3);
            var14 = var15.getDefaultWatchVideoTask;
            var3 = var11.config;
            var15 = var14.bind(var15)(var3);
            var14 = null;
            var16 = var14 == var15;
            var3 = undefined;
            if(var16) { _fun0004_ip = 55; continue _fun0004 }
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
            var16 = var3[var21];
            var19 = var15.bind(var4)(var16);
            var18 = var19.getDefaultRewardNameWithArticle;
            var16 = var11.config;
            var16 = var18.bind(var19)(var16);
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
            var15 = _closure1_slot14;
            if(!var18) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            if(var13) { _fun0004_ip = 61; continue _fun0004 }
case 59:
            if(var18) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            if(!(var14 == var12)) { _fun0004_ip = 62; continue _fun0004 }
case 64:
            var18 = var11.id;
            var14 = _closure1_slot8;
            if(!(var18 !== var14)) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 7;
            var14 = var19[var14];
            var14 = var18.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.g+InPC;
            _fun0004_ip = 67; continue _fun0004;
case 65:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var18 = 7;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var14 = var18.Rsd5bL;
case 67:
            _fun0004_ip = 68; continue _fun0004;
case 62:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var18 = 7;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var14 = var18.W/HkLO;
case 68:
            _fun0004_ip = 69; continue _fun0004;
case 61:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var18 = 7;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            if(var3) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var3 = var18.vs/xBu;
            _fun0004_ip = 72; continue _fun0004;
case 70:
            var3 = var18.xqX+var6;
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
            var15 = _closure1_slot14;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 7;
            var3 = var19[var3];
            var3 = var14.bind(var4)(var3);
            var3 = var3.t;
            var14 = var3.a/ia7F;
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
            var17 = var3[var21];
            var20 = var22.bind(var4)(var17);
            var19 = var20.getDefaultRewardNameWithArticle;
            var17 = var15.config;
            var17 = var19.bind(var20)(var17);
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
            var15 = _closure1_slot9;
            var15 = var15.NON_GAMING_PLAY_QUEST;
            var22 = var22.bind(var24)(var15);
            var15 = _closure1_slot14;
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
            var14 = 7;
            var14 = var24[var14];
            var14 = var23.bind(var4)(var14);
            var23 = var14.t;
            if(var22) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var14 = var23.FZL5Q5;
            _fun0004_ip = 83; continue _fun0004;
case 81:
            var14 = var23.03VJqu;
case 83:
            _fun0004_ip = 84; continue _fun0004;
case 78:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 7;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var24 = var23.t;
            if(var22) { _fun0004_ip = 85; continue _fun0004 }
case 86:
            var23 = var24.AwuMRS;
            _fun0004_ip = 87; continue _fun0004;
case 85:
            var23 = var24.enQ3jU;
case 87:
            var14 = var23;
case 84:
            _fun0004_ip = 88; continue _fun0004;
case 77:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 7;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            if(var3) { _fun0004_ip = 89; continue _fun0004 }
case 90:
            if(var22) { _fun0004_ip = 91; continue _fun0004 }
case 92:
            var3 = var23.ziB0HF;
            _fun0004_ip = 93; continue _fun0004;
case 91:
            var3 = var23.1AcTqm;
case 93:
            _fun0004_ip = 94; continue _fun0004;
case 89:
            if(var22) { _fun0004_ip = 95; continue _fun0004 }
case 96:
            var22 = var23.eb/Sna;
            _fun0004_ip = 97; continue _fun0004;
case 95:
            var22 = var23.ztXW8V;
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
            var17 = var15[var21];
            var20 = var23.bind(var4)(var17);
            var19 = var20.getDefaultRewardNameWithArticle;
            var17 = var3.config;
            var19 = var19.bind(var20)(var17);
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
            var15 = _closure1_slot14;
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
            var14 = 7;
            var14 = var23[var14];
            var14 = var22.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.NIimTt;
            _fun0004_ip = 105; continue _fun0004;
case 102:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 7;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var14 = var22.AwuMRS;
case 105:
            _fun0004_ip = 106; continue _fun0004;
case 101:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 7;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            if(var3) { _fun0004_ip = 107; continue _fun0004 }
case 108:
            var3 = var22.ziB0HF;
            _fun0004_ip = 109; continue _fun0004;
case 107:
            var3 = var22.eb/Sna;
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
            var15 = var3[var21];
            var18 = var19.bind(var4)(var15);
            var17 = var18.getDefaultRewardNameWithArticle;
            var15 = var13.config;
            var17 = var17.bind(var18)(var15);
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
            var13 = _closure1_slot9;
            var13 = var13.NON_GAMING_PLAY_QUEST;
            var19 = var19.bind(var21)(var13);
            var13 = _closure1_slot14;
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
            var12 = 7;
            var12 = var21[var12];
            var12 = var20.bind(var4)(var12);
            var20 = var12.t;
            if(var19) { _fun0004_ip = 117; continue _fun0004 }
case 118:
            var12 = var20.NIimTt;
            _fun0004_ip = 119; continue _fun0004;
case 117:
            var12 = var20.e+K3xJ;
case 119:
            _fun0004_ip = 120; continue _fun0004;
case 114:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var20 = 7;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.t;
            if(var19) { _fun0004_ip = 121; continue _fun0004 }
case 122:
            var20 = var21.AwuMRS;
            _fun0004_ip = 123; continue _fun0004;
case 121:
            var20 = var21.enQ3jU;
case 123:
            var12 = var20;
case 120:
            _fun0004_ip = 124; continue _fun0004;
case 113:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var20 = 7;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            if(var3) { _fun0004_ip = 125; continue _fun0004 }
case 126:
            if(var19) { _fun0004_ip = 127; continue _fun0004 }
case 128:
            var3 = var20.ziB0HF;
            _fun0004_ip = 129; continue _fun0004;
case 127:
            var3 = var20.1AcTqm;
case 129:
            _fun0004_ip = 130; continue _fun0004;
case 125:
            if(var19) { _fun0004_ip = 131; continue _fun0004 }
case 132:
            var19 = var20.eb/Sna;
            _fun0004_ip = 133; continue _fun0004;
case 131:
            var19 = var20.ztXW8V;
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
            var3 = _closure1_slot15;
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
    var _closure1_slot16 = var1;
    var5 = function getQuestsInstructionsToWinReward(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot16;
            var2 = {};
            var8 = var2;
            var7 = var1;
            var5 = copyDataProperties(var8, var7);
            var5 = var1.currentUser;
            var6 = null;
            if(!(var6 == var5)) { _fun0005_ip = 135; continue _fun0005 }
case 136:
            var6 = _closure1_slot6;
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
    var _closure1_slot17 = var5;
    var4 = function useQuestsInstructionsToWinReward(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var8 = var5.quest;
            var12 = var5.questContent;
            var11 = var5.sourceQuestContent;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 8;
            var6 = var9[var2];
            var3 = undefined;
            var10 = var4.bind(var3)(var6);
            var7 = var10.useConnectedConsoleLinkOnClick;
            var6 = {};
            var6['quest'] = var8;
            var6['questContent'] = var12;
            var6['sourceQuestContent'] = var11;
            var7 = var7.bind(var10)(var6);
            var6 = 17;
            var6 = var9[var6];
            var12 = var4.bind(var3)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var11.bind(var12)(var10, var6);
            var2 = var9[var2];
            var4 = var4.bind(var3)(var2);
            var2 = var4.useThirdPartyTaskDetails;
            var4 = var2.bind(var4)(var8);
            var2 = _closure1_slot17;
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
            if(!var6) { _fun0006_ip = 137; continue _fun0006 }
case 138:
            var5 = var4;
case 137:
            var4 = 'thirdPartyTaskDetails';
            var1[var4] = var5;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var1 = function getSimplifiedQuestTaskType(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
            if(var1) { _fun0007_ip = 139; continue _fun0007 }
case 140:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.hasPlayActivityTask;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0007_ip = 139; continue _fun0007 }
case 141:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var7 = var3.bind(var5)(var1);
            var3 = var7.hasStreamOnDesktopTask;
            var1 = {};
            var1['quest'] = var4;
            var1 = var3.bind(var7)(var1);
            if(var1) { _fun0007_ip = 142; continue _fun0007 }
case 143:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.hasWatchVideoOnMobileTasks;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0007_ip = 137; continue _fun0007 }
case 144:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isInGameQuest;
            var1 = var1.bind(var3)(var4);
            var3 = _closure1_slot13;
            if(var1) { _fun0007_ip = 145; continue _fun0007 }
case 146:
            var1 = var3.PLAY;
            _fun0007_ip = 147; continue _fun0007;
case 145:
            var1 = var3.IN_GAME;
case 147:
            _fun0007_ip = 148; continue _fun0007;
case 137:
            var3 = _closure1_slot13;
            var1 = var3.WATCH_VIDEO;
case 148:
            _fun0007_ip = 149; continue _fun0007;
case 142:
            var3 = _closure1_slot13;
            var1 = var3.STREAM;
case 149:
            _fun0007_ip = 150; continue _fun0007;
case 139:
            var2 = _closure1_slot13;
            var1 = var2.PLAY;
case 150:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function canLaunchOnCurrentPlatform(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            if(var2) { _fun0008_ip = 151; continue _fun0008 }
case 152:
            var7 = null;
            var2 = var7 == var6;
            if(var2) { _fun0008_ip = 153; continue _fun0008 }
case 154:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 20;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var8 = var7 == var6;
            var3 = undefined;
            if(var8) { _fun0008_ip = 155; continue _fun0008 }
case 156:
            var6 = var6.embeddedActivityConfig;
            var7 = var7 == var6;
            var3 = undefined;
            if(var7) { _fun0008_ip = 155; continue _fun0008 }
case 157:
            var3 = var6.supported_platforms;
case 155:
            var2 = var4.bind(var5)(var3);
case 153:
            var1 = var2;
case 151:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var13 = 0;
    var6 = var8[var13];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var12 = 1;
    var10 = var8[var12];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot4 = var6;
    var11 = 2;
    var6 = var8[var11];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var10 = 3;
    var6 = var8[var10];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.QuestsExperimentLocations;
    var _closure1_slot7 = var9;
    var9 = var6.ORBS_INTRO_QUEST_ID;
    var _closure1_slot8 = var9;
    var6 = var6.QuestVariants;
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.HelpdeskArticles;
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.PremiumTypes;
    var _closure1_slot11 = var6;
    var6 = 'NVIDIA GeForce NOW';
    var _closure1_slot12 = var6;
    var6 = {};
    var6['PLAY'] = var13;
    var9 = 'PLAY';
    var6[var13] = var9;
    var6['STREAM'] = var12;
    var9 = 'STREAM';
    var6[var12] = var9;
    var6['WATCH_VIDEO'] = var11;
    var9 = 'WATCH_VIDEO';
    var6[var11] = var9;
    var6['IN_GAME'] = var10;
    var9 = 'IN_GAME';
    var6[var10] = var9;
    var _closure1_slot13 = var6;
    var6 = 21;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/hooks/QuestCopyHooks.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useQuestInstructionTitle(arg1, arg2, arg3, arg4) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
            var12 = 9;
            var1 = var3[var12];
            var10 = var5.bind(var9)(var1);
            var1 = var10.isSponsoredPlayQuest;
            var1 = var1.bind(var10)(var8);
            var13 = 10;
            var3 = var3[var13];
            var5 = var5.bind(var9)(var3);
            var3 = var5.isConsoleQuest;
            var3 = var3.bind(var5)(var8);
            if(!var3) { _fun0009_ip = 158; continue _fun0009 }
case 159:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var10 = var5.bind(var9)(var3);
            var5 = var10.hasPlayOnDesktopTask;
            var3 = {};
            var3['quest'] = var8;
            var3 = var5.bind(var10)(var3);
            if(var3) { _fun0009_ip = 158; continue _fun0009 }
case 160:
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 7;
            var10 = var14[var3];
            var10 = var5.bind(var9)(var10);
            var11 = var10.intl;
            var10 = var11.format;
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
            var3 = var10.bind(var11)(var5, var3);
            return var3;
case 158:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var5 = var5.bind(var9)(var3);
            var3 = var5.isConsoleQuest;
            var5 = var3.bind(var5)(var8);
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            if(var5) { _fun0009_ip = 161; continue _fun0009 }
case 162:
            if(var1) { _fun0009_ip = 163; continue _fun0009 }
case 164:
            var5 = var10[var13];
            var11 = var3.bind(var9)(var5);
            var5 = var11.hasWatchVideoTasks;
            var5 = var5.bind(var11)(var8);
            if(var5) { _fun0009_ip = 165; continue _fun0009 }
case 166:
            var5 = null;
            if(!(var5 == var2)) { _fun0009_ip = 30; continue _fun0009 }
case 167:
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var11 = var11.bind(var9)(var5);
            var5 = var11.hasPlayActivityTask;
            var14 = var5.bind(var11)(var8);
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            if(var14) { _fun0009_ip = 168; continue _fun0009 }
case 169:
            var15 = 7;
            var14 = var5[var15];
            var14 = var11.bind(var9)(var14);
            var14 = var14.t;
            var16 = var14.6zWtV8;
            var13 = var5[var13];
            var17 = var11.bind(var9)(var13);
            var14 = var17.hasPlayOnDesktopTask;
            var13 = {};
            var13['quest'] = var8;
            var13 = var14.bind(var17)(var13);
            if(!var13) { _fun0009_ip = 170; continue _fun0009 }
case 171:
            var13 = var8.config;
            var17 = var13.features;
            var14 = var17.includes;
            var13 = _closure1_slot9;
            var13 = var13.NON_GAMING_PLAY_QUEST;
            var13 = var14.bind(var17)(var13);
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var15];
            var14 = var17.bind(var9)(var14);
            var14 = var14.t;
            if(var13) { _fun0009_ip = 172; continue _fun0009 }
case 173:
            var13 = var14.wmOh/q;
            _fun0009_ip = 174; continue _fun0009;
case 172:
            var13 = var14.fe7Xec;
case 174:
            var16 = var13;
case 170:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var13 = var14.bind(var9)(var13);
            var15 = var13.intl;
            var14 = var15.format;
            var13 = {};
            var13['minutes'] = var6;
            var17 = var8.config;
            var17 = var17.messages;
            var17 = var17.gameTitle;
            var13['gameTitle'] = var17;
            var13 = var14.bind(var15)(var16, var13);
            return var13;
case 168:
            var5 = var5[var12];
            var11 = var11.bind(var9)(var5);
            var5 = var11.isPlayAnyActivityQuest;
            var5 = var5.bind(var11)(var8);
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 7;
            var13 = var15[var11];
            var13 = var12.bind(var9)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var11 = var15[var11];
            var11 = var12.bind(var9)(var11);
            var11 = var11.t;
            if(var5) { _fun0009_ip = 175; continue _fun0009 }
case 176:
            var12 = var11.xHXCyf;
            var5 = {};
            var5['minutes'] = var6;
            var15 = var8.config;
            var15 = var15.messages;
            var15 = var15.gameTitle;
            var5['activityName'] = var15;
            var5 = var13.bind(var14)(var12, var5);
            _fun0009_ip = 177; continue _fun0009;
case 175:
            var12 = var11.1NaRSs;
            var11 = {};
            var11['minutes'] = var6;
            var5 = var13.bind(var14)(var12, var11);
case 177:
            return var5;
case 30:
            var2 = var2.title;
            return var2;
case 165:
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 11;
            var2 = var11[var2];
            var11 = var5.bind(var9)(var2);
            var5 = var11.getDefaultWatchVideoTask;
            var2 = var8.config;
            var5 = var5.bind(var11)(var2);
            var2 = null;
            var11 = var2 == var5;
            var13 = undefined;
            if(var11) { _fun0009_ip = 178; continue _fun0009 }
case 179:
            var5 = var5.messages;
            var13 = var5.videoTitle;
case 178:
            if(!(var2 != var13)) { _fun0009_ip = 180; continue _fun0009 }
case 181:
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
            var5 = var2.9m9Mna;
            var2 = {};
            var2['videoTitle'] = var13;
            var2 = var11.bind(var12)(var5, var2);
            _fun0009_ip = 182; continue _fun0009;
case 180:
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
case 182:
            return var2;
case 163:
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
case 161:
            var2 = 7;
            var4 = var10[var2];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            if(var1) { _fun0009_ip = 183; continue _fun0009 }
case 184:
            var3 = var2.Ajlcd7;
            var1 = {};
            var1['minutes'] = var6;
            var1['onClick'] = var7;
            var8 = var8.config;
            var8 = var8.messages;
            var8 = var8.gameTitle;
            var1['gameTitle'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0009_ip = 185; continue _fun0009;
case 183:
            var3 = var2.gbtCpW;
            var2 = {};
            var2['onClick'] = var7;
            var2['minutes'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 185:
            return var1;
        }
    };
    var3['useQuestInstructionTitle'] = var6;
    var3['getQuestsInstructionsToWinReward'] = var5;
    var3['useQuestsInstructionsToWinReward'] = var4;
    var4 = function useQuestTileDescription(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
            var4 = _closure1_slot18;
            var1 = {};
            var1['quest'] = var6;
            var1['taskDetails'] = var5;
            var5 = _closure1_slot7;
            var5 = var5.QUEST_HOME_DESKTOP;
            var1['location'] = var5;
            var5 = 13;
            var5 = var9[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.QuestContent;
            var5 = var5.QUEST_HOME_DESKTOP;
            var1['questContent'] = var5;
            var5 = arg2;
            var1['sourceQuestContent'] = var5;
            var5 = arg3;
            var1['popoutTargetElementRef'] = var5;
            var4 = var4.bind(var7)(var1);
            var8 = var6.userStatus;
            var1 = null;
            var9 = var1 == var8;
            var5 = undefined;
            if(var9) { _fun0010_ip = 186; continue _fun0010 }
case 187:
            var5 = var8.claimedAt;
case 186:
            var5 = var1 != var5;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var9 = var9.bind(var7)(var8);
            var8 = var9.useQuestFormattedDate;
            var10 = var6.userStatus;
            var11 = var1 == var10;
            var6 = undefined;
            if(var11) { _fun0010_ip = 188; continue _fun0010 }
case 189:
            var6 = var10.claimedAt;
case 188:
            var6 = var8.bind(var9)(var6);
            if(var5) { _fun0010_ip = 190; continue _fun0010 }
case 149:
            if(!(var1 == var3)) { _fun0010_ip = 191; continue _fun0010 }
case 192:
            var5 = var1 != var4;
            var1 = null;
            if(!var5) { _fun0010_ip = 193; continue _fun0010 }
case 194:
            var1 = var4;
case 193:
            _fun0010_ip = 195; continue _fun0010;
case 191:
            var1 = var3.description;
case 195:
            _fun0010_ip = 196; continue _fun0010;
case 190:
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
case 196:
            return var1;
        }
    };
    var3['useQuestTileDescription'] = var4;
    var4 = function useQuestBarSubtitle(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.quest;
            var16 = var1.isExpanded;
            var21 = var1.sourceQuestContent;
            var12 = var1.activeScreen;
            var20 = var1.popoutTargetElementRef;
            var13 = var1.onGameSheetOpened;
            var7 = var1.onGameSheetClosed;
            var1 = var4.config;
            var1 = var1.rewardsConfig;
            var10 = var1.rewardsExpireAt;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var5 = var3[var2];
            var6 = undefined;
            var9 = var8.bind(var6)(var5);
            var5 = var9.useQuestFormattedDate;
            var5 = var5.bind(var9)(var10);
            var9 = var3[var2];
            var10 = var8.bind(var6)(var9);
            var9 = var10.useQuestTaskDetails;
            var11 = var9.bind(var10)(var4);
            var3 = var3[var2];
            var8 = var8.bind(var6)(var3);
            var3 = var8.useThirdPartyTaskDetails;
            var19 = var3.bind(var8)(var4);
            var8 = var4.userStatus;
            var18 = null;
            var9 = var18 == var8;
            var3 = undefined;
            if(var9) { _fun0011_ip = 197; continue _fun0011 }
case 198:
            var3 = var8.completedAt;
case 197:
            var17 = var18 != var3;
            var8 = var4.userStatus;
            var9 = var18 == var8;
            var3 = undefined;
            if(var9) { _fun0011_ip = 199; continue _fun0011 }
case 200:
            var3 = var8.enrolledAt;
case 199:
            var9 = var18 != var3;
            var3 = var11.percentComplete;
            var15 = 0;
            var8 = var3 > var15;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var2 = var22[var2];
            var3 = var23.bind(var6)(var2);
            var2 = var3.useIsQuestProgressing;
            var14 = var2.bind(var3)(var4);
            var3 = _closure1_slot18;
            var2 = {};
            var2['quest'] = var4;
            var10 = _closure1_slot7;
            var10 = var10.QUESTS_BAR;
            var2['location'] = var10;
            var10 = 13;
            var22 = var22[var10];
            var22 = var23.bind(var6)(var22);
            var22 = var22.QuestContent;
            var22 = var22.QUEST_BAR_V2;
            var2['questContent'] = var22;
            var2['taskDetails'] = var11;
            var2['sourceQuestContent'] = var21;
            var2['popoutTargetElementRef'] = var20;
            var2['onGameSheetOpened'] = var13;
            var2['onGameSheetClosed'] = var7;
            var3 = var3.bind(var6)(var2);
            if(!(var18 == var19)) { _fun0011_ip = 201; continue _fun0011 }
case 202:
            var13 = var11.percentComplete;
            _fun0011_ip = 203; continue _fun0011;
case 201:
            var13 = var19.percentComplete;
case 203:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            if(var17) { _fun0011_ip = 204; continue _fun0011 }
case 205:
            if(var16) { _fun0011_ip = 206; continue _fun0011 }
case 207:
            var16 = 10;
            var16 = var7[var16];
            var17 = var2.bind(var6)(var16);
            var16 = var17.hasWatchVideoTasks;
            var16 = var16.bind(var17)(var4);
            if(var16) { _fun0011_ip = 208; continue _fun0011 }
case 209:
            if(!(!(var13 > var15))) { _fun0011_ip = 210; continue _fun0011 }
case 211:
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
            _fun0011_ip = 212; continue _fun0011;
case 210:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            if(var14) { _fun0011_ip = 213; continue _fun0011 }
case 214:
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
            _fun0011_ip = 215; continue _fun0011;
case 213:
            var15 = 18;
            var15 = var17[var15];
            var17 = var16.bind(var6)(var15);
            var16 = var17.getContextualEntrypointHeading;
            var15 = {};
            var15['quest'] = var4;
            var15['taskDetails'] = var11;
            var20 = var18 != var19;
            var18 = undefined;
            if(!var20) { _fun0011_ip = 174; continue _fun0011 }
case 216:
            var18 = var19;
case 174:
            var15['thirdPartyTaskDetails'] = var18;
            var14 = var16.bind(var17)(var15);
case 215:
            var13 = var14;
case 212:
            _fun0011_ip = 217; continue _fun0011;
case 208:
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
case 217:
            return var13;
case 206:
            var10 = var7[var10];
            var10 = var2.bind(var6)(var10);
            var10 = var10.TaskPlatformScreen;
            var10 = var10.SELECT;
            if(!(var12 !== var10)) { _fun0011_ip = 218; continue _fun0011 }
case 219:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 9;
            var10 = var13[var10];
            var12 = var12.bind(var6)(var10);
            var10 = var12.isSponsoredPlayQuest;
            var10 = var10.bind(var12)(var4);
            if(!var10) { _fun0011_ip = 220; continue _fun0011 }
case 176:
            if(!var9) { _fun0011_ip = 220; continue _fun0011 }
case 221:
            if(var8) { _fun0011_ip = 220; continue _fun0011 }
case 222:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 12;
            var9 = var13[var9];
            var10 = var8.bind(var6)(var9);
            var9 = var10.getDefaultRewardNameWithArticle;
            var4 = var4.config;
            var12 = var9.bind(var10)(var4);
            var4 = 7;
            var9 = var13[var4];
            var9 = var8.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var4 = var13[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var8 = var4.1votF6;
            var4 = {};
            var4['rewardNameWithArticle'] = var12;
            var11 = var11.targetMinutes;
            var4['targetMinutes'] = var11;
            var4 = var9.bind(var10)(var8, var4);
            return var4;
case 220:
            return var3;
case 218:
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
            var1 = var1.sWUpN8;
            var1 = var3.bind(var4)(var1);
            return var1;
case 204:
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = arg1;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 17;
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
            if(var12) { _fun0012_ip = 7; continue _fun0012 }
case 159:
            var6 = var11.completedAt;
case 7:
            var6 = var8 != var6;
            if(!(var8 == var10)) { _fun0012_ip = 223; continue _fun0012 }
case 224:
            var7 = var7.percentComplete;
            _fun0012_ip = 225; continue _fun0012;
case 223:
            var7 = var10.percentComplete;
case 225:
            if(var6) { _fun0012_ip = 173; continue _fun0012 }
case 226:
            var10 = var4.userStatus;
            var11 = var8 == var10;
            var6 = undefined;
            if(var11) { _fun0012_ip = 227; continue _fun0012 }
case 148:
            var6 = var10.enrolledAt;
case 227:
            if(!(var8 != var6)) { _fun0012_ip = 228; continue _fun0012 }
case 229:
            if(!(!(var7 > var2))) { _fun0012_ip = 230; continue _fun0012 }
case 228:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 13;
            var2 = var8[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.TaskPlatformScreen;
            var2 = var2.SELECT;
            if(!(var3 !== var2)) { _fun0012_ip = 166; continue _fun0012 }
case 231:
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
            if(var2) { _fun0012_ip = 9; continue _fun0012 }
case 164:
            var2 = var3.7e5k7L;
            var2 = var4.bind(var6)(var2);
            _fun0012_ip = 232; continue _fun0012;
case 9:
            var3 = var3.mOrpXG;
            var2 = var4.bind(var6)(var3);
case 232:
            _fun0012_ip = 233; continue _fun0012;
case 166:
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
case 233:
            return var2;
case 230:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
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
case 173:
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
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var3 = var1.quest;
            var6 = var1.application;
            var2 = var1.shortText;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0013_ip = 234; continue _fun0013 }
case 235:
            var2 = false;
case 234:
            var1 = function useSimplifiedQuestTaskType(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var3 = _closure1_slot19;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var7 = var1.bind(var5)(var3);
            var4 = _closure1_slot13;
            var4 = var4.PLAY;
            if(!(var4 !== var7)) { _fun0013_ip = 236; continue _fun0013 }
case 237:
            var4 = _closure1_slot13;
            var4 = var4.STREAM;
            if(!(var4 !== var7)) { _fun0013_ip = 12; continue _fun0013 }
case 238:
            var4 = _closure1_slot13;
            var4 = var4.WATCH_VIDEO;
            if(!(var4 !== var7)) { _fun0013_ip = 239; continue _fun0013 }
case 240:
            var4 = _closure1_slot13;
            var4 = var4.IN_GAME;
            if(!(var4 !== var7)) { _fun0013_ip = 241; continue _fun0013 }
case 242:
            return var5;
case 241:
            var4 = var3.config;
            var8 = var4.features;
            var7 = var8.includes;
            var4 = _closure1_slot9;
            var4 = var4.START_QUEST_CTA;
            var4 = var7.bind(var8)(var4);
            if(!var4) { _fun0013_ip = 197; continue _fun0013 }
case 144:
            var4 = _closure1_slot20;
            var4 = var4.bind(var5)(var3, var6);
            if(var4) { _fun0013_ip = 243; continue _fun0013 }
case 197:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 7;
            var7 = var10[var4];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.l7E81v;
            var4 = var7.bind(var8)(var4);
            _fun0013_ip = 244; continue _fun0013;
case 243:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var11 = 7;
            var7 = var7[var11];
            var7 = var8.bind(var5)(var7);
            var9 = var7.intl;
            var8 = var9.string;
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var7 = var10.bind(var5)(var7);
            var10 = var7.t;
            if(var2) { _fun0013_ip = 245; continue _fun0013 }
case 246:
            var7 = var10.hRIVy+;
            _fun0013_ip = 247; continue _fun0013;
case 245:
            var7 = var10.CkUzLd;
case 247:
            var4 = var8.bind(var9)(var7);
case 244:
            return var4;
case 239:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 7;
            var7 = var10[var4];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.umdNin;
            var4 = var7.bind(var8)(var4);
            return var4;
case 12:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 7;
            var7 = var10[var4];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.l7E81v;
            var4 = var7.bind(var8)(var4);
            return var4;
case 236:
            var4 = _closure1_slot20;
            var4 = var4.bind(var5)(var3, var6);
            if(!var4) { _fun0013_ip = 248; continue _fun0013 }
case 249:
            var4 = var3.config;
            var7 = var4.features;
            var6 = var7.includes;
            var4 = _closure1_slot9;
            var4 = var4.CLOUD_GAMING_ACTIVITY;
            var4 = var6.bind(var7)(var4);
            if(var4) { _fun0013_ip = 250; continue _fun0013 }
case 251:
            var3 = var3.config;
            var6 = var3.features;
            var4 = var6.includes;
            var3 = _closure1_slot9;
            var3 = var3.START_QUEST_CTA;
            var3 = var4.bind(var6)(var3);
            if(var3) { _fun0013_ip = 252; continue _fun0013 }
case 248:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 7;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.l7E81v;
            var3 = var4.bind(var6)(var3);
            return var3;
case 252:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 7;
            var3 = var3[var8];
            var3 = var4.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var7.bind(var5)(var6);
            var6 = var6.t;
            if(var2) { _fun0013_ip = 253; continue _fun0013 }
case 254:
            var2 = var6.Ie9++s;
            _fun0013_ip = 255; continue _fun0013;
case 253:
            var2 = var6.E4kW5O;
case 255:
            var2 = var3.bind(var4)(var2);
            return var2;
case 250:
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
            var1 = var1.+qoymD;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['usePrimaryCtaCopy'] = var4;
    var4 = function usePremiumExtendableCopy(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
                var1 = 12;
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
                var1 = 12;
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
            if(!var4) { _fun0014_ip = 256; continue _fun0014 }
case 257:
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
            if(var2) { _fun0014_ip = 258; continue _fun0014 }
case 259:
            var2 = var3.GYGb3A;
            var2 = var4.bind(var5)(var2);
            _fun0014_ip = 260; continue _fun0014;
case 258:
            var3 = var3.hh7Rb/;
            var2 = var4.bind(var5)(var3);
case 260:
            var1 = var2;
case 256:
            return var1;
        }
    };
    var3['usePremiumExtendableCopy'] = var4;
    var2 = function getRewardCodeRedemptionInstructions(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var2 = var1.quest;
            var11 = var1.rewardCode;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 12;
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
            if(var6) { _fun0015_ip = 261; continue _fun0015 }
case 262:
            var3 = var11.platform;
case 261:
            if(!(var4 == var3)) { _fun0015_ip = 263; continue _fun0015 }
case 141:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 13;
            var6 = var10[var6];
            var6 = var8.bind(var1)(var6);
            var6 = var6.QuestRewardCodePlatforms;
            var3 = var6.CROSS_PLATFORM;
case 263:
            var6 = null;
            if(!var7) { _fun0015_ip = 137; continue _fun0015 }
case 264:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var9 = var8.bind(var1)(var7);
            var8 = var9.getRewardCodeQuestReward;
            var7 = {};
            var7['quest'] = var2;
            var12 = var4 == var11;
            var10 = undefined;
            if(var12) { _fun0015_ip = 197; continue _fun0015 }
case 198:
            var10 = var11.tier;
case 197:
            if(!(var4 == var10)) { _fun0015_ip = 265; continue _fun0015 }
case 186:
            var12 = var2.userStatus;
            var13 = var4 == var12;
            var11 = undefined;
            if(var13) { _fun0015_ip = 199; continue _fun0015 }
case 200:
            var11 = var12.claimedTier;
case 199:
            var10 = var11;
case 265:
            var7['idx'] = var10;
            var6 = var8.bind(var9)(var7);
case 137:
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
            if(var7) { _fun0015_ip = 266; continue _fun0015 }
case 195:
            var6 = var6.messages;
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0015_ip = 266; continue _fun0015 }
case 267:
            var2 = var6.redemptionInstructionsByPlatform;
case 266:
            if(!(var4 == var2)) { _fun0015_ip = 268; continue _fun0015 }
case 21:
            var5 = var5.messages;
            var2 = var5.redemptionInstructionsByPlatform;
case 268:
            var4 = var4 != var3;
            var1 = undefined;
            if(!var4) { _fun0015_ip = 269; continue _fun0015 }
case 270:
            var1 = var2[var3];
case 269:
            return var1;
        }
    };
    var3['getRewardCodeRedemptionInstructions'] = var2;
    return var1;
})();