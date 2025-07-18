// app/modules/premium/powerups/experiments/VanityURLPerkExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = function(argFoo) { // Original name: eligibleForGuildExperiment
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00002_ip = 23; continue _fun00001 }
 12:
            michal = _closure1_slot1;
            entity = zuuluu !== michal;
 23:
            if(!entity) { _fun00002_ip = 37; continue _fun00001 }
 26:
            michal = _closure1_slot0;
            entity = zuuluu !== michal;
 37:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
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
    verify = {'enabled': false, 'rollbackEnabled': false};
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Enable ability to purchase Vanity URL Standalone Perk'};
    verify = {'enabled': true, 'rollbackEnabled': false};
    offset['config'] = verify;
    verify = new Array(2);
    verify[0] = offset;
    offset = {'id': 2, 'label': 'Rollback UI for Vanity URL Standalone Perk'};
    yankee = {'enabled': true, 'rollbackEnabled': true};
    offset['config'] = yankee;
    verify[1] = offset;
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
        entity = argFoo;
        tangon = _closure1_slot3;
        zuuluu = undefined;
        report = tangon.bind(zuuluu)(entity);
        tangon = _closure1_slot2;
        zuuluu = tangon.useExperiment;
        michal = {};
        michal['guildId'] = entity;
        entity = argBar;
        michal['location'] = entity;
        entity = {};
        report = !report;
        entity['disable'] = report;
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.enabled;
        return entity;
    };
    zuuluu['useVanityURLPerkExperimentEnabled'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useVanityURLPerkPurchaseEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot3;
            zuuluu = undefined;
            report = tangon.bind(zuuluu)(entity);
            tangon = _closure1_slot2;
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['guildId'] = entity;
            entity = argBar;
            michal['location'] = entity;
            entity = {};
            report = !report;
            entity['disable'] = report;
            report = false;
            entity['autoTrackExposure'] = report;
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = michal.enabled;
            if(!entity) { _fun00004_ip = 80; continue _fun00003 }
 71:
            michal = michal.rollbackEnabled;
            entity = !michal;
 80:
            return entity;
        }
    };
    zuuluu['useVanityURLPerkPurchaseEnabled'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useVanityURLPerkRollbackEnabled
        entity = argFoo;
        tangon = _closure1_slot3;
        zuuluu = undefined;
        report = tangon.bind(zuuluu)(entity);
        tangon = _closure1_slot2;
        zuuluu = tangon.useExperiment;
        michal = {};
        michal['guildId'] = entity;
        entity = argBar;
        michal['location'] = entity;
        entity = {};
        report = !report;
        entity['disable'] = report;
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.rollbackEnabled;
        return entity;
    };
    zuuluu['useVanityURLPerkRollbackEnabled'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getVanityURLPerkExperimentEnabled
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot3;
            entity = undefined;
            tangon = tangon.bind(entity)(michal);
            entity = !tangon;
            entity = !entity;
            if(!tangon) { _fun00006_ip = 69; continue _fun00005 }
 26:
            report = _closure1_slot2;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            zuuluu['guildId'] = michal;
            michal = argBar;
            zuuluu['location'] = michal;
            michal = {};
            oscard = false;
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = michal.enabled;
 69:
            return entity;
        }
    };
    zuuluu['getVanityURLPerkExperimentEnabled'] = michal;
    return entity;
})();