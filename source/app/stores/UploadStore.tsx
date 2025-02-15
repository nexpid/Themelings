// app/stores/UploadStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun69104: for(var _fun69104_ip = 0; ; ) switch(_fun69104_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun69104_ip = 51; continue _fun69104 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun69104_ip = 92; continue _fun69104;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun69104_ip = 71; continue _fun69104 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun69105: for(var _fun69105_ip = 0; ; ) switch(_fun69105_ip) {
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
            _fun69105_ip = 76; continue _fun69105;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: storeLocalUriForUpload
        _fun69108: for(var _fun69108_ip = 0; ; ) switch(_fun69108_ip) {
 0:
            entity = argBar;
            var _closure2_slot0 = entity;
            tango = _closure1_slot13;
            golf = entity.items;
            mike = null;
            oscar = mike == golf;
            entity = undefined;
            zulu = undefined;
            if(oscar) { _fun69108_ip = 52; continue _fun69108 }
 35:
            oscar = golf.map;
            report = function(argFoo) {
                _fun69109: for(var _fun69109_ip = 0; ; ) switch(_fun69109_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.item;
                    oscar = _closure1_slot6;
                    report = oscar.test;
                    tango = mike.originalUri;
                    tango = report.bind(oscar)(tango);
                    if(tango) { _fun69109_ip = 61; continue _fun69109 }
 34:
                    report = _closure1_slot7;
                    tango = report.test;
                    entity = mike.originalUri;
                    entity = tango.bind(report)(entity);
                    if(entity) { _fun69109_ip = 61; continue _fun69109 }
 57:
                    entity = undefined;
                    return entity;
 61:
                    entity = {};
                    golf = mike.width;
                    tango = null;
                    options = tango != golf;
                    oscar = 0;
                    if(!options) { _fun69109_ip = 82; continue _fun69109 }
 79:
                    oscar = golf;
 82:
                    entity['width'] = oscar;
                    oscar = mike.height;
                    golf = tango != oscar;
                    report = 0;
                    if(!golf) { _fun69109_ip = 103; continue _fun69109 }
 100:
                    report = oscar;
 103:
                    entity['height'] = report;
                    oscar = mike.originalUri;
                    golf = tango != oscar;
                    mike = '';
                    report = mike;
                    if(!golf) { _fun69109_ip = 130; continue _fun69109 }
 127:
                    report = oscar;
 130:
                    entity['localUri'] = report;
                    report = _closure2_slot0;
                    report = report.id;
                    entity['uploaderId'] = report;
                    zulu = zulu.id;
                    tango = tango != zulu;
                    if(!tango) { _fun69109_ip = 167; continue _fun69109 }
 164:
                    mike = zulu;
 167:
                    entity['uploaderItemId'] = mike;
                    return entity;
                }
            };
            zulu = oscar.bind(golf)(report);
 52:
            if(!(mike == zulu)) { _fun69108_ip = 60; continue _fun69108 }
 56:
            zulu = new Array(0);
 60:
            mike = argFoo;
            tango[mike] = zulu;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: clearLocalUriForUpload
        entity = {};
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: clearFile
        _fun69111: for(var _fun69111_ip = 0; ; ) switch(_fun69111_ip) {
 0:
            tango = argFoo;
            oscar = argBar;
            var _closure2_slot0 = oscar;
            entity = _closure1_slot9;
            zulu = entity[tango];
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun69111_ip = 95; continue _fun69111 }
 32:
            golf = _closure1_slot9;
            options = zulu.filter;
            report = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike !== entity;
                return entity;
            };
            report = options.bind(zulu)(report);
            golf[tango] = report;
            report = _closure1_slot10;
            report = delete report[oscar];
            report = _closure1_slot11;
            report = delete report[oscar];
            zulu = zulu.length;
            mike = _closure1_slot9;
            mike = mike[tango];
            mike = mike.length;
            entity = zulu !== mike;
 95:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: updateFile
        _fun69113: for(var _fun69113_ip = 0; ; ) switch(_fun69113_ip) {
 0:
            report = argFoo;
            tango = argBar;
            var _closure2_slot0 = tango;
            mike = _closure1_slot9;
            options = mike[report];
            zulu = null;
            if(!(zulu != options)) { _fun69113_ip = 143; continue _fun69113 }
 29:
            mike = _closure1_slot9;
            golf = options.map;
            entity = function(argFoo) {
                _fun69114: for(var _fun69114_ip = 0; ; ) switch(_fun69114_ip) {
 0:
                    tango = argFoo;
                    report = tango.id;
                    entity = _closure2_slot0;
                    mike = entity.id;
                    entity = tango;
                    if(!(report === mike)) { _fun69114_ip = 53; continue _fun69114 }
 27:
                    mike = {};
                    golf = mike;
                    oscar = tango;
                    tango = copyDataProperties(golf, oscar);
                    oscar = _closure2_slot0;
                    golf = mike;
                    zulu = copyDataProperties(golf, oscar);
                    entity = mike;
 53:
                    return entity;
                }
            };
            entity = golf.bind(options)(entity);
            mike[report] = entity;
            mike = _closure1_slot11;
            entity = tango.id;
            report = mike[entity];
            entity = zulu != report;
            if(!entity) { _fun69113_ip = 91; continue _fun69113 }
 74:
            golf = _closure1_slot12;
            mike = report.id;
            mike = golf[mike];
            entity = zulu != mike;
 91:
            if(!entity) { _fun69113_ip = 139; continue _fun69113 }
 94:
            zulu = _closure1_slot12;
            mike = report.id;
            entity = {};
            oscar = _closure1_slot12;
            report = report.id;
            verify = oscar[report];
            offset = entity;
            report = copyDataProperties(offset, verify);
            offset = entity;
            verify = tango;
            tango = copyDataProperties(offset, verify);
            zulu[mike] = entity;
 139:
            entity = undefined;
            return entity;
 143:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    mike = global;
    verify = mike.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    golf = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(golf);
    var _closure1_slot0 = golf;
    golf = 1;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot1 = golf;
    golf = 2;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot2 = golf;
    golf = 3;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 4;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 5;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = /^(assets-library|ph|file):\\/\\//;
    var _closure1_slot6 = golf;
    golf = /^content:\\/\\//;
    var _closure1_slot7 = golf;
    options = mike.Object;
    golf = options.freeze;
    mike = new Array(0);
    mike = golf.bind(options)(mike);
    var _closure1_slot8 = mike;
    mike = {};
    var _closure1_slot9 = mike;
    mike = {};
    var _closure1_slot10 = mike;
    mike = {};
    var _closure1_slot11 = mike;
    mike = {};
    var _closure1_slot12 = mike;
    mike = {};
    var _closure1_slot13 = mike;
    mike = 6;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: UploadStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot14;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = this;
            mike = zulu.waitFor;
            entity = _closure1_slot5;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'getFiles';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun69118: for(var _fun69118_ip = 0; ; ) switch(_fun69118_ip) {
 0:
                zulu = _closure1_slot9;
                entity = argFoo;
                entity = zulu[entity];
                zulu = null;
                if(!(zulu == entity)) { _fun69118_ip = 24; continue _fun69118 }
 20:
                entity = _closure1_slot8;
 24:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getMessageForFile';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot11;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getUploaderFileForMessageId';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot12;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getUploadAttachments';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun69121: for(var _fun69121_ip = 0; ; ) switch(_fun69121_ip) {
 0:
                mike = argFoo;
                entity = null;
                if(!(entity == mike)) { _fun69121_ip = 13; continue _fun69121 }
 9:
                entity = undefined;
                return entity;
 13:
                entity = _closure1_slot13;
                entity = entity[mike];
                return entity;
            }
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'UploadStore';
    golf['displayName'] = mike;
    mike = 7;
    mike = report[mike];
    romeo = oscar.bind(entity)(mike);
    mike = {};
    options = function() { // Original name: handleConnectionOpen
        mike = _closure1_slot17;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['CONNECTION_OPEN'] = options;
    options = function() { // Original name: handleLogout
        mike = _closure1_slot17;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['LOGOUT'] = options;
    options = function(argFoo) { // Original name: handleUploadStart
        _fun69124: for(var _fun69124_ip = 0; ; ) switch(_fun69124_ip) {
 0:
            entity = argFoo;
            golf = entity.channelId;
            tango = entity.file;
            options = entity.uploader;
            entity = entity.message;
            mike = options._aborted;
            if(mike) { _fun69124_ip = 194; continue _fun69124 }
 37:
            mike = options._errored;
            if(mike) { _fun69124_ip = 194; continue _fun69124 }
 49:
            zulu = _closure1_slot9;
            verify = zulu[golf];
            zulu = null;
            if(!(zulu == verify)) { _fun69124_ip = 70; continue _fun69124 }
 66:
            verify = _closure1_slot8;
 70:
            oscar = _closure1_slot10;
            report = tango.id;
            oscar[report] = options;
            oscar = _closure1_slot9;
            report = new Array(1);
            offset = 0;
            romeo = report;
            yankee = verify;
            verify = arraySpread(romeo, yankee, offset);
            report[verify] = tango;
            options = 1;
            options = verify + options;
            oscar[golf] = report;
            oscar = _closure1_slot11;
            report = tango.id;
            oscar[report] = entity;
            options = tango.items;
            if(!(zulu != options)) { _fun69124_ip = 176; continue _fun69124 }
 142:
            oscar = _closure1_slot12;
            report = entity.id;
            zulu = {};
            romeo = zulu;
            yankee = tango;
            golf = copyDataProperties(romeo, yankee);
            golf = 'items';
            zulu[golf] = options;
            oscar[report] = zulu;
 176:
            zulu = _closure1_slot16;
            mike = entity.nonce;
            entity = undefined;
            entity = zulu.bind(entity)(mike, tango);
 194:
            entity = undefined;
            return entity;
        }
    };
    mike['UPLOAD_START'] = options;
    options = function(argFoo) { // Original name: handleUploadCompressionProgress
        entity = argFoo;
        tango = entity.channelId;
        zulu = entity.file;
        mike = _closure1_slot19;
        entity = undefined;
        mike = mike.bind(entity)(tango, zulu);
        return entity;
    };
    mike['UPLOAD_COMPRESSION_PROGRESS'] = options;
    options = function(argFoo) { // Original name: handleUploadProgress
        entity = argFoo;
        tango = entity.channelId;
        zulu = entity.file;
        mike = _closure1_slot19;
        entity = undefined;
        mike = mike.bind(entity)(tango, zulu);
        return entity;
    };
    mike['UPLOAD_PROGRESS'] = options;
    options = function(argFoo) { // Original name: handleUploadComplete
        entity = argFoo;
        tango = entity.channelId;
        entity = entity.file;
        zulu = _closure1_slot18;
        mike = entity.id;
        entity = undefined;
        entity = zulu.bind(entity)(tango, mike);
        return entity;
    };
    mike['UPLOAD_COMPLETE'] = options;
    options = function(argFoo) { // Original name: handleUploadFail
        entity = argFoo;
        tango = entity.channelId;
        entity = entity.file;
        zulu = _closure1_slot18;
        mike = entity.id;
        entity = undefined;
        entity = zulu.bind(entity)(tango, mike);
        return entity;
    };
    mike['UPLOAD_FAIL'] = options;
    options = function(argFoo) { // Original name: handleUploadCancel
        _fun69129: for(var _fun69129_ip = 0; ; ) switch(_fun69129_ip) {
 0:
            entity = argFoo;
            entity = entity.file;
            zulu = _closure1_slot10;
            entity = entity.id;
            zulu = zulu[entity];
            var _closure2_slot0 = zulu;
            entity = null;
            if(!(entity != zulu)) { _fun69129_ip = 61; continue _fun69129 }
 37:
            entity = global;
            zulu = entity.setImmediate;
            entity = undefined;
            mike = function() {
                _fun69130: for(var _fun69130_ip = 0; ; ) switch(_fun69130_ip) {
 0:
                    entity = _closure2_slot0;
                    zulu = entity.cancel;
                    entity = null;
                    zulu = entity == zulu;
                    entity = undefined;
                    if(zulu) { _fun69130_ip = 38; continue _fun69130 }
 24:
                    zulu = _closure2_slot0;
                    mike = zulu.cancel;
                    entity = mike.bind(zulu)();
 38:
                    return entity;
                }
            };
            mike = zulu.bind(entity)(mike);
            return entity;
 61:
            entity = false;
            return entity;
        }
    };
    mike['UPLOAD_CANCEL_REQUEST'] = options;
    options = function(argFoo) { // Original name: handleUploadItemCancel
        _fun69131: for(var _fun69131_ip = 0; ; ) switch(_fun69131_ip) {
 0:
            zulu = argFoo;
            entity = zulu.file;
            zulu = zulu.itemId;
            var _closure2_slot0 = zulu;
            zulu = _closure1_slot10;
            entity = entity.id;
            zulu = zulu[entity];
            var _closure2_slot1 = zulu;
            entity = null;
            if(!(entity != zulu)) { _fun69131_ip = 71; continue _fun69131 }
 47:
            entity = global;
            zulu = entity.setImmediate;
            entity = undefined;
            mike = function() {
                zulu = _closure2_slot1;
                mike = zulu.cancelItem;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(entity)(mike);
            return entity;
 71:
            entity = false;
            return entity;
        }
    };
    mike['UPLOAD_ITEM_CANCEL_REQUEST'] = options;
    options = function(argFoo) { // Original name: handleUploadFileUpdate
        _fun69133: for(var _fun69133_ip = 0; ; ) switch(_fun69133_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            zulu = entity.file;
            report = _closure1_slot11;
            mike = zulu.id;
            mike = report[mike];
            report = null;
            if(!(report != mike)) { _fun69133_ip = 54; continue _fun69133 }
 36:
            oscar = _closure1_slot16;
            report = mike.nonce;
            mike = undefined;
            mike = oscar.bind(mike)(report, zulu);
 54:
            mike = _closure1_slot19;
            entity = undefined;
            mike = mike.bind(entity)(tango, zulu);
            return entity;
        }
    };
    mike['UPLOAD_FILE_UPDATE'] = options;
    tango = function(argFoo) { // Original name: restoreFailedUpload
        entity = argFoo;
        zulu = entity.file;
        mike = entity.messageId;
        entity = _closure1_slot12;
        entity[mike] = zulu;
        entity = undefined;
        return entity;
    };
    mike['UPLOAD_RESTORE_FAILED_UPLOAD'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[golf](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'stores/UploadStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();