// app/modules/forwarding/native/ForwardModalUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forwarding/native/ForwardModalUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = 'forward-modal';
    zulu['FORWARD_MODAL_KEY'] = tango;
    tango = function(argFoo) { // Original name: openForwardModal
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            verify = zulu.message;
            mike = zulu.source;
            options = zulu.initialSelectedDestinations;
            entity = undefined;
            if(!(options === entity)) { _fun00002_ip = 29; continue _fun00001 }
 25:
            options = new Array(0);
 29:
            zulu = zulu.forwardOptions;
            offset = _closure1_slot0;
            tango = _closure1_slot2;
            oscar = 2;
            oscar = tango[oscar];
            golf = offset.bind(entity)(oscar);
            oscar = golf.dismissKeyboard;
            oscar = oscar.bind(golf)();
            oscar = 3;
            oscar = tango[oscar];
            romeo = offset.bind(entity)(oscar);
            yankee = romeo.trackForwardStart;
            golf = verify.channel_id;
            oscar = verify.id;
            oscar = yankee.bind(romeo)(golf, oscar, mike);
            oscar = _closure1_slot1;
            report = 4;
            report = tango[report];
            golf = oscar.bind(entity)(report);
            oscar = golf.pushLazy;
            report = 6;
            report = tango[report];
            offset = offset.bind(entity)(report);
            report = 5;
            report = tango[report];
            tango = tango.paths;
            sizing = offset.bind(entity)(report, tango);
            tango = {};
            tango['message'] = verify;
            tango['initialSelectedDestinations'] = options;
            tango['forwardOptions'] = zulu;
            tango['source'] = mike;
            zulu = {};
            mike = 'modal';
            zulu['presentation'] = mike;
            backup = 'forward-modal';
            output = golf;
            kilo = tango;
            foxtrot = zulu;
            mike = output[oscar](sizing, kilo, backup, foxtrot, romeo);
            return entity;
        }
    };
    zulu['openForwardModal'] = tango;
    tango = function() { // Original name: closeForwardModal
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.popWithKey;
        mike = 'forward-modal';
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['closeForwardModal'] = tango;
    mike = function(argFoo) { // Original name: showForwardFailedAlertModal
        entity = argFoo;
        verify = entity.message;
        options = entity.failedDestinations;
        golf = entity.forwardOptions;
        tango = _closure1_slot3;
        zulu = tango.lazy;
        entity = function() {
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            mike = 6;
            mike = entity[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = 7;
            mike = entity[mike];
            entity = entity.paths;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        oscar = zulu.bind(tango)(entity);
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 8;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.openAlert;
        zulu = _closure1_slot4;
        mike = {};
        mike['message'] = verify;
        mike['failedDestinations'] = options;
        mike['forwardOptions'] = golf;
        zulu = zulu.bind(entity)(oscar, mike);
        mike = 'forward-failed-alert-modal';
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['showForwardFailedAlertModal'] = mike;
    return entity;
})();