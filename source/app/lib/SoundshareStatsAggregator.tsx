// app/lib/SoundshareStatsAggregator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    mike = function() {
        tango = _closure1_slot1;
        zulu = function() { // Original name: SoundshareStatsAggregator
            zulu = this;
            tango = _closure1_slot0;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = {'soundshare_attach_requested_count': 0, 'soundshare_capturing_count': 0, 'soundshare_capture_stopped_count': 0, 'soundshare_hooked_count': 0, 'soundshare_recv_connect_count': 0, 'soundshare_recv_disconnect_count': 0, 'soundshare_recv_started_count': 0, 'soundshare_recv_stopped_count': 0, 'soundshare_recv_failed_count': 0, 'soundshare_recv_format_count': 0, 'soundshare_send_announce_count': 0, 'soundshare_send_start_count': 0, 'soundshare_send_stop_count': 0, 'soundshare_malformed_trace_count': 0, 'soundshare_audio_detected_count': 0, 'soundshare_state_transition_detached_count': 0, 'soundshare_state_transition_waiting_count': 0, 'soundshare_state_transition_attached_count': 0, 'soundshare_state_transition_started_count': 0, 'soundshare_state_transition_playing_count': 0, 'soundshare_state_transition_silence_count': 0, 'soundshare_unknown_event_count': 0, 'soundshare_first_pid': 0, 'soundshare_last_pid': 0, 'soundshare_unique_pids': 0, 'soundshare_first_session': null, 'soundshare_last_session': null};
            zulu['_report'] = mike;
            mike = global;
            mike = mike.Set;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            golf = tango;
            mike = new golf[mike](oscar);
            mike = mike instanceof Object ? mike : tango;
            zulu['_pids'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'traceEvent';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = argFoo;
                tango = argBar;
                report = this;
                mike = report._report;
                oscar = tango.type;
                entity = 'soundshare_state_transition';
                if(!(entity !== oscar)) { _fun00002_ip = 64; continue _fun00001 }
 30:
                options = tango.type;
                entity = global;
                entity = entity.HermesInternal;
                golf = entity.concat;
                oscar = '';
                entity = '_count';
                golf = golf.bind(oscar)(options, entity);
                _fun00002_ip = 113; continue _fun00001;
 64:
                oscar = tango.newState;
                entity = ['detached', 'waiting', 'attached', 'started', 'playing', 'silence'];
                verify = entity[oscar];
                entity = global;
                entity = entity.HermesInternal;
                options = entity.concat;
                oscar = 'soundshare_state_transition_';
                entity = '_count';
                golf = options.bind(oscar)(verify, entity);
 113:
                oscar = mike[golf];
                entity = undefined;
                if(!(entity === oscar)) { _fun00002_ip = 140; continue _fun00001 }
 123:
                oscar = mike.soundshare_unknown_event_count;
                oscar = oscar + 1;
                mike['soundshare_unknown_event_count'] = oscar;
                _fun00002_ip = 165; continue _fun00001;
 140:
                options = mike[golf];
                oscar = 32767;
                if(!(options < oscar)) { _fun00002_ip = 165; continue _fun00001 }
 154:
                oscar = mike[golf];
                oscar = oscar + 1;
                mike[golf] = oscar;
 165:
                oscar = 'pid';
                oscar = oscar in tango;
                if(!oscar) { _fun00002_ip = 234; continue _fun00001 }
 176:
                golf = mike.soundshare_first_pid;
                oscar = 0;
                if(!(oscar === golf)) { _fun00002_ip = 200; continue _fun00001 }
 188:
                oscar = tango.pid;
                mike['soundshare_first_pid'] = oscar;
 200:
                oscar = tango.pid;
                mike['soundshare_last_pid'] = oscar;
                oscar = report._pids;
                report = oscar.add;
                tango = tango.pid;
                tango = report.bind(oscar)(tango);
 234:
                report = null;
                if(!(report != zulu)) { _fun00002_ip = 262; continue _fun00001 }
 240:
                tango = mike.soundshare_first_session;
                if(!(report == tango)) { _fun00002_ip = 256; continue _fun00001 }
 250:
                mike['soundshare_first_session'] = zulu;
 256:
                mike['soundshare_last_session'] = zulu;
 262:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'getStats';
        entity['key'] = oscar;
        report = function() { // Original name: value
            mike = this;
            entity = {};
            tango = mike._report;
            report = entity;
            zulu = copyDataProperties(report, tango);
            mike = mike._pids;
            zulu = mike.size;
            mike = 'soundshare_unique_pids';
            entity[mike] = zulu;
            return entity;
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'lib/SoundshareStatsAggregator.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();