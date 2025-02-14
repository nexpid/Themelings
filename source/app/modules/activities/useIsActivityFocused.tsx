// app/modules/activities/useIsActivityFocused.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function(argFoo) { // Original name: isActivityFocused
        _fun73337: for(var _fun73337_ip = 0; ; ) switch(_fun73337_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            zulu = entity.ChannelRTCStore;
            mike = entity.EmbeddedActivitiesStore;
            entity = zulu.getSelectedParticipant;
            zulu = entity.bind(zulu)(tango);
            entity = mike.getSelfEmbeddedActivityForChannel;
            mike = entity.bind(mike)(tango);
            tango = null;
            entity = tango != zulu;
            if(!entity) { _fun73337_ip = 55; continue _fun73337 }
 51:
            entity = tango != mike;
 55:
            if(!entity) { _fun73337_ip = 108; continue _fun73337 }
 58:
            zulu = zulu.id;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 2;
            report = report[tango];
            tango = undefined;
            report = oscar.bind(tango)(report);
            tango = report.embeddedActivityParticipantId;
            mike = mike.applicationId;
            mike = tango.bind(report)(mike);
            entity = zulu === mike;
 108:
            return entity;
        }
    };
    var _closure1_slot4 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/activities/useIsActivityFocused.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useIsActivityFocused
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot2;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot3;
        mike[1] = report;
        entity = function() {
            zulu = _closure1_slot4;
            mike = {};
            tango = _closure2_slot0;
            mike['channelId'] = tango;
            tango = _closure1_slot2;
            mike['ChannelRTCStore'] = tango;
            entity = _closure1_slot3;
            mike['EmbeddedActivitiesStore'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    zulu['isActivityFocused'] = mike;
    return entity;
})();