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
    var _closure1_slot8 = var1;
    var1 = function _getQuestsInstructionsToWinReward(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.quest;
            var10 = var1.taskDetails;
            var15 = var1.thirdPartyTaskDetails;
            var8 = var1.sourceQuestContent;
            var7 = var1.withoutMarkdown;
            var16 = var1.currentUser;
            var6 = var1.popoutTargetElementRef;
            var4 = var1.onGameSheetOpened;
            var3 = var1.onGameSheetClosed;
            var13 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 8;
            var5 = var1[var5];
            var9 = undefined;
            var14 = var13.bind(var9)(var5);
            var12 = var14.isPremium;
            var5 = _closure1_slot6;
            var5 = var5.TIER_2;
            var12 = var12.bind(var14)(var16, var5);
            var21 = 6;
            var5 = var1[var21];
            var16 = var13.bind(var9)(var5);
            var14 = var16.getCollectibleQuestRewardDuration;
            var5 = var11.config;
            var5 = var14.bind(var16)(var5);
            var1 = var1[var21];
            var13 = var13.bind(var9)(var1);
            var1 = var13.isConsoleQuest;
            var1 = var1.bind(var13)(var11);
            if(!var1) { _fun0002_ip = 183; continue _fun0002 }
 155:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var21];
            var14 = var14.bind(var9)(var13);
            var13 = var14.shouldUsePlayOnDesktopTask;
            var1 = var13.bind(var14)(var11);
 183:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var21];
            var14 = var14.bind(var9)(var13);
            var13 = var14.isSponsoredPlayQuest;
            var13 = var13.bind(var14)(var11);
            if(var13) { _fun0002_ip = 2446; continue _fun0002 }
 217:
            if(var1) { _fun0002_ip = 2100; continue _fun0002 }
 223:
            var13 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var13 = var13.bind(var9)(var1);
            var1 = var13.isConsoleQuest;
            var1 = var1.bind(var13)(var11);
            if(var1) { _fun0002_ip = 1754; continue _fun0002 }
 257:
            var13 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var13 = var13.bind(var9)(var1);
            var1 = var13.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var13)(var11);
            if(var1) { _fun0002_ip = 1406; continue _fun0002 }
 291:
            var13 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var14 = var13.bind(var9)(var1);
            var13 = var14.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var11;
            var1 = var13.bind(var14)(var1);
            if(var1) { _fun0002_ip = 1287; continue _fun0002 }
 332:
            var13 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var13 = var13.bind(var9)(var1);
            var1 = var13.hasWatchVideoTasks;
            var1 = var1.bind(var13)(var11);
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            if(var1) { _fun0002_ip = 903; continue _fun0002 }
 374:
            var1 = var13[var21];
            var16 = var14.bind(var9)(var1);
            var1 = var16.hasPlayActivityTask;
            var1 = var1.bind(var16)(var11);
            if(var1) { _fun0002_ip = 761; continue _fun0002 }
 400:
            var16 = null;
            if(!(var16 == var15)) { _fun0002_ip = 751; continue _fun0002 }
 409:
            var17 = {};
            var17['quest'] = var11;
            var17['taskDetails'] = var10;
            var17['withoutMarkdown'] = var7;
            var17['hasNitro'] = var12;
            var17['collectibleRewardDuration'] = var5;
            var1 = var17.quest;
            var22 = var17.taskDetails;
            var18 = var17.withoutMarkdown;
            var25 = var17.hasNitro;
            var20 = var17.collectibleRewardDuration;
            var26 = _closure1_slot0;
            var17 = _closure1_slot1;
            var19 = 5;
            var19 = var17[var19];
            var19 = var26.bind(var9)(var19);
            var24 = var19.SharedQuestFields;
            var23 = var24.build;
            var19 = var1.config;
            var19 = var23.bind(var24)(var19);
            var19 = var19.defaultRewardNameWithArticle;
            var22 = var22.targetMinutes;
            var23 = var1.config;
            var23 = var23.messages;
            var23 = var23.gameTitle;
            var24 = var17[var21];
            var28 = var26.bind(var9)(var24);
            var27 = var28.isCollectibleQuestRewardPremiumExtendable;
            var24 = var1.config;
            var24 = var27.bind(var28)(var24);
            var17 = var17[var21];
            var26 = var26.bind(var9)(var17);
            var17 = var26.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var1 = var1.config;
            var1 = var17.bind(var26)(var1);
            var17 = _closure1_slot8;
            if(!var25) { _fun0002_ip = 597; continue _fun0002 }
 594:
            if(var24) { _fun0002_ip = 672; continue _fun0002 }
 597:
            if(var24) { _fun0002_ip = 637; continue _fun0002 }
 600:
            if(!(var16 == var20)) { _fun0002_ip = 637; continue _fun0002 }
 604:
            var24 = _closure1_slot0;
            var25 = _closure1_slot1;
            var16 = 4;
            var16 = var25[var16];
            var16 = var24.bind(var9)(var16);
            var16 = var16.t;
            var16 = var16.hkJ+Gh;
            _fun0002_ip = 670; continue _fun0002;
 637:
            var25 = _closure1_slot0;
            var26 = _closure1_slot1;
            var24 = 4;
            var24 = var26[var24];
            var24 = var25.bind(var9)(var24);
            var24 = var24.t;
            var16 = var24.BLyDvL;
 670:
            _fun0002_ip = 721; continue _fun0002;
 672:
            var25 = _closure1_slot0;
            var26 = _closure1_slot1;
            var24 = 4;
            var24 = var26[var24];
            var24 = var25.bind(var9)(var24);
            var24 = var24.t;
            if(var1) { _fun0002_ip = 710; continue _fun0002 }
 700:
            var1 = var24.smG9qq;
            _fun0002_ip = 718; continue _fun0002;
 710:
            var1 = var24.X8Yt//;
 718:
            var16 = var1;
 721:
            var1 = {};
            var1['gameTitle'] = var23;
            var1['streamingDurationRequirement'] = var22;
            var1['duration'] = var20;
            var1['questReward'] = var19;
            var1 = var17.bind(var9)(var16, var1, var18);
            _fun0002_ip = 756; continue _fun0002;
 751:
            var1 = var15.description;
 756:
            _fun0002_ip = 898; continue _fun0002;
 761:
            var17 = {};
            var17['quest'] = var11;
            var17['taskDetails'] = var10;
            var17['withoutMarkdown'] = var7;
            var15 = var17.quest;
            var16 = var17.taskDetails;
            var18 = var17.withoutMarkdown;
            var20 = var16.targetMinutes;
            var16 = _closure1_slot0;
            var22 = _closure1_slot1;
            var17 = 5;
            var17 = var22[var17];
            var17 = var16.bind(var9)(var17);
            var19 = var17.SharedQuestFields;
            var17 = var19.build;
            var15 = var15.config;
            var15 = var17.bind(var19)(var15);
            var19 = var15.defaultRewardNameWithArticle;
            var17 = _closure1_slot8;
            var15 = 4;
            var15 = var22[var15];
            var15 = var16.bind(var9)(var15);
            var15 = var15.t;
            var16 = var15.VYwSSk;
            var15 = {};
            var15['streamingDurationRequirement'] = var20;
            var15['questReward'] = var19;
            var1 = var17.bind(var9)(var16, var15, var18);
 898:
            _fun0002_ip = 1285; continue _fun0002;
 903:
            var16 = 5;
            var13 = var13[var16];
            var13 = var14.bind(var9)(var13);
            var15 = var13.SharedQuestFields;
            var14 = var15.build;
            var13 = var11.config;
            var13 = var14.bind(var15)(var13);
            var15 = var13.defaultWatchVideoTask;
            var14 = null;
            var17 = var14 == var15;
            var13 = undefined;
            if(var17) { _fun0002_ip = 966; continue _fun0002 }
 954:
            var15 = var15.messages;
            var13 = var15.videoTitle;
 966:
            var15 = var14 != var13;
            var17 = 'video';
            if(!var15) { _fun0002_ip = 980; continue _fun0002 }
 977:
            var17 = var13;
 980:
            var15 = _closure1_slot0;
            var13 = _closure1_slot1;
            var16 = var13[var16];
            var16 = var15.bind(var9)(var16);
            var19 = var16.SharedQuestFields;
            var18 = var19.build;
            var16 = var11.config;
            var16 = var18.bind(var19)(var16);
            var16 = var16.defaultRewardNameWithArticle;
            var18 = var13[var21];
            var20 = var15.bind(var9)(var18);
            var19 = var20.isCollectibleQuestRewardPremiumExtendable;
            var18 = var11.config;
            var18 = var19.bind(var20)(var18);
            var13 = var13[var21];
            var19 = var15.bind(var9)(var13);
            var15 = var19.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var13 = var11.config;
            var13 = var15.bind(var19)(var13);
            var15 = _closure1_slot8;
            if(!var18) { _fun0002_ip = 1088; continue _fun0002 }
 1082:
            if(var12) { _fun0002_ip = 1213; continue _fun0002 }
 1088:
            if(var18) { _fun0002_ip = 1178; continue _fun0002 }
 1091:
            if(!(var14 == var5)) { _fun0002_ip = 1178; continue _fun0002 }
 1095:
            var18 = var11.id;
            var14 = _closure1_slot4;
            if(!(var18 !== var14)) { _fun0002_ip = 1143; continue _fun0002 }
 1108:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var14 = 4;
            var14 = var19[var14];
            var14 = var18.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.g+InPD;
            _fun0002_ip = 1176; continue _fun0002;
 1143:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var9)(var18);
            var18 = var18.t;
            var14 = var18.Rsd5bG;
 1176:
            _fun0002_ip = 1211; continue _fun0002;
 1178:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var9)(var18);
            var18 = var18.t;
            var14 = var18.W/HkLC;
 1211:
            _fun0002_ip = 1262; continue _fun0002;
 1213:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var9)(var18);
            var18 = var18.t;
            if(var13) { _fun0002_ip = 1251; continue _fun0002 }
 1241:
            var13 = var18.vs/xBg;
            _fun0002_ip = 1259; continue _fun0002;
 1251:
            var13 = var18.xqX+var7;
 1259:
            var14 = var13;
 1262:
            var13 = {};
            var13['videoTitle'] = var17;
            var13['rewardNameWithArticle'] = var16;
            var13['duration'] = var5;
            var1 = var15.bind(var9)(var14, var13, var7);
 1285:
            _fun0002_ip = 1401; continue _fun0002;
 1287:
            var15 = {};
            var15['quest'] = var11;
            var15['taskDetails'] = var10;
            var15['withoutMarkdown'] = var7;
            var13 = var15.quest;
            var14 = var15.taskDetails;
            var16 = var15.withoutMarkdown;
            var17 = var14.targetMinutes;
            var13 = var13.config;
            var13 = var13.messages;
            var18 = var13.gameTitle;
            var15 = _closure1_slot8;
            var14 = _closure1_slot0;
            var19 = _closure1_slot1;
            var13 = 4;
            var13 = var19[var13];
            var13 = var14.bind(var9)(var13);
            var13 = var13.t;
            var14 = var13.a/ia7O;
            var13 = {};
            var13['gameTitle'] = var18;
            var13['streamingDurationRequirement'] = var17;
            var1 = var15.bind(var9)(var14, var13, var16);
 1401:
            _fun0002_ip = 1749; continue _fun0002;
 1406:
            var15 = {};
            var15['quest'] = var11;
            var15['taskDetails'] = var10;
            var15['withoutMarkdown'] = var7;
            var15['hasNitro'] = var12;
            var15['collectibleRewardDuration'] = var5;
            var13 = var15.quest;
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
            var17 = var13.config;
            var17 = var19.bind(var20)(var17);
            var17 = var17.defaultRewardNameWithArticle;
            var19 = var14.targetMinutes;
            var14 = var13.config;
            var14 = var14.messages;
            var20 = var14.gameTitle;
            var14 = var15[var21];
            var25 = var23.bind(var9)(var14);
            var24 = var25.isCollectibleQuestRewardPremiumExtendable;
            var14 = var13.config;
            var14 = var24.bind(var25)(var14);
            var15 = var15[var21];
            var23 = var23.bind(var9)(var15);
            var15 = var23.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var13 = var13.config;
            var13 = var15.bind(var23)(var13);
            var15 = _closure1_slot8;
            if(!var22) { _fun0002_ip = 1594; continue _fun0002 }
 1591:
            if(var14) { _fun0002_ip = 1671; continue _fun0002 }
 1594:
            if(var14) { _fun0002_ip = 1638; continue _fun0002 }
 1597:
            var14 = null;
            if(!(var14 == var18)) { _fun0002_ip = 1638; continue _fun0002 }
 1603:
            var22 = _closure1_slot0;
            var23 = _closure1_slot1;
            var14 = 4;
            var14 = var23[var14];
            var14 = var22.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.FZL5Q0;
            _fun0002_ip = 1669; continue _fun0002;
 1638:
            var23 = _closure1_slot0;
            var24 = _closure1_slot1;
            var22 = 4;
            var22 = var24[var22];
            var22 = var23.bind(var9)(var22);
            var22 = var22.t;
            var14 = var22.AwuMRU;
 1669:
            _fun0002_ip = 1716; continue _fun0002;
 1671:
            var23 = _closure1_slot0;
            var24 = _closure1_slot1;
            var22 = 4;
            var22 = var24[var22];
            var22 = var23.bind(var9)(var22);
            var22 = var22.t;
            if(var13) { _fun0002_ip = 1707; continue _fun0002 }
 1699:
            var13 = var22.ziB0HB;
            _fun0002_ip = 1713; continue _fun0002;
 1707:
            var13 = var22.eb/SnZ;
 1713:
            var14 = var13;
 1716:
            var13 = {};
            var13['gameTitle'] = var20;
            var13['streamingDurationRequirement'] = var19;
            var13['rewardNameWithArticle'] = var17;
            var13['duration'] = var18;
            var13['questReward'] = var17;
            var1 = var15.bind(var9)(var14, var13, var16);
 1749:
            _fun0002_ip = 2095; continue _fun0002;
 1754:
            var15 = {};
            var15['quest'] = var11;
            var15['taskDetails'] = var10;
            var15['withoutMarkdown'] = var7;
            var15['hasNitro'] = var12;
            var15['collectibleRewardDuration'] = var5;
            var13 = var15.quest;
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
            var17 = var13.config;
            var17 = var19.bind(var20)(var17);
            var19 = var17.defaultRewardNameWithArticle;
            var17 = var14.targetMinutes;
            var14 = var13.config;
            var14 = var14.messages;
            var20 = var14.gameTitle;
            var14 = var15[var21];
            var25 = var23.bind(var9)(var14);
            var24 = var25.isCollectibleQuestRewardPremiumExtendable;
            var14 = var13.config;
            var14 = var24.bind(var25)(var14);
            var15 = var15[var21];
            var23 = var23.bind(var9)(var15);
            var15 = var23.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var13 = var13.config;
            var13 = var15.bind(var23)(var13);
            var15 = _closure1_slot8;
            if(!var22) { _fun0002_ip = 1942; continue _fun0002 }
 1939:
            if(var14) { _fun0002_ip = 2017; continue _fun0002 }
 1942:
            if(var14) { _fun0002_ip = 1984; continue _fun0002 }
 1945:
            var14 = null;
            if(!(var14 == var18)) { _fun0002_ip = 1984; continue _fun0002 }
 1951:
            var22 = _closure1_slot0;
            var23 = _closure1_slot1;
            var14 = 4;
            var14 = var23[var14];
            var14 = var22.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.NIimTk;
            _fun0002_ip = 2015; continue _fun0002;
 1984:
            var23 = _closure1_slot0;
            var24 = _closure1_slot1;
            var22 = 4;
            var22 = var24[var22];
            var22 = var23.bind(var9)(var22);
            var22 = var22.t;
            var14 = var22.AwuMRU;
 2015:
            _fun0002_ip = 2062; continue _fun0002;
 2017:
            var23 = _closure1_slot0;
            var24 = _closure1_slot1;
            var22 = 4;
            var22 = var24[var22];
            var22 = var23.bind(var9)(var22);
            var22 = var22.t;
            if(var13) { _fun0002_ip = 2053; continue _fun0002 }
 2045:
            var13 = var22.ziB0HB;
            _fun0002_ip = 2059; continue _fun0002;
 2053:
            var13 = var22.eb/SnZ;
 2059:
            var14 = var13;
 2062:
            var13 = {};
            var13['gameTitle'] = var20;
            var13['targetMinutes'] = var17;
            var13['rewardNameWithArticle'] = var19;
            var13['duration'] = var18;
            var13['streamingDurationRequirement'] = var17;
            var1 = var15.bind(var9)(var14, var13, var16);
 2095:
            _fun0002_ip = 2441; continue _fun0002;
 2100:
            var13 = {};
            var13['quest'] = var11;
            var13['taskDetails'] = var10;
            var13['withoutMarkdown'] = var7;
            var13['hasNitro'] = var12;
            var13['collectibleRewardDuration'] = var5;
            var5 = var13.quest;
            var12 = var13.taskDetails;
            var14 = var13.withoutMarkdown;
            var19 = var13.hasNitro;
            var16 = var13.collectibleRewardDuration;
            var20 = _closure1_slot0;
            var13 = _closure1_slot1;
            var15 = 5;
            var15 = var13[var15];
            var15 = var20.bind(var9)(var15);
            var18 = var15.SharedQuestFields;
            var17 = var18.build;
            var15 = var5.config;
            var15 = var17.bind(var18)(var15);
            var17 = var15.defaultRewardNameWithArticle;
            var15 = var12.targetMinutes;
            var12 = var5.config;
            var12 = var12.messages;
            var18 = var12.gameTitle;
            var12 = var13[var21];
            var23 = var20.bind(var9)(var12);
            var22 = var23.isCollectibleQuestRewardPremiumExtendable;
            var12 = var5.config;
            var12 = var22.bind(var23)(var12);
            var13 = var13[var21];
            var20 = var20.bind(var9)(var13);
            var13 = var20.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var5 = var5.config;
            var5 = var13.bind(var20)(var5);
            var13 = _closure1_slot8;
            if(!var19) { _fun0002_ip = 2288; continue _fun0002 }
 2285:
            if(var12) { _fun0002_ip = 2363; continue _fun0002 }
 2288:
            if(var12) { _fun0002_ip = 2330; continue _fun0002 }
 2291:
            var12 = null;
            if(!(var12 == var16)) { _fun0002_ip = 2330; continue _fun0002 }
 2297:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var12 = 4;
            var12 = var20[var12];
            var12 = var19.bind(var9)(var12);
            var12 = var12.t;
            var12 = var12.NIimTk;
            _fun0002_ip = 2361; continue _fun0002;
 2330:
            var20 = _closure1_slot0;
            var21 = _closure1_slot1;
            var19 = 4;
            var19 = var21[var19];
            var19 = var20.bind(var9)(var19);
            var19 = var19.t;
            var12 = var19.AwuMRU;
 2361:
            _fun0002_ip = 2408; continue _fun0002;
 2363:
            var20 = _closure1_slot0;
            var21 = _closure1_slot1;
            var19 = 4;
            var19 = var21[var19];
            var19 = var20.bind(var9)(var19);
            var19 = var19.t;
            if(var5) { _fun0002_ip = 2399; continue _fun0002 }
 2391:
            var5 = var19.ziB0HB;
            _fun0002_ip = 2405; continue _fun0002;
 2399:
            var5 = var19.eb/SnZ;
 2405:
            var12 = var5;
 2408:
            var5 = {};
            var5['gameTitle'] = var18;
            var5['streamingDurationRequirement'] = var15;
            var5['rewardNameWithArticle'] = var17;
            var5['duration'] = var16;
            var5['targetMinutes'] = var15;
            var1 = var13.bind(var9)(var12, var5, var14);
 2441:
            _fun0002_ip = 2806; continue _fun0002;
 2446:
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
            if(var3) { _fun0002_ip = 2743; continue _fun0002 }
 2599:
            var3 = 7;
            var3 = var10[var3];
            var6 = var4.bind(var9)(var3);
            var5 = var6.createGameSheetHook;
            var3 = {};
            var3['quest'] = var16;
            var3['sourceQuestContent'] = var15;
            var15 = null;
            if(!(var15 == var14)) { _fun0002_ip = 2639; continue _fun0002 }
 2635:
            var14 = new Array(0);
 2639:
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
            _fun0002_ip = 2803; continue _fun0002;
 2743:
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
 2803:
            var1 = var2;
 2806:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var4 = function getQuestsInstructionsToWinReward(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var3 = _closure1_slot9;
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
    var _closure1_slot10 = var4;
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
                var3 = _closure1_slot7;
                if(var1) { _fun0004_ip = 195; continue _fun0004 }
 187:
                var1 = var3.PLAY;
                _fun0004_ip = 201; continue _fun0004;
 195:
                var1 = var3.IN_GAME;
 201:
                _fun0004_ip = 213; continue _fun0004;
 203:
                var3 = _closure1_slot7;
                var1 = var3.WATCH_VIDEO;
 213:
                _fun0004_ip = 225; continue _fun0004;
 215:
                var3 = _closure1_slot7;
                var1 = var3.STREAM;
 225:
                _fun0004_ip = 237; continue _fun0004;
 227:
                var2 = _closure1_slot7;
                var1 = var2.PLAY;
 237:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot7 = var5;
    var5 = 11;
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
            var2 = 9;
            var6 = var9[var2];
            var3 = undefined;
            var10 = var4.bind(var3)(var6);
            var7 = var10.useConnectedConsoleLinkOnClick;
            var6 = {};
            var6['quest'] = var8;
            var6['questContent'] = var12;
            var6['sourceQuestContent'] = var11;
            var7 = var7.bind(var10)(var6);
            var6 = 10;
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
            var2 = _closure1_slot10;
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
            var2 = var1.quest;
            var3 = _closure1_slot11;
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = _closure1_slot7;
            var3 = var3.PLAY;
            if(!(var3 !== var4)) { _fun0006_ip = 255; continue _fun0006 }
 40:
            var3 = _closure1_slot7;
            var3 = var3.STREAM;
            if(!(var3 !== var4)) { _fun0006_ip = 255; continue _fun0006 }
 57:
            var3 = _closure1_slot7;
            var3 = var3.WATCH_VIDEO;
            if(!(var3 !== var4)) { _fun0006_ip = 196; continue _fun0006 }
 74:
            var3 = _closure1_slot7;
            var3 = var3.IN_GAME;
            if(!(var3 !== var4)) { _fun0006_ip = 90; continue _fun0006 }
 88:
            return var5;
 90:
            var2 = var2.config;
            var4 = var2.features;
            var3 = var4.includes;
            var2 = _closure1_slot5;
            var2 = var2.START_QUEST_CTA;
            var2 = var3.bind(var4)(var2);
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            if(var2) { _fun0006_ip = 181; continue _fun0006 }
 168:
            var2 = var3.l7E81t;
            var2 = var4.bind(var6)(var2);
            _fun0006_ip = 194; continue _fun0006;
 181:
            var3 = var3.ToGcxM;
            var2 = var4.bind(var6)(var3);
 194:
            return var2;
 196:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.umdNio;
            var2 = var3.bind(var4)(var2);
            return var2;
 255:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 4;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.l7E81t;
            var1 = var2.bind(var3)(var1);
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