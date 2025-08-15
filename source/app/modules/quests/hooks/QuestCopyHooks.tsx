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
            var1 = arguments[3];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var1 = false;
 17:
            if(!var1) { _fun0001_ip = 67; continue _fun0001 }
 20:
            var1 = arg3;
            if(var1) { _fun0001_ip = 67; continue _fun0001 }
 26:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var3[var1];
            var1 = var2.bind(var6)(var1);
            var2 = var1.intl;
            var1 = var2.format;
            var1 = var1.bind(var2)(var5, var4);
            _fun0001_ip = 106; continue _fun0001;
 67:
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            var3 = var2.intl;
            var2 = var3.formatToPlainString;
            var1 = var2.bind(var3)(var5, var4);
 106:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function _getQuestsInstructionsToWinReward(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var9 = var1.quest;
            var8 = var1.taskDetails;
            var11 = var1.thirdPartyTaskDetails;
            var7 = var1.withoutMarkdown;
            var12 = var1.currentUser;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var4 = 7;
            var5 = var1[var4];
            var4 = undefined;
            var10 = var3.bind(var4)(var5);
            var6 = var10.isPremium;
            var5 = _closure1_slot6;
            var5 = var5.TIER_2;
            var6 = var6.bind(var10)(var12, var5);
            var20 = 6;
            var5 = var1[var20];
            var12 = var3.bind(var4)(var5);
            var10 = var12.getCollectibleQuestRewardDuration;
            var5 = var9.config;
            var5 = var10.bind(var12)(var5);
            var1 = var1[var20];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isConsoleQuest;
            var1 = var1.bind(var3)(var9);
            if(!var1) { _fun0002_ip = 167; continue _fun0002 }
 133:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var20];
            var3 = var3.bind(var4)(var1);
            var1 = var3.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var3)(var9);
            if(var1) { _fun0002_ip = 1734; continue _fun0002 }
 167:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var20];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isConsoleQuest;
            var1 = var1.bind(var3)(var9);
            if(var1) { _fun0002_ip = 1391; continue _fun0002 }
 201:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var20];
            var3 = var3.bind(var4)(var1);
            var1 = var3.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var3)(var9);
            if(var1) { _fun0002_ip = 1347; continue _fun0002 }
 235:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var20];
            var10 = var3.bind(var4)(var1);
            var3 = var10.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var9;
            var1 = var3.bind(var10)(var1);
            if(var1) { _fun0002_ip = 1231; continue _fun0002 }
 276:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var20];
            var3 = var3.bind(var4)(var1);
            var1 = var3.hasWatchVideoTasks;
            var1 = var1.bind(var3)(var9);
            var10 = _closure1_slot0;
            var3 = _closure1_slot1;
            if(var1) { _fun0002_ip = 847; continue _fun0002 }
 318:
            var1 = var3[var20];
            var12 = var10.bind(var4)(var1);
            var1 = var12.hasPlayActivityTask;
            var1 = var1.bind(var12)(var9);
            if(var1) { _fun0002_ip = 705; continue _fun0002 }
 344:
            var12 = null;
            if(!(var12 == var11)) { _fun0002_ip = 695; continue _fun0002 }
 353:
            var13 = {};
            var13['quest'] = var9;
            var13['taskDetails'] = var8;
            var13['withoutMarkdown'] = var7;
            var13['hasNitro'] = var6;
            var13['collectibleRewardDuration'] = var5;
            var1 = var13.quest;
            var18 = var13.taskDetails;
            var14 = var13.withoutMarkdown;
            var22 = var13.hasNitro;
            var16 = var13.collectibleRewardDuration;
            var23 = _closure1_slot0;
            var13 = _closure1_slot1;
            var15 = 5;
            var15 = var13[var15];
            var15 = var23.bind(var4)(var15);
            var21 = var15.SharedQuestFields;
            var19 = var21.build;
            var15 = var1.config;
            var15 = var19.bind(var21)(var15);
            var15 = var15.defaultRewardNameWithArticle;
            var18 = var18.targetMinutes;
            var19 = var1.config;
            var19 = var19.messages;
            var19 = var19.gameTitle;
            var21 = var13[var20];
            var25 = var23.bind(var4)(var21);
            var24 = var25.isCollectibleQuestRewardPremiumExtendable;
            var21 = var1.config;
            var21 = var24.bind(var25)(var21);
            var13 = var13[var20];
            var23 = var23.bind(var4)(var13);
            var13 = var23.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var1 = var1.config;
            var1 = var13.bind(var23)(var1);
            var13 = _closure1_slot8;
            if(!var22) { _fun0002_ip = 541; continue _fun0002 }
 538:
            if(var21) { _fun0002_ip = 616; continue _fun0002 }
 541:
            if(var21) { _fun0002_ip = 581; continue _fun0002 }
 544:
            if(!(var12 == var16)) { _fun0002_ip = 581; continue _fun0002 }
 548:
            var21 = _closure1_slot0;
            var22 = _closure1_slot1;
            var12 = 4;
            var12 = var22[var12];
            var12 = var21.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.hkJ+Gh;
            _fun0002_ip = 614; continue _fun0002;
 581:
            var22 = _closure1_slot0;
            var23 = _closure1_slot1;
            var21 = 4;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.t;
            var12 = var21.BLyDvL;
 614:
            _fun0002_ip = 665; continue _fun0002;
 616:
            var22 = _closure1_slot0;
            var23 = _closure1_slot1;
            var21 = 4;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.t;
            if(var1) { _fun0002_ip = 654; continue _fun0002 }
 644:
            var1 = var21.smG9qq;
            _fun0002_ip = 662; continue _fun0002;
 654:
            var1 = var21.X8Yt//;
 662:
            var12 = var1;
 665:
            var1 = {};
            var1['gameTitle'] = var19;
            var1['streamingDurationRequirement'] = var18;
            var1['duration'] = var16;
            var1['questReward'] = var15;
            var1 = var13.bind(var4)(var12, var1, var14);
            _fun0002_ip = 700; continue _fun0002;
 695:
            var1 = var11.description;
 700:
            _fun0002_ip = 842; continue _fun0002;
 705:
            var13 = {};
            var13['quest'] = var9;
            var13['taskDetails'] = var8;
            var13['withoutMarkdown'] = var7;
            var11 = var13.quest;
            var12 = var13.taskDetails;
            var14 = var13.withoutMarkdown;
            var16 = var12.targetMinutes;
            var12 = _closure1_slot0;
            var18 = _closure1_slot1;
            var13 = 5;
            var13 = var18[var13];
            var13 = var12.bind(var4)(var13);
            var15 = var13.SharedQuestFields;
            var13 = var15.build;
            var11 = var11.config;
            var11 = var13.bind(var15)(var11);
            var15 = var11.defaultRewardNameWithArticle;
            var13 = _closure1_slot8;
            var11 = 4;
            var11 = var18[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var12 = var11.VYwSSk;
            var11 = {};
            var11['streamingDurationRequirement'] = var16;
            var11['questReward'] = var15;
            var1 = var13.bind(var4)(var12, var11, var14);
 842:
            _fun0002_ip = 1229; continue _fun0002;
 847:
            var12 = 5;
            var3 = var3[var12];
            var3 = var10.bind(var4)(var3);
            var11 = var3.SharedQuestFields;
            var10 = var11.build;
            var3 = var9.config;
            var3 = var10.bind(var11)(var3);
            var11 = var3.defaultWatchVideoTask;
            var10 = null;
            var13 = var10 == var11;
            var3 = undefined;
            if(var13) { _fun0002_ip = 910; continue _fun0002 }
 898:
            var11 = var11.messages;
            var3 = var11.videoTitle;
 910:
            var11 = var10 != var3;
            var13 = 'video';
            if(!var11) { _fun0002_ip = 924; continue _fun0002 }
 921:
            var13 = var3;
 924:
            var11 = _closure1_slot0;
            var3 = _closure1_slot1;
            var12 = var3[var12];
            var12 = var11.bind(var4)(var12);
            var15 = var12.SharedQuestFields;
            var14 = var15.build;
            var12 = var9.config;
            var12 = var14.bind(var15)(var12);
            var12 = var12.defaultRewardNameWithArticle;
            var14 = var3[var20];
            var16 = var11.bind(var4)(var14);
            var15 = var16.isCollectibleQuestRewardPremiumExtendable;
            var14 = var9.config;
            var14 = var15.bind(var16)(var14);
            var3 = var3[var20];
            var15 = var11.bind(var4)(var3);
            var11 = var15.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var9.config;
            var3 = var11.bind(var15)(var3);
            var11 = _closure1_slot8;
            if(!var14) { _fun0002_ip = 1032; continue _fun0002 }
 1026:
            if(var6) { _fun0002_ip = 1157; continue _fun0002 }
 1032:
            if(var14) { _fun0002_ip = 1122; continue _fun0002 }
 1035:
            if(!(var10 == var5)) { _fun0002_ip = 1122; continue _fun0002 }
 1039:
            var14 = var9.id;
            var10 = _closure1_slot4;
            if(!(var14 !== var10)) { _fun0002_ip = 1087; continue _fun0002 }
 1052:
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var10 = 4;
            var10 = var15[var10];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.g+InPD;
            _fun0002_ip = 1120; continue _fun0002;
 1087:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var14 = 4;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var10 = var14.Rsd5bG;
 1120:
            _fun0002_ip = 1155; continue _fun0002;
 1122:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var14 = 4;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var10 = var14.W/HkLC;
 1155:
            _fun0002_ip = 1206; continue _fun0002;
 1157:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var14 = 4;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            if(var3) { _fun0002_ip = 1195; continue _fun0002 }
 1185:
            var3 = var14.vs/xBg;
            _fun0002_ip = 1203; continue _fun0002;
 1195:
            var3 = var14.xqX+var7;
 1203:
            var10 = var3;
 1206:
            var3 = {};
            var3['videoTitle'] = var13;
            var3['rewardNameWithArticle'] = var12;
            var3['duration'] = var5;
            var1 = var11.bind(var4)(var10, var3, var7);
 1229:
            _fun0002_ip = 1345; continue _fun0002;
 1231:
            var11 = {};
            var11['quest'] = var9;
            var11['taskDetails'] = var8;
            var11['withoutMarkdown'] = var7;
            var3 = var11.quest;
            var10 = var11.taskDetails;
            var12 = var11.withoutMarkdown;
            var13 = var10.targetMinutes;
            var3 = var3.config;
            var3 = var3.messages;
            var14 = var3.gameTitle;
            var11 = _closure1_slot8;
            var10 = _closure1_slot0;
            var15 = _closure1_slot1;
            var3 = 4;
            var3 = var15[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var10 = var3.a/ia7O;
            var3 = {};
            var3['gameTitle'] = var14;
            var3['streamingDurationRequirement'] = var13;
            var1 = var11.bind(var4)(var10, var3, var12);
 1345:
            _fun0002_ip = 1386; continue _fun0002;
 1347:
            var10 = {};
            var10['quest'] = var9;
            var10['taskDetails'] = var8;
            var10['withoutMarkdown'] = var7;
            var10['hasNitro'] = var6;
            var10['collectibleRewardDuration'] = var5;
            var3 = function getQuestInstructionsToWinRewardPlaytimeOnDesktop(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.quest;
                    var2 = var1.taskDetails;
                    var5 = var1.withoutMarkdown;
                    var11 = var1.hasNitro;
                    var8 = var1.collectibleRewardDuration;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var4 = 5;
                    var6 = var14[var4];
                    var4 = undefined;
                    var6 = var13.bind(var4)(var6);
                    var9 = var6.SharedQuestFields;
                    var7 = var9.build;
                    var6 = var3.config;
                    var6 = var7.bind(var9)(var6);
                    var7 = var6.defaultRewardNameWithArticle;
                    var6 = var2.targetMinutes;
                    var12 = var2.isSponsoredQuest;
                    var2 = var3.config;
                    var2 = var2.messages;
                    var9 = var2.gameTitle;
                    var10 = 6;
                    var2 = var14[var10];
                    var16 = var13.bind(var4)(var2);
                    var15 = var16.isCollectibleQuestRewardPremiumExtendable;
                    var2 = var3.config;
                    var2 = var15.bind(var16)(var2);
                    var10 = var14[var10];
                    var13 = var13.bind(var4)(var10);
                    var10 = var13.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                    var3 = var3.config;
                    var10 = var10.bind(var13)(var3);
                    var3 = _closure1_slot8;
                    if(var12) { _fun0003_ip = 308; continue _fun0003 }
 178:
                    if(!var11) { _fun0003_ip = 184; continue _fun0003 }
 181:
                    if(var2) { _fun0003_ip = 261; continue _fun0003 }
 184:
                    if(var2) { _fun0003_ip = 228; continue _fun0003 }
 187:
                    var2 = null;
                    if(!(var2 == var8)) { _fun0003_ip = 228; continue _fun0003 }
 193:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var2 = 4;
                    var2 = var12[var2];
                    var2 = var11.bind(var4)(var2);
                    var2 = var2.t;
                    var2 = var2.FZL5Q0;
                    _fun0003_ip = 259; continue _fun0003;
 228:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var11 = 4;
                    var11 = var13[var11];
                    var11 = var12.bind(var4)(var11);
                    var11 = var11.t;
                    var2 = var11.AwuMRU;
 259:
                    _fun0003_ip = 306; continue _fun0003;
 261:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var11 = 4;
                    var11 = var13[var11];
                    var11 = var12.bind(var4)(var11);
                    var11 = var11.t;
                    if(var10) { _fun0003_ip = 297; continue _fun0003 }
 289:
                    var10 = var11.ziB0HB;
                    _fun0003_ip = 303; continue _fun0003;
 297:
                    var10 = var11.eb/SnZ;
 303:
                    var2 = var10;
 306:
                    _fun0003_ip = 339; continue _fun0003;
 308:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var1 = 4;
                    var1 = var11[var1];
                    var1 = var10.bind(var4)(var1);
                    var1 = var1.t;
                    var2 = var1.BfgxRk;
 339:
                    var1 = {};
                    var1['gameTitle'] = var9;
                    var1['streamingDurationRequirement'] = var6;
                    var1['rewardNameWithArticle'] = var7;
                    var1['duration'] = var8;
                    var1['questReward'] = var7;
                    var1['targetMinutes'] = var6;
                    var6 = function onClick() {
                        var1 = undefined;
                        return var1;
                    };
                    var1['onClick'] = var6;
                    var1 = var3.bind(var4)(var2, var1, var5);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var10);
 1386:
            _fun0002_ip = 1732; continue _fun0002;
 1391:
            var11 = {};
            var11['quest'] = var9;
            var11['taskDetails'] = var8;
            var11['withoutMarkdown'] = var7;
            var11['hasNitro'] = var6;
            var11['collectibleRewardDuration'] = var5;
            var3 = var11.quest;
            var10 = var11.taskDetails;
            var12 = var11.withoutMarkdown;
            var18 = var11.hasNitro;
            var14 = var11.collectibleRewardDuration;
            var19 = _closure1_slot0;
            var11 = _closure1_slot1;
            var13 = 5;
            var13 = var11[var13];
            var13 = var19.bind(var4)(var13);
            var16 = var13.SharedQuestFields;
            var15 = var16.build;
            var13 = var3.config;
            var13 = var15.bind(var16)(var13);
            var15 = var13.defaultRewardNameWithArticle;
            var13 = var10.targetMinutes;
            var10 = var3.config;
            var10 = var10.messages;
            var16 = var10.gameTitle;
            var10 = var11[var20];
            var22 = var19.bind(var4)(var10);
            var21 = var22.isCollectibleQuestRewardPremiumExtendable;
            var10 = var3.config;
            var10 = var21.bind(var22)(var10);
            var11 = var11[var20];
            var19 = var19.bind(var4)(var11);
            var11 = var19.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var3.config;
            var3 = var11.bind(var19)(var3);
            var11 = _closure1_slot8;
            if(!var18) { _fun0002_ip = 1579; continue _fun0002 }
 1576:
            if(var10) { _fun0002_ip = 1654; continue _fun0002 }
 1579:
            if(var10) { _fun0002_ip = 1621; continue _fun0002 }
 1582:
            var10 = null;
            if(!(var10 == var14)) { _fun0002_ip = 1621; continue _fun0002 }
 1588:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var10 = 4;
            var10 = var19[var10];
            var10 = var18.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.NIimTk;
            _fun0002_ip = 1652; continue _fun0002;
 1621:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var10 = var18.AwuMRU;
 1652:
            _fun0002_ip = 1699; continue _fun0002;
 1654:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var17 = 4;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            if(var3) { _fun0002_ip = 1690; continue _fun0002 }
 1682:
            var3 = var17.ziB0HB;
            _fun0002_ip = 1696; continue _fun0002;
 1690:
            var3 = var17.eb/SnZ;
 1696:
            var10 = var3;
 1699:
            var3 = {};
            var3['gameTitle'] = var16;
            var3['targetMinutes'] = var13;
            var3['rewardNameWithArticle'] = var15;
            var3['duration'] = var14;
            var3['streamingDurationRequirement'] = var13;
            var1 = var11.bind(var4)(var10, var3, var12);
 1732:
            _fun0002_ip = 1773; continue _fun0002;
 1734:
            var3 = {};
            var3['quest'] = var9;
            var3['taskDetails'] = var8;
            var3['withoutMarkdown'] = var7;
            var3['hasNitro'] = var6;
            var3['collectibleRewardDuration'] = var5;
            var2 = function getQuestInstructionsToWinRewardConsoleAndDesktopPlaytime(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.quest;
                    var2 = var1.taskDetails;
                    var6 = var1.withoutMarkdown;
                    var12 = var1.hasNitro;
                    var8 = var1.collectibleRewardDuration;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var4 = 5;
                    var4 = var14[var4];
                    var5 = undefined;
                    var4 = var13.bind(var5)(var4);
                    var9 = var4.SharedQuestFields;
                    var7 = var9.build;
                    var4 = var3.config;
                    var4 = var7.bind(var9)(var4);
                    var9 = var4.defaultRewardNameWithArticle;
                    var7 = var2.targetMinutes;
                    var4 = var2.isSponsoredQuest;
                    var2 = var3.config;
                    var2 = var2.messages;
                    var10 = var2.gameTitle;
                    var11 = 6;
                    var2 = var14[var11];
                    var16 = var13.bind(var5)(var2);
                    var15 = var16.isCollectibleQuestRewardPremiumExtendable;
                    var2 = var3.config;
                    var2 = var15.bind(var16)(var2);
                    var11 = var14[var11];
                    var13 = var13.bind(var5)(var11);
                    var11 = var13.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                    var3 = var3.config;
                    var11 = var11.bind(var13)(var3);
                    var3 = _closure1_slot8;
                    if(var4) { _fun0004_ip = 306; continue _fun0004 }
 178:
                    if(!var12) { _fun0004_ip = 184; continue _fun0004 }
 181:
                    if(var2) { _fun0004_ip = 259; continue _fun0004 }
 184:
                    if(var2) { _fun0004_ip = 226; continue _fun0004 }
 187:
                    var2 = null;
                    if(!(var2 == var8)) { _fun0004_ip = 226; continue _fun0004 }
 193:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 4;
                    var2 = var13[var2];
                    var2 = var12.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.NIimTk;
                    _fun0004_ip = 257; continue _fun0004;
 226:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var12 = 4;
                    var12 = var14[var12];
                    var12 = var13.bind(var5)(var12);
                    var12 = var12.t;
                    var2 = var12.AwuMRU;
 257:
                    _fun0004_ip = 304; continue _fun0004;
 259:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var12 = 4;
                    var12 = var14[var12];
                    var12 = var13.bind(var5)(var12);
                    var12 = var12.t;
                    if(var11) { _fun0004_ip = 295; continue _fun0004 }
 287:
                    var11 = var12.ziB0HB;
                    _fun0004_ip = 301; continue _fun0004;
 295:
                    var11 = var12.eb/SnZ;
 301:
                    var2 = var11;
 304:
                    _fun0004_ip = 337; continue _fun0004;
 306:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var1 = 4;
                    var1 = var12[var1];
                    var1 = var11.bind(var5)(var1);
                    var1 = var1.t;
                    var2 = var1.BfgxRk;
 337:
                    var1 = {};
                    var1['gameTitle'] = var10;
                    var1['streamingDurationRequirement'] = var7;
                    var1['rewardNameWithArticle'] = var9;
                    var1['duration'] = var8;
                    var1['targetMinutes'] = var7;
                    var7 = function onClick() {
                        var1 = undefined;
                        return var1;
                    };
                    var1['onClick'] = var7;
                    var21 = undefined;
                    var20 = var2;
                    var19 = var1;
                    var18 = var6;
                    var17 = var4;
                    var1 = var21[var3](var20, var19, var18, var17, var16);
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var3);
 1773:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var4 = function getQuestsInstructionsToWinReward(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot9;
            var2 = {};
            var7 = var2;
            var6 = var4;
            var5 = copyDataProperties(var7, var6);
            var4 = var4.currentUser;
            var5 = null;
            if(!(var5 == var4)) { _fun0005_ip = 47; continue _fun0005 }
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                if(var1) { _fun0006_ip = 227; continue _fun0006 }
 49:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.hasPlayActivityTask;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0006_ip = 227; continue _fun0006 }
 83:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var7 = var3.bind(var5)(var1);
                var3 = var7.hasStreamOnDesktopTask;
                var1 = {};
                var1['quest'] = var4;
                var1 = var3.bind(var7)(var1);
                if(var1) { _fun0006_ip = 215; continue _fun0006 }
 121:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.hasWatchVideoTasks;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0006_ip = 203; continue _fun0006 }
 152:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.isInGameQuest;
                var1 = var1.bind(var3)(var4);
                var3 = _closure1_slot7;
                if(var1) { _fun0006_ip = 195; continue _fun0006 }
 187:
                var1 = var3.PLAY;
                _fun0006_ip = 201; continue _fun0006;
 195:
                var1 = var3.IN_GAME;
 201:
                _fun0006_ip = 213; continue _fun0006;
 203:
                var3 = _closure1_slot7;
                var1 = var3.WATCH_VIDEO;
 213:
                _fun0006_ip = 225; continue _fun0006;
 215:
                var3 = _closure1_slot7;
                var1 = var3.STREAM;
 225:
                _fun0006_ip = 237; continue _fun0006;
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
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/hooks/QuestCopyHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getQuestsInstructionsToWinReward'] = var4;
    var4 = function useQuestsInstructionsToWinReward(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = arg1;
            var8 = var5.quest;
            var12 = var5.questContent;
            var11 = var5.sourceQuestContent;
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
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
            var6 = 9;
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
            if(!var6) { _fun0007_ip = 199; continue _fun0007 }
 196:
            var5 = var4;
 199:
            var4 = 'thirdPartyTaskDetails';
            var1[var4] = var5;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useQuestsInstructionsToWinReward'] = var4;
    var4 = function usePrimaryCtaCopy(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = var1.quest;
            var3 = _closure1_slot11;
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = _closure1_slot7;
            var3 = var3.PLAY;
            if(!(var3 !== var4)) { _fun0008_ip = 255; continue _fun0008 }
 40:
            var3 = _closure1_slot7;
            var3 = var3.STREAM;
            if(!(var3 !== var4)) { _fun0008_ip = 255; continue _fun0008 }
 57:
            var3 = _closure1_slot7;
            var3 = var3.WATCH_VIDEO;
            if(!(var3 !== var4)) { _fun0008_ip = 196; continue _fun0008 }
 74:
            var3 = _closure1_slot7;
            var3 = var3.IN_GAME;
            if(!(var3 !== var4)) { _fun0008_ip = 90; continue _fun0008 }
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
            if(var2) { _fun0008_ip = 181; continue _fun0008 }
 168:
            var2 = var3.l7E81t;
            var2 = var4.bind(var6)(var2);
            _fun0008_ip = 194; continue _fun0008;
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
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
            if(!var4) { _fun0009_ip = 157; continue _fun0009 }
 77:
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
            if(var2) { _fun0009_ip = 141; continue _fun0009 }
 126:
            var2 = var3.GYGb3N;
            var2 = var4.bind(var5)(var2);
            _fun0009_ip = 154; continue _fun0009;
 141:
            var3 = var3.hh7Rb2;
            var2 = var4.bind(var5)(var3);
 154:
            var1 = var2;
 157:
            return var1;
        }
    };
    var3['usePremiumExtendableCopy'] = var2;
    return var1;
})();