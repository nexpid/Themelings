// app/modules/premium/powerups/GuildPowerupsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
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
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: recalculatedAppliedBoosts
        entity = global;
        zuuluu = entity.Object;
        michal = zuuluu.values;
        entity = argFoo;
        tangon = michal.bind(zuuluu)(entity);
        zuuluu = tangon.reduce;
        michal = function(argFoo, argBar) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argBar;
                zuuluu = entity.sku;
                michal = null;
                tangon = michal == zuuluu;
                entity = undefined;
                if(tangon) { _fun00004_ip = 41; continue _fun00003 }
 20:
                zuuluu = zuuluu.powerup_metadata;
                tangon = michal == zuuluu;
                entity = undefined;
                if(tangon) { _fun00004_ip = 41; continue _fun00003 }
 35:
                entity = zuuluu.boost_price;
 41:
                zuuluu = michal != entity;
                michal = 0;
                if(!zuuluu) { _fun00004_ip = 53; continue _fun00003 }
 50:
                michal = entity;
 53:
                entity = argFoo;
                entity = entity + michal;
                return entity;
            }
        };
        entity = 0;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getStateForGuild
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot5;
            tangon = zuuluu[michal];
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00006_ip = 58; continue _fun00005 }
 20:
            tangon = _closure1_slot5;
            zuuluu = {};
            report = {};
            zuuluu['allPowerups'] = report;
            report = {};
            zuuluu['unlockedPowerups'] = report;
            report = {};
            zuuluu['powerupCatalog'] = report;
            report = 0;
            zuuluu['appliedBoosts'] = report;
            tangon[michal] = zuuluu;
 58:
            entity = _closure1_slot5;
            entity = entity[michal];
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: recalculateState
        entity = argFoo;
        report = entity.guildId;
        golfie = entity.entitlements;
        entity = argBar;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot12;
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
        tangon = _closure1_slot11;
        michal = oscard.unlockedPowerups;
        golfie = tangon.bind(entity)(michal);
        michal = {};
        option = _closure1_slot5;
        verify = michal;
        tangon = copyDataProperties(verify, option);
        tangon = {};
        verify = tangon;
        option = oscard;
        oscard = copyDataProperties(verify, option);
        oscard = 'appliedBoosts';
        tangon[oscard] = golfie;
        michal[report] = tangon;
        _closure1_slot5 = michal;
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = report[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = {};
    var _closure1_slot5 = michal;
    michal = {};
    var _closure1_slot6 = michal;
    michal = {};
    var _closure1_slot7 = michal;
    michal = {};
    var _closure1_slot8 = michal;
    michal = {};
    var _closure1_slot9 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
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
                entity = _closure1_slot10;
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
        entity = 'getStateForGuild';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                michal = entity != zuuluu;
                entity = undefined;
                if(!michal) { _fun00012_ip = 25; continue _fun00011 }
 14:
                michal = _closure1_slot5;
                entity = michal[zuuluu];
 25:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'shouldFetchCatalogForGuild';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = _closure1_slot6;
                entity = argFoo;
                zuuluu = michal[entity];
                entity = null;
                entity = entity == zuuluu;
                if(entity) { _fun00014_ip = 54; continue _fun00013 }
 23:
                michal = 86400000;
                zuuluu = zuuluu + michal;
                michal = global;
                tangon = michal.Date;
                michal = tangon.now;
                michal = michal.bind(tangon)();
                entity = zuuluu < michal;
 54:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'shouldFetchPowerupsForGuild';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = _closure1_slot7;
                entity = argFoo;
                zuuluu = michal[entity];
                entity = null;
                entity = entity == zuuluu;
                if(entity) { _fun00016_ip = 54; continue _fun00015 }
 23:
                michal = 3600000;
                zuuluu = zuuluu + michal;
                michal = global;
                tangon = michal.Date;
                michal = tangon.now;
                michal = michal.bind(tangon)();
                entity = zuuluu < michal;
 54:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'hasFetchedPowerupCatalog';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00018_ip = 29; continue _fun00017 }
 12:
                michal = _closure1_slot8;
                zuuluu = michal[zuuluu];
                michal = true;
                entity = michal === zuuluu;
 29:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'hasFetchedUnlockedPowerups';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00020_ip = 29; continue _fun00019 }
 12:
                michal = _closure1_slot9;
                zuuluu = michal[zuuluu];
                michal = true;
                entity = michal === zuuluu;
 29:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 6;
    michal = report[michal];
    yankee = oscard.bind(entity)(michal);
    michal = {};
    option = function() { // Original name: handleReset
        entity = {};
        _closure1_slot5 = entity;
        entity = {};
        _closure1_slot6 = entity;
        entity = {};
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    michal['LOGOUT'] = option;
    option = function(argFoo) { // Original name: handleGuildPowerupCatalogFetchSuccess
        entity = argFoo;
        tangon = entity.guildId;
        option = entity.allPowerups;
        golfie = entity.powerupCatalog;
        zuuluu = _closure1_slot12;
        entity = undefined;
        oscard = zuuluu.bind(entity)(tangon);
        zuuluu = {};
        verify = _closure1_slot5;
        offset = zuuluu;
        report = copyDataProperties(offset, verify);
        report = {};
        offset = report;
        verify = oscard;
        oscard = copyDataProperties(offset, verify);
        oscard = 'allPowerups';
        report[oscard] = option;
        oscard = 'powerupCatalog';
        report[oscard] = golfie;
        zuuluu[tangon] = report;
        _closure1_slot5 = zuuluu;
        report = _closure1_slot6;
        zuuluu = global;
        oscard = zuuluu.Date;
        zuuluu = oscard.now;
        zuuluu = zuuluu.bind(oscard)();
        report[tangon] = zuuluu;
        zuuluu = _closure1_slot8;
        michal = true;
        zuuluu[tangon] = michal;
        return entity;
    };
    michal['GUILD_POWERUP_CATALOG_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleGuildUnlockedPowerupsFetchSuccess
        entity = argFoo;
        tangon = entity.guildId;
        option = entity.unlockedPowerups;
        zuuluu = _closure1_slot12;
        entity = undefined;
        oscard = zuuluu.bind(entity)(tangon);
        zuuluu = _closure1_slot11;
        golfie = zuuluu.bind(entity)(option);
        zuuluu = {};
        verify = _closure1_slot5;
        offset = zuuluu;
        report = copyDataProperties(offset, verify);
        report = {};
        offset = report;
        verify = oscard;
        oscard = copyDataProperties(offset, verify);
        oscard = 'unlockedPowerups';
        report[oscard] = option;
        oscard = 'appliedBoosts';
        report[oscard] = golfie;
        zuuluu[tangon] = report;
        _closure1_slot5 = zuuluu;
        report = _closure1_slot7;
        zuuluu = global;
        oscard = zuuluu.Date;
        zuuluu = oscard.now;
        zuuluu = zuuluu.bind(oscard)();
        report[tangon] = zuuluu;
        zuuluu = _closure1_slot9;
        michal = true;
        zuuluu[tangon] = michal;
        return entity;
    };
    michal['GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleGuildPowerupCreated
        tangon = _closure1_slot13;
        entity = undefined;
        zuuluu = argFoo;
        michal = true;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['GUILD_POWERUP_ENTITLEMENTS_CREATE'] = option;
    tangon = function(argFoo) { // Original name: handleGuildPowerupDeleted
        tangon = _closure1_slot13;
        entity = undefined;
        zuuluu = argFoo;
        michal = false;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['GUILD_POWERUP_ENTITLEMENTS_DELETE'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    romeon = tangon;
    offset = michal;
    michal = new romeon[golfie](yankee, offset, verify);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 7;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/powerups/GuildPowerupsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();