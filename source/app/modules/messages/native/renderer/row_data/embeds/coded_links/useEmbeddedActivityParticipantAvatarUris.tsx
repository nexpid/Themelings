// app/modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useEmbeddedActivityParticipantAvatarUris
        zuuluu = argFoo;
        michal = zuuluu.activity;
        var _closure2_slot0 = michal;
        oscard = zuuluu.guildId;
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot2;
        golfie = tangon.useMemo;
        report = new Array(1);
        report[0] = michal;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = global;
                zuuluu = entity.Array;
                michal = zuuluu.from;
                entity = _closure2_slot0;
                tangon = null;
                oscard = tangon == entity;
                entity = undefined;
                if(oscard) { _fun00002_ip = 41; continue _fun00001 }
 31:
                report = _closure2_slot0;
                entity = report.userIds;
 41:
                if(!(tangon == entity)) { _fun00002_ip = 49; continue _fun00001 }
 45:
                entity = new Array(0);
 49:
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        michal = golfie.bind(tangon)(michal, report);
        var _closure2_slot2 = michal;
        option = _closure1_slot0;
        golfie = _closure1_slot1;
        report = 4;
        golfie = golfie[report];
        report = undefined;
        option = option.bind(report)(golfie);
        golfie = option.useStateFromStoresArray;
        zuuluu = _closure1_slot4;
        report = new Array(1);
        report[0] = zuuluu;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            zuuluu = _closure2_slot2;
            michal = zuuluu.map;
            entity = function(argFoo) {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getUser;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report = golfie.bind(option)(report, michal, zuuluu);
        var _closure2_slot3 = report;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            zuuluu = _closure2_slot3;
            michal = zuuluu.filter;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 3;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.isNotNullish;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.map;
            entity = function(argFoo) {
                tangon = argFoo;
                zuuluu = tangon.getAvatarURL;
                michal = _closure2_slot1;
                entity = 64;
                zuuluu = zuuluu.bind(tangon)(michal, entity);
                entity = global;
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = '';
                entity = michal.bind(entity)(zuuluu);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getEmbeddedActivityParticipantAvatarUris
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            tangon = michal.channelId;
            zuuluu = michal.guildId;
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.applicationId;
            var _closure2_slot1 = zuuluu;
            golfie = michal.activity;
            oscard = null;
            if(!(oscard == golfie)) { _fun00004_ip = 73; continue _fun00003 }
 40:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getEmbeddedActivitiesForChannel;
            tangon = michal.bind(zuuluu)(tangon);
            zuuluu = tangon.find;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.applicationId;
                entity = _closure2_slot1;
                entity = michal === entity;
                return entity;
            };
            golfie = zuuluu.bind(tangon)(michal);
 73:
            michal = global;
            tangon = michal.Array;
            zuuluu = tangon.from;
            option = oscard == golfie;
            report = undefined;
            michal = undefined;
            if(option) { _fun00004_ip = 103; continue _fun00003 }
 97:
            michal = golfie.userIds;
 103:
            if(!(oscard == michal)) { _fun00004_ip = 111; continue _fun00003 }
 107:
            michal = new Array(0);
 111:
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.getUser;
                    entity = argFoo;
                    report = michal.bind(zuuluu)(entity);
                    entity = null;
                    entity = entity == report;
                    zuuluu = undefined;
                    if(entity) { _fun00006_ip = 54; continue _fun00005 }
 32:
                    tangon = report.getAvatarURL;
                    michal = _closure2_slot0;
                    entity = 64;
                    zuuluu = tangon.bind(report)(michal, entity);
 54:
                    entity = global;
                    entity = entity.HermesInternal;
                    michal = entity.concat;
                    entity = '';
                    entity = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.filter;
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 3;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.isNotNullish;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getEmbeddedActivityParticipantAvatarUris'] = michal;
    return entity;
})();