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
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
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
 343:
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
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot7;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot6;
            entity = _closure1_slot24;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00008_ip = 71; continue _fun00007 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
            _fun00010_ip = 74; continue _fun00009;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot24 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
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
                golfie = arguments[2];
                oscard = this;
                report = undefined;
                if(!(golfie === report)) { _fun00012_ip = 18; continue _fun00011 }
 12:
                golfie = 'POST';
 18:
                entity = _closure1_slot4;
                tangon = _closure2_slot3;
                entity = entity.bind(report)(oscard, tangon);
                michal = _closure1_slot23;
                entity = new Array(3);
                option = argFoo;
                entity[0] = option;
                entity[1] = golfie;
                golfie = arguments[3];
                entity[2] = golfie;
                entity = michal.bind(report)(oscard, tangon, entity);
                michal = global;
                tangon = michal.Map;
                oscard = tangon.prototype;
                oscard = Object.create(oscard, {constructor: {value: tangon}});
                romeon = oscard;
                tangon = new romeon[tangon](yankee);
                tangon = tangon instanceof Object ? tangon : oscard;
                entity['mediaEventSubscriptions'] = tangon;
                tangon = michal.Map;
                oscard = tangon.prototype;
                oscard = Object.create(oscard, {constructor: {value: tangon}});
                romeon = oscard;
                tangon = new romeon[tangon](yankee);
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
        var _closure2_slot3 = tangon;
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
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    zuuluu = argFoo;
                    michal = arguments[1];
                    oscard = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00014_ip = 966; continue _fun00013 }
 21:
                    var _closure4_slot0 = oscard;
                    golfie = zuuluu;
                    var _closure4_slot1 = zuuluu;
                    zuuluu = undefined;
                    if(!(michal === zuuluu)) { _fun00014_ip = 40; continue _fun00013 }
 38:
                    michal = {};
 40:
                    yankee = michal;
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
                    SaveGenerator(address=80);
 78:
                    return zuuluu;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00014_ip = 963; continue _fun00013 }
 89:
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
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00016_ip = 237; continue _fun00015 }
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
                                SaveGenerator(address=176);
 174:
                                return michal;
 176:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(oscard) { _fun00016_ip = 234; continue _fun00015 }
 182:
                                _closure4_slot5 = michal;
                                oscard = _closure4_slot4;
                                oscard = oscard._aborted;
                                if(!oscard) { _fun00016_ip = 231; continue _fun00015 }
 199:
                                oscard = _closure1_slot1;
                                report = _closure1_slot2;
                                report = report[golfie];
                                oscard = oscard.bind(zuuluu)(report);
                                report = oscard.endBackgroundTask;
                                tangon = _closure4_slot5;
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
 197: // try_start_0
                    option = golfie;
                    oscard['files'] = option;
                    config = _closure2_slot3;
                    offset = function(argFoo, argBar, argBaz, argCor) { // Original name: _superPropGet
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            report = argFoo;
                            golfie = argBaz;
                            var _closure5_slot0 = golfie;
                            oscard = _closure1_slot8;
                            zuuluu = _closure1_slot7;
                            entity = 1;
                            tangon = 3;
                            option = entity & tangon;
                            entity = report;
                            if(!option) { _fun00018_ip = 44; continue _fun00017 }
 39:
                            entity = report.prototype;
 44:
                            report = undefined;
                            zuuluu = zuuluu.bind(report)(entity);
                            entity = 'upload';
                            entity = oscard.bind(report)(zuuluu, entity, golfie);
                            var _closure5_slot1 = entity;
                            zuuluu = 2;
                            zuuluu = zuuluu & tangon;
                            if(!zuuluu) { _fun00018_ip = 81; continue _fun00017 }
 76:
                            entity = function(argFoo) {
                                tangon = _closure5_slot1;
                                zuuluu = tangon.apply;
                                michal = _closure5_slot0;
                                entity = argFoo;
                                entity = zuuluu.bind(tangon)(michal, entity);
                                return entity;
                            };
 81:
                            return entity;
                        }
                    };
                    sequen = 'upload';
                    ctrled = 3;
                    record = undefined;
                    vacuum = oscard;
                    offset = record[offset](config, sequen, vacuum, ctrled, source);
                    output = {};
                    verify = _closure1_slot0;
                    result = _closure1_slot2;
                    golfie = 16;
                    echoed = result[golfie];
                    echoed = verify.bind(zuuluu)(echoed);
                    update = echoed.intl;
                    echoed = update.formatToPlainString;
                    golfie = result[golfie];
                    golfie = verify.bind(zuuluu)(golfie);
                    golfie = golfie.t;
                    result = golfie.Iaj5LS;
                    verify = {};
                    golfie = option.length;
                    verify['count'] = golfie;
                    golfie = 0;
                    source = option[golfie];
                    source = source.filename;
                    verify['filename'] = source;
                    verify = echoed.bind(update)(result, verify);
                    output['name'] = verify;
                    verify = new Array(3);
                    verify[0] = output;
                    verify[1] = yankee;
                    verify[2] = option;
                    verify = offset.bind(zuuluu)(verify);
                    verify = oscard._file;
                    option = option.length;
                    verify['attachmentsCount'] = option;
                    verify = oscard._handleStart;
                    option = null;
                    option = verify.bind(oscard)(option);
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
                    if(option) { _fun00014_ip = 780; continue _fun00013 }
 423:
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
                    SaveGenerator(address=477);
 475:
                    return option;
 477:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00014_ip = 777; continue _fun00013 }
 486:
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
                    if(!(!(option > verify))) { _fun00014_ip = 724; continue _fun00013 }
 628:
                    output = foxtra;
                    result = sizing;
                    verify = result.getMaxTotalAttachmentSize;
                    verify = verify.bind(result)();
                    if(!(!(output > verify))) { _fun00014_ip = 671; continue _fun00013 }
 648:
                    verify = backup;
                    verify = verify.bind(zuuluu)();
                    romeon = verify;
                    verify = verify.done;
                    if(verify) { _fun00014_ip = 780; continue _fun00013 }
 666:
                    _fun00014_ip = 423; continue _fun00013;
 671:
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
 719: // try_end0
                    verify = undefined;
                    return verify;
 724: // try_start_1
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
 772: // try_end1
                    verify = undefined;
                    return verify;
 777:
                    return option;
 780: // try_start_2
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
                    config = function(argFoo, argBar) {
                        michal = argFoo;
                        var _closure5_slot0 = michal;
                        michal = argBar;
                        var _closure5_slot1 = michal;
                        tangon = _closure4_slot0;
                        report = tangon.once;
                        zuuluu = 'error';
                        michal = function(argFoo) {
                            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                entity = _closure4_slot0;
                                michal = entity._raiseEndpointErrors;
                                if(michal) { _fun00020_ip = 32; continue _fun00019 }
 19:
                                zuuluu = _closure5_slot0;
                                michal = undefined;
                                michal = zuuluu.bind(michal)(michal);
                                _fun00020_ip = 46; continue _fun00019;
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
                    record = golfie;
                    report = new record[option](config, sequen);
                    report = report instanceof Object ? report : golfie;
 894: // try_end2
                    return report;
 897: // catch_target0 // catch_target1 // catch_target2
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
 963:
                    return michal;
 966:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        entity = option.bind(zuuluu)(entity);
        var _closure2_slot2 = entity;
        entity = function() { // Original name: uploadFiles
            entity = undefined;
            tangon = _closure2_slot2;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = 'sendMessage';
        report['key'] = golfie;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    golfie = arguments[0];
                    michal = arguments[1];
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00022_ip = 607; continue _fun00021 }
 19:
                    zuuluu = undefined;
                    if(!(golfie === zuuluu)) { _fun00022_ip = 27; continue _fun00021 }
 25:
                    golfie = {};
 27:
                    verify = golfie;
                    if(!(michal === zuuluu)) { _fun00022_ip = 36; continue _fun00021 }
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
                    if(oscard) { _fun00022_ip = 604; continue _fun00021 }
 56:
                    oscard = report._aborted;
                    if(oscard) { _fun00022_ip = 591; continue _fun00021 }
 68:
                    oscard = report._token;
                    yankee = '';
                    if(!(yankee === oscard)) { _fun00022_ip = 132; continue _fun00021 }
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
                    _fun00022_ip = 601; continue _fun00021;
 132:
                    offset = report._handleStart;
                    oscard = _closure1_slot15;
                    oscard = offset.bind(report)(oscard);
                    option = tangon.addFilesTo;
                    romeon = tangon.handleRequestError;
 162: // try_start_0
                    oscard = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 20;
                    tangon = offset[tangon];
                    oscard = oscard.bind(zuuluu)(tangon);
                    tangon = oscard.isAndroid;
                    tangon = tangon.bind(oscard)();
                    if(!tangon) { _fun00022_ip = 213; continue _fun00021 }
 194:
                    oscard = report.observeCompressionProgress;
                    tangon = report.files;
                    tangon = oscard.bind(report)(tangon);
 213:
                    tangon = report.compressAndCheckFileSize;
                    tangon = tangon.bind(report)();
                    SaveGenerator(address=229);
 227:
                    return tangon;
 229:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00022_ip = 573; continue _fun00021 }
 238:
                    if(tangon) { _fun00022_ip = 244; continue _fun00021 }
 241: // try_end0
                    return zuuluu;
 244: // try_start_1
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
                    SaveGenerator(address=319);
 317:
                    return oscard;
 319:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(offset) { _fun00022_ip = 570; continue _fun00021 }
 328:
                    offset = report.files;
                    foxtra = offset.length;
                    offset = 0;
                    if(!(offset === foxtra)) { _fun00022_ip = 360; continue _fun00021 }
 345:
                    offset = verify;
                    offset = offset.content;
                    if(!(yankee !== offset)) { _fun00022_ip = 521; continue _fun00021 }
 360:
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
                    if(yankee) { _fun00022_ip = 423; continue _fun00021 }
 389:
                    backup = offset.Error;
                    yankee = backup.prototype;
                    foxtra = Object.create(yankee, {constructor: {value: backup}});
                    result = 'Not all attachments were uploaded successfully';
                    echoed = foxtra;
                    yankee = new echoed[backup](result, output);
                    yankee = yankee instanceof Object ? yankee : foxtra;
                    throw yankee;
 423:
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
                    if(!(verify == foxtra)) { _fun00022_ip = 495; continue _fun00021 }
 485:
                    verify = report._defaultHandleRequestError;
                    _fun00022_ip = 498; continue _fun00021;
 495:
                    verify = romeon;
 498:
                    option = yankee.bind(report)(offset, verify, option);
                    SaveGenerator(address=509);
 507:
                    return option;
 509:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00022_ip = 518; continue _fun00021 }
 515: // try_end1
                    return option;
 518:
                    return option;
 521: // try_start_2
                    verify = _closure1_slot19;
                    option = verify.log;
                    yankee = report.id;
                    golfie = global;
                    golfie = golfie.HermesInternal;
                    offset = golfie.concat;
                    golfie = 'All uploads cancelled, skipping send message to discord for ';
                    golfie = offset.bind(golfie)(yankee);
                    golfie = option.bind(verify)(golfie);
 565: // try_end2
                    golfie = undefined;
                    return golfie;
 570:
                    return oscard;
 573:
                    return tangon;
 576: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=5);
                    tangon = report._handleException;
                    tangon = tangon.bind(report)(oscard);
                    _fun00022_ip = 601; continue _fun00021;
 591:
                    tangon = report._handleAborted;
                    tangon = tangon.bind(report)();
 601:
                    return zuuluu;
 604:
                    return michal;
 607:
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
        entity[1] = report;
        report = {};
        golfie = '_defaultHandleRequestError';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                tangon = argBar;
                entity = this;
                entity = entity._raiseEndpointErrors;
                if(entity) { _fun00024_ip = 19; continue _fun00023 }
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
                if(!report) { _fun00024_ip = 70; continue _fun00023 }
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
        entity[2] = report;
        report = {};
        golfie = '_trackMessageSentWithAttachments';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                backup = argFoo;
                zuuluu = argBar;
                golfie = this;
                var _closure3_slot0 = zuuluu;
                michal = null;
                if(!(michal != backup)) { _fun00026_ip = 464; continue _fun00025 }
 24:
                kiloes = backup.attachments;
                if(!(michal == kiloes)) { _fun00026_ip = 57; continue _fun00025 }
 34:
                report = backup.message;
                oscard = michal == report;
                tangon = undefined;
                if(oscard) { _fun00026_ip = 54; continue _fun00025 }
 48:
                tangon = report.attachments;
 54:
                kiloes = tangon;
 57:
                if(!(michal != kiloes)) { _fun00026_ip = 464; continue _fun00025 }
 64:
                tangon = kiloes.length;
                oscard = 0;
                if(!(oscard !== tangon)) { _fun00026_ip = 464; continue _fun00025 }
 78:
                zuuluu = zuuluu[oscard];
                report = zuuluu.item;
                option = michal == report;
                zuuluu = undefined;
                tangon = undefined;
                if(option) { _fun00026_ip = 104; continue _fun00025 }
 98:
                tangon = report.target;
 104:
                if(!(michal == tangon)) { _fun00026_ip = 143; continue _fun00025 }
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
                if(!(tangon === michal)) { _fun00026_ip = 464; continue _fun00025 }
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
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        zuuluu = argFoo;
                        var _closure4_slot0 = zuuluu;
                        entity = zuuluu.id;
                        report = null;
                        if(!(report != entity)) { _fun00028_ip = 290; continue _fun00027 }
 23:
                        entity = zuuluu.content_type;
                        if(!(report != entity)) { _fun00028_ip = 290; continue _fun00027 }
 36:
                        entity = zuuluu.size;
                        if(!(report != entity)) { _fun00028_ip = 290; continue _fun00027 }
 48:
                        entity = zuuluu.width;
                        if(!(report != entity)) { _fun00028_ip = 290; continue _fun00027 }
 60:
                        entity = zuuluu.height;
                        if(!(report != entity)) { _fun00028_ip = 290; continue _fun00027 }
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
                        if(oscard) { _fun00028_ip = 204; continue _fun00027 }
 199:
                        tangon = michal.item;
 204:
                        tangon = report != tangon;
                        if(!tangon) { _fun00028_ip = 233; continue _fun00027 }
 211:
                        oscard = report == michal;
                        golfie = undefined;
                        if(oscard) { _fun00028_ip = 225; continue _fun00027 }
 220:
                        golfie = michal.item;
 225:
                        oscard = 'createdUsingInAppCamera';
                        tangon = oscard in golfie;
 233:
                        if(!tangon) { _fun00028_ip = 260; continue _fun00027 }
 236:
                        oscard = report == michal;
                        zuuluu = undefined;
                        if(oscard) { _fun00028_ip = 256; continue _fun00027 }
 245:
                        oscard = michal.item;
                        zuuluu = oscard.createdUsingInAppCamera;
 256:
                        tangon = report != zuuluu;
 260:
                        zuuluu = false;
                        if(!tangon) { _fun00028_ip = 276; continue _fun00027 }
 265:
                        michal = michal.item;
                        zuuluu = michal.createdUsingInAppCamera;
 276:
                        michal = _closure3_slot6;
                        entity = michal.push;
                        entity = entity.bind(michal)(zuuluu);
 290:
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
                if(!report) { _fun00026_ip = 448; continue _fun00025 }
 430:
                oscard = {};
                golfie = golfie.preCompressionFileSizes;
                oscard['attachment_precompression_sizes'] = golfie;
                report = oscard;
 448:
                output = entity;
                sizing = report;
                report = copyDataProperties(output, sizing);
                entity = zuuluu.bind(tangon)(michal, entity);
 464:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'observeCompressionProgress';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            report = argFoo;
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = function() { // Original name: cleanUp
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    michal = _closure3_slot0;
                    tangon = michal.mediaEventSubscriptions;
                    zuuluu = tangon.get;
                    michal = michal._file;
                    michal = michal.id;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00030_ip = 50; continue _fun00029 }
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
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
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
                    if(!(zuuluu === michal)) { _fun00032_ip = 93; continue _fun00031 }
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
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.uri;
                    tangon = entity.progress;
                    michal = _closure3_slot0;
                    zuuluu = michal.uploadItems;
                    michal = zuuluu.has;
                    michal = michal.bind(zuuluu)(oscard);
                    if(!michal) { _fun00034_ip = 369; continue _fun00033 }
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
                    if(!(!(golfie >= tangon))) { _fun00034_ip = 244; continue _fun00033 }
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
                    _fun00034_ip = 341; continue _fun00033;
 244:
                    michal = _closure3_slot1;
                    michal = michal.bind(zuuluu)();
                    michal = _closure3_slot0;
                    michal = michal._file;
                    oscard = michal.items;
                    michal = null;
                    if(!(michal != oscard)) { _fun00034_ip = 291; continue _fun00033 }
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
 291:
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
 341:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.emit;
                    michal = tangon._file;
                    entity = 'compression-progress';
                    entity = zuuluu.bind(tangon)(entity, michal);
 369:
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
        entity[4] = report;
        report = {};
        golfie = '_createMessage';
        report['key'] = golfie;
        golfie = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    StartGenerator();
                    source = argFoo;
                    oscard = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00036_ip = 1319; continue _fun00035 }
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
                    if(!(yankee !== output)) { _fun00036_ip = 192; continue _fun00035 }
 159:
                    output = _closure1_slot0;
                    result = _closure1_slot2;
                    yankee = 14;
                    yankee = result[yankee];
                    yankee = output.bind(zuuluu)(yankee);
                    yankee = yankee.HTTP;
                    yankee = yankee.patch;
                    _fun00036_ip = 223; continue _fun00035;
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
                    if(!(yankee != output)) { _fun00036_ip = 269; continue _fun00035 }
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
 269:
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
                        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
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
                            if(!(report != tangon)) { _fun00038_ip = 146; continue _fun00037 }
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
                    if(foxtra) { _fun00036_ip = 965; continue _fun00035 }
 848:
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
                    SaveGenerator(address=903);
 901:
                    return offset;
 903:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=12);
                    if(foxtra) { _fun00036_ip = 962; continue _fun00035 }
 909:
                    tangon = offset;
                    kiloes = _closure1_slot1;
                    sizing = _closure1_slot2;
                    foxtra = 28;
                    foxtra = sizing[foxtra];
                    output = kiloes.bind(zuuluu)(foxtra);
                    sizing = output.receiveMessage;
                    kiloes = romeon.channel_id;
                    foxtra = offset.body;
                    romeon = true;
                    romeon = sizing.bind(output)(kiloes, foxtra, romeon);
 957: // try_end0
                    _fun00036_ip = 1220; continue _fun00035;
 962:
                    return offset;
 965: // try_start_1
                    foxtra = _closure1_slot19;
                    romeon = foxtra.log;
                    offset = 'Skipping message send with upload because send_fail_100 is enabled';
                    offset = romeon.bind(foxtra)(offset);
                    offset = verify;
                    if(!(yankee != offset)) { _fun00036_ip = 1016; continue _fun00035 }
 993:
                    foxtra = verify;
                    romeon = {};
                    yankee = 500;
                    offset = function() {
                        entity = null;
                        return entity;
                    };
                    offset = foxtra.bind(zuuluu)(romeon, yankee, offset);
 1016:
                    yankee = oscard._handleComplete;
                    offset = {};
                    offset = yankee.bind(oscard)(offset);
 1029: // try_end1
                    offset = undefined;
                    return offset;
 1034: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=13);
                    offset = oscard._aborted;
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
                    option = function() {
                        tangon = _closure1_slot3;
                        zuuluu = undefined;
                        michal = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(michal) { _fun00040_ip = 114; continue _fun00039 }
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
                                    if(tangon) { _fun00040_ip = 111; continue _fun00039 }
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
 1107:
                    offset = _closure1_slot19;
                    verify = offset.error;
                    option = backup;
                    kiloes = null;
                    option = kiloes == option;
                    sizing = undefined;
                    if(option) { _fun00036_ip = 1138; continue _fun00035 }
 1130:
                    option = backup;
                    sizing = option.status;
 1138:
                    option = global;
                    foxtra = option.JSON;
                    romeon = foxtra.stringify;
                    yankee = backup;
                    kiloes = kiloes == yankee;
                    yankee = undefined;
                    if(kiloes) { _fun00036_ip = 1169; continue _fun00035 }
 1164:
                    yankee = backup.body;
 1169:
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
 1220:
                    offset = oscard._trackMessageSentWithAttachments;
                    verify = tangon;
                    report = verify;
                    option = null;
                    yankee = option == verify;
                    verify = undefined;
                    if(yankee) { _fun00036_ip = 1250; continue _fun00035 }
 1245:
                    verify = report.body;
 1250:
                    report = oscard.files;
                    report = offset.bind(oscard)(verify, report);
                    report = oscard._handleComplete;
                    golfie = tangon;
                    option = option == tangon;
                    tangon = undefined;
                    if(option) { _fun00036_ip = 1285; continue _fun00035 }
 1280:
                    tangon = golfie.body;
 1285:
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 1293:
                    tangon = _closure1_slot19;
                    zuuluu = tangon.log;
                    michal = 'Upload was aborted for send message; skip handling request error';
                    michal = zuuluu.bind(tangon)(michal);
                    michal = undefined;
                    return michal;
 1319:
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
        entity[5] = report;
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