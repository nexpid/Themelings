// app/utils/MentionGuardUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun87479: for(var _fun87479_ip = 0; ; ) switch(_fun87479_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun87479_ip = 46; continue _fun87479 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun87479_ip = 55; continue _fun87479 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun87479_ip = 345; continue _fun87479 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun87479_ip = 323; continue _fun87479 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun87479_ip = 283; continue _fun87479 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun87479_ip = 270; continue _fun87479 }
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
            if(!golf) { _fun87479_ip = 163; continue _fun87479 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun87479_ip = 179; continue _fun87479 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun87479_ip = 249; continue _fun87479 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun87479_ip = 249; continue _fun87479 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun87479_ip = 234; continue _fun87479 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun87479_ip = 247; continue _fun87479 }
 234:
            verify = _closure1_slot9;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun87479_ip = 265; continue _fun87479;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun87479_ip = 283; continue _fun87479;
 270:
            golf = _closure1_slot9;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun87479_ip = 323; continue _fun87479 }
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
            if(!tango) { _fun87479_ip = 330; continue _fun87479 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun87480: for(var _fun87480_ip = 0; ; ) switch(_fun87480_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun87480_ip = 56; continue _fun87480 }
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
                    _fun87480_ip = 67; continue _fun87480;
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
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun87481: for(var _fun87481_ip = 0; ; ) switch(_fun87481_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun87481_ip = 23; continue _fun87481 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun87481_ip = 33; continue _fun87481 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun87481_ip = 70; continue _fun87481 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun87481_ip = 55; continue _fun87481 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    golf = function(argFoo, argBar) { // Original name: everyoneMemberCount
        _fun87482: for(var _fun87482_ip = 0; ; ) switch(_fun87482_ip) {
 0:
            zulu = argBar;
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = 0;
            var _closure2_slot1 = mike;
            tango = zulu.isThread;
            tango = tango.bind(zulu)();
            if(tango) { _fun87482_ip = 94; continue _fun87482 }
 31:
            golf = _closure1_slot3;
            oscar = golf.getProps;
            tango = zulu.getGuildId;
            report = tango.bind(zulu)();
            tango = zulu.id;
            tango = oscar.bind(golf)(report, tango);
            oscar = tango.groups;
            report = oscar.forEach;
            tango = function(argFoo) {
                _fun87483: for(var _fun87483_ip = 0; ; ) switch(_fun87483_ip) {
 0:
                    entity = argFoo;
                    tango = _closure2_slot0;
                    zulu = '@everyone';
                    zulu = zulu !== tango;
                    if(!zulu) { _fun87483_ip = 45; continue _fun87483 }
 23:
                    report = entity.id;
                    tango = _closure1_slot6;
                    tango = tango.OFFLINE;
                    zulu = report === tango;
 45:
                    if(zulu) { _fun87483_ip = 65; continue _fun87483 }
 48:
                    zulu = _closure2_slot1;
                    entity = entity.count;
                    entity = zulu + entity;
                    _closure2_slot1 = entity;
 65:
                    entity = undefined;
                    return entity;
                }
            };
            tango = report.bind(oscar)(tango);
            entity = _closure2_slot1;
            _fun87482_ip = 117; continue _fun87482;
 94:
            zulu = zulu.memberCount;
            tango = null;
            tango = tango != zulu;
            mike = 0;
            if(!tango) { _fun87482_ip = 114; continue _fun87482 }
 111:
            mike = zulu;
 114:
            entity = mike;
 117:
            return entity;
        }
    };
    var _closure1_slot10 = golf;
    entity = function(argFoo) { // Original name: parsedItemUsesEveryoneRole
        _fun87484: for(var _fun87484_ip = 0; ; ) switch(_fun87484_ip) {
 0:
            entity = argFoo;
            mike = entity.content;
            zulu = 'string';
            mike = typeof mike;
            if(!(zulu !== mike)) { _fun87484_ip = 123; continue _fun87484 }
 19:
            mike = global;
            tango = mike.Array;
            zulu = tango.isArray;
            mike = entity.content;
            mike = zulu.bind(tango)(mike);
            if(!mike) { _fun87484_ip = 189; continue _fun87484 }
 48:
            zulu = _closure1_slot8;
            mike = entity.content;
            golf = undefined;
            oscar = zulu.bind(golf)(mike);
            tango = oscar.bind(golf)();
            zulu = tango.done;
            mike = null;
            report = tango;
            if(zulu) { _fun87484_ip = 121; continue _fun87484 }
 84:
            tango = _closure1_slot11;
            zulu = report.value;
            zulu = tango.bind(golf)(zulu);
            if(!(mike == zulu)) { _fun87484_ip = 119; continue _fun87484 }
 102:
            verify = oscar.bind(golf)();
            tango = verify.done;
            report = verify;
            if(tango) { _fun87484_ip = 121; continue _fun87484 }
 117:
            _fun87484_ip = 84; continue _fun87484;
 119:
            return zulu;
 121:
            return mike;
 123:
            zulu = entity.type;
            mike = 'inlineCode';
            if(!(mike !== zulu)) { _fun87484_ip = 217; continue _fun87484 }
 136:
            zulu = entity.type;
            mike = 'codeBlock';
            if(!(mike !== zulu)) { _fun87484_ip = 217; continue _fun87484 }
 149:
            oscar = entity.content;
            entity = null;
            mike = entity == oscar;
            tango = undefined;
            zulu = undefined;
            if(mike) { _fun87484_ip = 185; continue _fun87484 }
 167:
            report = oscar.match;
            mike = _closure1_slot7;
            zulu = report.bind(oscar)(mike);
 185:
            if(!(entity == zulu)) { _fun87484_ip = 193; continue _fun87484 }
 189:
            entity = null;
            return entity;
 193:
            mike = _closure1_slot2;
            entity = 1;
            mike = mike.bind(tango)(zulu, entity);
            entity = 0;
            entity = mike[entity];
            return entity;
 217:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    mike = global;
    yankee = mike.Object;
    offset = yankee.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = verify.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = oscar[options];
    options = verify.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 2;
    options = oscar[options];
    options = verify.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = oscar[options];
    options = report.bind(entity)(options);
    verify = options.Permissions;
    var _closure1_slot5 = verify;
    options = options.StatusTypes;
    var _closure1_slot6 = options;
    verify = mike.RegExp;
    mike = verify.prototype;
    options = Object.create(mike, {constructor: {value: verify}});
    backup = /@(:?everyone|here)/;
    kilo = options;
    mike = new kilo[verify](backup, foxtrot);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot7 = mike;
    mike = {};
    options = function(argFoo, argBar) { // Original name: shouldShowEveryoneGuard
        _fun87485: for(var _fun87485_ip = 0; ; ) switch(_fun87485_ip) {
 0:
            report = argBar;
            entity = report.getGuildId;
            oscar = entity.bind(report)();
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 4;
            entity = tango[entity];
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            entity = 'isGuildChannel with null guildId';
            entity = zulu.bind(tango)(oscar, entity);
            zulu = _closure1_slot10;
            entity = argFoo;
            zulu = zulu.bind(tango)(entity, report);
            entity = 30;
            entity = zulu > entity;
            if(!entity) { _fun87485_ip = 99; continue _fun87485 }
 73:
            tango = _closure1_slot4;
            zulu = tango.can;
            mike = _closure1_slot5;
            mike = mike.MENTION_EVERYONE;
            entity = zulu.bind(tango)(mike, report);
 99:
            return entity;
        }
    };
    mike['shouldShowEveryoneGuard'] = options;
    mike['everyoneMemberCount'] = golf;
    tango = function(argFoo, argBar) { // Original name: extractEveryoneRole
        _fun87486: for(var _fun87486_ip = 0; ; ) switch(_fun87486_ip) {
 0:
            mike = _closure1_slot8;
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 5;
            entity = tango[entity];
            oscar = undefined;
            report = zulu.bind(oscar)(entity);
            tango = report.parsePreprocessor;
            zulu = argBar;
            entity = argFoo;
            entity = tango.bind(report)(zulu, entity);
            report = mike.bind(oscar)(entity);
            zulu = report.bind(oscar)();
            mike = zulu.done;
            entity = null;
            tango = zulu;
            if(mike) { _fun87486_ip = 106; continue _fun87486 }
 69:
            zulu = _closure1_slot11;
            mike = tango.value;
            mike = zulu.bind(oscar)(mike);
            if(!(entity == mike)) { _fun87486_ip = 104; continue _fun87486 }
 87:
            options = report.bind(oscar)();
            zulu = options.done;
            tango = options;
            if(zulu) { _fun87486_ip = 106; continue _fun87486 }
 102:
            _fun87486_ip = 69; continue _fun87486;
 104:
            return mike;
 106:
            return entity;
        }
    };
    mike['extractEveryoneRole'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/MentionGuardUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();