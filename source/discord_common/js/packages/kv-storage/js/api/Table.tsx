// discord_common/js/packages/kv-storage/js/api/Table.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    tango = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar) { // Original name: prefixCell
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            golf = argBar;
            tango = golf.length;
            mike = 0;
            entity = zulu;
            if(!(mike !== tango)) { _fun00002_ip = 91; continue _fun00001 }
 20:
            mike = {};
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 3;
            report = report[tango];
            tango = undefined;
            oscar = oscar.bind(tango)(report);
            report = oscar.combineKey;
            tango = zulu.key;
            tango = report.bind(oscar)(golf, tango);
            mike['key'] = tango;
            tango = zulu.data;
            mike['data'] = tango;
            zulu = zulu.generation;
            mike['generation'] = zulu;
            entity = mike;
 91:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: prefixCells
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            report = entity.length;
            zulu = 0;
            entity = tango;
            if(!(zulu !== report)) { _fun00004_ip = 41; continue _fun00003 }
 26:
            zulu = tango.map;
            mike = function(argFoo) {
                tango = _closure1_slot6;
                zulu = _closure2_slot0;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 41:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    mike = 2;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo, argBar, argBaz, argCorge) { // Original name: Table
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                report = _closure1_slot3;
                mike = _closure2_slot1;
                entity = undefined;
                mike = report.bind(entity)(zulu, mike);
                mike = {};
                tango = function(argFoo) { // Original name: getLatest
                    entity = _closure3_slot0;
                    tango = entity.database;
                    zulu = tango.execute;
                    mike = {};
                    report = 'messages.get_latest';
                    mike['type'] = report;
                    report = entity.tableId;
                    mike['table'] = report;
                    report = argFoo;
                    mike['guildId'] = report;
                    entity = entity.defaultDebugTag;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                mike['getLatest'] = tango;
                zulu['messages'] = mike;
                mike = argFoo;
                zulu['prefix'] = mike;
                mike = argBar;
                zulu['tableId'] = mike;
                mike = argBaz;
                zulu['database'] = mike;
                tango = argCorge;
                mike = null;
                if(!tango) { _fun00006_ip = 86; continue _fun00005 }
 84:
                mike = undefined;
 86:
                zulu['defaultDebugTag'] = mike;
                return entity;
            }
        };
        var _closure2_slot1 = zulu;
        report = {};
        mike = 'close';
        report['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            mike = entity.database;
            entity = mike.close;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = mike;
        mike = new Array(18);
        mike[0] = report;
        report = {};
        golf = 'get';
        report['key'] = golf;
        options = _closure1_slot2;
        entity = undefined;
        golf = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 69; continue _fun00007 }
 10:
                    tango = report.getMany;
                    zulu = {};
                    mike = 1;
                    zulu['limit'] = mike;
                    mike = argFoo;
                    mike = tango.bind(report)(mike, zulu);
                    SaveGenerator(address=39);
 37:
                    return mike;
 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00008_ip = 66; continue _fun00007 }
 45:
                    zulu = 0;
                    tango = mike[zulu];
                    zulu = null;
                    report = zulu != tango;
                    if(!report) { _fun00008_ip = 63; continue _fun00007 }
 60:
                    zulu = tango;
 63:
                    return zulu;
 66:
                    return mike;
 69:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(entity)(golf);
        var _closure2_slot0 = golf;
        golf = function() { // Original name: get
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        mike[1] = report;
        report = {};
        golf = 'getMany';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                offset = arguments[0];
                oscar = arguments[1];
                entity = this;
                report = undefined;
                if(!(offset === report)) { _fun00010_ip = 19; continue _fun00009 }
 15:
                offset = new Array(0);
 19:
                tango = entity.database;
                zulu = tango.execute;
                mike = {};
                golf = 'kv.get_many';
                mike['type'] = golf;
                golf = entity.tableId;
                mike['table'] = golf;
                options = _closure1_slot0;
                verify = _closure1_slot1;
                golf = 3;
                golf = verify[golf];
                verify = options.bind(report)(golf);
                options = verify.combineKeyPrefix;
                golf = entity.prefix;
                golf = options.bind(verify)(golf, offset);
                mike['key'] = golf;
                golf = null;
                verify = golf == oscar;
                options = undefined;
                if(verify) { _fun00010_ip = 116; continue _fun00009 }
 110:
                options = oscar.ordering;
 116:
                mike['ordering'] = options;
                golf = golf == oscar;
                report = undefined;
                if(golf) { _fun00010_ip = 136; continue _fun00009 }
 130:
                report = oscar.limit;
 136:
                mike['limit'] = report;
                entity = entity.defaultDebugTag;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        mike[2] = report;
        report = {};
        golf = 'getRange';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                oscar = argBaz;
                entity = this;
                zulu = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 3;
                golf = tango[mike];
                report = undefined;
                offset = zulu.bind(report)(golf);
                verify = offset.combineKey;
                options = entity.prefix;
                golf = argFoo;
                verify = verify.bind(offset)(options, golf);
                mike = tango[mike];
                golf = zulu.bind(report)(mike);
                tango = golf.combineKey;
                zulu = entity.prefix;
                mike = argBar;
                options = tango.bind(golf)(zulu, mike);
                tango = entity.database;
                zulu = tango.execute;
                mike = {};
                golf = 'kv.get_range';
                mike['type'] = golf;
                golf = entity.tableId;
                mike['table'] = golf;
                golf = new Array(2);
                golf[0] = verify;
                golf[1] = options;
                mike['range'] = golf;
                golf = null;
                verify = golf == oscar;
                options = undefined;
                if(verify) { _fun00012_ip = 151; continue _fun00011 }
 145:
                options = oscar.ordering;
 151:
                mike['ordering'] = options;
                golf = golf == oscar;
                report = undefined;
                if(golf) { _fun00012_ip = 171; continue _fun00011 }
 165:
                report = oscar.limit;
 171:
                mike['limit'] = report;
                entity = entity.defaultDebugTag;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        mike[3] = report;
        report = {};
        golf = 'getKvEntries';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                options = arguments[0];
                entity = this;
                golf = undefined;
                if(!(options === golf)) { _fun00014_ip = 16; continue _fun00013 }
 12:
                options = new Array(0);
 16:
                tango = entity.database;
                zulu = tango.execute;
                mike = {};
                report = 'kv.get_kv_entries';
                mike['type'] = report;
                report = entity.tableId;
                mike['table'] = report;
                oscar = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                golf = oscar.bind(golf)(report);
                oscar = golf.combineKeyPrefix;
                report = entity.prefix;
                report = oscar.bind(golf)(report, options);
                mike['key'] = report;
                entity = entity.defaultDebugTag;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        mike[4] = report;
        report = {};
        golf = 'getMapEntries';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                options = arguments[0];
                entity = this;
                golf = undefined;
                if(!(options === golf)) { _fun00016_ip = 16; continue _fun00015 }
 12:
                options = new Array(0);
 16:
                tango = entity.database;
                zulu = tango.execute;
                mike = {};
                report = 'kv.get_map_entries';
                mike['type'] = report;
                report = entity.tableId;
                mike['table'] = report;
                oscar = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                golf = oscar.bind(golf)(report);
                oscar = golf.combineKeyPrefix;
                report = entity.prefix;
                report = oscar.bind(golf)(report, options);
                mike['key'] = report;
                entity = entity.defaultDebugTag;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        mike[5] = report;
        report = {};
        golf = 'getChildIds';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                options = arguments[0];
                entity = this;
                golf = undefined;
                if(!(options === golf)) { _fun00018_ip = 16; continue _fun00017 }
 12:
                options = new Array(0);
 16:
                tango = entity.database;
                zulu = tango.execute;
                mike = {};
                report = 'kv.get_child_ids';
                mike['type'] = report;
                report = entity.tableId;
                mike['table'] = report;
                oscar = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                golf = oscar.bind(golf)(report);
                oscar = golf.combineKeyPrefix;
                report = entity.prefix;
                report = oscar.bind(golf)(report, options);
                mike['key'] = report;
                entity = entity.defaultDebugTag;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        mike[6] = report;
        report = {};
        golf = 'getParentId';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                options = arguments[0];
                entity = this;
                golf = undefined;
                if(!(options === golf)) { _fun00020_ip = 16; continue _fun00019 }
 12:
                options = new Array(0);
 16:
                tango = entity.database;
                zulu = tango.execute;
                mike = {};
                report = 'kv.get_parent_id';
                mike['type'] = report;
                report = entity.tableId;
                mike['table'] = report;
                oscar = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                golf = oscar.bind(golf)(report);
                oscar = golf.combineKey;
                report = entity.prefix;
                report = oscar.bind(golf)(report, options);
                mike['key'] = report;
                entity = entity.defaultDebugTag;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        mike[7] = report;
        report = {};
        golf = 'put';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                oscar = arguments[1];
                entity = this;
                options = undefined;
                if(!(oscar === options)) { _fun00022_ip = 47; continue _fun00021 }
 12:
                zulu = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 4;
                mike = tango[mike];
                mike = zulu.bind(options)(mike);
                mike = mike.ConflictOptions;
                oscar = mike.Replace;
 47:
                tango = entity.database;
                zulu = tango.execute;
                mike = {};
                report = 'kv.put_one';
                mike['type'] = report;
                report = entity.tableId;
                mike['table'] = report;
                offset = _closure1_slot6;
                verify = entity.prefix;
                golf = argFoo;
                golf = offset.bind(options)(golf, verify);
                mike['cell'] = golf;
                golf = _closure1_slot0;
                verify = _closure1_slot1;
                report = 4;
                report = verify[report];
                report = golf.bind(options)(report);
                report = report.ConflictOptions;
                report = report.Replace;
                report = oscar === report;
                mike['overwrite'] = report;
                entity = entity.defaultDebugTag;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        mike[8] = report;
        report = {};
        golf = 'putAll';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                oscar = arguments[1];
                entity = this;
                options = undefined;
                if(!(oscar === options)) { _fun00024_ip = 47; continue _fun00023 }
 12:
                zulu = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 4;
                mike = tango[mike];
                mike = zulu.bind(options)(mike);
                mike = mike.ConflictOptions;
                oscar = mike.Replace;
 47:
                tango = entity.database;
                zulu = tango.execute;
                mike = {};
                report = 'kv.put_many';
                mike['type'] = report;
                report = entity.tableId;
                mike['table'] = report;
                offset = _closure1_slot7;
                verify = entity.prefix;
                golf = argFoo;
                golf = offset.bind(options)(golf, verify);
                mike['cells'] = golf;
                golf = _closure1_slot0;
                verify = _closure1_slot1;
                report = 4;
                report = verify[report];
                report = golf.bind(options)(report);
                report = report.ConflictOptions;
                report = report.Replace;
                report = oscar === report;
                mike['overwrite'] = report;
                entity = entity.defaultDebugTag;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        mike[9] = report;
        report = {};
        golf = 'replaceAll';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = this;
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = tango.transaction;
            mike = tango.defaultDebugTag;
            entity = function(argFoo) {
                zulu = argFoo;
                entity = zulu.delete;
                entity = entity.bind(zulu)();
                mike = zulu.putAll;
                entity = _closure3_slot0;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        mike[10] = report;
        report = {};
        golf = 'delete';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                options = arguments[0];
                entity = this;
                golf = undefined;
                if(!(options === golf)) { _fun00026_ip = 16; continue _fun00025 }
 12:
                options = new Array(0);
 16:
                tango = entity.database;
                zulu = tango.execute;
                mike = {};
                report = 'kv.delete_many';
                mike['type'] = report;
                report = entity.tableId;
                mike['table'] = report;
                oscar = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                golf = oscar.bind(golf)(report);
                oscar = golf.combineKeyPrefix;
                report = entity.prefix;
                report = oscar.bind(golf)(report, options);
                mike['key'] = report;
                entity = entity.defaultDebugTag;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        mike[11] = report;
        report = {};
        golf = 'deleteRange';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 3;
            oscar = report[mike];
            zulu = undefined;
            verify = tango.bind(zulu)(oscar);
            options = verify.combineKey;
            golf = entity.prefix;
            oscar = argFoo;
            golf = options.bind(verify)(golf, oscar);
            mike = report[mike];
            report = tango.bind(zulu)(mike);
            tango = report.combineKey;
            zulu = entity.prefix;
            mike = argBar;
            oscar = tango.bind(report)(zulu, mike);
            tango = entity.database;
            zulu = tango.execute;
            mike = {};
            report = 'kv.delete_range';
            mike['type'] = report;
            report = entity.tableId;
            mike['table'] = report;
            report = new Array(2);
            report[0] = golf;
            report[1] = oscar;
            mike['range'] = report;
            entity = entity.defaultDebugTag;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        mike[12] = report;
        report = {};
        golf = 'deleteGeneration';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                options = arguments[0];
                entity = this;
                golf = undefined;
                if(!(options === golf)) { _fun00028_ip = 16; continue _fun00027 }
 12:
                options = new Array(0);
 16:
                tango = entity.database;
                zulu = tango.execute;
                mike = {};
                report = 'kv.delete_generation';
                mike['type'] = report;
                report = entity.tableId;
                mike['table'] = report;
                oscar = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                golf = oscar.bind(golf)(report);
                oscar = golf.combineKeyPrefix;
                report = entity.prefix;
                report = oscar.bind(golf)(report, options);
                mike['key'] = report;
                report = arguments[2];
                mike['generation'] = report;
                report = arguments[1];
                mike['comparer'] = report;
                entity = entity.defaultDebugTag;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        mike[13] = report;
        report = {};
        golf = 'transaction';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            zulu = argFoo;
            var _closure3_slot1 = zulu;
            tango = mike.database;
            zulu = tango.transaction;
            mike = function(argFoo) {
                zulu = _closure3_slot1;
                oscar = _closure1_slot5;
                entity = _closure3_slot0;
                verify = entity.prefix;
                options = entity.tableId;
                entity = oscar.prototype;
                mike = Object.create(entity, {constructor: {value: oscar}});
                golf = argFoo;
                offset = mike;
                entity = new offset[oscar](verify, options, golf, oscar);
                mike = entity instanceof Object ? entity : mike;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        mike[14] = report;
        report = {};
        golf = 'upgradeTransaction';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            report = _closure1_slot5;
            options = entity.prefix;
            golf = entity.tableId;
            entity = report.prototype;
            mike = Object.create(entity, {constructor: {value: report}});
            oscar = argFoo;
            verify = mike;
            entity = new verify[report](options, golf, oscar, report);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        report['value'] = golf;
        mike[15] = report;
        report = {};
        golf = 'getManySyncUnsafe';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                verify = arguments[0];
                report = arguments[1];
                oscar = this;
                tango = undefined;
                if(!(verify === tango)) { _fun00030_ip = 19; continue _fun00029 }
 15:
                verify = new Array(0);
 19:
                zulu = oscar.database;
                mike = zulu.executeSync;
                entity = {};
                golf = 'kv.get_many';
                entity['type'] = golf;
                golf = oscar.tableId;
                entity['table'] = golf;
                options = _closure1_slot0;
                offset = _closure1_slot1;
                golf = 3;
                golf = offset[golf];
                options = options.bind(tango)(golf);
                golf = options.combineKeyPrefix;
                oscar = oscar.prefix;
                oscar = golf.bind(options)(oscar, verify);
                entity['key'] = oscar;
                oscar = null;
                options = oscar == report;
                golf = undefined;
                if(options) { _fun00030_ip = 116; continue _fun00029 }
 110:
                golf = report.ordering;
 116:
                entity['ordering'] = golf;
                oscar = oscar == report;
                tango = undefined;
                if(oscar) { _fun00030_ip = 136; continue _fun00029 }
 130:
                tango = report.limit;
 136:
                entity['limit'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        report['value'] = golf;
        mike[16] = report;
        report = {};
        golf = 'getMapEntriesSyncUnsafe';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                golf = arguments[0];
                tango = this;
                options = undefined;
                if(!(golf === options)) { _fun00032_ip = 16; continue _fun00031 }
 12:
                golf = new Array(0);
 16:
                zulu = tango.database;
                mike = zulu.executeSync;
                entity = {};
                report = 'kv.get_map_entries';
                entity['type'] = report;
                report = tango.tableId;
                entity['table'] = report;
                oscar = _closure1_slot0;
                verify = _closure1_slot1;
                report = 3;
                report = verify[report];
                oscar = oscar.bind(options)(report);
                report = oscar.combineKeyPrefix;
                tango = tango.prefix;
                tango = report.bind(oscar)(tango, golf);
                entity['key'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        report['value'] = oscar;
        mike[17] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = mike.bind(entity)();
    mike = function() {
        report = function(argFoo, argBar, argBaz) { // Original name: TableTransaction
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            mike = {};
            report = function(argFoo) { // Original name: trimOrphans
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    oscar = argFoo;
                    mike = _closure3_slot0;
                    mike = mike.prefix;
                    mike = mike.length;
                    zulu = 1;
                    if(!(zulu === mike)) { _fun00034_ip = 110; continue _fun00033 }
 28:
                    mike = oscar.length;
                    if(!(zulu === mike)) { _fun00034_ip = 110; continue _fun00033 }
 37:
                    tango = _closure3_slot0;
                    zulu = tango.transaction;
                    mike = zulu.add;
                    entity = {};
                    report = 'messages.trim_orphans';
                    entity['type'] = report;
                    report = tango.tableId;
                    entity['table'] = report;
                    report = 0;
                    oscar = oscar[report];
                    entity['channelKey'] = oscar;
                    tango = tango.prefix;
                    tango = tango[report];
                    entity['messageKey'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
 110:
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    golf = 'trimOrphans: only one prefix component is supported at this time';
                    options = mike;
                    entity = new options[zulu](golf, oscar);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            mike['trimOrphans'] = report;
            report = function(argFoo, argBar) { // Original name: trimChannel
                report = _closure3_slot0;
                tango = report.transaction;
                zulu = tango.add;
                mike = {};
                entity = 'messages.trim_channel';
                mike['type'] = entity;
                entity = report.tableId;
                mike['table'] = entity;
                golf = _closure1_slot0;
                oscar = _closure1_slot1;
                entity = 3;
                oscar = oscar[entity];
                entity = undefined;
                options = golf.bind(entity)(oscar);
                golf = options.combineKey;
                oscar = report.prefix;
                report = argFoo;
                report = golf.bind(options)(oscar, report);
                mike['key'] = report;
                report = argBar;
                mike['limit'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike['trimChannel'] = report;
            report = function(argFoo, argBar) { // Original name: trimChannelsIn
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    oscar = argFoo;
                    mike = _closure3_slot0;
                    mike = mike.prefix;
                    mike = mike.length;
                    zulu = 1;
                    if(!(zulu === mike)) { _fun00036_ip = 118; continue _fun00035 }
 28:
                    mike = oscar.length;
                    if(!(zulu === mike)) { _fun00036_ip = 118; continue _fun00035 }
 37:
                    tango = _closure3_slot0;
                    zulu = tango.transaction;
                    mike = zulu.add;
                    entity = {};
                    report = 'messages.trim_channels_in';
                    entity['type'] = report;
                    report = tango.tableId;
                    entity['table'] = report;
                    report = 0;
                    oscar = oscar[report];
                    entity['channelKey'] = oscar;
                    tango = tango.prefix;
                    tango = tango[report];
                    entity['messageKey'] = tango;
                    tango = argBar;
                    entity['limit'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
 118:
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    golf = 'trimChannelsIn: only one prefix component is supported at this time';
                    options = mike;
                    entity = new options[zulu](golf, oscar);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            mike['trimChannelsIn'] = report;
            tango = function(argFoo, argBar) { // Original name: trimChannelsNotIn
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    oscar = argFoo;
                    mike = _closure3_slot0;
                    mike = mike.prefix;
                    mike = mike.length;
                    zulu = 1;
                    if(!(zulu === mike)) { _fun00038_ip = 118; continue _fun00037 }
 28:
                    mike = oscar.length;
                    if(!(zulu === mike)) { _fun00038_ip = 118; continue _fun00037 }
 37:
                    tango = _closure3_slot0;
                    zulu = tango.transaction;
                    mike = zulu.add;
                    entity = {};
                    report = 'messages.trim_channels_not_in';
                    entity['type'] = report;
                    report = tango.tableId;
                    entity['table'] = report;
                    report = 0;
                    oscar = oscar[report];
                    entity['channelKey'] = oscar;
                    tango = tango.prefix;
                    tango = tango[report];
                    entity['messageKey'] = tango;
                    tango = argBar;
                    entity['limit'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
 118:
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    golf = 'trimChannelsNotIn: only one prefix component is supported at this time';
                    options = mike;
                    entity = new options[zulu](golf, oscar);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            mike['trimChannelsNotIn'] = tango;
            zulu['messages'] = mike;
            mike = argFoo;
            zulu['prefix'] = mike;
            mike = argBar;
            zulu['tableId'] = mike;
            mike = argBaz;
            zulu['transaction'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot4;
        entity = {};
        zulu = 'put';
        entity['key'] = zulu;
        zulu = function(argFoo) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                oscar = arguments[1];
                golf = this;
                entity = undefined;
                if(!(oscar === entity)) { _fun00040_ip = 47; continue _fun00039 }
 12:
                zulu = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 4;
                mike = tango[mike];
                mike = zulu.bind(entity)(mike);
                mike = mike.ConflictOptions;
                oscar = mike.Replace;
 47:
                tango = golf.transaction;
                zulu = tango.add;
                mike = {};
                report = 'kv.put_one';
                mike['type'] = report;
                report = golf.tableId;
                mike['table'] = report;
                verify = _closure1_slot6;
                options = golf.prefix;
                golf = argFoo;
                golf = verify.bind(entity)(golf, options);
                mike['cell'] = golf;
                golf = _closure1_slot0;
                options = _closure1_slot1;
                report = 4;
                report = options[report];
                report = golf.bind(entity)(report);
                report = report.ConflictOptions;
                report = report.Replace;
                report = oscar === report;
                mike['overwrite'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = zulu;
        zulu = new Array(6);
        zulu[0] = entity;
        entity = {};
        oscar = 'putAll';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                oscar = arguments[1];
                golf = this;
                entity = undefined;
                if(!(oscar === entity)) { _fun00042_ip = 47; continue _fun00041 }
 12:
                zulu = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 4;
                mike = tango[mike];
                mike = zulu.bind(entity)(mike);
                mike = mike.ConflictOptions;
                oscar = mike.Replace;
 47:
                tango = golf.transaction;
                zulu = tango.add;
                mike = {};
                report = 'kv.put_many';
                mike['type'] = report;
                report = golf.tableId;
                mike['table'] = report;
                verify = _closure1_slot7;
                options = golf.prefix;
                golf = argFoo;
                golf = verify.bind(entity)(golf, options);
                mike['cells'] = golf;
                golf = _closure1_slot0;
                options = _closure1_slot1;
                report = 4;
                report = options[report];
                report = golf.bind(entity)(report);
                report = report.ConflictOptions;
                report = report.Replace;
                report = oscar === report;
                mike['overwrite'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[1] = entity;
        entity = {};
        oscar = 'replaceAll';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = this;
            entity = zulu.delete;
            entity = entity.bind(zulu)();
            mike = zulu.putAll;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        zulu[2] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                options = arguments[0];
                report = this;
                entity = undefined;
                if(!(options === entity)) { _fun00044_ip = 16; continue _fun00043 }
 12:
                options = new Array(0);
 16:
                tango = report.transaction;
                zulu = tango.add;
                mike = {};
                oscar = 'kv.delete_many';
                mike['type'] = oscar;
                oscar = report.tableId;
                mike['table'] = oscar;
                golf = _closure1_slot0;
                verify = _closure1_slot1;
                oscar = 3;
                oscar = verify[oscar];
                golf = golf.bind(entity)(oscar);
                oscar = golf.combineKeyPrefix;
                report = report.prefix;
                report = oscar.bind(golf)(report, options);
                mike['key'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[3] = entity;
        entity = {};
        oscar = 'deleteRange';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            report = this;
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 3;
            oscar = tango[mike];
            entity = undefined;
            verify = zulu.bind(entity)(oscar);
            options = verify.combineKey;
            golf = report.prefix;
            oscar = argFoo;
            golf = options.bind(verify)(golf, oscar);
            mike = tango[mike];
            oscar = zulu.bind(entity)(mike);
            tango = oscar.combineKey;
            zulu = report.prefix;
            mike = argBar;
            oscar = tango.bind(oscar)(zulu, mike);
            tango = report.transaction;
            zulu = tango.add;
            mike = {};
            options = 'kv.delete_range';
            mike['type'] = options;
            report = report.tableId;
            mike['table'] = report;
            report = new Array(2);
            report[0] = golf;
            report[1] = oscar;
            mike['range'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = oscar;
        zulu[4] = entity;
        entity = {};
        oscar = 'deleteGeneration';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                options = arguments[0];
                report = this;
                entity = undefined;
                if(!(options === entity)) { _fun00046_ip = 16; continue _fun00045 }
 12:
                options = new Array(0);
 16:
                tango = report.transaction;
                zulu = tango.add;
                mike = {};
                oscar = 'kv.delete_generation';
                mike['type'] = oscar;
                oscar = report.tableId;
                mike['table'] = oscar;
                golf = _closure1_slot0;
                verify = _closure1_slot1;
                oscar = 3;
                oscar = verify[oscar];
                golf = golf.bind(entity)(oscar);
                oscar = golf.combineKeyPrefix;
                report = report.prefix;
                report = oscar.bind(golf)(report, options);
                mike['key'] = report;
                report = arguments[2];
                mike['generation'] = report;
                report = arguments[1];
                mike['comparer'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[5] = entity;
        entity = {};
        oscar = 'fromDatabaseTransaction';
        entity['key'] = oscar;
        mike = function(argFoo, argBar, argBaz) { // Original name: value
            report = _closure2_slot0;
            entity = report.prototype;
            mike = Object.create(entity, {constructor: {value: report}});
            options = argFoo;
            golf = argBar;
            oscar = argBaz;
            verify = mike;
            entity = new verify[report](options, golf, oscar, report);
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
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/packages/kv-storage/js/api/Table.tsx';
    report = oscar.bind(golf)(report);
    zulu['Table'] = tango;
    zulu['TableTransaction'] = mike;
    return entity;
})();