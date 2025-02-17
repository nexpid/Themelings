// app/modules/stage_channels/useIsOnStartStageScreenStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = options;
    tango = function(argFoo) { // Original name: setIsOnStartStageScreen
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot6;
            mike = zulu.setState;
            entity = {};
            tango = _closure2_slot0;
            entity['isOnStartStageScreen'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot7 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    verify = options[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = options[report];
    verify = golf.bind(entity)(report);
    oscar = verify.create;
    report = function() {
        entity = {};
        mike = true;
        entity['isOnStartStageScreen'] = mike;
        return entity;
    };
    report = oscar.bind(verify)(report);
    var _closure1_slot6 = report;
    oscar = 8;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/stage_channels/useIsOnStartStageScreenStore.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['setIsOnStartStageScreen'] = tango;
    mike = function(argFoo) { // Original name: useUpdateIsOnStartStageScreenEffect
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            report = 5;
            golf = verify[report];
            entity = undefined;
            yankee = oscar.bind(entity)(golf);
            offset = yankee.useStateFromStores;
            golf = _closure1_slot5;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                mike = _closure1_slot5;
                entity = mike.getVoiceChannelId;
                mike = entity.bind(mike)();
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike === entity;
                return entity;
            };
            golf = offset.bind(yankee)(options, golf);
            var _closure2_slot1 = golf;
            report = verify[report];
            yankee = oscar.bind(entity)(report);
            offset = yankee.useStateFromStores;
            report = _closure1_slot4;
            options = new Array(1);
            options[0] = report;
            oscar = new Array(1);
            oscar[0] = tango;
            report = function() {
                tango = _closure1_slot4;
                zulu = tango.can;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                entity = report.bind(entity)(mike);
                mike = entity.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            report = offset.bind(yankee)(options, report, oscar);
            options = _closure1_slot1;
            oscar = 7;
            oscar = verify[oscar];
            oscar = options.bind(entity)(oscar);
            tango = tango.id;
            tango = oscar.bind(entity)(tango);
            oscar = report;
            if(!oscar) { _fun00002_ip = 147; continue _fun00001 }
 144:
            oscar = !tango;
 147:
            var _closure2_slot2 = oscar;
            report = _closure1_slot3;
            tango = report.useEffect;
            zulu = new Array(2);
            zulu[0] = golf;
            zulu[1] = oscar;
            mike = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    if(mike) { _fun00004_ip = 30; continue _fun00003 }
 10:
                    tango = _closure1_slot7;
                    zulu = _closure2_slot2;
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    _fun00004_ip = 53; continue _fun00003;
 30:
                    entity = _closure2_slot2;
                    if(entity) { _fun00004_ip = 53; continue _fun00003 }
 37:
                    zulu = _closure1_slot7;
                    mike = undefined;
                    entity = false;
                    entity = zulu.bind(mike)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['useUpdateIsOnStartStageScreenEffect'] = mike;
    return entity;
})();