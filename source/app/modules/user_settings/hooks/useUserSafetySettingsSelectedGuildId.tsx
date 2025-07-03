// app/modules/user_settings/hooks/useUserSafetySettingsSelectedGuildId.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot3 = report;
    tangon = tangon.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot5 = tangon;
    tangon = function() { // Original name: useUserSafetySettingsSelectedGuildId
        michal = _closure1_slot4;
        entity = undefined;
        entity = michal.bind(entity)();
        entity = entity.selectedGuildId;
        return entity;
    };
    var _closure1_slot6 = tangon;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/user_settings/hooks/useUserSafetySettingsSelectedGuildId.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useUserSafetySettingsSelectedGuildId'] = tangon;
    tangon = function() {
        zuuluu = _closure1_slot4;
        michal = undefined;
        michal = zuuluu.bind(michal)();
        michal = michal.selectedGuildId;
        entity = _closure1_slot3;
        entity = michal === entity;
        return entity;
    };
    zuuluu['useAllServersOptionSelected'] = tangon;
    michal = function() {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot6;
            michal = undefined;
            tangon = tangon.bind(michal)();
            var _closure2_slot0 = tangon;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            tangon = 3;
            tangon = oscard[tangon];
            oscard = report.bind(michal)(tangon);
            report = oscard.useStateFromStores;
            golfie = _closure1_slot2;
            tangon = new Array(1);
            tangon[0] = golfie;
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = report.bind(oscard)(tangon, entity);
            entity = null;
            report = entity == tangon;
            if(report) { _fun00002_ip = 104; continue _fun00001 }
 78:
            report = tangon.features;
            tangon = report.has;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.HUB;
            michal = tangon.bind(report)(zuuluu);
 104:
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 114; continue _fun00001 }
 111:
            entity = michal;
 114:
            return entity;
        }
    };
    zuuluu['useIsSelectedGuildAHub'] = michal;
    return entity;
})();