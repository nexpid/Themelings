// app/lib/VoiceQuality.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: explodePlayoutMetrics
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            backup = argFoo;
            entity = {};
            romeo = backup;
            options = '_max';
            golf = null;
            report = '_p99';
            tango = '_p95';
            zulu = '_p75';
            mike = '_mean';
            for(verify in romeo)
 49:
            {
 61:
                kilo = verify;
                output = backup[kilo];
                result = kilo + mike;
                echo = golf != output;
                sizing = 0;
                if(!echo) { _fun00002_ip = 87; continue _fun00001 }
 81:
                sizing = output.mean;
 87:
                entity[result] = sizing;
                result = kilo + zulu;
                echo = golf != output;
                sizing = 0;
                if(!echo) { _fun00002_ip = 110; continue _fun00001 }
 104:
                sizing = output.p75;
 110:
                entity[result] = sizing;
                result = kilo + tango;
                echo = golf != output;
                sizing = 0;
                if(!echo) { _fun00002_ip = 133; continue _fun00001 }
 127:
                sizing = output.p95;
 133:
                entity[result] = sizing;
                result = kilo + report;
                echo = golf != output;
                sizing = 0;
                if(!echo) { _fun00002_ip = 156; continue _fun00001 }
 150:
                sizing = output.p99;
 156:
                entity[result] = sizing;
                sizing = kilo + options;
                result = golf != output;
                kilo = 0;
                if(!result) { _fun00002_ip = 178; continue _fun00001 }
 173:
                kilo = output.max;
 178:
                entity[sizing] = kilo;
                _fun00002_ip = 49; continue _fun00001;
            }
 187:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = function() {
        tango = _closure1_slot5;
        zulu = function(argFoo) { // Original name: VoiceQuality
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot4;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            report = argFoo;
            zulu['connection'] = report;
            report = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = argFoo;
                    zulu = argBar;
                    entity = undefined;
                    if(!(entity !== mike)) { _fun00004_ip = 151; continue _fun00003 }
 15:
                    tango = mike.restartCount;
                    if(!(entity !== tango)) { _fun00004_ip = 56; continue _fun00003 }
 25:
                    oscar = _closure1_slot6;
                    report = mike.restartCount;
                    tango = zulu.restartCount;
                    tango = oscar.bind(entity)(report, tango);
                    zulu['restartCount'] = tango;
 56:
                    tango = mike.bufferViolations;
                    if(!(entity !== tango)) { _fun00004_ip = 97; continue _fun00003 }
 66:
                    oscar = _closure1_slot6;
                    report = mike.bufferViolations;
                    tango = zulu.bufferViolations;
                    tango = oscar.bind(entity)(report, tango);
                    zulu['bufferViolations'] = tango;
 97:
                    oscar = mike.timeToFirstCallbackMs;
                    tango = null;
                    golf = tango != oscar;
                    report = 0;
                    tango = 0;
                    if(!golf) { _fun00004_ip = 119; continue _fun00003 }
 116:
                    tango = oscar;
 119:
                    tango = report !== tango;
                    if(!tango) { _fun00004_ip = 136; continue _fun00003 }
 126:
                    report = zulu.timeToFirstCallbackMs;
                    tango = entity === report;
 136:
                    if(!tango) { _fun00004_ip = 151; continue _fun00003 }
 139:
                    mike = mike.timeToFirstCallbackMs;
                    zulu['timeToFirstCallbackMs'] = mike;
 151:
                    return entity;
                }
            };
            zulu['sampleAudioDevice'] = report;
            tango = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    entity = null;
                    if(!(entity != mike)) { _fun00006_ip = 540; continue _fun00005 }
 18:
                    tango = _closure3_slot0;
                    offset = tango.networkQuality;
                    verify = offset.incrementNetworkStats;
                    yankee = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 3;
                    zulu = golf[zulu];
                    options = undefined;
                    yankee = yankee.bind(options)(zulu);
                    zulu = yankee.now;
                    zulu = zulu.bind(yankee)();
                    zulu = verify.bind(offset)(zulu);
                    verify = tango.systemResources;
                    zulu = verify.takeSample;
                    zulu = zulu.bind(verify)();
                    zulu = mike.transport;
                    zulu = zulu.decryptionFailures;
                    tango['decryptionFailures'] = zulu;
                    zulu = mike.transport;
                    zulu = zulu.routingFailures;
                    tango['routingFailures'] = zulu;
                    verify = tango.duration;
                    zulu = verify.connected;
                    zulu = zulu + 1;
                    verify['connected'] = zulu;
                    zulu = tango.outboundStats;
                    zulu = zulu.packetsSent;
                    yankee = _closure1_slot1;
                    verify = 4;
                    offset = golf[verify];
                    kilo = yankee.bind(options)(offset);
                    backup = kilo.reduce;
                    foxtrot = tango.inboundStats;
                    romeo = {};
                    offset = 0;
                    romeo['packetsReceived'] = offset;
                    tango = function(argFoo, argBar) {
                        entity = argFoo;
                        zulu = entity.packetsReceived;
                        mike = argBar;
                        mike = mike.packetsReceived;
                        mike = zulu + mike;
                        entity['packetsReceived'] = mike;
                        return entity;
                    };
                    tango = backup.bind(kilo)(foxtrot, tango, romeo);
                    romeo = golf[verify];
                    kilo = yankee.bind(options)(romeo);
                    backup = kilo.forEach;
                    romeo = mike.rtp;
                    foxtrot = romeo.outbound;
                    romeo = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            tango = argFoo;
                            mike = tango.type;
                            entity = 'audio';
                            if(!(entity === mike)) { _fun00008_ip = 242; continue _fun00007 }
 19:
                            mike = _closure3_slot0;
                            entity = {};
                            zulu = tango.packetsSent;
                            entity['packetsSent'] = zulu;
                            zulu = tango.bytesSent;
                            entity['bytesSent'] = zulu;
                            golf = tango.packetsLost;
                            report = null;
                            options = report != golf;
                            oscar = 0;
                            if(!options) { _fun00008_ip = 70; continue _fun00007 }
 67:
                            oscar = golf;
 70:
                            entity['packetsLost'] = oscar;
                            golf = tango.passthroughCount;
                            options = report != golf;
                            oscar = 0;
                            if(!options) { _fun00008_ip = 93; continue _fun00007 }
 90:
                            oscar = golf;
 93:
                            entity['passthroughCount'] = oscar;
                            golf = tango.encryptSuccessCount;
                            options = report != golf;
                            oscar = 0;
                            if(!options) { _fun00008_ip = 116; continue _fun00007 }
 113:
                            oscar = golf;
 116:
                            entity['encryptSuccessCount'] = oscar;
                            golf = tango.encryptFailureCount;
                            options = report != golf;
                            oscar = 0;
                            if(!options) { _fun00008_ip = 139; continue _fun00007 }
 136:
                            oscar = golf;
 139:
                            entity['encryptFailureCount'] = oscar;
                            golf = tango.encryptDuration;
                            options = report != golf;
                            oscar = 0;
                            if(!options) { _fun00008_ip = 162; continue _fun00007 }
 159:
                            oscar = golf;
 162:
                            entity['encryptDuration'] = oscar;
                            golf = tango.encryptAttempts;
                            options = report != golf;
                            oscar = 0;
                            if(!options) { _fun00008_ip = 185; continue _fun00007 }
 182:
                            oscar = golf;
 185:
                            entity['encryptAttempts'] = oscar;
                            golf = tango.encryptMaxAttempts;
                            options = report != golf;
                            oscar = 0;
                            if(!options) { _fun00008_ip = 208; continue _fun00007 }
 205:
                            oscar = golf;
 208:
                            entity['encryptMaxAttempts'] = oscar;
                            tango = tango.encryptMissingKeyCount;
                            report = report != tango;
                            zulu = 0;
                            if(!report) { _fun00008_ip = 231; continue _fun00007 }
 228:
                            zulu = tango;
 231:
                            entity['encryptMissingKeyCount'] = zulu;
                            mike['outboundStats'] = entity;
 242:
                            entity = undefined;
                            return entity;
                        }
                    };
                    romeo = backup.bind(kilo)(foxtrot, romeo);
                    golf = golf[verify];
                    foxtrot = yankee.bind(options)(golf);
                    romeo = foxtrot.forEach;
                    golf = mike.rtp;
                    yankee = golf.inbound;
                    golf = function(argFoo, argBar) {
                        entity = argBar;
                        var _closure5_slot0 = entity;
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 4;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.forEach;
                        zulu = argFoo;
                        mike = function(argFoo) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                options = argFoo;
                                mike = options.type;
                                entity = 'audio';
                                if(!(entity === mike)) { _fun00010_ip = 1416; continue _fun00009 }
 19:
                                entity = _closure4_slot0;
                                entity = entity.transport;
                                entity = entity.ping;
                                verify = null;
                                mike = verify != entity;
                                oscar = 0;
                                control = 0;
                                if(!mike) { _fun00010_ip = 54; continue _fun00009 }
 51:
                                control = entity;
 54:
                                echo = options.packetsReceived;
                                sizing = options.packetsLost;
                                result = options.bytesReceived;
                                output = options.nackCount;
                                entity = options.fecPacketsReceived;
                                mike = verify != entity;
                                kilo = 0;
                                if(!mike) { _fun00010_ip = 96; continue _fun00009 }
 93:
                                kilo = entity;
 96:
                                entity = options.fecPacketsDiscarded;
                                mike = verify != entity;
                                backup = 0;
                                if(!mike) { _fun00010_ip = 114; continue _fun00009 }
 111:
                                backup = entity;
 114:
                                entity = options.jitterBuffer;
                                zulu = verify != entity;
                                mike = 0;
                                if(!zulu) { _fun00010_ip = 132; continue _fun00009 }
 129:
                                mike = entity;
 132:
                                yankee = {};
                                entity = options.audioJitterBuffer;
                                yankee['audioJitterBuffer'] = entity;
                                entity = options.audioJitterTarget;
                                yankee['audioJitterTarget'] = entity;
                                entity = options.audioJitterDelay;
                                yankee['audioJitterDelay'] = entity;
                                entity = options.relativeReceptionDelay;
                                yankee['relativeReceptionDelay'] = entity;
                                entity = options.relativePlayoutDelay;
                                yankee['relativePlayoutDelay'] = entity;
                                offset = {};
                                entity = options.opSilence;
                                offset['silent'] = entity;
                                entity = options.opNormal;
                                offset['normal'] = entity;
                                entity = options.opMerge;
                                offset['merged'] = entity;
                                entity = options.opExpand;
                                offset['expanded'] = entity;
                                entity = options.opAccelerate;
                                offset['accelerated'] = entity;
                                entity = options.opPreemptiveExpand;
                                offset['preemptiveExpanded'] = entity;
                                entity = options.opCNG;
                                offset['cng'] = entity;
                                golf = {};
                                zulu = options.passthroughCount;
                                tango = verify != zulu;
                                entity = 0;
                                if(!tango) { _fun00010_ip = 288; continue _fun00009 }
 285:
                                entity = zulu;
 288:
                                golf['passthroughCount'] = entity;
                                zulu = options.decryptSuccessCount;
                                tango = verify != zulu;
                                entity = 0;
                                if(!tango) { _fun00010_ip = 311; continue _fun00009 }
 308:
                                entity = zulu;
 311:
                                golf['decryptSuccessCount'] = entity;
                                zulu = options.decryptFailureCount;
                                tango = verify != zulu;
                                entity = 0;
                                if(!tango) { _fun00010_ip = 334; continue _fun00009 }
 331:
                                entity = zulu;
 334:
                                golf['decryptFailureCount'] = entity;
                                zulu = options.decryptDuration;
                                tango = verify != zulu;
                                entity = 0;
                                if(!tango) { _fun00010_ip = 357; continue _fun00009 }
 354:
                                entity = zulu;
 357:
                                golf['decryptDuration'] = entity;
                                zulu = options.decryptAttempts;
                                tango = verify != zulu;
                                entity = 0;
                                if(!tango) { _fun00010_ip = 380; continue _fun00009 }
 377:
                                entity = zulu;
 380:
                                golf['decryptAttempts'] = entity;
                                zulu = options.decryptMissingKeyCount;
                                tango = verify != zulu;
                                entity = 0;
                                if(!tango) { _fun00010_ip = 403; continue _fun00009 }
 400:
                                entity = zulu;
 403:
                                golf['decryptMissingKeyCount'] = entity;
                                zulu = options.decryptInvalidNonceCount;
                                tango = verify != zulu;
                                entity = 0;
                                if(!tango) { _fun00010_ip = 426; continue _fun00009 }
 423:
                                entity = zulu;
 426:
                                golf['decryptInvalidNonceCount'] = entity;
                                entity = _closure3_slot0;
                                zulu = entity.inboundStats;
                                entity = _closure5_slot0;
                                entity = zulu[entity];
                                if(!(verify == entity)) { _fun00010_ip = 750; continue _fun00009 }
 462:
                                entity = _closure3_slot0;
                                romeo = entity.inboundStats;
                                zulu = _closure5_slot0;
                                entity = {};
                                entity['packetsReceived'] = echo;
                                entity['bytesReceived'] = result;
                                entity['packetsLost'] = sizing;
                                update = verify != output;
                                foxtrot = 0;
                                if(!update) { _fun00010_ip = 505; continue _fun00009 }
 502:
                                foxtrot = output;
 505:
                                entity['nackCount'] = foxtrot;
                                entity['fecPacketsReceived'] = kilo;
                                entity['fecPacketsDiscarded'] = backup;
                                entity['mos'] = oscar;
                                entity['mosSum'] = oscar;
                                entity['mosCount'] = oscar;
                                foxtrot = [0, 0, 0, 0, 0];
                                entity['mosBuckets'] = foxtrot;
                                entity['bufferStats'] = yankee;
                                entity['frameOpStats'] = offset;
                                context = entity;
                                record = golf;
                                foxtrot = copyDataProperties(context, record);
                                romeo[zulu] = entity;
                                entity = _closure3_slot0;
                                romeo = entity.periodicInboundStats;
                                zulu = _closure5_slot0;
                                entity = {};
                                foxtrot = global;
                                source = foxtrot.Date;
                                update = source.now;
                                update = update.bind(source)();
                                entity['previousTimestampMs'] = update;
                                entity['previous'] = offset;
                                update = foxtrot.Date;
                                foxtrot = update.now;
                                foxtrot = foxtrot.bind(update)();
                                entity['currentTimestampMs'] = foxtrot;
                                entity['current'] = offset;
                                update = options.accelerateRate;
                                source = verify != update;
                                foxtrot = 0;
                                if(!source) { _fun00010_ip = 659; continue _fun00009 }
 656:
                                foxtrot = update;
 659:
                                entity['accelerateRateSum'] = foxtrot;
                                update = options.expandRate;
                                source = verify != update;
                                foxtrot = 0;
                                if(!source) { _fun00010_ip = 682; continue _fun00009 }
 679:
                                foxtrot = update;
 682:
                                entity['expandRateSum'] = foxtrot;
                                update = options.preemptiveExpandRate;
                                source = verify != update;
                                foxtrot = 0;
                                if(!source) { _fun00010_ip = 705; continue _fun00009 }
 702:
                                foxtrot = update;
 705:
                                entity['preemptiveExpandRateSum'] = foxtrot;
                                update = options.speechExpandRate;
                                source = verify != update;
                                foxtrot = 0;
                                if(!source) { _fun00010_ip = 728; continue _fun00009 }
 725:
                                foxtrot = update;
 728:
                                entity['speechExpandRateSum'] = foxtrot;
                                foxtrot = 1;
                                entity['numRateSamples'] = foxtrot;
                                romeo[zulu] = entity;
                                _fun00010_ip = 1416; continue _fun00009;
 750:
                                zulu = _closure3_slot0;
                                entity = zulu.inboundStats;
                                romeo = _closure5_slot0;
                                entity = entity[romeo];
                                entity = entity.packetsReceived;
                                entity = echo - entity;
                                foxtrot = zulu.inboundStats;
                                foxtrot = foxtrot[romeo];
                                foxtrot = foxtrot.packetsLost;
                                source = sizing - foxtrot;
                                zulu = zulu.inboundStats;
                                zulu = zulu[romeo];
                                romeo = zulu.mosBuckets;
                                zulu = entity > oscar;
                                if(!zulu) { _fun00010_ip = 825; continue _fun00009 }
 821:
                                zulu = source >= oscar;
 825:
                                foxtrot = 0;
                                if(!zulu) { _fun00010_ip = 934; continue _fun00009 }
 830:
                                update = _closure3_slot0;
                                zulu = update.calculateMos;
                                mike = control + mike;
                                sequence = _closure1_slot1;
                                vacuum = _closure1_slot2;
                                control = 4;
                                vacuum = vacuum[control];
                                control = undefined;
                                vacuum = sequence.bind(control)(vacuum);
                                control = vacuum.clamp;
                                entity = entity + source;
                                source = source / entity;
                                entity = 1;
                                entity = control.bind(vacuum)(source, oscar, entity);
                                entity = zulu.bind(update)(mike, entity);
                                mike = global;
                                zulu = mike.Math;
                                mike = zulu.floor;
                                zulu = mike.bind(zulu)(entity);
                                mike = romeo[zulu];
                                mike = mike + 1;
                                romeo[zulu] = mike;
                                foxtrot = entity;
 934:
                                entity = _closure3_slot0;
                                zulu = entity.inboundStats;
                                mike = _closure5_slot0;
                                entity = {};
                                entity['packetsReceived'] = echo;
                                entity['bytesReceived'] = result;
                                entity['packetsLost'] = sizing;
                                result = verify != output;
                                sizing = 0;
                                if(!result) { _fun00010_ip = 977; continue _fun00009 }
 974:
                                sizing = output;
 977:
                                entity['nackCount'] = sizing;
                                entity['fecPacketsReceived'] = kilo;
                                entity['fecPacketsDiscarded'] = backup;
                                entity['mos'] = foxtrot;
                                backup = _closure3_slot0;
                                sizing = backup.inboundStats;
                                kilo = _closure5_slot0;
                                sizing = sizing[kilo];
                                sizing = sizing.mosSum;
                                sizing = sizing + foxtrot;
                                entity['mosSum'] = sizing;
                                backup = backup.inboundStats;
                                backup = backup[kilo];
                                backup = backup.mosCount;
                                kilo = foxtrot > oscar;
                                foxtrot = 0;
                                if(!kilo) { _fun00010_ip = 1058; continue _fun00009 }
 1055:
                                foxtrot = 1;
 1058:
                                foxtrot = backup + foxtrot;
                                entity['mosCount'] = foxtrot;
                                entity['mosBuckets'] = romeo;
                                entity['bufferStats'] = yankee;
                                entity['frameOpStats'] = offset;
                                context = entity;
                                record = golf;
                                golf = copyDataProperties(context, record);
                                zulu[mike] = entity;
                                golf = _closure3_slot0;
                                zulu = golf.periodicInboundStats;
                                mike = _closure5_slot0;
                                entity = {};
                                yankee = golf.periodicInboundStats;
                                yankee = yankee[mike];
                                yankee = yankee.previousTimestampMs;
                                entity['previousTimestampMs'] = yankee;
                                yankee = golf.periodicInboundStats;
                                yankee = yankee[mike];
                                yankee = yankee.previous;
                                entity['previous'] = yankee;
                                yankee = global;
                                romeo = yankee.Date;
                                yankee = romeo.now;
                                yankee = yankee.bind(romeo)();
                                entity['currentTimestampMs'] = yankee;
                                entity['current'] = offset;
                                golf = golf.periodicInboundStats;
                                golf = golf[mike];
                                offset = golf.accelerateRateSum;
                                yankee = options.accelerateRate;
                                romeo = verify != yankee;
                                golf = 0;
                                if(!romeo) { _fun00010_ip = 1214; continue _fun00009 }
 1211:
                                golf = yankee;
 1214:
                                golf = offset + golf;
                                entity['accelerateRateSum'] = golf;
                                golf = _closure3_slot0;
                                offset = golf.periodicInboundStats;
                                golf = _closure5_slot0;
                                golf = offset[golf];
                                offset = golf.expandRateSum;
                                yankee = options.expandRate;
                                romeo = verify != yankee;
                                golf = 0;
                                if(!romeo) { _fun00010_ip = 1265; continue _fun00009 }
 1262:
                                golf = yankee;
 1265:
                                golf = offset + golf;
                                entity['expandRateSum'] = golf;
                                golf = _closure3_slot0;
                                offset = golf.periodicInboundStats;
                                golf = _closure5_slot0;
                                golf = offset[golf];
                                offset = golf.preemptiveExpandRateSum;
                                yankee = options.preemptiveExpandRate;
                                romeo = verify != yankee;
                                golf = 0;
                                if(!romeo) { _fun00010_ip = 1316; continue _fun00009 }
 1313:
                                golf = yankee;
 1316:
                                golf = offset + golf;
                                entity['preemptiveExpandRateSum'] = golf;
                                golf = _closure3_slot0;
                                offset = golf.periodicInboundStats;
                                golf = _closure5_slot0;
                                golf = offset[golf];
                                golf = golf.speechExpandRateSum;
                                options = options.speechExpandRate;
                                verify = verify != options;
                                oscar = 0;
                                if(!verify) { _fun00010_ip = 1367; continue _fun00009 }
 1364:
                                oscar = options;
 1367:
                                oscar = golf + oscar;
                                entity['speechExpandRateSum'] = oscar;
                                report = _closure3_slot0;
                                report = report.periodicInboundStats;
                                tango = _closure5_slot0;
                                tango = report[tango];
                                report = tango.numRateSamples;
                                tango = 1;
                                tango = report + tango;
                                entity['numRateSamples'] = tango;
                                zulu[mike] = entity;
 1416:
                                entity = undefined;
                                return entity;
                            }
                        };
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    golf = romeo.bind(foxtrot)(yankee, golf);
                    golf = mike.audioDevice;
                    if(!(options !== golf)) { _fun00006_ip = 357; continue _fun00005 }
 293:
                    romeo = _closure3_slot0;
                    foxtrot = romeo.sampleAudioDevice;
                    golf = mike.audioDevice;
                    yankee = golf.input;
                    golf = romeo.inputDeviceStats;
                    golf = foxtrot.bind(romeo)(yankee, golf);
                    yankee = romeo.sampleAudioDevice;
                    mike = mike.audioDevice;
                    golf = mike.output;
                    mike = romeo.outputDeviceStats;
                    mike = yankee.bind(romeo)(golf, mike);
 357:
                    mike = _closure3_slot0;
                    mike = mike.outboundStats;
                    mike = mike.packetsSent;
                    golf = mike > zulu;
                    mike = false;
                    if(!golf) { _fun00006_ip = 408; continue _fun00005 }
 382:
                    golf = _closure3_slot0;
                    yankee = golf.duration;
                    golf = yankee.speaking;
                    golf = golf + 1;
                    yankee['speaking'] = golf;
                    mike = true;
 408:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[verify];
                    verify = golf.bind(options)(oscar);
                    options = verify.reduce;
                    oscar = _closure3_slot0;
                    golf = oscar.inboundStats;
                    oscar = {};
                    oscar['packetsReceived'] = offset;
                    report = function(argFoo, argBar) {
                        entity = argFoo;
                        zulu = entity.packetsReceived;
                        mike = argBar;
                        mike = mike.packetsReceived;
                        mike = zulu + mike;
                        entity['packetsReceived'] = mike;
                        return entity;
                    };
                    report = options.bind(verify)(golf, report, oscar);
                    report = report.packetsReceived;
                    tango = tango.packetsReceived;
                    tango = report > tango;
                    zulu = false;
                    if(!tango) { _fun00006_ip = 507; continue _fun00005 }
 481:
                    tango = _closure3_slot0;
                    report = tango.duration;
                    tango = report.listening;
                    tango = tango + 1;
                    report['listening'] = tango;
                    zulu = true;
 507:
                    if(mike) { _fun00006_ip = 513; continue _fun00005 }
 510:
                    mike = zulu;
 513:
                    if(!mike) { _fun00006_ip = 540; continue _fun00005 }
 516:
                    entity = _closure3_slot0;
                    mike = entity.duration;
                    entity = mike.participation;
                    entity = entity + 1;
                    mike['participation'] = entity;
 540:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['sampleStats'] = tango;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 5;
            mike = report[mike];
            mike = tango.bind(entity)(mike);
            oscar = mike.prototype;
            oscar = Object.create(oscar, {constructor: {value: mike}});
            verify = oscar;
            mike = new verify[mike](options);
            mike = mike instanceof Object ? mike : oscar;
            zulu['networkQuality'] = mike;
            mike = 6;
            mike = report[mike];
            mike = tango.bind(entity)(mike);
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            verify = tango;
            mike = new verify[mike](options);
            mike = mike instanceof Object ? mike : tango;
            zulu['systemResources'] = mike;
            mike = {};
            zulu['inboundStats'] = mike;
            mike = {'packetsSent': 0, 'bytesSent': 0, 'packetsLost': 0, 'passthroughCount': 0, 'encryptSuccessCount': 0, 'encryptFailureCount': 0, 'encryptDuration': 0, 'encryptAttempts': 0, 'encryptMaxAttempts': 0, 'encryptMissingKeyCount': 0};
            zulu['outboundStats'] = mike;
            mike = {'listening': 0, 'speaking': 0, 'participation': 0, 'connected': 0};
            zulu['duration'] = mike;
            mike = {};
            zulu['periodicInboundStats'] = mike;
            mike = {};
            zulu['inputDeviceStats'] = mike;
            mike = {};
            zulu['outputDeviceStats'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'start';
        entity['key'] = mike;
        mike = function() { // Original name: value
            mike = this;
            report = mike.connection;
            tango = report.on;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 7;
            zulu = zulu[entity];
            entity = undefined;
            zulu = oscar.bind(entity)(zulu);
            zulu = zulu.BaseConnectionEvent;
            zulu = zulu.Stats;
            mike = mike.sampleStats;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(16);
        mike[0] = entity;
        entity = {};
        oscar = 'stop';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            report = mike.connection;
            tango = report.off;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 7;
            zulu = zulu[entity];
            entity = undefined;
            zulu = oscar.bind(entity)(zulu);
            zulu = zulu.BaseConnectionEvent;
            zulu = zulu.Stats;
            mike = mike.sampleStats;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'getMosStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tango = _closure1_slot1;
                entity = _closure1_slot2;
                zulu = 4;
                mike = entity[zulu];
                entity = undefined;
                golf = tango.bind(entity)(mike);
                oscar = golf.reduce;
                entity = this;
                report = entity.inboundStats;
                mike = {'mosSum': 0, 'mosCount': 0};
                tango = 0;
                entity = [0, 0, 0, 0, 0];
                mike['mosBuckets'] = entity;
                entity = function(argFoo, argBar) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        tango = argBar;
                        zulu = entity.mosSum;
                        mike = tango.mosSum;
                        mike = zulu + mike;
                        entity['mosSum'] = mike;
                        zulu = entity.mosCount;
                        mike = tango.mosCount;
                        mike = zulu + mike;
                        entity['mosCount'] = mike;
                        mike = 5;
                        zulu = 0;
 55:
                        oscar = entity.mosBuckets;
                        golf = oscar[zulu];
                        report = tango.mosBuckets;
                        report = report[zulu];
                        report = golf + report;
                        oscar[zulu] = report;
                        zulu = zulu + 1;
                        if(zulu < mike) { _fun00014_ip = 55; continue _fun00013 }
 90:
                        return entity;
                    }
                };
                mike = oscar.bind(golf)(report, entity, mike);
                entity = {};
                report = mike.mosCount;
                report = report > tango;
                if(!report) { _fun00012_ip = 112; continue _fun00011 }
 96:
                oscar = mike.mosSum;
                report = mike.mosCount;
                tango = oscar / report;
 112:
                entity['mos_mean'] = tango;
                report = mike.mosBuckets;
                tango = 1;
                tango = report[tango];
                entity['mos_1'] = tango;
                report = mike.mosBuckets;
                tango = 2;
                tango = report[tango];
                entity['mos_2'] = tango;
                report = mike.mosBuckets;
                tango = 3;
                tango = report[tango];
                entity['mos_3'] = tango;
                mike = mike.mosBuckets;
                mike = mike[zulu];
                entity['mos_4'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'getPacketStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            oscar = tango.bind(entity)(mike);
            report = oscar.reduce;
            tango = zulu.inboundStats;
            mike = function(argFoo, argBar) {
                entity = argFoo;
                mike = argBar;
                tango = entity.packetsReceived;
                zulu = mike.packetsReceived;
                zulu = tango + zulu;
                entity['packetsReceived'] = zulu;
                tango = entity.packetsReceivedLost;
                zulu = mike.packetsLost;
                zulu = tango + zulu;
                entity['packetsReceivedLost'] = zulu;
                tango = entity.nackCount;
                zulu = mike.nackCount;
                zulu = tango + zulu;
                entity['nackCount'] = zulu;
                tango = entity.fecPacketsReceived;
                zulu = mike.fecPacketsReceived;
                zulu = tango + zulu;
                entity['fecPacketsReceived'] = zulu;
                zulu = entity.fecPacketsDiscarded;
                mike = mike.fecPacketsDiscarded;
                mike = zulu + mike;
                entity['fecPacketsDiscarded'] = mike;
                return entity;
            };
            entity = {'packetsReceived': 0, 'packetsReceivedLost': 0, 'nackCount': 0, 'fecPacketsReceived': 0, 'fecPacketsDiscarded': 0};
            mike = report.bind(oscar)(tango, mike, entity);
            entity = {};
            tango = zulu.outboundStats;
            tango = tango.packetsSent;
            entity['packets_sent'] = tango;
            zulu = zulu.outboundStats;
            zulu = zulu.packetsLost;
            entity['packets_sent_lost'] = zulu;
            zulu = mike.packetsReceived;
            entity['packets_received'] = zulu;
            zulu = mike.packetsReceivedLost;
            entity['packets_received_lost'] = zulu;
            zulu = mike.nackCount;
            entity['num_nacks_sent'] = zulu;
            zulu = mike.fecPacketsReceived;
            entity['fec_packets_received'] = zulu;
            mike = mike.fecPacketsDiscarded;
            entity['fec_packets_discarded'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'getBytesStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            oscar = tango.bind(entity)(mike);
            report = oscar.reduce;
            tango = zulu.inboundStats;
            mike = function(argFoo, argBar) {
                entity = argBar;
                mike = entity.bytesReceived;
                entity = argFoo;
                entity = entity + mike;
                return entity;
            };
            entity = 0;
            mike = report.bind(oscar)(tango, mike, entity);
            entity = {};
            zulu = zulu.outboundStats;
            zulu = zulu.bytesSent;
            entity['bytes_sent'] = zulu;
            entity['bytes_received'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'getNetworkStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.networkQuality;
            entity = mike.getStats;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'getSystemResourceStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.systemResources;
            entity = mike.getStats;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'getBufferStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 4;
                entity = tango[entity];
                tango = undefined;
                golf = zulu.bind(tango)(entity);
                oscar = golf.reduce;
                entity = this;
                zulu = entity.inboundStats;
                entity = function(argFoo, argBar) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = argFoo;
                        mike = argBar;
                        oscar = null;
                        zulu = oscar == entity;
                        if(zulu) { _fun00018_ip = 84; continue _fun00017 }
 15:
                        tango = mike.bufferStats;
                        tango = tango.audioJitterBuffer;
                        tango = oscar != tango;
                        if(!tango) { _fun00018_ip = 44; continue _fun00017 }
 34:
                        report = entity.audioJitterBuffer;
                        tango = oscar != report;
 44:
                        if(!tango) { _fun00018_ip = 81; continue _fun00017 }
 47:
                        report = mike.bufferStats;
                        report = report.audioJitterBuffer;
                        oscar = report.p75;
                        report = entity.audioJitterBuffer;
                        report = report.p75;
                        tango = oscar > report;
 81:
                        zulu = tango;
 84:
                        if(!zulu) { _fun00018_ip = 93; continue _fun00017 }
 87:
                        entity = mike.bufferStats;
 93:
                        return entity;
                    }
                };
                report = null;
                oscar = oscar.bind(golf)(zulu, entity, report);
                entity = {};
                zulu = _closure1_slot7;
                mike = {};
                options = report != oscar;
                golf = null;
                if(!options) { _fun00016_ip = 79; continue _fun00015 }
 73:
                golf = oscar.audioJitterBuffer;
 79:
                mike['audio_jitter_buffer'] = golf;
                options = report != oscar;
                golf = null;
                if(!options) { _fun00016_ip = 101; continue _fun00015 }
 95:
                golf = oscar.audioJitterTarget;
 101:
                mike['audio_jitter_target'] = golf;
                options = report != oscar;
                golf = null;
                if(!options) { _fun00016_ip = 123; continue _fun00015 }
 117:
                golf = oscar.audioJitterDelay;
 123:
                mike['audio_jitter_delay'] = golf;
                options = report != oscar;
                golf = null;
                if(!options) { _fun00016_ip = 145; continue _fun00015 }
 139:
                golf = oscar.relativeReceptionDelay;
 145:
                mike['relative_reception_delay'] = golf;
                golf = report != oscar;
                report = null;
                if(!golf) { _fun00016_ip = 167; continue _fun00015 }
 161:
                report = oscar.relativePlayoutDelay;
 167:
                mike['relative_playout_delay'] = report;
                offset = zulu.bind(tango)(mike);
                yankee = entity;
                mike = copyDataProperties(yankee, offset);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'getFrameOpStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.reduce;
            entity = this;
            zulu = entity.inboundStats;
            mike = function(argFoo, argBar) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    mike = argBar;
                    zulu = mike.frameOpStats;
                    zulu = zulu.silent;
                    tango = null;
                    if(!(tango != zulu)) { _fun00020_ip = 52; continue _fun00019 }
 24:
                    report = entity.silent;
                    zulu = mike.frameOpStats;
                    zulu = zulu.silent;
                    zulu = report + zulu;
                    entity['silent'] = zulu;
 52:
                    zulu = mike.frameOpStats;
                    zulu = zulu.normal;
                    if(!(tango != zulu)) { _fun00020_ip = 96; continue _fun00019 }
 68:
                    report = entity.normal;
                    zulu = mike.frameOpStats;
                    zulu = zulu.normal;
                    zulu = report + zulu;
                    entity['normal'] = zulu;
 96:
                    zulu = mike.frameOpStats;
                    zulu = zulu.merged;
                    if(!(tango != zulu)) { _fun00020_ip = 140; continue _fun00019 }
 112:
                    report = entity.merged;
                    zulu = mike.frameOpStats;
                    zulu = zulu.merged;
                    zulu = report + zulu;
                    entity['merged'] = zulu;
 140:
                    zulu = mike.frameOpStats;
                    zulu = zulu.expanded;
                    if(!(tango != zulu)) { _fun00020_ip = 184; continue _fun00019 }
 156:
                    report = entity.expanded;
                    zulu = mike.frameOpStats;
                    zulu = zulu.expanded;
                    zulu = report + zulu;
                    entity['expanded'] = zulu;
 184:
                    zulu = mike.frameOpStats;
                    zulu = zulu.accelerated;
                    if(!(tango != zulu)) { _fun00020_ip = 228; continue _fun00019 }
 200:
                    report = entity.accelerated;
                    zulu = mike.frameOpStats;
                    zulu = zulu.accelerated;
                    zulu = report + zulu;
                    entity['accelerated'] = zulu;
 228:
                    zulu = mike.frameOpStats;
                    zulu = zulu.preemptiveExpanded;
                    if(!(tango != zulu)) { _fun00020_ip = 272; continue _fun00019 }
 244:
                    report = entity.preemptiveExpanded;
                    zulu = mike.frameOpStats;
                    zulu = zulu.preemptiveExpanded;
                    zulu = report + zulu;
                    entity['preemptiveExpanded'] = zulu;
 272:
                    zulu = mike.frameOpStats;
                    zulu = zulu.cng;
                    if(!(tango != zulu)) { _fun00020_ip = 316; continue _fun00019 }
 288:
                    zulu = entity.cng;
                    mike = mike.frameOpStats;
                    mike = mike.cng;
                    mike = zulu + mike;
                    entity['cng'] = mike;
 316:
                    return entity;
                }
            };
            entity = {'silent': 0, 'normal': 0, 'merged': 0, 'expanded': 0, 'accelerated': 0, 'preemptiveExpanded': 0, 'cng': 0};
            mike = tango.bind(report)(zulu, mike, entity);
            entity = {};
            zulu = mike.silent;
            entity['frame_op_silent'] = zulu;
            zulu = mike.normal;
            entity['frame_op_normal'] = zulu;
            zulu = mike.merged;
            entity['frame_op_merged'] = zulu;
            zulu = mike.expanded;
            entity['frame_op_expanded'] = zulu;
            zulu = mike.accelerated;
            entity['frame_op_accelerated'] = zulu;
            zulu = mike.preemptiveExpanded;
            entity['frame_op_preemptive_expanded'] = zulu;
            mike = mike.cng;
            entity['frame_op_cng'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'getDurationStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = {};
            zulu = mike.duration;
            zulu = zulu.listening;
            entity['duration_listening'] = zulu;
            zulu = mike.duration;
            zulu = zulu.speaking;
            entity['duration_speaking'] = zulu;
            zulu = mike.duration;
            zulu = zulu.participation;
            entity['duration_participation'] = zulu;
            mike = mike.duration;
            mike = mike.connected;
            entity['duration_connected'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'getTransportStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = {};
            zulu = mike.decryptionFailures;
            entity['decryption_failures'] = zulu;
            mike = mike.routingFailures;
            entity['routing_failures'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'getE2EEStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 4;
            zulu = zulu[entity];
            entity = undefined;
            oscar = tango.bind(entity)(zulu);
            report = oscar.reduce;
            tango = mike.inboundStats;
            zulu = function(argFoo, argBar) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    tango = argBar;
                    oscar = entity.passthroughCount;
                    golf = tango.passthroughCount;
                    report = null;
                    options = report != golf;
                    mike = 0;
                    if(!options) { _fun00022_ip = 32; continue _fun00021 }
 29:
                    mike = golf;
 32:
                    mike = oscar + mike;
                    entity['passthroughCount'] = mike;
                    oscar = entity.decryptSuccessCount;
                    golf = tango.decryptSuccessCount;
                    options = report != golf;
                    mike = 0;
                    if(!options) { _fun00022_ip = 66; continue _fun00021 }
 63:
                    mike = golf;
 66:
                    mike = oscar + mike;
                    entity['decryptSuccessCount'] = mike;
                    oscar = entity.decryptFailureCount;
                    golf = tango.decryptFailureCount;
                    options = report != golf;
                    mike = 0;
                    if(!options) { _fun00022_ip = 100; continue _fun00021 }
 97:
                    mike = golf;
 100:
                    mike = oscar + mike;
                    entity['decryptFailureCount'] = mike;
                    oscar = entity.decryptDuration;
                    golf = tango.decryptDuration;
                    options = report != golf;
                    mike = 0;
                    if(!options) { _fun00022_ip = 134; continue _fun00021 }
 131:
                    mike = golf;
 134:
                    mike = oscar + mike;
                    entity['decryptDuration'] = mike;
                    oscar = entity.decryptAttempts;
                    golf = tango.decryptAttempts;
                    options = report != golf;
                    mike = 0;
                    if(!options) { _fun00022_ip = 168; continue _fun00021 }
 165:
                    mike = golf;
 168:
                    mike = oscar + mike;
                    entity['decryptAttempts'] = mike;
                    oscar = entity.decryptMissingKeyCount;
                    golf = tango.decryptMissingKeyCount;
                    options = report != golf;
                    mike = 0;
                    if(!options) { _fun00022_ip = 202; continue _fun00021 }
 199:
                    mike = golf;
 202:
                    mike = oscar + mike;
                    entity['decryptMissingKeyCount'] = mike;
                    mike = entity.decryptInvalidNonceCount;
                    tango = tango.decryptInvalidNonceCount;
                    report = report != tango;
                    zulu = 0;
                    if(!report) { _fun00022_ip = 236; continue _fun00021 }
 233:
                    zulu = tango;
 236:
                    mike = mike + zulu;
                    entity['decryptInvalidNonceCount'] = mike;
                    return entity;
                }
            };
            entity = {'passthroughCount': 0, 'decryptSuccessCount': 0, 'decryptFailureCount': 0, 'decryptDuration': 0, 'decryptAttempts': 0, 'decryptMissingKeyCount': 0, 'decryptInvalidNonceCount': 0};
            zulu = report.bind(oscar)(tango, zulu, entity);
            entity = {};
            tango = zulu.passthroughCount;
            entity['decrypt_passthrough_count'] = tango;
            tango = zulu.decryptSuccessCount;
            entity['decrypt_success_count'] = tango;
            tango = zulu.decryptFailureCount;
            entity['decrypt_failure_count'] = tango;
            tango = zulu.decryptDuration;
            entity['decrypt_duration'] = tango;
            tango = zulu.decryptAttempts;
            entity['decrypt_attempts'] = tango;
            tango = zulu.decryptMissingKeyCount;
            entity['decrypt_missing_key_count'] = tango;
            zulu = zulu.decryptInvalidNonceCount;
            entity['decrypt_invalid_nonce_count'] = zulu;
            zulu = mike.outboundStats;
            zulu = zulu.passthroughCount;
            entity['encrypt_passthrough_count'] = zulu;
            zulu = mike.outboundStats;
            zulu = zulu.encryptSuccessCount;
            entity['encrypt_success_count'] = zulu;
            zulu = mike.outboundStats;
            zulu = zulu.encryptFailureCount;
            entity['encrypt_failure_count'] = zulu;
            zulu = mike.outboundStats;
            zulu = zulu.encryptDuration;
            entity['encrypt_duration'] = zulu;
            zulu = mike.outboundStats;
            zulu = zulu.encryptAttempts;
            entity['encrypt_attempts'] = zulu;
            zulu = mike.outboundStats;
            zulu = zulu.encryptMaxAttempts;
            entity['encrypt_max_attempts'] = zulu;
            mike = mike.outboundStats;
            mike = mike.encryptMissingKeyCount;
            entity['encrypt_missing_key_count'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'getAudioDeviceStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zulu = this;
                entity = {};
                mike = zulu.inputDeviceStats;
                oscar = mike.restartCount;
                tango = null;
                golf = tango == oscar;
                report = undefined;
                if(golf) { _fun00024_ip = 34; continue _fun00023 }
 28:
                report = oscar.accumulated;
 34:
                entity['input_device_restart_count'] = report;
                report = zulu.outputDeviceStats;
                oscar = report.restartCount;
                golf = tango == oscar;
                report = undefined;
                if(golf) { _fun00024_ip = 68; continue _fun00023 }
 62:
                report = oscar.accumulated;
 68:
                entity['output_device_restart_count'] = report;
                report = zulu.inputDeviceStats;
                report = report.timeToFirstCallbackMs;
                entity['input_device_time_to_first_audio'] = report;
                report = zulu.outputDeviceStats;
                report = report.timeToFirstCallbackMs;
                entity['output_device_time_to_first_audio'] = report;
                report = zulu.outputDeviceStats;
                oscar = report.bufferViolations;
                golf = tango == oscar;
                report = undefined;
                if(golf) { _fun00024_ip = 140; continue _fun00023 }
 134:
                report = oscar.accumulated;
 140:
                entity['output_device_buffer_underrun_count'] = report;
                zulu = zulu.inputDeviceStats;
                zulu = zulu.bufferViolations;
                tango = tango == zulu;
                mike = undefined;
                if(tango) { _fun00024_ip = 174; continue _fun00023 }
 168:
                mike = zulu.accumulated;
 174:
                entity['input_device_buffer_overfull_count'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'getPeriodicStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                context = this;
                entity = new Array(0);
                mike = global;
                tango = mike.Object;
                zulu = tango.entries;
                mike = context.periodicInboundStats;
                record = zulu.bind(tango)(mike);
                mike = record.length;
                config = 0;
                mike = config < mike;
                sequence = undefined;
                vacuum = null;
                source = 2;
                update = 1;
                echo = 0;
                result = undefined;
                output = undefined;
                sizing = undefined;
                kilo = undefined;
                backup = undefined;
                foxtrot = undefined;
                romeo = undefined;
                yankee = undefined;
                offset = undefined;
                verify = undefined;
                options = undefined;
                golf = undefined;
                oscar = undefined;
                report = undefined;
                tango = undefined;
                zulu = undefined;
                if(!mike) { _fun00026_ip = 964; continue _fun00025 }
 96:
                papa = record[echo];
                mike = _closure1_slot3;
                mike = mike.bind(sequence)(papa, source);
                variable45 = mike[config];
                variable55 = mike[update];
                variable58 = variable55.previous;
                variable46 = variable55.current;
                variable44 = variable55.currentTimestampMs;
                mike = variable55.previousTimestampMs;
                variable56 = variable55.numRateSamples;
                variable43 = result;
                variable42 = output;
                variable41 = sizing;
                variable40 = kilo;
                variable39 = backup;
                variable38 = foxtrot;
                variable37 = romeo;
                variable36 = yankee;
                quebec = offset;
                equality = verify;
                whiskey = options;
                lima = golf;
                sierra = oscar;
                status = report;
                target = tango;
                papa = zulu;
                if(!(sequence !== mike)) { _fun00026_ip = 789; continue _fun00025 }
 202:
                variable43 = result;
                variable42 = output;
                variable41 = sizing;
                variable40 = kilo;
                variable39 = backup;
                variable38 = foxtrot;
                variable37 = romeo;
                variable36 = yankee;
                quebec = offset;
                equality = verify;
                whiskey = options;
                lima = golf;
                sierra = oscar;
                status = report;
                target = tango;
                papa = zulu;
                if(!(variable44 > mike)) { _fun00026_ip = 789; continue _fun00025 }
 257:
                variable47 = variable44 - mike;
                mike = {};
                mike['userId'] = variable45;
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
                mike['silent'] = variable48;
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
                kilo = variable50;
 348:
                mike['normal'] = variable48;
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
                foxtrot = variable50;
 391:
                mike['merged'] = variable48;
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
                mike['expanded'] = variable48;
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
                mike['accelerated'] = variable48;
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
                golf = variable59;
 520:
                mike['preemptiveExpanded'] = variable48;
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
                mike['cng'] = variable57;
                variable57 = variable55.accelerateRateSum;
                variable57 = variable57 / variable56;
                mike['accelerateRate'] = variable57;
                variable57 = variable55.expandRateSum;
                variable57 = variable57 / variable56;
                mike['expandRate'] = variable57;
                variable57 = variable55.preemptiveExpandRateSum;
                variable57 = variable57 / variable56;
                mike['preemptiveExpandRate'] = variable57;
                variable55 = variable55.speechExpandRateSum;
                variable55 = variable55 / variable56;
                mike['speechExpandRate'] = variable55;
                mike['durationMs'] = variable47;
                variable56 = mike.normal;
                variable55 = mike.merged;
                variable56 = variable56 + variable55;
                variable55 = mike.expanded;
                variable56 = variable56 + variable55;
                variable55 = mike.accelerated;
                variable56 = variable56 + variable55;
                variable55 = mike.preemptiveExpanded;
                variable55 = variable56 + variable55;
                variable43 = variable54;
                variable42 = output;
                variable41 = variable53;
                variable40 = kilo;
                variable39 = variable52;
                variable38 = foxtrot;
                variable37 = variable51;
                variable36 = yankee;
                quebec = variable50;
                equality = verify;
                whiskey = variable49;
                lima = golf;
                sierra = variable48;
                status = report;
                target = variable47;
                papa = mike;
                if(!(variable55 > config)) { _fun00026_ip = 789; continue _fun00025 }
 731:
                variable55 = entity.push;
                variable55 = variable55.bind(entity)(mike);
                variable43 = variable54;
                variable42 = output;
                variable41 = variable53;
                variable40 = kilo;
                variable39 = variable52;
                variable38 = foxtrot;
                variable37 = variable51;
                variable36 = yankee;
                quebec = variable50;
                equality = verify;
                whiskey = variable49;
                lima = golf;
                sierra = variable48;
                status = report;
                target = variable47;
                papa = mike;
 789:
                mike = context.periodicInboundStats;
                mike = mike[variable45];
                mike['accelerateRateSum'] = config;
                mike = context.periodicInboundStats;
                mike = mike[variable45];
                mike['expandRateSum'] = config;
                mike = context.periodicInboundStats;
                mike = mike[variable45];
                mike['preemptiveExpandRateSum'] = config;
                mike = context.periodicInboundStats;
                mike = mike[variable45];
                mike['speechExpandRateSum'] = config;
                mike = context.periodicInboundStats;
                mike = mike[variable45];
                mike['numRateSamples'] = config;
                mike = context.periodicInboundStats;
                mike = mike[variable45];
                mike['previous'] = variable46;
                mike = context.periodicInboundStats;
                mike = mike[variable45];
                mike['previousTimestampMs'] = variable44;
                echo = echo + 1;
                mike = record.length;
                result = variable43;
                output = variable42;
                sizing = variable41;
                kilo = variable40;
                backup = variable39;
                foxtrot = variable38;
                romeo = variable37;
                yankee = variable36;
                offset = quebec;
                verify = equality;
                options = whiskey;
                golf = lima;
                oscar = sierra;
                report = status;
                tango = target;
                zulu = papa;
                if(echo < mike) { _fun00026_ip = 96; continue _fun00025 }
 964:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = 'calculateMos';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tango = this;
                zulu = tango.calculateR;
                mike = argFoo;
                entity = argBar;
                options = zulu.bind(tango)(mike, entity);
                entity = 0;
                mike = options < entity;
                golf = 1;
                entity = golf;
                if(mike) { _fun00028_ip = 116; continue _fun00027 }
 38:
                report = 100;
                zulu = options > report;
                mike = 4.5;
                if(zulu) { _fun00028_ip = 113; continue _fun00027 }
 58:
                zulu = 0.035;
                tango = zulu * options;
                zulu = 7.1e-06;
                oscar = zulu * options;
                zulu = 60;
                zulu = options - zulu;
                report = report - options;
                tango = golf + tango;
                zulu = oscar * zulu;
                zulu = zulu * report;
                mike = tango + zulu;
 113:
                entity = mike;
 116:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[14] = entity;
        entity = {};
        oscar = 'calculateR';
        entity['key'] = oscar;
        report = function(argFoo, argBar) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                tango = argFoo;
                entity = argBar;
                mike = 0.024;
                oscar = mike * tango;
                zulu = 177.3;
                report = tango > zulu;
                mike = 0;
                if(!report) { _fun00030_ip = 57; continue _fun00029 }
 39:
                tango = tango - zulu;
                zulu = 0.11;
                mike = zulu * tango;
 57:
                zulu = 122;
                tango = zulu * entity;
                zulu = 10;
                entity = entity + zulu;
                report = 93.4;
                mike = oscar + mike;
                mike = report - mike;
                entity = tango / entity;
                entity = zulu + entity;
                entity = mike - entity;
                return entity;
            }
        };
        entity['value'] = report;
        mike[15] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = function(argFoo, argBar) { // Original name: handleCounter
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            mike = argFoo;
            entity = argBar;
            zulu = null;
            if(!(zulu == entity)) { _fun00032_ip = 22; continue _fun00031 }
 12:
            entity = {'accumulated': 0, 'lastValue': 0};
 22:
            tango = entity.accumulated;
            zulu = entity.lastValue;
            entity = {};
            if(!(!(zulu > mike))) { _fun00032_ip = 50; continue _fun00031 }
 40:
            zulu = mike - zulu;
            zulu = tango + zulu;
            _fun00032_ip = 54; continue _fun00031;
 50:
            zulu = tango + mike;
 54:
            entity['accumulated'] = zulu;
            entity['lastValue'] = mike;
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/VoiceQuality.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();