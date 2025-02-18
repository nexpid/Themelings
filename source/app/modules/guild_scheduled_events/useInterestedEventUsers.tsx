// app/modules/guild_scheduled_events/useInterestedEventUsers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = tangon.useMemo;
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildScheduledEventUserResponses;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/useInterestedEventUsers.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useInterestedEventUsers
        offset = argFoo;
        zuuluu = argBar;
        var _closure2_slot0 = offset;
        var _closure2_slot1 = zuuluu;
        option = _closure1_slot0;
        verify = _closure1_slot1;
        golfie = 3;
        report = verify[golfie];
        tangon = undefined;
        backup = option.bind(tangon)(report);
        foxtra = backup.useStateFromStoresArray;
        report = _closure1_slot3;
        romeon = new Array(1);
        romeon[0] = report;
        yankee = new Array(1);
        yankee[0] = offset;
        oscard = function() {
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.values;
            oscard = _closure1_slot3;
            report = oscard.getUsersForGuildEvent;
            tangon = _closure2_slot0;
            entity = null;
            entity = report.bind(oscard)(tangon, entity);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = foxtra.bind(backup)(romeon, oscard, yankee);
        var _closure2_slot2 = oscard;
        golfie = verify[golfie];
        verify = option.bind(tangon)(golfie);
        option = verify.useStateFromStoresArray;
        golfie = new Array(1);
        golfie[0] = report;
        report = new Array(2);
        report[0] = offset;
        report[1] = zuuluu;
        zuuluu = function() {
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.values;
            oscard = _closure1_slot3;
            report = oscard.getUsersForGuildEvent;
            tangon = _closure2_slot0;
            entity = _closure2_slot1;
            entity = report.bind(oscard)(tangon, entity);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report = option.bind(verify)(golfie, zuuluu, report);
        var _closure2_slot3 = report;
        zuuluu = _closure1_slot2;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            tangon = _closure2_slot3;
            oscard = tangon.reduce;
            report = function(argFoo, argBar) {
                entity = argFoo;
                zuuluu = argBar;
                michal = zuuluu.user_id;
                entity[michal] = zuuluu;
                return entity;
            };
            zuuluu = {};
            zuuluu = oscard.bind(tangon)(report, zuuluu);
            var _closure3_slot0 = zuuluu;
            report = _closure2_slot2;
            zuuluu = report.filter;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    michal = _closure3_slot0;
                    entity = argFoo;
                    entity = entity.user_id;
                    michal = michal[entity];
                    entity = null;
                    entity = entity == michal;
                    if(entity) { _fun00002_ip = 52; continue _fun00001 }
 29:
                    zuuluu = michal.response;
                    michal = _closure1_slot4;
                    michal = michal.INTERESTED;
                    entity = zuuluu === michal;
 52:
                    return entity;
                }
            };
            report = zuuluu.bind(report)(entity);
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.response;
                entity = _closure1_slot4;
                entity = entity.INTERESTED;
                entity = michal === entity;
                return entity;
            };
            tangon = zuuluu.bind(tangon)(entity);
            entity = global;
            entity = entity.Set;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            verify = zuuluu;
            entity = new verify[entity](option);
            entity = entity instanceof Object ? entity : zuuluu;
            var _closure3_slot1 = entity;
            entity = new Array(0);
            var _closure3_slot2 = entity;
            zuuluu = function(argFoo) { // Original name: addUserToAllInterested
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    report = _closure3_slot1;
                    tangon = report.has;
                    zuuluu = entity.user_id;
                    zuuluu = tangon.bind(report)(zuuluu);
                    if(zuuluu) { _fun00004_ip = 63; continue _fun00003 }
 29:
                    tangon = _closure3_slot2;
                    zuuluu = tangon.push;
                    zuuluu = zuuluu.bind(tangon)(entity);
                    zuuluu = _closure3_slot1;
                    michal = zuuluu.add;
                    entity = entity.user_id;
                    entity = michal.bind(zuuluu)(entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            michal = report.forEach;
            michal = michal.bind(report)(zuuluu);
            michal = tangon.forEach;
            michal = michal.bind(tangon)(zuuluu);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();