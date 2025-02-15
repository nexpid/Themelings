// app/lib/VoiceDuration.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo, argBar) { // Original name: VoiceDuration
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = arguments[2];
                zulu = this;
                entity = undefined;
                if(!(tango === entity)) { _fun00002_ip = 41; continue _fun00001 }
 12:
                report = _closure1_slot0;
                oscar = _closure1_slot1;
                mike = 2;
                mike = oscar[mike];
                mike = report.bind(entity)(mike);
                tango = mike.TimeStampProducer;
 41:
                oscar = _closure1_slot2;
                report = _closure2_slot0;
                report = oscar.bind(entity)(zulu, report);
                report = argFoo;
                zulu['userId'] = report;
                report = argBar;
                zulu['connection'] = report;
                zulu['timestampProducer'] = tango;
                tango = global;
                tango = tango.Set;
                report = tango.prototype;
                report = Object.create(report, {constructor: {value: tango}});
                yankee = report;
                tango = new yankee[tango](offset);
                tango = tango instanceof Object ? tango : report;
                zulu['listeningUsers'] = tango;
                tango = _closure1_slot0;
                report = _closure1_slot1;
                mike = 2;
                oscar = report[mike];
                oscar = tango.bind(entity)(oscar);
                options = oscar.StopWatch;
                offset = zulu.timestampProducer;
                golf = options.prototype;
                golf = Object.create(golf, {constructor: {value: options}});
                yankee = golf;
                oscar = new yankee[options](offset, verify);
                oscar = oscar instanceof Object ? oscar : golf;
                zulu['listening'] = oscar;
                oscar = report[mike];
                oscar = tango.bind(entity)(oscar);
                options = oscar.StopWatch;
                offset = zulu.timestampProducer;
                golf = options.prototype;
                golf = Object.create(golf, {constructor: {value: options}});
                yankee = golf;
                oscar = new yankee[options](offset, verify);
                oscar = oscar instanceof Object ? oscar : golf;
                zulu['speaking'] = oscar;
                oscar = report[mike];
                oscar = tango.bind(entity)(oscar);
                options = oscar.StopWatch;
                offset = zulu.timestampProducer;
                golf = options.prototype;
                golf = Object.create(golf, {constructor: {value: options}});
                yankee = golf;
                oscar = new yankee[options](offset, verify);
                oscar = oscar instanceof Object ? oscar : golf;
                zulu['participation'] = oscar;
                oscar = report[mike];
                oscar = tango.bind(entity)(oscar);
                options = oscar.StopWatch;
                offset = zulu.timestampProducer;
                golf = options.prototype;
                golf = Object.create(golf, {constructor: {value: options}});
                yankee = golf;
                oscar = new yankee[options](offset, verify);
                oscar = oscar instanceof Object ? oscar : golf;
                zulu['connected'] = oscar;
                mike = report[mike];
                mike = tango.bind(entity)(mike);
                report = mike.StopWatch;
                offset = zulu.timestampProducer;
                tango = report.prototype;
                tango = Object.create(tango, {constructor: {value: report}});
                yankee = tango;
                mike = new yankee[report](offset, verify);
                mike = mike instanceof Object ? mike : tango;
                zulu['muted'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'start';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                options = arguments[0];
                tango = this;
                var _closure3_slot0 = tango;
                entity = undefined;
                if(!(options === entity)) { _fun00004_ip = 20; continue _fun00003 }
 18:
                options = false;
 20:
                report = tango.listeningUsers;
                zulu = report.clear;
                zulu = zulu.bind(report)();
                report = tango.listening;
                zulu = report.reset;
                zulu = zulu.bind(report)();
                report = tango.speaking;
                zulu = report.reset;
                zulu = zulu.bind(report)();
                report = tango.participation;
                zulu = report.reset;
                zulu = zulu.bind(report)();
                report = tango.muted;
                zulu = report.reset;
                zulu = zulu.bind(report)();
                report = tango.connected;
                zulu = report.reset;
                zulu = zulu.bind(report)();
                report = tango.connected;
                zulu = report.start;
                zulu = zulu.bind(report)();
                yankee = tango.connection;
                offset = yankee.on;
                oscar = _closure1_slot0;
                golf = _closure1_slot1;
                zulu = 3;
                report = golf[zulu];
                report = oscar.bind(entity)(report);
                report = report.BaseConnectionEvent;
                verify = report.Speaking;
                report = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        oscar = argFoo;
                        tango = argBar;
                        mike = _closure3_slot0;
                        mike = mike.userId;
                        if(!(mike !== oscar)) { _fun00006_ip = 48; continue _fun00005 }
 22:
                        report = _closure3_slot0;
                        zulu = report.onListening;
                        mike = 0;
                        mike = mike !== tango;
                        mike = zulu.bind(report)(mike, oscar);
                        _fun00006_ip = 71; continue _fun00005;
 48:
                        zulu = _closure3_slot0;
                        mike = zulu.onSpeaking;
                        entity = 0;
                        entity = entity !== tango;
                        entity = mike.bind(zulu)(entity);
 71:
                        entity = undefined;
                        return entity;
                    }
                };
                report = offset.bind(yankee)(verify, report);
                report = tango.onMuted;
                report = report.bind(tango)(options);
                report = tango.connection;
                tango = report.on;
                zulu = golf[zulu];
                zulu = oscar.bind(entity)(zulu);
                zulu = zulu.BaseConnectionEvent;
                zulu = zulu.Mute;
                mike = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.onMuted;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(6);
        mike[0] = entity;
        entity = {};
        oscar = 'onSpeaking';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = this;
                zulu = entity.speaking;
                mike = argFoo;
                if(mike) { _fun00008_ip = 62; continue _fun00007 }
 15:
                mike = zulu.stop;
                mike = mike.bind(zulu)();
                tango = entity.listening;
                mike = tango.isRunning;
                mike = mike.bind(tango)();
                if(mike) { _fun00008_ip = 86; continue _fun00007 }
 44:
                tango = entity.participation;
                mike = tango.stop;
                mike = mike.bind(tango)();
                _fun00008_ip = 86; continue _fun00007;
 62:
                mike = zulu.start;
                mike = mike.bind(zulu)();
                mike = entity.participation;
                entity = mike.start;
                entity = entity.bind(mike)();
 86:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'onListening';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argBar;
                entity = this;
                zulu = entity.listeningUsers;
                mike = argFoo;
                if(mike) { _fun00010_ip = 104; continue _fun00009 }
 18:
                mike = zulu.delete;
                mike = mike.bind(zulu)(tango);
                if(!mike) { _fun00010_ip = 48; continue _fun00009 }
 31:
                report = entity.listeningUsers;
                oscar = report.size;
                report = 0;
                mike = report === oscar;
 48:
                if(!mike) { _fun00010_ip = 144; continue _fun00009 }
 51:
                report = entity.listening;
                mike = report.stop;
                mike = mike.bind(report)();
                report = entity.speaking;
                mike = report.isRunning;
                mike = mike.bind(report)();
                if(mike) { _fun00010_ip = 144; continue _fun00009 }
 86:
                report = entity.participation;
                mike = report.stop;
                mike = mike.bind(report)();
                _fun00010_ip = 144; continue _fun00009;
 104:
                mike = zulu.add;
                mike = mike.bind(zulu)(tango);
                zulu = entity.listening;
                mike = zulu.start;
                mike = mike.bind(zulu)();
                mike = entity.participation;
                entity = mike.start;
                entity = entity.bind(mike)();
 144:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'onMuted';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = this;
                mike = entity.muted;
                entity = argFoo;
                if(entity) { _fun00012_ip = 27; continue _fun00011 }
 15:
                entity = mike.stop;
                entity = entity.bind(mike)();
                _fun00012_ip = 36; continue _fun00011;
 27:
                entity = mike.start;
                entity = entity.bind(mike)();
 36:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'stop';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            zulu = entity.speaking;
            mike = zulu.stop;
            mike = mike.bind(zulu)();
            zulu = entity.listening;
            mike = zulu.stop;
            mike = mike.bind(zulu)();
            zulu = entity.participation;
            mike = zulu.stop;
            mike = mike.bind(zulu)();
            zulu = entity.connected;
            mike = zulu.stop;
            mike = mike.bind(zulu)();
            mike = entity.muted;
            entity = mike.stop;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'getDurationStats';
        entity['key'] = oscar;
        report = function() { // Original name: value
            mike = this;
            entity = {};
            tango = mike.listening;
            zulu = tango.elapsed;
            tango = zulu.bind(tango)();
            zulu = tango.asMilliseconds;
            zulu = zulu.bind(tango)();
            entity['duration_listening_ms'] = zulu;
            tango = mike.speaking;
            zulu = tango.elapsed;
            tango = zulu.bind(tango)();
            zulu = tango.asMilliseconds;
            zulu = zulu.bind(tango)();
            entity['duration_speaking_ms'] = zulu;
            tango = mike.participation;
            zulu = tango.elapsed;
            tango = zulu.bind(tango)();
            zulu = tango.asMilliseconds;
            zulu = zulu.bind(tango)();
            entity['duration_participation_ms'] = zulu;
            tango = mike.connected;
            zulu = tango.elapsed;
            tango = zulu.bind(tango)();
            zulu = tango.asMilliseconds;
            zulu = zulu.bind(tango)();
            entity['duration_connected_ms'] = zulu;
            zulu = mike.muted;
            mike = zulu.elapsed;
            zulu = mike.bind(zulu)();
            mike = zulu.asMilliseconds;
            mike = mike.bind(zulu)();
            entity['duration_muted_ms'] = mike;
            return entity;
        };
        entity['value'] = report;
        mike[5] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/VoiceDuration.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();