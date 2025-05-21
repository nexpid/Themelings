// app/modules/media/MediaTypes.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = offset;
    oscard = function(argFoo) { // Original name: toContentScanMetadata
        michal = argFoo;
        entity = {};
        zuuluu = michal.version;
        entity['version'] = zuuluu;
        michal = michal.flags;
        entity['flags'] = michal;
        return entity;
    };
    var _closure1_slot6 = oscard;
    tangon = function(argFoo) { // Original name: messageAttachmentToUnfurledMediaItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 1;
            entity = entity[verify];
            zuuluu = undefined;
            offset = michal.bind(zuuluu)(entity);
            option = offset.hasFlag;
            entity = oscard.flags;
            golfie = null;
            yankee = golfie != entity;
            report = 0;
            if(!yankee) { _fun00002_ip = 53; continue _fun00001 }
 50:
            report = entity;
 53:
            entity = _closure1_slot3;
            entity = entity.CONTAINS_EXPLICIT_MEDIA;
            entity = option.bind(offset)(report, entity);
            report = 0;
            if(!entity) { _fun00002_ip = 87; continue _fun00001 }
 74:
            entity = _closure1_slot4;
            entity = entity.EXPLICIT;
            report = entity | 0;
 87:
            option = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[verify];
            offset = option.bind(zuuluu)(entity);
            verify = offset.hasFlag;
            entity = oscard.flags;
            yankee = golfie != entity;
            option = 0;
            if(!yankee) { _fun00002_ip = 127; continue _fun00001 }
 124:
            option = entity;
 127:
            entity = _closure1_slot3;
            entity = entity.IS_ANIMATED;
            entity = verify.bind(offset)(option, entity);
            michal = 0;
            if(!entity) { _fun00002_ip = 161; continue _fun00001 }
 148:
            entity = _closure1_slot5;
            entity = entity.IS_ANIMATED;
            michal = entity | 0;
 161:
            entity = {};
            option = oscard.url;
            entity['url'] = option;
            option = oscard.proxy_url;
            entity['proxyUrl'] = option;
            option = oscard.height;
            entity['height'] = option;
            option = oscard.width;
            entity['width'] = option;
            option = oscard.content_type;
            entity['contentType'] = option;
            option = oscard.placeholder;
            entity['placeholder'] = option;
            option = oscard.placeholder_version;
            entity['placeholderVersion'] = option;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 2;
            tangon = verify[tangon];
            tangon = option.bind(zuuluu)(tangon);
            tangon = tangon.UnfurledMediaLoadingState;
            tangon = tangon.LOADED_SUCCESS;
            entity['loadingState'] = tangon;
            tangon = oscard.content_scan_version;
            tangon = golfie == tangon;
            zuuluu = undefined;
            if(tangon) { _fun00002_ip = 306; continue _fun00001 }
 286:
            tangon = {};
            oscard = oscard.content_scan_version;
            tangon['version'] = oscard;
            tangon['flags'] = report;
            zuuluu = tangon;
 306:
            entity['contentScanMetadata'] = zuuluu;
            entity['flags'] = michal;
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = function(argFoo) { // Original name: getMessageAttachmentMediaItemType
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 3;
            entity = entity[oscard];
            report = undefined;
            golfie = tangon.bind(report)(entity);
            tangon = golfie.isImageFile;
            entity = michal.filename;
            tangon = tangon.bind(golfie)(entity);
            entity = 'IMAGE';
            if(tangon) { _fun00004_ip = 100; continue _fun00003 }
 52:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.isVideoFile;
            michal = michal.filename;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = 'INVALID';
            if(!zuuluu) { _fun00004_ip = 97; continue _fun00003 }
 93:
            michal = 'VIDEO';
 97:
            entity = michal;
 100:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, report);
    entity = 0;
    report = offset[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    report = report.MessageAttachmentFlags;
    var _closure1_slot3 = report;
    golfie = {};
    yankee = 1;
    golfie['EXPLICIT'] = yankee;
    report = 'EXPLICIT';
    golfie[yankee] = report;
    var _closure1_slot4 = golfie;
    report = {};
    report['IS_ANIMATED'] = yankee;
    option = 'IS_ANIMATED';
    report[yankee] = option;
    var _closure1_slot5 = report;
    option = 5;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/media/MediaTypes.tsx';
    option = verify.bind(offset)(option);
    zuuluu['ContentScanFlags'] = golfie;
    zuuluu['toContentScanMetadata'] = oscard;
    zuuluu['UnfurledMediaItemFlags'] = report;
    report = function(argFoo) { // Original name: toUnfurledMediaItem
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            michal = zuuluu.url;
            entity['url'] = michal;
            michal = zuuluu.proxy_url;
            entity['proxyUrl'] = michal;
            michal = zuuluu.height;
            entity['height'] = michal;
            michal = zuuluu.width;
            entity['width'] = michal;
            michal = zuuluu.placeholder;
            entity['placeholder'] = michal;
            michal = zuuluu.placeholder_version;
            entity['placeholderVersion'] = michal;
            michal = zuuluu.content_type;
            entity['contentType'] = michal;
            michal = zuuluu.loading_state;
            entity['loadingState'] = michal;
            tangon = zuuluu.content_scan_metadata;
            michal = null;
            report = michal != tangon;
            golfie = undefined;
            tangon = undefined;
            if(!report) { _fun00006_ip = 126; continue _fun00005 }
 108:
            oscard = _closure1_slot6;
            report = zuuluu.content_scan_metadata;
            tangon = oscard.bind(golfie)(report);
 126:
            entity['contentScanMetadata'] = tangon;
            zuuluu = zuuluu.flags;
            tangon = michal != zuuluu;
            michal = 0;
            if(!tangon) { _fun00006_ip = 148; continue _fun00005 }
 145:
            michal = zuuluu;
 148:
            entity['flags'] = michal;
            return entity;
        }
    };
    zuuluu['toUnfurledMediaItem'] = report;
    zuuluu['messageAttachmentToUnfurledMediaItem'] = tangon;
    tangon = function(argFoo) { // Original name: getUnfurledMediaItemType
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            report = 3;
            entity = entity[report];
            option = undefined;
            tangon = michal.bind(option)(entity);
            michal = tangon.isImageContentType;
            entity = zuuluu.contentType;
            michal = michal.bind(tangon)(entity);
            entity = 'IMAGE';
            if(michal) { _fun00008_ip = 168; continue _fun00007 }
 52:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            report = tangon.bind(option)(michal);
            tangon = report.isVideoContentType;
            michal = zuuluu.contentType;
            report = tangon.bind(report)(michal);
            tangon = 'INVALID';
            michal = tangon;
            if(!report) { _fun00008_ip = 165; continue _fun00007 }
 96:
            golfie = zuuluu.proxyUrl;
            report = null;
            golfie = report != golfie;
            michal = tangon;
            if(!golfie) { _fun00008_ip = 165; continue _fun00007 }
 114:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            oscard = 4;
            oscard = verify[oscard];
            golfie = golfie.bind(option)(oscard);
            oscard = golfie.toURLSafe;
            zuuluu = zuuluu.proxyUrl;
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = report != zuuluu;
            michal = tangon;
            if(!zuuluu) { _fun00008_ip = 165; continue _fun00007 }
 161:
            michal = 'VIDEO';
 165:
            entity = michal;
 168:
            return entity;
        }
    };
    zuuluu['getUnfurledMediaItemType'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: messageAttachmentToMediaItem
        tangon = argFoo;
        entity = {};
        report = _closure1_slot7;
        zuuluu = undefined;
        oscard = report.bind(zuuluu)(tangon);
        golfie = entity;
        report = copyDataProperties(golfie, oscard);
        michal = _closure1_slot8;
        zuuluu = michal.bind(zuuluu)(tangon);
        michal = 'type';
        entity[michal] = zuuluu;
        zuuluu = tangon.description;
        michal = 'alt';
        entity[michal] = zuuluu;
        zuuluu = {};
        michal = argBar;
        zuuluu['message'] = michal;
        michal = {};
        report = 'attachment';
        michal['type'] = report;
        report = tangon.id;
        michal['attachmentId'] = report;
        report = tangon.filename;
        michal['filename'] = report;
        report = tangon.title;
        michal['title'] = report;
        tangon = tangon.size;
        michal['size'] = tangon;
        zuuluu['identifier'] = michal;
        michal = 'sourceMetadata';
        entity[michal] = zuuluu;
        return entity;
    };
    zuuluu['messageAttachmentToMediaItem'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: embedMediaToMediaItem
        michal = argFoo;
        entity = {};
        zuuluu = argBaz;
        entity['type'] = zuuluu;
        zuuluu = michal.url;
        entity['url'] = zuuluu;
        zuuluu = michal.proxyURL;
        entity['proxyUrl'] = zuuluu;
        zuuluu = michal.width;
        entity['width'] = zuuluu;
        zuuluu = michal.height;
        entity['height'] = zuuluu;
        zuuluu = michal.placeholder;
        entity['placeholder'] = zuuluu;
        michal = michal.placeholderVersion;
        entity['placeholderVersion'] = michal;
        michal = argBar;
        entity['sourceMetadata'] = michal;
        return entity;
    };
    zuuluu['embedMediaToMediaItem'] = michal;
    return entity;
})();