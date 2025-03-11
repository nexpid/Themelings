// discord_common/js/packages/media-engine/native/transformStats.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = function(argFoo) { // Original name: convertAudioLevel
        michal = argFoo;
        entity = 32768;
        entity = michal / entity;
        return entity;
    };
    var _closure1_slot2 = entity;
    entity = function(argFoo) { // Original name: sumBytes
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = null;
            michal = report == oscard;
            entity = undefined;
            if(michal) { _fun00002_ip = 20; continue _fun00001 }
 14:
            entity = oscard.headerBytes;
 20:
            tangon = report != entity;
            michal = 0;
            if(!tangon) { _fun00002_ip = 32; continue _fun00001 }
 29:
            michal = entity;
 32:
            entity = report == oscard;
            tangon = undefined;
            if(entity) { _fun00002_ip = 47; continue _fun00001 }
 41:
            tangon = oscard.payloadBytes;
 47:
            golfie = report != tangon;
            entity = 0;
            if(!golfie) { _fun00002_ip = 59; continue _fun00001 }
 56:
            entity = tangon;
 59:
            michal = michal + entity;
            entity = report == oscard;
            tangon = undefined;
            if(entity) { _fun00002_ip = 78; continue _fun00001 }
 72:
            tangon = oscard.paddingBytes;
 78:
            golfie = report != tangon;
            entity = 0;
            if(!golfie) { _fun00002_ip = 90; continue _fun00001 }
 87:
            entity = tangon;
 90:
            michal = michal + entity;
            tangon = report == oscard;
            entity = undefined;
            if(tangon) { _fun00002_ip = 124; continue _fun00001 }
 103:
            tangon = oscard.fec;
            golfie = report == tangon;
            entity = undefined;
            if(golfie) { _fun00002_ip = 124; continue _fun00001 }
 118:
            entity = tangon.headerBytes;
 124:
            golfie = report != entity;
            tangon = 0;
            if(!golfie) { _fun00002_ip = 136; continue _fun00001 }
 133:
            tangon = entity;
 136:
            entity = report == oscard;
            golfie = undefined;
            if(entity) { _fun00002_ip = 166; continue _fun00001 }
 145:
            entity = oscard.fec;
            verify = report == entity;
            golfie = undefined;
            if(verify) { _fun00002_ip = 166; continue _fun00001 }
 160:
            golfie = entity.payloadBytes;
 166:
            verify = report != golfie;
            entity = 0;
            if(!verify) { _fun00002_ip = 178; continue _fun00001 }
 175:
            entity = golfie;
 178:
            tangon = tangon + entity;
            entity = report == oscard;
            golfie = undefined;
            if(entity) { _fun00002_ip = 212; continue _fun00001 }
 191:
            entity = oscard.fec;
            verify = report == entity;
            golfie = undefined;
            if(verify) { _fun00002_ip = 212; continue _fun00001 }
 206:
            golfie = entity.paddingBytes;
 212:
            verify = report != golfie;
            entity = 0;
            if(!verify) { _fun00002_ip = 224; continue _fun00001 }
 221:
            entity = golfie;
 224:
            tangon = tangon + entity;
            entity = report == oscard;
            golfie = undefined;
            if(entity) { _fun00002_ip = 258; continue _fun00001 }
 237:
            entity = oscard.retransmitted;
            verify = report == entity;
            golfie = undefined;
            if(verify) { _fun00002_ip = 258; continue _fun00001 }
 252:
            golfie = entity.headerBytes;
 258:
            verify = report != golfie;
            entity = 0;
            if(!verify) { _fun00002_ip = 270; continue _fun00001 }
 267:
            entity = golfie;
 270:
            tangon = tangon + entity;
            entity = report == oscard;
            golfie = undefined;
            if(entity) { _fun00002_ip = 304; continue _fun00001 }
 283:
            entity = oscard.retransmitted;
            verify = report == entity;
            golfie = undefined;
            if(verify) { _fun00002_ip = 304; continue _fun00001 }
 298:
            golfie = entity.payloadBytes;
 304:
            verify = report != golfie;
            entity = 0;
            if(!verify) { _fun00002_ip = 316; continue _fun00001 }
 313:
            entity = golfie;
 316:
            tangon = tangon + entity;
            entity = report == oscard;
            golfie = undefined;
            if(entity) { _fun00002_ip = 350; continue _fun00001 }
 329:
            entity = oscard.retransmitted;
            verify = report == entity;
            golfie = undefined;
            if(verify) { _fun00002_ip = 350; continue _fun00001 }
 344:
            golfie = entity.paddingBytes;
 350:
            verify = report != golfie;
            entity = 0;
            if(!verify) { _fun00002_ip = 362; continue _fun00001 }
 359:
            entity = golfie;
 362:
            tangon = tangon + entity;
            entity = report == oscard;
            golfie = undefined;
            if(entity) { _fun00002_ip = 396; continue _fun00001 }
 375:
            entity = oscard.transmitted;
            verify = report == entity;
            golfie = undefined;
            if(verify) { _fun00002_ip = 396; continue _fun00001 }
 390:
            golfie = entity.headerBytes;
 396:
            verify = report != golfie;
            entity = 0;
            if(!verify) { _fun00002_ip = 408; continue _fun00001 }
 405:
            entity = golfie;
 408:
            tangon = tangon + entity;
            entity = report == oscard;
            golfie = undefined;
            if(entity) { _fun00002_ip = 442; continue _fun00001 }
 421:
            entity = oscard.transmitted;
            verify = report == entity;
            golfie = undefined;
            if(verify) { _fun00002_ip = 442; continue _fun00001 }
 436:
            golfie = entity.payloadBytes;
 442:
            verify = report != golfie;
            entity = 0;
            if(!verify) { _fun00002_ip = 454; continue _fun00001 }
 451:
            entity = golfie;
 454:
            entity = tangon + entity;
            golfie = report == oscard;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 488; continue _fun00001 }
 467:
            oscard = oscard.transmitted;
            golfie = report == oscard;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 488; continue _fun00001 }
 482:
            tangon = oscard.paddingBytes;
 488:
            report = report != tangon;
            zuuluu = 0;
            if(!report) { _fun00002_ip = 500; continue _fun00001 }
 497:
            zuuluu = tangon;
 500:
            entity = entity + zuuluu;
            entity = entity + michal;
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = function(argFoo) { // Original name: sumPackets
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            report = null;
            michal = report == oscard;
            entity = undefined;
            if(michal) { _fun00004_ip = 20; continue _fun00003 }
 14:
            entity = oscard.packets;
 20:
            tangon = report != entity;
            michal = 0;
            if(!tangon) { _fun00004_ip = 32; continue _fun00003 }
 29:
            michal = entity;
 32:
            tangon = report == oscard;
            entity = undefined;
            if(tangon) { _fun00004_ip = 62; continue _fun00003 }
 41:
            tangon = oscard.fec;
            golfie = report == tangon;
            entity = undefined;
            if(golfie) { _fun00004_ip = 62; continue _fun00003 }
 56:
            entity = tangon.packets;
 62:
            golfie = report != entity;
            tangon = 0;
            if(!golfie) { _fun00004_ip = 74; continue _fun00003 }
 71:
            tangon = entity;
 74:
            entity = report == oscard;
            golfie = undefined;
            if(entity) { _fun00004_ip = 104; continue _fun00003 }
 83:
            entity = oscard.retransmitted;
            verify = report == entity;
            golfie = undefined;
            if(verify) { _fun00004_ip = 104; continue _fun00003 }
 98:
            golfie = entity.packets;
 104:
            verify = report != golfie;
            entity = 0;
            if(!verify) { _fun00004_ip = 116; continue _fun00003 }
 113:
            entity = golfie;
 116:
            entity = tangon + entity;
            golfie = report == oscard;
            tangon = undefined;
            if(golfie) { _fun00004_ip = 150; continue _fun00003 }
 129:
            oscard = oscard.transmitted;
            golfie = report == oscard;
            tangon = undefined;
            if(golfie) { _fun00004_ip = 150; continue _fun00003 }
 144:
            tangon = oscard.packets;
 150:
            report = report != tangon;
            zuuluu = 0;
            if(!report) { _fun00004_ip = 162; continue _fun00003 }
 159:
            zuuluu = tangon;
 162:
            entity = entity + zuuluu;
            entity = entity + michal;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = function(argFoo) { // Original name: transformPlayoutStats
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            offset = argFoo;
            entity = {};
            option = offset;
            tangon = global;
            zuuluu = 1000;
            michal = null;
            for(report in option)
 29:
            {
 41:
                romeon = report;
                backup = offset[romeon];
                foxtra = michal != backup;
                yankee = null;
                if(!foxtra) { _fun00006_ip = 249; continue _fun00005 }
 60:
                foxtra = {};
                output = tangon.Math;
                sizing = output.round;
                kiloes = backup.last;
                kiloes = zuuluu * kiloes;
                kiloes = sizing.bind(output)(kiloes);
                foxtra['last'] = kiloes;
                output = tangon.Math;
                sizing = output.round;
                kiloes = backup.mean;
                kiloes = zuuluu * kiloes;
                kiloes = sizing.bind(output)(kiloes);
                foxtra['mean'] = kiloes;
                output = tangon.Math;
                sizing = output.round;
                kiloes = backup.p75;
                kiloes = zuuluu * kiloes;
                kiloes = sizing.bind(output)(kiloes);
                foxtra['p75'] = kiloes;
                output = tangon.Math;
                sizing = output.round;
                kiloes = backup.p95;
                kiloes = zuuluu * kiloes;
                kiloes = sizing.bind(output)(kiloes);
                foxtra['p95'] = kiloes;
                output = tangon.Math;
                sizing = output.round;
                kiloes = backup.p99;
                kiloes = zuuluu * kiloes;
                kiloes = sizing.bind(output)(kiloes);
                foxtra['p99'] = kiloes;
                sizing = tangon.Math;
                kiloes = sizing.round;
                backup = backup.max;
                backup = zuuluu * backup;
                backup = kiloes.bind(sizing)(backup);
                foxtra['max'] = backup;
                yankee = foxtra;
 249:
                entity[romeon] = yankee;
                _fun00006_ip = 29; continue _fun00005;
            }
 258:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo, argBar) { // Original name: transformOutboundVideoStats
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            romeon = argBar;
            tangon = report.substreams;
            zuuluu = tangon.find;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    entity = michal.isRTX;
                    entity = !entity;
                    if(!entity) { _fun00010_ip = 28; continue _fun00009 }
 17:
                    michal = michal.isFlexFEC;
                    entity = !michal;
 28:
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            tangon = null;
            if(!(tangon == zuuluu)) { _fun00008_ip = 39; continue _fun00007 }
 35:
            michal = undefined;
            return michal;
 39:
            option = report.substreams;
            golfie = option.reduce;
            michal = function(argFoo, argBar) {
                zuuluu = _closure1_slot3;
                entity = argBar;
                michal = entity.rtpStats;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = argFoo;
                entity = entity + michal;
                return entity;
            };
            oscard = 0;
            option = golfie.bind(option)(michal, oscard);
            golfie = report.substreams;
            michal = golfie.reduce;
            entity = function(argFoo, argBar) {
                zuuluu = _closure1_slot4;
                entity = argBar;
                michal = entity.rtpStats;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = argFoo;
                entity = entity + michal;
                return entity;
            };
            golfie = michal.bind(golfie)(entity, oscard);
            entity = {};
            michal = 'video';
            entity['type'] = michal;
            michal = zuuluu.ssrc;
            entity['ssrc'] = michal;
            offset = _closure1_slot0;
            verify = _closure1_slot1;
            yankee = verify[oscard];
            michal = undefined;
            kiloes = offset.bind(michal)(yankee);
            backup = kiloes.formatSinkWantStat;
            foxtra = zuuluu.ssrc;
            yankee = true;
            yankee = backup.bind(kiloes)(romeon, foxtra, yankee);
            entity['sinkWant'] = yankee;
            verify = verify[oscard];
            yankee = offset.bind(michal)(verify);
            offset = yankee.formatSinkWantAsInt;
            verify = zuuluu.ssrc;
            verify = offset.bind(yankee)(romeon, verify);
            entity['sinkWantAsInt'] = verify;
            verify = {};
            offset = report.codecPayloadType;
            verify['id'] = offset;
            offset = report.codecName;
            verify['name'] = offset;
            entity['codec'] = verify;
            verify = report.keyFrameInterval;
            entity['keyFrameInterval'] = verify;
            entity['bytesSent'] = option;
            entity['packetsSent'] = golfie;
            golfie = zuuluu.rtcpStats;
            verify = tangon == golfie;
            option = undefined;
            if(verify) { _fun00008_ip = 257; continue _fun00007 }
 251:
            option = golfie.packetsLost;
 257:
            verify = tangon != option;
            golfie = 0;
            if(!verify) { _fun00008_ip = 269; continue _fun00007 }
 266:
            golfie = option;
 269:
            entity['packetsLost'] = golfie;
            golfie = zuuluu.rtcpStats;
            verify = tangon == golfie;
            option = undefined;
            if(verify) { _fun00008_ip = 295; continue _fun00007 }
 289:
            option = golfie.fractionLost;
 295:
            verify = tangon != option;
            golfie = 0;
            if(!verify) { _fun00008_ip = 307; continue _fun00007 }
 304:
            golfie = option;
 307:
            entity['fractionLost'] = golfie;
            golfie = report.mediaBitrate;
            entity['bitrate'] = golfie;
            golfie = report.targetMediaBitrate;
            entity['bitrateTarget'] = golfie;
            golfie = report.encoderImplementationName;
            entity['encoderImplementationName'] = golfie;
            golfie = report.encodeUsage;
            entity['encodeUsage'] = golfie;
            golfie = report.avgEncodeTime;
            entity['averageEncodeTime'] = golfie;
            golfie = {};
            option = zuuluu.height;
            golfie['height'] = option;
            option = zuuluu.width;
            golfie['width'] = option;
            entity['resolution'] = golfie;
            golfie = zuuluu.frameCounts;
            option = golfie.keyFrames;
            golfie = zuuluu.frameCounts;
            golfie = golfie.deltaFrames;
            golfie = option + golfie;
            entity['framesSent'] = golfie;
            golfie = zuuluu.frameCounts;
            golfie = golfie.keyFrames;
            entity['keyFramesEncoded'] = golfie;
            golfie = report.framesEncoded;
            entity['framesEncoded'] = golfie;
            golfie = report.inputFrameRate;
            entity['frameRateInput'] = golfie;
            golfie = report.encodeFrameRate;
            entity['frameRateEncode'] = golfie;
            golfie = zuuluu.rtcpStats;
            verify = tangon == golfie;
            option = undefined;
            if(verify) { _fun00008_ip = 506; continue _fun00007 }
 500:
            option = golfie.firPackets;
 506:
            verify = tangon != option;
            golfie = 0;
            if(!verify) { _fun00008_ip = 518; continue _fun00007 }
 515:
            golfie = option;
 518:
            entity['firCount'] = golfie;
            golfie = zuuluu.rtcpStats;
            verify = tangon == golfie;
            option = undefined;
            if(verify) { _fun00008_ip = 544; continue _fun00007 }
 538:
            option = golfie.nackPackets;
 544:
            verify = tangon != option;
            golfie = 0;
            if(!verify) { _fun00008_ip = 556; continue _fun00007 }
 553:
            golfie = option;
 556:
            entity['nackCount'] = golfie;
            option = zuuluu.rtcpStats;
            verify = tangon == option;
            golfie = undefined;
            if(verify) { _fun00008_ip = 582; continue _fun00007 }
 576:
            golfie = option.pliPackets;
 582:
            option = tangon != golfie;
            oscard = 0;
            if(!option) { _fun00008_ip = 594; continue _fun00007 }
 591:
            oscard = golfie;
 594:
            entity['pliCount'] = oscard;
            oscard = report.qpSum;
            entity['qpSum'] = oscard;
            oscard = report.bwLimitedResolution;
            entity['bandwidthLimitedResolution'] = oscard;
            oscard = report.framesDroppedRateLimiter;
            entity['framesDroppedRateLimiter'] = oscard;
            oscard = report.framesDroppedEncoderQueue;
            entity['framesDroppedEncoderQueue'] = oscard;
            oscard = report.framesDroppedCongestionWindow;
            entity['framesDroppedCongestionWindow'] = oscard;
            oscard = report.framesDroppedEncoder;
            entity['framesDroppedEncoder'] = oscard;
            oscard = report.cpuLimitedResolution;
            entity['cpuLimitedResolution'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 701; continue _fun00007 }
 693:
            golfie = oscard.imageQualityVmaf_v061;
 701:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 713; continue _fun00007 }
 710:
            oscard = golfie;
 713:
            entity['encoderQualityVmaf'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 741; continue _fun00007 }
 733:
            golfie = oscard.imageQualityWebrtcPsnrDb;
 741:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 753; continue _fun00007 }
 750:
            oscard = golfie;
 753:
            entity['encoderQualityPsnr'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 781; continue _fun00007 }
 773:
            golfie = oscard.decodeErrors;
 781:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 793; continue _fun00007 }
 790:
            oscard = golfie;
 793:
            entity['qualityDecodeErrors'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 821; continue _fun00007 }
 813:
            golfie = oscard.decoderReboots;
 821:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 833; continue _fun00007 }
 830:
            oscard = golfie;
 833:
            entity['qualityDecoderReboots'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 861; continue _fun00007 }
 853:
            golfie = oscard.scoreErrors;
 861:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 873; continue _fun00007 }
 870:
            oscard = golfie;
 873:
            entity['qualityScoreErrors'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 901; continue _fun00007 }
 893:
            golfie = oscard.frameDrops;
 901:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 913; continue _fun00007 }
 910:
            oscard = golfie;
 913:
            entity['qualityFrameDrops'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 941; continue _fun00007 }
 933:
            golfie = oscard.sizeMismatches;
 941:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 953; continue _fun00007 }
 950:
            oscard = golfie;
 953:
            entity['qualitySizeMismatches'] = oscard;
            oscard = report.filter;
            entity['filter'] = oscard;
            oscard = report.passthroughCount;
            entity['passthroughCount'] = oscard;
            oscard = report.encryptSuccessCount;
            entity['encryptSuccessCount'] = oscard;
            oscard = report.encryptFailureCount;
            entity['encryptFailureCount'] = oscard;
            oscard = report.encryptDuration;
            entity['encryptDuration'] = oscard;
            oscard = report.encryptAttempts;
            entity['encryptAttempts'] = oscard;
            oscard = report.encryptMaxAttempts;
            entity['encryptMaxAttempts'] = oscard;
            oscard = report.encryptMissingKeyCount;
            entity['encryptMissingKeyCount'] = oscard;
            oscard = report.hqSimulcastStreamEncoded;
            entity['hqSimulcastStreamEncoded'] = oscard;
            oscard = report.lqSimulcastStreamEncoded;
            entity['lqSimulcastStreamEncoded'] = oscard;
            report = report.bwLimitedFrameRate;
            entity['bandwidthLimitedFrameRate'] = report;
            oscard = zuuluu.encoderQualityStats;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00008_ip = 1100; continue _fun00007 }
 1094:
            report = oscard.freezeCount;
 1100:
            entity['freezeCount'] = report;
            oscard = zuuluu.encoderQualityStats;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00008_ip = 1126; continue _fun00007 }
 1120:
            report = oscard.totalFreezesDuration;
 1126:
            entity['totalFreezesDuration'] = report;
            oscard = zuuluu.encoderQualityStats;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00008_ip = 1152; continue _fun00007 }
 1146:
            report = oscard.totalFramesDuration;
 1152:
            entity['totalFramesDuration'] = report;
            zuuluu = zuuluu.encoderQualityStats;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00008_ip = 1180; continue _fun00007 }
 1172:
            michal = zuuluu.interFrameEntropy;
 1180:
            entity['videoEntropy'] = michal;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: transformInboundVideoStats
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            sizing = argBar;
            romeon = argBaz;
            oscard = argCor;
            michal = _closure1_slot3;
            entity = tangon.rtpStats;
            report = undefined;
            option = michal.bind(report)(entity);
            michal = _closure1_slot4;
            entity = tangon.rtpStats;
            michal = michal.bind(report)(entity);
            entity = {};
            golfie = 'video';
            entity['type'] = golfie;
            golfie = tangon.ssrc;
            entity['ssrc'] = golfie;
            offset = _closure1_slot0;
            verify = _closure1_slot1;
            golfie = 0;
            yankee = verify[golfie];
            backup = offset.bind(report)(yankee);
            foxtra = backup.formatSinkWantStat;
            yankee = tangon.ssrc;
            kiloes = true;
            yankee = foxtra.bind(backup)(sizing, yankee, kiloes);
            entity['sinkWant'] = yankee;
            yankee = verify[golfie];
            backup = offset.bind(report)(yankee);
            foxtra = backup.formatSinkWantAsInt;
            yankee = tangon.ssrc;
            yankee = foxtra.bind(backup)(sizing, yankee);
            entity['sinkWantAsInt'] = yankee;
            yankee = verify[golfie];
            backup = offset.bind(report)(yankee);
            foxtra = backup.formatSinkWantStat;
            yankee = tangon.ssrc;
            yankee = foxtra.bind(backup)(romeon, yankee, kiloes);
            entity['sinkWantLocal'] = yankee;
            verify = verify[golfie];
            yankee = offset.bind(report)(verify);
            offset = yankee.formatSinkWantAsInt;
            verify = tangon.ssrc;
            verify = offset.bind(yankee)(romeon, verify);
            entity['sinkWantLocalAsInt'] = verify;
            verify = {};
            offset = tangon.codecPayloadType;
            verify['id'] = offset;
            offset = tangon.codecName;
            verify['name'] = offset;
            entity['codec'] = verify;
            entity['bytesReceived'] = option;
            entity['packetsReceived'] = michal;
            michal = tangon.rtpStats;
            option = michal.packetsLost;
            michal = null;
            if(!(michal == option)) { _fun00012_ip = 277; continue _fun00011 }
 265:
            verify = tangon.rtcpStats;
            option = verify.packetsLost;
 277:
            entity['packetsLost'] = option;
            option = tangon.rtcpStats;
            option = option.fractionLost;
            entity['fractionLost'] = option;
            option = tangon.totalBitrate;
            entity['bitrate'] = option;
            option = tangon.jitterBuffer;
            entity['jitterBuffer'] = option;
            option = tangon.currentDelay;
            entity['currentDelay'] = option;
            option = tangon.targetDelay;
            entity['targetDelay'] = option;
            option = tangon.minPlayoutDelay;
            entity['minPlayoutDelay'] = option;
            option = tangon.renderDelay;
            entity['renderDelay'] = option;
            option = tangon.decode;
            entity['averageDecodeTime'] = option;
            option = {};
            verify = tangon.height;
            option['height'] = verify;
            verify = tangon.width;
            option['width'] = verify;
            entity['resolution'] = option;
            option = tangon.decoderImplementationName;
            entity['decoderImplementationName'] = option;
            option = tangon.framesDecoded;
            entity['framesDecoded'] = option;
            option = tangon.framesDropped;
            entity['framesDropped'] = option;
            option = tangon.framesDecodeErrors;
            entity['framesDecodeErrors'] = option;
            option = tangon.frameCounts;
            verify = option.keyFrames;
            option = tangon.frameCounts;
            option = option.deltaFrames;
            option = verify + option;
            entity['framesReceived'] = option;
            option = tangon.networkFramesDropped;
            verify = michal != option;
            golfie = 0;
            if(!verify) { _fun00012_ip = 500; continue _fun00011 }
 497:
            golfie = option;
 500:
            entity['networkFramesDropped'] = golfie;
            golfie = tangon.frameCounts;
            golfie = golfie.keyFrames;
            entity['keyFramesDecoded'] = golfie;
            golfie = tangon.decodeFrameRate;
            entity['frameRateDecode'] = golfie;
            golfie = tangon.networkFrameRate;
            entity['frameRateNetwork'] = golfie;
            golfie = tangon.renderFrameRate;
            entity['frameRateRender'] = golfie;
            golfie = tangon.rtcpStats;
            golfie = golfie.firPackets;
            entity['firCount'] = golfie;
            golfie = tangon.rtcpStats;
            golfie = golfie.nackPackets;
            entity['nackCount'] = golfie;
            golfie = tangon.rtcpStats;
            golfie = golfie.pliPackets;
            entity['pliCount'] = golfie;
            golfie = tangon.qpSum;
            entity['qpSum'] = golfie;
            golfie = tangon.freezeCount;
            entity['freezeCount'] = golfie;
            golfie = tangon.pauseCount;
            entity['pauseCount'] = golfie;
            golfie = tangon.totalFreezesDuration;
            entity['totalFreezesDuration'] = golfie;
            golfie = tangon.totalPausesDuration;
            entity['totalPausesDuration'] = golfie;
            golfie = tangon.totalFramesDuration;
            entity['totalFramesDuration'] = golfie;
            golfie = tangon.sumOfSquaredFramesDurations;
            entity['sumOfSquaredFramesDurations'] = golfie;
            golfie = tangon.passthroughCount;
            entity['passthroughCount'] = golfie;
            golfie = tangon.decryptSuccessCount;
            entity['decryptSuccessCount'] = golfie;
            golfie = tangon.decryptFailureCount;
            entity['decryptFailureCount'] = golfie;
            golfie = tangon.decryptDuration;
            entity['decryptDuration'] = golfie;
            golfie = tangon.decryptAttempts;
            entity['decryptAttempts'] = golfie;
            golfie = tangon.decryptMissingKeyCount;
            entity['decryptMissingKeyCount'] = golfie;
            tangon = tangon.decryptInvalidNonceCount;
            entity['decryptInvalidNonceCount'] = tangon;
            if(!(michal == oscard)) { _fun00012_ip = 774; continue _fun00011 }
 770:
            michal = {};
            _fun00012_ip = 818; continue _fun00011;
 774:
            tangon = _closure1_slot5;
            zuuluu = {};
            golfie = oscard.videoJitterBuffer;
            zuuluu['videoJitterBuffer'] = golfie;
            golfie = oscard.videoJitterDelay;
            zuuluu['videoJitterDelay'] = golfie;
            oscard = oscard.videoJitterTarget;
            zuuluu['videoJitterTarget'] = oscard;
            michal = tangon.bind(report)(zuuluu);
 818:
            echoed = entity;
            result = michal;
            michal = copyDataProperties(echoed, result);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/native/transformStats.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: transformStats
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argBar;
            verify = argBaz;
            var _closure2_slot0 = verify;
            entity = argCor;
            var _closure2_slot1 = entity;
            oscard = null;
            var _closure2_slot2 = oscard;
            var _closure2_slot3 = oscard;
            zuuluu = 'string';
            michal = typeof tangon;
            entity = tangon;
            if(!(zuuluu === michal)) { _fun00014_ip = 62; continue _fun00013 }
 43:
            michal = global;
            zuuluu = michal.JSON;
            michal = zuuluu.parse;
            entity = michal.bind(zuuluu)(tangon);
 62:
            zuuluu = new Array(0);
            var _closure2_slot4 = zuuluu;
            michal = entity.outbound;
            if(!(oscard != michal)) { _fun00014_ip = 612; continue _fun00013 }
 83:
            michal = entity.outbound;
            offset = michal.audio;
            golfie = michal.video;
            report = michal.videos;
            if(!(oscard != offset)) { _fun00014_ip = 528; continue _fun00013 }
 114:
            michal = _closure2_slot3;
            yankee = oscard != michal;
            sizing = 0;
            tangon = 0;
            if(!yankee) { _fun00014_ip = 132; continue _fun00013 }
 129:
            tangon = michal;
 132:
            michal = offset.bytesSent;
            michal = tangon + michal;
            _closure2_slot3 = michal;
            tangon = zuuluu.push;
            michal = {};
            yankee = 'audio';
            michal['type'] = yankee;
            yankee = offset.ssrc;
            michal['ssrc'] = yankee;
            backup = _closure1_slot0;
            romeon = _closure1_slot1;
            kiloes = romeon[sizing];
            foxtra = undefined;
            echoed = backup.bind(foxtra)(kiloes);
            result = echoed.formatSinkWantStat;
            output = offset.ssrc;
            kiloes = false;
            kiloes = result.bind(echoed)(verify, output, kiloes);
            michal['sinkWant'] = kiloes;
            romeon = romeon[sizing];
            kiloes = backup.bind(foxtra)(romeon);
            backup = kiloes.formatSinkWantAsInt;
            romeon = offset.ssrc;
            romeon = backup.bind(kiloes)(verify, romeon);
            michal['sinkWantAsInt'] = romeon;
            romeon = {};
            backup = offset.codecPayloadType;
            romeon['id'] = backup;
            backup = offset.codecName;
            romeon['name'] = backup;
            michal['codec'] = romeon;
            romeon = offset.bytesSent;
            michal['bytesSent'] = romeon;
            romeon = offset.packetsSent;
            michal['packetsSent'] = romeon;
            romeon = global;
            kiloes = romeon.Math;
            backup = kiloes.max;
            romeon = offset.packetsLost;
            romeon = backup.bind(kiloes)(sizing, romeon);
            michal['packetsLost'] = romeon;
            backup = offset.fractionLost;
            romeon = 100;
            romeon = romeon * backup;
            michal['fractionLost'] = romeon;
            romeon = _closure1_slot2;
            yankee = offset.audioLevel;
            yankee = romeon.bind(foxtra)(yankee);
            michal['audioLevel'] = yankee;
            yankee = offset.speaking;
            michal['audioDetected'] = yankee;
            yankee = offset.framesCaptured;
            michal['framesCaptured'] = yankee;
            yankee = offset.framesRendered;
            michal['framesRendered'] = yankee;
            yankee = offset.noiseCancellerFrames;
            michal['noiseCancellerFrames'] = yankee;
            yankee = offset.noiseCancellerProcessTime;
            michal['noiseCancellerProcessTime'] = yankee;
            yankee = offset.voiceActivityDetectorProcessTime;
            michal['voiceActivityDetectorProcessTime'] = yankee;
            yankee = offset.passthroughCount;
            michal['passthroughCount'] = yankee;
            yankee = offset.encryptSuccessCount;
            michal['encryptSuccessCount'] = yankee;
            yankee = offset.encryptFailureCount;
            michal['encryptFailureCount'] = yankee;
            yankee = offset.encryptDuration;
            michal['encryptDuration'] = yankee;
            yankee = offset.encryptAttempts;
            michal['encryptAttempts'] = yankee;
            yankee = offset.encryptMaxAttempts;
            michal['encryptMaxAttempts'] = yankee;
            yankee = offset.encryptMissingKeyCount;
            michal['encryptMissingKeyCount'] = yankee;
            offset = offset.pttQueueLatencyMicrosSamples;
            michal['pttQueueLatencyMicrosSamples'] = offset;
            michal = tangon.bind(zuuluu)(michal);
 528:
            if(!(oscard == report)) { _fun00014_ip = 597; continue _fun00013 }
 532:
            if(!(oscard != golfie)) { _fun00014_ip = 612; continue _fun00013 }
 536:
            tangon = _closure1_slot6;
            michal = undefined;
            tangon = tangon.bind(michal)(golfie, verify);
            if(!(oscard != tangon)) { _fun00014_ip = 612; continue _fun00013 }
 555:
            michal = _closure2_slot3;
            verify = oscard != michal;
            golfie = 0;
            if(!verify) { _fun00014_ip = 571; continue _fun00013 }
 568:
            golfie = michal;
 571:
            michal = tangon.bytesSent;
            michal = golfie + michal;
            _closure2_slot3 = michal;
            michal = zuuluu.push;
            michal = michal.bind(zuuluu)(tangon);
            _fun00014_ip = 612; continue _fun00013;
 597:
            tangon = report.forEach;
            michal = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    report = _closure1_slot6;
                    tangon = _closure2_slot0;
                    entity = undefined;
                    zuuluu = argFoo;
                    tangon = report.bind(entity)(zuuluu, tangon);
                    report = null;
                    if(!(report != tangon)) { _fun00016_ip = 75; continue _fun00015 }
 31:
                    zuuluu = _closure2_slot3;
                    oscard = report != zuuluu;
                    report = 0;
                    if(!oscard) { _fun00016_ip = 47; continue _fun00015 }
 44:
                    report = zuuluu;
 47:
                    zuuluu = tangon.bytesSent;
                    zuuluu = report + zuuluu;
                    _closure2_slot3 = zuuluu;
                    zuuluu = _closure2_slot4;
                    michal = zuuluu.push;
                    michal = michal.bind(zuuluu)(tangon);
 75:
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
 612:
            tangon = {};
            var _closure2_slot5 = tangon;
            michal = entity.inbound;
            if(!(oscard != michal)) { _fun00014_ip = 649; continue _fun00013 }
 628:
            golfie = entity.inbound;
            report = golfie.forEach;
            michal = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.id;
                    var _closure3_slot0 = tangon;
                    offset = michal.audio;
                    golfie = michal.video;
                    zuuluu = michal.videos;
                    romeon = michal.playout;
                    var _closure3_slot1 = romeon;
                    oscard = _closure2_slot5;
                    report = new Array(0);
                    oscard[tangon] = report;
                    oscard = null;
                    if(!(oscard != offset)) { _fun00018_ip = 788; continue _fun00017 }
 68:
                    report = _closure2_slot2;
                    verify = oscard != report;
                    sizing = 0;
                    option = 0;
                    if(!verify) { _fun00018_ip = 86; continue _fun00017 }
 83:
                    option = report;
 86:
                    report = offset.bytesReceived;
                    report = option + report;
                    _closure2_slot2 = report;
                    report = _closure2_slot5;
                    verify = report[tangon];
                    option = verify.push;
                    report = {};
                    yankee = 'audio';
                    report['type'] = yankee;
                    yankee = offset.ssrc;
                    report['ssrc'] = yankee;
                    kiloes = _closure1_slot0;
                    foxtra = _closure1_slot1;
                    output = foxtra[sizing];
                    backup = undefined;
                    source = kiloes.bind(backup)(output);
                    update = source.formatSinkWantStat;
                    output = _closure2_slot0;
                    echoed = offset.ssrc;
                    result = false;
                    result = update.bind(source)(output, echoed, result);
                    report['sinkWant'] = result;
                    foxtra = foxtra[sizing];
                    sizing = kiloes.bind(backup)(foxtra);
                    kiloes = sizing.formatSinkWantAsInt;
                    foxtra = offset.ssrc;
                    foxtra = kiloes.bind(sizing)(output, foxtra);
                    report['sinkWantAsInt'] = foxtra;
                    foxtra = {};
                    kiloes = offset.codecPayloadType;
                    foxtra['id'] = kiloes;
                    kiloes = offset.codecName;
                    foxtra['name'] = kiloes;
                    report['codec'] = foxtra;
                    foxtra = offset.bytesReceived;
                    report['bytesReceived'] = foxtra;
                    foxtra = offset.packetsReceived;
                    report['packetsReceived'] = foxtra;
                    foxtra = offset.packetsLost;
                    report['packetsLost'] = foxtra;
                    foxtra = offset.fractionLost;
                    kiloes = 100;
                    foxtra = kiloes * foxtra;
                    report['fractionLost'] = foxtra;
                    foxtra = offset.fecPacketsReceived;
                    report['fecPacketsReceived'] = foxtra;
                    foxtra = offset.fecPacketsDiscarded;
                    report['fecPacketsDiscarded'] = foxtra;
                    sizing = _closure1_slot2;
                    foxtra = offset.audioLevel;
                    foxtra = sizing.bind(backup)(foxtra);
                    report['audioLevel'] = foxtra;
                    foxtra = offset.speaking;
                    report['audioDetected'] = foxtra;
                    foxtra = offset.jitter;
                    report['jitter'] = foxtra;
                    foxtra = offset.jitterBuffer;
                    report['jitterBuffer'] = foxtra;
                    foxtra = offset.jitterBufferPreferred;
                    report['jitterBufferPreferred'] = foxtra;
                    foxtra = offset.decodingCNG;
                    report['decodingCNG'] = foxtra;
                    foxtra = offset.decodingMutedOutput;
                    report['decodingMutedOutput'] = foxtra;
                    foxtra = offset.decodingNormal;
                    report['decodingNormal'] = foxtra;
                    foxtra = offset.decodingPLC;
                    report['decodingPLC'] = foxtra;
                    foxtra = offset.decodingPLCCNG;
                    report['decodingPLCCNG'] = foxtra;
                    foxtra = offset.nackCount;
                    report['nackCount'] = foxtra;
                    foxtra = offset.accelerateRate;
                    foxtra = kiloes * foxtra;
                    report['accelerateRate'] = foxtra;
                    foxtra = offset.expandRate;
                    foxtra = kiloes * foxtra;
                    report['expandRate'] = foxtra;
                    foxtra = offset.preemptiveExpandRate;
                    foxtra = kiloes * foxtra;
                    report['preemptiveExpandRate'] = foxtra;
                    foxtra = offset.speechExpandRate;
                    foxtra = kiloes * foxtra;
                    report['speechExpandRate'] = foxtra;
                    foxtra = offset.secondaryDecodedRate;
                    foxtra = kiloes * foxtra;
                    report['secondaryDecodedRate'] = foxtra;
                    foxtra = offset.opSilence;
                    report['opSilence'] = foxtra;
                    foxtra = offset.opNormal;
                    report['opNormal'] = foxtra;
                    foxtra = offset.opMerge;
                    report['opMerge'] = foxtra;
                    foxtra = offset.opExpand;
                    report['opExpand'] = foxtra;
                    foxtra = offset.opAccelerate;
                    report['opAccelerate'] = foxtra;
                    foxtra = offset.opPreemptiveExpand;
                    report['opPreemptiveExpand'] = foxtra;
                    foxtra = offset.opCNG;
                    report['opCNG'] = foxtra;
                    foxtra = offset.delayEstimate;
                    report['delayEstimate'] = foxtra;
                    foxtra = offset.passthroughCount;
                    report['passthroughCount'] = foxtra;
                    foxtra = offset.decryptSuccessCount;
                    report['decryptSuccessCount'] = foxtra;
                    foxtra = offset.decryptFailureCount;
                    report['decryptFailureCount'] = foxtra;
                    foxtra = offset.decryptDuration;
                    report['decryptDuration'] = foxtra;
                    foxtra = offset.decryptAttempts;
                    report['decryptAttempts'] = foxtra;
                    foxtra = offset.decryptMissingKeyCount;
                    report['decryptMissingKeyCount'] = foxtra;
                    offset = offset.decryptInvalidNonceCount;
                    report['decryptInvalidNonceCount'] = offset;
                    if(!(oscard == romeon)) { _fun00018_ip = 696; continue _fun00017 }
 692:
                    offset = {};
                    _fun00018_ip = 773; continue _fun00017;
 696:
                    foxtra = _closure1_slot5;
                    yankee = {};
                    kiloes = romeon.audioJitterBuffer;
                    yankee['audioJitterBuffer'] = kiloes;
                    kiloes = romeon.audioJitterDelay;
                    yankee['audioJitterDelay'] = kiloes;
                    kiloes = romeon.audioJitterTarget;
                    yankee['audioJitterTarget'] = kiloes;
                    kiloes = romeon.audioPlayoutUnderruns;
                    yankee['audioPlayoutUnderruns'] = kiloes;
                    kiloes = romeon.relativeReceptionDelay;
                    yankee['relativeReceptionDelay'] = kiloes;
                    kiloes = romeon.relativePlayoutDelay;
                    yankee['relativePlayoutDelay'] = kiloes;
                    offset = foxtra.bind(backup)(yankee);
 773:
                    config = report;
                    sequen = offset;
                    offset = copyDataProperties(config, sequen);
                    report = option.bind(verify)(report);
 788:
                    if(!(oscard == zuuluu)) { _fun00018_ip = 888; continue _fun00017 }
 792:
                    if(!(oscard != golfie)) { _fun00018_ip = 903; continue _fun00017 }
 796:
                    yankee = _closure1_slot7;
                    sequen = _closure2_slot0;
                    vacuum = _closure2_slot1;
                    verify = undefined;
                    record = undefined;
                    config = golfie;
                    ctrled = romeon;
                    report = record[yankee](config, sequen, vacuum, ctrled, source);
                    if(!(oscard != report)) { _fun00018_ip = 903; continue _fun00017 }
 829:
                    option = _closure1_slot3;
                    golfie = golfie.rtpStats;
                    golfie = option.bind(verify)(golfie);
                    option = _closure2_slot2;
                    verify = oscard != option;
                    oscard = 0;
                    if(!verify) { _fun00018_ip = 860; continue _fun00017 }
 857:
                    oscard = option;
 860:
                    oscard = oscard + golfie;
                    _closure2_slot2 = oscard;
                    michal = _closure2_slot5;
                    tangon = michal[tangon];
                    michal = tangon.push;
                    michal = michal.bind(tangon)(report);
                    _fun00018_ip = 903; continue _fun00017;
 888:
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            oscard = argFoo;
                            verify = _closure1_slot7;
                            romeon = _closure2_slot0;
                            yankee = _closure2_slot1;
                            offset = _closure3_slot1;
                            entity = undefined;
                            backup = undefined;
                            foxtra = oscard;
                            tangon = backup[verify](foxtra, romeon, yankee, offset, verify);
                            report = null;
                            if(!(report != tangon)) { _fun00020_ip = 106; continue _fun00019 }
 45:
                            golfie = _closure1_slot3;
                            oscard = oscard.rtpStats;
                            oscard = golfie.bind(entity)(oscard);
                            golfie = _closure2_slot2;
                            option = report != golfie;
                            report = 0;
                            if(!option) { _fun00020_ip = 76; continue _fun00019 }
 73:
                            report = golfie;
 76:
                            report = report + oscard;
                            _closure2_slot2 = report;
                            zuuluu = _closure2_slot5;
                            michal = _closure3_slot0;
                            zuuluu = zuuluu[michal];
                            michal = zuuluu.push;
                            michal = michal.bind(zuuluu)(tangon);
 106:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
 903:
                    entity = undefined;
                    return entity;
                }
            };
            michal = report.bind(golfie)(michal);
 649:
            offset = entity.transport;
            report = entity.clips;
            verify = {};
            if(!(oscard != offset)) { _fun00014_ip = 870; continue _fun00013 }
 670:
            michal = offset.sendBandwidth;
            verify['availableOutgoingBitrate'] = michal;
            michal = offset.rtt;
            verify['ping'] = michal;
            michal = offset.decryptionFailures;
            verify['decryptionFailures'] = michal;
            michal = offset.routingFailures;
            if(!(oscard != michal)) { _fun00014_ip = 730; continue _fun00013 }
 718:
            michal = offset.routingFailures;
            verify['routingFailures'] = michal;
 730:
            michal = offset.localAddress;
            verify['localAddress'] = michal;
            michal = offset.pacerDelay;
            verify['pacerDelay'] = michal;
            michal = offset.receiverReports;
            if(!(oscard != michal)) { _fun00014_ip = 776; continue _fun00013 }
 764:
            michal = offset.receiverReports;
            verify['receiverReports'] = michal;
 776:
            michal = offset.receiverBitrateEstimate;
            verify['receiverBitrateEstimate'] = michal;
            michal = offset.outboundBitrateEstimate;
            verify['outboundBitrateEstimate'] = michal;
            golfie = offset.inboundBitrateEstimate;
            yankee = oscard != golfie;
            michal = 0;
            if(!yankee) { _fun00014_ip = 818; continue _fun00013 }
 815:
            michal = golfie;
 818:
            verify['inboundBitrateEstimate'] = michal;
            michal = offset.packetsReceived;
            verify['packetsReceived'] = michal;
            michal = offset.packetsSent;
            verify['packetsSent'] = michal;
            michal = offset.secureFramesProtocolVersion;
            if(!(oscard != michal)) { _fun00014_ip = 870; continue _fun00013 }
 858:
            michal = offset.secureFramesProtocolVersion;
            verify['secureFramesProtocolVersion'] = michal;
 870:
            yankee = oscard == offset;
            golfie = undefined;
            if(yankee) { _fun00014_ip = 885; continue _fun00013 }
 879:
            golfie = offset.bytesReceived;
 885:
            golfie = oscard != golfie;
            if(golfie) { _fun00014_ip = 932; continue _fun00013 }
 892:
            yankee = _closure2_slot2;
            yankee = oscard != yankee;
            if(!yankee) { _fun00014_ip = 929; continue _fun00013 }
 903:
            romeon = global;
            backup = romeon.Number;
            foxtra = backup.isNaN;
            romeon = _closure2_slot2;
            romeon = foxtra.bind(backup)(romeon);
            yankee = !romeon;
 929:
            golfie = yankee;
 932:
            if(!golfie) { _fun00014_ip = 976; continue _fun00013 }
 935:
            golfie = oscard == offset;
            yankee = undefined;
            if(golfie) { _fun00014_ip = 950; continue _fun00013 }
 944:
            yankee = offset.bytesReceived;
 950:
            if(!(oscard == yankee)) { _fun00014_ip = 958; continue _fun00013 }
 954:
            yankee = _closure2_slot2;
 958:
            romeon = oscard != yankee;
            golfie = undefined;
            if(!romeon) { _fun00014_ip = 970; continue _fun00013 }
 967:
            golfie = yankee;
 970:
            verify['bytesReceived'] = golfie;
 976:
            yankee = oscard == offset;
            golfie = undefined;
            if(yankee) { _fun00014_ip = 991; continue _fun00013 }
 985:
            golfie = offset.bytesSent;
 991:
            golfie = oscard != golfie;
            if(golfie) { _fun00014_ip = 1038; continue _fun00013 }
 998:
            yankee = _closure2_slot3;
            yankee = oscard != yankee;
            if(!yankee) { _fun00014_ip = 1035; continue _fun00013 }
 1009:
            romeon = global;
            backup = romeon.Number;
            foxtra = backup.isNaN;
            romeon = _closure2_slot3;
            romeon = foxtra.bind(backup)(romeon);
            yankee = !romeon;
 1035:
            golfie = yankee;
 1038:
            if(!golfie) { _fun00014_ip = 1082; continue _fun00013 }
 1041:
            yankee = oscard == offset;
            golfie = undefined;
            if(yankee) { _fun00014_ip = 1056; continue _fun00013 }
 1050:
            golfie = offset.bytesSent;
 1056:
            if(!(oscard == golfie)) { _fun00014_ip = 1064; continue _fun00013 }
 1060:
            golfie = _closure2_slot3;
 1064:
            option = oscard != golfie;
            michal = undefined;
            if(!option) { _fun00014_ip = 1076; continue _fun00013 }
 1073:
            michal = golfie;
 1076:
            verify['bytesSent'] = michal;
 1082:
            golfie = entity.screenshare;
            option = entity.camera;
            michal = entity.audioDevice;
            entity = {};
            offset = argFoo;
            entity['mediaEngineConnectionId'] = offset;
            entity['transport'] = verify;
            entity['screenshare'] = golfie;
            golfie = oscard != option;
            oscard = null;
            if(!golfie) { _fun00014_ip = 1178; continue _fun00013 }
 1129:
            golfie = {};
            verify = option.capturedFramesDropped;
            golfie['capturedFramesDropped'] = verify;
            verify = option.capturedFramesCount;
            golfie['capturedFramesCount'] = verify;
            verify = option.capturedFramesMean;
            golfie['capturedFramesMean'] = verify;
            option = option.capturedFramesStdev;
            golfie['capturedFramesStdev'] = option;
            oscard = golfie;
 1178:
            entity['camera'] = oscard;
            entity['clips'] = report;
            entity['audioDevice'] = michal;
            michal = {};
            michal['inbound'] = tangon;
            michal['outbound'] = zuuluu;
            entity['rtp'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();