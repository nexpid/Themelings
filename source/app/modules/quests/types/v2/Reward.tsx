// app/modules/quests/types/v2/Reward.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = function(argFoo) { // Original name: _rewardRedemptionInstructionsFromServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            entity = {};
            option = global;
            zuuluu = option.Object;
            michal = zuuluu.keys;
            golfie = michal.bind(zuuluu)(verify);
            michal = golfie.length;
            oscard = 0;
            michal = oscard < michal;
            report = undefined;
            zuuluu = 0;
            if(!michal) { _fun00002_ip = 115; continue _fun00001 }
 44:
            michal = golfie[zuuluu];
            offset = option.parseInt;
            offset = offset.bind(report)(michal);
            romeon = _closure1_slot0;
            yankee = _closure1_slot1;
            yankee = yankee[oscard];
            yankee = romeon.bind(report)(yankee);
            romeon = yankee.QUEST_REWARD_CODE_PLATFORMS_SET;
            yankee = romeon.has;
            yankee = yankee.bind(romeon)(offset);
            if(!yankee) { _fun00002_ip = 103; continue _fun00001 }
 95:
            michal = verify[michal];
            entity[offset] = michal;
 103:
            zuuluu = zuuluu + 1;
            michal = golfie.length;
            if(zuuluu < michal) { _fun00002_ip = 44; continue _fun00001 }
 115:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = function(argFoo) { // Original name: _questRewardV2FromServer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = {};
            entity = zuuluu.sku_id;
            michal['skuId'] = entity;
            entity = zuuluu.asset;
            michal['asset'] = entity;
            entity = zuuluu.asset_video;
            michal['assetVideo'] = entity;
            tangon = zuuluu.type;
            oscard = _closure1_slot0;
            entity = _closure1_slot1;
            option = 1;
            entity = entity[option];
            golfie = undefined;
            entity = oscard.bind(golfie)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.REWARD_CODE;
            if(!(entity !== tangon)) { _fun00004_ip = 739; continue _fun00003 }
 87:
            oscard = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[option];
            entity = oscard.bind(golfie)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.COLLECTIBLE;
            if(!(entity !== tangon)) { _fun00004_ip = 588; continue _fun00003 }
 123:
            oscard = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[option];
            entity = oscard.bind(golfie)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.VIRTUAL_CURRENCY;
            if(!(entity !== tangon)) { _fun00004_ip = 465; continue _fun00003 }
 159:
            oscard = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[option];
            entity = oscard.bind(golfie)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.FRACTIONAL_PREMIUM;
            if(!(entity !== tangon)) { _fun00004_ip = 342; continue _fun00003 }
 195:
            oscard = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[option];
            entity = oscard.bind(golfie)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.IN_GAME;
            if(!(entity !== tangon)) { _fun00004_ip = 230; continue _fun00003 }
 228:
            return golfie;
 230:
            entity = {};
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[option];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.QuestRewardTypes;
            tangon = tangon.IN_GAME;
            entity['type'] = tangon;
            tangon = {};
            verify = _closure1_slot3;
            oscard = zuuluu.messages;
            oscard = oscard.redemption_instructions_by_platform;
            oscard = verify.bind(golfie)(oscard);
            tangon['redemptionInstructionsByPlatform'] = oscard;
            oscard = zuuluu.messages;
            oscard = oscard.name;
            tangon['name'] = oscard;
            oscard = zuuluu.messages;
            oscard = oscard.name_with_article;
            tangon['nameWithArticle'] = oscard;
            entity['messages'] = tangon;
            yankee = entity;
            offset = michal;
            tangon = copyDataProperties(yankee, offset);
            return entity;
 342:
            entity = {};
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[option];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.QuestRewardTypes;
            tangon = tangon.FRACTIONAL_PREMIUM;
            entity['type'] = tangon;
            tangon = zuuluu.quantity;
            entity['quantity'] = tangon;
            tangon = {};
            verify = _closure1_slot3;
            oscard = zuuluu.messages;
            oscard = oscard.redemption_instructions_by_platform;
            oscard = verify.bind(golfie)(oscard);
            tangon['redemptionInstructionsByPlatform'] = oscard;
            oscard = zuuluu.messages;
            oscard = oscard.name;
            tangon['name'] = oscard;
            oscard = zuuluu.messages;
            oscard = oscard.name_with_article;
            tangon['nameWithArticle'] = oscard;
            entity['messages'] = tangon;
            yankee = entity;
            offset = michal;
            tangon = copyDataProperties(yankee, offset);
            return entity;
 465:
            entity = {};
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[option];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.QuestRewardTypes;
            tangon = tangon.VIRTUAL_CURRENCY;
            entity['type'] = tangon;
            tangon = {};
            verify = _closure1_slot3;
            oscard = zuuluu.messages;
            oscard = oscard.redemption_instructions_by_platform;
            oscard = verify.bind(golfie)(oscard);
            tangon['redemptionInstructionsByPlatform'] = oscard;
            oscard = zuuluu.messages;
            oscard = oscard.name;
            tangon['name'] = oscard;
            oscard = zuuluu.messages;
            oscard = oscard.name_with_article;
            tangon['nameWithArticle'] = oscard;
            entity['messages'] = tangon;
            tangon = zuuluu.orb_quantity;
            entity['orbQuantity'] = tangon;
            yankee = entity;
            offset = michal;
            tangon = copyDataProperties(yankee, offset);
            return entity;
 588:
            entity = {};
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[option];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.QuestRewardTypes;
            tangon = tangon.COLLECTIBLE;
            entity['type'] = tangon;
            tangon = {};
            verify = _closure1_slot3;
            oscard = zuuluu.messages;
            oscard = oscard.redemption_instructions_by_platform;
            oscard = verify.bind(golfie)(oscard);
            tangon['redemptionInstructionsByPlatform'] = oscard;
            oscard = zuuluu.messages;
            oscard = oscard.name;
            tangon['name'] = oscard;
            oscard = zuuluu.messages;
            oscard = oscard.name_with_article;
            tangon['nameWithArticle'] = oscard;
            entity['messages'] = tangon;
            tangon = zuuluu.expires_at;
            entity['expiresAt'] = tangon;
            tangon = zuuluu.expiration_mode;
            entity['expirationMode'] = tangon;
            tangon = zuuluu.expires_at_premium;
            entity['expiresAtPremium'] = tangon;
            yankee = entity;
            offset = michal;
            tangon = copyDataProperties(yankee, offset);
            return entity;
 739:
            entity = {};
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[option];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.QuestRewardTypes;
            tangon = tangon.REWARD_CODE;
            entity['type'] = tangon;
            tangon = {};
            oscard = _closure1_slot3;
            report = zuuluu.messages;
            report = report.redemption_instructions_by_platform;
            report = oscard.bind(golfie)(report);
            tangon['redemptionInstructionsByPlatform'] = report;
            report = zuuluu.messages;
            report = report.name;
            tangon['name'] = report;
            report = zuuluu.messages;
            report = report.name_with_article;
            tangon['nameWithArticle'] = report;
            entity['messages'] = tangon;
            tangon = zuuluu.approximate_count;
            entity['approximateCount'] = tangon;
            zuuluu = zuuluu.redemption_link;
            entity['redemptionLink'] = zuuluu;
            yankee = entity;
            offset = michal;
            michal = copyDataProperties(yankee, offset);
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = 2;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/types/v2/Reward.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        michal = argFoo;
        entity = {};
        zuuluu = michal.assignment_method;
        entity['assignmentMethod'] = zuuluu;
        report = michal.rewards;
        tangon = report.map;
        zuuluu = _closure1_slot2;
        zuuluu = tangon.bind(report)(zuuluu);
        entity['rewards'] = zuuluu;
        zuuluu = michal.rewards_expire_at;
        entity['rewardsExpireAt'] = zuuluu;
        michal = michal.platforms;
        entity['platforms'] = michal;
        return entity;
    };
    zuuluu['questRewardsConfigV2FromServer'] = michal;
    return entity;
})();