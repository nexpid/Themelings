// app/modules/premium/powerups/GuildPowerupsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GUILD_POWERUP_APPLICATION_ID;
    var _closure1_slot3 = golfie;
    tangon = tangon.GuildPowerupType;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot5 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/powerups/GuildPowerupsActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: guildPowerupsAckNotification
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_POWERUPS_ACK_NOTIFICATION';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['guildPowerupsAckNotification'] = tangon;
    tangon = function() { // Original name: guildPowerupsResetNotifications
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_POWERUPS_RESET_NOTIFICATIONS';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['guildPowerupsResetNotifications'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: fetchPowerupCatalogForGuild
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            tangon = true;
            entity = argBar;
            if(!(tangon !== entity)) { _fun00002_ip = 115; continue _fun00001 }
 18:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.httpGetWithCountryCodeQuery;
            entity = {};
            golfie = _closure1_slot5;
            golfie = golfie.STORE_PUBLISHED_LISTINGS_SKUS;
            entity['url'] = golfie;
            golfie = {};
            option = _closure1_slot3;
            golfie['application_id'] = option;
            entity['query'] = golfie;
            entity['oldFormErrors'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.then;
            entity = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                report = entity.body;
                tangon = report.map;
                michal = function(argFoo) {
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 5;
                    entity = zuuluu[entity];
                    tangon = undefined;
                    zuuluu = michal.bind(tangon)(entity);
                    entity = _closure3_slot0;
                    michal = entity.body;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                option = tangon.bind(report)(michal);
                oscard = option.filter;
                verify = _closure1_slot0;
                golfie = _closure1_slot2;
                tangon = 6;
                report = golfie[tangon];
                tangon = undefined;
                report = verify.bind(tangon)(report);
                report = report.isNotNullish;
                option = oscard.bind(option)(report);
                oscard = option.sort;
                report = function(argFoo, argBar) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        michal = entity.skuId;
                        entity = argBar;
                        entity = entity.skuId;
                        michal = michal >= entity;
                        entity = -1;
                        if(!michal) { _fun00004_ip = 34; continue _fun00003 }
 31:
                        entity = 1;
 34:
                        return entity;
                    }
                };
                option = oscard.bind(option)(report);
                oscard = option.reduce;
                report = {};
                verify = {};
                report['allPowerups'] = verify;
                verify = {};
                report['powerupCatalog'] = verify;
                zuuluu = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        tangon = argBar;
                        report = entity.allPowerups;
                        zuuluu = entity.powerupCatalog;
                        michal = tangon.skuId;
                        report[michal] = tangon;
                        michal = tangon.type;
                        michal = zuuluu[michal];
                        oscard = null;
                        if(!(oscard == michal)) { _fun00006_ip = 56; continue _fun00005 }
 43:
                        report = tangon.type;
                        michal = new Array(0);
                        zuuluu[report] = michal;
 56:
                        michal = tangon.type;
                        zuuluu = zuuluu[michal];
                        michal = oscard == zuuluu;
                        if(michal) { _fun00006_ip = 81; continue _fun00005 }
 72:
                        report = zuuluu.push;
                        michal = oscard == report;
 81:
                        if(michal) { _fun00006_ip = 94; continue _fun00005 }
 84:
                        michal = zuuluu.push;
                        michal = michal.bind(zuuluu)(tangon);
 94:
                        return entity;
                    }
                };
                zuuluu = oscard.bind(option)(zuuluu, report);
                oscard = zuuluu.allPowerups;
                report = zuuluu.powerupCatalog;
                zuuluu = _closure1_slot1;
                michal = 2;
                michal = golfie[michal];
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                golfie = 'GUILD_POWERUP_CATALOG_FETCH_SUCCESS';
                michal['type'] = golfie;
                golfie = _closure2_slot0;
                michal['guildId'] = golfie;
                michal['allPowerups'] = oscard;
                michal['powerupCatalog'] = report;
                michal = zuuluu.bind(tangon)(michal);
                entity = entity.body;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
 115:
            offset = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 3;
            tangon = golfie[michal];
            zuuluu = undefined;
            tangon = offset.bind(zuuluu)(tangon);
            verify = tangon.MOCK_LEVELS;
            option = verify.concat;
            tangon = golfie[michal];
            tangon = offset.bind(zuuluu)(tangon);
            tangon = tangon.MOCK_PERKS;
            option = option.bind(verify)(tangon);
            tangon = {};
            verify = _closure1_slot4;
            romeon = verify.LEVEL;
            yankee = golfie[michal];
            yankee = offset.bind(zuuluu)(yankee);
            yankee = yankee.MOCK_LEVELS;
            tangon[romeon] = yankee;
            verify = verify.PERK;
            michal = golfie[michal];
            michal = offset.bind(zuuluu)(michal);
            michal = michal.MOCK_PERKS;
            tangon[verify] = michal;
            michal = _closure1_slot1;
            entity = 2;
            entity = golfie[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.dispatch;
            entity = {};
            golfie = 'GUILD_POWERUP_CATALOG_FETCH_SUCCESS';
            entity['type'] = golfie;
            entity['guildId'] = oscard;
            golfie = option.sort;
            oscard = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    michal = entity.skuId;
                    entity = argBar;
                    entity = entity.skuId;
                    michal = michal >= entity;
                    entity = -1;
                    if(!michal) { _fun00008_ip = 34; continue _fun00007 }
 31:
                    entity = 1;
 34:
                    return entity;
                }
            };
            option = golfie.bind(option)(oscard);
            golfie = option.reduce;
            oscard = function(argFoo, argBar) {
                entity = argFoo;
                zuuluu = argBar;
                michal = zuuluu.skuId;
                entity[michal] = zuuluu;
                return entity;
            };
            report = {};
            report = golfie.bind(option)(oscard, report);
            entity['allPowerups'] = report;
            entity['powerupCatalog'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        }
    };
    zuuluu['fetchPowerupCatalogForGuild'] = tangon;
    tangon = function(argFoo) { // Original name: fetchGuildUnlockedPowerups
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            option = argFoo;
            oscard = arguments[1];
            var _closure2_slot0 = option;
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00010_ip = 20; continue _fun00009 }
 18:
            oscard = true;
 20:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 4;
            michal = golfie[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.httpGetWithCountryCodeQuery;
            michal = {};
            golfie = _closure1_slot5;
            report = golfie.GUILD_POWERUPS;
            report = report.bind(golfie)(option);
            michal['url'] = report;
            report = {};
            report['include_ends_at'] = oscard;
            michal['query'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            report = false;
            michal['rejectWithError'] = report;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function(argFoo) {
                entity = argFoo;
                report = entity.body;
                tangon = report.reduce;
                zuuluu = function(argFoo, argBar) {
                    entity = argFoo;
                    zuuluu = argBar;
                    michal = zuuluu.sku_id;
                    entity[michal] = zuuluu;
                    return entity;
                };
                michal = {};
                report = tangon.bind(report)(zuuluu, michal);
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 2;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.dispatch;
                michal = {};
                oscard = 'GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS';
                michal['type'] = oscard;
                oscard = _closure2_slot0;
                michal['guildId'] = oscard;
                michal['unlockedPowerups'] = report;
                michal = zuuluu.bind(tangon)(michal);
                entity = entity.body;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['fetchGuildUnlockedPowerups'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: enablePowerupForGuild
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        golfie = _closure1_slot5;
        oscard = golfie.GUILD_POWERUP_TOGGLE;
        report = argFoo;
        tangon = argBar;
        tangon = oscard.bind(golfie)(report, tangon);
        entity['url'] = tangon;
        tangon = true;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['enablePowerupForGuild'] = tangon;
    michal = function(argFoo, argBar) { // Original name: disablePowerupForGuild
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.del;
        entity = {};
        golfie = _closure1_slot5;
        oscard = golfie.GUILD_POWERUP_TOGGLE;
        report = argFoo;
        tangon = argBar;
        tangon = oscard.bind(golfie)(report, tangon);
        entity['url'] = tangon;
        tangon = true;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['disablePowerupForGuild'] = michal;
    return entity;
})();