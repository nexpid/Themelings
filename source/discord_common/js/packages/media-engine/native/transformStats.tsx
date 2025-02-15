// discord_common/js/packages/media-engine/native/transformStats.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = function(argFoo) { // Original name: convertAudioLevel
        mike = argFoo;
        entity = 32768;
        entity = mike / entity;
        return entity;
    };
    var _closure1_slot2 = entity;
    entity = function(argFoo) { // Original name: sumBytes
        _fun50693: for(var _fun50693_ip = 0; ; ) switch(_fun50693_ip) {
 0:
            oscar = argFoo;
            report = null;
            mike = report == oscar;
            entity = undefined;
            if(mike) { _fun50693_ip = 20; continue _fun50693 }
 14:
            entity = oscar.headerBytes;
 20:
            tango = report != entity;
            mike = 0;
            if(!tango) { _fun50693_ip = 32; continue _fun50693 }
 29:
            mike = entity;
 32:
            entity = report == oscar;
            tango = undefined;
            if(entity) { _fun50693_ip = 47; continue _fun50693 }
 41:
            tango = oscar.payloadBytes;
 47:
            golf = report != tango;
            entity = 0;
            if(!golf) { _fun50693_ip = 59; continue _fun50693 }
 56:
            entity = tango;
 59:
            mike = mike + entity;
            entity = report == oscar;
            tango = undefined;
            if(entity) { _fun50693_ip = 78; continue _fun50693 }
 72:
            tango = oscar.paddingBytes;
 78:
            golf = report != tango;
            entity = 0;
            if(!golf) { _fun50693_ip = 90; continue _fun50693 }
 87:
            entity = tango;
 90:
            mike = mike + entity;
            tango = report == oscar;
            entity = undefined;
            if(tango) { _fun50693_ip = 124; continue _fun50693 }
 103:
            tango = oscar.fec;
            golf = report == tango;
            entity = undefined;
            if(golf) { _fun50693_ip = 124; continue _fun50693 }
 118:
            entity = tango.headerBytes;
 124:
            golf = report != entity;
            tango = 0;
            if(!golf) { _fun50693_ip = 136; continue _fun50693 }
 133:
            tango = entity;
 136:
            entity = report == oscar;
            golf = undefined;
            if(entity) { _fun50693_ip = 166; continue _fun50693 }
 145:
            entity = oscar.fec;
            verify = report == entity;
            golf = undefined;
            if(verify) { _fun50693_ip = 166; continue _fun50693 }
 160:
            golf = entity.payloadBytes;
 166:
            verify = report != golf;
            entity = 0;
            if(!verify) { _fun50693_ip = 178; continue _fun50693 }
 175:
            entity = golf;
 178:
            tango = tango + entity;
            entity = report == oscar;
            golf = undefined;
            if(entity) { _fun50693_ip = 212; continue _fun50693 }
 191:
            entity = oscar.fec;
            verify = report == entity;
            golf = undefined;
            if(verify) { _fun50693_ip = 212; continue _fun50693 }
 206:
            golf = entity.paddingBytes;
 212:
            verify = report != golf;
            entity = 0;
            if(!verify) { _fun50693_ip = 224; continue _fun50693 }
 221:
            entity = golf;
 224:
            tango = tango + entity;
            entity = report == oscar;
            golf = undefined;
            if(entity) { _fun50693_ip = 258; continue _fun50693 }
 237:
            entity = oscar.retransmitted;
            verify = report == entity;
            golf = undefined;
            if(verify) { _fun50693_ip = 258; continue _fun50693 }
 252:
            golf = entity.headerBytes;
 258:
            verify = report != golf;
            entity = 0;
            if(!verify) { _fun50693_ip = 270; continue _fun50693 }
 267:
            entity = golf;
 270:
            tango = tango + entity;
            entity = report == oscar;
            golf = undefined;
            if(entity) { _fun50693_ip = 304; continue _fun50693 }
 283:
            entity = oscar.retransmitted;
            verify = report == entity;
            golf = undefined;
            if(verify) { _fun50693_ip = 304; continue _fun50693 }
 298:
            golf = entity.payloadBytes;
 304:
            verify = report != golf;
            entity = 0;
            if(!verify) { _fun50693_ip = 316; continue _fun50693 }
 313:
            entity = golf;
 316:
            tango = tango + entity;
            entity = report == oscar;
            golf = undefined;
            if(entity) { _fun50693_ip = 350; continue _fun50693 }
 329:
            entity = oscar.retransmitted;
            verify = report == entity;
            golf = undefined;
            if(verify) { _fun50693_ip = 350; continue _fun50693 }
 344:
            golf = entity.paddingBytes;
 350:
            verify = report != golf;
            entity = 0;
            if(!verify) { _fun50693_ip = 362; continue _fun50693 }
 359:
            entity = golf;
 362:
            tango = tango + entity;
            entity = report == oscar;
            golf = undefined;
            if(entity) { _fun50693_ip = 396; continue _fun50693 }
 375:
            entity = oscar.transmitted;
            verify = report == entity;
            golf = undefined;
            if(verify) { _fun50693_ip = 396; continue _fun50693 }
 390:
            golf = entity.headerBytes;
 396:
            verify = report != golf;
            entity = 0;
            if(!verify) { _fun50693_ip = 408; continue _fun50693 }
 405:
            entity = golf;
 408:
            tango = tango + entity;
            entity = report == oscar;
            golf = undefined;
            if(entity) { _fun50693_ip = 442; continue _fun50693 }
 421:
            entity = oscar.transmitted;
            verify = report == entity;
            golf = undefined;
            if(verify) { _fun50693_ip = 442; continue _fun50693 }
 436:
            golf = entity.payloadBytes;
 442:
            verify = report != golf;
            entity = 0;
            if(!verify) { _fun50693_ip = 454; continue _fun50693 }
 451:
            entity = golf;
 454:
            entity = tango + entity;
            golf = report == oscar;
            tango = undefined;
            if(golf) { _fun50693_ip = 488; continue _fun50693 }
 467:
            oscar = oscar.transmitted;
            golf = report == oscar;
            tango = undefined;
            if(golf) { _fun50693_ip = 488; continue _fun50693 }
 482:
            tango = oscar.paddingBytes;
 488:
            report = report != tango;
            zulu = 0;
            if(!report) { _fun50693_ip = 500; continue _fun50693 }
 497:
            zulu = tango;
 500:
            entity = entity + zulu;
            entity = entity + mike;
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = function(argFoo) { // Original name: sumPackets
        _fun50694: for(var _fun50694_ip = 0; ; ) switch(_fun50694_ip) {
 0:
            oscar = argFoo;
            report = null;
            mike = report == oscar;
            entity = undefined;
            if(mike) { _fun50694_ip = 20; continue _fun50694 }
 14:
            entity = oscar.packets;
 20:
            tango = report != entity;
            mike = 0;
            if(!tango) { _fun50694_ip = 32; continue _fun50694 }
 29:
            mike = entity;
 32:
            tango = report == oscar;
            entity = undefined;
            if(tango) { _fun50694_ip = 62; continue _fun50694 }
 41:
            tango = oscar.fec;
            golf = report == tango;
            entity = undefined;
            if(golf) { _fun50694_ip = 62; continue _fun50694 }
 56:
            entity = tango.packets;
 62:
            golf = report != entity;
            tango = 0;
            if(!golf) { _fun50694_ip = 74; continue _fun50694 }
 71:
            tango = entity;
 74:
            entity = report == oscar;
            golf = undefined;
            if(entity) { _fun50694_ip = 104; continue _fun50694 }
 83:
            entity = oscar.retransmitted;
            verify = report == entity;
            golf = undefined;
            if(verify) { _fun50694_ip = 104; continue _fun50694 }
 98:
            golf = entity.packets;
 104:
            verify = report != golf;
            entity = 0;
            if(!verify) { _fun50694_ip = 116; continue _fun50694 }
 113:
            entity = golf;
 116:
            entity = tango + entity;
            golf = report == oscar;
            tango = undefined;
            if(golf) { _fun50694_ip = 150; continue _fun50694 }
 129:
            oscar = oscar.transmitted;
            golf = report == oscar;
            tango = undefined;
            if(golf) { _fun50694_ip = 150; continue _fun50694 }
 144:
            tango = oscar.packets;
 150:
            report = report != tango;
            zulu = 0;
            if(!report) { _fun50694_ip = 162; continue _fun50694 }
 159:
            zulu = tango;
 162:
            entity = entity + zulu;
            entity = entity + mike;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = function(argFoo) { // Original name: transformPlayoutStats
        _fun50695: for(var _fun50695_ip = 0; ; ) switch(_fun50695_ip) {
 0:
            offset = argFoo;
            entity = {};
            options = offset;
            tango = global;
            zulu = 1000;
            mike = null;
            for(report in options)
 29:
            {
 41:
                romeo = report;
                backup = offset[romeo];
                foxtrot = mike != backup;
                yankee = null;
                if(!foxtrot) { _fun50695_ip = 249; continue _fun50695 }
 60:
                foxtrot = {};
                output = tango.Math;
                sizing = output.round;
                kilo = backup.last;
                kilo = zulu * kilo;
                kilo = sizing.bind(output)(kilo);
                foxtrot['last'] = kilo;
                output = tango.Math;
                sizing = output.round;
                kilo = backup.mean;
                kilo = zulu * kilo;
                kilo = sizing.bind(output)(kilo);
                foxtrot['mean'] = kilo;
                output = tango.Math;
                sizing = output.round;
                kilo = backup.p75;
                kilo = zulu * kilo;
                kilo = sizing.bind(output)(kilo);
                foxtrot['p75'] = kilo;
                output = tango.Math;
                sizing = output.round;
                kilo = backup.p95;
                kilo = zulu * kilo;
                kilo = sizing.bind(output)(kilo);
                foxtrot['p95'] = kilo;
                output = tango.Math;
                sizing = output.round;
                kilo = backup.p99;
                kilo = zulu * kilo;
                kilo = sizing.bind(output)(kilo);
                foxtrot['p99'] = kilo;
                sizing = tango.Math;
                kilo = sizing.round;
                backup = backup.max;
                backup = zulu * backup;
                backup = kilo.bind(sizing)(backup);
                foxtrot['max'] = backup;
                yankee = foxtrot;
 249:
                entity[romeo] = yankee;
                _fun50695_ip = 29; continue _fun50695;
            }
 258:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo, argBar) { // Original name: transformOutboundVideoStats
        _fun50696: for(var _fun50696_ip = 0; ; ) switch(_fun50696_ip) {
 0:
            report = argFoo;
            romeo = argBar;
            tango = report.substreams;
            zulu = tango.find;
            mike = function(argFoo) {
                _fun50697: for(var _fun50697_ip = 0; ; ) switch(_fun50697_ip) {
 0:
                    mike = argFoo;
                    entity = mike.isRTX;
                    entity = !entity;
                    if(!entity) { _fun50697_ip = 28; continue _fun50697 }
 17:
                    mike = mike.isFlexFEC;
                    entity = !mike;
 28:
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            tango = null;
            if(!(tango == zulu)) { _fun50696_ip = 39; continue _fun50696 }
 35:
            mike = undefined;
            return mike;
 39:
            options = report.substreams;
            golf = options.reduce;
            mike = function(argFoo, argBar) {
                zulu = _closure1_slot3;
                entity = argBar;
                mike = entity.rtpStats;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = argFoo;
                entity = entity + mike;
                return entity;
            };
            oscar = 0;
            options = golf.bind(options)(mike, oscar);
            golf = report.substreams;
            mike = golf.reduce;
            entity = function(argFoo, argBar) {
                zulu = _closure1_slot4;
                entity = argBar;
                mike = entity.rtpStats;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = argFoo;
                entity = entity + mike;
                return entity;
            };
            golf = mike.bind(golf)(entity, oscar);
            entity = {};
            mike = 'video';
            entity['type'] = mike;
            mike = zulu.ssrc;
            entity['ssrc'] = mike;
            offset = _closure1_slot0;
            verify = _closure1_slot1;
            yankee = verify[oscar];
            mike = undefined;
            kilo = offset.bind(mike)(yankee);
            backup = kilo.formatSinkWantStat;
            foxtrot = zulu.ssrc;
            yankee = true;
            yankee = backup.bind(kilo)(romeo, foxtrot, yankee);
            entity['sinkWant'] = yankee;
            verify = verify[oscar];
            yankee = offset.bind(mike)(verify);
            offset = yankee.formatSinkWantAsInt;
            verify = zulu.ssrc;
            verify = offset.bind(yankee)(romeo, verify);
            entity['sinkWantAsInt'] = verify;
            verify = {};
            offset = report.codecPayloadType;
            verify['id'] = offset;
            offset = report.codecName;
            verify['name'] = offset;
            entity['codec'] = verify;
            verify = report.keyFrameInterval;
            entity['keyFrameInterval'] = verify;
            entity['bytesSent'] = options;
            entity['packetsSent'] = golf;
            golf = zulu.rtcpStats;
            verify = tango == golf;
            options = undefined;
            if(verify) { _fun50696_ip = 257; continue _fun50696 }
 251:
            options = golf.packetsLost;
 257:
            verify = tango != options;
            golf = 0;
            if(!verify) { _fun50696_ip = 269; continue _fun50696 }
 266:
            golf = options;
 269:
            entity['packetsLost'] = golf;
            golf = zulu.rtcpStats;
            verify = tango == golf;
            options = undefined;
            if(verify) { _fun50696_ip = 295; continue _fun50696 }
 289:
            options = golf.fractionLost;
 295:
            verify = tango != options;
            golf = 0;
            if(!verify) { _fun50696_ip = 307; continue _fun50696 }
 304:
            golf = options;
 307:
            entity['fractionLost'] = golf;
            golf = report.mediaBitrate;
            entity['bitrate'] = golf;
            golf = report.targetMediaBitrate;
            entity['bitrateTarget'] = golf;
            golf = report.encoderImplementationName;
            entity['encoderImplementationName'] = golf;
            golf = report.encodeUsage;
            entity['encodeUsage'] = golf;
            golf = report.avgEncodeTime;
            entity['averageEncodeTime'] = golf;
            golf = {};
            options = zulu.height;
            golf['height'] = options;
            options = zulu.width;
            golf['width'] = options;
            entity['resolution'] = golf;
            golf = zulu.frameCounts;
            options = golf.keyFrames;
            golf = zulu.frameCounts;
            golf = golf.deltaFrames;
            golf = options + golf;
            entity['framesSent'] = golf;
            golf = zulu.frameCounts;
            golf = golf.keyFrames;
            entity['keyFramesEncoded'] = golf;
            golf = report.framesEncoded;
            entity['framesEncoded'] = golf;
            golf = report.inputFrameRate;
            entity['frameRateInput'] = golf;
            golf = report.encodeFrameRate;
            entity['frameRateEncode'] = golf;
            golf = zulu.rtcpStats;
            verify = tango == golf;
            options = undefined;
            if(verify) { _fun50696_ip = 506; continue _fun50696 }
 500:
            options = golf.firPackets;
 506:
            verify = tango != options;
            golf = 0;
            if(!verify) { _fun50696_ip = 518; continue _fun50696 }
 515:
            golf = options;
 518:
            entity['firCount'] = golf;
            golf = zulu.rtcpStats;
            verify = tango == golf;
            options = undefined;
            if(verify) { _fun50696_ip = 544; continue _fun50696 }
 538:
            options = golf.nackPackets;
 544:
            verify = tango != options;
            golf = 0;
            if(!verify) { _fun50696_ip = 556; continue _fun50696 }
 553:
            golf = options;
 556:
            entity['nackCount'] = golf;
            options = zulu.rtcpStats;
            verify = tango == options;
            golf = undefined;
            if(verify) { _fun50696_ip = 582; continue _fun50696 }
 576:
            golf = options.pliPackets;
 582:
            options = tango != golf;
            oscar = 0;
            if(!options) { _fun50696_ip = 594; continue _fun50696 }
 591:
            oscar = golf;
 594:
            entity['pliCount'] = oscar;
            oscar = report.qpSum;
            entity['qpSum'] = oscar;
            oscar = report.bwLimitedResolution;
            entity['bandwidthLimitedResolution'] = oscar;
            oscar = report.framesDroppedRateLimiter;
            entity['framesDroppedRateLimiter'] = oscar;
            oscar = report.framesDroppedEncoderQueue;
            entity['framesDroppedEncoderQueue'] = oscar;
            oscar = report.framesDroppedCongestionWindow;
            entity['framesDroppedCongestionWindow'] = oscar;
            oscar = report.framesDroppedEncoder;
            entity['framesDroppedEncoder'] = oscar;
            oscar = report.cpuLimitedResolution;
            entity['cpuLimitedResolution'] = oscar;
            oscar = zulu.encoderQualityStats;
            options = tango == oscar;
            golf = undefined;
            if(options) { _fun50696_ip = 701; continue _fun50696 }
 693:
            golf = oscar.imageQualityVmaf_v061;
 701:
            options = tango != golf;
            oscar = undefined;
            if(!options) { _fun50696_ip = 713; continue _fun50696 }
 710:
            oscar = golf;
 713:
            entity['encoderQualityVmaf'] = oscar;
            oscar = zulu.encoderQualityStats;
            options = tango == oscar;
            golf = undefined;
            if(options) { _fun50696_ip = 741; continue _fun50696 }
 733:
            golf = oscar.imageQualityWebrtcPsnrDb;
 741:
            options = tango != golf;
            oscar = undefined;
            if(!options) { _fun50696_ip = 753; continue _fun50696 }
 750:
            oscar = golf;
 753:
            entity['encoderQualityPsnr'] = oscar;
            oscar = zulu.encoderQualityStats;
            options = tango == oscar;
            golf = undefined;
            if(options) { _fun50696_ip = 781; continue _fun50696 }
 773:
            golf = oscar.decodeErrors;
 781:
            options = tango != golf;
            oscar = undefined;
            if(!options) { _fun50696_ip = 793; continue _fun50696 }
 790:
            oscar = golf;
 793:
            entity['qualityDecodeErrors'] = oscar;
            oscar = zulu.encoderQualityStats;
            options = tango == oscar;
            golf = undefined;
            if(options) { _fun50696_ip = 821; continue _fun50696 }
 813:
            golf = oscar.decoderReboots;
 821:
            options = tango != golf;
            oscar = undefined;
            if(!options) { _fun50696_ip = 833; continue _fun50696 }
 830:
            oscar = golf;
 833:
            entity['qualityDecoderReboots'] = oscar;
            oscar = zulu.encoderQualityStats;
            options = tango == oscar;
            golf = undefined;
            if(options) { _fun50696_ip = 861; continue _fun50696 }
 853:
            golf = oscar.scoreErrors;
 861:
            options = tango != golf;
            oscar = undefined;
            if(!options) { _fun50696_ip = 873; continue _fun50696 }
 870:
            oscar = golf;
 873:
            entity['qualityScoreErrors'] = oscar;
            oscar = zulu.encoderQualityStats;
            options = tango == oscar;
            golf = undefined;
            if(options) { _fun50696_ip = 901; continue _fun50696 }
 893:
            golf = oscar.frameDrops;
 901:
            options = tango != golf;
            oscar = undefined;
            if(!options) { _fun50696_ip = 913; continue _fun50696 }
 910:
            oscar = golf;
 913:
            entity['qualityFrameDrops'] = oscar;
            oscar = zulu.encoderQualityStats;
            options = tango == oscar;
            golf = undefined;
            if(options) { _fun50696_ip = 941; continue _fun50696 }
 933:
            golf = oscar.sizeMismatches;
 941:
            options = tango != golf;
            oscar = undefined;
            if(!options) { _fun50696_ip = 953; continue _fun50696 }
 950:
            oscar = golf;
 953:
            entity['qualitySizeMismatches'] = oscar;
            oscar = report.filter;
            entity['filter'] = oscar;
            oscar = report.passthroughCount;
            entity['passthroughCount'] = oscar;
            oscar = report.encryptSuccessCount;
            entity['encryptSuccessCount'] = oscar;
            oscar = report.encryptFailureCount;
            entity['encryptFailureCount'] = oscar;
            oscar = report.encryptDuration;
            entity['encryptDuration'] = oscar;
            oscar = report.encryptAttempts;
            entity['encryptAttempts'] = oscar;
            oscar = report.encryptMaxAttempts;
            entity['encryptMaxAttempts'] = oscar;
            oscar = report.encryptMissingKeyCount;
            entity['encryptMissingKeyCount'] = oscar;
            oscar = report.hqSimulcastStreamEncoded;
            entity['hqSimulcastStreamEncoded'] = oscar;
            oscar = report.lqSimulcastStreamEncoded;
            entity['lqSimulcastStreamEncoded'] = oscar;
            report = report.bwLimitedFrameRate;
            entity['bandwidthLimitedFrameRate'] = report;
            oscar = zulu.encoderQualityStats;
            golf = tango == oscar;
            report = undefined;
            if(golf) { _fun50696_ip = 1100; continue _fun50696 }
 1094:
            report = oscar.freezeCount;
 1100:
            entity['freezeCount'] = report;
            oscar = zulu.encoderQualityStats;
            golf = tango == oscar;
            report = undefined;
            if(golf) { _fun50696_ip = 1126; continue _fun50696 }
 1120:
            report = oscar.totalFreezesDuration;
 1126:
            entity['totalFreezesDuration'] = report;
            oscar = zulu.encoderQualityStats;
            golf = tango == oscar;
            report = undefined;
            if(golf) { _fun50696_ip = 1152; continue _fun50696 }
 1146:
            report = oscar.totalFramesDuration;
 1152:
            entity['totalFramesDuration'] = report;
            zulu = zulu.encoderQualityStats;
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun50696_ip = 1180; continue _fun50696 }
 1172:
            mike = zulu.interFrameEntropy;
 1180:
            entity['videoEntropy'] = mike;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: transformInboundVideoStats
        _fun50700: for(var _fun50700_ip = 0; ; ) switch(_fun50700_ip) {
 0:
            tango = argFoo;
            sizing = argBar;
            romeo = argBaz;
            oscar = argCorge;
            mike = _closure1_slot3;
            entity = tango.rtpStats;
            report = undefined;
            options = mike.bind(report)(entity);
            mike = _closure1_slot4;
            entity = tango.rtpStats;
            mike = mike.bind(report)(entity);
            entity = {};
            golf = 'video';
            entity['type'] = golf;
            golf = tango.ssrc;
            entity['ssrc'] = golf;
            offset = _closure1_slot0;
            verify = _closure1_slot1;
            golf = 0;
            yankee = verify[golf];
            backup = offset.bind(report)(yankee);
            foxtrot = backup.formatSinkWantStat;
            yankee = tango.ssrc;
            kilo = true;
            yankee = foxtrot.bind(backup)(sizing, yankee, kilo);
            entity['sinkWant'] = yankee;
            yankee = verify[golf];
            backup = offset.bind(report)(yankee);
            foxtrot = backup.formatSinkWantAsInt;
            yankee = tango.ssrc;
            yankee = foxtrot.bind(backup)(sizing, yankee);
            entity['sinkWantAsInt'] = yankee;
            yankee = verify[golf];
            backup = offset.bind(report)(yankee);
            foxtrot = backup.formatSinkWantStat;
            yankee = tango.ssrc;
            yankee = foxtrot.bind(backup)(romeo, yankee, kilo);
            entity['sinkWantLocal'] = yankee;
            verify = verify[golf];
            yankee = offset.bind(report)(verify);
            offset = yankee.formatSinkWantAsInt;
            verify = tango.ssrc;
            verify = offset.bind(yankee)(romeo, verify);
            entity['sinkWantLocalAsInt'] = verify;
            verify = {};
            offset = tango.codecPayloadType;
            verify['id'] = offset;
            offset = tango.codecName;
            verify['name'] = offset;
            entity['codec'] = verify;
            entity['bytesReceived'] = options;
            entity['packetsReceived'] = mike;
            mike = tango.rtpStats;
            options = mike.packetsLost;
            mike = null;
            if(!(mike == options)) { _fun50700_ip = 277; continue _fun50700 }
 265:
            verify = tango.rtcpStats;
            options = verify.packetsLost;
 277:
            entity['packetsLost'] = options;
            options = tango.rtcpStats;
            options = options.fractionLost;
            entity['fractionLost'] = options;
            options = tango.totalBitrate;
            entity['bitrate'] = options;
            options = tango.jitterBuffer;
            entity['jitterBuffer'] = options;
            options = tango.currentDelay;
            entity['currentDelay'] = options;
            options = tango.targetDelay;
            entity['targetDelay'] = options;
            options = tango.minPlayoutDelay;
            entity['minPlayoutDelay'] = options;
            options = tango.renderDelay;
            entity['renderDelay'] = options;
            options = tango.decode;
            entity['averageDecodeTime'] = options;
            options = {};
            verify = tango.height;
            options['height'] = verify;
            verify = tango.width;
            options['width'] = verify;
            entity['resolution'] = options;
            options = tango.decoderImplementationName;
            entity['decoderImplementationName'] = options;
            options = tango.framesDecoded;
            entity['framesDecoded'] = options;
            options = tango.framesDropped;
            entity['framesDropped'] = options;
            options = tango.framesDecodeErrors;
            entity['framesDecodeErrors'] = options;
            options = tango.frameCounts;
            verify = options.keyFrames;
            options = tango.frameCounts;
            options = options.deltaFrames;
            options = verify + options;
            entity['framesReceived'] = options;
            options = tango.networkFramesDropped;
            verify = mike != options;
            golf = 0;
            if(!verify) { _fun50700_ip = 500; continue _fun50700 }
 497:
            golf = options;
 500:
            entity['networkFramesDropped'] = golf;
            golf = tango.frameCounts;
            golf = golf.keyFrames;
            entity['keyFramesDecoded'] = golf;
            golf = tango.decodeFrameRate;
            entity['frameRateDecode'] = golf;
            golf = tango.networkFrameRate;
            entity['frameRateNetwork'] = golf;
            golf = tango.renderFrameRate;
            entity['frameRateRender'] = golf;
            golf = tango.rtcpStats;
            golf = golf.firPackets;
            entity['firCount'] = golf;
            golf = tango.rtcpStats;
            golf = golf.nackPackets;
            entity['nackCount'] = golf;
            golf = tango.rtcpStats;
            golf = golf.pliPackets;
            entity['pliCount'] = golf;
            golf = tango.qpSum;
            entity['qpSum'] = golf;
            golf = tango.freezeCount;
            entity['freezeCount'] = golf;
            golf = tango.pauseCount;
            entity['pauseCount'] = golf;
            golf = tango.totalFreezesDuration;
            entity['totalFreezesDuration'] = golf;
            golf = tango.totalPausesDuration;
            entity['totalPausesDuration'] = golf;
            golf = tango.totalFramesDuration;
            entity['totalFramesDuration'] = golf;
            golf = tango.sumOfSquaredFramesDurations;
            entity['sumOfSquaredFramesDurations'] = golf;
            golf = tango.passthroughCount;
            entity['passthroughCount'] = golf;
            golf = tango.decryptSuccessCount;
            entity['decryptSuccessCount'] = golf;
            golf = tango.decryptFailureCount;
            entity['decryptFailureCount'] = golf;
            golf = tango.decryptDuration;
            entity['decryptDuration'] = golf;
            golf = tango.decryptAttempts;
            entity['decryptAttempts'] = golf;
            golf = tango.decryptMissingKeyCount;
            entity['decryptMissingKeyCount'] = golf;
            tango = tango.decryptInvalidNonceCount;
            entity['decryptInvalidNonceCount'] = tango;
            if(!(mike == oscar)) { _fun50700_ip = 774; continue _fun50700 }
 770:
            mike = {};
            _fun50700_ip = 818; continue _fun50700;
 774:
            tango = _closure1_slot5;
            zulu = {};
            golf = oscar.videoJitterBuffer;
            zulu['videoJitterBuffer'] = golf;
            golf = oscar.videoJitterDelay;
            zulu['videoJitterDelay'] = golf;
            oscar = oscar.videoJitterTarget;
            zulu['videoJitterTarget'] = oscar;
            mike = tango.bind(report)(zulu);
 818:
            echo = entity;
            result = mike;
            mike = copyDataProperties(echo, result);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/native/transformStats.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: transformStats
        _fun50701: for(var _fun50701_ip = 0; ; ) switch(_fun50701_ip) {
 0:
            tango = argBar;
            verify = argBaz;
            var _closure2_slot0 = verify;
            entity = argCorge;
            var _closure2_slot1 = entity;
            oscar = null;
            var _closure2_slot2 = oscar;
            var _closure2_slot3 = oscar;
            zulu = 'string';
            mike = typeof tango;
            entity = tango;
            if(!(zulu === mike)) { _fun50701_ip = 62; continue _fun50701 }
 43:
            mike = global;
            zulu = mike.JSON;
            mike = zulu.parse;
            entity = mike.bind(zulu)(tango);
 62:
            zulu = new Array(0);
            var _closure2_slot4 = zulu;
            mike = entity.outbound;
            if(!(oscar != mike)) { _fun50701_ip = 612; continue _fun50701 }
 83:
            mike = entity.outbound;
            offset = mike.audio;
            golf = mike.video;
            report = mike.videos;
            if(!(oscar != offset)) { _fun50701_ip = 528; continue _fun50701 }
 114:
            mike = _closure2_slot3;
            yankee = oscar != mike;
            sizing = 0;
            tango = 0;
            if(!yankee) { _fun50701_ip = 132; continue _fun50701 }
 129:
            tango = mike;
 132:
            mike = offset.bytesSent;
            mike = tango + mike;
            _closure2_slot3 = mike;
            tango = zulu.push;
            mike = {};
            yankee = 'audio';
            mike['type'] = yankee;
            yankee = offset.ssrc;
            mike['ssrc'] = yankee;
            backup = _closure1_slot0;
            romeo = _closure1_slot1;
            kilo = romeo[sizing];
            foxtrot = undefined;
            echo = backup.bind(foxtrot)(kilo);
            result = echo.formatSinkWantStat;
            output = offset.ssrc;
            kilo = false;
            kilo = result.bind(echo)(verify, output, kilo);
            mike['sinkWant'] = kilo;
            romeo = romeo[sizing];
            kilo = backup.bind(foxtrot)(romeo);
            backup = kilo.formatSinkWantAsInt;
            romeo = offset.ssrc;
            romeo = backup.bind(kilo)(verify, romeo);
            mike['sinkWantAsInt'] = romeo;
            romeo = {};
            backup = offset.codecPayloadType;
            romeo['id'] = backup;
            backup = offset.codecName;
            romeo['name'] = backup;
            mike['codec'] = romeo;
            romeo = offset.bytesSent;
            mike['bytesSent'] = romeo;
            romeo = offset.packetsSent;
            mike['packetsSent'] = romeo;
            romeo = global;
            kilo = romeo.Math;
            backup = kilo.max;
            romeo = offset.packetsLost;
            romeo = backup.bind(kilo)(sizing, romeo);
            mike['packetsLost'] = romeo;
            backup = offset.fractionLost;
            romeo = 100;
            romeo = romeo * backup;
            mike['fractionLost'] = romeo;
            romeo = _closure1_slot2;
            yankee = offset.audioLevel;
            yankee = romeo.bind(foxtrot)(yankee);
            mike['audioLevel'] = yankee;
            yankee = offset.speaking;
            mike['audioDetected'] = yankee;
            yankee = offset.framesCaptured;
            mike['framesCaptured'] = yankee;
            yankee = offset.framesRendered;
            mike['framesRendered'] = yankee;
            yankee = offset.noiseCancellerFrames;
            mike['noiseCancellerFrames'] = yankee;
            yankee = offset.noiseCancellerProcessTime;
            mike['noiseCancellerProcessTime'] = yankee;
            yankee = offset.voiceActivityDetectorProcessTime;
            mike['voiceActivityDetectorProcessTime'] = yankee;
            yankee = offset.passthroughCount;
            mike['passthroughCount'] = yankee;
            yankee = offset.encryptSuccessCount;
            mike['encryptSuccessCount'] = yankee;
            yankee = offset.encryptFailureCount;
            mike['encryptFailureCount'] = yankee;
            yankee = offset.encryptDuration;
            mike['encryptDuration'] = yankee;
            yankee = offset.encryptAttempts;
            mike['encryptAttempts'] = yankee;
            yankee = offset.encryptMaxAttempts;
            mike['encryptMaxAttempts'] = yankee;
            yankee = offset.encryptMissingKeyCount;
            mike['encryptMissingKeyCount'] = yankee;
            offset = offset.pttQueueLatencyMicrosSamples;
            mike['pttQueueLatencyMicrosSamples'] = offset;
            mike = tango.bind(zulu)(mike);
 528:
            if(!(oscar == report)) { _fun50701_ip = 597; continue _fun50701 }
 532:
            if(!(oscar != golf)) { _fun50701_ip = 612; continue _fun50701 }
 536:
            tango = _closure1_slot6;
            mike = undefined;
            tango = tango.bind(mike)(golf, verify);
            if(!(oscar != tango)) { _fun50701_ip = 612; continue _fun50701 }
 555:
            mike = _closure2_slot3;
            verify = oscar != mike;
            golf = 0;
            if(!verify) { _fun50701_ip = 571; continue _fun50701 }
 568:
            golf = mike;
 571:
            mike = tango.bytesSent;
            mike = golf + mike;
            _closure2_slot3 = mike;
            mike = zulu.push;
            mike = mike.bind(zulu)(tango);
            _fun50701_ip = 612; continue _fun50701;
 597:
            tango = report.forEach;
            mike = function(argFoo) {
                _fun50702: for(var _fun50702_ip = 0; ; ) switch(_fun50702_ip) {
 0:
                    report = _closure1_slot6;
                    tango = _closure2_slot0;
                    entity = undefined;
                    zulu = argFoo;
                    tango = report.bind(entity)(zulu, tango);
                    report = null;
                    if(!(report != tango)) { _fun50702_ip = 75; continue _fun50702 }
 31:
                    zulu = _closure2_slot3;
                    oscar = report != zulu;
                    report = 0;
                    if(!oscar) { _fun50702_ip = 47; continue _fun50702 }
 44:
                    report = zulu;
 47:
                    zulu = tango.bytesSent;
                    zulu = report + zulu;
                    _closure2_slot3 = zulu;
                    zulu = _closure2_slot4;
                    mike = zulu.push;
                    mike = mike.bind(zulu)(tango);
 75:
                    return entity;
                }
            };
            mike = tango.bind(report)(mike);
 612:
            tango = {};
            var _closure2_slot5 = tango;
            mike = entity.inbound;
            if(!(oscar != mike)) { _fun50701_ip = 649; continue _fun50701 }
 628:
            golf = entity.inbound;
            report = golf.forEach;
            mike = function(argFoo) {
                _fun50703: for(var _fun50703_ip = 0; ; ) switch(_fun50703_ip) {
 0:
                    mike = argFoo;
                    tango = mike.id;
                    var _closure3_slot0 = tango;
                    offset = mike.audio;
                    golf = mike.video;
                    zulu = mike.videos;
                    romeo = mike.playout;
                    var _closure3_slot1 = romeo;
                    oscar = _closure2_slot5;
                    report = new Array(0);
                    oscar[tango] = report;
                    oscar = null;
                    if(!(oscar != offset)) { _fun50703_ip = 788; continue _fun50703 }
 68:
                    report = _closure2_slot2;
                    verify = oscar != report;
                    sizing = 0;
                    options = 0;
                    if(!verify) { _fun50703_ip = 86; continue _fun50703 }
 83:
                    options = report;
 86:
                    report = offset.bytesReceived;
                    report = options + report;
                    _closure2_slot2 = report;
                    report = _closure2_slot5;
                    verify = report[tango];
                    options = verify.push;
                    report = {};
                    yankee = 'audio';
                    report['type'] = yankee;
                    yankee = offset.ssrc;
                    report['ssrc'] = yankee;
                    kilo = _closure1_slot0;
                    foxtrot = _closure1_slot1;
                    output = foxtrot[sizing];
                    backup = undefined;
                    source = kilo.bind(backup)(output);
                    update = source.formatSinkWantStat;
                    output = _closure2_slot0;
                    echo = offset.ssrc;
                    result = false;
                    result = update.bind(source)(output, echo, result);
                    report['sinkWant'] = result;
                    foxtrot = foxtrot[sizing];
                    sizing = kilo.bind(backup)(foxtrot);
                    kilo = sizing.formatSinkWantAsInt;
                    foxtrot = offset.ssrc;
                    foxtrot = kilo.bind(sizing)(output, foxtrot);
                    report['sinkWantAsInt'] = foxtrot;
                    foxtrot = {};
                    kilo = offset.codecPayloadType;
                    foxtrot['id'] = kilo;
                    kilo = offset.codecName;
                    foxtrot['name'] = kilo;
                    report['codec'] = foxtrot;
                    foxtrot = offset.bytesReceived;
                    report['bytesReceived'] = foxtrot;
                    foxtrot = offset.packetsReceived;
                    report['packetsReceived'] = foxtrot;
                    foxtrot = offset.packetsLost;
                    report['packetsLost'] = foxtrot;
                    foxtrot = offset.fractionLost;
                    kilo = 100;
                    foxtrot = kilo * foxtrot;
                    report['fractionLost'] = foxtrot;
                    foxtrot = offset.fecPacketsReceived;
                    report['fecPacketsReceived'] = foxtrot;
                    foxtrot = offset.fecPacketsDiscarded;
                    report['fecPacketsDiscarded'] = foxtrot;
                    sizing = _closure1_slot2;
                    foxtrot = offset.audioLevel;
                    foxtrot = sizing.bind(backup)(foxtrot);
                    report['audioLevel'] = foxtrot;
                    foxtrot = offset.speaking;
                    report['audioDetected'] = foxtrot;
                    foxtrot = offset.jitter;
                    report['jitter'] = foxtrot;
                    foxtrot = offset.jitterBuffer;
                    report['jitterBuffer'] = foxtrot;
                    foxtrot = offset.jitterBufferPreferred;
                    report['jitterBufferPreferred'] = foxtrot;
                    foxtrot = offset.decodingCNG;
                    report['decodingCNG'] = foxtrot;
                    foxtrot = offset.decodingMutedOutput;
                    report['decodingMutedOutput'] = foxtrot;
                    foxtrot = offset.decodingNormal;
                    report['decodingNormal'] = foxtrot;
                    foxtrot = offset.decodingPLC;
                    report['decodingPLC'] = foxtrot;
                    foxtrot = offset.decodingPLCCNG;
                    report['decodingPLCCNG'] = foxtrot;
                    foxtrot = offset.nackCount;
                    report['nackCount'] = foxtrot;
                    foxtrot = offset.accelerateRate;
                    foxtrot = kilo * foxtrot;
                    report['accelerateRate'] = foxtrot;
                    foxtrot = offset.expandRate;
                    foxtrot = kilo * foxtrot;
                    report['expandRate'] = foxtrot;
                    foxtrot = offset.preemptiveExpandRate;
                    foxtrot = kilo * foxtrot;
                    report['preemptiveExpandRate'] = foxtrot;
                    foxtrot = offset.speechExpandRate;
                    foxtrot = kilo * foxtrot;
                    report['speechExpandRate'] = foxtrot;
                    foxtrot = offset.secondaryDecodedRate;
                    foxtrot = kilo * foxtrot;
                    report['secondaryDecodedRate'] = foxtrot;
                    foxtrot = offset.opSilence;
                    report['opSilence'] = foxtrot;
                    foxtrot = offset.opNormal;
                    report['opNormal'] = foxtrot;
                    foxtrot = offset.opMerge;
                    report['opMerge'] = foxtrot;
                    foxtrot = offset.opExpand;
                    report['opExpand'] = foxtrot;
                    foxtrot = offset.opAccelerate;
                    report['opAccelerate'] = foxtrot;
                    foxtrot = offset.opPreemptiveExpand;
                    report['opPreemptiveExpand'] = foxtrot;
                    foxtrot = offset.opCNG;
                    report['opCNG'] = foxtrot;
                    foxtrot = offset.delayEstimate;
                    report['delayEstimate'] = foxtrot;
                    foxtrot = offset.passthroughCount;
                    report['passthroughCount'] = foxtrot;
                    foxtrot = offset.decryptSuccessCount;
                    report['decryptSuccessCount'] = foxtrot;
                    foxtrot = offset.decryptFailureCount;
                    report['decryptFailureCount'] = foxtrot;
                    foxtrot = offset.decryptDuration;
                    report['decryptDuration'] = foxtrot;
                    foxtrot = offset.decryptAttempts;
                    report['decryptAttempts'] = foxtrot;
                    foxtrot = offset.decryptMissingKeyCount;
                    report['decryptMissingKeyCount'] = foxtrot;
                    offset = offset.decryptInvalidNonceCount;
                    report['decryptInvalidNonceCount'] = offset;
                    if(!(oscar == romeo)) { _fun50703_ip = 696; continue _fun50703 }
 692:
                    offset = {};
                    _fun50703_ip = 773; continue _fun50703;
 696:
                    foxtrot = _closure1_slot5;
                    yankee = {};
                    kilo = romeo.audioJitterBuffer;
                    yankee['audioJitterBuffer'] = kilo;
                    kilo = romeo.audioJitterDelay;
                    yankee['audioJitterDelay'] = kilo;
                    kilo = romeo.audioJitterTarget;
                    yankee['audioJitterTarget'] = kilo;
                    kilo = romeo.audioPlayoutUnderruns;
                    yankee['audioPlayoutUnderruns'] = kilo;
                    kilo = romeo.relativeReceptionDelay;
                    yankee['relativeReceptionDelay'] = kilo;
                    kilo = romeo.relativePlayoutDelay;
                    yankee['relativePlayoutDelay'] = kilo;
                    offset = foxtrot.bind(backup)(yankee);
 773:
                    config = report;
                    sequence = offset;
                    offset = copyDataProperties(config, sequence);
                    report = options.bind(verify)(report);
 788:
                    if(!(oscar == zulu)) { _fun50703_ip = 888; continue _fun50703 }
 792:
                    if(!(oscar != golf)) { _fun50703_ip = 903; continue _fun50703 }
 796:
                    yankee = _closure1_slot7;
                    sequence = _closure2_slot0;
                    vacuum = _closure2_slot1;
                    verify = undefined;
                    record = undefined;
                    config = golf;
                    control = romeo;
                    report = record[yankee](config, sequence, vacuum, control, source);
                    if(!(oscar != report)) { _fun50703_ip = 903; continue _fun50703 }
 829:
                    options = _closure1_slot3;
                    golf = golf.rtpStats;
                    golf = options.bind(verify)(golf);
                    options = _closure2_slot2;
                    verify = oscar != options;
                    oscar = 0;
                    if(!verify) { _fun50703_ip = 860; continue _fun50703 }
 857:
                    oscar = options;
 860:
                    oscar = oscar + golf;
                    _closure2_slot2 = oscar;
                    mike = _closure2_slot5;
                    tango = mike[tango];
                    mike = tango.push;
                    mike = mike.bind(tango)(report);
                    _fun50703_ip = 903; continue _fun50703;
 888:
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        _fun50704: for(var _fun50704_ip = 0; ; ) switch(_fun50704_ip) {
 0:
                            oscar = argFoo;
                            verify = _closure1_slot7;
                            romeo = _closure2_slot0;
                            yankee = _closure2_slot1;
                            offset = _closure3_slot1;
                            entity = undefined;
                            backup = undefined;
                            foxtrot = oscar;
                            tango = backup[verify](foxtrot, romeo, yankee, offset, verify);
                            report = null;
                            if(!(report != tango)) { _fun50704_ip = 106; continue _fun50704 }
 45:
                            golf = _closure1_slot3;
                            oscar = oscar.rtpStats;
                            oscar = golf.bind(entity)(oscar);
                            golf = _closure2_slot2;
                            options = report != golf;
                            report = 0;
                            if(!options) { _fun50704_ip = 76; continue _fun50704 }
 73:
                            report = golf;
 76:
                            report = report + oscar;
                            _closure2_slot2 = report;
                            zulu = _closure2_slot5;
                            mike = _closure3_slot0;
                            zulu = zulu[mike];
                            mike = zulu.push;
                            mike = mike.bind(zulu)(tango);
 106:
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
 903:
                    entity = undefined;
                    return entity;
                }
            };
            mike = report.bind(golf)(mike);
 649:
            offset = entity.transport;
            report = entity.clips;
            verify = {};
            if(!(oscar != offset)) { _fun50701_ip = 870; continue _fun50701 }
 670:
            mike = offset.sendBandwidth;
            verify['availableOutgoingBitrate'] = mike;
            mike = offset.rtt;
            verify['ping'] = mike;
            mike = offset.decryptionFailures;
            verify['decryptionFailures'] = mike;
            mike = offset.routingFailures;
            if(!(oscar != mike)) { _fun50701_ip = 730; continue _fun50701 }
 718:
            mike = offset.routingFailures;
            verify['routingFailures'] = mike;
 730:
            mike = offset.localAddress;
            verify['localAddress'] = mike;
            mike = offset.pacerDelay;
            verify['pacerDelay'] = mike;
            mike = offset.receiverReports;
            if(!(oscar != mike)) { _fun50701_ip = 776; continue _fun50701 }
 764:
            mike = offset.receiverReports;
            verify['receiverReports'] = mike;
 776:
            mike = offset.receiverBitrateEstimate;
            verify['receiverBitrateEstimate'] = mike;
            mike = offset.outboundBitrateEstimate;
            verify['outboundBitrateEstimate'] = mike;
            golf = offset.inboundBitrateEstimate;
            yankee = oscar != golf;
            mike = 0;
            if(!yankee) { _fun50701_ip = 818; continue _fun50701 }
 815:
            mike = golf;
 818:
            verify['inboundBitrateEstimate'] = mike;
            mike = offset.packetsReceived;
            verify['packetsReceived'] = mike;
            mike = offset.packetsSent;
            verify['packetsSent'] = mike;
            mike = offset.secureFramesProtocolVersion;
            if(!(oscar != mike)) { _fun50701_ip = 870; continue _fun50701 }
 858:
            mike = offset.secureFramesProtocolVersion;
            verify['secureFramesProtocolVersion'] = mike;
 870:
            yankee = oscar == offset;
            golf = undefined;
            if(yankee) { _fun50701_ip = 885; continue _fun50701 }
 879:
            golf = offset.bytesReceived;
 885:
            golf = oscar != golf;
            if(golf) { _fun50701_ip = 932; continue _fun50701 }
 892:
            yankee = _closure2_slot2;
            yankee = oscar != yankee;
            if(!yankee) { _fun50701_ip = 929; continue _fun50701 }
 903:
            romeo = global;
            backup = romeo.Number;
            foxtrot = backup.isNaN;
            romeo = _closure2_slot2;
            romeo = foxtrot.bind(backup)(romeo);
            yankee = !romeo;
 929:
            golf = yankee;
 932:
            if(!golf) { _fun50701_ip = 976; continue _fun50701 }
 935:
            golf = oscar == offset;
            yankee = undefined;
            if(golf) { _fun50701_ip = 950; continue _fun50701 }
 944:
            yankee = offset.bytesReceived;
 950:
            if(!(oscar == yankee)) { _fun50701_ip = 958; continue _fun50701 }
 954:
            yankee = _closure2_slot2;
 958:
            romeo = oscar != yankee;
            golf = undefined;
            if(!romeo) { _fun50701_ip = 970; continue _fun50701 }
 967:
            golf = yankee;
 970:
            verify['bytesReceived'] = golf;
 976:
            yankee = oscar == offset;
            golf = undefined;
            if(yankee) { _fun50701_ip = 991; continue _fun50701 }
 985:
            golf = offset.bytesSent;
 991:
            golf = oscar != golf;
            if(golf) { _fun50701_ip = 1038; continue _fun50701 }
 998:
            yankee = _closure2_slot3;
            yankee = oscar != yankee;
            if(!yankee) { _fun50701_ip = 1035; continue _fun50701 }
 1009:
            romeo = global;
            backup = romeo.Number;
            foxtrot = backup.isNaN;
            romeo = _closure2_slot3;
            romeo = foxtrot.bind(backup)(romeo);
            yankee = !romeo;
 1035:
            golf = yankee;
 1038:
            if(!golf) { _fun50701_ip = 1082; continue _fun50701 }
 1041:
            yankee = oscar == offset;
            golf = undefined;
            if(yankee) { _fun50701_ip = 1056; continue _fun50701 }
 1050:
            golf = offset.bytesSent;
 1056:
            if(!(oscar == golf)) { _fun50701_ip = 1064; continue _fun50701 }
 1060:
            golf = _closure2_slot3;
 1064:
            options = oscar != golf;
            mike = undefined;
            if(!options) { _fun50701_ip = 1076; continue _fun50701 }
 1073:
            mike = golf;
 1076:
            verify['bytesSent'] = mike;
 1082:
            golf = entity.screenshare;
            options = entity.camera;
            mike = entity.audioDevice;
            entity = {};
            offset = argFoo;
            entity['mediaEngineConnectionId'] = offset;
            entity['transport'] = verify;
            entity['screenshare'] = golf;
            golf = oscar != options;
            oscar = null;
            if(!golf) { _fun50701_ip = 1178; continue _fun50701 }
 1129:
            golf = {};
            verify = options.capturedFramesDropped;
            golf['capturedFramesDropped'] = verify;
            verify = options.capturedFramesCount;
            golf['capturedFramesCount'] = verify;
            verify = options.capturedFramesMean;
            golf['capturedFramesMean'] = verify;
            options = options.capturedFramesStdev;
            golf['capturedFramesStdev'] = options;
            oscar = golf;
 1178:
            entity['camera'] = oscar;
            entity['clips'] = report;
            entity['audioDevice'] = mike;
            mike = {};
            mike['inbound'] = tango;
            mike['outbound'] = zulu;
            entity['rtp'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();