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
        _fun82153: for(var _fun82153_ip = 0; ; ) switch(_fun82153_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun82153_ip = 46; continue _fun82153 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun82153_ip = 55; continue _fun82153 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun82153_ip = 345; continue _fun82153 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun82153_ip = 323; continue _fun82153 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun82153_ip = 283; continue _fun82153 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun82153_ip = 270; continue _fun82153 }
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
            if(!golf) { _fun82153_ip = 163; continue _fun82153 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun82153_ip = 179; continue _fun82153 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun82153_ip = 249; continue _fun82153 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun82153_ip = 249; continue _fun82153 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun82153_ip = 234; continue _fun82153 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun82153_ip = 247; continue _fun82153 }
 234:
            verify = _closure1_slot22;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun82153_ip = 265; continue _fun82153;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun82153_ip = 283; continue _fun82153;
 270:
            golf = _closure1_slot22;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun82153_ip = 323; continue _fun82153 }
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
            if(!tango) { _fun82153_ip = 330; continue _fun82153 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun82154: for(var _fun82154_ip = 0; ; ) switch(_fun82154_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun82154_ip = 56; continue _fun82154 }
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
                    _fun82154_ip = 67; continue _fun82154;
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
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun82155: for(var _fun82155_ip = 0; ; ) switch(_fun82155_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun82155_ip = 23; continue _fun82155 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun82155_ip = 33; continue _fun82155 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun82155_ip = 70; continue _fun82155 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun82155_ip = 55; continue _fun82155 }
 70:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun82156: for(var _fun82156_ip = 0; ; ) switch(_fun82156_ip) {
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
            if(entity) { _fun82156_ip = 51; continue _fun82156 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun82156_ip = 92; continue _fun82156;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun82156_ip = 71; continue _fun82156 }
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
        _fun82157: for(var _fun82157_ip = 0; ; ) switch(_fun82157_ip) {
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
            _fun82157_ip = 76; continue _fun82157;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
            _fun82161: for(var _fun82161_ip = 0; ; ) switch(_fun82161_ip) {
 0:
                golf = arguments[2];
                oscar = this;
                report = undefined;
                if(!(golf === report)) { _fun82161_ip = 18; continue _fun82161 }
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
                _fun82163: for(var _fun82163_ip = 0; ; ) switch(_fun82163_ip) {
 0:
                    StartGenerator();
                    zulu = argFoo;
                    mike = arguments[1];
                    oscar = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun82163_ip = 973; continue _fun82163 }
 21:
                    var _closure4_slot0 = oscar;
                    golf = zulu;
                    var _closure4_slot1 = zulu;
                    zulu = undefined;
                    if(!(mike === zulu)) { _fun82163_ip = 40; continue _fun82163 }
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
                    if(tango) { _fun82163_ip = 970; continue _fun82163 }
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
                            _fun82165: for(var _fun82165_ip = 0; ; ) switch(_fun82165_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(mike) { _fun82165_ip = 235; continue _fun82165 }
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
                                SaveGenerator(address=174);
 172:
                                return mike;
 174:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(oscar) { _fun82165_ip = 232; continue _fun82165 }
 180:
                                _closure4_slot5 = mike;
                                oscar = _closure4_slot4;
                                oscar = oscar._aborted;
                                if(!oscar) { _fun82165_ip = 229; continue _fun82165 }
 197:
                                oscar = _closure1_slot1;
                                report = _closure1_slot2;
                                report = report[golf];
                                oscar = oscar.bind(zulu)(report);
                                report = oscar.endBackgroundTask;
                                tango = _closure4_slot5;
                                tango = report.bind(oscar)(tango);
 229:
                                return zulu;
 232:
                                return mike;
 235:
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
 201: // try_start_0
                    options = golf;
                    oscar['files'] = options;
                    config = _closure2_slot3;
                    offset = function(argFoo, argBar, argBaz, argCorge) { // Original name: _superPropGet
                        _fun82167: for(var _fun82167_ip = 0; ; ) switch(_fun82167_ip) {
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
                            if(!options) { _fun82167_ip = 44; continue _fun82167 }
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
                            if(!zulu) { _fun82167_ip = 83; continue _fun82167 }
 76:
                            entity = function(argFoo) {
                                tango = _closure5_slot1;
                                zulu = tango.apply;
                                mike = _closure5_slot0;
                                entity = argFoo;
                                entity = zulu.bind(tango)(mike, entity);
                                return entity;
                            };
 83:
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
                    if(options) { _fun82163_ip = 783; continue _fun82163 }
 427:
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
                    SaveGenerator(address=480);
 478:
                    return options;
 480:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun82163_ip = 780; continue _fun82163 }
 489:
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
                    if(!(!(options > verify))) { _fun82163_ip = 727; continue _fun82163 }
 631:
                    output = foxtrot;
                    result = sizing;
                    verify = result.getMaxTotalAttachmentSize;
                    verify = verify.bind(result)();
                    if(!(!(output > verify))) { _fun82163_ip = 674; continue _fun82163 }
 651:
                    verify = backup;
                    verify = verify.bind(zulu)();
                    romeo = verify;
                    verify = verify.done;
                    if(verify) { _fun82163_ip = 783; continue _fun82163 }
 669:
                    _fun82163_ip = 427; continue _fun82163;
 674:
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
 722: // try_end0
                    verify = undefined;
                    return verify;
 727: // try_start_1
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
 775: // try_end1
                    verify = undefined;
                    return verify;
 780:
                    return options;
 783: // try_start_2
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
                            _fun82171: for(var _fun82171_ip = 0; ; ) switch(_fun82171_ip) {
 0:
                                entity = _closure4_slot0;
                                mike = entity._raiseEndpointErrors;
                                if(mike) { _fun82171_ip = 32; continue _fun82171 }
 19:
                                zulu = _closure5_slot0;
                                mike = undefined;
                                mike = zulu.bind(mike)(mike);
                                _fun82171_ip = 46; continue _fun82171;
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
 901: // try_end2
                    return report;
 904: // catch_target0 // catch_target1 // catch_target2
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
 970:
                    return mike;
 973:
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
                _fun82175: for(var _fun82175_ip = 0; ; ) switch(_fun82175_ip) {
 0:
                    StartGenerator();
                    golf = arguments[0];
                    mike = arguments[1];
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun82175_ip = 609; continue _fun82175 }
 19:
                    zulu = undefined;
                    if(!(golf === zulu)) { _fun82175_ip = 27; continue _fun82175 }
 25:
                    golf = {};
 27:
                    verify = golf;
                    if(!(mike === zulu)) { _fun82175_ip = 36; continue _fun82175 }
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
                    if(oscar) { _fun82175_ip = 606; continue _fun82175 }
 56:
                    oscar = report._aborted;
                    if(oscar) { _fun82175_ip = 593; continue _fun82175 }
 68:
                    oscar = report._token;
                    yankee = '';
                    if(!(yankee === oscar)) { _fun82175_ip = 132; continue _fun82175 }
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
                    _fun82175_ip = 603; continue _fun82175;
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
                    if(!tango) { _fun82175_ip = 213; continue _fun82175 }
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
                    if(oscar) { _fun82175_ip = 575; continue _fun82175 }
 238:
                    if(tango) { _fun82175_ip = 244; continue _fun82175 }
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
                    if(offset) { _fun82175_ip = 572; continue _fun82175 }
 328:
                    offset = report.files;
                    foxtrot = offset.length;
                    offset = 0;
                    if(!(offset === foxtrot)) { _fun82175_ip = 360; continue _fun82175 }
 345:
                    offset = verify;
                    offset = offset.content;
                    if(!(yankee !== offset)) { _fun82175_ip = 523; continue _fun82175 }
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
                    if(yankee) { _fun82175_ip = 425; continue _fun82175 }
 391:
                    backup = offset.Error;
                    yankee = backup.prototype;
                    foxtrot = Object.create(yankee, {constructor: {value: backup}});
                    result = 'Not all attachments were uploaded successfully';
                    echo = foxtrot;
                    yankee = new echo[backup](result, output);
                    yankee = yankee instanceof Object ? yankee : foxtrot;
                    throw yankee;
 425:
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
                    if(!(verify == foxtrot)) { _fun82175_ip = 497; continue _fun82175 }
 487:
                    verify = report._defaultHandleRequestError;
                    _fun82175_ip = 500; continue _fun82175;
 497:
                    verify = romeo;
 500:
                    options = yankee.bind(report)(offset, verify, options);
                    SaveGenerator(address=511);
 509:
                    return options;
 511:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun82175_ip = 520; continue _fun82175 }
 517: // try_end1
                    return options;
 520:
                    return options;
 523: // try_start_2
                    verify = _closure1_slot19;
                    options = verify.log;
                    yankee = report.id;
                    golf = global;
                    golf = golf.HermesInternal;
                    offset = golf.concat;
                    golf = 'All uploads cancelled, skipping send message to discord for ';
                    golf = offset.bind(golf)(yankee);
                    golf = options.bind(verify)(golf);
 567: // try_end2
                    golf = undefined;
                    return golf;
 572:
                    return oscar;
 575:
                    return tango;
 578: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=5);
                    tango = report._handleException;
                    tango = tango.bind(report)(oscar);
                    _fun82175_ip = 603; continue _fun82175;
 593:
                    tango = report._handleAborted;
                    tango = tango.bind(report)();
 603:
                    return zulu;
 606:
                    return mike;
 609:
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
            _fun82178: for(var _fun82178_ip = 0; ; ) switch(_fun82178_ip) {
 0:
                tango = argBar;
                entity = this;
                entity = entity._raiseEndpointErrors;
                if(entity) { _fun82178_ip = 19; continue _fun82178 }
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
                if(!report) { _fun82178_ip = 70; continue _fun82178 }
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
            _fun82179: for(var _fun82179_ip = 0; ; ) switch(_fun82179_ip) {
 0:
                backup = argFoo;
                zulu = argBar;
                golf = this;
                var _closure3_slot0 = zulu;
                mike = null;
                if(!(mike != backup)) { _fun82179_ip = 466; continue _fun82179 }
 24:
                kilo = backup.attachments;
                if(!(mike == kilo)) { _fun82179_ip = 57; continue _fun82179 }
 34:
                report = backup.message;
                oscar = mike == report;
                tango = undefined;
                if(oscar) { _fun82179_ip = 54; continue _fun82179 }
 48:
                tango = report.attachments;
 54:
                kilo = tango;
 57:
                if(!(mike != kilo)) { _fun82179_ip = 466; continue _fun82179 }
 64:
                tango = kilo.length;
                oscar = 0;
                if(!(oscar !== tango)) { _fun82179_ip = 466; continue _fun82179 }
 78:
                zulu = zulu[oscar];
                report = zulu.item;
                options = mike == report;
                zulu = undefined;
                tango = undefined;
                if(options) { _fun82179_ip = 104; continue _fun82179 }
 98:
                tango = report.target;
 104:
                if(!(mike == tango)) { _fun82179_ip = 143; continue _fun82179 }
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
                if(!(tango === mike)) { _fun82179_ip = 466; continue _fun82179 }
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
                    _fun82180: for(var _fun82180_ip = 0; ; ) switch(_fun82180_ip) {
 0:
                        zulu = argFoo;
                        var _closure4_slot0 = zulu;
                        entity = zulu.id;
                        report = null;
                        if(!(report != entity)) { _fun82180_ip = 292; continue _fun82180 }
 23:
                        entity = zulu.content_type;
                        if(!(report != entity)) { _fun82180_ip = 292; continue _fun82180 }
 36:
                        entity = zulu.size;
                        if(!(report != entity)) { _fun82180_ip = 292; continue _fun82180 }
 48:
                        entity = zulu.width;
                        if(!(report != entity)) { _fun82180_ip = 292; continue _fun82180 }
 60:
                        entity = zulu.height;
                        if(!(report != entity)) { _fun82180_ip = 292; continue _fun82180 }
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
                        if(oscar) { _fun82180_ip = 206; continue _fun82180 }
 201:
                        tango = mike.item;
 206:
                        tango = report != tango;
                        if(!tango) { _fun82180_ip = 235; continue _fun82180 }
 213:
                        oscar = report == mike;
                        golf = undefined;
                        if(oscar) { _fun82180_ip = 227; continue _fun82180 }
 222:
                        golf = mike.item;
 227:
                        oscar = 'createdUsingInAppCamera';
                        tango = oscar in golf;
 235:
                        if(!tango) { _fun82180_ip = 262; continue _fun82180 }
 238:
                        oscar = report == mike;
                        zulu = undefined;
                        if(oscar) { _fun82180_ip = 258; continue _fun82180 }
 247:
                        oscar = mike.item;
                        zulu = oscar.createdUsingInAppCamera;
 258:
                        tango = report != zulu;
 262:
                        zulu = false;
                        if(!tango) { _fun82180_ip = 278; continue _fun82180 }
 267:
                        mike = mike.item;
                        zulu = mike.createdUsingInAppCamera;
 278:
                        mike = _closure3_slot6;
                        entity = mike.push;
                        entity = entity.bind(mike)(zulu);
 292:
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
                if(!report) { _fun82179_ip = 450; continue _fun82179 }
 432:
                oscar = {};
                golf = golf.preCompressionFileSizes;
                oscar['attachment_precompression_sizes'] = golf;
                report = oscar;
 450:
                output = entity;
                sizing = report;
                report = copyDataProperties(output, sizing);
                entity = zulu.bind(tango)(mike, entity);
 466:
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
                _fun82183: for(var _fun82183_ip = 0; ; ) switch(_fun82183_ip) {
 0:
                    mike = _closure3_slot0;
                    tango = mike.mediaEventSubscriptions;
                    zulu = tango.get;
                    mike = mike._file;
                    mike = mike.id;
                    zulu = zulu.bind(tango)(mike);
                    mike = null;
                    if(!(mike != zulu)) { _fun82183_ip = 50; continue _fun82183 }
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
                _fun82184: for(var _fun82184_ip = 0; ; ) switch(_fun82184_ip) {
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
                    if(!(zulu === mike)) { _fun82184_ip = 92; continue _fun82184 }
 55:
                    mike = 0;
                    report['compressionProgress'] = mike;
                    mike = _closure3_slot0;
                    tango = mike.uploadItems;
                    zulu = tango.set;
                    mike = report.uri;
                    mike = zulu.bind(tango)(mike, report);
 92:
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
                _fun82185: for(var _fun82185_ip = 0; ; ) switch(_fun82185_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.uri;
                    tango = entity.progress;
                    mike = _closure3_slot0;
                    zulu = mike.uploadItems;
                    mike = zulu.has;
                    mike = mike.bind(zulu)(oscar);
                    if(!mike) { _fun82185_ip = 368; continue _fun82185 }
 43:
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
                    if(!(!(golf >= tango))) { _fun82185_ip = 241; continue _fun82185 }
 145:
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
                    _fun82185_ip = 340; continue _fun82185;
 241:
                    mike = _closure3_slot1;
                    mike = mike.bind(zulu)();
                    mike = _closure3_slot0;
                    mike = mike._file;
                    oscar = mike.items;
                    mike = null;
                    if(!(mike != oscar)) { _fun82185_ip = 290; continue _fun82185 }
 271:
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
 290:
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
 340:
                    tango = _closure3_slot0;
                    zulu = tango.emit;
                    mike = tango._file;
                    entity = 'compression-progress';
                    entity = zulu.bind(tango)(entity, mike);
 368:
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
                _fun82188: for(var _fun82188_ip = 0; ; ) switch(_fun82188_ip) {
 0:
                    StartGenerator();
                    source = argFoo;
                    oscar = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun82188_ip = 1309; continue _fun82188 }
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
                    if(!(yankee !== output)) { _fun82188_ip = 192; continue _fun82188 }
 159:
                    output = _closure1_slot0;
                    result = _closure1_slot2;
                    yankee = 14;
                    yankee = result[yankee];
                    yankee = output.bind(zulu)(yankee);
                    yankee = yankee.HTTP;
                    yankee = yankee.patch;
                    _fun82188_ip = 223; continue _fun82188;
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
                    if(!(yankee != output)) { _fun82188_ip = 271; continue _fun82188 }
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
 271:
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
                        _fun82190: for(var _fun82190_ip = 0; ; ) switch(_fun82190_ip) {
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
                            if(!(report != tango)) { _fun82190_ip = 146; continue _fun82190 }
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
                    if(foxtrot) { _fun82188_ip = 951; continue _fun82188 }
 834:
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
                    SaveGenerator(address=889);
 887:
                    return offset;
 889:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=12);
                    if(foxtrot) { _fun82188_ip = 948; continue _fun82188 }
 895:
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
 943: // try_end0
                    _fun82188_ip = 1210; continue _fun82188;
 948:
                    return offset;
 951: // try_start_1
                    foxtrot = _closure1_slot19;
                    romeo = foxtrot.log;
                    offset = 'Skipping message send with upload because send_fail_100 is enabled';
                    offset = romeo.bind(foxtrot)(offset);
                    offset = verify;
                    if(!(yankee != offset)) { _fun82188_ip = 1004; continue _fun82188 }
 979:
                    foxtrot = verify;
                    romeo = {};
                    yankee = 500;
                    offset = function() {
                        entity = null;
                        return entity;
                    };
                    offset = foxtrot.bind(zulu)(romeo, yankee, offset);
 1004:
                    yankee = oscar._handleComplete;
                    offset = {};
                    offset = yankee.bind(oscar)(offset);
 1017: // try_end1
                    offset = undefined;
                    return offset;
 1022: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=13);
                    offset = oscar._aborted;
                    if(offset) { _fun82188_ip = 1283; continue _fun82188 }
 1036:
                    offset = backup;
                    yankee = offset.status;
                    offset = 400;
                    if(!(yankee >= offset)) { _fun82188_ip = 1097; continue _fun82188 }
 1054:
                    yankee = verify;
                    offset = null;
                    if(!(offset != yankee)) { _fun82188_ip = 1097; continue _fun82188 }
 1063:
                    yankee = verify;
                    verify = backup;
                    offset = verify.body;
                    verify = verify.status;
                    options = function() {
                        tango = _closure1_slot3;
                        zulu = undefined;
                        mike = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun82194: for(var _fun82194_ip = 0; ; ) switch(_fun82194_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(mike) { _fun82194_ip = 114; continue _fun82194 }
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
                                    if(tango) { _fun82194_ip = 111; continue _fun82194 }
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
 1097:
                    offset = _closure1_slot19;
                    verify = offset.error;
                    options = backup;
                    kilo = null;
                    options = kilo == options;
                    sizing = undefined;
                    if(options) { _fun82188_ip = 1128; continue _fun82188 }
 1120:
                    options = backup;
                    sizing = options.status;
 1128:
                    options = global;
                    foxtrot = options.JSON;
                    romeo = foxtrot.stringify;
                    yankee = backup;
                    kilo = kilo == yankee;
                    yankee = undefined;
                    if(kilo) { _fun82188_ip = 1159; continue _fun82188 }
 1154:
                    yankee = backup.body;
 1159:
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
 1210:
                    offset = oscar._trackMessageSentWithAttachments;
                    verify = tango;
                    report = verify;
                    options = null;
                    yankee = options == verify;
                    verify = undefined;
                    if(yankee) { _fun82188_ip = 1240; continue _fun82188 }
 1235:
                    verify = report.body;
 1240:
                    report = oscar.files;
                    report = offset.bind(oscar)(verify, report);
                    report = oscar._handleComplete;
                    golf = tango;
                    options = options == tango;
                    tango = undefined;
                    if(options) { _fun82188_ip = 1275; continue _fun82188 }
 1270:
                    tango = golf.body;
 1275:
                    tango = report.bind(oscar)(tango);
                    return zulu;
 1283:
                    tango = _closure1_slot19;
                    zulu = tango.log;
                    mike = 'Upload was aborted for send message; skip handling request error';
                    mike = zulu.bind(tango)(mike);
                    mike = undefined;
                    return mike;
 1309:
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