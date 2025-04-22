// app/modules/chat_wallpapers/models/ChatWallpaperTypes.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat_wallpapers/models/ChatWallpaperTypes.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: fromServerWallpaper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            michal = entity != zuuluu;
            entity = undefined;
            if(!michal) { _fun00002_ip = 41; continue _fun00001 }
 14:
            michal = {};
            tangon = zuuluu.wallpaper_id;
            michal['wallpaperId'] = tangon;
            zuuluu = zuuluu.setter_id;
            michal['setterId'] = zuuluu;
            entity = michal;
 41:
            return entity;
        }
    };
    zuuluu['fromServerWallpaper'] = tangon;
    michal = function(argFoo) { // Original name: fromServerChatWallpaperMetadata
        michal = argFoo;
        entity = {};
        zuuluu = michal.id;
        entity['id'] = zuuluu;
        zuuluu = michal.label;
        entity['label'] = zuuluu;
        zuuluu = michal.default;
        entity['default'] = zuuluu;
        zuuluu = michal.is_blurred;
        entity['isBlurred'] = zuuluu;
        michal = michal.design_group_id;
        entity['designGroupId'] = michal;
        return entity;
    };
    zuuluu['fromServerChatWallpaperMetadata'] = michal;
    return entity;
})();