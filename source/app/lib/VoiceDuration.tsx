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
                tangon = arguments[2];
                zuuluu = this;
                entity = undefined;
                if(!(tangon === entity)) { _fun00002_ip = 41; continue _fun00001 }
 12:
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 2;
                michal = oscard[michal];
                michal = report.bind(entity)(michal);
                tangon = michal.TimeStampProducer;
 41:
                oscard = _closure1_slot2;
                report = _closure2_slot0;
                report = oscard.bind(entity)(zuuluu, report);
                report = argFoo;
                zuuluu['userId'] = report;
                report = argBar;
                zuuluu['connection'] = report;
                zuuluu['timestampProducer'] = tangon;
                tangon = global;
                tangon = tangon.Set;
                report = tangon.prototype;
                report = Object.create(report, {constructor: {value: tangon}});
                yankee = report;
                tangon = new yankee[tangon](offset);
                tangon = tangon instanceof Object ? tangon : report;
                zuuluu['listeningUsers'] = tangon;
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                michal = 2;
                oscard = report[michal];
                oscard = tangon.bind(entity)(oscard);
                option = oscard.StopWatch;
                offset = zuuluu.timestampProducer;
                golfie = option.prototype;
                golfie = Object.create(golfie, {constructor: {value: option}});
                yankee = golfie;
                oscard = new yankee[option](offset, verify);
                oscard = oscard instanceof Object ? oscard : golfie;
                zuuluu['listening'] = oscard;
                oscard = report[michal];
                oscard = tangon.bind(entity)(oscard);
                option = oscard.StopWatch;
                offset = zuuluu.timestampProducer;
                golfie = option.prototype;
                golfie = Object.create(golfie, {constructor: {value: option}});
                yankee = golfie;
                oscard = new yankee[option](offset, verify);
                oscard = oscard instanceof Object ? oscard : golfie;
                zuuluu['speaking'] = oscard;
                oscard = report[michal];
                oscard = tangon.bind(entity)(oscard);
                option = oscard.StopWatch;
                offset = zuuluu.timestampProducer;
                golfie = option.prototype;
                golfie = Object.create(golfie, {constructor: {value: option}});
                yankee = golfie;
                oscard = new yankee[option](offset, verify);
                oscard = oscard instanceof Object ? oscard : golfie;
                zuuluu['participation'] = oscard;
                oscard = report[michal];
                oscard = tangon.bind(entity)(oscard);
                option = oscard.StopWatch;
                offset = zuuluu.timestampProducer;
                golfie = option.prototype;
                golfie = Object.create(golfie, {constructor: {value: option}});
                yankee = golfie;
                oscard = new yankee[option](offset, verify);
                oscard = oscard instanceof Object ? oscard : golfie;
                zuuluu['connected'] = oscard;
                michal = report[michal];
                michal = tangon.bind(entity)(michal);
                report = michal.StopWatch;
                offset = zuuluu.timestampProducer;
                tangon = report.prototype;
                tangon = Object.create(tangon, {constructor: {value: report}});
                yankee = tangon;
                michal = new yankee[report](offset, verify);
                michal = michal instanceof Object ? michal : tangon;
                zuuluu['muted'] = michal;
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
                option = arguments[0];
                tangon = this;
                var _closure3_slot0 = tangon;
                entity = undefined;
                if(!(option === entity)) { _fun00004_ip = 20; continue _fun00003 }
 18:
                option = false;
 20:
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
                report = tangon.connected;
                zuuluu = report.start;
                zuuluu = zuuluu.bind(report)();
                yankee = tangon.connection;
                offset = yankee.on;
                oscard = _closure1_slot0;
                golfie = _closure1_slot1;
                zuuluu = 3;
                report = golfie[zuuluu];
                report = oscard.bind(entity)(report);
                report = report.BaseConnectionEvent;
                verify = report.Speaking;
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
                report = offset.bind(yankee)(verify, report);
                report = tangon.onMuted;
                report = report.bind(tangon)(option);
                report = tangon.connection;
                tangon = report.on;
                zuuluu = golfie[zuuluu];
                zuuluu = oscard.bind(entity)(zuuluu);
                zuuluu = zuuluu.BaseConnectionEvent;
                zuuluu = zuuluu.Mute;
                michal = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.onMuted;
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
        michal = new Array(6);
        michal[0] = entity;
        entity = {};
        oscard = 'onSpeaking';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = this;
                zuuluu = entity.speaking;
                michal = argFoo;
                if(michal) { _fun00008_ip = 62; continue _fun00007 }
 15:
                michal = zuuluu.stop;
                michal = michal.bind(zuuluu)();
                tangon = entity.listening;
                michal = tangon.isRunning;
                michal = michal.bind(tangon)();
                if(michal) { _fun00008_ip = 86; continue _fun00007 }
 44:
                tangon = entity.participation;
                michal = tangon.stop;
                michal = michal.bind(tangon)();
                _fun00008_ip = 86; continue _fun00007;
 62:
                michal = zuuluu.start;
                michal = michal.bind(zuuluu)();
                michal = entity.participation;
                entity = michal.start;
                entity = entity.bind(michal)();
 86:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'onListening';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argBar;
                entity = this;
                zuuluu = entity.listeningUsers;
                michal = argFoo;
                if(michal) { _fun00010_ip = 104; continue _fun00009 }
 18:
                michal = zuuluu.delete;
                michal = michal.bind(zuuluu)(tangon);
                if(!michal) { _fun00010_ip = 48; continue _fun00009 }
 31:
                report = entity.listeningUsers;
                oscard = report.size;
                report = 0;
                michal = report === oscard;
 48:
                if(!michal) { _fun00010_ip = 144; continue _fun00009 }
 51:
                report = entity.listening;
                michal = report.stop;
                michal = michal.bind(report)();
                report = entity.speaking;
                michal = report.isRunning;
                michal = michal.bind(report)();
                if(michal) { _fun00010_ip = 144; continue _fun00009 }
 86:
                report = entity.participation;
                michal = report.stop;
                michal = michal.bind(report)();
                _fun00010_ip = 144; continue _fun00009;
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
        michal[2] = entity;
        entity = {};
        oscard = 'onMuted';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = this;
                michal = entity.muted;
                entity = argFoo;
                if(entity) { _fun00012_ip = 27; continue _fun00011 }
 15:
                entity = michal.stop;
                entity = entity.bind(michal)();
                _fun00012_ip = 36; continue _fun00011;
 27:
                entity = michal.start;
                entity = entity.bind(michal)();
 36:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
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
            michal = entity.muted;
            entity = michal.stop;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
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
            zuuluu = michal.muted;
            michal = zuuluu.elapsed;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.asMilliseconds;
            michal = michal.bind(zuuluu)();
            entity['duration_muted_ms'] = michal;
            return entity;
        };
        entity['value'] = report;
        michal[5] = entity;
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