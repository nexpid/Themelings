// app/modules/guild_scheduled_events/useCanCreateAnEvent.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun76146: for(var _fun76146_ip = 0; ; ) switch(_fun76146_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun76146_ip = 46; continue _fun76146 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun76146_ip = 55; continue _fun76146 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun76146_ip = 345; continue _fun76146 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun76146_ip = 323; continue _fun76146 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun76146_ip = 283; continue _fun76146 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun76146_ip = 270; continue _fun76146 }
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
            if(!golf) { _fun76146_ip = 163; continue _fun76146 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun76146_ip = 179; continue _fun76146 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun76146_ip = 249; continue _fun76146 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun76146_ip = 249; continue _fun76146 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun76146_ip = 234; continue _fun76146 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun76146_ip = 247; continue _fun76146 }
 234:
            verify = _closure1_slot9;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun76146_ip = 265; continue _fun76146;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun76146_ip = 283; continue _fun76146;
 270:
            golf = _closure1_slot9;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun76146_ip = 323; continue _fun76146 }
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
            if(!tango) { _fun76146_ip = 330; continue _fun76146 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun76147: for(var _fun76147_ip = 0; ; ) switch(_fun76147_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun76147_ip = 56; continue _fun76147 }
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
                    _fun76147_ip = 67; continue _fun76147;
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
        _fun76148: for(var _fun76148_ip = 0; ; ) switch(_fun76148_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun76148_ip = 23; continue _fun76148 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun76148_ip = 33; continue _fun76148 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun76148_ip = 70; continue _fun76148 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun76148_ip = 55; continue _fun76148 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GUILD_VOCAL_CHANNELS_KEY;
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
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/useCanCreateAnEvent.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useCanCreateAnEvent
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 5;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        options = _closure1_slot5;
        zulu = new Array(3);
        zulu[0] = options;
        options = _closure1_slot3;
        zulu[1] = options;
        mike = _closure1_slot6;
        zulu[2] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun76150: for(var _fun76150_ip = 0; ; ) switch(_fun76150_ip) {
 0:
                zulu = _closure1_slot5;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                tango = mike.bind(zulu)(entity);
                zulu = _closure1_slot6;
                mike = zulu.can;
                entity = _closure1_slot7;
                entity = entity.ADMINISTRATOR;
                entity = mike.bind(zulu)(entity, tango);
                if(entity) { _fun76150_ip = 265; continue _fun76150 }
 56:
                zulu = _closure1_slot6;
                mike = zulu.can;
                entity = _closure1_slot7;
                entity = entity.CREATE_EVENTS;
                entity = mike.bind(zulu)(entity, tango);
                if(entity) { _fun76150_ip = 265; continue _fun76150 }
 88:
                mike = _closure1_slot8;
                tango = _closure1_slot3;
                zulu = tango.getChannels;
                entity = _closure2_slot0;
                zulu = zulu.bind(tango)(entity);
                entity = _closure1_slot4;
                entity = zulu[entity];
                options = undefined;
                golf = mike.bind(options)(entity);
                mike = golf.bind(options)();
                entity = mike.done;
                oscar = 6;
                report = 1;
                tango = 0;
                zulu = null;
                if(entity) { _fun76150_ip = 261; continue _fun76150 }
 148:
                entity = mike.value;
                foxtrot = entity.channel;
                entity = _closure2_slot1;
                if(!(zulu != entity)) { _fun76150_ip = 179; continue _fun76150 }
 166:
                yankee = foxtrot.type;
                entity = _closure2_slot1;
                if(!(yankee === entity)) { _fun76150_ip = 240; continue _fun76150 }
 179:
                yankee = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[oscar];
                yankee = yankee.bind(options)(entity);
                entity = yankee.attachChannelPermissions;
                yankee = entity.bind(yankee)(foxtrot);
                entity = _closure1_slot2;
                entity = entity.bind(options)(yankee, report);
                romeo = entity[tango];
                yankee = _closure1_slot6;
                entity = yankee.can;
                entity = entity.bind(yankee)(romeo, foxtrot);
                if(entity) { _fun76150_ip = 257; continue _fun76150 }
 240:
                yankee = golf.bind(options)();
                entity = yankee.done;
                mike = yankee;
                if(entity) { _fun76150_ip = 261; continue _fun76150 }
 255:
                _fun76150_ip = 148; continue _fun76150;
 257:
                entity = true;
                return entity;
 261:
                entity = false;
                return entity;
 265:
                entity = true;
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();