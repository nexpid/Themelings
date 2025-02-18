// app/modules/sound_playback/native/SoundUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    tangon = 0;
    golfie = oscard[tangon];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.NativeModules;
    var _closure1_slot4 = golfie;
    var _closure1_slot5 = tangon;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo, argBar, argBaz, argCor) { // Original name: RNSound
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = argBaz;
            zuuluu['_volume'] = michal;
            michal = false;
            zuuluu['_loaded'] = michal;
            michal = _closure1_slot5;
            michal = parseFloat(michal);
            tangon = michal + 1;
            _closure1_slot5 = tangon;
            zuuluu['_key'] = michal;
            michal = -1;
            zuuluu['_duration'] = michal;
            zuuluu['_numberOfChannels'] = michal;
            michal = 1;
            zuuluu['_volume'] = michal;
            michal = 0;
            zuuluu['_pan'] = michal;
            zuuluu['_numberOfLoops'] = michal;
            oscard = zuuluu._createSound;
            report = argFoo;
            tangon = argBar;
            michal = argCor;
            michal = oscard.bind(zuuluu)(report, tangon, michal);
            zuuluu['_sound'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = '_createSound';
        entity['key'] = michal;
        michal = function(argFoo, argBar, argBaz) { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = argBaz;
            var _closure3_slot1 = zuuluu;
            zuuluu = _closure1_slot4;
            oscard = zuuluu.DCDSoundManager;
            report = oscard.prepare;
            option = michal._key;
            offset = argFoo;
            verify = argBar;
            golfie = function(argFoo, argBar) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = argFoo;
                    entity = argBar;
                    if(!entity) { _fun00002_ip = 39; continue _fun00001 }
 9:
                    michal = _closure3_slot0;
                    tangon = entity.duration;
                    michal['_duration'] = tangon;
                    entity = entity.numberOfChannels;
                    michal['_numberOfChannels'] = entity;
 39:
                    tangon = null;
                    if(!(tangon == zuuluu)) { _fun00002_ip = 60; continue _fun00001 }
 45:
                    michal = _closure3_slot0;
                    entity = true;
                    michal['_loaded'] = entity;
 60:
                    michal = _closure3_slot1;
                    if(!(tangon != michal)) { _fun00002_ip = 82; continue _fun00001 }
 71:
                    michal = _closure3_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 82:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = oscard;
            entity = yankee[report](offset, verify, option, golfie, oscard);
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(8);
        michal[0] = entity;
        entity = {};
        oscard = 'play';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = this;
                michal = entity._loaded;
                if(!michal) { _fun00004_ip = 42; continue _fun00003 }
 12:
                michal = _closure1_slot4;
                zuuluu = michal.DCDSoundManager;
                michal = zuuluu.play;
                entity = entity._key;
                entity = michal.bind(zuuluu)(entity);
 42:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'pause';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = this;
                michal = entity._loaded;
                if(!michal) { _fun00006_ip = 42; continue _fun00005 }
 12:
                michal = _closure1_slot4;
                zuuluu = michal.DCDSoundManager;
                michal = zuuluu.pause;
                entity = entity._key;
                entity = michal.bind(zuuluu)(entity);
 42:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'stop';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = this;
                michal = entity._loaded;
                if(!michal) { _fun00008_ip = 42; continue _fun00007 }
 12:
                michal = _closure1_slot4;
                zuuluu = michal.DCDSoundManager;
                michal = zuuluu.stop;
                entity = entity._key;
                entity = michal.bind(zuuluu)(entity);
 42:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'release';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = this;
                entity = michal._loaded;
                if(!entity) { _fun00010_ip = 42; continue _fun00009 }
 12:
                entity = _closure1_slot4;
                tangon = entity.DCDSoundManager;
                zuuluu = tangon.release;
                entity = michal._key;
                entity = zuuluu.bind(tangon)(entity);
 42:
                entity = false;
                michal['_loaded'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'volume';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._volume;
            return entity;
        };
        entity['get'] = oscard;
        oscard = function(argFoo) { // Original name: set
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argFoo;
                entity = this;
                entity['_volume'] = tangon;
                michal = entity._loaded;
                if(!michal) { _fun00012_ip = 52; continue _fun00011 }
 21:
                michal = _closure1_slot4;
                zuuluu = michal.DCDSoundManager;
                michal = zuuluu.setVolume;
                entity = entity._key;
                entity = michal.bind(zuuluu)(entity, tangon);
 52:
                entity = undefined;
                return entity;
            }
        };
        entity['set'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'duration';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._duration;
            return entity;
        };
        entity['get'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'numberOfLoops';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._numberOfLoops;
            return entity;
        };
        entity['get'] = oscard;
        report = function(argFoo) { // Original name: set
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                entity = this;
                entity['_numberOfLoops'] = tangon;
                michal = entity._loaded;
                if(!michal) { _fun00014_ip = 54; continue _fun00013 }
 21:
                michal = _closure1_slot4;
                zuuluu = michal.DCDSoundManager;
                michal = zuuluu.setNumberOfLoops;
                entity = entity._key;
                entity = michal.bind(zuuluu)(entity, tangon);
 54:
                entity = undefined;
                return entity;
            }
        };
        entity['set'] = report;
        michal[7] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot6 = tangon;
    golfie = {};
    tangon = 'notification';
    golfie['NOTIFICATION'] = tangon;
    tangon = 'voice';
    golfie['VOICE'] = tangon;
    tangon = 'ring_tone';
    golfie['RING_TONE'] = tangon;
    tangon = 'media';
    golfie['MEDIA'] = tangon;
    tangon = {};
    option = golfie.VOICE;
    tangon['call_calling'] = option;
    option = golfie.RING_TONE;
    tangon['call_ringing'] = option;
    option = golfie.VOICE;
    tangon['deafen'] = option;
    option = golfie.VOICE;
    tangon['disconnect'] = option;
    option = golfie.NOTIFICATION;
    tangon['mention1'] = option;
    option = golfie.NOTIFICATION;
    tangon['mention2'] = option;
    option = golfie.NOTIFICATION;
    tangon['mention3'] = option;
    option = golfie.NOTIFICATION;
    tangon['message1'] = option;
    option = golfie.NOTIFICATION;
    tangon['message2'] = option;
    option = golfie.NOTIFICATION;
    tangon['message3'] = option;
    option = golfie.VOICE;
    tangon['mute'] = option;
    option = golfie.VOICE;
    tangon['ptt_start'] = option;
    option = golfie.VOICE;
    tangon['ptt_stop'] = option;
    option = golfie.VOICE;
    tangon['reconnect'] = option;
    option = golfie.VOICE;
    tangon['stage_waiting'] = option;
    option = golfie.VOICE;
    tangon['stream_ended'] = option;
    option = golfie.VOICE;
    tangon['stream_started'] = option;
    option = golfie.VOICE;
    tangon['stream_user_joined'] = option;
    option = golfie.VOICE;
    tangon['stream_user_left'] = option;
    option = golfie.VOICE;
    tangon['soundboard_sound'] = option;
    option = golfie.VOICE;
    tangon['undeafen'] = option;
    option = golfie.VOICE;
    tangon['unmute'] = option;
    option = golfie.VOICE;
    tangon['user_join'] = option;
    option = golfie.VOICE;
    tangon['user_leave'] = option;
    option = golfie.VOICE;
    tangon['user_moved'] = option;
    option = golfie.MEDIA;
    tangon['vibing_wumpus'] = option;
    option = golfie.NOTIFICATION;
    tangon['activity_end'] = option;
    option = golfie.NOTIFICATION;
    tangon['activity_launch'] = option;
    option = golfie.NOTIFICATION;
    tangon['activity_user_join'] = option;
    option = golfie.NOTIFICATION;
    tangon['activity_user_left'] = option;
    golfie = golfie.RING_TONE;
    tangon['call_ringing_halloween'] = golfie;
    var _closure1_slot7 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo, argBar, argBaz, argCor) { // Original name: MobileAudioSound
            zuuluu = this;
            report = _closure1_slot2;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = argFoo;
            zuuluu['name'] = tangon;
            tangon = _closure1_slot7;
            michal = argBar;
            michal = tangon[michal];
            zuuluu['usage'] = michal;
            michal = argBaz;
            zuuluu['_volume'] = michal;
            michal = argCor;
            zuuluu['outputChannel'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'volume';
        entity['key'] = michal;
        michal = function() { // Original name: get
            entity = this;
            entity = entity._volume;
            return entity;
        };
        entity['get'] = michal;
        michal = function(argFoo) { // Original name: set
            michal = argFoo;
            zuuluu = this;
            var _closure3_slot0 = michal;
            zuuluu['_volume'] = michal;
            michal = zuuluu.ensureSound;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.then;
            entity = function(argFoo) {
                michal = _closure3_slot0;
                entity = argFoo;
                entity['volume'] = michal;
                entity = undefined;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['set'] = michal;
        michal = new Array(8);
        michal[0] = entity;
        entity = {};
        oscard = 'loop';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = michal.ensureSound;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.then;
            entity = function(argFoo) {
                michal = argFoo;
                entity = -1;
                michal['numberOfLoops'] = entity;
                entity = michal.play;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'play';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = michal.ensureSound;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.then;
            entity = function(argFoo) {
                michal = argFoo;
                entity = michal.play;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'playWithListener';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            tangon = function(argFoo, argBar) {
                michal = argFoo;
                var _closure4_slot0 = michal;
                michal = argBar;
                var _closure4_slot1 = michal;
                zuuluu = _closure3_slot0;
                michal = zuuluu.ensureSound;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        michal = argFoo;
                        zuuluu = michal.duration;
                        entity = null;
                        entity = entity != zuuluu;
                        if(!entity) { _fun00016_ip = 28; continue _fun00015 }
 17:
                        tangon = michal.duration;
                        zuuluu = 0;
                        entity = zuuluu !== tangon;
 28:
                        if(entity) { _fun00016_ip = 51; continue _fun00015 }
 31:
                        tangon = _closure4_slot1;
                        zuuluu = undefined;
                        entity = 'sound has no duration';
                        entity = tangon.bind(zuuluu)(entity);
 51:
                        entity = michal.play;
                        entity = entity.bind(michal)();
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot1;
                        entity = 3;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.isIOS;
                        tangon = zuuluu.bind(tangon)();
                        zuuluu = 1;
                        if(!tangon) { _fun00016_ip = 108; continue _fun00015 }
 102:
                        zuuluu = 1000;
 108:
                        tangon = global;
                        tangon = tangon.setTimeout;
                        michal = michal.duration;
                        zuuluu = michal * zuuluu;
                        michal = function() {
                            zuuluu = _closure4_slot0;
                            entity = undefined;
                            michal = true;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        michal = tangon.bind(entity)(michal, zuuluu);
                        return entity;
                    }
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.catch;
                entity = function(argFoo) {
                    zuuluu = _closure4_slot1;
                    entity = undefined;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'pause';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = this;
                zuuluu = entity.soundPromise;
                michal = null;
                if(!(michal != zuuluu)) { _fun00018_ip = 40; continue _fun00017 }
 15:
                zuuluu = entity.soundPromise;
                michal = zuuluu.then;
                entity = function(argFoo) {
                    michal = argFoo;
                    entity = michal.pause;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
 40:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'stop';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = michal.destroyAudio;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'destroyAudio';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                tangon = michal.soundPromise;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00020_ip = 44; continue _fun00019 }
 21:
                zuuluu = michal.soundPromise;
                michal = zuuluu.then;
                entity = function(argFoo) {
                    michal = argFoo;
                    entity = michal.stop;
                    entity = entity.bind(michal)();
                    entity = michal.release;
                    entity = entity.bind(michal)();
                    michal = _closure3_slot0;
                    entity = null;
                    michal['soundPromise'] = entity;
                    entity = undefined;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
 44:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'ensureSound';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = this;
                var _closure3_slot0 = entity;
                michal = entity.soundPromise;
                tangon = null;
                if(!(tangon == michal)) { _fun00022_ip = 56; continue _fun00021 }
 21:
                tangon = global;
                report = tangon.Promise;
                tangon = report.prototype;
                tangon = Object.create(tangon, {constructor: {value: report}});
                oscard = function(argFoo, argBar) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    entity = argBar;
                    var _closure4_slot1 = entity;
                    golfie = _closure1_slot6;
                    entity = _closure3_slot0;
                    yankee = entity.name;
                    offset = entity.usage;
                    verify = entity._volume;
                    entity = golfie.prototype;
                    zuuluu = Object.create(entity, {constructor: {value: golfie}});
                    option = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            zuuluu = argFoo;
                            entity = null;
                            if(!(entity != zuuluu)) { _fun00024_ip = 17; continue _fun00023 }
 9:
                            entity = '';
                            if(!(entity === zuuluu)) { _fun00024_ip = 37; continue _fun00023 }
 17:
                            tangon = _closure4_slot0;
                            michal = _closure4_slot2;
                            entity = undefined;
                            entity = tangon.bind(entity)(michal);
                            _fun00024_ip = 51; continue _fun00023;
 37:
                            michal = _closure4_slot1;
                            entity = undefined;
                            entity = michal.bind(entity)(zuuluu);
 51:
                            entity = undefined;
                            return entity;
                        }
                    };
                    romeon = zuuluu;
                    entity = new romeon[golfie](yankee, offset, verify, option, golfie);
                    entity = entity instanceof Object ? entity : zuuluu;
                    var _closure4_slot2 = entity;
                    entity = undefined;
                    return entity;
                };
                golfie = tangon;
                zuuluu = new golfie[report](oscard, report);
                michal = zuuluu instanceof Object ? zuuluu : tangon;
 56:
                entity['soundPromise'] = michal;
                entity = entity.soundPromise;
                return entity;
            }
        };
        entity['value'] = report;
        michal[7] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/sound_playback/native/SoundUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['MobileAudioSound'] = michal;
    return entity;
})();