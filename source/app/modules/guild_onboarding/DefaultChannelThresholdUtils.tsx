// app/modules/guild_onboarding/DefaultChannelThresholdUtils.tsx
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
    entity = function() { // Original name: _isDefaultChannelThresholdMetAfterDelete
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 71; continue _fun00001 }
 10:
                    michal = null;
                    michal = michal == golfie;
                    if(michal) { _fun00002_ip = 68; continue _fun00001 }
 19:
                    oscard = _closure1_slot13;
                    report = undefined;
                    tangon = argBar;
                    zuuluu = {'removingView': true, 'removingChat': true};
                    zuuluu = oscard.bind(report)(golfie, tangon, zuuluu);
                    SaveGenerator(address=56);
 54:
                    return zuuluu;
 56:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    michal = zuuluu;
                    if(!tangon) { _fun00002_ip = 68; continue _fun00001 }
 65:
                    return zuuluu;
 68:
                    return michal;
 71:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: isDefaultChannelThresholdMetAfterChannelChange
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isDefaultChannelThresholdMetAfterChannelChange
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    option = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 339; continue _fun00003 }
 16:
                    zuuluu = _closure1_slot6;
                    michal = zuuluu.getGuild;
                    tangon = michal.bind(zuuluu)(oscard);
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00004_ip = 334; continue _fun00003 }
 42:
                    michal = zuuluu != tangon;
                    if(!michal) { _fun00004_ip = 87; continue _fun00003 }
 49:
                    verify = tangon.features;
                    tangon = zuuluu == verify;
                    zuuluu = undefined;
                    if(tangon) { _fun00004_ip = 84; continue _fun00003 }
 64:
                    golfie = verify.has;
                    tangon = _closure1_slot10;
                    tangon = tangon.GUILD_ONBOARDING;
                    zuuluu = golfie.bind(verify)(tangon);
 84:
                    michal = zuuluu;
 87:
                    if(michal) { _fun00004_ip = 95; continue _fun00003 }
 90:
                    zuuluu = true;
                    return zuuluu;
 95:
                    if(!michal) { _fun00004_ip = 113; continue _fun00003 }
 98:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.shouldFetchPrompts;
                    michal = zuuluu.bind(tangon)(oscard);
 113:
                    if(!michal) { _fun00004_ip = 162; continue _fun00003 }
 116:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 6;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.fetchOnboardingPrompts;
                    michal = michal.bind(zuuluu)(oscard);
                    SaveGenerator(address=153);
 151:
                    return michal;
 153:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 331; continue _fun00003 }
 162:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getDefaultChannelIds;
                    offset = zuuluu.bind(tangon)(oscard);
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot3;
                    zuuluu = 7;
                    zuuluu = golfie[zuuluu];
                    golfie = undefined;
                    tangon = tangon.bind(golfie)(zuuluu);
                    zuuluu = tangon.getChattableDefaultChannels;
                    oscard = zuuluu.bind(tangon)(oscard, offset);
                    tangon = _closure1_slot4;
                    zuuluu = 2;
                    zuuluu = tangon.bind(golfie)(oscard, zuuluu);
                    tangon = 0;
                    oscard = zuuluu[tangon];
                    golfie = 1;
                    tangon = zuuluu[golfie];
                    verify = offset.includes;
                    zuuluu = argBar;
                    zuuluu = verify.bind(offset)(zuuluu);
                    if(zuuluu) { _fun00004_ip = 258; continue _fun00003 }
 253:
                    zuuluu = true;
                    return zuuluu;
 258:
                    zuuluu = option.removingView;
                    if(!zuuluu) { _fun00004_ip = 284; continue _fun00003 }
 267:
                    tangon = tangon.length;
                    verify = tangon - golfie;
                    tangon = _closure1_slot8;
                    zuuluu = verify < tangon;
 284:
                    tangon = option.removingChat;
                    if(tangon) { _fun00004_ip = 299; continue _fun00003 }
 293:
                    tangon = option.removingView;
 299:
                    if(!tangon) { _fun00004_ip = 319; continue _fun00003 }
 302:
                    oscard = oscard.length;
                    oscard = oscard - golfie;
                    report = _closure1_slot9;
                    tangon = oscard < report;
 319:
                    zuuluu = !zuuluu;
                    if(!zuuluu) { _fun00004_ip = 328; continue _fun00003 }
 325:
                    zuuluu = !tangon;
 328:
                    return zuuluu;
 331:
                    return michal;
 334:
                    michal = true;
                    return michal;
 339:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _checkDefaultChannelThresholdMetAfterChannelPermissionDeny
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    zuuluu = argFoo;
                    option = argBar;
                    offset = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 721; continue _fun00005 }
 19:
                    michal = zuuluu.getGuildId;
                    golfie = michal.bind(zuuluu)();
                    tangon = null;
                    if(!(tangon != golfie)) { _fun00006_ip = 716; continue _fun00005 }
 38:
                    romeon = option;
                    if(!(tangon != offset)) { _fun00006_ip = 101; continue _fun00005 }
 45:
                    yankee = _closure1_slot2;
                    foxtra = _closure1_slot3;
                    michal = 8;
                    report = foxtra[michal];
                    verify = undefined;
                    oscard = yankee.bind(verify)(report);
                    report = oscard.filter;
                    michal = foxtra[michal];
                    verify = yankee.bind(verify)(michal);
                    michal = verify.invert;
                    michal = michal.bind(verify)(offset);
                    romeon = report.bind(oscard)(option, michal);
 101:
                    michal = zuuluu.permissionOverwrites;
                    michal = michal[golfie];
                    if(!(tangon == michal)) { _fun00006_ip = 155; continue _fun00005 }
 115:
                    oscard = _closure1_slot2;
                    report = _closure1_slot3;
                    tangon = 8;
                    report = report[tangon];
                    tangon = undefined;
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.deserialize;
                    tangon = 0;
                    yankee = report.bind(oscard)(tangon);
                    _fun00006_ip = 223; continue _fun00005;
 155:
                    offset = _closure1_slot2;
                    foxtra = _closure1_slot3;
                    option = 8;
                    tangon = foxtra[option];
                    verify = undefined;
                    oscard = offset.bind(verify)(tangon);
                    report = oscard.filter;
                    tangon = michal.deny;
                    option = foxtra[option];
                    verify = offset.bind(verify)(option);
                    option = verify.invert;
                    michal = michal.allow;
                    michal = option.bind(verify)(michal);
                    yankee = report.bind(oscard)(tangon, michal);
 223:
                    oscard = {};
                    tangon = _closure1_slot2;
                    michal = _closure1_slot3;
                    offset = 8;
                    michal = michal[offset];
                    foxtra = undefined;
                    report = tangon.bind(foxtra)(michal);
                    tangon = report.has;
                    michal = _closure1_slot11;
                    michal = michal.VIEW_CHANNEL;
                    michal = tangon.bind(report)(romeon, michal);
                    if(!michal) { _fun00006_ip = 315; continue _fun00005 }
 274:
                    report = _closure1_slot2;
                    tangon = _closure1_slot3;
                    tangon = tangon[offset];
                    option = report.bind(foxtra)(tangon);
                    report = option.has;
                    tangon = _closure1_slot11;
                    tangon = tangon.VIEW_CHANNEL;
                    tangon = report.bind(option)(yankee, tangon);
                    michal = !tangon;
 315:
                    oscard['removingView'] = michal;
                    report = false;
                    oscard['removingChat'] = report;
                    michal = zuuluu.isForumLikeChannel;
                    backup = michal.bind(zuuluu)();
                    tangon = _closure1_slot2;
                    michal = _closure1_slot3;
                    michal = michal[offset];
                    option = tangon.bind(foxtra)(michal);
                    tangon = option.has;
                    michal = _closure1_slot11;
                    if(backup) { _fun00006_ip = 430; continue _fun00005 }
 366:
                    backup = michal.SEND_MESSAGES;
                    backup = tangon.bind(option)(romeon, backup);
                    if(!backup) { _fun00006_ip = 422; continue _fun00005 }
 381:
                    sizing = _closure1_slot2;
                    kiloes = _closure1_slot3;
                    kiloes = kiloes[offset];
                    output = sizing.bind(foxtra)(kiloes);
                    sizing = output.has;
                    kiloes = _closure1_slot11;
                    kiloes = kiloes.SEND_MESSAGES;
                    kiloes = sizing.bind(output)(yankee, kiloes);
                    backup = !kiloes;
 422:
                    oscard['removingChat'] = backup;
                    _fun00006_ip = 492; continue _fun00005;
 430:
                    michal = michal.SEND_MESSAGES_IN_THREADS;
                    michal = tangon.bind(option)(romeon, michal);
                    if(!michal) { _fun00006_ip = 486; continue _fun00005 }
 445:
                    option = _closure1_slot2;
                    tangon = _closure1_slot3;
                    tangon = tangon[offset];
                    offset = option.bind(foxtra)(tangon);
                    option = offset.has;
                    tangon = _closure1_slot11;
                    tangon = tangon.SEND_MESSAGES_IN_THREADS;
                    tangon = option.bind(offset)(yankee, tangon);
                    michal = !tangon;
 486:
                    oscard['removingChat'] = michal;
 492:
                    michal = oscard.removingChat;
                    michal = !michal;
                    if(!michal) { _fun00006_ip = 513; continue _fun00005 }
 504:
                    tangon = oscard.removingView;
                    michal = !tangon;
 513:
                    if(michal) { _fun00006_ip = 713; continue _fun00005 }
 519:
                    tangon = _closure1_slot13;
                    zuuluu = zuuluu.id;
                    zuuluu = tangon.bind(foxtra)(golfie, zuuluu, oscard);
                    SaveGenerator(address=539);
 537:
                    return zuuluu;
 539:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 710; continue _fun00005 }
 548:
                    oscard = !zuuluu;
                    tangon = !oscard;
                    if(!oscard) { _fun00006_ip = 705; continue _fun00005 }
 560:
                    golfie = _closure1_slot1;
                    backup = _closure1_slot3;
                    oscard = 9;
                    oscard = backup[oscard];
                    option = golfie.bind(foxtra)(oscard);
                    golfie = option.show;
                    oscard = {};
                    offset = _closure1_slot0;
                    verify = 10;
                    yankee = backup[verify];
                    yankee = offset.bind(foxtra)(yankee);
                    kiloes = yankee.intl;
                    romeon = kiloes.string;
                    yankee = backup[verify];
                    yankee = offset.bind(foxtra)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.ut7sq6;
                    yankee = romeon.bind(kiloes)(yankee);
                    oscard['title'] = yankee;
                    yankee = backup[verify];
                    yankee = offset.bind(foxtra)(yankee);
                    romeon = yankee.intl;
                    yankee = romeon.format;
                    verify = backup[verify];
                    verify = offset.bind(foxtra)(verify);
                    verify = verify.t;
                    offset = verify.5sm9rK;
                    verify = {};
                    verify = yankee.bind(romeon)(offset, verify);
                    oscard['body'] = verify;
                    oscard = golfie.bind(option)(oscard);
                    tangon = false;
 705:
                    michal = tangon;
                    _fun00006_ip = 713; continue _fun00005;
 710:
                    return zuuluu;
 713:
                    return michal;
 716:
                    michal = true;
                    return michal;
 721:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
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
    golfie = tangon.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING;
    var _closure1_slot8 = golfie;
    tangon = tangon.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildFeatures;
    var _closure1_slot10 = golfie;
    golfie = tangon.GuildSettingsSections;
    tangon = tangon.Permissions;
    var _closure1_slot11 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding/DefaultChannelThresholdUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: isDefaultChannelThresholdMetAfterDelete
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['isDefaultChannelThresholdMetAfterDelete'] = tangon;
    michal = function() { // Original name: checkDefaultChannelThresholdMetAfterChannelPermissionDeny
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['checkDefaultChannelThresholdMetAfterChannelPermissionDeny'] = michal;
    return entity;
})();