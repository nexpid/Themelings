// app/lib/uploader/UploaderBase.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
            verify = _closure1_slot13;
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
            golfie = _closure1_slot13;
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
    var _closure1_slot12 = entity;
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
    var _closure1_slot13 = entity;
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
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AbortCodes;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FileUploadErrorTypes;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'UploaderBase.tsx';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot11 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EventEmitter;
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: UploaderBase
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = arguments[1];
                report = arguments[2];
                option = this;
                zuuluu = undefined;
                if(!(michal === zuuluu)) { _fun00010_ip = 23; continue _fun00009 }
 17:
                michal = 'POST';
 23:
                var _closure3_slot0 = zuuluu;
                entity = _closure1_slot4;
                golfie = _closure2_slot2;
                entity = entity.bind(zuuluu)(option, golfie);
                entity = _closure1_slot7;
                foxtra = entity.bind(zuuluu)(golfie);
                golfie = _closure1_slot6;
                entity = _closure1_slot14;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 84; continue _fun00009 }
 71:
                entity = foxtra.apply;
                entity = entity.bind(foxtra)(option, zuuluu);
                _fun00010_ip = 122; continue _fun00009;
 84:
                verify = global;
                romeon = verify.Reflect;
                yankee = romeon.construct;
                verify = _closure1_slot7;
                verify = verify.bind(zuuluu)(option);
                offset = verify.constructor;
                verify = new Array(0);
                entity = yankee.bind(romeon)(foxtra, verify, offset);
 122:
                entity = golfie.bind(zuuluu)(option, entity);
                _closure3_slot0 = entity;
                golfie = false;
                entity['_aborted'] = golfie;
                entity['_errored'] = golfie;
                entity['_raiseEndpointErrors'] = golfie;
                option = new Array(0);
                entity['files'] = option;
                option = 0;
                entity['_lastUpdate'] = option;
                entity['_loaded'] = option;
                entity['alreadyStarted'] = golfie;
                golfie = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        michal = argFoo;
                        zuuluu['_cancel'] = michal;
                        michal = _closure3_slot0;
                        michal = michal.alreadyStarted;
                        if(michal) { _fun00012_ip = 59; continue _fun00011 }
 29:
                        report = _closure3_slot0;
                        tangon = report.emit;
                        michal = _closure3_slot0;
                        zuuluu = michal._file;
                        michal = 'start';
                        michal = tangon.bind(report)(michal, zuuluu);
 59:
                        michal = _closure3_slot0;
                        entity = true;
                        michal['alreadyStarted'] = entity;
                        entity = undefined;
                        return entity;
                    }
                };
                entity['_handleStart'] = golfie;
                golfie = function(argFoo, argBar, argBaz) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        tangon = argFoo;
                        option = argBar;
                        offset = argBaz;
                        var _closure4_slot0 = offset;
                        michal = global;
                        report = michal.Date;
                        entity = report.now;
                        report = entity.bind(report)();
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot2;
                        entity = 9;
                        oscard = oscard[entity];
                        entity = undefined;
                        golfie = golfie.bind(entity)(oscard);
                        oscard = golfie.calculateProgress;
                        oscard = oscard.bind(golfie)(tangon, option);
                        yankee = michal.Math;
                        verify = yankee.floor;
                        golfie = _closure3_slot0;
                        golfie = golfie._loaded;
                        romeon = tangon - golfie;
                        golfie = _closure3_slot0;
                        golfie = golfie._lastUpdate;
                        foxtra = report - golfie;
                        golfie = 1000;
                        golfie = foxtra / golfie;
                        golfie = romeon / golfie;
                        golfie = verify.bind(yankee)(golfie);
                        verify = null;
                        if(!(verify != offset)) { _fun00014_ip = 174; continue _fun00013 }
 137:
                        offset = _closure3_slot0;
                        offset = offset._file;
                        offset = offset.items;
                        if(!(verify != offset)) { _fun00014_ip = 174; continue _fun00013 }
 157:
                        verify = offset.forEach;
                        zuuluu = function(argFoo) {
                            entity = argFoo;
                            michal = entity.item;
                            zuuluu = _closure4_slot0;
                            entity = entity.id;
                            entity = zuuluu[entity];
                            michal['progress'] = entity;
                            entity = undefined;
                            return entity;
                        };
                        zuuluu = verify.bind(offset)(zuuluu);
 174:
                        zuuluu = _closure3_slot0;
                        zuuluu['_lastUpdate'] = report;
                        zuuluu = _closure3_slot0;
                        zuuluu['_loaded'] = tangon;
                        tangon = _closure3_slot0;
                        zuuluu = {};
                        backup = tangon._file;
                        kiloes = zuuluu;
                        report = copyDataProperties(kiloes, backup);
                        report = 'currentSize';
                        zuuluu[report] = option;
                        report = 'progress';
                        zuuluu[report] = oscard;
                        oscard = 'rate';
                        zuuluu[oscard] = golfie;
                        tangon['_file'] = zuuluu;
                        tangon = _closure3_slot0;
                        zuuluu = tangon.emit;
                        michal = _closure3_slot0;
                        michal = michal._file;
                        michal = zuuluu.bind(tangon)(report, michal);
                        return entity;
                    }
                };
                entity['_handleProgress'] = golfie;
                golfie = function(argFoo) {
                    oscard = argFoo;
                    zuuluu = _closure3_slot0;
                    michal = zuuluu._handleError;
                    entity = {};
                    tangon = {};
                    report = _closure1_slot10;
                    report = report.ERROR_SOURCE_UNKNOWN;
                    tangon['type'] = report;
                    report = oscard.toString;
                    report = report.bind(oscard)();
                    tangon['msg'] = report;
                    entity['reason'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['_handleException'] = golfie;
                golfie = function() {
                    michal = _closure3_slot0;
                    entity = michal.clearProcessingMessageInterval;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                entity['_handleAborted'] = golfie;
                golfie = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = argFoo;
                        option = entity.code;
                        golfie = entity.reason;
                        oscard = entity.body;
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.clearProcessingMessageInterval;
                        michal = michal.bind(zuuluu)();
                        michal = _closure3_slot0;
                        michal = michal._aborted;
                        if(michal) { _fun00016_ip = 200; continue _fun00015 }
 52:
                        zuuluu = _closure3_slot0;
                        michal = true;
                        zuuluu['_errored'] = michal;
                        tangon = _closure1_slot11;
                        zuuluu = tangon.log;
                        michal = global;
                        verify = michal.JSON;
                        report = verify.stringify;
                        kiloes = report.bind(verify)(golfie);
                        report = _closure3_slot0;
                        foxtra = report.id;
                        michal = michal.HermesInternal;
                        offset = michal.concat;
                        result = '_handleError: ';
                        sizing = ' (';
                        backup = ') for ';
                        output = option;
                        michal = result[offset](output, sizing, kiloes, backup, foxtra, romeon);
                        michal = zuuluu.bind(tangon)(michal);
                        report = _closure3_slot0;
                        tangon = report.emit;
                        michal = _closure3_slot0;
                        sizing = michal._file;
                        output = 'error';
                        result = report;
                        kiloes = option;
                        backup = oscard;
                        foxtra = golfie;
                        michal = result[tangon](output, sizing, kiloes, backup, foxtra, romeon);
                        michal = _closure3_slot0;
                        entity = michal.removeAllListeners;
                        entity = entity.bind(michal)();
 200:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['_handleError'] = golfie;
                oscard = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.clearProcessingMessageInterval;
                    michal = michal.bind(zuuluu)();
                    tangon = _closure1_slot11;
                    zuuluu = tangon.log;
                    michal = _closure3_slot0;
                    oscard = michal.id;
                    michal = global;
                    michal = michal.HermesInternal;
                    report = michal.concat;
                    michal = '_handleComplete for ';
                    michal = report.bind(michal)(oscard);
                    michal = zuuluu.bind(tangon)(michal);
                    oscard = _closure3_slot0;
                    report = oscard.emit;
                    michal = _closure3_slot0;
                    tangon = michal._file;
                    zuuluu = 'complete';
                    michal = argFoo;
                    michal = report.bind(oscard)(zuuluu, tangon, michal);
                    michal = _closure3_slot0;
                    entity = michal.removeAllListeners;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                entity['_handleComplete'] = oscard;
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                tangon = 10;
                tangon = golfie[tangon];
                golfie = oscard.bind(zuuluu)(tangon);
                oscard = golfie.uniqueId;
                tangon = 'Uploader';
                tangon = oscard.bind(golfie)(tangon);
                entity['id'] = tangon;
                tangon = argFoo;
                entity['_url'] = tangon;
                entity['_method'] = michal;
                michal = null;
                oscard = michal == report;
                tangon = undefined;
                if(oscard) { _fun00010_ip = 337; continue _fun00009 }
 329:
                tangon = report.raiseEndpointErrors;
 337:
                michal = michal != tangon;
                if(!michal) { _fun00010_ip = 347; continue _fun00009 }
 344:
                michal = tangon;
 347:
                entity['_raiseEndpointErrors'] = michal;
                michal = {'id': null, 'name': '', 'currentSize': 0, 'totalPreCompressionSize': 0, 'compressionProgress': 0, 'progress': 0, 'rate': 0, 'hasImage': false, 'hasVideo': false, 'attachmentsCount': 0};
                tangon = entity.id;
                michal['id'] = tangon;
                michal['items'] = zuuluu;
                entity['_file'] = michal;
                return entity;
            }
        };
        var _closure2_slot2 = tangon;
        michal = _closure1_slot8;
        zuuluu = undefined;
        entity = argFoo;
        entity = michal.bind(zuuluu)(tangon, entity);
        michal = _closure1_slot5;
        report = {};
        entity = '_fileSize';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = this;
            tangon = entity.files;
            zuuluu = tangon.reduce;
            michal = function(argFoo, argBar) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argBar;
                    entity = entity.currentSize;
                    michal = null;
                    zuuluu = michal != entity;
                    michal = 0;
                    if(!zuuluu) { _fun00018_ip = 23; continue _fun00017 }
 20:
                    michal = entity;
 23:
                    entity = argFoo;
                    entity = entity + michal;
                    return entity;
                }
            };
            entity = 0;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(11);
        entity[0] = report;
        report = {};
        option = 'compressAndCheckFileSize';
        report['key'] = option;
        option = _closure1_slot3;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    tangon = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00020_ip = 718; continue _fun00019 }
 13:
                    romeon = undefined;
                    michal = undefined;
                    foxtra = undefined;
                    backup = undefined;
                    kiloes = undefined;
                    sizing = undefined;
                    output = undefined;
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = golfie[zuuluu];
                    golfie = oscard.bind(romeon)(zuuluu);
                    oscard = golfie.getUploadTarget;
                    zuuluu = tangon.files;
                    yankee = 0;
                    option = zuuluu[yankee];
                    offset = null;
                    verify = offset == option;
                    zuuluu = undefined;
                    if(verify) { _fun00020_ip = 99; continue _fun00019 }
 79:
                    option = option.item;
                    verify = offset == option;
                    zuuluu = undefined;
                    if(verify) { _fun00020_ip = 99; continue _fun00019 }
 93:
                    zuuluu = option.target;
 99:
                    golfie = oscard.bind(golfie)(zuuluu);
                    michal = golfie;
                    zuuluu = tangon.files;
                    oscard = zuuluu.length;
                    zuuluu = golfie.getMaxAttachmentsCount;
                    zuuluu = zuuluu.bind(golfie)();
                    if(!(!(oscard > zuuluu))) { _fun00020_ip = 642; continue _fun00019 }
 137:
                    golfie = _closure1_slot11;
                    oscard = golfie.log;
                    result = tangon.id;
                    verify = global;
                    zuuluu = verify.HermesInternal;
                    option = zuuluu.concat;
                    zuuluu = 'compressing files for ';
                    zuuluu = option.bind(zuuluu)(result);
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    oscard = _closure1_slot12;
                    zuuluu = tangon.files;
                    zuuluu = oscard.bind(romeon)(zuuluu);
                    backup = zuuluu;
                    zuuluu = zuuluu.bind(romeon)();
                    foxtra = zuuluu;
                    zuuluu = zuuluu.done;
                    option = 'compressAndCheckFileSize() file has been cancelled for compression - ';
                    golfie = 12;
                    if(zuuluu) { _fun00020_ip = 555; continue _fun00019 }
 226:
                    zuuluu = foxtra;
                    kiloes = zuuluu.value;
 234: // try_start_0
                    oscard = kiloes;
                    zuuluu = oscard.reactNativeCompressAndExtractData;
                    zuuluu = zuuluu.bind(oscard)();
                    SaveGenerator(address=251);
 249:
                    return zuuluu;
 251:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00020_ip = 534; continue _fun00019 }
 260:
                    oscard = kiloes;
                    result = oscard.status;
                    echoed = _closure1_slot0;
                    oscard = _closure1_slot2;
                    oscard = oscard[golfie];
                    oscard = echoed.bind(romeon)(oscard);
                    oscard = oscard.CloudUploadStatus;
                    oscard = oscard.CANCELED;
                    if(!(result !== oscard)) { _fun00020_ip = 472; continue _fun00019 }
 304:
                    oscard = kiloes;
                    oscard = oscard.currentSize;
                    sizing = oscard;
                    result = offset != oscard;
                    oscard = 0;
                    if(!result) { _fun00020_ip = 328; continue _fun00019 }
 325:
                    oscard = sizing;
 328:
                    if(!(yankee !== oscard)) { _fun00020_ip = 440; continue _fun00019 }
 332:
                    oscard = kiloes;
                    oscard = oscard.currentSize;
                    output = oscard;
                    oscard = offset != oscard;
                    result = 0;
                    if(!oscard) { _fun00020_ip = 356; continue _fun00019 }
 353:
                    result = output;
 356:
                    update = michal;
                    echoed = update.getMaxFileSize;
                    oscard = kiloes;
                    oscard = oscard.channelId;
                    oscard = echoed.bind(update)(oscard);
                    if(!(!(result > oscard))) { _fun00020_ip = 387; continue _fun00019 }
 382: // try_end0
                    _fun00020_ip = 511; continue _fun00019;
 387: // try_start_1
                    result = tangon._handleError;
                    oscard = {};
                    echoed = _closure1_slot9;
                    echoed = echoed.ENTITY_TOO_LARGE;
                    oscard['code'] = echoed;
                    echoed = {};
                    update = _closure1_slot10;
                    update = update.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                    echoed['type'] = update;
                    oscard['reason'] = echoed;
                    oscard = result.bind(tangon)(oscard);
 435: // try_end1
                    oscard = false;
                    return oscard;
 440: // try_start_2
                    result = tangon._handleError;
                    oscard = {};
                    echoed = _closure1_slot9;
                    echoed = echoed.ENTITY_EMPTY;
                    oscard['code'] = echoed;
                    oscard = result.bind(tangon)(oscard);
 467: // try_end2
                    oscard = false;
                    return oscard;
 472: // try_start_3
                    echoed = _closure1_slot11;
                    result = echoed.log;
                    oscard = kiloes;
                    update = oscard.id;
                    oscard = verify.HermesInternal;
                    oscard = oscard.concat;
                    oscard = oscard.bind(option)(update);
                    oscard = result.bind(echoed)(oscard);
 511: // try_end3
                    oscard = backup;
                    oscard = oscard.bind(romeon)();
                    foxtra = oscard;
                    oscard = oscard.done;
                    if(oscard) { _fun00020_ip = 555; continue _fun00019 }
 529:
                    _fun00020_ip = 226; continue _fun00019;
 534:
                    return zuuluu;
 537: // catch_target0 // catch_target1 // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=5);
                    zuuluu = tangon._handleException;
                    zuuluu = zuuluu.bind(tangon)(oscard);
                    zuuluu = false;
                    return zuuluu;
 555:
                    zuuluu = tangon._fileSize;
                    zuuluu = zuuluu.bind(tangon)();
                    oscard = michal;
                    michal = oscard.getMaxTotalAttachmentSize;
                    michal = michal.bind(oscard)();
                    michal = zuuluu > michal;
                    if(!michal) { _fun00020_ip = 636; continue _fun00019 }
 585:
                    oscard = tangon._handleError;
                    zuuluu = {};
                    golfie = _closure1_slot9;
                    golfie = golfie.ENTITY_TOO_LARGE;
                    zuuluu['code'] = golfie;
                    golfie = {};
                    option = _closure1_slot10;
                    option = option.POSTCOMPRESSION_SUM_TOO_LARGE;
                    golfie['type'] = option;
                    zuuluu['reason'] = golfie;
                    zuuluu = oscard.bind(tangon)(zuuluu);
                    michal = 1;
 636:
                    michal = !michal;
                    return michal;
 642:
                    oscard = _closure1_slot11;
                    zuuluu = oscard.log;
                    option = tangon.id;
                    michal = global;
                    michal = michal.HermesInternal;
                    golfie = michal.concat;
                    michal = 'Too many attachments for ';
                    michal = golfie.bind(michal)(option);
                    michal = zuuluu.bind(oscard)(michal);
                    zuuluu = tangon._handleError;
                    michal = {};
                    report = _closure1_slot9;
                    report = report.TOO_MANY_ATTACHMENTS;
                    michal['code'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = false;
                    return michal;
 718:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        var _closure2_slot1 = golfie;
        golfie = function() { // Original name: compressAndCheckFileSize
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
        golfie = 'setUploadingTextForUI';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = this;
                zuuluu = michal.files;
                tangon = zuuluu.length;
                zuuluu = 1;
                if(!(zuuluu === tangon)) { _fun00022_ip = 47; continue _fun00021 }
 23:
                zuuluu = michal.files;
                tangon = 0;
                zuuluu = zuuluu[tangon];
                report = zuuluu.filename;
                zuuluu = null;
                if(!(zuuluu == report)) { _fun00022_ip = 127; continue _fun00021 }
 47:
                option = _closure1_slot0;
                verify = _closure1_slot2;
                zuuluu = 13;
                oscard = verify[zuuluu];
                report = undefined;
                oscard = option.bind(report)(oscard);
                golfie = oscard.intl;
                oscard = golfie.formatToPlainString;
                zuuluu = verify[zuuluu];
                zuuluu = option.bind(report)(zuuluu);
                zuuluu = zuuluu.t;
                report = zuuluu.D0noUl;
                zuuluu = {};
                option = michal.files;
                option = option.length;
                zuuluu['count'] = option;
                oscard = oscard.bind(golfie)(report, zuuluu);
                _fun00022_ip = 143; continue _fun00021;
 127:
                zuuluu = michal.files;
                zuuluu = zuuluu[tangon];
                oscard = zuuluu.filename;
 143:
                report = michal.files;
                tangon = report.some;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isImage;
                    return entity;
                };
                tangon = tangon.bind(report)(zuuluu);
                report = michal.files;
                zuuluu = report.some;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.isVideo;
                    return entity;
                };
                report = zuuluu.bind(report)(entity);
                entity = michal._fileSize;
                golfie = entity.bind(michal)();
                option = _closure1_slot11;
                zuuluu = option.log;
                entity = michal.files;
                sizing = entity.length;
                backup = michal.id;
                entity = global;
                entity = entity.HermesInternal;
                yankee = entity.concat;
                echoed = 'setUploadingTextForUI - total content: ';
                output = ' bytes and ';
                kiloes = ' attachments for ';
                result = golfie;
                entity = echoed[yankee](result, output, sizing, kiloes, backup, foxtra);
                entity = zuuluu.bind(option)(entity);
                entity = {};
                output = michal._file;
                result = entity;
                zuuluu = copyDataProperties(result, output);
                zuuluu = 'totalPostCompressionSize';
                entity[zuuluu] = golfie;
                zuuluu = 'currentSize';
                entity[zuuluu] = golfie;
                zuuluu = 'name';
                entity[zuuluu] = oscard;
                zuuluu = 'hasVideo';
                entity[zuuluu] = report;
                zuuluu = 'hasImage';
                entity[zuuluu] = tangon;
                zuuluu = michal.files;
                tangon = zuuluu.length;
                zuuluu = 'attachmentsCount';
                entity[zuuluu] = tangon;
                tangon = michal.files;
                zuuluu = 'items';
                entity[zuuluu] = tangon;
                michal['_file'] = entity;
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = '_recomputeProgress';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            report = this;
            entity = report._recomputeProgressTotal;
            entity = entity.bind(report)();
            tangon = entity.loaded;
            zuuluu = entity.total;
            entity = report._recomputeProgressByFile;
            michal = entity.bind(report)();
            entity = report._handleProgress;
            entity = entity.bind(report)(tangon, zuuluu, michal);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = '_recomputeProgressTotal';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = this;
            entity = zuuluu._fileSize;
            michal = entity.bind(zuuluu)();
            entity = {};
            oscard = zuuluu.files;
            report = oscard.reduce;
            tangon = function(argFoo, argBar) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = argBar;
                    entity = entity.loaded;
                    michal = null;
                    zuuluu = michal != entity;
                    michal = 0;
                    if(!zuuluu) { _fun00024_ip = 23; continue _fun00023 }
 20:
                    michal = entity;
 23:
                    entity = argFoo;
                    entity = entity + michal;
                    return entity;
                }
            };
            zuuluu = 0;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            entity['loaded'] = zuuluu;
            entity['total'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = '_recomputeProgressByFile';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            var _closure3_slot0 = entity;
            zuuluu = this;
            tangon = zuuluu.files;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                michal = argFoo;
                tangon = _closure3_slot0;
                zuuluu = michal.id;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                entity = 9;
                report = report[entity];
                entity = undefined;
                golfie = oscard.bind(entity)(report);
                oscard = golfie.calculateProgress;
                report = michal.loaded;
                michal = michal.currentSize;
                michal = oscard.bind(golfie)(report, michal);
                tangon[zuuluu] = michal;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = '_addAttachmentsToPayload';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            report = argBar;
            tangon = {};
            yankee = argFoo;
            romeon = tangon;
            entity = copyDataProperties(romeon, yankee);
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 10;
            zuuluu = golfie[entity];
            michal = undefined;
            verify = oscard.bind(michal)(zuuluu);
            option = verify.get;
            zuuluu = new Array(0);
            yankee = option.bind(verify)(tangon, report, zuuluu);
            zuuluu = new Array(0);
            offset = 0;
            romeon = zuuluu;
            offset = arraySpread(romeon, yankee, offset);
            yankee = argBaz;
            romeon = zuuluu;
            option = arraySpread(romeon, yankee, offset);
            entity = golfie[entity];
            michal = oscard.bind(michal)(entity);
            entity = michal.set;
            entity = entity.bind(michal)(tangon, report, zuuluu);
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'clearProcessingMessageInterval';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                michal = this;
                zuuluu = michal.processingMessageChangeInterval;
                entity = null;
                if(!(entity != zuuluu)) { _fun00026_ip = 42; continue _fun00025 }
 15:
                entity = global;
                tangon = entity.clearInterval;
                zuuluu = michal.processingMessageChangeInterval;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                michal['processingMessageChangeInterval'] = entity;
 42:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'cancel';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                michal = this;
                tangon = _closure1_slot11;
                zuuluu = tangon.log;
                oscard = michal.id;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                entity = 'cancel() for ';
                entity = report.bind(entity)(oscard);
                entity = zuuluu.bind(tangon)(entity);
                entity = michal._aborted;
                if(entity) { _fun00028_ip = 124; continue _fun00027 }
 59:
                entity = true;
                michal['_aborted'] = entity;
                zuuluu = michal._cancel;
                entity = null;
                if(!(entity != zuuluu)) { _fun00028_ip = 89; continue _fun00027 }
 79:
                entity = zuuluu.call;
                entity = entity.bind(zuuluu)(michal);
 89:
                tangon = michal.files;
                zuuluu = tangon.forEach;
                entity = function(argFoo) {
                    michal = argFoo;
                    entity = michal.cancel;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity);
                entity = michal._handleComplete;
                entity = entity.bind(michal)();
 124:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'cancelItem';
        report['key'] = golfie;
        golfie = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    yankee = argFoo;
                    tangon = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00030_ip = 385; continue _fun00029 }
 18:
                    var _closure4_slot0 = yankee;
                    golfie = _closure1_slot11;
                    oscard = golfie.log;
                    offset = tangon.id;
                    report = global;
                    report = report.HermesInternal;
                    verify = report.concat;
                    option = 'Cancel called for ';
                    report = ' for item ';
                    report = verify.bind(option)(offset, report, yankee);
                    report = oscard.bind(golfie)(report);
                    oscard = tangon.files;
                    report = oscard.find;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    oscard = report.bind(oscard)(zuuluu);
                    zuuluu = null;
                    if(!(zuuluu != oscard)) { _fun00030_ip = 377; continue _fun00029 }
 110:
                    report = oscard.status;
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 12;
                    zuuluu = golfie[zuuluu];
                    golfie = undefined;
                    zuuluu = option.bind(golfie)(zuuluu);
                    zuuluu = zuuluu.CloudUploadStatus;
                    zuuluu = zuuluu.CANCELED;
                    if(!(report !== zuuluu)) { _fun00030_ip = 377; continue _fun00029 }
 156:
                    report = tangon.files;
                    zuuluu = report.indexOf;
                    romeon = zuuluu.bind(report)(oscard);
                    option = tangon.files;
                    zuuluu = option.slice;
                    report = 0;
                    backup = zuuluu.bind(option)(report, romeon);
                    zuuluu = new Array(0);
                    kiloes = zuuluu;
                    foxtra = 0;
                    foxtra = arraySpread(kiloes, backup, foxtra);
                    yankee = tangon.files;
                    offset = yankee.slice;
                    option = 1;
                    option = romeon + option;
                    backup = offset.bind(yankee)(option);
                    kiloes = zuuluu;
                    option = arraySpread(kiloes, backup, foxtra);
                    tangon['files'] = zuuluu;
                    zuuluu = {};
                    backup = tangon._file;
                    kiloes = zuuluu;
                    option = copyDataProperties(kiloes, backup);
                    verify = tangon.files;
                    option = 'items';
                    zuuluu[option] = verify;
                    tangon['_file'] = zuuluu;
                    zuuluu = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 14;
                    michal = option[michal];
                    zuuluu = zuuluu.bind(golfie)(michal);
                    michal = zuuluu.cancelGetAttachmentFile;
                    michal = michal.bind(zuuluu)(oscard);
                    SaveGenerator(address=312);
 310:
                    return michal;
 312:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00030_ip = 382; continue _fun00029 }
 318:
                    zuuluu = oscard.cancel;
                    zuuluu = zuuluu.bind(oscard)();
                    golfie = tangon.emit;
                    oscard = tangon._file;
                    zuuluu = 'cancel-upload-item';
                    zuuluu = golfie.bind(tangon)(zuuluu, oscard);
                    zuuluu = tangon.files;
                    zuuluu = zuuluu.length;
                    if(!(report === zuuluu)) { _fun00030_ip = 377; continue _fun00029 }
 367:
                    zuuluu = tangon.cancel;
                    zuuluu = zuuluu.bind(tangon)();
 377:
                    zuuluu = undefined;
                    return zuuluu;
 382:
                    return michal;
 385:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        var _closure2_slot0 = golfie;
        golfie = function() { // Original name: cancelItem
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
        entity[9] = report;
        report = {};
        golfie = 'upload';
        report['key'] = golfie;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                michal = this;
                zuuluu = michal._cancel;
                entity = null;
                if(!(entity == zuuluu)) { _fun00032_ip = 98; continue _fun00031 }
 15:
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                entity = entity.bind(zuuluu)();
                michal['_lastUpdate'] = entity;
                entity = 0;
                michal['_loaded'] = entity;
                entity = {'id': null, 'name': null, 'currentSize': 0, 'totalPreCompressionSize': 0, 'compressionProgress': 0, 'progress': 0, 'rate': 0, 'hasImage': false, 'hasVideo': false, 'attachmentsCount': 0};
                zuuluu = michal.id;
                entity['id'] = zuuluu;
                zuuluu = argFoo;
                entity['name'] = zuuluu;
                zuuluu = argBar;
                entity['items'] = zuuluu;
                michal['_file'] = entity;
                entity = undefined;
                return entity;
 98:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                tangon = 'Uploader.upload(...): An upload is already in progress.';
                report = michal;
                entity = new report[zuuluu](tangon, zuuluu);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        report['value'] = oscard;
        entity[10] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/uploader/UploaderBase.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();