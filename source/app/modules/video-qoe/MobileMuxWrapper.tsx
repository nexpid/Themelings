// app/modules/video-qoe/MobileMuxWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Logger;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'MobileMuxWrapper';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot4 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function MobileMuxWrapper(arg1) {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = null;
            var3['muxIntegration'] = var2;
            var4 = false;
            var3['seekingEmitted'] = var4;
            var3['seekTimeout'] = var2;
            var2 = arg1;
            var3['config'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = this;
case 2: // try_start_0
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.MobileCustomMuxIntegration;
                var7 = var2.config;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var2['muxIntegration'] = var3;
                var4 = var2.muxIntegration;
                var3 = var4.initialize;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot4;
                var3 = var4.info;
                var1 = 'MobileMuxWrapper initialized successfully';
                var1 = var3.bind(var4)(var1);
case 3: // try_end0
                _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
                CatchBlockStart(arg_register=4);
                var4 = _closure1_slot4;
                var3 = var4.error;
                var1 = 'Error initializing MobileMuxWrapper';
                var1 = var3.bind(var4)(var1, var5);
                var1 = null;
                var2['muxIntegration'] = var1;
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(22);
        var2[0] = var1;
        var1 = {};
        var6 = 'updatePlayheadTime';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = this;
                var3 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = var3.updatePlayheadTime;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'updateVideoDimensions';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = this;
                var4 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var4)) { _fun0003_ip = 8; continue _fun0003 }
case 7:
                var3 = var4.updateVideoDimensions;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'updateVideoSourceDimensions';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = this;
                var4 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var4)) { _fun0004_ip = 8; continue _fun0004 }
case 7:
                var3 = var4.updateVideoSourceDimensions;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'updateVideoSource';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = this;
                var5 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var5)) { _fun0005_ip = 9; continue _fun0005 }
case 7:
                var4 = var5.updateVideoSource;
                var3 = arg1;
                var2 = arg2;
                var1 = arg3;
                var1 = var4.bind(var5)(var3, var2, var1);
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'updatePlayerState';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = this;
                var4 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var4)) { _fun0006_ip = 8; continue _fun0006 }
case 7:
                var3 = var4.updatePlayerState;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'onLoadStart';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = this;
                var2 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var2)) { _fun0007_ip = 10; continue _fun0007 }
case 7:
                var1 = var2.emitLoadStart;
                var1 = var1.bind(var2)();
case 10:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'onLoad';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = this;
                var3 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var3)) { _fun0008_ip = 11; continue _fun0008 }
case 7:
                var2 = var3.emitLoad;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'onPlay';
        var1['key'] = var6;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = this;
                var2 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var2)) { _fun0009_ip = 10; continue _fun0009 }
case 7:
                var1 = var2.emitPlay;
                var1 = var1.bind(var2)();
case 10:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'onPause';
        var1['key'] = var6;
        var6 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = this;
                var2 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var2)) { _fun0010_ip = 10; continue _fun0010 }
case 7:
                var1 = var2.emitPause;
                var1 = var1.bind(var2)();
case 10:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'onPlaying';
        var1['key'] = var6;
        var6 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = this;
                var2 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var2)) { _fun0011_ip = 12; continue _fun0011 }
case 7:
                var1 = var2.emitPlaying;
                var1 = var1.bind(var2)();
case 12:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'onCanPlay';
        var1['key'] = var6;
        var6 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = this;
                var2 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var2)) { _fun0012_ip = 12; continue _fun0012 }
case 7:
                var1 = var2.emitCanPlay;
                var1 = var1.bind(var2)();
case 12:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'onSeek';
        var1['key'] = var6;
        var6 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.muxIntegration;
                var4 = null;
                if(!(var4 != var3)) { _fun0013_ip = 13; continue _fun0013 }
case 14:
                var3 = var2.seekingEmitted;
                if(var3) { _fun0013_ip = 15; continue _fun0013 }
case 16:
                var5 = var2.muxIntegration;
                var3 = var5.emitSeeking;
                var3 = var3.bind(var5)();
                var3 = true;
                var2['seekingEmitted'] = var3;
case 15:
                var3 = var2.seekTimeout;
                if(!(var4 != var3)) { _fun0013_ip = 17; continue _fun0013 }
case 18:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.seekTimeout;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
case 17:
                var3 = global;
                var5 = var3.setTimeout;
                var4 = undefined;
                var3 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var4 = var2.muxIntegration;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0014_ip = 11; continue _fun0014 }
case 19:
                        var3 = var4.emitSeeked;
                        var3 = var3.bind(var4)();
case 11:
                        var1 = _closure3_slot0;
                        var3 = false;
                        var1['seekingEmitted'] = var3;
                        var1['seekTimeout'] = var2;
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = 100;
                var1 = var5.bind(var4)(var3, var1);
                var2['seekTimeout'] = var1;
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'onEnd';
        var1['key'] = var6;
        var6 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = this;
                var4 = var2.muxIntegration;
                var1 = null;
                if(!(var1 != var4)) { _fun0015_ip = 10; continue _fun0015 }
case 7:
                var3 = var4.emitEnded;
                var3 = var3.bind(var4)();
case 10:
                var2 = var2.muxIntegration;
                if(!(var1 != var2)) { _fun0015_ip = 20; continue _fun0015 }
case 9:
                var1 = var2.destroy;
                var1 = var1.bind(var2)();
case 20:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'onError';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = this;
                var3 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var3)) { _fun0016_ip = 11; continue _fun0016 }
case 7:
                var2 = var3.emitError;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'onProgress';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = this;
                var3 = var1.updatePlayheadTime;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                var2 = var1.muxIntegration;
                var1 = null;
                if(!(var1 != var2)) { _fun0017_ip = 21; continue _fun0017 }
case 6:
                var1 = var2.emitTimeUpdate;
                var1 = var1.bind(var2)();
case 21:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'onBuffer';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = this;
                var1 = arg1;
                if(var1) { _fun0018_ip = 22; continue _fun0018 }
case 23:
                var4 = var2.muxIntegration;
                var1 = null;
                if(!(var1 != var4)) { _fun0018_ip = 11; continue _fun0018 }
case 14:
                var3 = var4.emitCanPlay;
                var3 = var3.bind(var4)();
case 11:
                var5 = var2.muxIntegration;
                var3 = var1 != var5;
                if(!var3) { _fun0018_ip = 24; continue _fun0018 }
case 25:
                var4 = var5.hasPlayStarted;
                var3 = var4.bind(var5)();
case 24:
                if(!var3) { _fun0018_ip = 22; continue _fun0018 }
case 26:
                var2 = var2.muxIntegration;
                if(!(var1 != var2)) { _fun0018_ip = 22; continue _fun0018 }
case 27:
                var1 = var2.emitPlaying;
                var1 = var1.bind(var2)();
case 22:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'onReadyForDisplay';
        var1['key'] = var6;
        var6 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = this;
                var4 = var2.muxIntegration;
                var1 = null;
                if(!(var1 != var4)) { _fun0019_ip = 12; continue _fun0019 }
case 7:
                var3 = var4.emitPlayerReady;
                var3 = var3.bind(var4)();
case 12:
                var5 = var2.muxIntegration;
                var3 = var1 != var5;
                if(!var3) { _fun0019_ip = 28; continue _fun0019 }
case 29:
                var4 = var5.hasPlayStarted;
                var3 = var4.bind(var5)();
case 28:
                if(!var3) { _fun0019_ip = 30; continue _fun0019 }
case 31:
                var2 = var2.muxIntegration;
                if(!(var1 != var2)) { _fun0019_ip = 30; continue _fun0019 }
case 32:
                var1 = var2.emitPlaying;
                var1 = var1.bind(var2)();
case 30:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'onVideoTrackChange';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var3 = arg2;
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.trackId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 != var1)) { _fun0020_ip = 33; continue _fun0020 }
case 34:
                var3 = this;
                var5 = var3.muxIntegration;
                if(!(var2 != var5)) { _fun0020_ip = 33; continue _fun0020 }
case 35:
                var4 = var5.emitRenditionChange;
                var3 = var1.width;
                var2 = var1.height;
                var1 = var1.bitrate;
                var1 = var4.bind(var5)(var3, var2, var1);
case 33:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'destroy';
        var1['key'] = var6;
        var6 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var3 = this;
                var1 = undefined;
                var4 = undefined;
case 36: // try_start_0
                var5 = var3.seekTimeout;
                var2 = null;
                if(!(var2 != var5)) { _fun0021_ip = 25; continue _fun0021 }
case 19:
                var5 = global;
                var6 = var5.clearTimeout;
                var5 = var3.seekTimeout;
                var5 = var6.bind(var1)(var5);
                var3['seekTimeout'] = var2;
case 25:
                var5 = var3.muxIntegration;
                var4 = var5;
                if(!(var2 != var5)) { _fun0021_ip = 37; continue _fun0021 }
case 26:
                var5 = var4;
                var4 = var5.destroy;
                var4 = var4.bind(var5)();
case 37:
                var3['muxIntegration'] = var2;
case 38: // try_end0
                _fun0021_ip = 5; continue _fun0021;
case 39: // catch_target0
                CatchBlockStart(arg_register=4);
                var4 = _closure1_slot4;
                var3 = var4.error;
                var2 = 'Error destroying MobileMuxWrapper';
                var2 = var3.bind(var4)(var2, var5);
case 5:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[19] = var1;
        var1 = {};
        var6 = 'getSessionId';
        var1['key'] = var6;
        var6 = function value() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var1 = this;
                var4 = var1.muxIntegration;
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0022_ip = 16; continue _fun0022 }
case 40:
                var3 = var4.getSessionId;
                var2 = var3.bind(var4)();
case 16:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0022_ip = 41; continue _fun0022 }
case 42:
                var1 = var2;
case 41:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[20] = var1;
        var1 = {};
        var6 = 'isInitialized';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1.muxIntegration;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var5;
        var2[21] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video-qoe/MobileMuxWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var3['MobileMuxWrapper'] = var2;
    return var1;
})();