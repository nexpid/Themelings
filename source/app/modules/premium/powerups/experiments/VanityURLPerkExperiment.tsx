// app/modules/premium/powerups/experiments/VanityURLPerkExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    yankee = true;
    tangon['value'] = yankee;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.FAVORITES;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'kind': 'guild', 'id': '2025-06_vanity_url_perk', 'label': 'Vanity URL Standalone Perk'};
    verify = {};
    offset = false;
    verify['enabled'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Enable ability to purchase Vanity URL Standalone Perk'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/powerups/experiments/VanityURLPerkExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['VanityURLPerkExperiment'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useVanityURLPerkExperimentEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            tangon = _closure1_slot2;
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['guildId'] = golfie;
            entity = argBar;
            michal['location'] = entity;
            entity = {};
            report = null;
            report = report != golfie;
            if(!report) { _fun00002_ip = 48; continue _fun00001 }
 40:
            option = _closure1_slot1;
            report = golfie !== option;
 48:
            if(!report) { _fun00002_ip = 59; continue _fun00001 }
 51:
            oscard = _closure1_slot0;
            report = golfie !== oscard;
 59:
            report = !report;
            entity['disable'] = report;
            report = false;
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['useVanityURLPerkExperimentEnabled'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getVanityURLPerkExperimentEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00004_ip = 83; continue _fun00003 }
 12:
            michal = _closure1_slot1;
            michal = zuuluu !== michal;
            if(!michal) { _fun00004_ip = 34; continue _fun00003 }
 26:
            report = _closure1_slot0;
            michal = zuuluu !== report;
 34:
            if(!michal) { _fun00004_ip = 80; continue _fun00003 }
 37:
            oscard = _closure1_slot2;
            report = oscard.getCurrentConfig;
            tangon = {};
            tangon['guildId'] = zuuluu;
            zuuluu = argBar;
            tangon['location'] = zuuluu;
            zuuluu = {};
            golfie = false;
            zuuluu['autoTrackExposure'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            michal = zuuluu.enabled;
 80:
            entity = michal;
 83:
            return entity;
        }
    };
    zuuluu['getVanityURLPerkExperimentEnabled'] = michal;
    return entity;
})();