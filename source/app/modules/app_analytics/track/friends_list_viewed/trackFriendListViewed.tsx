// app/modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx
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
    tango = tango.AnalyticEvents;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: trackFriendsListViewed
        _fun118339: for(var _fun118339_ip = 0; ; ) switch(_fun118339_ip) {
 0:
            entity = argFoo;
            verify = entity.tab_opened;
            yankee = entity.source;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 1;
            mike = report[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            golf = mike.bind(entity)();
            mike = 2;
            mike = report[mike];
            offset = tango.bind(entity)(mike);
            options = offset.track;
            mike = _closure1_slot3;
            oscar = mike.FRIENDS_LIST_VIEWED;
            tango = {};
            tango['tab_opened'] = verify;
            tango['source'] = yankee;
            backup = tango;
            foxtrot = golf;
            yankee = copyDataProperties(backup, foxtrot);
            tango = options.bind(offset)(oscar, tango);
            tango = _closure1_slot0;
            zulu = 3;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.trackClickstream;
            zulu = mike.FRIENDS_LIST_VIEWED_CLICKSTREAM;
            mike = {};
            options = null;
            offset = options != verify;
            oscar = 'tabless';
            if(!offset) { _fun118339_ip = 145; continue _fun118339 }
 142:
            oscar = verify;
 145:
            mike['tab_opened'] = oscar;
            offset = golf.num_friends;
            yankee = options != offset;
            verify = 0;
            if(!yankee) { _fun118339_ip = 168; continue _fun118339 }
 165:
            verify = offset;
 168:
            mike['num_friends'] = verify;
            offset = golf.now_playing_visible;
            verify = options != offset;
            if(!verify) { _fun118339_ip = 189; continue _fun118339 }
 186:
            verify = offset;
 189:
            mike['now_playing_visible'] = verify;
            golf = golf.now_playing_num_cards;
            options = options != golf;
            oscar = 0;
            if(!options) { _fun118339_ip = 212; continue _fun118339 }
 209:
            oscar = golf;
 212:
            mike['now_playing_num_cards'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();