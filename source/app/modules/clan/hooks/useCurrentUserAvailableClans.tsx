// app/modules/clan/hooks/useCurrentUserAvailableClans.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function() { // Original name: useCurrentUserAvailableClans
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStoresArray;
        report = _closure1_slot5;
        michal = new Array(2);
        michal[0] = report;
        entity = _closure1_slot4;
        michal[1] = entity;
        entity = function() {
            zuuluu = _closure1_slot5;
            michal = zuuluu.getGuilds;
            zuuluu = michal.bind(zuuluu)();
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
            entity = michal[entity];
            michal = undefined;
            entity = tangon.bind(michal)(entity);
            michal = entity.bind(michal)(zuuluu);
            entity = michal.values;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = argFoo;
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 5;
                    entity = michal[entity];
                    michal = undefined;
                    report = report.bind(michal)(entity);
                    entity = report.isGuildAClan;
                    entity = entity.bind(report)(zuuluu);
                    if(!entity) { _fun00002_ip = 83; continue _fun00001 }
 42:
                    report = _closure1_slot4;
                    tangon = report.getSelfMember;
                    zuuluu = zuuluu.id;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = null;
                    report = zuuluu == tangon;
                    michal = undefined;
                    if(report) { _fun00002_ip = 79; continue _fun00001 }
 73:
                    michal = tangon.joinedAt;
 79:
                    entity = zuuluu != michal;
 83:
                    return entity;
                }
            };
            michal = michal.bind(zuuluu)(entity);
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot6 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/clan/hooks/useCurrentUserAvailableClans.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useCurrentUserAvailableClans'] = tangon;
    tangon = function() { // Original name: useUserAvailableGuildsWithTags
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStoresArray;
        report = _closure1_slot5;
        michal = new Array(2);
        michal[0] = report;
        entity = _closure1_slot4;
        michal[1] = entity;
        entity = function() {
            michal = _closure1_slot5;
            entity = michal.getGuilds;
            zuuluu = entity.bind(michal)();
            entity = global;
            michal = entity.Object;
            entity = michal.values;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 5;
                    entity = michal[entity];
                    michal = undefined;
                    report = report.bind(michal)(entity);
                    entity = report.guildSupportsTags;
                    entity = entity.bind(report)(zuuluu);
                    if(!entity) { _fun00004_ip = 83; continue _fun00003 }
 42:
                    report = _closure1_slot4;
                    tangon = report.getSelfMember;
                    zuuluu = zuuluu.id;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = null;
                    report = zuuluu == tangon;
                    michal = undefined;
                    if(report) { _fun00004_ip = 79; continue _fun00003 }
 73:
                    michal = tangon.joinedAt;
 79:
                    entity = zuuluu != michal;
 83:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useUserAvailableGuildsWithTags'] = tangon;
    michal = function() { // Original name: useCurrentUserAvailableClanIds
        tangon = _closure1_slot6;
        zuuluu = undefined;
        report = tangon.bind(zuuluu)();
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            entity = global;
            zuuluu = entity.Set;
            tangon = _closure2_slot0;
            michal = tangon.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            report = michal.bind(tangon)(entity);
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            oscard = michal;
            entity = new oscard[zuuluu](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useCurrentUserAvailableClanIds'] = michal;
    return entity;
})();