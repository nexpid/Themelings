// app/modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: getOptionFromSettingsFiltered
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argBar;
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 3;
            zuuluu = entity[oscard];
            report = undefined;
            offset = tangon.bind(report)(zuuluu);
            verify = offset.getVideoBackgroundOptionFromProto;
            option = golfie.id;
            zuuluu = argFoo;
            zuuluu = verify.bind(offset)(zuuluu, option);
            entity = entity[oscard];
            tangon = tangon.bind(report)(entity);
            entity = tangon.isCustomBackgroundOption;
            entity = entity.bind(tangon)(zuuluu);
            if(!entity) { _fun00002_ip = 107; continue _fun00001 }
 71:
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            entity = 4;
            entity = option[entity];
            tangon = tangon.bind(report)(entity);
            entity = tangon.canUseCustomBackgrounds;
            tangon = entity.bind(tangon)(golfie);
            entity = null;
            if(!tangon) { _fun00002_ip = 157; continue _fun00001 }
 107:
            golfie = 'number';
            tangon = typeof zuuluu;
            if(!(golfie === tangon)) { _fun00002_ip = 151; continue _fun00001 }
 118:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            tangon = tangon.bind(report)(michal);
            michal = tangon.isDefaultBackgroundOption;
            tangon = michal.bind(tangon)(zuuluu);
            michal = null;
            if(!tangon) { _fun00002_ip = 154; continue _fun00001 }
 151:
            michal = zuuluu;
 154:
            entity = michal;
 157:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getLastUsedVideoBackgroundOption
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot6;
            entity = _closure1_slot4;
            entity = entity.settings;
            entity = entity.voiceAndVideo;
            michal = null;
            report = michal == entity;
            zuuluu = undefined;
            michal = undefined;
            if(report) { _fun00004_ip = 42; continue _fun00003 }
 36:
            michal = entity.videoBackgroundFilterDesktop;
 42:
            entity = argFoo;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    zuuluu['getLastUsedVideoBackgroundOption'] = tangon;
    michal = function() { // Original name: useLastUsedVideoBackgroundOption
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 5;
            zuuluu = golfie[tangon];
            oscard = undefined;
            offset = report.bind(oscard)(zuuluu);
            verify = offset.useStateFromStores;
            zuuluu = _closure1_slot4;
            option = new Array(1);
            option[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot4;
                entity = entity.settings;
                return entity;
            };
            zuuluu = verify.bind(offset)(option, zuuluu);
            tangon = golfie[tangon];
            option = report.bind(oscard)(tangon);
            golfie = option.useStateFromStores;
            tangon = _closure1_slot5;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            report = golfie.bind(option)(report, tangon);
            var _closure2_slot0 = report;
            zuuluu = zuuluu.voiceAndVideo;
            tangon = null;
            tangon = tangon == zuuluu;
            if(tangon) { _fun00006_ip = 117; continue _fun00005 }
 111:
            oscard = zuuluu.videoBackgroundFilterDesktop;
 117:
            var _closure2_slot1 = oscard;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(2);
            michal[0] = oscard;
            michal[1] = report;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    if(zuuluu) { _fun00008_ip = 39; continue _fun00007 }
 16:
                    report = _closure1_slot6;
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu);
 39:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useLastUsedVideoBackgroundOption'] = michal;
    return entity;
})();