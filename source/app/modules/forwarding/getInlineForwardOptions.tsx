// app/modules/forwarding/getInlineForwardOptions.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.MessageReferenceTypes;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forwarding/getInlineForwardOptions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: getInlineForwardOptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = argBar;
            report = mike.targetKind;
            oscar = mike.embedIndex;
            mike = 'media';
            if(!(mike !== report)) { _fun00002_ip = 78; continue _fun00001 }
 30:
            mike = 'embed';
            if(!(mike === report)) { _fun00002_ip = 44; continue _fun00001 }
 38:
            mike = null;
            if(!(mike == oscar)) { _fun00002_ip = 58; continue _fun00001 }
 44:
            tango = 'shortcut';
            mike = undefined;
            if(!(tango === report)) { _fun00002_ip = 56; continue _fun00001 }
 54:
            mike = {};
 56:
            _fun00002_ip = 76; continue _fun00001;
 58:
            tango = {};
            report = new Array(1);
            report[0] = oscar;
            tango['onlyEmbedIndices'] = report;
            mike = tango;
 76:
            return mike;
 78:
            tango = entity.messageReference;
            report = null;
            oscar = report == tango;
            golf = undefined;
            if(oscar) { _fun00002_ip = 100; continue _fun00001 }
 95:
            golf = tango.type;
 100:
            tango = _closure1_slot2;
            oscar = tango.FORWARD;
            tango = entity;
            if(!(golf === oscar)) { _fun00002_ip = 149; continue _fun00001 }
 120:
            oscar = entity.messageSnapshots;
            entity = 0;
            oscar = oscar[entity];
            golf = report == oscar;
            entity = undefined;
            if(golf) { _fun00002_ip = 146; continue _fun00001 }
 141:
            entity = oscar.message;
 146:
            tango = entity;
 149:
            entity = {};
            report = report == tango;
            mike = undefined;
            if(report) { _fun00002_ip = 200; continue _fun00001 }
 160:
            oscar = tango.attachments;
            report = oscar.filter;
            tango = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    tango = entity.filename;
                    zulu = _closure1_slot0;
                    entity = _closure1_slot1;
                    oscar = 1;
                    entity = entity[oscar];
                    report = undefined;
                    zulu = zulu.bind(report)(entity);
                    entity = zulu.isImageFile;
                    entity = entity.bind(zulu)(tango);
                    if(entity) { _fun00004_ip = 76; continue _fun00003 }
 48:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[oscar];
                    zulu = zulu.bind(report)(mike);
                    mike = zulu.isVideoFile;
                    entity = mike.bind(zulu)(tango);
 76:
                    return entity;
                }
            };
            report = report.bind(oscar)(tango);
            tango = report.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            mike = tango.bind(report)(zulu);
 200:
            entity['onlyAttachmentIds'] = mike;
            return entity;
        }
    };
    zulu['getInlineForwardOptions'] = mike;
    return entity;
})();