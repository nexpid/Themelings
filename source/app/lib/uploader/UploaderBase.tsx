// app/lib/uploader/UploaderBase.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot11;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FileUploadErrorTypes;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'UploaderBase.tsx';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot9 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EventEmitter;
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: UploaderBase
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = arguments[1];
                tangon = arguments[2];
                option = this;
                zuuluu = undefined;
                if(!(michal === zuuluu)) { _fun00006_ip = 23; continue _fun00005 }
 17:
                michal = 'POST';
 23:
                var _closure3_slot0 = zuuluu;
                entity = _closure1_slot3;
                golfie = _closure2_slot0;
                entity = entity.bind(zuuluu)(option, golfie);
                entity = _closure1_slot10;
                entity = entity.bind(zuuluu)(option, golfie);
                _closure3_slot0 = entity;
                golfie = '';
                entity['_token'] = golfie;
                golfie = 0;
                entity['_lastUpdate'] = golfie;
                entity['_loaded'] = golfie;
                golfie = false;
                entity['_aborted'] = golfie;
                entity['_errored'] = golfie;
                entity['_raiseEndpointErrors'] = golfie;
                entity['alreadyStarted'] = golfie;
                golfie = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        michal = argFoo;
                        zuuluu['_cancel'] = michal;
                        michal = _closure3_slot0;
                        michal = michal.alreadyStarted;
                        if(michal) { _fun00008_ip = 59; continue _fun00007 }
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
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
                        entity = 7;
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
                        if(!(verify != offset)) { _fun00010_ip = 172; continue _fun00009 }
 137:
                        offset = _closure3_slot0;
                        offset = offset._file;
                        offset = offset.items;
                        if(!(verify != offset)) { _fun00010_ip = 172; continue _fun00009 }
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
 172:
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
                    report = _closure1_slot8;
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
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
                        if(michal) { _fun00012_ip = 200; continue _fun00011 }
 52:
                        zuuluu = _closure3_slot0;
                        michal = true;
                        zuuluu['_errored'] = michal;
                        tangon = _closure1_slot9;
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
                    tangon = _closure1_slot9;
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
                report = 8;
                report = golfie[report];
                golfie = oscard.bind(zuuluu)(report);
                oscard = golfie.uniqueId;
                report = 'Uploader';
                report = oscard.bind(golfie)(report);
                entity['id'] = report;
                report = argFoo;
                entity['_url'] = report;
                entity['_method'] = michal;
                michal = null;
                report = michal == tangon;
                zuuluu = undefined;
                if(report) { _fun00006_ip = 252; continue _fun00005 }
 246:
                zuuluu = tangon.raiseEndpointErrors;
 252:
                michal = michal != zuuluu;
                if(!michal) { _fun00006_ip = 262; continue _fun00005 }
 259:
                michal = zuuluu;
 262:
                entity['_raiseEndpointErrors'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = '_addAttachmentsToPayload';
        report['key'] = entity;
        entity = function(argFoo, argBar, argBaz) { // Original name: value
            report = argBar;
            tangon = {};
            yankee = argFoo;
            romeon = tangon;
            entity = copyDataProperties(romeon, yankee);
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 8;
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
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'clearProcessingMessageInterval';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = this;
                zuuluu = michal.processingMessageChangeInterval;
                entity = null;
                if(!(entity != zuuluu)) { _fun00014_ip = 42; continue _fun00013 }
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
        entity[1] = report;
        report = {};
        golfie = 'cancel';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = this;
                tangon = _closure1_slot9;
                zuuluu = tangon.log;
                oscard = michal.id;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                entity = 'cancel() for ';
                entity = report.bind(entity)(oscard);
                entity = zuuluu.bind(tangon)(entity);
                entity = true;
                michal['_aborted'] = entity;
                zuuluu = michal._cancel;
                entity = null;
                if(!(entity != zuuluu)) { _fun00016_ip = 80; continue _fun00015 }
 70:
                entity = michal._cancel;
                entity = entity.bind(michal)();
 80:
                entity = michal._handleComplete;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'cancelItem';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = 'cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass';
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'upload';
        report['key'] = golfie;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = argBar;
                zuuluu = this;
                entity = zuuluu._cancel;
                tangon = null;
                if(!(tangon == entity)) { _fun00018_ip = 146; continue _fun00017 }
 21:
                entity = global;
                michal = entity.Date;
                entity = michal.now;
                entity = entity.bind(michal)();
                zuuluu['_lastUpdate'] = entity;
                entity = 0;
                zuuluu['_loaded'] = entity;
                michal = {'id': null, 'name': null, 'currentSize': 0, 'totalPreCompressionSize': 0, 'compressionProgress': 0, 'progress': 0, 'rate': 0, 'hasImage': false, 'hasVideo': false, 'attachmentsCount': 0};
                entity = zuuluu.id;
                michal['id'] = entity;
                entity = argFoo;
                entity = entity.name;
                michal['name'] = entity;
                golfie = tangon == report;
                entity = undefined;
                oscard = undefined;
                if(golfie) { _fun00018_ip = 107; continue _fun00017 }
 102:
                oscard = report.content;
 107:
                michal['draftContent'] = oscard;
                oscard = tangon == report;
                tangon = undefined;
                if(oscard) { _fun00018_ip = 126; continue _fun00017 }
 121:
                tangon = report.channel_id;
 126:
                michal['channelId'] = tangon;
                tangon = argBaz;
                michal['items'] = tangon;
                zuuluu['_file'] = michal;
                return entity;
 146:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                option = 'Uploader.upload(...): An upload is already in progress.';
                verify = michal;
                entity = new verify[zuuluu](option, golfie);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/uploader/UploaderBase.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();