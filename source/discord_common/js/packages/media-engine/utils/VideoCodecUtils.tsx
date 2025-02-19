// discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        zuuluu = argFre;
        oscard = argPlu;
        entity = function(argFoo, argBar) { // Original name: filterVideoCodecsInternal
            tangon = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            zuuluu = tangon.concat;
            entity = _closure1_slot0;
            tangon = zuuluu.bind(tangon)(entity);
            entity = new Array(0);
            var _closure2_slot1 = entity;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    var _closure3_slot0 = report;
                    tangon = _closure2_slot0;
                    zuuluu = tangon.find;
                    michal = function(argFoo) {
                        entity = _closure3_slot0;
                        michal = entity.name;
                        entity = argFoo;
                        entity = entity.codec;
                        entity = michal === entity;
                        return entity;
                    };
                    tangon = zuuluu.bind(tangon)(michal);
                    michal = null;
                    if(!(michal != tangon)) { _fun00004_ip = 103; continue _fun00003 }
 37:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.push;
                    entity = {};
                    oscard = tangon.codec;
                    entity['name'] = oscard;
                    oscard = tangon.encode;
                    if(!oscard) { _fun00004_ip = 73; continue _fun00003 }
 67:
                    oscard = report.encode;
 73:
                    entity['encode'] = oscard;
                    tangon = tangon.decode;
                    if(!tangon) { _fun00004_ip = 93; continue _fun00003 }
 87:
                    tangon = report.decode;
 93:
                    entity['decode'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure1_slot1 = entity;
        entity = function(argFoo) { // Original name: codecNameFromPayloadName
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                entity = 'AV1';
                zuuluu = 'AV1X';
                if(!(zuuluu !== michal)) { _fun00006_ip = 20; continue _fun00005 }
 17:
                entity = michal;
 20:
                return entity;
            }
        };
        var _closure1_slot2 = entity;
        verify = global;
        option = verify.Object;
        golfie = option.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = golfie.bind(option)(zuuluu, entity, tangon);
        entity = 0;
        tangon = oscard[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        romeon = tangon.DARWIN_H265_VERSION;
        tangon = tangon.ExperimentFlags;
        golfie = {'name': 'H265', 'encode': null, 'decode': true};
        tangon = verify.window;
        backup = null;
        offset = backup == tangon;
        option = undefined;
        if(offset) { _fun00002_ip = 144; continue _fun00001 }
 117:
        tangon = tangon.DiscordNative;
        offset = backup == tangon;
        option = undefined;
        if(offset) { _fun00002_ip = 144; continue _fun00001 }
 132:
        tangon = tangon.process;
        option = tangon.platform;
 144:
        tangon = 'darwin';
        tangon = tangon !== option;
        if(tangon) { _fun00002_ip = 287; continue _fun00001 }
 160:
        option = verify.window;
        yankee = backup == option;
        offset = undefined;
        if(yankee) { _fun00002_ip = 202; continue _fun00001 }
 175:
        option = option.DiscordNative;
        yankee = backup == option;
        offset = undefined;
        if(yankee) { _fun00002_ip = 202; continue _fun00001 }
 190:
        option = option.os;
        offset = option.arch;
 202:
        option = 'arm64';
        option = option === offset;
        if(!option) { _fun00002_ip = 284; continue _fun00001 }
 215:
        offset = 1;
        yankee = oscard[offset];
        offset = argBaz;
        yankee = offset.bind(entity)(yankee);
        offset = yankee.satisfies;
        foxtra = verify.window;
        kiloes = backup == foxtra;
        verify = undefined;
        if(kiloes) { _fun00002_ip = 278; continue _fun00001 }
 251:
        foxtra = foxtra.DiscordNative;
        backup = backup == foxtra;
        verify = undefined;
        if(backup) { _fun00002_ip = 278; continue _fun00001 }
 266:
        foxtra = foxtra.os;
        verify = foxtra.release;
 278:
        option = offset.bind(yankee)(verify, romeon);
 284:
        tangon = option;
 287:
        golfie['encode'] = tangon;
        tangon = new Array(4);
        tangon[0] = golfie;
        golfie = {'name': 'H264', 'encode': true, 'decode': true};
        tangon[1] = golfie;
        golfie = {'name': 'VP8', 'encode': true, 'decode': true};
        tangon[2] = golfie;
        golfie = {'name': 'VP9', 'encode': true, 'decode': true};
        tangon[3] = golfie;
        var _closure1_slot0 = tangon;
        tangon = 2;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = '../discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx';
        tangon = report.bind(oscard)(tangon);
        tangon = function() { // Original name: getExperimentCodecs
            entity = new Array(0);
            return entity;
        };
        zuuluu['getExperimentCodecs'] = tangon;
        tangon = function(argFoo, argBar) { // Original name: filterVideoCodecs
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscard = argFoo;
                tangon = _closure1_slot1;
                zuuluu = 'string';
                michal = typeof oscard;
                if(!(zuuluu !== michal)) { _fun00008_ip = 40; continue _fun00007 }
 23:
                zuuluu = oscard.map;
                michal = function(argFoo) {
                    entity = {'codec': null, 'encode': true, 'decode': true};
                    tangon = _closure1_slot2;
                    zuuluu = undefined;
                    michal = argFoo;
                    michal = tangon.bind(zuuluu)(michal);
                    entity['codec'] = michal;
                    return entity;
                };
                zuuluu = zuuluu.bind(oscard)(michal);
                _fun00008_ip = 74; continue _fun00007;
 40:
                michal = global;
                report = michal.JSON;
                michal = report.parse;
                report = michal.bind(report)(oscard);
                michal = report.map;
                entity = function(argFoo) {
                    michal = argFoo;
                    entity = {};
                    report = _closure1_slot2;
                    tangon = michal.codec;
                    zuuluu = undefined;
                    zuuluu = report.bind(zuuluu)(tangon);
                    entity['codec'] = zuuluu;
                    zuuluu = michal.encode;
                    entity['encode'] = zuuluu;
                    michal = michal.decode;
                    entity['decode'] = michal;
                    return entity;
                };
                zuuluu = michal.bind(report)(entity);
 74:
                michal = undefined;
                entity = argBar;
                entity = tangon.bind(michal)(zuuluu, entity);
                return entity;
            }
        };
        zuuluu['filterVideoCodecs'] = tangon;
        michal = function(argFoo) { // Original name: codecNameToPayloadName
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = argFoo;
                entity = 'AV1X';
                zuuluu = 'AV1';
                if(!(zuuluu !== michal)) { _fun00010_ip = 20; continue _fun00009 }
 17:
                entity = michal;
 20:
                return entity;
            }
        };
        zuuluu['codecNameToPayloadName'] = michal;
        return entity;
    }
})();