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
            var6 = var1.quest;
            var5 = var1.taskDetails;
            var10 = var1.thirdPartyTaskDetails;
            var2 = var1.withoutMarkdown;
            var11 = var1.currentUser;
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var3 = 8;
            var3 = var1[var3];
            var4 = undefined;
            var9 = var8.bind(var4)(var3);
            var7 = var9.isPremium;
            var3 = _closure1_slot6;
            var3 = var3.TIER_2;
            var7 = var7.bind(var9)(var11, var3);
            var17 = 6;
            var3 = var1[var17];
            var11 = var8.bind(var4)(var3);
            var9 = var11.getCollectibleQuestRewardDuration;
            var3 = var6.config;
            var3 = var9.bind(var11)(var3);
            var1 = var1[var17];
            var8 = var8.bind(var4)(var1);
            var1 = var8.isConsoleQuest;
            var1 = var1.bind(var8)(var6);
            if(!var1) { _fun0002_ip = 159; continue _fun0002 }
 131:
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var17];
            var9 = var9.bind(var4)(var8);
            var8 = var9.shouldUsePlayOnDesktopTask;
            var1 = var8.bind(var9)(var6);
 159:
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var17];
            var9 = var9.bind(var4)(var8);
            var8 = var9.isSponsoredPlayQuest;
            var8 = var8.bind(var9)(var6);
            if(var8) { _fun0002_ip = 2419; continue _fun0002 }
 193:
            if(var1) { _fun0002_ip = 2076; continue _fun0002 }
 199:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var17];
            var8 = var8.bind(var4)(var1);
            var1 = var8.isConsoleQuest;
            var1 = var1.bind(var8)(var6);
            if(var1) { _fun0002_ip = 1730; continue _fun0002 }
 233:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var17];
            var8 = var8.bind(var4)(var1);
            var1 = var8.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var8)(var6);
            if(var1) { _fun0002_ip = 1382; continue _fun0002 }
 267:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var17];
            var9 = var8.bind(var4)(var1);
            var8 = var9.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var6;
            var1 = var8.bind(var9)(var1);
            if(var1) { _fun0002_ip = 1263; continue _fun0002 }
 308:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var17];
            var8 = var8.bind(var4)(var1);
            var1 = var8.hasWatchVideoTasks;
            var1 = var1.bind(var8)(var6);
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            if(var1) { _fun0002_ip = 879; continue _fun0002 }
 350:
            var1 = var8[var17];
            var11 = var9.bind(var4)(var1);
            var1 = var11.hasPlayActivityTask;
            var1 = var1.bind(var11)(var6);
            if(var1) { _fun0002_ip = 737; continue _fun0002 }
 376:
            var11 = null;
            if(!(var11 == var10)) { _fun0002_ip = 727; continue _fun0002 }
 385:
            var12 = {};
            var12['quest'] = var6;
            var12['taskDetails'] = var5;
            var12['withoutMarkdown'] = var2;
            var12['hasNitro'] = var7;
            var12['collectibleRewardDuration'] = var3;
            var1 = var12.quest;
            var18 = var12.taskDetails;
            var13 = var12.withoutMarkdown;
            var21 = var12.hasNitro;
            var16 = var12.collectibleRewardDuration;
            var22 = _closure1_slot0;
            var12 = _closure1_slot1;
            var15 = 5;
            var15 = var12[var15];
            var15 = var22.bind(var4)(var15);
            var20 = var15.SharedQuestFields;
            var19 = var20.build;
            var15 = var1.config;
            var15 = var19.bind(var20)(var15);
            var15 = var15.defaultRewardNameWithArticle;
            var18 = var18.targetMinutes;
            var19 = var1.config;
            var19 = var19.messages;
            var19 = var19.gameTitle;
            var20 = var12[var17];
            var24 = var22.bind(var4)(var20);
            var23 = var24.isCollectibleQuestRewardPremiumExtendable;
            var20 = var1.config;
            var20 = var23.bind(var24)(var20);
            var12 = var12[var17];
            var22 = var22.bind(var4)(var12);
            var12 = var22.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var1 = var1.config;
            var1 = var12.bind(var22)(var1);
            var12 = _closure1_slot8;
            if(!var21) { _fun0002_ip = 573; continue _fun0002 }
 570:
            if(var20) { _fun0002_ip = 648; continue _fun0002 }
 573:
            if(var20) { _fun0002_ip = 613; continue _fun0002 }
 576:
            if(!(var11 == var16)) { _fun0002_ip = 613; continue _fun0002 }
 580:
            var20 = _closure1_slot0;
            var21 = _closure1_slot1;
            var11 = 4;
            var11 = var21[var11];
            var11 = var20.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.hkJ+Gh;
            _fun0002_ip = 646; continue _fun0002;
 613:
            var21 = _closure1_slot0;
            var22 = _closure1_slot1;
            var20 = 4;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var11 = var20.BLyDvL;
 646:
            _fun0002_ip = 697; continue _fun0002;
 648:
            var21 = _closure1_slot0;
            var22 = _closure1_slot1;
            var20 = 4;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            if(var1) { _fun0002_ip = 686; continue _fun0002 }
 676:
            var1 = var20.smG9qq;
            _fun0002_ip = 694; continue _fun0002;
 686:
            var1 = var20.X8Yt//;
 694:
            var11 = var1;
 697:
            var1 = {};
            var1['gameTitle'] = var19;
            var1['streamingDurationRequirement'] = var18;
            var1['duration'] = var16;
            var1['questReward'] = var15;
            var1 = var12.bind(var4)(var11, var1, var13);
            _fun0002_ip = 732; continue _fun0002;
 727:
            var1 = var10.description;
 732:
            _fun0002_ip = 874; continue _fun0002;
 737:
            var12 = {};
            var12['quest'] = var6;
            var12['taskDetails'] = var5;
            var12['withoutMarkdown'] = var2;
            var10 = var12.quest;
            var11 = var12.taskDetails;
            var13 = var12.withoutMarkdown;
            var16 = var11.targetMinutes;
            var11 = _closure1_slot0;
            var18 = _closure1_slot1;
            var12 = 5;
            var12 = var18[var12];
            var12 = var11.bind(var4)(var12);
            var15 = var12.SharedQuestFields;
            var12 = var15.build;
            var10 = var10.config;
            var10 = var12.bind(var15)(var10);
            var15 = var10.defaultRewardNameWithArticle;
            var12 = _closure1_slot8;
            var10 = 4;
            var10 = var18[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.t;
            var11 = var10.VYwSSk;
            var10 = {};
            var10['streamingDurationRequirement'] = var16;
            var10['questReward'] = var15;
            var1 = var12.bind(var4)(var11, var10, var13);
 874:
            _fun0002_ip = 1261; continue _fun0002;
 879:
            var11 = 5;
            var8 = var8[var11];
            var8 = var9.bind(var4)(var8);
            var10 = var8.SharedQuestFields;
            var9 = var10.build;
            var8 = var6.config;
            var8 = var9.bind(var10)(var8);
            var10 = var8.defaultWatchVideoTask;
            var9 = null;
            var12 = var9 == var10;
            var8 = undefined;
            if(var12) { _fun0002_ip = 942; continue _fun0002 }
 930:
            var10 = var10.messages;
            var8 = var10.videoTitle;
 942:
            var10 = var9 != var8;
            var12 = 'video';
            if(!var10) { _fun0002_ip = 956; continue _fun0002 }
 953:
            var12 = var8;
 956:
            var10 = _closure1_slot0;
            var8 = _closure1_slot1;
            var11 = var8[var11];
            var11 = var10.bind(var4)(var11);
            var15 = var11.SharedQuestFields;
            var13 = var15.build;
            var11 = var6.config;
            var11 = var13.bind(var15)(var11);
            var11 = var11.defaultRewardNameWithArticle;
            var13 = var8[var17];
            var16 = var10.bind(var4)(var13);
            var15 = var16.isCollectibleQuestRewardPremiumExtendable;
            var13 = var6.config;
            var13 = var15.bind(var16)(var13);
            var8 = var8[var17];
            var15 = var10.bind(var4)(var8);
            var10 = var15.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var8 = var6.config;
            var8 = var10.bind(var15)(var8);
            var10 = _closure1_slot8;
            if(!var13) { _fun0002_ip = 1064; continue _fun0002 }
 1058:
            if(var7) { _fun0002_ip = 1189; continue _fun0002 }
 1064:
            if(var13) { _fun0002_ip = 1154; continue _fun0002 }
 1067:
            if(!(var9 == var3)) { _fun0002_ip = 1154; continue _fun0002 }
 1071:
            var13 = var6.id;
            var9 = _closure1_slot4;
            if(!(var13 !== var9)) { _fun0002_ip = 1119; continue _fun0002 }
 1084:
            var13 = _closure1_slot0;
            var15 = _closure1_slot1;
            var9 = 4;
            var9 = var15[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.g+InPD;
            _fun0002_ip = 1152; continue _fun0002;
 1119:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var13 = 4;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.t;
            var9 = var13.Rsd5bG;
 1152:
            _fun0002_ip = 1187; continue _fun0002;
 1154:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var13 = 4;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.t;
            var9 = var13.W/HkLC;
 1187:
            _fun0002_ip = 1238; continue _fun0002;
 1189:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var13 = 4;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.t;
            if(var8) { _fun0002_ip = 1227; continue _fun0002 }
 1217:
            var8 = var13.vs/xBg;
            _fun0002_ip = 1235; continue _fun0002;
 1227:
            var8 = var13.xqX+var7;
 1235:
            var9 = var8;
 1238:
            var8 = {};
            var8['videoTitle'] = var12;
            var8['rewardNameWithArticle'] = var11;
            var8['duration'] = var3;
            var1 = var10.bind(var4)(var9, var8, var2);
 1261:
            _fun0002_ip = 1377; continue _fun0002;
 1263:
            var10 = {};
            var10['quest'] = var6;
            var10['taskDetails'] = var5;
            var10['withoutMarkdown'] = var2;
            var8 = var10.quest;
            var9 = var10.taskDetails;
            var11 = var10.withoutMarkdown;
            var12 = var9.targetMinutes;
            var8 = var8.config;
            var8 = var8.messages;
            var13 = var8.gameTitle;
            var10 = _closure1_slot8;
            var9 = _closure1_slot0;
            var15 = _closure1_slot1;
            var8 = 4;
            var8 = var15[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var9 = var8.a/ia7O;
            var8 = {};
            var8['gameTitle'] = var13;
            var8['streamingDurationRequirement'] = var12;
            var1 = var10.bind(var4)(var9, var8, var11);
 1377:
            _fun0002_ip = 1725; continue _fun0002;
 1382:
            var10 = {};
            var10['quest'] = var6;
            var10['taskDetails'] = var5;
            var10['withoutMarkdown'] = var2;
            var10['hasNitro'] = var7;
            var10['collectibleRewardDuration'] = var3;
            var8 = var10.quest;
            var9 = var10.taskDetails;
            var11 = var10.withoutMarkdown;
            var18 = var10.hasNitro;
            var13 = var10.collectibleRewardDuration;
            var19 = _closure1_slot0;
            var10 = _closure1_slot1;
            var12 = 5;
            var12 = var10[var12];
            var12 = var19.bind(var4)(var12);
            var16 = var12.SharedQuestFields;
            var15 = var16.build;
            var12 = var8.config;
            var12 = var15.bind(var16)(var12);
            var12 = var12.defaultRewardNameWithArticle;
            var15 = var9.targetMinutes;
            var9 = var8.config;
            var9 = var9.messages;
            var16 = var9.gameTitle;
            var9 = var10[var17];
            var21 = var19.bind(var4)(var9);
            var20 = var21.isCollectibleQuestRewardPremiumExtendable;
            var9 = var8.config;
            var9 = var20.bind(var21)(var9);
            var10 = var10[var17];
            var19 = var19.bind(var4)(var10);
            var10 = var19.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var8 = var8.config;
            var8 = var10.bind(var19)(var8);
            var10 = _closure1_slot8;
            if(!var18) { _fun0002_ip = 1570; continue _fun0002 }
 1567:
            if(var9) { _fun0002_ip = 1647; continue _fun0002 }
 1570:
            if(var9) { _fun0002_ip = 1614; continue _fun0002 }
 1573:
            var9 = null;
            if(!(var9 == var13)) { _fun0002_ip = 1614; continue _fun0002 }
 1579:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var9 = 4;
            var9 = var19[var9];
            var9 = var18.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.FZL5Q0;
            _fun0002_ip = 1645; continue _fun0002;
 1614:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var9 = var18.AwuMRU;
 1645:
            _fun0002_ip = 1692; continue _fun0002;
 1647:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            if(var8) { _fun0002_ip = 1683; continue _fun0002 }
 1675:
            var8 = var18.ziB0HB;
            _fun0002_ip = 1689; continue _fun0002;
 1683:
            var8 = var18.eb/SnZ;
 1689:
            var9 = var8;
 1692:
            var8 = {};
            var8['gameTitle'] = var16;
            var8['streamingDurationRequirement'] = var15;
            var8['rewardNameWithArticle'] = var12;
            var8['duration'] = var13;
            var8['questReward'] = var12;
            var1 = var10.bind(var4)(var9, var8, var11);
 1725:
            _fun0002_ip = 2071; continue _fun0002;
 1730:
            var10 = {};
            var10['quest'] = var6;
            var10['taskDetails'] = var5;
            var10['withoutMarkdown'] = var2;
            var10['hasNitro'] = var7;
            var10['collectibleRewardDuration'] = var3;
            var8 = var10.quest;
            var9 = var10.taskDetails;
            var11 = var10.withoutMarkdown;
            var18 = var10.hasNitro;
            var13 = var10.collectibleRewardDuration;
            var19 = _closure1_slot0;
            var10 = _closure1_slot1;
            var12 = 5;
            var12 = var10[var12];
            var12 = var19.bind(var4)(var12);
            var16 = var12.SharedQuestFields;
            var15 = var16.build;
            var12 = var8.config;
            var12 = var15.bind(var16)(var12);
            var15 = var12.defaultRewardNameWithArticle;
            var12 = var9.targetMinutes;
            var9 = var8.config;
            var9 = var9.messages;
            var16 = var9.gameTitle;
            var9 = var10[var17];
            var21 = var19.bind(var4)(var9);
            var20 = var21.isCollectibleQuestRewardPremiumExtendable;
            var9 = var8.config;
            var9 = var20.bind(var21)(var9);
            var10 = var10[var17];
            var19 = var19.bind(var4)(var10);
            var10 = var19.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var8 = var8.config;
            var8 = var10.bind(var19)(var8);
            var10 = _closure1_slot8;
            if(!var18) { _fun0002_ip = 1918; continue _fun0002 }
 1915:
            if(var9) { _fun0002_ip = 1993; continue _fun0002 }
 1918:
            if(var9) { _fun0002_ip = 1960; continue _fun0002 }
 1921:
            var9 = null;
            if(!(var9 == var13)) { _fun0002_ip = 1960; continue _fun0002 }
 1927:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var9 = 4;
            var9 = var19[var9];
            var9 = var18.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.NIimTk;
            _fun0002_ip = 1991; continue _fun0002;
 1960:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var9 = var18.AwuMRU;
 1991:
            _fun0002_ip = 2038; continue _fun0002;
 1993:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            if(var8) { _fun0002_ip = 2029; continue _fun0002 }
 2021:
            var8 = var18.ziB0HB;
            _fun0002_ip = 2035; continue _fun0002;
 2029:
            var8 = var18.eb/SnZ;
 2035:
            var9 = var8;
 2038:
            var8 = {};
            var8['gameTitle'] = var16;
            var8['targetMinutes'] = var12;
            var8['rewardNameWithArticle'] = var15;
            var8['duration'] = var13;
            var8['streamingDurationRequirement'] = var12;
            var1 = var10.bind(var4)(var9, var8, var11);
 2071:
            _fun0002_ip = 2417; continue _fun0002;
 2076:
            var8 = {};
            var8['quest'] = var6;
            var8['taskDetails'] = var5;
            var8['withoutMarkdown'] = var2;
            var8['hasNitro'] = var7;
            var8['collectibleRewardDuration'] = var3;
            var3 = var8.quest;
            var7 = var8.taskDetails;
            var9 = var8.withoutMarkdown;
            var15 = var8.hasNitro;
            var11 = var8.collectibleRewardDuration;
            var16 = _closure1_slot0;
            var8 = _closure1_slot1;
            var10 = 5;
            var10 = var8[var10];
            var10 = var16.bind(var4)(var10);
            var13 = var10.SharedQuestFields;
            var12 = var13.build;
            var10 = var3.config;
            var10 = var12.bind(var13)(var10);
            var12 = var10.defaultRewardNameWithArticle;
            var10 = var7.targetMinutes;
            var7 = var3.config;
            var7 = var7.messages;
            var13 = var7.gameTitle;
            var7 = var8[var17];
            var19 = var16.bind(var4)(var7);
            var18 = var19.isCollectibleQuestRewardPremiumExtendable;
            var7 = var3.config;
            var7 = var18.bind(var19)(var7);
            var8 = var8[var17];
            var16 = var16.bind(var4)(var8);
            var8 = var16.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var3.config;
            var3 = var8.bind(var16)(var3);
            var8 = _closure1_slot8;
            if(!var15) { _fun0002_ip = 2264; continue _fun0002 }
 2261:
            if(var7) { _fun0002_ip = 2339; continue _fun0002 }
 2264:
            if(var7) { _fun0002_ip = 2306; continue _fun0002 }
 2267:
            var7 = null;
            if(!(var7 == var11)) { _fun0002_ip = 2306; continue _fun0002 }
 2273:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var7 = 4;
            var7 = var16[var7];
            var7 = var15.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.NIimTk;
            _fun0002_ip = 2337; continue _fun0002;
 2306:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var15 = 4;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var7 = var15.AwuMRU;
 2337:
            _fun0002_ip = 2384; continue _fun0002;
 2339:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var14 = 4;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            if(var3) { _fun0002_ip = 2375; continue _fun0002 }
 2367:
            var3 = var14.ziB0HB;
            _fun0002_ip = 2381; continue _fun0002;
 2375:
            var3 = var14.eb/SnZ;
 2381:
            var7 = var3;
 2384:
            var3 = {};
            var3['gameTitle'] = var13;
            var3['streamingDurationRequirement'] = var10;
            var3['rewardNameWithArticle'] = var12;
            var3['duration'] = var11;
            var3['targetMinutes'] = var10;
            var1 = var8.bind(var4)(var7, var3, var9);
 2417:
            _fun0002_ip = 2448; continue _fun0002;
 2419:
            var3 = {};
            var3['quest'] = var6;
            var3['taskDetails'] = var5;
            var3['withoutMarkdown'] = var2;
            var2 = function getQuestInstructionsToWinRewardSponsored(arg1) {
                var1 = arg1;
                var7 = var1.quest;
                var3 = var1.taskDetails;
                var5 = var1.withoutMarkdown;
                var2 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 5;
                var8 = var9[var4];
                var4 = undefined;
                var8 = var2.bind(var4)(var8);
                var10 = var8.SharedQuestFields;
                var8 = var10.build;
                var7 = var7.config;
                var7 = var8.bind(var10)(var7);
                var8 = var7.defaultRewardNameWithArticle;
                var7 = var3.targetMinutes;
                var3 = var3.applications;
                var _closure3_slot0 = var3;
                var3 = _closure1_slot8;
                var1 = 4;
                var1 = var9[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1.BfgxRk;
                var1 = {};
                var1['rewardNameWithArticle'] = var8;
                var1['targetMinutes'] = var7;
                var6 = function onClick() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openSponsoredQuestModal;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['onClick'] = var6;
                var1 = var3.bind(var4)(var2, var1, var5);
                return var1;
            };
            var1 = var2.bind(var4)(var3);
 2448:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var4 = function getQuestsInstructionsToWinReward(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot9;
            var2 = {};
            var7 = var2;
            var6 = var4;
            var5 = copyDataProperties(var7, var6);
            var4 = var4.currentUser;
            var5 = null;
            if(!(var5 == var4)) { _fun0003_ip = 47; continue _fun0003 }
 34:
            var5 = _closure1_slot3;
            var1 = var5.getCurrentUser;
            var4 = var1.bind(var5)();
 47:
            var1 = 'currentUser';
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