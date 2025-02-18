// app/modules/message_request/hooks/useSortedMessageRequests.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/message_request/hooks/useSortedMessageRequests.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useSortedMessageRequests
        report = _closure1_slot0;
        golfie = _closure1_slot1;
        zuuluu = 4;
        oscard = golfie[zuuluu];
        tangon = undefined;
        yankee = report.bind(tangon)(oscard);
        offset = yankee.useStateFromStores;
        option = _closure1_slot3;
        verify = new Array(1);
        verify[0] = option;
        oscard = function() {
            michal = _closure1_slot3;
            entity = michal.getPrivateChannelsVersion;
            entity = entity.bind(michal)();
            return entity;
        };
        oscard = offset.bind(yankee)(verify, oscard);
        verify = golfie[zuuluu];
        yankee = report.bind(tangon)(verify);
        offset = yankee.useStateFromStoresArray;
        verify = new Array(2);
        verify[0] = option;
        option = _closure1_slot5;
        verify[1] = option;
        option = new Array(1);
        option[0] = oscard;
        oscard = function() {
            tangon = _closure1_slot3;
            zuuluu = tangon.getMutablePrivateChannels;
            zuuluu = zuuluu.bind(tangon)();
            var _closure3_slot0 = zuuluu;
            zuuluu = global;
            report = zuuluu.Array;
            tangon = report.from;
            oscard = _closure1_slot5;
            zuuluu = oscard.getMessageRequestChannelIds;
            zuuluu = zuuluu.bind(oscard)();
            report = tangon.bind(report)(zuuluu);
            tangon = report.map;
            zuuluu = function(argFoo) {
                michal = _closure3_slot0;
                entity = argFoo;
                entity = michal[entity];
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                michal = null;
                entity = argFoo;
                entity = michal != entity;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.sortChannelIds;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        };
        oscard = offset.bind(yankee)(verify, oscard, option);
        var _closure2_slot0 = oscard;
        zuuluu = golfie[zuuluu];
        option = report.bind(tangon)(zuuluu);
        golfie = option.useStateFromStoresObject;
        zuuluu = _closure1_slot4;
        report = new Array(1);
        report[0] = zuuluu;
        tangon = new Array(1);
        tangon[0] = oscard;
        zuuluu = function() {
            entity = {};
            var _closure3_slot0 = entity;
            tangon = _closure2_slot0;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getUser;
                    report = entity.recipients;
                    michal = 0;
                    michal = report[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00002_ip = 55; continue _fun00001 }
 39:
                    michal = _closure3_slot0;
                    entity = entity.id;
                    michal[entity] = zuuluu;
 55:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report = golfie.bind(option)(report, zuuluu, tangon);
        var _closure2_slot1 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            zuuluu = _closure2_slot0;
            michal = zuuluu.map;
            entity = function(argFoo) {
                michal = argFoo;
                entity = {};
                entity['channel'] = michal;
                zuuluu = _closure2_slot1;
                michal = michal.id;
                michal = zuuluu[michal];
                entity['user'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();