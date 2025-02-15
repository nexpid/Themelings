// app/modules/quests/types/SharedQuestFields.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        report = function(argFoo) { // Original name: SharedQuestFields
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argFoo;
            zulu['quest'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        entity = {};
        zulu = 'features';
        entity['key'] = zulu;
        zulu = function() { // Original name: get
            entity = global;
            zulu = entity.Set;
            entity = this;
            entity = entity.quest;
            tango = entity.features;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['get'] = zulu;
        zulu = new Array(9);
        zulu[0] = entity;
        entity = {};
        oscar = '_defaultRewardV2';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = argFoo;
            entity = entity.rewardsConfig;
            mike = entity.rewards;
            entity = 0;
            entity = mike[entity];
            return entity;
        };
        entity['value'] = oscar;
        zulu[1] = entity;
        entity = {};
        oscar = 'defaultReward';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            zulu = this;
            mike = zulu._defaultRewardV2;
            entity = zulu.quest;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['get'] = oscar;
        zulu[2] = entity;
        entity = {};
        oscar = 'defaultRewardAsset';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            zulu = this;
            mike = zulu._defaultRewardV2;
            entity = zulu.quest;
            entity = mike.bind(zulu)(entity);
            entity = entity.asset;
            return entity;
        };
        entity['get'] = oscar;
        zulu[3] = entity;
        entity = {};
        oscar = 'defaultRewardRedemptionInstructionsByPlatform';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            zulu = this;
            mike = zulu._defaultRewardV2;
            entity = zulu.quest;
            entity = mike.bind(zulu)(entity);
            entity = entity.messages;
            entity = entity.redemptionInstructionsByPlatform;
            return entity;
        };
        entity['get'] = oscar;
        zulu[4] = entity;
        entity = {};
        oscar = 'rewardsExpireAt';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity.quest;
            entity = entity.rewardsConfig;
            entity = entity.rewardsExpireAt;
            return entity;
        };
        entity['get'] = oscar;
        zulu[5] = entity;
        entity = {};
        oscar = 'application';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            mike = this;
            entity = {};
            zulu = mike.quest;
            tango = zulu.application;
            report = entity;
            zulu = copyDataProperties(report, tango);
            mike = mike.quest;
            mike = mike.application;
            mike = mike.id;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = 'ids';
            entity[mike] = zulu;
            return entity;
        };
        entity['get'] = oscar;
        zulu[6] = entity;
        entity = {};
        oscar = 'rewardPlatforms';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity.quest;
            entity = entity.rewardsConfig;
            entity = entity.platforms;
            return entity;
        };
        entity['get'] = oscar;
        zulu[7] = entity;
        entity = {};
        oscar = 'questType';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            _fun67264: for(var _fun67264_ip = 0; ; ) switch(_fun67264_ip) {
 0:
                zulu = _closure1_slot0;
                tango = _closure1_slot1;
                entity = 2;
                entity = tango[entity];
                tango = undefined;
                report = zulu.bind(tango)(entity);
                zulu = report.hasWatchVideoTasks;
                entity = {};
                oscar = this;
                oscar = oscar.quest;
                entity['config'] = oscar;
                entity = zulu.bind(report)(entity);
                zulu = _closure1_slot0;
                report = _closure1_slot1;
                mike = 3;
                mike = report[mike];
                mike = zulu.bind(tango)(mike);
                mike = mike.QuestType;
                if(entity) { _fun67264_ip = 88; continue _fun67264 }
 80:
                entity = mike.GAMEPLAY;
                _fun67264_ip = 94; continue _fun67264;
 88:
                entity = mike.VIDEO;
 94:
                return entity;
            }
        };
        entity['get'] = oscar;
        zulu[8] = entity;
        entity = {};
        oscar = 'build';
        entity['key'] = oscar;
        mike = function(argFoo) { // Original name: value
            _fun67265: for(var _fun67265_ip = 0; ; ) switch(_fun67265_ip) {
 0:
                zulu = argFoo;
                mike = zulu.configVersion;
                entity = 2;
                if(!(entity === mike)) { _fun67265_ip = 48; continue _fun67265 }
 16:
                entity = _closure2_slot0;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                report = mike;
                tango = zulu;
                entity = new report[entity](tango, zulu);
                entity = entity instanceof Object ? entity : mike;
                return entity;
 48:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                tango = 'Cannot build SharedQuestFields when [configVersion !== 2]';
                report = mike;
                entity = new report[zulu](tango, zulu);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(report, zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/types/SharedQuestFields.tsx';
    tango = report.bind(oscar)(tango);
    zulu['SharedQuestFields'] = mike;
    return entity;
})();