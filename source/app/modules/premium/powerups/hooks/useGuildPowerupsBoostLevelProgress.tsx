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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot5 = golfie;
    tangon = tangon.BoostedGuildTiers;
    var _closure1_slot6 = tangon;
    tangon = 6;
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
            option = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 3;
            entity = verify[entity];
            golfie = undefined;
            oscard = option.bind(golfie)(entity);
            zuuluu = oscard.useGuildPowerupsExperimentEnabled;
            entity = 'useGuildPowerupsBoostCount';
            entity = zuuluu.bind(oscard)(report, entity);
            oscard = _closure1_slot1;
            zuuluu = 4;
            zuuluu = verify[zuuluu];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.bind(golfie)(report);
            oscard = 5;
            report = verify[oscard];
            romeon = option.bind(golfie)(report);
            yankee = romeon.useStateFromStores;
            report = _closure1_slot3;
            offset = new Array(1);
            offset[0] = report;
            report = function() {
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
                    michal = _closure1_slot6;
                    entity = michal.NONE;
 55:
                    return entity;
                }
            };
            report = yankee.bind(romeon)(offset, report);
            oscard = verify[oscard];
            option = option.bind(golfie)(oscard);
            golfie = option.useStateFromStores;
            verify = _closure1_slot4;
            oscard = new Array(1);
            oscard[0] = verify;
            michal = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.hasFetchedUnlockedPowerups;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = golfie.bind(option)(oscard, michal);
            if(entity) { _fun00002_ip = 165; continue _fun00001 }
 157:
            entity = zuuluu.total;
            _fun00002_ip = 191; continue _fun00001;
 165:
            michal = 0;
            if(!oscard) { _fun00002_ip = 188; continue _fun00001 }
 170:
            tangon = _closure1_slot5;
            tangon = tangon[report];
            zuuluu = zuuluu.available;
            michal = tangon + zuuluu;
 188:
            entity = michal;
 191:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getGuildPowerupBoostLevelProgress
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argFoo;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 3;
            entity = oscard[entity];
            report = undefined;
            option = zuuluu.bind(report)(entity);
            michal = option.getGuildPowerupsExperimentEnabled;
            entity = 'useGuildPowerupsBoostCount';
            entity = michal.bind(option)(golfie, entity);
            michal = 4;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.getGuildPowerupsBoostCount;
            zuuluu = michal.bind(zuuluu)(golfie);
            oscard = _closure1_slot3;
            michal = oscard.getGuild;
            oscard = michal.bind(oscard)(golfie);
            michal = null;
            option = michal == oscard;
            if(option) { _fun00006_ip = 98; continue _fun00005 }
 92:
            report = oscard.premiumTier;
 98:
            if(!(michal == report)) { _fun00006_ip = 112; continue _fun00005 }
 102:
            michal = _closure1_slot6;
            report = michal.NONE;
 112:
            oscard = _closure1_slot4;
            michal = oscard.hasFetchedUnlockedPowerups;
            oscard = michal.bind(oscard)(golfie);
            if(entity) { _fun00006_ip = 138; continue _fun00005 }
 130:
            entity = zuuluu.total;
            _fun00006_ip = 164; continue _fun00005;
 138:
            michal = 0;
            if(!oscard) { _fun00006_ip = 161; continue _fun00005 }
 143:
            tangon = _closure1_slot5;
            tangon = tangon[report];
            zuuluu = zuuluu.available;
            michal = tangon + zuuluu;
 161:
            entity = michal;
 164:
            return entity;
        }
    };
    zuuluu['getGuildPowerupBoostLevelProgress'] = michal;
    return entity;
})();