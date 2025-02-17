// app/actions/GuildActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function() { // Original name: _joinGuild
        report = undefined;
        entity = undefined;
        tango = _closure1_slot6;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    tango = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 1243; continue _fun00001 }
 18:
                    golf = mike;
                    var _closure4_slot0 = mike;
                    report = undefined;
                    if(!(tango === report)) { _fun00002_ip = 33; continue _fun00001 }
 31:
                    tango = {};
 33:
                    source = undefined;
                    var _closure4_slot1 = report;
                    control = undefined;
                    var _closure4_slot2 = report;
                    vacuum = undefined;
                    offset = undefined;
                    var _closure4_slot3 = report;
                    echo = undefined;
                    kilo = undefined;
                    romeo = undefined;
                    options = undefined;
                    verify = undefined;
                    backup = undefined;
                    SaveGenerator(address=69);
 67:
                    return report;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=10);
                    if(yankee) { _fun00002_ip = 1240; continue _fun00001 }
 78:
                    yankee = tango.source;
                    source = yankee;
                    _closure4_slot1 = yankee;
                    yankee = tango.loadId;
                    control = yankee;
                    _closure4_slot2 = yankee;
                    vacuum = tango.lurkLocation;
                    foxtrot = tango.lurker;
                    yankee = null;
                    tango = yankee != foxtrot;
                    if(!tango) { _fun00002_ip = 127; continue _fun00001 }
 124:
                    tango = foxtrot;
 127:
                    offset = tango;
                    _closure4_slot3 = tango;
                    sizing = _closure1_slot13;
                    foxtrot = sizing.getCurrentUser;
                    result = foxtrot.bind(sizing)();
                    sizing = yankee == result;
                    foxtrot = undefined;
                    if(sizing) { _fun00002_ip = 180; continue _fun00001 }
 159:
                    output = result.hasFlag;
                    sizing = _closure1_slot16;
                    sizing = sizing.QUARANTINED;
                    foxtrot = output.bind(result)(sizing);
 180:
                    if(!(yankee != foxtrot)) { _fun00002_ip = 190; continue _fun00001 }
 184:
                    if(foxtrot) { _fun00002_ip = 1180; continue _fun00001 }
 190:
                    sizing = _closure1_slot1;
                    foxtrot = _closure1_slot3;
                    result = 12;
                    foxtrot = foxtrot[result];
                    output = sizing.bind(report)(foxtrot);
                    sizing = output.wait;
                    foxtrot = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot3;
                        entity = 12;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.dispatch;
                        entity = {};
                        tango = 'GUILD_JOIN';
                        entity['type'] = tango;
                        report = _closure4_slot0;
                        entity['guildId'] = report;
                        report = _closure4_slot3;
                        entity['lurker'] = report;
                        report = _closure4_slot1;
                        entity['source'] = report;
                        tango = _closure4_slot2;
                        entity['loadId'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    foxtrot = sizing.bind(output)(foxtrot);
 226: // try_start_0
                    sizing = _closure1_slot12;
                    foxtrot = sizing.getGuildId;
                    output = foxtrot.bind(sizing)();
                    sizing = golf;
                    foxtrot = null;
                    if(!(sizing === output)) { _fun00002_ip = 293; continue _fun00001 }
 249:
                    update = _closure1_slot10;
                    output = update.getGuild;
                    sizing = golf;
                    sizing = output.bind(update)(sizing);
                    sizing = yankee != sizing;
                    foxtrot = null;
                    if(!sizing) { _fun00002_ip = 293; continue _fun00001 }
 275:
                    update = _closure1_slot11;
                    output = update.getChannelId;
                    sizing = golf;
                    foxtrot = output.bind(update)(sizing);
 293:
                    echo = foxtrot;
                    sizing = _closure1_slot0;
                    output = _closure1_slot3;
                    foxtrot = 14;
                    foxtrot = output[foxtrot];
                    foxtrot = sizing.bind(report)(foxtrot);
                    output = foxtrot.HTTP;
                    sizing = output.put;
                    foxtrot = {};
                    config = _closure1_slot15;
                    sequence = config.GUILD_JOIN;
                    update = golf;
                    update = sequence.bind(config)(update);
                    foxtrot['url'] = update;
                    update = {};
                    config = offset;
                    update['lurker'] = config;
                    sequence = null;
                    if(!config) { _fun00002_ip = 380; continue _fun00001 }
 366:
                    record = _closure1_slot7;
                    config = record.getSessionId;
                    sequence = config.bind(record)();
 380:
                    update['session_id'] = sequence;
                    update['recommendation_load_id'] = control;
                    sequence = offset;
                    control = null;
                    if(!sequence) { _fun00002_ip = 415; continue _fun00001 }
 400:
                    sequence = vacuum;
                    sequence = yankee != sequence;
                    control = null;
                    if(!sequence) { _fun00002_ip = 415; continue _fun00001 }
 412:
                    control = vacuum;
 415:
                    update['location'] = control;
                    foxtrot['query'] = update;
                    update = {};
                    update['source'] = source;
                    foxtrot['context'] = update;
                    update = true;
                    foxtrot['oldFormErrors'] = update;
                    update = {};
                    foxtrot['body'] = update;
                    update = false;
                    foxtrot['rejectWithError'] = update;
                    foxtrot = sizing.bind(output)(foxtrot);
                    SaveGenerator(address=461);
 459:
                    return foxtrot;
 461:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=15);
                    if(sizing) { _fun00002_ip = 927; continue _fun00001 }
 470:
                    kilo = foxtrot;
                    sizing = foxtrot.body;
                    sizing = sizing.join_request;
                    if(!(yankee != sizing)) { _fun00002_ip = 553; continue _fun00001 }
 488:
                    output = _closure1_slot1;
                    sizing = _closure1_slot3;
                    sizing = sizing[result];
                    update = output.bind(report)(sizing);
                    output = update.dispatch;
                    sizing = {};
                    source = 'USER_GUILD_JOIN_REQUEST_UPDATE';
                    sizing['type'] = source;
                    source = golf;
                    sizing['guildId'] = source;
                    source = kilo;
                    source = source.body;
                    source = source.join_request;
                    sizing['request'] = source;
                    sizing = output.bind(update)(sizing);
 553:
                    update = _closure1_slot10;
                    output = update.getGuild;
                    sizing = golf;
                    sizing = output.bind(update)(sizing);
                    if(!(yankee == sizing)) { _fun00002_ip = 596; continue _fun00001 }
 574:
                    sizing = kilo;
                    sizing = sizing.body;
                    sizing = sizing.show_verification_form;
                    if(sizing) { _fun00002_ip = 875; continue _fun00001 }
 596:
                    sizing = kilo;
                    sizing = sizing.body;
                    sizing = sizing.welcome_screen;
                    if(!(yankee != sizing)) { _fun00002_ip = 686; continue _fun00001 }
 614:
                    output = _closure1_slot1;
                    sizing = _closure1_slot3;
                    sizing = sizing[result];
                    update = output.bind(report)(sizing);
                    output = update.dispatch;
                    sizing = {};
                    source = 'WELCOME_SCREEN_UPDATE';
                    sizing['type'] = source;
                    source = kilo;
                    control = source.body;
                    control = control.id;
                    sizing['guildId'] = control;
                    source = source.body;
                    source = source.welcome_screen;
                    sizing['welcomeScreen'] = source;
                    sizing = output.bind(update)(sizing);
 686:
                    sizing = kilo;
                    sizing = sizing.body;
                    sizing = sizing.approximate_presence_count;
                    if(!(yankee != sizing)) { _fun00002_ip = 773; continue _fun00001 }
 704:
                    output = _closure1_slot1;
                    sizing = _closure1_slot3;
                    sizing = sizing[result];
                    result = output.bind(report)(sizing);
                    output = result.dispatch;
                    sizing = {};
                    update = 'ONLINE_GUILD_MEMBER_COUNT_UPDATE';
                    sizing['type'] = update;
                    update = kilo;
                    source = update.body;
                    source = source.id;
                    sizing['guildId'] = source;
                    update = update.body;
                    update = update.approximate_presence_count;
                    sizing['count'] = update;
                    sizing = output.bind(result)(sizing);
 773:
                    sizing = offset;
                    if(sizing) { _fun00002_ip = 869; continue _fun00001 }
 779:
                    result = _closure1_slot0;
                    sizing = _closure1_slot3;
                    output = 17;
                    output = sizing[output];
                    result = result.bind(report)(output);
                    output = 16;
                    output = sizing[output];
                    sizing = sizing.paths;
                    sizing = result.bind(report)(output, sizing);
                    SaveGenerator(address=821);
 819:
                    return sizing;
 821:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=16);
                    if(output) { _fun00002_ip = 866; continue _fun00001 }
 827:
                    result = sizing.default;
                    output = {};
                    update = golf;
                    output['guildId'] = update;
                    output['returnChannelId'] = echo;
                    output = result.bind(report)(output);
                    SaveGenerator(address=857);
 855:
                    return output;
 857:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=17);
                    if(!result) { _fun00002_ip = 869; continue _fun00001 }
 863: // try_end0
                    return output;
 866:
                    return sizing;
 869: // try_start_1
                    sizing = kilo;
 872: // try_end1
                    return sizing;
 875: // try_start_2
                    output = _closure1_slot0;
                    result = _closure1_slot3;
                    sizing = 15;
                    sizing = result[sizing];
                    result = output.bind(report)(sizing);
                    output = result.transitionTo;
                    update = _closure1_slot19;
                    echo = update.GUILD_MEMBER_VERIFICATION;
                    sizing = golf;
                    sizing = echo.bind(update)(sizing);
                    sizing = output.bind(result)(sizing);
 924: // try_end2
                    return kilo;
 927:
                    return foxtrot;
 930: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=12);
                    oscar = foxtrot;
                    foxtrot = foxtrot.body;
                    romeo = foxtrot;
                    kilo = yankee == foxtrot;
                    foxtrot = undefined;
                    if(kilo) { _fun00002_ip = 957; continue _fun00001 }
 952:
                    foxtrot = romeo.code;
 957:
                    romeo = _closure1_slot14;
                    romeo = romeo.TOO_MANY_USER_GUILDS;
                    if(!(foxtrot === romeo)) { _fun00002_ip = 1074; continue _fun00001 }
 971:
                    foxtrot = _closure1_slot13;
                    romeo = foxtrot.getCurrentUser;
                    sizing = romeo.bind(foxtrot)();
                    backup = sizing;
                    kilo = _closure1_slot1;
                    output = _closure1_slot3;
                    foxtrot = 18;
                    foxtrot = output[foxtrot];
                    kilo = kilo.bind(report)(foxtrot);
                    foxtrot = kilo.canUseIncreasedGuildCap;
                    foxtrot = foxtrot.bind(kilo)(sizing);
                    romeo = foxtrot;
                    if(foxtrot) { _fun00002_ip = 1052; continue _fun00001 }
 1024:
                    foxtrot = backup;
                    kilo = yankee == foxtrot;
                    foxtrot = undefined;
                    if(kilo) { _fun00002_ip = 1049; continue _fun00001 }
 1036:
                    kilo = backup;
                    backup = kilo.isStaff;
                    foxtrot = backup.bind(kilo)();
 1049:
                    romeo = foxtrot;
 1052:
                    foxtrot = _closure1_slot21;
                    if(romeo) { _fun00002_ip = 1065; continue _fun00001 }
 1059:
                    romeo = _closure1_slot17;
                    _fun00002_ip = 1069; continue _fun00001;
 1065:
                    romeo = _closure1_slot18;
 1069:
                    romeo = foxtrot.bind(report)(romeo);
 1074:
                    romeo = oscar;
                    romeo = romeo.body;
                    options = romeo;
                    foxtrot = yankee == romeo;
                    romeo = undefined;
                    if(foxtrot) { _fun00002_ip = 1099; continue _fun00001 }
 1094:
                    romeo = options.code;
 1099:
                    options = _closure1_slot14;
                    options = options.GUILD_AT_CAPACITY;
                    if(!(romeo === options)) { _fun00002_ip = 1121; continue _fun00001 }
 1113:
                    options = _closure1_slot23;
                    options = options.bind(report)();
 1121:
                    options = offset;
                    if(!offset) { _fun00002_ip = 1166; continue _fun00001 }
 1127:
                    offset = oscar;
                    offset = offset.body;
                    verify = offset;
                    yankee = yankee == offset;
                    offset = undefined;
                    if(yankee) { _fun00002_ip = 1152; continue _fun00001 }
 1147:
                    offset = verify.code;
 1152:
                    verify = _closure1_slot14;
                    verify = verify.UNKNOWN_GUILD;
                    options = offset === verify;
 1166:
                    if(!options) { _fun00002_ip = 1178; continue _fun00001 }
 1169:
                    options = _closure1_slot22;
                    golf = options.bind(report)(golf);
 1178:
                    throw oscar;
 1180:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 13;
                    tango = golf[tango];
                    tango = oscar.bind(report)(tango);
                    tango = tango.bind(report)();
                    tango = global;
                    report = tango.Promise;
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    papa = function(argFoo, argBar) {
                        entity = global;
                        entity = entity.Error;
                        mike = entity.prototype;
                        mike = Object.create(mike, {constructor: {value: entity}});
                        report = mike;
                        entity = new report[entity](tango);
                        zulu = entity instanceof Object ? entity : mike;
                        mike = argBar;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
                        return entity;
                    };
                    target = tango;
                    zulu = new target[report](papa, context);
                    zulu = zulu instanceof Object ? zulu : tango;
                    return zulu;
 1240:
                    return mike;
 1243:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot24 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot24 = entity;
    mike = function(argFoo) { // Original name: waitForGuild
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = _closure1_slot10;
            mike = zulu.addConditionalChangeListener;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure1_slot10;
                    mike = zulu.getGuild;
                    entity = _closure2_slot0;
                    tango = mike.bind(zulu)(entity);
                    entity = null;
                    entity = entity == tango;
                    if(entity) { _fun00004_ip = 49; continue _fun00003 }
 33:
                    zulu = _closure3_slot0;
                    mike = undefined;
                    mike = zulu.bind(mike)(tango);
                    entity = false;
 49:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    var _closure1_slot25 = mike;
    entity = ['icon', 'unicodeEmoji'];
    var _closure1_slot4 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 1;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 2;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 3;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 4;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 5;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 6;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 7;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 8;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 9;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    options = tango.AbortCodes;
    var _closure1_slot14 = options;
    options = tango.Endpoints;
    var _closure1_slot15 = options;
    options = tango.UserFlags;
    var _closure1_slot16 = options;
    options = tango.MAX_USER_GUILDS;
    var _closure1_slot17 = options;
    options = tango.MAX_USER_GUILDS_PREMIUM;
    var _closure1_slot18 = options;
    options = tango.Routes;
    var _closure1_slot19 = options;
    tango = tango.AnalyticEvents;
    var _closure1_slot20 = tango;
    tango = function(argFoo) { // Original name: showTooManyUserGuildsAlert
        zulu = _closure1_slot1;
        verify = _closure1_slot3;
        entity = 10;
        mike = verify[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.show;
        mike = {};
        oscar = _closure1_slot0;
        report = 11;
        golf = verify[report];
        golf = oscar.bind(entity)(golf);
        offset = golf.intl;
        options = offset.string;
        golf = verify[report];
        golf = oscar.bind(entity)(golf);
        golf = golf.t;
        golf = golf.cTaRxM;
        golf = options.bind(offset)(golf);
        mike['title'] = golf;
        golf = verify[report];
        golf = oscar.bind(entity)(golf);
        options = golf.intl;
        golf = options.formatToPlainString;
        report = verify[report];
        report = oscar.bind(entity)(report);
        report = report.t;
        oscar = report.VSd+Ag;
        report = {};
        verify = argFoo;
        report['quantity'] = verify;
        report = golf.bind(options)(oscar, report);
        mike['body'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot21 = tango;
    options = function(argFoo) { // Original name: deleteGuild
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_DELETE';
        mike['type'] = report;
        report = {};
        oscar = argFoo;
        report['id'] = oscar;
        mike['guild'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot22 = options;
    tango = function() { // Original name: showGuildAtCapacityAlert
        zulu = _closure1_slot1;
        verify = _closure1_slot3;
        entity = 10;
        mike = verify[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.show;
        mike = {};
        options = _closure1_slot0;
        report = 11;
        oscar = verify[report];
        oscar = options.bind(entity)(oscar);
        offset = oscar.intl;
        golf = offset.string;
        oscar = verify[report];
        oscar = options.bind(entity)(oscar);
        oscar = oscar.t;
        oscar = oscar.ZZlox8;
        oscar = golf.bind(offset)(oscar);
        mike['title'] = oscar;
        oscar = verify[report];
        oscar = options.bind(entity)(oscar);
        golf = oscar.intl;
        oscar = golf.string;
        report = verify[report];
        report = options.bind(entity)(report);
        report = report.t;
        report = report.ZUEGFh;
        report = oscar.bind(golf)(report);
        mike['body'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot23 = tango;
    tango = {};
    verify = function() { // Original name: joinGuild
        entity = undefined;
        tango = _closure1_slot24;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    tango['joinGuild'] = verify;
    tango['waitForGuild'] = mike;
    verify = function(argFoo, argBar, argBaz) { // Original name: transitionToGuildSync
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot6;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 282; continue _fun00005 }
 10:
                    report = _closure1_slot25;
                    mike = _closure2_slot0;
                    tango = undefined;
                    mike = report.bind(tango)(mike);
                    SaveGenerator(address=35);
 33:
                    return mike;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 279; continue _fun00005 }
 44:
                    verify = mike.id;
                    offset = _closure2_slot2;
                    oscar = null;
                    if(!(oscar == offset)) { _fun00006_ip = 90; continue _fun00005 }
 59:
                    golf = _closure1_slot0;
                    yankee = _closure1_slot3;
                    report = 19;
                    report = yankee[report];
                    golf = golf.bind(tango)(report);
                    report = golf.getChannelIdForGuildTransition;
                    offset = report.bind(golf)(verify);
 90:
                    golf = _closure2_slot1;
                    report = oscar != golf;
                    if(!report) { _fun00006_ip = 120; continue _fun00005 }
 101:
                    romeo = _closure2_slot1;
                    yankee = romeo.hasOwnProperty;
                    verify = 'welcomeModalChannelId';
                    report = yankee.bind(romeo)(verify);
 120:
                    if(!report) { _fun00006_ip = 137; continue _fun00005 }
 123:
                    verify = _closure2_slot1;
                    verify = verify.welcomeModalChannelId;
                    report = oscar == verify;
 137:
                    if(!report) { _fun00006_ip = 177; continue _fun00005 }
 140:
                    report = {};
                    foxtrot = _closure2_slot1;
                    backup = report;
                    verify = copyDataProperties(backup, foxtrot);
                    oscar = oscar != offset;
                    verify = undefined;
                    if(!oscar) { _fun00006_ip = 165; continue _fun00005 }
 162:
                    verify = offset;
 165:
                    oscar = 'welcomeModalChannelId';
                    report[oscar] = verify;
                    golf = report;
 177:
                    oscar = _closure1_slot0;
                    verify = _closure1_slot3;
                    report = 15;
                    report = verify[report];
                    oscar = oscar.bind(tango)(report);
                    report = oscar.transitionTo;
                    verify = _closure1_slot19;
                    options = verify.CHANNEL;
                    zulu = _closure2_slot0;
                    zulu = options.bind(verify)(zulu, offset);
                    zulu = report.bind(oscar)(zulu, golf);
                    zulu = global;
                    oscar = zulu.Promise;
                    backup = zulu.setImmediate;
                    report = oscar.prototype;
                    report = Object.create(report, {constructor: {value: oscar}});
                    kilo = report;
                    zulu = new kilo[oscar](backup, foxtrot);
                    zulu = zulu instanceof Object ? zulu : report;
                    SaveGenerator(address=267);
 265:
                    return zulu;
 267:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 276; continue _fun00005 }
 273:
                    return tango;
 276:
                    return zulu;
 279:
                    return mike;
 282:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['transitionToGuildSync'] = verify;
    tango['deleteGuild'] = options;
    options = function(argFoo) { // Original name: selectGuild
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 20;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.stopLurking;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['selectGuild'] = options;
    options = function(argFoo) { // Original name: createGuild
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_CREATE';
        mike['type'] = report;
        report = argFoo;
        mike['guild'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['createGuild'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: setServerMute
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.patch;
        entity = {};
        golf = _closure1_slot15;
        oscar = golf.GUILD_MEMBER;
        report = argFoo;
        tango = argBar;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        tango = {};
        report = argBaz;
        tango['mute'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['setServerMute'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: setServerDeaf
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.patch;
        entity = {};
        golf = _closure1_slot15;
        oscar = golf.GUILD_MEMBER;
        report = argFoo;
        tango = argBar;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        tango = {};
        report = argBaz;
        tango['deaf'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['setServerDeaf'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: setChannel
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.HTTP;
        zulu = tango.patch;
        mike = {};
        options = _closure1_slot15;
        golf = options.GUILD_MEMBER;
        oscar = argFoo;
        report = argBar;
        report = golf.bind(options)(oscar, report);
        mike['url'] = report;
        report = {};
        oscar = argBaz;
        report['channel_id'] = oscar;
        mike['body'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        mike['rejectWithError'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['setChannel'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: setMemberFlags
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.HTTP;
        zulu = tango.patch;
        mike = {};
        options = _closure1_slot15;
        golf = options.GUILD_MEMBER;
        oscar = argFoo;
        report = argBar;
        report = golf.bind(options)(oscar, report);
        mike['url'] = report;
        report = {};
        oscar = argBaz;
        report['flags'] = oscar;
        mike['body'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        mike['rejectWithError'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['setMemberFlags'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: kickUser
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {};
        golf = _closure1_slot15;
        oscar = golf.GUILD_MEMBER;
        report = argFoo;
        tango = argBar;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        tango = argBaz;
        entity['reason'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['kickUser'] = options;
    options = function(argFoo) { // Original name: setCommunicationDisabledUntil
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            verify = entity.guildId;
            oscar = entity.userId;
            options = entity.communicationDisabledUntilTimestamp;
            yankee = entity.duration;
            offset = entity.reason;
            golf = entity.location;
            mike = _closure1_slot1;
            backup = _closure1_slot3;
            entity = 21;
            entity = backup[entity];
            foxtrot = undefined;
            zulu = mike.bind(foxtrot)(entity);
            mike = zulu.patch;
            entity = {};
            romeo = _closure1_slot15;
            tango = romeo.GUILD_MEMBER;
            tango = tango.bind(romeo)(verify, oscar);
            entity['url'] = tango;
            entity['reason'] = offset;
            tango = {};
            tango['communication_disabled_until'] = options;
            entity['body'] = tango;
            tango = true;
            entity['oldFormErrors'] = tango;
            tango = {};
            romeo = _closure1_slot0;
            report = 22;
            report = backup[report];
            report = romeo.bind(foxtrot)(report);
            report = report.NetworkActionNames;
            report = report.USER_COMMUNICATION_DISABLED_UPDATE;
            tango['event'] = report;
            report = {};
            report['guild_id'] = verify;
            report['target_user_id'] = oscar;
            oscar = null;
            romeo = oscar != yankee;
            verify = null;
            if(!romeo) { _fun00008_ip = 171; continue _fun00007 }
 168:
            verify = yankee;
 171:
            report['duration'] = verify;
            yankee = oscar != offset;
            verify = null;
            if(!yankee) { _fun00008_ip = 187; continue _fun00007 }
 184:
            verify = offset;
 187:
            report['reason'] = verify;
            report['communication_disabled_until'] = options;
            options = oscar != golf;
            oscar = null;
            if(!options) { _fun00008_ip = 209; continue _fun00007 }
 206:
            oscar = golf;
 209:
            report['location'] = oscar;
            tango['properties'] = report;
            entity['trackedActionData'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango['setCommunicationDisabledUntil'] = options;
    options = function(argFoo, argBar, argBaz, argCorge) { // Original name: banUser
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.put;
        entity = {};
        golf = _closure1_slot15;
        oscar = golf.GUILD_BAN;
        report = argFoo;
        tango = argBar;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        tango = argCorge;
        entity['reason'] = tango;
        tango = {};
        report = argBaz;
        tango['delete_message_seconds'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['banUser'] = options;
    options = function(argFoo, argBar) { // Original name: unbanUser
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golf = _closure1_slot15;
        oscar = golf.GUILD_BAN;
        report = argFoo;
        tango = argBar;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['unbanUser'] = options;
    options = function(argFoo, argBar, argBaz, argCorge) { // Original name: banMultipleUsers
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        oscar = _closure1_slot15;
        report = oscar.BULK_GUILD_BAN;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = {};
        report = argBar;
        tango['user_ids'] = report;
        report = argBaz;
        tango['delete_message_seconds'] = report;
        entity['body'] = tango;
        tango = argCorge;
        entity['reason'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['banMultipleUsers'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: createRole
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot6;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 442; continue _fun00009 }
 10:
                    report = undefined;
                    options = undefined;
                    zulu = {};
                    mike = _closure2_slot1;
                    tango = null;
                    if(!(tango != mike)) { _fun00010_ip = 41; continue _fun00009 }
 29:
                    golf = _closure2_slot1;
                    mike = '';
                    if(!(mike === golf)) { _fun00010_ip = 101; continue _fun00009 }
 41:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot3;
                    mike = 11;
                    golf = yankee[mike];
                    golf = offset.bind(report)(golf);
                    verify = golf.intl;
                    golf = verify.string;
                    mike = yankee[mike];
                    mike = offset.bind(report)(mike);
                    mike = mike.t;
                    mike = mike.QBMHvL;
                    mike = golf.bind(verify)(mike);
                    _fun00010_ip = 105; continue _fun00009;
 101:
                    mike = _closure2_slot1;
 105:
                    zulu['name'] = mike;
                    mike = _closure2_slot2;
                    tango = tango != mike;
                    mike = 0;
                    if(!tango) { _fun00010_ip = 126; continue _fun00009 }
 122:
                    mike = _closure2_slot2;
 126:
                    zulu['color'] = mike;
                    golf = _closure1_slot2;
                    verify = _closure1_slot3;
                    tango = 23;
                    tango = verify[tango];
                    tango = golf.bind(report)(tango);
                    tango = tango.NONE;
                    zulu['permissions'] = tango;
                    options = zulu;
 167: // try_start_0
                    tango = _closure1_slot0;
                    golf = _closure1_slot3;
                    zulu = 14;
                    zulu = golf[zulu];
                    zulu = tango.bind(report)(zulu);
                    golf = zulu.HTTP;
                    tango = golf.post;
                    zulu = {};
                    yankee = _closure1_slot15;
                    offset = yankee.GUILD_ROLES;
                    verify = _closure2_slot0;
                    verify = offset.bind(yankee)(verify);
                    zulu['url'] = verify;
                    verify = true;
                    zulu['oldFormErrors'] = verify;
                    zulu['body'] = options;
                    options = false;
                    zulu['rejectWithError'] = options;
                    zulu = tango.bind(golf)(zulu);
                    SaveGenerator(address=249);
 247:
                    return zulu;
 249:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00010_ip = 392; continue _fun00009 }
 258:
                    tango = zulu.body;
                    options = _closure1_slot2;
                    verify = _closure1_slot3;
                    golf = 24;
                    golf = verify[golf];
                    offset = options.bind(report)(golf);
                    options = offset.deserialize;
                    golf = tango.permissions;
                    golf = options.bind(offset)(golf);
                    tango['permissions'] = golf;
                    options = _closure1_slot1;
                    golf = 12;
                    golf = verify[golf];
                    yankee = options.bind(report)(golf);
                    offset = yankee.dispatch;
                    golf = {};
                    romeo = 'GUILD_SETTINGS_ROLE_SELECT';
                    golf['type'] = romeo;
                    romeo = zulu.body;
                    romeo = romeo.id;
                    golf['roleId'] = romeo;
                    golf['role'] = tango;
                    golf = offset.bind(yankee)(golf);
                    golf = 25;
                    golf = verify[golf];
                    options = options.bind(report)(golf);
                    golf = options.checkGuildTemplateDirty;
                    oscar = _closure2_slot0;
                    oscar = golf.bind(options)(oscar);
 389: // try_end0
                    return tango;
 392:
                    return zulu;
 395: // catch_target0
                    CatchBlockStart(arg_register=3);
                    zulu = _closure1_slot1;
                    oscar = _closure1_slot3;
                    mike = 26;
                    mike = oscar[mike];
                    mike = zulu.bind(report)(mike);
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    backup = zulu;
                    foxtrot = tango;
                    mike = new backup[mike](foxtrot, romeo);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 442:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['createRole'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: updateRole
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot6;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00012_ip = 251; continue _fun00011 }
 10:
                    options = _closure2_slot2;
                    mike = options.icon;
                    offset = options.unicodeEmoji;
                    golf = _closure1_slot5;
                    report = _closure1_slot4;
                    oscar = undefined;
                    verify = golf.bind(oscar)(options, report);
                    report = null;
                    if(!(report !== mike)) { _fun00012_ip = 84; continue _fun00011 }
 53:
                    report = report != mike;
                    yankee = undefined;
                    if(!report) { _fun00012_ip = 87; continue _fun00011 }
 62:
                    golf = mike.startsWith;
                    report = 'data:';
                    report = golf.bind(mike)(report);
                    yankee = undefined;
                    if(!report) { _fun00012_ip = 87; continue _fun00011 }
 84:
                    yankee = mike;
 87:
                    report = _closure1_slot0;
                    golf = _closure1_slot3;
                    mike = 14;
                    mike = golf[mike];
                    mike = report.bind(oscar)(mike);
                    golf = mike.HTTP;
                    report = golf.patch;
                    mike = {};
                    backup = _closure1_slot15;
                    foxtrot = backup.GUILD_ROLE;
                    romeo = _closure2_slot0;
                    options = _closure2_slot1;
                    options = foxtrot.bind(backup)(romeo, options);
                    mike['url'] = options;
                    options = {};
                    sizing = options;
                    kilo = verify;
                    verify = copyDataProperties(sizing, kilo);
                    verify = 'icon';
                    options[verify] = yankee;
                    verify = 'unicode_emoji';
                    options[verify] = offset;
                    mike['body'] = options;
                    options = true;
                    mike['oldFormErrors'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = report.bind(golf)(mike);
                    SaveGenerator(address=204);
 202:
                    return mike;
 204:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00012_ip = 248; continue _fun00011 }
 210:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 25;
                    tango = golf[tango];
                    report = report.bind(oscar)(tango);
                    tango = report.checkGuildTemplateDirty;
                    zulu = _closure2_slot0;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 248:
                    return mike;
 251:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['updateRole'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: updateRolePermissions
        zulu = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.patch;
        entity = {};
        golf = _closure1_slot15;
        oscar = golf.GUILD_ROLE;
        report = argFoo;
        tango = argBar;
        tango = oscar.bind(golf)(report, tango);
        entity['url'] = tango;
        tango = {};
        report = argBaz;
        tango['permissions'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['updateRolePermissions'] = options;
    options = function(argFoo, argBar) { // Original name: deleteRole
        verify = argFoo;
        var _closure2_slot0 = verify;
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        entity = 14;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.del;
        zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        options = _closure1_slot15;
        golf = options.GUILD_ROLE;
        oscar = argBar;
        oscar = golf.bind(options)(verify, oscar);
        zulu['url'] = oscar;
        tango = tango.bind(report)(zulu);
        zulu = tango.then;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 25;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.checkGuildTemplateDirty;
            mike = _closure2_slot0;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['deleteRole'] = options;
    options = function(argFoo, argBar) { // Original name: batchChannelUpdate
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot6;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00014_ip = 151; continue _fun00013 }
 10:
                    zulu = _closure1_slot0;
                    report = _closure1_slot3;
                    mike = 14;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    golf = mike.HTTP;
                    report = golf.patch;
                    mike = {};
                    offset = _closure1_slot15;
                    verify = offset.GUILD_CHANNELS;
                    options = _closure2_slot0;
                    options = verify.bind(offset)(options);
                    mike['url'] = options;
                    options = _closure2_slot1;
                    mike['body'] = options;
                    options = true;
                    mike['oldFormErrors'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = report.bind(golf)(mike);
                    SaveGenerator(address=104);
 102:
                    return mike;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 148; continue _fun00013 }
 110:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 25;
                    tango = golf[tango];
                    report = report.bind(oscar)(tango);
                    tango = report.checkGuildTemplateDirty;
                    zulu = _closure2_slot0;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 148:
                    return mike;
 151:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['batchChannelUpdate'] = options;
    options = function(argFoo, argBar) { // Original name: batchRoleUpdate
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot6;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00016_ip = 151; continue _fun00015 }
 10:
                    zulu = _closure1_slot0;
                    report = _closure1_slot3;
                    mike = 14;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    golf = mike.HTTP;
                    report = golf.patch;
                    mike = {};
                    offset = _closure1_slot15;
                    verify = offset.GUILD_ROLES;
                    options = _closure2_slot0;
                    options = verify.bind(offset)(options);
                    mike['url'] = options;
                    options = _closure2_slot1;
                    mike['body'] = options;
                    options = true;
                    mike['oldFormErrors'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = report.bind(golf)(mike);
                    SaveGenerator(address=104);
 102:
                    return mike;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00016_ip = 148; continue _fun00015 }
 110:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 25;
                    tango = golf[tango];
                    report = report.bind(oscar)(tango);
                    tango = report.checkGuildTemplateDirty;
                    zulu = _closure2_slot0;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 148:
                    return mike;
 151:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['batchRoleUpdate'] = options;
    options = function(argFoo) { // Original name: requestMembers
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            verify = argFoo;
            oscar = arguments[1];
            report = arguments[2];
            tango = arguments[3];
            zulu = undefined;
            if(!(oscar === zulu)) { _fun00018_ip = 22; continue _fun00017 }
 18:
            oscar = '';
 22:
            if(!(report === zulu)) { _fun00018_ip = 29; continue _fun00017 }
 26:
            report = 10;
 29:
            if(!(tango === zulu)) { _fun00018_ip = 35; continue _fun00017 }
 33:
            tango = true;
 35:
            mike = _closure1_slot1;
            golf = _closure1_slot3;
            entity = 12;
            entity = golf[entity];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.dispatch;
            entity = {};
            golf = 'GUILD_MEMBERS_REQUEST';
            entity['type'] = golf;
            golf = global;
            options = golf.Array;
            golf = options.isArray;
            options = golf.bind(options)(verify);
            golf = verify;
            if(options) { _fun00018_ip = 110; continue _fun00017 }
 99:
            options = new Array(1);
            options[0] = verify;
            golf = options;
 110:
            entity['guildIds'] = golf;
            entity['query'] = oscar;
            entity['limit'] = report;
            entity['presences'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango['requestMembers'] = options;
    options = function(argFoo, argBar) { // Original name: searchRecentMembers
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argBar;
            mike = null;
            if(!(mike == entity)) { _fun00020_ip = 11; continue _fun00019 }
 9:
            entity = {};
 11:
            report = entity.query;
            tango = entity.continuationToken;
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            oscar = 'GUILD_SEARCH_RECENT_MEMBERS';
            entity['type'] = oscar;
            oscar = argFoo;
            entity['guildId'] = oscar;
            entity['query'] = report;
            entity['continuationToken'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango['searchRecentMembers'] = options;
    options = function(argFoo, argBar) { // Original name: requestMembersById
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            verify = argFoo;
            golf = argBar;
            tango = arguments[2];
            zulu = undefined;
            if(!(tango === zulu)) { _fun00022_ip = 17; continue _fun00021 }
 15:
            tango = true;
 17:
            mike = _closure1_slot1;
            report = _closure1_slot3;
            entity = 12;
            entity = report[entity];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.dispatch;
            entity = {};
            report = 'GUILD_MEMBERS_REQUEST';
            entity['type'] = report;
            report = global;
            options = report.Array;
            oscar = options.isArray;
            options = oscar.bind(options)(verify);
            oscar = verify;
            if(options) { _fun00022_ip = 92; continue _fun00021 }
 81:
            options = new Array(1);
            options[0] = verify;
            oscar = options;
 92:
            entity['guildIds'] = oscar;
            oscar = report.Array;
            report = oscar.isArray;
            oscar = report.bind(oscar)(golf);
            report = golf;
            if(oscar) { _fun00022_ip = 130; continue _fun00021 }
 119:
            oscar = new Array(1);
            oscar[0] = golf;
            report = oscar;
 130:
            entity['userIds'] = report;
            entity['presences'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    tango['requestMembersById'] = options;
    options = function(argFoo, argBar, argBaz, argCorge) { // Original name: move
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_MOVE';
        mike['type'] = report;
        report = argFoo;
        mike['fromIndex'] = report;
        report = argBar;
        mike['toIndex'] = report;
        report = argBaz;
        mike['fromFolderIndex'] = report;
        report = argCorge;
        mike['toFolderIndex'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['move'] = options;
    options = function(argFoo, argBar) { // Original name: moveById
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tango = argFoo;
            options = argBar;
            golf = arguments[2];
            oscar = arguments[3];
            entity = undefined;
            if(!(golf === entity)) { _fun00024_ip = 20; continue _fun00023 }
 18:
            golf = false;
 20:
            if(!(oscar === entity)) { _fun00024_ip = 26; continue _fun00023 }
 24:
            oscar = false;
 26:
            if(!(tango !== options)) { _fun00024_ip = 97; continue _fun00023 }
 30:
            zulu = _closure1_slot1;
            report = _closure1_slot3;
            mike = 12;
            mike = report[mike];
            report = zulu.bind(entity)(mike);
            zulu = report.dispatch;
            mike = {};
            verify = 'GUILD_MOVE_BY_ID';
            mike['type'] = verify;
            mike['sourceId'] = tango;
            mike['targetId'] = options;
            mike['moveToBelow'] = golf;
            mike['combine'] = oscar;
            mike = zulu.bind(report)(mike);
            return entity;
 97:
            entity = global;
            zulu = entity.Error;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: ';
            offset = mike.bind(entity)(tango);
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            yankee = mike;
            entity = new yankee[zulu](offset, verify);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    tango['moveById'] = options;
    options = function(argFoo, argBar) { // Original name: createGuildFolderLocal
        zulu = _closure1_slot1;
        tango = _closure1_slot3;
        entity = 27;
        report = tango[entity];
        entity = undefined;
        oscar = zulu.bind(entity)(report);
        report = oscar.track;
        mike = _closure1_slot20;
        mike = mike.GUILD_FOLDER_CREATED;
        mike = report.bind(oscar)(mike);
        mike = 12;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_FOLDER_CREATE_LOCAL';
        mike['type'] = report;
        report = argFoo;
        mike['sourceIds'] = report;
        report = argBar;
        mike['name'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['createGuildFolderLocal'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: editGuildFolderLocal
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_FOLDER_EDIT_LOCAL';
        mike['type'] = report;
        report = argFoo;
        mike['targetId'] = report;
        report = argBar;
        mike['sourceIds'] = report;
        report = argBaz;
        mike['name'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['editGuildFolderLocal'] = options;
    options = function(argFoo) { // Original name: deleteGuildFolderLocal
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_FOLDER_DELETE_LOCAL';
        mike['type'] = report;
        report = argFoo;
        mike['targetId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['deleteGuildFolderLocal'] = options;
    options = function(argFoo) { // Original name: toggleGuildFolderExpand
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot8;
            entity = zulu.isFolderExpanded;
            verify = entity.bind(zulu)(report);
            tango = _closure1_slot1;
            zulu = _closure1_slot3;
            entity = 27;
            zulu = zulu[entity];
            entity = undefined;
            golf = tango.bind(entity)(zulu);
            oscar = golf.track;
            zulu = _closure1_slot20;
            tango = zulu.GUILD_FOLDER_CLICKED;
            zulu = {};
            options = 'sidebar';
            zulu['source'] = options;
            options = 'expanded';
            if(!verify) { _fun00026_ip = 81; continue _fun00025 }
 77:
            options = 'collapsed';
 81:
            zulu['action'] = options;
            zulu = oscar.bind(golf)(tango, zulu);
            zulu = _closure1_slot1;
            tango = _closure1_slot3;
            mike = 12;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'TOGGLE_GUILD_FOLDER_EXPAND';
            mike['type'] = oscar;
            mike['folderId'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    tango['toggleGuildFolderExpand'] = options;
    options = function(argFoo, argBar) { // Original name: setGuildFolderExpanded
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SET_GUILD_FOLDER_EXPANDED';
        mike['type'] = report;
        report = argFoo;
        mike['folderId'] = report;
        report = argBar;
        mike['expanded'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['setGuildFolderExpanded'] = options;
    options = function() { // Original name: collapseAllFolders
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_FOLDER_COLLAPSE';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['collapseAllFolders'] = options;
    options = function(argFoo) { // Original name: nsfwAgree
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_NSFW_AGREE';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['nsfwAgree'] = options;
    options = function(argFoo) { // Original name: nsfwReturnToSafety
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            golf = argFoo;
            zulu = null;
            if(!(zulu == golf)) { _fun00028_ip = 60; continue _fun00027 }
 9:
            report = _closure1_slot0;
            tango = _closure1_slot3;
            mike = 15;
            tango = tango[mike];
            mike = undefined;
            tango = report.bind(mike)(tango);
            mike = tango.transitionTo;
            entity = _closure1_slot19;
            entity = entity.FRIENDS;
            entity = mike.bind(tango)(entity);
            _fun00028_ip = 194; continue _fun00027;
 60:
            tango = _closure1_slot9;
            mike = tango.getDefaultChannel;
            mike = mike.bind(tango)(golf);
            if(!(zulu != mike)) { _fun00028_ip = 151; continue _fun00027 }
 82:
            zulu = mike.isNSFW;
            zulu = zulu.bind(mike)();
            if(zulu) { _fun00028_ip = 151; continue _fun00027 }
 95:
            report = _closure1_slot0;
            tango = _closure1_slot3;
            zulu = 15;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.transitionTo;
            oscar = _closure1_slot19;
            report = oscar.CHANNEL;
            mike = mike.id;
            mike = report.bind(oscar)(golf, mike);
            mike = zulu.bind(tango)(mike);
            _fun00028_ip = 194; continue _fun00027;
 151:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 15;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.transitionTo;
            entity = _closure1_slot19;
            entity = entity.FRIENDS;
            entity = mike.bind(zulu)(entity);
 194:
            entity = undefined;
            return entity;
        }
    };
    tango['nsfwReturnToSafety'] = options;
    options = function(argFoo) { // Original name: escapeToDefaultChannel
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            oscar = argFoo;
            mike = _closure1_slot9;
            entity = mike.getDefaultChannel;
            entity = entity.bind(mike)(oscar);
            mike = null;
            if(!(mike == entity)) { _fun00030_ip = 72; continue _fun00029 }
 27:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 15;
            zulu = zulu[mike];
            mike = undefined;
            report = report.bind(mike)(zulu);
            zulu = report.transitionTo;
            mike = _closure1_slot19;
            mike = mike.FRIENDS;
            mike = zulu.bind(report)(mike);
            _fun00030_ip = 126; continue _fun00029;
 72:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 15;
            zulu = zulu[mike];
            mike = undefined;
            zulu = report.bind(mike)(zulu);
            mike = zulu.transitionTo;
            report = _closure1_slot19;
            tango = report.CHANNEL;
            entity = entity.id;
            entity = tango.bind(report)(oscar, entity);
            entity = mike.bind(zulu)(entity);
 126:
            entity = undefined;
            return entity;
        }
    };
    tango['escapeToDefaultChannel'] = options;
    options = function(argFoo, argBar) { // Original name: fetchApplications
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot6;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00032_ip = 188; continue _fun00031 }
 10:
                    oscar = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    report = _closure1_slot15;
                    zulu = report.GUILD_APPLICATIONS;
                    mike = _closure2_slot0;
                    mike = zulu.bind(report)(mike);
                    oscar['url'] = mike;
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun00032_ip = 77; continue _fun00031 }
 61:
                    mike = {};
                    zulu = _closure2_slot1;
                    mike['channel_id'] = zulu;
                    oscar['query'] = mike;
 77:
                    report = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 14;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    report = mike.HTTP;
                    mike = report.get;
                    mike = mike.bind(report)(oscar);
                    SaveGenerator(address=118);
 116:
                    return mike;
 118:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00032_ip = 185; continue _fun00031 }
 124:
                    golf = mike.body;
                    report = _closure1_slot1;
                    oscar = _closure1_slot3;
                    tango = 12;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    verify = 'GUILD_APPLICATIONS_FETCH_SUCCESS';
                    tango['type'] = verify;
                    options = _closure2_slot0;
                    tango['guildId'] = options;
                    tango['applications'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 185:
                    return mike;
 188:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['fetchApplications'] = options;
    options = function(argFoo) { // Original name: fetchGuildBansBatch
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            tango = arguments[1];
            zulu = arguments[2];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(tango === mike)) { _fun00034_ip = 27; continue _fun00033 }
 21:
            tango = 1000;
 27:
            var _closure2_slot1 = tango;
            if(!(zulu === mike)) { _fun00034_ip = 37; continue _fun00033 }
 35:
            zulu = null;
 37:
            var _closure2_slot2 = zulu;
            zulu = _closure1_slot6;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00036_ip = 159; continue _fun00035 }
 10:
                        oscar = {};
                        mike = _closure2_slot1;
                        oscar['limit'] = mike;
                        zulu = _closure2_slot2;
                        mike = null;
                        if(!(mike != zulu)) { _fun00036_ip = 44; continue _fun00035 }
 34:
                        mike = _closure2_slot2;
                        oscar['after'] = mike;
 44:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot3;
                        mike = 14;
                        mike = zulu[mike];
                        zulu = undefined;
                        mike = tango.bind(zulu)(mike);
                        report = mike.HTTP;
                        tango = report.get;
                        mike = {};
                        verify = _closure1_slot15;
                        options = verify.GUILD_BANS;
                        golf = _closure2_slot0;
                        golf = options.bind(verify)(golf);
                        mike['url'] = golf;
                        golf = true;
                        mike['oldFormErrors'] = golf;
                        mike['query'] = oscar;
                        oscar = false;
                        mike['rejectWithError'] = oscar;
                        report = tango.bind(report)(mike);
                        tango = report.then;
                        mike = function(argFoo) {
                            zulu = _closure1_slot1;
                            mike = _closure1_slot3;
                            entity = 12;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            report = 'GUILD_SETTINGS_LOADED_BANS_BATCH';
                            mike['type'] = report;
                            report = argFoo;
                            report = report.body;
                            mike['bans'] = report;
                            report = _closure2_slot0;
                            mike['guildId'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        };
                        mike = tango.bind(report)(mike);
                        SaveGenerator(address=147);
 145:
                        return mike;
 147:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun00036_ip = 156; continue _fun00035 }
 153:
                        return zulu;
 156:
                        return mike;
 159:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    tango['fetchGuildBansBatch'] = options;
    options = function(argFoo, argBar, argBaz) { // Original name: searchGuildBans
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            zulu = arguments[3];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            mike = argBaz;
            var _closure2_slot2 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun00038_ip = 35; continue _fun00037 }
 32:
            zulu = 10;
 35:
            var _closure2_slot3 = zulu;
            zulu = _closure1_slot6;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00040_ip = 229; continue _fun00039 }
 10:
                        oscar = {};
                        mike = _closure2_slot3;
                        oscar['limit'] = mike;
                        mike = _closure2_slot2;
                        zulu = null;
                        mike = zulu != mike;
                        if(!mike) { _fun00040_ip = 52; continue _fun00039 }
 37:
                        tango = _closure2_slot2;
                        report = tango.length;
                        tango = 0;
                        mike = report > tango;
 52:
                        if(!mike) { _fun00040_ip = 65; continue _fun00039 }
 55:
                        mike = _closure2_slot2;
                        oscar['user_ids'] = mike;
 65:
                        mike = _closure2_slot1;
                        mike = zulu != mike;
                        if(!mike) { _fun00040_ip = 101; continue _fun00039 }
 76:
                        tango = _closure2_slot1;
                        zulu = tango.trim;
                        zulu = zulu.bind(tango)();
                        tango = zulu.length;
                        zulu = 0;
                        mike = tango > zulu;
 101:
                        if(!mike) { _fun00040_ip = 114; continue _fun00039 }
 104:
                        mike = _closure2_slot1;
                        oscar['query'] = mike;
 114:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot3;
                        mike = 14;
                        mike = zulu[mike];
                        zulu = undefined;
                        mike = tango.bind(zulu)(mike);
                        report = mike.HTTP;
                        tango = report.get;
                        mike = {};
                        verify = _closure1_slot15;
                        options = verify.GUILD_BANS_SEARCH;
                        golf = _closure2_slot0;
                        golf = options.bind(verify)(golf);
                        mike['url'] = golf;
                        golf = true;
                        mike['oldFormErrors'] = golf;
                        mike['query'] = oscar;
                        oscar = false;
                        mike['rejectWithError'] = oscar;
                        report = tango.bind(report)(mike);
                        tango = report.then;
                        mike = function(argFoo) {
                            zulu = _closure1_slot1;
                            mike = _closure1_slot3;
                            entity = 12;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            report = 'GUILD_SETTINGS_LOADED_BANS_BATCH';
                            mike['type'] = report;
                            report = argFoo;
                            report = report.body;
                            mike['bans'] = report;
                            report = _closure2_slot0;
                            mike['guildId'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        };
                        mike = tango.bind(report)(mike);
                        SaveGenerator(address=217);
 215:
                        return mike;
 217:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun00040_ip = 226; continue _fun00039 }
 223:
                        return zulu;
 226:
                        return mike;
 229:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    tango['searchGuildBans'] = options;
    options = function(argFoo) { // Original name: fetchGuildBans
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot6;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00042_ip = 118; continue _fun00041 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 14;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.get;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    options = _closure1_slot15;
                    golf = options.GUILD_BANS;
                    oscar = _closure2_slot0;
                    oscar = golf.bind(options)(oscar);
                    mike['url'] = oscar;
                    report = tango.bind(report)(mike);
                    tango = report.then;
                    mike = function(argFoo) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot3;
                        entity = 12;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'GUILD_SETTINGS_LOADED_BANS';
                        mike['type'] = report;
                        report = argFoo;
                        report = report.body;
                        mike['bans'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=106);
 104:
                    return mike;
 106:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00042_ip = 115; continue _fun00041 }
 112:
                    return zulu;
 115:
                    return mike;
 118:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['fetchGuildBans'] = options;
    options = function(argFoo, argBar) { // Original name: fetchGuildRoleConnectionsEligibility
        options = argBar;
        var _closure2_slot0 = options;
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        mike = 14;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.get;
        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golf = _closure1_slot15;
        oscar = golf.GUILD_ROLE_CONNECTIONS_ELIGIBILITY;
        report = argFoo;
        report = oscar.bind(golf)(report, options);
        mike['url'] = report;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.then;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.body;
            tango = _closure1_slot1;
            zulu = _closure1_slot3;
            mike = 12;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.dispatch;
            mike = {};
            report = 'GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS';
            mike['type'] = report;
            report = _closure2_slot0;
            mike['roleId'] = report;
            mike['roleConnectionEligibility'] = entity;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['fetchGuildRoleConnectionsEligibility'] = options;
    options = function(argFoo, argBar) { // Original name: assignGuildRoleConnection
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot6;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00044_ip = 107; continue _fun00043 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 14;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.post;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    verify = _closure1_slot15;
                    options = verify.GUILD_ROLE_CONNECTIONS_ASSIGN;
                    golf = _closure2_slot0;
                    oscar = _closure2_slot1;
                    oscar = options.bind(verify)(golf, oscar);
                    mike['url'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=95);
 93:
                    return mike;
 95:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00044_ip = 104; continue _fun00043 }
 101:
                    return zulu;
 104:
                    return mike;
 107:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['assignGuildRoleConnection'] = options;
    options = function(argFoo, argBar) { // Original name: unassignGuildRoleConnection
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot6;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00046_ip = 107; continue _fun00045 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 14;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.post;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    verify = _closure1_slot15;
                    options = verify.GUILD_ROLE_CONNECTIONS_UNASSIGN;
                    golf = _closure2_slot0;
                    oscar = _closure2_slot1;
                    oscar = options.bind(verify)(golf, oscar);
                    mike['url'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=95);
 93:
                    return mike;
 95:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00046_ip = 104; continue _fun00045 }
 101:
                    return zulu;
 104:
                    return mike;
 107:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['unassignGuildRoleConnection'] = options;
    report = function(argFoo) { // Original name: getGuildRoleConnectionsConfigurations
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot6;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00048_ip = 106; continue _fun00047 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 14;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.get;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    golf = _closure1_slot15;
                    oscar = golf.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS;
                    report = _closure2_slot0;
                    report = oscar.bind(golf)(report);
                    mike['url'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=89);
 87:
                    return mike;
 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00048_ip = 103; continue _fun00047 }
 95:
                    zulu = mike.body;
                    return zulu;
 103:
                    return mike;
 106:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['getGuildRoleConnectionsConfigurations'] = report;
    report = 28;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/GuildActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['waitForGuild'] = mike;
    return entity;
})();