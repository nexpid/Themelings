// app/modules/quests/types/SharedQuestFields.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var2 = function() {
        var5 = function SharedQuestFields(arg1) {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['quest'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var1 = {};
        var3 = 'features';
        var1['key'] = var3;
        var3 = function get() {
            var1 = global;
            var3 = var1.Set;
            var1 = this;
            var1 = var1.quest;
            var4 = var1.features;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['get'] = var3;
        var3 = new Array(12);
        var3[0] = var1;
        var1 = {};
        var6 = '_defaultRewardV2';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = arg1;
            var1 = var1.rewardsConfig;
            var2 = var1.rewards;
            var1 = 0;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'defaultReward';
        var1['key'] = var6;
        var6 = function get() {
            var3 = this;
            var2 = var3._defaultRewardV2;
            var1 = var3.quest;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['get'] = var6;
        var3[2] = var1;
        var1 = {};
        var6 = 'defaultRewardNameWithArticle';
        var1['key'] = var6;
        var6 = function get() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = this;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var5 = undefined;
                var6 = var4.bind(var5)(var1);
                var4 = var6.hasFractionalPremiumQuestReward;
                var1 = var2.quest;
                var1 = var4.bind(var6)(var1);
                if(var1) { _fun0001_ip = 68; continue _fun0001 }
 48:
                var1 = var2.defaultReward;
                var1 = var1.messages;
                var1 = var1.nameWithArticle;
                _fun0001_ip = 105; continue _fun0001;
 68:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 3;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getFractionalPremiumQuestRewardName;
                var2 = var2.quest;
                var1 = var3.bind(var4)(var2);
 105:
                return var1;
            }
        };
        var1['get'] = var6;
        var3[3] = var1;
        var1 = {};
        var6 = 'defaultRewardName';
        var1['key'] = var6;
        var6 = function get() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = this;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var5 = undefined;
                var6 = var4.bind(var5)(var1);
                var4 = var6.hasFractionalPremiumQuestReward;
                var1 = var2.quest;
                var1 = var4.bind(var6)(var1);
                if(var1) { _fun0002_ip = 67; continue _fun0002 }
 48:
                var1 = var2.defaultReward;
                var1 = var1.messages;
                var1 = var1.name;
                _fun0002_ip = 104; continue _fun0002;
 67:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 3;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getFractionalPremiumQuestRewardName;
                var2 = var2.quest;
                var1 = var3.bind(var4)(var2);
 104:
                return var1;
            }
        };
        var1['get'] = var6;
        var3[4] = var1;
        var1 = {};
        var6 = 'defaultRewardRedemptionInstructionsByPlatform';
        var1['key'] = var6;
        var6 = function get() {
            var3 = this;
            var2 = var3._defaultRewardV2;
            var1 = var3.quest;
            var1 = var2.bind(var3)(var1);
            var1 = var1.messages;
            var1 = var1.redemptionInstructionsByPlatform;
            return var1;
        };
        var1['get'] = var6;
        var3[5] = var1;
        var1 = {};
        var6 = 'rewardsExpireAt';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1.quest;
            var1 = var1.rewardsConfig;
            var1 = var1.rewardsExpireAt;
            return var1;
        };
        var1['get'] = var6;
        var3[6] = var1;
        var1 = {};
        var6 = 'application';
        var1['key'] = var6;
        var6 = function get() {
            var2 = this;
            var1 = {};
            var3 = var2.quest;
            var4 = var3.application;
            var5 = var1;
            var3 = copyDataProperties(var5, var4);
            var2 = var2.quest;
            var2 = var2.application;
            var2 = var2.id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = 'ids';
            var1[var2] = var3;
            return var1;
        };
        var1['get'] = var6;
        var3[7] = var1;
        var1 = {};
        var6 = 'rewardPlatforms';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1.quest;
            var1 = var1.rewardsConfig;
            var1 = var1.platforms;
            return var1;
        };
        var1['get'] = var6;
        var3[8] = var1;
        var1 = {};
        var6 = 'questType';
        var1['key'] = var6;
        var6 = function get() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var4 = undefined;
                var5 = var3.bind(var4)(var1);
                var3 = var5.hasWatchVideoTasks;
                var1 = {};
                var6 = this;
                var6 = var6.quest;
                var1['config'] = var6;
                var1 = var3.bind(var5)(var1);
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 4;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.QuestType;
                if(var1) { _fun0003_ip = 88; continue _fun0003 }
 80:
                var1 = var2.GAMEPLAY;
                _fun0003_ip = 94; continue _fun0003;
 88:
                var1 = var2.VIDEO;
 94:
                return var1;
            }
        };
        var1['get'] = var6;
        var3[9] = var1;
        var1 = {};
        var6 = 'defaultInGameTask';
        var1['key'] = var6;
        var6 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = this;
                var1 = var1.quest;
                var1 = var1.taskConfigV2;
                var2 = var1.tasks;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var3 = var6[var1];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = var3.FirstPartyQuestTaskTypes;
                var3 = var3.ACHIEVEMENT_IN_ACTIVITY;
                var3 = var2[var3];
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.FirstPartyQuestTaskTypes;
                var1 = var1.ACHIEVEMENT_IN_GAME;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 96; continue _fun0004 }
 93:
                var2 = var3;
 96:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0004_ip = 108; continue _fun0004 }
 105:
                var1 = var2;
 108:
                return var1;
            }
        };
        var1['get'] = var6;
        var3[10] = var1;
        var1 = {};
        var6 = 'defaultWatchVideoTask';
        var1['key'] = var6;
        var6 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var1 = var2.quest;
                var1 = var1.taskConfigV2;
                var7 = var1.tasks;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var3 = var6[var1];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = var3.FirstPartyQuestTaskTypes;
                var3 = var3.WATCH_VIDEO;
                var3 = var7[var3];
                var2 = var2.quest;
                var2 = var2.taskConfigV2;
                var2 = var2.tasks;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.FirstPartyQuestTaskTypes;
                var1 = var1.WATCH_VIDEO_ON_MOBILE;
                var4 = var2[var1];
                var2 = null;
                if(!(var2 != var3)) { _fun0005_ip = 118; continue _fun0005 }
 111:
                var1 = var4;
                if(!(var2 == var1)) { _fun0005_ip = 140; continue _fun0005 }
 118:
                if(!(var2 != var4)) { _fun0005_ip = 125; continue _fun0005 }
 122:
                var3 = var4;
 125:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0005_ip = 137; continue _fun0005 }
 134:
                var2 = var3;
 137:
                var1 = var2;
 140:
                return var1;
            }
        };
        var1['get'] = var6;
        var3[11] = var1;
        var1 = {};
        var6 = 'build';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var2 = var3.configVersion;
                var1 = 2;
                if(!(var1 === var2)) { _fun0006_ip = 48; continue _fun0006 }
 16:
                var1 = _closure2_slot0;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var4 = var3;
                var1 = new var5[var1](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
 48:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = 'Cannot build SharedQuestFields when [configVersion !== 2]';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/types/SharedQuestFields.tsx';
    var4 = var5.bind(var6)(var4);
    var3['SharedQuestFields'] = var2;
    return var1;
})();