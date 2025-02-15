// discord_common/js/packages/kv-storage/js/api/GuildDao.tsx
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
        tango = function(argFoo, argBar, argBaz) { // Original name: GuildDao
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = argFoo;
                options = arguments[3];
                zulu = this;
                entity = undefined;
                if(!(options === entity)) { _fun00002_ip = 17; continue _fun00001 }
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
        var _closure2_slot0 = tango;
        zulu = _closure1_slot3;
        entity = {};
        mike = 'prefix';
        entity['key'] = mike;
        mike = function() { // Original name: get
            entity = this;
            entity = entity.table;
            entity = entity.prefix;
            return entity;
        };
        entity['get'] = mike;
        mike = new Array(18);
        mike[0] = entity;
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
        mike[1] = entity;
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
        mike[2] = entity;
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
        mike[3] = entity;
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
        mike[4] = entity;
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
        mike[5] = entity;
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
        mike[6] = entity;
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
        mike[7] = entity;
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
        mike[8] = entity;
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
        mike[9] = entity;
        entity = {};
        oscar = 'put';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                golf = arguments[3];
                oscar = this;
                zulu = undefined;
                if(!(golf === zulu)) { _fun00004_ip = 47; continue _fun00003 }
 12:
                mike = _closure1_slot0;
                tango = _closure1_slot1;
                entity = 3;
                entity = tango[entity];
                entity = mike.bind(zulu)(entity);
                entity = entity.ConflictOptions;
                golf = entity.Replace;
 47:
                report = oscar.putWithGeneration;
                romeo = argFoo;
                yankee = argBar;
                offset = argBaz;
                verify = null;
                foxtrot = oscar;
                options = golf;
                entity = foxtrot[report](romeo, yankee, offset, verify, options, golf);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'putWithGeneration';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = arguments[4];
                zulu = undefined;
                if(!(tango === zulu)) { _fun00006_ip = 44; continue _fun00005 }
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
                zulu = entity.table;
                mike = zulu.put;
                entity = {};
                report = new Array(2);
                oscar = argFoo;
                report[0] = oscar;
                oscar = argBar;
                report[1] = oscar;
                entity['key'] = report;
                report = argBaz;
                entity['data'] = report;
                report = argCorge;
                entity['generation'] = report;
                entity = mike.bind(zulu)(entity, tango);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = argFoo;
                entity = this;
                mike = undefined;
                zulu = arguments.length;
                mike = 0;
                if(!(mike !== zulu)) { _fun00008_ip = 83; continue _fun00007 }
 17:
                mike = 1;
                if(!(mike !== zulu)) { _fun00008_ip = 57; continue _fun00007 }
 24:
                tango = entity.table;
                zulu = tango.delete;
                mike = new Array(2);
                mike[0] = report;
                oscar = argBar;
                mike[1] = oscar;
                mike = zulu.bind(tango)(mike);
                return mike;
 57:
                tango = entity.table;
                zulu = tango.delete;
                mike = new Array(1);
                mike[0] = report;
                mike = zulu.bind(tango)(mike);
                return mike;
 83:
                zulu = entity.table;
                mike = zulu.delete;
                entity = new Array(0);
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'deleteGeneration';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            report = entity.table;
            tango = report.deleteGeneration;
            zulu = new Array(0);
            mike = argFoo;
            entity = argBar;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[13] = entity;
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
                tango = _closure1_slot4;
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
        mike[14] = entity;
        entity = {};
        oscar = 'upgradeTransaction';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot4;
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
        mike[15] = entity;
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
        mike[16] = entity;
        entity = {};
        oscar = 'getMapEntriesSyncUnsafe';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            mike = entity.table;
            entity = mike.getMapEntriesSyncUnsafe;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = report;
        mike[17] = entity;
        entity = undefined;
        entity = zulu.bind(entity)(tango, mike);
        return entity;
    };
    tango = mike.bind(entity)();
    mike = function() {
        report = function(argFoo) { // Original name: GuildDaoTransaction
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argFoo;
            zulu['state'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        entity = {};
        zulu = 'put';
        entity['key'] = zulu;
        zulu = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                options = arguments[3];
                golf = this;
                entity = undefined;
                if(!(options === entity)) { _fun00010_ip = 47; continue _fun00009 }
 12:
                zulu = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 3;
                mike = tango[mike];
                mike = zulu.bind(entity)(mike);
                mike = mike.ConflictOptions;
                options = mike.Replace;
 47:
                oscar = golf.putWithGeneration;
                foxtrot = argFoo;
                romeo = argBar;
                yankee = argBaz;
                offset = null;
                backup = golf;
                verify = options;
                mike = backup[oscar](foxtrot, romeo, yankee, offset, verify, options);
                return entity;
            }
        };
        entity['value'] = zulu;
        zulu = new Array(4);
        zulu[0] = entity;
        entity = {};
        oscar = 'putWithGeneration';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tango = arguments[4];
                zulu = undefined;
                if(!(tango === zulu)) { _fun00012_ip = 44; continue _fun00011 }
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
                zulu = entity.state;
                mike = zulu.put;
                entity = {};
                report = new Array(2);
                oscar = argFoo;
                report[0] = oscar;
                oscar = argBar;
                report[1] = oscar;
                entity['key'] = report;
                report = argBaz;
                entity['data'] = report;
                report = argCorge;
                entity['generation'] = report;
                entity = mike.bind(zulu)(entity, tango);
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[1] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                oscar = argFoo;
                mike = this;
                entity = undefined;
                zulu = undefined;
                tango = arguments.length;
                zulu = 0;
                if(!(zulu !== tango)) { _fun00014_ip = 83; continue _fun00013 }
 19:
                zulu = 1;
                if(!(zulu !== tango)) { _fun00014_ip = 58; continue _fun00013 }
 26:
                report = mike.state;
                tango = report.delete;
                zulu = new Array(2);
                zulu[0] = oscar;
                golf = argBar;
                zulu[1] = golf;
                zulu = tango.bind(report)(zulu);
                _fun00014_ip = 102; continue _fun00013;
 58:
                report = mike.state;
                tango = report.delete;
                zulu = new Array(1);
                zulu[0] = oscar;
                zulu = tango.bind(report)(zulu);
                _fun00014_ip = 102; continue _fun00013;
 83:
                tango = mike.state;
                zulu = tango.delete;
                mike = new Array(0);
                mike = zulu.bind(tango)(mike);
 102:
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[2] = entity;
        entity = {};
        oscar = 'deleteGeneration';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            report = entity.state;
            tango = report.deleteGeneration;
            zulu = new Array(0);
            mike = argFoo;
            entity = argBar;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[3] = entity;
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
    var _closure1_slot4 = mike;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/packages/kv-storage/js/api/GuildDao.tsx';
    report = oscar.bind(golf)(report);
    zulu['GuildDao'] = tango;
    zulu['GuildDaoTransaction'] = mike;
    return entity;
})();