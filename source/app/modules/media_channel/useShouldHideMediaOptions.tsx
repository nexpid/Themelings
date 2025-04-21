// app/modules/media_channel/useShouldHideMediaOptions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelFlags;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_channel/useShouldHideMediaOptions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useShouldHideMediaOptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 2;
            tangon = tangon[michal];
            michal = undefined;
            oscard = report.bind(michal)(tangon);
            report = oscard.useStateFromStores;
            golfie = _closure1_slot2;
            tangon = new Array(1);
            tangon[0] = golfie;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot2;
                    zuuluu = tangon.getChannel;
                    entity = _closure2_slot0;
                    report = zuuluu.bind(tangon)(entity);
                    oscard = null;
                    zuuluu = oscard == report;
                    entity = undefined;
                    if(zuuluu) { _fun00004_ip = 41; continue _fun00003 }
 35:
                    entity = report.parent_id;
 41:
                    zuuluu = oscard != entity;
                    entity = null;
                    if(!zuuluu) { _fun00004_ip = 94; continue _fun00003 }
 50:
                    zuuluu = report.isForumPost;
                    zuuluu = zuuluu.bind(report)();
                    entity = null;
                    if(!zuuluu) { _fun00004_ip = 94; continue _fun00003 }
 65:
                    zuuluu = _closure1_slot2;
                    michal = zuuluu.getChannel;
                    oscard = oscard == report;
                    tangon = undefined;
                    if(oscard) { _fun00004_ip = 89; continue _fun00003 }
 83:
                    tangon = report.parent_id;
 89:
                    entity = michal.bind(zuuluu)(tangon);
 94:
                    return entity;
                }
            };
            tangon = report.bind(oscard)(tangon, zuuluu);
            zuuluu = null;
            zuuluu = zuuluu == tangon;
            if(zuuluu) { _fun00002_ip = 94; continue _fun00001 }
 73:
            zuuluu = tangon.hasFlag;
            entity = _closure1_slot3;
            entity = entity.HIDE_MEDIA_DOWNLOAD_OPTIONS;
            michal = zuuluu.bind(tangon)(entity);
 94:
            entity = true;
            entity = entity === michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();