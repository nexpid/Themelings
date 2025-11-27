// discord_common/js/packages/media-engine/VideoQualityManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var4 = global;
    var10 = var4.Object;
    var6 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var9[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var6 = 1;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.defaultVideoQualityOptions;
    var _closure1_slot4 = var7;
    var7 = var6.MediaEngineContextTypes;
    var _closure1_slot5 = var7;
    var10 = var6.VideoQualityMode;
    var7 = var6.VIDEO_QUALITY_FRAMERATE;
    var _closure1_slot6 = var7;
    var7 = var6.BIT_FLOOR_PER_PIXEL;
    var _closure1_slot7 = var7;
    var7 = var6.DESKTOP_LOW_QUALITY_STREAM_MAX_BITRATE;
    var _closure1_slot8 = var7;
    var7 = var6.DESKTOP_LOW_QUALITY_STREAM_MIN_BITRATE;
    var _closure1_slot9 = var7;
    var7 = var6.VIDEO_QUALITY_GOLIVE_LQ_WIDTH;
    var _closure1_slot10 = var7;
    var7 = var6.VIDEO_QUALITY_GOLIVE_LQ_HEIGHT;
    var _closure1_slot11 = var7;
    var6 = var6.VIDEO_QUALITY_GOLIVE_LQ_FRAMERATE;
    var _closure1_slot12 = var6;
    var7 = var4.Object;
    var6 = var7.freeze;
    var4 = {};
    var12 = var10.AUTO;
    var11 = {};
    var4[var12] = var11;
    var11 = var10.FULL;
    var10 = {};
    var12 = {'width': 1280, 'height': 720};
    var10['encode'] = var12;
    var4[var11] = var10;
    var6 = var6.bind(var7)(var4);
    var4 = function WantsVideoQuality(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = this;
            var6 = _closure1_slot3;
            var4 = _closure1_slot15;
            var1 = undefined;
            var4 = var6.bind(var1)(var3, var4);
            var4 = var2.capture;
            var6 = null;
            if(!(var6 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.encode;
            if(!(var6 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var4 = var2.capture;
            var7 = var6 == var4;
            var4 = undefined;
            if(var7) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var9 = _closure1_slot14;
            var11 = var2.capture;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var12 = var8;
            var7 = new var12[var9](var11, var10);
            var4 = var7 instanceof Object ? var7 : var8;
case 5:
            var3['capture'] = var4;
            var4 = var2.encode;
            var6 = var6 == var4;
            var4 = undefined;
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var7 = _closure1_slot14;
            var11 = var2.encode;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var5 = new var12[var7](var11, var10);
            var4 = var5 instanceof Object ? var5 : var6;
case 7:
            var3['encode'] = var4;
            var4 = var2.bitrateMin;
            var3['bitrateMin'] = var4;
            var4 = var2.bitrateMax;
            var3['bitrateMax'] = var4;
            var4 = var2.bitrateTarget;
            var3['bitrateTarget'] = var4;
            var2 = var2.localWant;
            var3['localWant'] = var2;
            return var1;
case 4:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var11 = 'Invalid arguments.';
            var12 = var2;
            var1 = new var12[var3](var11, var10);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot15 = var4;
    var5 = var5.bind(var1)(var4);
    var _closure1_slot13 = var5;
    var4 = function() {
        var5 = _closure1_slot2;
        var4 = function VideoQuality(arg1) {
            var2 = arg1;
            var3 = this;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = var2.width;
            var3['width'] = var4;
            var4 = var2.height;
            var3['height'] = var4;
            var4 = var2.framerate;
            var3['framerate'] = var4;
            var4 = var2.width;
            var2 = var2.height;
            var2 = var4 * var2;
            var3['pixelCount'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var1 = {};
        var3 = 'equals';
        var1['key'] = var3;
        var3 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var3 = null;
                var1 = var3 == var5;
                if(!var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var1 = var3 == var4;
case 9:
                if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var2 = var3 != var5;
                if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var2 = var3 != var4;
case 13:
                if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var6 = var5.width;
                var3 = var4.width;
                var3 = var6 === var3;
                if(!var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var7 = var5.height;
                var6 = var4.height;
                var3 = var7 === var6;
case 17:
                if(!var3) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var5 = var5.framerate;
                var4 = var4.framerate;
                var3 = var5 === var4;
case 19:
                var2 = var3;
case 15:
                var1 = var2;
case 11:
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(2);
        var3[0] = var1;
        var1 = {};
        var6 = 'extend';
        var1['key'] = var6;
        var2 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var1 = arg2;
                var8 = null;
                if(!(var8 != var2)) { _fun0003_ip = 21; continue _fun0003 }
case 10:
                if(!(var8 != var1)) { _fun0003_ip = 22; continue _fun0003 }
case 12:
                var4 = var8 == var1;
                var3 = undefined;
                if(var4) { _fun0003_ip = 16; continue _fun0003 }
case 23:
                var3 = var1.width;
case 16:
                if(!(var8 == var3)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var5 = var8 == var2;
                var4 = undefined;
                if(var5) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var4 = var2.width;
case 26:
                var3 = var4;
case 24:
                var6 = var8 != var3;
                var4 = 0;
                if(!var6) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                var4 = var3;
case 28:
                var6 = var8 == var1;
                var3 = undefined;
                if(var6) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                var3 = var1.height;
case 30:
                if(!(var8 == var3)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                var9 = var8 == var2;
                var6 = undefined;
                if(var9) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                var6 = var2.height;
case 34:
                var3 = var6;
case 32:
                var6 = var8 != var3;
                var5 = 0;
                if(!var6) { _fun0003_ip = 8; continue _fun0003 }
case 36:
                var5 = var3;
case 8:
                var3 = {};
                var3['width'] = var4;
                var3['height'] = var5;
                var9 = var8 == var1;
                var6 = undefined;
                if(var9) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                var6 = var1.framerate;
case 37:
                if(!(var8 == var6)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                var8 = var8 == var2;
                var7 = undefined;
                if(var8) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                var7 = var2.framerate;
case 41:
                var6 = var7;
case 39:
                var3['framerate'] = var6;
                var4 = var4 * var5;
                var3['pixelCount'] = var4;
                return var3;
case 22:
                return var2;
case 21:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[1] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var5.bind(var2)(var4, var1, var3);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot14 = var4;
    var2 = function() {
        var4 = _closure1_slot2;
        var3 = function VideoQualityManager(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var7 = arguments[2];
                var3 = this;
                var1 = undefined;
                if(!(var7 === var1)) { _fun0004_ip = 9; continue _fun0004 }
case 43:
                var7 = _closure1_slot4;
case 9:
                var5 = _closure1_slot3;
                var4 = _closure2_slot0;
                var4 = var5.bind(var1)(var3, var4);
                var4 = arg1;
                var3['contextType'] = var4;
                var4 = arg2;
                var3['connection'] = var4;
                var3['options'] = var7;
                var4 = false;
                var3['isMuted'] = var4;
                var6 = var3.contextType;
                var5 = _closure1_slot5;
                var5 = var5.STREAM;
                var5 = var6 === var5;
                var3['isStreamContext'] = var5;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 3;
                var5 = var8[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.MediaSinkWantsLadder;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var11 = var6;
                var10 = var7;
                var5 = new var11[var5](var10, var9);
                var5 = var5 instanceof Object ? var5 : var6;
                var3['ladder'] = var5;
                var5 = var3.getDefaultGoliveQuality;
                var5 = var5.bind(var3)();
                var3['goliveMaxQuality'] = var5;
                var3['goliveSimulcastEnabled'] = var4;
                var2 = _closure1_slot8;
                var3['goliveSimulcastLQBitrateMax'] = var2;
                var3['goliveSimulcastLQBitrateTarget'] = var2;
                var2 = {};
                var3['lastGoLivePixelCount'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getQuality';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var7 = arg1;
                var5 = this;
                var2 = var5.connection;
                var1 = var2.getLocalWant;
                var4 = var1.bind(var2)(var7);
                var6 = null;
                var1 = var6 != var7;
                var8 = 0;
                var2 = 0;
                if(!var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var3 = var5.connection;
                var1 = var3.getRemoteVideoSinkPixelCount;
                var10 = var1.bind(var3)(var7);
                var1 = var5.lastGoLivePixelCount;
                var3 = var1[var7];
                var1 = var10;
                if(!(var6 != var3)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var3 = var5.lastGoLivePixelCount;
                var3 = var3[var7];
                var1 = var10;
                if(!(var3 > var8)) { _fun0005_ip = 46; continue _fun0005 }
case 48:
                var3 = var5.lastGoLivePixelCount;
                var3 = var3[var7];
                var9 = var10 / var3;
                var8 = 1.05;
                var3 = var10;
                if(!(!(var9 > var8))) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var8 = 0.95;
                var3 = var10;
                if(!(!(var9 < var8))) { _fun0005_ip = 49; continue _fun0005 }
case 51:
                var8 = var5.lastGoLivePixelCount;
                var3 = var8[var7];
case 49:
                var1 = var3;
case 46:
                var3 = var5.lastGoLivePixelCount;
                var3[var7] = var1;
                var2 = var1;
case 44:
                var1 = var5.isStreamContext;
                if(var1) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                var1 = var5.getVideoQuality;
                var3 = var1.bind(var5)(var4);
                _fun0005_ip = 54; continue _fun0005;
case 52:
                var1 = var5.getGoliveQuality;
                var3 = var1.bind(var5)(var4, var2);
case 54:
                var2 = var5.qualityOverwrite;
                var1 = var3;
                if(!(var6 != var2)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                var4 = _closure1_slot13;
                var2 = {};
                var11 = _closure1_slot14;
                var10 = var11.extend;
                var9 = var3.encode;
                var8 = var5.qualityOverwrite;
                var8 = var8.encode;
                var8 = var10.bind(var11)(var9, var8);
                var2['encode'] = var8;
                var10 = _closure1_slot14;
                var9 = var10.extend;
                var8 = var3.capture;
                var7 = var5.qualityOverwrite;
                var7 = var7.capture;
                var7 = var9.bind(var10)(var8, var7);
                var2['capture'] = var7;
                var7 = var5.qualityOverwrite;
                var7 = var7.bitrateMin;
                if(!(var6 == var7)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                var7 = var3.bitrateMin;
case 57:
                var2['bitrateMin'] = var7;
                var7 = var5.qualityOverwrite;
                var7 = var7.bitrateMax;
                if(!(var6 == var7)) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                var7 = var3.bitrateMax;
case 59:
                var2['bitrateMax'] = var7;
                var5 = var5.qualityOverwrite;
                var5 = var5.bitrateTarget;
                if(!(var6 == var5)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                var5 = var3.bitrateTarget;
case 61:
                var2['bitrateTarget'] = var5;
                var3 = var3.localWant;
                var2['localWant'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var14 = var3;
                var13 = var2;
                var2 = new var14[var4](var13, var12);
                var1 = var2 instanceof Object ? var2 : var3;
case 55:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(12);
        var2[0] = var1;
        var1 = {};
        var6 = 'applyQualityConstraints';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var3 = var4.getQuality;
                var1 = arg2;
                var3 = var3.bind(var4)(var1);
                var1 = var3.capture;
                var5 = null;
                if(!(var5 != var1)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                var1 = var3.capture;
                var1 = var1.width;
                var2['encodingVideoWidth'] = var1;
                var1 = var3.capture;
                var1 = var1.height;
                var2['encodingVideoHeight'] = var1;
                var1 = var3.capture;
                var1 = var1.framerate;
                var2['encodingVideoFrameRate'] = var1;
                var1 = var3.capture;
                var1 = var1.framerate;
                var2['captureVideoFrameRate'] = var1;
case 63:
                var1 = var3.encode;
                if(!(var5 != var1)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                var1 = var3.encode;
                var1 = var1.framerate;
                var2['remoteSinkWantsMaxFramerate'] = var1;
                var1 = var3.encode;
                var1 = var1.pixelCount;
                var2['remoteSinkWantsPixelCount'] = var1;
case 65:
                var1 = var3.bitrateTarget;
                if(!(var5 == var1)) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                var1 = var3.bitrateMax;
                var2['encodingVideoBitRate'] = var1;
                _fun0006_ip = 69; continue _fun0006;
case 67:
                var1 = var3.bitrateTarget;
                var2['encodingVideoBitRate'] = var1;
case 69:
                var1 = var3.bitrateMin;
                var2['encodingVideoMinBitRate'] = var1;
                var1 = var3.bitrateMax;
                var2['encodingVideoMaxBitRate'] = var1;
                var1 = var2.encodingVideoBitRate;
                var1 = var5 != var1;
                if(!var1) { _fun0006_ip = 70; continue _fun0006 }
case 71:
                var4 = var2.encodingVideoMaxBitRate;
                var1 = var5 != var4;
case 70:
                if(!var1) { _fun0006_ip = 72; continue _fun0006 }
case 73:
                var1 = global;
                var6 = var1.Math;
                var5 = var6.min;
                var4 = var2.encodingVideoBitRate;
                var1 = var2.encodingVideoMaxBitRate;
                var1 = var5.bind(var6)(var4, var1);
                var2['encodingVideoBitRate'] = var1;
case 72:
                var1 = {};
                var1['quality'] = var3;
                var1['constraints'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'setQualityOverwrite';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['qualityOverwrite'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'setGoliveQuality';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var4 = _closure1_slot13;
                var1 = {};
                var9 = _closure1_slot14;
                var8 = var9.extend;
                var6 = var2.goliveMaxQuality;
                var7 = var6.capture;
                var6 = var3.capture;
                var6 = var8.bind(var9)(var7, var6);
                var1['capture'] = var6;
                var8 = _closure1_slot14;
                var7 = var8.extend;
                var5 = var2.goliveMaxQuality;
                var6 = var5.encode;
                var5 = var3.encode;
                var5 = var7.bind(var8)(var6, var5);
                var1['encode'] = var5;
                var6 = var3.bitrateMin;
                var5 = null;
                if(!(var5 == var6)) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                var7 = var2.goliveMaxQuality;
                var6 = var7.bitrateMin;
case 74:
                var1['bitrateMin'] = var6;
                var6 = var3.bitrateMax;
                if(!(var5 == var6)) { _fun0007_ip = 76; continue _fun0007 }
case 77:
                var7 = var2.goliveMaxQuality;
                var6 = var7.bitrateMax;
case 76:
                var1['bitrateMax'] = var6;
                var3 = var3.bitrateTarget;
                if(!(var5 == var3)) { _fun0007_ip = 78; continue _fun0007 }
case 79:
                var5 = var2.goliveMaxQuality;
                var3 = var5.bitrateTarget;
case 78:
                var1['bitrateTarget'] = var3;
                var3 = var2.goliveMaxQuality;
                var3 = var3.localWant;
                var1['localWant'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var12 = var3;
                var11 = var1;
                var1 = new var12[var4](var11, var10);
                var1 = var1 instanceof Object ? var1 : var3;
                var2['goliveMaxQuality'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'configGoLiveSimulcast';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var2 = arg2;
            var1 = this;
            var3 = arg1;
            var1['goliveSimulcastEnabled'] = var3;
            var1['goliveSimulcastLQBitrateMax'] = var2;
            var1['goliveSimulcastLQBitrateTarget'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'setGoLiveSimulcastLQTargetBitrate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['goliveSimulcastLQBitrateTarget'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'shouldEnableGoliveSimulcastForHqQuality';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var1 = var1.goliveSimulcastEnabled;
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0008_ip = 30; continue _fun0008 }
case 80:
                var2 = var3.width;
                var5 = 0;
                var2 = var5 === var2;
                if(!var2) { _fun0008_ip = 81; continue _fun0008 }
case 82:
                var4 = var3.height;
                var2 = var5 === var4;
case 81:
                if(var2) { _fun0008_ip = 83; continue _fun0008 }
case 84:
                var4 = var3.width;
                var3 = var3.height;
                var4 = var4 * var3;
                var5 = _closure1_slot10;
                var3 = _closure1_slot11;
                var3 = var5 * var3;
                var2 = var4 > var3;
case 83:
                var1 = var2;
case 30:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getVideoQuality';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var3 = var4.ladder;
                var1 = var3.getResolution;
                var6 = var1.bind(var3)(var2);
                var1 = var4.options;
                var1 = var1.videoBitrate;
                var3 = var1.min;
                var1 = var6.budgetPortion;
                var10 = var3 * var1;
                var1 = var4.options;
                var1 = var1.videoBitrate;
                var3 = var1.max;
                var1 = var6.budgetPortion;
                var7 = var3 * var1;
                var1 = var4.isMuted;
                if(var1) { _fun0009_ip = 48; continue _fun0009 }
case 19:
                var8 = var6.framerate;
                _fun0009_ip = 85; continue _fun0009;
case 48:
                var8 = var6.mutedFramerate;
case 85:
                var3 = _closure1_slot13;
                var1 = {};
                var5 = {};
                var12 = var5;
                var11 = var6;
                var6 = copyDataProperties(var12, var11);
                var6 = 'framerate';
                var5[var6] = var8;
                var1['encode'] = var5;
                var5 = {};
                var6 = var4.options;
                var6 = var6.videoCapture;
                var6 = var6.width;
                var5['width'] = var6;
                var6 = var4.options;
                var6 = var6.videoCapture;
                var6 = var6.height;
                var5['height'] = var6;
                var6 = var4.options;
                var6 = var6.videoCapture;
                var6 = var6.framerate;
                var5['framerate'] = var6;
                var1['capture'] = var5;
                var5 = global;
                var9 = var5.Math;
                var8 = var9.max;
                var6 = var4.options;
                var6 = var6.videoBitrateFloor;
                var6 = var8.bind(var9)(var10, var6);
                var1['bitrateMin'] = var6;
                var6 = var5.Math;
                var5 = var6.max;
                var4 = var4.options;
                var4 = var4.videoBitrateFloor;
                var4 = var5.bind(var6)(var7, var4);
                var1['bitrateMax'] = var4;
                var1['localWant'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var13 = var2;
                var12 = var1;
                var1 = new var13[var3](var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'scaleLinearly';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg2;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0010_ip = 86; continue _fun0010 }
case 87:
                var4 = arg1;
                var2 = arg3;
                var2 = var4 * var2;
                var1 = var2 / var3;
case 86:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'getGoliveQuality';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arg1;
                var11 = arg2;
                var2 = this;
                var1 = var2.goliveSimulcastEnabled;
                if(!var1) { _fun0011_ip = 88; continue _fun0011 }
case 89:
                var1 = 100;
                if(!(!(var3 < var1))) { _fun0011_ip = 90; continue _fun0011 }
case 88:
                var1 = var2.goliveMaxQuality;
                var4 = var1.encode;
                var7 = null;
                var6 = var7 == var4;
                var5 = undefined;
                var1 = undefined;
                if(var6) { _fun0011_ip = 91; continue _fun0011 }
case 18:
                var1 = var4.pixelCount;
case 91:
                if(!(var5 !== var1)) { _fun0011_ip = 92; continue _fun0011 }
case 29:
                var1 = var2.goliveMaxQuality;
                var1 = var1.encode;
                var1 = var1.pixelCount;
                if(!(!(var11 >= var1))) { _fun0011_ip = 92; continue _fun0011 }
case 93:
                var1 = 0;
                if(!(!(var11 <= var1))) { _fun0011_ip = 92; continue _fun0011 }
case 85:
                var6 = global;
                var10 = var6.Math;
                var9 = var10.min;
                var8 = _closure1_slot7;
                var4 = var2.goliveMaxQuality;
                var4 = var4.encode;
                var4 = var4.pixelCount;
                var8 = var8 * var4;
                var4 = var2.goliveMaxQuality;
                var4 = var4.encode;
                var4 = var4.framerate;
                var8 = var8 * var4;
                var4 = var2.goliveMaxQuality;
                var4 = var4.bitrateMax;
                var12 = var9.bind(var10)(var8, var4);
                var9 = var2.scaleLinearly;
                var4 = var2.goliveMaxQuality;
                var4 = var4.encode;
                var8 = var4.pixelCount;
                var4 = var2.goliveMaxQuality;
                var4 = var4.bitrateMin;
                var15 = var9.bind(var2)(var11, var8, var4);
                var9 = var2.scaleLinearly;
                var4 = var2.goliveMaxQuality;
                var4 = var4.encode;
                var8 = var4.pixelCount;
                var4 = var2.goliveMaxQuality;
                var4 = var4.bitrateMax;
                var14 = var9.bind(var2)(var11, var8, var4);
                var4 = var2.goliveMaxQuality;
                var4 = var4.bitrateTarget;
                var4 = var7 != var4;
                var10 = undefined;
                if(!var4) { _fun0011_ip = 94; continue _fun0011 }
case 95:
                var9 = var2.scaleLinearly;
                var4 = var2.goliveMaxQuality;
                var4 = var4.encode;
                var8 = var4.pixelCount;
                var4 = var2.goliveMaxQuality;
                var4 = var4.bitrateTarget;
                var10 = var9.bind(var2)(var11, var8, var4);
case 94:
                var4 = _closure1_slot13;
                var1 = {};
                var8 = var2.goliveMaxQuality;
                var8 = var8.encode;
                var1['encode'] = var8;
                var8 = var2.goliveMaxQuality;
                var8 = var8.capture;
                var1['capture'] = var8;
                var13 = var6.Math;
                var11 = var13.max;
                var9 = var6.Math;
                var8 = var9.ceil;
                var9 = var8.bind(var9)(var15);
                var8 = var2.options;
                var8 = var8.videoBitrateFloor;
                var8 = var11.bind(var13)(var9, var8);
                var1['bitrateMin'] = var8;
                var11 = var6.Math;
                var9 = var11.max;
                var13 = var6.Math;
                var8 = var13.ceil;
                var8 = var8.bind(var13)(var14);
                var8 = var9.bind(var11)(var8, var12);
                var1['bitrateMax'] = var8;
                var7 = var7 != var10;
                var5 = undefined;
                if(!var7) { _fun0011_ip = 96; continue _fun0011 }
case 97:
                var9 = var6.Math;
                var8 = var9.max;
                var7 = var6.Math;
                var6 = var7.ceil;
                var7 = var6.bind(var7)(var10);
                var6 = var2.options;
                var6 = var6.videoBitrateFloor;
                var5 = var8.bind(var9)(var7, var6);
case 96:
                var1['bitrateTarget'] = var5;
                var1['localWant'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var19 = var3;
                var18 = var1;
                var1 = new var19[var4](var18, var17);
                var1 = var1 instanceof Object ? var1 : var3;
                return var1;
case 92:
                var1 = var2.goliveMaxQuality;
                return var1;
case 90:
                var1 = var2.getGoliveLQQuality;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getDefaultGoliveQuality';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var3 = _closure1_slot13;
            var1 = {};
            var4 = {'width': 1280, 'height': 720};
            var5 = _closure1_slot6;
            var4['framerate'] = var5;
            var1['capture'] = var4;
            var4 = {'width': 1280, 'height': 720, 'framerate': null, 'pixelCount': 921600};
            var4['framerate'] = var5;
            var1['encode'] = var4;
            var4 = var2.options;
            var4 = var4.desktopBitrate;
            var4 = var4.min;
            var1['bitrateMin'] = var4;
            var4 = var2.options;
            var4 = var4.desktopBitrate;
            var4 = var4.max;
            var1['bitrateMax'] = var4;
            var2 = var2.options;
            var2 = var2.desktopBitrate;
            var2 = var2.target;
            var1['bitrateTarget'] = var2;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var7 = var1;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'getGoliveLQQuality';
        var1['key'] = var6;
        var5 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = this;
                var1 = global;
                var7 = var1.Math;
                var6 = var7.min;
                var5 = _closure1_slot10;
                var3 = var2.goliveMaxQuality;
                var8 = var3.encode;
                var12 = null;
                var10 = var12 == var8;
                var3 = undefined;
                if(var10) { _fun0012_ip = 98; continue _fun0012 }
case 99:
                var3 = var8.width;
case 98:
                if(!(var12 == var3)) { _fun0012_ip = 91; continue _fun0012 }
case 100:
                var3 = _closure1_slot10;
case 91:
                var7 = var6.bind(var7)(var5, var3);
                var8 = var1.Math;
                var6 = var8.min;
                var5 = _closure1_slot11;
                var3 = var2.goliveMaxQuality;
                var10 = var3.encode;
                var11 = var12 == var10;
                var3 = undefined;
                if(var11) { _fun0012_ip = 101; continue _fun0012 }
case 34:
                var3 = var10.height;
case 101:
                if(!(var12 == var3)) { _fun0012_ip = 102; continue _fun0012 }
case 63:
                var3 = _closure1_slot11;
case 102:
                var6 = var6.bind(var8)(var5, var3);
                var10 = var1.Math;
                var8 = var10.min;
                var5 = _closure1_slot12;
                var3 = var2.goliveMaxQuality;
                var11 = var3.encode;
                var13 = var12 == var11;
                var3 = undefined;
                if(var13) { _fun0012_ip = 103; continue _fun0012 }
case 65:
                var3 = var11.framerate;
case 103:
                if(!(var12 == var3)) { _fun0012_ip = 104; continue _fun0012 }
case 68:
                var3 = _closure1_slot12;
case 104:
                var8 = var8.bind(var10)(var5, var3);
                var11 = var1.Math;
                var10 = var11.min;
                var5 = _closure1_slot10;
                var3 = var2.goliveMaxQuality;
                var13 = var3.capture;
                var14 = var12 == var13;
                var3 = undefined;
                if(var14) { _fun0012_ip = 105; continue _fun0012 }
case 106:
                var3 = var13.width;
case 105:
                if(!(var12 == var3)) { _fun0012_ip = 107; continue _fun0012 }
case 108:
                var3 = _closure1_slot10;
case 107:
                var11 = var10.bind(var11)(var5, var3);
                var13 = var1.Math;
                var10 = var13.min;
                var5 = _closure1_slot11;
                var3 = var2.goliveMaxQuality;
                var14 = var3.capture;
                var15 = var12 == var14;
                var3 = undefined;
                if(var15) { _fun0012_ip = 109; continue _fun0012 }
case 110:
                var3 = var14.height;
case 109:
                if(!(var12 == var3)) { _fun0012_ip = 111; continue _fun0012 }
case 112:
                var3 = _closure1_slot11;
case 111:
                var10 = var10.bind(var13)(var5, var3);
                var5 = var1.Math;
                var3 = var5.min;
                var1 = _closure1_slot12;
                var13 = var2.goliveMaxQuality;
                var13 = var13.capture;
                var14 = var12 == var13;
                var9 = undefined;
                if(var14) { _fun0012_ip = 113; continue _fun0012 }
case 114:
                var9 = var13.framerate;
case 113:
                if(!(var12 == var9)) { _fun0012_ip = 115; continue _fun0012 }
case 94:
                var9 = _closure1_slot12;
case 115:
                var9 = var3.bind(var5)(var1, var9);
                var3 = _closure1_slot13;
                var1 = {};
                var5 = {};
                var5['width'] = var11;
                var5['height'] = var10;
                var5['framerate'] = var9;
                var1['capture'] = var5;
                var5 = {};
                var5['width'] = var7;
                var5['height'] = var6;
                var5['framerate'] = var8;
                var6 = var7 * var6;
                var5['pixelCount'] = var6;
                var1['encode'] = var5;
                var4 = _closure1_slot9;
                var1['bitrateMin'] = var4;
                var4 = var2.goliveSimulcastLQBitrateMax;
                var1['bitrateMax'] = var4;
                var2 = var2.goliveSimulcastLQBitrateTarget;
                var1['bitrateTarget'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var18 = var2;
                var17 = var1;
                var1 = new var18[var3](var17, var16);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[11] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = '../discord_common/js/packages/media-engine/VideoQualityManager.tsx';
    var7 = var8.bind(var9)(var7);
    var3['VIDEO_QUALITY_MODES_TO_OVERWRITES'] = var6;
    var3['WantsVideoQuality'] = var5;
    var3['VideoQuality'] = var4;
    var3['VideoQualityManager'] = var2;
    return var1;
})();