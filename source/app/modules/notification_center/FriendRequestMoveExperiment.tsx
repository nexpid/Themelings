// app/modules/notification_center/FriendRequestMoveExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = golf[tango];
    options = oscar.bind(entity)(tango);
    report = options.createExperiment;
    tango = {'kind': 'user', 'id': '2024-11_mobile_friend_request_move', 'label': 'Moves friend requests from notification center to messages'};
    verify = {'showInDMs': false, 'removeBadgeAfterAck': false, 'removeItemAfterAck': false};
    tango['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'shows friend requests in dms with perma badge'};
    verify = {'showInDMs': true, 'removeBadgeAfterAck': false, 'removeItemAfterAck': false};
    offset['config'] = verify;
    verify = new Array(3);
    verify[0] = offset;
    offset = {'id': 2, 'label': 'shows friend requests in dms and dismissible badge'};
    yankee = {'showInDMs': true, 'removeBadgeAfterAck': true, 'removeItemAfterAck': false};
    offset['config'] = yankee;
    verify[1] = offset;
    offset = {'id': 3, 'label': 'shows friend requests in dms and removes item after ack'};
    yankee = {'showInDMs': true, 'removeBadgeAfterAck': true, 'removeItemAfterAck': true};
    offset['config'] = yankee;
    verify[2] = offset;
    tango['treatments'] = verify;
    tango = report.bind(options)(tango);
    var _closure1_slot4 = tango;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/notification_center/FriendRequestMoveExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useNumFriendRequestsForBadging
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot4;
            zulu = tango.useExperiment;
            mike = {};
            report = argFoo;
            mike['location'] = report;
            mike = zulu.bind(tango)(mike);
            zulu = mike.showInDMs;
            mike = mike.removeBadgeAfterAck;
            var _closure2_slot0 = mike;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 3;
            tango = tango[mike];
            mike = undefined;
            report = report.bind(mike)(tango);
            tango = report.useStateFromStores;
            golf = _closure1_slot2;
            mike = new Array(2);
            mike[0] = golf;
            oscar = _closure1_slot3;
            mike[1] = oscar;
            entity = function() {
                entity = _closure1_slot2;
                zulu = entity.localItems;
                mike = zulu.filter;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        report = argFoo;
                        mike = report.type;
                        tango = _closure1_slot0;
                        entity = _closure1_slot1;
                        options = 4;
                        entity = entity[options];
                        golf = undefined;
                        entity = tango.bind(golf)(entity);
                        entity = entity.NotificationCenterLocalItems;
                        entity = entity.INCOMING_FRIEND_REQUESTS;
                        entity = mike !== entity;
                        if(!entity) { _fun00004_ip = 90; continue _fun00003 }
 52:
                        tango = report.type;
                        oscar = _closure1_slot0;
                        mike = _closure1_slot1;
                        mike = mike[options];
                        mike = oscar.bind(golf)(mike);
                        mike = mike.NotificationCenterLocalItems;
                        mike = mike.INCOMING_GAME_FRIEND_REQUESTS;
                        entity = tango !== mike;
 90:
                        if(entity) { _fun00004_ip = 121; continue _fun00003 }
 93:
                        mike = _closure2_slot0;
                        if(!mike) { _fun00004_ip = 118; continue _fun00003 }
 103:
                        tango = _closure1_slot3;
                        zulu = tango.isLocalItemAcked;
                        mike = zulu.bind(tango)(report);
 118:
                        entity = mike;
 121:
                        entity = !entity;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                entity = entity.length;
                return entity;
            };
            mike = tango.bind(report)(mike, entity);
            entity = 0;
            if(!zulu) { _fun00002_ip = 113; continue _fun00001 }
 110:
            entity = mike;
 113:
            return entity;
        }
    };
    zulu['useNumFriendRequestsForBadging'] = mike;
    return entity;
})();