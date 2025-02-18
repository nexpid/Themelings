// app/modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
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
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useAppLauncherNavigation;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useNavigationTransitionEnded
        report = _closure1_slot3;
        tangon = report.useState;
        entity = false;
        oscard = tangon.bind(report)(entity);
        tangon = _closure1_slot2;
        golfie = undefined;
        entity = 2;
        oscard = tangon.bind(golfie)(oscard, entity);
        entity = 0;
        entity = oscard[entity];
        tangon = 1;
        oscard = oscard[tangon];
        var _closure2_slot0 = oscard;
        tangon = _closure1_slot4;
        option = tangon.bind(golfie)();
        var _closure2_slot1 = option;
        tangon = _closure1_slot0;
        verify = _closure1_slot1;
        zuuluu = 3;
        zuuluu = verify[zuuluu];
        tangon = tangon.bind(golfie)(zuuluu);
        zuuluu = tangon.useRoute;
        golfie = zuuluu.bind(tangon)();
        var _closure2_slot2 = golfie;
        tangon = report.useEffect;
        zuuluu = new Array(3);
        zuuluu[0] = option;
        zuuluu[1] = golfie;
        zuuluu[2] = oscard;
        michal = function() {
            tangon = _closure2_slot1;
            zuuluu = tangon.addListener;
            michal = 'transitionEnd';
            entity = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.getState;
                    michal = michal.bind(zuuluu)();
                    zuuluu = michal.routes;
                    michal = michal.index;
                    michal = zuuluu[michal];
                    zuuluu = michal.key;
                    michal = _closure2_slot2;
                    michal = michal.key;
                    if(!(zuuluu === michal)) { _fun00002_ip = 63; continue _fun00001 }
 50:
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    entity = true;
                    entity = zuuluu.bind(michal)(entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();