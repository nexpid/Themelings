// app/modules/safety_hub/SafetyHubUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: parseMessageEmbedForProps
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.fields;
            report = null;
            if(!(report == michal)) { _fun00002_ip = 21; continue _fun00001 }
 17:
            michal = undefined;
            return michal;
 21:
            oscard = entity.fields;
            zuuluu = oscard.reduce;
            michal = function(argFoo, argBar) {
                entity = argFoo;
                michal = argBar;
                zuuluu = michal.rawName;
                michal = michal.rawValue;
                entity[zuuluu] = michal;
                return entity;
            };
            entity = {};
            zuuluu = zuuluu.bind(oscard)(michal, entity);
            entity = {};
            oscard = _closure1_slot6;
            oscard = oscard.HEADER;
            golfie = zuuluu[oscard];
            verify = report != golfie;
            option = '';
            oscard = option;
            if(!verify) { _fun00002_ip = 82; continue _fun00001 }
 79:
            oscard = golfie;
 82:
            entity['header'] = oscard;
            oscard = _closure1_slot6;
            oscard = oscard.ICON_TYPE;
            oscard = zuuluu[oscard];
            entity['icon'] = oscard;
            oscard = _closure1_slot6;
            oscard = oscard.BODY;
            golfie = zuuluu[oscard];
            verify = report != golfie;
            oscard = option;
            if(!verify) { _fun00002_ip = 131; continue _fun00001 }
 128:
            oscard = golfie;
 131:
            entity['body'] = oscard;
            oscard = _closure1_slot6;
            oscard = oscard.CTAS;
            oscard = zuuluu[oscard];
            golfie = report != oscard;
            if(!golfie) { _fun00002_ip = 159; continue _fun00001 }
 156:
            option = oscard;
 159:
            golfie = option.split;
            oscard = ',';
            golfie = golfie.bind(option)(oscard);
            oscard = golfie.filter;
            tangon = function(argFoo) {
                michal = '';
                entity = argFoo;
                entity = michal !== entity;
                return entity;
            };
            tangon = oscard.bind(golfie)(tangon);
            entity['ctas'] = tangon;
            tangon = global;
            oscard = tangon.parseFloat;
            tangon = _closure1_slot6;
            tangon = tangon.TIMESTAMP;
            tangon = zuuluu[tangon];
            golfie = report != tangon;
            report = 0;
            if(!golfie) { _fun00002_ip = 227; continue _fun00001 }
 224:
            report = tangon;
 227:
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            entity['timestamp'] = tangon;
            tangon = _closure1_slot6;
            tangon = tangon.THEME;
            tangon = zuuluu[tangon];
            entity['theme'] = tangon;
            tangon = _closure1_slot6;
            tangon = tangon.LEARN_MORE_LINK;
            tangon = zuuluu[tangon];
            entity['learn_more_link'] = tangon;
            michal = _closure1_slot6;
            michal = michal.CLASSIFICATION_ID;
            michal = zuuluu[michal];
            entity['classification_id'] = michal;
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.AppealIngestionSignal;
    var _closure1_slot4 = option;
    option = report.SafetySystemNotificationCtaType;
    var _closure1_slot5 = option;
    report = report.SafetySystemNotificationEmbedKeys;
    var _closure1_slot6 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.AbortCodes;
    var _closure1_slot7 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot8 = report;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/safety_hub/SafetyHubUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: getClassificationRelativeIncidentTime
        tangon = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 4;
        michal = oscard[entity];
        report = undefined;
        michal = tangon.bind(report)(michal);
        zuuluu = michal.bind(report)();
        michal = zuuluu.to;
        entity = oscard[entity];
        tangon = tangon.bind(report)(entity);
        entity = argFoo;
        entity = tangon.bind(report)(entity);
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getClassificationRelativeIncidentTime'] = report;
    report = function(argFoo) { // Original name: getAttachmentFilename
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 5;
            entity = entity[oscard];
            report = undefined;
            golfie = tangon.bind(report)(entity);
            tangon = golfie.isImageFile;
            entity = michal.filename;
            entity = tangon.bind(golfie)(entity);
            if(entity) { _fun00004_ip = 109; continue _fun00003 }
 48:
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscard];
            report = tangon.bind(report)(entity);
            tangon = report.isVideoFile;
            entity = michal.filename;
            entity = tangon.bind(report)(entity);
            if(entity) { _fun00004_ip = 109; continue _fun00003 }
 85:
            tangon = michal.filename;
            entity = null;
            report = entity != tangon;
            entity = '';
            if(!report) { _fun00004_ip = 107; continue _fun00003 }
 104:
            entity = tangon;
 107:
            _fun00004_ip = 160; continue _fun00003;
 109:
            report = _closure1_slot8;
            michal = michal.filename;
            zuuluu = null;
            zuuluu = zuuluu != michal;
            tangon = '.png';
            if(!zuuluu) { _fun00004_ip = 137; continue _fun00003 }
 134:
            tangon = michal;
 137:
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = '';
            entity = zuuluu.bind(michal)(report, tangon);
 160:
            return entity;
        }
    };
    zuuluu['getAttachmentFilename'] = report;
    report = function(argFoo) { // Original name: parseMessageForProps
        zuuluu = _closure1_slot9;
        entity = argFoo;
        michal = entity.embeds;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['parseMessageForProps'] = report;
    zuuluu['parseMessageEmbedForProps'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: mapCtaToNativeData
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            report = argBaz;
            entity = _closure1_slot5;
            entity = entity.LEARN_MORE_LINK;
            if(!(entity !== tangon)) { _fun00006_ip = 145; continue _fun00005 }
 26:
            entity = _closure1_slot5;
            entity = entity.POLICY_VIOLATION_DETAIL;
            if(!(entity !== tangon)) { _fun00006_ip = 44; continue _fun00005 }
 40:
            entity = undefined;
            return entity;
 44:
            entity = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 6;
            oscard = offset[tangon];
            option = undefined;
            oscard = verify.bind(option)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            tangon = offset[tangon];
            tangon = verify.bind(option)(tangon);
            tangon = tangon.t;
            tangon = tangon.QsqdXF;
            tangon = oscard.bind(golfie)(tangon);
            entity['text'] = tangon;
            tangon = _closure1_slot5;
            tangon = tangon.POLICY_VIOLATION_DETAIL;
            entity['type'] = tangon;
            tangon = null;
            oscard = tangon != report;
            tangon = '';
            if(!oscard) { _fun00006_ip = 139; continue _fun00005 }
 136:
            tangon = report;
 139:
            entity['key'] = tangon;
            return entity;
 145:
            entity = {};
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 6;
            report = verify[tangon];
            golfie = undefined;
            report = option.bind(golfie)(report);
            oscard = report.intl;
            report = oscard.string;
            tangon = verify[tangon];
            tangon = option.bind(golfie)(tangon);
            tangon = tangon.t;
            tangon = tangon.8/GdRE;
            tangon = report.bind(oscard)(tangon);
            entity['text'] = tangon;
            michal = _closure1_slot5;
            michal = michal.LEARN_MORE_LINK;
            entity['type'] = michal;
            michal = null;
            tangon = michal != zuuluu;
            michal = '';
            if(!tangon) { _fun00006_ip = 240; continue _fun00005 }
 237:
            michal = zuuluu;
 240:
            entity['key'] = michal;
            return entity;
        }
    };
    zuuluu['mapCtaToNativeData'] = tangon;
    tangon = function(argFoo) { // Original name: isFlaggedContentEmpty
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.type;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 7;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.ContentIdType;
            entity = entity.MESSAGE;
            entity = michal !== entity;
            if(entity) { _fun00008_ip = 88; continue _fun00007 }
 52:
            tangon = zuuluu.content;
            michal = '';
            michal = michal === tangon;
            if(!michal) { _fun00008_ip = 85; continue _fun00007 }
 68:
            zuuluu = zuuluu.attachments;
            tangon = zuuluu.length;
            zuuluu = 0;
            michal = zuuluu === tangon;
 85:
            entity = michal;
 88:
            return entity;
        }
    };
    zuuluu['isFlaggedContentEmpty'] = tangon;
    tangon = function(argFoo) {
        michal = {};
        zuuluu = _closure1_slot4;
        report = zuuluu.DIDNT_VIOLATE_POLICY;
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        entity = 6;
        tangon = option[entity];
        oscard = undefined;
        tangon = golfie.bind(oscard)(tangon);
        offset = tangon.intl;
        verify = offset.string;
        tangon = option[entity];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.mZffAg;
        tangon = verify.bind(offset)(tangon);
        michal[report] = tangon;
        report = zuuluu.TOO_STRICT_UNFAIR;
        tangon = option[entity];
        tangon = golfie.bind(oscard)(tangon);
        offset = tangon.intl;
        verify = offset.string;
        tangon = option[entity];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.wgZVAg;
        tangon = verify.bind(offset)(tangon);
        michal[report] = tangon;
        report = zuuluu.DONT_AGREE_PENALTY;
        tangon = option[entity];
        tangon = golfie.bind(oscard)(tangon);
        offset = tangon.intl;
        verify = offset.string;
        tangon = option[entity];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.eu8G4u;
        tangon = verify.bind(offset)(tangon);
        michal[report] = tangon;
        zuuluu = zuuluu.SOMETHING_ELSE;
        tangon = option[entity];
        tangon = golfie.bind(oscard)(tangon);
        report = tangon.intl;
        tangon = report.string;
        entity = option[entity];
        entity = golfie.bind(oscard)(entity);
        entity = entity.t;
        entity = entity.XU3s6u;
        entity = tangon.bind(report)(entity);
        michal[zuuluu] = entity;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    zuuluu['getAppealSignalDisplayText'] = tangon;
    tangon = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = null;
            michal = entity == tangon;
            oscard = '';
            entity = oscard;
            if(michal) { _fun00010_ip = 110; continue _fun00009 }
 19:
            michal = tangon.length;
            report = 0;
            entity = oscard;
            if(!(report !== michal)) { _fun00010_ip = 110; continue _fun00009 }
 33:
            michal = tangon.length;
            zuuluu = 1;
            if(!(zuuluu !== michal)) { _fun00010_ip = 97; continue _fun00009 }
 45:
            michal = tangon.charAt;
            report = michal.bind(tangon)(report);
            michal = report.toUpperCase;
            report = michal.bind(report)();
            michal = tangon.slice;
            zuuluu = michal.bind(tangon)(zuuluu);
            michal = global;
            michal = michal.HermesInternal;
            michal = michal.concat;
            michal = michal.bind(oscard)(report, zuuluu);
            _fun00010_ip = 107; continue _fun00009;
 97:
            zuuluu = tangon.toUpperCase;
            michal = zuuluu.bind(tangon)();
 107:
            entity = michal;
 110:
            return entity;
        }
    };
    zuuluu['capitalizeText'] = tangon;
    tangon = function(argFoo) { // Original name: isGuildClassification
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            zuuluu = null;
            entity = zuuluu != michal;
            if(!entity) { _fun00012_ip = 22; continue _fun00011 }
 12:
            michal = michal.guild_metadata;
            entity = zuuluu != michal;
 22:
            return entity;
        }
    };
    zuuluu['isGuildClassification'] = tangon;
    tangon = function(argFoo) {
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = _closure1_slot7;
            zuuluu = entity.DSA_APPEAL_REQUEST_DEFLECTION;
            entity = argFoo;
            if(!(entity !== zuuluu)) { _fun00014_ip = 81; continue _fun00013 }
 20:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 6;
            zuuluu = golfie[entity];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            entity = entity.t;
            entity = entity.aPmsx8;
            entity = zuuluu.bind(tangon)(entity);
            _fun00014_ip = 140; continue _fun00013;
 81:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 6;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.0qyXXF;
            entity = zuuluu.bind(tangon)(michal);
 140:
            return entity;
        }
    };
    zuuluu['getRequestReviewErrorFromCode'] = tangon;
    tangon = function(argFoo) { // Original name: getClassificationExpiration
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = undefined;
            entity = argFoo;
            zuuluu = entity.max_expiration_time;
            michal = zuuluu;
            entity = null;
            if(!(entity != zuuluu)) { _fun00016_ip = 57; continue _fun00015 }
 20: // try_start_0
            zuuluu = global;
            tangon = zuuluu.Date;
            report = michal;
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            oscard = zuuluu;
            michal = new oscard[tangon](report, tangon);
            michal = michal instanceof Object ? michal : zuuluu;
 51: // try_end0
            return michal;
 53: // catch_target0
            CatchBlockStart(arg_register=1);
            return entity;
 57:
            return entity;
        }
    };
    zuuluu['getClassificationExpiration'] = tangon;
    michal = function() {
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 8;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot3;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            michal = _closure1_slot3;
            entity = michal.getSuspendedUserToken;
            entity = entity.bind(michal)();
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal, entity);
        entity = null;
        entity = entity != michal;
        return entity;
    };
    zuuluu['useIsSuspendedUser'] = michal;
    return entity;
})();