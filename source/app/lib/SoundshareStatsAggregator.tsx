// app/lib/SoundshareStatsAggregator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function SoundshareStatsAggregator() {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = {'soundshare_attach_requested_count': 0, 'soundshare_capturing_count': 0, 'soundshare_capture_stopped_count': 0, 'soundshare_hooked_count': 0, 'soundshare_recv_connect_count': 0, 'soundshare_recv_disconnect_count': 0, 'soundshare_recv_started_count': 0, 'soundshare_recv_stopped_count': 0, 'soundshare_recv_failed_count': 0, 'soundshare_recv_format_count': 0, 'soundshare_send_announce_count': 0, 'soundshare_send_start_count': 0, 'soundshare_send_stop_count': 0, 'soundshare_malformed_trace_count': 0, 'soundshare_audio_detected_count': 0, 'soundshare_state_transition_detached_count': 0, 'soundshare_state_transition_waiting_count': 0, 'soundshare_state_transition_attached_count': 0, 'soundshare_state_transition_started_count': 0, 'soundshare_state_transition_playing_count': 0, 'soundshare_state_transition_silence_count': 0, 'soundshare_unknown_event_count': 0, 'soundshare_first_pid': 0, 'soundshare_last_pid': 0, 'soundshare_unique_pids': 0, 'soundshare_first_session': null, 'soundshare_last_session': null};
            var3['_report'] = var2;
            var2 = global;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_pids'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'traceEvent';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var4 = arg2;
                var5 = this;
                var2 = var5._report;
                var6 = var4.type;
                var1 = 'soundshare_state_transition';
                if(!(var1 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var8 = var4.type;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var6 = '';
                var1 = '_count';
                var7 = var7.bind(var6)(var8, var1);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var6 = var4.newState;
                var1 = ['detached', 'waiting', 'attached', 'started', 'playing', 'silence'];
                var9 = var1[var6];
                var1 = global;
                var1 = var1.HermesInternal;
                var8 = var1.concat;
                var6 = 'soundshare_state_transition_';
                var1 = '_count';
                var7 = var8.bind(var6)(var9, var1);
case 4:
                var6 = var2[var7];
                var1 = undefined;
                if(!(var1 === var6)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var6 = var2.soundshare_unknown_event_count;
                var6 = var6 + 1;
                var2['soundshare_unknown_event_count'] = var6;
                _fun0001_ip = 7; continue _fun0001;
case 5:
                var8 = var2[var7];
                var6 = 32767;
                if(!(var8 < var6)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var6 = var2[var7];
                var6 = var6 + 1;
                var2[var7] = var6;
case 7:
                var6 = 'pid';
                var6 = var6 in var4;
                if(!var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var7 = var2.soundshare_first_pid;
                var6 = 0;
                if(!(var6 === var7)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var6 = var4.pid;
                var2['soundshare_first_pid'] = var6;
case 11:
                var6 = var4.pid;
                var2['soundshare_last_pid'] = var6;
                var6 = var5._pids;
                var5 = var6.add;
                var4 = var4.pid;
                var4 = var5.bind(var6)(var4);
case 9:
                var5 = null;
                if(!(var5 != var3)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var4 = var2.soundshare_first_session;
                if(!(var5 == var4)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                var2['soundshare_first_session'] = var3;
case 15:
                var2['soundshare_last_session'] = var3;
case 13:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'getStats';
        var1['key'] = var6;
        var5 = function value() {
            var2 = this;
            var1 = {};
            var4 = var2._report;
            var5 = var1;
            var3 = copyDataProperties(var5, var4);
            var2 = var2._pids;
            var3 = var2.size;
            var2 = 'soundshare_unique_pids';
            var1[var2] = var3;
            return var1;
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/SoundshareStatsAggregator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();