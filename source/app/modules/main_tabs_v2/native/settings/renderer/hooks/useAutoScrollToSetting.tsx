// app/modules/main_tabs_v2/native/settings/renderer/hooks/useAutoScrollToSetting.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.clearSelectedSearchResult;
    var _closure1_slot3 = golfie;
    tangon = tangon.useSelectedSearchResult;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RendererType;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/renderer/hooks/useAutoScrollToSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useAutoScrollToSearchResultSetting
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            offset = argBar;
            var _closure2_slot0 = option;
            var _closure2_slot1 = offset;
            tangon = _closure1_slot4;
            entity = undefined;
            oscard = tangon.bind(entity)();
            var _closure2_slot2 = oscard;
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 5;
            tangon = golfie[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.useNavigation;
            golfie = tangon.bind(report)();
            var _closure2_slot3 = golfie;
            tangon = null;
            tangon = tangon == oscard;
            verify = false;
            if(tangon) { _fun00002_ip = 180; continue _fun00001 }
 78:
            report = _closure1_slot0;
            romeon = _closure1_slot1;
            tangon = 3;
            tangon = romeon[tangon];
            tangon = report.bind(entity)(tangon);
            tangon = tangon.SETTING_RENDERER_CONFIG;
            tangon = tangon[oscard];
            report = tangon.type;
            tangon = _closure1_slot5;
            tangon = tangon.ROUTE;
            verify = false;
            if(!(report !== tangon)) { _fun00002_ip = 180; continue _fun00001 }
 129:
            report = _closure1_slot0;
            yankee = _closure1_slot1;
            tangon = 4;
            tangon = yankee[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.getInitialScrollIndex;
            yankee = tangon.bind(report)(oscard, offset);
            tangon = 0;
            tangon = tangon !== yankee;
            if(!tangon) { _fun00002_ip = 177; continue _fun00001 }
 170:
            report = 1;
            tangon = report !== yankee;
 177:
            verify = tangon;
 180:
            var _closure2_slot4 = verify;
            report = _closure1_slot2;
            tangon = report.useEffect;
            zuuluu = new Array(5);
            zuuluu[0] = offset;
            zuuluu[1] = verify;
            zuuluu[2] = option;
            zuuluu[3] = golfie;
            zuuluu[4] = oscard;
            michal = function() {
                report = _closure2_slot3;
                tangon = report.addListener;
                zuuluu = 'transitionEnd';
                michal = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = _closure2_slot4;
                        if(!entity) { _fun00004_ip = 124; continue _fun00003 }
 10:
                        tangon = _closure1_slot0;
                        michal = _closure1_slot1;
                        entity = 4;
                        michal = michal[entity];
                        entity = undefined;
                        oscard = tangon.bind(entity)(michal);
                        report = oscard.getInitialScrollIndex;
                        tangon = _closure2_slot2;
                        michal = _closure2_slot1;
                        report = report.bind(oscard)(tangon, michal);
                        oscard = null;
                        if(!(oscard != report)) { _fun00004_ip = 128; continue _fun00003 }
 61:
                        michal = _closure2_slot0;
                        michal = oscard == michal;
                        tangon = undefined;
                        if(michal) { _fun00004_ip = 90; continue _fun00003 }
 74:
                        zuuluu = _closure2_slot0;
                        zuuluu = zuuluu.current;
                        michal = oscard == zuuluu;
                        tangon = zuuluu;
 90:
                        if(michal) { _fun00004_ip = 124; continue _fun00003 }
 93:
                        zuuluu = tangon.scrollToIndex;
                        michal = {'index': null, 'animated': false, 'viewOffset': 300};
                        michal['index'] = report;
                        michal = zuuluu.bind(tangon)(michal);
 124:
                        michal = undefined;
                        return michal;
 128:
                        return entity;
                    }
                };
                michal = tangon.bind(report)(zuuluu, michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    michal = _closure3_slot0;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    michal = _closure1_slot3;
                    michal = michal.bind(entity)();
                    return entity;
                };
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['useAutoScrollToSearchResultSetting'] = michal;
    return entity;
})();