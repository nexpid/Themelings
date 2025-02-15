// app/lib/uploader/UploadUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/uploader/UploadUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: doesImageMatchUpload
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = argBar;
            zulu = mike.id;
            entity = tango.uri;
            if(!(zulu !== entity)) { _fun00002_ip = 173; continue _fun00001 }
 24:
            zulu = mike.id;
            entity = null;
            if(!(entity != zulu)) { _fun00002_ip = 52; continue _fun00001 }
 35:
            report = mike.id;
            zulu = tango.id;
            if(!(report !== zulu)) { _fun00002_ip = 173; continue _fun00001 }
 52:
            zulu = mike.item;
            report = zulu.platform;
            golf = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 0;
            oscar = oscar[zulu];
            zulu = undefined;
            zulu = golf.bind(zulu)(oscar);
            zulu = zulu.UploadPlatform;
            zulu = zulu.REACT_NATIVE;
            if(!(report !== zulu)) { _fun00002_ip = 107; continue _fun00001 }
 103:
            zulu = false;
            return zulu;
 107:
            mike = mike.item;
            zulu = tango.filename;
            report = mike.originalUri;
            tango = tango.uri;
            if(!(report !== tango)) { _fun00002_ip = 169; continue _fun00001 }
 134:
            if(!(entity != zulu)) { _fun00002_ip = 161; continue _fun00001 }
 138:
            mike = mike.originalUri;
            if(!(entity != mike)) { _fun00002_ip = 161; continue _fun00001 }
 148:
            entity = mike.includes;
            entity = entity.bind(mike)(zulu);
            if(entity) { _fun00002_ip = 165; continue _fun00001 }
 161:
            entity = false;
            return entity;
 165:
            entity = true;
            return entity;
 169:
            entity = true;
            return entity;
 173:
            entity = true;
            return entity;
        }
    };
    zulu['doesImageMatchUpload'] = tango;
    mike = function(argFoo, argBar) { // Original name: calculateProgress
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argBar;
            entity = 0;
            if(!(entity !== zulu)) { _fun00004_ip = 59; continue _fun00003 }
 9:
            mike = global;
            report = mike.Math;
            tango = report.min;
            golf = mike.Math;
            oscar = golf.floor;
            mike = argFoo;
            mike = mike / zulu;
            zulu = 100;
            mike = mike * zulu;
            mike = oscar.bind(golf)(mike);
            entity = tango.bind(report)(mike, zulu);
 59:
            return entity;
        }
    };
    zulu['calculateProgress'] = mike;
    return entity;
})();