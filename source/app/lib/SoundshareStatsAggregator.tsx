// app/lib/SoundshareStatsAggregator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    michal = function() {
        tangon = _closure1_slot1;
        zuuluu = function() { // Original name: SoundshareStatsAggregator
            zuuluu = this;
            tangon = _closure1_slot0;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = {'soundshare_attach_requested_count': 0, 'soundshare_capturing_count': 0, 'soundshare_capture_stopped_count': 0, 'soundshare_hooked_count': 0, 'soundshare_recv_connect_count': 0, 'soundshare_recv_disconnect_count': 0, 'soundshare_recv_started_count': 0, 'soundshare_recv_stopped_count': 0, 'soundshare_recv_failed_count': 0, 'soundshare_recv_format_count': 0, 'soundshare_send_announce_count': 0, 'soundshare_send_start_count': 0, 'soundshare_send_stop_count': 0, 'soundshare_malformed_trace_count': 0, 'soundshare_audio_detected_count': 0, 'soundshare_state_transition_detached_count': 0, 'soundshare_state_transition_waiting_count': 0, 'soundshare_state_transition_attached_count': 0, 'soundshare_state_transition_started_count': 0, 'soundshare_state_transition_playing_count': 0, 'soundshare_state_transition_silence_count': 0, 'soundshare_unknown_event_count': 0, 'soundshare_first_pid': 0, 'soundshare_last_pid': 0, 'soundshare_unique_pids': 0, 'soundshare_first_session': null, 'soundshare_last_session': null};
            zuuluu['_report'] = michal;
            michal = global;
            michal = michal.Set;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            golfie = tangon;
            michal = new golfie[michal](oscard);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['_pids'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'traceEvent';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argFoo;
                tangon = argBar;
                report = this;
                michal = report._report;
                oscard = tangon.type;
                entity = 'soundshare_state_transition';
                if(!(entity !== oscard)) { _fun00002_ip = 64; continue _fun00001 }
 30:
                option = tangon.type;
                entity = global;
                entity = entity.HermesInternal;
                golfie = entity.concat;
                oscard = '';
                entity = '_count';
                golfie = golfie.bind(oscard)(option, entity);
                _fun00002_ip = 113; continue _fun00001;
 64:
                oscard = tangon.newState;
                entity = ['detached', 'waiting', 'attached', 'started', 'playing', 'silence'];
                verify = entity[oscard];
                entity = global;
                entity = entity.HermesInternal;
                option = entity.concat;
                oscard = 'soundshare_state_transition_';
                entity = '_count';
                golfie = option.bind(oscard)(verify, entity);
 113:
                oscard = michal[golfie];
                entity = undefined;
                if(!(entity === oscard)) { _fun00002_ip = 140; continue _fun00001 }
 123:
                oscard = michal.soundshare_unknown_event_count;
                oscard = oscard + 1;
                michal['soundshare_unknown_event_count'] = oscard;
                _fun00002_ip = 165; continue _fun00001;
 140:
                option = michal[golfie];
                oscard = 32767;
                if(!(option < oscard)) { _fun00002_ip = 165; continue _fun00001 }
 154:
                oscard = michal[golfie];
                oscard = oscard + 1;
                michal[golfie] = oscard;
 165:
                oscard = 'pid';
                oscard = oscard in tangon;
                if(!oscard) { _fun00002_ip = 234; continue _fun00001 }
 176:
                golfie = michal.soundshare_first_pid;
                oscard = 0;
                if(!(oscard === golfie)) { _fun00002_ip = 200; continue _fun00001 }
 188:
                oscard = tangon.pid;
                michal['soundshare_first_pid'] = oscard;
 200:
                oscard = tangon.pid;
                michal['soundshare_last_pid'] = oscard;
                oscard = report._pids;
                report = oscard.add;
                tangon = tangon.pid;
                tangon = report.bind(oscard)(tangon);
 234:
                report = null;
                if(!(report != zuuluu)) { _fun00002_ip = 262; continue _fun00001 }
 240:
                tangon = michal.soundshare_first_session;
                if(!(report == tangon)) { _fun00002_ip = 256; continue _fun00001 }
 250:
                michal['soundshare_first_session'] = zuuluu;
 256:
                michal['soundshare_last_session'] = zuuluu;
 262:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'getStats';
        entity['key'] = oscard;
        report = function() { // Original name: value
            michal = this;
            entity = {};
            tangon = michal._report;
            report = entity;
            zuuluu = copyDataProperties(report, tangon);
            michal = michal._pids;
            zuuluu = michal.size;
            michal = 'soundshare_unique_pids';
            entity[michal] = zuuluu;
            return entity;
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/SoundshareStatsAggregator.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();