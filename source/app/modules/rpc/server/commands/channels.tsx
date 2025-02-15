// app/modules/rpc/server/commands/channels.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    golf = mike.isVoiceChannel;
    var _closure1_slot3 = golf;
    mike = mike.isTextChannel;
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    romeo = mike.RPC_SCOPE_CONFIG;
    mike = 7;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.Routes;
    var _closure1_slot10 = tango;
    tango = mike.Permissions;
    var _closure1_slot11 = tango;
    tango = mike.RPCCommands;
    mike = mike.RPCErrors;
    var _closure1_slot12 = mike;
    mike = {};
    offset = tango.GET_CHANNEL;
    golf = {};
    yankee = {};
    backup = romeo.ANY;
    verify = 8;
    foxtrot = oscar[verify];
    foxtrot = report.bind(entity)(foxtrot);
    foxtrot = foxtrot.OAuth2Scopes;
    kilo = foxtrot.RPC;
    foxtrot = new Array(3);
    foxtrot[0] = kilo;
    kilo = oscar[verify];
    kilo = report.bind(entity)(kilo);
    kilo = kilo.OAuth2Scopes;
    kilo = kilo.GUILDS;
    foxtrot[1] = kilo;
    kilo = oscar[verify];
    kilo = report.bind(entity)(kilo);
    kilo = kilo.OAuth2Scopes;
    kilo = kilo.GUILDS_CHANNELS_READ;
    foxtrot[2] = kilo;
    yankee[backup] = foxtrot;
    golf['scope'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun109543: for(var _fun109543_ip = 0; ; ) switch(_fun109543_ip) {
 0:
            entity = argFoo;
            mike = entity.args;
            report = mike.channel_id;
            mike = entity.socket;
            tango = _closure1_slot5;
            zulu = tango.getChannel;
            oscar = zulu.bind(tango)(report);
            zulu = null;
            if(!(zulu != oscar)) { _fun109543_ip = 311; continue _fun109543 }
 46:
            zulu = oscar.isPrivate;
            zulu = zulu.bind(oscar)();
            if(!zulu) { _fun109543_ip = 231; continue _fun109543 }
 62:
            zulu = mike.authorization;
            options = zulu.scopes;
            tango = options.includes;
            verify = _closure1_slot0;
            zulu = _closure1_slot2;
            offset = 8;
            zulu = zulu[offset];
            golf = undefined;
            zulu = verify.bind(golf)(zulu);
            zulu = zulu.OAuth2Scopes;
            zulu = zulu.RPC;
            zulu = tango.bind(options)(zulu);
            if(zulu) { _fun109543_ip = 231; continue _fun109543 }
 121:
            tango = options.includes;
            verify = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[offset];
            zulu = verify.bind(golf)(zulu);
            zulu = zulu.OAuth2Scopes;
            zulu = zulu.DM_CHANNELS_READ;
            zulu = tango.bind(options)(zulu);
            if(zulu) { _fun109543_ip = 231; continue _fun109543 }
 163:
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 9;
            zulu = options[zulu];
            options = tango.bind(golf)(zulu);
            golf = {};
            zulu = _closure1_slot12;
            zulu = zulu.INVALID_PERMISSIONS;
            golf['errorCode'] = zulu;
            zulu = options.prototype;
            tango = Object.create(zulu, {constructor: {value: options}});
            romeo = 'Invalid scope';
            backup = tango;
            foxtrot = golf;
            zulu = new backup[options](foxtrot, romeo, yankee);
            zulu = zulu instanceof Object ? zulu : tango;
            throw zulu;
 231:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 10;
            zulu = offset[golf];
            options = undefined;
            tango = verify.bind(options)(zulu);
            zulu = tango.transformChannel;
            golf = offset[golf];
            verify = verify.bind(options)(golf);
            options = verify.hasMessageReadPermission;
            golf = mike.application;
            golf = golf.id;
            mike = mike.authorization;
            mike = mike.scopes;
            mike = options.bind(verify)(oscar, golf, mike);
            mike = zulu.bind(tango)(oscar, mike);
            return mike;
 311:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 9;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot12;
            entity = entity.INVALID_CHANNEL;
            zulu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Invalid channel id: ';
            romeo = mike.bind(entity)(report);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            backup = mike;
            foxtrot = zulu;
            entity = new backup[tango](foxtrot, romeo, yankee);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    golf['handler'] = yankee;
    mike[offset] = golf;
    offset = tango.GET_CHANNELS;
    golf = {};
    yankee = oscar[verify];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.OAuth2Scopes;
    yankee = yankee.RPC;
    golf['scope'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun109544: for(var _fun109544_ip = 0; ; ) switch(_fun109544_ip) {
 0:
            entity = argFoo;
            entity = entity.args;
            report = entity.guild_id;
            tango = undefined;
            var _closure2_slot0 = tango;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 11;
            mike = golf[mike];
            golf = oscar.bind(tango)(mike);
            oscar = golf.values;
            options = _closure1_slot5;
            mike = options.loadAllGuildAndPrivateChannelsFromDisk;
            mike = mike.bind(options)();
            golf = oscar.bind(golf)(mike);
            options = golf;
            if(!report) { _fun109544_ip = 116; continue _fun109544 }
 75:
            oscar = _closure1_slot6;
            mike = oscar.getGuild;
            oscar = mike.bind(oscar)(report);
            _closure2_slot0 = oscar;
            mike = null;
            if(!(mike != oscar)) { _fun109544_ip = 159; continue _fun109544 }
 99:
            oscar = golf.filter;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.guild_id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike === entity;
                return entity;
            };
            options = oscar.bind(golf)(mike);
 116:
            mike = {};
            golf = options.filter;
            oscar = function(argFoo) {
                tango = _closure1_slot7;
                zulu = tango.can;
                entity = _closure1_slot11;
                mike = entity.VIEW_CHANNEL;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf = golf.bind(options)(oscar);
            oscar = golf.map;
            zulu = function(argFoo) {
                entity = argFoo;
                tango = entity.id;
                zulu = entity.name;
                mike = entity.type;
                entity = {};
                entity['id'] = tango;
                entity['name'] = zulu;
                entity['type'] = mike;
                return entity;
            };
            zulu = oscar.bind(golf)(zulu);
            mike['channels'] = zulu;
            return mike;
 159:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 9;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = {};
            entity = _closure1_slot12;
            entity = entity.INVALID_GUILD;
            zulu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'Invalid guild id: ';
            verify = mike.bind(entity)(report);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            yankee = mike;
            offset = zulu;
            entity = new yankee[tango](offset, verify, options);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    golf['handler'] = yankee;
    mike[offset] = golf;
    offset = tango.GET_CHANNEL_PERMISSIONS;
    golf = {};
    yankee = {};
    backup = romeo.ANY;
    foxtrot = oscar[verify];
    foxtrot = report.bind(entity)(foxtrot);
    foxtrot = foxtrot.OAuth2Scopes;
    kilo = foxtrot.GUILDS_MEMBERS_READ;
    foxtrot = new Array(2);
    foxtrot[0] = kilo;
    kilo = oscar[verify];
    kilo = report.bind(entity)(kilo);
    kilo = kilo.OAuth2Scopes;
    kilo = kilo.GUILDS_CHANNELS_READ;
    foxtrot[1] = kilo;
    yankee[backup] = foxtrot;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        _fun109548: for(var _fun109548_ip = 0; ; ) switch(_fun109548_ip) {
 0:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 12;
            mike = tango[mike];
            tango = undefined;
            mike = zulu.bind(tango)(mike);
            oscar = mike.bind(tango)();
            mike = null;
            if(!(mike != oscar)) { _fun109548_ip = 59; continue _fun109548 }
 35:
            mike = {};
            report = _closure1_slot7;
            zulu = report.computePermissions;
            zulu = zulu.bind(report)(oscar);
            mike['permissions'] = zulu;
            return mike;
 59:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = {};
            entity = _closure1_slot12;
            entity = entity.INVALID_CHANNEL;
            zulu['errorCode'] = entity;
            entity = tango.prototype;
            mike = Object.create(entity, {constructor: {value: tango}});
            golf = 'Invalid channel';
            verify = mike;
            options = zulu;
            entity = new verify[tango](options, golf, oscar);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    golf['handler'] = yankee;
    mike[offset] = golf;
    offset = tango.SELECT_VOICE_CHANNEL;
    golf = {};
    yankee = oscar[verify];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.OAuth2Scopes;
    yankee = yankee.RPC;
    golf['scope'] = yankee;
    yankee = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 13;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        golf = tango.bind(report)();
        oscar = golf.allow;
        tango = null;
        tango = oscar.bind(golf)(tango);
        entity['channel_id'] = tango;
        tango = report.number;
        golf = tango.bind(report)();
        oscar = golf.min;
        tango = 0;
        golf = oscar.bind(golf)(tango);
        oscar = golf.max;
        tango = 60;
        tango = oscar.bind(golf)(tango);
        entity['timeout'] = tango;
        tango = report.boolean;
        tango = tango.bind(report)();
        entity['force'] = tango;
        tango = report.boolean;
        tango = tango.bind(report)();
        entity['navigate'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['validation'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun109550: for(var _fun109550_ip = 0; ; ) switch(_fun109550_ip) {
 0:
            entity = argFoo;
            options = entity.server;
            golf = entity.socket;
            var _closure2_slot0 = golf;
            entity = entity.args;
            verify = entity.channel_id;
            var _closure2_slot1 = verify;
            oscar = entity.timeout;
            tango = undefined;
            if(!(oscar === tango)) { _fun109550_ip = 50; continue _fun109550 }
 48:
            oscar = 0;
 50:
            report = entity.force;
            if(!(report === tango)) { _fun109550_ip = 62; continue _fun109550 }
 60:
            report = false;
 62:
            entity = entity.navigate;
            if(!(entity === tango)) { _fun109550_ip = 74; continue _fun109550 }
 72:
            entity = false;
 74:
            var _closure2_slot2 = entity;
            if(verify) { _fun109550_ip = 119; continue _fun109550 }
 84:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            zulu = 14;
            zulu = yankee[zulu];
            yankee = offset.bind(tango)(zulu);
            offset = yankee.selectVoiceChannel;
            zulu = null;
            offset = offset.bind(yankee)(zulu);
            return zulu;
 119:
            offset = _closure1_slot8;
            zulu = offset.getVoiceChannelId;
            zulu = zulu.bind(offset)();
            offset = null;
            if(!(offset != zulu)) { _fun109550_ip = 149; continue _fun109550 }
 139:
            if(!(zulu !== verify)) { _fun109550_ip = 149; continue _fun109550 }
 143:
            zulu = false;
            if(!(zulu !== report)) { _fun109550_ip = 223; continue _fun109550 }
 149:
            report = options.storeWait;
            zulu = function() {
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = report.bind(options)(golf, zulu, oscar);
            report = oscar.catch;
            zulu = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = {};
                entity = _closure1_slot12;
                entity = entity.SELECT_CHANNEL_TIMED_OUT;
                zulu['errorCode'] = entity;
                entity = tango.prototype;
                mike = Object.create(entity, {constructor: {value: tango}});
                report = 'Request to select voice channel timed out.';
                golf = mike;
                oscar = zulu;
                entity = new golf[tango](oscar, report, tango);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            };
            oscar = report.bind(oscar)(zulu);
            report = oscar.then;
            zulu = function(argFoo) {
                _fun109553: for(var _fun109553_ip = 0; ; ) switch(_fun109553_ip) {
 0:
                    golf = argFoo;
                    entity = null;
                    if(!(entity != golf)) { _fun109553_ip = 235; continue _fun109553 }
 12:
                    mike = _closure1_slot3;
                    entity = golf.type;
                    verify = undefined;
                    entity = mike.bind(verify)(entity);
                    if(entity) { _fun109553_ip = 102; continue _fun109553 }
 34:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 9;
                    entity = zulu[entity];
                    report = mike.bind(verify)(entity);
                    zulu = {};
                    entity = _closure1_slot12;
                    entity = entity.INVALID_CHANNEL;
                    zulu['errorCode'] = entity;
                    entity = report.prototype;
                    mike = Object.create(entity, {constructor: {value: report}});
                    romeo = 'Channel is not a voice channel';
                    backup = mike;
                    foxtrot = zulu;
                    entity = new backup[report](foxtrot, romeo, yankee);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
 102:
                    entity = global;
                    zulu = entity.Promise;
                    mike = zulu.all;
                    report = entity.Promise;
                    entity = report.resolve;
                    report = entity.bind(report)(golf);
                    entity = new Array(2);
                    entity[0] = report;
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    tango = 10;
                    report = offset[tango];
                    oscar = options.bind(verify)(report);
                    report = oscar.transformChannel;
                    tango = offset[tango];
                    offset = options.bind(verify)(tango);
                    verify = offset.hasMessageReadPermission;
                    tango = _closure2_slot0;
                    options = tango.application;
                    options = options.id;
                    tango = tango.authorization;
                    tango = tango.scopes;
                    tango = verify.bind(offset)(golf, options, tango);
                    tango = report.bind(oscar)(golf, tango);
                    entity[1] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
 235:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 9;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = {};
                    entity = _closure1_slot12;
                    entity = entity.INVALID_CHANNEL;
                    zulu['errorCode'] = entity;
                    report = _closure2_slot1;
                    entity = global;
                    entity = entity.HermesInternal;
                    mike = entity.concat;
                    entity = 'Invalid channel id: ';
                    romeo = mike.bind(entity)(report);
                    mike = tango.prototype;
                    mike = Object.create(mike, {constructor: {value: tango}});
                    backup = mike;
                    foxtrot = zulu;
                    entity = new backup[tango](foxtrot, romeo, yankee);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            report = report.bind(oscar)(zulu);
            zulu = report.then;
            mike = function(argFoo) {
                _fun109554: for(var _fun109554_ip = 0; ; ) switch(_fun109554_ip) {
 0:
                    oscar = argFoo;
                    entity = oscar[Symbol.iterator];
                    oscar = entity().next;
                    mike = oscar().value;
                    zulu = entity;
                    tango = undefined;
                    report = zulu === tango;
                    zulu = undefined;
                    if(report) { _fun109554_ip = 27; continue _fun109554 }
 24:
                    zulu = mike;
 27:
                    mike = undefined;
                    if(report) { _fun109554_ip = 57; continue _fun109554 }
 32:
                    golf = oscar().value;
                    oscar = entity;
                    oscar = oscar === tango;
                    mike = undefined;
                    report = oscar;
                    if(oscar) { _fun109554_ip = 57; continue _fun109554 }
 51:
                    mike = golf;
                    report = oscar;
 57:
                    if(report) { _fun109554_ip = 63; continue _fun109554 }
 60:
                    entity.return();
 63:
                    entity = mike.guild_id;
                    if(!entity) { _fun109554_ip = 221; continue _fun109554 }
 74:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 15;
                    report = golf[report];
                    options = oscar.bind(tango)(report);
                    golf = options.isChannelFull;
                    oscar = _closure1_slot9;
                    report = _closure1_slot6;
                    report = golf.bind(options)(zulu, oscar, report);
                    if(report) { _fun109554_ip = 329; continue _fun109554 }
 124:
                    golf = _closure1_slot7;
                    oscar = golf.can;
                    report = _closure1_slot11;
                    report = report.CONNECT;
                    report = oscar.bind(golf)(report, zulu);
                    if(report) { _fun109554_ip = 221; continue _fun109554 }
 153:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 9;
                    report = golf[report];
                    options = oscar.bind(tango)(report);
                    golf = {};
                    report = _closure1_slot12;
                    report = report.INVALID_PERMISSIONS;
                    golf['errorCode'] = report;
                    report = options.prototype;
                    oscar = Object.create(report, {constructor: {value: options}});
                    yankee = 'Connect permission required to join channel';
                    foxtrot = oscar;
                    romeo = golf;
                    report = new foxtrot[options](romeo, yankee, offset);
                    report = report instanceof Object ? report : oscar;
                    throw report;
 221:
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 14;
                    report = options[report];
                    options = oscar.bind(tango)(report);
                    oscar = options.selectVoiceChannel;
                    report = zulu.id;
                    report = oscar.bind(options)(report);
                    report = _closure2_slot2;
                    if(!report) { _fun109554_ip = 327; continue _fun109554 }
 270:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 16;
                    report = options[report];
                    oscar = oscar.bind(tango)(report);
                    report = oscar.replaceWith;
                    verify = _closure1_slot10;
                    options = verify.CHANNEL;
                    golf = zulu.guild_id;
                    zulu = zulu.id;
                    zulu = options.bind(verify)(golf, zulu);
                    zulu = report.bind(oscar)(zulu);
 327:
                    return mike;
 329:
                    zulu = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 9;
                    mike = report[mike];
                    tango = zulu.bind(tango)(mike);
                    zulu = {};
                    entity = _closure1_slot12;
                    entity = entity.INVALID_CHANNEL;
                    zulu['errorCode'] = entity;
                    entity = tango.prototype;
                    mike = Object.create(entity, {constructor: {value: tango}});
                    yankee = 'Channel is full';
                    foxtrot = mike;
                    romeo = zulu;
                    entity = new foxtrot[tango](romeo, yankee, offset);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            mike = zulu.bind(report)(mike);
            return mike;
 223:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = {};
            entity = _closure1_slot12;
            entity = entity.SELECT_VOICE_FORCE_REQUIRED;
            zulu['errorCode'] = entity;
            entity = tango.prototype;
            mike = Object.create(entity, {constructor: {value: tango}});
            foxtrot = 'User is already joined to a voice channel.';
            kilo = mike;
            backup = zulu;
            entity = new kilo[tango](backup, foxtrot, romeo);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    golf['handler'] = yankee;
    mike[offset] = golf;
    offset = tango.GET_SELECTED_VOICE_CHANNEL;
    golf = {};
    yankee = {};
    foxtrot = romeo.ANY;
    romeo = oscar[verify];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.OAuth2Scopes;
    backup = romeo.RPC;
    romeo = new Array(2);
    romeo[0] = backup;
    backup = oscar[verify];
    backup = report.bind(entity)(backup);
    backup = backup.OAuth2Scopes;
    backup = backup.RPC_VOICE_READ;
    romeo[1] = backup;
    yankee[foxtrot] = romeo;
    golf['scope'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun109555: for(var _fun109555_ip = 0; ; ) switch(_fun109555_ip) {
 0:
            entity = argFoo;
            mike = entity.socket;
            tango = _closure1_slot8;
            entity = tango.getVoiceChannelId;
            golf = entity.bind(tango)();
            entity = null;
            tango = entity != golf;
            report = null;
            if(!tango) { _fun109555_ip = 51; continue _fun109555 }
 37:
            oscar = _closure1_slot5;
            tango = oscar.getChannel;
            report = tango.bind(oscar)(golf);
 51:
            tango = entity != report;
            entity = null;
            if(!tango) { _fun109555_ip = 138; continue _fun109555 }
 60:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            oscar = 10;
            zulu = verify[oscar];
            golf = undefined;
            tango = options.bind(golf)(zulu);
            zulu = tango.transformChannel;
            oscar = verify[oscar];
            options = options.bind(golf)(oscar);
            golf = options.hasMessageReadPermission;
            oscar = mike.application;
            oscar = oscar.id;
            mike = mike.authorization;
            mike = mike.scopes;
            mike = golf.bind(options)(report, oscar, mike);
            entity = zulu.bind(tango)(report, mike);
 138:
            return entity;
        }
    };
    golf['handler'] = yankee;
    mike[offset] = golf;
    offset = tango.SELECT_TEXT_CHANNEL;
    golf = {};
    yankee = oscar[verify];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.OAuth2Scopes;
    yankee = yankee.RPC;
    golf['scope'] = yankee;
    yankee = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 13;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        golf = tango.bind(report)();
        oscar = golf.allow;
        tango = null;
        tango = oscar.bind(golf)(tango);
        entity['channel_id'] = tango;
        tango = report.number;
        oscar = tango.bind(report)();
        report = oscar.min;
        tango = 0;
        oscar = report.bind(oscar)(tango);
        report = oscar.max;
        tango = 60;
        tango = report.bind(oscar)(tango);
        entity['timeout'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['validation'] = yankee;
    yankee = function(argFoo) { // Original name: handler
        _fun109557: for(var _fun109557_ip = 0; ; ) switch(_fun109557_ip) {
 0:
            entity = argFoo;
            golf = entity.server;
            oscar = entity.socket;
            var _closure2_slot0 = oscar;
            zulu = entity.args;
            entity = zulu.channel_id;
            var _closure2_slot1 = entity;
            report = zulu.timeout;
            options = undefined;
            if(!(report === options)) { _fun109557_ip = 50; continue _fun109557 }
 48:
            report = 0;
 50:
            if(entity) { _fun109557_ip = 101; continue _fun109557 }
 53:
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 16;
            zulu = verify[zulu];
            tango = tango.bind(options)(zulu);
            zulu = tango.transitionTo;
            entity = _closure1_slot10;
            entity = entity.ME;
            entity = zulu.bind(tango)(entity);
            entity = null;
            _fun109557_ip = 173; continue _fun109557;
 101:
            tango = golf.storeWait;
            zulu = function() {
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = tango.bind(golf)(oscar, zulu, report);
            tango = report.catch;
            zulu = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = {};
                entity = _closure1_slot12;
                entity = entity.SELECT_CHANNEL_TIMED_OUT;
                zulu['errorCode'] = entity;
                entity = tango.prototype;
                mike = Object.create(entity, {constructor: {value: tango}});
                report = 'Request to select text channel timed out.';
                golf = mike;
                oscar = zulu;
                entity = new golf[tango](oscar, report, tango);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            };
            report = tango.bind(report)(zulu);
            tango = report.then;
            zulu = function(argFoo) {
                _fun109560: for(var _fun109560_ip = 0; ; ) switch(_fun109560_ip) {
 0:
                    golf = argFoo;
                    entity = null;
                    if(!(entity != golf)) { _fun109560_ip = 235; continue _fun109560 }
 12:
                    mike = _closure1_slot4;
                    entity = golf.type;
                    verify = undefined;
                    entity = mike.bind(verify)(entity);
                    if(entity) { _fun109560_ip = 102; continue _fun109560 }
 34:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 9;
                    entity = zulu[entity];
                    report = mike.bind(verify)(entity);
                    zulu = {};
                    entity = _closure1_slot12;
                    entity = entity.INVALID_CHANNEL;
                    zulu['errorCode'] = entity;
                    entity = report.prototype;
                    mike = Object.create(entity, {constructor: {value: report}});
                    romeo = 'Channel is not a text channel';
                    backup = mike;
                    foxtrot = zulu;
                    entity = new backup[report](foxtrot, romeo, yankee);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
 102:
                    entity = global;
                    zulu = entity.Promise;
                    mike = zulu.all;
                    report = entity.Promise;
                    entity = report.resolve;
                    report = entity.bind(report)(golf);
                    entity = new Array(2);
                    entity[0] = report;
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    tango = 10;
                    report = offset[tango];
                    oscar = options.bind(verify)(report);
                    report = oscar.transformChannel;
                    tango = offset[tango];
                    offset = options.bind(verify)(tango);
                    verify = offset.hasMessageReadPermission;
                    tango = _closure2_slot0;
                    options = tango.application;
                    options = options.id;
                    tango = tango.authorization;
                    tango = tango.scopes;
                    tango = verify.bind(offset)(golf, options, tango);
                    tango = report.bind(oscar)(golf, tango);
                    entity[1] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
 235:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 9;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = {};
                    entity = _closure1_slot12;
                    entity = entity.INVALID_CHANNEL;
                    zulu['errorCode'] = entity;
                    report = _closure2_slot1;
                    entity = global;
                    entity = entity.HermesInternal;
                    mike = entity.concat;
                    entity = 'Invalid channel id: ';
                    romeo = mike.bind(entity)(report);
                    mike = tango.prototype;
                    mike = Object.create(mike, {constructor: {value: tango}});
                    backup = mike;
                    foxtrot = zulu;
                    entity = new backup[tango](foxtrot, romeo, yankee);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.then;
            mike = function(argFoo) {
                _fun109561: for(var _fun109561_ip = 0; ; ) switch(_fun109561_ip) {
 0:
                    report = argFoo;
                    zulu = report[Symbol.iterator];
                    report = zulu().next;
                    entity = report().value;
                    mike = zulu;
                    oscar = undefined;
                    tango = mike === oscar;
                    mike = undefined;
                    if(tango) { _fun109561_ip = 27; continue _fun109561 }
 24:
                    mike = entity;
 27:
                    entity = undefined;
                    if(tango) { _fun109561_ip = 57; continue _fun109561 }
 32:
                    golf = report().value;
                    report = zulu;
                    report = report === oscar;
                    entity = undefined;
                    tango = report;
                    if(report) { _fun109561_ip = 57; continue _fun109561 }
 51:
                    entity = golf;
                    tango = report;
 57:
                    if(tango) { _fun109561_ip = 63; continue _fun109561 }
 60:
                    zulu.return();
 63:
                    zulu = entity.guild_id;
                    if(!zulu) { _fun109561_ip = 171; continue _fun109561 }
 71:
                    golf = _closure1_slot7;
                    report = golf.can;
                    tango = _closure1_slot11;
                    tango = tango.VIEW_CHANNEL;
                    tango = report.bind(golf)(tango, mike);
                    if(tango) { _fun109561_ip = 171; continue _fun109561 }
 103:
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 9;
                    tango = golf[tango];
                    golf = report.bind(oscar)(tango);
                    report = {};
                    zulu = _closure1_slot12;
                    zulu = zulu.INVALID_CHANNEL;
                    report['errorCode'] = zulu;
                    zulu = golf.prototype;
                    tango = Object.create(zulu, {constructor: {value: golf}});
                    verify = 'No permission to see channel';
                    yankee = tango;
                    offset = report;
                    zulu = new yankee[golf](offset, verify, options);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 171:
                    zulu = entity.guild_id;
                    if(zulu) { _fun109561_ip = 220; continue _fun109561 }
 182:
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 14;
                    zulu = golf[zulu];
                    golf = tango.bind(oscar)(zulu);
                    tango = golf.selectPrivateChannel;
                    zulu = mike.id;
                    zulu = tango.bind(golf)(zulu);
                    _fun109561_ip = 277; continue _fun109561;
 220:
                    tango = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 16;
                    zulu = golf[zulu];
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.replaceWith;
                    golf = _closure1_slot10;
                    oscar = golf.CHANNEL;
                    report = entity.guild_id;
                    mike = mike.id;
                    mike = oscar.bind(golf)(report, mike);
                    mike = zulu.bind(tango)(mike);
 277:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike);
 173:
            return entity;
        }
    };
    golf['handler'] = yankee;
    mike[offset] = golf;
    golf = tango.CREATE_CHANNEL_INVITE;
    tango = {};
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.OAuth2Scopes;
    verify = verify.RPC;
    tango['scope'] = verify;
    options = function(argFoo) { // Original name: handler
        mike = argFoo;
        tango = mike.args;
        oscar = tango.channel_id;
        var _closure2_slot0 = oscar;
        mike = null;
        zulu = Object.create(mike);
        mike = 0;
        zulu['channel_id'] = mike;
        verify = {};
        options = tango;
        golf = zulu;
        report = copyDataProperties(verify, options, golf);
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 17;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.createInvite;
        mike = 'RPC';
        zulu = zulu.bind(tango)(oscar, report, mike);
        mike = zulu.catch;
        entity = function() {
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 9;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot12;
            entity = entity.INVALID_PERMISSIONS;
            zulu['errorCode'] = entity;
            oscar = _closure2_slot0;
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            mike = 'Unable to generate an invite for ';
            entity = '. Does this user have permissions?';
            golf = report.bind(mike)(oscar, entity);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            verify = mike;
            options = zulu;
            entity = new verify[tango](options, golf, oscar);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/channels.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();