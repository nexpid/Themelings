// app/modules/hangouts/HangoutsActions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/hangouts/HangoutsActions.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: startHangout
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'START_HANGOUT';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['channelId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['startHangout'] = tangon;
    tangon = function() { // Original name: endHangout
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'END_HANGOUT';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['endHangout'] = tangon;
    michal = function(argFoo, argBar) { // Original name: setHangoutNotificationChannel
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SET_HANGOUT_NOTIFICATION_CHANNEL';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['channelId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setHangoutNotificationChannel'] = michal;
    return entity;
})();