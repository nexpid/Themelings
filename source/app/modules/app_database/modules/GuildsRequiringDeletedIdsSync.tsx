// app/modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: GuildsRequiringDeletedIdsSync
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot3;
            mike = _closure2_slot1;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            mike = {};
            report = function(argFoo, argBar) { // Original name: BACKGROUND_SYNC
                tango = _closure3_slot0;
                zulu = tango.handleBackgroundSync;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['BACKGROUND_SYNC'] = report;
            report = function(argFoo, argBar) { // Original name: CONNECTION_OPEN
                tango = _closure3_slot0;
                zulu = tango.handleConnectionOpen;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CONNECTION_OPEN'] = report;
            report = function(argFoo, argBar) { // Original name: GUILD_CREATE
                tango = _closure3_slot0;
                zulu = tango.handleGuildCreate;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['GUILD_CREATE'] = report;
            tango = function(argFoo, argBar) { // Original name: DELETED_ENTITY_IDS
                tango = _closure3_slot0;
                zulu = tango.handleDeletedEntityIds;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['DELETED_ENTITY_IDS'] = tango;
            zulu['actions'] = mike;
            return entity;
        };
        var _closure2_slot1 = zulu;
        report = {};
        mike = 'getAll';
        report['key'] = mike;
        golf = _closure1_slot2;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun60881: for(var _fun60881_ip = 0; ; ) switch(_fun60881_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun60881_ip = 153; continue _fun60881 }
 10:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.guildsRequiringDeletedIdsSync;
                    zulu = mike.bind(zulu)();
                    mike = null;
                    if(!(mike != zulu)) { _fun60881_ip = 122; continue _fun60881 }
 51:
                    mike = zulu.getMany;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=65);
 63:
                    return mike;
 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun60881_ip = 119; continue _fun60881 }
 71:
                    zulu = global;
                    report = zulu.Set;
                    tango = mike.map;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    oscar = tango.bind(mike)(zulu);
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    golf = tango;
                    zulu = new golf[report](oscar, report);
                    zulu = zulu instanceof Object ? zulu : tango;
                    return zulu;
 119:
                    return mike;
 122:
                    mike = global;
                    mike = mike.Set;
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    golf = zulu;
                    mike = new golf[mike](oscar);
                    mike = mike instanceof Object ? mike : zulu;
                    return mike;
 153:
                    return entity;
                }
            };
            return entity;
        };
        entity = golf.bind(mike)(entity);
        var _closure2_slot0 = entity;
        entity = function() { // Original name: getAll
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'handleConnectionOpen';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun60884: for(var _fun60884_ip = 0; ; ) switch(_fun60884_ip) {
 0:
                mike = argFoo;
                tango = mike.guilds;
                zulu = tango.filter;
                mike = function(argFoo) {
                    entity = argFoo;
                    entity = entity.unableToSyncDeletes;
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.map;
                entity = function(argFoo) {
                    entity = {};
                    mike = argFoo;
                    mike = mike.id;
                    entity['id'] = mike;
                    return entity;
                };
                zulu = mike.bind(zulu)(entity);
                mike = zulu.length;
                entity = 0;
                if(!(mike > entity)) { _fun60884_ip = 102; continue _fun60884 }
 52:
                tango = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                tango = tango.bind(entity)(mike);
                mike = tango.guildsRequiringDeletedIdsSyncTransaction;
                entity = argBar;
                mike = mike.bind(tango)(entity);
                entity = mike.putAll;
                entity = entity.bind(mike)(zulu);
 102:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'handleBackgroundSync';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun60887: for(var _fun60887_ip = 0; ; ) switch(_fun60887_ip) {
 0:
                mike = argFoo;
                tango = mike.guilds;
                zulu = tango.filter;
                mike = function(argFoo) {
                    _fun60888: for(var _fun60888_ip = 0; ; ) switch(_fun60888_ip) {
 0:
                        mike = argFoo;
                        zulu = mike.data_mode;
                        entity = 'partial';
                        entity = entity === zulu;
                        if(!entity) { _fun60888_ip = 26; continue _fun60888 }
 20:
                        entity = mike.unableToSyncDeletes;
 26:
                        return entity;
                    }
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.map;
                entity = function(argFoo) {
                    entity = {};
                    mike = argFoo;
                    mike = mike.id;
                    entity['id'] = mike;
                    return entity;
                };
                zulu = mike.bind(zulu)(entity);
                mike = zulu.length;
                entity = 0;
                if(!(mike > entity)) { _fun60887_ip = 102; continue _fun60887 }
 52:
                tango = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                tango = tango.bind(entity)(mike);
                mike = tango.guildsRequiringDeletedIdsSyncTransaction;
                entity = argBar;
                mike = mike.bind(tango)(entity);
                entity = mike.putAll;
                entity = entity.bind(mike)(zulu);
 102:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'handleGuildCreate';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun60890: for(var _fun60890_ip = 0; ; ) switch(_fun60890_ip) {
 0:
                entity = argFoo;
                tango = entity.guild;
                entity = tango.unableToSyncDeletes;
                if(!entity) { _fun60890_ip = 78; continue _fun60890 }
 17:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.guildsRequiringDeletedIdsSyncTransaction;
                entity = argBar;
                zulu = mike.bind(zulu)(entity);
                mike = zulu.put;
                entity = {};
                tango = tango.id;
                entity['id'] = tango;
                entity = mike.bind(zulu)(entity);
 78:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'handleDeletedEntityIds';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.guildsRequiringDeletedIdsSyncTransaction;
            mike = argBar;
            tango = zulu.bind(tango)(mike);
            zulu = tango.delete;
            mike = argFoo;
            mike = mike.guild_id;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'resetInMemoryState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    romeo = tango;
    mike = new romeo[mike](yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 4;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();