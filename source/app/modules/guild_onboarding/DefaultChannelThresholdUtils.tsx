// app/modules/guild_onboarding/DefaultChannelThresholdUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function() { // Original name: _isDefaultChannelThresholdMetAfterDelete
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 67; continue _fun00001 }
 10:
                    mike = null;
                    mike = mike == golf;
                    if(mike) { _fun00002_ip = 64; continue _fun00001 }
 19:
                    oscar = _closure1_slot13;
                    report = undefined;
                    tango = argBar;
                    zulu = {'removingView': true, 'removingChat': true};
                    zulu = oscar.bind(report)(golf, tango, zulu);
                    SaveGenerator(address=52);
 50:
                    return zulu;
 52:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    mike = zulu;
                    if(!tango) { _fun00002_ip = 64; continue _fun00001 }
 61:
                    return zulu;
 64:
                    return mike;
 67:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: isDefaultChannelThresholdMetAfterChannelChange
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isDefaultChannelThresholdMetAfterChannelChange
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    options = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 339; continue _fun00003 }
 16:
                    zulu = _closure1_slot6;
                    mike = zulu.getGuild;
                    tango = mike.bind(zulu)(oscar);
                    zulu = null;
                    if(!(zulu != tango)) { _fun00004_ip = 334; continue _fun00003 }
 42:
                    mike = zulu != tango;
                    if(!mike) { _fun00004_ip = 87; continue _fun00003 }
 49:
                    verify = tango.features;
                    tango = zulu == verify;
                    zulu = undefined;
                    if(tango) { _fun00004_ip = 84; continue _fun00003 }
 64:
                    golf = verify.has;
                    tango = _closure1_slot10;
                    tango = tango.GUILD_ONBOARDING;
                    zulu = golf.bind(verify)(tango);
 84:
                    mike = zulu;
 87:
                    if(mike) { _fun00004_ip = 95; continue _fun00003 }
 90:
                    zulu = true;
                    return zulu;
 95:
                    if(!mike) { _fun00004_ip = 113; continue _fun00003 }
 98:
                    tango = _closure1_slot7;
                    zulu = tango.shouldFetchPrompts;
                    mike = zulu.bind(tango)(oscar);
 113:
                    if(!mike) { _fun00004_ip = 162; continue _fun00003 }
 116:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 6;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.fetchOnboardingPrompts;
                    mike = mike.bind(zulu)(oscar);
                    SaveGenerator(address=153);
 151:
                    return mike;
 153:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 331; continue _fun00003 }
 162:
                    tango = _closure1_slot7;
                    zulu = tango.getDefaultChannelIds;
                    offset = zulu.bind(tango)(oscar);
                    tango = _closure1_slot0;
                    golf = _closure1_slot3;
                    zulu = 7;
                    zulu = golf[zulu];
                    golf = undefined;
                    tango = tango.bind(golf)(zulu);
                    zulu = tango.getChattableDefaultChannels;
                    oscar = zulu.bind(tango)(oscar, offset);
                    tango = _closure1_slot4;
                    zulu = 2;
                    zulu = tango.bind(golf)(oscar, zulu);
                    tango = 0;
                    oscar = zulu[tango];
                    golf = 1;
                    tango = zulu[golf];
                    verify = offset.includes;
                    zulu = argBar;
                    zulu = verify.bind(offset)(zulu);
                    if(zulu) { _fun00004_ip = 258; continue _fun00003 }
 253:
                    zulu = true;
                    return zulu;
 258:
                    zulu = options.removingView;
                    if(!zulu) { _fun00004_ip = 284; continue _fun00003 }
 267:
                    tango = tango.length;
                    verify = tango - golf;
                    tango = _closure1_slot8;
                    zulu = verify < tango;
 284:
                    tango = options.removingChat;
                    if(tango) { _fun00004_ip = 299; continue _fun00003 }
 293:
                    tango = options.removingView;
 299:
                    if(!tango) { _fun00004_ip = 319; continue _fun00003 }
 302:
                    oscar = oscar.length;
                    oscar = oscar - golf;
                    report = _closure1_slot9;
                    tango = oscar < report;
 319:
                    zulu = !zulu;
                    if(!zulu) { _fun00004_ip = 328; continue _fun00003 }
 325:
                    zulu = !tango;
 328:
                    return zulu;
 331:
                    return mike;
 334:
                    mike = true;
                    return mike;
 339:
                    return entity;
                }
            };
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
    entity = function() { // Original name: _checkDefaultChannelThresholdMetAfterChannelPermissionDeny
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    zulu = argFoo;
                    options = argBar;
                    offset = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 721; continue _fun00005 }
 19:
                    mike = zulu.getGuildId;
                    golf = mike.bind(zulu)();
                    tango = null;
                    if(!(tango != golf)) { _fun00006_ip = 716; continue _fun00005 }
 38:
                    romeo = options;
                    if(!(tango != offset)) { _fun00006_ip = 101; continue _fun00005 }
 45:
                    yankee = _closure1_slot2;
                    foxtrot = _closure1_slot3;
                    mike = 8;
                    report = foxtrot[mike];
                    verify = undefined;
                    oscar = yankee.bind(verify)(report);
                    report = oscar.filter;
                    mike = foxtrot[mike];
                    verify = yankee.bind(verify)(mike);
                    mike = verify.invert;
                    mike = mike.bind(verify)(offset);
                    romeo = report.bind(oscar)(options, mike);
 101:
                    mike = zulu.permissionOverwrites;
                    mike = mike[golf];
                    if(!(tango == mike)) { _fun00006_ip = 155; continue _fun00005 }
 115:
                    oscar = _closure1_slot2;
                    report = _closure1_slot3;
                    tango = 8;
                    report = report[tango];
                    tango = undefined;
                    oscar = oscar.bind(tango)(report);
                    report = oscar.deserialize;
                    tango = 0;
                    yankee = report.bind(oscar)(tango);
                    _fun00006_ip = 223; continue _fun00005;
 155:
                    offset = _closure1_slot2;
                    foxtrot = _closure1_slot3;
                    options = 8;
                    tango = foxtrot[options];
                    verify = undefined;
                    oscar = offset.bind(verify)(tango);
                    report = oscar.filter;
                    tango = mike.deny;
                    options = foxtrot[options];
                    verify = offset.bind(verify)(options);
                    options = verify.invert;
                    mike = mike.allow;
                    mike = options.bind(verify)(mike);
                    yankee = report.bind(oscar)(tango, mike);
 223:
                    oscar = {};
                    tango = _closure1_slot2;
                    mike = _closure1_slot3;
                    offset = 8;
                    mike = mike[offset];
                    foxtrot = undefined;
                    report = tango.bind(foxtrot)(mike);
                    tango = report.has;
                    mike = _closure1_slot11;
                    mike = mike.VIEW_CHANNEL;
                    mike = tango.bind(report)(romeo, mike);
                    if(!mike) { _fun00006_ip = 315; continue _fun00005 }
 274:
                    report = _closure1_slot2;
                    tango = _closure1_slot3;
                    tango = tango[offset];
                    options = report.bind(foxtrot)(tango);
                    report = options.has;
                    tango = _closure1_slot11;
                    tango = tango.VIEW_CHANNEL;
                    tango = report.bind(options)(yankee, tango);
                    mike = !tango;
 315:
                    oscar['removingView'] = mike;
                    report = false;
                    oscar['removingChat'] = report;
                    mike = zulu.isForumLikeChannel;
                    backup = mike.bind(zulu)();
                    tango = _closure1_slot2;
                    mike = _closure1_slot3;
                    mike = mike[offset];
                    options = tango.bind(foxtrot)(mike);
                    tango = options.has;
                    mike = _closure1_slot11;
                    if(backup) { _fun00006_ip = 430; continue _fun00005 }
 366:
                    backup = mike.SEND_MESSAGES;
                    backup = tango.bind(options)(romeo, backup);
                    if(!backup) { _fun00006_ip = 422; continue _fun00005 }
 381:
                    sizing = _closure1_slot2;
                    kilo = _closure1_slot3;
                    kilo = kilo[offset];
                    output = sizing.bind(foxtrot)(kilo);
                    sizing = output.has;
                    kilo = _closure1_slot11;
                    kilo = kilo.SEND_MESSAGES;
                    kilo = sizing.bind(output)(yankee, kilo);
                    backup = !kilo;
 422:
                    oscar['removingChat'] = backup;
                    _fun00006_ip = 492; continue _fun00005;
 430:
                    mike = mike.SEND_MESSAGES_IN_THREADS;
                    mike = tango.bind(options)(romeo, mike);
                    if(!mike) { _fun00006_ip = 486; continue _fun00005 }
 445:
                    options = _closure1_slot2;
                    tango = _closure1_slot3;
                    tango = tango[offset];
                    offset = options.bind(foxtrot)(tango);
                    options = offset.has;
                    tango = _closure1_slot11;
                    tango = tango.SEND_MESSAGES_IN_THREADS;
                    tango = options.bind(offset)(yankee, tango);
                    mike = !tango;
 486:
                    oscar['removingChat'] = mike;
 492:
                    mike = oscar.removingChat;
                    mike = !mike;
                    if(!mike) { _fun00006_ip = 513; continue _fun00005 }
 504:
                    tango = oscar.removingView;
                    mike = !tango;
 513:
                    if(mike) { _fun00006_ip = 713; continue _fun00005 }
 519:
                    tango = _closure1_slot13;
                    zulu = zulu.id;
                    zulu = tango.bind(foxtrot)(golf, zulu, oscar);
                    SaveGenerator(address=539);
 537:
                    return zulu;
 539:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00006_ip = 710; continue _fun00005 }
 548:
                    oscar = !zulu;
                    tango = !oscar;
                    if(!oscar) { _fun00006_ip = 705; continue _fun00005 }
 560:
                    golf = _closure1_slot1;
                    backup = _closure1_slot3;
                    oscar = 9;
                    oscar = backup[oscar];
                    options = golf.bind(foxtrot)(oscar);
                    golf = options.show;
                    oscar = {};
                    offset = _closure1_slot0;
                    verify = 10;
                    yankee = backup[verify];
                    yankee = offset.bind(foxtrot)(yankee);
                    kilo = yankee.intl;
                    romeo = kilo.string;
                    yankee = backup[verify];
                    yankee = offset.bind(foxtrot)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.ut7sq6;
                    yankee = romeo.bind(kilo)(yankee);
                    oscar['title'] = yankee;
                    yankee = backup[verify];
                    yankee = offset.bind(foxtrot)(yankee);
                    romeo = yankee.intl;
                    yankee = romeo.format;
                    verify = backup[verify];
                    verify = offset.bind(foxtrot)(verify);
                    verify = verify.t;
                    offset = verify.5sm9rK;
                    verify = {};
                    verify = yankee.bind(romeo)(offset, verify);
                    oscar['body'] = verify;
                    oscar = golf.bind(options)(oscar);
                    tango = false;
 705:
                    mike = tango;
                    _fun00006_ip = 713; continue _fun00005;
 710:
                    return zulu;
 713:
                    return mike;
 716:
                    mike = true;
                    return mike;
 721:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
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
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING;
    var _closure1_slot8 = golf;
    tango = tango.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildFeatures;
    var _closure1_slot10 = golf;
    golf = tango.GuildSettingsSections;
    tango = tango.Permissions;
    var _closure1_slot11 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/DefaultChannelThresholdUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: isDefaultChannelThresholdMetAfterDelete
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['isDefaultChannelThresholdMetAfterDelete'] = tango;
    mike = function() { // Original name: checkDefaultChannelThresholdMetAfterChannelPermissionDeny
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['checkDefaultChannelThresholdMetAfterChannelPermissionDeny'] = mike;
    return entity;
})();