// app/modules/content_inventory/ContentInventoryActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot8 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/content_inventory/ContentInventoryActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() {
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 6;
        mike = tango[entity];
        entity = undefined;
        golf = zulu.bind(entity)(mike);
        report = golf.dispatch;
        mike = {};
        options = 'CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN';
        mike['type'] = options;
        mike = report.bind(golf)(mike);
        mike = 7;
        mike = tango[mike];
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot8;
        zulu = mike.MEMBERLIST_CONTENT_FEED_HIDDEN;
        mike = {};
        options = _closure1_slot4;
        golf = options.getChannelId;
        golf = golf.bind(options)();
        mike['channel_id'] = golf;
        options = _closure1_slot5;
        golf = options.getGuildId;
        golf = golf.bind(options)();
        mike['guild_id'] = golf;
        oscar = _closure1_slot7;
        oscar = oscar.hidden;
        mike['hidden'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['toggleMemberListContentFeedHidden'] = tango;
    tango = function() { // Original name: onGameProfileOpen
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GAME_PROFILE_OPEN';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['onGameProfileOpen'] = tango;
    tango = function(argFoo) { // Original name: onTapContentInventoryEntryEmbed
        _fun100086: for(var _fun100086_ip = 0; ; ) switch(_fun100086_ip) {
 0:
            entity = argFoo;
            oscar = entity.message;
            zulu = entity.authorId;
            mike = entity.tappedElement;
            golf = _closure1_slot3;
            tango = golf.getChannel;
            entity = oscar.channel_id;
            verify = tango.bind(golf)(entity);
            entity = 'avatar';
            tango = entity === mike;
            if(tango) { _fun100086_ip = 64; continue _fun100086 }
 53:
            entity = 'username';
            if(!(entity === mike)) { _fun100086_ip = 220; continue _fun100086 }
 64:
            mike = _closure1_slot6;
            entity = mike.getUser;
            offset = entity.bind(mike)(zulu);
            options = null;
            if(!(options != offset)) { _fun100086_ip = 220; continue _fun100086 }
 88:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 8;
            entity = zulu[entity];
            golf = undefined;
            zulu = mike.bind(golf)(entity);
            mike = zulu.showUserProfile;
            entity = {};
            offset = offset.id;
            entity['userId'] = offset;
            offset = options == verify;
            options = undefined;
            if(offset) { _fun100086_ip = 141; continue _fun100086 }
 136:
            options = verify.id;
 141:
            entity['channelId'] = options;
            oscar = oscar.id;
            entity['messageId'] = oscar;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            report = 9;
            report = options[report];
            report = oscar.bind(golf)(report);
            if(tango) { _fun100086_ip = 193; continue _fun100086 }
 177:
            oscar = report.USERNAME;
            tango = new Array(1);
            tango[0] = oscar;
            _fun100086_ip = 210; continue _fun100086;
 193:
            oscar = report.AVATAR;
            report = new Array(1);
            report[0] = oscar;
            tango = report;
 210:
            entity['sourceAnalyticsLocations'] = tango;
            entity = mike.bind(zulu)(entity);
 220:
            entity = undefined;
            return entity;
        }
    };
    zulu['onTapContentInventoryEntryEmbed'] = tango;
    mike = function() { // Original name: clearDeleteHistoryError
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearDeleteHistoryError'] = mike;
    return entity;
})();