// app/lib/uploader/native/CloudUploaderUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    offset = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = options;
    entity = function(argFoo, argBar, argBaz) { // Original name: _prepareMessageRequestBodyCloud
        _fun56909: for(var _fun56909_ip = 0; ; ) switch(_fun56909_ip) {
 0:
            tango = argFoo;
            mike = argBar;
            oscar = argBaz;
            offset = new Array(0);
            var _closure2_slot0 = offset;
            zulu = tango.forEach;
            entity = function(argFoo, argBar) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.getAttachmentPayload;
                zulu = argFoo;
                mike = argBar;
                oscar = tango.bind(report)(zulu, mike);
                tango = _closure2_slot0;
                zulu = tango.push;
                mike = {};
                golf = mike;
                report = copyDataProperties(golf, oscar);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            entity = null;
            if(!(entity != oscar)) { _fun56909_ip = 44; continue _fun56909 }
 40:
            if(!(entity == mike)) { _fun56909_ip = 67; continue _fun56909 }
 44:
            entity = {};
            backup = entity;
            foxtrot = mike;
            zulu = copyDataProperties(backup, foxtrot);
            zulu = 'attachments';
            entity[zulu] = offset;
            _fun56909_ip = 164; continue _fun56909;
 67:
            report = {};
            backup = report;
            foxtrot = mike;
            mike = copyDataProperties(backup, foxtrot);
            golf = _closure1_slot1;
            options = _closure1_slot2;
            mike = 4;
            tango = options[mike];
            zulu = undefined;
            yankee = golf.bind(zulu)(tango);
            verify = yankee.get;
            tango = new Array(0);
            foxtrot = verify.bind(yankee)(report, oscar, tango);
            tango = new Array(0);
            romeo = 0;
            backup = tango;
            romeo = arraySpread(backup, foxtrot, romeo);
            backup = tango;
            foxtrot = offset;
            verify = arraySpread(backup, foxtrot, romeo);
            mike = options[mike];
            zulu = golf.bind(zulu)(mike);
            mike = zulu.set;
            entity = mike.bind(zulu)(report, oscar, tango);
 164:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    oscar = function(argFoo) { // Original name: prepareMessageRequestHeaders
        _fun56911: for(var _fun56911_ip = 0; ; ) switch(_fun56911_ip) {
 0:
            entity = {};
            mike = argFoo;
            entity['Authorization'] = mike;
            tango = _closure1_slot5;
            zulu = tango.getDebugOptionsHeaderValue;
            zulu = zulu.bind(tango)();
            entity['X-Debug-Options'] = zulu;
            zulu = _closure1_slot3;
            zulu = zulu.locale;
            entity['Accept-Language'] = zulu;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 5;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.getSuperPropertiesBase64;
            tango = zulu.bind(tango)();
            zulu = null;
            if(!(zulu != tango)) { _fun56911_ip = 95; continue _fun56911 }
 89:
            entity['X-Super-Properties'] = tango;
 95:
            tango = _closure1_slot4;
            mike = tango.getFingerprint;
            mike = mike.bind(tango)();
            if(!(zulu != mike)) { _fun56911_ip = 119; continue _fun56911 }
 113:
            entity['X-Fingerprint'] = mike;
 119:
            return entity;
        }
    };
    var _closure1_slot7 = oscar;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: prepareMessagePayload
        oscar = _closure1_slot6;
        report = undefined;
        tango = argBar;
        mike = argBaz;
        entity = argCorge;
        mike = oscar.bind(report)(tango, mike, entity);
        entity = {};
        tango = _closure1_slot7;
        zulu = argFoo;
        zulu = tango.bind(report)(zulu);
        entity['headers'] = zulu;
        entity['body'] = mike;
        return entity;
    };
    mike = function(argFoo) { // Original name: getUploadPayload
        mike = argFoo;
        entity = {};
        zulu = mike.filename;
        entity['filename'] = zulu;
        mike = mike.currentSize;
        entity['file_size'] = mike;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        zulu = tango.bind(mike)(zulu);
        mike = zulu.uniqueId;
        mike = mike.bind(zulu)();
        entity['id'] = mike;
        return entity;
    };
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = offset.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = options[report];
    report = offset.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = options[report];
    report = offset.bind(entity)(report);
    var _closure1_slot5 = report;
    report = {};
    report['getUploadPayload'] = mike;
    report['prepareMessagePayload'] = tango;
    report['prepareMessageRequestHeaders'] = oscar;
    oscar = 6;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'lib/uploader/native/CloudUploaderUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['prepareMessagePayload'] = tango;
    zulu['getUploadPayload'] = mike;
    return entity;
})();