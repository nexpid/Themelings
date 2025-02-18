// app/modules/activities/native/getDefaultOrientationLockState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    michal = function(argFoo) { // Original name: getDefaultOrientationLockState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = null;
            if(!(tangon == zuuluu)) { _fun00002_ip = 13; continue _fun00001 }
 9:
            entity = undefined;
            return entity;
 13:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 1;
            entity = michal[entity];
            michal = undefined;
            report = report.bind(michal)(entity);
            entity = report.isIpadOS;
            entity = entity.bind(report)();
            zuuluu = zuuluu.embeddedActivityConfig;
            tangon = tangon == zuuluu;
            if(entity) { _fun00002_ip = 74; continue _fun00001 }
 61:
            entity = undefined;
            if(tangon) { _fun00002_ip = 72; continue _fun00001 }
 66:
            entity = zuuluu.default_orientation_lock_state;
 72:
            _fun00002_ip = 88; continue _fun00001;
 74:
            michal = undefined;
            if(tangon) { _fun00002_ip = 85; continue _fun00001 }
 79:
            michal = zuuluu.tablet_default_orientation_lock_state;
 85:
            entity = michal;
 88:
            return entity;
        }
    };
    var _closure1_slot3 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 2;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/activities/native/getDefaultOrientationLockState.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo, argBar) { // Original name: setOrientationLockState
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            entity = null;
            if(!(entity == tangon)) { _fun00004_ip = 26; continue _fun00003 }
 12:
            zuuluu = _closure1_slot3;
            michal = undefined;
            tangon = zuuluu.bind(michal)(report);
 26:
            if(!(entity != tangon)) { _fun00004_ip = 90; continue _fun00003 }
 30:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 0;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            oscard = 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE';
            entity['type'] = oscard;
            report = report.id;
            entity['applicationId'] = report;
            entity['lockState'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 90:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['setOrientationLockState'] = tangon;
    zuuluu['getDefaultOrientationLockState'] = michal;
    return entity;
})();