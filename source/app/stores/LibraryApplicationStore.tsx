// app/stores/LibraryApplicationStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot21;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00006_ip = 46; continue _fun00005 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00006_ip = 55; continue _fun00005 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00006_ip = 343; continue _fun00005 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00006_ip = 323; continue _fun00005 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00006_ip = 283; continue _fun00005 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00006_ip = 270; continue _fun00005 }
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
            if(!golf) { _fun00006_ip = 163; continue _fun00005 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00006_ip = 179; continue _fun00005 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00006_ip = 234; continue _fun00005 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00006_ip = 247; continue _fun00005 }
 234:
            verify = _closure1_slot23;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00006_ip = 265; continue _fun00005;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00006_ip = 283; continue _fun00005;
 270:
            golf = _closure1_slot23;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00006_ip = 323; continue _fun00005 }
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
            if(!tango) { _fun00006_ip = 330; continue _fun00005 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00008_ip = 56; continue _fun00007 }
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
                    _fun00008_ip = 67; continue _fun00007;
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
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00010_ip = 23; continue _fun00009 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00010_ip = 33; continue _fun00009 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00010_ip = 70; continue _fun00009 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00010_ip = 55; continue _fun00009 }
 70:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: getSavedData
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 8;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            zulu = mike.Storage;
            mike = zulu.get;
            entity = _closure1_slot12;
            entity = mike.bind(zulu)(entity);
            mike = null;
            if(!(mike == entity)) { _fun00012_ip = 53; continue _fun00011 }
 51:
            entity = {};
 53:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: saveActiveLaunchOptionIds
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        report = mike.Storage;
        tango = report.set;
        zulu = _closure1_slot12;
        mike = {};
        golf = _closure1_slot24;
        options = golf.bind(entity)();
        verify = mike;
        golf = copyDataProperties(verify, options);
        golf = _closure1_slot18;
        oscar = 'activeLaunchOptionIds';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: saveActiveLibraryApplicationBranchIds
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        report = mike.Storage;
        tango = report.set;
        zulu = _closure1_slot12;
        mike = {};
        golf = _closure1_slot24;
        options = golf.bind(entity)();
        verify = mike;
        golf = copyDataProperties(verify, options);
        golf = _closure1_slot17;
        oscar = 'activeLibraryApplicationBranchIds';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: setLibraryApplications
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = _closure1_slot22;
            entity = undefined;
            mike = argFoo;
            report = zulu.bind(entity)(mike);
            zulu = report.bind(entity)();
            mike = zulu.done;
            tango = 9;
            if(mike) { _fun00014_ip = 115; continue _fun00013 }
 32:
            options = zulu.value;
            golf = _closure1_slot9;
            mike = golf.createFromServer;
            options = mike.bind(golf)(options);
            golf = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            offset = golf.bind(entity)(mike);
            verify = offset.getComboId;
            golf = options.id;
            mike = options.branchId;
            golf = verify.bind(offset)(golf, mike);
            mike = _closure1_slot14;
            mike[golf] = options;
            golf = report.bind(entity)();
            mike = golf.done;
            zulu = golf;
            if(!mike) { _fun00014_ip = 32; continue _fun00013 }
 115:
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    verify = function(argFoo) { // Original name: handleLibraryApplicationUpdate
        entity = argFoo;
        tango = entity.libraryApplication;
        zulu = _closure1_slot9;
        entity = zulu.createFromServer;
        report = entity.bind(zulu)(tango);
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        entity = 9;
        zulu = zulu[entity];
        entity = undefined;
        golf = tango.bind(entity)(zulu);
        oscar = golf.getComboId;
        tango = report.id;
        zulu = report.branchId;
        tango = oscar.bind(golf)(tango, zulu);
        zulu = _closure1_slot14;
        zulu[tango] = report;
        zulu = _closure1_slot16;
        mike = zulu.delete;
        mike = mike.bind(zulu)(tango);
        return entity;
    };
    entity = function(argFoo, argBar) { // Original name: _getLibraryApplication
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 9;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.getComboId;
            zulu = argFoo;
            entity = argBar;
            zulu = tango.bind(report)(zulu, entity);
            entity = _closure1_slot14;
            entity = entity[zulu];
            tango = null;
            if(!(tango == entity)) { _fun00016_ip = 65; continue _fun00015 }
 57:
            mike = _closure1_slot15;
            entity = mike[zulu];
 65:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _getAllLibraryApplications
        entity = {};
        tango = _closure1_slot15;
        report = entity;
        zulu = copyDataProperties(report, tango);
        tango = _closure1_slot14;
        report = entity;
        mike = copyDataProperties(report, tango);
        return entity;
    };
    var _closure1_slot29 = entity;
    offset = global;
    yankee = offset.Object;
    options = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.LibraryApplicationFlags;
    var _closure1_slot11 = mike;
    mike = 'LibraryApplicationStore';
    var _closure1_slot12 = mike;
    options = false;
    var _closure1_slot13 = options;
    yankee = {};
    var _closure1_slot14 = yankee;
    yankee = {};
    var _closure1_slot15 = yankee;
    offset = offset.Set;
    yankee = offset.prototype;
    yankee = Object.create(yankee, {constructor: {value: offset}});
    kilo = yankee;
    offset = new kilo[offset](backup);
    offset = offset instanceof Object ? offset : yankee;
    var _closure1_slot16 = offset;
    offset = {};
    var _closure1_slot17 = offset;
    offset = {};
    var _closure1_slot18 = offset;
    var _closure1_slot19 = options;
    options = 12;
    options = oscar[options];
    options = golf.bind(entity)(options);
    offset = options.Store;
    options = function(argFoo) {
        tango = function() { // Original name: LibraryApplicationStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot4;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot20;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tango = this;
                zulu = tango.waitFor;
                entity = _closure1_slot10;
                entity = zulu.bind(tango)(entity);
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 8;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                report = zulu.Storage;
                tango = report.get;
                zulu = _closure1_slot12;
                zulu = tango.bind(report)(zulu);
                report = null;
                if(!(report != zulu)) { _fun00018_ip = 129; continue _fun00017 }
 69:
                tango = zulu.activeLaunchOptionIds;
                if(!(report != tango)) { _fun00018_ip = 91; continue _fun00017 }
 79:
                tango = zulu.activeLaunchOptionIds;
                _closure1_slot18 = tango;
                _fun00018_ip = 99; continue _fun00017;
 91:
                tango = _closure1_slot25;
                tango = tango.bind(entity)();
 99:
                tango = zulu.activeLibraryApplicationBranchIds;
                if(!(report != tango)) { _fun00018_ip = 121; continue _fun00017 }
 109:
                zulu = zulu.activeLibraryApplicationBranchIds;
                _closure1_slot17 = zulu;
                _fun00018_ip = 129; continue _fun00017;
 121:
                mike = _closure1_slot26;
                mike = mike.bind(entity)();
 129:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(13);
        entity[0] = report;
        report = {};
        golf = 'libraryApplications';
        report['key'] = golf;
        golf = function() { // Original name: get
            zulu = function(argFoo) { // Original name: getLibraryApplicationsFiltered
                entity = argFoo;
                var _closure4_slot0 = entity;
                zulu = _closure1_slot29;
                entity = undefined;
                entity = zulu.bind(entity)();
                var _closure4_slot1 = entity;
                zulu = global;
                tango = zulu.Object;
                zulu = tango.keys;
                tango = zulu.bind(tango)(entity);
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        zulu = argFoo;
                        report = _closure4_slot0;
                        entity = _closure4_slot1;
                        tango = entity[zulu];
                        entity = undefined;
                        tango = report.bind(entity)(tango);
                        if(tango) { _fun00020_ip = 36; continue _fun00019 }
 28:
                        mike = _closure4_slot1;
                        mike = delete mike[zulu];
 36:
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = undefined;
            entity = function(argFoo) {
                mike = argFoo;
                entity = mike.isHidden;
                entity = entity.bind(mike)();
                entity = !entity;
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        report['get'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getAllLibraryApplications';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot29;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'hasLibraryApplication';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = global;
            zulu = entity.Object;
            mike = zulu.keys;
            tango = _closure1_slot29;
            entity = undefined;
            entity = tango.bind(entity)();
            entity = mike.bind(zulu)(entity);
            mike = entity.length;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'hasApplication';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                mike = arguments[2];
                oscar = undefined;
                if(!(mike === oscar)) { _fun00022_ip = 11; continue _fun00021 }
 9:
                mike = false;
 11:
                report = _closure1_slot28;
                tango = argFoo;
                entity = argBar;
                report = report.bind(oscar)(tango, entity);
                entity = null;
                entity = entity != report;
                if(!entity) { _fun00022_ip = 95; continue _fun00021 }
 39:
                mike = !mike;
                if(!mike) { _fun00022_ip = 55; continue _fun00021 }
 45:
                tango = report.isHidden;
                mike = tango.bind(report)();
 55:
                mike = !mike;
                if(!mike) { _fun00022_ip = 92; continue _fun00021 }
 61:
                tango = _closure1_slot0;
                golf = _closure1_slot3;
                zulu = 9;
                zulu = golf[zulu];
                tango = tango.bind(oscar)(zulu);
                zulu = tango.isUserEntitledToLibraryApplication;
                mike = zulu.bind(tango)(report);
 92:
                entity = mike;
 95:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getLibraryApplication';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                mike = arguments[2];
                oscar = undefined;
                if(!(mike === oscar)) { _fun00024_ip = 11; continue _fun00023 }
 9:
                mike = false;
 11:
                report = _closure1_slot28;
                zulu = argFoo;
                entity = argBar;
                zulu = report.bind(oscar)(zulu, entity);
                entity = zulu;
                if(!mike) { _fun00024_ip = 87; continue _fun00023 }
 36:
                mike = null;
                entity = zulu;
                if(!(mike != entity)) { _fun00024_ip = 87; continue _fun00023 }
 45:
                report = _closure1_slot0;
                golf = _closure1_slot3;
                tango = 9;
                tango = golf[tango];
                report = report.bind(oscar)(tango);
                tango = report.isUserEntitledToLibraryApplication;
                tango = tango.bind(report)(zulu);
                mike = null;
                if(!tango) { _fun00024_ip = 84; continue _fun00023 }
 81:
                mike = zulu;
 84:
                entity = mike;
 87:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getActiveLibraryApplication';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                kilo = argFoo;
                backup = arguments[1];
                mike = undefined;
                if(!(backup === mike)) { _fun00026_ip = 14; continue _fun00025 }
 12:
                backup = false;
 14:
                entity = _closure1_slot17;
                oscar = entity[kilo];
                zulu = null;
                if(!(zulu != oscar)) { _fun00026_ip = 137; continue _fun00025 }
 31:
                tango = _closure1_slot0;
                entity = _closure1_slot3;
                report = 9;
                entity = entity[report];
                tango = tango.bind(mike)(entity);
                entity = tango.getComboId;
                oscar = entity.bind(tango)(kilo, oscar);
                entity = _closure1_slot14;
                entity = entity[oscar];
                if(!(zulu == entity)) { _fun00026_ip = 83; continue _fun00025 }
 75:
                tango = _closure1_slot15;
                entity = tango[oscar];
 83:
                if(!(zulu != entity)) { _fun00026_ip = 137; continue _fun00025 }
 87:
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                zulu = zulu[report];
                tango = tango.bind(mike)(zulu);
                zulu = tango.isUserEntitledToLibraryApplication;
                zulu = zulu.bind(tango)(entity);
                if(!zulu) { _fun00026_ip = 137; continue _fun00025 }
 118:
                if(backup) { _fun00026_ip = 247; continue _fun00025 }
 124:
                zulu = entity.isHidden;
                zulu = zulu.bind(entity)();
                if(!zulu) { _fun00026_ip = 247; continue _fun00025 }
 137:
                zulu = _closure1_slot29;
                romeo = zulu.bind(mike)();
                offset = romeo;
                oscar = 9;
                report = undefined;
                for(golf in offset)
 161:
                {
 170:
                    zulu = golf;
                    tango = romeo[zulu];
                    tango = tango.id;
                    if(tango !== kilo) { _fun00026_ip = 161; continue _fun00025 }
 186:
                    zulu = romeo[zulu];
                    sizing = _closure1_slot0;
                    tango = _closure1_slot3;
                    tango = tango[oscar];
                    sizing = sizing.bind(mike)(tango);
                    tango = sizing.isUserEntitledToLibraryApplication;
                    tango = tango.bind(sizing)(zulu);
                    report = zulu;
                    if(!tango) { _fun00026_ip = 161; continue _fun00025 }
 224:
                    if(backup) { _fun00026_ip = 243; continue _fun00025 }
 227:
                    tango = zulu.isHidden;
                    tango = tango.bind(zulu)();
                    report = zulu;
                    if(tango) { _fun00026_ip = 161; continue _fun00025 }
 243:
                    return zulu;
                }
 245:
                return mike;
 247:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'isUpdatingFlags';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            zulu = _closure1_slot16;
            mike = zulu.has;
            report = _closure1_slot0;
            tango = _closure1_slot3;
            entity = 9;
            tango = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            report = oscar.getComboId;
            tango = argFoo;
            entity = argBar;
            entity = report.bind(oscar)(tango, entity);
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getActiveLaunchOptionId';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            mike = _closure1_slot18;
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 9;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.getComboId;
            zulu = argFoo;
            entity = argBar;
            entity = tango.bind(report)(zulu, entity);
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'fetched';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot13;
            return entity;
        };
        report['get'] = golf;
        entity[9] = report;
        report = {};
        golf = 'entitledBranchIds';
        report['key'] = golf;
        golf = function() { // Original name: get
            report = _closure1_slot1;
            tango = _closure1_slot3;
            zulu = 11;
            zulu = tango[zulu];
            tango = undefined;
            zulu = report.bind(tango)(zulu);
            mike = _closure1_slot29;
            mike = mike.bind(tango)();
            zulu = zulu.bind(tango)(mike);
            mike = zulu.values;
            tango = mike.bind(zulu)();
            zulu = tango.filter;
            mike = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.isUserEntitledToLibraryApplication;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.branchId;
                return entity;
            };
            mike = mike.bind(zulu)(entity);
            entity = mike.value;
            entity = entity.bind(mike)();
            return entity;
        };
        report['get'] = golf;
        entity[10] = report;
        report = {};
        golf = 'hasRemovedLibraryApplicationThisSession';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot19;
            return entity;
        };
        report['get'] = golf;
        entity[11] = report;
        report = {};
        golf = 'whenInitialized';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            zulu = this;
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = zulu.addConditionalChangeListener;
            entity = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = _closure1_slot13;
                    zulu = undefined;
                    if(entity) { _fun00028_ip = 14; continue _fun00027 }
 12:
                    return zulu;
 14:
                    entity = global;
                    mike = entity.setImmediate;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
                    entity = false;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[12] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = options.bind(entity)(offset);
    options['displayName'] = mike;
    mike = 13;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    offset = function() { // Original name: handleLogout
        entity = false;
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = offset;
    offset = function(argFoo) { // Original name: handleFetchSuccess
        entity = argFoo;
        tango = entity.libraryApplications;
        entity = {};
        _closure1_slot14 = entity;
        mike = _closure1_slot27;
        entity = undefined;
        mike = mike.bind(entity)(tango);
        mike = true;
        _closure1_slot13 = mike;
        return entity;
    };
    mike['LIBRARY_FETCH_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handlePurchaseSuccess
        entity = argFoo;
        zulu = entity.libraryApplications;
        mike = _closure1_slot27;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['SKU_PURCHASE_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleFlagsUpdateStart
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            oscar = entity.applicationId;
            report = entity.branchId;
            options = entity.flags;
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 9;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getComboId;
            tango = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot28;
            oscar = zulu.bind(entity)(oscar, report);
            zulu = null;
            zulu = zulu != oscar;
            if(!zulu) { _fun00030_ip = 88; continue _fun00029 }
 75:
            report = oscar.isHidden;
            report = report.bind(oscar)();
            zulu = !report;
 88:
            if(!zulu) { _fun00030_ip = 133; continue _fun00029 }
 91:
            oscar = _closure1_slot2;
            golf = _closure1_slot3;
            report = 10;
            report = golf[report];
            golf = oscar.bind(entity)(report);
            oscar = golf.hasFlag;
            report = _closure1_slot11;
            report = report.HIDDEN;
            zulu = oscar.bind(golf)(options, report);
 133:
            if(!zulu) { _fun00030_ip = 142; continue _fun00029 }
 136:
            zulu = true;
            _closure1_slot19 = zulu;
 142:
            zulu = _closure1_slot16;
            mike = zulu.add;
            mike = mike.bind(zulu)(tango);
            return entity;
        }
    };
    mike['LIBRARY_APPLICATION_FLAGS_UPDATE_START'] = offset;
    mike['LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS'] = verify;
    mike['LIBRARY_APPLICATION_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleActiveLaunchOptionIdUpdate
        entity = argFoo;
        options = entity.applicationId;
        golf = entity.branchId;
        report = entity.launchOptionId;
        tango = _closure1_slot18;
        oscar = _closure1_slot0;
        zulu = _closure1_slot3;
        entity = 9;
        zulu = zulu[entity];
        entity = undefined;
        oscar = oscar.bind(entity)(zulu);
        zulu = oscar.getComboId;
        zulu = zulu.bind(oscar)(options, golf);
        tango[zulu] = report;
        mike = _closure1_slot25;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleActiveBranchUpdate
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            tango = entity.applicationId;
            zulu = entity.branchId;
            mike = _closure1_slot17;
            mike = mike[tango];
            if(!(mike !== zulu)) { _fun00032_ip = 49; continue _fun00031 }
 29:
            mike = _closure1_slot17;
            mike[tango] = zulu;
            mike = _closure1_slot26;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 49:
            entity = false;
            return entity;
        }
    };
    mike['LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleTestModeEnabled
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            zulu = entity.libraryApplications;
            mike = _closure1_slot22;
            entity = undefined;
            report = mike.bind(entity)(zulu);
            zulu = report.bind(entity)();
            mike = zulu.done;
            tango = 9;
            if(mike) { _fun00034_ip = 106; continue _fun00033 }
 38:
            options = zulu.value;
            golf = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[tango];
            offset = golf.bind(entity)(mike);
            verify = offset.getComboId;
            golf = options.id;
            mike = options.branchId;
            golf = verify.bind(offset)(golf, mike);
            mike = _closure1_slot15;
            mike[golf] = options;
            golf = report.bind(entity)();
            mike = golf.done;
            zulu = golf;
            if(!mike) { _fun00034_ip = 38; continue _fun00033 }
 106:
            return entity;
        }
    };
    mike['LIBRARY_APPLICATIONS_TEST_MODE_ENABLED'] = verify;
    tango = function() { // Original name: handleTestModeDisabled
        entity = {};
        _closure1_slot15 = entity;
        entity = undefined;
        return entity;
    };
    mike['DEVELOPER_TEST_MODE_RESET'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/LibraryApplicationStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();