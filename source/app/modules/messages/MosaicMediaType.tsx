// app/modules/messages/MosaicMediaType.tsx
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
    tango = tango.MessageAttachmentFlags;
    var _closure1_slot2 = tango;
    tango = /\.(mp3|m4a|ogg|opus|wav|flac)$/i;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/MosaicMediaType.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            entity = 'IMAGE';
            entity = entity === zulu;
            if(entity) { _fun00002_ip = 22; continue _fun00001 }
 14:
            mike = 'VIDEO';
            entity = mike === zulu;
 22:
            if(entity) { _fun00002_ip = 35; continue _fun00001 }
 25:
            mike = 'CLIP';
            entity = mike === zulu;
 35:
            if(entity) { _fun00002_ip = 46; continue _fun00001 }
 38:
            mike = 'VISUAL_PLACEHOLDER';
            entity = mike === zulu;
 46:
            return entity;
        }
    };
    zulu['isVisualMedia'] = tango;
    tango = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            entity = 'IMAGE';
            entity = entity === zulu;
            if(entity) { _fun00004_ip = 22; continue _fun00003 }
 14:
            mike = 'VIDEO';
            entity = mike === zulu;
 22:
            if(entity) { _fun00004_ip = 33; continue _fun00003 }
 25:
            mike = 'VISUAL_PLACEHOLDER';
            entity = mike === zulu;
 33:
            return entity;
        }
    };
    zulu['isGroupableMedia'] = tango;
    tango = function(argFoo, argBar) { // Original name: getMosaicMediaTypeForAttachment
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            options = argFoo;
            entity = argBar;
            oscar = options.filename;
            zulu = options.width;
            mike = options.height;
            if(!entity) { _fun00006_ip = 45; continue _fun00005 }
 25:
            verify = null;
            if(!(verify != zulu)) { _fun00006_ip = 45; continue _fun00005 }
 31:
            golf = 0;
            if(!(zulu > golf)) { _fun00006_ip = 45; continue _fun00005 }
 37:
            if(!(verify != mike)) { _fun00006_ip = 45; continue _fun00005 }
 41:
            if(!(!(mike > golf))) { _fun00006_ip = 162; continue _fun00005 }
 45:
            zulu = null;
            if(!(zulu != entity)) { _fun00006_ip = 87; continue _fun00005 }
 51:
            mike = _closure1_slot3;
            entity = mike.test;
            entity = entity.bind(mike)(oscar);
            if(!entity) { _fun00006_ip = 87; continue _fun00005 }
 71:
            entity = options.url;
            mike = zulu != entity;
            entity = 'AUDIO';
            if(mike) { _fun00006_ip = 157; continue _fun00005 }
 87:
            mike = options.url;
            zulu = zulu != mike;
            tango = 'OTHER';
            mike = tango;
            if(!zulu) { _fun00006_ip = 154; continue _fun00005 }
 106:
            offset = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 3;
            report = report[zulu];
            zulu = undefined;
            report = offset.bind(zulu)(report);
            zulu = report.isPlaintextPreviewableFile;
            zulu = zulu.bind(report)(oscar);
            mike = tango;
            if(!zulu) { _fun00006_ip = 154; continue _fun00005 }
 148:
            mike = 'PLAINTEXT_PREVIEW';
 154:
            entity = mike;
 157:
            _fun00006_ip = 343; continue _fun00005;
 162:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            yankee = 1;
            mike = mike[yankee];
            offset = undefined;
            zulu = zulu.bind(offset)(mike);
            mike = zulu.isImageFile;
            zulu = mike.bind(zulu)(oscar);
            mike = 'IMAGE';
            if(zulu) { _fun00006_ip = 340; continue _fun00005 }
 208:
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[yankee];
            report = report.bind(offset)(zulu);
            zulu = report.isVideoFile;
            report = zulu.bind(report)(oscar);
            oscar = 'INVALID';
            zulu = oscar;
            if(!report) { _fun00006_ip = 337; continue _fun00005 }
 246:
            report = options.proxy_url;
            report = verify != report;
            zulu = oscar;
            if(!report) { _fun00006_ip = 337; continue _fun00005 }
 262:
            oscar = _closure1_slot0;
            yankee = _closure1_slot1;
            report = 2;
            report = yankee[report];
            oscar = oscar.bind(offset)(report);
            report = oscar.hasFlag;
            options = options.flags;
            verify = verify != options;
            golf = 0;
            if(!verify) { _fun00006_ip = 305; continue _fun00005 }
 302:
            golf = options;
 305:
            tango = _closure1_slot2;
            tango = tango.IS_CLIP;
            report = report.bind(oscar)(golf, tango);
            tango = 'VIDEO';
            if(!report) { _fun00006_ip = 334; continue _fun00005 }
 328:
            tango = 'CLIP';
 334:
            zulu = tango;
 337:
            mike = zulu;
 340:
            entity = mike;
 343:
            return entity;
        }
    };
    zulu['getMosaicMediaTypeForAttachment'] = tango;
    mike = function(argFoo) { // Original name: getMosaicMediaTypeForUnfurledMediaItem
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zulu = entity.contentType;
            report = entity.width;
            mike = entity.height;
            tango = null;
            if(!(tango != report)) { _fun00008_ip = 109; continue _fun00007 }
 25:
            entity = 0;
            if(!(report > entity)) { _fun00008_ip = 109; continue _fun00007 }
 31:
            if(!(tango != mike)) { _fun00008_ip = 109; continue _fun00007 }
 35:
            if(!(mike > entity)) { _fun00008_ip = 109; continue _fun00007 }
 39:
            oscar = _closure1_slot0;
            mike = _closure1_slot1;
            report = 1;
            mike = mike[report];
            tango = undefined;
            oscar = oscar.bind(tango)(mike);
            mike = oscar.isImageContentType;
            mike = mike.bind(oscar)(zulu);
            if(mike) { _fun00008_ip = 121; continue _fun00007 }
 78:
            mike = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            mike = mike.bind(tango)(entity);
            entity = mike.isVideoContentType;
            entity = entity.bind(mike)(zulu);
            if(entity) { _fun00008_ip = 115; continue _fun00007 }
 109:
            entity = 'VISUAL_PLACEHOLDER';
            return entity;
 115:
            entity = 'VIDEO';
            return entity;
 121:
            entity = 'IMAGE';
            return entity;
        }
    };
    zulu['getMosaicMediaTypeForUnfurledMediaItem'] = mike;
    return entity;
})();