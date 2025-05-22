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
            verify = _closure1_slot22;
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
            golfie = _closure1_slot22;
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
    var _closure1_slot21 = entity;
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
    var _closure1_slot22 = entity;
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
            _closure1_slot23 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: _superPropGet
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            golfie = argBaz;
            var _closure2_slot0 = golfie;
            oscard = _closure1_slot8;
            tangon = _closure1_slot7;
            entity = 1;
            zuuluu = 3;
            option = entity & zuuluu;
            entity = report;
            if(!option) { _fun00010_ip = 44; continue _fun00009 }
 39:
            entity = report.prototype;
 44:
            report = undefined;
            tangon = tangon.bind(report)(entity);
            entity = 'upload';
            report = oscard.bind(report)(tangon, entity, golfie);
            var _closure2_slot1 = report;
            entity = 2;
            zuuluu = entity & zuuluu;
            entity = report;
            if(!zuuluu) { _fun00010_ip = 100; continue _fun00009 }
 79:
            tangon = 'function';
            zuuluu = typeof report;
            entity = report;
            if(!(tangon === zuuluu)) { _fun00010_ip = 100; continue _fun00009 }
 93:
            entity = function(argFoo) {
                tangon = _closure2_slot1;
                zuuluu = tangon.apply;
                michal = _closure2_slot0;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
 100:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
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
    option = golfie.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 9;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot11 = option;
    option = 10;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot12 = option;
    option = 11;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.AbortCodes;
    var _closure1_slot13 = offset;
    offset = option.AnalyticEvents;
    var _closure1_slot14 = offset;
    option = option.NOOP;
    var _closure1_slot15 = option;
    option = 12;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE;
    var _closure1_slot16 = offset;
    offset = option.FileUploadErrorTypes;
    var _closure1_slot17 = offset;
    option = option.MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS;
    var _closure1_slot18 = option;
    option = 13;
    option = oscard[option];
    yankee = golfie.bind(entity)(option);
    option = yankee.prototype;
    offset = Object.create(option, {constructor: {value: yankee}});
    backup = 'CloudUploader(Native).tsx';
    kiloes = offset;
    option = new kiloes[yankee](backup, foxtra);
    option = option instanceof Object ? option : offset;
    var _closure1_slot19 = option;
    backup = tangon.MediaManager;
    option = verify.prototype;
    option = Object.create(option, {constructor: {value: verify}});
    kiloes = option;
    tangon = new kiloes[verify](backup, foxtra);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot20 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo, argBar) { // Original name: CloudUploader
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = arguments[2];
                tangon = this;
                report = undefined;
                if(!(entity === report)) { _fun00012_ip = 18; continue _fun00011 }
 12:
                entity = 'POST';
 18:
                oscard = _closure1_slot4;
                michal = _closure2_slot5;
                oscard = oscard.bind(report)(tangon, michal);
                offset = new Array(3);
                oscard = argFoo;
                offset[0] = oscard;
                offset[1] = entity;
                entity = arguments[3];
                offset[2] = entity;
                entity = _closure1_slot7;
                verify = entity.bind(report)(michal);
                michal = _closure1_slot6;
                entity = _closure1_slot23;
                entity = entity.bind(report)();
                if(entity) { _fun00012_ip = 97; continue _fun00011 }
 84:
                entity = verify.apply;
                entity = entity.bind(verify)(tangon, offset);
                _fun00012_ip = 131; continue _fun00011;
 97:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot7;
                oscard = oscard.bind(report)(tangon);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 131:
                entity = michal.bind(report)(tangon, entity);
                michal = global;
                tangon = michal.Map;
                oscard = tangon.prototype;
                oscard = Object.create(oscard, {constructor: {value: tangon}});
                backup = oscard;
                tangon = new backup[tangon](foxtra);
                tangon = tangon instanceof Object ? tangon : oscard;
                entity['mediaEventSubscriptions'] = tangon;
                tangon = michal.Map;
                oscard = tangon.prototype;
                oscard = Object.create(oscard, {constructor: {value: tangon}});
                backup = oscard;
                tangon = new backup[tangon](foxtra);
                tangon = tangon instanceof Object ? tangon : oscard;
                entity['uploadItems'] = tangon;
                tangon = new Array(0);
                entity['preCompressionFileSizes'] = tangon;
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 14;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.getAPIBaseURL;
                report = zuuluu.bind(tangon)();
                tangon = entity._url;
                michal = michal.HermesInternal;
                zuuluu = michal.concat;
                michal = '';
                michal = zuuluu.bind(michal)(report, tangon);
                entity['_url'] = michal;
                michal = argBar;
                entity['_token'] = michal;
                return entity;
            }
        };
        var _closure2_slot5 = tangon;
        report = _closure1_slot9;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        golfie = 'uploadFilesSimple';
        report['key'] = golfie;
        option = _closure1_slot3;
        entity = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    zuuluu = argFoo;
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(oscard) { _fun00014_ip = 925; continue _fun00013 }
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
                    zuuluu = 15;
                    zuuluu = offset[zuuluu];
                    zuuluu = option.bind(verify)(zuuluu);
                    zuuluu = zuuluu.backgroundTaskIdentifierInvalid;
                    _closure4_slot3 = zuuluu;
                    offset = report.once;
                    option = _closure1_slot3;
                    zuuluu = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00016_ip = 235; continue _fun00015 }
 10:
                                tangon = _closure1_slot1;
                                offset = _closure1_slot2;
                                golfie = 15;
                                michal = offset[golfie];
                                zuuluu = undefined;
                                option = tangon.bind(zuuluu)(michal);
                                oscard = option.startBackgroundTask;
                                michal = {};
                                verify = _closure1_slot0;
                                tangon = 16;
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
                                SaveGenerator(address=174);
 172:
                                return michal;
 174:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(oscard) { _fun00016_ip = 232; continue _fun00015 }
 180:
                                _closure4_slot3 = michal;
                                oscard = _closure4_slot2;
                                oscard = oscard._aborted;
                                if(!oscard) { _fun00016_ip = 229; continue _fun00015 }
 197:
                                oscard = _closure1_slot1;
                                report = _closure1_slot2;
                                report = report[golfie];
                                oscard = oscard.bind(zuuluu)(report);
                                report = oscard.endBackgroundTask;
                                tangon = _closure4_slot3;
                                tangon = report.bind(oscard)(tangon);
 229:
                                return zuuluu;
 232:
                                return michal;
 235:
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
                        entity = 15;
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
                    config = function(argFoo, argBar) {
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
                            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                michal = _closure4_slot0;
                                michal = michal._errored;
                                if(michal) { _fun00018_ip = 40; continue _fun00017 }
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
                    record = offset;
                    option = new record[yankee](config, sequen);
                    michal = option instanceof Object ? option : offset;
 198: // try_start_0
                    option = golfie;
                    report['files'] = option;
                    output = _closure1_slot24;
                    config = _closure2_slot5;
                    sequen = 'upload';
                    ctrled = 3;
                    record = undefined;
                    vacuum = report;
                    yankee = record[output](config, sequen, vacuum, ctrled, source);
                    output = {};
                    offset = _closure1_slot0;
                    result = _closure1_slot2;
                    golfie = 16;
                    echoed = result[golfie];
                    echoed = offset.bind(verify)(echoed);
                    update = echoed.intl;
                    echoed = update.formatToPlainString;
                    golfie = result[golfie];
                    golfie = offset.bind(verify)(golfie);
                    golfie = golfie.t;
                    result = golfie.Iaj5LS;
                    offset = {};
                    golfie = option.length;
                    offset['count'] = golfie;
                    golfie = 0;
                    source = option[golfie];
                    source = source.filename;
                    offset['filename'] = source;
                    offset = echoed.bind(update)(result, offset);
                    output['name'] = offset;
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
                    option = _closure1_slot21;
                    golfie = report.files;
                    golfie = option.bind(verify)(golfie);
                    backup = golfie;
                    golfie = golfie.bind(verify)();
                    romeon = golfie;
                    golfie = golfie.done;
                    yankee = 18;
                    offset = 17;
                    if(golfie) { _fun00014_ip = 772; continue _fun00013 }
 413:
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
                    SaveGenerator(address=467);
 465:
                    return golfie;
 467:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00014_ip = 769; continue _fun00013 }
 476:
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
                    option = _closure1_slot16;
                    option = result.bind(echoed)(output, option);
                    if(!(!(golfie > option))) { _fun00014_ip = 715; continue _fun00013 }
 618:
                    output = foxtra;
                    result = sizing;
                    option = result.getMaxTotalAttachmentSize;
                    option = option.bind(result)();
                    if(!(!(output > option))) { _fun00014_ip = 661; continue _fun00013 }
 638:
                    option = backup;
                    option = option.bind(verify)();
                    romeon = option;
                    option = option.done;
                    if(option) { _fun00014_ip = 772; continue _fun00013 }
 656:
                    _fun00014_ip = 413; continue _fun00013;
 661:
                    offset = report._handleError;
                    option = {};
                    yankee = _closure1_slot13;
                    yankee = yankee.ENTITY_TOO_LARGE;
                    option['code'] = yankee;
                    yankee = {};
                    romeon = _closure1_slot17;
                    romeon = romeon.PRECOMPRESSION_SUM_TOO_LARGE;
                    yankee['type'] = romeon;
                    option['reason'] = yankee;
                    option = offset.bind(report)(option);
                    option = michal;
 712: // try_end0
                    return option;
 715: // try_start_1
                    offset = report._handleError;
                    option = {};
                    yankee = _closure1_slot13;
                    yankee = yankee.ENTITY_TOO_LARGE;
                    option['code'] = yankee;
                    yankee = {};
                    romeon = _closure1_slot17;
                    romeon = romeon.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                    yankee['type'] = romeon;
                    option['reason'] = yankee;
                    option = offset.bind(report)(option);
                    option = michal;
 766: // try_end1
                    return option;
 769:
                    return golfie;
 772: // try_start_2
                    offset = _closure1_slot19;
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
                    golfie = 19;
                    golfie = offset[golfie];
                    option = option.bind(verify)(golfie);
                    golfie = option.enqueue;
                    tangon = function() {
                        entity = _closure4_slot0;
                        michal = entity.startSimpleUpload;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    tangon = golfie.bind(option)(tangon);
                    tangon = michal;
 859: // try_end2
                    return tangon;
 862: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=3);
                    golfie = _closure1_slot19;
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
 925:
                    return entity;
                }
            };
            return entity;
        };
        entity = option.bind(zuuluu)(entity);
        var _closure2_slot4 = entity;
        entity = function() { // Original name: uploadFilesSimple
            entity = undefined;
            tangon = _closure2_slot4;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golfie = 'uploadFiles';
        report['key'] = golfie;
        golfie = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    zuuluu = argFoo;
                    michal = arguments[1];
                    oscard = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00020_ip = 960; continue _fun00019 }
 21:
                    var _closure4_slot0 = oscard;
                    golfie = zuuluu;
                    var _closure4_slot1 = zuuluu;
                    zuuluu = undefined;
                    if(!(michal === zuuluu)) { _fun00020_ip = 40; continue _fun00019 }
 38:
                    michal = {};
 40:
                    var _closure4_slot2 = michal;
                    michal = arguments[2];
                    var _closure4_slot3 = michal;
                    var _closure4_slot4 = zuuluu;
                    var _closure4_slot5 = zuuluu;
                    var _closure4_slot6 = zuuluu;
                    romeon = undefined;
                    foxtra = undefined;
                    backup = undefined;
                    kiloes = undefined;
                    sizing = undefined;
                    SaveGenerator(address=77);
 75:
                    return zuuluu;
 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00020_ip = 957; continue _fun00019 }
 86:
                    _closure4_slot4 = oscard;
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 15;
                    option = offset[option];
                    option = verify.bind(zuuluu)(option);
                    option = option.backgroundTaskIdentifierInvalid;
                    _closure4_slot5 = option;
                    offset = oscard.once;
                    verify = _closure1_slot3;
                    option = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00022_ip = 235; continue _fun00021 }
 10:
                                tangon = _closure1_slot1;
                                offset = _closure1_slot2;
                                golfie = 15;
                                michal = offset[golfie];
                                zuuluu = undefined;
                                option = tangon.bind(zuuluu)(michal);
                                oscard = option.startBackgroundTask;
                                michal = {};
                                verify = _closure1_slot0;
                                tangon = 16;
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
                                SaveGenerator(address=174);
 172:
                                return michal;
 174:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(oscard) { _fun00022_ip = 232; continue _fun00021 }
 180:
                                _closure4_slot5 = michal;
                                oscard = _closure4_slot4;
                                oscard = oscard._aborted;
                                if(!oscard) { _fun00022_ip = 229; continue _fun00021 }
 197:
                                oscard = _closure1_slot1;
                                report = _closure1_slot2;
                                report = report[golfie];
                                oscard = oscard.bind(zuuluu)(report);
                                report = oscard.endBackgroundTask;
                                tangon = _closure4_slot5;
                                tangon = report.bind(oscard)(tangon);
 229:
                                return zuuluu;
 232:
                                return michal;
 235:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    verify = verify.bind(zuuluu)(option);
                    option = 'start';
                    option = offset.bind(oscard)(option, verify);
                    offset = function() { // Original name: onCompleteTask
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 15;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.endBackgroundTask;
                        zuuluu = _closure4_slot5;
                        zuuluu = tangon.bind(report)(zuuluu);
                        report = _closure4_slot0;
                        oscard = report.removeListener;
                        tangon = _closure4_slot6;
                        zuuluu = 'complete';
                        zuuluu = oscard.bind(report)(zuuluu, tangon);
                        tangon = report.removeListener;
                        zuuluu = _closure4_slot6;
                        michal = 'error';
                        michal = tangon.bind(report)(michal, zuuluu);
                        return entity;
                    };
                    _closure4_slot6 = offset;
                    verify = oscard.once;
                    option = 'error';
                    option = verify.bind(oscard)(option, offset);
                    verify = oscard.once;
                    option = 'complete';
                    option = verify.bind(oscard)(option, offset);
 198: // try_start_0
                    option = golfie;
                    oscard['files'] = option;
                    yankee = _closure1_slot24;
                    sequen = _closure2_slot5;
                    vacuum = 'upload';
                    source = 3;
                    config = undefined;
                    ctrled = oscard;
                    offset = config[yankee](sequen, vacuum, ctrled, source, update);
                    yankee = {};
                    verify = _closure1_slot0;
                    output = _closure1_slot2;
                    golfie = 16;
                    result = output[golfie];
                    result = verify.bind(zuuluu)(result);
                    echoed = result.intl;
                    result = echoed.formatToPlainString;
                    golfie = output[golfie];
                    golfie = verify.bind(zuuluu)(golfie);
                    golfie = golfie.t;
                    output = golfie.Iaj5LS;
                    verify = {};
                    golfie = option.length;
                    verify['count'] = golfie;
                    golfie = 0;
                    update = option[golfie];
                    update = update.filename;
                    verify['filename'] = update;
                    verify = result.bind(echoed)(output, verify);
                    yankee['name'] = verify;
                    verify = new Array(2);
                    verify[0] = yankee;
                    verify[1] = option;
                    verify = offset.bind(zuuluu)(verify);
                    verify = oscard._file;
                    option = option.length;
                    verify['attachmentsCount'] = option;
                    option = oscard._handleStart;
                    option = option.bind(oscard)(zuuluu);
                    foxtra = 0;
                    option = _closure1_slot21;
                    golfie = oscard.files;
                    golfie = option.bind(zuuluu)(golfie);
                    backup = golfie;
                    golfie = golfie.bind(zuuluu)();
                    romeon = golfie;
                    option = golfie.done;
                    yankee = 18;
                    golfie = global;
                    offset = 17;
                    if(option) { _fun00020_ip = 772; continue _fun00019 }
 415:
                    option = romeon;
                    option = option.value;
                    kiloes = option;
                    output = _closure1_slot0;
                    verify = _closure1_slot2;
                    verify = verify[offset];
                    output = output.bind(zuuluu)(verify);
                    verify = output.getFileSize;
                    option = option.item;
                    option = option.uri;
                    option = verify.bind(output)(option);
                    SaveGenerator(address=469);
 467:
                    return option;
 469:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00020_ip = 769; continue _fun00019 }
 478:
                    output = oscard.preCompressionFileSizes;
                    verify = output.push;
                    verify = verify.bind(output)(option);
                    verify = kiloes;
                    verify['preCompressionSize'] = option;
                    output = foxtra;
                    result = output + option;
                    foxtra = result;
                    output = oscard._file;
                    output['totalPreCompressionSize'] = result;
                    output = oscard._file;
                    output['currentSize'] = result;
                    result = _closure1_slot0;
                    output = _closure1_slot2;
                    output = output[yankee];
                    echoed = result.bind(zuuluu)(output);
                    result = echoed.getUploadTarget;
                    output = verify.item;
                    output = output.target;
                    update = result.bind(echoed)(output);
                    sizing = update;
                    echoed = golfie.Math;
                    result = echoed.max;
                    output = update.getMaxFileSize;
                    verify = verify.channelId;
                    output = output.bind(update)(verify);
                    verify = _closure1_slot16;
                    verify = result.bind(echoed)(output, verify);
                    if(!(!(option > verify))) { _fun00020_ip = 716; continue _fun00019 }
 620:
                    output = foxtra;
                    result = sizing;
                    verify = result.getMaxTotalAttachmentSize;
                    verify = verify.bind(result)();
                    if(!(!(output > verify))) { _fun00020_ip = 663; continue _fun00019 }
 640:
                    verify = backup;
                    verify = verify.bind(zuuluu)();
                    romeon = verify;
                    verify = verify.done;
                    if(verify) { _fun00020_ip = 772; continue _fun00019 }
 658:
                    _fun00020_ip = 415; continue _fun00019;
 663:
                    offset = oscard._handleError;
                    verify = {};
                    yankee = _closure1_slot13;
                    yankee = yankee.ENTITY_TOO_LARGE;
                    verify['code'] = yankee;
                    yankee = {};
                    romeon = _closure1_slot17;
                    romeon = romeon.PRECOMPRESSION_SUM_TOO_LARGE;
                    yankee['type'] = romeon;
                    verify['reason'] = yankee;
                    verify = offset.bind(oscard)(verify);
 711: // try_end0
                    verify = undefined;
                    return verify;
 716: // try_start_1
                    offset = oscard._handleError;
                    verify = {};
                    yankee = _closure1_slot13;
                    yankee = yankee.ENTITY_TOO_LARGE;
                    verify['code'] = yankee;
                    yankee = {};
                    romeon = _closure1_slot17;
                    romeon = romeon.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                    yankee['type'] = romeon;
                    verify['reason'] = yankee;
                    verify = offset.bind(oscard)(verify);
 764: // try_end1
                    verify = undefined;
                    return verify;
 769:
                    return option;
 772: // try_start_2
                    offset = _closure1_slot19;
                    verify = offset.log;
                    foxtra = oscard.id;
                    option = golfie.HermesInternal;
                    romeon = option.concat;
                    yankee = '';
                    option = ' queued';
                    option = romeon.bind(yankee)(foxtra, option);
                    option = verify.bind(offset)(option);
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    option = 19;
                    option = offset[option];
                    offset = verify.bind(zuuluu)(option);
                    verify = offset.enqueue;
                    option = function() {
                        entity = _closure4_slot0;
                        tangon = entity.sendMessage;
                        zuuluu = _closure4_slot2;
                        michal = _closure4_slot3;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    option = verify.bind(offset)(option);
                    option = golfie.Promise;
                    golfie = option.prototype;
                    golfie = Object.create(golfie, {constructor: {value: option}});
                    sequen = function(argFoo, argBar) {
                        michal = argFoo;
                        var _closure5_slot0 = michal;
                        michal = argBar;
                        var _closure5_slot1 = michal;
                        tangon = _closure4_slot0;
                        report = tangon.once;
                        zuuluu = 'error';
                        michal = function(argFoo) {
                            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                entity = _closure4_slot0;
                                michal = entity._raiseEndpointErrors;
                                if(michal) { _fun00024_ip = 32; continue _fun00023 }
 19:
                                zuuluu = _closure5_slot0;
                                michal = undefined;
                                michal = zuuluu.bind(michal)(michal);
                                _fun00024_ip = 46; continue _fun00023;
 32:
                                zuuluu = _closure5_slot1;
                                michal = undefined;
                                entity = argFoo;
                                entity = zuuluu.bind(michal)(entity);
 46:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal = report.bind(tangon)(zuuluu, michal);
                        zuuluu = tangon.once;
                        michal = 'complete';
                        entity = function(argFoo, argBar) {
                            zuuluu = _closure5_slot0;
                            entity = undefined;
                            michal = argBar;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        entity = zuuluu.bind(tangon)(michal, entity);
                        entity = undefined;
                        return entity;
                    };
                    config = golfie;
                    report = new config[option](sequen, vacuum);
                    report = report instanceof Object ? report : golfie;
 889: // try_end2
                    return report;
 892: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=4);
                    option = _closure1_slot19;
                    golfie = option.log;
                    yankee = oscard.id;
                    tangon = global;
                    tangon = tangon.HermesInternal;
                    offset = tangon.concat;
                    verify = '';
                    tangon = ' failed in CloudUploader uploadFiles ';
                    tangon = offset.bind(verify)(yankee, tangon, report);
                    tangon = golfie.bind(option)(tangon);
                    tangon = oscard._handleException;
                    tangon = tangon.bind(oscard)(report);
                    return zuuluu;
 957:
                    return michal;
 960:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        var _closure2_slot3 = golfie;
        golfie = function() { // Original name: uploadFiles
            entity = undefined;
            tangon = _closure2_slot3;
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
        golfie = 'startSimpleUpload';
        report['key'] = golfie;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    tangon = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00026_ip = 593; continue _fun00025 }
 15:
                    michal = undefined;
                    option = undefined;
                    zuuluu = tangon._aborted;
                    if(zuuluu) { _fun00026_ip = 580; continue _fun00025 }
 31:
                    report = tangon._handleStart;
                    zuuluu = _closure1_slot15;
                    zuuluu = report.bind(tangon)(zuuluu);
 49: // try_start_0
                    report = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 20;
                    zuuluu = verify[zuuluu];
                    report = report.bind(michal)(zuuluu);
                    zuuluu = report.isAndroid;
                    zuuluu = zuuluu.bind(report)();
                    if(!zuuluu) { _fun00026_ip = 98; continue _fun00025 }
 81:
                    report = tangon.observeCompressionProgress;
                    zuuluu = tangon.files;
                    zuuluu = report.bind(tangon)(zuuluu);
 98:
                    zuuluu = tangon.compressAndCheckFileSize;
                    zuuluu = zuuluu.bind(tangon)();
                    SaveGenerator(address=112);
 110:
                    return zuuluu;
 112:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00026_ip = 562; continue _fun00025 }
 121:
                    if(zuuluu) { _fun00026_ip = 127; continue _fun00025 }
 124: // try_end0
                    return michal;
 127: // try_start_1
                    report = tangon.setUploadingTextForUI;
                    report = report.bind(tangon)();
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 21;
                    report = offset[report];
                    romeon = verify.bind(michal)(report);
                    yankee = romeon.stageAttachmentFiles;
                    offset = tangon.files;
                    verify = tangon._recomputeProgress;
                    report = verify.bind;
                    verify = report.bind(verify)(tangon);
                    report = true;
                    report = yankee.bind(romeon)(offset, report, verify);
                    SaveGenerator(address=198);
 196:
                    return report;
 198:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(verify) { _fun00026_ip = 559; continue _fun00025 }
 207:
                    verify = tangon.files;
                    offset = verify.length;
                    verify = 0;
                    if(!(verify !== offset)) { _fun00026_ip = 501; continue _fun00025 }
 227:
                    yankee = tangon.files;
                    offset = yankee.every;
                    verify = function(argFoo) {
                        entity = argFoo;
                        michal = entity.status;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 22;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.CloudUploadStatus;
                        entity = entity.COMPLETED;
                        entity = michal === entity;
                        return entity;
                    };
                    verify = offset.bind(yankee)(verify);
                    if(verify) { _fun00026_ip = 290; continue _fun00025 }
 254:
                    verify = global;
                    yankee = verify.Error;
                    verify = yankee.prototype;
                    offset = Object.create(verify, {constructor: {value: yankee}});
                    kiloes = 'Not all attachments were uploaded successfully';
                    sizing = offset;
                    verify = new sizing[yankee](kiloes, backup);
                    verify = verify instanceof Object ? verify : offset;
                    throw verify;
 290:
                    verify = tangon._file;
                    offset = verify.items;
                    option = offset;
                    verify = null;
                    if(!(verify != offset)) { _fun00026_ip = 331; continue _fun00025 }
 311:
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
 331:
                    golfie = {};
                    backup = tangon._file;
                    kiloes = golfie;
                    option = copyDataProperties(kiloes, backup);
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    option = 16;
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
                    verify = _closure1_slot19;
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
 499: // try_end1
                    _fun00026_ip = 590; continue _fun00025;
 501: // try_start_2
                    option = _closure1_slot19;
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
 554: // try_end2
                    oscard = undefined;
                    return oscard;
 559:
                    return report;
 562:
                    return zuuluu;
 565: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=4);
                    zuuluu = tangon._handleException;
                    zuuluu = zuuluu.bind(tangon)(report);
                    _fun00026_ip = 590; continue _fun00025;
 580:
                    zuuluu = tangon._handleAborted;
                    zuuluu = zuuluu.bind(tangon)();
 590:
                    return michal;
 593:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        var _closure2_slot2 = golfie;
        golfie = function() { // Original name: startSimpleUpload
            entity = undefined;
            tangon = _closure2_slot2;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'sendMessage';
        report['key'] = golfie;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    StartGenerator();
                    golfie = arguments[0];
                    michal = arguments[1];
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00028_ip = 601; continue _fun00027 }
 19:
                    zuuluu = undefined;
                    if(!(golfie === zuuluu)) { _fun00028_ip = 27; continue _fun00027 }
 25:
                    golfie = {};
 27:
                    verify = golfie;
                    if(!(michal === zuuluu)) { _fun00028_ip = 36; continue _fun00027 }
 34:
                    michal = {};
 36:
                    tangon = michal;
                    option = undefined;
                    romeon = undefined;
                    SaveGenerator(address=47);
 45:
                    return zuuluu;
 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00028_ip = 598; continue _fun00027 }
 56:
                    oscard = report._aborted;
                    if(oscard) { _fun00028_ip = 585; continue _fun00027 }
 68:
                    oscard = report._token;
                    yankee = '';
                    if(!(yankee === oscard)) { _fun00028_ip = 132; continue _fun00027 }
 82:
                    golfie = report._handleException;
                    oscard = global;
                    foxtra = oscard.Error;
                    oscard = foxtra.prototype;
                    offset = Object.create(oscard, {constructor: {value: foxtra}});
                    result = 'No token provided for CloudUploader';
                    echoed = offset;
                    oscard = new echoed[foxtra](result, output);
                    oscard = oscard instanceof Object ? oscard : offset;
                    oscard = golfie.bind(report)(oscard);
                    _fun00028_ip = 595; continue _fun00027;
 132:
                    offset = report._handleStart;
                    oscard = _closure1_slot15;
                    oscard = offset.bind(report)(oscard);
                    option = tangon.addFilesTo;
                    romeon = tangon.handleRequestError;
 164: // try_start_0
                    oscard = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 20;
                    tangon = offset[tangon];
                    oscard = oscard.bind(zuuluu)(tangon);
                    tangon = oscard.isAndroid;
                    tangon = tangon.bind(oscard)();
                    if(!tangon) { _fun00028_ip = 213; continue _fun00027 }
 196:
                    oscard = report.observeCompressionProgress;
                    tangon = report.files;
                    tangon = oscard.bind(report)(tangon);
 213:
                    tangon = report.compressAndCheckFileSize;
                    tangon = tangon.bind(report)();
                    SaveGenerator(address=227);
 225:
                    return tangon;
 227:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00028_ip = 567; continue _fun00027 }
 236:
                    if(tangon) { _fun00028_ip = 242; continue _fun00027 }
 239: // try_end0
                    return zuuluu;
 242: // try_start_1
                    oscard = report.setUploadingTextForUI;
                    oscard = oscard.bind(report)();
                    offset = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    oscard = 21;
                    oscard = foxtra[oscard];
                    kiloes = offset.bind(zuuluu)(oscard);
                    backup = kiloes.stageAttachmentFiles;
                    foxtra = report.files;
                    offset = report._recomputeProgress;
                    oscard = offset.bind;
                    offset = oscard.bind(offset)(report);
                    oscard = true;
                    oscard = backup.bind(kiloes)(foxtra, oscard, offset);
                    SaveGenerator(address=313);
 311:
                    return oscard;
 313:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(offset) { _fun00028_ip = 564; continue _fun00027 }
 322:
                    offset = report.files;
                    foxtra = offset.length;
                    offset = 0;
                    if(!(offset === foxtra)) { _fun00028_ip = 354; continue _fun00027 }
 339:
                    offset = verify;
                    offset = offset.content;
                    if(!(yankee !== offset)) { _fun00028_ip = 516; continue _fun00027 }
 354:
                    foxtra = report.files;
                    yankee = foxtra.every;
                    offset = function(argFoo) {
                        entity = argFoo;
                        michal = entity.status;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 22;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.CloudUploadStatus;
                        entity = entity.COMPLETED;
                        entity = michal === entity;
                        return entity;
                    };
                    yankee = yankee.bind(foxtra)(offset);
                    offset = global;
                    if(yankee) { _fun00028_ip = 419; continue _fun00027 }
 385:
                    backup = offset.Error;
                    yankee = backup.prototype;
                    foxtra = Object.create(yankee, {constructor: {value: backup}});
                    result = 'Not all attachments were uploaded successfully';
                    echoed = foxtra;
                    yankee = new echoed[backup](result, output);
                    yankee = yankee instanceof Object ? yankee : foxtra;
                    throw yankee;
 419:
                    foxtra = _closure1_slot19;
                    yankee = foxtra.log;
                    kiloes = report.id;
                    offset = offset.HermesInternal;
                    backup = offset.concat;
                    offset = 'All uploads complete, sending message to discord for ';
                    offset = backup.bind(offset)(kiloes);
                    offset = yankee.bind(foxtra)(offset);
                    yankee = report._createMessage;
                    offset = verify;
                    foxtra = romeon;
                    verify = null;
                    if(!(verify == foxtra)) { _fun00028_ip = 490; continue _fun00027 }
 480:
                    verify = report._defaultHandleRequestError;
                    _fun00028_ip = 493; continue _fun00027;
 490:
                    verify = romeon;
 493:
                    option = yankee.bind(report)(offset, verify, option);
                    SaveGenerator(address=504);
 502:
                    return option;
 504:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00028_ip = 513; continue _fun00027 }
 510: // try_end1
                    return option;
 513:
                    return option;
 516: // try_start_2
                    verify = _closure1_slot19;
                    option = verify.log;
                    yankee = report.id;
                    golfie = global;
                    golfie = golfie.HermesInternal;
                    offset = golfie.concat;
                    golfie = 'All uploads cancelled, skipping send message to discord for ';
                    golfie = offset.bind(golfie)(yankee);
                    golfie = option.bind(verify)(golfie);
 559: // try_end2
                    golfie = undefined;
                    return golfie;
 564:
                    return oscard;
 567:
                    return tangon;
 570: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=5);
                    tangon = report._handleException;
                    tangon = tangon.bind(report)(oscard);
                    _fun00028_ip = 595; continue _fun00027;
 585:
                    tangon = report._handleAborted;
                    tangon = tangon.bind(report)();
 595:
                    return zuuluu;
 598:
                    return michal;
 601:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        var _closure2_slot1 = golfie;
        golfie = function() { // Original name: sendMessage
            entity = undefined;
            tangon = _closure2_slot1;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = '_defaultHandleRequestError';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                tangon = argBar;
                entity = this;
                entity = entity._raiseEndpointErrors;
                if(entity) { _fun00030_ip = 19; continue _fun00029 }
 15:
                entity = undefined;
                return entity;
 19:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 23;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                zuuluu = entity.APIError;
                entity = {};
                michal = null;
                report = michal != tangon;
                michal = 400;
                if(!report) { _fun00030_ip = 70; continue _fun00029 }
 67:
                michal = tangon;
 70:
                entity['status'] = michal;
                michal = argFoo;
                entity['body'] = michal;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                golfie = michal;
                oscard = entity;
                entity = new golfie[zuuluu](oscard, report);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = '_trackMessageSentWithAttachments';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                backup = argFoo;
                zuuluu = argBar;
                golfie = this;
                var _closure3_slot0 = zuuluu;
                michal = null;
                if(!(michal != backup)) { _fun00032_ip = 466; continue _fun00031 }
 24:
                kiloes = backup.attachments;
                if(!(michal == kiloes)) { _fun00032_ip = 57; continue _fun00031 }
 34:
                report = backup.message;
                oscard = michal == report;
                tangon = undefined;
                if(oscard) { _fun00032_ip = 54; continue _fun00031 }
 48:
                tangon = report.attachments;
 54:
                kiloes = tangon;
 57:
                if(!(michal != kiloes)) { _fun00032_ip = 466; continue _fun00031 }
 64:
                tangon = kiloes.length;
                oscard = 0;
                if(!(oscard !== tangon)) { _fun00032_ip = 466; continue _fun00031 }
 78:
                zuuluu = zuuluu[oscard];
                report = zuuluu.item;
                option = michal == report;
                zuuluu = undefined;
                tangon = undefined;
                if(option) { _fun00032_ip = 104; continue _fun00031 }
 98:
                tangon = report.target;
 104:
                if(!(michal == tangon)) { _fun00032_ip = 143; continue _fun00031 }
 108:
                report = _closure1_slot0;
                option = _closure1_slot2;
                michal = 18;
                michal = option[michal];
                michal = report.bind(zuuluu)(michal);
                michal = michal.UploadTargets;
                tangon = michal.MESSAGE_ATTACHMENT;
 143:
                report = _closure1_slot0;
                verify = _closure1_slot2;
                michal = 18;
                michal = verify[michal];
                michal = report.bind(zuuluu)(michal);
                michal = michal.UploadTargets;
                michal = michal.MESSAGE_ATTACHMENT;
                if(!(tangon === michal)) { _fun00032_ip = 466; continue _fun00031 }
 185:
                foxtra = new Array(0);
                var _closure3_slot1 = foxtra;
                romeon = new Array(0);
                var _closure3_slot2 = romeon;
                yankee = new Array(0);
                var _closure3_slot3 = yankee;
                offset = new Array(0);
                var _closure3_slot4 = offset;
                verify = new Array(0);
                var _closure3_slot5 = verify;
                report = new Array(0);
                var _closure3_slot6 = report;
                michal = kiloes.map;
                entity = function(argFoo) {
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        zuuluu = argFoo;
                        var _closure4_slot0 = zuuluu;
                        entity = zuuluu.id;
                        report = null;
                        if(!(report != entity)) { _fun00034_ip = 292; continue _fun00033 }
 23:
                        entity = zuuluu.content_type;
                        if(!(report != entity)) { _fun00034_ip = 292; continue _fun00033 }
 36:
                        entity = zuuluu.size;
                        if(!(report != entity)) { _fun00034_ip = 292; continue _fun00033 }
 48:
                        entity = zuuluu.width;
                        if(!(report != entity)) { _fun00034_ip = 292; continue _fun00033 }
 60:
                        entity = zuuluu.height;
                        if(!(report != entity)) { _fun00034_ip = 292; continue _fun00033 }
 72:
                        golfie = _closure3_slot1;
                        oscard = golfie.push;
                        tangon = zuuluu.id;
                        tangon = oscard.bind(golfie)(tangon);
                        golfie = _closure3_slot2;
                        oscard = golfie.push;
                        tangon = zuuluu.content_type;
                        tangon = oscard.bind(golfie)(tangon);
                        golfie = _closure3_slot3;
                        oscard = golfie.push;
                        tangon = zuuluu.size;
                        tangon = oscard.bind(golfie)(tangon);
                        golfie = _closure3_slot4;
                        oscard = golfie.push;
                        tangon = zuuluu.width;
                        tangon = oscard.bind(golfie)(tangon);
                        oscard = _closure3_slot5;
                        tangon = oscard.push;
                        zuuluu = zuuluu.height;
                        zuuluu = tangon.bind(oscard)(zuuluu);
                        tangon = _closure3_slot0;
                        zuuluu = tangon.find;
                        michal = function(argFoo) {
                            entity = argFoo;
                            michal = entity.filename;
                            entity = _closure4_slot0;
                            entity = entity.filename;
                            entity = michal === entity;
                            return entity;
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        oscard = report == michal;
                        tangon = undefined;
                        if(oscard) { _fun00034_ip = 206; continue _fun00033 }
 201:
                        tangon = michal.item;
 206:
                        tangon = report != tangon;
                        if(!tangon) { _fun00034_ip = 235; continue _fun00033 }
 213:
                        oscard = report == michal;
                        golfie = undefined;
                        if(oscard) { _fun00034_ip = 227; continue _fun00033 }
 222:
                        golfie = michal.item;
 227:
                        oscard = 'createdUsingInAppCamera';
                        tangon = oscard in golfie;
 235:
                        if(!tangon) { _fun00034_ip = 262; continue _fun00033 }
 238:
                        oscard = report == michal;
                        zuuluu = undefined;
                        if(oscard) { _fun00034_ip = 258; continue _fun00033 }
 247:
                        oscard = michal.item;
                        zuuluu = oscard.createdUsingInAppCamera;
 258:
                        tangon = report != zuuluu;
 262:
                        zuuluu = false;
                        if(!tangon) { _fun00034_ip = 278; continue _fun00033 }
 267:
                        michal = michal.item;
                        zuuluu = michal.createdUsingInAppCamera;
 278:
                        michal = _closure3_slot6;
                        entity = michal.push;
                        entity = entity.bind(michal)(zuuluu);
 292:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = michal.bind(kiloes)(entity);
                michal = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 24;
                entity = tangon[entity];
                tangon = michal.bind(zuuluu)(entity);
                zuuluu = tangon.track;
                entity = _closure1_slot14;
                michal = entity.MESSAGE_SENT_WITH_ATTACHMENTS;
                entity = {};
                kiloes = kiloes.length;
                entity['num_attachments'] = kiloes;
                kiloes = backup.id;
                entity['message_id'] = kiloes;
                backup = backup.channel_id;
                entity['channel'] = backup;
                entity['attachment_ids'] = foxtra;
                entity['attachment_mime_types'] = romeon;
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
                option = verify.getType;
                option = option.bind(verify)();
                entity['network_connection'] = option;
                entity['attachment_created_in_apps'] = report;
                report = golfie.preCompressionFileSizes;
                report = report.length;
                report = report > oscard;
                if(!report) { _fun00032_ip = 450; continue _fun00031 }
 432:
                oscard = {};
                golfie = golfie.preCompressionFileSizes;
                oscard['attachment_precompression_sizes'] = golfie;
                report = oscard;
 450:
                output = entity;
                sizing = report;
                report = copyDataProperties(output, sizing);
                entity = zuuluu.bind(tangon)(michal, entity);
 466:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'observeCompressionProgress';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            report = argFoo;
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = function() { // Original name: cleanUp
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    michal = _closure3_slot0;
                    tangon = michal.mediaEventSubscriptions;
                    zuuluu = tangon.get;
                    michal = michal._file;
                    michal = michal.id;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00036_ip = 50; continue _fun00035 }
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
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    entity = argFoo;
                    report = entity.item;
                    zuuluu = report.platform;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 25;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    michal = michal.UploadPlatform;
                    michal = michal.REACT_NATIVE;
                    if(!(zuuluu === michal)) { _fun00038_ip = 93; continue _fun00037 }
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
            golfie = _closure1_slot20;
            oscard = golfie.addListener;
            report = 'compression-progress';
            entity = function(argFoo) {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.uri;
                    tangon = entity.progress;
                    michal = _closure3_slot0;
                    zuuluu = michal.uploadItems;
                    michal = zuuluu.has;
                    michal = michal.bind(zuuluu)(oscard);
                    if(!michal) { _fun00040_ip = 371; continue _fun00039 }
 44:
                    michal = _closure3_slot0;
                    report = michal.uploadItems;
                    zuuluu = report.get;
                    zuuluu = zuuluu.bind(report)(oscard);
                    zuuluu['compressionProgress'] = tangon;
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 26;
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
                    if(!(!(golfie >= tangon))) { _fun00040_ip = 244; continue _fun00039 }
 146:
                    oscard = _closure3_slot0;
                    michal = {};
                    backup = oscard._file;
                    kiloes = michal;
                    verify = copyDataProperties(kiloes, backup);
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    option = 16;
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
                    _fun00040_ip = 343; continue _fun00039;
 244:
                    michal = _closure3_slot1;
                    michal = michal.bind(zuuluu)();
                    michal = _closure3_slot0;
                    michal = michal._file;
                    oscard = michal.items;
                    michal = null;
                    if(!(michal != oscard)) { _fun00040_ip = 293; continue _fun00039 }
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
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = '_createMessage';
        report['key'] = golfie;
        golfie = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    StartGenerator();
                    source = argFoo;
                    oscard = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00042_ip = 1339; continue _fun00041 }
 18:
                    var _closure4_slot0 = oscard;
                    romeon = source;
                    verify = argBar;
                    zuuluu = undefined;
                    report = undefined;
                    golfie = undefined;
                    tangon = undefined;
                    sizing = undefined;
                    var _closure4_slot2 = zuuluu;
                    kiloes = undefined;
                    var _closure4_slot3 = zuuluu;
                    offset = undefined;
                    var _closure4_slot4 = zuuluu;
                    foxtra = undefined;
                    var _closure4_slot5 = zuuluu;
                    var _closure4_slot1 = oscard;
                    output = _closure1_slot1;
                    result = _closure1_slot2;
                    yankee = 27;
                    yankee = result[yankee];
                    update = output.bind(zuuluu)(yankee);
                    echoed = update.prepareMessagePayload;
                    papara = oscard._token;
                    cntext = oscard.files;
                    config = argBaz;
                    target = update;
                    record = source;
                    yankee = target[echoed](papara, cntext, record, config, sequen);
                    output = yankee.body;
                    sizing = output;
                    _closure4_slot2 = output;
                    yankee = yankee.headers;
                    kiloes = yankee;
                    _closure4_slot3 = yankee;
                    output = oscard._method;
                    yankee = 'POST';
                    if(!(yankee !== output)) { _fun00042_ip = 192; continue _fun00041 }
 159:
                    output = _closure1_slot0;
                    result = _closure1_slot2;
                    yankee = 14;
                    yankee = result[yankee];
                    yankee = output.bind(zuuluu)(yankee);
                    yankee = yankee.HTTP;
                    yankee = yankee.patch;
                    _fun00042_ip = 223; continue _fun00041;
 192:
                    result = _closure1_slot0;
                    echoed = _closure1_slot2;
                    output = 14;
                    output = echoed[output];
                    output = result.bind(zuuluu)(output);
                    output = output.HTTP;
                    yankee = output.post;
 223:
                    offset = yankee;
                    _closure4_slot4 = yankee;
 230: // try_start_0
                    yankee = oscard._file;
                    output = yankee.items;
                    foxtra = output;
                    yankee = null;
                    if(!(yankee != output)) { _fun00042_ip = 271; continue _fun00041 }
 251:
                    result = foxtra;
                    output = result.forEach;
                    foxtra = function(argFoo) {
                        entity = argFoo;
                        michal = entity.item;
                        entity = 100;
                        michal['progress'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    foxtra = output.bind(result)(foxtra);
 271:
                    foxtra = {};
                    cntext = oscard._file;
                    papara = foxtra;
                    output = copyDataProperties(papara, cntext);
                    source = _closure1_slot0;
                    ctrled = _closure1_slot2;
                    output = 16;
                    result = ctrled[output];
                    result = source.bind(zuuluu)(result);
                    update = result.intl;
                    echoed = update.string;
                    result = ctrled[output];
                    result = source.bind(zuuluu)(result);
                    result = result.t;
                    result = result.Dmx3f3;
                    echoed = echoed.bind(update)(result);
                    result = 'name';
                    foxtra[result] = echoed;
                    echoed = 100;
                    result = 'progress';
                    foxtra[result] = echoed;
                    oscard['_file'] = foxtra;
                    foxtra = ctrled[output];
                    foxtra = source.bind(zuuluu)(foxtra);
                    update = foxtra.intl;
                    echoed = update.string;
                    foxtra = ctrled[output];
                    foxtra = source.bind(zuuluu)(foxtra);
                    foxtra = foxtra.t;
                    foxtra = foxtra.FeCCCw;
                    echoed = echoed.bind(update)(foxtra);
                    foxtra = new Array(8);
                    foxtra[0] = echoed;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    vacuum = echoed.intl;
                    update = vacuum.string;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    echoed = echoed.t;
                    echoed = echoed.+q6H7+;
                    echoed = update.bind(vacuum)(echoed);
                    foxtra[1] = echoed;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    vacuum = echoed.intl;
                    update = vacuum.string;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    echoed = echoed.t;
                    echoed = echoed.9jhZ0N;
                    echoed = update.bind(vacuum)(echoed);
                    foxtra[2] = echoed;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    vacuum = echoed.intl;
                    update = vacuum.string;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    echoed = echoed.t;
                    echoed = echoed.CGSHsb;
                    echoed = update.bind(vacuum)(echoed);
                    foxtra[3] = echoed;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    vacuum = echoed.intl;
                    update = vacuum.string;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    echoed = echoed.t;
                    echoed = echoed.1yQ2Cw;
                    echoed = update.bind(vacuum)(echoed);
                    foxtra[4] = echoed;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    vacuum = echoed.intl;
                    update = vacuum.string;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    echoed = echoed.t;
                    echoed = echoed.SuXJy8;
                    echoed = update.bind(vacuum)(echoed);
                    foxtra[5] = echoed;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    vacuum = echoed.intl;
                    update = vacuum.string;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    echoed = echoed.t;
                    echoed = echoed.hKsCRE;
                    echoed = update.bind(vacuum)(echoed);
                    foxtra[6] = echoed;
                    echoed = ctrled[output];
                    echoed = source.bind(zuuluu)(echoed);
                    update = echoed.intl;
                    echoed = update.string;
                    output = ctrled[output];
                    output = source.bind(zuuluu)(output);
                    output = output.t;
                    output = output.5ue6h4;
                    output = echoed.bind(update)(output);
                    foxtra[7] = output;
                    _closure4_slot5 = foxtra;
                    foxtra = global;
                    echoed = foxtra.setInterval;
                    output = function() {
                        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                            tangon = _closure1_slot1;
                            entity = _closure1_slot2;
                            oscard = 26;
                            michal = entity[oscard];
                            entity = undefined;
                            golfie = tangon.bind(entity)(michal);
                            report = golfie.sample;
                            tangon = _closure4_slot5;
                            tangon = report.bind(golfie)(tangon);
                            report = null;
                            if(!(report != tangon)) { _fun00044_ip = 146; continue _fun00043 }
 49:
                            report = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            zuuluu = zuuluu[oscard];
                            oscard = report.bind(entity)(zuuluu);
                            report = oscard.remove;
                            zuuluu = _closure4_slot5;
                            zuuluu = report.bind(oscard)(zuuluu, tangon);
                            report = _closure4_slot0;
                            michal = {};
                            option = report._file;
                            verify = michal;
                            zuuluu = copyDataProperties(verify, option);
                            zuuluu = 'name';
                            michal[zuuluu] = tangon;
                            zuuluu = 100;
                            tangon = 'progress';
                            michal[tangon] = zuuluu;
                            report['_file'] = michal;
                            zuuluu = report.emit;
                            michal = report._file;
                            michal = zuuluu.bind(report)(tangon, michal);
 146:
                            return entity;
                        }
                    };
                    foxtra = 4000;
                    foxtra = echoed.bind(zuuluu)(output, foxtra);
                    oscard['processingMessageChangeInterval'] = foxtra;
                    output = oscard.emit;
                    foxtra = oscard._file;
                    foxtra = output.bind(oscard)(result, foxtra);
                    result = _closure1_slot10;
                    output = result.get;
                    foxtra = 'send_fail_100';
                    foxtra = output.bind(result)(foxtra);
                    if(foxtra) { _fun00042_ip = 983; continue _fun00041 }
 851:
                    foxtra = offset;
                    offset = {};
                    output = oscard._url;
                    offset['url'] = output;
                    offset['body'] = sizing;
                    offset['headers'] = kiloes;
                    cntext = _closure1_slot18;
                    papara = offset;
                    kiloes = copyDataProperties(papara, cntext);
                    sizing = false;
                    kiloes = 'rejectWithError';
                    offset[kiloes] = sizing;
                    offset = foxtra.bind(zuuluu)(offset);
                    SaveGenerator(address=906);
 904:
                    return offset;
 906:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=12);
                    if(foxtra) { _fun00042_ip = 980; continue _fun00041 }
 912:
                    tangon = offset;
                    foxtra = romeon;
                    foxtra = foxtra.channel_id;
                    if(!(yankee != foxtra)) { _fun00042_ip = 975; continue _fun00041 }
 927:
                    kiloes = _closure1_slot1;
                    sizing = _closure1_slot2;
                    foxtra = 28;
                    foxtra = sizing[foxtra];
                    output = kiloes.bind(zuuluu)(foxtra);
                    sizing = output.receiveMessage;
                    kiloes = romeon.channel_id;
                    romeon = tangon;
                    foxtra = romeon.body;
                    romeon = true;
                    romeon = sizing.bind(output)(kiloes, foxtra, romeon);
 975: // try_end0
                    _fun00042_ip = 1241; continue _fun00041;
 980:
                    return offset;
 983: // try_start_1
                    foxtra = _closure1_slot19;
                    romeon = foxtra.log;
                    offset = 'Skipping message send with upload because send_fail_100 is enabled';
                    offset = romeon.bind(foxtra)(offset);
                    offset = verify;
                    if(!(yankee != offset)) { _fun00042_ip = 1035; continue _fun00041 }
 1010:
                    foxtra = verify;
                    romeon = {};
                    yankee = 500;
                    offset = function() {
                        entity = null;
                        return entity;
                    };
                    offset = foxtra.bind(zuuluu)(romeon, yankee, offset);
 1035:
                    yankee = oscard._handleComplete;
                    offset = {};
                    offset = yankee.bind(oscard)(offset);
 1048: // try_end1
                    offset = undefined;
                    return offset;
 1053: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=13);
                    offset = oscard._aborted;
                    if(offset) { _fun00042_ip = 1314; continue _fun00041 }
 1067:
                    offset = backup;
                    yankee = offset.status;
                    offset = 400;
                    if(!(yankee >= offset)) { _fun00042_ip = 1128; continue _fun00041 }
 1085:
                    yankee = verify;
                    offset = null;
                    if(!(offset != yankee)) { _fun00042_ip = 1128; continue _fun00041 }
 1094:
                    yankee = verify;
                    verify = backup;
                    offset = verify.body;
                    verify = verify.status;
                    option = function() {
                        tangon = _closure1_slot3;
                        zuuluu = undefined;
                        michal = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(michal) { _fun00046_ip = 114; continue _fun00045 }
 7:
                                    tangon = _closure4_slot4;
                                    michal = {};
                                    report = _closure4_slot1;
                                    report = report._url;
                                    michal['url'] = report;
                                    report = {};
                                    golfie = _closure4_slot2;
                                    option = report;
                                    oscard = copyDataProperties(option, golfie);
                                    golfie = argFoo;
                                    option = report;
                                    oscard = copyDataProperties(option, golfie);
                                    michal['body'] = report;
                                    zuuluu = _closure4_slot3;
                                    michal['headers'] = zuuluu;
                                    golfie = _closure1_slot18;
                                    option = michal;
                                    zuuluu = copyDataProperties(option, golfie);
                                    report = false;
                                    zuuluu = 'rejectWithError';
                                    michal[zuuluu] = report;
                                    zuuluu = undefined;
                                    michal = tangon.bind(zuuluu)(michal);
                                    SaveGenerator(address=102);
 100:
                                    return michal;
 102:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(tangon) { _fun00046_ip = 111; continue _fun00045 }
 108:
                                    return zuuluu;
 111:
                                    return michal;
 114:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        michal = tangon.bind(zuuluu)(michal);
                        var _closure5_slot0 = michal;
                        entity = function() {
                            entity = undefined;
                            tangon = _closure5_slot0;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        return entity;
                    };
                    option = option.bind(zuuluu)();
                    option = yankee.bind(zuuluu)(offset, verify, option);
 1128:
                    offset = _closure1_slot19;
                    verify = offset.error;
                    option = backup;
                    kiloes = null;
                    option = kiloes == option;
                    sizing = undefined;
                    if(option) { _fun00042_ip = 1159; continue _fun00041 }
 1151:
                    option = backup;
                    sizing = option.status;
 1159:
                    option = global;
                    foxtra = option.JSON;
                    romeon = foxtra.stringify;
                    yankee = backup;
                    kiloes = kiloes == yankee;
                    yankee = undefined;
                    if(kiloes) { _fun00042_ip = 1190; continue _fun00041 }
 1185:
                    yankee = backup.body;
 1190:
                    record = romeon.bind(foxtra)(yankee);
                    sequen = oscard.id;
                    option = option.HermesInternal;
                    foxtra = option.concat;
                    target = 'Error sending message: ';
                    cntext = ' - ';
                    config = ' for ';
                    papara = sizing;
                    option = target[foxtra](papara, cntext, record, config, sequen, vacuum);
                    option = verify.bind(offset)(option);
 1241:
                    offset = oscard._trackMessageSentWithAttachments;
                    verify = tangon;
                    report = verify;
                    option = null;
                    yankee = option == verify;
                    verify = undefined;
                    if(yankee) { _fun00042_ip = 1271; continue _fun00041 }
 1266:
                    verify = report.body;
 1271:
                    report = oscard.files;
                    report = offset.bind(oscard)(verify, report);
                    report = oscard._handleComplete;
                    golfie = tangon;
                    option = option == tangon;
                    tangon = undefined;
                    if(option) { _fun00042_ip = 1306; continue _fun00041 }
 1301:
                    tangon = golfie.body;
 1306:
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 1314:
                    tangon = _closure1_slot19;
                    zuuluu = tangon.log;
                    michal = 'Upload was aborted for send message; skip handling request error';
                    michal = zuuluu.bind(tangon)(michal);
                    michal = undefined;
                    return michal;
 1339:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        var _closure2_slot0 = golfie;
        oscard = function() { // Original name: _createMessage
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = oscard;
        entity[7] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 29;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/uploader/native/CloudUploader.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();