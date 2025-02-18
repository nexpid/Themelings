// app/modules/messages/logMessageSendFailure.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: getAttachmentMimeTypes
        zuuluu = argFoo;
        michal = zuuluu.map;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                michal = entity.mimeType;
                entity = null;
                zuuluu = entity != michal;
                entity = 'unknown';
                if(!zuuluu) { _fun00002_ip = 25; continue _fun00001 }
 22:
                entity = michal;
 25:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot3 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot2 = report;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/logMessageSendFailure.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: logMessageSendFailure
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = michal.fileItems;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00004_ip = 21; continue _fun00003 }
 15:
            oscard = new Array(0);
            _fun00004_ip = 41; continue _fun00003;
 21:
            report = _closure1_slot3;
            tangon = michal.fileItems;
            entity = undefined;
            oscard = report.bind(entity)(tangon);
 41:
            tangon = michal.errorMessage;
            report = zuuluu != tangon;
            entity = undefined;
            golfie = undefined;
            if(!report) { _fun00004_ip = 61; continue _fun00003 }
 58:
            golfie = tangon;
 61:
            michal = michal.failureCode;
            zuuluu = zuuluu != michal;
            option = undefined;
            if(!zuuluu) { _fun00004_ip = 79; continue _fun00003 }
 76:
            option = michal;
 79:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 1;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot2;
            zuuluu = michal.SEND_MESSAGE_FAILURE;
            michal = {};
            michal['failure_code'] = option;
            michal['error_message'] = golfie;
            michal['attachment_mimetypes'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['logMessageSendFailure'] = tangon;
    zuuluu['getAttachmentMimeTypes'] = michal;
    return entity;
})();