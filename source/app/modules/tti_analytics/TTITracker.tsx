// app/modules/tti_analytics/TTITracker.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        tango = argFoo;
        report = argBar;
        options = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = tango;
        var _closure1_slot1 = report;
        var _closure1_slot2 = options;
        entity = argCorge;
        var _closure1_slot3 = entity;
        var _closure1_slot4 = oscar;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = argFoo;
                var _closure2_slot0 = zulu;
                report = global;
                mike = report.Symbol;
                tango = 'undefined';
                mike = typeof mike;
                mike = tango !== mike;
                if(!mike) { _fun00004_ip = 46; continue _fun00003 }
 30:
                tango = report.Symbol;
                tango = tango.iterator;
                mike = zulu[tango];
 46:
                if(mike) { _fun00004_ip = 55; continue _fun00003 }
 49:
                mike = zulu.@@iterator;
 55:
                if(mike) { _fun00004_ip = 343; continue _fun00003 }
 61:
                oscar = report.Array;
                tango = oscar.isArray;
                oscar = tango.bind(oscar)(zulu);
                tango = mike;
                if(oscar) { _fun00004_ip = 323; continue _fun00003 }
 86:
                options = undefined;
                oscar = undefined;
                if(!zulu) { _fun00004_ip = 283; continue _fun00003 }
 96:
                verify = 'string';
                golf = typeof zulu;
                if(!(verify !== golf)) { _fun00004_ip = 270; continue _fun00003 }
 110:
                golf = {};
                verify = golf.toString;
                golf = verify.call;
                yankee = golf.bind(verify)(zulu);
                offset = yankee.slice;
                verify = 8;
                golf = -1;
                verify = offset.bind(yankee)(verify, golf);
                golf = 'Object';
                golf = golf === verify;
                if(!golf) { _fun00004_ip = 163; continue _fun00003 }
 158:
                golf = zulu.constructor;
 163:
                offset = verify;
                if(!golf) { _fun00004_ip = 179; continue _fun00003 }
 169:
                golf = zulu.constructor;
                offset = golf.name;
 179:
                golf = 'Map';
                if(!(golf !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 187:
                golf = 'Set';
                if(!(golf !== offset)) { _fun00004_ip = 249; continue _fun00003 }
 195:
                golf = 'Arguments';
                if(!(golf !== offset)) { _fun00004_ip = 234; continue _fun00003 }
 205:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golf = verify.test;
                verify = golf.bind(verify)(offset);
                golf = undefined;
                if(!verify) { _fun00004_ip = 247; continue _fun00003 }
 234:
                verify = _closure1_slot17;
                golf = verify.bind(options)(zulu, options);
 247:
                _fun00004_ip = 265; continue _fun00003;
 249:
                offset = report.Array;
                verify = offset.from;
                golf = verify.bind(offset)(zulu);
 265:
                oscar = golf;
                _fun00004_ip = 283; continue _fun00003;
 270:
                golf = _closure1_slot17;
                oscar = golf.bind(options)(zulu, options);
 283:
                tango = oscar;
                if(tango) { _fun00004_ip = 323; continue _fun00003 }
 289:
                golf = report.TypeError;
                report = golf.prototype;
                oscar = Object.create(report, {constructor: {value: golf}});
                foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                backup = oscar;
                report = new backup[golf](foxtrot, romeo);
                report = report instanceof Object ? report : oscar;
                throw report;
 323:
                if(!tango) { _fun00004_ip = 330; continue _fun00003 }
 326:
                _closure2_slot0 = tango;
 330:
                tango = 0;
                var _closure2_slot1 = tango;
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        mike = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(mike >= entity))) { _fun00006_ip = 56; continue _fun00005 }
 20:
                        entity = {};
                        mike = false;
                        entity['done'] = mike;
                        zulu = _closure2_slot0;
                        mike = _closure2_slot1;
                        mike = parseFloat(mike);
                        tango = mike + 1;
                        _closure2_slot1 = tango;
                        mike = zulu[mike];
                        entity['value'] = mike;
                        _fun00006_ip = 67; continue _fun00005;
 56:
                        mike = {};
                        zulu = true;
                        mike['done'] = zulu;
                        entity = mike;
 67:
                        return entity;
                    }
                };
                return entity;
 343:
                entity = mike.call;
                zulu = entity.bind(mike)(zulu);
                mike = zulu.next;
                entity = mike.bind;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        var _closure1_slot16 = entity;
        entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = argFoo;
                entity = null;
                zulu = undefined;
                entity = entity == zulu;
                if(entity) { _fun00008_ip = 23; continue _fun00007 }
 14:
                mike = tango.length;
                entity = zulu > mike;
 23:
                mike = undefined;
                if(!entity) { _fun00008_ip = 33; continue _fun00007 }
 28:
                mike = tango.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zulu)(mike);
                zulu = 0;
                report = zulu < mike;
                if(!report) { _fun00008_ip = 70; continue _fun00007 }
 55:
                report = tango[zulu];
                entity[zulu] = report;
                zulu = zulu + 1;
                if(zulu < mike) { _fun00008_ip = 55; continue _fun00007 }
 70:
                return entity;
            }
        };
        var _closure1_slot17 = entity;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argFoo;
                oscar = argBaz;
                mike = _closure1_slot6;
                zulu = undefined;
                entity = argBar;
                verify = mike.bind(zulu)(entity);
                mike = _closure1_slot5;
                entity = _closure1_slot19;
                entity = entity.bind(zulu)();
                if(entity) { _fun00010_ip = 51; continue _fun00009 }
 38:
                entity = verify.apply;
                entity = entity.bind(verify)(tango, oscar);
                _fun00010_ip = 92; continue _fun00009;
 51:
                golf = global;
                options = golf.Reflect;
                golf = options.construct;
                if(oscar) { _fun00010_ip = 71; continue _fun00009 }
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
        var _closure1_slot18 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
                _fun00012_ip = 74; continue _fun00011;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                mike = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot19 = mike;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot19 = entity;
        entity = function(argFoo, argBar) { // Original name: _serialize
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = argBar;
                zulu = 0;
                if(!(zulu !== mike)) { _fun00014_ip = 45; continue _fun00013 }
 9:
                tango = null;
                if(!(tango != mike)) { _fun00014_ip = 45; continue _fun00013 }
 15:
                entity = argFoo;
                mike = mike - entity;
                entity = null;
                if(!(!(mike < zulu))) { _fun00014_ip = 43; continue _fun00013 }
 28:
                zulu = 1000000;
                entity = null;
                if(!(!(mike > zulu))) { _fun00014_ip = 43; continue _fun00013 }
 40:
                entity = mike;
 43:
                return entity;
 45:
                entity = null;
                return entity;
            }
        };
        var _closure1_slot20 = entity;
        entity = global;
        offset = entity.Object;
        verify = offset.defineProperty;
        golf = {};
        entity = true;
        golf['value'] = entity;
        entity = '__esModule';
        entity = verify.bind(offset)(zulu, entity, golf);
        entity = 0;
        golf = oscar[entity];
        entity = undefined;
        golf = options.bind(entity)(golf);
        var _closure1_slot5 = golf;
        golf = 1;
        golf = oscar[golf];
        golf = options.bind(entity)(golf);
        var _closure1_slot6 = golf;
        golf = 2;
        golf = oscar[golf];
        golf = options.bind(entity)(golf);
        var _closure1_slot7 = golf;
        golf = 3;
        golf = oscar[golf];
        golf = options.bind(entity)(golf);
        var _closure1_slot8 = golf;
        golf = 4;
        golf = oscar[golf];
        golf = options.bind(entity)(golf);
        var _closure1_slot9 = golf;
        golf = 5;
        golf = oscar[golf];
        golf = options.bind(entity)(golf);
        var _closure1_slot10 = golf;
        options = function() { // Original name: loggerCallback
            entity = undefined;
            return entity;
        };
        var _closure1_slot11 = options;
        options = function() {
            entity = global;
            mike = entity.performance;
            entity = mike.now;
            entity = entity.bind(mike)();
            return entity;
        };
        tango['__timingFunction'] = options;
        options = tango.__getTotalRequireTime;
        tango = null;
        if(!(tango != options)) { _fun00002_ip = 253; continue _fun00001 }
 246:
        tango = function() {
            mike = _closure1_slot0;
            entity = mike.__getTotalRequireTime;
            entity = entity.bind(mike)();
            return entity;
        };
        _fun00002_ip = 258; continue _fun00001;
 253:
        tango = function() {
            entity = 0;
            return entity;
        };
 258:
        var _closure1_slot12 = tango;
        tango = function() {
            tango = _closure1_slot10;
            zulu = function(argFoo, argBar) { // Original name: TTITimer
                zulu = this;
                tango = _closure1_slot9;
                mike = _closure2_slot2;
                entity = undefined;
                mike = tango.bind(entity)(zulu, mike);
                mike = argFoo;
                zulu['emoji'] = mike;
                mike = argBar;
                zulu['name'] = mike;
                mike = 0;
                zulu['start_'] = mike;
                zulu['startNumImports'] = mike;
                zulu['startImportTime'] = mike;
                zulu['end_'] = mike;
                zulu['endNumImports'] = mike;
                zulu['endImportTime'] = mike;
                return entity;
            };
            var _closure2_slot2 = zulu;
            report = {};
            mike = 'start';
            report['key'] = mike;
            mike = function() { // Original name: get
                entity = this;
                entity = entity.start_;
                return entity;
            };
            report['get'] = mike;
            mike = new Array(14);
            mike[0] = report;
            report = {};
            golf = 'end';
            report['key'] = golf;
            golf = function() { // Original name: get
                entity = this;
                entity = entity.end_;
                return entity;
            };
            report['get'] = golf;
            mike[1] = report;
            report = {};
            golf = 'hasStart';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                mike = entity.start_;
                entity = 0;
                entity = mike > entity;
                return entity;
            };
            report['value'] = golf;
            mike[2] = report;
            report = {};
            golf = 'hasData';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = this;
                mike = entity.end_;
                entity = 0;
                entity = mike > entity;
                return entity;
            };
            report['value'] = golf;
            mike[3] = report;
            report = {};
            golf = 'recordStart';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = this;
                    mike = zulu.start_;
                    entity = 0;
                    if(!(entity === mike)) { _fun00016_ip = 25; continue _fun00015 }
 15:
                    entity = zulu.recordStart_;
                    entity = entity.bind(zulu)();
 25:
                    report = _closure1_slot2;
                    tango = _closure1_slot4;
                    entity = 6;
                    tango = tango[entity];
                    entity = undefined;
                    oscar = report.bind(entity)(tango);
                    report = oscar.mark;
                    tango = zulu.emoji;
                    options = zulu.name;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    golf = zulu.concat;
                    zulu = 'Start ';
                    zulu = golf.bind(zulu)(options);
                    zulu = report.bind(oscar)(tango, zulu);
                    mike = _closure1_slot11;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            report['value'] = golf;
            mike[4] = report;
            report = {};
            golf = 'recordStart_';
            report['key'] = golf;
            golf = function() { // Original name: value
                zulu = this;
                entity = global;
                mike = entity.Date;
                entity = mike.now;
                entity = entity.bind(mike)();
                zulu['start_'] = entity;
                report = _closure1_slot3;
                tango = _closure1_slot4;
                entity = 7;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.size;
                tango = tango.bind(report)();
                zulu['startNumImports'] = tango;
                mike = _closure1_slot12;
                mike = mike.bind(entity)();
                zulu['startImportTime'] = mike;
                return entity;
            };
            report['value'] = golf;
            mike[5] = report;
            report = {};
            golf = 'recordEnd';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = this;
                    mike = entity.end_;
                    zulu = 0;
                    if(!(zulu === mike)) { _fun00018_ip = 25; continue _fun00017 }
 15:
                    mike = entity.start_;
                    if(!(zulu === mike)) { _fun00018_ip = 99; continue _fun00017 }
 25:
                    tango = _closure1_slot2;
                    zulu = _closure1_slot4;
                    mike = 6;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.mark;
                    zulu = entity.emoji;
                    golf = entity.name;
                    mike = global;
                    mike = mike.HermesInternal;
                    oscar = mike.concat;
                    mike = 'Finish ';
                    mike = oscar.bind(mike)(golf);
                    mike = tango.bind(report)(zulu, mike);
                    _fun00018_ip = 198; continue _fun00017;
 99:
                    mike = entity.recordEnd_;
                    mike = mike.bind(entity)();
                    tango = _closure1_slot2;
                    zulu = _closure1_slot4;
                    mike = 6;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.mark;
                    zulu = entity.emoji;
                    golf = entity.name;
                    mike = global;
                    mike = mike.HermesInternal;
                    oscar = mike.concat;
                    mike = 'Finish ';
                    mike = oscar.bind(mike)(golf);
                    oscar = entity.end_;
                    entity = entity.start_;
                    entity = oscar - entity;
                    entity = tango.bind(report)(zulu, mike, entity);
 198:
                    mike = _closure1_slot11;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            report['value'] = golf;
            mike[6] = report;
            report = {};
            golf = 'recordEnd_';
            report['key'] = golf;
            golf = function() { // Original name: value
                zulu = this;
                entity = global;
                mike = entity.Date;
                entity = mike.now;
                entity = entity.bind(mike)();
                zulu['end_'] = entity;
                report = _closure1_slot3;
                tango = _closure1_slot4;
                entity = 7;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.size;
                tango = tango.bind(report)();
                zulu['endNumImports'] = tango;
                mike = _closure1_slot12;
                mike = mike.bind(entity)();
                zulu['endImportTime'] = mike;
                return entity;
            };
            report['value'] = golf;
            mike[7] = report;
            report = {};
            golf = 'set';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    golf = argBar;
                    zulu = this;
                    tango = zulu.start_;
                    mike = 0;
                    if(!(mike === tango)) { _fun00020_ip = 91; continue _fun00019 }
 21:
                    zulu['start_'] = entity;
                    entity = entity + golf;
                    zulu['end_'] = entity;
                    report = _closure1_slot3;
                    tango = _closure1_slot4;
                    mike = 7;
                    tango = tango[mike];
                    mike = undefined;
                    report = report.bind(mike)(tango);
                    tango = report.size;
                    tango = tango.bind(report)();
                    zulu['endNumImports'] = tango;
                    entity = _closure1_slot12;
                    entity = entity.bind(mike)();
                    zulu['endImportTime'] = entity;
 91:
                    report = _closure1_slot2;
                    tango = _closure1_slot4;
                    entity = 6;
                    tango = tango[entity];
                    entity = undefined;
                    oscar = report.bind(entity)(tango);
                    report = oscar.mark;
                    tango = zulu.emoji;
                    zulu = zulu.name;
                    zulu = report.bind(oscar)(tango, zulu, golf);
                    mike = _closure1_slot11;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            report['value'] = golf;
            mike[8] = report;
            report = {};
            golf = 'serializeStart';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                tango = _closure1_slot20;
                entity = this;
                zulu = entity.start_;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            report['value'] = golf;
            mike[9] = report;
            report = {};
            golf = 'serializeEnd';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                tango = _closure1_slot20;
                entity = this;
                zulu = entity.end_;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            report['value'] = golf;
            mike[10] = report;
            report = {};
            golf = 'measure';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    report = argFoo;
                    entity = this;
                    zulu = entity.start_;
                    mike = 0;
                    if(!(!(zulu > mike))) { _fun00022_ip = 97; continue _fun00021 }
 18:
                    mike = entity.recordStart_;
                    mike = mike.bind(entity)();
                    oscar = _closure1_slot2;
                    tango = _closure1_slot4;
                    mike = 6;
                    mike = tango[mike];
                    tango = undefined;
                    options = oscar.bind(tango)(mike);
                    golf = options.time;
                    oscar = entity.emoji;
                    mike = entity.name;
                    mike = golf.bind(options)(oscar, mike, report);
                    oscar = entity.recordEnd_;
                    oscar = oscar.bind(entity)();
                    zulu = _closure1_slot11;
                    zulu = zulu.bind(tango)();
                    return mike;
 97:
                    tango = _closure1_slot2;
                    zulu = _closure1_slot4;
                    mike = 6;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.time;
                    mike = entity.emoji;
                    entity = entity.name;
                    entity = zulu.bind(tango)(mike, entity, report);
                    return entity;
                }
            };
            report['value'] = golf;
            mike[11] = report;
            report = {};
            golf = 'measureAsync';
            report['key'] = golf;
            options = _closure1_slot8;
            entity = undefined;
            golf = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        StartGenerator();
                        oscar = argFoo;
                        mike = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun00024_ip = 173; continue _fun00023 }
 16:
                        tango = mike.start_;
                        zulu = 0;
                        if(!(!(tango > zulu))) { _fun00024_ip = 121; continue _fun00023 }
 28:
                        zulu = mike.recordStart_;
                        zulu = zulu.bind(mike)();
                        golf = _closure1_slot2;
                        report = _closure1_slot4;
                        zulu = 6;
                        zulu = report[zulu];
                        report = undefined;
                        verify = golf.bind(report)(zulu);
                        options = verify.timeAsync;
                        golf = mike.emoji;
                        zulu = mike.name;
                        zulu = options.bind(verify)(golf, zulu, oscar);
                        SaveGenerator(address=91);
 89:
                        return zulu;
 91:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(golf) { _fun00024_ip = 118; continue _fun00023 }
 97:
                        golf = mike.recordEnd_;
                        golf = golf.bind(mike)();
                        tango = _closure1_slot11;
                        tango = tango.bind(report)();
                        return zulu;
 118:
                        return zulu;
 121:
                        report = _closure1_slot2;
                        tango = _closure1_slot4;
                        zulu = 6;
                        tango = tango[zulu];
                        zulu = undefined;
                        report = report.bind(zulu)(tango);
                        tango = report.timeAsync;
                        zulu = mike.emoji;
                        mike = mike.name;
                        mike = tango.bind(report)(zulu, mike, oscar);
                        return mike;
 173:
                        return entity;
                    }
                };
                return entity;
            };
            golf = options.bind(entity)(golf);
            var _closure2_slot1 = golf;
            golf = function() { // Original name: measureAsync
                entity = undefined;
                tango = _closure2_slot1;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            report['value'] = golf;
            mike[12] = report;
            report = {};
            golf = 'measureAsyncWithoutNesting';
            report['key'] = golf;
            golf = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        StartGenerator();
                        oscar = argFoo;
                        mike = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun00026_ip = 300; continue _fun00025 }
 16:
                        tango = mike.start_;
                        zulu = 0;
                        if(!(!(tango > zulu))) { _fun00026_ip = 248; continue _fun00025 }
 31:
                        zulu = mike.recordStart_;
                        zulu = zulu.bind(mike)();
                        golf = global;
                        tango = golf.Date;
                        zulu = tango.now;
                        romeo = zulu.bind(tango)();
                        options = _closure1_slot2;
                        zulu = _closure1_slot4;
                        offset = 6;
                        zulu = zulu[offset];
                        report = undefined;
                        yankee = options.bind(report)(zulu);
                        verify = yankee.mark;
                        options = mike.emoji;
                        backup = mike.name;
                        zulu = golf.HermesInternal;
                        foxtrot = zulu.concat;
                        zulu = 'Start ';
                        zulu = foxtrot.bind(zulu)(backup);
                        zulu = verify.bind(yankee)(options, zulu);
                        zulu = oscar.bind(report)();
                        SaveGenerator(address=136);
 134:
                        return zulu;
 136:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                        if(options) { _fun00026_ip = 245; continue _fun00025 }
 142:
                        verify = _closure1_slot2;
                        options = _closure1_slot4;
                        options = options[offset];
                        yankee = verify.bind(report)(options);
                        offset = yankee.mark;
                        verify = mike.emoji;
                        backup = mike.name;
                        options = golf.HermesInternal;
                        foxtrot = options.concat;
                        options = 'Finish ';
                        options = foxtrot.bind(options)(backup);
                        foxtrot = golf.Date;
                        golf = foxtrot.now;
                        golf = golf.bind(foxtrot)();
                        golf = golf - romeo;
                        golf = offset.bind(yankee)(verify, options, golf);
                        golf = mike.recordEnd_;
                        golf = golf.bind(mike)();
                        tango = _closure1_slot11;
                        tango = tango.bind(report)();
                        return zulu;
 245:
                        return zulu;
 248:
                        report = _closure1_slot2;
                        tango = _closure1_slot4;
                        zulu = 6;
                        tango = tango[zulu];
                        zulu = undefined;
                        report = report.bind(zulu)(tango);
                        tango = report.timeAsync;
                        zulu = mike.emoji;
                        mike = mike.name;
                        mike = tango.bind(report)(zulu, mike, oscar);
                        return mike;
 300:
                        return entity;
                    }
                };
                return entity;
            };
            golf = options.bind(entity)(golf);
            var _closure2_slot0 = golf;
            oscar = function() { // Original name: measureAsyncWithoutNesting
                entity = undefined;
                tango = _closure2_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            report['value'] = oscar;
            mike[13] = report;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        tango = tango.bind(entity)();
        var _closure1_slot13 = tango;
        tango = function() {
            tango = _closure1_slot10;
            zulu = function(argFoo, argBar) { // Original name: TTIEvent
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    mike = arguments[2];
                    zulu = this;
                    entity = undefined;
                    if(!(mike === entity)) { _fun00028_ip = 14; continue _fun00027 }
 12:
                    mike = false;
 14:
                    report = _closure1_slot9;
                    tango = _closure2_slot0;
                    tango = report.bind(entity)(zulu, tango);
                    tango = argFoo;
                    zulu['emoji'] = tango;
                    tango = argBar;
                    zulu['name'] = tango;
                    zulu['onlyOnce'] = mike;
                    mike = 0;
                    zulu['time_'] = mike;
                    tango = null;
                    zulu['numImports'] = tango;
                    zulu['importTime'] = mike;
                    return entity;
                }
            };
            var _closure2_slot0 = zulu;
            entity = {};
            mike = 'time';
            entity['key'] = mike;
            mike = function() { // Original name: get
                entity = this;
                entity = entity.time_;
                return entity;
            };
            entity['get'] = mike;
            mike = new Array(4);
            mike[0] = entity;
            entity = {};
            oscar = 'record';
            entity['key'] = oscar;
            oscar = function() { // Original name: value
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = this;
                    zulu = entity.time_;
                    mike = 0;
                    if(!(mike !== zulu)) { _fun00030_ip = 77; continue _fun00029 }
 15:
                    mike = entity.onlyOnce;
                    if(mike) { _fun00030_ip = 193; continue _fun00029 }
 27:
                    tango = _closure1_slot2;
                    zulu = _closure1_slot4;
                    mike = 6;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.mark;
                    zulu = entity.emoji;
                    mike = entity.name;
                    mike = tango.bind(report)(zulu, mike);
                    _fun00030_ip = 193; continue _fun00029;
 77:
                    mike = global;
                    zulu = mike.Date;
                    mike = zulu.now;
                    mike = mike.bind(zulu)();
                    entity['time_'] = mike;
                    oscar = _closure1_slot3;
                    report = _closure1_slot4;
                    zulu = 7;
                    zulu = report[zulu];
                    tango = undefined;
                    oscar = oscar.bind(tango)(zulu);
                    zulu = oscar.size;
                    zulu = zulu.bind(oscar)();
                    entity['numImports'] = zulu;
                    zulu = _closure1_slot12;
                    zulu = zulu.bind(tango)();
                    entity['importTime'] = zulu;
                    zulu = _closure1_slot2;
                    mike = 6;
                    mike = report[mike];
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.mark;
                    mike = entity.emoji;
                    entity = entity.name;
                    entity = zulu.bind(tango)(mike, entity);
 193:
                    mike = _closure1_slot11;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            entity['value'] = oscar;
            mike[1] = entity;
            entity = {};
            oscar = 'hasData';
            entity['key'] = oscar;
            oscar = function() { // Original name: value
                entity = this;
                mike = entity.time_;
                entity = 0;
                entity = mike > entity;
                return entity;
            };
            entity['value'] = oscar;
            mike[2] = entity;
            entity = {};
            oscar = 'serialize';
            entity['key'] = oscar;
            report = function(argFoo) { // Original name: value
                tango = _closure1_slot20;
                entity = this;
                zulu = entity.time_;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            entity['value'] = report;
            mike[3] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        tango = tango.bind(entity)();
        var _closure1_slot14 = tango;
        tango = function() {
            tango = _closure1_slot10;
            zulu = function() { // Original name: TTIImportEvent
                zulu = this;
                tango = _closure1_slot9;
                mike = _closure2_slot0;
                entity = undefined;
                mike = tango.bind(entity)(zulu, mike);
                mike = 0;
                zulu['time_'] = mike;
                return entity;
            };
            var _closure2_slot0 = zulu;
            entity = {};
            mike = 'time';
            entity['key'] = mike;
            mike = function() { // Original name: get
                entity = this;
                entity = entity.time_;
                return entity;
            };
            entity['get'] = mike;
            mike = new Array(2);
            mike[0] = entity;
            entity = {};
            oscar = 'record';
            entity['key'] = oscar;
            report = function() { // Original name: value
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    mike = this;
                    zulu = mike.time_;
                    entity = 0;
                    if(!(entity === zulu)) { _fun00032_ip = 34; continue _fun00031 }
 15:
                    zulu = _closure1_slot12;
                    entity = undefined;
                    entity = zulu.bind(entity)();
                    mike['time_'] = entity;
 34:
                    entity = undefined;
                    return entity;
                }
            };
            entity['value'] = report;
            mike[1] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        tango = tango.bind(entity)();
        var _closure1_slot15 = tango;
        tango = function() { // Original name: TTITrackers
            zulu = this;
            report = _closure1_slot9;
            mike = _closure1_slot21;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            golf = _closure1_slot13;
            mike = golf.prototype;
            report = Object.create(mike, {constructor: {value: golf}});
            foxtrot = '❗';
            romeo = 'Load index.tsx';
            backup = report;
            mike = new backup[golf](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['loadIndex'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            options = '💾';
            romeo = 'Load fast_connect native module';
            backup = report;
            foxtrot = options;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['loadFastConnectNativeModule'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            golf = '🌐';
            romeo = 'Fast Connect IDENTIFY';
            backup = report;
            foxtrot = golf;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['beginFastConnect'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            verify = '🏃';
            romeo = 'Load Imports';
            backup = report;
            foxtrot = verify;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['loadImports'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Initial Initialization';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['init'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Load Storage';
            backup = report;
            foxtrot = options;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['loadStorage'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Parse Storage';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['parseStorage'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Load Mini Cache';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['loadMiniCache'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Fetch Guild Cache';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['fetchGuildCache'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Fetch Initial Guild Channels Cache';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['fetchGuildChannelsCache'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Load Cached Messages';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['loadCachedMessages'] = mike;
            oscar = _closure1_slot14;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            verify = '🎨';
            romeo = 'First React Render';
            backup = report;
            foxtrot = verify;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['renderApp'] = mike;
            oscar = _closure1_slot14;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'First React Render useEffect';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['renderAppEffect'] = mike;
            oscar = _closure1_slot14;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'React Render Messages';
            backup = report;
            yankee = true;
            mike = new backup[oscar](foxtrot, romeo, yankee, offset);
            mike = mike instanceof Object ? mike : report;
            zulu['renderMessages'] = mike;
            oscar = _closure1_slot14;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'React Render Cached Messages';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee, offset);
            mike = mike instanceof Object ? mike : report;
            zulu['renderMessagesWithCache'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'RowGenerator.generate()';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['firstRowGenerator'] = mike;
            oscar = _closure1_slot14;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'React Render Latest Messages';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['renderLatestMessages'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Initial Guild';
            backup = report;
            foxtrot = golf;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['initialGuild'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Load Lazy Cache';
            backup = report;
            foxtrot = options;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['loadLazyCache'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Fetch Lazy Cache';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['fetchLazyCache'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Parse Lazy Cache';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['parseLazyCache'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Fetch Stale Channels';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['fetchStaleChannels'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Deserialize Cache';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['deserializeCache'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Dispatch Lazy Cache';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['dispatchLazyCache'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Parse READY';
            backup = report;
            foxtrot = golf;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['parseReady'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'READY';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['ready'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Hydrate READY';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['hydrateReady'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Dispatch READY';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['dispatchReady'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Parse READY Supplemental';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['parseReadySupplemental'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'READY Supplemental';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['readySupplemental'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Hydrate READY Supplemental';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['hydrateReadySupplemental'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Dispatch READY Supplemental';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['dispatchReadySupplemental'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Fetch messages';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['fetchMessages'] = mike;
            oscar = _closure1_slot13;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            romeo = 'Dispatch messages';
            backup = report;
            mike = new backup[oscar](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : report;
            zulu['dispatchMessages'] = mike;
            mike = {};
            report = _closure1_slot15;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            backup = oscar;
            report = new backup[report](foxtrot);
            report = report instanceof Object ? report : oscar;
            mike['polyfillsEnd'] = report;
            report = _closure1_slot15;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            backup = oscar;
            report = new backup[report](foxtrot);
            report = report instanceof Object ? report : oscar;
            mike['sentryEnd'] = report;
            report = _closure1_slot15;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            backup = oscar;
            report = new backup[report](foxtrot);
            report = report instanceof Object ? report : oscar;
            mike['appStateChangeStart'] = report;
            report = _closure1_slot15;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            backup = oscar;
            report = new backup[report](foxtrot);
            report = report instanceof Object ? report : oscar;
            mike['appStateChangeEnd'] = report;
            report = _closure1_slot15;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            backup = oscar;
            report = new backup[report](foxtrot);
            report = report instanceof Object ? report : oscar;
            mike['loadMiniCacheStart'] = report;
            report = _closure1_slot15;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            backup = oscar;
            report = new backup[report](foxtrot);
            report = report instanceof Object ? report : oscar;
            mike['loadStorageStart'] = report;
            tango = _closure1_slot15;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            backup = report;
            tango = new backup[tango](foxtrot);
            tango = tango instanceof Object ? tango : report;
            mike['loadStorageEnd'] = tango;
            zulu['imports'] = mike;
            return entity;
        };
        var _closure1_slot21 = tango;
        tango = golf.bind(entity)(tango);
        mike = function(argFoo) {
            tango = function(argFoo) { // Original name: TTITracker
                report = this;
                offset = 0;
                oscar = copyRestArgs(offset);
                mike = _closure1_slot9;
                tango = _closure2_slot0;
                zulu = undefined;
                mike = mike.bind(zulu)(report, tango);
                mike = _closure1_slot18;
                entity = new Array(0);
                offset = entity;
                verify = oscar;
                options = 0;
                oscar = arraySpread(offset, verify, options);
                entity = mike.bind(zulu)(report, tango, entity);
                mike = {};
                entity['readyProperties'] = mike;
                mike = false;
                entity['didBackgroundApp'] = mike;
                entity['wasEverActive'] = mike;
                entity['wasAuthenticated'] = mike;
                mike = null;
                entity['interstitial'] = mike;
                zulu = global;
                zulu = zulu.Map;
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                yankee = tango;
                zulu = new yankee[zulu](offset);
                zulu = zulu instanceof Object ? zulu : tango;
                entity['cachedChannelCounts'] = zulu;
                entity['cachedChannelId'] = mike;
                entity['cachedMessageIds'] = mike;
                zulu = 'never-loaded';
                entity['messageCacheMissingReason'] = zulu;
                entity['messageCacheAgeSeconds'] = mike;
                entity['messageCacheCount'] = mike;
                entity['messageCacheHavingCount'] = mike;
                entity['messageCacheMissingCount'] = mike;
                entity['messageRenderFullCount'] = mike;
                entity['messageRenderCachedCount'] = mike;
                entity['messageRenderHasMoreAfter'] = mike;
                entity['firstAppActiveTime'] = mike;
                entity['cacheInfo'] = mike;
                mike = {};
                entity['extraProperties'] = mike;
                return entity;
            };
            var _closure2_slot0 = tango;
            report = _closure1_slot7;
            zulu = undefined;
            mike = argFoo;
            mike = report.bind(zulu)(tango, mike);
            mike = _closure1_slot10;
            report = {};
            entity = 'setTTICallback';
            report['key'] = entity;
            entity = function(argFoo) { // Original name: value
                mike = argFoo;
                var _closure3_slot0 = mike;
                entity = function() { // Original name: loggerCallback
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        mike = _closure3_slot0;
                        entity = undefined;
                        zulu = mike.bind(entity)();
                        mike = true;
                        if(!(mike === zulu)) { _fun00034_ip = 33; continue _fun00033 }
 19:
                        mike = function() { // Original name: loggerCallback
                            entity = false;
                            return entity;
                        };
                        _closure1_slot11 = mike;
 33:
                        return entity;
                    }
                };
                _closure1_slot11 = entity;
                entity = undefined;
                return entity;
            };
            report['value'] = entity;
            entity = new Array(11);
            entity[0] = report;
            report = {};
            golf = 'setCacheInfo';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                mike = argFoo;
                entity = this;
                entity['cacheInfo'] = mike;
                entity = undefined;
                return entity;
            };
            report['value'] = golf;
            entity[1] = report;
            report = {};
            golf = 'setInterstitial';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                mike = argFoo;
                entity = this;
                entity['interstitial'] = mike;
                mike = _closure1_slot11;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            report['value'] = golf;
            entity[2] = report;
            report = {};
            golf = 'addLocalMessages';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    zulu = this;
                    report = zulu.cachedChannelCounts;
                    tango = report.set;
                    mike = argFoo;
                    entity = argBar;
                    entity = tango.bind(report)(mike, entity);
                    entity = zulu.cachedChannelCounts;
                    entity = entity.size;
                    mike = 100;
                    if(!(entity > mike)) { _fun00036_ip = 104; continue _fun00035 }
 44:
                    tango = zulu.cachedChannelCounts;
                    entity = tango.keys;
                    oscar = entity.bind(tango)();
                    report = zulu.cachedChannelCounts;
                    tango = report.delete;
                    entity = oscar.next;
                    entity = entity.bind(oscar)();
                    entity = entity.value;
                    entity = tango.bind(report)(entity);
                    entity = zulu.cachedChannelCounts;
                    entity = entity.size;
                    if(entity > mike) { _fun00036_ip = 44; continue _fun00035 }
 104:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[3] = report;
            report = {};
            golf = 'attachReadyPayloadProperties';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                mike = argFoo;
                entity = this;
                entity['readyProperties'] = mike;
                entity = undefined;
                return entity;
            };
            report['value'] = golf;
            entity[4] = report;
            report = {};
            golf = 'appStateChanged';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    tango = argFoo;
                    mike = this;
                    zulu = 'active';
                    if(!(zulu === tango)) { _fun00038_ip = 57; continue _fun00037 }
 14:
                    report = mike.firstAppActiveTime;
                    entity = null;
                    if(!(entity == report)) { _fun00038_ip = 49; continue _fun00037 }
 26:
                    entity = global;
                    report = entity.Date;
                    entity = report.now;
                    entity = entity.bind(report)();
                    mike['firstAppActiveTime'] = entity;
 49:
                    entity = true;
                    mike['wasEverActive'] = entity;
 57:
                    entity = mike.readyProperties;
                    report = entity.num_guilds;
                    entity = null;
                    if(!(entity == report)) { _fun00038_ip = 94; continue _fun00037 }
 75:
                    entity = mike.didBackgroundApp;
                    if(entity) { _fun00038_ip = 88; continue _fun00037 }
 84:
                    entity = zulu !== tango;
 88:
                    mike['didBackgroundApp'] = entity;
 94:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[5] = report;
            report = {};
            golf = 'recordRender';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    mike = argBar;
                    entity = this;
                    tango = entity.renderMessages;
                    zulu = tango.record;
                    zulu = zulu.bind(tango)();
                    zulu = mike;
                    if(zulu) { _fun00040_ip = 37; continue _fun00039 }
 28:
                    report = argFoo;
                    tango = 0;
                    zulu = report > tango;
 37:
                    if(!zulu) { _fun00040_ip = 56; continue _fun00039 }
 40:
                    tango = entity.renderMessagesWithCache;
                    zulu = tango.record;
                    zulu = zulu.bind(tango)();
 56:
                    if(!mike) { _fun00040_ip = 75; continue _fun00039 }
 59:
                    mike = entity.renderLatestMessages;
                    entity = mike.record;
                    entity = entity.bind(mike)();
 75:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[6] = report;
            report = {};
            golf = 'recordMessageRender';
            report['key'] = golf;
            golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    options = argFoo;
                    mike = argBar;
                    zulu = this;
                    var _closure3_slot0 = zulu;
                    oscar = _closure1_slot1;
                    tango = _closure1_slot4;
                    entity = 8;
                    tango = tango[entity];
                    entity = undefined;
                    tango = oscar.bind(entity)(tango);
                    romeo = tango.default;
                    oscar = zulu.renderLatestMessages;
                    tango = oscar.hasData;
                    tango = tango.bind(oscar)();
                    if(tango) { _fun00042_ip = 581; continue _fun00041 }
 67:
                    oscar = zulu.renderMessages;
                    tango = oscar.record;
                    tango = tango.bind(oscar)();
                    tango = mike.length;
                    golf = 0;
                    if(!(tango > golf)) { _fun00042_ip = 110; continue _fun00041 }
 94:
                    oscar = zulu.renderMessagesWithCache;
                    tango = oscar.record;
                    tango = tango.bind(oscar)();
 110:
                    tango = argBaz;
                    if(tango) { _fun00042_ip = 182; continue _fun00041 }
 116:
                    oscar = zulu.cachedChannelId;
                    tango = null;
                    oscar = tango != oscar;
                    if(!oscar) { _fun00042_ip = 141; continue _fun00041 }
 131:
                    verify = zulu.cachedChannelId;
                    oscar = options !== verify;
 141:
                    if(oscar) { _fun00042_ip = 581; continue _fun00041 }
 147:
                    zulu['cachedChannelId'] = options;
                    zulu['cachedMessageIds'] = mike;
                    oscar = mike.length;
                    if(!(oscar > golf)) { _fun00042_ip = 581; continue _fun00041 }
 171:
                    zulu['messageCacheMissingReason'] = tango;
                    _fun00042_ip = 581; continue _fun00041;
 182:
                    oscar = zulu.renderLatestMessages;
                    tango = oscar.record;
                    tango = tango.bind(oscar)();
                    oscar = zulu.cachedChannelId;
                    tango = null;
                    if(!(tango != oscar)) { _fun00042_ip = 567; continue _fun00041 }
 213:
                    oscar = zulu.cachedChannelId;
                    if(!(oscar === options)) { _fun00042_ip = 553; continue _fun00041 }
 226:
                    oscar = zulu.cachedMessageIds;
                    if(!(tango != oscar)) { _fun00042_ip = 539; continue _fun00041 }
 239:
                    oscar = zulu.cachedMessageIds;
                    oscar = oscar.length;
                    if(!(golf !== oscar)) { _fun00042_ip = 539; continue _fun00041 }
 257:
                    oscar = mike.length;
                    if(!(golf !== oscar)) { _fun00042_ip = 525; continue _fun00041 }
 269:
                    oscar = zulu.cachedChannelId;
                    if(!(options === oscar)) { _fun00042_ip = 581; continue _fun00041 }
 282:
                    offset = zulu.cachedMessageIds;
                    verify = offset.sort;
                    oscar = romeo.compare;
                    verify = verify.bind(offset)(oscar);
                    oscar = verify.reverse;
                    oscar = oscar.bind(verify)();
                    yankee = oscar[golf];
                    verify = mike.sort;
                    oscar = romeo.compare;
                    verify = verify.bind(mike)(oscar);
                    oscar = verify.reverse;
                    oscar = oscar.bind(verify)();
                    offset = oscar[golf];
                    oscar = global;
                    verify = oscar.Math;
                    golf = verify.floor;
                    oscar = romeo.extractTimestamp;
                    offset = oscar.bind(romeo)(offset);
                    oscar = romeo.extractTimestamp;
                    oscar = oscar.bind(romeo)(yankee);
                    offset = offset - oscar;
                    oscar = 1000;
                    oscar = offset / oscar;
                    oscar = golf.bind(verify)(oscar);
                    zulu['messageCacheAgeSeconds'] = oscar;
                    oscar = mike.filter;
                    report = function(argFoo) {
                        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                            entity = _closure3_slot0;
                            tango = entity.cachedMessageIds;
                            entity = null;
                            mike = entity == tango;
                            entity = undefined;
                            if(mike) { _fun00044_ip = 37; continue _fun00043 }
 24:
                            zulu = tango.includes;
                            mike = argFoo;
                            entity = zulu.bind(tango)(mike);
 37:
                            return entity;
                        }
                    };
                    report = oscar.bind(mike)(report);
                    report = report.length;
                    golf = zulu.cachedChannelCounts;
                    oscar = golf.get;
                    oscar = oscar.bind(golf)(options);
                    golf = tango != oscar;
                    tango = null;
                    if(!golf) { _fun00042_ip = 459; continue _fun00041 }
 456:
                    tango = oscar;
 459:
                    zulu['messageCacheCount'] = tango;
                    zulu['messageCacheHavingCount'] = report;
                    tango = mike.length;
                    tango = tango - report;
                    zulu['messageCacheMissingCount'] = tango;
                    mike = mike.length;
                    zulu['messageRenderFullCount'] = mike;
                    mike = zulu.cachedMessageIds;
                    mike = mike.length;
                    zulu['messageRenderCachedCount'] = mike;
                    mike = argCorge;
                    zulu['messageRenderHasMoreAfter'] = mike;
                    _fun00042_ip = 581; continue _fun00041;
 525:
                    mike = 'channel-empty';
                    zulu['messageCacheMissingReason'] = mike;
                    return entity;
 539:
                    mike = 'no-cache';
                    zulu['messageCacheMissingReason'] = mike;
                    return entity;
 553:
                    mike = 'channel-changed';
                    zulu['messageCacheMissingReason'] = mike;
                    return entity;
 567:
                    mike = 'no-cache';
                    zulu['messageCacheMissingReason'] = mike;
                    return entity;
 581:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[7] = report;
            report = {};
            golf = 'getStartTime';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    entity = argFoo;
                    mike = this;
                    zulu = mike.extraProperties;
                    zulu = zulu.headless_task_ran;
                    if(!zulu) { _fun00046_ip = 33; continue _fun00045 }
 21:
                    tango = mike.firstAppActiveTime;
                    zulu = null;
                    if(!(zulu == tango)) { _fun00046_ip = 58; continue _fun00045 }
 33:
                    zulu = null;
                    if(!(zulu != entity)) { _fun00046_ip = 45; continue _fun00045 }
 39:
                    zulu = 0;
                    if(!(entity <= zulu)) { _fun00046_ip = 56; continue _fun00045 }
 45:
                    zulu = mike.loadIndex;
                    entity = zulu.start;
 56:
                    _fun00046_ip = 64; continue _fun00045;
 58:
                    entity = mike.firstAppActiveTime;
 64:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[8] = report;
            report = {};
            golf = 'processNativeLogs';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    vacuum = this;
                    mike = vacuum.getStartTime;
                    entity = argBar;
                    control = mike.bind(vacuum)(entity);
                    zulu = _closure1_slot16;
                    entity = undefined;
                    mike = argFoo;
                    update = zulu.bind(entity)(mike);
                    zulu = update.bind(entity)();
                    mike = zulu.done;
                    echo = null;
                    result = 'ChatModule.updateRows() Finish';
                    output = 'ChatModule.updateRows() Start';
                    sizing = 'CacheStorage Init End';
                    kilo = 'CacheStorage Init Start';
                    backup = 'REACT_BRIDGE_LOADING_END';
                    foxtrot = 'REACT_BRIDGE_LOADING_START';
                    romeo = 'CREATE_UI_MANAGER_MODULE_END';
                    yankee = 'CREATE_UI_MANAGER_MODULE_START';
                    offset = 'CREATE_CATALYST_INSTANCE_END';
                    verify = 'CREATE_CATALYST_INSTANCE_START';
                    options = 'PROCESS_PACKAGES_END';
                    golf = 'PROCESS_PACKAGES_START';
                    oscar = 'GET_REACT_INSTANCE_MANAGER_END';
                    report = 'GET_REACT_INSTANCE_MANAGER_START';
                    tango = 'Finish MainApplication.initialize()';
                    if(mike) { _fun00048_ip = 784; continue _fun00047 }
 141:
                    mike = zulu.value;
                    sequence = mike.label;
                    if(!(tango !== sequence)) { _fun00048_ip = 738; continue _fun00047 }
 158:
                    if(!(report !== sequence)) { _fun00048_ip = 708; continue _fun00047 }
 165:
                    if(!(oscar !== sequence)) { _fun00048_ip = 678; continue _fun00047 }
 172:
                    if(!(golf !== sequence)) { _fun00048_ip = 648; continue _fun00047 }
 179:
                    if(!(options !== sequence)) { _fun00048_ip = 618; continue _fun00047 }
 186:
                    if(!(verify !== sequence)) { _fun00048_ip = 585; continue _fun00047 }
 193:
                    if(!(offset !== sequence)) { _fun00048_ip = 552; continue _fun00047 }
 200:
                    if(!(yankee !== sequence)) { _fun00048_ip = 519; continue _fun00047 }
 207:
                    if(!(romeo !== sequence)) { _fun00048_ip = 486; continue _fun00047 }
 214:
                    if(!(foxtrot !== sequence)) { _fun00048_ip = 453; continue _fun00047 }
 221:
                    if(!(backup !== sequence)) { _fun00048_ip = 420; continue _fun00047 }
 228:
                    if(!(kilo !== sequence)) { _fun00048_ip = 387; continue _fun00047 }
 235:
                    if(!(sizing !== sequence)) { _fun00048_ip = 354; continue _fun00047 }
 239:
                    if(!(output !== sequence)) { _fun00048_ip = 302; continue _fun00047 }
 243:
                    if(!(result === sequence)) { _fun00048_ip = 766; continue _fun00047 }
 250:
                    sequence = vacuum.extraProperties;
                    sequence = sequence.time_first_native_message_render_end;
                    if(!(echo == sequence)) { _fun00048_ip = 766; continue _fun00047 }
 269:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_first_native_message_render_end'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 302:
                    sequence = vacuum.extraProperties;
                    sequence = sequence.time_first_native_message_render_start;
                    if(!(echo == sequence)) { _fun00048_ip = 766; continue _fun00047 }
 321:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_first_native_message_render_start'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 354:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_init_native_storage_end'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 387:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_init_native_storage_start'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 420:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_react_bridge_loading_end'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 453:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_react_bridge_loading_start'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 486:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_create_ui_manager_module_end'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 519:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_create_ui_manager_module_start'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 552:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_create_catalyst_instance_end'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 585:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_create_catalyst_instance_start'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 618:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_process_packages_end'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 648:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_process_packages_start'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 678:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_get_react_instance_manager_end'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 708:
                    config = vacuum.extraProperties;
                    record = _closure1_slot20;
                    sequence = mike.timestamp;
                    sequence = record.bind(entity)(control, sequence);
                    config['time_get_react_instance_manager_start'] = sequence;
                    _fun00048_ip = 766; continue _fun00047;
 738:
                    sequence = vacuum.extraProperties;
                    config = _closure1_slot20;
                    mike = mike.timestamp;
                    mike = config.bind(entity)(control, mike);
                    sequence['time_main_application_initialize_end'] = mike;
 766:
                    sequence = update.bind(entity)();
                    mike = sequence.done;
                    zulu = sequence;
                    if(!mike) { _fun00048_ip = 141; continue _fun00047 }
 784:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[9] = report;
            report = {};
            golf = 'serializeTTITracker';
            report['key'] = golf;
            oscar = function(argFoo) { // Original name: value
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    mike = this;
                    tango = mike.getStartTime;
                    zulu = argFoo;
                    golf = tango.bind(mike)(zulu);
                    oscar = _closure1_slot1;
                    options = _closure1_slot4;
                    tango = 9;
                    report = options[tango];
                    tango = undefined;
                    report = oscar.bind(tango)(report);
                    oscar = _closure1_slot2;
                    zulu = 6;
                    zulu = options[zulu];
                    zulu = oscar.bind(tango)(zulu);
                    oscar = zulu.logGroups;
                    zulu = 0;
                    zulu = oscar[zulu];
                    zulu = zulu.logs;
                    oscar = report.bind(tango)(zulu);
                    report = oscar.filter;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        zulu = entity.log;
                        mike = zulu.startsWith;
                        entity = 'Require ';
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    report = report.bind(oscar)(zulu);
                    zulu = report.map;
                    entity = function(argFoo) {
                        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                            entity = argFoo;
                            mike = entity.delta;
                            entity = null;
                            zulu = entity != mike;
                            entity = 0;
                            if(!zulu) { _fun00052_ip = 23; continue _fun00051 }
 20:
                            entity = mike;
 23:
                            return entity;
                        }
                    };
                    zulu = zulu.bind(report)(entity);
                    entity = zulu.sum;
                    report = entity.bind(zulu)();
                    entity = {};
                    verify = mike.extraProperties;
                    offset = entity;
                    zulu = copyDataProperties(offset, verify);
                    oscar = mike.loadIndex;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_index_start';
                    entity[zulu] = oscar;
                    oscar = mike.loadIndex;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_index_end';
                    entity[zulu] = oscar;
                    oscar = mike.beginFastConnect;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_begin_fast_connect_start';
                    entity[zulu] = oscar;
                    oscar = mike.beginFastConnect;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_begin_fast_connect_end';
                    entity[zulu] = oscar;
                    oscar = mike.loadImports;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_imports_start';
                    entity[zulu] = oscar;
                    oscar = mike.loadImports;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_imports_end';
                    entity[zulu] = oscar;
                    oscar = mike.init;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_init_start';
                    entity[zulu] = oscar;
                    oscar = mike.init;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_init_end';
                    entity[zulu] = oscar;
                    oscar = mike.loadStorage;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_storage_start';
                    entity[zulu] = oscar;
                    oscar = mike.loadStorage;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_storage_end';
                    entity[zulu] = oscar;
                    oscar = mike.parseStorage;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_parse_storage_start';
                    entity[zulu] = oscar;
                    oscar = mike.parseStorage;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_parse_storage_end';
                    entity[zulu] = oscar;
                    oscar = mike.loadMiniCache;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_mini_cache_start';
                    entity[zulu] = oscar;
                    oscar = mike.loadMiniCache;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_mini_cache_end';
                    entity[zulu] = oscar;
                    oscar = mike.fetchGuildCache;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_fetch_initial_guild_start';
                    entity[zulu] = oscar;
                    oscar = mike.fetchGuildCache;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_fetch_initial_guild_end';
                    entity[zulu] = oscar;
                    oscar = mike.loadCachedMessages;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_cached_messages_start';
                    entity[zulu] = oscar;
                    oscar = mike.loadCachedMessages;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_cached_messages_end';
                    entity[zulu] = oscar;
                    oscar = mike.renderApp;
                    zulu = oscar.serialize;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_render_app_start';
                    entity[zulu] = oscar;
                    oscar = mike.renderAppEffect;
                    zulu = oscar.serialize;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_render_app_effect_start';
                    entity[zulu] = oscar;
                    oscar = mike.renderMessages;
                    zulu = oscar.serialize;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_render_messages_end';
                    entity[zulu] = oscar;
                    oscar = mike.renderMessagesWithCache;
                    zulu = oscar.serialize;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_render_messages_with_cache_end';
                    entity[zulu] = oscar;
                    oscar = mike.renderLatestMessages;
                    zulu = oscar.serialize;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_render_latest_messages_end';
                    entity[zulu] = oscar;
                    oscar = mike.firstRowGenerator;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_first_row_generator_start';
                    entity[zulu] = oscar;
                    oscar = mike.firstRowGenerator;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_first_row_generator_end';
                    entity[zulu] = oscar;
                    oscar = mike.initialGuild;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_initial_guild_start';
                    entity[zulu] = oscar;
                    oscar = mike.initialGuild;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_initial_guild_end';
                    entity[zulu] = oscar;
                    oscar = mike.loadLazyCache;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_lazy_cache_start';
                    entity[zulu] = oscar;
                    oscar = mike.loadLazyCache;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_lazy_cache_end';
                    entity[zulu] = oscar;
                    oscar = mike.fetchLazyCache;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_fetch_lazy_cache_start';
                    entity[zulu] = oscar;
                    oscar = mike.fetchLazyCache;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_fetch_lazy_cache_end';
                    entity[zulu] = oscar;
                    oscar = mike.parseLazyCache;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_parse_lazy_cache_start';
                    entity[zulu] = oscar;
                    oscar = mike.parseLazyCache;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_parse_lazy_cache_end';
                    entity[zulu] = oscar;
                    oscar = mike.fetchStaleChannels;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_fetch_stale_channels_start';
                    entity[zulu] = oscar;
                    oscar = mike.fetchStaleChannels;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_fetch_stale_channels_end';
                    entity[zulu] = oscar;
                    oscar = mike.deserializeCache;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_deserialize_cache_start';
                    entity[zulu] = oscar;
                    oscar = mike.deserializeCache;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_deserialize_cache_end';
                    entity[zulu] = oscar;
                    oscar = mike.dispatchLazyCache;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_dispatch_lazy_cache_start';
                    entity[zulu] = oscar;
                    oscar = mike.dispatchLazyCache;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_dispatch_lazy_cache_end';
                    entity[zulu] = oscar;
                    oscar = mike.parseReady;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_parse_ready_start';
                    entity[zulu] = oscar;
                    oscar = mike.parseReady;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_parse_ready_end';
                    entity[zulu] = oscar;
                    oscar = mike.ready;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_ready_start';
                    entity[zulu] = oscar;
                    oscar = mike.ready;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_ready_end';
                    entity[zulu] = oscar;
                    oscar = mike.hydrateReady;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_hydrate_ready_start';
                    entity[zulu] = oscar;
                    oscar = mike.hydrateReady;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_hydrate_ready_end';
                    entity[zulu] = oscar;
                    oscar = mike.dispatchReady;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_dispatch_ready_start';
                    entity[zulu] = oscar;
                    oscar = mike.dispatchReady;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_dispatch_ready_end';
                    entity[zulu] = oscar;
                    oscar = mike.parseReadySupplemental;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_parse_ready_supplemental_start';
                    entity[zulu] = oscar;
                    oscar = mike.parseReadySupplemental;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_parse_ready_supplemental_end';
                    entity[zulu] = oscar;
                    oscar = mike.readySupplemental;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_ready_supplemental_start';
                    entity[zulu] = oscar;
                    oscar = mike.readySupplemental;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_ready_supplemental_end';
                    entity[zulu] = oscar;
                    oscar = mike.hydrateReadySupplemental;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_hydrate_ready_supplemental_start';
                    entity[zulu] = oscar;
                    oscar = mike.hydrateReadySupplemental;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_hydrate_ready_supplemental_end';
                    entity[zulu] = oscar;
                    oscar = mike.dispatchReadySupplemental;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_dispatch_ready_supplemental_start';
                    entity[zulu] = oscar;
                    oscar = mike.dispatchReadySupplemental;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_dispatch_ready_supplemental_end';
                    entity[zulu] = oscar;
                    oscar = mike.fetchMessages;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_fetch_messages_start';
                    entity[zulu] = oscar;
                    oscar = mike.fetchMessages;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_fetch_messages_end';
                    entity[zulu] = oscar;
                    oscar = mike.dispatchMessages;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_dispatch_messages_start';
                    entity[zulu] = oscar;
                    oscar = mike.dispatchMessages;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_dispatch_messages_end';
                    entity[zulu] = oscar;
                    oscar = mike.loadFastConnectNativeModule;
                    zulu = oscar.serializeStart;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_fast_connect_native_module_start';
                    entity[zulu] = oscar;
                    oscar = mike.loadFastConnectNativeModule;
                    zulu = oscar.serializeEnd;
                    oscar = zulu.bind(oscar)(golf);
                    zulu = 'time_load_fast_connect_native_module_end';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.identify_total_server_duration_ms;
                    zulu = 'identify_total_server_duration_ms';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.identify_api_duration_ms;
                    zulu = 'identify_api_duration_ms';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.identify_guilds_duration_ms;
                    zulu = 'identify_guilds_duration_ms';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.compressed_byte_size;
                    zulu = 'ready_compressed_byte_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.uncompressed_byte_size;
                    zulu = 'ready_uncompressed_byte_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.identify_compressed_byte_size;
                    zulu = 'identify_compressed_byte_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.identify_uncompressed_byte_size;
                    zulu = 'identify_uncompressed_byte_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.compression_algorithm;
                    zulu = 'ready_compression_algorithm';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.packing_algorithm;
                    zulu = 'ready_packing_algorithm';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.unpack_duration_ms;
                    zulu = 'ready_unpack_duration_ms';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.is_reconnect;
                    zulu = 'is_reconnect';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.is_fast_connect;
                    zulu = 'is_fast_connect';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.did_force_clear_guild_hashes;
                    zulu = 'did_force_clear_guild_hashes';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.num_guilds;
                    zulu = 'num_guilds';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.num_guild_channels;
                    zulu = 'num_changed_guild_channels';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.presences_size;
                    zulu = 'ready_presences_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.users_size;
                    zulu = 'ready_users_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.read_states_size;
                    zulu = 'ready_read_states_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.private_channels_size;
                    zulu = 'ready_private_channels_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.user_guild_settings_size;
                    zulu = 'ready_user_guild_settings_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.relationships_size;
                    zulu = 'ready_relationships_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.experiments_size;
                    zulu = 'ready_experiments_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.user_settings_size;
                    zulu = 'ready_user_settings_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.remaining_data_size;
                    zulu = 'ready_remaining_data_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.guild_channels_size;
                    zulu = 'ready_guild_channels_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.guild_members_size;
                    zulu = 'ready_guild_members_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.guild_presences_size;
                    zulu = 'ready_guild_presences_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.guild_roles_size;
                    zulu = 'ready_guild_roles_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.guild_emojis_size;
                    zulu = 'ready_guild_emojis_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.guild_remaining_data_size;
                    zulu = 'ready_guild_remaining_data_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.guild_threads_size;
                    zulu = 'ready_guild_threads_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.guild_stickers_size;
                    zulu = 'ready_guild_stickers_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.guild_events_size;
                    zulu = 'ready_guild_events_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.guild_features_size;
                    zulu = 'ready_guild_features_size';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.size_metrics_duration_ms;
                    zulu = 'ready_size_metrics_duration_ms';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.had_cache_at_startup;
                    zulu = 'had_cache_at_startup';
                    entity[zulu] = oscar;
                    zulu = mike.readyProperties;
                    oscar = zulu.used_cache_at_startup;
                    zulu = 'used_cache_at_startup';
                    entity[zulu] = oscar;
                    oscar = mike.wasAuthenticated;
                    zulu = 'was_authenticated';
                    entity[zulu] = oscar;
                    oscar = mike.didBackgroundApp;
                    zulu = 'did_background_app';
                    entity[zulu] = oscar;
                    oscar = mike.interstitial;
                    zulu = 'interstitial';
                    entity[zulu] = oscar;
                    oscar = mike.messageCacheMissingReason;
                    zulu = 'message_cache_missing_reason';
                    entity[zulu] = oscar;
                    oscar = mike.messageCacheAgeSeconds;
                    zulu = 'message_cache_age_seconds';
                    entity[zulu] = oscar;
                    oscar = mike.messageCacheCount;
                    zulu = 'message_cache_count';
                    entity[zulu] = oscar;
                    oscar = mike.messageCacheHavingCount;
                    zulu = 'message_cache_having_count';
                    entity[zulu] = oscar;
                    oscar = mike.messageCacheMissingCount;
                    zulu = 'message_cache_missing_count';
                    entity[zulu] = oscar;
                    oscar = mike.messageRenderFullCount;
                    zulu = 'message_render_full_count';
                    entity[zulu] = oscar;
                    oscar = mike.messageRenderCachedCount;
                    zulu = 'message_render_cached_count';
                    entity[zulu] = oscar;
                    oscar = mike.messageRenderHasMoreAfter;
                    zulu = 'message_render_has_more_after';
                    entity[zulu] = oscar;
                    zulu = mike.loadImports;
                    oscar = zulu.end;
                    zulu = mike.loadIndex;
                    zulu = zulu.start;
                    zulu = oscar - zulu;
                    report = zulu + report;
                    zulu = 'duration_major_js_imports';
                    entity[zulu] = report;
                    zulu = mike.cacheInfo;
                    report = null;
                    golf = report == zulu;
                    oscar = undefined;
                    if(golf) { _fun00050_ip = 2924; continue _fun00049 }
 2918:
                    oscar = zulu.guilds;
 2924:
                    zulu = 'cache_num_guilds';
                    entity[zulu] = oscar;
                    zulu = mike.cacheInfo;
                    golf = report == zulu;
                    oscar = undefined;
                    if(golf) { _fun00050_ip = 2956; continue _fun00049 }
 2950:
                    oscar = zulu.privateChannels;
 2956:
                    zulu = 'cache_num_private_channels';
                    entity[zulu] = oscar;
                    zulu = mike.cacheInfo;
                    golf = report == zulu;
                    oscar = undefined;
                    if(golf) { _fun00050_ip = 2988; continue _fun00049 }
 2982:
                    oscar = zulu.basicChannels;
 2988:
                    zulu = 'cache_num_basic_channels';
                    entity[zulu] = oscar;
                    zulu = mike.cacheInfo;
                    golf = report == zulu;
                    oscar = undefined;
                    if(golf) { _fun00050_ip = 3020; continue _fun00049 }
 3014:
                    oscar = zulu.basicChannelsStale;
 3020:
                    zulu = 'cache_num_basic_channels_stale';
                    entity[zulu] = oscar;
                    zulu = mike.cacheInfo;
                    golf = report == zulu;
                    oscar = undefined;
                    if(golf) { _fun00050_ip = 3052; continue _fun00049 }
 3046:
                    oscar = zulu.fullChannels;
 3052:
                    zulu = 'cache_num_full_channels';
                    entity[zulu] = oscar;
                    zulu = mike.cacheInfo;
                    report = report == zulu;
                    tango = undefined;
                    if(report) { _fun00050_ip = 3084; continue _fun00049 }
 3078:
                    tango = zulu.fullChannelGuilds;
 3084:
                    zulu = 'cache_num_full_channel_guilds';
                    entity[zulu] = tango;
                    zulu = mike.loadIndex;
                    tango = zulu.endNumImports;
                    zulu = 'num_imports_at_load_index_end';
                    entity[zulu] = tango;
                    zulu = mike.init;
                    tango = zulu.endNumImports;
                    zulu = 'num_imports_at_init_end';
                    entity[zulu] = tango;
                    zulu = mike.loadMiniCache;
                    tango = zulu.endNumImports;
                    zulu = 'num_imports_at_load_mini_cache_end';
                    entity[zulu] = tango;
                    zulu = mike.renderApp;
                    tango = zulu.numImports;
                    zulu = 'num_imports_at_render_app_start';
                    entity[zulu] = tango;
                    zulu = mike.renderAppEffect;
                    tango = zulu.numImports;
                    zulu = 'num_imports_at_render_app_effect_start';
                    entity[zulu] = tango;
                    zulu = mike.renderMessages;
                    tango = zulu.numImports;
                    zulu = 'num_imports_at_render_messages_end';
                    entity[zulu] = tango;
                    zulu = mike.renderMessagesWithCache;
                    tango = zulu.numImports;
                    zulu = 'num_imports_at_render_messages_with_cache_end';
                    entity[zulu] = tango;
                    zulu = mike.renderLatestMessages;
                    tango = zulu.numImports;
                    zulu = 'num_imports_at_render_latest_messages_end';
                    entity[zulu] = tango;
                    zulu = mike.loadLazyCache;
                    tango = zulu.startNumImports;
                    zulu = 'num_imports_at_load_lazy_cache_start';
                    entity[zulu] = tango;
                    zulu = mike.loadLazyCache;
                    tango = zulu.endNumImports;
                    zulu = 'num_imports_at_load_lazy_cache_end';
                    entity[zulu] = tango;
                    zulu = mike.ready;
                    tango = zulu.startNumImports;
                    zulu = 'num_imports_at_ready_start';
                    entity[zulu] = tango;
                    zulu = mike.ready;
                    tango = zulu.endNumImports;
                    zulu = 'num_imports_at_ready_end';
                    entity[zulu] = tango;
                    zulu = mike.readySupplemental;
                    tango = zulu.startNumImports;
                    zulu = 'num_imports_at_ready_supplemental_start';
                    entity[zulu] = tango;
                    zulu = mike.readySupplemental;
                    tango = zulu.endNumImports;
                    zulu = 'num_imports_at_ready_supplemental_end';
                    entity[zulu] = tango;
                    zulu = global;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.loadIndex;
                    tango = tango.startImportTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_load_index_start';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.loadIndex;
                    tango = tango.endImportTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_load_index_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.init;
                    tango = tango.endImportTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_init_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.loadMiniCache;
                    tango = tango.endImportTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_load_mini_cache_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.renderApp;
                    tango = tango.importTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_render_app_start';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.renderAppEffect;
                    tango = tango.importTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_render_app_effect_start';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.renderMessages;
                    tango = tango.importTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_render_messages_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.renderMessagesWithCache;
                    tango = tango.importTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_render_messages_with_cache_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.renderLatestMessages;
                    tango = tango.importTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_render_latest_messages_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.loadLazyCache;
                    tango = tango.startImportTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_load_lazy_cache_start';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.loadLazyCache;
                    tango = tango.endImportTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_load_lazy_cache_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.ready;
                    tango = tango.startImportTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_ready_start';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.ready;
                    tango = tango.endImportTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_ready_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.readySupplemental;
                    tango = tango.startImportTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_ready_supplemental_start';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.readySupplemental;
                    tango = tango.endImportTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_ready_supplemental_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.imports;
                    tango = tango.polyfillsEnd;
                    tango = tango.time;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_polyfills_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.imports;
                    tango = tango.sentryEnd;
                    tango = tango.time;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_sentry_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.beginFastConnect;
                    tango = tango.startImportTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_fast_connect_start';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.beginFastConnect;
                    tango = tango.endImportTime;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_fast_connect_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.imports;
                    tango = tango.appStateChangeStart;
                    tango = tango.time;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_app_state_change_start';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.imports;
                    tango = tango.appStateChangeEnd;
                    tango = tango.time;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_app_state_change_end';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.imports;
                    tango = tango.loadMiniCacheStart;
                    tango = tango.time;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_load_mini_cache_start';
                    entity[tango] = report;
                    oscar = zulu.Math;
                    report = oscar.ceil;
                    tango = mike.imports;
                    tango = tango.loadStorageStart;
                    tango = tango.time;
                    report = report.bind(oscar)(tango);
                    tango = 'duration_imports_at_load_storage_start';
                    entity[tango] = report;
                    tango = zulu.Math;
                    zulu = tango.ceil;
                    mike = mike.imports;
                    mike = mike.loadStorageEnd;
                    mike = mike.time;
                    zulu = zulu.bind(tango)(mike);
                    mike = 'duration_imports_at_load_storage_end';
                    entity[mike] = zulu;
                    return entity;
                }
            };
            report['value'] = oscar;
            entity[10] = report;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        };
        mike = mike.bind(entity)(tango);
        tango = mike.prototype;
        tango = Object.create(tango, {constructor: {value: mike}});
        backup = tango;
        mike = new backup[mike](foxtrot);
        mike = mike instanceof Object ? mike : tango;
        tango = 10;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/tti_analytics/TTITracker.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();