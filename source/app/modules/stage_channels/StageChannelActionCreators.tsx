// app/modules/stage_channels/StageChannelActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = options;
    report = function(argFoo, argBar) { // Original name: audienceAckRequestToSpeak
        _fun67658: for(var _fun67658_ip = 0; ; ) switch(_fun67658_ip) {
 0:
            report = argFoo;
            options = argBar;
            golf = arguments[2];
            zulu = undefined;
            if(!(golf === zulu)) { _fun67658_ip = 17; continue _fun67658 }
 15:
            golf = false;
 17:
            oscar = null;
            entity = oscar == report;
            offset = undefined;
            if(entity) { _fun67658_ip = 38; continue _fun67658 }
 28:
            entity = report.getGuildId;
            offset = entity.bind(report)();
 38:
            mike = _closure1_slot1;
            yankee = _closure1_slot3;
            entity = 4;
            entity = yankee[entity];
            verify = mike.bind(zulu)(entity);
            mike = oscar != offset;
            entity = 'This channel cannot be guildless.';
            entity = verify.bind(zulu)(mike, entity);
            verify = _closure1_slot6;
            mike = verify.getVoiceStateForChannel;
            entity = report.id;
            foxtrot = mike.bind(verify)(entity);
            verify = _closure1_slot0;
            entity = 8;
            mike = yankee[entity];
            romeo = verify.bind(zulu)(mike);
            mike = romeo.getAudienceRequestToSpeakState;
            mike = mike.bind(romeo)(foxtrot);
            entity = yankee[entity];
            entity = verify.bind(zulu)(entity);
            entity = entity.RequestToSpeakStates;
            entity = entity.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            entity = mike !== entity;
            if(entity) { _fun67658_ip = 155; continue _fun67658 }
 152:
            entity = options;
 155:
            if(entity) { _fun67658_ip = 232; continue _fun67658 }
 158:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot3;
            entity = 5;
            entity = backup[entity];
            yankee = foxtrot.bind(zulu)(entity);
            verify = yankee.trackWithMetadata;
            entity = _closure1_slot7;
            mike = entity.PROMOTED_TO_SPEAKER;
            entity = {};
            romeo = 6;
            romeo = backup[romeo];
            foxtrot = foxtrot.bind(zulu)(romeo);
            romeo = foxtrot.getStageChannelMetadata;
            kilo = romeo.bind(foxtrot)(report);
            sizing = entity;
            romeo = copyDataProperties(sizing, kilo);
            entity = verify.bind(yankee)(mike, entity);
 232:
            mike = _closure1_slot0;
            verify = _closure1_slot3;
            entity = 7;
            entity = verify[entity];
            entity = mike.bind(zulu)(entity);
            zulu = entity.HTTP;
            mike = zulu.patch;
            entity = {};
            verify = _closure1_slot8;
            tango = verify.UPDATE_VOICE_STATE;
            tango = tango.bind(verify)(offset);
            entity['url'] = tango;
            tango = {};
            tango['suppress'] = options;
            tango['request_to_speak_timestamp'] = oscar;
            report = report.id;
            tango['channel_id'] = report;
            if(golf) { _fun67658_ip = 312; continue _fun67658 }
 308:
            report = {};
            _fun67658_ip = 322; continue _fun67658;
 312:
            oscar = {};
            oscar['silent'] = golf;
            report = oscar;
 322:
            sizing = tango;
            kilo = report;
            report = copyDataProperties(sizing, kilo);
            entity['body'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot9 = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: setUserSuppress
        report = argFoo;
        entity = report.getGuildId;
        options = entity.bind(report)();
        mike = _closure1_slot1;
        oscar = _closure1_slot3;
        entity = 4;
        entity = oscar[entity];
        zulu = undefined;
        golf = mike.bind(zulu)(entity);
        entity = null;
        mike = entity != options;
        entity = 'This channel cannot be guildless.';
        entity = golf.bind(zulu)(mike, entity);
        mike = _closure1_slot0;
        entity = 7;
        entity = oscar[entity];
        entity = mike.bind(zulu)(entity);
        zulu = entity.HTTP;
        mike = zulu.patch;
        entity = {};
        golf = _closure1_slot8;
        oscar = golf.UPDATE_VOICE_STATE;
        tango = argBar;
        tango = oscar.bind(golf)(options, tango);
        entity['url'] = tango;
        tango = {};
        oscar = argBaz;
        tango['suppress'] = oscar;
        report = report.id;
        tango['channel_id'] = report;
        entity['body'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot10 = tango;
    entity = function() { // Original name: _startStage
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar, argBaz, argCorge) {
            entity = function* (argFoo, argBar, argBaz, argCorge) { // Original name: ?anon_0_
                _fun67662: for(var _fun67662_ip = 0; ; ) switch(_fun67662_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    offset = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67662_ip = 168; continue _fun67662 }
 16:
                    mike = '';
                    if(!(mike === offset)) { _fun67662_ip = 29; continue _fun67662 }
 24:
                    mike = undefined;
                    return mike;
 29:
                    tango = _closure1_slot5;
                    mike = tango.getVoiceChannelId;
                    tango = mike.bind(tango)();
                    mike = golf.id;
                    if(!(tango !== mike)) { _fun67662_ip = 88; continue _fun67662 }
 55:
                    report = _closure1_slot0;
                    tango = _closure1_slot3;
                    mike = 14;
                    tango = tango[mike];
                    mike = undefined;
                    tango = report.bind(mike)(tango);
                    mike = tango.connectToStage;
                    mike = mike.bind(tango)(golf);
 88:
                    tango = _closure1_slot0;
                    report = _closure1_slot3;
                    mike = 15;
                    mike = report[mike];
                    oscar = undefined;
                    verify = tango.bind(oscar)(mike);
                    options = verify.startStageInstance;
                    backup = golf.id;
                    romeo = argBaz;
                    yankee = argCorge;
                    kilo = verify;
                    foxtrot = offset;
                    mike = kilo[options](backup, foxtrot, romeo, yankee, offset);
                    SaveGenerator(address=141);
 139:
                    return mike;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun67662_ip = 165; continue _fun67662 }
 147:
                    report = _closure1_slot9;
                    tango = false;
                    zulu = true;
                    zulu = report.bind(oscar)(golf, tango, zulu);
                    return mike;
 165:
                    return mike;
 168:
                    return entity;
                }
            };
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
    entity = function() { // Original name: _editStage
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun67665: for(var _fun67665_ip = 0; ; ) switch(_fun67665_ip) {
 0:
                    StartGenerator();
                    oscar = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67665_ip = 88; continue _fun67665 }
 10:
                    mike = '';
                    if(!(mike === oscar)) { _fun67665_ip = 23; continue _fun67665 }
 18:
                    mike = undefined;
                    return mike;
 23:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 15;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.updateStageInstance;
                    mike = argFoo;
                    zulu = mike.id;
                    mike = argBaz;
                    mike = tango.bind(report)(zulu, oscar, mike);
                    SaveGenerator(address=76);
 74:
                    return mike;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun67665_ip = 85; continue _fun67665 }
 82:
                    return mike;
 85:
                    return mike;
 88:
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
    entity = function() { // Original name: _endStage
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun67668: for(var _fun67668_ip = 0; ; ) switch(_fun67668_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67668_ip = 67; continue _fun67668 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    mike = 15;
                    mike = zulu[mike];
                    zulu = undefined;
                    report = tango.bind(zulu)(mike);
                    tango = report.endStageInstance;
                    mike = argFoo;
                    mike = mike.id;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=55);
 53:
                    return mike;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun67668_ip = 64; continue _fun67668 }
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
        _closure1_slot13 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
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
    var _closure1_slot4 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.AnalyticEvents;
    var _closure1_slot7 = verify;
    oscar = oscar.Endpoints;
    var _closure1_slot8 = oscar;
    oscar = 16;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/stage_channels/StageChannelActionCreators.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo, argBar) { // Original name: toggleRequestToSpeak
        _fun67669: for(var _fun67669_ip = 0; ; ) switch(_fun67669_ip) {
 0:
            report = argFoo;
            golf = argBar;
            entity = report.getGuildId;
            verify = entity.bind(report)();
            mike = _closure1_slot1;
            zulu = _closure1_slot3;
            entity = 4;
            entity = zulu[entity];
            zulu = undefined;
            options = mike.bind(zulu)(entity);
            oscar = null;
            mike = oscar != verify;
            entity = 'This channel cannot be guildless.';
            entity = options.bind(zulu)(mike, entity);
            if(!golf) { _fun67669_ip = 136; continue _fun67669 }
 62:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot3;
            entity = 5;
            entity = foxtrot[entity];
            offset = romeo.bind(zulu)(entity);
            options = offset.trackWithMetadata;
            entity = _closure1_slot7;
            mike = entity.REQUEST_TO_SPEAK_INITIATED;
            entity = {};
            yankee = 6;
            yankee = foxtrot[yankee];
            romeo = romeo.bind(zulu)(yankee);
            yankee = romeo.getStageChannelMetadata;
            backup = yankee.bind(romeo)(report);
            kilo = entity;
            yankee = copyDataProperties(kilo, backup);
            entity = options.bind(offset)(mike, entity);
 136:
            mike = _closure1_slot0;
            options = _closure1_slot3;
            entity = 7;
            entity = options[entity];
            entity = mike.bind(zulu)(entity);
            zulu = entity.HTTP;
            mike = zulu.patch;
            entity = {};
            options = _closure1_slot8;
            tango = options.UPDATE_VOICE_STATE;
            tango = tango.bind(options)(verify);
            entity['url'] = tango;
            tango = {};
            oscar = null;
            if(!golf) { _fun67669_ip = 233; continue _fun67669 }
 195:
            golf = global;
            golf = golf.Date;
            options = golf.prototype;
            options = Object.create(options, {constructor: {value: golf}});
            sizing = options;
            golf = new sizing[golf](kilo);
            options = golf instanceof Object ? golf : options;
            golf = options.toISOString;
            oscar = golf.bind(options)();
 233:
            tango['request_to_speak_timestamp'] = oscar;
            report = report.id;
            tango['channel_id'] = report;
            entity['body'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['toggleRequestToSpeak'] = oscar;
    oscar = function(argFoo, argBar) { // Original name: inviteUserToStage
        oscar = argFoo;
        entity = oscar.getGuildId;
        options = entity.bind(oscar)();
        mike = _closure1_slot1;
        report = _closure1_slot3;
        entity = 4;
        entity = report[entity];
        zulu = undefined;
        golf = mike.bind(zulu)(entity);
        entity = null;
        mike = entity != options;
        entity = 'This channel cannot be guildless.';
        entity = golf.bind(zulu)(mike, entity);
        mike = _closure1_slot0;
        entity = 7;
        entity = report[entity];
        entity = mike.bind(zulu)(entity);
        zulu = entity.HTTP;
        mike = zulu.patch;
        entity = {};
        golf = _closure1_slot8;
        report = golf.UPDATE_VOICE_STATE;
        tango = argBar;
        tango = report.bind(golf)(options, tango);
        entity['url'] = tango;
        report = {};
        tango = false;
        report['suppress'] = tango;
        golf = global;
        golf = golf.Date;
        options = golf.prototype;
        options = Object.create(options, {constructor: {value: golf}});
        yankee = options;
        golf = new yankee[golf](offset);
        options = golf instanceof Object ? golf : options;
        golf = options.toISOString;
        golf = golf.bind(options)();
        report['request_to_speak_timestamp'] = golf;
        oscar = oscar.id;
        report['channel_id'] = oscar;
        entity['body'] = report;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['inviteUserToStage'] = oscar;
    zulu['audienceAckRequestToSpeak'] = report;
    report = function(argFoo) { // Original name: moveSelfToAudience
        _fun67671: for(var _fun67671_ip = 0; ; ) switch(_fun67671_ip) {
 0:
            tango = argFoo;
            entity = null;
            mike = entity == tango;
            zulu = undefined;
            golf = undefined;
            if(mike) { _fun67671_ip = 26; continue _fun67671 }
 16:
            mike = tango.getGuildId;
            golf = mike.bind(tango)();
 26:
            options = _closure1_slot1;
            oscar = _closure1_slot3;
            mike = 4;
            mike = oscar[mike];
            options = options.bind(zulu)(mike);
            mike = entity != golf;
            entity = 'This channel cannot be guildless.';
            entity = options.bind(zulu)(mike, entity);
            mike = _closure1_slot0;
            entity = 7;
            entity = oscar[entity];
            entity = mike.bind(zulu)(entity);
            zulu = entity.HTTP;
            mike = zulu.patch;
            entity = {};
            oscar = _closure1_slot8;
            report = oscar.UPDATE_VOICE_STATE;
            report = report.bind(oscar)(golf);
            entity['url'] = report;
            report = {'suppress': true, 'channel_id': null, 'self_video': false, 'self_stream': false};
            tango = tango.id;
            report['channel_id'] = tango;
            tango = false;
            entity['body'] = report;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['moveSelfToAudience'] = report;
    zulu['setUserSuppress'] = tango;
    tango = function(argFoo, argBar) { // Original name: moveUserToAudience
        _fun67672: for(var _fun67672_ip = 0; ; ) switch(_fun67672_ip) {
 0:
            report = argFoo;
            tango = argBar;
            entity = null;
            if(!(entity != tango)) { _fun67672_ip = 16; continue _fun67672 }
 12:
            if(!(entity == report)) { _fun67672_ip = 20; continue _fun67672 }
 16:
            mike = undefined;
            return mike;
 20:
            mike = tango.getGuildId;
            options = mike.bind(tango)();
            verify = _closure1_slot1;
            golf = _closure1_slot3;
            mike = 4;
            mike = golf[mike];
            zulu = undefined;
            verify = verify.bind(zulu)(mike);
            mike = entity != options;
            entity = 'This channel cannot be guildless.';
            entity = verify.bind(zulu)(mike, entity);
            verify = _closure1_slot10;
            mike = report.id;
            entity = true;
            entity = verify.bind(zulu)(tango, mike, entity);
            mike = _closure1_slot0;
            entity = 7;
            entity = golf[entity];
            entity = mike.bind(zulu)(entity);
            zulu = entity.HTTP;
            mike = zulu.patch;
            entity = {};
            golf = _closure1_slot8;
            oscar = golf.UPDATE_VOICE_STATE;
            report = report.id;
            report = oscar.bind(golf)(options, report);
            entity['url'] = report;
            report = {'suppress': true, 'channel_id': null, 'self_video': false, 'self_stream': false};
            tango = tango.id;
            report['channel_id'] = tango;
            tango = false;
            entity['body'] = report;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['moveUserToAudience'] = tango;
    tango = function(argFoo, argBar) { // Original name: removeUserFromChannel
        _fun67673: for(var _fun67673_ip = 0; ; ) switch(_fun67673_ip) {
 0:
            mike = argFoo;
            tango = argBar;
            oscar = null;
            zulu = oscar == tango;
            entity = undefined;
            report = undefined;
            if(zulu) { _fun67673_ip = 29; continue _fun67673 }
 19:
            zulu = tango.getGuildId;
            report = zulu.bind(tango)();
 29:
            zulu = oscar != report;
            if(!zulu) { _fun67673_ip = 40; continue _fun67673 }
 36:
            zulu = oscar != mike;
 40:
            if(!zulu) { _fun67673_ip = 84; continue _fun67673 }
 43:
            tango = _closure1_slot1;
            golf = _closure1_slot3;
            zulu = 9;
            zulu = golf[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.setChannel;
            mike = mike.id;
            mike = zulu.bind(tango)(report, mike, oscar);
 84:
            return entity;
        }
    };
    zulu['removeUserFromChannel'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: setEveryoneRolePermissionAllowed
        _fun67674: for(var _fun67674_ip = 0; ; ) switch(_fun67674_ip) {
 0:
            mike = argFoo;
            options = argBar;
            entity = mike.getGuildId;
            oscar = entity.bind(mike)();
            report = _closure1_slot1;
            verify = _closure1_slot3;
            entity = 4;
            tango = verify[entity];
            entity = undefined;
            golf = report.bind(entity)(tango);
            tango = null;
            report = tango != oscar;
            tango = 'Channel cannot be guildless';
            tango = golf.bind(entity)(report, tango);
            tango = mike.permissionOverwrites;
            foxtrot = tango[oscar];
            report = {};
            report['id'] = oscar;
            golf = _closure1_slot0;
            oscar = 10;
            oscar = verify[oscar];
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.PermissionOverwriteType;
            oscar = oscar.ROLE;
            report['type'] = oscar;
            golf = _closure1_slot2;
            oscar = 11;
            offset = verify[oscar];
            offset = golf.bind(entity)(offset);
            offset = offset.NONE;
            report['allow'] = offset;
            oscar = verify[oscar];
            oscar = golf.bind(entity)(oscar);
            oscar = oscar.NONE;
            report['deny'] = oscar;
            backup = report;
            tango = copyDataProperties(backup, foxtrot);
            oscar = _closure1_slot2;
            golf = _closure1_slot3;
            tango = 12;
            verify = golf[tango];
            yankee = oscar.bind(entity)(verify);
            verify = argBaz;
            if(verify) { _fun67674_ip = 245; continue _fun67674 }
 187:
            offset = yankee.remove;
            verify = report.allow;
            verify = offset.bind(yankee)(verify, options);
            report['allow'] = verify;
            verify = golf[tango];
            romeo = oscar.bind(entity)(verify);
            offset = romeo.add;
            verify = report.deny;
            verify = offset.bind(romeo)(verify, options);
            report['deny'] = verify;
            _fun67674_ip = 301; continue _fun67674;
 245:
            offset = yankee.add;
            verify = report.allow;
            verify = offset.bind(yankee)(verify, options);
            report['allow'] = verify;
            tango = golf[tango];
            golf = oscar.bind(entity)(tango);
            oscar = golf.remove;
            tango = report.deny;
            tango = oscar.bind(golf)(tango, options);
            report['deny'] = tango;
 301:
            tango = _closure1_slot1;
            oscar = _closure1_slot3;
            zulu = 13;
            zulu = oscar[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.updatePermissionOverwrite;
            mike = mike.id;
            mike = zulu.bind(tango)(mike, report);
            return entity;
        }
    };
    zulu['setEveryoneRolePermissionAllowed'] = tango;
    tango = function() { // Original name: startStage
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['startStage'] = tango;
    tango = function() { // Original name: editStage
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['editStage'] = tango;
    mike = function() { // Original name: endStage
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['endStage'] = mike;
    return entity;
})();