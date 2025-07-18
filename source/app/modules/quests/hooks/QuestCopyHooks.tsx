// app/modules/quests/hooks/QuestCopyHooks.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function formatWithOrWithoutMarkdown(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.intl;
            var1 = arg3;
            if(var1) { _fun0004_ip = 55; continue _fun0004 }
 42:
            var1 = var3.formatToPlainString;
            var1 = var1.bind(var3)(var5, var4);
            _fun0004_ip = 67; continue _fun0004;
 55:
            var2 = var3.formatToParts;
            var1 = var2.bind(var3)(var5, var4);
 67:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _getQuestsInstructionsToWinReward(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var8 = var1.quest;
            var7 = var1.taskDetails;
            var10 = var1.thirdPartyTaskDetails;
            var5 = var1.withoutMarkdown;
            var12 = var1.currentUser;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var2 = 8;
            var2 = var1[var2];
            var6 = undefined;
            var9 = var4.bind(var6)(var2);
            var3 = var9.isPremium;
            var2 = _closure1_slot6;
            var2 = var2.TIER_2;
            var3 = var3.bind(var9)(var12, var2);
            var14 = 7;
            var2 = var1[var14];
            var12 = var4.bind(var6)(var2);
            var9 = var12.getCollectibleQuestRewardDuration;
            var2 = var8.config;
            var2 = var9.bind(var12)(var2);
            var1 = var1[var14];
            var4 = var4.bind(var6)(var1);
            var1 = var4.isConsoleQuest;
            var1 = var1.bind(var4)(var8);
            if(!var1) { _fun0005_ip = 165; continue _fun0005 }
 131:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var14];
            var4 = var4.bind(var6)(var1);
            var1 = var4.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var4)(var8);
            if(var1) { _fun0005_ip = 2042; continue _fun0005 }
 165:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var14];
            var4 = var4.bind(var6)(var1);
            var1 = var4.isConsoleQuest;
            var1 = var1.bind(var4)(var8);
            if(var1) { _fun0005_ip = 1696; continue _fun0005 }
 199:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var14];
            var4 = var4.bind(var6)(var1);
            var1 = var4.shouldUsePlayOnDesktopTask;
            var1 = var1.bind(var4)(var8);
            if(var1) { _fun0005_ip = 1348; continue _fun0005 }
 233:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var14];
            var9 = var4.bind(var6)(var1);
            var4 = var9.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var8;
            var1 = var4.bind(var9)(var1);
            if(var1) { _fun0005_ip = 1229; continue _fun0005 }
 274:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var14];
            var4 = var4.bind(var6)(var1);
            var1 = var4.hasWatchVideoTasks;
            var1 = var1.bind(var4)(var8);
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            if(var1) { _fun0005_ip = 845; continue _fun0005 }
 316:
            var1 = var4[var14];
            var12 = var9.bind(var6)(var1);
            var1 = var12.hasPlayActivityTask;
            var1 = var1.bind(var12)(var8);
            if(var1) { _fun0005_ip = 703; continue _fun0005 }
 342:
            var12 = null;
            if(!(var12 == var10)) { _fun0005_ip = 693; continue _fun0005 }
 351:
            var13 = {};
            var13['quest'] = var8;
            var13['taskDetails'] = var7;
            var13['withoutMarkdown'] = var5;
            var13['hasNitro'] = var3;
            var13['collectibleRewardDuration'] = var2;
            var1 = var13.quest;
            var18 = var13.taskDetails;
            var15 = var13.withoutMarkdown;
            var21 = var13.hasNitro;
            var17 = var13.collectibleRewardDuration;
            var22 = _closure1_slot0;
            var13 = _closure1_slot1;
            var16 = 6;
            var16 = var13[var16];
            var16 = var22.bind(var6)(var16);
            var20 = var16.SharedQuestFields;
            var19 = var20.build;
            var16 = var1.config;
            var16 = var19.bind(var20)(var16);
            var16 = var16.defaultRewardNameWithArticle;
            var18 = var18.targetMinutes;
            var19 = var1.config;
            var19 = var19.messages;
            var19 = var19.gameTitle;
            var20 = var13[var14];
            var24 = var22.bind(var6)(var20);
            var23 = var24.isCollectibleQuestRewardPremiumExtendable;
            var20 = var1.config;
            var20 = var23.bind(var24)(var20);
            var13 = var13[var14];
            var22 = var22.bind(var6)(var13);
            var13 = var22.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var1 = var1.config;
            var1 = var13.bind(var22)(var1);
            var13 = _closure1_slot12;
            if(!var21) { _fun0005_ip = 539; continue _fun0005 }
 536:
            if(var20) { _fun0005_ip = 614; continue _fun0005 }
 539:
            if(var20) { _fun0005_ip = 579; continue _fun0005 }
 542:
            if(!(var12 == var17)) { _fun0005_ip = 579; continue _fun0005 }
 546:
            var20 = _closure1_slot0;
            var21 = _closure1_slot1;
            var12 = 5;
            var12 = var21[var12];
            var12 = var20.bind(var6)(var12);
            var12 = var12.t;
            var12 = var12.hkJ+Gh;
            _fun0005_ip = 612; continue _fun0005;
 579:
            var21 = _closure1_slot0;
            var22 = _closure1_slot1;
            var20 = 5;
            var20 = var22[var20];
            var20 = var21.bind(var6)(var20);
            var20 = var20.t;
            var12 = var20.BLyDvL;
 612:
            _fun0005_ip = 663; continue _fun0005;
 614:
            var21 = _closure1_slot0;
            var22 = _closure1_slot1;
            var20 = 5;
            var20 = var22[var20];
            var20 = var21.bind(var6)(var20);
            var20 = var20.t;
            if(var1) { _fun0005_ip = 652; continue _fun0005 }
 642:
            var1 = var20.smG9qq;
            _fun0005_ip = 660; continue _fun0005;
 652:
            var1 = var20.X8Yt//;
 660:
            var12 = var1;
 663:
            var1 = {};
            var1['gameTitle'] = var19;
            var1['streamingDurationRequirement'] = var18;
            var1['duration'] = var17;
            var1['questReward'] = var16;
            var1 = var13.bind(var6)(var12, var1, var15);
            _fun0005_ip = 698; continue _fun0005;
 693:
            var1 = var10.description;
 698:
            _fun0005_ip = 840; continue _fun0005;
 703:
            var13 = {};
            var13['quest'] = var8;
            var13['taskDetails'] = var7;
            var13['withoutMarkdown'] = var5;
            var10 = var13.quest;
            var12 = var13.taskDetails;
            var15 = var13.withoutMarkdown;
            var17 = var12.targetMinutes;
            var12 = _closure1_slot0;
            var18 = _closure1_slot1;
            var13 = 6;
            var13 = var18[var13];
            var13 = var12.bind(var6)(var13);
            var16 = var13.SharedQuestFields;
            var13 = var16.build;
            var10 = var10.config;
            var10 = var13.bind(var16)(var10);
            var16 = var10.defaultRewardNameWithArticle;
            var13 = _closure1_slot12;
            var10 = 5;
            var10 = var18[var10];
            var10 = var12.bind(var6)(var10);
            var10 = var10.t;
            var12 = var10.VYwSSk;
            var10 = {};
            var10['streamingDurationRequirement'] = var17;
            var10['questReward'] = var16;
            var1 = var13.bind(var6)(var12, var10, var15);
 840:
            _fun0005_ip = 1227; continue _fun0005;
 845:
            var12 = 6;
            var4 = var4[var12];
            var4 = var9.bind(var6)(var4);
            var10 = var4.SharedQuestFields;
            var9 = var10.build;
            var4 = var8.config;
            var4 = var9.bind(var10)(var4);
            var10 = var4.defaultWatchVideoTask;
            var9 = null;
            var13 = var9 == var10;
            var4 = undefined;
            if(var13) { _fun0005_ip = 908; continue _fun0005 }
 896:
            var10 = var10.messages;
            var4 = var10.videoTitle;
 908:
            var10 = var9 != var4;
            var13 = 'video';
            if(!var10) { _fun0005_ip = 922; continue _fun0005 }
 919:
            var13 = var4;
 922:
            var10 = _closure1_slot0;
            var4 = _closure1_slot1;
            var12 = var4[var12];
            var12 = var10.bind(var6)(var12);
            var16 = var12.SharedQuestFields;
            var15 = var16.build;
            var12 = var8.config;
            var12 = var15.bind(var16)(var12);
            var12 = var12.defaultRewardNameWithArticle;
            var15 = var4[var14];
            var17 = var10.bind(var6)(var15);
            var16 = var17.isCollectibleQuestRewardPremiumExtendable;
            var15 = var8.config;
            var15 = var16.bind(var17)(var15);
            var4 = var4[var14];
            var16 = var10.bind(var6)(var4);
            var10 = var16.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var4 = var8.config;
            var4 = var10.bind(var16)(var4);
            var10 = _closure1_slot12;
            if(!var15) { _fun0005_ip = 1030; continue _fun0005 }
 1024:
            if(var3) { _fun0005_ip = 1155; continue _fun0005 }
 1030:
            if(var15) { _fun0005_ip = 1120; continue _fun0005 }
 1033:
            if(!(var9 == var2)) { _fun0005_ip = 1120; continue _fun0005 }
 1037:
            var15 = var8.id;
            var9 = _closure1_slot4;
            if(!(var15 !== var9)) { _fun0005_ip = 1085; continue _fun0005 }
 1050:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var9 = 5;
            var9 = var16[var9];
            var9 = var15.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.g+InPD;
            _fun0005_ip = 1118; continue _fun0005;
 1085:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var15 = 5;
            var15 = var17[var15];
            var15 = var16.bind(var6)(var15);
            var15 = var15.t;
            var9 = var15.Rsd5bG;
 1118:
            _fun0005_ip = 1153; continue _fun0005;
 1120:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var15 = 5;
            var15 = var17[var15];
            var15 = var16.bind(var6)(var15);
            var15 = var15.t;
            var9 = var15.W/HkLC;
 1153:
            _fun0005_ip = 1204; continue _fun0005;
 1155:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var15 = 5;
            var15 = var17[var15];
            var15 = var16.bind(var6)(var15);
            var15 = var15.t;
            if(var4) { _fun0005_ip = 1193; continue _fun0005 }
 1183:
            var4 = var15.vs/xBg;
            _fun0005_ip = 1201; continue _fun0005;
 1193:
            var4 = var15.xqX+var7;
 1201:
            var9 = var4;
 1204:
            var4 = {};
            var4['videoTitle'] = var13;
            var4['rewardNameWithArticle'] = var12;
            var4['duration'] = var2;
            var1 = var10.bind(var6)(var9, var4, var5);
 1227:
            _fun0005_ip = 1343; continue _fun0005;
 1229:
            var10 = {};
            var10['quest'] = var8;
            var10['taskDetails'] = var7;
            var10['withoutMarkdown'] = var5;
            var4 = var10.quest;
            var9 = var10.taskDetails;
            var12 = var10.withoutMarkdown;
            var13 = var9.targetMinutes;
            var4 = var4.config;
            var4 = var4.messages;
            var15 = var4.gameTitle;
            var10 = _closure1_slot12;
            var9 = _closure1_slot0;
            var16 = _closure1_slot1;
            var4 = 5;
            var4 = var16[var4];
            var4 = var9.bind(var6)(var4);
            var4 = var4.t;
            var9 = var4.a/ia7O;
            var4 = {};
            var4['gameTitle'] = var15;
            var4['streamingDurationRequirement'] = var13;
            var1 = var10.bind(var6)(var9, var4, var12);
 1343:
            _fun0005_ip = 1691; continue _fun0005;
 1348:
            var10 = {};
            var10['quest'] = var8;
            var10['taskDetails'] = var7;
            var10['withoutMarkdown'] = var5;
            var10['hasNitro'] = var3;
            var10['collectibleRewardDuration'] = var2;
            var4 = var10.quest;
            var9 = var10.taskDetails;
            var12 = var10.withoutMarkdown;
            var18 = var10.hasNitro;
            var15 = var10.collectibleRewardDuration;
            var19 = _closure1_slot0;
            var10 = _closure1_slot1;
            var13 = 6;
            var13 = var10[var13];
            var13 = var19.bind(var6)(var13);
            var17 = var13.SharedQuestFields;
            var16 = var17.build;
            var13 = var4.config;
            var13 = var16.bind(var17)(var13);
            var13 = var13.defaultRewardNameWithArticle;
            var16 = var9.targetMinutes;
            var9 = var4.config;
            var9 = var9.messages;
            var17 = var9.gameTitle;
            var9 = var10[var14];
            var21 = var19.bind(var6)(var9);
            var20 = var21.isCollectibleQuestRewardPremiumExtendable;
            var9 = var4.config;
            var9 = var20.bind(var21)(var9);
            var10 = var10[var14];
            var19 = var19.bind(var6)(var10);
            var10 = var19.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var4 = var4.config;
            var4 = var10.bind(var19)(var4);
            var10 = _closure1_slot12;
            if(!var18) { _fun0005_ip = 1536; continue _fun0005 }
 1533:
            if(var9) { _fun0005_ip = 1613; continue _fun0005 }
 1536:
            if(var9) { _fun0005_ip = 1580; continue _fun0005 }
 1539:
            var9 = null;
            if(!(var9 == var15)) { _fun0005_ip = 1580; continue _fun0005 }
 1545:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var9 = 5;
            var9 = var19[var9];
            var9 = var18.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.FZL5Q0;
            _fun0005_ip = 1611; continue _fun0005;
 1580:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 5;
            var18 = var20[var18];
            var18 = var19.bind(var6)(var18);
            var18 = var18.t;
            var9 = var18.AwuMRU;
 1611:
            _fun0005_ip = 1658; continue _fun0005;
 1613:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 5;
            var18 = var20[var18];
            var18 = var19.bind(var6)(var18);
            var18 = var18.t;
            if(var4) { _fun0005_ip = 1649; continue _fun0005 }
 1641:
            var4 = var18.ziB0HB;
            _fun0005_ip = 1655; continue _fun0005;
 1649:
            var4 = var18.eb/SnZ;
 1655:
            var9 = var4;
 1658:
            var4 = {};
            var4['gameTitle'] = var17;
            var4['streamingDurationRequirement'] = var16;
            var4['rewardNameWithArticle'] = var13;
            var4['duration'] = var15;
            var4['questReward'] = var13;
            var1 = var10.bind(var6)(var9, var4, var12);
 1691:
            _fun0005_ip = 2037; continue _fun0005;
 1696:
            var10 = {};
            var10['quest'] = var8;
            var10['taskDetails'] = var7;
            var10['withoutMarkdown'] = var5;
            var10['hasNitro'] = var3;
            var10['collectibleRewardDuration'] = var2;
            var4 = var10.quest;
            var9 = var10.taskDetails;
            var12 = var10.withoutMarkdown;
            var18 = var10.hasNitro;
            var15 = var10.collectibleRewardDuration;
            var19 = _closure1_slot0;
            var10 = _closure1_slot1;
            var13 = 6;
            var13 = var10[var13];
            var13 = var19.bind(var6)(var13);
            var17 = var13.SharedQuestFields;
            var16 = var17.build;
            var13 = var4.config;
            var13 = var16.bind(var17)(var13);
            var16 = var13.defaultRewardNameWithArticle;
            var13 = var9.targetMinutes;
            var9 = var4.config;
            var9 = var9.messages;
            var17 = var9.gameTitle;
            var9 = var10[var14];
            var21 = var19.bind(var6)(var9);
            var20 = var21.isCollectibleQuestRewardPremiumExtendable;
            var9 = var4.config;
            var9 = var20.bind(var21)(var9);
            var10 = var10[var14];
            var19 = var19.bind(var6)(var10);
            var10 = var19.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var4 = var4.config;
            var4 = var10.bind(var19)(var4);
            var10 = _closure1_slot12;
            if(!var18) { _fun0005_ip = 1884; continue _fun0005 }
 1881:
            if(var9) { _fun0005_ip = 1959; continue _fun0005 }
 1884:
            if(var9) { _fun0005_ip = 1926; continue _fun0005 }
 1887:
            var9 = null;
            if(!(var9 == var15)) { _fun0005_ip = 1926; continue _fun0005 }
 1893:
            var18 = _closure1_slot0;
            var19 = _closure1_slot1;
            var9 = 5;
            var9 = var19[var9];
            var9 = var18.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.NIimTk;
            _fun0005_ip = 1957; continue _fun0005;
 1926:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 5;
            var18 = var20[var18];
            var18 = var19.bind(var6)(var18);
            var18 = var18.t;
            var9 = var18.AwuMRU;
 1957:
            _fun0005_ip = 2004; continue _fun0005;
 1959:
            var19 = _closure1_slot0;
            var20 = _closure1_slot1;
            var18 = 5;
            var18 = var20[var18];
            var18 = var19.bind(var6)(var18);
            var18 = var18.t;
            if(var4) { _fun0005_ip = 1995; continue _fun0005 }
 1987:
            var4 = var18.ziB0HB;
            _fun0005_ip = 2001; continue _fun0005;
 1995:
            var4 = var18.eb/SnZ;
 2001:
            var9 = var4;
 2004:
            var4 = {};
            var4['gameTitle'] = var17;
            var4['targetMinutes'] = var13;
            var4['rewardNameWithArticle'] = var16;
            var4['duration'] = var15;
            var4['streamingDurationRequirement'] = var13;
            var1 = var10.bind(var6)(var9, var4, var12);
 2037:
            _fun0005_ip = 2383; continue _fun0005;
 2042:
            var4 = {};
            var4['quest'] = var8;
            var4['taskDetails'] = var7;
            var4['withoutMarkdown'] = var5;
            var4['hasNitro'] = var3;
            var4['collectibleRewardDuration'] = var2;
            var2 = var4.quest;
            var3 = var4.taskDetails;
            var5 = var4.withoutMarkdown;
            var12 = var4.hasNitro;
            var8 = var4.collectibleRewardDuration;
            var13 = _closure1_slot0;
            var4 = _closure1_slot1;
            var7 = 6;
            var7 = var4[var7];
            var7 = var13.bind(var6)(var7);
            var10 = var7.SharedQuestFields;
            var9 = var10.build;
            var7 = var2.config;
            var7 = var9.bind(var10)(var7);
            var9 = var7.defaultRewardNameWithArticle;
            var7 = var3.targetMinutes;
            var3 = var2.config;
            var3 = var3.messages;
            var10 = var3.gameTitle;
            var3 = var4[var14];
            var16 = var13.bind(var6)(var3);
            var15 = var16.isCollectibleQuestRewardPremiumExtendable;
            var3 = var2.config;
            var3 = var15.bind(var16)(var3);
            var4 = var4[var14];
            var13 = var13.bind(var6)(var4);
            var4 = var13.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var2 = var2.config;
            var2 = var4.bind(var13)(var2);
            var4 = _closure1_slot12;
            if(!var12) { _fun0005_ip = 2230; continue _fun0005 }
 2227:
            if(var3) { _fun0005_ip = 2305; continue _fun0005 }
 2230:
            if(var3) { _fun0005_ip = 2272; continue _fun0005 }
 2233:
            var3 = null;
            if(!(var3 == var8)) { _fun0005_ip = 2272; continue _fun0005 }
 2239:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var3 = 5;
            var3 = var13[var3];
            var3 = var12.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.NIimTk;
            _fun0005_ip = 2303; continue _fun0005;
 2272:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var12 = 5;
            var12 = var14[var12];
            var12 = var13.bind(var6)(var12);
            var12 = var12.t;
            var3 = var12.AwuMRU;
 2303:
            _fun0005_ip = 2350; continue _fun0005;
 2305:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var11 = 5;
            var11 = var13[var11];
            var11 = var12.bind(var6)(var11);
            var11 = var11.t;
            if(var2) { _fun0005_ip = 2341; continue _fun0005 }
 2333:
            var2 = var11.ziB0HB;
            _fun0005_ip = 2347; continue _fun0005;
 2341:
            var2 = var11.eb/SnZ;
 2347:
            var3 = var2;
 2350:
            var2 = {};
            var2['gameTitle'] = var10;
            var2['streamingDurationRequirement'] = var7;
            var2['rewardNameWithArticle'] = var9;
            var2['duration'] = var8;
            var2['targetMinutes'] = var7;
            var1 = var4.bind(var6)(var3, var2, var5);
 2383:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var4 = function getQuestsInstructionsToWinReward(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot13;
            var3 = {};
            var9 = var3;
            var8 = var1;
            var4 = copyDataProperties(var9, var8);
            var6 = var1.currentUser;
            var4 = null;
            if(!(var4 == var6)) { _fun0006_ip = 47; continue _fun0006 }
 34:
            var7 = _closure1_slot3;
            var4 = var7.getCurrentUser;
            var6 = var4.bind(var7)();
 47:
            var4 = 'currentUser';
            var3[var4] = var6;
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var5 = var1.withoutMarkdown;
            var1 = var3;
            if(!var5) { _fun0006_ip = 84; continue _fun0006 }
 75:
            var2 = _closure1_slot8;
            var1 = var2.bind(var4)(var3);
 84:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var1 = function useSimplifiedQuestTaskType(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = _closure2_slot0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 7;
                var1 = var1[var6];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.isConsoleQuest;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0007_ip = 227; continue _fun0007 }
 49:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.hasPlayActivityTask;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0007_ip = 227; continue _fun0007 }
 83:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var7 = var3.bind(var5)(var1);
                var3 = var7.hasStreamOnDesktopTask;
                var1 = {};
                var1['quest'] = var4;
                var1 = var3.bind(var7)(var1);
                if(var1) { _fun0007_ip = 215; continue _fun0007 }
 121:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.hasWatchVideoTasks;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0007_ip = 203; continue _fun0007 }
 152:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.isInGameQuest;
                var1 = var1.bind(var3)(var4);
                var3 = _closure1_slot9;
                if(var1) { _fun0007_ip = 195; continue _fun0007 }
 187:
                var1 = var3.PLAY;
                _fun0007_ip = 201; continue _fun0007;
 195:
                var1 = var3.IN_GAME;
 201:
                _fun0007_ip = 213; continue _fun0007;
 203:
                var3 = _closure1_slot9;
                var1 = var3.WATCH_VIDEO;
 213:
                _fun0007_ip = 225; continue _fun0007;
 215:
                var3 = _closure1_slot9;
                var1 = var3.STREAM;
 225:
                _fun0007_ip = 237; continue _fun0007;
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
    var _closure1_slot15 = var1;
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
    var5 = native4;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var11 = 1;
    var8 = var7[var11];
    var5 = native3;
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
    var5 = 4;
    var5 = var7[var5];
    var13 = var6.bind(var1)(var5);
    var8 = var13.getQuestLogger;
    var5 = {};
    var5 = var8.bind(var13)(var5);
    var _closure1_slot7 = var5;
    var5 = function astNodeToString(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var5 = undefined;
            var2 = undefined;
            var6 = undefined;
            var7 = undefined;
 11: // try_start_0
            var2 = '';
            var3 = var1;
            var4 = 'string';
            var3 = typeof var3;
            if(!(var4 !== var3)) { _fun0008_ip = 157; continue _fun0008 }
 32:
            var3 = global;
            var8 = var3.Array;
            var4 = var8.isArray;
            var3 = var1;
            var3 = var4.bind(var8)(var3);
            if(var3) { _fun0008_ip = 78; continue _fun0008 }
 59:
            var8 = _closure1_slot8;
            var3 = var1;
            var3 = var3.content;
            var3 = var8.bind(var5)(var3);
 76: // try_end0
            return var3;
 78: // try_start_1
            var8 = _closure1_slot10;
            var3 = var1;
            var3 = var8.bind(var5)(var3);
            var7 = var3;
            var3 = var3.bind(var5)();
            var6 = var3;
            var3 = var3.done;
            if(var3) { _fun0008_ip = 155; continue _fun0008 }
 108:
            var3 = var6;
            var3 = var3.value;
            var8 = var2;
            var9 = _closure1_slot8;
            var3 = var3.content;
            var3 = var9.bind(var5)(var3);
            var2 = var8 + var3;
            var3 = var7;
            var3 = var3.bind(var5)();
            var6 = var3;
            var3 = var3.done;
            if(!var3) { _fun0008_ip = 108; continue _fun0008 }
 155: // try_end1
            return var2;
 157:
            return var1;
 159: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=3);
            var3 = _closure1_slot7;
            var2 = var3.error;
            var1 = 'Failed to convert ASTNode to string';
            var1 = var2.bind(var3)(var1, var4);
            var1 = '';
            return var1;
        }
    };
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
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/hooks/QuestCopyHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getQuestsInstructionsToWinReward'] = var4;
    var4 = function useQuestsInstructionsToWinReward(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
            var2 = _closure1_slot14;
            var1 = {};
            var15 = var1;
            var14 = var5;
            var5 = copyDataProperties(var15, var14);
            var5 = 'connectedConsoleLinkOnClick';
            var1[var5] = var7;
            var7 = false;
            var5 = 'withoutMarkdown';
            var1[var5] = var7;
            var5 = 'currentUser';
            var1[var5] = var6;
            var5 = null;
            var6 = var5 != var4;
            var5 = undefined;
            if(!var6) { _fun0009_ip = 199; continue _fun0009 }
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
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var2 = var1.quest;
            var3 = _closure1_slot15;
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = _closure1_slot9;
            var3 = var3.PLAY;
            if(!(var3 !== var4)) { _fun0010_ip = 255; continue _fun0010 }
 40:
            var3 = _closure1_slot9;
            var3 = var3.STREAM;
            if(!(var3 !== var4)) { _fun0010_ip = 255; continue _fun0010 }
 57:
            var3 = _closure1_slot9;
            var3 = var3.WATCH_VIDEO;
            if(!(var3 !== var4)) { _fun0010_ip = 196; continue _fun0010 }
 74:
            var3 = _closure1_slot9;
            var3 = var3.IN_GAME;
            if(!(var3 !== var4)) { _fun0010_ip = 90; continue _fun0010 }
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
            var3 = 5;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            if(var2) { _fun0010_ip = 181; continue _fun0010 }
 168:
            var2 = var3.l7E81t;
            var2 = var4.bind(var6)(var2);
            _fun0010_ip = 194; continue _fun0010;
 181:
            var3 = var3.ToGcxM;
            var2 = var4.bind(var6)(var3);
 194:
            return var2;
 196:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
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
            var1 = 5;
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
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
            var6 = _closure1_slot2;
            var5 = var6.useMemo;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
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
            if(!var4) { _fun0011_ip = 157; continue _fun0011 }
 77:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 5;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            if(var2) { _fun0011_ip = 141; continue _fun0011 }
 126:
            var2 = var3.GYGb3N;
            var2 = var4.bind(var5)(var2);
            _fun0011_ip = 154; continue _fun0011;
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