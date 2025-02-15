// app/lib/RTCConnection.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golf = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = golf;
        entity = argCorge;
        var _closure1_slot2 = entity;
        var _closure1_slot3 = oscar;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = argFoo;
                var _closure2_slot0 = zulu;
                report = global;
                mike = report.Symbol;
                tango = 'undefined';
                mike = typeof mike;
                mike = tango !== mike;
                if(!mike) { _fun00004_ip = 46; continue _fun00003 }
 30:
                tango = report.Symbol;
                tango = tango.iterator;
                mike = zulu[tango];
 46:
                if(mike) { _fun00004_ip = 55; continue _fun00003 }
 49:
                mike = zulu.@@iterator;
 55:
                if(mike) { _fun00004_ip = 343; continue _fun00003 }
 61:
                oscar = report.Array;
                tango = oscar.isArray;
                oscar = tango.bind(oscar)(zulu);
                tango = mike;
                if(oscar) { _fun00004_ip = 323; continue _fun00003 }
 86:
                options = undefined;
                oscar = undefined;
                if(!zulu) { _fun00004_ip = 283; continue _fun00003 }
 96:
                verify = 'string';
                golf = typeof zulu;
                if(!(verify !== golf)) { _fun00004_ip = 270; continue _fun00003 }
 110:
                golf = {};
                verify = golf.toString;
                golf = verify.call;
                yankee = golf.bind(verify)(zulu);
                offset = yankee.slice;
                verify = 8;
                golf = -1;
                verify = offset.bind(yankee)(verify, golf);
                golf = 'Object';
                golf = golf === verify;
                if(!golf) { _fun00004_ip = 163; continue _fun00003 }
 158:
                golf = zulu.constructor;
 163:
                offset = verify;
                if(!golf) { _fun00004_ip = 179; continue _fun00003 }
 169:
                golf = zulu.constructor;
                offset = golf.name;
 179:
                golf = 'Map';
                if(!(golf !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 187:
                golf = 'Set';
                if(!(golf !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 195:
                golf = 'Arguments';
                if(!(golf !== offset)) { _fun00004_ip = 234; continue _fun00003 }
 205:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golf = verify.test;
                verify = golf.bind(verify)(offset);
                golf = undefined;
                if(!verify) { _fun00004_ip = 247; continue _fun00003 }
 234:
                verify = _closure1_slot30;
                golf = verify.bind(options)(zulu, options);
 247:
                _fun00004_ip = 265; continue _fun00003;
 249:
                offset = report.Array;
                verify = offset.from;
                golf = verify.bind(offset)(zulu);
 265:
                oscar = golf;
                _fun00004_ip = 283; continue _fun00003;
 270:
                golf = _closure1_slot30;
                oscar = golf.bind(options)(zulu, options);
 283:
                tango = oscar;
                if(tango) { _fun00004_ip = 323; continue _fun00003 }
 289:
                golf = report.TypeError;
                report = golf.prototype;
                oscar = Object.create(report, {constructor: {value: golf}});
                foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                backup = oscar;
                report = new backup[golf](foxtrot, romeo);
                report = report instanceof Object ? report : oscar;
                throw report;
 323:
                if(!tango) { _fun00004_ip = 330; continue _fun00003 }
 326:
                _closure2_slot0 = tango;
 330:
                tango = 0;
                var _closure2_slot1 = tango;
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        mike = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(mike >= entity))) { _fun00006_ip = 56; continue _fun00005 }
 20:
                        entity = {};
                        mike = false;
                        entity['done'] = mike;
                        zulu = _closure2_slot0;
                        mike = _closure2_slot1;
                        mike = parseFloat(mike);
                        tango = mike + 1;
                        _closure2_slot1 = tango;
                        mike = zulu[mike];
                        entity['value'] = mike;
                        _fun00006_ip = 67; continue _fun00005;
 56:
                        mike = {};
                        zulu = true;
                        mike['done'] = zulu;
                        entity = mike;
 67:
                        return entity;
                    }
                };
                return entity;
 343:
                entity = mike.call;
                zulu = entity.bind(mike)(zulu);
                mike = zulu.next;
                entity = mike.bind;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        var _closure1_slot29 = entity;
        entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = argFoo;
                entity = null;
                zulu = undefined;
                entity = entity == zulu;
                if(entity) { _fun00008_ip = 23; continue _fun00007 }
 14:
                mike = tango.length;
                entity = zulu > mike;
 23:
                mike = undefined;
                if(!entity) { _fun00008_ip = 33; continue _fun00007 }
 28:
                mike = tango.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zulu)(mike);
                zulu = 0;
                report = zulu < mike;
                if(!report) { _fun00008_ip = 70; continue _fun00007 }
 55:
                report = tango[zulu];
                entity[zulu] = report;
                zulu = zulu + 1;
                if(zulu < mike) { _fun00008_ip = 55; continue _fun00007 }
 70:
                return entity;
            }
        };
        var _closure1_slot30 = entity;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argFoo;
                mike = _closure1_slot8;
                zulu = undefined;
                entity = argBar;
                verify = mike.bind(zulu)(entity);
                mike = _closure1_slot7;
                entity = _closure1_slot32;
                entity = entity.bind(zulu)();
                if(entity) { _fun00010_ip = 48; continue _fun00009 }
 35:
                entity = verify.apply;
                entity = entity.bind(verify)(tango, zulu);
                _fun00010_ip = 86; continue _fun00009;
 48:
                oscar = global;
                options = oscar.Reflect;
                golf = options.construct;
                oscar = new Array(0);
                report = _closure1_slot8;
                report = report.bind(zulu)(tango);
                report = report.constructor;
                entity = golf.bind(options)(verify, oscar, report);
 86:
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        var _closure1_slot31 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
 2: // try_start_0
                mike = global;
                zulu = mike.Boolean;
                zulu = zulu.prototype;
                tango = zulu.valueOf;
                zulu = tango.call;
                options = mike.Reflect;
                golf = options.construct;
                oscar = mike.Boolean;
                report = new Array(0);
                mike = function() {
                    entity = undefined;
                    return entity;
                };
                mike = golf.bind(options)(oscar, report, mike);
                mike = zulu.bind(tango)(mike);
                mike = !mike;
                var _closure2_slot0 = mike;
 70: // try_end0
                _fun00012_ip = 74; continue _fun00011;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                mike = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot32 = mike;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot32 = entity;
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
        var _closure1_slot4 = tango;
        tango = 1;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot5 = tango;
        tango = 2;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot6 = tango;
        tango = 3;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot7 = tango;
        tango = 4;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot8 = tango;
        tango = 5;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot9 = tango;
        tango = 6;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot10 = tango;
        tango = 7;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot11 = tango;
        tango = 8;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot12 = tango;
        tango = 9;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot13 = tango;
        tango = 10;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot14 = tango;
        tango = 11;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot15 = tango;
        tango = 12;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot16 = tango;
        tango = 13;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        var _closure1_slot17 = tango;
        tango = 14;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        options = tango.AnalyticEvents;
        var _closure1_slot18 = options;
        options = tango.ChannelTypes;
        var _closure1_slot19 = options;
        options = tango.RTCConnectionStates;
        var _closure1_slot20 = options;
        tango = tango.RTCConnectionQuality;
        var _closure1_slot21 = tango;
        tango = 15;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        options = tango.Features;
        var _closure1_slot22 = options;
        options = tango.MediaEngineContextTypes;
        var _closure1_slot23 = options;
        options = tango.ConnectionStates;
        var _closure1_slot24 = options;
        options = tango.Codecs;
        var _closure1_slot25 = options;
        options = tango.MediaTypes;
        var _closure1_slot26 = options;
        tango = tango.SpeakingFlags;
        var _closure1_slot27 = tango;
        verify = /^https/;
        options = verify.test;
        tango = 'https:';
        options = options.bind(verify)(tango);
        tango = 'ws:';
        if(!options) { _fun00002_ip = 492; continue _fun00001 }
 486:
        tango = 'wss:';
 492:
        var _closure1_slot28 = tango;
        tango = 57;
        tango = oscar[tango];
        tango = golf.bind(entity)(tango);
        mike = function(argFoo) {
            tango = function(argFoo) { // Original name: RTCConnection
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    report = this;
                    backup = entity.userId;
                    foxtrot = entity.sessionId;
                    yankee = entity.guildId;
                    romeo = entity.channelId;
                    verify = entity.context;
                    golf = undefined;
                    if(!(verify === golf)) { _fun00014_ip = 53; continue _fun00013 }
 40:
                    zulu = _closure1_slot23;
                    verify = zulu.DEFAULT;
 53:
                    options = entity.rtcServerId;
                    oscar = entity.parentMediaSessionId;
                    var _closure3_slot0 = golf;
                    entity = _closure1_slot5;
                    tango = _closure2_slot0;
                    entity = entity.bind(golf)(report, tango);
                    entity = _closure1_slot31;
                    entity = entity.bind(golf)(report, tango);
                    _closure3_slot0 = entity;
                    offset = global;
                    tango = offset.Map;
                    report = tango.prototype;
                    report = Object.create(report, {constructor: {value: tango}});
                    config = report;
                    tango = new config[tango](sequence);
                    tango = tango instanceof Object ? tango : report;
                    entity['_secureFramesRosterMap'] = tango;
                    tango = function() {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            mike = _closure3_slot0;
                            mike = mike._socket;
                            zulu = null;
                            if(!(zulu != mike)) { _fun00016_ip = 169; continue _fun00015 }
 22:
                            zulu = _closure3_slot0;
                            zulu = zulu._connected;
                            if(!zulu) { _fun00016_ip = 79; continue _fun00015 }
 35:
                            tango = _closure3_slot0;
                            oscar = _closure1_slot0;
                            report = _closure1_slot3;
                            zulu = 16;
                            report = report[zulu];
                            zulu = undefined;
                            report = oscar.bind(zulu)(report);
                            zulu = report.now;
                            zulu = zulu.bind(report)();
                            tango['_connectStartTime'] = zulu;
 79:
                            zulu = _closure3_slot0;
                            zulu = zulu._connecting;
                            if(zulu) { _fun00016_ip = 130; continue _fun00015 }
 92:
                            tango = _closure3_slot0;
                            zulu = tango._trackVoiceConnectionConnecting;
                            zulu = zulu.bind(tango)();
                            tango = _closure3_slot0;
                            zulu = true;
                            tango['_connecting'] = zulu;
                            tango = _closure3_slot0;
                            zulu = false;
                            tango['_encountered_socket_failure'] = zulu;
 130:
                            zulu = _closure3_slot0;
                            entity = zulu._connectCount;
                            entity = entity + 1;
                            zulu['_connectCount'] = entity;
                            entity = mike.close;
                            entity = entity.bind(mike)();
                            entity = mike.connect;
                            entity = entity.bind(mike)();
 169:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity['reconnect'] = tango;
                    report = _closure1_slot1;
                    kilo = _closure1_slot3;
                    tango = 17;
                    tango = kilo[tango];
                    output = report.bind(golf)(tango);
                    sizing = entity._alertMLSFailure;
                    tango = 100;
                    tango = output.bind(golf)(sizing, tango);
                    entity['_alertMLSFailureDebouced'] = tango;
                    tango = function() {
                        tango = _closure3_slot0;
                        zulu = tango.expeditedHeartbeat;
                        mike = 5000;
                        entity = 'network detected online.';
                        entity = zulu.bind(tango)(mike, entity);
                        entity = undefined;
                        return entity;
                    };
                    entity['_handleNetworkOnline'] = tango;
                    tango = function() {
                        report = _closure3_slot0;
                        tango = report.expeditedHeartbeat;
                        zulu = 15000;
                        mike = 'network detected offline.';
                        entity = false;
                        entity = tango.bind(report)(zulu, mike, entity);
                        entity = undefined;
                        return entity;
                    };
                    entity['_handleNetworkOffline'] = tango;
                    tango = function() {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            entity = _closure3_slot0;
                            mike = entity._socket;
                            entity = null;
                            if(!(entity != mike)) { _fun00018_ip = 31; continue _fun00017 }
 19:
                            entity = mike.noRoute;
                            entity = entity.bind(mike)();
 31:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity['_handleNoRoute'] = tango;
                    tango = function() {
                        tango = _closure3_slot0;
                        zulu = tango.expeditedHeartbeat;
                        mike = 5000;
                        entity = 'power monitor resumed';
                        entity = zulu.bind(tango)(mike, entity);
                        entity = undefined;
                        return entity;
                    };
                    entity['_handlePowerResume'] = tango;
                    tango = function() {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            mike = _closure3_slot0;
                            zulu = mike._voiceQuality;
                            mike = null;
                            if(!(mike != zulu)) { _fun00020_ip = 616; continue _fun00019 }
 22:
                            mike = _closure3_slot0;
                            zulu = mike._voiceQuality;
                            mike = zulu.getPeriodicStats;
                            zulu = mike.bind(zulu)();
                            tango = _closure3_slot0;
                            mike = tango.shouldReportPeriodicStats;
                            mike = mike.bind(tango)(zulu);
                            if(!mike) { _fun00020_ip = 597; continue _fun00019 }
 67:
                            mike = _closure1_slot29;
                            papa = undefined;
                            context = mike.bind(papa)(zulu);
                            zulu = context.bind(papa)();
                            mike = zulu.done;
                            record = 18;
                            config = 'media_session_id';
                            sequence = 'sender_user_id';
                            vacuum = 'hostname';
                            control = 'frame_op_silent';
                            source = 'frame_op_normal';
                            update = 'frame_op_merged';
                            echo = 'frame_op_expanded';
                            result = 'frame_op_accelerated';
                            output = 'frame_op_preemptive_expanded';
                            sizing = 'frame_op_cng';
                            kilo = 'accelerate_rate';
                            backup = 'expand_rate';
                            foxtrot = 'preemptive_expand_rate';
                            romeo = 'speech_expand_rate';
                            yankee = 'duration_ms';
                            offset = 'sequence_id';
                            verify = 'input_device';
                            options = 'output_device';
                            golf = global;
                            oscar = 'ping_average';
                            report = 'ping_bad_count';
                            tango = 'parent_media_session_id';
                            if(mike) { _fun00020_ip = 597; continue _fun00019 }
 219:
                            whiskey = zulu.value;
                            status = _closure1_slot1;
                            mike = _closure1_slot3;
                            mike = mike[record];
                            lima = status.bind(papa)(mike);
                            sierra = lima.track;
                            mike = _closure1_slot18;
                            status = mike.VOICE_QUALITY_PERIODIC_STATS;
                            mike = {};
                            quebec = _closure3_slot0;
                            equality = quebec._getAnalyticsProperties;
                            variable37 = equality.bind(quebec)();
                            variable38 = mike;
                            equality = copyDataProperties(variable38, variable37);
                            quebec = _closure3_slot0;
                            equality = quebec.getMediaSessionId;
                            equality = equality.bind(quebec)();
                            mike[config] = equality;
                            equality = whiskey.userId;
                            mike[sequence] = equality;
                            equality = _closure3_slot0;
                            equality = equality.hostname;
                            mike[vacuum] = equality;
                            equality = whiskey.silent;
                            mike[control] = equality;
                            equality = whiskey.normal;
                            mike[source] = equality;
                            equality = whiskey.merged;
                            mike[update] = equality;
                            equality = whiskey.expanded;
                            mike[echo] = equality;
                            equality = whiskey.accelerated;
                            mike[result] = equality;
                            equality = whiskey.preemptiveExpanded;
                            mike[output] = equality;
                            equality = whiskey.cng;
                            mike[sizing] = equality;
                            equality = whiskey.accelerateRate;
                            mike[kilo] = equality;
                            equality = whiskey.expandRate;
                            mike[backup] = equality;
                            equality = whiskey.preemptiveExpandRate;
                            mike[foxtrot] = equality;
                            equality = whiskey.speechExpandRate;
                            mike[romeo] = equality;
                            whiskey = whiskey.durationMs;
                            mike[yankee] = whiskey;
                            whiskey = _closure3_slot0;
                            whiskey = whiskey._voiceQualityPeriodicStatsSequenceId;
                            mike[offset] = whiskey;
                            equality = _closure3_slot0;
                            whiskey = equality.getInputDeviceName;
                            whiskey = whiskey.bind(equality)();
                            mike[verify] = whiskey;
                            equality = _closure3_slot0;
                            whiskey = equality.getOutputDeviceName;
                            whiskey = whiskey.bind(equality)();
                            mike[options] = whiskey;
                            quebec = golf.Math;
                            equality = quebec.round;
                            variable36 = _closure3_slot0;
                            whiskey = variable36.getAveragePing;
                            whiskey = whiskey.bind(variable36)();
                            whiskey = equality.bind(quebec)(whiskey);
                            mike[oscar] = whiskey;
                            whiskey = _closure3_slot0;
                            whiskey = whiskey._pingBadCount;
                            mike[report] = whiskey;
                            whiskey = _closure3_slot0;
                            whiskey = whiskey.parentMediaSessionId;
                            mike[tango] = whiskey;
                            mike = sierra.bind(lima)(status, mike);
                            status = context.bind(papa)();
                            mike = status.done;
                            zulu = status;
                            if(!mike) { _fun00020_ip = 219; continue _fun00019 }
 597:
                            mike = _closure3_slot0;
                            entity = mike._voiceQualityPeriodicStatsSequenceId;
                            entity = entity + 1;
                            mike['_voiceQualityPeriodicStatsSequenceId'] = entity;
 616:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity['_handleVoiceQualityPeriodicsStats'] = tango;
                    tango = function() {
                        entity = {};
                        tango = _closure3_slot0;
                        mike = tango.getInputDeviceName;
                        mike = mike.bind(tango)();
                        entity['input_device'] = mike;
                        mike = global;
                        golf = mike.Object;
                        oscar = golf.keys;
                        report = _closure1_slot13;
                        tango = report.getInputDevices;
                        tango = tango.bind(report)();
                        tango = oscar.bind(golf)(tango);
                        tango = tango.length;
                        entity['input_device_count'] = tango;
                        tango = _closure3_slot0;
                        zulu = tango.getOutputDeviceName;
                        zulu = zulu.bind(tango)();
                        entity['output_device'] = zulu;
                        tango = mike.Object;
                        zulu = tango.keys;
                        mike = report.getOutputDevices;
                        mike = mike.bind(report)();
                        mike = zulu.bind(tango)(mike);
                        mike = mike.length;
                        entity['output_device_count'] = mike;
                        return entity;
                    };
                    entity['getAudioDeviceStates'] = tango;
                    tango = function() {
                        entity = {};
                        zulu = _closure3_slot0;
                        mike = zulu.getVideoDeviceName;
                        mike = mike.bind(zulu)();
                        entity['camera_device'] = mike;
                        mike = global;
                        tango = mike.Object;
                        zulu = tango.keys;
                        report = _closure1_slot13;
                        mike = report.getVideoDevices;
                        mike = mike.bind(report)();
                        mike = zulu.bind(tango)(mike);
                        mike = mike.length;
                        entity['camera_device_count'] = mike;
                        return entity;
                    };
                    entity['getVideoDeviceStates'] = tango;
                    tango = function() {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            zulu = _closure1_slot12;
                            mike = zulu.getChannel;
                            entity = _closure3_slot0;
                            entity = entity.channelId;
                            entity = mike.bind(zulu)(entity);
                            verify = null;
                            mike = verify != entity;
                            if(!mike) { _fun00022_ip = 43; continue _fun00021 }
 38:
                            verify = entity.type;
 43:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot3;
                            entity = 18;
                            mike = mike[entity];
                            entity = undefined;
                            report = zulu.bind(entity)(mike);
                            tango = report.track;
                            mike = _closure1_slot18;
                            zulu = mike.VOICE_CONNECTION_CONNECTING;
                            mike = {};
                            offset = _closure3_slot0;
                            options = offset.getAudioDeviceStates;
                            yankee = options.bind(offset)();
                            romeo = mike;
                            options = copyDataProperties(romeo, yankee);
                            offset = _closure3_slot0;
                            options = offset.getVideoDeviceStates;
                            yankee = options.bind(offset)();
                            romeo = mike;
                            options = copyDataProperties(romeo, yankee);
                            options = _closure3_slot0;
                            offset = options.guildId;
                            options = 'guild_id';
                            mike[options] = offset;
                            options = _closure3_slot0;
                            offset = options.channelId;
                            options = 'channel_id';
                            mike[options] = offset;
                            offset = _closure3_slot0;
                            options = offset.getRTCConnectionId;
                            offset = options.bind(offset)();
                            options = 'rtc_connection_id';
                            mike[options] = offset;
                            options = _closure3_slot0;
                            offset = options.hostname;
                            options = 'hostname';
                            mike[options] = offset;
                            options = _closure3_slot0;
                            offset = options._connectCount;
                            options = 'connect_count';
                            mike[options] = offset;
                            options = _closure3_slot0;
                            offset = options.context;
                            options = 'context';
                            mike[options] = offset;
                            options = 'channel_type';
                            mike[options] = verify;
                            options = _closure3_slot0;
                            golf = options.getVoiceParticipantType;
                            options = golf.bind(options)();
                            golf = 'participant_type';
                            mike[golf] = options;
                            golf = _closure1_slot13;
                            oscar = golf.isMute;
                            golf = oscar.bind(golf)();
                            oscar = 'is_muted';
                            mike[oscar] = golf;
                            mike = tango.bind(report)(zulu, mike);
                            return entity;
                        }
                    };
                    entity['_trackVoiceConnectionConnecting'] = tango;
                    tango = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            zulu = argFoo;
                            entity = _closure3_slot0;
                            report = entity._goLiveQualityManager;
                            entity = null;
                            if(!(entity != report)) { _fun00024_ip = 35; continue _fun00023 }
 22:
                            tango = report.onIncomingVideoEnabled;
                            tango = tango.bind(report)(zulu);
 35:
                            tango = _closure3_slot0;
                            mike = tango.getOrCreateVideoQuality;
                            mike = mike.bind(tango)();
                            if(!(entity != mike)) { _fun00024_ip = 66; continue _fun00023 }
 53:
                            entity = mike.setOcclusionIncomingVideoEnabled;
                            entity = entity.bind(mike)(zulu);
 66:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity['incomingVideoEnabledChanged'] = tango;
                    tango = function(argFoo) {
                        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                            mike = _closure3_slot0;
                            entity = mike.getOrCreateVideoQuality;
                            zulu = entity.bind(mike)();
                            entity = null;
                            if(!(entity != zulu)) { _fun00026_ip = 42; continue _fun00025 }
 23:
                            mike = zulu.setWindowOcclusionState;
                            entity = argFoo;
                            entity = !entity;
                            entity = mike.bind(zulu)(entity);
 42:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity['windowVisibilityChanged'] = tango;
                    entity['context'] = verify;
                    tango = 19;
                    tango = kilo[tango];
                    sizing = report.bind(golf)(tango);
                    tango = null;
                    report = yankee;
                    if(!(tango != options)) { _fun00014_ip = 331; continue _fun00013 }
 328:
                    report = options;
 331:
                    update = romeo;
                    if(!(tango != report)) { _fun00014_ip = 341; continue _fun00013 }
 338:
                    update = report;
 341:
                    control = entity.context;
                    report = offset.HermesInternal;
                    result = report.concat;
                    config = 'RTCConnection(';
                    vacuum = ', ';
                    source = ')';
                    sequence = update;
                    sequence = config[result](sequence, vacuum, control, source, update);
                    kilo = sizing.prototype;
                    kilo = Object.create(kilo, {constructor: {value: sizing}});
                    config = kilo;
                    report = new config[sizing](sequence, vacuum);
                    report = report instanceof Object ? report : kilo;
                    entity['logger'] = report;
                    sizing = entity.logger;
                    kilo = sizing.enableNativeLogger;
                    report = true;
                    kilo = kilo.bind(sizing)(report);
                    entity['userId'] = backup;
                    entity['sessionId'] = foxtrot;
                    entity['guildId'] = yankee;
                    entity['_channelId'] = romeo;
                    foxtrot = offset.Set;
                    yankee = new Array(1);
                    yankee[0] = romeo;
                    romeo = foxtrot.prototype;
                    romeo = Object.create(romeo, {constructor: {value: foxtrot}});
                    config = romeo;
                    sequence = yankee;
                    yankee = new config[foxtrot](sequence, vacuum);
                    yankee = yankee instanceof Object ? yankee : romeo;
                    entity['channelIds'] = yankee;
                    entity['rtcServerId'] = options;
                    entity['parentMediaSessionId'] = oscar;
                    entity['_endpoint'] = tango;
                    entity['hostname'] = tango;
                    entity['port'] = tango;
                    entity['token'] = tango;
                    entity['voiceVersion'] = tango;
                    entity['rtcWorkerVersion'] = tango;
                    oscar = _closure1_slot20;
                    oscar = oscar.AWAITING_ENDPOINT;
                    entity['state'] = oscar;
                    romeo = _closure1_slot0;
                    foxtrot = _closure1_slot3;
                    oscar = 20;
                    oscar = foxtrot[oscar];
                    oscar = romeo.bind(golf)(oscar);
                    yankee = oscar.StateHistory;
                    sequence = entity.state;
                    options = yankee.prototype;
                    options = Object.create(options, {constructor: {value: yankee}});
                    config = options;
                    oscar = new config[yankee](sequence, vacuum);
                    oscar = oscar instanceof Object ? oscar : options;
                    entity['stateHistory'] = oscar;
                    entity['_socket'] = tango;
                    options = _closure1_slot1;
                    oscar = 21;
                    oscar = foxtrot[oscar];
                    kilo = options.bind(golf)(oscar);
                    oscar = kilo.prototype;
                    options = Object.create(oscar, {constructor: {value: kilo}});
                    sequence = 1000;
                    vacuum = 10000;
                    config = options;
                    oscar = new config[kilo](sequence, vacuum, control);
                    oscar = oscar instanceof Object ? oscar : options;
                    entity['_backoff'] = oscar;
                    options = false;
                    entity['_destroyed'] = options;
                    oscar = new Array(0);
                    entity['_pings'] = oscar;
                    oscar = 0;
                    entity['_pingBadCount'] = oscar;
                    yankee = new Array(0);
                    entity['_pingTimeouts'] = yankee;
                    entity['_mediaSessionId'] = tango;
                    entity['_voiceQuality'] = tango;
                    entity['_voiceQualityPeriodicStatsInterval'] = tango;
                    entity['_voiceQualityPeriodicStatsSequenceId'] = oscar;
                    entity['_systemResponsiveness'] = tango;
                    entity['_noiseCancellationError'] = oscar;
                    entity['_voiceDuration'] = tango;
                    entity['_videoQuality'] = tango;
                    entity['_videoHealthManager'] = tango;
                    entity['_sentVideo'] = options;
                    entity['_outboundLossRate'] = tango;
                    yankee = 16;
                    yankee = foxtrot[yankee];
                    kilo = romeo.bind(golf)(yankee);
                    yankee = kilo.now;
                    yankee = yankee.bind(kilo)();
                    entity['_createdTime'] = yankee;
                    entity['_connectStartTime'] = oscar;
                    entity['_connectCompletedTime'] = oscar;
                    yankee = 22;
                    yankee = foxtrot[yankee];
                    romeo = romeo.bind(golf)(yankee);
                    yankee = romeo.v4;
                    yankee = yankee.bind(romeo)();
                    entity['_rtcConnectionId'] = yankee;
                    entity['_connectCount'] = oscar;
                    entity['_connected'] = options;
                    entity['_connecting'] = options;
                    entity['_encountered_socket_failure'] = options;
                    entity['_inputDetected'] = options;
                    yankee = new Array(0);
                    entity['_selectedExperiments'] = yankee;
                    entity['_secureFramesState'] = tango;
                    romeo = offset.Set;
                    offset = new Array(1);
                    offset[0] = backup;
                    yankee = romeo.prototype;
                    yankee = Object.create(yankee, {constructor: {value: romeo}});
                    config = yankee;
                    sequence = offset;
                    offset = new config[romeo](sequence, vacuum);
                    offset = offset instanceof Object ? offset : yankee;
                    entity['_userIds'] = offset;
                    yankee = entity._secureFramesRosterMap;
                    offset = yankee.clear;
                    offset = offset.bind(yankee)();
                    offset = {};
                    entity['_mlsFailuresRecovered'] = offset;
                    offset = {};
                    entity['_mlsFailures'] = offset;
                    entity['_lastSentSpeakingStatus'] = oscar;
                    entity['_lastSentSSRC'] = golf;
                    yankee = _closure1_slot13;
                    offset = yankee.supports;
                    oscar = _closure1_slot22;
                    oscar = oscar.FIRST_FRAME_CALLBACK;
                    foxtrot = offset.bind(yankee)(oscar);
                    if(!foxtrot) { _fun00014_ip = 1027; continue _fun00013 }
 1002:
                    yankee = _closure1_slot13;
                    offset = yankee.supports;
                    oscar = _closure1_slot22;
                    oscar = oscar.REMOTE_USER_MULTI_STREAM;
                    foxtrot = offset.bind(yankee)(oscar);
 1027:
                    oscar = _closure1_slot23;
                    oscar = oscar.DEFAULT;
                    if(!(verify !== oscar)) { _fun00014_ip = 1206; continue _fun00013 }
 1044:
                    oscar = _closure1_slot23;
                    oscar = oscar.STREAM;
                    if(!(verify === oscar)) { _fun00014_ip = 1397; continue _fun00013 }
 1061:
                    offset = _closure1_slot1;
                    romeo = _closure1_slot3;
                    oscar = 24;
                    verify = romeo[oscar];
                    verify = offset.bind(golf)(verify);
                    offset = verify.prototype;
                    offset = Object.create(offset, {constructor: {value: verify}});
                    config = offset;
                    sequence = true;
                    verify = new config[verify](sequence, vacuum);
                    verify = verify instanceof Object ? verify : offset;
                    entity['_goLiveQualityManager'] = verify;
                    sizing = entity._goLiveQualityManager;
                    kilo = sizing.on;
                    verify = _closure1_slot0;
                    offset = romeo[oscar];
                    offset = verify.bind(golf)(offset);
                    offset = offset.GoLiveQualityManagerEvent;
                    yankee = offset.RequestedSSRCsUpdate;
                    offset = function(argFoo, argBar, argBaz) {
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            entity = _closure3_slot0;
                            report = entity._connection;
                            entity = null;
                            if(!(entity != report)) { _fun00028_ip = 41; continue _fun00027 }
 19:
                            tango = report.createUser;
                            zulu = argFoo;
                            mike = argBar;
                            entity = argBaz;
                            entity = tango.bind(report)(zulu, mike, entity);
 41:
                            entity = undefined;
                            return entity;
                        }
                    };
                    offset = kilo.bind(sizing)(yankee, offset);
                    yankee = entity._goLiveQualityManager;
                    offset = yankee.on;
                    oscar = romeo[oscar];
                    oscar = verify.bind(golf)(oscar);
                    oscar = oscar.GoLiveQualityManagerEvent;
                    verify = oscar.RequestedStreamsUpdate;
                    oscar = function(argFoo) {
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            zulu = argFoo;
                            mike = _closure3_slot0;
                            tango = mike.state;
                            mike = _closure1_slot20;
                            mike = mike.RTC_CONNECTED;
                            mike = tango === mike;
                            if(!mike) { _fun00030_ip = 51; continue _fun00029 }
 35:
                            tango = _closure3_slot0;
                            report = tango._socket;
                            tango = null;
                            mike = tango != report;
 51:
                            if(!mike) { _fun00030_ip = 163; continue _fun00029 }
 54:
                            mike = _closure3_slot0;
                            report = mike.logger;
                            tango = report.info;
                            mike = global;
                            golf = mike.JSON;
                            oscar = golf.stringify;
                            golf = oscar.bind(golf)(zulu);
                            mike = mike.HermesInternal;
                            oscar = mike.concat;
                            mike = 'Go Live Media sink wants: ';
                            mike = oscar.bind(mike)(golf);
                            mike = tango.bind(report)(mike);
                            mike = _closure3_slot0;
                            tango = mike._socket;
                            mike = tango.mediaSinkWants;
                            mike = mike.bind(tango)(zulu);
                            entity = _closure3_slot0;
                            mike = entity._connection;
                            entity = null;
                            if(!(entity != mike)) { _fun00030_ip = 163; continue _fun00029 }
 152:
                            entity = mike.setLocalVideoSinkWants;
                            entity = entity.bind(mike)(zulu);
 163:
                            entity = undefined;
                            return entity;
                        }
                    };
                    oscar = offset.bind(yankee)(verify, oscar);
                    _fun00014_ip = 1397; continue _fun00013;
 1206:
                    offset = _closure1_slot12;
                    verify = offset.getChannel;
                    oscar = entity.channelId;
                    oscar = verify.bind(offset)(oscar);
                    verify = tango == oscar;
                    kilo = undefined;
                    if(verify) { _fun00014_ip = 1239; continue _fun00013 }
 1234:
                    kilo = oscar.type;
 1239:
                    oscar = _closure1_slot19;
                    verify = oscar.GUILD_STAGE_VOICE;
                    yankee = _closure1_slot1;
                    romeo = _closure1_slot3;
                    oscar = 23;
                    offset = romeo[oscar];
                    yankee = yankee.bind(golf)(offset);
                    offset = yankee.prototype;
                    offset = Object.create(offset, {constructor: {value: yankee}});
                    vacuum = kilo === verify;
                    config = offset;
                    sequence = backup;
                    control = foxtrot;
                    verify = new config[yankee](sequence, vacuum, control, source);
                    verify = verify instanceof Object ? verify : offset;
                    entity['_localMediaSinkWantsManager'] = verify;
                    backup = entity._localMediaSinkWantsManager;
                    foxtrot = backup.on;
                    verify = _closure1_slot0;
                    offset = romeo[oscar];
                    offset = verify.bind(golf)(offset);
                    offset = offset.RTCMediaSinkWantsManagerEvent;
                    yankee = offset.Update;
                    offset = function(argFoo) {
                        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                            zulu = argFoo;
                            mike = _closure3_slot0;
                            tango = mike.state;
                            mike = _closure1_slot20;
                            mike = mike.RTC_CONNECTED;
                            mike = tango === mike;
                            if(!mike) { _fun00032_ip = 51; continue _fun00031 }
 35:
                            tango = _closure3_slot0;
                            report = tango._socket;
                            tango = null;
                            mike = tango != report;
 51:
                            if(!mike) { _fun00032_ip = 163; continue _fun00031 }
 54:
                            mike = _closure3_slot0;
                            report = mike.logger;
                            tango = report.info;
                            mike = global;
                            golf = mike.JSON;
                            oscar = golf.stringify;
                            golf = oscar.bind(golf)(zulu);
                            mike = mike.HermesInternal;
                            oscar = mike.concat;
                            mike = 'Media sink wants: ';
                            mike = oscar.bind(mike)(golf);
                            mike = tango.bind(report)(mike);
                            mike = _closure3_slot0;
                            tango = mike._socket;
                            mike = tango.mediaSinkWants;
                            mike = mike.bind(tango)(zulu);
                            entity = _closure3_slot0;
                            mike = entity._connection;
                            entity = null;
                            if(!(entity != mike)) { _fun00032_ip = 163; continue _fun00031 }
 152:
                            entity = mike.setLocalVideoSinkWants;
                            entity = entity.bind(mike)(zulu);
 163:
                            entity = undefined;
                            return entity;
                        }
                    };
                    offset = foxtrot.bind(backup)(yankee, offset);
                    yankee = entity._localMediaSinkWantsManager;
                    offset = yankee.on;
                    oscar = romeo[oscar];
                    oscar = verify.bind(golf)(oscar);
                    oscar = oscar.RTCMediaSinkWantsManagerEvent;
                    verify = oscar.UserSSRCUpdate;
                    oscar = function(argFoo, argBar, argBaz) {
                        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                            entity = _closure3_slot0;
                            report = entity._connection;
                            entity = null;
                            if(!(entity != report)) { _fun00034_ip = 41; continue _fun00033 }
 19:
                            tango = report.createUser;
                            zulu = argFoo;
                            mike = argBar;
                            entity = argBaz;
                            entity = tango.bind(report)(zulu, mike, entity);
 41:
                            entity = undefined;
                            return entity;
                        }
                    };
                    oscar = offset.bind(yankee)(verify, oscar);
 1397:
                    verify = _closure1_slot0;
                    romeo = _closure1_slot3;
                    oscar = 23;
                    oscar = romeo[oscar];
                    oscar = verify.bind(golf)(oscar);
                    oscar = oscar.DEFAULT_WANTS_FULL;
                    entity['_remoteVideoSinkWants'] = oscar;
                    oscar = 25;
                    offset = romeo[oscar];
                    offset = verify.bind(golf)(offset);
                    backup = offset.WindowVisibilityVideoManager;
                    foxtrot = backup.on;
                    offset = romeo[oscar];
                    offset = verify.bind(golf)(offset);
                    offset = offset.WindowVisibilityEvent;
                    yankee = offset.IncomingVideoEnabledChanged;
                    offset = entity.incomingVideoEnabledChanged;
                    offset = foxtrot.bind(backup)(yankee, offset);
                    offset = romeo[oscar];
                    offset = verify.bind(golf)(offset);
                    yankee = offset.WindowVisibilityVideoManager;
                    offset = yankee.on;
                    oscar = romeo[oscar];
                    oscar = verify.bind(golf)(oscar);
                    oscar = oscar.WindowVisibilityEvent;
                    verify = oscar.WindowVisibilityChanged;
                    oscar = entity.windowVisibilityChanged;
                    oscar = offset.bind(yankee)(verify, oscar);
                    verify = _closure1_slot15;
                    oscar = verify.shouldRecordNextConnection;
                    oscar = oscar.bind(verify)();
                    if(oscar) { _fun00014_ip = 1565; continue _fun00013 }
 1557:
                    entity['_recordingEnabled'] = options;
                    _fun00014_ip = 1602; continue _fun00013;
 1565:
                    entity['_recordingEnabled'] = report;
                    oscar = _closure1_slot2;
                    verify = _closure1_slot3;
                    report = 26;
                    report = verify[report];
                    oscar = oscar.bind(golf)(report);
                    report = oscar.setShouldRecordNextConnection;
                    report = report.bind(oscar)(options);
 1602:
                    oscar = _closure1_slot1;
                    options = _closure1_slot3;
                    report = 27;
                    report = options[report];
                    report = oscar.bind(golf)(report);
                    verify = report.prototype;
                    verify = Object.create(verify, {constructor: {value: report}});
                    config = verify;
                    report = new config[report](sequence);
                    report = report instanceof Object ? report : verify;
                    entity['_soundshareStats'] = report;
                    report = 28;
                    verify = options[report];
                    yankee = oscar.bind(golf)(verify);
                    offset = yankee.addOnlineCallback;
                    verify = entity._handleNetworkOnline;
                    verify = offset.bind(yankee)(verify);
                    report = options[report];
                    verify = oscar.bind(golf)(report);
                    oscar = verify.addOfflineCallback;
                    report = entity._handleNetworkOffline;
                    report = oscar.bind(verify)(report);
                    oscar = _closure1_slot0;
                    report = 29;
                    report = options[report];
                    oscar = oscar.bind(golf)(report);
                    report = oscar.isDesktop;
                    report = report.bind(oscar)();
                    if(!report) { _fun00014_ip = 1786; continue _fun00013 }
 1732:
                    oscar = _closure1_slot1;
                    options = _closure1_slot3;
                    report = 30;
                    report = options[report];
                    report = oscar.bind(golf)(report);
                    options = report.remotePowerMonitor;
                    golf = options.on;
                    oscar = entity._handlePowerResume;
                    report = 'resume';
                    report = golf.bind(options)(report, oscar);
                    entity['powerMonitorListener'] = report;
 1786:
                    report = new Array(0);
                    entity['_supportedBandwidthEstimationExperiments'] = report;
                    entity['_bandwidthEstimationExperiment'] = tango;
                    tango = _closure1_slot13;
                    zulu = tango.getMediaEngine;
                    tango = zulu.bind(tango)();
                    zulu = tango.getSupportedBandwidthEstimationExperiments;
                    mike = function(argFoo) {
                        mike = _closure3_slot0;
                        entity = argFoo;
                        mike['_supportedBandwidthEstimationExperiments'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            var _closure2_slot0 = tango;
            report = _closure1_slot9;
            zulu = undefined;
            mike = argFoo;
            mike = report.bind(zulu)(tango, mike);
            mike = _closure1_slot6;
            report = {};
            entity = 'quality';
            report['key'] = entity;
            entity = function() { // Original name: get
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    entity = this;
                    mike = entity.getLastPing;
                    report = mike.bind(entity)();
                    tango = entity.state;
                    zulu = _closure1_slot20;
                    zulu = zulu.RTC_CONNECTED;
                    if(!(tango === zulu)) { _fun00036_ip = 142; continue _fun00035 }
 35:
                    zulu = undefined;
                    if(!(zulu !== report)) { _fun00036_ip = 142; continue _fun00035 }
 41:
                    zulu = 500;
                    if(!(!(report > zulu))) { _fun00036_ip = 130; continue _fun00035 }
 51:
                    zulu = entity._outboundLossRate;
                    tango = null;
                    if(!(tango != zulu)) { _fun00036_ip = 76; continue _fun00035 }
 63:
                    oscar = entity._outboundLossRate;
                    zulu = 10;
                    if(!(!(oscar > zulu))) { _fun00036_ip = 130; continue _fun00035 }
 76:
                    zulu = 250;
                    if(!(!(report > zulu))) { _fun00036_ip = 118; continue _fun00035 }
 83:
                    zulu = entity._outboundLossRate;
                    if(!(tango != zulu)) { _fun00036_ip = 106; continue _fun00035 }
 93:
                    zulu = entity._outboundLossRate;
                    entity = 5;
                    if(!(!(zulu > entity))) { _fun00036_ip = 118; continue _fun00035 }
 106:
                    entity = _closure1_slot21;
                    entity = entity.FINE;
                    _fun00036_ip = 128; continue _fun00035;
 118:
                    zulu = _closure1_slot21;
                    entity = zulu.AVERAGE;
 128:
                    _fun00036_ip = 140; continue _fun00035;
 130:
                    zulu = _closure1_slot21;
                    entity = zulu.BAD;
 140:
                    _fun00036_ip = 152; continue _fun00035;
 142:
                    mike = _closure1_slot21;
                    entity = mike.UNKNOWN;
 152:
                    return entity;
                }
            };
            report['get'] = entity;
            entity = new Array(90);
            entity[0] = report;
            report = {};
            golf = 'endpoint';
            report['key'] = golf;
            golf = function() { // Original name: get
                entity = this;
                entity = entity._endpoint;
                return entity;
            };
            report['get'] = golf;
            golf = function(argFoo) { // Original name: set
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    verify = argFoo;
                    mike = this;
                    entity = null;
                    if(!(entity != verify)) { _fun00038_ip = 203; continue _fun00037 }
 15:
                    report = _closure1_slot28;
                    tango = global;
                    zulu = tango.HermesInternal;
                    zulu = zulu.concat;
                    options = '';
                    golf = '//';
                    report = zulu.bind(options)(report, golf, verify);
                    verify = _closure1_slot1;
                    offset = _closure1_slot3;
                    zulu = 31;
                    zulu = offset[zulu];
                    yankee = undefined;
                    verify = verify.bind(yankee)(zulu);
                    zulu = verify.toURLSafe;
                    verify = zulu.bind(verify)(report);
                    if(!(entity == verify)) { _fun00038_ip = 91; continue _fun00037 }
 89:
                    verify = {};
 91:
                    zulu = verify.hostname;
                    offset = verify.port;
                    if(!(entity == offset)) { _fun00038_ip = 115; continue _fun00037 }
 107:
                    romeo = tango.NaN;
                    _fun00038_ip = 126; continue _fun00037;
 115:
                    verify = tango.parseInt;
                    romeo = verify.bind(yankee)(offset);
 126:
                    verify = entity == zulu;
                    if(verify) { _fun00038_ip = 156; continue _fun00037 }
 133:
                    offset = 80;
                    offset = offset !== romeo;
                    if(!offset) { _fun00038_ip = 153; continue _fun00037 }
 143:
                    yankee = 443;
                    offset = yankee !== romeo;
 153:
                    verify = offset;
 156:
                    if(verify) { _fun00038_ip = 181; continue _fun00037 }
 159:
                    oscar = _closure1_slot28;
                    tango = tango.HermesInternal;
                    tango = tango.concat;
                    report = tango.bind(options)(oscar, golf, zulu);
 181:
                    tango = '/';
                    tango = report + tango;
                    mike['_endpoint'] = tango;
                    mike['hostname'] = zulu;
                    _fun00038_ip = 215; continue _fun00037;
 203:
                    mike['_endpoint'] = entity;
                    mike['hostname'] = entity;
 215:
                    entity = undefined;
                    return entity;
                }
            };
            report['set'] = golf;
            entity[1] = report;
            report = {};
            golf = 'connect';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    report = argBar;
                    zulu = this;
                    entity = zulu._destroyed;
                    if(entity) { _fun00040_ip = 1746; continue _fun00039 }
 18:
                    mike = zulu._backoff;
                    entity = mike.cancel;
                    entity = entity.bind(mike)();
                    mike = zulu.endpoint;
                    tango = zulu.token;
                    entity = argFoo;
                    zulu['endpoint'] = entity;
                    zulu['token'] = report;
                    entity = zulu.endpoint;
                    entity = mike === entity;
                    if(!entity) { _fun00040_ip = 78; continue _fun00039 }
 74:
                    entity = tango === report;
 78:
                    if(entity) { _fun00040_ip = 185; continue _fun00039 }
 81:
                    entity = zulu._cleanupSocket;
                    entity = entity.bind(zulu)();
                    entity = null;
                    zulu['_mediaSessionId'] = entity;
                    if(!(entity != mike)) { _fun00040_ip = 185; continue _fun00039 }
 103:
                    oscar = _closure1_slot0;
                    report = _closure1_slot3;
                    mike = 22;
                    mike = report[mike];
                    tango = undefined;
                    oscar = oscar.bind(tango)(mike);
                    mike = oscar.v4;
                    mike = mike.bind(oscar)();
                    zulu['_rtcConnectionId'] = mike;
                    mike = _closure1_slot1;
                    entity = 32;
                    entity = report[entity];
                    tango = mike.bind(tango)(entity);
                    mike = tango.dispatch;
                    entity = {};
                    report = 'RTC_CONNECTION_UPDATE_ID';
                    entity['type'] = report;
                    entity['connection'] = zulu;
                    entity = mike.bind(tango)(entity);
 185:
                    mike = zulu.endpoint;
                    entity = null;
                    if(!(entity == mike)) { _fun00040_ip = 226; continue _fun00039 }
 197:
                    tango = zulu.setState;
                    mike = _closure1_slot20;
                    mike = mike.AWAITING_ENDPOINT;
                    mike = tango.bind(zulu)(mike);
                    _fun00040_ip = 1742; continue _fun00039;
 226:
                    mike = zulu._socket;
                    if(!(entity != mike)) { _fun00040_ip = 246; continue _fun00039 }
 236:
                    mike = zulu._cleanupSocket;
                    mike = mike.bind(zulu)();
 246:
                    options = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 33;
                    mike = golf[tango];
                    oscar = undefined;
                    offset = options.bind(oscar)(mike);
                    foxtrot = zulu.endpoint;
                    romeo = zulu.context;
                    options = offset.prototype;
                    options = Object.create(options, {constructor: {value: offset}});
                    backup = options;
                    mike = new backup[offset](foxtrot, romeo, yankee);
                    mike = mike instanceof Object ? mike : options;
                    zulu['_socket'] = mike;
                    offset = mike.on;
                    report = _closure1_slot0;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.Connecting;
                    yankee = zulu._handleConnecting;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu, mike);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.Connect;
                    yankee = zulu._handleConnect;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu, mike);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.Disconnect;
                    yankee = zulu._handleDisconnect;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu, mike);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.Resuming;
                    yankee = zulu._handleResuming;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu, mike);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.Ready;
                    yankee = zulu._handleReady;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu, mike);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.Speaking;
                    yankee = zulu._handleSpeaking;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu, mike);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.Video;
                    yankee = zulu._handleVideo;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu, mike);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.Ping;
                    yankee = zulu._handleControlPing;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.ClientDisconnect;
                    yankee = zulu._handleClientDisconnect;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.ClientConnect;
                    yankee = zulu._handleClientConnect;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.Codecs;
                    yankee = zulu._handleCodecs;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.MediaSessionId;
                    yankee = zulu._handleMediaSessionId;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.MediaSinkWants;
                    yankee = zulu._handleMediaSinkWants;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.VoiceBackendVersion;
                    yankee = zulu._handleCodeVersion;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.KeyframeInterval;
                    yankee = zulu._handleKeyframeInterval;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.Flags;
                    yankee = zulu.handleFlags;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.Platform;
                    yankee = zulu.handlePlatform;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.BandwidthEstimationExperiment;
                    yankee = zulu._handleBandwidthEstimationExperiment;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.SecureFramesInit;
                    yankee = zulu._handleSecureFramesInit;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.SecureFramesPrepareTransition;
                    yankee = zulu._handleSecureFramesPrepareTransition;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.SecureFramesPrepareEpoch;
                    yankee = zulu._handleSecureFramesPrepareEpoch;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.SecureFramesExecuteTransition;
                    yankee = zulu._handleSecureFramesExecuteTransition;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.MLSExternalSenderPackage;
                    yankee = zulu._handleMLSExternalSenderPackage;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.MLSProposals;
                    yankee = zulu._handleMLSProposals;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu, mike);
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(oscar)(options);
                    options = options.SocketEvent;
                    verify = options.MLSPrepareCommitTransition;
                    yankee = zulu._handleMLSPrepareCommitTransition;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    verify = mike.on;
                    tango = golf[tango];
                    tango = report.bind(oscar)(tango);
                    tango = tango.SocketEvent;
                    options = tango.MLSWelcome;
                    offset = zulu._handleMLSWelcome;
                    tango = offset.bind;
                    tango = tango.bind(offset)(zulu);
                    tango = verify.bind(mike)(options, tango);
                    tango = 16;
                    tango = golf[tango];
                    report = report.bind(oscar)(tango);
                    tango = report.now;
                    tango = tango.bind(report)();
                    zulu['_connectStartTime'] = tango;
                    tango = zulu._connectCount;
                    tango = tango + 1;
                    zulu['_connectCount'] = tango;
                    tango = true;
                    zulu['_connecting'] = tango;
                    entity = entity != mike;
                    if(!entity) { _fun00040_ip = 1711; continue _fun00039 }
 1701:
                    tango = zulu._socket;
                    entity = tango === mike;
 1711:
                    if(!entity) { _fun00040_ip = 1742; continue _fun00039 }
 1714:
                    entity = zulu._trackVoiceConnectionConnecting;
                    entity = entity.bind(zulu)();
                    entity = false;
                    zulu['_encountered_socket_failure'] = entity;
                    entity = mike.connect;
                    entity = entity.bind(mike)();
 1742:
                    entity = undefined;
                    return entity;
 1746:
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    foxtrot = 'RTCConnection.connect(...): Attempting to connect on destroyed instance.';
                    backup = mike;
                    entity = new backup[zulu](foxtrot, romeo);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            report['value'] = golf;
            entity[2] = report;
            report = {};
            golf = 'destroy';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    zulu = this;
                    tango = zulu.logger;
                    mike = tango.info;
                    entity = 'Destroy RTCConnection';
                    entity = mike.bind(tango)(entity);
                    report = _closure1_slot1;
                    oscar = _closure1_slot3;
                    tango = 28;
                    golf = oscar[tango];
                    entity = undefined;
                    verify = report.bind(entity)(golf);
                    options = verify.removeOnlineCallback;
                    golf = zulu._handleNetworkOnline;
                    golf = options.bind(verify)(golf);
                    tango = oscar[tango];
                    golf = report.bind(entity)(tango);
                    report = golf.removeOfflineCallback;
                    tango = zulu._handleNetworkOffline;
                    tango = report.bind(golf)(tango);
                    report = _closure1_slot0;
                    tango = 29;
                    tango = oscar[tango];
                    report = report.bind(entity)(tango);
                    tango = report.isDesktop;
                    tango = tango.bind(report)();
                    if(!tango) { _fun00042_ip = 144; continue _fun00041 }
 122:
                    report = zulu.powerMonitorListener;
                    tango = null;
                    if(!(tango != report)) { _fun00042_ip = 144; continue _fun00041 }
 134:
                    tango = report.call;
                    tango = tango.bind(report)(zulu);
 144:
                    tango = _closure1_slot0;
                    golf = _closure1_slot3;
                    mike = 25;
                    report = golf[mike];
                    report = tango.bind(entity)(report);
                    verify = report.WindowVisibilityVideoManager;
                    options = verify.off;
                    report = golf[mike];
                    report = tango.bind(entity)(report);
                    report = report.WindowVisibilityEvent;
                    oscar = report.IncomingVideoEnabledChanged;
                    report = zulu.incomingVideoEnabledChanged;
                    report = options.bind(verify)(oscar, report);
                    report = golf[mike];
                    report = tango.bind(entity)(report);
                    oscar = report.WindowVisibilityVideoManager;
                    report = oscar.off;
                    mike = golf[mike];
                    mike = tango.bind(entity)(mike);
                    mike = mike.WindowVisibilityEvent;
                    tango = mike.WindowVisibilityChanged;
                    mike = zulu.windowVisibilityChanged;
                    mike = report.bind(oscar)(tango, mike);
                    tango = zulu._backoff;
                    mike = tango.cancel;
                    mike = mike.bind(tango)();
                    mike = zulu._cleanupSocket;
                    mike = mike.bind(zulu)();
                    report = zulu._voiceQuality;
                    mike = null;
                    if(!(mike != report)) { _fun00042_ip = 311; continue _fun00041 }
 301:
                    tango = report.stop;
                    tango = tango.bind(report)();
 311:
                    zulu['_voiceQuality'] = mike;
                    tango = global;
                    report = tango.clearInterval;
                    tango = zulu._voiceQualityPeriodicStatsInterval;
                    tango = report.bind(entity)(tango);
                    zulu['_voiceQualityPeriodicStatsInterval'] = mike;
                    tango = 0;
                    zulu['_voiceQualityPeriodicStatsSequenceId'] = tango;
                    oscar = zulu._systemResponsiveness;
                    if(!(mike != oscar)) { _fun00042_ip = 370; continue _fun00041 }
 360:
                    report = oscar.stop;
                    report = report.bind(oscar)();
 370:
                    zulu['_systemResponsiveness'] = mike;
                    zulu['_noiseCancellationError'] = tango;
                    report = zulu._voiceDuration;
                    if(!(mike != report)) { _fun00042_ip = 402; continue _fun00041 }
 392:
                    tango = report.stop;
                    tango = tango.bind(report)();
 402:
                    zulu['_voiceDuration'] = mike;
                    report = zulu._videoQuality;
                    if(!(mike != report)) { _fun00042_ip = 428; continue _fun00041 }
 418:
                    tango = report.stop;
                    tango = tango.bind(report)();
 428:
                    zulu['_videoQuality'] = mike;
                    zulu['_videoHealthManager'] = mike;
                    zulu['_secureFramesState'] = mike;
                    report = zulu._localMediaSinkWantsManager;
                    if(!(mike != report)) { _fun00042_ip = 466; continue _fun00041 }
 456:
                    tango = report.reset;
                    tango = tango.bind(report)();
 466:
                    tango = zulu._connection;
                    if(!(mike != tango)) { _fun00042_ip = 498; continue _fun00041 }
 476:
                    tango = zulu._connection;
                    zulu['_connection'] = mike;
                    mike = tango.destroy;
                    mike = mike.bind(tango)();
 498:
                    mike = zulu.removeAllListeners;
                    mike = mike.bind(zulu)();
                    mike = true;
                    zulu['_destroyed'] = mike;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[3] = report;
            report = {};
            golf = 'shouldSendSpeaking';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    oscar = argFoo;
                    report = argBar;
                    tango = this;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot3;
                    entity = 29;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = mike.isWeb;
                    entity = entity.bind(mike)();
                    if(entity) { _fun00044_ip = 227; continue _fun00043 }
 50:
                    verify = _closure1_slot0;
                    offset = _closure1_slot3;
                    mike = 34;
                    entity = offset[mike];
                    romeo = verify.bind(zulu)(entity);
                    yankee = romeo.hasFlag;
                    entity = _closure1_slot27;
                    options = entity.PRIORITY;
                    options = yankee.bind(romeo)(oscar, options);
                    mike = offset[mike];
                    offset = verify.bind(zulu)(mike);
                    verify = offset.hasFlag;
                    mike = tango._lastSentSpeakingStatus;
                    entity = entity.PRIORITY;
                    mike = verify.bind(offset)(mike, entity);
                    entity = tango._lastSentSSRC;
                    entity = entity !== report;
                    if(entity) { _fun00044_ip = 142; continue _fun00043 }
 138:
                    entity = options !== mike;
 142:
                    if(!entity) { _fun00044_ip = 225; continue _fun00043 }
 145:
                    mike = tango._lastSentSSRC;
                    mike = zulu !== mike;
                    if(mike) { _fun00044_ip = 172; continue _fun00043 }
 158:
                    zulu = _closure1_slot27;
                    zulu = zulu.NONE;
                    mike = oscar !== zulu;
 172:
                    if(!mike) { _fun00044_ip = 222; continue _fun00043 }
 175:
                    zulu = tango._lastSentSSRC;
                    zulu = zulu === report;
                    if(zulu) { _fun00044_ip = 202; continue _fun00043 }
 188:
                    golf = _closure1_slot27;
                    golf = golf.NONE;
                    zulu = oscar !== golf;
 202:
                    if(!zulu) { _fun00044_ip = 219; continue _fun00043 }
 205:
                    tango['_lastSentSpeakingStatus'] = oscar;
                    tango['_lastSentSSRC'] = report;
                    zulu = true;
 219:
                    mike = zulu;
 222:
                    entity = mike;
 225:
                    return entity;
 227:
                    entity = true;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[4] = report;
            report = {};
            golf = 'sendSpeaking';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    report = argFoo;
                    tango = argBar;
                    mike = this;
                    zulu = mike._socket;
                    entity = null;
                    if(!(entity != zulu)) { _fun00046_ip = 70; continue _fun00045 }
 21:
                    entity = mike.shouldSendSpeaking;
                    entity = entity.bind(mike)(report, tango);
                    if(!entity) { _fun00046_ip = 70; continue _fun00045 }
 38:
                    mike = _closure1_slot13;
                    entity = mike.getPacketDelay;
                    mike = entity.bind(mike)();
                    entity = zulu.speaking;
                    entity = entity.bind(zulu)(report, mike, tango);
 70:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[5] = report;
            report = {};
            golf = 'sendVideo';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    oscar = argBar;
                    entity = this;
                    report = entity._socket;
                    mike = null;
                    if(!(mike != report)) { _fun00048_ip = 66; continue _fun00047 }
 18:
                    mike = 0;
                    if(!(mike !== oscar)) { _fun00048_ip = 32; continue _fun00047 }
 24:
                    mike = true;
                    entity['_sentVideo'] = mike;
 32:
                    entity = entity._sentVideo;
                    if(!entity) { _fun00048_ip = 66; continue _fun00047 }
 41:
                    tango = report.video;
                    offset = argFoo;
                    options = argBaz;
                    golf = argCorge;
                    yankee = report;
                    verify = oscar;
                    entity = yankee[tango](offset, verify, options, golf, oscar);
 66:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[6] = report;
            report = {};
            golf = 'getPings';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                entity = entity._pings;
                return entity;
            };
            report['value'] = golf;
            entity[7] = report;
            report = {};
            golf = 'getAveragePing';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    zulu = this;
                    tango = zulu._pings;
                    mike = tango.slice;
                    entity = global;
                    golf = entity.Math;
                    oscar = golf.min;
                    entity = zulu._pings;
                    report = entity.length;
                    entity = 20;
                    entity = oscar.bind(golf)(report, entity);
                    report = 0;
                    mike = mike.bind(tango)(report, entity);
                    tango = mike.length;
                    entity = 0;
                    if(!(report !== tango)) { _fun00050_ip = 111; continue _fun00049 }
 66:
                    tango = zulu._socket;
                    zulu = null;
                    zulu = zulu == tango;
                    entity = 0;
                    if(zulu) { _fun00050_ip = 111; continue _fun00049 }
 83:
                    tango = mike.reduce;
                    zulu = function(argFoo, argBar) {
                        entity = argBar;
                        mike = entity.value;
                        entity = argFoo;
                        entity = entity + mike;
                        return entity;
                    };
                    zulu = tango.bind(mike)(zulu, report);
                    mike = mike.length;
                    entity = zulu / mike;
 111:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[8] = report;
            report = {};
            golf = 'getLastPing';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    entity = this;
                    mike = entity._pings;
                    entity = entity._pings;
                    zulu = entity.length;
                    entity = 1;
                    entity = zulu - entity;
                    mike = mike[entity];
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun00052_ip = 47; continue _fun00051 }
 42:
                    entity = mike.value;
 47:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[9] = report;
            report = {};
            golf = 'getOutboundLossRate';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                entity = entity._outboundLossRate;
                return entity;
            };
            report['value'] = golf;
            entity[10] = report;
            report = {};
            golf = 'getMediaSessionId';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                entity = entity._mediaSessionId;
                return entity;
            };
            report['value'] = golf;
            entity[11] = report;
            report = {};
            golf = 'getVoiceParticipantType';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = undefined;
                return entity;
            };
            report['value'] = golf;
            entity[12] = report;
            report = {};
            golf = 'getRTCConnectionId';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                entity = entity._rtcConnectionId;
                return entity;
            };
            report['value'] = golf;
            entity[13] = report;
            report = {};
            golf = 'getVoiceVersion';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                entity = entity.voiceVersion;
                return entity;
            };
            report['value'] = golf;
            entity[14] = report;
            report = {};
            golf = 'getRtcWorkerVersion';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                entity = entity.rtcWorkerVersion;
                return entity;
            };
            report['value'] = golf;
            entity[15] = report;
            report = {};
            golf = 'getDuration';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                    zulu = this;
                    mike = zulu._connectCompletedTime;
                    entity = 0;
                    tango = mike > entity;
                    mike = 0;
                    if(!tango) { _fun00054_ip = 64; continue _fun00053 }
 20:
                    oscar = _closure1_slot0;
                    report = _closure1_slot3;
                    tango = 16;
                    report = report[tango];
                    tango = undefined;
                    report = oscar.bind(tango)(report);
                    tango = report.now;
                    tango = tango.bind(report)();
                    zulu = zulu._connectCompletedTime;
                    mike = tango - zulu;
 64:
                    entity = 0;
                    if(!(mike > entity)) { _fun00054_ip = 73; continue _fun00053 }
 70:
                    entity = mike;
 73:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[16] = report;
            report = {};
            golf = 'getPacketStats';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                    entity = this;
                    zulu = entity._voiceQuality;
                    entity = null;
                    mike = entity == zulu;
                    entity = undefined;
                    if(mike) { _fun00056_ip = 30; continue _fun00055 }
 20:
                    mike = zulu.getPacketStats;
                    entity = mike.bind(zulu)();
 30:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[17] = report;
            report = {};
            golf = 'getCreatedTime';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                entity = entity._createdTime;
                return entity;
            };
            report['value'] = golf;
            entity[18] = report;
            report = {};
            golf = 'getSecureFramesState';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                entity = entity._secureFramesState;
                return entity;
            };
            report['value'] = golf;
            entity[19] = report;
            report = {};
            golf = 'getSecureFramesRosterMap';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                entity = entity._secureFramesRosterMap;
                return entity;
            };
            report['value'] = golf;
            entity[20] = report;
            report = {};
            golf = 'getUserIds';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                entity = entity._userIds;
                return entity;
            };
            report['value'] = golf;
            entity[21] = report;
            report = {};
            golf = 'getIsUserConnected';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                entity = this;
                zulu = entity._userIds;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report['value'] = golf;
            entity[22] = report;
            report = {};
            golf = 'getVideoHealthManager';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                entity = entity._videoHealthManager;
                return entity;
            };
            report['value'] = golf;
            entity[23] = report;
            report = {};
            golf = 'getBandwidthEstimationExperiment';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                entity = entity._bandwidthEstimationExperiment;
                return entity;
            };
            report['value'] = golf;
            entity[24] = report;
            report = {};
            golf = 'pauseStatsCollectionForUser';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                    zulu = argFoo;
                    entity = this;
                    mike = entity.getOrCreateVideoQuality;
                    mike = mike.bind(entity)();
                    tango = null;
                    if(!(tango == mike)) { _fun00058_ip = 45; continue _fun00057 }
 22:
                    report = entity.logger;
                    tango = report.error;
                    entity = 'pauseStatsCollectionForUser: Unable to create videoQuality.';
                    entity = tango.bind(report)(entity);
                    _fun00058_ip = 79; continue _fun00057;
 45:
                    entity = argBar;
                    if(entity) { _fun00058_ip = 66; continue _fun00057 }
 51:
                    entity = mike.removeUserFromStatsCollectionPausedSet;
                    entity = entity.bind(mike)(zulu);
                    _fun00058_ip = 79; continue _fun00057;
 66:
                    entity = mike.addUserToStatsCollectionPausedSet;
                    entity = entity.bind(mike)(zulu);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[25] = report;
            report = {};
            golf = 'setState';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    golf = argFoo;
                    oscar = arguments[1];
                    report = this;
                    entity = undefined;
                    if(!(oscar === entity)) { _fun00060_ip = 17; continue _fun00059 }
 15:
                    oscar = {};
 17:
                    tango = report.logger;
                    zulu = tango.info;
                    offset = report.state;
                    mike = global;
                    mike = mike.HermesInternal;
                    verify = mike.concat;
                    options = 'RTC connection state: ';
                    mike = ' => ';
                    mike = verify.bind(options)(offset, mike, golf);
                    mike = zulu.bind(tango)(mike);
                    report['state'] = golf;
                    tango = report.stateHistory;
                    zulu = tango.update;
                    mike = report.state;
                    mike = zulu.bind(tango)(mike);
                    tango = report.emit;
                    zulu = _closure1_slot0;
                    options = _closure1_slot3;
                    mike = 35;
                    mike = options[mike];
                    mike = zulu.bind(entity)(mike);
                    mike = mike.RTCConnectionEvent;
                    backup = mike.State;
                    mike = {};
                    options = report.hostname;
                    mike['hostname'] = options;
                    options = report.trueChannelId;
                    mike['channelId'] = options;
                    options = report.context;
                    mike['context'] = options;
                    kilo = report;
                    foxtrot = golf;
                    romeo = mike;
                    yankee = oscar;
                    mike = kilo[tango](backup, foxtrot, romeo, yankee, offset);
                    return entity;
                }
            };
            report['value'] = golf;
            entity[26] = report;
            report = {};
            golf = 'expeditedHeartbeat';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                    options = arguments[1];
                    golf = arguments[2];
                    mike = this;
                    entity = undefined;
                    if(!(options === entity)) { _fun00062_ip = 19; continue _fun00061 }
 15:
                    options = '';
 19:
                    if(!(golf === entity)) { _fun00062_ip = 25; continue _fun00061 }
 23:
                    golf = true;
 25:
                    oscar = mike._socket;
                    zulu = null;
                    zulu = zulu != oscar;
                    if(!zulu) { _fun00062_ip = 56; continue _fun00061 }
 40:
                    report = oscar.expeditedHeartbeat;
                    tango = argFoo;
                    zulu = report.bind(oscar)(tango, options, golf);
 56:
                    if(!zulu) { _fun00062_ip = 75; continue _fun00061 }
 59:
                    zulu = mike._backoff;
                    mike = zulu.cancel;
                    mike = mike.bind(zulu)();
 75:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[27] = report;
            report = {};
            golf = 'resetBackoff';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                    oscar = arguments[0];
                    mike = this;
                    entity = undefined;
                    if(!(oscar === entity)) { _fun00064_ip = 16; continue _fun00063 }
 12:
                    oscar = '';
 16:
                    report = mike._socket;
                    zulu = null;
                    zulu = zulu != report;
                    if(!zulu) { _fun00064_ip = 42; continue _fun00063 }
 31:
                    tango = report.resetBackoff;
                    zulu = tango.bind(report)(oscar);
 42:
                    if(!zulu) { _fun00064_ip = 61; continue _fun00063 }
 45:
                    zulu = mike._backoff;
                    mike = zulu.cancel;
                    mike = mike.bind(zulu)();
 61:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[28] = report;
            report = {};
            golf = 'setSelectedParticipant';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                    entity = this;
                    zulu = entity._localMediaSinkWantsManager;
                    entity = null;
                    if(!(entity != zulu)) { _fun00066_ip = 29; continue _fun00065 }
 15:
                    mike = zulu.setSelectedParticipant;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
 29:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[29] = report;
            report = {};
            golf = 'setPipOpen';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                    entity = this;
                    zulu = entity._localMediaSinkWantsManager;
                    entity = null;
                    if(!(entity != zulu)) { _fun00068_ip = 29; continue _fun00067 }
 15:
                    mike = zulu.setPipOpen;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
 29:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[30] = report;
            report = {};
            golf = 'setClipRecordUser';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                    entity = this;
                    report = entity._connection;
                    zulu = null;
                    entity = zulu == report;
                    if(entity) { _fun00070_ip = 28; continue _fun00069 }
 18:
                    mike = report.setClipRecordUser;
                    entity = zulu == mike;
 28:
                    if(entity) { _fun00070_ip = 53; continue _fun00069 }
 31:
                    tango = report.setClipRecordUser;
                    zulu = argFoo;
                    mike = argBar;
                    entity = argBaz;
                    entity = tango.bind(report)(zulu, mike, entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[31] = report;
            report = {};
            golf = 'setSimulcastDebugOverride';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                    zulu = argBar;
                    tango = argBaz;
                    entity = this;
                    mike = entity.context;
                    if(!(zulu === mike)) { _fun00072_ip = 87; continue _fun00071 }
 18:
                    mike = _closure1_slot23;
                    mike = mike.DEFAULT;
                    if(!(zulu !== mike)) { _fun00072_ip = 60; continue _fun00071 }
 35:
                    zulu = entity._goLiveQualityManager;
                    mike = null;
                    if(!(mike != zulu)) { _fun00072_ip = 87; continue _fun00071 }
 47:
                    mike = zulu.setSimulcastDebugOverride;
                    mike = mike.bind(zulu)(tango);
                    _fun00072_ip = 87; continue _fun00071;
 60:
                    zulu = entity._localMediaSinkWantsManager;
                    entity = null;
                    if(!(entity != zulu)) { _fun00072_ip = 87; continue _fun00071 }
 72:
                    mike = zulu.setSimulcastDebugOverride;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity, tango);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[32] = report;
            report = {};
            golf = 'setVideoSize';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                    report = argFoo;
                    tango = argBar;
                    zulu = argBaz;
                    mike = this;
                    options = mike._localMediaSinkWantsManager;
                    entity = null;
                    if(!(entity != options)) { _fun00074_ip = 40; continue _fun00073 }
 24:
                    golf = options.setVideoSize;
                    oscar = tango * zulu;
                    oscar = golf.bind(options)(report, oscar);
 40:
                    mike = mike._goLiveQualityManager;
                    if(!(entity != mike)) { _fun00074_ip = 63; continue _fun00073 }
 50:
                    entity = mike.setVideoSize;
                    entity = entity.bind(mike)(report, tango, zulu);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[33] = report;
            report = {};
            golf = 'channelId';
            report['key'] = golf;
            golf = function() { // Original name: get
                entity = this;
                entity = entity._channelId;
                return entity;
            };
            report['get'] = golf;
            golf = function(argFoo) { // Original name: set
                zulu = argFoo;
                entity = this;
                entity['_channelId'] = zulu;
                mike = entity.channelIds;
                entity = mike.add;
                entity = entity.bind(mike)(zulu);
                entity = undefined;
                return entity;
            };
            report['set'] = golf;
            entity[34] = report;
            report = {};
            golf = 'trueChannelId';
            report['key'] = golf;
            golf = function() { // Original name: get
                _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                    mike = this;
                    zulu = mike.rtcServerId;
                    entity = null;
                    if(!(entity == zulu)) { _fun00076_ip = 22; continue _fun00075 }
 15:
                    entity = mike.channelId;
                    _fun00076_ip = 77; continue _fun00075;
 22:
                    report = _closure1_slot1;
                    tango = _closure1_slot3;
                    zulu = 36;
                    zulu = tango[zulu];
                    tango = undefined;
                    zulu = report.bind(tango)(zulu);
                    mike = mike.rtcServerId;
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.prev;
                    zulu = mike.bind(zulu)();
                    mike = zulu.toString;
                    entity = mike.bind(zulu)();
 77:
                    return entity;
                }
            };
            report['get'] = golf;
            entity[35] = report;
            report = {};
            golf = '_cleanupSocket';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                    mike = this;
                    tango = mike._socket;
                    entity = null;
                    if(!(entity != tango)) { _fun00078_ip = 41; continue _fun00077 }
 15:
                    zulu = tango.close;
                    zulu = zulu.bind(tango)();
                    zulu = tango.removeAllListeners;
                    zulu = zulu.bind(tango)();
                    mike['_socket'] = entity;
 41:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[36] = report;
            report = {};
            golf = '_chooseExperiments';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                    mike = this;
                    entity = new Array(0);
                    zulu = mike._recordingEnabled;
                    if(!zulu) { _fun00080_ip = 32; continue _fun00079 }
 16:
                    tango = entity.push;
                    zulu = 'connection_log';
                    zulu = tango.bind(entity)(zulu);
 32:
                    tango = mike.guildId;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00080_ip = 157; continue _fun00079 }
 43:
                    oscar = _closure1_slot1;
                    report = _closure1_slot3;
                    tango = 37;
                    report = report[tango];
                    tango = undefined;
                    golf = oscar.bind(tango)(report);
                    oscar = golf.getCurrentConfig;
                    report = {};
                    tango = mike.guildId;
                    report['guildId'] = tango;
                    tango = 'handleReady';
                    report['location'] = tango;
                    tango = {};
                    options = true;
                    tango['autoTrackExposure'] = options;
                    tango = oscar.bind(golf)(report, tango);
                    report = tango.shouldOverrideKrisp;
                    tango = tango.overrideKrispSetting;
                    if(!report) { _fun00080_ip = 157; continue _fun00079 }
 125:
                    report = entity.push;
                    if(tango) { _fun00080_ip = 146; continue _fun00079 }
 133:
                    tango = 'force_krisp_disabled';
                    tango = report.bind(entity)(tango);
                    _fun00080_ip = 157; continue _fun00079;
 146:
                    tango = 'force_krisp_enabled';
                    tango = report.bind(entity)(tango);
 157:
                    golf = _closure1_slot13;
                    oscar = golf.supports;
                    report = _closure1_slot22;
                    report = report.FIXED_KEYFRAME_INTERVAL;
                    report = oscar.bind(golf)(report);
                    if(!report) { _fun00080_ip = 204; continue _fun00079 }
 188:
                    oscar = entity.push;
                    report = 'fixed_keyframe_interval';
                    report = oscar.bind(entity)(report);
 204:
                    report = mike._supportedBandwidthEstimationExperiments;
                    oscar = report.length;
                    report = 0;
                    if(!(report !== oscar)) { _fun00080_ip = 267; continue _fun00079 }
 221:
                    oscar = _closure1_slot1;
                    report = _closure1_slot3;
                    tango = 38;
                    report = report[tango];
                    tango = undefined;
                    report = oscar.bind(tango)(report);
                    tango = report.workerExperimentString;
                    tango = tango.bind(report)();
                    if(!(zulu != tango)) { _fun00080_ip = 267; continue _fun00079 }
 257:
                    zulu = entity.push;
                    zulu = zulu.bind(entity)(tango);
 267:
                    mike['_selectedExperiments'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[37] = report;
            report = {};
            golf = '_handleConnecting';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                    zulu = this;
                    mike = zulu.endpoint;
                    entity = null;
                    if(!(entity != mike)) { _fun00082_ip = 79; continue _fun00081 }
 15:
                    tango = zulu.logger;
                    mike = tango.info;
                    options = zulu.endpoint;
                    entity = zulu.getRTCConnectionId;
                    golf = entity.bind(zulu)();
                    entity = global;
                    entity = entity.HermesInternal;
                    oscar = entity.concat;
                    report = 'Connecting to RTC server ';
                    entity = ', rtc-connection-id: ';
                    entity = oscar.bind(report)(options, entity, golf);
                    entity = mike.bind(tango)(entity);
 79:
                    mike = zulu.setState;
                    entity = _closure1_slot20;
                    entity = entity.CONNECTING;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[38] = report;
            report = {};
            golf = '_handleConnect';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                    report = argFoo;
                    zulu = this;
                    entity = zulu.token;
                    golf = null;
                    if(!(golf != entity)) { _fun00084_ip = 210; continue _fun00083 }
 21:
                    oscar = zulu.logger;
                    tango = oscar.info;
                    mike = 'Connected to RTC server.';
                    mike = tango.bind(oscar)(mike);
                    tango = report.identify;
                    mike = {};
                    oscar = zulu.rtcServerId;
                    if(!(golf == oscar)) { _fun00084_ip = 66; continue _fun00083 }
 61:
                    oscar = zulu.guildId;
 66:
                    if(!(golf == oscar)) { _fun00084_ip = 75; continue _fun00083 }
 70:
                    oscar = zulu.channelId;
 75:
                    mike['serverId'] = oscar;
                    oscar = zulu.userId;
                    mike['userId'] = oscar;
                    oscar = zulu.sessionId;
                    mike['sessionId'] = oscar;
                    mike['token'] = entity;
                    options = _closure1_slot13;
                    golf = options.getSupportedSecureFramesProtocolVersion;
                    oscar = zulu.guildId;
                    oscar = golf.bind(options)(oscar);
                    mike['maxDaveProtocolVersion'] = oscar;
                    golf = options.supports;
                    oscar = _closure1_slot22;
                    oscar = oscar.VIDEO;
                    oscar = golf.bind(options)(oscar);
                    mike['video'] = oscar;
                    golf = options.getVideoStreamParameters;
                    oscar = zulu.context;
                    oscar = golf.bind(options)(oscar);
                    mike['streamParameters'] = oscar;
                    mike = tango.bind(report)(mike);
                    mike = zulu.setState;
                    entity = _closure1_slot20;
                    entity = entity.AUTHENTICATING;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
 210:
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    verify = 'RTCConnection._handleConnect(...): Token is missing.';
                    offset = mike;
                    entity = new offset[zulu](verify, options);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            report['value'] = golf;
            entity[39] = report;
            report = {};
            golf = '_handleDisconnect';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
                _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                    mike = argBar;
                    verify = argBaz;
                    sizing = argCorge;
                    report = this;
                    var _closure3_slot0 = report;
                    var _closure3_slot1 = sizing;
                    golf = report.logger;
                    oscar = golf.info;
                    result = report.state;
                    tango = global;
                    zulu = tango.HermesInternal;
                    romeo = zulu.concat;
                    config = 'Disconnected from RTC server, clean: ';
                    vacuum = ', code: ';
                    source = ', reason: ';
                    echo = ', state: ';
                    sequence = mike;
                    control = verify;
                    update = sizing;
                    zulu = config[romeo](sequence, vacuum, control, source, update, echo, result, output);
                    zulu = oscar.bind(golf)(zulu);
                    if(mike) { _fun00086_ip = 105; continue _fun00085 }
 96:
                    zulu = report._connecting;
                    mike = !zulu;
 105:
                    if(mike) { _fun00086_ip = 114; continue _fun00085 }
 108:
                    mike = report._encountered_socket_failure;
 114:
                    if(mike) { _fun00086_ip = 243; continue _fun00085 }
 120:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot3;
                    zulu = 18;
                    oscar = oscar[zulu];
                    zulu = undefined;
                    golf = golf.bind(zulu)(oscar);
                    oscar = golf.track;
                    mike = _closure1_slot18;
                    zulu = mike.VOICE_CONNECTION_SOCKET_FAILURE;
                    mike = {};
                    options = report._getAnalyticsProperties;
                    vacuum = options.bind(report)();
                    sequence = mike;
                    options = copyDataProperties(sequence, vacuum);
                    offset = report.hostname;
                    options = 'hostname';
                    mike[options] = offset;
                    offset = report._connectCount;
                    options = 'connect_count';
                    mike[options] = offset;
                    options = 'code';
                    mike[options] = verify;
                    options = 'reason';
                    mike[options] = sizing;
                    mike = oscar.bind(golf)(zulu, mike);
                    mike = true;
                    report['_encountered_socket_failure'] = mike;
 243:
                    oscar = _closure1_slot14;
                    zulu = oscar.getRemoteDisconnectVoiceChannelId;
                    oscar = zulu.bind(oscar)();
                    zulu = report.channelId;
                    if(!(oscar === zulu)) { _fun00086_ip = 293; continue _fun00085 }
 271:
                    oscar = report._connection;
                    zulu = null;
                    if(!(zulu != oscar)) { _fun00086_ip = 293; continue _fun00085 }
 283:
                    zulu = oscar.wasRemoteDisconnected;
                    zulu = zulu.bind(oscar)();
 293:
                    zulu = 'Force Close';
                    oscar = zulu !== sizing;
                    if(!oscar) { _fun00086_ip = 404; continue _fun00085 }
 306:
                    options = report._backoff;
                    golf = options.fail;
                    zulu = report.reconnect;
                    verify = golf.bind(options)(zulu);
                    options = report.logger;
                    golf = options.warn;
                    zulu = 1000;
                    offset = verify / zulu;
                    verify = offset.toFixed;
                    zulu = 2;
                    control = verify.bind(offset)(zulu);
                    zulu = tango.HermesInternal;
                    yankee = zulu.concat;
                    config = 'Disconnect was not clean! reason=';
                    vacuum = '. Reconnecting in ';
                    source = ' seconds.';
                    sequence = sizing;
                    zulu = config[yankee](sequence, vacuum, control, source, update);
                    zulu = golf.bind(options)(zulu);
 404:
                    golf = report.state;
                    zulu = _closure1_slot20;
                    zulu = zulu.DISCONNECTED;
                    if(!(golf !== zulu)) { _fun00086_ip = 1924; continue _fun00085 }
 426:
                    golf = report._videoQuality;
                    var _closure3_slot2 = golf;
                    foxtrot = null;
                    if(!(foxtrot != golf)) { _fun00086_ip = 530; continue _fun00085 }
 442:
                    options = report.context;
                    zulu = _closure1_slot23;
                    zulu = zulu.DEFAULT;
                    if(!(options === zulu)) { _fun00086_ip = 530; continue _fun00085 }
 461:
                    zulu = golf.stop;
                    zulu = zulu.bind(golf)();
                    zulu = report._sentVideo;
                    if(!zulu) { _fun00086_ip = 505; continue _fun00085 }
 480:
                    zulu = golf.getOutboundStats;
                    verify = zulu.bind(golf)();
                    options = verify.forEach;
                    zulu = function(argFoo) {
                        _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
                            offset = argFoo;
                            zulu = offset.num_frames;
                            entity = null;
                            tango = entity != zulu;
                            mike = 0;
                            entity = 0;
                            if(!tango) { _fun00088_ip = 25; continue _fun00087 }
 22:
                            entity = zulu;
 25:
                            if(!(entity > mike)) { _fun00088_ip = 346; continue _fun00087 }
 32:
                            golf = _closure1_slot1;
                            options = _closure1_slot3;
                            entity = 18;
                            entity = options[entity];
                            oscar = undefined;
                            tango = golf.bind(oscar)(entity);
                            zulu = tango.track;
                            entity = _closure1_slot18;
                            mike = entity.VIDEO_STREAM_ENDED;
                            entity = {};
                            report = _closure3_slot0;
                            romeo = report._getAnalyticsProperties;
                            sizing = romeo.bind(report)();
                            output = entity;
                            romeo = copyDataProperties(output, sizing);
                            romeo = report.getMediaSessionId;
                            foxtrot = romeo.bind(report)();
                            romeo = 'media_session_id';
                            entity[romeo] = foxtrot;
                            foxtrot = report.userId;
                            romeo = 'sender_user_id';
                            entity[romeo] = foxtrot;
                            foxtrot = _closure3_slot1;
                            romeo = 'reason';
                            entity[romeo] = foxtrot;
                            romeo = 'sender';
                            foxtrot = 'participant_type';
                            entity[foxtrot] = romeo;
                            kilo = _closure1_slot16;
                            backup = kilo.getRegion;
                            foxtrot = report.hostname;
                            backup = backup.bind(kilo)(foxtrot);
                            foxtrot = 'guild_region';
                            entity[foxtrot] = backup;
                            backup = report.hostname;
                            foxtrot = 'hostname';
                            entity[foxtrot] = backup;
                            foxtrot = _closure1_slot13;
                            yankee = foxtrot.getHardwareEncoding;
                            foxtrot = yankee.bind(foxtrot)();
                            yankee = 'hardware_enabled';
                            entity[yankee] = foxtrot;
                            output = entity;
                            sizing = offset;
                            offset = copyDataProperties(output, sizing);
                            yankee = _closure3_slot2;
                            offset = yankee.getNetworkStats;
                            sizing = offset.bind(yankee)();
                            output = entity;
                            offset = copyDataProperties(output, sizing);
                            yankee = _closure3_slot2;
                            offset = yankee.getCodecUsageStats;
                            verify = report.userId;
                            sizing = offset.bind(yankee)(romeo, verify);
                            output = entity;
                            verify = copyDataProperties(output, sizing);
                            verify = report._soundshareStats;
                            report = verify.getStats;
                            sizing = report.bind(verify)();
                            output = entity;
                            report = copyDataProperties(output, sizing);
                            report = 39;
                            report = options[report];
                            report = golf.bind(oscar)(report);
                            oscar = report.bind(oscar)();
                            report = 'device_performance_class';
                            entity[report] = oscar;
                            entity = zulu.bind(tango)(mike, entity);
 346:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zulu = options.bind(verify)(zulu);
 505:
                    zulu = golf.getInboundParticipants;
                    options = zulu.bind(golf)();
                    golf = options.forEach;
                    zulu = function(argFoo) {
                        _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
                            verify = argFoo;
                            mike = _closure3_slot2;
                            entity = mike.getInboundStats;
                            golf = entity.bind(mike)(verify);
                            mike = null;
                            zulu = mike == golf;
                            entity = undefined;
                            tango = undefined;
                            if(zulu) { _fun00090_ip = 40; continue _fun00089 }
 34:
                            tango = golf.num_frames;
 40:
                            report = mike != tango;
                            zulu = 0;
                            mike = 0;
                            if(!report) { _fun00090_ip = 54; continue _fun00089 }
 51:
                            mike = tango;
 54:
                            if(!(mike > zulu)) { _fun00090_ip = 310; continue _fun00089 }
 61:
                            zulu = _closure1_slot1;
                            tango = _closure1_slot3;
                            mike = 18;
                            mike = tango[mike];
                            report = zulu.bind(entity)(mike);
                            tango = report.track;
                            mike = _closure1_slot18;
                            zulu = mike.VIDEO_STREAM_ENDED;
                            mike = {};
                            yankee = _closure3_slot0;
                            options = yankee._getAnalyticsProperties;
                            kilo = options.bind(yankee)();
                            sizing = mike;
                            options = copyDataProperties(sizing, kilo);
                            options = yankee.getMediaSessionId;
                            romeo = options.bind(yankee)();
                            options = 'media_session_id';
                            mike[options] = romeo;
                            options = 'sender_user_id';
                            mike[options] = verify;
                            romeo = _closure3_slot1;
                            options = 'reason';
                            mike[options] = romeo;
                            options = 'receiver';
                            romeo = 'participant_type';
                            mike[romeo] = options;
                            backup = _closure1_slot16;
                            foxtrot = backup.getRegion;
                            romeo = yankee.hostname;
                            foxtrot = foxtrot.bind(backup)(romeo);
                            romeo = 'guild_region';
                            mike[romeo] = foxtrot;
                            romeo = yankee.hostname;
                            yankee = 'hostname';
                            mike[yankee] = romeo;
                            yankee = _closure1_slot13;
                            offset = yankee.getHardwareEncoding;
                            yankee = offset.bind(yankee)();
                            offset = 'hardware_enabled';
                            mike[offset] = yankee;
                            sizing = mike;
                            kilo = golf;
                            golf = copyDataProperties(sizing, kilo);
                            offset = _closure3_slot2;
                            golf = offset.getNetworkStats;
                            kilo = golf.bind(offset)();
                            sizing = mike;
                            golf = copyDataProperties(sizing, kilo);
                            golf = _closure3_slot2;
                            oscar = golf.getCodecUsageStats;
                            kilo = oscar.bind(golf)(options, verify);
                            sizing = mike;
                            oscar = copyDataProperties(sizing, kilo);
                            mike = tango.bind(report)(zulu, mike);
 310:
                            return entity;
                        }
                    };
                    zulu = golf.bind(options)(zulu);
 530:
                    golf = _closure1_slot16;
                    zulu = golf.shouldIncludePreferredRegion;
                    zulu = zulu.bind(golf)();
                    backup = null;
                    if(!zulu) { _fun00086_ip = 563; continue _fun00085 }
 549:
                    golf = _closure1_slot16;
                    zulu = golf.getPreferredRegion;
                    backup = zulu.bind(golf)();
 563:
                    golf = _closure1_slot13;
                    zulu = golf.getSettings;
                    yankee = zulu.bind(golf)();
                    options = _closure1_slot12;
                    golf = options.getChannel;
                    zulu = report.channelId;
                    romeo = golf.bind(options)(zulu);
                    options = _closure1_slot1;
                    golf = _closure1_slot3;
                    zulu = 18;
                    zulu = golf[zulu];
                    golf = undefined;
                    offset = options.bind(golf)(zulu);
                    verify = offset.track;
                    zulu = _closure1_slot18;
                    options = zulu.VOICE_DISCONNECT;
                    zulu = {};
                    kilo = report._getAnalyticsProperties;
                    vacuum = kilo.bind(report)();
                    sequence = zulu;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report.hostname;
                    kilo = 'hostname';
                    zulu[kilo] = output;
                    output = report.port;
                    kilo = 'port';
                    zulu[kilo] = output;
                    output = report.protocol;
                    kilo = 'protocol';
                    zulu[kilo] = output;
                    kilo = 'reconnect';
                    zulu[kilo] = oscar;
                    kilo = 'reason';
                    zulu[kilo] = sizing;
                    kilo = report.getDuration;
                    sizing = kilo.bind(report)();
                    kilo = 'duration';
                    zulu[kilo] = sizing;
                    output = report._voiceQuality;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 761; continue _fun00085 }
 749:
                    sizing = output.getMosStats;
                    kilo = sizing.bind(output)();
 761:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report._voiceQuality;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 796; continue _fun00085 }
 786:
                    sizing = output.getPacketStats;
                    kilo = sizing.bind(output)();
 796:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report._voiceQuality;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 833; continue _fun00085 }
 821:
                    sizing = output.getBytesStats;
                    kilo = sizing.bind(output)();
 833:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report._voiceQuality;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 870; continue _fun00085 }
 858:
                    sizing = output.getBufferStats;
                    kilo = sizing.bind(output)();
 870:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report._voiceQuality;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 905; continue _fun00085 }
 895:
                    sizing = output.getNetworkStats;
                    kilo = sizing.bind(output)();
 905:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report._voiceQuality;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 942; continue _fun00085 }
 930:
                    sizing = output.getSystemResourceStats;
                    kilo = sizing.bind(output)();
 942:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report._voiceQuality;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 979; continue _fun00085 }
 967:
                    sizing = output.getFrameOpStats;
                    kilo = sizing.bind(output)();
 979:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report._voiceQuality;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 1014; continue _fun00085 }
 1004:
                    sizing = output.getDurationStats;
                    kilo = sizing.bind(output)();
 1014:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report._voiceQuality;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 1051; continue _fun00085 }
 1039:
                    sizing = output.getTransportStats;
                    kilo = sizing.bind(output)();
 1051:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report._voiceQuality;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 1088; continue _fun00085 }
 1076:
                    sizing = output.getE2EEStats;
                    kilo = sizing.bind(output)();
 1088:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report._voiceQuality;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 1125; continue _fun00085 }
 1113:
                    sizing = output.getAudioDeviceStats;
                    kilo = sizing.bind(output)();
 1125:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report._voiceDuration;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 1160; continue _fun00085 }
 1150:
                    sizing = output.getDurationStats;
                    kilo = sizing.bind(output)();
 1160:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    kilo = report.getAudioDeviceStates;
                    vacuum = kilo.bind(report)();
                    sequence = zulu;
                    kilo = copyDataProperties(sequence, vacuum);
                    output = report._systemResponsiveness;
                    sizing = foxtrot == output;
                    kilo = undefined;
                    if(sizing) { _fun00086_ip = 1214; continue _fun00085 }
 1202:
                    sizing = output.getPttQueueLatencyStats;
                    kilo = sizing.bind(output)();
 1214:
                    sequence = zulu;
                    vacuum = kilo;
                    kilo = copyDataProperties(sequence, vacuum);
                    kilo = report.getMediaSessionId;
                    sizing = kilo.bind(report)();
                    kilo = 'media_session_id';
                    zulu[kilo] = sizing;
                    sizing = foxtrot != romeo;
                    kilo = null;
                    if(!sizing) { _fun00086_ip = 1258; continue _fun00085 }
 1252:
                    kilo = romeo.bitrate;
 1258:
                    romeo = 'channel_bitrate';
                    zulu[romeo] = kilo;
                    romeo = 'cloudflare_best_region';
                    zulu[romeo] = backup;
                    backup = report._connectCount;
                    romeo = 'connect_count';
                    zulu[romeo] = backup;
                    kilo = tango.Math;
                    backup = kilo.round;
                    romeo = report.getAveragePing;
                    romeo = romeo.bind(report)();
                    backup = backup.bind(kilo)(romeo);
                    romeo = 'ping_average';
                    zulu[romeo] = backup;
                    backup = report._pingBadCount;
                    romeo = 'ping_bad_count';
                    zulu[romeo] = backup;
                    romeo = report._pingTimeouts;
                    backup = romeo.length;
                    romeo = 'ping_timeout';
                    zulu[romeo] = backup;
                    backup = report._inputDetected;
                    romeo = 'input_detected';
                    zulu[romeo] = backup;
                    backup = _closure1_slot13;
                    romeo = backup.getNoInputDetectedNotice;
                    backup = romeo.bind(backup)();
                    romeo = 'no_input_detected_notice';
                    zulu[romeo] = backup;
                    backup = yankee.mode;
                    romeo = 'audio_input_mode';
                    zulu[romeo] = backup;
                    romeo = yankee.modeOptions;
                    backup = romeo.autoThreshold;
                    romeo = 'automatic_audio_input_sensitivity_enabled';
                    zulu[romeo] = backup;
                    romeo = yankee.modeOptions;
                    backup = romeo.threshold;
                    romeo = 'audio_input_sensitivity';
                    zulu[romeo] = backup;
                    backup = yankee.echoCancellation;
                    romeo = 'echo_cancellation_enabled';
                    zulu[romeo] = backup;
                    backup = yankee.sidechainCompression;
                    romeo = 'sidechain_compression_enabled';
                    zulu[romeo] = backup;
                    backup = yankee.noiseSuppression;
                    romeo = 'noise_suppression_enabled';
                    zulu[romeo] = backup;
                    backup = yankee.noiseCancellation;
                    romeo = 'noise_cancellation_enabled';
                    zulu[romeo] = backup;
                    backup = report._noiseCancellationError;
                    romeo = 'noise_canceller_error';
                    zulu[romeo] = backup;
                    backup = yankee.automaticGainControl;
                    romeo = 'automatic_gain_control_enabled';
                    zulu[romeo] = backup;
                    backup = yankee.outputVolume;
                    romeo = 'voice_output_volume';
                    zulu[romeo] = backup;
                    backup = report._encryptionMode;
                    romeo = 'encryption_mode';
                    zulu[romeo] = backup;
                    romeo = report.channelIds;
                    backup = romeo.size;
                    romeo = 'channel_count';
                    zulu[romeo] = backup;
                    backup = _closure1_slot1;
                    kilo = _closure1_slot3;
                    romeo = 39;
                    romeo = kilo[romeo];
                    romeo = backup.bind(golf)(romeo);
                    backup = romeo.bind(golf)();
                    romeo = 'device_performance_class';
                    zulu[romeo] = backup;
                    romeo = report._connection;
                    backup = foxtrot != romeo;
                    romeo = null;
                    if(!backup) { _fun00086_ip = 1713; continue _fun00085 }
 1683:
                    backup = report._connection;
                    foxtrot = foxtrot == backup;
                    golf = undefined;
                    if(foxtrot) { _fun00086_ip = 1710; continue _fun00085 }
 1698:
                    foxtrot = backup.getNumFastUdpReconnects;
                    golf = foxtrot.bind(backup)();
 1710:
                    romeo = golf;
 1713:
                    golf = 'num_fast_udp_reconnects';
                    zulu[golf] = romeo;
                    romeo = report.parentMediaSessionId;
                    golf = 'parent_media_session_id';
                    zulu[golf] = romeo;
                    golf = _closure1_slot13;
                    romeo = golf.getMediaEngine;
                    foxtrot = romeo.bind(golf)();
                    romeo = foxtrot.getAudioSubsystem;
                    foxtrot = romeo.bind(foxtrot)();
                    romeo = 'audio_subsystem';
                    zulu[romeo] = foxtrot;
                    romeo = golf.getMediaEngine;
                    foxtrot = romeo.bind(golf)();
                    romeo = foxtrot.getAudioLayer;
                    foxtrot = romeo.bind(foxtrot)();
                    romeo = 'audio_layer';
                    zulu[romeo] = foxtrot;
                    romeo = yankee.automaticAudioSubsystem;
                    yankee = 'automatic_audio_subsystem';
                    zulu[yankee] = romeo;
                    yankee = report.getVoiceParticipantType;
                    romeo = yankee.bind(report)();
                    yankee = 'participant_type';
                    zulu[yankee] = romeo;
                    zulu = verify.bind(offset)(options, zulu);
                    zulu = report.getMediaSessionId;
                    zulu = zulu.bind(report)();
                    var _closure3_slot3 = zulu;
                    zulu = golf.getMediaEngine;
                    golf = zulu.bind(golf)();
                    zulu = golf.getCodecSurvey;
                    options = zulu.bind(golf)();
                    golf = options.then;
                    zulu = function(argFoo) {
                        _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
                            entity = global;
                            tango = entity.JSON;
                            zulu = tango.parse;
                            mike = argFoo;
                            golf = zulu.bind(tango)(mike);
                            zulu = null;
                            if(!(zulu != golf)) { _fun00092_ip = 154; continue _fun00091 }
 31:
                            mike = golf.available_video_encoders;
                            if(!(zulu != mike)) { _fun00092_ip = 154; continue _fun00091 }
 43:
                            mike = golf.available_video_decoders;
                            if(!(zulu != mike)) { _fun00092_ip = 154; continue _fun00091 }
 55:
                            report = _closure1_slot1;
                            tango = _closure1_slot3;
                            mike = 18;
                            tango = tango[mike];
                            mike = undefined;
                            oscar = report.bind(mike)(tango);
                            report = oscar.track;
                            zulu = _closure1_slot18;
                            tango = zulu.VOICE_CODEC_DETECTED;
                            zulu = {};
                            yankee = zulu;
                            offset = golf;
                            golf = copyDataProperties(yankee, offset);
                            verify = _closure3_slot0;
                            options = verify.getRTCConnectionId;
                            verify = options.bind(verify)();
                            options = 'rtc_connection_id';
                            zulu[options] = verify;
                            options = _closure3_slot3;
                            golf = 'media_session_id';
                            zulu[golf] = options;
                            zulu = report.bind(oscar)(tango, zulu);
                            return mike;
 154:
                            zulu = entity.Error;
                            entity = zulu.prototype;
                            mike = Object.create(entity, {constructor: {value: zulu}});
                            yankee = 'codec survey is not available';
                            romeo = mike;
                            entity = new romeo[zulu](yankee, offset);
                            entity = entity instanceof Object ? entity : mike;
                            throw entity;
                        }
                    };
                    golf = golf.bind(options)(zulu);
                    zulu = golf.catch;
                    entity = function(argFoo) {
                        entity = _closure3_slot0;
                        zulu = entity.logger;
                        mike = zulu.warn;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    entity = zulu.bind(golf)(entity);
                    entity = report._trackMLSFailures;
                    entity = entity.bind(report)();
 1924:
                    entity = new Array(0);
                    report['_pingTimeouts'] = entity;
                    entity = new Array(0);
                    report['_pings'] = entity;
                    golf = 0;
                    report['_connectCompletedTime'] = golf;
                    report['_pingBadCount'] = golf;
                    entity = false;
                    report['_inputDetected'] = entity;
                    zulu = null;
                    report['_mediaSessionId'] = zulu;
                    options = report._voiceQuality;
                    if(!(zulu != options)) { _fun00086_ip = 1994; continue _fun00085 }
 1984:
                    entity = options.stop;
                    entity = entity.bind(options)();
 1994:
                    report['_voiceQuality'] = zulu;
                    verify = tango.clearInterval;
                    options = report._voiceQualityPeriodicStatsInterval;
                    entity = undefined;
                    options = verify.bind(entity)(options);
                    report['_voiceQualityPeriodicStatsInterval'] = zulu;
                    report['_voiceQualityPeriodicStatsSequenceId'] = golf;
                    report['_noiseCancellationError'] = golf;
                    options = report._voiceDuration;
                    if(!(zulu != options)) { _fun00086_ip = 2057; continue _fun00085 }
 2047:
                    golf = options.stop;
                    golf = golf.bind(options)();
 2057:
                    report['_voiceDuration'] = zulu;
                    options = report._videoQuality;
                    if(!(zulu != options)) { _fun00086_ip = 2083; continue _fun00085 }
 2073:
                    golf = options.stop;
                    golf = golf.bind(options)();
 2083:
                    report['_videoQuality'] = zulu;
                    report['_videoHealthManager'] = zulu;
                    options = report._localMediaSinkWantsManager;
                    if(!(zulu != options)) { _fun00086_ip = 2115; continue _fun00085 }
 2105:
                    golf = options.reset;
                    golf = golf.bind(options)();
 2115:
                    report['_secureFramesState'] = zulu;
                    options = tango.Set;
                    golf = report.userId;
                    tango = new Array(1);
                    tango[0] = golf;
                    golf = options.prototype;
                    golf = Object.create(golf, {constructor: {value: options}});
                    config = golf;
                    sequence = tango;
                    tango = new config[options](sequence, vacuum);
                    tango = tango instanceof Object ? tango : golf;
                    report['_userIds'] = tango;
                    golf = report._secureFramesRosterMap;
                    tango = golf.clear;
                    tango = tango.bind(golf)();
                    tango = report._connection;
                    if(!(zulu != tango)) { _fun00086_ip = 2217; continue _fun00085 }
 2195:
                    tango = report._connection;
                    report['_connection'] = zulu;
                    zulu = tango.destroy;
                    zulu = zulu.bind(tango)();
 2217:
                    tango = report.setState;
                    mike = _closure1_slot20;
                    zulu = mike.DISCONNECTED;
                    mike = {};
                    mike['willReconnect'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                }
            };
            report['value'] = golf;
            entity[40] = report;
            report = {};
            golf = '_handleResuming';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
                    mike = this;
                    tango = mike._connection;
                    entity = null;
                    if(!(entity != tango)) { _fun00094_ip = 25; continue _fun00093 }
 15:
                    zulu = tango.fastUdpReconnect;
                    zulu = zulu.bind(tango)();
 25:
                    mike = mike._connection;
                    if(!(entity != mike)) { _fun00094_ip = 47; continue _fun00093 }
 35:
                    entity = mike.clearAllSpeaking;
                    entity = entity.bind(mike)();
 47:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[41] = report;
            report = {};
            golf = '_handleReady';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) { // Original name: value
                _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                    sizing = argBar;
                    kilo = argBaz;
                    output = argGrault;
                    yankee = argFred;
                    mike = argPlugh;
                    zulu = this;
                    var _closure3_slot0 = zulu;
                    entity = argFoo;
                    var _closure3_slot1 = entity;
                    var _closure3_slot2 = sizing;
                    var _closure3_slot3 = kilo;
                    tango = zulu.setState;
                    entity = _closure1_slot20;
                    entity = entity.RTC_CONNECTING;
                    entity = tango.bind(zulu)(entity);
                    zulu['port'] = kilo;
                    golf = null;
                    if(!(golf != mike)) { _fun00096_ip = 88; continue _fun00095 }
 75:
                    entity = zulu._chooseExperiments;
                    entity = entity.bind(zulu)(mike);
 88:
                    entity = yankee.length;
                    report = 0;
                    if(!(report === entity)) { _fun00096_ip = 165; continue _fun00095 }
 99:
                    mike = yankee.push;
                    entity = {'type': null, 'rid': '100', 'ssrc': null, 'rtxSsrc': null, 'quality': 100, 'active': false};
                    tango = _closure1_slot26;
                    tango = tango.VIDEO;
                    entity['type'] = tango;
                    tango = 1;
                    tango = output + tango;
                    entity['ssrc'] = tango;
                    tango = 2;
                    tango = output + tango;
                    entity['rtxSsrc'] = tango;
                    entity = mike.bind(yankee)(entity);
 165:
                    mike = _closure1_slot13;
                    entity = mike.getMediaEngine;
                    romeo = entity.bind(mike)();
                    mike = _closure1_slot10;
                    entity = mike.getPersistentCodesEnabled;
                    backup = entity.bind(mike)();
                    mike = _closure1_slot11;
                    entity = mike.getStaticAuthSessionId;
                    mike = entity.bind(mike)();
                    tango = golf != mike;
                    entity = undefined;
                    foxtrot = undefined;
                    if(!tango) { _fun00096_ip = 221; continue _fun00095 }
 218:
                    foxtrot = mike;
 221:
                    offset = romeo.connect;
                    verify = zulu.context;
                    tango = zulu.userId;
                    mike = {};
                    mike['ssrc'] = output;
                    mike['address'] = sizing;
                    mike['port'] = kilo;
                    kilo = argCorge;
                    mike['modes'] = kilo;
                    kilo = zulu._selectedExperiments;
                    mike['experiments'] = kilo;
                    mike['streamParameters'] = yankee;
                    kilo = _closure1_slot13;
                    yankee = kilo.getQoS;
                    yankee = yankee.bind(kilo)();
                    mike['qosEnabled'] = yankee;
                    yankee = undefined;
                    if(!backup) { _fun00096_ip = 307; continue _fun00095 }
 304:
                    yankee = foxtrot;
 307:
                    mike['signingKeyId'] = yankee;
                    yankee = zulu._getExtraConnectionOptions;
                    echo = yankee.bind(zulu)();
                    update = mike;
                    yankee = copyDataProperties(update, echo);
                    mike = offset.bind(romeo)(verify, tango, mike);
                    var _closure3_slot4 = mike;
                    offset = mike.setUseElectronVideo;
                    yankee = romeo.supports;
                    tango = _closure1_slot22;
                    verify = tango.ELECTRON_VIDEO;
                    verify = yankee.bind(romeo)(verify);
                    verify = offset.bind(mike)(verify);
                    offset = _closure1_slot13;
                    verify = offset.supports;
                    tango = tango.IMAGE_QUALITY_MEASUREMENT;
                    tango = verify.bind(offset)(tango);
                    if(!tango) { _fun00096_ip = 421; continue _fun00095 }
 402:
                    verify = mike.setVideoQualityMeasurement;
                    tango = 'imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec';
                    tango = verify.bind(mike)(tango);
 421:
                    tango = global;
                    offset = tango.Array;
                    tango = offset.prototype;
                    verify = Object.create(tango, {constructor: {value: offset}});
                    update = 'unk';
                    source = verify;
                    tango = new source[offset](update, echo);
                    verify = tango instanceof Object ? tango : verify;
                    yankee = _closure1_slot13;
                    offset = yankee.supports;
                    tango = _closure1_slot22;
                    tango = tango.AMD_EXPERIMENTAL_RATE_CONTROL;
                    tango = offset.bind(yankee)(tango);
                    if(!tango) { _fun00096_ip = 499; continue _fun00095 }
 483:
                    offset = verify.push;
                    tango = 'amdRelaxRc';
                    tango = offset.bind(verify)(tango);
 499:
                    offset = zulu.context;
                    tango = _closure1_slot23;
                    tango = tango.STREAM;
                    if(!(offset === tango)) { _fun00096_ip = 762; continue _fun00095 }
 521:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot3;
                    tango = 40;
                    tango = yankee[tango];
                    backup = offset.bind(entity)(tango);
                    foxtrot = backup.getCurrentConfig;
                    romeo = {};
                    tango = 'handleReady';
                    romeo['location'] = tango;
                    offset = {};
                    yankee = true;
                    offset['autoTrackExposure'] = yankee;
                    offset = foxtrot.bind(backup)(romeo, offset);
                    romeo = offset.nvMediumVbvSizeMs;
                    if(!(romeo > report)) { _fun00096_ip = 674; continue _fun00095 }
 584:
                    offset = verify.push;
                    report = 'nvRelaxRc=';
                    report = report + romeo;
                    report = offset.bind(verify)(report);
                    offset = _closure1_slot1;
                    romeo = _closure1_slot3;
                    report = 41;
                    report = romeo[report];
                    foxtrot = offset.bind(entity)(report);
                    romeo = foxtrot.getCurrentConfig;
                    offset = {};
                    offset['location'] = tango;
                    report = {};
                    report['autoTrackExposure'] = yankee;
                    report = romeo.bind(foxtrot)(offset, report);
                    report = report.nvEnableNewPresets;
                    if(!report) { _fun00096_ip = 674; continue _fun00095 }
 658:
                    offset = verify.push;
                    report = 'nvNewPresets';
                    report = offset.bind(verify)(report);
 674:
                    report = zulu.guildId;
                    if(!(golf != report)) { _fun00096_ip = 762; continue _fun00095 }
 683:
                    golf = _closure1_slot1;
                    offset = _closure1_slot3;
                    report = 42;
                    report = offset[report];
                    offset = golf.bind(entity)(report);
                    golf = offset.getCurrentConfig;
                    report = {};
                    romeo = zulu.guildId;
                    report['guildId'] = romeo;
                    report['location'] = tango;
                    tango = {};
                    tango['autoTrackExposure'] = yankee;
                    tango = golf.bind(offset)(report, tango);
                    tango = tango.enableAdaptiveKeyFrame;
                    if(!tango) { _fun00096_ip = 762; continue _fun00095 }
 746:
                    report = verify.push;
                    tango = 'nvencAdaptiveIDR';
                    tango = report.bind(verify)(tango);
 762:
                    report = mike.setVideoEncoderExperiments;
                    golf = verify.join;
                    tango = ',';
                    tango = golf.bind(verify)(tango);
                    tango = report.bind(mike)(tango);
                    yankee = mike.on;
                    report = _closure1_slot0;
                    golf = _closure1_slot3;
                    tango = 43;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.Speaking;
                    verify = function(argFoo, argBar, argBaz) {
                        _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
                            oscar = argFoo;
                            report = argBar;
                            mike = _closure3_slot0;
                            mike = mike.userId;
                            if(!(mike === oscar)) { _fun00098_ip = 43; continue _fun00097 }
 22:
                            tango = _closure3_slot0;
                            zulu = tango.sendSpeaking;
                            mike = argBaz;
                            mike = zulu.bind(tango)(report, mike);
 43:
                            tango = _closure3_slot0;
                            zulu = tango.emit;
                            golf = _closure1_slot0;
                            mike = _closure1_slot3;
                            entity = 35;
                            mike = mike[entity];
                            entity = undefined;
                            mike = golf.bind(entity)(mike);
                            mike = mike.RTCConnectionEvent;
                            mike = mike.Speaking;
                            mike = zulu.bind(tango)(mike, oscar, report);
                            return entity;
                        }
                    };
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.ToggleMuteFromNative;
                    verify = function() {
                        _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
                            entity = _closure3_slot0;
                            zulu = entity.context;
                            mike = _closure1_slot23;
                            mike = mike.DEFAULT;
                            if(!(zulu === mike)) { _fun00100_ip = 71; continue _fun00099 }
 29:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot3;
                            entity = 44;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.toggleSelfMute;
                            entity = {};
                            tango = false;
                            entity['playSoundEffect'] = tango;
                            entity = mike.bind(zulu)(entity);
 71:
                            entity = undefined;
                            return entity;
                        }
                    };
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.NativeMuteChanged;
                    verify = function(argFoo) {
                        _fun00101: for(var _fun00102_ip = 0; ; ) switch(_fun00102_ip) {
 0:
                            entity = _closure3_slot0;
                            zulu = entity.context;
                            mike = _closure1_slot23;
                            mike = mike.DEFAULT;
                            if(!(zulu === mike)) { _fun00102_ip = 65; continue _fun00101 }
 29:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot3;
                            entity = 45;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.nativeMuteChanged;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
 65:
                            entity = undefined;
                            return entity;
                        }
                    };
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.Video;
                    verify = function(argFoo, argBar, argBaz, argCorge, argGrault, argFred) {
                        _fun00103: for(var _fun00104_ip = 0; ; ) switch(_fun00104_ip) {
 0:
                            golf = argFoo;
                            tango = argBaz;
                            offset = argCorge;
                            verify = argGrault;
                            zulu = argFred;
                            var _closure4_slot0 = golf;
                            romeo = _closure3_slot0;
                            yankee = romeo._handleVideoStreamId;
                            oscar = {};
                            oscar['userId'] = golf;
                            mike = argBar;
                            oscar['streamId'] = mike;
                            oscar['audioSsrc'] = tango;
                            mike = null;
                            backup = mike != offset;
                            foxtrot = 0;
                            if(!backup) { _fun00104_ip = 71; continue _fun00103 }
 68:
                            foxtrot = offset;
 71:
                            oscar['videoSsrc'] = foxtrot;
                            oscar['rtxSsrc'] = verify;
                            oscar['videoStreamParameters'] = zulu;
                            oscar = yankee.bind(romeo)(oscar);
                            oscar = _closure3_slot0;
                            oscar = oscar.userId;
                            if(!(oscar === golf)) { _fun00104_ip = 190; continue _fun00103 }
 104:
                            golf = _closure3_slot0;
                            oscar = golf.sendVideo;
                            yankee = mike != tango;
                            report = 0;
                            if(!yankee) { _fun00104_ip = 128; continue _fun00103 }
 125:
                            report = tango;
 128:
                            yankee = mike != offset;
                            tango = 0;
                            if(!yankee) { _fun00104_ip = 140; continue _fun00103 }
 137:
                            tango = offset;
 140:
                            offset = mike != verify;
                            options = 0;
                            if(!offset) { _fun00104_ip = 152; continue _fun00103 }
 149:
                            options = verify;
 152:
                            echo = golf;
                            result = report;
                            output = tango;
                            sizing = options;
                            kilo = zulu;
                            tango = echo[oscar](result, output, sizing, kilo, backup);
                            if(!(mike != zulu)) { _fun00104_ip = 190; continue _fun00103 }
 175:
                            mike = zulu.forEach;
                            entity = function(argFoo) {
                                _fun00105: for(var _fun00106_ip = 0; ; ) switch(_fun00106_ip) {
 0:
                                    entity = argFoo;
                                    zulu = entity.quality;
                                    mike = 100;
                                    if(!(mike === zulu)) { _fun00106_ip = 107; continue _fun00105 }
 16:
                                    verify = _closure3_slot0;
                                    options = verify.emit;
                                    tango = _closure1_slot0;
                                    zulu = _closure1_slot3;
                                    mike = 35;
                                    zulu = zulu[mike];
                                    mike = undefined;
                                    mike = tango.bind(mike)(zulu);
                                    mike = mike.RTCConnectionEvent;
                                    sizing = mike.VideoSourceQualityChanged;
                                    kilo = verify.guildId;
                                    backup = verify.channelId;
                                    foxtrot = _closure4_slot0;
                                    romeo = entity.maxResolution;
                                    yankee = entity.maxFrameRate;
                                    offset = verify.context;
                                    output = verify;
                                    entity = output[options](sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify);
 107:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity = mike.bind(zulu)(entity);
 190:
                            entity = undefined;
                            return entity;
                        }
                    };
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.FirstFrame;
                    verify = function(argFoo, argBar, argBaz) {
                        _fun00107: for(var _fun00108_ip = 0; ; ) switch(_fun00108_ip) {
 0:
                            options = argFoo;
                            zulu = argBar;
                            golf = argBaz;
                            mike = _closure3_slot0;
                            mike = mike._localMediaSinkWantsManager;
                            tango = null;
                            if(!(tango != mike)) { _fun00108_ip = 121; continue _fun00107 }
 28:
                            yankee = _closure3_slot0;
                            report = yankee._localMediaSinkWantsManager;
                            mike = report.setFirstFrameReceived;
                            mike = mike.bind(report)(zulu);
                            offset = yankee.emit;
                            oscar = _closure1_slot0;
                            report = _closure1_slot3;
                            mike = 35;
                            report = report[mike];
                            mike = undefined;
                            mike = oscar.bind(mike)(report);
                            mike = mike.RTCConnectionEvent;
                            output = mike.Video;
                            sizing = yankee.guildId;
                            kilo = yankee.channelId;
                            romeo = yankee.rtcServerId;
                            result = yankee;
                            backup = options;
                            foxtrot = golf;
                            mike = result[offset](output, sizing, kilo, backup, foxtrot, romeo, yankee);
 121:
                            mike = _closure3_slot0;
                            mike = mike._goLiveQualityManager;
                            if(!(tango != mike)) { _fun00108_ip = 228; continue _fun00107 }
 135:
                            oscar = _closure3_slot0;
                            mike = oscar._goLiveQualityManager;
                            entity = mike.setFirstFrameReceived;
                            entity = entity.bind(mike)(zulu);
                            report = oscar.emit;
                            zulu = _closure1_slot0;
                            mike = _closure1_slot3;
                            entity = 35;
                            mike = mike[entity];
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
                            entity = entity.RTCConnectionEvent;
                            output = entity.Video;
                            sizing = oscar.guildId;
                            kilo = oscar.channelId;
                            romeo = oscar.rtcServerId;
                            result = oscar;
                            backup = options;
                            foxtrot = golf;
                            entity = result[report](output, sizing, kilo, backup, foxtrot, romeo, yankee);
 228:
                            entity = undefined;
                            return entity;
                        }
                    };
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.Silence;
                    verify = function(argFoo) {
                        _fun00109: for(var _fun00110_ip = 0; ; ) switch(_fun00110_ip) {
 0:
                            mike = _closure3_slot0;
                            entity = mike._inputDetected;
                            if(entity) { _fun00110_ip = 22; continue _fun00109 }
 16:
                            zulu = argFoo;
                            entity = !zulu;
 22:
                            mike['_inputDetected'] = entity;
                            entity = undefined;
                            return entity;
                        }
                    };
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.Connected;
                    verify = function(argFoo, argBar) {
                        _fun00111: for(var _fun00112_ip = 0; ; ) switch(_fun00112_ip) {
 0:
                            golf = argFoo;
                            oscar = argBar;
                            mike = _closure3_slot0;
                            report = mike.logger;
                            tango = report.info;
                            romeo = _closure3_slot2;
                            yankee = _closure3_slot3;
                            offset = global;
                            zulu = offset.HermesInternal;
                            verify = zulu.concat;
                            options = 'RTC connected to media server: ';
                            zulu = ':';
                            zulu = verify.bind(options)(romeo, zulu, yankee);
                            zulu = tango.bind(report)(zulu);
                            zulu = _closure3_slot1;
                            mike = mike._socket;
                            if(!(zulu !== mike)) { _fun00112_ip = 111; continue _fun00111 }
 81:
                            mike = _closure3_slot0;
                            tango = mike.logger;
                            zulu = tango.warn;
                            mike = 'Socket mismatch, disconnecting';
                            mike = zulu.bind(tango)(mike);
                            _fun00112_ip = 687; continue _fun00111;
 111:
                            mike = _closure3_slot0;
                            report = _closure1_slot1;
                            options = _closure1_slot3;
                            tango = 46;
                            tango = options[tango];
                            verify = undefined;
                            romeo = report.bind(verify)(tango);
                            sizing = _closure3_slot4;
                            yankee = romeo.prototype;
                            yankee = Object.create(yankee, {constructor: {value: romeo}});
                            output = yankee;
                            tango = new output[romeo](sizing, kilo);
                            tango = tango instanceof Object ? tango : yankee;
                            mike['_voiceQuality'] = tango;
                            yankee = mike._voiceQuality;
                            tango = yankee.start;
                            tango = tango.bind(yankee)();
                            tango = 0;
                            mike['_voiceQualityPeriodicStatsSequenceId'] = tango;
                            romeo = offset.setInterval;
                            yankee = mike._handleVoiceQualityPeriodicsStats;
                            offset = 300000;
                            offset = romeo.bind(verify)(yankee, offset);
                            mike['_voiceQualityPeriodicStatsInterval'] = offset;
                            offset = 47;
                            offset = options[offset];
                            romeo = report.bind(verify)(offset);
                            sizing = _closure3_slot4;
                            yankee = romeo.prototype;
                            yankee = Object.create(yankee, {constructor: {value: romeo}});
                            output = yankee;
                            offset = new output[romeo](sizing, kilo);
                            offset = offset instanceof Object ? offset : yankee;
                            mike['_systemResponsiveness'] = offset;
                            yankee = mike._systemResponsiveness;
                            offset = yankee.start;
                            offset = offset.bind(yankee)();
                            mike['_noiseCancellationError'] = tango;
                            tango = 48;
                            tango = options[tango];
                            offset = report.bind(verify)(tango);
                            sizing = mike.userId;
                            kilo = _closure3_slot4;
                            report = offset.prototype;
                            report = Object.create(report, {constructor: {value: offset}});
                            output = report;
                            tango = new output[offset](sizing, kilo, backup);
                            tango = tango instanceof Object ? tango : report;
                            mike['_voiceDuration'] = tango;
                            options = mike._voiceDuration;
                            report = options.start;
                            offset = _closure3_slot4;
                            tango = offset.getSelfMute;
                            tango = tango.bind(offset)();
                            tango = report.bind(options)(tango);
                            mike['protocol'] = golf;
                            mike = 'udp';
                            if(!(mike !== golf)) { _fun00112_ip = 543; continue _fun00111 }
 384:
                            mike = 'webrtc';
                            if(!(mike !== golf)) { _fun00112_ip = 423; continue _fun00111 }
 394:
                            mike = _closure3_slot0;
                            report = mike.logger;
                            tango = report.error;
                            mike = 'Unable to determine protocol.';
                            mike = tango.bind(report)(mike);
                            mike = undefined;
                            return mike;
 423:
                            options = _closure3_slot0;
                            report = options.logger;
                            tango = report.info;
                            mike = 'Sending local SDP to RTC server.';
                            mike = tango.bind(report)(mike);
                            report = _closure3_slot1;
                            offset = report.once;
                            tango = _closure1_slot0;
                            yankee = _closure1_slot3;
                            mike = 33;
                            mike = yankee[mike];
                            mike = tango.bind(verify)(mike);
                            mike = mike.SocketEvent;
                            tango = mike.SDP;
                            yankee = options._handleSDP;
                            mike = yankee.bind;
                            mike = mike.bind(yankee)(options);
                            mike = offset.bind(report)(tango, mike);
                            tango = report.selectProtocol;
                            mike = options.getRTCConnectionId;
                            mike = mike.bind(options)();
                            mike = tango.bind(report)(golf, mike, oscar);
                            _fun00112_ip = 667; continue _fun00111;
 543:
                            mike = _closure3_slot0;
                            offset = mike.logger;
                            options = offset.info;
                            report = mike._selectedExperiments;
                            tango = 'Sending UDP info to RTC server.';
                            tango = options.bind(offset)(tango, oscar, report);
                            report = _closure3_slot1;
                            options = report.once;
                            tango = _closure1_slot0;
                            offset = _closure1_slot3;
                            zulu = 33;
                            zulu = offset[zulu];
                            zulu = tango.bind(verify)(zulu);
                            zulu = zulu.SocketEvent;
                            tango = zulu.Encryption;
                            zulu = function(argFoo, argBar) {
                                _fun00113: for(var _fun00114_ip = 0; ; ) switch(_fun00114_ip) {
 0:
                                    mike = argFoo;
                                    tango = _closure3_slot4;
                                    zulu = _closure3_slot0;
                                    zulu = zulu._connection;
                                    if(!(tango === zulu)) { _fun00114_ip = 55; continue _fun00113 }
 24:
                                    report = _closure3_slot4;
                                    tango = report.setEncryption;
                                    zulu = argBar;
                                    zulu = tango.bind(report)(mike, zulu);
                                    entity = _closure3_slot0;
                                    entity['_encryptionMode'] = mike;
 55:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            zulu = options.bind(report)(tango, zulu);
                            tango = report.selectProtocol;
                            zulu = mike.getRTCConnectionId;
                            kilo = zulu.bind(mike)();
                            foxtrot = mike._selectedExperiments;
                            output = report;
                            sizing = golf;
                            backup = oscar;
                            mike = output[tango](sizing, kilo, backup, foxtrot, romeo);
 667:
                            entity = _closure3_slot0;
                            mike = entity._backoff;
                            entity = mike.succeed;
                            entity = entity.bind(mike)();
 687:
                            entity = undefined;
                            return entity;
                        }
                    };
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.VideoEncoderFallback;
                    verify = function(argFoo) {
                        tango = argFoo;
                        zulu = tango.filter;
                        mike = function(argFoo) {
                            entity = argFoo;
                            mike = entity.type;
                            entity = 'video';
                            entity = entity === mike;
                            return entity;
                        };
                        zulu = zulu.bind(tango)(mike);
                        mike = zulu.map;
                        entity = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        zulu = mike.bind(zulu)(entity);
                        mike = zulu.join;
                        entity = ',';
                        golf = mike.bind(zulu)(entity);
                        mike = _closure3_slot0;
                        report = mike.logger;
                        zulu = report.info;
                        mike = global;
                        mike = mike.HermesInternal;
                        oscar = mike.concat;
                        mike = 'The originally selected video encoder is not working, fallback to the other available encoders: ';
                        mike = oscar.bind(mike)(golf);
                        mike = zulu.bind(report)(mike);
                        zulu = _closure3_slot1;
                        mike = zulu.updateSession;
                        entity = {};
                        entity['codecs'] = tango;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.Error;
                    verify = function(argFoo) {
                        _fun00115: for(var _fun00116_ip = 0; ; ) switch(_fun00116_ip) {
 0:
                            options = argFoo;
                            zulu = _closure3_slot1;
                            entity = _closure3_slot0;
                            entity = entity._socket;
                            if(!(zulu === entity)) { _fun00116_ip = 250; continue _fun00115 }
 27:
                            tango = _closure1_slot16;
                            zulu = tango.shouldIncludePreferredRegion;
                            zulu = zulu.bind(tango)();
                            golf = null;
                            if(!zulu) { _fun00116_ip = 63; continue _fun00115 }
 49:
                            tango = _closure1_slot16;
                            zulu = tango.getPreferredRegion;
                            golf = zulu.bind(tango)();
 63:
                            report = _closure3_slot0;
                            tango = report.logger;
                            zulu = tango.error;
                            mike = global;
                            mike = mike.HermesInternal;
                            oscar = mike.concat;
                            mike = 'Error occurred while connecting to RTC server: ';
                            mike = oscar.bind(mike)(options);
                            mike = zulu.bind(tango)(mike);
                            tango = _closure1_slot1;
                            zulu = _closure1_slot3;
                            mike = 18;
                            zulu = zulu[mike];
                            mike = undefined;
                            tango = tango.bind(mike)(zulu);
                            zulu = tango.track;
                            entity = _closure1_slot18;
                            mike = entity.VOICE_CONNECTION_FAILURE;
                            entity = {};
                            oscar = report._getAnalyticsProperties;
                            offset = oscar.bind(report)();
                            yankee = entity;
                            oscar = copyDataProperties(yankee, offset);
                            verify = report.hostname;
                            oscar = 'hostname';
                            entity[oscar] = verify;
                            verify = report.port;
                            oscar = 'port';
                            entity[oscar] = verify;
                            verify = report.protocol;
                            oscar = 'protocol';
                            entity[oscar] = verify;
                            oscar = 'error';
                            entity[oscar] = options;
                            oscar = 'cloudflare_best_region';
                            entity[oscar] = golf;
                            oscar = report._connectCount;
                            report = 'connect_count';
                            entity[report] = oscar;
                            entity = zulu.bind(tango)(mike, entity);
 250:
                            entity = undefined;
                            return entity;
                        }
                    };
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.ConnectionStateChange;
                    verify = function(argFoo) {
                        _fun00117: for(var _fun00118_ip = 0; ; ) switch(_fun00118_ip) {
 0:
                            report = argFoo;
                            entity = _closure3_slot0;
                            oscar = entity.logger;
                            tango = oscar.info;
                            verify = entity.state;
                            zulu = global;
                            zulu = zulu.HermesInternal;
                            options = zulu.concat;
                            golf = 'RTC media connection state change: ';
                            zulu = ' => ';
                            zulu = options.bind(golf)(verify, zulu, report);
                            zulu = tango.bind(oscar)(zulu);
                            zulu = _closure3_slot1;
                            entity = entity._socket;
                            if(!(zulu === entity)) { _fun00118_ip = 1096; continue _fun00117 }
 80:
                            entity = _closure3_slot0;
                            tango = entity.state;
                            zulu = _closure1_slot24;
                            zulu = zulu.DISCONNECTED;
                            if(!(zulu !== report)) { _fun00118_ip = 326; continue _fun00117 }
 109:
                            zulu = _closure1_slot24;
                            zulu = zulu.CONNECTING;
                            if(!(zulu !== report)) { _fun00118_ip = 299; continue _fun00117 }
 126:
                            zulu = _closure1_slot24;
                            zulu = zulu.CONNECTED;
                            if(!(zulu !== report)) { _fun00118_ip = 272; continue _fun00117 }
 143:
                            zulu = _closure1_slot24;
                            zulu = zulu.NO_ROUTE;
                            if(!(zulu !== report)) { _fun00118_ip = 245; continue _fun00117 }
 157:
                            zulu = _closure1_slot24;
                            zulu = zulu.ICE_CHECKING;
                            if(!(zulu !== report)) { _fun00118_ip = 218; continue _fun00117 }
 171:
                            zulu = _closure1_slot24;
                            zulu = zulu.DTLS_CONNECTING;
                            if(!(zulu === report)) { _fun00118_ip = 351; continue _fun00117 }
 188:
                            oscar = _closure3_slot0;
                            report = oscar.setState;
                            zulu = _closure1_slot20;
                            zulu = zulu.DTLS_CONNECTING;
                            zulu = report.bind(oscar)(zulu);
                            _fun00118_ip = 351; continue _fun00117;
 218:
                            oscar = _closure3_slot0;
                            report = oscar.setState;
                            zulu = _closure1_slot20;
                            zulu = zulu.ICE_CHECKING;
                            zulu = report.bind(oscar)(zulu);
                            _fun00118_ip = 351; continue _fun00117;
 245:
                            oscar = _closure3_slot0;
                            report = oscar.setState;
                            zulu = _closure1_slot20;
                            zulu = zulu.NO_ROUTE;
                            zulu = report.bind(oscar)(zulu);
                            _fun00118_ip = 351; continue _fun00117;
 272:
                            oscar = _closure3_slot0;
                            report = oscar.setState;
                            zulu = _closure1_slot20;
                            zulu = zulu.RTC_CONNECTED;
                            zulu = report.bind(oscar)(zulu);
                            _fun00118_ip = 351; continue _fun00117;
 299:
                            oscar = _closure3_slot0;
                            report = oscar.setState;
                            zulu = _closure1_slot20;
                            zulu = zulu.RTC_CONNECTING;
                            zulu = report.bind(oscar)(zulu);
                            _fun00118_ip = 351; continue _fun00117;
 326:
                            oscar = _closure3_slot0;
                            report = oscar.setState;
                            zulu = _closure1_slot20;
                            zulu = zulu.RTC_DISCONNECTED;
                            zulu = report.bind(oscar)(zulu);
 351:
                            zulu = _closure1_slot20;
                            zulu = zulu.RTC_CONNECTING;
                            if(!(tango === zulu)) { _fun00118_ip = 388; continue _fun00117 }
 365:
                            zulu = _closure3_slot0;
                            report = zulu.state;
                            zulu = _closure1_slot20;
                            zulu = zulu.RTC_DISCONNECTED;
                            if(!(report !== zulu)) { _fun00118_ip = 476; continue _fun00117 }
 388:
                            zulu = _closure3_slot0;
                            report = zulu.state;
                            zulu = _closure1_slot20;
                            zulu = zulu.NO_ROUTE;
                            if(!(report === zulu)) { _fun00118_ip = 490; continue _fun00117 }
 411:
                            zulu = _closure3_slot0;
                            zulu = zulu._backoff;
                            report = zulu.fails;
                            zulu = 0;
                            if(!(zulu === report)) { _fun00118_ip = 447; continue _fun00117 }
 433:
                            report = _closure3_slot0;
                            zulu = report._handleNoRoute;
                            zulu = zulu.bind(report)();
 447:
                            zulu = _closure3_slot0;
                            oscar = zulu._backoff;
                            report = oscar.fail;
                            zulu = zulu.reconnect;
                            zulu = report.bind(oscar)(zulu);
                            _fun00118_ip = 490; continue _fun00117;
 476:
                            report = _closure3_slot0;
                            zulu = report.reconnect;
                            zulu = zulu.bind(report)();
 490:
                            zulu = _closure3_slot0;
                            report = zulu.state;
                            zulu = _closure1_slot20;
                            zulu = zulu.RTC_CONNECTED;
                            if(!(report !== zulu)) { _fun00118_ip = 561; continue _fun00117 }
 513:
                            zulu = _closure1_slot20;
                            zulu = zulu.RTC_CONNECTED;
                            if(!(tango === zulu)) { _fun00118_ip = 1096; continue _fun00117 }
 530:
                            zulu = _closure3_slot0;
                            report = zulu.stateHistory;
                            tango = report.reset;
                            zulu = zulu.state;
                            zulu = tango.bind(report)(zulu);
                            _fun00118_ip = 1096; continue _fun00117;
 561:
                            tango = _closure1_slot16;
                            zulu = tango.shouldIncludePreferredRegion;
                            tango = zulu.bind(tango)();
                            zulu = null;
                            yankee = null;
                            if(!tango) { _fun00118_ip = 596; continue _fun00117 }
 582:
                            report = _closure1_slot16;
                            tango = report.getPreferredRegion;
                            yankee = tango.bind(report)();
 596:
                            tango = _closure3_slot0;
                            tango = tango._connecting;
                            if(!tango) { _fun00118_ip = 980; continue _fun00117 }
 612:
                            report = _closure1_slot13;
                            tango = report.getSettings;
                            verify = tango.bind(report)();
                            report = _closure1_slot1;
                            foxtrot = _closure1_slot3;
                            tango = 18;
                            tango = foxtrot[tango];
                            romeo = undefined;
                            golf = report.bind(romeo)(tango);
                            oscar = golf.track;
                            tango = _closure1_slot18;
                            report = tango.VOICE_CONNECTION_SUCCESS;
                            tango = {};
                            options = _closure3_slot0;
                            offset = options._getAnalyticsProperties;
                            sizing = offset.bind(options)();
                            output = tango;
                            offset = copyDataProperties(output, sizing);
                            backup = options.hostname;
                            offset = 'hostname';
                            tango[offset] = backup;
                            backup = options.port;
                            offset = 'port';
                            tango[offset] = backup;
                            backup = options.protocol;
                            offset = 'protocol';
                            tango[offset] = backup;
                            offset = 'cloudflare_best_region';
                            tango[offset] = yankee;
                            yankee = _closure1_slot0;
                            offset = 16;
                            offset = foxtrot[offset];
                            yankee = yankee.bind(romeo)(offset);
                            offset = yankee.now;
                            offset = offset.bind(yankee)();
                            options = options._connected;
                            yankee = _closure3_slot0;
                            if(options) { _fun00118_ip = 788; continue _fun00117 }
 780:
                            options = yankee._createdTime;
                            _fun00118_ip = 794; continue _fun00117;
 788:
                            options = yankee._connectStartTime;
 794:
                            offset = offset - options;
                            options = 'connect_time';
                            tango[options] = offset;
                            options = _closure3_slot0;
                            yankee = options._connectCount;
                            offset = 'connect_count';
                            tango[offset] = yankee;
                            yankee = _closure1_slot13;
                            offset = yankee.getMediaEngine;
                            romeo = offset.bind(yankee)();
                            offset = romeo.getAudioSubsystem;
                            romeo = offset.bind(romeo)();
                            offset = 'audio_subsystem';
                            tango[offset] = romeo;
                            offset = yankee.getMediaEngine;
                            yankee = offset.bind(yankee)();
                            offset = yankee.getAudioLayer;
                            yankee = offset.bind(yankee)();
                            offset = 'audio_layer';
                            tango[offset] = yankee;
                            offset = verify.automaticAudioSubsystem;
                            verify = 'automatic_audio_subsystem';
                            tango[verify] = offset;
                            verify = options.getMediaSessionId;
                            offset = verify.bind(options)();
                            verify = 'media_session_id';
                            tango[verify] = offset;
                            verify = options.getVoiceParticipantType;
                            offset = verify.bind(options)();
                            verify = 'participant_type';
                            tango[verify] = offset;
                            verify = options.stateHistory;
                            options = verify.getVoiceConnectionSuccessStats;
                            sizing = options.bind(verify)();
                            output = tango;
                            options = copyDataProperties(output, sizing);
                            tango = oscar.bind(golf)(report, tango);
 980:
                            tango = _closure3_slot0;
                            oscar = tango._localMediaSinkWantsManager;
                            if(!(zulu != oscar)) { _fun00118_ip = 1009; continue _fun00117 }
 994:
                            report = oscar.setConnection;
                            tango = _closure3_slot4;
                            tango = report.bind(oscar)(tango);
 1009:
                            tango = _closure3_slot0;
                            tango = tango._goLiveQualityManager;
                            if(!(zulu != tango)) { _fun00118_ip = 1033; continue _fun00117 }
 1023:
                            zulu = tango.update;
                            zulu = zulu.bind(tango)();
 1033:
                            mike = _closure3_slot0;
                            tango = _closure1_slot0;
                            zulu = _closure1_slot3;
                            entity = 16;
                            zulu = zulu[entity];
                            entity = undefined;
                            zulu = tango.bind(entity)(zulu);
                            entity = zulu.now;
                            entity = entity.bind(zulu)();
                            mike['_connectCompletedTime'] = entity;
                            entity = true;
                            mike['_connected'] = entity;
                            entity = false;
                            mike['_connecting'] = entity;
                            mike['_encountered_socket_failure'] = entity;
 1096:
                            entity = undefined;
                            return entity;
                        }
                    };
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.SecureFramesUpdate;
                    verify = function(argFoo) {
                        tango = _closure3_slot0;
                        entity = argFoo;
                        tango['_secureFramesState'] = entity;
                        zulu = tango.emit;
                        report = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 35;
                        mike = mike[entity];
                        entity = undefined;
                        mike = report.bind(entity)(mike);
                        mike = mike.RTCConnectionEvent;
                        mike = mike.SecureFramesUpdate;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.Ping;
                    romeo = zulu._handlePing;
                    verify = romeo.bind;
                    verify = verify.bind(romeo)(zulu);
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.PingTimeout;
                    romeo = zulu._handlePingTimeout;
                    verify = romeo.bind;
                    verify = verify.bind(romeo)(zulu);
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.OutboundLossRate;
                    romeo = zulu._handleOutboundLossRate;
                    verify = romeo.bind;
                    verify = verify.bind(romeo)(zulu);
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.SoundshareTrace;
                    romeo = zulu._handleSoundshareTrace;
                    verify = romeo.bind;
                    verify = verify.bind(romeo)(zulu);
                    verify = yankee.bind(mike)(offset, verify);
                    yankee = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    offset = verify.LocalVideoDisabled;
                    romeo = zulu._handleLocalVideoDisabled;
                    verify = romeo.bind;
                    verify = verify.bind(romeo)(zulu);
                    verify = yankee.bind(mike)(offset, verify);
                    offset = mike.on;
                    verify = golf[tango];
                    verify = report.bind(entity)(verify);
                    verify = verify.BaseConnectionEvent;
                    verify = verify.Stats;
                    yankee = _closure1_slot1;
                    options = 49;
                    options = golf[options];
                    yankee = yankee.bind(entity)(options);
                    options = yankee.create;
                    options = options.bind(yankee)();
                    options = offset.bind(mike)(verify, options);
                    offset = mike.on;
                    options = golf[tango];
                    options = report.bind(entity)(options);
                    options = options.BaseConnectionEvent;
                    verify = options.RemoteStreamsReady;
                    yankee = zulu._handleRemoteStreamsReady;
                    options = yankee.bind;
                    options = options.bind(yankee)(zulu);
                    options = offset.bind(mike)(verify, options);
                    verify = mike.on;
                    options = golf[tango];
                    options = report.bind(entity)(options);
                    options = options.BaseConnectionEvent;
                    options = options.NoiseCancellationError;
                    oscar = function(argFoo) {
                        mike = _closure3_slot0;
                        entity = argFoo;
                        mike['_noiseCancellationError'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    oscar = verify.bind(mike)(options, oscar);
                    oscar = mike.on;
                    tango = golf[tango];
                    tango = report.bind(entity)(tango);
                    tango = tango.BaseConnectionEvent;
                    report = tango.MLSFailure;
                    golf = zulu._handleMLSFailure;
                    tango = golf.bind;
                    tango = tango.bind(golf)(zulu);
                    tango = oscar.bind(mike)(report, tango);
                    report = mike.setRemoteVideoSinkWants;
                    tango = zulu._remoteVideoSinkWants;
                    tango = report.bind(mike)(tango);
                    zulu['_connection'] = mike;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[42] = report;
            report = {};
            golf = '_handleSpeaking';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
                _fun00119: for(var _fun00120_ip = 0; ; ) switch(_fun00120_ip) {
 0:
                    tango = argBar;
                    zulu = argBaz;
                    mike = this;
                    golf = mike._connection;
                    entity = null;
                    report = entity != golf;
                    if(!report) { _fun00120_ip = 33; continue _fun00119 }
 24:
                    oscar = mike.userId;
                    report = oscar !== tango;
 33:
                    if(!report) { _fun00120_ip = 147; continue _fun00119 }
 36:
                    oscar = _closure1_slot27;
                    options = oscar.NONE;
                    oscar = argCorge;
                    if(!(oscar !== options)) { _fun00120_ip = 125; continue _fun00119 }
 56:
                    oscar = golf.createUser;
                    oscar = oscar.bind(golf)(tango, zulu);
                    golf = _closure1_slot1;
                    oscar = _closure1_slot3;
                    report = 32;
                    oscar = oscar[report];
                    report = undefined;
                    golf = golf.bind(report)(oscar);
                    oscar = golf.dispatch;
                    report = {};
                    options = 'RTC_CONNECTION_USER_CREATE';
                    report['type'] = options;
                    report['userId'] = tango;
                    options = mike.context;
                    report['context'] = options;
                    report = oscar.bind(golf)(report);
 125:
                    mike = mike._localMediaSinkWantsManager;
                    if(!(entity != mike)) { _fun00120_ip = 147; continue _fun00119 }
 135:
                    entity = mike.setAudioSSRC;
                    entity = entity.bind(mike)(tango, zulu);
 147:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[43] = report;
            report = {};
            golf = 'handleFlags';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                oscar = this;
                report = oscar.emit;
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 35;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.RTCConnectionEvent;
                tango = mike.Flags;
                zulu = argFoo;
                mike = argBar;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            report['value'] = golf;
            entity[44] = report;
            report = {};
            golf = 'handlePlatform';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                golf = this;
                oscar = golf.emit;
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 35;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.RTCConnectionEvent;
                yankee = mike.Platform;
                options = golf.channelId;
                offset = argFoo;
                verify = argBar;
                romeo = golf;
                mike = romeo[oscar](yankee, offset, verify, options, golf);
                return entity;
            };
            report['value'] = golf;
            entity[45] = report;
            report = {};
            golf = 'getOrCreateVideoQuality';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00121: for(var _fun00122_ip = 0; ; ) switch(_fun00122_ip) {
 0:
                    entity = this;
                    var _closure3_slot0 = entity;
                    zulu = entity._connection;
                    report = null;
                    if(!(report != zulu)) { _fun00122_ip = 324; continue _fun00121 }
 24:
                    zulu = entity._videoQuality;
                    if(!(report == zulu)) { _fun00122_ip = 324; continue _fun00121 }
 37:
                    oscar = _closure1_slot0;
                    verify = _closure1_slot3;
                    options = 50;
                    tango = verify[options];
                    golf = undefined;
                    tango = oscar.bind(golf)(tango);
                    offset = tango.VideoQuality;
                    output = entity._connection;
                    oscar = offset.prototype;
                    oscar = Object.create(oscar, {constructor: {value: offset}});
                    result = oscar;
                    tango = new result[offset](output, sizing);
                    tango = tango instanceof Object ? tango : oscar;
                    entity['_videoQuality'] = tango;
                    oscar = entity._videoQuality;
                    tango = oscar.start;
                    tango = tango.bind(oscar)();
                    oscar = _closure1_slot1;
                    tango = 51;
                    tango = verify[tango];
                    verify = oscar.bind(golf)(tango);
                    oscar = verify.getConfig;
                    tango = true;
                    oscar = oscar.bind(verify)(tango);
                    tango = oscar.featureEnabled;
                    romeo = oscar.windowLength;
                    yankee = oscar.allowedPoorFpsRatio;
                    offset = oscar.fpsThreshold;
                    verify = oscar.backoffTimeSec;
                    if(!tango) { _fun00122_ip = 324; continue _fun00121 }
 180:
                    oscar = _closure1_slot0;
                    foxtrot = _closure1_slot3;
                    tango = 52;
                    tango = foxtrot[tango];
                    tango = oscar.bind(golf)(tango);
                    tango = tango.VideoHealthManager;
                    oscar = tango.prototype;
                    oscar = Object.create(oscar, {constructor: {value: tango}});
                    result = oscar;
                    output = romeo;
                    sizing = yankee;
                    kilo = offset;
                    backup = verify;
                    tango = new result[tango](output, sizing, kilo, backup, foxtrot);
                    tango = tango instanceof Object ? tango : oscar;
                    entity['_videoHealthManager'] = tango;
                    tango = entity._localMediaSinkWantsManager;
                    if(!(report != tango)) { _fun00122_ip = 272; continue _fun00121 }
 254:
                    report = entity._localMediaSinkWantsManager;
                    tango = entity._videoHealthManager;
                    report['videoHealthManager'] = tango;
 272:
                    report = entity._videoQuality;
                    tango = report.on;
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot3;
                    zulu = zulu[options];
                    zulu = oscar.bind(golf)(zulu);
                    zulu = zulu.VideoQualityEvent;
                    zulu = zulu.FpsUpdate;
                    mike = function(argFoo, argBar, argBaz) {
                        _fun00123: for(var _fun00124_ip = 0; ; ) switch(_fun00124_ip) {
 0:
                            report = argFoo;
                            entity = _closure3_slot0;
                            oscar = entity._localMediaSinkWantsManager;
                            entity = null;
                            zulu = entity != oscar;
                            if(!zulu) { _fun00124_ip = 36; continue _fun00123 }
 25:
                            tango = oscar.shouldReceiveFromUser;
                            zulu = tango.bind(oscar)(report);
 36:
                            if(!zulu) { _fun00124_ip = 74; continue _fun00123 }
 39:
                            mike = _closure3_slot0;
                            tango = mike._videoHealthManager;
                            if(!(entity != tango)) { _fun00124_ip = 74; continue _fun00123 }
 53:
                            zulu = tango.updateFps;
                            mike = argBar;
                            entity = argBaz;
                            entity = zulu.bind(tango)(report, mike, entity);
 74:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = tango.bind(report)(zulu, mike);
 324:
                    entity = entity._videoQuality;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[46] = report;
            report = {};
            golf = '_handleVideoStreamId';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00125: for(var _fun00126_ip = 0; ; ) switch(_fun00126_ip) {
 0:
                    entity = argFoo;
                    mike = this;
                    var _closure3_slot0 = mike;
                    report = entity.userId;
                    tango = entity.streamId;
                    options = entity.videoSsrc;
                    verify = entity.videoStreamParameters;
                    romeo = mike.emit;
                    golf = _closure1_slot0;
                    zulu = _closure1_slot3;
                    entity = 35;
                    zulu = zulu[entity];
                    entity = undefined;
                    zulu = golf.bind(entity)(zulu);
                    zulu = zulu.RTCConnectionEvent;
                    result = zulu.Video;
                    output = mike.guildId;
                    sizing = mike.channelId;
                    foxtrot = mike.rtcServerId;
                    echo = mike;
                    kilo = report;
                    backup = tango;
                    zulu = echo[romeo](result, output, sizing, kilo, backup, foxtrot, romeo);
                    zulu = null;
                    golf = zulu != tango;
                    if(!golf) { _fun00126_ip = 130; continue _fun00125 }
 116:
                    offset = mike.getOrCreateVideoQuality;
                    offset = offset.bind(mike)();
                    golf = zulu == offset;
 130:
                    if(!golf) { _fun00126_ip = 154; continue _fun00125 }
 133:
                    yankee = mike.logger;
                    offset = yankee.error;
                    golf = '_handleVideoStreamId: Unable to create videoQuality.';
                    golf = offset.bind(yankee)(golf);
 154:
                    golf = mike._videoQuality;
                    golf = zulu != golf;
                    if(!golf) { _fun00126_ip = 176; continue _fun00125 }
 167:
                    offset = mike.userId;
                    golf = offset === report;
 176:
                    if(!golf) { _fun00126_ip = 194; continue _fun00125 }
 179:
                    golf = verify.forEach;
                    oscar = function(argFoo) {
                        _fun00127: for(var _fun00128_ip = 0; ; ) switch(_fun00128_ip) {
 0:
                            tango = argFoo;
                            report = tango.ssrc;
                            entity = null;
                            oscar = entity != report;
                            mike = 0;
                            zulu = 0;
                            if(!oscar) { _fun00128_ip = 25; continue _fun00127 }
 22:
                            zulu = report;
 25:
                            mike = zulu > mike;
                            if(!mike) { _fun00128_ip = 44; continue _fun00127 }
 32:
                            report = tango.active;
                            tango = true;
                            mike = tango === report;
 44:
                            if(!mike) { _fun00128_ip = 77; continue _fun00127 }
 47:
                            mike = _closure3_slot0;
                            mike = mike._videoQuality;
                            if(!(entity != mike)) { _fun00128_ip = 77; continue _fun00127 }
 64:
                            entity = mike.setOutboundSsrc;
                            entity = entity.bind(mike)(zulu);
 77:
                            entity = undefined;
                            return entity;
                        }
                    };
                    oscar = golf.bind(verify)(oscar);
 194:
                    oscar = mike.userId;
                    if(!(oscar !== report)) { _fun00126_ip = 305; continue _fun00125 }
 203:
                    oscar = 0;
                    oscar = oscar === options;
                    if(!oscar) { _fun00126_ip = 216; continue _fun00125 }
 212:
                    oscar = zulu === tango;
 216:
                    if(!oscar) { _fun00126_ip = 260; continue _fun00125 }
 219:
                    if(!oscar) { _fun00126_ip = 305; continue _fun00125 }
 222:
                    verify = mike._videoQuality;
                    golf = zulu == verify;
                    oscar = undefined;
                    if(golf) { _fun00126_ip = 257; continue _fun00125 }
 237:
                    golf = verify.getInboundParticipants;
                    verify = golf.bind(verify)();
                    golf = verify.includes;
                    oscar = golf.bind(verify)(report);
 257:
                    if(!oscar) { _fun00126_ip = 305; continue _fun00125 }
 260:
                    golf = mike._videoQuality;
                    if(!(zulu != golf)) { _fun00126_ip = 284; continue _fun00125 }
 270:
                    oscar = golf.setInboundUser;
                    oscar = oscar.bind(golf)(report, options);
 284:
                    golf = mike._videoHealthManager;
                    if(!(zulu != golf)) { _fun00126_ip = 305; continue _fun00125 }
 294:
                    oscar = golf.createUser;
                    oscar = oscar.bind(golf)(report);
 305:
                    oscar = mike._connection;
                    if(!(zulu != oscar)) { _fun00126_ip = 405; continue _fun00125 }
 315:
                    oscar = mike.userId;
                    if(!(oscar !== report)) { _fun00126_ip = 405; continue _fun00125 }
 324:
                    oscar = mike._localMediaSinkWantsManager;
                    if(!(zulu == oscar)) { _fun00126_ip = 387; continue _fun00125 }
 334:
                    oscar = mike._goLiveQualityManager;
                    if(!(zulu != oscar)) { _fun00126_ip = 405; continue _fun00125 }
 344:
                    golf = mike._goLiveQualityManager;
                    oscar = golf.getUserID;
                    oscar = oscar.bind(golf)();
                    if(!(oscar === report)) { _fun00126_ip = 405; continue _fun00125 }
 364:
                    oscar = mike._goLiveQualityManager;
                    if(!(zulu != oscar)) { _fun00126_ip = 405; continue _fun00125 }
 374:
                    zulu = oscar.setStreamId;
                    zulu = zulu.bind(oscar)(tango);
                    _fun00126_ip = 405; continue _fun00125;
 387:
                    zulu = mike._localMediaSinkWantsManager;
                    mike = zulu.setStreamId;
                    mike = mike.bind(zulu)(report, tango);
 405:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[47] = report;
            report = {};
            golf = '_handleLocalVideoDisabled';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00129: for(var _fun00130_ip = 0; ; ) switch(_fun00130_ip) {
 0:
                    report = argFoo;
                    entity = this;
                    mike = entity.userId;
                    if(!(mike !== report)) { _fun00130_ip = 48; continue _fun00129 }
 15:
                    mike = entity.getOrCreateVideoQuality;
                    tango = mike.bind(entity)();
                    mike = null;
                    if(!(mike != tango)) { _fun00130_ip = 52; continue _fun00129 }
 31:
                    zulu = tango.setUserVideoDisabled;
                    mike = argBar;
                    mike = zulu.bind(tango)(report, mike);
 48:
                    mike = undefined;
                    return mike;
 52:
                    zulu = entity.logger;
                    mike = zulu.error;
                    entity = '_handleLocalVideoDisabled: Unable to create videoQuality.';
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[48] = report;
            report = {};
            golf = '_handleRemoteStreamsReady';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                options = this;
                tango = _closure1_slot0;
                report = _closure1_slot3;
                entity = 16;
                zulu = report[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.now;
                tango = zulu.bind(tango)();
                zulu = options._connectStartTime;
                golf = tango - zulu;
                tango = _closure1_slot1;
                zulu = 18;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.track;
                mike = _closure1_slot18;
                zulu = mike.VOICE_CONNECTION_REMOTE_STREAMS_CREATED;
                mike = {};
                oscar = options._getAnalyticsProperties;
                verify = oscar.bind(options)();
                offset = mike;
                oscar = copyDataProperties(offset, verify);
                options = argFoo;
                oscar = 'number_of_users';
                mike[oscar] = options;
                oscar = 'duration_ms';
                mike[oscar] = golf;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            report['value'] = golf;
            entity[49] = report;
            report = {};
            golf = '_handleVideo';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: value
                _fun00131: for(var _fun00132_ip = 0; ; ) switch(_fun00132_ip) {
 0:
                    golf = argBar;
                    options = argBaz;
                    offset = argCorge;
                    zulu = argGrault;
                    tango = this;
                    var _closure3_slot0 = tango;
                    var _closure3_slot1 = golf;
                    var _closure3_slot2 = offset;
                    report = tango._connection;
                    mike = null;
                    if(!(mike != report)) { _fun00132_ip = 423; continue _fun00131 }
 44:
                    report = tango.userId;
                    if(!(report !== golf)) { _fun00132_ip = 423; continue _fun00131 }
 56:
                    report = tango._localMediaSinkWantsManager;
                    if(!(mike == report)) { _fun00132_ip = 266; continue _fun00131 }
 69:
                    verify = new Array(0);
                    report = _closure1_slot29;
                    foxtrot = undefined;
                    romeo = report.bind(foxtrot)(zulu);
                    oscar = romeo.bind(foxtrot)();
                    report = oscar.done;
                    yankee = oscar;
                    oscar = undefined;
                    if(report) { _fun00132_ip = 211; continue _fun00131 }
 104:
                    report = yankee.value;
                    kilo = report.ssrc;
                    backup = oscar;
                    if(!(mike != kilo)) { _fun00132_ip = 193; continue _fun00131 }
 122:
                    kilo = report.quality;
                    backup = oscar;
                    if(!(mike != kilo)) { _fun00132_ip = 193; continue _fun00131 }
 135:
                    sizing = verify.push;
                    kilo = {};
                    output = report.ssrc;
                    kilo['ssrc'] = output;
                    output = report.quality;
                    kilo['quality'] = output;
                    report = report.active;
                    output = mike == report;
                    if(output) { _fun00132_ip = 180; continue _fun00131 }
 177:
                    output = report;
 180:
                    kilo['active'] = output;
                    kilo = sizing.bind(verify)(kilo);
                    backup = report;
 193:
                    kilo = romeo.bind(foxtrot)();
                    report = kilo.done;
                    oscar = backup;
                    yankee = kilo;
                    if(!report) { _fun00132_ip = 104; continue _fun00131 }
 211:
                    oscar = tango._goLiveQualityManager;
                    if(!(mike != oscar)) { _fun00132_ip = 234; continue _fun00131 }
 221:
                    report = oscar.setUserID;
                    report = report.bind(oscar)(golf);
 234:
                    oscar = tango._goLiveQualityManager;
                    if(!(mike != oscar)) { _fun00132_ip = 404; continue _fun00131 }
 247:
                    report = oscar.updateAudioAndVideoStreamInfo;
                    report = report.bind(oscar)(options, verify);
                    _fun00132_ip = 404; continue _fun00131;
 266:
                    oscar = tango._localMediaSinkWantsManager;
                    report = oscar.setAudioSSRC;
                    report = report.bind(oscar)(golf, options);
                    oscar = zulu.map;
                    report = function(argFoo) {
                        mike = argFoo;
                        entity = {};
                        zulu = _closure1_slot26;
                        zulu = zulu.VIDEO;
                        entity['type'] = zulu;
                        zulu = mike.rid;
                        entity['rid'] = zulu;
                        zulu = mike.ssrc;
                        entity['ssrc'] = zulu;
                        zulu = mike.rtxSsrc;
                        entity['rtxSsrc'] = zulu;
                        mike = mike.quality;
                        entity['quality'] = mike;
                        zulu = _closure3_slot2;
                        mike = 0;
                        mike = zulu > mike;
                        entity['active'] = mike;
                        return entity;
                    };
                    oscar = oscar.bind(zulu)(report);
                    report = oscar.length;
                    verify = 0;
                    if(!(verify === report)) { _fun00132_ip = 384; continue _fun00131 }
 310:
                    options = oscar.push;
                    report = {};
                    yankee = _closure1_slot26;
                    yankee = yankee.VIDEO;
                    report['type'] = yankee;
                    yankee = '100';
                    report['rid'] = yankee;
                    report['ssrc'] = offset;
                    yankee = 1;
                    yankee = offset + yankee;
                    report['rtxSsrc'] = yankee;
                    yankee = 100;
                    report['quality'] = yankee;
                    verify = offset > verify;
                    report['active'] = verify;
                    report = options.bind(oscar)(report);
 384:
                    report = tango._localMediaSinkWantsManager;
                    tango = report.setVideoSSRCs;
                    tango = tango.bind(report)(golf, oscar);
 404:
                    if(!(mike != zulu)) { _fun00132_ip = 423; continue _fun00131 }
 408:
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        _fun00133: for(var _fun00134_ip = 0; ; ) switch(_fun00134_ip) {
 0:
                            entity = argFoo;
                            zulu = entity.quality;
                            mike = 100;
                            if(!(mike === zulu)) { _fun00134_ip = 104; continue _fun00133 }
 16:
                            verify = _closure3_slot0;
                            options = verify.emit;
                            report = _closure1_slot0;
                            tango = _closure1_slot3;
                            zulu = 35;
                            tango = tango[zulu];
                            zulu = undefined;
                            zulu = report.bind(zulu)(tango);
                            zulu = zulu.RTCConnectionEvent;
                            sizing = zulu.VideoSourceQualityChanged;
                            kilo = verify.guildId;
                            backup = verify.channelId;
                            foxtrot = _closure3_slot1;
                            romeo = entity.maxResolution;
                            yankee = entity.maxFrameRate;
                            offset = verify.context;
                            output = verify;
                            entity = output[options](sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify);
 104:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
 423:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[50] = report;
            report = {};
            golf = '_handleControlPing';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00135: for(var _fun00136_ip = 0; ; ) switch(_fun00136_ip) {
 0:
                    zulu = this;
                    tango = _closure1_slot13;
                    mike = tango.supports;
                    entity = _closure1_slot22;
                    entity = entity.NATIVE_PING;
                    entity = mike.bind(tango)(entity);
                    if(entity) { _fun00136_ip = 48; continue _fun00135 }
 34:
                    mike = zulu._handlePing;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
 48:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[51] = report;
            report = {};
            golf = '_handlePing';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00137: for(var _fun00138_ip = 0; ; ) switch(_fun00138_ip) {
 0:
                    zulu = argFoo;
                    oscar = this;
                    entity = undefined;
                    if(!(entity !== zulu)) { _fun00138_ip = 193; continue _fun00137 }
 15:
                    report = oscar._pings;
                    tango = report.push;
                    mike = {};
                    golf = global;
                    options = golf.Date;
                    golf = options.now;
                    golf = golf.bind(options)();
                    mike['time'] = golf;
                    mike['value'] = zulu;
                    mike = tango.bind(report)(mike);
                    mike = oscar._pings;
                    mike = mike.length;
                    tango = 200;
                    if(!(mike >= tango)) { _fun00138_ip = 108; continue _fun00137 }
 77:
                    report = oscar._pings;
                    mike = report.shift;
                    mike = mike.bind(report)();
                    mike = oscar._pings;
                    mike = mike.length;
                    if(mike >= tango) { _fun00138_ip = 77; continue _fun00137 }
 108:
                    mike = 500;
                    if(!(zulu > mike)) { _fun00138_ip = 133; continue _fun00137 }
 118:
                    mike = oscar._pingBadCount;
                    mike = mike + 1;
                    oscar['_pingBadCount'] = mike;
 133:
                    report = oscar.emit;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot3;
                    mike = 35;
                    mike = tango[mike];
                    mike = zulu.bind(entity)(mike);
                    mike = mike.RTCConnectionEvent;
                    tango = mike.Ping;
                    zulu = oscar._pings;
                    mike = oscar.quality;
                    mike = report.bind(oscar)(tango, zulu, mike);
 193:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[52] = report;
            report = {};
            golf = '_handlePingTimeout';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00139: for(var _fun00140_ip = 0; ; ) switch(_fun00140_ip) {
 0:
                    zulu = this;
                    tango = zulu._pingTimeouts;
                    mike = tango.push;
                    entity = argFoo;
                    entity = mike.bind(tango)(entity);
                    entity = zulu._pingTimeouts;
                    oscar = entity.length;
                    mike = 3;
                    entity = oscar >= mike;
                    if(!entity) { _fun00140_ip = 85; continue _fun00139 }
 43:
                    report = zulu._pingTimeouts;
                    golf = 1;
                    tango = oscar - golf;
                    report = report[tango];
                    options = zulu._pingTimeouts;
                    tango = 2;
                    tango = oscar - tango;
                    tango = options[tango];
                    tango = tango + golf;
                    entity = report === tango;
 85:
                    if(!entity) { _fun00140_ip = 130; continue _fun00139 }
 88:
                    report = zulu._pingTimeouts;
                    tango = 2;
                    tango = oscar - tango;
                    tango = report[tango];
                    report = zulu._pingTimeouts;
                    mike = oscar - mike;
                    report = report[mike];
                    mike = 1;
                    mike = report + mike;
                    entity = tango === mike;
 130:
                    if(!entity) { _fun00140_ip = 147; continue _fun00139 }
 133:
                    mike = zulu._handlePing;
                    entity = argBar;
                    entity = mike.bind(zulu)(entity);
 147:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[53] = report;
            report = {};
            golf = '_handleOutboundLossRate';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                report = argFoo;
                tango = this;
                tango['_outboundLossRate'] = report;
                zulu = tango.emit;
                oscar = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 35;
                mike = mike[entity];
                entity = undefined;
                mike = oscar.bind(entity)(mike);
                mike = mike.RTCConnectionEvent;
                mike = mike.OutboundLossRate;
                mike = zulu.bind(tango)(mike, report);
                return entity;
            };
            report['value'] = golf;
            entity[54] = report;
            report = {};
            golf = '_handleSoundshareTrace';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                entity = this;
                tango = entity._soundshareStats;
                zulu = tango.traceEvent;
                entity = undefined;
                mike = argFoo;
                mike = zulu.bind(tango)(entity, mike);
                return entity;
            };
            report['value'] = golf;
            entity[55] = report;
            report = {};
            golf = '_getAnalyticsProperties';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00141: for(var _fun00142_ip = 0; ; ) switch(_fun00142_ip) {
 0:
                    mike = this;
                    tango = _closure1_slot12;
                    zulu = tango.getChannel;
                    entity = mike.channelId;
                    entity = zulu.bind(tango)(entity);
                    zulu = null;
                    tango = zulu != entity;
                    if(!tango) { _fun00142_ip = 39; continue _fun00141 }
 34:
                    zulu = entity.type;
 39:
                    entity = {};
                    tango = mike.guildId;
                    entity['guild_id'] = tango;
                    tango = mike.channelId;
                    entity['channel_id'] = tango;
                    entity['channel_type'] = zulu;
                    zulu = mike.getRTCConnectionId;
                    zulu = zulu.bind(mike)();
                    entity['rtc_connection_id'] = zulu;
                    zulu = mike.context;
                    entity['context'] = zulu;
                    zulu = mike.voiceVersion;
                    entity['voice_backend_version'] = zulu;
                    mike = mike.rtcWorkerVersion;
                    entity['rtc_worker_backend_version'] = mike;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[56] = report;
            report = {};
            golf = '_handleClientConnect';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00143: for(var _fun00144_ip = 0; ; ) switch(_fun00144_ip) {
 0:
                    report = argFoo;
                    mike = this;
                    var _closure3_slot0 = mike;
                    zulu = report.forEach;
                    entity = function(argFoo) {
                        _fun00145: for(var _fun00146_ip = 0; ; ) switch(_fun00146_ip) {
 0:
                            tango = argFoo;
                            entity = _closure3_slot0;
                            zulu = entity._userIds;
                            mike = zulu.add;
                            mike = mike.bind(zulu)(tango);
                            zulu = entity._connection;
                            entity = null;
                            if(!(entity != zulu)) { _fun00146_ip = 52; continue _fun00145 }
 38:
                            mike = zulu.createUser;
                            entity = 0;
                            entity = mike.bind(zulu)(tango, entity);
 52:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zulu.bind(report)(entity);
                    tango = mike.emit;
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot3;
                    entity = 35;
                    zulu = zulu[entity];
                    entity = undefined;
                    zulu = oscar.bind(entity)(zulu);
                    zulu = zulu.RTCConnectionEvent;
                    zulu = zulu.ClientConnect;
                    zulu = tango.bind(mike)(zulu, report);
                    oscar = mike._goLiveQualityManager;
                    zulu = null;
                    if(!(zulu != oscar)) { _fun00144_ip = 105; continue _fun00143 }
 88:
                    report = oscar.updateCallUserIds;
                    tango = mike._userIds;
                    tango = report.bind(oscar)(tango);
 105:
                    tango = mike._localMediaSinkWantsManager;
                    if(!(zulu != tango)) { _fun00144_ip = 132; continue _fun00143 }
 115:
                    zulu = tango.updateCallUserIds;
                    mike = mike._userIds;
                    mike = zulu.bind(tango)(mike);
 132:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[57] = report;
            report = {};
            golf = '_handleClientDisconnect';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00147: for(var _fun00148_ip = 0; ; ) switch(_fun00148_ip) {
 0:
                    oscar = argFoo;
                    mike = this;
                    tango = mike._videoQuality;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00148_ip = 370; continue _fun00147 }
 21:
                    report = mike.context;
                    entity = _closure1_slot23;
                    entity = entity.DEFAULT;
                    if(!(report === entity)) { _fun00148_ip = 370; continue _fun00147 }
 46:
                    entity = tango.getInboundStats;
                    verify = entity.bind(tango)(oscar);
                    entity = zulu == verify;
                    golf = undefined;
                    options = undefined;
                    if(entity) { _fun00148_ip = 74; continue _fun00147 }
 68:
                    options = verify.num_frames;
 74:
                    offset = zulu != options;
                    report = 0;
                    entity = 0;
                    if(!offset) { _fun00148_ip = 88; continue _fun00147 }
 85:
                    entity = options;
 88:
                    if(!(zulu != verify)) { _fun00148_ip = 370; continue _fun00147 }
 95:
                    if(!(entity > report)) { _fun00148_ip = 370; continue _fun00147 }
 102:
                    report = _closure1_slot1;
                    options = _closure1_slot3;
                    entity = 18;
                    entity = options[entity];
                    options = report.bind(golf)(entity);
                    golf = options.track;
                    entity = _closure1_slot18;
                    report = entity.VIDEO_STREAM_ENDED;
                    entity = {};
                    offset = mike._getAnalyticsProperties;
                    kilo = offset.bind(mike)();
                    sizing = entity;
                    offset = copyDataProperties(sizing, kilo);
                    offset = mike.getMediaSessionId;
                    romeo = offset.bind(mike)();
                    offset = 'media_session_id';
                    entity[offset] = romeo;
                    offset = 'sender_user_id';
                    entity[offset] = oscar;
                    romeo = 'User disconnected';
                    offset = 'reason';
                    entity[offset] = romeo;
                    offset = 'receiver';
                    romeo = 'participant_type';
                    entity[romeo] = offset;
                    backup = _closure1_slot16;
                    foxtrot = backup.getRegion;
                    romeo = mike.hostname;
                    foxtrot = foxtrot.bind(backup)(romeo);
                    romeo = 'guild_region';
                    entity[romeo] = foxtrot;
                    foxtrot = mike.hostname;
                    romeo = 'hostname';
                    entity[romeo] = foxtrot;
                    romeo = _closure1_slot13;
                    yankee = romeo.getHardwareEncoding;
                    romeo = yankee.bind(romeo)();
                    yankee = 'hardware_enabled';
                    entity[yankee] = romeo;
                    sizing = entity;
                    kilo = verify;
                    verify = copyDataProperties(sizing, kilo);
                    verify = tango.getNetworkStats;
                    kilo = verify.bind(tango)();
                    sizing = entity;
                    verify = copyDataProperties(sizing, kilo);
                    verify = tango.getCodecUsageStats;
                    kilo = verify.bind(tango)(offset, oscar);
                    sizing = entity;
                    verify = copyDataProperties(sizing, kilo);
                    entity = golf.bind(options)(report, entity);
                    entity = tango.destroyUser;
                    entity = entity.bind(tango)(oscar);
                    tango = mike._videoHealthManager;
                    if(!(zulu != tango)) { _fun00148_ip = 370; continue _fun00147 }
 359:
                    entity = tango.deleteUser;
                    entity = entity.bind(tango)(oscar);
 370:
                    tango = mike._connection;
                    if(!(zulu != tango)) { _fun00148_ip = 391; continue _fun00147 }
 380:
                    entity = tango.destroyUser;
                    entity = entity.bind(tango)(oscar);
 391:
                    tango = mike._localMediaSinkWantsManager;
                    if(!(zulu != tango)) { _fun00148_ip = 412; continue _fun00147 }
 401:
                    entity = tango.destroyUser;
                    entity = entity.bind(tango)(oscar);
 412:
                    tango = mike._userIds;
                    entity = tango.delete;
                    entity = entity.bind(tango)(oscar);
                    report = mike.emit;
                    golf = _closure1_slot0;
                    tango = _closure1_slot3;
                    entity = 35;
                    tango = tango[entity];
                    entity = undefined;
                    tango = golf.bind(entity)(tango);
                    tango = tango.RTCConnectionEvent;
                    tango = tango.ClientDisconnect;
                    tango = report.bind(mike)(tango, oscar);
                    oscar = mike._goLiveQualityManager;
                    if(!(zulu != oscar)) { _fun00148_ip = 504; continue _fun00147 }
 487:
                    report = oscar.updateCallUserIds;
                    tango = mike._userIds;
                    tango = report.bind(oscar)(tango);
 504:
                    tango = mike._localMediaSinkWantsManager;
                    if(!(zulu != tango)) { _fun00148_ip = 531; continue _fun00147 }
 514:
                    zulu = tango.updateCallUserIds;
                    mike = mike._userIds;
                    mike = zulu.bind(tango)(mike);
 531:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[58] = report;
            report = {};
            golf = '_handleCodecs';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00149: for(var _fun00150_ip = 0; ; ) switch(_fun00150_ip) {
 0:
                    report = argFoo;
                    tango = argBar;
                    entity = this;
                    zulu = entity._connection;
                    oscar = null;
                    if(!(oscar != zulu)) { _fun00150_ip = 31; continue _fun00149 }
 21:
                    mike = entity.protocol;
                    if(!(oscar == mike)) { _fun00150_ip = 61; continue _fun00149 }
 31:
                    verify = entity.logger;
                    options = verify.warn;
                    golf = entity.protocol;
                    mike = 'Cannot set codecs on connection with protocol:';
                    mike = options.bind(verify)(mike, golf);
                    _fun00150_ip = 129; continue _fun00149;
 61:
                    mike = zulu.setCodecs;
                    if(!(oscar != report)) { _fun00150_ip = 79; continue _fun00149 }
 71:
                    golf = '';
                    if(!(golf === report)) { _fun00150_ip = 92; continue _fun00149 }
 79:
                    golf = _closure1_slot25;
                    report = golf.OPUS;
 92:
                    if(!(oscar != tango)) { _fun00150_ip = 104; continue _fun00149 }
 96:
                    oscar = '';
                    if(!(oscar === tango)) { _fun00150_ip = 117; continue _fun00149 }
 104:
                    oscar = _closure1_slot25;
                    tango = oscar.H264;
 117:
                    entity = entity.context;
                    entity = mike.bind(zulu)(report, tango, entity);
 129:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[59] = report;
            report = {};
            golf = '_handleSDP';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00151: for(var _fun00152_ip = 0; ; ) switch(_fun00152_ip) {
 0:
                    entity = this;
                    zulu = entity._connection;
                    tango = null;
                    if(!(tango != zulu)) { _fun00152_ip = 25; continue _fun00151 }
 15:
                    mike = entity.protocol;
                    if(!(tango == mike)) { _fun00152_ip = 55; continue _fun00151 }
 25:
                    report = entity.logger;
                    tango = report.warn;
                    mike = entity.protocol;
                    entity = 'Cannot set SDP on connection with protocol:';
                    entity = tango.bind(report)(entity, mike);
                    _fun00152_ip = 71; continue _fun00151;
 55:
                    mike = zulu.setSDP;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
 71:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[60] = report;
            report = {};
            golf = '_handleMediaSessionId';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                options = argFoo;
                report = this;
                report['_mediaSessionId'] = options;
                zulu = report.logger;
                mike = zulu.info;
                entity = report.getRTCConnectionId;
                golf = entity.bind(report)();
                entity = global;
                entity = entity.HermesInternal;
                oscar = entity.concat;
                tango = 'Setting media-session-id: ';
                entity = ' for rtc-connection-id: ';
                entity = oscar.bind(tango)(options, entity, golf);
                entity = mike.bind(zulu)(entity);
                zulu = _closure1_slot1;
                tango = _closure1_slot3;
                entity = 53;
                oscar = tango[entity];
                entity = undefined;
                golf = zulu.bind(entity)(oscar);
                oscar = golf.getRawThermalState;
                offset = oscar.bind(golf)();
                oscar = 18;
                oscar = tango[oscar];
                options = zulu.bind(entity)(oscar);
                golf = options.track;
                mike = _closure1_slot18;
                oscar = mike.MEDIA_SESSION_JOINED;
                mike = {};
                verify = report._getAnalyticsProperties;
                foxtrot = verify.bind(report)();
                backup = mike;
                verify = copyDataProperties(backup, foxtrot);
                verify = report.getMediaSessionId;
                yankee = verify.bind(report)();
                verify = 'media_session_id';
                mike[verify] = yankee;
                yankee = report.parentMediaSessionId;
                verify = 'parent_media_session_id';
                mike[verify] = yankee;
                verify = 'raw_thermal_state';
                mike[verify] = offset;
                mike = golf.bind(options)(oscar, mike);
                mike = 32;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                oscar = 'MEDIA_SESSION_JOINED';
                mike['type'] = oscar;
                oscar = report.getMediaSessionId;
                oscar = oscar.bind(report)();
                mike['mediaSessionId'] = oscar;
                report = report.context;
                mike['context'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            report['value'] = golf;
            entity[61] = report;
            report = {};
            golf = '_handleMediaSinkWants';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00153: for(var _fun00154_ip = 0; ; ) switch(_fun00154_ip) {
 0:
                    zulu = argFoo;
                    entity = this;
                    mike = entity._connection;
                    oscar = entity.logger;
                    report = oscar.info;
                    tango = global;
                    options = tango.JSON;
                    golf = options.stringify;
                    options = golf.bind(options)(zulu);
                    tango = tango.HermesInternal;
                    golf = tango.concat;
                    tango = 'Remote media sink wants: ';
                    tango = golf.bind(tango)(options);
                    tango = report.bind(oscar)(tango);
                    entity['_remoteVideoSinkWants'] = zulu;
                    entity = null;
                    if(!(entity != mike)) { _fun00154_ip = 92; continue _fun00153 }
 81:
                    entity = mike.setRemoteVideoSinkWants;
                    entity = entity.bind(mike)(zulu);
 92:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[62] = report;
            report = {};
            golf = '_handleCodeVersion';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                mike = this;
                entity = argFoo;
                mike['voiceVersion'] = entity;
                entity = argBar;
                mike['rtcWorkerVersion'] = entity;
                entity = undefined;
                return entity;
            };
            report['value'] = golf;
            entity[63] = report;
            report = {};
            golf = '_handleKeyframeInterval';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00155: for(var _fun00156_ip = 0; ; ) switch(_fun00156_ip) {
 0:
                    entity = this;
                    zulu = entity._connection;
                    tango = null;
                    if(!(tango != zulu)) { _fun00156_ip = 25; continue _fun00155 }
 15:
                    mike = entity.protocol;
                    if(!(tango == mike)) { _fun00156_ip = 55; continue _fun00155 }
 25:
                    report = entity.logger;
                    tango = report.warn;
                    mike = entity.protocol;
                    entity = 'Cannot set keyframe interval on connection with protocol:';
                    entity = tango.bind(report)(entity, mike);
                    _fun00156_ip = 71; continue _fun00155;
 55:
                    mike = zulu.setKeyframeInterval;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
 71:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[64] = report;
            report = {};
            golf = '_handleBandwidthEstimationExperiment';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00157: for(var _fun00158_ip = 0; ; ) switch(_fun00158_ip) {
 0:
                    report = argFoo;
                    zulu = this;
                    zulu['_bandwidthEstimationExperiment'] = report;
                    tango = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 54;
                    mike = mike[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(mike);
                    mike = tango.getMediaEngineExperiments;
                    tango = mike.bind(tango)(report);
                    mike = null;
                    report = mike !== tango;
                    if(!report) { _fun00158_ip = 68; continue _fun00157 }
 57:
                    golf = tango.length;
                    oscar = 0;
                    report = oscar !== golf;
 68:
                    if(!report) { _fun00158_ip = 94; continue _fun00157 }
 71:
                    zulu = zulu._connection;
                    if(!(mike != zulu)) { _fun00158_ip = 94; continue _fun00157 }
 81:
                    mike = zulu.setBandwidthEstimationExperiments;
                    mike = mike.bind(zulu)(tango);
 94:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[65] = report;
            report = {};
            golf = '_trackSecureFrameTransition';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                oscar = this;
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                entity = 18;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.track;
                mike = _closure1_slot18;
                zulu = mike.SECURE_FRAMES_TRANSITION;
                mike = {};
                golf = oscar._getAnalyticsProperties;
                verify = golf.bind(oscar)();
                offset = mike;
                golf = copyDataProperties(offset, verify);
                golf = oscar.getMediaSessionId;
                options = golf.bind(oscar)();
                golf = 'media_session_id';
                mike[golf] = options;
                options = oscar.parentMediaSessionId;
                golf = 'parent_media_session_id';
                mike[golf] = options;
                golf = oscar.userId;
                oscar = 'sender_user_id';
                mike[oscar] = golf;
                golf = argFoo;
                oscar = 'transition_id';
                mike[oscar] = golf;
                golf = argBar;
                oscar = 'protocol_version';
                mike[oscar] = golf;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            report['value'] = golf;
            entity[66] = report;
            report = {};
            golf = '_handleSecureFramesInit';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00159: for(var _fun00160_ip = 0; ; ) switch(_fun00160_ip) {
 0:
                    oscar = argFoo;
                    mike = this;
                    var _closure3_slot0 = mike;
                    var _closure3_slot1 = oscar;
                    report = 0;
                    if(!(!(oscar > report))) { _fun00160_ip = 54; continue _fun00159 }
 22:
                    tango = mike._connection;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00160_ip = 141; continue _fun00159 }
 34:
                    zulu = tango.prepareSecureFramesTransition;
                    entity = function() {
                        _fun00161: for(var _fun00162_ip = 0; ; ) switch(_fun00162_ip) {
 0:
                            mike = _closure3_slot1;
                            zulu = 0;
                            if(!(mike > zulu)) { _fun00162_ip = 33; continue _fun00161 }
 13:
                            report = _closure3_slot0;
                            tango = report._trackSecureFrameTransition;
                            mike = _closure3_slot1;
                            mike = tango.bind(report)(zulu, mike);
 33:
                            entity = _closure3_slot0;
                            mike = entity._connection;
                            entity = null;
                            if(!(entity != mike)) { _fun00162_ip = 60; continue _fun00161 }
 49:
                            entity = mike.executeSecureFramesTransition;
                            entity = entity.bind(mike)(zulu);
 60:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(report, oscar, entity);
                    _fun00160_ip = 141; continue _fun00159;
 54:
                    tango = mike.logger;
                    zulu = tango.info;
                    entity = global;
                    entity = entity.HermesInternal;
                    report = entity.concat;
                    entity = 'DAVE protocol init with protocol version: ';
                    entity = report.bind(entity)(oscar);
                    entity = zulu.bind(tango)(entity);
                    report = mike._connection;
                    entity = null;
                    if(!(entity != report)) { _fun00160_ip = 131; continue _fun00159 }
 106:
                    tango = report.prepareSecureFramesEpoch;
                    zulu = mike.trueChannelId;
                    entity = '1';
                    entity = tango.bind(report)(entity, oscar, zulu);
 131:
                    entity = mike._sendMLSKeyPackage;
                    entity = entity.bind(mike)();
 141:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[67] = report;
            report = {};
            golf = '_handleSecureFramesRosterChange';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                report = this;
                var _closure3_slot0 = report;
                tango = new Array(0);
                var _closure3_slot1 = tango;
                mike = global;
                oscar = mike.Object;
                zulu = oscar.entries;
                mike = argFoo;
                zulu = zulu.bind(oscar)(mike);
                mike = zulu.forEach;
                entity = function(argFoo) {
                    _fun00163: for(var _fun00164_ip = 0; ; ) switch(_fun00164_ip) {
 0:
                        report = argFoo;
                        mike = report[Symbol.iterator];
                        report = mike().next;
                        oscar = report().value;
                        zulu = mike;
                        entity = undefined;
                        zulu = zulu === entity;
                        tango = undefined;
                        if(zulu) { _fun00164_ip = 27; continue _fun00163 }
 24:
                        tango = oscar;
 27:
                        oscar = undefined;
                        if(zulu) { _fun00164_ip = 57; continue _fun00163 }
 32:
                        golf = report().value;
                        report = mike;
                        report = report === entity;
                        oscar = undefined;
                        zulu = report;
                        if(report) { _fun00164_ip = 57; continue _fun00163 }
 51:
                        oscar = golf;
                        zulu = report;
 57:
                        if(zulu) { _fun00164_ip = 63; continue _fun00163 }
 60:
                        mike.return();
 63:
                        report = _closure3_slot1;
                        zulu = report.push;
                        zulu = zulu.bind(report)(tango);
                        zulu = null;
                        if(!(zulu != oscar)) { _fun00164_ip = 121; continue _fun00163 }
 86:
                        report = oscar.byteLength;
                        zulu = 0;
                        if(!(zulu !== report)) { _fun00164_ip = 121; continue _fun00163 }
 98:
                        zulu = _closure3_slot0;
                        report = zulu._secureFramesRosterMap;
                        zulu = report.set;
                        zulu = zulu.bind(report)(tango, oscar);
                        _fun00164_ip = 141; continue _fun00163;
 121:
                        mike = _closure3_slot0;
                        zulu = mike._secureFramesRosterMap;
                        mike = zulu.delete;
                        mike = mike.bind(zulu)(tango);
 141:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                zulu = report.emit;
                oscar = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 35;
                mike = mike[entity];
                entity = undefined;
                mike = oscar.bind(entity)(mike);
                mike = mike.RTCConnectionEvent;
                mike = mike.RosterMapUpdate;
                mike = zulu.bind(report)(mike, tango);
                return entity;
            };
            report['value'] = golf;
            entity[68] = report;
            report = {};
            golf = '_handleSecureFramesPrepareTransition';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00165: for(var _fun00166_ip = 0; ; ) switch(_fun00166_ip) {
 0:
                    report = argFoo;
                    tango = argBar;
                    mike = this;
                    var _closure3_slot0 = mike;
                    var _closure3_slot1 = report;
                    var _closure3_slot2 = tango;
                    golf = mike.logger;
                    oscar = golf.info;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    verify = zulu.concat;
                    options = 'Preparing DAVE protocol transition: ';
                    zulu = ', protocol version: ';
                    zulu = verify.bind(options)(report, zulu, tango);
                    zulu = oscar.bind(golf)(zulu);
                    zulu = mike._connection;
                    mike = null;
                    if(!(mike != zulu)) { _fun00166_ip = 101; continue _fun00165 }
 83:
                    mike = zulu.prepareSecureFramesTransition;
                    entity = function() {
                        tango = _closure3_slot0;
                        mike = tango._maybeSendSecureFramesTransitionReady;
                        zulu = _closure3_slot1;
                        mike = mike.bind(tango)(zulu);
                        mike = tango._trackSecureFrameTransition;
                        entity = _closure3_slot2;
                        entity = mike.bind(tango)(zulu, entity);
                        entity = undefined;
                        return entity;
                    };
                    entity = mike.bind(zulu)(report, tango, entity);
 101:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[69] = report;
            report = {};
            golf = '_handleSecureFramesPrepareEpoch';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00167: for(var _fun00168_ip = 0; ; ) switch(_fun00168_ip) {
 0:
                    zulu = argFoo;
                    oscar = argBar;
                    mike = this;
                    report = mike.logger;
                    tango = report.info;
                    entity = global;
                    entity = entity.HermesInternal;
                    options = entity.concat;
                    golf = 'Preparing DAVE protocol epoch: ';
                    entity = ', protocol version: ';
                    entity = options.bind(golf)(zulu, entity, oscar);
                    entity = tango.bind(report)(entity);
                    entity = zulu.toString;
                    zulu = entity.bind(zulu)();
                    report = mike._connection;
                    entity = null;
                    if(!(entity != report)) { _fun00168_ip = 97; continue _fun00167 }
 78:
                    tango = report.prepareSecureFramesEpoch;
                    entity = mike.trueChannelId;
                    entity = tango.bind(report)(zulu, oscar, entity);
 97:
                    entity = '1';
                    if(!(entity === zulu)) { _fun00168_ip = 117; continue _fun00167 }
 107:
                    entity = mike._sendMLSKeyPackage;
                    entity = entity.bind(mike)();
 117:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[70] = report;
            report = {};
            golf = '_sendMLSKeyPackage';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00169: for(var _fun00170_ip = 0; ; ) switch(_fun00170_ip) {
 0:
                    mike = this;
                    var _closure3_slot0 = mike;
                    zulu = mike._connection;
                    mike = null;
                    if(!(mike != zulu)) { _fun00170_ip = 37; continue _fun00169 }
 21:
                    mike = zulu.getMLSKeyPackage;
                    entity = function(argFoo) {
                        _fun00171: for(var _fun00172_ip = 0; ; ) switch(_fun00172_ip) {
 0:
                            entity = _closure3_slot0;
                            tango = entity.logger;
                            zulu = tango.info;
                            mike = 'Got MLS key package, sending to RTC server';
                            mike = zulu.bind(tango)(mike);
                            zulu = entity._socket;
                            entity = null;
                            if(!(entity != zulu)) { _fun00172_ip = 57; continue _fun00171 }
 41:
                            mike = zulu.sendMLSKeyPackage;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
 57:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
 37:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[71] = report;
            report = {};
            golf = '_maybeSendSecureFramesTransitionReady';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00173: for(var _fun00174_ip = 0; ; ) switch(_fun00174_ip) {
 0:
                    zulu = argFoo;
                    entity = this;
                    mike = 0;
                    if(!(mike !== zulu)) { _fun00174_ip = 77; continue _fun00173 }
 12:
                    report = entity.logger;
                    tango = report.info;
                    mike = global;
                    mike = mike.HermesInternal;
                    oscar = mike.concat;
                    mike = 'Sending DAVE protocol ready for transition ID ';
                    mike = oscar.bind(mike)(zulu);
                    mike = tango.bind(report)(mike);
                    mike = entity._socket;
                    entity = null;
                    if(!(entity != mike)) { _fun00174_ip = 77; continue _fun00173 }
 64:
                    entity = mike.secureFramesReadyForTransition;
                    entity = entity.bind(mike)(zulu);
 77:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[72] = report;
            report = {};
            golf = '_handleSecureFramesExecuteTransition';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00175: for(var _fun00176_ip = 0; ; ) switch(_fun00176_ip) {
 0:
                    zulu = argFoo;
                    entity = this;
                    report = entity.logger;
                    tango = report.info;
                    mike = global;
                    mike = mike.HermesInternal;
                    oscar = mike.concat;
                    mike = 'Executing DAVE protocol transition: ';
                    mike = oscar.bind(mike)(zulu);
                    mike = tango.bind(report)(mike);
                    mike = entity._connection;
                    entity = null;
                    if(!(entity != mike)) { _fun00176_ip = 69; continue _fun00175 }
 58:
                    entity = mike.executeSecureFramesTransition;
                    entity = entity.bind(mike)(zulu);
 69:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[73] = report;
            report = {};
            golf = '_handleMLSExternalSenderPackage';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00177: for(var _fun00178_ip = 0; ; ) switch(_fun00178_ip) {
 0:
                    entity = this;
                    tango = entity.logger;
                    zulu = tango.info;
                    mike = 'Received MLS external sender package';
                    mike = zulu.bind(tango)(mike);
                    zulu = entity._connection;
                    entity = null;
                    if(!(entity != zulu)) { _fun00178_ip = 51; continue _fun00177 }
 37:
                    mike = zulu.updateMLSExternalSender;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
 51:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[74] = report;
            report = {};
            golf = '_handleMLSProposals';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00179: for(var _fun00180_ip = 0; ; ) switch(_fun00180_ip) {
 0:
                    mike = this;
                    var _closure3_slot0 = mike;
                    zulu = argFoo;
                    var _closure3_slot1 = zulu;
                    report = mike.logger;
                    tango = report.info;
                    zulu = 'Received MLS proposals';
                    zulu = tango.bind(report)(zulu);
                    tango = mike._connection;
                    mike = null;
                    if(!(mike != tango)) { _fun00180_ip = 70; continue _fun00179 }
 50:
                    zulu = tango.processMLSProposals;
                    mike = argBar;
                    entity = function(argFoo) {
                        mike = _closure3_slot0;
                        tango = mike.logger;
                        zulu = tango.info;
                        mike = 'Sending MLS commit welcome message';
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure3_slot1;
                        mike = zulu.sendMLSCommitWelcome;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike, entity);
 70:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[75] = report;
            report = {};
            golf = '_handleMLSPrepareCommitTransition';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00181: for(var _fun00182_ip = 0; ; ) switch(_fun00182_ip) {
 0:
                    report = argFoo;
                    mike = this;
                    var _closure3_slot0 = mike;
                    var _closure3_slot1 = report;
                    oscar = mike.logger;
                    tango = oscar.info;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    golf = zulu.concat;
                    zulu = 'Received MLS commit for transition ID ';
                    zulu = golf.bind(zulu)(report);
                    zulu = tango.bind(oscar)(zulu);
                    tango = mike._connection;
                    mike = null;
                    if(!(mike != tango)) { _fun00182_ip = 89; continue _fun00181 }
 68:
                    zulu = tango.prepareMLSCommitTransition;
                    mike = argBar;
                    entity = function(argFoo, argBar, argBaz) {
                        _fun00183: for(var _fun00184_ip = 0; ; ) switch(_fun00184_ip) {
 0:
                            tango = argBar;
                            mike = _closure3_slot0;
                            entity = argFoo;
                            if(entity) { _fun00184_ip = 83; continue _fun00183 }
 16:
                            golf = mike.logger;
                            oscar = golf.warn;
                            report = _closure3_slot1;
                            entity = global;
                            entity = entity.HermesInternal;
                            options = entity.concat;
                            entity = 'Failed to process MLS commit for transition ID ';
                            entity = options.bind(entity)(report);
                            entity = oscar.bind(golf)(entity);
                            entity = mike._flagMLSInvalidCommitWelcome;
                            entity = entity.bind(mike)(report);
                            entity = mike._handleSecureFramesInit;
                            entity = entity.bind(mike)(tango);
                            _fun00184_ip = 134; continue _fun00183;
 83:
                            report = mike._handleSecureFramesRosterChange;
                            entity = argBaz;
                            entity = report.bind(mike)(entity);
                            entity = mike._maybeSendSecureFramesTransitionReady;
                            zulu = _closure3_slot1;
                            entity = entity.bind(mike)(zulu);
                            entity = mike._trackSecureFrameTransition;
                            entity = entity.bind(mike)(zulu, tango);
                            entity = mike._recoverMLSFailures;
                            entity = entity.bind(mike)();
 134:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(report, mike, entity);
 89:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[76] = report;
            report = {};
            golf = '_handleMLSWelcome';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00185: for(var _fun00186_ip = 0; ; ) switch(_fun00186_ip) {
 0:
                    report = argFoo;
                    mike = this;
                    var _closure3_slot0 = mike;
                    var _closure3_slot1 = report;
                    oscar = mike.logger;
                    tango = oscar.info;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    golf = zulu.concat;
                    zulu = 'Received MLS welcome for transition ID ';
                    zulu = golf.bind(zulu)(report);
                    zulu = tango.bind(oscar)(zulu);
                    tango = mike._connection;
                    mike = null;
                    if(!(mike != tango)) { _fun00186_ip = 89; continue _fun00185 }
 68:
                    zulu = tango.processMLSWelcome;
                    mike = argBar;
                    entity = function(argFoo, argBar, argBaz) {
                        _fun00187: for(var _fun00188_ip = 0; ; ) switch(_fun00188_ip) {
 0:
                            mike = _closure3_slot0;
                            entity = argFoo;
                            if(entity) { _fun00188_ip = 40; continue _fun00187 }
 13:
                            tango = mike._flagMLSInvalidCommitWelcome;
                            entity = _closure3_slot1;
                            entity = tango.bind(mike)(entity);
                            entity = mike._sendMLSKeyPackage;
                            entity = entity.bind(mike)();
                            _fun00188_ip = 94; continue _fun00187;
 40:
                            tango = mike._handleSecureFramesRosterChange;
                            entity = argBaz;
                            entity = tango.bind(mike)(entity);
                            entity = mike._maybeSendSecureFramesTransitionReady;
                            tango = _closure3_slot1;
                            entity = entity.bind(mike)(tango);
                            zulu = mike._trackSecureFrameTransition;
                            entity = argBar;
                            entity = zulu.bind(mike)(tango, entity);
                            entity = mike._recoverMLSFailures;
                            entity = entity.bind(mike)();
 94:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(report, mike, entity);
 89:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[77] = report;
            report = {};
            golf = 'getMLSPairwiseFingerprint';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz) { // Original name: value
                _fun00189: for(var _fun00190_ip = 0; ; ) switch(_fun00190_ip) {
 0:
                    entity = this;
                    report = entity._connection;
                    entity = null;
                    if(!(entity != report)) { _fun00190_ip = 37; continue _fun00189 }
 15:
                    tango = report.getMLSPairwiseFingerprint;
                    zulu = argFoo;
                    mike = argBar;
                    entity = argBaz;
                    entity = tango.bind(report)(zulu, mike, entity);
 37:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[78] = report;
            report = {};
            golf = '_flagMLSInvalidCommitWelcome';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00191: for(var _fun00192_ip = 0; ; ) switch(_fun00192_ip) {
 0:
                    zulu = argFoo;
                    entity = this;
                    report = entity.logger;
                    tango = report.info;
                    mike = global;
                    mike = mike.HermesInternal;
                    oscar = mike.concat;
                    mike = 'Flagging invalid MLS commit/welcome for transition ID ';
                    mike = oscar.bind(mike)(zulu);
                    mike = tango.bind(report)(mike);
                    mike = entity._socket;
                    entity = null;
                    if(!(entity != mike)) { _fun00192_ip = 71; continue _fun00191 }
 58:
                    entity = mike.flagMLSInvalidCommitWelcome;
                    entity = entity.bind(mike)(zulu);
 71:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[79] = report;
            report = {};
            golf = '_handleMLSFailure';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00193: for(var _fun00194_ip = 0; ; ) switch(_fun00194_ip) {
 0:
                    tango = argFoo;
                    zulu = argBar;
                    mike = this;
                    entity = global;
                    entity = entity.HermesInternal;
                    oscar = entity.concat;
                    report = '';
                    entity = ':';
                    oscar = oscar.bind(report)(tango, entity, zulu);
                    entity = mike._mlsFailures;
                    entity = oscar in entity;
                    options = 0;
                    if(!entity) { _fun00194_ip = 69; continue _fun00193 }
 52:
                    entity = mike._mlsFailures;
                    report = entity[oscar];
                    entity = 2;
                    options = report[entity];
 69:
                    report = mike._mlsFailures;
                    entity = new Array(3);
                    entity[0] = tango;
                    entity[1] = zulu;
                    golf = 1;
                    golf = options + golf;
                    entity[2] = golf;
                    report[oscar] = entity;
                    entity = mike._alertMLSFailureDebouced;
                    entity = entity.bind(mike)(tango, zulu);
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[80] = report;
            report = {};
            golf = '_recoverMLSFailures';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00195: for(var _fun00196_ip = 0; ; ) switch(_fun00196_ip) {
 0:
                    offset = this;
                    entity = global;
                    zulu = entity.Object;
                    mike = zulu.entries;
                    entity = offset._mlsFailures;
                    verify = mike.bind(zulu)(entity);
                    entity = verify.length;
                    options = 0;
                    mike = options < entity;
                    golf = 2;
                    entity = undefined;
                    report = 1;
                    tango = 3;
                    zulu = 0;
                    if(!mike) { _fun00196_ip = 169; continue _fun00195 }
 58:
                    mike = verify[zulu];
                    yankee = _closure1_slot4;
                    mike = yankee.bind(entity)(mike, golf);
                    romeo = mike[options];
                    mike = mike[report];
                    mike = yankee.bind(entity)(mike, tango);
                    sizing = mike[options];
                    kilo = mike[report];
                    backup = mike[golf];
                    mike = offset._mlsFailuresRecovered;
                    mike = romeo in mike;
                    foxtrot = 0;
                    if(!mike) { _fun00196_ip = 127; continue _fun00195 }
 113:
                    mike = offset._mlsFailuresRecovered;
                    mike = mike[romeo];
                    foxtrot = mike[golf];
 127:
                    yankee = offset._mlsFailuresRecovered;
                    mike = new Array(3);
                    mike[0] = sizing;
                    mike[1] = kilo;
                    foxtrot = foxtrot + backup;
                    mike[2] = foxtrot;
                    yankee[romeo] = mike;
                    zulu = zulu + 1;
                    mike = verify.length;
                    if(zulu < mike) { _fun00196_ip = 58; continue _fun00195 }
 169:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[81] = report;
            report = {};
            golf = '_trackMLSFailures';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00197: for(var _fun00198_ip = 0; ; ) switch(_fun00198_ip) {
 0:
                    echo = this;
                    zulu = global;
                    report = zulu.Object;
                    tango = report.values;
                    mike = echo._mlsFailuresRecovered;
                    report = tango.bind(report)(mike);
                    tango = report.map;
                    mike = function(argFoo) {
                        _fun00199: for(var _fun00200_ip = 0; ; ) switch(_fun00200_ip) {
 0:
                            oscar = argFoo;
                            entity = oscar[Symbol.iterator];
                            oscar = entity().next;
                            mike = oscar().value;
                            zulu = entity;
                            options = undefined;
                            report = zulu === options;
                            tango = undefined;
                            if(report) { _fun00200_ip = 27; continue _fun00199 }
 24:
                            tango = mike;
 27:
                            zulu = undefined;
                            if(report) { _fun00200_ip = 57; continue _fun00199 }
 32:
                            golf = oscar().value;
                            mike = entity;
                            mike = mike === options;
                            zulu = undefined;
                            report = mike;
                            if(mike) { _fun00200_ip = 57; continue _fun00199 }
 51:
                            zulu = golf;
                            report = mike;
 57:
                            mike = undefined;
                            if(report) { _fun00200_ip = 87; continue _fun00199 }
 62:
                            golf = oscar().value;
                            oscar = entity;
                            oscar = oscar === options;
                            mike = undefined;
                            report = oscar;
                            if(oscar) { _fun00200_ip = 87; continue _fun00199 }
 81:
                            mike = golf;
                            report = oscar;
 87:
                            if(report) { _fun00200_ip = 93; continue _fun00199 }
 90:
                            entity.return();
 93:
                            entity = new Array(4);
                            entity[0] = tango;
                            entity[1] = zulu;
                            entity[2] = mike;
                            mike = true;
                            entity[3] = mike;
                            return entity;
                        }
                    };
                    target = tango.bind(report)(mike);
                    result = new Array(0);
                    output = 0;
                    status = result;
                    papa = 0;
                    papa = arraySpread(status, target, papa);
                    report = zulu.Object;
                    tango = report.values;
                    zulu = echo._mlsFailures;
                    tango = tango.bind(report)(zulu);
                    zulu = tango.map;
                    entity = function(argFoo) {
                        _fun00201: for(var _fun00202_ip = 0; ; ) switch(_fun00202_ip) {
 0:
                            oscar = argFoo;
                            entity = oscar[Symbol.iterator];
                            oscar = entity().next;
                            mike = oscar().value;
                            zulu = entity;
                            options = undefined;
                            report = zulu === options;
                            tango = undefined;
                            if(report) { _fun00202_ip = 27; continue _fun00201 }
 24:
                            tango = mike;
 27:
                            zulu = undefined;
                            if(report) { _fun00202_ip = 57; continue _fun00201 }
 32:
                            golf = oscar().value;
                            mike = entity;
                            mike = mike === options;
                            zulu = undefined;
                            report = mike;
                            if(mike) { _fun00202_ip = 57; continue _fun00201 }
 51:
                            zulu = golf;
                            report = mike;
 57:
                            mike = undefined;
                            if(report) { _fun00202_ip = 87; continue _fun00201 }
 62:
                            golf = oscar().value;
                            oscar = entity;
                            oscar = oscar === options;
                            mike = undefined;
                            report = oscar;
                            if(oscar) { _fun00202_ip = 87; continue _fun00201 }
 81:
                            mike = golf;
                            report = oscar;
 87:
                            if(report) { _fun00202_ip = 93; continue _fun00201 }
 90:
                            entity.return();
 93:
                            entity = new Array(4);
                            entity[0] = tango;
                            entity[1] = zulu;
                            entity[2] = mike;
                            mike = false;
                            entity[3] = mike;
                            return entity;
                        }
                    };
                    target = zulu.bind(tango)(entity);
                    status = result;
                    entity = arraySpread(status, target, papa);
                    entity = echo.getMediaSessionId;
                    sizing = entity.bind(echo)();
                    entity = result.length;
                    mike = output < entity;
                    entity = undefined;
                    backup = 4;
                    foxtrot = 1;
                    romeo = 2;
                    yankee = 3;
                    offset = 18;
                    verify = 'media_session_id';
                    options = 'parent_media_session_id';
                    golf = 'failure_source';
                    oscar = 'failure_reason';
                    report = 'failure_count';
                    tango = 'failure_was_recovered';
                    zulu = 0;
                    if(!mike) { _fun00198_ip = 320; continue _fun00197 }
 182:
                    update = _closure1_slot4;
                    mike = result[zulu];
                    mike = update.bind(entity)(mike, backup);
                    record = mike[output];
                    config = mike[foxtrot];
                    sequence = mike[romeo];
                    vacuum = mike[yankee];
                    update = _closure1_slot1;
                    mike = _closure1_slot3;
                    mike = mike[offset];
                    control = update.bind(entity)(mike);
                    source = control.track;
                    mike = _closure1_slot18;
                    update = mike.MLS_FAILURES;
                    mike = {};
                    context = echo._getAnalyticsProperties;
                    target = context.bind(echo)();
                    status = mike;
                    context = copyDataProperties(status, target);
                    mike[verify] = sizing;
                    context = echo.parentMediaSessionId;
                    mike[options] = context;
                    mike[golf] = record;
                    mike[oscar] = config;
                    mike[report] = sequence;
                    mike[tango] = vacuum;
                    mike = source.bind(control)(update, mike);
                    zulu = zulu + 1;
                    mike = result.length;
                    if(zulu < mike) { _fun00198_ip = 182; continue _fun00197 }
 320:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[82] = report;
            report = {};
            golf = '_alertMLSFailure';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00203: for(var _fun00204_ip = 0; ; ) switch(_fun00204_ip) {
 0:
                    zulu = _closure1_slot17;
                    mike = zulu.getCurrentUser;
                    report = mike.bind(zulu)();
                    zulu = null;
                    mike = zulu != report;
                    if(!mike) { _fun00204_ip = 35; continue _fun00203 }
 25:
                    tango = report.isStaff;
                    mike = tango.bind(report)();
 35:
                    if(mike) { _fun00204_ip = 58; continue _fun00203 }
 38:
                    zulu = zulu != report;
                    if(!zulu) { _fun00204_ip = 55; continue _fun00203 }
 45:
                    tango = report.isStaffPersonal;
                    zulu = tango.bind(report)();
 55:
                    mike = zulu;
 58:
                    if(!mike) { _fun00204_ip = 163; continue _fun00203 }
 61:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 55;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.show;
                    entity = {};
                    tango = global;
                    report = tango.HermesInternal;
                    golf = report.concat;
                    oscar = 'MLS Error in ';
                    report = argFoo;
                    report = golf.bind(oscar)(report);
                    entity['title'] = report;
                    tango = tango.HermesInternal;
                    golf = tango.concat;
                    oscar = 'Error: ';
                    report = argBar;
                    tango = '! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!';
                    tango = golf.bind(oscar)(report, tango);
                    entity['body'] = tango;
                    entity = mike.bind(zulu)(entity);
 163:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[83] = report;
            report = {};
            golf = '_getExtraConnectionOptions';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = {};
                return entity;
            };
            report['value'] = golf;
            entity[84] = report;
            report = {};
            golf = 'shouldReportPeriodicStats';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00205: for(var _fun00206_ip = 0; ; ) switch(_fun00206_ip) {
 0:
                    mike = this;
                    entity = argFoo;
                    zulu = entity.length;
                    entity = 10;
                    if(!(!(zulu > entity))) { _fun00206_ip = 89; continue _fun00205 }
 18:
                    entity = mike.getMediaSessionId;
                    tango = entity.bind(mike)();
                    entity = null;
                    entity = entity != tango;
                    if(!entity) { _fun00206_ip = 87; continue _fun00205 }
 37:
                    report = _closure1_slot1;
                    zulu = _closure1_slot3;
                    mike = 56;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.v3;
                    zulu = mike.bind(zulu)(tango);
                    mike = 100;
                    zulu = zulu % mike;
                    mike = 5;
                    entity = zulu <= mike;
 87:
                    return entity;
 89:
                    entity = false;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[85] = report;
            report = {};
            golf = 'getInputDeviceName';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00207: for(var _fun00208_ip = 0; ; ) switch(_fun00208_ip) {
 0:
                    zulu = _closure1_slot13;
                    entity = zulu.getInputDeviceId;
                    mike = entity.bind(zulu)();
                    entity = zulu.getInputDevices;
                    entity = entity.bind(zulu)();
                    mike = entity[mike];
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun00208_ip = 47; continue _fun00207 }
 42:
                    entity = mike.name;
 47:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[86] = report;
            report = {};
            golf = 'getOutputDeviceName';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00209: for(var _fun00210_ip = 0; ; ) switch(_fun00210_ip) {
 0:
                    zulu = _closure1_slot13;
                    entity = zulu.getOutputDeviceId;
                    mike = entity.bind(zulu)();
                    entity = zulu.getOutputDevices;
                    entity = entity.bind(zulu)();
                    mike = entity[mike];
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun00210_ip = 47; continue _fun00209 }
 42:
                    entity = mike.name;
 47:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[87] = report;
            report = {};
            golf = 'getVideoDeviceName';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00211: for(var _fun00212_ip = 0; ; ) switch(_fun00212_ip) {
 0:
                    zulu = _closure1_slot13;
                    entity = zulu.getVideoDeviceId;
                    mike = entity.bind(zulu)();
                    entity = zulu.getVideoDevices;
                    entity = entity.bind(zulu)();
                    mike = entity[mike];
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun00212_ip = 47; continue _fun00211 }
 42:
                    entity = mike.name;
 47:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[88] = report;
            report = {};
            golf = 'getGoLiveSource';
            report['key'] = golf;
            oscar = function() { // Original name: value
                mike = _closure1_slot13;
                entity = mike.getGoLiveSource;
                entity = entity.bind(mike)();
                return entity;
            };
            report['value'] = oscar;
            entity[89] = report;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        };
        mike = mike.bind(entity)(tango);
        tango = 58;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'lib/RTCConnection.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();