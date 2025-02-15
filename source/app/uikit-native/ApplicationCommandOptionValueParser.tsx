// app/uikit-native/ApplicationCommandOptionValueParser.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    verify = argBar;
    yankee = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot16;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot16;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    golf = function(argFoo) { // Original name: getUsers
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            zulu = mike.getGuildId;
            options = zulu.bind(mike)();
            zulu = mike.isPrivate;
            zulu = zulu.bind(mike)();
            if(zulu) { _fun00008_ip = 134; continue _fun00007 }
 28:
            zulu = null;
            if(!(zulu == options)) { _fun00008_ip = 70; continue _fun00007 }
 34:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 9;
            zulu = report[zulu];
            report = undefined;
            tango = tango.bind(report)(zulu);
            zulu = new Array(0);
            tango = tango.bind(report)(zulu);
            _fun00008_ip = 132; continue _fun00007;
 70:
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            report = 9;
            report = oscar[report];
            oscar = undefined;
            report = golf.bind(oscar)(report);
            golf = _closure1_slot7;
            zulu = golf.getMembers;
            zulu = zulu.bind(golf)(options);
            oscar = report.bind(oscar)(zulu);
            report = oscar.map;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.userId;
                entity = {};
                entity['userId'] = mike;
                return entity;
            };
            tango = report.bind(oscar)(zulu);
 132:
            _fun00008_ip = 187; continue _fun00007;
 134:
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 9;
            zulu = report[zulu];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            mike = mike.recipients;
            report = zulu.bind(report)(mike);
            zulu = report.map;
            mike = function(argFoo) {
                entity = {};
                mike = argFoo;
                entity['userId'] = mike;
                return entity;
            };
            tango = zulu.bind(report)(mike);
 187:
            zulu = tango.map;
            mike = function(argFoo) {
                entity = argFoo;
                zulu = entity.userId;
                mike = _closure1_slot9;
                entity = mike.getUser;
                entity = entity.bind(mike)(zulu);
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            mike = 10;
            report = report[mike];
            mike = undefined;
            mike = oscar.bind(mike)(report);
            mike = mike.isNotNullish;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                mike = argFoo;
                entity = {};
                zulu = mike.id;
                entity['id'] = zulu;
                mike = mike.tag;
                entity['text'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot17 = golf;
    oscar = function(argFoo) { // Original name: getRoles
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            tango = entity.guild_id;
            entity = null;
            if(!(entity == tango)) { _fun00010_ip = 18; continue _fun00009 }
 14:
            zulu = {};
            _fun00010_ip = 36; continue _fun00009;
 18:
            mike = _closure1_slot8;
            entity = mike.getRoles;
            zulu = entity.bind(mike)(tango);
 36:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 9;
            entity = mike[entity];
            mike = undefined;
            entity = tango.bind(mike)(entity);
            zulu = entity.bind(mike)(zulu);
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                zulu = entity.id;
                mike = entity.name;
                entity = {};
                entity['id'] = zulu;
                entity['text'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot18 = oscar;
    report = function(argFoo, argBar) { // Original name: getChannels
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = argFoo;
            golf = argBar;
            var _closure2_slot0 = golf;
            mike = zulu.getGuildId;
            verify = mike.bind(zulu)();
            var _closure2_slot1 = verify;
            mike = null;
            if(!(mike != verify)) { _fun00012_ip = 166; continue _fun00011 }
 35:
            oscar = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 9;
            report = yankee[report];
            options = undefined;
            oscar = oscar.bind(options)(report);
            offset = _closure1_slot0;
            report = 11;
            report = yankee[report];
            report = offset.bind(options)(report);
            report = report.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
            options = oscar.bind(options)(report);
            oscar = options.flatMap;
            report = function(argFoo) {
                zulu = _closure1_slot6;
                mike = zulu.getChannels;
                entity = _closure2_slot1;
                mike = mike.bind(zulu)(entity);
                entity = argFoo;
                zulu = mike[entity];
                mike = zulu.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.channel;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = oscar.bind(options)(report);
            report = oscar.concat;
            options = _closure1_slot5;
            tango = options.computeAllActiveJoinedThreads;
            tango = tango.bind(options)(verify);
            oscar = report.bind(oscar)(tango);
            report = oscar.filter;
            tango = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    entity = entity == zulu;
                    if(entity) { _fun00014_ip = 38; continue _fun00013 }
 16:
                    tango = _closure2_slot0;
                    zulu = tango.includes;
                    mike = argFoo;
                    mike = mike.type;
                    entity = zulu.bind(tango)(mike);
 38:
                    return entity;
                }
            };
            oscar = report.bind(oscar)(tango);
            report = oscar.map;
            tango = function(argFoo) {
                entity = argFoo;
                zulu = entity.id;
                mike = entity.name;
                entity = {};
                entity['id'] = zulu;
                entity['text'] = mike;
                return entity;
            };
            tango = report.bind(oscar)(tango);
            return tango;
 166:
            tango = new Array(0);
            mike = mike == golf;
            if(mike) { _fun00012_ip = 192; continue _fun00011 }
 177:
            oscar = golf.includes;
            report = zulu.type;
            mike = oscar.bind(golf)(report);
 192:
            if(!mike) { _fun00012_ip = 205; continue _fun00011 }
 195:
            mike = tango.push;
            mike = mike.bind(tango)(zulu);
 205:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 9;
            mike = zulu[mike];
            zulu = undefined;
            mike = report.bind(zulu)(mike);
            zulu = mike.bind(zulu)(tango);
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                zulu = entity.id;
                mike = entity.name;
                entity = {};
                entity['id'] = zulu;
                entity['text'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot19 = report;
    entity = global;
    romeo = entity.Object;
    options = romeo.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(romeo)(zulu, entity, tango);
    entity = 0;
    tango = offset[entity];
    entity = undefined;
    options = yankee.bind(entity)(tango);
    tango = 1;
    tango = offset[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    romeo = offset[tango];
    tango = argCorge;
    tango = tango.bind(entity)(romeo);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = offset[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = offset[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = offset[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = offset[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 7;
    tango = offset[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 8;
    tango = offset[tango];
    tango = verify.bind(entity)(tango);
    yankee = tango.MENTION_SENTINEL;
    var _closure1_slot10 = yankee;
    tango = tango.CHANNEL_SENTINEL;
    var _closure1_slot11 = tango;
    tango = /^@(([^@#:]+)#([0-9]{4}))$/i;
    var _closure1_slot12 = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: matchPrefix
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            mike = argFoo;
            report = argBar;
            tango = argBaz;
            var _closure2_slot0 = mike;
            zulu = 0;
            zulu = report[zulu];
            if(!(zulu === mike)) { _fun00016_ip = 109; continue _fun00015 }
 25:
            zulu = report.substr;
            mike = mike.length;
            mike = zulu.bind(report)(mike);
            var _closure2_slot1 = mike;
            zulu = tango.sortBy;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.text;
                entity = entity.length;
                entity = -entity;
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            mike = function(argFoo) {
                entity = argFoo;
                zulu = entity.text;
                mike = _closure2_slot1;
                entity = mike.toLowerCase;
                mike = entity.bind(mike)();
                entity = zulu.toLowerCase;
                entity = entity.bind(zulu)();
                entity = mike === entity;
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                tango = entity.text;
                entity = {};
                zulu = _closure2_slot0;
                zulu = zulu + tango;
                entity['text'] = zulu;
                entity['id'] = mike;
                return entity;
            };
            mike = mike.bind(zulu)(entity);
            entity = mike.first;
            entity = entity.bind(mike)();
            return entity;
 109:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    tango = function(argFoo) { // Original name: ApplicationCommandOptionValueParser
        zulu = this;
        var _closure2_slot0 = zulu;
        report = _closure1_slot3;
        tango = _closure1_slot20;
        entity = undefined;
        tango = report.bind(entity)(zulu, tango);
        mike = function(argFoo, argBar) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                verify = argFoo;
                golf = argBar;
                mike = verify.trim;
                romeo = mike.bind(verify)();
                var _closure3_slot0 = romeo;
                tango = _closure1_slot17;
                mike = _closure2_slot0;
                zulu = mike.channel;
                offset = undefined;
                tango = tango.bind(offset)(zulu);
                var _closure3_slot1 = tango;
                zulu = _closure1_slot18;
                mike = mike.channel;
                mike = zulu.bind(offset)(mike);
                var _closure3_slot2 = mike;
                zulu = tango.map;
                mike = function(argFoo) {
                    mike = argFoo;
                    entity = {};
                    oscar = entity;
                    report = mike;
                    zulu = copyDataProperties(oscar, report);
                    tango = mike.text;
                    zulu = tango.split;
                    mike = '#';
                    zulu = zulu.bind(tango)(mike);
                    mike = 0;
                    zulu = zulu[mike];
                    mike = 'text';
                    entity[mike] = zulu;
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                var _closure3_slot3 = mike;
                oscar = function() { // Original name: matchUser
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        golf = _closure1_slot13;
                        oscar = _closure1_slot10;
                        report = _closure3_slot0;
                        zulu = _closure3_slot1;
                        entity = undefined;
                        zulu = golf.bind(entity)(oscar, report, zulu);
                        report = null;
                        golf = report == zulu;
                        oscar = undefined;
                        if(golf) { _fun00020_ip = 47; continue _fun00019 }
 42:
                        oscar = zulu.id;
 47:
                        if(!(report == oscar)) { _fun00020_ip = 100; continue _fun00019 }
 51:
                        golf = _closure1_slot13;
                        oscar = _closure1_slot10;
                        tango = _closure3_slot0;
                        mike = _closure3_slot3;
                        tango = golf.bind(entity)(oscar, tango, mike);
                        oscar = report == tango;
                        mike = undefined;
                        if(oscar) { _fun00020_ip = 88; continue _fun00019 }
 83:
                        mike = tango.id;
 88:
                        mike = report != mike;
                        zulu = tango;
                        entity = undefined;
                        if(!mike) { _fun00020_ip = 124; continue _fun00019 }
 100:
                        mike = {};
                        tango = 'userMention';
                        mike['type'] = tango;
                        zulu = zulu.id;
                        mike['userId'] = zulu;
                        entity = mike;
 124:
                        return entity;
                    }
                };
                tango = function() { // Original name: matchRole
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        oscar = _closure1_slot13;
                        report = _closure1_slot10;
                        tango = _closure3_slot0;
                        zulu = _closure3_slot2;
                        entity = undefined;
                        zulu = oscar.bind(entity)(report, tango, zulu);
                        report = null;
                        oscar = report == zulu;
                        tango = undefined;
                        if(oscar) { _fun00022_ip = 47; continue _fun00021 }
 42:
                        tango = zulu.id;
 47:
                        if(!(report == tango)) { _fun00022_ip = 83; continue _fun00021 }
 51:
                        tango = _closure3_slot0;
                        mike = '@everyone';
                        entity = undefined;
                        if(!(mike === tango)) { _fun00022_ip = 81; continue _fun00021 }
 67:
                        entity = {'type': 'textMention', 'text': '@everyone'};
 81:
                        _fun00022_ip = 106; continue _fun00021;
 83:
                        mike = {};
                        tango = 'roleMention';
                        mike['type'] = tango;
                        zulu = zulu.id;
                        mike['roleId'] = zulu;
                        entity = mike;
 106:
                        return entity;
                    }
                };
                mike = golf.type;
                zulu = _closure1_slot0;
                entity = _closure1_slot2;
                backup = 12;
                entity = entity[backup];
                entity = zulu.bind(offset)(entity);
                entity = entity.ApplicationCommandOptionType;
                entity = entity.USER;
                if(!(mike === entity)) { _fun00018_ip = 223; continue _fun00017 }
 146:
                entity = oscar.bind(offset)();
                mike = null;
                if(!(mike == entity)) { _fun00018_ip = 576; continue _fun00017 }
 159:
                yankee = _closure1_slot12;
                zulu = 0;
                yankee['lastIndex'] = zulu;
                zulu = yankee.exec;
                sizing = zulu.bind(yankee)(romeo);
                if(!(mike != sizing)) { _fun00018_ip = 223; continue _fun00017 }
 186:
                kilo = _closure1_slot9;
                foxtrot = kilo.findByTag;
                zulu = 2;
                yankee = sizing[zulu];
                zulu = 3;
                zulu = sizing[zulu];
                zulu = foxtrot.bind(kilo)(yankee, zulu);
                if(!(mike == zulu)) { _fun00018_ip = 553; continue _fun00017 }
 223:
                yankee = golf.type;
                foxtrot = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[backup];
                mike = foxtrot.bind(offset)(mike);
                mike = mike.ApplicationCommandOptionType;
                mike = mike.ROLE;
                if(!(yankee === mike)) { _fun00018_ip = 274; continue _fun00017 }
 261:
                mike = tango.bind(offset)();
                yankee = null;
                if(!(yankee == mike)) { _fun00018_ip = 551; continue _fun00017 }
 274:
                foxtrot = golf.type;
                kilo = _closure1_slot0;
                yankee = _closure1_slot2;
                yankee = yankee[backup];
                yankee = kilo.bind(offset)(yankee);
                yankee = yankee.ApplicationCommandOptionType;
                yankee = yankee.CHANNEL;
                if(!(foxtrot === yankee)) { _fun00018_ip = 370; continue _fun00017 }
 312:
                foxtrot = _closure1_slot13;
                yankee = _closure1_slot11;
                sizing = _closure1_slot19;
                report = _closure2_slot0;
                kilo = report.channel;
                report = golf.channelTypes;
                report = sizing.bind(offset)(kilo, report);
                report = foxtrot.bind(offset)(yankee, romeo, report);
                foxtrot = null;
                if(!(foxtrot != report)) { _fun00018_ip = 370; continue _fun00017 }
 358:
                yankee = report.id;
                if(!(foxtrot == yankee)) { _fun00018_ip = 530; continue _fun00017 }
 370:
                yankee = golf.type;
                foxtrot = _closure1_slot0;
                golf = _closure1_slot2;
                golf = golf[backup];
                golf = foxtrot.bind(offset)(golf);
                golf = golf.ApplicationCommandOptionType;
                golf = golf.MENTIONABLE;
                if(!(yankee === golf)) { _fun00018_ip = 487; continue _fun00017 }
 408:
                tango = tango.bind(offset)();
                golf = null;
                if(!(golf == tango)) { _fun00018_ip = 528; continue _fun00017 }
 418:
                oscar = oscar.bind(offset)();
                if(!(golf == oscar)) { _fun00018_ip = 526; continue _fun00017 }
 426:
                yankee = _closure1_slot12;
                offset = 0;
                yankee['lastIndex'] = offset;
                offset = yankee.exec;
                foxtrot = offset.bind(yankee)(romeo);
                if(!(golf != foxtrot)) { _fun00018_ip = 487; continue _fun00017 }
 453:
                romeo = _closure1_slot9;
                yankee = romeo.findByTag;
                options = 2;
                offset = foxtrot[options];
                options = 3;
                options = foxtrot[options];
                options = yankee.bind(romeo)(offset, options);
                if(!(golf == options)) { _fun00018_ip = 503; continue _fun00017 }
 487:
                golf = {};
                offset = 'text';
                golf['type'] = offset;
                golf['text'] = verify;
                return golf;
 503:
                golf = {};
                verify = 'userMention';
                golf['type'] = verify;
                options = options.id;
                golf['userId'] = options;
                return golf;
 526:
                return oscar;
 528:
                return tango;
 530:
                tango = {};
                oscar = 'channelMention';
                tango['type'] = oscar;
                report = report.id;
                tango['channelId'] = report;
                return tango;
 551:
                return mike;
 553:
                mike = {};
                tango = 'userMention';
                mike['type'] = tango;
                zulu = zulu.id;
                mike['userId'] = zulu;
                return mike;
 576:
                return entity;
            }
        };
        zulu['parse'] = mike;
        mike = argFoo;
        zulu['channel'] = mike;
        return entity;
    };
    var _closure1_slot20 = tango;
    tango = options.bind(entity)(tango);
    var _closure1_slot14 = tango;
    options = 14;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'uikit-native/ApplicationCommandOptionValueParser.tsx';
    options = verify.bind(offset)(options);
    zulu['getUsers'] = golf;
    zulu['getRoles'] = oscar;
    zulu['getChannels'] = report;
    zulu['ApplicationCommandOptionValueParser'] = tango;
    tango = function(argFoo, argBar, argBaz) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            backup = argFoo;
            mike = argBar;
            foxtrot = argBaz;
            entity = mike.options;
            romeo = null;
            if(!(romeo != entity)) { _fun00024_ip = 295; continue _fun00023 }
 23:
            entity = {};
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            offset = 13;
            zulu = zulu[offset];
            verify = undefined;
            tango = tango.bind(verify)(zulu);
            zulu = tango.createParserState;
            options = zulu.bind(tango)(backup);
            zulu = _closure1_slot15;
            mike = mike.options;
            golf = zulu.bind(verify)(mike);
            zulu = golf.bind(verify)();
            mike = zulu.done;
            oscar = 'text';
            report = 0;
            tango = 12;
            if(mike) { _fun00024_ip = 293; continue _fun00023 }
 99:
            mike = zulu.value;
            kilo = mike.name;
            kilo = foxtrot[kilo];
            if(!(romeo != kilo)) { _fun00024_ip = 275; continue _fun00023 }
 120:
            sizing = kilo[report];
            sizing = sizing.type;
            if(!(oscar === sizing)) { _fun00024_ip = 266; continue _fun00023 }
 136:
            output = mike.type;
            result = _closure1_slot0;
            sizing = _closure1_slot2;
            sizing = sizing[tango];
            sizing = result.bind(verify)(sizing);
            sizing = sizing.ApplicationCommandOptionType;
            sizing = sizing.STRING;
            if(!(output === sizing)) { _fun00024_ip = 266; continue _fun00023 }
 174:
            sizing = mike.choices;
            if(!(romeo == sizing)) { _fun00024_ip = 266; continue _fun00023 }
 184:
            sizing = mike.autocomplete;
            if(sizing) { _fun00024_ip = 266; continue _fun00023 }
 193:
            output = mike.name;
            result = {};
            result['type'] = oscar;
            echo = _closure1_slot1;
            sizing = _closure1_slot2;
            sizing = sizing[offset];
            update = echo.bind(verify)(sizing);
            echo = update.parse;
            sizing = kilo[report];
            sizing = sizing.text;
            sizing = echo.bind(update)(backup, sizing, options);
            sizing = sizing.content;
            result['text'] = sizing;
            sizing = new Array(1);
            sizing[0] = result;
            entity[output] = sizing;
            _fun00024_ip = 275; continue _fun00023;
 266:
            mike = mike.name;
            entity[mike] = kilo;
 275:
            kilo = golf.bind(verify)();
            mike = kilo.done;
            zulu = kilo;
            if(!mike) { _fun00024_ip = 99; continue _fun00023 }
 293:
            return entity;
 295:
            entity = {};
            return entity;
        }
    };
    zulu['parseOptionValuesForSend'] = tango;
    mike = function(argFoo) {
        mike = argFoo;
        report = mike.channel;
        var _closure2_slot0 = report;
        tango = _closure1_slot4;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure1_slot14;
            tango = _closure2_slot0;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useApplicationCommandOptionValueParser'] = mike;
    return entity;
})();