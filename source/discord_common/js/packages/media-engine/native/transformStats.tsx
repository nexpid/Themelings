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
 0:
            var6 = arg1;
            var5 = null;
            var2 = var5 == var6;
            var1 = undefined;
            if(var2) { _fun0001_ip = 20; continue _fun0001 }
 14:
            var1 = var6.headerBytes;
 20:
            var4 = var5 != var1;
            var2 = 0;
            if(!var4) { _fun0001_ip = 32; continue _fun0001 }
 29:
            var2 = var1;
 32:
            var1 = var5 == var6;
            var4 = undefined;
            if(var1) { _fun0001_ip = 47; continue _fun0001 }
 41:
            var4 = var6.payloadBytes;
 47:
            var7 = var5 != var4;
            var1 = 0;
            if(!var7) { _fun0001_ip = 59; continue _fun0001 }
 56:
            var1 = var4;
 59:
            var2 = var2 + var1;
            var1 = var5 == var6;
            var4 = undefined;
            if(var1) { _fun0001_ip = 78; continue _fun0001 }
 72:
            var4 = var6.paddingBytes;
 78:
            var7 = var5 != var4;
            var1 = 0;
            if(!var7) { _fun0001_ip = 90; continue _fun0001 }
 87:
            var1 = var4;
 90:
            var2 = var2 + var1;
            var4 = var5 == var6;
            var1 = undefined;
            if(var4) { _fun0001_ip = 124; continue _fun0001 }
 103:
            var4 = var6.fec;
            var7 = var5 == var4;
            var1 = undefined;
            if(var7) { _fun0001_ip = 124; continue _fun0001 }
 118:
            var1 = var4.headerBytes;
 124:
            var7 = var5 != var1;
            var4 = 0;
            if(!var7) { _fun0001_ip = 136; continue _fun0001 }
 133:
            var4 = var1;
 136:
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 166; continue _fun0001 }
 145:
            var1 = var6.fec;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 166; continue _fun0001 }
 160:
            var7 = var1.payloadBytes;
 166:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 178; continue _fun0001 }
 175:
            var1 = var7;
 178:
            var4 = var4 + var1;
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 212; continue _fun0001 }
 191:
            var1 = var6.fec;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 212; continue _fun0001 }
 206:
            var7 = var1.paddingBytes;
 212:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 224; continue _fun0001 }
 221:
            var1 = var7;
 224:
            var4 = var4 + var1;
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 258; continue _fun0001 }
 237:
            var1 = var6.retransmitted;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 258; continue _fun0001 }
 252:
            var7 = var1.headerBytes;
 258:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 270; continue _fun0001 }
 267:
            var1 = var7;
 270:
            var4 = var4 + var1;
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 304; continue _fun0001 }
 283:
            var1 = var6.retransmitted;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 304; continue _fun0001 }
 298:
            var7 = var1.payloadBytes;
 304:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 316; continue _fun0001 }
 313:
            var1 = var7;
 316:
            var4 = var4 + var1;
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 350; continue _fun0001 }
 329:
            var1 = var6.retransmitted;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 350; continue _fun0001 }
 344:
            var7 = var1.paddingBytes;
 350:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 362; continue _fun0001 }
 359:
            var1 = var7;
 362:
            var4 = var4 + var1;
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 396; continue _fun0001 }
 375:
            var1 = var6.transmitted;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 396; continue _fun0001 }
 390:
            var7 = var1.headerBytes;
 396:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 408; continue _fun0001 }
 405:
            var1 = var7;
 408:
            var4 = var4 + var1;
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0001_ip = 442; continue _fun0001 }
 421:
            var1 = var6.transmitted;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0001_ip = 442; continue _fun0001 }
 436:
            var7 = var1.payloadBytes;
 442:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0001_ip = 454; continue _fun0001 }
 451:
            var1 = var7;
 454:
            var1 = var4 + var1;
            var7 = var5 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 488; continue _fun0001 }
 467:
            var6 = var6.transmitted;
            var7 = var5 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 488; continue _fun0001 }
 482:
            var4 = var6.paddingBytes;
 488:
            var5 = var5 != var4;
            var3 = 0;
            if(!var5) { _fun0001_ip = 500; continue _fun0001 }
 497:
            var3 = var4;
 500:
            var1 = var1 + var3;
            var1 = var1 + var2;
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = function sumPackets(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var5 = null;
            var2 = var5 == var6;
            var1 = undefined;
            if(var2) { _fun0002_ip = 20; continue _fun0002 }
 14:
            var1 = var6.packets;
 20:
            var4 = var5 != var1;
            var2 = 0;
            if(!var4) { _fun0002_ip = 32; continue _fun0002 }
 29:
            var2 = var1;
 32:
            var4 = var5 == var6;
            var1 = undefined;
            if(var4) { _fun0002_ip = 62; continue _fun0002 }
 41:
            var4 = var6.fec;
            var7 = var5 == var4;
            var1 = undefined;
            if(var7) { _fun0002_ip = 62; continue _fun0002 }
 56:
            var1 = var4.packets;
 62:
            var7 = var5 != var1;
            var4 = 0;
            if(!var7) { _fun0002_ip = 74; continue _fun0002 }
 71:
            var4 = var1;
 74:
            var1 = var5 == var6;
            var7 = undefined;
            if(var1) { _fun0002_ip = 104; continue _fun0002 }
 83:
            var1 = var6.retransmitted;
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0002_ip = 104; continue _fun0002 }
 98:
            var7 = var1.packets;
 104:
            var9 = var5 != var7;
            var1 = 0;
            if(!var9) { _fun0002_ip = 116; continue _fun0002 }
 113:
            var1 = var7;
 116:
            var1 = var4 + var1;
            var7 = var5 == var6;
            var4 = undefined;
            if(var7) { _fun0002_ip = 150; continue _fun0002 }
 129:
            var6 = var6.transmitted;
            var7 = var5 == var6;
            var4 = undefined;
            if(var7) { _fun0002_ip = 150; continue _fun0002 }
 144:
            var4 = var6.packets;
 150:
            var5 = var5 != var4;
            var3 = 0;
            if(!var5) { _fun0002_ip = 162; continue _fun0002 }
 159:
            var3 = var4;
 162:
            var1 = var1 + var3;
            var1 = var1 + var2;
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function transformPlayoutStats(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var10 = arg1;
            var1 = {};
            var8 = var10;
            var4 = global;
            var3 = 1000;
            var2 = null;
            for(var5 in var8)
 29:
            {
 41:
                var12 = var5;
                var14 = var10[var12];
                var13 = var2 != var14;
                var11 = null;
                if(!var13) { _fun0003_ip = 249; continue _fun0003 }
 60:
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
 249:
                var1[var12] = var11;
                _fun0003_ip = 29; continue _fun0003;
            }
 258:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function transformOutboundVideoStats(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var12 = arg2;
            var4 = var5.substreams;
            var3 = var4.find;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.isRTX;
                    var1 = !var1;
                    if(!var1) { _fun0005_ip = 28; continue _fun0005 }
 17:
                    var2 = var2.isFlexFEC;
                    var1 = !var2;
 28:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var4 = null;
            if(!(var4 == var3)) { _fun0004_ip = 40; continue _fun0004 }
 36:
            var2 = undefined;
            return var2;
 40:
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
            if(var9) { _fun0004_ip = 258; continue _fun0004 }
 252:
            var8 = var7.packetsLost;
 258:
            var9 = var4 != var8;
            var7 = 0;
            if(!var9) { _fun0004_ip = 270; continue _fun0004 }
 267:
            var7 = var8;
 270:
            var1['packetsLost'] = var7;
            var7 = var3.rtcpStats;
            var9 = var4 == var7;
            var8 = undefined;
            if(var9) { _fun0004_ip = 296; continue _fun0004 }
 290:
            var8 = var7.fractionLost;
 296:
            var9 = var4 != var8;
            var7 = 0;
            if(!var9) { _fun0004_ip = 308; continue _fun0004 }
 305:
            var7 = var8;
 308:
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
            if(var9) { _fun0004_ip = 503; continue _fun0004 }
 497:
            var8 = var7.firPackets;
 503:
            var9 = var4 != var8;
            var7 = 0;
            if(!var9) { _fun0004_ip = 515; continue _fun0004 }
 512:
            var7 = var8;
 515:
            var1['firCount'] = var7;
            var7 = var3.rtcpStats;
            var9 = var4 == var7;
            var8 = undefined;
            if(var9) { _fun0004_ip = 541; continue _fun0004 }
 535:
            var8 = var7.nackPackets;
 541:
            var9 = var4 != var8;
            var7 = 0;
            if(!var9) { _fun0004_ip = 553; continue _fun0004 }
 550:
            var7 = var8;
 553:
            var1['nackCount'] = var7;
            var8 = var3.rtcpStats;
            var9 = var4 == var8;
            var7 = undefined;
            if(var9) { _fun0004_ip = 579; continue _fun0004 }
 573:
            var7 = var8.pliPackets;
 579:
            var8 = var4 != var7;
            var6 = 0;
            if(!var8) { _fun0004_ip = 591; continue _fun0004 }
 588:
            var6 = var7;
 591:
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
            if(var8) { _fun0004_ip = 698; continue _fun0004 }
 690:
            var7 = var6.imageQualityVmaf_v061;
 698:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 710; continue _fun0004 }
 707:
            var6 = var7;
 710:
            var1['encoderQualityVmaf'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 738; continue _fun0004 }
 730:
            var7 = var6.imageQualityWebrtcPsnrDb;
 738:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 750; continue _fun0004 }
 747:
            var6 = var7;
 750:
            var1['encoderQualityPsnr'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 778; continue _fun0004 }
 770:
            var7 = var6.decodeErrors;
 778:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 790; continue _fun0004 }
 787:
            var6 = var7;
 790:
            var1['qualityDecodeErrors'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 818; continue _fun0004 }
 810:
            var7 = var6.decoderReboots;
 818:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 830; continue _fun0004 }
 827:
            var6 = var7;
 830:
            var1['qualityDecoderReboots'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 858; continue _fun0004 }
 850:
            var7 = var6.scoreErrors;
 858:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 870; continue _fun0004 }
 867:
            var6 = var7;
 870:
            var1['qualityScoreErrors'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 898; continue _fun0004 }
 890:
            var7 = var6.frameDrops;
 898:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 910; continue _fun0004 }
 907:
            var6 = var7;
 910:
            var1['qualityFrameDrops'] = var6;
            var6 = var3.encoderQualityStats;
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 938; continue _fun0004 }
 930:
            var7 = var6.sizeMismatches;
 938:
            var8 = var4 != var7;
            var6 = undefined;
            if(!var8) { _fun0004_ip = 950; continue _fun0004 }
 947:
            var6 = var7;
 950:
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
            if(var7) { _fun0004_ip = 1097; continue _fun0004 }
 1091:
            var5 = var6.freezeCount;
 1097:
            var1['freezeCount'] = var5;
            var6 = var3.encoderQualityStats;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0004_ip = 1123; continue _fun0004 }
 1117:
            var5 = var6.totalFreezesDuration;
 1123:
            var1['totalFreezesDuration'] = var5;
            var6 = var3.encoderQualityStats;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0004_ip = 1149; continue _fun0004 }
 1143:
            var5 = var6.totalFramesDuration;
 1149:
            var1['totalFramesDuration'] = var5;
            var3 = var3.encoderQualityStats;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0004_ip = 1177; continue _fun0004 }
 1169:
            var2 = var3.interFrameEntropy;
 1177:
            var1['videoEntropy'] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function transformInboundVideoStats(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
            if(!(var2 == var8)) { _fun0006_ip = 279; continue _fun0006 }
 267:
            var9 = var4.rtcpStats;
            var8 = var9.packetsLost;
 279:
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
            if(!var9) { _fun0006_ip = 502; continue _fun0006 }
 499:
            var7 = var8;
 502:
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
            if(!(var2 == var6)) { _fun0006_ip = 776; continue _fun0006 }
 772:
            var2 = {};
            _fun0006_ip = 820; continue _fun0006;
 776:
            var4 = _closure1_slot5;
            var3 = {};
            var7 = var6.videoJitterBuffer;
            var3['videoJitterBuffer'] = var7;
            var7 = var6.videoJitterDelay;
            var3['videoJitterDelay'] = var7;
            var6 = var6.videoJitterTarget;
            var3['videoJitterTarget'] = var6;
            var2 = var4.bind(var5)(var3);
 820:
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
 0:
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
            if(!(var3 === var2)) { _fun0007_ip = 62; continue _fun0007 }
 43:
            var2 = global;
            var3 = var2.JSON;
            var2 = var3.parse;
            var1 = var2.bind(var3)(var4);
 62:
            var3 = new Array(0);
            var _closure2_slot4 = var3;
            var2 = var1.outbound;
            if(!(var6 != var2)) { _fun0007_ip = 658; continue _fun0007 }
 83:
            var2 = var1.outbound;
            var10 = var2.audio;
            var7 = var2.video;
            var5 = var2.videos;
            if(!(var6 != var10)) { _fun0007_ip = 573; continue _fun0007 }
 114:
            var2 = _closure2_slot3;
            var2 = var6 != var2;
            var16 = 0;
            var4 = 0;
            if(!var2) { _fun0007_ip = 133; continue _fun0007 }
 129:
            var4 = _closure2_slot3;
 133:
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
 573:
            if(!(var6 == var5)) { _fun0007_ip = 643; continue _fun0007 }
 577:
            if(!(var6 != var7)) { _fun0007_ip = 658; continue _fun0007 }
 581:
            var4 = _closure1_slot6;
            var2 = undefined;
            var4 = var4.bind(var2)(var7, var9);
            if(!(var6 != var4)) { _fun0007_ip = 658; continue _fun0007 }
 600:
            var2 = _closure2_slot3;
            var2 = var6 != var2;
            var7 = 0;
            if(!var2) { _fun0007_ip = 617; continue _fun0007 }
 613:
            var7 = _closure2_slot3;
 617:
            var2 = var4.bytesSent;
            var2 = var7 + var2;
            _closure2_slot3 = var2;
            var2 = var3.push;
            var2 = var2.bind(var3)(var4);
            _fun0007_ip = 658; continue _fun0007;
 643:
            var4 = var5.forEach;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var5 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var1 = undefined;
                    var3 = arg1;
                    var4 = var5.bind(var1)(var3, var4);
                    var5 = null;
                    if(!(var5 != var4)) { _fun0008_ip = 76; continue _fun0008 }
 31:
                    var3 = _closure2_slot3;
                    var3 = var5 != var3;
                    var5 = 0;
                    if(!var3) { _fun0008_ip = 48; continue _fun0008 }
 44:
                    var5 = _closure2_slot3;
 48:
                    var3 = var4.bytesSent;
                    var3 = var5 + var3;
                    _closure2_slot3 = var3;
                    var3 = _closure2_slot4;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
 76:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
 658:
            var4 = {};
            var _closure2_slot5 = var4;
            var2 = var1.inbound;
            if(!(var6 != var2)) { _fun0007_ip = 695; continue _fun0007 }
 674:
            var7 = var1.inbound;
            var5 = var7.forEach;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
                    if(!(var8 != var10)) { _fun0009_ip = 800; continue _fun0009 }
 68:
                    var5 = _closure2_slot2;
                    var5 = var8 != var5;
                    var16 = 0;
                    var7 = 0;
                    if(!var5) { _fun0009_ip = 87; continue _fun0009 }
 83:
                    var7 = _closure2_slot2;
 87:
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
                    if(!(var8 == var12)) { _fun0009_ip = 708; continue _fun0009 }
 704:
                    var10 = {};
                    _fun0009_ip = 785; continue _fun0009;
 708:
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
 785:
                    var25 = var5;
                    var24 = var10;
                    var10 = copyDataProperties(var25, var24);
                    var5 = var7.bind(var9)(var5);
 800:
                    if(!(var8 == var3)) { _fun0009_ip = 901; continue _fun0009 }
 804:
                    if(!(var8 != var6)) { _fun0009_ip = 916; continue _fun0009 }
 808:
                    var11 = _closure1_slot7;
                    var24 = _closure2_slot0;
                    var23 = _closure2_slot1;
                    var9 = undefined;
                    var26 = undefined;
                    var25 = var6;
                    var22 = var12;
                    var5 = var26[var11](var25, var24, var23, var22, var21);
                    if(!(var8 != var5)) { _fun0009_ip = 916; continue _fun0009 }
 841:
                    var7 = _closure1_slot3;
                    var6 = var6.rtpStats;
                    var7 = var7.bind(var9)(var6);
                    var6 = _closure2_slot2;
                    var8 = var8 != var6;
                    var6 = 0;
                    if(!var8) { _fun0009_ip = 873; continue _fun0009 }
 869:
                    var6 = _closure2_slot2;
 873:
                    var6 = var6 + var7;
                    _closure2_slot2 = var6;
                    var2 = _closure2_slot5;
                    var4 = var2[var4];
                    var2 = var4.push;
                    var2 = var2.bind(var4)(var5);
                    _fun0009_ip = 916; continue _fun0009;
 901:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
                            if(!(var7 != var4)) { _fun0010_ip = 107; continue _fun0010 }
 45:
                            var6 = _closure1_slot3;
                            var5 = var5.rtpStats;
                            var6 = var6.bind(var1)(var5);
                            var5 = _closure2_slot2;
                            var7 = var7 != var5;
                            var5 = 0;
                            if(!var7) { _fun0010_ip = 77; continue _fun0010 }
 73:
                            var5 = _closure2_slot2;
 77:
                            var5 = var5 + var6;
                            _closure2_slot2 = var5;
                            var3 = _closure2_slot5;
                            var2 = _closure3_slot0;
                            var3 = var3[var2];
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
 107:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
 916:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2);
 695:
            var10 = var1.transport;
            var5 = var1.clips;
            var9 = {};
            if(!(var6 != var10)) { _fun0007_ip = 916; continue _fun0007 }
 716:
            var2 = var10.sendBandwidth;
            var9['availableOutgoingBitrate'] = var2;
            var2 = var10.rtt;
            var9['ping'] = var2;
            var2 = var10.decryptionFailures;
            var9['decryptionFailures'] = var2;
            var2 = var10.routingFailures;
            if(!(var6 != var2)) { _fun0007_ip = 776; continue _fun0007 }
 764:
            var2 = var10.routingFailures;
            var9['routingFailures'] = var2;
 776:
            var2 = var10.localAddress;
            var9['localAddress'] = var2;
            var2 = var10.pacerDelay;
            var9['pacerDelay'] = var2;
            var2 = var10.receiverReports;
            if(!(var6 != var2)) { _fun0007_ip = 822; continue _fun0007 }
 810:
            var2 = var10.receiverReports;
            var9['receiverReports'] = var2;
 822:
            var2 = var10.receiverBitrateEstimate;
            var9['receiverBitrateEstimate'] = var2;
            var2 = var10.outboundBitrateEstimate;
            var9['outboundBitrateEstimate'] = var2;
            var7 = var10.inboundBitrateEstimate;
            var11 = var6 != var7;
            var2 = 0;
            if(!var11) { _fun0007_ip = 864; continue _fun0007 }
 861:
            var2 = var7;
 864:
            var9['inboundBitrateEstimate'] = var2;
            var2 = var10.packetsReceived;
            var9['packetsReceived'] = var2;
            var2 = var10.packetsSent;
            var9['packetsSent'] = var2;
            var2 = var10.secureFramesProtocolVersion;
            if(!(var6 != var2)) { _fun0007_ip = 916; continue _fun0007 }
 904:
            var2 = var10.secureFramesProtocolVersion;
            var9['secureFramesProtocolVersion'] = var2;
 916:
            var11 = var6 == var10;
            var7 = undefined;
            if(var11) { _fun0007_ip = 931; continue _fun0007 }
 925:
            var7 = var10.bytesReceived;
 931:
            var7 = var6 != var7;
            if(var7) { _fun0007_ip = 978; continue _fun0007 }
 938:
            var11 = _closure2_slot2;
            var11 = var6 != var11;
            if(!var11) { _fun0007_ip = 975; continue _fun0007 }
 949:
            var12 = global;
            var14 = var12.Number;
            var13 = var14.isNaN;
            var12 = _closure2_slot2;
            var12 = var13.bind(var14)(var12);
            var11 = !var12;
 975:
            var7 = var11;
 978:
            if(!var7) { _fun0007_ip = 1022; continue _fun0007 }
 981:
            var7 = var6 == var10;
            var11 = undefined;
            if(var7) { _fun0007_ip = 996; continue _fun0007 }
 990:
            var11 = var10.bytesReceived;
 996:
            if(!(var6 == var11)) { _fun0007_ip = 1004; continue _fun0007 }
 1000:
            var11 = _closure2_slot2;
 1004:
            var12 = var6 != var11;
            var7 = undefined;
            if(!var12) { _fun0007_ip = 1016; continue _fun0007 }
 1013:
            var7 = var11;
 1016:
            var9['bytesReceived'] = var7;
 1022:
            var11 = var6 == var10;
            var7 = undefined;
            if(var11) { _fun0007_ip = 1037; continue _fun0007 }
 1031:
            var7 = var10.bytesSent;
 1037:
            var7 = var6 != var7;
            if(var7) { _fun0007_ip = 1084; continue _fun0007 }
 1044:
            var11 = _closure2_slot3;
            var11 = var6 != var11;
            if(!var11) { _fun0007_ip = 1081; continue _fun0007 }
 1055:
            var12 = global;
            var14 = var12.Number;
            var13 = var14.isNaN;
            var12 = _closure2_slot3;
            var12 = var13.bind(var14)(var12);
            var11 = !var12;
 1081:
            var7 = var11;
 1084:
            if(!var7) { _fun0007_ip = 1128; continue _fun0007 }
 1087:
            var11 = var6 == var10;
            var7 = undefined;
            if(var11) { _fun0007_ip = 1102; continue _fun0007 }
 1096:
            var7 = var10.bytesSent;
 1102:
            if(!(var6 == var7)) { _fun0007_ip = 1110; continue _fun0007 }
 1106:
            var7 = _closure2_slot3;
 1110:
            var8 = var6 != var7;
            var2 = undefined;
            if(!var8) { _fun0007_ip = 1122; continue _fun0007 }
 1119:
            var2 = var7;
 1122:
            var9['bytesSent'] = var2;
 1128:
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
            if(!var7) { _fun0007_ip = 1224; continue _fun0007 }
 1175:
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
 1224:
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