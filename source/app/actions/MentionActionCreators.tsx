// app/actions/MentionActionCreators.tsx
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
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    golf = mike.Endpoints;
    var _closure1_slot3 = golf;
    mike = mike.MAX_MENTIONS_PER_FETCH;
    var _closure1_slot4 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: setGuildFilter
        entity = argFoo;
        golf = entity.guildFilter;
        oscar = entity.roleFilter;
        report = entity.everyoneFilter;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        options = 'SET_RECENT_MENTIONS_FILTER';
        mike['type'] = options;
        mike['guildFilter'] = golf;
        mike['roleFilter'] = oscar;
        mike['everyoneFilter'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['setGuildFilter'] = golf;
    golf = function() { // Original name: clearMentions
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CLEAR_MENTIONS';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['clearMentions'] = golf;
    golf = function(argFoo) { // Original name: truncateMentions
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'TRUNCATE_MENTIONS';
        mike['type'] = report;
        report = argFoo;
        mike['size'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['truncateMentions'] = golf;
    golf = function(argFoo) { // Original name: fetchRecentMentions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            yankee = argFoo;
            offset = arguments[1];
            verify = arguments[2];
            options = arguments[3];
            golf = arguments[4];
            var _closure2_slot0 = yankee;
            entity = undefined;
            if(!(offset === entity)) { _fun00002_ip = 34; continue _fun00001 }
 27:
            offset = _closure1_slot4;
 34:
            if(!(verify === entity)) { _fun00002_ip = 40; continue _fun00001 }
 38:
            verify = null;
 40:
            if(!(options === entity)) { _fun00002_ip = 46; continue _fun00001 }
 44:
            options = true;
 46:
            if(!(golf === entity)) { _fun00002_ip = 52; continue _fun00001 }
 50:
            golf = true;
 52:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 1;
            zulu = report[zulu];
            romeo = tango.bind(entity)(zulu);
            tango = romeo.dispatch;
            zulu = {};
            foxtrot = 'LOAD_RECENT_MENTIONS';
            zulu['type'] = foxtrot;
            zulu['guildId'] = verify;
            zulu = tango.bind(romeo)(zulu);
            tango = _closure1_slot0;
            zulu = 2;
            zulu = report[zulu];
            zulu = tango.bind(entity)(zulu);
            report = zulu.HTTP;
            tango = report.get;
            zulu = {'url': null, 'query': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': true};
            oscar = _closure1_slot3;
            oscar = oscar.MENTIONS;
            zulu['url'] = oscar;
            oscar = {};
            oscar['before'] = yankee;
            oscar['limit'] = offset;
            oscar['guild_id'] = verify;
            oscar['roles'] = options;
            oscar['everyone'] = golf;
            zulu['query'] = oscar;
            report = tango.bind(report)(zulu);
            tango = report.then;
            zulu = function(argFoo) {
                entity = argFoo;
                oscar = entity.body;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 1;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                golf = 'LOAD_RECENT_MENTIONS_SUCCESS';
                mike['type'] = golf;
                mike['messages'] = oscar;
                options = _closure2_slot0;
                golf = null;
                golf = golf != options;
                mike['isAfter'] = golf;
                oscar = oscar.length;
                report = _closure1_slot4;
                report = oscar >= report;
                mike['hasMoreAfter'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 1;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'LOAD_RECENT_MENTIONS_FAILURE';
                mike['type'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    mike['fetchRecentMentions'] = golf;
    golf = function(argFoo) { // Original name: deleteRecentMention
        report = argFoo;
        oscar = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 2;
        zulu = tango[entity];
        entity = undefined;
        zulu = oscar.bind(entity)(zulu);
        golf = zulu.HTTP;
        oscar = golf.del;
        zulu = {'url': null, 'retries': 2, 'oldFormErrors': true, 'rejectWithError': true};
        verify = _closure1_slot3;
        options = verify.MENTIONS_MESSAGE_ID;
        options = options.bind(verify)(report);
        zulu['url'] = options;
        zulu = oscar.bind(golf)(zulu);
        zulu = _closure1_slot1;
        mike = 1;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'RECENT_MENTION_DELETE';
        mike['type'] = oscar;
        mike['id'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['deleteRecentMention'] = golf;
    tango = function() { // Original name: setRecentMentionsStale
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SET_RECENT_MENTIONS_STALE';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['setRecentMentionsStale'] = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/MentionActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();