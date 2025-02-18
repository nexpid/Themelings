// app/modules/stage_channels/StageChannelParticipants.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    report = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = report;
    var _closure1_slot2 = verify;
    entity = function(argFoo) { // Original name: sortKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.speaker;
            tangon = michal.role;
            romeon = michal.user;
            yankee = michal.userNick;
            verify = michal.connectedOn;
            zuuluu = michal.voiceState;
            report = michal.type;
            option = '\x01';
            golfie = option;
            if(!entity) { _fun00002_ip = 61; continue _fun00001 }
 55:
            golfie = '\x00';
 61:
            entity = _closure1_slot16;
            entity = entity.STREAM;
            oscard = option;
            if(!(report === entity)) { _fun00002_ip = 87; continue _fun00001 }
 81:
            oscard = '\x00';
 87:
            offset = zuuluu.selfMute;
            entity = '\x00';
            report = entity;
            if(!offset) { _fun00002_ip = 108; continue _fun00001 }
 105:
            report = option;
 108:
            zuuluu = zuuluu.selfVideo;
            if(!zuuluu) { _fun00002_ip = 120; continue _fun00001 }
 117:
            option = entity;
 120:
            zuuluu = null;
            foxtra = zuuluu == tangon;
            offset = undefined;
            entity = undefined;
            if(foxtra) { _fun00002_ip = 138; continue _fun00001 }
 133:
            entity = tangon.position;
 138:
            zuuluu = zuuluu != entity;
            foxtra = 999;
            if(!zuuluu) { _fun00002_ip = 154; continue _fun00001 }
 151:
            foxtra = entity;
 154:
            entity = global;
            zuuluu = entity.HermesInternal;
            zuuluu = zuuluu.concat;
            tangon = '';
            kiloes = zuuluu.bind(tangon)(foxtra);
            backup = kiloes.padStart;
            foxtra = 3;
            zuuluu = '0';
            result = backup.bind(kiloes)(foxtra, zuuluu);
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            michal = 12;
            michal = backup[michal];
            michal = foxtra.bind(offset)(michal);
            sizing = michal.bind(offset)(yankee, romeon);
            entity = entity.HermesInternal;
            entity = entity.concat;
            vacuum = tangon;
            ctrled = golfie;
            source = oscard;
            update = report;
            echoed = option;
            output = verify;
            entity = vacuum[entity](ctrled, source, update, echoed, result, output, sizing, kiloes);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: requestToSpeakSortKey
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.user;
            entity = entity.voiceState;
            report = entity.requestToSpeakTimestamp;
            entity = null;
            if(!(entity != report)) { _fun00004_ip = 73; continue _fun00003 }
 26:
            entity = global;
            tangon = entity.Date;
            zuuluu = tangon.parse;
            report = zuuluu.bind(tangon)(report);
            tangon = michal.id;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            entity = '';
            entity = zuuluu.bind(entity)(report, tangon);
            _fun00004_ip = 78; continue _fun00003;
 73:
            entity = michal.id;
 78:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    michal = function(argFoo) { // Original name: isRequestedToSpeakAll
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 13;
            entity = entity[oscard];
            report = undefined;
            entity = tangon.bind(report)(entity);
            entity = entity.RequestToSpeakStates;
            entity = entity.REQUESTED_TO_SPEAK;
            entity = zuuluu === entity;
            if(entity) { _fun00006_ip = 80; continue _fun00005 }
 47:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.RequestToSpeakStates;
            michal = michal.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            entity = zuuluu === michal;
 80:
            return entity;
        }
    };
    var _closure1_slot19 = michal;
    entity = function(argFoo) { // Original name: getParticipantIndex
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            golfie = entity.speaker;
            oscard = entity.role;
            verify = entity.rtsState;
            report = entity.blocked;
            tangon = entity.ignored;
            zuuluu = entity.isFriend;
            entity = new Array(0);
            option = _closure1_slot19;
            yankee = undefined;
            option = option.bind(yankee)(verify);
            if(!option) { _fun00008_ip = 80; continue _fun00007 }
 60:
            offset = entity.push;
            option = _closure1_slot15;
            option = option.ALL_REQUESTED_TO_SPEAK;
            option = offset.bind(entity)(option);
 80:
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 13;
            option = romeon[option];
            option = offset.bind(yankee)(option);
            option = option.RequestToSpeakStates;
            option = option.REQUESTED_TO_SPEAK;
            if(!(verify === option)) { _fun00008_ip = 136; continue _fun00007 }
 116:
            verify = entity.push;
            option = _closure1_slot15;
            option = option.REQUESTED_TO_SPEAK_ONLY;
            option = verify.bind(entity)(option);
 136:
            if(golfie) { _fun00008_ip = 204; continue _fun00007 }
 139:
            golfie = null;
            if(!(golfie == oscard)) { _fun00008_ip = 167; continue _fun00007 }
 145:
            option = entity.push;
            golfie = _closure1_slot15;
            golfie = golfie.NO_ROLE;
            golfie = option.bind(entity)(golfie);
            _fun00008_ip = 182; continue _fun00007;
 167:
            golfie = entity.push;
            oscard = oscard.id;
            oscard = golfie.bind(entity)(oscard);
 182:
            golfie = entity.push;
            oscard = _closure1_slot15;
            oscard = oscard.AUDIENCE;
            oscard = golfie.bind(entity)(oscard);
            _fun00008_ip = 224; continue _fun00007;
 204:
            golfie = entity.push;
            oscard = _closure1_slot15;
            oscard = oscard.SPEAKER;
            oscard = golfie.bind(entity)(oscard);
 224:
            if(report) { _fun00008_ip = 252; continue _fun00007 }
 227:
            if(!tangon) { _fun00008_ip = 272; continue _fun00007 }
 230:
            report = entity.push;
            tangon = _closure1_slot15;
            tangon = tangon.IGNORED;
            tangon = report.bind(entity)(tangon);
            _fun00008_ip = 272; continue _fun00007;
 252:
            report = entity.push;
            tangon = _closure1_slot15;
            tangon = tangon.BLOCKED;
            tangon = report.bind(entity)(tangon);
 272:
            if(!zuuluu) { _fun00008_ip = 295; continue _fun00007 }
 275:
            zuuluu = entity.push;
            michal = _closure1_slot15;
            michal = michal.FRIEND;
            michal = zuuluu.bind(entity)(michal);
 295:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    offset = entity.Object;
    golfie = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = verify[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.getComparator;
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    report = {};
    tangon = 'SPEAKER';
    report['SPEAKER'] = tangon;
    tangon = 'AUDIENCE';
    report['AUDIENCE'] = tangon;
    tangon = 'NO_ROLE';
    report['NO_ROLE'] = tangon;
    tangon = 'ALL_REQUESTED_TO_SPEAK';
    report['ALL_REQUESTED_TO_SPEAK'] = tangon;
    tangon = 'REQUESTED_TO_SPEAK_ONLY';
    report['REQUESTED_TO_SPEAK_ONLY'] = tangon;
    tangon = 'BLOCKED';
    report['BLOCKED'] = tangon;
    tangon = 'IGNORED';
    report['IGNORED'] = tangon;
    tangon = 'FRIEND';
    report['FRIEND'] = tangon;
    tangon = 'SELECTED';
    report['SELECTED'] = tangon;
    tangon = 'MEDIA';
    report['MEDIA'] = tangon;
    var _closure1_slot15 = report;
    tangon = {};
    golfie = 'VOICE';
    tangon['VOICE'] = golfie;
    golfie = 'STREAM';
    tangon['STREAM'] = golfie;
    var _closure1_slot16 = tangon;
    oscard = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: StageChannelParticipants
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                zuuluu = this;
                oscard = _closure1_slot3;
                tangon = _closure2_slot0;
                entity = undefined;
                tangon = oscard.bind(entity)(zuuluu, tangon);
                tangon = {};
                zuuluu['participants'] = tangon;
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                tangon = 14;
                option = golfie[tangon];
                option = oscard.bind(entity)(option);
                yankee = option.SecondaryIndexMap;
                foxtra = _closure1_slot20;
                romeon = _closure1_slot17;
                verify = yankee.prototype;
                verify = Object.create(verify, {constructor: {value: yankee}});
                backup = verify;
                option = new backup[yankee](foxtra, romeon, yankee);
                option = option instanceof Object ? option : verify;
                zuuluu['_participantsIndex'] = option;
                tangon = golfie[tangon];
                tangon = oscard.bind(entity)(tangon);
                option = tangon.SecondaryIndexMap;
                romeon = _closure1_slot18;
                tangon = option.prototype;
                oscard = Object.create(tangon, {constructor: {value: option}});
                foxtra = function() {
                    entity = new Array(0);
                    return entity;
                };
                backup = oscard;
                tangon = new backup[option](foxtra, romeon, yankee);
                tangon = tangon instanceof Object ? tangon : oscard;
                zuuluu['_requestToSpeakIndex'] = tangon;
                zuuluu['channelId'] = report;
                tangon = _closure1_slot6;
                michal = tangon.getChannel;
                report = michal.bind(tangon)(report);
                michal = null;
                tangon = michal == report;
                michal = undefined;
                if(tangon) { _fun00010_ip = 189; continue _fun00009 }
 179:
                tangon = report.getGuildId;
                michal = tangon.bind(report)();
 189:
                zuuluu['guildId'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = '_getParticipantsForUser';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                offset = argBar;
                michal = this;
                entity = new Array(0);
                golfie = _closure1_slot11;
                oscard = golfie.getVoiceStateForChannel;
                tangon = michal.channelId;
                verify = oscard.bind(golfie)(tangon, report);
                oscard = null;
                if(!(oscard != verify)) { _fun00012_ip = 756; continue _fun00011 }
 46:
                golfie = _closure1_slot10;
                tangon = golfie.getUser;
                tangon = tangon.bind(golfie)(report);
                if(!(oscard != tangon)) { _fun00012_ip = 698; continue _fun00011 }
 68:
                golfie = oscard != offset;
                option = null;
                if(!golfie) { _fun00012_ip = 83; continue _fun00011 }
 77:
                golfie = 0;
                option = offset[golfie];
 83:
                golfie = michal.guildId;
                offset = oscard != golfie;
                golfie = null;
                if(!offset) { _fun00012_ip = 118; continue _fun00011 }
 97:
                romeon = _closure1_slot8;
                yankee = romeon.getMember;
                offset = michal.guildId;
                golfie = yankee.bind(romeon)(offset, report);
 118:
                yankee = oscard == golfie;
                offset = undefined;
                romeon = undefined;
                if(yankee) { _fun00012_ip = 135; continue _fun00011 }
 129:
                romeon = golfie.nick;
 135:
                if(!(oscard == romeon)) { _fun00012_ip = 182; continue _fun00011 }
 139:
                foxtra = _closure1_slot1;
                backup = _closure1_slot2;
                yankee = 15;
                yankee = backup[yankee];
                kiloes = foxtra.bind(offset)(yankee);
                backup = kiloes.getName;
                foxtra = michal.guildId;
                yankee = michal.channelId;
                romeon = backup.bind(kiloes)(foxtra, yankee, tangon);
 182:
                kiloes = {};
                kiloes['user'] = tangon;
                backup = _closure1_slot1;
                foxtra = _closure1_slot2;
                yankee = 15;
                yankee = foxtra[yankee];
                output = backup.bind(offset)(yankee);
                sizing = output.getName;
                backup = michal.guildId;
                yankee = michal.channelId;
                yankee = sizing.bind(output)(backup, yankee, tangon);
                kiloes['userNick'] = yankee;
                kiloes['nick'] = romeon;
                yankee = _closure1_slot12;
                yankee = yankee.bind(offset)(verify, romeon);
                kiloes['comparator'] = yankee;
                kiloes['voiceState'] = verify;
                romeon = _closure1_slot0;
                yankee = 16;
                yankee = foxtra[yankee];
                foxtra = romeon.bind(offset)(yankee);
                romeon = foxtra.getHighestHoistedRole;
                yankee = michal.guildId;
                yankee = romeon.bind(foxtra)(yankee, report);
                kiloes['role'] = yankee;
                foxtra = _closure1_slot13;
                romeon = foxtra.isSpeaker;
                yankee = michal.channelId;
                yankee = romeon.bind(foxtra)(report, yankee);
                kiloes['speaker'] = yankee;
                kiloes['member'] = golfie;
                romeon = _closure1_slot9;
                yankee = romeon.isBlocked;
                golfie = tangon.id;
                golfie = yankee.bind(romeon)(golfie);
                kiloes['blocked'] = golfie;
                yankee = romeon.isIgnored;
                golfie = tangon.id;
                golfie = yankee.bind(romeon)(golfie);
                kiloes['ignored'] = golfie;
                yankee = romeon.isFriend;
                golfie = tangon.id;
                golfie = yankee.bind(romeon)(golfie);
                kiloes['isFriend'] = golfie;
                yankee = oscard == option;
                golfie = undefined;
                if(yankee) { _fun00012_ip = 412; continue _fun00011 }
 406:
                golfie = option.connectedOn;
 412:
                if(!(oscard == golfie)) { _fun00012_ip = 433; continue _fun00011 }
 416:
                option = global;
                yankee = option.Date;
                option = yankee.now;
                golfie = option.bind(yankee)();
 433:
                kiloes['connectedOn'] = golfie;
                golfie = {};
                update = golfie;
                echoed = kiloes;
                option = copyDataProperties(update, echoed);
                option = _closure1_slot16;
                option = option.VOICE;
                foxtra = 'type';
                golfie[foxtra] = option;
                tangon = tangon.id;
                backup = 'id';
                golfie[backup] = tangon;
                option = _closure1_slot0;
                tangon = _closure1_slot2;
                yankee = 13;
                tangon = tangon[yankee];
                option = option.bind(offset)(tangon);
                tangon = option.getAudienceRequestToSpeakState;
                tangon = tangon.bind(option)(verify);
                option = 'rtsState';
                golfie[option] = tangon;
                tangon = entity.push;
                tangon = tangon.bind(entity)(golfie);
                verify = _closure1_slot5;
                golfie = verify.getStreamForUser;
                tangon = michal.guildId;
                sizing = golfie.bind(verify)(report, tangon);
                if(!(oscard == sizing)) { _fun00012_ip = 579; continue _fun00011 }
 558:
                verify = _closure1_slot5;
                golfie = verify.getActiveStreamForUser;
                tangon = michal.guildId;
                sizing = golfie.bind(verify)(report, tangon);
 579:
                if(!(oscard != sizing)) { _fun00012_ip = 696; continue _fun00011 }
 583:
                golfie = sizing.channelId;
                tangon = michal.channelId;
                if(!(golfie === tangon)) { _fun00012_ip = 696; continue _fun00011 }
 597:
                verify = _closure1_slot0;
                tangon = _closure1_slot2;
                golfie = 17;
                golfie = tangon[golfie];
                romeon = verify.bind(offset)(golfie);
                golfie = romeon.encodeStreamKey;
                romeon = golfie.bind(romeon)(sizing);
                golfie = {};
                update = golfie;
                echoed = kiloes;
                kiloes = copyDataProperties(update, echoed);
                golfie[backup] = romeon;
                romeon = _closure1_slot16;
                romeon = romeon.STREAM;
                golfie[foxtra] = romeon;
                tangon = tangon[yankee];
                tangon = verify.bind(offset)(tangon);
                tangon = tangon.RequestToSpeakStates;
                tangon = tangon.NONE;
                golfie[option] = tangon;
                tangon = entity.push;
                tangon = tangon.bind(entity)(golfie);
 696:
                return entity;
 698:
                tangon = michal.guildId;
                tangon = oscard != tangon;
                if(!tangon) { _fun00012_ip = 730; continue _fun00011 }
 710:
                option = _closure1_slot14;
                golfie = option.isPublic;
                oscard = michal.channelId;
                tangon = golfie.bind(option)(oscard);
 730:
                if(!tangon) { _fun00012_ip = 754; continue _fun00011 }
 733:
                tangon = _closure1_slot7;
                zuuluu = tangon.requestMember;
                michal = michal.guildId;
                michal = zuuluu.bind(tangon)(michal, report);
 754:
                return entity;
 756:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(9);
        michal[0] = entity;
        entity = {};
        oscard = 'updateParticipant';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                michal = this;
                var _closure3_slot0 = michal;
                var _closure3_slot1 = tangon;
                entity = michal.participants;
                option = entity[tangon];
                entity = michal._getParticipantsForUser;
                zuuluu = entity.bind(michal)(tangon, option);
                oscard = null;
                entity = oscard != option;
                if(entity) { _fun00014_ip = 58; continue _fun00013 }
 47:
                verify = zuuluu.length;
                golfie = 0;
                entity = golfie !== verify;
 58:
                if(!entity) { _fun00014_ip = 107; continue _fun00013 }
 61:
                if(!(oscard != option)) { _fun00014_ip = 80; continue _fun00013 }
 65:
                golfie = option.forEach;
                oscard = function(argFoo) {
                    entity = argFoo;
                    michal = _closure3_slot0;
                    report = michal._participantsIndex;
                    tangon = report.delete;
                    zuuluu = entity.id;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = michal._requestToSpeakIndex;
                    michal = zuuluu.delete;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                oscard = golfie.bind(option)(oscard);
 80:
                oscard = zuuluu.forEach;
                report = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        tangon = argFoo;
                        michal = _closure3_slot0;
                        report = michal._participantsIndex;
                        zuuluu = report.set;
                        michal = tangon.id;
                        michal = zuuluu.bind(report)(michal, tangon);
                        zuuluu = tangon.id;
                        michal = _closure3_slot1;
                        if(!(zuuluu === michal)) { _fun00016_ip = 68; continue _fun00015 }
 45:
                        report = _closure1_slot19;
                        zuuluu = tangon.rtsState;
                        michal = undefined;
                        michal = report.bind(michal)(zuuluu);
                        if(michal) { _fun00016_ip = 94; continue _fun00015 }
 68:
                        michal = _closure3_slot0;
                        report = michal._requestToSpeakIndex;
                        zuuluu = report.delete;
                        michal = _closure3_slot1;
                        michal = zuuluu.bind(report)(michal);
                        _fun00016_ip = 119; continue _fun00015;
 94:
                        michal = _closure3_slot0;
                        zuuluu = michal._requestToSpeakIndex;
                        michal = zuuluu.set;
                        entity = _closure3_slot1;
                        entity = michal.bind(zuuluu)(entity, tangon);
 119:
                        entity = undefined;
                        return entity;
                    }
                };
                report = oscard.bind(zuuluu)(report);
                michal = michal.participants;
                michal[tangon] = zuuluu;
                entity = true;
 107:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'rebuild';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tangon = this;
                var _closure3_slot0 = tangon;
                report = _closure1_slot6;
                zuuluu = report.getChannel;
                michal = tangon.channelId;
                michal = zuuluu.bind(report)(michal);
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00018_ip = 179; continue _fun00017 }
 40:
                zuuluu = michal.isGuildStageVoice;
                zuuluu = zuuluu.bind(michal)();
                if(!zuuluu) { _fun00018_ip = 179; continue _fun00017 }
 56:
                zuuluu = global;
                report = zuuluu.Set;
                oscard = zuuluu.Object;
                zuuluu = oscard.keys;
                option = _closure1_slot11;
                golfie = option.getVoiceStatesForChannel;
                michal = michal.id;
                michal = golfie.bind(option)(michal);
                verify = zuuluu.bind(oscard)(michal);
                zuuluu = report.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: report}});
                offset = zuuluu;
                michal = new offset[report](verify, option);
                zuuluu = michal instanceof Object ? michal : zuuluu;
                report = tangon._participantsIndex;
                michal = report.clear;
                michal = michal.bind(report)();
                report = tangon._requestToSpeakIndex;
                michal = report.clear;
                michal = michal.bind(report)();
                michal = {};
                tangon['participants'] = michal;
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.updateParticipant;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = true;
                return entity;
 179:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'version';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._participantsIndex;
            entity = entity.version;
            return entity;
        };
        entity['get'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'size';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity._participantsIndex;
            michal = zuuluu.size;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'toArray';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            tangon = entity._participantsIndex;
            zuuluu = tangon.values;
            michal = argFoo;
            entity = true;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'getParticipant';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = this;
                zuuluu = entity._participantsIndex;
                michal = zuuluu.get;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00020_ip = 34; continue _fun00019 }
 31:
                entity = michal;
 34:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'requestToSpeakVersion';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._requestToSpeakIndex;
            entity = entity.version;
            return entity;
        };
        entity['get'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'getRequestToSpeakParticipants';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            tangon = entity._requestToSpeakIndex;
            zuuluu = tangon.values;
            michal = undefined;
            entity = true;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = report;
        michal[8] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    oscard = oscard.bind(entity)();
    golfie = 18;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/stage_channels/StageChannelParticipants.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    zuuluu['StageChannelParticipantNamedIndex'] = report;
    zuuluu['StageChannelParticipantTypes'] = tangon;
    zuuluu['isRequestedToSpeakAll'] = michal;
    return entity;
})();