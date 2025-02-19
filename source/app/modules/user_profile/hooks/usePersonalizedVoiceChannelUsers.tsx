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
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: usePersonalizedVoiceChannelUsers
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        option = _closure1_slot1;
        zuuluu = 5;
        golfie = option[zuuluu];
        tangon = undefined;
        yankee = report.bind(tangon)(golfie);
        offset = yankee.useStateFromStoresArray;
        golfie = _closure1_slot5;
        verify = new Array(1);
        verify[0] = golfie;
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
        oscard = offset.bind(yankee)(verify, oscard, golfie);
        var _closure2_slot1 = oscard;
        golfie = option[zuuluu];
        yankee = report.bind(tangon)(golfie);
        offset = yankee.useStateFromStores;
        golfie = _closure1_slot3;
        verify = new Array(1);
        verify[0] = golfie;
        golfie = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.hasConsented;
            entity = _closure1_slot6;
            entity = entity.PERSONALIZATION;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie = offset.bind(yankee)(verify, golfie);
        var _closure2_slot2 = golfie;
        zuuluu = option[zuuluu];
        report = report.bind(tangon)(zuuluu);
        tangon = report.useStateFromStoresArray;
        option = _closure1_slot4;
        zuuluu = new Array(2);
        zuuluu[0] = option;
        michal = _closure1_slot2;
        zuuluu[1] = michal;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot2;
                report = _closure2_slot1;
                if(michal) { _fun00002_ip = 21; continue _fun00001 }
 16:
                tangon = report;
                _fun00002_ip = 37; continue _fun00001;
 21:
                zuuluu = report.sort;
                michal = function(argFoo, argBar) {
                    tangon = _closure1_slot2;
                    zuuluu = tangon.compare;
                    michal = argFoo;
                    entity = argBar;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                tangon = zuuluu.bind(report)(michal);
 37:
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