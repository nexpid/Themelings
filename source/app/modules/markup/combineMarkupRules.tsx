// app/modules/markup/combineMarkupRules.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun61725: for(var _fun61725_ip = 0; ; ) switch(_fun61725_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun61725_ip = 46; continue _fun61725 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun61725_ip = 55; continue _fun61725 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun61725_ip = 343; continue _fun61725 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun61725_ip = 323; continue _fun61725 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun61725_ip = 283; continue _fun61725 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun61725_ip = 270; continue _fun61725 }
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
            if(!golf) { _fun61725_ip = 163; continue _fun61725 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun61725_ip = 179; continue _fun61725 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun61725_ip = 249; continue _fun61725 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun61725_ip = 249; continue _fun61725 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun61725_ip = 234; continue _fun61725 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun61725_ip = 247; continue _fun61725 }
 234:
            verify = _closure1_slot1;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun61725_ip = 265; continue _fun61725;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun61725_ip = 283; continue _fun61725;
 270:
            golf = _closure1_slot1;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun61725_ip = 323; continue _fun61725 }
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
            if(!tango) { _fun61725_ip = 330; continue _fun61725 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun61726: for(var _fun61726_ip = 0; ; ) switch(_fun61726_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun61726_ip = 56; continue _fun61726 }
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
                    _fun61726_ip = 67; continue _fun61726;
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
    var _closure1_slot0 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun61727: for(var _fun61727_ip = 0; ; ) switch(_fun61727_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun61727_ip = 23; continue _fun61727 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun61727_ip = 33; continue _fun61727 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun61727_ip = 70; continue _fun61727 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun61727_ip = 55; continue _fun61727 }
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
    tango = 'modules/markup/combineMarkupRules.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: combineMarkupRules
        _fun61728: for(var _fun61728_ip = 0; ; ) switch(_fun61728_ip) {
 0:
            entity = {};
            zulu = _closure1_slot0;
            oscar = undefined;
            mike = argFoo;
            report = zulu.bind(oscar)(mike);
            zulu = report.bind(oscar)();
            mike = zulu.done;
            tango = zulu;
            zulu = undefined;
            if(mike) { _fun61728_ip = 144; continue _fun61728 }
 36:
            romeo = tango.value;
            offset = romeo;
            mike = zulu;
            zulu = mike;
            for(golf in offset)
 58:
            {
                zulu = mike;
 70:
                mike = golf;
                foxtrot = mike in entity;
                backup = {};
                if(foxtrot) { _fun61728_ip = 98; continue _fun61728 }
 82:
                sizing = romeo[mike];
                output = backup;
                foxtrot = copyDataProperties(output, sizing);
                foxtrot = backup;
                _fun61728_ip = 123; continue _fun61728;
 98:
                sizing = entity[mike];
                output = backup;
                kilo = copyDataProperties(output, sizing);
                sizing = romeo[mike];
                output = backup;
                kilo = copyDataProperties(output, sizing);
                foxtrot = backup;
 123:
                entity[mike] = foxtrot;
                _fun61728_ip = 58; continue _fun61728;
            }
 129:
            golf = report.bind(oscar)();
            mike = golf.done;
            tango = golf;
            if(!mike) { _fun61728_ip = 36; continue _fun61728 }
 144:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();