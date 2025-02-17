// app/actions/StreamActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    romeo = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: isVoiceChannelFull
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argBar;
            zulu = _closure1_slot9;
            entity = zulu.getChannel;
            oscar = entity.bind(zulu)(tango);
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            entity = 14;
            entity = report[entity];
            report = undefined;
            golf = zulu.bind(report)(entity);
            entity = null;
            zulu = entity != oscar;
            entity = 'Cannot join a null voice channel';
            entity = golf.bind(report)(zulu, entity);
            zulu = _closure1_slot12;
            entity = zulu.isInChannel;
            entity = entity.bind(zulu)(tango);
            entity = !entity;
            if(!entity) { _fun00002_ip = 122; continue _fun00001 }
 81:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 15;
            zulu = golf[zulu];
            report = tango.bind(report)(zulu);
            tango = report.isChannelFull;
            zulu = _closure1_slot12;
            mike = _closure1_slot10;
            entity = tango.bind(report)(oscar, zulu, mike);
 122:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    golf = function(argFoo, argBar) { // Original name: watchStream
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golf = argBar;
            tango = _closure1_slot4;
            zulu = tango.getRemoteSessionId;
            zulu = zulu.bind(tango)();
            oscar = null;
            if(!(oscar == zulu)) { _fun00004_ip = 269; continue _fun00003 }
 32:
            zulu = entity.guildId;
            offset = entity.channelId;
            if(!(oscar != zulu)) { _fun00004_ip = 64; continue _fun00003 }
 46:
            tango = _closure1_slot18;
            zulu = undefined;
            zulu = tango.bind(zulu)(zulu, offset);
            if(zulu) { _fun00004_ip = 269; continue _fun00003 }
 64:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 13;
            zulu = report[zulu];
            report = undefined;
            tango = tango.bind(report)(zulu);
            zulu = tango.encodeStreamKey;
            tango = zulu.bind(tango)(entity);
            options = oscar == golf;
            zulu = undefined;
            if(options) { _fun00004_ip = 112; continue _fun00003 }
 106:
            zulu = golf.forceMultiple;
 112:
            if(zulu) { _fun00004_ip = 160; continue _fun00003 }
 115:
            verify = _closure1_slot7;
            options = verify.getAllActiveStreamsForChannel;
            offset = options.bind(verify)(offset);
            verify = offset.filter;
            options = function(argFoo) {
                entity = argFoo;
                mike = entity.ownerId;
                zulu = _closure1_slot8;
                entity = zulu.getId;
                entity = entity.bind(zulu)();
                entity = mike !== entity;
                return entity;
            };
            options = verify.bind(offset)(options);
            verify = options.length;
            options = _closure1_slot17;
            zulu = verify >= options;
 160:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            options = 12;
            options = offset[options];
            offset = verify.bind(report)(options);
            verify = offset.dispatch;
            options = {};
            yankee = 'STREAM_WATCH';
            options['type'] = yankee;
            options['streamKey'] = tango;
            options['allowMultiple'] = zulu;
            options = verify.bind(offset)(options);
            if(zulu) { _fun00004_ip = 229; continue _fun00003 }
 213:
            oscar = oscar != golf;
            if(!oscar) { _fun00004_ip = 226; continue _fun00003 }
 220:
            oscar = golf.noFocus;
 226:
            zulu = oscar;
 229:
            if(zulu) { _fun00004_ip = 269; continue _fun00003 }
 232:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 16;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.selectParticipant;
            entity = entity.channelId;
            entity = mike.bind(zulu)(entity, tango);
 269:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot19 = golf;
    oscar = function(argFoo, argBar) { // Original name: watchStreamAndTransitionToStream
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            mike = zulu.guildId;
            oscar = zulu.channelId;
            entity = null;
            if(!(entity != mike)) { _fun00006_ip = 37; continue _fun00005 }
 19:
            mike = _closure1_slot18;
            entity = undefined;
            entity = mike.bind(entity)(entity, oscar);
            if(entity) { _fun00006_ip = 131; continue _fun00005 }
 37:
            report = _closure1_slot19;
            mike = undefined;
            tango = argBar;
            tango = report.bind(mike)(zulu, tango);
            golf = _closure1_slot5;
            report = golf.getWindowOpen;
            tango = _closure1_slot15;
            tango = tango.CHANNEL_CALL_POPOUT;
            tango = report.bind(golf)(tango);
            golf = _closure1_slot11;
            report = golf.getVoiceChannelId;
            report = report.bind(golf)();
            if(!tango) { _fun00006_ip = 103; continue _fun00005 }
 99:
            tango = report === oscar;
 103:
            if(tango) { _fun00006_ip = 131; continue _fun00005 }
 106:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 17;
            entity = report[entity];
            entity = tango.bind(mike)(entity);
            entity = entity.bind(mike)(zulu);
 131:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot20 = oscar;
    report = function(argFoo) { // Original name: stopStream
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscar = argFoo;
            zulu = arguments[1];
            entity = undefined;
            if(!(zulu === entity)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            zulu = true;
 14:
            mike = _closure1_slot22;
            mike = mike.bind(entity)(oscar, zulu);
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 12;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'STREAM_STOP';
            mike['type'] = golf;
            mike['streamKey'] = oscar;
            report = _closure1_slot14;
            report = report.APP;
            mike['appContext'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot21 = report;
    tango = function(argFoo) { // Original name: closeStream
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00010_ip = 11; continue _fun00009 }
 9:
            report = true;
 11:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 12;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'STREAM_CLOSE';
            mike['type'] = oscar;
            oscar = argFoo;
            mike['streamKey'] = oscar;
            mike['canShowFeedback'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot22 = tango;
    entity = function() { // Original name: _fetchStreamPreview
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    backup = argFoo;
                    foxtrot = argBar;
                    verify = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00012_ip = 488; continue _fun00011 }
 19:
                    romeo = backup;
                    yankee = foxtrot;
                    offset = verify;
                    mike = undefined;
                    golf = undefined;
                    oscar = undefined;
                    options = _closure1_slot6;
                    report = options.shouldFetchPreview;
                    report = report.bind(options)(backup, foxtrot, verify);
                    if(!report) { _fun00012_ip = 485; continue _fun00011 }
 60:
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 13;
                    report = verify[report];
                    verify = options.bind(mike)(report);
                    options = verify.encodeStreamKey;
                    report = {};
                    backup = romeo;
                    foxtrot = null;
                    if(!(foxtrot == backup)) { _fun00012_ip = 109; continue _fun00011 }
 97:
                    foxtrot = _closure1_slot16;
                    foxtrot = foxtrot.CALL;
                    _fun00012_ip = 119; continue _fun00011;
 109:
                    backup = _closure1_slot16;
                    foxtrot = backup.GUILD;
 119:
                    report['streamType'] = foxtrot;
                    report['guildId'] = romeo;
                    report['channelId'] = yankee;
                    report['ownerId'] = offset;
                    yankee = options.bind(verify)(report);
                    golf = yankee;
                    verify = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 12;
                    options = options[report];
                    offset = verify.bind(mike)(options);
                    verify = offset.dispatch;
                    options = {};
                    romeo = 'STREAM_PREVIEW_FETCH_START';
                    options['type'] = romeo;
                    options['streamKey'] = yankee;
                    options = verify.bind(offset)(options);
 192: // try_start_0
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 18;
                    options = offset[options];
                    options = verify.bind(mike)(options);
                    offset = options.HTTP;
                    verify = offset.get;
                    options = {};
                    foxtrot = _closure1_slot13;
                    romeo = foxtrot.STREAM_PREVIEW;
                    yankee = golf;
                    yankee = romeo.bind(foxtrot)(yankee);
                    options['url'] = yankee;
                    yankee = {};
                    romeo = global;
                    foxtrot = romeo.Date;
                    romeo = foxtrot.now;
                    romeo = romeo.bind(foxtrot)();
                    yankee['version'] = romeo;
                    options['query'] = yankee;
                    yankee = true;
                    options['oldFormErrors'] = yankee;
                    yankee = false;
                    options['rejectWithError'] = yankee;
                    options = verify.bind(offset)(options);
                    SaveGenerator(address=296);
 294:
                    return options;
 296:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00012_ip = 366; continue _fun00011 }
 302:
                    offset = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[report];
                    yankee = offset.bind(mike)(verify);
                    offset = yankee.dispatch;
                    verify = {};
                    romeo = 'STREAM_PREVIEW_FETCH_SUCCESS';
                    verify['type'] = romeo;
                    romeo = golf;
                    verify['streamKey'] = romeo;
                    romeo = options.body;
                    romeo = romeo.url;
                    verify['previewURL'] = romeo;
                    verify = offset.bind(yankee)(verify);
 364: // try_end0
                    _fun00012_ip = 485; continue _fun00011;
 366:
                    return options;
 369: // catch_target0
                    CatchBlockStart(arg_register=7);
                    tango = options;
                    verify = options.status;
                    options = 429;
                    if(!(options === verify)) { _fun00012_ip = 436; continue _fun00011 }
 389:
                    tango = tango.body;
                    options = tango.retry_after;
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    tango = 19;
                    tango = offset[tango];
                    tango = verify.bind(mike)(tango);
                    tango = tango.Millis;
                    tango = tango.SECOND;
                    oscar = options * tango;
 436:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    options = 'STREAM_PREVIEW_FETCH_FAIL';
                    zulu['type'] = options;
                    zulu['streamKey'] = golf;
                    zulu['retryAfter'] = oscar;
                    zulu = tango.bind(report)(zulu);
 485:
                    return mike;
 488:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot23 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: _notifyStreamStart
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00014_ip = 143; continue _fun00013 }
 10:
                    report = argFoo;
 13: // try_start_0
                    zulu = _closure1_slot1;
                    offset = _closure1_slot2;
                    mike = 20;
                    mike = offset[mike];
                    verify = undefined;
                    tango = zulu.bind(verify)(mike);
                    zulu = tango.post;
                    mike = {};
                    options = _closure1_slot13;
                    oscar = options.STREAM_NOTIFY;
                    report = oscar.bind(options)(report);
                    mike['url'] = report;
                    report = true;
                    mike['oldFormErrors'] = report;
                    oscar = {};
                    options = _closure1_slot0;
                    golf = 21;
                    golf = offset[golf];
                    golf = options.bind(verify)(golf);
                    golf = golf.NetworkActionNames;
                    golf = golf.STREAM_NOTIFY;
                    oscar['event'] = golf;
                    mike['trackedActionData'] = oscar;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=125);
 123:
                    return mike;
 125:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00014_ip = 133; continue _fun00013 }
 131: // try_end0
                    _fun00014_ip = 138; continue _fun00013;
 133:
                    return mike;
 136: // catch_target0
                    CatchBlockStart(arg_register=1);
 138:
                    mike = undefined;
                    return mike;
 143:
                    return entity;
                }
            };
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
    options = global;
    backup = options.Object;
    foxtrot = backup.defineProperty;
    yankee = {};
    entity = true;
    yankee['value'] = entity;
    entity = '__esModule';
    entity = foxtrot.bind(backup)(zulu, entity, yankee);
    entity = 0;
    yankee = offset[entity];
    entity = undefined;
    yankee = romeo.bind(entity)(yankee);
    var _closure1_slot3 = yankee;
    yankee = 1;
    yankee = offset[yankee];
    yankee = romeo.bind(entity)(yankee);
    var _closure1_slot4 = yankee;
    yankee = 2;
    yankee = offset[yankee];
    yankee = romeo.bind(entity)(yankee);
    var _closure1_slot5 = yankee;
    yankee = 3;
    yankee = offset[yankee];
    yankee = romeo.bind(entity)(yankee);
    var _closure1_slot6 = yankee;
    yankee = 4;
    yankee = offset[yankee];
    yankee = romeo.bind(entity)(yankee);
    var _closure1_slot7 = yankee;
    yankee = 5;
    yankee = offset[yankee];
    yankee = romeo.bind(entity)(yankee);
    var _closure1_slot8 = yankee;
    yankee = 6;
    yankee = offset[yankee];
    yankee = romeo.bind(entity)(yankee);
    var _closure1_slot9 = yankee;
    yankee = 7;
    yankee = offset[yankee];
    yankee = romeo.bind(entity)(yankee);
    var _closure1_slot10 = yankee;
    yankee = 8;
    yankee = offset[yankee];
    yankee = romeo.bind(entity)(yankee);
    var _closure1_slot11 = yankee;
    yankee = 9;
    yankee = offset[yankee];
    yankee = romeo.bind(entity)(yankee);
    var _closure1_slot12 = yankee;
    yankee = 10;
    yankee = offset[yankee];
    yankee = verify.bind(entity)(yankee);
    romeo = yankee.Endpoints;
    var _closure1_slot13 = romeo;
    romeo = yankee.AppContext;
    var _closure1_slot14 = romeo;
    yankee = yankee.PopoutWindowKeys;
    var _closure1_slot15 = yankee;
    yankee = 11;
    yankee = offset[yankee];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.StreamTypes;
    var _closure1_slot16 = yankee;
    options = options.Number;
    options = options.MAX_VALUE;
    var _closure1_slot17 = options;
    options = 26;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'actions/StreamActionCreators.tsx';
    options = verify.bind(offset)(options);
    options = function(argFoo, argBar, argBaz) { // Original name: startStream
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscar = argFoo;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'STREAM_START';
            mike['type'] = golf;
            golf = null;
            if(!(golf == oscar)) { _fun00016_ip = 61; continue _fun00015 }
 49:
            golf = _closure1_slot16;
            golf = golf.CALL;
            _fun00016_ip = 71; continue _fun00015;
 61:
            options = _closure1_slot16;
            golf = options.GUILD;
 71:
            mike['streamType'] = golf;
            mike['guildId'] = oscar;
            oscar = argBar;
            mike['channelId'] = oscar;
            report = _closure1_slot14;
            report = report.APP;
            mike['appContext'] = report;
            verify = argBaz;
            offset = mike;
            report = copyDataProperties(offset, verify);
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['startStream'] = options;
    options = function(argFoo, argBar) { // Original name: setStreamPaused
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 13;
        zulu = tango[entity];
        entity = undefined;
        oscar = report.bind(entity)(zulu);
        report = oscar.encodeStreamKey;
        zulu = argFoo;
        report = report.bind(oscar)(zulu);
        zulu = _closure1_slot1;
        mike = 12;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'STREAM_SET_PAUSED';
        mike['type'] = oscar;
        mike['streamKey'] = report;
        report = argBar;
        mike['paused'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setStreamPaused'] = options;
    zulu['watchStream'] = golf;
    golf = function(argFoo, argBar) { // Original name: toggleSelfStreamHidden
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'STREAM_UPDATE_SELF_HIDDEN';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['selfStreamHidden'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['toggleSelfStreamHidden'] = golf;
    zulu['watchStreamAndTransitionToStream'] = oscar;
    zulu['stopStream'] = report;
    zulu['closeStream'] = tango;
    tango = function() { // Original name: fetchStreamPreview
        entity = undefined;
        tango = _closure1_slot23;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchStreamPreview'] = tango;
    tango = function(argFoo) { // Original name: setLayout
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'STREAM_LAYOUT_UPDATE';
        mike['type'] = report;
        report = argFoo;
        mike['layout'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setLayout'] = tango;
    tango = function(argFoo) { // Original name: setHackyMacMode
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'STREAM_SET_HACKY_MAC_MODE';
        mike['type'] = report;
        report = argFoo;
        mike['enabled'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setHackyMacMode'] = tango;
    tango = function() { // Original name: notifyStreamStart
        entity = undefined;
        tango = _closure1_slot24;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['notifyStreamStart'] = tango;
    tango = function(argFoo) { // Original name: updateStreamSettings
        report = argFoo;
        oscar = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 22;
        zulu = tango[entity];
        entity = undefined;
        verify = oscar.bind(entity)(zulu);
        options = verify.trackStreamSettingsUpdate;
        golf = report.preset;
        oscar = report.resolution;
        zulu = report.frameRate;
        zulu = options.bind(verify)(golf, oscar, zulu);
        zulu = _closure1_slot1;
        mike = 12;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'STREAM_UPDATE_SETTINGS';
        mike['type'] = oscar;
        romeo = mike;
        yankee = report;
        report = copyDataProperties(romeo, yankee);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateStreamSettings'] = tango;
    tango = function(argFoo, argBar) { // Original name: changeStreamRegion
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 18;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.HTTP;
        zulu = tango.patch;
        mike = {};
        golf = _closure1_slot13;
        oscar = golf.STREAM;
        report = argFoo;
        report = oscar.bind(golf)(report);
        mike['url'] = report;
        report = {};
        oscar = argBar;
        report['region'] = oscar;
        mike['body'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        mike['rejectWithError'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['changeStreamRegion'] = tango;
    tango = function() { // Original name: stopOwnStream
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tango = arguments[0];
            entity = undefined;
            if(!(tango === entity)) { _fun00018_ip = 11; continue _fun00017 }
 9:
            tango = true;
 11:
            report = _closure1_slot7;
            zulu = report.getCurrentUserActiveStream;
            oscar = zulu.bind(report)();
            zulu = null;
            if(!(zulu != oscar)) { _fun00018_ip = 75; continue _fun00017 }
 34:
            zulu = _closure1_slot21;
            report = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 13;
            mike = golf[mike];
            report = report.bind(entity)(mike);
            mike = report.encodeStreamKey;
            mike = mike.bind(report)(oscar);
            mike = zulu.bind(entity)(mike, tango);
 75:
            return entity;
        }
    };
    zulu['stopOwnStream'] = tango;
    mike = function(argFoo, argBar) { // Original name: joinPrivateChannelAndWatchStream
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            oscar = argFoo;
            var _closure2_slot0 = oscar;
            tango = _closure1_slot8;
            entity = tango.getId;
            report = entity.bind(tango)();
            golf = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 13;
            tango = tango[entity];
            entity = undefined;
            options = golf.bind(entity)(tango);
            golf = options.decodeStreamKey;
            tango = argBar;
            tango = golf.bind(options)(tango);
            var _closure2_slot1 = tango;
            golf = _closure1_slot11;
            tango = golf.getVoiceChannelId;
            golf = tango.bind(golf)();
            tango = null;
            tango = tango != golf;
            if(!tango) { _fun00020_ip = 93; continue _fun00019 }
 89:
            tango = golf !== oscar;
 93:
            if(!tango) { _fun00020_ip = 126; continue _fun00019 }
 96:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            tango = 23;
            tango = options[tango];
            golf = golf.bind(entity)(tango);
            tango = golf.disconnect;
            tango = tango.bind(golf)();
 126:
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 24;
            zulu = golf[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.addRecipient;
            verify = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 25;
                mike = mike[entity];
                entity = undefined;
                golf = zulu.bind(entity)(mike);
                oscar = golf.call;
                romeo = _closure2_slot0;
                verify = null;
                options = function() {
                    zulu = _closure1_slot20;
                    mike = _closure2_slot1;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                foxtrot = golf;
                yankee = false;
                offset = false;
                mike = foxtrot[oscar](romeo, yankee, offset, verify, options, golf);
                return entity;
            };
            foxtrot = tango;
            romeo = oscar;
            yankee = report;
            offset = undefined;
            mike = foxtrot[zulu](romeo, yankee, offset, verify, options);
            return entity;
        }
    };
    zulu['joinPrivateChannelAndWatchStream'] = mike;
    return entity;
})();