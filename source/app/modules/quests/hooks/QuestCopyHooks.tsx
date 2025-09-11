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
            var10 = var1.quest;
            var8 = var1.taskDetails;
            var14 = var1.thirdPartyTaskDetails;
            var7 = var1.withoutMarkdown;
            var15 = var1.currentUser;
            var5 = var1.popoutTargetElementRef;
            var4 = var1.onGameSheetOpened;
            var3 = var1.onGameSheetClosed;
            var12 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 8;
            var6 = var1[var6];
            var9 = undefined;
            var13 = var12.bind(var9)(var6);
            var11 = var13.isPremium;
            var6 = _closure1_slot6;
            var6 = var6.TIER_2;
            var11 = var11.bind(var13)(var15, var6);
            var20 = 6;
            var6 = var1[var20];
            var15 = var12.bind(var9)(var6);
            var13 = var15.getCollectibleQuestRewardDuration;
            var6 = var10.config;
            var6 = var13.bind(var15)(var6);
            var1 = var1[var20];
            var12 = var12.bind(var9)(var1);
            var1 = var12.isConsoleQuest;
            var1 = var1.bind(var12)(var10);
            if(!var1) { _fun0002_ip = 177; continue _fun0002 }
 149:
            var13 = _closure1_slot0;
            var12 = _closure1_slot1;
            var12 = var12[var20];
            var13 = var13.bind(var9)(var12);
            var12 = var13.shouldUsePlayOnDesktopTask;
            var1 = var12.bind(var13)(var10);
 177:
            var13 = _closure1_slot0;
            var12 = _closure1_slot1;
            var12 = var12[var20];
            var13 = var13.bind(var9)(var12);
            var12 = var13.isSponsoredPlayQuest;
            var12 = var12.bind(var13)(var10);
            if(var12) { _fun0002_ip = 2440; continue _fun0002 }
 211:
            if(var1) { _fun0002_ip = 2094; continue _fun0002 }
 217:
            var12 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var20];
            var12 = var12.bind(var9)(var1);
            var1 = var12.isConsoleQuest;
            var1 = var1.bind(var12)(var10);
            if(var1) { _fun0002_ip = 1748; continue _fun0002 }
 251:
            var12 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var20];
            var12 = var12.bind(var9)(var1);
            var1 = var12.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var12)(var10);
            if(var1) { _fun0002_ip = 1400; continue _fun0002 }
 285:
            var12 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var20];
            var13 = var12.bind(var9)(var1);
            var12 = var13.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var10;
            var1 = var12.bind(var13)(var1);
            if(var1) { _fun0002_ip = 1281; continue _fun0002 }
 326:
            var12 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var20];
            var12 = var12.bind(var9)(var1);
            var1 = var12.hasWatchVideoTasks;
            var1 = var1.bind(var12)(var10);
            var13 = _closure1_slot0;
            var12 = _closure1_slot1;
            if(var1) { _fun0002_ip = 897; continue _fun0002 }
 368:
            var1 = var12[var20];
            var15 = var13.bind(var9)(var1);
            var1 = var15.hasPlayActivityTask;
            var1 = var1.bind(var15)(var10);
            if(var1) { _fun0002_ip = 755; continue _fun0002 }
 394:
            var15 = null;
            if(!(var15 == var14)) { _fun0002_ip = 745; continue _fun0002 }
 403:
            var16 = {};
            var16['quest'] = var10;
            var16['taskDetails'] = var8;
            var16['withoutMarkdown'] = var7;
            var16['hasNitro'] = var11;
            var16['collectibleRewardDuration'] = var6;
            var1 = var16.quest;
            var21 = var16.taskDetails;
            var17 = var16.withoutMarkdown;
            var24 = var16.hasNitro;
            var19 = var16.collectibleRewardDuration;
            var25 = _closure1_slot0;
            var16 = _closure1_slot1;
            var18 = 5;
            var18 = var16[var18];
            var18 = var25.bind(var9)(var18);
            var23 = var18.SharedQuestFields;
            var22 = var23.build;
            var18 = var1.config;
            var18 = var22.bind(var23)(var18);
            var18 = var18.defaultRewardNameWithArticle;
            var21 = var21.targetMinutes;
            var22 = var1.config;
            var22 = var22.messages;
            var22 = var22.gameTitle;
            var23 = var16[var20];
            var27 = var25.bind(var9)(var23);
            var26 = var27.isCollectibleQuestRewardPremiumExtendable;
            var23 = var1.config;
            var23 = var26.bind(var27)(var23);
            var16 = var16[var20];
            var25 = var25.bind(var9)(var16);
            var16 = var25.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var1 = var1.config;
            var1 = var16.bind(var25)(var1);
            var16 = _closure1_slot8;
            if(!var24) { _fun0002_ip = 591; continue _fun0002 }
 588:
            if(var23) { _fun0002_ip = 666; continue _fun0002 }
 591:
            if(var23) { _fun0002_ip = 631; continue _fun0002 }
 594:
            if(!(var15 == var19)) { _fun0002_ip = 631; continue _fun0002 }
 598:
            var23 = _closure1_slot0;
            var24 = _closure1_slot1;
            var15 = 4;
            var15 = var24[var15];
            var15 = var23.bind(var9)(var15);
            var15 = var15.t;
            var15 = var15.hkJ+Gh;
            _fun0002_ip = 664; continue _fun0002;
 631:
            var24 = _closure1_slot0;
            var25 = _closure1_slot1;
            var23 = 4;
            var23 = var25[var23];
            var23 = var24.bind(var9)(var23);
            var23 = var23.t;
            var15 = var23.BLyDvL;
 664:
            _fun0002_ip = 715; continue _fun0002;
 666:
            var24 = _closure1_slot0;
            var25 = _closure1_slot1;
            var23 = 4;
            var23 = var25[var23];
            var23 = var24.bind(var9)(var23);
            var23 = var23.t;
            if(var1) { _fun0002_ip = 704; continue _fun0002 }
 694:
            var1 = var23.smG9qq;
            _fun0002_ip = 712; continue _fun0002;
 704:
            var1 = var23.X8Yt//;
 712:
            var15 = var1;
 715:
            var1 = {};
            var1['gameTitle'] = var22;
            var1['streamingDurationRequirement'] = var21;
            var1['duration'] = var19;
            var1['questReward'] = var18;
            var1 = var16.bind(var9)(var15, var1, var17);
            _fun0002_ip = 750; continue _fun0002;
 745:
            var1 = var14.description;
 750:
            _fun0002_ip = 892; continue _fun0002;
 755:
            var16 = {};
            var16['quest'] = var10;
            var16['taskDetails'] = var8;
            var16['withoutMarkdown'] = var7;
            var14 = var16.quest;
            var15 = var16.taskDetails;
            var17 = var16.withoutMarkdown;
            var19 = var15.targetMinutes;
            var15 = _closure1_slot0;
            var21 = _closure1_slot1;
            var16 = 5;
            var16 = var21[var16];
            var16 = var15.bind(var9)(var16);
            var18 = var16.SharedQuestFields;
            var16 = var18.build;
            var14 = var14.config;
            var14 = var16.bind(var18)(var14);
            var18 = var14.defaultRewardNameWithArticle;
            var16 = _closure1_slot8;
            var14 = 4;
            var14 = var21[var14];
            var14 = var15.bind(var9)(var14);
            var14 = var14.t;
            var15 = var14.VYwSSk;
            var14 = {};
            var14['streamingDurationRequirement'] = var19;
            var14['questReward'] = var18;
            var1 = var16.bind(var9)(var15, var14, var17);
 892:
            _fun0002_ip = 1279; continue _fun0002;
 897:
            var15 = 5;
            var12 = var12[var15];
            var12 = var13.bind(var9)(var12);
            var14 = var12.SharedQuestFields;
            var13 = var14.build;
            var12 = var10.config;
            var12 = var13.bind(var14)(var12);
            var14 = var12.defaultWatchVideoTask;
            var13 = null;
            var16 = var13 == var14;
            var12 = undefined;
            if(var16) { _fun0002_ip = 960; continue _fun0002 }
 948:
            var14 = var14.messages;
            var12 = var14.videoTitle;
 960:
            var14 = var13 != var12;
            var16 = 'video';
            if(!var14) { _fun0002_ip = 974; continue _fun0002 }
 971:
            var16 = var12;
 974:
            var14 = _closure1_slot0;
            var12 = _closure1_slot1;
            var15 = var12[var15];
            var15 = var14.bind(var9)(var15);
            var18 = var15.SharedQuestFields;
            var17 = var18.build;
            var15 = var10.config;
            var15 = var17.bind(var18)(var15);
            var15 = var15.defaultRewardNameWithArticle;
            var17 = var12[var20];
            var19 = var14.bind(var9)(var17);
            var18 = var19.isCollectibleQuestRewardPremiumExtendable;
            var17 = var10.config;
            var17 = var18.bind(var19)(var17);
            var12 = var12[var20];
            var18 = var14.bind(var9)(var12);
            var14 = var18.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var12 = var10.config;
            var12 = var14.bind(var18)(var12);
            var14 = _closure1_slot8;
            if(!var17) { _fun0002_ip = 1082; continue _fun0002 }
 1076:
            if(var11) { _fun0002_ip = 1207; continue _fun0002 }
 1082:
            if(var17) { _fun0002_ip = 1172; continue _fun0002 }
 1085:
            if(!(var13 == var6)) { _fun0002_ip = 1172; continue _fun0002 }
 1089:
            var17 = var10.id;
            var13 = _closure1_slot4;
            if(!(var17 !== var13)) { _fun0002_ip = 1137; continue _fun0002 }
 1102:
            var17 = _closure1_slot0;
            var18 = _closure1_slot1;
            var13 = 4;
            var13 = var18[var13];
            var13 = var17.bind(var9)(var13);
            var13 = var13.t;
            var13 = var13.g+InPD;
            _fun0002_ip = 1170; continue _fun0002;
 1137:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var17 = 4;
            var17 = var19[var17];
            var17 = var18.bind(var9)(var17);
            var17 = var17.t;
            var13 = var17.Rsd5bG;
 1170:
            _fun0002_ip = 1205; continue _fun0002;
 1172:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var17 = 4;
            var17 = var19[var17];
            var17 = var18.bind(var9)(var17);
            var17 = var17.t;
            var13 = var17.W/HkLC;
 1205:
            _fun0002_ip = 1256; continue _fun0002;
 1207:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var17 = 4;
            var17 = var19[var17];
            var17 = var18.bind(var9)(var17);
            var17 = var17.t;
            if(var12) { _fun0002_ip = 1245; continue _fun0002 }
 1235:
            var12 = var17.vs/xBg;
            _fun0002_ip = 1253; continue _fun0002;
 1245:
            var12 = var17.xqX+var7;
 1253:
            var13 = var12;
 1256:
            var12 = {};
            var12['videoTitle'] = var16;
            var12['rewardNameWithArticle'] = var15;
            var12['duration'] = var6;
            var1 = var14.bind(var9)(var13, var12, var7);
 1279:
            _fun0002_ip = 1395; continue _fun0002;
 1281:
            var14 = {};
            var14['quest'] = var10;
            var14['taskDetails'] = var8;
            var14['withoutMarkdown'] = var7;
            var12 = var14.quest;
            var13 = var14.taskDetails;
            var15 = var14.withoutMarkdown;
            var16 = var13.targetMinutes;
            var12 = var12.config;
            var12 = var12.messages;
            var17 = var12.gameTitle;
            var14 = _closure1_slot8;
            var13 = _closure1_slot0;
            var18 = _closure1_slot1;
            var12 = 4;
            var12 = var18[var12];
            var12 = var13.bind(var9)(var12);
            var12 = var12.t;
            var13 = var12.a/ia7O;
            var12 = {};
            var12['gameTitle'] = var17;
            var12['streamingDurationRequirement'] = var16;
            var1 = var14.bind(var9)(var13, var12, var15);
 1395:
            _fun0002_ip = 1743; continue _fun0002;
 1400:
            var14 = {};
            var14['quest'] = var10;
            var14['taskDetails'] = var8;
            var14['withoutMarkdown'] = var7;
            var14['hasNitro'] = var11;
            var14['collectibleRewardDuration'] = var6;
            var12 = var14.quest;
            var13 = var14.taskDetails;
            var15 = var14.withoutMarkdown;
            var21 = var14.hasNitro;
            var17 = var14.collectibleRewardDuration;
            var22 = _closure1_slot0;
            var14 = _closure1_slot1;
            var16 = 5;
            var16 = var14[var16];
            var16 = var22.bind(var9)(var16);
            var19 = var16.SharedQuestFields;
            var18 = var19.build;
            var16 = var12.config;
            var16 = var18.bind(var19)(var16);
            var16 = var16.defaultRewardNameWithArticle;
            var18 = var13.targetMinutes;
            var13 = var12.config;
            var13 = var13.messages;
            var19 = var13.gameTitle;
            var13 = var14[var20];
            var24 = var22.bind(var9)(var13);
            var23 = var24.isCollectibleQuestRewardPremiumExtendable;
            var13 = var12.config;
            var13 = var23.bind(var24)(var13);
            var14 = var14[var20];
            var22 = var22.bind(var9)(var14);
            var14 = var22.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var12 = var12.config;
            var12 = var14.bind(var22)(var12);
            var14 = _closure1_slot8;
            if(!var21) { _fun0002_ip = 1588; continue _fun0002 }
 1585:
            if(var13) { _fun0002_ip = 1665; continue _fun0002 }
 1588:
            if(var13) { _fun0002_ip = 1632; continue _fun0002 }
 1591:
            var13 = null;
            if(!(var13 == var17)) { _fun0002_ip = 1632; continue _fun0002 }
 1597:
            var21 = _closure1_slot0;
            var22 = _closure1_slot1;
            var13 = 4;
            var13 = var22[var13];
            var13 = var21.bind(var9)(var13);
            var13 = var13.t;
            var13 = var13.FZL5Q0;
            _fun0002_ip = 1663; continue _fun0002;
 1632:
            var22 = _closure1_slot0;
            var23 = _closure1_slot1;
            var21 = 4;
            var21 = var23[var21];
            var21 = var22.bind(var9)(var21);
            var21 = var21.t;
            var13 = var21.AwuMRU;
 1663:
            _fun0002_ip = 1710; continue _fun0002;
 1665:
            var22 = _closure1_slot0;
            var23 = _closure1_slot1;
            var21 = 4;
            var21 = var23[var21];
            var21 = var22.bind(var9)(var21);
            var21 = var21.t;
            if(var12) { _fun0002_ip = 1701; continue _fun0002 }
 1693:
            var12 = var21.ziB0HB;
            _fun0002_ip = 1707; continue _fun0002;
 1701:
            var12 = var21.eb/SnZ;
 1707:
            var13 = var12;
 1710:
            var12 = {};
            var12['gameTitle'] = var19;
            var12['streamingDurationRequirement'] = var18;
            var12['rewardNameWithArticle'] = var16;
            var12['duration'] = var17;
            var12['questReward'] = var16;
            var1 = var14.bind(var9)(var13, var12, var15);
 1743:
            _fun0002_ip = 2089; continue _fun0002;
 1748:
            var14 = {};
            var14['quest'] = var10;
            var14['taskDetails'] = var8;
            var14['withoutMarkdown'] = var7;
            var14['hasNitro'] = var11;
            var14['collectibleRewardDuration'] = var6;
            var12 = var14.quest;
            var13 = var14.taskDetails;
            var15 = var14.withoutMarkdown;
            var21 = var14.hasNitro;
            var17 = var14.collectibleRewardDuration;
            var22 = _closure1_slot0;
            var14 = _closure1_slot1;
            var16 = 5;
            var16 = var14[var16];
            var16 = var22.bind(var9)(var16);
            var19 = var16.SharedQuestFields;
            var18 = var19.build;
            var16 = var12.config;
            var16 = var18.bind(var19)(var16);
            var18 = var16.defaultRewardNameWithArticle;
            var16 = var13.targetMinutes;
            var13 = var12.config;
            var13 = var13.messages;
            var19 = var13.gameTitle;
            var13 = var14[var20];
            var24 = var22.bind(var9)(var13);
            var23 = var24.isCollectibleQuestRewardPremiumExtendable;
            var13 = var12.config;
            var13 = var23.bind(var24)(var13);
            var14 = var14[var20];
            var22 = var22.bind(var9)(var14);
            var14 = var22.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var12 = var12.config;
            var12 = var14.bind(var22)(var12);
            var14 = _closure1_slot8;
            if(!var21) { _fun0002_ip = 1936; continue _fun0002 }
 1933:
            if(var13) { _fun0002_ip = 2011; continue _fun0002 }
 1936:
            if(var13) { _fun0002_ip = 1978; continue _fun0002 }
 1939:
            var13 = null;
            if(!(var13 == var17)) { _fun0002_ip = 1978; continue _fun0002 }
 1945:
            var21 = _closure1_slot0;
            var22 = _closure1_slot1;
            var13 = 4;
            var13 = var22[var13];
            var13 = var21.bind(var9)(var13);
            var13 = var13.t;
            var13 = var13.NIimTk;
            _fun0002_ip = 2009; continue _fun0002;
 1978:
            var22 = _closure1_slot0;
            var23 = _closure1_slot1;
            var21 = 4;
            var21 = var23[var21];
            var21 = var22.bind(var9)(var21);
            var21 = var21.t;
            var13 = var21.AwuMRU;
 2009:
            _fun0002_ip = 2056; continue _fun0002;
 2011:
            var22 = _closure1_slot0;
            var23 = _closure1_slot1;
            var21 = 4;
            var21 = var23[var21];
            var21 = var22.bind(var9)(var21);
            var21 = var21.t;
            if(var12) { _fun0002_ip = 2047; continue _fun0002 }
 2039:
            var12 = var21.ziB0HB;
            _fun0002_ip = 2053; continue _fun0002;
 2047:
            var12 = var21.eb/SnZ;
 2053:
            var13 = var12;
 2056:
            var12 = {};
            var12['gameTitle'] = var19;
            var12['targetMinutes'] = var16;
            var12['rewardNameWithArticle'] = var18;
            var12['duration'] = var17;
            var12['streamingDurationRequirement'] = var16;
            var1 = var14.bind(var9)(var13, var12, var15);
 2089:
            _fun0002_ip = 2435; continue _fun0002;
 2094:
            var12 = {};
            var12['quest'] = var10;
            var12['taskDetails'] = var8;
            var12['withoutMarkdown'] = var7;
            var12['hasNitro'] = var11;
            var12['collectibleRewardDuration'] = var6;
            var6 = var12.quest;
            var11 = var12.taskDetails;
            var13 = var12.withoutMarkdown;
            var18 = var12.hasNitro;
            var15 = var12.collectibleRewardDuration;
            var19 = _closure1_slot0;
            var12 = _closure1_slot1;
            var14 = 5;
            var14 = var12[var14];
            var14 = var19.bind(var9)(var14);
            var17 = var14.SharedQuestFields;
            var16 = var17.build;
            var14 = var6.config;
            var14 = var16.bind(var17)(var14);
            var16 = var14.defaultRewardNameWithArticle;
            var14 = var11.targetMinutes;
            var11 = var6.config;
            var11 = var11.messages;
            var17 = var11.gameTitle;
            var11 = var12[var20];
            var22 = var19.bind(var9)(var11);
            var21 = var22.isCollectibleQuestRewardPremiumExtendable;
            var11 = var6.config;
            var11 = var21.bind(var22)(var11);
            var12 = var12[var20];
            var19 = var19.bind(var9)(var12);
            var12 = var19.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var6 = var6.config;
            var6 = var12.bind(var19)(var6);
            var12 = _closure1_slot8;
            if(!var18) { _fun0002_ip = 2282; continue _fun0002 }
 2279:
            if(var11) { _fun0002_ip = 2357; continue _fun0002 }
 2282:
            if(var11) { _fun0002_ip = 2324; continue _fun0002 }
 2285:
            var11 = null;
            if(!(var11 == var15)) { _fun0002_ip = 2324; continue _fun0002 }
 2291:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var11 = 4;
            var11 = var19[var11];
            var11 = var18.bind(var9)(var11);
            var11 = var11.t;
            var11 = var11.NIimTk;
            _fun0002_ip = 2355; continue _fun0002;
 2324:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var9)(var18);
            var18 = var18.t;
            var11 = var18.AwuMRU;
 2355:
            _fun0002_ip = 2402; continue _fun0002;
 2357:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var9)(var18);
            var18 = var18.t;
            if(var6) { _fun0002_ip = 2393; continue _fun0002 }
 2385:
            var6 = var18.ziB0HB;
            _fun0002_ip = 2399; continue _fun0002;
 2393:
            var6 = var18.eb/SnZ;
 2399:
            var11 = var6;
 2402:
            var6 = {};
            var6['gameTitle'] = var17;
            var6['streamingDurationRequirement'] = var14;
            var6['rewardNameWithArticle'] = var16;
            var6['duration'] = var15;
            var6['targetMinutes'] = var14;
            var1 = var12.bind(var9)(var11, var6, var13);
 2435:
            _fun0002_ip = 2779; continue _fun0002;
 2440:
            var6 = {};
            var6['quest'] = var10;
            var6['taskDetails'] = var8;
            var6['withoutMarkdown'] = var7;
            var6['popoutTargetElementRef'] = var5;
            var6['onGameSheetOpened'] = var4;
            var6['onGameSheetClosed'] = var3;
            var5 = var6.quest;
            var4 = var6.taskDetails;
            var3 = var6.withoutMarkdown;
            var13 = var6.popoutTargetElementRef;
            var12 = var6.onGameSheetOpened;
            var11 = var6.onGameSheetClosed;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 5;
            var6 = var8[var6];
            var6 = var7.bind(var9)(var6);
            var7 = var6.SharedQuestFields;
            var6 = var7.build;
            var5 = var5.config;
            var5 = var6.bind(var7)(var5);
            var8 = var5.defaultRewardNameWithArticle;
            var7 = var4.targetMinutes;
            var14 = var4.applications;
            var4 = _closure1_slot0;
            var10 = _closure1_slot1;
            if(var3) { _fun0002_ip = 2716; continue _fun0002 }
 2582:
            var3 = 7;
            var3 = var10[var3];
            var6 = var4.bind(var9)(var3);
            var5 = var6.createGameSheetHook;
            var3 = {};
            var15 = null;
            if(!(var15 == var14)) { _fun0002_ip = 2612; continue _fun0002 }
 2608:
            var14 = new Array(0);
 2612:
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
            _fun0002_ip = 2776; continue _fun0002;
 2716:
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
 2776:
            var1 = var2;
 2779:
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