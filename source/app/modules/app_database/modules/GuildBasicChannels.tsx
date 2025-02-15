// app/modules/app_database/modules/GuildBasicChannels.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot17;
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
            golf = _closure1_slot17;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: hasBasicChannelChanged
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            entity = null;
            entity = entity == oscar;
            if(entity) { _fun00008_ip = 29; continue _fun00007 }
 15:
            zulu = oscar.type;
            mike = report.type;
            entity = zulu !== mike;
 29:
            if(entity) { _fun00008_ip = 48; continue _fun00007 }
 32:
            zulu = oscar.parent_id;
            mike = report.parent_id;
            entity = zulu !== mike;
 48:
            if(entity) { _fun00008_ip = 88; continue _fun00007 }
 51:
            tango = _closure1_slot13;
            zulu = tango.computeBasicPermissions;
            zulu = zulu.bind(tango)(oscar);
            tango = _closure1_slot13;
            mike = tango.computeBasicPermissions;
            mike = mike.bind(tango)(report);
            entity = zulu !== mike;
 88:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.createChannelRecordFromServer;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelLoader;
    var _closure1_slot11 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 11;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'GuildBasicChannels';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot15 = tango;
    mike = function() {
        tango = _closure1_slot6;
        zulu = function() { // Original name: GuildBasicChannels
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot5;
            mike = _closure2_slot2;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            mike = null;
            zulu['synced'] = mike;
            mike = {};
            report = function(argFoo, argBar) { // Original name: BACKGROUND_SYNC
                tango = _closure3_slot0;
                zulu = tango.handleBackgroundSync;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['BACKGROUND_SYNC'] = report;
            report = function(argFoo, argBar) { // Original name: CHANNEL_CREATE
                tango = _closure3_slot0;
                zulu = tango.handleChannelCreate;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CHANNEL_CREATE'] = report;
            report = function(argFoo, argBar) { // Original name: CHANNEL_DELETE
                tango = _closure3_slot0;
                zulu = tango.handleChannelDelete;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CHANNEL_DELETE'] = report;
            report = function(argFoo, argBar) { // Original name: CHANNEL_UPDATES
                tango = _closure3_slot0;
                zulu = tango.handleChannelUpdates;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CHANNEL_UPDATES'] = report;
            report = function(argFoo, argBar) { // Original name: CONNECTION_OPEN
                tango = _closure3_slot0;
                zulu = tango.handleConnectionOpen;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['CONNECTION_OPEN'] = report;
            report = function(argFoo, argBar) { // Original name: GUILD_CREATE
                tango = _closure3_slot0;
                zulu = tango.handleGuildCreate;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['GUILD_CREATE'] = report;
            report = function(argFoo, argBar) { // Original name: GUILD_DELETE
                tango = _closure3_slot0;
                zulu = tango.handleGuildDelete;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['GUILD_DELETE'] = report;
            report = function(argFoo, argBar) { // Original name: GUILD_MEMBER_UPDATE
                tango = _closure3_slot0;
                zulu = tango.handleGuildMemberUpdate;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['GUILD_MEMBER_UPDATE'] = report;
            report = function(argFoo, argBar) { // Original name: GUILD_ROLE_UPDATE
                tango = _closure3_slot0;
                zulu = tango.handleGuildRoleUpdate;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['GUILD_ROLE_UPDATE'] = report;
            report = function(argFoo, argBar) { // Original name: GUILD_UPDATE
                tango = _closure3_slot0;
                zulu = tango.handleGuildUpdate;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['GUILD_UPDATE'] = report;
            report = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.handlePostConnectionOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            mike['POST_CONNECTION_OPEN'] = report;
            tango = function(argFoo, argBar) { // Original name: WRITE_CACHES
                tango = _closure3_slot0;
                zulu = tango.handleWriteCaches;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['WRITE_CACHES'] = tango;
            zulu['actions'] = mike;
            return entity;
        };
        var _closure2_slot2 = zulu;
        report = {};
        mike = 'getAsync';
        report['key'] = mike;
        options = _closure1_slot4;
        mike = undefined;
        entity = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 464; continue _fun00009 }
 15:
                    romeo = undefined;
                    var _closure4_slot0 = romeo;
                    zulu = global;
                    report = zulu.performance;
                    mike = report.now;
                    foxtrot = mike.bind(report)();
                    oscar = zulu.Promise;
                    report = oscar.all;
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    options = 12;
                    mike = yankee[options];
                    backup = verify.bind(romeo)(mike);
                    mike = backup.basicChannels;
                    backup = mike.bind(backup)(offset);
                    mike = backup.getKvEntries;
                    backup = mike.bind(backup)();
                    mike = new Array(2);
                    mike[0] = backup;
                    options = yankee[options];
                    verify = verify.bind(romeo)(options);
                    options = verify.syncedBasicChannels;
                    verify = options.bind(verify)(offset);
                    options = verify.getKvEntries;
                    options = options.bind(verify)();
                    mike[1] = options;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=145);
 143:
                    return mike;
 145:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 461; continue _fun00009 }
 154:
                    yankee = _closure1_slot3;
                    offset = 2;
                    report = yankee.bind(romeo)(mike, offset);
                    verify = 0;
                    oscar = report[verify];
                    options = 1;
                    kilo = report[options];
                    backup = zulu.performance;
                    report = backup.now;
                    report = report.bind(backup)();
                    output = report - foxtrot;
                    backup = new Array(0);
                    foxtrot = new Array(0);
                    report = _closure1_slot16;
                    sizing = report.bind(romeo)(kilo);
                    kilo = sizing.bind(romeo)();
                    report = kilo.done;
                    if(report) { _fun00010_ip = 285; continue _fun00009 }
 228:
                    result = kilo.value;
                    report = _closure1_slot3;
                    report = report.bind(romeo)(result, offset);
                    echo = report[verify];
                    report = report[options];
                    result = foxtrot;
                    if(!report) { _fun00010_ip = 260; continue _fun00009 }
 257:
                    result = backup;
 260:
                    report = result.push;
                    report = report.bind(result)(echo);
                    result = sizing.bind(romeo)();
                    report = result.done;
                    kilo = result;
                    if(!report) { _fun00010_ip = 228; continue _fun00009 }
 285:
                    report = new Array(2);
                    report[0] = backup;
                    report[1] = foxtrot;
                    report = yankee.bind(romeo)(report, offset);
                    context = report[verify];
                    report = report[options];
                    options = zulu.Set;
                    verify = options.prototype;
                    verify = Object.create(verify, {constructor: {value: options}});
                    papa = verify;
                    options = new papa[options](context, record);
                    verify = options instanceof Object ? options : verify;
                    _closure4_slot0 = verify;
                    options = this;
                    options['synced'] = verify;
                    options = _closure1_slot15;
                    golf = options.verbose;
                    config = oscar.length;
                    vacuum = verify.size;
                    source = report.length;
                    zulu = zulu.HermesInternal;
                    foxtrot = zulu.concat;
                    papa = 'loaded in ';
                    record = 'ms (guilds: ';
                    sequence = ', synced: ';
                    control = ' unsynced: ';
                    update = ')';
                    context = output;
                    zulu = papa[foxtrot](context, record, config, sequence, vacuum, control, source, update, echo);
                    zulu = golf.bind(options)(zulu);
                    zulu = {};
                    zulu['all'] = oscar;
                    zulu['stale'] = report;
                    report = oscar.filter;
                    tango = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            tango = argFoo;
                            entity = tango[Symbol.iterator];
                            tango = entity().next;
                            oscar = tango().value;
                            mike = entity;
                            report = undefined;
                            mike = mike === report;
                            zulu = undefined;
                            if(mike) { _fun00012_ip = 27; continue _fun00011 }
 24:
                            zulu = oscar;
 27:
                            if(mike) { _fun00012_ip = 41; continue _fun00011 }
 30:
                            tango = tango().value;
                            tango = entity;
                            mike = tango === report;
 41:
                            if(mike) { _fun00012_ip = 47; continue _fun00011 }
 44:
                            entity.return();
 47:
                            mike = _closure4_slot0;
                            entity = mike.has;
                            entity = entity.bind(mike)(zulu);
                            return entity;
                        }
                    };
                    tango = report.bind(oscar)(tango);
                    zulu['channels'] = tango;
                    return zulu;
 461:
                    return mike;
 464:
                    return entity;
                }
            };
            return entity;
        };
        entity = options.bind(mike)(entity);
        var _closure2_slot1 = entity;
        entity = function() { // Original name: getAsync
            entity = undefined;
            tango = _closure2_slot1;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(21);
        entity[0] = report;
        report = {};
        golf = 'handleChannelCreate';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                tango = this;
                mike = entity.channel;
                zulu = mike.guild_id;
                mike = null;
                if(!(mike != zulu)) { _fun00014_ip = 47; continue _fun00013 }
 22:
                zulu = tango.unsync;
                entity = entity.channel;
                mike = entity.guild_id;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
 47:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'handleChannelDelete';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                tango = this;
                mike = entity.channel;
                zulu = mike.guild_id;
                mike = null;
                if(!(mike != zulu)) { _fun00016_ip = 47; continue _fun00015 }
 22:
                zulu = tango.unsync;
                entity = entity.channel;
                mike = entity.guild_id;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
 47:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'handleChannelUpdates';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                golf = argBar;
                oscar = this;
                zulu = _closure1_slot16;
                entity = argFoo;
                tango = entity.channels;
                mike = tango.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.guild_id;
                    entity = null;
                    entity = entity != mike;
                    return entity;
                };
                mike = mike.bind(tango)(entity);
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun00018_ip = 128; continue _fun00017 }
 58:
                mike = zulu.value;
                verify = _closure1_slot18;
                yankee = _closure1_slot10;
                offset = yankee.getBasicChannel;
                options = mike.id;
                options = offset.bind(yankee)(options);
                options = verify.bind(entity)(options, mike);
                if(!options) { _fun00018_ip = 113; continue _fun00017 }
 96:
                options = oscar.unsync;
                mike = mike.guild_id;
                mike = options.bind(oscar)(mike, golf);
 113:
                options = tango.bind(entity)();
                mike = options.done;
                zulu = options;
                if(!mike) { _fun00018_ip = 58; continue _fun00017 }
 128:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'handleBackgroundSync';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                mike = argBar;
                var _closure3_slot0 = mike;
                mike = this;
                var _closure3_slot1 = mike;
                report = function(argFoo) { // Original name: _loop
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        mike = argFoo;
                        var _closure4_slot0 = mike;
                        zulu = mike.data_mode;
                        entity = 'unavailable';
                        if(!(entity !== zulu)) { _fun00022_ip = 168; continue _fun00021 }
 26:
                        entity = 'partial';
                        if(!(entity !== zulu)) { _fun00022_ip = 64; continue _fun00021 }
 34:
                        report = _closure3_slot1;
                        tango = report.onGuildSync;
                        zulu = mike.id;
                        entity = _closure3_slot0;
                        entity = tango.bind(report)(zulu, entity);
                        _fun00022_ip = 168; continue _fun00021;
 64:
                        oscar = _closure3_slot1;
                        report = oscar.onGuildUpdate;
                        tango = mike.id;
                        zulu = mike.partial_updates;
                        offset = zulu.channels;
                        golf = null;
                        verify = golf == offset;
                        zulu = undefined;
                        if(verify) { _fun00022_ip = 120; continue _fun00021 }
 105:
                        verify = offset.map;
                        options = function(argFoo) {
                            tango = _closure1_slot8;
                            entity = _closure4_slot0;
                            zulu = entity.id;
                            mike = undefined;
                            entity = argFoo;
                            entity = tango.bind(mike)(entity, zulu);
                            return entity;
                        };
                        zulu = verify.bind(offset)(options);
 120:
                        if(!(golf == zulu)) { _fun00022_ip = 128; continue _fun00021 }
 124:
                        zulu = new Array(0);
 128:
                        mike = mike.partial_updates;
                        mike = mike.deleted_channel_ids;
                        if(!(golf == mike)) { _fun00022_ip = 148; continue _fun00021 }
 144:
                        mike = new Array(0);
 148:
                        yankee = _closure3_slot0;
                        kilo = oscar;
                        backup = tango;
                        foxtrot = zulu;
                        romeo = mike;
                        entity = kilo[report](backup, foxtrot, romeo, yankee, offset);
 168:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu = _closure1_slot16;
                entity = argFoo;
                mike = entity.guilds;
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun00020_ip = 81; continue _fun00019 }
 56:
                mike = zulu.value;
                mike = report.bind(entity)(mike);
                oscar = tango.bind(entity)();
                mike = oscar.done;
                zulu = oscar;
                if(!mike) { _fun00020_ip = 56; continue _fun00019 }
 81:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'handleConnectionOpen';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: handleConnectionOpen
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                oscar = argBar;
                report = this;
                zulu = _closure1_slot16;
                entity = argFoo;
                mike = entity.guilds;
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun00024_ip = 73; continue _fun00023 }
 41:
                golf = zulu.value;
                mike = report.handleOneGuildCreate;
                mike = mike.bind(report)(golf, oscar);
                golf = tango.bind(entity)();
                mike = golf.done;
                zulu = golf;
                if(!mike) { _fun00024_ip = 41; continue _fun00023 }
 73:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'handlePostConnectionOpen';
        report['key'] = golf;
        golf = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    tango = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00026_ip = 588; continue _fun00025 }
 15:
                    var _closure4_slot0 = tango;
                    mike = undefined;
                    var _closure4_slot2 = mike;
                    var _closure4_slot3 = mike;
                    var _closure4_slot1 = tango;
                    golf = _closure1_slot7;
                    oscar = golf.lastTimeConnectedChanged;
                    oscar = oscar.bind(golf)();
                    _closure4_slot2 = oscar;
                    golf = _closure1_slot1;
                    options = _closure1_slot2;
                    oscar = 12;
                    oscar = options[oscar];
                    golf = golf.bind(mike)(oscar);
                    oscar = golf.database;
                    oscar = oscar.bind(golf)();
                    _closure4_slot3 = oscar;
                    golf = tango.synced;
                    tango = null;
                    if(!(tango != golf)) { _fun00026_ip = 585; continue _fun00025 }
 103:
                    if(!(tango != oscar)) { _fun00026_ip = 585; continue _fun00025 }
 110:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 13;
                    tango = golf[tango];
                    oscar = oscar.bind(mike)(tango);
                    tango = oscar.isCacheEnabled;
                    tango = tango.bind(oscar)();
                    if(!tango) { _fun00026_ip = 585; continue _fun00025 }
 146:
                    oscar = _closure1_slot12;
                    tango = oscar.getGuildIds;
                    tango = tango.bind(oscar)();
                    golf = tango.filter;
                    oscar = function(argFoo) {
                        entity = _closure4_slot0;
                        zulu = entity.synced;
                        mike = zulu.has;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    oscar = golf.bind(tango)(oscar);
                    options = _closure1_slot15;
                    golf = options.verbose;
                    yankee = oscar.length;
                    backup = global;
                    oscar = backup.HermesInternal;
                    offset = oscar.concat;
                    verify = 'scheduling basic_channel optimstic writes (guilds: ';
                    oscar = ')';
                    oscar = offset.bind(verify)(yankee, oscar);
                    oscar = golf.bind(options)(oscar);
                    foxtrot = function* (argFoo) { // Original name: _loop2
                        entity = function* (argFoo) { // Original name: ?anon_0__loop2
                            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                                StartGenerator();
                                mike = argFoo;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(zulu) { _fun00028_ip = 358; continue _fun00027 }
 15:
                                tango = mike;
                                var _closure6_slot0 = mike;
                                mike = _closure4_slot1;
                                zulu = mike.synced;
                                mike = null;
                                if(!(mike != zulu)) { _fun00028_ip = 353; continue _fun00027 }
 44:
                                options = _closure4_slot3;
                                verify = _closure1_slot1;
                                golf = _closure1_slot2;
                                zulu = 12;
                                golf = golf[zulu];
                                zulu = undefined;
                                verify = verify.bind(zulu)(golf);
                                golf = verify.database;
                                golf = golf.bind(verify)();
                                if(!(options === golf)) { _fun00028_ip = 353; continue _fun00027 }
 90:
                                options = _closure4_slot2;
                                verify = _closure1_slot7;
                                golf = verify.lastTimeConnectedChanged;
                                golf = golf.bind(verify)();
                                if(!(options === golf)) { _fun00028_ip = 353; continue _fun00027 }
 115:
                                golf = _closure4_slot1;
                                verify = golf.synced;
                                options = verify.has;
                                golf = tango;
                                golf = options.bind(verify)(golf);
                                if(golf) { _fun00028_ip = 347; continue _fun00027 }
 144:
                                offset = _closure1_slot15;
                                verify = offset.verbose;
                                foxtrot = tango;
                                golf = global;
                                options = golf.HermesInternal;
                                romeo = options.concat;
                                yankee = 'optimstically writing basic_channels (guild: ';
                                options = ')';
                                options = romeo.bind(yankee)(foxtrot, options);
                                options = verify.bind(offset)(options);
 191: // try_start_0
                                verify = _closure1_slot11;
                                options = verify.loadGuildIds;
                                offset = tango;
                                tango = new Array(1);
                                tango[0] = offset;
                                tango = options.bind(verify)(tango);
                                SaveGenerator(address=221);
 219:
                                return tango;
 221:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                                if(options) { _fun00028_ip = 312; continue _fun00027 }
 227:
                                offset = _closure4_slot3;
                                verify = offset.transaction;
                                options = function(argFoo) {
                                    tango = _closure4_slot1;
                                    zulu = tango.syncOne;
                                    mike = _closure6_slot0;
                                    entity = argFoo;
                                    entity = zulu.bind(tango)(mike, entity);
                                    return entity;
                                };
                                report = 'handlePostConnectionOpen';
                                report = verify.bind(offset)(options, report);
                                SaveGenerator(address=256);
 254:
                                return report;
 256:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                                if(options) { _fun00028_ip = 309; continue _fun00027 }
 262: // try_end0
                                options = golf.Promise;
                                golf = options.prototype;
                                golf = Object.create(golf, {constructor: {value: options}});
                                kilo = function(argFoo) {
                                    entity = global;
                                    tango = entity.setTimeout;
                                    zulu = undefined;
                                    mike = argFoo;
                                    entity = 1000;
                                    entity = tango.bind(zulu)(mike, entity);
                                    return entity;
                                };
                                sizing = golf;
                                oscar = new sizing[options](kilo, backup);
                                oscar = oscar instanceof Object ? oscar : golf;
                                SaveGenerator(address=297);
 295:
                                return oscar;
 297:
                                ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                                if(golf) { _fun00028_ip = 306; continue _fun00027 }
 303:
                                return zulu;
 306:
                                return oscar;
 309:
                                return report;
 312:
                                return tango;
 315: // catch_target0
                                CatchBlockStart(arg_register=5);
                                report = _closure1_slot15;
                                tango = report.warn;
                                mike = "couldn't optimstically write basic_channel:";
                                mike = tango.bind(report)(mike, oscar);
                                mike = {};
                                mike['v'] = zulu;
                                return mike;
 347:
                                mike = 1;
                                return mike;
 353:
                                mike = 0;
                                return mike;
 358:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    zulu = _closure1_slot16;
                    romeo = zulu.bind(mike)(tango);
                    tango = romeo.bind(mike)();
                    zulu = tango.done;
                    yankee = 1;
                    offset = 0;
                    verify = 'iterator is not an object';
                    options = 'iterator.throw() did not return an object';
                    golf = 'throw';
                    oscar = 'iterator.next() did not return an object';
                    report = tango;
                    if(zulu) { _fun00026_ip = 585; continue _fun00025 }
 283:
                    zulu = report.value;
                    tango = foxtrot.bind(mike)(zulu);
                    zulu = backup.Symbol;
                    zulu = zulu.iterator;
                    zulu = tango[zulu];
                    kilo = zulu.bind(tango)();
                    vacuum = kilo;
                    control = verify;
                    zulu = ensureObject(vacuum, control);
                    update = kilo.next;
                    echo = undefined;
 330:
                    tango = echo;
                    tango = update.bind(kilo)(tango);
                    vacuum = tango;
                    control = oscar;
                    sizing = ensureObject(vacuum, control);
                    zulu = tango;
                    sizing = tango.done;
                    if(sizing) { _fun00026_ip = 541; continue _fun00025 }
 362: // try_start_0
                    sizing = generatorSetDelegated();
                    SaveGenerator(address=417);
 368:
                    return tango;
 370: // try_end0 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=15);
                    vacuum = kilo;
                    control = golf;
                    tango = getMethod(vacuum, control);
                    if(!(tango !== mike)) { _fun00026_ip = 500; continue _fun00025 }
 386:
                    tango = tango.bind(kilo)(sizing);
                    vacuum = tango;
                    control = options;
                    sizing = ensureObject(vacuum, control);
                    sizing = tango.done;
                    if(sizing) { _fun00026_ip = 495; continue _fun00025 }
 409:
                    sizing = generatorSetDelegated();
                    SaveGenerator(address=417);
 415:
                    return tango;
 417: // try_start_1
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=17);
                    echo = sizing;
                    output = result;
                    if(!output) { _fun00026_ip = 330; continue _fun00025 }
 429:
                    echo = sizing;
 432: // try_end1
                    control = 'return';
                    vacuum = kilo;
                    source = getMethod(vacuum, control);
                    if(!(source !== mike)) { _fun00026_ip = 492; continue _fun00025 }
 447:
                    output = echo;
                    output = source.bind(kilo)(output);
                    control = 'iterator.return() did not return an object';
                    vacuum = output;
                    source = ensureObject(vacuum, control);
                    source = output.done;
                    if(source) { _fun00026_ip = 484; continue _fun00025 }
 476:
                    source = generatorSetDelegated();
                    SaveGenerator(address=417);
 482:
                    return output;
 484:
                    output = output.value;
                    return output;
 492:
                    return sizing;
 495:
                    zulu = tango;
                    _fun00026_ip = 541; continue _fun00025;
 500:
                    control = 'return';
                    vacuum = kilo;
                    tango = getMethod(vacuum, control);
                    if(!(tango !== mike)) { _fun00026_ip = 529; continue _fun00025 }
 515:
                    vacuum = tango.bind(kilo)();
                    control = 'iterator.return() did not return an object';
                    tango = ensureObject(vacuum, control);
 529:
                    vacuum = 'yield* delegate must have a .throw() method';
                    tango = throwTypeError(vacuum);
                    throw mike;
 541:
                    zulu = zulu.value;
                    if(!(offset !== zulu)) { _fun00026_ip = 585; continue _fun00025 }
 550:
                    if(!(yankee !== zulu)) { _fun00026_ip = 557; continue _fun00025 }
 554:
                    if(zulu) { _fun00026_ip = 577; continue _fun00025 }
 557:
                    kilo = romeo.bind(mike)();
                    tango = kilo.done;
                    report = kilo;
                    if(tango) { _fun00026_ip = 585; continue _fun00025 }
 572:
                    _fun00026_ip = 283; continue _fun00025;
 577:
                    zulu = zulu.v;
                    return zulu;
 585:
                    return mike;
 588:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(mike)(golf);
        var _closure2_slot0 = golf;
        golf = function() { // Original name: handlePostConnectionOpen
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'handleGuildCreate';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: handleGuildCreate
            tango = this;
            zulu = tango.handleOneGuildCreate;
            entity = argFoo;
            mike = entity.guild;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'handleOneGuildCreate';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: handleOneGuildCreate
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = argFoo;
                oscar = argBar;
                report = this;
                zulu = entity.channelUpdates;
                mike = null;
                if(!(mike == zulu)) { _fun00030_ip = 40; continue _fun00029 }
 21:
                zulu = report.onGuildSync;
                mike = entity.id;
                mike = zulu.bind(report)(mike, oscar);
                _fun00030_ip = 85; continue _fun00029;
 40:
                tango = report.onGuildUpdate;
                offset = entity.id;
                mike = entity.channelUpdates;
                verify = mike.writes;
                entity = entity.channelUpdates;
                options = entity.deletes;
                yankee = report;
                golf = oscar;
                entity = yankee[tango](offset, verify, options, golf, oscar);
 85:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'handleGuildUpdate';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: handleGuildUpdate
            tango = this;
            zulu = tango.unsync;
            entity = argFoo;
            entity = entity.guild;
            mike = entity.id;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'handleGuildDelete';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: handleGuildDelete
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                entity = argFoo;
                tango = this;
                mike = entity.guild;
                zulu = mike.unavailable;
                mike = true;
                if(!(mike !== zulu)) { _fun00032_ip = 47; continue _fun00031 }
 23:
                zulu = tango.delete;
                entity = entity.guild;
                mike = entity.id;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
 47:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'handleGuildRoleUpdate';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: handleGuildRoleUpdate
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = argFoo;
                tango = this;
                report = entity.role;
                golf = _closure1_slot12;
                oscar = golf.getRole;
                zulu = entity.guildId;
                mike = report.id;
                zulu = oscar.bind(golf)(zulu, mike);
                mike = null;
                mike = mike != zulu;
                if(!mike) { _fun00034_ip = 66; continue _fun00033 }
 50:
                report = report.permissions;
                zulu = zulu.permissions;
                mike = report === zulu;
 66:
                if(mike) { _fun00034_ip = 89; continue _fun00033 }
 69:
                zulu = tango.unsync;
                mike = entity.guildId;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
 89:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'handleGuildMemberUpdate';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: handleGuildMemberUpdate
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                entity = argFoo;
                tango = this;
                mike = entity.user;
                zulu = mike.id;
                report = _closure1_slot9;
                mike = report.getId;
                mike = mike.bind(report)();
                if(!(zulu === mike)) { _fun00036_ip = 57; continue _fun00035 }
 37:
                zulu = tango.unsync;
                mike = entity.guildId;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
 57:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'handleWriteCaches';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: handleWriteCaches
            zulu = this;
            mike = zulu.sync;
            entity = argBar;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'resetInMemoryState';
        report['key'] = golf;
        golf = function() { // Original name: resetInMemoryState
            mike = null;
            entity = this;
            entity['synced'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'onGuildUpdate';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: onGuildUpdate
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                report = argBar;
                tango = this;
                entity = argBaz;
                mike = entity.length;
                entity = 0;
                entity = mike > entity;
                if(entity) { _fun00038_ip = 41; continue _fun00037 }
 23:
                zulu = report.some;
                mike = function(argFoo) {
                    tango = argFoo;
                    zulu = _closure1_slot18;
                    report = _closure1_slot10;
                    mike = report.getBasicChannel;
                    entity = tango.id;
                    mike = mike.bind(report)(entity);
                    entity = undefined;
                    entity = zulu.bind(entity)(mike, tango);
                    return entity;
                };
                entity = zulu.bind(report)(mike);
 41:
                if(!entity) { _fun00038_ip = 62; continue _fun00037 }
 44:
                zulu = tango.unsync;
                mike = argFoo;
                entity = argCorge;
                entity = zulu.bind(tango)(mike, entity);
 62:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'onGuildSync';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: onGuildSync
            tango = this;
            zulu = tango.unsync;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'delete';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: _delete
            tango = argFoo;
            report = argBar;
            mike = this;
            entity = mike.unsync;
            entity = entity.bind(mike)(tango, report);
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 12;
            golf = oscar[mike];
            entity = undefined;
            options = zulu.bind(entity)(golf);
            golf = options.basicChannelsTransaction;
            options = golf.bind(options)(report);
            golf = options.delete;
            golf = golf.bind(options)(tango);
            mike = oscar[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.syncedBasicChannelsTransaction;
            zulu = mike.bind(zulu)(report);
            mike = zulu.delete;
            mike = mike.bind(zulu)(tango);
            return entity;
        };
        report['value'] = golf;
        entity[17] = report;
        report = {};
        golf = 'unsync';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: unsync
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                tango = argFoo;
                oscar = argBar;
                entity = this;
                mike = entity.synced;
                entity = null;
                if(!(entity != mike)) { _fun00040_ip = 31; continue _fun00039 }
 21:
                entity = mike.delete;
                entity = entity.bind(mike)(tango);
 31:
                report = _closure1_slot1;
                golf = _closure1_slot2;
                zulu = 12;
                options = golf[zulu];
                entity = undefined;
                verify = report.bind(entity)(options);
                options = verify.basicChannelsTransaction;
                verify = options.bind(verify)(oscar);
                options = verify.delete;
                options = options.bind(verify)(tango);
                zulu = golf[zulu];
                report = report.bind(entity)(zulu);
                zulu = report.syncedBasicChannelsTransaction;
                oscar = zulu.bind(report)(oscar);
                report = oscar.put;
                zulu = false;
                zulu = report.bind(oscar)(tango, zulu);
                zulu = _closure1_slot14;
                mike = zulu.invalidate;
                mike = mike.bind(zulu)(tango);
                return entity;
            }
        };
        report['value'] = golf;
        entity[18] = report;
        report = {};
        golf = 'sync';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: sync
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                offset = argFoo;
                verify = this;
                tango = _closure1_slot15;
                mike = tango.verbose;
                entity = 'Starting to write all basic channels';
                entity = mike.bind(tango)(entity);
                mike = global;
                tango = mike.performance;
                entity = tango.now;
                oscar = entity.bind(tango)();
                report = {'written': 0, 'skipped': 0};
                golf = _closure1_slot16;
                tango = _closure1_slot12;
                entity = tango.getGuildIds;
                tango = entity.bind(tango)();
                entity = undefined;
                options = golf.bind(entity)(tango);
                golf = options.bind(entity)();
                tango = golf.done;
                if(tango) { _fun00042_ip = 161; continue _fun00041 }
 94:
                yankee = golf.value;
                tango = verify.syncOne;
                tango = tango.bind(verify)(yankee, offset);
                if(tango) { _fun00042_ip = 131; continue _fun00041 }
 114:
                tango = report.skipped;
                tango = tango + 1;
                report['skipped'] = tango;
                _fun00042_ip = 146; continue _fun00041;
 131:
                tango = report.written;
                tango = tango + 1;
                report['written'] = tango;
 146:
                yankee = options.bind(entity)();
                tango = yankee.done;
                golf = yankee;
                if(!tango) { _fun00042_ip = 94; continue _fun00041 }
 161:
                golf = mike.performance;
                tango = golf.now;
                tango = tango.bind(golf)();
                kilo = tango - oscar;
                tango = _closure1_slot15;
                zulu = tango.verbose;
                output = report.written;
                foxtrot = report.skipped;
                mike = mike.HermesInternal;
                options = mike.concat;
                result = '';
                sizing = ' basic_channel guilds submitted (took: ';
                backup = 'ms, skipped: ';
                romeo = ' guilds)';
                mike = result[options](output, sizing, kilo, backup, foxtrot, romeo, yankee);
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        report['value'] = golf;
        entity[19] = report;
        report = {};
        golf = 'syncOne';
        report['key'] = golf;
        oscar = function(argFoo, argBar) { // Original name: syncOne
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                report = argFoo;
                tango = argBar;
                oscar = this;
                zulu = _closure1_slot12;
                entity = zulu.getGuild;
                entity = entity.bind(zulu)(report);
                zulu = null;
                entity = zulu == entity;
                if(entity) { _fun00044_ip = 61; continue _fun00043 }
 35:
                verify = oscar.synced;
                golf = zulu != verify;
                if(!golf) { _fun00044_ip = 58; continue _fun00043 }
 48:
                options = verify.has;
                golf = options.bind(verify)(report);
 58:
                entity = golf;
 61:
                entity = !entity;
                if(!entity) { _fun00044_ip = 180; continue _fun00043 }
 67:
                oscar = oscar.synced;
                if(!(zulu != oscar)) { _fun00044_ip = 87; continue _fun00043 }
 77:
                zulu = oscar.add;
                zulu = zulu.bind(oscar)(report);
 87:
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                mike = 12;
                options = golf[mike];
                zulu = undefined;
                verify = oscar.bind(zulu)(options);
                options = verify.basicChannelsTransaction;
                offset = options.bind(verify)(tango);
                verify = offset.put;
                options = function(argFoo) { // Original name: computeBasicChannels
                    zulu = _closure1_slot10;
                    mike = zulu.getMutableGuildChannelsForGuild;
                    entity = argFoo;
                    zulu = mike.bind(zulu)(entity);
                    entity = global;
                    mike = entity.Object;
                    entity = mike.values;
                    zulu = entity.bind(mike)(zulu);
                    mike = zulu.map;
                    entity = function(argFoo) {
                        oscar = argFoo;
                        entity = {};
                        mike = oscar.id;
                        entity['id'] = mike;
                        mike = oscar.type;
                        entity['type'] = mike;
                        mike = oscar.guild_id;
                        entity['guild_id'] = mike;
                        mike = oscar.parent_id;
                        entity['parent_id'] = mike;
                        report = _closure1_slot1;
                        tango = _closure1_slot2;
                        zulu = 14;
                        tango = tango[zulu];
                        zulu = undefined;
                        tango = report.bind(zulu)(tango);
                        zulu = tango.asBasicFlag;
                        report = _closure1_slot13;
                        mike = report.computePermissions;
                        mike = mike.bind(report)(oscar);
                        mike = zulu.bind(tango)(mike);
                        entity['basicPermissions'] = mike;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                options = options.bind(zulu)(report);
                options = verify.bind(offset)(report, options);
                mike = golf[mike];
                zulu = oscar.bind(zulu)(mike);
                mike = zulu.syncedBasicChannelsTransaction;
                tango = mike.bind(zulu)(tango);
                zulu = tango.put;
                mike = true;
                zulu = zulu.bind(tango)(report, mike);
                entity = true;
 180:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[20] = report;
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/modules/GuildBasicChannels.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();