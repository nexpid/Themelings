// app/modules/analytics/updateDynamicSuperProperties.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 3;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/analytics/updateDynamicSuperProperties.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: updateDynamicSuperProperties
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = 0;
            report = zuuluu[oscard];
            entity = undefined;
            golfie = tangon.bind(entity)(report);
            report = golfie.getActiveSessionUnsafe;
            verify = report.bind(golfie)();
            report = 1;
            zuuluu = zuuluu[report];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getSuperProperties;
            option = zuuluu.bind(tangon)();
            tangon = {};
            golfie = null;
            offset = golfie == verify;
            zuuluu = undefined;
            if(offset) { _fun00002_ip = 75; continue _fun00001 }
 69:
            zuuluu = verify.uuid;
 75:
            offset = golfie == option;
            verify = undefined;
            if(offset) { _fun00002_ip = 90; continue _fun00001 }
 84:
            verify = option.client_heartbeat_session_id;
 90:
            if(!(zuuluu !== verify)) { _fun00002_ip = 100; continue _fun00001 }
 94:
            tangon['client_heartbeat_session_id'] = zuuluu;
 100:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            zuuluu = 2;
            zuuluu = offset[zuuluu];
            verify = verify.bind(entity)(zuuluu);
            zuuluu = verify.getState;
            zuuluu = zuuluu.bind(verify)();
            verify = golfie == option;
            golfie = undefined;
            if(verify) { _fun00002_ip = 145; continue _fun00001 }
 139:
            golfie = option.client_app_state;
 145:
            if(!(zuuluu !== golfie)) { _fun00002_ip = 155; continue _fun00001 }
 149:
            tangon['client_app_state'] = zuuluu;
 155:
            zuuluu = global;
            golfie = zuuluu.Object;
            zuuluu = golfie.keys;
            zuuluu = zuuluu.bind(golfie)(tangon);
            zuuluu = zuuluu.length;
            if(!(zuuluu > oscard)) { _fun00002_ip = 210; continue _fun00001 }
 182:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.extendSuperProperties;
            michal = michal.bind(zuuluu)(tangon);
 210:
            return entity;
        }
    };
    zuuluu['updateDynamicSuperProperties'] = michal;
    return entity;
})();