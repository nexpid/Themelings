// app/modules/quests/utils/QuestCopyUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var5 = var4.QuestHomeSortMethods;
    var _closure1_slot2 = var5;
    var5 = var4.RewardFilterTypes;
    var _closure1_slot3 = var5;
    var4 = var4.TaskFilterTypes;
    var _closure1_slot4 = var4;
    var4 = function getQuestUrl(arg1) {
        var1 = global;
        var2 = var1.location;
        var12 = var2.protocol;
        var2 = var1.location;
        var10 = var2.host;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var13 = '';
        var11 = '//';
        var9 = '/quests/';
        var8 = arg1;
        var1 = var13[var5](var12, var11, var10, var9, var8, var7);
        return var1;
    };
    var _closure1_slot5 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/utils/QuestCopyUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getContextualEntrypointHeading(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.quest;
            var2 = var1.taskDetails;
            var1 = var1.thirdPartyTaskDetails;
            var6 = var9.userStatus;
            var3 = null;
            var7 = var3 == var6;
            var5 = undefined;
            var4 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6.completedAt;
case 2:
            if(!(var3 == var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var9.userStatus;
            var7 = var3 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var6.enrolledAt;
case 6:
            if(!(var3 == var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 1;
            var7 = var10[var4];
            var7 = var6.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var4 = var10[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.t;
            var6 = var4.EQa7os;
            var4 = {};
            var9 = var9.config;
            var9 = var9.messages;
            var9 = var9.questName;
            var4['questName'] = var9;
            var4 = var7.bind(var8)(var6, var4);
            return var4;
case 8:
            var2 = var2.percentComplete;
            if(!(var3 != var1)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var1.percentComplete;
case 10:
            var1 = 0.75;
            if(!(!(var2 >= var1))) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = 0.45;
            if(!(var2 >= var1)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = 0.55;
            if(!(!(var2 <= var1))) { _fun0001_ip = 16; continue _fun0001 }
case 14:
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1["7e5k7L"];
            var1 = var2.bind(var3)(var1);
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.JMbfnc;
            var1 = var3.bind(var4)(var2);
case 19:
            _fun0001_ip = 20; continue _fun0001;
case 16:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.JNx8sG;
            var1 = var3.bind(var4)(var2);
case 20:
            _fun0001_ip = 21; continue _fun0001;
case 12:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.gvCR4H;
            var1 = var3.bind(var4)(var2);
case 21:
            return var1;
case 4:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.BzFeTF;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getContextualEntrypointHeading'] = var5;
    var5 = function getDisclosureText(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = var4.isTargetedDisclosure;
            var2 = var4.isContextualDisclosure;
            var1 = var4.isVideoQuest;
            var7 = var4.gamePublisher;
            var9 = var4.gameTitle;
            var6 = var4.cosponsorName;
            if(var3) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 1;
            var5 = var11[var3];
            var4 = undefined;
            var5 = var10.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            if(var1) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var4 = var3["5bQWNG"];
            var1 = {};
            var1['gamePublisher'] = var7;
            var1['gameTitle'] = var9;
            var1 = var5.bind(var8)(var4, var1);
            _fun0002_ip = 26; continue _fun0002;
case 24:
            var4 = var3.rctMRl;
            var3 = {};
            var3['gamePublisher'] = var7;
            var1 = var5.bind(var8)(var4, var3);
case 26:
            _fun0002_ip = 27; continue _fun0002;
case 22:
            if(var2) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var2 = null;
            if(!(var2 != var6)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 1;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.DV47Gy;
            var2 = {};
            var2['gamePublisher'] = var7;
            var2['cosponsorName'] = var6;
            var6 = var4.bind(var5)(var3, var2);
            _fun0002_ip = 32; continue _fun0002;
case 30:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 1;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.Piihy1;
            var2 = {};
            var2['gamePublisher'] = var7;
            var6 = var4.bind(var5)(var3, var2);
case 32:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 1;
            var3 = var8[var2];
            var5 = undefined;
            var3 = var7.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.fEbrT8;
            var5 = var3.bind(var4)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ' ';
            var2 = var4.bind(var3)(var6, var2, var5);
            _fun0002_ip = 33; continue _fun0002;
case 28:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 1;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.nPg6f1;
            var2 = var4.bind(var5)(var3);
case 33:
            var1 = var2;
case 27:
            return var1;
        }
    };
    var3['getDisclosureText'] = var5;
    var5 = function getExternalCtaLabel(arg1) {
        var1 = arg1;
        var1 = var1.config;
        var1 = var1.ctaConfig;
        var1 = var1.buttonLabel;
        return var1;
    };
    var3['getExternalCtaLabel'] = var5;
    var5 = function getSortMethodText(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot2;
            var2 = var2.SUGGESTED;
            if(!(var2 !== var3)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var2 = _closure1_slot2;
            var2 = var2.MOST_RECENT;
            if(!(var2 !== var3)) { _fun0003_ip = 36; continue _fun0003 }
case 3:
            var2 = _closure1_slot2;
            var2 = var2.EXPIRING_SOON;
            if(!(var2 !== var3)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var2 = _closure1_slot2;
            var2 = var2.RECENTLY_ENROLLED;
            if(!(var2 !== var3)) { _fun0003_ip = 39; continue _fun0003 }
case 7:
            var2 = undefined;
            return var2;
case 39:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.BB+2tX;
            var2 = var3.bind(var4)(var2);
            return var2;
case 37:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.IB22n3;
            var2 = var3.bind(var4)(var2);
            return var2;
case 36:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.K6oEu2;
            var2 = var3.bind(var4)(var2);
            return var2;
case 34:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.gBfXPZ;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getSortMethodText'] = var5;
    var5 = function getFilterTypeText(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot3;
            var2 = var2.VIRTUAL_CURRENCY;
            if(!(var2 !== var3)) { _fun0004_ip = 40; continue _fun0004 }
case 35:
            var2 = _closure1_slot3;
            var2 = var2.COLLECTIBLE;
            if(!(var2 !== var3)) { _fun0004_ip = 41; continue _fun0004 }
case 3:
            var2 = _closure1_slot3;
            var2 = var2.IN_GAME;
            if(!(var2 !== var3)) { _fun0004_ip = 15; continue _fun0004 }
case 42:
            var2 = _closure1_slot4;
            var2 = var2.VIDEO;
            if(!(var2 !== var3)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var2 = _closure1_slot4;
            var2 = var2.PLAY;
            if(!(var2 !== var3)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var2 = undefined;
            return var2;
case 45:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["1nJR4p"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 43:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.e0iISA;
            var2 = var3.bind(var4)(var2);
            return var2;
case 15:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.O/J2kr;
            var2 = var3.bind(var4)(var2);
            return var2;
case 41:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Jg17Ut;
            var2 = var3.bind(var4)(var2);
            return var2;
case 40:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ElYQFS;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getFilterTypeText'] = var5;
    var5 = function getFilterGroupHeadingText(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = 'reward';
            if(!(var1 !== var2)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var1 = 'task';
            if(!(var1 !== var2)) { _fun0005_ip = 35; continue _fun0005 }
case 49:
            var1 = undefined;
            return var1;
case 35:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.Hufmss;
            var1 = var2.bind(var3)(var1);
            return var1;
case 47:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.vjLqAU;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getFilterGroupHeadingText'] = var5;
    var3['getQuestUrl'] = var4;
    var4 = function getCtaLink(arg1) {
        var1 = arg1;
        var1 = var1.ctaConfig;
        var1 = var1.link;
        return var1;
    };
    var3['getCtaLink'] = var4;
    var4 = function(arg1, arg2) {
        var5 = arg1;
        var9 = arg2;
        var4 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 2;
        var3 = var6[var1];
        var1 = undefined;
        var8 = var4.bind(var1)(var3);
        var7 = var8.trackQuestContentClicked;
        var3 = {};
        var3['questId'] = var5;
        var10 = var9.content;
        var3['questContent'] = var10;
        var10 = var9.ctaContent;
        var3['questContentCTA'] = var10;
        var10 = var9.position;
        var3['questContentPosition'] = var10;
        var10 = var9.impressionId;
        var3['impressionId'] = var10;
        var9 = var9.sourceQuestContent;
        var3['sourceQuestContent'] = var9;
        var3 = var7.bind(var8)(var3);
        var3 = 3;
        var3 = var6[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.copy;
        var2 = _closure1_slot5;
        var2 = var2.bind(var1)(var5);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['copyShareLink'] = var4;
    var2 = function getDefaultReward(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = var2.rewardsConfig;
            var1 = var1.rewards;
            var1 = var1.length;
            var3 = 0;
            if(!(var3 !== var1)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var1 = var2.rewardsConfig;
            var1 = var1.rewards;
            var1 = var1[var3];
            return var1;
case 50:
            var1 = global;
            var3 = var1.Error;
            var5 = var2.id;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var2 = 'Quest ';
            var1 = ' has no rewards configured';
            var7 = var4.bind(var2)(var5, var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['getDefaultReward'] = var2;
    return var1;
})();