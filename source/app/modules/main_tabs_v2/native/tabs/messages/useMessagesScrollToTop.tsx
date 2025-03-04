// app/modules/main_tabs_v2/native/tabs/messages/useMessagesScrollToTop.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/tabs/messages/useMessagesScrollToTop.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useMessagesScrollToTop
        entity = argFoo;
        golfie = entity.listRef;
        var _closure2_slot0 = golfie;
        oscard = entity.listRefHappeningNow;
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot3;
        report = tangon.useMemo;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            entity = {};
            michal = -1;
            entity['scrollToTopTimeout'] = michal;
            michal = function() { // Original name: scrollToTop
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = this;
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    entity = 2;
                    tangon = golfie[entity];
                    entity = undefined;
                    report = report.bind(entity)(tangon);
                    tangon = report.coerceGuildsRoute;
                    oscard = _closure1_slot1;
                    michal = 3;
                    michal = golfie[michal];
                    michal = oscard.bind(entity)(michal);
                    michal = michal.bind(entity)();
                    tangon = tangon.bind(report)(michal);
                    michal = null;
                    if(!(michal != tangon)) { _fun00002_ip = 143; continue _fun00001 }
 65:
                    tangon = zuuluu.scrollToTopTimeout;
                    michal = -1;
                    if(!(michal !== tangon)) { _fun00002_ip = 108; continue _fun00001 }
 81:
                    tangon = global;
                    report = tangon.clearTimeout;
                    tangon = zuuluu.scrollToTopTimeout;
                    tangon = report.bind(entity)(tangon);
                    zuuluu['scrollToTopTimeout'] = michal;
                    _fun00002_ip = 143; continue _fun00001;
 108:
                    michal = global;
                    report = michal.setTimeout;
                    tangon = function() {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            entity = _closure2_slot0;
                            michal = null;
                            tangon = michal == entity;
                            entity = undefined;
                            oscard = undefined;
                            if(tangon) { _fun00004_ip = 36; continue _fun00003 }
 20:
                            report = _closure2_slot0;
                            report = report.current;
                            tangon = michal == report;
                            oscard = report;
 36:
                            if(tangon) { _fun00004_ip = 85; continue _fun00003 }
 39:
                            report = oscard.scrollToLocation;
                            tangon = {'section': 0, 'item': 0};
                            golfie = _closure1_slot4;
                            golfie = golfie.useReducedMotion;
                            golfie = !golfie;
                            tangon['animated'] = golfie;
                            tangon = report.bind(oscard)(tangon);
 85:
                            zuuluu = _closure2_slot1;
                            tangon = zuuluu.current;
                            if(!(michal != tangon)) { _fun00004_ip = 139; continue _fun00003 }
 98:
                            zuuluu = tangon.scrollToOffset;
                            michal = {};
                            report = 0;
                            michal['offset'] = report;
                            report = _closure1_slot4;
                            report = report.useReducedMotion;
                            report = !report;
                            michal['animated'] = report;
                            michal = zuuluu.bind(tangon)(michal);
 139:
                            return entity;
                        }
                    };
                    michal = 300;
                    michal = report.bind(entity)(tangon, michal);
                    zuuluu['scrollToTopTimeout'] = michal;
 143:
                    return entity;
                }
            };
            entity['scrollToTop'] = michal;
            return entity;
        };
        zuuluu = report.bind(tangon)(michal, zuuluu);
        michal = tangon.useRef;
        tangon = michal.bind(tangon)(zuuluu);
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.useScrollToTop;
        michal = michal.bind(zuuluu)(tangon);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();