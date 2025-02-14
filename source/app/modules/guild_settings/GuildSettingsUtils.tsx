// app/modules/guild_settings/GuildSettingsUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun126334: for(var _fun126334_ip = 0; ; ) switch(_fun126334_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun126334_ip = 46; continue _fun126334 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun126334_ip = 55; continue _fun126334 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun126334_ip = 345; continue _fun126334 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun126334_ip = 323; continue _fun126334 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun126334_ip = 283; continue _fun126334 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun126334_ip = 270; continue _fun126334 }
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
            if(!golf) { _fun126334_ip = 163; continue _fun126334 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun126334_ip = 179; continue _fun126334 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun126334_ip = 249; continue _fun126334 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun126334_ip = 249; continue _fun126334 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun126334_ip = 234; continue _fun126334 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun126334_ip = 247; continue _fun126334 }
 234:
            verify = _closure1_slot6;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun126334_ip = 265; continue _fun126334;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun126334_ip = 283; continue _fun126334;
 270:
            golf = _closure1_slot6;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun126334_ip = 323; continue _fun126334 }
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
            if(!tango) { _fun126334_ip = 330; continue _fun126334 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun126335: for(var _fun126335_ip = 0; ; ) switch(_fun126335_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun126335_ip = 56; continue _fun126335 }
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
                    _fun126335_ip = 67; continue _fun126335;
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
        _fun126336: for(var _fun126336_ip = 0; ; ) switch(_fun126336_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun126336_ip = 23; continue _fun126336 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun126336_ip = 33; continue _fun126336 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun126336_ip = 70; continue _fun126336 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun126336_ip = 55; continue _fun126336 }
 70:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.ElevatedPermissions;
    var _closure1_slot3 = golf;
    tango = tango.ElevatedPermissionsList;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/GuildSettingsUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: isRolePowerful
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.hasAny;
        mike = argFoo;
        mike = mike.permissions;
        entity = _closure1_slot3;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['isRolePowerful'] = tango;
    mike = function(argFoo, argBar) { // Original name: getPowerfulPermissionTitles
        _fun126338: for(var _fun126338_ip = 0; ; ) switch(_fun126338_ip) {
 0:
            verify = argBar;
            entity = new Array(0);
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 2;
            mike = tango[mike];
            golf = undefined;
            tango = zulu.bind(golf)(mike);
            zulu = tango.getGuildPermissionSpecMap;
            mike = argFoo;
            oscar = zulu.bind(tango)(mike);
            zulu = _closure1_slot5;
            mike = _closure1_slot4;
            report = zulu.bind(golf)(mike);
            zulu = report.bind(golf)();
            mike = zulu.done;
            tango = 1;
            if(mike) { _fun126338_ip = 159; continue _fun126338 }
 74:
            yankee = zulu.value;
            offset = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[tango];
            romeo = offset.bind(golf)(mike);
            offset = romeo.has;
            mike = verify.permissions;
            mike = offset.bind(romeo)(mike, yankee);
            if(!mike) { _fun126338_ip = 144; continue _fun126338 }
 116:
            offset = entity.push;
            mike = yankee.toString;
            mike = mike.bind(yankee)();
            mike = oscar[mike];
            mike = mike.title;
            mike = offset.bind(entity)(mike);
 144:
            offset = report.bind(golf)();
            mike = offset.done;
            zulu = offset;
            if(!mike) { _fun126338_ip = 74; continue _fun126338 }
 159:
            return entity;
        }
    };
    zulu['getPowerfulPermissionTitles'] = mike;
    return entity;
})();