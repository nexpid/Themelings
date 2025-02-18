// app/modules/stage_channels/StageChannelActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = option;
    report = function(argFoo, argBar) { // Original name: audienceAckRequestToSpeak
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            option = argBar;
            golfie = arguments[2];
            zuuluu = undefined;
            if(!(golfie === zuuluu)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            golfie = false;
 17:
            oscard = null;
            entity = oscard == report;
            offset = undefined;
            if(entity) { _fun00002_ip = 38; continue _fun00001 }
 28:
            entity = report.getGuildId;
            offset = entity.bind(report)();
 38:
            michal = _closure1_slot1;
            yankee = _closure1_slot3;
            entity = 4;
            entity = yankee[entity];
            verify = michal.bind(zuuluu)(entity);
            michal = oscard != offset;
            entity = 'This channel cannot be guildless.';
            entity = verify.bind(zuuluu)(michal, entity);
            verify = _closure1_slot6;
            michal = verify.getVoiceStateForChannel;
            entity = report.id;
            foxtra = michal.bind(verify)(entity);
            verify = _closure1_slot0;
            entity = 8;
            michal = yankee[entity];
            romeon = verify.bind(zuuluu)(michal);
            michal = romeon.getAudienceRequestToSpeakState;
            michal = michal.bind(romeon)(foxtra);
            entity = yankee[entity];
            entity = verify.bind(zuuluu)(entity);
            entity = entity.RequestToSpeakStates;
            entity = entity.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            entity = michal !== entity;
            if(entity) { _fun00002_ip = 155; continue _fun00001 }
 152:
            entity = option;
 155:
            if(entity) { _fun00002_ip = 232; continue _fun00001 }
 158:
            foxtra = _closure1_slot0;
            backup = _closure1_slot3;
            entity = 5;
            entity = backup[entity];
            yankee = foxtra.bind(zuuluu)(entity);
            verify = yankee.trackWithMetadata;
            entity = _closure1_slot7;
            michal = entity.PROMOTED_TO_SPEAKER;
            entity = {};
            romeon = 6;
            romeon = backup[romeon];
            foxtra = foxtra.bind(zuuluu)(romeon);
            romeon = foxtra.getStageChannelMetadata;
            kiloes = romeon.bind(foxtra)(report);
            sizing = entity;
            romeon = copyDataProperties(sizing, kiloes);
            entity = verify.bind(yankee)(michal, entity);
 232:
            michal = _closure1_slot0;
            verify = _closure1_slot3;
            entity = 7;
            entity = verify[entity];
            entity = michal.bind(zuuluu)(entity);
            zuuluu = entity.HTTP;
            michal = zuuluu.patch;
            entity = {};
            verify = _closure1_slot8;
            tangon = verify.UPDATE_VOICE_STATE;
            tangon = tangon.bind(verify)(offset);
            entity['url'] = tangon;
            tangon = {};
            tangon['suppress'] = option;
            tangon['request_to_speak_timestamp'] = oscard;
            report = report.id;
            tangon['channel_id'] = report;
            if(golfie) { _fun00002_ip = 312; continue _fun00001 }
 308:
            report = {};
            _fun00002_ip = 322; continue _fun00001;
 312:
            oscard = {};
            oscard['silent'] = golfie;
            report = oscard;
 322:
            sizing = tangon;
            kiloes = report;
            report = copyDataProperties(sizing, kiloes);
            entity['body'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot9 = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: setUserSuppress
        report = argFoo;
        entity = report.getGuildId;
        option = entity.bind(report)();
        michal = _closure1_slot1;
        oscard = _closure1_slot3;
        entity = 4;
        entity = oscard[entity];
        zuuluu = undefined;
        golfie = michal.bind(zuuluu)(entity);
        entity = null;
        michal = entity != option;
        entity = 'This channel cannot be guildless.';
        entity = golfie.bind(zuuluu)(michal, entity);
        michal = _closure1_slot0;
        entity = 7;
        entity = oscard[entity];
        entity = michal.bind(zuuluu)(entity);
        zuuluu = entity.HTTP;
        michal = zuuluu.patch;
        entity = {};
        golfie = _closure1_slot8;
        oscard = golfie.UPDATE_VOICE_STATE;
        tangon = argBar;
        tangon = oscard.bind(golfie)(option, tangon);
        entity['url'] = tangon;
        tangon = {};
        oscard = argBaz;
        tangon['suppress'] = oscard;
        report = report.id;
        tangon['channel_id'] = report;
        entity['body'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot10 = tangon;
    entity = function() { // Original name: _startStage
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar, argBaz, argCor) {
            entity = function* (argFoo, argBar, argBaz, argCor) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    offset = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 168; continue _fun00003 }
 16:
                    michal = '';
                    if(!(michal === offset)) { _fun00004_ip = 29; continue _fun00003 }
 24:
                    michal = undefined;
                    return michal;
 29:
                    tangon = _closure1_slot5;
                    michal = tangon.getVoiceChannelId;
                    tangon = michal.bind(tangon)();
                    michal = golfie.id;
                    if(!(tangon !== michal)) { _fun00004_ip = 88; continue _fun00003 }
 55:
                    report = _closure1_slot0;
                    tangon = _closure1_slot3;
                    michal = 14;
                    tangon = tangon[michal];
                    michal = undefined;
                    tangon = report.bind(michal)(tangon);
                    michal = tangon.connectToStage;
                    michal = michal.bind(tangon)(golfie);
 88:
                    tangon = _closure1_slot0;
                    report = _closure1_slot3;
                    michal = 15;
                    michal = report[michal];
                    oscard = undefined;
                    verify = tangon.bind(oscard)(michal);
                    option = verify.startStageInstance;
                    backup = golfie.id;
                    romeon = argBaz;
                    yankee = argCor;
                    kiloes = verify;
                    foxtra = offset;
                    michal = kiloes[option](backup, foxtra, romeon, yankee, offset);
                    SaveGenerator(address=141);
 139:
                    return michal;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 165; continue _fun00003 }
 147:
                    report = _closure1_slot9;
                    tangon = false;
                    zuuluu = true;
                    zuuluu = report.bind(oscard)(golfie, tangon, zuuluu);
                    return michal;
 165:
                    return michal;
 168:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _editStage
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    oscard = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 88; continue _fun00005 }
 10:
                    michal = '';
                    if(!(michal === oscard)) { _fun00006_ip = 23; continue _fun00005 }
 18:
                    michal = undefined;
                    return michal;
 23:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 15;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.updateStageInstance;
                    michal = argFoo;
                    zuuluu = michal.id;
                    michal = argBaz;
                    michal = tangon.bind(report)(zuuluu, oscard, michal);
                    SaveGenerator(address=76);
 74:
                    return michal;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 85; continue _fun00005 }
 82:
                    return michal;
 85:
                    return michal;
 88:
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
    entity = function() { // Original name: _endStage
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 67; continue _fun00007 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 15;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.endStageInstance;
                    michal = argFoo;
                    michal = michal.id;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=55);
 53:
                    return michal;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 64; continue _fun00007 }
 61:
                    return zuuluu;
 64:
                    return michal;
 67:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.AnalyticEvents;
    var _closure1_slot7 = verify;
    oscard = oscard.Endpoints;
    var _closure1_slot8 = oscard;
    oscard = 16;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/stage_channels/StageChannelActionCreators.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo, argBar) { // Original name: toggleRequestToSpeak
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            golfie = argBar;
            entity = report.getGuildId;
            verify = entity.bind(report)();
            michal = _closure1_slot1;
            zuuluu = _closure1_slot3;
            entity = 4;
            entity = zuuluu[entity];
            zuuluu = undefined;
            option = michal.bind(zuuluu)(entity);
            oscard = null;
            michal = oscard != verify;
            entity = 'This channel cannot be guildless.';
            entity = option.bind(zuuluu)(michal, entity);
            if(!golfie) { _fun00010_ip = 136; continue _fun00009 }
 62:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot3;
            entity = 5;
            entity = foxtra[entity];
            offset = romeon.bind(zuuluu)(entity);
            option = offset.trackWithMetadata;
            entity = _closure1_slot7;
            michal = entity.REQUEST_TO_SPEAK_INITIATED;
            entity = {};
            yankee = 6;
            yankee = foxtra[yankee];
            romeon = romeon.bind(zuuluu)(yankee);
            yankee = romeon.getStageChannelMetadata;
            backup = yankee.bind(romeon)(report);
            kiloes = entity;
            yankee = copyDataProperties(kiloes, backup);
            entity = option.bind(offset)(michal, entity);
 136:
            michal = _closure1_slot0;
            option = _closure1_slot3;
            entity = 7;
            entity = option[entity];
            entity = michal.bind(zuuluu)(entity);
            zuuluu = entity.HTTP;
            michal = zuuluu.patch;
            entity = {};
            option = _closure1_slot8;
            tangon = option.UPDATE_VOICE_STATE;
            tangon = tangon.bind(option)(verify);
            entity['url'] = tangon;
            tangon = {};
            oscard = null;
            if(!golfie) { _fun00010_ip = 233; continue _fun00009 }
 195:
            golfie = global;
            golfie = golfie.Date;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            sizing = option;
            golfie = new sizing[golfie](kiloes);
            option = golfie instanceof Object ? golfie : option;
            golfie = option.toISOString;
            oscard = golfie.bind(option)();
 233:
            tangon['request_to_speak_timestamp'] = oscard;
            report = report.id;
            tangon['channel_id'] = report;
            entity['body'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['toggleRequestToSpeak'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: inviteUserToStage
        oscard = argFoo;
        entity = oscard.getGuildId;
        option = entity.bind(oscard)();
        michal = _closure1_slot1;
        report = _closure1_slot3;
        entity = 4;
        entity = report[entity];
        zuuluu = undefined;
        golfie = michal.bind(zuuluu)(entity);
        entity = null;
        michal = entity != option;
        entity = 'This channel cannot be guildless.';
        entity = golfie.bind(zuuluu)(michal, entity);
        michal = _closure1_slot0;
        entity = 7;
        entity = report[entity];
        entity = michal.bind(zuuluu)(entity);
        zuuluu = entity.HTTP;
        michal = zuuluu.patch;
        entity = {};
        golfie = _closure1_slot8;
        report = golfie.UPDATE_VOICE_STATE;
        tangon = argBar;
        tangon = report.bind(golfie)(option, tangon);
        entity['url'] = tangon;
        report = {};
        tangon = false;
        report['suppress'] = tangon;
        golfie = global;
        golfie = golfie.Date;
        option = golfie.prototype;
        option = Object.create(option, {constructor: {value: golfie}});
        yankee = option;
        golfie = new yankee[golfie](offset);
        option = golfie instanceof Object ? golfie : option;
        golfie = option.toISOString;
        golfie = golfie.bind(option)();
        report['request_to_speak_timestamp'] = golfie;
        oscard = oscard.id;
        report['channel_id'] = oscard;
        entity['body'] = report;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['inviteUserToStage'] = oscard;
    zuuluu['audienceAckRequestToSpeak'] = report;
    report = function(argFoo) { // Original name: moveSelfToAudience
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            entity = null;
            michal = entity == tangon;
            zuuluu = undefined;
            golfie = undefined;
            if(michal) { _fun00012_ip = 26; continue _fun00011 }
 16:
            michal = tangon.getGuildId;
            golfie = michal.bind(tangon)();
 26:
            option = _closure1_slot1;
            oscard = _closure1_slot3;
            michal = 4;
            michal = oscard[michal];
            option = option.bind(zuuluu)(michal);
            michal = entity != golfie;
            entity = 'This channel cannot be guildless.';
            entity = option.bind(zuuluu)(michal, entity);
            michal = _closure1_slot0;
            entity = 7;
            entity = oscard[entity];
            entity = michal.bind(zuuluu)(entity);
            zuuluu = entity.HTTP;
            michal = zuuluu.patch;
            entity = {};
            oscard = _closure1_slot8;
            report = oscard.UPDATE_VOICE_STATE;
            report = report.bind(oscard)(golfie);
            entity['url'] = report;
            report = {'suppress': true, 'channel_id': null, 'self_video': false, 'self_stream': false};
            tangon = tangon.id;
            report['channel_id'] = tangon;
            tangon = false;
            entity['body'] = report;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['moveSelfToAudience'] = report;
    zuuluu['setUserSuppress'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: moveUserToAudience
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            entity = null;
            if(!(entity != tangon)) { _fun00014_ip = 16; continue _fun00013 }
 12:
            if(!(entity == report)) { _fun00014_ip = 20; continue _fun00013 }
 16:
            michal = undefined;
            return michal;
 20:
            michal = tangon.getGuildId;
            option = michal.bind(tangon)();
            verify = _closure1_slot1;
            golfie = _closure1_slot3;
            michal = 4;
            michal = golfie[michal];
            zuuluu = undefined;
            verify = verify.bind(zuuluu)(michal);
            michal = entity != option;
            entity = 'This channel cannot be guildless.';
            entity = verify.bind(zuuluu)(michal, entity);
            verify = _closure1_slot10;
            michal = report.id;
            entity = true;
            entity = verify.bind(zuuluu)(tangon, michal, entity);
            michal = _closure1_slot0;
            entity = 7;
            entity = golfie[entity];
            entity = michal.bind(zuuluu)(entity);
            zuuluu = entity.HTTP;
            michal = zuuluu.patch;
            entity = {};
            golfie = _closure1_slot8;
            oscard = golfie.UPDATE_VOICE_STATE;
            report = report.id;
            report = oscard.bind(golfie)(option, report);
            entity['url'] = report;
            report = {'suppress': true, 'channel_id': null, 'self_video': false, 'self_stream': false};
            tangon = tangon.id;
            report['channel_id'] = tangon;
            tangon = false;
            entity['body'] = report;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['moveUserToAudience'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: removeUserFromChannel
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            tangon = argBar;
            oscard = null;
            zuuluu = oscard == tangon;
            entity = undefined;
            report = undefined;
            if(zuuluu) { _fun00016_ip = 29; continue _fun00015 }
 19:
            zuuluu = tangon.getGuildId;
            report = zuuluu.bind(tangon)();
 29:
            zuuluu = oscard != report;
            if(!zuuluu) { _fun00016_ip = 40; continue _fun00015 }
 36:
            zuuluu = oscard != michal;
 40:
            if(!zuuluu) { _fun00016_ip = 84; continue _fun00015 }
 43:
            tangon = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 9;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.setChannel;
            michal = michal.id;
            michal = zuuluu.bind(tangon)(report, michal, oscard);
 84:
            return entity;
        }
    };
    zuuluu['removeUserFromChannel'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: setEveryoneRolePermissionAllowed
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            option = argBar;
            entity = michal.getGuildId;
            oscard = entity.bind(michal)();
            report = _closure1_slot1;
            verify = _closure1_slot3;
            entity = 4;
            tangon = verify[entity];
            entity = undefined;
            golfie = report.bind(entity)(tangon);
            tangon = null;
            report = tangon != oscard;
            tangon = 'Channel cannot be guildless';
            tangon = golfie.bind(entity)(report, tangon);
            tangon = michal.permissionOverwrites;
            foxtra = tangon[oscard];
            report = {};
            report['id'] = oscard;
            golfie = _closure1_slot0;
            oscard = 10;
            oscard = verify[oscard];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.PermissionOverwriteType;
            oscard = oscard.ROLE;
            report['type'] = oscard;
            golfie = _closure1_slot2;
            oscard = 11;
            offset = verify[oscard];
            offset = golfie.bind(entity)(offset);
            offset = offset.NONE;
            report['allow'] = offset;
            oscard = verify[oscard];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.NONE;
            report['deny'] = oscard;
            backup = report;
            tangon = copyDataProperties(backup, foxtra);
            oscard = _closure1_slot2;
            golfie = _closure1_slot3;
            tangon = 12;
            verify = golfie[tangon];
            yankee = oscard.bind(entity)(verify);
            verify = argBaz;
            if(verify) { _fun00018_ip = 245; continue _fun00017 }
 187:
            offset = yankee.remove;
            verify = report.allow;
            verify = offset.bind(yankee)(verify, option);
            report['allow'] = verify;
            verify = golfie[tangon];
            romeon = oscard.bind(entity)(verify);
            offset = romeon.add;
            verify = report.deny;
            verify = offset.bind(romeon)(verify, option);
            report['deny'] = verify;
            _fun00018_ip = 301; continue _fun00017;
 245:
            offset = yankee.add;
            verify = report.allow;
            verify = offset.bind(yankee)(verify, option);
            report['allow'] = verify;
            tangon = golfie[tangon];
            golfie = oscard.bind(entity)(tangon);
            oscard = golfie.remove;
            tangon = report.deny;
            tangon = oscard.bind(golfie)(tangon, option);
            report['deny'] = tangon;
 301:
            tangon = _closure1_slot1;
            oscard = _closure1_slot3;
            zuuluu = 13;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.updatePermissionOverwrite;
            michal = michal.id;
            michal = zuuluu.bind(tangon)(michal, report);
            return entity;
        }
    };
    zuuluu['setEveryoneRolePermissionAllowed'] = tangon;
    tangon = function() { // Original name: startStage
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['startStage'] = tangon;
    tangon = function() { // Original name: editStage
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['editStage'] = tangon;
    michal = function() { // Original name: endStage
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['endStage'] = michal;
    return entity;
})();