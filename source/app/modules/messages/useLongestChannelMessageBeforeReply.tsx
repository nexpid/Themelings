// app/modules/messages/useLongestChannelMessageBeforeReply.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun101506: for(var _fun101506_ip = 0; ; ) switch(_fun101506_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun101506_ip = 46; continue _fun101506 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun101506_ip = 55; continue _fun101506 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun101506_ip = 345; continue _fun101506 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun101506_ip = 323; continue _fun101506 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun101506_ip = 283; continue _fun101506 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun101506_ip = 270; continue _fun101506 }
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
            if(!golf) { _fun101506_ip = 163; continue _fun101506 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun101506_ip = 179; continue _fun101506 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun101506_ip = 249; continue _fun101506 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun101506_ip = 249; continue _fun101506 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun101506_ip = 234; continue _fun101506 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun101506_ip = 247; continue _fun101506 }
 234:
            verify = _closure1_slot4;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun101506_ip = 265; continue _fun101506;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun101506_ip = 283; continue _fun101506;
 270:
            golf = _closure1_slot4;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun101506_ip = 323; continue _fun101506 }
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
            if(!tango) { _fun101506_ip = 330; continue _fun101506 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun101507: for(var _fun101507_ip = 0; ; ) switch(_fun101507_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun101507_ip = 56; continue _fun101507 }
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
                    _fun101507_ip = 67; continue _fun101507;
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
        _fun101508: for(var _fun101508_ip = 0; ; ) switch(_fun101508_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun101508_ip = 23; continue _fun101508 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun101508_ip = 33; continue _fun101508 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun101508_ip = 70; continue _fun101508 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun101508_ip = 55; continue _fun101508 }
 70:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/useLongestChannelMessageBeforeReply.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useLongestChannelMessageBeforeReply
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 1;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun101510: for(var _fun101510_ip = 0; ; ) switch(_fun101510_ip) {
 0:
                entity = _closure2_slot1;
                golf = null;
                if(!(golf != entity)) { _fun101510_ip = 61; continue _fun101510 }
 13:
                tango = _closure1_slot2;
                zulu = tango.getMessages;
                entity = _closure2_slot0;
                tango = zulu.bind(tango)(entity);
                zulu = tango.findOldest;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.author;
                    mike = entity.id;
                    entity = _closure2_slot1;
                    entity = mike === entity;
                    return entity;
                };
                entity = zulu.bind(tango)(entity);
                if(!(golf == entity)) { _fun101510_ip = 65; continue _fun101510 }
 61:
                zulu = undefined;
                return zulu;
 65:
                zulu = _closure1_slot3;
                mike = tango.toArray;
                mike = mike.bind(tango)();
                oscar = undefined;
                report = zulu.bind(oscar)(mike);
                zulu = report.bind(oscar)();
                mike = zulu.done;
                tango = entity;
                entity = tango;
                if(mike) { _fun101510_ip = 185; continue _fun101510 }
 104:
                mike = zulu.value;
                verify = mike.author;
                offset = verify.id;
                verify = _closure2_slot1;
                entity = tango;
                if(!(offset === verify)) { _fun101510_ip = 185; continue _fun101510 }
 131:
                verify = mike.content;
                offset = verify.length;
                yankee = golf == tango;
                verify = undefined;
                if(yankee) { _fun101510_ip = 160; continue _fun101510 }
 150:
                yankee = tango.content;
                verify = yankee.length;
 160:
                if(!(offset > verify)) { _fun101510_ip = 167; continue _fun101510 }
 164:
                tango = mike;
 167:
                offset = report.bind(oscar)();
                mike = offset.done;
                zulu = offset;
                entity = tango;
                if(!mike) { _fun101510_ip = 104; continue _fun101510 }
 185:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useLongestChannelMessageBeforeReply'] = mike;
    return entity;
})();