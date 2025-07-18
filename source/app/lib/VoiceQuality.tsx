// app/lib/VoiceQuality.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var4 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = function explodePlayoutMetrics(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var14 = arg1;
            var1 = {};
            var12 = var14;
            var8 = '_max';
            var7 = null;
            var5 = '_p99';
            var4 = '_p95';
            var3 = '_p75';
            var2 = '_mean';
            for(var9 in var12)
 49:
            {
 61:
                var15 = var9;
                var17 = var14[var15];
                var18 = var15 + var2;
                var19 = var7 != var17;
                var16 = 0;
                if(!var19) { _fun0001_ip = 87; continue _fun0001 }
 81:
                var16 = var17.mean;
 87:
                var1[var18] = var16;
                var18 = var15 + var3;
                var19 = var7 != var17;
                var16 = 0;
                if(!var19) { _fun0001_ip = 110; continue _fun0001 }
 104:
                var16 = var17.p75;
 110:
                var1[var18] = var16;
                var18 = var15 + var4;
                var19 = var7 != var17;
                var16 = 0;
                if(!var19) { _fun0001_ip = 133; continue _fun0001 }
 127:
                var16 = var17.p95;
 133:
                var1[var18] = var16;
                var18 = var15 + var5;
                var19 = var7 != var17;
                var16 = 0;
                if(!var19) { _fun0001_ip = 156; continue _fun0001 }
 150:
                var16 = var17.p99;
 156:
                var1[var18] = var16;
                var16 = var15 + var8;
                var18 = var7 != var17;
                var15 = 0;
                if(!var18) { _fun0001_ip = 178; continue _fun0001 }
 173:
                var15 = var17.max;
 178:
                var1[var16] = var15;
                _fun0001_ip = 49; continue _fun0001;
            }
 187:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = function() {
        var4 = _closure1_slot5;
        var3 = function VoiceQuality(arg1) {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot4;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = arg1;
            var3['connection'] = var5;
            var5 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var3 = arg2;
                    var1 = undefined;
                    if(!(var1 !== var2)) { _fun0002_ip = 223; continue _fun0002 }
 15:
                    var4 = var2.restartCount;
                    if(!(var1 !== var4)) { _fun0002_ip = 56; continue _fun0002 }
 25:
                    var6 = _closure1_slot6;
                    var5 = var2.restartCount;
                    var4 = var3.restartCount;
                    var4 = var6.bind(var1)(var5, var4);
                    var3['restartCount'] = var4;
 56:
                    var4 = var2.bufferViolations;
                    if(!(var1 !== var4)) { _fun0002_ip = 97; continue _fun0002 }
 66:
                    var6 = _closure1_slot6;
                    var5 = var2.bufferViolations;
                    var4 = var3.bufferViolations;
                    var4 = var6.bind(var1)(var5, var4);
                    var3['bufferViolations'] = var4;
 97:
                    var7 = var2.timeToFirstCallbackMs;
                    var4 = null;
                    var8 = var4 != var7;
                    var5 = 0;
                    var6 = 0;
                    if(!var8) { _fun0002_ip = 119; continue _fun0002 }
 116:
                    var6 = var7;
 119:
                    var6 = var5 !== var6;
                    if(!var6) { _fun0002_ip = 136; continue _fun0002 }
 126:
                    var7 = var3.timeToFirstCallbackMs;
                    var6 = var1 === var7;
 136:
                    if(!var6) { _fun0002_ip = 151; continue _fun0002 }
 139:
                    var6 = var2.timeToFirstCallbackMs;
                    var3['timeToFirstCallbackMs'] = var6;
 151:
                    var6 = var2.sessionSampleRate;
                    var7 = var4 != var6;
                    var4 = 0;
                    if(!var7) { _fun0002_ip = 169; continue _fun0002 }
 166:
                    var4 = var6;
 169:
                    if(!(var5 !== var4)) { _fun0002_ip = 185; continue _fun0002 }
 173:
                    var4 = var2.sessionSampleRate;
                    var3['sessionSampleRate'] = var4;
 185:
                    var4 = var2.timeFromConnectToFirstCallbackMs;
                    var4 = var1 !== var4;
                    if(!var4) { _fun0002_ip = 208; continue _fun0002 }
 198:
                    var5 = var3.timeFromConnectToFirstCallbackMs;
                    var4 = var1 === var5;
 208:
                    if(!var4) { _fun0002_ip = 223; continue _fun0002 }
 211:
                    var2 = var2.timeFromConnectToFirstCallbackMs;
                    var3['timeFromConnectToFirstCallbackMs'] = var2;
 223:
                    return var1;
                }
            };
            var3['sampleAudioDevice'] = var5;
            var5 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var5 = arguments[1];
                    var7 = arguments[2];
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0003_ip = 17; continue _fun0003 }
 15:
                    var5 = 0;
 17:
                    if(!(var7 === var1)) { _fun0003_ip = 23; continue _fun0003 }
 21:
                    var7 = 0;
 23:
                    var4 = var3.previousTimestampMs;
                    var2 = 0;
                    if(!(var2 === var4)) { _fun0003_ip = 60; continue _fun0003 }
 35:
                    var2 = global;
                    var4 = var2.performance;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var3['previousTimestampMs'] = var2;
                    _fun0003_ip = 180; continue _fun0003;
 60:
                    var2 = global;
                    var4 = var2.performance;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var6 = var3.aggregationDurationMs;
                    var4 = var3.previousTimestampMs;
                    var4 = var2 - var4;
                    var4 = var6 + var4;
                    var3['aggregationDurationMs'] = var4;
                    var4 = var3.previousTimestampMs;
                    var6 = var2 - var4;
                    var4 = 1000;
                    var6 = var6 / var4;
                    var8 = var3.bytesAvailable;
                    var4 = 8;
                    var5 = var5 / var4;
                    var5 = var5 * var6;
                    var5 = var8 + var5;
                    var3['bytesAvailable'] = var5;
                    var5 = var3.bytesTarget;
                    var4 = var7 / var4;
                    var4 = var4 * var6;
                    var4 = var5 + var4;
                    var3['bytesTarget'] = var4;
                    var3['previousTimestampMs'] = var2;
 180:
                    return var1;
                }
            };
            var3['appendTargetRates'] = var5;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 587; continue _fun0004 }
 18:
                    var16 = _closure3_slot0;
                    var9 = var16.networkQuality;
                    var4 = var9.incrementNetworkStats;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 3;
                    var3 = var7[var3];
                    var8 = undefined;
                    var10 = var10.bind(var8)(var3);
                    var3 = var10.now;
                    var3 = var3.bind(var10)();
                    var3 = var4.bind(var9)(var3);
                    var4 = var16.systemResources;
                    var3 = var4.takeSample;
                    var3 = var3.bind(var4)();
                    var4 = var16.duration;
                    var3 = var4.connected;
                    var3 = var3 + 1;
                    var4['connected'] = var3;
                    var3 = var16.outboundStats;
                    var3 = var3.packetsSent;
                    var11 = _closure1_slot1;
                    var9 = 4;
                    var4 = var7[var9];
                    var15 = var11.bind(var8)(var4);
                    var14 = var15.reduce;
                    var13 = var16.inboundStats;
                    var12 = {};
                    var10 = 0;
                    var12['packetsReceived'] = var10;
                    var4 = function(arg1, arg2) {
                        var1 = arg1;
                        var3 = var1.packetsReceived;
                        var2 = arg2;
                        var2 = var2.packetsReceived;
                        var2 = var3 + var2;
                        var1['packetsReceived'] = var2;
                        return var1;
                    };
                    var4 = var14.bind(var15)(var13, var4, var12);
                    var _closure4_slot1 = var10;
                    var12 = var7[var9];
                    var15 = var11.bind(var8)(var12);
                    var14 = var15.forEach;
                    var12 = var2.rtp;
                    var13 = var12.outbound;
                    var12 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var3 = arg1;
                            var2 = var3.type;
                            var1 = 'audio';
                            if(!(var1 === var2)) { _fun0005_ip = 320; continue _fun0005 }
 19:
                            var1 = var3.bitrateTarget;
                            var5 = null;
                            var6 = var5 != var1;
                            var2 = 0;
                            if(!var6) { _fun0005_ip = 39; continue _fun0005 }
 36:
                            var2 = var1;
 39:
                            _closure4_slot1 = var2;
                            var2 = _closure3_slot0;
                            var1 = {};
                            var9 = var2.outboundStats;
                            var10 = var1;
                            var6 = copyDataProperties(var10, var9);
                            var7 = var3.packetsSent;
                            var6 = 'packetsSent';
                            var1[var6] = var7;
                            var7 = var3.bytesSent;
                            var6 = 'bytesSent';
                            var1[var6] = var7;
                            var6 = var3.packetsLost;
                            var8 = var5 != var6;
                            var7 = 0;
                            if(!var8) { _fun0005_ip = 116; continue _fun0005 }
 113:
                            var7 = var6;
 116:
                            var6 = 'packetsLost';
                            var1[var6] = var7;
                            var6 = var3.passthroughCount;
                            var8 = var5 != var6;
                            var7 = 0;
                            if(!var8) { _fun0005_ip = 143; continue _fun0005 }
 140:
                            var7 = var6;
 143:
                            var6 = 'passthroughCount';
                            var1[var6] = var7;
                            var6 = var3.encryptSuccessCount;
                            var8 = var5 != var6;
                            var7 = 0;
                            if(!var8) { _fun0005_ip = 170; continue _fun0005 }
 167:
                            var7 = var6;
 170:
                            var6 = 'encryptSuccessCount';
                            var1[var6] = var7;
                            var6 = var3.encryptFailureCount;
                            var8 = var5 != var6;
                            var7 = 0;
                            if(!var8) { _fun0005_ip = 197; continue _fun0005 }
 194:
                            var7 = var6;
 197:
                            var6 = 'encryptFailureCount';
                            var1[var6] = var7;
                            var6 = var3.encryptDuration;
                            var8 = var5 != var6;
                            var7 = 0;
                            if(!var8) { _fun0005_ip = 224; continue _fun0005 }
 221:
                            var7 = var6;
 224:
                            var6 = 'encryptDuration';
                            var1[var6] = var7;
                            var6 = var3.encryptAttempts;
                            var8 = var5 != var6;
                            var7 = 0;
                            if(!var8) { _fun0005_ip = 251; continue _fun0005 }
 248:
                            var7 = var6;
 251:
                            var6 = 'encryptAttempts';
                            var1[var6] = var7;
                            var6 = var3.encryptMaxAttempts;
                            var8 = var5 != var6;
                            var7 = 0;
                            if(!var8) { _fun0005_ip = 278; continue _fun0005 }
 275:
                            var7 = var6;
 278:
                            var6 = 'encryptMaxAttempts';
                            var1[var6] = var7;
                            var3 = var3.encryptMissingKeyCount;
                            var5 = var5 != var3;
                            var4 = 0;
                            if(!var5) { _fun0005_ip = 305; continue _fun0005 }
 302:
                            var4 = var3;
 305:
                            var3 = 'encryptMissingKeyCount';
                            var1[var3] = var4;
                            var2['outboundStats'] = var1;
 320:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var12 = var14.bind(var15)(var13, var12);
                    var12 = var2.transport;
                    var12 = var12.decryptionFailures;
                    var16['decryptionFailures'] = var12;
                    var12 = var2.transport;
                    var12 = var12.routingFailures;
                    var16['routingFailures'] = var12;
                    var15 = var16.appendTargetRates;
                    var14 = var16.outboundStats;
                    var12 = var2.transport;
                    var13 = var12.availableOutgoingBitrate;
                    var12 = _closure4_slot1;
                    var12 = var15.bind(var16)(var14, var13, var12);
                    var7 = var7[var9];
                    var13 = var11.bind(var8)(var7);
                    var12 = var13.forEach;
                    var7 = var2.rtp;
                    var11 = var7.inbound;
                    var7 = function(arg1, arg2) {
                        var1 = arg2;
                        var _closure5_slot0 = var1;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 4;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.forEach;
                        var3 = arg1;
                        var2 = function(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var8 = arg1;
                                var2 = var8.type;
                                var1 = 'audio';
                                if(!(var1 === var2)) { _fun0006_ip = 1407; continue _fun0006 }
 19:
                                var1 = _closure4_slot0;
                                var1 = var1.transport;
                                var1 = var1.ping;
                                var9 = null;
                                var2 = var9 != var1;
                                var6 = 0;
                                var24 = 0;
                                if(!var2) { _fun0006_ip = 54; continue _fun0006 }
 51:
                                var24 = var1;
 54:
                                var21 = var8.packetsReceived;
                                var18 = var8.packetsLost;
                                var20 = var8.bytesReceived;
                                var19 = var8.nackCount;
                                var1 = var8.fecPacketsReceived;
                                var2 = var9 != var1;
                                var17 = 0;
                                if(!var2) { _fun0006_ip = 96; continue _fun0006 }
 93:
                                var17 = var1;
 96:
                                var1 = var8.fecPacketsDiscarded;
                                var2 = var9 != var1;
                                var16 = 0;
                                if(!var2) { _fun0006_ip = 114; continue _fun0006 }
 111:
                                var16 = var1;
 114:
                                var1 = var8.jitterBuffer;
                                var3 = var9 != var1;
                                var2 = 0;
                                if(!var3) { _fun0006_ip = 132; continue _fun0006 }
 129:
                                var2 = var1;
 132:
                                var12 = {};
                                var1 = var8.audioJitterBuffer;
                                var12['audioJitterBuffer'] = var1;
                                var1 = var8.audioJitterTarget;
                                var12['audioJitterTarget'] = var1;
                                var1 = var8.audioJitterDelay;
                                var12['audioJitterDelay'] = var1;
                                var1 = var8.relativeReceptionDelay;
                                var12['relativeReceptionDelay'] = var1;
                                var1 = var8.relativePlayoutDelay;
                                var12['relativePlayoutDelay'] = var1;
                                var10 = {};
                                var1 = var8.opSilence;
                                var10['silent'] = var1;
                                var1 = var8.opNormal;
                                var10['normal'] = var1;
                                var1 = var8.opMerge;
                                var10['merged'] = var1;
                                var1 = var8.opExpand;
                                var10['expanded'] = var1;
                                var1 = var8.opAccelerate;
                                var10['accelerated'] = var1;
                                var1 = var8.opPreemptiveExpand;
                                var10['preemptiveExpanded'] = var1;
                                var1 = var8.opCNG;
                                var10['cng'] = var1;
                                var7 = {};
                                var3 = var8.passthroughCount;
                                var4 = var9 != var3;
                                var1 = 0;
                                if(!var4) { _fun0006_ip = 288; continue _fun0006 }
 285:
                                var1 = var3;
 288:
                                var7['passthroughCount'] = var1;
                                var3 = var8.decryptSuccessCount;
                                var4 = var9 != var3;
                                var1 = 0;
                                if(!var4) { _fun0006_ip = 311; continue _fun0006 }
 308:
                                var1 = var3;
 311:
                                var7['decryptSuccessCount'] = var1;
                                var3 = var8.decryptFailureCount;
                                var4 = var9 != var3;
                                var1 = 0;
                                if(!var4) { _fun0006_ip = 334; continue _fun0006 }
 331:
                                var1 = var3;
 334:
                                var7['decryptFailureCount'] = var1;
                                var3 = var8.decryptDuration;
                                var4 = var9 != var3;
                                var1 = 0;
                                if(!var4) { _fun0006_ip = 357; continue _fun0006 }
 354:
                                var1 = var3;
 357:
                                var7['decryptDuration'] = var1;
                                var3 = var8.decryptAttempts;
                                var4 = var9 != var3;
                                var1 = 0;
                                if(!var4) { _fun0006_ip = 380; continue _fun0006 }
 377:
                                var1 = var3;
 380:
                                var7['decryptAttempts'] = var1;
                                var3 = var8.decryptMissingKeyCount;
                                var4 = var9 != var3;
                                var1 = 0;
                                if(!var4) { _fun0006_ip = 403; continue _fun0006 }
 400:
                                var1 = var3;
 403:
                                var7['decryptMissingKeyCount'] = var1;
                                var3 = var8.decryptInvalidNonceCount;
                                var4 = var9 != var3;
                                var1 = 0;
                                if(!var4) { _fun0006_ip = 426; continue _fun0006 }
 423:
                                var1 = var3;
 426:
                                var7['decryptInvalidNonceCount'] = var1;
                                var1 = _closure3_slot0;
                                var3 = var1.inboundStats;
                                var1 = _closure5_slot0;
                                var1 = var3[var1];
                                if(!(var9 == var1)) { _fun0006_ip = 750; continue _fun0006 }
 462:
                                var1 = _closure3_slot0;
                                var11 = var1.inboundStats;
                                var3 = _closure5_slot0;
                                var1 = {};
                                var1['packetsReceived'] = var21;
                                var1['bytesReceived'] = var20;
                                var1['packetsLost'] = var18;
                                var14 = var9 != var19;
                                var13 = 0;
                                if(!var14) { _fun0006_ip = 505; continue _fun0006 }
 502:
                                var13 = var19;
 505:
                                var1['nackCount'] = var13;
                                var1['fecPacketsReceived'] = var17;
                                var1['fecPacketsDiscarded'] = var16;
                                var1['mos'] = var6;
                                var1['mosSum'] = var6;
                                var1['mosCount'] = var6;
                                var13 = [0, 0, 0, 0, 0];
                                var1['mosBuckets'] = var13;
                                var1['bufferStats'] = var12;
                                var1['frameOpStats'] = var10;
                                var29 = var1;
                                var28 = var7;
                                var13 = copyDataProperties(var29, var28);
                                var11[var3] = var1;
                                var1 = _closure3_slot0;
                                var11 = var1.periodicInboundStats;
                                var3 = _closure5_slot0;
                                var1 = {};
                                var13 = global;
                                var15 = var13.performance;
                                var14 = var15.now;
                                var14 = var14.bind(var15)();
                                var1['previousTimestampMs'] = var14;
                                var1['previous'] = var10;
                                var14 = var13.performance;
                                var13 = var14.now;
                                var13 = var13.bind(var14)();
                                var1['currentTimestampMs'] = var13;
                                var1['current'] = var10;
                                var14 = var8.accelerateRate;
                                var15 = var9 != var14;
                                var13 = 0;
                                if(!var15) { _fun0006_ip = 659; continue _fun0006 }
 656:
                                var13 = var14;
 659:
                                var1['accelerateRateSum'] = var13;
                                var14 = var8.expandRate;
                                var15 = var9 != var14;
                                var13 = 0;
                                if(!var15) { _fun0006_ip = 682; continue _fun0006 }
 679:
                                var13 = var14;
 682:
                                var1['expandRateSum'] = var13;
                                var14 = var8.preemptiveExpandRate;
                                var15 = var9 != var14;
                                var13 = 0;
                                if(!var15) { _fun0006_ip = 705; continue _fun0006 }
 702:
                                var13 = var14;
 705:
                                var1['preemptiveExpandRateSum'] = var13;
                                var14 = var8.speechExpandRate;
                                var15 = var9 != var14;
                                var13 = 0;
                                if(!var15) { _fun0006_ip = 728; continue _fun0006 }
 725:
                                var13 = var14;
 728:
                                var1['speechExpandRateSum'] = var13;
                                var13 = 1;
                                var1['numRateSamples'] = var13;
                                var11[var3] = var1;
                                _fun0006_ip = 1407; continue _fun0006;
 750:
                                var1 = _closure3_slot0;
                                var3 = var1.inboundStats;
                                var1 = _closure5_slot0;
                                var15 = var3[var1];
                                var1 = var15.packetsReceived;
                                var1 = var21 - var1;
                                var3 = var15.packetsLost;
                                var23 = var18 - var3;
                                var13 = var15.mosBuckets;
                                var11 = var15.decryptFailureBeforeSuccessCount;
                                if(!(var9 == var11)) { _fun0006_ip = 828; continue _fun0006 }
 804:
                                var3 = var7.decryptSuccessCount;
                                var14 = var3 > var6;
                                var3 = undefined;
                                if(!var14) { _fun0006_ip = 825; continue _fun0006 }
 819:
                                var3 = var7.decryptFailureCount;
 825:
                                var11 = var3;
 828:
                                var3 = var1 > var6;
                                if(!var3) { _fun0006_ip = 839; continue _fun0006 }
 835:
                                var3 = var23 >= var6;
 839:
                                var14 = 0;
                                if(!var3) { _fun0006_ip = 948; continue _fun0006 }
 844:
                                var22 = _closure3_slot0;
                                var3 = var22.calculateMos;
                                var2 = var24 + var2;
                                var26 = _closure1_slot1;
                                var25 = _closure1_slot2;
                                var24 = 4;
                                var25 = var25[var24];
                                var24 = undefined;
                                var25 = var26.bind(var24)(var25);
                                var24 = var25.clamp;
                                var1 = var1 + var23;
                                var23 = var23 / var1;
                                var1 = 1;
                                var1 = var24.bind(var25)(var23, var6, var1);
                                var1 = var3.bind(var22)(var2, var1);
                                var2 = global;
                                var3 = var2.Math;
                                var2 = var3.floor;
                                var3 = var2.bind(var3)(var1);
                                var2 = var13[var3];
                                var2 = var2 + 1;
                                var13[var3] = var2;
                                var14 = var1;
 948:
                                var1 = _closure3_slot0;
                                var3 = var1.inboundStats;
                                var2 = _closure5_slot0;
                                var1 = {};
                                var1['packetsReceived'] = var21;
                                var1['bytesReceived'] = var20;
                                var1['packetsLost'] = var18;
                                var20 = var9 != var19;
                                var18 = 0;
                                if(!var20) { _fun0006_ip = 991; continue _fun0006 }
 988:
                                var18 = var19;
 991:
                                var1['nackCount'] = var18;
                                var1['fecPacketsReceived'] = var17;
                                var1['fecPacketsDiscarded'] = var16;
                                var1['mos'] = var14;
                                var16 = var15.mosSum;
                                var16 = var16 + var14;
                                var1['mosSum'] = var16;
                                var15 = var15.mosCount;
                                var16 = var14 > var6;
                                var14 = 0;
                                if(!var16) { _fun0006_ip = 1044; continue _fun0006 }
 1041:
                                var14 = 1;
 1044:
                                var14 = var15 + var14;
                                var1['mosCount'] = var14;
                                var1['mosBuckets'] = var13;
                                var1['bufferStats'] = var12;
                                var1['frameOpStats'] = var10;
                                var1['decryptFailureBeforeSuccessCount'] = var11;
                                var29 = var1;
                                var28 = var7;
                                var7 = copyDataProperties(var29, var28);
                                var3[var2] = var1;
                                var7 = _closure3_slot0;
                                var3 = var7.periodicInboundStats;
                                var2 = _closure5_slot0;
                                var1 = {};
                                var11 = var7.periodicInboundStats;
                                var11 = var11[var2];
                                var11 = var11.previousTimestampMs;
                                var1['previousTimestampMs'] = var11;
                                var11 = var7.periodicInboundStats;
                                var11 = var11[var2];
                                var11 = var11.previous;
                                var1['previous'] = var11;
                                var11 = global;
                                var12 = var11.performance;
                                var11 = var12.now;
                                var11 = var11.bind(var12)();
                                var1['currentTimestampMs'] = var11;
                                var1['current'] = var10;
                                var7 = var7.periodicInboundStats;
                                var7 = var7[var2];
                                var10 = var7.accelerateRateSum;
                                var11 = var8.accelerateRate;
                                var12 = var9 != var11;
                                var7 = 0;
                                if(!var12) { _fun0006_ip = 1205; continue _fun0006 }
 1202:
                                var7 = var11;
 1205:
                                var7 = var10 + var7;
                                var1['accelerateRateSum'] = var7;
                                var7 = _closure3_slot0;
                                var10 = var7.periodicInboundStats;
                                var7 = _closure5_slot0;
                                var7 = var10[var7];
                                var10 = var7.expandRateSum;
                                var11 = var8.expandRate;
                                var12 = var9 != var11;
                                var7 = 0;
                                if(!var12) { _fun0006_ip = 1256; continue _fun0006 }
 1253:
                                var7 = var11;
 1256:
                                var7 = var10 + var7;
                                var1['expandRateSum'] = var7;
                                var7 = _closure3_slot0;
                                var10 = var7.periodicInboundStats;
                                var7 = _closure5_slot0;
                                var7 = var10[var7];
                                var10 = var7.preemptiveExpandRateSum;
                                var11 = var8.preemptiveExpandRate;
                                var12 = var9 != var11;
                                var7 = 0;
                                if(!var12) { _fun0006_ip = 1307; continue _fun0006 }
 1304:
                                var7 = var11;
 1307:
                                var7 = var10 + var7;
                                var1['preemptiveExpandRateSum'] = var7;
                                var7 = _closure3_slot0;
                                var10 = var7.periodicInboundStats;
                                var7 = _closure5_slot0;
                                var7 = var10[var7];
                                var7 = var7.speechExpandRateSum;
                                var8 = var8.speechExpandRate;
                                var9 = var9 != var8;
                                var6 = 0;
                                if(!var9) { _fun0006_ip = 1358; continue _fun0006 }
 1355:
                                var6 = var8;
 1358:
                                var6 = var7 + var6;
                                var1['speechExpandRateSum'] = var6;
                                var5 = _closure3_slot0;
                                var5 = var5.periodicInboundStats;
                                var4 = _closure5_slot0;
                                var4 = var5[var4];
                                var5 = var4.numRateSamples;
                                var4 = 1;
                                var4 = var5 + var4;
                                var1['numRateSamples'] = var4;
                                var3[var2] = var1;
 1407:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var7 = var12.bind(var13)(var11, var7);
                    var7 = var2.audioDevice;
                    if(!(var8 !== var7)) { _fun0004_ip = 402; continue _fun0004 }
 338:
                    var12 = _closure3_slot0;
                    var13 = var12.sampleAudioDevice;
                    var7 = var2.audioDevice;
                    var11 = var7.input;
                    var7 = var12.inputDeviceStats;
                    var7 = var13.bind(var12)(var11, var7);
                    var11 = var12.sampleAudioDevice;
                    var2 = var2.audioDevice;
                    var7 = var2.output;
                    var2 = var12.outputDeviceStats;
                    var2 = var11.bind(var12)(var7, var2);
 402:
                    var2 = _closure3_slot0;
                    var2 = var2.outboundStats;
                    var2 = var2.packetsSent;
                    var7 = var2 > var3;
                    var2 = false;
                    if(!var7) { _fun0004_ip = 453; continue _fun0004 }
 427:
                    var7 = _closure3_slot0;
                    var11 = var7.duration;
                    var7 = var11.speaking;
                    var7 = var7 + 1;
                    var11['speaking'] = var7;
                    var2 = true;
 453:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var9 = var7.bind(var8)(var6);
                    var8 = var9.reduce;
                    var6 = _closure3_slot0;
                    var7 = var6.inboundStats;
                    var6 = {};
                    var6['packetsReceived'] = var10;
                    var5 = function(arg1, arg2) {
                        var1 = arg1;
                        var3 = var1.packetsReceived;
                        var2 = arg2;
                        var2 = var2.packetsReceived;
                        var2 = var3 + var2;
                        var1['packetsReceived'] = var2;
                        return var1;
                    };
                    var5 = var8.bind(var9)(var7, var5, var6);
                    var5 = var5.packetsReceived;
                    var4 = var4.packetsReceived;
                    var4 = var5 > var4;
                    var3 = false;
                    if(!var4) { _fun0004_ip = 554; continue _fun0004 }
 528:
                    var4 = _closure3_slot0;
                    var5 = var4.duration;
                    var4 = var5.listening;
                    var4 = var4 + 1;
                    var5['listening'] = var4;
                    var3 = true;
 554:
                    if(var2) { _fun0004_ip = 560; continue _fun0004 }
 557:
                    var2 = var3;
 560:
                    if(!var2) { _fun0004_ip = 587; continue _fun0004 }
 563:
                    var1 = _closure3_slot0;
                    var2 = var1.duration;
                    var1 = var2.participation;
                    var1 = var1 + 1;
                    var2['participation'] = var1;
 587:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['sampleStats'] = var4;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var9 = var6;
            var2 = new var9[var2](var8);
            var2 = var2 instanceof Object ? var2 : var6;
            var3['networkQuality'] = var2;
            var2 = 6;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var9 = var4;
            var2 = new var9[var2](var8);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['systemResources'] = var2;
            var2 = {};
            var3['inboundStats'] = var2;
            var2 = {'packetsSent': 0, 'bytesSent': 0, 'packetsLost': 0, 'passthroughCount': 0, 'encryptSuccessCount': 0, 'encryptFailureCount': 0, 'encryptDuration': 0, 'encryptAttempts': 0, 'encryptMaxAttempts': 0, 'encryptMissingKeyCount': 0, 'bytesAvailable': 0, 'bytesTarget': 0, 'previousTimestampMs': 0, 'aggregationDurationMs': 0};
            var3['outboundStats'] = var2;
            var2 = {'listening': 0, 'speaking': 0, 'participation': 0, 'connected': 0};
            var3['duration'] = var2;
            var2 = {};
            var3['periodicInboundStats'] = var2;
            var2 = {};
            var3['inputDeviceStats'] = var2;
            var2 = {};
            var3['outputDeviceStats'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'start';
        var1['key'] = var2;
        var2 = function value() {
            var2 = this;
            var5 = var2.connection;
            var4 = var5.on;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var3 = var3.BaseConnectionEvent;
            var3 = var3.Stats;
            var2 = var2.sampleStats;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(16);
        var2[0] = var1;
        var1 = {};
        var6 = 'stop';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var5 = var2.connection;
            var4 = var5.off;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var3 = var3.BaseConnectionEvent;
            var3 = var3.Stats;
            var2 = var2.sampleStats;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getMosStats';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 4;
                var2 = var1[var3];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.reduce;
                var1 = this;
                var5 = var1.inboundStats;
                var2 = {'mosSum': 0, 'mosCount': 0};
                var4 = 0;
                var1 = [0, 0, 0, 0, 0];
                var2['mosBuckets'] = var1;
                var1 = function(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = arg1;
                        var4 = arg2;
                        var3 = var1.mosSum;
                        var2 = var4.mosSum;
                        var2 = var3 + var2;
                        var1['mosSum'] = var2;
                        var3 = var1.mosCount;
                        var2 = var4.mosCount;
                        var2 = var3 + var2;
                        var1['mosCount'] = var2;
                        var2 = 5;
                        var3 = 0;
 55:
                        var6 = var1.mosBuckets;
                        var7 = var6[var3];
                        var5 = var4.mosBuckets;
                        var5 = var5[var3];
                        var5 = var7 + var5;
                        var6[var3] = var5;
                        var3 = var3 + 1;
                        if(var3 < var2) { _fun0008_ip = 55; continue _fun0008 }
 90:
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var5, var1, var2);
                var1 = {};
                var5 = var2.mosCount;
                var5 = var5 > var4;
                if(!var5) { _fun0007_ip = 118; continue _fun0007 }
 102:
                var6 = var2.mosSum;
                var5 = var2.mosCount;
                var4 = var6 / var5;
 118:
                var1['mos_mean'] = var4;
                var5 = var2.mosBuckets;
                var4 = 1;
                var4 = var5[var4];
                var1['mos_1'] = var4;
                var5 = var2.mosBuckets;
                var4 = 2;
                var4 = var5[var4];
                var1['mos_2'] = var4;
                var5 = var2.mosBuckets;
                var4 = 3;
                var4 = var5[var4];
                var1['mos_3'] = var4;
                var2 = var2.mosBuckets;
                var2 = var2[var3];
                var1['mos_4'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getPacketStats';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var2);
            var5 = var6.reduce;
            var4 = var3.inboundStats;
            var2 = function(arg1, arg2) {
                var1 = arg1;
                var2 = arg2;
                var4 = var1.packetsReceived;
                var3 = var2.packetsReceived;
                var3 = var4 + var3;
                var1['packetsReceived'] = var3;
                var4 = var1.packetsReceivedLost;
                var3 = var2.packetsLost;
                var3 = var4 + var3;
                var1['packetsReceivedLost'] = var3;
                var4 = var1.nackCount;
                var3 = var2.nackCount;
                var3 = var4 + var3;
                var1['nackCount'] = var3;
                var4 = var1.fecPacketsReceived;
                var3 = var2.fecPacketsReceived;
                var3 = var4 + var3;
                var1['fecPacketsReceived'] = var3;
                var3 = var1.fecPacketsDiscarded;
                var2 = var2.fecPacketsDiscarded;
                var2 = var3 + var2;
                var1['fecPacketsDiscarded'] = var2;
                return var1;
            };
            var1 = {'packetsReceived': 0, 'packetsReceivedLost': 0, 'nackCount': 0, 'fecPacketsReceived': 0, 'fecPacketsDiscarded': 0};
            var2 = var5.bind(var6)(var4, var2, var1);
            var1 = {};
            var4 = var3.outboundStats;
            var4 = var4.packetsSent;
            var1['packets_sent'] = var4;
            var3 = var3.outboundStats;
            var3 = var3.packetsLost;
            var1['packets_sent_lost'] = var3;
            var3 = var2.packetsReceived;
            var1['packets_received'] = var3;
            var3 = var2.packetsReceivedLost;
            var1['packets_received_lost'] = var3;
            var3 = var2.nackCount;
            var1['num_nacks_sent'] = var3;
            var3 = var2.fecPacketsReceived;
            var1['fec_packets_received'] = var3;
            var2 = var2.fecPacketsDiscarded;
            var1['fec_packets_discarded'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getBytesStats';
        var1['key'] = var6;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = this;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var5 = var6.reduce;
                var4 = var3.inboundStats;
                var1 = function(arg1, arg2) {
                    var1 = arg2;
                    var2 = var1.bytesReceived;
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                };
                var2 = 0;
                var4 = var5.bind(var6)(var4, var1, var2);
                var1 = var3.outboundStats;
                var5 = var1.aggregationDurationMs;
                var1 = 1000;
                var6 = var5 / var1;
                var1 = {};
                var5 = var3.outboundStats;
                var5 = var5.bytesSent;
                var1['bytes_sent'] = var5;
                var1['bytes_received'] = var4;
                var4 = var6 > var2;
                var5 = 0;
                if(!var4) { _fun0009_ip = 156; continue _fun0009 }
 115:
                var7 = global;
                var9 = var7.Math;
                var8 = var9.round;
                var7 = var3.outboundStats;
                var10 = var7.bytesAvailable;
                var7 = 8;
                var7 = var7 * var10;
                var7 = var7 / var6;
                var5 = var8.bind(var9)(var7);
 156:
                var1['outbound_bandwidth_estimate'] = var5;
                var2 = 0;
                if(!var4) { _fun0009_ip = 209; continue _fun0009 }
 168:
                var4 = global;
                var5 = var4.Math;
                var4 = var5.round;
                var3 = var3.outboundStats;
                var7 = var3.bytesTarget;
                var3 = 8;
                var3 = var3 * var7;
                var3 = var3 / var6;
                var2 = var4.bind(var5)(var3);
 209:
                var1['audio_target_bitrate'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getNetworkStats';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.networkQuality;
            var1 = var2.getStats;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getSystemResourceStats';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.systemResources;
            var1 = var2.getStats;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getBufferStats';
        var1['key'] = var6;
        var6 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 4;
                var1 = var4[var1];
                var4 = undefined;
                var7 = var3.bind(var4)(var1);
                var6 = var7.reduce;
                var1 = this;
                var3 = var1.inboundStats;
                var1 = function(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var1 = arg1;
                        var2 = arg2;
                        var6 = null;
                        var3 = var6 == var1;
                        if(var3) { _fun0011_ip = 84; continue _fun0011 }
 15:
                        var4 = var2.bufferStats;
                        var4 = var4.audioJitterBuffer;
                        var4 = var6 != var4;
                        if(!var4) { _fun0011_ip = 44; continue _fun0011 }
 34:
                        var5 = var1.audioJitterBuffer;
                        var4 = var6 != var5;
 44:
                        if(!var4) { _fun0011_ip = 81; continue _fun0011 }
 47:
                        var5 = var2.bufferStats;
                        var5 = var5.audioJitterBuffer;
                        var6 = var5.p75;
                        var5 = var1.audioJitterBuffer;
                        var5 = var5.p75;
                        var4 = var6 > var5;
 81:
                        var3 = var4;
 84:
                        if(!var3) { _fun0011_ip = 93; continue _fun0011 }
 87:
                        var1 = var2.bufferStats;
 93:
                        return var1;
                    }
                };
                var5 = null;
                var6 = var6.bind(var7)(var3, var1, var5);
                var1 = {};
                var3 = _closure1_slot7;
                var2 = {};
                var8 = var5 != var6;
                var7 = null;
                if(!var8) { _fun0010_ip = 81; continue _fun0010 }
 75:
                var7 = var6.audioJitterBuffer;
 81:
                var2['audio_jitter_buffer'] = var7;
                var8 = var5 != var6;
                var7 = null;
                if(!var8) { _fun0010_ip = 103; continue _fun0010 }
 97:
                var7 = var6.audioJitterTarget;
 103:
                var2['audio_jitter_target'] = var7;
                var8 = var5 != var6;
                var7 = null;
                if(!var8) { _fun0010_ip = 125; continue _fun0010 }
 119:
                var7 = var6.audioJitterDelay;
 125:
                var2['audio_jitter_delay'] = var7;
                var8 = var5 != var6;
                var7 = null;
                if(!var8) { _fun0010_ip = 147; continue _fun0010 }
 141:
                var7 = var6.relativeReceptionDelay;
 147:
                var2['relative_reception_delay'] = var7;
                var7 = var5 != var6;
                var5 = null;
                if(!var7) { _fun0010_ip = 169; continue _fun0010 }
 163:
                var5 = var6.relativePlayoutDelay;
 169:
                var2['relative_playout_delay'] = var5;
                var10 = var3.bind(var4)(var2);
                var11 = var1;
                var2 = copyDataProperties(var11, var10);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getFrameOpStats';
        var1['key'] = var6;
        var6 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.reduce;
            var1 = this;
            var3 = var1.inboundStats;
            var2 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = arg1;
                    var2 = arg2;
                    var3 = var2.frameOpStats;
                    var3 = var3.silent;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0012_ip = 52; continue _fun0012 }
 24:
                    var5 = var1.silent;
                    var3 = var2.frameOpStats;
                    var3 = var3.silent;
                    var3 = var5 + var3;
                    var1['silent'] = var3;
 52:
                    var3 = var2.frameOpStats;
                    var3 = var3.normal;
                    if(!(var4 != var3)) { _fun0012_ip = 96; continue _fun0012 }
 68:
                    var5 = var1.normal;
                    var3 = var2.frameOpStats;
                    var3 = var3.normal;
                    var3 = var5 + var3;
                    var1['normal'] = var3;
 96:
                    var3 = var2.frameOpStats;
                    var3 = var3.merged;
                    if(!(var4 != var3)) { _fun0012_ip = 140; continue _fun0012 }
 112:
                    var5 = var1.merged;
                    var3 = var2.frameOpStats;
                    var3 = var3.merged;
                    var3 = var5 + var3;
                    var1['merged'] = var3;
 140:
                    var3 = var2.frameOpStats;
                    var3 = var3.expanded;
                    if(!(var4 != var3)) { _fun0012_ip = 184; continue _fun0012 }
 156:
                    var5 = var1.expanded;
                    var3 = var2.frameOpStats;
                    var3 = var3.expanded;
                    var3 = var5 + var3;
                    var1['expanded'] = var3;
 184:
                    var3 = var2.frameOpStats;
                    var3 = var3.accelerated;
                    if(!(var4 != var3)) { _fun0012_ip = 228; continue _fun0012 }
 200:
                    var5 = var1.accelerated;
                    var3 = var2.frameOpStats;
                    var3 = var3.accelerated;
                    var3 = var5 + var3;
                    var1['accelerated'] = var3;
 228:
                    var3 = var2.frameOpStats;
                    var3 = var3.preemptiveExpanded;
                    if(!(var4 != var3)) { _fun0012_ip = 272; continue _fun0012 }
 244:
                    var5 = var1.preemptiveExpanded;
                    var3 = var2.frameOpStats;
                    var3 = var3.preemptiveExpanded;
                    var3 = var5 + var3;
                    var1['preemptiveExpanded'] = var3;
 272:
                    var3 = var2.frameOpStats;
                    var3 = var3.cng;
                    if(!(var4 != var3)) { _fun0012_ip = 316; continue _fun0012 }
 288:
                    var3 = var1.cng;
                    var2 = var2.frameOpStats;
                    var2 = var2.cng;
                    var2 = var3 + var2;
                    var1['cng'] = var2;
 316:
                    return var1;
                }
            };
            var1 = {'silent': 0, 'normal': 0, 'merged': 0, 'expanded': 0, 'accelerated': 0, 'preemptiveExpanded': 0, 'cng': 0};
            var2 = var4.bind(var5)(var3, var2, var1);
            var1 = {};
            var3 = var2.silent;
            var1['frame_op_silent'] = var3;
            var3 = var2.normal;
            var1['frame_op_normal'] = var3;
            var3 = var2.merged;
            var1['frame_op_merged'] = var3;
            var3 = var2.expanded;
            var1['frame_op_expanded'] = var3;
            var3 = var2.accelerated;
            var1['frame_op_accelerated'] = var3;
            var3 = var2.preemptiveExpanded;
            var1['frame_op_preemptive_expanded'] = var3;
            var2 = var2.cng;
            var1['frame_op_cng'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'getDurationStats';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = {};
            var3 = var2.duration;
            var3 = var3.listening;
            var1['duration_listening'] = var3;
            var3 = var2.duration;
            var3 = var3.speaking;
            var1['duration_speaking'] = var3;
            var3 = var2.duration;
            var3 = var3.participation;
            var1['duration_participation'] = var3;
            var2 = var2.duration;
            var2 = var2.connected;
            var1['duration_connected'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getTransportStats';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = {};
            var3 = var2.decryptionFailures;
            var1['decryption_failures'] = var3;
            var2 = var2.routingFailures;
            var1['routing_failures'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'getE2EEStats';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var5 = var6.reduce;
            var4 = var2.inboundStats;
            var3 = function(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = arg1;
                    var5 = arg2;
                    var3 = var1.passthroughCount;
                    var7 = var5.passthroughCount;
                    var6 = null;
                    var8 = var6 != var7;
                    var2 = 0;
                    if(!var8) { _fun0013_ip = 32; continue _fun0013 }
 29:
                    var2 = var7;
 32:
                    var2 = var3 + var2;
                    var1['passthroughCount'] = var2;
                    var3 = var1.decryptSuccessCount;
                    var7 = var5.decryptSuccessCount;
                    var8 = var6 != var7;
                    var2 = 0;
                    if(!var8) { _fun0013_ip = 66; continue _fun0013 }
 63:
                    var2 = var7;
 66:
                    var2 = var3 + var2;
                    var1['decryptSuccessCount'] = var2;
                    var3 = var1.decryptFailureCount;
                    var7 = var5.decryptFailureCount;
                    var8 = var6 != var7;
                    var2 = 0;
                    if(!var8) { _fun0013_ip = 100; continue _fun0013 }
 97:
                    var2 = var7;
 100:
                    var2 = var3 + var2;
                    var1['decryptFailureCount'] = var2;
                    var3 = var1.decryptDuration;
                    var7 = var5.decryptDuration;
                    var8 = var6 != var7;
                    var2 = 0;
                    if(!var8) { _fun0013_ip = 134; continue _fun0013 }
 131:
                    var2 = var7;
 134:
                    var2 = var3 + var2;
                    var1['decryptDuration'] = var2;
                    var3 = var1.decryptAttempts;
                    var7 = var5.decryptAttempts;
                    var8 = var6 != var7;
                    var2 = 0;
                    if(!var8) { _fun0013_ip = 168; continue _fun0013 }
 165:
                    var2 = var7;
 168:
                    var2 = var3 + var2;
                    var1['decryptAttempts'] = var2;
                    var3 = var1.decryptMissingKeyCount;
                    var7 = var5.decryptMissingKeyCount;
                    var8 = var6 != var7;
                    var2 = 0;
                    if(!var8) { _fun0013_ip = 202; continue _fun0013 }
 199:
                    var2 = var7;
 202:
                    var2 = var3 + var2;
                    var1['decryptMissingKeyCount'] = var2;
                    var3 = var1.decryptInvalidNonceCount;
                    var7 = var5.decryptInvalidNonceCount;
                    var8 = var6 != var7;
                    var2 = 0;
                    if(!var8) { _fun0013_ip = 236; continue _fun0013 }
 233:
                    var2 = var7;
 236:
                    var2 = var3 + var2;
                    var1['decryptInvalidNonceCount'] = var2;
                    var3 = var1.decryptFailureAfterSuccessCount;
                    var7 = var5.decryptFailureCount;
                    var8 = var6 != var7;
                    var2 = 0;
                    if(!var8) { _fun0013_ip = 270; continue _fun0013 }
 267:
                    var2 = var7;
 270:
                    var5 = var5.decryptFailureBeforeSuccessCount;
                    var6 = var6 != var5;
                    var4 = 0;
                    if(!var6) { _fun0013_ip = 288; continue _fun0013 }
 285:
                    var4 = var5;
 288:
                    var2 = var2 - var4;
                    var2 = var3 + var2;
                    var1['decryptFailureAfterSuccessCount'] = var2;
                    return var1;
                }
            };
            var1 = {'passthroughCount': 0, 'decryptSuccessCount': 0, 'decryptFailureCount': 0, 'decryptDuration': 0, 'decryptAttempts': 0, 'decryptMissingKeyCount': 0, 'decryptInvalidNonceCount': 0, 'decryptFailureAfterSuccessCount': 0};
            var3 = var5.bind(var6)(var4, var3, var1);
            var1 = {};
            var4 = var3.passthroughCount;
            var1['decrypt_passthrough_count'] = var4;
            var4 = var3.decryptSuccessCount;
            var1['decrypt_success_count'] = var4;
            var4 = var3.decryptFailureCount;
            var1['decrypt_failure_count'] = var4;
            var4 = var3.decryptDuration;
            var1['decrypt_duration'] = var4;
            var4 = var3.decryptAttempts;
            var1['decrypt_attempts'] = var4;
            var4 = var3.decryptMissingKeyCount;
            var1['decrypt_missing_key_count'] = var4;
            var4 = var3.decryptInvalidNonceCount;
            var1['decrypt_invalid_nonce_count'] = var4;
            var3 = var3.decryptFailureAfterSuccessCount;
            var1['decrypt_failure_after_success_count'] = var3;
            var3 = var2.outboundStats;
            var3 = var3.passthroughCount;
            var1['encrypt_passthrough_count'] = var3;
            var3 = var2.outboundStats;
            var3 = var3.encryptSuccessCount;
            var1['encrypt_success_count'] = var3;
            var3 = var2.outboundStats;
            var3 = var3.encryptFailureCount;
            var1['encrypt_failure_count'] = var3;
            var3 = var2.outboundStats;
            var3 = var3.encryptDuration;
            var1['encrypt_duration'] = var3;
            var3 = var2.outboundStats;
            var3 = var3.encryptAttempts;
            var1['encrypt_attempts'] = var3;
            var3 = var2.outboundStats;
            var3 = var3.encryptMaxAttempts;
            var1['encrypt_max_attempts'] = var3;
            var2 = var2.outboundStats;
            var2 = var2.encryptMissingKeyCount;
            var1['encrypt_missing_key_count'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'getAudioDeviceStats';
        var1['key'] = var6;
        var6 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var2 = this;
                var1 = {};
                var3 = var2.inputDeviceStats;
                var6 = var3.restartCount;
                var5 = null;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0014_ip = 34; continue _fun0014 }
 28:
                var4 = var6.accumulated;
 34:
                var1['input_device_restart_count'] = var4;
                var4 = var2.outputDeviceStats;
                var6 = var4.restartCount;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0014_ip = 68; continue _fun0014 }
 62:
                var4 = var6.accumulated;
 68:
                var1['output_device_restart_count'] = var4;
                var4 = var2.inputDeviceStats;
                var4 = var4.timeToFirstCallbackMs;
                var1['input_device_time_to_first_audio'] = var4;
                var4 = var2.outputDeviceStats;
                var4 = var4.timeToFirstCallbackMs;
                var1['output_device_time_to_first_audio'] = var4;
                var4 = var2.inputDeviceStats;
                var6 = var4.bufferViolations;
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0014_ip = 140; continue _fun0014 }
 134:
                var4 = var6.accumulated;
 140:
                var1['input_device_buffer_overfull_count'] = var4;
                var4 = var2.outputDeviceStats;
                var4 = var4.bufferViolations;
                var5 = var5 == var4;
                var3 = undefined;
                if(var5) { _fun0014_ip = 174; continue _fun0014 }
 168:
                var3 = var4.accumulated;
 174:
                var1['output_device_buffer_underrun_count'] = var3;
                var3 = var2.inputDeviceStats;
                var3 = var3.sessionSampleRate;
                var1['input_device_session_sample_rate'] = var3;
                var3 = var2.outputDeviceStats;
                var3 = var3.sessionSampleRate;
                var1['output_device_session_sample_rate'] = var3;
                var3 = var2.inputDeviceStats;
                var3 = var3.timeFromConnectToFirstCallbackMs;
                var1['input_device_time_from_connect_to_first_audio_ms'] = var3;
                var2 = var2.outputDeviceStats;
                var2 = var2.timeFromConnectToFirstCallbackMs;
                var1['output_device_time_from_connect_to_first_audio_ms'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'getPeriodicStats';
        var1['key'] = var6;
        var6 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var27 = this;
                var1 = new Array(0);
                var2 = global;
                var4 = var2.Object;
                var3 = var4.entries;
                var2 = var27.periodicInboundStats;
                var26 = var3.bind(var4)(var2);
                var2 = var26.length;
                var25 = 0;
                var2 = var25 < var2;
                var24 = undefined;
                var23 = null;
                var21 = 2;
                var20 = 1;
                var19 = 0;
                var18 = undefined;
                var17 = undefined;
                var16 = undefined;
                var15 = undefined;
                var14 = undefined;
                var13 = undefined;
                var12 = undefined;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0015_ip = 964; continue _fun0015 }
 96:
                var28 = var26[var19];
                var2 = _closure1_slot3;
                var2 = var2.bind(var24)(var28, var21);
                var45 = var2[var25];
                var55 = var2[var20];
                var58 = var55.previous;
                var46 = var55.current;
                var44 = var55.currentTimestampMs;
                var2 = var55.previousTimestampMs;
                var56 = var55.numRateSamples;
                var43 = var18;
                var42 = var17;
                var41 = var16;
                var40 = var15;
                var39 = var14;
                var38 = var13;
                var37 = var12;
                var36 = var11;
                var35 = var10;
                var34 = var9;
                var33 = var8;
                var32 = var7;
                var31 = var6;
                var30 = var5;
                var29 = var4;
                var28 = var3;
                if(!(var24 !== var2)) { _fun0015_ip = 789; continue _fun0015 }
 202:
                var43 = var18;
                var42 = var17;
                var41 = var16;
                var40 = var15;
                var39 = var14;
                var38 = var13;
                var37 = var12;
                var36 = var11;
                var35 = var10;
                var34 = var9;
                var33 = var8;
                var32 = var7;
                var31 = var6;
                var30 = var5;
                var29 = var4;
                var28 = var3;
                if(!(var44 > var2)) { _fun0015_ip = 789; continue _fun0015 }
 257:
                var47 = var44 - var2;
                var2 = {};
                var2['userId'] = var45;
                var54 = var46.silent;
                var48 = var54;
                if(!(var23 == var54)) { _fun0015_ip = 305; continue _fun0015 }
 280:
                var50 = var58.silent;
                var51 = var23 != var50;
                var49 = 0;
                if(!var51) { _fun0015_ip = 298; continue _fun0015 }
 295:
                var49 = var50;
 298:
                var48 = var25 - var49;
                var17 = var50;
 305:
                var2['silent'] = var48;
                var53 = var46.normal;
                var48 = var53;
                if(!(var23 == var53)) { _fun0015_ip = 348; continue _fun0015 }
 323:
                var50 = var58.normal;
                var51 = var23 != var50;
                var49 = 0;
                if(!var51) { _fun0015_ip = 341; continue _fun0015 }
 338:
                var49 = var50;
 341:
                var48 = var25 - var49;
                var15 = var50;
 348:
                var2['normal'] = var48;
                var52 = var46.merged;
                var48 = var52;
                if(!(var23 == var52)) { _fun0015_ip = 391; continue _fun0015 }
 366:
                var50 = var58.merged;
                var51 = var23 != var50;
                var49 = 0;
                if(!var51) { _fun0015_ip = 384; continue _fun0015 }
 381:
                var49 = var50;
 384:
                var48 = var25 - var49;
                var13 = var50;
 391:
                var2['merged'] = var48;
                var51 = var46.expanded;
                var48 = var51;
                if(!(var23 == var51)) { _fun0015_ip = 434; continue _fun0015 }
 409:
                var50 = var58.expanded;
                var57 = var23 != var50;
                var49 = 0;
                if(!var57) { _fun0015_ip = 427; continue _fun0015 }
 424:
                var49 = var50;
 427:
                var48 = var25 - var49;
                var11 = var50;
 434:
                var2['expanded'] = var48;
                var50 = var46.accelerated;
                var48 = var50;
                if(!(var23 == var50)) { _fun0015_ip = 477; continue _fun0015 }
 452:
                var57 = var58.accelerated;
                var59 = var23 != var57;
                var49 = 0;
                if(!var59) { _fun0015_ip = 470; continue _fun0015 }
 467:
                var49 = var57;
 470:
                var48 = var25 - var49;
                var9 = var57;
 477:
                var2['accelerated'] = var48;
                var49 = var46.preemptiveExpanded;
                var48 = var49;
                if(!(var23 == var49)) { _fun0015_ip = 520; continue _fun0015 }
 495:
                var59 = var58.preemptiveExpanded;
                var60 = var23 != var59;
                var57 = 0;
                if(!var60) { _fun0015_ip = 513; continue _fun0015 }
 510:
                var57 = var59;
 513:
                var48 = var25 - var57;
                var7 = var59;
 520:
                var2['preemptiveExpanded'] = var48;
                var48 = var46.cng;
                var57 = var48;
                if(!(var23 == var48)) { _fun0015_ip = 563; continue _fun0015 }
 538:
                var59 = var58.cng;
                var60 = var23 != var59;
                var58 = 0;
                if(!var60) { _fun0015_ip = 556; continue _fun0015 }
 553:
                var58 = var59;
 556:
                var57 = var25 - var58;
                var5 = var59;
 563:
                var2['cng'] = var57;
                var57 = var55.accelerateRateSum;
                var57 = var57 / var56;
                var2['accelerateRate'] = var57;
                var57 = var55.expandRateSum;
                var57 = var57 / var56;
                var2['expandRate'] = var57;
                var57 = var55.preemptiveExpandRateSum;
                var57 = var57 / var56;
                var2['preemptiveExpandRate'] = var57;
                var55 = var55.speechExpandRateSum;
                var55 = var55 / var56;
                var2['speechExpandRate'] = var55;
                var2['durationMs'] = var47;
                var56 = var2.normal;
                var55 = var2.merged;
                var56 = var56 + var55;
                var55 = var2.expanded;
                var56 = var56 + var55;
                var55 = var2.accelerated;
                var56 = var56 + var55;
                var55 = var2.preemptiveExpanded;
                var55 = var56 + var55;
                var43 = var54;
                var42 = var17;
                var41 = var53;
                var40 = var15;
                var39 = var52;
                var38 = var13;
                var37 = var51;
                var36 = var11;
                var35 = var50;
                var34 = var9;
                var33 = var49;
                var32 = var7;
                var31 = var48;
                var30 = var5;
                var29 = var47;
                var28 = var2;
                if(!(var55 > var25)) { _fun0015_ip = 789; continue _fun0015 }
 731:
                var55 = var1.push;
                var55 = var55.bind(var1)(var2);
                var43 = var54;
                var42 = var17;
                var41 = var53;
                var40 = var15;
                var39 = var52;
                var38 = var13;
                var37 = var51;
                var36 = var11;
                var35 = var50;
                var34 = var9;
                var33 = var49;
                var32 = var7;
                var31 = var48;
                var30 = var5;
                var29 = var47;
                var28 = var2;
 789:
                var2 = var27.periodicInboundStats;
                var2 = var2[var45];
                var2['accelerateRateSum'] = var25;
                var2 = var27.periodicInboundStats;
                var2 = var2[var45];
                var2['expandRateSum'] = var25;
                var2 = var27.periodicInboundStats;
                var2 = var2[var45];
                var2['preemptiveExpandRateSum'] = var25;
                var2 = var27.periodicInboundStats;
                var2 = var2[var45];
                var2['speechExpandRateSum'] = var25;
                var2 = var27.periodicInboundStats;
                var2 = var2[var45];
                var2['numRateSamples'] = var25;
                var2 = var27.periodicInboundStats;
                var2 = var2[var45];
                var2['previous'] = var46;
                var2 = var27.periodicInboundStats;
                var2 = var2[var45];
                var2['previousTimestampMs'] = var44;
                var19 = var19 + 1;
                var2 = var26.length;
                var18 = var43;
                var17 = var42;
                var16 = var41;
                var15 = var40;
                var14 = var39;
                var13 = var38;
                var12 = var37;
                var11 = var36;
                var10 = var35;
                var9 = var34;
                var8 = var33;
                var7 = var32;
                var6 = var31;
                var5 = var30;
                var4 = var29;
                var3 = var28;
                if(var19 < var2) { _fun0015_ip = 96; continue _fun0015 }
 964:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'calculateMos';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var4 = this;
                var3 = var4.calculateR;
                var2 = arg1;
                var1 = arg2;
                var8 = var3.bind(var4)(var2, var1);
                var1 = 0;
                var2 = var8 < var1;
                var7 = 1;
                var1 = var7;
                if(var2) { _fun0016_ip = 116; continue _fun0016 }
 38:
                var5 = 100;
                var3 = var8 > var5;
                var2 = 4.5;
                if(var3) { _fun0016_ip = 113; continue _fun0016 }
 58:
                var3 = 0.035;
                var4 = var3 * var8;
                var3 = 7.1e-06;
                var6 = var3 * var8;
                var3 = 60;
                var3 = var8 - var3;
                var5 = var5 - var8;
                var4 = var7 + var4;
                var3 = var6 * var3;
                var3 = var3 * var5;
                var2 = var4 + var3;
 113:
                var1 = var2;
 116:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'calculateR';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var4 = arg1;
                var1 = arg2;
                var2 = 0.024;
                var6 = var2 * var4;
                var3 = 177.3;
                var5 = var4 > var3;
                var2 = 0;
                if(!var5) { _fun0017_ip = 57; continue _fun0017 }
 39:
                var4 = var4 - var3;
                var3 = 0.11;
                var2 = var3 * var4;
 57:
                var3 = 122;
                var4 = var3 * var1;
                var3 = 10;
                var1 = var1 + var3;
                var5 = 93.4;
                var2 = var6 + var2;
                var2 = var5 - var2;
                var1 = var4 / var1;
                var1 = var3 + var1;
                var1 = var2 - var1;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[15] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = function handleCounter(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var2 = arg1;
            var1 = arg2;
            var3 = null;
            if(!(var3 == var1)) { _fun0018_ip = 26; continue _fun0018 }
 12:
            var1 = {'accumulated': 0, 'lastValue': 0};
 26:
            var4 = var1.accumulated;
            var3 = var1.lastValue;
            var1 = {};
            if(!(!(var3 > var2))) { _fun0018_ip = 54; continue _fun0018 }
 44:
            var3 = var2 - var3;
            var3 = var4 + var3;
            _fun0018_ip = 58; continue _fun0018;
 54:
            var3 = var4 + var2;
 58:
            var1['accumulated'] = var3;
            var1['lastValue'] = var2;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/VoiceQuality.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();