// app/modules/people/hooks/useFriendRequestCounts.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: getIncomingFriendRequestCount
        tangon = _closure1_slot2;
        zuuluu = undefined;
        michal = argFoo;
        entity = 2;
        zuuluu = tangon.bind(zuuluu)(michal, entity);
        entity = 0;
        michal = zuuluu[entity];
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = michal.getPendingCount;
        michal = entity.bind(michal)();
        entity = zuuluu.getPendingIncomingCount;
        entity = entity.bind(zuuluu)();
        entity = michal + entity;
        return entity;
    };
    var _closure1_slot5 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/people/hooks/useFriendRequestCounts.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getIncomingFriendRequestCount'] = tangon;
    tangon = function() { // Original name: useIncomingFriendRequestCount
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot4;
        michal = new Array(2);
        michal[0] = report;
        entity = _closure1_slot3;
        michal[1] = entity;
        entity = function() {
            zuuluu = _closure1_slot5;
            tangon = _closure1_slot4;
            michal = new Array(2);
            michal[0] = tangon;
            entity = _closure1_slot3;
            michal[1] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIncomingFriendRequestCount'] = tangon;
    michal = function() { // Original name: getOutgoingFriendRequestCount
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = arguments[0];
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00002_ip = 38; continue _fun00001 }
 9:
            michal = global;
            report = michal.o;
            entity = new Array(2);
            entity[0] = report;
            michal = michal.s;
            entity[1] = michal;
            tangon = entity;
 38:
            michal = _closure1_slot2;
            entity = 2;
            zuuluu = michal.bind(zuuluu)(tangon, entity);
            entity = 0;
            michal = zuuluu[entity];
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = michal.getOutgoingCount;
            michal = entity.bind(michal)();
            entity = zuuluu.getPendingOutgoingCount;
            entity = entity.bind(zuuluu)();
            entity = michal + entity;
            return entity;
        }
    };
    zuuluu['getOutgoingFriendRequestCount'] = michal;
    return entity;
})();