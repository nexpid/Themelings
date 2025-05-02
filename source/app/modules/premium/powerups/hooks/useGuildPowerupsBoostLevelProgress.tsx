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
    golfie = tangon.BoostedGuildTiers;
    var _closure1_slot6 = golfie;
    tangon = tangon.GuildFeatures;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useGuildPowerupBoostLevelProgress
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 3;
            entity = yankee[entity];
            option = undefined;
            report = verify.bind(option)(entity);
            zuuluu = report.useGuildPowerupsExperimentEnabled;
            entity = 'useGuildPowerupsBoostCount';
            entity = zuuluu.bind(report)(tangon, entity);
            report = _closure1_slot1;
            zuuluu = 4;
            zuuluu = yankee[zuuluu];
            zuuluu = report.bind(option)(zuuluu);
            zuuluu = zuuluu.bind(option)(tangon);
            tangon = 5;
            report = yankee[tangon];
            foxtra = verify.bind(option)(report);
            romeon = foxtra.useStateFromStores;
            offset = _closure1_slot3;
            golfie = new Array(1);
            golfie[0] = offset;
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
            golfie = romeon.bind(foxtra)(golfie, report);
            report = yankee[tangon];
            backup = verify.bind(option)(report);
            foxtra = backup.useStateFromStores;
            report = _closure1_slot4;
            romeon = new Array(1);
            romeon[0] = report;
            report = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.hasFetchedUnlockedPowerups;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = foxtra.bind(backup)(romeon, report);
            tangon = yankee[tangon];
            verify = verify.bind(option)(tangon);
            option = verify.useStateFromStores;
            tangon = new Array(1);
            tangon[0] = offset;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot3;
                    zuuluu = tangon.getGuild;
                    michal = _closure2_slot0;
                    tangon = zuuluu.bind(tangon)(michal);
                    michal = null;
                    zuuluu = michal == tangon;
                    michal = undefined;
                    if(zuuluu) { _fun00006_ip = 56; continue _fun00005 }
 35:
                    zuuluu = tangon.hasFeature;
                    entity = _closure1_slot7;
                    entity = entity.PREMIUM_TIER_3_OVERRIDE;
                    michal = zuuluu.bind(tangon)(entity);
 56:
                    entity = true;
                    entity = entity === michal;
                    return entity;
                }
            };
            option = option.bind(verify)(tangon, michal);
            tangon = 0;
            if(option) { _fun00002_ip = 196; continue _fun00001 }
 188:
            oscard = _closure1_slot5;
            tangon = oscard[golfie];
 196:
            if(entity) { _fun00002_ip = 207; continue _fun00001 }
 199:
            entity = zuuluu.total;
            _fun00002_ip = 225; continue _fun00001;
 207:
            michal = 0;
            if(!report) { _fun00002_ip = 222; continue _fun00001 }
 212:
            zuuluu = zuuluu.available;
            michal = tangon + zuuluu;
 222:
            entity = michal;
 225:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getGuildPowerupBoostLevelProgress
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
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
            if(option) { _fun00008_ip = 98; continue _fun00007 }
 92:
            report = oscard.premiumTier;
 98:
            if(!(michal == report)) { _fun00008_ip = 112; continue _fun00007 }
 102:
            michal = _closure1_slot6;
            report = michal.NONE;
 112:
            oscard = _closure1_slot4;
            michal = oscard.hasFetchedUnlockedPowerups;
            oscard = michal.bind(oscard)(golfie);
            if(entity) { _fun00008_ip = 138; continue _fun00007 }
 130:
            entity = zuuluu.total;
            _fun00008_ip = 164; continue _fun00007;
 138:
            michal = 0;
            if(!oscard) { _fun00008_ip = 161; continue _fun00007 }
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