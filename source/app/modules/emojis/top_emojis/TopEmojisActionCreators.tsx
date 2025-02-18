// app/modules/emojis/top_emojis/TopEmojisActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/emojis/top_emojis/TopEmojisActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: fetchTopEmojis
        option = argFoo;
        var _closure2_slot0 = option;
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        entity = 1;
        zuuluu = report[entity];
        entity = undefined;
        golfie = tangon.bind(entity)(zuuluu);
        tangon = golfie.dispatch;
        zuuluu = {};
        verify = 'TOP_EMOJIS_FETCH';
        zuuluu['type'] = verify;
        zuuluu['guildId'] = option;
        zuuluu = tangon.bind(golfie)(zuuluu);
        tangon = _closure1_slot0;
        zuuluu = 2;
        zuuluu = report[zuuluu];
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.HTTP;
        tangon = report.get;
        zuuluu = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        golfie = _closure1_slot3;
        oscard = golfie.TOP_EMOJIS_FOR_GUILD;
        oscard = oscard.bind(golfie)(option);
        zuuluu['url'] = oscard;
        report = tangon.bind(report)(zuuluu);
        tangon = report.then;
        zuuluu = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            report = 'TOP_EMOJIS_FETCH_SUCCESS';
            entity['type'] = report;
            report = _closure2_slot0;
            entity['guildId'] = report;
            report = argFoo;
            report = report.body;
            golfie = report.items;
            oscard = golfie.map;
            report = function(argFoo) {
                michal = argFoo;
                entity = {};
                zuuluu = michal.emoji_id;
                entity['emojiId'] = zuuluu;
                michal = michal.emoji_rank;
                entity['rank'] = michal;
                return entity;
            };
            oscard = oscard.bind(golfie)(report);
            report = oscard.sort;
            tangon = function(argFoo, argBar) {
                entity = argFoo;
                michal = entity.rank;
                entity = argBar;
                entity = entity.rank;
                entity = michal - entity;
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            entity['topEmojisMetadata'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'TOP_EMOJIS_FETCH_FAILURE';
            entity['type'] = tangon;
            tangon = _closure2_slot0;
            entity['guildId'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['fetchTopEmojis'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateNewlyAddedLastSeen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            golfie = _closure1_slot1;
            entity = _closure1_slot2;
            tangon = 1;
            zuuluu = entity[tangon];
            entity = undefined;
            option = golfie.bind(entity)(zuuluu);
            golfie = option.dispatch;
            zuuluu = {};
            verify = 'NEWLY_ADDED_EMOJI_SEEN_UPDATED';
            zuuluu['type'] = verify;
            zuuluu = golfie.bind(option)(zuuluu);
            golfie = null;
            zuuluu = golfie != oscard;
            if(!zuuluu) { _fun00002_ip = 66; continue _fun00001 }
 62:
            zuuluu = golfie != report;
 66:
            if(!zuuluu) { _fun00002_ip = 117; continue _fun00001 }
 69:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[tangon];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            golfie = 'NEWLY_ADDED_EMOJI_SEEN_PENDING';
            michal['type'] = golfie;
            michal['guildId'] = oscard;
            michal['emojiId'] = report;
            michal = zuuluu.bind(tangon)(michal);
 117:
            return entity;
        }
    };
    zuuluu['updateNewlyAddedLastSeen'] = tangon;
    michal = function(argFoo, argBar) { // Original name: updateNewlyAddedEmojiSeenAcknowledged
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            michal = null;
            entity = michal != report;
            if(!entity) { _fun00004_ip = 19; continue _fun00003 }
 15:
            entity = michal != tangon;
 19:
            if(!entity) { _fun00004_ip = 78; continue _fun00003 }
 22:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            oscard = 'NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED';
            entity['type'] = oscard;
            entity['guildId'] = report;
            entity['emojiId'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 78:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['updateNewlyAddedEmojiSeenAcknowledged'] = michal;
    return entity;
})();