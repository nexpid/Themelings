// app/modules/hangouts/HangoutsActions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/hangouts/HangoutsActions.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: startHangout
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'START_HANGOUT';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['startHangout'] = tango;
    tango = function() { // Original name: endHangout
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'END_HANGOUT';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['endHangout'] = tango;
    mike = function(argFoo, argBar) { // Original name: setHangoutNotificationChannel
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SET_HANGOUT_NOTIFICATION_CHANNEL';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setHangoutNotificationChannel'] = mike;
    return entity;
})();