// app/modules/sound_playback/native/SoundUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var4 = 0;
    var7 = var6[var4];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.NativeModules;
    var _closure1_slot4 = var7;
    var _closure1_slot5 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = function RNSound(arg1, arg2, arg3, arg4) {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg3;
            var3['_volume'] = var2;
            var2 = false;
            var3['_loaded'] = var2;
            var2 = _closure1_slot5;
            var2 = parseFloat(var2);
            var4 = var2 + 1;
            _closure1_slot5 = var4;
            var3['_key'] = var2;
            var2 = -1;
            var3['_duration'] = var2;
            var3['_numberOfChannels'] = var2;
            var2 = 1;
            var3['_volume'] = var2;
            var2 = 0;
            var3['_pan'] = var2;
            var3['_numberOfLoops'] = var2;
            var6 = var3._createSound;
            var5 = arg1;
            var4 = arg2;
            var2 = arg4;
            var2 = var6.bind(var3)(var5, var4, var2);
            var3['_sound'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = '_createSound';
        var1['key'] = var2;
        var2 = function value(arg1, arg2, arg3) {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = arg3;
            var _closure3_slot1 = var3;
            var3 = _closure1_slot4;
            var6 = var3.DCDSoundManager;
            var5 = var6.prepare;
            var8 = var2._key;
            var10 = arg1;
            var9 = arg2;
            var7 = function(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!var1) { _fun0001_ip = 39; continue _fun0001 }
 9:
                    var2 = _closure3_slot0;
                    var4 = var1.duration;
                    var2['_duration'] = var4;
                    var1 = var1.numberOfChannels;
                    var2['_numberOfChannels'] = var1;
 39:
                    var4 = null;
                    if(!(var4 == var3)) { _fun0001_ip = 60; continue _fun0001 }
 45:
                    var2 = _closure3_slot0;
                    var1 = true;
                    var2['_loaded'] = var1;
 60:
                    var2 = _closure3_slot1;
                    if(!(var4 != var2)) { _fun0001_ip = 82; continue _fun0001 }
 71:
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 82:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(8);
        var2[0] = var1;
        var1 = {};
        var6 = 'play';
        var1['key'] = var6;
        var6 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = this;
                var2 = var1._loaded;
                if(!var2) { _fun0002_ip = 42; continue _fun0002 }
 12:
                var2 = _closure1_slot4;
                var3 = var2.DCDSoundManager;
                var2 = var3.play;
                var1 = var1._key;
                var1 = var2.bind(var3)(var1);
 42:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'pause';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = this;
                var2 = var1._loaded;
                if(!var2) { _fun0003_ip = 42; continue _fun0003 }
 12:
                var2 = _closure1_slot4;
                var3 = var2.DCDSoundManager;
                var2 = var3.pause;
                var1 = var1._key;
                var1 = var2.bind(var3)(var1);
 42:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'stop';
        var1['key'] = var6;
        var6 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = this;
                var2 = var1._loaded;
                if(!var2) { _fun0004_ip = 42; continue _fun0004 }
 12:
                var2 = _closure1_slot4;
                var3 = var2.DCDSoundManager;
                var2 = var3.stop;
                var1 = var1._key;
                var1 = var2.bind(var3)(var1);
 42:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'release';
        var1['key'] = var6;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var1 = var2._loaded;
                if(!var1) { _fun0005_ip = 42; continue _fun0005 }
 12:
                var1 = _closure1_slot4;
                var4 = var1.DCDSoundManager;
                var3 = var4.release;
                var1 = var2._key;
                var1 = var3.bind(var4)(var1);
 42:
                var1 = false;
                var2['_loaded'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'volume';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._volume;
            return var1;
        };
        var1['get'] = var6;
        var6 = function set(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = arg1;
                var1 = this;
                var1['_volume'] = var4;
                var2 = var1._loaded;
                if(!var2) { _fun0006_ip = 52; continue _fun0006 }
 21:
                var2 = _closure1_slot4;
                var3 = var2.DCDSoundManager;
                var2 = var3.setVolume;
                var1 = var1._key;
                var1 = var2.bind(var3)(var1, var4);
 52:
                var1 = undefined;
                return var1;
            }
        };
        var1['set'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'duration';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._duration;
            return var1;
        };
        var1['get'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'numberOfLoops';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._numberOfLoops;
            return var1;
        };
        var1['get'] = var6;
        var5 = function set(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arg1;
                var1 = this;
                var1['_numberOfLoops'] = var4;
                var2 = var1._loaded;
                if(!var2) { _fun0007_ip = 54; continue _fun0007 }
 21:
                var2 = _closure1_slot4;
                var3 = var2.DCDSoundManager;
                var2 = var3.setNumberOfLoops;
                var1 = var1._key;
                var1 = var2.bind(var3)(var1, var4);
 54:
                var1 = undefined;
                return var1;
            }
        };
        var1['set'] = var5;
        var2[7] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot6 = var4;
    var7 = {};
    var4 = 'notification';
    var7['NOTIFICATION'] = var4;
    var4 = 'voice';
    var7['VOICE'] = var4;
    var4 = 'ring_tone';
    var7['RING_TONE'] = var4;
    var4 = 'media';
    var7['MEDIA'] = var4;
    var4 = 'notification_no_vibration';
    var7['NOTIFICATION_NO_VIBRATION'] = var4;
    var4 = {};
    var8 = var7.VOICE;
    var4['call_calling'] = var8;
    var8 = var7.RING_TONE;
    var4['call_ringing'] = var8;
    var8 = var7.VOICE;
    var4['camera_on'] = var8;
    var8 = var7.VOICE;
    var4['camera_off'] = var8;
    var8 = var7.VOICE;
    var4['deafen'] = var8;
    var8 = var7.VOICE;
    var4['disconnect'] = var8;
    var8 = var7.NOTIFICATION;
    var4['mention1'] = var8;
    var8 = var7.NOTIFICATION;
    var4['mention2'] = var8;
    var8 = var7.NOTIFICATION;
    var4['mention3'] = var8;
    var8 = var7.NOTIFICATION;
    var4['message1'] = var8;
    var8 = var7.NOTIFICATION;
    var4['message2'] = var8;
    var8 = var7.NOTIFICATION;
    var4['message3'] = var8;
    var8 = var7.VOICE;
    var4['mute'] = var8;
    var8 = var7.VOICE;
    var4['ptt_start'] = var8;
    var8 = var7.VOICE;
    var4['ptt_stop'] = var8;
    var8 = var7.VOICE;
    var4['reconnect'] = var8;
    var8 = var7.VOICE;
    var4['stage_waiting'] = var8;
    var8 = var7.VOICE;
    var4['stream_ended'] = var8;
    var8 = var7.VOICE;
    var4['stream_started'] = var8;
    var8 = var7.VOICE;
    var4['stream_user_joined'] = var8;
    var8 = var7.VOICE;
    var4['stream_user_left'] = var8;
    var8 = var7.VOICE;
    var4['soundboard_sound'] = var8;
    var8 = var7.VOICE;
    var4['undeafen'] = var8;
    var8 = var7.VOICE;
    var4['unmute'] = var8;
    var8 = var7.VOICE;
    var4['user_join'] = var8;
    var8 = var7.VOICE;
    var4['user_leave'] = var8;
    var8 = var7.VOICE;
    var4['user_moved'] = var8;
    var8 = var7.MEDIA;
    var4['vibing_wumpus'] = var8;
    var8 = var7.NOTIFICATION_NO_VIBRATION;
    var4['activity_end'] = var8;
    var8 = var7.NOTIFICATION_NO_VIBRATION;
    var4['activity_launch'] = var8;
    var8 = var7.NOTIFICATION_NO_VIBRATION;
    var4['activity_user_join'] = var8;
    var8 = var7.NOTIFICATION_NO_VIBRATION;
    var4['activity_user_left'] = var8;
    var7 = var7.RING_TONE;
    var4['call_ringing_halloween'] = var7;
    var _closure1_slot7 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function MobileAudioSound(arg1, arg2, arg3, arg4) {
            var3 = this;
            var5 = _closure1_slot2;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = arg1;
            var3['name'] = var4;
            var4 = _closure1_slot7;
            var2 = arg2;
            var2 = var4[var2];
            var3['usage'] = var2;
            var2 = arg3;
            var3['_volume'] = var2;
            var2 = arg4;
            var3['outputChannel'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'volume';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._volume;
            return var1;
        };
        var1['get'] = var2;
        var2 = function set(arg1) {
            var2 = arg1;
            var3 = this;
            var _closure3_slot0 = var2;
            var3['_volume'] = var2;
            var2 = var3.ensureSound;
            var3 = var2.bind(var3)();
            var2 = var3.then;
            var1 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var1['volume'] = var2;
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['set'] = var2;
        var2 = new Array(8);
        var2[0] = var1;
        var1 = {};
        var6 = 'loop';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2.ensureSound;
            var3 = var1.bind(var2)();
            var2 = var3.then;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = -1;
                var2['numberOfLoops'] = var1;
                var1 = var2.play;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'play';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2.ensureSound;
            var3 = var1.bind(var2)();
            var2 = var3.then;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.play;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'playWithListener';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                var2 = arg1;
                var _closure4_slot0 = var2;
                var2 = arg2;
                var _closure4_slot1 = var2;
                var3 = _closure3_slot0;
                var2 = var3.ensureSound;
                var4 = var2.bind(var3)();
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.duration;
                        var1 = null;
                        var1 = var1 != var3;
                        if(!var1) { _fun0008_ip = 28; continue _fun0008 }
 17:
                        var4 = var2.duration;
                        var3 = 0;
                        var1 = var3 !== var4;
 28:
                        if(var1) { _fun0008_ip = 51; continue _fun0008 }
 31:
                        var4 = _closure4_slot1;
                        var3 = undefined;
                        var1 = 'sound has no duration';
                        var1 = var4.bind(var3)(var1);
 51:
                        var1 = var2.play;
                        var1 = var1.bind(var2)();
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 3;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isIOS;
                        var4 = var3.bind(var4)();
                        var3 = 1;
                        if(!var4) { _fun0008_ip = 108; continue _fun0008 }
 102:
                        var3 = 1000;
 108:
                        var4 = global;
                        var4 = var4.setTimeout;
                        var2 = var2.duration;
                        var3 = var2 * var3;
                        var2 = function() {
                            var3 = _closure4_slot0;
                            var1 = undefined;
                            var2 = true;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var4.bind(var1)(var2, var3);
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function(arg1) {
                    var3 = _closure4_slot1;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'pause';
        var1['key'] = var6;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = this;
                var3 = var1.soundPromise;
                var2 = null;
                if(!(var2 != var3)) { _fun0009_ip = 40; continue _fun0009 }
 15:
                var3 = var1.soundPromise;
                var2 = var3.then;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.pause;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 40:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'stop';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2.destroyAudio;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'destroyAudio';
        var1['key'] = var6;
        var6 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = var2.soundPromise;
                var3 = null;
                if(!(var3 != var4)) { _fun0010_ip = 44; continue _fun0010 }
 21:
                var3 = var2.soundPromise;
                var2 = var3.then;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    var1 = var2.release;
                    var1 = var1.bind(var2)();
                    var2 = _closure3_slot0;
                    var1 = null;
                    var2['soundPromise'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 44:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'ensureSound';
        var1['key'] = var6;
        var5 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var2 = var1.soundPromise;
                var4 = null;
                if(!(var4 == var2)) { _fun0011_ip = 56; continue _fun0011 }
 21:
                var4 = global;
                var5 = var4.Promise;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var6 = function(arg1, arg2) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = arg2;
                    var _closure4_slot1 = var1;
                    var7 = _closure1_slot6;
                    var1 = _closure3_slot0;
                    var11 = var1.name;
                    var10 = var1.usage;
                    var9 = var1._volume;
                    var1 = var7.prototype;
                    var3 = Object.create(var1, {constructor: {value: var7}});
                    var8 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var3 = arg1;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0012_ip = 17; continue _fun0012 }
 9:
                            var1 = '';
                            if(!(var1 === var3)) { _fun0012_ip = 37; continue _fun0012 }
 17:
                            var4 = _closure4_slot0;
                            var2 = _closure4_slot2;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var2);
                            _fun0012_ip = 51; continue _fun0012;
 37:
                            var2 = _closure4_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
 51:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var12 = var3;
                    var1 = new var12[var7](var11, var10, var9, var8, var7);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var _closure4_slot2 = var1;
                    var1 = undefined;
                    return var1;
                };
                var7 = var4;
                var3 = new var7[var5](var6, var5);
                var2 = var3 instanceof Object ? var3 : var4;
 56:
                var1['soundPromise'] = var2;
                var1 = var1.soundPromise;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[7] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/sound_playback/native/SoundUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['MobileAudioSound'] = var2;
    return var1;
})();