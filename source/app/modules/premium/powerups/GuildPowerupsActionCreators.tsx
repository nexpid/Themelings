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
            golfie = argFoo;
            var _closure2_slot0 = golfie;
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
            oscard = _closure1_slot5;
            oscard = oscard.STORE_PUBLISHED_LISTINGS_SKUS;
            entity['url'] = oscard;
            oscard = {};
            option = _closure1_slot3;
            oscard['application_id'] = option;
            entity['query'] = oscard;
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
                verify = global;
                offset = verify.Map;
                yankee = offset.prototype;
                yankee = Object.create(yankee, {constructor: {value: offset}});
                backup = yankee;
                offset = new backup[offset](foxtra);
                offset = offset instanceof Object ? offset : yankee;
                report['powerups'] = offset;
                verify = verify.Map;
                offset = verify.prototype;
                offset = Object.create(offset, {constructor: {value: verify}});
                backup = offset;
                verify = new backup[verify](foxtra);
                verify = verify instanceof Object ? verify : offset;
                report['catalog'] = verify;
                zuuluu = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        tangon = argBar;
                        oscard = entity.powerups;
                        report = entity.catalog;
                        zuuluu = oscard.set;
                        michal = tangon.skuId;
                        michal = zuuluu.bind(oscard)(michal, tangon);
                        zuuluu = report.get;
                        michal = tangon.type;
                        michal = zuuluu.bind(report)(michal);
                        oscard = null;
                        if(!(oscard == michal)) { _fun00006_ip = 76; continue _fun00005 }
 56:
                        golfie = report.set;
                        zuuluu = tangon.type;
                        michal = new Array(0);
                        michal = golfie.bind(report)(zuuluu, michal);
 76:
                        zuuluu = report.get;
                        michal = tangon.type;
                        zuuluu = zuuluu.bind(report)(michal);
                        michal = oscard == zuuluu;
                        if(michal) { _fun00006_ip = 107; continue _fun00005 }
 98:
                        report = zuuluu.push;
                        michal = oscard == report;
 107:
                        if(michal) { _fun00006_ip = 120; continue _fun00005 }
 110:
                        michal = zuuluu.push;
                        michal = michal.bind(zuuluu)(tangon);
 120:
                        return entity;
                    }
                };
                zuuluu = oscard.bind(option)(zuuluu, report);
                oscard = zuuluu.powerups;
                report = zuuluu.catalog;
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
                michal['powerups'] = oscard;
                michal['catalog'] = report;
                michal = zuuluu.bind(tangon)(michal);
                entity = entity.body;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
 115:
            romeon = _closure1_slot0;
            option = _closure1_slot2;
            michal = 3;
            tangon = option[michal];
            zuuluu = undefined;
            tangon = romeon.bind(zuuluu)(tangon);
            verify = tangon.MOCK_LEVELS;
            oscard = verify.concat;
            tangon = option[michal];
            tangon = romeon.bind(zuuluu)(tangon);
            tangon = tangon.MOCK_PERKS;
            verify = oscard.bind(verify)(tangon);
            oscard = global;
            tangon = oscard.Map;
            offset = tangon.prototype;
            offset = Object.create(offset, {constructor: {value: tangon}});
            output = offset;
            tangon = new output[tangon](sizing);
            tangon = tangon instanceof Object ? tangon : offset;
            backup = tangon.set;
            offset = _closure1_slot4;
            foxtra = offset.LEVEL;
            yankee = option[michal];
            yankee = romeon.bind(zuuluu)(yankee);
            yankee = yankee.MOCK_LEVELS;
            yankee = backup.bind(tangon)(foxtra, yankee);
            yankee = tangon.set;
            offset = offset.PERK;
            michal = option[michal];
            michal = romeon.bind(zuuluu)(michal);
            michal = michal.MOCK_PERKS;
            michal = yankee.bind(tangon)(offset, michal);
            michal = _closure1_slot1;
            entity = 2;
            entity = option[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.dispatch;
            entity = {};
            option = 'GUILD_POWERUP_CATALOG_FETCH_SUCCESS';
            entity['type'] = option;
            entity['guildId'] = golfie;
            option = verify.sort;
            golfie = function(argFoo, argBar) {
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
            option = option.bind(verify)(golfie);
            golfie = option.reduce;
            oscard = oscard.Map;
            verify = oscard.prototype;
            verify = Object.create(verify, {constructor: {value: oscard}});
            output = verify;
            oscard = new output[oscard](sizing);
            oscard = oscard instanceof Object ? oscard : verify;
            report = function(argFoo, argBar) {
                entity = argFoo;
                tangon = argBar;
                zuuluu = entity.set;
                michal = tangon.skuId;
                michal = zuuluu.bind(entity)(michal, tangon);
                return entity;
            };
            report = golfie.bind(option)(report, oscard);
            entity['powerups'] = report;
            entity['catalog'] = tangon;
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
                michal = global;
                michal = michal.Map;
                zuuluu = michal.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                verify = zuuluu;
                michal = new verify[michal](option);
                zuuluu = michal instanceof Object ? michal : zuuluu;
                michal = function(argFoo, argBar) {
                    entity = argFoo;
                    tangon = argBar;
                    zuuluu = entity.set;
                    michal = tangon.sku_id;
                    michal = zuuluu.bind(entity)(michal, tangon);
                    return entity;
                };
                report = tangon.bind(report)(michal, zuuluu);
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
                michal['unlocked'] = report;
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