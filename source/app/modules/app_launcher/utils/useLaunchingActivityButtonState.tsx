// app/modules/app_launcher/utils/useLaunchingActivityButtonState.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/utils/useLaunchingActivityButtonState.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useLaunchingActivityButtonState
        _fun118992: for(var _fun118992_ip = 0; ; ) switch(_fun118992_ip) {
 0:
            mike = argFoo;
            zulu = mike.applicationId;
            var _closure2_slot0 = zulu;
            zulu = mike.context;
            oscar = mike.launchingComponentId;
            golf = mike.onSubmissionComplete;
            var _closure2_slot1 = golf;
            report = undefined;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            options = zulu.type;
            tango = 'channel';
            mike = undefined;
            if(!(tango === options)) { _fun118992_ip = 74; continue _fun118992 }
 64:
            zulu = zulu.channel;
            mike = zulu.id;
 74:
            _closure2_slot2 = mike;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 2;
            mike = options[mike];
            verify = zulu.bind(report)(mike);
            options = verify.useStateFromStores;
            mike = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                tango = _closure1_slot4;
                zulu = tango.getLaunchState;
                mike = _closure2_slot0;
                entity = _closure2_slot2;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = options.bind(verify)(zulu, mike);
            zulu = null;
            zulu = zulu != mike;
            if(!zulu) { _fun118992_ip = 146; continue _fun118992 }
 140:
            zulu = mike.isLaunching;
 146:
            if(!zulu) { _fun118992_ip = 159; continue _fun118992 }
 149:
            mike = mike.componentId;
            zulu = mike === oscar;
 159:
            _closure2_slot3 = zulu;
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            mike = 3;
            mike = options[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.bind(report)(zulu);
            _closure2_slot4 = mike;
            oscar = _closure1_slot3;
            report = oscar.useEffect;
            tango = new Array(3);
            tango[0] = zulu;
            tango[1] = mike;
            tango[2] = golf;
            entity = function() {
                _fun118994: for(var _fun118994_ip = 0; ; ) switch(_fun118994_ip) {
 0:
                    mike = _closure2_slot3;
                    mike = !mike;
                    if(!mike) { _fun118994_ip = 17; continue _fun118994 }
 13:
                    mike = _closure2_slot4;
 17:
                    if(!mike) { _fun118994_ip = 40; continue _fun118994 }
 20:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun118994_ip = 40; continue _fun118994 }
 30:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
 40:
                    entity = undefined;
                    return entity;
                }
            };
            entity = report.bind(oscar)(entity, tango);
            entity = {};
            entity['submitting'] = zulu;
            entity['wasSubmitting'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();