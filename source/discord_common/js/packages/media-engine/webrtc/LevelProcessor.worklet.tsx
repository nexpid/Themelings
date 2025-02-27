// discord_common/js/packages/media-engine/webrtc/LevelProcessor.worklet.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        tangon = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                michal = _closure1_slot1;
                zuuluu = undefined;
                entity = argBar;
                verify = michal.bind(zuuluu)(entity);
                michal = _closure1_slot0;
                entity = _closure1_slot8;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 48; continue _fun00003 }
 35:
                entity = verify.apply;
                entity = entity.bind(verify)(tangon, zuuluu);
                _fun00004_ip = 86; continue _fun00003;
 48:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = new Array(0);
                report = _closure1_slot1;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = golfie.bind(option)(verify, oscard, report);
 86:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure1_slot7 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
 2: // try_start_0
                michal = global;
                zuuluu = michal.Boolean;
                zuuluu = zuuluu.prototype;
                tangon = zuuluu.valueOf;
                zuuluu = tangon.call;
                option = michal.Reflect;
                golfie = option.construct;
                oscard = michal.Boolean;
                report = new Array(0);
                michal = function() {
                    entity = undefined;
                    return entity;
                };
                michal = golfie.bind(option)(oscard, report, michal);
                michal = zuuluu.bind(tangon)(michal);
                michal = !michal;
                var _closure2_slot0 = michal;
 70: // try_end0
                _fun00006_ip = 74; continue _fun00005;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                michal = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot8 = michal;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot8 = entity;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                var _closure2_slot0 = zuuluu;
                report = global;
                michal = report.Symbol;
                tangon = 'undefined';
                michal = typeof michal;
                michal = tangon !== michal;
                if(!michal) { _fun00008_ip = 45; continue _fun00007 }
 30:
                tangon = report.Symbol;
                tangon = tangon.iterator;
                michal = zuuluu[tangon];
 45:
                if(michal) { _fun00008_ip = 54; continue _fun00007 }
 48:
                michal = zuuluu.@@iterator;
 54:
                if(michal) { _fun00008_ip = 342; continue _fun00007 }
 60:
                oscard = report.Array;
                tangon = oscard.isArray;
                oscard = tangon.bind(oscard)(zuuluu);
                tangon = michal;
                if(oscard) { _fun00008_ip = 322; continue _fun00007 }
 85:
                option = undefined;
                oscard = undefined;
                if(!zuuluu) { _fun00008_ip = 282; continue _fun00007 }
 95:
                verify = 'string';
                golfie = typeof zuuluu;
                if(!(verify !== golfie)) { _fun00008_ip = 269; continue _fun00007 }
 109:
                golfie = {};
                verify = golfie.toString;
                golfie = verify.call;
                yankee = golfie.bind(verify)(zuuluu);
                offset = yankee.slice;
                verify = 8;
                golfie = -1;
                verify = offset.bind(yankee)(verify, golfie);
                golfie = 'Object';
                golfie = golfie === verify;
                if(!golfie) { _fun00008_ip = 162; continue _fun00007 }
 157:
                golfie = zuuluu.constructor;
 162:
                offset = verify;
                if(!golfie) { _fun00008_ip = 178; continue _fun00007 }
 168:
                golfie = zuuluu.constructor;
                offset = golfie.name;
 178:
                golfie = 'Map';
                if(!(golfie !== offset)) { _fun00008_ip = 248; continue _fun00007 }
 186:
                golfie = 'Set';
                if(!(golfie !== offset)) { _fun00008_ip = 248; continue _fun00007 }
 194:
                golfie = 'Arguments';
                if(!(golfie !== offset)) { _fun00008_ip = 233; continue _fun00007 }
 204:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golfie = verify.test;
                verify = golfie.bind(verify)(offset);
                golfie = undefined;
                if(!verify) { _fun00008_ip = 246; continue _fun00007 }
 233:
                verify = _closure1_slot10;
                golfie = verify.bind(option)(zuuluu, option);
 246:
                _fun00008_ip = 264; continue _fun00007;
 248:
                offset = report.Array;
                verify = offset.from;
                golfie = verify.bind(offset)(zuuluu);
 264:
                oscard = golfie;
                _fun00008_ip = 282; continue _fun00007;
 269:
                golfie = _closure1_slot10;
                oscard = golfie.bind(option)(zuuluu, option);
 282:
                tangon = oscard;
                if(tangon) { _fun00008_ip = 322; continue _fun00007 }
 288:
                golfie = report.TypeError;
                report = golfie.prototype;
                oscard = Object.create(report, {constructor: {value: golfie}});
                foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                backup = oscard;
                report = new backup[golfie](foxtra, romeon);
                report = report instanceof Object ? report : oscard;
                throw report;
 322:
                if(!tangon) { _fun00008_ip = 329; continue _fun00007 }
 325:
                _closure2_slot0 = tangon;
 329:
                tangon = 0;
                var _closure2_slot1 = tangon;
                entity = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(michal >= entity))) { _fun00010_ip = 56; continue _fun00009 }
 20:
                        entity = {};
                        michal = false;
                        entity['done'] = michal;
                        zuuluu = _closure2_slot0;
                        michal = _closure2_slot1;
                        michal = parseFloat(michal);
                        tangon = michal + 1;
                        _closure2_slot1 = tangon;
                        michal = zuuluu[michal];
                        entity['value'] = michal;
                        _fun00010_ip = 67; continue _fun00009;
 56:
                        michal = {};
                        zuuluu = true;
                        michal['done'] = zuuluu;
                        entity = michal;
 67:
                        return entity;
                    }
                };
                return entity;
 342:
                entity = michal.call;
                zuuluu = entity.bind(michal)(zuuluu);
                michal = zuuluu.next;
                entity = michal.bind;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            }
        };
        var _closure1_slot9 = entity;
        entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argFoo;
                entity = null;
                zuuluu = undefined;
                entity = entity == zuuluu;
                if(entity) { _fun00012_ip = 23; continue _fun00011 }
 14:
                michal = tangon.length;
                entity = zuuluu > michal;
 23:
                michal = undefined;
                if(!entity) { _fun00012_ip = 33; continue _fun00011 }
 28:
                michal = tangon.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zuuluu)(michal);
                zuuluu = 0;
                report = zuuluu < michal;
                if(!report) { _fun00012_ip = 70; continue _fun00011 }
 55:
                report = tangon[zuuluu];
                entity[zuuluu] = report;
                zuuluu = zuuluu + 1;
                if(zuuluu < michal) { _fun00012_ip = 55; continue _fun00011 }
 70:
                return entity;
            }
        };
        var _closure1_slot10 = entity;
        report = global;
        verify = report.Object;
        option = verify.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = option.bind(verify)(zuuluu, entity, michal);
        foxtra = 0;
        michal = oscard[foxtra];
        entity = undefined;
        michal = tangon.bind(entity)(michal);
        var _closure1_slot0 = michal;
        romeon = 1;
        michal = oscard[romeon];
        michal = tangon.bind(entity)(michal);
        var _closure1_slot1 = michal;
        yankee = 2;
        michal = oscard[yankee];
        michal = tangon.bind(entity)(michal);
        var _closure1_slot2 = michal;
        michal = 3;
        michal = oscard[michal];
        verify = tangon.bind(entity)(michal);
        offset = 4;
        michal = oscard[offset];
        michal = tangon.bind(entity)(michal);
        var _closure1_slot3 = michal;
        michal = 5;
        michal = oscard[michal];
        michal = tangon.bind(entity)(michal);
        var _closure1_slot4 = michal;
        michal = function() {
            tangon = _closure1_slot4;
            zuuluu = function(argFoo) { // Original name: BoundedHistogram
                oscard = argFoo;
                zuuluu = this;
                tangon = _closure1_slot3;
                michal = _closure2_slot0;
                entity = undefined;
                michal = tangon.bind(entity)(zuuluu, michal);
                zuuluu['size'] = oscard;
                report = 0;
                zuuluu['head'] = report;
                michal = global;
                michal = michal.Array;
                tangon = michal.prototype;
                tangon = Object.create(tangon, {constructor: {value: michal}});
                verify = tangon;
                option = oscard;
                michal = new verify[michal](option, golfie);
                tangon = michal instanceof Object ? michal : tangon;
                michal = tangon.fill;
                michal = michal.bind(tangon)(report);
                zuuluu['samples'] = michal;
                return entity;
            };
            var _closure2_slot0 = zuuluu;
            entity = {};
            michal = 'addSample';
            entity['key'] = michal;
            michal = function(argFoo) { // Original name: value
                entity = this;
                zuuluu = entity.head;
                michal = 1;
                zuuluu = zuuluu + michal;
                michal = entity.size;
                michal = zuuluu % michal;
                entity['head'] = michal;
                zuuluu = entity.samples;
                michal = entity.head;
                entity = argFoo;
                zuuluu[michal] = entity;
                entity = undefined;
                return entity;
            };
            entity['value'] = michal;
            michal = new Array(2);
            michal[0] = entity;
            entity = {};
            oscard = 'mean';
            entity['key'] = oscard;
            report = function() { // Original name: mean
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = this;
                    zuuluu = entity.size;
                    michal = 1;
                    golfie = michal / zuuluu;
                    michal = _closure1_slot9;
                    entity = entity.samples;
                    oscard = undefined;
                    report = michal.bind(oscard)(entity);
                    zuuluu = report.bind(oscard)();
                    michal = zuuluu.done;
                    tangon = zuuluu;
                    zuuluu = 0;
                    entity = 0;
                    if(michal) { _fun00014_ip = 85; continue _fun00013 }
 54:
                    michal = tangon.value;
                    michal = michal * golfie;
                    zuuluu = zuuluu + michal;
                    verify = report.bind(oscard)();
                    michal = verify.done;
                    tangon = verify;
                    entity = zuuluu;
                    if(!michal) { _fun00014_ip = 54; continue _fun00013 }
 85:
                    return entity;
                }
            };
            entity['value'] = report;
            michal[1] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        tangon = michal.bind(entity)();
        var _closure1_slot5 = tangon;
        michal = {};
        michal['NONE'] = foxtra;
        option = 'NONE';
        michal[foxtra] = option;
        michal['VOICE'] = romeon;
        option = 'VOICE';
        michal[romeon] = option;
        michal['SOUNDSHARE'] = yankee;
        option = 'SOUNDSHARE';
        michal[yankee] = option;
        michal['PRIORITY'] = offset;
        option = 'PRIORITY';
        michal[offset] = option;
        var _closure1_slot6 = michal;
        option = report.AudioWorkletProcessor;
        offset = 'undefined';
        option = typeof option;
        if(!(offset !== option)) { _fun00002_ip = 305; continue _fun00001 }
 264:
        option = report.AudioWorkletProcessor;
        option = verify.bind(entity)(option);
        golfie = function(argFoo) {
            tangon = function() { // Original name: LevelProcessor
                oscard = this;
                entity = _closure1_slot3;
                report = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)(oscard, report);
                entity = _closure1_slot7;
                entity = entity.bind(tangon)(oscard, report);
                var _closure3_slot0 = entity;
                tangon = true;
                entity['running'] = tangon;
                tangon = _closure1_slot6;
                tangon = tangon.NONE;
                entity['lastSpeaking'] = tangon;
                report = _closure1_slot5;
                zuuluu = report.prototype;
                tangon = Object.create(zuuluu, {constructor: {value: report}});
                option = 20;
                verify = tangon;
                zuuluu = new verify[report](option, golfie);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                entity['dBFSHistogram'] = zuuluu;
                zuuluu = entity.port;
                michal = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = argFoo;
                        michal = entity.data;
                        entity = 'close';
                        if(!(entity === michal)) { _fun00016_ip = 31; continue _fun00015 }
 16:
                        michal = _closure3_slot0;
                        entity = false;
                        michal['running'] = entity;
 31:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu['onmessage'] = michal;
                return entity;
            };
            var _closure2_slot0 = tangon;
            oscard = _closure1_slot2;
            zuuluu = undefined;
            report = argFoo;
            report = oscard.bind(zuuluu)(tangon, report);
            michal = _closure1_slot4;
            report = {};
            oscard = 'process';
            report['key'] = oscard;
            entity = function(argFoo) { // Original name: value
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = this;
                    michal = argFoo;
                    option = 0;
                    report = michal[option];
                    michal = _closure1_slot6;
                    oscard = michal.NONE;
                    zuuluu = report.length;
                    michal = oscard;
                    if(!(zuuluu > option)) { _fun00018_ip = 320; continue _fun00017 }
 40:
                    zuuluu = report[option];
                    zuuluu = zuuluu.length;
                    michal = oscard;
                    if(!(zuuluu > option)) { _fun00018_ip = 320; continue _fun00017 }
 59:
                    zuuluu = report[option];
                    yankee = zuuluu.length;
                    zuuluu = report.length;
                    zuuluu = option < zuuluu;
                    golfie = 0;
                    oscard = 0;
                    offset = 0;
                    if(!zuuluu) { _fun00018_ip = 159; continue _fun00017 }
 86:
                    backup = report[oscard];
                    zuuluu = backup.length;
                    zuuluu = option < zuuluu;
                    foxtra = golfie;
                    romeon = 0;
                    verify = foxtra;
                    if(!zuuluu) { _fun00018_ip = 141; continue _fun00017 }
 110:
                    kiloes = backup[romeon];
                    zuuluu = backup[romeon];
                    zuuluu = kiloes * zuuluu;
                    foxtra = foxtra + zuuluu;
                    romeon = romeon + 1;
                    zuuluu = backup.length;
                    verify = foxtra;
                    if(romeon < zuuluu) { _fun00018_ip = 110; continue _fun00017 }
 141:
                    oscard = oscard + 1;
                    zuuluu = report.length;
                    golfie = verify;
                    offset = golfie;
                    if(oscard < zuuluu) { _fun00018_ip = 86; continue _fun00017 }
 159:
                    zuuluu = global;
                    golfie = zuuluu.Math;
                    oscard = golfie.log10;
                    verify = zuuluu.Math;
                    option = verify.sqrt;
                    report = report.length;
                    report = yankee * report;
                    report = offset / report;
                    report = option.bind(verify)(report);
                    oscard = oscard.bind(golfie)(report);
                    report = 20;
                    report = report * oscard;
                    golfie = zuuluu.Math;
                    oscard = golfie.sqrt;
                    zuuluu = 2;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    golfie = report + zuuluu;
                    oscard = entity.dBFSHistogram;
                    report = oscard.addSample;
                    zuuluu = -100;
                    if(!(golfie > zuuluu)) { _fun00018_ip = 264; continue _fun00017 }
 261:
                    zuuluu = golfie;
 264:
                    zuuluu = report.bind(oscard)(zuuluu);
                    report = entity.dBFSHistogram;
                    zuuluu = report.mean;
                    report = zuuluu.bind(report)();
                    zuuluu = -80;
                    if(!(!(report > zuuluu))) { _fun00018_ip = 307; continue _fun00017 }
 295:
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.NONE;
                    _fun00018_ip = 317; continue _fun00017;
 307:
                    tangon = _closure1_slot6;
                    zuuluu = tangon.VOICE;
 317:
                    michal = zuuluu;
 320:
                    zuuluu = entity.lastSpeaking;
                    if(!(zuuluu !== michal)) { _fun00018_ip = 353; continue _fun00017 }
 330:
                    tangon = entity.port;
                    zuuluu = tangon.postMessage;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    entity['lastSpeaking'] = michal;
 353:
                    entity = entity.running;
                    return entity;
                }
            };
            report['value'] = entity;
            entity = new Array(1);
            entity[0] = report;
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        };
        option = golfie.bind(entity)(option);
        golfie = report.registerProcessor;
        report = 'level-processor';
        report = golfie.bind(entity)(report, option);
 305:
        report = 6;
        oscard = oscard[report];
        report = argBar;
        golfie = report.bind(entity)(oscard);
        oscard = golfie.fileFinishedImporting;
        report = '../discord_common/js/packages/media-engine/webrtc/LevelProcessor.worklet.tsx';
        report = oscard.bind(golfie)(report);
        report = '';
        zuuluu['default'] = report;
        zuuluu['BoundedHistogram'] = tangon;
        zuuluu['SpeakingFlags'] = michal;
        return entity;
    }
})();