// discord_common/js/packages/media-engine/webrtc/SDP.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    option = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    entity = function(argFoo, argBar, argBaz) { // Original name: makeSSRC
        tangon = argBar;
        oscard = global;
        entity = oscard.HermesInternal;
        zuuluu = entity.concat;
        option = '';
        michal = argFoo;
        entity = '-';
        report = zuuluu.bind(option)(michal, entity, tangon);
        entity = oscard.HermesInternal;
        michal = entity.concat;
        entity = argBaz;
        zuuluu = michal.bind(option)(entity, report);
        michal = {};
        entity = 'cname';
        michal['attribute'] = entity;
        michal['id'] = tangon;
        michal['value'] = report;
        entity = new Array(4);
        entity[0] = michal;
        michal = {};
        golfie = 'msid';
        michal['attribute'] = golfie;
        michal['id'] = tangon;
        oscard = oscard.HermesInternal;
        golfie = oscard.concat;
        oscard = ' ';
        oscard = golfie.bind(option)(report, oscard, zuuluu);
        michal['value'] = oscard;
        entity[1] = michal;
        michal = {};
        oscard = 'mslabel';
        michal['attribute'] = oscard;
        michal['id'] = tangon;
        michal['value'] = report;
        entity[2] = michal;
        michal = {};
        report = 'label';
        michal['attribute'] = report;
        michal['id'] = tangon;
        michal['value'] = zuuluu;
        entity[3] = michal;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: makeSDP
        tangon = argFoo;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.write;
        entity = {};
        oscard = 0;
        entity['version'] = oscard;
        oscard = {'start': 0, 'stop': 0};
        entity['timing'] = oscard;
        oscard = '-';
        golfie = {'address': '127.0.0.1', 'ipVer': 4, 'netType': 'IN', 'sessionId': '1420070400000', 'sessionVersion': 0, 'username': '-'};
        entity['origin'] = golfie;
        entity['name'] = oscard;
        oscard = {'semantic': 'WMS', 'token': '*'};
        entity['msidSemantic'] = oscard;
        oscard = {};
        golfie = 'BUNDLE';
        oscard['type'] = golfie;
        option = tangon.filter;
        golfie = function(argFoo) {
            entity = argFoo;
            michal = entity.mid;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        option = option.bind(tangon)(golfie);
        golfie = option.map;
        report = function(argFoo) {
            entity = argFoo;
            entity = entity.mid;
            return entity;
        };
        option = golfie.bind(option)(report);
        golfie = option.join;
        report = ' ';
        report = golfie.bind(option)(report);
        oscard['mids'] = report;
        report = new Array(1);
        report[0] = oscard;
        entity['groups'] = report;
        entity['media'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: makeMedia
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            backup = entity.mid;
            verify = entity.type;
            sizing = entity.setup;
            golfie = entity.direction;
            output = entity.baseSDP;
            zuuluu = entity.codec;
            report = entity.payload;
            romeon = entity.bitrate;
            kiloes = entity.ssrcs;
            option = entity.extensions;
            foxtra = entity.rtxPayload;
            oscard = entity.sendingVideo;
            entity = _closure1_slot8;
            entity = entity.INACTIVE;
            if(!(golfie === entity)) { _fun00002_ip = 208; continue _fun00001 }
 93:
            entity = _closure1_slot4;
            if(entity) { _fun00002_ip = 208; continue _fun00001 }
 100:
            entity = {};
            offset = {'ip': '0.0.0.0', 'version': 4};
            entity['connection'] = offset;
            offset = _closure1_slot8;
            offset = offset.INACTIVE;
            entity['direction'] = offset;
            offset = new Array(0);
            entity['fmtp'] = offset;
            entity['payloads'] = report;
            offset = 0;
            entity['port'] = offset;
            offset = _closure1_slot9;
            entity['protocol'] = offset;
            yankee = {'codec': 'NULL', 'payload': null, 'rate': 0};
            yankee['payload'] = report;
            offset = new Array(1);
            offset[0] = yankee;
            entity['rtp'] = offset;
            offset = undefined;
            entity['mid'] = offset;
            entity['type'] = verify;
            return entity;
 208:
            yankee = _closure1_slot0;
            offset = _closure1_slot1;
            entity = 4;
            entity = offset[entity];
            offset = undefined;
            yankee = yankee.bind(offset)(entity);
            entity = yankee.parse;
            entity = entity.bind(yankee)(output);
            output = _closure1_slot2;
            yankee = entity.media;
            entity = 1;
            entity = output.bind(offset)(yankee, entity);
            yankee = 0;
            entity = entity[yankee];
            entity['type'] = verify;
            output = _closure1_slot9;
            entity['protocol'] = output;
            entity['payloads'] = report;
            entity['setup'] = sizing;
            entity['mid'] = backup;
            backup = 'rtcp-mux';
            entity['rtcpMux'] = backup;
            entity['direction'] = golfie;
            entity['ssrcs'] = kiloes;
            golfie = kiloes.length;
            if(!(golfie > yankee)) { _fun00002_ip = 551; continue _fun00001 }
 338:
            yankee = null;
            if(!(yankee != foxtra)) { _fun00002_ip = 447; continue _fun00001 }
 344:
            backup = _closure1_slot0;
            sizing = _closure1_slot1;
            golfie = 5;
            output = sizing[golfie];
            result = backup.bind(offset)(output);
            output = _closure1_slot5;
            echoed = result.bind(offset)(kiloes, output);
            result = echoed.map;
            output = function(argFoo) {
                michal = argFoo;
                entity = 0;
                entity = michal[entity];
                oscard = entity.id;
                entity = {};
                michal = 'FID';
                entity['semantics'] = michal;
                michal = 1;
                report = oscard + michal;
                michal = global;
                michal = michal.HermesInternal;
                tangon = michal.concat;
                zuuluu = '';
                michal = ' ';
                michal = tangon.bind(zuuluu)(oscard, michal, report);
                entity['ssrcs'] = michal;
                return entity;
            };
            output = result.bind(echoed)(output);
            entity['ssrcGroups'] = output;
            golfie = sizing[golfie];
            backup = backup.bind(offset)(golfie);
            golfie = _closure1_slot5;
            sizing = backup.bind(offset)(kiloes, golfie);
            backup = sizing.map;
            golfie = function(argFoo) {
                tangon = argFoo;
                michal = tangon.map;
                entity = function(argFoo) {
                    entity = {};
                    tangon = argFoo;
                    report = entity;
                    michal = copyDataProperties(report, tangon);
                    zuuluu = entity.id;
                    michal = 1;
                    michal = zuuluu + michal;
                    entity['id'] = michal;
                    return entity;
                };
                zuuluu = michal.bind(tangon)(entity);
                entity = new Array(0);
                report = 0;
                golfie = entity;
                oscard = tangon;
                report = arraySpread(golfie, oscard, report);
                golfie = entity;
                oscard = zuuluu;
                michal = arraySpread(golfie, oscard, report);
                return entity;
            };
            backup = backup.bind(sizing)(golfie);
            golfie = backup.flat;
            golfie = golfie.bind(backup)();
            entity['ssrcs'] = golfie;
 447:
            golfie = _closure1_slot4;
            if(golfie) { _fun00002_ip = 489; continue _fun00001 }
 454:
            backup = _closure1_slot0;
            sizing = _closure1_slot1;
            golfie = 6;
            golfie = sizing[golfie];
            golfie = backup.bind(offset)(golfie);
            backup = golfie.name;
            golfie = 'Firefox';
            if(!(golfie === backup)) { _fun00002_ip = 551; continue _fun00001 }
 489:
            backup = kiloes.find;
            golfie = function(argFoo) {
                entity = argFoo;
                michal = entity.attribute;
                entity = 'msid';
                entity = entity === michal;
                return entity;
            };
            golfie = backup.bind(kiloes)(golfie);
            if(!(yankee != golfie)) { _fun00002_ip = 1201; continue _fun00001 }
 511:
            golfie = golfie.value;
            entity['msid'] = golfie;
            backup = entity.ssrcs;
            yankee = backup.filter;
            golfie = function(argFoo) {
                entity = argFoo;
                michal = entity.attribute;
                entity = 'cname';
                entity = entity === michal;
                return entity;
            };
            golfie = yankee.bind(backup)(golfie);
            entity['ssrcs'] = golfie;
 551:
            golfie = 'audio';
            if(!(golfie !== verify)) { _fun00002_ip = 967; continue _fun00001 }
 562:
            golfie = 'video';
            if(!(golfie === verify)) { _fun00002_ip = 1199; continue _fun00001 }
 573:
            verify = option.filter;
            golfie = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.uri;
                    entity = 'urn:ietf:params:rtp-hdrext:toffset';
                    entity = entity === zuuluu;
                    if(entity) { _fun00004_ip = 36; continue _fun00003 }
 21:
                    tangon = michal.uri;
                    zuuluu = 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time';
                    entity = zuuluu === tangon;
 36:
                    if(entity) { _fun00004_ip = 54; continue _fun00003 }
 39:
                    tangon = michal.uri;
                    zuuluu = 'urn:3gpp:video-orientation';
                    entity = zuuluu === tangon;
 54:
                    if(entity) { _fun00004_ip = 72; continue _fun00003 }
 57:
                    tangon = michal.uri;
                    zuuluu = 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01';
                    entity = zuuluu === tangon;
 72:
                    if(entity) { _fun00004_ip = 90; continue _fun00003 }
 75:
                    zuuluu = michal.uri;
                    michal = 'http://www.webrtc.org/experiments/rtp-hdrext/playout-delay';
                    entity = michal === zuuluu;
 90:
                    return entity;
                }
            };
            golfie = verify.bind(option)(golfie);
            entity['ext'] = golfie;
            yankee = entity.rtp;
            verify = yankee.push;
            golfie = {};
            golfie['codec'] = zuuluu;
            golfie['payload'] = report;
            backup = 90000;
            golfie['rate'] = backup;
            golfie = verify.bind(yankee)(golfie);
            golfie = global;
            verify = golfie.HermesInternal;
            yankee = verify.concat;
            verify = 'x-google-max-bitrate=';
            yankee = yankee.bind(verify)(romeon);
            verify = _closure1_slot3;
            verify = verify.H264;
            backup = yankee;
            if(!(zuuluu === verify)) { _fun00002_ip = 684; continue _fun00001 }
 674:
            verify = ';level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f';
            backup = yankee + verify;
 684:
            romeon = entity.fmtp;
            yankee = romeon.push;
            verify = {};
            verify['config'] = backup;
            verify['payload'] = report;
            verify = yankee.bind(romeon)(verify);
            yankee = {'type': 'ccm', 'subtype': 'fir'};
            yankee['payload'] = report;
            verify = new Array(5);
            verify[0] = yankee;
            yankee = {};
            romeon = 'nack';
            yankee['type'] = romeon;
            yankee['payload'] = report;
            verify[1] = yankee;
            yankee = {'type': 'nack', 'subtype': 'pli'};
            yankee['payload'] = report;
            verify[2] = yankee;
            yankee = {};
            romeon = 'goog-remb';
            yankee['type'] = romeon;
            yankee['payload'] = report;
            verify[3] = yankee;
            yankee = {};
            romeon = 'transport-cc';
            yankee['type'] = romeon;
            yankee['payload'] = report;
            verify[4] = yankee;
            entity['rtcpFb'] = verify;
            verify = null;
            if(!(verify != foxtra)) { _fun00002_ip = 1199; continue _fun00001 }
 839:
            romeon = entity.rtp;
            yankee = romeon.push;
            verify = {'codec': 'rtx', 'payload': null, 'rate': 90000};
            verify['payload'] = foxtra;
            verify = yankee.bind(romeon)(verify);
            romeon = entity.fmtp;
            yankee = romeon.push;
            verify = {};
            backup = golfie.HermesInternal;
            kiloes = backup.concat;
            backup = 'apt=';
            backup = kiloes.bind(backup)(report);
            verify['config'] = backup;
            verify['payload'] = foxtra;
            verify = yankee.bind(romeon)(verify);
            romeon = entity.payloads;
            golfie = golfie.HermesInternal;
            yankee = golfie.concat;
            verify = '';
            golfie = ' ';
            golfie = yankee.bind(verify)(romeon, golfie, foxtra);
            entity['payloads'] = golfie;
            _fun00002_ip = 1199; continue _fun00001;
 967:
            verify = _closure1_slot0;
            yankee = _closure1_slot1;
            golfie = 6;
            golfie = yankee[golfie];
            golfie = verify.bind(offset)(golfie);
            verify = golfie.name;
            golfie = 'Firefox';
            if(!(golfie !== verify)) { _fun00002_ip = 1056; continue _fun00001 }
 1002:
            verify = option.filter;
            golfie = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.uri;
                    entity = 'urn:ietf:params:rtp-hdrext:ssrc-audio-level';
                    entity = entity === zuuluu;
                    if(entity) { _fun00006_ip = 36; continue _fun00005 }
 21:
                    zuuluu = michal.uri;
                    michal = 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01';
                    entity = michal === zuuluu;
 36:
                    return entity;
                }
            };
            golfie = verify.bind(option)(golfie);
            entity['ext'] = golfie;
            verify = {};
            golfie = 'transport-cc';
            verify['type'] = golfie;
            verify['payload'] = report;
            golfie = new Array(1);
            golfie[0] = verify;
            entity['rtcpFb'] = golfie;
            _fun00002_ip = 1077; continue _fun00001;
 1056:
            golfie = option.filter;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.uri;
                entity = 'urn:ietf:params:rtp-hdrext:ssrc-audio-level';
                entity = entity === michal;
                return entity;
            };
            tangon = golfie.bind(option)(tangon);
            entity['ext'] = tangon;
 1077:
            option = entity.rtp;
            golfie = option.push;
            tangon = {};
            tangon['codec'] = zuuluu;
            verify = 2;
            tangon['encoding'] = verify;
            tangon['payload'] = report;
            verify = 48000;
            tangon['rate'] = verify;
            tangon = golfie.bind(option)(tangon);
            michal = _closure1_slot3;
            michal = michal.OPUS;
            if(!(zuuluu === michal)) { _fun00002_ip = 1190; continue _fun00001 }
 1138:
            tangon = entity.fmtp;
            zuuluu = tangon.push;
            michal = {};
            golfie = '1';
            if(!oscard) { _fun00002_ip = 1166; continue _fun00001 }
 1160:
            golfie = '0';
 1166:
            oscard = 'minptime=10;useinbandfec=1;usedtx=';
            oscard = oscard + golfie;
            michal['config'] = oscard;
            michal['payload'] = report;
            michal = zuuluu.bind(tangon)(michal);
 1190:
            michal = 60;
            entity['maxptime'] = michal;
 1199:
            return entity;
 1201:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            ctrled = 'msid missing';
            vacuum = michal;
            entity = new vacuum[zuuluu](ctrled, source);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: extractCodec
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            option = argBar;
            report = argCor;
            var _closure2_slot0 = report;
            zuuluu = golfie.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.codec;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            tangon = zuuluu.bind(golfie)(entity);
            var _closure2_slot1 = tangon;
            entity = null;
            if(!(entity != tangon)) { _fun00008_ip = 144; continue _fun00007 }
 40:
            oscard = option.find;
            zuuluu = function(argFoo) {
                entity = global;
                zuuluu = entity.RegExp;
                michal = _closure2_slot1;
                tangon = michal.payload;
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = '^apt=';
                michal = michal.bind(entity)(tangon);
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.test;
                entity = argFoo;
                entity = entity.config;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = oscard.bind(option)(zuuluu);
            var _closure2_slot2 = zuuluu;
            oscard = entity != zuuluu;
            zuuluu = null;
            if(!oscard) { _fun00008_ip = 98; continue _fun00007 }
 68:
            oscard = golfie.find;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.codec;
                    entity = _closure1_slot3;
                    entity = entity.RTX;
                    entity = zuuluu === entity;
                    if(!entity) { _fun00010_ip = 52; continue _fun00009 }
 29:
                    zuuluu = michal.payload;
                    michal = _closure2_slot2;
                    michal = michal.payload;
                    entity = zuuluu === michal;
 52:
                    return entity;
                }
            };
            michal = oscard.bind(golfie)(michal);
            oscard = entity != michal;
            zuuluu = null;
            if(!oscard) { _fun00008_ip = 98; continue _fun00007 }
 92:
            zuuluu = michal.payload;
 98:
            michal = {};
            oscard = argBaz;
            michal['type'] = oscard;
            michal['name'] = report;
            oscard = argGra;
            report = 1;
            report = oscard + report;
            michal['priority'] = report;
            tangon = tangon.payload;
            michal['payloadType'] = tangon;
            michal['rtxPayloadType'] = zuuluu;
            return michal;
 144:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    tangon = function(argFoo) { // Original name: extractSDP
        oscard = _closure1_slot0;
        golfie = _closure1_slot1;
        entity = 4;
        entity = golfie[entity];
        report = undefined;
        zuuluu = oscard.bind(report)(entity);
        michal = zuuluu.parse;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        tangon = entity.media;
        zuuluu = tangon.reduce;
        michal = {'outboundStreams': null, 'codecs': null, 'audioSSRC': 0, 'videoSSRC': 0, 'rtxSSRC': 0};
        entity = new Array(0);
        michal['outboundStreams'] = entity;
        entity = new Array(0);
        michal['codecs'] = entity;
        entity = function(argFoo, argBar) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                michal = argBar;
                var _closure3_slot0 = entity;
                tangon = michal.type;
                var _closure3_slot1 = tangon;
                zuuluu = michal.rtp;
                var _closure3_slot2 = zuuluu;
                option = michal.ssrcs;
                zuuluu = michal.fmtp;
                var _closure3_slot3 = zuuluu;
                zuuluu = michal.direction;
                verify = michal.mid;
                golfie = entity.outboundStreams;
                report = golfie.push;
                michal = {};
                michal['type'] = tangon;
                michal['direction'] = zuuluu;
                michal['mid'] = verify;
                michal = report.bind(golfie)(michal);
                michal = 'audio';
                if(!(michal !== tangon)) { _fun00012_ip = 315; continue _fun00011 }
 102:
                michal = 'video';
                if(!(michal === tangon)) { _fun00012_ip = 417; continue _fun00011 }
 113:
                michal = _closure1_slot3;
                michal = michal.H264;
                golfie = new Array(3);
                golfie[0] = michal;
                michal = _closure1_slot3;
                michal = michal.VP8;
                golfie[1] = michal;
                michal = _closure1_slot3;
                michal = michal.VP9;
                golfie[2] = michal;
                report = golfie.forEach;
                michal = function(argFoo, argBar) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        option = _closure1_slot13;
                        foxtra = _closure3_slot2;
                        romeon = _closure3_slot3;
                        yankee = _closure3_slot1;
                        entity = undefined;
                        offset = argFoo;
                        verify = argBar;
                        backup = undefined;
                        tangon = backup[option](foxtra, romeon, yankee, offset, verify, option);
                        zuuluu = null;
                        if(!(zuuluu != tangon)) { _fun00014_ip = 62; continue _fun00013 }
 42:
                        michal = _closure3_slot0;
                        zuuluu = michal.codecs;
                        michal = zuuluu.push;
                        michal = michal.bind(zuuluu)(tangon);
 62:
                        return entity;
                    }
                };
                michal = report.bind(golfie)(michal);
                michal = _closure1_slot8;
                michal = michal.SENDRECV;
                if(!(zuuluu === michal)) { _fun00012_ip = 417; continue _fun00011 }
 194:
                report = null;
                verify = report == option;
                golfie = undefined;
                if(verify) { _fun00012_ip = 220; continue _fun00011 }
 205:
                offset = option.find;
                verify = function(argFoo) {
                    entity = argFoo;
                    michal = entity.attribute;
                    entity = 'cname';
                    entity = entity === michal;
                    return entity;
                };
                golfie = offset.bind(option)(verify);
 220:
                if(!(report != golfie)) { _fun00012_ip = 235; continue _fun00011 }
 224:
                golfie = golfie.id;
                entity['videoSSRC'] = golfie;
 235:
                golfie = report == option;
                michal = undefined;
                if(golfie) { _fun00012_ip = 260; continue _fun00011 }
 244:
                verify = option.findLast;
                golfie = function(argFoo) {
                    entity = argFoo;
                    michal = entity.attribute;
                    entity = 'cname';
                    entity = entity === michal;
                    return entity;
                };
                michal = verify.bind(option)(golfie);
 260:
                if(!(report != michal)) { _fun00012_ip = 417; continue _fun00011 }
 267:
                golfie = michal.id;
                report = entity.videoSSRC;
                if(!(golfie === report)) { _fun00012_ip = 302; continue _fun00011 }
 282:
                golfie = _closure1_slot6;
                report = golfie.warn;
                tangon = 'Unable to find a unique rtx SSRC!';
                tangon = report.bind(golfie)(tangon);
 302:
                michal = michal.id;
                entity['rtxSSRC'] = michal;
                _fun00012_ip = 417; continue _fun00011;
 315:
                tangon = _closure1_slot3;
                tangon = tangon.OPUS;
                golfie = new Array(1);
                golfie[0] = tangon;
                report = golfie.forEach;
                tangon = function(argFoo, argBar) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        option = _closure1_slot13;
                        foxtra = _closure3_slot2;
                        romeon = _closure3_slot3;
                        yankee = _closure3_slot1;
                        entity = undefined;
                        offset = argFoo;
                        verify = argBar;
                        backup = undefined;
                        tangon = backup[option](foxtra, romeon, yankee, offset, verify, option);
                        zuuluu = null;
                        if(!(zuuluu != tangon)) { _fun00016_ip = 62; continue _fun00015 }
 42:
                        michal = _closure3_slot0;
                        zuuluu = michal.codecs;
                        michal = zuuluu.push;
                        michal = michal.bind(zuuluu)(tangon);
 62:
                        return entity;
                    }
                };
                tangon = report.bind(golfie)(tangon);
                michal = _closure1_slot8;
                michal = michal.SENDRECV;
                zuuluu = zuuluu === michal;
                michal = undefined;
                if(!zuuluu) { _fun00012_ip = 403; continue _fun00011 }
 370:
                report = null;
                golfie = report == option;
                tangon = undefined;
                if(golfie) { _fun00012_ip = 396; continue _fun00011 }
 381:
                golfie = option.find;
                oscard = function(argFoo) {
                    entity = argFoo;
                    michal = entity.attribute;
                    entity = 'cname';
                    entity = entity === michal;
                    return entity;
                };
                tangon = golfie.bind(option)(oscard);
 396:
                zuuluu = report != tangon;
                michal = tangon;
 403:
                if(!zuuluu) { _fun00012_ip = 417; continue _fun00011 }
 406:
                michal = michal.id;
                entity['audioSSRC'] = michal;
 417:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        michal = 7;
        michal = golfie[michal];
        tangon = oscard.bind(report)(michal);
        zuuluu = entity.codecs;
        michal = 8;
        michal = golfie[michal];
        michal = oscard.bind(report)(michal);
        michal = tangon.bind(report)(zuuluu, michal);
        entity['codecs'] = michal;
        return entity;
    };
    var _closure1_slot14 = tangon;
    entity = global;
    offset = entity.Object;
    golfie = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = verify[report];
    report = option.bind(entity)(report);
    report = report.Codecs;
    var _closure1_slot3 = report;
    report = 2;
    report = verify[report];
    report = option.bind(entity)(report);
    report = report.BROWSER_SUPPORTS_UNIFIED_PLAN;
    var _closure1_slot4 = report;
    report = 4;
    var _closure1_slot5 = report;
    report = 3;
    report = verify[report];
    report = option.bind(entity)(report);
    golfie = report.Logger;
    report = golfie.prototype;
    oscard = Object.create(report, {constructor: {value: golfie}});
    foxtra = 'SDP';
    backup = oscard;
    report = new backup[golfie](foxtra, romeon);
    report = report instanceof Object ? report : oscard;
    var _closure1_slot6 = report;
    oscard = {};
    report = 'a';
    oscard['AUDIO'] = report;
    report = 'v';
    oscard['VIDEO'] = report;
    var _closure1_slot7 = oscard;
    report = {};
    golfie = 'sendrecv';
    report['SENDRECV'] = golfie;
    golfie = 'sendonly';
    report['SENDONLY'] = golfie;
    golfie = 'recvonly';
    report['RECVONLY'] = golfie;
    golfie = 'inactive';
    report['INACTIVE'] = golfie;
    var _closure1_slot8 = report;
    golfie = 'UDP/TLS/RTP/SAVPF';
    var _closure1_slot9 = golfie;
    golfie = 9;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = '../discord_common/js/packages/media-engine/webrtc/SDP.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['Sentinels'] = oscard;
    zuuluu['Directions'] = report;
    report = function(argFoo) { // Original name: getDirection
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot8;
            michal = michal.RECVONLY;
            if(!(michal !== zuuluu)) { _fun00018_ip = 84; continue _fun00017 }
 20:
            michal = _closure1_slot8;
            michal = michal.SENDONLY;
            if(!(michal !== zuuluu)) { _fun00018_ip = 72; continue _fun00017 }
 34:
            michal = _closure1_slot8;
            michal = michal.SENDRECV;
            if(!(michal !== zuuluu)) { _fun00018_ip = 60; continue _fun00017 }
 48:
            michal = _closure1_slot8;
            michal = michal.INACTIVE;
            return michal;
 60:
            michal = _closure1_slot8;
            michal = michal.SENDRECV;
            return michal;
 72:
            michal = _closure1_slot8;
            michal = michal.RECVONLY;
            return michal;
 84:
            entity = _closure1_slot8;
            entity = entity.SENDONLY;
            return entity;
        }
    };
    zuuluu['getDirection'] = report;
    report = function(argFoo) { // Original name: generateSessionDescription
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tangon = entity.type;
            output = entity.baseSDP;
            var _closure2_slot0 = output;
            result = entity.direction;
            ctrled = entity.audioCodec;
            var _closure2_slot1 = ctrled;
            source = entity.audioPayloadType;
            var _closure2_slot2 = source;
            backup = entity.audioBitRate;
            var _closure2_slot3 = backup;
            sizing = entity.videoCodec;
            var _closure2_slot4 = sizing;
            kiloes = entity.videoPayloadType;
            var _closure2_slot5 = kiloes;
            foxtra = entity.videoBitRate;
            var _closure2_slot6 = foxtra;
            yankee = entity.rtxPayloadType;
            var _closure2_slot7 = yankee;
            option = entity.ssrcs;
            romeon = entity.extensions;
            var _closure2_slot8 = romeon;
            report = undefined;
            var _closure2_slot10 = report;
            zuuluu = new Array(0);
            var _closure2_slot9 = zuuluu;
            offset = _closure1_slot6;
            verify = offset.info;
            entity = global;
            echoed = entity.JSON;
            golfie = echoed.stringify;
            update = golfie.bind(echoed)(option);
            golfie = entity.HermesInternal;
            echoed = golfie.concat;
            golfie = 'generateSessionDescription: ';
            golfie = echoed.bind(golfie)(update);
            golfie = verify.bind(offset)(golfie);
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            golfie = 6;
            golfie = offset[golfie];
            golfie = verify.bind(report)(golfie);
            verify = golfie.name;
            golfie = 'Firefox';
            if(!(golfie !== verify)) { _fun00020_ip = 483; continue _fun00019 }
 223:
            echoed = 'actpass';
            golfie = 'answer';
            if(!(golfie === tangon)) { _fun00020_ip = 241; continue _fun00019 }
 237:
            echoed = 'passive';
 241:
            verify = option.filter;
            golfie = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    michal = report().value;
                    michal = entity;
                    oscard = undefined;
                    tangon = michal === oscard;
                    if(tangon) { _fun00022_ip = 33; continue _fun00021 }
 22:
                    michal = report().value;
                    michal = entity;
                    tangon = michal === oscard;
 33:
                    zuuluu = undefined;
                    if(tangon) { _fun00022_ip = 63; continue _fun00021 }
 38:
                    golfie = report().value;
                    michal = entity;
                    michal = michal === oscard;
                    zuuluu = undefined;
                    tangon = michal;
                    if(michal) { _fun00022_ip = 63; continue _fun00021 }
 57:
                    zuuluu = golfie;
                    tangon = michal;
 63:
                    michal = undefined;
                    if(tangon) { _fun00022_ip = 93; continue _fun00021 }
 68:
                    option = report().value;
                    golfie = entity;
                    golfie = golfie === oscard;
                    michal = undefined;
                    tangon = golfie;
                    if(golfie) { _fun00022_ip = 93; continue _fun00021 }
 87:
                    michal = option;
                    tangon = golfie;
 93:
                    if(tangon) { _fun00022_ip = 107; continue _fun00021 }
 96:
                    report = report().value;
                    report = entity;
                    tangon = report === oscard;
 107:
                    if(tangon) { _fun00022_ip = 113; continue _fun00021 }
 110:
                    entity.return();
 113:
                    entity = _closure1_slot8;
                    entity = entity.INACTIVE;
                    entity = michal !== entity;
                    if(!entity) { _fun00022_ip = 141; continue _fun00021 }
 133:
                    michal = 'audio';
                    entity = michal === zuuluu;
 141:
                    return entity;
                }
            };
            offset = verify.bind(option)(golfie);
            verify = offset.map;
            golfie = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    oscard = argFoo;
                    entity = oscard[Symbol.iterator];
                    oscard = entity().next;
                    zuuluu = oscard().value;
                    michal = entity;
                    report = undefined;
                    michal = michal === report;
                    tangon = undefined;
                    if(michal) { _fun00024_ip = 27; continue _fun00023 }
 24:
                    tangon = zuuluu;
 27:
                    zuuluu = undefined;
                    if(michal) { _fun00024_ip = 57; continue _fun00023 }
 32:
                    golfie = oscard().value;
                    oscard = entity;
                    oscard = oscard === report;
                    zuuluu = undefined;
                    michal = oscard;
                    if(oscard) { _fun00024_ip = 57; continue _fun00023 }
 51:
                    zuuluu = golfie;
                    michal = oscard;
 57:
                    if(michal) { _fun00024_ip = 63; continue _fun00023 }
 60:
                    entity.return();
 63:
                    michal = _closure1_slot10;
                    entity = _closure1_slot7;
                    entity = entity.AUDIO;
                    entity = michal.bind(report)(zuuluu, tangon, entity);
                    return entity;
                }
            };
            update = verify.bind(offset)(golfie);
            verify = zuuluu.push;
            offset = _closure1_slot12;
            golfie = {'mid': 'audio', 'type': 'audio'};
            golfie['setup'] = echoed;
            golfie['direction'] = result;
            golfie['baseSDP'] = output;
            golfie['codec'] = ctrled;
            golfie['payload'] = source;
            golfie['bitrate'] = backup;
            backup = update.flat;
            backup = backup.bind(update)();
            golfie['ssrcs'] = backup;
            golfie['extensions'] = romeon;
            golfie = offset.bind(report)(golfie);
            golfie = verify.bind(zuuluu)(golfie);
            golfie = 0;
            if(!(kiloes > golfie)) { _fun00020_ip = 518; continue _fun00019 }
 363:
            verify = option.filter;
            golfie = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    michal = report().value;
                    michal = entity;
                    oscard = undefined;
                    tangon = michal === oscard;
                    if(tangon) { _fun00026_ip = 33; continue _fun00025 }
 22:
                    michal = report().value;
                    michal = entity;
                    tangon = michal === oscard;
 33:
                    zuuluu = undefined;
                    if(tangon) { _fun00026_ip = 63; continue _fun00025 }
 38:
                    golfie = report().value;
                    michal = entity;
                    michal = michal === oscard;
                    zuuluu = undefined;
                    tangon = michal;
                    if(michal) { _fun00026_ip = 63; continue _fun00025 }
 57:
                    zuuluu = golfie;
                    tangon = michal;
 63:
                    michal = undefined;
                    if(tangon) { _fun00026_ip = 93; continue _fun00025 }
 68:
                    option = report().value;
                    golfie = entity;
                    golfie = golfie === oscard;
                    michal = undefined;
                    tangon = golfie;
                    if(golfie) { _fun00026_ip = 93; continue _fun00025 }
 87:
                    michal = option;
                    tangon = golfie;
 93:
                    if(tangon) { _fun00026_ip = 107; continue _fun00025 }
 96:
                    report = report().value;
                    report = entity;
                    tangon = report === oscard;
 107:
                    if(tangon) { _fun00026_ip = 113; continue _fun00025 }
 110:
                    entity.return();
 113:
                    entity = _closure1_slot8;
                    entity = entity.INACTIVE;
                    entity = michal !== entity;
                    if(!entity) { _fun00026_ip = 141; continue _fun00025 }
 133:
                    michal = 'video';
                    entity = michal === zuuluu;
 141:
                    return entity;
                }
            };
            offset = verify.bind(option)(golfie);
            verify = offset.map;
            golfie = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    oscard = argFoo;
                    entity = oscard[Symbol.iterator];
                    oscard = entity().next;
                    zuuluu = oscard().value;
                    michal = entity;
                    report = undefined;
                    michal = michal === report;
                    tangon = undefined;
                    if(michal) { _fun00028_ip = 27; continue _fun00027 }
 24:
                    tangon = zuuluu;
 27:
                    zuuluu = undefined;
                    if(michal) { _fun00028_ip = 57; continue _fun00027 }
 32:
                    golfie = oscard().value;
                    oscard = entity;
                    oscard = oscard === report;
                    zuuluu = undefined;
                    michal = oscard;
                    if(oscard) { _fun00028_ip = 57; continue _fun00027 }
 51:
                    zuuluu = golfie;
                    michal = oscard;
 57:
                    if(michal) { _fun00028_ip = 63; continue _fun00027 }
 60:
                    entity.return();
 63:
                    michal = _closure1_slot10;
                    entity = _closure1_slot7;
                    entity = entity.VIDEO;
                    entity = michal.bind(report)(zuuluu, tangon, entity);
                    return entity;
                }
            };
            backup = verify.bind(offset)(golfie);
            verify = zuuluu.push;
            offset = _closure1_slot12;
            golfie = {'mid': 'video', 'type': 'video'};
            golfie['setup'] = echoed;
            golfie['direction'] = result;
            golfie['baseSDP'] = output;
            golfie['codec'] = sizing;
            golfie['payload'] = kiloes;
            golfie['bitrate'] = foxtra;
            foxtra = backup.flat;
            foxtra = foxtra.bind(backup)();
            golfie['ssrcs'] = foxtra;
            golfie['extensions'] = romeon;
            golfie['rtxPayload'] = yankee;
            golfie = offset.bind(report)(golfie);
            golfie = verify.bind(zuuluu)(golfie);
            _fun00020_ip = 518; continue _fun00019;
 483:
            golfie = 'active';
            verify = 'answer';
            if(!(verify === tangon)) { _fun00020_ip = 499; continue _fun00019 }
 495:
            golfie = 'passive';
 499:
            _closure2_slot10 = golfie;
            golfie = option.forEach;
            oscard = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon[Symbol.iterator];
                    tangon = michal().next;
                    report = tangon().value;
                    zuuluu = michal;
                    entity = undefined;
                    zuuluu = zuuluu === entity;
                    offset = undefined;
                    if(zuuluu) { _fun00030_ip = 27; continue _fun00029 }
 24:
                    offset = report;
 27:
                    verify = undefined;
                    if(zuuluu) { _fun00030_ip = 57; continue _fun00029 }
 32:
                    oscard = tangon().value;
                    report = michal;
                    report = report === entity;
                    verify = undefined;
                    zuuluu = report;
                    if(report) { _fun00030_ip = 57; continue _fun00029 }
 51:
                    verify = oscard;
                    zuuluu = report;
 57:
                    kiloes = undefined;
                    if(zuuluu) { _fun00030_ip = 87; continue _fun00029 }
 62:
                    oscard = tangon().value;
                    report = michal;
                    report = report === entity;
                    kiloes = undefined;
                    zuuluu = report;
                    if(report) { _fun00030_ip = 87; continue _fun00029 }
 81:
                    kiloes = oscard;
                    zuuluu = report;
 87:
                    backup = undefined;
                    if(zuuluu) { _fun00030_ip = 117; continue _fun00029 }
 92:
                    oscard = tangon().value;
                    report = michal;
                    report = report === entity;
                    backup = undefined;
                    zuuluu = report;
                    if(report) { _fun00030_ip = 117; continue _fun00029 }
 111:
                    backup = oscard;
                    zuuluu = report;
 117:
                    sizing = undefined;
                    if(zuuluu) { _fun00030_ip = 147; continue _fun00029 }
 122:
                    report = tangon().value;
                    tangon = michal;
                    tangon = tangon === entity;
                    sizing = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00030_ip = 147; continue _fun00029 }
 141:
                    sizing = report;
                    zuuluu = tangon;
 147:
                    if(zuuluu) { _fun00030_ip = 153; continue _fun00029 }
 150:
                    michal.return();
 153:
                    michal = 'video';
                    if(!(michal === kiloes)) { _fun00030_ip = 188; continue _fun00029 }
 161:
                    tangon = _closure2_slot5;
                    zuuluu = 0;
                    if(!(zuuluu !== tangon)) { _fun00030_ip = 359; continue _fun00029 }
 177:
                    michal = _closure2_slot7;
                    if(!(zuuluu !== michal)) { _fun00030_ip = 359; continue _fun00029 }
 188:
                    michal = 'audio';
                    golfie = michal === kiloes;
                    if(golfie) { _fun00030_ip = 208; continue _fun00029 }
 202:
                    foxtra = _closure2_slot4;
                    _fun00030_ip = 212; continue _fun00029;
 208:
                    foxtra = _closure2_slot1;
 212:
                    if(golfie) { _fun00030_ip = 221; continue _fun00029 }
 215:
                    romeon = _closure2_slot5;
                    _fun00030_ip = 225; continue _fun00029;
 221:
                    romeon = _closure2_slot2;
 225:
                    if(golfie) { _fun00030_ip = 234; continue _fun00029 }
 228:
                    option = _closure2_slot6;
                    _fun00030_ip = 238; continue _fun00029;
 234:
                    option = _closure2_slot3;
 238:
                    tangon = _closure2_slot9;
                    zuuluu = tangon.push;
                    report = _closure1_slot12;
                    michal = {};
                    michal['mid'] = sizing;
                    michal['type'] = kiloes;
                    kiloes = _closure2_slot10;
                    michal['setup'] = kiloes;
                    michal['direction'] = backup;
                    backup = _closure2_slot0;
                    michal['baseSDP'] = backup;
                    michal['codec'] = foxtra;
                    michal['payload'] = romeon;
                    michal['bitrate'] = option;
                    option = _closure1_slot10;
                    yankee = _closure1_slot7;
                    if(golfie) { _fun00030_ip = 322; continue _fun00029 }
 314:
                    golfie = yankee.VIDEO;
                    _fun00030_ip = 328; continue _fun00029;
 322:
                    golfie = yankee.AUDIO;
 328:
                    golfie = option.bind(entity)(verify, offset, golfie);
                    michal['ssrcs'] = golfie;
                    oscard = _closure2_slot8;
                    michal['extensions'] = oscard;
                    michal = report.bind(entity)(michal);
                    michal = zuuluu.bind(tangon)(michal);
 359:
                    return entity;
                }
            };
            oscard = golfie.bind(option)(oscard);
 518:
            michal = _closure1_slot11;
            michal = michal.bind(report)(zuuluu);
            zuuluu = entity.RTCSessionDescription;
            entity = {};
            entity['type'] = tangon;
            entity['sdp'] = michal;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            config = michal;
            sequen = entity;
            entity = new config[zuuluu](sequen, vacuum);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['generateSessionDescription'] = report;
    report = function(argFoo) { // Original name: generateUnifiedSessionDescription
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            michal = argFoo;
            tangon = michal.type;
            zuuluu = michal.baseSDP;
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.audioCodec;
            var _closure2_slot1 = zuuluu;
            zuuluu = michal.audioPayloadType;
            var _closure2_slot2 = zuuluu;
            zuuluu = michal.audioBitRate;
            var _closure2_slot3 = zuuluu;
            zuuluu = michal.videoCodec;
            var _closure2_slot4 = zuuluu;
            zuuluu = michal.videoPayloadType;
            var _closure2_slot5 = zuuluu;
            zuuluu = michal.videoBitRate;
            var _closure2_slot6 = zuuluu;
            zuuluu = michal.sendingVideo;
            var _closure2_slot7 = zuuluu;
            zuuluu = michal.rtxPayloadType;
            var _closure2_slot8 = zuuluu;
            oscard = michal.ssrcs;
            michal = michal.extensions;
            var _closure2_slot9 = michal;
            zuuluu = undefined;
            var _closure2_slot11 = zuuluu;
            michal = new Array(0);
            var _closure2_slot10 = michal;
            report = 'actpass';
            golfie = 'answer';
            if(!(golfie === tangon)) { _fun00032_ip = 148; continue _fun00031 }
 144:
            report = 'passive';
 148:
            _closure2_slot11 = report;
            report = oscard.forEach;
            entity = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.ssrc;
                    report = entity.cname;
                    romeon = entity.type;
                    michal = entity.direction;
                    foxtra = entity.mid;
                    entity = '';
                    if(!(entity === report)) { _fun00034_ip = 111; continue _fun00033 }
 40:
                    entity = new Array(0);
                    tangon = _closure1_slot8;
                    tangon = tangon.SENDONLY;
                    if(!(michal !== tangon)) { _fun00034_ip = 96; continue _fun00033 }
 61:
                    tangon = _closure1_slot8;
                    tangon = tangon.SENDRECV;
                    golfie = entity;
                    yankee = michal;
                    if(!(yankee === tangon)) { _fun00034_ip = 160; continue _fun00033 }
 81:
                    tangon = _closure1_slot8;
                    yankee = tangon.RECVONLY;
                    golfie = entity;
                    _fun00034_ip = 160; continue _fun00033;
 96:
                    zuuluu = _closure1_slot8;
                    yankee = zuuluu.INACTIVE;
                    golfie = entity;
                    _fun00034_ip = 160; continue _fun00033;
 111:
                    tangon = _closure1_slot10;
                    zuuluu = 'audio';
                    if(!(zuuluu !== romeon)) { _fun00034_ip = 138; continue _fun00033 }
 126:
                    zuuluu = _closure1_slot7;
                    zuuluu = zuuluu.VIDEO;
                    _fun00034_ip = 148; continue _fun00033;
 138:
                    entity = _closure1_slot7;
                    zuuluu = entity.AUDIO;
 148:
                    entity = undefined;
                    golfie = tangon.bind(entity)(report, oscard, zuuluu);
                    yankee = michal;
 160:
                    entity = 'audio';
                    michal = entity === romeon;
                    if(michal) { _fun00034_ip = 180; continue _fun00033 }
 174:
                    offset = _closure2_slot4;
                    _fun00034_ip = 184; continue _fun00033;
 180:
                    offset = _closure2_slot1;
 184:
                    if(michal) { _fun00034_ip = 193; continue _fun00033 }
 187:
                    verify = _closure2_slot5;
                    _fun00034_ip = 197; continue _fun00033;
 193:
                    verify = _closure2_slot2;
 197:
                    oscard = null;
                    if(michal) { _fun00034_ip = 206; continue _fun00033 }
 202:
                    oscard = _closure2_slot8;
 206:
                    if(michal) { _fun00034_ip = 215; continue _fun00033 }
 209:
                    option = _closure2_slot6;
                    _fun00034_ip = 219; continue _fun00033;
 215:
                    option = _closure2_slot3;
 219:
                    tangon = _closure2_slot10;
                    zuuluu = tangon.push;
                    report = _closure1_slot12;
                    michal = {};
                    michal['mid'] = foxtra;
                    michal['type'] = romeon;
                    romeon = _closure2_slot11;
                    michal['setup'] = romeon;
                    michal['direction'] = yankee;
                    yankee = _closure2_slot0;
                    michal['baseSDP'] = yankee;
                    michal['codec'] = offset;
                    michal['payload'] = verify;
                    michal['bitrate'] = option;
                    michal['ssrcs'] = golfie;
                    golfie = _closure2_slot9;
                    michal['extensions'] = golfie;
                    michal['rtxPayload'] = oscard;
                    entity = _closure2_slot7;
                    michal['sendingVideo'] = entity;
                    entity = undefined;
                    michal = report.bind(entity)(michal);
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            entity = report.bind(oscard)(entity);
            entity = _closure1_slot11;
            michal = entity.bind(zuuluu)(michal);
            entity = global;
            zuuluu = entity.RTCSessionDescription;
            entity = {};
            entity['type'] = tangon;
            entity['sdp'] = michal;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            verify = michal;
            option = entity;
            entity = new verify[zuuluu](option, golfie);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['generateUnifiedSessionDescription'] = report;
    zuuluu['extractSDP'] = tangon;
    tangon = function(argFoo) { // Original name: truncateSDP
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            option = argFoo;
            michal = _closure1_slot14;
            entity = undefined;
            michal = michal.bind(entity)(option);
            michal = michal.codecs;
            report = michal.find;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.name;
                entity = _closure1_slot3;
                entity = entity.VP8;
                entity = michal === entity;
                return entity;
            };
            oscard = report.bind(michal)(tangon);
            report = global;
            verify = report.RegExp;
            tangon = null;
            golfie = tangon == oscard;
            if(golfie) { _fun00036_ip = 63; continue _fun00035 }
 57:
            entity = oscard.rtxPayloadType;
 63:
            oscard = tangon != entity;
            offset = 0;
            if(!oscard) { _fun00036_ip = 75; continue _fun00035 }
 72:
            offset = entity;
 75:
            entity = report.HermesInternal;
            golfie = entity.concat;
            oscard = '^a=ice|a=extmap|a=fingerprint|opus|VP8|';
            entity = ' rtx';
            foxtra = golfie.bind(oscard)(offset, entity);
            entity = verify.prototype;
            oscard = Object.create(entity, {constructor: {value: verify}});
            romeon = 'i';
            backup = oscard;
            entity = new backup[verify](foxtra, romeon, yankee);
            entity = entity instanceof Object ? entity : oscard;
            var _closure2_slot0 = entity;
            entity = {};
            oscard = report.Set;
            golfie = option.split;
            report = /\r\n/;
            golfie = golfie.bind(option)(report);
            report = golfie.filter;
            zuuluu = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.test;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = report.bind(golfie)(zuuluu);
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            backup = report;
            zuuluu = new backup[oscard](foxtra, romeon);
            romeon = zuuluu instanceof Object ? zuuluu : report;
            report = new Array(0);
            foxtra = report;
            yankee = 0;
            zuuluu = arraySpread(foxtra, romeon, yankee);
            tangon = report.join;
            zuuluu = '\n';
            zuuluu = tangon.bind(report)(zuuluu);
            entity['sdp'] = zuuluu;
            entity['codecs'] = michal;
            return entity;
        }
    };
    zuuluu['truncateSDP'] = tangon;
    tangon = function(argFoo) { // Original name: validateSdp
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.includes;
            entity = 'a=fingerprint';
            entity = michal.bind(zuuluu)(entity);
            if(entity) { _fun00038_ip = 49; continue _fun00037 }
 22:
            tangon = _closure1_slot6;
            michal = tangon.error;
            entity = 'Remote SDP does not include fingerprint!';
            entity = michal.bind(tangon)(entity);
            entity = false;
            return entity;
 49:
            michal = zuuluu.includes;
            entity = 'a=ice-ufrag';
            entity = michal.bind(zuuluu)(entity);
            if(entity) { _fun00038_ip = 95; continue _fun00037 }
 68:
            tangon = _closure1_slot6;
            michal = tangon.error;
            entity = 'Remote SDP does not include ICE user name!';
            entity = michal.bind(tangon)(entity);
            entity = false;
            return entity;
 95:
            michal = zuuluu.includes;
            entity = 'a=ice-pwd';
            entity = michal.bind(zuuluu)(entity);
            if(entity) { _fun00038_ip = 141; continue _fun00037 }
 114:
            tangon = _closure1_slot6;
            michal = tangon.error;
            entity = 'Remote SDP does not include ICE password!';
            entity = michal.bind(tangon)(entity);
            entity = false;
            return entity;
 141:
            michal = zuuluu.includes;
            entity = 'a=candidate';
            entity = michal.bind(zuuluu)(entity);
            if(entity) { _fun00038_ip = 187; continue _fun00037 }
 160:
            tangon = _closure1_slot6;
            michal = tangon.error;
            entity = 'Remote SDP does not include ICE candidate!';
            entity = michal.bind(tangon)(entity);
            entity = false;
            return entity;
 187:
            michal = zuuluu.includes;
            entity = 'c=';
            entity = michal.bind(zuuluu)(entity);
            if(entity) { _fun00038_ip = 233; continue _fun00037 }
 206:
            tangon = _closure1_slot6;
            michal = tangon.error;
            entity = 'Remote SDP does not include c-line!';
            entity = michal.bind(tangon)(entity);
            entity = false;
            return entity;
 233:
            michal = zuuluu.split;
            entity = '\n';
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.startsWith;
                entity = 'c=';
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = michal.bind(zuuluu)(entity);
            entity = michal.join;
            michal = entity.bind(michal)();
            entity = michal.trim;
            oscard = entity.bind(michal)();
            michal = oscard.split;
            entity = ' ';
            entity = michal.bind(oscard)(entity);
            michal = entity.length;
            entity = 3;
            michal = michal < entity;
            entity = !michal;
            if(!michal) { _fun00038_ip = 358; continue _fun00037 }
 315:
            tangon = _closure1_slot6;
            zuuluu = tangon.error;
            michal = global;
            michal = michal.HermesInternal;
            report = michal.concat;
            michal = 'Incorrect c-line: ';
            michal = report.bind(michal)(oscard);
            michal = zuuluu.bind(tangon)(michal);
            entity = false;
 358:
            return entity;
        }
    };
    zuuluu['validateSdp'] = tangon;
    michal = function(argFoo) { // Original name: getExtensions
        report = argFoo;
        michal = global;
        tangon = michal.Set;
        zuuluu = report.split;
        michal = /\r\n/;
        report = zuuluu.bind(report)(michal);
        zuuluu = report.filter;
        michal = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.startsWith;
            entity = 'a=extmap:';
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        option = zuuluu.bind(report)(michal);
        zuuluu = tangon.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
        verify = zuuluu;
        michal = new verify[tangon](option, golfie);
        golfie = michal instanceof Object ? michal : zuuluu;
        zuuluu = new Array(0);
        oscard = 0;
        option = zuuluu;
        michal = arraySpread(option, golfie, oscard);
        michal = zuuluu.map;
        entity = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.split;
            entity = ' ';
            zuuluu = michal.bind(zuuluu)(entity);
            tangon = 0;
            report = zuuluu[tangon];
            michal = report.split;
            entity = '/';
            michal = michal.bind(report)(entity);
            entity = {};
            report = global;
            oscard = report.parseInt;
            report = michal[tangon];
            tangon = report.substr;
            michal = 9;
            report = tangon.bind(report)(michal);
            tangon = undefined;
            michal = 10;
            michal = oscard.bind(tangon)(report, michal);
            entity['value'] = michal;
            michal = 1;
            michal = zuuluu[michal];
            entity['uri'] = michal;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getExtensions'] = michal;
    return entity;
})();