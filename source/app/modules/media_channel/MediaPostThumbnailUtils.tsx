// app/modules/media_channel/MediaPostThumbnailUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_channel/MediaPostThumbnailUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = 4;
    zulu['MAX_THUMBNAIL_COUNT'] = tango;
    tango = function(argFoo) { // Original name: getEmbedPreviewImageUrl
        _fun54420: for(var _fun54420_ip = 0; ; ) switch(_fun54420_ip) {
 0:
            entity = argFoo;
            zulu = null;
            if(!(zulu != entity)) { _fun54420_ip = 29; continue _fun54420 }
 9:
            mike = entity.thumbnail;
            tango = entity.image;
            if(!(zulu == mike)) { _fun54420_ip = 50; continue _fun54420 }
 25:
            if(!(zulu == tango)) { _fun54420_ip = 33; continue _fun54420 }
 29:
            entity = undefined;
            return entity;
 33:
            entity = tango.proxy_url;
            if(!(zulu == entity)) { _fun54420_ip = 48; continue _fun54420 }
 43:
            entity = tango.url;
 48:
            return entity;
 50:
            entity = mike.proxy_url;
            if(!(zulu == entity)) { _fun54420_ip = 65; continue _fun54420 }
 60:
            entity = mike.url;
 65:
            return entity;
        }
    };
    zulu['getEmbedPreviewImageUrl'] = tango;
    tango = function(argFoo) { // Original name: getBackgroundImageUrl
        _fun54421: for(var _fun54421_ip = 0; ; ) switch(_fun54421_ip) {
 0:
            report = argFoo;
            oscar = _closure1_slot0;
            mike = _closure1_slot1;
            tango = 0;
            mike = mike[tango];
            zulu = undefined;
            oscar = oscar.bind(zulu)(mike);
            mike = oscar.isAnimatedImageUrl;
            mike = mike.bind(oscar)(report);
            if(mike) { _fun54421_ip = 75; continue _fun54421 }
 41:
            mike = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[tango];
            mike = mike.bind(zulu)(entity);
            entity = mike.isVideoUrl;
            mike = entity.bind(mike)(report);
            entity = report;
            if(!mike) { _fun54421_ip = 104; continue _fun54421 }
 75:
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = '?format=webp';
            entity = tango.bind(zulu)(report, mike);
 104:
            return entity;
        }
    };
    zulu['getBackgroundImageUrl'] = tango;
    mike = function(argFoo) { // Original name: getThumbnailImage
        _fun54422: for(var _fun54422_ip = 0; ; ) switch(_fun54422_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike == entity)) { _fun54422_ip = 13; continue _fun54422 }
 9:
            zulu = undefined;
            return zulu;
 13:
            tango = entity.url;
            oscar = entity.proxy_url;
            entity = tango;
            if(!(mike != tango)) { _fun54422_ip = 111; continue _fun54422 }
 31:
            entity = tango;
            if(!(mike != oscar)) { _fun54422_ip = 111; continue _fun54422 }
 38:
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 0;
            zulu = zulu[mike];
            mike = undefined;
            zulu = report.bind(mike)(zulu);
            mike = zulu.isVideoUrl;
            zulu = mike.bind(zulu)(tango);
            mike = oscar;
            if(!zulu) { _fun54422_ip = 108; continue _fun54422 }
 79:
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            tango = '';
            zulu = '?format=webp';
            mike = report.bind(tango)(oscar, zulu);
 108:
            entity = mike;
 111:
            return entity;
        }
    };
    zulu['getThumbnailImage'] = mike;
    return entity;
})();