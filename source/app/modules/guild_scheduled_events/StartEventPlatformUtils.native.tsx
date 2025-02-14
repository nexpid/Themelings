// app/modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx
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
    entity = function() { // Original name: _navigateToEvent
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun102848: for(var _fun102848_ip = 0; ; ) switch(_fun102848_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    zulu = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun102848_ip = 533; continue _fun102848 }
 16:
                    oscar = mike.entity_type;
                    verify = mike.guild_id;
                    report = _closure1_slot8;
                    report = report.STAGE_INSTANCE;
                    if(!(report !== oscar)) { _fun102848_ip = 298; continue _fun102848 }
 47:
                    report = _closure1_slot8;
                    report = report.VOICE;
                    if(!(report !== oscar)) { _fun102848_ip = 164; continue _fun102848 }
 61:
                    report = _closure1_slot8;
                    report = report.EXTERNAL;
                    if(!(report === oscar)) { _fun102848_ip = 519; continue _fun102848 }
 78:
                    oscar = _closure1_slot7;
                    report = oscar.getGuildId;
                    report = report.bind(oscar)();
                    if(!(report !== verify)) { _fun102848_ip = 144; continue _fun102848 }
 96:
                    golf = _closure1_slot0;
                    oscar = _closure1_slot3;
                    report = 10;
                    oscar = oscar[report];
                    report = undefined;
                    golf = golf.bind(report)(oscar);
                    oscar = golf.transitionTo;
                    options = _closure1_slot9;
                    report = options.CHANNEL;
                    report = report.bind(options)(verify);
                    report = oscar.bind(golf)(report);
 144:
                    report = null;
                    if(!(report != zulu)) { _fun102848_ip = 519; continue _fun102848 }
 153:
                    report = undefined;
                    report = zulu.bind(report)();
                    _fun102848_ip = 519; continue _fun102848;
 164:
                    oscar = _closure1_slot6;
                    report = oscar.getChannelId;
                    verify = report.bind(oscar)();
                    golf = _closure1_slot5;
                    oscar = golf.getChannel;
                    report = mike.channel_id;
                    golf = oscar.bind(golf)(report);
                    options = _closure1_slot1;
                    oscar = _closure1_slot3;
                    report = 6;
                    oscar = oscar[report];
                    report = undefined;
                    yankee = options.bind(report)(oscar);
                    oscar = null;
                    offset = oscar != golf;
                    options = 'could not find channel';
                    options = yankee.bind(report)(offset, options);
                    options = golf.id;
                    if(!(verify !== options)) { _fun102848_ip = 282; continue _fun102848 }
 246:
                    verify = _closure1_slot1;
                    offset = _closure1_slot3;
                    options = 9;
                    options = offset[options];
                    verify = verify.bind(report)(options);
                    options = verify.selectVoiceChannel;
                    golf = golf.id;
                    golf = options.bind(verify)(golf);
 282:
                    if(!(oscar != zulu)) { _fun102848_ip = 519; continue _fun102848 }
 289:
                    report = zulu.bind(report)();
                    _fun102848_ip = 519; continue _fun102848;
 298:
                    oscar = _closure1_slot6;
                    report = oscar.getChannelId;
                    report = report.bind(oscar)();
                    golf = _closure1_slot5;
                    oscar = golf.getChannel;
                    mike = mike.channel_id;
                    golf = oscar.bind(golf)(mike);
                    oscar = _closure1_slot1;
                    options = _closure1_slot3;
                    mike = 6;
                    mike = options[mike];
                    options = undefined;
                    offset = oscar.bind(options)(mike);
                    verify = null;
                    oscar = verify != golf;
                    mike = 'could not find channel';
                    mike = offset.bind(options)(oscar, mike);
                    mike = golf.id;
                    if(!(report !== mike)) { _fun102848_ip = 424; continue _fun102848 }
 380:
                    report = _closure1_slot2;
                    oscar = _closure1_slot3;
                    mike = 7;
                    mike = oscar[mike];
                    oscar = report.bind(options)(mike);
                    report = oscar.connectToStage;
                    mike = true;
                    mike = report.bind(oscar)(golf, mike);
                    SaveGenerator(address=418);
 416:
                    return mike;
 418:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun102848_ip = 530; continue _fun102848 }
 424:
                    if(!(verify != zulu)) { _fun102848_ip = 432; continue _fun102848 }
 428:
                    zulu = zulu.bind(options)();
 432:
                    report = _closure1_slot2;
                    oscar = _closure1_slot3;
                    zulu = 7;
                    zulu = oscar[zulu];
                    report = report.bind(options)(zulu);
                    zulu = report.navigateToStage;
                    oscar = false;
                    zulu = zulu.bind(report)(golf, verify, oscar);
                    SaveGenerator(address=471);
 469:
                    return zulu;
 471:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun102848_ip = 527; continue _fun102848 }
 477:
                    report = _closure1_slot0;
                    verify = _closure1_slot3;
                    tango = 8;
                    tango = verify[tango];
                    report = report.bind(options)(tango);
                    tango = report.audienceAckRequestToSpeak;
                    tango = tango.bind(report)(golf, oscar);
                    SaveGenerator(address=513);
 511:
                    return tango;
 513:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun102848_ip = 524; continue _fun102848 }
 519:
                    report = undefined;
                    return report;
 524:
                    return tango;
 527:
                    return zulu;
 530:
                    return mike;
 533:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
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
    tango = tango.GuildScheduledEventEntityTypes;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Routes;
    var _closure1_slot9 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: navigateToEvent
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['navigateToEvent'] = tango;
    mike = function() { // Original name: postStartActions
        entity = global;
        mike = entity.Promise;
        entity = mike.resolve;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['postStartActions'] = mike;
    return entity;
})();