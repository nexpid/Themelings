// discord_common/js/packages/media-engine/native/Connection.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot38;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot38;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot37 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot40;
            entity = entity.bind(zulu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00008_ip = 71; continue _fun00007 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
            _fun00010_ip = 74; continue _fun00009;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot40 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: makeRTXSSRC
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = argFoo;
            entity = null;
            tango = entity != zulu;
            entity = 0;
            if(!tango) { _fun00012_ip = 27; continue _fun00011 }
 14:
            entity = 0;
            if(!(entity !== zulu)) { _fun00012_ip = 27; continue _fun00011 }
 20:
            mike = 1;
            entity = zulu + mike;
 27:
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    tango = 0;
    options = oscar[tango];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 7;
    options = oscar[options];
    options = report.bind(entity)(options);
    verify = options.StatsFilter;
    var _closure1_slot10 = verify;
    verify = options.ExperimentFlags;
    var _closure1_slot11 = verify;
    verify = options.DESKTOP_BITRATE_ENHANCED;
    var _closure1_slot12 = verify;
    verify = options.DESKTOP_BITRATE;
    var _closure1_slot13 = verify;
    verify = options.MEDIA_SINK_WANTS_PROPERTIES;
    var _closure1_slot14 = verify;
    verify = options.MediaTypes;
    var _closure1_slot15 = verify;
    verify = options.RTCPMessageTypes;
    var _closure1_slot16 = verify;
    verify = options.SIMULCAST_HQ_QUALITY;
    var _closure1_slot17 = verify;
    options = options.SIMULCAST_LQ_QUALITY;
    var _closure1_slot18 = options;
    options = 8;
    options = oscar[options];
    options = report.bind(entity)(options);
    verify = options.NATIVE_MODE_VALUES;
    var _closure1_slot19 = verify;
    verify = options.InputModes;
    var _closure1_slot20 = verify;
    verify = options.ConnectionStates;
    var _closure1_slot21 = verify;
    verify = options.Codecs;
    var _closure1_slot22 = verify;
    verify = options.MediaEngineContextTypes;
    var _closure1_slot23 = verify;
    verify = options.SpeakingFlags;
    var _closure1_slot24 = verify;
    verify = options.ResolutionTypes;
    var _closure1_slot25 = verify;
    verify = options.NativeFeatures;
    var _closure1_slot26 = verify;
    verify = options.NoiseCancellerError;
    var _closure1_slot27 = verify;
    verify = options.DEFAULT_VOLUME;
    var _closure1_slot28 = verify;
    verify = options.DEFAULT_STREAM_VOLUME;
    var _closure1_slot29 = verify;
    verify = options.DEFAULT_SOUNDSHARE_VOICE_BITRATE;
    var _closure1_slot30 = verify;
    verify = options.DEFAULT_CALL_BITRATE;
    var _closure1_slot31 = verify;
    verify = options.DEFAULT_CALL_MIN_BITRATE;
    var _closure1_slot32 = verify;
    verify = options.DEFAULT_CALL_MAX_BITRATE;
    var _closure1_slot33 = verify;
    verify = options.DEFAULT_PRIORITY_SPEAKER_DUCKING;
    var _closure1_slot34 = verify;
    options = options.PING_INTERVAL;
    var _closure1_slot35 = options;
    var _closure1_slot36 = tango;
    tango = 22;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        report = function(argFoo, argBar, argBaz) { // Original name: Connection
            golf = argFoo;
            options = this;
            entity = _closure1_slot4;
            oscar = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(options, oscar);
            zulu = _closure1_slot39;
            entity = new Array(2);
            entity[0] = golf;
            verify = argBar;
            entity[1] = verify;
            entity = zulu.bind(report)(options, oscar, entity);
            var _closure3_slot0 = entity;
            zulu = _closure1_slot36;
            oscar = parseFloat(zulu);
            zulu = oscar + 1;
            _closure1_slot36 = zulu;
            zulu = 'Native-';
            zulu = zulu + oscar;
            entity['mediaEngineConnectionId'] = zulu;
            options = false;
            entity['selfVideo'] = options;
            entity['forceAudioNormal'] = options;
            entity['forceAudioPriority'] = options;
            zulu = new Array(0);
            entity['codecs'] = zulu;
            entity['videoEncoderFallbackPending'] = options;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            verify = 9;
            offset = oscar[verify];
            yankee = zulu.bind(report)(offset);
            offset = yankee.getVoiceEngine;
            offset = offset.bind(yankee)();
            offset = offset.DegradationPreference;
            offset = offset.MAINTAIN_FRAMERATE;
            entity['desktopDegradationPreference'] = offset;
            offset = oscar[verify];
            yankee = zulu.bind(report)(offset);
            offset = yankee.getVoiceEngine;
            offset = offset.bind(yankee)();
            offset = offset.DegradationPreference;
            offset = offset.DISABLED;
            entity['sourceDesktopDegradationPreference'] = offset;
            verify = oscar[verify];
            offset = zulu.bind(report)(verify);
            verify = offset.getVoiceEngine;
            verify = verify.bind(offset)();
            verify = verify.DegradationPreference;
            verify = verify.BALANCED;
            entity['videoDegradationPreference'] = verify;
            verify = {};
            entity['localPans'] = verify;
            verify = {};
            entity['remoteAudioSSRCs'] = verify;
            verify = {};
            entity['remoteVideoSSRCs'] = verify;
            tango = _closure1_slot20;
            tango = tango.VOICE_ACTIVITY;
            entity['inputMode'] = tango;
            tango = -40;
            entity['vadThreshold'] = tango;
            tango = true;
            entity['vadAutoThreshold'] = tango;
            entity['vadUseKrisp'] = tango;
            verify = 5;
            entity['vadLeading'] = verify;
            verify = 25;
            entity['vadTrailing'] = verify;
            verify = 20;
            entity['pttReleaseDelay'] = verify;
            entity['soundshareActive'] = options;
            verify = null;
            entity['soundshareId'] = verify;
            entity['soundshareSentSpeakingEvent'] = options;
            entity['echoCancellation'] = tango;
            entity['noiseSuppression'] = tango;
            entity['automaticGainControl'] = tango;
            entity['noiseCancellation'] = options;
            entity['voiceFilters'] = options;
            entity['experimentalEncoders'] = options;
            entity['hardwareH264'] = tango;
            entity['softwareH264'] = tango;
            verify = 0.5;
            entity['attenuationFactor'] = verify;
            entity['attenuateWhileSpeakingSelf'] = options;
            entity['attenuateWhileSpeakingOthers'] = tango;
            entity['qos'] = tango;
            options = 0;
            entity['minimumJitterBufferLevel'] = options;
            verify = 100;
            entity['postponeDecodeLevel'] = verify;
            verify = 60000;
            entity['reconnectInterval'] = verify;
            entity['keyframeInterval'] = options;
            entity['clipsKeyFrameInterval'] = options;
            verify = '';
            entity['videoQualityMeasurement'] = verify;
            entity['videoEncoderExperiments'] = verify;
            entity['numFastUdpReconnects'] = options;
            entity['simulcastLQDisabledSsrc'] = report;
            options = function(argFoo, argBar) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argBar;
                    zulu = _closure1_slot24;
                    zulu = zulu.NONE;
                    report = 'boolean';
                    zulu = typeof entity;
                    tango = entity;
                    if(!(report === zulu)) { _fun00014_ip = 54; continue _fun00013 }
 30:
                    mike = _closure1_slot24;
                    if(entity) { _fun00014_ip = 45; continue _fun00013 }
 37:
                    entity = mike.NONE;
                    _fun00014_ip = 51; continue _fun00013;
 45:
                    entity = mike.VOICE;
 51:
                    tango = entity;
 54:
                    zulu = _closure3_slot0;
                    mike = zulu.handleSpeakingFlags;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity, tango);
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleSpeakingNative'] = options;
            options = function() {
                tango = _closure3_slot0;
                zulu = tango.emit;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                mike = report.bind(entity)(mike);
                mike = mike.BaseConnectionEvent;
                mike = mike.ToggleMuteFromNative;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['handleNativeMuteToggled'] = options;
            options = function(argFoo) {
                report = _closure3_slot0;
                tango = report.emit;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.BaseConnectionEvent;
                zulu = mike.NativeMuteChanged;
                mike = argFoo;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['handleNativeMuteChanged'] = options;
            options = function(argFoo, argBar) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    offset = argFoo;
                    report = argBar;
                    entity = _closure3_slot0;
                    mike = entity.localSpeakingFlags;
                    mike[offset] = report;
                    entity = entity.userId;
                    if(!(offset !== entity)) { _fun00016_ip = 48; continue _fun00015 }
 32:
                    entity = _closure3_slot0;
                    entity = entity.remoteAudioSSRCs;
                    verify = entity[offset];
                    _fun00016_ip = 58; continue _fun00015;
 48:
                    entity = _closure3_slot0;
                    verify = entity.audioSSRC;
 58:
                    options = _closure3_slot0;
                    golf = options.emit;
                    yankee = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscar = 10;
                    tango = entity[oscar];
                    entity = undefined;
                    tango = yankee.bind(entity)(tango);
                    tango = tango.BaseConnectionEvent;
                    kilo = tango.Speaking;
                    sizing = options;
                    backup = offset;
                    foxtrot = report;
                    romeo = verify;
                    tango = sizing[golf](kilo, backup, foxtrot, romeo, yankee);
                    tango = _closure1_slot24;
                    tango = tango.SOUNDSHARE;
                    report = report & tango;
                    tango = 0;
                    tango = tango != report;
                    if(!tango) { _fun00016_ip = 160; continue _fun00015 }
 144:
                    report = _closure3_slot0;
                    golf = report.soundshareSentSpeakingEvent;
                    report = false;
                    tango = report === golf;
 160:
                    if(!tango) { _fun00016_ip = 215; continue _fun00015 }
 163:
                    zulu = _closure3_slot0;
                    tango = zulu.emit;
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    mike = report.bind(entity)(mike);
                    mike = mike.BaseConnectionEvent;
                    mike = mike.SoundshareSpeaking;
                    mike = tango.bind(zulu)(mike);
                    mike = true;
                    zulu['soundshareSentSpeakingEvent'] = mike;
 215:
                    return entity;
                }
            };
            entity['handleSpeakingFlags'] = options;
            options = function() {
                tango = _closure3_slot0;
                zulu = tango.emit;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                mike = report.bind(entity)(mike);
                mike = mike.BaseConnectionEvent;
                mike = mike.SpeakingWhileMuted;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['handleSpeakingWhileMuted'] = options;
            options = function(argFoo) {
                report = _closure3_slot0;
                tango = report.emit;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.BaseConnectionEvent;
                zulu = mike.Ping;
                mike = argFoo;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['handlePing'] = options;
            options = function(argFoo, argBar, argBaz, argCorge) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    mike = argCorge;
                    oscar = _closure3_slot0;
                    report = oscar.emit;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 10;
                    zulu = zulu[entity];
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.BaseConnectionEvent;
                    tango = zulu.PingTimeout;
                    zulu = 0;
                    golf = mike > zulu;
                    zulu = 4000;
                    if(!golf) { _fun00018_ip = 71; continue _fun00017 }
 68:
                    zulu = mike;
 71:
                    mike = argBaz;
                    mike = report.bind(oscar)(tango, mike, zulu);
                    return entity;
                }
            };
            entity['handlePingTimeout'] = options;
            options = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    golf = argFoo;
                    var _closure4_slot0 = golf;
                    zulu = _closure3_slot0;
                    zulu = zulu.videoEncoderFallbackPending;
                    if(zulu) { _fun00020_ip = 177; continue _fun00019 }
 28:
                    mike = _closure3_slot0;
                    report = mike.logger;
                    tango = report.info;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    oscar = zulu.concat;
                    zulu = 'Falling back from current video encoder: ';
                    zulu = oscar.bind(zulu)(golf);
                    zulu = tango.bind(report)(zulu);
                    report = mike.codecs;
                    tango = report.map;
                    zulu = function(argFoo) {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            entity = argFoo;
                            zulu = _closure4_slot0;
                            mike = entity.name;
                            mike = zulu === mike;
                            if(mike) { _fun00022_ip = 55; continue _fun00021 }
 22:
                            report = entity.name;
                            zulu = 'AV1';
                            zulu = zulu === report;
                            if(!zulu) { _fun00022_ip = 52; continue _fun00021 }
 38:
                            report = _closure4_slot0;
                            tango = 'AV1X';
                            zulu = tango === report;
 52:
                            mike = zulu;
 55:
                            if(!mike) { _fun00022_ip = 66; continue _fun00021 }
 58:
                            mike = false;
                            entity['encode'] = mike;
 66:
                            return entity;
                        }
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.filter;
                    entity = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            mike = argFoo;
                            zulu = mike.type;
                            entity = 'video';
                            entity = entity === zulu;
                            if(!entity) { _fun00024_ip = 31; continue _fun00023 }
 19:
                            tango = mike.encode;
                            zulu = false;
                            entity = zulu === tango;
 31:
                            if(!entity) { _fun00024_ip = 46; continue _fun00023 }
 34:
                            zulu = mike.decode;
                            mike = false;
                            entity = mike === zulu;
 46:
                            entity = !entity;
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(entity);
                    mike['codecs'] = entity;
                    tango = mike.emit;
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 10;
                    zulu = zulu[entity];
                    entity = undefined;
                    entity = report.bind(entity)(zulu);
                    entity = entity.BaseConnectionEvent;
                    zulu = entity.VideoEncoderFallback;
                    entity = mike.codecs;
                    entity = tango.bind(mike)(zulu, entity);
                    entity = true;
                    mike['videoEncoderFallbackPending'] = entity;
 177:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleVideoEncoderFallback'] = options;
            options = function(argFoo, argBar) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    zulu = _closure1_slot16;
                    tango = zulu.REMB;
                    zulu = argFoo;
                    if(!(zulu === tango)) { _fun00026_ip = 95; continue _fun00025 }
 22:
                    zulu = _closure3_slot0;
                    zulu = zulu.context;
                    mike = _closure1_slot23;
                    mike = mike.STREAM;
                    if(!(zulu === mike)) { _fun00026_ip = 95; continue _fun00025 }
 48:
                    mike = global;
                    tango = mike.JSON;
                    zulu = tango.parse;
                    mike = argBar;
                    mike = zulu.bind(tango)(mike);
                    var _closure4_slot0 = mike;
                    zulu = mike.ssrcs;
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            yankee = argFoo;
                            var _closure5_slot0 = yankee;
                            mike = _closure3_slot0;
                            tango = mike.videoStreamParameters;
                            mike = tango.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.ssrc;
                                entity = _closure5_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            golf = mike.bind(tango)(entity);
                            entity = undefined;
                            if(!(entity !== golf)) { _fun00028_ip = 380; continue _fun00027 }
 46:
                            mike = golf.quality;
                            options = null;
                            oscar = options != mike;
                            report = 0;
                            if(!oscar) { _fun00028_ip = 66; continue _fun00027 }
 63:
                            report = mike;
 66:
                            mike = 100;
                            if(!(report < mike)) { _fun00028_ip = 380; continue _fun00027 }
 76:
                            report = golf.type;
                            mike = 'video';
                            if(!(mike === report)) { _fun00028_ip = 380; continue _fun00027 }
 92:
                            mike = global;
                            verify = mike.Math;
                            oscar = verify.floor;
                            report = _closure4_slot0;
                            offset = report.bitrate;
                            report = 0.9;
                            report = report * offset;
                            offset = oscar.bind(verify)(report);
                            oscar = _closure1_slot1;
                            verify = _closure1_slot2;
                            report = 11;
                            report = verify[report];
                            verify = oscar.bind(entity)(report);
                            report = golf.minBitrate;
                            romeo = options != report;
                            oscar = 0;
                            if(!romeo) { _fun00028_ip = 179; continue _fun00027 }
 176:
                            oscar = report;
 179:
                            romeo = golf.maxBitrate;
                            report = offset;
                            if(!(options != romeo)) { _fun00028_ip = 195; continue _fun00027 }
 192:
                            report = romeo;
 195:
                            report = verify.bind(entity)(offset, oscar, report);
                            oscar = golf.targetBitrate;
                            options = options != oscar;
                            tango = 0;
                            if(!options) { _fun00028_ip = 220; continue _fun00027 }
 217:
                            tango = oscar;
 220:
                            verify = mike.Math;
                            options = verify.abs;
                            oscar = report - tango;
                            oscar = options.bind(verify)(oscar);
                            options = report + tango;
                            tango = 2;
                            tango = options / tango;
                            oscar = oscar / tango;
                            tango = 0.1;
                            tango = oscar > tango;
                            if(tango) { _fun00028_ip = 283; continue _fun00027 }
 273:
                            oscar = golf.targetBitrate;
                            tango = entity === oscar;
 283:
                            if(!tango) { _fun00028_ip = 380; continue _fun00027 }
 286:
                            zulu = _closure3_slot0;
                            oscar = zulu.logger;
                            tango = oscar.info;
                            sizing = golf.targetBitrate;
                            mike = mike.HermesInternal;
                            verify = mike.concat;
                            echo = 'Updating target bitrate for SSRC ';
                            output = ' from ';
                            kilo = ' to ';
                            result = yankee;
                            backup = report;
                            mike = echo[verify](result, output, sizing, kilo, backup, foxtrot);
                            mike = tango.bind(oscar)(mike);
                            tango = zulu.videoQualityManager;
                            mike = tango.setGoLiveSimulcastLQTargetBitrate;
                            mike = mike.bind(tango)(report);
                            mike = zulu.updateVideoQuality;
                            mike = mike.bind(zulu)();
 380:
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
 95:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleRTCPMessage'] = options;
            options = function(argFoo, argBar, argBaz, argCorge) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    offset = argFoo;
                    verify = argBar;
                    tango = argBaz;
                    options = argCorge;
                    report = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    yankee = report.bind(entity)(mike);
                    golf = _closure3_slot0;
                    report = golf.videoStreamParameters;
                    report = yankee.bind(entity)(report);
                    var _closure4_slot0 = report;
                    golf = golf.userId;
                    if(!(offset !== golf)) { _fun00030_ip = 208; continue _fun00029 }
 73:
                    foxtrot = 0;
                    if(!(verify > foxtrot)) { _fun00030_ip = 324; continue _fun00029 }
 82:
                    golf = _closure3_slot0;
                    golf = golf.remoteVideoSSRCs;
                    golf = golf[offset];
                    if(!(entity === golf)) { _fun00030_ip = 127; continue _fun00029 }
 100:
                    golf = _closure3_slot0;
                    yankee = golf.remoteVideoSSRCs;
                    golf = new Array(1);
                    golf[0] = verify;
                    yankee[offset] = golf;
                    _fun00030_ip = 324; continue _fun00029;
 127:
                    golf = _closure3_slot0;
                    golf = golf.remoteVideoSSRCs;
                    yankee = golf[offset];
                    golf = yankee.includes;
                    golf = golf.bind(yankee)(verify);
                    if(golf) { _fun00030_ip = 324; continue _fun00029 }
 157:
                    golf = _closure3_slot0;
                    yankee = golf.remoteVideoSSRCs;
                    golf = golf.remoteVideoSSRCs;
                    echo = golf[offset];
                    golf = new Array(1);
                    update = golf;
                    result = 0;
                    foxtrot = arraySpread(update, echo, result);
                    golf[foxtrot] = verify;
                    romeo = 1;
                    romeo = foxtrot + romeo;
                    yankee[offset] = golf;
                    _fun00030_ip = 324; continue _fun00029;
 208:
                    golf = null;
                    if(!(golf != options)) { _fun00030_ip = 246; continue _fun00029 }
 214:
                    golf = global;
                    yankee = golf.Array;
                    golf = yankee.isArray;
                    golf = golf.bind(yankee)(options);
                    if(!golf) { _fun00030_ip = 246; continue _fun00029 }
 235:
                    yankee = options.length;
                    golf = 0;
                    if(!(!(yankee > golf))) { _fun00030_ip = 309; continue _fun00029 }
 246:
                    golf = 0;
                    if(!(!(verify > golf))) { _fun00030_ip = 266; continue _fun00029 }
 252:
                    romeo = report[golf];
                    yankee = false;
                    romeo['active'] = yankee;
                    _fun00030_ip = 324; continue _fun00029;
 266:
                    romeo = report[golf];
                    yankee = true;
                    romeo['active'] = yankee;
                    yankee = report[golf];
                    yankee['ssrc'] = verify;
                    yankee = report[golf];
                    golf = _closure1_slot41;
                    golf = golf.bind(entity)(verify);
                    yankee['rtxSsrc'] = golf;
                    _fun00030_ip = 324; continue _fun00029;
 309:
                    golf = options.forEach;
                    oscar = function(argFoo) {
                        mike = argFoo;
                        var _closure5_slot0 = mike;
                        zulu = _closure4_slot0;
                        mike = zulu.forEach;
                        entity = function(argFoo, argBar) {
                            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                                report = argFoo;
                                zulu = report.rid;
                                mike = _closure5_slot0;
                                mike = mike.rid;
                                if(!(zulu === mike)) { _fun00032_ip = 135; continue _fun00031 }
 26:
                                mike = _closure3_slot0;
                                zulu = mike.simulcastLQDisabledSsrc;
                                mike = _closure5_slot0;
                                mike = mike.ssrc;
                                tango = zulu !== mike;
                                if(!tango) { _fun00032_ip = 66; continue _fun00031 }
 56:
                                mike = _closure5_slot0;
                                tango = mike.active;
 66:
                                zulu = _closure4_slot0;
                                mike = {};
                                options = mike;
                                golf = report;
                                report = copyDataProperties(options, golf);
                                entity = _closure5_slot0;
                                oscar = entity.ssrc;
                                report = 'ssrc';
                                mike[report] = oscar;
                                report = entity.rtxSsrc;
                                entity = 'rtxSsrc';
                                mike[entity] = report;
                                entity = 'active';
                                mike[entity] = tango;
                                entity = argBar;
                                zulu[entity] = mike;
 135:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    oscar = golf.bind(options)(oscar);
 324:
                    options = _closure3_slot0;
                    options['videoStreamParameters'] = report;
                    golf = options.emit;
                    oscar = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 10;
                    report = yankee[report];
                    report = oscar.bind(entity)(report);
                    report = report.BaseConnectionEvent;
                    oscar = report.Video;
                    romeo = null;
                    yankee = romeo != tango;
                    report = null;
                    if(!yankee) { _fun00030_ip = 396; continue _fun00029 }
 383:
                    yankee = '';
                    report = null;
                    if(!(yankee !== tango)) { _fun00030_ip = 396; continue _fun00029 }
 393:
                    report = tango;
 396:
                    tango = _closure3_slot0;
                    tango = tango.userId;
                    if(!(offset !== tango)) { _fun00030_ip = 425; continue _fun00029 }
 409:
                    tango = _closure3_slot0;
                    tango = tango.remoteAudioSSRCs;
                    tango = tango[offset];
                    _fun00030_ip = 435; continue _fun00029;
 425:
                    yankee = _closure3_slot0;
                    tango = yankee.audioSSRC;
 435:
                    zulu = _closure1_slot41;
                    kilo = zulu.bind(entity)(verify);
                    mike = _closure3_slot0;
                    backup = mike.videoStreamParameters;
                    source = options;
                    update = oscar;
                    echo = offset;
                    result = report;
                    output = tango;
                    sizing = verify;
                    mike = source[golf](update, echo, result, output, sizing, kilo, backup, foxtrot);
                    return entity;
                }
            };
            entity['handleVideo'] = options;
            options = function(argFoo, argBar, argBaz) {
                golf = _closure3_slot0;
                oscar = golf.emit;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.BaseConnectionEvent;
                yankee = mike.FirstFrame;
                offset = argFoo;
                verify = argBar;
                options = argBaz;
                romeo = golf;
                mike = romeo[oscar](yankee, offset, verify, options, golf);
                return entity;
            };
            entity['handleFirstFrame'] = options;
            options = function(argFoo) {
                report = _closure3_slot0;
                tango = report.emit;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.BaseConnectionEvent;
                zulu = mike.Silence;
                mike = argFoo;
                mike = !mike;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['handleNoInput'] = options;
            options = function() {
                tango = _closure3_slot0;
                zulu = tango.emit;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                mike = report.bind(entity)(mike);
                mike = mike.BaseConnectionEvent;
                mike = mike.DesktopSourceEnd;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['handleDesktopSourceEnded'] = options;
            options = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    if(!entity) { _fun00034_ip = 122; continue _fun00033 }
 6:
                    zulu = _closure3_slot0;
                    entity = true;
                    zulu['soundshareActive'] = entity;
                    report = zulu.conn;
                    tango = report.setTransportOptions;
                    mike = {};
                    entity = global;
                    verify = entity.Math;
                    options = verify.max;
                    golf = _closure1_slot30;
                    oscar = zulu.voiceBitrate;
                    oscar = options.bind(verify)(golf, oscar);
                    mike['encodingVoiceBitRate'] = oscar;
                    mike = tango.bind(report)(mike);
                    mike = zulu.emit;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 10;
                    tango = tango[entity];
                    entity = undefined;
                    entity = report.bind(entity)(tango);
                    entity = entity.BaseConnectionEvent;
                    entity = entity.SoundshareAttached;
                    entity = mike.bind(zulu)(entity);
 122:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleSoundshare'] = options;
            options = function(argFoo, argBar, argBaz) {
                report = _closure3_slot0;
                tango = report.emit;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.BaseConnectionEvent;
                zulu = mike.SoundshareFailed;
                mike = {};
                oscar = argFoo;
                mike['failureCode'] = oscar;
                oscar = argBar;
                mike['failureReason'] = oscar;
                oscar = argBaz;
                mike['willRetry'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['handleSoundshareFailed'] = options;
            options = function() {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    mike = _closure3_slot0;
                    zulu = false;
                    mike['soundshareActive'] = zulu;
                    mike = mike.destroyed;
                    if(mike) { _fun00036_ip = 58; continue _fun00035 }
 24:
                    tango = _closure3_slot0;
                    zulu = tango.conn;
                    mike = zulu.setTransportOptions;
                    entity = {};
                    tango = tango.voiceBitrate;
                    entity['encodingVoiceBitRate'] = tango;
                    entity = mike.bind(zulu)(entity);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleSoundshareEnded'] = options;
            options = function(argFoo) {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    report = argFoo;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    mike = mike.BaseConnectionEvent;
                    mike = mike.ConnectionStateChange;
                    if(!(report === mike)) { _fun00038_ip = 69; continue _fun00037 }
 44:
                    tango = _closure3_slot0;
                    zulu = tango.emit;
                    mike = tango.connectionState;
                    mike = zulu.bind(tango)(report, mike);
 69:
                    return entity;
                }
            };
            entity['handleNewListenerNative'] = options;
            options = function(argFoo) {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    mike = argFoo;
                    zulu = _closure3_slot0;
                    oscar = zulu.connectionState;
                    report = _closure1_slot21;
                    report = report.DISCONNECTED;
                    if(!(oscar === report)) { _fun00040_ip = 96; continue _fun00039 }
 35:
                    options = _closure3_slot0;
                    golf = options.off;
                    verify = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 10;
                    oscar = oscar[report];
                    report = undefined;
                    report = verify.bind(report)(oscar);
                    report = report.BaseConnectionEvent;
                    oscar = report.Stats;
                    report = options.handleStats;
                    report = golf.bind(options)(oscar, report);
                    _fun00040_ip = 976; continue _fun00039;
 96:
                    verify = null;
                    if(!(verify != mike)) { _fun00040_ip = 976; continue _fun00039 }
 105:
                    report = _closure3_slot0;
                    report = report.stats;
                    if(!(verify != report)) { _fun00040_ip = 966; continue _fun00039 }
 122:
                    oscar = _closure1_slot1;
                    yankee = _closure1_slot2;
                    report = 13;
                    golf = yankee[report];
                    options = undefined;
                    backup = oscar.bind(options)(golf);
                    golf = mike.rtp;
                    foxtrot = golf.outbound;
                    offset = 0;
                    romeo = function(argFoo, argBar) {
                        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                            entity = argFoo;
                            tango = argBar;
                            oscar = entity.lost;
                            golf = tango.packetsLost;
                            report = null;
                            options = report != golf;
                            mike = 0;
                            if(!options) { _fun00042_ip = 32; continue _fun00041 }
 29:
                            mike = golf;
 32:
                            mike = oscar + mike;
                            entity['lost'] = mike;
                            mike = entity.sent;
                            tango = tango.packetsSent;
                            report = report != tango;
                            zulu = 0;
                            if(!report) { _fun00042_ip = 66; continue _fun00041 }
 63:
                            zulu = tango;
 66:
                            mike = mike + zulu;
                            entity['sent'] = mike;
                            return entity;
                        }
                    };
                    golf = {'lost': 0, 'sent': 0};
                    golf = backup.bind(options)(foxtrot, romeo, golf);
                    report = yankee[report];
                    romeo = oscar.bind(options)(report);
                    report = _closure3_slot0;
                    report = report.stats;
                    report = report.rtp;
                    yankee = report.outbound;
                    oscar = function(argFoo, argBar) {
                        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                            entity = argFoo;
                            tango = argBar;
                            oscar = entity.lost;
                            golf = tango.packetsLost;
                            report = null;
                            options = report != golf;
                            mike = 0;
                            if(!options) { _fun00044_ip = 32; continue _fun00043 }
 29:
                            mike = golf;
 32:
                            mike = oscar + mike;
                            entity['lost'] = mike;
                            mike = entity.sent;
                            tango = tango.packetsSent;
                            report = report != tango;
                            zulu = 0;
                            if(!report) { _fun00044_ip = 66; continue _fun00043 }
 63:
                            zulu = tango;
 66:
                            mike = mike + zulu;
                            entity['sent'] = mike;
                            return entity;
                        }
                    };
                    report = {'lost': 0, 'sent': 0};
                    oscar = romeo.bind(options)(yankee, oscar, report);
                    yankee = golf.sent;
                    report = oscar.sent;
                    report = yankee - report;
                    golf = golf.lost;
                    oscar = oscar.lost;
                    oscar = golf - oscar;
                    if(!(offset !== report)) { _fun00040_ip = 374; continue _fun00039 }
 269:
                    if(!(report > offset)) { _fun00040_ip = 422; continue _fun00039 }
 276:
                    if(!(oscar >= offset)) { _fun00040_ip = 422; continue _fun00039 }
 283:
                    yankee = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    golf = 11;
                    golf = foxtrot[golf];
                    golf = yankee.bind(options)(golf);
                    report = report + oscar;
                    oscar = oscar / report;
                    report = 1;
                    romeo = golf.bind(options)(oscar, offset, report);
                    yankee = _closure3_slot0;
                    golf = yankee.emit;
                    oscar = _closure1_slot0;
                    report = 10;
                    report = foxtrot[report];
                    report = oscar.bind(options)(report);
                    report = report.BaseConnectionEvent;
                    oscar = report.OutboundLossRate;
                    report = 100;
                    report = report * romeo;
                    report = golf.bind(yankee)(oscar, report);
                    _fun00040_ip = 422; continue _fun00039;
 374:
                    golf = _closure3_slot0;
                    oscar = golf.emit;
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    report = 10;
                    report = romeo[report];
                    report = yankee.bind(options)(report);
                    report = report.BaseConnectionEvent;
                    report = report.OutboundLossRate;
                    report = oscar.bind(golf)(report, offset);
 422:
                    report = mike.rtp;
                    golf = report.outbound;
                    oscar = golf.filter;
                    report = function(argFoo) {
                        entity = argFoo;
                        mike = entity.type;
                        entity = 'audio';
                        entity = entity === mike;
                        return entity;
                    };
                    report = oscar.bind(golf)(report);
                    oscar = report[offset];
                    report = _closure3_slot0;
                    report = report.stats;
                    report = report.rtp;
                    golf = report.outbound;
                    report = golf.filter;
                    tango = function(argFoo) {
                        entity = argFoo;
                        mike = entity.type;
                        entity = 'audio';
                        entity = entity === mike;
                        return entity;
                    };
                    tango = report.bind(golf)(tango);
                    tango = tango[offset];
                    if(!(verify != oscar)) { _fun00040_ip = 966; continue _fun00039 }
 501:
                    if(!(verify != tango)) { _fun00040_ip = 966; continue _fun00039 }
 508:
                    report = oscar.framesCaptured;
                    if(!(verify != report)) { _fun00040_ip = 966; continue _fun00039 }
 521:
                    report = tango.framesCaptured;
                    if(!(verify != report)) { _fun00040_ip = 966; continue _fun00039 }
 534:
                    golf = oscar.framesCaptured;
                    report = tango.framesCaptured;
                    report = golf - report;
                    golf = oscar.noiseCancellerFrames;
                    yankee = report;
                    if(!(verify != golf)) { _fun00040_ip = 597; continue _fun00039 }
 563:
                    golf = tango.noiseCancellerFrames;
                    romeo = verify != golf;
                    golf = 0;
                    if(!romeo) { _fun00040_ip = 594; continue _fun00039 }
 578:
                    foxtrot = oscar.noiseCancellerFrames;
                    romeo = tango.noiseCancellerFrames;
                    golf = foxtrot - romeo;
 594:
                    yankee = golf;
 597:
                    golf = _closure3_slot0;
                    golf = golf.noiseCancellation;
                    if(!golf) { _fun00040_ip = 798; continue _fun00039 }
 613:
                    golf = 50;
                    if(!(yankee > golf)) { _fun00040_ip = 798; continue _fun00039 }
 623:
                    golf = oscar.noiseCancellerProcessTime;
                    if(!(verify != golf)) { _fun00040_ip = 798; continue _fun00039 }
 636:
                    golf = tango.noiseCancellerProcessTime;
                    if(!(verify != golf)) { _fun00040_ip = 798; continue _fun00039 }
 649:
                    romeo = oscar.noiseCancellerProcessTime;
                    golf = tango.noiseCancellerProcessTime;
                    golf = romeo - golf;
                    romeo = golf / yankee;
                    yankee = 8;
                    if(!(!(romeo > yankee))) { _fun00040_ip = 740; continue _fun00039 }
 676:
                    if(!(offset === golf)) { _fun00040_ip = 798; continue _fun00039 }
 680:
                    romeo = _closure3_slot0;
                    yankee = romeo.emit;
                    offset = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    golf = 10;
                    golf = foxtrot[golf];
                    golf = offset.bind(options)(golf);
                    golf = golf.BaseConnectionEvent;
                    offset = golf.NoiseCancellationError;
                    golf = _closure1_slot27;
                    golf = golf.FAILED;
                    golf = yankee.bind(romeo)(offset, golf);
                    _fun00040_ip = 798; continue _fun00039;
 740:
                    romeo = _closure3_slot0;
                    yankee = romeo.emit;
                    offset = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    golf = 10;
                    golf = foxtrot[golf];
                    golf = offset.bind(options)(golf);
                    golf = golf.BaseConnectionEvent;
                    offset = golf.NoiseCancellationError;
                    golf = _closure1_slot27;
                    golf = golf.CPU_OVERUSE;
                    golf = yankee.bind(romeo)(offset, golf);
 798:
                    golf = _closure3_slot0;
                    offset = golf.inputMode;
                    golf = _closure1_slot20;
                    golf = golf.VOICE_ACTIVITY;
                    if(!(offset === golf)) { _fun00040_ip = 966; continue _fun00039 }
 825:
                    golf = _closure3_slot0;
                    golf = golf.vadAutoThreshold;
                    if(!golf) { _fun00040_ip = 966; continue _fun00039 }
 841:
                    golf = _closure3_slot0;
                    golf = golf.vadUseKrisp;
                    if(!golf) { _fun00040_ip = 966; continue _fun00039 }
 854:
                    golf = 50;
                    if(!(report > golf)) { _fun00040_ip = 966; continue _fun00039 }
 861:
                    golf = oscar.voiceActivityDetectorProcessTime;
                    if(!(verify != golf)) { _fun00040_ip = 966; continue _fun00039 }
 871:
                    golf = tango.voiceActivityDetectorProcessTime;
                    if(!(verify != golf)) { _fun00040_ip = 966; continue _fun00039 }
 881:
                    oscar = oscar.voiceActivityDetectorProcessTime;
                    tango = tango.voiceActivityDetectorProcessTime;
                    tango = oscar - tango;
                    report = tango / report;
                    tango = 4;
                    if(!(report > tango)) { _fun00040_ip = 966; continue _fun00039 }
 908:
                    oscar = _closure3_slot0;
                    report = oscar.emit;
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    tango = 10;
                    tango = verify[tango];
                    tango = golf.bind(options)(tango);
                    tango = tango.BaseConnectionEvent;
                    tango = tango.VoiceActivityDetectorError;
                    zulu = _closure1_slot27;
                    zulu = zulu.VAD_CPU_OVERUSE;
                    zulu = report.bind(oscar)(tango, zulu);
 966:
                    entity = _closure3_slot0;
                    entity['stats'] = mike;
 976:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleStats'] = options;
            mike = function(argFoo, argBar) {
                oscar = _closure3_slot0;
                report = oscar.emit;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.BaseConnectionEvent;
                tango = mike.MLSFailure;
                zulu = argFoo;
                mike = argBar;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            entity['handleMLSFailure'] = mike;
            mike = argBaz;
            entity['videoSupported'] = mike;
            mike = 14;
            mike = oscar[mike];
            mike = zulu.bind(report)(mike);
            report = mike.Logger;
            mike = global;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            zulu = 'Connection(';
            mike = ')';
            backup = oscar.bind(zulu)(golf, mike);
            zulu = report.prototype;
            zulu = Object.create(zulu, {constructor: {value: report}});
            kilo = zulu;
            mike = new kilo[report](backup, foxtrot);
            mike = mike instanceof Object ? mike : zulu;
            entity['logger'] = mike;
            zulu = entity.logger;
            mike = zulu.enableNativeLogger;
            mike = mike.bind(zulu)(tango);
            return entity;
        };
        var _closure2_slot0 = report;
        zulu = _closure1_slot9;
        tango = undefined;
        mike = argFoo;
        mike = zulu.bind(tango)(report, mike);
        zulu = _closure1_slot5;
        entity = {};
        mike = 'initialize';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                options = argFoo;
                report = this;
                var _closure3_slot0 = report;
                var _closure3_slot1 = options;
                tango = report.logger;
                zulu = tango.info;
                output = options.address;
                kilo = options.port;
                foxtrot = options.ssrc;
                entity = global;
                entity = entity.HermesInternal;
                verify = entity.concat;
                result = 'Creating connection to ';
                sizing = ':';
                backup = ' with audio ssrc: ';
                entity = result[verify](output, sizing, kilo, backup, foxtrot, romeo);
                entity = zulu.bind(tango)(entity);
                entity = options.ssrc;
                report['audioSSRC'] = entity;
                entity = options.streamUserId;
                report['streamUserId'] = entity;
                zulu = report.initializeStreamParameters;
                entity = options.streamParameters;
                entity = zulu.bind(report)(entity);
                tango = {};
                entity = _closure1_slot15;
                entity = entity.AUDIO;
                tango['type'] = entity;
                entity = report.audioSSRC;
                tango['ssrc'] = entity;
                entity = '';
                tango['rid'] = entity;
                entity = 64000;
                tango['maxBitrate'] = entity;
                oscar = report.context;
                entity = _closure1_slot23;
                entity = entity.STREAM;
                entity = oscar === entity;
                tango['soundshare'] = entity;
                entity = new Array(1);
                entity[0] = tango;
                sizing = report.videoStreamParameters;
                kilo = 1;
                output = entity;
                tango = arraySpread(output, sizing, kilo);
                options['streamParameters'] = entity;
                entity = report.context;
                options['context'] = entity;
                oscar = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 9;
                tango = tango[entity];
                entity = undefined;
                oscar = oscar.bind(entity)(tango);
                tango = oscar.getVoiceEngine;
                tango = tango.bind(oscar)();
                var _closure3_slot3 = tango;
                golf = tango.getCodecCapabilities;
                oscar = null;
                if(!(oscar == golf)) { _fun00046_ip = 297; continue _fun00045 }
 289:
                golf = tango.getSupportedVideoCodecs;
                _fun00046_ip = 303; continue _fun00045;
 297:
                golf = tango.getCodecCapabilities;
 303:
                var _closure3_slot4 = golf;
                golf = tango.createOwnStreamConnectionWithOptions;
                if(!(oscar == golf)) { _fun00046_ip = 395; continue _fun00045 }
 317:
                golf = tango.createOwnStreamConnection;
                if(!(oscar == golf)) { _fun00046_ip = 334; continue _fun00045 }
 327:
                golf = function(argFoo, argBar, argBaz) { // Original name: n
                    entity = argBar;
                    mike = _closure3_slot3;
                    verify = mike.VoiceConnection;
                    sizing = entity.ssrc;
                    backup = entity.address;
                    foxtrot = entity.port;
                    yankee = entity.experiments;
                    offset = entity.streamParameters;
                    entity = verify.prototype;
                    mike = Object.create(entity, {constructor: {value: verify}});
                    kilo = argFoo;
                    romeo = argBaz;
                    output = mike;
                    entity = new output[verify](sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify);
                    entity = entity instanceof Object ? entity : mike;
                    return entity;
                };
                _fun00046_ip = 446; continue _fun00045;
 334:
                offset = report.context;
                verify = _closure1_slot23;
                verify = verify.STREAM;
                if(!(offset === verify)) { _fun00046_ip = 368; continue _fun00045 }
 353:
                offset = report.streamUserId;
                verify = report.userId;
                if(!(offset !== verify)) { _fun00046_ip = 378; continue _fun00045 }
 368:
                verify = tango.createVoiceConnection;
                _fun00046_ip = 384; continue _fun00045;
 378:
                verify = tango.createOwnStreamConnection;
 384:
                var _closure3_slot5 = verify;
                golf = function(argFoo, argBar, argBaz) { // Original name: n
                    entity = argBar;
                    verify = _closure3_slot5;
                    sizing = entity.ssrc;
                    mike = _closure3_slot0;
                    kilo = mike.userId;
                    backup = entity.address;
                    foxtrot = entity.port;
                    yankee = entity.experiments;
                    offset = entity.streamParameters;
                    output = undefined;
                    romeo = argBaz;
                    entity = output[verify](sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify);
                    return entity;
                };
                _fun00046_ip = 446; continue _fun00045;
 395:
                verify = report.context;
                zulu = _closure1_slot23;
                zulu = zulu.STREAM;
                if(!(verify === zulu)) { _fun00046_ip = 429; continue _fun00045 }
 414:
                verify = report.streamUserId;
                zulu = report.userId;
                if(!(verify !== zulu)) { _fun00046_ip = 437; continue _fun00045 }
 429:
                zulu = tango.createVoiceConnectionWithOptions;
                _fun00046_ip = 443; continue _fun00045;
 437:
                zulu = tango.createOwnStreamConnectionWithOptions;
 443:
                golf = zulu;
 446:
                tango = report.userId;
                zulu = function(argFoo, argBar) {
                    _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                        tango = argFoo;
                        zulu = argBar;
                        report = _closure3_slot0;
                        report = report.destroyed;
                        if(report) { _fun00048_ip = 271; continue _fun00047 }
 27:
                        report = null;
                        if(!(report != tango)) { _fun00048_ip = 44; continue _fun00047 }
 33:
                        oscar = '';
                        if(!(oscar === tango)) { _fun00048_ip = 194; continue _fun00047 }
 44:
                        if(!(report != zulu)) { _fun00048_ip = 158; continue _fun00047 }
 48:
                        romeo = zulu.protocol;
                        var _closure4_slot0 = romeo;
                        yankee = zulu.address;
                        var _closure4_slot1 = yankee;
                        offset = zulu.port;
                        var _closure4_slot2 = offset;
                        zulu = _closure3_slot0;
                        oscar = zulu.logger;
                        report = oscar.info;
                        zulu = global;
                        zulu = zulu.HermesInternal;
                        verify = zulu.concat;
                        result = 'Connected with local address ';
                        sizing = ':';
                        backup = ' and protocol: ';
                        output = yankee;
                        kilo = offset;
                        foxtrot = romeo;
                        zulu = result[verify](output, sizing, kilo, backup, foxtrot, romeo);
                        zulu = report.bind(oscar)(zulu);
                        report = _closure3_slot4;
                        zulu = undefined;
                        mike = function(argFoo) {
                            yankee = argFoo;
                            golf = _closure3_slot0;
                            oscar = golf.logger;
                            report = oscar.info;
                            tango = global;
                            options = tango.JSON;
                            entity = options.stringify;
                            verify = entity.bind(options)(yankee);
                            entity = tango.HermesInternal;
                            options = entity.concat;
                            entity = 'Available codecs: ';
                            entity = options.bind(entity)(verify);
                            entity = report.bind(oscar)(entity);
                            verify = _closure1_slot0;
                            romeo = _closure1_slot2;
                            oscar = 15;
                            options = romeo[oscar];
                            entity = undefined;
                            foxtrot = verify.bind(entity)(options);
                            offset = foxtrot.getExperimentCodecs;
                            options = golf.experimentFlags;
                            offset = offset.bind(foxtrot)(options);
                            backup = golf.logger;
                            foxtrot = backup.info;
                            kilo = tango.JSON;
                            options = kilo.stringify;
                            sizing = options.bind(kilo)(offset);
                            options = tango.HermesInternal;
                            kilo = options.concat;
                            options = 'Experimental codecs: ';
                            options = kilo.bind(options)(sizing);
                            options = foxtrot.bind(backup)(options);
                            foxtrot = {'type': 'audio', 'name': null, 'priority': 1, 'payloadType': 120};
                            report = _closure1_slot22;
                            report = report.OPUS;
                            foxtrot['name'] = report;
                            output = 1;
                            report = new Array(1);
                            report[0] = foxtrot;
                            oscar = romeo[oscar];
                            verify = verify.bind(entity)(oscar);
                            oscar = verify.filterVideoCodecs;
                            offset = oscar.bind(verify)(yankee, offset);
                            verify = offset.map;
                            oscar = function(argFoo, argBar) {
                                mike = argFoo;
                                report = argBar;
                                entity = 2;
                                zulu = entity * report;
                                entity = 101;
                                tango = entity + zulu;
                                entity = {};
                                zulu = 'video';
                                entity['type'] = zulu;
                                zulu = mike.name;
                                entity['name'] = zulu;
                                zulu = 1;
                                report = report + zulu;
                                entity['priority'] = report;
                                entity['payloadType'] = tango;
                                zulu = tango + zulu;
                                entity['rtxPayloadType'] = zulu;
                                zulu = mike.encode;
                                entity['encode'] = zulu;
                                mike = mike.decode;
                                entity['decode'] = mike;
                                return entity;
                            };
                            result = verify.bind(offset)(oscar);
                            echo = report;
                            oscar = arraySpread(echo, result, output);
                            golf['codecs'] = report;
                            options = golf.logger;
                            oscar = options.info;
                            offset = golf.codecs;
                            verify = offset.filter;
                            report = function(argFoo) {
                                entity = argFoo;
                                mike = entity.type;
                                entity = 'audio';
                                entity = entity === mike;
                                return entity;
                            };
                            offset = verify.bind(offset)(report);
                            verify = offset.map;
                            report = function(argFoo) {
                                entity = argFoo;
                                entity = entity.name;
                                return entity;
                            };
                            offset = verify.bind(offset)(report);
                            report = tango.HermesInternal;
                            verify = report.concat;
                            report = 'Audio codecs: ';
                            report = verify.bind(report)(offset);
                            report = oscar.bind(options)(report);
                            oscar = golf.logger;
                            report = oscar.info;
                            verify = golf.codecs;
                            options = verify.filter;
                            golf = function(argFoo) {
                                entity = argFoo;
                                mike = entity.type;
                                entity = 'video';
                                entity = entity === mike;
                                return entity;
                            };
                            verify = options.bind(verify)(golf);
                            options = verify.map;
                            golf = function(argFoo) {
                                entity = argFoo;
                                zulu = entity.name;
                                mike = '[encode: ';
                                zulu = zulu + mike;
                                mike = entity.encode;
                                zulu = zulu + mike;
                                mike = entity.decode;
                                entity = ', decode: ';
                                entity = zulu + entity;
                                mike = entity + mike;
                                entity = ']';
                                entity = mike + entity;
                                return entity;
                            };
                            options = options.bind(verify)(golf);
                            tango = tango.HermesInternal;
                            golf = tango.concat;
                            tango = 'Video codecs: ';
                            tango = golf.bind(tango)(options);
                            tango = report.bind(oscar)(tango);
                            tango = _closure3_slot2;
                            zulu = tango.getEncryptionModes;
                            mike = function(argFoo) {
                                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                                    backup = argFoo;
                                    entity = _closure3_slot0;
                                    oscar = entity.logger;
                                    tango = oscar.info;
                                    zulu = global;
                                    mike = zulu.HermesInternal;
                                    golf = mike.concat;
                                    mike = 'Encryption modes: ';
                                    mike = golf.bind(mike)(backup);
                                    mike = tango.bind(oscar)(mike);
                                    oscar = _closure3_slot2;
                                    tango = oscar.setTransportOptions;
                                    mike = entity.getConnectionTransportOptions;
                                    mike = mike.bind(entity)();
                                    mike = tango.bind(oscar)(mike);
                                    tango = _closure3_slot2;
                                    mike = tango.setSelfMute;
                                    entity = entity.selfMute;
                                    if(entity) { _fun00050_ip = 122; continue _fun00049 }
 96:
                                    oscar = _closure3_slot0;
                                    golf = oscar.context;
                                    oscar = _closure1_slot23;
                                    oscar = oscar.STREAM;
                                    entity = golf === oscar;
 122:
                                    entity = mike.bind(tango)(entity);
                                    oscar = _closure3_slot2;
                                    tango = oscar.setSelfDeafen;
                                    entity = _closure3_slot0;
                                    mike = entity.selfDeaf;
                                    mike = tango.bind(oscar)(mike);
                                    tango = _closure3_slot2;
                                    mike = tango.setOnSpeakingCallback;
                                    entity = entity.handleSpeakingNative;
                                    entity = mike.bind(tango)(entity);
                                    entity = _closure3_slot2;
                                    entity = entity.setOnNativeMuteToggleCallback;
                                    mike = null;
                                    if(!(mike != entity)) { _fun00050_ip = 214; continue _fun00049 }
 189:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setOnNativeMuteToggleCallback;
                                    entity = _closure3_slot0;
                                    entity = entity.handleNativeMuteToggled;
                                    entity = tango.bind(oscar)(entity);
 214:
                                    entity = _closure3_slot2;
                                    entity = entity.setOnNativeMuteChangedCallback;
                                    if(!(mike != entity)) { _fun00050_ip = 253; continue _fun00049 }
 228:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setOnNativeMuteChangedCallback;
                                    entity = _closure3_slot0;
                                    entity = entity.handleNativeMuteChanged;
                                    entity = tango.bind(oscar)(entity);
 253:
                                    entity = _closure3_slot2;
                                    entity = entity.setOnSpeakingWhileMutedCallback;
                                    if(!(mike != entity)) { _fun00050_ip = 292; continue _fun00049 }
 267:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setOnSpeakingWhileMutedCallback;
                                    entity = _closure3_slot0;
                                    entity = entity.handleSpeakingWhileMuted;
                                    entity = tango.bind(oscar)(entity);
 292:
                                    entity = _closure3_slot2;
                                    entity = entity.setPingInterval;
                                    if(!(mike != entity)) { _fun00050_ip = 328; continue _fun00049 }
 306:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setPingInterval;
                                    entity = _closure1_slot35;
                                    entity = tango.bind(oscar)(entity);
 328:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setPingCallback;
                                    entity = _closure3_slot0;
                                    entity = entity.handlePing;
                                    entity = tango.bind(oscar)(entity);
                                    entity = _closure3_slot2;
                                    entity = entity.setPingTimeoutCallback;
                                    if(!(mike != entity)) { _fun00050_ip = 392; continue _fun00049 }
 367:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setPingTimeoutCallback;
                                    entity = _closure3_slot0;
                                    entity = entity.handlePingTimeout;
                                    entity = tango.bind(oscar)(entity);
 392:
                                    entity = _closure3_slot2;
                                    entity = entity.setOnVideoEncoderFallbackCallback;
                                    if(!(mike != entity)) { _fun00050_ip = 431; continue _fun00049 }
 406:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setOnVideoEncoderFallbackCallback;
                                    entity = _closure3_slot0;
                                    entity = entity.handleVideoEncoderFallback;
                                    entity = tango.bind(oscar)(entity);
 431:
                                    entity = _closure3_slot2;
                                    entity = entity.setOnRtcpMessageCallback;
                                    if(!(mike != entity)) { _fun00050_ip = 470; continue _fun00049 }
 445:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setOnRtcpMessageCallback;
                                    entity = _closure3_slot0;
                                    entity = entity.handleRTCPMessage;
                                    entity = tango.bind(oscar)(entity);
 470:
                                    golf = _closure3_slot3;
                                    oscar = golf.setTransportOptions;
                                    tango = {};
                                    entity = true;
                                    tango['builtInEchoCancellation'] = entity;
                                    entity = _closure3_slot0;
                                    options = entity.echoCancellation;
                                    tango['echoCancellation'] = options;
                                    options = entity.noiseSuppression;
                                    tango['noiseSuppression'] = options;
                                    options = entity.automaticGainControl;
                                    tango['automaticGainControl'] = options;
                                    options = entity.noiseCancellation;
                                    tango['noiseCancellation'] = options;
                                    options = entity.voiceFilters;
                                    tango['voiceFilters'] = options;
                                    tango = oscar.bind(golf)(tango);
                                    oscar = golf.setNoInputThreshold;
                                    tango = -100;
                                    tango = oscar.bind(golf)(tango);
                                    oscar = golf.setNoInputCallback;
                                    tango = entity.handleNoInput;
                                    tango = oscar.bind(golf)(tango);
                                    entity = entity.videoSupported;
                                    if(!entity) { _fun00050_ip = 821; continue _fun00049 }
 601:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setOnVideoCallback;
                                    entity = _closure3_slot0;
                                    entity = entity.handleVideo;
                                    entity = tango.bind(oscar)(entity);
                                    entity = _closure3_slot2;
                                    entity = entity.setOnFirstFrameCallback;
                                    if(!(mike != entity)) { _fun00050_ip = 665; continue _fun00049 }
 640:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setOnFirstFrameCallback;
                                    entity = _closure3_slot0;
                                    entity = entity.handleFirstFrame;
                                    entity = tango.bind(oscar)(entity);
 665:
                                    entity = _closure3_slot2;
                                    entity = entity.setOnDesktopSourceEnded;
                                    if(!(mike != entity)) { _fun00050_ip = 704; continue _fun00049 }
 679:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setOnDesktopSourceEnded;
                                    entity = _closure3_slot0;
                                    entity = entity.handleDesktopSourceEnded;
                                    entity = tango.bind(oscar)(entity);
 704:
                                    entity = _closure3_slot2;
                                    entity = entity.setOnSoundshare;
                                    if(!(mike != entity)) { _fun00050_ip = 743; continue _fun00049 }
 718:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setOnSoundshare;
                                    entity = _closure3_slot0;
                                    entity = entity.handleSoundshare;
                                    entity = tango.bind(oscar)(entity);
 743:
                                    entity = _closure3_slot2;
                                    entity = entity.setOnSoundshareEnded;
                                    if(!(mike != entity)) { _fun00050_ip = 782; continue _fun00049 }
 757:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setOnSoundshareEnded;
                                    entity = _closure3_slot0;
                                    entity = entity.handleSoundshareEnded;
                                    entity = tango.bind(oscar)(entity);
 782:
                                    entity = _closure3_slot2;
                                    entity = entity.setOnSoundshareFailed;
                                    if(!(mike != entity)) { _fun00050_ip = 821; continue _fun00049 }
 796:
                                    oscar = _closure3_slot2;
                                    tango = oscar.setOnSoundshareFailed;
                                    entity = _closure3_slot0;
                                    entity = entity.handleSoundshareFailed;
                                    entity = tango.bind(oscar)(entity);
 821:
                                    entity = _closure3_slot2;
                                    entity = entity.setOnMLSFailureCallback;
                                    if(!(mike != entity)) { _fun00050_ip = 860; continue _fun00049 }
 835:
                                    tango = _closure3_slot2;
                                    mike = tango.setOnMLSFailureCallback;
                                    entity = _closure3_slot0;
                                    entity = entity.handleMLSFailure;
                                    entity = mike.bind(tango)(entity);
 860:
                                    mike = _closure3_slot0;
                                    oscar = mike.setConnectionState;
                                    tango = _closure1_slot21;
                                    tango = tango.CONNECTED;
                                    tango = oscar.bind(mike)(tango);
                                    yankee = mike.emit;
                                    options = _closure1_slot0;
                                    verify = _closure1_slot2;
                                    oscar = 10;
                                    tango = verify[oscar];
                                    entity = undefined;
                                    tango = options.bind(entity)(tango);
                                    tango = tango.BaseConnectionEvent;
                                    offset = tango.Connected;
                                    golf = _closure4_slot0;
                                    tango = {};
                                    foxtrot = _closure4_slot1;
                                    tango['address'] = foxtrot;
                                    romeo = _closure4_slot2;
                                    tango['port'] = romeo;
                                    foxtrot = mike.chooseEncryptionMode;
                                    romeo = _closure3_slot1;
                                    romeo = romeo.modes;
                                    romeo = foxtrot.bind(mike)(romeo, backup);
                                    tango['mode'] = romeo;
                                    romeo = mike.codecs;
                                    tango['codecs'] = romeo;
                                    tango = yankee.bind(mike)(offset, golf, tango);
                                    offset = mike.on;
                                    tango = verify[oscar];
                                    tango = options.bind(entity)(tango);
                                    tango = tango.BaseConnectionEvent;
                                    golf = tango.Stats;
                                    tango = mike.handleStats;
                                    tango = offset.bind(mike)(golf, tango);
                                    tango = mike.getUserOptions;
                                    tango = tango.bind(mike)();
                                    offset = tango.forEach;
                                    golf = function(argFoo) {
                                        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                                            entity = argFoo;
                                            mike = _closure3_slot0;
                                            zulu = mike.logger;
                                            mike = zulu.info;
                                            verify = entity.id;
                                            options = entity.ssrc;
                                            golf = entity.videoSsrcs;
                                            tango = null;
                                            report = tango == golf;
                                            entity = undefined;
                                            if(report) { _fun00052_ip = 63; continue _fun00051 }
 49:
                                            oscar = golf.join;
                                            report = ',';
                                            entity = oscar.bind(golf)(report);
 63:
                                            tango = tango != entity;
                                            golf = 0;
                                            if(!tango) { _fun00052_ip = 75; continue _fun00051 }
 72:
                                            golf = entity;
 75:
                                            entity = global;
                                            entity = entity.HermesInternal;
                                            oscar = entity.concat;
                                            kilo = 'Creating user: ';
                                            foxtrot = ' with audio SSRC: ';
                                            yankee = ' and video SSRCs: ';
                                            backup = verify;
                                            romeo = options;
                                            offset = golf;
                                            entity = kilo[oscar](backup, foxtrot, romeo, yankee, offset, verify);
                                            entity = mike.bind(zulu)(entity);
                                            return entity;
                                        }
                                    };
                                    golf = offset.bind(tango)(golf);
                                    offset = _closure3_slot2;
                                    golf = offset.mergeUsers;
                                    golf = golf.bind(offset)(tango);
                                    golf = mike.emit;
                                    oscar = verify[oscar];
                                    oscar = options.bind(entity)(oscar);
                                    oscar = oscar.BaseConnectionEvent;
                                    oscar = oscar.RemoteStreamsReady;
                                    tango = tango.length;
                                    tango = golf.bind(mike)(oscar, tango);
                                    tango = zulu.Object;
                                    zulu = tango.keys;
                                    mike = mike.localSpeakingFlags;
                                    tango = zulu.bind(tango)(mike);
                                    mike = tango.length;
                                    zulu = 0;
                                    mike = zulu < mike;
                                    if(!mike) { _fun00050_ip = 1213; continue _fun00049 }
 1158:
                                    options = tango[zulu];
                                    mike = _closure3_slot0;
                                    mike = mike.userId;
                                    if(!(options !== mike)) { _fun00050_ip = 1201; continue _fun00049 }
 1175:
                                    golf = _closure3_slot0;
                                    oscar = golf.setSpeakingFlags;
                                    mike = golf.localSpeakingFlags;
                                    mike = mike[options];
                                    mike = oscar.bind(golf)(options, mike);
 1201:
                                    zulu = zulu + 1;
                                    mike = tango.length;
                                    if(zulu < mike) { _fun00050_ip = 1158; continue _fun00049 }
 1213:
                                    return entity;
                                }
                            };
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        };
                        mike = report.bind(zulu)(mike);
                        _fun00048_ip = 271; continue _fun00047;
 158:
                        mike = global;
                        report = mike.Error;
                        mike = report.prototype;
                        zulu = Object.create(mike, {constructor: {value: report}});
                        output = 'Invalid transport info';
                        result = zulu;
                        mike = new result[report](output, sizing);
                        mike = mike instanceof Object ? mike : zulu;
                        throw mike;
 194:
                        zulu = _closure3_slot0;
                        report = zulu.setConnectionState;
                        mike = _closure1_slot21;
                        mike = mike.NO_ROUTE;
                        mike = report.bind(zulu)(mike);
                        mike = zulu.emit;
                        oscar = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 10;
                        report = report[entity];
                        entity = undefined;
                        entity = oscar.bind(entity)(report);
                        entity = entity.BaseConnectionEvent;
                        entity = entity.Error;
                        entity = mike.bind(zulu)(entity, tango);
                        entity = undefined;
                        return entity;
 271:
                        entity = undefined;
                        return entity;
                    }
                };
                tango = golf.bind(entity)(tango, options, zulu);
                report['conn'] = tango;
                var _closure3_slot2 = tango;
                zulu = tango.setSecureFramesStateUpdateCallback;
                if(!(oscar != zulu)) { _fun00046_ip = 499; continue _fun00045 }
 483:
                golf = tango.setSecureFramesStateUpdateCallback;
                zulu = function(argFoo) {
                    report = argFoo;
                    tango = _closure3_slot0;
                    zulu = tango.logger;
                    mike = zulu.info;
                    entity = global;
                    golf = entity.JSON;
                    oscar = golf.stringify;
                    golf = oscar.bind(golf)(report);
                    entity = entity.HermesInternal;
                    oscar = entity.concat;
                    entity = 'DAVE protocol state update: ';
                    entity = oscar.bind(entity)(golf);
                    entity = mike.bind(zulu)(entity);
                    zulu = tango.emit;
                    oscar = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    mike = oscar.bind(entity)(mike);
                    mike = mike.BaseConnectionEvent;
                    mike = mike.SecureFramesUpdate;
                    mike = zulu.bind(tango)(mike, report);
                    return entity;
                };
                zulu = golf.bind(tango)(zulu);
 499:
                zulu = tango.setDesktopSourceStatusCallback;
                if(!(oscar != zulu)) { _fun00046_ip = 525; continue _fun00045 }
 509:
                zulu = tango.setDesktopSourceStatusCallback;
                mike = function(argFoo) {
                    _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.type;
                        mike = 'videohook_start';
                        if(!(mike !== zulu)) { _fun00054_ip = 632; continue _fun00053 }
 21:
                        zulu = entity.type;
                        mike = 'videohook_stop';
                        if(!(mike !== zulu)) { _fun00054_ip = 575; continue _fun00053 }
 39:
                        zulu = entity.type;
                        mike = 'videohook_initialize';
                        if(!(mike !== zulu)) { _fun00054_ip = 477; continue _fun00053 }
 57:
                        zulu = entity.type;
                        mike = 'screenshare_finish';
                        if(!(mike !== zulu)) { _fun00054_ip = 245; continue _fun00053 }
 75:
                        zulu = entity.type;
                        mike = 'video_state';
                        if(!(mike !== zulu)) { _fun00054_ip = 179; continue _fun00053 }
 90:
                        tango = entity.type;
                        zulu = tango.startsWith;
                        mike = 'soundshare_';
                        mike = zulu.bind(tango)(mike);
                        if(!mike) { _fun00054_ip = 687; continue _fun00053 }
 118:
                        tango = _closure3_slot0;
                        zulu = tango.emit;
                        oscar = _closure1_slot0;
                        report = _closure1_slot2;
                        mike = 10;
                        report = report[mike];
                        mike = undefined;
                        mike = oscar.bind(mike)(report);
                        mike = mike.BaseConnectionEvent;
                        mike = mike.SoundshareTrace;
                        mike = zulu.bind(tango)(mike, entity);
                        _fun00054_ip = 687; continue _fun00053;
 179:
                        report = _closure3_slot0;
                        tango = report.emit;
                        oscar = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 10;
                        zulu = zulu[mike];
                        mike = undefined;
                        mike = oscar.bind(mike)(zulu);
                        mike = mike.BaseConnectionEvent;
                        zulu = mike.VideoState;
                        mike = entity.state;
                        mike = tango.bind(report)(zulu, mike);
                        _fun00054_ip = 687; continue _fun00053;
 245:
                        update = _closure3_slot0;
                        echo = update.emit;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 10;
                        zulu = zulu[mike];
                        mike = undefined;
                        mike = tango.bind(mike)(zulu);
                        mike = mike.BaseConnectionEvent;
                        result = mike.ScreenshareFinish;
                        output = entity.screenshareFrames;
                        sizing = entity.videohookFrames;
                        kilo = entity.hybridDxgiFrames;
                        backup = entity.hybridGdiFrames;
                        foxtrot = entity.hybridVideohookFrames;
                        romeo = entity.hybridGraphicsCaptureFrames;
                        yankee = entity.hybridCaptureMethodSwitches;
                        offset = entity.hybridGdiBitBltFrames;
                        verify = entity.hybridGdiPrintWindowFrames;
                        options = entity.quartzFrames;
                        golf = entity.desktopCapturerType;
                        mike = null;
                        if(!(mike == golf)) { _fun00054_ip = 395; continue _fun00053 }
 389:
                        golf = entity.desktop_capturer_type;
 395:
                        config = entity.screens;
                        sequence = entity.windows;
                        vacuum = entity.activity;
                        control = entity.goLiveCameraFrames;
                        source = entity.screenCaptureKitFrames;
                        variable38 = update;
                        variable37 = result;
                        variable36 = output;
                        quebec = sizing;
                        equality = kilo;
                        whiskey = backup;
                        lima = foxtrot;
                        sierra = romeo;
                        status = yankee;
                        target = offset;
                        papa = verify;
                        context = options;
                        record = golf;
                        mike = variable38[echo](variable37, variable36, quebec, equality, whiskey, lima, sierra, status, target, papa, context, record, config, sequence, vacuum, control, source, update);
                        _fun00054_ip = 687; continue _fun00053;
 477:
                        verify = _closure3_slot0;
                        options = verify.emit;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 10;
                        zulu = zulu[mike];
                        mike = undefined;
                        mike = tango.bind(mike)(zulu);
                        mike = mike.BaseConnectionEvent;
                        variable37 = mike.VideoHookInitialize;
                        variable36 = entity.backend;
                        quebec = entity.format;
                        equality = entity.framebufferFormat;
                        whiskey = entity.sampleCount;
                        lima = entity.success;
                        sierra = entity.reinitialization;
                        variable38 = verify;
                        entity = variable38[options](variable37, variable36, quebec, equality, whiskey, lima, sierra, status);
                        _fun00054_ip = 687; continue _fun00053;
 575:
                        zulu = _closure3_slot0;
                        mike = zulu.emit;
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        entity = 10;
                        tango = tango[entity];
                        entity = undefined;
                        entity = report.bind(entity)(tango);
                        entity = entity.BaseConnectionEvent;
                        entity = entity.VideoHookStop;
                        entity = mike.bind(zulu)(entity);
                        _fun00054_ip = 687; continue _fun00053;
 632:
                        zulu = _closure3_slot0;
                        mike = zulu.emit;
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        entity = 10;
                        tango = tango[entity];
                        entity = undefined;
                        entity = report.bind(entity)(tango);
                        entity = entity.BaseConnectionEvent;
                        entity = entity.VideoHookStart;
                        entity = mike.bind(zulu)(entity);
 687:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
 525:
                tango = report.on;
                zulu = report.handleNewListenerNative;
                mike = 'newListener';
                mike = tango.bind(report)(mike, zulu);
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(87);
        mike[0] = entity;
        entity = {};
        oscar = 'destroy';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            oscar = this;
            var _closure3_slot0 = oscar;
            zulu = oscar.conn;
            mike = zulu.destroy;
            mike = mike.bind(zulu)();
            mike = global;
            tango = mike.Object;
            zulu = tango.keys;
            mike = oscar.localSpeakingFlags;
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            mike = function(argFoo) {
                entity = _closure3_slot0;
                mike = entity.userId;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.forEach;
            mike = function(argFoo) {
                oscar = argFoo;
                report = _closure3_slot0;
                tango = report.emit;
                golf = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 10;
                zulu = zulu[mike];
                mike = undefined;
                mike = golf.bind(mike)(zulu);
                mike = mike.BaseConnectionEvent;
                yankee = mike.Speaking;
                entity = _closure1_slot24;
                verify = entity.NONE;
                entity = report.remoteAudioSSRCs;
                options = entity[oscar];
                romeo = report;
                offset = oscar;
                entity = romeo[tango](yankee, offset, verify, options, golf);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            zulu = oscar.setConnectionState;
            mike = _closure1_slot21;
            mike = mike.DISCONNECTED;
            mike = zulu.bind(oscar)(mike);
            offset = _closure2_slot0;
            tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: _superPropGet
                _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                    report = argFoo;
                    golf = argBaz;
                    var _closure4_slot0 = golf;
                    oscar = _closure1_slot8;
                    zulu = _closure1_slot7;
                    entity = 1;
                    tango = 3;
                    options = entity & tango;
                    entity = report;
                    if(!options) { _fun00056_ip = 44; continue _fun00055 }
 39:
                    entity = report.prototype;
 44:
                    report = undefined;
                    zulu = zulu.bind(report)(entity);
                    entity = 'destroy';
                    entity = oscar.bind(report)(zulu, entity, golf);
                    var _closure4_slot1 = entity;
                    zulu = 2;
                    zulu = zulu & tango;
                    if(!zulu) { _fun00056_ip = 81; continue _fun00055 }
 76:
                    entity = function(argFoo) {
                        tango = _closure4_slot1;
                        zulu = tango.apply;
                        mike = _closure4_slot0;
                        entity = argFoo;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
 81:
                    return entity;
                }
            };
            entity = undefined;
            verify = 'destroy';
            golf = 3;
            yankee = undefined;
            options = oscar;
            zulu = yankee[tango](offset, verify, options, golf, oscar);
            mike = new Array(0);
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'setCodecs';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                mike = this;
                tango = mike.conn;
                zulu = tango.setTransportOptions;
                golf = mike.getCodecOptions;
                oscar = argFoo;
                report = argBar;
                entity = argBaz;
                entity = golf.bind(mike)(oscar, report, entity);
                entity = zulu.bind(tango)(entity);
                entity = mike.videoEncoderFallbackPending;
                if(!entity) { _fun00058_ip = 61; continue _fun00057 }
 53:
                entity = false;
                mike['videoEncoderFallbackPending'] = entity;
 61:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'getStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                tango = mike.connectionState;
                zulu = _closure1_slot21;
                zulu = zulu.DISCONNECTED;
                if(!(tango !== zulu)) { _fun00060_ip = 135; continue _fun00059 }
 32:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                mike = 16;
                mike = options[mike];
                oscar = undefined;
                report = golf.bind(oscar)(mike);
                tango = report.timeout;
                mike = global;
                verify = mike.Promise;
                mike = verify.prototype;
                zulu = Object.create(mike, {constructor: {value: verify}});
                yankee = function(argFoo) {
                    _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                        mike = argFoo;
                        var _closure4_slot0 = mike;
                        zulu = _closure3_slot0;
                        zulu = zulu.conn;
                        zulu = zulu.getFilteredStats;
                        tango = null;
                        if(!(tango == zulu)) { _fun00062_ip = 135; continue _fun00061 }
 34:
                        zulu = _closure3_slot0;
                        zulu = zulu.conn;
                        zulu = zulu.getStats;
                        if(!(tango == zulu)) { _fun00062_ip = 107; continue _fun00061 }
 54:
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        zulu = 9;
                        tango = tango[zulu];
                        zulu = undefined;
                        tango = report.bind(zulu)(tango);
                        zulu = tango.getVoiceEngine;
                        report = zulu.bind(tango)();
                        tango = report.getStats;
                        zulu = function(argFoo) {
                            zulu = _closure4_slot0;
                            tango = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 17;
                            entity = mike[entity];
                            mike = undefined;
                            golf = tango.bind(mike)(entity);
                            entity = _closure3_slot0;
                            yankee = entity.mediaEngineConnectionId;
                            verify = entity.remoteVideoSinkWants;
                            options = entity.localVideoSinkWants;
                            offset = argFoo;
                            romeo = undefined;
                            entity = romeo[golf](yankee, offset, verify, options, golf);
                            entity = zulu.bind(mike)(entity);
                            return entity;
                        };
                        zulu = tango.bind(report)(zulu);
                        _fun00062_ip = 175; continue _fun00061;
 107:
                        zulu = _closure3_slot0;
                        report = zulu.conn;
                        tango = report.getStats;
                        zulu = function(argFoo) {
                            zulu = _closure4_slot0;
                            tango = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 17;
                            entity = mike[entity];
                            mike = undefined;
                            golf = tango.bind(mike)(entity);
                            entity = _closure3_slot0;
                            yankee = entity.mediaEngineConnectionId;
                            verify = entity.remoteVideoSinkWants;
                            options = entity.localVideoSinkWants;
                            offset = argFoo;
                            romeo = undefined;
                            entity = romeo[golf](yankee, offset, verify, options, golf);
                            entity = zulu.bind(mike)(entity);
                            return entity;
                        };
                        zulu = tango.bind(report)(zulu);
                        _fun00062_ip = 175; continue _fun00061;
 135:
                        mike = _closure3_slot0;
                        tango = mike.conn;
                        zulu = tango.getFilteredStats;
                        mike = _closure1_slot10;
                        mike = mike.ALL;
                        entity = function(argFoo) {
                            zulu = _closure4_slot0;
                            tango = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 17;
                            entity = mike[entity];
                            mike = undefined;
                            golf = tango.bind(mike)(entity);
                            entity = _closure3_slot0;
                            yankee = entity.mediaEngineConnectionId;
                            verify = entity.remoteVideoSinkWants;
                            options = entity.localVideoSinkWants;
                            offset = argFoo;
                            romeo = undefined;
                            entity = romeo[golf](yankee, offset, verify, options, golf);
                            entity = zulu.bind(mike)(entity);
                            return entity;
                        };
                        entity = zulu.bind(tango)(mike, entity);
 175:
                        entity = undefined;
                        return entity;
                    }
                };
                romeo = zulu;
                mike = new romeo[verify](yankee, offset);
                zulu = mike instanceof Object ? mike : zulu;
                mike = 18;
                mike = options[mike];
                mike = golf.bind(oscar)(mike);
                mike = mike.STATS_INTERVAL;
                zulu = tango.bind(report)(zulu, mike);
                mike = zulu.catch;
                entity = function(argFoo) {
                    _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                        mike = argFoo;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 16;
                        zulu = zulu[entity];
                        entity = undefined;
                        zulu = tango.bind(entity)(zulu);
                        zulu = zulu.TimeoutError;
                        zulu = mike instanceof zulu;
                        if(zulu) { _fun00064_ip = 43; continue _fun00063 }
 41:
                        throw mike;
 43:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                _fun00060_ip = 156; continue _fun00059;
 135:
                mike = global;
                tango = mike.Promise;
                zulu = tango.resolve;
                mike = null;
                entity = zulu.bind(tango)(mike);
 156:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'createUser';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                tango = argFoo;
                foxtrot = argBar;
                options = argBaz;
                zulu = this;
                entity = zulu.remoteAudioSSRCs;
                golf = entity[tango];
                entity = zulu.remoteVideoSSRCs;
                offset = entity[tango];
                entity = null;
                if(!(entity != golf)) { _fun00066_ip = 96; continue _fun00065 }
 38:
                mike = 0;
                if(!(mike === foxtrot)) { _fun00066_ip = 96; continue _fun00065 }
 44:
                oscar = zulu.logger;
                report = oscar.info;
                mike = global;
                mike = mike.HermesInternal;
                yankee = mike.concat;
                verify = 'Ignoring attempt to recreate user ';
                mike = ' with 0 audio SSRC';
                mike = yankee.bind(verify)(tango, mike);
                mike = report.bind(oscar)(mike);
                _fun00066_ip = 584; continue _fun00065;
 96:
                mike = undefined;
                if(!(mike === offset)) { _fun00066_ip = 108; continue _fun00065 }
 102:
                verify = new Array(0);
                _fun00066_ip = 134; continue _fun00065;
 108:
                oscar = new Array(0);
                sizing = 0;
                result = oscar;
                output = offset;
                report = arraySpread(result, output, sizing);
                report = oscar.sort;
                verify = report.bind(oscar)();
 134:
                if(!(mike !== options)) { _fun00066_ip = 166; continue _fun00065 }
 138:
                oscar = new Array(0);
                sizing = 0;
                result = oscar;
                output = options;
                report = arraySpread(result, output, sizing);
                report = oscar.sort;
                options = report.bind(oscar)();
                _fun00066_ip = 180; continue _fun00065;
 166:
                report = verify;
                if(!(entity == report)) { _fun00066_ip = 177; continue _fun00065 }
 173:
                report = new Array(0);
 177:
                options = report;
 180:
                offset = _closure1_slot1;
                yankee = _closure1_slot2;
                oscar = 19;
                oscar = yankee[oscar];
                oscar = offset.bind(mike)(oscar);
                oscar = oscar.bind(mike)(verify, options);
                oscar = !oscar;
                verify = zulu.remoteAudioSSRCs;
                verify[tango] = foxtrot;
                verify = zulu.remoteVideoSSRCs;
                yankee = options;
                options = yankee;
                if(!(entity == options)) { _fun00066_ip = 242; continue _fun00065 }
 238:
                options = new Array(0);
 242:
                verify[tango] = options;
                options = zulu.userId;
                if(!(options !== tango)) { _fun00066_ip = 584; continue _fun00065 }
 258:
                if(!(golf === foxtrot)) { _fun00066_ip = 268; continue _fun00065 }
 262:
                if(!oscar) { _fun00066_ip = 584; continue _fun00065 }
 268:
                romeo = 0;
                golf = 0;
                if(!(mike !== yankee)) { _fun00066_ip = 294; continue _fun00065 }
 276:
                oscar = yankee.length;
                oscar = oscar > romeo;
                golf = 0;
                if(!oscar) { _fun00066_ip = 294; continue _fun00065 }
 290:
                golf = yankee[romeo];
 294:
                options = {};
                options['id'] = tango;
                options['ssrc'] = foxtrot;
                options['videoSsrc'] = golf;
                options['videoSsrcs'] = yankee;
                oscar = _closure1_slot41;
                oscar = oscar.bind(mike)(golf);
                options['rtxSsrc'] = oscar;
                oscar = zulu.getLocalMute;
                oscar = oscar.bind(zulu)(tango);
                options['mute'] = oscar;
                oscar = zulu.getLocalVolume;
                oscar = oscar.bind(zulu)(tango);
                options['volume'] = oscar;
                golf = zulu.connectionState;
                oscar = _closure1_slot21;
                oscar = oscar.CONNECTED;
                if(!(golf === oscar)) { _fun00066_ip = 501; continue _fun00065 }
 381:
                golf = zulu.logger;
                oscar = golf.info;
                verify = entity == yankee;
                mike = undefined;
                if(verify) { _fun00066_ip = 415; continue _fun00065 }
 401:
                offset = yankee.join;
                verify = ',';
                mike = offset.bind(yankee)(verify);
 415:
                verify = entity != mike;
                romeo = 0;
                if(!verify) { _fun00066_ip = 427; continue _fun00065 }
 424:
                romeo = mike;
 427:
                mike = global;
                mike = mike.HermesInternal;
                yankee = mike.concat;
                echo = 'Creating user: ';
                output = ' with audio SSRC: ';
                kilo = ' and video SSRCs: ';
                result = tango;
                sizing = foxtrot;
                backup = romeo;
                mike = echo[yankee](result, output, sizing, kilo, backup, foxtrot);
                mike = oscar.bind(golf)(mike);
                golf = zulu.conn;
                oscar = golf.mergeUsers;
                mike = new Array(1);
                mike[0] = options;
                mike = oscar.bind(golf)(mike);
 501:
                mike = zulu.localPans;
                mike = mike[tango];
                if(!(entity != mike)) { _fun00066_ip = 538; continue _fun00065 }
 515:
                golf = zulu.setLocalPan;
                oscar = mike.left;
                mike = mike.right;
                mike = golf.bind(zulu)(tango, oscar, mike);
 538:
                mike = zulu.localSpeakingFlags;
                mike = mike[tango];
                entity = entity != mike;
                if(!entity) { _fun00066_ip = 569; continue _fun00065 }
 555:
                report = _closure1_slot24;
                report = report.NONE;
                entity = mike !== report;
 569:
                if(!entity) { _fun00066_ip = 584; continue _fun00065 }
 572:
                entity = zulu.setSpeakingFlags;
                entity = entity.bind(zulu)(tango, mike);
 584:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'destroyUser';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                mike = argFoo;
                entity = this;
                zulu = entity.remoteAudioSSRCs;
                tango = zulu[mike];
                zulu = null;
                if(!(zulu != tango)) { _fun00068_ip = 59; continue _fun00067 }
 22:
                tango = entity.conn;
                zulu = tango.destroyUser;
                zulu = zulu.bind(tango)(mike);
                zulu = entity.remoteAudioSSRCs;
                zulu = delete zulu[mike];
                entity = entity.remoteVideoSSRCs;
                entity = delete entity[mike];
 59:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'setSelfMute';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            report = argFoo;
            tango = this;
            tango['selfMute'] = report;
            mike = tango.conn;
            entity = mike.setSelfMute;
            entity = entity.bind(mike)(report);
            zulu = tango.emit;
            oscar = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            mike = oscar.bind(entity)(mike);
            mike = mike.BaseConnectionEvent;
            mike = mike.Mute;
            mike = zulu.bind(tango)(mike, report);
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'getSelfMute';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.selfMute;
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'setSelfDeaf';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = argFoo;
            entity = this;
            entity['selfDeaf'] = zulu;
            mike = entity.conn;
            entity = mike.setSelfDeafen;
            entity = entity.bind(mike)(zulu);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'setSoundshareSource';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                tango = argFoo;
                entity = this;
                mike = entity.soundshareId;
                if(!(mike === tango)) { _fun00070_ip = 25; continue _fun00069 }
 16:
                mike = entity.soundshareSentSpeakingEvent;
                if(mike) { _fun00070_ip = 112; continue _fun00069 }
 25:
                zulu = entity.context;
                mike = _closure1_slot23;
                mike = mike.STREAM;
                if(!(zulu === mike)) { _fun00070_ip = 112; continue _fun00069 }
 47:
                entity['soundshareId'] = tango;
                mike = false;
                entity['soundshareSentSpeakingEvent'] = mike;
                mike = null;
                if(!(mike === tango)) { _fun00070_ip = 69; continue _fun00069 }
 67:
                tango = 0;
 69:
                zulu = entity.conn;
                mike = zulu.setTransportOptions;
                entity = {};
                entity['soundsharePid'] = tango;
                tango = true;
                entity['soundshareEventDriven'] = tango;
                tango = argBar;
                entity['soundshareLoopback'] = tango;
                entity = mike.bind(zulu)(entity);
 112:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'setLocalMute';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            oscar = argFoo;
            report = argBar;
            tango = this;
            entity = tango.localMutes;
            entity[oscar] = report;
            mike = tango.conn;
            entity = mike.setLocalMute;
            entity = entity.bind(mike)(oscar, report);
            zulu = tango.emit;
            golf = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            mike = mike.BaseConnectionEvent;
            mike = mike.LocalMute;
            mike = zulu.bind(tango)(mike, oscar, report);
            return entity;
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'fastUdpReconnect';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                entity = this;
                mike = entity.conn;
                zulu = mike.fastUdpReconnect;
                mike = null;
                if(!(mike != zulu)) { _fun00072_ip = 56; continue _fun00071 }
 21:
                zulu = entity.numFastUdpReconnects;
                mike = 1;
                mike = zulu + mike;
                entity['numFastUdpReconnects'] = mike;
                mike = entity.conn;
                entity = mike.fastUdpReconnect;
                entity = entity.bind(mike)();
 56:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'getNumFastUdpReconnects';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                mike = this;
                entity = mike.conn;
                zulu = entity.fastUdpReconnect;
                entity = null;
                zulu = entity != zulu;
                if(!zulu) { _fun00074_ip = 30; continue _fun00073 }
 24:
                entity = mike.numFastUdpReconnects;
 30:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'wasRemoteDisconnected';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                entity = this;
                zulu = entity.conn;
                mike = zulu.wasRemoteDisconnected;
                entity = null;
                if(!(entity != mike)) { _fun00076_ip = 31; continue _fun00075 }
 21:
                entity = mike.call;
                entity = entity.bind(mike)(zulu);
 31:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = 'setLocalVideoDisabled';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            oscar = argFoo;
            report = argBar;
            tango = this;
            entity = tango.disabledLocalVideos;
            entity[oscar] = report;
            zulu = tango.emit;
            golf = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            mike = mike.BaseConnectionEvent;
            mike = mike.LocalVideoDisabled;
            mike = zulu.bind(tango)(mike, oscar, report);
            return entity;
        };
        entity['value'] = oscar;
        mike[14] = entity;
        entity = {};
        oscar = 'setMinimumJitterBufferLevel';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['minimumJitterBufferLevel'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[15] = entity;
        entity = {};
        oscar = 'setPostponeDecodeLevel';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['postponeDecodeLevel'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[16] = entity;
        entity = {};
        oscar = 'setClipRecordUser';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                entity = this;
                mike = entity.destroyed;
                if(mike) { _fun00078_ip = 112; continue _fun00077 }
 12:
                oscar = entity.conn;
                report = oscar.setClipRecordUser;
                mike = null;
                if(!(mike != report)) { _fun00078_ip = 112; continue _fun00077 }
 30:
                tango = report.call;
                mike = entity.context;
                entity = _closure1_slot23;
                entity = entity.STREAM;
                zulu = 'user';
                if(!(mike === entity)) { _fun00078_ip = 65; continue _fun00077 }
 61:
                zulu = 'application';
 65:
                mike = zulu.concat;
                entity = 'Video';
                options = 'audio';
                golf = argBar;
                if(!(options === golf)) { _fun00078_ip = 91; continue _fun00077 }
 85:
                entity = 'Audio';
 91:
                offset = mike.bind(zulu)(entity);
                yankee = argFoo;
                verify = argBaz;
                foxtrot = report;
                romeo = oscar;
                entity = foxtrot[tango](romeo, yankee, offset, verify, options);
 112:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[17] = entity;
        entity = {};
        oscar = 'setClipsKeyFrameInterval';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                tango = this;
                mike = tango.context;
                entity = _closure1_slot23;
                entity = entity.STREAM;
                if(!(mike === entity)) { _fun00080_ip = 85; continue _fun00079 }
 25:
                entity = argFoo;
                tango['clipsKeyFrameInterval'] = entity;
                zulu = tango.conn;
                mike = zulu.setTransportOptions;
                entity = {};
                report = tango.getKeyFrameInterval;
                report = report.bind(tango)();
                entity['keyframeInterval'] = report;
                report = tango.keyframeInterval;
                tango = 0;
                tango = report > tango;
                entity['alwaysSendVideo'] = tango;
                entity = mike.bind(zulu)(entity);
 85:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[18] = entity;
        entity = {};
        oscar = 'setViewerSideClip';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                entity = this;
                zulu = entity.context;
                mike = _closure1_slot23;
                mike = mike.STREAM;
                if(!(zulu === mike)) { _fun00082_ip = 54; continue _fun00081 }
 25:
                zulu = entity.conn;
                mike = zulu.setTransportOptions;
                entity = {};
                tango = argFoo;
                entity['enableViewerSideClip'] = tango;
                entity = mike.bind(zulu)(entity);
 54:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[19] = entity;
        entity = {};
        oscar = 'setRemoteAudioHistory';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.conn;
            mike = zulu.setTransportOptions;
            entity = {};
            tango = argFoo;
            entity['remoteAudioHistoryMs'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[20] = entity;
        entity = {};
        oscar = 'setQualityDecoupling';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                entity = this;
                zulu = entity.context;
                mike = _closure1_slot23;
                mike = mike.STREAM;
                if(!(zulu === mike)) { _fun00084_ip = 54; continue _fun00083 }
 25:
                zulu = entity.conn;
                mike = zulu.setTransportOptions;
                entity = {};
                tango = argFoo;
                entity['enableQualityDecoupling'] = tango;
                entity = mike.bind(zulu)(entity);
 54:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[21] = entity;
        entity = {};
        oscar = 'getLocalVolume';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                zulu = this;
                mike = zulu.localVolumes;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                if(!(entity == mike)) { _fun00086_ip = 57; continue _fun00085 }
 22:
                report = zulu.context;
                zulu = _closure1_slot23;
                zulu = zulu.DEFAULT;
                if(!(report !== zulu)) { _fun00086_ip = 50; continue _fun00085 }
 44:
                zulu = _closure1_slot29;
                _fun00086_ip = 54; continue _fun00085;
 50:
                zulu = _closure1_slot28;
 54:
                mike = zulu;
 57:
                if(!(entity == mike)) { _fun00086_ip = 68; continue _fun00085 }
 61:
                mike = _closure1_slot28;
 68:
                entity = _closure1_slot28;
                entity = mike / entity;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[22] = entity;
        entity = {};
        oscar = 'setLocalVolume';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
                oscar = argFoo;
                report = argBar;
                mike = this;
                tango = oscar;
                entity = report;
                zulu = mike.localVolumes;
                zulu[oscar] = report;
 25: // try_start_0
                golf = mike.conn;
                oscar = golf.setLocalVolume;
                report = tango;
                zulu = mike.getLocalVolume;
                zulu = zulu.bind(mike)(report);
                zulu = oscar.bind(golf)(report, zulu);
 57: // try_end0
                _fun00088_ip = 114; continue _fun00087;
 59: // catch_target0
                CatchBlockStart(arg_register=2);
                zulu = mike.logger;
                mike = zulu.warn;
                golf = tango;
                oscar = entity;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                tango = 'Failed to set volume for user: ';
                entity = ': ';
                entity = report.bind(tango)(golf, entity, oscar);
                entity = mike.bind(zulu)(entity);
 114:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[23] = entity;
        entity = {};
        oscar = 'setLocalPan';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            report = argFoo;
            tango = argBar;
            zulu = argBaz;
            entity = this;
            oscar = entity.localPans;
            mike = {};
            mike['left'] = tango;
            mike['right'] = zulu;
            oscar[report] = mike;
            mike = entity.conn;
            entity = mike.setLocalPan;
            entity = entity.bind(mike)(report, tango, zulu);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[24] = entity;
        entity = {};
        oscar = 'isAttenuating';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.attenuationFactor;
            entity = 1;
            entity = mike < entity;
            return entity;
        };
        entity['value'] = oscar;
        mike[25] = entity;
        entity = {};
        oscar = 'setAttenuation';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            tango = this;
            mike = 100;
            entity = argFoo;
            entity = mike - entity;
            entity = entity / mike;
            tango['attenuationFactor'] = entity;
            entity = argBar;
            tango['attenuateWhileSpeakingSelf'] = entity;
            entity = argBaz;
            tango['attenuateWhileSpeakingOthers'] = entity;
            zulu = tango.conn;
            mike = zulu.setTransportOptions;
            entity = tango.getAttenuationOptions;
            entity = entity.bind(tango)();
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[26] = entity;
        entity = {};
        oscar = 'setCanHavePriority';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
                entity = this;
                report = entity.conn;
                tango = report.setRemoteUserCanHavePriority;
                entity = null;
                if(!(entity != tango)) { _fun00090_ip = 41; continue _fun00089 }
 23:
                zulu = tango.call;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(report, mike, entity);
 41:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[27] = entity;
        entity = {};
        oscar = 'setBitRate';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = this;
            mike = zulu.setVoiceBitRate;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[28] = entity;
        entity = {};
        oscar = 'setVoiceBitRate';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
                mike = argFoo;
                entity = this;
                zulu = entity.voiceBitrate;
                if(!(zulu !== mike)) { _fun00092_ip = 90; continue _fun00091 }
 16:
                entity['voiceBitrate'] = mike;
                oscar = entity.voiceBitrate;
                mike = entity.soundshareActive;
                tango = oscar;
                if(!mike) { _fun00092_ip = 66; continue _fun00091 }
 40:
                mike = global;
                report = mike.Math;
                zulu = report.max;
                mike = _closure1_slot30;
                tango = zulu.bind(report)(mike, oscar);
 66:
                zulu = entity.conn;
                mike = zulu.setTransportOptions;
                entity = {};
                entity['encodingVoiceBitRate'] = tango;
                entity = mike.bind(zulu)(entity);
 90:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[29] = entity;
        entity = {};
        oscar = 'setCameraBitRate';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
                tango = argBar;
                report = argBaz;
                entity = this;
                options = null;
                if(!(options == report)) { _fun00094_ip = 40; continue _fun00093 }
 15:
                if(!(options == tango)) { _fun00094_ip = 40; continue _fun00093 }
 19:
                oscar = entity.videoQualityManager;
                zulu = oscar.setQualityOverwrite;
                mike = {};
                mike = zulu.bind(oscar)(mike);
                _fun00094_ip = 88; continue _fun00093;
 40:
                oscar = entity.videoQualityManager;
                zulu = oscar.setQualityOverwrite;
                mike = {};
                golf = tango;
                if(!(options != report)) { _fun00094_ip = 73; continue _fun00093 }
 61:
                options = 0;
                golf = tango;
                if(!(report > options)) { _fun00094_ip = 73; continue _fun00093 }
 70:
                golf = report;
 73:
                mike['bitrateMin'] = golf;
                mike['bitrateMax'] = tango;
                mike = zulu.bind(oscar)(mike);
 88:
                mike = entity.hasDesktopSource;
                mike = mike.bind(entity)();
                if(mike) { _fun00094_ip = 138; continue _fun00093 }
 101:
                zulu = entity.conn;
                mike = zulu.setTransportOptions;
                entity = {};
                oscar = argFoo;
                entity['encodingVideoBitRate'] = oscar;
                entity['encodingVideoMinBitRate'] = report;
                entity['encodingVideoMaxBitRate'] = tango;
                entity = mike.bind(zulu)(entity);
 138:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[30] = entity;
        entity = {};
        oscar = 'setEchoCancellation';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            report = this;
            entity = argFoo;
            report['echoCancellation'] = entity;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getVoiceEngine;
            tango = mike.bind(zulu)();
            zulu = tango.setTransportOptions;
            mike = {};
            report = report.echoCancellation;
            mike['echoCancellation'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[31] = entity;
        entity = {};
        oscar = 'setNoiseSuppression';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            report = this;
            entity = argFoo;
            report['noiseSuppression'] = entity;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getVoiceEngine;
            tango = mike.bind(zulu)();
            zulu = tango.setTransportOptions;
            mike = {};
            report = report.noiseSuppression;
            mike['noiseSuppression'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[32] = entity;
        entity = {};
        oscar = 'setAutomaticGainControl';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            report = this;
            entity = argFoo;
            report['automaticGainControl'] = entity;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getVoiceEngine;
            tango = mike.bind(zulu)();
            zulu = tango.setTransportOptions;
            mike = {};
            report = report.automaticGainControl;
            mike['automaticGainControl'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[33] = entity;
        entity = {};
        oscar = 'setNoiseCancellation';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            report = this;
            entity = argFoo;
            report['noiseCancellation'] = entity;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getVoiceEngine;
            tango = mike.bind(zulu)();
            zulu = tango.setTransportOptions;
            mike = {};
            report = report.noiseCancellation;
            mike['noiseCancellation'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[34] = entity;
        entity = {};
        oscar = 'setVoiceFiltersEnabled';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            report = this;
            entity = argFoo;
            report['voiceFilters'] = entity;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getVoiceEngine;
            tango = mike.bind(zulu)();
            zulu = tango.setTransportOptions;
            mike = {};
            report = report.voiceFilters;
            mike['voiceFilters'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[35] = entity;
        entity = {};
        oscar = 'setExperimentalEncoders';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = this;
            entity = argFoo;
            tango['experimentalEncoders'] = entity;
            zulu = tango.conn;
            mike = zulu.setTransportOptions;
            entity = {};
            tango = tango.experimentalEncoders;
            entity['experimentalEncoders'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[36] = entity;
        entity = {};
        oscar = 'setHardwareH264';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = this;
            entity = argFoo;
            tango['hardwareH264'] = entity;
            zulu = tango.conn;
            mike = zulu.setTransportOptions;
            entity = {};
            tango = tango.hardwareH264;
            entity['hardwareH264'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[37] = entity;
        entity = {};
        oscar = 'setSoftwareH264';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = this;
            entity = argFoo;
            tango['softwareH264'] = entity;
            zulu = tango.conn;
            mike = zulu.setTransportOptions;
            entity = {};
            tango = tango.softwareH264;
            entity['softwareH264'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[38] = entity;
        entity = {};
        oscar = 'setQoS';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = this;
            entity = argFoo;
            tango['qos'] = entity;
            zulu = tango.conn;
            mike = zulu.setTransportOptions;
            entity = {};
            tango = tango.qos;
            entity['qos'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[39] = entity;
        entity = {};
        oscar = 'setInputMode';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                golf = argFoo;
                entity = argBar;
                report = this;
                report['inputMode'] = golf;
                mike = _closure1_slot20;
                mike = mike.PUSH_TO_TALK;
                if(!(mike !== golf)) { _fun00096_ip = 163; continue _fun00095 }
 35:
                mike = _closure1_slot20;
                mike = mike.VOICE_ACTIVITY;
                if(!(mike !== golf)) { _fun00096_ip = 101; continue _fun00095 }
 49:
                mike = global;
                oscar = mike.Error;
                mike = mike.HermesInternal;
                zulu = mike.concat;
                mike = 'Unknown Input Mode: ';
                options = zulu.bind(mike)(golf);
                zulu = oscar.prototype;
                zulu = Object.create(zulu, {constructor: {value: oscar}});
                verify = zulu;
                mike = new verify[oscar](options, golf);
                mike = mike instanceof Object ? mike : zulu;
                throw mike;
 101:
                mike = entity.vadThreshold;
                report['vadThreshold'] = mike;
                mike = entity.vadAutoThreshold;
                report['vadAutoThreshold'] = mike;
                mike = entity.vadUseKrisp;
                report['vadUseKrisp'] = mike;
                mike = entity.vadLeading;
                report['vadLeading'] = mike;
                mike = entity.vadTrailing;
                report['vadTrailing'] = mike;
                _fun00096_ip = 175; continue _fun00095;
 163:
                entity = entity.pttReleaseDelay;
                report['pttReleaseDelay'] = entity;
 175:
                zulu = report.conn;
                mike = zulu.setTransportOptions;
                entity = {};
                oscar = _closure1_slot19;
                tango = report.inputMode;
                tango = oscar[tango];
                entity['inputMode'] = tango;
                tango = report.createInputModeOptions;
                tango = tango.bind(report)();
                entity['inputModeOptions'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[40] = entity;
        entity = {};
        oscar = 'setSilenceThreshold';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getVoiceEngine;
            tango = mike.bind(zulu)();
            zulu = tango.setNoInputThreshold;
            mike = argFoo;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[41] = entity;
        entity = {};
        oscar = 'setForceAudioInput';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
                zulu = argFoo;
                tango = arguments[1];
                mike = this;
                entity = undefined;
                if(!(tango === entity)) { _fun00098_ip = 17; continue _fun00097 }
 15:
                tango = false;
 17:
                if(tango) { _fun00098_ip = 28; continue _fun00097 }
 20:
                mike['forceAudioNormal'] = zulu;
                _fun00098_ip = 34; continue _fun00097;
 28:
                mike['forceAudioPriority'] = zulu;
 34:
                report = mike.conn;
                tango = report.setPTTActive;
                zulu = mike.forceAudioPriority;
                if(zulu) { _fun00098_ip = 61; continue _fun00097 }
 55:
                zulu = mike.forceAudioNormal;
 61:
                mike = mike.forceAudioPriority;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[42] = entity;
        entity = {};
        oscar = 'setSpeakingFlags';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
                tango = argFoo;
                zulu = argBar;
                mike = this;
                entity = mike.conn;
                entity = entity.setRemoteUserSpeakingStatus;
                report = null;
                if(!(report == entity)) { _fun00100_ip = 90; continue _fun00099 }
 27:
                entity = mike.conn;
                entity = entity.setRemoteUserSpeaking;
                if(!(report != entity)) { _fun00100_ip = 108; continue _fun00099 }
 43:
                oscar = mike.conn;
                report = oscar.setRemoteUserSpeaking;
                entity = _closure1_slot24;
                golf = entity.VOICE;
                golf = zulu & golf;
                entity = entity.VOICE;
                entity = golf === entity;
                entity = report.bind(oscar)(tango, entity);
                _fun00100_ip = 108; continue _fun00099;
 90:
                report = mike.conn;
                entity = report.setRemoteUserSpeakingStatus;
                entity = entity.bind(report)(tango, zulu);
 108:
                entity = mike.handleSpeakingFlags;
                entity = entity.bind(mike)(tango, zulu);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[43] = entity;
        entity = {};
        oscar = 'clearAllSpeaking';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[44] = entity;
        entity = {};
        oscar = 'setEncryption';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            report = argFoo;
            entity = this;
            tango = entity.logger;
            zulu = tango.info;
            mike = global;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            mike = 'Selected encryption mode: ';
            mike = oscar.bind(mike)(report);
            mike = zulu.bind(tango)(mike);
            zulu = entity.conn;
            mike = zulu.setTransportOptions;
            entity = {};
            tango = {};
            tango['mode'] = report;
            report = argBar;
            tango['secretKey'] = report;
            entity['encryptionSettings'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[45] = entity;
        entity = {};
        oscar = 'setReconnectInterval';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = this;
            entity = argFoo;
            tango['reconnectInterval'] = entity;
            zulu = tango.conn;
            mike = zulu.setTransportOptions;
            entity = {};
            tango = tango.reconnectInterval;
            entity['reconnectInterval'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[46] = entity;
        entity = {};
        oscar = 'setKeyframeInterval';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = this;
            entity = argFoo;
            tango['keyframeInterval'] = entity;
            zulu = tango.conn;
            mike = zulu.setTransportOptions;
            entity = {};
            report = tango.getKeyFrameInterval;
            report = report.bind(tango)();
            entity['keyframeInterval'] = report;
            report = tango.keyframeInterval;
            tango = 0;
            tango = report > tango;
            entity['alwaysSendVideo'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[47] = entity;
        entity = {};
        oscar = 'setVideoQualityMeasurement';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = this;
            entity = argFoo;
            tango['videoQualityMeasurement'] = entity;
            zulu = tango.conn;
            mike = zulu.setTransportOptions;
            entity = {};
            tango = tango.videoQualityMeasurement;
            entity['videoQualityMeasurement'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[48] = entity;
        entity = {};
        oscar = 'setVideoEncoderExperiments';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = this;
            entity = argFoo;
            tango['videoEncoderExperiments'] = entity;
            zulu = tango.conn;
            mike = zulu.setTransportOptions;
            entity = {};
            tango = tango.videoEncoderExperiments;
            entity['videoEncoderExperiments'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[49] = entity;
        entity = {};
        oscar = 'setVideoBroadcast';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00101: for(var _fun00102_ip = 0; ; ) switch(_fun00102_ip) {
 0:
                entity = argFoo;
                mike = this;
                zulu = mike.selfVideo;
                if(!(zulu !== entity)) { _fun00102_ip = 34; continue _fun00101 }
 16:
                mike['selfVideo'] = entity;
                entity = mike.applyVideoTransportOptions;
                entity = entity.bind(mike)();
 34:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[50] = entity;
        entity = {};
        oscar = 'setGoLiveSource';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00103: for(var _fun00104_ip = 0; ; ) switch(_fun00104_ip) {
 0:
                entity = argFoo;
                report = this;
                mike = entity.quality;
                tango = mike.resolution;
                zulu = mike.frameRate;
                mike = 480;
                if(!(!(tango <= mike))) { _fun00104_ip = 50; continue _fun00103 }
 34:
                mike = 9;
                oscar = tango / mike;
                mike = 16;
                mike = oscar * mike;
                _fun00104_ip = 64; continue _fun00103;
 50:
                oscar = 3;
                golf = tango / oscar;
                oscar = 4;
                mike = golf * oscar;
 64:
                golf = entity.desktopDescription;
                oscar = null;
                if(!(oscar == golf)) { _fun00104_ip = 145; continue _fun00103 }
 76:
                golf = entity.cameraDescription;
                options = oscar != golf;
                golf = null;
                if(!options) { _fun00104_ip = 156; continue _fun00103 }
 91:
                options = entity.cameraDescription;
                romeo = options.videoDeviceGuid;
                options = entity.cameraDescription;
                yankee = options.audioDeviceGuid;
                options = global;
                options = options.HermesInternal;
                offset = options.concat;
                verify = '';
                options = ':';
                golf = offset.bind(verify)(romeo, options, yankee);
                _fun00104_ip = 156; continue _fun00103;
 145:
                options = entity.desktopDescription;
                golf = options.id;
 156:
                options = report.goLiveSourceIdentifier;
                if(!(options === golf)) { _fun00104_ip = 240; continue _fun00103 }
 166:
                options = report.setDesktopEncodingOptions;
                options = options.bind(report)(mike, tango, zulu);
                options = entity.desktopDescription;
                if(!(oscar != options)) { _fun00104_ip = 771; continue _fun00103 }
 192:
                options = entity.desktopDescription;
                offset = options.soundshareId;
                verify = options.useLoopback;
                options = report.soundshareId;
                if(!(options !== offset)) { _fun00104_ip = 771; continue _fun00103 }
 223:
                options = report.setSoundshareSource;
                options = options.bind(report)(offset, verify);
                _fun00104_ip = 771; continue _fun00103;
 240:
                report['goLiveSourceIdentifier'] = golf;
                golf = report.conn;
                golf = golf.setDesktopSource;
                if(!(oscar != golf)) { _fun00104_ip = 771; continue _fun00103 }
 265:
                golf = entity.desktopDescription;
                if(!(oscar == golf)) { _fun00104_ip = 344; continue _fun00103 }
 275:
                golf = entity.cameraDescription;
                if(!(oscar != golf)) { _fun00104_ip = 758; continue _fun00103 }
 288:
                golf = entity.cameraDescription;
                yankee = golf.videoDeviceGuid;
                offset = golf.audioDeviceGuid;
                verify = report.conn;
                options = verify.setGoLiveDevices;
                golf = {};
                golf['videoInputDeviceId'] = yankee;
                golf['audioInputDeviceId'] = offset;
                golf = options.bind(verify)(golf);
                _fun00104_ip = 758; continue _fun00103;
 344:
                golf = entity.desktopDescription;
                entity = golf.id;
                sizing = golf.soundshareId;
                kilo = golf.useLoopback;
                backup = golf.useVideoHook;
                foxtrot = golf.useGraphicsCapture;
                romeo = golf.useQuartzCapturer;
                yankee = golf.allowScreenCaptureKit;
                offset = golf.videoHookStaleFrameTimeoutMs;
                verify = golf.graphicsCaptureStaleFrameTimeoutMs;
                options = golf.hdrCaptureMode;
                golf = report.setSoundshareSource;
                golf = golf.bind(report)(sizing, kilo);
                if(!(oscar == entity)) { _fun00104_ip = 437; continue _fun00103 }
 425:
                sizing = ['', ''];
                _fun00104_ip = 451; continue _fun00103;
 437:
                kilo = entity.split;
                golf = ':';
                sizing = kilo.bind(entity)(golf);
 451:
                kilo = _closure1_slot3;
                echo = undefined;
                golf = 2;
                kilo = kilo.bind(echo)(sizing, golf);
                golf = 0;
                sizing = kilo[golf];
                golf = 1;
                kilo = kilo[golf];
                if(!(oscar == entity)) { _fun00104_ip = 510; continue _fun00103 }
 486:
                result = report.logger;
                output = result.info;
                golf = 'capturing desktop (type: <stop>).';
                golf = output.bind(result)(golf);
                _fun00104_ip = 612; continue _fun00103;
 510:
                result = report.logger;
                output = result.info;
                golf = backup.toString;
                config = golf.bind(backup)();
                golf = oscar == foxtrot;
                sequence = undefined;
                if(golf) { _fun00104_ip = 548; continue _fun00103 }
 539:
                golf = foxtrot.toString;
                sequence = golf.bind(foxtrot)();
 548:
                golf = global;
                golf = golf.HermesInternal;
                vacuum = golf.concat;
                equality = 'capturing desktop (type: ';
                lima = ', handle: ';
                status = ', use-video-hook: ';
                papa = ', use-graphics-capture: ';
                record = ').';
                whiskey = sizing;
                sierra = kilo;
                target = config;
                context = sequence;
                golf = equality[vacuum](whiskey, lima, sierra, status, target, papa, context, record, config);
                golf = output.bind(result)(golf);
 612:
                golf = report.conn;
                golf = golf.setDesktopSourceWithOptions;
                if(!(oscar == golf)) { _fun00104_ip = 673; continue _fun00103 }
 628:
                result = report.conn;
                output = result.setDesktopSource;
                golf = global;
                golf = golf.HermesInternal;
                echo = golf.concat;
                golf = 'wumpus-';
                golf = echo.bind(golf)(kilo);
                golf = output.bind(result)(golf, backup, sizing);
                _fun00104_ip = 758; continue _fun00103;
 673:
                if(!(oscar == entity)) { _fun00104_ip = 695; continue _fun00103 }
 677:
                oscar = report.conn;
                entity = oscar.clearDesktopSource;
                entity = entity.bind(oscar)();
                _fun00104_ip = 758; continue _fun00103;
 695:
                golf = report.conn;
                oscar = golf.setDesktopSourceWithOptions;
                entity = {};
                entity['type'] = sizing;
                entity['sourceId'] = kilo;
                entity['useVideoHook'] = backup;
                entity['useGraphicsCapture'] = foxtrot;
                entity['useQuartzCapturer'] = romeo;
                entity['allowScreenCaptureKit'] = yankee;
                entity['videoHookStaleFrameTimeoutMs'] = offset;
                entity['graphicsCaptureStaleFrameTimeoutMs'] = verify;
                entity['hdrCaptureMode'] = options;
                entity = oscar.bind(golf)(entity);
 758:
                entity = report.setDesktopEncodingOptions;
                entity = entity.bind(report)(mike, tango, zulu);
 771:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[51] = entity;
        entity = {};
        oscar = 'clearGoLiveDevices';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00105: for(var _fun00106_ip = 0; ; ) switch(_fun00106_ip) {
 0:
                entity = this;
                mike = entity.goLiveSourceIdentifier;
                zulu = null;
                if(!(zulu != mike)) { _fun00106_ip = 43; continue _fun00105 }
 15:
                oscar = entity.setDesktopEncodingOptions;
                report = 1280;
                tango = 720;
                mike = 30;
                mike = oscar.bind(entity)(report, tango, mike);
 43:
                mike = entity.conn;
                mike = mike.clearGoLiveDevices;
                if(!(zulu != mike)) { _fun00106_ip = 75; continue _fun00105 }
 59:
                mike = entity.conn;
                entity = mike.clearGoLiveDevices;
                entity = entity.bind(mike)();
 75:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[52] = entity;
        entity = {};
        oscar = 'clearDesktopSource';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00107: for(var _fun00108_ip = 0; ; ) switch(_fun00108_ip) {
 0:
                entity = this;
                mike = entity.goLiveSourceIdentifier;
                zulu = null;
                if(!(zulu != mike)) { _fun00108_ip = 43; continue _fun00107 }
 15:
                oscar = entity.setDesktopEncodingOptions;
                report = 1280;
                tango = 720;
                mike = 30;
                mike = oscar.bind(entity)(report, tango, mike);
 43:
                entity['goLiveSourceIdentifier'] = zulu;
                mike = entity.conn;
                mike = mike.clearDesktopSource;
                if(!(zulu == mike)) { _fun00108_ip = 92; continue _fun00107 }
 65:
                report = entity.conn;
                tango = report.setDesktopSource;
                zulu = '';
                mike = false;
                mike = tango.bind(report)(zulu, mike, zulu);
                _fun00108_ip = 108; continue _fun00107;
 92:
                mike = entity.conn;
                entity = mike.clearDesktopSource;
                entity = entity.bind(mike)();
 108:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[53] = entity;
        entity = {};
        oscar = 'setDesktopSourceStatusCallback';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00109: for(var _fun00110_ip = 0; ; ) switch(_fun00110_ip) {
 0:
                entity = this;
                tango = entity.conn;
                zulu = tango.setDesktopSourceStatusCallback;
                entity = null;
                if(!(entity != zulu)) { _fun00110_ip = 35; continue _fun00109 }
 21:
                mike = zulu.call;
                entity = argFoo;
                entity = mike.bind(zulu)(tango, entity);
 35:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[54] = entity;
        entity = {};
        oscar = 'hasDesktopSource';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.goLiveSourceIdentifier;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[55] = entity;
        entity = {};
        oscar = 'setDesktopEncodingOptions';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00111: for(var _fun00112_ip = 0; ; ) switch(_fun00112_ip) {
 0:
                backup = argFoo;
                foxtrot = argBar;
                yankee = argBaz;
                tango = this;
                entity = tango.destroyed;
                if(entity) { _fun00112_ip = 641; continue _fun00111 }
 26:
                sizing = 0;
                kilo = sizing === foxtrot;
                if(!kilo) { _fun00112_ip = 42; continue _fun00111 }
 35:
                entity = 10;
                if(!(!(yankee >= entity))) { _fun00112_ip = 68; continue _fun00111 }
 42:
                entity = 720;
                if(!(!(foxtrot > entity))) { _fun00112_ip = 68; continue _fun00111 }
 52:
                entity = 30;
                if(!(!(yankee > entity))) { _fun00112_ip = 68; continue _fun00111 }
 59:
                options = _closure1_slot13;
                _fun00112_ip = 75; continue _fun00111;
 68:
                options = _closure1_slot12;
 75:
                verify = {};
                verify['width'] = backup;
                verify['height'] = foxtrot;
                verify['framerate'] = yankee;
                mike = tango.videoQualityManager;
                entity = mike.getQuality;
                report = entity.bind(mike)();
                golf = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 20;
                mike = zulu[mike];
                zulu = undefined;
                mike = golf.bind(zulu)(mike);
                offset = mike.VideoQuality;
                golf = offset.equals;
                mike = report.capture;
                mike = golf.bind(offset)(verify, mike);
                mike = !mike;
                if(mike) { _fun00112_ip = 171; continue _fun00111 }
 161:
                report = report.bitrateMax;
                mike = report !== options;
 171:
                offset = tango.videoStreamParameters;
                golf = offset.findIndex;
                report = function(argFoo) {
                    entity = argFoo;
                    mike = entity.quality;
                    entity = _closure1_slot17;
                    entity = mike === entity;
                    return entity;
                };
                offset = golf.bind(offset)(report);
                report = -1;
                if(!(report === offset)) { _fun00112_ip = 205; continue _fun00111 }
 203:
                offset = 0;
 205:
                if(!mike) { _fun00112_ip = 353; continue _fun00111 }
 211:
                output = tango.videoQualityManager;
                romeo = output.setGoliveQuality;
                golf = {};
                golf['capture'] = verify;
                golf['encode'] = verify;
                golf['bitrateMax'] = options;
                golf = romeo.bind(output)(golf);
                golf = tango.videoStreamParameters;
                golf = golf.length;
                if(!(golf > offset)) { _fun00112_ip = 353; continue _fun00111 }
 262:
                golf = tango.videoStreamParameters;
                romeo = golf[offset];
                golf = {};
                if(!(sizing === backup)) { _fun00112_ip = 281; continue _fun00111 }
 278:
                if(kilo) { _fun00112_ip = 293; continue _fun00111 }
 281:
                kilo = _closure1_slot25;
                kilo = kilo.FIXED;
                _fun00112_ip = 303; continue _fun00111;
 293:
                sizing = _closure1_slot25;
                kilo = sizing.SOURCE;
 303:
                golf['type'] = kilo;
                golf['width'] = backup;
                golf['height'] = foxtrot;
                romeo['maxResolution'] = golf;
                golf = tango.videoStreamParameters;
                golf = golf[offset];
                golf['maxFrameRate'] = yankee;
                golf = tango.videoStreamParameters;
                golf = golf[offset];
                golf['maxBitrate'] = options;
 353:
                options = tango.videoStreamParameters;
                golf = options.findIndex;
                oscar = function(argFoo) {
                    entity = argFoo;
                    mike = entity.quality;
                    entity = _closure1_slot18;
                    entity = mike === entity;
                    return entity;
                };
                options = golf.bind(options)(oscar);
                oscar = report !== options;
                if(!oscar) { _fun00112_ip = 397; continue _fun00111 }
 382:
                report = tango.videoStreamParameters;
                report = report.length;
                oscar = report > options;
 397:
                golf = tango.videoQualityManager;
                report = golf.shouldEnableGoliveSimulcastForHqQuality;
                golf = report.bind(golf)(verify);
                report = oscar;
                if(!report) { _fun00112_ip = 442; continue _fun00111 }
 422:
                verify = tango.videoStreamParameters;
                verify = verify[options];
                verify = verify.active;
                report = verify !== golf;
 442:
                if(!oscar) { _fun00112_ip = 488; continue _fun00111 }
 445:
                oscar = tango.videoStreamParameters;
                oscar = oscar[options];
                oscar['active'] = golf;
                oscar = undefined;
                if(golf) { _fun00112_ip = 482; continue _fun00111 }
 466:
                golf = tango.videoStreamParameters;
                golf = golf[options];
                oscar = golf.ssrc;
 482:
                tango['simulcastLQDisabledSsrc'] = oscar;
 488:
                if(mike) { _fun00112_ip = 494; continue _fun00111 }
 491:
                mike = report;
 494:
                if(!mike) { _fun00112_ip = 641; continue _fun00111 }
 500:
                verify = tango.emit;
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 10;
                mike = oscar[mike];
                mike = report.bind(zulu)(mike);
                mike = mike.BaseConnectionEvent;
                options = mike.Video;
                sequence = tango.userId;
                control = tango.audioSSRC;
                mike = tango.videoStreamParameters;
                mike = mike[offset];
                source = mike.ssrc;
                mike = _closure1_slot41;
                entity = tango.videoStreamParameters;
                entity = entity[offset];
                entity = entity.ssrc;
                update = mike.bind(zulu)(entity);
                echo = tango.videoStreamParameters;
                vacuum = null;
                record = tango;
                config = options;
                entity = record[verify](config, sequence, vacuum, control, source, update, echo, result);
                zulu = tango.conn;
                mike = zulu.setTransportOptions;
                entity = tango.applyQualityConstraints;
                entity = entity.bind(tango)();
                entity = entity.constraints;
                entity = mike.bind(zulu)(entity);
 641:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[56] = entity;
        entity = {};
        oscar = 'setSDP';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[57] = entity;
        entity = {};
        oscar = 'setRemoteVideoSinkWants';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = this;
            entity = argFoo;
            zulu['remoteVideoSinkWants'] = entity;
            mike = zulu.updateVideoQuality;
            entity = _closure1_slot14;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[58] = entity;
        entity = {};
        oscar = 'setLocalVideoSinkWants';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00113: for(var _fun00114_ip = 0; ; ) switch(_fun00114_ip) {
 0:
                zulu = argFoo;
                mike = this;
                echo = mike.localVideoSinkWants;
                entity = global;
                report = entity.Object;
                tango = report.entries;
                entity = mike.remoteVideoSSRCs;
                result = tango.bind(report)(entity);
                entity = result.length;
                output = 0;
                tango = output < entity;
                entity = undefined;
                sizing = true;
                kilo = null;
                backup = false;
                romeo = 2;
                yankee = 1;
                offset = 0;
                verify = undefined;
                options = undefined;
                golf = undefined;
                oscar = undefined;
                report = undefined;
                if(!tango) { _fun00114_ip = 350; continue _fun00113 }
 83:
                update = result[offset];
                tango = _closure1_slot3;
                tango = tango.bind(entity)(update, romeo);
                record = tango[output];
                update = _closure1_slot37;
                tango = tango[yankee];
                config = update.bind(entity)(tango);
                tango = config.bind(entity)();
                update = tango.done;
                vacuum = tango;
                control = 0;
                source = 0;
                sequence = 0;
                tango = 0;
                if(update) { _fun00114_ip = 203; continue _fun00113 }
 137:
                context = vacuum.value;
                papa = kilo == echo;
                update = undefined;
                if(papa) { _fun00114_ip = 155; continue _fun00113 }
 151:
                update = echo[context];
 155:
                target = control + update;
                papa = kilo == zulu;
                update = undefined;
                if(papa) { _fun00114_ip = 172; continue _fun00113 }
 168:
                update = zulu[context];
 172:
                source = source + update;
                status = config.bind(entity)();
                update = status.done;
                vacuum = status;
                control = target;
                sequence = control;
                tango = source;
                report = context;
                if(!update) { _fun00114_ip = 137; continue _fun00113 }
 203:
                vacuum = verify;
                control = options;
                if(!(output === sequence)) { _fun00114_ip = 263; continue _fun00113 }
 213:
                vacuum = verify;
                control = options;
                if(!(output !== tango)) { _fun00114_ip = 263; continue _fun00113 }
 223:
                update = mike.conn;
                source = update.setDisableLocalVideo;
                control = update;
                vacuum = source;
                if(!(kilo != vacuum)) { _fun00114_ip = 263; continue _fun00113 }
 245:
                config = source.call;
                config = config.bind(source)(update, record, backup);
                vacuum = source;
                control = update;
 263:
                source = golf;
                update = oscar;
                if(!(output !== sequence)) { _fun00114_ip = 323; continue _fun00113 }
 273:
                source = golf;
                update = oscar;
                if(!(output === tango)) { _fun00114_ip = 323; continue _fun00113 }
 283:
                tango = mike.conn;
                sequence = tango.setDisableLocalVideo;
                update = tango;
                source = sequence;
                if(!(kilo != source)) { _fun00114_ip = 323; continue _fun00113 }
 305:
                config = sequence.call;
                config = config.bind(sequence)(tango, record, sizing);
                source = sequence;
                update = tango;
 323:
                offset = offset + 1;
                tango = result.length;
                golf = source;
                oscar = update;
                verify = vacuum;
                options = control;
                if(offset < tango) { _fun00114_ip = 83; continue _fun00113 }
 350:
                mike['localVideoSinkWants'] = zulu;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[59] = entity;
        entity = {};
        oscar = 'startSamplesLocalPlayback';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            _fun00115: for(var _fun00116_ip = 0; ; ) switch(_fun00116_ip) {
 0:
                entity = argBar;
                tango = argCorge;
                zulu = entity.numberOfChannels;
                mike = 2;
                if(!(!(zulu > mike))) { _fun00116_ip = 133; continue _fun00115 }
 19:
                oscar = new Array(0);
                mike = entity.numberOfChannels;
                zulu = 0;
                mike = zulu < mike;
                if(!mike) { _fun00116_ip = 74; continue _fun00115 }
 38:
                mike = entity.getChannelData;
                report = mike.bind(entity)(zulu);
                mike = oscar.push;
                mike = mike.bind(oscar)(report);
                zulu = zulu + 1;
                mike = entity.numberOfChannels;
                if(zulu < mike) { _fun00116_ip = 38; continue _fun00115 }
 74:
                mike = this;
                report = mike.conn;
                zulu = report.startSamplesLocalPlayback;
                mike = {};
                entity = entity.sampleRate;
                mike['sampleRate'] = entity;
                entity = argBaz;
                mike['volume'] = entity;
                offset = argFoo;
                yankee = report;
                verify = mike;
                options = oscar;
                golf = tango;
                entity = yankee[zulu](offset, verify, options, golf, oscar);
                _fun00116_ip = 150; continue _fun00115;
 133:
                zulu = undefined;
                mike = 1;
                entity = 'Too many channels';
                entity = tango.bind(zulu)(mike, entity);
 150:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[60] = entity;
        entity = {};
        oscar = 'stopAllSamplesLocalPlayback';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.conn;
            entity = mike.stopAllSamplesLocalPlayback;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[61] = entity;
        entity = {};
        oscar = 'stopSamplesLocalPlayback';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.conn;
            mike = zulu.stopSamplesLocalPlayback;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[62] = entity;
        entity = {};
        oscar = 'setBandwidthEstimationExperiments';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.conn;
            mike = zulu.setTransportOptions;
            entity = {};
            tango = argFoo;
            entity['bandwidthEstimationExperiments'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[63] = entity;
        entity = {};
        oscar = 'updateVideoQualityCore';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00117: for(var _fun00118_ip = 0; ; ) switch(_fun00118_ip) {
 0:
                entity = this;
                mike = entity.videoSupported;
                if(!mike) { _fun00118_ip = 41; continue _fun00117 }
 12:
                mike = entity.destroyed;
                if(mike) { _fun00118_ip = 41; continue _fun00117 }
 21:
                zulu = entity.conn;
                mike = zulu.setTransportOptions;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
 41:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[64] = entity;
        entity = {};
        oscar = 'setStreamParameters';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            zulu = argFoo;
            var _closure3_slot1 = zulu;
            var _closure3_slot2 = mike;
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            tango = function(argFoo, argBar) {
                _fun00119: for(var _fun00120_ip = 0; ; ) switch(_fun00120_ip) {
 0:
                    mike = argBar;
                    var _closure4_slot0 = mike;
                    oscar = function(argFoo) { // Original name: _loop
                        _fun00121: for(var _fun00122_ip = 0; ; ) switch(_fun00122_ip) {
 0:
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            tango = _closure3_slot1;
                            zulu = tango.findIndex;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.rid;
                                entity = _closure5_slot0;
                                entity = entity.rid;
                                entity = mike === entity;
                                return entity;
                            };
                            golf = zulu.bind(tango)(entity);
                            entity = -1;
                            if(!(entity !== golf)) { _fun00122_ip = 189; continue _fun00121 }
 45:
                            report = new Array(0);
                            tango = _closure1_slot1;
                            zulu = _closure1_slot2;
                            entity = 19;
                            zulu = zulu[entity];
                            entity = undefined;
                            oscar = tango.bind(entity)(zulu);
                            zulu = _closure3_slot2;
                            zulu = zulu.videoStreamParameters;
                            tango = zulu[golf];
                            zulu = _closure3_slot1;
                            zulu = zulu[golf];
                            zulu = oscar.bind(entity)(tango, zulu);
                            if(zulu) { _fun00122_ip = 159; continue _fun00121 }
 105:
                            zulu = _closure3_slot2;
                            tango = zulu.videoStreamParameters;
                            zulu = {};
                            oscar = _closure3_slot1;
                            verify = oscar[golf];
                            offset = zulu;
                            options = copyDataProperties(offset, verify);
                            tango[golf] = zulu;
                            tango = report.push;
                            zulu = {};
                            verify = oscar[golf];
                            offset = zulu;
                            oscar = copyDataProperties(offset, verify);
                            zulu = tango.bind(report)(zulu);
 159:
                            mike = _closure3_slot2;
                            tango = mike.conn;
                            zulu = tango.setTransportOptions;
                            mike = {};
                            mike['streamParameters'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
 189:
                            zulu = _closure4_slot0;
                            entity = global;
                            tango = entity.Error;
                            entity = tango.prototype;
                            mike = Object.create(entity, {constructor: {value: tango}});
                            offset = 'Invalid rid';
                            yankee = mike;
                            entity = new yankee[tango](offset, verify);
                            entity = entity instanceof Object ? entity : mike;
                            mike = undefined;
                            entity = zulu.bind(mike)(entity);
                            entity = {};
                            entity['v'] = mike;
                            return entity;
                        }
                    };
                    zulu = _closure1_slot37;
                    entity = _closure3_slot0;
                    mike = entity.videoStreamParameters;
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    zulu = report.bind(entity)();
                    mike = zulu.done;
                    tango = zulu;
                    if(mike) { _fun00120_ip = 93; continue _fun00119 }
 56:
                    mike = tango.value;
                    mike = oscar.bind(entity)(mike);
                    if(mike) { _fun00120_ip = 86; continue _fun00119 }
 69:
                    golf = report.bind(entity)();
                    zulu = golf.done;
                    tango = golf;
                    if(zulu) { _fun00120_ip = 93; continue _fun00119 }
 84:
                    _fun00120_ip = 56; continue _fun00119;
 86:
                    mike = mike.v;
                    return mike;
 93:
                    mike = argFoo;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[65] = entity;
        entity = {};
        oscar = 'applyVideoTransportOptions';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00123: for(var _fun00124_ip = 0; ; ) switch(_fun00124_ip) {
 0:
                entity = this;
                mike = entity.videoSupported;
                if(!mike) { _fun00124_ip = 208; continue _fun00123 }
 15:
                mike = entity.hasDesktopSource;
                mike = mike.bind(entity)();
                golf = false;
                if(!mike) { _fun00124_ip = 101; continue _fun00123 }
 30:
                mike = entity.videoStreamParameters;
                mike = mike.length;
                zulu = 0;
                mike = mike > zulu;
                golf = false;
                if(!mike) { _fun00124_ip = 101; continue _fun00123 }
 52:
                mike = entity.videoStreamParameters;
                mike = mike[zulu];
                mike = mike.maxResolution;
                zulu = null;
                tango = zulu == mike;
                zulu = undefined;
                if(tango) { _fun00124_ip = 84; continue _fun00123 }
 79:
                zulu = mike.type;
 84:
                mike = _closure1_slot25;
                mike = mike.SOURCE;
                golf = zulu === mike;
 101:
                tango = entity.conn;
                zulu = tango.setTransportOptions;
                report = entity.applyQualityConstraints;
                mike = {};
                oscar = entity.hasDesktopSource;
                oscar = oscar.bind(entity)();
                if(oscar) { _fun00124_ip = 142; continue _fun00123 }
 134:
                oscar = entity.videoDegradationPreference;
                _fun00124_ip = 162; continue _fun00123;
 142:
                if(golf) { _fun00124_ip = 153; continue _fun00123 }
 145:
                golf = entity.desktopDegradationPreference;
                _fun00124_ip = 159; continue _fun00123;
 153:
                golf = entity.sourceDesktopDegradationPreference;
 159:
                oscar = golf;
 162:
                mike['encodingVideoDegradationPreference'] = oscar;
                mike = report.bind(entity)(mike);
                mike = mike.constraints;
                mike = zulu.bind(tango)(mike);
                zulu = entity.conn;
                mike = zulu.setVideoBroadcast;
                entity = entity.selfVideo;
                entity = mike.bind(zulu)(entity);
 208:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[66] = entity;
        entity = {};
        oscar = 'chooseEncryptionMode';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00125: for(var _fun00126_ip = 0; ; ) switch(_fun00126_ip) {
 0:
                oscar = argFoo;
                mike = _closure1_slot37;
                tango = undefined;
                entity = argBar;
                zulu = mike.bind(tango)(entity);
                mike = zulu.bind(tango)();
                entity = mike.done;
                if(entity) { _fun00126_ip = 101; continue _fun00125 }
 32:
                entity = mike.value;
                golf = _closure1_slot37;
                verify = golf.bind(tango)(oscar);
                options = verify.bind(tango)();
                golf = options.done;
                if(golf) { _fun00126_ip = 86; continue _fun00125 }
 58:
                golf = options.value;
                if(!(entity !== golf)) { _fun00126_ip = 84; continue _fun00125 }
 67:
                offset = verify.bind(tango)();
                golf = offset.done;
                options = offset;
                if(golf) { _fun00126_ip = 86; continue _fun00125 }
 82:
                _fun00126_ip = 58; continue _fun00125;
 84:
                return entity;
 86:
                golf = zulu.bind(tango)();
                entity = golf.done;
                mike = golf;
                if(!entity) { _fun00126_ip = 32; continue _fun00125 }
 101:
                entity = 'xsalsa20_poly1305';
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[67] = entity;
        entity = {};
        oscar = 'getUserOptions';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            zulu = global;
            tango = zulu.Object;
            zulu = tango.keys;
            mike = mike.remoteAudioSSRCs;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun00127: for(var _fun00128_ip = 0; ; ) switch(_fun00128_ip) {
 0:
                    tango = argFoo;
                    entity = _closure3_slot0;
                    entity = entity.remoteVideoSSRCs;
                    entity = entity[tango];
                    zulu = 0;
                    oscar = undefined;
                    report = 0;
                    if(!(oscar !== entity)) { _fun00128_ip = 76; continue _fun00127 }
 30:
                    entity = _closure3_slot0;
                    entity = entity.remoteVideoSSRCs;
                    entity = entity[tango];
                    entity = entity.length;
                    entity = entity > zulu;
                    report = 0;
                    if(!entity) { _fun00128_ip = 76; continue _fun00127 }
 58:
                    entity = _closure3_slot0;
                    entity = entity.remoteVideoSSRCs;
                    entity = entity[tango];
                    report = entity[zulu];
 76:
                    entity = {};
                    entity['id'] = tango;
                    zulu = _closure3_slot0;
                    mike = zulu.remoteAudioSSRCs;
                    mike = mike[tango];
                    entity['ssrc'] = mike;
                    entity['videoSsrc'] = report;
                    mike = zulu.remoteVideoSSRCs;
                    mike = mike[tango];
                    entity['videoSsrcs'] = mike;
                    mike = _closure1_slot41;
                    mike = mike.bind(oscar)(report);
                    entity['rtxSsrc'] = mike;
                    mike = zulu.getLocalMute;
                    mike = mike.bind(zulu)(tango);
                    entity['mute'] = mike;
                    mike = zulu.getLocalVolume;
                    mike = mike.bind(zulu)(tango);
                    entity['volume'] = mike;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[68] = entity;
        entity = {};
        oscar = 'createInputModeOptions';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00129: for(var _fun00130_ip = 0; ; ) switch(_fun00130_ip) {
 0:
                mike = this;
                zulu = mike.inputMode;
                entity = _closure1_slot20;
                entity = entity.VOICE_ACTIVITY;
                if(!(entity !== zulu)) { _fun00130_ip = 113; continue _fun00129 }
 26:
                entity = _closure1_slot20;
                entity = entity.PUSH_TO_TALK;
                if(!(entity !== zulu)) { _fun00130_ip = 98; continue _fun00129 }
 40:
                entity = global;
                report = entity.Error;
                oscar = mike.inputMode;
                entity = entity.HermesInternal;
                zulu = entity.concat;
                entity = 'Unknown Input Mode: ';
                golf = zulu.bind(entity)(oscar);
                zulu = report.prototype;
                zulu = Object.create(zulu, {constructor: {value: report}});
                options = zulu;
                entity = new options[report](golf, oscar);
                entity = entity instanceof Object ? entity : zulu;
                throw entity;
 98:
                entity = {};
                zulu = mike.pttReleaseDelay;
                entity['pttReleaseDelay'] = zulu;
                return entity;
 113:
                entity = {};
                zulu = mike.vadThreshold;
                entity['vadThreshold'] = zulu;
                zulu = mike.vadAutoThreshold;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                tango = 21;
                report = report[tango];
                tango = undefined;
                tango = oscar.bind(tango)(report);
                tango = tango.VADAggressiveness;
                if(zulu) { _fun00130_ip = 171; continue _fun00129 }
 163:
                zulu = tango.DISABLED;
                _fun00130_ip = 177; continue _fun00129;
 171:
                zulu = tango.VERY_AGGRESSIVE;
 177:
                entity['vadAutoThreshold'] = zulu;
                zulu = mike.vadUseKrisp;
                entity['vadUseKrisp'] = zulu;
                zulu = mike.vadLeading;
                entity['vadLeading'] = zulu;
                mike = mike.vadTrailing;
                entity['vadTrailing'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[69] = entity;
        entity = {};
        oscar = 'getAttenuationOptions';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = {};
            zulu = mike.isAttenuating;
            zulu = zulu.bind(mike)();
            entity['attenuation'] = zulu;
            zulu = mike.attenuationFactor;
            entity['attenuationFactor'] = zulu;
            zulu = mike.attenuateWhileSpeakingSelf;
            entity['attenuateWhileSpeakingSelf'] = zulu;
            mike = mike.attenuateWhileSpeakingOthers;
            entity['attenuateWhileSpeakingOthers'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[70] = entity;
        entity = {};
        oscar = 'getCodecParams';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00131: for(var _fun00132_ip = 0; ; ) switch(_fun00132_ip) {
 0:
                entity = _closure1_slot22;
                zulu = entity.H264;
                entity = argFoo;
                if(!(entity === zulu)) { _fun00132_ip = 158; continue _fun00131 }
 23:
                entity = argBar;
                if(entity) { _fun00132_ip = 142; continue _fun00131 }
 29:
                entity = {'level-asymmetry-allowed': '1', 'packetization-mode': '1'};
                zulu = '1';
                report = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 9;
                tango = tango[mike];
                mike = undefined;
                tango = report.bind(mike)(tango);
                mike = tango.getVoiceEngine;
                mike = mike.bind(tango)();
                report = mike.platform;
                mike = '4d0033';
                tango = 'android';
                if(!(tango === report)) { _fun00132_ip = 107; continue _fun00131 }
 101:
                mike = '42e01f';
 107:
                entity['profile-level-id'] = mike;
                mike = this;
                tango = mike.softwareH264;
                mike = '0';
                if(!tango) { _fun00132_ip = 133; continue _fun00131 }
 130:
                mike = zulu;
 133:
                entity['software-h264'] = mike;
                _fun00132_ip = 156; continue _fun00131;
 142:
                entity = {'level-asymmetry-allowed': '1', 'packetization-mode': '1', 'profile-level-id': '42e034'};
 156:
                _fun00132_ip = 160; continue _fun00131;
 158:
                entity = {};
 160:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[71] = entity;
        entity = {};
        oscar = 'getCodecOptions';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00133: for(var _fun00134_ip = 0; ; ) switch(_fun00134_ip) {
 0:
                papa = argFoo;
                context = argBar;
                record = this;
                var _closure3_slot0 = papa;
                zulu = record.codecs;
                mike = zulu.find;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.name;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                mike = mike.bind(zulu)(entity);
                zulu = {'type': null, 'name': null, 'freq': 48000, 'pacsize': 960, 'channels': 1, 'rate': 64000};
                config = null;
                entity = config == mike;
                sequence = undefined;
                tango = undefined;
                if(entity) { _fun00134_ip = 65; continue _fun00133 }
 59:
                tango = mike.payloadType;
 65:
                report = config != tango;
                entity = 0;
                if(!report) { _fun00134_ip = 77; continue _fun00133 }
 74:
                entity = tango;
 77:
                zulu['type'] = entity;
                zulu['name'] = papa;
                entity = 48000;
                tango = {};
                oscar = config == mike;
                report = undefined;
                if(oscar) { _fun00134_ip = 112; continue _fun00133 }
 106:
                report = mike.payloadType;
 112:
                oscar = config != report;
                mike = 0;
                if(!oscar) { _fun00134_ip = 124; continue _fun00133 }
 121:
                mike = report;
 124:
                tango['type'] = mike;
                tango['name'] = papa;
                tango['freq'] = entity;
                entity = 2;
                tango['channels'] = entity;
                mike = {};
                control = '1';
                mike['stereo'] = control;
                tango['params'] = mike;
                mike = new Array(1);
                mike[0] = tango;
                tango = _closure1_slot23;
                report = tango.STREAM;
                tango = argBaz;
                if(!(tango === report)) { _fun00134_ip = 199; continue _fun00133 }
 193:
                zulu['channels'] = entity;
 199:
                tango = new Array(0);
                report = {'name': '', 'type': 0, 'rtxType': 0};
                entity = {};
                report['params'] = entity;
                oscar = _closure1_slot37;
                entity = record.codecs;
                update = oscar.bind(sequence)(entity);
                oscar = update.bind(sequence)();
                entity = oscar.done;
                echo = false;
                result = 'params';
                output = '0';
                sizing = '3';
                kilo = true;
                backup = 15;
                foxtrot = oscar;
                romeo = report;
                yankee = undefined;
                offset = undefined;
                verify = undefined;
                options = undefined;
                golf = undefined;
                oscar = undefined;
                report = romeo;
                if(entity) { _fun00134_ip = 811; continue _fun00133 }
 294:
                sierra = foxtrot.value;
                entity = sierra.name;
                target = romeo;
                if(!(entity !== papa)) { _fun00134_ip = 787; continue _fun00133 }
 314:
                status = {};
                lima = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[backup];
                whiskey = lima.bind(sequence)(entity);
                lima = whiskey.codecNameToPayloadName;
                entity = sierra.name;
                entity = lima.bind(whiskey)(entity);
                status['name'] = entity;
                entity = config == sierra;
                whiskey = undefined;
                if(entity) { _fun00134_ip = 368; continue _fun00133 }
 362:
                whiskey = sierra.payloadType;
 368:
                lima = config != whiskey;
                entity = 0;
                if(!lima) { _fun00134_ip = 380; continue _fun00133 }
 377:
                entity = whiskey;
 380:
                status['type'] = entity;
                entity = config == sierra;
                lima = undefined;
                if(entity) { _fun00134_ip = 399; continue _fun00133 }
 393:
                lima = sierra.rtxPayloadType;
 399:
                equality = config != lima;
                entity = 0;
                if(!equality) { _fun00134_ip = 411; continue _fun00133 }
 408:
                entity = lima;
 411:
                status['rtxType'] = entity;
                equality = record.getCodecParams;
                entity = sierra.name;
                entity = equality.bind(record)(entity, kilo);
                status['params'] = entity;
                quebec = record.experimentFlags;
                equality = quebec.has;
                entity = _closure1_slot11;
                entity = entity.RESET_DECODER_ON_ERRORS;
                entity = equality.bind(quebec)(entity);
                if(!entity) { _fun00134_ip = 481; continue _fun00133 }
 467:
                entity = status.params;
                entity['reset-on-errors'] = control;
 481:
                quebec = record.experimentFlags;
                equality = quebec.has;
                entity = _closure1_slot11;
                entity = entity.SOFTWARE_FALLBACK_ON_ERRORS;
                entity = equality.bind(quebec)(entity);
                if(!entity) { _fun00134_ip = 524; continue _fun00133 }
 510:
                entity = status.params;
                entity['fallback-after-errors'] = sizing;
 524:
                quebec = record.experimentFlags;
                equality = quebec.has;
                entity = _closure1_slot11;
                entity = entity.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS;
                entity = equality.bind(quebec)(entity);
                if(!entity) { _fun00134_ip = 567; continue _fun00133 }
 553:
                entity = status.params;
                entity['fallback-on-consecutive-errors'] = control;
 567:
                quebec = record.experimentFlags;
                equality = quebec.has;
                entity = _closure1_slot11;
                entity = entity.SIGNAL_AV1_HARDWARE_DECODE;
                entity = equality.bind(quebec)(entity);
                if(!entity) { _fun00134_ip = 610; continue _fun00133 }
 596:
                entity = status.params;
                entity['hardware-av1-decode'] = control;
 610:
                equality = record.hardwareH264;
                entity = output;
                if(!equality) { _fun00134_ip = 625; continue _fun00133 }
 622:
                entity = control;
 625:
                equality = status.params;
                equality['hardware-h264'] = entity;
                equality = tango.push;
                equality = equality.bind(tango)(status);
                equality = sierra.name;
                target = romeo;
                yankee = whiskey;
                offset = sierra;
                verify = lima;
                options = offset;
                golf = status;
                oscar = entity;
                if(!(equality === context)) { _fun00134_ip = 787; continue _fun00133 }
 677:
                equality = {};
                variable39 = equality;
                variable38 = status;
                quebec = copyDataProperties(variable39, variable38);
                variable36 = record.getCodecParams;
                quebec = sierra.name;
                quebec = variable36.bind(record)(quebec, echo);
                equality[result] = quebec;
                variable37 = record.experimentFlags;
                variable36 = variable37.has;
                quebec = _closure1_slot11;
                quebec = quebec.VIDEOTOOLBOX_RATE_CONTROL;
                quebec = variable36.bind(variable37)(quebec);
                if(!quebec) { _fun00134_ip = 754; continue _fun00133 }
 740:
                quebec = equality.params;
                quebec['fixed-rate-presentation-timestamps'] = control;
 754:
                quebec = equality.params;
                quebec['hardware-h264'] = entity;
                target = equality;
                yankee = whiskey;
                offset = sierra;
                verify = lima;
                options = offset;
                golf = status;
                oscar = entity;
 787:
                status = update.bind(sequence)();
                entity = status.done;
                romeo = target;
                foxtrot = status;
                report = romeo;
                if(!entity) { _fun00134_ip = 294; continue _fun00133 }
 811:
                entity = {};
                entity['videoEncoder'] = report;
                entity['videoDecoders'] = tango;
                entity['audioEncoder'] = zulu;
                entity['audioDecoders'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[72] = entity;
        entity = {};
        oscar = 'getKeyFrameInterval';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00135: for(var _fun00136_ip = 0; ; ) switch(_fun00136_ip) {
 0:
                mike = this;
                entity = mike.keyframeInterval;
                zulu = 0;
                if(!(entity > zulu)) { _fun00136_ip = 25; continue _fun00135 }
 15:
                entity = mike.clipsKeyFrameInterval;
                if(!(!(entity > zulu))) { _fun00136_ip = 58; continue _fun00135 }
 25:
                entity = global;
                report = entity.Math;
                tango = report.max;
                zulu = mike.keyframeInterval;
                entity = mike.clipsKeyFrameInterval;
                entity = tango.bind(report)(zulu, entity);
                _fun00136_ip = 89; continue _fun00135;
 58:
                zulu = global;
                report = zulu.Math;
                tango = report.min;
                zulu = mike.keyframeInterval;
                mike = mike.clipsKeyFrameInterval;
                entity = tango.bind(report)(zulu, mike);
 89:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[73] = entity;
        entity = {};
        oscar = 'getConnectionTransportOptions';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00137: for(var _fun00138_ip = 0; ; ) switch(_fun00138_ip) {
 0:
                tango = this;
                entity = {};
                mike = tango.selfMute;
                entity['selfMute'] = mike;
                report = _closure1_slot19;
                mike = tango.inputMode;
                mike = report[mike];
                entity['inputMode'] = mike;
                mike = tango.createInputModeOptions;
                mike = mike.bind(tango)();
                entity['inputModeOptions'] = mike;
                mike = tango.minimumJitterBufferLevel;
                entity['minimumJitterBufferLevel'] = mike;
                mike = tango.postponeDecodeLevel;
                entity['postponeDecodeLevel'] = mike;
                mike = tango.getAttenuationOptions;
                options = mike.bind(tango)();
                verify = entity;
                mike = copyDataProperties(verify, options);
                mike = true;
                report = 'fec';
                entity[report] = mike;
                oscar = 0.3;
                report = 'packetLossRate';
                entity[report] = oscar;
                oscar = tango.qos;
                report = 'qos';
                entity[report] = oscar;
                oscar = _closure1_slot34;
                report = 'prioritySpeakerDucking';
                entity[report] = oscar;
                oscar = tango.voiceBitrate;
                report = 'encodingVoiceBitRate';
                entity[report] = oscar;
                oscar = _closure1_slot31;
                report = 'callBitRate';
                entity[report] = oscar;
                oscar = _closure1_slot32;
                report = 'callMinBitRate';
                entity[report] = oscar;
                oscar = _closure1_slot33;
                report = 'callMaxBitRate';
                entity[report] = oscar;
                oscar = tango.videoDegradationPreference;
                report = 'encodingVideoDegradationPreference';
                entity[report] = oscar;
                oscar = tango.experimentalEncoders;
                report = 'experimentalEncoders';
                entity[report] = oscar;
                oscar = tango.hardwareH264;
                report = 'hardwareH264';
                entity[report] = oscar;
                oscar = tango.softwareH264;
                report = 'softwareH264';
                entity[report] = oscar;
                oscar = tango.reconnectInterval;
                report = 'reconnectInterval';
                entity[report] = oscar;
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                report = 9;
                oscar = oscar[report];
                report = undefined;
                golf = golf.bind(report)(oscar);
                oscar = golf.supportsFeature;
                report = _closure1_slot26;
                report = report.VIDEO_EFFECTS;
                report = oscar.bind(golf)(report);
                if(!report) { _fun00138_ip = 354; continue _fun00137 }
 335:
                golf = tango.context;
                oscar = _closure1_slot23;
                oscar = oscar.STREAM;
                report = golf === oscar;
 354:
                if(!report) { _fun00138_ip = 365; continue _fun00137 }
 357:
                entity['enableVideoEffects'] = mike;
 365:
                golf = tango.experimentFlags;
                oscar = golf.has;
                report = _closure1_slot11;
                report = report.MUTE_BEFORE_PROCESSING;
                report = oscar.bind(golf)(report);
                if(!report) { _fun00138_ip = 400; continue _fun00137 }
 394:
                entity['muteBeforeProcessing'] = mike;
 400:
                golf = tango.experimentFlags;
                oscar = golf.has;
                report = _closure1_slot11;
                report = report.PTT_BEFORE_PROCESSING;
                report = oscar.bind(golf)(report);
                if(!report) { _fun00138_ip = 435; continue _fun00137 }
 429:
                entity['pttBeforeProcessing'] = mike;
 435:
                report = tango.experimentFlags;
                tango = report.has;
                zulu = _closure1_slot11;
                zulu = zulu.SKIP_ENCODE;
                zulu = tango.bind(report)(zulu);
                if(!zulu) { _fun00138_ip = 470; continue _fun00137 }
 464:
                entity['skipEncode'] = mike;
 470:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[74] = entity;
        entity = {};
        oscar = 'setStream';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = 'Method not implemented.';
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        };
        entity['value'] = oscar;
        mike[75] = entity;
        entity = {};
        oscar = 'getUserIdBySsrc';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[76] = entity;
        entity = {};
        oscar = 'prepareSecureFramesTransition';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00139: for(var _fun00140_ip = 0; ; ) switch(_fun00140_ip) {
 0:
                entity = this;
                oscar = entity.conn;
                report = oscar.prepareSecureFramesTransition;
                entity = null;
                if(!(entity != report)) { _fun00140_ip = 45; continue _fun00139 }
 21:
                tango = report.call;
                verify = argFoo;
                options = argBar;
                golf = argBaz;
                yankee = report;
                offset = oscar;
                entity = yankee[tango](offset, verify, options, golf, oscar);
 45:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[77] = entity;
        entity = {};
        oscar = 'prepareSecureFramesEpoch';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00141: for(var _fun00142_ip = 0; ; ) switch(_fun00142_ip) {
 0:
                entity = this;
                oscar = entity.conn;
                report = oscar.prepareSecureFramesEpoch;
                entity = null;
                if(!(entity != report)) { _fun00142_ip = 45; continue _fun00141 }
 21:
                tango = report.call;
                verify = argFoo;
                options = argBar;
                golf = argBaz;
                yankee = report;
                offset = oscar;
                entity = yankee[tango](offset, verify, options, golf, oscar);
 45:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[78] = entity;
        entity = {};
        oscar = 'executeSecureFramesTransition';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00143: for(var _fun00144_ip = 0; ; ) switch(_fun00144_ip) {
 0:
                entity = this;
                tango = entity.conn;
                zulu = tango.executeSecureFramesTransition;
                entity = null;
                if(!(entity != zulu)) { _fun00144_ip = 35; continue _fun00143 }
 21:
                mike = zulu.call;
                entity = argFoo;
                entity = mike.bind(zulu)(tango, entity);
 35:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[79] = entity;
        entity = {};
        oscar = 'getMLSKeyPackage';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00145: for(var _fun00146_ip = 0; ; ) switch(_fun00146_ip) {
 0:
                entity = this;
                tango = entity.conn;
                zulu = tango.getMLSKeyPackage;
                entity = null;
                if(!(entity != zulu)) { _fun00146_ip = 35; continue _fun00145 }
 21:
                mike = zulu.call;
                entity = argFoo;
                entity = mike.bind(zulu)(tango, entity);
 35:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[80] = entity;
        entity = {};
        oscar = 'updateMLSExternalSender';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00147: for(var _fun00148_ip = 0; ; ) switch(_fun00148_ip) {
 0:
                entity = this;
                tango = entity.conn;
                zulu = tango.updateMLSExternalSender;
                entity = null;
                if(!(entity != zulu)) { _fun00148_ip = 35; continue _fun00147 }
 21:
                mike = zulu.call;
                entity = argFoo;
                entity = mike.bind(zulu)(tango, entity);
 35:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[81] = entity;
        entity = {};
        oscar = 'processMLSProposals';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00149: for(var _fun00150_ip = 0; ; ) switch(_fun00150_ip) {
 0:
                entity = this;
                report = entity.conn;
                tango = report.processMLSProposals;
                entity = null;
                if(!(entity != tango)) { _fun00150_ip = 39; continue _fun00149 }
 21:
                zulu = tango.call;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(report, mike, entity);
 39:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[82] = entity;
        entity = {};
        oscar = 'prepareMLSCommitTransition';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00151: for(var _fun00152_ip = 0; ; ) switch(_fun00152_ip) {
 0:
                entity = this;
                oscar = entity.conn;
                report = oscar.prepareMLSCommitTransition;
                entity = null;
                if(!(entity != report)) { _fun00152_ip = 45; continue _fun00151 }
 21:
                tango = report.call;
                verify = argFoo;
                options = argBar;
                golf = argBaz;
                yankee = report;
                offset = oscar;
                entity = yankee[tango](offset, verify, options, golf, oscar);
 45:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[83] = entity;
        entity = {};
        oscar = 'processMLSWelcome';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00153: for(var _fun00154_ip = 0; ; ) switch(_fun00154_ip) {
 0:
                entity = this;
                oscar = entity.conn;
                report = oscar.processMLSWelcome;
                entity = null;
                if(!(entity != report)) { _fun00154_ip = 45; continue _fun00153 }
 21:
                tango = report.call;
                verify = argFoo;
                options = argBar;
                golf = argBaz;
                yankee = report;
                offset = oscar;
                entity = yankee[tango](offset, verify, options, golf, oscar);
 45:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[84] = entity;
        entity = {};
        oscar = 'getMLSPairwiseFingerprint';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00155: for(var _fun00156_ip = 0; ; ) switch(_fun00156_ip) {
 0:
                entity = this;
                oscar = entity.conn;
                report = oscar.getMLSPairwiseFingerprint;
                entity = null;
                if(!(entity != report)) { _fun00156_ip = 45; continue _fun00155 }
 21:
                tango = report.call;
                verify = argFoo;
                options = argBar;
                golf = argBaz;
                yankee = report;
                offset = oscar;
                entity = yankee[tango](offset, verify, options, golf, oscar);
 45:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[85] = entity;
        entity = {};
        oscar = 'presentDesktopSourcePicker';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00157: for(var _fun00158_ip = 0; ; ) switch(_fun00158_ip) {
 0:
                entity = this;
                tango = entity.conn;
                zulu = tango.presentDesktopSourcePicker;
                entity = null;
                if(!(entity != zulu)) { _fun00158_ip = 37; continue _fun00157 }
 23:
                mike = zulu.call;
                entity = argFoo;
                entity = mike.bind(zulu)(tango, entity);
 37:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[86] = entity;
        oscar = {};
        entity = 'create';
        oscar['key'] = entity;
        entity = function(argFoo, argBar, argBaz) { // Original name: value
            report = _closure2_slot0;
            entity = report.prototype;
            mike = Object.create(entity, {constructor: {value: report}});
            options = argFoo;
            golf = argBar;
            oscar = true;
            verify = mike;
            entity = new verify[report](options, golf, oscar, report);
            entity = entity instanceof Object ? entity : mike;
            zulu = entity.initialize;
            mike = argBaz;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        oscar['value'] = entity;
        entity = new Array(2);
        entity[0] = oscar;
        oscar = {};
        options = 'createReplay';
        oscar['key'] = options;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00159: for(var _fun00160_ip = 0; ; ) switch(_fun00160_ip) {
 0:
                oscar = argFoo;
                var _closure3_slot0 = oscar;
                report = _closure2_slot0;
                mike = report.prototype;
                zulu = Object.create(mike, {constructor: {value: report}});
                options = '0';
                golf = true;
                offset = zulu;
                verify = oscar;
                mike = new offset[report](verify, options, golf, oscar);
                mike = mike instanceof Object ? mike : zulu;
                var _closure3_slot1 = mike;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                tango = 9;
                report = report[tango];
                tango = undefined;
                report = oscar.bind(tango)(report);
                tango = report.getVoiceEngine;
                oscar = tango.bind(report)();
                var _closure3_slot2 = oscar;
                tango = mike.initializeStreamParameters;
                report = {'type': null, 'rid': '100', 'ssrc': 0, 'rtxSsrc': 0, 'quality': 100, 'active': false};
                zulu = _closure1_slot15;
                zulu = zulu.VIDEO;
                report['type'] = zulu;
                zulu = new Array(1);
                zulu[0] = report;
                zulu = tango.bind(mike)(zulu);
                report = oscar.createReplayConnection;
                tango = 'default';
                zulu = function() {
                    _fun00161: for(var _fun00162_ip = 0; ; ) switch(_fun00162_ip) {
 0:
                        mike = _closure3_slot2;
                        zulu = mike.getCodecCapabilities;
                        mike = null;
                        if(!(mike == zulu)) { _fun00162_ip = 31; continue _fun00161 }
 19:
                        mike = _closure3_slot2;
                        zulu = mike.getSupportedVideoCodecs;
                        _fun00162_ip = 41; continue _fun00161;
 31:
                        mike = _closure3_slot2;
                        zulu = mike.getCodecCapabilities;
 41:
                        mike = _closure3_slot1;
                        oscar = mike.on;
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        entity = 10;
                        tango = tango[entity];
                        entity = undefined;
                        tango = report.bind(entity)(tango);
                        tango = tango.BaseConnectionEvent;
                        report = tango.Stats;
                        tango = mike.handleStats;
                        tango = oscar.bind(mike)(report, tango);
                        report = mike.conn;
                        tango = report.setOnVideoCallback;
                        mike = mike.handleVideo;
                        mike = tango.bind(report)(mike);
                        mike = function(argFoo) {
                            options = _closure1_slot0;
                            verify = _closure1_slot2;
                            oscar = 15;
                            mike = verify[oscar];
                            entity = undefined;
                            offset = options.bind(entity)(mike);
                            golf = offset.getExperimentCodecs;
                            mike = _closure3_slot1;
                            report = mike.experimentFlags;
                            offset = golf.bind(offset)(report);
                            yankee = {'type': 'audio', 'name': null, 'priority': 1, 'payloadType': 120};
                            tango = _closure1_slot22;
                            report = tango.OPUS;
                            yankee['name'] = report;
                            romeo = 1;
                            report = new Array(1);
                            report[0] = yankee;
                            oscar = verify[oscar];
                            verify = options.bind(entity)(oscar);
                            options = verify.filterVideoCodecs;
                            oscar = argFoo;
                            verify = options.bind(verify)(oscar, offset);
                            options = verify.map;
                            oscar = function(argFoo, argBar) {
                                mike = argFoo;
                                report = argBar;
                                entity = 2;
                                zulu = entity * report;
                                entity = 101;
                                tango = entity + zulu;
                                entity = {};
                                zulu = 'video';
                                entity['type'] = zulu;
                                zulu = mike.name;
                                entity['name'] = zulu;
                                zulu = 1;
                                report = report + zulu;
                                entity['priority'] = report;
                                entity['payloadType'] = tango;
                                zulu = tango + zulu;
                                entity['rtxPayloadType'] = zulu;
                                zulu = mike.encode;
                                entity['encode'] = zulu;
                                mike = mike.decode;
                                entity['decode'] = mike;
                                return entity;
                            };
                            foxtrot = options.bind(verify)(oscar);
                            backup = report;
                            oscar = arraySpread(backup, foxtrot, romeo);
                            mike['codecs'] = report;
                            oscar = mike.setCodecs;
                            report = tango.OPUS;
                            tango = tango.H264;
                            zulu = _closure3_slot0;
                            zulu = oscar.bind(mike)(report, tango, zulu);
                            zulu = mike.conn;
                            mike = zulu.startReplay;
                            mike = mike.bind(zulu)();
                            return entity;
                        };
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    }
                };
                entity = argBar;
                zulu = report.bind(oscar)(tango, zulu, entity);
                entity = null;
                tango = entity == zulu;
                if(tango) { _fun00160_ip = 182; continue _fun00159 }
 173:
                mike['conn'] = zulu;
                entity = mike;
 182:
                return entity;
            }
        };
        oscar['value'] = golf;
        entity[1] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 23;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/native/Connection.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();