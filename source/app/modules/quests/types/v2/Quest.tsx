// app/modules/quests/types/v2/Quest.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    michal = function(argFoo) { // Original name: questCosponsorMetadataFromServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity == michal)) { _fun00002_ip = 13; continue _fun00001 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = {};
            zuuluu = michal.name;
            entity['name'] = zuuluu;
            zuuluu = michal.logotype;
            entity['logotype'] = zuuluu;
            michal = michal.redemption_instructions;
            entity['redemptionInstructions'] = michal;
            return entity;
        }
    };
    var _closure1_slot2 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 3;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/types/v2/Quest.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) {
        michal = argFoo;
        entity = {};
        zuuluu = michal.id;
        entity['id'] = zuuluu;
        golfie = 2;
        entity['configVersion'] = golfie;
        zuuluu = michal.starts_at;
        entity['startsAt'] = zuuluu;
        zuuluu = michal.expires_at;
        entity['expiresAt'] = zuuluu;
        zuuluu = michal.features;
        entity['features'] = zuuluu;
        zuuluu = {};
        tangon = michal.application;
        tangon = tangon.id;
        zuuluu['id'] = tangon;
        tangon = michal.application;
        tangon = tangon.name;
        zuuluu['name'] = tangon;
        tangon = michal.application;
        tangon = tangon.link;
        zuuluu['link'] = tangon;
        entity['application'] = zuuluu;
        zuuluu = {};
        tangon = michal.assets;
        tangon = tangon.hero;
        zuuluu['hero'] = tangon;
        tangon = michal.assets;
        tangon = tangon.hero_video;
        zuuluu['heroVideo'] = tangon;
        tangon = michal.assets;
        tangon = tangon.quest_bar_hero;
        zuuluu['questBarHero'] = tangon;
        tangon = michal.assets;
        tangon = tangon.quest_bar_hero_video;
        zuuluu['questBarHeroVideo'] = tangon;
        tangon = michal.assets;
        tangon = tangon.game_tile;
        zuuluu['gameTile'] = tangon;
        tangon = michal.assets;
        tangon = tangon.logotype;
        zuuluu['logotype'] = tangon;
        entity['assets'] = zuuluu;
        zuuluu = {};
        tangon = michal.colors;
        tangon = tangon.primary;
        zuuluu['primary'] = tangon;
        tangon = michal.colors;
        tangon = tangon.secondary;
        zuuluu['secondary'] = tangon;
        entity['colors'] = zuuluu;
        zuuluu = {};
        tangon = michal.messages;
        tangon = tangon.quest_name;
        zuuluu['questName'] = tangon;
        tangon = michal.messages;
        tangon = tangon.game_title;
        zuuluu['gameTitle'] = tangon;
        tangon = michal.messages;
        tangon = tangon.game_publisher;
        zuuluu['gamePublisher'] = tangon;
        entity['messages'] = zuuluu;
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        tangon = 0;
        option = report[tangon];
        tangon = undefined;
        offset = oscard.bind(tangon)(option);
        verify = offset.questTaskConfigFromServer;
        option = michal.task_config;
        option = verify.bind(offset)(option);
        entity['taskConfig'] = option;
        option = 1;
        option = report[option];
        offset = oscard.bind(tangon)(option);
        verify = offset.questRewardsConfigV2FromServer;
        option = michal.rewards_config;
        option = verify.bind(offset)(option);
        entity['rewardsConfig'] = option;
        report = report[golfie];
        golfie = oscard.bind(tangon)(report);
        oscard = golfie.questVideoMetadataFromServer;
        report = michal.video_metadata;
        report = oscard.bind(golfie)(report);
        entity['videoMetadata'] = report;
        zuuluu = _closure1_slot2;
        michal = michal.cosponsor_metadata;
        michal = zuuluu.bind(tangon)(michal);
        entity['cosponsorMetadata'] = michal;
        return entity;
    };
    zuuluu['questFromServerV2'] = tangon;
    zuuluu['questCosponsorMetadataFromServer'] = michal;
    return entity;
})();