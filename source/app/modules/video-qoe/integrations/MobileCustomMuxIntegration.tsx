// app/modules/video-qoe/integrations/MobileCustomMuxIntegration.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Logger;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'MobileCustomMuxIntegration';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function MobileCustomMuxIntegration(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var7 = _closure1_slot3;
                var6 = _closure2_slot0;
                var1 = undefined;
                var6 = var7.bind(var1)(var3, var6);
                var6 = false;
                var3['isInitialized'] = var6;
                var3['viewInitEmitted'] = var6;
                var3['playerReadyEmitted'] = var6;
                var3['playStarted'] = var6;
                var3['playingEmitted'] = var6;
                var6 = 0;
                var3['currentPlayheadTime'] = var6;
                var6 = null;
                var3['currentRendition'] = var6;
                var6 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.currentPlayheadTime;
                    var1 = 1000;
                    var1 = var2 * var1;
                    return var1;
                };
                var3['getPlayheadTime'] = var6;
                var5 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.videoState;
                    return var1;
                };
                var3['getStateData'] = var5;
                var3['config'] = var4;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 3;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var5 = var2.SessionManager;
                var2 = var5.generateSessionId;
                var2 = var2.bind(var5)();
                var3['sessionId'] = var2;
                var6 = var3.sessionId;
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = 'discord-mobile-';
                var2 = var5.bind(var2)(var6);
                var3['playerId'] = var2;
                var2 = {'player_is_paused': true, 'player_width': 0, 'player_height': 0, 'player_autoplay_on': false, 'player_preload_on': true, 'video_cdn': 'Cloudflare'};
                var5 = var4.contentMetadata;
                var5 = var5.questId;
                var2['video_series'] = var5;
                var5 = var4.contentMetadata;
                var5 = var5.gameId;
                var2['video_producer'] = var5;
                var5 = var4.contentMetadata;
                var5 = var5.gameName;
                var2['video_brand'] = var5;
                var5 = var4.contentMetadata;
                var5 = var5.title;
                var2['video_title'] = var5;
                var5 = var4.contentMetadata;
                var5 = var5.videoStreamType;
                var2['video_stream_type'] = var5;
                var5 = var4.contentMetadata;
                var5 = var5.contentId;
                var2['video_source_url'] = var5;
                var5 = var4.contentMetadata;
                var7 = var5.videoStreamType;
                var5 = 'video/mp4';
                var6 = 'hls';
                if(!(var6 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = 'application/x-mpegURL';
case 2:
                var2['video_source_mime_type'] = var5;
                var4 = var4.contentMetadata;
                var4 = var4.durationMs;
                var2['video_source_duration'] = var4;
                var3['videoState'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = this;
                var1 = undefined;
                var8 = undefined;
                var10 = undefined;
                var2 = var3.getMuxEnvKey;
                var2 = var2.bind(var3)();
                var8 = var2;
                var12 = null;
                if(!(var12 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var8;
                var4 = var2.length;
                var2 = 0;
                if(!(var2 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 4:
                var5 = _closure1_slot5;
                var4 = var5.info;
                var2 = 'Mux environment key not available, skipping QoE tracking';
                var2 = var4.bind(var5)(var2);
                _fun0002_ip = 7; continue _fun0002;
case 6: // try_start_0
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 4;
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.init;
                var5 = var3.playerId;
                var4 = {};
                var11 = var3.config;
                var11 = var11.debug;
                var10 = var11;
                var11 = var12 != var11;
                var9 = var11;
                if(!var11) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var9 = var10;
case 8:
                var4['debug'] = var9;
                var9 = var3.getPlayheadTime;
                var4['getPlayheadTime'] = var9;
                var9 = var3.getStateData;
                var4['getStateData'] = var9;
                var9 = var3.mapConfigToMuxData;
                var8 = var9.bind(var3)(var8);
                var4['data'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var4 = true;
                var3['isInitialized'] = var4;
                var6 = _closure1_slot5;
                var5 = var6.info;
                var4 = {};
                var2 = var3.playerId;
                var4['playerId'] = var2;
                var2 = 'Mux Data mobile integration initialized';
                var2 = var5.bind(var6)(var2, var4);
case 10: // try_end0
                _fun0002_ip = 7; continue _fun0002;
case 11: // catch_target0
                CatchBlockStart(arg_register=5);
                var5 = _closure1_slot5;
                var4 = var5.error;
                var2 = 'Error initializing Mux mobile integration';
                var2 = var4.bind(var5)(var2, var6);
                var2 = false;
                var3['isInitialized'] = var2;
case 7:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(29);
        var2[0] = var1;
        var1 = {};
        var6 = 'updatePlayheadTime';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['currentPlayheadTime'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'updateVideoDimensions';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var3 = var1.videoState;
            var2 = arg1;
            var3['player_width'] = var2;
            var2 = var1.videoState;
            var1 = arg2;
            var2['player_height'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'updateVideoSourceDimensions';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var3 = var1.videoState;
            var2 = arg1;
            var3['video_source_width'] = var2;
            var2 = var1.videoState;
            var1 = arg2;
            var2['video_source_height'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'updateVideoSource';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg3;
                var1 = this;
                var3 = var1.videoState;
                var2 = arg1;
                var3['video_source_url'] = var2;
                var3 = var1.videoState;
                var2 = arg2;
                var3['video_source_mime_type'] = var2;
                var3 = var1.videoState;
                var1 = null;
                var4 = var1 != var5;
                var1 = undefined;
                var2 = undefined;
                if(!var4) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var4 = 1000;
                var2 = var5 * var4;
case 12:
                var3['video_source_duration'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'updatePlayerState';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg2;
                var1 = this;
                var4 = var1.videoState;
                var3 = arg1;
                var4['player_is_paused'] = var3;
                var3 = null;
                if(!(var3 != var2)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var1 = var1.videoState;
                var1['player_is_fullscreen'] = var2;
case 14:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'emitPlayerReady';
        var1['key'] = var6;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var1 = var2.isInitialized;
                if(!var1) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var1 = var2.playerReadyEmitted;
                if(var1) { _fun0005_ip = 16; continue _fun0005 }
case 18: // try_start_0
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.emit;
                var3 = var2.playerId;
                var1 = 'playerready';
                var1 = var4.bind(var5)(var3, var1);
                var1 = true;
                var2['playerReadyEmitted'] = var1;
case 19: // try_end0
                _fun0005_ip = 16; continue _fun0005;
case 20: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting playerready event';
                var1 = var2.bind(var3)(var1, var4);
case 16:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'emitViewInit';
        var1['key'] = var6;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = this;
                var1 = var2.isInitialized;
                if(!var1) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                var1 = var2.viewInitEmitted;
                if(var1) { _fun0006_ip = 16; continue _fun0006 }
case 18: // try_start_0
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.emit;
                var3 = var2.playerId;
                var1 = 'viewinit';
                var1 = var4.bind(var5)(var3, var1);
                var1 = true;
                var2['viewInitEmitted'] = var1;
case 19: // try_end0
                _fun0006_ip = 16; continue _fun0006;
case 20: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting viewinit event';
                var1 = var2.bind(var3)(var1, var4);
case 16:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'emitLoadStart';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var1 = var2.isInitialized;
                if(!var1) { _fun0007_ip = 21; continue _fun0007 }
case 17: // try_start_0
                var1 = var2.emitViewInit;
                var1 = var1.bind(var2)();
case 22: // try_end0
                _fun0007_ip = 21; continue _fun0007;
case 23: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting loadstart/viewinit event';
                var1 = var2.bind(var3)(var1, var4);
case 21:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'emitLoad';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = this;
                var1 = arg1;
                var2 = var4.isInitialized;
                if(!var2) { _fun0008_ip = 24; continue _fun0008 }
case 25: // try_start_0
                var3 = var4.updateVideoSource;
                var2 = var1;
                var1 = undefined;
                var1 = var3.bind(var4)(var1, var1, var2);
case 26: // try_end0
                _fun0008_ip = 24; continue _fun0008;
case 27: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting load events';
                var1 = var2.bind(var3)(var1, var4);
case 24:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'emitPlay';
        var1['key'] = var6;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var1 = var2.isInitialized;
                if(!var1) { _fun0009_ip = 28; continue _fun0009 }
case 17: // try_start_0
                var1 = var2.viewInitEmitted;
                if(var1) { _fun0009_ip = 29; continue _fun0009 }
case 18:
                var1 = var2.emitViewInit;
                var1 = var1.bind(var2)();
case 29:
                var3 = var2.updatePlayerState;
                var1 = false;
                var3 = var3.bind(var2)(var1);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.emit;
                var4 = var2.playerId;
                var3 = 'play';
                var3 = var5.bind(var6)(var4, var3);
                var3 = true;
                var2['playStarted'] = var3;
                var2['playingEmitted'] = var1;
case 30: // try_end0
                _fun0009_ip = 28; continue _fun0009;
case 31: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting play event';
                var1 = var2.bind(var3)(var1, var4);
case 28:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'emitPause';
        var1['key'] = var6;
        var6 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = this;
                var2 = var1.isInitialized;
                if(!var2) { _fun0010_ip = 32; continue _fun0010 }
case 17: // try_start_0
                var3 = var1.updatePlayerState;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.emit;
                var2 = var1.playerId;
                var1 = 'pause';
                var1 = var3.bind(var4)(var2, var1);
case 33: // try_end0
                _fun0010_ip = 32; continue _fun0010;
case 34: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting pause event';
                var1 = var2.bind(var3)(var1, var4);
case 32:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'emitPlaying';
        var1['key'] = var6;
        var6 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = this;
                var1 = var2.isInitialized;
                if(!var1) { _fun0011_ip = 35; continue _fun0011 }
case 25:
                var1 = var2.playingEmitted;
                if(var1) { _fun0011_ip = 35; continue _fun0011 }
case 15: // try_start_0
                var1 = var2.viewInitEmitted;
                if(var1) { _fun0011_ip = 36; continue _fun0011 }
case 37:
                var1 = var2.emitViewInit;
                var1 = var1.bind(var2)();
case 36:
                var1 = var2.playStarted;
                if(var1) { _fun0011_ip = 38; continue _fun0011 }
case 13:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.emit;
                var3 = var2.playerId;
                var1 = 'play';
                var1 = var4.bind(var5)(var3, var1);
                var1 = true;
                var2['playStarted'] = var1;
case 38:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.emit;
                var3 = var2.playerId;
                var1 = 'playing';
                var1 = var4.bind(var5)(var3, var1);
                var1 = true;
                var2['playingEmitted'] = var1;
case 39: // try_end0
                _fun0011_ip = 35; continue _fun0011;
case 40: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting playing event';
                var1 = var2.bind(var3)(var1, var4);
case 35:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'emitWaiting';
        var1['key'] = var6;
        var6 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = this;
                var2 = var1.isInitialized;
                if(!var2) { _fun0012_ip = 41; continue _fun0012 }
case 17: // try_start_0
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.emit;
                var2 = var1.playerId;
                var1 = 'waiting';
                var1 = var3.bind(var4)(var2, var1);
case 24: // try_end0
                _fun0012_ip = 41; continue _fun0012;
case 42: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting waiting event';
                var1 = var2.bind(var3)(var1, var4);
case 41:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'emitCanPlay';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2.emitPlayerReady;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'emitSeeking';
        var1['key'] = var6;
        var6 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = this;
                var2 = var1.isInitialized;
                if(!var2) { _fun0013_ip = 41; continue _fun0013 }
case 17: // try_start_0
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.emit;
                var2 = var1.playerId;
                var1 = 'seeking';
                var1 = var3.bind(var4)(var2, var1);
case 24: // try_end0
                _fun0013_ip = 41; continue _fun0013;
case 42: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting seeking event';
                var1 = var2.bind(var3)(var1, var4);
case 41:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'emitSeeked';
        var1['key'] = var6;
        var6 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = this;
                var2 = var1.isInitialized;
                if(!var2) { _fun0014_ip = 41; continue _fun0014 }
case 17: // try_start_0
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.emit;
                var2 = var1.playerId;
                var1 = 'seeked';
                var1 = var3.bind(var4)(var2, var1);
case 24: // try_end0
                _fun0014_ip = 41; continue _fun0014;
case 42: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting seeked event';
                var1 = var2.bind(var3)(var1, var4);
case 41:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'emitEnded';
        var1['key'] = var6;
        var6 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = this;
                var1 = var2.isInitialized;
                if(!var1) { _fun0015_ip = 43; continue _fun0015 }
case 17: // try_start_0
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.emit;
                var3 = var2.playerId;
                var1 = 'ended';
                var1 = var4.bind(var5)(var3, var1);
                var1 = var2.emitViewEnd;
                var1 = var1.bind(var2)();
case 44: // try_end0
                _fun0015_ip = 43; continue _fun0015;
case 45: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting ended event';
                var1 = var2.bind(var3)(var1, var4);
case 43:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'emitError';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = this;
                var1 = arg1;
                var3 = var2.isInitialized;
                if(!var3) { _fun0016_ip = 46; continue _fun0016 }
case 25: // try_start_0
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.emit;
                var3 = var2.playerId;
                var2 = var1;
                var1 = 'error';
                var1 = var4.bind(var5)(var3, var1, var2);
case 47: // try_end0
                _fun0016_ip = 46; continue _fun0016;
case 48: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting error event';
                var1 = var2.bind(var3)(var1, var4);
case 46:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'emitTimeUpdate';
        var1['key'] = var6;
        var6 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = this;
                var2 = var1.isInitialized;
                if(!var2) { _fun0017_ip = 49; continue _fun0017 }
case 25: // try_start_0
                var3 = var1.playStarted;
                var2 = var3;
                if(!var3) { _fun0017_ip = 37; continue _fun0017 }
case 15:
                var3 = var1.playingEmitted;
                var2 = !var3;
case 37:
                if(!var2) { _fun0017_ip = 50; continue _fun0017 }
case 14:
                var2 = var1.emitPlaying;
                var2 = var2.bind(var1)();
case 50:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.emit;
                var3 = var1.playerId;
                var2 = {};
                var6 = var1.currentPlayheadTime;
                var1 = 1000;
                var1 = var6 * var1;
                var2['player_playhead_time'] = var1;
                var1 = 'timeupdate';
                var1 = var4.bind(var5)(var3, var1, var2);
case 51: // try_end0
                _fun0017_ip = 49; continue _fun0017;
case 52: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting timeupdate event';
                var1 = var2.bind(var3)(var1, var4);
case 49:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[19] = var1;
        var1 = {};
        var6 = 'emitRenditionChange';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = this;
                var5 = arg1;
                var4 = arg2;
                var1 = arg3;
                var3 = var2.isInitialized;
                if(!var3) { _fun0018_ip = 53; continue _fun0018 }
case 23:
                var6 = var2.currentRendition;
                var3 = null;
                if(!(var3 != var6)) { _fun0018_ip = 46; continue _fun0018 }
case 37:
                var3 = var2.currentRendition;
                var6 = var3.width;
                var3 = var5;
                if(!(var6 === var3)) { _fun0018_ip = 46; continue _fun0018 }
case 54:
                var3 = var2.currentRendition;
                var6 = var3.height;
                var3 = var4;
                if(!(var6 === var3)) { _fun0018_ip = 46; continue _fun0018 }
case 33:
                var3 = var2.currentRendition;
                var6 = var3.bitrate;
                var3 = var1;
                if(!(var6 !== var3)) { _fun0018_ip = 53; continue _fun0018 }
case 46: // try_start_0
                var3 = {};
                var7 = var5;
                var3['width'] = var7;
                var6 = var4;
                var3['height'] = var6;
                var3['bitrate'] = var1;
                var2['currentRendition'] = var3;
                var3 = var2.updateVideoSourceDimensions;
                var3 = var3.bind(var2)(var7, var6);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.emit;
                var3 = var2.playerId;
                var2 = {};
                var2['video_source_width'] = var7;
                var2['video_source_height'] = var6;
                var2['video_source_bitrate'] = var1;
                var1 = 'renditionchange';
                var1 = var4.bind(var5)(var3, var1, var2);
case 55: // try_end0
                _fun0018_ip = 53; continue _fun0018;
case 56: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting renditionchange event';
                var1 = var2.bind(var3)(var1, var4);
case 53:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[20] = var1;
        var1 = {};
        var6 = 'destroy';
        var1['key'] = var6;
        var6 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = this;
                var2 = var1.isInitialized;
                if(!var2) { _fun0019_ip = 57; continue _fun0019 }
case 25: // try_start_0
                var2 = var1.emitViewEnd;
                var2 = var2.bind(var1)();
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.emit;
                var4 = var1.playerId;
                var3 = 'destroy';
                var3 = var5.bind(var6)(var4, var3);
                var3 = false;
                var1['isInitialized'] = var3;
                var4 = _closure1_slot5;
                var3 = var4.info;
                var2 = {};
                var1 = var1.playerId;
                var2['playerId'] = var1;
                var1 = 'Mux Data mobile integration destroyed';
                var1 = var3.bind(var4)(var1, var2);
case 58: // try_end0
                _fun0019_ip = 57; continue _fun0019;
case 59: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error destroying Mux mobile integration';
                var1 = var2.bind(var3)(var1, var4);
case 57:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[21] = var1;
        var1 = {};
        var6 = 'emitViewEnd';
        var1['key'] = var6;
        var6 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var1 = this;
                var2 = var1.isInitialized;
                if(!var2) { _fun0020_ip = 41; continue _fun0020 }
case 17: // try_start_0
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.emit;
                var2 = var1.playerId;
                var1 = 'viewend';
                var1 = var3.bind(var4)(var2, var1);
case 24: // try_end0
                _fun0020_ip = 41; continue _fun0020;
case 42: // catch_target0
                CatchBlockStart(arg_register=3);
                var3 = _closure1_slot5;
                var2 = var3.error;
                var1 = 'Error emitting viewend event';
                var1 = var2.bind(var3)(var1, var4);
case 41:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[22] = var1;
        var1 = {};
        var6 = 'getSessionId';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.sessionId;
            return var1;
        };
        var1['value'] = var6;
        var2[23] = var1;
        var1 = {};
        var6 = 'hasPlayStarted';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.playStarted;
            return var1;
        };
        var1['value'] = var6;
        var2[24] = var1;
        var1 = {};
        var6 = 'mapConfigToMuxData';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var3 = this;
                var1 = {'env_key': null, 'session_id': null, 'player_name': 'discord-mobile', 'player_version': '1.0.0', 'player_software_name': 'react-native-video', 'player_software_version': '5.2.1-discord', 'player_mux_plugin_name': 'discord-mobile-custom-integration', 'player_mux_plugin_version': '1.0.0'};
                var2 = arg1;
                var1['env_key'] = var2;
                var2 = var3.sessionId;
                var1['session_id'] = var2;
                var2 = var3.config;
                var2 = var2.contentMetadata;
                var2 = var2.contentId;
                var1['video_id'] = var2;
                var2 = var3.config;
                var2 = var2.contentMetadata;
                var2 = var2.title;
                var1['video_title'] = var2;
                var2 = var3.config;
                var2 = var2.contentMetadata;
                var2 = var2.durationMs;
                var1['video_duration'] = var2;
                var2 = var3.config;
                var2 = var2.contentMetadata;
                var2 = var2.contentType;
                var1['video_content_type'] = var2;
                var2 = var3.config;
                var2 = var2.contentMetadata;
                var2 = var2.questId;
                var1['video_series'] = var2;
                var2 = var3.config;
                var2 = var2.contentMetadata;
                var2 = var2.gameId;
                var1['video_producer'] = var2;
                var2 = var3.config;
                var2 = var2.contentMetadata;
                var4 = var2.gameName;
                var2 = null;
                var5 = var2 != var4;
                var2 = 'Discord';
                if(!var5) { _fun0021_ip = 60; continue _fun0021 }
case 61:
                var2 = var4;
case 60:
                var1['video_brand'] = var2;
                var2 = 'Cloudflare';
                var1['video_cdn'] = var2;
                var2 = var3.config;
                var2 = var2.contentMetadata;
                var2 = var2.videoStreamType;
                var1['video_stream_type'] = var2;
                var2 = var3.getBuildChannel;
                var2 = var2.bind(var3)();
                var1['view_client_application_name'] = var2;
                var2 = var3.getAppVersion;
                var2 = var2.bind(var3)();
                var1['view_client_application_version'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[25] = var1;
        var1 = {};
        var6 = 'getAppVersion';
        var1['key'] = var6;
        var6 = function value() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var1 = '4757';
                return var1;
case 62:
                CatchBlockStart(arg_register=0);
                var1 = 'unknown';
                return var1;
            }
        };
        var1['value'] = var6;
        var2[26] = var1;
        var1 = {};
        var6 = 'getMuxEnvKey';
        var1['key'] = var6;
        var6 = function value() {
            var1 = '1qd16mdmdjasipqg3irobln4u';
            return var1;
        };
        var1['value'] = var6;
        var2[27] = var1;
        var1 = {};
        var6 = 'getBuildChannel';
        var1['key'] = var6;
        var5 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var1 = 'alpha';
                return var1;
case 63:
                CatchBlockStart(arg_register=0);
                var1 = 'stable';
                return var1;
            }
        };
        var1['value'] = var5;
        var2[28] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video-qoe/integrations/MobileCustomMuxIntegration.tsx';
    var4 = var5.bind(var6)(var4);
    var3['MobileCustomMuxIntegration'] = var2;
    return var1;
})();