// app/modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot4 = golfie;
    tangon = tangon.BoostedGuildTiers;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useGuildPowerupBoostLevelProgress
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 2;
            entity = option[entity];
            oscard = undefined;
            verify = golfie.bind(oscard)(entity);
            michal = verify.useGuildPowerupsExperimentEnabled;
            entity = 'useGuildPowerupsBoostCount';
            entity = michal.bind(verify)(report, entity);
            verify = _closure1_slot1;
            michal = 3;
            michal = option[michal];
            michal = verify.bind(oscard)(michal);
            michal = michal.bind(oscard)(report);
            report = 4;
            report = option[report];
            golfie = golfie.bind(oscard)(report);
            oscard = golfie.useStateFromStores;
            option = _closure1_slot3;
            report = new Array(1);
            report[0] = option;
            tangon = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot3;
                    zuuluu = tangon.getGuild;
                    entity = _closure2_slot0;
                    tangon = zuuluu.bind(tangon)(entity);
                    zuuluu = null;
                    report = zuuluu == tangon;
                    entity = undefined;
                    if(report) { _fun00004_ip = 41; continue _fun00003 }
 35:
                    entity = tangon.premiumTier;
 41:
                    if(!(zuuluu == entity)) { _fun00004_ip = 55; continue _fun00003 }
 45:
                    michal = _closure1_slot5;
                    entity = michal.NONE;
 55:
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(report, tangon);
            if(entity) { _fun00002_ip = 126; continue _fun00001 }
 118:
            entity = michal.total;
            _fun00002_ip = 144; continue _fun00001;
 126:
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu[tangon];
            michal = michal.available;
            entity = zuuluu + michal;
 144:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getGuildPowerupBoostLevelProgress
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argFoo;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 2;
            entity = oscard[entity];
            tangon = undefined;
            option = report.bind(tangon)(entity);
            michal = option.getGuildPowerupsExperimentEnabled;
            entity = 'useGuildPowerupsBoostCount';
            entity = michal.bind(option)(golfie, entity);
            michal = 3;
            michal = oscard[michal];
            report = report.bind(tangon)(michal);
            michal = report.getGuildPowerupsBoostCount;
            michal = michal.bind(report)(golfie);
            oscard = _closure1_slot3;
            report = oscard.getGuild;
            oscard = report.bind(oscard)(golfie);
            report = null;
            golfie = report == oscard;
            if(golfie) { _fun00006_ip = 98; continue _fun00005 }
 92:
            tangon = oscard.premiumTier;
 98:
            if(!(report == tangon)) { _fun00006_ip = 112; continue _fun00005 }
 102:
            report = _closure1_slot5;
            tangon = report.NONE;
 112:
            if(entity) { _fun00006_ip = 123; continue _fun00005 }
 115:
            entity = michal.total;
            _fun00006_ip = 141; continue _fun00005;
 123:
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu[tangon];
            michal = michal.available;
            entity = zuuluu + michal;
 141:
            return entity;
        }
    };
    zuuluu['getGuildPowerupBoostLevelProgress'] = michal;
    return entity;
})();