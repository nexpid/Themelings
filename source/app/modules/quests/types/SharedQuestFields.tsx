// app/modules/quests/types/SharedQuestFields.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        report = function(argFoo) { // Original name: SharedQuestFields
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = argFoo;
            zuuluu['quest'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        entity = {};
        zuuluu = 'features';
        entity['key'] = zuuluu;
        zuuluu = function() { // Original name: get
            entity = global;
            zuuluu = entity.Set;
            entity = this;
            entity = entity.quest;
            tangon = entity.features;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['get'] = zuuluu;
        zuuluu = new Array(10);
        zuuluu[0] = entity;
        entity = {};
        oscard = '_defaultRewardV2';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = argFoo;
            entity = entity.rewardsConfig;
            michal = entity.rewards;
            entity = 0;
            entity = michal[entity];
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[1] = entity;
        entity = {};
        oscard = 'defaultReward';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            zuuluu = this;
            michal = zuuluu._defaultRewardV2;
            entity = zuuluu.quest;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['get'] = oscard;
        zuuluu[2] = entity;
        entity = {};
        oscard = 'defaultRewardRedemptionInstructionsByPlatform';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            zuuluu = this;
            michal = zuuluu._defaultRewardV2;
            entity = zuuluu.quest;
            entity = michal.bind(zuuluu)(entity);
            entity = entity.messages;
            entity = entity.redemptionInstructionsByPlatform;
            return entity;
        };
        entity['get'] = oscard;
        zuuluu[3] = entity;
        entity = {};
        oscard = 'rewardsExpireAt';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity.quest;
            entity = entity.rewardsConfig;
            entity = entity.rewardsExpireAt;
            return entity;
        };
        entity['get'] = oscard;
        zuuluu[4] = entity;
        entity = {};
        oscard = 'application';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            michal = this;
            entity = {};
            zuuluu = michal.quest;
            tangon = zuuluu.application;
            report = entity;
            zuuluu = copyDataProperties(report, tangon);
            michal = michal.quest;
            michal = michal.application;
            michal = michal.id;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = 'ids';
            entity[michal] = zuuluu;
            return entity;
        };
        entity['get'] = oscard;
        zuuluu[5] = entity;
        entity = {};
        oscard = 'rewardPlatforms';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity.quest;
            entity = entity.rewardsConfig;
            entity = entity.platforms;
            return entity;
        };
        entity['get'] = oscard;
        zuuluu[6] = entity;
        entity = {};
        oscard = 'questType';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot1;
                entity = 2;
                entity = tangon[entity];
                tangon = undefined;
                report = zuuluu.bind(tangon)(entity);
                zuuluu = report.hasWatchVideoTasks;
                entity = {};
                oscard = this;
                oscard = oscard.quest;
                entity['config'] = oscard;
                entity = zuuluu.bind(report)(entity);
                zuuluu = _closure1_slot0;
                report = _closure1_slot1;
                michal = 3;
                michal = report[michal];
                michal = zuuluu.bind(tangon)(michal);
                michal = michal.QuestType;
                if(entity) { _fun00002_ip = 88; continue _fun00001 }
 80:
                entity = michal.GAMEPLAY;
                _fun00002_ip = 94; continue _fun00001;
 88:
                entity = michal.VIDEO;
 94:
                return entity;
            }
        };
        entity['get'] = oscard;
        zuuluu[7] = entity;
        entity = {};
        oscard = 'defaultInGameTask';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = this;
                entity = entity.quest;
                entity = entity.taskConfigV2;
                michal = entity.tasks;
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                entity = 4;
                zuuluu = oscard[entity];
                tangon = undefined;
                zuuluu = report.bind(tangon)(zuuluu);
                zuuluu = zuuluu.FirstPartyQuestTaskTypes;
                zuuluu = zuuluu.ACHIEVEMENT_IN_ACTIVITY;
                zuuluu = michal[zuuluu];
                entity = oscard[entity];
                entity = report.bind(tangon)(entity);
                entity = entity.FirstPartyQuestTaskTypes;
                entity = entity.ACHIEVEMENT_IN_GAME;
                michal = michal[entity];
                entity = null;
                if(!(entity != zuuluu)) { _fun00004_ip = 96; continue _fun00003 }
 93:
                michal = zuuluu;
 96:
                zuuluu = entity != michal;
                entity = null;
                if(!zuuluu) { _fun00004_ip = 108; continue _fun00003 }
 105:
                entity = michal;
 108:
                return entity;
            }
        };
        entity['get'] = oscard;
        zuuluu[8] = entity;
        entity = {};
        oscard = 'defaultWatchVideoTask';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                entity = michal.quest;
                entity = entity.taskConfigV2;
                golfie = entity.tasks;
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                entity = 4;
                zuuluu = oscard[entity];
                tangon = undefined;
                zuuluu = report.bind(tangon)(zuuluu);
                zuuluu = zuuluu.FirstPartyQuestTaskTypes;
                zuuluu = zuuluu.WATCH_VIDEO;
                zuuluu = golfie[zuuluu];
                michal = michal.quest;
                michal = michal.taskConfigV2;
                michal = michal.tasks;
                entity = oscard[entity];
                entity = report.bind(tangon)(entity);
                entity = entity.FirstPartyQuestTaskTypes;
                entity = entity.WATCH_VIDEO_ON_MOBILE;
                tangon = michal[entity];
                michal = null;
                if(!(michal != zuuluu)) { _fun00006_ip = 118; continue _fun00005 }
 111:
                entity = tangon;
                if(!(michal == entity)) { _fun00006_ip = 140; continue _fun00005 }
 118:
                if(!(michal != tangon)) { _fun00006_ip = 125; continue _fun00005 }
 122:
                zuuluu = tangon;
 125:
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00006_ip = 137; continue _fun00005 }
 134:
                michal = zuuluu;
 137:
                entity = michal;
 140:
                return entity;
            }
        };
        entity['get'] = oscard;
        zuuluu[9] = entity;
        entity = {};
        oscard = 'build';
        entity['key'] = oscard;
        michal = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                michal = zuuluu.configVersion;
                entity = 2;
                if(!(entity === michal)) { _fun00008_ip = 48; continue _fun00007 }
 16:
                entity = _closure2_slot0;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                report = michal;
                tangon = zuuluu;
                entity = new report[entity](tangon, zuuluu);
                entity = entity instanceof Object ? entity : michal;
                return entity;
 48:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                tangon = 'Cannot build SharedQuestFields when [configVersion !== 2]';
                report = michal;
                entity = new report[zuuluu](tangon, zuuluu);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(report, zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/types/SharedQuestFields.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['SharedQuestFields'] = michal;
    return entity;
})();