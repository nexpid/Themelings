// discord_common/js/packages/kv-storage/js/api/GuildEntityDao.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    tango = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = function() {
        report = function(argFoo, argBar, argBaz) { // Original name: GuildEntityDao
            _fun38018: for(var _fun38018_ip = 0; ; ) switch(_fun38018_ip) {
 0:
                mike = argFoo;
                options = arguments[3];
                zulu = this;
                entity = undefined;
                if(!(options === entity)) { _fun38018_ip = 17; continue _fun38018 }
 15:
                options = true;
 17:
                oscar = _closure1_slot2;
                report = _closure2_slot0;
                report = oscar.bind(entity)(zulu, report);
                zulu['originalPrefix'] = mike;
                report = _closure1_slot0;
                oscar = _closure1_slot1;
                tango = 2;
                tango = oscar[tango];
                tango = report.bind(entity)(tango);
                golf = tango.Table;
                oscar = new Array(1);
                oscar[0] = mike;
                mike = golf.prototype;
                tango = Object.create(mike, {constructor: {value: golf}});
                yankee = argBar;
                offset = argBaz;
                foxtrot = tango;
                romeo = oscar;
                verify = options;
                mike = new foxtrot[golf](romeo, yankee, offset, verify, options);
                mike = mike instanceof Object ? mike : tango;
                zulu['table'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        entity = {};
        zulu = 'prefix';
        entity['key'] = zulu;
        zulu = function() { // Original name: get
            entity = this;
            entity = entity.table;
            entity = entity.prefix;
            return entity;
        };
        entity['get'] = zulu;
        zulu = new Array(19);
        zulu[0] = entity;
        entity = {};
        oscar = 'withoutLogging';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            oscar = _closure2_slot0;
            offset = entity.originalPrefix;
            mike = entity.table;
            verify = mike.tableId;
            entity = entity.table;
            options = entity.database;
            entity = oscar.prototype;
            mike = Object.create(entity, {constructor: {value: oscar}});
            golf = false;
            yankee = mike;
            entity = new yankee[oscar](offset, verify, options, golf, oscar);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = oscar;
        zulu[1] = entity;
        entity = {};
        oscar = 'get';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            zulu = entity.table;
            mike = zulu.get;
            entity = new Array(2);
            tango = argFoo;
            entity[0] = tango;
            tango = argBar;
            entity[1] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[2] = entity;
        entity = {};
        oscar = 'getMany';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity.table;
            zulu = tango.getMany;
            mike = new Array(1);
            entity = argFoo;
            mike[0] = entity;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[3] = entity;
        entity = {};
        oscar = 'getRange';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            entity = argFoo;
            mike = this;
            report = mike.table;
            tango = report.getRange;
            zulu = new Array(2);
            zulu[0] = entity;
            mike = argBar;
            zulu[1] = mike;
            mike = new Array(2);
            mike[0] = entity;
            entity = argBaz;
            mike[1] = entity;
            entity = argCorge;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[4] = entity;
        entity = {};
        oscar = 'getKvEntries';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.table;
            entity = mike.getKvEntries;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        zulu[5] = entity;
        entity = {};
        oscar = 'getMapEntries';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.table;
            entity = mike.getMapEntries;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        zulu[6] = entity;
        entity = {};
        oscar = 'getIds';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.table;
            mike = zulu.getChildIds;
            entity = new Array(1);
            tango = argFoo;
            entity[0] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[7] = entity;
        entity = {};
        oscar = 'getGuildIds';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            zulu = entity.table;
            mike = zulu.getChildIds;
            entity = new Array(0);
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[8] = entity;
        entity = {};
        oscar = 'getGuildId';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.table;
            mike = zulu.getParentId;
            entity = [null];
            tango = argFoo;
            entity[1] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[9] = entity;
        entity = {};
        oscar = 'put';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun38029: for(var _fun38029_ip = 0; ; ) switch(_fun38029_ip) {
 0:
                mike = arguments[2];
                tango = this;
                zulu = argFoo;
                var _closure3_slot0 = zulu;
                zulu = argBar;
                var _closure3_slot1 = zulu;
                oscar = undefined;
                if(!(mike === oscar)) { _fun38029_ip = 63; continue _fun38029 }
 28:
                report = _closure1_slot0;
                golf = _closure1_slot1;
                zulu = 3;
                zulu = golf[zulu];
                zulu = report.bind(oscar)(zulu);
                zulu = zulu.ConflictOptions;
                mike = zulu.Replace;
 63:
                var _closure3_slot2 = mike;
                zulu = tango.transaction;
                golf = tango.prefix;
                mike = global;
                mike = mike.HermesInternal;
                oscar = mike.concat;
                report = '';
                mike = ' put';
                mike = oscar.bind(report)(golf, mike);
                entity = function(argFoo) {
                    report = argFoo;
                    tango = report.put;
                    zulu = _closure3_slot0;
                    mike = _closure3_slot1;
                    entity = _closure3_slot2;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                };
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[10] = entity;
        entity = {};
        oscar = 'putAll';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun38031: for(var _fun38031_ip = 0; ; ) switch(_fun38031_ip) {
 0:
                mike = arguments[2];
                tango = this;
                zulu = argFoo;
                var _closure3_slot0 = zulu;
                zulu = argBar;
                var _closure3_slot1 = zulu;
                oscar = undefined;
                if(!(mike === oscar)) { _fun38031_ip = 63; continue _fun38031 }
 28:
                report = _closure1_slot0;
                golf = _closure1_slot1;
                zulu = 3;
                zulu = golf[zulu];
                zulu = report.bind(oscar)(zulu);
                zulu = zulu.ConflictOptions;
                mike = zulu.Replace;
 63:
                var _closure3_slot2 = mike;
                zulu = tango.transaction;
                golf = tango.prefix;
                mike = global;
                mike = mike.HermesInternal;
                oscar = mike.concat;
                report = '';
                mike = ' putAll';
                mike = oscar.bind(report)(golf, mike);
                entity = function(argFoo) {
                    report = argFoo;
                    tango = report.putAll;
                    zulu = _closure3_slot0;
                    mike = _closure3_slot1;
                    entity = _closure3_slot2;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                };
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[11] = entity;
        entity = {};
        oscar = 'replaceAll';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            tango = this;
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            zulu = tango.transaction;
            golf = tango.prefix;
            mike = global;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            report = '';
            mike = ' replaceAll';
            mike = oscar.bind(report)(golf, mike);
            entity = function(argFoo) {
                tango = argFoo;
                zulu = tango.replaceAll;
                mike = _closure3_slot0;
                entity = _closure3_slot1;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        entity['value'] = oscar;
        zulu[12] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            tango = this;
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            zulu = tango.transaction;
            golf = tango.prefix;
            mike = global;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            report = '';
            mike = ' delete';
            mike = oscar.bind(report)(golf, mike);
            entity = function(argFoo) {
                tango = argFoo;
                zulu = tango.delete;
                mike = _closure3_slot0;
                entity = _closure3_slot1;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        entity['value'] = oscar;
        zulu[13] = entity;
        entity = {};
        oscar = 'deleteGeneration';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            tango = this;
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            zulu = tango.transaction;
            golf = tango.prefix;
            mike = global;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            report = '';
            mike = ' deleteGeneration';
            mike = oscar.bind(report)(golf, mike);
            entity = function(argFoo) {
                tango = argFoo;
                zulu = tango.deleteGeneration;
                mike = _closure3_slot0;
                entity = _closure3_slot1;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        entity['value'] = oscar;
        zulu[14] = entity;
        entity = {};
        oscar = 'transaction';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = this;
            tango = mike.table;
            zulu = tango.transaction;
            mike = function(argFoo) {
                zulu = _closure3_slot0;
                tango = _closure1_slot5;
                entity = tango.prototype;
                mike = Object.create(entity, {constructor: {value: tango}});
                report = argFoo;
                oscar = mike;
                entity = new oscar[tango](report, tango);
                mike = entity instanceof Object ? entity : mike;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[15] = entity;
        entity = {};
        oscar = 'upgradeTransaction';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot5;
            entity = this;
            tango = entity.table;
            mike = tango.upgradeTransaction;
            entity = argFoo;
            report = mike.bind(tango)(entity);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            oscar = mike;
            entity = new oscar[zulu](report, tango);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = oscar;
        zulu[16] = entity;
        entity = {};
        oscar = 'getManySyncUnsafe';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity.table;
            zulu = tango.getManySyncUnsafe;
            mike = new Array(1);
            entity = argFoo;
            mike[0] = entity;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[17] = entity;
        entity = {};
        oscar = 'getMapEntriesSyncUnsafe';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.table;
            entity = mike.getMapEntriesSyncUnsafe;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        zulu[18] = entity;
        entity = {};
        oscar = 'cell';
        entity['key'] = oscar;
        mike = function(argFoo, argBar, argBaz) { // Original name: value
            mike = argBar;
            entity = {};
            zulu = new Array(2);
            tango = argFoo;
            zulu[0] = tango;
            tango = mike.id;
            zulu[1] = tango;
            entity['key'] = zulu;
            entity['data'] = mike;
            mike = argBaz;
            entity['generation'] = mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(report, zulu, mike);
        return entity;
    };
    tango = mike.bind(entity)();
    var _closure1_slot4 = tango;
    mike = function() {
        report = function(argFoo) { // Original name: GuildEntityDaoTransaction
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argFoo;
            zulu['transaction'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        entity = {};
        zulu = 'put';
        entity['key'] = zulu;
        zulu = function(argFoo, argBar) { // Original name: value
            _fun38047: for(var _fun38047_ip = 0; ; ) switch(_fun38047_ip) {
 0:
                oscar = arguments[2];
                report = this;
                zulu = undefined;
                if(!(oscar === zulu)) { _fun38047_ip = 47; continue _fun38047 }
 12:
                mike = _closure1_slot0;
                tango = _closure1_slot1;
                entity = 3;
                entity = tango[entity];
                entity = mike.bind(zulu)(entity);
                entity = entity.ConflictOptions;
                oscar = entity.Replace;
 47:
                tango = report.putWithGeneration;
                offset = argFoo;
                verify = argBar;
                options = null;
                yankee = report;
                golf = oscar;
                entity = yankee[tango](offset, verify, options, golf, oscar);
                return entity;
            }
        };
        entity['value'] = zulu;
        zulu = new Array(6);
        zulu[0] = entity;
        entity = {};
        oscar = 'putWithGeneration';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun38048: for(var _fun38048_ip = 0; ; ) switch(_fun38048_ip) {
 0:
                tango = arguments[3];
                zulu = undefined;
                if(!(tango === zulu)) { _fun38048_ip = 44; continue _fun38048 }
 9:
                mike = _closure1_slot0;
                report = _closure1_slot1;
                entity = 3;
                entity = report[entity];
                entity = mike.bind(zulu)(entity);
                entity = entity.ConflictOptions;
                tango = entity.Replace;
 44:
                entity = this;
                zulu = entity.transaction;
                mike = zulu.put;
                options = _closure1_slot4;
                golf = options.cell;
                oscar = argFoo;
                report = argBar;
                entity = argBaz;
                entity = golf.bind(options)(oscar, report, entity);
                entity = mike.bind(zulu)(entity, tango);
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[1] = entity;
        entity = {};
        oscar = 'putAll';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun38049: for(var _fun38049_ip = 0; ; ) switch(_fun38049_ip) {
 0:
                oscar = argBar;
                tango = arguments[2];
                mike = argFoo;
                var _closure3_slot0 = mike;
                report = undefined;
                if(!(tango === report)) { _fun38049_ip = 56; continue _fun38049 }
 21:
                zulu = _closure1_slot0;
                golf = _closure1_slot1;
                mike = 3;
                mike = golf[mike];
                mike = zulu.bind(report)(mike);
                mike = mike.ConflictOptions;
                tango = mike.Replace;
 56:
                mike = this;
                zulu = mike.transaction;
                mike = zulu.putAll;
                report = oscar.map;
                entity = function(argFoo) {
                    report = _closure1_slot4;
                    tango = report.cell;
                    zulu = _closure3_slot0;
                    mike = argFoo;
                    entity = null;
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                };
                entity = report.bind(oscar)(entity);
                entity = mike.bind(zulu)(entity, tango);
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[2] = entity;
        entity = {};
        oscar = 'replaceAll';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            tango = argFoo;
            zulu = this;
            entity = zulu.delete;
            entity = entity.bind(zulu)(tango);
            mike = zulu.putAll;
            entity = argBar;
            entity = mike.bind(zulu)(tango, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        zulu[3] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun38052: for(var _fun38052_ip = 0; ; ) switch(_fun38052_ip) {
 0:
                report = argFoo;
                entity = this;
                mike = undefined;
                zulu = arguments.length;
                mike = 0;
                if(!(mike !== zulu)) { _fun38052_ip = 83; continue _fun38052 }
 17:
                mike = 1;
                if(!(mike !== zulu)) { _fun38052_ip = 57; continue _fun38052 }
 24:
                tango = entity.transaction;
                zulu = tango.delete;
                mike = new Array(2);
                mike[0] = report;
                oscar = argBar;
                mike[1] = oscar;
                mike = zulu.bind(tango)(mike);
                return mike;
 57:
                tango = entity.transaction;
                zulu = tango.delete;
                mike = new Array(1);
                mike[0] = report;
                mike = zulu.bind(tango)(mike);
                return mike;
 83:
                zulu = entity.transaction;
                mike = zulu.delete;
                entity = new Array(0);
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[4] = entity;
        entity = {};
        oscar = 'deleteGeneration';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            report = entity.transaction;
            tango = report.deleteGeneration;
            zulu = new Array(0);
            mike = argFoo;
            entity = argBar;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[5] = entity;
        entity = {};
        oscar = 'fromDatabaseTransaction';
        entity['key'] = oscar;
        mike = function(argFoo, argBar, argBaz) { // Original name: value
            zulu = _closure2_slot0;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            entity = tango.bind(entity)(mike);
            oscar = entity.TableTransaction;
            entity = oscar.prototype;
            mike = Object.create(entity, {constructor: {value: oscar}});
            verify = argFoo;
            options = argBar;
            golf = argBaz;
            offset = mike;
            entity = new offset[oscar](verify, options, golf, oscar);
            verify = entity instanceof Object ? entity : mike;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            offset = mike;
            entity = new offset[zulu](verify, options);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(report, zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    var _closure1_slot5 = mike;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/packages/kv-storage/js/api/GuildEntityDao.tsx';
    report = oscar.bind(golf)(report);
    zulu['GuildEntityDao'] = tango;
    zulu['GuildEntityDaoTransaction'] = mike;
    return entity;
})();