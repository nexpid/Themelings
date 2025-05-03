// app/stores/IdleStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golfie = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = golfie;
        var _closure1_slot2 = oscard;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
                _fun00004_ip = 74; continue _fun00003;
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
        entity = function() { // Original name: isSystemIdle
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = _closure1_slot15;
                if(entity) { _fun00006_ip = 14; continue _fun00005 }
 10:
                entity = _closure1_slot16;
 14:
                if(entity) { _fun00006_ip = 58; continue _fun00005 }
 17:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 8;
                tangon = tangon[michal];
                michal = undefined;
                tangon = report.bind(michal)(tangon);
                michal = tangon.isAndroid;
                michal = michal.bind(tangon)();
                if(!michal) { _fun00006_ip = 55; continue _fun00005 }
 51:
                michal = _closure1_slot17;
 55:
                entity = michal;
 58:
                return entity;
            }
        };
        var _closure1_slot19 = entity;
        yankee = function() { // Original name: checkIdleAFK
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = global;
                zuuluu = entity.Date;
                michal = zuuluu.now;
                tangon = michal.bind(zuuluu)();
                zuuluu = _closure1_slot12;
                tangon = tangon - zuuluu;
                zuuluu = _closure1_slot9;
                if(!(!(tangon > zuuluu))) { _fun00008_ip = 102; continue _fun00007 }
 36:
                zuuluu = _closure1_slot19;
                report = undefined;
                zuuluu = zuuluu.bind(report)();
                if(zuuluu) { _fun00008_ip = 102; continue _fun00007 }
 49:
                zuuluu = _closure1_slot13;
                if(!zuuluu) { _fun00008_ip = 166; continue _fun00007 }
 56:
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                zuuluu = 11;
                zuuluu = oscard[zuuluu];
                report = tangon.bind(report)(zuuluu);
                tangon = report.dispatch;
                zuuluu = {'type': 'IDLE', 'idle': false};
                zuuluu = tangon.bind(report)(zuuluu);
                _fun00008_ip = 166; continue _fun00007;
 102:
                zuuluu = _closure1_slot13;
                if(zuuluu) { _fun00008_ip = 166; continue _fun00007 }
 109:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                zuuluu = 11;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                report = report.bind(zuuluu)(tangon);
                tangon = report.dispatch;
                zuuluu = {'type': 'IDLE', 'idle': true};
                oscard = _closure1_slot12;
                zuuluu['idleSince'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
 166:
                tangon = entity.Date;
                zuuluu = tangon.now;
                tangon = zuuluu.bind(tangon)();
                zuuluu = _closure1_slot12;
                tangon = tangon - zuuluu;
                golfie = entity.Math;
                oscard = golfie.min;
                report = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 9;
                zuuluu = verify[entity];
                entity = undefined;
                zuuluu = report.bind(entity)(zuuluu);
                report = zuuluu.AfkTimeout;
                zuuluu = report.getSetting;
                report = zuuluu.bind(report)();
                option = _closure1_slot1;
                zuuluu = 10;
                zuuluu = verify[zuuluu];
                zuuluu = option.bind(entity)(zuuluu);
                zuuluu = zuuluu.Millis;
                zuuluu = zuuluu.SECOND;
                report = report * zuuluu;
                zuuluu = _closure1_slot9;
                zuuluu = oscard.bind(golfie)(report, zuuluu);
                if(!(!(tangon > zuuluu))) { _fun00008_ip = 348; continue _fun00007 }
 284:
                zuuluu = _closure1_slot19;
                zuuluu = zuuluu.bind(entity)();
                if(zuuluu) { _fun00008_ip = 348; continue _fun00007 }
 295:
                zuuluu = _closure1_slot14;
                if(!zuuluu) { _fun00008_ip = 399; continue _fun00007 }
 302:
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 11;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.dispatch;
                zuuluu = {'type': 'AFK', 'afk': false};
                zuuluu = tangon.bind(report)(zuuluu);
                _fun00008_ip = 399; continue _fun00007;
 348:
                zuuluu = _closure1_slot14;
                if(zuuluu) { _fun00008_ip = 399; continue _fun00007 }
 355:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 11;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {'type': 'AFK', 'afk': true};
                michal = zuuluu.bind(tangon)(michal);
 399:
                return entity;
            }
        };
        var _closure1_slot20 = yankee;
        tangon = function(argFoo) { // Original name: handleGenericAction
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                michal = entity.timestamp;
                zuuluu = entity.type;
                entity = 'OVERLAY_SET_NOT_IDLE';
                entity = entity === zuuluu;
                if(!entity) { _fun00010_ip = 33; continue _fun00009 }
 27:
                zuuluu = null;
                entity = zuuluu != michal;
 33:
                zuuluu = entity;
                if(!zuuluu) { _fun00010_ip = 50; continue _fun00009 }
 39:
                tangon = _closure1_slot12;
                zuuluu = michal <= tangon;
 50:
                if(zuuluu) { _fun00010_ip = 90; continue _fun00009 }
 53:
                if(entity) { _fun00010_ip = 73; continue _fun00009 }
 56:
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                michal = entity.bind(zuuluu)();
 73:
                _closure1_slot12 = michal;
                michal = _closure1_slot20;
                entity = undefined;
                entity = michal.bind(entity)();
 90:
                entity = false;
                return entity;
            }
        };
        var _closure1_slot21 = tangon;
        option = global;
        romeon = option.Object;
        offset = romeon.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = offset.bind(romeon)(zuuluu, entity, michal);
        entity = 0;
        michal = oscard[entity];
        entity = undefined;
        michal = golfie.bind(entity)(michal);
        var _closure1_slot3 = michal;
        michal = 1;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot4 = michal;
        michal = 2;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot5 = michal;
        michal = 3;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot6 = michal;
        michal = 4;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot7 = michal;
        michal = 5;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        var _closure1_slot8 = michal;
        michal = 6;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        offset = michal.IDLE_DURATION;
        var _closure1_slot9 = offset;
        michal = michal.AppStates;
        var _closure1_slot10 = michal;
        michal = 7;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        michal = michal.SpeakingFlags;
        var _closure1_slot11 = michal;
        offset = option.Date;
        michal = offset.now;
        michal = michal.bind(offset)();
        var _closure1_slot12 = michal;
        michal = false;
        var _closure1_slot13 = michal;
        var _closure1_slot14 = michal;
        var _closure1_slot15 = michal;
        var _closure1_slot16 = michal;
        var _closure1_slot17 = michal;
        michal = 8;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        michal = michal.isPlatformEmbedded;
        if(!michal) { _fun00002_ip = 349; continue _fun00001 }
 307:
        michal = 12;
        offset = oscard[michal];
        offset = golfie.bind(entity)(offset);
        romeon = null;
        foxtra = romeon == offset;
        offset = undefined;
        if(foxtra) { _fun00002_ip = 345; continue _fun00001 }
 330:
        foxtra = oscard[michal];
        foxtra = golfie.bind(entity)(foxtra);
        offset = foxtra.remotePowerMonitor;
 345:
        if(!(romeon == offset)) { _fun00002_ip = 397; continue _fun00001 }
 349:
        offset = option.setInterval;
        option = 10;
        option = oscard[option];
        option = golfie.bind(entity)(option);
        option = option.Millis;
        romeon = option.SECOND;
        option = 30;
        option = option * romeon;
        option = offset.bind(entity)(yankee, option);
        _fun00002_ip = 560; continue _fun00001;
 397:
        option = function() { // Original name: checkNativeIdle
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = function(argFoo) { // Original name: handleIdleTime
                    zuuluu = global;
                    oscard = zuuluu.Math;
                    report = oscard.max;
                    michal = zuuluu.Date;
                    entity = michal.now;
                    michal = entity.bind(michal)();
                    entity = argFoo;
                    tangon = michal - entity;
                    entity = _closure1_slot12;
                    entity = report.bind(oscard)(tangon, entity);
                    _closure1_slot12 = entity;
                    tangon = _closure1_slot20;
                    entity = undefined;
                    tangon = tangon.bind(entity)();
                    tangon = zuuluu.setTimeout;
                    zuuluu = _closure1_slot22;
                    oscard = _closure1_slot1;
                    michal = _closure1_slot2;
                    report = 10;
                    michal = michal[report];
                    michal = oscard.bind(entity)(michal);
                    michal = michal.Millis;
                    michal = michal.SECOND;
                    michal = report * michal;
                    michal = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                oscard = _closure1_slot1;
                entity = _closure1_slot2;
                report = 12;
                zuuluu = entity[report];
                entity = undefined;
                zuuluu = oscard.bind(entity)(zuuluu);
                oscard = null;
                golfie = oscard == zuuluu;
                zuuluu = undefined;
                if(golfie) { _fun00012_ip = 81; continue _fun00011 }
 43:
                option = _closure1_slot1;
                golfie = _closure1_slot2;
                golfie = golfie[report];
                golfie = option.bind(entity)(golfie);
                golfie = golfie.remotePowerMonitor;
                option = oscard == golfie;
                zuuluu = undefined;
                if(option) { _fun00012_ip = 81; continue _fun00011 }
 75:
                zuuluu = golfie.getSystemIdleTimeMs;
 81:
                if(!(oscard != zuuluu)) { _fun00012_ip = 150; continue _fun00011 }
 85:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                michal = michal[report];
                michal = zuuluu.bind(entity)(michal);
                zuuluu = michal.remotePowerMonitor;
                michal = zuuluu.getSystemIdleTimeMs;
                zuuluu = michal.bind(zuuluu)();
                michal = global;
                michal = michal.Promise;
                michal = zuuluu instanceof michal;
                if(michal) { _fun00012_ip = 140; continue _fun00011 }
 133:
                michal = tangon.bind(entity)(zuuluu);
                _fun00012_ip = 150; continue _fun00011;
 140:
                michal = zuuluu.then;
                michal = michal.bind(zuuluu)(tangon);
 150:
                return entity;
            }
        };
        var _closure1_slot22 = option;
        option = option.bind(entity)();
        option = oscard[michal];
        option = golfie.bind(entity)(option);
        romeon = option.remotePowerMonitor;
        yankee = romeon.on;
        offset = 'resume';
        option = function() {
            michal = false;
            _closure1_slot15 = michal;
            zuuluu = _closure1_slot21;
            entity = undefined;
            michal = {};
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        option = yankee.bind(romeon)(offset, option);
        option = oscard[michal];
        option = golfie.bind(entity)(option);
        romeon = option.remotePowerMonitor;
        yankee = romeon.on;
        offset = 'suspend';
        option = function() {
            entity = true;
            _closure1_slot15 = entity;
            tangon = _closure1_slot21;
            entity = undefined;
            zuuluu = {};
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 13;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.disconnect;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        option = yankee.bind(romeon)(offset, option);
        option = oscard[michal];
        option = golfie.bind(entity)(option);
        romeon = option.remotePowerMonitor;
        yankee = romeon.on;
        offset = 'lock-screen';
        option = function() {
            michal = true;
            _closure1_slot16 = michal;
            zuuluu = _closure1_slot21;
            entity = undefined;
            michal = {};
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        option = yankee.bind(romeon)(offset, option);
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        yankee = michal.remotePowerMonitor;
        offset = yankee.on;
        option = 'unlock-screen';
        michal = function() {
            michal = false;
            _closure1_slot16 = michal;
            zuuluu = _closure1_slot21;
            entity = undefined;
            michal = {};
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = offset.bind(yankee)(option, michal);
 560:
        michal = 14;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        option = michal.Store;
        michal = function(argFoo) {
            tangon = function() { // Original name: IdleStore
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = this;
                    zuuluu = undefined;
                    report = undefined;
                    entity = _closure1_slot3;
                    michal = _closure2_slot0;
                    entity = entity.bind(zuuluu)(tangon, michal);
                    entity = _closure1_slot6;
                    verify = entity.bind(zuuluu)(michal);
                    michal = _closure1_slot5;
                    entity = _closure1_slot18;
                    entity = entity.bind(zuuluu)();
                    if(entity) { _fun00014_ip = 69; continue _fun00013 }
 51:
                    golfie = verify.apply;
                    report = arguments;
                    entity = report;
                    entity = golfie.bind(verify)(tangon, entity);
                    _fun00014_ip = 105; continue _fun00013;
 69:
                    golfie = global;
                    option = golfie.Reflect;
                    golfie = option.construct;
                    oscard = _closure1_slot6;
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
            report = _closure1_slot7;
            zuuluu = undefined;
            michal = argFoo;
            michal = report.bind(zuuluu)(tangon, michal);
            michal = _closure1_slot4;
            report = {};
            entity = 'isIdle';
            report['key'] = entity;
            entity = function() { // Original name: value
                entity = _closure1_slot13;
                return entity;
            };
            report['value'] = entity;
            entity = new Array(5);
            entity[0] = report;
            report = {};
            golfie = 'isAFK';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot14;
                return entity;
            };
            report['value'] = golfie;
            entity[1] = report;
            report = {};
            golfie = 'getIdleSince';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure1_slot13;
                    entity = null;
                    if(!zuuluu) { _fun00016_ip = 16; continue _fun00015 }
 12:
                    entity = _closure1_slot12;
 16:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[2] = report;
            report = {};
            golfie = 'getSystemSuspended';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot15;
                return entity;
            };
            report['value'] = golfie;
            entity[3] = report;
            report = {};
            golfie = 'getSystemLocked';
            report['key'] = golfie;
            oscard = function() { // Original name: value
                entity = _closure1_slot16;
                return entity;
            };
            report['value'] = oscard;
            entity[4] = report;
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        };
        option = michal.bind(entity)(option);
        michal = 'IdleStore';
        option['displayName'] = michal;
        michal = 11;
        michal = oscard[michal];
        sizing = golfie.bind(entity)(michal);
        michal = {};
        offset = function(argFoo) { // Original name: handleIdle
            entity = argFoo;
            michal = entity.idle;
            _closure1_slot13 = michal;
            entity = undefined;
            return entity;
        };
        michal['IDLE'] = offset;
        offset = function(argFoo) { // Original name: handleAFK
            entity = argFoo;
            michal = entity.afk;
            _closure1_slot14 = michal;
            entity = undefined;
            return entity;
        };
        michal['AFK'] = offset;
        offset = function(argFoo) { // Original name: handleSpeaking
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                tangon = entity.userId;
                zuuluu = entity.speakingFlags;
                michal = _closure1_slot11;
                michal = michal.NONE;
                michal = zuuluu !== michal;
                if(!michal) { _fun00018_ip = 52; continue _fun00017 }
 34:
                report = _closure1_slot8;
                zuuluu = report.getId;
                zuuluu = zuuluu.bind(report)();
                michal = tangon === zuuluu;
 52:
                if(!michal) { _fun00018_ip = 68; continue _fun00017 }
 55:
                zuuluu = _closure1_slot21;
                michal = undefined;
                entity = {};
                entity = zuuluu.bind(michal)(entity);
 68:
                entity = false;
                return entity;
            }
        };
        michal['SPEAKING'] = offset;
        verify = function(argFoo) { // Original name: handleAppStateUpdate
            entity = argFoo;
            zuuluu = entity.state;
            michal = _closure1_slot10;
            michal = michal.BACKGROUND;
            michal = zuuluu === michal;
            _closure1_slot17 = michal;
            michal = global;
            zuuluu = michal.Date;
            michal = zuuluu.now;
            michal = michal.bind(zuuluu)();
            _closure1_slot12 = michal;
            michal = _closure1_slot20;
            entity = undefined;
            entity = michal.bind(entity)();
            entity = false;
            return entity;
        };
        michal['APP_STATE_UPDATE'] = verify;
        michal['OVERLAY_SET_NOT_IDLE'] = tangon;
        michal['CHANNEL_SELECT'] = tangon;
        michal['VOICE_CHANNEL_SELECT'] = tangon;
        michal['WINDOW_FOCUS'] = tangon;
        michal['OVERLAY_INITIALIZE'] = tangon;
        michal['OVERLAY_SET_INPUT_LOCKED'] = tangon;
        michal['USER_SETTINGS_PROTO_UPDATE'] = tangon;
        tangon = option.prototype;
        tangon = Object.create(tangon, {constructor: {value: option}});
        output = tangon;
        kiloes = michal;
        michal = new output[option](sizing, kiloes, backup);
        michal = michal instanceof Object ? michal : tangon;
        tangon = 15;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'stores/IdleStore.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();