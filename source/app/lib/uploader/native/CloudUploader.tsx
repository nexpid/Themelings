// app/lib/uploader/native/CloudUploader.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot22;
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
            golf = _closure1_slot22;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
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
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot24;
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
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
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
 70: // try_end0
            _fun00010_ip = 74; continue _fun00009;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot24 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot24 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.NativeEventEmitter;
    tango = tango.NativeModules;
    options = 8;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 9;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot11 = options;
    options = 10;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot12 = options;
    options = 11;
    options = oscar[options];
    options = report.bind(entity)(options);
    offset = options.AbortCodes;
    var _closure1_slot13 = offset;
    offset = options.AnalyticEvents;
    var _closure1_slot14 = offset;
    options = options.NOOP;
    var _closure1_slot15 = options;
    options = 12;
    options = oscar[options];
    options = report.bind(entity)(options);
    offset = options.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE;
    var _closure1_slot16 = offset;
    offset = options.FileUploadErrorTypes;
    var _closure1_slot17 = offset;
    options = options.MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS;
    var _closure1_slot18 = options;
    options = 13;
    options = oscar[options];
    yankee = golf.bind(entity)(options);
    options = yankee.prototype;
    offset = Object.create(options, {constructor: {value: yankee}});
    backup = 'CloudUploader(Native).tsx';
    kilo = offset;
    options = new kilo[yankee](backup, foxtrot);
    options = options instanceof Object ? options : offset;
    var _closure1_slot19 = options;
    backup = tango.MediaManager;
    options = verify.prototype;
    options = Object.create(options, {constructor: {value: verify}});
    kilo = options;
    tango = new kilo[verify](backup, foxtrot);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot20 = tango;
    tango = 21;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo, argBar) { // Original name: CloudUploader
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                golf = arguments[2];
                oscar = this;
                report = undefined;
                if(!(golf === report)) { _fun00012_ip = 18; continue _fun00011 }
 12:
                golf = 'POST';
 18:
                entity = _closure1_slot4;
                tango = _closure2_slot3;
                entity = entity.bind(report)(oscar, tango);
                mike = _closure1_slot23;
                entity = new Array(3);
                options = argFoo;
                entity[0] = options;
                entity[1] = golf;
                golf = arguments[3];
                entity[2] = golf;
                entity = mike.bind(report)(oscar, tango, entity);
                mike = global;
                tango = mike.Map;
                oscar = tango.prototype;
                oscar = Object.create(oscar, {constructor: {value: tango}});
                romeo = oscar;
                tango = new romeo[tango](yankee);
                tango = tango instanceof Object ? tango : oscar;
                entity['mediaEventSubscriptions'] = tango;
                tango = mike.Map;
                oscar = tango.prototype;
                oscar = Object.create(oscar, {constructor: {value: tango}});
                romeo = oscar;
                tango = new romeo[tango](yankee);
                tango = tango instanceof Object ? tango : oscar;
                entity['uploadItems'] = tango;
                tango = new Array(0);
                entity['preCompressionFileSizes'] = tango;
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 14;
                zulu = oscar[zulu];
                tango = tango.bind(report)(zulu);
                zulu = tango.getAPIBaseURL;
                report = zulu.bind(tango)();
                tango = entity._url;
                mike = mike.HermesInternal;
                zulu = mike.concat;
                mike = '';
                mike = zulu.bind(mike)(report, tango);
                entity['_url'] = mike;
                mike = argBar;
                entity['_token'] = mike;
                return entity;
            }
        };
        var _closure2_slot3 = tango;
        report = _closure1_slot9;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        golf = 'uploadFiles';
        report['key'] = golf;
        options = _closure1_slot3;
        entity = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    zulu = argFoo;
                    mike = arguments[1];
                    oscar = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun00014_ip = 966; continue _fun00013 }
 21:
                    var _closure4_slot0 = oscar;
                    golf = zulu;
                    var _closure4_slot1 = zulu;
                    zulu = undefined;
                    if(!(mike === zulu)) { _fun00014_ip = 40; continue _fun00013 }
 38:
                    mike = {};
 40:
                    yankee = mike;
                    var _closure4_slot2 = mike;
                    mike = arguments[2];
                    var _closure4_slot3 = mike;
                    var _closure4_slot4 = zulu;
                    var _closure4_slot5 = zulu;
                    var _closure4_slot6 = zulu;
                    romeo = undefined;
                    foxtrot = undefined;
                    backup = undefined;
                    kilo = undefined;
                    sizing = undefined;
                    SaveGenerator(address=80);
 78:
                    return zulu;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00014_ip = 963; continue _fun00013 }
 89:
                    _closure4_slot4 = oscar;
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    options = 15;
                    options = offset[options];
                    options = verify.bind(zulu)(options);
                    options = options.backgroundTaskIdentifierInvalid;
                    _closure4_slot5 = options;
                    offset = oscar.once;
                    verify = _closure1_slot3;
                    options = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(mike) { _fun00016_ip = 237; continue _fun00015 }
 10:
                                tango = _closure1_slot1;
                                offset = _closure1_slot2;
                                golf = 15;
                                mike = offset[golf];
                                zulu = undefined;
                                options = tango.bind(zulu)(mike);
                                oscar = options.startBackgroundTask;
                                mike = {};
                                verify = _closure1_slot0;
                                tango = 16;
                                yankee = offset[tango];
                                yankee = verify.bind(zulu)(yankee);
                                foxtrot = yankee.intl;
                                romeo = foxtrot.string;
                                yankee = offset[tango];
                                yankee = verify.bind(zulu)(yankee);
                                yankee = yankee.t;
                                yankee = yankee.B/HSDQ;
                                yankee = romeo.bind(foxtrot)(yankee);
                                mike['title'] = yankee;
                                yankee = offset[tango];
                                yankee = verify.bind(zulu)(yankee);
                                romeo = yankee.intl;
                                yankee = romeo.formatToPlainString;
                                tango = offset[tango];
                                tango = verify.bind(zulu)(tango);
                                tango = tango.t;
                                offset = tango.D0noUl;
                                verify = {};
                                foxtrot = _closure4_slot1;
                                foxtrot = foxtrot.length;
                                verify['count'] = foxtrot;
                                verify = yankee.bind(romeo)(offset, verify);
                                mike['content'] = verify;
                                mike = oscar.bind(options)(mike);
                                SaveGenerator(address=176);
 174:
                                return mike;
 176:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(oscar) { _fun00016_ip = 234; continue _fun00015 }
 182:
                                _closure4_slot5 = mike;
                                oscar = _closure4_slot4;
                                oscar = oscar._aborted;
                                if(!oscar) { _fun00016_ip = 231; continue _fun00015 }
 199:
                                oscar = _closure1_slot1;
                                report = _closure1_slot2;
                                report = report[golf];
                                oscar = oscar.bind(zulu)(report);
                                report = oscar.endBackgroundTask;
                                tango = _closure4_slot5;
                                tango = report.bind(oscar)(tango);
 231:
                                return zulu;
 234:
                                return mike;
 237:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    verify = verify.bind(zulu)(options);
                    options = 'start';
                    options = offset.bind(oscar)(options, verify);
                    offset = function() { // Original name: onCompleteTask
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 15;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.endBackgroundTask;
                        zulu = _closure4_slot5;
                        zulu = tango.bind(report)(zulu);
                        report = _closure4_slot0;
                        oscar = report.removeListener;
                        tango = _closure4_slot6;
                        zulu = 'complete';
                        zulu = oscar.bind(report)(zulu, tango);
                        tango = report.removeListener;
                        zulu = _closure4_slot6;
                        mike = 'error';
                        mike = tango.bind(report)(mike, zulu);
                        return entity;
                    };
                    _closure4_slot6 = offset;
                    verify = oscar.once;
                    options = 'error';
                    options = verify.bind(oscar)(options, offset);
                    verify = oscar.once;
                    options = 'complete';
                    options = verify.bind(oscar)(options, offset);
 197: // try_start_0
                    options = golf;
                    oscar['files'] = options;
                    config = _closure2_slot3;
                    offset = function(argFoo, argBar, argBaz, argCorge) { // Original name: _superPropGet
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            report = argFoo;
                            golf = argBaz;
                            var _closure5_slot0 = golf;
                            oscar = _closure1_slot8;
                            zulu = _closure1_slot7;
                            entity = 1;
                            tango = 3;
                            options = entity & tango;
                            entity = report;
                            if(!options) { _fun00018_ip = 44; continue _fun00017 }
 39:
                            entity = report.prototype;
 44:
                            report = undefined;
                            zulu = zulu.bind(report)(entity);
                            entity = 'upload';
                            entity = oscar.bind(report)(zulu, entity, golf);
                            var _closure5_slot1 = entity;
                            zulu = 2;
                            zulu = zulu & tango;
                            if(!zulu) { _fun00018_ip = 81; continue _fun00017 }
 76:
                            entity = function(argFoo) {
                                tango = _closure5_slot1;
                                zulu = tango.apply;
                                mike = _closure5_slot0;
                                entity = argFoo;
                                entity = zulu.bind(tango)(mike, entity);
                                return entity;
                            };
 81:
                            return entity;
                        }
                    };
                    sequence = 'upload';
                    control = 3;
                    record = undefined;
                    vacuum = oscar;
                    offset = record[offset](config, sequence, vacuum, control, source);
                    output = {};
                    verify = _closure1_slot0;
                    result = _closure1_slot2;
                    golf = 16;
                    echo = result[golf];
                    echo = verify.bind(zulu)(echo);
                    update = echo.intl;
                    echo = update.formatToPlainString;
                    golf = result[golf];
                    golf = verify.bind(zulu)(golf);
                    golf = golf.t;
                    result = golf.Iaj5LS;
                    verify = {};
                    golf = options.length;
                    verify['count'] = golf;
                    golf = 0;
                    source = options[golf];
                    source = source.filename;
                    verify['filename'] = source;
                    verify = echo.bind(update)(result, verify);
                    output['name'] = verify;
                    verify = new Array(3);
                    verify[0] = output;
                    verify[1] = yankee;
                    verify[2] = options;
                    verify = offset.bind(zulu)(verify);
                    verify = oscar._file;
                    options = options.length;
                    verify['attachmentsCount'] = options;
                    verify = oscar._handleStart;
                    options = null;
                    options = verify.bind(oscar)(options);
                    foxtrot = 0;
                    options = _closure1_slot21;
                    golf = oscar.files;
                    golf = options.bind(zulu)(golf);
                    backup = golf;
                    golf = golf.bind(zulu)();
                    romeo = golf;
                    options = golf.done;
                    yankee = 18;
                    golf = global;
                    offset = 17;
                    if(options) { _fun00014_ip = 780; continue _fun00013 }
 423:
                    options = romeo;
                    options = options.value;
                    kilo = options;
                    output = _closure1_slot0;
                    verify = _closure1_slot2;
                    verify = verify[offset];
                    output = output.bind(zulu)(verify);
                    verify = output.getFileSize;
                    options = options.item;
                    options = options.uri;
                    options = verify.bind(output)(options);
                    SaveGenerator(address=477);
 475:
                    return options;
 477:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00014_ip = 777; continue _fun00013 }
 486:
                    output = oscar.preCompressionFileSizes;
                    verify = output.push;
                    verify = verify.bind(output)(options);
                    verify = kilo;
                    verify['preCompressionSize'] = options;
                    output = foxtrot;
                    result = output + options;
                    foxtrot = result;
                    output = oscar._file;
                    output['totalPreCompressionSize'] = result;
                    output = oscar._file;
                    output['currentSize'] = result;
                    result = _closure1_slot0;
                    output = _closure1_slot2;
                    output = output[yankee];
                    echo = result.bind(zulu)(output);
                    result = echo.getUploadTarget;
                    output = verify.item;
                    output = output.target;
                    update = result.bind(echo)(output);
                    sizing = update;
                    echo = golf.Math;
                    result = echo.max;
                    output = update.getMaxFileSize;
                    verify = verify.channelId;
                    output = output.bind(update)(verify);
                    verify = _closure1_slot16;
                    verify = result.bind(echo)(output, verify);
                    if(!(!(options > verify))) { _fun00014_ip = 724; continue _fun00013 }
 628:
                    output = foxtrot;
                    result = sizing;
                    verify = result.getMaxTotalAttachmentSize;
                    verify = verify.bind(result)();
                    if(!(!(output > verify))) { _fun00014_ip = 671; continue _fun00013 }
 648:
                    verify = backup;
                    verify = verify.bind(zulu)();
                    romeo = verify;
                    verify = verify.done;
                    if(verify) { _fun00014_ip = 780; continue _fun00013 }
 666:
                    _fun00014_ip = 423; continue _fun00013;
 671:
                    offset = oscar._handleError;
                    verify = {};
                    yankee = _closure1_slot13;
                    yankee = yankee.ENTITY_TOO_LARGE;
                    verify['code'] = yankee;
                    yankee = {};
                    romeo = _closure1_slot17;
                    romeo = romeo.PRECOMPRESSION_SUM_TOO_LARGE;
                    yankee['type'] = romeo;
                    verify['reason'] = yankee;
                    verify = offset.bind(oscar)(verify);
 719: // try_end0
                    verify = undefined;
                    return verify;
 724: // try_start_1
                    offset = oscar._handleError;
                    verify = {};
                    yankee = _closure1_slot13;
                    yankee = yankee.ENTITY_TOO_LARGE;
                    verify['code'] = yankee;
                    yankee = {};
                    romeo = _closure1_slot17;
                    romeo = romeo.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                    yankee['type'] = romeo;
                    verify['reason'] = yankee;
                    verify = offset.bind(oscar)(verify);
 772: // try_end1
                    verify = undefined;
                    return verify;
 777:
                    return options;
 780: // try_start_2
                    offset = _closure1_slot19;
                    verify = offset.log;
                    foxtrot = oscar.id;
                    options = golf.HermesInternal;
                    romeo = options.concat;
                    yankee = '';
                    options = ' queued';
                    options = romeo.bind(yankee)(foxtrot, options);
                    options = verify.bind(offset)(options);
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    options = 19;
                    options = offset[options];
                    offset = verify.bind(zulu)(options);
                    verify = offset.enqueue;
                    options = function() {
                        entity = _closure4_slot0;
                        tango = entity.sendMessage;
                        zulu = _closure4_slot2;
                        mike = _closure4_slot3;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    options = verify.bind(offset)(options);
                    options = golf.Promise;
                    golf = options.prototype;
                    golf = Object.create(golf, {constructor: {value: options}});
                    config = function(argFoo, argBar) {
                        mike = argFoo;
                        var _closure5_slot0 = mike;
                        mike = argBar;
                        var _closure5_slot1 = mike;
                        tango = _closure4_slot0;
                        report = tango.once;
                        zulu = 'error';
                        mike = function(argFoo) {
                            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                entity = _closure4_slot0;
                                mike = entity._raiseEndpointErrors;
                                if(mike) { _fun00020_ip = 32; continue _fun00019 }
 19:
                                zulu = _closure5_slot0;
                                mike = undefined;
                                mike = zulu.bind(mike)(mike);
                                _fun00020_ip = 46; continue _fun00019;
 32:
                                zulu = _closure5_slot1;
                                mike = undefined;
                                entity = argFoo;
                                entity = zulu.bind(mike)(entity);
 46:
                                entity = undefined;
                                return entity;
                            }
                        };
                        mike = report.bind(tango)(zulu, mike);
                        zulu = tango.once;
                        mike = 'complete';
                        entity = function(argFoo, argBar) {
                            zulu = _closure5_slot0;
                            entity = undefined;
                            mike = argBar;
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        };
                        entity = zulu.bind(tango)(mike, entity);
                        entity = undefined;
                        return entity;
                    };
                    record = golf;
                    report = new record[options](config, sequence);
                    report = report instanceof Object ? report : golf;
 894: // try_end2
                    return report;
 897: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=4);
                    options = _closure1_slot19;
                    golf = options.log;
                    yankee = oscar.id;
                    tango = global;
                    tango = tango.HermesInternal;
                    offset = tango.concat;
                    verify = '';
                    tango = ' failed in CloudUploader uploadFiles ';
                    tango = offset.bind(verify)(yankee, tango, report);
                    tango = golf.bind(options)(tango);
                    tango = oscar._handleException;
                    tango = tango.bind(oscar)(report);
                    return zulu;
 963:
                    return mike;
 966:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        entity = options.bind(zulu)(entity);
        var _closure2_slot2 = entity;
        entity = function() { // Original name: uploadFiles
            entity = undefined;
            tango = _closure2_slot2;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'sendMessage';
        report['key'] = golf;
        golf = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    golf = arguments[0];
                    mike = arguments[1];
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00022_ip = 607; continue _fun00021 }
 19:
                    zulu = undefined;
                    if(!(golf === zulu)) { _fun00022_ip = 27; continue _fun00021 }
 25:
                    golf = {};
 27:
                    verify = golf;
                    if(!(mike === zulu)) { _fun00022_ip = 36; continue _fun00021 }
 34:
                    mike = {};
 36:
                    tango = mike;
                    options = undefined;
                    romeo = undefined;
                    SaveGenerator(address=47);
 45:
                    return zulu;
 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscar) { _fun00022_ip = 604; continue _fun00021 }
 56:
                    oscar = report._aborted;
                    if(oscar) { _fun00022_ip = 591; continue _fun00021 }
 68:
                    oscar = report._token;
                    yankee = '';
                    if(!(yankee === oscar)) { _fun00022_ip = 132; continue _fun00021 }
 82:
                    golf = report._handleException;
                    oscar = global;
                    foxtrot = oscar.Error;
                    oscar = foxtrot.prototype;
                    offset = Object.create(oscar, {constructor: {value: foxtrot}});
                    result = 'No token provided for CloudUploader';
                    echo = offset;
                    oscar = new echo[foxtrot](result, output);
                    oscar = oscar instanceof Object ? oscar : offset;
                    oscar = golf.bind(report)(oscar);
                    _fun00022_ip = 601; continue _fun00021;
 132:
                    offset = report._handleStart;
                    oscar = _closure1_slot15;
                    oscar = offset.bind(report)(oscar);
                    options = tango.addFilesTo;
                    romeo = tango.handleRequestError;
 162: // try_start_0
                    oscar = _closure1_slot0;
                    offset = _closure1_slot2;
                    tango = 20;
                    tango = offset[tango];
                    oscar = oscar.bind(zulu)(tango);
                    tango = oscar.isAndroid;
                    tango = tango.bind(oscar)();
                    if(!tango) { _fun00022_ip = 213; continue _fun00021 }
 194:
                    oscar = report.observeCompressionProgress;
                    tango = report.files;
                    tango = oscar.bind(report)(tango);
 213:
                    tango = report.compressAndCheckFileSize;
                    tango = tango.bind(report)();
                    SaveGenerator(address=229);
 227:
                    return tango;
 229:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun00022_ip = 573; continue _fun00021 }
 238:
                    if(tango) { _fun00022_ip = 244; continue _fun00021 }
 241: // try_end0
                    return zulu;
 244: // try_start_1
                    oscar = report.setUploadingTextForUI;
                    oscar = oscar.bind(report)();
                    offset = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    oscar = 21;
                    oscar = foxtrot[oscar];
                    kilo = offset.bind(zulu)(oscar);
                    backup = kilo.stageAttachmentFiles;
                    foxtrot = report.files;
                    offset = report._recomputeProgress;
                    oscar = offset.bind;
                    offset = oscar.bind(offset)(report);
                    oscar = true;
                    oscar = backup.bind(kilo)(foxtrot, oscar, offset);
                    SaveGenerator(address=319);
 317:
                    return oscar;
 319:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(offset) { _fun00022_ip = 570; continue _fun00021 }
 328:
                    offset = report.files;
                    foxtrot = offset.length;
                    offset = 0;
                    if(!(offset === foxtrot)) { _fun00022_ip = 360; continue _fun00021 }
 345:
                    offset = verify;
                    offset = offset.content;
                    if(!(yankee !== offset)) { _fun00022_ip = 521; continue _fun00021 }
 360:
                    foxtrot = report.files;
                    yankee = foxtrot.every;
                    offset = function(argFoo) {
                        entity = argFoo;
                        mike = entity.status;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 22;
                        zulu = zulu[entity];
                        entity = undefined;
                        entity = tango.bind(entity)(zulu);
                        entity = entity.CloudUploadStatus;
                        entity = entity.COMPLETED;
                        entity = mike === entity;
                        return entity;
                    };
                    yankee = yankee.bind(foxtrot)(offset);
                    offset = global;
                    if(yankee) { _fun00022_ip = 423; continue _fun00021 }
 389:
                    backup = offset.Error;
                    yankee = backup.prototype;
                    foxtrot = Object.create(yankee, {constructor: {value: backup}});
                    result = 'Not all attachments were uploaded successfully';
                    echo = foxtrot;
                    yankee = new echo[backup](result, output);
                    yankee = yankee instanceof Object ? yankee : foxtrot;
                    throw yankee;
 423:
                    foxtrot = _closure1_slot19;
                    yankee = foxtrot.log;
                    kilo = report.id;
                    offset = offset.HermesInternal;
                    backup = offset.concat;
                    offset = 'All uploads complete, sending message to discord for ';
                    offset = backup.bind(offset)(kilo);
                    offset = yankee.bind(foxtrot)(offset);
                    yankee = report._createMessage;
                    offset = verify;
                    foxtrot = romeo;
                    verify = null;
                    if(!(verify == foxtrot)) { _fun00022_ip = 495; continue _fun00021 }
 485:
                    verify = report._defaultHandleRequestError;
                    _fun00022_ip = 498; continue _fun00021;
 495:
                    verify = romeo;
 498:
                    options = yankee.bind(report)(offset, verify, options);
                    SaveGenerator(address=509);
 507:
                    return options;
 509:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00022_ip = 518; continue _fun00021 }
 515: // try_end1
                    return options;
 518:
                    return options;
 521: // try_start_2
                    verify = _closure1_slot19;
                    options = verify.log;
                    yankee = report.id;
                    golf = global;
                    golf = golf.HermesInternal;
                    offset = golf.concat;
                    golf = 'All uploads cancelled, skipping send message to discord for ';
                    golf = offset.bind(golf)(yankee);
                    golf = options.bind(verify)(golf);
 565: // try_end2
                    golf = undefined;
                    return golf;
 570:
                    return oscar;
 573:
                    return tango;
 576: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=5);
                    tango = report._handleException;
                    tango = tango.bind(report)(oscar);
                    _fun00022_ip = 601; continue _fun00021;
 591:
                    tango = report._handleAborted;
                    tango = tango.bind(report)();
 601:
                    return zulu;
 604:
                    return mike;
 607:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot1 = golf;
        golf = function() { // Original name: sendMessage
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
        entity[1] = report;
        report = {};
        golf = '_defaultHandleRequestError';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                tango = argBar;
                entity = this;
                entity = entity._raiseEndpointErrors;
                if(entity) { _fun00024_ip = 19; continue _fun00023 }
 15:
                entity = undefined;
                return entity;
 19:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 23;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                zulu = entity.APIError;
                entity = {};
                mike = null;
                report = mike != tango;
                mike = 400;
                if(!report) { _fun00024_ip = 70; continue _fun00023 }
 67:
                mike = tango;
 70:
                entity['status'] = mike;
                mike = argFoo;
                entity['body'] = mike;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                golf = mike;
                oscar = entity;
                entity = new golf[zulu](oscar, report);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = '_trackMessageSentWithAttachments';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                backup = argFoo;
                zulu = argBar;
                golf = this;
                var _closure3_slot0 = zulu;
                mike = null;
                if(!(mike != backup)) { _fun00026_ip = 464; continue _fun00025 }
 24:
                kilo = backup.attachments;
                if(!(mike == kilo)) { _fun00026_ip = 57; continue _fun00025 }
 34:
                report = backup.message;
                oscar = mike == report;
                tango = undefined;
                if(oscar) { _fun00026_ip = 54; continue _fun00025 }
 48:
                tango = report.attachments;
 54:
                kilo = tango;
 57:
                if(!(mike != kilo)) { _fun00026_ip = 464; continue _fun00025 }
 64:
                tango = kilo.length;
                oscar = 0;
                if(!(oscar !== tango)) { _fun00026_ip = 464; continue _fun00025 }
 78:
                zulu = zulu[oscar];
                report = zulu.item;
                options = mike == report;
                zulu = undefined;
                tango = undefined;
                if(options) { _fun00026_ip = 104; continue _fun00025 }
 98:
                tango = report.target;
 104:
                if(!(mike == tango)) { _fun00026_ip = 143; continue _fun00025 }
 108:
                report = _closure1_slot0;
                options = _closure1_slot2;
                mike = 18;
                mike = options[mike];
                mike = report.bind(zulu)(mike);
                mike = mike.UploadTargets;
                tango = mike.MESSAGE_ATTACHMENT;
 143:
                report = _closure1_slot0;
                verify = _closure1_slot2;
                mike = 18;
                mike = verify[mike];
                mike = report.bind(zulu)(mike);
                mike = mike.UploadTargets;
                mike = mike.MESSAGE_ATTACHMENT;
                if(!(tango === mike)) { _fun00026_ip = 464; continue _fun00025 }
 185:
                foxtrot = new Array(0);
                var _closure3_slot1 = foxtrot;
                romeo = new Array(0);
                var _closure3_slot2 = romeo;
                yankee = new Array(0);
                var _closure3_slot3 = yankee;
                offset = new Array(0);
                var _closure3_slot4 = offset;
                verify = new Array(0);
                var _closure3_slot5 = verify;
                report = new Array(0);
                var _closure3_slot6 = report;
                mike = kilo.map;
                entity = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        zulu = argFoo;
                        var _closure4_slot0 = zulu;
                        entity = zulu.id;
                        report = null;
                        if(!(report != entity)) { _fun00028_ip = 290; continue _fun00027 }
 23:
                        entity = zulu.content_type;
                        if(!(report != entity)) { _fun00028_ip = 290; continue _fun00027 }
 36:
                        entity = zulu.size;
                        if(!(report != entity)) { _fun00028_ip = 290; continue _fun00027 }
 48:
                        entity = zulu.width;
                        if(!(report != entity)) { _fun00028_ip = 290; continue _fun00027 }
 60:
                        entity = zulu.height;
                        if(!(report != entity)) { _fun00028_ip = 290; continue _fun00027 }
 72:
                        golf = _closure3_slot1;
                        oscar = golf.push;
                        tango = zulu.id;
                        tango = oscar.bind(golf)(tango);
                        golf = _closure3_slot2;
                        oscar = golf.push;
                        tango = zulu.content_type;
                        tango = oscar.bind(golf)(tango);
                        golf = _closure3_slot3;
                        oscar = golf.push;
                        tango = zulu.size;
                        tango = oscar.bind(golf)(tango);
                        golf = _closure3_slot4;
                        oscar = golf.push;
                        tango = zulu.width;
                        tango = oscar.bind(golf)(tango);
                        oscar = _closure3_slot5;
                        tango = oscar.push;
                        zulu = zulu.height;
                        zulu = tango.bind(oscar)(zulu);
                        tango = _closure3_slot0;
                        zulu = tango.find;
                        mike = function(argFoo) {
                            entity = argFoo;
                            mike = entity.filename;
                            entity = _closure4_slot0;
                            entity = entity.filename;
                            entity = mike === entity;
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
                        oscar = report == mike;
                        tango = undefined;
                        if(oscar) { _fun00028_ip = 204; continue _fun00027 }
 199:
                        tango = mike.item;
 204:
                        tango = report != tango;
                        if(!tango) { _fun00028_ip = 233; continue _fun00027 }
 211:
                        oscar = report == mike;
                        golf = undefined;
                        if(oscar) { _fun00028_ip = 225; continue _fun00027 }
 220:
                        golf = mike.item;
 225:
                        oscar = 'createdUsingInAppCamera';
                        tango = oscar in golf;
 233:
                        if(!tango) { _fun00028_ip = 260; continue _fun00027 }
 236:
                        oscar = report == mike;
                        zulu = undefined;
                        if(oscar) { _fun00028_ip = 256; continue _fun00027 }
 245:
                        oscar = mike.item;
                        zulu = oscar.createdUsingInAppCamera;
 256:
                        tango = report != zulu;
 260:
                        zulu = false;
                        if(!tango) { _fun00028_ip = 276; continue _fun00027 }
 265:
                        mike = mike.item;
                        zulu = mike.createdUsingInAppCamera;
 276:
                        mike = _closure3_slot6;
                        entity = mike.push;
                        entity = entity.bind(mike)(zulu);
 290:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = mike.bind(kilo)(entity);
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 24;
                entity = tango[entity];
                tango = mike.bind(zulu)(entity);
                zulu = tango.track;
                entity = _closure1_slot14;
                mike = entity.MESSAGE_SENT_WITH_ATTACHMENTS;
                entity = {};
                kilo = kilo.length;
                entity['num_attachments'] = kilo;
                kilo = backup.id;
                entity['message_id'] = kilo;
                backup = backup.channel_id;
                entity['channel'] = backup;
                entity['attachment_ids'] = foxtrot;
                entity['attachment_mime_types'] = romeo;
                entity['attachment_sizes'] = yankee;
                entity['attachment_widths'] = offset;
                entity['attachment_heights'] = verify;
                verify = _closure1_slot11;
                offset = verify.videoUploadQuality;
                entity['video_upload_quality'] = offset;
                offset = verify.dataSavingMode;
                entity['data_saving_mode'] = offset;
                verify = verify.dataSavingMode;
                entity['low_quality_image_mode'] = verify;
                verify = _closure1_slot12;
                options = verify.getType;
                options = options.bind(verify)();
                entity['network_connection'] = options;
                entity['attachment_created_in_apps'] = report;
                report = golf.preCompressionFileSizes;
                report = report.length;
                report = report > oscar;
                if(!report) { _fun00026_ip = 448; continue _fun00025 }
 430:
                oscar = {};
                golf = golf.preCompressionFileSizes;
                oscar['attachment_precompression_sizes'] = golf;
                report = oscar;
 448:
                output = entity;
                sizing = report;
                report = copyDataProperties(output, sizing);
                entity = zulu.bind(tango)(mike, entity);
 464:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'observeCompressionProgress';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            report = argFoo;
            mike = this;
            var _closure3_slot0 = mike;
            zulu = function() { // Original name: cleanUp
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    mike = _closure3_slot0;
                    tango = mike.mediaEventSubscriptions;
                    zulu = tango.get;
                    mike = mike._file;
                    mike = mike.id;
                    zulu = zulu.bind(tango)(mike);
                    mike = null;
                    if(!(mike != zulu)) { _fun00030_ip = 50; continue _fun00029 }
 40:
                    mike = zulu.remove;
                    mike = mike.bind(zulu)();
 50:
                    entity = _closure3_slot0;
                    tango = entity.mediaEventSubscriptions;
                    zulu = tango.delete;
                    mike = entity._file;
                    mike = mike.id;
                    mike = zulu.bind(tango)(mike);
                    mike = entity.uploadItems;
                    entity = mike.clear;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot1 = zulu;
            tango = report.forEach;
            zulu = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = argFoo;
                    report = entity.item;
                    zulu = report.platform;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 25;
                    mike = mike[entity];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    mike = mike.UploadPlatform;
                    mike = mike.REACT_NATIVE;
                    if(!(zulu === mike)) { _fun00032_ip = 93; continue _fun00031 }
 55:
                    mike = 0;
                    report['compressionProgress'] = mike;
                    mike = _closure3_slot0;
                    tango = mike.uploadItems;
                    zulu = tango.set;
                    mike = report.uri;
                    mike = zulu.bind(tango)(mike, report);
 93:
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu);
            tango = mike.mediaEventSubscriptions;
            zulu = tango.set;
            mike = mike._file;
            mike = mike.id;
            golf = _closure1_slot20;
            oscar = golf.addListener;
            report = 'compression-progress';
            entity = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.uri;
                    tango = entity.progress;
                    mike = _closure3_slot0;
                    zulu = mike.uploadItems;
                    mike = zulu.has;
                    mike = mike.bind(zulu)(oscar);
                    if(!mike) { _fun00034_ip = 369; continue _fun00033 }
 44:
                    mike = _closure3_slot0;
                    report = mike.uploadItems;
                    zulu = report.get;
                    zulu = zulu.bind(report)(oscar);
                    zulu['compressionProgress'] = tango;
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 26;
                    tango = tango[zulu];
                    zulu = undefined;
                    oscar = report.bind(zulu)(tango);
                    tango = oscar.meanBy;
                    report = mike.uploadItems;
                    mike = report.values;
                    backup = mike.bind(report)();
                    mike = new Array(0);
                    foxtrot = 0;
                    kilo = mike;
                    report = arraySpread(kilo, backup, foxtrot);
                    report = 'compressionProgress';
                    golf = tango.bind(oscar)(mike, report);
                    tango = 100;
                    if(!(!(golf >= tango))) { _fun00034_ip = 244; continue _fun00033 }
 146:
                    oscar = _closure3_slot0;
                    mike = {};
                    backup = oscar._file;
                    kilo = mike;
                    verify = copyDataProperties(kilo, backup);
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    options = 16;
                    verify = romeo[options];
                    verify = yankee.bind(zulu)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    options = romeo[options];
                    options = yankee.bind(zulu)(options);
                    options = options.t;
                    options = options.7lc4V1;
                    verify = verify.bind(offset)(options);
                    options = 'name';
                    mike[options] = verify;
                    mike[report] = golf;
                    oscar['_file'] = mike;
                    _fun00034_ip = 341; continue _fun00033;
 244:
                    mike = _closure3_slot1;
                    mike = mike.bind(zulu)();
                    mike = _closure3_slot0;
                    mike = mike._file;
                    oscar = mike.items;
                    mike = null;
                    if(!(mike != oscar)) { _fun00034_ip = 291; continue _fun00033 }
 274:
                    zulu = oscar.forEach;
                    mike = function(argFoo) {
                        entity = argFoo;
                        mike = entity.item;
                        entity = 100;
                        mike['compressionProgress'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    mike = zulu.bind(oscar)(mike);
 291:
                    zulu = _closure3_slot0;
                    mike = {};
                    backup = zulu._file;
                    kilo = mike;
                    oscar = copyDataProperties(kilo, backup);
                    oscar = zulu._file;
                    golf = oscar.name;
                    oscar = 'name';
                    mike[oscar] = golf;
                    mike[report] = tango;
                    zulu['_file'] = mike;
 341:
                    tango = _closure3_slot0;
                    zulu = tango.emit;
                    mike = tango._file;
                    entity = 'compression-progress';
                    entity = zulu.bind(tango)(entity, mike);
 369:
                    entity = undefined;
                    return entity;
                }
            };
            entity = oscar.bind(golf)(report, entity);
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = '_createMessage';
        report['key'] = golf;
        golf = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    StartGenerator();
                    source = argFoo;
                    oscar = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00036_ip = 1319; continue _fun00035 }
 18:
                    var _closure4_slot0 = oscar;
                    romeo = source;
                    verify = argBar;
                    zulu = undefined;
                    report = undefined;
                    golf = undefined;
                    tango = undefined;
                    sizing = undefined;
                    var _closure4_slot2 = zulu;
                    kilo = undefined;
                    var _closure4_slot3 = zulu;
                    offset = undefined;
                    var _closure4_slot4 = zulu;
                    foxtrot = undefined;
                    var _closure4_slot5 = zulu;
                    var _closure4_slot1 = oscar;
                    output = _closure1_slot1;
                    result = _closure1_slot2;
                    yankee = 27;
                    yankee = result[yankee];
                    update = output.bind(zulu)(yankee);
                    echo = update.prepareMessagePayload;
                    papa = oscar._token;
                    context = oscar.files;
                    config = argBaz;
                    target = update;
                    record = source;
                    yankee = target[echo](papa, context, record, config, sequence);
                    output = yankee.body;
                    sizing = output;
                    _closure4_slot2 = output;
                    yankee = yankee.headers;
                    kilo = yankee;
                    _closure4_slot3 = yankee;
                    output = oscar._method;
                    yankee = 'POST';
                    if(!(yankee !== output)) { _fun00036_ip = 192; continue _fun00035 }
 159:
                    output = _closure1_slot0;
                    result = _closure1_slot2;
                    yankee = 14;
                    yankee = result[yankee];
                    yankee = output.bind(zulu)(yankee);
                    yankee = yankee.HTTP;
                    yankee = yankee.patch;
                    _fun00036_ip = 223; continue _fun00035;
 192:
                    result = _closure1_slot0;
                    echo = _closure1_slot2;
                    output = 14;
                    output = echo[output];
                    output = result.bind(zulu)(output);
                    output = output.HTTP;
                    yankee = output.post;
 223:
                    offset = yankee;
                    _closure4_slot4 = yankee;
 230: // try_start_0
                    yankee = oscar._file;
                    output = yankee.items;
                    foxtrot = output;
                    yankee = null;
                    if(!(yankee != output)) { _fun00036_ip = 269; continue _fun00035 }
 251:
                    result = foxtrot;
                    output = result.forEach;
                    foxtrot = function(argFoo) {
                        entity = argFoo;
                        mike = entity.item;
                        entity = 100;
                        mike['progress'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    foxtrot = output.bind(result)(foxtrot);
 269:
                    foxtrot = {};
                    context = oscar._file;
                    papa = foxtrot;
                    output = copyDataProperties(papa, context);
                    source = _closure1_slot0;
                    control = _closure1_slot2;
                    output = 16;
                    result = control[output];
                    result = source.bind(zulu)(result);
                    update = result.intl;
                    echo = update.string;
                    result = control[output];
                    result = source.bind(zulu)(result);
                    result = result.t;
                    result = result.Dmx3f3;
                    echo = echo.bind(update)(result);
                    result = 'name';
                    foxtrot[result] = echo;
                    echo = 100;
                    result = 'progress';
                    foxtrot[result] = echo;
                    oscar['_file'] = foxtrot;
                    foxtrot = control[output];
                    foxtrot = source.bind(zulu)(foxtrot);
                    update = foxtrot.intl;
                    echo = update.string;
                    foxtrot = control[output];
                    foxtrot = source.bind(zulu)(foxtrot);
                    foxtrot = foxtrot.t;
                    foxtrot = foxtrot.FeCCCw;
                    echo = echo.bind(update)(foxtrot);
                    foxtrot = new Array(8);
                    foxtrot[0] = echo;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    vacuum = echo.intl;
                    update = vacuum.string;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    echo = echo.t;
                    echo = echo.+q6H7+;
                    echo = update.bind(vacuum)(echo);
                    foxtrot[1] = echo;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    vacuum = echo.intl;
                    update = vacuum.string;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    echo = echo.t;
                    echo = echo.9jhZ0N;
                    echo = update.bind(vacuum)(echo);
                    foxtrot[2] = echo;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    vacuum = echo.intl;
                    update = vacuum.string;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    echo = echo.t;
                    echo = echo.CGSHsb;
                    echo = update.bind(vacuum)(echo);
                    foxtrot[3] = echo;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    vacuum = echo.intl;
                    update = vacuum.string;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    echo = echo.t;
                    echo = echo.1yQ2Cw;
                    echo = update.bind(vacuum)(echo);
                    foxtrot[4] = echo;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    vacuum = echo.intl;
                    update = vacuum.string;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    echo = echo.t;
                    echo = echo.SuXJy8;
                    echo = update.bind(vacuum)(echo);
                    foxtrot[5] = echo;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    vacuum = echo.intl;
                    update = vacuum.string;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    echo = echo.t;
                    echo = echo.hKsCRE;
                    echo = update.bind(vacuum)(echo);
                    foxtrot[6] = echo;
                    echo = control[output];
                    echo = source.bind(zulu)(echo);
                    update = echo.intl;
                    echo = update.string;
                    output = control[output];
                    output = source.bind(zulu)(output);
                    output = output.t;
                    output = output.5ue6h4;
                    output = echo.bind(update)(output);
                    foxtrot[7] = output;
                    _closure4_slot5 = foxtrot;
                    foxtrot = global;
                    echo = foxtrot.setInterval;
                    output = function() {
                        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                            tango = _closure1_slot1;
                            entity = _closure1_slot2;
                            oscar = 26;
                            mike = entity[oscar];
                            entity = undefined;
                            golf = tango.bind(entity)(mike);
                            report = golf.sample;
                            tango = _closure4_slot5;
                            tango = report.bind(golf)(tango);
                            report = null;
                            if(!(report != tango)) { _fun00038_ip = 146; continue _fun00037 }
 49:
                            report = _closure1_slot1;
                            zulu = _closure1_slot2;
                            zulu = zulu[oscar];
                            oscar = report.bind(entity)(zulu);
                            report = oscar.remove;
                            zulu = _closure4_slot5;
                            zulu = report.bind(oscar)(zulu, tango);
                            report = _closure4_slot0;
                            mike = {};
                            options = report._file;
                            verify = mike;
                            zulu = copyDataProperties(verify, options);
                            zulu = 'name';
                            mike[zulu] = tango;
                            zulu = 100;
                            tango = 'progress';
                            mike[tango] = zulu;
                            report['_file'] = mike;
                            zulu = report.emit;
                            mike = report._file;
                            mike = zulu.bind(report)(tango, mike);
 146:
                            return entity;
                        }
                    };
                    foxtrot = 4000;
                    foxtrot = echo.bind(zulu)(output, foxtrot);
                    oscar['processingMessageChangeInterval'] = foxtrot;
                    output = oscar.emit;
                    foxtrot = oscar._file;
                    foxtrot = output.bind(oscar)(result, foxtrot);
                    result = _closure1_slot10;
                    output = result.get;
                    foxtrot = 'send_fail_100';
                    foxtrot = output.bind(result)(foxtrot);
                    if(foxtrot) { _fun00036_ip = 965; continue _fun00035 }
 848:
                    foxtrot = offset;
                    offset = {};
                    output = oscar._url;
                    offset['url'] = output;
                    offset['body'] = sizing;
                    offset['headers'] = kilo;
                    context = _closure1_slot18;
                    papa = offset;
                    kilo = copyDataProperties(papa, context);
                    sizing = false;
                    kilo = 'rejectWithError';
                    offset[kilo] = sizing;
                    offset = foxtrot.bind(zulu)(offset);
                    SaveGenerator(address=903);
 901:
                    return offset;
 903:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=12);
                    if(foxtrot) { _fun00036_ip = 962; continue _fun00035 }
 909:
                    tango = offset;
                    kilo = _closure1_slot1;
                    sizing = _closure1_slot2;
                    foxtrot = 28;
                    foxtrot = sizing[foxtrot];
                    output = kilo.bind(zulu)(foxtrot);
                    sizing = output.receiveMessage;
                    kilo = romeo.channel_id;
                    foxtrot = offset.body;
                    romeo = true;
                    romeo = sizing.bind(output)(kilo, foxtrot, romeo);
 957: // try_end0
                    _fun00036_ip = 1220; continue _fun00035;
 962:
                    return offset;
 965: // try_start_1
                    foxtrot = _closure1_slot19;
                    romeo = foxtrot.log;
                    offset = 'Skipping message send with upload because send_fail_100 is enabled';
                    offset = romeo.bind(foxtrot)(offset);
                    offset = verify;
                    if(!(yankee != offset)) { _fun00036_ip = 1016; continue _fun00035 }
 993:
                    foxtrot = verify;
                    romeo = {};
                    yankee = 500;
                    offset = function() {
                        entity = null;
                        return entity;
                    };
                    offset = foxtrot.bind(zulu)(romeo, yankee, offset);
 1016:
                    yankee = oscar._handleComplete;
                    offset = {};
                    offset = yankee.bind(oscar)(offset);
 1029: // try_end1
                    offset = undefined;
                    return offset;
 1034: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=13);
                    offset = oscar._aborted;
                    if(offset) { _fun00036_ip = 1293; continue _fun00035 }
 1048:
                    offset = backup;
                    yankee = offset.status;
                    offset = 400;
                    if(!(yankee >= offset)) { _fun00036_ip = 1107; continue _fun00035 }
 1066:
                    yankee = verify;
                    offset = null;
                    if(!(offset != yankee)) { _fun00036_ip = 1107; continue _fun00035 }
 1075:
                    yankee = verify;
                    verify = backup;
                    offset = verify.body;
                    verify = verify.status;
                    options = function() {
                        tango = _closure1_slot3;
                        zulu = undefined;
                        mike = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(mike) { _fun00040_ip = 114; continue _fun00039 }
 7:
                                    tango = _closure4_slot4;
                                    mike = {};
                                    report = _closure4_slot1;
                                    report = report._url;
                                    mike['url'] = report;
                                    report = {};
                                    golf = _closure4_slot2;
                                    options = report;
                                    oscar = copyDataProperties(options, golf);
                                    golf = argFoo;
                                    options = report;
                                    oscar = copyDataProperties(options, golf);
                                    mike['body'] = report;
                                    zulu = _closure4_slot3;
                                    mike['headers'] = zulu;
                                    golf = _closure1_slot18;
                                    options = mike;
                                    zulu = copyDataProperties(options, golf);
                                    report = false;
                                    zulu = 'rejectWithError';
                                    mike[zulu] = report;
                                    zulu = undefined;
                                    mike = tango.bind(zulu)(mike);
                                    SaveGenerator(address=102);
 100:
                                    return mike;
 102:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(tango) { _fun00040_ip = 111; continue _fun00039 }
 108:
                                    return zulu;
 111:
                                    return mike;
 114:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        mike = tango.bind(zulu)(mike);
                        var _closure5_slot0 = mike;
                        entity = function() {
                            entity = undefined;
                            tango = _closure5_slot0;
                            zulu = tango.apply;
                            entity = arguments;
                            mike = entity;
                            entity = this;
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        return entity;
                    };
                    options = options.bind(zulu)();
                    options = yankee.bind(zulu)(offset, verify, options);
 1107:
                    offset = _closure1_slot19;
                    verify = offset.error;
                    options = backup;
                    kilo = null;
                    options = kilo == options;
                    sizing = undefined;
                    if(options) { _fun00036_ip = 1138; continue _fun00035 }
 1130:
                    options = backup;
                    sizing = options.status;
 1138:
                    options = global;
                    foxtrot = options.JSON;
                    romeo = foxtrot.stringify;
                    yankee = backup;
                    kilo = kilo == yankee;
                    yankee = undefined;
                    if(kilo) { _fun00036_ip = 1169; continue _fun00035 }
 1164:
                    yankee = backup.body;
 1169:
                    record = romeo.bind(foxtrot)(yankee);
                    sequence = oscar.id;
                    options = options.HermesInternal;
                    foxtrot = options.concat;
                    target = 'Error sending message: ';
                    context = ' - ';
                    config = ' for ';
                    papa = sizing;
                    options = target[foxtrot](papa, context, record, config, sequence, vacuum);
                    options = verify.bind(offset)(options);
 1220:
                    offset = oscar._trackMessageSentWithAttachments;
                    verify = tango;
                    report = verify;
                    options = null;
                    yankee = options == verify;
                    verify = undefined;
                    if(yankee) { _fun00036_ip = 1250; continue _fun00035 }
 1245:
                    verify = report.body;
 1250:
                    report = oscar.files;
                    report = offset.bind(oscar)(verify, report);
                    report = oscar._handleComplete;
                    golf = tango;
                    options = options == tango;
                    tango = undefined;
                    if(options) { _fun00036_ip = 1285; continue _fun00035 }
 1280:
                    tango = golf.body;
 1285:
                    tango = report.bind(oscar)(tango);
                    return zulu;
 1293:
                    tango = _closure1_slot19;
                    zulu = tango.log;
                    mike = 'Upload was aborted for send message; skip handling request error';
                    mike = zulu.bind(tango)(mike);
                    mike = undefined;
                    return mike;
 1319:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot0 = golf;
        oscar = function() { // Original name: _createMessage
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
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 29;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/uploader/native/CloudUploader.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();