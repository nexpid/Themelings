// app/modules/stage_channels/StageChannelParticipants.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    report = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = report;
    var _closure1_slot2 = verify;
    entity = function(argFoo) { // Original name: sortKey
        _fun57351: for(var _fun57351_ip = 0; ; ) switch(_fun57351_ip) {
 0:
            mike = argFoo;
            entity = mike.speaker;
            tango = mike.role;
            romeo = mike.user;
            yankee = mike.userNick;
            verify = mike.connectedOn;
            zulu = mike.voiceState;
            report = mike.type;
            options = '\x01';
            golf = options;
            if(!entity) { _fun57351_ip = 61; continue _fun57351 }
 55:
            golf = '\x00';
 61:
            entity = _closure1_slot16;
            entity = entity.STREAM;
            oscar = options;
            if(!(report === entity)) { _fun57351_ip = 87; continue _fun57351 }
 81:
            oscar = '\x00';
 87:
            offset = zulu.selfMute;
            entity = '\x00';
            report = entity;
            if(!offset) { _fun57351_ip = 108; continue _fun57351 }
 105:
            report = options;
 108:
            zulu = zulu.selfVideo;
            if(!zulu) { _fun57351_ip = 120; continue _fun57351 }
 117:
            options = entity;
 120:
            zulu = null;
            foxtrot = zulu == tango;
            offset = undefined;
            entity = undefined;
            if(foxtrot) { _fun57351_ip = 138; continue _fun57351 }
 133:
            entity = tango.position;
 138:
            zulu = zulu != entity;
            foxtrot = 999;
            if(!zulu) { _fun57351_ip = 154; continue _fun57351 }
 151:
            foxtrot = entity;
 154:
            entity = global;
            zulu = entity.HermesInternal;
            zulu = zulu.concat;
            tango = '';
            kilo = zulu.bind(tango)(foxtrot);
            backup = kilo.padStart;
            foxtrot = 3;
            zulu = '0';
            result = backup.bind(kilo)(foxtrot, zulu);
            foxtrot = _closure1_slot1;
            backup = _closure1_slot2;
            mike = 12;
            mike = backup[mike];
            mike = foxtrot.bind(offset)(mike);
            sizing = mike.bind(offset)(yankee, romeo);
            entity = entity.HermesInternal;
            entity = entity.concat;
            vacuum = tango;
            control = golf;
            source = oscar;
            update = report;
            echo = options;
            output = verify;
            entity = vacuum[entity](control, source, update, echo, result, output, sizing, kilo);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: requestToSpeakSortKey
        _fun57352: for(var _fun57352_ip = 0; ; ) switch(_fun57352_ip) {
 0:
            entity = argFoo;
            mike = entity.user;
            entity = entity.voiceState;
            report = entity.requestToSpeakTimestamp;
            entity = null;
            if(!(entity != report)) { _fun57352_ip = 73; continue _fun57352 }
 26:
            entity = global;
            tango = entity.Date;
            zulu = tango.parse;
            report = zulu.bind(tango)(report);
            tango = mike.id;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            entity = '';
            entity = zulu.bind(entity)(report, tango);
            _fun57352_ip = 78; continue _fun57352;
 73:
            entity = mike.id;
 78:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    mike = function(argFoo) { // Original name: isRequestedToSpeakAll
        _fun57353: for(var _fun57353_ip = 0; ; ) switch(_fun57353_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            oscar = 13;
            entity = entity[oscar];
            report = undefined;
            entity = tango.bind(report)(entity);
            entity = entity.RequestToSpeakStates;
            entity = entity.REQUESTED_TO_SPEAK;
            entity = zulu === entity;
            if(entity) { _fun57353_ip = 80; continue _fun57353 }
 47:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.RequestToSpeakStates;
            mike = mike.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            entity = zulu === mike;
 80:
            return entity;
        }
    };
    var _closure1_slot19 = mike;
    entity = function(argFoo) { // Original name: getParticipantIndex
        _fun57354: for(var _fun57354_ip = 0; ; ) switch(_fun57354_ip) {
 0:
            entity = argFoo;
            golf = entity.speaker;
            oscar = entity.role;
            verify = entity.rtsState;
            report = entity.blocked;
            tango = entity.ignored;
            zulu = entity.isFriend;
            entity = new Array(0);
            options = _closure1_slot19;
            yankee = undefined;
            options = options.bind(yankee)(verify);
            if(!options) { _fun57354_ip = 80; continue _fun57354 }
 60:
            offset = entity.push;
            options = _closure1_slot15;
            options = options.ALL_REQUESTED_TO_SPEAK;
            options = offset.bind(entity)(options);
 80:
            offset = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 13;
            options = romeo[options];
            options = offset.bind(yankee)(options);
            options = options.RequestToSpeakStates;
            options = options.REQUESTED_TO_SPEAK;
            if(!(verify === options)) { _fun57354_ip = 136; continue _fun57354 }
 116:
            verify = entity.push;
            options = _closure1_slot15;
            options = options.REQUESTED_TO_SPEAK_ONLY;
            options = verify.bind(entity)(options);
 136:
            if(golf) { _fun57354_ip = 204; continue _fun57354 }
 139:
            golf = null;
            if(!(golf == oscar)) { _fun57354_ip = 167; continue _fun57354 }
 145:
            options = entity.push;
            golf = _closure1_slot15;
            golf = golf.NO_ROLE;
            golf = options.bind(entity)(golf);
            _fun57354_ip = 182; continue _fun57354;
 167:
            golf = entity.push;
            oscar = oscar.id;
            oscar = golf.bind(entity)(oscar);
 182:
            golf = entity.push;
            oscar = _closure1_slot15;
            oscar = oscar.AUDIENCE;
            oscar = golf.bind(entity)(oscar);
            _fun57354_ip = 224; continue _fun57354;
 204:
            golf = entity.push;
            oscar = _closure1_slot15;
            oscar = oscar.SPEAKER;
            oscar = golf.bind(entity)(oscar);
 224:
            if(report) { _fun57354_ip = 252; continue _fun57354 }
 227:
            if(!tango) { _fun57354_ip = 272; continue _fun57354 }
 230:
            report = entity.push;
            tango = _closure1_slot15;
            tango = tango.IGNORED;
            tango = report.bind(entity)(tango);
            _fun57354_ip = 272; continue _fun57354;
 252:
            report = entity.push;
            tango = _closure1_slot15;
            tango = tango.BLOCKED;
            tango = report.bind(entity)(tango);
 272:
            if(!zulu) { _fun57354_ip = 295; continue _fun57354 }
 275:
            zulu = entity.push;
            mike = _closure1_slot15;
            mike = mike.FRIEND;
            mike = zulu.bind(entity)(mike);
 295:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    offset = entity.Object;
    golf = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = verify[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = verify[tango];
    tango = options.bind(entity)(tango);
    tango = tango.getComparator;
    var _closure1_slot12 = tango;
    tango = 10;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot14 = tango;
    report = {};
    tango = 'SPEAKER';
    report['SPEAKER'] = tango;
    tango = 'AUDIENCE';
    report['AUDIENCE'] = tango;
    tango = 'NO_ROLE';
    report['NO_ROLE'] = tango;
    tango = 'ALL_REQUESTED_TO_SPEAK';
    report['ALL_REQUESTED_TO_SPEAK'] = tango;
    tango = 'REQUESTED_TO_SPEAK_ONLY';
    report['REQUESTED_TO_SPEAK_ONLY'] = tango;
    tango = 'BLOCKED';
    report['BLOCKED'] = tango;
    tango = 'IGNORED';
    report['IGNORED'] = tango;
    tango = 'FRIEND';
    report['FRIEND'] = tango;
    tango = 'SELECTED';
    report['SELECTED'] = tango;
    tango = 'MEDIA';
    report['MEDIA'] = tango;
    var _closure1_slot15 = report;
    tango = {};
    golf = 'VOICE';
    tango['VOICE'] = golf;
    golf = 'STREAM';
    tango['STREAM'] = golf;
    var _closure1_slot16 = tango;
    oscar = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: StageChannelParticipants
            _fun57356: for(var _fun57356_ip = 0; ; ) switch(_fun57356_ip) {
 0:
                report = argFoo;
                zulu = this;
                oscar = _closure1_slot3;
                tango = _closure2_slot0;
                entity = undefined;
                tango = oscar.bind(entity)(zulu, tango);
                tango = {};
                zulu['participants'] = tango;
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                tango = 14;
                options = golf[tango];
                options = oscar.bind(entity)(options);
                yankee = options.SecondaryIndexMap;
                foxtrot = _closure1_slot20;
                romeo = _closure1_slot17;
                verify = yankee.prototype;
                verify = Object.create(verify, {constructor: {value: yankee}});
                backup = verify;
                options = new backup[yankee](foxtrot, romeo, yankee);
                options = options instanceof Object ? options : verify;
                zulu['_participantsIndex'] = options;
                tango = golf[tango];
                tango = oscar.bind(entity)(tango);
                options = tango.SecondaryIndexMap;
                romeo = _closure1_slot18;
                tango = options.prototype;
                oscar = Object.create(tango, {constructor: {value: options}});
                foxtrot = function() {
                    entity = new Array(0);
                    return entity;
                };
                backup = oscar;
                tango = new backup[options](foxtrot, romeo, yankee);
                tango = tango instanceof Object ? tango : oscar;
                zulu['_requestToSpeakIndex'] = tango;
                zulu['channelId'] = report;
                tango = _closure1_slot6;
                mike = tango.getChannel;
                report = mike.bind(tango)(report);
                mike = null;
                tango = mike == report;
                mike = undefined;
                if(tango) { _fun57356_ip = 189; continue _fun57356 }
 179:
                tango = report.getGuildId;
                mike = tango.bind(report)();
 189:
                zulu['guildId'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = '_getParticipantsForUser';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            _fun57358: for(var _fun57358_ip = 0; ; ) switch(_fun57358_ip) {
 0:
                report = argFoo;
                offset = argBar;
                mike = this;
                entity = new Array(0);
                golf = _closure1_slot11;
                oscar = golf.getVoiceStateForChannel;
                tango = mike.channelId;
                verify = oscar.bind(golf)(tango, report);
                oscar = null;
                if(!(oscar != verify)) { _fun57358_ip = 756; continue _fun57358 }
 46:
                golf = _closure1_slot10;
                tango = golf.getUser;
                tango = tango.bind(golf)(report);
                if(!(oscar != tango)) { _fun57358_ip = 698; continue _fun57358 }
 68:
                golf = oscar != offset;
                options = null;
                if(!golf) { _fun57358_ip = 83; continue _fun57358 }
 77:
                golf = 0;
                options = offset[golf];
 83:
                golf = mike.guildId;
                offset = oscar != golf;
                golf = null;
                if(!offset) { _fun57358_ip = 118; continue _fun57358 }
 97:
                romeo = _closure1_slot8;
                yankee = romeo.getMember;
                offset = mike.guildId;
                golf = yankee.bind(romeo)(offset, report);
 118:
                yankee = oscar == golf;
                offset = undefined;
                romeo = undefined;
                if(yankee) { _fun57358_ip = 135; continue _fun57358 }
 129:
                romeo = golf.nick;
 135:
                if(!(oscar == romeo)) { _fun57358_ip = 182; continue _fun57358 }
 139:
                foxtrot = _closure1_slot1;
                backup = _closure1_slot2;
                yankee = 15;
                yankee = backup[yankee];
                kilo = foxtrot.bind(offset)(yankee);
                backup = kilo.getName;
                foxtrot = mike.guildId;
                yankee = mike.channelId;
                romeo = backup.bind(kilo)(foxtrot, yankee, tango);
 182:
                kilo = {};
                kilo['user'] = tango;
                backup = _closure1_slot1;
                foxtrot = _closure1_slot2;
                yankee = 15;
                yankee = foxtrot[yankee];
                output = backup.bind(offset)(yankee);
                sizing = output.getName;
                backup = mike.guildId;
                yankee = mike.channelId;
                yankee = sizing.bind(output)(backup, yankee, tango);
                kilo['userNick'] = yankee;
                kilo['nick'] = romeo;
                yankee = _closure1_slot12;
                yankee = yankee.bind(offset)(verify, romeo);
                kilo['comparator'] = yankee;
                kilo['voiceState'] = verify;
                romeo = _closure1_slot0;
                yankee = 16;
                yankee = foxtrot[yankee];
                foxtrot = romeo.bind(offset)(yankee);
                romeo = foxtrot.getHighestHoistedRole;
                yankee = mike.guildId;
                yankee = romeo.bind(foxtrot)(yankee, report);
                kilo['role'] = yankee;
                foxtrot = _closure1_slot13;
                romeo = foxtrot.isSpeaker;
                yankee = mike.channelId;
                yankee = romeo.bind(foxtrot)(report, yankee);
                kilo['speaker'] = yankee;
                kilo['member'] = golf;
                romeo = _closure1_slot9;
                yankee = romeo.isBlocked;
                golf = tango.id;
                golf = yankee.bind(romeo)(golf);
                kilo['blocked'] = golf;
                yankee = romeo.isIgnored;
                golf = tango.id;
                golf = yankee.bind(romeo)(golf);
                kilo['ignored'] = golf;
                yankee = romeo.isFriend;
                golf = tango.id;
                golf = yankee.bind(romeo)(golf);
                kilo['isFriend'] = golf;
                yankee = oscar == options;
                golf = undefined;
                if(yankee) { _fun57358_ip = 412; continue _fun57358 }
 406:
                golf = options.connectedOn;
 412:
                if(!(oscar == golf)) { _fun57358_ip = 433; continue _fun57358 }
 416:
                options = global;
                yankee = options.Date;
                options = yankee.now;
                golf = options.bind(yankee)();
 433:
                kilo['connectedOn'] = golf;
                golf = {};
                update = golf;
                echo = kilo;
                options = copyDataProperties(update, echo);
                options = _closure1_slot16;
                options = options.VOICE;
                foxtrot = 'type';
                golf[foxtrot] = options;
                tango = tango.id;
                backup = 'id';
                golf[backup] = tango;
                options = _closure1_slot0;
                tango = _closure1_slot2;
                yankee = 13;
                tango = tango[yankee];
                options = options.bind(offset)(tango);
                tango = options.getAudienceRequestToSpeakState;
                tango = tango.bind(options)(verify);
                options = 'rtsState';
                golf[options] = tango;
                tango = entity.push;
                tango = tango.bind(entity)(golf);
                verify = _closure1_slot5;
                golf = verify.getStreamForUser;
                tango = mike.guildId;
                sizing = golf.bind(verify)(report, tango);
                if(!(oscar == sizing)) { _fun57358_ip = 579; continue _fun57358 }
 558:
                verify = _closure1_slot5;
                golf = verify.getActiveStreamForUser;
                tango = mike.guildId;
                sizing = golf.bind(verify)(report, tango);
 579:
                if(!(oscar != sizing)) { _fun57358_ip = 696; continue _fun57358 }
 583:
                golf = sizing.channelId;
                tango = mike.channelId;
                if(!(golf === tango)) { _fun57358_ip = 696; continue _fun57358 }
 597:
                verify = _closure1_slot0;
                tango = _closure1_slot2;
                golf = 17;
                golf = tango[golf];
                romeo = verify.bind(offset)(golf);
                golf = romeo.encodeStreamKey;
                romeo = golf.bind(romeo)(sizing);
                golf = {};
                update = golf;
                echo = kilo;
                kilo = copyDataProperties(update, echo);
                golf[backup] = romeo;
                romeo = _closure1_slot16;
                romeo = romeo.STREAM;
                golf[foxtrot] = romeo;
                tango = tango[yankee];
                tango = verify.bind(offset)(tango);
                tango = tango.RequestToSpeakStates;
                tango = tango.NONE;
                golf[options] = tango;
                tango = entity.push;
                tango = tango.bind(entity)(golf);
 696:
                return entity;
 698:
                tango = mike.guildId;
                tango = oscar != tango;
                if(!tango) { _fun57358_ip = 730; continue _fun57358 }
 710:
                options = _closure1_slot14;
                golf = options.isPublic;
                oscar = mike.channelId;
                tango = golf.bind(options)(oscar);
 730:
                if(!tango) { _fun57358_ip = 754; continue _fun57358 }
 733:
                tango = _closure1_slot7;
                zulu = tango.requestMember;
                mike = mike.guildId;
                mike = zulu.bind(tango)(mike, report);
 754:
                return entity;
 756:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(9);
        mike[0] = entity;
        entity = {};
        oscar = 'updateParticipant';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun57359: for(var _fun57359_ip = 0; ; ) switch(_fun57359_ip) {
 0:
                tango = argFoo;
                mike = this;
                var _closure3_slot0 = mike;
                var _closure3_slot1 = tango;
                entity = mike.participants;
                options = entity[tango];
                entity = mike._getParticipantsForUser;
                zulu = entity.bind(mike)(tango, options);
                oscar = null;
                entity = oscar != options;
                if(entity) { _fun57359_ip = 58; continue _fun57359 }
 47:
                verify = zulu.length;
                golf = 0;
                entity = golf !== verify;
 58:
                if(!entity) { _fun57359_ip = 107; continue _fun57359 }
 61:
                if(!(oscar != options)) { _fun57359_ip = 80; continue _fun57359 }
 65:
                golf = options.forEach;
                oscar = function(argFoo) {
                    entity = argFoo;
                    mike = _closure3_slot0;
                    report = mike._participantsIndex;
                    tango = report.delete;
                    zulu = entity.id;
                    zulu = tango.bind(report)(zulu);
                    zulu = mike._requestToSpeakIndex;
                    mike = zulu.delete;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                oscar = golf.bind(options)(oscar);
 80:
                oscar = zulu.forEach;
                report = function(argFoo) {
                    _fun57361: for(var _fun57361_ip = 0; ; ) switch(_fun57361_ip) {
 0:
                        tango = argFoo;
                        mike = _closure3_slot0;
                        report = mike._participantsIndex;
                        zulu = report.set;
                        mike = tango.id;
                        mike = zulu.bind(report)(mike, tango);
                        zulu = tango.id;
                        mike = _closure3_slot1;
                        if(!(zulu === mike)) { _fun57361_ip = 68; continue _fun57361 }
 45:
                        report = _closure1_slot19;
                        zulu = tango.rtsState;
                        mike = undefined;
                        mike = report.bind(mike)(zulu);
                        if(mike) { _fun57361_ip = 94; continue _fun57361 }
 68:
                        mike = _closure3_slot0;
                        report = mike._requestToSpeakIndex;
                        zulu = report.delete;
                        mike = _closure3_slot1;
                        mike = zulu.bind(report)(mike);
                        _fun57361_ip = 119; continue _fun57361;
 94:
                        mike = _closure3_slot0;
                        zulu = mike._requestToSpeakIndex;
                        mike = zulu.set;
                        entity = _closure3_slot1;
                        entity = mike.bind(zulu)(entity, tango);
 119:
                        entity = undefined;
                        return entity;
                    }
                };
                report = oscar.bind(zulu)(report);
                mike = mike.participants;
                mike[tango] = zulu;
                entity = true;
 107:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'rebuild';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun57362: for(var _fun57362_ip = 0; ; ) switch(_fun57362_ip) {
 0:
                tango = this;
                var _closure3_slot0 = tango;
                report = _closure1_slot6;
                zulu = report.getChannel;
                mike = tango.channelId;
                mike = zulu.bind(report)(mike);
                zulu = null;
                if(!(zulu != mike)) { _fun57362_ip = 179; continue _fun57362 }
 40:
                zulu = mike.isGuildStageVoice;
                zulu = zulu.bind(mike)();
                if(!zulu) { _fun57362_ip = 179; continue _fun57362 }
 56:
                zulu = global;
                report = zulu.Set;
                oscar = zulu.Object;
                zulu = oscar.keys;
                options = _closure1_slot11;
                golf = options.getVoiceStatesForChannel;
                mike = mike.id;
                mike = golf.bind(options)(mike);
                verify = zulu.bind(oscar)(mike);
                zulu = report.prototype;
                zulu = Object.create(zulu, {constructor: {value: report}});
                offset = zulu;
                mike = new offset[report](verify, options);
                zulu = mike instanceof Object ? mike : zulu;
                report = tango._participantsIndex;
                mike = report.clear;
                mike = mike.bind(report)();
                report = tango._requestToSpeakIndex;
                mike = report.clear;
                mike = mike.bind(report)();
                mike = {};
                tango['participants'] = mike;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.updateParticipant;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = true;
                return entity;
 179:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'version';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._participantsIndex;
            entity = entity.version;
            return entity;
        };
        entity['get'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'size';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity._participantsIndex;
            mike = zulu.size;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'toArray';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            tango = entity._participantsIndex;
            zulu = tango.values;
            mike = argFoo;
            entity = true;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'getParticipant';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun57367: for(var _fun57367_ip = 0; ; ) switch(_fun57367_ip) {
 0:
                entity = this;
                zulu = entity._participantsIndex;
                mike = zulu.get;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun57367_ip = 34; continue _fun57367 }
 31:
                entity = mike;
 34:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'requestToSpeakVersion';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._requestToSpeakIndex;
            entity = entity.version;
            return entity;
        };
        entity['get'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'getRequestToSpeakParticipants';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            tango = entity._requestToSpeakIndex;
            zulu = tango.values;
            mike = undefined;
            entity = true;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = report;
        mike[8] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    oscar = oscar.bind(entity)();
    golf = 18;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/stage_channels/StageChannelParticipants.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['StageChannelParticipantNamedIndex'] = report;
    zulu['StageChannelParticipantTypes'] = tango;
    zulu['isRequestedToSpeakAll'] = mike;
    return entity;
})();