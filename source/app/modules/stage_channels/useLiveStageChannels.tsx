// app/modules/stage_channels/useLiveStageChannels.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: useAllVisibleChannels
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        golfie = _closure1_slot2;
        zuuluu = 4;
        option = golfie[zuuluu];
        tangon = undefined;
        yankee = report.bind(tangon)(option);
        offset = yankee.useStateFromStoresArray;
        option = _closure1_slot3;
        verify = new Array(1);
        verify[0] = option;
        option = new Array(1);
        option[0] = oscard;
        oscard = function() {
            zuuluu = _closure2_slot0;
            michal = zuuluu.map;
            entity = function(argFoo) {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getChannel;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.filter;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 5;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.isNotNullish;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = offset.bind(yankee)(verify, oscard, option);
        var _closure2_slot1 = oscard;
        zuuluu = golfie[zuuluu];
        report = report.bind(tangon)(zuuluu);
        tangon = report.useStateFromStoresArray;
        michal = _closure1_slot4;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            zuuluu = _closure2_slot1;
            michal = zuuluu.filter;
            entity = function(argFoo) {
                tangon = _closure1_slot4;
                zuuluu = tangon.can;
                report = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                entity = report.bind(entity)(michal);
                michal = entity.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/stage_channels/useLiveStageChannels.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useLiveStageChannels
        option = argFoo;
        var _closure2_slot0 = option;
        zuuluu = _closure1_slot6;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        michal = 4;
        report = report[michal];
        michal = undefined;
        golfie = oscard.bind(michal)(report);
        oscard = golfie.useStateFromStoresArray;
        tangon = _closure1_slot5;
        report = new Array(1);
        report[0] = tangon;
        tangon = new Array(1);
        tangon[0] = option;
        entity = function() {
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.keys;
            report = _closure1_slot5;
            tangon = report.getStageInstancesByGuild;
            entity = _closure2_slot0;
            entity = tangon.bind(report)(entity);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = oscard.bind(golfie)(report, entity, tangon);
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    tangon = function() { // Original name: getAllLiveStageChannels
        michal = _closure1_slot5;
        entity = michal.getAllStageInstances;
        tangon = entity.bind(michal)();
        zuuluu = tangon.reduce;
        michal = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                report = _closure1_slot3;
                zuuluu = report.getChannel;
                michal = argBar;
                michal = michal.channel_id;
                zuuluu = zuuluu.bind(report)(michal);
                michal = null;
                michal = michal != zuuluu;
                if(!michal) { _fun00002_ip = 81; continue _fun00001 }
 37:
                oscard = _closure1_slot4;
                report = oscard.can;
                option = _closure1_slot0;
                golfie = _closure1_slot2;
                tangon = 3;
                golfie = golfie[tangon];
                tangon = undefined;
                tangon = option.bind(tangon)(golfie);
                tangon = tangon.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                michal = report.bind(oscard)(tangon, zuuluu);
 81:
                if(!michal) { _fun00002_ip = 94; continue _fun00001 }
 84:
                michal = entity.push;
                michal = michal.bind(entity)(zuuluu);
 94:
                return entity;
            }
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['getAllLiveStageChannels'] = tangon;
    michal = function() { // Original name: useAllLiveStageChannels
        zuuluu = _closure1_slot6;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 4;
        tangon = tangon[michal];
        michal = undefined;
        golfie = report.bind(michal)(tangon);
        oscard = golfie.useStateFromStores;
        entity = _closure1_slot5;
        report = new Array(1);
        report[0] = entity;
        tangon = function() {
            michal = _closure1_slot5;
            entity = michal.getAllStageInstances;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.channel_id;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = new Array(0);
        entity = oscard.bind(golfie)(report, tangon, entity);
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useAllLiveStageChannels'] = michal;
    return entity;
})();