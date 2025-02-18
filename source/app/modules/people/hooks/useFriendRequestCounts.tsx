// app/modules/people/hooks/useFriendRequestCounts.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: _getIncomingFriendRequestCount
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot2;
            zuuluu = undefined;
            michal = argBar;
            entity = 2;
            michal = tangon.bind(zuuluu)(michal, entity);
            entity = 0;
            zuuluu = michal[entity];
            entity = 1;
            michal = michal[entity];
            entity = zuuluu.getPendingCount;
            zuuluu = entity.bind(zuuluu)();
            entity = michal.getPendingIncomingCount;
            michal = entity.bind(michal)();
            tangon = argFoo;
            entity = zuuluu;
            if(!tangon) { _fun00002_ip = 67; continue _fun00001 }
 63:
            entity = zuuluu + michal;
 67:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/people/hooks/useFriendRequestCounts.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getIncomingFriendRequestCount
        tangon = _closure1_slot5;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 3;
        entity = zuuluu[entity];
        zuuluu = undefined;
        report = michal.bind(zuuluu)(entity);
        michal = report.getIsFriendTiersUIEnabled;
        entity = {};
        oscard = 'getIncomingFriendRequestCount';
        entity['location'] = oscard;
        michal = michal.bind(report)(entity);
        entity = argFoo;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['getIncomingFriendRequestCount'] = tangon;
    tangon = function() { // Original name: useIncomingFriendRequestCount
        tangon = _closure1_slot0;
        oscard = _closure1_slot1;
        michal = 3;
        michal = oscard[michal];
        zuuluu = undefined;
        option = tangon.bind(zuuluu)(michal);
        golfie = option.useIsFriendTiersUIEnabled;
        michal = {};
        verify = 'useIncomingFriendRequestCount';
        michal['location'] = verify;
        michal = golfie.bind(option)(michal);
        var _closure2_slot0 = michal;
        michal = 4;
        michal = oscard[michal];
        tangon = tangon.bind(zuuluu)(michal);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot4;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot3;
        michal[1] = report;
        entity = function() {
            tangon = _closure1_slot5;
            zuuluu = _closure2_slot0;
            report = _closure1_slot4;
            michal = new Array(2);
            michal[0] = report;
            entity = _closure1_slot3;
            michal[1] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIncomingFriendRequestCount'] = tangon;
    michal = function() { // Original name: getOutgoingFriendRequestCount
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = arguments[0];
            report = undefined;
            if(!(tangon === report)) { _fun00004_ip = 38; continue _fun00003 }
 9:
            michal = global;
            zuuluu = michal.o;
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = michal.s;
            entity[1] = michal;
            tangon = entity;
 38:
            zuuluu = _closure1_slot2;
            michal = 2;
            tangon = zuuluu.bind(report)(tangon, michal);
            michal = 0;
            zuuluu = tangon[michal];
            michal = 1;
            michal = tangon[michal];
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 3;
            entity = oscard[entity];
            report = tangon.bind(report)(entity);
            tangon = report.getIsFriendTiersUIEnabled;
            entity = {};
            oscard = 'getOutgoingFriendRequestCount';
            entity['location'] = oscard;
            tangon = tangon.bind(report)(entity);
            entity = zuuluu.getOutgoingCount;
            zuuluu = entity.bind(zuuluu)();
            entity = michal.getPendingOutgoingCount;
            michal = entity.bind(michal)();
            entity = zuuluu;
            if(!tangon) { _fun00004_ip = 138; continue _fun00003 }
 134:
            entity = zuuluu + michal;
 138:
            return entity;
        }
    };
    zuuluu['getOutgoingFriendRequestCount'] = michal;
    return entity;
})();