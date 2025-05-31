// app/lib/VoiceQuality.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: explodePlayoutMetrics
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            backup = argFoo;
            entity = {};
            romeon = backup;
            option = '_max';
            golfie = null;
            report = '_p99';
            tangon = '_p95';
            zuuluu = '_p75';
            michal = '_mean';
            for(verify in romeon)
 49:
            {
 61:
                kiloes = verify;
                output = backup[kiloes];
                result = kiloes + michal;
                echoed = golfie != output;
                sizing = 0;
                if(!echoed) { _fun00002_ip = 87; continue _fun00001 }
 81:
                sizing = output.mean;
 87:
                entity[result] = sizing;
                result = kiloes + zuuluu;
                echoed = golfie != output;
                sizing = 0;
                if(!echoed) { _fun00002_ip = 110; continue _fun00001 }
 104:
                sizing = output.p75;
 110:
                entity[result] = sizing;
                result = kiloes + tangon;
                echoed = golfie != output;
                sizing = 0;
                if(!echoed) { _fun00002_ip = 133; continue _fun00001 }
 127:
                sizing = output.p95;
 133:
                entity[result] = sizing;
                result = kiloes + report;
                echoed = golfie != output;
                sizing = 0;
                if(!echoed) { _fun00002_ip = 156; continue _fun00001 }
 150:
                sizing = output.p99;
 156:
                entity[result] = sizing;
                sizing = kiloes + option;
                result = golfie != output;
                kiloes = 0;
                if(!result) { _fun00002_ip = 178; continue _fun00001 }
 173:
                kiloes = output.max;
 178:
                entity[sizing] = kiloes;
                _fun00002_ip = 49; continue _fun00001;
            }
 187:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = function() {
        tangon = _closure1_slot5;
        zuuluu = function(argFoo) { // Original name: VoiceQuality
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            oscard = _closure1_slot4;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            report = argFoo;
            zuuluu['connection'] = report;
            report = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    zuuluu = argBar;
                    entity = undefined;
                    if(!(entity !== michal)) { _fun00004_ip = 185; continue _fun00003 }
 15:
                    tangon = michal.restartCount;
                    if(!(entity !== tangon)) { _fun00004_ip = 56; continue _fun00003 }
 25:
                    oscard = _closure1_slot6;
                    report = michal.restartCount;
                    tangon = zuuluu.restartCount;
                    tangon = oscard.bind(entity)(report, tangon);
                    zuuluu['restartCount'] = tangon;
 56:
                    tangon = michal.bufferViolations;
                    if(!(entity !== tangon)) { _fun00004_ip = 97; continue _fun00003 }
 66:
                    oscard = _closure1_slot6;
                    report = michal.bufferViolations;
                    tangon = zuuluu.bufferViolations;
                    tangon = oscard.bind(entity)(report, tangon);
                    zuuluu['bufferViolations'] = tangon;
 97:
                    golfie = michal.timeToFirstCallbackMs;
                    tangon = null;
                    option = tangon != golfie;
                    report = 0;
                    oscard = 0;
                    if(!option) { _fun00004_ip = 119; continue _fun00003 }
 116:
                    oscard = golfie;
 119:
                    oscard = report !== oscard;
                    if(!oscard) { _fun00004_ip = 136; continue _fun00003 }
 126:
                    golfie = zuuluu.timeToFirstCallbackMs;
                    oscard = entity === golfie;
 136:
                    if(!oscard) { _fun00004_ip = 151; continue _fun00003 }
 139:
                    oscard = michal.timeToFirstCallbackMs;
                    zuuluu['timeToFirstCallbackMs'] = oscard;
 151:
                    oscard = michal.sessionSampleRate;
                    golfie = tangon != oscard;
                    tangon = 0;
                    if(!golfie) { _fun00004_ip = 169; continue _fun00003 }
 166:
                    tangon = oscard;
 169:
                    if(!(report !== tangon)) { _fun00004_ip = 185; continue _fun00003 }
 173:
                    michal = michal.sessionSampleRate;
                    zuuluu['sessionSampleRate'] = michal;
 185:
                    return entity;
                }
            };
            zuuluu['sampleAudioDevice'] = report;
            tangon = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    entity = null;
                    if(!(entity != michal)) { _fun00006_ip = 548; continue _fun00005 }
 18:
                    tangon = _closure3_slot0;
                    offset = tangon.networkQuality;
                    verify = offset.incrementNetworkStats;
                    yankee = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = golfie[zuuluu];
                    option = undefined;
                    yankee = yankee.bind(option)(zuuluu);
                    zuuluu = yankee.now;
                    zuuluu = zuuluu.bind(yankee)();
                    zuuluu = verify.bind(offset)(zuuluu);
                    verify = tangon.systemResources;
                    zuuluu = verify.takeSample;
                    zuuluu = zuuluu.bind(verify)();
                    zuuluu = michal.transport;
                    zuuluu = zuuluu.decryptionFailures;
                    tangon['decryptionFailures'] = zuuluu;
                    zuuluu = michal.transport;
                    zuuluu = zuuluu.routingFailures;
                    tangon['routingFailures'] = zuuluu;
                    verify = tangon.duration;
                    zuuluu = verify.connected;
                    zuuluu = zuuluu + 1;
                    verify['connected'] = zuuluu;
                    zuuluu = tangon.outboundStats;
                    zuuluu = zuuluu.packetsSent;
                    yankee = _closure1_slot1;
                    verify = 4;
                    offset = golfie[verify];
                    kiloes = yankee.bind(option)(offset);
                    backup = kiloes.reduce;
                    foxtra = tangon.inboundStats;
                    romeon = {};
                    offset = 0;
                    romeon['packetsReceived'] = offset;
                    tangon = function(argFoo, argBar) {
                        entity = argFoo;
                        zuuluu = entity.packetsReceived;
                        michal = argBar;
                        michal = michal.packetsReceived;
                        michal = zuuluu + michal;
                        entity['packetsReceived'] = michal;
                        return entity;
                    };
                    tangon = backup.bind(kiloes)(foxtra, tangon, romeon);
                    romeon = golfie[verify];
                    kiloes = yankee.bind(option)(romeon);
                    backup = kiloes.forEach;
                    romeon = michal.rtp;
                    foxtra = romeon.outbound;
                    romeon = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            tangon = argFoo;
                            michal = tangon.type;
                            entity = 'audio';
                            if(!(entity === michal)) { _fun00008_ip = 242; continue _fun00007 }
 19:
                            michal = _closure3_slot0;
                            entity = {};
                            zuuluu = tangon.packetsSent;
                            entity['packetsSent'] = zuuluu;
                            zuuluu = tangon.bytesSent;
                            entity['bytesSent'] = zuuluu;
                            golfie = tangon.packetsLost;
                            report = null;
                            option = report != golfie;
                            oscard = 0;
                            if(!option) { _fun00008_ip = 70; continue _fun00007 }
 67:
                            oscard = golfie;
 70:
                            entity['packetsLost'] = oscard;
                            golfie = tangon.passthroughCount;
                            option = report != golfie;
                            oscard = 0;
                            if(!option) { _fun00008_ip = 93; continue _fun00007 }
 90:
                            oscard = golfie;
 93:
                            entity['passthroughCount'] = oscard;
                            golfie = tangon.encryptSuccessCount;
                            option = report != golfie;
                            oscard = 0;
                            if(!option) { _fun00008_ip = 116; continue _fun00007 }
 113:
                            oscard = golfie;
 116:
                            entity['encryptSuccessCount'] = oscard;
                            golfie = tangon.encryptFailureCount;
                            option = report != golfie;
                            oscard = 0;
                            if(!option) { _fun00008_ip = 139; continue _fun00007 }
 136:
                            oscard = golfie;
 139:
                            entity['encryptFailureCount'] = oscard;
                            golfie = tangon.encryptDuration;
                            option = report != golfie;
                            oscard = 0;
                            if(!option) { _fun00008_ip = 162; continue _fun00007 }
 159:
                            oscard = golfie;
 162:
                            entity['encryptDuration'] = oscard;
                            golfie = tangon.encryptAttempts;
                            option = report != golfie;
                            oscard = 0;
                            if(!option) { _fun00008_ip = 185; continue _fun00007 }
 182:
                            oscard = golfie;
 185:
                            entity['encryptAttempts'] = oscard;
                            golfie = tangon.encryptMaxAttempts;
                            option = report != golfie;
                            oscard = 0;
                            if(!option) { _fun00008_ip = 208; continue _fun00007 }
 205:
                            oscard = golfie;
 208:
                            entity['encryptMaxAttempts'] = oscard;
                            tangon = tangon.encryptMissingKeyCount;
                            report = report != tangon;
                            zuuluu = 0;
                            if(!report) { _fun00008_ip = 231; continue _fun00007 }
 228:
                            zuuluu = tangon;
 231:
                            entity['encryptMissingKeyCount'] = zuuluu;
                            michal['outboundStats'] = entity;
 242:
                            entity = undefined;
                            return entity;
                        }
                    };
                    romeon = backup.bind(kiloes)(foxtra, romeon);
                    golfie = golfie[verify];
                    foxtra = yankee.bind(option)(golfie);
                    romeon = foxtra.forEach;
                    golfie = michal.rtp;
                    yankee = golfie.inbound;
                    golfie = function(argFoo, argBar) {
                        entity = argBar;
                        var _closure5_slot0 = entity;
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 4;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.forEach;
                        zuuluu = argFoo;
                        michal = function(argFoo) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                option = argFoo;
                                michal = option.type;
                                entity = 'audio';
                                if(!(entity === michal)) { _fun00010_ip = 1416; continue _fun00009 }
 19:
                                entity = _closure4_slot0;
                                entity = entity.transport;
                                entity = entity.ping;
                                verify = null;
                                michal = verify != entity;
                                oscard = 0;
                                ctrled = 0;
                                if(!michal) { _fun00010_ip = 54; continue _fun00009 }
 51:
                                ctrled = entity;
 54:
                                echoed = option.packetsReceived;
                                sizing = option.packetsLost;
                                result = option.bytesReceived;
                                output = option.nackCount;
                                entity = option.fecPacketsReceived;
                                michal = verify != entity;
                                kiloes = 0;
                                if(!michal) { _fun00010_ip = 96; continue _fun00009 }
 93:
                                kiloes = entity;
 96:
                                entity = option.fecPacketsDiscarded;
                                michal = verify != entity;
                                backup = 0;
                                if(!michal) { _fun00010_ip = 114; continue _fun00009 }
 111:
                                backup = entity;
 114:
                                entity = option.jitterBuffer;
                                zuuluu = verify != entity;
                                michal = 0;
                                if(!zuuluu) { _fun00010_ip = 132; continue _fun00009 }
 129:
                                michal = entity;
 132:
                                yankee = {};
                                entity = option.audioJitterBuffer;
                                yankee['audioJitterBuffer'] = entity;
                                entity = option.audioJitterTarget;
                                yankee['audioJitterTarget'] = entity;
                                entity = option.audioJitterDelay;
                                yankee['audioJitterDelay'] = entity;
                                entity = option.relativeReceptionDelay;
                                yankee['relativeReceptionDelay'] = entity;
                                entity = option.relativePlayoutDelay;
                                yankee['relativePlayoutDelay'] = entity;
                                offset = {};
                                entity = option.opSilence;
                                offset['silent'] = entity;
                                entity = option.opNormal;
                                offset['normal'] = entity;
                                entity = option.opMerge;
                                offset['merged'] = entity;
                                entity = option.opExpand;
                                offset['expanded'] = entity;
                                entity = option.opAccelerate;
                                offset['accelerated'] = entity;
                                entity = option.opPreemptiveExpand;
                                offset['preemptiveExpanded'] = entity;
                                entity = option.opCNG;
                                offset['cng'] = entity;
                                golfie = {};
                                zuuluu = option.passthroughCount;
                                tangon = verify != zuuluu;
                                entity = 0;
                                if(!tangon) { _fun00010_ip = 288; continue _fun00009 }
 285:
                                entity = zuuluu;
 288:
                                golfie['passthroughCount'] = entity;
                                zuuluu = option.decryptSuccessCount;
                                tangon = verify != zuuluu;
                                entity = 0;
                                if(!tangon) { _fun00010_ip = 311; continue _fun00009 }
 308:
                                entity = zuuluu;
 311:
                                golfie['decryptSuccessCount'] = entity;
                                zuuluu = option.decryptFailureCount;
                                tangon = verify != zuuluu;
                                entity = 0;
                                if(!tangon) { _fun00010_ip = 334; continue _fun00009 }
 331:
                                entity = zuuluu;
 334:
                                golfie['decryptFailureCount'] = entity;
                                zuuluu = option.decryptDuration;
                                tangon = verify != zuuluu;
                                entity = 0;
                                if(!tangon) { _fun00010_ip = 357; continue _fun00009 }
 354:
                                entity = zuuluu;
 357:
                                golfie['decryptDuration'] = entity;
                                zuuluu = option.decryptAttempts;
                                tangon = verify != zuuluu;
                                entity = 0;
                                if(!tangon) { _fun00010_ip = 380; continue _fun00009 }
 377:
                                entity = zuuluu;
 380:
                                golfie['decryptAttempts'] = entity;
                                zuuluu = option.decryptMissingKeyCount;
                                tangon = verify != zuuluu;
                                entity = 0;
                                if(!tangon) { _fun00010_ip = 403; continue _fun00009 }
 400:
                                entity = zuuluu;
 403:
                                golfie['decryptMissingKeyCount'] = entity;
                                zuuluu = option.decryptInvalidNonceCount;
                                tangon = verify != zuuluu;
                                entity = 0;
                                if(!tangon) { _fun00010_ip = 426; continue _fun00009 }
 423:
                                entity = zuuluu;
 426:
                                golfie['decryptInvalidNonceCount'] = entity;
                                entity = _closure3_slot0;
                                zuuluu = entity.inboundStats;
                                entity = _closure5_slot0;
                                entity = zuuluu[entity];
                                if(!(verify == entity)) { _fun00010_ip = 750; continue _fun00009 }
 462:
                                entity = _closure3_slot0;
                                romeon = entity.inboundStats;
                                zuuluu = _closure5_slot0;
                                entity = {};
                                entity['packetsReceived'] = echoed;
                                entity['bytesReceived'] = result;
                                entity['packetsLost'] = sizing;
                                update = verify != output;
                                foxtra = 0;
                                if(!update) { _fun00010_ip = 505; continue _fun00009 }
 502:
                                foxtra = output;
 505:
                                entity['nackCount'] = foxtra;
                                entity['fecPacketsReceived'] = kiloes;
                                entity['fecPacketsDiscarded'] = backup;
                                entity['mos'] = oscard;
                                entity['mosSum'] = oscard;
                                entity['mosCount'] = oscard;
                                foxtra = [0, 0, 0, 0, 0];
                                entity['mosBuckets'] = foxtra;
                                entity['bufferStats'] = yankee;
                                entity['frameOpStats'] = offset;
                                cntext = entity;
                                record = golfie;
                                foxtra = copyDataProperties(cntext, record);
                                romeon[zuuluu] = entity;
                                entity = _closure3_slot0;
                                romeon = entity.periodicInboundStats;
                                zuuluu = _closure5_slot0;
                                entity = {};
                                foxtra = global;
                                source = foxtra.Date;
                                update = source.now;
                                update = update.bind(source)();
                                entity['previousTimestampMs'] = update;
                                entity['previous'] = offset;
                                update = foxtra.Date;
                                foxtra = update.now;
                                foxtra = foxtra.bind(update)();
                                entity['currentTimestampMs'] = foxtra;
                                entity['current'] = offset;
                                update = option.accelerateRate;
                                source = verify != update;
                                foxtra = 0;
                                if(!source) { _fun00010_ip = 659; continue _fun00009 }
 656:
                                foxtra = update;
 659:
                                entity['accelerateRateSum'] = foxtra;
                                update = option.expandRate;
                                source = verify != update;
                                foxtra = 0;
                                if(!source) { _fun00010_ip = 682; continue _fun00009 }
 679:
                                foxtra = update;
 682:
                                entity['expandRateSum'] = foxtra;
                                update = option.preemptiveExpandRate;
                                source = verify != update;
                                foxtra = 0;
                                if(!source) { _fun00010_ip = 705; continue _fun00009 }
 702:
                                foxtra = update;
 705:
                                entity['preemptiveExpandRateSum'] = foxtra;
                                update = option.speechExpandRate;
                                source = verify != update;
                                foxtra = 0;
                                if(!source) { _fun00010_ip = 728; continue _fun00009 }
 725:
                                foxtra = update;
 728:
                                entity['speechExpandRateSum'] = foxtra;
                                foxtra = 1;
                                entity['numRateSamples'] = foxtra;
                                romeon[zuuluu] = entity;
                                _fun00010_ip = 1416; continue _fun00009;
 750:
                                zuuluu = _closure3_slot0;
                                entity = zuuluu.inboundStats;
                                romeon = _closure5_slot0;
                                entity = entity[romeon];
                                entity = entity.packetsReceived;
                                entity = echoed - entity;
                                foxtra = zuuluu.inboundStats;
                                foxtra = foxtra[romeon];
                                foxtra = foxtra.packetsLost;
                                source = sizing - foxtra;
                                zuuluu = zuuluu.inboundStats;
                                zuuluu = zuuluu[romeon];
                                romeon = zuuluu.mosBuckets;
                                zuuluu = entity > oscard;
                                if(!zuuluu) { _fun00010_ip = 825; continue _fun00009 }
 821:
                                zuuluu = source >= oscard;
 825:
                                foxtra = 0;
                                if(!zuuluu) { _fun00010_ip = 934; continue _fun00009 }
 830:
                                update = _closure3_slot0;
                                zuuluu = update.calculateMos;
                                michal = ctrled + michal;
                                sequen = _closure1_slot1;
                                vacuum = _closure1_slot2;
                                ctrled = 4;
                                vacuum = vacuum[ctrled];
                                ctrled = undefined;
                                vacuum = sequen.bind(ctrled)(vacuum);
                                ctrled = vacuum.clamp;
                                entity = entity + source;
                                source = source / entity;
                                entity = 1;
                                entity = ctrled.bind(vacuum)(source, oscard, entity);
                                entity = zuuluu.bind(update)(michal, entity);
                                michal = global;
                                zuuluu = michal.Math;
                                michal = zuuluu.floor;
                                zuuluu = michal.bind(zuuluu)(entity);
                                michal = romeon[zuuluu];
                                michal = michal + 1;
                                romeon[zuuluu] = michal;
                                foxtra = entity;
 934:
                                entity = _closure3_slot0;
                                zuuluu = entity.inboundStats;
                                michal = _closure5_slot0;
                                entity = {};
                                entity['packetsReceived'] = echoed;
                                entity['bytesReceived'] = result;
                                entity['packetsLost'] = sizing;
                                result = verify != output;
                                sizing = 0;
                                if(!result) { _fun00010_ip = 977; continue _fun00009 }
 974:
                                sizing = output;
 977:
                                entity['nackCount'] = sizing;
                                entity['fecPacketsReceived'] = kiloes;
                                entity['fecPacketsDiscarded'] = backup;
                                entity['mos'] = foxtra;
                                backup = _closure3_slot0;
                                sizing = backup.inboundStats;
                                kiloes = _closure5_slot0;
                                sizing = sizing[kiloes];
                                sizing = sizing.mosSum;
                                sizing = sizing + foxtra;
                                entity['mosSum'] = sizing;
                                backup = backup.inboundStats;
                                backup = backup[kiloes];
                                backup = backup.mosCount;
                                kiloes = foxtra > oscard;
                                foxtra = 0;
                                if(!kiloes) { _fun00010_ip = 1058; continue _fun00009 }
 1055:
                                foxtra = 1;
 1058:
                                foxtra = backup + foxtra;
                                entity['mosCount'] = foxtra;
                                entity['mosBuckets'] = romeon;
                                entity['bufferStats'] = yankee;
                                entity['frameOpStats'] = offset;
                                cntext = entity;
                                record = golfie;
                                golfie = copyDataProperties(cntext, record);
                                zuuluu[michal] = entity;
                                golfie = _closure3_slot0;
                                zuuluu = golfie.periodicInboundStats;
                                michal = _closure5_slot0;
                                entity = {};
                                yankee = golfie.periodicInboundStats;
                                yankee = yankee[michal];
                                yankee = yankee.previousTimestampMs;
                                entity['previousTimestampMs'] = yankee;
                                yankee = golfie.periodicInboundStats;
                                yankee = yankee[michal];
                                yankee = yankee.previous;
                                entity['previous'] = yankee;
                                yankee = global;
                                romeon = yankee.Date;
                                yankee = romeon.now;
                                yankee = yankee.bind(romeon)();
                                entity['currentTimestampMs'] = yankee;
                                entity['current'] = offset;
                                golfie = golfie.periodicInboundStats;
                                golfie = golfie[michal];
                                offset = golfie.accelerateRateSum;
                                yankee = option.accelerateRate;
                                romeon = verify != yankee;
                                golfie = 0;
                                if(!romeon) { _fun00010_ip = 1214; continue _fun00009 }
 1211:
                                golfie = yankee;
 1214:
                                golfie = offset + golfie;
                                entity['accelerateRateSum'] = golfie;
                                golfie = _closure3_slot0;
                                offset = golfie.periodicInboundStats;
                                golfie = _closure5_slot0;
                                golfie = offset[golfie];
                                offset = golfie.expandRateSum;
                                yankee = option.expandRate;
                                romeon = verify != yankee;
                                golfie = 0;
                                if(!romeon) { _fun00010_ip = 1265; continue _fun00009 }
 1262:
                                golfie = yankee;
 1265:
                                golfie = offset + golfie;
                                entity['expandRateSum'] = golfie;
                                golfie = _closure3_slot0;
                                offset = golfie.periodicInboundStats;
                                golfie = _closure5_slot0;
                                golfie = offset[golfie];
                                offset = golfie.preemptiveExpandRateSum;
                                yankee = option.preemptiveExpandRate;
                                romeon = verify != yankee;
                                golfie = 0;
                                if(!romeon) { _fun00010_ip = 1316; continue _fun00009 }
 1313:
                                golfie = yankee;
 1316:
                                golfie = offset + golfie;
                                entity['preemptiveExpandRateSum'] = golfie;
                                golfie = _closure3_slot0;
                                offset = golfie.periodicInboundStats;
                                golfie = _closure5_slot0;
                                golfie = offset[golfie];
                                golfie = golfie.speechExpandRateSum;
                                option = option.speechExpandRate;
                                verify = verify != option;
                                oscard = 0;
                                if(!verify) { _fun00010_ip = 1367; continue _fun00009 }
 1364:
                                oscard = option;
 1367:
                                oscard = golfie + oscard;
                                entity['speechExpandRateSum'] = oscard;
                                report = _closure3_slot0;
                                report = report.periodicInboundStats;
                                tangon = _closure5_slot0;
                                tangon = report[tangon];
                                report = tangon.numRateSamples;
                                tangon = 1;
                                tangon = report + tangon;
                                entity['numRateSamples'] = tangon;
                                zuuluu[michal] = entity;
 1416:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    golfie = romeon.bind(foxtra)(yankee, golfie);
                    golfie = michal.audioDevice;
                    if(!(option !== golfie)) { _fun00006_ip = 363; continue _fun00005 }
 299:
                    romeon = _closure3_slot0;
                    foxtra = romeon.sampleAudioDevice;
                    golfie = michal.audioDevice;
                    yankee = golfie.input;
                    golfie = romeon.inputDeviceStats;
                    golfie = foxtra.bind(romeon)(yankee, golfie);
                    yankee = romeon.sampleAudioDevice;
                    michal = michal.audioDevice;
                    golfie = michal.output;
                    michal = romeon.outputDeviceStats;
                    michal = yankee.bind(romeon)(golfie, michal);
 363:
                    michal = _closure3_slot0;
                    michal = michal.outboundStats;
                    michal = michal.packetsSent;
                    golfie = michal > zuuluu;
                    michal = false;
                    if(!golfie) { _fun00006_ip = 414; continue _fun00005 }
 388:
                    golfie = _closure3_slot0;
                    yankee = golfie.duration;
                    golfie = yankee.speaking;
                    golfie = golfie + 1;
                    yankee['speaking'] = golfie;
                    michal = true;
 414:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[verify];
                    verify = golfie.bind(option)(oscard);
                    option = verify.reduce;
                    oscard = _closure3_slot0;
                    golfie = oscard.inboundStats;
                    oscard = {};
                    oscard['packetsReceived'] = offset;
                    report = function(argFoo, argBar) {
                        entity = argFoo;
                        zuuluu = entity.packetsReceived;
                        michal = argBar;
                        michal = michal.packetsReceived;
                        michal = zuuluu + michal;
                        entity['packetsReceived'] = michal;
                        return entity;
                    };
                    report = option.bind(verify)(golfie, report, oscard);
                    report = report.packetsReceived;
                    tangon = tangon.packetsReceived;
                    tangon = report > tangon;
                    zuuluu = false;
                    if(!tangon) { _fun00006_ip = 515; continue _fun00005 }
 489:
                    tangon = _closure3_slot0;
                    report = tangon.duration;
                    tangon = report.listening;
                    tangon = tangon + 1;
                    report['listening'] = tangon;
                    zuuluu = true;
 515:
                    if(michal) { _fun00006_ip = 521; continue _fun00005 }
 518:
                    michal = zuuluu;
 521:
                    if(!michal) { _fun00006_ip = 548; continue _fun00005 }
 524:
                    entity = _closure3_slot0;
                    michal = entity.duration;
                    entity = michal.participation;
                    entity = entity + 1;
                    michal['participation'] = entity;
 548:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['sampleStats'] = tangon;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 5;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            oscard = michal.prototype;
            oscard = Object.create(oscard, {constructor: {value: michal}});
            verify = oscard;
            michal = new verify[michal](option);
            michal = michal instanceof Object ? michal : oscard;
            zuuluu['networkQuality'] = michal;
            michal = 6;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            verify = tangon;
            michal = new verify[michal](option);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['systemResources'] = michal;
            michal = {};
            zuuluu['inboundStats'] = michal;
            michal = {'packetsSent': 0, 'bytesSent': 0, 'packetsLost': 0, 'passthroughCount': 0, 'encryptSuccessCount': 0, 'encryptFailureCount': 0, 'encryptDuration': 0, 'encryptAttempts': 0, 'encryptMaxAttempts': 0, 'encryptMissingKeyCount': 0};
            zuuluu['outboundStats'] = michal;
            michal = {'listening': 0, 'speaking': 0, 'participation': 0, 'connected': 0};
            zuuluu['duration'] = michal;
            michal = {};
            zuuluu['periodicInboundStats'] = michal;
            michal = {};
            zuuluu['inputDeviceStats'] = michal;
            michal = {};
            zuuluu['outputDeviceStats'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'start';
        entity['key'] = michal;
        michal = function() { // Original name: value
            michal = this;
            report = michal.connection;
            tangon = report.on;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 7;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.BaseConnectionEvent;
            zuuluu = zuuluu.Stats;
            michal = michal.sampleStats;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(16);
        michal[0] = entity;
        entity = {};
        oscard = 'stop';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            report = michal.connection;
            tangon = report.off;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 7;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.BaseConnectionEvent;
            zuuluu = zuuluu.Stats;
            michal = michal.sampleStats;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'getMosStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = _closure1_slot1;
                entity = _closure1_slot2;
                zuuluu = 4;
                michal = entity[zuuluu];
                entity = undefined;
                golfie = tangon.bind(entity)(michal);
                oscard = golfie.reduce;
                entity = this;
                report = entity.inboundStats;
                michal = {'mosSum': 0, 'mosCount': 0};
                tangon = 0;
                entity = [0, 0, 0, 0, 0];
                michal['mosBuckets'] = entity;
                entity = function(argFoo, argBar) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        tangon = argBar;
                        zuuluu = entity.mosSum;
                        michal = tangon.mosSum;
                        michal = zuuluu + michal;
                        entity['mosSum'] = michal;
                        zuuluu = entity.mosCount;
                        michal = tangon.mosCount;
                        michal = zuuluu + michal;
                        entity['mosCount'] = michal;
                        michal = 5;
                        zuuluu = 0;
 55:
                        oscard = entity.mosBuckets;
                        golfie = oscard[zuuluu];
                        report = tangon.mosBuckets;
                        report = report[zuuluu];
                        report = golfie + report;
                        oscard[zuuluu] = report;
                        zuuluu = zuuluu + 1;
                        if(zuuluu < michal) { _fun00014_ip = 55; continue _fun00013 }
 90:
                        return entity;
                    }
                };
                michal = oscard.bind(golfie)(report, entity, michal);
                entity = {};
                report = michal.mosCount;
                report = report > tangon;
                if(!report) { _fun00012_ip = 118; continue _fun00011 }
 102:
                oscard = michal.mosSum;
                report = michal.mosCount;
                tangon = oscard / report;
 118:
                entity['mos_mean'] = tangon;
                report = michal.mosBuckets;
                tangon = 1;
                tangon = report[tangon];
                entity['mos_1'] = tangon;
                report = michal.mosBuckets;
                tangon = 2;
                tangon = report[tangon];
                entity['mos_2'] = tangon;
                report = michal.mosBuckets;
                tangon = 3;
                tangon = report[tangon];
                entity['mos_3'] = tangon;
                michal = michal.mosBuckets;
                michal = michal[zuuluu];
                entity['mos_4'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'getPacketStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = this;
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            oscard = tangon.bind(entity)(michal);
            report = oscard.reduce;
            tangon = zuuluu.inboundStats;
            michal = function(argFoo, argBar) {
                entity = argFoo;
                michal = argBar;
                tangon = entity.packetsReceived;
                zuuluu = michal.packetsReceived;
                zuuluu = tangon + zuuluu;
                entity['packetsReceived'] = zuuluu;
                tangon = entity.packetsReceivedLost;
                zuuluu = michal.packetsLost;
                zuuluu = tangon + zuuluu;
                entity['packetsReceivedLost'] = zuuluu;
                tangon = entity.nackCount;
                zuuluu = michal.nackCount;
                zuuluu = tangon + zuuluu;
                entity['nackCount'] = zuuluu;
                tangon = entity.fecPacketsReceived;
                zuuluu = michal.fecPacketsReceived;
                zuuluu = tangon + zuuluu;
                entity['fecPacketsReceived'] = zuuluu;
                zuuluu = entity.fecPacketsDiscarded;
                michal = michal.fecPacketsDiscarded;
                michal = zuuluu + michal;
                entity['fecPacketsDiscarded'] = michal;
                return entity;
            };
            entity = {'packetsReceived': 0, 'packetsReceivedLost': 0, 'nackCount': 0, 'fecPacketsReceived': 0, 'fecPacketsDiscarded': 0};
            michal = report.bind(oscard)(tangon, michal, entity);
            entity = {};
            tangon = zuuluu.outboundStats;
            tangon = tangon.packetsSent;
            entity['packets_sent'] = tangon;
            zuuluu = zuuluu.outboundStats;
            zuuluu = zuuluu.packetsLost;
            entity['packets_sent_lost'] = zuuluu;
            zuuluu = michal.packetsReceived;
            entity['packets_received'] = zuuluu;
            zuuluu = michal.packetsReceivedLost;
            entity['packets_received_lost'] = zuuluu;
            zuuluu = michal.nackCount;
            entity['num_nacks_sent'] = zuuluu;
            zuuluu = michal.fecPacketsReceived;
            entity['fec_packets_received'] = zuuluu;
            michal = michal.fecPacketsDiscarded;
            entity['fec_packets_discarded'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'getBytesStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = this;
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            oscard = tangon.bind(entity)(michal);
            report = oscard.reduce;
            tangon = zuuluu.inboundStats;
            michal = function(argFoo, argBar) {
                entity = argBar;
                michal = entity.bytesReceived;
                entity = argFoo;
                entity = entity + michal;
                return entity;
            };
            entity = 0;
            michal = report.bind(oscard)(tangon, michal, entity);
            entity = {};
            zuuluu = zuuluu.outboundStats;
            zuuluu = zuuluu.bytesSent;
            entity['bytes_sent'] = zuuluu;
            entity['bytes_received'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'getNetworkStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            michal = entity.networkQuality;
            entity = michal.getStats;
            entity = entity.bind(michal)();
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'getSystemResourceStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            michal = entity.systemResources;
            entity = michal.getStats;
            entity = entity.bind(michal)();
            return entity;
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'getBufferStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 4;
                entity = tangon[entity];
                tangon = undefined;
                golfie = zuuluu.bind(tangon)(entity);
                oscard = golfie.reduce;
                entity = this;
                zuuluu = entity.inboundStats;
                entity = function(argFoo, argBar) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = argFoo;
                        michal = argBar;
                        oscard = null;
                        zuuluu = oscard == entity;
                        if(zuuluu) { _fun00018_ip = 84; continue _fun00017 }
 15:
                        tangon = michal.bufferStats;
                        tangon = tangon.audioJitterBuffer;
                        tangon = oscard != tangon;
                        if(!tangon) { _fun00018_ip = 44; continue _fun00017 }
 34:
                        report = entity.audioJitterBuffer;
                        tangon = oscard != report;
 44:
                        if(!tangon) { _fun00018_ip = 81; continue _fun00017 }
 47:
                        report = michal.bufferStats;
                        report = report.audioJitterBuffer;
                        oscard = report.p75;
                        report = entity.audioJitterBuffer;
                        report = report.p75;
                        tangon = oscard > report;
 81:
                        zuuluu = tangon;
 84:
                        if(!zuuluu) { _fun00018_ip = 93; continue _fun00017 }
 87:
                        entity = michal.bufferStats;
 93:
                        return entity;
                    }
                };
                report = null;
                oscard = oscard.bind(golfie)(zuuluu, entity, report);
                entity = {};
                zuuluu = _closure1_slot7;
                michal = {};
                option = report != oscard;
                golfie = null;
                if(!option) { _fun00016_ip = 81; continue _fun00015 }
 75:
                golfie = oscard.audioJitterBuffer;
 81:
                michal['audio_jitter_buffer'] = golfie;
                option = report != oscard;
                golfie = null;
                if(!option) { _fun00016_ip = 103; continue _fun00015 }
 97:
                golfie = oscard.audioJitterTarget;
 103:
                michal['audio_jitter_target'] = golfie;
                option = report != oscard;
                golfie = null;
                if(!option) { _fun00016_ip = 125; continue _fun00015 }
 119:
                golfie = oscard.audioJitterDelay;
 125:
                michal['audio_jitter_delay'] = golfie;
                option = report != oscard;
                golfie = null;
                if(!option) { _fun00016_ip = 147; continue _fun00015 }
 141:
                golfie = oscard.relativeReceptionDelay;
 147:
                michal['relative_reception_delay'] = golfie;
                golfie = report != oscard;
                report = null;
                if(!golfie) { _fun00016_ip = 169; continue _fun00015 }
 163:
                report = oscard.relativePlayoutDelay;
 169:
                michal['relative_playout_delay'] = report;
                offset = zuuluu.bind(tangon)(michal);
                yankee = entity;
                michal = copyDataProperties(yankee, offset);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'getFrameOpStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.reduce;
            entity = this;
            zuuluu = entity.inboundStats;
            michal = function(argFoo, argBar) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    michal = argBar;
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.silent;
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00020_ip = 52; continue _fun00019 }
 24:
                    report = entity.silent;
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.silent;
                    zuuluu = report + zuuluu;
                    entity['silent'] = zuuluu;
 52:
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.normal;
                    if(!(tangon != zuuluu)) { _fun00020_ip = 96; continue _fun00019 }
 68:
                    report = entity.normal;
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.normal;
                    zuuluu = report + zuuluu;
                    entity['normal'] = zuuluu;
 96:
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.merged;
                    if(!(tangon != zuuluu)) { _fun00020_ip = 140; continue _fun00019 }
 112:
                    report = entity.merged;
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.merged;
                    zuuluu = report + zuuluu;
                    entity['merged'] = zuuluu;
 140:
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.expanded;
                    if(!(tangon != zuuluu)) { _fun00020_ip = 184; continue _fun00019 }
 156:
                    report = entity.expanded;
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.expanded;
                    zuuluu = report + zuuluu;
                    entity['expanded'] = zuuluu;
 184:
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.accelerated;
                    if(!(tangon != zuuluu)) { _fun00020_ip = 228; continue _fun00019 }
 200:
                    report = entity.accelerated;
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.accelerated;
                    zuuluu = report + zuuluu;
                    entity['accelerated'] = zuuluu;
 228:
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.preemptiveExpanded;
                    if(!(tangon != zuuluu)) { _fun00020_ip = 272; continue _fun00019 }
 244:
                    report = entity.preemptiveExpanded;
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.preemptiveExpanded;
                    zuuluu = report + zuuluu;
                    entity['preemptiveExpanded'] = zuuluu;
 272:
                    zuuluu = michal.frameOpStats;
                    zuuluu = zuuluu.cng;
                    if(!(tangon != zuuluu)) { _fun00020_ip = 316; continue _fun00019 }
 288:
                    zuuluu = entity.cng;
                    michal = michal.frameOpStats;
                    michal = michal.cng;
                    michal = zuuluu + michal;
                    entity['cng'] = michal;
 316:
                    return entity;
                }
            };
            entity = {'silent': 0, 'normal': 0, 'merged': 0, 'expanded': 0, 'accelerated': 0, 'preemptiveExpanded': 0, 'cng': 0};
            michal = tangon.bind(report)(zuuluu, michal, entity);
            entity = {};
            zuuluu = michal.silent;
            entity['frame_op_silent'] = zuuluu;
            zuuluu = michal.normal;
            entity['frame_op_normal'] = zuuluu;
            zuuluu = michal.merged;
            entity['frame_op_merged'] = zuuluu;
            zuuluu = michal.expanded;
            entity['frame_op_expanded'] = zuuluu;
            zuuluu = michal.accelerated;
            entity['frame_op_accelerated'] = zuuluu;
            zuuluu = michal.preemptiveExpanded;
            entity['frame_op_preemptive_expanded'] = zuuluu;
            michal = michal.cng;
            entity['frame_op_cng'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'getDurationStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = {};
            zuuluu = michal.duration;
            zuuluu = zuuluu.listening;
            entity['duration_listening'] = zuuluu;
            zuuluu = michal.duration;
            zuuluu = zuuluu.speaking;
            entity['duration_speaking'] = zuuluu;
            zuuluu = michal.duration;
            zuuluu = zuuluu.participation;
            entity['duration_participation'] = zuuluu;
            michal = michal.duration;
            michal = michal.connected;
            entity['duration_connected'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'getTransportStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = {};
            zuuluu = michal.decryptionFailures;
            entity['decryption_failures'] = zuuluu;
            michal = michal.routingFailures;
            entity['routing_failures'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'getE2EEStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            oscard = tangon.bind(entity)(zuuluu);
            report = oscard.reduce;
            tangon = michal.inboundStats;
            zuuluu = function(argFoo, argBar) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    tangon = argBar;
                    oscard = entity.passthroughCount;
                    golfie = tangon.passthroughCount;
                    report = null;
                    option = report != golfie;
                    michal = 0;
                    if(!option) { _fun00022_ip = 32; continue _fun00021 }
 29:
                    michal = golfie;
 32:
                    michal = oscard + michal;
                    entity['passthroughCount'] = michal;
                    oscard = entity.decryptSuccessCount;
                    golfie = tangon.decryptSuccessCount;
                    option = report != golfie;
                    michal = 0;
                    if(!option) { _fun00022_ip = 66; continue _fun00021 }
 63:
                    michal = golfie;
 66:
                    michal = oscard + michal;
                    entity['decryptSuccessCount'] = michal;
                    oscard = entity.decryptFailureCount;
                    golfie = tangon.decryptFailureCount;
                    option = report != golfie;
                    michal = 0;
                    if(!option) { _fun00022_ip = 100; continue _fun00021 }
 97:
                    michal = golfie;
 100:
                    michal = oscard + michal;
                    entity['decryptFailureCount'] = michal;
                    oscard = entity.decryptDuration;
                    golfie = tangon.decryptDuration;
                    option = report != golfie;
                    michal = 0;
                    if(!option) { _fun00022_ip = 134; continue _fun00021 }
 131:
                    michal = golfie;
 134:
                    michal = oscard + michal;
                    entity['decryptDuration'] = michal;
                    oscard = entity.decryptAttempts;
                    golfie = tangon.decryptAttempts;
                    option = report != golfie;
                    michal = 0;
                    if(!option) { _fun00022_ip = 168; continue _fun00021 }
 165:
                    michal = golfie;
 168:
                    michal = oscard + michal;
                    entity['decryptAttempts'] = michal;
                    oscard = entity.decryptMissingKeyCount;
                    golfie = tangon.decryptMissingKeyCount;
                    option = report != golfie;
                    michal = 0;
                    if(!option) { _fun00022_ip = 202; continue _fun00021 }
 199:
                    michal = golfie;
 202:
                    michal = oscard + michal;
                    entity['decryptMissingKeyCount'] = michal;
                    michal = entity.decryptInvalidNonceCount;
                    tangon = tangon.decryptInvalidNonceCount;
                    report = report != tangon;
                    zuuluu = 0;
                    if(!report) { _fun00022_ip = 236; continue _fun00021 }
 233:
                    zuuluu = tangon;
 236:
                    michal = michal + zuuluu;
                    entity['decryptInvalidNonceCount'] = michal;
                    return entity;
                }
            };
            entity = {'passthroughCount': 0, 'decryptSuccessCount': 0, 'decryptFailureCount': 0, 'decryptDuration': 0, 'decryptAttempts': 0, 'decryptMissingKeyCount': 0, 'decryptInvalidNonceCount': 0};
            zuuluu = report.bind(oscard)(tangon, zuuluu, entity);
            entity = {};
            tangon = zuuluu.passthroughCount;
            entity['decrypt_passthrough_count'] = tangon;
            tangon = zuuluu.decryptSuccessCount;
            entity['decrypt_success_count'] = tangon;
            tangon = zuuluu.decryptFailureCount;
            entity['decrypt_failure_count'] = tangon;
            tangon = zuuluu.decryptDuration;
            entity['decrypt_duration'] = tangon;
            tangon = zuuluu.decryptAttempts;
            entity['decrypt_attempts'] = tangon;
            tangon = zuuluu.decryptMissingKeyCount;
            entity['decrypt_missing_key_count'] = tangon;
            zuuluu = zuuluu.decryptInvalidNonceCount;
            entity['decrypt_invalid_nonce_count'] = zuuluu;
            zuuluu = michal.outboundStats;
            zuuluu = zuuluu.passthroughCount;
            entity['encrypt_passthrough_count'] = zuuluu;
            zuuluu = michal.outboundStats;
            zuuluu = zuuluu.encryptSuccessCount;
            entity['encrypt_success_count'] = zuuluu;
            zuuluu = michal.outboundStats;
            zuuluu = zuuluu.encryptFailureCount;
            entity['encrypt_failure_count'] = zuuluu;
            zuuluu = michal.outboundStats;
            zuuluu = zuuluu.encryptDuration;
            entity['encrypt_duration'] = zuuluu;
            zuuluu = michal.outboundStats;
            zuuluu = zuuluu.encryptAttempts;
            entity['encrypt_attempts'] = zuuluu;
            zuuluu = michal.outboundStats;
            zuuluu = zuuluu.encryptMaxAttempts;
            entity['encrypt_max_attempts'] = zuuluu;
            michal = michal.outboundStats;
            michal = michal.encryptMissingKeyCount;
            entity['encrypt_missing_key_count'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'getAudioDeviceStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                michal = this;
                entity = {};
                zuuluu = michal.inputDeviceStats;
                oscard = zuuluu.restartCount;
                report = null;
                golfie = report == oscard;
                tangon = undefined;
                if(golfie) { _fun00024_ip = 34; continue _fun00023 }
 28:
                tangon = oscard.accumulated;
 34:
                entity['input_device_restart_count'] = tangon;
                tangon = michal.outputDeviceStats;
                oscard = tangon.restartCount;
                golfie = report == oscard;
                tangon = undefined;
                if(golfie) { _fun00024_ip = 68; continue _fun00023 }
 62:
                tangon = oscard.accumulated;
 68:
                entity['output_device_restart_count'] = tangon;
                tangon = michal.inputDeviceStats;
                tangon = tangon.timeToFirstCallbackMs;
                entity['input_device_time_to_first_audio'] = tangon;
                tangon = michal.outputDeviceStats;
                tangon = tangon.timeToFirstCallbackMs;
                entity['output_device_time_to_first_audio'] = tangon;
                tangon = michal.inputDeviceStats;
                oscard = tangon.bufferViolations;
                golfie = report == oscard;
                tangon = undefined;
                if(golfie) { _fun00024_ip = 140; continue _fun00023 }
 134:
                tangon = oscard.accumulated;
 140:
                entity['input_device_buffer_overfull_count'] = tangon;
                tangon = michal.outputDeviceStats;
                tangon = tangon.bufferViolations;
                report = report == tangon;
                zuuluu = undefined;
                if(report) { _fun00024_ip = 174; continue _fun00023 }
 168:
                zuuluu = tangon.accumulated;
 174:
                entity['output_device_buffer_underrun_count'] = zuuluu;
                zuuluu = michal.inputDeviceStats;
                zuuluu = zuuluu.sessionSampleRate;
                entity['input_device_session_sample_rate'] = zuuluu;
                michal = michal.outputDeviceStats;
                michal = michal.sessionSampleRate;
                entity['output_device_session_sample_rate'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'getPeriodicStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                cntext = this;
                entity = new Array(0);
                michal = global;
                tangon = michal.Object;
                zuuluu = tangon.entries;
                michal = cntext.periodicInboundStats;
                record = zuuluu.bind(tangon)(michal);
                michal = record.length;
                config = 0;
                michal = config < michal;
                sequen = undefined;
                vacuum = null;
                source = 2;
                update = 1;
                echoed = 0;
                result = undefined;
                output = undefined;
                sizing = undefined;
                kiloes = undefined;
                backup = undefined;
                foxtra = undefined;
                romeon = undefined;
                yankee = undefined;
                offset = undefined;
                verify = undefined;
                option = undefined;
                golfie = undefined;
                oscard = undefined;
                report = undefined;
                tangon = undefined;
                zuuluu = undefined;
                if(!michal) { _fun00026_ip = 964; continue _fun00025 }
 96:
                papara = record[echoed];
                michal = _closure1_slot3;
                michal = michal.bind(sequen)(papara, source);
                variable45 = michal[config];
                variable55 = michal[update];
                variable58 = variable55.previous;
                variable46 = variable55.current;
                variable44 = variable55.currentTimestampMs;
                michal = variable55.previousTimestampMs;
                variable56 = variable55.numRateSamples;
                variable43 = result;
                variable42 = output;
                variable41 = sizing;
                variable40 = kiloes;
                variable39 = backup;
                variable38 = foxtra;
                variable37 = romeon;
                variable36 = yankee;
                quebec = offset;
                equals = verify;
                whisks = option;
                limora = golfie;
                sierra = oscard;
                status = report;
                target = tangon;
                papara = zuuluu;
                if(!(sequen !== michal)) { _fun00026_ip = 789; continue _fun00025 }
 202:
                variable43 = result;
                variable42 = output;
                variable41 = sizing;
                variable40 = kiloes;
                variable39 = backup;
                variable38 = foxtra;
                variable37 = romeon;
                variable36 = yankee;
                quebec = offset;
                equals = verify;
                whisks = option;
                limora = golfie;
                sierra = oscard;
                status = report;
                target = tangon;
                papara = zuuluu;
                if(!(variable44 > michal)) { _fun00026_ip = 789; continue _fun00025 }
 257:
                variable47 = variable44 - michal;
                michal = {};
                michal['userId'] = variable45;
                variable54 = variable46.silent;
                variable48 = variable54;
                if(!(vacuum == variable54)) { _fun00026_ip = 305; continue _fun00025 }
 280:
                variable50 = variable58.silent;
                variable51 = vacuum != variable50;
                variable49 = 0;
                if(!variable51) { _fun00026_ip = 298; continue _fun00025 }
 295:
                variable49 = variable50;
 298:
                variable48 = config - variable49;
                output = variable50;
 305:
                michal['silent'] = variable48;
                variable53 = variable46.normal;
                variable48 = variable53;
                if(!(vacuum == variable53)) { _fun00026_ip = 348; continue _fun00025 }
 323:
                variable50 = variable58.normal;
                variable51 = vacuum != variable50;
                variable49 = 0;
                if(!variable51) { _fun00026_ip = 341; continue _fun00025 }
 338:
                variable49 = variable50;
 341:
                variable48 = config - variable49;
                kiloes = variable50;
 348:
                michal['normal'] = variable48;
                variable52 = variable46.merged;
                variable48 = variable52;
                if(!(vacuum == variable52)) { _fun00026_ip = 391; continue _fun00025 }
 366:
                variable50 = variable58.merged;
                variable51 = vacuum != variable50;
                variable49 = 0;
                if(!variable51) { _fun00026_ip = 384; continue _fun00025 }
 381:
                variable49 = variable50;
 384:
                variable48 = config - variable49;
                foxtra = variable50;
 391:
                michal['merged'] = variable48;
                variable51 = variable46.expanded;
                variable48 = variable51;
                if(!(vacuum == variable51)) { _fun00026_ip = 434; continue _fun00025 }
 409:
                variable50 = variable58.expanded;
                variable57 = vacuum != variable50;
                variable49 = 0;
                if(!variable57) { _fun00026_ip = 427; continue _fun00025 }
 424:
                variable49 = variable50;
 427:
                variable48 = config - variable49;
                yankee = variable50;
 434:
                michal['expanded'] = variable48;
                variable50 = variable46.accelerated;
                variable48 = variable50;
                if(!(vacuum == variable50)) { _fun00026_ip = 477; continue _fun00025 }
 452:
                variable57 = variable58.accelerated;
                variable59 = vacuum != variable57;
                variable49 = 0;
                if(!variable59) { _fun00026_ip = 470; continue _fun00025 }
 467:
                variable49 = variable57;
 470:
                variable48 = config - variable49;
                verify = variable57;
 477:
                michal['accelerated'] = variable48;
                variable49 = variable46.preemptiveExpanded;
                variable48 = variable49;
                if(!(vacuum == variable49)) { _fun00026_ip = 520; continue _fun00025 }
 495:
                variable59 = variable58.preemptiveExpanded;
                variable60 = vacuum != variable59;
                variable57 = 0;
                if(!variable60) { _fun00026_ip = 513; continue _fun00025 }
 510:
                variable57 = variable59;
 513:
                variable48 = config - variable57;
                golfie = variable59;
 520:
                michal['preemptiveExpanded'] = variable48;
                variable48 = variable46.cng;
                variable57 = variable48;
                if(!(vacuum == variable48)) { _fun00026_ip = 563; continue _fun00025 }
 538:
                variable59 = variable58.cng;
                variable60 = vacuum != variable59;
                variable58 = 0;
                if(!variable60) { _fun00026_ip = 556; continue _fun00025 }
 553:
                variable58 = variable59;
 556:
                variable57 = config - variable58;
                report = variable59;
 563:
                michal['cng'] = variable57;
                variable57 = variable55.accelerateRateSum;
                variable57 = variable57 / variable56;
                michal['accelerateRate'] = variable57;
                variable57 = variable55.expandRateSum;
                variable57 = variable57 / variable56;
                michal['expandRate'] = variable57;
                variable57 = variable55.preemptiveExpandRateSum;
                variable57 = variable57 / variable56;
                michal['preemptiveExpandRate'] = variable57;
                variable55 = variable55.speechExpandRateSum;
                variable55 = variable55 / variable56;
                michal['speechExpandRate'] = variable55;
                michal['durationMs'] = variable47;
                variable56 = michal.normal;
                variable55 = michal.merged;
                variable56 = variable56 + variable55;
                variable55 = michal.expanded;
                variable56 = variable56 + variable55;
                variable55 = michal.accelerated;
                variable56 = variable56 + variable55;
                variable55 = michal.preemptiveExpanded;
                variable55 = variable56 + variable55;
                variable43 = variable54;
                variable42 = output;
                variable41 = variable53;
                variable40 = kiloes;
                variable39 = variable52;
                variable38 = foxtra;
                variable37 = variable51;
                variable36 = yankee;
                quebec = variable50;
                equals = verify;
                whisks = variable49;
                limora = golfie;
                sierra = variable48;
                status = report;
                target = variable47;
                papara = michal;
                if(!(variable55 > config)) { _fun00026_ip = 789; continue _fun00025 }
 731:
                variable55 = entity.push;
                variable55 = variable55.bind(entity)(michal);
                variable43 = variable54;
                variable42 = output;
                variable41 = variable53;
                variable40 = kiloes;
                variable39 = variable52;
                variable38 = foxtra;
                variable37 = variable51;
                variable36 = yankee;
                quebec = variable50;
                equals = verify;
                whisks = variable49;
                limora = golfie;
                sierra = variable48;
                status = report;
                target = variable47;
                papara = michal;
 789:
                michal = cntext.periodicInboundStats;
                michal = michal[variable45];
                michal['accelerateRateSum'] = config;
                michal = cntext.periodicInboundStats;
                michal = michal[variable45];
                michal['expandRateSum'] = config;
                michal = cntext.periodicInboundStats;
                michal = michal[variable45];
                michal['preemptiveExpandRateSum'] = config;
                michal = cntext.periodicInboundStats;
                michal = michal[variable45];
                michal['speechExpandRateSum'] = config;
                michal = cntext.periodicInboundStats;
                michal = michal[variable45];
                michal['numRateSamples'] = config;
                michal = cntext.periodicInboundStats;
                michal = michal[variable45];
                michal['previous'] = variable46;
                michal = cntext.periodicInboundStats;
                michal = michal[variable45];
                michal['previousTimestampMs'] = variable44;
                echoed = echoed + 1;
                michal = record.length;
                result = variable43;
                output = variable42;
                sizing = variable41;
                kiloes = variable40;
                backup = variable39;
                foxtra = variable38;
                romeon = variable37;
                yankee = variable36;
                offset = quebec;
                verify = equals;
                option = whisks;
                golfie = limora;
                oscard = sierra;
                report = status;
                tangon = target;
                zuuluu = papara;
                if(echoed < michal) { _fun00026_ip = 96; continue _fun00025 }
 964:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[13] = entity;
        entity = {};
        oscard = 'calculateMos';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tangon = this;
                zuuluu = tangon.calculateR;
                michal = argFoo;
                entity = argBar;
                option = zuuluu.bind(tangon)(michal, entity);
                entity = 0;
                michal = option < entity;
                golfie = 1;
                entity = golfie;
                if(michal) { _fun00028_ip = 116; continue _fun00027 }
 38:
                report = 100;
                zuuluu = option > report;
                michal = 4.5;
                if(zuuluu) { _fun00028_ip = 113; continue _fun00027 }
 58:
                zuuluu = 0.035;
                tangon = zuuluu * option;
                zuuluu = 7.1e-06;
                oscard = zuuluu * option;
                zuuluu = 60;
                zuuluu = option - zuuluu;
                report = report - option;
                tangon = golfie + tangon;
                zuuluu = oscard * zuuluu;
                zuuluu = zuuluu * report;
                michal = tangon + zuuluu;
 113:
                entity = michal;
 116:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[14] = entity;
        entity = {};
        oscard = 'calculateR';
        entity['key'] = oscard;
        report = function(argFoo, argBar) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                tangon = argFoo;
                entity = argBar;
                michal = 0.024;
                oscard = michal * tangon;
                zuuluu = 177.3;
                report = tangon > zuuluu;
                michal = 0;
                if(!report) { _fun00030_ip = 57; continue _fun00029 }
 39:
                tangon = tangon - zuuluu;
                zuuluu = 0.11;
                michal = zuuluu * tangon;
 57:
                zuuluu = 122;
                tangon = zuuluu * entity;
                zuuluu = 10;
                entity = entity + zuuluu;
                report = 93.4;
                michal = oscard + michal;
                michal = report - michal;
                entity = tangon / entity;
                entity = zuuluu + entity;
                entity = michal - entity;
                return entity;
            }
        };
        entity['value'] = report;
        michal[15] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = function(argFoo, argBar) { // Original name: handleCounter
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            michal = argFoo;
            entity = argBar;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00032_ip = 26; continue _fun00031 }
 12:
            entity = {'accumulated': 0, 'lastValue': 0};
 26:
            tangon = entity.accumulated;
            zuuluu = entity.lastValue;
            entity = {};
            if(!(!(zuuluu > michal))) { _fun00032_ip = 54; continue _fun00031 }
 44:
            zuuluu = michal - zuuluu;
            zuuluu = tangon + zuuluu;
            _fun00032_ip = 58; continue _fun00031;
 54:
            zuuluu = tangon + michal;
 58:
            entity['accumulated'] = zuuluu;
            entity['lastValue'] = michal;
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/VoiceQuality.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();