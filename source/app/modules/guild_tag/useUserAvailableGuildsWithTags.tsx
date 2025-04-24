// app/modules/guild_tag/useUserAvailableGuildsWithTags.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_tag/useUserAvailableGuildsWithTags.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useUserAvailableGuildsWithTags
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStoresArray;
        report = _closure1_slot3;
        michal = new Array(2);
        michal[0] = report;
        entity = _closure1_slot2;
        michal[1] = entity;
        entity = function() {
            michal = _closure1_slot3;
            entity = michal.getGuilds;
            zuuluu = entity.bind(michal)();
            entity = global;
            michal = entity.Object;
            entity = michal.values;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = argFoo;
                    report = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 3;
                    entity = michal[entity];
                    michal = undefined;
                    report = report.bind(michal)(entity);
                    entity = report.guildSupportsTags;
                    entity = entity.bind(report)(zuuluu);
                    if(!entity) { _fun00002_ip = 83; continue _fun00001 }
 42:
                    oscard = _closure1_slot2;
                    report = oscard.getSelfMember;
                    tangon = zuuluu.id;
                    oscard = report.bind(oscard)(tangon);
                    report = null;
                    golfie = report == oscard;
                    tangon = undefined;
                    if(golfie) { _fun00002_ip = 79; continue _fun00001 }
 73:
                    tangon = oscard.joinedAt;
 79:
                    entity = report != tangon;
 83:
                    if(!entity) { _fun00002_ip = 112; continue _fun00001 }
 86:
                    tangon = zuuluu.profile;
                    zuuluu = null;
                    report = zuuluu == tangon;
                    michal = undefined;
                    if(report) { _fun00002_ip = 108; continue _fun00001 }
 103:
                    michal = tangon.tag;
 108:
                    entity = zuuluu != michal;
 112:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useUserAvailableGuildsWithTags'] = michal;
    return entity;
})();