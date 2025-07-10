// app/modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: GuildsRequiringDeletedIdsSync
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot3;
            michal = _closure2_slot1;
            entity = undefined;
            michal = report.bind(entity)(zuuluu, michal);
            michal = {};
            report = function(argFoo, argBar) { // Original name: BACKGROUND_SYNC
                tangon = _closure3_slot0;
                zuuluu = tangon.handleBackgroundSync;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['BACKGROUND_SYNC'] = report;
            report = function(argFoo, argBar) { // Original name: CONNECTION_OPEN
                tangon = _closure3_slot0;
                zuuluu = tangon.handleConnectionOpen;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['CONNECTION_OPEN'] = report;
            report = function(argFoo, argBar) { // Original name: GUILD_CREATE
                tangon = _closure3_slot0;
                zuuluu = tangon.handleGuildCreate;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['GUILD_CREATE'] = report;
            tangon = function(argFoo, argBar) { // Original name: DELETED_ENTITY_IDS
                tangon = _closure3_slot0;
                zuuluu = tangon.handleDeletedEntityIds;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['DELETED_ENTITY_IDS'] = tangon;
            zuuluu['actions'] = michal;
            return entity;
        };
        var _closure2_slot1 = zuuluu;
        report = {};
        michal = 'getAll';
        report['key'] = michal;
        golfie = _closure1_slot2;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 153; continue _fun00001 }
 10:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.guildsRequiringDeletedIdsSync;
                    zuuluu = michal.bind(zuuluu)();
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00002_ip = 122; continue _fun00001 }
 51:
                    michal = zuuluu.getMany;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=65);
 63:
                    return michal;
 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 119; continue _fun00001 }
 71:
                    zuuluu = global;
                    report = zuuluu.Set;
                    tangon = michal.map;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    oscard = tangon.bind(michal)(zuuluu);
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    golfie = tangon;
                    zuuluu = new golfie[report](oscard, report);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    return zuuluu;
 119:
                    return michal;
 122:
                    michal = global;
                    michal = michal.Set;
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    golfie = zuuluu;
                    michal = new golfie[michal](oscard);
                    michal = michal instanceof Object ? michal : zuuluu;
                    return michal;
 153:
                    return entity;
                }
            };
            return entity;
        };
        entity = golfie.bind(michal)(entity);
        var _closure2_slot0 = entity;
        entity = function() { // Original name: getAll
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = 'handleConnectionOpen';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                tangon = michal.guilds;
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    entity = argFoo;
                    entity = entity.unableToSyncDeletes;
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.map;
                entity = function(argFoo) {
                    entity = {};
                    michal = argFoo;
                    michal = michal.id;
                    entity['id'] = michal;
                    return entity;
                };
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.length;
                entity = 0;
                if(!(michal > entity)) { _fun00004_ip = 102; continue _fun00003 }
 52:
                tangon = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(michal);
                michal = tangon.guildsRequiringDeletedIdsSyncTransaction;
                entity = argBar;
                michal = michal.bind(tangon)(entity);
                entity = michal.putAll;
                entity = entity.bind(michal)(zuuluu);
 102:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'handleBackgroundSync';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                tangon = michal.guilds;
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        michal = argFoo;
                        zuuluu = michal.data_mode;
                        entity = 'partial';
                        entity = entity === zuuluu;
                        if(!entity) { _fun00008_ip = 26; continue _fun00007 }
 20:
                        entity = michal.unable_to_sync_deletes;
 26:
                        return entity;
                    }
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.map;
                entity = function(argFoo) {
                    entity = {};
                    michal = argFoo;
                    michal = michal.id;
                    entity['id'] = michal;
                    return entity;
                };
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.length;
                entity = 0;
                if(!(michal > entity)) { _fun00006_ip = 102; continue _fun00005 }
 52:
                tangon = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(michal);
                michal = tangon.guildsRequiringDeletedIdsSyncTransaction;
                entity = argBar;
                michal = michal.bind(tangon)(entity);
                entity = michal.putAll;
                entity = entity.bind(michal)(zuuluu);
 102:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'handleGuildCreate';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                tangon = entity.guild;
                entity = tangon.unableToSyncDeletes;
                if(!entity) { _fun00010_ip = 78; continue _fun00009 }
 17:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.guildsRequiringDeletedIdsSyncTransaction;
                entity = argBar;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.put;
                entity = {};
                tangon = tangon.id;
                entity['id'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 78:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'handleDeletedEntityIds';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.guildsRequiringDeletedIdsSyncTransaction;
            michal = argBar;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.delete;
            michal = argFoo;
            michal = michal.guild_id;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'resetInMemoryState';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    romeon = tangon;
    michal = new romeon[michal](yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 4;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();