// app/modules/media_channel/MediaPostThumbnailUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_channel/MediaPostThumbnailUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = 4;
    zuuluu['MAX_THUMBNAIL_COUNT'] = tangon;
    tangon = function(argFoo) { // Original name: getEmbedPreviewImageUrl
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00002_ip = 29; continue _fun00001 }
 9:
            michal = entity.thumbnail;
            tangon = entity.image;
            if(!(zuuluu == michal)) { _fun00002_ip = 50; continue _fun00001 }
 25:
            if(!(zuuluu == tangon)) { _fun00002_ip = 33; continue _fun00001 }
 29:
            entity = undefined;
            return entity;
 33:
            entity = tangon.proxy_url;
            if(!(zuuluu == entity)) { _fun00002_ip = 48; continue _fun00001 }
 43:
            entity = tangon.url;
 48:
            return entity;
 50:
            entity = michal.proxy_url;
            if(!(zuuluu == entity)) { _fun00002_ip = 65; continue _fun00001 }
 60:
            entity = michal.url;
 65:
            return entity;
        }
    };
    zuuluu['getEmbedPreviewImageUrl'] = tangon;
    tangon = function(argFoo) { // Original name: getBackgroundImageUrl
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            oscard = _closure1_slot0;
            michal = _closure1_slot1;
            tangon = 0;
            michal = michal[tangon];
            zuuluu = undefined;
            oscard = oscard.bind(zuuluu)(michal);
            michal = oscard.isAnimatedImageUrl;
            michal = michal.bind(oscard)(report);
            if(michal) { _fun00004_ip = 75; continue _fun00003 }
 41:
            michal = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[tangon];
            michal = michal.bind(zuuluu)(entity);
            entity = michal.isVideoUrl;
            michal = entity.bind(michal)(report);
            entity = report;
            if(!michal) { _fun00004_ip = 104; continue _fun00003 }
 75:
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '?format=webp';
            entity = tangon.bind(zuuluu)(report, michal);
 104:
            return entity;
        }
    };
    zuuluu['getBackgroundImageUrl'] = tangon;
    michal = function(argFoo) { // Original name: getThumbnailImage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = null;
            if(!(michal == entity)) { _fun00006_ip = 13; continue _fun00005 }
 9:
            zuuluu = undefined;
            return zuuluu;
 13:
            tangon = entity.url;
            oscard = entity.proxy_url;
            entity = tangon;
            if(!(michal != tangon)) { _fun00006_ip = 111; continue _fun00005 }
 31:
            entity = tangon;
            if(!(michal != oscard)) { _fun00006_ip = 111; continue _fun00005 }
 38:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 0;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.isVideoUrl;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = oscard;
            if(!zuuluu) { _fun00006_ip = 108; continue _fun00005 }
 79:
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            report = zuuluu.concat;
            tangon = '';
            zuuluu = '?format=webp';
            michal = report.bind(tangon)(oscard, zuuluu);
 108:
            entity = michal;
 111:
            return entity;
        }
    };
    zuuluu['getThumbnailImage'] = michal;
    return entity;
})();