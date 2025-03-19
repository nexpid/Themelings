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
            michal = argFoo;
            zuuluu = michal.type;
            report = _closure1_slot0;
            entity = _closure1_slot1;
            golfie = 1;
            entity = entity[golfie];
            oscard = undefined;
            entity = report.bind(oscard)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.REWARD_CODE;
            if(!(entity !== zuuluu)) { _fun00004_ip = 772; continue _fun00003 }
 52:
            report = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[golfie];
            entity = report.bind(oscard)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.COLLECTIBLE;
            if(!(entity !== zuuluu)) { _fun00004_ip = 600; continue _fun00003 }
 88:
            report = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[golfie];
            entity = report.bind(oscard)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.VIRTUAL_CURRENCY;
            if(!(entity !== zuuluu)) { _fun00004_ip = 476; continue _fun00003 }
 124:
            report = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[golfie];
            entity = report.bind(oscard)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.FRACTIONAL_PREMIUM;
            if(!(entity !== zuuluu)) { _fun00004_ip = 330; continue _fun00003 }
 160:
            report = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[golfie];
            entity = report.bind(oscard)(entity);
            entity = entity.QuestRewardTypes;
            entity = entity.IN_GAME;
            if(!(entity !== zuuluu)) { _fun00004_ip = 195; continue _fun00003 }
 193:
            return oscard;
 195:
            entity = {};
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.QuestRewardTypes;
            zuuluu = zuuluu.IN_GAME;
            entity['type'] = zuuluu;
            zuuluu = michal.sku_id;
            entity['skuId'] = zuuluu;
            zuuluu = michal.asset;
            entity['asset'] = zuuluu;
            zuuluu = michal.asset_video;
            entity['assetVideo'] = zuuluu;
            zuuluu = {};
            option = _closure1_slot3;
            report = michal.messages;
            report = report.redemption_instructions_by_platform;
            report = option.bind(oscard)(report);
            zuuluu['redemptionInstructionsByPlatform'] = report;
            report = michal.messages;
            report = report.name;
            zuuluu['name'] = report;
            report = michal.messages;
            report = report.name_with_article;
            zuuluu['nameWithArticle'] = report;
            entity['messages'] = zuuluu;
            return entity;
 330:
            entity = {};
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.QuestRewardTypes;
            zuuluu = zuuluu.FRACTIONAL_PREMIUM;
            entity['type'] = zuuluu;
            zuuluu = michal.sku_id;
            entity['skuId'] = zuuluu;
            zuuluu = michal.asset;
            entity['asset'] = zuuluu;
            zuuluu = michal.asset_video;
            entity['assetVideo'] = zuuluu;
            zuuluu = michal.quantity;
            entity['quantity'] = zuuluu;
            zuuluu = {};
            option = _closure1_slot3;
            report = michal.messages;
            report = report.redemption_instructions_by_platform;
            report = option.bind(oscard)(report);
            zuuluu['redemptionInstructionsByPlatform'] = report;
            report = michal.messages;
            report = report.name;
            zuuluu['name'] = report;
            report = michal.messages;
            report = report.name_with_article;
            zuuluu['nameWithArticle'] = report;
            entity['messages'] = zuuluu;
            return entity;
 476:
            entity = {};
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.QuestRewardTypes;
            zuuluu = zuuluu.VIRTUAL_CURRENCY;
            entity['type'] = zuuluu;
            zuuluu = michal.sku_id;
            entity['skuId'] = zuuluu;
            zuuluu = {};
            option = _closure1_slot3;
            report = michal.messages;
            report = report.redemption_instructions_by_platform;
            report = option.bind(oscard)(report);
            zuuluu['redemptionInstructionsByPlatform'] = report;
            report = michal.messages;
            report = report.name;
            zuuluu['name'] = report;
            report = michal.messages;
            report = report.name_with_article;
            zuuluu['nameWithArticle'] = report;
            entity['messages'] = zuuluu;
            zuuluu = michal.orb_quantity;
            entity['orbQuantity'] = zuuluu;
            return entity;
 600:
            entity = {};
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.QuestRewardTypes;
            zuuluu = zuuluu.COLLECTIBLE;
            entity['type'] = zuuluu;
            zuuluu = michal.sku_id;
            entity['skuId'] = zuuluu;
            zuuluu = michal.asset;
            entity['asset'] = zuuluu;
            zuuluu = michal.asset_video;
            entity['assetVideo'] = zuuluu;
            zuuluu = {};
            option = _closure1_slot3;
            report = michal.messages;
            report = report.redemption_instructions_by_platform;
            report = option.bind(oscard)(report);
            zuuluu['redemptionInstructionsByPlatform'] = report;
            report = michal.messages;
            report = report.name;
            zuuluu['name'] = report;
            report = michal.messages;
            report = report.name_with_article;
            zuuluu['nameWithArticle'] = report;
            entity['messages'] = zuuluu;
            zuuluu = michal.expires_at;
            entity['expiresAt'] = zuuluu;
            zuuluu = michal.expiration_mode;
            entity['expirationMode'] = zuuluu;
            zuuluu = michal.expires_at_premium;
            entity['expiresAtPremium'] = zuuluu;
            return entity;
 772:
            entity = {};
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.QuestRewardTypes;
            zuuluu = zuuluu.REWARD_CODE;
            entity['type'] = zuuluu;
            zuuluu = michal.sku_id;
            entity['skuId'] = zuuluu;
            zuuluu = michal.asset;
            entity['asset'] = zuuluu;
            zuuluu = michal.asset_video;
            entity['assetVideo'] = zuuluu;
            zuuluu = {};
            report = _closure1_slot3;
            tangon = michal.messages;
            tangon = tangon.redemption_instructions_by_platform;
            tangon = report.bind(oscard)(tangon);
            zuuluu['redemptionInstructionsByPlatform'] = tangon;
            tangon = michal.messages;
            tangon = tangon.name;
            zuuluu['name'] = tangon;
            tangon = michal.messages;
            tangon = tangon.name_with_article;
            zuuluu['nameWithArticle'] = tangon;
            entity['messages'] = zuuluu;
            zuuluu = michal.approximate_count;
            entity['approximateCount'] = zuuluu;
            michal = michal.redemption_link;
            entity['redemptionLink'] = michal;
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