// app/lib/uploader/UploadTargets.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    offset = 0;
    tango = golf[offset];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    verify = 1;
    tango = golf[verify];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    options = 2;
    tango = golf[options];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.Endpoints;
    var _closure1_slot7 = report;
    tango = tango.MAX_UPLOAD_COUNT;
    var _closure1_slot8 = tango;
    tango = function() {
        tango = _closure1_slot5;
        zulu = function() { // Original name: MessageAttachmentUploadTarget
            tango = _closure1_slot4;
            zulu = _closure2_slot0;
            entity = undefined;
            mike = this;
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'getCreateAttachmentURL';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            zulu = _closure1_slot7;
            mike = zulu.MESSAGE_CREATE_ATTACHMENT_UPLOAD;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(6);
        mike[0] = entity;
        entity = {};
        oscar = 'getDeleteUploadURL';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot7;
            mike = zulu.MESSAGE_DELETE_UPLOAD;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'getMaxFileSize';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun56922: for(var _fun56922_ip = 0; ; ) switch(_fun56922_ip) {
 0:
                tango = _closure1_slot6;
                zulu = tango.getBasicChannel;
                mike = argFoo;
                tango = zulu.bind(tango)(mike);
                zulu = _closure1_slot2;
                mike = _closure1_slot3;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.maxFileSize;
                report = null;
                report = report == tango;
                if(report) { _fun56922_ip = 63; continue _fun56922 }
 58:
                entity = tango.guild_id;
 63:
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'getMaxAttachmentsCount';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'getMaxTotalAttachmentSize';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.MAX_TOTAL_ATTACHMENT_SIZE;
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'shouldReactNativeCompressUploads';
        entity['key'] = oscar;
        report = function() { // Original name: get
            entity = true;
            return entity;
        };
        entity['get'] = report;
        mike[5] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot9 = tango;
    tango = {};
    tango['MESSAGE_ATTACHMENT'] = offset;
    report = 'MESSAGE_ATTACHMENT';
    tango[offset] = report;
    tango['GUILD_PRODUCT_ATTACHMENT'] = verify;
    report = 'GUILD_PRODUCT_ATTACHMENT';
    tango[verify] = report;
    tango['GRAVITY_ATTACHMENT'] = options;
    report = 'GRAVITY_ATTACHMENT';
    tango[options] = report;
    var _closure1_slot10 = tango;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'lib/uploader/UploadTargets.tsx';
    report = oscar.bind(golf)(report);
    zulu['UploadTargets'] = tango;
    mike = function(argFoo) { // Original name: getUploadTarget
        _fun56926: for(var _fun56926_ip = 0; ; ) switch(_fun56926_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot10;
            mike = mike.GUILD_PRODUCT_ATTACHMENT;
            if(!(mike !== zulu)) { _fun56926_ip = 114; continue _fun56926 }
 20:
            mike = _closure1_slot10;
            mike = mike.GRAVITY_ATTACHMENT;
            if(!(mike !== zulu)) { _fun56926_ip = 70; continue _fun56926 }
 34:
            mike = _closure1_slot10;
            mike = mike.MESSAGE_ATTACHMENT;
            mike = _closure1_slot9;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            oscar = zulu;
            mike = new oscar[mike](report);
            mike = mike instanceof Object ? mike : zulu;
            return mike;
 70:
            tango = _closure1_slot1;
            zulu = _closure1_slot3;
            mike = 7;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            oscar = zulu;
            mike = new oscar[mike](report);
            mike = mike instanceof Object ? mike : zulu;
            return mike;
 114:
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            oscar = mike;
            entity = new oscar[entity](report);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    zulu['getUploadTarget'] = mike;
    return entity;
})();