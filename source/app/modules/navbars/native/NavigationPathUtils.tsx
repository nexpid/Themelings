// app/modules/navbars/native/NavigationPathUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    tangon = function(argFoo) { // Original name: getSelectedSpecialNavigationPath
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.pathname;
            michal = _closure1_slot2;
            michal = michal.FRIENDS;
            if(!(zuuluu !== michal)) { _fun00002_ip = 30; continue _fun00001 }
 26:
            michal = undefined;
            return michal;
 30:
            entity = _closure1_slot3;
            entity = entity.FRIENDS;
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, report);
    verify = 0;
    report = option[verify];
    entity = undefined;
    report = golfie.bind(entity)(report);
    report = report.Routes;
    var _closure1_slot2 = report;
    report = {};
    report['FRIENDS'] = verify;
    oscard = 'FRIENDS';
    report[verify] = oscard;
    var _closure1_slot3 = report;
    oscard = 2;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/navbars/native/NavigationPathUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['SpecialNavigationPath'] = report;
    zuuluu['getSelectedSpecialNavigationPath'] = tangon;
    michal = function() { // Original name: useSelectedSpecialNavigationPath
        zuuluu = _closure1_slot4;
        tangon = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 1;
        entity = michal[entity];
        michal = undefined;
        tangon = tangon.bind(michal)(entity);
        entity = tangon.useLocation;
        entity = entity.bind(tangon)();
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useSelectedSpecialNavigationPath'] = michal;
    return entity;
})();