// app/modules/safety_hub/SafetyHubUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    tango = function(argFoo) { // Original name: parseMessageEmbedForProps
        _fun72170: for(var _fun72170_ip = 0; ; ) switch(_fun72170_ip) {
 0:
            entity = argFoo;
            mike = entity.fields;
            report = null;
            if(!(report == mike)) { _fun72170_ip = 21; continue _fun72170 }
 17:
            mike = undefined;
            return mike;
 21:
            oscar = entity.fields;
            zulu = oscar.reduce;
            mike = function(argFoo, argBar) {
                entity = argFoo;
                mike = argBar;
                zulu = mike.rawName;
                mike = mike.rawValue;
                entity[zulu] = mike;
                return entity;
            };
            entity = {};
            zulu = zulu.bind(oscar)(mike, entity);
            entity = {};
            oscar = _closure1_slot5;
            oscar = oscar.HEADER;
            golf = zulu[oscar];
            verify = report != golf;
            options = '';
            oscar = options;
            if(!verify) { _fun72170_ip = 84; continue _fun72170 }
 81:
            oscar = golf;
 84:
            entity['header'] = oscar;
            oscar = _closure1_slot5;
            oscar = oscar.ICON_TYPE;
            oscar = zulu[oscar];
            entity['icon'] = oscar;
            oscar = _closure1_slot5;
            oscar = oscar.BODY;
            golf = zulu[oscar];
            verify = report != golf;
            oscar = options;
            if(!verify) { _fun72170_ip = 133; continue _fun72170 }
 130:
            oscar = golf;
 133:
            entity['body'] = oscar;
            oscar = _closure1_slot5;
            oscar = oscar.CTAS;
            oscar = zulu[oscar];
            golf = report != oscar;
            if(!golf) { _fun72170_ip = 161; continue _fun72170 }
 158:
            options = oscar;
 161:
            golf = options.split;
            oscar = ',';
            golf = golf.bind(options)(oscar);
            oscar = golf.filter;
            tango = function(argFoo) {
                mike = '';
                entity = argFoo;
                entity = mike !== entity;
                return entity;
            };
            tango = oscar.bind(golf)(tango);
            entity['ctas'] = tango;
            tango = global;
            oscar = tango.parseFloat;
            tango = _closure1_slot5;
            tango = tango.TIMESTAMP;
            tango = zulu[tango];
            golf = report != tango;
            report = 0;
            if(!golf) { _fun72170_ip = 231; continue _fun72170 }
 228:
            report = tango;
 231:
            tango = undefined;
            tango = oscar.bind(tango)(report);
            entity['timestamp'] = tango;
            tango = _closure1_slot5;
            tango = tango.THEME;
            tango = zulu[tango];
            entity['theme'] = tango;
            tango = _closure1_slot5;
            tango = tango.LEARN_MORE_LINK;
            tango = zulu[tango];
            entity['learn_more_link'] = tango;
            mike = _closure1_slot5;
            mike = mike.CLASSIFICATION_ID;
            mike = zulu[mike];
            entity['classification_id'] = mike;
            return entity;
        }
    };
    var _closure1_slot8 = tango;
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
    options = report.AppealIngestionSignal;
    var _closure1_slot3 = options;
    options = report.SafetySystemNotificationCtaType;
    var _closure1_slot4 = options;
    report = report.SafetySystemNotificationEmbedKeys;
    var _closure1_slot5 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.AbortCodes;
    var _closure1_slot6 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot7 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/safety_hub/SafetyHubUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: getClassificationRelativeIncidentTime
        tango = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 3;
        mike = oscar[entity];
        report = undefined;
        mike = tango.bind(report)(mike);
        zulu = mike.bind(report)();
        mike = zulu.to;
        entity = oscar[entity];
        tango = tango.bind(report)(entity);
        entity = argFoo;
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getClassificationRelativeIncidentTime'] = report;
    report = function(argFoo) { // Original name: getAttachmentFilename
        _fun72174: for(var _fun72174_ip = 0; ; ) switch(_fun72174_ip) {
 0:
            mike = argFoo;
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            oscar = 4;
            entity = entity[oscar];
            report = undefined;
            golf = tango.bind(report)(entity);
            tango = golf.isImageFile;
            entity = mike.filename;
            entity = tango.bind(golf)(entity);
            if(entity) { _fun72174_ip = 109; continue _fun72174 }
 48:
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscar];
            report = tango.bind(report)(entity);
            tango = report.isVideoFile;
            entity = mike.filename;
            entity = tango.bind(report)(entity);
            if(entity) { _fun72174_ip = 109; continue _fun72174 }
 85:
            tango = mike.filename;
            entity = null;
            report = entity != tango;
            entity = '';
            if(!report) { _fun72174_ip = 107; continue _fun72174 }
 104:
            entity = tango;
 107:
            _fun72174_ip = 160; continue _fun72174;
 109:
            report = _closure1_slot7;
            mike = mike.filename;
            zulu = null;
            zulu = zulu != mike;
            tango = '.png';
            if(!zulu) { _fun72174_ip = 137; continue _fun72174 }
 134:
            tango = mike;
 137:
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = '';
            entity = zulu.bind(mike)(report, tango);
 160:
            return entity;
        }
    };
    zulu['getAttachmentFilename'] = report;
    report = function(argFoo) { // Original name: parseMessageForProps
        zulu = _closure1_slot8;
        entity = argFoo;
        mike = entity.embeds;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['parseMessageForProps'] = report;
    zulu['parseMessageEmbedForProps'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: mapCtaToNativeData
        _fun72176: for(var _fun72176_ip = 0; ; ) switch(_fun72176_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            report = argBaz;
            entity = _closure1_slot4;
            entity = entity.LEARN_MORE_LINK;
            if(!(entity !== tango)) { _fun72176_ip = 143; continue _fun72176 }
 26:
            entity = _closure1_slot4;
            entity = entity.POLICY_VIOLATION_DETAIL;
            if(!(entity !== tango)) { _fun72176_ip = 44; continue _fun72176 }
 40:
            entity = undefined;
            return entity;
 44:
            entity = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 5;
            oscar = offset[tango];
            options = undefined;
            oscar = verify.bind(options)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            tango = offset[tango];
            tango = verify.bind(options)(tango);
            tango = tango.t;
            tango = tango.QsqdXF;
            tango = oscar.bind(golf)(tango);
            entity['text'] = tango;
            tango = _closure1_slot4;
            tango = tango.POLICY_VIOLATION_DETAIL;
            entity['type'] = tango;
            tango = null;
            oscar = tango != report;
            tango = '';
            if(!oscar) { _fun72176_ip = 137; continue _fun72176 }
 134:
            tango = report;
 137:
            entity['key'] = tango;
            return entity;
 143:
            entity = {};
            options = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 5;
            report = verify[tango];
            golf = undefined;
            report = options.bind(golf)(report);
            oscar = report.intl;
            report = oscar.string;
            tango = verify[tango];
            tango = options.bind(golf)(tango);
            tango = tango.t;
            tango = tango.8/GdRE;
            tango = report.bind(oscar)(tango);
            entity['text'] = tango;
            mike = _closure1_slot4;
            mike = mike.LEARN_MORE_LINK;
            entity['type'] = mike;
            mike = null;
            tango = mike != zulu;
            mike = '';
            if(!tango) { _fun72176_ip = 236; continue _fun72176 }
 233:
            mike = zulu;
 236:
            entity['key'] = mike;
            return entity;
        }
    };
    zulu['mapCtaToNativeData'] = tango;
    tango = function(argFoo) { // Original name: isFlaggedContentEmpty
        _fun72177: for(var _fun72177_ip = 0; ; ) switch(_fun72177_ip) {
 0:
            zulu = argFoo;
            mike = zulu.type;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 6;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.ContentIdType;
            entity = entity.MESSAGE;
            entity = mike !== entity;
            if(entity) { _fun72177_ip = 88; continue _fun72177 }
 52:
            tango = zulu.content;
            mike = '';
            mike = mike === tango;
            if(!mike) { _fun72177_ip = 85; continue _fun72177 }
 68:
            zulu = zulu.attachments;
            tango = zulu.length;
            zulu = 0;
            mike = zulu === tango;
 85:
            entity = mike;
 88:
            return entity;
        }
    };
    zulu['isFlaggedContentEmpty'] = tango;
    tango = function(argFoo) {
        mike = {};
        zulu = _closure1_slot3;
        report = zulu.DIDNT_VIOLATE_POLICY;
        golf = _closure1_slot0;
        options = _closure1_slot2;
        entity = 5;
        tango = options[entity];
        oscar = undefined;
        tango = golf.bind(oscar)(tango);
        offset = tango.intl;
        verify = offset.string;
        tango = options[entity];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.mZffAg;
        tango = verify.bind(offset)(tango);
        mike[report] = tango;
        report = zulu.TOO_STRICT_UNFAIR;
        tango = options[entity];
        tango = golf.bind(oscar)(tango);
        offset = tango.intl;
        verify = offset.string;
        tango = options[entity];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.wgZVAg;
        tango = verify.bind(offset)(tango);
        mike[report] = tango;
        report = zulu.DONT_AGREE_PENALTY;
        tango = options[entity];
        tango = golf.bind(oscar)(tango);
        offset = tango.intl;
        verify = offset.string;
        tango = options[entity];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.eu8G4u;
        tango = verify.bind(offset)(tango);
        mike[report] = tango;
        zulu = zulu.SOMETHING_ELSE;
        tango = options[entity];
        tango = golf.bind(oscar)(tango);
        report = tango.intl;
        tango = report.string;
        entity = options[entity];
        entity = golf.bind(oscar)(entity);
        entity = entity.t;
        entity = entity.XU3s6u;
        entity = tango.bind(report)(entity);
        mike[zulu] = entity;
        entity = argFoo;
        entity = mike[entity];
        return entity;
    };
    zulu['getAppealSignalDisplayText'] = tango;
    tango = function(argFoo) {
        _fun72179: for(var _fun72179_ip = 0; ; ) switch(_fun72179_ip) {
 0:
            tango = argFoo;
            entity = null;
            mike = entity == tango;
            oscar = '';
            entity = oscar;
            if(mike) { _fun72179_ip = 110; continue _fun72179 }
 19:
            mike = tango.length;
            report = 0;
            entity = oscar;
            if(!(report !== mike)) { _fun72179_ip = 110; continue _fun72179 }
 33:
            mike = tango.length;
            zulu = 1;
            if(!(zulu !== mike)) { _fun72179_ip = 97; continue _fun72179 }
 45:
            mike = tango.charAt;
            report = mike.bind(tango)(report);
            mike = report.toUpperCase;
            report = mike.bind(report)();
            mike = tango.slice;
            zulu = mike.bind(tango)(zulu);
            mike = global;
            mike = mike.HermesInternal;
            mike = mike.concat;
            mike = mike.bind(oscar)(report, zulu);
            _fun72179_ip = 107; continue _fun72179;
 97:
            zulu = tango.toUpperCase;
            mike = zulu.bind(tango)();
 107:
            entity = mike;
 110:
            return entity;
        }
    };
    zulu['capitalizeText'] = tango;
    tango = function(argFoo) { // Original name: isGuildClassification
        _fun72180: for(var _fun72180_ip = 0; ; ) switch(_fun72180_ip) {
 0:
            mike = argFoo;
            zulu = null;
            entity = zulu != mike;
            if(!entity) { _fun72180_ip = 22; continue _fun72180 }
 12:
            mike = mike.guild_metadata;
            entity = zulu != mike;
 22:
            return entity;
        }
    };
    zulu['isGuildClassification'] = tango;
    tango = function(argFoo) {
        _fun72181: for(var _fun72181_ip = 0; ; ) switch(_fun72181_ip) {
 0:
            entity = _closure1_slot6;
            zulu = entity.DSA_APPEAL_REQUEST_DEFLECTION;
            entity = argFoo;
            if(!(entity !== zulu)) { _fun72181_ip = 79; continue _fun72181 }
 20:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 5;
            zulu = golf[entity];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            entity = golf[entity];
            entity = oscar.bind(report)(entity);
            entity = entity.t;
            entity = entity.aPmsx8;
            entity = zulu.bind(tango)(entity);
            _fun72181_ip = 136; continue _fun72181;
 79:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 5;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.0qyXXF;
            entity = zulu.bind(tango)(mike);
 136:
            return entity;
        }
    };
    zulu['getRequestReviewErrorFromCode'] = tango;
    mike = function(argFoo) { // Original name: getClassificationExpiration
        _fun72182: for(var _fun72182_ip = 0; ; ) switch(_fun72182_ip) {
 0:
            mike = undefined;
            entity = argFoo;
            zulu = entity.max_expiration_time;
            mike = zulu;
            entity = null;
            if(!(entity != zulu)) { _fun72182_ip = 57; continue _fun72182 }
 20: // try_start_0
            zulu = global;
            tango = zulu.Date;
            report = mike;
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            oscar = zulu;
            mike = new oscar[tango](report, tango);
            mike = mike instanceof Object ? mike : zulu;
 51: // try_end0
            return mike;
 53: // catch_target0
            CatchBlockStart(arg_register=1);
            return entity;
 57:
            return entity;
        }
    };
    zulu['getClassificationExpiration'] = mike;
    return entity;
})();