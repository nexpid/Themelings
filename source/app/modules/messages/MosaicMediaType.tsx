// app/modules/messages/MosaicMediaType.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageAttachmentFlags;
    var _closure1_slot2 = tangon;
    tangon = /\.(mp3|m4a|ogg|opus|wav|flac)$/i;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/MosaicMediaType.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = 'IMAGE';
            entity = entity === zuuluu;
            if(entity) { _fun00002_ip = 22; continue _fun00001 }
 14:
            michal = 'VIDEO';
            entity = michal === zuuluu;
 22:
            if(entity) { _fun00002_ip = 35; continue _fun00001 }
 25:
            michal = 'CLIP';
            entity = michal === zuuluu;
 35:
            if(entity) { _fun00002_ip = 46; continue _fun00001 }
 38:
            michal = 'VISUAL_PLACEHOLDER';
            entity = michal === zuuluu;
 46:
            return entity;
        }
    };
    zuuluu['isVisualMedia'] = tangon;
    tangon = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = 'IMAGE';
            entity = entity === zuuluu;
            if(entity) { _fun00004_ip = 22; continue _fun00003 }
 14:
            michal = 'VIDEO';
            entity = michal === zuuluu;
 22:
            if(entity) { _fun00004_ip = 33; continue _fun00003 }
 25:
            michal = 'VISUAL_PLACEHOLDER';
            entity = michal === zuuluu;
 33:
            return entity;
        }
    };
    zuuluu['isGroupableMedia'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getMosaicMediaTypeForAttachment
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            entity = argBar;
            oscard = option.filename;
            zuuluu = option.width;
            michal = option.height;
            if(!entity) { _fun00006_ip = 45; continue _fun00005 }
 25:
            verify = null;
            if(!(verify != zuuluu)) { _fun00006_ip = 45; continue _fun00005 }
 31:
            golfie = 0;
            if(!(zuuluu > golfie)) { _fun00006_ip = 45; continue _fun00005 }
 37:
            if(!(verify != michal)) { _fun00006_ip = 45; continue _fun00005 }
 41:
            if(!(!(michal > golfie))) { _fun00006_ip = 162; continue _fun00005 }
 45:
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00006_ip = 87; continue _fun00005 }
 51:
            michal = _closure1_slot3;
            entity = michal.test;
            entity = entity.bind(michal)(oscard);
            if(!entity) { _fun00006_ip = 87; continue _fun00005 }
 71:
            entity = option.url;
            michal = zuuluu != entity;
            entity = 'AUDIO';
            if(michal) { _fun00006_ip = 157; continue _fun00005 }
 87:
            michal = option.url;
            zuuluu = zuuluu != michal;
            tangon = 'OTHER';
            michal = tangon;
            if(!zuuluu) { _fun00006_ip = 154; continue _fun00005 }
 106:
            offset = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 3;
            report = report[zuuluu];
            zuuluu = undefined;
            report = offset.bind(zuuluu)(report);
            zuuluu = report.isPlaintextPreviewableFile;
            zuuluu = zuuluu.bind(report)(oscard);
            michal = tangon;
            if(!zuuluu) { _fun00006_ip = 154; continue _fun00005 }
 148:
            michal = 'PLAINTEXT_PREVIEW';
 154:
            entity = michal;
 157:
            _fun00006_ip = 343; continue _fun00005;
 162:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            yankee = 1;
            michal = michal[yankee];
            offset = undefined;
            zuuluu = zuuluu.bind(offset)(michal);
            michal = zuuluu.isImageFile;
            zuuluu = michal.bind(zuuluu)(oscard);
            michal = 'IMAGE';
            if(zuuluu) { _fun00006_ip = 340; continue _fun00005 }
 208:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[yankee];
            report = report.bind(offset)(zuuluu);
            zuuluu = report.isVideoFile;
            report = zuuluu.bind(report)(oscard);
            oscard = 'INVALID';
            zuuluu = oscard;
            if(!report) { _fun00006_ip = 337; continue _fun00005 }
 246:
            report = option.proxy_url;
            report = verify != report;
            zuuluu = oscard;
            if(!report) { _fun00006_ip = 337; continue _fun00005 }
 262:
            oscard = _closure1_slot0;
            yankee = _closure1_slot1;
            report = 2;
            report = yankee[report];
            oscard = oscard.bind(offset)(report);
            report = oscard.hasFlag;
            option = option.flags;
            verify = verify != option;
            golfie = 0;
            if(!verify) { _fun00006_ip = 305; continue _fun00005 }
 302:
            golfie = option;
 305:
            tangon = _closure1_slot2;
            tangon = tangon.IS_CLIP;
            report = report.bind(oscard)(golfie, tangon);
            tangon = 'VIDEO';
            if(!report) { _fun00006_ip = 334; continue _fun00005 }
 328:
            tangon = 'CLIP';
 334:
            zuuluu = tangon;
 337:
            michal = zuuluu;
 340:
            entity = michal;
 343:
            return entity;
        }
    };
    zuuluu['getMosaicMediaTypeForAttachment'] = tangon;
    michal = function(argFoo) { // Original name: getMosaicMediaTypeForUnfurledMediaItem
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.contentType;
            report = entity.width;
            michal = entity.height;
            tangon = null;
            if(!(tangon != report)) { _fun00008_ip = 109; continue _fun00007 }
 25:
            entity = 0;
            if(!(report > entity)) { _fun00008_ip = 109; continue _fun00007 }
 31:
            if(!(tangon != michal)) { _fun00008_ip = 109; continue _fun00007 }
 35:
            if(!(michal > entity)) { _fun00008_ip = 109; continue _fun00007 }
 39:
            oscard = _closure1_slot0;
            michal = _closure1_slot1;
            report = 1;
            michal = michal[report];
            tangon = undefined;
            oscard = oscard.bind(tangon)(michal);
            michal = oscard.isImageContentType;
            michal = michal.bind(oscard)(zuuluu);
            if(michal) { _fun00008_ip = 121; continue _fun00007 }
 78:
            michal = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[report];
            michal = michal.bind(tangon)(entity);
            entity = michal.isVideoContentType;
            entity = entity.bind(michal)(zuuluu);
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
    zuuluu['getMosaicMediaTypeForUnfurledMediaItem'] = michal;
    return entity;
})();