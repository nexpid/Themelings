// app/modules/calls/mobile/useIsCallActive.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo, argBar) { // Original name: checkIsCallActive
        _fun72265: for(var _fun72265_ip = 0; ; ) switch(_fun72265_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot2;
            zulu = report.isCallActive;
            entity = argBar;
            entity = zulu.bind(report)(tango, entity);
            if(!entity) { _fun72265_ip = 63; continue _fun72265 }
 28:
            zulu = _closure1_slot3;
            mike = zulu.getParticipants;
            tango = mike.bind(zulu)(tango);
            zulu = tango.some;
            mike = function(argFoo) {
                _fun72266: for(var _fun72266_ip = 0; ; ) switch(_fun72266_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.type;
                    entity = _closure1_slot4;
                    entity = entity.USER;
                    entity = zulu === entity;
                    if(!entity) { _fun72266_ip = 37; continue _fun72266 }
 28:
                    mike = mike.ringing;
                    entity = !mike;
 37:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike);
 63:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
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
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ParticipantTypes;
    var _closure1_slot4 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/calls/mobile/useIsCallActive.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: useIsCallActive
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        options = _closure1_slot2;
        zulu = new Array(2);
        zulu[0] = options;
        mike = _closure1_slot3;
        zulu[1] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            tango = _closure1_slot5;
            zulu = _closure2_slot0;
            mike = _closure2_slot1;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = report;
    zulu['checkIsCallActive'] = tango;
    mike = function(argFoo, argBar) { // Original name: useIsCallActiveNullable
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        options = _closure1_slot2;
        zulu = new Array(2);
        zulu[0] = options;
        mike = _closure1_slot3;
        zulu[1] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun72270: for(var _fun72270_ip = 0; ; ) switch(_fun72270_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun72270_ip = 39; continue _fun72270 }
 16:
                report = _closure1_slot5;
                tango = _closure2_slot0;
                zulu = _closure2_slot1;
                mike = undefined;
                entity = report.bind(mike)(tango, zulu);
 39:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useIsCallActiveNullable'] = mike;
    return entity;
})();