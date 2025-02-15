// app/modules/user_settings/UserSettingsExperimentsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun98396: for(var _fun98396_ip = 0; ; ) switch(_fun98396_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun98396_ip = 46; continue _fun98396 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun98396_ip = 55; continue _fun98396 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun98396_ip = 345; continue _fun98396 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun98396_ip = 323; continue _fun98396 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun98396_ip = 283; continue _fun98396 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun98396_ip = 270; continue _fun98396 }
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
            if(!golf) { _fun98396_ip = 163; continue _fun98396 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun98396_ip = 179; continue _fun98396 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun98396_ip = 249; continue _fun98396 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun98396_ip = 249; continue _fun98396 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun98396_ip = 234; continue _fun98396 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun98396_ip = 247; continue _fun98396 }
 234:
            verify = _closure1_slot4;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun98396_ip = 265; continue _fun98396;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun98396_ip = 283; continue _fun98396;
 270:
            golf = _closure1_slot4;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun98396_ip = 323; continue _fun98396 }
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
            if(!tango) { _fun98396_ip = 330; continue _fun98396 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun98397: for(var _fun98397_ip = 0; ; ) switch(_fun98397_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun98397_ip = 56; continue _fun98397 }
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
                    _fun98397_ip = 67; continue _fun98397;
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
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun98398: for(var _fun98398_ip = 0; ; ) switch(_fun98398_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun98398_ip = 23; continue _fun98398 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun98398_ip = 33; continue _fun98398 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun98398_ip = 70; continue _fun98398 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun98398_ip = 55; continue _fun98398 }
 70:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    report = function(argFoo) { // Original name: getExperimentDateFromId
        _fun98399: for(var _fun98399_ip = 0; ; ) switch(_fun98399_ip) {
 0:
            zulu = _closure1_slot2;
            mike = zulu.exec;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity);
            entity = null;
            mike = entity != zulu;
            if(!mike) { _fun98399_ip = 37; continue _fun98399 }
 30:
            mike = 1;
            entity = zulu[mike];
 37:
            return entity;
        }
    };
    var _closure1_slot5 = report;
    tango = function(argFoo, argBar) { // Original name: matchesDeep
        _fun98400: for(var _fun98400_ip = 0; ; ) switch(_fun98400_ip) {
 0:
            mike = argFoo;
            oscar = argBar;
            entity = global;
            tango = entity.Array;
            zulu = tango.isArray;
            zulu = zulu.bind(tango)(mike);
            if(zulu) { _fun98400_ip = 168; continue _fun98400 }
 30:
            tango = typeof mike;
            zulu = 'object';
            if(!(zulu === tango)) { _fun98400_ip = 47; continue _fun98400 }
 41:
            zulu = null;
            if(!(zulu === mike)) { _fun98400_ip = 98; continue _fun98400 }
 47:
            zulu = 'string';
            if(!(zulu === tango)) { _fun98400_ip = 233; continue _fun98400 }
 58:
            zulu = mike.toLowerCase;
            report = zulu.bind(mike)();
            tango = report.includes;
            zulu = oscar.toLowerCase;
            zulu = zulu.bind(oscar)();
            zulu = tango.bind(report)(zulu);
            if(!zulu) { _fun98400_ip = 233; continue _fun98400 }
 94:
            zulu = true;
            return zulu;
 98:
            zulu = entity.Object;
            entity = zulu.values;
            golf = entity.bind(zulu)(mike);
            entity = golf.length;
            report = 0;
            entity = report < entity;
            zulu = undefined;
            if(!entity) { _fun98400_ip = 233; continue _fun98400 }
 133:
            options = _closure1_slot6;
            entity = golf[report];
            entity = options.bind(zulu)(entity, oscar);
            if(entity) { _fun98400_ip = 164; continue _fun98400 }
 150:
            report = report + 1;
            entity = golf.length;
            if(report < entity) { _fun98400_ip = 133; continue _fun98400 }
 162:
            _fun98400_ip = 233; continue _fun98400;
 164:
            entity = true;
            return entity;
 168:
            entity = _closure1_slot3;
            tango = undefined;
            zulu = entity.bind(tango)(mike);
            mike = zulu.bind(tango)();
            entity = mike.done;
            if(entity) { _fun98400_ip = 233; continue _fun98400 }
 194:
            golf = _closure1_slot6;
            entity = mike.value;
            entity = golf.bind(tango)(entity, oscar);
            if(entity) { _fun98400_ip = 229; continue _fun98400 }
 212:
            golf = zulu.bind(tango)();
            entity = golf.done;
            mike = golf;
            if(entity) { _fun98400_ip = 233; continue _fun98400 }
 227:
            _fun98400_ip = 194; continue _fun98400;
 229:
            entity = true;
            return entity;
 233:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = /^(\d{4}-\d{1,2})/;
    var _closure1_slot2 = entity;
    entity = 1;
    golf = oscar[entity];
    oscar = argBar;
    entity = undefined;
    options = oscar.bind(entity)(golf);
    golf = options.fileFinishedImporting;
    oscar = 'modules/user_settings/UserSettingsExperimentsUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['getExperimentDateFromId'] = report;
    report = function(argFoo) { // Original name: getEntries
        entity = global;
        zulu = entity.Array;
        mike = zulu.from;
        report = entity.Object;
        tango = report.entries;
        entity = argFoo;
        entity = tango.bind(report)(entity);
        zulu = mike.bind(zulu)(entity);
        mike = zulu.map;
        entity = function(argFoo) {
            _fun98402: for(var _fun98402_ip = 0; ; ) switch(_fun98402_ip) {
 0:
                report = argFoo;
                entity = report[Symbol.iterator];
                report = entity().next;
                mike = report().value;
                zulu = entity;
                golf = undefined;
                tango = zulu === golf;
                zulu = undefined;
                if(tango) { _fun98402_ip = 27; continue _fun98402 }
 24:
                zulu = mike;
 27:
                mike = undefined;
                if(tango) { _fun98402_ip = 57; continue _fun98402 }
 32:
                oscar = report().value;
                report = entity;
                report = report === golf;
                mike = undefined;
                tango = report;
                if(report) { _fun98402_ip = 57; continue _fun98402 }
 51:
                mike = oscar;
                tango = report;
 57:
                if(tango) { _fun98402_ip = 63; continue _fun98402 }
 60:
                entity.return();
 63:
                entity = {};
                entity['id'] = zulu;
                entity['experiment'] = mike;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getEntries'] = report;
    zulu['matchesDeep'] = tango;
    tango = function(argFoo, argBar) { // Original name: sortEntries
        zulu = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = zulu.slice;
        zulu = mike.bind(zulu)();
        mike = zulu.sort;
        entity = function(argFoo, argBar) {
            _fun98404: for(var _fun98404_ip = 0; ; ) switch(_fun98404_ip) {
 0:
                zulu = argFoo;
                mike = argBar;
                oscar = _closure2_slot0;
                entity = null;
                options = entity == zulu;
                golf = undefined;
                report = undefined;
                if(options) { _fun98404_ip = 31; continue _fun98404 }
 26:
                report = zulu.id;
 31:
                report = oscar[report];
                if(!(entity != report)) { _fun98404_ip = 68; continue _fun98404 }
 39:
                oscar = _closure2_slot0;
                options = entity == mike;
                report = undefined;
                if(options) { _fun98404_ip = 57; continue _fun98404 }
 52:
                report = mike.id;
 57:
                report = oscar[report];
                if(!(entity != report)) { _fun98404_ip = 214; continue _fun98404 }
 68:
                oscar = _closure2_slot0;
                options = entity == zulu;
                report = undefined;
                if(options) { _fun98404_ip = 86; continue _fun98404 }
 81:
                report = zulu.id;
 86:
                report = oscar[report];
                if(!(entity == report)) { _fun98404_ip = 120; continue _fun98404 }
 94:
                report = _closure2_slot0;
                oscar = entity == mike;
                tango = undefined;
                if(oscar) { _fun98404_ip = 112; continue _fun98404 }
 107:
                tango = mike.id;
 112:
                tango = report[tango];
                if(!(entity == tango)) { _fun98404_ip = 209; continue _fun98404 }
 120:
                oscar = _closure1_slot5;
                tango = zulu.id;
                report = oscar.bind(golf)(tango);
                tango = mike.id;
                tango = oscar.bind(golf)(tango);
                if(!(entity != report)) { _fun98404_ip = 172; continue _fun98404 }
 151:
                if(!(entity != tango)) { _fun98404_ip = 172; continue _fun98404 }
 155:
                entity = tango.localeCompare;
                entity = entity.bind(tango)(report);
                tango = 0;
                if(!(tango === entity)) { _fun98404_ip = 207; continue _fun98404 }
 172:
                zulu = zulu.experiment;
                tango = zulu.title;
                zulu = tango.localeCompare;
                mike = mike.experiment;
                mike = mike.title;
                mike = zulu.bind(tango)(mike);
                return mike;
 207:
                return entity;
 209:
                entity = 1;
                return entity;
 214:
                entity = -1;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['sortEntries'] = tango;
    mike = function(argFoo, argBar) { // Original name: getBestMatches
        _fun98405: for(var _fun98405_ip = 0; ; ) switch(_fun98405_ip) {
 0:
            entity = argFoo;
            report = argBar;
            tango = report.split;
            zulu = /\s+/g;
            report = tango.bind(report)(zulu);
            tango = report.filter;
            zulu = function(argFoo) {
                mike = '';
                entity = argFoo;
                entity = mike !== entity;
                return entity;
            };
            romeo = tango.bind(report)(zulu);
            zulu = romeo.length;
            golf = 0;
            if(!(golf !== zulu)) { _fun98405_ip = 280; continue _fun98405 }
 63:
            oscar = new Array(0);
            report = _closure1_slot3;
            tango = undefined;
            yankee = report.bind(tango)(entity);
            options = yankee.bind(tango)();
            report = options.done;
            offset = null;
            verify = 1;
            if(report) { _fun98405_ip = 229; continue _fun98405 }
 101:
            backup = options.value;
            report = _closure1_slot3;
            output = report.bind(tango)(romeo);
            report = output.bind(tango)();
            foxtrot = report.done;
            sizing = report;
            kilo = 0;
            report = 0;
            if(foxtrot) { _fun98405_ip = 180; continue _fun98405 }
 134:
            result = _closure1_slot6;
            foxtrot = sizing.value;
            foxtrot = result.bind(tango)(backup, foxtrot);
            result = kilo;
            if(!foxtrot) { _fun98405_ip = 159; continue _fun98405 }
 155:
            result = kilo + verify;
 159:
            echo = output.bind(tango)();
            foxtrot = echo.done;
            kilo = result;
            sizing = echo;
            report = kilo;
            if(!foxtrot) { _fun98405_ip = 134; continue _fun98405 }
 180:
            if(!(golf !== report)) { _fun98405_ip = 214; continue _fun98405 }
 184:
            foxtrot = oscar[report];
            if(!(offset == foxtrot)) { _fun98405_ip = 200; continue _fun98405 }
 192:
            foxtrot = new Array(0);
            oscar[report] = foxtrot;
 200:
            foxtrot = oscar[report];
            report = foxtrot.push;
            report = report.bind(foxtrot)(backup);
 214:
            foxtrot = yankee.bind(tango)();
            report = foxtrot.done;
            options = foxtrot;
            if(!report) { _fun98405_ip = 101; continue _fun98405 }
 229:
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[golf];
            zulu = report.bind(tango)(zulu);
            report = oscar.filter;
            mike = function(argFoo) {
                mike = undefined;
                entity = argFoo;
                entity = mike !== entity;
                return entity;
            };
            report = report.bind(oscar)(mike);
            mike = report.reverse;
            mike = mike.bind(report)();
            mike = zulu.bind(tango)(mike);
            return mike;
 280:
            return entity;
        }
    };
    zulu['getBestMatches'] = mike;
    return entity;
})();