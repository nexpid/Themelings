// app/lib/uploader/UploadTargets.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    offset = 0;
    tangon = golfie[offset];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    verify = 1;
    tangon = golfie[verify];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    option = 2;
    tangon = golfie[option];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.Endpoints;
    var _closure1_slot7 = report;
    tangon = tangon.MAX_UPLOAD_COUNT;
    var _closure1_slot8 = tangon;
    tangon = function() {
        tangon = _closure1_slot5;
        zuuluu = function() { // Original name: MessageAttachmentUploadTarget
            tangon = _closure1_slot4;
            zuuluu = _closure2_slot0;
            entity = undefined;
            michal = this;
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'getCreateAttachmentURL';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot7;
            michal = zuuluu.MESSAGE_CREATE_ATTACHMENT_UPLOAD;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(6);
        michal[0] = entity;
        entity = {};
        oscard = 'getDeleteUploadURL';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot7;
            michal = zuuluu.MESSAGE_DELETE_UPLOAD;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'getMaxFileSize';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot6;
                zuuluu = tangon.getBasicChannel;
                michal = argFoo;
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = _closure1_slot2;
                michal = _closure1_slot3;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.maxFileSize;
                report = null;
                report = report == tangon;
                if(report) { _fun00002_ip = 63; continue _fun00001 }
 58:
                entity = tangon.guild_id;
 63:
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'getMaxAttachmentsCount';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'getMaxTotalAttachmentSize';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.MAX_TOTAL_ATTACHMENT_SIZE;
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'shouldReactNativeCompressUploads';
        entity['key'] = oscard;
        report = function() { // Original name: get
            entity = true;
            return entity;
        };
        entity['get'] = report;
        michal[5] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot9 = tangon;
    tangon = {};
    tangon['MESSAGE_ATTACHMENT'] = offset;
    report = 'MESSAGE_ATTACHMENT';
    tangon[offset] = report;
    tangon['GUILD_PRODUCT_ATTACHMENT'] = verify;
    report = 'GUILD_PRODUCT_ATTACHMENT';
    tangon[verify] = report;
    tangon['GRAVITY_ATTACHMENT'] = option;
    report = 'GRAVITY_ATTACHMENT';
    tangon[option] = report;
    var _closure1_slot10 = tangon;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'lib/uploader/UploadTargets.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['UploadTargets'] = tangon;
    michal = function(argFoo) { // Original name: getUploadTarget
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot10;
            michal = michal.GUILD_PRODUCT_ATTACHMENT;
            if(!(michal !== zuuluu)) { _fun00004_ip = 114; continue _fun00003 }
 20:
            michal = _closure1_slot10;
            michal = michal.GRAVITY_ATTACHMENT;
            if(!(michal !== zuuluu)) { _fun00004_ip = 70; continue _fun00003 }
 34:
            michal = _closure1_slot10;
            michal = michal.MESSAGE_ATTACHMENT;
            michal = _closure1_slot9;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            oscard = zuuluu;
            michal = new oscard[michal](report);
            michal = michal instanceof Object ? michal : zuuluu;
            return michal;
 70:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot3;
            michal = 7;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            oscard = zuuluu;
            michal = new oscard[michal](report);
            michal = michal instanceof Object ? michal : zuuluu;
            return michal;
 114:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            oscard = michal;
            entity = new oscard[entity](report);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['getUploadTarget'] = michal;
    return entity;
})();