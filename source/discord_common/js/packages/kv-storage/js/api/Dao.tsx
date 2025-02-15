// discord_common/js/packages/kv-storage/js/api/Dao.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
        tango = function(argFoo, argBar, argBaz) { // Original name: Dao
            _fun37818: for(var _fun37818_ip = 0; ; ) switch(_fun37818_ip) {
 0:
                mike = argFoo;
                options = arguments[3];
                zulu = this;
                entity = undefined;
                if(!(options === entity)) { _fun37818_ip = 17; continue _fun37818 }
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
        mike = new Array(15);
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
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.table;
            mike = zulu.get;
            entity = new Array(1);
            tango = argFoo;
            entity[0] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'getMany';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            tango = entity.table;
            zulu = tango.getMany;
            mike = new Array(0);
            entity = argFoo;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'getRange';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            entity = this;
            report = entity.table;
            tango = report.getRange;
            zulu = new Array(1);
            entity = argFoo;
            zulu[0] = entity;
            mike = new Array(1);
            entity = argBar;
            mike[0] = entity;
            entity = argBaz;
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
        oscar = function() { // Original name: value
            entity = this;
            zulu = entity.table;
            mike = zulu.getChildIds;
            entity = new Array(0);
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'getParentId';
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
        mike[8] = entity;
        entity = {};
        oscar = 'put';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun37828: for(var _fun37828_ip = 0; ; ) switch(_fun37828_ip) {
 0:
                tango = arguments[2];
                zulu = undefined;
                if(!(tango === zulu)) { _fun37828_ip = 44; continue _fun37828 }
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
                report = new Array(1);
                oscar = argFoo;
                report[0] = oscar;
                entity['key'] = report;
                report = argBar;
                entity['data'] = report;
                report = null;
                entity['generation'] = report;
                entity = mike.bind(zulu)(entity, tango);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun37829: for(var _fun37829_ip = 0; ; ) switch(_fun37829_ip) {
 0:
                mike = this;
                entity = undefined;
                zulu = arguments.length;
                entity = 0;
                if(!(entity !== zulu)) { _fun37829_ip = 43; continue _fun37829 }
 14:
                tango = mike.table;
                zulu = tango.delete;
                entity = new Array(1);
                report = argFoo;
                entity[0] = report;
                entity = zulu.bind(tango)(entity);
                _fun37829_ip = 58; continue _fun37829;
 43:
                zulu = mike.table;
                mike = zulu.delete;
                entity = mike.bind(zulu)();
 58:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
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
        mike[11] = entity;
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
        mike[12] = entity;
        entity = {};
        oscar = 'getManySyncUnsafe';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            tango = entity.table;
            zulu = tango.getManySyncUnsafe;
            mike = new Array(0);
            entity = argFoo;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[13] = entity;
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
        mike[14] = entity;
        entity = undefined;
        entity = zulu.bind(entity)(tango, mike);
        return entity;
    };
    tango = mike.bind(entity)();
    mike = function() {
        report = function(argFoo) { // Original name: DaoTransaction
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
            _fun37837: for(var _fun37837_ip = 0; ; ) switch(_fun37837_ip) {
 0:
                report = arguments[2];
                entity = undefined;
                if(!(report === entity)) { _fun37837_ip = 44; continue _fun37837 }
 9:
                zulu = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 3;
                mike = tango[mike];
                mike = zulu.bind(entity)(mike);
                mike = mike.ConflictOptions;
                report = mike.Replace;
 44:
                mike = this;
                tango = mike.transaction;
                zulu = tango.put;
                mike = {};
                oscar = new Array(1);
                golf = argFoo;
                oscar[0] = golf;
                mike['key'] = oscar;
                oscar = argBar;
                mike['data'] = oscar;
                oscar = null;
                mike['generation'] = oscar;
                mike = zulu.bind(tango)(mike, report);
                return entity;
            }
        };
        entity['value'] = zulu;
        zulu = new Array(2);
        zulu[0] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun37838: for(var _fun37838_ip = 0; ; ) switch(_fun37838_ip) {
 0:
                mike = this;
                entity = undefined;
                zulu = arguments.length;
                entity = 0;
                if(!(entity !== zulu)) { _fun37838_ip = 43; continue _fun37838 }
 14:
                tango = mike.transaction;
                zulu = tango.delete;
                entity = new Array(1);
                report = argFoo;
                entity[0] = report;
                entity = zulu.bind(tango)(entity);
                _fun37838_ip = 58; continue _fun37838;
 43:
                zulu = mike.transaction;
                mike = zulu.delete;
                entity = mike.bind(zulu)();
 58:
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[1] = entity;
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
    report = '../discord_common/js/packages/kv-storage/js/api/Dao.tsx';
    report = oscar.bind(golf)(report);
    zulu['Dao'] = tango;
    zulu['DaoTransaction'] = mike;
    return entity;
})();