// app/modules/messages/logMessageSendFailure.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function(argFoo) { // Original name: getAttachmentMimeTypes
        zulu = argFoo;
        mike = zulu.map;
        entity = function(argFoo) {
            _fun82234: for(var _fun82234_ip = 0; ; ) switch(_fun82234_ip) {
 0:
                entity = argFoo;
                mike = entity.mimeType;
                entity = null;
                zulu = entity != mike;
                entity = 'unknown';
                if(!zulu) { _fun82234_ip = 25; continue _fun82234 }
 22:
                entity = mike;
 25:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot3 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot2 = report;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/logMessageSendFailure.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: logMessageSendFailure
        _fun82235: for(var _fun82235_ip = 0; ; ) switch(_fun82235_ip) {
 0:
            mike = argFoo;
            entity = mike.fileItems;
            zulu = null;
            if(!(zulu == entity)) { _fun82235_ip = 21; continue _fun82235 }
 15:
            oscar = new Array(0);
            _fun82235_ip = 41; continue _fun82235;
 21:
            report = _closure1_slot3;
            tango = mike.fileItems;
            entity = undefined;
            oscar = report.bind(entity)(tango);
 41:
            tango = mike.errorMessage;
            report = zulu != tango;
            entity = undefined;
            golf = undefined;
            if(!report) { _fun82235_ip = 61; continue _fun82235 }
 58:
            golf = tango;
 61:
            mike = mike.failureCode;
            zulu = zulu != mike;
            options = undefined;
            if(!zulu) { _fun82235_ip = 79; continue _fun82235 }
 76:
            options = mike;
 79:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 1;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.trackWithMetadata;
            mike = _closure1_slot2;
            zulu = mike.SEND_MESSAGE_FAILURE;
            mike = {};
            mike['failure_code'] = options;
            mike['error_message'] = golf;
            mike['attachment_mimetypes'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['logMessageSendFailure'] = tango;
    zulu['getAttachmentMimeTypes'] = mike;
    return entity;
})();