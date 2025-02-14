// discord_common/js/packages/media-engine/webrtc/SDP.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    options = argBar;
    oscar = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    entity = function(argFoo, argBar, argBaz) { // Original name: makeSSRC
        tango = argBar;
        oscar = global;
        entity = oscar.HermesInternal;
        zulu = entity.concat;
        options = '';
        mike = argFoo;
        entity = '-';
        report = zulu.bind(options)(mike, entity, tango);
        entity = oscar.HermesInternal;
        mike = entity.concat;
        entity = argBaz;
        zulu = mike.bind(options)(entity, report);
        mike = {};
        entity = 'cname';
        mike['attribute'] = entity;
        mike['id'] = tango;
        mike['value'] = report;
        entity = new Array(4);
        entity[0] = mike;
        mike = {};
        golf = 'msid';
        mike['attribute'] = golf;
        mike['id'] = tango;
        oscar = oscar.HermesInternal;
        golf = oscar.concat;
        oscar = ' ';
        oscar = golf.bind(options)(report, oscar, zulu);
        mike['value'] = oscar;
        entity[1] = mike;
        mike = {};
        oscar = 'mslabel';
        mike['attribute'] = oscar;
        mike['id'] = tango;
        mike['value'] = report;
        entity[2] = mike;
        mike = {};
        report = 'label';
        mike['attribute'] = report;
        mike['id'] = tango;
        mike['value'] = zulu;
        entity[3] = mike;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: makeSDP
        tango = argFoo;
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.write;
        entity = {};
        oscar = 0;
        entity['version'] = oscar;
        oscar = {'start': 0, 'stop': 0};
        entity['timing'] = oscar;
        oscar = '-';
        golf = {'address': '127.0.0.1', 'ipVer': 4, 'netType': 'IN', 'sessionId': '1420070400000', 'sessionVersion': 0, 'username': '-'};
        entity['origin'] = golf;
        entity['name'] = oscar;
        oscar = {'semantic': 'WMS', 'token': '*'};
        entity['msidSemantic'] = oscar;
        oscar = {};
        golf = 'BUNDLE';
        oscar['type'] = golf;
        options = tango.filter;
        golf = function(argFoo) {
            entity = argFoo;
            mike = entity.mid;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        options = options.bind(tango)(golf);
        golf = options.map;
        report = function(argFoo) {
            entity = argFoo;
            entity = entity.mid;
            return entity;
        };
        options = golf.bind(options)(report);
        golf = options.join;
        report = ' ';
        report = golf.bind(options)(report);
        oscar['mids'] = report;
        report = new Array(1);
        report[0] = oscar;
        entity['groups'] = report;
        entity['media'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: makeMedia
        _fun51219: for(var _fun51219_ip = 0; ; ) switch(_fun51219_ip) {
 0:
            entity = argFoo;
            backup = entity.mid;
            verify = entity.type;
            sizing = entity.setup;
            golf = entity.direction;
            output = entity.baseSDP;
            zulu = entity.codec;
            report = entity.payload;
            romeo = entity.bitrate;
            kilo = entity.ssrcs;
            options = entity.extensions;
            foxtrot = entity.rtxPayload;
            oscar = entity.sendingVideo;
            entity = _closure1_slot8;
            entity = entity.INACTIVE;
            if(!(golf === entity)) { _fun51219_ip = 207; continue _fun51219 }
 92:
            entity = _closure1_slot4;
            if(entity) { _fun51219_ip = 207; continue _fun51219 }
 99:
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
 207:
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
            entity['direction'] = golf;
            entity['ssrcs'] = kilo;
            golf = kilo.length;
            if(!(golf > yankee)) { _fun51219_ip = 550; continue _fun51219 }
 337:
            yankee = null;
            if(!(yankee != foxtrot)) { _fun51219_ip = 446; continue _fun51219 }
 343:
            backup = _closure1_slot0;
            sizing = _closure1_slot1;
            golf = 5;
            output = sizing[golf];
            result = backup.bind(offset)(output);
            output = _closure1_slot5;
            echo = result.bind(offset)(kilo, output);
            result = echo.map;
            output = function(argFoo) {
                mike = argFoo;
                entity = 0;
                entity = mike[entity];
                oscar = entity.id;
                entity = {};
                mike = 'FID';
                entity['semantics'] = mike;
                mike = 1;
                report = oscar + mike;
                mike = global;
                mike = mike.HermesInternal;
                tango = mike.concat;
                zulu = '';
                mike = ' ';
                mike = tango.bind(zulu)(oscar, mike, report);
                entity['ssrcs'] = mike;
                return entity;
            };
            output = result.bind(echo)(output);
            entity['ssrcGroups'] = output;
            golf = sizing[golf];
            backup = backup.bind(offset)(golf);
            golf = _closure1_slot5;
            sizing = backup.bind(offset)(kilo, golf);
            backup = sizing.map;
            golf = function(argFoo) {
                tango = argFoo;
                mike = tango.map;
                entity = function(argFoo) {
                    entity = {};
                    tango = argFoo;
                    report = entity;
                    mike = copyDataProperties(report, tango);
                    zulu = entity.id;
                    mike = 1;
                    mike = zulu + mike;
                    entity['id'] = mike;
                    return entity;
                };
                zulu = mike.bind(tango)(entity);
                entity = new Array(0);
                report = 0;
                golf = entity;
                oscar = tango;
                report = arraySpread(golf, oscar, report);
                golf = entity;
                oscar = zulu;
                mike = arraySpread(golf, oscar, report);
                return entity;
            };
            backup = backup.bind(sizing)(golf);
            golf = backup.flat;
            golf = golf.bind(backup)();
            entity['ssrcs'] = golf;
 446:
            golf = _closure1_slot4;
            if(golf) { _fun51219_ip = 488; continue _fun51219 }
 453:
            backup = _closure1_slot0;
            sizing = _closure1_slot1;
            golf = 6;
            golf = sizing[golf];
            golf = backup.bind(offset)(golf);
            backup = golf.name;
            golf = 'Firefox';
            if(!(golf === backup)) { _fun51219_ip = 550; continue _fun51219 }
 488:
            backup = kilo.find;
            golf = function(argFoo) {
                entity = argFoo;
                mike = entity.attribute;
                entity = 'msid';
                entity = entity === mike;
                return entity;
            };
            golf = backup.bind(kilo)(golf);
            if(!(yankee != golf)) { _fun51219_ip = 1200; continue _fun51219 }
 510:
            golf = golf.value;
            entity['msid'] = golf;
            backup = entity.ssrcs;
            yankee = backup.filter;
            golf = function(argFoo) {
                entity = argFoo;
                mike = entity.attribute;
                entity = 'cname';
                entity = entity === mike;
                return entity;
            };
            golf = yankee.bind(backup)(golf);
            entity['ssrcs'] = golf;
 550:
            golf = 'audio';
            if(!(golf !== verify)) { _fun51219_ip = 966; continue _fun51219 }
 561:
            golf = 'video';
            if(!(golf === verify)) { _fun51219_ip = 1198; continue _fun51219 }
 572:
            verify = options.filter;
            golf = function(argFoo) {
                _fun51227: for(var _fun51227_ip = 0; ; ) switch(_fun51227_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.uri;
                    entity = 'urn:ietf:params:rtp-hdrext:toffset';
                    entity = entity === zulu;
                    if(entity) { _fun51227_ip = 36; continue _fun51227 }
 21:
                    tango = mike.uri;
                    zulu = 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time';
                    entity = zulu === tango;
 36:
                    if(entity) { _fun51227_ip = 54; continue _fun51227 }
 39:
                    tango = mike.uri;
                    zulu = 'urn:3gpp:video-orientation';
                    entity = zulu === tango;
 54:
                    if(entity) { _fun51227_ip = 72; continue _fun51227 }
 57:
                    tango = mike.uri;
                    zulu = 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01';
                    entity = zulu === tango;
 72:
                    if(entity) { _fun51227_ip = 90; continue _fun51227 }
 75:
                    zulu = mike.uri;
                    mike = 'http://www.webrtc.org/experiments/rtp-hdrext/playout-delay';
                    entity = mike === zulu;
 90:
                    return entity;
                }
            };
            golf = verify.bind(options)(golf);
            entity['ext'] = golf;
            yankee = entity.rtp;
            verify = yankee.push;
            golf = {};
            golf['codec'] = zulu;
            golf['payload'] = report;
            backup = 90000;
            golf['rate'] = backup;
            golf = verify.bind(yankee)(golf);
            golf = global;
            verify = golf.HermesInternal;
            yankee = verify.concat;
            verify = 'x-google-max-bitrate=';
            yankee = yankee.bind(verify)(romeo);
            verify = _closure1_slot3;
            verify = verify.H264;
            backup = yankee;
            if(!(zulu === verify)) { _fun51219_ip = 683; continue _fun51219 }
 673:
            verify = ';level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f';
            backup = yankee + verify;
 683:
            romeo = entity.fmtp;
            yankee = romeo.push;
            verify = {};
            verify['config'] = backup;
            verify['payload'] = report;
            verify = yankee.bind(romeo)(verify);
            yankee = {'type': 'ccm', 'subtype': 'fir'};
            yankee['payload'] = report;
            verify = new Array(5);
            verify[0] = yankee;
            yankee = {};
            romeo = 'nack';
            yankee['type'] = romeo;
            yankee['payload'] = report;
            verify[1] = yankee;
            yankee = {'type': 'nack', 'subtype': 'pli'};
            yankee['payload'] = report;
            verify[2] = yankee;
            yankee = {};
            romeo = 'goog-remb';
            yankee['type'] = romeo;
            yankee['payload'] = report;
            verify[3] = yankee;
            yankee = {};
            romeo = 'transport-cc';
            yankee['type'] = romeo;
            yankee['payload'] = report;
            verify[4] = yankee;
            entity['rtcpFb'] = verify;
            verify = null;
            if(!(verify != foxtrot)) { _fun51219_ip = 1198; continue _fun51219 }
 838:
            romeo = entity.rtp;
            yankee = romeo.push;
            verify = {'codec': 'rtx', 'payload': null, 'rate': 90000};
            verify['payload'] = foxtrot;
            verify = yankee.bind(romeo)(verify);
            romeo = entity.fmtp;
            yankee = romeo.push;
            verify = {};
            backup = golf.HermesInternal;
            kilo = backup.concat;
            backup = 'apt=';
            backup = kilo.bind(backup)(report);
            verify['config'] = backup;
            verify['payload'] = foxtrot;
            verify = yankee.bind(romeo)(verify);
            romeo = entity.payloads;
            golf = golf.HermesInternal;
            yankee = golf.concat;
            verify = '';
            golf = ' ';
            golf = yankee.bind(verify)(romeo, golf, foxtrot);
            entity['payloads'] = golf;
            _fun51219_ip = 1198; continue _fun51219;
 966:
            verify = _closure1_slot0;
            yankee = _closure1_slot1;
            golf = 6;
            golf = yankee[golf];
            golf = verify.bind(offset)(golf);
            verify = golf.name;
            golf = 'Firefox';
            if(!(golf !== verify)) { _fun51219_ip = 1055; continue _fun51219 }
 1001:
            verify = options.filter;
            golf = function(argFoo) {
                _fun51226: for(var _fun51226_ip = 0; ; ) switch(_fun51226_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.uri;
                    entity = 'urn:ietf:params:rtp-hdrext:ssrc-audio-level';
                    entity = entity === zulu;
                    if(entity) { _fun51226_ip = 36; continue _fun51226 }
 21:
                    zulu = mike.uri;
                    mike = 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01';
                    entity = mike === zulu;
 36:
                    return entity;
                }
            };
            golf = verify.bind(options)(golf);
            entity['ext'] = golf;
            verify = {};
            golf = 'transport-cc';
            verify['type'] = golf;
            verify['payload'] = report;
            golf = new Array(1);
            golf[0] = verify;
            entity['rtcpFb'] = golf;
            _fun51219_ip = 1076; continue _fun51219;
 1055:
            golf = options.filter;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.uri;
                entity = 'urn:ietf:params:rtp-hdrext:ssrc-audio-level';
                entity = entity === mike;
                return entity;
            };
            tango = golf.bind(options)(tango);
            entity['ext'] = tango;
 1076:
            options = entity.rtp;
            golf = options.push;
            tango = {};
            tango['codec'] = zulu;
            verify = 2;
            tango['encoding'] = verify;
            tango['payload'] = report;
            verify = 48000;
            tango['rate'] = verify;
            tango = golf.bind(options)(tango);
            mike = _closure1_slot3;
            mike = mike.OPUS;
            if(!(zulu === mike)) { _fun51219_ip = 1189; continue _fun51219 }
 1137:
            tango = entity.fmtp;
            zulu = tango.push;
            mike = {};
            golf = '1';
            if(!oscar) { _fun51219_ip = 1165; continue _fun51219 }
 1159:
            golf = '0';
 1165:
            oscar = 'minptime=10;useinbandfec=1;usedtx=';
            oscar = oscar + golf;
            mike['config'] = oscar;
            mike['payload'] = report;
            mike = zulu.bind(tango)(mike);
 1189:
            mike = 60;
            entity['maxptime'] = mike;
 1198:
            return entity;
 1200:
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            control = 'msid missing';
            vacuum = mike;
            entity = new vacuum[zulu](control, source);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: extractCodec
        _fun51228: for(var _fun51228_ip = 0; ; ) switch(_fun51228_ip) {
 0:
            golf = argFoo;
            options = argBar;
            report = argCorge;
            var _closure2_slot0 = report;
            zulu = golf.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.codec;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            tango = zulu.bind(golf)(entity);
            var _closure2_slot1 = tango;
            entity = null;
            if(!(entity != tango)) { _fun51228_ip = 144; continue _fun51228 }
 40:
            oscar = options.find;
            zulu = function(argFoo) {
                entity = global;
                zulu = entity.RegExp;
                mike = _closure2_slot1;
                tango = mike.payload;
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = '^apt=';
                mike = mike.bind(entity)(tango);
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.test;
                entity = argFoo;
                entity = entity.config;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = oscar.bind(options)(zulu);
            var _closure2_slot2 = zulu;
            oscar = entity != zulu;
            zulu = null;
            if(!oscar) { _fun51228_ip = 98; continue _fun51228 }
 68:
            oscar = golf.find;
            mike = function(argFoo) {
                _fun51231: for(var _fun51231_ip = 0; ; ) switch(_fun51231_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.codec;
                    entity = _closure1_slot3;
                    entity = entity.RTX;
                    entity = zulu === entity;
                    if(!entity) { _fun51231_ip = 52; continue _fun51231 }
 29:
                    zulu = mike.payload;
                    mike = _closure2_slot2;
                    mike = mike.payload;
                    entity = zulu === mike;
 52:
                    return entity;
                }
            };
            mike = oscar.bind(golf)(mike);
            oscar = entity != mike;
            zulu = null;
            if(!oscar) { _fun51228_ip = 98; continue _fun51228 }
 92:
            zulu = mike.payload;
 98:
            mike = {};
            oscar = argBaz;
            mike['type'] = oscar;
            mike['name'] = report;
            oscar = argGrault;
            report = 1;
            report = oscar + report;
            mike['priority'] = report;
            tango = tango.payload;
            mike['payloadType'] = tango;
            mike['rtxPayloadType'] = zulu;
            return mike;
 144:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    tango = function(argFoo) { // Original name: extractSDP
        oscar = _closure1_slot0;
        golf = _closure1_slot1;
        entity = 4;
        entity = golf[entity];
        report = undefined;
        zulu = oscar.bind(report)(entity);
        mike = zulu.parse;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        tango = entity.media;
        zulu = tango.reduce;
        mike = {'outboundStreams': null, 'codecs': null, 'audioSSRC': 0, 'videoSSRC': 0, 'rtxSSRC': 0};
        entity = new Array(0);
        mike['outboundStreams'] = entity;
        entity = new Array(0);
        mike['codecs'] = entity;
        entity = function(argFoo, argBar) {
            _fun51233: for(var _fun51233_ip = 0; ; ) switch(_fun51233_ip) {
 0:
                entity = argFoo;
                mike = argBar;
                var _closure3_slot0 = entity;
                tango = mike.type;
                var _closure3_slot1 = tango;
                zulu = mike.rtp;
                var _closure3_slot2 = zulu;
                options = mike.ssrcs;
                zulu = mike.fmtp;
                var _closure3_slot3 = zulu;
                zulu = mike.direction;
                verify = mike.mid;
                golf = entity.outboundStreams;
                report = golf.push;
                mike = {};
                mike['type'] = tango;
                mike['direction'] = zulu;
                mike['mid'] = verify;
                mike = report.bind(golf)(mike);
                mike = 'audio';
                if(!(mike !== tango)) { _fun51233_ip = 315; continue _fun51233 }
 102:
                mike = 'video';
                if(!(mike === tango)) { _fun51233_ip = 417; continue _fun51233 }
 113:
                mike = _closure1_slot3;
                mike = mike.H264;
                golf = new Array(3);
                golf[0] = mike;
                mike = _closure1_slot3;
                mike = mike.VP8;
                golf[1] = mike;
                mike = _closure1_slot3;
                mike = mike.VP9;
                golf[2] = mike;
                report = golf.forEach;
                mike = function(argFoo, argBar) {
                    _fun51236: for(var _fun51236_ip = 0; ; ) switch(_fun51236_ip) {
 0:
                        options = _closure1_slot13;
                        foxtrot = _closure3_slot2;
                        romeo = _closure3_slot3;
                        yankee = _closure3_slot1;
                        entity = undefined;
                        offset = argFoo;
                        verify = argBar;
                        backup = undefined;
                        tango = backup[options](foxtrot, romeo, yankee, offset, verify, options);
                        zulu = null;
                        if(!(zulu != tango)) { _fun51236_ip = 62; continue _fun51236 }
 42:
                        mike = _closure3_slot0;
                        zulu = mike.codecs;
                        mike = zulu.push;
                        mike = mike.bind(zulu)(tango);
 62:
                        return entity;
                    }
                };
                mike = report.bind(golf)(mike);
                mike = _closure1_slot8;
                mike = mike.SENDRECV;
                if(!(zulu === mike)) { _fun51233_ip = 417; continue _fun51233 }
 194:
                report = null;
                verify = report == options;
                golf = undefined;
                if(verify) { _fun51233_ip = 220; continue _fun51233 }
 205:
                offset = options.find;
                verify = function(argFoo) {
                    entity = argFoo;
                    mike = entity.attribute;
                    entity = 'cname';
                    entity = entity === mike;
                    return entity;
                };
                golf = offset.bind(options)(verify);
 220:
                if(!(report != golf)) { _fun51233_ip = 235; continue _fun51233 }
 224:
                golf = golf.id;
                entity['videoSSRC'] = golf;
 235:
                golf = report == options;
                mike = undefined;
                if(golf) { _fun51233_ip = 260; continue _fun51233 }
 244:
                verify = options.findLast;
                golf = function(argFoo) {
                    entity = argFoo;
                    mike = entity.attribute;
                    entity = 'cname';
                    entity = entity === mike;
                    return entity;
                };
                mike = verify.bind(options)(golf);
 260:
                if(!(report != mike)) { _fun51233_ip = 417; continue _fun51233 }
 267:
                golf = mike.id;
                report = entity.videoSSRC;
                if(!(golf === report)) { _fun51233_ip = 302; continue _fun51233 }
 282:
                golf = _closure1_slot6;
                report = golf.warn;
                tango = 'Unable to find a unique rtx SSRC!';
                tango = report.bind(golf)(tango);
 302:
                mike = mike.id;
                entity['rtxSSRC'] = mike;
                _fun51233_ip = 417; continue _fun51233;
 315:
                tango = _closure1_slot3;
                tango = tango.OPUS;
                golf = new Array(1);
                golf[0] = tango;
                report = golf.forEach;
                tango = function(argFoo, argBar) {
                    _fun51234: for(var _fun51234_ip = 0; ; ) switch(_fun51234_ip) {
 0:
                        options = _closure1_slot13;
                        foxtrot = _closure3_slot2;
                        romeo = _closure3_slot3;
                        yankee = _closure3_slot1;
                        entity = undefined;
                        offset = argFoo;
                        verify = argBar;
                        backup = undefined;
                        tango = backup[options](foxtrot, romeo, yankee, offset, verify, options);
                        zulu = null;
                        if(!(zulu != tango)) { _fun51234_ip = 62; continue _fun51234 }
 42:
                        mike = _closure3_slot0;
                        zulu = mike.codecs;
                        mike = zulu.push;
                        mike = mike.bind(zulu)(tango);
 62:
                        return entity;
                    }
                };
                tango = report.bind(golf)(tango);
                mike = _closure1_slot8;
                mike = mike.SENDRECV;
                zulu = zulu === mike;
                mike = undefined;
                if(!zulu) { _fun51233_ip = 403; continue _fun51233 }
 370:
                report = null;
                golf = report == options;
                tango = undefined;
                if(golf) { _fun51233_ip = 396; continue _fun51233 }
 381:
                golf = options.find;
                oscar = function(argFoo) {
                    entity = argFoo;
                    mike = entity.attribute;
                    entity = 'cname';
                    entity = entity === mike;
                    return entity;
                };
                tango = golf.bind(options)(oscar);
 396:
                zulu = report != tango;
                mike = tango;
 403:
                if(!zulu) { _fun51233_ip = 417; continue _fun51233 }
 406:
                mike = mike.id;
                entity['audioSSRC'] = mike;
 417:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        mike = 7;
        mike = golf[mike];
        tango = oscar.bind(report)(mike);
        zulu = entity.codecs;
        mike = 8;
        mike = golf[mike];
        mike = oscar.bind(report)(mike);
        mike = tango.bind(report)(zulu, mike);
        entity['codecs'] = mike;
        return entity;
    };
    var _closure1_slot14 = tango;
    entity = global;
    offset = entity.Object;
    golf = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(offset)(zulu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = verify[report];
    report = options.bind(entity)(report);
    report = report.Codecs;
    var _closure1_slot3 = report;
    report = 2;
    report = verify[report];
    report = options.bind(entity)(report);
    report = report.BROWSER_SUPPORTS_UNIFIED_PLAN;
    var _closure1_slot4 = report;
    report = 4;
    var _closure1_slot5 = report;
    report = 3;
    report = verify[report];
    report = options.bind(entity)(report);
    golf = report.Logger;
    report = golf.prototype;
    oscar = Object.create(report, {constructor: {value: golf}});
    foxtrot = 'SDP';
    backup = oscar;
    report = new backup[golf](foxtrot, romeo);
    report = report instanceof Object ? report : oscar;
    var _closure1_slot6 = report;
    oscar = {};
    report = 'a';
    oscar['AUDIO'] = report;
    report = 'v';
    oscar['VIDEO'] = report;
    var _closure1_slot7 = oscar;
    report = {};
    golf = 'sendrecv';
    report['SENDRECV'] = golf;
    golf = 'sendonly';
    report['SENDONLY'] = golf;
    golf = 'recvonly';
    report['RECVONLY'] = golf;
    golf = 'inactive';
    report['INACTIVE'] = golf;
    var _closure1_slot8 = report;
    golf = 'UDP/TLS/RTP/SAVPF';
    var _closure1_slot9 = golf;
    golf = 9;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = '../discord_common/js/packages/media-engine/webrtc/SDP.tsx';
    golf = options.bind(verify)(golf);
    zulu['Sentinels'] = oscar;
    zulu['Directions'] = report;
    report = function(argFoo) { // Original name: getDirection
        _fun51239: for(var _fun51239_ip = 0; ; ) switch(_fun51239_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot8;
            mike = mike.RECVONLY;
            if(!(mike !== zulu)) { _fun51239_ip = 84; continue _fun51239 }
 20:
            mike = _closure1_slot8;
            mike = mike.SENDONLY;
            if(!(mike !== zulu)) { _fun51239_ip = 72; continue _fun51239 }
 34:
            mike = _closure1_slot8;
            mike = mike.SENDRECV;
            if(!(mike !== zulu)) { _fun51239_ip = 60; continue _fun51239 }
 48:
            mike = _closure1_slot8;
            mike = mike.INACTIVE;
            return mike;
 60:
            mike = _closure1_slot8;
            mike = mike.SENDRECV;
            return mike;
 72:
            mike = _closure1_slot8;
            mike = mike.RECVONLY;
            return mike;
 84:
            entity = _closure1_slot8;
            entity = entity.SENDONLY;
            return entity;
        }
    };
    zulu['getDirection'] = report;
    report = function(argFoo) { // Original name: generateSessionDescription
        _fun51240: for(var _fun51240_ip = 0; ; ) switch(_fun51240_ip) {
 0:
            entity = argFoo;
            tango = entity.type;
            output = entity.baseSDP;
            var _closure2_slot0 = output;
            result = entity.direction;
            control = entity.audioCodec;
            var _closure2_slot1 = control;
            source = entity.audioPayloadType;
            var _closure2_slot2 = source;
            backup = entity.audioBitRate;
            var _closure2_slot3 = backup;
            sizing = entity.videoCodec;
            var _closure2_slot4 = sizing;
            kilo = entity.videoPayloadType;
            var _closure2_slot5 = kilo;
            foxtrot = entity.videoBitRate;
            var _closure2_slot6 = foxtrot;
            yankee = entity.rtxPayloadType;
            var _closure2_slot7 = yankee;
            options = entity.ssrcs;
            romeo = entity.extensions;
            var _closure2_slot8 = romeo;
            report = undefined;
            var _closure2_slot10 = report;
            zulu = new Array(0);
            var _closure2_slot9 = zulu;
            offset = _closure1_slot6;
            verify = offset.info;
            entity = global;
            echo = entity.JSON;
            golf = echo.stringify;
            update = golf.bind(echo)(options);
            golf = entity.HermesInternal;
            echo = golf.concat;
            golf = 'generateSessionDescription: ';
            golf = echo.bind(golf)(update);
            golf = verify.bind(offset)(golf);
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            golf = 6;
            golf = offset[golf];
            golf = verify.bind(report)(golf);
            verify = golf.name;
            golf = 'Firefox';
            if(!(golf !== verify)) { _fun51240_ip = 480; continue _fun51240 }
 222:
            echo = 'actpass';
            golf = 'answer';
            if(!(golf === tango)) { _fun51240_ip = 240; continue _fun51240 }
 236:
            echo = 'passive';
 240:
            verify = options.filter;
            golf = function(argFoo) {
                _fun51242: for(var _fun51242_ip = 0; ; ) switch(_fun51242_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    mike = report().value;
                    mike = entity;
                    oscar = undefined;
                    tango = mike === oscar;
                    if(tango) { _fun51242_ip = 33; continue _fun51242 }
 22:
                    mike = report().value;
                    mike = entity;
                    tango = mike === oscar;
 33:
                    zulu = undefined;
                    if(tango) { _fun51242_ip = 63; continue _fun51242 }
 38:
                    golf = report().value;
                    mike = entity;
                    mike = mike === oscar;
                    zulu = undefined;
                    tango = mike;
                    if(mike) { _fun51242_ip = 63; continue _fun51242 }
 57:
                    zulu = golf;
                    tango = mike;
 63:
                    mike = undefined;
                    if(tango) { _fun51242_ip = 93; continue _fun51242 }
 68:
                    options = report().value;
                    golf = entity;
                    golf = golf === oscar;
                    mike = undefined;
                    tango = golf;
                    if(golf) { _fun51242_ip = 93; continue _fun51242 }
 87:
                    mike = options;
                    tango = golf;
 93:
                    if(tango) { _fun51242_ip = 107; continue _fun51242 }
 96:
                    report = report().value;
                    report = entity;
                    tango = report === oscar;
 107:
                    if(tango) { _fun51242_ip = 113; continue _fun51242 }
 110:
                    entity.return();
 113:
                    entity = _closure1_slot8;
                    entity = entity.INACTIVE;
                    entity = mike !== entity;
                    if(!entity) { _fun51242_ip = 141; continue _fun51242 }
 133:
                    mike = 'audio';
                    entity = mike === zulu;
 141:
                    return entity;
                }
            };
            offset = verify.bind(options)(golf);
            verify = offset.map;
            golf = function(argFoo) {
                _fun51243: for(var _fun51243_ip = 0; ; ) switch(_fun51243_ip) {
 0:
                    oscar = argFoo;
                    entity = oscar[Symbol.iterator];
                    oscar = entity().next;
                    zulu = oscar().value;
                    mike = entity;
                    report = undefined;
                    mike = mike === report;
                    tango = undefined;
                    if(mike) { _fun51243_ip = 27; continue _fun51243 }
 24:
                    tango = zulu;
 27:
                    zulu = undefined;
                    if(mike) { _fun51243_ip = 57; continue _fun51243 }
 32:
                    golf = oscar().value;
                    oscar = entity;
                    oscar = oscar === report;
                    zulu = undefined;
                    mike = oscar;
                    if(oscar) { _fun51243_ip = 57; continue _fun51243 }
 51:
                    zulu = golf;
                    mike = oscar;
 57:
                    if(mike) { _fun51243_ip = 63; continue _fun51243 }
 60:
                    entity.return();
 63:
                    mike = _closure1_slot10;
                    entity = _closure1_slot7;
                    entity = entity.AUDIO;
                    entity = mike.bind(report)(zulu, tango, entity);
                    return entity;
                }
            };
            update = verify.bind(offset)(golf);
            verify = zulu.push;
            offset = _closure1_slot12;
            golf = {'mid': 'audio', 'type': 'audio'};
            golf['setup'] = echo;
            golf['direction'] = result;
            golf['baseSDP'] = output;
            golf['codec'] = control;
            golf['payload'] = source;
            golf['bitrate'] = backup;
            backup = update.flat;
            backup = backup.bind(update)();
            golf['ssrcs'] = backup;
            golf['extensions'] = romeo;
            golf = offset.bind(report)(golf);
            golf = verify.bind(zulu)(golf);
            golf = 0;
            if(!(kilo > golf)) { _fun51240_ip = 515; continue _fun51240 }
 361:
            verify = options.filter;
            golf = function(argFoo) {
                _fun51244: for(var _fun51244_ip = 0; ; ) switch(_fun51244_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    mike = report().value;
                    mike = entity;
                    oscar = undefined;
                    tango = mike === oscar;
                    if(tango) { _fun51244_ip = 33; continue _fun51244 }
 22:
                    mike = report().value;
                    mike = entity;
                    tango = mike === oscar;
 33:
                    zulu = undefined;
                    if(tango) { _fun51244_ip = 63; continue _fun51244 }
 38:
                    golf = report().value;
                    mike = entity;
                    mike = mike === oscar;
                    zulu = undefined;
                    tango = mike;
                    if(mike) { _fun51244_ip = 63; continue _fun51244 }
 57:
                    zulu = golf;
                    tango = mike;
 63:
                    mike = undefined;
                    if(tango) { _fun51244_ip = 93; continue _fun51244 }
 68:
                    options = report().value;
                    golf = entity;
                    golf = golf === oscar;
                    mike = undefined;
                    tango = golf;
                    if(golf) { _fun51244_ip = 93; continue _fun51244 }
 87:
                    mike = options;
                    tango = golf;
 93:
                    if(tango) { _fun51244_ip = 107; continue _fun51244 }
 96:
                    report = report().value;
                    report = entity;
                    tango = report === oscar;
 107:
                    if(tango) { _fun51244_ip = 113; continue _fun51244 }
 110:
                    entity.return();
 113:
                    entity = _closure1_slot8;
                    entity = entity.INACTIVE;
                    entity = mike !== entity;
                    if(!entity) { _fun51244_ip = 141; continue _fun51244 }
 133:
                    mike = 'video';
                    entity = mike === zulu;
 141:
                    return entity;
                }
            };
            offset = verify.bind(options)(golf);
            verify = offset.map;
            golf = function(argFoo) {
                _fun51245: for(var _fun51245_ip = 0; ; ) switch(_fun51245_ip) {
 0:
                    oscar = argFoo;
                    entity = oscar[Symbol.iterator];
                    oscar = entity().next;
                    zulu = oscar().value;
                    mike = entity;
                    report = undefined;
                    mike = mike === report;
                    tango = undefined;
                    if(mike) { _fun51245_ip = 27; continue _fun51245 }
 24:
                    tango = zulu;
 27:
                    zulu = undefined;
                    if(mike) { _fun51245_ip = 57; continue _fun51245 }
 32:
                    golf = oscar().value;
                    oscar = entity;
                    oscar = oscar === report;
                    zulu = undefined;
                    mike = oscar;
                    if(oscar) { _fun51245_ip = 57; continue _fun51245 }
 51:
                    zulu = golf;
                    mike = oscar;
 57:
                    if(mike) { _fun51245_ip = 63; continue _fun51245 }
 60:
                    entity.return();
 63:
                    mike = _closure1_slot10;
                    entity = _closure1_slot7;
                    entity = entity.VIDEO;
                    entity = mike.bind(report)(zulu, tango, entity);
                    return entity;
                }
            };
            backup = verify.bind(offset)(golf);
            verify = zulu.push;
            offset = _closure1_slot12;
            golf = {'mid': 'video', 'type': 'video'};
            golf['setup'] = echo;
            golf['direction'] = result;
            golf['baseSDP'] = output;
            golf['codec'] = sizing;
            golf['payload'] = kilo;
            golf['bitrate'] = foxtrot;
            foxtrot = backup.flat;
            foxtrot = foxtrot.bind(backup)();
            golf['ssrcs'] = foxtrot;
            golf['extensions'] = romeo;
            golf['rtxPayload'] = yankee;
            golf = offset.bind(report)(golf);
            golf = verify.bind(zulu)(golf);
            _fun51240_ip = 515; continue _fun51240;
 480:
            golf = 'active';
            verify = 'answer';
            if(!(verify === tango)) { _fun51240_ip = 496; continue _fun51240 }
 492:
            golf = 'passive';
 496:
            _closure2_slot10 = golf;
            golf = options.forEach;
            oscar = function(argFoo) {
                _fun51241: for(var _fun51241_ip = 0; ; ) switch(_fun51241_ip) {
 0:
                    tango = argFoo;
                    mike = tango[Symbol.iterator];
                    tango = mike().next;
                    report = tango().value;
                    zulu = mike;
                    entity = undefined;
                    zulu = zulu === entity;
                    offset = undefined;
                    if(zulu) { _fun51241_ip = 27; continue _fun51241 }
 24:
                    offset = report;
 27:
                    verify = undefined;
                    if(zulu) { _fun51241_ip = 57; continue _fun51241 }
 32:
                    oscar = tango().value;
                    report = mike;
                    report = report === entity;
                    verify = undefined;
                    zulu = report;
                    if(report) { _fun51241_ip = 57; continue _fun51241 }
 51:
                    verify = oscar;
                    zulu = report;
 57:
                    kilo = undefined;
                    if(zulu) { _fun51241_ip = 87; continue _fun51241 }
 62:
                    oscar = tango().value;
                    report = mike;
                    report = report === entity;
                    kilo = undefined;
                    zulu = report;
                    if(report) { _fun51241_ip = 87; continue _fun51241 }
 81:
                    kilo = oscar;
                    zulu = report;
 87:
                    backup = undefined;
                    if(zulu) { _fun51241_ip = 117; continue _fun51241 }
 92:
                    oscar = tango().value;
                    report = mike;
                    report = report === entity;
                    backup = undefined;
                    zulu = report;
                    if(report) { _fun51241_ip = 117; continue _fun51241 }
 111:
                    backup = oscar;
                    zulu = report;
 117:
                    sizing = undefined;
                    if(zulu) { _fun51241_ip = 147; continue _fun51241 }
 122:
                    report = tango().value;
                    tango = mike;
                    tango = tango === entity;
                    sizing = undefined;
                    zulu = tango;
                    if(tango) { _fun51241_ip = 147; continue _fun51241 }
 141:
                    sizing = report;
                    zulu = tango;
 147:
                    if(zulu) { _fun51241_ip = 153; continue _fun51241 }
 150:
                    mike.return();
 153:
                    mike = 'video';
                    if(!(mike === kilo)) { _fun51241_ip = 188; continue _fun51241 }
 161:
                    tango = _closure2_slot5;
                    zulu = 0;
                    if(!(zulu !== tango)) { _fun51241_ip = 358; continue _fun51241 }
 177:
                    mike = _closure2_slot7;
                    if(!(zulu !== mike)) { _fun51241_ip = 358; continue _fun51241 }
 188:
                    mike = 'audio';
                    golf = mike === kilo;
                    if(golf) { _fun51241_ip = 208; continue _fun51241 }
 202:
                    foxtrot = _closure2_slot4;
                    _fun51241_ip = 212; continue _fun51241;
 208:
                    foxtrot = _closure2_slot1;
 212:
                    if(golf) { _fun51241_ip = 221; continue _fun51241 }
 215:
                    romeo = _closure2_slot5;
                    _fun51241_ip = 225; continue _fun51241;
 221:
                    romeo = _closure2_slot2;
 225:
                    if(golf) { _fun51241_ip = 234; continue _fun51241 }
 228:
                    options = _closure2_slot6;
                    _fun51241_ip = 238; continue _fun51241;
 234:
                    options = _closure2_slot3;
 238:
                    tango = _closure2_slot9;
                    zulu = tango.push;
                    report = _closure1_slot12;
                    mike = {};
                    mike['mid'] = sizing;
                    mike['type'] = kilo;
                    kilo = _closure2_slot10;
                    mike['setup'] = kilo;
                    mike['direction'] = backup;
                    backup = _closure2_slot0;
                    mike['baseSDP'] = backup;
                    mike['codec'] = foxtrot;
                    mike['payload'] = romeo;
                    mike['bitrate'] = options;
                    options = _closure1_slot10;
                    yankee = _closure1_slot7;
                    if(golf) { _fun51241_ip = 322; continue _fun51241 }
 314:
                    golf = yankee.VIDEO;
                    _fun51241_ip = 328; continue _fun51241;
 322:
                    golf = yankee.AUDIO;
 328:
                    golf = options.bind(entity)(verify, offset, golf);
                    mike['ssrcs'] = golf;
                    oscar = _closure2_slot8;
                    mike['extensions'] = oscar;
                    mike = report.bind(entity)(mike);
                    mike = zulu.bind(tango)(mike);
 358:
                    return entity;
                }
            };
            oscar = golf.bind(options)(oscar);
 515:
            mike = _closure1_slot11;
            mike = mike.bind(report)(zulu);
            zulu = entity.RTCSessionDescription;
            entity = {};
            entity['type'] = tango;
            entity['sdp'] = mike;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            config = mike;
            sequence = entity;
            entity = new config[zulu](sequence, vacuum);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    zulu['generateSessionDescription'] = report;
    report = function(argFoo) { // Original name: generateUnifiedSessionDescription
        _fun51246: for(var _fun51246_ip = 0; ; ) switch(_fun51246_ip) {
 0:
            mike = argFoo;
            tango = mike.type;
            zulu = mike.baseSDP;
            var _closure2_slot0 = zulu;
            zulu = mike.audioCodec;
            var _closure2_slot1 = zulu;
            zulu = mike.audioPayloadType;
            var _closure2_slot2 = zulu;
            zulu = mike.audioBitRate;
            var _closure2_slot3 = zulu;
            zulu = mike.videoCodec;
            var _closure2_slot4 = zulu;
            zulu = mike.videoPayloadType;
            var _closure2_slot5 = zulu;
            zulu = mike.videoBitRate;
            var _closure2_slot6 = zulu;
            zulu = mike.sendingVideo;
            var _closure2_slot7 = zulu;
            zulu = mike.rtxPayloadType;
            var _closure2_slot8 = zulu;
            oscar = mike.ssrcs;
            mike = mike.extensions;
            var _closure2_slot9 = mike;
            zulu = undefined;
            var _closure2_slot11 = zulu;
            mike = new Array(0);
            var _closure2_slot10 = mike;
            report = 'actpass';
            golf = 'answer';
            if(!(golf === tango)) { _fun51246_ip = 147; continue _fun51246 }
 143:
            report = 'passive';
 147:
            _closure2_slot11 = report;
            report = oscar.forEach;
            entity = function(argFoo) {
                _fun51247: for(var _fun51247_ip = 0; ; ) switch(_fun51247_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.ssrc;
                    report = entity.cname;
                    romeo = entity.type;
                    mike = entity.direction;
                    foxtrot = entity.mid;
                    entity = '';
                    if(!(entity === report)) { _fun51247_ip = 111; continue _fun51247 }
 40:
                    entity = new Array(0);
                    tango = _closure1_slot8;
                    tango = tango.SENDONLY;
                    if(!(mike !== tango)) { _fun51247_ip = 96; continue _fun51247 }
 61:
                    tango = _closure1_slot8;
                    tango = tango.SENDRECV;
                    golf = entity;
                    yankee = mike;
                    if(!(yankee === tango)) { _fun51247_ip = 160; continue _fun51247 }
 81:
                    tango = _closure1_slot8;
                    yankee = tango.RECVONLY;
                    golf = entity;
                    _fun51247_ip = 160; continue _fun51247;
 96:
                    zulu = _closure1_slot8;
                    yankee = zulu.INACTIVE;
                    golf = entity;
                    _fun51247_ip = 160; continue _fun51247;
 111:
                    tango = _closure1_slot10;
                    zulu = 'audio';
                    if(!(zulu !== romeo)) { _fun51247_ip = 138; continue _fun51247 }
 126:
                    zulu = _closure1_slot7;
                    zulu = zulu.VIDEO;
                    _fun51247_ip = 148; continue _fun51247;
 138:
                    entity = _closure1_slot7;
                    zulu = entity.AUDIO;
 148:
                    entity = undefined;
                    golf = tango.bind(entity)(report, oscar, zulu);
                    yankee = mike;
 160:
                    entity = 'audio';
                    mike = entity === romeo;
                    if(mike) { _fun51247_ip = 180; continue _fun51247 }
 174:
                    offset = _closure2_slot4;
                    _fun51247_ip = 184; continue _fun51247;
 180:
                    offset = _closure2_slot1;
 184:
                    if(mike) { _fun51247_ip = 193; continue _fun51247 }
 187:
                    verify = _closure2_slot5;
                    _fun51247_ip = 197; continue _fun51247;
 193:
                    verify = _closure2_slot2;
 197:
                    oscar = null;
                    if(mike) { _fun51247_ip = 206; continue _fun51247 }
 202:
                    oscar = _closure2_slot8;
 206:
                    if(mike) { _fun51247_ip = 215; continue _fun51247 }
 209:
                    options = _closure2_slot6;
                    _fun51247_ip = 219; continue _fun51247;
 215:
                    options = _closure2_slot3;
 219:
                    tango = _closure2_slot10;
                    zulu = tango.push;
                    report = _closure1_slot12;
                    mike = {};
                    mike['mid'] = foxtrot;
                    mike['type'] = romeo;
                    romeo = _closure2_slot11;
                    mike['setup'] = romeo;
                    mike['direction'] = yankee;
                    yankee = _closure2_slot0;
                    mike['baseSDP'] = yankee;
                    mike['codec'] = offset;
                    mike['payload'] = verify;
                    mike['bitrate'] = options;
                    mike['ssrcs'] = golf;
                    golf = _closure2_slot9;
                    mike['extensions'] = golf;
                    mike['rtxPayload'] = oscar;
                    entity = _closure2_slot7;
                    mike['sendingVideo'] = entity;
                    entity = undefined;
                    mike = report.bind(entity)(mike);
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            entity = report.bind(oscar)(entity);
            entity = _closure1_slot11;
            mike = entity.bind(zulu)(mike);
            entity = global;
            zulu = entity.RTCSessionDescription;
            entity = {};
            entity['type'] = tango;
            entity['sdp'] = mike;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            verify = mike;
            options = entity;
            entity = new verify[zulu](options, golf);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    zulu['generateUnifiedSessionDescription'] = report;
    zulu['extractSDP'] = tango;
    tango = function(argFoo) { // Original name: truncateSDP
        _fun51248: for(var _fun51248_ip = 0; ; ) switch(_fun51248_ip) {
 0:
            options = argFoo;
            mike = _closure1_slot14;
            entity = undefined;
            mike = mike.bind(entity)(options);
            mike = mike.codecs;
            report = mike.find;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.name;
                entity = _closure1_slot3;
                entity = entity.VP8;
                entity = mike === entity;
                return entity;
            };
            oscar = report.bind(mike)(tango);
            report = global;
            verify = report.RegExp;
            tango = null;
            golf = tango == oscar;
            if(golf) { _fun51248_ip = 63; continue _fun51248 }
 57:
            entity = oscar.rtxPayloadType;
 63:
            oscar = tango != entity;
            offset = 0;
            if(!oscar) { _fun51248_ip = 75; continue _fun51248 }
 72:
            offset = entity;
 75:
            entity = report.HermesInternal;
            golf = entity.concat;
            oscar = '^a=ice|a=extmap|a=fingerprint|opus|VP8|';
            entity = ' rtx';
            foxtrot = golf.bind(oscar)(offset, entity);
            entity = verify.prototype;
            oscar = Object.create(entity, {constructor: {value: verify}});
            romeo = 'i';
            backup = oscar;
            entity = new backup[verify](foxtrot, romeo, yankee);
            entity = entity instanceof Object ? entity : oscar;
            var _closure2_slot0 = entity;
            entity = {};
            oscar = report.Set;
            golf = options.split;
            report = /\r\n/;
            golf = golf.bind(options)(report);
            report = golf.filter;
            zulu = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.test;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = report.bind(golf)(zulu);
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            backup = report;
            zulu = new backup[oscar](foxtrot, romeo);
            romeo = zulu instanceof Object ? zulu : report;
            report = new Array(0);
            foxtrot = report;
            yankee = 0;
            zulu = arraySpread(foxtrot, romeo, yankee);
            tango = report.join;
            zulu = '\n';
            zulu = tango.bind(report)(zulu);
            entity['sdp'] = zulu;
            entity['codecs'] = mike;
            return entity;
        }
    };
    zulu['truncateSDP'] = tango;
    tango = function(argFoo) { // Original name: validateSdp
        _fun51251: for(var _fun51251_ip = 0; ; ) switch(_fun51251_ip) {
 0:
            zulu = argFoo;
            mike = zulu.includes;
            entity = 'a=fingerprint';
            entity = mike.bind(zulu)(entity);
            if(entity) { _fun51251_ip = 49; continue _fun51251 }
 22:
            tango = _closure1_slot6;
            mike = tango.error;
            entity = 'Remote SDP does not include fingerprint!';
            entity = mike.bind(tango)(entity);
            entity = false;
            return entity;
 49:
            mike = zulu.includes;
            entity = 'a=ice-ufrag';
            entity = mike.bind(zulu)(entity);
            if(entity) { _fun51251_ip = 95; continue _fun51251 }
 68:
            tango = _closure1_slot6;
            mike = tango.error;
            entity = 'Remote SDP does not include ICE user name!';
            entity = mike.bind(tango)(entity);
            entity = false;
            return entity;
 95:
            mike = zulu.includes;
            entity = 'a=ice-pwd';
            entity = mike.bind(zulu)(entity);
            if(entity) { _fun51251_ip = 141; continue _fun51251 }
 114:
            tango = _closure1_slot6;
            mike = tango.error;
            entity = 'Remote SDP does not include ICE password!';
            entity = mike.bind(tango)(entity);
            entity = false;
            return entity;
 141:
            mike = zulu.includes;
            entity = 'a=candidate';
            entity = mike.bind(zulu)(entity);
            if(entity) { _fun51251_ip = 187; continue _fun51251 }
 160:
            tango = _closure1_slot6;
            mike = tango.error;
            entity = 'Remote SDP does not include ICE candidate!';
            entity = mike.bind(tango)(entity);
            entity = false;
            return entity;
 187:
            mike = zulu.includes;
            entity = 'c=';
            entity = mike.bind(zulu)(entity);
            if(entity) { _fun51251_ip = 233; continue _fun51251 }
 206:
            tango = _closure1_slot6;
            mike = tango.error;
            entity = 'Remote SDP does not include c-line!';
            entity = mike.bind(tango)(entity);
            entity = false;
            return entity;
 233:
            mike = zulu.split;
            entity = '\n';
            zulu = mike.bind(zulu)(entity);
            mike = zulu.filter;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = zulu.startsWith;
                entity = 'c=';
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = mike.bind(zulu)(entity);
            entity = mike.join;
            mike = entity.bind(mike)();
            entity = mike.trim;
            oscar = entity.bind(mike)();
            mike = oscar.split;
            entity = ' ';
            entity = mike.bind(oscar)(entity);
            mike = entity.length;
            entity = 3;
            mike = mike < entity;
            entity = !mike;
            if(!mike) { _fun51251_ip = 358; continue _fun51251 }
 315:
            tango = _closure1_slot6;
            zulu = tango.error;
            mike = global;
            mike = mike.HermesInternal;
            report = mike.concat;
            mike = 'Incorrect c-line: ';
            mike = report.bind(mike)(oscar);
            mike = zulu.bind(tango)(mike);
            entity = false;
 358:
            return entity;
        }
    };
    zulu['validateSdp'] = tango;
    mike = function(argFoo) { // Original name: getExtensions
        report = argFoo;
        mike = global;
        tango = mike.Set;
        zulu = report.split;
        mike = /\r\n/;
        report = zulu.bind(report)(mike);
        zulu = report.filter;
        mike = function(argFoo) {
            zulu = argFoo;
            mike = zulu.startsWith;
            entity = 'a=extmap:';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        options = zulu.bind(report)(mike);
        zulu = tango.prototype;
        zulu = Object.create(zulu, {constructor: {value: tango}});
        verify = zulu;
        mike = new verify[tango](options, golf);
        golf = mike instanceof Object ? mike : zulu;
        zulu = new Array(0);
        oscar = 0;
        options = zulu;
        mike = arraySpread(options, golf, oscar);
        mike = zulu.map;
        entity = function(argFoo) {
            zulu = argFoo;
            mike = zulu.split;
            entity = ' ';
            zulu = mike.bind(zulu)(entity);
            tango = 0;
            report = zulu[tango];
            mike = report.split;
            entity = '/';
            mike = mike.bind(report)(entity);
            entity = {};
            report = global;
            oscar = report.parseInt;
            report = mike[tango];
            tango = report.substr;
            mike = 9;
            report = tango.bind(report)(mike);
            tango = undefined;
            mike = 10;
            mike = oscar.bind(tango)(report, mike);
            entity['value'] = mike;
            mike = 1;
            mike = zulu[mike];
            entity['uri'] = mike;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getExtensions'] = mike;
    return entity;
})();