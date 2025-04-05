// app/stores/VideoSpeakerStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
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
            _closure1_slot18 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    yankee = function() { // Original name: updateSpeaker
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = arguments[0];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00004_ip = 13; continue _fun00003 }
 11:
            zuuluu = true;
 13:
            var _closure2_slot0 = entity;
            var _closure2_slot1 = entity;
            tangon = _closure1_slot3;
            golfie = null;
            oscard = golfie == tangon;
            tangon = null;
            if(oscard) { _fun00004_ip = 541; continue _fun00003 }
 42:
            verify = _closure1_slot10;
            option = verify.getSelectedParticipantId;
            oscard = _closure1_slot3;
            option = option.bind(verify)(oscard);
            verify = _closure1_slot11;
            oscard = verify.getLastActiveStream;
            foxtra = oscard.bind(verify)();
            oscard = golfie != option;
            offset = null;
            if(!oscard) { _fun00004_ip = 104; continue _fun00003 }
 84:
            yankee = _closure1_slot10;
            verify = yankee.getParticipant;
            oscard = _closure1_slot3;
            offset = verify.bind(yankee)(oscard, option);
 104:
            oscard = golfie == offset;
            verify = undefined;
            if(oscard) { _fun00004_ip = 118; continue _fun00003 }
 113:
            verify = offset.type;
 118:
            oscard = _closure1_slot15;
            oscard = oscard.ACTIVITY;
            oscard = verify !== oscard;
            if(!oscard) { _fun00004_ip = 191; continue _fun00003 }
 135:
            verify = golfie == offset;
            yankee = undefined;
            if(verify) { _fun00004_ip = 149; continue _fun00003 }
 144:
            yankee = offset.type;
 149:
            verify = _closure1_slot15;
            verify = verify.USER;
            verify = yankee !== verify;
            if(verify) { _fun00004_ip = 188; continue _fun00003 }
 166:
            yankee = offset.voiceState;
            offset = golfie != yankee;
            if(!offset) { _fun00004_ip = 185; continue _fun00003 }
 179:
            offset = yankee.selfVideo;
 185:
            verify = offset;
 188:
            oscard = verify;
 191:
            if(oscard) { _fun00004_ip = 196; continue _fun00003 }
 194:
            option = null;
 196:
            oscard = option;
            if(!(golfie != foxtra)) { _fun00004_ip = 278; continue _fun00003 }
 203:
            oscard = option;
            if(!(golfie == oscard)) { _fun00004_ip = 278; continue _fun00003 }
 210:
            yankee = _closure1_slot10;
            offset = yankee.getParticipant;
            verify = _closure1_slot3;
            romeon = _closure1_slot0;
            backup = _closure1_slot2;
            option = 11;
            option = backup[option];
            romeon = romeon.bind(entity)(option);
            option = romeon.encodeStreamKey;
            option = option.bind(romeon)(foxtra);
            verify = offset.bind(yankee)(verify, option);
            offset = golfie == verify;
            option = undefined;
            if(offset) { _fun00004_ip = 275; continue _fun00003 }
 270:
            option = verify.id;
 275:
            oscard = option;
 278:
            tangon = oscard;
            if(!(golfie == tangon)) { _fun00004_ip = 541; continue _fun00003 }
 288:
            option = _closure1_slot12;
            oscard = option.getId;
            oscard = oscard.bind(option)();
            _closure2_slot0 = oscard;
            option = _closure1_slot1;
            verify = _closure1_slot2;
            oscard = 12;
            oscard = verify[oscard];
            option = option.bind(entity)(oscard);
            offset = _closure1_slot10;
            verify = offset.getVideoParticipants;
            oscard = _closure1_slot3;
            oscard = verify.bind(offset)(oscard);
            verify = option.bind(entity)(oscard);
            option = verify.filter;
            oscard = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.type;
                    entity = _closure1_slot15;
                    entity = entity.USER;
                    entity = tangon === entity;
                    if(!entity) { _fun00006_ip = 49; continue _fun00005 }
 28:
                    tangon = michal.user;
                    report = tangon.id;
                    tangon = _closure2_slot0;
                    entity = report !== tangon;
 49:
                    if(!entity) { _fun00006_ip = 80; continue _fun00005 }
 52:
                    tangon = _closure1_slot13;
                    zuuluu = tangon.isLocalVideoDisabled;
                    michal = michal.user;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(michal);
                    entity = !michal;
 80:
                    return entity;
                }
            };
            oscard = option.bind(verify)(oscard);
            verify = oscard.map;
            option = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                entity = entity.id;
                return entity;
            };
            verify = verify.bind(oscard)(option);
            option = global;
            offset = option.Date;
            option = offset.now;
            option = option.bind(offset)();
            _closure2_slot1 = option;
            offset = oscard.map;
            option = function(argFoo) {
                michal = argFoo;
                entity = michal.user;
                zuuluu = entity.id;
                entity = new Array(2);
                entity[0] = zuuluu;
                report = _closure1_slot14;
                tangon = report.getSpeakingDuration;
                michal = michal.user;
                zuuluu = michal.id;
                michal = _closure2_slot1;
                michal = tangon.bind(report)(zuuluu, michal);
                entity[1] = michal;
                return entity;
            };
            yankee = offset.bind(oscard)(option);
            offset = yankee.filter;
            option = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    entity = tangon[Symbol.iterator];
                    tangon = entity().next;
                    michal = tangon().value;
                    michal = entity;
                    oscard = undefined;
                    zuuluu = michal === oscard;
                    michal = undefined;
                    if(zuuluu) { _fun00008_ip = 49; continue _fun00007 }
 24:
                    report = tangon().value;
                    tangon = entity;
                    tangon = tangon === oscard;
                    michal = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00008_ip = 49; continue _fun00007 }
 43:
                    michal = report;
                    zuuluu = tangon;
 49:
                    if(zuuluu) { _fun00008_ip = 55; continue _fun00007 }
 52:
                    entity.return();
 55:
                    entity = 0;
                    entity = entity !== michal;
                    return entity;
                }
            };
            offset = offset.bind(yankee)(option);
            option = offset.maxBy;
            report = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon[Symbol.iterator];
                    tangon = michal().next;
                    entity = tangon().value;
                    entity = michal;
                    oscard = undefined;
                    zuuluu = entity === oscard;
                    entity = undefined;
                    if(zuuluu) { _fun00010_ip = 49; continue _fun00009 }
 24:
                    report = tangon().value;
                    tangon = michal;
                    tangon = tangon === oscard;
                    entity = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00010_ip = 49; continue _fun00009 }
 43:
                    entity = report;
                    zuuluu = tangon;
 49:
                    if(zuuluu) { _fun00010_ip = 55; continue _fun00009 }
 52:
                    michal.return();
 55:
                    entity = -entity;
                    return entity;
                }
            };
            offset = option.bind(offset)(report);
            option = golfie == offset;
            report = undefined;
            if(option) { _fun00004_ip = 462; continue _fun00003 }
 456:
            option = 0;
            report = offset[option];
 462:
            tangon = report;
            if(!(golfie == tangon)) { _fun00004_ip = 541; continue _fun00003 }
 469:
            report = _closure1_slot4;
            if(!(golfie != report)) { _fun00004_ip = 494; continue _fun00003 }
 477:
            option = verify.has;
            report = _closure1_slot4;
            report = option.bind(verify)(report);
            if(report) { _fun00004_ip = 537; continue _fun00003 }
 494:
            report = oscard.first;
            oscard = report.bind(oscard)();
            option = golfie == oscard;
            report = undefined;
            if(option) { _fun00004_ip = 532; continue _fun00003 }
 513:
            oscard = oscard.user;
            golfie = golfie == oscard;
            report = undefined;
            if(golfie) { _fun00004_ip = 532; continue _fun00003 }
 527:
            report = oscard.id;
 532:
            tangon = report;
            _fun00004_ip = 541; continue _fun00003;
 537:
            tangon = _closure1_slot4;
 541:
            report = _closure1_slot4;
            if(!(report !== tangon)) { _fun00004_ip = 570; continue _fun00003 }
 549:
            var _closure1_slot4 = tangon;
            if(!zuuluu) { _fun00004_ip = 570; continue _fun00003 }
 556:
            zuuluu = _closure1_slot17;
            michal = zuuluu.emitChange;
            michal = michal.bind(zuuluu)();
 570:
            return entity;
        }
    };
    var _closure1_slot19 = yankee;
    golfie = function() { // Original name: handleChannelRTCUpdate
        michal = _closure1_slot16;
        entity = undefined;
        entity = michal.bind(entity)();
        entity = false;
        return entity;
    };
    var _closure1_slot20 = golfie;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot12 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot13 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot14 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ParticipantTypes;
    var _closure1_slot15 = michal;
    michal = 12;
    michal = oscard[michal];
    offset = option.bind(entity)(michal);
    verify = offset.debounce;
    michal = 300;
    michal = verify.bind(offset)(yankee, michal);
    var _closure1_slot16 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    verify = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: VideoSpeakerStoreClass
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot5;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot8;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot7;
                entity = _closure1_slot18;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00012_ip = 69; continue _fun00011 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00012_ip = 105; continue _fun00011;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot8;
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
        report = _closure1_slot9;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot6;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = this;
            option = tangon.waitFor;
            foxtra = _closure1_slot10;
            romeon = _closure1_slot12;
            yankee = _closure1_slot14;
            offset = _closure1_slot11;
            verify = _closure1_slot13;
            backup = tangon;
            michal = backup[option](foxtra, romeon, yankee, offset, verify, option);
            zuuluu = tangon.syncWith;
            report = _closure1_slot10;
            michal = new Array(2);
            michal[0] = report;
            report = _closure1_slot11;
            michal[1] = report;
            entity = _closure1_slot20;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'getSpeaker';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                zuuluu = _closure1_slot3;
                if(!(zuuluu !== entity)) { _fun00014_ip = 31; continue _fun00013 }
 14:
                var _closure1_slot3 = entity;
                tangon = _closure1_slot19;
                zuuluu = undefined;
                entity = false;
                entity = tangon.bind(zuuluu)(entity);
 31:
                zuuluu = _closure1_slot4;
                entity = null;
                if(!(entity == zuuluu)) { _fun00014_ip = 57; continue _fun00013 }
 41:
                zuuluu = _closure1_slot12;
                entity = zuuluu.getId;
                entity = entity.bind(zuuluu)();
                _fun00014_ip = 61; continue _fun00013;
 57:
                entity = _closure1_slot4;
 61:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = michal.bind(entity)(verify);
    michal = 'VideoSpeakerStore';
    verify['displayName'] = michal;
    michal = 14;
    michal = oscard[michal];
    backup = option.bind(entity)(michal);
    michal = {};
    michal['AUDIO_SET_LOCAL_VIDEO_DISABLED'] = golfie;
    golfie = verify.prototype;
    golfie = Object.create(golfie, {constructor: {value: verify}});
    kiloes = golfie;
    foxtra = michal;
    michal = new kiloes[verify](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot17 = michal;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/VideoSpeakerStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();