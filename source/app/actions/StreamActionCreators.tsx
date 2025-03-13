// app/actions/StreamActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: isVoiceChannelFull
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argBar;
            zuuluu = _closure1_slot9;
            entity = zuuluu.getChannel;
            oscard = entity.bind(zuuluu)(tangon);
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            entity = 14;
            entity = report[entity];
            report = undefined;
            golfie = zuuluu.bind(report)(entity);
            entity = null;
            zuuluu = entity != oscard;
            entity = 'Cannot join a null voice channel';
            entity = golfie.bind(report)(zuuluu, entity);
            zuuluu = _closure1_slot12;
            entity = zuuluu.isInChannel;
            entity = entity.bind(zuuluu)(tangon);
            entity = !entity;
            if(!entity) { _fun00002_ip = 122; continue _fun00001 }
 81:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 15;
            zuuluu = golfie[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.isChannelFull;
            zuuluu = _closure1_slot12;
            michal = _closure1_slot10;
            entity = tangon.bind(report)(oscard, zuuluu, michal);
 122:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    golfie = function(argFoo, argBar) { // Original name: watchStream
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = argBar;
            tangon = _closure1_slot4;
            zuuluu = tangon.getRemoteSessionId;
            zuuluu = zuuluu.bind(tangon)();
            oscard = null;
            if(!(oscard == zuuluu)) { _fun00004_ip = 269; continue _fun00003 }
 32:
            zuuluu = entity.guildId;
            offset = entity.channelId;
            if(!(oscard != zuuluu)) { _fun00004_ip = 64; continue _fun00003 }
 46:
            tangon = _closure1_slot18;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)(zuuluu, offset);
            if(zuuluu) { _fun00004_ip = 269; continue _fun00003 }
 64:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 13;
            zuuluu = report[zuuluu];
            report = undefined;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.encodeStreamKey;
            tangon = zuuluu.bind(tangon)(entity);
            option = oscard == golfie;
            zuuluu = undefined;
            if(option) { _fun00004_ip = 112; continue _fun00003 }
 106:
            zuuluu = golfie.forceMultiple;
 112:
            if(zuuluu) { _fun00004_ip = 160; continue _fun00003 }
 115:
            verify = _closure1_slot7;
            option = verify.getAllActiveStreamsForChannel;
            offset = option.bind(verify)(offset);
            verify = offset.filter;
            option = function(argFoo) {
                entity = argFoo;
                michal = entity.ownerId;
                zuuluu = _closure1_slot8;
                entity = zuuluu.getId;
                entity = entity.bind(zuuluu)();
                entity = michal !== entity;
                return entity;
            };
            option = verify.bind(offset)(option);
            verify = option.length;
            option = _closure1_slot17;
            zuuluu = verify >= option;
 160:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            option = 12;
            option = offset[option];
            offset = verify.bind(report)(option);
            verify = offset.dispatch;
            option = {};
            yankee = 'STREAM_WATCH';
            option['type'] = yankee;
            option['streamKey'] = tangon;
            option['allowMultiple'] = zuuluu;
            option = verify.bind(offset)(option);
            if(zuuluu) { _fun00004_ip = 229; continue _fun00003 }
 213:
            oscard = oscard != golfie;
            if(!oscard) { _fun00004_ip = 226; continue _fun00003 }
 220:
            oscard = golfie.noFocus;
 226:
            zuuluu = oscard;
 229:
            if(zuuluu) { _fun00004_ip = 269; continue _fun00003 }
 232:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 16;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.selectParticipant;
            entity = entity.channelId;
            entity = michal.bind(zuuluu)(entity, tangon);
 269:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot19 = golfie;
    oscard = function(argFoo, argBar) { // Original name: watchStreamAndTransitionToStream
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.guildId;
            oscard = zuuluu.channelId;
            entity = null;
            if(!(entity != michal)) { _fun00006_ip = 37; continue _fun00005 }
 19:
            michal = _closure1_slot18;
            entity = undefined;
            entity = michal.bind(entity)(entity, oscard);
            if(entity) { _fun00006_ip = 131; continue _fun00005 }
 37:
            report = _closure1_slot19;
            michal = undefined;
            tangon = argBar;
            tangon = report.bind(michal)(zuuluu, tangon);
            golfie = _closure1_slot5;
            report = golfie.getWindowOpen;
            tangon = _closure1_slot15;
            tangon = tangon.CHANNEL_CALL_POPOUT;
            tangon = report.bind(golfie)(tangon);
            golfie = _closure1_slot11;
            report = golfie.getVoiceChannelId;
            report = report.bind(golfie)();
            if(!tangon) { _fun00006_ip = 103; continue _fun00005 }
 99:
            tangon = report === oscard;
 103:
            if(tangon) { _fun00006_ip = 131; continue _fun00005 }
 106:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 17;
            entity = report[entity];
            entity = tangon.bind(michal)(entity);
            entity = entity.bind(michal)(zuuluu);
 131:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot20 = oscard;
    report = function(argFoo) { // Original name: stopStream
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            zuuluu = arguments[1];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            zuuluu = true;
 14:
            michal = _closure1_slot22;
            michal = michal.bind(entity)(oscard, zuuluu);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 12;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            golfie = 'STREAM_STOP';
            michal['type'] = golfie;
            michal['streamKey'] = oscard;
            report = _closure1_slot14;
            report = report.APP;
            michal['appContext'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot21 = report;
    tangon = function(argFoo) { // Original name: closeStream
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00010_ip = 11; continue _fun00009 }
 9:
            report = true;
 11:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 12;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'STREAM_CLOSE';
            michal['type'] = oscard;
            oscard = argFoo;
            michal['streamKey'] = oscard;
            michal['canShowFeedback'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot22 = tangon;
    entity = function() { // Original name: _fetchStreamPreview
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    backup = argFoo;
                    foxtra = argBar;
                    verify = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 489; continue _fun00011 }
 19:
                    romeon = backup;
                    yankee = foxtra;
                    offset = verify;
                    michal = undefined;
                    golfie = undefined;
                    oscard = undefined;
                    option = _closure1_slot6;
                    report = option.shouldFetchPreview;
                    report = report.bind(option)(backup, foxtra, verify);
                    if(!report) { _fun00012_ip = 486; continue _fun00011 }
 60:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 13;
                    report = verify[report];
                    verify = option.bind(michal)(report);
                    option = verify.encodeStreamKey;
                    report = {};
                    backup = romeon;
                    foxtra = null;
                    if(!(foxtra == backup)) { _fun00012_ip = 109; continue _fun00011 }
 97:
                    foxtra = _closure1_slot16;
                    foxtra = foxtra.CALL;
                    _fun00012_ip = 119; continue _fun00011;
 109:
                    backup = _closure1_slot16;
                    foxtra = backup.GUILD;
 119:
                    report['streamType'] = foxtra;
                    report['guildId'] = romeon;
                    report['channelId'] = yankee;
                    report['ownerId'] = offset;
                    yankee = option.bind(verify)(report);
                    golfie = yankee;
                    verify = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 12;
                    option = option[report];
                    offset = verify.bind(michal)(option);
                    verify = offset.dispatch;
                    option = {};
                    romeon = 'STREAM_PREVIEW_FETCH_START';
                    option['type'] = romeon;
                    option['streamKey'] = yankee;
                    option = verify.bind(offset)(option);
 192: // try_start_0
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 18;
                    option = offset[option];
                    option = verify.bind(michal)(option);
                    offset = option.HTTP;
                    verify = offset.get;
                    option = {};
                    foxtra = _closure1_slot13;
                    romeon = foxtra.STREAM_PREVIEW;
                    yankee = golfie;
                    yankee = romeon.bind(foxtra)(yankee);
                    option['url'] = yankee;
                    yankee = {};
                    romeon = global;
                    foxtra = romeon.Date;
                    romeon = foxtra.now;
                    romeon = romeon.bind(foxtra)();
                    yankee['version'] = romeon;
                    option['query'] = yankee;
                    yankee = true;
                    option['oldFormErrors'] = yankee;
                    yankee = false;
                    option['rejectWithError'] = yankee;
                    option = verify.bind(offset)(option);
                    SaveGenerator(address=297);
 295:
                    return option;
 297:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00012_ip = 367; continue _fun00011 }
 303:
                    offset = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[report];
                    yankee = offset.bind(michal)(verify);
                    offset = yankee.dispatch;
                    verify = {};
                    romeon = 'STREAM_PREVIEW_FETCH_SUCCESS';
                    verify['type'] = romeon;
                    romeon = golfie;
                    verify['streamKey'] = romeon;
                    romeon = option.body;
                    romeon = romeon.url;
                    verify['previewURL'] = romeon;
                    verify = offset.bind(yankee)(verify);
 365: // try_end0
                    _fun00012_ip = 486; continue _fun00011;
 367:
                    return option;
 370: // catch_target0
                    CatchBlockStart(arg_register=7);
                    tangon = option;
                    verify = option.status;
                    option = 429;
                    if(!(option === verify)) { _fun00012_ip = 437; continue _fun00011 }
 390:
                    tangon = tangon.body;
                    option = tangon.retry_after;
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    tangon = 19;
                    tangon = offset[tangon];
                    tangon = verify.bind(michal)(tangon);
                    tangon = tangon.Millis;
                    tangon = tangon.SECOND;
                    oscard = option * tangon;
 437:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    option = 'STREAM_PREVIEW_FETCH_FAIL';
                    zuuluu['type'] = option;
                    zuuluu['streamKey'] = golfie;
                    zuuluu['retryAfter'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 486:
                    return michal;
 489:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot23 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: _notifyStreamStart
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 143; continue _fun00013 }
 10:
                    report = argFoo;
 13: // try_start_0
                    zuuluu = _closure1_slot1;
                    offset = _closure1_slot2;
                    michal = 20;
                    michal = offset[michal];
                    verify = undefined;
                    tangon = zuuluu.bind(verify)(michal);
                    zuuluu = tangon.post;
                    michal = {};
                    option = _closure1_slot13;
                    oscard = option.STREAM_NOTIFY;
                    report = oscard.bind(option)(report);
                    michal['url'] = report;
                    report = true;
                    michal['oldFormErrors'] = report;
                    oscard = {};
                    option = _closure1_slot0;
                    golfie = 21;
                    golfie = offset[golfie];
                    golfie = option.bind(verify)(golfie);
                    golfie = golfie.NetworkActionNames;
                    golfie = golfie.STREAM_NOTIFY;
                    oscard['event'] = golfie;
                    michal['trackedActionData'] = oscard;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=125);
 123:
                    return michal;
 125:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 133; continue _fun00013 }
 131: // try_end0
                    _fun00014_ip = 138; continue _fun00013;
 133:
                    return michal;
 136: // catch_target0
                    CatchBlockStart(arg_register=1);
 138:
                    michal = undefined;
                    return michal;
 143:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot24 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot24 = entity;
    option = global;
    backup = option.Object;
    foxtra = backup.defineProperty;
    yankee = {};
    entity = true;
    yankee['value'] = entity;
    entity = '__esModule';
    entity = foxtra.bind(backup)(zuuluu, entity, yankee);
    entity = 0;
    yankee = offset[entity];
    entity = undefined;
    yankee = romeon.bind(entity)(yankee);
    var _closure1_slot3 = yankee;
    yankee = 1;
    yankee = offset[yankee];
    yankee = romeon.bind(entity)(yankee);
    var _closure1_slot4 = yankee;
    yankee = 2;
    yankee = offset[yankee];
    yankee = romeon.bind(entity)(yankee);
    var _closure1_slot5 = yankee;
    yankee = 3;
    yankee = offset[yankee];
    yankee = romeon.bind(entity)(yankee);
    var _closure1_slot6 = yankee;
    yankee = 4;
    yankee = offset[yankee];
    yankee = romeon.bind(entity)(yankee);
    var _closure1_slot7 = yankee;
    yankee = 5;
    yankee = offset[yankee];
    yankee = romeon.bind(entity)(yankee);
    var _closure1_slot8 = yankee;
    yankee = 6;
    yankee = offset[yankee];
    yankee = romeon.bind(entity)(yankee);
    var _closure1_slot9 = yankee;
    yankee = 7;
    yankee = offset[yankee];
    yankee = romeon.bind(entity)(yankee);
    var _closure1_slot10 = yankee;
    yankee = 8;
    yankee = offset[yankee];
    yankee = romeon.bind(entity)(yankee);
    var _closure1_slot11 = yankee;
    yankee = 9;
    yankee = offset[yankee];
    yankee = romeon.bind(entity)(yankee);
    var _closure1_slot12 = yankee;
    yankee = 10;
    yankee = offset[yankee];
    yankee = verify.bind(entity)(yankee);
    romeon = yankee.Endpoints;
    var _closure1_slot13 = romeon;
    romeon = yankee.AppContext;
    var _closure1_slot14 = romeon;
    yankee = yankee.PopoutWindowKeys;
    var _closure1_slot15 = yankee;
    yankee = 11;
    yankee = offset[yankee];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.StreamTypes;
    var _closure1_slot16 = yankee;
    option = option.Number;
    option = option.MAX_VALUE;
    var _closure1_slot17 = option;
    option = 26;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'actions/StreamActionCreators.tsx';
    option = verify.bind(offset)(option);
    option = function(argFoo, argBar, argBaz) { // Original name: startStream
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscard = argFoo;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            golfie = 'STREAM_START';
            michal['type'] = golfie;
            golfie = null;
            if(!(golfie == oscard)) { _fun00016_ip = 61; continue _fun00015 }
 49:
            golfie = _closure1_slot16;
            golfie = golfie.CALL;
            _fun00016_ip = 71; continue _fun00015;
 61:
            option = _closure1_slot16;
            golfie = option.GUILD;
 71:
            michal['streamType'] = golfie;
            michal['guildId'] = oscard;
            oscard = argBar;
            michal['channelId'] = oscard;
            report = _closure1_slot14;
            report = report.APP;
            michal['appContext'] = report;
            verify = argBaz;
            offset = michal;
            report = copyDataProperties(offset, verify);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['startStream'] = option;
    option = function(argFoo, argBar) { // Original name: setStreamPaused
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 13;
        zuuluu = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(zuuluu);
        report = oscard.encodeStreamKey;
        zuuluu = argFoo;
        report = report.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot1;
        michal = 12;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'STREAM_SET_PAUSED';
        michal['type'] = oscard;
        michal['streamKey'] = report;
        report = argBar;
        michal['paused'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setStreamPaused'] = option;
    zuuluu['watchStream'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: toggleSelfStreamHidden
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 12;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'STREAM_UPDATE_SELF_HIDDEN';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        report = argBar;
        michal['selfStreamHidden'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['toggleSelfStreamHidden'] = golfie;
    zuuluu['watchStreamAndTransitionToStream'] = oscard;
    zuuluu['stopStream'] = report;
    zuuluu['closeStream'] = tangon;
    tangon = function() { // Original name: fetchStreamPreview
        entity = undefined;
        tangon = _closure1_slot23;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchStreamPreview'] = tangon;
    tangon = function(argFoo) { // Original name: setLayout
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 12;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'STREAM_LAYOUT_UPDATE';
        michal['type'] = report;
        report = argFoo;
        michal['layout'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setLayout'] = tangon;
    tangon = function(argFoo) { // Original name: setHackyMacMode
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 12;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'STREAM_SET_HACKY_MAC_MODE';
        michal['type'] = report;
        report = argFoo;
        michal['enabled'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setHackyMacMode'] = tangon;
    tangon = function() { // Original name: notifyStreamStart
        entity = undefined;
        tangon = _closure1_slot24;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['notifyStreamStart'] = tangon;
    tangon = function(argFoo) { // Original name: updateStreamSettings
        report = argFoo;
        oscard = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 22;
        zuuluu = tangon[entity];
        entity = undefined;
        verify = oscard.bind(entity)(zuuluu);
        option = verify.trackStreamSettingsUpdate;
        golfie = report.preset;
        oscard = report.resolution;
        zuuluu = report.frameRate;
        zuuluu = option.bind(verify)(golfie, oscard, zuuluu);
        zuuluu = _closure1_slot1;
        michal = 12;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'STREAM_UPDATE_SETTINGS';
        michal['type'] = oscard;
        romeon = michal;
        yankee = report;
        report = copyDataProperties(romeon, yankee);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateStreamSettings'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: changeStreamRegion
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 18;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.HTTP;
        zuuluu = tangon.patch;
        michal = {};
        golfie = _closure1_slot13;
        oscard = golfie.STREAM;
        report = argFoo;
        report = oscard.bind(golfie)(report);
        michal['url'] = report;
        report = {};
        oscard = argBar;
        report['region'] = oscard;
        michal['body'] = report;
        report = true;
        michal['oldFormErrors'] = report;
        michal['rejectWithError'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['changeStreamRegion'] = tangon;
    tangon = function() { // Original name: stopOwnStream
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = arguments[0];
            entity = undefined;
            if(!(tangon === entity)) { _fun00018_ip = 11; continue _fun00017 }
 9:
            tangon = true;
 11:
            report = _closure1_slot7;
            zuuluu = report.getCurrentUserActiveStream;
            oscard = zuuluu.bind(report)();
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00018_ip = 75; continue _fun00017 }
 34:
            zuuluu = _closure1_slot21;
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 13;
            michal = golfie[michal];
            report = report.bind(entity)(michal);
            michal = report.encodeStreamKey;
            michal = michal.bind(report)(oscard);
            michal = zuuluu.bind(entity)(michal, tangon);
 75:
            return entity;
        }
    };
    zuuluu['stopOwnStream'] = tangon;
    michal = function(argFoo, argBar) { // Original name: joinPrivateChannelAndWatchStream
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            tangon = _closure1_slot8;
            entity = tangon.getId;
            report = entity.bind(tangon)();
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 13;
            tangon = tangon[entity];
            entity = undefined;
            option = golfie.bind(entity)(tangon);
            golfie = option.decodeStreamKey;
            tangon = argBar;
            tangon = golfie.bind(option)(tangon);
            var _closure2_slot1 = tangon;
            golfie = _closure1_slot11;
            tangon = golfie.getVoiceChannelId;
            golfie = tangon.bind(golfie)();
            tangon = null;
            tangon = tangon != golfie;
            if(!tangon) { _fun00020_ip = 93; continue _fun00019 }
 89:
            tangon = golfie !== oscard;
 93:
            if(!tangon) { _fun00020_ip = 126; continue _fun00019 }
 96:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 23;
            tangon = option[tangon];
            golfie = golfie.bind(entity)(tangon);
            tangon = golfie.disconnect;
            tangon = tangon.bind(golfie)();
 126:
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 24;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.addRecipient;
            verify = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 25;
                michal = michal[entity];
                entity = undefined;
                golfie = zuuluu.bind(entity)(michal);
                oscard = golfie.call;
                romeon = _closure2_slot0;
                verify = null;
                option = function() {
                    zuuluu = _closure1_slot20;
                    michal = _closure2_slot1;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                foxtra = golfie;
                yankee = false;
                offset = false;
                michal = foxtra[oscard](romeon, yankee, offset, verify, option, golfie);
                return entity;
            };
            foxtra = tangon;
            romeon = oscard;
            yankee = report;
            offset = undefined;
            michal = foxtra[zuuluu](romeon, yankee, offset, verify, option);
            return entity;
        }
    };
    zuuluu['joinPrivateChannelAndWatchStream'] = michal;
    return entity;
})();