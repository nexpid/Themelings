// app/modules/user_settings/UserSettingSearchManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun99986: for(var _fun99986_ip = 0; ; ) switch(_fun99986_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun99986_ip = 46; continue _fun99986 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun99986_ip = 55; continue _fun99986 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun99986_ip = 345; continue _fun99986 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun99986_ip = 323; continue _fun99986 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun99986_ip = 283; continue _fun99986 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun99986_ip = 270; continue _fun99986 }
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
            if(!golf) { _fun99986_ip = 163; continue _fun99986 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun99986_ip = 179; continue _fun99986 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun99986_ip = 249; continue _fun99986 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun99986_ip = 249; continue _fun99986 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun99986_ip = 234; continue _fun99986 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun99986_ip = 247; continue _fun99986 }
 234:
            verify = _closure1_slot5;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun99986_ip = 265; continue _fun99986;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun99986_ip = 283; continue _fun99986;
 270:
            golf = _closure1_slot5;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun99986_ip = 323; continue _fun99986 }
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
            if(!tango) { _fun99986_ip = 330; continue _fun99986 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun99987: for(var _fun99987_ip = 0; ; ) switch(_fun99987_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun99987_ip = 56; continue _fun99987 }
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
                    _fun99987_ip = 67; continue _fun99987;
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
    var _closure1_slot4 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun99988: for(var _fun99988_ip = 0; ; ) switch(_fun99988_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun99988_ip = 23; continue _fun99988 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun99988_ip = 33; continue _fun99988 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun99988_ip = 70; continue _fun99988 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun99988_ip = 55; continue _fun99988 }
 70:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    mike = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo) { // Original name: SettingSearchManager
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argFoo;
            zulu['terms'] = mike;
            mike = {};
            zulu['cache'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'search';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            mike = argFoo;
            var _closure3_slot1 = mike;
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            tango = function(argFoo) {
                zulu = _closure3_slot0;
                mike = zulu.getMatchingSettings;
                entity = _closure3_slot1;
                zulu = mike.bind(zulu)(entity);
                mike = argFoo;
                entity = undefined;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'getMatchingSettings';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun99993: for(var _fun99993_ip = 0; ; ) switch(_fun99993_ip) {
 0:
                tango = argFoo;
                zulu = this;
                var _closure3_slot0 = tango;
                entity = zulu.cache;
                entity = entity[tango];
                mike = null;
                if(!(mike == entity)) { _fun99993_ip = 71; continue _fun99993 }
 28:
                mike = new Array(0);
                var _closure3_slot1 = mike;
                golf = zulu.terms;
                oscar = golf.forEach;
                report = function(argFoo) {
                    _fun99994: for(var _fun99994_ip = 0; ; ) switch(_fun99994_ip) {
 0:
                        oscar = argFoo;
                        mike = oscar[Symbol.iterator];
                        oscar = mike().next;
                        zulu = oscar().value;
                        tango = mike;
                        entity = undefined;
                        report = tango === entity;
                        tango = undefined;
                        if(report) { _fun99994_ip = 27; continue _fun99994 }
 24:
                        tango = zulu;
 27:
                        zulu = undefined;
                        if(report) { _fun99994_ip = 57; continue _fun99994 }
 32:
                        golf = oscar().value;
                        oscar = mike;
                        oscar = oscar === entity;
                        zulu = undefined;
                        report = oscar;
                        if(oscar) { _fun99994_ip = 57; continue _fun99994 }
 51:
                        zulu = golf;
                        report = oscar;
 57:
                        if(report) { _fun99994_ip = 63; continue _fun99994 }
 60:
                        mike.return();
 63:
                        mike = _closure1_slot4;
                        golf = mike.bind(entity)(zulu);
                        report = golf.bind(entity)();
                        zulu = report.done;
                        oscar = 2;
                        if(zulu) { _fun99994_ip = 179; continue _fun99994 }
 93:
                        yankee = report.value;
                        verify = _closure1_slot0;
                        zulu = _closure1_slot1;
                        zulu = zulu[oscar];
                        offset = verify.bind(entity)(zulu);
                        verify = _closure3_slot0;
                        zulu = verify.toLowerCase;
                        verify = zulu.bind(verify)();
                        zulu = yankee.toLowerCase;
                        zulu = zulu.bind(yankee)();
                        zulu = offset.bind(entity)(verify, zulu);
                        if(zulu) { _fun99994_ip = 165; continue _fun99994 }
 148:
                        verify = golf.bind(entity)();
                        zulu = verify.done;
                        report = verify;
                        if(zulu) { _fun99994_ip = 179; continue _fun99994 }
 163:
                        _fun99994_ip = 93; continue _fun99994;
 165:
                        zulu = _closure3_slot1;
                        mike = zulu.push;
                        mike = mike.bind(zulu)(tango);
 179:
                        return entity;
                    }
                };
                report = oscar.bind(golf)(report);
                zulu = zulu.cache;
                zulu[tango] = mike;
                return mike;
 71:
                return entity;
            }
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/UserSettingSearchManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();