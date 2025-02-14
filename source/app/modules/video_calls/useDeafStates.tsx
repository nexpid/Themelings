// app/modules/video_calls/useDeafStates.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function(argFoo) { // Original name: getDeafStates
        _fun103580: for(var _fun103580_ip = 0; ; ) switch(_fun103580_ip) {
 0:
            report = argFoo;
            options = arguments[1];
            oscar = arguments[2];
            verify = arguments[3];
            zulu = undefined;
            if(!(options === zulu)) { _fun103580_ip = 25; continue _fun103580 }
 18:
            options = _closure1_slot4;
 25:
            if(!(oscar === zulu)) { _fun103580_ip = 36; continue _fun103580 }
 29:
            oscar = _closure1_slot3;
 36:
            if(!(verify === zulu)) { _fun103580_ip = 47; continue _fun103580 }
 40:
            verify = _closure1_slot2;
 47:
            mike = null;
            entity = mike != report;
            tango = null;
            if(!entity) { _fun103580_ip = 90; continue _fun103580 }
 58:
            golf = options.getVoiceState;
            entity = report.getGuildId;
            report = entity.bind(report)();
            entity = verify.getId;
            entity = entity.bind(verify)();
            tango = golf.bind(options)(report, entity);
 90:
            entity = {};
            report = oscar.isSelfDeaf;
            report = report.bind(oscar)();
            entity['selfDeaf'] = report;
            report = mike == tango;
            zulu = undefined;
            if(report) { _fun103580_ip = 122; continue _fun103580 }
 116:
            zulu = tango.deaf;
 122:
            mike = mike != zulu;
            if(!mike) { _fun103580_ip = 132; continue _fun103580 }
 129:
            mike = zulu;
 132:
            entity['deaf'] = mike;
            return entity;
        }
    };
    var _closure1_slot5 = mike;
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
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/video_calls/useDeafStates.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useDeafStates
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresObject;
        golf = _closure1_slot4;
        zulu = new Array(3);
        zulu[0] = golf;
        golf = _closure1_slot3;
        zulu[1] = golf;
        mike = _closure1_slot2;
        zulu[2] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            oscar = _closure1_slot5;
            offset = _closure2_slot0;
            verify = _closure1_slot4;
            options = _closure1_slot3;
            golf = _closure1_slot2;
            yankee = undefined;
            entity = yankee[oscar](offset, verify, options, golf, oscar);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    zulu['getDeafStates'] = mike;
    return entity;
})();