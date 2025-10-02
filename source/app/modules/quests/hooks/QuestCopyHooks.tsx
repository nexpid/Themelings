// app/modules/quests/hooks/QuestCopyHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function formatWithOrWithoutMarkdown(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
    var _closure1_slot10 = var1;
    var1 = function _getQuestsInstructionsToWinReward(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
            if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var14 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var21];
            var14 = var14.bind(var9)(var5);
            var5 = var14.shouldUsePlayOnDesktopTask;
            var1 = var5.bind(var14)(var11);
case 5:
            var14 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var21];
            var14 = var14.bind(var9)(var5);
            var5 = var14.isSponsoredPlayQuest;
            var5 = var5.bind(var14)(var11);
            if(var5) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var5 = var5.bind(var9)(var1);
            var1 = var5.isConsoleQuest;
            var1 = var1.bind(var5)(var11);
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var5 = var5.bind(var9)(var1);
            var1 = var5.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var5)(var11);
            if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var14 = var5.bind(var9)(var1);
            var5 = var14.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var11;
            var1 = var5.bind(var14)(var1);
            if(var1) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var21];
            var5 = var5.bind(var9)(var1);
            var1 = var5.hasWatchVideoTasks;
            var1 = var1.bind(var5)(var11);
            var14 = _closure1_slot0;
            var5 = _closure1_slot1;
            if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var1 = var5[var21];
            var17 = var14.bind(var9)(var1);
            var1 = var17.hasPlayActivityTask;
            var1 = var1.bind(var17)(var11);
            if(var1) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var17 = null;
            if(!(var17 == var16)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
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
            if(!var26) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            if(var25) { _fun0002_ip = 25; continue _fun0002 }
case 23:
            if(var25) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            if(!(var17 == var22)) { _fun0002_ip = 26; continue _fun0002 }
case 28:
            var25 = _closure1_slot0;
            var26 = _closure1_slot1;
            var17 = 4;
            var17 = var26[var17];
            var17 = var25.bind(var9)(var17);
            var17 = var17.t;
            var17 = var17.hkJ+Gh;
            _fun0002_ip = 29; continue _fun0002;
case 26:
            var26 = _closure1_slot0;
            var27 = _closure1_slot1;
            var25 = 4;
            var25 = var27[var25];
            var25 = var26.bind(var9)(var25);
            var25 = var25.t;
            var17 = var25.BLyDvL;
case 29:
            _fun0002_ip = 30; continue _fun0002;
case 25:
            var26 = _closure1_slot0;
            var27 = _closure1_slot1;
            var25 = 4;
            var25 = var27[var25];
            var25 = var26.bind(var9)(var25);
            var25 = var25.t;
            if(var1) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var1 = var25.smG9qq;
            _fun0002_ip = 33; continue _fun0002;
case 31:
            var1 = var25.X8Yt//;
case 33:
            var17 = var1;
case 30:
            var1 = {};
            var1['gameTitle'] = var24;
            var1['streamingDurationRequirement'] = var23;
            var1['duration'] = var22;
            var1['questReward'] = var20;
            var1 = var18.bind(var9)(var17, var1, var19);
            _fun0002_ip = 34; continue _fun0002;
case 21:
            var1 = var16.description;
case 34:
            _fun0002_ip = 35; continue _fun0002;
case 19:
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
            if(var15) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var15 = var24.config;
            var18 = var15.features;
            var16 = var18.includes;
            var15 = _closure1_slot5;
            var15 = var15.CLOUD_GAMING_ACTIVITY;
            var15 = var16.bind(var18)(var15);
            if(var15) { _fun0002_ip = 38; continue _fun0002 }
case 39:
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
            _fun0002_ip = 40; continue _fun0002;
case 38:
            var18 = _closure1_slot0;
            var23 = _closure1_slot1;
            var16 = 7;
            var16 = var23[var16];
            var16 = var18.bind(var9)(var16);
            var16 = var16.QuestContent;
            var16 = var16.QUESTS_EMBED;
            if(!(var17 !== var16)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
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
            _fun0002_ip = 43; continue _fun0002;
case 41:
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
case 43:
            var15 = var16;
case 40:
            _fun0002_ip = 44; continue _fun0002;
case 36:
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
case 44:
            var1 = var15;
case 35:
            _fun0002_ip = 45; continue _fun0002;
case 17:
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
            if(var17) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var15 = var15.messages;
            var5 = var15.videoTitle;
case 46:
            var15 = var14 != var5;
            var17 = 'video';
            if(!var15) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var17 = var5;
case 48:
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
            if(!var18) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            if(var13) { _fun0002_ip = 52; continue _fun0002 }
case 50:
            if(var18) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            if(!(var14 == var12)) { _fun0002_ip = 53; continue _fun0002 }
case 55:
            var18 = var11.id;
            var14 = _closure1_slot4;
            if(!(var18 !== var14)) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var14 = 4;
            var14 = var19[var14];
            var14 = var18.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.g+InPD;
            _fun0002_ip = 58; continue _fun0002;
case 56:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var9)(var18);
            var18 = var18.t;
            var14 = var18.Rsd5bG;
case 58:
            _fun0002_ip = 59; continue _fun0002;
case 53:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var9)(var18);
            var18 = var18.t;
            var14 = var18.W/HkLC;
case 59:
            _fun0002_ip = 60; continue _fun0002;
case 52:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 4;
            var18 = var20[var18];
            var18 = var19.bind(var9)(var18);
            var18 = var18.t;
            if(var5) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var5 = var18.vs/xBg;
            _fun0002_ip = 63; continue _fun0002;
case 61:
            var5 = var18.xqX+var7;
case 63:
            var14 = var5;
case 60:
            var5 = {};
            var5['videoTitle'] = var17;
            var5['rewardNameWithArticle'] = var16;
            var5['duration'] = var12;
            var1 = var15.bind(var9)(var14, var5, var7);
case 45:
            _fun0002_ip = 64; continue _fun0002;
case 15:
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
case 64:
            _fun0002_ip = 65; continue _fun0002;
case 13:
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
            if(!var23) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            if(var14) { _fun0002_ip = 68; continue _fun0002 }
case 66:
            if(var14) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var14 = null;
            if(!(var14 == var18)) { _fun0002_ip = 69; continue _fun0002 }
case 71:
            var23 = _closure1_slot0;
            var24 = _closure1_slot1;
            var14 = 4;
            var14 = var24[var14];
            var14 = var23.bind(var9)(var14);
            var23 = var14.t;
            if(var22) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var14 = var23.FZL5Q0;
            _fun0002_ip = 74; continue _fun0002;
case 72:
            var14 = var23.03VJqq;
case 74:
            _fun0002_ip = 75; continue _fun0002;
case 69:
            var24 = _closure1_slot0;
            var25 = _closure1_slot1;
            var23 = 4;
            var23 = var25[var23];
            var23 = var24.bind(var9)(var23);
            var24 = var23.t;
            if(var22) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var23 = var24.AwuMRU;
            _fun0002_ip = 78; continue _fun0002;
case 76:
            var23 = var24.enQ3jY;
case 78:
            var14 = var23;
case 75:
            _fun0002_ip = 79; continue _fun0002;
case 68:
            var24 = _closure1_slot0;
            var25 = _closure1_slot1;
            var23 = 4;
            var23 = var25[var23];
            var23 = var24.bind(var9)(var23);
            var23 = var23.t;
            if(var5) { _fun0002_ip = 80; continue _fun0002 }
case 81:
            if(var22) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var5 = var23.ziB0HB;
            _fun0002_ip = 84; continue _fun0002;
case 82:
            var5 = var23.1AcTqq;
case 84:
            _fun0002_ip = 85; continue _fun0002;
case 80:
            if(var22) { _fun0002_ip = 86; continue _fun0002 }
case 87:
            var22 = var23.eb/SnZ;
            _fun0002_ip = 88; continue _fun0002;
case 86:
            var22 = var23.ztXW8f;
case 88:
            var5 = var22;
case 85:
            var14 = var5;
case 79:
            var5 = {};
            var5['gameTitle'] = var20;
            var5['streamingDurationRequirement'] = var19;
            var5['rewardNameWithArticle'] = var17;
            var5['duration'] = var18;
            var5['questReward'] = var17;
            var1 = var15.bind(var9)(var14, var5, var16);
case 65:
            _fun0002_ip = 89; continue _fun0002;
case 11:
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
            if(!var22) { _fun0002_ip = 90; continue _fun0002 }
case 91:
            if(var14) { _fun0002_ip = 92; continue _fun0002 }
case 90:
            if(var14) { _fun0002_ip = 93; continue _fun0002 }
case 94:
            var14 = null;
            if(!(var14 == var18)) { _fun0002_ip = 93; continue _fun0002 }
case 95:
            var22 = _closure1_slot0;
            var23 = _closure1_slot1;
            var14 = 4;
            var14 = var23[var14];
            var14 = var22.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.NIimTk;
            _fun0002_ip = 96; continue _fun0002;
case 93:
            var23 = _closure1_slot0;
            var24 = _closure1_slot1;
            var22 = 4;
            var22 = var24[var22];
            var22 = var23.bind(var9)(var22);
            var22 = var22.t;
            var14 = var22.AwuMRU;
case 96:
            _fun0002_ip = 97; continue _fun0002;
case 92:
            var23 = _closure1_slot0;
            var24 = _closure1_slot1;
            var22 = 4;
            var22 = var24[var22];
            var22 = var23.bind(var9)(var22);
            var22 = var22.t;
            if(var5) { _fun0002_ip = 98; continue _fun0002 }
case 99:
            var5 = var22.ziB0HB;
            _fun0002_ip = 100; continue _fun0002;
case 98:
            var5 = var22.eb/SnZ;
case 100:
            var14 = var5;
case 97:
            var5 = {};
            var5['gameTitle'] = var20;
            var5['targetMinutes'] = var17;
            var5['rewardNameWithArticle'] = var19;
            var5['duration'] = var18;
            var5['streamingDurationRequirement'] = var17;
            var1 = var15.bind(var9)(var14, var5, var16);
case 89:
            _fun0002_ip = 101; continue _fun0002;
case 9:
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
            if(!var20) { _fun0002_ip = 102; continue _fun0002 }
case 103:
            if(var12) { _fun0002_ip = 104; continue _fun0002 }
case 102:
            if(var12) { _fun0002_ip = 105; continue _fun0002 }
case 106:
            var12 = null;
            if(!(var12 == var16)) { _fun0002_ip = 105; continue _fun0002 }
case 107:
            var20 = _closure1_slot0;
            var21 = _closure1_slot1;
            var12 = 4;
            var12 = var21[var12];
            var12 = var20.bind(var9)(var12);
            var20 = var12.t;
            if(var19) { _fun0002_ip = 108; continue _fun0002 }
case 109:
            var12 = var20.NIimTk;
            _fun0002_ip = 110; continue _fun0002;
case 108:
            var12 = var20.e+K3xM;
case 110:
            _fun0002_ip = 111; continue _fun0002;
case 105:
            var21 = _closure1_slot0;
            var22 = _closure1_slot1;
            var20 = 4;
            var20 = var22[var20];
            var20 = var21.bind(var9)(var20);
            var21 = var20.t;
            if(var19) { _fun0002_ip = 112; continue _fun0002 }
case 113:
            var20 = var21.AwuMRU;
            _fun0002_ip = 114; continue _fun0002;
case 112:
            var20 = var21.enQ3jY;
case 114:
            var12 = var20;
case 111:
            _fun0002_ip = 115; continue _fun0002;
case 104:
            var21 = _closure1_slot0;
            var22 = _closure1_slot1;
            var20 = 4;
            var20 = var22[var20];
            var20 = var21.bind(var9)(var20);
            var20 = var20.t;
            if(var5) { _fun0002_ip = 116; continue _fun0002 }
case 117:
            if(var19) { _fun0002_ip = 118; continue _fun0002 }
case 119:
            var5 = var20.ziB0HB;
            _fun0002_ip = 120; continue _fun0002;
case 118:
            var5 = var20.1AcTqq;
case 120:
            _fun0002_ip = 121; continue _fun0002;
case 116:
            if(var19) { _fun0002_ip = 122; continue _fun0002 }
case 123:
            var19 = var20.eb/SnZ;
            _fun0002_ip = 124; continue _fun0002;
case 122:
            var19 = var20.ztXW8f;
case 124:
            var5 = var19;
case 121:
            var12 = var5;
case 115:
            var5 = {};
            var5['gameTitle'] = var18;
            var5['streamingDurationRequirement'] = var15;
            var5['rewardNameWithArticle'] = var17;
            var5['duration'] = var16;
            var5['targetMinutes'] = var15;
            var1 = var13.bind(var9)(var12, var5, var14);
case 101:
            _fun0002_ip = 125; continue _fun0002;
case 7:
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
            if(var3) { _fun0002_ip = 126; continue _fun0002 }
case 127:
            var3 = 8;
            var3 = var10[var3];
            var6 = var4.bind(var9)(var3);
            var5 = var6.createGameSheetHook;
            var3 = {};
            var3['quest'] = var16;
            var3['sourceQuestContent'] = var15;
            var15 = null;
            if(!(var15 == var14)) { _fun0002_ip = 128; continue _fun0002 }
case 129:
            var14 = new Array(0);
case 128:
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
            _fun0002_ip = 130; continue _fun0002;
case 126:
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
case 130:
            var1 = var2;
case 125:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var4 = function getQuestsInstructionsToWinReward(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot11;
            var2 = {};
            var8 = var2;
            var7 = var1;
            var5 = copyDataProperties(var8, var7);
            var5 = var1.currentUser;
            var6 = null;
            if(!(var6 == var5)) { _fun0003_ip = 131; continue _fun0003 }
case 132:
            var6 = _closure1_slot3;
            var4 = var6.getCurrentUser;
            var5 = var4.bind(var6)();
case 131:
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
case 0:
                var4 = _closure2_slot0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 6;
                var1 = var1[var6];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.isConsoleQuest;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0004_ip = 133; continue _fun0004 }
case 134:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.hasPlayActivityTask;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0004_ip = 133; continue _fun0004 }
case 135:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var7 = var3.bind(var5)(var1);
                var3 = var7.hasStreamOnDesktopTask;
                var1 = {};
                var1['quest'] = var4;
                var1 = var3.bind(var7)(var1);
                if(var1) { _fun0004_ip = 136; continue _fun0004 }
case 137:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.hasWatchVideoTasks;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0004_ip = 138; continue _fun0004 }
case 139:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.isInGameQuest;
                var1 = var1.bind(var3)(var4);
                var3 = _closure1_slot9;
                if(var1) { _fun0004_ip = 140; continue _fun0004 }
case 141:
                var1 = var3.PLAY;
                _fun0004_ip = 142; continue _fun0004;
case 140:
                var1 = var3.IN_GAME;
case 142:
                _fun0004_ip = 143; continue _fun0004;
case 138:
                var3 = _closure1_slot9;
                var1 = var3.WATCH_VIDEO;
case 143:
                _fun0004_ip = 144; continue _fun0004;
case 136:
                var3 = _closure1_slot9;
                var1 = var3.STREAM;
case 144:
                _fun0004_ip = 145; continue _fun0004;
case 133:
                var2 = _closure1_slot9;
                var1 = var2.PLAY;
case 145:
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
case 0:
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
            if(!var6) { _fun0005_ip = 146; continue _fun0005 }
case 147:
            var5 = var4;
case 146:
            var4 = 'thirdPartyTaskDetails';
            var1[var4] = var5;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useQuestsInstructionsToWinReward'] = var4;
    var4 = function usePrimaryCtaCopy(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var1 = var1.quest;
            var3 = _closure1_slot13;
            var6 = undefined;
            var4 = var3.bind(var6)(var1);
            var3 = _closure1_slot9;
            var3 = var3.PLAY;
            if(!(var3 !== var4)) { _fun0006_ip = 148; continue _fun0006 }
case 149:
            var3 = _closure1_slot9;
            var3 = var3.STREAM;
            if(!(var3 !== var4)) { _fun0006_ip = 150; continue _fun0006 }
case 151:
            var3 = _closure1_slot9;
            var3 = var3.WATCH_VIDEO;
            if(!(var3 !== var4)) { _fun0006_ip = 152; continue _fun0006 }
case 153:
            var3 = _closure1_slot9;
            var3 = var3.IN_GAME;
            if(!(var3 !== var4)) { _fun0006_ip = 154; continue _fun0006 }
case 155:
            return var6;
case 154:
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
            if(var3) { _fun0006_ip = 156; continue _fun0006 }
case 157:
            var3 = var4.l7E81t;
            var3 = var5.bind(var7)(var3);
            _fun0006_ip = 147; continue _fun0006;
case 156:
            var4 = var4.hRIVy8;
            var3 = var5.bind(var7)(var4);
case 147:
            return var3;
case 152:
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
case 150:
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
case 148:
            var3 = var1.config;
            var5 = var3.features;
            var4 = var5.includes;
            var3 = _closure1_slot5;
            var3 = var3.CLOUD_GAMING_ACTIVITY;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0006_ip = 158; continue _fun0006 }
case 159:
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
            if(var1) { _fun0006_ip = 160; continue _fun0006 }
case 161:
            var1 = var3.l7E81t;
            var1 = var4.bind(var5)(var1);
            _fun0006_ip = 162; continue _fun0006;
case 160:
            var3 = var3.Ie9++v;
            var1 = var4.bind(var5)(var3);
case 162:
            _fun0006_ip = 163; continue _fun0006;
case 158:
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
case 163:
            return var1;
        }
    };
    var3['usePrimaryCtaCopy'] = var4;
    var2 = function usePremiumExtendableCopy(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
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
            if(!var4) { _fun0007_ip = 164; continue _fun0007 }
case 165:
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
            if(var2) { _fun0007_ip = 166; continue _fun0007 }
case 167:
            var2 = var3.GYGb3N;
            var2 = var4.bind(var5)(var2);
            _fun0007_ip = 168; continue _fun0007;
case 166:
            var3 = var3.hh7Rb2;
            var2 = var4.bind(var5)(var3);
case 168:
            var1 = var2;
case 164:
            return var1;
        }
    };
    var3['usePremiumExtendableCopy'] = var2;
    return var1;
})();