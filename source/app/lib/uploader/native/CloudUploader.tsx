// app/lib/uploader/native/CloudUploader.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
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
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot17;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot17;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
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
            _fun00008_ip = 76; continue _fun00007;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.NativeEventEmitter;
    tangon = tangon.NativeModules;
    option = 8;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.AbortCodes;
    var _closure1_slot10 = offset;
    option = option.NOOP;
    var _closure1_slot11 = option;
    option = 9;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE;
    var _closure1_slot12 = offset;
    option = option.FileUploadErrorTypes;
    var _closure1_slot13 = option;
    option = 10;
    option = oscard[option];
    yankee = golfie.bind(entity)(option);
    option = yankee.prototype;
    offset = Object.create(option, {constructor: {value: yankee}});
    backup = 'CloudUploader(Native).tsx';
    kiloes = offset;
    option = new kiloes[yankee](backup, foxtra);
    option = option instanceof Object ? option : offset;
    var _closure1_slot14 = option;
    backup = tangon.MediaManager;
    option = verify.prototype;
    option = Object.create(option, {constructor: {value: verify}});
    kiloes = option;
    tangon = new kiloes[verify](backup, foxtra);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot15 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: CloudUploader
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = this;
                romeon = 0;
                entity = copyRestArgs(romeon);
                golfie = _closure1_slot4;
                michal = _closure2_slot2;
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon, michal);
                verify = new Array(0);
                romeon = verify;
                yankee = entity;
                offset = 0;
                entity = arraySpread(romeon, yankee, offset);
                entity = _closure1_slot7;
                option = entity.bind(zuuluu)(michal);
                michal = _closure1_slot6;
                entity = _closure1_slot18;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 84; continue _fun00009 }
 71:
                entity = option.apply;
                entity = entity.bind(option)(tangon, verify);
                _fun00010_ip = 118; continue _fun00009;
 84:
                oscard = global;
                golfie = oscard.Reflect;
                oscard = golfie.construct;
                report = _closure1_slot7;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = oscard.bind(golfie)(option, verify, report);
 118:
                entity = michal.bind(zuuluu)(tangon, entity);
                michal = global;
                zuuluu = michal.Map;
                tangon = zuuluu.prototype;
                tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                foxtra = tangon;
                zuuluu = new foxtra[zuuluu](romeon);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                entity['mediaEventSubscriptions'] = zuuluu;
                michal = michal.Map;
                zuuluu = michal.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                foxtra = zuuluu;
                michal = new foxtra[michal](romeon);
                michal = michal instanceof Object ? michal : zuuluu;
                entity['uploadItems'] = michal;
                michal = new Array(0);
                entity['preCompressionFileSizes'] = michal;
                return entity;
            }
        };
        var _closure2_slot2 = tangon;
        report = _closure1_slot9;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        golfie = 'uploadFiles';
        report['key'] = golfie;
        option = _closure1_slot3;
        entity = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    zuuluu = argFoo;
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(oscard) { _fun00012_ip = 926; continue _fun00011 }
 18:
                    var _closure4_slot0 = report;
                    golfie = zuuluu;
                    var _closure4_slot1 = zuuluu;
                    verify = undefined;
                    var _closure4_slot3 = verify;
                    var _closure4_slot4 = verify;
                    michal = undefined;
                    romeon = undefined;
                    foxtra = undefined;
                    backup = undefined;
                    kiloes = undefined;
                    sizing = undefined;
                    var _closure4_slot2 = report;
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = offset[zuuluu];
                    zuuluu = option.bind(verify)(zuuluu);
                    zuuluu = zuuluu.backgroundTaskIdentifierInvalid;
                    _closure4_slot3 = zuuluu;
                    offset = report.once;
                    option = _closure1_slot3;
                    zuuluu = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00014_ip = 237; continue _fun00013 }
 10:
                                tangon = _closure1_slot1;
                                offset = _closure1_slot2;
                                golfie = 11;
                                michal = offset[golfie];
                                zuuluu = undefined;
                                option = tangon.bind(zuuluu)(michal);
                                oscard = option.startBackgroundTask;
                                michal = {};
                                verify = _closure1_slot0;
                                tangon = 12;
                                yankee = offset[tangon];
                                yankee = verify.bind(zuuluu)(yankee);
                                foxtra = yankee.intl;
                                romeon = foxtra.string;
                                yankee = offset[tangon];
                                yankee = verify.bind(zuuluu)(yankee);
                                yankee = yankee.t;
                                yankee = yankee.B/HSDQ;
                                yankee = romeon.bind(foxtra)(yankee);
                                michal['title'] = yankee;
                                yankee = offset[tangon];
                                yankee = verify.bind(zuuluu)(yankee);
                                romeon = yankee.intl;
                                yankee = romeon.formatToPlainString;
                                tangon = offset[tangon];
                                tangon = verify.bind(zuuluu)(tangon);
                                tangon = tangon.t;
                                offset = tangon.D0noUl;
                                verify = {};
                                foxtra = _closure4_slot1;
                                foxtra = foxtra.length;
                                verify['count'] = foxtra;
                                verify = yankee.bind(romeon)(offset, verify);
                                michal['content'] = verify;
                                michal = oscard.bind(option)(michal);
                                SaveGenerator(address=176);
 174:
                                return michal;
 176:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(oscard) { _fun00014_ip = 234; continue _fun00013 }
 182:
                                _closure4_slot3 = michal;
                                oscard = _closure4_slot2;
                                oscard = oscard._aborted;
                                if(!oscard) { _fun00014_ip = 231; continue _fun00013 }
 199:
                                oscard = _closure1_slot1;
                                report = _closure1_slot2;
                                report = report[golfie];
                                oscard = oscard.bind(zuuluu)(report);
                                report = oscard.endBackgroundTask;
                                tangon = _closure4_slot3;
                                tangon = report.bind(oscard)(tangon);
 231:
                                return zuuluu;
 234:
                                return michal;
 237:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    option = option.bind(verify)(zuuluu);
                    zuuluu = 'start';
                    zuuluu = offset.bind(report)(zuuluu, option);
                    offset = function() { // Original name: onCompleteTask
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 11;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.endBackgroundTask;
                        zuuluu = _closure4_slot3;
                        zuuluu = tangon.bind(report)(zuuluu);
                        report = _closure4_slot0;
                        oscard = report.removeListener;
                        tangon = _closure4_slot4;
                        zuuluu = 'complete';
                        zuuluu = oscard.bind(report)(zuuluu, tangon);
                        tangon = report.removeListener;
                        zuuluu = _closure4_slot4;
                        michal = 'error';
                        michal = tangon.bind(report)(michal, zuuluu);
                        return entity;
                    };
                    _closure4_slot4 = offset;
                    option = report.once;
                    zuuluu = 'error';
                    zuuluu = option.bind(report)(zuuluu, offset);
                    option = report.once;
                    zuuluu = 'complete';
                    zuuluu = option.bind(report)(zuuluu, offset);
                    zuuluu = global;
                    yankee = zuuluu.Promise;
                    option = yankee.prototype;
                    offset = Object.create(option, {constructor: {value: yankee}});
                    sequen = function(argFoo, argBar) {
                        michal = argFoo;
                        var _closure5_slot0 = michal;
                        michal = argBar;
                        var _closure5_slot1 = michal;
                        tangon = _closure4_slot0;
                        report = tangon.once;
                        zuuluu = 'error';
                        michal = function(argFoo, argBar, argBaz, argCor) {
                            zuuluu = _closure5_slot1;
                            michal = {};
                            entity = argFoo;
                            michal['file'] = entity;
                            entity = argBar;
                            michal['code'] = entity;
                            entity = argBaz;
                            michal['responseBody'] = entity;
                            entity = argCor;
                            michal['reason'] = entity;
                            entity = undefined;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        michal = report.bind(tangon)(zuuluu, michal);
                        zuuluu = tangon.once;
                        michal = 'complete';
                        entity = function() {
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                michal = _closure4_slot0;
                                michal = michal._errored;
                                if(michal) { _fun00016_ip = 40; continue _fun00015 }
 16:
                                zuuluu = _closure5_slot0;
                                entity = _closure4_slot0;
                                michal = entity.files;
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
 40:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = zuuluu.bind(tangon)(michal, entity);
                        entity = undefined;
                        return entity;
                    };
                    config = offset;
                    option = new config[yankee](sequen, vacuum);
                    michal = option instanceof Object ? option : offset;
 198: // try_start_0
                    option = golfie;
                    report['files'] = option;
                    sequen = _closure2_slot2;
                    yankee = function(argFoo, argBar, argBaz, argCor) { // Original name: _superPropGet
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            report = argFoo;
                            golfie = argBaz;
                            var _closure5_slot0 = golfie;
                            oscard = _closure1_slot8;
                            tangon = _closure1_slot7;
                            entity = 1;
                            zuuluu = 3;
                            option = entity & zuuluu;
                            entity = report;
                            if(!option) { _fun00018_ip = 44; continue _fun00017 }
 39:
                            entity = report.prototype;
 44:
                            report = undefined;
                            tangon = tangon.bind(report)(entity);
                            entity = 'upload';
                            report = oscard.bind(report)(tangon, entity, golfie);
                            var _closure5_slot1 = report;
                            entity = 2;
                            zuuluu = entity & zuuluu;
                            entity = report;
                            if(!zuuluu) { _fun00018_ip = 100; continue _fun00017 }
 79:
                            tangon = 'function';
                            zuuluu = typeof report;
                            entity = report;
                            if(!(tangon === zuuluu)) { _fun00018_ip = 100; continue _fun00017 }
 93:
                            entity = function(argFoo) {
                                tangon = _closure5_slot1;
                                zuuluu = tangon.apply;
                                michal = _closure5_slot0;
                                entity = argFoo;
                                entity = zuuluu.bind(tangon)(michal, entity);
                                return entity;
                            };
 100:
                            return entity;
                        }
                    };
                    vacuum = 'upload';
                    source = 3;
                    config = undefined;
                    ctrled = report;
                    yankee = config[yankee](sequen, vacuum, ctrled, source, update);
                    offset = _closure1_slot0;
                    output = _closure1_slot2;
                    golfie = 12;
                    result = output[golfie];
                    result = offset.bind(verify)(result);
                    echoed = result.intl;
                    result = echoed.formatToPlainString;
                    golfie = output[golfie];
                    golfie = offset.bind(verify)(golfie);
                    golfie = golfie.t;
                    output = golfie.Iaj5LS;
                    offset = {};
                    golfie = option.length;
                    offset['count'] = golfie;
                    golfie = 0;
                    update = option[golfie];
                    update = update.filename;
                    offset['filename'] = update;
                    output = result.bind(echoed)(output, offset);
                    offset = new Array(2);
                    offset[0] = output;
                    offset[1] = option;
                    offset = yankee.bind(verify)(offset);
                    offset = report._file;
                    option = option.length;
                    offset['attachmentsCount'] = option;
                    option = report._handleStart;
                    option = option.bind(report)(verify);
                    foxtra = 0;
                    option = _closure1_slot16;
                    golfie = report.files;
                    golfie = option.bind(verify)(golfie);
                    backup = golfie;
                    golfie = golfie.bind(verify)();
                    romeon = golfie;
                    golfie = golfie.done;
                    yankee = 14;
                    offset = 13;
                    if(golfie) { _fun00012_ip = 771; continue _fun00011 }
 412:
                    golfie = romeon;
                    golfie = golfie.value;
                    kiloes = golfie;
                    output = _closure1_slot0;
                    option = _closure1_slot2;
                    option = option[offset];
                    output = output.bind(verify)(option);
                    option = output.getFileSize;
                    golfie = golfie.item;
                    golfie = golfie.uri;
                    golfie = option.bind(output)(golfie);
                    SaveGenerator(address=466);
 464:
                    return golfie;
 466:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00012_ip = 768; continue _fun00011 }
 475:
                    output = report.preCompressionFileSizes;
                    option = output.push;
                    option = option.bind(output)(golfie);
                    option = kiloes;
                    option['preCompressionSize'] = golfie;
                    output = foxtra;
                    result = output + golfie;
                    foxtra = result;
                    output = report._file;
                    output['totalPreCompressionSize'] = result;
                    output = report._file;
                    output['currentSize'] = result;
                    result = _closure1_slot0;
                    output = _closure1_slot2;
                    output = output[yankee];
                    echoed = result.bind(verify)(output);
                    result = echoed.getUploadTarget;
                    output = option.item;
                    output = output.target;
                    update = result.bind(echoed)(output);
                    sizing = update;
                    echoed = zuuluu.Math;
                    result = echoed.max;
                    output = update.getMaxFileSize;
                    option = option.channelId;
                    output = output.bind(update)(option);
                    option = _closure1_slot12;
                    option = result.bind(echoed)(output, option);
                    if(!(!(golfie > option))) { _fun00012_ip = 714; continue _fun00011 }
 617:
                    output = foxtra;
                    result = sizing;
                    option = result.getMaxTotalAttachmentSize;
                    option = option.bind(result)();
                    if(!(!(output > option))) { _fun00012_ip = 660; continue _fun00011 }
 637:
                    option = backup;
                    option = option.bind(verify)();
                    romeon = option;
                    option = option.done;
                    if(option) { _fun00012_ip = 771; continue _fun00011 }
 655:
                    _fun00012_ip = 412; continue _fun00011;
 660:
                    offset = report._handleError;
                    option = {};
                    yankee = _closure1_slot10;
                    yankee = yankee.ENTITY_TOO_LARGE;
                    option['code'] = yankee;
                    yankee = {};
                    romeon = _closure1_slot13;
                    romeon = romeon.PRECOMPRESSION_SUM_TOO_LARGE;
                    yankee['type'] = romeon;
                    option['reason'] = yankee;
                    option = offset.bind(report)(option);
                    option = michal;
 711: // try_end0
                    return option;
 714: // try_start_1
                    offset = report._handleError;
                    option = {};
                    yankee = _closure1_slot10;
                    yankee = yankee.ENTITY_TOO_LARGE;
                    option['code'] = yankee;
                    yankee = {};
                    romeon = _closure1_slot13;
                    romeon = romeon.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                    yankee['type'] = romeon;
                    option['reason'] = yankee;
                    option = offset.bind(report)(option);
                    option = michal;
 765: // try_end1
                    return option;
 768:
                    return golfie;
 771: // try_start_2
                    offset = _closure1_slot14;
                    option = offset.log;
                    foxtra = report.id;
                    golfie = zuuluu.HermesInternal;
                    romeon = golfie.concat;
                    yankee = '';
                    golfie = ' queued';
                    golfie = romeon.bind(yankee)(foxtra, golfie);
                    golfie = option.bind(offset)(golfie);
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    golfie = 15;
                    golfie = offset[golfie];
                    option = option.bind(verify)(golfie);
                    golfie = option.enqueue;
                    tangon = function() {
                        entity = _closure4_slot0;
                        michal = entity.startUpload;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    tangon = golfie.bind(option)(tangon);
                    tangon = michal;
 859: // try_end2
                    return tangon;
 862: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=3);
                    golfie = _closure1_slot14;
                    oscard = golfie.log;
                    offset = report.id;
                    zuuluu = zuuluu.HermesInternal;
                    verify = zuuluu.concat;
                    option = '';
                    zuuluu = ' failed in CloudUploader uploadFiles ';
                    zuuluu = verify.bind(option)(offset, zuuluu, tangon);
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    zuuluu = report._handleException;
                    zuuluu = zuuluu.bind(report)(tangon);
                    return michal;
 926:
                    return entity;
                }
            };
            return entity;
        };
        entity = option.bind(zuuluu)(entity);
        var _closure2_slot1 = entity;
        entity = function() { // Original name: uploadFiles
            entity = undefined;
            tangon = _closure2_slot1;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'startUpload';
        report['key'] = golfie;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    tangon = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00020_ip = 599; continue _fun00019 }
 15:
                    michal = undefined;
                    option = undefined;
                    zuuluu = tangon._aborted;
                    if(zuuluu) { _fun00020_ip = 586; continue _fun00019 }
 31:
                    report = tangon._handleStart;
                    zuuluu = _closure1_slot11;
                    zuuluu = report.bind(tangon)(zuuluu);
 49: // try_start_0
                    report = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 16;
                    zuuluu = verify[zuuluu];
                    report = report.bind(michal)(zuuluu);
                    zuuluu = report.isAndroid;
                    zuuluu = zuuluu.bind(report)();
                    if(!zuuluu) { _fun00020_ip = 100; continue _fun00019 }
 81:
                    report = tangon.observeCompressionProgress;
                    zuuluu = tangon.files;
                    zuuluu = report.bind(tangon)(zuuluu);
 100:
                    zuuluu = tangon.compressAndCheckFileSize;
                    zuuluu = zuuluu.bind(tangon)();
                    SaveGenerator(address=116);
 114:
                    return zuuluu;
 116:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00020_ip = 568; continue _fun00019 }
 125:
                    if(zuuluu) { _fun00020_ip = 131; continue _fun00019 }
 128: // try_end0
                    return michal;
 131: // try_start_1
                    report = tangon.setUploadingTextForUI;
                    report = report.bind(tangon)();
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    report = 17;
                    report = offset[report];
                    yankee = verify.bind(michal)(report);
                    offset = tangon.files;
                    verify = tangon._recomputeProgress;
                    report = verify.bind;
                    verify = report.bind(verify)(tangon);
                    report = true;
                    report = yankee.bind(michal)(offset, report, verify);
                    SaveGenerator(address=200);
 198:
                    return report;
 200:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(verify) { _fun00020_ip = 565; continue _fun00019 }
 209:
                    verify = tangon.files;
                    offset = verify.length;
                    verify = 0;
                    if(!(verify !== offset)) { _fun00020_ip = 506; continue _fun00019 }
 229:
                    yankee = tangon.files;
                    offset = yankee.every;
                    verify = function(argFoo) {
                        entity = argFoo;
                        michal = entity.status;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 18;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.CloudUploadStatus;
                        entity = entity.COMPLETED;
                        entity = michal === entity;
                        return entity;
                    };
                    verify = offset.bind(yankee)(verify);
                    if(verify) { _fun00020_ip = 292; continue _fun00019 }
 256:
                    verify = global;
                    yankee = verify.Error;
                    verify = yankee.prototype;
                    offset = Object.create(verify, {constructor: {value: yankee}});
                    kiloes = 'Not all attachments were uploaded successfully';
                    sizing = offset;
                    verify = new sizing[yankee](kiloes, backup);
                    verify = verify instanceof Object ? verify : offset;
                    throw verify;
 292:
                    verify = tangon._file;
                    offset = verify.items;
                    option = offset;
                    verify = null;
                    if(!(verify != offset)) { _fun00020_ip = 333; continue _fun00019 }
 313:
                    verify = option;
                    option = verify.forEach;
                    golfie = function(argFoo) {
                        entity = argFoo;
                        michal = entity.item;
                        entity = 100;
                        michal['progress'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    golfie = option.bind(verify)(golfie);
 333:
                    golfie = {};
                    backup = tangon._file;
                    kiloes = golfie;
                    option = copyDataProperties(kiloes, backup);
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    option = 12;
                    verify = romeon[option];
                    verify = yankee.bind(michal)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = romeon[option];
                    option = yankee.bind(michal)(option);
                    option = option.t;
                    option = option.Dmx3f3;
                    verify = verify.bind(offset)(option);
                    option = 'name';
                    golfie[option] = verify;
                    option = 100;
                    verify = 'progress';
                    golfie[verify] = option;
                    tangon['_file'] = golfie;
                    option = tangon.emit;
                    golfie = tangon._file;
                    golfie = option.bind(tangon)(verify, golfie);
                    verify = _closure1_slot14;
                    option = verify.log;
                    yankee = tangon.id;
                    golfie = global;
                    golfie = golfie.HermesInternal;
                    offset = golfie.concat;
                    golfie = 'All uploads complete for ';
                    golfie = offset.bind(golfie)(yankee);
                    golfie = option.bind(verify)(golfie);
                    golfie = tangon._handleComplete;
                    golfie = golfie.bind(tangon)();
 504: // try_end1
                    _fun00020_ip = 596; continue _fun00019;
 506: // try_start_2
                    option = _closure1_slot14;
                    golfie = option.log;
                    offset = tangon.id;
                    oscard = global;
                    oscard = oscard.HermesInternal;
                    verify = oscard.concat;
                    oscard = 'All uploads cancelled for ';
                    oscard = verify.bind(oscard)(offset);
                    oscard = golfie.bind(option)(oscard);
                    oscard = tangon._handleComplete;
                    oscard = oscard.bind(tangon)();
 560: // try_end2
                    oscard = undefined;
                    return oscard;
 565:
                    return report;
 568:
                    return zuuluu;
 571: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=4);
                    zuuluu = tangon._handleException;
                    zuuluu = zuuluu.bind(tangon)(report);
                    _fun00020_ip = 596; continue _fun00019;
 586:
                    zuuluu = tangon._handleAborted;
                    zuuluu = zuuluu.bind(tangon)();
 596:
                    return michal;
 599:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        var _closure2_slot0 = golfie;
        golfie = function() { // Original name: startUpload
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'observeCompressionProgress';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            report = argFoo;
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = function() { // Original name: cleanUp
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = _closure3_slot0;
                    tangon = michal.mediaEventSubscriptions;
                    zuuluu = tangon.get;
                    michal = michal._file;
                    michal = michal.id;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00022_ip = 50; continue _fun00021 }
 40:
                    michal = zuuluu.remove;
                    michal = michal.bind(zuuluu)();
 50:
                    entity = _closure3_slot0;
                    tangon = entity.mediaEventSubscriptions;
                    zuuluu = tangon.delete;
                    michal = entity._file;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = entity.uploadItems;
                    entity = michal.clear;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot1 = zuuluu;
            tangon = report.forEach;
            zuuluu = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = argFoo;
                    report = entity.item;
                    zuuluu = report.platform;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 19;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    michal = michal.UploadPlatform;
                    michal = michal.REACT_NATIVE;
                    if(!(zuuluu === michal)) { _fun00024_ip = 93; continue _fun00023 }
 55:
                    michal = 0;
                    report['compressionProgress'] = michal;
                    michal = _closure3_slot0;
                    tangon = michal.uploadItems;
                    zuuluu = tangon.set;
                    michal = report.uri;
                    michal = zuuluu.bind(tangon)(michal, report);
 93:
                    return entity;
                }
            };
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = michal.mediaEventSubscriptions;
            zuuluu = tangon.set;
            michal = michal._file;
            michal = michal.id;
            golfie = _closure1_slot15;
            oscard = golfie.addListener;
            report = 'compression-progress';
            entity = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.uri;
                    tangon = entity.progress;
                    michal = _closure3_slot0;
                    zuuluu = michal.uploadItems;
                    michal = zuuluu.has;
                    michal = michal.bind(zuuluu)(oscard);
                    if(!michal) { _fun00026_ip = 371; continue _fun00025 }
 44:
                    michal = _closure3_slot0;
                    report = michal.uploadItems;
                    zuuluu = report.get;
                    zuuluu = zuuluu.bind(report)(oscard);
                    zuuluu['compressionProgress'] = tangon;
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 20;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(tangon);
                    tangon = oscard.meanBy;
                    report = michal.uploadItems;
                    michal = report.values;
                    backup = michal.bind(report)();
                    michal = new Array(0);
                    foxtra = 0;
                    kiloes = michal;
                    report = arraySpread(kiloes, backup, foxtra);
                    report = 'compressionProgress';
                    golfie = tangon.bind(oscard)(michal, report);
                    tangon = 100;
                    if(!(!(golfie >= tangon))) { _fun00026_ip = 244; continue _fun00025 }
 146:
                    oscard = _closure3_slot0;
                    michal = {};
                    backup = oscard._file;
                    kiloes = michal;
                    verify = copyDataProperties(kiloes, backup);
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    option = 12;
                    verify = romeon[option];
                    verify = yankee.bind(zuuluu)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = romeon[option];
                    option = yankee.bind(zuuluu)(option);
                    option = option.t;
                    option = option.7lc4V1;
                    verify = verify.bind(offset)(option);
                    option = 'name';
                    michal[option] = verify;
                    michal[report] = golfie;
                    oscard['_file'] = michal;
                    _fun00026_ip = 343; continue _fun00025;
 244:
                    michal = _closure3_slot1;
                    michal = michal.bind(zuuluu)();
                    michal = _closure3_slot0;
                    michal = michal._file;
                    oscard = michal.items;
                    michal = null;
                    if(!(michal != oscard)) { _fun00026_ip = 293; continue _fun00025 }
 274:
                    zuuluu = oscard.forEach;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.item;
                        entity = 100;
                        michal['compressionProgress'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    michal = zuuluu.bind(oscard)(michal);
 293:
                    zuuluu = _closure3_slot0;
                    michal = {};
                    backup = zuuluu._file;
                    kiloes = michal;
                    oscard = copyDataProperties(kiloes, backup);
                    oscard = zuuluu._file;
                    golfie = oscard.name;
                    oscard = 'name';
                    michal[oscard] = golfie;
                    michal[report] = tangon;
                    zuuluu['_file'] = michal;
 343:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.emit;
                    michal = tangon._file;
                    entity = 'compression-progress';
                    entity = zuuluu.bind(tangon)(entity, michal);
 371:
                    entity = undefined;
                    return entity;
                }
            };
            entity = oscard.bind(golfie)(report, entity);
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 22;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/uploader/native/CloudUploader.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();