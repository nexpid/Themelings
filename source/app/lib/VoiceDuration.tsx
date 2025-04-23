// app/lib/VoiceDuration.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo, argBar) { // Original name: VoiceDuration
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = arguments[2];
                zuuluu = this;
                entity = undefined;
                if(!(michal === entity)) { _fun00002_ip = 41; continue _fun00001 }
 12:
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                tangon = 2;
                tangon = oscard[tangon];
                tangon = report.bind(entity)(tangon);
                michal = tangon.TimeStampProducer;
 41:
                oscard = _closure1_slot2;
                report = _closure2_slot0;
                report = oscard.bind(entity)(zuuluu, report);
                report = argFoo;
                zuuluu['userId'] = report;
                report = argBar;
                zuuluu['connection'] = report;
                zuuluu['timestampProducer'] = michal;
                michal = global;
                report = michal.Set;
                oscard = report.prototype;
                oscard = Object.create(oscard, {constructor: {value: report}});
                romeon = oscard;
                report = new romeon[report](yankee);
                report = report instanceof Object ? report : oscard;
                zuuluu['listeningUsers'] = report;
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                tangon = 2;
                golfie = oscard[tangon];
                golfie = report.bind(entity)(golfie);
                verify = golfie.StopWatch;
                yankee = zuuluu.timestampProducer;
                option = verify.prototype;
                option = Object.create(option, {constructor: {value: verify}});
                romeon = option;
                golfie = new romeon[verify](yankee, offset);
                golfie = golfie instanceof Object ? golfie : option;
                zuuluu['listening'] = golfie;
                golfie = oscard[tangon];
                golfie = report.bind(entity)(golfie);
                verify = golfie.StopWatch;
                yankee = zuuluu.timestampProducer;
                option = verify.prototype;
                option = Object.create(option, {constructor: {value: verify}});
                romeon = option;
                golfie = new romeon[verify](yankee, offset);
                golfie = golfie instanceof Object ? golfie : option;
                zuuluu['speaking'] = golfie;
                golfie = oscard[tangon];
                golfie = report.bind(entity)(golfie);
                verify = golfie.StopWatch;
                yankee = zuuluu.timestampProducer;
                option = verify.prototype;
                option = Object.create(option, {constructor: {value: verify}});
                romeon = option;
                golfie = new romeon[verify](yankee, offset);
                golfie = golfie instanceof Object ? golfie : option;
                zuuluu['participation'] = golfie;
                golfie = oscard[tangon];
                golfie = report.bind(entity)(golfie);
                verify = golfie.StopWatch;
                yankee = zuuluu.timestampProducer;
                option = verify.prototype;
                option = Object.create(option, {constructor: {value: verify}});
                romeon = option;
                golfie = new romeon[verify](yankee, offset);
                golfie = golfie instanceof Object ? golfie : option;
                zuuluu['connected'] = golfie;
                tangon = oscard[tangon];
                tangon = report.bind(entity)(tangon);
                oscard = tangon.StopWatch;
                yankee = zuuluu.timestampProducer;
                report = oscard.prototype;
                report = Object.create(report, {constructor: {value: oscard}});
                romeon = report;
                tangon = new romeon[oscard](yankee, offset);
                tangon = tangon instanceof Object ? tangon : report;
                zuuluu['muted'] = tangon;
                michal = michal.Map;
                tangon = michal.prototype;
                tangon = Object.create(tangon, {constructor: {value: michal}});
                romeon = tangon;
                michal = new romeon[michal](yankee);
                michal = michal instanceof Object ? michal : tangon;
                zuuluu['voiceFilterSpeaking'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'start';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                verify = arguments[0];
                option = arguments[1];
                tangon = this;
                var _closure3_slot0 = tangon;
                entity = undefined;
                if(!(verify === entity)) { _fun00004_ip = 23; continue _fun00003 }
 21:
                verify = false;
 23:
                if(!(option === entity)) { _fun00004_ip = 29; continue _fun00003 }
 27:
                option = null;
 29:
                report = tangon.listeningUsers;
                zuuluu = report.clear;
                zuuluu = zuuluu.bind(report)();
                report = tangon.listening;
                zuuluu = report.reset;
                zuuluu = zuuluu.bind(report)();
                report = tangon.speaking;
                zuuluu = report.reset;
                zuuluu = zuuluu.bind(report)();
                report = tangon.participation;
                zuuluu = report.reset;
                zuuluu = zuuluu.bind(report)();
                report = tangon.muted;
                zuuluu = report.reset;
                zuuluu = zuuluu.bind(report)();
                report = tangon.connected;
                zuuluu = report.reset;
                zuuluu = zuuluu.bind(report)();
                report = tangon.voiceFilterSpeaking;
                zuuluu = report.clear;
                zuuluu = zuuluu.bind(report)();
                report = tangon.connected;
                zuuluu = report.start;
                zuuluu = zuuluu.bind(report)();
                romeon = tangon.connection;
                yankee = romeon.on;
                oscard = _closure1_slot0;
                golfie = _closure1_slot1;
                zuuluu = 3;
                report = golfie[zuuluu];
                report = oscard.bind(entity)(report);
                report = report.BaseConnectionEvent;
                offset = report.Speaking;
                report = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        oscard = argFoo;
                        tangon = argBar;
                        michal = _closure3_slot0;
                        michal = michal.userId;
                        if(!(michal !== oscard)) { _fun00006_ip = 48; continue _fun00005 }
 22:
                        report = _closure3_slot0;
                        zuuluu = report.onListening;
                        michal = 0;
                        michal = michal !== tangon;
                        michal = zuuluu.bind(report)(michal, oscard);
                        _fun00006_ip = 71; continue _fun00005;
 48:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.onSpeaking;
                        entity = 0;
                        entity = entity !== tangon;
                        entity = michal.bind(zuuluu)(entity);
 71:
                        entity = undefined;
                        return entity;
                    }
                };
                report = yankee.bind(romeon)(offset, report);
                report = tangon.onMuted;
                report = report.bind(tangon)(verify);
                yankee = tangon.connection;
                offset = yankee.on;
                report = golfie[zuuluu];
                report = oscard.bind(entity)(report);
                report = report.BaseConnectionEvent;
                verify = report.Mute;
                report = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.onMuted;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                report = offset.bind(yankee)(verify, report);
                report = tangon.onVoiceFilterChanged;
                report = report.bind(tangon)(option);
                report = tangon.connection;
                tangon = report.on;
                zuuluu = golfie[zuuluu];
                zuuluu = oscard.bind(entity)(zuuluu);
                zuuluu = zuuluu.BaseConnectionEvent;
                zuuluu = zuuluu.VoiceFilterChanged;
                michal = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.onVoiceFilterChanged;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(9);
        michal[0] = entity;
        entity = {};
        oscard = '_getVoiceFilterStopWatch';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscard = argFoo;
                tangon = this;
                entity = null;
                if(!(entity != oscard)) { _fun00008_ip = 111; continue _fun00007 }
 12:
                zuuluu = tangon.voiceFilterSpeaking;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)(oscard);
                if(!(entity == michal)) { _fun00008_ip = 109; continue _fun00007 }
 32:
                golfie = _closure1_slot0;
                report = _closure1_slot1;
                zuuluu = 2;
                report = report[zuuluu];
                zuuluu = undefined;
                zuuluu = golfie.bind(zuuluu)(report);
                golfie = zuuluu.StopWatch;
                verify = tangon.timestampProducer;
                report = golfie.prototype;
                report = Object.create(report, {constructor: {value: golfie}});
                offset = report;
                zuuluu = new offset[golfie](verify, option);
                zuuluu = zuuluu instanceof Object ? zuuluu : report;
                report = tangon.voiceFilterSpeaking;
                tangon = report.set;
                tangon = tangon.bind(report)(oscard, zuuluu);
                michal = zuuluu;
 109:
                return michal;
 111:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'onSpeaking';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = this;
                zuuluu = entity._getVoiceFilterStopWatch;
                tangon = entity.connection;
                michal = tangon.getVoiceFilterId;
                michal = michal.bind(tangon)();
                michal = zuuluu.bind(entity)(michal);
                tangon = entity.speaking;
                zuuluu = argFoo;
                if(zuuluu) { _fun00010_ip = 105; continue _fun00009 }
 42:
                zuuluu = tangon.stop;
                zuuluu = zuuluu.bind(tangon)();
                report = entity.listening;
                zuuluu = report.isRunning;
                zuuluu = zuuluu.bind(report)();
                if(zuuluu) { _fun00010_ip = 87; continue _fun00009 }
 71:
                report = entity.participation;
                zuuluu = report.stop;
                zuuluu = zuuluu.bind(report)();
 87:
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00010_ip = 144; continue _fun00009 }
 93:
                zuuluu = michal.stop;
                zuuluu = zuuluu.bind(michal)();
                _fun00010_ip = 144; continue _fun00009;
 105:
                zuuluu = tangon.start;
                zuuluu = zuuluu.bind(tangon)();
                zuuluu = entity.participation;
                entity = zuuluu.start;
                entity = entity.bind(zuuluu)();
                entity = null;
                if(!(entity != michal)) { _fun00010_ip = 144; continue _fun00009 }
 135:
                entity = michal.start;
                entity = entity.bind(michal)();
 144:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'onListening';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argBar;
                entity = this;
                zuuluu = entity.listeningUsers;
                michal = argFoo;
                if(michal) { _fun00012_ip = 104; continue _fun00011 }
 18:
                michal = zuuluu.delete;
                michal = michal.bind(zuuluu)(tangon);
                if(!michal) { _fun00012_ip = 48; continue _fun00011 }
 31:
                report = entity.listeningUsers;
                oscard = report.size;
                report = 0;
                michal = report === oscard;
 48:
                if(!michal) { _fun00012_ip = 144; continue _fun00011 }
 51:
                report = entity.listening;
                michal = report.stop;
                michal = michal.bind(report)();
                report = entity.speaking;
                michal = report.isRunning;
                michal = michal.bind(report)();
                if(michal) { _fun00012_ip = 144; continue _fun00011 }
 86:
                report = entity.participation;
                michal = report.stop;
                michal = michal.bind(report)();
                _fun00012_ip = 144; continue _fun00011;
 104:
                michal = zuuluu.add;
                michal = michal.bind(zuuluu)(tangon);
                zuuluu = entity.listening;
                michal = zuuluu.start;
                michal = michal.bind(zuuluu)();
                michal = entity.participation;
                entity = michal.start;
                entity = entity.bind(michal)();
 144:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'onMuted';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = this;
                michal = entity.muted;
                entity = argFoo;
                if(entity) { _fun00014_ip = 27; continue _fun00013 }
 15:
                entity = michal.stop;
                entity = entity.bind(michal)();
                _fun00014_ip = 36; continue _fun00013;
 27:
                entity = michal.start;
                entity = entity.bind(michal)();
 36:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'onVoiceFilterChanged';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = this;
                tangon = zuuluu.voiceFilterSpeaking;
                michal = tangon.forEach;
                entity = function(argFoo) {
                    michal = argFoo;
                    entity = michal.stop;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = michal.bind(tangon)(entity);
                michal = zuuluu.speaking;
                entity = michal.isRunning;
                entity = entity.bind(michal)();
                if(!entity) { _fun00016_ip = 76; continue _fun00015 }
 47:
                michal = zuuluu._getVoiceFilterStopWatch;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                if(!(entity != michal)) { _fun00016_ip = 76; continue _fun00015 }
 67:
                entity = michal.start;
                entity = entity.bind(michal)();
 76:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'stop';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            zuuluu = entity.speaking;
            michal = zuuluu.stop;
            michal = michal.bind(zuuluu)();
            zuuluu = entity.listening;
            michal = zuuluu.stop;
            michal = michal.bind(zuuluu)();
            zuuluu = entity.participation;
            michal = zuuluu.stop;
            michal = michal.bind(zuuluu)();
            zuuluu = entity.connected;
            michal = zuuluu.stop;
            michal = michal.bind(zuuluu)();
            zuuluu = entity.muted;
            michal = zuuluu.stop;
            michal = michal.bind(zuuluu)();
            zuuluu = entity.voiceFilterSpeaking;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                michal = argFoo;
                entity = michal.stop;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'getVoiceFilterSpeakingDurationMs';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = global;
            zuuluu = entity.Map;
            entity = this;
            michal = entity.voiceFilterSpeaking;
            entity = michal.entries;
            oscard = entity.bind(michal)();
            tangon = new Array(0);
            report = 0;
            golfie = tangon;
            entity = arraySpread(golfie, oscard, report);
            michal = tangon.map;
            entity = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    zuuluu = report().value;
                    michal = entity;
                    golfie = undefined;
                    tangon = michal === golfie;
                    michal = undefined;
                    if(tangon) { _fun00018_ip = 27; continue _fun00017 }
 24:
                    michal = zuuluu;
 27:
                    zuuluu = undefined;
                    if(tangon) { _fun00018_ip = 57; continue _fun00017 }
 32:
                    oscard = report().value;
                    report = entity;
                    report = report === golfie;
                    zuuluu = undefined;
                    tangon = report;
                    if(report) { _fun00018_ip = 57; continue _fun00017 }
 51:
                    zuuluu = oscard;
                    tangon = report;
 57:
                    if(tangon) { _fun00018_ip = 63; continue _fun00017 }
 60:
                    entity.return();
 63:
                    entity = new Array(2);
                    entity[0] = michal;
                    michal = zuuluu.elapsed;
                    zuuluu = michal.bind(zuuluu)();
                    michal = zuuluu.asMilliseconds;
                    michal = michal.bind(zuuluu)();
                    entity[1] = michal;
                    return entity;
                }
            };
            golfie = michal.bind(tangon)(entity);
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            option = michal;
            entity = new option[zuuluu](golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'getDurationStats';
        entity['key'] = oscard;
        report = function() { // Original name: value
            michal = this;
            entity = {};
            tangon = michal.listening;
            zuuluu = tangon.elapsed;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.asMilliseconds;
            zuuluu = zuuluu.bind(tangon)();
            entity['duration_listening_ms'] = zuuluu;
            tangon = michal.speaking;
            zuuluu = tangon.elapsed;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.asMilliseconds;
            zuuluu = zuuluu.bind(tangon)();
            entity['duration_speaking_ms'] = zuuluu;
            tangon = michal.participation;
            zuuluu = tangon.elapsed;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.asMilliseconds;
            zuuluu = zuuluu.bind(tangon)();
            entity['duration_participation_ms'] = zuuluu;
            tangon = michal.connected;
            zuuluu = tangon.elapsed;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.asMilliseconds;
            zuuluu = zuuluu.bind(tangon)();
            entity['duration_connected_ms'] = zuuluu;
            tangon = michal.muted;
            zuuluu = tangon.elapsed;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.asMilliseconds;
            zuuluu = zuuluu.bind(tangon)();
            entity['duration_muted_ms'] = zuuluu;
            tangon = michal.voiceFilterSpeaking;
            zuuluu = tangon.keys;
            golfie = zuuluu.bind(tangon)();
            tangon = new Array(0);
            option = tangon;
            oscard = 0;
            report = arraySpread(option, golfie, oscard);
            entity['duration_speaking_voice_filter_ids'] = tangon;
            tangon = michal.voiceFilterSpeaking;
            michal = tangon.values;
            golfie = michal.bind(tangon)();
            tangon = new Array(0);
            option = tangon;
            michal = arraySpread(option, golfie, oscard);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                michal = argFoo;
                entity = michal.elapsed;
                michal = entity.bind(michal)();
                entity = michal.asMilliseconds;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            entity['duration_speaking_voice_filter_ms'] = michal;
            return entity;
        };
        entity['value'] = report;
        michal[8] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/VoiceDuration.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();