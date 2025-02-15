// app/modules/guild_scheduled_events/StartEventUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    report = function() { // Original name: createStageChannelForEvent
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = report;
    entity = function() { // Original name: _createStageChannelForEvent
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    romeo = argBar;
                    report = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 252; continue _fun00001 }
 16:
                    oscar = undefined;
                    if(!(report === oscar)) { _fun00002_ip = 26; continue _fun00001 }
 22:
                    report = new Array(0);
 26:
                    SaveGenerator(address=30);
 28:
                    return oscar;
 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 249; continue _fun00001 }
 39:
                    options = new Array(0);
                    tango = options.push;
                    zulu = new Array(0);
                    yankee = 0;
                    kilo = zulu;
                    backup = report;
                    foxtrot = 0;
                    report = arraySpread(kilo, backup, foxtrot);
                    kilo = tango;
                    backup = zulu;
                    foxtrot = options;
                    zulu = apply(kilo, backup, foxtrot);
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 6;
                    zulu = golf[zulu];
                    golf = report.bind(oscar)(zulu);
                    report = golf.createChannel;
                    zulu = {};
                    verify = argFoo;
                    verify = verify.id;
                    zulu['guildId'] = verify;
                    verify = _closure1_slot9;
                    verify = verify.GUILD_STAGE_VOICE;
                    zulu['type'] = verify;
                    offset = romeo.substring;
                    verify = 100;
                    verify = offset.bind(romeo)(yankee, verify);
                    zulu['name'] = verify;
                    zulu['permissionOverwrites'] = options;
                    zulu = report.bind(golf)(zulu);
                    SaveGenerator(address=169);
 167:
                    return zulu;
 169:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 246; continue _fun00001 }
 175:
                    report = null;
                    if(!(report != zulu)) { _fun00002_ip = 210; continue _fun00001 }
 181:
                    golf = zulu.status;
                    report = 201;
                    if(!(report === golf)) { _fun00002_ip = 210; continue _fun00001 }
 193:
                    report = _closure1_slot4;
                    tango = zulu.body;
                    tango = report.bind(oscar)(tango);
                    return tango;
 210:
                    tango = global;
                    oscar = tango.Error;
                    tango = oscar.prototype;
                    report = Object.create(tango, {constructor: {value: oscar}});
                    kilo = "Can't create channel for event";
                    sizing = report;
                    tango = new sizing[oscar](kilo, backup);
                    tango = tango instanceof Object ? tango : report;
                    throw tango;
 246:
                    return zulu;
 249:
                    return mike;
 252:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    tango = function(argFoo, argBar) { // Original name: findOrCreateEventChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            report = mike.guild_id;
            oscar = mike.channel_id;
            zulu = _closure1_slot6;
            entity = zulu.getGuild;
            golf = entity.bind(zulu)(report);
            zulu = null;
            if(!(zulu != golf)) { _fun00004_ip = 98; continue _fun00003 }
 36:
            report = _closure1_slot5;
            entity = report.getChannel;
            oscar = entity.bind(report)(oscar);
            if(!(zulu != oscar)) { _fun00004_ip = 75; continue _fun00003 }
 54:
            entity = global;
            report = entity.Promise;
            entity = report.resolve;
            entity = entity.bind(report)(oscar);
            _fun00004_ip = 96; continue _fun00003;
 75:
            oscar = _closure1_slot10;
            report = mike.name;
            tango = undefined;
            mike = argBar;
            entity = oscar.bind(tango)(golf, report, mike);
 96:
            return entity;
 98:
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot12 = tango;
    entity = function() { // Original name: _preStartEventActions
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 104; continue _fun00005 }
 10:
                    tango = report.entity_type;
                    mike = _closure1_slot7;
                    mike = mike.STAGE_INSTANCE;
                    if(!(tango === mike)) { _fun00006_ip = 96; continue _fun00005 }
 33:
                    tango = _closure1_slot12;
                    oscar = undefined;
                    mike = argBar;
                    mike = tango.bind(oscar)(report, mike);
                    SaveGenerator(address=52);
 50:
                    return mike;
 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00006_ip = 101; continue _fun00005 }
 58:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 7;
                    zulu = report[zulu];
                    report = tango.bind(oscar)(zulu);
                    zulu = null;
                    tango = zulu != mike;
                    zulu = 'could not find or create channel';
                    zulu = report.bind(oscar)(tango, zulu);
 96:
                    zulu = undefined;
                    return zulu;
 101:
                    return mike;
 104:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot13 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _setEventAsActive
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    zulu = argFoo;
                    offset = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 345; continue _fun00007 }
 16:
                    tango = undefined;
                    if(!(offset === tango)) { _fun00008_ip = 24; continue _fun00007 }
 22:
                    offset = false;
 24:
                    SaveGenerator(address=28);
 26:
                    return tango;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 342; continue _fun00007 }
 37:
                    verify = zulu.channel_id;
                    oscar = zulu.entity_type;
                    options = zulu.name;
                    golf = zulu.id;
                    yankee = zulu.guild_id;
                    report = _closure1_slot7;
                    report = report.STAGE_INSTANCE;
                    if(!(report !== oscar)) { _fun00008_ip = 237; continue _fun00007 }
 83:
                    report = _closure1_slot7;
                    report = report.VOICE;
                    if(!(report !== oscar)) { _fun00008_ip = 162; continue _fun00007 }
 97:
                    report = _closure1_slot7;
                    report = report.EXTERNAL;
                    if(!(report === oscar)) { _fun00008_ip = 336; continue _fun00007 }
 114:
                    oscar = _closure1_slot1;
                    romeo = _closure1_slot2;
                    report = 9;
                    report = romeo[report];
                    oscar = oscar.bind(tango)(report);
                    report = oscar.startEvent;
                    report = report.bind(oscar)(golf, yankee);
                    SaveGenerator(address=150);
 148:
                    return report;
 150:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!oscar) { _fun00008_ip = 336; continue _fun00007 }
 159:
                    return report;
 162:
                    oscar = _closure1_slot1;
                    romeo = _closure1_slot2;
                    report = 7;
                    report = romeo[report];
                    backup = oscar.bind(tango)(report);
                    report = null;
                    foxtrot = report != verify;
                    report = 'channel_id is required';
                    report = backup.bind(tango)(foxtrot, report);
                    report = 9;
                    report = romeo[report];
                    oscar = oscar.bind(tango)(report);
                    report = oscar.startEvent;
                    report = report.bind(oscar)(golf, yankee);
                    SaveGenerator(address=228);
 226:
                    return report;
 228:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!oscar) { _fun00008_ip = 336; continue _fun00007 }
 234:
                    return report;
 237:
                    oscar = _closure1_slot1;
                    yankee = _closure1_slot2;
                    report = 7;
                    report = yankee[report];
                    romeo = oscar.bind(tango)(report);
                    report = null;
                    oscar = report != verify;
                    report = 'channel_id is required';
                    report = romeo.bind(tango)(oscar, report);
                    oscar = _closure1_slot0;
                    report = 8;
                    report = yankee[report];
                    oscar = oscar.bind(tango)(report);
                    report = oscar.startStageInstance;
                    zulu = _closure1_slot8;
                    output = zulu.GUILD_ONLY;
                    update = oscar;
                    echo = verify;
                    result = options;
                    sizing = offset;
                    kilo = golf;
                    zulu = update[report](echo, result, output, sizing, kilo, backup);
                    SaveGenerator(address=330);
 328:
                    return zulu;
 330:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 339; continue _fun00007 }
 336:
                    return tango;
 339:
                    return zulu;
 342:
                    return mike;
 345:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.createChannelRecordFromServer;
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.GuildScheduledEventEntityTypes;
    var _closure1_slot7 = verify;
    oscar = oscar.GuildScheduledEventPrivacyLevel;
    var _closure1_slot8 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.ChannelTypes;
    var _closure1_slot9 = oscar;
    oscar = 10;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_scheduled_events/StartEventUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['createStageChannelForEvent'] = report;
    zulu['findOrCreateEventChannel'] = tango;
    tango = function() { // Original name: preStartEventActions
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['preStartEventActions'] = tango;
    mike = function() { // Original name: setEventAsActive
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['setEventAsActive'] = mike;
    return entity;
})();