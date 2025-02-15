// app/lib/uploader/UploaderBase.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun71563: for(var _fun71563_ip = 0; ; ) switch(_fun71563_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun71563_ip = 48; continue _fun71563 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun71563_ip = 86; continue _fun71563;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun71564: for(var _fun71564_ip = 0; ; ) switch(_fun71564_ip) {
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
            _fun71564_ip = 76; continue _fun71564;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.FileUploadErrorTypes;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'UploaderBase.tsx';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot9 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EventEmitter;
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: UploaderBase
            _fun71568: for(var _fun71568_ip = 0; ; ) switch(_fun71568_ip) {
 0:
                mike = arguments[1];
                tango = arguments[2];
                options = this;
                zulu = undefined;
                if(!(mike === zulu)) { _fun71568_ip = 23; continue _fun71568 }
 17:
                mike = 'POST';
 23:
                var _closure3_slot0 = zulu;
                entity = _closure1_slot3;
                golf = _closure2_slot0;
                entity = entity.bind(zulu)(options, golf);
                entity = _closure1_slot10;
                entity = entity.bind(zulu)(options, golf);
                _closure3_slot0 = entity;
                golf = '';
                entity['_token'] = golf;
                golf = 0;
                entity['_lastUpdate'] = golf;
                entity['_loaded'] = golf;
                golf = false;
                entity['_aborted'] = golf;
                entity['_errored'] = golf;
                entity['_raiseEndpointErrors'] = golf;
                entity['alreadyStarted'] = golf;
                golf = function(argFoo) {
                    _fun71569: for(var _fun71569_ip = 0; ; ) switch(_fun71569_ip) {
 0:
                        zulu = _closure3_slot0;
                        mike = argFoo;
                        zulu['_cancel'] = mike;
                        mike = _closure3_slot0;
                        mike = mike.alreadyStarted;
                        if(mike) { _fun71569_ip = 59; continue _fun71569 }
 29:
                        report = _closure3_slot0;
                        tango = report.emit;
                        mike = _closure3_slot0;
                        zulu = mike._file;
                        mike = 'start';
                        mike = tango.bind(report)(mike, zulu);
 59:
                        mike = _closure3_slot0;
                        entity = true;
                        mike['alreadyStarted'] = entity;
                        entity = undefined;
                        return entity;
                    }
                };
                entity['_handleStart'] = golf;
                golf = function(argFoo, argBar, argBaz) {
                    _fun71570: for(var _fun71570_ip = 0; ; ) switch(_fun71570_ip) {
 0:
                        tango = argFoo;
                        options = argBar;
                        offset = argBaz;
                        var _closure4_slot0 = offset;
                        mike = global;
                        report = mike.Date;
                        entity = report.now;
                        report = entity.bind(report)();
                        golf = _closure1_slot0;
                        oscar = _closure1_slot2;
                        entity = 7;
                        oscar = oscar[entity];
                        entity = undefined;
                        golf = golf.bind(entity)(oscar);
                        oscar = golf.calculateProgress;
                        oscar = oscar.bind(golf)(tango, options);
                        yankee = mike.Math;
                        verify = yankee.floor;
                        golf = _closure3_slot0;
                        golf = golf._loaded;
                        romeo = tango - golf;
                        golf = _closure3_slot0;
                        golf = golf._lastUpdate;
                        foxtrot = report - golf;
                        golf = 1000;
                        golf = foxtrot / golf;
                        golf = romeo / golf;
                        golf = verify.bind(yankee)(golf);
                        verify = null;
                        if(!(verify != offset)) { _fun71570_ip = 174; continue _fun71570 }
 137:
                        offset = _closure3_slot0;
                        offset = offset._file;
                        offset = offset.items;
                        if(!(verify != offset)) { _fun71570_ip = 174; continue _fun71570 }
 157:
                        verify = offset.forEach;
                        zulu = function(argFoo) {
                            entity = argFoo;
                            mike = entity.item;
                            zulu = _closure4_slot0;
                            entity = entity.id;
                            entity = zulu[entity];
                            mike['progress'] = entity;
                            entity = undefined;
                            return entity;
                        };
                        zulu = verify.bind(offset)(zulu);
 174:
                        zulu = _closure3_slot0;
                        zulu['_lastUpdate'] = report;
                        zulu = _closure3_slot0;
                        zulu['_loaded'] = tango;
                        tango = _closure3_slot0;
                        zulu = {};
                        backup = tango._file;
                        kilo = zulu;
                        report = copyDataProperties(kilo, backup);
                        report = 'currentSize';
                        zulu[report] = options;
                        report = 'progress';
                        zulu[report] = oscar;
                        oscar = 'rate';
                        zulu[oscar] = golf;
                        tango['_file'] = zulu;
                        tango = _closure3_slot0;
                        zulu = tango.emit;
                        mike = _closure3_slot0;
                        mike = mike._file;
                        mike = zulu.bind(tango)(report, mike);
                        return entity;
                    }
                };
                entity['_handleProgress'] = golf;
                golf = function(argFoo) {
                    oscar = argFoo;
                    zulu = _closure3_slot0;
                    mike = zulu._handleError;
                    entity = {};
                    tango = {};
                    report = _closure1_slot8;
                    report = report.ERROR_SOURCE_UNKNOWN;
                    tango['type'] = report;
                    report = oscar.toString;
                    report = report.bind(oscar)();
                    tango['msg'] = report;
                    entity['reason'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['_handleException'] = golf;
                golf = function() {
                    mike = _closure3_slot0;
                    entity = mike.clearProcessingMessageInterval;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                entity['_handleAborted'] = golf;
                golf = function(argFoo) {
                    _fun71574: for(var _fun71574_ip = 0; ; ) switch(_fun71574_ip) {
 0:
                        entity = argFoo;
                        options = entity.code;
                        golf = entity.reason;
                        oscar = entity.body;
                        zulu = _closure3_slot0;
                        mike = zulu.clearProcessingMessageInterval;
                        mike = mike.bind(zulu)();
                        mike = _closure3_slot0;
                        mike = mike._aborted;
                        if(mike) { _fun71574_ip = 200; continue _fun71574 }
 52:
                        zulu = _closure3_slot0;
                        mike = true;
                        zulu['_errored'] = mike;
                        tango = _closure1_slot9;
                        zulu = tango.log;
                        mike = global;
                        verify = mike.JSON;
                        report = verify.stringify;
                        kilo = report.bind(verify)(golf);
                        report = _closure3_slot0;
                        foxtrot = report.id;
                        mike = mike.HermesInternal;
                        offset = mike.concat;
                        result = '_handleError: ';
                        sizing = ' (';
                        backup = ') for ';
                        output = options;
                        mike = result[offset](output, sizing, kilo, backup, foxtrot, romeo);
                        mike = zulu.bind(tango)(mike);
                        report = _closure3_slot0;
                        tango = report.emit;
                        mike = _closure3_slot0;
                        sizing = mike._file;
                        output = 'error';
                        result = report;
                        kilo = options;
                        backup = oscar;
                        foxtrot = golf;
                        mike = result[tango](output, sizing, kilo, backup, foxtrot, romeo);
                        mike = _closure3_slot0;
                        entity = mike.removeAllListeners;
                        entity = entity.bind(mike)();
 200:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['_handleError'] = golf;
                oscar = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.clearProcessingMessageInterval;
                    mike = mike.bind(zulu)();
                    tango = _closure1_slot9;
                    zulu = tango.log;
                    mike = _closure3_slot0;
                    oscar = mike.id;
                    mike = global;
                    mike = mike.HermesInternal;
                    report = mike.concat;
                    mike = '_handleComplete for ';
                    mike = report.bind(mike)(oscar);
                    mike = zulu.bind(tango)(mike);
                    oscar = _closure3_slot0;
                    report = oscar.emit;
                    mike = _closure3_slot0;
                    tango = mike._file;
                    zulu = 'complete';
                    mike = argFoo;
                    mike = report.bind(oscar)(zulu, tango, mike);
                    mike = _closure3_slot0;
                    entity = mike.removeAllListeners;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                entity['_handleComplete'] = oscar;
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                report = 8;
                report = golf[report];
                golf = oscar.bind(zulu)(report);
                oscar = golf.uniqueId;
                report = 'Uploader';
                report = oscar.bind(golf)(report);
                entity['id'] = report;
                report = argFoo;
                entity['_url'] = report;
                entity['_method'] = mike;
                mike = null;
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun71568_ip = 264; continue _fun71568 }
 258:
                zulu = tango.raiseEndpointErrors;
 264:
                mike = mike != zulu;
                if(!mike) { _fun71568_ip = 274; continue _fun71568 }
 271:
                mike = zulu;
 274:
                entity['_raiseEndpointErrors'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = '_addAttachmentsToPayload';
        report['key'] = entity;
        entity = function(argFoo, argBar, argBaz) { // Original name: value
            report = argBar;
            tango = {};
            yankee = argFoo;
            romeo = tango;
            entity = copyDataProperties(romeo, yankee);
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 8;
            zulu = golf[entity];
            mike = undefined;
            verify = oscar.bind(mike)(zulu);
            options = verify.get;
            zulu = new Array(0);
            yankee = options.bind(verify)(tango, report, zulu);
            zulu = new Array(0);
            offset = 0;
            romeo = zulu;
            offset = arraySpread(romeo, yankee, offset);
            yankee = argBaz;
            romeo = zulu;
            options = arraySpread(romeo, yankee, offset);
            entity = golf[entity];
            mike = oscar.bind(mike)(entity);
            entity = mike.set;
            entity = entity.bind(mike)(tango, report, zulu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'clearProcessingMessageInterval';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun71577: for(var _fun71577_ip = 0; ; ) switch(_fun71577_ip) {
 0:
                mike = this;
                zulu = mike.processingMessageChangeInterval;
                entity = null;
                if(!(entity != zulu)) { _fun71577_ip = 42; continue _fun71577 }
 15:
                entity = global;
                tango = entity.clearInterval;
                zulu = mike.processingMessageChangeInterval;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                mike['processingMessageChangeInterval'] = entity;
 42:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'cancel';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun71578: for(var _fun71578_ip = 0; ; ) switch(_fun71578_ip) {
 0:
                mike = this;
                tango = _closure1_slot9;
                zulu = tango.log;
                oscar = mike.id;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                entity = 'cancel() for ';
                entity = report.bind(entity)(oscar);
                entity = zulu.bind(tango)(entity);
                entity = true;
                mike['_aborted'] = entity;
                zulu = mike._cancel;
                entity = null;
                if(!(entity != zulu)) { _fun71578_ip = 80; continue _fun71578 }
 70:
                entity = mike._cancel;
                entity = entity.bind(mike)();
 80:
                entity = mike._handleComplete;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'cancelItem';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = 'cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass';
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'upload';
        report['key'] = golf;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun71580: for(var _fun71580_ip = 0; ; ) switch(_fun71580_ip) {
 0:
                report = argBar;
                zulu = this;
                entity = zulu._cancel;
                tango = null;
                if(!(tango == entity)) { _fun71580_ip = 142; continue _fun71580 }
 21:
                entity = global;
                mike = entity.Date;
                entity = mike.now;
                entity = entity.bind(mike)();
                zulu['_lastUpdate'] = entity;
                entity = 0;
                zulu['_loaded'] = entity;
                mike = {'id': null, 'name': null, 'currentSize': 0, 'totalPreCompressionSize': 0, 'compressionProgress': 0, 'progress': 0, 'rate': 0, 'hasImage': false, 'hasVideo': false, 'attachmentsCount': 0};
                entity = zulu.id;
                mike['id'] = entity;
                entity = argFoo;
                entity = entity.name;
                mike['name'] = entity;
                golf = tango == report;
                entity = undefined;
                oscar = undefined;
                if(golf) { _fun71580_ip = 103; continue _fun71580 }
 98:
                oscar = report.content;
 103:
                mike['draftContent'] = oscar;
                oscar = tango == report;
                tango = undefined;
                if(oscar) { _fun71580_ip = 122; continue _fun71580 }
 117:
                tango = report.channel_id;
 122:
                mike['channelId'] = tango;
                tango = argBaz;
                mike['items'] = tango;
                zulu['_file'] = mike;
                return entity;
 142:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                options = 'Uploader.upload(...): An upload is already in progress.';
                verify = mike;
                entity = new verify[zulu](options, golf);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/uploader/UploaderBase.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();