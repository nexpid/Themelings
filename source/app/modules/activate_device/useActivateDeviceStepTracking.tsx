// app/modules/activate_device/useActivateDeviceStepTracking.tsx
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
    tango = tango.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activate_device/useActivateDeviceStepTracking.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useActivateDeviceStepTracking
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot1;
        tango = _closure1_slot2;
        entity = 2;
        tango = tango[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        golf = tango.bind(entity)(oscar);
        var _closure2_slot1 = golf;
        report = _closure1_slot3;
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            _fun107498: for(var _fun107498_ip = 0; ; ) switch(_fun107498_ip) {
 0:
                mike = _closure2_slot0;
                entity = _closure2_slot1;
                if(!(mike !== entity)) { _fun107498_ip = 210; continue _fun107498 }
 18:
                entity = _closure2_slot0;
                mike = entity.type;
                entity = 'user-code-input';
                entity = entity !== mike;
                if(!entity) { _fun107498_ip = 59; continue _fun107498 }
 40:
                mike = _closure2_slot0;
                zulu = mike.type;
                mike = 'handoff';
                entity = mike !== zulu;
 59:
                verify = null;
                report = null;
                if(!entity) { _fun107498_ip = 118; continue _fun107498 }
 66:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.clientIdToActivateDevicePlatform;
                entity = _closure2_slot0;
                entity = entity.userCodeData;
                entity = entity.clientId;
                report = mike.bind(zulu)(entity);
 118:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 4;
                mike = tango[mike];
                golf = undefined;
                tango = zulu.bind(golf)(mike);
                zulu = tango.track;
                entity = _closure1_slot4;
                mike = entity.DEVICE_LINK_STEP;
                entity = {};
                options = _closure2_slot1;
                options = verify == options;
                if(options) { _fun107498_ip = 180; continue _fun107498 }
 171:
                options = _closure2_slot1;
                golf = options.type;
 180:
                entity['previous_step'] = golf;
                oscar = _closure2_slot0;
                oscar = oscar.type;
                entity['current_step'] = oscar;
                entity['platform_type'] = report;
                entity = zulu.bind(tango)(mike, entity);
 210:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useActivateDeviceStepTracking'] = mike;
    return entity;
})();