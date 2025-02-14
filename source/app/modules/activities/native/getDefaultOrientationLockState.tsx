// app/modules/activities/native/getDefaultOrientationLockState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    mike = function(argFoo) { // Original name: getDefaultOrientationLockState
        _fun75869: for(var _fun75869_ip = 0; ; ) switch(_fun75869_ip) {
 0:
            zulu = argFoo;
            tango = null;
            if(!(tango == zulu)) { _fun75869_ip = 13; continue _fun75869 }
 9:
            entity = undefined;
            return entity;
 13:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 1;
            entity = mike[entity];
            mike = undefined;
            report = report.bind(mike)(entity);
            entity = report.isIpadOS;
            entity = entity.bind(report)();
            zulu = zulu.embeddedActivityConfig;
            tango = tango == zulu;
            if(entity) { _fun75869_ip = 74; continue _fun75869 }
 61:
            entity = undefined;
            if(tango) { _fun75869_ip = 72; continue _fun75869 }
 66:
            entity = zulu.default_orientation_lock_state;
 72:
            _fun75869_ip = 88; continue _fun75869;
 74:
            mike = undefined;
            if(tango) { _fun75869_ip = 85; continue _fun75869 }
 79:
            mike = zulu.tablet_default_orientation_lock_state;
 85:
            entity = mike;
 88:
            return entity;
        }
    };
    var _closure1_slot3 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 2;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/activities/native/getDefaultOrientationLockState.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo, argBar) { // Original name: setOrientationLockState
        _fun75870: for(var _fun75870_ip = 0; ; ) switch(_fun75870_ip) {
 0:
            report = argFoo;
            tango = argBar;
            entity = null;
            if(!(entity == tango)) { _fun75870_ip = 26; continue _fun75870 }
 12:
            zulu = _closure1_slot3;
            mike = undefined;
            tango = zulu.bind(mike)(report);
 26:
            if(!(entity != tango)) { _fun75870_ip = 90; continue _fun75870 }
 30:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 0;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            oscar = 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE';
            entity['type'] = oscar;
            report = report.id;
            entity['applicationId'] = report;
            entity['lockState'] = tango;
            entity = mike.bind(zulu)(entity);
 90:
            entity = undefined;
            return entity;
        }
    };
    zulu['setOrientationLockState'] = tango;
    zulu['getDefaultOrientationLockState'] = mike;
    return entity;
})();