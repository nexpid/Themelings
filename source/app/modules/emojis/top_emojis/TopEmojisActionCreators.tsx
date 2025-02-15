// app/modules/emojis/top_emojis/TopEmojisActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/emojis/top_emojis/TopEmojisActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: fetchTopEmojis
        options = argFoo;
        var _closure2_slot0 = options;
        tango = _closure1_slot1;
        report = _closure1_slot2;
        entity = 1;
        zulu = report[entity];
        entity = undefined;
        golf = tango.bind(entity)(zulu);
        tango = golf.dispatch;
        zulu = {};
        verify = 'TOP_EMOJIS_FETCH';
        zulu['type'] = verify;
        zulu['guildId'] = options;
        zulu = tango.bind(golf)(zulu);
        tango = _closure1_slot0;
        zulu = 2;
        zulu = report[zulu];
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.get;
        zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        golf = _closure1_slot3;
        oscar = golf.TOP_EMOJIS_FOR_GUILD;
        oscar = oscar.bind(golf)(options);
        zulu['url'] = oscar;
        report = tango.bind(report)(zulu);
        tango = report.then;
        zulu = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            report = 'TOP_EMOJIS_FETCH_SUCCESS';
            entity['type'] = report;
            report = _closure2_slot0;
            entity['guildId'] = report;
            report = argFoo;
            report = report.body;
            golf = report.items;
            oscar = golf.map;
            report = function(argFoo) {
                mike = argFoo;
                entity = {};
                zulu = mike.emoji_id;
                entity['emojiId'] = zulu;
                mike = mike.emoji_rank;
                entity['rank'] = mike;
                return entity;
            };
            oscar = oscar.bind(golf)(report);
            report = oscar.sort;
            tango = function(argFoo, argBar) {
                entity = argFoo;
                mike = entity.rank;
                entity = argBar;
                entity = entity.rank;
                entity = mike - entity;
                return entity;
            };
            tango = report.bind(oscar)(tango);
            entity['topEmojisMetadata'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'TOP_EMOJIS_FETCH_FAILURE';
            entity['type'] = tango;
            tango = _closure2_slot0;
            entity['guildId'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['fetchTopEmojis'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateNewlyAddedLastSeen
        _fun77925: for(var _fun77925_ip = 0; ; ) switch(_fun77925_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            golf = _closure1_slot1;
            entity = _closure1_slot2;
            tango = 1;
            zulu = entity[tango];
            entity = undefined;
            options = golf.bind(entity)(zulu);
            golf = options.dispatch;
            zulu = {};
            verify = 'NEWLY_ADDED_EMOJI_SEEN_UPDATED';
            zulu['type'] = verify;
            zulu = golf.bind(options)(zulu);
            golf = null;
            zulu = golf != oscar;
            if(!zulu) { _fun77925_ip = 66; continue _fun77925 }
 62:
            zulu = golf != report;
 66:
            if(!zulu) { _fun77925_ip = 117; continue _fun77925 }
 69:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[tango];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'NEWLY_ADDED_EMOJI_SEEN_PENDING';
            mike['type'] = golf;
            mike['guildId'] = oscar;
            mike['emojiId'] = report;
            mike = zulu.bind(tango)(mike);
 117:
            return entity;
        }
    };
    zulu['updateNewlyAddedLastSeen'] = tango;
    mike = function(argFoo, argBar) { // Original name: updateNewlyAddedEmojiSeenAcknowledged
        _fun77926: for(var _fun77926_ip = 0; ; ) switch(_fun77926_ip) {
 0:
            report = argFoo;
            tango = argBar;
            mike = null;
            entity = mike != report;
            if(!entity) { _fun77926_ip = 19; continue _fun77926 }
 15:
            entity = mike != tango;
 19:
            if(!entity) { _fun77926_ip = 78; continue _fun77926 }
 22:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            oscar = 'NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED';
            entity['type'] = oscar;
            entity['guildId'] = report;
            entity['emojiId'] = tango;
            entity = mike.bind(zulu)(entity);
 78:
            entity = undefined;
            return entity;
        }
    };
    zulu['updateNewlyAddedEmojiSeenAcknowledged'] = mike;
    return entity;
})();