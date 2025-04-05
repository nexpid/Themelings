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
            if(verify) { _fun00008_ip = 502; continue _fun00007 }
 496:
            option = golfie.firPackets;
 502:
            verify = tangon != option;
            golfie = 0;
            if(!verify) { _fun00008_ip = 514; continue _fun00007 }
 511:
            golfie = option;
 514:
            entity['firCount'] = golfie;
            golfie = zuuluu.rtcpStats;
            verify = tangon == golfie;
            option = undefined;
            if(verify) { _fun00008_ip = 540; continue _fun00007 }
 534:
            option = golfie.nackPackets;
 540:
            verify = tangon != option;
            golfie = 0;
            if(!verify) { _fun00008_ip = 552; continue _fun00007 }
 549:
            golfie = option;
 552:
            entity['nackCount'] = golfie;
            option = zuuluu.rtcpStats;
            verify = tangon == option;
            golfie = undefined;
            if(verify) { _fun00008_ip = 578; continue _fun00007 }
 572:
            golfie = option.pliPackets;
 578:
            option = tangon != golfie;
            oscard = 0;
            if(!option) { _fun00008_ip = 590; continue _fun00007 }
 587:
            oscard = golfie;
 590:
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
            if(option) { _fun00008_ip = 697; continue _fun00007 }
 689:
            golfie = oscard.imageQualityVmaf_v061;
 697:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 709; continue _fun00007 }
 706:
            oscard = golfie;
 709:
            entity['encoderQualityVmaf'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 737; continue _fun00007 }
 729:
            golfie = oscard.imageQualityWebrtcPsnrDb;
 737:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 749; continue _fun00007 }
 746:
            oscard = golfie;
 749:
            entity['encoderQualityPsnr'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 777; continue _fun00007 }
 769:
            golfie = oscard.decodeErrors;
 777:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 789; continue _fun00007 }
 786:
            oscard = golfie;
 789:
            entity['qualityDecodeErrors'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 817; continue _fun00007 }
 809:
            golfie = oscard.decoderReboots;
 817:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 829; continue _fun00007 }
 826:
            oscard = golfie;
 829:
            entity['qualityDecoderReboots'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 857; continue _fun00007 }
 849:
            golfie = oscard.scoreErrors;
 857:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 869; continue _fun00007 }
 866:
            oscard = golfie;
 869:
            entity['qualityScoreErrors'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 897; continue _fun00007 }
 889:
            golfie = oscard.frameDrops;
 897:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 909; continue _fun00007 }
 906:
            oscard = golfie;
 909:
            entity['qualityFrameDrops'] = oscard;
            oscard = zuuluu.encoderQualityStats;
            option = tangon == oscard;
            golfie = undefined;
            if(option) { _fun00008_ip = 937; continue _fun00007 }
 929:
            golfie = oscard.sizeMismatches;
 937:
            option = tangon != golfie;
            oscard = undefined;
            if(!option) { _fun00008_ip = 949; continue _fun00007 }
 946:
            oscard = golfie;
 949:
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
            if(golfie) { _fun00008_ip = 1096; continue _fun00007 }
 1090:
            report = oscard.freezeCount;
 1096:
            entity['freezeCount'] = report;
            oscard = zuuluu.encoderQualityStats;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00008_ip = 1122; continue _fun00007 }
 1116:
            report = oscard.totalFreezesDuration;
 1122:
            entity['totalFreezesDuration'] = report;
            oscard = zuuluu.encoderQualityStats;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00008_ip = 1148; continue _fun00007 }
 1142:
            report = oscard.totalFramesDuration;
 1148:
            entity['totalFramesDuration'] = report;
            zuuluu = zuuluu.encoderQualityStats;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00008_ip = 1176; continue _fun00007 }
 1168:
            michal = zuuluu.interFrameEntropy;
 1176:
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
            if(!(oscard != michal)) { _fun00014_ip = 647; continue _fun00013 }
 83:
            michal = entity.outbound;
            offset = michal.audio;
            golfie = michal.video;
            report = michal.videos;
            if(!(oscard != offset)) { _fun00014_ip = 562; continue _fun00013 }
 114:
            michal = _closure2_slot3;
            michal = oscard != michal;
            sizing = 0;
            tangon = 0;
            if(!michal) { _fun00014_ip = 133; continue _fun00013 }
 129:
            tangon = _closure2_slot3;
 133:
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
            yankee = offset.mediaBitrate;
            michal['bitrate'] = yankee;
            yankee = offset.targetMediaBitrate;
            michal['bitrateTarget'] = yankee;
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
            yankee = offset.pttQueueLatencyMicrosSamples;
            michal['pttQueueLatencyMicrosSamples'] = yankee;
            offset = offset.sampleRateMismatchPercent;
            michal['sampleRateMismatchPercent'] = offset;
            michal = tangon.bind(zuuluu)(michal);
 562:
            if(!(oscard == report)) { _fun00014_ip = 632; continue _fun00013 }
 566:
            if(!(oscard != golfie)) { _fun00014_ip = 647; continue _fun00013 }
 570:
            tangon = _closure1_slot6;
            michal = undefined;
            tangon = tangon.bind(michal)(golfie, verify);
            if(!(oscard != tangon)) { _fun00014_ip = 647; continue _fun00013 }
 589:
            michal = _closure2_slot3;
            michal = oscard != michal;
            golfie = 0;
            if(!michal) { _fun00014_ip = 606; continue _fun00013 }
 602:
            golfie = _closure2_slot3;
 606:
            michal = tangon.bytesSent;
            michal = golfie + michal;
            _closure2_slot3 = michal;
            michal = zuuluu.push;
            michal = michal.bind(zuuluu)(tangon);
            _fun00014_ip = 647; continue _fun00013;
 632:
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
                    if(!(report != tangon)) { _fun00016_ip = 76; continue _fun00015 }
 31:
                    zuuluu = _closure2_slot3;
                    zuuluu = report != zuuluu;
                    report = 0;
                    if(!zuuluu) { _fun00016_ip = 48; continue _fun00015 }
 44:
                    report = _closure2_slot3;
 48:
                    zuuluu = tangon.bytesSent;
                    zuuluu = report + zuuluu;
                    _closure2_slot3 = zuuluu;
                    zuuluu = _closure2_slot4;
                    michal = zuuluu.push;
                    michal = michal.bind(zuuluu)(tangon);
 76:
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
 647:
            tangon = {};
            var _closure2_slot5 = tangon;
            michal = entity.inbound;
            if(!(oscard != michal)) { _fun00014_ip = 684; continue _fun00013 }
 663:
            golfie = entity.inbound;
            report = golfie.forEach;
            michal = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.id;
                    var _closure3_slot0 = tangon;
                    offset = michal.audio;
                    oscard = michal.video;
                    zuuluu = michal.videos;
                    romeon = michal.playout;
                    var _closure3_slot1 = romeon;
                    golfie = _closure2_slot5;
                    report = new Array(0);
                    golfie[tangon] = report;
                    option = null;
                    if(!(option != offset)) { _fun00018_ip = 789; continue _fun00017 }
 68:
                    report = _closure2_slot2;
                    report = option != report;
                    sizing = 0;
                    golfie = 0;
                    if(!report) { _fun00018_ip = 87; continue _fun00017 }
 83:
                    golfie = _closure2_slot2;
 87:
                    report = offset.bytesReceived;
                    report = golfie + report;
                    _closure2_slot2 = report;
                    report = _closure2_slot5;
                    verify = report[tangon];
                    golfie = verify.push;
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
                    if(!(option == romeon)) { _fun00018_ip = 697; continue _fun00017 }
 693:
                    offset = {};
                    _fun00018_ip = 774; continue _fun00017;
 697:
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
 774:
                    config = report;
                    sequen = offset;
                    offset = copyDataProperties(config, sequen);
                    report = golfie.bind(verify)(report);
 789:
                    if(!(option == zuuluu)) { _fun00018_ip = 890; continue _fun00017 }
 793:
                    if(!(option != oscard)) { _fun00018_ip = 905; continue _fun00017 }
 797:
                    yankee = _closure1_slot7;
                    sequen = _closure2_slot0;
                    vacuum = _closure2_slot1;
                    verify = undefined;
                    record = undefined;
                    config = oscard;
                    ctrled = romeon;
                    report = record[yankee](config, sequen, vacuum, ctrled, source);
                    if(!(option != report)) { _fun00018_ip = 905; continue _fun00017 }
 830:
                    golfie = _closure1_slot3;
                    oscard = oscard.rtpStats;
                    golfie = golfie.bind(verify)(oscard);
                    oscard = _closure2_slot2;
                    option = option != oscard;
                    oscard = 0;
                    if(!option) { _fun00018_ip = 862; continue _fun00017 }
 858:
                    oscard = _closure2_slot2;
 862:
                    oscard = oscard + golfie;
                    _closure2_slot2 = oscard;
                    michal = _closure2_slot5;
                    tangon = michal[tangon];
                    michal = tangon.push;
                    michal = michal.bind(tangon)(report);
                    _fun00018_ip = 905; continue _fun00017;
 890:
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            report = argFoo;
                            verify = _closure1_slot7;
                            romeon = _closure2_slot0;
                            yankee = _closure2_slot1;
                            offset = _closure3_slot1;
                            entity = undefined;
                            backup = undefined;
                            foxtra = report;
                            tangon = backup[verify](foxtra, romeon, yankee, offset, verify);
                            golfie = null;
                            if(!(golfie != tangon)) { _fun00020_ip = 107; continue _fun00019 }
 45:
                            oscard = _closure1_slot3;
                            report = report.rtpStats;
                            oscard = oscard.bind(entity)(report);
                            report = _closure2_slot2;
                            golfie = golfie != report;
                            report = 0;
                            if(!golfie) { _fun00020_ip = 77; continue _fun00019 }
 73:
                            report = _closure2_slot2;
 77:
                            report = report + oscard;
                            _closure2_slot2 = report;
                            zuuluu = _closure2_slot5;
                            michal = _closure3_slot0;
                            zuuluu = zuuluu[michal];
                            michal = zuuluu.push;
                            michal = michal.bind(zuuluu)(tangon);
 107:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
 905:
                    entity = undefined;
                    return entity;
                }
            };
            michal = report.bind(golfie)(michal);
 684:
            offset = entity.transport;
            report = entity.clips;
            verify = {};
            if(!(oscard != offset)) { _fun00014_ip = 905; continue _fun00013 }
 705:
            michal = offset.sendBandwidth;
            verify['availableOutgoingBitrate'] = michal;
            michal = offset.rtt;
            verify['ping'] = michal;
            michal = offset.decryptionFailures;
            verify['decryptionFailures'] = michal;
            michal = offset.routingFailures;
            if(!(oscard != michal)) { _fun00014_ip = 765; continue _fun00013 }
 753:
            michal = offset.routingFailures;
            verify['routingFailures'] = michal;
 765:
            michal = offset.localAddress;
            verify['localAddress'] = michal;
            michal = offset.pacerDelay;
            verify['pacerDelay'] = michal;
            michal = offset.receiverReports;
            if(!(oscard != michal)) { _fun00014_ip = 811; continue _fun00013 }
 799:
            michal = offset.receiverReports;
            verify['receiverReports'] = michal;
 811:
            michal = offset.receiverBitrateEstimate;
            verify['receiverBitrateEstimate'] = michal;
            michal = offset.outboundBitrateEstimate;
            verify['outboundBitrateEstimate'] = michal;
            golfie = offset.inboundBitrateEstimate;
            yankee = oscard != golfie;
            michal = 0;
            if(!yankee) { _fun00014_ip = 853; continue _fun00013 }
 850:
            michal = golfie;
 853:
            verify['inboundBitrateEstimate'] = michal;
            michal = offset.packetsReceived;
            verify['packetsReceived'] = michal;
            michal = offset.packetsSent;
            verify['packetsSent'] = michal;
            michal = offset.secureFramesProtocolVersion;
            if(!(oscard != michal)) { _fun00014_ip = 905; continue _fun00013 }
 893:
            michal = offset.secureFramesProtocolVersion;
            verify['secureFramesProtocolVersion'] = michal;
 905:
            yankee = oscard == offset;
            golfie = undefined;
            if(yankee) { _fun00014_ip = 920; continue _fun00013 }
 914:
            golfie = offset.bytesReceived;
 920:
            golfie = oscard != golfie;
            if(golfie) { _fun00014_ip = 967; continue _fun00013 }
 927:
            yankee = _closure2_slot2;
            yankee = oscard != yankee;
            if(!yankee) { _fun00014_ip = 964; continue _fun00013 }
 938:
            romeon = global;
            backup = romeon.Number;
            foxtra = backup.isNaN;
            romeon = _closure2_slot2;
            romeon = foxtra.bind(backup)(romeon);
            yankee = !romeon;
 964:
            golfie = yankee;
 967:
            if(!golfie) { _fun00014_ip = 1011; continue _fun00013 }
 970:
            golfie = oscard == offset;
            yankee = undefined;
            if(golfie) { _fun00014_ip = 985; continue _fun00013 }
 979:
            yankee = offset.bytesReceived;
 985:
            if(!(oscard == yankee)) { _fun00014_ip = 993; continue _fun00013 }
 989:
            yankee = _closure2_slot2;
 993:
            romeon = oscard != yankee;
            golfie = undefined;
            if(!romeon) { _fun00014_ip = 1005; continue _fun00013 }
 1002:
            golfie = yankee;
 1005:
            verify['bytesReceived'] = golfie;
 1011:
            yankee = oscard == offset;
            golfie = undefined;
            if(yankee) { _fun00014_ip = 1026; continue _fun00013 }
 1020:
            golfie = offset.bytesSent;
 1026:
            golfie = oscard != golfie;
            if(golfie) { _fun00014_ip = 1073; continue _fun00013 }
 1033:
            yankee = _closure2_slot3;
            yankee = oscard != yankee;
            if(!yankee) { _fun00014_ip = 1070; continue _fun00013 }
 1044:
            romeon = global;
            backup = romeon.Number;
            foxtra = backup.isNaN;
            romeon = _closure2_slot3;
            romeon = foxtra.bind(backup)(romeon);
            yankee = !romeon;
 1070:
            golfie = yankee;
 1073:
            if(!golfie) { _fun00014_ip = 1117; continue _fun00013 }
 1076:
            yankee = oscard == offset;
            golfie = undefined;
            if(yankee) { _fun00014_ip = 1091; continue _fun00013 }
 1085:
            golfie = offset.bytesSent;
 1091:
            if(!(oscard == golfie)) { _fun00014_ip = 1099; continue _fun00013 }
 1095:
            golfie = _closure2_slot3;
 1099:
            option = oscard != golfie;
            michal = undefined;
            if(!option) { _fun00014_ip = 1111; continue _fun00013 }
 1108:
            michal = golfie;
 1111:
            verify['bytesSent'] = michal;
 1117:
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
            if(!golfie) { _fun00014_ip = 1213; continue _fun00013 }
 1164:
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
 1213:
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