// app/modules/notification_center/NotificationCenterUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 4;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/notification_center/NotificationCenterUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = arguments[1];
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            tangon = true;
 11:
            michal = _closure1_slot1;
            entity = _closure1_slot2;
            golfie = 0;
            entity = entity[golfie];
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            oscard = argFoo;
            entity['since'] = oscard;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golfie];
            report = oscard.bind(zuuluu)(report);
            if(tangon) { _fun00002_ip = 71; continue _fun00001 }
 63:
            tangon = report.getFullFormatter;
            _fun00002_ip = 77; continue _fun00001;
 71:
            tangon = report.getAbbreviatedFormatter;
 77:
            entity['getFormatter'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getRelativeTimestamp'] = tangon;
    tangon = function(argFoo, argBar) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            oscard = argBar;
            entity = zuuluu.acked;
            if(entity) { _fun00004_ip = 99; continue _fun00003 }
 15:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 1;
            michal = golfie[michal];
            golfie = undefined;
            michal = report.bind(golfie)(michal);
            michal = michal.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET;
            michal = oscard !== michal;
            if(!michal) { _fun00004_ip = 96; continue _fun00003 }
 53:
            report = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 2;
            tangon = option[tangon];
            report = report.bind(golfie)(tangon);
            tangon = report.compare;
            zuuluu = zuuluu.id;
            tangon = tangon.bind(report)(oscard, zuuluu);
            zuuluu = 0;
            michal = tangon >= zuuluu;
 96:
            entity = michal;
 99:
            return entity;
        }
    };
    zuuluu['isRemoteAcked'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: incomingFriendRequestLocalItem
        golfie = argFoo;
        michal = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 2;
        entity = oscard[entity];
        report = undefined;
        option = michal.bind(report)(entity);
        michal = option.fromTimestamp;
        tangon = global;
        offset = tangon.Date;
        entity = offset.prototype;
        verify = Object.create(entity, {constructor: {value: offset}});
        backup = argBar;
        kiloes = verify;
        entity = new kiloes[offset](backup, foxtra);
        verify = entity instanceof Object ? entity : verify;
        entity = verify.getTime;
        entity = entity.bind(verify)();
        michal = michal.bind(option)(entity);
        entity = {'acked': false, 'forceUnacked': true, 'other_user': null, 'kind': 'notification-center-item'};
        entity['other_user'] = golfie;
        yankee = golfie.id;
        option = tangon.HermesInternal;
        offset = option.concat;
        verify = 'incoming_friend_requests_';
        option = '_';
        option = offset.bind(verify)(yankee, option, michal);
        entity['local_id'] = option;
        option = golfie.id;
        tangon = tangon.HermesInternal;
        golfie = tangon.concat;
        tangon = 'https://discord.com/users/';
        tangon = golfie.bind(tangon)(option);
        entity['deeplink'] = tangon;
        tangon = _closure1_slot0;
        zuuluu = 3;
        zuuluu = oscard[zuuluu];
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = zuuluu.NotificationCenterLocalItems;
        zuuluu = zuuluu.INCOMING_FRIEND_REQUESTS;
        entity['type'] = zuuluu;
        entity['id'] = michal;
        michal = argBaz;
        entity['applicationId'] = michal;
        return entity;
    };
    zuuluu['incomingFriendRequestLocalItem'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: incomingGameFriendRequestLocalItem
        golfie = argFoo;
        michal = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 2;
        entity = oscard[entity];
        report = undefined;
        option = michal.bind(report)(entity);
        michal = option.fromTimestamp;
        tangon = global;
        offset = tangon.Date;
        entity = offset.prototype;
        verify = Object.create(entity, {constructor: {value: offset}});
        backup = argBar;
        kiloes = verify;
        entity = new kiloes[offset](backup, foxtra);
        verify = entity instanceof Object ? entity : verify;
        entity = verify.getTime;
        entity = entity.bind(verify)();
        michal = michal.bind(option)(entity);
        entity = {'acked': false, 'forceUnacked': true, 'other_user': null, 'kind': 'notification-center-item'};
        entity['other_user'] = golfie;
        yankee = golfie.id;
        option = tangon.HermesInternal;
        offset = option.concat;
        verify = 'incoming_game_friend_requests_';
        option = '_';
        option = offset.bind(verify)(yankee, option, michal);
        entity['local_id'] = option;
        option = golfie.id;
        tangon = tangon.HermesInternal;
        golfie = tangon.concat;
        tangon = 'https://discord.com/users/';
        tangon = golfie.bind(tangon)(option);
        entity['deeplink'] = tangon;
        tangon = _closure1_slot0;
        zuuluu = 3;
        zuuluu = oscard[zuuluu];
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = zuuluu.NotificationCenterLocalItems;
        zuuluu = zuuluu.INCOMING_GAME_FRIEND_REQUESTS;
        entity['type'] = zuuluu;
        entity['id'] = michal;
        michal = argBaz;
        entity['applicationId'] = michal;
        return entity;
    };
    zuuluu['incomingGameFriendRequestLocalItem'] = tangon;
    tangon = function(argFoo) { // Original name: mobileNativeUpdateAvailableLocalItem
        michal = argFoo;
        entity = {'acked': false, 'enableBadge': true, 'id': null, 'kind': 'notification-center-item'};
        golfie = _closure1_slot1;
        oscard = _closure1_slot2;
        tangon = 2;
        tangon = oscard[tangon];
        report = undefined;
        verify = golfie.bind(report)(tangon);
        option = verify.fromTimestamp;
        tangon = global;
        golfie = tangon.Date;
        offset = golfie.prototype;
        offset = Object.create(offset, {constructor: {value: golfie}});
        romeon = offset;
        golfie = new romeon[golfie](yankee);
        offset = golfie instanceof Object ? golfie : offset;
        golfie = offset.getTime;
        golfie = golfie.bind(offset)();
        golfie = option.bind(verify)(golfie);
        entity['id'] = golfie;
        option = michal.build;
        tangon = tangon.HermesInternal;
        golfie = tangon.concat;
        tangon = 'mobile_update_available_';
        tangon = golfie.bind(tangon)(option);
        entity['local_id'] = tangon;
        tangon = _closure1_slot0;
        zuuluu = 3;
        zuuluu = oscard[zuuluu];
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = zuuluu.NotificationCenterLocalItems;
        zuuluu = zuuluu.MOBILE_NATIVE_UPDATE_AVAILABLE;
        entity['type'] = zuuluu;
        michal = michal.urls;
        zuuluu = michal.install;
        michal = zuuluu.toString;
        michal = michal.bind(zuuluu)();
        entity['deeplink'] = michal;
        return entity;
    };
    zuuluu['mobileNativeUpdateAvailableLocalItem'] = tangon;
    michal = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.type;
            golfie = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 3;
            entity = entity[oscard];
            report = undefined;
            entity = golfie.bind(report)(entity);
            entity = entity.NotificationCenterItems;
            entity = entity.RECENT_MENTION;
            entity = tangon === entity;
            if(entity) { _fun00006_ip = 90; continue _fun00005 }
 52:
            zuuluu = zuuluu.type;
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.NotificationCenterItems;
            michal = michal.REPLY_MENTION;
            entity = zuuluu === michal;
 90:
            return entity;
        }
    };
    zuuluu['isMentionItem'] = michal;
    return entity;
})();