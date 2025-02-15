// app/lib/uploader/CloudUploaderBase.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot12;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot12;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot14;
            entity = entity.bind(zulu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00008_ip = 71; continue _fun00007 }
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
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
 72: // try_end0
            _fun00010_ip = 76; continue _fun00009;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _stageAttachmentFiles
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    mike = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun00012_ip = 99; continue _fun00011 }
 15:
                    tango = undefined;
                    if(!(mike === tango)) { _fun00012_ip = 23; continue _fun00011 }
 21:
                    mike = false;
 23:
                    var _closure4_slot0 = mike;
                    mike = arguments[2];
                    var _closure4_slot1 = mike;
                    SaveGenerator(address=38);
 36:
                    return tango;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00012_ip = 96; continue _fun00011 }
 44:
                    report = oscar.map;
                    zulu = function(argFoo) {
                        mike = argFoo;
                        var _closure5_slot0 = mike;
                        mike = global;
                        zulu = mike.Promise;
                        mike = zulu.prototype;
                        mike = Object.create(mike, {constructor: {value: zulu}});
                        tango = function(argFoo, argBar) {
                            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                report = argFoo;
                                oscar = argBar;
                                var _closure6_slot0 = report;
                                var _closure6_slot1 = oscar;
                                entity = _closure5_slot0;
                                options = entity.status;
                                verify = _closure1_slot0;
                                entity = _closure1_slot1;
                                offset = 10;
                                golf = entity[offset];
                                entity = undefined;
                                golf = verify.bind(entity)(golf);
                                golf = golf.CloudUploadStatus;
                                golf = golf.NOT_STARTED;
                                if(!(golf !== options)) { _fun00014_ip = 319; continue _fun00013 }
 72:
                                verify = _closure1_slot0;
                                golf = _closure1_slot1;
                                golf = golf[offset];
                                golf = verify.bind(entity)(golf);
                                golf = golf.CloudUploadStatus;
                                golf = golf.COMPLETED;
                                if(!(golf !== options)) { _fun00014_ip = 308; continue _fun00013 }
 108:
                                verify = _closure1_slot0;
                                golf = _closure1_slot1;
                                golf = golf[offset];
                                golf = verify.bind(entity)(golf);
                                golf = golf.CloudUploadStatus;
                                golf = golf.ERROR;
                                if(!(golf !== options)) { _fun00014_ip = 218; continue _fun00013 }
 141:
                                verify = _closure1_slot0;
                                golf = _closure1_slot1;
                                golf = golf[offset];
                                golf = verify.bind(entity)(golf);
                                golf = golf.CloudUploadStatus;
                                golf = golf.CANCELED;
                                if(!(golf === options)) { _fun00014_ip = 333; continue _fun00013 }
 177:
                                golf = global;
                                verify = golf.Error;
                                golf = verify.prototype;
                                options = Object.create(golf, {constructor: {value: verify}});
                                romeo = 'Upload is canceled';
                                foxtrot = options;
                                golf = new foxtrot[verify](romeo, yankee);
                                golf = golf instanceof Object ? golf : options;
                                golf = oscar.bind(entity)(golf);
                                _fun00014_ip = 333; continue _fun00013;
 218:
                                golf = _closure4_slot0;
                                if(!golf) { _fun00014_ip = 251; continue _fun00013 }
 228:
                                golf = _closure5_slot0;
                                golf = golf.error;
                                tango = _closure1_slot8;
                                tango = tango.ENTITY_TOO_LARGE;
                                if(!(golf === tango)) { _fun00014_ip = 292; continue _fun00013 }
 251:
                                tango = global;
                                options = tango.Error;
                                tango = options.prototype;
                                golf = Object.create(tango, {constructor: {value: options}});
                                romeo = 'File failed to upload';
                                foxtrot = golf;
                                tango = new foxtrot[options](romeo, yankee);
                                tango = tango instanceof Object ? tango : golf;
                                tango = oscar.bind(entity)(tango);
                                _fun00014_ip = 333; continue _fun00013;
 292:
                                oscar = _closure5_slot0;
                                tango = oscar.upload;
                                tango = tango.bind(oscar)();
                                _fun00014_ip = 333; continue _fun00013;
 308:
                                tango = 'complete';
                                tango = report.bind(entity)(tango);
                                _fun00014_ip = 333; continue _fun00013;
 319:
                                report = _closure5_slot0;
                                tango = report.upload;
                                tango = tango.bind(report)();
 333:
                                report = _closure5_slot0;
                                oscar = report.on;
                                tango = 'complete';
                                zulu = function() {
                                    zulu = _closure6_slot0;
                                    entity = undefined;
                                    mike = 'complete';
                                    mike = zulu.bind(entity)(mike);
                                    return entity;
                                };
                                zulu = oscar.bind(report)(tango, zulu);
                                oscar = report.on;
                                tango = 'error';
                                zulu = function() {
                                    zulu = _closure6_slot1;
                                    entity = global;
                                    tango = entity.Error;
                                    mike = _closure5_slot0;
                                    oscar = mike.id;
                                    entity = entity.HermesInternal;
                                    report = entity.concat;
                                    mike = 'File ';
                                    entity = ' failed to upload';
                                    options = report.bind(mike)(oscar, entity);
                                    mike = tango.prototype;
                                    mike = Object.create(mike, {constructor: {value: tango}});
                                    verify = mike;
                                    entity = new verify[tango](options, golf);
                                    mike = entity instanceof Object ? entity : mike;
                                    entity = undefined;
                                    mike = zulu.bind(entity)(mike);
                                    return entity;
                                };
                                zulu = oscar.bind(report)(tango, zulu);
                                tango = report.on;
                                zulu = 'progress';
                                mike = function(argFoo, argBar) {
                                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                        zulu = _closure4_slot1;
                                        mike = null;
                                        if(!(mike != zulu)) { _fun00016_ip = 31; continue _fun00015 }
 13:
                                        tango = _closure4_slot1;
                                        zulu = undefined;
                                        mike = argFoo;
                                        entity = argBar;
                                        entity = tango.bind(zulu)(mike, entity);
 31:
                                        entity = undefined;
                                        return entity;
                                    }
                                };
                                mike = tango.bind(report)(zulu, mike);
                                return entity;
                            }
                        };
                        report = mike;
                        entity = new report[zulu](tango, zulu);
                        entity = entity instanceof Object ? entity : mike;
                        return entity;
                    };
                    oscar = report.bind(oscar)(zulu);
                    zulu = global;
                    report = zulu.Promise;
                    zulu = report.all;
                    zulu = zulu.bind(report)(oscar);
                    SaveGenerator(address=84);
 82:
                    return zulu;
 84:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00012_ip = 93; continue _fun00011 }
 90:
                    return tango;
 93:
                    return zulu;
 96:
                    return mike;
 99:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.AbortCodes;
    var _closure1_slot8 = tango;
    tango = 7;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.FileUploadErrorTypes;
    var _closure1_slot9 = tango;
    tango = 8;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    verify = tango.Logger;
    tango = verify.prototype;
    options = Object.create(tango, {constructor: {value: verify}});
    romeo = 'CloudUploaderBase.tsx';
    foxtrot = options;
    tango = new foxtrot[verify](romeo, yankee);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot10 = tango;
    tango = 14;
    tango = golf[tango];
    report = report.bind(entity)(tango);
    tango = function(argFoo) {
        tango = function(argFoo) { // Original name: CloudUploaderBase
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot3;
            tango = _closure2_slot2;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot13;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = mike.bind(zulu)(report, tango, entity);
            mike = new Array(0);
            entity['files'] = mike;
            return entity;
        };
        var _closure2_slot2 = tango;
        mike = _closure1_slot7;
        zulu = undefined;
        entity = argFoo;
        entity = mike.bind(zulu)(tango, entity);
        mike = _closure1_slot4;
        report = {};
        entity = '_fileSize';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = this;
            tango = entity.files;
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argBar;
                    entity = entity.currentSize;
                    mike = null;
                    zulu = mike != entity;
                    mike = 0;
                    if(!zulu) { _fun00018_ip = 23; continue _fun00017 }
 20:
                    mike = entity;
 23:
                    entity = argFoo;
                    entity = entity + mike;
                    return entity;
                }
            };
            entity = 0;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(12);
        entity[0] = report;
        report = {};
        options = 'compressAndCheckFileSize';
        report['key'] = options;
        verify = _closure1_slot2;
        options = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    tango = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00020_ip = 718; continue _fun00019 }
 13:
                    romeo = undefined;
                    mike = undefined;
                    foxtrot = undefined;
                    backup = undefined;
                    kilo = undefined;
                    sizing = undefined;
                    output = undefined;
                    oscar = _closure1_slot0;
                    golf = _closure1_slot1;
                    zulu = 9;
                    zulu = golf[zulu];
                    golf = oscar.bind(romeo)(zulu);
                    oscar = golf.getUploadTarget;
                    zulu = tango.files;
                    yankee = 0;
                    options = zulu[yankee];
                    offset = null;
                    verify = offset == options;
                    zulu = undefined;
                    if(verify) { _fun00020_ip = 99; continue _fun00019 }
 79:
                    options = options.item;
                    verify = offset == options;
                    zulu = undefined;
                    if(verify) { _fun00020_ip = 99; continue _fun00019 }
 93:
                    zulu = options.target;
 99:
                    golf = oscar.bind(golf)(zulu);
                    mike = golf;
                    zulu = tango.files;
                    oscar = zulu.length;
                    zulu = golf.getMaxAttachmentsCount;
                    zulu = zulu.bind(golf)();
                    if(!(!(oscar > zulu))) { _fun00020_ip = 642; continue _fun00019 }
 137:
                    golf = _closure1_slot10;
                    oscar = golf.log;
                    result = tango.id;
                    verify = global;
                    zulu = verify.HermesInternal;
                    options = zulu.concat;
                    zulu = 'compressing files for ';
                    zulu = options.bind(zulu)(result);
                    zulu = oscar.bind(golf)(zulu);
                    oscar = _closure1_slot11;
                    zulu = tango.files;
                    zulu = oscar.bind(romeo)(zulu);
                    backup = zulu;
                    zulu = zulu.bind(romeo)();
                    foxtrot = zulu;
                    zulu = zulu.done;
                    options = 'compressAndCheckFileSize() file has been cancelled for compression - ';
                    golf = 10;
                    if(zulu) { _fun00020_ip = 555; continue _fun00019 }
 226:
                    zulu = foxtrot;
                    kilo = zulu.value;
 234: // try_start_0
                    oscar = kilo;
                    zulu = oscar.reactNativeCompressAndExtractData;
                    zulu = zulu.bind(oscar)();
                    SaveGenerator(address=251);
 249:
                    return zulu;
 251:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun00020_ip = 534; continue _fun00019 }
 260:
                    oscar = kilo;
                    result = oscar.status;
                    echo = _closure1_slot0;
                    oscar = _closure1_slot1;
                    oscar = oscar[golf];
                    oscar = echo.bind(romeo)(oscar);
                    oscar = oscar.CloudUploadStatus;
                    oscar = oscar.CANCELED;
                    if(!(result !== oscar)) { _fun00020_ip = 472; continue _fun00019 }
 304:
                    oscar = kilo;
                    oscar = oscar.currentSize;
                    sizing = oscar;
                    result = offset != oscar;
                    oscar = 0;
                    if(!result) { _fun00020_ip = 328; continue _fun00019 }
 325:
                    oscar = sizing;
 328:
                    if(!(yankee !== oscar)) { _fun00020_ip = 440; continue _fun00019 }
 332:
                    oscar = kilo;
                    oscar = oscar.currentSize;
                    output = oscar;
                    oscar = offset != oscar;
                    result = 0;
                    if(!oscar) { _fun00020_ip = 356; continue _fun00019 }
 353:
                    result = output;
 356:
                    update = mike;
                    echo = update.getMaxFileSize;
                    oscar = kilo;
                    oscar = oscar.channelId;
                    oscar = echo.bind(update)(oscar);
                    if(!(!(result > oscar))) { _fun00020_ip = 387; continue _fun00019 }
 382: // try_end0
                    _fun00020_ip = 511; continue _fun00019;
 387: // try_start_1
                    result = tango._handleError;
                    oscar = {};
                    echo = _closure1_slot8;
                    echo = echo.ENTITY_TOO_LARGE;
                    oscar['code'] = echo;
                    echo = {};
                    update = _closure1_slot9;
                    update = update.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                    echo['type'] = update;
                    oscar['reason'] = echo;
                    oscar = result.bind(tango)(oscar);
 435: // try_end1
                    oscar = false;
                    return oscar;
 440: // try_start_2
                    result = tango._handleError;
                    oscar = {};
                    echo = _closure1_slot8;
                    echo = echo.ENTITY_EMPTY;
                    oscar['code'] = echo;
                    oscar = result.bind(tango)(oscar);
 467: // try_end2
                    oscar = false;
                    return oscar;
 472: // try_start_3
                    echo = _closure1_slot10;
                    result = echo.log;
                    oscar = kilo;
                    update = oscar.id;
                    oscar = verify.HermesInternal;
                    oscar = oscar.concat;
                    oscar = oscar.bind(options)(update);
                    oscar = result.bind(echo)(oscar);
 511: // try_end3
                    oscar = backup;
                    oscar = oscar.bind(romeo)();
                    foxtrot = oscar;
                    oscar = oscar.done;
                    if(oscar) { _fun00020_ip = 555; continue _fun00019 }
 529:
                    _fun00020_ip = 226; continue _fun00019;
 534:
                    return zulu;
 537: // catch_target0 // catch_target1 // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=5);
                    zulu = tango._handleException;
                    zulu = zulu.bind(tango)(oscar);
                    zulu = false;
                    return zulu;
 555:
                    zulu = tango._fileSize;
                    zulu = zulu.bind(tango)();
                    oscar = mike;
                    mike = oscar.getMaxTotalAttachmentSize;
                    mike = mike.bind(oscar)();
                    mike = zulu > mike;
                    if(!mike) { _fun00020_ip = 636; continue _fun00019 }
 585:
                    oscar = tango._handleError;
                    zulu = {};
                    golf = _closure1_slot8;
                    golf = golf.ENTITY_TOO_LARGE;
                    zulu['code'] = golf;
                    golf = {};
                    options = _closure1_slot9;
                    options = options.POSTCOMPRESSION_SUM_TOO_LARGE;
                    golf['type'] = options;
                    zulu['reason'] = golf;
                    zulu = oscar.bind(tango)(zulu);
                    mike = 1;
 636:
                    mike = !mike;
                    return mike;
 642:
                    oscar = _closure1_slot10;
                    zulu = oscar.log;
                    options = tango.id;
                    mike = global;
                    mike = mike.HermesInternal;
                    golf = mike.concat;
                    mike = 'Too many attachments for ';
                    mike = golf.bind(mike)(options);
                    mike = zulu.bind(oscar)(mike);
                    zulu = tango._handleError;
                    mike = {};
                    report = _closure1_slot8;
                    report = report.TOO_MANY_ATTACHMENTS;
                    mike['code'] = report;
                    mike = zulu.bind(tango)(mike);
                    mike = false;
                    return mike;
 718:
                    return entity;
                }
            };
            return entity;
        };
        options = verify.bind(zulu)(options);
        var _closure2_slot1 = options;
        options = function() { // Original name: compressAndCheckFileSize
            entity = undefined;
            tango = _closure2_slot1;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = options;
        entity[1] = report;
        report = {};
        options = '_filesTooLarge';
        report['key'] = options;
        options = function() { // Original name: value
            entity = this;
            zulu = entity.files;
            mike = zulu.some;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.error;
                entity = _closure1_slot8;
                entity = entity.ENTITY_TOO_LARGE;
                entity = mike === entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = options;
        entity[2] = report;
        report = {};
        options = 'setUploadingTextForUI';
        report['key'] = options;
        options = function() { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                mike = this;
                zulu = mike.files;
                tango = zulu.length;
                zulu = 1;
                if(!(zulu === tango)) { _fun00022_ip = 47; continue _fun00021 }
 23:
                zulu = mike.files;
                tango = 0;
                zulu = zulu[tango];
                report = zulu.filename;
                zulu = null;
                if(!(zulu == report)) { _fun00022_ip = 127; continue _fun00021 }
 47:
                options = _closure1_slot0;
                verify = _closure1_slot1;
                zulu = 11;
                oscar = verify[zulu];
                report = undefined;
                oscar = options.bind(report)(oscar);
                golf = oscar.intl;
                oscar = golf.formatToPlainString;
                zulu = verify[zulu];
                zulu = options.bind(report)(zulu);
                zulu = zulu.t;
                report = zulu.D0noUl;
                zulu = {};
                options = mike.files;
                options = options.length;
                zulu['count'] = options;
                oscar = oscar.bind(golf)(report, zulu);
                _fun00022_ip = 143; continue _fun00021;
 127:
                zulu = mike.files;
                zulu = zulu[tango];
                oscar = zulu.filename;
 143:
                report = mike.files;
                tango = report.some;
                zulu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isImage;
                    return entity;
                };
                tango = tango.bind(report)(zulu);
                report = mike.files;
                zulu = report.some;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isVideo;
                    return entity;
                };
                report = zulu.bind(report)(entity);
                entity = mike._fileSize;
                golf = entity.bind(mike)();
                options = _closure1_slot10;
                zulu = options.log;
                entity = mike.files;
                sizing = entity.length;
                backup = mike.id;
                entity = global;
                entity = entity.HermesInternal;
                yankee = entity.concat;
                echo = 'setUploadingTextForUI - total content: ';
                output = ' bytes and ';
                kilo = ' attachments for ';
                result = golf;
                entity = echo[yankee](result, output, sizing, kilo, backup, foxtrot);
                entity = zulu.bind(options)(entity);
                entity = {};
                output = mike._file;
                result = entity;
                zulu = copyDataProperties(result, output);
                zulu = 'totalPostCompressionSize';
                entity[zulu] = golf;
                zulu = 'currentSize';
                entity[zulu] = golf;
                zulu = 'name';
                entity[zulu] = oscar;
                zulu = 'hasVideo';
                entity[zulu] = report;
                zulu = 'hasImage';
                entity[zulu] = tango;
                zulu = mike.files;
                tango = zulu.length;
                zulu = 'attachmentsCount';
                entity[zulu] = tango;
                tango = mike.files;
                zulu = 'items';
                entity[zulu] = tango;
                mike['_file'] = entity;
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[3] = report;
        report = {};
        options = '_recomputeProgress';
        report['key'] = options;
        options = function() { // Original name: value
            report = this;
            entity = report._recomputeProgressTotal;
            entity = entity.bind(report)();
            tango = entity.loaded;
            zulu = entity.total;
            entity = report._recomputeProgressByFile;
            mike = entity.bind(report)();
            entity = report._handleProgress;
            entity = entity.bind(report)(tango, zulu, mike);
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[4] = report;
        report = {};
        options = '_recomputeProgressTotal';
        report['key'] = options;
        options = function() { // Original name: value
            zulu = this;
            entity = zulu._fileSize;
            mike = entity.bind(zulu)();
            entity = {};
            oscar = zulu.files;
            report = oscar.reduce;
            tango = function(argFoo, argBar) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = argBar;
                    entity = entity.loaded;
                    mike = null;
                    zulu = mike != entity;
                    mike = 0;
                    if(!zulu) { _fun00024_ip = 23; continue _fun00023 }
 20:
                    mike = entity;
 23:
                    entity = argFoo;
                    entity = entity + mike;
                    return entity;
                }
            };
            zulu = 0;
            zulu = report.bind(oscar)(tango, zulu);
            entity['loaded'] = zulu;
            entity['total'] = mike;
            return entity;
        };
        report['value'] = options;
        entity[5] = report;
        report = {};
        options = '_recomputeProgressByFile';
        report['key'] = options;
        options = function() { // Original name: value
            entity = {};
            var _closure3_slot0 = entity;
            zulu = this;
            tango = zulu.files;
            zulu = tango.forEach;
            mike = function(argFoo) {
                mike = argFoo;
                tango = _closure3_slot0;
                zulu = mike.id;
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                entity = 12;
                report = report[entity];
                entity = undefined;
                golf = oscar.bind(entity)(report);
                oscar = golf.calculateProgress;
                report = mike.loaded;
                mike = mike.currentSize;
                mike = oscar.bind(golf)(report, mike);
                tango[zulu] = mike;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = options;
        entity[6] = report;
        report = {};
        options = 'cancel';
        report['key'] = options;
        options = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                mike = this;
                tango = _closure1_slot10;
                zulu = tango.log;
                oscar = mike.id;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                entity = 'Cancel called for ';
                entity = report.bind(entity)(oscar);
                entity = zulu.bind(tango)(entity);
                entity = mike._aborted;
                if(entity) { _fun00026_ip = 124; continue _fun00025 }
 59:
                entity = true;
                mike['_aborted'] = entity;
                zulu = mike._cancel;
                entity = null;
                if(!(entity != zulu)) { _fun00026_ip = 89; continue _fun00025 }
 79:
                entity = mike._cancel;
                entity = entity.bind(mike)();
 89:
                tango = mike.files;
                zulu = tango.forEach;
                entity = function(argFoo) {
                    mike = argFoo;
                    entity = mike.cancel;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = zulu.bind(tango)(entity);
                entity = mike._handleComplete;
                entity = entity.bind(mike)();
 124:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[7] = report;
        report = {};
        options = 'cancelItem';
        report['key'] = options;
        options = _closure1_slot2;
        golf = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    StartGenerator();
                    yankee = argFoo;
                    tango = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00028_ip = 383; continue _fun00027 }
 18:
                    var _closure4_slot0 = yankee;
                    golf = _closure1_slot10;
                    oscar = golf.log;
                    offset = tango.id;
                    report = global;
                    report = report.HermesInternal;
                    verify = report.concat;
                    options = 'Cancel called for ';
                    report = ' for item ';
                    report = verify.bind(options)(offset, report, yankee);
                    report = oscar.bind(golf)(report);
                    oscar = tango.files;
                    report = oscar.find;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        mike = entity.id;
                        entity = _closure4_slot0;
                        entity = mike === entity;
                        return entity;
                    };
                    oscar = report.bind(oscar)(zulu);
                    zulu = null;
                    if(!(zulu != oscar)) { _fun00028_ip = 375; continue _fun00027 }
 109:
                    report = oscar.status;
                    options = _closure1_slot0;
                    golf = _closure1_slot1;
                    zulu = 10;
                    zulu = golf[zulu];
                    golf = undefined;
                    zulu = options.bind(golf)(zulu);
                    zulu = zulu.CloudUploadStatus;
                    zulu = zulu.CANCELED;
                    if(!(report !== zulu)) { _fun00028_ip = 375; continue _fun00027 }
 155:
                    report = tango.files;
                    zulu = report.indexOf;
                    romeo = zulu.bind(report)(oscar);
                    options = tango.files;
                    zulu = options.slice;
                    report = 0;
                    backup = zulu.bind(options)(report, romeo);
                    zulu = new Array(0);
                    kilo = zulu;
                    foxtrot = 0;
                    foxtrot = arraySpread(kilo, backup, foxtrot);
                    yankee = tango.files;
                    offset = yankee.slice;
                    options = 1;
                    options = romeo + options;
                    backup = offset.bind(yankee)(options);
                    kilo = zulu;
                    options = arraySpread(kilo, backup, foxtrot);
                    tango['files'] = zulu;
                    zulu = {};
                    backup = tango._file;
                    kilo = zulu;
                    options = copyDataProperties(kilo, backup);
                    verify = tango.files;
                    options = 'items';
                    zulu[options] = verify;
                    tango['_file'] = zulu;
                    zulu = _closure1_slot0;
                    options = _closure1_slot1;
                    mike = 13;
                    mike = options[mike];
                    zulu = zulu.bind(golf)(mike);
                    mike = zulu.cancelGetAttachmentFile;
                    mike = mike.bind(zulu)(oscar);
                    SaveGenerator(address=310);
 308:
                    return mike;
 310:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00028_ip = 380; continue _fun00027 }
 316:
                    zulu = oscar.cancel;
                    zulu = zulu.bind(oscar)();
                    golf = tango.emit;
                    oscar = tango._file;
                    zulu = 'cancel-upload-item';
                    zulu = golf.bind(tango)(zulu, oscar);
                    zulu = tango.files;
                    zulu = zulu.length;
                    if(!(report === zulu)) { _fun00028_ip = 375; continue _fun00027 }
 365:
                    zulu = tango.cancel;
                    zulu = zulu.bind(tango)();
 375:
                    zulu = undefined;
                    return zulu;
 380:
                    return mike;
 383:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot0 = golf;
        golf = function() { // Original name: cancelItem
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'failed';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            zulu = entity.files;
            mike = zulu.some;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.status;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 10;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.CloudUploadStatus;
                entity = entity.ERROR;
                entity = mike === entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = '_remainingUploadCount';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            tango = entity.files;
            mike = tango.length;
            zulu = tango.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.status;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 10;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.CloudUploadStatus;
                entity = entity.COMPLETED;
                entity = mike === entity;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            entity = entity.length;
            entity = mike - entity;
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'clear';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = this;
            entity = mike.cancel;
            entity = entity.bind(mike)();
            entity = new Array(0);
            mike['files'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[11] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(report);
    report = 15;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'lib/uploader/CloudUploaderBase.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function() { // Original name: stageAttachmentFiles
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['stageAttachmentFiles'] = mike;
    return entity;
})();