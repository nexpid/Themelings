// app/modules/auth/RedirectUnauthenticated.tsx
export default (function(_, argBar, __, argCor, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function() { // Original name: getRedirectPath
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = global;
            michal = entity.location;
            michal = michal.pathname;
            entity = entity.location;
            entity = entity.search;
            report = michal + entity;
            entity = _closure1_slot3;
            if(entity) { _fun00002_ip = 78; continue _fun00001 }
 40:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getLoginPath;
            entity = false;
            entity = zuuluu.bind(tangon)(report, entity);
            _fun00002_ip = 88; continue _fun00001;
 78:
            michal = _closure1_slot2;
            entity = michal.REGISTER;
 88:
            return entity;
        }
    };
    var _closure1_slot5 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Routes;
    var _closure1_slot2 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.CONFERENCE_MODE_ENABLED;
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot4 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/auth/RedirectUnauthenticated.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() { // Original name: RedirectUnauthenticated
        tangon = _closure1_slot4;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 5;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.Redirect;
        entity = {};
        report = _closure1_slot5;
        report = report.bind(zuuluu)();
        entity['to'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['getRedirectPath'] = michal;
    return entity;
})();