// app/modules/quests/hooks/QuestCopyHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function formatWithOrWithoutMarkdown(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.intl;
            var1 = arg3;
            if(var1) { _fun0001_ip = 55; continue _fun0001 }
 42:
            var1 = var3.format;
            var1 = var1.bind(var3)(var5, var4);
            _fun0001_ip = 66; continue _fun0001;
 55:
            var2 = var3.formatToPlainString;
            var1 = var2.bind(var3)(var5, var4);
 66:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _getQuestsInstructionsToWinReward(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.quest;
            var10 = var1.taskDetails;
            var15 = var1.questContent;
            var16 = var1.thirdPartyTaskDetails;
            var8 = var1.sourceQuestContent;
            var7 = var1.withoutMarkdown;
            var17 = var1.currentUser;
            var6 = var1.popoutTargetElementRef;
            var4 = var1.onGameSheetOpened;
            var3 = var1.onGameSheetClosed;
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var9 = 9;
            var12 = var1[var9];
            var9 = undefined;
            var14 = var5.bind(var9)(var12);
            var13 = var14.isPremium;
            var12 = _closure1_slot6;
            var12 = var12.TIER_2;
            var13 = var13.bind(var14)(var17, var12);
            var21 = 6;
            var12 = var1[var21];
            var17 = var5.bind(var9)(var12);
            var14 = var17.getCollectibleQuestRewardDuration;
            var12 = var11.config;
            var12 = var14.bind(var17)(var12);
            var1 = var1[var21];
            var5 = var5.bind(var9)(var1);
            var1 = var5.isConsoleQuest;
            var1 = var1.bind(var5)(var11);
            if(!var1) { _fun0002_ip = 189; continue _fun0002 }
 161:
            var14 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var21];
            var14 = var14.bind(var9)(var5);
            var5 = var14.shouldUsePlayOnDesktopTask;
            var1 = var5.bind(var14)(var11);
 189:
            var14 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var21];
            var14 = var14.bind(var9)(var5);
            var5 = var14.isSponsoredPlayQuest;
            var5 = var5.bind(var14)(var11);
            if(var5) { _fun0002_ip = 3007; continue _fun0002 }
 223:
            if(var1) { _fun0002_ip = 2578; continue _fun0002 }
 229:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var5 = var5.bind(var9)(var1);
            var1 = var5.isConsoleQuest;
            var1 = var1.bind(var5)(var11);
            if(var1) { _fun0002_ip = 2232; continue _fun0002 }
 263:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var5 = var5.bind(var9)(var1);
            var1 = var5.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var5)(var11);
            if(var1) { _fun0002_ip = 1801; continue _fun0002 }
 297:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var14 = var5.bind(var9)(var1);
            var5 = var14.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var11;
            var1 = var5.bind(var14)(var1);
            if(var1) { _fun0002_ip = 1682; continue _fun0002 }
 338:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var5 = var5.bind(var9)(var1);
            var1 = var5.hasWatchVideoTasks;
            var1 = var1.bind(var5)(var11);
            var14 = _closure1_slot0;
            var5 = _closure1_slot1;
            if(var1) { _fun0002_ip = 1298; continue _fun0002 }
 380:
            var1 = var5[var21];
            var17 = var14.bind(var9)(var1);
            var1 = var17.hasPlayActivityTask;
            var1 = var1.bind(var17)(var11);
            if(var1) { _fun0002_ip = 767; continue _fun0002 }
 406:
            var17 = null;
            if(!(var17 == var16)) { _fun0002_ip = 757; continue _fun0002 }
 415:
            var18 = {};
            var18['quest'] = var11;
            var18['taskDetails'] = var10;
            var18['withoutMarkdown'] = var7;
            var18['hasNitro'] = var13;
            var18['collectibleRewardDuration'] = var12;
            var1 = var18.quest;
            var23 = var18.taskDetails;
            var19 = var18.withoutMarkdown;
            var26 = var18.hasNitro;
            var22 = var18.collectibleRewardDuration;
            var27 = _closure1_slot0;
            var18 = _closure1_slot1;
            var20 = 5;
            var20 = var18[var20];
            var20 = var27.bind(var9)(var20);
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
            var29 = var27.bind(var9)(var25);
            var28 = var29.isCollectibleQuestRewardPremiumExtendable;
            var25 = var1.config;
            var25 = var28.bind(var29)(var25);
            var18 = var18[var21];
            var27 = var27.bind(var9)(var18);
            var18 = var27.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var1 = var1.config;
            var1 = var18.bind(var27)(var1);
            var18 = _closure1_slot10;
            if(!var26) { _fun0002_ip = 603; continue _fun0002 }
 600:
            if(var25) { _fun0002_ip = 678; continue _fun0002 }
 603:
            if(var25) { _fun0002_ip = 643; continue _fun0002 }
 606:
            if(!(var17 == var22)) { _fun0002_ip = 643; continue _fun0002 }
 610:
            var25 = _closure1_slot0;
            var26 = _closure1_slot1;
            var17 = 4;
            var17 = var26[var17];
            var17 = var25.bind(var9)(var17);
            var17 = var17.t;
            var17 = var17.hkJ+Gh;
            _fun0002_ip = 676; continue _fun0002;
 643:
            var26 = _closure1_slot0;
            var27 = _closure1_slot1;
            var25 = 4;
            var25 = var27[var25];
            var25 = var26.bind(var9)(var25);
            var25 = var25.t;
            var17 = var25.BLyDvL;
 676:
            _fun0002_ip = 727; continue _fun0002;
 678:
            var26 = _closure1_slot0;
            var27 = _closure1_slot1;
            var25 = 4;
            var25 = var27[var25];
            var25 = var26.bind(var9)(var25);
            var25 = var25.t;
            if(var1) { _fun0002_ip = 716; continue _fun0002 }
 706:
            var1 = var25.smG9qq;
            _fun0002_ip = 724; continue _fun0002;
 716:
            var1 = var25.X8Yt//;
 724:
            var17 = var1;
 727:
            var1 = {};
            var1['gameTitle'] = var24;
            var1['streamingDurationRequirement'] = var23;
            var1['duration'] = var22;
            var1['questReward'] = var20;
            var1 = var18.bind(var9)(var17, var1, var19);
            _fun0002_ip = 762; continue _fun0002;
 757:
            var1 = var16.description;
 762:
            _fun0002_ip = 1293; continue _fun0002;
 767:
            var16 = {};
            var16['quest'] = var11;
            var16['taskDetails'] = var10;
            var16['withoutMarkdown'] = var7;
            var16['questContent'] = var15;
            var24 = var16.quest;
            var15 = var16.taskDetails;
            var19 = var16.withoutMarkdown;
            var17 = var16.questContent;
            var22 = var15.targetMinutes;
            var16 = _closure1_slot0;
            var15 = _closure1_slot1;
            var18 = 5;
            var18 = var15[var18];
            var18 = var16.bind(var9)(var18);
            var23 = var18.SharedQuestFields;
            var20 = var23.build;
            var18 = var24.config;
            var18 = var20.bind(var23)(var18);
            var20 = var18.defaultRewardNameWithArticle;
            var15 = var15[var21];
            var16 = var16.bind(var9)(var15);
            var15 = var16.isPlayAnyActivityQuest;
            var15 = var15.bind(var16)(var24);
            if(var15) { _fun0002_ip = 1234; continue _fun0002 }
 893:
            var15 = var24.config;
            var18 = var15.features;
            var16 = var18.includes;
            var15 = _closure1_slot5;
            var15 = var15.CLOUD_GAMING_ACTIVITY;
            var15 = var16.bind(var18)(var15);
            if(var15) { _fun0002_ip = 1008; continue _fun0002 }
 927:
            var18 = _closure1_slot10;
            var16 = _closure1_slot0;
            var23 = _closure1_slot1;
            var15 = 4;
            var15 = var23[var15];
            var15 = var16.bind(var9)(var15);
            var15 = var15.t;
            var16 = var15.UuzHh4;
            var15 = {};
            var23 = var24.config;
            var23 = var23.application;
            var23 = var23.name;
            var15['activityName'] = var23;
            var15['streamingDurationRequirement'] = var22;
            var15['questReward'] = var20;
            var15 = var18.bind(var9)(var16, var15, var19);
            _fun0002_ip = 1232; continue _fun0002;
 1008:
            var18 = _closure1_slot0;
            var23 = _closure1_slot1;
            var16 = 7;
            var16 = var23[var16];
            var16 = var18.bind(var9)(var16);
            var16 = var16.QuestContent;
            var16 = var16.QUESTS_EMBED;
            if(!(var17 !== var16)) { _fun0002_ip = 1140; continue _fun0002 }
 1044:
            var18 = _closure1_slot10;
            var17 = _closure1_slot0;
            var23 = _closure1_slot1;
            var16 = 4;
            var16 = var23[var16];
            var16 = var17.bind(var9)(var16);
            var16 = var16.t;
            var17 = var16.0NNM3t;
            var16 = {};
            var23 = var24.config;
            var23 = var23.application;
            var23 = var23.name;
            var16['activityName'] = var23;
            var23 = _closure1_slot7;
            var16['providerName'] = var23;
            var23 = _closure1_slot8;
            var16['providerLink'] = var23;
            var16['streamingDurationRequirement'] = var22;
            var16['questReward'] = var20;
            var16 = var18.bind(var9)(var17, var16, var19);
            _fun0002_ip = 1229; continue _fun0002;
 1140:
            var23 = _closure1_slot10;
            var18 = _closure1_slot0;
            var25 = _closure1_slot1;
            var17 = 4;
            var17 = var25[var17];
            var17 = var18.bind(var9)(var17);
            var17 = var17.t;
            var18 = var17.C+2RxM;
            var17 = {};
            var24 = var24.config;
            var24 = var24.application;
            var24 = var24.name;
            var17['activityName'] = var24;
            var24 = _closure1_slot7;
            var17['providerName'] = var24;
            var24 = _closure1_slot8;
            var17['providerLink'] = var24;
            var17['questReward'] = var20;
            var16 = var23.bind(var9)(var18, var17, var19);
 1229:
            var15 = var16;
 1232:
            _fun0002_ip = 1290; continue _fun0002;
 1234:
            var18 = _closure1_slot10;
            var17 = _closure1_slot0;
            var23 = _closure1_slot1;
            var16 = 4;
            var16 = var23[var16];
            var16 = var17.bind(var9)(var16);
            var16 = var16.t;
            var17 = var16.VYwSSk;
            var16 = {};
            var16['streamingDurationRequirement'] = var22;
            var16['questReward'] = var20;
            var15 = var18.bind(var9)(var17, var16, var19);
 1290:
            var1 = var15;
 1293:
            _fun0002_ip = 1680; continue _fun0002;
 1298:
            var16 = 5;
            var5 = var5[var16];
            var5 = var14.bind(var9)(var5);
            var15 = var5.SharedQuestFields;
            var14 = var15.build;
            var5 = var11.config;
            var5 = var14.bind(var15)(var5);
            var15 = var5.defaultWatchVideoTask;
            var14 = null;
            var17 = var14 == var15;
            var5 = undefined;
            if(var17) { _fun0002_ip = 1361; continue _fun0002 }
 1349:
            var15 = var15.messages;
            var5 = var15.videoTitle;
 1361:
            var15 = var14 != var5;
            var17 = 'video';
            if(!var15) { _fun0002_ip = 1375; continue _fun0002 }
 1372:
            var17 = var5;
 1375:
            var15 = _closure1_slot0;
            var5 = _closure1_slot1;
            var16 = var5[var16];
            var16 = var15.bind(var9)(var16);
            var19 = var16.SharedQuestFields;
            var18 = var19.build;
            var16 = var11.config;
            var16 = var18.bind(var19)(var16);
            var16 = var16.defaultRewardNameWithArticle;
            var18 = var5[var21];
            var20 = var15.bind(var9)(var18);
            var19 = var20.isCollectibleQuestRewardPremiumExtendable;
            var18 = var11.config;
            var18 = var19.bind(var20)(var18);
            var5 = var5[var21];
            var19 = var15.bind(var9)(var5);
            var15 = var19.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var5 = var11.config;
            var5 = var15.bind(var19)(var5);
            var15 = _closure1_slot10;
            if(!var18) { _fun0002_ip = 1483; continue _fun0002 }
 1477:
            if(var13) { _fun0002_ip = 1608; continue _fun0002 }
 1483:
            if(var18) { _fun0002_ip = 1573; continue _fun0002 }
 1486:
            if(!(var14 == var12)) { _fun0002_ip = 1573; continue _fun0002 }
 1490:
            var18 = var11.id;
            var14 = _closure1_slot4;
            if(!(var18 !== var14)) { _fun0002_ip = 1538; continue _fun0002 }
 1503:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var14 = 4;
            var14 = var19[var14];
            var14 = var18.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.g+InPD;
            _fun0002_ip = 1571; continue _fun0002;
 1538:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var9)(var18);
            var18 = var18.t;
            var14 = var18.Rsd5bG;
 1571:
            _fun0002_ip = 1606; continue _fun0002;
 1573:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var9)(var18);
            var18 = var18.t;
            var14 = var18.W/HkLC;
 1606:
            _fun0002_ip = 1657; continue _fun0002;
 1608:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var9)(var18);
            var18 = var18.t;
            if(var5) { _fun0002_ip = 1646; continue _fun0002 }
 1636:
            var5 = var18.vs/xBg;
            _fun0002_ip = 1654; continue _fun0002;
 1646:
            var5 = var18.xqX+var7;
 1654:
            var14 = var5;
 1657:
            var5 = {};
            var5['videoTitle'] = var17;
            var5['rewardNameWithArticle'] = var16;
            var5['duration'] = var12;
            var1 = var15.bind(var9)(var14, var5, var7);
 1680:
            _fun0002_ip = 1796; continue _fun0002;
 1682:
            var15 = {};
            var15['quest'] = var11;
            var15['taskDetails'] = var10;
            var15['withoutMarkdown'] = var7;
            var5 = var15.quest;
            var14 = var15.taskDetails;
            var16 = var15.withoutMarkdown;
            var17 = var14.targetMinutes;
            var5 = var5.config;
            var5 = var5.messages;
            var18 = var5.gameTitle;
            var15 = _closure1_slot10;
            var14 = _closure1_slot0;
            var19 = _closure1_slot1;
            var5 = 4;
            var5 = var19[var5];
            var5 = var14.bind(var9)(var5);
            var5 = var5.t;
            var14 = var5.a/ia7O;
            var5 = {};
            var5['gameTitle'] = var18;
            var5['streamingDurationRequirement'] = var17;
            var1 = var15.bind(var9)(var14, var5, var16);
 1796:
            _fun0002_ip = 2227; continue _fun0002;
 1801:
            var5 = {};
            var5['quest'] = var11;
            var5['taskDetails'] = var10;
            var5['withoutMarkdown'] = var7;
            var5['hasNitro'] = var13;
            var5['collectibleRewardDuration'] = var12;
            var15 = var5.quest;
            var14 = var5.taskDetails;
            var16 = var5.withoutMarkdown;
            var23 = var5.hasNitro;
            var18 = var5.collectibleRewardDuration;
            var22 = _closure1_slot0;
            var5 = _closure1_slot1;
            var17 = 5;
            var17 = var5[var17];
            var17 = var22.bind(var9)(var17);
            var20 = var17.SharedQuestFields;
            var19 = var20.build;
            var17 = var15.config;
            var17 = var19.bind(var20)(var17);
            var17 = var17.defaultRewardNameWithArticle;
            var19 = var14.targetMinutes;
            var14 = var15.config;
            var14 = var14.messages;
            var20 = var14.gameTitle;
            var14 = var5[var21];
            var25 = var22.bind(var9)(var14);
            var24 = var25.isCollectibleQuestRewardPremiumExtendable;
            var14 = var15.config;
            var14 = var24.bind(var25)(var14);
            var5 = var5[var21];
            var24 = var22.bind(var9)(var5);
            var22 = var24.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var5 = var15.config;
            var5 = var22.bind(var24)(var5);
            var15 = var15.config;
            var24 = var15.features;
            var22 = var24.includes;
            var15 = _closure1_slot5;
            var15 = var15.NON_GAMING_PLAY_QUEST;
            var22 = var22.bind(var24)(var15);
            var15 = _closure1_slot10;
            if(!var23) { _fun0002_ip = 2020; continue _fun0002 }
 2017:
            if(var14) { _fun0002_ip = 2124; continue _fun0002 }
 2020:
            if(var14) { _fun0002_ip = 2077; continue _fun0002 }
 2023:
            var14 = null;
            if(!(var14 == var18)) { _fun0002_ip = 2077; continue _fun0002 }
 2029:
            var23 = _closure1_slot0;
            var24 = _closure1_slot1;
            var14 = 4;
            var14 = var24[var14];
            var14 = var23.bind(var9)(var14);
            var23 = var14.t;
            if(var22) { _fun0002_ip = 2067; continue _fun0002 }
 2057:
            var14 = var23.FZL5Q0;
            _fun0002_ip = 2075; continue _fun0002;
 2067:
            var14 = var23.03VJqq;
 2075:
            _fun0002_ip = 2122; continue _fun0002;
 2077:
            var24 = _closure1_slot0;
            var25 = _closure1_slot1;
            var23 = 4;
            var23 = var25[var23];
            var23 = var24.bind(var9)(var23);
            var24 = var23.t;
            if(var22) { _fun0002_ip = 2113; continue _fun0002 }
 2105:
            var23 = var24.AwuMRU;
            _fun0002_ip = 2119; continue _fun0002;
 2113:
            var23 = var24.enQ3jY;
 2119:
            var14 = var23;
 2122:
            _fun0002_ip = 2194; continue _fun0002;
 2124:
            var24 = _closure1_slot0;
            var25 = _closure1_slot1;
            var23 = 4;
            var23 = var25[var23];
            var23 = var24.bind(var9)(var23);
            var23 = var23.t;
            if(var5) { _fun0002_ip = 2171; continue _fun0002 }
 2152:
            if(var22) { _fun0002_ip = 2163; continue _fun0002 }
 2155:
            var5 = var23.ziB0HB;
            _fun0002_ip = 2169; continue _fun0002;
 2163:
            var5 = var23.1AcTqq;
 2169:
            _fun0002_ip = 2191; continue _fun0002;
 2171:
            if(var22) { _fun0002_ip = 2182; continue _fun0002 }
 2174:
            var22 = var23.eb/SnZ;
            _fun0002_ip = 2188; continue _fun0002;
 2182:
            var22 = var23.ztXW8f;
 2188:
            var5 = var22;
 2191:
            var14 = var5;
 2194:
            var5 = {};
            var5['gameTitle'] = var20;
            var5['streamingDurationRequirement'] = var19;
            var5['rewardNameWithArticle'] = var17;
            var5['duration'] = var18;
            var5['questReward'] = var17;
            var1 = var15.bind(var9)(var14, var5, var16);
 2227:
            _fun0002_ip = 2573; continue _fun0002;
 2232:
            var15 = {};
            var15['quest'] = var11;
            var15['taskDetails'] = var10;
            var15['withoutMarkdown'] = var7;
            var15['hasNitro'] = var13;
            var15['collectibleRewardDuration'] = var12;
            var5 = var15.quest;
            var14 = var15.taskDetails;
            var16 = var15.withoutMarkdown;
            var22 = var15.hasNitro;
            var18 = var15.collectibleRewardDuration;
            var23 = _closure1_slot0;
            var15 = _closure1_slot1;
            var17 = 5;
            var17 = var15[var17];
            var17 = var23.bind(var9)(var17);
            var20 = var17.SharedQuestFields;
            var19 = var20.build;
            var17 = var5.config;
            var17 = var19.bind(var20)(var17);
            var19 = var17.defaultRewardNameWithArticle;
            var17 = var14.targetMinutes;
            var14 = var5.config;
            var14 = var14.messages;
            var20 = var14.gameTitle;
            var14 = var15[var21];
            var25 = var23.bind(var9)(var14);
            var24 = var25.isCollectibleQuestRewardPremiumExtendable;
            var14 = var5.config;
            var14 = var24.bind(var25)(var14);
            var15 = var15[var21];
            var23 = var23.bind(var9)(var15);
            var15 = var23.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var5 = var5.config;
            var5 = var15.bind(var23)(var5);
            var15 = _closure1_slot10;
            if(!var22) { _fun0002_ip = 2420; continue _fun0002 }
 2417:
            if(var14) { _fun0002_ip = 2495; continue _fun0002 }
 2420:
            if(var14) { _fun0002_ip = 2462; continue _fun0002 }
 2423:
            var14 = null;
            if(!(var14 == var18)) { _fun0002_ip = 2462; continue _fun0002 }
 2429:
            var22 = _closure1_slot0;
            var23 = _closure1_slot1;
            var14 = 4;
            var14 = var23[var14];
            var14 = var22.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.NIimTk;
            _fun0002_ip = 2493; continue _fun0002;
 2462:
            var23 = _closure1_slot0;
            var24 = _closure1_slot1;
            var22 = 4;
            var22 = var24[var22];
            var22 = var23.bind(var9)(var22);
            var22 = var22.t;
            var14 = var22.AwuMRU;
 2493:
            _fun0002_ip = 2540; continue _fun0002;
 2495:
            var23 = _closure1_slot0;
            var24 = _closure1_slot1;
            var22 = 4;
            var22 = var24[var22];
            var22 = var23.bind(var9)(var22);
            var22 = var22.t;
            if(var5) { _fun0002_ip = 2531; continue _fun0002 }
 2523:
            var5 = var22.ziB0HB;
            _fun0002_ip = 2537; continue _fun0002;
 2531:
            var5 = var22.eb/SnZ;
 2537:
            var14 = var5;
 2540:
            var5 = {};
            var5['gameTitle'] = var20;
            var5['targetMinutes'] = var17;
            var5['rewardNameWithArticle'] = var19;
            var5['duration'] = var18;
            var5['streamingDurationRequirement'] = var17;
            var1 = var15.bind(var9)(var14, var5, var16);
 2573:
            _fun0002_ip = 3002; continue _fun0002;
 2578:
            var5 = {};
            var5['quest'] = var11;
            var5['taskDetails'] = var10;
            var5['withoutMarkdown'] = var7;
            var5['hasNitro'] = var13;
            var5['collectibleRewardDuration'] = var12;
            var13 = var5.quest;
            var12 = var5.taskDetails;
            var14 = var5.withoutMarkdown;
            var20 = var5.hasNitro;
            var16 = var5.collectibleRewardDuration;
            var19 = _closure1_slot0;
            var5 = _closure1_slot1;
            var15 = 5;
            var15 = var5[var15];
            var15 = var19.bind(var9)(var15);
            var18 = var15.SharedQuestFields;
            var17 = var18.build;
            var15 = var13.config;
            var15 = var17.bind(var18)(var15);
            var17 = var15.defaultRewardNameWithArticle;
            var15 = var12.targetMinutes;
            var12 = var13.config;
            var12 = var12.messages;
            var18 = var12.gameTitle;
            var12 = var5[var21];
            var23 = var19.bind(var9)(var12);
            var22 = var23.isCollectibleQuestRewardPremiumExtendable;
            var12 = var13.config;
            var12 = var22.bind(var23)(var12);
            var5 = var5[var21];
            var21 = var19.bind(var9)(var5);
            var19 = var21.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var5 = var13.config;
            var5 = var19.bind(var21)(var5);
            var13 = var13.config;
            var21 = var13.features;
            var19 = var21.includes;
            var13 = _closure1_slot5;
            var13 = var13.NON_GAMING_PLAY_QUEST;
            var19 = var19.bind(var21)(var13);
            var13 = _closure1_slot10;
            if(!var20) { _fun0002_ip = 2797; continue _fun0002 }
 2794:
            if(var12) { _fun0002_ip = 2899; continue _fun0002 }
 2797:
            if(var12) { _fun0002_ip = 2852; continue _fun0002 }
 2800:
            var12 = null;
            if(!(var12 == var16)) { _fun0002_ip = 2852; continue _fun0002 }
 2806:
            var20 = _closure1_slot0;
            var21 = _closure1_slot1;
            var12 = 4;
            var12 = var21[var12];
            var12 = var20.bind(var9)(var12);
            var20 = var12.t;
            if(var19) { _fun0002_ip = 2842; continue _fun0002 }
 2834:
            var12 = var20.NIimTk;
            _fun0002_ip = 2850; continue _fun0002;
 2842:
            var12 = var20.e+K3xM;
 2850:
            _fun0002_ip = 2897; continue _fun0002;
 2852:
            var21 = _closure1_slot0;
            var22 = _closure1_slot1;
            var20 = 4;
            var20 = var22[var20];
            var20 = var21.bind(var9)(var20);
            var21 = var20.t;
            if(var19) { _fun0002_ip = 2888; continue _fun0002 }
 2880:
            var20 = var21.AwuMRU;
            _fun0002_ip = 2894; continue _fun0002;
 2888:
            var20 = var21.enQ3jY;
 2894:
            var12 = var20;
 2897:
            _fun0002_ip = 2969; continue _fun0002;
 2899:
            var21 = _closure1_slot0;
            var22 = _closure1_slot1;
            var20 = 4;
            var20 = var22[var20];
            var20 = var21.bind(var9)(var20);
            var20 = var20.t;
            if(var5) { _fun0002_ip = 2946; continue _fun0002 }
 2927:
            if(var19) { _fun0002_ip = 2938; continue _fun0002 }
 2930:
            var5 = var20.ziB0HB;
            _fun0002_ip = 2944; continue _fun0002;
 2938:
            var5 = var20.1AcTqq;
 2944:
            _fun0002_ip = 2966; continue _fun0002;
 2946:
            if(var19) { _fun0002_ip = 2957; continue _fun0002 }
 2949:
            var19 = var20.eb/SnZ;
            _fun0002_ip = 2963; continue _fun0002;
 2957:
            var19 = var20.ztXW8f;
 2963:
            var5 = var19;
 2966:
            var12 = var5;
 2969:
            var5 = {};
            var5['gameTitle'] = var18;
            var5['streamingDurationRequirement'] = var15;
            var5['rewardNameWithArticle'] = var17;
            var5['duration'] = var16;
            var5['targetMinutes'] = var15;
            var1 = var13.bind(var9)(var12, var5, var14);
 3002:
            _fun0002_ip = 3367; continue _fun0002;
 3007:
            var5 = {};
            var5['quest'] = var11;
            var5['taskDetails'] = var10;
            var5['sourceQuestContent'] = var8;
            var5['withoutMarkdown'] = var7;
            var5['popoutTargetElementRef'] = var6;
            var5['onGameSheetOpened'] = var4;
            var5['onGameSheetClosed'] = var3;
            var16 = var5.quest;
            var4 = var5.taskDetails;
            var15 = var5.sourceQuestContent;
            var3 = var5.withoutMarkdown;
            var13 = var5.popoutTargetElementRef;
            var12 = var5.onGameSheetOpened;
            var11 = var5.onGameSheetClosed;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 5;
            var5 = var7[var5];
            var5 = var6.bind(var9)(var5);
            var7 = var5.SharedQuestFields;
            var6 = var7.build;
            var5 = var16.config;
            var5 = var6.bind(var7)(var5);
            var8 = var5.defaultRewardNameWithArticle;
            var7 = var4.targetMinutes;
            var14 = var4.applications;
            var4 = _closure1_slot0;
            var10 = _closure1_slot1;
            if(var3) { _fun0002_ip = 3304; continue _fun0002 }
 3160:
            var3 = 8;
            var3 = var10[var3];
            var6 = var4.bind(var9)(var3);
            var5 = var6.createGameSheetHook;
            var3 = {};
            var3['quest'] = var16;
            var3['sourceQuestContent'] = var15;
            var15 = null;
            if(!(var15 == var14)) { _fun0002_ip = 3200; continue _fun0002 }
 3196:
            var14 = new Array(0);
 3200:
            var3['applications'] = var14;
            var3['popoutTargetElementRef'] = var13;
            var3['onGameSheetOpened'] = var12;
            var3['onGameSheetClosed'] = var11;
            var11 = var5.bind(var6)(var3);
            var3 = _closure1_slot0;
            var12 = _closure1_slot1;
            var2 = 4;
            var5 = var12[var2];
            var5 = var3.bind(var9)(var5);
            var6 = var5.intl;
            var5 = var6.format;
            var2 = var12[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            var3 = var2.CDeHur;
            var2 = {};
            var2['rewardNameWithArticle'] = var8;
            var2['targetMinutes'] = var7;
            var2['gameSheetHook'] = var11;
            var2 = var5.bind(var6)(var3, var2);
            _fun0002_ip = 3364; continue _fun0002;
 3304:
            var3 = 4;
            var5 = var10[var3];
            var5 = var4.bind(var9)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var9)(var3);
            var3 = var3.t;
            var4 = var3.1votFx;
            var3 = {};
            var3['rewardNameWithArticle'] = var8;
            var3['targetMinutes'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 3364:
            var1 = var2;
 3367:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var4 = function getQuestsInstructionsToWinReward(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var3 = _closure1_slot11;
            var2 = {};
            var8 = var2;
            var7 = var1;
            var5 = copyDataProperties(var8, var7);
            var5 = var1.currentUser;
            var6 = null;
            if(!(var6 == var5)) { _fun0003_ip = 47; continue _fun0003 }
 34:
            var6 = _closure1_slot3;
            var4 = var6.getCurrentUser;
            var5 = var4.bind(var6)();
 47:
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
    var _closure1_slot12 = var4;
    var1 = function useSimplifiedQuestTaskType(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure2_slot0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 6;
                var1 = var1[var6];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.isConsoleQuest;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0004_ip = 227; continue _fun0004 }
 49:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.hasPlayActivityTask;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0004_ip = 227; continue _fun0004 }
 83:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var7 = var3.bind(var5)(var1);
                var3 = var7.hasStreamOnDesktopTask;
                var1 = {};
                var1['quest'] = var4;
                var1 = var3.bind(var7)(var1);
                if(var1) { _fun0004_ip = 215; continue _fun0004 }
 121:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.hasWatchVideoTasks;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0004_ip = 203; continue _fun0004 }
 152:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.isInGameQuest;
                var1 = var1.bind(var3)(var4);
                var3 = _closure1_slot9;
                if(var1) { _fun0004_ip = 195; continue _fun0004 }
 187:
                var1 = var3.PLAY;
                _fun0004_ip = 201; continue _fun0004;
 195:
                var1 = var3.IN_GAME;
 201:
                _fun0004_ip = 213; continue _fun0004;
 203:
                var3 = _closure1_slot9;
                var1 = var3.WATCH_VIDEO;
 213:
                _fun0004_ip = 225; continue _fun0004;
 215:
                var3 = _closure1_slot9;
                var1 = var3.STREAM;
 225:
                _fun0004_ip = 237; continue _fun0004;
 227:
                var2 = _closure1_slot9;
                var1 = var2.PLAY;
 237:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var12 = 0;
    var8 = var7[var12];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var11 = 1;
    var8 = var7[var11];
    var5 = metroImportDefault;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var10 = 2;
    var5 = var7[var10];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ORBS_INTRO_QUEST_ID;
    var _closure1_slot4 = var8;
    var5 = var5.QuestVariants;
    var _closure1_slot5 = var5;
    var9 = 3;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PremiumTypes;
    var _closure1_slot6 = var5;
    var5 = 'NVIDIA GeForce NOW';
    var _closure1_slot7 = var5;
    var5 = 'https://discord.com';
    var _closure1_slot8 = var5;
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
    var _closure1_slot9 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/hooks/QuestCopyHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getQuestsInstructionsToWinReward'] = var4;
    var4 = function useQuestsInstructionsToWinReward(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var8 = var5.quest;
            var12 = var5.questContent;
            var11 = var5.sourceQuestContent;
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 10;
            var6 = var9[var2];
            var3 = undefined;
            var10 = var4.bind(var3)(var6);
            var7 = var10.useConnectedConsoleLinkOnClick;
            var6 = {};
            var6['quest'] = var8;
            var6['questContent'] = var12;
            var6['sourceQuestContent'] = var11;
            var7 = var7.bind(var10)(var6);
            var6 = 11;
            var6 = var9[var6];
            var12 = var4.bind(var3)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot3;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var11.bind(var12)(var10, var6);
            var2 = var9[var2];
            var4 = var4.bind(var3)(var2);
            var2 = var4.useThirdPartyTaskDetails;
            var4 = var2.bind(var4)(var8);
            var2 = _closure1_slot12;
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
            if(!var6) { _fun0005_ip = 197; continue _fun0005 }
 194:
            var5 = var4;
 197:
            var4 = 'thirdPartyTaskDetails';
            var1[var4] = var5;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useQuestsInstructionsToWinReward'] = var4;
    var4 = function usePrimaryCtaCopy(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var1 = var1.quest;
            var3 = _closure1_slot13;
            var6 = undefined;
            var4 = var3.bind(var6)(var1);
            var3 = _closure1_slot9;
            var3 = var3.PLAY;
            if(!(var3 !== var4)) { _fun0006_ip = 312; continue _fun0006 }
 40:
            var3 = _closure1_slot9;
            var3 = var3.STREAM;
            if(!(var3 !== var4)) { _fun0006_ip = 255; continue _fun0006 }
 57:
            var3 = _closure1_slot9;
            var3 = var3.WATCH_VIDEO;
            if(!(var3 !== var4)) { _fun0006_ip = 196; continue _fun0006 }
 74:
            var3 = _closure1_slot9;
            var3 = var3.IN_GAME;
            if(!(var3 !== var4)) { _fun0006_ip = 90; continue _fun0006 }
 88:
            return var6;
 90:
            var3 = var1.config;
            var5 = var3.features;
            var4 = var5.includes;
            var3 = _closure1_slot5;
            var3 = var3.START_QUEST_CTA;
            var3 = var4.bind(var5)(var3);
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 4;
            var5 = var9[var4];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            if(var3) { _fun0006_ip = 181; continue _fun0006 }
 168:
            var3 = var4.l7E81t;
            var3 = var5.bind(var7)(var3);
            _fun0006_ip = 194; continue _fun0006;
 181:
            var4 = var4.hRIVy8;
            var3 = var5.bind(var7)(var4);
 194:
            return var3;
 196:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.umdNio;
            var3 = var4.bind(var5)(var3);
            return var3;
 255:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.l7E81t;
            var3 = var4.bind(var5)(var3);
            return var3;
 312:
            var3 = var1.config;
            var5 = var3.features;
            var4 = var5.includes;
            var3 = _closure1_slot5;
            var3 = var3.CLOUD_GAMING_ACTIVITY;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0006_ip = 452; continue _fun0006 }
 346:
            var1 = var1.config;
            var4 = var1.features;
            var3 = var4.includes;
            var1 = _closure1_slot5;
            var1 = var1.START_QUEST_CTA;
            var1 = var3.bind(var4)(var1);
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var4 = var8[var3];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            if(var1) { _fun0006_ip = 437; continue _fun0006 }
 424:
            var1 = var3.l7E81t;
            var1 = var4.bind(var5)(var1);
            _fun0006_ip = 450; continue _fun0006;
 437:
            var3 = var3.Ie9++v;
            var1 = var4.bind(var5)(var3);
 450:
            _fun0006_ip = 509; continue _fun0006;
 452:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.+qoymJ;
            var1 = var3.bind(var4)(var2);
 509:
            return var1;
        }
    };
    var3['usePrimaryCtaCopy'] = var4;
    var2 = function usePremiumExtendableCopy(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot2;
            var5 = var6.useMemo;
            var4 = new Array(1);
            var4[0] = var7;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isCollectibleQuestRewardPremiumExtendable;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var2, var4);
            var6 = _closure1_slot2;
            var5 = var6.useMemo;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
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
            if(!var4) { _fun0007_ip = 153; continue _fun0007 }
 73:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            if(var2) { _fun0007_ip = 137; continue _fun0007 }
 122:
            var2 = var3.GYGb3N;
            var2 = var4.bind(var5)(var2);
            _fun0007_ip = 150; continue _fun0007;
 137:
            var3 = var3.hh7Rb2;
            var2 = var4.bind(var5)(var3);
 150:
            var1 = var2;
 153:
            return var1;
        }
    };
    var3['usePremiumExtendableCopy'] = var2;
    return var1;
})();