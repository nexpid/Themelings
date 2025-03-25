// app/modules/premium/powerups/GuildPowerupsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot7;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot7 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: recalculatedAppliedBoosts
        michal = argFoo;
        entity = michal.values;
        tangon = entity.bind(michal)();
        zuuluu = tangon.reduce;
        michal = function(argFoo, argBar) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argBar;
                zuuluu = entity.sku;
                michal = null;
                tangon = michal == zuuluu;
                entity = undefined;
                if(tangon) { _fun00006_ip = 41; continue _fun00005 }
 20:
                zuuluu = zuuluu.powerup_metadata;
                tangon = michal == zuuluu;
                entity = undefined;
                if(tangon) { _fun00006_ip = 41; continue _fun00005 }
 35:
                entity = zuuluu.boost_price;
 41:
                zuuluu = michal != entity;
                michal = 0;
                if(!zuuluu) { _fun00006_ip = 53; continue _fun00005 }
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
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: getStateForGuild
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot5;
            michal = tangon.has;
            michal = michal.bind(tangon)(zuuluu);
            if(michal) { _fun00008_ip = 142; continue _fun00007 }
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
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: recalculateState
        entity = argFoo;
        oscard = entity.guildId;
        report = entity.entitlements;
        entity = argBar;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot9;
        entity = undefined;
        golfie = tangon.bind(entity)(oscard);
        var _closure2_slot1 = golfie;
        tangon = report.forEach;
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                entity = _closure2_slot0;
                michal = _closure2_slot1;
                zuuluu = michal.unlocked;
                if(entity) { _fun00010_ip = 41; continue _fun00009 }
 23:
                michal = zuuluu.delete;
                entity = tangon.sku_id;
                entity = michal.bind(zuuluu)(entity);
                _fun00010_ip = 58; continue _fun00009;
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
        tangon = _closure1_slot8;
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
    var _closure1_slot10 = entity;
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
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: GuildPowerupsStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot6;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot4;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot1;
        report = {};
        oscard = 'getStateForGuild';
        report['key'] = oscard;
        entity = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot5;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 6;
    michal = report[michal];
    romeon = oscard.bind(entity)(michal);
    michal = {};
    option = function(argFoo) { // Original name: handleGuildPowerupCatalogFetchSuccess
        entity = argFoo;
        oscard = entity.guildId;
        verify = entity.powerups;
        option = entity.catalog;
        michal = _closure1_slot9;
        entity = undefined;
        offset = michal.bind(entity)(oscard);
        michal = global;
        report = michal.Map;
        yankee = _closure1_slot5;
        tangon = report.prototype;
        tangon = Object.create(tangon, {constructor: {value: report}});
        romeon = tangon;
        michal = new romeon[report](yankee, offset);
        michal = michal instanceof Object ? michal : tangon;
        report = michal.set;
        tangon = {};
        yankee = tangon;
        golfie = copyDataProperties(yankee, offset);
        golfie = 'powerups';
        tangon[golfie] = verify;
        golfie = 'catalog';
        tangon[golfie] = option;
        tangon = report.bind(michal)(oscard, tangon);
        _closure1_slot5 = michal;
        return entity;
    };
    michal['GUILD_POWERUP_CATALOG_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleGuildUnlockedPowerupsFetchSuccess
        entity = argFoo;
        oscard = entity.guildId;
        verify = entity.unlocked;
        michal = _closure1_slot9;
        entity = undefined;
        offset = michal.bind(entity)(oscard);
        michal = _closure1_slot8;
        option = michal.bind(entity)(verify);
        michal = global;
        report = michal.Map;
        yankee = _closure1_slot5;
        tangon = report.prototype;
        tangon = Object.create(tangon, {constructor: {value: report}});
        romeon = tangon;
        michal = new romeon[report](yankee, offset);
        michal = michal instanceof Object ? michal : tangon;
        report = michal.set;
        tangon = {};
        yankee = tangon;
        golfie = copyDataProperties(yankee, offset);
        golfie = 'unlocked';
        tangon[golfie] = verify;
        golfie = 'appliedBoosts';
        tangon[golfie] = option;
        tangon = report.bind(michal)(oscard, tangon);
        _closure1_slot5 = michal;
        return entity;
    };
    michal['GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleGuildPowerupCreated
        tangon = _closure1_slot10;
        entity = undefined;
        zuuluu = argFoo;
        michal = true;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['GUILD_POWERUP_ENTITLEMENTS_CREATE'] = option;
    tangon = function(argFoo) { // Original name: handleGuildPowerupDeleted
        tangon = _closure1_slot10;
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