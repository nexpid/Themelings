// discord_common/js/packages/media-engine/native/transformStats.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function convertAudioLevel(arg1) {
        var2 = arg1;
        var1 = 32768;
        var1 = var2 / var1;
        return var1;
    };
    var _closure1_slot2 = var1;
    var1 = function sumBytes(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = null;
            var2 = var5 == var6;
            var1 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var6.headerBytes;
case 2:
            var4 = var5 != var1;
            var2 = 0;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1;
case 4:
            var1 = var5 == var6;
            var4 = undefined;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var6.payloadBytes;
case 6:
            var7 = var5 != var4;
            var1 = 0;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var4;
case 8:
            var2 = var2 + var1;
            var1 = var5 == var6;
            var4 = undefined;
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var6.paddingBytes;
case 10:
            var7 = var5 != var4;
            var1 = 0;
            if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var4;
case 12:
            var2 = var2 + var1;
            var4 = var5 == var6;
            var1 = undefined;
            if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var6.fec;
            var7 = var5 == var4;
            var1 = undefined;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var1 = var4.headerBytes;
case 14:
            var7 = var5 != var1;
            var4 = 0;
            if(!var7) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var4 = var1;
case 17:
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = var6.fec;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var7 = var1.payloadBytes;
case 19:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = var7;
case 22:
            var4 = var4 + var1;
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var1 = var6.fec;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var7 = var1.paddingBytes;
case 24:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var1 = var7;
case 27:
            var4 = var4 + var1;
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var1 = var6.retransmitted;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var7 = var1.headerBytes;
case 29:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var1 = var7;
case 32:
            var4 = var4 + var1;
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var1 = var6.retransmitted;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 34; continue _fun0001 }
case 36:
            var7 = var1.payloadBytes;
case 34:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var1 = var7;
case 37:
            var4 = var4 + var1;
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var1 = var6.retransmitted;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 39; continue _fun0001 }
case 41:
            var7 = var1.paddingBytes;
case 39:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var1 = var7;
case 42:
            var4 = var4 + var1;
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var1 = var6.transmitted;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 44; continue _fun0001 }
case 46:
            var7 = var1.headerBytes;
case 44:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var1 = var7;
case 47:
            var4 = var4 + var1;
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var1 = var6.transmitted;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 49; continue _fun0001 }
case 51:
            var7 = var1.payloadBytes;
case 49:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var1 = var7;
case 52:
            var1 = var4 + var1;
            var7 = var5 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var6 = var6.transmitted;
            var7 = var5 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 54; continue _fun0001 }
case 56:
            var4 = var6.paddingBytes;
case 54:
            var5 = var5 != var4;
            var3 = 0;
            if(!var5) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var3 = var4;
case 57:
            var1 = var1 + var3;
            var1 = var1 + var2;
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = function sumPackets(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var5 = null;
            var2 = var5 == var6;
            var1 = undefined;
            if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = var6.packets;
case 2:
            var4 = var5 != var1;
            var2 = 0;
            if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = var1;
case 4:
            var4 = var5 == var6;
            var1 = undefined;
            if(var4) { _fun0002_ip = 59; continue _fun0002 }
case 7:
            var4 = var6.fec;
            var7 = var5 == var4;
            var1 = undefined;
            if(var7) { _fun0002_ip = 59; continue _fun0002 }
case 9:
            var1 = var4.packets;
case 59:
            var7 = var5 != var1;
            var4 = 0;
            if(!var7) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var4 = var1;
case 60:
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var1 = var6.retransmitted;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0002_ip = 62; continue _fun0002 }
case 64:
            var7 = var1.packets;
case 62:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var1 = var7;
case 65:
            var1 = var4 + var1;
            var7 = var5 == var6;
            var4 = undefined;
            if(var7) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var6 = var6.transmitted;
            var7 = var5 == var6;
            var4 = undefined;
            if(var7) { _fun0002_ip = 67; continue _fun0002 }
case 69:
            var4 = var6.packets;
case 67:
            var5 = var5 != var4;
            var3 = 0;
            if(!var5) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var3 = var4;
case 70:
            var1 = var1 + var3;
            var1 = var1 + var2;
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function transformPlayoutStats(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var10 = arg1;
            var1 = {};
            var8 = var10;
            var4 = global;
            var3 = 1000;
            var2 = null;
            for(var5 in var8)
case 5:
            {
case 7:
                var12 = var5;
                var14 = var10[var12];
                var13 = var2 != var14;
                var11 = null;
                if(!var13) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                var13 = {};
                var17 = var4.Math;
                var16 = var17.round;
                var15 = var14.last;
                var15 = var3 * var15;
                var15 = var16.bind(var17)(var15);
                var13['last'] = var15;
                var17 = var4.Math;
                var16 = var17.round;
                var15 = var14.mean;
                var15 = var3 * var15;
                var15 = var16.bind(var17)(var15);
                var13['mean'] = var15;
                var17 = var4.Math;
                var16 = var17.round;
                var15 = var14.p75;
                var15 = var3 * var15;
                var15 = var16.bind(var17)(var15);
                var13['p75'] = var15;
                var17 = var4.Math;
                var16 = var17.round;
                var15 = var14.p95;
                var15 = var3 * var15;
                var15 = var16.bind(var17)(var15);
                var13['p95'] = var15;
                var17 = var4.Math;
                var16 = var17.round;
                var15 = var14.p99;
                var15 = var3 * var15;
                var15 = var16.bind(var17)(var15);
                var13['p99'] = var15;
                var16 = var4.Math;
                var15 = var16.round;
                var14 = var14.max;
                var14 = var3 * var14;
                var14 = var15.bind(var16)(var14);
                var13['max'] = var14;
                var11 = var13;
case 72:
                var1[var12] = var11;
                _fun0003_ip = 5; continue _fun0003;
            }
case 29:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function transformOutboundVideoStats(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var12 = arg2;
            var4 = var5.substreams;
            var3 = var4.find;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.isRTX;
                    var1 = !var1;
                    if(!var1) { _fun0005_ip = 74; continue _fun0005 }
case 75:
                    var2 = var2.isFlexFEC;
                    var1 = !var2;
case 74:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var4 = null;
            if(!(var4 == var3)) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var2 = undefined;
            return var2;
case 76:
            var8 = var5.substreams;
            var7 = var8.reduce;
            var2 = function(arg1, arg2) {
                var3 = _closure1_slot3;
                var1 = arg2;
                var2 = var1.rtpStats;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = arg1;
                var1 = var1 + var2;
                return var1;
            };
            var6 = 0;
            var8 = var7.bind(var8)(var2, var6);
            var7 = var5.substreams;
            var2 = var7.reduce;
            var1 = function(arg1, arg2) {
                var3 = _closure1_slot4;
                var1 = arg2;
                var2 = var1.rtpStats;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = arg1;
                var1 = var1 + var2;
                return var1;
            };
            var7 = var2.bind(var7)(var1, var6);
            var1 = {};
            var2 = 'video';
            var1['type'] = var2;
            var2 = var3.ssrc;
            var1['ssrc'] = var2;
            var10 = _closure1_slot0;
            var9 = _closure1_slot1;
            var11 = var9[var6];
            var2 = undefined;
            var15 = var10.bind(var2)(var11);
            var14 = var15.formatSinkWantStat;
            var13 = var3.ssrc;
            var11 = true;
            var11 = var14.bind(var15)(var12, var13, var11);
            var1['sinkWant'] = var11;
            var9 = var9[var6];
            var11 = var10.bind(var2)(var9);
            var10 = var11.formatSinkWantAsInt;
            var9 = var3.ssrc;
            var9 = var10.bind(var11)(var12, var9);
            var1['sinkWantAsInt'] = var9;
            var9 = {};
            var10 = var5.codecPayloadType;
            var9['id'] = var10;
            var10 = var5.codecName;
            var9['name'] = var10;
            var1['codec'] = var9;
            var9 = var5.keyFrameInterval;
            var1['keyFrameInterval'] = var9;
            var1['bytesSent'] = var8;
            var1['packetsSent'] = var7;
            var7 = var3.rtcpStats;
            var9 = var4 == var7;
            var8 = undefined;
            if(var9) { _fun0004_ip = 29; continue _fun0004 }
case 31:
            var8 = var7.packetsLost;
case 29:
            var9 = var4 != var8;
            var7 = 0;
            if(!var9) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var7 = var8;
case 32:
            var1['packetsLost'] = var7;
            var7 = var3.rtcpStats;
            var9 = var4 == var7;
            var8 = undefined;
            if(var9) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var8 = var7.fractionLost;
case 78:
            var9 = var4 != var8;
            var7 = 0;
            if(!var9) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var7 = var8;
case 80:
            var1['fractionLost'] = var7;
            var7 = var5.mediaBitrate;
            var1['bitrate'] = var7;
            var7 = var5.targetMediaBitrate;
            var1['bitrateTarget'] = var7;
            var7 = var5.encoderImplementationName;
            var1['encoderImplementationName'] = var7;
            var7 = var5.encodeUsage;
            var1['encodeUsage'] = var7;
            var7 = var5.avgEncodeTime;
            var1['averageEncodeTime'] = var7;
            var7 = {};
            var8 = var3.height;
            var7['height'] = var8;
            var8 = var3.width;
            var7['width'] = var8;
            var1['resolution'] = var7;
            var7 = var3.frameCounts;
            var8 = var7.keyFrames;
            var7 = var3.frameCounts;
            var7 = var7.deltaFrames;
            var7 = var8 + var7;
            var1['framesSent'] = var7;
            var7 = var3.frameCounts;
            var7 = var7.keyFrames;
            var1['keyFramesEncoded'] = var7;
            var7 = var5.framesEncoded;
            var1['framesEncoded'] = var7;
            var7 = var5.inputFrameRate;
            var1['frameRateInput'] = var7;
            var7 = var5.encodeFrameRate;
            var1['frameRateEncode'] = var7;
            var7 = var3.rtcpStats;
            var9 = var4 == var7;
            var8 = undefined;
            if(var9) { _fun0004_ip = 82; continue _fun0004 }
case 58:
            var8 = var7.firPackets;
case 82:
            var9 = var4 != var8;
            var7 = 0;
            if(!var9) { _fun0004_ip = 83; continue _fun0004 }
case 84:
            var7 = var8;
case 83:
            var1['firCount'] = var7;
            var7 = var3.rtcpStats;
            var9 = var4 == var7;
            var8 = undefined;
            if(var9) { _fun0004_ip = 85; continue _fun0004 }
case 86:
            var8 = var7.nackPackets;
case 85:
            var9 = var4 != var8;
            var7 = 0;
            if(!var9) { _fun0004_ip = 87; continue _fun0004 }
case 88:
            var7 = var8;
case 87:
            var1['nackCount'] = var7;
            var8 = var3.rtcpStats;
            var9 = var4 == var8;
            var7 = undefined;
            if(var9) { _fun0004_ip = 89; continue _fun0004 }
case 90:
            var7 = var8.pliPackets;
case 89:
            var8 = var4 != var7;
            var6 = 0;
            if(!var8) { _fun0004_ip = 91; continue _fun0004 }
case 92:
            var6 = var7;
case 91:
            var1['pliCount'] = var6;
            var6 = var5.qpSum;
            var1['qpSum'] = var6;
            var6 = var5.bwLimitedResolution;
            var1['bandwidthLimitedResolution'] = var6;
            var6 = var5.framesDroppedRateLimiter;
            var1['framesDroppedRateLimiter'] = var6;
            var6 = var5.framesDroppedEncoderQueue;
            var1['framesDroppedEncoderQueue'] = var6;
            var6 = var5.framesDroppedCongestionWindow;
            var1['framesDroppedCongestionWindow'] = var6;
            var6 = var5.framesDroppedEncoder;
            var1['framesDroppedEncoder'] = var6;
            var6 = var5.cpuLimitedResolution;
            var1['cpuLimitedResolution'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 93; continue _fun0004 }
case 94:
            var7 = var6.imageQualityVmaf_v061;
case 93:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 95; continue _fun0004 }
case 96:
            var6 = var7;
case 95:
            var1['encoderQualityVmaf'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 97; continue _fun0004 }
case 98:
            var7 = var6.imageQualityWebrtcPsnrDb;
case 97:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 99; continue _fun0004 }
case 100:
            var6 = var7;
case 99:
            var1['encoderQualityPsnr'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 101; continue _fun0004 }
case 102:
            var7 = var6.decodeErrors;
case 101:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 103; continue _fun0004 }
case 104:
            var6 = var7;
case 103:
            var1['qualityDecodeErrors'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 105; continue _fun0004 }
case 106:
            var7 = var6.decoderReboots;
case 105:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 107; continue _fun0004 }
case 108:
            var6 = var7;
case 107:
            var1['qualityDecoderReboots'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 109; continue _fun0004 }
case 110:
            var7 = var6.scoreErrors;
case 109:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 111; continue _fun0004 }
case 112:
            var6 = var7;
case 111:
            var1['qualityScoreErrors'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 113; continue _fun0004 }
case 114:
            var7 = var6.frameDrops;
case 113:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 115; continue _fun0004 }
case 116:
            var6 = var7;
case 115:
            var1['qualityFrameDrops'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 117; continue _fun0004 }
case 118:
            var7 = var6.sizeMismatches;
case 117:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 119; continue _fun0004 }
case 120:
            var6 = var7;
case 119:
            var1['qualitySizeMismatches'] = var6;
            var6 = var5.filter;
            var1['filter'] = var6;
            var6 = var5.passthroughCount;
            var1['passthroughCount'] = var6;
            var6 = var5.encryptSuccessCount;
            var1['encryptSuccessCount'] = var6;
            var6 = var5.encryptFailureCount;
            var1['encryptFailureCount'] = var6;
            var6 = var5.encryptDuration;
            var1['encryptDuration'] = var6;
            var6 = var5.encryptAttempts;
            var1['encryptAttempts'] = var6;
            var6 = var5.encryptMaxAttempts;
            var1['encryptMaxAttempts'] = var6;
            var6 = var5.encryptMissingKeyCount;
            var1['encryptMissingKeyCount'] = var6;
            var6 = var5.hqSimulcastStreamEncoded;
            var1['hqSimulcastStreamEncoded'] = var6;
            var6 = var5.lqSimulcastStreamEncoded;
            var1['lqSimulcastStreamEncoded'] = var6;
            var5 = var5.bwLimitedFrameRate;
            var1['bandwidthLimitedFrameRate'] = var5;
            var6 = var3.encoderQualityStats;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0004_ip = 121; continue _fun0004 }
case 122:
            var5 = var6.freezeCount;
case 121:
            var1['freezeCount'] = var5;
            var6 = var3.encoderQualityStats;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0004_ip = 123; continue _fun0004 }
case 124:
            var5 = var6.totalFreezesDuration;
case 123:
            var1['totalFreezesDuration'] = var5;
            var6 = var3.encoderQualityStats;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0004_ip = 125; continue _fun0004 }
case 126:
            var5 = var6.totalFramesDuration;
case 125:
            var1['totalFramesDuration'] = var5;
            var3 = var3.encoderQualityStats;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0004_ip = 127; continue _fun0004 }
case 128:
            var2 = var3.interFrameEntropy;
case 127:
            var1['videoEntropy'] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function transformInboundVideoStats(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var16 = arg2;
            var12 = arg3;
            var6 = arg4;
            var2 = _closure1_slot3;
            var1 = var4.rtpStats;
            var5 = undefined;
            var8 = var2.bind(var5)(var1);
            var2 = _closure1_slot4;
            var1 = var4.rtpStats;
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var7 = 'video';
            var1['type'] = var7;
            var7 = var4.ssrc;
            var1['ssrc'] = var7;
            var10 = _closure1_slot0;
            var9 = _closure1_slot1;
            var7 = 0;
            var11 = var9[var7];
            var14 = var10.bind(var5)(var11);
            var13 = var14.formatSinkWantStat;
            var11 = var4.ssrc;
            var15 = true;
            var11 = var13.bind(var14)(var16, var11, var15);
            var1['sinkWant'] = var11;
            var11 = var9[var7];
            var14 = var10.bind(var5)(var11);
            var13 = var14.formatSinkWantAsInt;
            var11 = var4.ssrc;
            var11 = var13.bind(var14)(var16, var11);
            var1['sinkWantAsInt'] = var11;
            var11 = var9[var7];
            var14 = var10.bind(var5)(var11);
            var13 = var14.formatSinkWantStat;
            var11 = var4.ssrc;
            var11 = var13.bind(var14)(var12, var11, var15);
            var1['sinkWantLocal'] = var11;
            var9 = var9[var7];
            var11 = var10.bind(var5)(var9);
            var10 = var11.formatSinkWantAsInt;
            var9 = var4.ssrc;
            var9 = var10.bind(var11)(var12, var9);
            var1['sinkWantLocalAsInt'] = var9;
            var9 = {};
            var10 = var4.codecPayloadType;
            var9['id'] = var10;
            var10 = var4.codecName;
            var9['name'] = var10;
            var1['codec'] = var9;
            var1['bytesReceived'] = var8;
            var1['packetsReceived'] = var2;
            var2 = var4.rtpStats;
            var8 = var2.packetsLost;
            var2 = null;
            if(!(var2 == var8)) { _fun0006_ip = 129; continue _fun0006 }
case 33:
            var9 = var4.rtcpStats;
            var8 = var9.packetsLost;
case 129:
            var1['packetsLost'] = var8;
            var8 = var4.rtcpStats;
            var8 = var8.fractionLost;
            var1['fractionLost'] = var8;
            var8 = var4.totalBitrate;
            var1['bitrate'] = var8;
            var8 = var4.jitterBuffer;
            var1['jitterBuffer'] = var8;
            var8 = var4.currentDelay;
            var1['currentDelay'] = var8;
            var8 = var4.targetDelay;
            var1['targetDelay'] = var8;
            var8 = var4.minPlayoutDelay;
            var1['minPlayoutDelay'] = var8;
            var8 = var4.renderDelay;
            var1['renderDelay'] = var8;
            var8 = var4.decode;
            var1['averageDecodeTime'] = var8;
            var8 = {};
            var9 = var4.height;
            var8['height'] = var9;
            var9 = var4.width;
            var8['width'] = var9;
            var1['resolution'] = var8;
            var8 = var4.decoderImplementationName;
            var1['decoderImplementationName'] = var8;
            var8 = var4.framesDecoded;
            var1['framesDecoded'] = var8;
            var8 = var4.framesDropped;
            var1['framesDropped'] = var8;
            var8 = var4.framesDecodeErrors;
            var1['framesDecodeErrors'] = var8;
            var8 = var4.frameCounts;
            var9 = var8.keyFrames;
            var8 = var4.frameCounts;
            var8 = var8.deltaFrames;
            var8 = var9 + var8;
            var1['framesReceived'] = var8;
            var8 = var4.networkFramesDropped;
            var9 = var2 != var8;
            var7 = 0;
            if(!var9) { _fun0006_ip = 130; continue _fun0006 }
case 131:
            var7 = var8;
case 130:
            var1['networkFramesDropped'] = var7;
            var7 = var4.frameCounts;
            var7 = var7.keyFrames;
            var1['keyFramesDecoded'] = var7;
            var7 = var4.decodeFrameRate;
            var1['frameRateDecode'] = var7;
            var7 = var4.networkFrameRate;
            var1['frameRateNetwork'] = var7;
            var7 = var4.renderFrameRate;
            var1['frameRateRender'] = var7;
            var7 = var4.rtcpStats;
            var7 = var7.firPackets;
            var1['firCount'] = var7;
            var7 = var4.rtcpStats;
            var7 = var7.nackPackets;
            var1['nackCount'] = var7;
            var7 = var4.rtcpStats;
            var7 = var7.pliPackets;
            var1['pliCount'] = var7;
            var7 = var4.qpSum;
            var1['qpSum'] = var7;
            var7 = var4.freezeCount;
            var1['freezeCount'] = var7;
            var7 = var4.pauseCount;
            var1['pauseCount'] = var7;
            var7 = var4.totalFreezesDuration;
            var1['totalFreezesDuration'] = var7;
            var7 = var4.totalPausesDuration;
            var1['totalPausesDuration'] = var7;
            var7 = var4.totalFramesDuration;
            var1['totalFramesDuration'] = var7;
            var7 = var4.sumOfSquaredFramesDurations;
            var1['sumOfSquaredFramesDurations'] = var7;
            var7 = var4.passthroughCount;
            var1['passthroughCount'] = var7;
            var7 = var4.decryptSuccessCount;
            var1['decryptSuccessCount'] = var7;
            var7 = var4.decryptFailureCount;
            var1['decryptFailureCount'] = var7;
            var7 = var4.decryptDuration;
            var1['decryptDuration'] = var7;
            var7 = var4.decryptAttempts;
            var1['decryptAttempts'] = var7;
            var7 = var4.decryptMissingKeyCount;
            var1['decryptMissingKeyCount'] = var7;
            var4 = var4.decryptInvalidNonceCount;
            var1['decryptInvalidNonceCount'] = var4;
            if(!(var2 == var6)) { _fun0006_ip = 132; continue _fun0006 }
case 133:
            var2 = {};
            _fun0006_ip = 134; continue _fun0006;
case 132:
            var4 = _closure1_slot5;
            var3 = {};
            var7 = var6.videoJitterBuffer;
            var3['videoJitterBuffer'] = var7;
            var7 = var6.videoJitterDelay;
            var3['videoJitterDelay'] = var7;
            var6 = var6.videoJitterTarget;
            var3['videoJitterTarget'] = var6;
            var2 = var4.bind(var5)(var3);
case 134:
            var19 = var1;
            var18 = var2;
            var2 = copyDataProperties(var19, var18);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/native/transformStats.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transformStats(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg2;
            var9 = arg3;
            var _closure2_slot0 = var9;
            var1 = arg4;
            var _closure2_slot1 = var1;
            var6 = null;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var3 = 'string';
            var2 = typeof var4;
            var1 = var4;
            if(!(var3 === var2)) { _fun0007_ip = 59; continue _fun0007 }
case 135:
            var2 = global;
            var3 = var2.JSON;
            var2 = var3.parse;
            var1 = var2.bind(var3)(var4);
case 59:
            var3 = new Array(0);
            var _closure2_slot4 = var3;
            var2 = var1.outbound;
            if(!(var6 != var2)) { _fun0007_ip = 136; continue _fun0007 }
case 63:
            var2 = var1.outbound;
            var10 = var2.audio;
            var7 = var2.video;
            var5 = var2.videos;
            if(!(var6 != var10)) { _fun0007_ip = 90; continue _fun0007 }
case 137:
            var2 = _closure2_slot3;
            var2 = var6 != var2;
            var16 = 0;
            var4 = 0;
            if(!var2) { _fun0007_ip = 18; continue _fun0007 }
case 68:
            var4 = _closure2_slot3;
case 18:
            var2 = var10.bytesSent;
            var2 = var4 + var2;
            _closure2_slot3 = var2;
            var4 = var3.push;
            var2 = {};
            var11 = 'audio';
            var2['type'] = var11;
            var11 = var10.ssrc;
            var2['ssrc'] = var11;
            var14 = _closure1_slot0;
            var12 = _closure1_slot1;
            var15 = var12[var16];
            var13 = undefined;
            var19 = var14.bind(var13)(var15);
            var18 = var19.formatSinkWantStat;
            var17 = var10.ssrc;
            var15 = false;
            var15 = var18.bind(var19)(var9, var17, var15);
            var2['sinkWant'] = var15;
            var12 = var12[var16];
            var15 = var14.bind(var13)(var12);
            var14 = var15.formatSinkWantAsInt;
            var12 = var10.ssrc;
            var12 = var14.bind(var15)(var9, var12);
            var2['sinkWantAsInt'] = var12;
            var12 = {};
            var14 = var10.codecPayloadType;
            var12['id'] = var14;
            var14 = var10.codecName;
            var12['name'] = var14;
            var2['codec'] = var12;
            var12 = var10.bytesSent;
            var2['bytesSent'] = var12;
            var12 = var10.packetsSent;
            var2['packetsSent'] = var12;
            var12 = global;
            var15 = var12.Math;
            var14 = var15.max;
            var12 = var10.packetsLost;
            var12 = var14.bind(var15)(var16, var12);
            var2['packetsLost'] = var12;
            var14 = var10.fractionLost;
            var12 = 100;
            var12 = var12 * var14;
            var2['fractionLost'] = var12;
            var12 = _closure1_slot2;
            var11 = var10.audioLevel;
            var11 = var12.bind(var13)(var11);
            var2['audioLevel'] = var11;
            var11 = var10.mediaBitrate;
            var2['bitrate'] = var11;
            var11 = var10.targetMediaBitrate;
            var2['bitrateTarget'] = var11;
            var11 = var10.speaking;
            var2['audioDetected'] = var11;
            var11 = var10.framesCaptured;
            var2['framesCaptured'] = var11;
            var11 = var10.framesRendered;
            var2['framesRendered'] = var11;
            var11 = var10.noiseCancellerFrames;
            var2['noiseCancellerFrames'] = var11;
            var11 = var10.noiseCancellerProcessTime;
            var2['noiseCancellerProcessTime'] = var11;
            var11 = var10.voiceActivityDetectorProcessTime;
            var2['voiceActivityDetectorProcessTime'] = var11;
            var11 = var10.passthroughCount;
            var2['passthroughCount'] = var11;
            var11 = var10.encryptSuccessCount;
            var2['encryptSuccessCount'] = var11;
            var11 = var10.encryptFailureCount;
            var2['encryptFailureCount'] = var11;
            var11 = var10.encryptDuration;
            var2['encryptDuration'] = var11;
            var11 = var10.encryptAttempts;
            var2['encryptAttempts'] = var11;
            var11 = var10.encryptMaxAttempts;
            var2['encryptMaxAttempts'] = var11;
            var11 = var10.encryptMissingKeyCount;
            var2['encryptMissingKeyCount'] = var11;
            var11 = var10.pttQueueLatencyMicrosSamples;
            var2['pttQueueLatencyMicrosSamples'] = var11;
            var11 = var10.sampleRateMismatchPercent;
            var2['sampleRateMismatchPercent'] = var11;
            var10 = var10.currentSampleRate;
            var2['currentSampleRate'] = var10;
            var2 = var4.bind(var3)(var2);
case 90:
            if(!(var6 == var5)) { _fun0007_ip = 138; continue _fun0007 }
case 139:
            if(!(var6 != var7)) { _fun0007_ip = 136; continue _fun0007 }
case 140:
            var4 = _closure1_slot6;
            var2 = undefined;
            var4 = var4.bind(var2)(var7, var9);
            if(!(var6 != var4)) { _fun0007_ip = 136; continue _fun0007 }
case 141:
            var2 = _closure2_slot3;
            var2 = var6 != var2;
            var7 = 0;
            if(!var2) { _fun0007_ip = 142; continue _fun0007 }
case 143:
            var7 = _closure2_slot3;
case 142:
            var2 = var4.bytesSent;
            var2 = var7 + var2;
            _closure2_slot3 = var2;
            var2 = var3.push;
            var2 = var2.bind(var3)(var4);
            _fun0007_ip = 136; continue _fun0007;
case 138:
            var4 = var5.forEach;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var1 = undefined;
                    var3 = arg1;
                    var4 = var5.bind(var1)(var3, var4);
                    var5 = null;
                    if(!(var5 != var4)) { _fun0008_ip = 144; continue _fun0008 }
case 145:
                    var3 = _closure2_slot3;
                    var3 = var5 != var3;
                    var5 = 0;
                    if(!var3) { _fun0008_ip = 146; continue _fun0008 }
case 147:
                    var5 = _closure2_slot3;
case 146:
                    var3 = var4.bytesSent;
                    var3 = var5 + var3;
                    _closure2_slot3 = var3;
                    var3 = _closure2_slot4;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
case 144:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
case 136:
            var4 = {};
            var _closure2_slot5 = var4;
            var2 = var1.inbound;
            if(!(var6 != var2)) { _fun0007_ip = 148; continue _fun0007 }
case 149:
            var7 = var1.inbound;
            var5 = var7.forEach;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.id;
                    var _closure3_slot0 = var4;
                    var10 = var2.audio;
                    var6 = var2.video;
                    var3 = var2.videos;
                    var12 = var2.playout;
                    var _closure3_slot1 = var12;
                    var7 = _closure2_slot5;
                    var5 = new Array(0);
                    var7[var4] = var5;
                    var8 = null;
                    if(!(var8 != var10)) { _fun0009_ip = 150; continue _fun0009 }
case 151:
                    var5 = _closure2_slot2;
                    var5 = var8 != var5;
                    var16 = 0;
                    var7 = 0;
                    if(!var5) { _fun0009_ip = 13; continue _fun0009 }
case 63:
                    var7 = _closure2_slot2;
case 13:
                    var5 = var10.bytesReceived;
                    var5 = var7 + var5;
                    _closure2_slot2 = var5;
                    var5 = _closure2_slot5;
                    var9 = var5[var4];
                    var7 = var9.push;
                    var5 = {};
                    var11 = 'audio';
                    var5['type'] = var11;
                    var11 = var10.ssrc;
                    var5['ssrc'] = var11;
                    var15 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var17 = var13[var16];
                    var14 = undefined;
                    var21 = var15.bind(var14)(var17);
                    var20 = var21.formatSinkWantStat;
                    var17 = _closure2_slot0;
                    var19 = var10.ssrc;
                    var18 = false;
                    var18 = var20.bind(var21)(var17, var19, var18);
                    var5['sinkWant'] = var18;
                    var13 = var13[var16];
                    var16 = var15.bind(var14)(var13);
                    var15 = var16.formatSinkWantAsInt;
                    var13 = var10.ssrc;
                    var13 = var15.bind(var16)(var17, var13);
                    var5['sinkWantAsInt'] = var13;
                    var13 = {};
                    var15 = var10.codecPayloadType;
                    var13['id'] = var15;
                    var15 = var10.codecName;
                    var13['name'] = var15;
                    var5['codec'] = var13;
                    var13 = var10.bytesReceived;
                    var5['bytesReceived'] = var13;
                    var13 = var10.packetsReceived;
                    var5['packetsReceived'] = var13;
                    var13 = var10.packetsLost;
                    var5['packetsLost'] = var13;
                    var13 = var10.fractionLost;
                    var15 = 100;
                    var13 = var15 * var13;
                    var5['fractionLost'] = var13;
                    var13 = var10.fecPacketsReceived;
                    var5['fecPacketsReceived'] = var13;
                    var13 = var10.fecPacketsDiscarded;
                    var5['fecPacketsDiscarded'] = var13;
                    var16 = _closure1_slot2;
                    var13 = var10.audioLevel;
                    var13 = var16.bind(var14)(var13);
                    var5['audioLevel'] = var13;
                    var13 = var10.speaking;
                    var5['audioDetected'] = var13;
                    var13 = var10.currentSampleRate;
                    var5['currentSampleRate'] = var13;
                    var13 = var10.jitter;
                    var5['jitter'] = var13;
                    var13 = var10.jitterBuffer;
                    var5['jitterBuffer'] = var13;
                    var13 = var10.jitterBufferPreferred;
                    var5['jitterBufferPreferred'] = var13;
                    var13 = var10.decodingCNG;
                    var5['decodingCNG'] = var13;
                    var13 = var10.decodingMutedOutput;
                    var5['decodingMutedOutput'] = var13;
                    var13 = var10.decodingNormal;
                    var5['decodingNormal'] = var13;
                    var13 = var10.decodingPLC;
                    var5['decodingPLC'] = var13;
                    var13 = var10.decodingPLCCNG;
                    var5['decodingPLCCNG'] = var13;
                    var13 = var10.nackCount;
                    var5['nackCount'] = var13;
                    var13 = var10.accelerateRate;
                    var13 = var15 * var13;
                    var5['accelerateRate'] = var13;
                    var13 = var10.expandRate;
                    var13 = var15 * var13;
                    var5['expandRate'] = var13;
                    var13 = var10.preemptiveExpandRate;
                    var13 = var15 * var13;
                    var5['preemptiveExpandRate'] = var13;
                    var13 = var10.speechExpandRate;
                    var13 = var15 * var13;
                    var5['speechExpandRate'] = var13;
                    var13 = var10.secondaryDecodedRate;
                    var13 = var15 * var13;
                    var5['secondaryDecodedRate'] = var13;
                    var13 = var10.opSilence;
                    var5['opSilence'] = var13;
                    var13 = var10.opNormal;
                    var5['opNormal'] = var13;
                    var13 = var10.opMerge;
                    var5['opMerge'] = var13;
                    var13 = var10.opExpand;
                    var5['opExpand'] = var13;
                    var13 = var10.opAccelerate;
                    var5['opAccelerate'] = var13;
                    var13 = var10.opPreemptiveExpand;
                    var5['opPreemptiveExpand'] = var13;
                    var13 = var10.opCNG;
                    var5['opCNG'] = var13;
                    var13 = var10.delayEstimate;
                    var5['delayEstimate'] = var13;
                    var13 = var10.passthroughCount;
                    var5['passthroughCount'] = var13;
                    var13 = var10.decryptSuccessCount;
                    var5['decryptSuccessCount'] = var13;
                    var13 = var10.decryptFailureCount;
                    var5['decryptFailureCount'] = var13;
                    var13 = var10.decryptDuration;
                    var5['decryptDuration'] = var13;
                    var13 = var10.decryptAttempts;
                    var5['decryptAttempts'] = var13;
                    var13 = var10.decryptMissingKeyCount;
                    var5['decryptMissingKeyCount'] = var13;
                    var10 = var10.decryptInvalidNonceCount;
                    var5['decryptInvalidNonceCount'] = var10;
                    if(!(var8 == var12)) { _fun0009_ip = 152; continue _fun0009 }
case 153:
                    var10 = {};
                    _fun0009_ip = 154; continue _fun0009;
case 152:
                    var13 = _closure1_slot5;
                    var11 = {};
                    var15 = var12.audioJitterBuffer;
                    var11['audioJitterBuffer'] = var15;
                    var15 = var12.audioJitterDelay;
                    var11['audioJitterDelay'] = var15;
                    var15 = var12.audioJitterTarget;
                    var11['audioJitterTarget'] = var15;
                    var15 = var12.audioPlayoutUnderruns;
                    var11['audioPlayoutUnderruns'] = var15;
                    var15 = var12.relativeReceptionDelay;
                    var11['relativeReceptionDelay'] = var15;
                    var15 = var12.relativePlayoutDelay;
                    var11['relativePlayoutDelay'] = var15;
                    var10 = var13.bind(var14)(var11);
case 154:
                    var25 = var5;
                    var24 = var10;
                    var10 = copyDataProperties(var25, var24);
                    var5 = var7.bind(var9)(var5);
case 150:
                    if(!(var8 == var3)) { _fun0009_ip = 155; continue _fun0009 }
case 156:
                    if(!(var8 != var6)) { _fun0009_ip = 157; continue _fun0009 }
case 158:
                    var11 = _closure1_slot7;
                    var24 = _closure2_slot0;
                    var23 = _closure2_slot1;
                    var9 = undefined;
                    var26 = undefined;
                    var25 = var6;
                    var22 = var12;
                    var5 = var26[var11](var25, var24, var23, var22, var21);
                    if(!(var8 != var5)) { _fun0009_ip = 157; continue _fun0009 }
case 159:
                    var7 = _closure1_slot3;
                    var6 = var6.rtpStats;
                    var7 = var7.bind(var9)(var6);
                    var6 = _closure2_slot2;
                    var8 = var8 != var6;
                    var6 = 0;
                    if(!var8) { _fun0009_ip = 160; continue _fun0009 }
case 161:
                    var6 = _closure2_slot2;
case 160:
                    var6 = var6 + var7;
                    _closure2_slot2 = var6;
                    var2 = _closure2_slot5;
                    var4 = var2[var4];
                    var2 = var4.push;
                    var2 = var2.bind(var4)(var5);
                    _fun0009_ip = 157; continue _fun0009;
case 155:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var5 = arg1;
                            var9 = _closure1_slot7;
                            var12 = _closure2_slot0;
                            var11 = _closure2_slot1;
                            var10 = _closure3_slot1;
                            var1 = undefined;
                            var14 = undefined;
                            var13 = var5;
                            var4 = var14[var9](var13, var12, var11, var10, var9);
                            var7 = null;
                            if(!(var7 != var4)) { _fun0010_ip = 162; continue _fun0010 }
case 163:
                            var6 = _closure1_slot3;
                            var5 = var5.rtpStats;
                            var6 = var6.bind(var1)(var5);
                            var5 = _closure2_slot2;
                            var7 = var7 != var5;
                            var5 = 0;
                            if(!var7) { _fun0010_ip = 164; continue _fun0010 }
case 165:
                            var5 = _closure2_slot2;
case 164:
                            var5 = var5 + var6;
                            _closure2_slot2 = var5;
                            var3 = _closure2_slot5;
                            var2 = _closure3_slot0;
                            var3 = var3[var2];
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
case 162:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 157:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2);
case 148:
            var10 = var1.transport;
            var5 = var1.clips;
            var9 = {};
            if(!(var6 != var10)) { _fun0007_ip = 157; continue _fun0007 }
case 166:
            var2 = var10.sendBandwidth;
            var9['availableOutgoingBitrate'] = var2;
            var2 = var10.rtt;
            var9['ping'] = var2;
            var2 = var10.decryptionFailures;
            var9['decryptionFailures'] = var2;
            var2 = var10.routingFailures;
            if(!(var6 != var2)) { _fun0007_ip = 132; continue _fun0007 }
case 167:
            var2 = var10.routingFailures;
            var9['routingFailures'] = var2;
case 132:
            var2 = var10.localAddress;
            var9['localAddress'] = var2;
            var2 = var10.pacerDelay;
            var9['pacerDelay'] = var2;
            var2 = var10.receiverReports;
            if(!(var6 != var2)) { _fun0007_ip = 168; continue _fun0007 }
case 106:
            var2 = var10.receiverReports;
            var9['receiverReports'] = var2;
case 168:
            var2 = var10.receiverBitrateEstimate;
            var9['receiverBitrateEstimate'] = var2;
            var2 = var10.outboundBitrateEstimate;
            var9['outboundBitrateEstimate'] = var2;
            var7 = var10.inboundBitrateEstimate;
            var11 = var6 != var7;
            var2 = 0;
            if(!var11) { _fun0007_ip = 169; continue _fun0007 }
case 170:
            var2 = var7;
case 169:
            var9['inboundBitrateEstimate'] = var2;
            var2 = var10.packetsReceived;
            var9['packetsReceived'] = var2;
            var2 = var10.packetsSent;
            var9['packetsSent'] = var2;
            var2 = var10.secureFramesProtocolVersion;
            if(!(var6 != var2)) { _fun0007_ip = 157; continue _fun0007 }
case 171:
            var2 = var10.secureFramesProtocolVersion;
            var9['secureFramesProtocolVersion'] = var2;
case 157:
            var11 = var6 == var10;
            var7 = undefined;
            if(var11) { _fun0007_ip = 172; continue _fun0007 }
case 173:
            var7 = var10.bytesReceived;
case 172:
            var7 = var6 != var7;
            if(var7) { _fun0007_ip = 174; continue _fun0007 }
case 117:
            var11 = _closure2_slot2;
            var11 = var6 != var11;
            if(!var11) { _fun0007_ip = 175; continue _fun0007 }
case 176:
            var12 = global;
            var14 = var12.Number;
            var13 = var14.isNaN;
            var12 = _closure2_slot2;
            var12 = var13.bind(var14)(var12);
            var11 = !var12;
case 175:
            var7 = var11;
case 174:
            if(!var7) { _fun0007_ip = 177; continue _fun0007 }
case 178:
            var7 = var6 == var10;
            var11 = undefined;
            if(var7) { _fun0007_ip = 179; continue _fun0007 }
case 180:
            var11 = var10.bytesReceived;
case 179:
            if(!(var6 == var11)) { _fun0007_ip = 181; continue _fun0007 }
case 182:
            var11 = _closure2_slot2;
case 181:
            var12 = var6 != var11;
            var7 = undefined;
            if(!var12) { _fun0007_ip = 183; continue _fun0007 }
case 184:
            var7 = var11;
case 183:
            var9['bytesReceived'] = var7;
case 177:
            var11 = var6 == var10;
            var7 = undefined;
            if(var11) { _fun0007_ip = 185; continue _fun0007 }
case 186:
            var7 = var10.bytesSent;
case 185:
            var7 = var6 != var7;
            if(var7) { _fun0007_ip = 187; continue _fun0007 }
case 188:
            var11 = _closure2_slot3;
            var11 = var6 != var11;
            if(!var11) { _fun0007_ip = 189; continue _fun0007 }
case 190:
            var12 = global;
            var14 = var12.Number;
            var13 = var14.isNaN;
            var12 = _closure2_slot3;
            var12 = var13.bind(var14)(var12);
            var11 = !var12;
case 189:
            var7 = var11;
case 187:
            if(!var7) { _fun0007_ip = 191; continue _fun0007 }
case 192:
            var11 = var6 == var10;
            var7 = undefined;
            if(var11) { _fun0007_ip = 193; continue _fun0007 }
case 194:
            var7 = var10.bytesSent;
case 193:
            if(!(var6 == var7)) { _fun0007_ip = 195; continue _fun0007 }
case 196:
            var7 = _closure2_slot3;
case 195:
            var8 = var6 != var7;
            var2 = undefined;
            if(!var8) { _fun0007_ip = 197; continue _fun0007 }
case 198:
            var2 = var7;
case 197:
            var9['bytesSent'] = var2;
case 191:
            var7 = var1.screenshare;
            var8 = var1.camera;
            var2 = var1.audioDevice;
            var1 = {};
            var10 = arg1;
            var1['mediaEngineConnectionId'] = var10;
            var1['transport'] = var9;
            var1['screenshare'] = var7;
            var7 = var6 != var8;
            var6 = null;
            if(!var7) { _fun0007_ip = 199; continue _fun0007 }
case 200:
            var7 = {};
            var9 = var8.capturedFramesDropped;
            var7['capturedFramesDropped'] = var9;
            var9 = var8.capturedFramesCount;
            var7['capturedFramesCount'] = var9;
            var9 = var8.capturedFramesMean;
            var7['capturedFramesMean'] = var9;
            var8 = var8.capturedFramesStdev;
            var7['capturedFramesStdev'] = var8;
            var6 = var7;
case 199:
            var1['camera'] = var6;
            var1['clips'] = var5;
            var1['audioDevice'] = var2;
            var2 = {};
            var2['inbound'] = var4;
            var2['outbound'] = var3;
            var1['rtp'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();