// discord_common/js/packages/protos/google/protobuf/timestamp.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot9;
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
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageType;
    michal = function(argFoo) {
        tangon = function() { // Original name: Timestamp$Type
            report = this;
            michal = _closure1_slot3;
            tangon = _closure2_slot0;
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(report, tangon);
            michal = _closure1_slot8;
            oscard = new Array(2);
            entity = {'no': 1, 'name': 'seconds', 'kind': 'scalar', 'T': 3};
            oscard[0] = entity;
            entity = {'no': 2, 'name': 'nanos', 'kind': 'scalar', 'T': 5};
            oscard[1] = entity;
            entity = ['google.protobuf.Timestamp'];
            entity[1] = oscard;
            entity = michal.bind(zuuluu)(report, tangon, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'now';
        report['key'] = entity;
        entity = function() { // Original name: value
            michal = this;
            entity = michal.create;
            entity = entity.bind(michal)();
            michal = global;
            tangon = michal.Date;
            zuuluu = tangon.now;
            zuuluu = zuuluu.bind(tangon)();
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 6;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            oscard = tangon.PbLong;
            report = oscard.from;
            option = michal.Math;
            golfie = option.floor;
            michal = 1000;
            tangon = zuuluu / michal;
            tangon = golfie.bind(option)(tangon);
            report = report.bind(oscard)(tangon);
            tangon = report.toString;
            tangon = tangon.bind(report)();
            entity['seconds'] = tangon;
            zuuluu = zuuluu % michal;
            michal = 1000000;
            michal = zuuluu * michal;
            entity['nanos'] = michal;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golfie = 'toDate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            tangon = global;
            zuuluu = tangon.Date;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            michal = 6;
            report = report[michal];
            michal = undefined;
            michal = oscard.bind(michal)(report);
            oscard = michal.PbLong;
            report = oscard.from;
            michal = entity.seconds;
            report = report.bind(oscard)(michal);
            michal = report.toNumber;
            report = michal.bind(report)();
            michal = 1000;
            michal = michal * report;
            report = tangon.Math;
            tangon = report.ceil;
            oscard = entity.nanos;
            entity = 1000000;
            entity = oscard / entity;
            entity = tangon.bind(report)(entity);
            golfie = michal + entity;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            option = michal;
            entity = new option[zuuluu](golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'fromDate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = argFoo;
            michal = this;
            entity = michal.create;
            entity = entity.bind(michal)();
            michal = zuuluu.getTime;
            zuuluu = michal.bind(zuuluu)();
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 6;
            tangon = tangon[michal];
            michal = undefined;
            michal = report.bind(michal)(tangon);
            oscard = michal.PbLong;
            report = oscard.from;
            michal = global;
            option = michal.Math;
            golfie = option.floor;
            michal = 1000;
            tangon = zuuluu / michal;
            tangon = golfie.bind(option)(tangon);
            report = report.bind(oscard)(tangon);
            tangon = report.toString;
            tangon = tangon.bind(report)();
            entity['seconds'] = tangon;
            zuuluu = zuuluu % michal;
            michal = 1000000;
            michal = zuuluu * michal;
            entity['nanos'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'internalJsonWrite';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                tangon = _closure1_slot0;
                entity = _closure1_slot1;
                offset = 6;
                zuuluu = entity[offset];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                tangon = entity.PbLong;
                zuuluu = tangon.from;
                entity = michal.seconds;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = zuuluu.toNumber;
                zuuluu = entity.bind(zuuluu)();
                entity = 1000;
                tangon = entity * zuuluu;
                entity = global;
                oscard = entity.Date;
                report = oscard.parse;
                zuuluu = '0001-01-01T00:00:00Z';
                zuuluu = report.bind(oscard)(zuuluu);
                if(!(!(tangon < zuuluu))) { _fun00006_ip = 413; continue _fun00005 }
 102:
                oscard = entity.Date;
                report = oscard.parse;
                zuuluu = '9999-12-31T23:59:59Z';
                zuuluu = report.bind(oscard)(zuuluu);
                if(!(!(tangon > zuuluu))) { _fun00006_ip = 413; continue _fun00005 }
 132:
                zuuluu = michal.nanos;
                verify = 0;
                if(!(!(zuuluu < verify))) { _fun00006_ip = 379; continue _fun00005 }
 147:
                zuuluu = michal.nanos;
                zuuluu = zuuluu > verify;
                oscard = 'Z';
                report = oscard;
                if(!zuuluu) { _fun00006_ip = 321; continue _fun00005 }
 170:
                zuuluu = michal.nanos;
                michal = 1000000000;
                zuuluu = zuuluu + michal;
                michal = zuuluu.toString;
                golfie = michal.bind(zuuluu)();
                zuuluu = golfie.substring;
                michal = 1;
                option = zuuluu.bind(golfie)(michal);
                michal = option.substring;
                golfie = 3;
                zuuluu = michal.bind(option)(golfie);
                michal = '000000';
                if(!(michal !== zuuluu)) { _fun00006_ip = 294; continue _fun00005 }
 233:
                michal = option.substring;
                zuuluu = michal.bind(option)(offset);
                michal = '000';
                if(!(michal !== zuuluu)) { _fun00006_ip = 268; continue _fun00005 }
 254:
                michal = '.';
                michal = michal + option;
                michal = michal + oscard;
                _fun00006_ip = 292; continue _fun00005;
 268:
                zuuluu = option.substring;
                offset = zuuluu.bind(option)(verify, offset);
                zuuluu = '.';
                zuuluu = zuuluu + offset;
                michal = zuuluu + oscard;
 292:
                _fun00006_ip = 318; continue _fun00005;
 294:
                zuuluu = option.substring;
                golfie = zuuluu.bind(option)(verify, golfie);
                zuuluu = '.';
                zuuluu = zuuluu + golfie;
                michal = zuuluu + oscard;
 318:
                report = michal;
 321:
                michal = entity.Date;
                zuuluu = michal.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                foxtra = zuuluu;
                romeon = tangon;
                michal = new foxtra[michal](romeon, yankee);
                zuuluu = michal instanceof Object ? michal : zuuluu;
                michal = zuuluu.toISOString;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.replace;
                michal = '.000Z';
                michal = zuuluu.bind(tangon)(michal, report);
                return michal;
 379:
                tangon = entity.Error;
                michal = tangon.prototype;
                zuuluu = Object.create(michal, {constructor: {value: tangon}});
                romeon = 'Unable to encode invalid Timestamp to JSON. Nanos must not be negative.';
                foxtra = zuuluu;
                michal = new foxtra[tangon](romeon, yankee);
                michal = michal instanceof Object ? michal : zuuluu;
                throw michal;
 413:
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                romeon = 'Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.';
                foxtra = michal;
                entity = new foxtra[zuuluu](romeon, yankee);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'internalJsonRead';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                michal = argBaz;
                report = this;
                zuuluu = 'string';
                entity = typeof tangon;
                if(!(zuuluu === entity)) { _fun00008_ip = 549; continue _fun00007 }
 23:
                zuuluu = tangon.match;
                entity = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/;
                offset = zuuluu.bind(tangon)(entity);
                entity = global;
                if(offset) { _fun00008_ip = 87; continue _fun00007 }
 53:
                golfie = entity.Error;
                zuuluu = golfie.prototype;
                oscard = Object.create(zuuluu, {constructor: {value: golfie}});
                foxtra = 'Unable to parse Timestamp from JSON. Invalid format.';
                backup = oscard;
                zuuluu = new backup[golfie](foxtra, romeon);
                zuuluu = zuuluu instanceof Object ? zuuluu : oscard;
                throw zuuluu;
 87:
                option = entity.Date;
                golfie = option.parse;
                zuuluu = 1;
                zuuluu = offset[zuuluu];
                verify = '-';
                oscard = zuuluu + verify;
                zuuluu = 2;
                zuuluu = offset[zuuluu];
                zuuluu = oscard + zuuluu;
                oscard = 3;
                oscard = offset[oscard];
                zuuluu = zuuluu + verify;
                verify = zuuluu + oscard;
                zuuluu = 4;
                oscard = offset[zuuluu];
                zuuluu = 'T';
                zuuluu = verify + zuuluu;
                zuuluu = zuuluu + oscard;
                oscard = 5;
                oscard = offset[oscard];
                yankee = ':';
                zuuluu = zuuluu + yankee;
                zuuluu = zuuluu + oscard;
                oscard = 6;
                verify = offset[oscard];
                zuuluu = zuuluu + yankee;
                verify = zuuluu + verify;
                yankee = 8;
                romeon = offset[yankee];
                zuuluu = 'Z';
                if(!romeon) { _fun00008_ip = 211; continue _fun00007 }
 207:
                zuuluu = offset[yankee];
 211:
                zuuluu = verify + zuuluu;
                option = golfie.bind(option)(zuuluu);
                golfie = entity.Number;
                zuuluu = golfie.isNaN;
                zuuluu = zuuluu.bind(golfie)(option);
                if(zuuluu) { _fun00008_ip = 515; continue _fun00007 }
 243:
                verify = entity.Date;
                golfie = verify.parse;
                zuuluu = '0001-01-01T00:00:00Z';
                zuuluu = golfie.bind(verify)(zuuluu);
                if(!(!(option < zuuluu))) { _fun00008_ip = 476; continue _fun00007 }
 273:
                verify = entity.Date;
                golfie = verify.parse;
                zuuluu = '9999-12-31T23:59:59Z';
                zuuluu = golfie.bind(verify)(zuuluu);
                if(!(!(option > zuuluu))) { _fun00008_ip = 476; continue _fun00007 }
 303:
                if(michal) { _fun00008_ip = 315; continue _fun00007 }
 306:
                zuuluu = report.create;
                michal = zuuluu.bind(report)();
 315:
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                zuuluu = zuuluu[oscard];
                oscard = undefined;
                zuuluu = report.bind(oscard)(zuuluu);
                golfie = zuuluu.PbLong;
                report = golfie.from;
                zuuluu = 1000;
                zuuluu = option / zuuluu;
                report = report.bind(golfie)(zuuluu);
                zuuluu = report.toString;
                zuuluu = zuuluu.bind(report)();
                michal['seconds'] = zuuluu;
                zuuluu = 0;
                michal['nanos'] = zuuluu;
                zuuluu = 7;
                report = offset[zuuluu];
                if(!report) { _fun00008_ip = 474; continue _fun00007 }
 396:
                report = entity.parseInt;
                option = offset[zuuluu];
                golfie = '1';
                golfie = golfie + option;
                verify = '0';
                option = verify.repeat;
                zuuluu = offset[zuuluu];
                offset = zuuluu.length;
                zuuluu = 9;
                zuuluu = zuuluu - offset;
                zuuluu = option.bind(verify)(zuuluu);
                zuuluu = golfie + zuuluu;
                report = report.bind(oscard)(zuuluu);
                zuuluu = 1000000000;
                zuuluu = report - zuuluu;
                michal['nanos'] = zuuluu;
 474:
                return michal;
 476:
                michal = entity.globalThis;
                report = michal.Error;
                michal = report.prototype;
                zuuluu = Object.create(michal, {constructor: {value: report}});
                foxtra = 'Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.';
                backup = zuuluu;
                michal = new backup[report](foxtra, romeon);
                michal = michal instanceof Object ? michal : zuuluu;
                throw michal;
 515:
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                foxtra = 'Unable to parse Timestamp from JSON. Invalid value.';
                backup = michal;
                entity = new backup[zuuluu](foxtra, romeon);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
 549:
                entity = global;
                zuuluu = entity.Error;
                report = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                michal = report.bind(entity)(michal);
                entity = michal.typeofJsonValue;
                michal = entity.bind(michal)(tangon);
                entity = 'Unable to parse Timestamp from JSON ';
                tangon = entity + michal;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                entity = '.';
                foxtra = tangon + entity;
                backup = michal;
                entity = new backup[zuuluu](foxtra, romeon);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'create';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                tangon = this;
                entity = {'seconds': '0', 'nanos': 0};
                michal = global;
                michal = michal.globalThis;
                offset = michal.Object;
                verify = offset.defineProperty;
                option = _closure1_slot0;
                zuuluu = _closure1_slot1;
                golfie = 6;
                zuuluu = zuuluu[golfie];
                oscard = undefined;
                zuuluu = option.bind(oscard)(zuuluu);
                option = zuuluu.MESSAGE_TYPE;
                zuuluu = {};
                yankee = false;
                zuuluu['enumerable'] = yankee;
                zuuluu['value'] = tangon;
                zuuluu = verify.bind(offset)(entity, option, zuuluu);
                if(!(oscard !== report)) { _fun00010_ip = 122; continue _fun00009 }
 92:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                michal = michal[golfie];
                zuuluu = zuuluu.bind(oscard)(michal);
                michal = zuuluu.reflectionMergePartial;
                michal = michal.bind(zuuluu)(tangon, entity, report);
 122:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'internalBinaryRead';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                output = argFoo;
                sizing = argBaz;
                entity = argCor;
                kiloes = this;
                michal = null;
                if(!(michal == entity)) { _fun00012_ip = 27; continue _fun00011 }
 18:
                michal = kiloes.create;
                entity = michal.bind(kiloes)();
 27:
                zuuluu = output.pos;
                michal = argBar;
                backup = zuuluu + michal;
                michal = output.pos;
                michal = michal < backup;
                foxtra = undefined;
                yankee = 6;
                offset = true;
                verify = false;
                option = 'throw';
                golfie = 2;
                oscard = 1;
                report = 0;
                tangon = undefined;
                zuuluu = undefined;
                if(!michal) { _fun00012_ip = 384; continue _fun00011 }
 84:
                michal = output.tag;
                result = michal.bind(output)();
                michal = _closure1_slot2;
                michal = michal.bind(foxtra)(result, golfie);
                record = michal[report];
                config = michal[oscard];
                if(!(oscard !== record)) { _fun00012_ip = 334; continue _fun00011 }
 118:
                if(!(golfie !== record)) { _fun00012_ip = 310; continue _fun00011 }
 125:
                update = sizing.readUnknownField;
                if(!(option !== update)) { _fun00012_ip = 230; continue _fun00011 }
 135:
                michal = output.skip;
                michal = michal.bind(output)(config);
                echoed = update;
                result = michal;
                if(!(verify !== update)) { _fun00012_ip = 365; continue _fun00011 }
 159:
                ctrled = update;
                if(!(offset === update)) { _fun00012_ip = 195; continue _fun00011 }
 166:
                vacuum = _closure1_slot0;
                source = _closure1_slot1;
                source = source[yankee];
                source = vacuum.bind(foxtra)(source);
                source = source.UnknownFieldHandler;
                ctrled = source.onRead;
 195:
                sierra = kiloes.typeName;
                limora = undefined;
                status = entity;
                target = record;
                papara = config;
                cntext = michal;
                source = limora[ctrled](sierra, status, target, papara, cntext, record);
                echoed = update;
                result = michal;
                _fun00012_ip = 365; continue _fun00011;
 230:
                michal = global;
                update = michal.globalThis;
                source = update.Error;
                cntext = kiloes.typeName;
                michal = michal.HermesInternal;
                vacuum = michal.concat;
                limora = 'Unknown field ';
                status = ' (wire type ';
                papara = ') for ';
                sierra = record;
                target = config;
                sierra = limora[vacuum](sierra, status, target, papara, cntext, record);
                update = source.prototype;
                update = Object.create(update, {constructor: {value: source}});
                limora = update;
                michal = new limora[source](sierra, status);
                michal = michal instanceof Object ? michal : update;
                throw michal;
 310:
                michal = output.int32;
                michal = michal.bind(output)();
                entity['nanos'] = michal;
                echoed = tangon;
                result = zuuluu;
                _fun00012_ip = 365; continue _fun00011;
 334:
                michal = output.int64;
                update = michal.bind(output)();
                michal = update.toString;
                michal = michal.bind(update)();
                entity['seconds'] = michal;
                echoed = tangon;
                result = zuuluu;
 365:
                michal = output.pos;
                tangon = echoed;
                zuuluu = result;
                if(michal < backup) { _fun00012_ip = 84; continue _fun00011 }
 384:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'internalBinaryWrite';
        report['key'] = golfie;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                entity = argBar;
                zuuluu = report.seconds;
                michal = '0';
                if(!(michal !== zuuluu)) { _fun00014_ip = 90; continue _fun00013 }
 22:
                tangon = entity.tag;
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 6;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = oscard.bind(michal)(zuuluu);
                michal = michal.WireType;
                zuuluu = michal.Varint;
                michal = 1;
                tangon = tangon.bind(entity)(michal, zuuluu);
                zuuluu = tangon.int64;
                michal = report.seconds;
                michal = zuuluu.bind(tangon)(michal);
 90:
                zuuluu = report.nanos;
                michal = 0;
                if(!(michal !== zuuluu)) { _fun00014_ip = 170; continue _fun00013 }
 102:
                tangon = entity.tag;
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 6;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = oscard.bind(michal)(zuuluu);
                michal = michal.WireType;
                zuuluu = michal.Varint;
                michal = 2;
                tangon = tangon.bind(entity)(michal, zuuluu);
                zuuluu = tangon.int32;
                michal = report.nanos;
                michal = zuuluu.bind(tangon)(michal);
 170:
                michal = argBaz;
                tangon = michal.writeUnknownFields;
                michal = false;
                if(!(michal !== tangon)) { _fun00014_ip = 247; continue _fun00013 }
 185:
                michal = 1;
                if(!(michal == tangon)) { _fun00014_ip = 229; continue _fun00013 }
 192:
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 6;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = oscard.bind(michal)(zuuluu);
                michal = michal.UnknownFieldHandler;
                tangon = michal.onWrite;
 229:
                michal = this;
                zuuluu = michal.typeName;
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu, report, entity);
 247:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[7] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/protos/google/protobuf/timestamp.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['Timestamp'] = michal;
    return entity;
})();