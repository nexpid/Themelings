// app/modules/media_panel/native/MediaPlaybackPanelContainer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot3 = tangon;
    tangon = golfie.memo;
    michal = function() { // Original name: MediaPlaybackPanelContainer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 2;
            entity = tangon[entity];
            report = undefined;
            tangon = zuuluu.bind(report)(entity);
            zuuluu = tangon.useMediaPlayerManagerStore;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    entity = michal.showPip;
                    zuuluu = !entity;
                    if(zuuluu) { _fun00004_ip = 24; continue _fun00003 }
 15:
                    entity = michal.canAccessMedia;
                    zuuluu = !entity;
 24:
                    if(zuuluu) { _fun00004_ip = 39; continue _fun00003 }
 27:
                    tangon = michal.activeMediaPlayerSource;
                    entity = null;
                    zuuluu = entity == tangon;
 39:
                    entity = !zuuluu;
                    if(zuuluu) { _fun00004_ip = 188; continue _fun00003 }
 48:
                    option = michal.mediaSourceMessage;
                    michal = michal.activeMediaPlayerSource;
                    zuuluu = null;
                    tangon = zuuluu == michal;
                    golfie = undefined;
                    if(tangon) { _fun00004_ip = 77; continue _fun00003 }
 71:
                    golfie = michal.attachmentIndex;
 77:
                    tangon = zuuluu == option;
                    michal = false;
                    if(tangon) { _fun00004_ip = 185; continue _fun00003 }
 86:
                    tangon = zuuluu == golfie;
                    michal = false;
                    if(tangon) { _fun00004_ip = 185; continue _fun00003 }
 95:
                    tangon = zuuluu == option;
                    report = undefined;
                    if(tangon) { _fun00004_ip = 133; continue _fun00003 }
 104:
                    tangon = option.getContentMessage;
                    tangon = tangon.bind(option)();
                    option = zuuluu == tangon;
                    report = undefined;
                    if(option) { _fun00004_ip = 133; continue _fun00003 }
 123:
                    tangon = tangon.attachments;
                    report = tangon[golfie];
 133:
                    golfie = zuuluu == report;
                    tangon = undefined;
                    if(golfie) { _fun00004_ip = 172; continue _fun00003 }
 142:
                    golfie = report.content_type;
                    report = zuuluu == golfie;
                    tangon = undefined;
                    if(report) { _fun00004_ip = 172; continue _fun00003 }
 157:
                    oscard = golfie.startsWith;
                    report = 'audio';
                    tangon = oscard.bind(golfie)(report);
 172:
                    zuuluu = zuuluu != tangon;
                    if(!zuuluu) { _fun00004_ip = 182; continue _fun00003 }
 179:
                    zuuluu = tangon;
 182:
                    michal = zuuluu;
 185:
                    entity = michal;
 188:
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = null;
            if(!zuuluu) { _fun00002_ip = 106; continue _fun00001 }
 50:
            tangon = _closure1_slot3;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            michal = 3;
            michal = option[michal];
            zuuluu = golfie.bind(report)(michal);
            michal = {};
            oscard = 4;
            oscard = option[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 106:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_panel/native/MediaPlaybackPanelContainer.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();