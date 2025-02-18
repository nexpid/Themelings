// app/modules/activate_device/useActivateDeviceStepTracking.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activate_device/useActivateDeviceStepTracking.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useActivateDeviceStepTracking
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot1;
        tangon = _closure1_slot2;
        entity = 2;
        tangon = tangon[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        golfie = tangon.bind(entity)(oscard);
        var _closure2_slot1 = golfie;
        report = _closure1_slot3;
        tangon = report.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                entity = _closure2_slot1;
                if(!(michal !== entity)) { _fun00002_ip = 210; continue _fun00001 }
 18:
                entity = _closure2_slot0;
                michal = entity.type;
                entity = 'user-code-input';
                entity = entity !== michal;
                if(!entity) { _fun00002_ip = 59; continue _fun00001 }
 40:
                michal = _closure2_slot0;
                zuuluu = michal.type;
                michal = 'handoff';
                entity = michal !== zuuluu;
 59:
                verify = null;
                report = null;
                if(!entity) { _fun00002_ip = 118; continue _fun00001 }
 66:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.clientIdToActivateDevicePlatform;
                entity = _closure2_slot0;
                entity = entity.userCodeData;
                entity = entity.clientId;
                report = michal.bind(zuuluu)(entity);
 118:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 4;
                michal = tangon[michal];
                golfie = undefined;
                tangon = zuuluu.bind(golfie)(michal);
                zuuluu = tangon.track;
                entity = _closure1_slot4;
                michal = entity.DEVICE_LINK_STEP;
                entity = {};
                option = _closure2_slot1;
                option = verify == option;
                if(option) { _fun00002_ip = 180; continue _fun00001 }
 171:
                option = _closure2_slot1;
                golfie = option.type;
 180:
                entity['previous_step'] = golfie;
                oscard = _closure2_slot0;
                oscard = oscard.type;
                entity['current_step'] = oscard;
                entity['platform_type'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
 210:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useActivateDeviceStepTracking'] = michal;
    return entity;
})();