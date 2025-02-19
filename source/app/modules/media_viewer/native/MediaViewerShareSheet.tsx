// app/modules/media_viewer/native/MediaViewerShareSheet.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    golfie = tangon.AnalyticEvents;
    var _closure1_slot3 = golfie;
    tangon = tangon.AnalyticsSections;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_viewer/native/MediaViewerShareSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: showShareActionSheetForSource
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.videoURI;
            michal = null;
            if(!(michal == zuuluu)) { _fun00002_ip = 22; continue _fun00001 }
 15:
            zuuluu = entity.uri;
            _fun00002_ip = 28; continue _fun00001;
 22:
            zuuluu = entity.videoURI;
 28:
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            entity = 1;
            tangon = report[entity];
            entity = undefined;
            tangon = golfie.bind(entity)(tangon);
            oscard = tangon.useMediaViewerSessionManager;
            tangon = oscard.getState;
            oscard = tangon.bind(oscard)();
            tangon = 2;
            tangon = report[tangon];
            option = golfie.bind(entity)(tangon);
            golfie = option.showShareActionSheet;
            tangon = {};
            tangon['url'] = zuuluu;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.MEDIA_VIEWER;
            zuuluu = golfie.bind(option)(tangon, zuuluu);
            tangon = _closure1_slot1;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot3;
            zuuluu = michal.MEDIA_VIEWER_SHARE_BUTTON_TAPPED;
            michal = {};
            golfie = oscard.guildId;
            michal['guild_id'] = golfie;
            golfie = oscard.channelId;
            michal['channel_id'] = golfie;
            oscard = oscard.channelType;
            michal['channel_type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();