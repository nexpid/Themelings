// app/modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx
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
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Consents;
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: usePersonalizedVoiceChannelUsers
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        verify = _closure1_slot1;
        zuuluu = 5;
        golfie = verify[zuuluu];
        tangon = undefined;
        yankee = report.bind(tangon)(golfie);
        offset = yankee.useStateFromStoresArray;
        golfie = _closure1_slot5;
        option = new Array(1);
        option[0] = golfie;
        romeon = oscard.id;
        golfie = new Array(2);
        golfie[0] = romeon;
        oscard = oscard.guild_id;
        golfie[1] = oscard;
        oscard = function() {
            tangon = _closure1_slot5;
            zuuluu = tangon.getVoiceStatesForChannelAlt;
            entity = _closure2_slot0;
            michal = entity.id;
            entity = entity.guild_id;
            zuuluu = zuuluu.bind(tangon)(michal, entity);
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                entity = entity.id;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = offset.bind(yankee)(option, oscard, golfie);
        var _closure2_slot1 = oscard;
        golfie = verify[zuuluu];
        yankee = report.bind(tangon)(golfie);
        offset = yankee.useStateFromStores;
        golfie = _closure1_slot2;
        option = new Array(1);
        option[0] = golfie;
        golfie = function() {
            michal = _closure1_slot2;
            entity = michal.getUserAffinitiesMap;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = offset.bind(yankee)(option, golfie);
        var _closure2_slot2 = golfie;
        option = verify[zuuluu];
        romeon = report.bind(tangon)(option);
        yankee = romeon.useStateFromStores;
        option = _closure1_slot3;
        offset = new Array(1);
        offset[0] = option;
        option = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.hasConsented;
            entity = _closure1_slot6;
            entity = entity.PERSONALIZATION;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        option = yankee.bind(romeon)(offset, option);
        var _closure2_slot3 = option;
        zuuluu = verify[zuuluu];
        report = report.bind(tangon)(zuuluu);
        tangon = report.useStateFromStoresArray;
        michal = _closure1_slot4;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(3);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot3;
                if(!zuuluu) { _fun00002_ip = 27; continue _fun00001 }
 12:
                zuuluu = _closure2_slot2;
                tangon = zuuluu.size;
                zuuluu = 0;
                if(!(!(tangon > zuuluu))) { _fun00002_ip = 33; continue _fun00001 }
 27:
                tangon = _closure2_slot1;
                _fun00002_ip = 84; continue _fun00001;
 33:
                oscard = _closure1_slot0;
                report = _closure1_slot1;
                zuuluu = 6;
                report = report[zuuluu];
                zuuluu = undefined;
                golfie = oscard.bind(zuuluu)(report);
                oscard = golfie.orderBy;
                report = _closure2_slot1;
                zuuluu = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure2_slot2;
                        michal = zuuluu.get;
                        entity = argFoo;
                        zuuluu = michal.bind(zuuluu)(entity);
                        entity = null;
                        tangon = entity == zuuluu;
                        michal = undefined;
                        if(tangon) { _fun00004_ip = 37; continue _fun00003 }
 31:
                        michal = zuuluu.affinity;
 37:
                        zuuluu = entity != michal;
                        entity = 0;
                        if(!zuuluu) { _fun00004_ip = 49; continue _fun00003 }
 46:
                        entity = michal;
 49:
                        return entity;
                    }
                };
                michal = 'desc';
                tangon = oscard.bind(golfie)(report, zuuluu, michal);
 84:
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.getUser;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    michal = null;
                    entity = argFoo;
                    entity = michal != entity;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();