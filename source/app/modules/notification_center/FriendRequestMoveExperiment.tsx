// app/modules/notification_center/FriendRequestMoveExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2024-11_mobile_friend_request_move', 'label': 'Moves friend requests from notification center to messages'};
    verify = {'showInDMs': false, 'removeBadgeAfterAck': false, 'removeItemAfterAck': false};
    tangon['defaultConfig'] = verify;
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
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot4 = tangon;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/notification_center/FriendRequestMoveExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: useNumFriendRequestsForBadging
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot4;
            zuuluu = tangon.useExperiment;
            michal = {};
            report = argFoo;
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.showInDMs;
            michal = michal.removeBadgeAfterAck;
            var _closure2_slot0 = michal;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 3;
            tangon = tangon[michal];
            michal = undefined;
            report = report.bind(michal)(tangon);
            tangon = report.useStateFromStores;
            golfie = _closure1_slot2;
            michal = new Array(2);
            michal[0] = golfie;
            oscard = _closure1_slot3;
            michal[1] = oscard;
            entity = function() {
                entity = _closure1_slot2;
                zuuluu = entity.localItems;
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        report = argFoo;
                        michal = report.type;
                        tangon = _closure1_slot0;
                        entity = _closure1_slot1;
                        option = 4;
                        entity = entity[option];
                        golfie = undefined;
                        entity = tangon.bind(golfie)(entity);
                        entity = entity.NotificationCenterLocalItems;
                        entity = entity.INCOMING_FRIEND_REQUESTS;
                        entity = michal !== entity;
                        if(!entity) { _fun00004_ip = 90; continue _fun00003 }
 52:
                        tangon = report.type;
                        oscard = _closure1_slot0;
                        michal = _closure1_slot1;
                        michal = michal[option];
                        michal = oscard.bind(golfie)(michal);
                        michal = michal.NotificationCenterLocalItems;
                        michal = michal.INCOMING_GAME_FRIEND_REQUESTS;
                        entity = tangon !== michal;
 90:
                        if(entity) { _fun00004_ip = 121; continue _fun00003 }
 93:
                        michal = _closure2_slot0;
                        if(!michal) { _fun00004_ip = 118; continue _fun00003 }
 103:
                        tangon = _closure1_slot3;
                        zuuluu = tangon.isLocalItemAcked;
                        michal = zuuluu.bind(tangon)(report);
 118:
                        entity = michal;
 121:
                        entity = !entity;
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                entity = entity.length;
                return entity;
            };
            michal = tangon.bind(report)(michal, entity);
            entity = 0;
            if(!zuuluu) { _fun00002_ip = 113; continue _fun00001 }
 110:
            entity = michal;
 113:
            return entity;
        }
    };
    zuuluu['useNumFriendRequestsForBadging'] = michal;
    return entity;
})();