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
    golfie = tangon.BoostedGuildTiers;
    var _closure1_slot5 = golfie;
    tangon = tangon.GuildFeatures;
    var _closure1_slot6 = tangon;
    tangon = 4;
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
            report = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            golfie = undefined;
            entity = report.bind(golfie)(entity);
            entity = entity.bind(golfie)(tangon);
            oscard = _closure1_slot0;
            report = 3;
            tangon = verify[report];
            romeon = oscard.bind(golfie)(tangon);
            yankee = romeon.useStateFromStores;
            option = _closure1_slot3;
            offset = new Array(1);
            offset[0] = option;
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
            tangon = yankee.bind(romeon)(offset, tangon);
            report = verify[report];
            golfie = oscard.bind(golfie)(report);
            oscard = golfie.useStateFromStores;
            report = new Array(1);
            report[0] = option;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot3;
                    zuuluu = tangon.getGuild;
                    michal = _closure2_slot0;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = null;
                    tangon = michal == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00006_ip = 61; continue _fun00005 }
 35:
                    tangon = zuuluu.features;
                    zuuluu = tangon.has;
                    entity = _closure1_slot6;
                    entity = entity.PREMIUM_TIER_3_OVERRIDE;
                    michal = zuuluu.bind(tangon)(entity);
 61:
                    entity = true;
                    entity = entity === michal;
                    return entity;
                }
            };
            report = oscard.bind(golfie)(report, michal);
            michal = 0;
            if(report) { _fun00002_ip = 129; continue _fun00001 }
 121:
            zuuluu = _closure1_slot4;
            michal = zuuluu[tangon];
 129:
            entity = entity.available;
            entity = michal + entity;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getGuildPowerupBoostLevelProgress
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            entity = zuuluu[entity];
            zuuluu = undefined;
            tangon = tangon.bind(zuuluu)(entity);
            entity = tangon.getGuildPowerupsBoostCount;
            entity = entity.bind(tangon)(oscard);
            report = _closure1_slot3;
            tangon = report.getGuild;
            report = tangon.bind(report)(oscard);
            tangon = null;
            oscard = tangon == report;
            if(oscard) { _fun00008_ip = 68; continue _fun00007 }
 62:
            zuuluu = report.premiumTier;
 68:
            if(!(tangon == zuuluu)) { _fun00008_ip = 82; continue _fun00007 }
 72:
            tangon = _closure1_slot5;
            zuuluu = tangon.NONE;
 82:
            michal = _closure1_slot4;
            michal = michal[zuuluu];
            entity = entity.available;
            entity = michal + entity;
            return entity;
        }
    };
    zuuluu['getGuildPowerupBoostLevelProgress'] = michal;
    return entity;
})();