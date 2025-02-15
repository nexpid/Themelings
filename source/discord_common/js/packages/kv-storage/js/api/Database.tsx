// discord_common/js/packages/kv-storage/js/api/Database.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    tango = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot8;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot8;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = function() {
        report = function(argFoo) { // Original name: Database
            tango = argFoo;
            zulu = this;
            var _closure3_slot0 = zulu;
            golf = _closure1_slot4;
            report = _closure2_slot2;
            entity = undefined;
            report = golf.bind(entity)(zulu, report);
            zulu['raw'] = tango;
            report = tango.name;
            zulu['name'] = report;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            golf = 3;
            golf = oscar[golf];
            golf = report.bind(entity)(golf);
            golf = golf.DatabaseState;
            golf = golf.Open;
            zulu['lastState'] = golf;
            tango = tango.handle;
            zulu['handle'] = tango;
            tango = 4;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            report = tango.Runtime;
            tango = report.addDatabaseStateCallback;
            mike = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure3_slot0;
                    zulu = mike.handle;
                    mike = argFoo;
                    if(!(zulu === mike)) { _fun00008_ip = 33; continue _fun00007 }
 20:
                    mike = _closure3_slot0;
                    entity = argBar;
                    mike['lastState'] = entity;
 33:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(mike);
            zulu['databaseStateCallback'] = mike;
            return entity;
        };
        var _closure2_slot2 = report;
        tango = _closure1_slot5;
        entity = {};
        zulu = 'close';
        entity['key'] = zulu;
        zulu = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = this;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 3;
                tango = tango[entity];
                entity = undefined;
                tango = report.bind(entity)(tango);
                tango = tango.DatabaseState;
                tango = tango.Closed;
                mike['lastState'] = tango;
                oscar = mike.raw;
                tango = null;
                if(!(tango != oscar)) { _fun00010_ip = 67; continue _fun00009 }
 57:
                report = oscar.close;
                report = report.bind(oscar)();
 67:
                mike['raw'] = tango;
                tango = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 4;
                zulu = report[zulu];
                zulu = tango.bind(entity)(zulu);
                tango = zulu.Runtime;
                zulu = tango.removeCompletionCallback;
                mike = mike.databaseStateCallback;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = zulu;
        zulu = new Array(11);
        zulu[0] = entity;
        entity = {};
        oscar = 'disable';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = this;
                mike = zulu.raw;
                entity = null;
                if(!(entity != mike)) { _fun00012_ip = 88; continue _fun00011 }
 14:
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                entity = tango.bind(entity)(mike);
                entity = entity.DatabaseState;
                entity = entity.Disabled;
                zulu['lastState'] = entity;
                mike = zulu.execute;
                entity = {'type': 'db.disable', 'handle': 0};
                tango = argFoo;
                entity['reason'] = tango;
                entity = mike.bind(zulu)(entity);
                _fun00012_ip = 106; continue _fun00011;
 88:
                mike = global;
                zulu = mike.Promise;
                mike = zulu.resolve;
                entity = mike.bind(zulu)();
 106:
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[1] = entity;
        entity = {};
        oscar = 'execute';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                golf = argFoo;
                verify = argBar;
                tango = this;
                var _closure3_slot0 = tango;
                var _closure3_slot1 = golf;
                var _closure3_slot2 = verify;
                entity = tango.raw;
                mike = null;
                if(!(mike != entity)) { _fun00014_ip = 180; continue _fun00013 }
 37:
                entity = 'key';
                entity = entity in golf;
                if(entity) { _fun00014_ip = 56; continue _fun00013 }
 48:
                entity = golf.table;
                _fun00014_ip = 67; continue _fun00013;
 56:
                oscar = golf.key;
                report = 0;
                entity = oscar[report];
 67:
                zulu = function() { // Original name: callback
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 4;
                        mike = mike[entity];
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        tango = entity.Runtime;
                        zulu = tango.executeAsync;
                        report = _closure3_slot2;
                        mike = null;
                        if(!(mike == report)) { _fun00016_ip = 61; continue _fun00015 }
 50:
                        mike = _closure3_slot1;
                        mike = mike.type;
                        _fun00016_ip = 65; continue _fun00015;
 61:
                        mike = _closure3_slot2;
 65:
                        entity = function(argFoo) {
                            mike = _closure3_slot0;
                            tango = mike.raw;
                            zulu = tango.execute;
                            mike = {};
                            oscar = _closure3_slot1;
                            golf = mike;
                            entity = copyDataProperties(golf, oscar);
                            report = 0;
                            entity = 'handle';
                            mike[entity] = report;
                            entity = argFoo;
                            entity = zulu.bind(tango)(entity, mike);
                            entity = undefined;
                            return entity;
                        };
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    }
                };
                if(!(mike !== verify)) { _fun00014_ip = 172; continue _fun00013 }
 76:
                options = _closure1_slot1;
                oscar = _closure1_slot2;
                report = 5;
                oscar = oscar[report];
                report = undefined;
                oscar = options.bind(report)(oscar);
                report = oscar.timeAsync;
                if(!(mike == verify)) { _fun00014_ip = 116; continue _fun00013 }
 111:
                verify = golf.type;
 116:
                mike = mike != entity;
                options = '';
                golf = options;
                if(!mike) { _fun00014_ip = 133; continue _fun00013 }
 130:
                golf = entity;
 133:
                entity = global;
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = ' ';
                mike = mike.bind(options)(verify, entity, golf);
                entity = '💾';
                entity = report.bind(oscar)(entity, mike, zulu);
                _fun00014_ip = 178; continue _fun00013;
 172:
                mike = undefined;
                entity = zulu.bind(mike)();
 178:
                return entity;
 180:
                entity = global;
                zulu = entity.Error;
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = 'database is no longer open (database: ';
                romeo = mike.bind(entity)(tango);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                foxtrot = mike;
                entity = new foxtrot[zulu](romeo, yankee);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        entity['value'] = oscar;
        zulu[2] = entity;
        entity = {};
        oscar = 'executeSync';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                golf = argFoo;
                tango = this;
                var _closure3_slot0 = tango;
                var _closure3_slot1 = golf;
                mike = tango.raw;
                zulu = null;
                if(!(zulu != mike)) { _fun00018_ip = 160; continue _fun00017 }
 30:
                mike = 'key';
                mike = mike in golf;
                if(mike) { _fun00018_ip = 49; continue _fun00017 }
 41:
                mike = golf.table;
                _fun00018_ip = 60; continue _fun00017;
 49:
                oscar = golf.key;
                report = 0;
                mike = oscar[report];
 60:
                options = _closure1_slot1;
                oscar = _closure1_slot2;
                report = 5;
                oscar = oscar[report];
                report = undefined;
                oscar = options.bind(report)(oscar);
                report = oscar.time;
                verify = golf.type;
                zulu = zulu != mike;
                options = '';
                if(!zulu) { _fun00018_ip = 110; continue _fun00017 }
 107:
                options = mike;
 110:
                mike = global;
                mike = mike.HermesInternal;
                golf = mike.concat;
                zulu = 'SYNC: ';
                mike = ' ';
                zulu = golf.bind(zulu)(verify, mike, options);
                mike = '💾';
                entity = function() {
                    mike = _closure3_slot0;
                    report = mike.raw;
                    tango = report.execute;
                    zulu = {};
                    golf = _closure3_slot1;
                    options = zulu;
                    entity = copyDataProperties(options, golf);
                    mike = 0;
                    entity = 'handle';
                    zulu[entity] = mike;
                    mike = {};
                    entity = true;
                    mike['synchronous'] = entity;
                    entity = null;
                    entity = tango.bind(report)(entity, zulu, mike);
                    return entity;
                };
                entity = report.bind(oscar)(mike, zulu, entity);
                return entity;
 160:
                entity = global;
                zulu = entity.Error;
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = 'database is no longer open (database: ';
                romeo = mike.bind(entity)(tango);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                foxtrot = mike;
                entity = new foxtrot[zulu](romeo, yankee);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        entity['value'] = oscar;
        zulu[3] = entity;
        entity = {};
        oscar = 'fullVacuum';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            mike = zulu.execute;
            entity = {'type': 'db.vacuum', 'handle': 0, 'complete': true};
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[4] = entity;
        entity = {};
        oscar = 'fsInfo';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            mike = zulu.execute;
            entity = {'type': 'db.fs_info', 'handle': 0};
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[5] = entity;
        entity = {};
        oscar = 'incrementalVacuum';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            mike = zulu.execute;
            entity = {'type': 'db.vacuum', 'handle': 0, 'complete': false};
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[6] = entity;
        entity = {};
        oscar = 'instantaneousState';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                mike = this;
                zulu = mike.raw;
                entity = null;
                if(!(entity != zulu)) { _fun00020_ip = 45; continue _fun00019 }
 14:
                zulu = mike.executeSync;
                entity = {};
                tango = 'db.state';
                entity['type'] = tango;
                entity = zulu.bind(mike)(entity);
                mike['lastState'] = entity;
                _fun00020_ip = 82; continue _fun00019;
 45:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 3;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.DatabaseState;
                entity = mike.Closed;
 82:
                return entity;
            }
        };
        entity['value'] = oscar;
        zulu[7] = entity;
        entity = {};
        oscar = 'instantaneousStateAsync';
        entity['key'] = oscar;
        options = _closure1_slot3;
        mike = undefined;
        oscar = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    mike = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00022_ip = 108; continue _fun00021 }
 10:
                    tango = mike.raw;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00022_ip = 68; continue _fun00021 }
 21:
                    tango = mike.execute;
                    zulu = {};
                    report = 'db.state';
                    zulu['type'] = report;
                    zulu = tango.bind(mike)(zulu);
                    SaveGenerator(address=48);
 46:
                    return zulu;
 48:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00022_ip = 65; continue _fun00021 }
 54:
                    mike['lastState'] = zulu;
                    mike = zulu;
                    _fun00022_ip = 105; continue _fun00021;
 65:
                    return zulu;
 68:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 3;
                    tango = tango[zulu];
                    zulu = undefined;
                    zulu = report.bind(zulu)(tango);
                    zulu = zulu.DatabaseState;
                    mike = zulu.Closed;
 105:
                    return mike;
 108:
                    return entity;
                }
            };
            return entity;
        };
        oscar = options.bind(mike)(oscar);
        var _closure2_slot1 = oscar;
        oscar = function() { // Original name: instantaneousStateAsync
            entity = undefined;
            tango = _closure2_slot1;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        entity['value'] = oscar;
        zulu[8] = entity;
        entity = {};
        oscar = 'state';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.lastState;
            return entity;
        };
        entity['value'] = oscar;
        zulu[9] = entity;
        entity = {};
        oscar = 'transaction';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            tango = this;
            var _closure3_slot0 = tango;
            mike = argBar;
            var _closure3_slot1 = mike;
            mike = _closure1_slot6;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            oscar = zulu;
            report = tango;
            mike = new oscar[mike](report, tango);
            tango = mike instanceof Object ? mike : zulu;
            var _closure3_slot2 = tango;
            zulu = argFoo;
            mike = undefined;
            tango = zulu.bind(mike)(tango);
            mike = global;
            zulu = mike.Promise;
            mike = zulu.resolve;
            zulu = mike.bind(zulu)(tango);
            mike = zulu.then;
            entity = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure3_slot2;
                    entity = entity.operations;
                    zulu = entity.length;
                    entity = 0;
                    if(!(!(zulu > entity))) { _fun00024_ip = 44; continue _fun00023 }
 24:
                    entity = global;
                    zulu = entity.Promise;
                    entity = zulu.resolve;
                    entity = entity.bind(zulu)();
                    _fun00024_ip = 95; continue _fun00023;
 44:
                    report = _closure3_slot0;
                    tango = report.execute;
                    zulu = {};
                    oscar = 'db.transaction';
                    zulu['type'] = oscar;
                    golf = _closure3_slot2;
                    oscar = golf.complete;
                    oscar = oscar.bind(golf)();
                    zulu['operations'] = oscar;
                    mike = _closure3_slot1;
                    entity = tango.bind(report)(zulu, mike);
 95:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        zulu[10] = entity;
        oscar = {};
        entity = 'open';
        oscar['key'] = entity;
        entity = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00026_ip = 102; continue _fun00025 }
 7:
                    zulu = _closure2_slot2;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 6;
                    tango = tango[mike];
                    mike = undefined;
                    mike = report.bind(mike)(tango);
                    oscar = mike.Host;
                    report = oscar.open;
                    tango = argFoo;
                    mike = argBar;
                    mike = report.bind(oscar)(tango, mike);
                    SaveGenerator(address=67);
 65:
                    return mike;
 67:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00026_ip = 99; continue _fun00025 }
 73:
                    tango = zulu.prototype;
                    tango = Object.create(tango, {constructor: {value: zulu}});
                    verify = tango;
                    options = mike;
                    zulu = new verify[zulu](options, golf);
                    zulu = zulu instanceof Object ? zulu : tango;
                    return zulu;
 99:
                    return mike;
 102:
                    return entity;
                }
            };
            return entity;
        };
        entity = options.bind(mike)(entity);
        var _closure2_slot0 = entity;
        entity = function() { // Original name: open
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        oscar['value'] = entity;
        entity = new Array(3);
        entity[0] = oscar;
        oscar = {};
        options = 'openSyncUnsafe';
        oscar['key'] = options;
        options = function(argFoo, argBar) { // Original name: value
            zulu = _closure2_slot2;
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            entity = tango.bind(entity)(mike);
            report = entity.Host;
            tango = report.openSyncUnsafe;
            mike = argFoo;
            entity = argBar;
            golf = tango.bind(report)(mike, entity);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            options = mike;
            entity = new options[zulu](golf, oscar);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        oscar['value'] = options;
        entity[1] = oscar;
        oscar = {};
        options = 'delete';
        oscar['key'] = options;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.Host;
            mike = zulu.delete;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['value'] = golf;
        entity[2] = oscar;
        entity = tango.bind(mike)(report, zulu, entity);
        return entity;
    };
    tango = mike.bind(entity)();
    mike = function() {
        tango = _closure1_slot5;
        zulu = function(argFoo) { // Original name: DatabaseTransaction
            zulu = this;
            tango = _closure1_slot4;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argFoo;
            zulu['database'] = mike;
            mike = new Array(0);
            zulu['operations'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'add';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.operations;
            mike = zulu.push;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'complete';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                entity = this;
                zulu = _closure1_slot7;
                mike = entity.operations;
                oscar = undefined;
                report = zulu.bind(oscar)(mike);
                zulu = report.bind(oscar)();
                mike = zulu.done;
                tango = 0;
                if(mike) { _fun00028_ip = 63; continue _fun00027 }
 37:
                mike = zulu.value;
                mike['handle'] = tango;
                golf = report.bind(oscar)();
                mike = golf.done;
                zulu = golf;
                if(!mike) { _fun00028_ip = 37; continue _fun00027 }
 63:
                entity = entity.operations;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'toString';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            mike = entity.database;
            offset = mike.handle;
            entity = entity.operations;
            options = entity.length;
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            yankee = '[DatabaseTransaction ';
            verify = ': ';
            golf = ' ops]';
            entity = yankee[tango](offset, verify, options, golf, oscar);
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    var _closure1_slot6 = mike;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = '../discord_common/js/packages/kv-storage/js/api/Database.tsx';
    report = oscar.bind(golf)(report);
    zulu['Database'] = tango;
    zulu['DatabaseTransaction'] = mike;
    return entity;
})();