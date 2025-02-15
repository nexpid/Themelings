// app/modules/calls/ChannelRTCParticipants.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    golf = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = offset;
    oscar = function(argFoo) { // Original name: embeddedActivityParticipantId
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = 'activity-';
        entity = argFoo;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    var _closure1_slot23 = oscar;
    report = function(argFoo) { // Original name: sortKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tango = entity.type;
            zulu = _closure1_slot16;
            zulu = zulu.PRESENCE_EMBEDDED_ACTIVITY;
            if(!(zulu !== tango)) { _fun00002_ip = 343; continue _fun00001 }
 28:
            zulu = _closure1_slot16;
            zulu = zulu.ACTIVITY;
            if(!(zulu !== tango)) { _fun00002_ip = 311; continue _fun00001 }
 45:
            zulu = _closure1_slot16;
            zulu = zulu.HIDDEN_STREAM;
            if(!(zulu !== tango)) { _fun00002_ip = 222; continue _fun00001 }
 62:
            zulu = _closure1_slot16;
            zulu = zulu.STREAM;
            if(!(zulu !== tango)) { _fun00002_ip = 222; continue _fun00001 }
 79:
            zulu = _closure1_slot16;
            zulu = zulu.USER;
            if(!(zulu !== tango)) { _fun00002_ip = 97; continue _fun00001 }
 93:
            zulu = undefined;
            return zulu;
 97:
            tango = entity.voiceState;
            zulu = null;
            if(!(zulu != tango)) { _fun00002_ip = 124; continue _fun00001 }
 109:
            tango = tango.selfVideo;
            oscar = '\x03';
            if(tango) { _fun00002_ip = 158; continue _fun00001 }
 124:
            tango = entity.voiceState;
            zulu = zulu != tango;
            if(!zulu) { _fun00002_ip = 143; continue _fun00001 }
 137:
            zulu = tango.selfStream;
 143:
            oscar = '\x05';
            if(!zulu) { _fun00002_ip = 158; continue _fun00001 }
 152:
            oscar = '\x04';
 158:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 16;
            zulu = report[zulu];
            golf = undefined;
            report = tango.bind(golf)(zulu);
            tango = entity.userNick;
            zulu = entity.user;
            report = report.bind(golf)(tango, zulu);
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = '';
            zulu = tango.bind(zulu)(oscar, report);
            return zulu;
 222:
            zulu = entity.userVideo;
            oscar = '\x03';
            report = oscar;
            if(!zulu) { _fun00002_ip = 246; continue _fun00001 }
 240:
            report = '\x02';
 246:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 16;
            mike = tango[mike];
            golf = undefined;
            tango = zulu.bind(golf)(mike);
            zulu = entity.userNick;
            mike = entity.user;
            tango = tango.bind(golf)(zulu, mike);
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = '';
            mike = zulu.bind(mike)(report, tango, oscar);
            return mike;
 311:
            zulu = entity.sortKey;
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = '\x01';
            entity = mike.bind(entity)(zulu);
            return entity;
 343:
            entity = '\x00';
            return entity;
        }
    };
    var _closure1_slot24 = report;
    entity = global;
    yankee = entity.Object;
    options = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = offset[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 9;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 10;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 11;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 12;
    mike = offset[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot15 = mike;
    mike = 13;
    mike = offset[mike];
    mike = verify.bind(entity)(mike);
    golf = mike.ParticipantTypes;
    var _closure1_slot16 = golf;
    mike = mike.isStreamParticipant;
    var _closure1_slot17 = mike;
    mike = 14;
    mike = offset[mike];
    mike = verify.bind(entity)(mike);
    golf = mike.ActivityFlags;
    var _closure1_slot18 = golf;
    golf = mike.ActivityTypes;
    var _closure1_slot19 = golf;
    mike = mike.ChannelTypes;
    var _closure1_slot20 = mike;
    mike = 15;
    mike = offset[mike];
    mike = verify.bind(entity)(mike);
    mike = mike.MediaEngineContextTypes;
    var _closure1_slot21 = mike;
    mike = {};
    golf = 'VIDEO';
    mike['VIDEO'] = golf;
    golf = 'STREAM';
    mike['STREAM'] = golf;
    golf = 'FILTERED';
    mike['FILTERED'] = golf;
    golf = 'SPEAKING';
    mike['SPEAKING'] = golf;
    golf = 'ACTIVITY';
    mike['ACTIVITY'] = golf;
    var _closure1_slot22 = mike;
    golf = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: ChannelRTCParticipants
            zulu = this;
            report = _closure1_slot3;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = {};
            zulu['participants'] = tango;
            tango = {};
            zulu['lastSpoke'] = tango;
            tango = global;
            tango = tango.Set;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            verify = report;
            tango = new verify[tango](options);
            tango = tango instanceof Object ? tango : report;
            zulu['guildRingingUsers'] = tango;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 17;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            oscar = tango.SecondaryIndexMap;
            golf = _closure1_slot24;
            mike = oscar.prototype;
            tango = Object.create(mike, {constructor: {value: oscar}});
            options = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = argFoo;
                    entity = new Array(0);
                    report = zulu.type;
                    tango = _closure1_slot16;
                    tango = tango.USER;
                    tango = report === tango;
                    if(!tango) { _fun00004_ip = 38; continue _fun00003 }
 32:
                    tango = zulu.speaking;
 38:
                    if(!tango) { _fun00004_ip = 61; continue _fun00003 }
 41:
                    report = entity.push;
                    tango = _closure1_slot22;
                    tango = tango.SPEAKING;
                    tango = report.bind(entity)(tango);
 61:
                    report = zulu.type;
                    tango = _closure1_slot16;
                    tango = tango.USER;
                    if(!(report === tango)) { _fun00004_ip = 101; continue _fun00003 }
 80:
                    tango = zulu.voiceState;
                    report = null;
                    if(!(report != tango)) { _fun00004_ip = 101; continue _fun00003 }
 92:
                    tango = tango.selfVideo;
                    if(tango) { _fun00004_ip = 197; continue _fun00003 }
 101:
                    report = _closure1_slot17;
                    tango = undefined;
                    tango = report.bind(tango)(zulu);
                    if(!tango) { _fun00004_ip = 246; continue _fun00003 }
 118:
                    report = entity.push;
                    tango = _closure1_slot22;
                    tango = tango.STREAM;
                    tango = report.bind(entity)(tango);
                    report = zulu.type;
                    tango = _closure1_slot16;
                    tango = tango.HIDDEN_STREAM;
                    tango = report !== tango;
                    if(!tango) { _fun00004_ip = 172; continue _fun00003 }
 160:
                    oscar = zulu.streamId;
                    report = null;
                    tango = report != oscar;
 172:
                    if(!tango) { _fun00004_ip = 246; continue _fun00003 }
 175:
                    report = entity.push;
                    tango = _closure1_slot22;
                    tango = tango.FILTERED;
                    tango = report.bind(entity)(tango);
                    _fun00004_ip = 246; continue _fun00003;
 197:
                    report = entity.push;
                    tango = _closure1_slot22;
                    tango = tango.VIDEO;
                    tango = report.bind(entity)(tango);
                    tango = zulu.localVideoDisabled;
                    if(tango) { _fun00004_ip = 246; continue _fun00003 }
 226:
                    report = entity.push;
                    tango = _closure1_slot22;
                    tango = tango.FILTERED;
                    tango = report.bind(entity)(tango);
 246:
                    tango = zulu.type;
                    zulu = _closure1_slot16;
                    zulu = zulu.ACTIVITY;
                    if(!(tango === zulu)) { _fun00004_ip = 301; continue _fun00003 }
 265:
                    tango = entity.push;
                    mike = _closure1_slot22;
                    zulu = mike.ACTIVITY;
                    zulu = tango.bind(entity)(zulu);
                    zulu = entity.push;
                    mike = mike.FILTERED;
                    mike = zulu.bind(entity)(mike);
 301:
                    return entity;
                }
            };
            verify = tango;
            mike = new verify[oscar](options, golf, oscar);
            mike = mike instanceof Object ? mike : tango;
            zulu['participantByIndex'] = mike;
            mike = argFoo;
            zulu['channelId'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'version';
        entity['key'] = mike;
        mike = function() { // Original name: get
            entity = this;
            entity = entity.participantByIndex;
            entity = entity.version;
            return entity;
        };
        entity['get'] = mike;
        mike = new Array(14);
        mike[0] = entity;
        entity = {};
        oscar = 'size';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.participantByIndex;
            mike = zulu.size;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'toArray';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            tango = entity.participantByIndex;
            zulu = tango.values;
            mike = argFoo;
            entity = true;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'rebuild';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                oscar = _closure1_slot9;
                report = oscar.getChannel;
                tango = mike.channelId;
                oscar = report.bind(oscar)(tango);
                report = null;
                if(!(report != oscar)) { _fun00006_ip = 425; continue _fun00005 }
 40:
                golf = oscar.type;
                tango = _closure1_slot20;
                tango = tango.GUILD_TEXT;
                if(!(golf !== tango)) { _fun00006_ip = 425; continue _fun00005 }
 62:
                options = _closure1_slot8;
                golf = options.getCall;
                tango = mike.channelId;
                tango = golf.bind(options)(tango);
                mike['call'] = tango;
                tango = oscar.isPrivate;
                tango = tango.bind(oscar)();
                if(!tango) { _fun00006_ip = 130; continue _fun00005 }
 101:
                tango = mike.call;
                if(!(report != tango)) { _fun00006_ip = 421; continue _fun00005 }
 113:
                tango = mike.call;
                tango = tango.unavailable;
                if(tango) { _fun00006_ip = 421; continue _fun00005 }
 130:
                report = global;
                golf = report.Set;
                tango = oscar.isGuildVocalOrThread;
                tango = tango.bind(oscar)();
                if(tango) { _fun00006_ip = 161; continue _fun00005 }
 153:
                tango = oscar.recipients;
                _fun00006_ip = 197; continue _fun00005;
 161:
                verify = report.Object;
                options = verify.keys;
                yankee = _closure1_slot15;
                offset = yankee.getVoiceStatesForChannel;
                oscar = oscar.id;
                oscar = offset.bind(yankee)(oscar);
                tango = options.bind(verify)(oscar);
 197:
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                kilo = oscar;
                backup = tango;
                tango = new kilo[golf](backup, foxtrot);
                options = tango instanceof Object ? tango : oscar;
                var _closure3_slot1 = options;
                oscar = options.add;
                golf = _closure1_slot7;
                tango = golf.getId;
                tango = tango.bind(golf)();
                tango = oscar.bind(options)(tango);
                tango = mike.guildRingingUsers;
                golf = tango.size;
                oscar = 0;
                tango = options;
                if(!(golf > oscar)) { _fun00006_ip = 333; continue _fun00005 }
 268:
                golf = report.Set;
                report = new Array(0);
                backup = report;
                foxtrot = options;
                romeo = 0;
                romeo = arraySpread(backup, foxtrot, romeo);
                foxtrot = mike.guildRingingUsers;
                backup = report;
                oscar = arraySpread(backup, foxtrot, romeo);
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                kilo = oscar;
                backup = report;
                report = new kilo[golf](backup, foxtrot);
                report = report instanceof Object ? report : oscar;
                _closure3_slot1 = report;
                tango = report;
 333:
                oscar = _closure1_slot6;
                report = oscar.getAllActiveStreamsForChannel;
                zulu = mike.channelId;
                oscar = report.bind(oscar)(zulu);
                report = oscar.forEach;
                zulu = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.ownerId;
                    mike = _closure3_slot1;
                    entity = mike.add;
                    entity = entity.bind(mike)(zulu);
                    return entity;
                };
                zulu = report.bind(oscar)(zulu);
                report = mike.participantByIndex;
                zulu = report.clear;
                zulu = zulu.bind(report)();
                zulu = {};
                mike['participants'] = zulu;
                zulu = tango.forEach;
                entity = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.updateParticipant;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = zulu.bind(tango)(entity);
                entity = mike.updateEmbeddedActivities;
                entity = entity.bind(mike)();
                entity = true;
                return entity;
 421:
                entity = false;
                return entity;
 425:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'getParticipant';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = this;
                zulu = entity.participantByIndex;
                mike = zulu.get;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun00008_ip = 34; continue _fun00007 }
 31:
                entity = mike;
 34:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'updateEmbeddedActivities';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            mike = zulu.updateParticipant;
            entity = '__EMBEDDED_ACTIVITIES__';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'hasEmbeddedActivity';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = this;
                entity = entity.participants;
                mike = entity.__EMBEDDED_ACTIVITIES__;
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00010_ip = 37; continue _fun00009 }
 26:
                zulu = mike.length;
                mike = 0;
                entity = zulu > mike;
 37:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'updateParticipant';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tango = argFoo;
                mike = this;
                var _closure3_slot0 = mike;
                entity = mike.participants;
                options = entity[tango];
                entity = '__EMBEDDED_ACTIVITIES__';
                if(!(tango !== entity)) { _fun00012_ip = 45; continue _fun00011 }
 32:
                entity = mike._getParticipantsForUser;
                zulu = entity.bind(mike)(tango);
                _fun00012_ip = 57; continue _fun00011;
 45:
                entity = mike._getParticipantsForEmbeddedActivities;
                zulu = entity.bind(mike)();
 57:
                oscar = null;
                entity = oscar != options;
                if(entity) { _fun00012_ip = 77; continue _fun00011 }
 66:
                verify = zulu.length;
                golf = 0;
                entity = golf !== verify;
 77:
                if(!entity) { _fun00012_ip = 126; continue _fun00011 }
 80:
                if(!(oscar != options)) { _fun00012_ip = 99; continue _fun00011 }
 84:
                golf = options.forEach;
                oscar = function(argFoo) {
                    entity = _closure3_slot0;
                    zulu = entity.participantByIndex;
                    mike = zulu.delete;
                    entity = argFoo;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                oscar = golf.bind(options)(oscar);
 99:
                oscar = zulu.forEach;
                report = function(argFoo) {
                    tango = argFoo;
                    entity = _closure3_slot0;
                    zulu = entity.participantByIndex;
                    mike = zulu.set;
                    entity = tango.id;
                    entity = mike.bind(zulu)(entity, tango);
                    entity = undefined;
                    return entity;
                };
                report = oscar.bind(zulu)(report);
                mike = mike.participants;
                mike[tango] = zulu;
                entity = true;
 126:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'updateParticipantSpeaking';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = argFoo;
                entity = this;
                var _closure3_slot0 = entity;
                var _closure3_slot1 = mike;
                entity = entity.participants;
                oscar = entity[mike];
                entity = null;
                tango = entity == oscar;
                mike = undefined;
                if(tango) { _fun00014_ip = 56; continue _fun00013 }
 37:
                report = oscar.reduce;
                tango = function(argFoo, argBar) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        verify = argBar;
                        mike = verify.type;
                        entity = _closure1_slot16;
                        entity = entity.USER;
                        if(!(mike !== entity)) { _fun00016_ip = 30; continue _fun00015 }
 25:
                        entity = argFoo;
                        return entity;
 30:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 18;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.getIsSpeaking;
                        mike = {};
                        entity = _closure3_slot1;
                        mike['userId'] = entity;
                        entity = true;
                        mike['checkIsMuted'] = entity;
                        offset = zulu.bind(tango)(mike);
                        if(!offset) { _fun00016_ip = 121; continue _fun00015 }
 86:
                        mike = _closure3_slot0;
                        tango = mike.lastSpoke;
                        zulu = _closure3_slot1;
                        mike = global;
                        report = mike.Date;
                        mike = report.now;
                        mike = mike.bind(report)();
                        tango[zulu] = mike;
 121:
                        golf = _closure3_slot0;
                        report = golf.participantByIndex;
                        tango = report.set;
                        zulu = verify.id;
                        mike = {};
                        romeo = mike;
                        yankee = verify;
                        verify = copyDataProperties(romeo, yankee);
                        verify = 'speaking';
                        mike[verify] = offset;
                        golf = golf.lastSpoke;
                        options = _closure3_slot1;
                        verify = golf[options];
                        golf = 'lastSpoke';
                        mike[golf] = verify;
                        golf = _closure1_slot12;
                        oscar = golf.isSoundSharing;
                        golf = oscar.bind(golf)(options);
                        oscar = 'soundsharing';
                        mike[oscar] = golf;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    }
                };
                zulu = false;
                mike = report.bind(oscar)(tango, zulu);
 56:
                entity = entity != mike;
                if(!entity) { _fun00014_ip = 66; continue _fun00013 }
 63:
                entity = mike;
 66:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'updateParticipantQuality';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = this;
                var _closure3_slot0 = entity;
                mike = argBar;
                var _closure3_slot1 = mike;
                mike = argBaz;
                var _closure3_slot2 = mike;
                mike = entity.participants;
                entity = argFoo;
                oscar = mike[entity];
                entity = null;
                tango = entity == oscar;
                mike = undefined;
                if(tango) { _fun00018_ip = 66; continue _fun00017 }
 47:
                report = oscar.reduce;
                tango = function(argFoo, argBar) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        entity = argFoo;
                        golf = argBar;
                        zulu = golf.type;
                        mike = _closure1_slot16;
                        mike = mike.STREAM;
                        if(!(zulu === mike)) { _fun00020_ip = 97; continue _fun00019 }
 28:
                        mike = _closure3_slot0;
                        report = mike.participantByIndex;
                        tango = report.set;
                        zulu = golf.id;
                        mike = {};
                        offset = mike;
                        verify = golf;
                        golf = copyDataProperties(offset, verify);
                        options = _closure3_slot1;
                        golf = 'maxResolution';
                        mike[golf] = options;
                        golf = _closure3_slot2;
                        oscar = 'maxFrameRate';
                        mike[oscar] = golf;
                        mike = tango.bind(report)(zulu, mike);
                        entity = true;
 97:
                        return entity;
                    }
                };
                zulu = false;
                mike = report.bind(oscar)(tango, zulu);
 66:
                entity = entity != mike;
                if(!entity) { _fun00018_ip = 76; continue _fun00017 }
 73:
                entity = mike;
 76:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'updateGuildRingingUsers';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zulu = argFoo;
                entity = this;
                mike = entity.guildRingingUsers;
                entity = argBar;
                if(entity) { _fun00022_ip = 30; continue _fun00021 }
 18:
                entity = mike.delete;
                entity = entity.bind(mike)(zulu);
                _fun00022_ip = 40; continue _fun00021;
 30:
                entity = mike.add;
                entity = entity.bind(mike)(zulu);
 40:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = '_getEmbeddedActivities';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                report = this;
                golf = _closure1_slot5;
                tango = golf.getEmbeddedActivitiesForChannel;
                entity = report.channelId;
                oscar = tango.bind(golf)(entity);
                tango = oscar.concat;
                options = golf.getEmbeddedActivitiesForStartingChannel;
                entity = report.channelId;
                entity = options.bind(golf)(entity);
                entity = tango.bind(oscar)(entity);
                oscar = golf.getSelfEmbeddedActivityForChannel;
                tango = report.channelId;
                oscar = oscar.bind(golf)(tango);
                tango = null;
                if(!(tango == oscar)) { _fun00024_ip = 98; continue _fun00023 }
 76:
                options = _closure1_slot5;
                golf = options.getSelfEmbeddedActivitiesForStartingChannel;
                report = report.channelId;
                oscar = golf.bind(options)(report);
 98:
                var _closure3_slot0 = oscar;
                if(!(tango != oscar)) { _fun00024_ip = 266; continue _fun00023 }
 109:
                options = _closure1_slot0;
                golf = _closure1_slot2;
                report = 19;
                report = golf[report];
                golf = undefined;
                offset = options.bind(golf)(report);
                verify = offset.uniqBy;
                options = new Array(1);
                romeo = 0;
                backup = options;
                foxtrot = entity;
                yankee = arraySpread(backup, foxtrot, romeo);
                options[yankee] = oscar;
                report = 1;
                report = yankee + report;
                report = function(argFoo) {
                    entity = argFoo;
                    entity = entity.applicationId;
                    return entity;
                };
                report = verify.bind(offset)(options, report);
                verify = oscar.participants;
                oscar = tango == verify;
                tango = undefined;
                if(oscar) { _fun00024_ip = 207; continue _fun00023 }
 191:
                options = verify.some;
                oscar = function(argFoo) {
                    entity = argFoo;
                    mike = entity.sessionId;
                    zulu = _closure1_slot7;
                    entity = zulu.getSessionId;
                    entity = entity.bind(zulu)();
                    entity = mike === entity;
                    return entity;
                };
                tango = options.bind(verify)(oscar);
 207:
                oscar = _closure1_slot0;
                options = _closure1_slot2;
                mike = 20;
                mike = options[mike];
                oscar = oscar.bind(golf)(mike);
                mike = oscar.shouldOpenActivityInPopoutWindow;
                oscar = mike.bind(oscar)();
                mike = report;
                if(!oscar) { _fun00024_ip = 264; continue _fun00023 }
 243:
                mike = report;
                if(!tango) { _fun00024_ip = 264; continue _fun00023 }
 249:
                tango = report.filter;
                zulu = function(argFoo) {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        zulu = argFoo;
                        tango = zulu.applicationId;
                        entity = _closure3_slot0;
                        entity = entity.applicationId;
                        entity = tango !== entity;
                        if(!entity) { _fun00026_ip = 47; continue _fun00025 }
 27:
                        zulu = zulu.compositeInstanceId;
                        mike = _closure3_slot0;
                        mike = mike.compositeInstanceId;
                        entity = zulu !== mike;
 47:
                        return entity;
                    }
                };
                mike = tango.bind(report)(zulu);
 264:
                return mike;
 266:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = '_getParticipantsForEmbeddedActivities';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            var _closure3_slot0 = zulu;
            mike = zulu._getEmbeddedActivities;
            zulu = mike.bind(zulu)();
            mike = zulu.map;
            entity = function(argFoo, argBar) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    mike = argFoo;
                    zulu = argBar;
                    entity = {};
                    tango = _closure1_slot16;
                    tango = tango.ACTIVITY;
                    entity['type'] = tango;
                    golf = _closure1_slot23;
                    oscar = mike.applicationId;
                    tango = undefined;
                    oscar = golf.bind(tango)(oscar);
                    entity['id'] = oscar;
                    oscar = mike.applicationId;
                    entity['applicationId'] = oscar;
                    oscar = _closure1_slot19;
                    oscar = oscar.PLAYING;
                    entity['activityType'] = oscar;
                    oscar = mike.url;
                    entity['activityUrl'] = oscar;
                    options = mike.participants;
                    mike = null;
                    if(!(mike == options)) { _fun00028_ip = 95; continue _fun00027 }
 91:
                    options = new Array(0);
 95:
                    oscar = new Array(0);
                    verify = 0;
                    yankee = oscar;
                    offset = options;
                    golf = arraySpread(yankee, offset, verify);
                    entity['participants'] = oscar;
                    golf = _closure1_slot9;
                    oscar = golf.getChannel;
                    report = _closure3_slot0;
                    report = report.channelId;
                    oscar = oscar.bind(golf)(report);
                    report = mike == oscar;
                    tango = undefined;
                    if(report) { _fun00028_ip = 161; continue _fun00027 }
 151:
                    report = oscar.getGuildId;
                    tango = report.bind(oscar)();
 161:
                    report = mike != tango;
                    mike = null;
                    if(!report) { _fun00028_ip = 173; continue _fun00027 }
 170:
                    mike = tango;
 173:
                    entity['guildId'] = mike;
                    mike = zulu.toString;
                    mike = mike.bind(zulu)();
                    entity['sortKey'] = mike;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = '_getParticipantsForUser';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                echo = argFoo;
                oscar = this;
                var _closure3_slot0 = echo;
                entity = new Array(0);
                tango = _closure1_slot13;
                mike = tango.getUser;
                mike = mike.bind(tango)(echo);
                options = null;
                if(!(options != mike)) { _fun00030_ip = 1326; continue _fun00029 }
 43:
                offset = _closure1_slot15;
                golf = offset.getVoiceStateForChannel;
                tango = oscar.channelId;
                verify = golf.bind(offset)(tango, echo);
                var _closure3_slot1 = verify;
                golf = offset.getVoicePlatformForChannel;
                tango = oscar.channelId;
                romeo = golf.bind(offset)(tango, echo);
                offset = _closure1_slot9;
                golf = offset.getChannel;
                tango = oscar.channelId;
                kilo = golf.bind(offset)(tango);
                offset = oscar.call;
                yankee = options == offset;
                golf = undefined;
                tango = undefined;
                if(yankee) { _fun00030_ip = 145; continue _fun00029 }
 120:
                yankee = offset.ringing;
                offset = options == yankee;
                tango = undefined;
                if(offset) { _fun00030_ip = 145; continue _fun00029 }
 135:
                offset = yankee.includes;
                tango = offset.bind(yankee)(echo);
 145:
                if(tango) { _fun00030_ip = 164; continue _fun00029 }
 148:
                yankee = oscar.guildRingingUsers;
                offset = yankee.has;
                tango = offset.bind(yankee)(echo);
 164:
                yankee = options != tango;
                if(!yankee) { _fun00030_ip = 174; continue _fun00029 }
 171:
                yankee = tango;
 174:
                tango = options != verify;
                if(tango) { _fun00030_ip = 184; continue _fun00029 }
 181:
                tango = yankee;
 184:
                if(!tango) { _fun00030_ip = 513; continue _fun00029 }
 190:
                offset = {};
                tango = _closure1_slot16;
                tango = tango.USER;
                offset['type'] = tango;
                backup = _closure1_slot14;
                foxtrot = backup.getUserStreamData;
                sizing = options == kilo;
                tango = undefined;
                if(sizing) { _fun00030_ip = 235; continue _fun00029 }
 225:
                sizing = kilo.getGuildId;
                tango = sizing.bind(kilo)();
 235:
                source = foxtrot.bind(backup)(echo, tango);
                control = offset;
                tango = copyDataProperties(control, source);
                tango = 'user';
                offset[tango] = mike;
                foxtrot = mike.id;
                tango = 'id';
                offset[tango] = foxtrot;
                tango = 'voiceState';
                offset[tango] = verify;
                tango = 'voicePlatform';
                offset[tango] = romeo;
                romeo = _closure1_slot0;
                foxtrot = _closure1_slot2;
                tango = 18;
                tango = foxtrot[tango];
                foxtrot = romeo.bind(golf)(tango);
                romeo = foxtrot.getIsSpeaking;
                tango = {};
                tango['userId'] = echo;
                backup = true;
                tango['checkIsMuted'] = backup;
                romeo = romeo.bind(foxtrot)(tango);
                tango = 'speaking';
                offset[tango] = romeo;
                tango = oscar.lastSpoke;
                tango = tango[echo];
                foxtrot = options != tango;
                romeo = 0;
                if(!foxtrot) { _fun00030_ip = 364; continue _fun00029 }
 361:
                romeo = tango;
 364:
                tango = 'lastSpoke';
                offset[tango] = romeo;
                romeo = _closure1_slot12;
                tango = romeo.isSoundSharing;
                romeo = tango.bind(romeo)(echo);
                tango = 'soundsharing';
                offset[tango] = romeo;
                tango = 'ringing';
                offset[tango] = yankee;
                yankee = _closure1_slot1;
                romeo = _closure1_slot2;
                tango = 21;
                tango = romeo[tango];
                foxtrot = yankee.bind(golf)(tango);
                romeo = foxtrot.getName;
                tango = options == kilo;
                yankee = undefined;
                if(tango) { _fun00030_ip = 453; continue _fun00029 }
 443:
                tango = kilo.getGuildId;
                yankee = tango.bind(kilo)();
 453:
                tango = oscar.channelId;
                yankee = romeo.bind(foxtrot)(yankee, tango, mike);
                tango = 'userNick';
                offset[tango] = yankee;
                romeo = _closure1_slot10;
                yankee = romeo.isLocalVideoDisabled;
                tango = mike.id;
                yankee = yankee.bind(romeo)(tango);
                tango = 'localVideoDisabled';
                offset[tango] = yankee;
                tango = entity.push;
                tango = tango.bind(entity)(offset);
 513:
                yankee = _closure1_slot6;
                offset = yankee.getStreamForUser;
                romeo = options == kilo;
                tango = undefined;
                if(romeo) { _fun00030_ip = 542; continue _fun00029 }
 532:
                romeo = kilo.getGuildId;
                tango = romeo.bind(kilo)();
 542:
                yankee = offset.bind(yankee)(echo, tango);
                if(!(options == yankee)) { _fun00030_ip = 587; continue _fun00029 }
 552:
                romeo = _closure1_slot6;
                offset = romeo.getActiveStreamForUser;
                foxtrot = options == kilo;
                tango = undefined;
                if(foxtrot) { _fun00030_ip = 581; continue _fun00029 }
 571:
                foxtrot = kilo.getGuildId;
                tango = foxtrot.bind(kilo)();
 581:
                yankee = offset.bind(romeo)(echo, tango);
 587:
                if(!(options != yankee)) { _fun00030_ip = 1016; continue _fun00029 }
 594:
                offset = yankee.channelId;
                tango = oscar.channelId;
                if(!(offset === tango)) { _fun00030_ip = 1016; continue _fun00029 }
 611:
                offset = _closure1_slot0;
                romeo = _closure1_slot2;
                tango = 22;
                tango = romeo[tango];
                offset = offset.bind(golf)(tango);
                tango = offset.encodeStreamKey;
                romeo = tango.bind(offset)(yankee);
                tango = oscar.getParticipant;
                backup = tango.bind(oscar)(romeo);
                offset = yankee.ownerId;
                foxtrot = _closure1_slot7;
                tango = foxtrot.getId;
                tango = tango.bind(foxtrot)();
                foxtrot = offset === tango;
                if(!foxtrot) { _fun00030_ip = 700; continue _fun00029 }
 680:
                sizing = _closure1_slot6;
                offset = sizing.isSelfStreamHidden;
                tango = oscar.channelId;
                foxtrot = offset.bind(sizing)(tango);
 700:
                tango = options == backup;
                sizing = undefined;
                if(tango) { _fun00030_ip = 714; continue _fun00029 }
 709:
                sizing = backup.type;
 714:
                tango = _closure1_slot16;
                offset = tango.STREAM;
                tango = null;
                if(!(sizing === offset)) { _fun00030_ip = 784; continue _fun00029 }
 730:
                offset = {};
                sizing = backup.maxResolution;
                output = options != sizing;
                sizing = undefined;
                if(!output) { _fun00030_ip = 765; continue _fun00029 }
 747:
                output = {};
                source = backup.maxResolution;
                control = output;
                result = copyDataProperties(control, source);
                sizing = output;
 765:
                offset['maxResolution'] = sizing;
                backup = backup.maxFrameRate;
                offset['maxFrameRate'] = backup;
                tango = offset;
 784:
                offset = {};
                result = _closure1_slot14;
                output = result.getUserStreamData;
                backup = options == kilo;
                sizing = undefined;
                if(backup) { _fun00030_ip = 815; continue _fun00029 }
 805:
                backup = kilo.getGuildId;
                sizing = backup.bind(kilo)();
 815:
                backup = _closure1_slot21;
                backup = backup.STREAM;
                source = output.bind(result)(echo, sizing, backup);
                control = offset;
                backup = copyDataProperties(control, source);
                control = offset;
                source = tango;
                tango = copyDataProperties(control, source);
                tango = _closure1_slot16;
                if(foxtrot) { _fun00030_ip = 864; continue _fun00029 }
 856:
                foxtrot = tango.STREAM;
                _fun00030_ip = 870; continue _fun00029;
 864:
                foxtrot = tango.HIDDEN_STREAM;
 870:
                tango = 'type';
                offset[tango] = foxtrot;
                tango = 'id';
                offset[tango] = romeo;
                romeo = options == verify;
                tango = undefined;
                if(romeo) { _fun00030_ip = 903; continue _fun00029 }
 897:
                tango = verify.selfVideo;
 903:
                romeo = options != tango;
                if(!romeo) { _fun00030_ip = 913; continue _fun00029 }
 910:
                romeo = tango;
 913:
                tango = 'userVideo';
                offset[tango] = romeo;
                tango = 'user';
                offset[tango] = mike;
                romeo = _closure1_slot1;
                foxtrot = _closure1_slot2;
                tango = 21;
                tango = foxtrot[tango];
                backup = romeo.bind(golf)(tango);
                foxtrot = backup.getName;
                tango = options == kilo;
                romeo = undefined;
                if(tango) { _fun00030_ip = 976; continue _fun00029 }
 966:
                tango = kilo.getGuildId;
                romeo = tango.bind(kilo)();
 976:
                tango = oscar.channelId;
                romeo = foxtrot.bind(backup)(romeo, tango, mike);
                tango = 'userNick';
                offset[tango] = romeo;
                tango = 'stream';
                offset[tango] = yankee;
                tango = entity.push;
                tango = tango.bind(entity)(offset);
 1016:
                romeo = _closure1_slot11;
                yankee = romeo.findActivity;
                offset = mike.id;
                tango = function(argFoo) {
                    entity = _closure1_slot19;
                    mike = entity.PLAYING;
                    zulu = new Array(2);
                    zulu[0] = mike;
                    entity = entity.WATCHING;
                    zulu[1] = entity;
                    mike = zulu.includes;
                    entity = argFoo;
                    entity = entity.type;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                tango = yankee.bind(romeo)(offset, tango);
                yankee = _closure1_slot0;
                romeo = _closure1_slot2;
                offset = 23;
                offset = romeo[offset];
                yankee = yankee.bind(golf)(offset);
                offset = yankee.getIsContextlessActivitiesExperimentEnabled;
                offset = offset.bind(yankee)();
                if(!offset) { _fun00030_ip = 1324; continue _fun00029 }
 1078:
                if(!(options != verify)) { _fun00030_ip = 1324; continue _fun00029 }
 1085:
                verify = verify.channelId;
                oscar = oscar.channelId;
                if(!(verify === oscar)) { _fun00030_ip = 1324; continue _fun00029 }
 1102:
                if(!(options != tango)) { _fun00030_ip = 1324; continue _fun00029 }
 1109:
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                oscar = 24;
                oscar = offset[oscar];
                yankee = verify.bind(golf)(oscar);
                offset = yankee.hasFlag;
                oscar = tango.flags;
                romeo = options != oscar;
                verify = 0;
                if(!romeo) { _fun00030_ip = 1152; continue _fun00029 }
 1149:
                verify = oscar;
 1152:
                oscar = _closure1_slot18;
                oscar = oscar.EMBEDDED;
                oscar = offset.bind(yankee)(verify, oscar);
                if(!oscar) { _fun00030_ip = 1324; continue _fun00029 }
 1174:
                verify = _closure1_slot5;
                oscar = verify.getCurrentEmbeddedActivity;
                verify = oscar.bind(verify)();
                offset = options == verify;
                oscar = undefined;
                if(offset) { _fun00030_ip = 1228; continue _fun00029 }
 1197:
                offset = verify.participants;
                verify = options == offset;
                oscar = undefined;
                if(verify) { _fun00030_ip = 1228; continue _fun00029 }
 1212:
                verify = offset.some;
                zulu = function(argFoo) {
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        zulu = argFoo;
                        tango = zulu.userId;
                        entity = _closure3_slot0;
                        entity = tango === entity;
                        if(!entity) { _fun00032_ip = 42; continue _fun00031 }
 22:
                        zulu = zulu.sessionId;
                        mike = _closure3_slot1;
                        mike = mike.sessionId;
                        entity = zulu === mike;
 42:
                        return entity;
                    }
                };
                oscar = verify.bind(offset)(zulu);
 1228:
                zulu = true;
                zulu = zulu === oscar;
                if(zulu) { _fun00030_ip = 1247; continue _fun00029 }
 1237:
                oscar = tango.application_id;
                zulu = options == oscar;
 1247:
                if(zulu) { _fun00030_ip = 1324; continue _fun00029 }
 1250:
                zulu = {};
                oscar = _closure1_slot16;
                oscar = oscar.PRESENCE_EMBEDDED_ACTIVITY;
                zulu['type'] = oscar;
                oscar = _closure1_slot23;
                report = tango.application_id;
                report = oscar.bind(golf)(report);
                zulu['id'] = report;
                report = tango.application_id;
                zulu['applicationId'] = report;
                report = tango.type;
                zulu['activityType'] = report;
                zulu['activity'] = tango;
                zulu['user'] = mike;
                mike = entity.push;
                mike = mike.bind(entity)(zulu);
 1324:
                return entity;
 1326:
                return entity;
            }
        };
        entity['value'] = report;
        mike[13] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    golf = golf.bind(entity)();
    options = 25;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/calls/ChannelRTCParticipants.tsx';
    options = verify.bind(offset)(options);
    zulu['default'] = golf;
    zulu['embeddedActivityParticipantId'] = oscar;
    oscar = function(argFoo) { // Original name: activityParticipantIdToApplicationId
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            tango = argFoo;
            mike = null;
            entity = tango;
            if(!(mike != entity)) { _fun00034_ip = 33; continue _fun00033 }
 12:
            zulu = tango.split;
            mike = '-';
            zulu = zulu.bind(tango)(mike);
            mike = 1;
            entity = zulu[mike];
 33:
            return entity;
        }
    };
    zulu['activityParticipantIdToApplicationId'] = oscar;
    zulu['sortKey'] = report;
    tango = function(argFoo, argBar) { // Original name: areParticipantsEqual
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            report = argFoo;
            mike = report[Symbol.iterator];
            report = mike().next;
            romeo = undefined;
            zulu = undefined;
            tango = undefined;
            oscar = report().value;
            verify = mike;
            verify = verify === romeo;
            zulu = verify;
            if(verify) { _fun00036_ip = 32; continue _fun00035 }
 29:
            tango = oscar;
 32:
            tango = undefined;
            oscar = zulu;
            if(oscar) { _fun00036_ip = 60; continue _fun00035 }
 40:
            report = report().value;
            oscar = mike;
            oscar = oscar === romeo;
            zulu = oscar;
            if(oscar) { _fun00036_ip = 60; continue _fun00035 }
 57:
            tango = report;
 60:
            options = tango;
            tango = zulu;
            if(tango) { _fun00036_ip = 72; continue _fun00035 }
 69:
            mike.return();
 72:
            offset = argBar;
            report = offset[Symbol.iterator];
            offset = report().next;
            oscar = undefined;
            verify = undefined;
            yankee = offset().value;
            foxtrot = report;
            foxtrot = foxtrot === romeo;
            oscar = foxtrot;
            if(foxtrot) { _fun00036_ip = 102; continue _fun00035 }
 99:
            verify = yankee;
 102:
            verify = undefined;
            yankee = oscar;
            if(yankee) { _fun00036_ip = 130; continue _fun00035 }
 110:
            offset = offset().value;
            yankee = report;
            yankee = yankee === romeo;
            oscar = yankee;
            if(yankee) { _fun00036_ip = 130; continue _fun00035 }
 127:
            verify = offset;
 130:
            golf = verify;
            verify = oscar;
            if(verify) { _fun00036_ip = 142; continue _fun00035 }
 139:
            report.return();
 142:
            golf = options === golf;
            return golf;
 148:
            CatchBlockStart(arg_register=3);
            if(oscar) { _fun00036_ip = 156; continue _fun00035 }
 153:
            report.return();
 156:
            throw tango;
 158:
            CatchBlockStart(arg_register=0);
            if(zulu) { _fun00036_ip = 166; continue _fun00035 }
 163:
            mike.return();
 166:
            throw entity;
        }
    };
    zulu['areParticipantsEqual'] = tango;
    zulu['ChannelRTCParticipantsIndexes'] = mike;
    return entity;
})();