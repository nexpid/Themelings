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
    var1 = function getGeneralPlayQuestRewardMessageVariant(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg2;
            var3 = arg3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.QuestCardDescriptionExperimentVariant;
            var4 = var1.WITH_REWARD_DURATION_NO_GAME_TITLE;
            var1 = arg1;
            if(!(var1 !== var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = var3.base;
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var1 = var3.clickable;
case 9:
            _fun0002_ip = 10; continue _fun0002;
case 5:
            if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = var3.generic;
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var2 = var3.clickableGeneric;
case 13:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function getNonGamingPlayQuestPermanentWithPremiumCollectibleMessage(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = var5.shouldUseDescriptionWithRewardDuration;
            var1 = arg1;
            var1 = var3.bind(var5)(var1);
            if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 3:
            var3 = null;
            var1 = arg2;
            if(!(var3 == var1)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ztXW8V;
            _fun0003_ip = 15; continue _fun0003;
case 13:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var1 = var2.u5QXpw;
case 15:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getGamingPlayQuestPermanentWithPremiumCollectibleMessage(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var1 = arg3;
            var3 = null;
            var2 = arg2;
            if(!(var3 !== var2)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 8;
            var3 = var3[var7];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.QuestCardDescriptionExperimentVariant;
            var3 = var3.WITH_REWARD_DURATION_NO_GAME_TITLE;
            if(!(var3 !== var5)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var4)(var3);
            var3 = var3.QuestCardDescriptionExperimentVariant;
            var3 = var3.WITH_REWARD_DURATION;
            if(!(var3 !== var5)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.t;
            if(var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var3 = var5.eb/Sna;
            _fun0004_ip = 24; continue _fun0004;
case 22:
            var3 = var5.tQoqXX;
case 24:
            return var3;
case 20:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.t;
            if(var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var3 = var5["0hwcvM"];
            _fun0004_ip = 27; continue _fun0004;
case 25:
            var3 = var5["/4XT0b"];
case 27:
            return var3;
case 18:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.t;
            if(var1) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var2 = var3.bPGn8F;
            _fun0004_ip = 30; continue _fun0004;
case 28:
            var2 = var3.t6Z9I2;
case 30:
            return var2;
case 16:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.t;
            if(var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var1 = var2.eb/Sna;
            _fun0004_ip = 33; continue _fun0004;
case 31:
            var1 = var2.tQoqXX;
case 33:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function getGamingPlayQuestExtendableWithPremiumCollectibleMessage(arg1, arg2) {
        var5 = _closure1_slot15;
        var4 = {};
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var7 = var6[var1];
        var3 = undefined;
        var7 = var2.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.ziB0HF;
        var4['base'] = var7;
        var7 = var6[var1];
        var7 = var2.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.klYWbT;
        var4['clickable'] = var7;
        var7 = var6[var1];
        var7 = var2.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["8MeiQN"];
        var4['generic'] = var7;
        var1 = var6[var1];
        var1 = var2.bind(var3)(var1);
        var1 = var1.t;
        var1 = var1.iCwsvr;
        var4['clickableGeneric'] = var1;
        var2 = arg1;
        var1 = arg2;
        var1 = var5.bind(var3)(var2, var1, var4);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function getGamingPlayQuestExpiringCollectibleMessage(arg1, arg2) {
        var5 = _closure1_slot15;
        var4 = {};
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var7 = var6[var1];
        var3 = undefined;
        var7 = var2.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.AwuMRS;
        var4['base'] = var7;
        var7 = var6[var1];
        var7 = var2.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["4JS2QJ"];
        var4['clickable'] = var7;
        var7 = var6[var1];
        var7 = var2.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.QUgT7p;
        var4['generic'] = var7;
        var1 = var6[var1];
        var1 = var2.bind(var3)(var1);
        var1 = var1.t;
        var1 = var1["1JyLzi"];
        var4['clickableGeneric'] = var1;
        var2 = arg1;
        var1 = arg2;
        var1 = var5.bind(var3)(var2, var1, var4);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function getQuestBarSubtitlePlayGameMessage(arg1, arg2) {
        var5 = _closure1_slot15;
        var4 = {};
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var7 = var6[var1];
        var3 = undefined;
        var7 = var2.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.NIimTt;
        var4['base'] = var7;
        var7 = var6[var1];
        var7 = var2.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.GFdaUK;
        var4['clickable'] = var7;
        var7 = var6[var1];
        var7 = var2.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.N3tNbI;
        var4['generic'] = var7;
        var1 = var6[var1];
        var1 = var2.bind(var3)(var1);
        var1 = var1.t;
        var1 = var1.k2srpz;
        var4['clickableGeneric'] = var1;
        var2 = arg1;
        var1 = arg2;
        var1 = var5.bind(var3)(var2, var1, var4);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function getQuestInstructionsToWinRewardPlaytimeOnDesktop(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.quest;
            var9 = var1.taskDetails;
            var5 = var1.withoutMarkdown;
            var15 = var1.hasNitro;
            var8 = var1.collectibleRewardDuration;
            var6 = var1.onGameTitleClick;
            var13 = var1.descriptionExperimentVariant;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 12;
            var7 = var12[var2];
            var4 = undefined;
            var14 = var11.bind(var4)(var7);
            var10 = var14.getDefaultRewardNameWithArticle;
            var7 = var3.config;
            var7 = var10.bind(var14)(var7);
            var9 = var9.targetMinutes;
            var10 = var3.config;
            var10 = var10.messages;
            var10 = var10.gameTitle;
            var14 = var12[var2];
            var17 = var11.bind(var4)(var14);
            var16 = var17.isCollectibleQuestRewardPremiumExtendable;
            var14 = var3.config;
            var14 = var16.bind(var17)(var14);
            var2 = var12[var2];
            var12 = var11.bind(var4)(var2);
            var11 = var12.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var2 = var3.config;
            var2 = var11.bind(var12)(var2);
            var3 = var3.config;
            var12 = var3.features;
            var11 = var12.includes;
            var3 = _closure1_slot9;
            var3 = var3.NON_GAMING_PLAY_QUEST;
            var11 = var11.bind(var12)(var3);
            var3 = null;
            var12 = var3 != var6;
            if(!var15) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            if(var14) { _fun0005_ip = 36; continue _fun0005 }
case 34:
            if(var14) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            if(!(var3 == var8)) { _fun0005_ip = 37; continue _fun0005 }
case 39:
            if(var11) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var14 = _closure1_slot15;
            var3 = {};
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 7;
            var18 = var17[var15];
            var18 = var16.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.FZL5Q5;
            var3['base'] = var18;
            var18 = var17[var15];
            var18 = var16.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.NrD2h8;
            var3['clickable'] = var18;
            var18 = var17[var15];
            var18 = var16.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.z06Gxh;
            var3['generic'] = var18;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.zLCg2e;
            var3['clickableGeneric'] = var15;
            var3 = var14.bind(var4)(var13, var12, var3);
            _fun0005_ip = 42; continue _fun0005;
case 40:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 7;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var3 = var14["03VJqu"];
case 42:
            _fun0005_ip = 43; continue _fun0005;
case 37:
            if(var11) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var14 = _closure1_slot19;
            var14 = var14.bind(var4)(var13, var12);
            _fun0005_ip = 46; continue _fun0005;
case 44:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 7;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var14 = var15.enQ3jU;
case 46:
            var3 = var14;
case 43:
            _fun0005_ip = 47; continue _fun0005;
case 36:
            if(var2) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            if(var11) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var2 = _closure1_slot18;
            var2 = var2.bind(var4)(var13, var12);
            _fun0005_ip = 52; continue _fun0005;
case 50:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 7;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var2 = var14["1AcTqm"];
case 52:
            _fun0005_ip = 53; continue _fun0005;
case 48:
            if(var11) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var11 = _closure1_slot17;
            var11 = var11.bind(var4)(var13, var8, var12);
            _fun0005_ip = 56; continue _fun0005;
case 54:
            var12 = _closure1_slot16;
            var11 = var12.bind(var4)(var13, var8);
case 56:
            var2 = var11;
case 53:
            var3 = var2;
case 47:
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
    var _closure1_slot21 = var1;
    var1 = function getQuestInstructionsToWinRewardSponsored(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
            if(var1) { _fun0006_ip = 57; continue _fun0006 }
case 58:
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
            if(!(var13 == var12)) { _fun0006_ip = 26; continue _fun0006 }
case 59:
            var12 = new Array(0);
case 26:
            var1['applications'] = var12;
            var1['popoutTargetElementRef'] = var11;
            var1['onGameSheetOpened'] = var10;
            var1['onGameSheetClosed'] = var9;
            var1 = var4.bind(var5)(var1);
            var3['gameSheetHook'] = var1;
            var1 = function _getQuestInstructionsToWinRewardArenaPackage(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                    if(!var11) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                    var4 = var10[var9];
case 60:
                    if(!(var2 == var4)) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.t;
                    var4 = var2.CDeHul;
case 62:
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
            _fun0006_ip = 64; continue _fun0006;
case 57:
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
case 64:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function _getQuestsInstructionsToWinReward(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var11 = var1.quest;
            var10 = var1.taskDetails;
            var3 = var1.questContent;
            var16 = var1.thirdPartyTaskDetails;
            var9 = var1.sourceQuestContent;
            var8 = var1.withoutMarkdown;
            var19 = var1.currentUser;
            var7 = var1.popoutTargetElementRef;
            var6 = var1.onGameSheetOpened;
            var5 = var1.onGameSheetClosed;
            var13 = var1.onGameTitleClick;
            var12 = var1.descriptionExperimentVariant;
            var17 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 16;
            var14 = var1[var4];
            var4 = undefined;
            var18 = var17.bind(var4)(var14);
            var15 = var18.isPremium;
            var14 = _closure1_slot11;
            var14 = var14.TIER_2;
            var15 = var15.bind(var18)(var19, var14);
            var20 = 12;
            var14 = var1[var20];
            var19 = var17.bind(var4)(var14);
            var18 = var19.getCollectibleQuestRewardDuration;
            var14 = var11.config;
            var14 = var18.bind(var19)(var14);
            var21 = 11;
            var1 = var1[var21];
            var17 = var17.bind(var4)(var1);
            var1 = var17.isConsoleQuest;
            var1 = var1.bind(var17)(var11);
            if(!var1) { _fun0008_ip = 65; continue _fun0008 }
case 25:
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var21];
            var18 = var18.bind(var4)(var17);
            var17 = var18.shouldUsePlayOnDesktopTask;
            var1 = var17.bind(var18)(var11);
case 65:
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = 10;
            var17 = var17[var19];
            var18 = var18.bind(var4)(var17);
            var17 = var18.isSponsoredPlayQuest;
            var17 = var17.bind(var18)(var11);
            if(var17) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            if(var1) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var17 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var17 = var17.bind(var4)(var1);
            var1 = var17.isConsoleQuest;
            var1 = var1.bind(var17)(var11);
            if(var1) { _fun0008_ip = 70; continue _fun0008 }
case 33:
            var17 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var17 = var17.bind(var4)(var1);
            var1 = var17.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var17)(var11);
            if(var1) { _fun0008_ip = 71; continue _fun0008 }
case 72:
            var17 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var20];
            var18 = var17.bind(var4)(var1);
            var17 = var18.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var11;
            var1 = var17.bind(var18)(var1);
            if(var1) { _fun0008_ip = 73; continue _fun0008 }
case 74:
            var17 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var21];
            var17 = var17.bind(var4)(var1);
            var1 = var17.hasWatchVideoTasks;
            var1 = var1.bind(var17)(var11);
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var21];
            var17 = var18.bind(var4)(var17);
            if(var1) { _fun0008_ip = 75; continue _fun0008 }
case 76:
            var1 = var17.hasPlayActivityTask;
            var1 = var1.bind(var17)(var11);
            if(var1) { _fun0008_ip = 77; continue _fun0008 }
case 78:
            var28 = null;
            if(!(var28 == var16)) { _fun0008_ip = 79; continue _fun0008 }
case 80:
            var21 = {};
            var21['quest'] = var11;
            var21['taskDetails'] = var10;
            var21['withoutMarkdown'] = var8;
            var21['hasNitro'] = var15;
            var21['collectibleRewardDuration'] = var14;
            var21['onGameTitleClick'] = var13;
            var21['descriptionExperimentVariant'] = var12;
            var1 = var21.quest;
            var18 = var21.taskDetails;
            var22 = var21.withoutMarkdown;
            var30 = var21.hasNitro;
            var25 = var21.collectibleRewardDuration;
            var23 = var21.onGameTitleClick;
            var32 = var21.descriptionExperimentVariant;
            var29 = _closure1_slot0;
            var21 = _closure1_slot2;
            var24 = var21[var20];
            var27 = var29.bind(var4)(var24);
            var26 = var27.getDefaultRewardNameWithArticle;
            var24 = var1.config;
            var24 = var26.bind(var27)(var24);
            var26 = var18.targetMinutes;
            var18 = var1.config;
            var18 = var18.messages;
            var27 = var18.gameTitle;
            var18 = var21[var20];
            var33 = var29.bind(var4)(var18);
            var31 = var33.isCollectibleQuestRewardPremiumExtendable;
            var18 = var1.config;
            var18 = var31.bind(var33)(var18);
            var21 = var21[var20];
            var29 = var29.bind(var4)(var21);
            var21 = var29.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var1 = var1.config;
            var1 = var21.bind(var29)(var1);
            var29 = var28 != var23;
            var21 = _closure1_slot14;
            if(!var30) { _fun0008_ip = 81; continue _fun0008 }
case 82:
            if(var18) { _fun0008_ip = 83; continue _fun0008 }
case 81:
            if(var18) { _fun0008_ip = 84; continue _fun0008 }
case 85:
            if(!(var28 == var25)) { _fun0008_ip = 84; continue _fun0008 }
case 86:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var18 = 7;
            var18 = var31[var18];
            var18 = var30.bind(var4)(var18);
            var30 = var18.t;
            if(var29) { _fun0008_ip = 87; continue _fun0008 }
case 88:
            var18 = var30.hkJ+Gs;
            _fun0008_ip = 89; continue _fun0008;
case 87:
            var18 = var30.ER9rII;
case 89:
            _fun0008_ip = 90; continue _fun0008;
case 84:
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var30 = 7;
            var30 = var33[var30];
            var30 = var31.bind(var4)(var30);
            var31 = var30.t;
            if(var29) { _fun0008_ip = 91; continue _fun0008 }
case 92:
            var30 = var31.BLyDvO;
            _fun0008_ip = 93; continue _fun0008;
case 91:
            var30 = var31.Cko4a4;
case 93:
            var18 = var30;
case 90:
            _fun0008_ip = 94; continue _fun0008;
case 83:
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            if(var1) { _fun0008_ip = 95; continue _fun0008 }
case 96:
            var1 = 7;
            var1 = var33[var1];
            var1 = var31.bind(var4)(var1);
            var30 = var1.t;
            if(var29) { _fun0008_ip = 97; continue _fun0008 }
case 98:
            var1 = var30.smG9ql;
            _fun0008_ip = 99; continue _fun0008;
case 97:
            var1 = var30.eEuma3;
case 99:
            _fun0008_ip = 100; continue _fun0008;
case 95:
            var30 = 8;
            var30 = var33[var30];
            var31 = var31.bind(var4)(var30);
            var30 = var31.shouldUseDescriptionWithRewardDuration;
            var30 = var30.bind(var31)(var32);
            if(!var30) { _fun0008_ip = 101; continue _fun0008 }
case 102:
            if(!(var28 == var25)) { _fun0008_ip = 103; continue _fun0008 }
case 101:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var28 = 7;
            var28 = var31[var28];
            var28 = var30.bind(var4)(var28);
            var30 = var28.t;
            if(var29) { _fun0008_ip = 104; continue _fun0008 }
case 105:
            var28 = var30.X8Yt/1;
            _fun0008_ip = 106; continue _fun0008;
case 104:
            var28 = var30.l9yxDa;
case 106:
            _fun0008_ip = 107; continue _fun0008;
case 103:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var30 = 7;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.t;
            if(var29) { _fun0008_ip = 108; continue _fun0008 }
case 109:
            var29 = var30.TmKqHw;
            _fun0008_ip = 110; continue _fun0008;
case 108:
            var29 = var30["3RwRv8"];
case 110:
            var28 = var29;
case 107:
            var1 = var28;
case 100:
            var18 = var1;
case 94:
            var1 = {};
            var1['gameTitle'] = var27;
            var1['streamingDurationRequirement'] = var26;
            var1['duration'] = var25;
            var1['questReward'] = var24;
            var1['onGameTitleClick'] = var23;
            var1 = var21.bind(var4)(var18, var1, var22);
            _fun0008_ip = 111; continue _fun0008;
case 79:
            var1 = var16.description;
case 111:
            _fun0008_ip = 112; continue _fun0008;
case 77:
            var16 = {};
            var16['quest'] = var11;
            var16['taskDetails'] = var10;
            var16['withoutMarkdown'] = var8;
            var16['questContent'] = var3;
            var25 = var16.quest;
            var3 = var16.taskDetails;
            var21 = var16.withoutMarkdown;
            var18 = var16.questContent;
            var23 = var3.targetMinutes;
            var16 = _closure1_slot0;
            var3 = _closure1_slot2;
            var22 = var3[var20];
            var26 = var16.bind(var4)(var22);
            var24 = var26.getDefaultRewardNameWithArticle;
            var22 = var25.config;
            var22 = var24.bind(var26)(var22);
            var3 = var3[var19];
            var16 = var16.bind(var4)(var3);
            var3 = var16.isPlayAnyActivityQuest;
            var3 = var3.bind(var16)(var25);
            if(var3) { _fun0008_ip = 113; continue _fun0008 }
case 114:
            var3 = var25.config;
            var19 = var3.features;
            var16 = var19.includes;
            var3 = _closure1_slot9;
            var3 = var3.CLOUD_GAMING_ACTIVITY;
            var3 = var16.bind(var19)(var3);
            if(var3) { _fun0008_ip = 115; continue _fun0008 }
case 116:
            var19 = _closure1_slot14;
            var16 = _closure1_slot0;
            var24 = _closure1_slot2;
            var3 = 7;
            var3 = var24[var3];
            var3 = var16.bind(var4)(var3);
            var3 = var3.t;
            var16 = var3.UuzHh8;
            var3 = {};
            var24 = var25.config;
            var24 = var24.messages;
            var24 = var24.gameTitle;
            var3['activityName'] = var24;
            var3['streamingDurationRequirement'] = var23;
            var3['questReward'] = var22;
            var3 = var19.bind(var4)(var16, var3, var21);
            _fun0008_ip = 117; continue _fun0008;
case 115:
            var19 = _closure1_slot0;
            var24 = _closure1_slot2;
            var16 = 13;
            var16 = var24[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.QuestContent;
            var16 = var16.QUESTS_EMBED;
            if(!(var18 !== var16)) { _fun0008_ip = 118; continue _fun0008 }
case 119:
            var19 = _closure1_slot14;
            var18 = _closure1_slot0;
            var27 = _closure1_slot2;
            var16 = 7;
            var16 = var27[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var18 = var16["0NNM3l"];
            var16 = {};
            var24 = var25.config;
            var24 = var24.messages;
            var24 = var24.gameTitle;
            var16['activityName'] = var24;
            var24 = _closure1_slot12;
            var16['providerName'] = var24;
            var26 = _closure1_slot1;
            var24 = 14;
            var24 = var27[var24];
            var27 = var26.bind(var4)(var24);
            var26 = var27.getArticleURL;
            var24 = _closure1_slot10;
            var24 = var24.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST;
            var24 = var26.bind(var27)(var24);
            var16['providerLink'] = var24;
            var16['streamingDurationRequirement'] = var23;
            var16['questReward'] = var22;
            var16 = var19.bind(var4)(var18, var16, var21);
            _fun0008_ip = 120; continue _fun0008;
case 118:
            var24 = _closure1_slot14;
            var19 = _closure1_slot0;
            var27 = _closure1_slot2;
            var18 = 7;
            var18 = var27[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var19 = var18.C+2RxC;
            var18 = {};
            var25 = var25.config;
            var25 = var25.messages;
            var25 = var25.gameTitle;
            var18['activityName'] = var25;
            var25 = _closure1_slot12;
            var18['providerName'] = var25;
            var26 = _closure1_slot1;
            var25 = 14;
            var25 = var27[var25];
            var27 = var26.bind(var4)(var25);
            var26 = var27.getArticleURL;
            var25 = _closure1_slot10;
            var25 = var25.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST;
            var25 = var26.bind(var27)(var25);
            var18['providerLink'] = var25;
            var18['questReward'] = var22;
            var16 = var24.bind(var4)(var19, var18, var21);
case 120:
            var3 = var16;
case 117:
            _fun0008_ip = 121; continue _fun0008;
case 113:
            var19 = _closure1_slot14;
            var18 = _closure1_slot0;
            var24 = _closure1_slot2;
            var16 = 7;
            var16 = var24[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var18 = var16.VYwSSu;
            var16 = {};
            var16['streamingDurationRequirement'] = var23;
            var16['questReward'] = var22;
            var3 = var19.bind(var4)(var18, var16, var21);
case 121:
            var1 = var3;
case 112:
            _fun0008_ip = 122; continue _fun0008;
case 75:
            var16 = var17.getDefaultWatchVideoTask;
            var3 = var11.config;
            var16 = var16.bind(var17)(var3);
            var21 = null;
            var17 = var21 == var16;
            var3 = undefined;
            if(var17) { _fun0008_ip = 123; continue _fun0008 }
case 124:
            var16 = var16.messages;
            var3 = var16.videoTitle;
case 123:
            var16 = var21 != var3;
            var19 = 'video';
            if(!var16) { _fun0008_ip = 125; continue _fun0008 }
case 126:
            var19 = var3;
case 125:
            var17 = _closure1_slot0;
            var3 = _closure1_slot2;
            var16 = var3[var20];
            var22 = var17.bind(var4)(var16);
            var18 = var22.getDefaultRewardNameWithArticle;
            var16 = var11.config;
            var18 = var18.bind(var22)(var16);
            var16 = var3[var20];
            var23 = var17.bind(var4)(var16);
            var22 = var23.isCollectibleQuestRewardPremiumExtendable;
            var16 = var11.config;
            var16 = var22.bind(var23)(var16);
            var3 = var3[var20];
            var22 = var17.bind(var4)(var3);
            var17 = var22.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var11.config;
            var3 = var17.bind(var22)(var3);
            var17 = _closure1_slot14;
            if(!var16) { _fun0008_ip = 127; continue _fun0008 }
case 128:
            if(var15) { _fun0008_ip = 129; continue _fun0008 }
case 127:
            if(var16) { _fun0008_ip = 130; continue _fun0008 }
case 131:
            if(!(var21 == var14)) { _fun0008_ip = 130; continue _fun0008 }
case 132:
            var22 = var11.id;
            var16 = _closure1_slot8;
            if(!(var22 !== var16)) { _fun0008_ip = 133; continue _fun0008 }
case 134:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 7;
            var16 = var23[var16];
            var16 = var22.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.g+InPC;
            _fun0008_ip = 135; continue _fun0008;
case 133:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 7;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var16 = var22.Rsd5bL;
case 135:
            _fun0008_ip = 136; continue _fun0008;
case 130:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 7;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var16 = var22.W/HkLO;
case 136:
            _fun0008_ip = 137; continue _fun0008;
case 129:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            if(var3) { _fun0008_ip = 138; continue _fun0008 }
case 139:
            var3 = 7;
            var3 = var24[var3];
            var3 = var23.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.vs/xBu;
            _fun0008_ip = 140; continue _fun0008;
case 138:
            var22 = 8;
            var22 = var24[var22];
            var23 = var23.bind(var4)(var22);
            var22 = var23.shouldUseDescriptionWithRewardDuration;
            var22 = var22.bind(var23)(var12);
            if(!var22) { _fun0008_ip = 141; continue _fun0008 }
case 142:
            if(!(var21 == var14)) { _fun0008_ip = 143; continue _fun0008 }
case 141:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var21 = 7;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.xqX+var6;
            _fun0008_ip = 144; continue _fun0008;
case 143:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 7;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var21 = var22.tXwfJT;
case 144:
            var3 = var21;
case 140:
            var16 = var3;
case 137:
            var3 = {};
            var3['videoTitle'] = var19;
            var3['rewardNameWithArticle'] = var18;
            var3['duration'] = var14;
            var1 = var17.bind(var4)(var16, var3, var8);
case 122:
            _fun0008_ip = 145; continue _fun0008;
case 73:
            var17 = {};
            var17['quest'] = var11;
            var17['taskDetails'] = var10;
            var17['withoutMarkdown'] = var8;
            var17['onGameTitleClick'] = var13;
            var3 = var17.quest;
            var16 = var17.taskDetails;
            var18 = var17.withoutMarkdown;
            var19 = var17.onGameTitleClick;
            var21 = var16.targetMinutes;
            var3 = var3.config;
            var3 = var3.messages;
            var22 = var3.gameTitle;
            var17 = _closure1_slot14;
            var3 = null;
            if(!(var3 == var19)) { _fun0008_ip = 146; continue _fun0008 }
case 147:
            var16 = _closure1_slot0;
            var23 = _closure1_slot2;
            var3 = 7;
            var3 = var23[var3];
            var3 = var16.bind(var4)(var3);
            var3 = var3.t;
            var16 = var3.a/ia7F;
            _fun0008_ip = 148; continue _fun0008;
case 146:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var3 = 7;
            var3 = var24[var3];
            var3 = var23.bind(var4)(var3);
            var3 = var3.t;
            var16 = var3.HHVg4i;
case 148:
            var3 = {};
            var3['gameTitle'] = var22;
            var3['streamingDurationRequirement'] = var21;
            var3['onGameTitleClick'] = var19;
            var1 = var17.bind(var4)(var16, var3, var18);
case 145:
            _fun0008_ip = 149; continue _fun0008;
case 71:
            var16 = _closure1_slot21;
            var3 = {};
            var3['quest'] = var11;
            var3['taskDetails'] = var10;
            var3['withoutMarkdown'] = var8;
            var3['hasNitro'] = var15;
            var3['collectibleRewardDuration'] = var14;
            var3['onGameTitleClick'] = var13;
            var3['descriptionExperimentVariant'] = var12;
            var1 = var16.bind(var4)(var3);
case 149:
            _fun0008_ip = 150; continue _fun0008;
case 70:
            var16 = {};
            var16['quest'] = var11;
            var16['taskDetails'] = var10;
            var16['withoutMarkdown'] = var8;
            var16['hasNitro'] = var15;
            var16['collectibleRewardDuration'] = var14;
            var16['onGameTitleClick'] = var13;
            var16['descriptionExperimentVariant'] = var12;
            var3 = var16.quest;
            var21 = var16.taskDetails;
            var18 = var16.withoutMarkdown;
            var28 = var16.hasNitro;
            var22 = var16.collectibleRewardDuration;
            var19 = var16.onGameTitleClick;
            var27 = var16.descriptionExperimentVariant;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var23 = var16[var20];
            var25 = var17.bind(var4)(var23);
            var24 = var25.getDefaultRewardNameWithArticle;
            var23 = var3.config;
            var23 = var24.bind(var25)(var23);
            var21 = var21.targetMinutes;
            var24 = var3.config;
            var24 = var24.messages;
            var24 = var24.gameTitle;
            var25 = var16[var20];
            var29 = var17.bind(var4)(var25);
            var26 = var29.isCollectibleQuestRewardPremiumExtendable;
            var25 = var3.config;
            var25 = var26.bind(var29)(var25);
            var16 = var16[var20];
            var17 = var17.bind(var4)(var16);
            var16 = var17.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var3.config;
            var3 = var16.bind(var17)(var3);
            var16 = null;
            var26 = var16 != var19;
            var17 = _closure1_slot14;
            if(!var28) { _fun0008_ip = 151; continue _fun0008 }
case 152:
            if(var25) { _fun0008_ip = 153; continue _fun0008 }
case 151:
            if(var25) { _fun0008_ip = 154; continue _fun0008 }
case 155:
            if(!(var16 == var22)) { _fun0008_ip = 154; continue _fun0008 }
case 156:
            var16 = _closure1_slot20;
            var16 = var16.bind(var4)(var27, var26);
            _fun0008_ip = 157; continue _fun0008;
case 154:
            var25 = _closure1_slot19;
            var16 = var25.bind(var4)(var27, var26);
case 157:
            _fun0008_ip = 158; continue _fun0008;
case 153:
            if(var3) { _fun0008_ip = 159; continue _fun0008 }
case 160:
            var3 = _closure1_slot18;
            var3 = var3.bind(var4)(var27, var26);
            _fun0008_ip = 161; continue _fun0008;
case 159:
            var25 = _closure1_slot17;
            var3 = var25.bind(var4)(var27, var22, var26);
case 161:
            var16 = var3;
case 158:
            var3 = {};
            var3['gameTitle'] = var24;
            var3['targetMinutes'] = var21;
            var3['rewardNameWithArticle'] = var23;
            var3['duration'] = var22;
            var3['streamingDurationRequirement'] = var21;
            var3['onGameTitleClick'] = var19;
            var1 = var17.bind(var4)(var16, var3, var18);
case 150:
            _fun0008_ip = 162; continue _fun0008;
case 68:
            var3 = {};
            var3['quest'] = var11;
            var3['taskDetails'] = var10;
            var3['withoutMarkdown'] = var8;
            var3['hasNitro'] = var15;
            var3['collectibleRewardDuration'] = var14;
            var3['onGameTitleClick'] = var13;
            var3['descriptionExperimentVariant'] = var12;
            var12 = var3.quest;
            var16 = var3.taskDetails;
            var14 = var3.withoutMarkdown;
            var24 = var3.hasNitro;
            var17 = var3.collectibleRewardDuration;
            var15 = var3.onGameTitleClick;
            var22 = var3.descriptionExperimentVariant;
            var13 = _closure1_slot0;
            var3 = _closure1_slot2;
            var18 = var3[var20];
            var21 = var13.bind(var4)(var18);
            var19 = var21.getDefaultRewardNameWithArticle;
            var18 = var12.config;
            var18 = var19.bind(var21)(var18);
            var16 = var16.targetMinutes;
            var19 = var12.config;
            var19 = var19.messages;
            var19 = var19.gameTitle;
            var21 = var3[var20];
            var25 = var13.bind(var4)(var21);
            var23 = var25.isCollectibleQuestRewardPremiumExtendable;
            var21 = var12.config;
            var23 = var23.bind(var25)(var21);
            var3 = var3[var20];
            var20 = var13.bind(var4)(var3);
            var13 = var20.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var3 = var12.config;
            var3 = var13.bind(var20)(var3);
            var12 = var12.config;
            var20 = var12.features;
            var13 = var20.includes;
            var12 = _closure1_slot9;
            var12 = var12.NON_GAMING_PLAY_QUEST;
            var20 = var13.bind(var20)(var12);
            var12 = null;
            var21 = var12 != var15;
            var13 = _closure1_slot14;
            if(!var24) { _fun0008_ip = 163; continue _fun0008 }
case 164:
            if(var23) { _fun0008_ip = 165; continue _fun0008 }
case 163:
            if(var23) { _fun0008_ip = 166; continue _fun0008 }
case 167:
            if(!(var12 == var17)) { _fun0008_ip = 166; continue _fun0008 }
case 168:
            if(var20) { _fun0008_ip = 169; continue _fun0008 }
case 170:
            var12 = _closure1_slot20;
            var12 = var12.bind(var4)(var22, var21);
            _fun0008_ip = 171; continue _fun0008;
case 169:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 7;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var12 = var23.e+K3xJ;
case 171:
            _fun0008_ip = 172; continue _fun0008;
case 166:
            if(var20) { _fun0008_ip = 173; continue _fun0008 }
case 174:
            var23 = _closure1_slot19;
            var23 = var23.bind(var4)(var22, var21);
            _fun0008_ip = 175; continue _fun0008;
case 173:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 7;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var23 = var24.enQ3jU;
case 175:
            var12 = var23;
case 172:
            _fun0008_ip = 176; continue _fun0008;
case 165:
            if(var3) { _fun0008_ip = 177; continue _fun0008 }
case 178:
            if(var20) { _fun0008_ip = 179; continue _fun0008 }
case 180:
            var3 = _closure1_slot18;
            var3 = var3.bind(var4)(var22, var21);
            _fun0008_ip = 181; continue _fun0008;
case 179:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 7;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var3 = var23["1AcTqm"];
case 181:
            _fun0008_ip = 182; continue _fun0008;
case 177:
            if(var20) { _fun0008_ip = 183; continue _fun0008 }
case 184:
            var20 = _closure1_slot17;
            var20 = var20.bind(var4)(var22, var17, var21);
            _fun0008_ip = 185; continue _fun0008;
case 183:
            var21 = _closure1_slot16;
            var20 = var21.bind(var4)(var22, var17);
case 185:
            var3 = var20;
case 182:
            var12 = var3;
case 176:
            var3 = {};
            var3['gameTitle'] = var19;
            var3['streamingDurationRequirement'] = var16;
            var3['rewardNameWithArticle'] = var18;
            var3['duration'] = var17;
            var3['targetMinutes'] = var16;
            var3['onGameTitleClick'] = var15;
            var1 = var13.bind(var4)(var12, var3, var14);
case 162:
            _fun0008_ip = 186; continue _fun0008;
case 66:
            var3 = _closure1_slot22;
            var2 = {};
            var2['quest'] = var11;
            var2['taskDetails'] = var10;
            var2['sourceQuestContent'] = var9;
            var2['withoutMarkdown'] = var8;
            var2['popoutTargetElementRef'] = var7;
            var2['onGameSheetOpened'] = var6;
            var2['onGameSheetClosed'] = var5;
            var1 = var3.bind(var4)(var2);
case 186:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function getQuestsInstructionsToWinRewardWithDescriptionExperiment(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot23;
            var2 = {};
            var8 = var2;
            var7 = var1;
            var5 = copyDataProperties(var8, var7);
            var5 = var1.currentUser;
            var6 = null;
            if(!(var6 == var5)) { _fun0009_ip = 187; continue _fun0009 }
case 188:
            var6 = _closure1_slot6;
            var4 = var6.getCurrentUser;
            var5 = var4.bind(var6)();
case 187:
            var4 = 'currentUser';
            var2[3] = var5;
            var5 = var1.popoutTargetElementRef;
            var4 = 'popoutTargetElementRef';
            var2[3] = var5;
            var5 = var1.onGameSheetOpened;
            var4 = 'onGameSheetOpened';
            var2[3] = var5;
            var5 = var1.onGameSheetClosed;
            var4 = 'onGameSheetClosed';
            var2[3] = var5;
            var5 = var1.onGameTitleClick;
            var4 = 'onGameTitleClick';
            var2[3] = var5;
            var4 = var1.descriptionExperimentVariant;
            var1 = 'descriptionExperimentVariant';
            var2[0] = var4;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var4 = function useQuestsInstructionsToWinReward(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var7 = arg1;
            var6 = var7.quest;
            var14 = var7.questContent;
            var13 = var7.sourceQuestContent;
            var10 = var7.gameProfileSource;
            var11 = var7.location;
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 9;
            var4 = var12[var2];
            var3 = undefined;
            var9 = var5.bind(var3)(var4);
            var8 = var9.useConnectedConsoleLinkOnClick;
            var4 = {};
            var4['quest'] = var6;
            var4['questContent'] = var14;
            var4['sourceQuestContent'] = var13;
            var9 = var8.bind(var9)(var4);
            var4 = 17;
            var4 = var12[var4];
            var14 = var5.bind(var3)(var4);
            var13 = var14.useStateFromStores;
            var4 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var13.bind(var14)(var8, var4);
            var2 = var12[var2];
            var4 = var5.bind(var3)(var2);
            var2 = var4.useThirdPartyTaskDetails;
            var4 = var2.bind(var4)(var6);
            var2 = 11;
            var2 = var12[var2];
            var5 = var5.bind(var3)(var2);
            var2 = var5.getAllApplicationIds;
            var5 = var2.bind(var5)(var6);
            var6 = null;
            var2 = var6 == var5;
            var12 = undefined;
            if(var2) { _fun0010_ip = 189; continue _fun0010 }
case 190:
            var2 = 0;
            var12 = var5[var2];
case 189:
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 18;
            var2 = var13[var2];
            var5 = var5.bind(var3)(var2);
            var2 = {};
            var2['applicationId'] = var12;
            var12 = _closure1_slot7;
            var12 = var12.QUEST_INSTRUCTIONS;
            var2['location'] = var12;
            if(!(var6 == var10)) { _fun0010_ip = 191; continue _fun0010 }
case 30:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 19;
            var12 = var14[var12];
            var12 = var13.bind(var3)(var12);
            var12 = var12.GameProfileSources;
            var10 = var12.QuestHome;
case 191:
            var2['source'] = var10;
            var2 = var5.bind(var3)(var2);
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var2 = var5.bind(var3)(var2);
            var10 = var2.QuestCardDescriptionExperiment;
            var5 = var10.useConfig;
            var2 = {};
            var2['location'] = var11;
            var2 = var5.bind(var10)(var2);
            var5 = var2.variant;
            var2 = _closure1_slot24;
            var1 = {};
            var17 = var1;
            var16 = var7;
            var7 = copyDataProperties(var17, var16);
            var7 = 'connectedConsoleLinkOnClick';
            var1[6] = var9;
            var7 = 'currentUser';
            var1[6] = var8;
            var8 = false;
            var7 = 'withoutMarkdown';
            var1[6] = var8;
            var7 = var6 != var4;
            var6 = undefined;
            if(!var7) { _fun0010_ip = 192; continue _fun0010 }
case 193:
            var6 = var4;
case 192:
            var4 = 'thirdPartyTaskDetails';
            var1[3] = var6;
            var4 = 'onGameTitleClick';
            var1[3] = var3;
            var4 = 'descriptionExperimentVariant';
            var1[3] = var5;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot25 = var4;
    var1 = function getSimplifiedQuestTaskType(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 11;
            var1 = var1[var6];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isConsoleQuest;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 39; continue _fun0011 }
case 194:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.hasPlayActivityTask;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 39; continue _fun0011 }
case 195:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var7 = var3.bind(var5)(var1);
            var3 = var7.hasStreamOnDesktopTask;
            var1 = {};
            var1['quest'] = var4;
            var1 = var3.bind(var7)(var1);
            if(var1) { _fun0011_ip = 196; continue _fun0011 }
case 197:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.hasWatchVideoOnMobileTasks;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 198; continue _fun0011 }
case 199:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isInGameQuest;
            var1 = var1.bind(var3)(var4);
            var3 = _closure1_slot13;
            if(var1) { _fun0011_ip = 200; continue _fun0011 }
case 190:
            var1 = var3.PLAY;
            _fun0011_ip = 201; continue _fun0011;
case 200:
            var1 = var3.IN_GAME;
case 201:
            _fun0011_ip = 202; continue _fun0011;
case 198:
            var3 = _closure1_slot13;
            var1 = var3.WATCH_VIDEO;
case 202:
            _fun0011_ip = 203; continue _fun0011;
case 196:
            var3 = _closure1_slot13;
            var1 = var3.STREAM;
case 203:
            _fun0011_ip = 30; continue _fun0011;
case 39:
            var2 = _closure1_slot13;
            var1 = var2.PLAY;
case 30:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
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
            if(var2) { _fun0012_ip = 15; continue _fun0012 }
case 6:
            var7 = null;
            var2 = var7 == var6;
            if(var2) { _fun0012_ip = 204; continue _fun0012 }
case 205:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 22;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var8 = var7 == var6;
            var3 = undefined;
            if(var8) { _fun0012_ip = 206; continue _fun0012 }
case 207:
            var6 = var6.embeddedActivityConfig;
            var7 = var7 == var6;
            var3 = undefined;
            if(var7) { _fun0012_ip = 206; continue _fun0012 }
case 208:
            var3 = var6.supported_platforms;
case 206:
            var2 = var4.bind(var5)(var3);
case 204:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
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
            var1 = 9;
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
            var13 = 10;
            var1 = var3[var13];
            var10 = var5.bind(var9)(var1);
            var1 = var10.isSponsoredPlayQuest;
            var1 = var1.bind(var10)(var8);
            var11 = 11;
            var3 = var3[var11];
            var5 = var5.bind(var9)(var3);
            var3 = var5.isConsoleQuest;
            var3 = var3.bind(var5)(var8);
            if(!var3) { _fun0013_ip = 209; continue _fun0013 }
case 210:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var10 = var5.bind(var9)(var3);
            var5 = var10.hasPlayOnDesktopTask;
            var3 = {};
            var3['quest'] = var8;
            var3 = var5.bind(var10)(var3);
            if(var3) { _fun0013_ip = 209; continue _fun0013 }
case 211:
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
case 209:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var5 = var5.bind(var9)(var3);
            var3 = var5.isConsoleQuest;
            var5 = var3.bind(var5)(var8);
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            if(var5) { _fun0013_ip = 212; continue _fun0013 }
case 213:
            if(var1) { _fun0013_ip = 214; continue _fun0013 }
case 215:
            var5 = var10[var11];
            var12 = var3.bind(var9)(var5);
            var5 = var12.hasWatchVideoTasks;
            var5 = var5.bind(var12)(var8);
            if(var5) { _fun0013_ip = 216; continue _fun0013 }
case 217:
            var5 = null;
            if(!(var5 == var2)) { _fun0013_ip = 218; continue _fun0013 }
case 219:
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var12 = var12.bind(var9)(var5);
            var5 = var12.hasPlayActivityTask;
            var14 = var5.bind(var12)(var8);
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            if(var14) { _fun0013_ip = 220; continue _fun0013 }
case 221:
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
            if(!var14) { _fun0013_ip = 222; continue _fun0013 }
case 223:
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
            if(var14) { _fun0013_ip = 224; continue _fun0013 }
case 225:
            var14 = var15.wmOh/q;
            _fun0013_ip = 226; continue _fun0013;
case 224:
            var14 = var15.fe7Xec;
case 226:
            var17 = var14;
case 222:
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
case 220:
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
            if(var5) { _fun0013_ip = 227; continue _fun0013 }
case 228:
            var13 = var12.xHXCyf;
            var5 = {};
            var5['minutes'] = var6;
            var16 = var8.config;
            var16 = var16.messages;
            var16 = var16.gameTitle;
            var5['activityName'] = var16;
            var5 = var14.bind(var15)(var13, var5);
            _fun0013_ip = 229; continue _fun0013;
case 227:
            var13 = var12["1NaRSs"];
            var12 = {};
            var12['minutes'] = var6;
            var5 = var14.bind(var15)(var13, var12);
case 229:
            return var5;
case 218:
            var2 = var2.title;
            return var2;
case 216:
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
            if(var11) { _fun0013_ip = 230; continue _fun0013 }
case 231:
            var5 = var5.messages;
            var13 = var5.videoTitle;
case 230:
            if(!(var2 != var13)) { _fun0013_ip = 232; continue _fun0013 }
case 233:
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
            _fun0013_ip = 234; continue _fun0013;
case 232:
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
case 234:
            return var2;
case 214:
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
case 212:
            var2 = 7;
            var4 = var10[var2];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            if(var1) { _fun0013_ip = 235; continue _fun0013 }
case 236:
            var3 = var2.Ajlcd7;
            var1 = {};
            var1['minutes'] = var6;
            var1['onClick'] = var7;
            var8 = var8.config;
            var8 = var8.messages;
            var8 = var8.gameTitle;
            var1['gameTitle'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0013_ip = 237; continue _fun0013;
case 235:
            var3 = var2.gbtCpW;
            var2 = {};
            var2['onClick'] = var7;
            var2['minutes'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 237:
            return var1;
        }
    };
    var3['useQuestInstructionTitle'] = var5;
    var5 = function getQuestsInstructionsToWinReward(arg1) {
        var7 = arg1;
        var3 = _closure1_slot24;
        var2 = {};
        var9 = var2;
        var8 = var7;
        var4 = copyDataProperties(var9, var8);
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 8;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.QuestCardDescriptionExperiment;
        var5 = var6.getConfig;
        var4 = {};
        var7 = var7.location;
        var4['location'] = var7;
        var4 = var5.bind(var6)(var4);
        var5 = var4.variant;
        var4 = 'descriptionExperimentVariant';
        var2[3] = var5;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['getQuestsInstructionsToWinReward'] = var5;
    var3['useQuestsInstructionsToWinReward'] = var4;
    var4 = function useQuestTileDescription(arg1, arg2, arg3, arg4) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var6 = arg1;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 9;
            var1 = var9[var10];
            var7 = undefined;
            var3 = var8.bind(var7)(var1);
            var1 = var3.useQuestTaskDetails;
            var5 = var1.bind(var3)(var6);
            var1 = 11;
            var1 = var9[var1];
            var3 = var8.bind(var7)(var1);
            var1 = var3.getThirdPartyTaskDetails;
            var3 = var1.bind(var3)(var6);
            var4 = _closure1_slot25;
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
            var5 = arg4;
            var1['popoutTargetElementRef'] = var5;
            var5 = arg3;
            var1['gameProfileSource'] = var5;
            var4 = var4.bind(var7)(var1);
            var8 = var6.userStatus;
            var1 = null;
            var9 = var1 == var8;
            var5 = undefined;
            if(var9) { _fun0014_ip = 238; continue _fun0014 }
case 26:
            var5 = var8.claimedAt;
case 238:
            var5 = var1 != var5;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var9 = var9.bind(var7)(var8);
            var8 = var9.useQuestFormattedDate;
            var10 = var6.userStatus;
            var11 = var1 == var10;
            var6 = undefined;
            if(var11) { _fun0014_ip = 203; continue _fun0014 }
case 29:
            var6 = var10.claimedAt;
case 203:
            var6 = var8.bind(var9)(var6);
            if(var5) { _fun0014_ip = 239; continue _fun0014 }
case 41:
            if(!(var1 == var3)) { _fun0014_ip = 240; continue _fun0014 }
case 30:
            var5 = var1 != var4;
            var1 = null;
            if(!var5) { _fun0014_ip = 241; continue _fun0014 }
case 67:
            var1 = var4;
case 241:
            _fun0014_ip = 242; continue _fun0014;
case 240:
            var1 = var3.description;
case 242:
            _fun0014_ip = 243; continue _fun0014;
case 239:
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
case 243:
            return var1;
        }
    };
    var3['useQuestTileDescription'] = var4;
    var4 = function useQuestBarSubtitle(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
            var1 = 9;
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
            if(var9) { _fun0015_ip = 244; continue _fun0015 }
case 245:
            var2 = var4.completedAt;
case 244:
            var17 = var18 != var2;
            var4 = var3.userStatus;
            var9 = var18 == var4;
            var2 = undefined;
            if(var9) { _fun0015_ip = 18; continue _fun0015 }
case 246:
            var2 = var4.enrolledAt;
case 18:
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
            var2 = _closure1_slot25;
            var1 = {};
            var1['quest'] = var3;
            var11 = _closure1_slot7;
            var11 = var11.QUESTS_BAR;
            var1['location'] = var11;
            var11 = 13;
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
            var7 = 19;
            var7 = var20[var7];
            var7 = var13.bind(var6)(var7);
            var7 = var7.GameProfileSources;
            var7 = var7.QuestBar;
            var1['gameProfileSource'] = var7;
            var1 = var2.bind(var6)(var1);
            if(!(var18 == var19)) { _fun0015_ip = 247; continue _fun0015 }
case 248:
            var13 = var10.percentComplete;
            _fun0015_ip = 249; continue _fun0015;
case 247:
            var13 = var19.percentComplete;
case 249:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            if(var17) { _fun0015_ip = 250; continue _fun0015 }
case 219:
            if(var16) { _fun0015_ip = 251; continue _fun0015 }
case 252:
            var16 = 11;
            var16 = var7[var16];
            var17 = var2.bind(var6)(var16);
            var16 = var17.hasWatchVideoTasks;
            var16 = var16.bind(var17)(var3);
            if(var16) { _fun0015_ip = 253; continue _fun0015 }
case 254:
            if(!(!(var13 > var15))) { _fun0015_ip = 255; continue _fun0015 }
case 256:
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
            _fun0015_ip = 257; continue _fun0015;
case 255:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            if(var14) { _fun0015_ip = 258; continue _fun0015 }
case 259:
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
            _fun0015_ip = 260; continue _fun0015;
case 258:
            var15 = 20;
            var15 = var17[var15];
            var17 = var16.bind(var6)(var15);
            var16 = var17.getContextualEntrypointHeading;
            var15 = {};
            var15['quest'] = var3;
            var15['taskDetails'] = var10;
            var20 = var18 != var19;
            var18 = undefined;
            if(!var20) { _fun0015_ip = 261; continue _fun0015 }
case 262:
            var18 = var19;
case 261:
            var15['thirdPartyTaskDetails'] = var18;
            var14 = var16.bind(var17)(var15);
case 260:
            var13 = var14;
case 257:
            _fun0015_ip = 263; continue _fun0015;
case 253:
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
case 263:
            return var13;
case 251:
            var11 = var7[var11];
            var11 = var2.bind(var6)(var11);
            var11 = var11.TaskPlatformScreen;
            var11 = var11.SELECT;
            if(!(var12 !== var11)) { _fun0015_ip = 264; continue _fun0015 }
case 265:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 10;
            var11 = var13[var11];
            var12 = var12.bind(var6)(var11);
            var11 = var12.isSponsoredPlayQuest;
            var11 = var11.bind(var12)(var3);
            if(!var11) { _fun0015_ip = 264; continue _fun0015 }
case 266:
            if(!var9) { _fun0015_ip = 264; continue _fun0015 }
case 267:
            if(var4) { _fun0015_ip = 264; continue _fun0015 }
case 268:
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 12;
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
case 264:
            return var1;
case 250:
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
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
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
            var6 = 9;
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
            if(var12) { _fun0016_ip = 269; continue _fun0016 }
case 210:
            var6 = var11.completedAt;
case 269:
            var6 = var8 != var6;
            if(!(var8 == var10)) { _fun0016_ip = 270; continue _fun0016 }
case 271:
            var7 = var7.percentComplete;
            _fun0016_ip = 272; continue _fun0016;
case 270:
            var7 = var10.percentComplete;
case 272:
            if(var6) { _fun0016_ip = 273; continue _fun0016 }
case 274:
            var10 = var4.userStatus;
            var11 = var8 == var10;
            var6 = undefined;
            if(var11) { _fun0016_ip = 29; continue _fun0016 }
case 202:
            var6 = var10.enrolledAt;
case 29:
            if(!(var8 != var6)) { _fun0016_ip = 275; continue _fun0016 }
case 276:
            if(!(!(var7 > var2))) { _fun0016_ip = 78; continue _fun0016 }
case 275:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 13;
            var2 = var8[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.TaskPlatformScreen;
            var2 = var2.SELECT;
            if(!(var3 !== var2)) { _fun0016_ip = 277; continue _fun0016 }
case 278:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
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
            if(var2) { _fun0016_ip = 279; continue _fun0016 }
case 280:
            var2 = var3["7e5k7L"];
            var2 = var4.bind(var6)(var2);
            _fun0016_ip = 281; continue _fun0016;
case 279:
            var3 = var3.mOrpXG;
            var2 = var4.bind(var6)(var3);
case 281:
            _fun0016_ip = 282; continue _fun0016;
case 277:
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
case 282:
            return var2;
case 78:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 21;
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
case 273:
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
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var8 = var1.quest;
            var3 = var1.application;
            var1 = var1.shortText;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0017_ip = 283; continue _fun0017 }
case 284:
            var1 = false;
case 283:
            var2 = function useSimplifiedQuestTaskType(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var3 = _closure1_slot26;
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
            var2 = 9;
            var2 = var9[var2];
            var6 = var6.bind(var5)(var2);
            var2 = var6.useQuestTaskDetails;
            var12 = var2.bind(var6)(var8);
            var2 = _closure1_slot13;
            var2 = var2.PLAY;
            if(!(var2 !== var4)) { _fun0017_ip = 255; continue _fun0017 }
case 21:
            var2 = _closure1_slot13;
            var2 = var2.STREAM;
            if(!(var2 !== var4)) { _fun0017_ip = 285; continue _fun0017 }
case 286:
            var2 = _closure1_slot13;
            var2 = var2.WATCH_VIDEO;
            if(!(var2 !== var4)) { _fun0017_ip = 287; continue _fun0017 }
case 288:
            var2 = _closure1_slot13;
            var2 = var2.IN_GAME;
            if(!(var2 !== var4)) { _fun0017_ip = 289; continue _fun0017 }
case 290:
            return var5;
case 289:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.canLaunchActivity;
            var2 = var2.bind(var4)(var8);
            if(!var2) { _fun0017_ip = 291; continue _fun0017 }
case 292:
            var2 = _closure1_slot27;
            var2 = var2.bind(var5)(var8, var3);
            if(var2) { _fun0017_ip = 293; continue _fun0017 }
case 291:
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
            _fun0017_ip = 294; continue _fun0017;
case 293:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var11 = 7;
            var4 = var4[var11];
            var4 = var6.bind(var5)(var4);
            var9 = var4.intl;
            var6 = var9.string;
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var11];
            var4 = var10.bind(var5)(var4);
            var10 = var4.t;
            if(var1) { _fun0017_ip = 295; continue _fun0017 }
case 296:
            var4 = var10.hRIVy+;
            _fun0017_ip = 297; continue _fun0017;
case 295:
            var4 = var10.CkUzLd;
case 297:
            var2 = var6.bind(var9)(var4);
case 294:
            return var2;
case 287:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 7;
            var4 = var13[var2];
            var4 = var11.bind(var5)(var4);
            var9 = var4.intl;
            var6 = var9.formatToPlainString;
            var2 = var13[var2];
            var2 = var11.bind(var5)(var2);
            var2 = var2.t;
            var4 = var2.GNsKiW;
            var2 = {};
            var10 = 11;
            var10 = var13[var10];
            var11 = var11.bind(var5)(var10);
            var10 = var11.formatWatchTaskRemainingTime;
            var10 = var10.bind(var11)(var12);
            var2['remainTime'] = var10;
            var2 = var6.bind(var9)(var4, var2);
            return var2;
case 285:
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
case 255:
            var2 = _closure1_slot27;
            var2 = var2.bind(var5)(var8, var3);
            if(!var2) { _fun0017_ip = 298; continue _fun0017 }
case 299:
            var2 = var8.config;
            var4 = var2.features;
            var3 = var4.includes;
            var2 = _closure1_slot9;
            var2 = var2.CLOUD_GAMING_ACTIVITY;
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            if(var2) { _fun0017_ip = 300; continue _fun0017 }
case 301:
            var2 = 10;
            var2 = var6[var2];
            var3 = var4.bind(var5)(var2);
            var2 = var3.canLaunchActivity;
            var2 = var2.bind(var3)(var8);
            if(var2) { _fun0017_ip = 220; continue _fun0017 }
case 298:
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
case 220:
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
            if(var1) { _fun0017_ip = 302; continue _fun0017 }
case 303:
            var1 = var7.Ie9++s;
            _fun0017_ip = 304; continue _fun0017;
case 302:
            var1 = var7.E4kW5O;
case 304:
            var1 = var2.bind(var3)(var1);
            return var1;
case 300:
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
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
            if(!var4) { _fun0018_ip = 305; continue _fun0018 }
case 306:
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
            if(var2) { _fun0018_ip = 24; continue _fun0018 }
case 307:
            var2 = var3.GYGb3A;
            var2 = var4.bind(var5)(var2);
            _fun0018_ip = 308; continue _fun0018;
case 24:
            var3 = var3.hh7Rb/;
            var2 = var4.bind(var5)(var3);
case 308:
            var1 = var2;
case 305:
            return var1;
        }
    };
    var3['usePremiumExtendableCopy'] = var4;
    var2 = function getRewardCodeRedemptionInstructions(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
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
            if(var6) { _fun0019_ip = 309; continue _fun0019 }
case 5:
            var3 = var11.platform;
case 309:
            if(!(var4 == var3)) { _fun0019_ip = 206; continue _fun0019 }
case 195:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 13;
            var6 = var10[var6];
            var6 = var8.bind(var1)(var6);
            var6 = var6.QuestRewardCodePlatforms;
            var3 = var6.CROSS_PLATFORM;
case 206:
            var6 = null;
            if(!var7) { _fun0019_ip = 198; continue _fun0019 }
case 204:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var9 = var8.bind(var1)(var7);
            var8 = var9.getRewardCodeQuestReward;
            var7 = {};
            var7['quest'] = var2;
            var12 = var4 == var11;
            var10 = undefined;
            if(var12) { _fun0019_ip = 310; continue _fun0019 }
case 311:
            var10 = var11.tier;
case 310:
            if(!(var4 == var10)) { _fun0019_ip = 189; continue _fun0019 }
case 312:
            var12 = var2.userStatus;
            var13 = var4 == var12;
            var11 = undefined;
            if(var13) { _fun0019_ip = 313; continue _fun0019 }
case 314:
            var11 = var12.claimedTier;
case 313:
            var10 = var11;
case 189:
            var7['idx'] = var10;
            var6 = var8.bind(var9)(var7);
case 198:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 20;
            var5 = var8[var5];
            var7 = var7.bind(var1)(var5);
            var5 = var7.getDefaultReward;
            var2 = var2.config;
            var5 = var5.bind(var7)(var2);
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0019_ip = 315; continue _fun0019 }
case 241:
            var6 = var6.messages;
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0019_ip = 315; continue _fun0019 }
case 316:
            var2 = var6.redemptionInstructionsByPlatform;
case 315:
            if(!(var4 == var2)) { _fun0019_ip = 33; continue _fun0019 }
case 317:
            var5 = var5.messages;
            var2 = var5.redemptionInstructionsByPlatform;
case 33:
            var4 = var4 != var3;
            var1 = undefined;
            if(!var4) { _fun0019_ip = 318; continue _fun0019 }
case 319:
            var1 = var2[var3];
case 318:
            return var1;
        }
    };
    var3['getRewardCodeRedemptionInstructions'] = var2;
    return var1;
})();