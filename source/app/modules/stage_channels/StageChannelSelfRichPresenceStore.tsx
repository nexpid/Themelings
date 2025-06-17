// app/modules/stage_channels/StageChannelSelfRichPresenceStore.tsx
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
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    verify = function() { // Original name: handleUpdateActivity
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = function() { // Original name: buildActivity
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure1_slot12;
                    entity = michal.getVoiceChannelId;
                    foxtra = entity.bind(michal)();
                    entity = null;
                    if(!(entity != foxtra)) { _fun00006_ip = 685; continue _fun00005 }
 26:
                    zuuluu = _closure1_slot14;
                    michal = zuuluu.getStageInstanceByChannel;
                    romeon = michal.bind(zuuluu)(foxtra);
                    if(!(entity != romeon)) { _fun00006_ip = 683; continue _fun00005 }
 48:
                    zuuluu = _closure1_slot9;
                    michal = zuuluu.getChannel;
                    zuuluu = michal.bind(zuuluu)(foxtra);
                    if(!(entity != zuuluu)) { _fun00006_ip = 681; continue _fun00005 }
 69:
                    tangon = _closure1_slot2;
                    report = _closure1_slot3;
                    michal = 13;
                    michal = report[michal];
                    verify = undefined;
                    report = tangon.bind(verify)(michal);
                    tangon = report.canEveryone;
                    michal = _closure1_slot18;
                    michal = michal.VIEW_CHANNEL;
                    michal = tangon.bind(report)(michal, zuuluu);
                    if(michal) { _fun00006_ip = 118; continue _fun00005 }
 116:
                    return entity;
 118:
                    report = _closure1_slot10;
                    tangon = report.getGuild;
                    michal = zuuluu.getGuildId;
                    michal = michal.bind(zuuluu)();
                    oscard = tangon.bind(report)(michal);
                    if(!(entity != oscard)) { _fun00006_ip = 679; continue _fun00005 }
 149:
                    tangon = oscard.hasFeature;
                    michal = _closure1_slot17;
                    michal = michal.DISCOVERABLE;
                    michal = tangon.bind(oscard)(michal);
                    if(michal) { _fun00006_ip = 175; continue _fun00005 }
 173:
                    return entity;
 175:
                    tangon = _closure1_slot0;
                    report = _closure1_slot3;
                    michal = 14;
                    michal = report[michal];
                    tangon = tangon.bind(verify)(michal);
                    michal = tangon.packStageChannelPartyId;
                    tangon = michal.bind(tangon)(zuuluu, romeon);
                    report = _closure1_slot20;
                    golfie = entity == report;
                    michal = undefined;
                    if(golfie) { _fun00006_ip = 240; continue _fun00005 }
 220:
                    report = report.party;
                    golfie = entity == report;
                    michal = undefined;
                    if(golfie) { _fun00006_ip = 240; continue _fun00005 }
 235:
                    michal = report.id;
 240:
                    yankee = null;
                    if(!(michal === tangon)) { _fun00006_ip = 250; continue _fun00005 }
 246:
                    yankee = _closure1_slot20;
 250:
                    option = _closure1_slot13;
                    golfie = option.getMutableParticipants;
                    report = zuuluu.id;
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot3;
                    michal = 15;
                    michal = kiloes[michal];
                    michal = backup.bind(verify)(michal);
                    michal = michal.StageChannelParticipantNamedIndex;
                    michal = michal.SPEAKER;
                    michal = golfie.bind(option)(report, michal);
                    golfie = michal.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        entity = 15;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.StageChannelParticipantTypes;
                        entity = entity.STREAM;
                        entity = michal === entity;
                        return entity;
                    };
                    report = golfie.bind(michal)(report);
                    golfie = report.length;
                    michal = michal.length;
                    report = michal - golfie;
                    option = _closure1_slot13;
                    michal = option.getParticipantCount;
                    michal = michal.bind(option)(foxtra);
                    option = michal - golfie;
                    golfie = entity == yankee;
                    michal = undefined;
                    if(golfie) { _fun00006_ip = 382; continue _fun00005 }
 362:
                    golfie = yankee.party;
                    foxtra = entity == golfie;
                    michal = undefined;
                    if(foxtra) { _fun00006_ip = 382; continue _fun00005 }
 377:
                    michal = golfie.size;
 382:
                    michal = entity != michal;
                    golfie = 0;
                    if(!michal) { _fun00006_ip = 409; continue _fun00005 }
 391:
                    michal = yankee.party;
                    foxtra = michal.size;
                    michal = 1;
                    golfie = foxtra[michal];
 409:
                    michal = {};
                    foxtra = _closure1_slot15;
                    michal['application_id'] = foxtra;
                    romeon = romeon.topic;
                    if(!(entity == romeon)) { _fun00006_ip = 436; continue _fun00005 }
 430:
                    romeon = zuuluu.topic;
 436:
                    if(!(entity == romeon)) { _fun00006_ip = 445; continue _fun00005 }
 440:
                    romeon = zuuluu.name;
 445:
                    michal['name'] = romeon;
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot3;
                    romeon = 16;
                    romeon = backup[romeon];
                    foxtra = foxtra.bind(verify)(romeon);
                    romeon = foxtra.getStageHasMedia;
                    zuuluu = zuuluu.id;
                    zuuluu = romeon.bind(foxtra)(zuuluu);
                    offset = _closure1_slot16;
                    if(zuuluu) { _fun00006_ip = 500; continue _fun00005 }
 492:
                    zuuluu = offset.LISTENING;
                    _fun00006_ip = 506; continue _fun00005;
 500:
                    zuuluu = offset.WATCHING;
 506:
                    michal['type'] = zuuluu;
                    zuuluu = {};
                    romeon = entity == yankee;
                    offset = undefined;
                    if(romeon) { _fun00006_ip = 541; continue _fun00005 }
 521:
                    yankee = yankee.timestamps;
                    romeon = entity == yankee;
                    offset = undefined;
                    if(romeon) { _fun00006_ip = 541; continue _fun00005 }
 536:
                    offset = yankee.start;
 541:
                    if(!(entity == offset)) { _fun00006_ip = 583; continue _fun00005 }
 545:
                    yankee = global;
                    yankee = yankee.Date;
                    romeon = yankee.prototype;
                    romeon = Object.create(romeon, {constructor: {value: yankee}});
                    result = romeon;
                    yankee = new result[yankee](output);
                    romeon = yankee instanceof Object ? yankee : romeon;
                    yankee = romeon.getTime;
                    offset = yankee.bind(romeon)();
 583:
                    zuuluu['start'] = offset;
                    michal['timestamps'] = zuuluu;
                    zuuluu = {};
                    offset = oscard.icon;
                    yankee = entity != offset;
                    verify = undefined;
                    if(!yankee) { _fun00006_ip = 611; continue _fun00005 }
 608:
                    verify = offset;
 611:
                    zuuluu['small_image'] = verify;
                    oscard = oscard.name;
                    zuuluu['small_text'] = oscard;
                    michal['assets'] = zuuluu;
                    zuuluu = {};
                    zuuluu['id'] = tangon;
                    tangon = new Array(2);
                    tangon[0] = report;
                    report = global;
                    oscard = report.Math;
                    report = oscard.max;
                    report = report.bind(oscard)(option, golfie);
                    tangon[1] = report;
                    zuuluu['size'] = tangon;
                    michal['party'] = zuuluu;
                    return michal;
 679:
                    return entity;
 681:
                    return entity;
 683:
                    return entity;
 685:
                    return entity;
                }
            };
            report = undefined;
            zuuluu = entity.bind(report)();
            tangon = _closure1_slot1;
            oscard = _closure1_slot3;
            entity = 17;
            entity = oscard[entity];
            tangon = tangon.bind(report)(entity);
            entity = _closure1_slot20;
            entity = tangon.bind(report)(zuuluu, entity);
            entity = !entity;
            if(!entity) { _fun00004_ip = 58; continue _fun00003 }
 52:
            _closure1_slot20 = zuuluu;
            entity = true;
 58:
            return entity;
        }
    };
    var _closure1_slot22 = verify;
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot12 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot13 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot14 = michal;
    michal = 11;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.STAGE_APPLICATION_ID;
    var _closure1_slot15 = michal;
    michal = 12;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.ActivityTypes;
    var _closure1_slot16 = option;
    option = michal.GuildFeatures;
    var _closure1_slot17 = option;
    option = michal.Permissions;
    var _closure1_slot18 = option;
    michal = michal.RTCConnectionStates;
    var _closure1_slot19 = michal;
    michal = null;
    var _closure1_slot20 = michal;
    michal = 18;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: StageChannelSelfRichPresenceStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot4;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot7;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot6;
                entity = _closure1_slot21;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot7;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            oscard = this;
            report = oscard.waitFor;
            offset = _closure1_slot9;
            verify = _closure1_slot12;
            option = _closure1_slot14;
            golfie = _closure1_slot11;
            yankee = oscard;
            entity = yankee[report](offset, verify, option, golfie, oscard);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'getActivity';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot20;
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'StageChannelSelfRichPresenceStore';
    option['displayName'] = michal;
    michal = 19;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    michal['CONNECTION_OPEN'] = verify;
    michal['STAGE_INSTANCE_CREATE'] = verify;
    michal['STAGE_INSTANCE_UPDATE'] = verify;
    michal['STAGE_INSTANCE_DELETE'] = verify;
    michal['VOICE_CHANNEL_SELECT'] = verify;
    verify = function(argFoo) { // Original name: handleUpdateRTCConnection
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            oscard = entity.state;
            report = _closure1_slot20;
            entity = null;
            golfie = entity == report;
            zuuluu = undefined;
            tangon = undefined;
            if(golfie) { _fun00010_ip = 64; continue _fun00009 }
 28:
            report = report.party;
            golfie = entity == report;
            tangon = undefined;
            if(golfie) { _fun00010_ip = 64; continue _fun00009 }
 43:
            golfie = report.size;
            report = entity == golfie;
            tangon = undefined;
            if(report) { _fun00010_ip = 64; continue _fun00009 }
 57:
            report = 1;
            tangon = golfie[report];
 64:
            golfie = entity != tangon;
            report = 0;
            entity = 0;
            if(!golfie) { _fun00010_ip = 78; continue _fun00009 }
 75:
            entity = tangon;
 78:
            tangon = _closure1_slot19;
            tangon = tangon.RTC_CONNECTED;
            tangon = oscard !== tangon;
            if(tangon) { _fun00010_ip = 99; continue _fun00009 }
 95:
            tangon = entity > report;
 99:
            entity = !tangon;
            if(tangon) { _fun00010_ip = 113; continue _fun00009 }
 105:
            michal = _closure1_slot22;
            entity = michal.bind(zuuluu)();
 113:
            return entity;
        }
    };
    michal['RTC_CONNECTION_STATE'] = verify;
    tangon = function(argFoo) { // Original name: handleVoiceStateUpdates
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            golfie = entity.voiceStates;
            entity = undefined;
            var _closure2_slot0 = entity;
            zuuluu = _closure1_slot20;
            report = null;
            if(!(report != zuuluu)) { _fun00012_ip = 106; continue _fun00011 }
 30:
            oscard = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 14;
            zuuluu = option[zuuluu];
            option = oscard.bind(entity)(zuuluu);
            oscard = option.unpackStageChannelParty;
            zuuluu = _closure1_slot20;
            zuuluu = oscard.bind(option)(zuuluu);
            _closure2_slot0 = zuuluu;
            zuuluu = report != zuuluu;
            if(!zuuluu) { _fun00012_ip = 95; continue _fun00011 }
 76:
            oscard = golfie.find;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.channelId;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = michal === entity;
                return entity;
            };
            tangon = oscard.bind(golfie)(tangon);
            zuuluu = report != tangon;
 95:
            if(!zuuluu) { _fun00012_ip = 106; continue _fun00011 }
 98:
            michal = _closure1_slot22;
            michal = michal.bind(entity)();
 106:
            return entity;
        }
    };
    michal['VOICE_STATE_UPDATES'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    backup = tangon;
    romeon = michal;
    michal = new backup[option](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/stage_channels/StageChannelSelfRichPresenceStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();