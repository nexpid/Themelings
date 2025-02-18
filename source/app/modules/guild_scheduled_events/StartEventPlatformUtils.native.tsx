// app/modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    entity = function() { // Original name: _navigateToEvent
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    zuuluu = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 533; continue _fun00001 }
 16:
                    oscard = michal.entity_type;
                    verify = michal.guild_id;
                    report = _closure1_slot8;
                    report = report.STAGE_INSTANCE;
                    if(!(report !== oscard)) { _fun00002_ip = 298; continue _fun00001 }
 47:
                    report = _closure1_slot8;
                    report = report.VOICE;
                    if(!(report !== oscard)) { _fun00002_ip = 164; continue _fun00001 }
 61:
                    report = _closure1_slot8;
                    report = report.EXTERNAL;
                    if(!(report === oscard)) { _fun00002_ip = 519; continue _fun00001 }
 78:
                    oscard = _closure1_slot7;
                    report = oscard.getGuildId;
                    report = report.bind(oscard)();
                    if(!(report !== verify)) { _fun00002_ip = 144; continue _fun00001 }
 96:
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot3;
                    report = 10;
                    oscard = oscard[report];
                    report = undefined;
                    golfie = golfie.bind(report)(oscard);
                    oscard = golfie.transitionTo;
                    option = _closure1_slot9;
                    report = option.CHANNEL;
                    report = report.bind(option)(verify);
                    report = oscard.bind(golfie)(report);
 144:
                    report = null;
                    if(!(report != zuuluu)) { _fun00002_ip = 519; continue _fun00001 }
 153:
                    report = undefined;
                    report = zuuluu.bind(report)();
                    _fun00002_ip = 519; continue _fun00001;
 164:
                    oscard = _closure1_slot6;
                    report = oscard.getChannelId;
                    verify = report.bind(oscard)();
                    golfie = _closure1_slot5;
                    oscard = golfie.getChannel;
                    report = michal.channel_id;
                    golfie = oscard.bind(golfie)(report);
                    option = _closure1_slot1;
                    oscard = _closure1_slot3;
                    report = 6;
                    oscard = oscard[report];
                    report = undefined;
                    yankee = option.bind(report)(oscard);
                    oscard = null;
                    offset = oscard != golfie;
                    option = 'could not find channel';
                    option = yankee.bind(report)(offset, option);
                    option = golfie.id;
                    if(!(verify !== option)) { _fun00002_ip = 282; continue _fun00001 }
 246:
                    verify = _closure1_slot1;
                    offset = _closure1_slot3;
                    option = 9;
                    option = offset[option];
                    verify = verify.bind(report)(option);
                    option = verify.selectVoiceChannel;
                    golfie = golfie.id;
                    golfie = option.bind(verify)(golfie);
 282:
                    if(!(oscard != zuuluu)) { _fun00002_ip = 519; continue _fun00001 }
 289:
                    report = zuuluu.bind(report)();
                    _fun00002_ip = 519; continue _fun00001;
 298:
                    oscard = _closure1_slot6;
                    report = oscard.getChannelId;
                    report = report.bind(oscard)();
                    golfie = _closure1_slot5;
                    oscard = golfie.getChannel;
                    michal = michal.channel_id;
                    golfie = oscard.bind(golfie)(michal);
                    oscard = _closure1_slot1;
                    option = _closure1_slot3;
                    michal = 6;
                    michal = option[michal];
                    option = undefined;
                    offset = oscard.bind(option)(michal);
                    verify = null;
                    oscard = verify != golfie;
                    michal = 'could not find channel';
                    michal = offset.bind(option)(oscard, michal);
                    michal = golfie.id;
                    if(!(report !== michal)) { _fun00002_ip = 424; continue _fun00001 }
 380:
                    report = _closure1_slot2;
                    oscard = _closure1_slot3;
                    michal = 7;
                    michal = oscard[michal];
                    oscard = report.bind(option)(michal);
                    report = oscard.connectToStage;
                    michal = true;
                    michal = report.bind(oscard)(golfie, michal);
                    SaveGenerator(address=418);
 416:
                    return michal;
 418:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 530; continue _fun00001 }
 424:
                    if(!(verify != zuuluu)) { _fun00002_ip = 432; continue _fun00001 }
 428:
                    zuuluu = zuuluu.bind(option)();
 432:
                    report = _closure1_slot2;
                    oscard = _closure1_slot3;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    report = report.bind(option)(zuuluu);
                    zuuluu = report.navigateToStage;
                    oscard = false;
                    zuuluu = zuuluu.bind(report)(golfie, verify, oscard);
                    SaveGenerator(address=471);
 469:
                    return zuuluu;
 471:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 527; continue _fun00001 }
 477:
                    report = _closure1_slot0;
                    verify = _closure1_slot3;
                    tangon = 8;
                    tangon = verify[tangon];
                    report = report.bind(option)(tangon);
                    tangon = report.audienceAckRequestToSpeak;
                    tangon = tangon.bind(report)(golfie, oscard);
                    SaveGenerator(address=513);
 511:
                    return tangon;
 513:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 524; continue _fun00001 }
 519:
                    report = undefined;
                    return report;
 524:
                    return tangon;
 527:
                    return zuuluu;
 530:
                    return michal;
 533:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildScheduledEventEntityTypes;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Routes;
    var _closure1_slot9 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: navigateToEvent
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['navigateToEvent'] = tangon;
    michal = function() { // Original name: postStartActions
        entity = global;
        michal = entity.Promise;
        entity = michal.resolve;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['postStartActions'] = michal;
    return entity;
})();