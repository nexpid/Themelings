// app/lib/VideoQualityStats.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var15;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var8 = function parseEncoder(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = global;
            var4 = var1.Object;
            var3 = var4.keys;
            var2 = _closure1_slot16;
            var5 = var3.bind(var4)(var2);
            var2 = var5.length;
            var4 = 0;
            var2 = var4 < var2;
            if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var5[var4];
            var3 = var6.toLowerCase;
            var7 = var3.bind(var6)();
            var3 = var7.includes;
            var3 = var3.bind(var7)(var2);
            if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = var4 + 1;
            var3 = var5.length;
            if(var4 < var3) { _fun0002_ip = 9; continue _fun0002 }
case 8:
            var3 = _closure1_slot14;
            var3 = var3.UNCATEGORIZED;
            return var3;
case 10:
            var1 = _closure1_slot16;
            var1 = var1[var2];
            return var1;
case 6:
            var1 = _closure1_slot14;
            var1 = var1.UNKNOWN;
            return var1;
        }
    };
    var _closure1_slot20 = var8;
    var7 = function parseDecoder(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var1 = null;
            if(!(var1 != var6)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = global;
            var4 = var1.Object;
            var3 = var4.keys;
            var2 = _closure1_slot17;
            var5 = var3.bind(var4)(var2);
            var2 = var5.length;
            var4 = 0;
            var2 = var4 < var2;
            if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var2 = var5[var4];
            var3 = var6.toLowerCase;
            var7 = var3.bind(var6)();
            var3 = var7.includes;
            var3 = var3.bind(var7)(var2);
            if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var4 = var4 + 1;
            var3 = var5.length;
            if(var4 < var3) { _fun0003_ip = 9; continue _fun0003 }
case 8:
            var3 = _closure1_slot15;
            var3 = var3.UNCATEGORIZED;
            return var3;
case 10:
            var1 = _closure1_slot17;
            var1 = var1[var2];
            return var1;
case 6:
            var1 = _closure1_slot15;
            var1 = var1.UNKNOWN;
            return var1;
        }
    };
    var _closure1_slot21 = var7;
    var6 = function parseCodecType(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var1 = var2.toUpperCase;
            var2 = var1.bind(var2)();
            var1 = 'H264';
            if(!(var1 !== var2)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var1 = 'H265';
            if(!(var1 !== var2)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var1 = 'VP8';
            if(!(var1 !== var2)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var1 = 'VP9';
            if(!(var1 !== var2)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var1 = 'AV1';
            if(!(var1 !== var2)) { _fun0004_ip = 8; continue _fun0004 }
case 22:
            var1 = 'AV1X';
            if(!(var1 !== var2)) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            var1 = _closure1_slot13;
            var1 = var1.UNKNOWN;
            _fun0004_ip = 23; continue _fun0004;
case 8:
            var2 = _closure1_slot13;
            var1 = var2.AV1;
case 23:
            _fun0004_ip = 24; continue _fun0004;
case 20:
            var2 = _closure1_slot13;
            var1 = var2.VP9;
case 24:
            _fun0004_ip = 25; continue _fun0004;
case 18:
            var2 = _closure1_slot13;
            var1 = var2.VP8;
case 25:
            _fun0004_ip = 26; continue _fun0004;
case 16:
            var2 = _closure1_slot13;
            var1 = var2.H265;
case 26:
            _fun0004_ip = 27; continue _fun0004;
case 14:
            var2 = _closure1_slot13;
            var1 = var2.H264;
case 27:
            _fun0004_ip = 28; continue _fun0004;
case 12:
            var2 = _closure1_slot13;
            var1 = var2.UNKNOWN;
case 28:
            return var1;
        }
    };
    var _closure1_slot22 = var6;
    var4 = global;
    var11 = var4.Object;
    var9 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var5);
    var16 = 0;
    var5 = var15[var16];
    var1 = undefined;
    var5 = var10.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var13 = 1;
    var5 = var15[var13];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var9 = var15[var5];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var15[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var15[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var15[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000];
    var _closure1_slot9 = var9;
    var9 = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
    var _closure1_slot10 = var9;
    var9 = [720, 480, 360];
    var _closure1_slot11 = var9;
    var9 = ['framesCodec', 'framesNetwork', 'packets', 'packetsLost', 'framesDropped', 'framesCodecError', 'bytes', 'nackCount', 'pliCount', 'qpSum', 'freezeCount', 'pauseCount', 'totalFreezesDuration', 'totalPausesDuration', 'totalFramesDuration', 'keyframes', 'passthroughCount', 'cryptorSuccessCount', 'cryptorFailureCount', 'cryptorDuration', 'cryptorAttempts', 'cryptorMissingKeyCount', 'cryptorInvalidNonceCount', 'qualityDecodeErrors', 'qualityDecoderReboots', 'qualityScoreErrors', 'qualityFrameDrops', 'qualitySizeMismatches'];
    var _closure1_slot12 = var9;
    var12 = {};
    var9 = 'H264';
    var12['H264'] = var9;
    var9 = 'H265';
    var12['H265'] = var9;
    var9 = 'VP8';
    var12['VP8'] = var9;
    var9 = 'VP9';
    var12['VP9'] = var9;
    var9 = 'AV1';
    var12['AV1'] = var9;
    var9 = 'UNKNOWN';
    var12['UNKNOWN'] = var9;
    var _closure1_slot13 = var12;
    var11 = {};
    var9 = 'nvidia_cuda';
    var11['NVIDIA_CUDA'] = var9;
    var9 = 'nvidia_direct_3d';
    var11['NVIDIA_DIRECT_3D'] = var9;
    var9 = 'openh264';
    var11['OPENH264'] = var9;
    var22 = 'videotoolbox';
    var11['VIDEOTOOLBOX'] = var22;
    var9 = 'amd_direct_3d';
    var11['AMD_DIRECT_3D'] = var9;
    var9 = 'amd_vaapi';
    var11['AMD_VAAPI'] = var9;
    var9 = 'intel';
    var11['INTEL'] = var9;
    var9 = 'intel_direct_3d';
    var11['INTEL_DIRECT_3D'] = var9;
    var21 = 'vp8_libvpx';
    var11['VP8_LIBVPX'] = var21;
    var20 = 'exynos';
    var11['EXYNOS'] = var20;
    var19 = 'qualcomm';
    var11['QUALCOMM'] = var19;
    var18 = 'mediatek';
    var11['MEDIATEK'] = var18;
    var9 = 'wmf_sw';
    var11['WMF_SW'] = var9;
    var17 = 'uncategorized';
    var11['UNCATEGORIZED'] = var17;
    var9 = 'unknown';
    var11['UNKNOWN'] = var9;
    var _closure1_slot14 = var11;
    var10 = {};
    var10['VIDEOTOOLBOX'] = var22;
    var10['VP8_LIBVPX'] = var21;
    var21 = 'electron';
    var10['ELECTRON'] = var21;
    var21 = 'ffmpeg';
    var10['FFMPEG'] = var21;
    var21 = 'dav1d';
    var10['DAV1D'] = var21;
    var21 = 'WebRTC';
    var10['WEBRTC'] = var21;
    var10['EXYNOS'] = var20;
    var10['QUALCOMM'] = var19;
    var10['MEDIATEK'] = var18;
    var10['UNCATEGORIZED'] = var17;
    var10['UNKNOWN'] = var9;
    var _closure1_slot15 = var10;
    var18 = var4.Object;
    var17 = var18.freeze;
    var9 = {};
    var19 = var11.NVIDIA_CUDA;
    var9['nvidia: cuda'] = var19;
    var19 = var11.NVIDIA_DIRECT_3D;
    var9['nvidia: direct3d'] = var19;
    var19 = var11.AMD_DIRECT_3D;
    var9['amd: direct3d'] = var19;
    var19 = var11.AMD_VAAPI;
    var9['amd: vaapi'] = var19;
    var19 = var11.INTEL_DIRECT_3D;
    var9['intel: direct3d'] = var19;
    var19 = var11.INTEL;
    var9['intel'] = var19;
    var19 = var11.VIDEOTOOLBOX;
    var9['videotoolbox'] = var19;
    var19 = var11.OPENH264;
    var9['openh264'] = var19;
    var19 = var11.VP8_LIBVPX;
    var9['libvpx'] = var19;
    var19 = var11.EXYNOS;
    var9['c2.exynos'] = var19;
    var19 = var11.EXYNOS;
    var9['omx.exynos'] = var19;
    var19 = var11.QUALCOMM;
    var9['c2.qti'] = var19;
    var19 = var11.QUALCOMM;
    var9['omx.qcom'] = var19;
    var19 = var11.MEDIATEK;
    var9['c2.mtk'] = var19;
    var19 = var11.MEDIATEK;
    var9['omx.mtk'] = var19;
    var19 = var11.WMF_SW;
    var9['mediafoundation sw'] = var19;
    var9 = var17.bind(var18)(var9);
    var _closure1_slot16 = var9;
    var17 = var4.Object;
    var9 = var17.freeze;
    var4 = {};
    var18 = var10.VIDEOTOOLBOX;
    var4['videotoolbox'] = var18;
    var18 = var10.VP8_LIBVPX;
    var4['libvpx'] = var18;
    var18 = var10.ELECTRON;
    var4['electron'] = var18;
    var18 = var10.FFMPEG;
    var4['ffmpeg'] = var18;
    var18 = var10.DAV1D;
    var4['dav1d'] = var18;
    var18 = var10.WEBRTC;
    var4['webrtc'] = var18;
    var18 = var10.EXYNOS;
    var4['c2.exynos'] = var18;
    var18 = var10.EXYNOS;
    var4['omx.exynos'] = var18;
    var18 = var10.QUALCOMM;
    var4['c2.qti'] = var18;
    var18 = var10.QUALCOMM;
    var4['omx.qcom'] = var18;
    var18 = var10.MEDIATEK;
    var4['c2.mtk'] = var18;
    var18 = var10.MEDIATEK;
    var4['omx.mtk'] = var18;
    var4 = var9.bind(var17)(var4);
    var _closure1_slot17 = var4;
    var9 = {};
    var9['None'] = var16;
    var4 = 'None';
    var9[var16] = var4;
    var9['ClientSideDisableVideo'] = var13;
    var4 = 'ClientSideDisableVideo';
    var9[var13] = var4;
    var9['SenderStopped'] = var5;
    var4 = 'SenderStopped';
    var9[var5] = var4;
    var _closure1_slot18 = var9;
    var4 = function() {
        var5 = function RawVideoStats() {
            var3 = this;
            var4 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = 0;
            var3['bytes'] = var2;
            var3['framesCodec'] = var2;
            var4 = null;
            var3['framesCodecError'] = var4;
            var3['framesNetwork'] = var2;
            var3['resolution'] = var2;
            var3['minorResolution'] = var2;
            var3['majorResolution'] = var2;
            var3['timestamp'] = var2;
            var3['packets'] = var2;
            var3['packetsLost'] = var2;
            var3['framesDropped'] = var2;
            var3['nackCount'] = var2;
            var3['pliCount'] = var2;
            var3['encoder'] = var4;
            var3['decoder'] = var4;
            var3['codecType'] = var4;
            var3['qpSum'] = var2;
            var3['freezeCount'] = var2;
            var3['pauseCount'] = var2;
            var3['totalFreezesDuration'] = var2;
            var3['totalPausesDuration'] = var2;
            var3['totalFramesDuration'] = var2;
            var3['vmafScore'] = var4;
            var3['psnrDb'] = var4;
            var3['outboundSinkWant'] = var4;
            var3['keyframes'] = var4;
            var3['framesDroppedRateLimiter'] = var4;
            var3['framesDroppedEncoderQueue'] = var4;
            var3['framesDroppedCongestionWindow'] = var4;
            var3['framesDroppedEncoder'] = var4;
            var3['passthroughCount'] = var2;
            var3['cryptorSuccessCount'] = var2;
            var3['cryptorFailureCount'] = var2;
            var3['cryptorDuration'] = var2;
            var3['cryptorAttempts'] = var2;
            var3['cryptorMaxAttempts'] = var2;
            var3['cryptorMissingKeyCount'] = var2;
            var3['cryptorInvalidNonceCount'] = var2;
            var3['qualityDecodeErrors'] = var2;
            var3['qualityDecoderReboots'] = var2;
            var3['qualityScoreErrors'] = var2;
            var3['qualityFrameDrops'] = var2;
            var3['qualitySizeMismatches'] = var2;
            var3['localWant'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot8;
        var1 = {};
        var3 = 'parseInboundStats';
        var1['key'] = var3;
        var3 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arg1;
                var1 = _closure2_slot0;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var12 = var2;
                var1 = new var12[var1](var11);
                var1 = var1 instanceof Object ? var1 : var2;
                var4 = null;
                if(!(var4 != var3)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                var2 = var3.bytesReceived;
                var1['bytes'] = var2;
                var2 = var3.framesDecoded;
                var1['framesCodec'] = var2;
                var5 = var3.framesDecodeErrors;
                var6 = var4 != var5;
                var2 = null;
                if(!var6) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                var2 = var5;
case 31:
                var1['framesCodecError'] = var2;
                var2 = var3.framesReceived;
                var1['framesNetwork'] = var2;
                var2 = var3.packetsReceived;
                var1['packets'] = var2;
                var2 = var3.packetsLost;
                var1['packetsLost'] = var2;
                var2 = var3.framesDropped;
                var1['framesDropped'] = var2;
                var2 = var3.resolution;
                var6 = var4 != var2;
                var2 = 0;
                var5 = 0;
                if(!var6) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                var6 = var3.resolution;
                var5 = var6.height;
case 33:
                var1['resolution'] = var5;
                var5 = var3.resolution;
                var6 = var4 != var5;
                var5 = 0;
                if(!var6) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                var6 = global;
                var9 = var6.Math;
                var8 = var9.min;
                var6 = var3.resolution;
                var7 = var6.height;
                var6 = var3.resolution;
                var6 = var6.width;
                var5 = var8.bind(var9)(var7, var6);
case 35:
                var1['minorResolution'] = var5;
                var5 = var3.resolution;
                var6 = var4 != var5;
                var5 = 0;
                if(!var6) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var6 = global;
                var9 = var6.Math;
                var8 = var9.max;
                var6 = var3.resolution;
                var7 = var6.height;
                var6 = var3.resolution;
                var6 = var6.width;
                var5 = var8.bind(var9)(var7, var6);
case 37:
                var1['majorResolution'] = var5;
                var5 = arg2;
                var1['timestamp'] = var5;
                var5 = var3.nackCount;
                var1['nackCount'] = var5;
                var5 = var3.pliCount;
                var1['pliCount'] = var5;
                var8 = _closure1_slot21;
                var6 = var3.decoderImplementationName;
                var7 = undefined;
                var6 = var8.bind(var7)(var6);
                var1['decoder'] = var6;
                var6 = _closure1_slot22;
                var5 = var3.codec;
                var5 = var5.name;
                var5 = var6.bind(var7)(var5);
                var1['codecType'] = var5;
                var1['qpSum'] = var2;
                var5 = var3.freezeCount;
                var1['freezeCount'] = var5;
                var5 = var3.pauseCount;
                var1['pauseCount'] = var5;
                var5 = var3.totalFreezesDuration;
                var1['totalFreezesDuration'] = var5;
                var5 = var3.totalPausesDuration;
                var1['totalPausesDuration'] = var5;
                var5 = var3.totalFramesDuration;
                var1['totalFramesDuration'] = var5;
                var6 = var3.keyFramesDecoded;
                var7 = var4 != var6;
                var5 = null;
                if(!var7) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var5 = var6;
case 39:
                var1['keyframes'] = var5;
                var6 = var3.passthroughCount;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var5 = var6;
case 41:
                var1['passthroughCount'] = var5;
                var6 = var3.decryptSuccessCount;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                var5 = var6;
case 43:
                var1['cryptorSuccessCount'] = var5;
                var6 = var3.decryptFailureCount;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                var5 = var6;
case 45:
                var1['cryptorFailureCount'] = var5;
                var6 = var3.decryptDuration;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var5 = var6;
case 47:
                var1['cryptorDuration'] = var5;
                var6 = var3.decryptAttempts;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var5 = var6;
case 49:
                var1['cryptorAttempts'] = var5;
                var6 = var3.decryptMissingKeyCount;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var5 = var6;
case 51:
                var1['cryptorMissingKeyCount'] = var5;
                var6 = var3.decryptInvalidNonceCount;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                var5 = var6;
case 53:
                var1['cryptorInvalidNonceCount'] = var5;
                var3 = var3.sinkWantLocalAsInt;
                var4 = var4 != var3;
                var2 = 0;
                if(!var4) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                var2 = var3;
case 55:
                var1['localWant'] = var2;
case 29:
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(2);
        var3[0] = var1;
        var1 = {};
        var6 = 'parseOutboundStats';
        var1['key'] = var6;
        var2 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var1 = _closure2_slot0;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var13 = var2;
                var1 = new var13[var1](var12);
                var1 = var1 instanceof Object ? var1 : var2;
                var4 = null;
                if(!(var4 != var5)) { _fun0006_ip = 57; continue _fun0006 }
case 30:
                var2 = {};
                var3 = var5.bytesSent;
                var2['bytes'] = var3;
                var3 = var5.framesEncoded;
                var2['framesCodec'] = var3;
                var2['framesCodecError'] = var4;
                var7 = var5.framesSent;
                var8 = var4 != var7;
                var3 = 0;
                var6 = 0;
                if(!var8) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                var6 = var7;
case 58:
                var2['framesNetwork'] = var6;
                var6 = var5.packetsSent;
                var2['packets'] = var6;
                var7 = var5.packetsLost;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                var6 = var7;
case 60:
                var2['packetsLost'] = var6;
                var2['framesDropped'] = var3;
                var6 = var5.resolution;
                var7 = var4 != var6;
                var6 = 0;
                if(!var7) { _fun0006_ip = 62; continue _fun0006 }
case 14:
                var7 = var5.resolution;
                var6 = var7.height;
case 62:
                var2['resolution'] = var6;
                var6 = var5.resolution;
                var7 = var4 != var6;
                var6 = 0;
                if(!var7) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                var7 = global;
                var10 = var7.Math;
                var9 = var10.min;
                var7 = var5.resolution;
                var8 = var7.height;
                var7 = var5.resolution;
                var7 = var7.width;
                var6 = var9.bind(var10)(var8, var7);
case 63:
                var2['minorResolution'] = var6;
                var6 = var5.resolution;
                var7 = var4 != var6;
                var6 = 0;
                if(!var7) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                var7 = global;
                var10 = var7.Math;
                var9 = var10.max;
                var7 = var5.resolution;
                var8 = var7.height;
                var7 = var5.resolution;
                var7 = var7.width;
                var6 = var9.bind(var10)(var8, var7);
case 65:
                var2['majorResolution'] = var6;
                var6 = arg2;
                var2['timestamp'] = var6;
                var9 = _closure1_slot20;
                var7 = var5.encoderImplementationName;
                var8 = undefined;
                var7 = var9.bind(var8)(var7);
                var2['encoder'] = var7;
                var2['decoder'] = var4;
                var7 = _closure1_slot22;
                var6 = var5.codec;
                var6 = var6.name;
                var6 = var7.bind(var8)(var6);
                var2['codecType'] = var6;
                var6 = var5.nackCount;
                var2['nackCount'] = var6;
                var6 = var5.pliCount;
                var2['pliCount'] = var6;
                var6 = var5.qpSum;
                var2['qpSum'] = var6;
                var7 = var5.freezeCount;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                var6 = var7;
case 67:
                var2['freezeCount'] = var6;
                var2['pauseCount'] = var3;
                var7 = var5.totalFreezesDuration;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 69; continue _fun0006 }
case 70:
                var6 = var7;
case 69:
                var2['totalFreezesDuration'] = var6;
                var2['totalPausesDuration'] = var3;
                var7 = var5.totalFramesDuration;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 71; continue _fun0006 }
case 72:
                var6 = var7;
case 71:
                var2['totalFramesDuration'] = var6;
                var7 = var5.sinkWantAsInt;
                var8 = var4 != var7;
                var6 = null;
                if(!var8) { _fun0006_ip = 73; continue _fun0006 }
case 74:
                var6 = var7;
case 73:
                var2['outboundSinkWant'] = var6;
                var7 = var5.encoderQualityVmaf;
                var8 = var4 != var7;
                var6 = null;
                if(!var8) { _fun0006_ip = 75; continue _fun0006 }
case 76:
                var6 = var7;
case 75:
                var2['vmafScore'] = var6;
                var7 = var5.qualityDecodeErrors;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 77; continue _fun0006 }
case 78:
                var6 = var7;
case 77:
                var2['qualityDecodeErrors'] = var6;
                var7 = var5.qualityDecoderReboots;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 79; continue _fun0006 }
case 80:
                var6 = var7;
case 79:
                var2['qualityDecoderReboots'] = var6;
                var7 = var5.qualityScoreErrors;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 81; continue _fun0006 }
case 82:
                var6 = var7;
case 81:
                var2['qualityScoreErrors'] = var6;
                var7 = var5.qualityFrameDrops;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 83; continue _fun0006 }
case 84:
                var6 = var7;
case 83:
                var2['qualityFrameDrops'] = var6;
                var7 = var5.qualitySizeMismatches;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 85; continue _fun0006 }
case 86:
                var6 = var7;
case 85:
                var2['qualitySizeMismatches'] = var6;
                var7 = var5.encoderQualityPsnr;
                var8 = var4 != var7;
                var6 = null;
                if(!var8) { _fun0006_ip = 87; continue _fun0006 }
case 88:
                var6 = var7;
case 87:
                var2['psnrDb'] = var6;
                var7 = var5.keyFramesEncoded;
                var8 = var4 != var7;
                var6 = null;
                if(!var8) { _fun0006_ip = 89; continue _fun0006 }
case 90:
                var6 = var7;
case 89:
                var2['keyframes'] = var6;
                var7 = var5.framesDroppedRateLimiter;
                var8 = var4 != var7;
                var6 = null;
                if(!var8) { _fun0006_ip = 91; continue _fun0006 }
case 92:
                var6 = var7;
case 91:
                var2['framesDroppedRateLimiter'] = var6;
                var7 = var5.framesDroppedEncoderQueue;
                var8 = var4 != var7;
                var6 = null;
                if(!var8) { _fun0006_ip = 93; continue _fun0006 }
case 94:
                var6 = var7;
case 93:
                var2['framesDroppedEncoderQueue'] = var6;
                var7 = var5.framesDroppedCongestionWindow;
                var8 = var4 != var7;
                var6 = null;
                if(!var8) { _fun0006_ip = 95; continue _fun0006 }
case 96:
                var6 = var7;
case 95:
                var2['framesDroppedCongestionWindow'] = var6;
                var7 = var5.framesDroppedEncoder;
                var8 = var4 != var7;
                var6 = null;
                if(!var8) { _fun0006_ip = 97; continue _fun0006 }
case 98:
                var6 = var7;
case 97:
                var2['framesDroppedEncoder'] = var6;
                var7 = var5.passthroughCount;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 99; continue _fun0006 }
case 100:
                var6 = var7;
case 99:
                var2['passthroughCount'] = var6;
                var7 = var5.encryptSuccessCount;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 101; continue _fun0006 }
case 102:
                var6 = var7;
case 101:
                var2['cryptorSuccessCount'] = var6;
                var7 = var5.encryptFailureCount;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 103; continue _fun0006 }
case 104:
                var6 = var7;
case 103:
                var2['cryptorFailureCount'] = var6;
                var7 = var5.encryptDuration;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 105; continue _fun0006 }
case 106:
                var6 = var7;
case 105:
                var2['cryptorDuration'] = var6;
                var7 = var5.encryptAttempts;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 107; continue _fun0006 }
case 108:
                var6 = var7;
case 107:
                var2['cryptorAttempts'] = var6;
                var7 = var5.encryptMaxAttempts;
                var8 = var4 != var7;
                var6 = 0;
                if(!var8) { _fun0006_ip = 109; continue _fun0006 }
case 110:
                var6 = var7;
case 109:
                var2['cryptorMaxAttempts'] = var6;
                var5 = var5.encryptMissingKeyCount;
                var6 = var4 != var5;
                var4 = 0;
                if(!var6) { _fun0006_ip = 111; continue _fun0006 }
case 112:
                var4 = var5;
case 111:
                var2['cryptorMissingKeyCount'] = var4;
                var2['cryptorInvalidNonceCount'] = var3;
                var2['localWant'] = var3;
                var1 = var2;
case 57:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[1] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var4.bind(var2)(var5, var1, var3);
        return var1;
    };
    var5 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot8;
        var3 = function InboundStats(arg1) {
            var7 = arg1;
            var5 = this;
            var _closure3_slot0 = var5;
            var6 = _closure1_slot7;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var6.bind(var1)(var5, var4);
            var4 = global;
            var8 = var4.Object;
            var6 = var8.fromEntries;
            var10 = var4.Object;
            var9 = var10.values;
            var4 = _closure1_slot15;
            var10 = var9.bind(var10)(var4);
            var9 = var10.map;
            var4 = function(arg1) {
                var1 = new Array(2);
                var2 = arg1;
                var1[0] = var2;
                var2 = 0;
                var1[1] = var2;
                return var1;
            };
            var4 = var9.bind(var10)(var4);
            var4 = var6.bind(var8)(var4);
            var5['decoderBuckets'] = var4;
            var4 = 0;
            var6 = {'H264': 0, 'H265': 0, 'VP8': 0, 'VP9': 0, 'AV1': 0, 'UNKNOWN': 0};
            var5['codecBuckets'] = var6;
            var6 = new Array(0);
            var5['statsWindow'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = 6;
            var10 = var8[var9];
            var10 = var6.bind(var1)(var10);
            var10 = var10.Histogram;
            var11 = var10.prototype;
            var11 = Object.create(var11, {constructor: {value: var10}});
            var14 = var11;
            var10 = new var14[var10](var13);
            var10 = var10 instanceof Object ? var10 : var11;
            var5['fpsHistogram'] = var10;
            var10 = var8[var9];
            var10 = var6.bind(var1)(var10);
            var10 = var10.Histogram;
            var11 = var10.prototype;
            var11 = Object.create(var11, {constructor: {value: var10}});
            var14 = var11;
            var10 = new var14[var10](var13);
            var10 = var10 instanceof Object ? var10 : var11;
            var5['bitrateHistogram'] = var10;
            var10 = var8[var9];
            var10 = var6.bind(var1)(var10);
            var10 = var10.Histogram;
            var11 = var10.prototype;
            var11 = Object.create(var11, {constructor: {value: var10}});
            var14 = var11;
            var10 = new var14[var10](var13);
            var10 = var10 instanceof Object ? var10 : var11;
            var5['inboundBitrateEstimateHistogram'] = var10;
            var10 = var8[var9];
            var10 = var6.bind(var1)(var10);
            var10 = var10.Histogram;
            var11 = var10.prototype;
            var11 = Object.create(var11, {constructor: {value: var10}});
            var14 = var11;
            var10 = new var14[var10](var13);
            var10 = var10 instanceof Object ? var10 : var11;
            var5['resolutionHistogram'] = var10;
            var9 = var8[var9];
            var9 = var6.bind(var1)(var9);
            var9 = var9.Histogram;
            var10 = var9.prototype;
            var10 = Object.create(var10, {constructor: {value: var9}});
            var14 = var10;
            var9 = new var14[var9](var13);
            var9 = var9 instanceof Object ? var9 : var10;
            var5['localWantHistogram'] = var9;
            var10 = _closure1_slot1;
            var9 = 7;
            var9 = var8[var9];
            var9 = var10.bind(var1)(var9);
            var10 = var9.prototype;
            var10 = Object.create(var10, {constructor: {value: var9}});
            var14 = var10;
            var9 = new var14[var9](var13);
            var9 = var9 instanceof Object ? var9 : var10;
            var5['systemResources'] = var9;
            var9 = _closure1_slot13;
            var9 = var9.UNKNOWN;
            var5['decoderCodec'] = var9;
            var9 = {'framesCodec': 0, 'framesNetwork': 0, 'packets': 0, 'packetsLost': 0, 'framesDropped': 0, 'framesCodecError': 0, 'bytes': 0, 'nackCount': 0, 'pliCount': 0, 'qpSum': 0, 'freezeCount': 0, 'pauseCount': 0, 'totalFreezesDuration': 0, 'totalPausesDuration': 0, 'totalFramesDuration': 0, 'keyframes': 0, 'passthroughCount': 0, 'cryptorSuccessCount': 0, 'cryptorFailureCount': 0, 'cryptorDuration': 0, 'cryptorAttempts': 0, 'cryptorMissingKeyCount': 0, 'cryptorInvalidNonceCount': 0, 'qualityDecodeErrors': 0, 'qualityDecoderReboots': 0, 'qualityScoreErrors': 0, 'qualityFrameDrops': 0, 'qualitySizeMismatches': 0};
            var5['aggregatedProperties'] = var9;
            var5['aggregationDuration'] = var4;
            var9 = {};
            var5['bitrateBuckets'] = var9;
            var9 = {};
            var5['fpsBuckets'] = var9;
            var9 = {};
            var5['resolutionBuckets'] = var9;
            var5['resolutionTotal'] = var4;
            var5['minorResolutionTotal'] = var4;
            var5['majorResolutionTotal'] = var4;
            var5['intervalTotal'] = var4;
            var5['cryptorMaxAttempts'] = var4;
            var4 = _closure1_slot18;
            var4 = var4.None;
            var5['videoStoppedReason'] = var4;
            var4 = var7.now;
            var4 = var4.bind(var7)();
            var5['startTime'] = var4;
            var4 = 8;
            var4 = var8[var4];
            var4 = var6.bind(var1)(var4);
            var4 = var4.StopWatch;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var14 = var6;
            var13 = var7;
            var4 = new var14[var4](var13, var12);
            var4 = var4 instanceof Object ? var4 : var6;
            var5['videoStoppedWatch'] = var4;
            var6 = _closure1_slot9;
            var5 = var6.forEach;
            var4 = function(arg1) {
                var1 = _closure3_slot0;
                var3 = var1.bitrateBuckets;
                var2 = 0;
                var1 = arg1;
                var3[var1] = var2;
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var6 = _closure1_slot10;
            var5 = var6.forEach;
            var4 = function(arg1) {
                var1 = _closure3_slot0;
                var3 = var1.fpsBuckets;
                var2 = 0;
                var1 = arg1;
                var3[var1] = var2;
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot11;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var1 = _closure3_slot0;
                var3 = var1.resolutionBuckets;
                var2 = 0;
                var1 = arg1;
                var3[var1] = var2;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'isVideoStopped';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var2 = var1.videoStoppedReason;
            var1 = _closure1_slot18;
            var1 = var1.None;
            var1 = var2 !== var1;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(8);
        var2[0] = var1;
        var1 = {};
        var6 = 'videoStoppedDuration';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var2 = var1.videoStoppedWatch;
            var1 = var2.elapsed;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['get'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'collectAggregationStats';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var2 = arg2;
                var3 = this;
                var11 = _closure1_slot12;
                var1 = var11.length;
                var10 = 0;
                var4 = var10 < var1;
                var1 = undefined;
                var9 = null;
                var8 = 0;
                var7 = undefined;
                var6 = undefined;
                if(!var4) { _fun0007_ip = 24; continue _fun0007 }
case 113:
                var15 = var11[var8];
                var17 = var5[var15];
                if(!(var9 !== var17)) { _fun0007_ip = 114; continue _fun0007 }
case 115:
                var12 = var2[var15];
                var13 = var9 != var12;
                var4 = 0;
                if(!var13) { _fun0007_ip = 116; continue _fun0007 }
case 117:
                var4 = var12;
case 116:
                var14 = var3.aggregatedProperties;
                var16 = var14[var15];
                var13 = var17;
                if(!(!(var4 > var13))) { _fun0007_ip = 118; continue _fun0007 }
case 59:
                var13 = var17 - var4;
case 118:
                var13 = var16 + var13;
                var14[var15] = var13;
                var7 = var12;
                var6 = var4;
case 114:
                var8 = var8 + 1;
                var4 = var11.length;
                if(var8 < var4) { _fun0007_ip = 113; continue _fun0007 }
case 24:
                var4 = var3.aggregationDuration;
                var5 = var5.timestamp;
                var2 = var2.timestamp;
                var2 = var5 - var2;
                var2 = var4 + var2;
                var3['aggregationDuration'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'setVideoStopped';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg2;
                var1 = this;
                var2 = var1.videoStoppedReason;
                var4 = arg1;
                if(var4) { _fun0008_ip = 119; continue _fun0008 }
case 120:
                var4 = ~var3;
                var4 = var2 & var4;
                var1['videoStoppedReason'] = var4;
                var5 = var1.videoStoppedReason;
                var4 = _closure1_slot18;
                var4 = var4.None;
                if(!(var5 === var4)) { _fun0008_ip = 118; continue _fun0008 }
case 21:
                var6 = var1.statsWindow;
                var5 = var6.splice;
                var4 = 0;
                var4 = var5.bind(var6)(var4);
                var5 = var1.videoStoppedWatch;
                var4 = var5.stop;
                var4 = var4.bind(var5)();
case 118:
                var4 = undefined;
                return var4;
case 119:
                var2 = var2 | var3;
                var1['videoStoppedReason'] = var2;
                var2 = var1.videoStoppedWatch;
                var1 = var2.start;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'appendAndIncrementStats';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var3 = var1.isVideoStopped;
                if(var3) { _fun0009_ip = 121; continue _fun0009 }
case 122:
                var4 = var1.statsWindow;
                var3 = var4.push;
                var3 = var3.bind(var4)(var5);
                var3 = var1.statsWindow;
                var3 = var3.length;
                var7 = 2;
                if(!(!(var3 < var7))) { _fun0009_ip = 121; continue _fun0009 }
case 123:
                var4 = var1.statsWindow;
                var3 = var1.statsWindow;
                var3 = var3.length;
                var16 = 1;
                var3 = var3 - var16;
                var3 = var4[var3];
                var6 = var1.statsWindow;
                var4 = var1.statsWindow;
                var4 = var4.length;
                var4 = var4 - var7;
                var11 = var6[var4];
                var4 = var1.collectAggregationStats;
                var4 = var4.bind(var1)(var3, var11);
                var4 = var1.cryptorFailureBeforeSuccessCount;
                var6 = null;
                if(!(var6 == var4)) { _fun0009_ip = 124; continue _fun0009 }
case 125:
                var7 = var5.cryptorSuccessCount;
                var4 = 0;
                if(!(var7 > var4)) { _fun0009_ip = 124; continue _fun0009 }
case 34:
                var7 = var1.aggregatedProperties;
                var7 = var7.cryptorFailureCount;
                var8 = var6 != var7;
                var4 = 0;
                if(!var8) { _fun0009_ip = 126; continue _fun0009 }
case 127:
                var4 = var7;
case 126:
                var1['cryptorFailureBeforeSuccessCount'] = var4;
case 124:
                var10 = var3.bytes;
                var9 = var3.framesCodec;
                var12 = var3.timestamp;
                var7 = var3.resolution;
                var _closure3_slot1 = var7;
                var17 = var3.minorResolution;
                var8 = var3.majorResolution;
                var18 = var3.encoder;
                var15 = var3.decoder;
                var13 = var3.codecType;
                var4 = var3.localWant;
                var11 = var11.timestamp;
                var14 = var12 - var11;
                var11 = 1000;
                var14 = var14 / var11;
                var _closure3_slot2 = var14;
                var19 = var1.intervalTotal;
                var19 = var19 + var14;
                var1['intervalTotal'] = var19;
                var20 = var1.resolutionTotal;
                var19 = var7 * var14;
                var19 = var20 + var19;
                var1['resolutionTotal'] = var19;
                var19 = var1.minorResolutionTotal;
                var17 = var17 * var14;
                var17 = var19 + var17;
                var1['minorResolutionTotal'] = var17;
                var17 = var1.majorResolutionTotal;
                var8 = var8 * var14;
                var8 = var17 + var8;
                var1['majorResolutionTotal'] = var8;
                var8 = global;
                var20 = var8.Math;
                var19 = var20.max;
                var17 = var1.cryptorMaxAttempts;
                var8 = var3.cryptorMaxAttempts;
                var8 = var19.bind(var20)(var17, var8);
                var1['cryptorMaxAttempts'] = var8;
                if(!(var6 != var18)) { _fun0009_ip = 128; continue _fun0009 }
case 129:
                if(!(var6 != var13)) { _fun0009_ip = 128; continue _fun0009 }
case 130:
                var8 = 'encoderBuckets';
                var8 = var8 in var1;
                if(!var8) { _fun0009_ip = 128; continue _fun0009 }
case 131:
                var17 = var1.encoderBuckets;
                var8 = var17[var18];
                var8 = var8 + var14;
                var17[var18] = var8;
                var17 = var1.codecBuckets;
                var8 = var17[var13];
                var8 = var8 + var14;
                var17[var13] = var8;
                var8 = var3.codecType;
                var8 = var6 != var8;
                if(!var8) { _fun0009_ip = 42; continue _fun0009 }
case 132:
                var18 = var3.codecType;
                var17 = _closure1_slot13;
                var17 = var17.UNKNOWN;
                var8 = var18 !== var17;
case 42:
                if(!var8) { _fun0009_ip = 76; continue _fun0009 }
case 41:
                var8 = var3.codecType;
                var1['encoderCodec'] = var8;
case 76:
                var8 = var5.vmafScore;
                var8 = var6 != var8;
                if(!var8) { _fun0009_ip = 133; continue _fun0009 }
case 134:
                var18 = var5.vmafScore;
                var17 = 0;
                var8 = var18 >= var17;
case 133:
                if(!var8) { _fun0009_ip = 135; continue _fun0009 }
case 136:
                var8 = var1.vmafScoreNum;
                var8 = var8 + var16;
                var1['vmafScoreNum'] = var8;
                var17 = var1.vmafScoreSum;
                var8 = var5.vmafScore;
                var8 = var17 + var8;
                var1['vmafScoreSum'] = var8;
                var18 = var1.vmafHistogram;
                var17 = var18.addSample;
                var8 = var5.vmafScore;
                var8 = var17.bind(var18)(var8);
case 135:
                var8 = var5.psnrDb;
                var8 = var6 != var8;
                if(!var8) { _fun0009_ip = 137; continue _fun0009 }
case 138:
                var18 = var5.psnrDb;
                var17 = 0;
                var8 = var18 >= var17;
case 137:
                if(!var8) { _fun0009_ip = 139; continue _fun0009 }
case 140:
                var8 = var1.psnrDbNum;
                var8 = var8 + var16;
                var1['psnrDbNum'] = var8;
                var17 = var1.psnrDbSum;
                var8 = var5.psnrDb;
                var8 = var17 + var8;
                var1['psnrDbSum'] = var8;
                var18 = var1.psnrHistogram;
                var17 = var18.addSample;
                var8 = var5.psnrDb;
                var8 = var17.bind(var18)(var8);
case 139:
                var8 = var5.outboundSinkWant;
                var8 = var6 != var8;
                if(!var8) { _fun0009_ip = 141; continue _fun0009 }
case 142:
                var18 = var5.outboundSinkWant;
                var17 = 0;
                var8 = var17 !== var18;
case 141:
                if(!var8) { _fun0009_ip = 128; continue _fun0009 }
case 143:
                var8 = var1.outboundSinkWantNum;
                var8 = var8 + var16;
                var1['outboundSinkWantNum'] = var8;
                var8 = var1.outboundSinkWantSum;
                var5 = var5.outboundSinkWant;
                var5 = var8 + var5;
                var1['outboundSinkWantSum'] = var5;
case 128:
                if(!(var6 != var15)) { _fun0009_ip = 144; continue _fun0009 }
case 145:
                if(!(var6 != var13)) { _fun0009_ip = 144; continue _fun0009 }
case 146:
                var5 = 'decoderBuckets';
                var5 = var5 in var1;
                if(!var5) { _fun0009_ip = 144; continue _fun0009 }
case 147:
                var8 = var1.decoderBuckets;
                var5 = var8[var15];
                var5 = var5 + var14;
                var8[var15] = var5;
                var8 = var1.codecBuckets;
                var5 = var8[var13];
                var5 = var5 + var14;
                var8[var13] = var5;
                var5 = var3.codecType;
                var5 = var6 != var5;
                if(!var5) { _fun0009_ip = 148; continue _fun0009 }
case 149:
                var8 = var3.codecType;
                var6 = _closure1_slot13;
                var6 = var6.UNKNOWN;
                var5 = var8 !== var6;
case 148:
                if(!var5) { _fun0009_ip = 144; continue _fun0009 }
case 150:
                var3 = var3.codecType;
                var1['decoderCodec'] = var3;
case 144:
                var3 = var1.statsWindow;
                var5 = var3.length;
                var3 = 6;
                if(!(!(var5 < var3))) { _fun0009_ip = 121; continue _fun0009 }
case 107:
                var5 = var1.statsWindow;
                var3 = var1.statsWindow;
                var6 = var3.length;
                var3 = 3;
                var3 = var6 - var3;
                var3 = var5[var3];
                var6 = var3.bytes;
                var5 = var3.framesCodec;
                var8 = var3.timestamp;
                var15 = _closure1_slot11;
                var14 = var15.forEach;
                var13 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure3_slot1;
                        if(!(var2 <= var3)) { _fun0010_ip = 113; continue _fun0010 }
case 151:
                        var2 = _closure3_slot0;
                        var2 = var2.resolutionBuckets;
                        var4 = var2[var3];
                        var1 = _closure3_slot2;
                        var1 = var4 + var1;
                        var2[var3] = var1;
case 113:
                        var1 = undefined;
                        return var1;
                    }
                };
                var13 = var14.bind(var15)(var13);
                var8 = var12 - var8;
                var8 = var8 / var11;
                var10 = var10 - var6;
                var6 = 8;
                var6 = var6 * var10;
                var6 = var6 / var8;
                var _closure3_slot3 = var6;
                var5 = var9 - var5;
                var5 = var5 / var8;
                var _closure3_slot4 = var5;
                var10 = _closure1_slot9;
                var9 = var10.forEach;
                var8 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure3_slot3;
                        if(!(var2 <= var3)) { _fun0011_ip = 113; continue _fun0011 }
case 151:
                        var2 = _closure3_slot0;
                        var2 = var2.bitrateBuckets;
                        var4 = var2[var3];
                        var1 = _closure3_slot2;
                        var1 = var4 + var1;
                        var2[var3] = var1;
case 113:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = var9.bind(var10)(var8);
                var8 = _closure1_slot10;
                var3 = var8.forEach;
                var2 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure3_slot4;
                        if(!(var2 <= var3)) { _fun0012_ip = 113; continue _fun0012 }
case 151:
                        var2 = _closure3_slot0;
                        var2 = var2.fpsBuckets;
                        var4 = var2[var3];
                        var1 = _closure3_slot2;
                        var1 = var4 + var1;
                        var2[var3] = var1;
case 113:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var8)(var2);
                var3 = var1.resolutionHistogram;
                var2 = var3.addSample;
                var2 = var2.bind(var3)(var7);
                var3 = var1.bitrateHistogram;
                var2 = var3.addSample;
                var2 = var2.bind(var3)(var6);
                var3 = var1.fpsHistogram;
                var2 = var3.addSample;
                var2 = var2.bind(var3)(var5);
                var3 = var1.localWantHistogram;
                var2 = var3.addSample;
                var2 = var2.bind(var3)(var4);
                var2 = var1.statsWindow;
                var1 = var2.shift;
                var1 = var1.bind(var2)();
case 121:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'addSystemResources';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.systemResources;
            var1 = var2.takeSample;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'appendTransportStats';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
                var3 = var1.inboundBitrateEstimate;
                var2 = null;
                if(!(var2 != var3)) { _fun0013_ip = 152; continue _fun0013 }
case 153:
                var2 = this;
                var3 = var2.inboundBitrateEstimateHistogram;
                var2 = var3.addSample;
                var1 = var1.inboundBitrateEstimate;
                var1 = var2.bind(var3)(var1);
case 152:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getCodecsUsed';
        var1['key'] = var6;
        var5 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = global;
                var1 = var2.Set;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var13 = var3;
                var1 = new var13[var1](var12);
                var1 = var1 instanceof Object ? var1 : var3;
                var4 = var2.Object;
                var3 = var4.entries;
                var2 = this;
                var2 = var2.codecBuckets;
                var9 = var3.bind(var4)(var2);
                var2 = var9.length;
                var8 = 0;
                var2 = var8 < var2;
                var6 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if(!var2) { _fun0014_ip = 154; continue _fun0014 }
case 31:
                var10 = var9[var3];
                var2 = _closure1_slot6;
                var2 = var2.bind(var6)(var10, var5);
                var10 = var2[var8];
                var2 = var2[var4];
                if(!(var2 > var8)) { _fun0014_ip = 18; continue _fun0014 }
case 155:
                var2 = var1.add;
                var2 = var2.bind(var1)(var10);
case 18:
                var3 = var3 + 1;
                var2 = var9.length;
                if(var3 < var2) { _fun0014_ip = 31; continue _fun0014 }
case 154:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[7] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var2 = function(arg1) {
        var4 = function OutboundStats(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var6 = this;
                var2 = 0;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var7 = _closure1_slot7;
                var4 = _closure2_slot0;
                var5 = undefined;
                var7 = var7.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot4;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot3;
                var1 = _closure1_slot19;
                var1 = var1.bind(var5)();
                if(var1) { _fun0015_ip = 156; continue _fun0015 }
case 157:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0015_ip = 158; continue _fun0015;
case 156:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot4;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 158:
                var1 = var4.bind(var5)(var6, var1);
                var4 = global;
                var7 = var4.Object;
                var6 = var7.fromEntries;
                var9 = var4.Object;
                var8 = var9.values;
                var4 = _closure1_slot14;
                var9 = var8.bind(var9)(var4);
                var8 = var9.map;
                var4 = function(arg1) {
                    var1 = new Array(2);
                    var2 = arg1;
                    var1[0] = var2;
                    var2 = 0;
                    var1[1] = var2;
                    return var1;
                };
                var4 = var8.bind(var9)(var4);
                var4 = var6.bind(var7)(var4);
                var1['encoderBuckets'] = var4;
                var4 = _closure1_slot13;
                var4 = var4.UNKNOWN;
                var1['encoderCodec'] = var4;
                var1['targetFrames'] = var2;
                var1['targetBytesMax'] = var2;
                var1['targetBytesNetwork'] = var2;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 6;
                var7 = var6[var3];
                var7 = var4.bind(var5)(var7);
                var7 = var7.Histogram;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var15 = var8;
                var7 = new var15[var7](var14);
                var7 = var7 instanceof Object ? var7 : var8;
                var1['targetBitrateHistogram'] = var7;
                var1['outboundBytesAvailable'] = var2;
                var7 = var6[var3];
                var7 = var4.bind(var5)(var7);
                var7 = var7.Histogram;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var15 = var8;
                var7 = new var15[var7](var14);
                var7 = var7 instanceof Object ? var7 : var8;
                var1['outboundBandwidthSurplus'] = var7;
                var1['averageEncodeTime'] = var2;
                var1['vmafScoreSum'] = var2;
                var1['vmafScoreNum'] = var2;
                var7 = var6[var3];
                var7 = var4.bind(var5)(var7);
                var7 = var7.Histogram;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var15 = var8;
                var7 = new var15[var7](var14);
                var7 = var7 instanceof Object ? var7 : var8;
                var1['vmafHistogram'] = var7;
                var1['psnrDbSum'] = var2;
                var1['psnrDbNum'] = var2;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.Histogram;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var15 = var4;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['psnrHistogram'] = var3;
                var1['qualityDecodeErrors'] = var2;
                var1['qualityDecoderReboots'] = var2;
                var1['qualityScoreErrors'] = var2;
                var1['qualityFrameDrops'] = var2;
                var1['qualitySizeMismatches'] = var2;
                var1['outboundSinkWantSum'] = var2;
                var1['outboundSinkWantNum'] = var2;
                var2 = null;
                var1['framesDroppedRateLimiter'] = var2;
                var1['framesDroppedEncoderQueue'] = var2;
                var1['framesDroppedCongestionWindow'] = var2;
                var1['framesDroppedEncoder'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot5;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot8;
        var5 = {};
        var6 = 'appendTargetRates';
        var5['key'] = var6;
        var1 = function value(arg1, arg2, arg3, arg4) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = arg1;
                var5 = arg2;
                var8 = arg3;
                var6 = arg4;
                var2 = this;
                var3 = var2.statsWindow;
                var3 = var3.length;
                var9 = 2;
                if(!(!(var3 < var9))) { _fun0016_ip = 159; continue _fun0016 }
case 160:
                var7 = null;
                var10 = var7 != var1;
                var3 = 0;
                if(!var10) { _fun0016_ip = 161; continue _fun0016 }
case 162:
                var3 = var1;
case 161:
                var10 = var7 != var5;
                var1 = 0;
                if(!var10) { _fun0016_ip = 22; continue _fun0016 }
case 163:
                var1 = var5;
case 22:
                var10 = var7 != var8;
                var5 = 0;
                if(!var10) { _fun0016_ip = 5; continue _fun0016 }
case 164:
                var5 = var8;
case 5:
                var7 = var7 != var6;
                var4 = 0;
                if(!var7) { _fun0016_ip = 156; continue _fun0016 }
case 165:
                var4 = var6;
case 156:
                var7 = var2.statsWindow;
                var6 = var2.statsWindow;
                var8 = var6.length;
                var6 = 1;
                var6 = var8 - var6;
                var6 = var7[var6];
                var7 = var6.timestamp;
                var8 = var2.statsWindow;
                var6 = var2.statsWindow;
                var6 = var6.length;
                var6 = var6 - var9;
                var6 = var8[var6];
                var6 = var6.timestamp;
                var7 = var7 - var6;
                var6 = 1000;
                var6 = var7 / var6;
                var7 = var2.targetFrames;
                var3 = var3 * var6;
                var3 = var7 + var3;
                var2['targetFrames'] = var3;
                var8 = var2.targetBytesNetwork;
                var3 = 8;
                var7 = var1 / var3;
                var7 = var7 * var6;
                var7 = var8 + var7;
                var2['targetBytesNetwork'] = var7;
                var7 = var2.targetBytesMax;
                var5 = var5 / var3;
                var5 = var5 * var6;
                var5 = var7 + var5;
                var2['targetBytesMax'] = var5;
                var5 = var2.outboundBytesAvailable;
                var3 = var4 / var3;
                var3 = var3 * var6;
                var3 = var5 + var3;
                var2['outboundBytesAvailable'] = var3;
                var5 = var2.targetBitrateHistogram;
                var3 = var5.addSample;
                var3 = var3.bind(var5)(var1);
                var3 = var2.outboundBandwidthSurplus;
                var2 = var3.addSample;
                var1 = var4 - var1;
                var1 = var2.bind(var3)(var1);
case 159:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var13 = 9;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'lib/VideoQualityStats.tsx';
    var13 = var14.bind(var15)(var13);
    var3['CodecTypes'] = var12;
    var3['Encoders'] = var11;
    var3['Decoders'] = var10;
    var3['VideoStoppedReasons'] = var9;
    var3['parseEncoder'] = var8;
    var3['parseDecoder'] = var7;
    var3['parseCodecType'] = var6;
    var3['RawVideoStats'] = var5;
    var3['InboundStats'] = var4;
    var3['OutboundStats'] = var2;
    return var1;
})();