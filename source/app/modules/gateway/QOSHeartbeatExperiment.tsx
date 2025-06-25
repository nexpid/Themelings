// app/modules/gateway/QOSHeartbeatExperiment.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    yankee = true;
    tangon['value'] = yankee;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    offset = false;
    var _closure1_slot2 = offset;
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    option = report.bind(entity)(tangon);
    golfie = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-06_qos_heartbeat', 'label': 'Websocket QOS Heartbeat'};
    verify = {};
    verify['enabled'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Send new QOS Heartbeat'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tangon['treatments'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/QOSHeartbeatExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: isQOSHeartbeatExperimentEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot3;
            zuuluu = tangon.getCurrentConfig;
            entity = {};
            report = '1';
            entity['location'] = report;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.enabled;
            zuuluu = entity;
            if(!zuuluu) { _fun00002_ip = 48; continue _fun00001 }
 41:
            tangon = _closure1_slot2;
            zuuluu = !tangon;
 48:
            if(!zuuluu) { _fun00002_ip = 102; continue _fun00001 }
 51:
            zuuluu = true;
            _closure1_slot2 = zuuluu;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.addBreadcrumb;
            michal = {};
            report = 'QOS Heartbeat Experiment Enabled';
            michal['message'] = report;
            michal = zuuluu.bind(tangon)(michal);
 102:
            return entity;
        }
    };
    zuuluu['isQOSHeartbeatExperimentEnabled'] = michal;
    return entity;
})();