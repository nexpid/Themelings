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
        _fun56954: for(var _fun56954_ip = 0; ; ) switch(_fun56954_ip) {
 0:
            tango = argFoo;
            mike = argBar;
            zulu = mike.id;
            entity = tango.uri;
            if(!(zulu !== entity)) { _fun56954_ip = 168; continue _fun56954 }
 23:
            zulu = mike.id;
            entity = null;
            if(!(entity != zulu)) { _fun56954_ip = 48; continue _fun56954 }
 34:
            report = mike.id;
            zulu = tango.id;
            if(!(report !== zulu)) { _fun56954_ip = 168; continue _fun56954 }
 48:
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
            if(!(report !== zulu)) { _fun56954_ip = 103; continue _fun56954 }
 99:
            zulu = false;
            return zulu;
 103:
            mike = mike.item;
            zulu = tango.filename;
            report = mike.originalUri;
            tango = tango.uri;
            if(!(report !== tango)) { _fun56954_ip = 164; continue _fun56954 }
 129:
            if(!(entity != zulu)) { _fun56954_ip = 156; continue _fun56954 }
 133:
            mike = mike.originalUri;
            if(!(entity != mike)) { _fun56954_ip = 156; continue _fun56954 }
 143:
            entity = mike.includes;
            entity = entity.bind(mike)(zulu);
            if(entity) { _fun56954_ip = 160; continue _fun56954 }
 156:
            entity = false;
            return entity;
 160:
            entity = true;
            return entity;
 164:
            entity = true;
            return entity;
 168:
            entity = true;
            return entity;
        }
    };
    zulu['doesImageMatchUpload'] = tango;
    mike = function(argFoo, argBar) { // Original name: calculateProgress
        _fun56955: for(var _fun56955_ip = 0; ; ) switch(_fun56955_ip) {
 0:
            zulu = argBar;
            entity = 0;
            if(!(entity !== zulu)) { _fun56955_ip = 59; continue _fun56955 }
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