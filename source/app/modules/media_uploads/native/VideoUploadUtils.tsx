// app/modules/media_uploads/native/VideoUploadUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var4 = function calculateTargetDimensions(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = arg2;
            var3 = var1.width;
            var2 = var1.height;
            var2 = var3 / var2;
            var4 = var1.width;
            var3 = var1.height;
            if(!(!(var4 > var3))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = global;
            var6 = var3.Math;
            var5 = var6.min;
            var4 = var1.width;
            var4 = var5.bind(var6)(var8, var4);
            var6 = var3.Math;
            var5 = var6.round;
            var3 = var4 / var2;
            var3 = var5.bind(var6)(var3);
            var7 = var4;
            var4 = var3;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = global;
            var6 = var3.Math;
            var5 = var6.min;
            var1 = var1.height;
            var1 = var5.bind(var6)(var8, var1);
            var5 = var3.Math;
            var3 = var5.round;
            var2 = var1 * var2;
            var7 = var3.bind(var5)(var2);
            var4 = var1;
case 4:
            var1 = {};
            var2 = 2;
            var6 = var7 % var2;
            var5 = 0;
            var3 = var7;
            if(!(var6 !== var5)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = 1;
            var3 = var7 + var6;
case 5:
            var1['width'] = var3;
            var3 = var4 % var2;
            var2 = var4;
            if(!(var3 !== var5)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = 1;
            var2 = var4 + var3;
case 7:
            var1['height'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var9[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.VideoCompressionQuality;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var9[var5];
    var7 = var6.bind(var1)(var5);
    var5 = var7.prototype;
    var6 = Object.create(var5, {constructor: {value: var7}});
    var14 = 'VideoUploadUtils.tsx';
    var15 = var6;
    var5 = new var15[var7](var14, var13);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot6 = var5;
    var5 = function() {
        var4 = _closure1_slot4;
        var3 = function VideoQualityTarget(arg1, arg2, arg3) {
            var3 = this;
            var4 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['value'] = var2;
            var2 = arg2;
            var3['targetResolution'] = var2;
            var2 = arg3;
            var3['targetBitrate'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'toString';
        var1['key'] = var5;
        var2 = function value() {
            var1 = this;
            var1 = var1.value;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var6 = var5.bind(var1)();
    var _closure1_slot2 = var6;
    var5 = var6.prototype;
    var7 = Object.create(var5, {constructor: {value: var6}});
    var14 = 'very_low';
    var11 = 360;
    var12 = 800000;
    var15 = var7;
    var13 = var11;
    var5 = new var15[var6](var14, var13, var12, var11);
    var5 = var5 instanceof Object ? var5 : var7;
    var6['VERY_LOW'] = var5;
    var5 = var6.prototype;
    var7 = Object.create(var5, {constructor: {value: var6}});
    var14 = 'low';
    var12 = 1200000;
    var15 = var7;
    var5 = new var15[var6](var14, var13, var12, var11);
    var5 = var5 instanceof Object ? var5 : var7;
    var6['LOW'] = var5;
    var5 = var6.prototype;
    var7 = Object.create(var5, {constructor: {value: var6}});
    var14 = 'medium';
    var13 = 480;
    var12 = 2000000;
    var15 = var7;
    var5 = new var15[var6](var14, var13, var12, var11);
    var5 = var5 instanceof Object ? var5 : var7;
    var6['MEDIUM'] = var5;
    var5 = var6.prototype;
    var7 = Object.create(var5, {constructor: {value: var6}});
    var14 = 'high';
    var13 = 720;
    var12 = 2500000;
    var15 = var7;
    var5 = new var15[var6](var14, var13, var12, var11);
    var5 = var5 instanceof Object ? var5 : var7;
    var6['HIGH'] = var5;
    var5 = var6.prototype;
    var7 = Object.create(var5, {constructor: {value: var6}});
    var14 = 'very_high';
    var13 = 1080;
    var12 = 7000000;
    var15 = var7;
    var5 = new var15[var6](var14, var13, var12, var11);
    var5 = var5 instanceof Object ? var5 : var7;
    var6['VERY_HIGH'] = var5;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot5;
            var2 = var2.VERY_LOW;
            if(!(var2 !== var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = _closure1_slot5;
            var2 = var2.LOW;
            if(!(var2 !== var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = _closure1_slot5;
            var2 = var2.MEDIUM;
            if(!(var2 !== var5)) { _fun0002_ip = 5; continue _fun0002 }
case 13:
            var2 = _closure1_slot5;
            var2 = var2.HIGH;
            if(!(var2 !== var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var2 = _closure1_slot5;
            var2 = var2.VERY_HIGH;
            if(!(var2 !== var5)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Unknown compression quality: ';
            var6 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var2 = new var7[var4](var6, var5);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 16:
            var2 = _closure1_slot2;
            var2 = var2.VERY_HIGH;
            return var2;
case 14:
            var2 = _closure1_slot2;
            var2 = var2.HIGH;
            return var2;
case 5:
            var2 = _closure1_slot2;
            var2 = var2.MEDIUM;
            return var2;
case 11:
            var2 = _closure1_slot2;
            var2 = var2.LOW;
            return var2;
case 9:
            var1 = _closure1_slot2;
            var1 = var1.VERY_LOW;
            return var1;
        }
    };
    var6['fromCompressionQuality'] = var5;
    var5 = {'bitrateFloor': 300000, 'createHDR': false, 'frameRate': 30, 'keyFrameIntervalSeconds': 3, 'rotationDegrees': 0, 'skipVideoTranscode': false, 'targetBitrate': null, 'targetHeight': 480, 'targetWidth': 640, 'useHEVC': false, 'videoQuality': null, 'hevcIsSupported': false, 'useTranscodedVideoForMovSources': false, 'transmuxLivePhotos': false, 'progressUpdateGranularity': 10};
    var7 = var6.MEDIUM;
    var7 = var7.targetBitrate;
    var5['targetBitrate'] = var7;
    var7 = var6.MEDIUM;
    var5['videoQuality'] = var7;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/media_uploads/native/VideoUploadUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = {'HEVC': 0.8, 'DEFAULT': 1};
    var3['VIDEO_CODEC_SCALE_FACTORS'] = var7;
    var3['VideoQualityTarget'] = var6;
    var3['DEFAULT_VIDEO_ENCODING_CONFIG'] = var5;
    var5 = function calculateKeyFrameInterval(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = 2;
            var2 = arg1;
            if(!var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var1 = 3;
case 18:
            return var1;
        }
    };
    var3['calculateKeyFrameInterval'] = var5;
    var3['calculateTargetDimensions'] = var4;
    var4 = function canSkipVideoTranscode(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var5 = arg3;
            var4 = arg4;
            var3 = null;
            if(!(var3 != var5)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            if(!(var3 != var4)) { _fun0004_ip = 20; continue _fun0004 }
case 22:
            if(!(!(var5 > var4))) { _fun0004_ip = 23; continue _fun0004 }
case 20:
            var6 = _closure1_slot7;
            var5 = var1.targetResolution;
            var4 = undefined;
            var4 = var6.bind(var4)(var2, var5);
            var5 = global;
            var8 = var5.Math;
            var7 = var8.round;
            var6 = var2.width;
            var7 = var7.bind(var8)(var6);
            var8 = var5.Math;
            var6 = var8.round;
            var5 = var2.height;
            var6 = var6.bind(var8)(var5);
            var5 = var4.width;
            var5 = var7 <= var5;
            if(!var5) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var4 = var4.height;
            var5 = var6 <= var4;
case 24:
            var4 = var2.bitRate;
            var1 = var1.targetBitrate;
            var4 = var4 <= var1;
            var1 = !var5;
            if(!var5) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var1 = !var4;
case 26:
            if(var1) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var4 = var2.format;
            var1 = var3 == var4;
case 28:
            if(var1) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var5 = var2.format;
            var4 = var5.match;
            var2 = /(avc1|hvc1|video\\/(avc|hevc))/i;
            var2 = var4.bind(var5)(var2);
            var1 = var3 === var2;
case 30:
            var1 = !var1;
            return var1;
case 23:
            var1 = false;
            return var1;
        }
    };
    var3['canSkipVideoTranscode'] = var4;
    var4 = function logSourceMetadata(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = var4.format;
            var2 = null;
            var1 = var2 != var1;
            var8 = 'unknown';
            if(!var1) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var3 = var4.format;
            var1 = {'hvc1': 'hvc1 (HEVC)', 'avc1': 'avc1 (H.264)'};
            var1 = var1[var3];
            if(!(var2 == var1)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var1 = var4.format;
case 34:
            var8 = var1;
case 32:
            var6 = _closure1_slot6;
            var3 = var6.info;
            var1 = 'Video Source Metadata:';
            var1 = var3.bind(var6)(var1);
            var5 = var6.info;
            var1 = global;
            var3 = var1.HermesInternal;
            var7 = var3.concat;
            var3 = '- Codec: ';
            var3 = var7.bind(var3)(var8);
            var3 = var5.bind(var6)(var3);
            var5 = var6.info;
            var10 = var4.width;
            var9 = var4.height;
            var3 = var1.HermesInternal;
            var8 = var3.concat;
            var7 = '- Dimensions: ';
            var3 = 'x';
            var3 = var8.bind(var7)(var10, var3, var9);
            var3 = var5.bind(var6)(var3);
            var5 = var6.info;
            var9 = var4.bitRate;
            var3 = var1.HermesInternal;
            var8 = var3.concat;
            var7 = '- Bitrate: ';
            var3 = ' bps';
            var3 = var8.bind(var7)(var9, var3);
            var3 = var5.bind(var6)(var3);
            var5 = var6.info;
            var9 = var4.frameRate;
            var3 = var1.HermesInternal;
            var8 = var3.concat;
            var7 = '- Frame Rate: ';
            var3 = ' fps';
            var3 = var8.bind(var7)(var9, var3);
            var3 = var5.bind(var6)(var3);
            var5 = var6.info;
            var3 = var4.isHDRContent;
            var7 = 'No';
            if(!var3) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var7 = 'Yes';
case 36:
            var3 = '- HDR: ';
            var3 = var3 + var7;
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot6;
            var5 = var3.info;
            var7 = var4.rotationDegrees;
            var2 = var1.HermesInternal;
            var6 = var2.concat;
            var2 = '- Rotation Degrees: ';
            var2 = var6.bind(var2)(var7);
            var2 = var5.bind(var3)(var2);
            var5 = var3.info;
            var7 = var4.sourceProfile;
            var2 = var1.HermesInternal;
            var6 = var2.concat;
            var2 = '- Profile: ';
            var2 = var6.bind(var2)(var7);
            var2 = var5.bind(var3)(var2);
            var5 = var3.info;
            var7 = var4.sourceLevel;
            var2 = var1.HermesInternal;
            var6 = var2.concat;
            var2 = '- Level: ';
            var2 = var6.bind(var2)(var7);
            var2 = var5.bind(var3)(var2);
            var2 = var3.info;
            var6 = var4.durationMs;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '- Duration: ';
            var1 = ' ms';
            var1 = var5.bind(var4)(var6, var1);
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var3['logSourceMetadata'] = var4;
    var4 = function logEncoderSettings(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var6 = _closure1_slot6;
            var2 = var6.info;
            var1 = 'Encoder Video Quality Settings:';
            var1 = var2.bind(var6)(var1);
            var4 = var6.info;
            var3 = var7.videoQuality;
            var8 = null;
            var2 = var8 == var3;
            var1 = undefined;
            var10 = undefined;
            if(var2) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var2 = var3.toString;
            var10 = var2.bind(var3)();
case 38:
            var2 = global;
            var3 = var2.HermesInternal;
            var9 = var3.concat;
            var3 = '- Compression Quality: ';
            var3 = var9.bind(var3)(var10);
            var3 = var4.bind(var6)(var3);
            var6 = _closure1_slot6;
            var4 = var6.info;
            var3 = var7.videoQuality;
            var9 = var8 == var3;
            var11 = undefined;
            if(var9) { _fun0006_ip = 40; continue _fun0006 }
case 24:
            var11 = var3.targetResolution;
case 40:
            var3 = var2.HermesInternal;
            var10 = var3.concat;
            var9 = '- Compression Quality Target Resolution: ';
            var3 = 'p';
            var3 = var10.bind(var9)(var11, var3);
            var3 = var4.bind(var6)(var3);
            var6 = _closure1_slot6;
            var4 = var6.info;
            var3 = var7.videoQuality;
            var8 = var8 == var3;
            var9 = undefined;
            if(var8) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var9 = var3.targetBitrate;
case 41:
            var3 = var2.HermesInternal;
            var8 = var3.concat;
            var3 = '- Compression Quality Max Bitrate: ';
            var12 = ' bps';
            var3 = var8.bind(var3)(var9, var12);
            var3 = var4.bind(var6)(var3);
            var6 = _closure1_slot6;
            var4 = var6.info;
            var3 = 'Encoder Video Transcoding Settings:';
            var3 = var4.bind(var6)(var3);
            var6 = var7.skipVideoTranscode;
            var4 = _closure1_slot6;
            var3 = var4.info;
            if(var6) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var6 = var7.useHEVC;
            var8 = 'avc1 (H.264)';
            if(!var6) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var8 = 'hvc1 (HEVC)';
case 45:
            var6 = '- Codec: ';
            var6 = var6 + var8;
            var6 = var3.bind(var4)(var6);
            var9 = _closure1_slot6;
            var8 = var9.info;
            var14 = var7.targetWidth;
            var13 = var7.targetHeight;
            var6 = var2.HermesInternal;
            var11 = var6.concat;
            var10 = '- Dimensions: ';
            var6 = 'x';
            var6 = var11.bind(var10)(var14, var6, var13);
            var6 = var8.bind(var9)(var6);
            var8 = var9.info;
            var11 = var7.targetBitrate;
            var6 = var2.HermesInternal;
            var10 = var6.concat;
            var6 = '- Bitrate: ';
            var6 = var10.bind(var6)(var11, var12);
            var6 = var8.bind(var9)(var6);
            var8 = var9.info;
            var12 = var7.frameRate;
            var6 = var2.HermesInternal;
            var11 = var6.concat;
            var10 = '- Frame Rate: ';
            var6 = ' fps';
            var6 = var11.bind(var10)(var12, var6);
            var6 = var8.bind(var9)(var6);
            var8 = var9.info;
            var12 = var7.keyFrameIntervalSeconds;
            var6 = var2.HermesInternal;
            var11 = var6.concat;
            var10 = '- Key Frame Interval: ';
            var6 = ' seconds';
            var6 = var11.bind(var10)(var12, var6);
            var6 = var8.bind(var9)(var6);
            var8 = var9.info;
            var6 = var7.createHDR;
            var10 = 'No';
            var11 = var10;
            if(!var6) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var11 = 'Yes';
case 47:
            var6 = '- Create HDR: ';
            var6 = var6 + var11;
            var6 = var8.bind(var9)(var6);
            var9 = _closure1_slot6;
            var8 = var9.info;
            var12 = var7.rotationDegrees;
            var6 = var2.HermesInternal;
            var11 = var6.concat;
            var6 = '- Rotation Degrees: ';
            var6 = var11.bind(var6)(var12);
            var6 = var8.bind(var9)(var6);
            var8 = var9.info;
            var6 = var7.hevcIsSupported;
            if(!var6) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var10 = 'Yes';
case 49:
            var6 = '- HEVC Supported: ';
            var6 = var6 + var10;
            var6 = var8.bind(var9)(var6);
            var6 = _closure1_slot6;
            var5 = var6.info;
            var8 = var7.progressUpdateGranularity;
            var2 = var2.HermesInternal;
            var7 = var2.concat;
            var2 = '- Progress Update Granularity: ';
            var2 = var7.bind(var2)(var8);
            var2 = var5.bind(var6)(var2);
            _fun0006_ip = 51; continue _fun0006;
case 43:
            var2 = '- Skip Video Transcode: Yes';
            var2 = var3.bind(var4)(var2);
case 51:
            return var1;
        }
    };
    var3['logEncoderSettings'] = var4;
    var4 = function calculateOptimalBitrate(arg1, arg2, arg3, arg4, arg5) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg5;
            var2 = arg1;
            var4 = var2.bitRate;
            var2 = null;
            var5 = var4;
            if(!(var2 !== var1)) { _fun0007_ip = 8; continue _fun0007 }
case 52:
            var6 = var1.thermalState;
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var9 = 4;
            var2 = var2[var9];
            var8 = undefined;
            var2 = var7.bind(var8)(var2);
            var2 = var2.ThermalState;
            var2 = var2.SERIOUS;
            var2 = var6 !== var2;
            if(!var2) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var6 = var1.thermalState;
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var9];
            var3 = var7.bind(var8)(var3);
            var3 = var3.ThermalState;
            var3 = var3.CRITICAL;
            var2 = var6 !== var3;
case 53:
            var3 = var4;
            if(var2) { _fun0007_ip = 4; continue _fun0007 }
case 55:
            var2 = 0.8;
            var3 = var4 * var2;
case 4:
            var4 = var1.batteryLevel;
            var2 = 0.3;
            var1 = var3;
            if(!(var4 < var2)) { _fun0007_ip = 11; continue _fun0007 }
case 56:
            var2 = 0.9;
            var1 = var3 * var2;
case 11:
            var5 = var1;
case 8:
            var1 = global;
            var4 = var1.Math;
            var3 = var4.max;
            var2 = arg4;
            var4 = var3.bind(var4)(var5, var2);
            var2 = arg3;
            var3 = var2.targetBitrate;
            var2 = arg2;
            var3 = var3 * var2;
            var2 = var1.Math;
            var1 = var2.min;
            var1 = var1.bind(var2)(var4, var3);
            return var1;
        }
    };
    var3['calculateOptimalBitrate'] = var4;
    var2 = function shouldUseHEVC(arg1, arg2, arg3, arg4, arg5) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg4;
            var1 = arg2;
            var3 = !var1;
            if(var3) { _fun0008_ip = 21; continue _fun0008 }
case 18:
            var1 = arg3;
            var3 = !var1;
case 21:
            var1 = !var3;
            if(var3) { _fun0008_ip = 13; continue _fun0008 }
case 52:
            if(!var2) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var3 = arg1;
            var4 = var3.rotationDegrees;
            var3 = 0;
            var2 = var3 !== var4;
case 57:
            if(!var2) { _fun0008_ip = 59; continue _fun0008 }
case 60:
            var3 = arg5;
            var2 = !var3;
case 59:
            var1 = !var2;
case 13:
            return var1;
        }
    };
    var3['shouldUseHEVC'] = var2;
    return var1;
})();