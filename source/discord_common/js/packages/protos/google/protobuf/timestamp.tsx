// discord_common/js/packages/protos/google/protobuf/timestamp.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MessageType;
    mike = function(argFoo) {
        tango = function() { // Original name: Timestamp$Type
            report = this;
            mike = _closure1_slot3;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot8;
            oscar = new Array(2);
            entity = {'no': 1, 'name': 'seconds', 'kind': 'scalar', 'T': 3};
            oscar[0] = entity;
            entity = {'no': 2, 'name': 'nanos', 'kind': 'scalar', 'T': 5};
            oscar[1] = entity;
            entity = ['google.protobuf.Timestamp'];
            entity[1] = oscar;
            entity = mike.bind(zulu)(report, tango, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'now';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = this;
            entity = mike.create;
            entity = entity.bind(mike)();
            mike = global;
            tango = mike.Date;
            zulu = tango.now;
            zulu = zulu.bind(tango)();
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 6;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            oscar = tango.PbLong;
            report = oscar.from;
            options = mike.Math;
            golf = options.floor;
            mike = 1000;
            tango = zulu / mike;
            tango = golf.bind(options)(tango);
            report = report.bind(oscar)(tango);
            tango = report.toString;
            tango = tango.bind(report)();
            entity['seconds'] = tango;
            zulu = zulu % mike;
            mike = 1000000;
            mike = zulu * mike;
            entity['nanos'] = mike;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golf = 'toDate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            tango = global;
            zulu = tango.Date;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            mike = 6;
            report = report[mike];
            mike = undefined;
            mike = oscar.bind(mike)(report);
            oscar = mike.PbLong;
            report = oscar.from;
            mike = entity.seconds;
            report = report.bind(oscar)(mike);
            mike = report.toNumber;
            report = mike.bind(report)();
            mike = 1000;
            mike = mike * report;
            report = tango.Math;
            tango = report.ceil;
            oscar = entity.nanos;
            entity = 1000000;
            entity = oscar / entity;
            entity = tango.bind(report)(entity);
            golf = mike + entity;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            options = mike;
            entity = new options[zulu](golf, oscar);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'fromDate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = argFoo;
            mike = this;
            entity = mike.create;
            entity = entity.bind(mike)();
            mike = zulu.getTime;
            zulu = mike.bind(zulu)();
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 6;
            tango = tango[mike];
            mike = undefined;
            mike = report.bind(mike)(tango);
            oscar = mike.PbLong;
            report = oscar.from;
            mike = global;
            options = mike.Math;
            golf = options.floor;
            mike = 1000;
            tango = zulu / mike;
            tango = golf.bind(options)(tango);
            report = report.bind(oscar)(tango);
            tango = report.toString;
            tango = tango.bind(report)();
            entity['seconds'] = tango;
            zulu = zulu % mike;
            mike = 1000000;
            mike = zulu * mike;
            entity['nanos'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'internalJsonWrite';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = argFoo;
                tango = _closure1_slot0;
                entity = _closure1_slot1;
                offset = 6;
                zulu = entity[offset];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                tango = entity.PbLong;
                zulu = tango.from;
                entity = mike.seconds;
                zulu = zulu.bind(tango)(entity);
                entity = zulu.toNumber;
                zulu = entity.bind(zulu)();
                entity = 1000;
                tango = entity * zulu;
                entity = global;
                oscar = entity.Date;
                report = oscar.parse;
                zulu = '0001-01-01T00:00:00Z';
                zulu = report.bind(oscar)(zulu);
                if(!(!(tango < zulu))) { _fun00006_ip = 413; continue _fun00005 }
 102:
                oscar = entity.Date;
                report = oscar.parse;
                zulu = '9999-12-31T23:59:59Z';
                zulu = report.bind(oscar)(zulu);
                if(!(!(tango > zulu))) { _fun00006_ip = 413; continue _fun00005 }
 132:
                zulu = mike.nanos;
                verify = 0;
                if(!(!(zulu < verify))) { _fun00006_ip = 379; continue _fun00005 }
 147:
                zulu = mike.nanos;
                zulu = zulu > verify;
                oscar = 'Z';
                report = oscar;
                if(!zulu) { _fun00006_ip = 321; continue _fun00005 }
 170:
                zulu = mike.nanos;
                mike = 1000000000;
                zulu = zulu + mike;
                mike = zulu.toString;
                golf = mike.bind(zulu)();
                zulu = golf.substring;
                mike = 1;
                options = zulu.bind(golf)(mike);
                mike = options.substring;
                golf = 3;
                zulu = mike.bind(options)(golf);
                mike = '000000';
                if(!(mike !== zulu)) { _fun00006_ip = 294; continue _fun00005 }
 233:
                mike = options.substring;
                zulu = mike.bind(options)(offset);
                mike = '000';
                if(!(mike !== zulu)) { _fun00006_ip = 268; continue _fun00005 }
 254:
                mike = '.';
                mike = mike + options;
                mike = mike + oscar;
                _fun00006_ip = 292; continue _fun00005;
 268:
                zulu = options.substring;
                offset = zulu.bind(options)(verify, offset);
                zulu = '.';
                zulu = zulu + offset;
                mike = zulu + oscar;
 292:
                _fun00006_ip = 318; continue _fun00005;
 294:
                zulu = options.substring;
                golf = zulu.bind(options)(verify, golf);
                zulu = '.';
                zulu = zulu + golf;
                mike = zulu + oscar;
 318:
                report = mike;
 321:
                mike = entity.Date;
                zulu = mike.prototype;
                zulu = Object.create(zulu, {constructor: {value: mike}});
                foxtrot = zulu;
                romeo = tango;
                mike = new foxtrot[mike](romeo, yankee);
                zulu = mike instanceof Object ? mike : zulu;
                mike = zulu.toISOString;
                tango = mike.bind(zulu)();
                zulu = tango.replace;
                mike = '.000Z';
                mike = zulu.bind(tango)(mike, report);
                return mike;
 379:
                tango = entity.Error;
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                romeo = 'Unable to encode invalid Timestamp to JSON. Nanos must not be negative.';
                foxtrot = zulu;
                mike = new foxtrot[tango](romeo, yankee);
                mike = mike instanceof Object ? mike : zulu;
                throw mike;
 413:
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                romeo = 'Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.';
                foxtrot = mike;
                entity = new foxtrot[zulu](romeo, yankee);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'internalJsonRead';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = argFoo;
                mike = argBaz;
                report = this;
                zulu = 'string';
                entity = typeof tango;
                if(!(zulu === entity)) { _fun00008_ip = 549; continue _fun00007 }
 23:
                zulu = tango.match;
                entity = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/;
                offset = zulu.bind(tango)(entity);
                entity = global;
                if(offset) { _fun00008_ip = 87; continue _fun00007 }
 53:
                golf = entity.Error;
                zulu = golf.prototype;
                oscar = Object.create(zulu, {constructor: {value: golf}});
                foxtrot = 'Unable to parse Timestamp from JSON. Invalid format.';
                backup = oscar;
                zulu = new backup[golf](foxtrot, romeo);
                zulu = zulu instanceof Object ? zulu : oscar;
                throw zulu;
 87:
                options = entity.Date;
                golf = options.parse;
                zulu = 1;
                zulu = offset[zulu];
                verify = '-';
                oscar = zulu + verify;
                zulu = 2;
                zulu = offset[zulu];
                zulu = oscar + zulu;
                oscar = 3;
                oscar = offset[oscar];
                zulu = zulu + verify;
                verify = zulu + oscar;
                zulu = 4;
                oscar = offset[zulu];
                zulu = 'T';
                zulu = verify + zulu;
                zulu = zulu + oscar;
                oscar = 5;
                oscar = offset[oscar];
                yankee = ':';
                zulu = zulu + yankee;
                zulu = zulu + oscar;
                oscar = 6;
                verify = offset[oscar];
                zulu = zulu + yankee;
                verify = zulu + verify;
                yankee = 8;
                romeo = offset[yankee];
                zulu = 'Z';
                if(!romeo) { _fun00008_ip = 211; continue _fun00007 }
 207:
                zulu = offset[yankee];
 211:
                zulu = verify + zulu;
                options = golf.bind(options)(zulu);
                golf = entity.Number;
                zulu = golf.isNaN;
                zulu = zulu.bind(golf)(options);
                if(zulu) { _fun00008_ip = 515; continue _fun00007 }
 243:
                verify = entity.Date;
                golf = verify.parse;
                zulu = '0001-01-01T00:00:00Z';
                zulu = golf.bind(verify)(zulu);
                if(!(!(options < zulu))) { _fun00008_ip = 476; continue _fun00007 }
 273:
                verify = entity.Date;
                golf = verify.parse;
                zulu = '9999-12-31T23:59:59Z';
                zulu = golf.bind(verify)(zulu);
                if(!(!(options > zulu))) { _fun00008_ip = 476; continue _fun00007 }
 303:
                if(mike) { _fun00008_ip = 315; continue _fun00007 }
 306:
                zulu = report.create;
                mike = zulu.bind(report)();
 315:
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                zulu = zulu[oscar];
                oscar = undefined;
                zulu = report.bind(oscar)(zulu);
                golf = zulu.PbLong;
                report = golf.from;
                zulu = 1000;
                zulu = options / zulu;
                report = report.bind(golf)(zulu);
                zulu = report.toString;
                zulu = zulu.bind(report)();
                mike['seconds'] = zulu;
                zulu = 0;
                mike['nanos'] = zulu;
                zulu = 7;
                report = offset[zulu];
                if(!report) { _fun00008_ip = 474; continue _fun00007 }
 396:
                report = entity.parseInt;
                options = offset[zulu];
                golf = '1';
                golf = golf + options;
                verify = '0';
                options = verify.repeat;
                zulu = offset[zulu];
                offset = zulu.length;
                zulu = 9;
                zulu = zulu - offset;
                zulu = options.bind(verify)(zulu);
                zulu = golf + zulu;
                report = report.bind(oscar)(zulu);
                zulu = 1000000000;
                zulu = report - zulu;
                mike['nanos'] = zulu;
 474:
                return mike;
 476:
                mike = entity.globalThis;
                report = mike.Error;
                mike = report.prototype;
                zulu = Object.create(mike, {constructor: {value: report}});
                foxtrot = 'Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.';
                backup = zulu;
                mike = new backup[report](foxtrot, romeo);
                mike = mike instanceof Object ? mike : zulu;
                throw mike;
 515:
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                foxtrot = 'Unable to parse Timestamp from JSON. Invalid value.';
                backup = mike;
                entity = new backup[zulu](foxtrot, romeo);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
 549:
                entity = global;
                zulu = entity.Error;
                report = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                mike = report.bind(entity)(mike);
                entity = mike.typeofJsonValue;
                mike = entity.bind(mike)(tango);
                entity = 'Unable to parse Timestamp from JSON ';
                tango = entity + mike;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                entity = '.';
                foxtrot = tango + entity;
                backup = mike;
                entity = new backup[zulu](foxtrot, romeo);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'create';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                tango = this;
                entity = {'seconds': '0', 'nanos': 0};
                mike = global;
                mike = mike.globalThis;
                offset = mike.Object;
                verify = offset.defineProperty;
                options = _closure1_slot0;
                zulu = _closure1_slot1;
                golf = 6;
                zulu = zulu[golf];
                oscar = undefined;
                zulu = options.bind(oscar)(zulu);
                options = zulu.MESSAGE_TYPE;
                zulu = {};
                yankee = false;
                zulu['enumerable'] = yankee;
                zulu['value'] = tango;
                zulu = verify.bind(offset)(entity, options, zulu);
                if(!(oscar !== report)) { _fun00010_ip = 118; continue _fun00009 }
 88:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                mike = mike[golf];
                zulu = zulu.bind(oscar)(mike);
                mike = zulu.reflectionMergePartial;
                mike = mike.bind(zulu)(tango, entity, report);
 118:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'internalBinaryRead';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                output = argFoo;
                sizing = argBaz;
                entity = argCorge;
                kilo = this;
                mike = null;
                if(!(mike == entity)) { _fun00012_ip = 27; continue _fun00011 }
 18:
                mike = kilo.create;
                entity = mike.bind(kilo)();
 27:
                zulu = output.pos;
                mike = argBar;
                backup = zulu + mike;
                mike = output.pos;
                mike = mike < backup;
                foxtrot = undefined;
                yankee = 6;
                offset = true;
                verify = false;
                options = 'throw';
                golf = 2;
                oscar = 1;
                report = 0;
                tango = undefined;
                zulu = undefined;
                if(!mike) { _fun00012_ip = 384; continue _fun00011 }
 84:
                mike = output.tag;
                result = mike.bind(output)();
                mike = _closure1_slot2;
                mike = mike.bind(foxtrot)(result, golf);
                record = mike[report];
                config = mike[oscar];
                if(!(oscar !== record)) { _fun00012_ip = 334; continue _fun00011 }
 118:
                if(!(golf !== record)) { _fun00012_ip = 310; continue _fun00011 }
 125:
                update = sizing.readUnknownField;
                if(!(options !== update)) { _fun00012_ip = 230; continue _fun00011 }
 135:
                mike = output.skip;
                mike = mike.bind(output)(config);
                echo = update;
                result = mike;
                if(!(verify !== update)) { _fun00012_ip = 365; continue _fun00011 }
 159:
                control = update;
                if(!(offset === update)) { _fun00012_ip = 195; continue _fun00011 }
 166:
                vacuum = _closure1_slot0;
                source = _closure1_slot1;
                source = source[yankee];
                source = vacuum.bind(foxtrot)(source);
                source = source.UnknownFieldHandler;
                control = source.onRead;
 195:
                sierra = kilo.typeName;
                lima = undefined;
                status = entity;
                target = record;
                papa = config;
                context = mike;
                source = lima[control](sierra, status, target, papa, context, record);
                echo = update;
                result = mike;
                _fun00012_ip = 365; continue _fun00011;
 230:
                mike = global;
                update = mike.globalThis;
                source = update.Error;
                context = kilo.typeName;
                mike = mike.HermesInternal;
                vacuum = mike.concat;
                lima = 'Unknown field ';
                status = ' (wire type ';
                papa = ') for ';
                sierra = record;
                target = config;
                sierra = lima[vacuum](sierra, status, target, papa, context, record);
                update = source.prototype;
                update = Object.create(update, {constructor: {value: source}});
                lima = update;
                mike = new lima[source](sierra, status);
                mike = mike instanceof Object ? mike : update;
                throw mike;
 310:
                mike = output.int32;
                mike = mike.bind(output)();
                entity['nanos'] = mike;
                echo = tango;
                result = zulu;
                _fun00012_ip = 365; continue _fun00011;
 334:
                mike = output.int64;
                update = mike.bind(output)();
                mike = update.toString;
                mike = mike.bind(update)();
                entity['seconds'] = mike;
                echo = tango;
                result = zulu;
 365:
                mike = output.pos;
                tango = echo;
                zulu = result;
                if(mike < backup) { _fun00012_ip = 84; continue _fun00011 }
 384:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'internalBinaryWrite';
        report['key'] = golf;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                entity = argBar;
                zulu = report.seconds;
                mike = '0';
                if(!(mike !== zulu)) { _fun00014_ip = 90; continue _fun00013 }
 22:
                tango = entity.tag;
                oscar = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 6;
                zulu = zulu[mike];
                mike = undefined;
                mike = oscar.bind(mike)(zulu);
                mike = mike.WireType;
                zulu = mike.Varint;
                mike = 1;
                tango = tango.bind(entity)(mike, zulu);
                zulu = tango.int64;
                mike = report.seconds;
                mike = zulu.bind(tango)(mike);
 90:
                zulu = report.nanos;
                mike = 0;
                if(!(mike !== zulu)) { _fun00014_ip = 170; continue _fun00013 }
 102:
                tango = entity.tag;
                oscar = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 6;
                zulu = zulu[mike];
                mike = undefined;
                mike = oscar.bind(mike)(zulu);
                mike = mike.WireType;
                zulu = mike.Varint;
                mike = 2;
                tango = tango.bind(entity)(mike, zulu);
                zulu = tango.int32;
                mike = report.nanos;
                mike = zulu.bind(tango)(mike);
 170:
                mike = argBaz;
                tango = mike.writeUnknownFields;
                mike = false;
                if(!(mike !== tango)) { _fun00014_ip = 247; continue _fun00013 }
 185:
                mike = 1;
                if(!(mike == tango)) { _fun00014_ip = 229; continue _fun00013 }
 192:
                oscar = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 6;
                zulu = zulu[mike];
                mike = undefined;
                mike = oscar.bind(mike)(zulu);
                mike = mike.UnknownFieldHandler;
                tango = mike.onWrite;
 229:
                mike = this;
                zulu = mike.typeName;
                mike = undefined;
                mike = tango.bind(mike)(zulu, report, entity);
 247:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[7] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/protos/google/protobuf/timestamp.tsx';
    tango = report.bind(oscar)(tango);
    zulu['Timestamp'] = mike;
    return entity;
})();