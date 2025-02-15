// app/modules/chat/useTypingText.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun100583: for(var _fun100583_ip = 0; ; ) switch(_fun100583_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun100583_ip = 46; continue _fun100583 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun100583_ip = 55; continue _fun100583 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun100583_ip = 345; continue _fun100583 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun100583_ip = 323; continue _fun100583 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun100583_ip = 283; continue _fun100583 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun100583_ip = 270; continue _fun100583 }
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
            if(!golf) { _fun100583_ip = 163; continue _fun100583 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun100583_ip = 179; continue _fun100583 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun100583_ip = 249; continue _fun100583 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun100583_ip = 249; continue _fun100583 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun100583_ip = 234; continue _fun100583 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun100583_ip = 247; continue _fun100583 }
 234:
            verify = _closure1_slot6;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun100583_ip = 265; continue _fun100583;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun100583_ip = 283; continue _fun100583;
 270:
            golf = _closure1_slot6;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun100583_ip = 323; continue _fun100583 }
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
            if(!tango) { _fun100583_ip = 330; continue _fun100583 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun100584: for(var _fun100584_ip = 0; ; ) switch(_fun100584_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun100584_ip = 56; continue _fun100584 }
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
                    _fun100584_ip = 67; continue _fun100584;
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
    var _closure1_slot5 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun100585: for(var _fun100585_ip = 0; ; ) switch(_fun100585_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun100585_ip = 23; continue _fun100585 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun100585_ip = 33; continue _fun100585 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun100585_ip = 70; continue _fun100585 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun100585_ip = 55; continue _fun100585 }
 70:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/chat/useTypingText.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useTypingText
        _fun100586: for(var _fun100586_ip = 0; ; ) switch(_fun100586_ip) {
 0:
            entity = argFoo;
            yankee = entity.channelId;
            var _closure2_slot0 = yankee;
            offset = entity.guildId;
            var _closure2_slot1 = offset;
            verify = entity.typingUserIds;
            var _closure2_slot2 = verify;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 2;
            tango = tango[entity];
            options = undefined;
            golf = report.bind(options)(tango);
            oscar = golf.useStateFromStoresArray;
            tango = _closure1_slot4;
            report = new Array(1);
            report[0] = tango;
            tango = new Array(3);
            tango[0] = yankee;
            tango[1] = offset;
            tango[2] = verify;
            mike = function() {
                _fun100587: for(var _fun100587_ip = 0; ; ) switch(_fun100587_ip) {
 0:
                    entity = new Array(0);
                    zulu = _closure1_slot5;
                    mike = _closure2_slot2;
                    golf = undefined;
                    oscar = zulu.bind(golf)(mike);
                    zulu = oscar.bind(golf)();
                    mike = zulu.done;
                    report = 3;
                    tango = null;
                    if(mike) { _fun100587_ip = 129; continue _fun100587 }
 42:
                    yankee = zulu.value;
                    offset = _closure1_slot4;
                    mike = offset.getUser;
                    backup = mike.bind(offset)(yankee);
                    if(!(tango != backup)) { _fun100587_ip = 114; continue _fun100587 }
 66:
                    offset = entity.push;
                    yankee = _closure1_slot1;
                    mike = _closure1_slot2;
                    mike = mike[report];
                    foxtrot = yankee.bind(golf)(mike);
                    romeo = foxtrot.getName;
                    yankee = _closure2_slot1;
                    mike = _closure2_slot0;
                    mike = romeo.bind(foxtrot)(yankee, mike, backup);
                    mike = offset.bind(entity)(mike);
 114:
                    offset = oscar.bind(golf)();
                    mike = offset.done;
                    zulu = offset;
                    if(!mike) { _fun100587_ip = 42; continue _fun100587 }
 129:
                    return entity;
                }
            };
            tango = oscar.bind(golf)(report, mike, tango);
            mike = _closure1_slot3;
            verify = 4;
            mike = mike.bind(options)(tango, verify);
            tango = 0;
            golf = mike[tango];
            tango = 1;
            yankee = mike[tango];
            romeo = mike[entity];
            entity = 3;
            tango = mike[entity];
            mike = null;
            report = mike == golf;
            entity = null;
            if(report) { _fun100586_ip = 427; continue _fun100586 }
 157:
            if(!(mike != yankee)) { _fun100586_ip = 365; continue _fun100586 }
 164:
            if(!(mike != romeo)) { _fun100586_ip = 299; continue _fun100586 }
 171:
            if(!(mike != tango)) { _fun100586_ip = 229; continue _fun100586 }
 175:
            oscar = _closure1_slot0;
            mike = _closure1_slot2;
            tango = mike[verify];
            tango = oscar.bind(options)(tango);
            report = tango.intl;
            tango = report.string;
            mike = mike[verify];
            mike = oscar.bind(options)(mike);
            mike = mike.t;
            mike = mike.uVDhqa;
            mike = tango.bind(report)(mike);
            _fun100586_ip = 297; continue _fun100586;
 229:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            oscar = tango[verify];
            oscar = report.bind(options)(oscar);
            offset = oscar.intl;
            oscar = offset.format;
            tango = tango[verify];
            tango = report.bind(options)(tango);
            tango = tango.t;
            report = tango.StKTho;
            tango = {};
            tango['a'] = golf;
            tango['b'] = yankee;
            tango['c'] = romeo;
            mike = oscar.bind(offset)(report, tango);
 297:
            _fun100586_ip = 363; continue _fun100586;
 299:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            oscar = tango[verify];
            oscar = report.bind(options)(oscar);
            offset = oscar.intl;
            oscar = offset.format;
            tango = tango[verify];
            tango = report.bind(options)(tango);
            tango = tango.t;
            report = tango.rB0CUV;
            tango = {};
            tango['a'] = golf;
            tango['b'] = yankee;
            mike = oscar.bind(offset)(report, tango);
 363:
            _fun100586_ip = 424; continue _fun100586;
 365:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            report = zulu[verify];
            report = tango.bind(options)(report);
            oscar = report.intl;
            report = oscar.format;
            zulu = zulu[verify];
            zulu = tango.bind(options)(zulu);
            zulu = zulu.t;
            tango = zulu.lJ9sZW;
            zulu = {};
            zulu['a'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 424:
            entity = mike;
 427:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();