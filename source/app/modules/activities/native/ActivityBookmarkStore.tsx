// app/modules/activities/native/ActivityBookmarkStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    option = oscard.bind(entity)(tangon);
    report = option.create;
    tangon = function() {
        entity = {'channelId': null, 'guildId': null};
        return entity;
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot3 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/activities/native/ActivityBookmarkStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useActivityBookmarkStore'] = tangon;
    tangon = function(argFoo) { // Original name: setChannelId
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 2;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.setState;
            entity = {};
            tangon = _closure2_slot0;
            entity['channelId'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setChannelId'] = tangon;
    tangon = function(argFoo) { // Original name: setGuildId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            var _closure2_slot0 = option;
            tangon = null;
            if(!(tangon != option)) { _fun00002_ip = 76; continue _fun00001 }
 15:
            michal = global;
            oscard = michal.Object;
            report = oscard.values;
            golfie = _closure1_slot2;
            zuuluu = golfie.getMutableGuildChannelsForGuild;
            zuuluu = zuuluu.bind(golfie)(option);
            oscard = report.bind(oscard)(zuuluu);
            report = oscard.find;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.isGuildVoice;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu);
            var _closure2_slot1 = zuuluu;
            if(!(tangon == zuuluu)) { _fun00002_ip = 121; continue _fun00001 }
 76:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 2;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(tangon);
            report = oscard.batchUpdates;
            tangon = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.setState;
                entity = {};
                tangon = _closure2_slot0;
                entity['guildId'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            return zuuluu;
 121:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.batchUpdates;
            entity = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.setState;
                entity = {};
                report = _closure2_slot0;
                entity['guildId'] = report;
                tangon = _closure2_slot1;
                tangon = tangon.id;
                entity['channelId'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        }
    };
    zuuluu['setGuildId'] = tangon;
    michal = function() { // Original name: resetActivityBookmarkStore
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.setState;
            entity = {'channelId': null, 'guildId': null};
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetActivityBookmarkStore'] = michal;
    return entity;
})();