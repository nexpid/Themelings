// app/modules/app_database/modules/UserSearchItems.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
            verify = _closure1_slot14;
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
            golf = _closure1_slot14;
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
    var _closure1_slot13 = entity;
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
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RelationshipTypes;
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'UserSearchItems';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot11 = tango;
    tango = false;
    var _closure1_slot12 = tango;
    mike = function() {
        tango = _closure1_slot5;
        zulu = function() { // Original name: UserSearchItems
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot4;
            mike = _closure2_slot1;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            mike = {};
            report = zulu.handlePostConnectionOpen;
            mike['POST_CONNECTION_OPEN'] = report;
            tango = function(argFoo, argBar) { // Original name: WRITE_CACHES
                zulu = _closure3_slot0;
                mike = zulu.handleWriteCaches;
                entity = argBar;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['WRITE_CACHES'] = tango;
            zulu['actions'] = mike;
            return entity;
        };
        var _closure2_slot1 = zulu;
        report = {};
        mike = 'getAll';
        report['key'] = mike;
        golf = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 171; continue _fun00007 }
 10:
                    zulu = global;
                    tango = zulu.performance;
                    mike = tango.now;
                    golf = mike.bind(tango)();
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 9;
                    report = report[mike];
                    mike = undefined;
                    report = oscar.bind(mike)(report);
                    mike = report.userSearchItems;
                    report = mike.bind(report)();
                    mike = null;
                    if(!(mike != report)) { _fun00008_ip = 164; continue _fun00007 }
 68:
                    mike = report.getMany;
                    mike = mike.bind(report)();
                    SaveGenerator(address=82);
 80:
                    return mike;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 161; continue _fun00007 }
 88:
                    oscar = zulu.performance;
                    report = oscar.now;
                    oscar = report.bind(oscar)();
                    report = _closure1_slot11;
                    tango = report.log;
                    backup = oscar - golf;
                    romeo = mike.length;
                    zulu = zulu.HermesInternal;
                    options = zulu.concat;
                    kilo = 'asynchronously loaded in ';
                    foxtrot = 'ms (userSearchItems: ';
                    yankee = ')';
                    zulu = kilo[options](backup, foxtrot, romeo, yankee, offset);
                    zulu = tango.bind(report)(zulu);
                    return mike;
 161:
                    return mike;
 164:
                    mike = new Array(0);
                    return mike;
 171:
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
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'resetInMemoryState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'shouldUseCache';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot12;
            entity = !entity;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'handlePostConnectionOpen';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = true;
            _closure1_slot12 = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'handleWriteCaches';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = {};
                tango = _closure1_slot13;
                zulu = _closure1_slot8;
                entity = zulu.getFriendIDs;
                zulu = entity.bind(zulu)();
                entity = undefined;
                options = tango.bind(entity)(zulu);
                tango = options.bind(entity)();
                zulu = tango.done;
                yankee = null;
                verify = 10;
                golf = tango;
                oscar = undefined;
                tango = undefined;
                if(zulu) { _fun00010_ip = 231; continue _fun00009 }
 57:
                backup = golf.value;
                romeo = _closure1_slot9;
                zulu = romeo.getUser;
                kilo = zulu.bind(romeo)(backup);
                if(!(yankee != kilo)) { _fun00010_ip = 213; continue _fun00009 }
 84:
                romeo = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[verify];
                romeo = romeo.bind(entity)(zulu);
                zulu = romeo.getNames;
                zulu = zulu.bind(romeo)(kilo);
                romeo = zulu.names;
                zulu = zulu.nick;
                foxtrot = {};
                foxtrot['id'] = backup;
                sizing = _closure1_slot10;
                sizing = sizing.FRIEND;
                foxtrot['type'] = sizing;
                foxtrot['user'] = kilo;
                foxtrot['names'] = romeo;
                foxtrot['nick'] = zulu;
                romeo = _closure1_slot7;
                zulu = romeo.getUserAffinity;
                zulu = zulu.bind(romeo)(backup);
                kilo = yankee == zulu;
                romeo = undefined;
                if(kilo) { _fun00010_ip = 186; continue _fun00009 }
 180:
                romeo = zulu.affinity;
 186:
                sizing = yankee != romeo;
                kilo = 0;
                if(!sizing) { _fun00010_ip = 198; continue _fun00009 }
 195:
                kilo = romeo;
 198:
                foxtrot['affinity'] = kilo;
                report[backup] = foxtrot;
                oscar = romeo;
                tango = zulu;
 213:
                romeo = options.bind(entity)();
                zulu = romeo.done;
                golf = romeo;
                if(!zulu) { _fun00010_ip = 57; continue _fun00009 }
 231:
                tango = _closure1_slot13;
                oscar = _closure1_slot6;
                zulu = oscar.getGameRelationships;
                oscar = zulu.bind(oscar)();
                zulu = oscar.values;
                golf = zulu.bind(oscar)();
                oscar = golf.filter;
                zulu = function(argFoo) {
                    entity = argFoo;
                    mike = entity.type;
                    entity = _closure1_slot10;
                    entity = entity.FRIEND;
                    entity = mike === entity;
                    return entity;
                };
                zulu = oscar.bind(golf)(zulu);
                options = tango.bind(entity)(zulu);
                tango = options.bind(entity)();
                zulu = tango.done;
                golf = tango;
                oscar = undefined;
                tango = undefined;
                if(zulu) { _fun00010_ip = 496; continue _fun00009 }
 302:
                zulu = golf.value;
                backup = _closure1_slot9;
                foxtrot = backup.getUser;
                romeo = zulu.id;
                sizing = foxtrot.bind(backup)(romeo);
                if(!(yankee != sizing)) { _fun00010_ip = 478; continue _fun00009 }
 334:
                foxtrot = _closure1_slot0;
                romeo = _closure1_slot2;
                romeo = romeo[verify];
                foxtrot = foxtrot.bind(entity)(romeo);
                romeo = foxtrot.getNames;
                romeo = romeo.bind(foxtrot)(sizing);
                kilo = romeo.names;
                romeo = romeo.nick;
                backup = zulu.id;
                foxtrot = {};
                output = zulu.id;
                foxtrot['id'] = output;
                output = _closure1_slot10;
                output = output.FRIEND;
                foxtrot['type'] = output;
                foxtrot['user'] = sizing;
                foxtrot['names'] = kilo;
                foxtrot['nick'] = romeo;
                kilo = _closure1_slot7;
                romeo = kilo.getUserAffinity;
                zulu = zulu.id;
                zulu = romeo.bind(kilo)(zulu);
                kilo = yankee == zulu;
                romeo = undefined;
                if(kilo) { _fun00010_ip = 451; continue _fun00009 }
 445:
                romeo = zulu.affinity;
 451:
                sizing = yankee != romeo;
                kilo = 0;
                if(!sizing) { _fun00010_ip = 463; continue _fun00009 }
 460:
                kilo = romeo;
 463:
                foxtrot['affinity'] = kilo;
                report[backup] = foxtrot;
                oscar = romeo;
                tango = zulu;
 478:
                romeo = options.bind(entity)();
                zulu = romeo.done;
                golf = romeo;
                if(!zulu) { _fun00010_ip = 302; continue _fun00009 }
 496:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 9;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.userSearchItemsTransaction;
                mike = argFoo;
                tango = zulu.bind(tango)(mike);
                mike = tango.delete;
                mike = mike.bind(tango)();
                mike = global;
                zulu = mike.Object;
                mike = zulu.values;
                zulu = mike.bind(zulu)(report);
                mike = tango.putAll;
                mike = mike.bind(tango)(zulu);
                return entity;
            }
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/modules/UserSearchItems.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();