// app/modules/premium/powerups/GuildPowerupsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: calculateAppliedBoosts
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot6;
            michal = zuuluu.getGuild;
            entity = argFoo;
            yankee = michal.bind(zuuluu)(entity);
            offset = null;
            entity = offset == yankee;
            verify = undefined;
            zuuluu = undefined;
            if(entity) { _fun00004_ip = 54; continue _fun00003 }
 33:
            michal = yankee.hasFeature;
            entity = _closure1_slot10;
            entity = entity.PREMIUM_TIER_3_OVERRIDE;
            zuuluu = michal.bind(yankee)(entity);
 54:
            option = 0;
            michal = true;
            entity = 0;
            if(!(michal !== zuuluu)) { _fun00004_ip = 101; continue _fun00003 }
 64:
            zuuluu = _closure1_slot8;
            tangon = offset == yankee;
            michal = undefined;
            if(tangon) { _fun00004_ip = 83; continue _fun00003 }
 77:
            michal = yankee.premiumTier;
 83:
            if(!(offset == michal)) { _fun00004_ip = 97; continue _fun00003 }
 87:
            tangon = _closure1_slot9;
            michal = tangon.NONE;
 97:
            entity = zuuluu[michal];
 101:
            michal = global;
            tangon = michal.Object;
            zuuluu = tangon.entries;
            michal = _closure1_slot7;
            golfie = zuuluu.bind(tangon)(michal);
            michal = golfie.length;
            michal = option < michal;
            oscard = 2;
            report = 1;
            tangon = entity;
            zuuluu = 0;
            entity = tangon;
            if(!michal) { _fun00004_ip = 218; continue _fun00003 }
 150:
            foxtra = golfie[zuuluu];
            michal = _closure1_slot5;
            michal = michal.bind(verify)(foxtra, oscard);
            kiloes = michal[option];
            michal = michal[report];
            backup = offset != yankee;
            if(!backup) { _fun00004_ip = 190; continue _fun00003 }
 179:
            foxtra = yankee.hasFeature;
            backup = foxtra.bind(yankee)(kiloes);
 190:
            foxtra = tangon;
            if(!backup) { _fun00004_ip = 200; continue _fun00003 }
 196:
            foxtra = tangon + michal;
 200:
            zuuluu = zuuluu + 1;
            michal = golfie.length;
            tangon = foxtra;
            entity = tangon;
            if(zuuluu < michal) { _fun00004_ip = 150; continue _fun00003 }
 218:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getStateForGuild
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot11;
            tangon = zuuluu[michal];
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00006_ip = 67; continue _fun00005 }
 20:
            tangon = _closure1_slot13;
            zuuluu = undefined;
            report = tangon.bind(zuuluu)(michal);
            tangon = _closure1_slot11;
            zuuluu = {};
            oscard = {};
            zuuluu['allPowerups'] = oscard;
            oscard = {};
            zuuluu['unlockedPowerups'] = oscard;
            oscard = {};
            zuuluu['powerupCatalog'] = oscard;
            zuuluu['appliedBoosts'] = report;
            tangon[michal] = zuuluu;
 67:
            entity = _closure1_slot11;
            entity = entity[michal];
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: recalculateState
        entity = argFoo;
        report = entity.guildId;
        golfie = entity.entitlements;
        entity = argBar;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot14;
        entity = undefined;
        oscard = tangon.bind(entity)(report);
        var _closure2_slot1 = oscard;
        tangon = golfie.forEach;
        michal = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                tangon = _closure2_slot0;
                entity = _closure2_slot1;
                michal = entity.unlockedPowerups;
                entity = zuuluu.sku_id;
                if(tangon) { _fun00008_ip = 35; continue _fun00007 }
 29:
                tangon = delete michal[entity];
                _fun00008_ip = 39; continue _fun00007;
 35:
                michal[entity] = zuuluu;
 39:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(golfie)(michal);
        michal = {};
        option = _closure1_slot11;
        verify = michal;
        tangon = copyDataProperties(verify, option);
        tangon = {};
        verify = tangon;
        option = oscard;
        oscard = copyDataProperties(verify, option);
        oscard = _closure1_slot13;
        golfie = oscard.bind(entity)(report);
        oscard = 'appliedBoosts';
        tangon[oscard] = golfie;
        michal[report] = tangon;
        _closure1_slot11 = michal;
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.AppliedGuildBoostsRequiredForPremiumFeature;
    var _closure1_slot7 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot8 = option;
    option = michal.BoostedGuildTiers;
    var _closure1_slot9 = option;
    michal = michal.GuildFeatures;
    var _closure1_slot10 = michal;
    michal = {};
    var _closure1_slot11 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: GuildPowerupsStore
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot0;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot3;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot12;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 69; continue _fun00009 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00010_ip = 105; continue _fun00009;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot3;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = argFoo;
                entity = null;
                if(!(entity != michal)) { _fun00012_ip = 16; continue _fun00011 }
 9:
                _closure1_slot11 = michal;
 16:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getStateForGuild';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                michal = entity != zuuluu;
                entity = undefined;
                if(!michal) { _fun00014_ip = 25; continue _fun00013 }
 14:
                michal = _closure1_slot11;
                entity = michal[zuuluu];
 25:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'shouldFetchCatalogForGuild';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = _closure1_slot11;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                tangon = entity == michal;
                zuuluu = undefined;
                if(tangon) { _fun00016_ip = 33; continue _fun00015 }
 25:
                zuuluu = michal.catalogFetchCooldown;
 33:
                entity = entity == zuuluu;
                if(entity) { _fun00016_ip = 71; continue _fun00015 }
 40:
                michal = 86400000;
                zuuluu = zuuluu + michal;
                michal = global;
                tangon = michal.Date;
                michal = tangon.now;
                michal = michal.bind(tangon)();
                entity = zuuluu < michal;
 71:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'shouldFetchPowerupsForGuild';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = _closure1_slot11;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                tangon = entity == michal;
                zuuluu = undefined;
                if(tangon) { _fun00018_ip = 33; continue _fun00017 }
 25:
                zuuluu = michal.unlockedPowerupsFetchCooldown;
 33:
                entity = entity == zuuluu;
                if(entity) { _fun00018_ip = 71; continue _fun00017 }
 40:
                michal = 3600000;
                zuuluu = zuuluu + michal;
                michal = global;
                tangon = michal.Date;
                michal = tangon.now;
                michal = michal.bind(tangon)();
                entity = zuuluu < michal;
 71:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'hasFetchedPowerupCatalog';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                tangon = argFoo;
                zuuluu = null;
                entity = zuuluu != tangon;
                if(!entity) { _fun00020_ip = 46; continue _fun00019 }
 12:
                michal = _closure1_slot11;
                michal = michal[tangon];
                tangon = zuuluu == michal;
                zuuluu = undefined;
                if(tangon) { _fun00020_ip = 40; continue _fun00019 }
 32:
                zuuluu = michal.hasFetchedPowerupCatalog;
 40:
                michal = true;
                entity = michal === zuuluu;
 46:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'hasFetchedUnlockedPowerups';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                tangon = argFoo;
                zuuluu = null;
                entity = zuuluu != tangon;
                if(!entity) { _fun00022_ip = 46; continue _fun00021 }
 12:
                michal = _closure1_slot11;
                michal = michal[tangon];
                tangon = zuuluu == michal;
                zuuluu = undefined;
                if(tangon) { _fun00022_ip = 40; continue _fun00021 }
 32:
                zuuluu = michal.hasFetchedUnlockedPowerups;
 40:
                michal = true;
                entity = michal === zuuluu;
 46:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'GuildPowerupsStore';
    option['displayName'] = michal;
    option['persistKey'] = michal;
    michal = 10;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function() { // Original name: handleReset
        entity = {};
        _closure1_slot11 = entity;
        entity = undefined;
        return entity;
    };
    michal['LOGOUT'] = verify;
    verify = function(argFoo) { // Original name: handleGuildPowerupCatalogFetchSuccess
        entity = argFoo;
        report = entity.guildId;
        option = entity.allPowerups;
        golfie = entity.powerupCatalog;
        michal = _closure1_slot14;
        entity = undefined;
        oscard = michal.bind(entity)(report);
        michal = {};
        verify = _closure1_slot11;
        offset = michal;
        tangon = copyDataProperties(offset, verify);
        tangon = {};
        offset = tangon;
        verify = oscard;
        oscard = copyDataProperties(offset, verify);
        oscard = 'allPowerups';
        tangon[oscard] = option;
        oscard = 'powerupCatalog';
        tangon[oscard] = golfie;
        oscard = global;
        golfie = oscard.Date;
        oscard = golfie.now;
        golfie = oscard.bind(golfie)();
        oscard = 'catalogFetchCooldown';
        tangon[oscard] = golfie;
        golfie = true;
        oscard = 'hasFetchedPowerupCatalog';
        tangon[oscard] = golfie;
        michal[report] = tangon;
        _closure1_slot11 = michal;
        return entity;
    };
    michal['GUILD_POWERUP_CATALOG_FETCH_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleGuildUnlockedPowerupsFetchSuccess
        entity = argFoo;
        report = entity.guildId;
        option = entity.unlockedPowerups;
        michal = _closure1_slot14;
        entity = undefined;
        oscard = michal.bind(entity)(report);
        michal = _closure1_slot13;
        golfie = michal.bind(entity)(report);
        michal = {};
        verify = _closure1_slot11;
        offset = michal;
        tangon = copyDataProperties(offset, verify);
        tangon = {};
        offset = tangon;
        verify = oscard;
        oscard = copyDataProperties(offset, verify);
        oscard = 'unlockedPowerups';
        tangon[oscard] = option;
        oscard = 'appliedBoosts';
        tangon[oscard] = golfie;
        oscard = global;
        golfie = oscard.Date;
        oscard = golfie.now;
        golfie = oscard.bind(golfie)();
        oscard = 'unlockedPowerupsFetchCooldown';
        tangon[oscard] = golfie;
        golfie = true;
        oscard = 'hasFetchedUnlockedPowerups';
        tangon[oscard] = golfie;
        michal[report] = tangon;
        _closure1_slot11 = michal;
        return entity;
    };
    michal['GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleGuildPowerupCreated
        tangon = _closure1_slot15;
        entity = undefined;
        zuuluu = argFoo;
        michal = true;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['GUILD_POWERUP_ENTITLEMENTS_CREATE'] = verify;
    verify = function(argFoo) { // Original name: handleGuildPowerupDeleted
        tangon = _closure1_slot15;
        entity = undefined;
        zuuluu = argFoo;
        michal = false;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['GUILD_POWERUP_ENTITLEMENTS_DELETE'] = verify;
    tangon = function(argFoo) { // Original name: handleGuildUpdated
        entity = argFoo;
        entity = entity.guild;
        tangon = entity.id;
        zuuluu = _closure1_slot11;
        michal = {};
        oscard = _closure1_slot14;
        entity = undefined;
        golfie = oscard.bind(entity)(tangon);
        option = michal;
        oscard = copyDataProperties(option, golfie);
        report = _closure1_slot13;
        oscard = report.bind(entity)(tangon);
        report = 'appliedBoosts';
        michal[report] = oscard;
        zuuluu[tangon] = michal;
        return entity;
    };
    michal['GUILD_UPDATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/powerups/GuildPowerupsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();