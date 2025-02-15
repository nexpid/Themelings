// app/lib/uploader/Upload.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    report = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = report;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = verify;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun56256: for(var _fun56256_ip = 0; ; ) switch(_fun56256_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun56256_ip = 48; continue _fun56256 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun56256_ip = 86; continue _fun56256;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot7;
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
        _fun56257: for(var _fun56257_ip = 0; ; ) switch(_fun56257_ip) {
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
            _fun56257_ip = 74; continue _fun56257;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
    golf = entity.Object;
    oscar = golf.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, mike);
    offset = 0;
    mike = verify[offset];
    entity = undefined;
    mike = report.bind(entity)(mike);
    var _closure1_slot4 = mike;
    golf = 1;
    mike = verify[golf];
    mike = report.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = verify[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = verify[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 4;
    mike = verify[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot8 = mike;
    report = {};
    report['REACT_NATIVE'] = offset;
    mike = 'REACT_NATIVE';
    report[offset] = mike;
    report['WEB'] = golf;
    mike = 'WEB';
    report[golf] = mike;
    var _closure1_slot9 = report;
    mike = {};
    mike['FILE_ATTACHMENT'] = offset;
    oscar = 'FILE_ATTACHMENT';
    mike[offset] = oscar;
    mike['IMAGE_PICKER'] = golf;
    oscar = 'IMAGE_PICKER';
    mike[golf] = oscar;
    oscar = 9;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    golf = oscar.EventEmitter;
    oscar = function(argFoo) {
        tango = function(argFoo, argBar) { // Original name: Upload
            _fun56261: for(var _fun56261_ip = 0; ; ) switch(_fun56261_ip) {
 0:
                zulu = argFoo;
                oscar = this;
                entity = _closure1_slot4;
                report = _closure2_slot0;
                tango = undefined;
                entity = entity.bind(tango)(oscar, report);
                entity = _closure1_slot10;
                entity = entity.bind(tango)(oscar, report);
                entity['item'] = zulu;
                oscar = zulu.platform;
                report = _closure1_slot9;
                report = report.REACT_NATIVE;
                if(!(oscar !== report)) { _fun56261_ip = 241; continue _fun56261 }
 67:
                report = zulu.id;
                oscar = null;
                if(!(oscar == report)) { _fun56261_ip = 113; continue _fun56261 }
 78:
                golf = _closure1_slot1;
                options = _closure1_slot3;
                oscar = 6;
                oscar = options[oscar];
                options = golf.bind(tango)(oscar);
                golf = options.uniqueId;
                oscar = 'upload';
                report = golf.bind(options)(oscar);
 113:
                entity['id'] = report;
                oscar = _closure1_slot2;
                golf = _closure1_slot3;
                report = 7;
                report = golf[report];
                golf = oscar.bind(tango)(report);
                oscar = golf.classifyFile;
                report = zulu.file;
                report = oscar.bind(golf)(report);
                entity['classification'] = report;
                oscar = entity.classification;
                report = 'image';
                report = report === oscar;
                entity['isImage'] = report;
                oscar = entity.classification;
                report = 'video';
                report = report === oscar;
                entity['isVideo'] = report;
                report = zulu.file;
                report = report.name;
                entity['filename'] = report;
                report = zulu.file;
                report = report.type;
                entity['mimeType'] = report;
                _fun56261_ip = 425; continue _fun56261;
 241:
                report = zulu.id;
                oscar = null;
                if(!(oscar == report)) { _fun56261_ip = 258; continue _fun56261 }
 252:
                report = zulu.uri;
 258:
                entity['id'] = report;
                oscar = _closure1_slot0;
                golf = _closure1_slot3;
                report = 5;
                report = golf[report];
                golf = oscar.bind(tango)(report);
                oscar = golf.getFile;
                report = {};
                options = zulu.uri;
                report['uri'] = options;
                options = zulu.filename;
                report['overrideFilename'] = options;
                options = zulu.mimeType;
                report['overrideType'] = options;
                report = oscar.bind(golf)(report);
                oscar = report.filename;
                entity['filename'] = oscar;
                oscar = report.isImage;
                entity['isImage'] = oscar;
                oscar = report.isVideo;
                entity['isVideo'] = oscar;
                report = report.type;
                entity['mimeType'] = report;
                report = zulu.origin;
                entity['origin'] = report;
                report = zulu.durationSecs;
                entity['durationSecs'] = report;
                report = zulu.waveform;
                entity['waveform'] = report;
                report = zulu.isRemix;
                entity['isRemix'] = report;
 425:
                report = zulu.isThumbnail;
                entity['isThumbnail'] = report;
                zulu = zulu.clip;
                entity['clip'] = zulu;
                zulu = _closure1_slot0;
                report = _closure1_slot3;
                mike = 8;
                mike = report[mike];
                zulu = zulu.bind(tango)(mike);
                mike = zulu.v4;
                mike = mike.bind(zulu)();
                entity['uniqueId'] = mike;
                mike = argBar;
                entity['showLargeMessageDialog'] = mike;
                mike = false;
                entity['spoiler'] = mike;
                mike = null;
                entity['description'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'cancel';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'resetState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = this;
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    oscar = oscar.bind(entity)(golf);
    golf = 10;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'lib/uploader/Upload.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['UploadPlatform'] = report;
    tango = function(argFoo) { // Original name: isResolvedUpload
        _fun56264: for(var _fun56264_ip = 0; ; ) switch(_fun56264_ip) {
 0:
            mike = argFoo;
            entity = mike.isVideo;
            zulu = undefined;
            entity = zulu !== entity;
            if(!entity) { _fun56264_ip = 28; continue _fun56264 }
 18:
            mike = mike.isImage;
            entity = zulu !== mike;
 28:
            return entity;
        }
    };
    zulu['isResolvedUpload'] = tango;
    zulu['UploadOrigin'] = mike;
    return entity;
})();