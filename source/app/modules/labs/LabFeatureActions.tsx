// app/modules/labs/LabFeatureActions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = {};
    var _closure1_slot3 = tango;
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/labs/LabFeatureActions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: toggleLabFeature
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun00002_ip = 19; continue _fun00001 }
 12:
            mike = _closure1_slot3;
 19:
            report = mike.enabled;
            if(!(report === entity)) { _fun00002_ip = 48; continue _fun00001 }
 28:
            zulu = _closure1_slot2;
            mike = zulu.get;
            mike = mike.bind(zulu)(oscar);
            report = !mike;
 48:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 1;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'LAB_FEATURE_TOGGLE';
            mike['type'] = golf;
            mike['labFeature'] = oscar;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['toggleLabFeature'] = mike;
    return entity;
})();