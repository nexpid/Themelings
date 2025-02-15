// app/modules/application_commands/native/ApplicationCommandValidationUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun101078: for(var _fun101078_ip = 0; ; ) switch(_fun101078_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun101078_ip = 46; continue _fun101078 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun101078_ip = 55; continue _fun101078 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun101078_ip = 345; continue _fun101078 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun101078_ip = 323; continue _fun101078 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun101078_ip = 283; continue _fun101078 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun101078_ip = 270; continue _fun101078 }
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
            if(!golf) { _fun101078_ip = 163; continue _fun101078 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun101078_ip = 179; continue _fun101078 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun101078_ip = 249; continue _fun101078 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun101078_ip = 249; continue _fun101078 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun101078_ip = 234; continue _fun101078 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun101078_ip = 247; continue _fun101078 }
 234:
            verify = _closure1_slot1;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun101078_ip = 265; continue _fun101078;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun101078_ip = 283; continue _fun101078;
 270:
            golf = _closure1_slot1;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun101078_ip = 323; continue _fun101078 }
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
            if(!tango) { _fun101078_ip = 330; continue _fun101078 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun101079: for(var _fun101079_ip = 0; ; ) switch(_fun101079_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun101079_ip = 56; continue _fun101079 }
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
                    _fun101079_ip = 67; continue _fun101079;
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
    var _closure1_slot0 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun101080: for(var _fun101080_ip = 0; ; ) switch(_fun101080_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun101080_ip = 23; continue _fun101080 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun101080_ip = 33; continue _fun101080 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun101080_ip = 70; continue _fun101080 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun101080_ip = 55; continue _fun101080 }
 70:
            return entity;
        }
    };
    var _closure1_slot1 = entity;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_commands/native/ApplicationCommandValidationUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) {
        _fun101081: for(var _fun101081_ip = 0; ; ) switch(_fun101081_ip) {
 0:
            golf = argBar;
            entity = argFoo;
            zulu = entity.options;
            entity = null;
            if(!(entity != zulu)) { _fun101081_ip = 109; continue _fun101081 }
 17:
            mike = _closure1_slot0;
            oscar = undefined;
            report = mike.bind(oscar)(zulu);
            zulu = report.bind(oscar)();
            mike = zulu.done;
            tango = zulu;
            if(mike) { _fun101081_ip = 107; continue _fun101081 }
 46:
            mike = tango.value;
            zulu = mike.name;
            zulu = golf[zulu];
            options = mike.required;
            if(!options) { _fun101081_ip = 73; continue _fun101081 }
 69:
            if(!(entity != zulu)) { _fun101081_ip = 105; continue _fun101081 }
 73:
            if(!(entity != zulu)) { _fun101081_ip = 88; continue _fun101081 }
 77:
            zulu = zulu.success;
            if(zulu) { _fun101081_ip = 88; continue _fun101081 }
 86:
            return mike;
 88:
            options = report.bind(oscar)();
            zulu = options.done;
            tango = options;
            if(zulu) { _fun101081_ip = 107; continue _fun101081 }
 103:
            _fun101081_ip = 46; continue _fun101081;
 105:
            return mike;
 107:
            return entity;
 109:
            return entity;
        }
    };
    zulu['getFirstInvalidOption'] = mike;
    return entity;
})();