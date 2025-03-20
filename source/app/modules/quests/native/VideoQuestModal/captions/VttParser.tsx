// app/modules/quests/native/VideoQuestModal/captions/VttParser.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    entity = function(argFoo) { // Original name: validTimestamp
        zuuluu = _closure1_slot6;
        michal = zuuluu.test;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: parseTimestamp
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.match;
            entity = _closure1_slot6;
            golfie = michal.bind(zuuluu)(entity);
            entity = null;
            if(!(entity != golfie)) { _fun00006_ip = 126; continue _fun00005 }
 27:
            michal = global;
            zuuluu = michal.parseFloat;
            tangon = 1;
            tangon = golfie[tangon];
            report = entity != tangon;
            entity = '0';
            if(!report) { _fun00006_ip = 58; continue _fun00005 }
 55:
            entity = tangon;
 58:
            oscard = undefined;
            entity = zuuluu.bind(oscard)(entity);
            tangon = 60;
            entity = tangon * entity;
            report = michal.parseFloat;
            zuuluu = 2;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = tangon * zuuluu;
            report = michal.parseFloat;
            michal = 3;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            entity = entity * tangon;
            entity = entity + zuuluu;
            entity = entity + michal;
            return entity;
 126:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    tangon = global;
    verify = tangon.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = oscard[entity];
    entity = undefined;
    report = golfie.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = oscard[report];
    report = golfie.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = oscard[report];
    report = golfie.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = oscard[report];
    report = golfie.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = oscard[report];
    report = golfie.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 5;
    report = oscard[report];
    report = golfie.bind(entity)(report);
    tangon = tangon.Error;
    report = report.bind(entity)(tangon);
    tangon = function(argFoo) {
        zuuluu = function(argFoo, argBar) { // Original name: VttParserError
            report = this;
            michal = _closure1_slot1;
            tangon = _closure2_slot0;
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(report, tangon);
            michal = _closure1_slot7;
            entity = new Array(1);
            oscard = argFoo;
            entity[0] = oscard;
            entity = michal.bind(zuuluu)(report, tangon, entity);
            michal = argBar;
            entity['error'] = michal;
            michal = 'ParserError';
            entity['name'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot4;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot0;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    tangon = tangon.bind(entity)(report);
    var _closure1_slot5 = tangon;
    report = /([0-9]+)?:?([0-9]{2}):([0-9]{2}\.[0-9]{2,3})/;
    var _closure1_slot6 = report;
    report = 6;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/native/VideoQuestModal/captions/VttParser.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['VttParserError'] = tangon;
    michal = function(argFoo) { // Original name: parseVtt
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = arguments[1];
            verify = undefined;
            if(!(entity === verify)) { _fun00008_ip = 16; continue _fun00007 }
 14:
            entity = {};
 16:
            michal = entity.meta;
            report = verify !== michal;
            if(!report) { _fun00008_ip = 32; continue _fun00007 }
 29:
            report = michal;
 32:
            entity = entity.strict;
            michal = verify === entity;
            if(michal) { _fun00008_ip = 48; continue _fun00007 }
 45:
            michal = entity;
 48:
            entity = zuuluu.trim;
            oscard = entity.bind(zuuluu)();
            zuuluu = oscard.replace;
            entity = /\r\n/g;
            golfie = '\n';
            oscard = zuuluu.bind(oscard)(entity, golfie);
            zuuluu = oscard.replace;
            entity = /\r/g;
            oscard = zuuluu.bind(oscard)(entity, golfie);
            zuuluu = oscard.split;
            entity = '\n\n';
            oscard = zuuluu.bind(oscard)(entity);
            entity = oscard.shift;
            zuuluu = entity.bind(oscard)();
            entity = zuuluu.startsWith;
            yankee = 'WEBVTT';
            entity = entity.bind(zuuluu)(yankee);
            if(entity) { _fun00008_ip = 193; continue _fun00007 }
 158:
            offset = _closure1_slot5;
            entity = offset.prototype;
            option = Object.create(entity, {constructor: {value: offset}});
            foxtra = 'Must start with "WEBVTT"';
            backup = option;
            entity = new backup[offset](foxtra, romeon);
            entity = entity instanceof Object ? entity : option;
            throw entity;
 193:
            entity = zuuluu.split;
            option = entity.bind(zuuluu)(golfie);
            zuuluu = 0;
            offset = option[zuuluu];
            entity = offset.replace;
            golfie = '';
            entity = entity.bind(offset)(yankee, golfie);
            offset = entity.length;
            if(!(offset > zuuluu)) { _fun00008_ip = 260; continue _fun00007 }
 233:
            yankee = entity[zuuluu];
            offset = ' ';
            if(!(offset !== yankee)) { _fun00008_ip = 260; continue _fun00007 }
 245:
            offset = entity[zuuluu];
            entity = '\t';
            if(!(entity === offset)) { _fun00008_ip = 492; continue _fun00007 }
 260:
            entity = oscard.length;
            if(!(zuuluu === entity)) { _fun00008_ip = 284; continue _fun00007 }
 269:
            offset = option.length;
            entity = 1;
            if(!(entity !== offset)) { _fun00008_ip = 458; continue _fun00007 }
 284:
            if(report) { _fun00008_ip = 342; continue _fun00007 }
 287:
            offset = option.length;
            entity = 1;
            if(!(offset > entity)) { _fun00008_ip = 342; continue _fun00007 }
 299:
            entity = option[entity];
            if(!(golfie !== entity)) { _fun00008_ip = 342; continue _fun00007 }
 307:
            offset = _closure1_slot5;
            entity = offset.prototype;
            golfie = Object.create(entity, {constructor: {value: offset}});
            foxtra = 'Missing blank line after signature';
            backup = golfie;
            entity = new backup[offset](foxtra, romeon);
            entity = entity instanceof Object ? entity : golfie;
            throw entity;
 342:
            entity = function(argFoo, argBar) { // Original name: parseCues
                report = argFoo;
                michal = argBar;
                var _closure3_slot0 = michal;
                michal = new Array(0);
                var _closure3_slot1 = michal;
                tangon = report.map;
                zuuluu = function(argFoo, argBar) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = argFoo;
                        entity = argBar;
 6: // try_start_0
                        oscard = entity;
                        foxtra = _closure3_slot0;
                        entity = michal.split;
                        romeon = '\n';
                        tangon = entity.bind(michal)(romeon);
                        zuuluu = tangon.filter;
                        michal = global;
                        entity = michal.Boolean;
                        golfie = zuuluu.bind(tangon)(entity);
                        entity = golfie.length;
                        option = 0;
                        if(!(entity > option)) { _fun00010_ip = 96; continue _fun00009 }
 59:
                        zuuluu = golfie[option];
                        entity = zuuluu.trim;
                        tangon = entity.bind(zuuluu)();
                        zuuluu = tangon.startsWith;
                        entity = 'NOTE';
                        zuuluu = zuuluu.bind(tangon)(entity);
                        entity = null;
                        if(zuuluu) { _fun00010_ip = 783; continue _fun00009 }
 96:
                        zuuluu = golfie.length;
                        report = 1;
                        if(!(report === zuuluu)) { _fun00010_ip = 187; continue _fun00009 }
 108:
                        verify = golfie[option];
                        tangon = verify.includes;
                        zuuluu = '-->';
                        zuuluu = tangon.bind(verify)(zuuluu);
                        if(zuuluu) { _fun00010_ip = 187; continue _fun00009 }
 131:
                        verify = _closure1_slot5;
                        zuuluu = michal.HermesInternal;
                        offset = zuuluu.concat;
                        tangon = 'Cue identifier cannot be standalone (cue #';
                        zuuluu = ')';
                        result = offset.bind(tangon)(oscard, zuuluu);
                        tangon = verify.prototype;
                        tangon = Object.create(tangon, {constructor: {value: verify}});
                        echoed = tangon;
                        zuuluu = new echoed[verify](result, output);
                        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                        throw zuuluu;
 187:
                        zuuluu = golfie.length;
                        if(!(zuuluu > report)) { _fun00010_ip = 292; continue _fun00009 }
 196:
                        tangon = golfie[option];
                        zuuluu = tangon.includes;
                        verify = '-->';
                        zuuluu = zuuluu.bind(tangon)(verify);
                        if(zuuluu) { _fun00010_ip = 292; continue _fun00009 }
 219:
                        tangon = golfie[report];
                        zuuluu = tangon.includes;
                        zuuluu = zuuluu.bind(tangon)(verify);
                        if(zuuluu) { _fun00010_ip = 292; continue _fun00009 }
 236:
                        verify = _closure1_slot5;
                        zuuluu = michal.HermesInternal;
                        offset = zuuluu.concat;
                        tangon = 'Cue identifier needs to be followed by timestamp (cue #';
                        zuuluu = ')';
                        result = offset.bind(tangon)(oscard, zuuluu);
                        tangon = verify.prototype;
                        tangon = Object.create(tangon, {constructor: {value: verify}});
                        echoed = tangon;
                        zuuluu = new echoed[verify](result, output);
                        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                        throw zuuluu;
 292:
                        zuuluu = golfie.length;
                        zuuluu = zuuluu > report;
                        if(!zuuluu) { _fun00010_ip = 324; continue _fun00009 }
 304:
                        offset = golfie[report];
                        verify = offset.includes;
                        tangon = '-->';
                        zuuluu = verify.bind(offset)(tangon);
 324:
                        yankee = '';
                        offset = yankee;
                        if(!zuuluu) { _fun00010_ip = 344; continue _fun00009 }
 334:
                        zuuluu = golfie.shift;
                        offset = zuuluu.bind(golfie)();
 344:
                        verify = golfie[option];
                        tangon = verify.split;
                        zuuluu = ' --> ';
                        tangon = tangon.bind(verify)(zuuluu);
                        verify = tangon.length;
                        zuuluu = 2;
                        if(!(zuuluu === verify)) { _fun00010_ip = 727; continue _fun00009 }
 379:
                        backup = _closure1_slot9;
                        verify = tangon[option];
                        kiloes = undefined;
                        verify = backup.bind(kiloes)(verify);
                        if(!verify) { _fun00010_ip = 727; continue _fun00009 }
 403:
                        backup = _closure1_slot9;
                        verify = tangon[report];
                        verify = backup.bind(kiloes)(verify);
                        if(!verify) { _fun00010_ip = 727; continue _fun00009 }
 422:
                        backup = _closure1_slot10;
                        option = tangon[option];
                        verify = backup.bind(kiloes)(option);
                        option = tangon[report];
                        option = backup.bind(kiloes)(option);
                        if(!foxtra) { _fun00010_ip = 461; continue _fun00009 }
 447:
                        if(!(!(verify > option))) { _fun00010_ip = 674; continue _fun00009 }
 454:
                        if(!(!(option <= verify))) { _fun00010_ip = 621; continue _fun00009 }
 461:
                        if(foxtra) { _fun00010_ip = 521; continue _fun00009 }
 464:
                        if(!(option < verify)) { _fun00010_ip = 521; continue _fun00009 }
 468:
                        kiloes = _closure1_slot5;
                        foxtra = michal.HermesInternal;
                        sizing = foxtra.concat;
                        backup = 'End must be greater or equal to start when not strict (cue #';
                        foxtra = ')';
                        result = sizing.bind(backup)(oscard, foxtra);
                        backup = kiloes.prototype;
                        backup = Object.create(backup, {constructor: {value: kiloes}});
                        echoed = backup;
                        foxtra = new echoed[kiloes](result, output);
                        foxtra = foxtra instanceof Object ? foxtra : backup;
                        throw foxtra;
 521:
                        foxtra = tangon[report];
                        report = foxtra.replace;
                        tangon = _closure1_slot6;
                        report = report.bind(foxtra)(tangon, yankee);
                        tangon = report.trim;
                        report = tangon.bind(report)();
                        tangon = golfie.shift;
                        tangon = tangon.bind(golfie)();
                        tangon = golfie.join;
                        golfie = tangon.bind(golfie)(romeon);
                        tangon = golfie.trim;
                        tangon = tangon.bind(golfie)();
                        entity = false;
                        if(!(yankee !== tangon)) { _fun00010_ip = 783; continue _fun00009 }
 589:
                        tangon = {};
                        tangon['identifier'] = offset;
                        tangon['start'] = verify;
                        tangon['end'] = option;
                        tangon['text'] = golfie;
                        tangon['styles'] = report;
                        entity = tangon;
                        _fun00010_ip = 783; continue _fun00009;
 621:
                        golfie = _closure1_slot5;
                        tangon = michal.HermesInternal;
                        option = tangon.concat;
                        report = 'End must be greater than start (cue #';
                        tangon = ')';
                        result = option.bind(report)(oscard, tangon);
                        report = golfie.prototype;
                        report = Object.create(report, {constructor: {value: golfie}});
                        echoed = report;
                        tangon = new echoed[golfie](result, output);
                        tangon = tangon instanceof Object ? tangon : report;
                        throw tangon;
 674:
                        report = _closure1_slot5;
                        zuuluu = michal.HermesInternal;
                        golfie = zuuluu.concat;
                        tangon = 'Start timestamp greater than end (cue #';
                        zuuluu = ')';
                        result = golfie.bind(tangon)(oscard, zuuluu);
                        tangon = report.prototype;
                        tangon = Object.create(tangon, {constructor: {value: report}});
                        echoed = tangon;
                        zuuluu = new echoed[report](result, output);
                        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                        throw zuuluu;
 727:
                        tangon = _closure1_slot5;
                        michal = michal.HermesInternal;
                        report = michal.concat;
                        zuuluu = 'Invalid cue timestamp (cue #';
                        michal = ')';
                        result = report.bind(zuuluu)(oscard, michal);
                        zuuluu = tangon.prototype;
                        zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                        echoed = zuuluu;
                        michal = new echoed[tangon](result, output);
                        michal = michal instanceof Object ? michal : zuuluu;
                        throw michal;
 783: // try_end0
                        return entity;
 785: // catch_target0
                        CatchBlockStart(arg_register=2);
                        michal = _closure3_slot1;
                        entity = michal.push;
                        entity = entity.bind(michal)(zuuluu);
                        entity = null;
                        return entity;
                    }
                };
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.filter;
                entity = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        zuuluu = argFoo;
                        entity = null;
                        entity = entity !== zuuluu;
                        if(!entity) { _fun00012_ip = 18; continue _fun00011 }
 12:
                        michal = false;
                        entity = michal !== zuuluu;
 18:
                        return entity;
                    }
                };
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = {};
                entity['cues'] = zuuluu;
                entity['errors'] = michal;
                return entity;
            };
            entity = entity.bind(verify)(oscard, michal);
            oscard = entity.cues;
            entity = entity.errors;
            if(!michal) { _fun00008_ip = 379; continue _fun00007 }
 370:
            golfie = entity.length;
            if(!(!(golfie > zuuluu))) { _fun00008_ip = 452; continue _fun00007 }
 379:
            golfie = null;
            if(!report) { _fun00008_ip = 396; continue _fun00007 }
 384:
            tangon = function(argFoo) { // Original name: parseMeta
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    report = argFoo;
                    michal = {};
                    var _closure3_slot0 = michal;
                    tangon = report.slice;
                    zuuluu = 1;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.forEach;
                    entity = function(argFoo) {
                        tangon = argFoo;
                        michal = tangon.indexOf;
                        entity = ':';
                        report = michal.bind(tangon)(entity);
                        michal = tangon.slice;
                        entity = 0;
                        michal = michal.bind(tangon)(entity, report);
                        entity = michal.trim;
                        zuuluu = entity.bind(michal)();
                        michal = tangon.slice;
                        entity = 1;
                        entity = report + entity;
                        michal = michal.bind(tangon)(entity);
                        entity = michal.trim;
                        michal = entity.bind(michal)();
                        entity = _closure3_slot0;
                        entity[zuuluu] = michal;
                        entity = undefined;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(entity);
                    entity = global;
                    zuuluu = entity.Object;
                    entity = zuuluu.keys;
                    entity = entity.bind(zuuluu)(michal);
                    zuuluu = entity.length;
                    entity = 0;
                    zuuluu = zuuluu > entity;
                    entity = null;
                    if(!zuuluu) { _fun00014_ip = 78; continue _fun00013 }
 75:
                    entity = michal;
 78:
                    return entity;
                }
            };
            golfie = tangon.bind(verify)(option);
 396:
            tangon = {};
            option = entity.length;
            option = zuuluu === option;
            tangon['valid'] = option;
            tangon['strict'] = michal;
            tangon['cues'] = oscard;
            tangon['errors'] = entity;
            if(!report) { _fun00008_ip = 440; continue _fun00007 }
 430:
            oscard = {};
            oscard['meta'] = golfie;
            report = oscard;
 440:
            foxtra = tangon;
            romeon = report;
            report = copyDataProperties(foxtra, romeon);
            return tangon;
 452:
            entity = entity[zuuluu];
            throw entity;
 458:
            entity = {};
            zuuluu = true;
            entity['valid'] = zuuluu;
            entity['strict'] = michal;
            michal = new Array(0);
            entity['cues'] = michal;
            michal = new Array(0);
            entity['errors'] = michal;
            return entity;
 492:
            zuuluu = _closure1_slot5;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            foxtra = 'Header comment must start with space or tab';
            backup = michal;
            entity = new backup[zuuluu](foxtra, romeon);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    zuuluu['parseVtt'] = michal;
    return entity;
})();