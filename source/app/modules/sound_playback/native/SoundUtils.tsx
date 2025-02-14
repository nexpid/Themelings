// app/modules/sound_playback/native/SoundUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    tango = 0;
    golf = oscar[tango];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot2 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.NativeModules;
    var _closure1_slot4 = golf;
    var _closure1_slot5 = tango;
    tango = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo, argBar, argBaz, argCorge) { // Original name: RNSound
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argBaz;
            zulu['_volume'] = mike;
            mike = false;
            zulu['_loaded'] = mike;
            mike = _closure1_slot5;
            mike = parseFloat(mike);
            tango = mike + 1;
            _closure1_slot5 = tango;
            zulu['_key'] = mike;
            mike = -1;
            zulu['_duration'] = mike;
            zulu['_numberOfChannels'] = mike;
            mike = 1;
            zulu['_volume'] = mike;
            mike = 0;
            zulu['_pan'] = mike;
            zulu['_numberOfLoops'] = mike;
            oscar = zulu._createSound;
            report = argFoo;
            tango = argBar;
            mike = argCorge;
            mike = oscar.bind(zulu)(report, tango, mike);
            zulu['_sound'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = '_createSound';
        entity['key'] = mike;
        mike = function(argFoo, argBar, argBaz) { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            zulu = argBaz;
            var _closure3_slot1 = zulu;
            zulu = _closure1_slot4;
            oscar = zulu.DCDSoundManager;
            report = oscar.prepare;
            options = mike._key;
            offset = argFoo;
            verify = argBar;
            golf = function(argFoo, argBar) {
                _fun97843: for(var _fun97843_ip = 0; ; ) switch(_fun97843_ip) {
 0:
                    zulu = argFoo;
                    entity = argBar;
                    if(!entity) { _fun97843_ip = 39; continue _fun97843 }
 9:
                    mike = _closure3_slot0;
                    tango = entity.duration;
                    mike['_duration'] = tango;
                    entity = entity.numberOfChannels;
                    mike['_numberOfChannels'] = entity;
 39:
                    tango = null;
                    if(!(tango == zulu)) { _fun97843_ip = 60; continue _fun97843 }
 45:
                    mike = _closure3_slot0;
                    entity = true;
                    mike['_loaded'] = entity;
 60:
                    mike = _closure3_slot1;
                    if(!(tango != mike)) { _fun97843_ip = 82; continue _fun97843 }
 71:
                    mike = _closure3_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 82:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = oscar;
            entity = yankee[report](offset, verify, options, golf, oscar);
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(8);
        mike[0] = entity;
        entity = {};
        oscar = 'play';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun97844: for(var _fun97844_ip = 0; ; ) switch(_fun97844_ip) {
 0:
                entity = this;
                mike = entity._loaded;
                if(!mike) { _fun97844_ip = 42; continue _fun97844 }
 12:
                mike = _closure1_slot4;
                zulu = mike.DCDSoundManager;
                mike = zulu.play;
                entity = entity._key;
                entity = mike.bind(zulu)(entity);
 42:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'pause';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun97845: for(var _fun97845_ip = 0; ; ) switch(_fun97845_ip) {
 0:
                entity = this;
                mike = entity._loaded;
                if(!mike) { _fun97845_ip = 42; continue _fun97845 }
 12:
                mike = _closure1_slot4;
                zulu = mike.DCDSoundManager;
                mike = zulu.pause;
                entity = entity._key;
                entity = mike.bind(zulu)(entity);
 42:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'stop';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun97846: for(var _fun97846_ip = 0; ; ) switch(_fun97846_ip) {
 0:
                entity = this;
                mike = entity._loaded;
                if(!mike) { _fun97846_ip = 42; continue _fun97846 }
 12:
                mike = _closure1_slot4;
                zulu = mike.DCDSoundManager;
                mike = zulu.stop;
                entity = entity._key;
                entity = mike.bind(zulu)(entity);
 42:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'release';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun97847: for(var _fun97847_ip = 0; ; ) switch(_fun97847_ip) {
 0:
                mike = this;
                entity = mike._loaded;
                if(!entity) { _fun97847_ip = 42; continue _fun97847 }
 12:
                entity = _closure1_slot4;
                tango = entity.DCDSoundManager;
                zulu = tango.release;
                entity = mike._key;
                entity = zulu.bind(tango)(entity);
 42:
                entity = false;
                mike['_loaded'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'volume';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._volume;
            return entity;
        };
        entity['get'] = oscar;
        oscar = function(argFoo) { // Original name: set
            _fun97849: for(var _fun97849_ip = 0; ; ) switch(_fun97849_ip) {
 0:
                tango = argFoo;
                entity = this;
                entity['_volume'] = tango;
                mike = entity._loaded;
                if(!mike) { _fun97849_ip = 52; continue _fun97849 }
 21:
                mike = _closure1_slot4;
                zulu = mike.DCDSoundManager;
                mike = zulu.setVolume;
                entity = entity._key;
                entity = mike.bind(zulu)(entity, tango);
 52:
                entity = undefined;
                return entity;
            }
        };
        entity['set'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'duration';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._duration;
            return entity;
        };
        entity['get'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'numberOfLoops';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._numberOfLoops;
            return entity;
        };
        entity['get'] = oscar;
        report = function(argFoo) { // Original name: set
            _fun97852: for(var _fun97852_ip = 0; ; ) switch(_fun97852_ip) {
 0:
                tango = argFoo;
                entity = this;
                entity['_numberOfLoops'] = tango;
                mike = entity._loaded;
                if(!mike) { _fun97852_ip = 54; continue _fun97852 }
 21:
                mike = _closure1_slot4;
                zulu = mike.DCDSoundManager;
                mike = zulu.setNumberOfLoops;
                entity = entity._key;
                entity = mike.bind(zulu)(entity, tango);
 54:
                entity = undefined;
                return entity;
            }
        };
        entity['set'] = report;
        mike[7] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot6 = tango;
    golf = {};
    tango = 'notification';
    golf['NOTIFICATION'] = tango;
    tango = 'voice';
    golf['VOICE'] = tango;
    tango = 'ring_tone';
    golf['RING_TONE'] = tango;
    tango = 'media';
    golf['MEDIA'] = tango;
    tango = {};
    options = golf.VOICE;
    tango['call_calling'] = options;
    options = golf.RING_TONE;
    tango['call_ringing'] = options;
    options = golf.VOICE;
    tango['deafen'] = options;
    options = golf.VOICE;
    tango['disconnect'] = options;
    options = golf.NOTIFICATION;
    tango['mention1'] = options;
    options = golf.NOTIFICATION;
    tango['mention2'] = options;
    options = golf.NOTIFICATION;
    tango['mention3'] = options;
    options = golf.NOTIFICATION;
    tango['message1'] = options;
    options = golf.NOTIFICATION;
    tango['message2'] = options;
    options = golf.NOTIFICATION;
    tango['message3'] = options;
    options = golf.VOICE;
    tango['mute'] = options;
    options = golf.VOICE;
    tango['ptt_start'] = options;
    options = golf.VOICE;
    tango['ptt_stop'] = options;
    options = golf.VOICE;
    tango['reconnect'] = options;
    options = golf.VOICE;
    tango['stage_waiting'] = options;
    options = golf.VOICE;
    tango['stream_ended'] = options;
    options = golf.VOICE;
    tango['stream_started'] = options;
    options = golf.VOICE;
    tango['stream_user_joined'] = options;
    options = golf.VOICE;
    tango['stream_user_left'] = options;
    options = golf.VOICE;
    tango['soundboard_sound'] = options;
    options = golf.VOICE;
    tango['undeafen'] = options;
    options = golf.VOICE;
    tango['unmute'] = options;
    options = golf.VOICE;
    tango['user_join'] = options;
    options = golf.VOICE;
    tango['user_leave'] = options;
    options = golf.VOICE;
    tango['user_moved'] = options;
    options = golf.MEDIA;
    tango['vibing_wumpus'] = options;
    options = golf.NOTIFICATION;
    tango['activity_end'] = options;
    options = golf.NOTIFICATION;
    tango['activity_launch'] = options;
    options = golf.NOTIFICATION;
    tango['activity_user_join'] = options;
    options = golf.NOTIFICATION;
    tango['activity_user_left'] = options;
    golf = golf.RING_TONE;
    tango['call_ringing_halloween'] = golf;
    var _closure1_slot7 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo, argBar, argBaz, argCorge) { // Original name: MobileAudioSound
            zulu = this;
            report = _closure1_slot2;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = argFoo;
            zulu['name'] = tango;
            tango = _closure1_slot7;
            mike = argBar;
            mike = tango[mike];
            zulu['usage'] = mike;
            mike = argBaz;
            zulu['_volume'] = mike;
            mike = argCorge;
            zulu['outputChannel'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'volume';
        entity['key'] = mike;
        mike = function() { // Original name: get
            entity = this;
            entity = entity._volume;
            return entity;
        };
        entity['get'] = mike;
        mike = function(argFoo) { // Original name: set
            mike = argFoo;
            zulu = this;
            var _closure3_slot0 = mike;
            zulu['_volume'] = mike;
            mike = zulu.ensureSound;
            zulu = mike.bind(zulu)();
            mike = zulu.then;
            entity = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                entity['volume'] = mike;
                entity = undefined;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['set'] = mike;
        mike = new Array(8);
        mike[0] = entity;
        entity = {};
        oscar = 'loop';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = mike.ensureSound;
            zulu = entity.bind(mike)();
            mike = zulu.then;
            entity = function(argFoo) {
                mike = argFoo;
                entity = -1;
                mike['numberOfLoops'] = entity;
                entity = mike.play;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'play';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = mike.ensureSound;
            zulu = entity.bind(mike)();
            mike = zulu.then;
            entity = function(argFoo) {
                mike = argFoo;
                entity = mike.play;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'playWithListener';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            tango = function(argFoo, argBar) {
                mike = argFoo;
                var _closure4_slot0 = mike;
                mike = argBar;
                var _closure4_slot1 = mike;
                zulu = _closure3_slot0;
                mike = zulu.ensureSound;
                tango = mike.bind(zulu)();
                zulu = tango.then;
                mike = function(argFoo) {
                    _fun97864: for(var _fun97864_ip = 0; ; ) switch(_fun97864_ip) {
 0:
                        mike = argFoo;
                        zulu = mike.duration;
                        entity = null;
                        entity = entity != zulu;
                        if(!entity) { _fun97864_ip = 28; continue _fun97864 }
 17:
                        tango = mike.duration;
                        zulu = 0;
                        entity = zulu !== tango;
 28:
                        if(entity) { _fun97864_ip = 51; continue _fun97864 }
 31:
                        tango = _closure4_slot1;
                        zulu = undefined;
                        entity = 'sound has no duration';
                        entity = tango.bind(zulu)(entity);
 51:
                        entity = mike.play;
                        entity = entity.bind(mike)();
                        tango = _closure1_slot0;
                        zulu = _closure1_slot1;
                        entity = 3;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.isIOS;
                        tango = zulu.bind(tango)();
                        zulu = 1;
                        if(!tango) { _fun97864_ip = 108; continue _fun97864 }
 102:
                        zulu = 1000;
 108:
                        tango = global;
                        tango = tango.setTimeout;
                        mike = mike.duration;
                        zulu = mike * zulu;
                        mike = function() {
                            zulu = _closure4_slot0;
                            entity = undefined;
                            mike = true;
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        };
                        mike = tango.bind(entity)(mike, zulu);
                        return entity;
                    }
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.catch;
                entity = function(argFoo) {
                    zulu = _closure4_slot1;
                    entity = undefined;
                    mike = argFoo;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'pause';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun97867: for(var _fun97867_ip = 0; ; ) switch(_fun97867_ip) {
 0:
                entity = this;
                zulu = entity.soundPromise;
                mike = null;
                if(!(mike != zulu)) { _fun97867_ip = 40; continue _fun97867 }
 15:
                zulu = entity.soundPromise;
                mike = zulu.then;
                entity = function(argFoo) {
                    mike = argFoo;
                    entity = mike.pause;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 40:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'stop';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = mike.destroyAudio;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'destroyAudio';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun97870: for(var _fun97870_ip = 0; ; ) switch(_fun97870_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                tango = mike.soundPromise;
                zulu = null;
                if(!(zulu != tango)) { _fun97870_ip = 44; continue _fun97870 }
 21:
                zulu = mike.soundPromise;
                mike = zulu.then;
                entity = function(argFoo) {
                    mike = argFoo;
                    entity = mike.stop;
                    entity = entity.bind(mike)();
                    entity = mike.release;
                    entity = entity.bind(mike)();
                    mike = _closure3_slot0;
                    entity = null;
                    mike['soundPromise'] = entity;
                    entity = undefined;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 44:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'ensureSound';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun97872: for(var _fun97872_ip = 0; ; ) switch(_fun97872_ip) {
 0:
                entity = this;
                var _closure3_slot0 = entity;
                mike = entity.soundPromise;
                tango = null;
                if(!(tango == mike)) { _fun97872_ip = 56; continue _fun97872 }
 21:
                tango = global;
                report = tango.Promise;
                tango = report.prototype;
                tango = Object.create(tango, {constructor: {value: report}});
                oscar = function(argFoo, argBar) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    entity = argBar;
                    var _closure4_slot1 = entity;
                    golf = _closure1_slot6;
                    entity = _closure3_slot0;
                    yankee = entity.name;
                    offset = entity.usage;
                    verify = entity._volume;
                    entity = golf.prototype;
                    zulu = Object.create(entity, {constructor: {value: golf}});
                    options = function(argFoo) {
                        _fun97874: for(var _fun97874_ip = 0; ; ) switch(_fun97874_ip) {
 0:
                            zulu = argFoo;
                            entity = null;
                            if(!(entity != zulu)) { _fun97874_ip = 17; continue _fun97874 }
 9:
                            entity = '';
                            if(!(entity === zulu)) { _fun97874_ip = 37; continue _fun97874 }
 17:
                            tango = _closure4_slot0;
                            mike = _closure4_slot2;
                            entity = undefined;
                            entity = tango.bind(entity)(mike);
                            _fun97874_ip = 51; continue _fun97874;
 37:
                            mike = _closure4_slot1;
                            entity = undefined;
                            entity = mike.bind(entity)(zulu);
 51:
                            entity = undefined;
                            return entity;
                        }
                    };
                    romeo = zulu;
                    entity = new romeo[golf](yankee, offset, verify, options, golf);
                    entity = entity instanceof Object ? entity : zulu;
                    var _closure4_slot2 = entity;
                    entity = undefined;
                    return entity;
                };
                golf = tango;
                zulu = new golf[report](oscar, report);
                mike = zulu instanceof Object ? zulu : tango;
 56:
                entity['soundPromise'] = mike;
                entity = entity.soundPromise;
                return entity;
            }
        };
        entity['value'] = report;
        mike[7] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/sound_playback/native/SoundUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['MobileAudioSound'] = mike;
    return entity;
})();