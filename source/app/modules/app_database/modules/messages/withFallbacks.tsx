// app/modules/app_database/modules/messages/withFallbacks.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun59066: for(var _fun59066_ip = 0; ; ) switch(_fun59066_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun59066_ip = 46; continue _fun59066 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun59066_ip = 55; continue _fun59066 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun59066_ip = 343; continue _fun59066 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun59066_ip = 323; continue _fun59066 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun59066_ip = 283; continue _fun59066 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun59066_ip = 270; continue _fun59066 }
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
            if(!golf) { _fun59066_ip = 163; continue _fun59066 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun59066_ip = 179; continue _fun59066 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun59066_ip = 249; continue _fun59066 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun59066_ip = 249; continue _fun59066 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun59066_ip = 234; continue _fun59066 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun59066_ip = 247; continue _fun59066 }
 234:
            verify = _closure1_slot7;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun59066_ip = 265; continue _fun59066;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun59066_ip = 283; continue _fun59066;
 270:
            golf = _closure1_slot7;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun59066_ip = 323; continue _fun59066 }
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
            if(!tango) { _fun59066_ip = 330; continue _fun59066 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun59067: for(var _fun59067_ip = 0; ; ) switch(_fun59067_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun59067_ip = 56; continue _fun59067 }
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
                    _fun59067_ip = 67; continue _fun59067;
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
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun59068: for(var _fun59068_ip = 0; ; ) switch(_fun59068_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun59068_ip = 23; continue _fun59068 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun59068_ip = 33; continue _fun59068 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun59068_ip = 70; continue _fun59068 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun59068_ip = 55; continue _fun59068 }
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: isSaveableChannel
        _fun59069: for(var _fun59069_ip = 0; ; ) switch(_fun59069_ip) {
 0:
            zulu = argFoo;
            tango = zulu.type;
            entity = _closure1_slot5;
            entity = entity.DM;
            entity = tango === entity;
            if(entity) { _fun59069_ip = 47; continue _fun59069 }
 28:
            report = zulu.type;
            tango = _closure1_slot5;
            tango = tango.GROUP_DM;
            entity = report === tango;
 47:
            if(entity) { _fun59069_ip = 69; continue _fun59069 }
 50:
            zulu = zulu.type;
            mike = _closure1_slot5;
            mike = mike.GUILD_TEXT;
            entity = zulu === mike;
 69:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: addFallback
        _fun59070: for(var _fun59070_ip = 0; ; ) switch(_fun59070_ip) {
 0:
            report = argBar;
            tango = argBaz;
            mike = tango.hasExtended;
            entity = report.id;
            entity = mike.bind(tango)(entity);
            if(entity) { _fun59070_ip = 79; continue _fun59070 }
 27:
            zulu = tango.put;
            mike = report.id;
            entity = {};
            oscar = argFoo;
            entity['guildId'] = oscar;
            oscar = report.id;
            entity['channelId'] = oscar;
            report = report.type;
            entity['channelType'] = report;
            report = true;
            entity['fallback'] = report;
            entity = zulu.bind(tango)(mike, entity);
 79:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: mergeInto
        _fun59071: for(var _fun59071_ip = 0; ; ) switch(_fun59071_ip) {
 0:
            entity = argFoo;
            tango = argBar;
            zulu = _closure1_slot6;
            mike = tango.allEntries;
            mike = mike.bind(tango)();
            options = undefined;
            golf = zulu.bind(options)(mike);
            zulu = golf.bind(options)();
            mike = zulu.done;
            oscar = 2;
            report = 0;
            tango = 1;
            if(mike) { _fun59071_ip = 102; continue _fun59071 }
 52:
            offset = zulu.value;
            mike = _closure1_slot2;
            mike = mike.bind(options)(offset, oscar);
            yankee = mike[report];
            offset = mike[tango];
            mike = entity.put;
            mike = mike.bind(entity)(yankee, offset);
            offset = golf.bind(options)();
            mike = offset.done;
            zulu = offset;
            if(!mike) { _fun59071_ip = 52; continue _fun59071 }
 102:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelTypes;
    var _closure1_slot5 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/modules/messages/withFallbacks.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: withFallbacks
        _fun59072: for(var _fun59072_ip = 0; ; ) switch(_fun59072_ip) {
 0:
            entity = argFoo;
            oscar = argBar;
            mike = entity.totalLength;
            if(!(!(mike >= oscar))) { _fun59072_ip = 441; continue _fun59072 }
 19:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 4;
            mike = tango[mike];
            tango = undefined;
            mike = report.bind(tango)(mike);
            options = mike.ExtendedMemoryLru;
            target = entity.primaryCapacity;
            papa = entity.extendedCapacity;
            report = options.prototype;
            report = Object.create(report, {constructor: {value: options}});
            status = report;
            mike = new status[options](target, papa, context);
            mike = mike instanceof Object ? mike : report;
            report = entity.totalLength;
            sizing = oscar - report;
            oscar = _closure1_slot6;
            golf = _closure1_slot4;
            report = golf.getGuildFolders;
            report = report.bind(golf)();
            kilo = oscar.bind(tango)(report);
            oscar = kilo.bind(tango)();
            report = oscar.done;
            backup = global;
            foxtrot = 0;
            romeo = 6;
            yankee = 5;
            offset = oscar;
            verify = undefined;
            options = undefined;
            golf = undefined;
            oscar = undefined;
            if(report) { _fun59072_ip = 429; continue _fun59072 }
 151:
            output = _closure1_slot6;
            report = offset.value;
            report = report.guildIds;
            echo = output.bind(tango)(report);
            output = echo.bind(tango)();
            report = output.done;
            result = output;
            output = oscar;
            oscar = output;
            if(report) { _fun59072_ip = 411; continue _fun59072 }
 195:
            vacuum = result.value;
            source = backup.Object;
            update = source.values;
            control = _closure1_slot3;
            report = control.getMutableBasicGuildChannelsForGuild;
            report = report.bind(control)(vacuum);
            source = update.bind(source)(report);
            report = source.length;
            report = foxtrot < report;
            update = 0;
            control = 0;
            if(!report) { _fun59072_ip = 367; continue _fun59072 }
 247:
            config = source[update];
            report = _closure1_slot8;
            report = report.bind(tango)(config);
            if(!report) { _fun59072_ip = 291; continue _fun59072 }
 263:
            record = _closure1_slot0;
            sequence = _closure1_slot1;
            sequence = sequence[yankee];
            record = record.bind(tango)(sequence);
            sequence = record.isReadableChannel;
            report = sequence.bind(record)(config);
 291:
            if(!report) { _fun59072_ip = 325; continue _fun59072 }
 294:
            record = _closure1_slot0;
            sequence = _closure1_slot1;
            sequence = sequence[romeo];
            record = record.bind(tango)(sequence);
            sequence = record.isLimitedChannel;
            sequence = sequence.bind(record)(config);
            report = !sequence;
 325:
            if(!report) { _fun59072_ip = 339; continue _fun59072 }
 328:
            report = _closure1_slot9;
            report = report.bind(tango)(vacuum, config, mike);
 339:
            report = mike.totalLength;
            if(!(!(report >= sizing))) { _fun59072_ip = 399; continue _fun59072 }
 349:
            update = update + 1;
            report = source.length;
            output = config;
            control = update;
            if(control < report) { _fun59072_ip = 247; continue _fun59072 }
 367:
            sequence = echo.bind(tango)();
            report = sequence.done;
            options = control;
            result = sequence;
            verify = vacuum;
            golf = source;
            oscar = output;
            if(report) { _fun59072_ip = 411; continue _fun59072 }
 394:
            _fun59072_ip = 195; continue _fun59072;
 399:
            report = _closure1_slot10;
            report = report.bind(tango)(mike, entity);
            return mike;
 411:
            output = kilo.bind(tango)();
            report = output.done;
            offset = output;
            if(!report) { _fun59072_ip = 151; continue _fun59072 }
 429:
            zulu = _closure1_slot10;
            zulu = zulu.bind(tango)(mike, entity);
            return mike;
 441:
            return entity;
        }
    };
    zulu['withFallbacks'] = mike;
    return entity;
})();