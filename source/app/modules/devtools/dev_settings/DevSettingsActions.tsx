// app/modules/devtools/dev_settings/DevSettingsActions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    tango = function(argFoo, argBar) { // Original name: toggle
        _fun98797: for(var _fun98797_ip = 0; ; ) switch(_fun98797_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            mike = 'boolean';
            entity = typeof report;
            if(!(mike !== entity)) { _fun98797_ip = 37; continue _fun98797 }
 17:
            mike = _closure1_slot2;
            entity = mike.get;
            entity = entity.bind(mike)(oscar);
            report = !entity;
 37:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'DEV_TOOLS_DEV_SETTING_SET';
            mike['type'] = golf;
            mike['toggle'] = oscar;
            mike['value'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot3 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = oscar[entity];
    entity = undefined;
    report = golf.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 2;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/devtools/dev_settings/DevSettingsActions.tsx';
    report = oscar.bind(golf)(report);
    zulu['toggle'] = tango;
    mike = function() { // Original name: clearAll
        _fun98798: for(var _fun98798_ip = 0; ; ) switch(_fun98798_ip) {
 0:
            mike = _closure1_slot2;
            entity = mike.all;
            golf = entity.bind(mike)();
            entity = undefined;
            mike = false;
            for(zulu in golf)
 29:
            {
 38:
                offset = zulu;
                verify = _closure1_slot3;
                verify = verify.bind(entity)(offset, mike);
                _fun98798_ip = 29; continue _fun98798;
            }
 53:
            return entity;
        }
    };
    zulu['clearAll'] = mike;
    return entity;
})();