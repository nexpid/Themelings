// app/modules/user_settings/DataHarvestActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/DataHarvestActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: getDataHarvestStatus
        zuuluu = _closure1_slot1;
        oscard = _closure1_slot2;
        michal = 1;
        michal = oscard[michal];
        tangon = undefined;
        golfie = zuuluu.bind(tangon)(michal);
        zuuluu = golfie.dispatch;
        michal = {};
        option = 'LOAD_DATA_HARVEST_TYPE_START';
        michal['type'] = option;
        michal = zuuluu.bind(golfie)(michal);
        zuuluu = _closure1_slot0;
        michal = 2;
        michal = oscard[michal];
        michal = zuuluu.bind(tangon)(michal);
        tangon = michal.HTTP;
        zuuluu = tangon.get;
        michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        report = _closure1_slot3;
        report = report.USER_HARVEST;
        michal['url'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'UPDATE_DATA_HARVEST_TYPE';
            michal['type'] = report;
            report = argFoo;
            report = report.body;
            michal['harvestType'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.catch;
        entity = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'LOAD_DATA_HARVEST_TYPE_FAILURE';
            michal['type'] = report;
            report = argFoo;
            michal['error'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getDataHarvestStatus'] = tangon;
    michal = function(argFoo) { // Original name: requestDataHarvest
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.requestHarvest;
        entity = argFoo;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.then;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                tangon = null;
                michal = tangon != entity;
                if(!michal) { _fun00002_ip = 21; continue _fun00001 }
 12:
                zuuluu = entity.body;
                michal = tangon != zuuluu;
 21:
                if(!michal) { _fun00002_ip = 81; continue _fun00001 }
 24:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 1;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'UPDATE_DATA_HARVEST_TYPE';
                michal['type'] = report;
                report = entity.body;
                michal['harvestType'] = report;
                michal = zuuluu.bind(tangon)(michal);
 81:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['requestDataHarvest'] = michal;
    return entity;
})();