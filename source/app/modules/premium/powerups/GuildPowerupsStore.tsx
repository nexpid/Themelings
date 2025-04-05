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
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: recalculatedAppliedBoosts
        tangon = argFoo;
        entity = global;
        zuuluu = entity.Array;
        michal = zuuluu.from;
        entity = tangon.values;
        entity = entity.bind(tangon)();
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
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: getStateForGuild
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot5;
            michal = tangon.has;
            michal = michal.bind(tangon)(zuuluu);
            if(michal) { _fun00006_ip = 142; continue _fun00005 }
 23:
            report = _closure1_slot5;
            tangon = report.set;
            michal = {};
            oscard = global;
            golfie = oscard.Map;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            yankee = option;
            golfie = new yankee[golfie](offset);
            golfie = golfie instanceof Object ? golfie : option;
            michal['powerups'] = golfie;
            golfie = oscard.Map;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            yankee = option;
            golfie = new yankee[golfie](offset);
            golfie = golfie instanceof Object ? golfie : option;
            michal['unlocked'] = golfie;
            oscard = oscard.Map;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            yankee = golfie;
            oscard = new yankee[oscard](offset);
            oscard = oscard instanceof Object ? oscard : golfie;
            michal['catalog'] = oscard;
            oscard = 0;
            michal['appliedBoosts'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 142:
            michal = _closure1_slot5;
            entity = michal.get;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: recalculateState
        entity = argFoo;
        oscard = entity.guildId;
        report = entity.entitlements;
        entity = argBar;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot10;
        entity = undefined;
        golfie = tangon.bind(entity)(oscard);
        var _closure2_slot1 = golfie;
        tangon = report.forEach;
        michal = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                entity = _closure2_slot0;
                michal = _closure2_slot1;
                zuuluu = michal.unlocked;
                if(entity) { _fun00008_ip = 41; continue _fun00007 }
 23:
                michal = zuuluu.delete;
                entity = tangon.sku_id;
                entity = michal.bind(zuuluu)(entity);
                _fun00008_ip = 58; continue _fun00007;
 41:
                michal = zuuluu.set;
                entity = tangon.sku_id;
                entity = michal.bind(zuuluu)(entity, tangon);
 58:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal);
        tangon = _closure1_slot9;
        michal = golfie.unlocked;
        option = tangon.bind(entity)(michal);
        michal = global;
        report = michal.Map;
        offset = _closure1_slot5;
        tangon = report.prototype;
        tangon = Object.create(tangon, {constructor: {value: report}});
        yankee = tangon;
        michal = new yankee[report](offset, verify);
        michal = michal instanceof Object ? michal : tangon;
        report = michal.set;
        tangon = {};
        offset = tangon;
        verify = golfie;
        golfie = copyDataProperties(offset, verify);
        golfie = 'appliedBoosts';
        tangon[golfie] = option;
        tangon = report.bind(michal)(oscard, tangon);
        _closure1_slot5 = michal;
        return entity;
    };
    var _closure1_slot11 = entity;
    michal = global;
    verify = michal.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 0;
    golfie = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot0 = golfie;
    golfie = 1;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot1 = golfie;
    golfie = 2;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    golfie = 3;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 4;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    michal = michal.Map;
    golfie = michal.prototype;
    golfie = Object.create(golfie, {constructor: {value: michal}});
    foxtra = golfie;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot5 = michal;
    michal = {};
    var _closure1_slot6 = michal;
    michal = {};
    var _closure1_slot7 = michal;
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
                entity = _closure1_slot8;
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
                tangon = argFoo;
                entity = null;
                michal = entity != tangon;
                entity = undefined;
                if(!michal) { _fun00012_ip = 31; continue _fun00011 }
 14:
                zuuluu = _closure1_slot5;
                michal = zuuluu.get;
                entity = michal.bind(zuuluu)(tangon);
 31:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
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
        oscard = function(argFoo) { // Original name: value
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
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 6;
    michal = report[michal];
    romeon = oscard.bind(entity)(michal);
    michal = {};
    option = function() { // Original name: handleReset
        entity = global;
        entity = entity.Map;
        michal = entity.prototype;
        michal = Object.create(michal, {constructor: {value: entity}});
        zuuluu = michal;
        entity = new zuuluu[entity](michal);
        entity = entity instanceof Object ? entity : michal;
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
        offset = entity.powerups;
        verify = entity.catalog;
        michal = _closure1_slot10;
        entity = undefined;
        yankee = michal.bind(entity)(tangon);
        michal = global;
        golfie = michal.Map;
        romeon = _closure1_slot5;
        oscard = golfie.prototype;
        oscard = Object.create(oscard, {constructor: {value: golfie}});
        foxtra = oscard;
        report = new foxtra[golfie](romeon, yankee);
        report = report instanceof Object ? report : oscard;
        golfie = report.set;
        oscard = {};
        romeon = oscard;
        option = copyDataProperties(romeon, yankee);
        option = 'powerups';
        oscard[option] = offset;
        option = 'catalog';
        oscard[option] = verify;
        oscard = golfie.bind(report)(tangon, oscard);
        _closure1_slot5 = report;
        zuuluu = _closure1_slot6;
        report = michal.Date;
        michal = report.now;
        michal = michal.bind(report)();
        zuuluu[tangon] = michal;
        return entity;
    };
    michal['GUILD_POWERUP_CATALOG_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleGuildUnlockedPowerupsFetchSuccess
        entity = argFoo;
        tangon = entity.guildId;
        offset = entity.unlocked;
        michal = _closure1_slot10;
        entity = undefined;
        yankee = michal.bind(entity)(tangon);
        michal = _closure1_slot9;
        verify = michal.bind(entity)(offset);
        michal = global;
        golfie = michal.Map;
        romeon = _closure1_slot5;
        oscard = golfie.prototype;
        oscard = Object.create(oscard, {constructor: {value: golfie}});
        foxtra = oscard;
        report = new foxtra[golfie](romeon, yankee);
        report = report instanceof Object ? report : oscard;
        golfie = report.set;
        oscard = {};
        romeon = oscard;
        option = copyDataProperties(romeon, yankee);
        option = 'unlocked';
        oscard[option] = offset;
        option = 'appliedBoosts';
        oscard[option] = verify;
        oscard = golfie.bind(report)(tangon, oscard);
        _closure1_slot5 = report;
        zuuluu = _closure1_slot7;
        report = michal.Date;
        michal = report.now;
        michal = michal.bind(report)();
        zuuluu[tangon] = michal;
        return entity;
    };
    michal['GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleGuildPowerupCreated
        tangon = _closure1_slot11;
        entity = undefined;
        zuuluu = argFoo;
        michal = true;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['GUILD_POWERUP_ENTITLEMENTS_CREATE'] = option;
    tangon = function(argFoo) { // Original name: handleGuildPowerupDeleted
        tangon = _closure1_slot11;
        entity = undefined;
        zuuluu = argFoo;
        michal = false;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['GUILD_POWERUP_ENTITLEMENTS_DELETE'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[golfie](romeon, yankee, offset);
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