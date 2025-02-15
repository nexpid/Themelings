// app/modules/quests/types/v2/Reward.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = function(argFoo) { // Original name: _rewardRedemptionInstructionsFromServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            entity = {};
            options = global;
            zulu = options.Object;
            mike = zulu.keys;
            golf = mike.bind(zulu)(verify);
            mike = golf.length;
            oscar = 0;
            mike = oscar < mike;
            report = undefined;
            zulu = 0;
            if(!mike) { _fun00002_ip = 115; continue _fun00001 }
 44:
            mike = golf[zulu];
            offset = options.parseInt;
            offset = offset.bind(report)(mike);
            romeo = _closure1_slot0;
            yankee = _closure1_slot1;
            yankee = yankee[oscar];
            yankee = romeo.bind(report)(yankee);
            romeo = yankee.QUEST_REWARD_CODE_PLATFORMS_SET;
            yankee = romeo.has;
            yankee = yankee.bind(romeo)(offset);
            if(!yankee) { _fun00002_ip = 103; continue _fun00001 }
 95:
            mike = verify[mike];
            entity[offset] = mike;
 103:
            zulu = zulu + 1;
            mike = golf.length;
            if(zulu < mike) { _fun00002_ip = 44; continue _fun00001 }
 115:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = function(argFoo) { // Original name: _questRewardV2FromServer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            mike = {};
            entity = zulu.sku_id;
            mike['skuId'] = entity;
            entity = zulu.asset;
            mike['asset'] = entity;
            entity = zulu.asset_video;
            mike['assetVideo'] = entity;
            tango = zulu.type;
            oscar = _closure1_slot0;
            entity = _closure1_slot1;
            options = 1;
            entity = entity[options];
            golf = undefined;
            entity = oscar.bind(golf)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.REWARD_CODE;
            if(!(entity !== tango)) { _fun00004_ip = 739; continue _fun00003 }
 87:
            oscar = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[options];
            entity = oscar.bind(golf)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.COLLECTIBLE;
            if(!(entity !== tango)) { _fun00004_ip = 588; continue _fun00003 }
 123:
            oscar = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[options];
            entity = oscar.bind(golf)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.VIRTUAL_CURRENCY;
            if(!(entity !== tango)) { _fun00004_ip = 465; continue _fun00003 }
 159:
            oscar = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[options];
            entity = oscar.bind(golf)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.FRACTIONAL_PREMIUM;
            if(!(entity !== tango)) { _fun00004_ip = 342; continue _fun00003 }
 195:
            oscar = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[options];
            entity = oscar.bind(golf)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.IN_GAME;
            if(!(entity !== tango)) { _fun00004_ip = 230; continue _fun00003 }
 228:
            return golf;
 230:
            entity = {};
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[options];
            tango = oscar.bind(golf)(tango);
            tango = tango.QuestRewardTypes;
            tango = tango.IN_GAME;
            entity['type'] = tango;
            tango = {};
            verify = _closure1_slot3;
            oscar = zulu.messages;
            oscar = oscar.redemption_instructions_by_platform;
            oscar = verify.bind(golf)(oscar);
            tango['redemptionInstructionsByPlatform'] = oscar;
            oscar = zulu.messages;
            oscar = oscar.name;
            tango['name'] = oscar;
            oscar = zulu.messages;
            oscar = oscar.name_with_article;
            tango['nameWithArticle'] = oscar;
            entity['messages'] = tango;
            yankee = entity;
            offset = mike;
            tango = copyDataProperties(yankee, offset);
            return entity;
 342:
            entity = {};
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[options];
            tango = oscar.bind(golf)(tango);
            tango = tango.QuestRewardTypes;
            tango = tango.FRACTIONAL_PREMIUM;
            entity['type'] = tango;
            tango = zulu.quantity;
            entity['quantity'] = tango;
            tango = {};
            verify = _closure1_slot3;
            oscar = zulu.messages;
            oscar = oscar.redemption_instructions_by_platform;
            oscar = verify.bind(golf)(oscar);
            tango['redemptionInstructionsByPlatform'] = oscar;
            oscar = zulu.messages;
            oscar = oscar.name;
            tango['name'] = oscar;
            oscar = zulu.messages;
            oscar = oscar.name_with_article;
            tango['nameWithArticle'] = oscar;
            entity['messages'] = tango;
            yankee = entity;
            offset = mike;
            tango = copyDataProperties(yankee, offset);
            return entity;
 465:
            entity = {};
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[options];
            tango = oscar.bind(golf)(tango);
            tango = tango.QuestRewardTypes;
            tango = tango.VIRTUAL_CURRENCY;
            entity['type'] = tango;
            tango = {};
            verify = _closure1_slot3;
            oscar = zulu.messages;
            oscar = oscar.redemption_instructions_by_platform;
            oscar = verify.bind(golf)(oscar);
            tango['redemptionInstructionsByPlatform'] = oscar;
            oscar = zulu.messages;
            oscar = oscar.name;
            tango['name'] = oscar;
            oscar = zulu.messages;
            oscar = oscar.name_with_article;
            tango['nameWithArticle'] = oscar;
            entity['messages'] = tango;
            tango = zulu.orb_quantity;
            entity['orbQuantity'] = tango;
            yankee = entity;
            offset = mike;
            tango = copyDataProperties(yankee, offset);
            return entity;
 588:
            entity = {};
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[options];
            tango = oscar.bind(golf)(tango);
            tango = tango.QuestRewardTypes;
            tango = tango.COLLECTIBLE;
            entity['type'] = tango;
            tango = {};
            verify = _closure1_slot3;
            oscar = zulu.messages;
            oscar = oscar.redemption_instructions_by_platform;
            oscar = verify.bind(golf)(oscar);
            tango['redemptionInstructionsByPlatform'] = oscar;
            oscar = zulu.messages;
            oscar = oscar.name;
            tango['name'] = oscar;
            oscar = zulu.messages;
            oscar = oscar.name_with_article;
            tango['nameWithArticle'] = oscar;
            entity['messages'] = tango;
            tango = zulu.expires_at;
            entity['expiresAt'] = tango;
            tango = zulu.expiration_mode;
            entity['expirationMode'] = tango;
            tango = zulu.expires_at_premium;
            entity['expiresAtPremium'] = tango;
            yankee = entity;
            offset = mike;
            tango = copyDataProperties(yankee, offset);
            return entity;
 739:
            entity = {};
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[options];
            tango = oscar.bind(golf)(tango);
            tango = tango.QuestRewardTypes;
            tango = tango.REWARD_CODE;
            entity['type'] = tango;
            tango = {};
            oscar = _closure1_slot3;
            report = zulu.messages;
            report = report.redemption_instructions_by_platform;
            report = oscar.bind(golf)(report);
            tango['redemptionInstructionsByPlatform'] = report;
            report = zulu.messages;
            report = report.name;
            tango['name'] = report;
            report = zulu.messages;
            report = report.name_with_article;
            tango['nameWithArticle'] = report;
            entity['messages'] = tango;
            tango = zulu.approximate_count;
            entity['approximateCount'] = tango;
            zulu = zulu.redemption_link;
            entity['redemptionLink'] = zulu;
            yankee = entity;
            offset = mike;
            mike = copyDataProperties(yankee, offset);
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = 2;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/types/v2/Reward.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        mike = argFoo;
        entity = {};
        zulu = mike.assignment_method;
        entity['assignmentMethod'] = zulu;
        report = mike.rewards;
        tango = report.map;
        zulu = _closure1_slot2;
        zulu = tango.bind(report)(zulu);
        entity['rewards'] = zulu;
        zulu = mike.rewards_expire_at;
        entity['rewardsExpireAt'] = zulu;
        mike = mike.platforms;
        entity['platforms'] = mike;
        return entity;
    };
    zulu['questRewardsConfigV2FromServer'] = mike;
    return entity;
})();