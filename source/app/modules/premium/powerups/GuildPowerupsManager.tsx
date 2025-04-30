// app/modules/premium/powerups/GuildPowerupsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: GuildPowerupsManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                golfie = _closure1_slot3;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                golfie = golfie.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot5;
                entity = _closure1_slot12;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 84; continue _fun00003 }
 71:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00004_ip = 118; continue _fun00003;
 84:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 118:
                entity = zuuluu.bind(tangon)(report, entity);
                zuuluu = global;
                zuuluu = zuuluu.Map;
                tangon = zuuluu.prototype;
                tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                backup = tangon;
                zuuluu = new backup[zuuluu](foxtra);
                report = zuuluu instanceof Object ? zuuluu : tangon;
                tangon = report.set;
                zuuluu = _closure1_slot10;
                michal = entity.handleSelectedGuildChange;
                michal = tangon.bind(report)(zuuluu, michal);
                entity['stores'] = michal;
                michal = {};
                zuuluu = entity.handleEntitlementUpdate;
                michal['GUILD_POWERUP_ENTITLEMENTS_CREATE'] = zuuluu;
                zuuluu = entity.handleEntitlementUpdate;
                michal['GUILD_POWERUP_ENTITLEMENTS_DELETE'] = zuuluu;
                zuuluu = entity.handleAppliedBoostUpdate;
                michal['GUILD_APPLIED_BOOSTS_UPDATE'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'handleSelectedGuildChange';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot10;
                michal = zuuluu.getGuildId;
                zuuluu = michal.bind(zuuluu)();
                tangon = null;
                if(!(tangon != zuuluu)) { _fun00006_ip = 236; continue _fun00005 }
 26:
                report = _closure1_slot8;
                michal = report.getGuild;
                michal = michal.bind(report)(zuuluu);
                if(!(tangon != michal)) { _fun00006_ip = 236; continue _fun00005 }
 47:
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                report = 9;
                oscard = option[report];
                tangon = undefined;
                offset = golfie.bind(tangon)(oscard);
                verify = offset.trackExposure;
                oscard = {};
                golfie = michal.id;
                oscard['guildId'] = golfie;
                golfie = 'GuildPowerupsManager';
                oscard['location'] = golfie;
                oscard = verify.bind(offset)(oscard);
                oscard = _closure1_slot0;
                report = option[report];
                oscard = oscard.bind(tangon)(report);
                report = oscard.getGuildPowerupsExperimentEnabled;
                michal = michal.id;
                michal = report.bind(oscard)(michal, golfie);
                if(!michal) { _fun00006_ip = 236; continue _fun00005 }
 134:
                report = _closure1_slot11;
                michal = report.shouldFetchCatalogForGuild;
                michal = michal.bind(report)(zuuluu);
                if(!michal) { _fun00006_ip = 185; continue _fun00005 }
 154:
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 10;
                michal = oscard[michal];
                report = report.bind(tangon)(michal);
                michal = report.fetchPowerupCatalogForGuild;
                michal = michal.bind(report)(zuuluu);
 185:
                report = _closure1_slot11;
                michal = report.shouldFetchPowerupsForGuild;
                michal = michal.bind(report)(zuuluu);
                if(!michal) { _fun00006_ip = 236; continue _fun00005 }
 205:
                michal = _closure1_slot0;
                report = _closure1_slot2;
                entity = 10;
                entity = report[entity];
                michal = michal.bind(tangon)(entity);
                entity = michal.fetchGuildUnlockedPowerups;
                entity = entity.bind(michal)(zuuluu);
 236:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'handleEntitlementUpdate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = this;
            entity = argFoo;
            michal = entity.guildId;
            entity = zuuluu.refreshGuildPowerups;
            entity = entity.bind(zuuluu)(michal);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'handleAppliedBoostUpdate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                entity = argFoo;
                zuuluu = entity.guildId;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                entity = 11;
                report = report[entity];
                entity = undefined;
                golfie = oscard.bind(entity)(report);
                oscard = golfie.getHasAllocateBoostPermission;
                report = _closure1_slot9;
                option = _closure1_slot8;
                michal = option.getGuild;
                michal = michal.bind(option)(zuuluu);
                report = oscard.bind(golfie)(report, michal);
                michal = true;
                if(!(michal === report)) { _fun00008_ip = 83; continue _fun00007 }
 72:
                michal = tangon.refreshGuildPowerups;
                michal = michal.bind(tangon)(zuuluu);
 83:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'refreshGuildPowerups';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 9;
                zuuluu = zuuluu[entity];
                entity = undefined;
                oscard = report.bind(entity)(zuuluu);
                report = oscard.getGuildPowerupsExperimentEnabled;
                zuuluu = 'GuildPowerupsManager';
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                if(!zuuluu) { _fun00010_ip = 103; continue _fun00009 }
 49:
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 10;
                michal = report[michal];
                oscard = zuuluu.bind(entity)(michal);
                michal = oscard.fetchGuildUnlockedPowerups;
                michal = michal.bind(oscard)(tangon);
                michal = 12;
                michal = report[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.fetchAppliedGuildBoostsForGuild;
                michal = michal.bind(zuuluu)(tangon);
 103:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/powerups/GuildPowerupsManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();