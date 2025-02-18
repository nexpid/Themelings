// app/modules/favorites/useIsFavoritesGuildVisible.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    michal = function(argFoo, argBar, argBaz) { // Original name: isFavoritesGuildVisible
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = argBaz;
            var _closure2_slot1 = entity;
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            report = undefined;
            verify = zuuluu.bind(report)(entity);
            option = verify.getCurrentConfig;
            golfie = {};
            entity = 'isFavoritesGuildVisible';
            golfie['location'] = entity;
            zuuluu = {};
            entity = false;
            zuuluu['autoTrackExposure'] = entity;
            golfie = option.bind(verify)(golfie, zuuluu);
            zuuluu = golfie.canShow;
            golfie = golfie.isFavoritesPerk;
            if(golfie) { _fun00002_ip = 216; continue _fun00001 }
 93:
            if(zuuluu) { _fun00002_ip = 98; continue _fun00001 }
 96:
            return entity;
 98:
            zuuluu = oscard.getFavoriteChannels;
            verify = zuuluu.bind(oscard)();
            golfie = _closure1_slot1;
            zuuluu = _closure1_slot2;
            oscard = 5;
            zuuluu = zuuluu[oscard];
            golfie = golfie.bind(report)(zuuluu);
            zuuluu = golfie.isEmpty;
            zuuluu = zuuluu.bind(golfie)(verify);
            if(zuuluu) { _fun00002_ip = 214; continue _fun00001 }
 142:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            golfie = 6;
            golfie = michal[golfie];
            option = zuuluu.bind(report)(golfie);
            golfie = option.keys;
            option = golfie.bind(option)(verify);
            golfie = option.filter;
            tangon = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure2_slot0;
                    michal = tangon.getChannel;
                    entity = argFoo;
                    oscard = michal.bind(tangon)(entity);
                    entity = null;
                    entity = entity != oscard;
                    if(!entity) { _fun00004_ip = 80; continue _fun00003 }
 29:
                    michal = oscard.isPrivate;
                    michal = michal.bind(oscard)();
                    tangon = !michal;
                    michal = !tangon;
                    if(!tangon) { _fun00004_ip = 77; continue _fun00003 }
 48:
                    report = _closure2_slot1;
                    tangon = report.can;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.VIEW_CHANNEL;
                    michal = tangon.bind(report)(zuuluu, oscard);
 77:
                    entity = michal;
 80:
                    return entity;
                }
            };
            tangon = golfie.bind(option)(tangon);
            michal = michal[oscard];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.isEmpty;
            michal = michal.bind(zuuluu)(tangon);
            michal = !michal;
            return michal;
 214:
            return entity;
 216:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot7 = michal;
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
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot6 = report;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/favorites/useIsFavoritesGuildVisible.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() { // Original name: useIsFavoritesGuildVisible
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 4;
            entity = golfie[entity];
            tangon = undefined;
            option = report.bind(tangon)(entity);
            zuuluu = option.useFavoritesServerExperiment;
            entity = 'useIsFavoritesGuildVisible';
            entity = zuuluu.bind(option)(entity);
            zuuluu = entity.canShow;
            var _closure2_slot0 = zuuluu;
            entity = entity.isFavoritesPerk;
            zuuluu = 7;
            zuuluu = golfie[zuuluu];
            report = report.bind(tangon)(zuuluu);
            tangon = report.useStateFromStores;
            golfie = _closure1_slot5;
            zuuluu = new Array(3);
            zuuluu[0] = golfie;
            golfie = _closure1_slot3;
            zuuluu[1] = golfie;
            oscard = _closure1_slot4;
            zuuluu[2] = oscard;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot0;
                    if(!entity) { _fun00008_ip = 38; continue _fun00007 }
 10:
                    oscard = _closure1_slot7;
                    report = _closure1_slot5;
                    tangon = _closure1_slot3;
                    zuuluu = _closure1_slot4;
                    michal = undefined;
                    entity = oscard.bind(michal)(report, tangon, zuuluu);
 38:
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            zuuluu = !entity;
            entity = !zuuluu;
            if(!zuuluu) { _fun00006_ip = 130; continue _fun00005 }
 127:
            entity = michal;
 130:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['isFavoritesGuildVisible'] = michal;
    return entity;
})();